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
// NGRX
var store_1 = require("@ngrx/store");
// CRUD
var crud_1 = require("../../_base/crud");
var customer_selectors_1 = require("../_selectors/customer.selectors");
var CustomersDataSource = /** @class */ (function (_super) {
    __extends(CustomersDataSource, _super);
    function CustomersDataSource(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.loading$ = _this.store.pipe(store_1.select(customer_selectors_1.selectCustomersPageLoading));
        _this.isPreloadTextViewed$ = _this.store.pipe(store_1.select(customer_selectors_1.selectCustomersShowInitWaitingMessage));
        _this.store.pipe(store_1.select(customer_selectors_1.selectCustomersInStore)).subscribe(function (response) {
            _this.paginatorTotalSubject.next(response.totalCount);
            _this.entitySubject.next(response.items);
        });
        return _this;
    }
    return CustomersDataSource;
}(crud_1.BaseDataSource));
exports.CustomersDataSource = CustomersDataSource;
//# sourceMappingURL=customers.datasource.js.map