import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ChangeOfferStatusDto } from '../interfaces/change.offer.status.dto';
import { OffersService } from './offers.service';
import { UuidDto } from '../interfaces/uuid.dto';
@UseGuards(JwtGuard)
@Controller()
export class PayController {
  constructor(private readonly offersService: OffersService) {}
  @Post('api/v1/offers/pay')
  @ApiTags('Пользователи')
  @ApiOperation({ description: 'Confirm lender loan delivered' })
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
  async getUser(@Request() req, @Body() uuidDto: UuidDto) {
    return await this.offersService.pay(uuidDto);
  }
}
