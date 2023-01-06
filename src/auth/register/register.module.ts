import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { UsersModule } from '../../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../users/user.entity';
import { RegisterController } from './register.controller';
import { SendProfileCodeController } from '../../users/sign/send.profile.code.controller';
import { RegisterSignController } from './register.sign.controller';
import { MailerModule } from '../../mailer/mailer.module';

@Module({
  imports: [
    UsersModule,
    MailerModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '72h' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [RegisterService],
  controllers: [
    RegisterController,
    SendProfileCodeController,
    RegisterSignController,
  ],
  exports: [],
})
export class RegisterModule {}
