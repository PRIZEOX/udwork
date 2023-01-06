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
exports.PaymentService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var crud_typeorm_1 = require("@nestjsx/crud-typeorm");
var payment_entity_1 = require("./payment.entity");
var offers_service_1 = require("../offers/offers.service");
var offer_status_1 = require("../enums/offer.status");
var PaymentService = /** @class */ (function (_super) {
    __extends(PaymentService, _super);
    function PaymentService(paymentsRepository, configService, usersService, offersService) {
        var _this = _super.call(this, paymentsRepository) || this;
        _this.paymentsRepository = paymentsRepository;
        _this.configService = configService;
        _this.usersService = usersService;
        _this.offersService = offersService;
        return _this;
    }
    PaymentService.prototype.findByUuid = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentsRepository.findOne({ uuid: uuid }, {
                            relations: [
                                'offer',
                                'offer.investments',
                                'offer.lender',
                                'offer.registryEntries',
                                'offer.registryEntries.investor',
                            ]
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentService.prototype.lenderPayment = function (paymentUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var payment, payments, completed, _i, _a, entry;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findByUuid(paymentUuid)];
                    case 1:
                        payment = _b.sent();
                        return [4 /*yield*/, this.paymentsRepository.find({
                                offer: payment.offer
                            })];
                    case 2:
                        payments = _b.sent();
                        completed = payments.reduce(function (acc, payment) {
                            if (!payment.completed)
                                acc = false;
                            return acc;
                        }, true);
                        if (!completed) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.offersService.saveOffer({
                                uuid: payment.offer.uuid,
                                status: offer_status_1.OfferStatus.ARCHIVED
                            })];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i = 0, _a = payment.offer.registryEntries;
                        _b.label = 5;
                    case 5:
                        if (!(_i < _a.length)) return [3 /*break*/, 8];
                        entry = _a[_i];
                        return [4 /*yield*/, this.usersService.saveUser({
                                uuid: entry.investor.uuid,
                                mainAccount: +entry.investor.mainAccount +
                                    Math.round(((+payment.sum * entry.sum) / payment.offer.currentVolume) * 100) /
                                        100,
                                returnedAccount: +entry.investor.returnedAccount +
                                    Math.round(((+payment.sum * entry.sum) / payment.offer.currentVolume) * 100) /
                                        100
                            })];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 5];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    PaymentService.prototype.savePayment = function (payment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentsRepository.save(payment)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
        __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return offers_service_1.OffersService; })))
    ], PaymentService);
    return PaymentService;
}(crud_typeorm_1.TypeOrmCrudService));
exports.PaymentService = PaymentService;
