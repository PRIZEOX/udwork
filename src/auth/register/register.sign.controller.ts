import {
  Body,
  Controller, Get,
  HttpCode, HttpException,
  Post, Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SmsCodeGuard } from '../guards/sms.code.guard';
import { LoginUserDto } from '../../interfaces/login.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtDto } from '../../interfaces/jwt.dto';
import { ValidationPipe } from '../../common/validation.pipe';
import { CodeUserDto } from '../../interfaces/code.user.dto';
import { RegisterService } from './register.service';
import { RegisterCodeUserDto } from '../../interfaces/register.code.user.dto';

@Controller()
export class RegisterSignController {
  constructor(private readonly registerService: RegisterService) {}
  @Post('api/v1/auth/register/sign')
  @ApiTags('Standard authentication')
  @ApiOperation({
    description: 'Send SMS code endpoint.',
  })
  @ApiResponse({
    status: 200,
    description: 'Code sent',
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed',
  })
  @ApiResponse({
    status: 404,
    description: 'Phone not found',
  })
  @HttpCode(200)
  async login(
    @Request() req,
    @Body(new ValidationPipe()) codeUserDto: RegisterCodeUserDto,
  ) {
    const response = await this.registerService.validateUser(codeUserDto);
    switch (response) {
      case 404:
        throw new HttpException('Пользователь не найден', 404);
      case 401:
        throw new HttpException('Неправильный код', 404);
      default:
        return response;
    }
  }
}
