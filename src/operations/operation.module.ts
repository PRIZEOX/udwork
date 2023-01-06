import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operation } from './operation.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OperationController } from './operation.controller';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Operation])],
  providers: [OperationService, ConfigService],
  controllers: [OperationController],
  exports: [OperationService],
})
export class OperationModule {}
