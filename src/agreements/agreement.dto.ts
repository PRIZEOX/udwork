import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude, Type } from 'class-transformer';
import { AgreementType } from '../enums/agreement.type';
import { UserDto } from '../users/user.dto';
import { Offer } from '../offers/offer.entity';
import { Invoice } from '../invoices/invoice.entity';
import { OfferDto } from '../offers/offer.dto';
import { InvoiceDto } from '../invoices/invoice.dto';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

@Exclude()
export class AgreementDto {
  @Expose()
  @ApiProperty()
  uuid: number;
  @Expose()
  @ApiPropertyOptional()
  number: string;
  @Expose()
  @ApiPropertyOptional()
  pdf: string;
  @Expose()
  @ApiPropertyOptional()
  date: Date;
  @Expose()
  @ApiPropertyOptional()
  sum: number;
  @Expose()
  @ApiPropertyOptional()
  createdAt: Date;
  @Expose()
  @ApiPropertyOptional()
  updatedAt: Date;
  @Expose()
  @ApiPropertyOptional()
  type: AgreementType;
  @Type(() => UserDto)
  @Expose()
  @ApiPropertyOptional({ type: () => UserDto })
  investor: UserDto;
  @Type(() => UserDto)
  @Expose()
  @ApiPropertyOptional({ type: () => UserDto })
  lender: UserDto;
  @Type(() => OfferDto)
  @Expose()
  @ApiPropertyOptional({ type: () => OfferDto })
  offer: OfferDto;
  @Type(() => InvoiceDto)
  @Expose()
  @ApiPropertyOptional({
    type: [InvoiceDto],
  })
  invoices: InvoiceDto[];
}
