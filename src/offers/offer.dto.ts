import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude, Type } from 'class-transformer';
import { AgreementType } from '../enums/agreement.type';
import { UserDto } from '../users/user.dto';
import { OfferStatus } from '../enums/offer.status';
import { RepayPeriod } from '../enums/repay.period';
import { AgreementDto } from '../agreements/agreement.dto';
import { OperationDto } from '../operations/operation.dto';
import { InvestmentDto } from '../investments/investment.dto';
import { Task } from '../tasker/task.entity';
import { PaymentDto } from '../payments/payment.dto';
class PictureDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly path: string;
}
@Exclude()
export class OfferDto {
  @Expose()
  @ApiProperty()
  uuid: number;
  @Expose()
  @ApiPropertyOptional()
  loanCoefficient: number;
  @Expose()
  @ApiPropertyOptional()
  hasCollateral: boolean;
  @Expose()
  @ApiPropertyOptional()
  revocable: boolean;
  @Expose()
  @ApiPropertyOptional()
  collateralSum: number;
  @Expose()
  @ApiPropertyOptional()
  interestRate: number;
  @Expose()
  @ApiPropertyOptional()
  rating: number;
  @Expose()
  @ApiPropertyOptional()
  minVolume: number;
  @Expose()
  @ApiPropertyOptional()
  investPeriodDays: number;
  @Expose()
  @ApiPropertyOptional()
  maxVolume: number;
  @Expose()
  @ApiPropertyOptional()
  currentVolume: number;
  @Expose()
  @ApiPropertyOptional()
  offerPeriodDays: number;
  @Expose()
  @ApiPropertyOptional()
  name: string;
  @Expose()
  @ApiPropertyOptional()
  number: string;
  @Expose()
  @ApiPropertyOptional()
  date: Date;
  @Expose()
  @ApiPropertyOptional()
  deadline: Date;
  @Expose()
  @ApiPropertyOptional()
  fulfillDate: Date;
  @Expose()
  @ApiPropertyOptional()
  infoGoals: string;
  @Expose()
  @ApiPropertyOptional()
  infoExperts: string;
  @Expose()
  @ApiPropertyOptional()
  infoConditions: string;
  @Expose()
  @ApiPropertyOptional()
  infoRisks: string;
  @Expose()
  @ApiPropertyOptional()
  requisites: string;
  @Expose()
  @ApiPropertyOptional()
  infoPercent: string;
  @Expose()
  @ApiPropertyOptional()
  declineReason: string;
  @Expose()
  @ApiPropertyOptional()
  infoStructure: string;
  @Expose()
  @ApiPropertyOptional()
  infoAnnual: string;
  @Expose()
  @ApiPropertyOptional()
  infoActivities: string;
  @Expose()
  @ApiPropertyOptional()
  infoFacts: string;
  @Expose()
  @ApiPropertyOptional()
  infoSums: string;
  @Expose()
  @ApiPropertyOptional()
  infoRating: number;
  @Expose()
  @ApiPropertyOptional()
  createdAt: Date;
  @Expose()
  @ApiPropertyOptional()
  updatedAt: Date;
  @Expose()
  @ApiPropertyOptional()
  status: OfferStatus;
  @Expose()
  @ApiPropertyOptional()
  repayPeriod: RepayPeriod;
  @Type(() => AgreementDto)
  @Expose()
  @ApiPropertyOptional({ type: () => AgreementDto })
  agreement: AgreementDto;
  @Type(() => InvestmentDto)
  @Expose()
  @ApiPropertyOptional({
    type: [InvestmentDto],
  })
  investments: InvestmentDto[];
  @Type(() => UserDto)
  @Expose()
  @ApiPropertyOptional({
    type: [UserDto],
  })
  investors: UserDto[];
  @Type(() => UserDto)
  @Expose()
  @ApiPropertyOptional({ type: () => UserDto })
  lender: UserDto;
  @Type(() => Task)
  @Expose()
  @ApiPropertyOptional({ type: () => Task })
  task: Task;
  @Type(() => OperationDto)
  @Expose()
  @ApiPropertyOptional({
    type: [OperationDto],
  })
  operations: OperationDto[];
  @Type(() => PictureDto)
  @Expose()
  @ApiPropertyOptional({
    type: [PictureDto],
  })
  publicPictures: PictureDto[];
  @Type(() => PictureDto)
  @Expose()
  @ApiPropertyOptional({
    type: [PictureDto],
  })
  privatePictures: PictureDto[];
  @Type(() => PaymentDto)
  @Expose()
  @ApiPropertyOptional({
    type: [PaymentDto],
  })
  payments: PaymentDto[];
}
