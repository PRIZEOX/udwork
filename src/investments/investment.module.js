"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvestmentModule = void 0;
var common_1 = require("@nestjs/common");
var investment_service_1 = require("./investment.service");
var typeorm_1 = require("@nestjs/typeorm");
var investment_entity_1 = require("./investment.entity");
var config_1 = require("@nestjs/config");
var investment_controller_1 = require("./investment.controller");
var users_module_1 = require("../users/users.module");
var offers_module_1 = require("../offers/offers.module");
var message_module_1 = require("../messages/message.module");
var tasker_module_1 = require("../tasker/tasker.module");
var registry_module_1 = require("../registry/registry.module");
var InvestmentModule = /** @class */ (function () {
    function InvestmentModule() {
    }
    InvestmentModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([investment_entity_1.Investment]),
                config_1.ConfigModule,
                registry_module_1.RegistryModule,
                message_module_1.MessageModule,
                tasker_module_1.TaskerModule,
                (0, common_1.forwardRef)(function () { return users_module_1.UsersModule; }),
                (0, common_1.forwardRef)(function () { return offers_module_1.OffersModule; }),
                (0, common_1.forwardRef)(function () { return tasker_module_1.TaskerModule; }),
            ],
            providers: [investment_service_1.InvestmentService, config_1.ConfigService],
            controllers: [investment_controller_1.InvestmentController],
            exports: [investment_service_1.InvestmentService]
        })
    ], InvestmentModule);
    return InvestmentModule;
}());
exports.InvestmentModule = InvestmentModule;
