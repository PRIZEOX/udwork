"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.MessageService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var crud_typeorm_1 = require("@nestjsx/crud-typeorm");
var message_entity_1 = require("./message.entity");
var users_service_1 = require("../users/users.service");
var offers_service_1 = require("../offers/offers.service");
var message_status_1 = require("../enums/message.status");
var investment_status_1 = require("../enums/investment.status");
var MessageService = /** @class */ (function (_super) {
    __extends(MessageService, _super);
    function MessageService(messagesRepository, usersService, offersService, mailerService) {
        var _this = _super.call(this, messagesRepository) || this;
        _this.messagesRepository = messagesRepository;
        _this.usersService = usersService;
        _this.offersService = offersService;
        _this.mailerService = mailerService;
        return _this;
    }
    MessageService.prototype.sortInvestors = function (a, b) {
        if (a.investor.uuid > b.investor.uuid)
            return 1; // если первое значение больше второго
        if (a.investor.uuid == b.investor.uuid)
            return 0; // если равны
        if (a.investor.uuid < b.investor.uuid)
            return -1; // если первое значение меньше второго
    };
    MessageService.prototype.read = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.messagesRepository.save({
                            uuid: uuid,
                            status: message_status_1.MessageStatus.READ
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MessageService.prototype.send = function (topic, text, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mailerService.sendMessage(topic, text, user)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.messagesRepository.save({
                                topic: topic,
                                text: text,
                                user: {
                                    uuid: user.uuid
                                }
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MessageService.prototype.messageDirectorMinCollected = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send("\u041F\u043E \u043E\u0444\u0435\u0440\u0442\u0435 #".concat(offer.number, " \u0441\u043E\u0431\u0440\u0430\u043D\u0430 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430"), "\n      \u0421\u043E\u0431\u0440\u0430\u043D\u043E: ".concat(offer.currentVolume, " \u0440.\n    "), {
                            uuid: 1,
                            email: 'radzhabovBF@outlook.com'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageDirectorMaxCollected = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send("\u041F\u043E \u043E\u0444\u0435\u0440\u0442\u0435 #".concat(offer.number, " \u0441\u043E\u0431\u0440\u0430\u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430"), "\n      \u0421\u043E\u0431\u0440\u0430\u043D\u043E: ".concat(offer.currentVolume, " \u0440.\n    "), {
                            uuid: 1,
                            email: 'radzhabovBF@outlook.com'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageLenderNewInvestment = function (investment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send("\u041F\u043E \u0432\u0430\u0448\u0435\u0439 \u043E\u0444\u0435\u0440\u0442\u0435 \u2116".concat(investment.offer.number, " \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 (\u0440\u0435\u0437\u0435\u0440\u0432)"), "\n      \u0421\u0443\u043C\u043C\u0430: ".concat(investment.sum, ".\n    "), investment.offer.lender)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageInvestorPreInvest = function (investment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send("\u0420\u0435\u0437\u0435\u0440\u0432 \u043F\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u2116".concat(investment.uuid, " \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D \u0432 \u0441\u0442\u0430\u0442\u0443\u0441 \u043F\u0440\u0435-\u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0431\u043E\u0440 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0443\u043C\u043C\u044B \u043E\u0444\u0435\u0440\u0442\u044B."), "\n      \u0421\u0443\u043C\u043C\u0430: ".concat(investment.sum, ".\n    "), investment.investor)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageInvestorInvest = function (investment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send("\u0420\u0435\u0437\u0435\u0440\u0432 \u043F\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u2116".concat(investment.uuid, " \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D \u0432 \u0441\u0442\u0430\u0442\u0443\u0441 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0431\u043E\u0440 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0443\u043C\u043C\u044B \u043E\u0444\u0435\u0440\u0442\u044B \u043B\u0438\u0431\u043E \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u044F \u0435\u0435 \u0441\u0440\u043E\u043A\u0430."), "\n      \u0421\u0443\u043C\u043C\u0430: ".concat(investment.sum, ".\n    "), investment.investor)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageLenderOfferPublished = function (number, offer) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send('Оферта одобрена', "\n      \u0412\u0430\u0448\u0430 \u043E\u0444\u0435\u0440\u0442\u0430 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430 \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C ".concat(number, ". \u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F ").concat(offer.offerPeriodDays, " \u0434\u043D\u0435\u0439. \n    "), offer.lender)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageInvestorOfferPublished = function (number, investor, offer) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send('Новое инвестиционное предложение', "\n      \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E \u043D\u043E\u0432\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 ".concat(number, " \u0441 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0443\u043C\u043C\u043E\u0439 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439 ").concat(offer.maxVolume, " \u0440\u0443\u0431\u043B\u0435\u0439. \u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F ").concat(offer.offerPeriodDays, " \u0434\u043D\u0435\u0439. \n    "), investor)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageMinCollected = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var prev, _i, _a, inv;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.messageDirectorMinCollected(offer)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.send("\u041F\u043E \u0432\u0430\u0448\u0435\u0439 \u043E\u0444\u0435\u0440\u0442\u0435 \u2116".concat(offer.number, " \u0441\u043E\u0431\u0440\u0430\u043D\u0430 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430!"), "\n      \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439 \u043F\u043E \u043E\u0444\u0435\u0440\u0442\u0435: ".concat(offer.currentVolume, " \u0440.\n    "), offer.lender)];
                    case 2:
                        _b.sent();
                        prev = { uuid: 0 };
                        offer.investments.sort(this.sortInvestors);
                        _i = 0, _a = offer.investments;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        inv = _a[_i];
                        if (inv.investor.uuid === prev.uuid) {
                            return [3 /*break*/, 6];
                        }
                        if (!(inv.status !== investment_status_1.InvestmentStatus.REVOKED)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.send("\u041F\u043E \u043E\u0444\u0435\u0440\u0442\u0435 \u2116".concat(offer.number, " \u0441\u043E\u0431\u0440\u0430\u043D\u0430 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430"), "\n        \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439 \u043F\u043E \u043E\u0444\u0435\u0440\u0442\u0435: ".concat(offer.currentVolume, " \u0440.\n      "), inv.investor)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        prev = inv.investor;
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 3];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageMaxCollected = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var prev, _i, _a, inv;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.messageDirectorMaxCollected(offer)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.send("\u041F\u043E \u0432\u0430\u0448\u0435\u0439 \u043E\u0444\u0435\u0440\u0442\u0435 \u2116".concat(offer.number, " \u0441\u043E\u0431\u0440\u0430\u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430!"), "\n      \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439 \u043F\u043E \u043E\u0444\u0435\u0440\u0442\u0435: ".concat(offer.currentVolume, " \u0440.\n    "), offer.lender)];
                    case 2:
                        _b.sent();
                        prev = { uuid: 0 };
                        offer.investments.sort(this.sortInvestors);
                        _i = 0, _a = offer.investments;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        inv = _a[_i];
                        if (inv.investor.uuid === prev.uuid) {
                            return [3 /*break*/, 6];
                        }
                        if (!(inv.status !== investment_status_1.InvestmentStatus.REVOKED)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.send("\u041F\u043E \u043E\u0444\u0435\u0440\u0442\u0435 \u2116".concat(offer.number, " \u0441\u043E\u0431\u0440\u0430\u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430"), "\n        \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439 \u043F\u043E \u043E\u0444\u0435\u0440\u0442\u0435: ".concat(offer.currentVolume, " \u0440.\n      "), inv.investor)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        prev = inv.investor;
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 3];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageRevokedTime = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var prev, _i, _a, inv;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.send("\u0423 \u0432\u0430\u0448\u0435\u0439 \u043E\u0444\u0435\u0440\u0442\u044B \u2116".concat(offer.number, " \u0438\u0441\u0442\u0435\u043A \u0441\u0440\u043E\u043A \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F"), "\n      \u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u0430.\n    ", offer.lender)];
                    case 1:
                        _b.sent();
                        prev = { uuid: 0 };
                        offer.investments.sort(this.sortInvestors);
                        _i = 0, _a = offer.investments;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        inv = _a[_i];
                        if (inv.investor.uuid === prev.uuid) {
                            return [3 /*break*/, 5];
                        }
                        if (!(inv.status !== investment_status_1.InvestmentStatus.REVOKED)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.send("\u0423 \u043E\u0444\u0435\u0440\u0442\u044B \u2116".concat(offer.number, " \u0438\u0441\u0442\u0435\u043A \u0441\u0440\u043E\u043A \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F"), "\n        \u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u0430.\n      ", inv.investor)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        prev = inv.investor;
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageRevokedLender = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var prev, _i, _a, inv;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        prev = { uuid: 0 };
                        offer.investments.sort(this.sortInvestors);
                        _i = 0, _a = offer.investments;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        inv = _a[_i];
                        if (inv.investor.uuid === prev.uuid) {
                            return [3 /*break*/, 4];
                        }
                        if (!(inv.status !== investment_status_1.InvestmentStatus.REVOKED)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.send("\u041E\u0444\u0435\u0440\u0442\u0430 \u2116".concat(offer.number, " \u043E\u0442\u043E\u0437\u0432\u0430\u043D\u0430 \u0437\u0430\u0435\u043C\u0449\u0438\u043A\u043E\u043C"), "\n        \u0420\u0435\u0437\u0435\u0440\u0432 \u0438 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u044B. \u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043E\u0442\u0437\u044B\u0432\u0430: ".concat(offer.declineReason, "\n      "), inv.investor)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        prev = inv.investor;
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.messageCancelInvestment = function (offer, investment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send("\u041F\u043E \u0432\u0430\u0448\u0435\u0439 \u043E\u0444\u0435\u0440\u0442\u0435 #".concat(offer.number, " \u043E\u0442\u043C\u0435\u043D\u0435\u043D \u0440\u0435\u0437\u0435\u0440\u0432 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"), "\n      \u0421\u0443\u043C\u043C\u0430: ".concat(investment.sum, ".\n    "), offer.lender)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
        __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return users_service_1.UsersService; }))),
        __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return offers_service_1.OffersService; })))
    ], MessageService);
    return MessageService;
}(crud_typeorm_1.TypeOrmCrudService));
exports.MessageService = MessageService;
