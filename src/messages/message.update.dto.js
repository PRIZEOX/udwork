"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MessageUpdateDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var UuidDto = /** @class */ (function () {
    function UuidDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], UuidDto.prototype, "uuid");
    return UuidDto;
}());
var MessageUpdateDto = /** @class */ (function () {
    function MessageUpdateDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], MessageUpdateDto.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], MessageUpdateDto.prototype, "status");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return UuidDto; } })
    ], MessageUpdateDto.prototype, "user");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], MessageUpdateDto.prototype, "createdAt");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], MessageUpdateDto.prototype, "topic");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], MessageUpdateDto.prototype, "text");
    return MessageUpdateDto;
}());
exports.MessageUpdateDto = MessageUpdateDto;
