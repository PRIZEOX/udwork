import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Offer } from '../offers/offer.entity';

@Entity()
export class Payment {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  uuid?: number;
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
  @ApiProperty({ type: () => Offer })
  @ManyToOne(() => Offer, (offer) => offer.payments)
  @JoinTable()
  offer?: Offer;
  @Column({
    nullable: false,
    type: 'boolean',
    default: false,
  })
  completed: boolean;
}
