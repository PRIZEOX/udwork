import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserUpdateDto } from './user.update.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller()
export class SaveInfoController {
  constructor(private readonly usersService: UsersService) {}
  @Post('api/v1/users/save')
  @ApiTags('Пользователи')
  @ApiOperation({ description: 'Save register info' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: User,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized, access denied',
  })
  @UseGuards(JwtGuard)
  async getUser(@Request() req, @Body() infoDto: UserUpdateDto) {
    const result = await this.usersService.saveUserByPhone(infoDto);
    return result;
  }
}
