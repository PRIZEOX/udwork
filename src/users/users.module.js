"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var common_1 = require("@nestjs/common");
var users_service_1 = require("./users.service");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("./user.entity");
var config_1 = require("@nestjs/config");
var user_controller_1 = require("./user.controller");
var seed_controller_1 = require("./seed.controller");
var offers_module_1 = require("../offers/offers.module");
var operation_module_1 = require("../operations/operation.module");
var agreements_module_1 = require("../agreements/agreements.module");
var invoice_module_1 = require("../invoices/invoice.module");
var offer_entity_1 = require("../offers/offer.entity");
var operation_entity_1 = require("../operations/operation.entity");
var invoice_entity_1 = require("../invoices/invoice.entity");
var agreement_entity_1 = require("../agreements/agreement.entity");
var profile_me_controller_1 = require("./profile.me.controller");
var save_info_controller_1 = require("./save.info.controller");
var upload_controller_1 = require("./files/upload.controller");
var picture_entity_1 = require("../pictures/picture.entity");
var pictures_module_1 = require("../pictures/pictures.module");
var delete_file_controller_1 = require("./files/delete.file.controller");
var image_service_1 = require("./files/image.service");
var password_update_controller_1 = require("./password.update.controller");
var send_profile_code_controller_1 = require("./sign/send.profile.code.controller");
var send_register_code_controller_1 = require("./sign/send.register.code.controller");
var send_code_controller_1 = require("./sign/send.code.controller");
var mailer_module_1 = require("../mailer/mailer.module");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([
                    user_entity_1.User,
                    offer_entity_1.Offer,
                    operation_entity_1.Operation,
                    invoice_entity_1.Invoice,
                    agreement_entity_1.Agreement,
                    picture_entity_1.Picture,
                ]),
                pictures_module_1.PicturesModule,
                config_1.ConfigModule,
                offers_module_1.OffersModule,
                operation_module_1.OperationModule,
                agreements_module_1.AgreementsModule,
                invoice_module_1.InvoiceModule,
                (0, common_1.forwardRef)(function () { return mailer_module_1.MailerModule; }),
            ],
            providers: [users_service_1.UsersService, config_1.ConfigService, image_service_1.ImageService],
            controllers: [
                user_controller_1.UserController,
                seed_controller_1.SeedController,
                profile_me_controller_1.ProfileMeController,
                save_info_controller_1.SaveInfoController,
                upload_controller_1.UploadController,
                delete_file_controller_1.DeleteFileController,
                password_update_controller_1.PasswordUpdateController,
                send_profile_code_controller_1.SendProfileCodeController,
                send_register_code_controller_1.SendRegisterCodeController,
                send_code_controller_1.SendCodeController,
            ],
            exports: [users_service_1.UsersService]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
