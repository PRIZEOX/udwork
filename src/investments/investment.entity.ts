import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, OneToOne, JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from '../users/user.entity';
import { OperationType } from '../enums/operation.type';
import { Offer } from '../offers/offer.entity';
import { Role } from '../enums/role';
import { InvestmentStatus } from '../enums/investment.status';
import { Task } from '../tasker/task.entity';

@Entity()
export class Investment {
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
    enum: InvestmentStatus,
    default: InvestmentStatus.RESERVED,
    // charset: 'utf8mb4',
    // collation: 'utf8mb4_unicode_ci',
  })
  status?: InvestmentStatus;
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.investments)
  investor?: User;
  @ApiProperty({ type: () => Offer })
  @ManyToOne(() => Offer, (offer) => offer.investments)
  offer?: Offer;
  @ApiProperty({ type: () => Task })
  @OneToOne(() => Task, (task) => task.offer)
  task: Task;
  @ApiProperty()
  @CreateDateColumn()
  createdAt?: Date;
  @ApiProperty()
  @UpdateDateColumn()
  updatedAt?: Date;
}
