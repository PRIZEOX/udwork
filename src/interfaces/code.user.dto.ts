import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';

export class CodeUserDto {
  @ApiProperty()
  @Length(1, 18)
  phone: string;
}
