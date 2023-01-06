"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Message = void 0;
var typeorm_1 = require("typeorm");
var swagger_1 = require("@nestjs/swagger");
var user_entity_1 = require("../users/user.entity");
var message_status_1 = require("../enums/message.status");
var entity_mixin_1 = require("../common/entity.mixin");
var Message = /** @class */ (function () {
    function Message() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Message.prototype, "uuid");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": message_status_1.MessageStatus,
            "default": message_status_1.MessageStatus.UNREAD,
            charset: 'utf8mb4',
            collation: 'utf8mb4_unicode_ci'
        })
    ], Message.prototype, "status");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return user_entity_1.User; } }),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.messages; })
    ], Message.prototype, "user");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Message.prototype, "createdAt");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Message.prototype, "topic");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, typeorm_1.Column)(entity_mixin_1["default"].textNullable)
    ], Message.prototype, "text");
    Message = __decorate([
        (0, typeorm_1.Entity)()
    ], Message);
    return Message;
}());
exports.Message = Message;
