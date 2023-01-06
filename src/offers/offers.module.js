"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OffersModule = void 0;
var common_1 = require("@nestjs/common");
var offers_service_1 = require("./offers.service");
var typeorm_1 = require("@nestjs/typeorm");
var offer_entity_1 = require("./offer.entity");
var config_1 = require("@nestjs/config");
var offer_controller_1 = require("./offer.controller");
var change_status_controller_1 = require("./change.status.controller");
var publish_controller_1 = require("./publish.controller");
var decline_controller_1 = require("./decline.controller");
var investment_module_1 = require("../investments/investment.module");
var delete_file_controller_1 = require("./delete.file.controller");
var upload_controller_1 = require("./upload.controller");
var pictures_module_1 = require("../pictures/pictures.module");
var message_module_1 = require("../messages/message.module");
var private_upload_controller_1 = require("./private.upload.controller");
var private_delete_file_controller_1 = require("./private.delete.file.controller");
var tasker_module_1 = require("../tasker/tasker.module");
var users_module_1 = require("../users/users.module");
var payment_module_1 = require("../payments/payment.module");
var pay_controller_1 = require("./pay.controller");
var OffersModule = /** @class */ (function () {
    function OffersModule() {
    }
    OffersModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([offer_entity_1.Offer]),
                (0, common_1.forwardRef)(function () { return investment_module_1.InvestmentModule; }),
                (0, common_1.forwardRef)(function () { return tasker_module_1.TaskerModule; }),
                (0, common_1.forwardRef)(function () { return users_module_1.UsersModule; }),
                (0, common_1.forwardRef)(function () { return payment_module_1.PaymentModule; }),
                config_1.ConfigModule,
                pictures_module_1.PicturesModule,
                message_module_1.MessageModule,
            ],
            providers: [offers_service_1.OffersService, config_1.ConfigService],
            controllers: [
                offer_controller_1.OfferController,
                change_status_controller_1.ChangeStatusController,
                publish_controller_1.PublishController,
                decline_controller_1.DeclineController,
                delete_file_controller_1.DeleteFileOfferController,
                upload_controller_1.UploadOfferController,
                private_upload_controller_1.PrivateUploadController,
                private_delete_file_controller_1.PrivateDeleteFileController,
                pay_controller_1.PayController,
            ],
            exports: [offers_service_1.OffersService]
        })
    ], OffersModule);
    return OffersModule;
}());
exports.OffersModule = OffersModule;
