import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Exclude, Type } from 'class-transformer';
import { UserDto } from '../users/user.dto';
import { MessageStatus } from '../enums/message.status';
class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}
@Exclude()
export class MessageDto {
  @Expose()
  @ApiProperty()
  uuid: number;
  @Expose()
  @ApiProperty()
  status?: MessageStatus;
  @Expose()
  @ApiProperty({ type: () => UuidDto })
  user?: UuidDto;
  @Expose()
  @ApiProperty()
  createdAt?: string;
  @Expose()
  @ApiProperty()
  topic: string;
  @Expose()
  @ApiProperty()
  text: string;
}
