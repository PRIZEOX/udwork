import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';
import { OfferStatus } from '../enums/offer.status';

export class ChangeOfferStatusDto {
  @ApiProperty()
  uuid: number;
  @ApiProperty()
  status: OfferStatus;
  @ApiProperty()
  rating: number;
}
