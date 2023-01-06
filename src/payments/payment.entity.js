"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Payment = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var offer_entity_1 = require("../offers/offer.entity");
var Payment = /** @class */ (function () {
    function Payment() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Payment.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'float',
            "default": null
        })
    ], Payment.prototype, "sum");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({ "default": null, nullable: true, type: 'datetime' })
    ], Payment.prototype, "date");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return offer_entity_1.Offer; } }),
        (0, typeorm_1.ManyToOne)(function () { return offer_entity_1.Offer; }, function (offer) { return offer.payments; }),
        (0, typeorm_1.JoinTable)()
    ], Payment.prototype, "offer");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            type: 'boolean',
            "default": false
        })
    ], Payment.prototype, "completed");
    Payment = __decorate([
        (0, typeorm_1.Entity)()
    ], Payment);
    return Payment;
}());
exports.Payment = Payment;
