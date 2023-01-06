import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import common from '../common/entity.mixin';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from '../users/user.entity';
import { Offer } from '../offers/offer.entity';
import { Invoice } from '../invoices/invoice.entity';

@Entity()
export class Registry {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  uuid?: number;
  @ApiProperty()
  @Column(common.varcharNullable)
  number: string;
  @ApiProperty()
  @Column({
    nullable: true,
    type: 'float',
    default: null,
  })
  sum?: number;
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.registryEntries)
  @JoinTable()
  investor: User;
  @ApiPropertyOptional({ type: () => Offer })
  @ManyToOne(() => Offer, (offer) => offer.registryEntries)
  offer: Offer;
  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;
}
