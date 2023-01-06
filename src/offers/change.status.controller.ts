import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ChangeOfferStatusDto } from '../interfaces/change.offer.status.dto';
import { OffersService } from './offers.service';
@UseGuards(JwtGuard)
@Controller()
export class ChangeStatusController {
  constructor(private readonly offersService: OffersService) {}
  @Post('api/v1/offers/approve')
  @ApiTags('Оферты')
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
  async getUser(@Request() req, @Body() changeOfferStatusDto: ChangeOfferStatusDto) {
    return await this.offersService.saveOffer(changeOfferStatusDto);
  }
}
