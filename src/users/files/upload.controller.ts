/* eslint-disable prettier/prettier */
import {
  Controller, Logger,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtGuard } from '../../auth/guards/jwt.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { User } from '../user.entity';
import { createHash } from 'crypto';
import { UsersService } from '../users.service';
@UseGuards(JwtGuard)
@Controller()
export class UploadController {
  constructor(private usersService: UsersService) {}
  @Post('api/v1/media/upload')
  @ApiTags('Users')
  @ApiOperation({
    description:
      'Upload user avatar. Creates 3 resized images for a user. Returns user object populated with the images paths',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'File uploaded',
    type: User,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized, access denied',
  })
  @UseGuards(JwtGuard)
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'static/upload/ids',
        filename: function (req, file, cb) {
          const logger = new Logger(UsersService.name);
          const fileSize = parseInt(req.headers['content-length']);
          // @ts-ignore
          const user = req.user.sub;
          const extension = file.originalname.split('.').pop();
          const hash = createHash('sha256')
            .update(file.originalname)
            .digest('hex');
          const filename = user.uuid + '-' + hash + '.' + extension;
          logger.log(file);
          if (
            (file.mimetype === 'image/png' ||
              file.mimetype === 'image/svg+xml' ||
              file.mimetype === 'image/jpg' ||
              file.mimetype === 'image/jpeg' ||
              file.mimetype === 'application/pdf' ||
              file.mimetype === 'application/octet-stream') &&
            fileSize <= 15282810
          ) {
            cb(null, filename);
          } else {
            cb(null, '406');
          }
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req) {
    return await this.usersService.saveUserPicture(req.user.sub, file);
  }
}
