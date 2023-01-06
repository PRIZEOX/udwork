import { HttpException, Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { User } from '../../users/user.entity';
import { UserStatus } from '../../enums/user.status';
import { createHash } from 'crypto';
import { MailerService } from '../../mailer/mailer.service';
@Injectable()
export class RegisterService {
  constructor(private readonly usersService: UsersService, private readonly mailerService: MailerService, ) {}
  private readonly logger = new Logger(RegisterService.name);
  private normalizePhone(phone) {
    const stripped = phone.replace(/[^0-9]/g, '');
    let normPhone;
    if (stripped[0] === '8' || stripped[0] === '7') {
      normPhone = stripped.substring(1);
    }
    return normPhone;
  }
  public async validateUser({ phone, code }): Promise<User | 401 | 404 | 406> {
    const user = await this.usersService.findByPhoneDisabled(phone);
    if (user.code === code) {
      await this.usersService.saveUser({
        uuid: user.uuid,
        status: UserStatus.ACCOUNT,
      });
      await this.mailerService.sendAccountCreated(user.email);
      return user;
    } else {
      return 401;
    }
  }
  public async createUserBySMS({ phone, role }): Promise<number | null> {
    const code = Math.round(Math.random() * (9999 - 0));
    const disUser = await this.usersService.findByPhoneDisabled(phone);
    if (await this.usersService.findByPhone(phone)) {
      return null;
    } else if (disUser) {
      const user = await this.usersService.saveUser({
        uuid: disUser.uuid,
        code,
      });
      return code;
    } else {
      const user = await this.usersService.saveUser({
        phone: this.normalizePhone(phone),
        role,
        status: UserStatus.PRE_ACCOUNT,
        code,
      });
      return code;
    }
  }
  public async createUser({
    phone,
    role,
    email,
    password,
  }): Promise<User | 'phone' | 'email'> {
    this.logger.log(this.normalizePhone(phone));
    if (this.normalizePhone(phone).length !== 10) {
      throw new HttpException('Телефон введен неправильно', 404);
    }
    if (await this.usersService.findByEmail(email)) {
      return 'email';
    } else if (await this.usersService.findByPhone(phone)) {
      return 'phone';
    } else {
      const user = await this.usersService.saveUser({
        phone: this.normalizePhone(phone),
        status: UserStatus.PRE_ACCOUNT,
        email,
        role,
        passwordHash: createHash('sha256').update(password).digest('hex'),
      });
      return user;
    }
  }
}
