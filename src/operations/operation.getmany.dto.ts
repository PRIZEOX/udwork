import { Expose, Exclude, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { OperationDto } from './operation.dto';

@Exclude()
export class OperationGetmanyDto {
  @Expose()
  @Type(() => OperationDto)
  @ApiProperty({
    type: [OperationDto],
  })
  data: OperationDto[];
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
