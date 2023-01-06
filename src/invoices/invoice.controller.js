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
exports.InvoiceController = void 0;
var common_1 = require("@nestjs/common");
var crud_1 = require("@nestjsx/crud");
var invoice_entity_1 = require("./invoice.entity");
var swagger_1 = require("@nestjs/swagger");
var invoice_create_dto_1 = require("./invoice.create.dto");
var invoice_update_dto_1 = require("./invoice.update.dto");
var invoice_dto_1 = require("./invoice.dto");
var invoice_getmany_dto_1 = require("./invoice.getmany.dto");
var InvoiceController = /** @class */ (function () {
    function InvoiceController(service) {
        this.service = service;
    }
    Object.defineProperty(InvoiceController.prototype, "base", {
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
    InvoiceController.prototype.createOne = function (req, dto) {
        return this.base.createOneBase(req, dto);
    };
    // @UseRoles({
    //   resource: 'jobs',
    //   action: 'update',
    // })
    InvoiceController.prototype.updateOne = function (req, dto) {
        return this.base.updateOneBase(req, dto);
    };
    // @UseRoles({
    //   resource: 'jobs',
    //   action: 'delete',
    // })
    InvoiceController.prototype.deleteOne = function (req) {
        return this.base.deleteOneBase(req);
    };
    __decorate([
        (0, crud_1.Override)(),
        __param(0, (0, crud_1.ParsedRequest)()),
        __param(1, (0, crud_1.ParsedBody)())
    ], InvoiceController.prototype, "createOne");
    __decorate([
        (0, crud_1.Override)(),
        __param(0, (0, crud_1.ParsedRequest)()),
        __param(1, (0, crud_1.ParsedBody)())
    ], InvoiceController.prototype, "updateOne");
    __decorate([
        (0, crud_1.Override)()
    ], InvoiceController.prototype, "deleteOne");
    InvoiceController = __decorate([
        (0, swagger_1.ApiTags)('Счета на оплату'),
        (0, swagger_1.ApiBearerAuth)(),
        (0, crud_1.Crud)({
            model: {
                type: invoice_entity_1.Invoice
            },
            dto: {
                create: invoice_create_dto_1.InvoiceCreateDto,
                update: invoice_update_dto_1.InvoiceUpdateDto
            },
            params: {
                id: {
                    field: 'uuid',
                    type: 'number',
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
                getMany: invoice_getmany_dto_1.InvoiceGetmanyDto,
                create: invoice_dto_1.InvoiceDto,
                update: invoice_dto_1.InvoiceDto,
                get: invoice_dto_1.InvoiceDto
            }
        }),
        (0, common_1.Controller)('/api/v1/invoices')
    ], InvoiceController);
    return InvoiceController;
}());
exports.InvoiceController = InvoiceController;
