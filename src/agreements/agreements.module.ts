import { forwardRef, Module } from '@nestjs/common';
import { AgreementsService } from './agreements.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agreement } from './agreement.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AgreementController } from './agreement.controller';
import { UsersModule } from '../users/users.module';
import { InvoiceController } from './invoice.controller';
import { SignUserInfoController } from './sign.user.info.controller';
import { SignOfferController } from './sign.offer.controller';
import { OffersModule } from '../offers/offers.module';
import { SignAcceptController } from './sign.accept.controller';
import { InvestmentModule } from '../investments/investment.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Agreement]),
    forwardRef(() => UsersModule),
    forwardRef(() => OffersModule),
    forwardRef(() => InvestmentModule),
  ],
  providers: [AgreementsService, ConfigService],
  controllers: [
    AgreementController,
    SignUserInfoController,
    SignOfferController,
    SignAcceptController,
    InvoiceController,
  ],
  exports: [AgreementsService],
})
export class AgreementsModule {}
