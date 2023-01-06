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
import { AgreementsService } from './agreements.service';
import { InvestOfferDto } from '../interfaces/invest.offer.dto';

@Controller()
export class InvoiceController {
  constructor(private readonly agreementsService: AgreementsService) {}
  @Post('api/v1/invoice/create')
  @ApiTags('Счет создать')
  @ApiOperation({ description: 'Создать счет на оплату' })
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
    const invoice = await this.agreementsService.createInvoice(
      req.user.sub.uuid,
      sum,
    );
    return invoice;
  }
}
