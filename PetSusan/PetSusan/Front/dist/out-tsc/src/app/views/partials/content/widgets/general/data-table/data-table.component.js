"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var material_1 = require("@angular/material");
// RXJS
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// Crud
var crud_1 = require("../../../../../../core/_base/crud");
// Layout
var layout_1 = require("../../../../../../core/_base/layout");
var data_table_data_source_1 = require("./data-table.data-source");
var DataTableComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dataTableService: DataTableService
     */
    function DataTableComponent(dataTableService) {
        this.dataTableService = dataTableService;
        this.displayedColumns = ['id', 'cManufacture', 'cModel', 'cMileage', 'cColor', 'cPrice', 'cCondition', 'cStatus', 'actions'];
        this.selection = new collections_1.SelectionModel(true, []);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        rxjs_1.merge(this.sort.sortChange, this.paginator.page)
            .pipe(operators_1.tap(function () {
            _this.loadItems();
        }))
            .subscribe();
        // Init DataSource
        this.dataSource = new data_table_data_source_1.DataTableDataSource(this.dataTableService);
        // First load
        this.loadItems(true);
    };
    /**
     * Load items
     *
     * @param firstLoad: boolean
     */
    DataTableComponent.prototype.loadItems = function (firstLoad) {
        if (firstLoad === void 0) { firstLoad = false; }
        var queryParams = new crud_1.QueryParamsModel({}, this.sort.direction, this.sort.active, this.paginator.pageIndex, firstLoad ? 6 : this.paginator.pageSize);
        this.dataSource.loadItems(queryParams);
        this.selection.clear();
    };
    /* UI */
    /**
     * Returns item status
     *
     * @param status: number
     */
    DataTableComponent.prototype.getItemStatusString = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0:
                return 'Selling';
            case 1:
                return 'Sold';
        }
        return '';
    };
    /**
     * Returens item CSS Class Name by status
     *
     * @param status: number
     */
    DataTableComponent.prototype.getItemCssClassByStatus = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0:
                return 'success';
            case 1:
                return 'info';
        }
        return '';
    };
    /**
     * Returns item condition
     *
     * @param condition: number
     */
    DataTableComponent.prototype.getItemConditionString = function (condition) {
        if (condition === void 0) { condition = 0; }
        switch (condition) {
            case 0:
                return 'New';
            case 1:
                return 'Used';
        }
        return '';
    };
    /**
     * Returns CSS Class name by condition
     *
     * @param condition: number
     */
    DataTableComponent.prototype.getItemCssClassByCondition = function (condition) {
        if (condition === void 0) { condition = 0; }
        switch (condition) {
            case 0:
                return 'success';
            case 1:
                return 'info';
        }
        return '';
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], DataTableComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], DataTableComponent.prototype, "sort", void 0);
    DataTableComponent = __decorate([
        core_1.Component({
            selector: 'kt-data-table',
            templateUrl: './data-table.component.html',
            styleUrls: ['./data-table.component.scss']
        }),
        __metadata("design:paramtypes", [layout_1.DataTableService])
    ], DataTableComponent);
    return DataTableComponent;
}());
exports.DataTableComponent = DataTableComponent;
//# sourceMappingURL=data-table.component.js.map