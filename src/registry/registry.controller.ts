import { Controller, Get, UseGuards } from '@nestjs/common';
import { RegistryService } from './registry.service';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Registry } from './registry.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RegistryCreateDto } from './registry.create.dto';
import { RegistryUpdateDto } from './registry.update.dto';
import { RegistryDto } from './registry.dto';
import { RegistryGetmanyDto } from './registry.getmany.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
@ApiTags('Реестр')
@ApiBearerAuth()
@Crud({
  model: {
    type: Registry,
  },
  dto: {
    create: RegistryCreateDto,
    update: RegistryUpdateDto,
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
    getMany: RegistryGetmanyDto,
    create: RegistryDto,
    update: RegistryDto,
    get: RegistryDto,
  },
})
@UseGuards(JwtGuard)
@Controller('/api/v1/registry')
export class RegistryController implements CrudController<Registry> {
  constructor(public service: RegistryService) {}
  get base(): CrudController<Registry> {
    return this;
  }

  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: RegistryCreateDto,
  ) {
    return this.base.createOneBase(req, <Registry>dto);
  }

  @Override()
  updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: RegistryUpdateDto,
  ) {
    return this.base.updateOneBase(req, <Registry>dto);
  }

  @Override()
  deleteOne(req: CrudRequest) {
    return this.base.deleteOneBase(req);
  }
}
