"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Invoice = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var user_entity_1 = require("../users/user.entity");
var entity_mixin_1 = require("../common/entity.mixin");
var agreement_entity_1 = require("../agreements/agreement.entity");
var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Invoice.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'int',
            "default": null
        })
    ], Invoice.prototype, "sum");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], Invoice.prototype, "number");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return user_entity_1.User; } }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.invoices; }),
        (0, typeorm_1.JoinTable)()
    ], Invoice.prototype, "contragent");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return agreement_entity_1.Agreement; } }),
        (0, typeorm_1.ManyToOne)(function () { return agreement_entity_1.Agreement; }, function (agreement) { return agreement.invoices; }),
        (0, typeorm_1.JoinTable)()
    ], Invoice.prototype, "agreement");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Invoice.prototype, "createdAt");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], Invoice.prototype, "updatedAt");
    Invoice = __decorate([
        (0, typeorm_1.Entity)()
    ], Invoice);
    return Invoice;
}());
exports.Invoice = Invoice;
