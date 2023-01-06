import { Controller, Get, UseGuards } from '@nestjs/common';
import { InvestmentService } from './investment.service';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Investment } from './investment.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InvestmentCreateDto } from './investment.create.dto';
import { InvestmentUpdateDto } from './investment.update.dto';
import { InvestmentDto } from './investment.dto';
import { InvesmentGetmanyDto } from './invesment.getmany.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
@ApiTags('Операции системы')
@ApiBearerAuth()
@Crud({
  model: {
    type: Investment,
  },
  dto: {
    create: InvestmentCreateDto,
    update: InvestmentUpdateDto,
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
      investor: {
        eager: true,
      },
      offer: {
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
    getMany: InvesmentGetmanyDto,
    create: InvestmentDto,
    update: InvestmentDto,
    get: InvestmentDto,
  },
})
@UseGuards(JwtGuard)
@Controller('/api/v1/investments')
export class InvestmentController implements CrudController<Investment> {
  constructor(public service: InvestmentService) {}
  get base(): CrudController<Investment> {
    return this;
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'create',
  // })
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: InvestmentCreateDto,
  ) {
    return this.base.createOneBase(req, <Investment>dto);
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'update',
  // })
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: InvestmentUpdateDto,
  ) {
    const investmentUuid = req.parsed.paramsFilter[0].value;
    await this.service.cancelInvestment(investmentUuid);
    return this.base.updateOneBase(req, <Investment>dto);
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'delete',
  // })
  deleteOne(
    @ParsedRequest() req: CrudRequest,
  ) {
    return this.base.deleteOneBase(req);
  }
}
