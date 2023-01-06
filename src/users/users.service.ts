/* eslint-disable prettier/prettier */
import {
  forwardRef,
  HttpException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Not, Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './user.entity';
import { usersSeed } from './users.seed';
import { ConfigService } from '@nestjs/config';
import { UserStatus } from '../enums/user.status';
import { Picture } from '../pictures/picture.entity';
import { PicturesService } from '../pictures/pictures.service';
import { Role } from '../enums/role';
import { createHash } from 'crypto';
import { UserUpdateDto } from './user.update.dto';
import { InvestmentStatus } from '../enums/investment.status';
import { Investment } from '../investments/investment.entity';
import { MailerService } from '../mailer/mailer.service';
import moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import SMSru from 'sms_ru';
const logger = new Logger('UsersService');
@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  saveUserPicture: any;
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly configService: ConfigService,
    // private readonly picturesService: PicturesService,
    @Inject(forwardRef(() => MailerService))
    private readonly mailerService: MailerService,
  ) {
    super(usersRepository);
    this.sms = new SMSru(this.configService.get<string>('SMS_API_ID'));
    this.prod = this.configService.get<string>('SWAGGER') !== '1';
  }
  private sms;
  private readonly prod: boolean;
  private normalizePhone(phone) {
    const stripped = phone.replace(/[^0-9]/g, '');
    let normPhone;
    if (stripped[0] === '8' || stripped[0] === '7') {
      normPhone = stripped.substring(1);
    } else {
      normPhone = stripped;
    }
    return normPhone;
  }
  public async notifyUser(
    userUuid: number,
    { status, declineReason },
  ): Promise<void> {
    const user = await this.findByUuid(userUuid);
    await this.mailerService.sendStatusChanged(user, status, declineReason);
  }
  public async findByEmail(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({
      where: { email, status:Not(UserStatus.PRE_ACCOUNT) },
    });
  }
  public async findByEmailDisabled(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({
      where: { email,status: UserStatus.PRE_ACCOUNT },
    });
  }
  public async findByPhone(phone: string): Promise<User | undefined> {
    logger.log(this.normalizePhone(phone));
    return await this.usersRepository.findOne({
      where:{phone:this.normalizePhone(phone),status: Not(UserStatus.PRE_ACCOUNT)},
    });
  }
  public async findManyByPhone(phone: string): Promise<User[] | undefined> {
    logger.log(this.normalizePhone(phone));
    return await this.usersRepository.find({
      where:{phone:this.normalizePhone(phone), status:Not(UserStatus.PRE_ACCOUNT)}
    });
  }
  public async findByPhoneDisabled(phone: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({
      where:{phone:this.normalizePhone(phone),status: UserStatus.PRE_ACCOUNT},
    });
  }
  public async findLenders(): Promise<User[] | undefined> {
    return await this.usersRepository.find({ where:{role: Role.LENDER}});
  }
  public async findInvestors(): Promise<User[] | undefined> {
    return await this.usersRepository.find({where: {role: Role.INVESTOR} });
  }
  public async saveUser(user): Promise<User | null> {
    return await this.usersRepository.save(user);
  }
  public async saveUserByPhone(userDto: UserUpdateDto): Promise<User | null> {
    const user = await this.findByPhone(userDto.phone);
    delete userDto.phone;
    userDto.issueDate = moment(userDto.issueDate, 'DD.MM.YYYY').toDate();
    userDto.dateOfBirth = moment(userDto.dateOfBirth, 'DD.MM.YYYY').toDate();
    return await this.usersRepository.save({
      uuid: user.uuid,
      ...userDto,
    });
  }
  // public async saveUserPicture({ uuid }, file): Promise<Picture | null> {
  //   return await this.picturesService.savePublic({
  //     path: file.path.replace('static', ''),
  //     user: { uuid },
  //     origin: file.originalname,
  //   });
  // }
  public async seed(): Promise<void> {
    await this.usersRepository.save(usersSeed);
  }
  public async findByUuid(uuid: number): Promise<User | undefined> {
    const entityManager = getManager();
    return await entityManager
      .getRepository(User)
      .createQueryBuilder('user')
      .where('user.uuid = :uuid', { uuid })
      .leftJoinAndSelect(
        'user.messages',
        'message',
        // `message.status = '${MessageStatus.UNREAD}'`,
      )
      .orderBy('message.createdAt', 'DESC')
      .leftJoinAndSelect('user.pictures', 'picture')
      .leftJoinAndSelect('user.lenderAgreements', 'lenderAgreement')
      .leftJoinAndSelect('user.investorAgreements', 'investorAgreement')
      .leftJoinAndSelect('user.registryEntries', 'registryEntry')
      .getOne();
  }
  public async changeCreds({
    phone,
    password,
    code,
  }: UserUpdateDto): Promise<User | 'phone'> {
    const user = await this.findByPhone(phone);
    if (+user.code === +code && password) {
      await this.saveUser({
        uuid: user.uuid,
        passwordHash: createHash('sha256').update(password).digest('hex'),
      });
      return user;
    } else {
      throw new HttpException('Неправильный код из SMS', 400);
    }
  }
  private check(token, email) {
    const hash = createHash('sha256')
      .update(email + this.configService.get('HASH_SALT'))
      .digest('hex');
    return token === hash;
  }
  public async sendProfileCode({ phone }, { uuid }): Promise<number | 'phone'> {
    const users = await this.findManyByPhone(phone);
    if (users.length > 1) {
      return 'phone';
    } else {
      const code = Math.round(Math.random() * (9999 - 0));
      // TODO send code through SMS gateway
      const user = await this.findByUuid(uuid);
      if (this.prod) {
        this.sms.sms_send(
          {
            to: '7' + user.phone,
            translit: true,
            text: 'Udalton ' + code,
          },
          function (e) {
            logger.log(e.description);
          },
        );
      }
      await this.saveUser({
        uuid: user.uuid,
        code,
        phone: this.normalizePhone(phone),
      });
      return this.prod ? 1111 : code;
    }
  }
  public async updatePassword(updateDto): Promise<User | null> {
    if (this.check(updateDto.token, updateDto.email)) {
      const user = await this.usersRepository.findOne({
        where:{email: updateDto.email},
      });
      await this.usersRepository.save({
        uuid: user.uuid,
        passwordHash: createHash('sha256')
          .update(updateDto.password)
          .digest('hex'),
      });
      return await this.usersRepository.findOne({
        where:{uuid: user.uuid},
      });
    } else {
      return null;
    }
  }
  public async sendRegisterCode({ phone }): Promise<number | null> {
    const code = Math.round(Math.random() * (9999 - 0));
    // TODO send code through SMS gateway
    const user = await this.findByPhoneDisabled(phone);
    if (this.prod) {
      this.sms.sms_send(
        {
          to: '7' + user.phone,
          translit: true,
          text: 'Udalton ' + code,
        },
        function (e) {
          logger.log(e.description);
        },
      );
    }
    await this.saveUser({
      uuid: user.uuid,
      code,
    });
    return this.prod ? 1111 : code;
  }
  public async sendSignCode({ phone }): Promise<number | null> {
    const code = Math.round(Math.random() * (9999 - 0));
    // TODO send code through SMS gateway
    const user = await this.findByPhone(phone);
    if (this.prod) {
      this.sms.sms_send(
        {
          to: '7' + user.phone,
          translit: true,
          text: 'Udalton ' + code,
        },
        function (e) {
          logger.log(e.description);
        },
      );
    }
    await this.saveUser({
      uuid: user.uuid,
      code,
    });
    return this.prod ? 1111 : code;
  }
  public async transferMainToReserved(investment: Investment) {
    await this.saveUser({
      uuid: investment.investor.uuid,
      mainAccount: +investment.investor.mainAccount - +investment.sum,
      reserveAccount: +investment.investor.reserveAccount + +investment.sum,
      limitAccount: +investment.investor.limitAccount + +investment.sum,
    });
  }
  public async transferReservedToPreInvested(investment: Investment) {
    await this.saveUser({
      uuid: investment.investor.uuid,
      reserveAccount: +investment.investor.reserveAccount - +investment.sum,
      preInvestAccount: +investment.investor.preInvestAccount + +investment.sum,
    });
  }
  public async transferReservedToInvested(investment: Investment) {
    await this.saveUser({
      uuid: investment.investor.uuid,
      reserveAccount: +investment.investor.reserveAccount - +investment.sum,
      investAccount: +investment.investor.investAccount + +investment.sum,
    });
  }
  public async transferAccountsToInvested(offer) {
    for (const investment of offer.investments) {
      if (investment.status === InvestmentStatus.PRE_INVESTED) {
        await this.saveUser({
          uuid: investment.investor.uuid,
          preInvestAccount:
            +investment.investor.preInvestAccount - +investment.sum,
          investAccount: +investment.investor.investAccount + +investment.sum,
        });
      }
    }
  }
  public async transferAccountsToAgreed(offer) {
    for (const investment of offer.investments) {
      if (investment.status === InvestmentStatus.INVESTED) {
        await this.saveUser({
          uuid: investment.investor.uuid,
          investAccount: +investment.investor.investAccount - +investment.sum,
          agreedAccount: +investment.investor.agreedAccount + +investment.sum,
        });
      } else if (investment.status === InvestmentStatus.RESERVED) {
        await this.saveUser({
          uuid: investment.investor.uuid,
          reserveAccount: +investment.investor.reserveAccount - +investment.sum,
          agreedAccount: +investment.investor.agreedAccount + +investment.sum,
        });
      }
    }
  }
  public async transferAccountsToMain(offer) {
    for (const investment of offer.investments) {
      if (investment.status === InvestmentStatus.PRE_INVESTED) {
        await this.saveUser({
          uuid: investment.investor.uuid,
          preInvestAccount:
            +investment.investor.preInvestAccount - +investment.sum,
          limitAccount: +investment.investor.limitAccount - +investment.sum,
          mainAccount: +investment.investor.mainAccount + +investment.sum,
        });
      } else if (investment.status === InvestmentStatus.RESERVED) {
        await this.saveUser({
          uuid: investment.investor.uuid,
          reserveAccount: +investment.investor.reserveAccount - +investment.sum,
          limitAccount: +investment.investor.limitAccount - +investment.sum,
          mainAccount: +investment.investor.mainAccount + +investment.sum,
        });
      }
    }
  }
}
