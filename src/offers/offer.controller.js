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
exports.OfferController = void 0;
var common_1 = require("@nestjs/common");
var crud_1 = require("@nestjsx/crud");
var offer_entity_1 = require("./offer.entity");
var swagger_1 = require("@nestjs/swagger");
var offer_create_dto_1 = require("./offer.create.dto");
var offer_update_dto_1 = require("./offer.update.dto");
var offer_dto_1 = require("./offer.dto");
var offer_getmany_dto_1 = require("./offer.getmany.dto");
var offer_status_1 = require("../enums/offer.status");
var jwt_guard_1 = require("../auth/guards/jwt.guard");
var OfferController = /** @class */ (function () {
    function OfferController(service) {
        this.service = service;
    }
    Object.defineProperty(OfferController.prototype, "base", {
        get: function () {
            return this;
        },
        enumerable: false,
        configurable: true
    });
    OfferController.prototype.createOne = function (req, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var newOffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.base.createOneBase(req, dto)];
                    case 1:
                        newOffer = _a.sent();
                        if (!dto.publicImages) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.savePublicPictures(newOffer.uuid, dto.publicImages)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!dto.privateImages) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.service.savePrivatePictures(newOffer.uuid, dto.privateImages)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, newOffer];
                }
            });
        });
    };
    OfferController.prototype.updateOne = function (req, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var offerUuid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        offerUuid = req.parsed.paramsFilter[0].value;
                        if (!(dto.status === offer_status_1.OfferStatus.REVOKED_LENDER ||
                            dto.status === offer_status_1.OfferStatus.REVOKED_TIME)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.cancelOffer(offerUuid)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!dto.publicImages) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.service.savePublicPictures(offerUuid, dto.publicImages)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!dto.privateImages) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.service.savePrivatePictures(offerUuid, dto.privateImages)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, this.base.updateOneBase(req, dto)];
                }
            });
        });
    };
    // @UseRoles({
    //   resource: 'jobs',
    //   action: 'delete',
    // })
    OfferController.prototype.deleteOne = function (req) {
        return this.service.deleteOffer(req.parsed.paramsFilter[0].value);
    };
    __decorate([
        (0, crud_1.Override)(),
        __param(0, (0, crud_1.ParsedRequest)()),
        __param(1, (0, crud_1.ParsedBody)())
    ], OfferController.prototype, "createOne");
    __decorate([
        (0, crud_1.Override)(),
        __param(0, (0, crud_1.ParsedRequest)()),
        __param(1, (0, crud_1.ParsedBody)())
    ], OfferController.prototype, "updateOne");
    __decorate([
        (0, crud_1.Override)(),
        __param(0, (0, crud_1.ParsedRequest)())
    ], OfferController.prototype, "deleteOne");
    OfferController = __decorate([
        (0, swagger_1.ApiTags)('Инвестиционные предложения'),
        (0, swagger_1.ApiBearerAuth)(),
        (0, crud_1.Crud)({
            model: {
                type: offer_entity_1.Offer
            },
            dto: {
                create: offer_create_dto_1.OfferCreateDto,
                update: offer_update_dto_1.OfferUpdateDto
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
                    lender: {
                        eager: true
                    },
                    agreement: {
                        eager: true
                    },
                    investments: {
                        eager: true
                    },
                    payments: {
                        eager: true
                    },
                    publicPictures: {
                        eager: true
                    },
                    privatePictures: {
                        eager: true
                    },
                    'investments.investor': {
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
                getMany: offer_getmany_dto_1.OfferGetmanyDto,
                create: offer_dto_1.OfferDto,
                update: offer_dto_1.OfferDto,
                get: offer_dto_1.OfferDto
            }
        }),
        (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
        (0, common_1.Controller)('/api/v1/offers')
    ], OfferController);
    return OfferController;
}());
exports.OfferController = OfferController;
