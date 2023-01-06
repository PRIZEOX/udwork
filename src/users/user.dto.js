"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var invoice_dto_1 = require("../invoices/invoice.dto");
var operation_dto_1 = require("../operations/operation.dto");
var agreement_dto_1 = require("../agreements/agreement.dto");
var offer_dto_1 = require("../offers/offer.dto");
var investment_dto_1 = require("../investments/investment.dto");
var message_dto_1 = require("../messages/message.dto");
var registry_dto_1 = require("../registry/registry.dto");
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
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], UserDto.prototype, "uuid");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "phone");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "passwordHash");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "email");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "code");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "active");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "enabled");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "terrorist");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "firstName");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "lastName");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "role");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "status");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "type");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "mainAccount");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "reserveAccount");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "preInvestAccount");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "investAccount");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "agreedAccount");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "limitAccount");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "returnedAccount");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "profitAccount");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "middleName");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "inn");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "dateOfBirth");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "issueDate");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "placeOfBirth");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "address");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "factAddress");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "passportNumber");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "passportIssuedBy");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "passportCodeDepartment");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "orgInn");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "orgOgrn");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "orgName");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "orgLocation");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "infoPercent");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "declineReason");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "infoStructure");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "infoAnnual");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "infoActivities");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "infoFacts");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "infoSums");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "infoRating");
    __decorate([
        (0, class_transformer_1.Type)(function () { return invoice_dto_1.InvoiceDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [invoice_dto_1.InvoiceDto]
        })
    ], UserDto.prototype, "invoices");
    __decorate([
        (0, class_transformer_1.Type)(function () { return registry_dto_1.RegistryDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [registry_dto_1.RegistryDto]
        })
    ], UserDto.prototype, "registryEntries");
    __decorate([
        (0, class_transformer_1.Type)(function () { return investment_dto_1.InvestmentDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [investment_dto_1.InvestmentDto]
        })
    ], UserDto.prototype, "investments");
    __decorate([
        (0, class_transformer_1.Type)(function () { return operation_dto_1.OperationDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [operation_dto_1.OperationDto]
        })
    ], UserDto.prototype, "approverOperations");
    __decorate([
        (0, class_transformer_1.Type)(function () { return operation_dto_1.OperationDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [operation_dto_1.OperationDto]
        })
    ], UserDto.prototype, "investorOperations");
    __decorate([
        (0, class_transformer_1.Type)(function () { return agreement_dto_1.AgreementDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [agreement_dto_1.AgreementDto]
        })
    ], UserDto.prototype, "investorAgreements");
    __decorate([
        (0, class_transformer_1.Type)(function () { return operation_dto_1.OperationDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [operation_dto_1.OperationDto]
        })
    ], UserDto.prototype, "lenderOperations");
    __decorate([
        (0, class_transformer_1.Type)(function () { return agreement_dto_1.AgreementDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [agreement_dto_1.AgreementDto]
        })
    ], UserDto.prototype, "lenderAgreements");
    __decorate([
        (0, class_transformer_1.Type)(function () { return offer_dto_1.OfferDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [offer_dto_1.OfferDto]
        })
    ], UserDto.prototype, "receivedOffers");
    __decorate([
        (0, class_transformer_1.Type)(function () { return message_dto_1.MessageDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [message_dto_1.MessageDto]
        })
    ], UserDto.prototype, "messages");
    __decorate([
        (0, class_transformer_1.Type)(function () { return offer_dto_1.OfferDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [offer_dto_1.OfferDto]
        })
    ], UserDto.prototype, "postedOffers");
    __decorate([
        (0, class_transformer_1.Type)(function () { return PictureDto; }),
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)({
            type: [PictureDto]
        })
    ], UserDto.prototype, "pictures");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "createdAt");
    UserDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], UserDto);
    return UserDto;
}());
exports.UserDto = UserDto;
