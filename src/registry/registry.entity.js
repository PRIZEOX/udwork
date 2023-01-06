"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Registry = void 0;
var typeorm_1 = require("typeorm");
var entity_mixin_1 = require("../common/entity.mixin");
var swagger_1 = require("@nestjs/swagger");
var user_entity_1 = require("../users/user.entity");
var offer_entity_1 = require("../offers/offer.entity");
var Registry = /** @class */ (function () {
    function Registry() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Registry.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].varcharNullable)
    ], Registry.prototype, "number");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": null
        })
    ], Registry.prototype, "sum");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return user_entity_1.User; } }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.registryEntries; }),
        (0, typeorm_1.JoinTable)()
    ], Registry.prototype, "investor");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: function () { return offer_entity_1.Offer; } }),
        (0, typeorm_1.ManyToOne)(function () { return offer_entity_1.Offer; }, function (offer) { return offer.registryEntries; })
    ], Registry.prototype, "offer");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Registry.prototype, "createdAt");
    Registry = __decorate([
        (0, typeorm_1.Entity)()
    ], Registry);
    return Registry;
}());
exports.Registry = Registry;
