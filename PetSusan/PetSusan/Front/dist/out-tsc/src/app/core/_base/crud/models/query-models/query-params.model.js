"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryParamsModel = /** @class */ (function () {
    // constructor overrides
    function QueryParamsModel(_filter, _sortOrder, _sortField, _pageNumber, _pageSize) {
        if (_sortOrder === void 0) { _sortOrder = 'asc'; }
        if (_sortField === void 0) { _sortField = ''; }
        if (_pageNumber === void 0) { _pageNumber = 0; }
        if (_pageSize === void 0) { _pageSize = 10; }
        this.filter = _filter;
        this.sortOrder = _sortOrder;
        this.sortField = _sortField;
        this.pageNumber = _pageNumber;
        this.pageSize = _pageSize;
    }
    return QueryParamsModel;
}());
exports.QueryParamsModel = QueryParamsModel;
//# sourceMappingURL=query-params.model.js.map