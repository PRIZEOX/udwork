import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserController } from './user.controller';
import { SeedController } from './seed.controller';
import { OffersModule } from '../offers/offers.module';
import { OperationModule } from '../operations/operation.module';
import { AgreementsModule } from '../agreements/agreements.module';
import { InvoiceModule } from '../invoices/invoice.module';
import { Offer } from '../offers/offer.entity';
import { Operation } from '../operations/operation.entity';
import { Invoice } from '../invoices/invoice.entity';
import { Agreement } from '../agreements/agreement.entity';
import { ProfileMeController } from './profile.me.controller';
import { SaveInfoController } from './save.info.controller';
import { UploadController } from './files/upload.controller';
import { Picture } from '../pictures/picture.entity';
import { PicturesService } from '../pictures/pictures.service';
import { PicturesModule } from '../pictures/pictures.module';
import { DeleteFileController } from './files/delete.file.controller';
import { ImageService } from './files/image.service';
import { PasswordUpdateController } from './password.update.controller';
import { SendProfileCodeController } from './sign/send.profile.code.controller';
import { SendRegisterCodeController } from './sign/send.register.code.controller';
import { SendCodeController } from './sign/send.code.controller';
import { MailerModule } from '../mailer/mailer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Offer,
      Operation,
      Invoice,
      Agreement,
      Picture,
    ]),
    PicturesModule,
    ConfigModule,
    OffersModule,
    OperationModule,
    AgreementsModule,
    InvoiceModule,
    forwardRef(() => MailerModule),
  ],
  providers: [UsersService, ConfigService, ImageService],
  controllers: [
    UserController,
    SeedController,
    ProfileMeController,
    SaveInfoController,
    UploadController,
    DeleteFileController,
    PasswordUpdateController,
    SendProfileCodeController,
    SendRegisterCodeController,
    SendCodeController,
  ],
  exports: [UsersService],
})
export class UsersModule {}
