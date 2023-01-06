"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OperationGetmanyDto = void 0;
var class_transformer_1 = require("class-transformer");
var swagger_1 = require("@nestjs/swagger");
var operation_dto_1 = require("./operation.dto");
var OperationGetmanyDto = /** @class */ (function () {
    function OperationGetmanyDto() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_transformer_1.Type)(function () { return operation_dto_1.OperationDto; }),
        (0, swagger_1.ApiProperty)({
            type: [operation_dto_1.OperationDto]
        })
    ], OperationGetmanyDto.prototype, "data");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], OperationGetmanyDto.prototype, "count");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], OperationGetmanyDto.prototype, "total");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], OperationGetmanyDto.prototype, "page");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], OperationGetmanyDto.prototype, "pageCount");
    OperationGetmanyDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], OperationGetmanyDto);
    return OperationGetmanyDto;
}());
exports.OperationGetmanyDto = OperationGetmanyDto;
