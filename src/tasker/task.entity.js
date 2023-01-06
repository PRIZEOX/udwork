"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Task = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var task_type_1 = require("../enums/task.type");
var offer_entity_1 = require("../offers/offer.entity");
var investment_entity_1 = require("../investments/investment.entity");
var Task = /** @class */ (function () {
    function Task() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Task.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": task_type_1.TaskType,
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci'
        })
    ], Task.prototype, "type");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": null, nullable: true, type: 'datetime' })
    ], Task.prototype, "deadline");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return offer_entity_1.Offer; } }),
        (0, typeorm_1.OneToOne)(function () { return offer_entity_1.Offer; }, function (offer) { return offer.task; }),
        (0, typeorm_1.JoinColumn)()
    ], Task.prototype, "offer");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return investment_entity_1.Investment; } }),
        (0, typeorm_1.OneToOne)(function () { return investment_entity_1.Investment; }, function (investment) { return investment.task; }),
        (0, typeorm_1.JoinColumn)()
    ], Task.prototype, "investment");
    Task = __decorate([
        (0, typeorm_1.Entity)()
    ], Task);
    return Task;
}());
exports.Task = Task;
