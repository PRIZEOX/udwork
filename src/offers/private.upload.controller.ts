import {
  Controller,
  HttpException,
  Logger,
  Post,
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
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { createHash } from 'crypto';
import { OffersService } from './offers.service';
import { PicturesService } from '../pictures/pictures.service';
const logger = new Logger('PrivateOfferUpload');
@UseGuards(JwtGuard)
@Controller()
export class PrivateUploadController {
  constructor(
    private offersService: OffersService,
    private picturesService: PicturesService,
  ) {}
  @Post('api/v1/offer/private/upload')
  @ApiTags('Users')
  @ApiOperation({
    description:
      'Upload user avatar. Creates 3 resized images for a user. Returns user object populated with the images paths',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'File uploaded',
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
        privateFile: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('privateFile', {
      storage: diskStorage({
        destination: 'static/upload/private',
        filename: function (req, file, cb) {
          const fileSize = parseInt(req.headers['content-length']);
          // @ts-ignore
          const user = req.user.sub;
          file.originalname = Buffer.from(file.originalname, 'latin1').toString(
            'utf8',
          );
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
    switch (file.filename) {
      case '406':
        throw new HttpException(
          "We can't accept this photo. Please try again or choose another file.",
          406,
        );
      default:
        return await this.offersService.savePrivatePicture(req.user.sub, file);
    }
  }
}
