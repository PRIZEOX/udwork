import {
  Body,
  Controller,
  Get,
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
import { MailerService } from './mailer.service';
import { InvestOfferDto } from '../interfaces/invest.offer.dto';
@UseGuards(JwtGuard)
@Controller()
export class SendWithdrawController {
  constructor(private readonly mailerService: MailerService) {}
  @Post('api/v1/withdraw')
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
  @UseGuards(JwtGuard)
  async getUser(@Request() req, @Body() { sum }: InvestOfferDto) {
    return await this.mailerService.sendWithdrawRequest(req.user.sub.uuid, sum);
  }
}
