import { ApiPropertyOptional } from '@nestjs/swagger';
import { OfferDto } from '../offers/offer.dto';
import { Offer } from '../offers/offer.entity';
export class PaymentCreateDto {
  @ApiPropertyOptional()
  sum?: number;
  @ApiPropertyOptional()
  date: Date;
  @ApiPropertyOptional({ type: () => OfferDto })
  offer?: OfferDto;
  @ApiPropertyOptional()
  completed: boolean;
}
