"use strict";
exports.__esModule = true;
exports.OperationType = void 0;
var OperationType;
(function (OperationType) {
    OperationType["INVEST"] = "\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435";
    OperationType["RESERVE"] = "\u0421\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u044B";
    OperationType["DEPOSIT"] = "\u0412\u043D\u0435\u0441\u0435\u043D \u0434\u0435\u043F\u043E\u0437\u0438\u0442";
    OperationType["RETURN_INVEST"] = "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E";
    OperationType["RETURN_RESERVE"] = "\u0420\u0435\u0437\u0435\u0440\u0432 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D";
    OperationType["WITHDRAW"] = "\u0421\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0432\u044B\u0432\u0435\u0434\u0435\u043D\u044B";
    OperationType["DECLINE_OFFER"] = "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043E";
    OperationType["APPROVE_OFFER"] = "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u043E";
    OperationType["DECLINE_ID"] = "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0430";
    OperationType["APPROVE_ID"] = "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0430";
    OperationType["INVOKE_OFFER"] = "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E";
    OperationType["REVOKE_BEFORE"] = "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E\u0442\u043E\u0437\u0432\u0430\u043D\u043E \u0434\u043E\u0441\u0440\u043E\u0447\u043D\u043E";
    OperationType["REVOKE_AFTER"] = "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E\u0442\u043E\u0437\u0432\u0430\u043D\u043E";
    OperationType["GUARANTEE_PAYMENT"] = "\u0412\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0438\u0306 \u043F\u043B\u0430\u0442\u0435\u0436";
    OperationType["REWARD_PAYMENT"] = "\u0412\u044B\u043F\u043B\u0430\u0442\u0430 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
