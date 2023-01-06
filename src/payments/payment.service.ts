import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Payment } from './payment.entity';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { OffersService } from '../offers/offers.service';
import { OfferStatus } from '../enums/offer.status';
@Injectable()
export class PaymentService extends TypeOrmCrudService<Payment> {
  constructor(
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => OffersService))
    private readonly offersService: OffersService,
  ) {
    super(paymentsRepository);
  }
  public async findByUuid(uuid: number): Promise<Payment | undefined> {
    return await this.paymentsRepository.findOne({
      where: { uuid },

      relations: [
        'offer',
        'offer.investments',
        'offer.lender',
        'offer.registryEntries',
        'offer.registryEntries.investor',
      ],
    });
  }
  public async lenderPayment(paymentUuid): Promise<void> {
    const payment = await this.findByUuid(paymentUuid);
    const payments = await this.paymentsRepository.find({
      where: { offer: payment.offer },
    });
    const completed = payments.reduce((acc, payment) => {
      if (!payment.completed) acc = false;
      return acc;
    }, true);
    if (completed) {
      await this.offersService.saveOffer({
        uuid: payment.offer.uuid,
        status: OfferStatus.ARCHIVED,
      });
    }
    for (const entry of payment.offer.registryEntries) {
      await this.usersService.saveUser({
        uuid: entry.investor.uuid,
        mainAccount:
          +entry.investor.mainAccount +
          Math.round(
            ((+payment.sum * entry.sum) / payment.offer.currentVolume) * 100,
          ) /
            100,
        returnedAccount:
          +entry.investor.returnedAccount +
          Math.round(
            ((+payment.sum * entry.sum) / payment.offer.currentVolume) * 100,
          ) /
            100,
      });
    }
  }
  public async savePayment(payment): Promise<Payment | null> {
    return await this.paymentsRepository.save(payment);
  }
}
