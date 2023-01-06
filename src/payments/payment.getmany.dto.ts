import { Expose, Exclude, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { PaymentDto } from './payment.dto';

@Exclude()
export class PaymentGetmanyDto {
  @Expose()
  @Type(() => PaymentDto)
  @ApiProperty({
    type: [PaymentDto],
  })
  data: PaymentDto[];
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
