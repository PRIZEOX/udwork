import { Role } from '../enums/role';
import { UserStatus } from '../enums/user.status';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AgreementType } from '../enums/agreement.type';
import { Type } from 'class-transformer';

export const agreementsSeed = [
  {
    number: 'УД-2022-1',
    date: new Date(),
    type: AgreementType.APPLY_INVESTOR_FL,
    // investor: UuidDto,
    // lender: UuidDto,
    // offer: UuidDto,
    // invoices: UuidDto[],
  },
  {
    number: 'УД-2022-2',
    date: new Date(),
    type: AgreementType.APPLY_INVESTOR_UL,
    // investor: UuidDto,
    // lender: UuidDto,
    // offer: UuidDto,
    // invoices: UuidDto[],
  },
  {
    number: 'УД-2022-3',
    date: new Date(),
    type: AgreementType.APPLY_LENDER,
    // investor: UuidDto,
    // lender: UuidDto,
    // offer: UuidDto,
    // invoices: UuidDto[],
  },
  {
    number: 'УД-2022-4',
    date: new Date(),
    type: AgreementType.INVESTOR_CLAIM,
    // investor: UuidDto,
    // lender: UuidDto,
    // offer: UuidDto,
    // invoices: UuidDto[],
  },
  {
    number: 'УД-2022-5',
    date: new Date(),
    type: AgreementType.LENDER_OFERTA,
    // investor: UuidDto,
    // lender: UuidDto,
    // offer: UuidDto,
    // invoices: UuidDto[],
  },
];
