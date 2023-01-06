import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { RegisterUserDto } from '../../interfaces/register.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtDto } from '../../interfaces/jwt.dto';
import { RegisterService } from './register.service';
import { LoginService } from '../login/login.service';
import { ValidationPipe } from '../../common/validation.pipe';

@Controller()
export class RegisterController {
  constructor(
    private readonly registerService: RegisterService,
  ) {}
  @Post('api/v1/auth/smsregister')
  @ApiTags('Users')
  @ApiOperation({ description: 'Register user' })
  @ApiResponse({
    status: 201,
    description: 'User has been successfully created',
  })
  @ApiResponse({
    status: 406,
    description: 'Email already exists',
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed',
  })
  async register(@Body(new ValidationPipe()) registerUserDto: RegisterUserDto) {
    const code = await this.registerService.createUserBySMS(registerUserDto);
    if (code) {
      return code;
    } else {
      throw new HttpException(
        'Такой email уже зарегистрирован на платформе',
        406,
      );
    }
  }
}
