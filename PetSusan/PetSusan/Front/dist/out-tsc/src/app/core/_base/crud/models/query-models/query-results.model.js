"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryResultsModel = /** @class */ (function () {
    function QueryResultsModel(_items, _totalCount, _errorMessage) {
        if (_items === void 0) { _items = []; }
        if (_totalCount === void 0) { _totalCount = 0; }
        if (_errorMessage === void 0) { _errorMessage = ''; }
        this.items = _items;
        this.totalCount = _totalCount;
    }
    return QueryResultsModel;
}());
exports.QueryResultsModel = QueryResultsModel;
//# sourceMappingURL=query-results.model.js.map