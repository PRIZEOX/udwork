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
class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}
@Exclude()
export class OperationDto {
  @Expose()
  @ApiProperty()
  uuid: number;
  @Expose()
  @ApiPropertyOptional()
  sum: number;
  @Expose()
  @ApiPropertyOptional()
  type: OperationType;
  @Type(() => UserDto)
  @Expose()
  @ApiPropertyOptional({ type: () => UserDto })
  lender: UserDto;
  @Type(() => UserDto)
  @Expose()
  @ApiPropertyOptional({ type: () => UserDto })
  investor: UserDto;
  @Type(() => UserDto)
  @Expose()
  @ApiPropertyOptional({ type: () => UserDto })
  approver: UserDto;
  @Type(() => OfferDto)
  @Expose()
  @ApiPropertyOptional({ type: () => OfferDto })
  offer: OfferDto;
}
