import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Invoice } from './invoice.entity';
import { invoiceSeed } from './invoice.seed';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class InvoiceService extends TypeOrmCrudService<Invoice> {
  constructor(
    @InjectRepository(Invoice)
    private invoicesRepository: Repository<Invoice>,
    private readonly configService: ConfigService,
  ) {
    super(invoicesRepository);
  }
  public async saveInvoice(invoice): Promise<Invoice | null> {
    return await this.invoicesRepository.save(invoice);
  }
  public async seed(): Promise<void> {
    await this.invoicesRepository.save(invoiceSeed);
  }
}
