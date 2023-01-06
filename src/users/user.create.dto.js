"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserCreateDto = void 0;
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
var UserCreateDto = /** @class */ (function () {
    function UserCreateDto() {
    }
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "phone");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "declineReason");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "email");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "code");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "passwordHash");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "active");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "terrorist");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "enabled");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "firstName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "lastName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "role");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "status");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "type");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "mainAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "reserveAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "preInvestAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "investAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "agreedAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "limitAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "returnedAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "profitAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "middleName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "inn");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "issueDate");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "dateOfBirth");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "placeOfBirth");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "address");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "factAddress");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "passportNumber");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "passportIssuedBy");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "passportCodeDepartment");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "orgInn");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "orgOgrn");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "orgName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "orgLocation");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "infoPercent");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "infoStructure");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "infoAnnual");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "infoActivities");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "infoFacts");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "infoSums");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserCreateDto.prototype, "infoRating");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserCreateDto.prototype, "investments");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserCreateDto.prototype, "invoices");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserCreateDto.prototype, "approverOperations");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserCreateDto.prototype, "investorOperations");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserCreateDto.prototype, "investorAgreements");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserCreateDto.prototype, "lenderOperations");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserCreateDto.prototype, "lenderAgreements");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserCreateDto.prototype, "receivedOffers");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserCreateDto.prototype, "postedOffers");
    return UserCreateDto;
}());
exports.UserCreateDto = UserCreateDto;
