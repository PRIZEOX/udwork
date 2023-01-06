import { forwardRef, Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './offer.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OfferController } from './offer.controller';
import { ChangeStatusController } from './change.status.controller';
import { PublishController } from './publish.controller';
import { DeclineController } from './decline.controller';
import { InvestmentModule } from '../investments/investment.module';
import { DeleteFileOfferController } from './delete.file.controller';
import { UploadOfferController } from './upload.controller';
import { PicturesModule } from '../pictures/pictures.module';
import { MessageModule } from '../messages/message.module';
import { PrivateUploadController } from './private.upload.controller';
import { PrivateDeleteFileController } from './private.delete.file.controller';
import { TaskerModule } from '../tasker/tasker.module';
import { UsersModule } from '../users/users.module';
import { PaymentModule } from '../payments/payment.module';
import { PayController } from './pay.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Offer]),
    forwardRef(() => InvestmentModule),
    forwardRef(() => TaskerModule),
    forwardRef(() => UsersModule),
    forwardRef(() => PaymentModule),
    ConfigModule,
    PicturesModule,
    MessageModule,
  ],
  providers: [OffersService, ConfigService],
  controllers: [
    OfferController,
    ChangeStatusController,
    PublishController,
    DeclineController,
    DeleteFileOfferController,
    UploadOfferController,
    PrivateUploadController,
    PrivateDeleteFileController,
    PayController,
  ],
  exports: [OffersService],
})
export class OffersModule {}
