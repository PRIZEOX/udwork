"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OperationModule = void 0;
var common_1 = require("@nestjs/common");
var operation_service_1 = require("./operation.service");
var typeorm_1 = require("@nestjs/typeorm");
var operation_entity_1 = require("./operation.entity");
var config_1 = require("@nestjs/config");
var operation_controller_1 = require("./operation.controller");
var OperationModule = /** @class */ (function () {
    function OperationModule() {
    }
    OperationModule = __decorate([
        (0, common_1.Module)({
            imports: [config_1.ConfigModule, typeorm_1.TypeOrmModule.forFeature([operation_entity_1.Operation])],
            providers: [operation_service_1.OperationService, config_1.ConfigService],
            controllers: [operation_controller_1.OperationController],
            exports: [operation_service_1.OperationService]
        })
    ], OperationModule);
    return OperationModule;
}());
exports.OperationModule = OperationModule;
