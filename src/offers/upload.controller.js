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
exports.UploadOfferController = void 0;
var common_1 = require("@nestjs/common");
var jwt_guard_1 = require("../auth/guards/jwt.guard");
var swagger_1 = require("@nestjs/swagger");
var platform_express_1 = require("@nestjs/platform-express");
var multer_1 = require("multer");
var crypto_1 = require("crypto");
var logger = new common_1.Logger('AgreementsService');
var UploadOfferController = /** @class */ (function () {
    function UploadOfferController(offersService, picturesService) {
        this.offersService = offersService;
        this.picturesService = picturesService;
    }
    UploadOfferController.prototype.uploadFile = function (file, req) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = file.filename;
                        switch (_a) {
                            case '406': return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 2];
                    case 1: throw new common_1.HttpException("We can't accept this photo. Please try again or choose another file.", 406);
                    case 2: return [4 /*yield*/, this.offersService.savePublicPicture(req.user.sub, file)];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    __decorate([
        (0, common_1.Post)('api/v1/offer/media/upload'),
        (0, swagger_1.ApiTags)('Users'),
        (0, swagger_1.ApiOperation)({
            description: 'Upload user avatar. Creates 3 resized images for a user. Returns user object populated with the images paths'
        }),
        (0, swagger_1.ApiBearerAuth)(),
        (0, swagger_1.ApiResponse)({
            status: 201,
            description: 'File uploaded'
        }),
        (0, swagger_1.ApiResponse)({
            status: 401,
            description: 'Unauthorized, access denied'
        }),
        (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
        (0, swagger_1.ApiConsumes)('multipart/form-data'),
        (0, swagger_1.ApiBody)({
            schema: {
                type: 'object',
                properties: {
                    publicFile: {
                        type: 'string',
                        format: 'binary'
                    }
                }
            }
        }),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('publicFile', {
            storage: (0, multer_1.diskStorage)({
                destination: 'static/upload/public',
                filename: function (req, file, cb) {
                    var fileSize = parseInt(req.headers['content-length']);
                    // @ts-ignore
                    var user = req.user.sub;
                    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
                    var extension = file.originalname.split('.').pop();
                    var hash = (0, crypto_1.createHash)('sha256')
                        .update(file.originalname)
                        .digest('hex');
                    var filename = user.uuid + '-' + hash + '.' + extension;
                    logger.log(file);
                    if ((file.mimetype === 'image/png' ||
                        file.mimetype === 'image/svg+xml' ||
                        file.mimetype === 'image/jpg' ||
                        file.mimetype === 'image/jpeg' ||
                        file.mimetype === 'application/octet-stream') &&
                        fileSize <= 15282810) {
                        cb(null, filename);
                    }
                    else {
                        cb(null, '406');
                    }
                }
            })
        })),
        __param(0, (0, common_1.UploadedFile)()),
        __param(1, (0, common_1.Req)())
    ], UploadOfferController.prototype, "uploadFile");
    UploadOfferController = __decorate([
        (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
        (0, common_1.Controller)()
    ], UploadOfferController);
    return UploadOfferController;
}());
exports.UploadOfferController = UploadOfferController;
