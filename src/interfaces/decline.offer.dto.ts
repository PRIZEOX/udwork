import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';
import { OfferStatus } from '../enums/offer.status';

export class DeclineOfferDto {
  @ApiProperty()
  uuid: number;
  @ApiProperty()
  declineReason: string;
}
