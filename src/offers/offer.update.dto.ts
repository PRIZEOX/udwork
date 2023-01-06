import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AgreementType } from '../enums/agreement.type';
import { Type } from 'class-transformer';
import { OfferStatus } from '../enums/offer.status';
import { RepayPeriod } from '../enums/repay.period';
import { Operation } from '../operations/operation.entity';
import { Offer } from './offer.entity';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class OfferUpdateDto {
  @ApiProperty()
  uuid: number;
  @ApiPropertyOptional()
  loanCoefficient: number;
  @ApiPropertyOptional()
  hasCollateral: boolean;
  @ApiPropertyOptional()
  revocable: boolean;
  @ApiPropertyOptional()
  collateralSum: number;
  @ApiPropertyOptional()
  interestRate: number;
  @ApiPropertyOptional()
  rating: number;
  @ApiPropertyOptional()
  minVolume: number;
  @ApiPropertyOptional()
  investPeriodDays: number;
  @ApiPropertyOptional()
  maxVolume: number;
  @ApiPropertyOptional()
  currentVolume: number;
  @ApiPropertyOptional()
  offerPeriodDays: number;
  @ApiPropertyOptional()
  name: string;
  @ApiPropertyOptional()
  number: string;
  @ApiPropertyOptional()
  date: Date;
  @ApiPropertyOptional()
  fulfillDate: Date;
  @ApiPropertyOptional()
  deadline: Date;
  @ApiPropertyOptional()
  infoGoals: string;
  @ApiPropertyOptional()
  infoExperts: string;
  @ApiPropertyOptional()
  infoConditions: string;
  @ApiPropertyOptional()
  infoRisks: string;
  @ApiPropertyOptional()
  declineReason: string;
  @ApiPropertyOptional()
  requisites: string;
  @ApiPropertyOptional()
  infoPercent: string;
  @ApiPropertyOptional()
  infoStructure: string;
  @ApiPropertyOptional()
  infoAnnual: string;
  @ApiPropertyOptional()
  infoActivities: string;
  @ApiPropertyOptional()
  infoFacts: string;
  @ApiPropertyOptional()
  infoSums: string;
  @ApiPropertyOptional()
  infoRating: number;
  @ApiPropertyOptional()
  status: OfferStatus;
  @ApiPropertyOptional()
  repayPeriod: RepayPeriod;
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  agreement: UuidDto;
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: [UuidDto],
  })
  investments: UuidDto[];
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: [UuidDto],
  })
  investors: UuidDto[];
  @Type(() => UuidDto)
  @ApiPropertyOptional({ type: () => UuidDto })
  lender: UuidDto;
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: [UuidDto],
  })
  operations: UuidDto[];
  @ApiPropertyOptional()
  publicImages?: any;
  @ApiPropertyOptional()
  privateImages?: any;
}
