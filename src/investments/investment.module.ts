import { forwardRef, Module } from '@nestjs/common';
import { InvestmentService } from './investment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Investment } from './investment.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InvestmentController } from './investment.controller';
import { SignAcceptController } from '../agreements/sign.accept.controller';
import { UsersModule } from '../users/users.module';
import { OffersModule } from '../offers/offers.module';
import { AgreementsModule } from '../agreements/agreements.module';
import { MessageModule } from '../messages/message.module';
import { TaskerModule } from '../tasker/tasker.module';
import { RegistryModule } from '../registry/registry.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Investment]),
    ConfigModule,
    RegistryModule,
    MessageModule,
    TaskerModule,
    forwardRef(() => UsersModule),
    forwardRef(() => OffersModule),
    forwardRef(() => TaskerModule),
  ],
  providers: [InvestmentService, ConfigService],
  controllers: [InvestmentController],
  exports: [InvestmentService],
})
export class InvestmentModule {}
