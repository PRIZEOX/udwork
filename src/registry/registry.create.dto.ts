import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { Offer } from '../offers/offer.entity';
import { Invoice } from '../invoices/invoice.entity';
import { OfferDto } from '../offers/offer.dto';
import { User } from '../users/user.entity';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class RegistryCreateDto {
  @ApiPropertyOptional()
  number: string;
  @ApiPropertyOptional()
  sum: number;
  @ApiPropertyOptional()
  createdAt: Date;
  @ApiPropertyOptional()
  investor: User;
  @ApiPropertyOptional()
  offer: Offer;
}
