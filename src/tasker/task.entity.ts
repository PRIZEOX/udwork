import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskType } from '../enums/task.type';
import { Offer } from '../offers/offer.entity';
import { Investment } from '../investments/investment.entity';

@Entity()
export class Task {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  uuid: number;
  @ApiProperty()
  @Column({
    type: 'enum',
    enum: TaskType,
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
  })
  type?: TaskType;
  @ApiProperty()
  @Column({ default: null, nullable: true, type: 'datetime' })
  deadline?: Date;
  @ApiPropertyOptional({ type: () => Offer })
  @OneToOne(() => Offer, (offer) => offer.task)
  @JoinColumn()
  offer: Offer;
  @ApiPropertyOptional({ type: () => Investment })
  @OneToOne(() => Investment, (investment) => investment.task)
  @JoinColumn()
  investment: Investment;
}
