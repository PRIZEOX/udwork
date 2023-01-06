import {
  Body,
  Controller, Delete,
  Post, Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtGuard } from '../../auth/guards/jwt.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../user.entity';
import { PicturesService } from '../../pictures/pictures.service';
@UseGuards(JwtGuard)
@Controller()
export class DeleteFileController {
  constructor(private readonly picturesService: PicturesService) {}
  @Post('api/v1/media/remove')
  @ApiTags('Media')
  @ApiOperation({
    description:
      'Delete file',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'File removed',
    type: User,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized, access denied',
  })
  async deleteAvatar(@Req() req, @Body() body) {
    return await this.picturesService.deletePicture(body.file, req.user.sub);
  }
}
