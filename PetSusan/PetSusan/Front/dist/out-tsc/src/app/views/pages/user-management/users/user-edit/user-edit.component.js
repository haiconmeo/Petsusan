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
var forms_1 = require("@angular/forms");
// RxJS
var rxjs_1 = require("rxjs");
// NGRX
var store_1 = require("@ngrx/store");
// Layout
var layout_1 = require("../../../../../core/_base/layout");
var crud_1 = require("../../../../../core/_base/crud");
// Services and Models
var auth_1 = require("../../../../../core/auth");
var UserEditComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param userFB: FormBuilder
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: LayoutUtilsService
     * @param store: Store<AppState>
     * @param layoutConfigService: LayoutConfigService
     */
    function UserEditComponent(activatedRoute, router, userFB, subheaderService, layoutUtilsService, store, layoutConfigService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userFB = userFB;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.layoutConfigService = layoutConfigService;
        this.selectedTab = 0;
        this.rolesSubject = new rxjs_1.BehaviorSubject([]);
        this.addressSubject = new rxjs_1.BehaviorSubject(new auth_1.Address());
        this.soicialNetworksSubject = new rxjs_1.BehaviorSubject(new auth_1.SocialNetworks());
        this.hasFormErrors = false;
        // Private properties
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading$ = this.store.pipe(store_1.select(auth_1.selectUsersActionLoading));
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id && id > 0) {
                _this.store.pipe(store_1.select(auth_1.selectUserById(id))).subscribe(function (res) {
                    if (res) {
                        _this.user = res;
                        _this.rolesSubject.next(_this.user.roles);
                        _this.addressSubject.next(_this.user.address);
                        _this.soicialNetworksSubject.next(_this.user.socialNetworks);
                        _this.oldUser = Object.assign({}, _this.user);
                        _this.initUser();
                    }
                });
            }
            else {
                _this.user = new auth_1.User();
                _this.user.clear();
                _this.rolesSubject.next(_this.user.roles);
                _this.addressSubject.next(_this.user.address);
                _this.soicialNetworksSubject.next(_this.user.socialNetworks);
                _this.oldUser = Object.assign({}, _this.user);
                _this.initUser();
            }
        });
        this.subscriptions.push(routeSubscription);
    };
    UserEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * Init user
     */
    UserEditComponent.prototype.initUser = function () {
        this.createForm();
        if (!this.user.id) {
            this.subheaderService.setTitle('Create user');
            this.subheaderService.setBreadcrumbs([
                { title: 'User Management', page: "user-management" },
                { title: 'Users', page: "user-management/users" },
                { title: 'Create user', page: "user-management/users/add" }
            ]);
            return;
        }
        this.subheaderService.setTitle('Edit user');
        this.subheaderService.setBreadcrumbs([
            { title: 'User Management', page: "user-management" },
            { title: 'Users', page: "user-management/users" },
            { title: 'Edit user', page: "user-management/users/edit", queryParams: { id: this.user.id } }
        ]);
    };
    /**
     * Create form
     */
    UserEditComponent.prototype.createForm = function () {
        this.userForm = this.userFB.group({
            username: [this.user.username, forms_1.Validators.required],
            fullname: [this.user.fullname, forms_1.Validators.required],
            email: [this.user.email, forms_1.Validators.email],
            phone: [this.user.phone],
            companyName: [this.user.companyName],
            occupation: [this.user.occupation]
        });
    };
    /**
     * Redirect to list
     *
     */
    UserEditComponent.prototype.goBackWithId = function () {
        var url = this.layoutConfigService.getCurrentMainRoute() + "/user-management/users";
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    /**
     * Refresh user
     *
     * @param isNew: boolean
     * @param id: number
     */
    UserEditComponent.prototype.refreshUser = function (isNew, id) {
        if (isNew === void 0) { isNew = false; }
        if (id === void 0) { id = 0; }
        var url = this.router.url;
        if (!isNew) {
            this.router.navigate([url], { relativeTo: this.activatedRoute });
            return;
        }
        url = this.layoutConfigService.getCurrentMainRoute() + "/user-management/users/edit/" + id;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    /**
     * Reset
     */
    UserEditComponent.prototype.reset = function () {
        this.user = Object.assign({}, this.oldUser);
        this.createForm();
        this.hasFormErrors = false;
        this.userForm.markAsPristine();
        this.userForm.markAsUntouched();
        this.userForm.updateValueAndValidity();
    };
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    UserEditComponent.prototype.onSumbit = function (withBack) {
        if (withBack === void 0) { withBack = false; }
        this.hasFormErrors = false;
        var controls = this.userForm.controls;
        /** check form */
        if (this.userForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.selectedTab = 0;
            return;
        }
        var editedUser = this.prepareUser();
        if (editedUser.id > 0) {
            this.updateUser(editedUser, withBack);
            return;
        }
        this.addUser(editedUser, withBack);
    };
    /**
     * Returns prepared data for save
     */
    UserEditComponent.prototype.prepareUser = function () {
        var controls = this.userForm.controls;
        var _user = new auth_1.User();
        _user.clear();
        _user.roles = this.rolesSubject.value;
        _user.address = this.addressSubject.value;
        _user.socialNetworks = this.soicialNetworksSubject.value;
        _user.accessToken = this.user.accessToken;
        _user.refreshToken = this.user.refreshToken;
        _user.pic = this.user.pic;
        _user.id = this.user.id;
        _user.username = controls['username'].value;
        _user.email = controls['email'].value;
        _user.fullname = controls['fullname'].value;
        _user.occupation = controls['occupation'].value;
        _user.phone = controls['phone'].value;
        _user.companyName = controls['companyName'].value;
        _user.password = this.user.password;
        return _user;
    };
    /**
     * Add User
     *
     * @param _user: User
     * @param withBack: boolean
     */
    UserEditComponent.prototype.addUser = function (_user, withBack) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        this.store.dispatch(new auth_1.UserOnServerCreated({ user: _user }));
        var addSubscription = this.store.pipe(store_1.select(auth_1.selectLastCreatedUserId)).subscribe(function (newId) {
            var message = "New user successfully has been added.";
            _this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Create, 5000, true, true);
            if (newId) {
                if (withBack) {
                    _this.goBackWithId();
                }
                else {
                    _this.refreshUser(true, newId);
                }
            }
        });
        this.subscriptions.push(addSubscription);
    };
    /**
     * Update user
     *
     * @param _user: User
     * @param withBack: boolean
     */
    UserEditComponent.prototype.updateUser = function (_user, withBack) {
        // Update User
        // tslint:disable-next-line:prefer-const
        if (withBack === void 0) { withBack = false; }
        var updatedUser = {
            id: _user.id,
            changes: _user
        };
        this.store.dispatch(new auth_1.UserUpdated({ partialUser: updatedUser, user: _user }));
        var message = "User successfully has been saved.";
        this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Update, 5000, true, true);
        if (withBack) {
            this.goBackWithId();
        }
        else {
            this.refreshUser(false);
        }
    };
    /**
     * Returns component title
     */
    UserEditComponent.prototype.getComponentTitle = function () {
        var result = 'Create user';
        if (!this.user || !this.user.id) {
            return result;
        }
        result = "Edit user - " + this.user.fullname;
        return result;
    };
    /**
     * Close Alert
     *
     * @param $event: Event
     */
    UserEditComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'kt-user-edit',
            templateUrl: './user-edit.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder,
            layout_1.SubheaderService,
            crud_1.LayoutUtilsService,
            store_1.Store,
            layout_1.LayoutConfigService])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map