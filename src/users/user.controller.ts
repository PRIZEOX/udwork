import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { User } from './user.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserCreateDto } from './user.create.dto';
import { UserUpdateDto } from './user.update.dto';
import { UserDto } from './user.dto';
import { UserGetManyDto } from './user.getmany.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
@ApiTags('Пользователи')
@ApiBearerAuth()
@Crud({
  model: {
    type: User,
  },
  dto: {
    create: UserCreateDto,
    update: UserUpdateDto,
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
      pictures: {
        eager: true,
      },
      investments: {
        eager: true,
      },
      messages: {
        eager: true,
      },
      registryEntries: {
        eager: true,
      },
    },
    sort: [
      {
        field: 'createdAt',
        order: 'DESC',
      },
    ],
  },
  serialize: {
    getMany: UserGetManyDto,
    create: UserDto,
    update: UserDto,
    get: UserDto,
  },
})
@UseGuards(JwtGuard)
@Controller('/api/v1/users')
export class UserController implements CrudController<User> {
  constructor(public service: UsersService) {}
  get base(): CrudController<User> {
    return this;
  }
  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'create',
  // })
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: UserCreateDto,
  ) {
    return this.base.createOneBase(req, <User>dto);
  }

  @Override()
  // @UseRoles({
  //   resource: 'jobs',
  //   action: 'update',
  // })
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: UserUpdateDto,
  ) {
    if (dto.phone && dto.code) {
      return await this.service.changeCreds(dto);
    } else if (dto.status) {
      const userUuid = req.parsed.paramsFilter[0].value;
      await this.service.notifyUser(userUuid, dto);
      return this.base.updateOneBase(req, <User>dto);
    } else {
      return this.base.updateOneBase(req, <User>dto);
    }
  }

  // @Override()
  // // @UseRoles({
  // //   resource: 'jobs',
  // //   action: 'delete',
  // // })
  // deleteOne(req: CrudRequest) {
  //   return this.base.deleteOneBase(req);
  // }
}
