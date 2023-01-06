"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvestmentDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var offer_dto_1 = require("../offers/offer.dto");
var task_entity_1 = require("../tasker/task.entity");
var UuidDto = /** @class */ (function () {
    function UuidDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], UuidDto.prototype, "uuid");
    return UuidDto;
}());
var InvestmentDto = /** @class */ (function () {
    function InvestmentDto() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], InvestmentDto.prototype, "uuid");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], InvestmentDto.prototype, "sum");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], InvestmentDto.prototype, "status");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return offer_dto_1.OfferDto; } })
    ], InvestmentDto.prototype, "offer");
    __decorate([
        (0, class_transformer_1.Type)(function () { return task_entity_1.Task; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return task_entity_1.Task; } })
    ], InvestmentDto.prototype, "task");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return UuidDto; } })
    ], InvestmentDto.prototype, "investor");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], InvestmentDto.prototype, "createdAt");
    InvestmentDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], InvestmentDto);
    return InvestmentDto;
}());
exports.InvestmentDto = InvestmentDto;
