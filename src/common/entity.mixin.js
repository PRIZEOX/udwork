"use strict";
exports.__esModule = true;
var EntityMixin = /** @class */ (function () {
    function EntityMixin() {
    }
    EntityMixin.varcharNullable = {
        nullable: true,
        type: 'varchar',
        "default": null,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci'
    };
    EntityMixin.textNullable = {
        nullable: true,
        type: 'text',
        "default": null,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci'
    };
    EntityMixin.charRequired100 = {
        nullable: false,
        type: 'varchar',
        length: 100,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci'
    };
    EntityMixin.charRequired256 = {
        nullable: false,
        type: 'varchar',
        length: 256,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci'
    };
    return EntityMixin;
}());
exports["default"] = EntityMixin;
