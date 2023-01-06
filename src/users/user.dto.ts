import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '../enums/role';
import { Expose, Exclude, Type } from 'class-transformer';
import { UserStatus } from '../enums/user.status';
import { InvoiceDto } from '../invoices/invoice.dto';
import { OperationDto } from '../operations/operation.dto';
import { AgreementDto } from '../agreements/agreement.dto';
import { OfferDto } from '../offers/offer.dto';
import { UserType } from '../enums/user.type';
import { InvestmentDto } from '../investments/investment.dto';
import { MessageDto } from '../messages/message.dto';
import { Registry } from '../registry/registry.entity';
import { RegistryDto } from '../registry/registry.dto';
import { Column } from 'typeorm';
class PictureDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly path: string;
}
@Exclude()
export class UserDto {
  @Expose()
  @ApiProperty()
  uuid: number;
  @Expose()
  @ApiPropertyOptional()
  phone: string;
  @Expose()
  @ApiPropertyOptional()
  passwordHash: string;
  @Expose()
  @ApiPropertyOptional()
  email: string;
  @Expose()
  @ApiPropertyOptional()
  code: string;
  @Expose()
  @ApiPropertyOptional()
  active: boolean;
  @Expose()
  @ApiPropertyOptional()
  enabled: boolean;
  @Expose()
  @ApiPropertyOptional()
  terrorist: boolean;
  @Expose()
  @ApiPropertyOptional()
  firstName: string;
  @Expose()
  @ApiPropertyOptional()
  lastName: string;
  @Expose()
  @ApiPropertyOptional()
  role: Role;
  @Expose()
  @ApiPropertyOptional()
  status: UserStatus;
  @Expose()
  @ApiPropertyOptional()
  type: UserType;
  @Expose()
  @ApiPropertyOptional()
  mainAccount: number;
  @Expose()
  @ApiPropertyOptional()
  reserveAccount: number;
  @Expose()
  @ApiPropertyOptional()
  preInvestAccount?: number;
  @Expose()
  @ApiPropertyOptional()
  investAccount?: number;
  @Expose()
  @ApiPropertyOptional()
  agreedAccount?: number;
  @Expose()
  @ApiPropertyOptional()
  limitAccount?: number;
  @Expose()
  @ApiPropertyOptional()
  returnedAccount?: number;
  @Expose()
  @ApiPropertyOptional()
  profitAccount?: number;
  @Expose()
  @ApiPropertyOptional()
  middleName: string;
  @Expose()
  @ApiPropertyOptional()
  inn: string;
  @Expose()
  @ApiPropertyOptional()
  dateOfBirth: Date;
  @Expose()
  @ApiPropertyOptional()
  issueDate: Date;
  @Expose()
  @ApiPropertyOptional()
  placeOfBirth: string;
  @Expose()
  @ApiPropertyOptional()
  address: string;
  @Expose()
  @ApiPropertyOptional()
  factAddress: string;
  @Expose()
  @ApiPropertyOptional()
  passportNumber: string;
  @Expose()
  @ApiPropertyOptional()
  passportIssuedBy: string;
  @Expose()
  @ApiPropertyOptional()
  passportCodeDepartment: string;
  @Expose()
  @ApiPropertyOptional()
  orgInn: string;
  @Expose()
  @ApiPropertyOptional()
  orgOgrn: string;
  @Expose()
  @ApiPropertyOptional()
  orgName: string;
  @Expose()
  @ApiPropertyOptional()
  orgLocation: string;
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
  infoRating: string;
  @Type(() => InvoiceDto)
  @Expose()
  @ApiPropertyOptional({
    type: [InvoiceDto],
  })
  invoices: InvoiceDto[];
  @Type(() => RegistryDto)
  @Expose()
  @ApiPropertyOptional({
    type: [RegistryDto],
  })
  registryEntries?: RegistryDto[];
  @Type(() => InvestmentDto)
  @Expose()
  @ApiPropertyOptional({
    type: [InvestmentDto],
  })
  investments: InvestmentDto[];
  @Type(() => OperationDto)
  @Expose()
  @ApiPropertyOptional({
    type: [OperationDto],
  })
  approverOperations: OperationDto[];
  @Type(() => OperationDto)
  @Expose()
  @ApiPropertyOptional({
    type: [OperationDto],
  })
  investorOperations: OperationDto[];
  @Type(() => AgreementDto)
  @Expose()
  @ApiPropertyOptional({
    type: [AgreementDto],
  })
  investorAgreements: AgreementDto[];
  @Type(() => OperationDto)
  @Expose()
  @ApiPropertyOptional({
    type: [OperationDto],
  })
  lenderOperations: OperationDto[];
  @Type(() => AgreementDto)
  @Expose()
  @ApiPropertyOptional({
    type: [AgreementDto],
  })
  lenderAgreements: AgreementDto[];
  @Type(() => OfferDto)
  @Expose()
  @ApiPropertyOptional({
    type: [OfferDto],
  })
  receivedOffers: OfferDto[];
  @Type(() => MessageDto)
  @Expose()
  @ApiPropertyOptional({
    type: [MessageDto],
  })
  messages: MessageDto[];
  @Type(() => OfferDto)
  @Expose()
  @ApiPropertyOptional({
    type: [OfferDto],
  })
  postedOffers: OfferDto[];
  @Type(() => PictureDto)
  @Expose()
  @ApiPropertyOptional({
    type: [PictureDto],
  })
  pictures: PictureDto[];
  @Expose()
  @ApiPropertyOptional()
  createdAt: Date;
}
