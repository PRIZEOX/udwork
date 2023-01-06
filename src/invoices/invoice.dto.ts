import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude, Type } from 'class-transformer';
import { AgreementType } from '../enums/agreement.type';
import { UserDto } from '../users/user.dto';
import { OfferStatus } from '../enums/offer.status';
import { RepayPeriod } from '../enums/repay.period';
import { OperationType } from '../enums/operation.type';
import { User } from '../users/user.entity';
import { Offer } from '../offers/offer.entity';
import { Agreement } from '../agreements/agreement.entity';
import { AgreementDto } from '../agreements/agreement.dto';
class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}
@Exclude()
export class InvoiceDto {
  @Expose()
  @ApiProperty()
  uuid: number;
  @Expose()
  @ApiPropertyOptional()
  sum: number;
  @Expose()
  @ApiPropertyOptional()
  number: string;
  @Expose()
  @Type(() => UserDto)
  @ApiPropertyOptional({ type: () => UserDto })
  contragent: UserDto;
  @Expose()
  @Type(() => AgreementDto)
  @ApiPropertyOptional({
    type: AgreementDto,
  })
  agreement: AgreementDto;
}
