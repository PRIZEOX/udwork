import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { OfferStatus } from '../enums/offer.status';
import { RepayPeriod } from '../enums/repay.period';
import { Offer } from './offer.entity';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class OfferCreateDto {
  @ApiPropertyOptional()
  loanCoefficient: number;
  @ApiPropertyOptional()
  interestRate: number;
  @ApiPropertyOptional()
  hasCollateral: boolean;
  @ApiPropertyOptional()
  revocable: boolean;
  @ApiPropertyOptional()
  collateralSum: number;
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
  number: string;
  @ApiPropertyOptional()
  name: string;
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
  declineReason: string;
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
