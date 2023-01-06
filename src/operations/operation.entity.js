"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Operation = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var user_entity_1 = require("../users/user.entity");
var operation_type_1 = require("../enums/operation.type");
var offer_entity_1 = require("../offers/offer.entity");
var Operation = /** @class */ (function () {
    function Operation() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Operation.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'int',
            "default": null
        })
    ], Operation.prototype, "sum");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": operation_type_1.OperationType,
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci'
        })
    ], Operation.prototype, "type");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return user_entity_1.User; } }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.lenderOperations; }),
        (0, typeorm_1.JoinTable)()
    ], Operation.prototype, "lender");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return user_entity_1.User; } }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.investorOperations; }),
        (0, typeorm_1.JoinTable)()
    ], Operation.prototype, "investor");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return user_entity_1.User; } }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.approverOperations; }),
        (0, typeorm_1.JoinTable)()
    ], Operation.prototype, "approver");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return offer_entity_1.Offer; } }),
        (0, typeorm_1.ManyToOne)(function () { return offer_entity_1.Offer; }, function (offer) { return offer.operations; }),
        (0, typeorm_1.JoinTable)()
    ], Operation.prototype, "offer");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Operation.prototype, "createdAt");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], Operation.prototype, "updatedAt");
    Operation = __decorate([
        (0, typeorm_1.Entity)()
    ], Operation);
    return Operation;
}());
exports.Operation = Operation;
