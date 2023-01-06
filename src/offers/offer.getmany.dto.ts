import { Expose, Exclude, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { OfferDto } from './offer.dto';

@Exclude()
export class OfferGetmanyDto {
  @Expose()
  @Type(() => OfferDto)
  @ApiProperty({
    type: [OfferDto],
  })
  data: OfferDto[];
  @Expose()
  @ApiProperty()
  count: number;
  @Expose()
  @ApiProperty()
  total: number;
  @Expose()
  @ApiProperty()
  page: number;
  @Expose()
  @ApiProperty()
  pageCount: number;
}
