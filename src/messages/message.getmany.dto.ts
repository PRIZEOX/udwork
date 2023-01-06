import { Expose, Exclude, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { MessageDto } from './message.dto';

@Exclude()
export class MessageGetmanyDto {
  @Expose()
  @Type(() => MessageDto)
  @ApiProperty({
    type: [MessageDto],
  })
  data: MessageDto[];
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
