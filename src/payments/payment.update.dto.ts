import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { OfferDto } from '../offers/offer.dto';
export class PaymentUpdateDto {
  @ApiProperty()
  uuid: number;
  @ApiPropertyOptional()
  sum?: number;
  @ApiPropertyOptional()
  date: Date;
  @ApiPropertyOptional({ type: () => OfferDto })
  offer?: OfferDto;
  @ApiPropertyOptional()
  completed: boolean;
}
