"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJS
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// CRUD
var crud_1 = require("../../../../../../core/_base/crud");
// Why not use MatTableDataSource?
/*  In this example, we will not be using the built-in MatTableDataSource because its designed for filtering,
    sorting and pagination of a client - side data array.
    Read the article: 'https://blog.angular-university.io/angular-material-data-table/'
**/
var DataTableDataSource = /** @class */ (function () {
    /**
     * Data-Source Constructor
     *
     * @param dataTableService: DataTableService
     */
    function DataTableDataSource(dataTableService) {
        var _this = this;
        this.dataTableService = dataTableService;
        // Public properties
        this.entitySubject = new rxjs_1.BehaviorSubject([]);
        this.hasItems = false; // Need to show message: 'No records found
        // Loading | Progress bar
        this.loadingSubject = new rxjs_1.BehaviorSubject(false);
        // Paginator | Paginators count
        this.paginatorTotalSubject = new rxjs_1.BehaviorSubject(0);
        this.loading$ = this.loadingSubject.asObservable();
        this.paginatorTotal$ = this.paginatorTotalSubject.asObservable();
        this.paginatorTotal$.subscribe(function (res) { return _this.hasItems = res > 0; });
    }
    /**
     * Connect data-source
     *
     * @param collectionViewer: CollectionViewer
     */
    DataTableDataSource.prototype.connect = function (collectionViewer) {
        // Connecting data source
        return this.entitySubject.asObservable();
    };
    /**
     * Disconnect data-source
     *
     * @param collectionViewer: CollectionViewer
     */
    DataTableDataSource.prototype.disconnect = function (collectionViewer) {
        // Disonnecting data source
        this.entitySubject.complete();
        this.loadingSubject.complete();
        this.paginatorTotalSubject.complete();
    };
    DataTableDataSource.prototype.baseFilter = function (_entities, _queryParams) {
        var entitiesResult = _entities;
        // Sorting
        // start
        if (_queryParams.sortField) {
            entitiesResult = this.sortArray(_entities, _queryParams.sortField, _queryParams.sortOrder);
        }
        // end
        // Paginator
        // start
        var totalCount = entitiesResult.length;
        var initialPos = _queryParams.pageNumber * _queryParams.pageSize;
        entitiesResult = entitiesResult.slice(initialPos, initialPos + _queryParams.pageSize);
        // end
        var queryResults = new crud_1.QueryResultsModel();
        queryResults.items = entitiesResult;
        queryResults.totalCount = totalCount;
        return queryResults;
    };
    DataTableDataSource.prototype.loadItems = function (queryParams) {
        var _this = this;
        this.loadingSubject.next(true);
        this.dataTableService.getAllItems().pipe(operators_1.tap(function (res) {
            var result = _this.baseFilter(res, queryParams);
            _this.entitySubject.next(result.items);
            _this.paginatorTotalSubject.next(result.totalCount);
        }), operators_1.catchError(function (err) { return rxjs_1.of(new crud_1.QueryResultsModel([], err)); }), operators_1.finalize(function () { return _this.loadingSubject.next(false); })).subscribe();
    };
    DataTableDataSource.prototype.sortArray = function (_incomingArray, _sortField, _sortOrder) {
        if (_sortField === void 0) { _sortField = ''; }
        if (_sortOrder === void 0) { _sortOrder = 'asc'; }
        var httpExtenstion = new crud_1.HttpExtenstionsModel();
        return httpExtenstion.sortArray(_incomingArray, _sortField, _sortOrder);
    };
    return DataTableDataSource;
}());
exports.DataTableDataSource = DataTableDataSource;
//# sourceMappingURL=data-table.data-source.js.map