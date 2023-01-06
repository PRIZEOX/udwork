import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Operation } from './operation.entity';
import { operationSeed } from './operation.seed';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class OperationService extends TypeOrmCrudService<Operation> {
  constructor(
    @InjectRepository(Operation)
    private operationsRepository: Repository<Operation>,
    private readonly configService: ConfigService,
  ) {
    super(operationsRepository);
  }
  public async saveOperation(operation): Promise<Operation | null> {
    return await this.operationsRepository.save(operation);
  }
  public async seed(): Promise<void> {
    await this.operationsRepository.save(operationSeed);
  }
}
