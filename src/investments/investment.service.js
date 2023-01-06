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
exports.InvestmentService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var crud_typeorm_1 = require("@nestjsx/crud-typeorm");
var investment_entity_1 = require("./investment.entity");
var users_service_1 = require("../users/users.service");
var offers_service_1 = require("../offers/offers.service");
var offer_status_1 = require("../enums/offer.status");
var investment_status_1 = require("../enums/investment.status");
var InvestmentService = /** @class */ (function (_super) {
    __extends(InvestmentService, _super);
    function InvestmentService(investmentsRepository, usersService, offersService, messageService, taskerService, configService, registryService) {
        var _this = _super.call(this, investmentsRepository) || this;
        _this.investmentsRepository = investmentsRepository;
        _this.usersService = usersService;
        _this.offersService = offersService;
        _this.messageService = messageService;
        _this.taskerService = taskerService;
        _this.configService = configService;
        _this.registryService = registryService;
        return _this;
    }
    InvestmentService.prototype.addWorkDays = function (startDate, days) {
        if (isNaN(days)) {
            console.log('Value provided for "days" was not a number');
            return;
        }
        if (!(startDate instanceof Date)) {
            console.log('Value provided for "startDate" was not a Date object');
            return;
        }
        // Get the day of the week as a number (0 = Sunday, 1 = Monday, .... 6 = Saturday)
        var dow = startDate.getDay();
        var daysToAdd = days;
        // If the current day is Sunday add one day
        if (dow == 0)
            daysToAdd++;
        // If the start date plus the additional days falls on or after the closest Saturday calculate weekends
        if (dow + daysToAdd >= 6) {
            //Subtract days in current working week from work days
            var remainingWorkDays = daysToAdd - (5 - dow);
            //Add current working week's weekend
            daysToAdd += 2;
            if (remainingWorkDays > 5) {
                //Add two days for each working week by calculating how many weeks are included
                daysToAdd += 2 * Math.floor(remainingWorkDays / 5);
                //Exclude final weekend if remainingWorkDays resolves to an exact number of weeks
                if (remainingWorkDays % 5 == 0)
                    daysToAdd -= 2;
            }
        }
        startDate.setDate(startDate.getDate() + daysToAdd);
        return startDate;
    };
    InvestmentService.prototype.transferInvestmentsToPreInvested = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, investment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = offer.investments;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        investment = _a[_i];
                        if (!(investment.status === investment_status_1.InvestmentStatus.INVESTED)) return [3 /*break*/, 3];
                        investment.status = investment_status_1.InvestmentStatus.PRE_INVESTED;
                        return [4 /*yield*/, this.investmentsRepository.save(investment)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InvestmentService.prototype.transferInvestmentsToInvested = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, investment, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = offer.investments;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        investment = _a[_i];
                        if (!(investment.status === investment_status_1.InvestmentStatus.PRE_INVESTED)) return [3 /*break*/, 5];
                        investment.status = investment_status_1.InvestmentStatus.INVESTED;
                        return [4 /*yield*/, this.investmentsRepository.save(investment)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.usersService.findByUuid(investment.investor.uuid)];
                    case 3:
                        user = _b.sent();
                        return [4 /*yield*/, this.usersService.saveUser({
                                uuid: user.uuid,
                                preInvestAccount: +user.preInvestAccount - +investment.sum,
                                investAccount: +user.investAccount + +investment.sum
                            })];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    InvestmentService.prototype.transferInvestmentsToAgreed = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, investment, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = offer.investments;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        investment = _a[_i];
                        return [4 /*yield*/, this.usersService.findByUuid(investment.investor.uuid)];
                    case 2:
                        user = _b.sent();
                        if (!(investment.status === investment_status_1.InvestmentStatus.INVESTED)) return [3 /*break*/, 5];
                        investment.status = investment_status_1.InvestmentStatus.AGREED;
                        return [4 /*yield*/, this.investmentsRepository.save(investment)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.usersService.saveUser({
                                uuid: user.uuid,
                                investAccount: +user.investAccount - +investment.sum,
                                agreedAccount: +user.agreedAccount + +investment.sum
                            })];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        if (!(investment.status === investment_status_1.InvestmentStatus.RESERVED)) return [3 /*break*/, 8];
                        investment.status = investment_status_1.InvestmentStatus.AGREED;
                        return [4 /*yield*/, this.investmentsRepository.save(investment)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.usersService.saveUser({
                                uuid: user.uuid,
                                reserveAccount: +user.reserveAccount - +investment.sum,
                                agreedAccount: +user.agreedAccount + +investment.sum
                            })];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 1];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    InvestmentService.prototype.transferInvestmentsToCanceled = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, investment, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = offer.investments;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        investment = _a[_i];
                        return [4 /*yield*/, this.usersService.findByUuid(investment.investor.uuid)];
                    case 2:
                        user = _b.sent();
                        if (!(investment.status === investment_status_1.InvestmentStatus.PRE_INVESTED)) return [3 /*break*/, 5];
                        investment.status = investment_status_1.InvestmentStatus.REVOKED;
                        return [4 /*yield*/, this.investmentsRepository.save(investment)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.usersService.saveUser({
                                uuid: user.uuid,
                                preInvestAccount: +user.preInvestAccount - +investment.sum,
                                limitAccount: +user.limitAccount - +investment.sum,
                                mainAccount: +user.mainAccount + +investment.sum
                            })];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        if (!(investment.status === investment_status_1.InvestmentStatus.RESERVED)) return [3 /*break*/, 8];
                        investment.status = investment_status_1.InvestmentStatus.REVOKED;
                        return [4 /*yield*/, this.investmentsRepository.save(investment)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.usersService.saveUser({
                                uuid: user.uuid,
                                reserveAccount: +user.reserveAccount - +investment.sum,
                                limitAccount: +user.limitAccount - +investment.sum,
                                mainAccount: +user.mainAccount + +investment.sum
                            })];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 1];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    InvestmentService.prototype.checkCompletion = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var newOffer, summed, entries, now, thisYear, investorUuid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(+offer.currentVolume >= +offer.maxVolume)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.transferInvestmentsToAgreed(offer)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.offersService.saveOffer(__assign(__assign({}, offer), { status: offer_status_1.OfferStatus.AGREEMENT, fulfillDate: new Date() }))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.messageService.messageMaxCollected(offer)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.taskerService.stopOfferJob(offer)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.offersService.findByUuid(offer.uuid)];
                    case 5:
                        newOffer = _a.sent();
                        summed = newOffer.investments.reduce(function (acc, record) {
                            var investor = record.investor, sum = record.sum, status = record.status;
                            if (!acc[investor.uuid])
                                acc[investor.uuid] = { sum: 0 };
                            if (status === investment_status_1.InvestmentStatus.AGREED) {
                                acc[investor.uuid].sum += sum;
                                acc[investor.uuid].inn = investor.orgInn
                                    ? investor.orgInn
                                    : investor.inn;
                            }
                            return acc;
                        }, {});
                        entries = [];
                        now = new Date();
                        thisYear = now.getFullYear();
                        for (investorUuid in summed) {
                            entries.push({
                                number: "\u0423\u0414-".concat(summed[investorUuid].inn, "-").concat(thisYear, "-").concat(newOffer.uuid),
                                investor: { uuid: investorUuid },
                                offer: { uuid: newOffer.uuid },
                                sum: summed[investorUuid].sum
                            });
                        }
                        return [4 /*yield*/, this.registryService.saveRegistry(entries)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 7:
                        if (!(+offer.currentVolume >= +offer.minVolume)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.transferInvestmentsToInvested(offer)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.offersService.saveOffer(__assign(__assign({}, offer), { status: offer_status_1.OfferStatus.FULFILLED_MIN }))];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.messageService.messageMinCollected(offer)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    InvestmentService.prototype.saveInvestment = function (user, investmentDto) {
        return __awaiter(this, void 0, void 0, function () {
            var response, investment, deadline, offer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.investmentsRepository.save(investmentDto)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.investmentsRepository.findOne({
                                uuid: response.uuid
                            }, { relations: ['offer', 'offer.lender', 'investor'] })];
                    case 2:
                        investment = _a.sent();
                        // переведем сумму инвеста из мэйн в резерв
                        return [4 /*yield*/, this.usersService.transferMainToReserved(investment)];
                    case 3:
                        // переведем сумму инвеста из мэйн в резерв
                        _a.sent();
                        // оповестим лендера об инвестиции
                        return [4 /*yield*/, this.messageService.messageLenderNewInvestment(investment)];
                    case 4:
                        // оповестим лендера об инвестиции
                        _a.sent();
                        if (this.configService.get('TEST_TIME') === '1') {
                            // в тестовом режиме 3 мин на отмену инвестиции
                            deadline = new Date(investment.createdAt.getTime() + 3 * 60000);
                        }
                        else {
                            deadline = this.addWorkDays(investment.createdAt, 5);
                        }
                        return [4 /*yield*/, this.taskerService.scheduleInvestJob(investment, deadline)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.offersService.incrementOfferSum(investment)];
                    case 6:
                        offer = _a.sent();
                        // если достигнута веха (мин или макс сумма) выполним движ
                        return [4 /*yield*/, this.checkCompletion(offer)];
                    case 7:
                        // если достигнута веха (мин или макс сумма) выполним движ
                        _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    InvestmentService.prototype.preInvest = function (investment) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findByUuid(investment.investor.uuid)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.usersService.saveUser({
                                uuid: user.uuid,
                                reserveAccount: +user.reserveAccount - +investment.sum,
                                preInvestAccount: +user.preInvestAccount + +investment.sum
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.investmentsRepository.save({
                                uuid: investment.uuid,
                                status: investment_status_1.InvestmentStatus.PRE_INVESTED
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InvestmentService.prototype.invest = function (investment) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findByUuid(investment.investor.uuid)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.usersService.saveUser({
                                uuid: user.uuid,
                                reserveAccount: +user.reserveAccount - +investment.sum,
                                investAccount: +user.investAccount + +investment.sum
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.investmentsRepository.save({
                                uuid: investment.uuid,
                                status: investment_status_1.InvestmentStatus.INVESTED
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InvestmentService.prototype.cancelInvestment = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var investment, user, offer, currentVolume;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.investmentsRepository.findOne({ uuid: uuid }, { relations: ['investor', 'offer'] })];
                    case 1:
                        investment = _a.sent();
                        user = investment.investor;
                        return [4 /*yield*/, this.usersService.saveUser({
                                uuid: user.uuid,
                                mainAccount: +user.mainAccount + +investment.sum,
                                reserveAccount: +user.reserveAccount - +investment.sum,
                                limitAccount: +user.limitAccount - +investment.sum
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.offersService.findByUuid(investment.offer.uuid)];
                    case 3:
                        offer = _a.sent();
                        currentVolume = +offer.currentVolume - +investment.sum;
                        if (!(+currentVolume < +offer.maxVolume)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.offersService.saveOffer(__assign(__assign({}, offer), { status: offer_status_1.OfferStatus.FULFILLED_MIN, currentVolume: currentVolume }))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!(+currentVolume < +offer.minVolume)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.offersService.saveOffer(__assign(__assign({ status: offer_status_1.OfferStatus.PUBLISHED }, offer), { currentVolume: currentVolume }))];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.transferInvestmentsToPreInvested(offer)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.offersService.saveOffer(__assign(__assign({}, offer), { currentVolume: currentVolume }))];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [4 /*yield*/, this.taskerService.stopInvestJob(investment)];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.messageService.messageCancelInvestment(offer, investment)];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InvestmentService.prototype.seed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    InvestmentService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(investment_entity_1.Investment)),
        __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return users_service_1.UsersService; }))),
        __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return offers_service_1.OffersService; })))
    ], InvestmentService);
    return InvestmentService;
}(crud_typeorm_1.TypeOrmCrudService));
exports.InvestmentService = InvestmentService;
