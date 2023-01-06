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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.OffersService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var crud_typeorm_1 = require("@nestjsx/crud-typeorm");
var offer_entity_1 = require("./offer.entity");
var offer_status_1 = require("../enums/offer.status");
var investment_service_1 = require("../investments/investment.service");
var crypto_1 = require("crypto");
var investment_status_1 = require("../enums/investment.status");
var tasker_service_1 = require("../tasker/tasker.service");
var users_service_1 = require("../users/users.service");
var payment_service_1 = require("../payments/payment.service");
var OffersService = /** @class */ (function (_super) {
    __extends(OffersService, _super);
    function OffersService(offersRepository, configService, investmentService, taskerService, picturesService, messageService, usersService, paymentService) {
        var _this = _super.call(this, offersRepository) || this;
        _this.offersRepository = offersRepository;
        _this.configService = configService;
        _this.investmentService = investmentService;
        _this.taskerService = taskerService;
        _this.picturesService = picturesService;
        _this.messageService = messageService;
        _this.usersService = usersService;
        _this.paymentService = paymentService;
        return _this;
    }
    OffersService.prototype.findByUuid = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.offersRepository.findOne({ uuid: uuid }, {
                            relations: [
                                'lender',
                                'investments',
                                'investments.investor',
                                'publicPictures',
                                'privatePictures',
                            ]
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OffersService.prototype.saveOffer = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.offersRepository.save(offer)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OffersService.prototype.savePublicPicture = function (_a, file) {
        var uuid = _a.uuid;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.picturesService.savePublic({
                            path: file.path.replace('static', ''),
                            origin: file.originalname
                        })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    OffersService.prototype.savePrivatePicture = function (_a, file) {
        var uuid = _a.uuid;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.picturesService.savePublic({
                            path: file.path.replace('static', ''),
                            origin: file.originalname
                        })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    OffersService.prototype.savePublicPictures = function (uuid, files) {
        return __awaiter(this, void 0, void 0, function () {
            var lender, _i, files_1, file, extension, hash, filename, path, picture;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findByUuid(uuid)];
                    case 1:
                        lender = (_a.sent()).lender;
                        _i = 0, files_1 = files;
                        _a.label = 2;
                    case 2:
                        if (!(_i < files_1.length)) return [3 /*break*/, 6];
                        file = files_1[_i];
                        extension = file.name.split('.').pop();
                        hash = (0, crypto_1.createHash)('sha256').update(file.name).digest('hex');
                        filename = lender.uuid + '-' + hash + '.' + extension;
                        path = '/upload/public/' + filename;
                        return [4 /*yield*/, this.picturesService.find(path)];
                    case 3:
                        picture = _a.sent();
                        if (!picture) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.picturesService.savePublic({
                                id: picture.id,
                                offerPublic: { uuid: uuid },
                                origin: file.name
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OffersService.prototype.savePrivatePictures = function (uuid, files) {
        return __awaiter(this, void 0, void 0, function () {
            var lender, _i, files_2, file, extension, hash, filename, path, picture;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findByUuid(uuid)];
                    case 1:
                        lender = (_a.sent()).lender;
                        _i = 0, files_2 = files;
                        _a.label = 2;
                    case 2:
                        if (!(_i < files_2.length)) return [3 /*break*/, 6];
                        file = files_2[_i];
                        extension = file.name.split('.').pop();
                        hash = (0, crypto_1.createHash)('sha256').update(file.name).digest('hex');
                        filename = lender.uuid + '-' + hash + '.' + extension;
                        path = '/upload/private/' + filename;
                        return [4 /*yield*/, this.picturesService.find(path)];
                    case 3:
                        picture = _a.sent();
                        if (!picture) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.picturesService.savePrivate({
                                id: picture.id,
                                offerPrivate: { uuid: uuid },
                                origin: file.name
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OffersService.prototype.deleteOffer = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.offersRepository["delete"]({ uuid: uuid })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, uuid];
                }
            });
        });
    };
    OffersService.prototype.declineOffer = function (user, _a) {
        var uuid = _a.uuid, declineReason = _a.declineReason;
        return __awaiter(this, void 0, void 0, function () {
            var offer;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findByUuid(uuid)];
                    case 1:
                        offer = _b.sent();
                        return [4 /*yield*/, this.messageService.send("\u0412\u0430\u0448\u0430 \u043E\u0444\u0435\u0440\u0442\u0430 #".concat(offer.uuid, " \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u043D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443"), "\n      \u041F\u0440\u0438\u0447\u0438\u043D\u0430: ".concat(declineReason, ",\n    "), offer.lender)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.offersRepository.save({
                                uuid: uuid,
                                declineReason: declineReason,
                                status: offer_status_1.OfferStatus.RETURNED,
                                publicPictures: offer.publicPictures,
                                privatePictures: offer.privatePictures
                            })];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    OffersService.prototype.publishOffer = function (user, _a) {
        var uuid = _a.uuid, rating = _a.rating;
        return __awaiter(this, void 0, void 0, function () {
            var offer, today, year, number, date, deadline, investors, _i, investors_1, investor;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.offersRepository.findOne({ uuid: uuid }, { relations: ['lender', 'publicPictures', 'privatePictures'] })];
                    case 1:
                        offer = _b.sent();
                        today = new Date();
                        year = today.getFullYear();
                        number = "\u0423\u0414-".concat(year.toString(), "-").concat(offer.lender.orgInn ? offer.lender.orgInn : offer.lender.inn, "-").concat(offer.uuid);
                        date = new Date();
                        if (this.configService.get('TEST_TIME') === '1') {
                            // в тестовом режиме 15 мин на истечение офера
                            deadline = new Date(date.getTime() + 5 * 60000);
                        }
                        else {
                            deadline = new Date(date.setDate(date.getDate() + offer.offerPeriodDays));
                        }
                        date = new Date();
                        return [4 /*yield*/, this.taskerService.scheduleOfferDeadline(offer, deadline)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.messageService.messageLenderOfferPublished(number, offer)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.usersService.findInvestors()];
                    case 4:
                        investors = _b.sent();
                        _i = 0, investors_1 = investors;
                        _b.label = 5;
                    case 5:
                        if (!(_i < investors_1.length)) return [3 /*break*/, 8];
                        investor = investors_1[_i];
                        return [4 /*yield*/, this.messageService.messageInvestorOfferPublished(number, investor, offer)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 5];
                    case 8: return [4 /*yield*/, this.offersRepository.save({
                            uuid: uuid,
                            status: offer_status_1.OfferStatus.PUBLISHED,
                            date: date,
                            deadline: deadline,
                            number: number,
                            rating: rating,
                            publicPictures: offer.publicPictures,
                            privatePictures: offer.privatePictures
                        })];
                    case 9: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    OffersService.prototype.cancelOffer = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var offer, _i, _a, investment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.offersRepository.findOne({ uuid: uuid }, { relations: ['investments', 'investments.investor'] })];
                    case 1:
                        offer = _b.sent();
                        // await this.usersService.transferAccountsToMain(offer);
                        return [4 /*yield*/, this.saveOffer(__assign({ status: offer_status_1.OfferStatus.REVOKED_TIME }, offer))];
                    case 2:
                        // await this.usersService.transferAccountsToMain(offer);
                        _b.sent();
                        return [4 /*yield*/, this.investmentService.transferInvestmentsToCanceled(offer)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.messageService.messageRevokedLender(offer)];
                    case 4:
                        _b.sent();
                        _i = 0, _a = offer.investments;
                        _b.label = 5;
                    case 5:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        investment = _a[_i];
                        if (!(investment.status !== investment_status_1.InvestmentStatus.REVOKED)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.messageService.send("\u041E\u0444\u0435\u0440\u0442\u0430 ".concat(offer.number, " \u043E\u0442\u043E\u0437\u0432\u0430\u043D\u0430 \u0437\u0430\u0435\u043C\u0449\u0438\u043A\u043E\u043C"), "\n        \u0420\u0435\u0437\u0435\u0440\u0432 \u043E\u0442\u043C\u0435\u043D\u0435\u043D. \u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043E\u0442\u0437\u044B\u0432\u0430: ".concat(offer.declineReason, "\n      "), investment.investor)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.investmentService.cancelInvestment(investment.uuid)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 5];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    OffersService.prototype.incrementOfferSum = function (investment) {
        return __awaiter(this, void 0, void 0, function () {
            var offer, currentVolume;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findByUuid(investment.offer.uuid)];
                    case 1:
                        offer = _a.sent();
                        currentVolume = +offer.currentVolume + +investment.sum;
                        return [4 /*yield*/, this.saveOffer({
                                uuid: investment.offer.uuid,
                                currentVolume: currentVolume,
                                publicPictures: offer.publicPictures,
                                privatePictures: offer.privatePictures
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.findByUuid(investment.offer.uuid)];
                    case 3:
                        offer = _a.sent();
                        return [2 /*return*/, offer];
                }
            });
        });
    };
    OffersService.prototype.pay = function (_a) {
        var offerUuid = _a.uuid;
        return __awaiter(this, void 0, void 0, function () {
            var offer, monthlyPayment, summed, investors, investorUuid, investorShares, investorPayments, payments, month, date, nextDate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findByUuid(offerUuid)];
                    case 1:
                        offer = _b.sent();
                        return [4 /*yield*/, this.offersRepository.save(__assign(__assign({}, offer), { status: offer_status_1.OfferStatus.COMPLETED }))];
                    case 2:
                        _b.sent();
                        monthlyPayment = this.getMonthlyPayment(offer.currentVolume, offer.investPeriodDays, offer.interestRate);
                        summed = offer.investments.reduce(function (acc, record) {
                            var investor = record.investor, sum = record.sum, status = record.status;
                            if (!acc[investor.uuid])
                                acc[investor.uuid] = { sum: 0 };
                            if (status !== investment_status_1.InvestmentStatus.REVOKED) {
                                acc[investor.uuid].sum += sum;
                            }
                            return acc;
                        }, {});
                        investors = [];
                        for (investorUuid in summed) {
                            investors.push({
                                uuid: investorUuid,
                                sum: summed[investorUuid].sum
                            });
                        }
                        investorShares = investors.map(function (inv) {
                            return {
                                investorUuid: inv.uuid,
                                share: inv.sum / offer.currentVolume
                            };
                        });
                        investorPayments = investorShares.map(function (inv) {
                            return {
                                investorUuid: inv.investorUuid,
                                payment: Math.round(inv.share * monthlyPayment * 100) / 100
                            };
                        });
                        payments = [];
                        for (month = 1; month <= offer.investPeriodDays; month++) {
                            date = new Date(offer.fulfillDate);
                            nextDate = new Date(date.setMonth(date.getMonth() + month));
                            payments.push({
                                date: nextDate,
                                sum: monthlyPayment,
                                offer: offer
                            });
                        }
                        return [4 /*yield*/, this.paymentService.savePayment(payments)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OffersService.prototype.getMonthlyPayment = function (sum, period, rate) {
        // ставка в месяц
        var i = rate / 12 / 100;
        console.log('ставка', rate);
        console.log('ставка в месяц', i);
        console.log('сумма', sum);
        console.log('период', period);
        // коэффициент аннуитета
        var coefficient = (i * Math.pow(1 + i, period)) / (Math.pow(1 + i, period) - 1);
        console.log('коеф', coefficient);
        // итог
        var result = sum * coefficient;
        console.log('монсли', result);
        return Math.round(result * 100) / 100;
    };
    OffersService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(offer_entity_1.Offer)),
        __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return investment_service_1.InvestmentService; }))),
        __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return tasker_service_1.TaskerService; }))),
        __param(6, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return users_service_1.UsersService; }))),
        __param(7, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return payment_service_1.PaymentService; })))
    ], OffersService);
    return OffersService;
}(crud_typeorm_1.TypeOrmCrudService));
exports.OffersService = OffersService;
