import { Controller, Get, UseGuards } from '@nestjs/common';
import { AgreementsService } from './agreements.service';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Agreement } from './agreement.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AgreementCreateDto } from './agreement.create.dto';
import { AgreementUpdateDto } from './agreement.update.dto';
import { AgreementDto } from './agreement.dto';
import { AgreementGetmanyDto } from './agreement.getmany.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
@ApiTags('Договоры')
@ApiBearerAuth()
@Crud({
  model: {
    type: Agreement,
  },
  dto: {
    create: AgreementCreateDto,
    update: AgreementUpdateDto,
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
      investor: {
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
    getMany: AgreementGetmanyDto,
    create: AgreementDto,
    update: AgreementDto,
    get: AgreementDto,
  },
})
@UseGuards(JwtGuard)
@Controller('/api/v1/agreements')
export class AgreementController implements CrudController<Agreement> {
  constructor(public service: AgreementsService) {}
  get base(): CrudController<Agreement> {
    return this;
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'create',
  // })
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: AgreementCreateDto,
  ) {
    return await this.service.createInvoice(dto.investor.uuid, dto.sum);
    // return this.base.createOneBase(req, <Agreement>dto);
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'update',
  // })
  updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: AgreementUpdateDto,
  ) {
    return this.base.updateOneBase(req, <Agreement>dto);
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'delete',
  // })
  deleteOne(req: CrudRequest) {
    return this.base.deleteOneBase(req);
  }
}
