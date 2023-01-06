"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentModule = void 0;
var common_1 = require("@nestjs/common");
var payment_service_1 = require("./payment.service");
var typeorm_1 = require("@nestjs/typeorm");
var payment_entity_1 = require("./payment.entity");
var config_1 = require("@nestjs/config");
var payment_controller_1 = require("./payment.controller");
var users_module_1 = require("../users/users.module");
var offers_module_1 = require("../offers/offers.module");
var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        (0, common_1.Module)({
            imports: [
                (0, common_1.forwardRef)(function () { return users_module_1.UsersModule; }),
                (0, common_1.forwardRef)(function () { return offers_module_1.OffersModule; }),
                config_1.ConfigModule,
                typeorm_1.TypeOrmModule.forFeature([payment_entity_1.Payment]),
            ],
            providers: [payment_service_1.PaymentService, config_1.ConfigService],
            controllers: [payment_controller_1.PaymentController],
            exports: [payment_service_1.PaymentService]
        })
    ], PaymentModule);
    return PaymentModule;
}());
exports.PaymentModule = PaymentModule;
