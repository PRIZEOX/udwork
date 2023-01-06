import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '../common/validation.pipe';
import { OfferCodeUserDto } from '../interfaces/offer.code.user.dto';
import { AgreementsService } from './agreements.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
@UseGuards(JwtGuard)
@Controller()
export class SignOfferController {
  constructor(private readonly agreementsService: AgreementsService) {}
  @Post('api/v1/sign/offer')
  @ApiTags('ЭЦП')
  @ApiOperation({
    description: 'Send SMS code endpoint.',
  })
  @ApiResponse({
    status: 200,
    description: 'Code sent',
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed',
  })
  @ApiResponse({
    status: 404,
    description: 'Phone not found',
  })
  @HttpCode(200)
  async login(
    @Request() req,
    @Body(new ValidationPipe()) codeUserDto: OfferCodeUserDto,
  ) {
    const response = await this.agreementsService.signOffer(codeUserDto);
    switch (response) {
      case 404:
        throw new HttpException('Пользователь не найден', 404);
      case 401:
        throw new HttpException('Неправильный код', 404);
      default:
        return response;
    }
  }
}
