import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, OneToOne,
} from 'typeorm';
import common from '../common/entity.mixin';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AgreementType } from '../enums/agreement.type';
import { User } from '../users/user.entity';
import { Offer } from '../offers/offer.entity';
import { Invoice } from '../invoices/invoice.entity';
import { Role } from '../enums/role';
import { UserDto } from '../users/user.dto';

@Entity()
export class Agreement {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  uuid?: number;
  @ApiProperty()
  @Column(common.varcharNullable)
  number: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  pdf: string;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: null,
  })
  sum?: number;
  @ApiProperty()
  @Column({ default: null, nullable: true, type: 'datetime' })
  date: Date;
  @ApiProperty()
  @Column({
    type: 'enum',
    enum: AgreementType,
    // charset: 'utf8mb4',
    // collation: 'utf8mb4_unicode_ci',
  })
  type: AgreementType;
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.investorAgreements)
  @JoinTable()
  investor: User;
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.lenderAgreements)
  @JoinTable()
  lender: User;
  @ApiPropertyOptional({ type: () => Offer })
  @OneToOne(() => Offer, (offer) => offer.agreement)
  offer: Offer;
  @ApiProperty()
  @OneToMany(() => Invoice, (invoice) => invoice.agreement)
  @JoinTable()
  invoices: Invoice[];
  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;
  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
