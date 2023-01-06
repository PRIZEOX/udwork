import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { LoginService } from './login.service';
import { SmsLoginController } from './sms.login.controller';
import { UsersModule } from '../../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../users/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { SmsCodeStrategy } from '../strategies/sms.code.strategy';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { CodeController } from './code.controller';
import { PicturesModule } from '../../pictures/pictures.module';
import { LocalStrategy } from '../strategies/local.strategy';
import { LoginController } from './login.controller';
import { MailerModule } from '../../mailer/mailer.module';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => MailerModule),
    PicturesModule,
    TypeOrmModule.forFeature([User]),
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '4h' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    UsersService,
    LoginService,
    SmsCodeStrategy,
    LocalStrategy,
    JwtStrategy,
    ConfigService,
  ],
  controllers: [
    SmsLoginController,
    LoginController,
    CodeController,
  ],
  exports: [LoginService],
})
export class LoginModule {}
