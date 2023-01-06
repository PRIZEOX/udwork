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
exports.LoginService = void 0;
var common_1 = require("@nestjs/common");
var users_service_1 = require("../../users/users.service");
var crypto_1 = require("crypto");
var LoginService = /** @class */ (function () {
    function LoginService(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    LoginService.prototype.normalizePhone = function (phone) {
        var stripped = phone.replace(/[^0-9]/g, '');
        var normPhone;
        if (stripped[0] === '8' || stripped[0] === '7') {
            normPhone = stripped.substring(1);
        }
        return normPhone;
    };
    LoginService.prototype.validateUserSMS = function (phone, code) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findByPhone(phone)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, 404];
                        }
                        if (user.code === code) {
                            return [2 /*return*/, user];
                        }
                        else {
                            return [2 /*return*/, 401];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginService.prototype.validateUser = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findByEmail(email)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, 404];
                        }
                        hash = (0, crypto_1.createHash)('sha256').update(password).digest('hex');
                        if (user.passwordHash === hash) {
                            return [2 /*return*/, user];
                        }
                        else {
                            return [2 /*return*/, 401];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginService.prototype.sendCode = function (_a) {
        var phone = _a.phone;
        return __awaiter(this, void 0, void 0, function () {
            var user, code;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.usersService.findByPhone(phone)];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, 404];
                        }
                        code = Math.round(Math.random() * (9999 - 0));
                        return [4 /*yield*/, this.usersService.saveUser({
                                uuid: user.uuid,
                                code: code
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, code];
                }
            });
        });
    };
    LoginService.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        access_token: this.jwtService.sign({ sub: user }),
                        role: user.role
                    }];
            });
        });
    };
    LoginService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(function () { return users_service_1.UsersService; })))
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
