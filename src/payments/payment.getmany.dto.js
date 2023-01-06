"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentGetmanyDto = void 0;
var class_transformer_1 = require("class-transformer");
var swagger_1 = require("@nestjs/swagger");
var payment_dto_1 = require("./payment.dto");
var PaymentGetmanyDto = /** @class */ (function () {
    function PaymentGetmanyDto() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_transformer_1.Type)(function () { return payment_dto_1.PaymentDto; }),
        (0, swagger_1.ApiProperty)({
            type: [payment_dto_1.PaymentDto]
        })
    ], PaymentGetmanyDto.prototype, "data");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], PaymentGetmanyDto.prototype, "count");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], PaymentGetmanyDto.prototype, "total");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], PaymentGetmanyDto.prototype, "page");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], PaymentGetmanyDto.prototype, "pageCount");
    PaymentGetmanyDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], PaymentGetmanyDto);
    return PaymentGetmanyDto;
}());
exports.PaymentGetmanyDto = PaymentGetmanyDto;
