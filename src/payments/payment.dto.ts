import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude, Type } from 'class-transformer';
import { OfferDto } from '../offers/offer.dto';
import { Offer } from '../offers/offer.entity';
class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}
@Exclude()
export class PaymentDto {
  @Expose()
  @ApiProperty()
  uuid: number;
  @Expose()
  @ApiPropertyOptional()
  sum?: number;
  @Expose()
  @ApiPropertyOptional()
  date: Date;
  @Expose()
  @ApiPropertyOptional({ type: () => OfferDto })
  offer?: OfferDto;
  @Expose()
  @ApiPropertyOptional()
  completed: boolean;
}
