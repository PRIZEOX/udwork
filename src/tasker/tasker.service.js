"use strict";
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
exports.TaskerService = void 0;
var common_1 = require("@nestjs/common");
var cron_1 = require("cron");
var offer_status_1 = require("../enums/offer.status");
var offers_service_1 = require("../offers/offers.service");
var investment_service_1 = require("../investments/investment.service");
var typeorm_1 = require("@nestjs/typeorm");
var task_entity_1 = require("./task.entity");
var task_type_1 = require("../enums/task.type");
var investment_status_1 = require("../enums/investment.status");
var TaskerService = /** @class */ (function () {
    function TaskerService(taskRepository, schedulerRegistry, offersService, usersService, messageService, investmentService, registryService) {
        this.taskRepository = taskRepository;
        this.schedulerRegistry = schedulerRegistry;
        this.offersService = offersService;
        this.usersService = usersService;
        this.messageService = messageService;
        this.investmentService = investmentService;
        this.registryService = registryService;
        this.logger = new common_1.Logger(TaskerService_1.name);
    }
    TaskerService_1 = TaskerService;
    TaskerService.prototype.onModuleInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, _i, tasks_1, task, e_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskRepository.find({
                            relations: ['offer', 'investment']
                        })];
                    case 1:
                        tasks = _a.sent();
                        if (!(tasks.length > 0)) return [3 /*break*/, 12];
                        _i = 0, tasks_1 = tasks;
                        _a.label = 2;
                    case 2:
                        if (!(_i < tasks_1.length)) return [3 /*break*/, 12];
                        task = tasks_1[_i];
                        if (!(task.type === task_type_1.TaskType.OFFER_EXPIRE)) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.startOfferDeadline(task.offer, task.deadline)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log('Offer job failed to start', task);
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 11];
                    case 7:
                        if (!(task.type === task_type_1.TaskType.INVEST_RESERVE)) return [3 /*break*/, 11];
                        _a.label = 8;
                    case 8:
                        _a.trys.push([8, 10, , 11]);
                        return [4 /*yield*/, this.startInvestJob(task.investment, task.deadline)];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        e_2 = _a.sent();
                        console.log('Invest job failed to start', task);
                        return [3 /*break*/, 11];
                    case 11:
                        _i++;
                        return [3 /*break*/, 2];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    TaskerService.prototype.scheduleOfferDeadline = function (offer, deadline) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskRepository.insert({
                            type: task_type_1.TaskType.OFFER_EXPIRE,
                            deadline: deadline,
                            offer: offer
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.startOfferDeadline(offer, deadline)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskerService.prototype.startOfferDeadline = function (offerDto, deadline) {
        return __awaiter(this, void 0, void 0, function () {
            var name, job;
            var _this = this;
            return __generator(this, function (_a) {
                name = "offer-".concat(offerDto.uuid);
                job = new cron_1.CronJob(deadline, function () { return __awaiter(_this, void 0, void 0, function () {
                    var offer, newOffer, summed, entries, now, thisYear, investorUuid;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.logger.verbose("job ".concat(name, " executed"));
                                return [4 /*yield*/, this.offersService.findByUuid(offerDto.uuid)];
                            case 1:
                                offer = _a.sent();
                                if (!(offer.status === offer_status_1.OfferStatus.FULFILLED_MIN)) return [3 /*break*/, 8];
                                // срок вышел, но мин сумма собрана
                                return [4 /*yield*/, this.investmentService.transferInvestmentsToAgreed(offer)];
                            case 2:
                                // срок вышел, но мин сумма собрана
                                _a.sent();
                                return [4 /*yield*/, this.offersService.saveOffer(__assign(__assign({}, offer), { status: offer_status_1.OfferStatus.AGREEMENT, fulfillDate: new Date() }))];
                            case 3:
                                _a.sent();
                                return [4 /*yield*/, this.messageService.messageMinCollected(offer)];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, this.stopOfferJob(offer)];
                            case 5:
                                _a.sent();
                                return [4 /*yield*/, this.offersService.findByUuid(offer.uuid)];
                            case 6:
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
                            case 7:
                                _a.sent();
                                return [3 /*break*/, 12];
                            case 8:
                                if (!(offer.status === offer_status_1.OfferStatus.PUBLISHED)) return [3 /*break*/, 12];
                                // истек срок действия оферты, мин сумма не собрана
                                return [4 /*yield*/, this.offersService.saveOffer(__assign(__assign({}, offer), { status: offer_status_1.OfferStatus.REVOKED_TIME }))];
                            case 9:
                                // истек срок действия оферты, мин сумма не собрана
                                _a.sent();
                                return [4 /*yield*/, this.investmentService.transferInvestmentsToCanceled(offer)];
                            case 10:
                                _a.sent();
                                return [4 /*yield*/, this.messageService.messageRevokedTime(offer)];
                            case 11:
                                _a.sent();
                                _a.label = 12;
                            case 12: return [4 /*yield*/, this.taskRepository["delete"]({
                                    offer: offer
                                })];
                            case 13:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.schedulerRegistry.addCronJob(name, job);
                job.start();
                this.logger.log("job ".concat(name, " added"));
                return [2 /*return*/];
            });
        });
    };
    TaskerService.prototype.scheduleInvestJob = function (investment, deadline) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskRepository.insert({
                            type: task_type_1.TaskType.INVEST_RESERVE,
                            deadline: deadline,
                            investment: investment
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.startInvestJob(investment, deadline)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskerService.prototype.startInvestJob = function (investment, deadline) {
        return __awaiter(this, void 0, void 0, function () {
            var name, job;
            var _this = this;
            return __generator(this, function (_a) {
                name = "invest-".concat(investment.uuid);
                job = new cron_1.CronJob(deadline, function () { return __awaiter(_this, void 0, void 0, function () {
                    var offer;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.offersService.findByUuid(investment.offer.uuid)];
                            case 1:
                                offer = _a.sent();
                                this.logger.verbose("job ".concat(name, " executed"));
                                if (!(offer.status === offer_status_1.OfferStatus.PUBLISHED)) return [3 /*break*/, 4];
                                return [4 /*yield*/, this.investmentService.preInvest(investment)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, this.messageService.messageInvestorPreInvest(investment)];
                            case 3:
                                _a.sent();
                                return [3 /*break*/, 7];
                            case 4:
                                if (!(offer.status === offer_status_1.OfferStatus.FULFILLED_MIN)) return [3 /*break*/, 7];
                                return [4 /*yield*/, this.investmentService.invest(investment)];
                            case 5:
                                _a.sent();
                                return [4 /*yield*/, this.messageService.messageInvestorInvest(investment)];
                            case 6:
                                _a.sent();
                                _a.label = 7;
                            case 7: return [4 /*yield*/, this.taskRepository["delete"]({
                                    investment: investment
                                })];
                            case 8:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.schedulerRegistry.addCronJob(name, job);
                job.start();
                this.logger.log("job ".concat(name, " added"));
                return [2 /*return*/];
            });
        });
    };
    TaskerService.prototype.stopOfferJob = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "offer-".concat(offer.uuid);
                        this.schedulerRegistry.deleteCronJob(name);
                        return [4 /*yield*/, this.taskRepository["delete"]({
                                offer: offer
                            })];
                    case 1:
                        _a.sent();
                        this.logger.warn("job ".concat(name, " deleted!"));
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskerService.prototype.stopInvestJob = function (investment) {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "invest-".concat(investment.uuid);
                        this.schedulerRegistry.deleteCronJob(name);
                        return [4 /*yield*/, this.taskRepository["delete"]({
                                investment: investment
                            })];
                    case 1:
                        _a.sent();
                        this.logger.warn("job ".concat(name, " deleted!"));
                        return [2 /*return*/];
                }
            });
        });
    };
    var TaskerService_1;
    TaskerService = TaskerService_1 = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
        __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return offers_service_1.OffersService; }))),
        __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return investment_service_1.InvestmentService; })))
    ], TaskerService);
    return TaskerService;
}());
exports.TaskerService = TaskerService;
