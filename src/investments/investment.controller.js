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
exports.InvestmentController = void 0;
var common_1 = require("@nestjs/common");
var crud_1 = require("@nestjsx/crud");
var investment_entity_1 = require("./investment.entity");
var swagger_1 = require("@nestjs/swagger");
var investment_create_dto_1 = require("./investment.create.dto");
var investment_update_dto_1 = require("./investment.update.dto");
var investment_dto_1 = require("./investment.dto");
var invesment_getmany_dto_1 = require("./invesment.getmany.dto");
var jwt_guard_1 = require("../auth/guards/jwt.guard");
var InvestmentController = /** @class */ (function () {
    function InvestmentController(service) {
        this.service = service;
    }
    Object.defineProperty(InvestmentController.prototype, "base", {
        get: function () {
            return this;
        },
        enumerable: false,
        configurable: true
    });
    // @UseRoles({
    //   resource: 'jobs',
    //   action: 'create',
    // })
    InvestmentController.prototype.createOne = function (req, dto) {
        return this.base.createOneBase(req, dto);
    };
    InvestmentController.prototype.updateOne = function (req, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var investmentUuid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        investmentUuid = req.parsed.paramsFilter[0].value;
                        return [4 /*yield*/, this.service.cancelInvestment(investmentUuid)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.base.updateOneBase(req, dto)];
                }
            });
        });
    };
    // @UseRoles({
    //   resource: 'jobs',
    //   action: 'delete',
    // })
    InvestmentController.prototype.deleteOne = function (req) {
        return this.base.deleteOneBase(req);
    };
    __decorate([
        (0, crud_1.Override)(),
        __param(0, (0, crud_1.ParsedRequest)()),
        __param(1, (0, crud_1.ParsedBody)())
    ], InvestmentController.prototype, "createOne");
    __decorate([
        (0, crud_1.Override)(),
        __param(0, (0, crud_1.ParsedRequest)()),
        __param(1, (0, crud_1.ParsedBody)())
    ], InvestmentController.prototype, "updateOne");
    __decorate([
        (0, crud_1.Override)(),
        __param(0, (0, crud_1.ParsedRequest)())
    ], InvestmentController.prototype, "deleteOne");
    InvestmentController = __decorate([
        (0, swagger_1.ApiTags)('Операции системы'),
        (0, swagger_1.ApiBearerAuth)(),
        (0, crud_1.Crud)({
            model: {
                type: investment_entity_1.Investment
            },
            dto: {
                create: investment_create_dto_1.InvestmentCreateDto,
                update: investment_update_dto_1.InvestmentUpdateDto
            },
            params: {
                id: {
                    field: 'uuid',
                    type: 'number',
                    primary: true
                }
            },
            query: {
                alwaysPaginate: true,
                join: {
                    investor: {
                        eager: true
                    },
                    offer: {
                        eager: true
                    }
                },
                sort: [
                    {
                        field: 'uuid',
                        order: 'DESC'
                    },
                ]
            },
            serialize: {
                getMany: invesment_getmany_dto_1.InvesmentGetmanyDto,
                create: investment_dto_1.InvestmentDto,
                update: investment_dto_1.InvestmentDto,
                get: investment_dto_1.InvestmentDto
            }
        }),
        (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
        (0, common_1.Controller)('/api/v1/investments')
    ], InvestmentController);
    return InvestmentController;
}());
exports.InvestmentController = InvestmentController;
