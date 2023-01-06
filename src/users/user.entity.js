"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var entity_mixin_1 = require("../common/entity.mixin");
var swagger_1 = require("@nestjs/swagger");
var role_1 = require("../enums/role");
var user_status_1 = require("../enums/user.status");
var agreement_entity_1 = require("../agreements/agreement.entity");
var offer_entity_1 = require("../offers/offer.entity");
var operation_entity_1 = require("../operations/operation.entity");
var invoice_entity_1 = require("../invoices/invoice.entity");
var user_type_1 = require("../enums/user.type");
var picture_entity_1 = require("../pictures/picture.entity");
var investment_entity_1 = require("../investments/investment.entity");
var message_entity_1 = require("../messages/message.entity");
var registry_entity_1 = require("../registry/registry.entity");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)()
    ], User.prototype, "phone");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "declineReason");
    __decorate([
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "passwordHash");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "code");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": false })
    ], User.prototype, "active");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": false })
    ], User.prototype, "terrorist");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": false })
    ], User.prototype, "enabled");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "firstName");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "lastName");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "middleName");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "inn");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": null, nullable: true, type: 'datetime' })
    ], User.prototype, "dateOfBirth");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": null, nullable: true, type: 'datetime' })
    ], User.prototype, "issueDate");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "placeOfBirth");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "address");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "factAddress");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "passportNumber");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "passportIssuedBy");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "passportCodeDepartment");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "orgInn");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "orgOgrn");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "orgName");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], User.prototype, "orgLocation");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], User.prototype, "infoPercent");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], User.prototype, "infoStructure");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], User.prototype, "infoAnnual");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], User.prototype, "infoActivities");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], User.prototype, "infoFacts");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], User.prototype, "infoSums");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], User.prototype, "infoRating");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": role_1.Role,
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci'
        })
    ], User.prototype, "role");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": user_status_1.UserStatus,
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci'
        })
    ], User.prototype, "status");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": user_type_1.UserType,
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci'
        })
    ], User.prototype, "type");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": 0
        })
    ], User.prototype, "mainAccount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": 0
        })
    ], User.prototype, "reserveAccount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": 0
        })
    ], User.prototype, "preInvestAccount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": 0
        })
    ], User.prototype, "investAccount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": 0
        })
    ], User.prototype, "agreedAccount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": 0
        })
    ], User.prototype, "limitAccount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": 0
        })
    ], User.prototype, "returnedAccount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": 0
        })
    ], User.prototype, "profitAccount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.CreateDateColumn)()
    ], User.prototype, "createdAt");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], User.prototype, "updatedAt");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return invoice_entity_1.Invoice; }, function (invoice) { return invoice.contragent; })
    ], User.prototype, "invoices");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return investment_entity_1.Investment; }, function (investment) { return investment.investor; })
    ], User.prototype, "investments");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return operation_entity_1.Operation; }, function (operation) { return operation.approver; })
    ], User.prototype, "approverOperations");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return operation_entity_1.Operation; }, function (operation) { return operation.investor; })
    ], User.prototype, "investorOperations");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return agreement_entity_1.Agreement; }, function (agreement) { return agreement.investor; })
    ], User.prototype, "investorAgreements");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return operation_entity_1.Operation; }, function (operation) { return operation.lender; })
    ], User.prototype, "lenderOperations");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return agreement_entity_1.Agreement; }, function (agreement) { return agreement.lender; })
    ], User.prototype, "lenderAgreements");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return offer_entity_1.Offer; }, function (offer) { return offer.lender; })
    ], User.prototype, "postedOffers");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return registry_entity_1.Registry; }, function (registry) { return registry.investor; })
    ], User.prototype, "registryEntries");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return message_entity_1.Message; }, function (message) { return message.user; })
    ], User.prototype, "messages");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.ManyToMany)(function () { return offer_entity_1.Offer; }, function (offer) { return offer.investors; })
    ], User.prototype, "receivedOffers");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return picture_entity_1.Picture; }, function (picture) { return picture.user; })
    ], User.prototype, "pictures");
    User = __decorate([
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}());
exports.User = User;
