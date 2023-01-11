import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import common from '../common/entity.mixin';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../enums/role';
import { UserStatus } from '../enums/user.status';
import { Agreement } from '../agreements/agreement.entity';
import { Offer } from '../offers/offer.entity';
import { Operation } from '../operations/operation.entity';
import { Invoice } from '../invoices/invoice.entity';
import { UserType } from '../enums/user.type';
import { Picture } from '../pictures/picture.entity';
import { Investment } from '../investments/investment.entity';
import { Message } from '../messages/message.entity';
import { Registry } from '../registry/registry.entity';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  uuid?: number;
  @ApiProperty()
  @Column()
  phone?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  email?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  declineReason?: string;
  @Column(common.varcharNullable)
  passwordHash?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  code?: string;
  @ApiProperty()
  @Column({ default: false })
  active?: boolean;
  @ApiProperty()
  @Column({ default: false })
  terrorist?: boolean;
  @ApiProperty()
  @Column({ default: false })
  enabled?: boolean;
  @ApiProperty()
  @Column(common.varcharNullable)
  firstName?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  lastName?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  middleName?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  inn?: string;
  @ApiProperty()
  @Column({ default: null, nullable: true, type: 'datetime' })
  dateOfBirth?: Date;
  @ApiProperty()
  @Column({ default: null, nullable: true, type: 'datetime' })
  issueDate?: Date;
  @ApiProperty()
  @Column(common.varcharNullable)
  placeOfBirth?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  address?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  factAddress?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  passportNumber?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  passportIssuedBy?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  passportCodeDepartment?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  orgInn?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  orgOgrn?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  orgName?: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  orgLocation?: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoPercent?: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoStructure?: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoAnnual?: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoActivities?: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoFacts?: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoSums?: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoRating?: string;
  @ApiProperty()
  @Column({
    type: 'enum',
    enum: Role,
    // charset: 'utf8mb4',
    // collation: 'utf8mb4_unicode_ci',
  })
  role?: Role;
  @ApiProperty()
  @Column({
    type: 'enum',
    enum: UserStatus,
    // charset: 'utf8mb4',
    // collation: 'utf8mb4_unicode_ci',
  })
  status?: UserStatus;
  @ApiProperty()
  @Column({
    type: 'enum',
    enum: UserType,
    // charset: 'utf8mb4',
    // collation: 'utf8mb4_unicode_ci',
  })
  type?: UserType;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: 0,
  })
  mainAccount?: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: 0,
  })
  reserveAccount?: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: 0,
  })
  preInvestAccount?: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: 0,
  })
  investAccount?: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: 0,
  })
  agreedAccount?: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: 0,
  })
  limitAccount?: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: 0,
  })
  returnedAccount?: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: 0,
  })
  profitAccount?: number;
  @ApiProperty()
  @CreateDateColumn()
  createdAt?: Date;
  @ApiProperty()
  @UpdateDateColumn()
  updatedAt?: Date;
  @ApiProperty()
  @OneToMany(() => Invoice, (invoice) => invoice.contragent)
  invoices?: Invoice[];
  @ApiProperty()
  @OneToMany(() => Investment, (investment) => investment.investor)
  investments?: Investment[];
  @ApiProperty()
  @OneToMany(() => Operation, (operation) => operation.approver)
  approverOperations?: Operation[];
  @ApiProperty()
  @OneToMany(() => Operation, (operation) => operation.investor)
  investorOperations?: Operation[];
  @ApiProperty()
  @OneToMany(() => Agreement, (agreement) => agreement.investor)
  investorAgreements?: Agreement[];
  @ApiProperty()
  @OneToMany(() => Operation, (operation) => operation.lender)
  lenderOperations?: Operation[];
  @ApiProperty()
  @OneToMany(() => Agreement, (agreement) => agreement.lender)
  lenderAgreements?: Agreement[];
  @ApiProperty()
  @OneToMany(() => Offer, (offer) => offer.lender)
  postedOffers?: Offer[];
  @ApiProperty()
  @OneToMany(() => Registry, (registry) => registry.investor)
  registryEntries?: Registry[];
  @ApiProperty()
  @OneToMany(() => Message, (message) => message.user)
  messages?: Message[];
  @ApiProperty()
  @ManyToMany(() => Offer, (offer) => offer.investors)
  receivedOffers?: Offer[];
  @ApiProperty()
  @OneToMany(() => Picture, (picture) => picture.user)
  pictures?: Picture[];
}
