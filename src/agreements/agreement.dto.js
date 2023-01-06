"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AgreementDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var user_dto_1 = require("../users/user.dto");
var offer_dto_1 = require("../offers/offer.dto");
var invoice_dto_1 = require("../invoices/invoice.dto");
var UuidDto = /** @class */ (function () {
    function UuidDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], UuidDto.prototype, "uuid");
    return UuidDto;
}());
var AgreementDto = /** @class */ (function () {
    function AgreementDto() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], AgreementDto.prototype, "uuid");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], AgreementDto.prototype, "number");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], AgreementDto.prototype, "pdf");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], AgreementDto.prototype, "date");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], AgreementDto.prototype, "sum");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], AgreementDto.prototype, "createdAt");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], AgreementDto.prototype, "updatedAt");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], AgreementDto.prototype, "type");
    __decorate([
        (0, class_transformer_1.Type)(function () { return user_dto_1.UserDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return user_dto_1.UserDto; } })
    ], AgreementDto.prototype, "investor");
    __decorate([
        (0, class_transformer_1.Type)(function () { return user_dto_1.UserDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return user_dto_1.UserDto; } })
    ], AgreementDto.prototype, "lender");
    __decorate([
        (0, class_transformer_1.Type)(function () { return offer_dto_1.OfferDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return offer_dto_1.OfferDto; } })
    ], AgreementDto.prototype, "offer");
    __decorate([
        (0, class_transformer_1.Type)(function () { return invoice_dto_1.InvoiceDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [invoice_dto_1.InvoiceDto]
        })
    ], AgreementDto.prototype, "invoices");
    AgreementDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], AgreementDto);
    return AgreementDto;
}());
exports.AgreementDto = AgreementDto;
