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
var ProductModel = /** @class */ (function (_super) {
    __extends(ProductModel, _super);
    function ProductModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductModel.prototype.clear = function () {
        this.model = '';
        this.manufacture = '';
        this.modelYear = 2000;
        this.mileage = 0;
        this.description = '';
        this.color = 'Black';
        this.price = 1000;
        this.condition = 0;
        this.status = 0;
        this.VINCode = '';
    };
    return ProductModel;
}(crud_1.BaseModel));
exports.ProductModel = ProductModel;
//# sourceMappingURL=product.model.js.map