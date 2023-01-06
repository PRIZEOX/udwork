import { Controller, Get, UseGuards } from '@nestjs/common';
import { MessageService } from './message.service';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Message } from './message.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MessageCreateDto } from './message.create.dto';
import { MessageUpdateDto } from './message.update.dto';
import { MessageDto } from './message.dto';
import { MessageGetmanyDto } from './message.getmany.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
@ApiTags('Операции системы')
@ApiBearerAuth()
@Crud({
  model: {
    type: Message,
  },
  dto: {
    create: MessageCreateDto,
    update: MessageUpdateDto,
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
    getMany: MessageGetmanyDto,
    create: MessageDto,
    update: MessageDto,
    get: MessageDto,
  },
})
@UseGuards(JwtGuard)
@Controller('/api/v1/messages')
export class MessageController implements CrudController<Message> {
  constructor(public service: MessageService) {}
  get base(): CrudController<Message> {
    return this;
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'create',
  // })
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: MessageCreateDto,
  ) {
    return this.base.createOneBase(req, <Message>dto);
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'update',
  // })
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: MessageUpdateDto,
  ) {
    return this.base.updateOneBase(req, <Message>dto);
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
