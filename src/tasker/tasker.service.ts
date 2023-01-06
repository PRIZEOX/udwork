import {
  forwardRef,
  Inject,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { OfferStatus } from '../enums/offer.status';
import { OffersService } from '../offers/offers.service';
import { InvestmentService } from '../investments/investment.service';
import { UsersService } from '../users/users.service';
import { MessageService } from '../messages/message.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { TaskType } from '../enums/task.type';
import { RegistryService } from '../registry/registry.service';
import { InvestmentStatus } from '../enums/investment.status';

@Injectable()
export class TaskerService implements OnModuleInit {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private schedulerRegistry: SchedulerRegistry,
    @Inject(forwardRef(() => OffersService))
    private readonly offersService: OffersService,
    private readonly usersService: UsersService,
    private readonly messageService: MessageService,
    @Inject(forwardRef(() => InvestmentService))
    private readonly investmentService: InvestmentService,
    private readonly registryService: RegistryService,
  ) {}
  async onModuleInit(): Promise<void> {
    const tasks = await this.taskRepository.find({
      relations: ['offer', 'investment'],
    });
    if (tasks.length > 0) {
      for (const task of tasks) {
        if (task.type === TaskType.OFFER_EXPIRE) {
          try {
            await this.startOfferDeadline(task.offer, task.deadline);
          } catch (e) {
            console.log('Offer job failed to start', task);
          }
        } else if (task.type === TaskType.INVEST_RESERVE) {
          try {
            await this.startInvestJob(task.investment, task.deadline);
          } catch (e) {
            console.log('Invest job failed to start', task);
          }
        }
      }
    }
  }
  private readonly logger = new Logger(TaskerService.name);
  public async scheduleOfferDeadline(offer, deadline) {
    await this.taskRepository.insert({
      type: TaskType.OFFER_EXPIRE,
      deadline,
      offer,
    });
    await this.startOfferDeadline(offer, deadline);
  }
  private async startOfferDeadline(offerDto, deadline) {
    const name = `offer-${offerDto.uuid}`;
    const job = new CronJob(deadline, async () => {
      this.logger.verbose(`job ${name} executed`);
      const offer = await this.offersService.findByUuid(offerDto.uuid);
      if (offer.status === OfferStatus.FULFILLED_MIN) {
        // срок вышел, но мин сумма собрана
        await this.investmentService.transferInvestmentsToAgreed(offer);
        await this.offersService.saveOffer({
          ...offer,
          status: OfferStatus.AGREEMENT,
          fulfillDate: new Date(),
        });
        await this.messageService.messageMinCollected(offer);
        await this.stopOfferJob(offer);
        const newOffer = await this.offersService.findByUuid(offer.uuid);
        const summed = newOffer.investments.reduce((acc, record) => {
          const { investor, sum, status } = record;
          if (!acc[investor.uuid]) acc[investor.uuid] = { sum: 0 };
          if (status === InvestmentStatus.AGREED) {
            acc[investor.uuid].sum += sum;
            acc[investor.uuid].inn = investor.orgInn
              ? investor.orgInn
              : investor.inn;
          }
          return acc;
        }, {});
        const entries = [];
        const now = new Date();
        const thisYear = now.getFullYear();
        for (const investorUuid in summed) {
          entries.push({
            number: `УД-${summed[investorUuid].inn}-${thisYear}-${newOffer.uuid}`,
            investor: { uuid: investorUuid },
            offer: { uuid: newOffer.uuid },
            sum: summed[investorUuid].sum,
          });
        }
        await this.registryService.saveRegistry(entries);
      } else if (offer.status === OfferStatus.PUBLISHED) {
        // истек срок действия оферты, мин сумма не собрана
        await this.offersService.saveOffer({
          ...offer,
          status: OfferStatus.REVOKED_TIME,
        });
        await this.investmentService.transferInvestmentsToCanceled(offer);
        await this.messageService.messageRevokedTime(offer);
      }
      await this.taskRepository.delete({
        offer,
      });
    });
    this.schedulerRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`job ${name} added`);
  }
  public async scheduleInvestJob(investment, deadline) {
    await this.taskRepository.insert({
      type: TaskType.INVEST_RESERVE,
      deadline,
      investment,
    });
    await this.startInvestJob(investment, deadline);
  }
  private async startInvestJob(investment, deadline) {
    const name = `invest-${investment.uuid}`;
    const job = new CronJob(deadline, async () => {
      const offer = await this.offersService.findByUuid(investment.offer.uuid);
      this.logger.verbose(`job ${name} executed`);
      if (offer.status === OfferStatus.PUBLISHED) {
        await this.investmentService.preInvest(investment);
        await this.messageService.messageInvestorPreInvest(investment);
      } else if (offer.status === OfferStatus.FULFILLED_MIN) {
        await this.investmentService.invest(investment);
        await this.messageService.messageInvestorInvest(investment);
      }
      await this.taskRepository.delete({
        investment,
      });
    });
    this.schedulerRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`job ${name} added`);
  }
  public async stopOfferJob(offer) {
    const name = `offer-${offer.uuid}`;
    this.schedulerRegistry.deleteCronJob(name);
    await this.taskRepository.delete({
      offer,
    });
    this.logger.warn(`job ${name} deleted!`);
  }
  public async stopInvestJob(investment) {
    const name = `invest-${investment.uuid}`;
    this.schedulerRegistry.deleteCronJob(name);
    await this.taskRepository.delete({
      investment,
    });
    this.logger.warn(`job ${name} deleted!`);
  }
}
