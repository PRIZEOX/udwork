/* eslint-disable prettier/prettier */
import {
  forwardRef,
  HttpException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Investment } from './investment.entity';
import { UsersService } from '../users/users.service';
import { OffersService } from '../offers/offers.service';
import { OfferStatus } from '../enums/offer.status';
import { InvestmentStatus } from '../enums/investment.status';
import { MessageService } from '../messages/message.service';
import { User } from '../users/user.entity';
import { TaskerService } from '../tasker/tasker.service';
import { Offer } from '../offers/offer.entity';
import { ConfigService } from '@nestjs/config';
import { RegistryService } from '../registry/registry.service';

@Injectable()
export class InvestmentService extends TypeOrmCrudService<Investment> {
  constructor(
    @InjectRepository(Investment)
    private investmentsRepository: Repository<Investment>,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => OffersService))
    private readonly offersService: OffersService,
    private readonly messageService: MessageService,
    private readonly taskerService: TaskerService,
    private readonly configService: ConfigService,
    private readonly registryService: RegistryService,
  ) {
    super(investmentsRepository);
  }
  private addWorkDays(startDate: Date, days: number) {
    if (isNaN(days)) {
      console.log('Value provided for "days" was not a number');
      return;
    }
    if (!(startDate instanceof Date)) {
      console.log('Value provided for "startDate" was not a Date object');
      return;
    }
    // Get the day of the week as a number (0 = Sunday, 1 = Monday, .... 6 = Saturday)
    const dow = startDate.getDay();
    let daysToAdd: number = days;
    // If the current day is Sunday add one day
    if (dow == 0) daysToAdd++;
    // If the start date plus the additional days falls on or after the closest Saturday calculate weekends
    if (dow + daysToAdd >= 6) {
      //Subtract days in current working week from work days
      const remainingWorkDays = daysToAdd - (5 - dow);
      //Add current working week's weekend
      daysToAdd += 2;
      if (remainingWorkDays > 5) {
        //Add two days for each working week by calculating how many weeks are included
        daysToAdd += 2 * Math.floor(remainingWorkDays / 5);
        //Exclude final weekend if remainingWorkDays resolves to an exact number of weeks
        if (remainingWorkDays % 5 == 0) daysToAdd -= 2;
      }
    }
    startDate.setDate(startDate.getDate() + daysToAdd);
    return startDate;
  }
  private async transferInvestmentsToPreInvested(offer) {
    for (const investment of offer.investments) {
      if (investment.status === InvestmentStatus.INVESTED) {
        investment.status = InvestmentStatus.PRE_INVESTED;
        await this.investmentsRepository.save(investment);
      }
    }
  }
  private async transferInvestmentsToInvested(offer) {
    for (const investment of offer.investments) {
      if (investment.status === InvestmentStatus.PRE_INVESTED) {
        investment.status = InvestmentStatus.INVESTED;
        await this.investmentsRepository.save(investment);
        const user = await this.usersService.findByUuid(
          investment.investor.uuid,
        );
        await this.usersService.saveUser({
          uuid: user.uuid,
          preInvestAccount: +user.preInvestAccount - +investment.sum,
          investAccount: +user.investAccount + +investment.sum,
        });
      }
    }
  }
  public async transferInvestmentsToAgreed(offer) {
    for (const investment of offer.investments) {
      const user = await this.usersService.findByUuid(investment.investor.uuid);
      if (investment.status === InvestmentStatus.INVESTED) {
        investment.status = InvestmentStatus.AGREED;
        await this.investmentsRepository.save(investment);
        await this.usersService.saveUser({
          uuid: user.uuid,
          investAccount: +user.investAccount - +investment.sum,
          agreedAccount: +user.agreedAccount + +investment.sum,
        });
      } else if (investment.status === InvestmentStatus.RESERVED) {
        investment.status = InvestmentStatus.AGREED;
        await this.investmentsRepository.save(investment);
        await this.usersService.saveUser({
          uuid: user.uuid,
          reserveAccount: +user.reserveAccount - +investment.sum,
          agreedAccount: +user.agreedAccount + +investment.sum,
        });
      }
    }
  }
  public async transferInvestmentsToCanceled(offer) {
    for (const investment of offer.investments) {
      const user = await this.usersService.findByUuid(investment.investor.uuid);
      if (investment.status === InvestmentStatus.PRE_INVESTED) {
        investment.status = InvestmentStatus.REVOKED;
        await this.investmentsRepository.save(investment);
        await this.usersService.saveUser({
          uuid: user.uuid,
          preInvestAccount: +user.preInvestAccount - +investment.sum,
          limitAccount: +user.limitAccount - +investment.sum,
          mainAccount: +user.mainAccount + +investment.sum,
        });
      } else if (investment.status === InvestmentStatus.RESERVED) {
        investment.status = InvestmentStatus.REVOKED;
        await this.investmentsRepository.save(investment);
        await this.usersService.saveUser({
          uuid: user.uuid,
          reserveAccount: +user.reserveAccount - +investment.sum,
          limitAccount: +user.limitAccount - +investment.sum,
          mainAccount: +user.mainAccount + +investment.sum,
        });
      }
    }
  }
  private async checkCompletion(offer) {
    // собрана максимальная сумма офера
    if (+offer.currentVolume >= +offer.maxVolume) {
      await this.transferInvestmentsToAgreed(offer);
      await this.offersService.saveOffer({
        ...offer,
        status: OfferStatus.AGREEMENT,
        fulfillDate: new Date(),
      });
      await this.messageService.messageMaxCollected(offer);
      await this.taskerService.stopOfferJob(offer);
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
      // собрана минимальная сумма офера
    } else if (+offer.currentVolume >= +offer.minVolume) {
      await this.transferInvestmentsToInvested(offer);
      await this.offersService.saveOffer({
        ...offer,
        status: OfferStatus.FULFILLED_MIN,
      });
      await this.messageService.messageMinCollected(offer);
    }
  }
  public async saveInvestment(user, investmentDto): Promise<Investment | null> {
    // сохраним инвестицию
    const response = await this.investmentsRepository.save(investmentDto);
    // возьмем ее заново из базы
    const investment = await this.investmentsRepository.findOne({
      where: { uuid: response.uuid },
      relations: ['offer', 'offer.lender', 'investor'],
    });
    // переведем сумму инвеста из мэйн в резерв
    await this.usersService.transferMainToReserved(investment);
    // оповестим лендера об инвестиции
    await this.messageService.messageLenderNewInvestment(investment);
    // запустим джобу инвеста 5 рабдней на отмену
    let deadline;
    if (this.configService.get('TEST_TIME') === '1') {
      // в тестовом режиме 3 мин на отмену инвестиции
      deadline = new Date(investment.createdAt.getTime() + 3 * 60000);
    } else {
      deadline = this.addWorkDays(investment.createdAt, 5);
    }
    await this.taskerService.scheduleInvestJob(investment, deadline);
    // увеличим сумму офера
    const offer = await this.offersService.incrementOfferSum(investment);
    // если достигнута веха (мин или макс сумма) выполним движ
    await this.checkCompletion(offer);
    return response;
  }
  public async preInvest(investment) {
    const user = await this.usersService.findByUuid(investment.investor.uuid);
    await this.usersService.saveUser({
      uuid: user.uuid,
      reserveAccount: +user.reserveAccount - +investment.sum,
      preInvestAccount: +user.preInvestAccount + +investment.sum,
    });
    await this.investmentsRepository.save({
      uuid: investment.uuid,
      status: InvestmentStatus.PRE_INVESTED,
    });
  }
  public async invest(investment) {
    const user = await this.usersService.findByUuid(investment.investor.uuid);
    await this.usersService.saveUser({
      uuid: user.uuid,
      reserveAccount: +user.reserveAccount - +investment.sum,
      investAccount: +user.investAccount + +investment.sum,
    });
    await this.investmentsRepository.save({
      uuid: investment.uuid,
      status: InvestmentStatus.INVESTED,
    });
  }
  public async cancelInvestment(uuid): Promise<void | null> {
    const investment = await this.investmentsRepository.findOne({
      where: { uuid },
      relations: ['investor', 'offer'],
    });
    const user = investment.investor;
    await this.usersService.saveUser({
      uuid: user.uuid,
      mainAccount: +user.mainAccount + +investment.sum,
      reserveAccount: +user.reserveAccount - +investment.sum,
      limitAccount: +user.limitAccount - +investment.sum,
    });
    const offer = await this.offersService.findByUuid(investment.offer.uuid);
    const currentVolume = +offer.currentVolume - +investment.sum;
    if (+currentVolume < +offer.maxVolume) {
      await this.offersService.saveOffer({
        ...offer,
        status: OfferStatus.FULFILLED_MIN,
        currentVolume,
      });
    }
    if (+currentVolume < +offer.minVolume) {
      await this.offersService.saveOffer({
        status: OfferStatus.PUBLISHED,
        ...offer,
        currentVolume,
      });
      await this.transferInvestmentsToPreInvested(offer);
    } else {
      await this.offersService.saveOffer({
        ...offer,
        currentVolume,
      });
    }
    await this.taskerService.stopInvestJob(investment);
    await this.messageService.messageCancelInvestment(offer, investment);
    // не сохраняем тут, она сохранится в основном контроллере
    // return await this.investmentsRepository.save(investment);
  }
  public async seed(): Promise<void> {
    // await this.investmentsRepository.save(messageSeed);
  }
}
