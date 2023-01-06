"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OfferDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var user_dto_1 = require("../users/user.dto");
var agreement_dto_1 = require("../agreements/agreement.dto");
var operation_dto_1 = require("../operations/operation.dto");
var investment_dto_1 = require("../investments/investment.dto");
var task_entity_1 = require("../tasker/task.entity");
var payment_dto_1 = require("../payments/payment.dto");
var PictureDto = /** @class */ (function () {
    function PictureDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], PictureDto.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], PictureDto.prototype, "path");
    return PictureDto;
}());
var OfferDto = /** @class */ (function () {
    function OfferDto() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], OfferDto.prototype, "uuid");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "loanCoefficient");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "hasCollateral");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "revocable");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "collateralSum");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "interestRate");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "rating");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "minVolume");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "investPeriodDays");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "maxVolume");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "currentVolume");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "offerPeriodDays");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "name");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "number");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "date");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "deadline");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "fulfillDate");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoGoals");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoExperts");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoConditions");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoRisks");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "requisites");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoPercent");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "declineReason");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoStructure");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoAnnual");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoActivities");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoFacts");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoSums");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "infoRating");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "createdAt");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "updatedAt");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "status");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], OfferDto.prototype, "repayPeriod");
    __decorate([
        (0, class_transformer_1.Type)(function () { return agreement_dto_1.AgreementDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return agreement_dto_1.AgreementDto; } })
    ], OfferDto.prototype, "agreement");
    __decorate([
        (0, class_transformer_1.Type)(function () { return investment_dto_1.InvestmentDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [investment_dto_1.InvestmentDto]
        })
    ], OfferDto.prototype, "investments");
    __decorate([
        (0, class_transformer_1.Type)(function () { return user_dto_1.UserDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [user_dto_1.UserDto]
        })
    ], OfferDto.prototype, "investors");
    __decorate([
        (0, class_transformer_1.Type)(function () { return user_dto_1.UserDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return user_dto_1.UserDto; } })
    ], OfferDto.prototype, "lender");
    __decorate([
        (0, class_transformer_1.Type)(function () { return task_entity_1.Task; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return task_entity_1.Task; } })
    ], OfferDto.prototype, "task");
    __decorate([
        (0, class_transformer_1.Type)(function () { return operation_dto_1.OperationDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [operation_dto_1.OperationDto]
        })
    ], OfferDto.prototype, "operations");
    __decorate([
        (0, class_transformer_1.Type)(function () { return PictureDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [PictureDto]
        })
    ], OfferDto.prototype, "publicPictures");
    __decorate([
        (0, class_transformer_1.Type)(function () { return PictureDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [PictureDto]
        })
    ], OfferDto.prototype, "privatePictures");
    __decorate([
        (0, class_transformer_1.Type)(function () { return payment_dto_1.PaymentDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [payment_dto_1.PaymentDto]
        })
    ], OfferDto.prototype, "payments");
    OfferDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], OfferDto);
    return OfferDto;
}());
exports.OfferDto = OfferDto;
