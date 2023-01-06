import { Controller, UseGuards } from '@nestjs/common';
import { OffersService } from './offers.service';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Offer } from './offer.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OfferCreateDto } from './offer.create.dto';
import { OfferUpdateDto } from './offer.update.dto';
import { OfferDto } from './offer.dto';
import { OfferGetmanyDto } from './offer.getmany.dto';
import { OfferStatus } from '../enums/offer.status';
import { JwtGuard } from '../auth/guards/jwt.guard';

@ApiTags('Инвестиционные предложения')
@ApiBearerAuth()
@Crud({
  model: {
    type: Offer,
  },
  dto: {
    create: OfferCreateDto,
    update: OfferUpdateDto,
  },
  params: {
    id: {
      field: 'uuid',
      type: 'number',
      primary: true,
    },
  },
  query: {
    alwaysPaginate: true,
    join: {
      lender: {
        eager: true,
      },
      agreement: {
        eager: true,
      },
      investments: {
        eager: true,
      },
      payments: {
        eager: true,
      },
      publicPictures: {
        eager: true,
      },
      privatePictures: {
        eager: true,
      },
      'investments.investor': {
        eager: true,
      },
    },
    sort: [
      {
        field: 'uuid',
        order: 'DESC',
      },
    ],
  },
  serialize: {
    getMany: OfferGetmanyDto,
    create: OfferDto,
    update: OfferDto,
    get: OfferDto,
  },
})
@UseGuards(JwtGuard)
@Controller('/api/v1/offers')
export class OfferController implements CrudController<Offer> {
  constructor(public service: OffersService) {}
  get base(): CrudController<Offer> {
    return this;
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'create',
  // })
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: OfferCreateDto,
  ) {
    const newOffer = await this.base.createOneBase(req, <Offer>dto);
    if (dto.publicImages) {
      await this.service.savePublicPictures(newOffer.uuid, dto.publicImages);
    }
    if (dto.privateImages) {
      await this.service.savePrivatePictures(newOffer.uuid, dto.privateImages);
    }
    return newOffer;
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'update',
  // })
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: OfferUpdateDto,
  ) {
    const offerUuid = req.parsed.paramsFilter[0].value;
    if (
      dto.status === OfferStatus.REVOKED_LENDER ||
      dto.status === OfferStatus.REVOKED_TIME
    ) {
      await this.service.cancelOffer(offerUuid);
    }
    if (dto.publicImages) {
      await this.service.savePublicPictures(offerUuid, dto.publicImages);
    }
    if (dto.privateImages) {
      await this.service.savePrivatePictures(offerUuid, dto.privateImages);
    }
    return this.base.updateOneBase(req, <Offer>dto);
  }

  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'delete',
  // })
  @Override()
  deleteOne(@ParsedRequest() req: CrudRequest) {
    return this.service.deleteOffer(req.parsed.paramsFilter[0].value);
  }
}
