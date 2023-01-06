import { Expose, Exclude, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { InvoiceDto } from './invoice.dto';

@Exclude()
export class InvoiceGetmanyDto {
  @Expose()
  @Type(() => InvoiceDto)
  @ApiProperty({
    type: [InvoiceDto],
  })
  data: InvoiceDto[];
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
