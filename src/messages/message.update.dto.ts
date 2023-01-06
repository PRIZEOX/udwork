import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MessageStatus } from '../enums/message.status';
import { UserDto } from '../users/user.dto';

class UuidDto {
  @ApiProperty()
  readonly uuid: number;
}

export class MessageUpdateDto {
  @ApiProperty()
  uuid: number;
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
