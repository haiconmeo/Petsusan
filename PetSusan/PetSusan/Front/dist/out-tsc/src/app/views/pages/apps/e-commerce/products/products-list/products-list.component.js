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
var router_1 = require("@angular/router");
// Material
var material_1 = require("@angular/material");
var collections_1 = require("@angular/cdk/collections");
// RXJS
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// NGRX
var store_1 = require("@ngrx/store");
// UI
var layout_1 = require("../../../../../../core/_base/layout");
// CRUD
var crud_1 = require("../../../../../../core/_base/crud");
// Services and Models
var e_commerce_1 = require("../../../../../../core/e-commerce");
// Table with EDIT item in new page
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var ProductsListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: LayoutUtilsService
     * @param store: Store<AppState>
     */
    function ProductsListComponent(dialog, activatedRoute, router, subheaderService, layoutUtilsService, store) {
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.displayedColumns = ['select', 'VINCode', 'manufacture', 'model', 'modelYear', 'color', 'price', 'condition', 'status', 'actions'];
        this.filterStatus = '';
        this.filterCondition = '';
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.productsResult = [];
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        var sortSubscription = this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        var paginatorSubscriptions = rxjs_1.merge(this.sort.sortChange, this.paginator.page).pipe(operators_1.tap(function () { return _this.loadProductsList(); }))
            .subscribe();
        this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        var searchSubscription = rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup').pipe(operators_1.debounceTime(150), operators_1.distinctUntilChanged(), operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadProductsList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Set title to page breadCrumbs
        this.subheaderService.setTitle('Products');
        // Init DataSource
        this.dataSource = new e_commerce_1.ProductsDataSource(this.store);
        var entitiesSubscription = this.dataSource.entitySubject.pipe(operators_1.skip(1), operators_1.distinctUntilChanged()).subscribe(function (res) {
            _this.productsResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        var lastQuerySubscription = this.store.pipe(store_1.select(e_commerce_1.selectProductsPageLastQuery)).subscribe(function (res) { return _this.lastQuery = res; });
        // Load last query from store
        this.subscriptions.push(lastQuerySubscription);
        // Read from URL itemId, for restore previous state
        var routeSubscription = this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.id) {
                _this.restoreState(_this.lastQuery, +params.id);
            }
            // First load
            rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
                _this.loadProductsList();
            }); // Remove this line, just loading imitation
        });
        this.subscriptions.push(routeSubscription);
    };
    /**
     * On Destroy
     */
    ProductsListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load Products List
     */
    ProductsListComponent.prototype.loadProductsList = function () {
        this.selection.clear();
        var queryParams = new crud_1.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new e_commerce_1.ProductsPageRequested({ page: queryParams }));
        this.selection.clear();
    };
    /**
     * Returns object for filter
     */
    ProductsListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        if (this.filterStatus && this.filterStatus.length > 0) {
            filter.status = +this.filterStatus;
        }
        if (this.filterCondition && this.filterCondition.length > 0) {
            filter.condition = +this.filterCondition;
        }
        filter.model = searchText;
        filter.manufacture = searchText;
        filter.color = searchText;
        filter.VINCode = searchText;
        return filter;
    };
    /**
     * Restore state
     *
     * @param queryParams: QueryParamsModel
     * @param id: number
     */
    ProductsListComponent.prototype.restoreState = function (queryParams, id) {
        if (!queryParams.filter) {
            return;
        }
        if ('condition' in queryParams.filter) {
            this.filterCondition = queryParams.filter.condition.toString();
        }
        if ('status' in queryParams.filter) {
            this.filterStatus = queryParams.filter.status.toString();
        }
        if (queryParams.filter.model) {
            this.searchInput.nativeElement.value = queryParams.filter.model;
        }
    };
    /** ACTIONS */
    /**
     * Delete product
     *
     * @param _item: ProductModel
     */
    ProductsListComponent.prototype.deleteProduct = function (_item) {
        var _this = this;
        var _title = 'Product Delete';
        var _description = 'Are you sure to permanently delete this product?';
        var _waitDesciption = 'Product is deleting...';
        var _deleteMessage = "Product has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new e_commerce_1.OneProductDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
        });
    };
    /**
     * Delete products
     */
    ProductsListComponent.prototype.deleteProducts = function () {
        var _this = this;
        var _title = 'Products Delete';
        var _description = 'Are you sure to permanently delete selected products?';
        var _waitDesciption = 'Products are deleting...';
        var _deleteMessage = 'Selected products have been deleted';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            var idsForDeletion = [];
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < _this.selection.selected.length; i++) {
                idsForDeletion.push(_this.selection.selected[i].id);
            }
            _this.store.dispatch(new e_commerce_1.ManyProductsDeleted({ ids: idsForDeletion }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.selection.clear();
        });
    };
    /**
     * Fetch selected products
     */
    ProductsListComponent.prototype.fetchProducts = function () {
        // tslint:disable-next-line:prefer-const
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: elem.manufacture + " " + elem.model + " " + elem.modelYear,
                id: elem.VINCode,
                status: elem.status
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Update status dialog
     */
    ProductsListComponent.prototype.updateStatusForProducts = function () {
        var _this = this;
        var _title = 'Update status for selected products';
        var _updateMessage = 'Status has been updated for selected products';
        var _statuses = [{ value: 0, text: 'Selling' }, { value: 1, text: 'Sold' }];
        var _messages = [];
        this.selection.selected.forEach(function (elem) {
            _messages.push({
                text: elem.manufacture + " " + elem.model + " " + elem.modelYear,
                id: elem.VINCode,
                status: elem.status,
                statusTitle: _this.getItemStatusString(elem.status),
                statusCssClass: _this.getItemCssClassByStatus(elem.status)
            });
        });
        var dialogRef = this.layoutUtilsService.updateStatusForEntities(_title, _statuses, _messages);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                _this.selection.clear();
                return;
            }
            _this.store.dispatch(new e_commerce_1.ProductsStatusUpdated({
                status: +res,
                products: _this.selection.selected
            }));
            _this.layoutUtilsService.showActionNotification(_updateMessage, crud_1.MessageType.Update);
            _this.selection.clear();
        });
    };
    /**
     * Redirect to edit page
     *
     * @param id: any
     */
    ProductsListComponent.prototype.editProduct = function (id) {
        this.router.navigate(['../products/edit', id], { relativeTo: this.activatedRoute });
    };
    /**
     * Check all rows are selected
     */
    ProductsListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.productsResult.length;
        return numSelected === numRows;
    };
    /**
     * Selects all rows if they are not all selected; otherwise clear selection
     */
    ProductsListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.productsResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    /* UI */
    /**
     * Returns status string
     *
     * @param status: number
     */
    ProductsListComponent.prototype.getItemStatusString = function (status) {
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
     * Returns CSS Class by status
     *
     * @param status: number
     */
    ProductsListComponent.prototype.getItemCssClassByStatus = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0:
                return 'success';
            case 1:
                return 'metal';
        }
        return '';
    };
    /**
     * Rerurns condition string
     *
     * @param condition: number
     */
    ProductsListComponent.prototype.getItemConditionString = function (condition) {
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
     * Returns CSS Class by condition
     *
     * @param condition: number
     */
    ProductsListComponent.prototype.getItemCssClassByCondition = function (condition) {
        if (condition === void 0) { condition = 0; }
        switch (condition) {
            case 0:
                return 'accent';
            case 1:
                return 'primary';
        }
        return '';
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], ProductsListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('sort1'),
        __metadata("design:type", material_1.MatSort)
    ], ProductsListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], ProductsListComponent.prototype, "searchInput", void 0);
    ProductsListComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-products-list',
            templateUrl: './products-list.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            router_1.ActivatedRoute,
            router_1.Router,
            layout_1.SubheaderService,
            crud_1.LayoutUtilsService,
            store_1.Store])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=products-list.component.js.map