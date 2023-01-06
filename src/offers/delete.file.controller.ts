import {
  Body,
  Controller, Delete,
  Post, Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PicturesService } from '../pictures/pictures.service';
@UseGuards(JwtGuard)
@Controller()
export class DeleteFileOfferController {
  constructor(private readonly picturesService: PicturesService) {}
  @Post('api/v1/offer/media/remove')
  @ApiTags('Media')
  @ApiOperation({
    description:
      'Delete file',
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
    return await this.picturesService.deletePublicPicture(body.file, req.user.sub);
  }
}
