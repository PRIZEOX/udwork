import * as sharp from 'sharp';
import * as fs from 'fs';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users.service';
import { promisify } from 'util';
const unlinkAsync = promisify(fs.unlink);

@Injectable()
export class ImageService {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {}
  private readonly logger = new Logger(ImageService.name);
  private widthS = 150;
  private widthM = 300;
  private async resize(user, file, width, height) {
    const extension = file.originalname.split('.').pop();
    const filename = 'static/upload/avatars/' + user.uuid + '.' + extension;
    const outputFilename =
      'static/upload/avatars/' +
      user.uuid +
      '-' +
      width.toString() +
      '.' +
      extension;
    try {
      await sharp(filename)
        .resize({
          width,
          height,
        })
        .toFile(outputFilename);
    } catch (error) {
      this.logger.error(error);
    }
  }
  public async processImages(user, file) {
    await this.resize(user, file, this.widthS, this.widthS);
    await this.resize(user, file, this.widthM, this.widthM);
    const extension = file.originalname.split('.').pop();
    const avatarL = '/upload/avatars/' + user.uuid + '.' + extension;
    const avatarS =
      '/upload/avatars/' + user.uuid + '-' + this.widthS + '.' + extension;
    const avatarM =
      '/upload/avatars/' + user.uuid + '-' + this.widthM + '.' + extension;
    const images = {
      avatarS,
      avatarM,
      avatarL,
    };
    await this.usersService.saveUser({ uuid: user.uuid, ...images });
    return await this.usersService.findByUuid(user.uuid);
  }
  public async deleteFile({ uuid }, { file }) {
    // const user = await this.usersService.findByUuid(uuid);
    // for (const picture of user.pictures) {
    //   await unlinkAsync('static' + picture.path);
    //
    // }
    // await unlinkAsync('static' + user.avatarM);
    // await unlinkAsync('static' + user.avatarL);
    // await this.usersService.saveUser({
    //   uuid,
    //   avatarS: null,
    //   avatarM: null,
    //   avatarL: null,
    // });
    // return await this.usersService.findByUuid(uuid);
  }
}
