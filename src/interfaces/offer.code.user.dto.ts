import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';

export class OfferCodeUserDto {
  @ApiProperty()
  phone: string;
  @ApiProperty()
  code: string;
  @ApiProperty()
  offerUuid: number;
}
