import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { OperationType } from '../enums/operation.type';
import { User } from '../users/user.entity';
import { Offer } from '../offers/offer.entity';
import { InvestmentStatus } from '../enums/investment.status';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class InvestmentUpdateDto {
  @ApiProperty()
  uuid: number;
  @ApiPropertyOptional()
  sum: number;
  @ApiPropertyOptional()
  status: InvestmentStatus;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  offer: UuidDto;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  investor: UuidDto;
}
