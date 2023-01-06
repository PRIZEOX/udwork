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
import { ChangeOfferStatusDto } from '../interfaces/change.offer.status.dto';
import { DeclineOfferDto } from '../interfaces/decline.offer.dto';
import { InvestmentService } from '../investments/investment.service';
import { InvestOfferDto } from '../interfaces/invest.offer.dto';
import { InvestmentStatus } from '../enums/investment.status';
import { AgreementsService } from './agreements.service';

@Controller()
export class SignAcceptController {
  constructor(private readonly agreementsService: AgreementsService) {}
  @Post('api/v1/sign/accept')
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
  async getUser(@Request() req, @Body() { sum, uuid, code }: InvestOfferDto) {
    return await this.agreementsService.signAccept(
      req.user.sub.uuid,
      {
        sum,
        investor: {
          uuid: req.user.sub.uuid,
        },
        offer: {
          uuid,
        },
      },
      code,
    );
  }
}
