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
import { LoginService } from './login.service';
import { ValidationPipe } from '../../common/validation.pipe';
import { CodeUserDto } from '../../interfaces/code.user.dto';

@Controller()
export class CodeController {
  constructor(private readonly loginService: LoginService) {}
  @Get('api/v1/auth/code')
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
    @Query(new ValidationPipe()) codeUserDto: CodeUserDto,
  ) {
    const response = await this.loginService.sendCode(codeUserDto);
    switch (response) {
      case 404:
        throw new HttpException('User not found', 404);
      default:
        return response;
    }
  }
}
