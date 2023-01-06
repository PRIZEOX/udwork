import { Controller, Get } from '@nestjs/common';
import { OperationService } from './operation.service';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { Operation } from './operation.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OperationCreateDto } from './operation.create.dto';
import { OperationUpdateDto } from './operation.update.dto';
import { OperationDto } from './operation.dto';
import { OperationGetmanyDto } from './operation.getmany.dto';
@ApiTags('Операции системы')
@ApiBearerAuth()
@Crud({
  model: {
    type: Operation,
  },
  dto: {
    create: OperationCreateDto,
    update: OperationUpdateDto,
  },
  params: {
    id: {
      field: 'uuid',
      type: 'uuid',
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
    getMany: OperationGetmanyDto,
    create: OperationDto,
    update: OperationDto,
    get: OperationDto,
  },
})
@Controller('/api/v1/operations')
export class OperationController implements CrudController<Operation> {
  constructor(public service: OperationService) {}
  get base(): CrudController<Operation> {
    return this;
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'create',
  // })
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: OperationCreateDto,
  ) {
    return this.base.createOneBase(req, <Operation>dto);
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'update',
  // })
  updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: OperationUpdateDto,
  ) {
    return this.base.updateOneBase(req, <Operation>dto);
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
