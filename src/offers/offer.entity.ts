/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from '../users/user.entity';
import { OfferStatus } from '../enums/offer.status';
import { Agreement } from '../agreements/agreement.entity';
import { RepayPeriod } from '../enums/repay.period';
import common from '../common/entity.mixin';
import { Operation } from '../operations/operation.entity';
import { Role } from '../enums/role';
import { Investment } from '../investments/investment.entity';
import { Picture } from '../pictures/picture.entity';
import { Profiler } from 'inspector';
import { UserDto } from '../users/user.dto';
import { Registry } from '../registry/registry.entity';
import { Task } from '../tasker/task.entity';
import { Payment } from '../payments/payment.entity';

@Entity()
export class Offer {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  uuid: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: null,
  })
  loanCoefficient: number;
  @ApiProperty()
  @Column({ default: false })
  revocable?: boolean;
  @Column({
    nullable: false,
    type: 'boolean',
    default: false,
  })
  hasCollateral: boolean;
  @Column({
    nullable: true,
    type: 'float',
    default: null,
  })
  collateralSum: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: null,
  })
  interestRate: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: null,
  })
  rating: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'int',
    default: 0,
  })
  minVolume: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'int',
    default: null,
  })
  investPeriodDays: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'int',
    default: 0,
  })
  maxVolume: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'int',
    default: 0,
  })
  currentVolume: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'int',
    default: null,
  })
  offerPeriodDays: number;
  @ApiProperty()
  @Column(common.varcharNullable)
  name: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  number: string;
  @ApiProperty()
  @Column({ default: null, nullable: true, type: 'datetime' })
  date: Date;
  @ApiProperty()
  @Column({ default: null, nullable: true, type: 'datetime' })
  fulfillDate: Date;
  @ApiProperty()
  @Column({ default: null, nullable: true, type: 'datetime' })
  deadline: Date;
  @ApiProperty()
  @Column({
    type: 'enum',
    enum: OfferStatus,
    default: OfferStatus.DRAFT,
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
  })
  status: OfferStatus;
  @ApiProperty()
  @Column({
    type: 'enum',
    enum: RepayPeriod,
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
  })
  repayPeriod: RepayPeriod;
  @ApiProperty()
  @ManyToMany(() => User, (user) => user.receivedOffers)
  investors: User[];
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.postedOffers)
  lender: User;
  @ApiPropertyOptional({ type: () => Agreement })
  @OneToOne(() => Agreement, (agreement) => agreement.offer)
  @JoinColumn()
  agreement: Agreement;
  @ApiPropertyOptional({ type: () => Task })
  @OneToOne(() => Task, (task) => task.offer)
  @JoinColumn()
  task: Task;
  @ApiProperty()
  @OneToMany(() => Operation, (operation) => operation.offer)
  operations: Operation[];
  @ApiProperty()
  @OneToMany(() => Investment, (investment) => investment.offer)
  investments: Investment[];
  @ApiProperty()
  @OneToMany(() => Payment, (payment) => payment.offer)
  payments: Payment[];
  @ApiProperty()
  @OneToMany(() => Registry, (registry) => registry.offer)
  registryEntries?: Registry[];
  @ApiProperty()
  @Column(common.textNullable)
  infoGoals: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoExperts: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoConditions: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoRisks: string;
  @ApiProperty()
  @Column(common.textNullable)
  requisites: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoPercent: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoStructure: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoAnnual: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoActivities: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoFacts: string;
  @ApiProperty()
  @Column(common.textNullable)
  infoSums: string;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: null,
  })
  infoRating: number;
  @ApiProperty()
  @Column(common.textNullable)
  declineReason: string;
  @ApiProperty()
  @CreateDateColumn()
  createdAt?: Date;
  @ApiProperty()
  @UpdateDateColumn()
  updatedAt?: Date;
  @ApiProperty()
  @OneToMany(() => Picture, (picture) => picture.offerPublic)
  publicPictures?: Picture[];
  @ApiProperty()
  @OneToMany(() => Picture, (picture) => picture.offerPrivate)
  privatePictures?: Picture[];
}
