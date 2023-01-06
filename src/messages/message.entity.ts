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
import { Offer } from '../offers/offer.entity';
import { MessageStatus } from '../enums/message.status';
import common from '../common/entity.mixin';
@Entity()
export class Message {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  uuid?: number;
  @ApiProperty()
  @Column({
    type: 'enum',
    enum: MessageStatus,
    default: MessageStatus.UNREAD,
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
  })
  status?: MessageStatus;
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.messages)
  user?: User;
  @ApiProperty()
  @CreateDateColumn()
  createdAt?: string;
  @ApiProperty()
  @Column(common.textNullable)
  topic: string;
  @ApiProperty()
  @Column(common.textNullable)
  text: string;
}
