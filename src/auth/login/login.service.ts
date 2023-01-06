import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';
import { User } from '../../users/user.entity';

@Injectable()
export class LoginService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  private normalizePhone(phone) {
    const stripped = phone.replace(/[^0-9]/g, '');
    let normPhone;
    if (stripped[0] === '8' || stripped[0] === '7') {
      normPhone = stripped.substring(1);
    }
    return normPhone;
  }
  public async validateUserSMS(
    phone: string,
    code: string,
  ): Promise<User | 401 | 404 | 406> {
    const user = await this.usersService.findByPhone(phone);
    if (!user) {
      return 404;
    }
    if (user.code === code) {
      return user;
    } else {
      return 401;
    }
  }
  public async validateUser(
    email: string,
    password: string,
  ): Promise<User | 401 | 404 | 406> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return 404;
    }
    const hash = createHash('sha256').update(password).digest('hex');
    if (user.passwordHash === hash) {
      return user;
    } else {
      return 401;
    }
  }
  public async sendCode({ phone }) {
    // TODO send code through SMS gateway
    const user = await this.usersService.findByPhone(phone);
    if (!user) {
      return 404;
    }
    const code = Math.round(Math.random() * (9999 - 0));
    await this.usersService.saveUser({
      uuid: user.uuid,
      code,
    });
    return code;
  }
  public async login(user: User) {
    return {
      access_token: this.jwtService.sign({ sub: user }),
      role: user.role,
    };
  }
}
