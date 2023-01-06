import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MessageService } from './message.service';
import { ReadDto } from '../interfaces/read.dto';
@UseGuards(JwtGuard)
@Controller()
export class ReadController {
  constructor(private readonly messageService: MessageService) {}
  @Post('api/v1/messages/read')
  @ApiTags('Сообщения')
  @ApiOperation({ description: 'Прочитать сообщение' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized, access denied',
  })
  @UseGuards(JwtGuard)
  async getUser(@Request() req, @Body() { uuid }: ReadDto) {
    return await this.messageService.read(uuid);
  }
}
