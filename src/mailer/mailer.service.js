"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.MailerService = void 0;
var common_1 = require("@nestjs/common");
var nodemailer = require("nodemailer");
var crypto_1 = require("crypto");
var users_service_1 = require("../users/users.service");
var user_status_1 = require("../enums/user.status");
var MailerService = /** @class */ (function () {
    function MailerService(configService, usersService) {
        this.configService = configService;
        this.usersService = usersService;
        this.logger = new common_1.Logger(MailerService_1.name);
        this.transporter = nodemailer.createTransport({
            host: this.configService.get('SMTP_HOST'),
            port: this.configService.get('SMTP_PORT'),
            secure: this.configService.get('SMTP_SECURE'),
            auth: {
                user: this.configService.get('SMTP_USER'),
                pass: this.configService.get('SMTP_PASSWORD')
            }
        });
    }
    MailerService_1 = MailerService;
    MailerService.prototype.confirm = function (token, email) {
        var hash = (0, crypto_1.createHash)('sha256')
            .update(email + this.configService.get('HASH_SALT'))
            .digest('hex');
        return token === hash;
    };
    MailerService.prototype.sendRecoverMessage = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, link, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = (0, crypto_1.createHash)('sha256')
                            .update(email + this.configService.get('HASH_SALT'))
                            .digest('hex');
                        link = this.configService.get('RECOVER_LINK') + "?token=".concat(hash, "&email=").concat(email);
                        this.logger.log(link);
                        return [4 /*yield*/, this.transporter.sendMail({
                                from: this.configService.get('SMTP_SENDER'),
                                to: email,
                                subject: 'Удалтон: восстановление пароля',
                                html: "\n      <p>\u0412\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B\u0438 \u0441\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F \u0441 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0423\u0434\u0430\u043B\u0442\u043E\u043D \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438.\n      \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u043F\u043E <a href=".concat(link, ">\u044D\u0442\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0435</a> \n      \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C.</p>\n      ")
                            })];
                    case 1:
                        info = _a.sent();
                        this.logger.log(info);
                        return [2 /*return*/];
                }
            });
        });
    };
    MailerService.prototype.sendEmailConfirmation = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, link, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = (0, crypto_1.createHash)('sha256')
                            .update(user.email + this.configService.get('HASH_SALT'))
                            .digest('hex');
                        link = this.configService.get('CONFIRM_LINK') +
                            "?token=".concat(hash, "&email=").concat(user.email);
                        this.logger.log(link);
                        return [4 /*yield*/, this.transporter.sendMail({
                                from: this.configService.get('SMTP_SENDER'),
                                to: user.email,
                                subject: 'Registration ✔',
                                html: "\n      <p>Your email was registered at instagig.\n      Please follow <a href=".concat(link, ">this link</a> \n      to finish the registration process.</p>\n      ")
                            })];
                    case 1:
                        info = _a.sent();
                        this.logger.log(info);
                        return [2 /*return*/];
                }
            });
        });
    };
    MailerService.prototype.sendWithdrawRequest = function (uuid, sum) {
        return __awaiter(this, void 0, void 0, function () {
            var user, warning, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findByUuid(uuid)];
                    case 1:
                        user = _a.sent();
                        warning = '';
                        if (user.terrorist) {
                            warning =
                                'ВНИМАНИЕ! Пользователь заморожен в связи с причастностью к спискам террористов и экстремистов.';
                        }
                        return [4 /*yield*/, this.transporter.sendMail({
                                from: this.configService.get('SMTP_SENDER'),
                                to: this.configService.get('SUPPORT_EMAIL'),
                                subject: 'Запрос на вывод средств',
                                html: "\n      <p>\n      \u0418\u043D\u0432\u0435\u0441\u0442\u043E\u0440 \u0441 \u041B\u0421 \u2116 ".concat(uuid, " (").concat(user.orgName, ", ").concat(user.email, ") \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B \u0432\u044B\u0432\u043E\u0434 \u0441\u0443\u043C\u043C\u044B ").concat(sum, " \u0440.\n      </p>\n      <p style='color:#d76363'>").concat(warning, "</p>\n      ")
                            })];
                    case 2:
                        info = _a.sent();
                        this.logger.log(info);
                        return [2 /*return*/];
                }
            });
        });
    };
    MailerService.prototype.sendTicket = function (_a) {
        var email = _a.email, uuid = _a.uuid, topic = _a.topic, text = _a.text;
        return __awaiter(this, void 0, void 0, function () {
            var id, user, info;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!uuid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.usersService.findByUuid(uuid)];
                    case 1:
                        user = _b.sent();
                        id = "\u2116 ".concat(uuid, " (").concat(user.orgName, ", ").concat(user.email, ")");
                        return [3 /*break*/, 3];
                    case 2:
                        id = email;
                        _b.label = 3;
                    case 3: return [4 /*yield*/, this.transporter.sendMail({
                            from: this.configService.get('SMTP_SENDER'),
                            to: this.configService.get('SUPPORT_EMAIL'),
                            subject: 'Запрос с платформы: ' + topic,
                            html: text +
                                "\n      <p>\n      \u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F: ".concat(id, "\n      </p>\n      ")
                        })];
                    case 4:
                        info = _b.sent();
                        this.logger.log(info);
                        return [2 /*return*/];
                }
            });
        });
    };
    MailerService.prototype.sendAccountCreated = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transporter.sendMail({
                            from: this.configService.get('SMTP_SENDER'),
                            to: [this.configService.get('SUPPORT_EMAIL'), 'Gagarinanv68@mail.ru'],
                            subject: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E ".concat(email),
                            html: "\n      <p>\n      \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 email ".concat(email, " \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E\n      </p>\n      ")
                        })];
                    case 1:
                        info = _a.sent();
                        this.logger.log(info);
                        return [2 /*return*/];
                }
            });
        });
    };
    MailerService.prototype.sendStatusChanged = function (user, status, declineReason) {
        return __awaiter(this, void 0, void 0, function () {
            var html, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        switch (status) {
                            case user_status_1.UserStatus.DECLINED:
                                html = "<p>\n          \u0423\u0432\u0430\u0436\u0430\u0435\u043C\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442! \u0414\u043B\u044F \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.\n        </p><p>\n          ".concat(declineReason, "\n        </p>");
                                break;
                            case user_status_1.UserStatus.IDENTIFIED:
                                html = "<p>\n          \u0423\u0432\u0430\u0436\u0430\u0435\u043C\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442! \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0412\u0430\u0441 \u0437\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430.\n        </p>";
                                break;
                            case user_status_1.UserStatus.CLIENT:
                                html = "<p>\n          \u0423\u0432\u0430\u0436\u0430\u0435\u043C\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442! \u0412\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0430 \u0423\u0434\u043C\u0443\u0440\u0442\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439 \u043F\u043E\n          \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439 \u043D\u0430 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435.\n        </p>";
                                break;
                        }
                        return [4 /*yield*/, this.transporter.sendMail({
                                from: this.configService.get('SMTP_SENDER'),
                                to: user.email,
                                subject: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u0441 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0423\u0434\u0430\u043B\u0442\u043E\u043D",
                                html: html
                            })];
                    case 1:
                        info = _a.sent();
                        this.logger.log(info);
                        return [2 /*return*/];
                }
            });
        });
    };
    MailerService.prototype.sendMessage = function (topic, text, user) {
        return __awaiter(this, void 0, void 0, function () {
            var info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transporter.sendMail({
                            from: this.configService.get('SMTP_SENDER'),
                            to: user.email,
                            subject: 'Уведомление с платформы Удалтон: ' + topic,
                            html: text +
                                "\n      <p>\n      \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0423\u0434\u0430\u043B\u0442\u043E\u043D \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438\n      </p>\n      "
                        })];
                    case 1:
                        info = _a.sent();
                        this.logger.log(info);
                        return [2 /*return*/];
                }
            });
        });
    };
    var MailerService_1;
    MailerService = MailerService_1 = __decorate([
        (0, common_1.Injectable)(),
        __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return users_service_1.UsersService; })))
    ], MailerService);
    return MailerService;
}());
exports.MailerService = MailerService;
