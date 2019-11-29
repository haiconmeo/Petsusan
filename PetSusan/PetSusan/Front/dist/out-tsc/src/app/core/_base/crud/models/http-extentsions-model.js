"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_results_model_1 = require("./query-models/query-results.model");
var HttpExtenstionsModel = /** @class */ (function () {
    function HttpExtenstionsModel() {
    }
    /**
     * Filtration with sorting
     * First do Sort then filter
     *
     * @param _entities: any[]
     * @param _queryParams: QueryParamsModel
     * @param _filtrationFields: string[]
     */
    HttpExtenstionsModel.prototype.baseFilter = function (_entities, _queryParams, _filtrationFields) {
        if (_filtrationFields === void 0) { _filtrationFields = []; }
        // Filtration
        var entitiesResult = this.searchInArray(_entities, _queryParams.filter, _filtrationFields);
        // Sorting
        // start
        if (_queryParams.sortField) {
            entitiesResult = this.sortArray(entitiesResult, _queryParams.sortField, _queryParams.sortOrder);
        }
        // end
        // Paginator
        // start
        var totalCount = entitiesResult.length;
        var initialPos = _queryParams.pageNumber * _queryParams.pageSize;
        entitiesResult = entitiesResult.slice(initialPos, initialPos + _queryParams.pageSize);
        // end
        var queryResults = new query_results_model_1.QueryResultsModel();
        queryResults.items = entitiesResult;
        queryResults.totalCount = totalCount;
        return queryResults;
    };
    /**
     * Sort array by field name and order-type
     * @param _incomingArray: any[]
     * @param _sortField: string
     * @param _sortOrder: string
     */
    HttpExtenstionsModel.prototype.sortArray = function (_incomingArray, _sortField, _sortOrder) {
        if (_sortField === void 0) { _sortField = ''; }
        if (_sortOrder === void 0) { _sortOrder = 'asc'; }
        if (!_sortField) {
            return _incomingArray;
        }
        var result = [];
        result = _incomingArray.sort(function (a, b) {
            if (a[_sortField] < b[_sortField]) {
                return _sortOrder === 'asc' ? -1 : 1;
            }
            if (a[_sortField] > b[_sortField]) {
                return _sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return result;
    };
    /**
     * Filter array by some fields
     *
     * @param _incomingArray: any[]
     * @param _queryObj: any
     * @param _filtrationFields: string[]
     */
    HttpExtenstionsModel.prototype.searchInArray = function (_incomingArray, _queryObj, _filtrationFields) {
        if (_filtrationFields === void 0) { _filtrationFields = []; }
        var result = [];
        var resultBuffer = [];
        var indexes = [];
        var firstIndexes = [];
        var doSearch = false;
        _filtrationFields.forEach(function (item) {
            if (item in _queryObj) {
                _incomingArray.forEach(function (element, index) {
                    if (element[item] === _queryObj[item]) {
                        firstIndexes.push(index);
                    }
                });
                firstIndexes.forEach(function (element) {
                    resultBuffer.push(_incomingArray[element]);
                });
                _incomingArray = resultBuffer.slice(0);
                resultBuffer = [].slice(0);
                firstIndexes = [].slice(0);
            }
        });
        Object.keys(_queryObj).forEach(function (key) {
            var searchText = _queryObj[key].toString().trim().toLowerCase();
            if (key && !_filtrationFields.some(function (e) { return e === key; }) && searchText) {
                doSearch = true;
                try {
                    _incomingArray.forEach(function (element, index) {
                        if (element[key]) {
                            var _val = element[key].toString().trim().toLowerCase();
                            if (_val.indexOf(searchText) > -1 && indexes.indexOf(index) === -1) {
                                indexes.push(index);
                            }
                        }
                    });
                }
                catch (ex) {
                    console.log(ex, key, searchText);
                }
            }
        });
        if (!doSearch) {
            return _incomingArray;
        }
        indexes.forEach(function (re) {
            result.push(_incomingArray[re]);
        });
        return result;
    };
    return HttpExtenstionsModel;
}());
exports.HttpExtenstionsModel = HttpExtenstionsModel;
//# sourceMappingURL=http-extentsions-model.js.map