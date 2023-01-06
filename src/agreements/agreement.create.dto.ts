import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AgreementType } from '../enums/agreement.type';
import { Offer } from '../offers/offer.entity';
import { Invoice } from '../invoices/invoice.entity';
import { OfferDto } from '../offers/offer.dto';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class AgreementCreateDto {
  @ApiPropertyOptional()
  number: string;
  @ApiPropertyOptional()
  pdf: string;
  @ApiPropertyOptional()
  date: Date;
  @ApiPropertyOptional()
  sum: number;
  @ApiPropertyOptional()
  createdAt: Date;
  @ApiPropertyOptional()
  updatedAt: Date;
  @ApiPropertyOptional()
  type: AgreementType;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  investor: UuidDto;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  lender: UuidDto;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  offer: UuidDto;
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: [UuidDto],
  })
  invoices: UuidDto[];
}
