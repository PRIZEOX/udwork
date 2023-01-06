import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';
import { OperationType } from '../enums/operation.type';
import { Offer } from '../offers/offer.entity';
import common from '../common/entity.mixin';
import { Agreement } from '../agreements/agreement.entity';

@Entity()
export class Invoice {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  uuid: number;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'int',
    default: null,
  })
  sum?: number;
  @ApiProperty()
  @Column(common.varcharNullable)
  number?: string;
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.invoices)
  @JoinTable()
  contragent?: User;
  @ApiProperty({ type: () => Agreement })
  @ManyToOne(() => Agreement, (agreement) => agreement.invoices)
  @JoinTable()
  agreement?: Agreement;
  @ApiProperty()
  @CreateDateColumn()
  createdAt?: string;
  @ApiProperty()
  @UpdateDateColumn()
  updatedAt?: string;
}
