import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Message } from './message.entity';
import { UsersService } from '../users/users.service';
import { OffersService } from '../offers/offers.service';
import { MessageStatus } from '../enums/message.status';
import { User } from '../users/user.entity';
import { MailerService } from '../mailer/mailer.service';
import { Offer } from '../offers/offer.entity';
import { InvestmentStatus } from '../enums/investment.status';
import { Investment } from '../investments/investment.entity';
@Injectable()
export class MessageService extends TypeOrmCrudService<Message> {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => OffersService))
    private readonly offersService: OffersService,
    private readonly mailerService: MailerService,
  ) {
    super(messagesRepository);
  }
  private sortInvestors(a, b) {
    if (a.investor.uuid > b.investor.uuid) return 1; // если первое значение больше второго
    if (a.investor.uuid == b.investor.uuid) return 0; // если равны
    if (a.investor.uuid < b.investor.uuid) return -1; // если первое значение меньше второго
  }
  public async read(uuid) {
    return await this.messagesRepository.save({
      uuid,
      status: MessageStatus.READ,
    });
  }
  public async send(topic, text, user: User) {
    // await this.mailerService.sendMessage(topic, text, user);
    return await this.messagesRepository.save({
      topic,
      text,
      user: {
        uuid: user.uuid,
      },
    });
  }
  public async messageDirectorMinCollected(offer) {
    await this.send(
      `По оферте #${offer.number} собрана минимальная сумма`,
      `
      Собрано: ${offer.currentVolume} р.
    `,
      {
        uuid: 1,
        email: 'radzhabovBF@outlook.com',
      },
    );
  }
  public async messageDirectorMaxCollected(offer) {
    await this.send(
      `По оферте #${offer.number} собрана максимальная сумма`,
      `
      Собрано: ${offer.currentVolume} р.
    `,
      {
        uuid: 1,
        email: 'radzhabovBF@outlook.com',
      },
    );
  }
  public async messageLenderNewInvestment(investment) {
    await this.send(
      `По вашей оферте №${investment.offer.number} совершено инвестирование (резерв)`,
      `
      Сумма: ${investment.sum}.
    `,
      investment.offer.lender,
    );
  }
  public async messageInvestorPreInvest(investment) {
    await this.send(
      `Резерв по инвестиции №${investment.uuid} переведен в статус пре-инвестировано. Ожидается сбор минимальной суммы оферты.`,
      `
      Сумма: ${investment.sum}.
    `,
      investment.investor,
    );
  }
  public async messageInvestorInvest(investment) {
    await this.send(
      `Резерв по инвестиции №${investment.uuid} переведен в статус инвестировано. Ожидается сбор максимальной суммы оферты либо истечения ее срока.`,
      `
      Сумма: ${investment.sum}.
    `,
      investment.investor,
    );
  }
  public async messageLenderOfferPublished(number: string, offer: Offer) {
    await this.send(
      'Оферта одобрена',
      `
      Ваша оферта опубликована под номером ${number}. Срок действия предложения ${offer.offerPeriodDays} дней. 
    `,
      offer.lender,
    );
  }
  public async messageInvestorOfferPublished(
    number: string,
    investor: User,
    offer: Offer,
  ) {
    await this.send(
      'Новое инвестиционное предложение',
      `
      Опубликовано новое предложение ${number} с максимальной суммой инвестиций ${offer.maxVolume} рублей. Срок действия предложения ${offer.offerPeriodDays} дней. 
    `,
      investor,
    );
  }
  public async messageMinCollected(offer: Offer) {
    await this.messageDirectorMinCollected(offer);
    await this.send(
      `По вашей оферте №${offer.number} собрана минимальная сумма!`,
      `
      Текущая сумма инвестиций по оферте: ${offer.currentVolume} р.
    `,
      offer.lender,
    );
    let prev: User = { uuid: 0 };
    offer.investments.sort(this.sortInvestors);
    for (const inv of offer.investments) {
      if (inv.investor.uuid === prev.uuid) {
        continue;
      }
      if (inv.status !== InvestmentStatus.REVOKED) {
        await this.send(
          `По оферте №${offer.number} собрана минимальная сумма`,
          `
        Текущая сумма инвестиций по оферте: ${offer.currentVolume} р.
      `,
          inv.investor,
        );
      }
      prev = inv.investor;
    }
  }
  public async messageMaxCollected(offer: Offer) {
    await this.messageDirectorMaxCollected(offer);
    await this.send(
      `По вашей оферте №${offer.number} собрана максимальная сумма!`,
      `
      Текущая сумма инвестиций по оферте: ${offer.currentVolume} р.
    `,
      offer.lender,
    );
    let prev: User = { uuid: 0 };
    offer.investments.sort(this.sortInvestors);
    for (const inv of offer.investments) {
      if (inv.investor.uuid === prev.uuid) {
        continue;
      }
      if (inv.status !== InvestmentStatus.REVOKED) {
        await this.send(
          `По оферте №${offer.number} собрана максимальная сумма`,
          `
        Текущая сумма инвестиций по оферте: ${offer.currentVolume} р.
      `,
          inv.investor,
        );
      }
      prev = inv.investor;
    }
  }
  public async messageRevokedTime(offer: Offer) {
    await this.send(
      `У вашей оферты №${offer.number} истек срок размещения`,
      `
      Минимальная сумма не собрана.
    `,
      offer.lender,
    );
    let prev: User = { uuid: 0 };
    offer.investments.sort(this.sortInvestors);
    for (const inv of offer.investments) {
      if (inv.investor.uuid === prev.uuid) {
        continue;
      }
      if (inv.status !== InvestmentStatus.REVOKED) {
        await this.send(
          `У оферты №${offer.number} истек срок размещения`,
          `
        Минимальная сумма не собрана.
      `,
          inv.investor,
        );
      }
      prev = inv.investor;
    }
  }
  public async messageRevokedLender(offer: Offer) {
    let prev: User = { uuid: 0 };
    offer.investments.sort(this.sortInvestors);
    for (const inv of offer.investments) {
      if (inv.investor.uuid === prev.uuid) {
        continue;
      }
      if (inv.status !== InvestmentStatus.REVOKED) {
        await this.send(
          `Оферта №${offer.number} отозвана заемщиком`,
          `
        Резерв и предварительные инвестиции отменены. Причина отзыва: ${offer.declineReason}
      `,
          inv.investor,
        );
      }
      prev = inv.investor;
    }
  }
  async messageCancelInvestment(offer: Offer, investment: Investment) {
    await this.send(
      `По вашей оферте #${offer.number} отменен резерв инвестирования`,
      `
      Сумма: ${investment.sum}.
    `,
      offer.lender,
    );
  }
}
