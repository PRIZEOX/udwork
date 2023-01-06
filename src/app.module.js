"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_service_1 = require("./app.service");
var path_1 = require("path");
var config_1 = require("@nestjs/config");
var serve_static_1 = require("@nestjs/serve-static");
var typeorm_1 = require("@nestjs/typeorm");
var users_module_1 = require("./users/users.module");
var login_module_1 = require("./auth/login/login.module");
var agreements_module_1 = require("./agreements/agreements.module");
var invoice_module_1 = require("./invoices/invoice.module");
var offers_module_1 = require("./offers/offers.module");
var operation_module_1 = require("./operations/operation.module");
var register_module_1 = require("./auth/register/register.module");
var pictures_module_1 = require("./pictures/pictures.module");
var investment_module_1 = require("./investments/investment.module");
var message_module_1 = require("./messages/message.module");
var public_module_1 = require("./public/public.module");
var registry_module_1 = require("./registry/registry.module");
var nest_raven_1 = require("nest-raven");
var core_1 = require("@nestjs/core");
var schedule_1 = require("@nestjs/schedule");
var tasker_module_1 = require("./tasker/tasker.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                nest_raven_1.RavenModule,
                schedule_1.ScheduleModule.forRoot(),
                tasker_module_1.TaskerModule,
                investment_module_1.InvestmentModule,
                registry_module_1.RegistryModule,
                message_module_1.MessageModule,
                login_module_1.LoginModule,
                pictures_module_1.PicturesModule,
                register_module_1.RegisterModule,
                agreements_module_1.AgreementsModule,
                invoice_module_1.InvoiceModule,
                offers_module_1.OffersModule,
                operation_module_1.OperationModule,
                users_module_1.UsersModule,
                public_module_1.PublicModule,
                config_1.ConfigModule.forRoot(),
                serve_static_1.ServeStaticModule.forRootAsync({
                    imports: [config_1.ConfigModule],
                    useFactory: function (configService) { return [
                        {
                            rootPath: (0, path_1.join)(__dirname, '../../..', configService.get('PRIVATE_PATH'))
                        },
                        {
                        // rootPath: join(
                        //   __dirname,
                        //   '../../..',
                        //   configService.get<string>('PUBLIC_PATH'),
                        // ),
                        // serveRoot: '/app',
                        },
                    ]; },
                    inject: [config_1.ConfigService]
                }),
                typeorm_1.TypeOrmModule.forRootAsync({
                    imports: [config_1.ConfigModule],
                    useFactory: function (configService) { return ({
                        type: 'mysql',
                        host: configService.get('DB_HOST'),
                        port: +configService.get('DB_PORT'),
                        username: configService.get('DB_USERNAME'),
                        password: configService.get('DB_PASSWORD'),
                        database: configService.get('DB_DATABASE'),
                        entities: ['dist/**/*.entity{.ts,.js}'],
                        synchronize: true
                    }); },
                    inject: [config_1.ConfigService]
                }),
            ],
            providers: [
                app_service_1.AppService,
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useValue: new nest_raven_1.RavenInterceptor()
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
