import { Expose, Exclude, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { RegistryDto } from './registry.dto';

@Exclude()
export class RegistryGetmanyDto {
  @Expose()
  @Type(() => RegistryDto)
  @ApiProperty({
    type: [RegistryDto],
  })
  data: RegistryDto[];
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
