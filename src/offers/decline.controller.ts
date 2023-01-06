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
import { OffersService } from './offers.service';
import { DeclineOfferDto } from '../interfaces/decline.offer.dto';
@UseGuards(JwtGuard)
@Controller()
export class DeclineController {
  constructor(private readonly offersService: OffersService) {}
  @Post('api/v1/offers/decline')
  @ApiTags('Пользователи')
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
  async getUser(@Request() req, @Body() declineOfferDto: DeclineOfferDto) {
    return await this.offersService.declineOffer(req.user.sub, declineOfferDto);
  }
}
