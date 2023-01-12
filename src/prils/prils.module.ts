/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrilsController } from './prils.controller';
import { PrilsService } from './prils.service';


@Module({
  controllers: [PrilsController],
  providers: [PrilsService],
})
export class PrilsModule {}

