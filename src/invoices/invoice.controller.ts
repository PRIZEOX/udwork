import { Controller, Get } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { Invoice } from './invoice.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InvoiceCreateDto } from './invoice.create.dto';
import { InvoiceUpdateDto } from './invoice.update.dto';
import { InvoiceDto } from './invoice.dto';
import { InvoiceGetmanyDto } from './invoice.getmany.dto';
@ApiTags('Счета на оплату')
@ApiBearerAuth()
@Crud({
  model: {
    type: Invoice,
  },
  dto: {
    create: InvoiceCreateDto,
    update: InvoiceUpdateDto,
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
    // join: {
    //   company: {
    //     eager: true,
    //   },
    // },
    sort: [
      {
        field: 'uuid',
        order: 'DESC',
      },
    ],
  },
  serialize: {
    getMany: InvoiceGetmanyDto,
    create: InvoiceDto,
    update: InvoiceDto,
    get: InvoiceDto,
  },
})
@Controller('/api/v1/invoices')
export class InvoiceController implements CrudController<Invoice> {
  constructor(public service: InvoiceService) {}
  get base(): CrudController<Invoice> {
    return this;
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'create',
  // })
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: InvoiceCreateDto,
  ) {
    return this.base.createOneBase(req, <Invoice>dto);
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'update',
  // })
  updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: InvoiceUpdateDto,
  ) {
    return this.base.updateOneBase(req, <Invoice>dto);
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
