"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentCreateDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var offer_dto_1 = require("../offers/offer.dto");
var PaymentCreateDto = /** @class */ (function () {
    function PaymentCreateDto() {
    }
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], PaymentCreateDto.prototype, "sum");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], PaymentCreateDto.prototype, "date");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return offer_dto_1.OfferDto; } })
    ], PaymentCreateDto.prototype, "offer");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], PaymentCreateDto.prototype, "completed");
    return PaymentCreateDto;
}());
exports.PaymentCreateDto = PaymentCreateDto;
