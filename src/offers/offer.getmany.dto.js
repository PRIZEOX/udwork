"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OfferGetmanyDto = void 0;
var class_transformer_1 = require("class-transformer");
var swagger_1 = require("@nestjs/swagger");
var offer_dto_1 = require("./offer.dto");
var OfferGetmanyDto = /** @class */ (function () {
    function OfferGetmanyDto() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_transformer_1.Type)(function () { return offer_dto_1.OfferDto; }),
        (0, swagger_1.ApiProperty)({
            type: [offer_dto_1.OfferDto]
        })
    ], OfferGetmanyDto.prototype, "data");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], OfferGetmanyDto.prototype, "count");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], OfferGetmanyDto.prototype, "total");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], OfferGetmanyDto.prototype, "page");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], OfferGetmanyDto.prototype, "pageCount");
    OfferGetmanyDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], OfferGetmanyDto);
    return OfferGetmanyDto;
}());
exports.OfferGetmanyDto = OfferGetmanyDto;
