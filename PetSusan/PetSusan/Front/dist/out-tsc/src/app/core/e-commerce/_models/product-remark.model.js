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
var ProductRemarkModel = /** @class */ (function (_super) {
    __extends(ProductRemarkModel, _super);
    function ProductRemarkModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductRemarkModel.prototype.clear = function (carId) {
        this.id = undefined;
        this.carId = carId;
        this.text = '';
        this.type = 0;
        this.dueDate = '';
        this._isEditMode = false;
    };
    return ProductRemarkModel;
}(crud_1.BaseModel));
exports.ProductRemarkModel = ProductRemarkModel;
//# sourceMappingURL=product-remark.model.js.map