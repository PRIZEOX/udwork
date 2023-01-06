import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Picture } from './picture.entity';
import { createHash } from 'crypto';
import * as fs from 'fs';
import { promisify } from 'util';
const unlinkAsync = promisify(fs.unlink);
@Injectable()
export class PicturesService {
  constructor(
    @InjectRepository(Picture)
    private pictureRepository: Repository<Picture>,
  ) {}
  public async savePublic(picture): Promise<Picture | null> {
    let exPic;
    if (picture.user) {
      exPic = await this.pictureRepository.findOne({
        where: { path: picture.path, user: { uuid: picture.user.uuid } },
      });
    } else if (picture.offerPublic) {
      exPic = await this.pictureRepository.findOne({
        where: {
          path: picture.path,
          offerPublic: { uuid: picture.offerPublic.uuid },
        },
      });
    } else {
      exPic = await this.pictureRepository.findOne({
        where: { path: picture.path },
      });
    }
    if (!exPic) {
      return await this.pictureRepository.save(picture);
    }
  }
  public async savePrivate(picture): Promise<Picture | null> {
    let exPic;
    if (picture.user) {
      exPic = await this.pictureRepository.findOne({
        where: { path: picture.path, user: { uuid: picture.user.uuid } },
      });
    } else if (picture.offerPrivate) {
      exPic = await this.pictureRepository.findOne({
        where: {
          path: picture.path,
          offerPrivate: { uuid: picture.offerPrivate.uuid },
        },
      });
    } else {
      exPic = await this.pictureRepository.findOne({
        where: { path: picture.path },
      });
    }
    if (!exPic) {
      return await this.pictureRepository.save(picture);
    }
  }
  public async find(path): Promise<Picture | null> {
    const exPic = await this.pictureRepository.findOne({ where: { path } });
    return exPic;
  }
  public async deletePublicPicture(file, user): Promise<DeleteResult> {
    const extension = file.name.split('.').pop();
    const hash = createHash('sha256').update(file.name).digest('hex');
    const filename = user.uuid + '-' + hash + '.' + extension;
    const path = '/upload/public/' + filename;
    const picture = await this.pictureRepository.findOne({ where: { path } });
    await unlinkAsync('static' + picture.path);
    return await this.pictureRepository.delete(picture);
  }
  public async deletePrivatePicture(file, user): Promise<DeleteResult> {
    const extension = file.name.split('.').pop();
    const hash = createHash('sha256').update(file.name).digest('hex');
    const filename = user.uuid + '-' + hash + '.' + extension;
    const path = '/upload/private/' + filename;
    const picture = await this.pictureRepository.findOne({ where: { path } });
    await unlinkAsync('static' + picture.path);
    return await this.pictureRepository.delete(picture);
  }
  public async deletePicture(file, user): Promise<DeleteResult> {
    const extension = file.name.split('.').pop();
    const hash = createHash('sha256').update(file.name).digest('hex');
    const filename = user.uuid + '-' + hash + '.' + extension;
    const path = '/upload/ids/' + filename;
    const picture = await this.pictureRepository.findOne({ where: { path } });
    await unlinkAsync('static' + picture.path);
    return await this.pictureRepository.delete(picture);
  }
}
