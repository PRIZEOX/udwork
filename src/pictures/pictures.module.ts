import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from './picture.entity';
import { PicturesService } from './pictures.service';

@Module({
  imports: [TypeOrmModule.forFeature([Picture])],
  providers: [PicturesService],
  controllers: [],
  exports: [PicturesService],
})
export class PicturesModule {}
