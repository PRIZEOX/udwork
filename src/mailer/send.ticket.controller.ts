import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/roles/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MailerService } from './mailer.service';
import { TicketDto } from '../interfaces/ticket.dto';

@Controller()
export class SendTicketController {
  constructor(private readonly mailerService: MailerService) {}
  @Post('api/v1/ticket')
  @ApiTags('Заявка на вывод')
  @ApiOperation({ description: 'Get full user profile with joined entities' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized, access denied',
  })
  async getUser(@Request() req, @Body() ticket: TicketDto) {
    return await this.mailerService.sendTicket(ticket);
  }
}
