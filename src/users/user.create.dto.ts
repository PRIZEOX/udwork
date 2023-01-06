import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '../enums/role';
import { UserStatus } from '../enums/user.status';
import { Expose, Type } from 'class-transformer';
import { UserType } from '../enums/user.type';
class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}
export class UserCreateDto {
  @ApiPropertyOptional()
  phone: string;
  @ApiPropertyOptional()
  declineReason: string;
  @ApiPropertyOptional()
  email: string;
  @ApiPropertyOptional()
  code: string;
  @ApiPropertyOptional()
  passwordHash: string;
  @ApiPropertyOptional()
  active: boolean;
  @ApiPropertyOptional()
  terrorist: boolean;
  @ApiPropertyOptional()
  enabled: boolean;
  @ApiPropertyOptional()
  firstName: string;
  @ApiPropertyOptional()
  lastName: string;
  @ApiPropertyOptional()
  role: Role;
  @ApiPropertyOptional()
  status: UserStatus;
  @ApiPropertyOptional()
  type: UserType;
  @ApiPropertyOptional()
  mainAccount: number;
  @ApiPropertyOptional()
  reserveAccount: number;
  @ApiPropertyOptional()
  preInvestAccount?: number;
  @ApiPropertyOptional()
  investAccount?: number;
  @ApiPropertyOptional()
  agreedAccount?: number;
  @ApiPropertyOptional()
  limitAccount?: number;
  @ApiPropertyOptional()
  returnedAccount?: number;
  @ApiPropertyOptional()
  profitAccount?: number;
  @ApiPropertyOptional()
  middleName: string;
  @ApiPropertyOptional()
  inn: string;
  @ApiPropertyOptional()
  issueDate: Date;
  @ApiPropertyOptional()
  dateOfBirth: Date;
  @ApiPropertyOptional()
  placeOfBirth: string;
  @ApiPropertyOptional()
  address: string;
  @ApiPropertyOptional()
  factAddress: string;
  @ApiPropertyOptional()
  passportNumber: string;
  @ApiPropertyOptional()
  passportIssuedBy: string;
  @ApiPropertyOptional()
  passportCodeDepartment: string;
  @ApiPropertyOptional()
  orgInn: string;
  @ApiPropertyOptional()
  orgOgrn: string;
  @ApiPropertyOptional()
  orgName: string;
  @ApiPropertyOptional()
  orgLocation: string;
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
  infoRating: string;
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: UuidDto,
  })
  investments: UuidDto[];
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: UuidDto,
  })
  invoices: UuidDto[];
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: UuidDto,
  })
  approverOperations: UuidDto[];
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: UuidDto,
  })
  investorOperations: UuidDto[];
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: UuidDto,
  })
  investorAgreements: UuidDto[];
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: UuidDto,
  })
  lenderOperations: UuidDto[];
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: UuidDto,
  })
  lenderAgreements: UuidDto[];
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: UuidDto,
  })
  receivedOffers: UuidDto[];
  @Type(() => UuidDto)
  @ApiPropertyOptional({
    type: UuidDto,
  })
  postedOffers: UuidDto[];
}
