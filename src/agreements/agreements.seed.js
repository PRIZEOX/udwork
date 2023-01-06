"use strict";
exports.__esModule = true;
exports.agreementsSeed = void 0;
var agreement_type_1 = require("../enums/agreement.type");
exports.agreementsSeed = [
    {
        number: 'УД-2022-1',
        date: new Date(),
        type: agreement_type_1.AgreementType.APPLY_INVESTOR_FL
    },
    {
        number: 'УД-2022-2',
        date: new Date(),
        type: agreement_type_1.AgreementType.APPLY_INVESTOR_UL
    },
    {
        number: 'УД-2022-3',
        date: new Date(),
        type: agreement_type_1.AgreementType.APPLY_LENDER
    },
    {
        number: 'УД-2022-4',
        date: new Date(),
        type: agreement_type_1.AgreementType.INVESTOR_CLAIM
    },
    {
        number: 'УД-2022-5',
        date: new Date(),
        type: agreement_type_1.AgreementType.LENDER_OFERTA
    },
];
