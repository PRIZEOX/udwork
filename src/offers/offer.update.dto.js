"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OfferUpdateDto = void 0;
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
var OfferUpdateDto = /** @class */ (function () {
    function OfferUpdateDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], OfferUpdateDto.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "loanCoefficient");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "hasCollateral");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "revocable");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "collateralSum");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "interestRate");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "rating");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "minVolume");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "investPeriodDays");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "maxVolume");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "currentVolume");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "offerPeriodDays");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "name");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "number");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "date");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "fulfillDate");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "deadline");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoGoals");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoExperts");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoConditions");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoRisks");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "declineReason");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "requisites");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoPercent");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoStructure");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoAnnual");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoActivities");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoFacts");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoSums");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "infoRating");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "status");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "repayPeriod");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return UuidDto; } })
    ], OfferUpdateDto.prototype, "agreement");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [UuidDto]
        })
    ], OfferUpdateDto.prototype, "investments");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [UuidDto]
        })
    ], OfferUpdateDto.prototype, "investors");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return UuidDto; } })
    ], OfferUpdateDto.prototype, "lender");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: [UuidDto]
        })
    ], OfferUpdateDto.prototype, "operations");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "publicImages");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferUpdateDto.prototype, "privateImages");
    return OfferUpdateDto;
}());
exports.OfferUpdateDto = OfferUpdateDto;
