import { Expose, Exclude, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { InvestmentDto } from './investment.dto';

@Exclude()
export class InvesmentGetmanyDto {
  @Expose()
  @Type(() => InvestmentDto)
  @ApiProperty({
    type: [InvestmentDto],
  })
  data: InvestmentDto[];
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
