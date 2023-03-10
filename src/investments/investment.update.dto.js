"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvestmentUpdateDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var UuidDto = /** @class */ (function () {
    function UuidDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], UuidDto.prototype, "uuid");
    return UuidDto;
}());
var InvestmentUpdateDto = /** @class */ (function () {
    function InvestmentUpdateDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], InvestmentUpdateDto.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], InvestmentUpdateDto.prototype, "sum");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], InvestmentUpdateDto.prototype, "status");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return UuidDto; } })
    ], InvestmentUpdateDto.prototype, "offer");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return UuidDto; } })
    ], InvestmentUpdateDto.prototype, "investor");
    return InvestmentUpdateDto;
}());
exports.InvestmentUpdateDto = InvestmentUpdateDto;
