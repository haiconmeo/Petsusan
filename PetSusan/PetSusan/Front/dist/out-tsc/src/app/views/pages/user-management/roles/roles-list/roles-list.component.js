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
// NGRX
var store_1 = require("@ngrx/store");
// Services
var crud_1 = require("../../../../../core/_base/crud");
// Models
var auth_1 = require("../../../../../core/auth");
var crud_2 = require("../../../../../core/_base/crud");
// Components
var role_edit_dialog_component_1 = require("../role-edit/role-edit.dialog.component");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var RolesListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     */
    function RolesListComponent(store, dialog, snackBar, layoutUtilsService) {
        this.store = store;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.displayedColumns = ['select', 'id', 'title', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.rolesResult = [];
        // Subscriptions
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    RolesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        var sortSubscription = this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        var paginatorSubscriptions = rxjs_1.merge(this.sort.sortChange, this.paginator.page).pipe(operators_1.tap(function () {
            _this.loadRolesList();
        }))
            .subscribe();
        this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        var searchSubscription = rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadRolesList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Init DataSource
        this.dataSource = new auth_1.RolesDataSource(this.store);
        var entitiesSubscription = this.dataSource.entitySubject.pipe(operators_1.skip(1), operators_1.distinctUntilChanged()).subscribe(function (res) {
            _this.rolesResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        // First load
        rxjs_1.of(undefined).pipe(operators_1.take(1), operators_1.delay(1000)).subscribe(function () {
            _this.loadRolesList();
        });
    };
    /**
     * On Destroy
     */
    RolesListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load Roles List
     */
    RolesListComponent.prototype.loadRolesList = function () {
        this.selection.clear();
        var queryParams = new crud_2.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new auth_1.RolesPageRequested({ page: queryParams }));
        this.selection.clear();
    };
    /**
     * Returns object for filter
     */
    RolesListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter.title = searchText;
        return filter;
    };
    /** ACTIONS */
    /**
     * Delete role
     *
     * @param _item: Role
     */
    RolesListComponent.prototype.deleteRole = function (_item) {
        var _this = this;
        var _title = 'User Role';
        var _description = 'Are you sure to permanently delete this role?';
        var _waitDesciption = 'Role is deleting...';
        var _deleteMessage = "Role has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new auth_1.RoleDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.loadRolesList();
        });
    };
    /** Fetch */
    /**
     * Fetch selected rows
     */
    RolesListComponent.prototype.fetchRoles = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: "" + elem.title,
                id: elem.id.toString(),
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Add role
     */
    RolesListComponent.prototype.addRole = function () {
        var newRole = new auth_1.Role();
        newRole.clear(); // Set all defaults fields
        this.editRole(newRole);
    };
    /**
     * Edit role
     *
     * @param role: Role
     */
    RolesListComponent.prototype.editRole = function (role) {
        var _this = this;
        var _saveMessage = "Role successfully has been saved.";
        var _messageType = role.id ? crud_1.MessageType.Update : crud_1.MessageType.Create;
        var dialogRef = this.dialog.open(role_edit_dialog_component_1.RoleEditDialogComponent, { data: { roleId: role.id } });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType, 10000, true, true);
            _this.loadRolesList();
        });
    };
    /**
     * Check all rows are selected
     */
    RolesListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.rolesResult.length;
        return numSelected === numRows;
    };
    /**
     * Toggle selection
     */
    RolesListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.selection.selected.length === this.rolesResult.length) {
            this.selection.clear();
        }
        else {
            this.rolesResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], RolesListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('sort1'),
        __metadata("design:type", material_1.MatSort)
    ], RolesListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], RolesListComponent.prototype, "searchInput", void 0);
    RolesListComponent = __decorate([
        core_1.Component({
            selector: 'kt-roles-list',
            templateUrl: './roles-list.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [store_1.Store,
            material_1.MatDialog,
            material_1.MatSnackBar,
            crud_1.LayoutUtilsService])
    ], RolesListComponent);
    return RolesListComponent;
}());
exports.RolesListComponent = RolesListComponent;
//# sourceMappingURL=roles-list.component.js.map