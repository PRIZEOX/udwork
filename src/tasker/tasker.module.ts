import { forwardRef, Module } from '@nestjs/common';
import { TaskerService } from './tasker.service';
import { OffersModule } from '../offers/offers.module';
import { UsersModule } from '../users/users.module';
import { InvestmentModule } from '../investments/investment.module';
import { MessageModule } from '../messages/message.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { RegistryModule } from '../registry/registry.module';

@Module({
  imports: [
    forwardRef(() => OffersModule),
    forwardRef(() => InvestmentModule),
    forwardRef(() => UsersModule),
    MessageModule,
    RegistryModule,
    TypeOrmModule.forFeature([Task]),
  ],
  providers: [TaskerService],
  exports: [TaskerService],
})
export class TaskerModule {}
