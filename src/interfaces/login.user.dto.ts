import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';

export class LoginUserDto {
  @ApiProperty()
  @Length(1, 30)
  username?: string;
  @ApiProperty()
  @Length(1, 30)
  email?: string;
  @ApiProperty()
  remember?: boolean;
  @ApiProperty()
  @Length(1, 30)
  password: string;
}
