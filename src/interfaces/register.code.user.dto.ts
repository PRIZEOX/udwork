import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';

export class RegisterCodeUserDto {
  @ApiProperty()
  phone: string;
  @ApiProperty()
  code: string;
}
