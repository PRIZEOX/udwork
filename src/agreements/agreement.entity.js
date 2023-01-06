"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Agreement = void 0;
var typeorm_1 = require("typeorm");
var entity_mixin_1 = require("../common/entity.mixin");
var swagger_1 = require("@nestjs/swagger");
var agreement_type_1 = require("../enums/agreement.type");
var user_entity_1 = require("../users/user.entity");
var offer_entity_1 = require("../offers/offer.entity");
var invoice_entity_1 = require("../invoices/invoice.entity");
var Agreement = /** @class */ (function () {
    function Agreement() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Agreement.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], Agreement.prototype, "number");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], Agreement.prototype, "pdf");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": null
        })
    ], Agreement.prototype, "sum");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": null, nullable: true, type: 'datetime' })
    ], Agreement.prototype, "date");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": agreement_type_1.AgreementType,
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci'
        })
    ], Agreement.prototype, "type");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return user_entity_1.User; } }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.investorAgreements; }),
        (0, typeorm_1.JoinTable)()
    ], Agreement.prototype, "investor");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return user_entity_1.User; } }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.lenderAgreements; }),
        (0, typeorm_1.JoinTable)()
    ], Agreement.prototype, "lender");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return offer_entity_1.Offer; } }),
        (0, typeorm_1.OneToOne)(function () { return offer_entity_1.Offer; }, function (offer) { return offer.agreement; })
    ], Agreement.prototype, "offer");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return invoice_entity_1.Invoice; }, function (invoice) { return invoice.agreement; }),
        (0, typeorm_1.JoinTable)()
    ], Agreement.prototype, "invoices");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Agreement.prototype, "createdAt");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], Agreement.prototype, "updatedAt");
    Agreement = __decorate([
        (0, typeorm_1.Entity)()
    ], Agreement);
    return Agreement;
}());
exports.Agreement = Agreement;
