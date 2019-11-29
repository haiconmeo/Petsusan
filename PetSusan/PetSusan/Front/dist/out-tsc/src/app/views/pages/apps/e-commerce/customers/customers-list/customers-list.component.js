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
var collections_1 = require("@angular/cdk/collections");
var material_1 = require("@angular/material");
// RXJS
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// Translate Module
var core_2 = require("@ngx-translate/core");
// NGRX
var store_1 = require("@ngrx/store");
// CRUD
var crud_1 = require("../../../../../../core/_base/crud");
// Services and Models
var e_commerce_1 = require("../../../../../../core/e-commerce");
// Components
var customer_edit_dialog_component_1 = require("../customer-edit/customer-edit.dialog.component");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/compgetItemCssClassByStatusonents/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var CustomersListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     */
    function CustomersListComponent(dialog, snackBar, layoutUtilsService, translate, store) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.displayedColumns = ['select', 'id', 'lastName', 'firstName', 'email', 'gender', 'status', 'type', 'actions'];
        this.filterStatus = '';
        this.filterType = '';
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.customersResult = [];
        // Subscriptions
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    CustomersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        var sortSubscription = this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        var paginatorSubscriptions = rxjs_1.merge(this.sort.sortChange, this.paginator.page).pipe(operators_1.tap(function () { return _this.loadCustomersList(); }))
            .subscribe();
        this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        var searchSubscription = rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(50), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadCustomersList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Init DataSource
        this.dataSource = new e_commerce_1.CustomersDataSource(this.store);
        var entitiesSubscription = this.dataSource.entitySubject.pipe(operators_1.skip(1), operators_1.distinctUntilChanged()).subscribe(function (res) {
            _this.customersResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        // First load
        rxjs_1.of(undefined).pipe(operators_1.take(1), operators_1.delay(1000)).subscribe(function () {
            _this.loadCustomersList();
        }); // Remove this line, just loading imitation
    };
    /**
     * On Destroy
     */
    CustomersListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load Customers List from service through data-source
     */
    CustomersListComponent.prototype.loadCustomersList = function () {
        this.selection.clear();
        var queryParams = new crud_1.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new e_commerce_1.CustomersPageRequested({ page: queryParams }));
        this.selection.clear();
    };
    /**
     * Returns object for filter
     */
    CustomersListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        if (this.filterStatus && this.filterStatus.length > 0) {
            filter.status = +this.filterStatus;
        }
        if (this.filterType && this.filterType.length > 0) {
            filter.type = +this.filterType;
        }
        filter.lastName = searchText;
        if (!searchText) {
            return filter;
        }
        filter.firstName = searchText;
        filter.email = searchText;
        filter.ipAddress = searchText;
        return filter;
    };
    /** ACTIONS */
    /**
     * Delete customer
     *
     * @param _item: CustomerModel
     */
    CustomersListComponent.prototype.deleteCustomer = function (_item) {
        var _this = this;
        var _title = this.translate.instant('ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.TITLE');
        var _description = this.translate.instant('ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.DESCRIPTION');
        var _waitDesciption = this.translate.instant('ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.WAIT_DESCRIPTION');
        var _deleteMessage = this.translate.instant('ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.MESSAGE');
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new e_commerce_1.OneCustomerDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
        });
    };
    /**
     * Delete selected customers
     */
    CustomersListComponent.prototype.deleteCustomers = function () {
        var _this = this;
        var _title = this.translate.instant('ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.TITLE');
        var _description = this.translate.instant('ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.DESCRIPTION');
        var _waitDesciption = this.translate.instant('ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.WAIT_DESCRIPTION');
        var _deleteMessage = this.translate.instant('ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.MESSAGE');
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            var idsForDeletion = [];
            for (var i = 0; i < _this.selection.selected.length; i++) {
                idsForDeletion.push(_this.selection.selected[i].id);
            }
            _this.store.dispatch(new e_commerce_1.ManyCustomersDeleted({ ids: idsForDeletion }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.selection.clear();
        });
    };
    /**
     * Fetch selected customers
     */
    CustomersListComponent.prototype.fetchCustomers = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: elem.lastName + ", " + elem.firstName,
                id: elem.id.toString(),
                status: elem.status
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Show UpdateStatuDialog for selected customers
     */
    CustomersListComponent.prototype.updateStatusForCustomers = function () {
        var _this = this;
        var _title = this.translate.instant('ECOMMERCE.CUSTOMERS.UPDATE_STATUS.TITLE');
        var _updateMessage = this.translate.instant('ECOMMERCE.CUSTOMERS.UPDATE_STATUS.MESSAGE');
        var _statuses = [{ value: 0, text: 'Suspended' }, { value: 1, text: 'Active' }, { value: 2, text: 'Pending' }];
        var _messages = [];
        this.selection.selected.forEach(function (elem) {
            _messages.push({
                text: elem.lastName + ", " + elem.firstName,
                id: elem.id.toString(),
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
            _this.store.dispatch(new e_commerce_1.CustomersStatusUpdated({
                status: +res,
                customers: _this.selection.selected
            }));
            _this.layoutUtilsService.showActionNotification(_updateMessage, crud_1.MessageType.Update, 10000, true, true);
            _this.selection.clear();
        });
    };
    /**
     * Show add customer dialog
     */
    CustomersListComponent.prototype.addCustomer = function () {
        var newCustomer = new e_commerce_1.CustomerModel();
        newCustomer.clear(); // Set all defaults fields
        this.editCustomer(newCustomer);
    };
    /**
     * Show Edit customer dialog and save after success close result
     * @param customer: CustomerModel
     */
    CustomersListComponent.prototype.editCustomer = function (customer) {
        var _this = this;
        var saveMessageTranslateParam = 'ECOMMERCE.CUSTOMERS.EDIT.';
        saveMessageTranslateParam += customer.id > 0 ? 'UPDATE_MESSAGE' : 'ADD_MESSAGE';
        var _saveMessage = this.translate.instant(saveMessageTranslateParam);
        var _messageType = customer.id > 0 ? crud_1.MessageType.Update : crud_1.MessageType.Create;
        var dialogRef = this.dialog.open(customer_edit_dialog_component_1.CustomerEditDialogComponent, { data: { customer: customer } });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadCustomersList();
        });
    };
    /**
     * Check all rows are selected
     */
    CustomersListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.customersResult.length;
        return numSelected === numRows;
    };
    /**
     * Toggle all selections
     */
    CustomersListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.selection.selected.length === this.customersResult.length) {
            this.selection.clear();
        }
        else {
            this.customersResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    /** UI */
    /**
     * Retursn CSS Class Name by status
     *
     * @param status: number
     */
    CustomersListComponent.prototype.getItemCssClassByStatus = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0:
                return 'danger';
            case 1:
                return 'success';
            case 2:
                return 'metal';
        }
        return '';
    };
    /**
     * Returns Item Status in string
     * @param status: number
     */
    CustomersListComponent.prototype.getItemStatusString = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0:
                return 'Suspended';
            case 1:
                return 'Active';
            case 2:
                return 'Pending';
        }
        return '';
    };
    /**
     * Returns CSS Class Name by type
     * @param status: number
     */
    CustomersListComponent.prototype.getItemCssClassByType = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0:
                return 'accent';
            case 1:
                return 'primary';
            case 2:
                return '';
        }
        return '';
    };
    /**
     * Returns Item Type in string
     * @param status: number
     */
    CustomersListComponent.prototype.getItemTypeString = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0:
                return 'Business';
            case 1:
                return 'Individual';
        }
        return '';
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], CustomersListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('sort1'),
        __metadata("design:type", material_1.MatSort)
    ], CustomersListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], CustomersListComponent.prototype, "searchInput", void 0);
    CustomersListComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-customers-list',
            templateUrl: './customers-list.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            material_1.MatSnackBar,
            crud_1.LayoutUtilsService,
            core_2.TranslateService,
            store_1.Store])
    ], CustomersListComponent);
    return CustomersListComponent;
}());
exports.CustomersListComponent = CustomersListComponent;
//# sourceMappingURL=customers-list.component.js.map