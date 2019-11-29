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
var CustomerModel = /** @class */ (function (_super) {
    __extends(CustomerModel, _super);
    function CustomerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerModel.prototype.clear = function () {
        this.dob = new Date();
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.userName = '';
        this.gender = 'Female';
        this.ipAddress = '';
        this.type = 1;
        this.status = 1;
    };
    return CustomerModel;
}(crud_1.BaseModel));
exports.CustomerModel = CustomerModel;
//# sourceMappingURL=customer.model.js.map