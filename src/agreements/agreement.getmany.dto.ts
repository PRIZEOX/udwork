import { Expose, Exclude, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { AgreementDto } from './agreement.dto';

@Exclude()
export class AgreementGetmanyDto {
  @Expose()
  @Type(() => AgreementDto)
  @ApiProperty({
    type: [AgreementDto],
  })
  data: AgreementDto[];
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
