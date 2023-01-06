"use strict";
exports.__esModule = true;
exports.pril3 = void 0;
var pril3 = function (user, code, operator) {
    var today = new Date();
    return "\n<!DOCTYPE html>\n<html lang='ru'>\n<head>\n  <meta charset=\"utf-8\">\n  <title>PDF Result Template</title>\n  <style>\n      .main {\n          width: 460px;\n          margin: 0 auto;\n          font-size: 12px;\n          font-family: Arial;\n      }\n  </style>\n</head>\n<body>\n<div class=\"main\">\n  <table width=\"100%\" style=\"font-family: Arial;\">\n    <tr >\n      <td style=\"width: 68%; padding: 20px 0;\">\n        <div style=\"text-align: justify; font-size: 11pt;\"></div>\n      </td>\n      <td style=\"width: 32%; text-align: center; padding: 30px 0;\">\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u041E\u041E\u041E \u00AB\u0423\u0434\u043C\u0443\u0440\u0442\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438\u0306 \u00AB\u0423\u0434\u0430\u043B\u0442\u043E\u043D\u00BB</td>\n    </tr>\n  </table>\n  <br/>\n  <div style=\"font-weight: bold; font-size: 16pt; padding-left:5px; font-family: Arial;\">\n    \u0417\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430\n    \u043E \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0438 \u043A \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B</div>\n  <br/>\n  <p>\n    \u0417\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044C - \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440 (\u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E/\u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0438\u0306 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C). </br>\n    \u0418\u043D\u0432\u0435\u0441\u0442\u043E\u0440:\n  </p>\n  <table border=\"1\" width=\"100%\" cellpadding=\"2\" cellspacing=\"2\" style=\"border-collapse: collapse; width: 100%; font-family: Arial;\">\n    <tbody >\n    <tr>\n      <td>\u0418\u041D\u041D</td>\n      <td>".concat(user.orgInn ? user.orgInn : user.inn, "</td>\n    </tr>\n    <tr>\n      <td>\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438</td>\n      <td>").concat(user.orgName ? user.orgName : '', "</td>\n    </tr>\n    </tbody>\n  </table>\n  <p>\n    \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C (\u0435\u0434\u0438\u043D\u043E\u043B\u0438\u0447\u043D\u044B\u0439 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0440\u0433\u0430\u043D) \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430: </br>\n  </p>\n  <table border=\"1\" width=\"100%\" cellpadding=\"2\" cellspacing=\"2\" style=\"border-collapse: collapse; width: 100%; font-family: Arial;\">\n    <tbody >\n    <tr>\n      <td>\u0424\u0430\u043C\u0438\u043B\u0438\u044F</td>\n      <td>").concat(user.lastName, "</td>\n    </tr>\n    <tr>\n      <td>\u0418\u043C\u044F</td>\n      <td>").concat(user.firstName, "</td>\n    </tr>\n    <tr>\n      <td>\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E</td>\n      <td>").concat(user.middleName, "</td>\n    </tr>\n    <tr>\n      <td>\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F</td>\n      <td>").concat(user.dateOfBirth.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }), "</td>\n    </tr>\n    <tr>\n      <td>\u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F</td>\n      <td>").concat(user.placeOfBirth, "</td>\n    </tr>\n    <tr>\n      <td>\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438</td>\n      <td>").concat(user.address, "</td>\n    </tr>\n    <tr>\n      <td>\u0421\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430</td>\n      <td>").concat(user.passportNumber, "</td>\n    </tr>\n    <tr>\n      <td>\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D \u043F\u0430\u0441\u043F\u043E\u0440\u0442</td>\n      <td>").concat(user.passportIssuedBy, "</td>\n    </tr>\n    <tr>\n      <td>\u041A\u043E\u0434 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F, \u0432\u044B\u0434\u0430\u0432\u0448\u0435\u0433\u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442</td>\n      <td>").concat(user.passportCodeDepartment, "</td>\n    </tr>\n    <tr>\n      <td>\u041D\u043E\u043C\u0435\u0440 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</td>\n      <td>").concat(user.phone, "</td>\n    </tr>\n    </tbody>\n  </table>\n  <br />\n  <p>\u0412 \u043B\u0438\u0446\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0437\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044F,</p>\n  <ol>\n    <li>\u041F\u0440\u043E\u0448\u0443 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0432 \u0441\u0442\u0430\u0442\u0443\u0441\u0435 \u00AB\u0418\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u00BB \u043A \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435, \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u043A\u043E\u0442\u043E\u0440\u043E\u0438\u0306 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u041E\u041E\u041E \u00AB\u0423\u0434\u043C\u0443\u0440\u0442\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438\u0306 \u00AB\u0423\u0434\u0430\u043B\u0442\u043E\u043D\u00BB (\u0434\u0430\u043B\u0435\u0435 - \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440), \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D, \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u044E\u0441\u044C \u0438 \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u0430\u0432\u0438\u043B \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B (\u0434\u0430\u043B\u0435\u0435- \u043F\u0440\u0430\u0432\u0438\u043B\u0430), \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0438 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u0308\u043D\u043D\u044B\u0445 \u043D\u0430 \u0441\u0430\u0438\u0306\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0432 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u0441\u0435\u0442\u0438 \u00AB\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u00BB \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443: https://udalton.ru/, \u0432 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0438, \u0434\u0435\u0438\u0306\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0438\u0306 \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u043A \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B.</li>\n    <li>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u044F\u0432\u043B\u044F\u044E\u0441\u044C \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0430\u0431\u043E\u043D\u0435\u043D\u0442\u0441\u043A\u043E\u0433\u043E \u043D\u043E\u043C\u0435\u0440\u0430 \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043E\u0447\u0442\u044B, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u043C\u043D\u043E\u044E \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043D\u0430 \u0441\u0430\u0438\u0306\u0442\u0435 https://udalton.ru/.</li>\n    <li>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043B\u0441\u044F \u0441 \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u0435\u0438\u0306 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u043E \u0440\u0438\u0441\u043A\u0430\u0445 \u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u043D\u0430 \u0441\u0435\u0431\u044F \u0442\u0430\u043A\u0438\u0435 \u0440\u0438\u0441\u043A\u0438, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u0438 \u043E\u0441\u043E\u0437\u043D\u0430\u044E, \u0447\u0442\u043E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u043F\u043E\u0442\u0435\u0440\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438\u0306 \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435.</li>\n    <li>\u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445\u0441\u044F \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0445, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443 \u0441 \u0446\u0435\u043B\u044C\u044E \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438, \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043B\u0441\u044F \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0438\u0306 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u043F\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.</li>\n    <li>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u0432\u0441\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u044B\u0435 \u0432 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435, \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u044E\u0442\u0441\u044F \u0432 \u043F\u0440\u043E\u0441\u0442\u043E\u0438\u0306 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0438\u0306 \u0444\u043E\u0440\u043C\u0435 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u043E\u0438\u0306 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043E\u0434\u043F\u0438\u0441\u044C\u044E \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B.</li>\n    <li>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043B\u0441\u044F \u0441 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C \u043E\u0431 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0430\u043D\u0430\u043B\u043E\u0433\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0440\u0443\u0447\u043D\u043E\u0438\u0306 \u043F\u043E\u0434\u043F\u0438\u0441\u0438, \u0438 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043E\u0431 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0430\u043D\u0430\u043B\u043E\u0433\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0440\u0443\u0447\u043D\u043E\u0438\u0306 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u044B\u043C \u0432 \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443 \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u043B\u044E\u0431\u043E\u0438\u0306 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0438\u0306 \u043C\u043D\u043E\u0438\u0306 \u043F\u0440\u043E\u0441\u0442\u043E\u0438\u0306 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043E\u0434\u043F\u0438\u0441\u044C\u044E \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0438\u043C\u0435\u0435\u0442 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0441\u0438\u043B\u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430, \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0440\u0443\u0447\u043D\u043E.</li>\n    <li>\u041E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043A\u043B\u044E\u0447\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043B\u0438\u0446\u0430, \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0438\u0306 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442.</li>\n    <li>\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043E \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0438 \u043A \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043E\u0434\u043F\u0438\u0441\u044C\u044E, \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043E \u0441\u0442. 6 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430 \u00AB\u041E\u0431 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0438\u0306 \u043F\u043E\u0434\u043F\u0438\u0441\u0438\u00BB \u043F\u0440\u0438\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0443, \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u043E\u043C\u0443 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0440\u0443\u0447\u043D\u043E\u0438\u0306 \u043F\u043E\u0434\u043F\u0438\u0441\u044C\u044E, \u0438 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u0432 \u043B\u044E\u0431\u044B\u0445 \u043F\u0440\u0430\u0432\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0438\u0306\u0441\u043A\u043E\u0438\u0306 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0438\u0306.</li>\n  </ol>\n  <br />\n  <p>\u0417\u0410\u042F\u0412\u041B\u0415\u041D\u0418\u0415 \u041F\u041E\u0414\u041F\u0418\u0421\u0410\u041D\u041E \u041F\u0420\u041E\u0421\u0422\u041E\u0418\u0306 \u042D\u041B\u0415\u041A\u0422\u0420\u041E\u041D\u041D\u041E\u0418\u0306 \u041F\u041E\u0414\u041F\u0418\u0421\u042C\u042E (SMS)</p>\n  <table border=\"1\" width=\"100%\" cellpadding=\"2\" cellspacing=\"2\" style=\"border-collapse: collapse; width: 100%; font-family: Arial;\">\n    <tbody >\n    <tr>\n      <td>ID \u043B\u0438\u0446\u0430</td>\n      <td>").concat(user.uuid, "</td>\n    </tr>\n    <tr>\n      <td>\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</td>\n      <td>").concat(user.phone, "</td>\n    </tr>\n    <tr>\n      <td>SMS-\u043A\u043E\u0434</td>\n      <td>").concat(code, "</td>\n    </tr>\n    <tr>\n      <td>\u0414\u0410\u0422\u0410 \u0438 \u0412\u0420\u0415\u041C\u042F</td>\n      <td>").concat(today.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }), "</td>\n    </tr>\n    <tr>\n      <td>\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430</td>\n      <td>").concat(operator.operator, ", ").concat(operator.region, "</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n\n</body>\n</html>\n    ");
};
exports.pril3 = pril3;
