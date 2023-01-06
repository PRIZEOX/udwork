import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';
import { OfferStatus } from '../enums/offer.status';

export class TicketDto {
  @ApiProperty()
  uuid: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  text: string;
  @ApiProperty()
  topic: string;
}
