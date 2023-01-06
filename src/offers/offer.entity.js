"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Offer = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var user_entity_1 = require("../users/user.entity");
var offer_status_1 = require("../enums/offer.status");
var agreement_entity_1 = require("../agreements/agreement.entity");
var repay_period_1 = require("../enums/repay.period");
var entity_mixin_1 = require("../common/entity.mixin");
var operation_entity_1 = require("../operations/operation.entity");
var investment_entity_1 = require("../investments/investment.entity");
var picture_entity_1 = require("../pictures/picture.entity");
var registry_entity_1 = require("../registry/registry.entity");
var task_entity_1 = require("../tasker/task.entity");
var payment_entity_1 = require("../payments/payment.entity");
var Offer = /** @class */ (function () {
    function Offer() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Offer.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": null
        })
    ], Offer.prototype, "loanCoefficient");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": false })
    ], Offer.prototype, "revocable");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            type: 'boolean',
            "default": false
        })
    ], Offer.prototype, "hasCollateral");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": null
        })
    ], Offer.prototype, "collateralSum");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": null
        })
    ], Offer.prototype, "interestRate");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": null
        })
    ], Offer.prototype, "rating");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'int',
            "default": 0
        })
    ], Offer.prototype, "minVolume");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'int',
            "default": null
        })
    ], Offer.prototype, "investPeriodDays");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'int',
            "default": 0
        })
    ], Offer.prototype, "maxVolume");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'int',
            "default": 0
        })
    ], Offer.prototype, "currentVolume");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'int',
            "default": null
        })
    ], Offer.prototype, "offerPeriodDays");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], Offer.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], Offer.prototype, "number");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": null, nullable: true, type: 'datetime' })
    ], Offer.prototype, "date");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": null, nullable: true, type: 'datetime' })
    ], Offer.prototype, "fulfillDate");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": null, nullable: true, type: 'datetime' })
    ], Offer.prototype, "deadline");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": offer_status_1.OfferStatus,
            "default": offer_status_1.OfferStatus.DRAFT,
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci'
        })
    ], Offer.prototype, "status");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": repay_period_1.RepayPeriod,
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci'
        })
    ], Offer.prototype, "repayPeriod");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.ManyToMany)(function () { return user_entity_1.User; }, function (user) { return user.receivedOffers; })
    ], Offer.prototype, "investors");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return user_entity_1.User; } }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.postedOffers; })
    ], Offer.prototype, "lender");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return agreement_entity_1.Agreement; } }),
        (0, typeorm_1.OneToOne)(function () { return agreement_entity_1.Agreement; }, function (agreement) { return agreement.offer; }),
        (0, typeorm_1.JoinColumn)()
    ], Offer.prototype, "agreement");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return task_entity_1.Task; } }),
        (0, typeorm_1.OneToOne)(function () { return task_entity_1.Task; }, function (task) { return task.offer; }),
        (0, typeorm_1.JoinColumn)()
    ], Offer.prototype, "task");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return operation_entity_1.Operation; }, function (operation) { return operation.offer; })
    ], Offer.prototype, "operations");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return investment_entity_1.Investment; }, function (investment) { return investment.offer; })
    ], Offer.prototype, "investments");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return payment_entity_1.Payment; }, function (payment) { return payment.offer; })
    ], Offer.prototype, "payments");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return registry_entity_1.Registry; }, function (registry) { return registry.offer; })
    ], Offer.prototype, "registryEntries");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "infoGoals");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "infoExperts");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "infoConditions");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "infoRisks");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "requisites");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "infoPercent");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "infoStructure");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "infoAnnual");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "infoActivities");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "infoFacts");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "infoSums");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": null
        })
    ], Offer.prototype, "infoRating");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Offer.prototype, "declineReason");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Offer.prototype, "createdAt");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], Offer.prototype, "updatedAt");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return picture_entity_1.Picture; }, function (picture) { return picture.offerPublic; })
    ], Offer.prototype, "publicPictures");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.OneToMany)(function () { return picture_entity_1.Picture; }, function (picture) { return picture.offerPrivate; })
    ], Offer.prototype, "privatePictures");
    Offer = __decorate([
        (0, typeorm_1.Entity)()
    ], Offer);
    return Offer;
}());
exports.Offer = Offer;
