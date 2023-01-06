import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { OperationType } from '../enums/operation.type';
import { User } from '../users/user.entity';
import { Offer } from '../offers/offer.entity';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class OperationCreateDto {
  @ApiPropertyOptional()
  sum: number;
  @ApiPropertyOptional()
  type: OperationType;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  lender: UuidDto;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  investor: UuidDto;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  approver: UuidDto;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  offer: UuidDto;
}
