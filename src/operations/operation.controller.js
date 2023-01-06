"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.OperationController = void 0;
var common_1 = require("@nestjs/common");
var crud_1 = require("@nestjsx/crud");
var operation_entity_1 = require("./operation.entity");
var swagger_1 = require("@nestjs/swagger");
var operation_create_dto_1 = require("./operation.create.dto");
var operation_update_dto_1 = require("./operation.update.dto");
var operation_dto_1 = require("./operation.dto");
var operation_getmany_dto_1 = require("./operation.getmany.dto");
var OperationController = /** @class */ (function () {
    function OperationController(service) {
        this.service = service;
    }
    Object.defineProperty(OperationController.prototype, "base", {
        get: function () {
            return this;
        },
        enumerable: false,
        configurable: true
    });
    // @UseRoles({
    //   resource: 'jobs',
    //   action: 'create',
    // })
    OperationController.prototype.createOne = function (req, dto) {
        return this.base.createOneBase(req, dto);
    };
    // @UseRoles({
    //   resource: 'jobs',
    //   action: 'update',
    // })
    OperationController.prototype.updateOne = function (req, dto) {
        return this.base.updateOneBase(req, dto);
    };
    // @UseRoles({
    //   resource: 'jobs',
    //   action: 'delete',
    // })
    OperationController.prototype.deleteOne = function (req) {
        return this.base.deleteOneBase(req);
    };
    __decorate([
        (0, crud_1.Override)(),
        __param(0, (0, crud_1.ParsedRequest)()),
        __param(1, (0, crud_1.ParsedBody)())
    ], OperationController.prototype, "createOne");
    __decorate([
        (0, crud_1.Override)(),
        __param(0, (0, crud_1.ParsedRequest)()),
        __param(1, (0, crud_1.ParsedBody)())
    ], OperationController.prototype, "updateOne");
    __decorate([
        (0, crud_1.Override)()
    ], OperationController.prototype, "deleteOne");
    OperationController = __decorate([
        (0, swagger_1.ApiTags)('Операции системы'),
        (0, swagger_1.ApiBearerAuth)(),
        (0, crud_1.Crud)({
            model: {
                type: operation_entity_1.Operation
            },
            dto: {
                create: operation_create_dto_1.OperationCreateDto,
                update: operation_update_dto_1.OperationUpdateDto
            },
            params: {
                id: {
                    field: 'uuid',
                    type: 'uuid',
                    primary: true
                }
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
                        order: 'DESC'
                    },
                ]
            },
            serialize: {
                getMany: operation_getmany_dto_1.OperationGetmanyDto,
                create: operation_dto_1.OperationDto,
                update: operation_dto_1.OperationDto,
                get: operation_dto_1.OperationDto
            }
        }),
        (0, common_1.Controller)('/api/v1/operations')
    ], OperationController);
    return OperationController;
}());
exports.OperationController = OperationController;
