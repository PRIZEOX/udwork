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
exports.__esModule = true;
exports.UsController = exports.LetterController = exports.TempController = exports.FAQController = exports.LenderController = exports.DocumentsController = exports.InvestorController = exports.AboutController = void 0;
var common_1 = require("@nestjs/common");
var AboutController = /** @class */ (function () {
    function AboutController() {
    }
    AboutController.prototype.root = function (req, res) {
        var _a;
        if (((_a = req.headers['user-agent']) === null || _a === void 0 ? void 0 : _a.indexOf('MSIE')) >= 0) {
            res.render('msie');
        }
        return { about: 'text-primary' };
    };
    __decorate([
        (0, common_1.Get)(['/', '/about']),
        (0, common_1.Render)('about'),
        __param(0, (0, common_1.Request)()),
        __param(1, (0, common_1.Res)())
    ], AboutController.prototype, "root");
    AboutController = __decorate([
        (0, common_1.Controller)()
    ], AboutController);
    return AboutController;
}());
exports.AboutController = AboutController;
var InvestorController = /** @class */ (function () {
    function InvestorController() {
    }
    InvestorController.prototype.root = function (req, res) {
        var _a;
        if (((_a = req.headers['user-agent']) === null || _a === void 0 ? void 0 : _a.indexOf('MSIE')) >= 0) {
            res.render('msie');
        }
        return { investor: 'text-primary' };
    };
    __decorate([
        (0, common_1.Get)('/investor'),
        (0, common_1.Render)('investor'),
        __param(0, (0, common_1.Request)()),
        __param(1, (0, common_1.Res)())
    ], InvestorController.prototype, "root");
    InvestorController = __decorate([
        (0, common_1.Controller)()
    ], InvestorController);
    return InvestorController;
}());
exports.InvestorController = InvestorController;
var DocumentsController = /** @class */ (function () {
    function DocumentsController() {
    }
    DocumentsController.prototype.root = function (req, res) {
        var _a;
        if (((_a = req.headers['user-agent']) === null || _a === void 0 ? void 0 : _a.indexOf('MSIE')) >= 0) {
            res.render('msie');
        }
        return { docs: 'text-primary' };
    };
    __decorate([
        (0, common_1.Get)('/docs'),
        (0, common_1.Render)('documents'),
        __param(0, (0, common_1.Request)()),
        __param(1, (0, common_1.Res)())
    ], DocumentsController.prototype, "root");
    DocumentsController = __decorate([
        (0, common_1.Controller)()
    ], DocumentsController);
    return DocumentsController;
}());
exports.DocumentsController = DocumentsController;
var LenderController = /** @class */ (function () {
    function LenderController() {
    }
    LenderController.prototype.root = function (req, res) {
        var _a;
        if (((_a = req.headers['user-agent']) === null || _a === void 0 ? void 0 : _a.indexOf('MSIE')) >= 0) {
            res.render('msie');
        }
        return { lender: 'text-primary' };
    };
    __decorate([
        (0, common_1.Get)('/lender'),
        (0, common_1.Render)('lender'),
        __param(0, (0, common_1.Request)()),
        __param(1, (0, common_1.Res)())
    ], LenderController.prototype, "root");
    LenderController = __decorate([
        (0, common_1.Controller)()
    ], LenderController);
    return LenderController;
}());
exports.LenderController = LenderController;
var FAQController = /** @class */ (function () {
    function FAQController() {
    }
    FAQController.prototype.root = function (req, res) {
        var _a;
        if (((_a = req.headers['user-agent']) === null || _a === void 0 ? void 0 : _a.indexOf('MSIE')) >= 0) {
            res.render('msie');
        }
        return { faq: 'text-primary' };
    };
    __decorate([
        (0, common_1.Get)('/faq'),
        (0, common_1.Render)('faq'),
        __param(0, (0, common_1.Request)()),
        __param(1, (0, common_1.Res)())
    ], FAQController.prototype, "root");
    FAQController = __decorate([
        (0, common_1.Controller)()
    ], FAQController);
    return FAQController;
}());
exports.FAQController = FAQController;
var TempController = /** @class */ (function () {
    function TempController() {
    }
    TempController.prototype.root = function () {
        return {};
    };
    __decorate([
        (0, common_1.Get)('/msie'),
        (0, common_1.Render)('msie')
    ], TempController.prototype, "root");
    TempController = __decorate([
        (0, common_1.Controller)()
    ], TempController);
    return TempController;
}());
exports.TempController = TempController;
var LetterController = /** @class */ (function () {
    function LetterController() {
    }
    LetterController.prototype.root = function () {
        return {};
    };
    __decorate([
        (0, common_1.Get)('/letter'),
        (0, common_1.Render)('letter')
    ], LetterController.prototype, "root");
    LetterController = __decorate([
        (0, common_1.Controller)()
    ], LetterController);
    return LetterController;
}());
exports.LetterController = LetterController;
var UsController = /** @class */ (function () {
    function UsController() {
    }
    UsController.prototype.root = function () {
        return { us: 'text-primary' };
    };
    __decorate([
        (0, common_1.Get)('/us'),
        (0, common_1.Render)('us')
    ], UsController.prototype, "root");
    UsController = __decorate([
        (0, common_1.Controller)()
    ], UsController);
    return UsController;
}());
exports.UsController = UsController;
