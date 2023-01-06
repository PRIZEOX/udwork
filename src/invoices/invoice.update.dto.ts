import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class InvoiceUpdateDto {
  @ApiProperty()
  uuid: number;
  @ApiPropertyOptional()
  sum: number;
  @ApiPropertyOptional()
  number: string;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  contragent: UuidDto;
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: UuidDto,
  })
  agreement: UuidDto;
}
