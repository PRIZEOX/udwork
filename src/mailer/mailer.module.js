"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MailerModule = void 0;
var common_1 = require("@nestjs/common");
var mailer_service_1 = require("./mailer.service");
var config_1 = require("@nestjs/config");
var confirm_controller_1 = require("./confirm.controller");
var users_module_1 = require("../users/users.module");
var send_withdraw_controller_1 = require("./send.withdraw.controller");
var send_ticket_controller_1 = require("./send.ticket.controller");
var password_recover_controller_1 = require("./password.recover.controller");
var MailerModule = /** @class */ (function () {
    function MailerModule() {
    }
    MailerModule = __decorate([
        (0, common_1.Module)({
            imports: [config_1.ConfigModule, (0, common_1.forwardRef)(function () { return users_module_1.UsersModule; })],
            providers: [mailer_service_1.MailerService, config_1.ConfigService],
            controllers: [
                confirm_controller_1.ConfirmController,
                send_withdraw_controller_1.SendWithdrawController,
                password_recover_controller_1.PasswordRecoverController,
                send_ticket_controller_1.SendTicketController,
            ],
            exports: [mailer_service_1.MailerService]
        })
    ], MailerModule);
    return MailerModule;
}());
exports.MailerModule = MailerModule;
