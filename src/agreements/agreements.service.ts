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
import { Agreement } from './agreement.entity';
import { agreementsSeed } from './agreements.seed';
import { ConfigService } from '@nestjs/config';
import { AgreementType } from '../enums/agreement.type';
import { UsersService } from '../users/users.service';
import { Role } from '../enums/role';
import { UserType } from '../enums/user.type';
import * as htmlpdf from 'html-pdf';
import { invoice } from '../templates/invoice';
import { User } from '../users/user.entity';
import { pril2 } from '../templates/pril2';
import { pril3 } from '../templates/pril3';
import { pril4 } from '../templates/pril4';
import { UserStatus } from '../enums/user.status';
import { pril6 } from '../templates/pril6';
import { OfferStatus } from '../enums/offer.status';
import { OffersService } from '../offers/offers.service';
import { pril5 } from '../templates/pril5';
import { InvestmentService } from '../investments/investment.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const numcap = require('numcap');
const logger = new Logger('AgreementsService');
@Injectable()
export class AgreementsService extends TypeOrmCrudService<Agreement> {
  constructor(
    @InjectRepository(Agreement)
    private agreementsRepository: Repository<Agreement>,
    private readonly configService: ConfigService,
    private readonly offersService: OffersService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly investmentService: InvestmentService,
  ) {
    super(agreementsRepository);
  }
  private getOperator(phone) {
    return new Promise(function (resolve, reject) {
      try {
        const finder = new numcap();
        finder.getData(phone, function (err, data) {
          if (err) throw new HttpException(err.message, 406);
          if (!data)
            throw new HttpException(
              'Телефон не найден в базе российских номеров',
              406,
            );
          resolve(data);
        });
      } catch (e) {
        throw new HttpException(
          'Телефон не найден в базе российских номеров',
          406,
        );
      }
    });
  }
  public async createInvoice(uuid, sum): Promise<Agreement | 401 | 404 | 406> {
    const user = await this.usersService.findByUuid(uuid);
    let lender, investor, name, userName;
    if (user.role === Role.INVESTOR) {
      investor = user;
      name = 'Пополнение лицевого счета №' + user.uuid;
      userName =
        user.type === UserType.FL
          ? user.firstName + ' ' + user.middleName + ' ' + user.lastName
          : user.orgName;
    } else {
      lender = user;
      name =
        'Регистрационный платеж при присоединении к договору об оказании услуг по привлечению инвестиций.';
      userName = user.orgInn ? user.orgInn : user.inn + ', ' + user.orgName;
      sum = 1499;
    }
    const agreement = await this.saveAgreement({
      type: AgreementType.INVOICE,
      // date: new Date(),
      lender,
      investor,
      sum,
    });
    const type = AgreementType.LENDER_OFERTA;
    const pdfPath = `static/generated/invoice-${agreement.uuid}.pdf`;
    const pdf = `/generated/invoice-${agreement.uuid}.pdf`;
    const invoiceOps = {
      number: agreement.uuid,
      dateString: agreement.createdAt.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      sumString: sum.toString() + ',00',
      userName,
      name,
    };
    return new Promise((resolve, reject) => {
      htmlpdf
        .create(invoice(invoiceOps), {
          format: 'A4', // allowed units: A3, A4, A5, Legal, Letter, Tabloid
          orientation: 'portrait',
          childProcessOptions: {
            env: {
              OPENSSL_CONF: '/dev/null',
            },
          },
        })
        .toFile(pdfPath, async (err) => {
          if (err) {
            logger.error(err);
          }
          await this.saveAgreement({
            uuid: agreement.uuid,
            pdf,
          });
          resolve(agreement);
        });
    });
  }
  public async saveAgreement(agreement): Promise<Agreement | null> {
    return await this.agreementsRepository.save(agreement);
  }
  public async signUserInfo({ phone, code }): Promise<User | 401 | 404 | 406> {
    const user = await this.usersService.findByPhone(phone);
    const operator = await this.getOperator(user.phone);
    if (user.code === code) {
      let template;
      let type;
      let investor, lender;
      if (user.role === Role.INVESTOR) {
        investor = user;
        if (user.type === UserType.FL) {
          template = pril2;
          type = AgreementType.APPLY_INVESTOR_FL;
        } else {
          template = pril3;
          type = AgreementType.APPLY_INVESTOR_UL;
        }
      } else {
        lender = user;
        template = pril4;
        type = AgreementType.APPLY_LENDER;
      }
      const pdfPath = `static/generated/${user.uuid}-register.pdf`;
      const pdf = `/generated/${user.uuid}-register.pdf`;
      return new Promise((resolve, reject) => {
        htmlpdf
          .create(template(user, code, operator), {
            format: 'A4', // allowed units: A3, A4, A5, Legal, Letter, Tabloid
            orientation: 'portrait',
            childProcessOptions: {
              env: {
                OPENSSL_CONF: '/dev/null',
              },
            },
          })
          .toFile(pdfPath, async (err) => {
            if (err) {
              logger.error(err);
            }
            const agreement = await this.saveAgreement({
              type,
              pdf,
              date: new Date(),
              investor,
              lender,
            });
            const status = UserStatus.APPROVAL;
            resolve(
              await this.usersService.saveUser({
                uuid: user.uuid,
                status,
              }),
            );
          });
      });
    } else {
      return 401;
    }
  }
  public async signOffer({
    phone,
    code,
    offerUuid,
  }): Promise<void | 401 | 404 | 406> {
    const user = await this.usersService.findByPhone(phone);
    const operator = await this.getOperator(user.phone);
    const offer = await this.offersService.findByUuid(offerUuid);
    const type = AgreementType.LENDER_OFERTA;
    if (user.code === code) {
      const pdfPath = `static/generated/offer-${offerUuid}-${code}.pdf`;
      const pdf = `/generated/offer-${offerUuid}-${code}.pdf`;
      const fio = `${user.firstName} ${user.middleName} ${user.lastName}`;
      htmlpdf
        .create(pril6(user, code, operator, offer, fio), {
          format: 'A4', // allowed units: A3, A4, A5, Legal, Letter, Tabloid
          orientation: 'portrait',
          childProcessOptions: {
            env: {
              OPENSSL_CONF: '/dev/null',
            },
          },
        })
        .toFile(pdfPath, async (err) => {
          if (err) {
            logger.error(err);
          }
          const agreement = await this.saveAgreement({
            type,
            pdf,
            date: new Date(),
            lender: user,
          });
          await this.offersService.saveOffer({
            uuid: offerUuid,
            status: OfferStatus.APPROVAL,
            agreement,
          });
        });
    } else {
      return 401;
    }
  }
  public async signAccept(
    userUuid,
    investment,
    code,
  ): Promise<void | 401 | 404 | 406> {
    const user = await this.usersService.findByUuid(userUuid);
    // todo: Переделать через validation pipe
    if (+investment.sum > +user.mainAccount - +user.reserveAccount) {
      throw new HttpException('Не достаточно средств на ЛС', 400);
    }
    await this.investmentService.saveInvestment(user, investment);
    const operator = await this.getOperator(user.phone);
    const offer = await this.offersService.findByUuid(investment.offer.uuid);
    const type = AgreementType.INVESTOR_CLAIM;
    const name =
      user.type === UserType.FL || user.type === UserType.IP
        ? user.firstName + ' ' + user.middleName + ' ' + user.lastName
        : user.orgName;
    const lpiName =
      offer.lender.type === UserType.IP
        ? offer.lender.firstName +
          ' ' +
          offer.lender.middleName +
          ' ' +
          offer.lender.lastName +
          ', ' +
          offer.lender.inn
          ? offer.lender.inn
          : offer.lender.orgInn
        : `${offer.lender.orgName}, ${offer.lender.orgInn}`;
    if (user.code === code) {
      const pdfPath = `static/generated/accept-${investment.offer.uuid}-${code}.pdf`;
      const pdf = `/generated/accept-${investment.offer.uuid}-${code}.pdf`;
      htmlpdf
        .create(
          pril5(user, code, operator, offer, name, investment.sum, lpiName),
          {
            format: 'A4', // allowed units: A3, A4, A5, Legal, Letter, Tabloid
            orientation: 'portrait',
            childProcessOptions: {
              env: {
                OPENSSL_CONF: '/dev/null',
              },
            },
          },
        )
        .toFile(pdfPath, async (err) => {
          if (err) {
            logger.error(err);
          }
          const agreement = await this.saveAgreement({
            type,
            pdf,
            date: new Date(),
            investor: user,
          });
        });
    } else {
      return 401;
    }
  }
}
