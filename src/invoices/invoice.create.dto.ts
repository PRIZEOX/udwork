import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class InvoiceCreateDto {
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
