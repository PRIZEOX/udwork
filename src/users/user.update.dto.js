"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserUpdateDto = void 0;
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
var UserUpdateDto = /** @class */ (function () {
    function UserUpdateDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], UserUpdateDto.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "phone");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "declineReason");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "email");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "passwordHash");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "password");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "code");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "active");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "terrorist");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "enabled");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "firstName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "lastName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "role");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "status");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "type");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "mainAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "reserveAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "preInvestAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "investAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "agreedAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "limitAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "returnedAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "profitAccount");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "middleName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "inn");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "dateOfBirth");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "issueDate");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "placeOfBirth");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "address");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "factAddress");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "passportNumber");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "passportIssuedBy");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "passportCodeDepartment");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "orgInn");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "orgOgrn");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "orgName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "orgLocation");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "infoPercent");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "infoStructure");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "infoAnnual");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "infoActivities");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "infoFacts");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "infoSums");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserUpdateDto.prototype, "infoRating");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserUpdateDto.prototype, "investments");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserUpdateDto.prototype, "invoices");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserUpdateDto.prototype, "approverOperations");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserUpdateDto.prototype, "investorOperations");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserUpdateDto.prototype, "investorAgreements");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserUpdateDto.prototype, "lenderOperations");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserUpdateDto.prototype, "lenderAgreements");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserUpdateDto.prototype, "receivedOffers");
    __decorate([
        (0, class_transformer_1.Type)(function () { return UuidDto; }),
        (0, swagger_1.ApiPropertyOptional)({
            type: UuidDto
        })
    ], UserUpdateDto.prototype, "postedOffers");
    return UserUpdateDto;
}());
exports.UserUpdateDto = UserUpdateDto;
