import {
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginService } from '../login/login.service';

@Injectable()
export class SmsCodeStrategy extends PassportStrategy(Strategy, 'smsCode') {
  constructor(private readonly loginService: LoginService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.loginService.validateUserSMS(username, password);
    switch (user) {
      case 401:
        throw new HttpException('Password is incorrect.', 401);
      case 404:
        throw new HttpException('User not found.', 404);
      case 406:
        throw new HttpException(
          'Please confirm your email address to complete the registration.',
          406,
        );
      default:
        return user;
    }
  }
}
