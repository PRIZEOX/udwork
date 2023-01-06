import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Payment } from './payment.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaymentCreateDto } from './payment.create.dto';
import { PaymentUpdateDto } from './payment.update.dto';
import { PaymentDto } from './payment.dto';
import { PaymentGetmanyDto } from './payment.getmany.dto';
@ApiTags('Счета на оплату')
@ApiBearerAuth()
@Crud({
  model: {
    type: Payment,
  },
  dto: {
    create: PaymentCreateDto,
    update: PaymentUpdateDto,
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
      offer: {
        eager: true,
      },
      'offer.lender': {
        eager: true,
      },
    },
    sort: [
      {
        field: 'date',
        order: 'ASC',
      },
    ],
  },
  serialize: {
    getMany: PaymentGetmanyDto,
    create: PaymentDto,
    update: PaymentDto,
    get: PaymentDto,
  },
})
@Controller('/api/v1/payments')
export class PaymentController implements CrudController<Payment> {
  constructor(public service: PaymentService) {}
  get base(): CrudController<Payment> {
    return this;
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'create',
  // })
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: PaymentCreateDto,
  ) {
    return this.base.createOneBase(req, <Payment>dto);
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'update',
  // })
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: PaymentUpdateDto,
  ) {
    const result = await this.base.updateOneBase(req, <Payment>dto);
    const paymentUuid = req.parsed.paramsFilter[0].value;
    await this.service.lenderPayment(paymentUuid);
    return result;
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
