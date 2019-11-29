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
// RxJS
var operators_1 = require("rxjs/operators");
// NGRX
var store_1 = require("@ngrx/store");
// CRUD
var crud_1 = require("../../_base/crud");
var product_remark_selectors_1 = require("../_selectors/product-remark.selectors");
var ProductRemarksDataSource = /** @class */ (function (_super) {
    __extends(ProductRemarksDataSource, _super);
    function ProductRemarksDataSource(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.store.pipe(store_1.select(product_remark_selectors_1.selectProductRemarksInStore), operators_1.debounceTime(600)).subscribe(function (response) {
            _this.entitySubject.next(response.items);
            _this.paginatorTotalSubject.next(response.totalCount);
        });
        _this.isPreloadTextViewed$ = _this.store.pipe(store_1.select(product_remark_selectors_1.selectPRShowInitWaitingMessage));
        _this.loading$ = _this.store.pipe(store_1.select(product_remark_selectors_1.selectProductRemarksPageLoading));
        return _this;
    }
    return ProductRemarksDataSource;
}(crud_1.BaseDataSource));
exports.ProductRemarksDataSource = ProductRemarksDataSource;
//# sourceMappingURL=product-remarks.datasource.js.map