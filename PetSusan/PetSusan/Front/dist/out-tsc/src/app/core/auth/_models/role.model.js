"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var crud_1 = require("../../_base/crud");
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isCoreRole = false;
        return _this;
    }
    Role.prototype.clear = function () {
        this.id = undefined;
        this.title = '';
        this.permissions = [];
        this.isCoreRole = false;
    };
    return Role;
}(crud_1.BaseModel));
exports.Role = Role;
//# sourceMappingURL=role.model.js.map