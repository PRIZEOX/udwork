import { Expose, Exclude, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { UserDto } from './user.dto';

@Exclude()
export class UserGetManyDto {
  @Expose()
  @Type(() => UserDto)
  @ApiProperty({
    type: [UserDto],
  })
  data: UserDto[];
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
