import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { RegisterUserDto } from '../../interfaces/register.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterService } from './register.service';
import { ValidationPipe } from '../../common/validation.pipe';

@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}
  @Post('api/v1/auth/register')
  @ApiTags('Users')
  @ApiOperation({ description: 'Register user' })
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
    const code = await this.registerService.createUser(registerUserDto);
    if (code === 'email') {
      throw new HttpException(
        'Такой email уже зарегистрирован на платформе',
        406,
      );
    } else if (code === 'phone') {
      throw new HttpException(
        'Такой телефон уже зарегистрирован на платформе',
        405,
      );
    } else {
      return code;
    }
  }
}
