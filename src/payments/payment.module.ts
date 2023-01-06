import { forwardRef, Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PaymentController } from './payment.controller';
import { UsersModule } from '../users/users.module';
import { OffersModule } from '../offers/offers.module';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => OffersModule),
    ConfigModule,
    TypeOrmModule.forFeature([Payment]),
  ],
  providers: [PaymentService, ConfigService],
  controllers: [PaymentController],
  exports: [PaymentService],
})
export class PaymentModule {}
