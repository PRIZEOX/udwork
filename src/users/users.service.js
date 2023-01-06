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
exports.UsersService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var crud_typeorm_1 = require("@nestjsx/crud-typeorm");
var user_entity_1 = require("./user.entity");
var users_seed_1 = require("./users.seed");
var user_status_1 = require("../enums/user.status");
var role_1 = require("../enums/role");
var crypto_1 = require("crypto");
var investment_status_1 = require("../enums/investment.status");
var mailer_service_1 = require("../mailer/mailer.service");
var moment = require('moment');
// eslint-disable-next-line @typescript-eslint/no-var-requires
var SMSru = require('sms_ru');
var logger = new common_1.Logger('UsersService');
var UsersService = /** @class */ (function (_super) {
    __extends(UsersService, _super);
    function UsersService(usersRepository, configService, picturesService, mailerService) {
        var _this = _super.call(this, usersRepository) || this;
        _this.usersRepository = usersRepository;
        _this.configService = configService;
        _this.picturesService = picturesService;
        _this.mailerService = mailerService;
        _this.sms = new SMSru(_this.configService.get('SMS_API_ID'));
        _this.prod = _this.configService.get('SWAGGER') !== '1';
        return _this;
    }
    UsersService.prototype.normalizePhone = function (phone) {
        var stripped = phone.replace(/[^0-9]/g, '');
        var normPhone;
        if (stripped[0] === '8' || stripped[0] === '7') {
            normPhone = stripped.substring(1);
        }
        else {
            normPhone = stripped;
        }
        return normPhone;
    };
    UsersService.prototype.notifyUser = function (userUuid, _a) {
        var status = _a.status, declineReason = _a.declineReason;
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findByUuid(userUuid)];
                    case 1:
                        user = _b.sent();
                        return [4 /*yield*/, this.mailerService.sendStatusChanged(user, status, declineReason)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.findByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.findOne({
                            email: email,
                            status: (0, typeorm_2.Not)(user_status_1.UserStatus.PRE_ACCOUNT)
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.findByEmailDisabled = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.findOne({
                            email: email,
                            status: user_status_1.UserStatus.PRE_ACCOUNT
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.findByPhone = function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger.log(this.normalizePhone(phone));
                        return [4 /*yield*/, this.usersRepository.findOne({
                                phone: this.normalizePhone(phone),
                                status: (0, typeorm_2.Not)(user_status_1.UserStatus.PRE_ACCOUNT)
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.findManyByPhone = function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger.log(this.normalizePhone(phone));
                        return [4 /*yield*/, this.usersRepository.find({
                                phone: this.normalizePhone(phone),
                                status: (0, typeorm_2.Not)(user_status_1.UserStatus.PRE_ACCOUNT)
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.findByPhoneDisabled = function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.findOne({
                            phone: this.normalizePhone(phone),
                            status: user_status_1.UserStatus.PRE_ACCOUNT
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.findLenders = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.find({ role: role_1.Role.LENDER })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.findInvestors = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.find({ role: role_1.Role.INVESTOR })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.saveUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.save(user)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.saveUserByPhone = function (userDto) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findByPhone(userDto.phone)];
                    case 1:
                        user = _a.sent();
                        delete userDto.phone;
                        userDto.issueDate = moment(userDto.issueDate, 'DD.MM.YYYY').toDate();
                        userDto.dateOfBirth = moment(userDto.dateOfBirth, 'DD.MM.YYYY').toDate();
                        return [4 /*yield*/, this.usersRepository.save(__assign({ uuid: user.uuid }, userDto))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.saveUserPicture = function (_a, file) {
        var uuid = _a.uuid;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.picturesService.savePublic({
                            path: file.path.replace('static', ''),
                            user: { uuid: uuid },
                            origin: file.originalname
                        })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    UsersService.prototype.seed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.save(users_seed_1.usersSeed)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.findByUuid = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var entityManager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entityManager = (0, typeorm_2.getManager)();
                        return [4 /*yield*/, entityManager
                                .getRepository(user_entity_1.User)
                                .createQueryBuilder('user')
                                .where('user.uuid = :uuid', { uuid: uuid })
                                .leftJoinAndSelect('user.messages', 'message')
                                .orderBy('message.createdAt', 'DESC')
                                .leftJoinAndSelect('user.pictures', 'picture')
                                .leftJoinAndSelect('user.lenderAgreements', 'lenderAgreement')
                                .leftJoinAndSelect('user.investorAgreements', 'investorAgreement')
                                .leftJoinAndSelect('user.registryEntries', 'registryEntry')
                                .getOne()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.changeCreds = function (_a) {
        var phone = _a.phone, password = _a.password, code = _a.code;
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findByPhone(phone)];
                    case 1:
                        user = _b.sent();
                        if (!(+user.code === +code && password)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.saveUser({
                                uuid: user.uuid,
                                passwordHash: (0, crypto_1.createHash)('sha256').update(password).digest('hex')
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, user];
                    case 3: throw new common_1.HttpException('Неправильный код из SMS', 400);
                }
            });
        });
    };
    UsersService.prototype.check = function (token, email) {
        var hash = (0, crypto_1.createHash)('sha256')
            .update(email + this.configService.get('HASH_SALT'))
            .digest('hex');
        return token === hash;
    };
    UsersService.prototype.sendProfileCode = function (_a, _b) {
        var phone = _a.phone;
        var uuid = _b.uuid;
        return __awaiter(this, void 0, void 0, function () {
            var users, code, user;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.findManyByPhone(phone)];
                    case 1:
                        users = _c.sent();
                        if (!(users.length > 1)) return [3 /*break*/, 2];
                        return [2 /*return*/, 'phone'];
                    case 2:
                        code = Math.round(Math.random() * (9999 - 0));
                        return [4 /*yield*/, this.findByUuid(uuid)];
                    case 3:
                        user = _c.sent();
                        if (this.prod) {
                            this.sms.sms_send({
                                to: '7' + user.phone,
                                translit: true,
                                text: 'Udalton ' + code
                            }, function (e) {
                                logger.log(e.description);
                            });
                        }
                        return [4 /*yield*/, this.saveUser({
                                uuid: user.uuid,
                                code: code,
                                phone: this.normalizePhone(phone)
                            })];
                    case 4:
                        _c.sent();
                        return [2 /*return*/, this.prod ? 1111 : code];
                }
            });
        });
    };
    UsersService.prototype.updatePassword = function (updateDto) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.check(updateDto.token, updateDto.email)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.usersRepository.findOne({
                                email: updateDto.email
                            })];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.usersRepository.save({
                                uuid: user.uuid,
                                passwordHash: (0, crypto_1.createHash)('sha256')
                                    .update(updateDto.password)
                                    .digest('hex')
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.usersRepository.findOne({
                                uuid: user.uuid
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, null];
                }
            });
        });
    };
    UsersService.prototype.sendRegisterCode = function (_a) {
        var phone = _a.phone;
        return __awaiter(this, void 0, void 0, function () {
            var code, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        code = Math.round(Math.random() * (9999 - 0));
                        return [4 /*yield*/, this.findByPhoneDisabled(phone)];
                    case 1:
                        user = _b.sent();
                        if (this.prod) {
                            this.sms.sms_send({
                                to: '7' + user.phone,
                                translit: true,
                                text: 'Udalton ' + code
                            }, function (e) {
                                logger.log(e.description);
                            });
                        }
                        return [4 /*yield*/, this.saveUser({
                                uuid: user.uuid,
                                code: code
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.prod ? 1111 : code];
                }
            });
        });
    };
    UsersService.prototype.sendSignCode = function (_a) {
        var phone = _a.phone;
        return __awaiter(this, void 0, void 0, function () {
            var code, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        code = Math.round(Math.random() * (9999 - 0));
                        return [4 /*yield*/, this.findByPhone(phone)];
                    case 1:
                        user = _b.sent();
                        if (this.prod) {
                            this.sms.sms_send({
                                to: '7' + user.phone,
                                translit: true,
                                text: 'Udalton ' + code
                            }, function (e) {
                                logger.log(e.description);
                            });
                        }
                        return [4 /*yield*/, this.saveUser({
                                uuid: user.uuid,
                                code: code
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.prod ? 1111 : code];
                }
            });
        });
    };
    UsersService.prototype.transferMainToReserved = function (investment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveUser({
                            uuid: investment.investor.uuid,
                            mainAccount: +investment.investor.mainAccount - +investment.sum,
                            reserveAccount: +investment.investor.reserveAccount + +investment.sum,
                            limitAccount: +investment.investor.limitAccount + +investment.sum
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.transferReservedToPreInvested = function (investment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveUser({
                            uuid: investment.investor.uuid,
                            reserveAccount: +investment.investor.reserveAccount - +investment.sum,
                            preInvestAccount: +investment.investor.preInvestAccount + +investment.sum
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.transferReservedToInvested = function (investment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveUser({
                            uuid: investment.investor.uuid,
                            reserveAccount: +investment.investor.reserveAccount - +investment.sum,
                            investAccount: +investment.investor.investAccount + +investment.sum
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.transferAccountsToInvested = function (offer) {
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
                        if (!(investment.status === investment_status_1.InvestmentStatus.PRE_INVESTED)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.saveUser({
                                uuid: investment.investor.uuid,
                                preInvestAccount: +investment.investor.preInvestAccount - +investment.sum,
                                investAccount: +investment.investor.investAccount + +investment.sum
                            })];
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
    UsersService.prototype.transferAccountsToAgreed = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, investment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = offer.investments;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        investment = _a[_i];
                        if (!(investment.status === investment_status_1.InvestmentStatus.INVESTED)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.saveUser({
                                uuid: investment.investor.uuid,
                                investAccount: +investment.investor.investAccount - +investment.sum,
                                agreedAccount: +investment.investor.agreedAccount + +investment.sum
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (!(investment.status === investment_status_1.InvestmentStatus.RESERVED)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.saveUser({
                                uuid: investment.investor.uuid,
                                reserveAccount: +investment.investor.reserveAccount - +investment.sum,
                                agreedAccount: +investment.investor.agreedAccount + +investment.sum
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
    UsersService.prototype.transferAccountsToMain = function (offer) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, investment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = offer.investments;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        investment = _a[_i];
                        if (!(investment.status === investment_status_1.InvestmentStatus.PRE_INVESTED)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.saveUser({
                                uuid: investment.investor.uuid,
                                preInvestAccount: +investment.investor.preInvestAccount - +investment.sum,
                                limitAccount: +investment.investor.limitAccount - +investment.sum,
                                mainAccount: +investment.investor.mainAccount + +investment.sum
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (!(investment.status === investment_status_1.InvestmentStatus.RESERVED)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.saveUser({
                                uuid: investment.investor.uuid,
                                reserveAccount: +investment.investor.reserveAccount - +investment.sum,
                                limitAccount: +investment.investor.limitAccount - +investment.sum,
                                mainAccount: +investment.investor.mainAccount + +investment.sum
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
    UsersService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
        __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return mailer_service_1.MailerService; })))
    ], UsersService);
    return UsersService;
}(crud_typeorm_1.TypeOrmCrudService));
exports.UsersService = UsersService;
