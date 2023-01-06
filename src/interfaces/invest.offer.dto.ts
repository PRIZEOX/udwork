import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';
import { OfferStatus } from '../enums/offer.status';

export class InvestOfferDto {
  @ApiProperty()
  uuid: number;
  @ApiProperty()
  sum: number;
  @ApiProperty()
  code: number;
}
