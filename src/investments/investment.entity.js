"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Investment = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var user_entity_1 = require("../users/user.entity");
var offer_entity_1 = require("../offers/offer.entity");
var investment_status_1 = require("../enums/investment.status");
var task_entity_1 = require("../tasker/task.entity");
var Investment = /** @class */ (function () {
    function Investment() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Investment.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'int',
            "default": null
        })
    ], Investment.prototype, "sum");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": investment_status_1.InvestmentStatus,
            "default": investment_status_1.InvestmentStatus.RESERVED,
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci'
        })
    ], Investment.prototype, "status");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return user_entity_1.User; } }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.investments; })
    ], Investment.prototype, "investor");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return offer_entity_1.Offer; } }),
        (0, typeorm_1.ManyToOne)(function () { return offer_entity_1.Offer; }, function (offer) { return offer.investments; })
    ], Investment.prototype, "offer");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return task_entity_1.Task; } }),
        (0, typeorm_1.OneToOne)(function () { return task_entity_1.Task; }, function (task) { return task.offer; })
    ], Investment.prototype, "task");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Investment.prototype, "createdAt");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], Investment.prototype, "updatedAt");
    Investment = __decorate([
        (0, typeorm_1.Entity)()
    ], Investment);
    return Investment;
}());
exports.Investment = Investment;
