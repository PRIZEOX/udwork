import { forwardRef, Module } from '@nestjs/common';
import { RegistryService } from './registry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registry } from './registry.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RegistryController } from './registry.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Registry]),
  ],
  providers: [RegistryService, ConfigService],
  controllers: [RegistryController],
  exports: [RegistryService],
})
export class RegistryModule {}
