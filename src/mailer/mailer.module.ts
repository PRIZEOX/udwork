import { forwardRef, Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfirmController } from './confirm.controller';
import { UsersModule } from '../users/users.module';
import { SendWithdrawController } from './send.withdraw.controller';
import { SendTicketController } from './send.ticket.controller';
import { PasswordRecoverController } from './password.recover.controller';

@Module({
  imports: [ConfigModule, forwardRef(() => UsersModule)],
  providers: [MailerService, ConfigService],
  controllers: [
    ConfirmController,
    SendWithdrawController,
    PasswordRecoverController,
    SendTicketController,
  ],
  exports: [MailerService],
})
export class MailerModule {}
