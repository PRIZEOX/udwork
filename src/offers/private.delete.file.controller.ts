import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PicturesService } from '../pictures/pictures.service';
@UseGuards(JwtGuard)
@Controller()
export class PrivateDeleteFileController {
  constructor(private readonly picturesService: PicturesService) {}
  @Post('api/v1/offer/private/remove')
  @ApiTags('Media')
  @ApiOperation({
    description: 'Delete file',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'File removed',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized, access denied',
  })
  @UseGuards(JwtGuard)
  async deleteAvatar(@Req() req, @Body() body) {
    return await this.picturesService.deletePrivatePicture(
      body.file,
      req.user.sub,
    );
  }
}
