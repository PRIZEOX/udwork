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
exports.AgreementsService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var crud_typeorm_1 = require("@nestjsx/crud-typeorm");
var agreement_entity_1 = require("./agreement.entity");
var agreement_type_1 = require("../enums/agreement.type");
var users_service_1 = require("../users/users.service");
var role_1 = require("../enums/role");
var user_type_1 = require("../enums/user.type");
var htmlpdf = require("html-pdf");
var invoice_1 = require("../templates/invoice");
var pril2_1 = require("../templates/pril2");
var pril3_1 = require("../templates/pril3");
var pril4_1 = require("../templates/pril4");
var user_status_1 = require("../enums/user.status");
var pril6_1 = require("../templates/pril6");
var offer_status_1 = require("../enums/offer.status");
var pril5_1 = require("../templates/pril5");
// eslint-disable-next-line @typescript-eslint/no-var-requires
var numcap = require('numcap');
var logger = new common_1.Logger('AgreementsService');
var AgreementsService = /** @class */ (function (_super) {
    __extends(AgreementsService, _super);
    function AgreementsService(agreementsRepository, configService, offersService, usersService, investmentService) {
        var _this = _super.call(this, agreementsRepository) || this;
        _this.agreementsRepository = agreementsRepository;
        _this.configService = configService;
        _this.offersService = offersService;
        _this.usersService = usersService;
        _this.investmentService = investmentService;
        return _this;
    }
    AgreementsService.prototype.getOperator = function (phone) {
        return new Promise(function (resolve, reject) {
            try {
                var finder = new numcap();
                finder.getData(phone, function (err, data) {
                    if (err)
                        throw new common_1.HttpException(err.message, 406);
                    if (!data)
                        throw new common_1.HttpException('Телефон не найден в базе российских номеров', 406);
                    resolve(data);
                });
            }
            catch (e) {
                throw new common_1.HttpException('Телефон не найден в базе российских номеров', 406);
            }
        });
    };
    AgreementsService.prototype.createInvoice = function (uuid, sum) {
        return __awaiter(this, void 0, void 0, function () {
            var user, lender, investor, name, userName, agreement, type, pdfPath, pdf, invoiceOps;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findByUuid(uuid)];
                    case 1:
                        user = _a.sent();
                        if (user.role === role_1.Role.INVESTOR) {
                            investor = user;
                            name = 'Пополнение лицевого счета №' + user.uuid;
                            userName =
                                user.type === user_type_1.UserType.FL
                                    ? user.firstName + ' ' + user.middleName + ' ' + user.lastName
                                    : user.orgName;
                        }
                        else {
                            lender = user;
                            name =
                                'Регистрационный платеж при присоединении к договору об оказании услуг по привлечению инвестиций.';
                            userName = user.orgInn ? user.orgInn : user.inn + ', ' + user.orgName;
                            sum = 1499;
                        }
                        return [4 /*yield*/, this.saveAgreement({
                                type: agreement_type_1.AgreementType.INVOICE,
                                // date: new Date(),
                                lender: lender,
                                investor: investor,
                                sum: sum
                            })];
                    case 2:
                        agreement = _a.sent();
                        type = agreement_type_1.AgreementType.LENDER_OFERTA;
                        pdfPath = "static/generated/invoice-".concat(agreement.uuid, ".pdf");
                        pdf = "/generated/invoice-".concat(agreement.uuid, ".pdf");
                        invoiceOps = {
                            number: agreement.uuid,
                            dateString: agreement.createdAt.toLocaleString('ru', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }),
                            sumString: sum.toString() + ',00',
                            userName: userName,
                            name: name
                        };
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                htmlpdf
                                    .create((0, invoice_1.invoice)(invoiceOps), {
                                    format: 'A4',
                                    orientation: 'portrait',
                                    childProcessOptions: {
                                        env: {
                                            OPENSSL_CONF: '/dev/null'
                                        }
                                    }
                                })
                                    .toFile(pdfPath, function (err) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (err) {
                                                    logger.error(err);
                                                }
                                                return [4 /*yield*/, this.saveAgreement({
                                                        uuid: agreement.uuid,
                                                        pdf: pdf
                                                    })];
                                            case 1:
                                                _a.sent();
                                                resolve(agreement);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                }
            });
        });
    };
    AgreementsService.prototype.saveAgreement = function (agreement) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.agreementsRepository.save(agreement)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AgreementsService.prototype.signUserInfo = function (_a) {
        var phone = _a.phone, code = _a.code;
        return __awaiter(this, void 0, void 0, function () {
            var user, operator, template_1, type_1, investor_1, lender_1, pdfPath_1, pdf_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.usersService.findByPhone(phone)];
                    case 1:
                        user = _b.sent();
                        return [4 /*yield*/, this.getOperator(user.phone)];
                    case 2:
                        operator = _b.sent();
                        if (user.code === code) {
                            if (user.role === role_1.Role.INVESTOR) {
                                investor_1 = user;
                                if (user.type === user_type_1.UserType.FL) {
                                    template_1 = pril2_1.pril2;
                                    type_1 = agreement_type_1.AgreementType.APPLY_INVESTOR_FL;
                                }
                                else {
                                    template_1 = pril3_1.pril3;
                                    type_1 = agreement_type_1.AgreementType.APPLY_INVESTOR_UL;
                                }
                            }
                            else {
                                lender_1 = user;
                                template_1 = pril4_1.pril4;
                                type_1 = agreement_type_1.AgreementType.APPLY_LENDER;
                            }
                            pdfPath_1 = "static/generated/".concat(user.uuid, "-register.pdf");
                            pdf_1 = "/generated/".concat(user.uuid, "-register.pdf");
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    htmlpdf
                                        .create(template_1(user, code, operator), {
                                        format: 'A4',
                                        orientation: 'portrait',
                                        childProcessOptions: {
                                            env: {
                                                OPENSSL_CONF: '/dev/null'
                                            }
                                        }
                                    })
                                        .toFile(pdfPath_1, function (err) { return __awaiter(_this, void 0, void 0, function () {
                                        var agreement, status, _a;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (err) {
                                                        logger.error(err);
                                                    }
                                                    return [4 /*yield*/, this.saveAgreement({
                                                            type: type_1,
                                                            pdf: pdf_1,
                                                            date: new Date(),
                                                            investor: investor_1,
                                                            lender: lender_1
                                                        })];
                                                case 1:
                                                    agreement = _b.sent();
                                                    status = user_status_1.UserStatus.APPROVAL;
                                                    _a = resolve;
                                                    return [4 /*yield*/, this.usersService.saveUser({
                                                            uuid: user.uuid,
                                                            status: status
                                                        })];
                                                case 2:
                                                    _a.apply(void 0, [_b.sent()]);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                })];
                        }
                        else {
                            return [2 /*return*/, 401];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AgreementsService.prototype.signOffer = function (_a) {
        var phone = _a.phone, code = _a.code, offerUuid = _a.offerUuid;
        return __awaiter(this, void 0, void 0, function () {
            var user, operator, offer, type, pdfPath, pdf_2, fio;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.usersService.findByPhone(phone)];
                    case 1:
                        user = _b.sent();
                        return [4 /*yield*/, this.getOperator(user.phone)];
                    case 2:
                        operator = _b.sent();
                        return [4 /*yield*/, this.offersService.findByUuid(offerUuid)];
                    case 3:
                        offer = _b.sent();
                        type = agreement_type_1.AgreementType.LENDER_OFERTA;
                        if (user.code === code) {
                            pdfPath = "static/generated/offer-".concat(offerUuid, "-").concat(code, ".pdf");
                            pdf_2 = "/generated/offer-".concat(offerUuid, "-").concat(code, ".pdf");
                            fio = "".concat(user.firstName, " ").concat(user.middleName, " ").concat(user.lastName);
                            htmlpdf
                                .create((0, pril6_1.pril6)(user, code, operator, offer, fio), {
                                format: 'A4',
                                orientation: 'portrait',
                                childProcessOptions: {
                                    env: {
                                        OPENSSL_CONF: '/dev/null'
                                    }
                                }
                            })
                                .toFile(pdfPath, function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var agreement;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (err) {
                                                logger.error(err);
                                            }
                                            return [4 /*yield*/, this.saveAgreement({
                                                    type: type,
                                                    pdf: pdf_2,
                                                    date: new Date(),
                                                    lender: user
                                                })];
                                        case 1:
                                            agreement = _a.sent();
                                            return [4 /*yield*/, this.offersService.saveOffer({
                                                    uuid: offerUuid,
                                                    status: offer_status_1.OfferStatus.APPROVAL,
                                                    agreement: agreement
                                                })];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        else {
                            return [2 /*return*/, 401];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AgreementsService.prototype.signAccept = function (userUuid, investment, code) {
        return __awaiter(this, void 0, void 0, function () {
            var user, operator, offer, type, name, lpiName, pdfPath, pdf_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findByUuid(userUuid)];
                    case 1:
                        user = _a.sent();
                        // todo: Переделать через validation pipe
                        if (+investment.sum > +user.mainAccount - +user.reserveAccount) {
                            throw new common_1.HttpException('Не достаточно средств на ЛС', 400);
                        }
                        return [4 /*yield*/, this.investmentService.saveInvestment(user, investment)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getOperator(user.phone)];
                    case 3:
                        operator = _a.sent();
                        return [4 /*yield*/, this.offersService.findByUuid(investment.offer.uuid)];
                    case 4:
                        offer = _a.sent();
                        type = agreement_type_1.AgreementType.INVESTOR_CLAIM;
                        name = user.type === user_type_1.UserType.FL || user.type === user_type_1.UserType.IP
                            ? user.firstName + ' ' + user.middleName + ' ' + user.lastName
                            : user.orgName;
                        lpiName = offer.lender.type === user_type_1.UserType.IP
                            ? offer.lender.firstName +
                                ' ' +
                                offer.lender.middleName +
                                ' ' +
                                offer.lender.lastName +
                                ', ' +
                                offer.lender.inn
                                ? offer.lender.inn
                                : offer.lender.orgInn
                            : "".concat(offer.lender.orgName, ", ").concat(offer.lender.orgInn);
                        if (user.code === code) {
                            pdfPath = "static/generated/accept-".concat(investment.offer.uuid, "-").concat(code, ".pdf");
                            pdf_3 = "/generated/accept-".concat(investment.offer.uuid, "-").concat(code, ".pdf");
                            htmlpdf
                                .create((0, pril5_1.pril5)(user, code, operator, offer, name, investment.sum, lpiName), {
                                format: 'A4',
                                orientation: 'portrait',
                                childProcessOptions: {
                                    env: {
                                        OPENSSL_CONF: '/dev/null'
                                    }
                                }
                            })
                                .toFile(pdfPath, function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var agreement;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (err) {
                                                logger.error(err);
                                            }
                                            return [4 /*yield*/, this.saveAgreement({
                                                    type: type,
                                                    pdf: pdf_3,
                                                    date: new Date(),
                                                    investor: user
                                                })];
                                        case 1:
                                            agreement = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        else {
                            return [2 /*return*/, 401];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AgreementsService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(agreement_entity_1.Agreement)),
        __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return users_service_1.UsersService; })))
    ], AgreementsService);
    return AgreementsService;
}(crud_typeorm_1.TypeOrmCrudService));
exports.AgreementsService = AgreementsService;
