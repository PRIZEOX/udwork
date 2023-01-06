import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude, Type } from 'class-transformer';
import { AgreementType } from '../enums/agreement.type';
import { UserDto } from '../users/user.dto';
import { OfferStatus } from '../enums/offer.status';
import { RepayPeriod } from '../enums/repay.period';
import { OperationType } from '../enums/operation.type';
import { User } from '../users/user.entity';
import { Offer } from '../offers/offer.entity';
import { OfferDto } from '../offers/offer.dto';
import { InvestmentStatus } from '../enums/investment.status';
import { Task } from '../tasker/task.entity';
class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}
@Exclude()
export class InvestmentDto {
  @Expose()
  @ApiProperty()
  uuid: number;
  @Expose()
  @ApiPropertyOptional()
  sum: number;
  @Expose()
  @ApiPropertyOptional()
  status: InvestmentStatus;
  @Type(() => UuidDto)
  @Expose()
  @ApiPropertyOptional({ type: () => OfferDto })
  offer: OfferDto;
  @Type(() => Task)
  @Expose()
  @ApiPropertyOptional({ type: () => Task })
  task: Task;
  @Type(() => UuidDto)
  @Expose()
  @ApiPropertyOptional({ type: () => UuidDto })
  investor: UuidDto;
  @Expose()
  @ApiPropertyOptional()
  createdAt: Date;
}
