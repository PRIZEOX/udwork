import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InvoiceController } from './invoice.controller';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Invoice])],
  providers: [InvoiceService, ConfigService],
  controllers: [InvoiceController],
  exports: [InvoiceService],
})
export class InvoiceModule {}
