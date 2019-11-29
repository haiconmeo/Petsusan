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
var product_selectors_1 = require("./../_selectors/product.selectors");
// CRUD
var crud_1 = require("../../_base/crud");
// State
var store_1 = require("@ngrx/store");
// Selectors
var product_selectors_2 = require("../_selectors/product.selectors");
var ProductsDataSource = /** @class */ (function (_super) {
    __extends(ProductsDataSource, _super);
    function ProductsDataSource(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.loading$ = _this.store.pipe(store_1.select(product_selectors_2.selectProductsPageLoading));
        _this.isPreloadTextViewed$ = _this.store.pipe(store_1.select(product_selectors_1.selectProductsInitWaitingMessage));
        _this.store.pipe(store_1.select(product_selectors_2.selectProductsInStore)).subscribe(function (response) {
            _this.paginatorTotalSubject.next(response.totalCount);
            _this.entitySubject.next(response.items);
        });
        return _this;
    }
    return ProductsDataSource;
}(crud_1.BaseDataSource));
exports.ProductsDataSource = ProductsDataSource;
//# sourceMappingURL=products.datasource.js.map