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
// Material
var material_1 = require("@angular/material");
var collections_1 = require("@angular/cdk/collections");
// RXJS
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// NGRX
var store_1 = require("@ngrx/store");
// CRUD
var crud_1 = require("../../../../../../../../core/_base/crud");
// Services and models
var e_commerce_1 = require("../../../../../../../../core/e-commerce");
// Components
var specification_edit_dialog_component_1 = require("../specification-edit/specification-edit-dialog.component");
// Table with EDIT item in new page
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var SpecificationsListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState></AppState>
     * @param dialog: MatDialog
     * @param layoutUtilsService: LayoutUtilsService
     */
    function SpecificationsListComponent(store, dialog, layoutUtilsService) {
        this.store = store;
        this.dialog = dialog;
        this.layoutUtilsService = layoutUtilsService;
        this.displayedColumns = ['select', '_specificationName', 'value', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.productSpecificationsResult = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SpecificationsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        rxjs_1.merge(this.sort.sortChange, this.paginator.page)
            .pipe(operators_1.tap(function () {
            _this.loadSpecsList();
        }))
            .subscribe();
        // Filtration, bind to searchInput
        rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(operators_1.debounceTime(150), operators_1.distinctUntilChanged(), operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadSpecsList();
        }))
            .subscribe();
        // Init DataSource
        this.dataSource = new e_commerce_1.ProductSpecificationsDataSource(this.store);
        this.dataSource.entitySubject.subscribe(function (res) { return _this.productSpecificationsResult = res; });
        this.productId$.subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.productId = res;
            rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
                _this.loadSpecsList();
            }); // Remove this line, just loading imitation
        });
    };
    /**
     * On destroy
     */
    SpecificationsListComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Load Specs List
     */
    SpecificationsListComponent.prototype.loadSpecsList = function () {
        this.selection.clear();
        var queryParams = new crud_1.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new e_commerce_1.ProductSpecificationsPageRequested({
            page: queryParams,
            productId: this.productId
        }));
    };
    /**
     * Retirns object for filter
     */
    SpecificationsListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter._specificationName = searchText;
        filter.value = searchText;
        return filter;
    };
    /**
     * Check all rows are selected
     */
    SpecificationsListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.productSpecificationsResult.length;
        return numSelected === numRows;
    };
    /**
     * Selects all rows if they are not all selected; otherwise clear selection
     */
    SpecificationsListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.productSpecificationsResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    /** ACTIONS */
    /**
     * Delete spec
     *
     * @param _item: ProductSpecificationModel
     */
    SpecificationsListComponent.prototype.deleteSpec = function (_item) {
        var _this = this;
        var _title = 'Specification Delete';
        var _description = 'Are you sure to permanently delete this specification?';
        var _waitDesciption = 'Specification is deleting...';
        var _deleteMessage = "Specification has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new e_commerce_1.OneProductSpecificationDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.loadSpecsList();
        });
    };
    /**
     * Delete specs
     */
    SpecificationsListComponent.prototype.deleteSpecs = function () {
        var _this = this;
        var _title = 'Specifications Delete';
        var _description = 'Are you sure to permanently delete selected specifications?';
        var _waitDesciption = 'Specifications are deleting...';
        var _deleteMessage = 'Selected specifications have been deleted';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            var length = _this.selection.selected.length;
            var idsForDeletion = [];
            for (var i = 0; i < length; i++) {
                idsForDeletion.push(_this.selection.selected[i].id);
            }
            _this.store.dispatch(new e_commerce_1.ManyProductSpecificationsDeleted({ ids: idsForDeletion }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.selection.clear();
        });
    };
    /**
     * Fetch selected specs
     */
    SpecificationsListComponent.prototype.fetchSpecs = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: elem._specificationName + ": " + elem.value, id: elem.id
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Open add spec dialog and save data
     */
    SpecificationsListComponent.prototype.addSpec = function () {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var newSpec = new e_commerce_1.ProductSpecificationModel();
        newSpec.clear(this.productId);
        var dialogRef = this.dialog.open(specification_edit_dialog_component_1.SpecificationEditDialogComponent, {
            data: {
                specId: undefined,
                value: '',
                isNew: true
            },
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res && res.isUpdated) {
                newSpec._specificationName = res._specificationName;
                newSpec.specId = res.specId;
                newSpec.value = res.value;
                _this.store.dispatch(new e_commerce_1.ProductSpecificationOnServerCreated({ productSpecification: newSpec }));
                _this.componentSubscriptions = _this.store.pipe(store_1.select(e_commerce_1.selectLastCreatedProductSpecificationId)).subscribe(function (result) {
                    if (!result) {
                        return;
                    }
                    var saveMessage = "Specification has been created";
                    _this.layoutUtilsService.showActionNotification(saveMessage, crud_1.MessageType.Create, 10000, true, true);
                });
            }
        });
    };
    /**
     * Edit add spec dialog ans save data
     *
     * @param item: ProductSpecificationModel
     */
    SpecificationsListComponent.prototype.editSpec = function (item) {
        var _this = this;
        var _item = Object.assign({}, item);
        var dialogRef = this.dialog.open(specification_edit_dialog_component_1.SpecificationEditDialogComponent, {
            data: {
                specId: _item.specId,
                value: _item.value,
                isNew: false
            },
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res && res.isUpdated) {
                _item._specificationName = res._specificationName;
                _item.specId = res.specId;
                _item.value = res.value;
                var updateProductSpecification = {
                    id: _item.id,
                    changes: _item
                };
                _this.store.dispatch(new e_commerce_1.ProductSpecificationUpdated({
                    partialProductSpecification: updateProductSpecification,
                    productSpecification: _item
                }));
                var saveMessage = "Specification has been updated";
                _this.layoutUtilsService.showActionNotification(saveMessage, crud_1.MessageType.Update, 10000, true, true);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.Observable)
    ], SpecificationsListComponent.prototype, "productId$", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], SpecificationsListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], SpecificationsListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], SpecificationsListComponent.prototype, "searchInput", void 0);
    SpecificationsListComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-specifications-list',
            templateUrl: './specifications-list.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [store_1.Store,
            material_1.MatDialog,
            crud_1.LayoutUtilsService])
    ], SpecificationsListComponent);
    return SpecificationsListComponent;
}());
exports.SpecificationsListComponent = SpecificationsListComponent;
//# sourceMappingURL=specifications-list.component.js.map