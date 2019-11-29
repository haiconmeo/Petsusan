"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJS
var rxjs_1 = require("rxjs");
// CRUD
var http_extentsions_model_1 = require("./http-extentsions-model");
var operators_1 = require("rxjs/operators");
// Why not use MatTableDataSource?
/*  In this example, we will not be using the built-in MatTableDataSource because its designed for filtering,
    sorting and pagination of a client - side data array.
    Read the article: 'https://blog.angular-university.io/angular-material-data-table/'
**/
var BaseDataSource = /** @class */ (function () {
    function BaseDataSource() {
        var _this = this;
        this.entitySubject = new rxjs_1.BehaviorSubject([]);
        this.hasItems = true; // Need to show message: 'No records found'
        this.isPreloadTextViewed$ = rxjs_1.of(true);
        // Paginator | Paginators count
        this.paginatorTotalSubject = new rxjs_1.BehaviorSubject(0);
        this.subscriptions = [];
        this.paginatorTotal$ = this.paginatorTotalSubject.asObservable();
        // subscribe hasItems to (entitySubject.length==0)
        var hasItemsSubscription = this.paginatorTotal$.pipe(operators_1.distinctUntilChanged(), operators_1.skip(1)).subscribe(function (res) { return _this.hasItems = res > 0; });
        this.subscriptions.push(hasItemsSubscription);
    }
    BaseDataSource.prototype.connect = function (collectionViewer) {
        // Connecting data source
        return this.entitySubject.asObservable();
    };
    BaseDataSource.prototype.disconnect = function (collectionViewer) {
        // Disonnecting data source
        this.entitySubject.complete();
        this.paginatorTotalSubject.complete();
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    BaseDataSource.prototype.baseFilter = function (_entities, _queryParams, _filtrationFields) {
        if (_filtrationFields === void 0) { _filtrationFields = []; }
        var httpExtention = new http_extentsions_model_1.HttpExtenstionsModel();
        return httpExtention.baseFilter(_entities, _queryParams, _filtrationFields);
    };
    BaseDataSource.prototype.sortArray = function (_incomingArray, _sortField, _sortOrder) {
        if (_sortField === void 0) { _sortField = ''; }
        if (_sortOrder === void 0) { _sortOrder = 'asc'; }
        var httpExtention = new http_extentsions_model_1.HttpExtenstionsModel();
        return httpExtention.sortArray(_incomingArray, _sortField, _sortOrder);
    };
    BaseDataSource.prototype.searchInArray = function (_incomingArray, _queryObj, _filtrationFields) {
        if (_filtrationFields === void 0) { _filtrationFields = []; }
        var httpExtention = new http_extentsions_model_1.HttpExtenstionsModel();
        return httpExtention.searchInArray(_incomingArray, _queryObj, _filtrationFields);
    };
    return BaseDataSource;
}());
exports.BaseDataSource = BaseDataSource;
//# sourceMappingURL=_base.datasource.js.map