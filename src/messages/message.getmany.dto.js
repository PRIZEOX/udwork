"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MessageGetmanyDto = void 0;
var class_transformer_1 = require("class-transformer");
var swagger_1 = require("@nestjs/swagger");
var message_dto_1 = require("./message.dto");
var MessageGetmanyDto = /** @class */ (function () {
    function MessageGetmanyDto() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_transformer_1.Type)(function () { return message_dto_1.MessageDto; }),
        (0, swagger_1.ApiProperty)({
            type: [message_dto_1.MessageDto]
        })
    ], MessageGetmanyDto.prototype, "data");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], MessageGetmanyDto.prototype, "count");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], MessageGetmanyDto.prototype, "total");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], MessageGetmanyDto.prototype, "page");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], MessageGetmanyDto.prototype, "pageCount");
    MessageGetmanyDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], MessageGetmanyDto);
    return MessageGetmanyDto;
}());
exports.MessageGetmanyDto = MessageGetmanyDto;
