import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Registry } from './registry.entity';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';

@Injectable()
export class RegistryService extends TypeOrmCrudService<Registry> {
  constructor(
    @InjectRepository(Registry)
    private registryRepository: Repository<Registry>,
    private readonly configService: ConfigService,
  ) {
    super(registryRepository);
  }
  public async saveRegistry(registry): Promise<Registry | null> {
    return await this.registryRepository.save(registry);
  }
}
