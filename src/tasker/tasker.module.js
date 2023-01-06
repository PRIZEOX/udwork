"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskerModule = void 0;
var common_1 = require("@nestjs/common");
var tasker_service_1 = require("./tasker.service");
var offers_module_1 = require("../offers/offers.module");
var users_module_1 = require("../users/users.module");
var investment_module_1 = require("../investments/investment.module");
var message_module_1 = require("../messages/message.module");
var typeorm_1 = require("@nestjs/typeorm");
var task_entity_1 = require("./task.entity");
var registry_module_1 = require("../registry/registry.module");
var TaskerModule = /** @class */ (function () {
    function TaskerModule() {
    }
    TaskerModule = __decorate([
        (0, common_1.Module)({
            imports: [
                (0, common_1.forwardRef)(function () { return offers_module_1.OffersModule; }),
                (0, common_1.forwardRef)(function () { return investment_module_1.InvestmentModule; }),
                (0, common_1.forwardRef)(function () { return users_module_1.UsersModule; }),
                message_module_1.MessageModule,
                registry_module_1.RegistryModule,
                typeorm_1.TypeOrmModule.forFeature([task_entity_1.Task]),
            ],
            providers: [tasker_service_1.TaskerService],
            exports: [tasker_service_1.TaskerService]
        })
    ], TaskerModule);
    return TaskerModule;
}());
exports.TaskerModule = TaskerModule;
