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
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';
import { OperationType } from '../enums/operation.type';
import { Offer } from '../offers/offer.entity';
import { Role } from '../enums/role';

@Entity()
export class Operation {
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
  @Column({
    type: 'enum',
    enum: OperationType,
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
  })
  type?: OperationType;
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.lenderOperations)
  @JoinTable()
  lender?: User;
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.investorOperations)
  @JoinTable()
  investor?: User;
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.approverOperations)
  @JoinTable()
  approver?: User;
  @ApiProperty({ type: () => Offer })
  @ManyToOne(() => Offer, (offer) => offer.operations)
  @JoinTable()
  offer?: Offer;
  @ApiProperty()
  @CreateDateColumn()
  createdAt?: string;
  @ApiProperty()
  @UpdateDateColumn()
  updatedAt?: string;
}
