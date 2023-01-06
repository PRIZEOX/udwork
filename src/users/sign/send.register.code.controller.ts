import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { RegisterUserDto } from '../../interfaces/register.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtDto } from '../../interfaces/jwt.dto';
import { RegisterService } from '../../auth/register/register.service';
import { LoginService } from '../../auth/login/login.service';
import { ValidationPipe } from '../../common/validation.pipe';
import { UsersService } from '../users.service';

@Controller()
export class SendRegisterCodeController {
  constructor(
    private readonly usersService: UsersService,
  ) {}
  @Post('api/v1/register/send/code')
  @ApiTags('ЭЦП')
  @ApiOperation({ description: 'Send code to user' })
  @ApiResponse({
    status: 201,
    description: 'User has been successfully created, and logged in',
  })
  @ApiResponse({
    status: 406,
    description: 'Phone already exists',
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed',
  })
  async register(@Body(new ValidationPipe()) registerUserDto: RegisterUserDto) {
    const code = await this.usersService.sendRegisterCode(registerUserDto);
    if (code) {
      return code;
    } else {
      throw new HttpException(
        'Ошибка которой не должно быть',
        406,
      );
    }
  }
}
