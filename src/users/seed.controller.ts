import {
  Controller,
  Get,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UsersService } from '../users/users.service';
import { AgreementsService } from '../agreements/agreements.service';
import { OffersService } from '../offers/offers.service';
import { OperationService } from '../operations/operation.service';
import { InvoiceService } from '../invoices/invoice.service';

@Controller()
export class SeedController {
  constructor(
    private readonly usersService: UsersService,
    private readonly agreementsService: AgreementsService,
    private readonly offersService: OffersService,
    private readonly operationService: OperationService,
    private readonly invoiceService: InvoiceService,
  ) {}
  @Get('ksh74hf83')
  @ApiTags('Тестовое заполнение БД')
  @ApiOperation({
    description:
      'Seed DB',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  async seed(@Request() req) {
    await this.usersService.seed();
    // await this.agreementsService.seed();
    // await this.operationService.seed();
    // await this.invoiceService.seed();
    // const lenders = await this.usersService.findLenders();
    // const investors = await this.usersService.findInvestors();
    // await this.offersService.seed(lenders, investors);
  }
}
