"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OfferCreateDto = void 0;
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
var OfferCreateDto = /** @class */ (function () {
    function OfferCreateDto() {
    }
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "loanCoefficient");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "interestRate");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "hasCollateral");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "revocable");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "collateralSum");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "rating");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "minVolume");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "investPeriodDays");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "maxVolume");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "currentVolume");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "offerPeriodDays");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "number");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "name");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "date");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "fulfillDate");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "deadline");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoGoals");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoExperts");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoConditions");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoRisks");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "requisites");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoPercent");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoStructure");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoAnnual");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoActivities");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoFacts");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoSums");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "infoRating");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "declineReason");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "status");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "repayPeriod");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return UuidDto; } })
    ], OfferCreateDto.prototype, "agreement");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [UuidDto]
        })
    ], OfferCreateDto.prototype, "investments");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [UuidDto]
        })
    ], OfferCreateDto.prototype, "investors");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return UuidDto; } })
    ], OfferCreateDto.prototype, "lender");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [UuidDto]
        })
    ], OfferCreateDto.prototype, "operations");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "publicImages");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferCreateDto.prototype, "privateImages");
    return OfferCreateDto;
}());
exports.OfferCreateDto = OfferCreateDto;
