/* eslint-disable prettier/prettier */
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Offer } from './offer.entity';
import { ConfigService } from '@nestjs/config';
import { OfferStatus } from '../enums/offer.status';
import { InvestmentService } from '../investments/investment.service';
import { Picture } from '../pictures/picture.entity';
import { PicturesService } from '../pictures/pictures.service';
import { createHash } from 'crypto';
import { MessageService } from '../messages/message.service';
import { InvestmentStatus } from '../enums/investment.status';
import { TaskerService } from '../tasker/tasker.service';
import { UsersService } from '../users/users.service';
import { PaymentService } from '../payments/payment.service';

@Injectable()
export class OffersService extends TypeOrmCrudService<Offer> {
  constructor(
    @InjectRepository(Offer)
    private offersRepository: Repository<Offer>,
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => InvestmentService))
    private readonly investmentService: InvestmentService,
    @Inject(forwardRef(() => TaskerService))
    private readonly taskerService: TaskerService,
    private readonly picturesService: PicturesService,
    private readonly messageService: MessageService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
  ) {
    super(offersRepository);
  }
  public async findByUuid(uuid: number): Promise<Offer | undefined> {
    return await this.offersRepository.findOne({
      where: { uuid },
      relations: [
        'lender',
        'investments',
        'investments.investor',
        //'publicPictures',
        'privatePictures',
      ],
    });
  }
  public async saveOffer(offer): Promise<Offer | null> {
    return await this.offersRepository.save(offer);
  }
  public async savePublicPicture({ uuid }, file): Promise<Picture | null> {
    return await this.picturesService.savePublic({
      path: file.path.replace('static', ''),
      origin: file.originalname,
    });
  }
  public async savePrivatePicture({ uuid }, file): Promise<Picture | null> {
    return await this.picturesService.savePublic({
      path: file.path.replace('static', ''),
      origin: file.originalname,
    });
  }
  public async savePublicPictures(uuid, files): Promise<void | null> {
    const { lender } = await this.findByUuid(uuid);
    for (const file of files) {
      const extension = file.name.split('.').pop();
      const hash = createHash('sha256').update(file.name).digest('hex');
      const filename = lender.uuid + '-' + hash + '.' + extension;
      const path = '/upload/public/' + filename;
      const picture = await this.picturesService.find(path);
      if (picture) {
        await this.picturesService.savePublic({
          id: picture.id,
          offerPublic: { uuid },
          origin: file.name,
        });
      }
    }
  }
  public async savePrivatePictures(uuid, files): Promise<void | null> {
    const { lender } = await this.findByUuid(uuid);
    for (const file of files) {
      const extension = file.name.split('.').pop();
      const hash = createHash('sha256').update(file.name).digest('hex');
      const filename = lender.uuid + '-' + hash + '.' + extension;
      const path = '/upload/private/' + filename;
      const picture = await this.picturesService.find(path);
      if (picture) {
        await this.picturesService.savePrivate({
          id: picture.id,
          offerPrivate: { uuid },
          origin: file.name,
        });
      }
    }
  }
  public async deleteOffer(uuid): Promise<number | null> {
    await this.offersRepository.delete({ uuid });
    return uuid;
  }
  public async declineOffer(
    user,
    { uuid, declineReason },
  ): Promise<Offer | null> {
    const offer = await this.findByUuid(uuid);
    await this.messageService.send(
      `Ваша оферта #${offer.uuid} отправлена на доработку`,
      `
      Причина: ${declineReason},
    `,
      offer.lender,
    );
    return await this.offersRepository.save({
      uuid,
      declineReason,
      status: OfferStatus.RETURNED,
      publicPictures: offer.publicPictures,
      privatePictures: offer.privatePictures,
    });
  }
  public async publishOffer(user, { uuid, rating }): Promise<Offer | null> {
    const offer = await this.offersRepository.findOne({
      where: { uuid },
      relations: ['lender', 'publicPictures', 'privatePictures'],
    });
    const today = new Date();
    const year = today.getFullYear();
    const number = `УД-${year.toString()}-${
      offer.lender.orgInn ? offer.lender.orgInn : offer.lender.inn
    }-${offer.uuid}`;
    let date = new Date();
    let deadline;
    if (this.configService.get('TEST_TIME') === '1') {
      // в тестовом режиме 15 мин на истечение офера
      deadline = new Date(date.getTime() + 5 * 60000);
    } else {
      deadline = new Date(date.setDate(date.getDate() + offer.offerPeriodDays));
    }
    date = new Date();
    await this.taskerService.scheduleOfferDeadline(offer, deadline);
    await this.messageService.messageLenderOfferPublished(number, offer);
    const investors = await this.usersService.findInvestors();
    for (const investor of investors) {
      await this.messageService.messageInvestorOfferPublished(
        number,
        investor,
        offer,
      );
    }
    return await this.offersRepository.save({
      uuid,
      status: OfferStatus.PUBLISHED,
      date,
      deadline,
      number,
      rating,
      publicPictures: offer.publicPictures,
      privatePictures: offer.privatePictures,
    });
  }
  public async cancelOffer(uuid: number): Promise<void | undefined> {
    const offer = await this.offersRepository.findOne({
      where: { uuid },
      relations: ['investments', 'investments.investor'],
    });
    // await this.usersService.transferAccountsToMain(offer);
    await this.saveOffer({
      status: OfferStatus.REVOKED_TIME,
      ...offer,
    });
    await this.investmentService.transferInvestmentsToCanceled(offer);
    await this.messageService.messageRevokedLender(offer);
    for (const investment of offer.investments) {
      if (investment.status !== InvestmentStatus.REVOKED) {
        await this.messageService.send(
          `Оферта ${offer.number} отозвана заемщиком`,
          `
        Резерв отменен. Причина отзыва: ${offer.declineReason}
      `,
          investment.investor,
        );
        await this.investmentService.cancelInvestment(investment.uuid);
      }
    }
  }
  public async incrementOfferSum(investment) {
    let offer = await this.findByUuid(investment.offer.uuid);
    const currentVolume = +offer.currentVolume + +investment.sum;
    await this.saveOffer({
      uuid: investment.offer.uuid,
      currentVolume,
      publicPictures: offer.publicPictures,
      privatePictures: offer.privatePictures,
    });
    offer = await this.findByUuid(investment.offer.uuid);
    return offer;
  }
  public async pay({ uuid: offerUuid }) {
    const offer = await this.findByUuid(offerUuid);
    await this.offersRepository.save({
      ...offer,
      status: OfferStatus.COMPLETED,
    });
    const monthlyPayment = this.getMonthlyPayment(
      offer.currentVolume,
      offer.investPeriodDays,
      offer.interestRate,
    );
    const summed = offer.investments.reduce((acc, record) => {
      const { investor, sum, status } = record;
      if (!acc[investor.uuid]) acc[investor.uuid] = { sum: 0 };
      if (status !== InvestmentStatus.REVOKED) {
        acc[investor.uuid].sum += sum;
      }
      return acc;
    }, {});
    const investors = [];
    for (const investorUuid in summed) {
      investors.push({
        uuid: investorUuid,
        sum: summed[investorUuid].sum,
      });
    }
    const investorShares = investors.map((inv) => {
      return {
        investorUuid: inv.uuid,
        share: inv.sum / offer.currentVolume,
      };
    });
    const investorPayments = investorShares.map((inv) => {
      return {
        investorUuid: inv.investorUuid,
        payment: Math.round(inv.share * monthlyPayment * 100) / 100,
      };
    });
    const payments = [];
    for (let month = 1; month <= offer.investPeriodDays; month++) {
      const date = new Date(offer.fulfillDate);
      const nextDate = new Date(date.setMonth(date.getMonth() + month));
      payments.push({
        date: nextDate,
        sum: monthlyPayment,
        offer,
      });
    }
    await this.paymentService.savePayment(payments);
  }
  private getMonthlyPayment(sum: number, period: number, rate: number) {
    // ставка в месяц
    const i = rate / 12 / 100;
    console.log('ставка', rate);
    console.log('ставка в месяц', i);
    console.log('сумма', sum);
    console.log('период', period);
    // коэффициент аннуитета
    const coefficient =
      (i * Math.pow(1 + i, period)) / (Math.pow(1 + i, period) - 1);
    console.log('коеф', coefficient);
    // итог
    const result = sum * coefficient;
    console.log('монсли', result);
    return Math.round(result * 100) / 100;
  }
}
