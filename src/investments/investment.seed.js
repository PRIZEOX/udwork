"use strict";
exports.__esModule = true;
exports.investmentSeed = void 0;
var operation_type_1 = require("../enums/operation.type");
exports.investmentSeed = [
    {
        sum: 0,
        type: operation_type_1.OperationType.APPROVE_ID
    },
    {
        sum: 0,
        type: operation_type_1.OperationType.APPROVE_OFFER
    },
    {
        sum: 1000000,
        type: operation_type_1.OperationType.DEPOSIT
    },
    {
        sum: 0,
        type: operation_type_1.OperationType.INVOKE_OFFER
    },
    {
        sum: 0,
        type: operation_type_1.OperationType.REVOKE_AFTER
    },
    {
        sum: 3000,
        type: operation_type_1.OperationType.REWARD_PAYMENT
    },
    {
        sum: 499,
        type: operation_type_1.OperationType.GUARANTEE_PAYMENT
    },
    {
        sum: 100000,
        type: operation_type_1.OperationType.RESERVE
    },
];
