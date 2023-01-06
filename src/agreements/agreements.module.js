"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AgreementsModule = void 0;
var common_1 = require("@nestjs/common");
var agreements_service_1 = require("./agreements.service");
var typeorm_1 = require("@nestjs/typeorm");
var agreement_entity_1 = require("./agreement.entity");
var config_1 = require("@nestjs/config");
var agreement_controller_1 = require("./agreement.controller");
var users_module_1 = require("../users/users.module");
var invoice_controller_1 = require("./invoice.controller");
var sign_user_info_controller_1 = require("./sign.user.info.controller");
var sign_offer_controller_1 = require("./sign.offer.controller");
var offers_module_1 = require("../offers/offers.module");
var sign_accept_controller_1 = require("./sign.accept.controller");
var investment_module_1 = require("../investments/investment.module");
var AgreementsModule = /** @class */ (function () {
    function AgreementsModule() {
    }
    AgreementsModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule,
                typeorm_1.TypeOrmModule.forFeature([agreement_entity_1.Agreement]),
                (0, common_1.forwardRef)(function () { return users_module_1.UsersModule; }),
                (0, common_1.forwardRef)(function () { return offers_module_1.OffersModule; }),
                (0, common_1.forwardRef)(function () { return investment_module_1.InvestmentModule; }),
            ],
            providers: [agreements_service_1.AgreementsService, config_1.ConfigService],
            controllers: [
                agreement_controller_1.AgreementController,
                sign_user_info_controller_1.SignUserInfoController,
                sign_offer_controller_1.SignOfferController,
                sign_accept_controller_1.SignAcceptController,
                invoice_controller_1.InvoiceController,
            ],
            exports: [agreements_service_1.AgreementsService]
        })
    ], AgreementsModule);
    return AgreementsModule;
}());
exports.AgreementsModule = AgreementsModule;
