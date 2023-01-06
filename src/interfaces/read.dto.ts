import { ApiProperty } from '@nestjs/swagger';

export class ReadDto {
  @ApiProperty()
  uuid: number;
}
