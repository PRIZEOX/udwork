import { forwardRef, Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MessageController } from './message.controller';
import { UsersModule } from '../users/users.module';
import { OffersModule } from '../offers/offers.module';
import { AgreementsModule } from '../agreements/agreements.module';
import { ReadController } from './read.controller';
import { MailerModule } from '../mailer/mailer.module';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    ConfigModule,
    TypeOrmModule.forFeature([Message]),
    forwardRef(() => OffersModule),
    AgreementsModule,
    MailerModule,
  ],
  providers: [MessageService, ConfigService],
  controllers: [MessageController, ReadController],
  exports: [MessageService],
})
export class MessageModule {}
