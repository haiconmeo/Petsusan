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
// NGRX
var store_1 = require("@ngrx/store");
var userManagementPermissionId = 2;
var UserManagementComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param router: Router
     */
    function UserManagementComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserManagementComponent.prototype.ngOnInit = function () {
        // this.currentUserPermission$ = this.store.pipe(select(currentUserPermissions));
        // this.currentUserPermission$.subscribe(permissions => {
        // 	if (permissions && permissions.length > 0) {
        // 		this.hasUserAccess$ =
        // 			this.store.pipe(select(checkHasUserPermission(userManagementPermissionId)));
        // 		this.hasUserAccess$.subscribe(res => {
        // 			if (!res) {
        // 				this.router.navigateByUrl('/error/403');
        // 			}
        // 		});
        // 	}
        // });
    };
    UserManagementComponent = __decorate([
        core_1.Component({
            selector: 'kt-user-management',
            templateUrl: './user-management.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [store_1.Store, router_1.Router])
    ], UserManagementComponent);
    return UserManagementComponent;
}());
exports.UserManagementComponent = UserManagementComponent;
//# sourceMappingURL=user-management.component.js.map