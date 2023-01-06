import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { OperationType } from '../enums/operation.type';
import { User } from '../users/user.entity';
import { Offer } from '../offers/offer.entity';
import { MessageStatus } from '../enums/message.status';
import { UserDto } from '../users/user.dto';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class MessageCreateDto {
  @ApiPropertyOptional()
  status?: MessageStatus;
  @ApiPropertyOptional({ type: () => UuidDto })
  user?: UuidDto;
  @ApiPropertyOptional()
  createdAt?: string;
  @ApiPropertyOptional()
  topic: string;
  @ApiPropertyOptional()
  text: string;
}
