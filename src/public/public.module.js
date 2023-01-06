"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PublicModule = void 0;
var common_1 = require("@nestjs/common");
var public_controller_1 = require("./public.controller");
var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        (0, common_1.Module)({
            imports: [],
            providers: [],
            controllers: [
                public_controller_1.InvestorController,
                public_controller_1.LenderController,
                public_controller_1.AboutController,
                public_controller_1.DocumentsController,
                public_controller_1.TempController,
                public_controller_1.FAQController,
                public_controller_1.LetterController,
                public_controller_1.UsController,
            ],
            exports: []
        })
    ], PublicModule);
    return PublicModule;
}());
exports.PublicModule = PublicModule;
