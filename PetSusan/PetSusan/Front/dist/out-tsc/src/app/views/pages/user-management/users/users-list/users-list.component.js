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
var collections_1 = require("@angular/cdk/collections");
var material_1 = require("@angular/material");
// RXJS
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// LODASH
var lodash_1 = require("lodash");
// NGRX
var store_1 = require("@ngrx/store");
// Services
var crud_1 = require("../../../../../core/_base/crud");
// Models
var auth_1 = require("../../../../../core/auth");
var layout_1 = require("../../../../../core/_base/layout");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var UsersListComponent = /** @class */ (function () {
    /**
     *
     * @param activatedRoute: ActivatedRoute
     * @param store: Store<AppState>
     * @param router: Router
     * @param layoutUtilsService: LayoutUtilsService
     * @param subheaderService: SubheaderService
     */
    function UsersListComponent(activatedRoute, store, router, layoutUtilsService, subheaderService, cdr) {
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.subheaderService = subheaderService;
        this.cdr = cdr;
        this.displayedColumns = ['select', 'id', 'username', 'email', 'fullname', '_roles', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.usersResult = [];
        this.allRoles = [];
        // Subscriptions
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load roles list
        var rolesSubscription = this.store.pipe(store_1.select(auth_1.selectAllRoles)).subscribe(function (res) { return _this.allRoles = res; });
        this.subscriptions.push(rolesSubscription);
        // If the user changes the sort order, reset back to the first page.
        var sortSubscription = this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        var paginatorSubscriptions = rxjs_1.merge(this.sort.sortChange, this.paginator.page).pipe(operators_1.tap(function () {
            _this.loadUsersList();
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
            _this.loadUsersList();
        }))
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Set title to page breadCrumbs
        this.subheaderService.setTitle('User management');
        // Init DataSource
        this.dataSource = new auth_1.UsersDataSource(this.store);
        var entitiesSubscription = this.dataSource.entitySubject.pipe(operators_1.skip(1), operators_1.distinctUntilChanged()).subscribe(function (res) {
            _this.usersResult = res;
        });
        this.subscriptions.push(entitiesSubscription);
        // First Load
        rxjs_1.of(undefined).pipe(operators_1.take(1), operators_1.delay(1000)).subscribe(function () {
            _this.loadUsersList();
        });
    };
    /**
     * On Destroy
     */
    UsersListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load users list
     */
    UsersListComponent.prototype.loadUsersList = function () {
        this.selection.clear();
        var queryParams = new crud_1.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        this.store.dispatch(new auth_1.UsersPageRequested({ page: queryParams }));
        this.selection.clear();
    };
    /** FILTRATION */
    UsersListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter.lastName = searchText;
        filter.username = searchText;
        filter.email = searchText;
        filter.fillname = searchText;
        return filter;
    };
    /** ACTIONS */
    /**
     * Delete user
     *
     * @param _item: User
     */
    UsersListComponent.prototype.deleteUser = function (_item) {
        var _this = this;
        var _title = 'User Delete';
        var _description = 'Are you sure to permanently delete this user?';
        var _waitDesciption = 'User is deleting...';
        var _deleteMessage = "User has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new auth_1.UserDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
        });
    };
    /**
     * Fetch selected rows
     */
    UsersListComponent.prototype.fetchUsers = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: elem.fullname + ", " + elem.email,
                id: elem.id.toString(),
                status: elem.username
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Check all rows are selected
     */
    UsersListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.usersResult.length;
        return numSelected === numRows;
    };
    /**
     * Toggle selection
     */
    UsersListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.selection.selected.length === this.usersResult.length) {
            this.selection.clear();
        }
        else {
            this.usersResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    /* UI */
    /**
     * Returns user roles string
     *
     * @param user: User
     */
    UsersListComponent.prototype.getUserRolesStr = function (user) {
        var _this = this;
        var titles = [];
        lodash_1.each(user.roles, function (roleId) {
            var _role = lodash_1.find(_this.allRoles, function (role) { return role.id === roleId; });
            if (_role) {
                titles.push(_role.title);
            }
        });
        return titles.join(', ');
    };
    /**
     * Redirect to edit page
     *
     * @param id
     */
    UsersListComponent.prototype.editUser = function (id) {
        this.router.navigate(['../users/edit', id], { relativeTo: this.activatedRoute });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], UsersListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('sort1'),
        __metadata("design:type", material_1.MatSort)
    ], UsersListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], UsersListComponent.prototype, "searchInput", void 0);
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'kt-users-list',
            templateUrl: './users-list.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            store_1.Store,
            router_1.Router,
            crud_1.LayoutUtilsService,
            layout_1.SubheaderService,
            core_1.ChangeDetectorRef])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map