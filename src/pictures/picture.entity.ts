import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import common from '../common/entity.mixin';
import { ApiProperty } from '@nestjs/swagger';
import { Offer } from '../offers/offer.entity';
import { User } from '../users/user.entity';

@Entity()
export class Picture {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column(common.varcharNullable)
  path: string;
  @ApiProperty()
  @Column(common.varcharNullable)
  origin: string;
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.pictures)
  user: User;
  @ApiProperty({ type: () => Offer })
  @ManyToOne(() => Offer, (offer) => offer.publicPictures)
  offerPublic: Offer;
  @ApiProperty({ type: () => Offer })
  @ManyToOne(() => Offer, (offer) => offer.privatePictures)
  offerPrivate: Offer;
  @ApiProperty()
  @Column({ default: false })
  private: boolean;
}
