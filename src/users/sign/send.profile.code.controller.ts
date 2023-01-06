import {
  Body,
  Controller,
  HttpException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RegisterUserDto } from '../../interfaces/register.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '../../common/validation.pipe';
import { JwtGuard } from '../../auth/guards/jwt.guard';
import { UsersService } from '../users.service';
@UseGuards(JwtGuard)
@Controller()
export class SendProfileCodeController {
  constructor(private readonly usersService: UsersService) {}
  @Post('api/v1/profile/send/code')
  @ApiTags('ЭЦП')
  @ApiOperation({ description: 'Sen code to user' })
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
  @UseGuards(JwtGuard)
  async register(
    @Request() req,
    @Body(new ValidationPipe()) registerUserDto: RegisterUserDto,
  ) {
    const code = await this.usersService.sendProfileCode(
      registerUserDto,
      req.user.sub,
    );
    if (code === 'phone') {
      throw new HttpException('Телефон существует', 406);
    } else {
      return code;
    }
  }
}
