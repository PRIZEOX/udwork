"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var core_1 = require("@nestjs/core");
var app_module_1 = require("./app.module");
var path_1 = require("path");
var config_1 = require("@nestjs/config");
var swagger_1 = require("@nestjs/swagger");
var users_module_1 = require("./users/users.module");
var login_module_1 = require("./auth/login/login.module");
var agreements_module_1 = require("./agreements/agreements.module");
var offers_module_1 = require("./offers/offers.module");
var operation_module_1 = require("./operations/operation.module");
var invoice_module_1 = require("./invoices/invoice.module");
var register_module_1 = require("./auth/register/register.module");
var Sentry = require("@sentry/node");
Sentry.init({
    dsn: 'https://d7e45e15182a41bd8f531bff33a5a987@o1389439.ingest.sentry.io/6711961',
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
});
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var app, configService, port, swagger, config, options, setupOptions, document_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, core_1.NestFactory.create(app_module_1.AppModule)];
                case 1:
                    app = _a.sent();
                    app.enableCors();
                    configService = app.get(config_1.ConfigService);
                    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'src/views'));
                    app.useStaticAssets('static/');
                    app.useStaticAssets((0, path_1.join)(__dirname, '../../..', configService.get('PRIVATE_PATH')), { index: false });
                    app.setViewEngine('pug');
                    port = +configService.get('PORT');
                    swagger = +configService.get('SWAGGER');
                    if (swagger) {
                        config = new swagger_1.DocumentBuilder()
                            .setTitle('Удалтон API')
                            .setDescription('Внутренний API движка платформы')
                            .setVersion('1.0')
                            .addBearerAuth()
                            .build();
                        options = {
                            include: [
                                // AppModule,
                                login_module_1.LoginModule,
                                register_module_1.RegisterModule,
                                agreements_module_1.AgreementsModule,
                                offers_module_1.OffersModule,
                                operation_module_1.OperationModule,
                                invoice_module_1.InvoiceModule,
                                users_module_1.UsersModule,
                            ]
                        };
                        setupOptions = {
                            customSiteTitle: 'API docs'
                        };
                        if (configService.get('SWAGGER') === '1') {
                            document_1 = swagger_1.SwaggerModule.createDocument(app, config, options);
                            swagger_1.SwaggerModule.setup('api/v1', app, document_1, setupOptions);
                        }
                    }
                    return [4 /*yield*/, app.listen(port)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
bootstrap();
