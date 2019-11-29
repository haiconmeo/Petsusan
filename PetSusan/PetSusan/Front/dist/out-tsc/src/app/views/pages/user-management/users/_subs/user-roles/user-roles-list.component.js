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
// RxJS
var rxjs_1 = require("rxjs");
// NGRX
var store_1 = require("@ngrx/store");
// Lodash
var lodash_1 = require("lodash");
// Auth
var auth_1 = require("../../../../../../core/auth");
var UserRolesListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     */
    function UserRolesListComponent(store) {
        this.store = store;
        // Public properties
        // Incoming data
        this.loadingSubject = new rxjs_1.BehaviorSubject(false);
        this.allRoles = [];
        this.unassignedRoles = [];
        this.assignedRoles = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserRolesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allUserRoles$ = this.store.pipe(store_1.select(auth_1.selectAllRoles));
        this.allUserRoles$.subscribe(function (res) {
            lodash_1.each(res, function (_role) {
                _this.allRoles.push(_role);
                _this.unassignedRoles.push(_role);
            });
            lodash_1.each(_this.rolesSubject.value, function (roleId) {
                var role = lodash_1.find(_this.allRoles, function (_role) {
                    return _role.id === roleId;
                });
                if (role) {
                    _this.assignedRoles.push(role);
                    lodash_1.remove(_this.unassignedRoles, role);
                }
            });
        });
    };
    /**
     * Assign role
     */
    UserRolesListComponent.prototype.assignRole = function () {
        var _this = this;
        if (this.roleIdForAdding === 0) {
            return;
        }
        var role = lodash_1.find(this.allRoles, function (_role) {
            return _role.id === (+_this.roleIdForAdding);
        });
        if (role) {
            this.assignedRoles.push(role);
            lodash_1.remove(this.unassignedRoles, role);
            this.roleIdForAdding = 0;
            this.updateRoles();
        }
    };
    /**
     * Unassign role
     *
     * @param role: Role
     */
    UserRolesListComponent.prototype.unassingRole = function (role) {
        this.roleIdForAdding = 0;
        this.unassignedRoles.push(role);
        lodash_1.remove(this.assignedRoles, role);
        this.updateRoles();
    };
    /**
     * Update roles
     */
    UserRolesListComponent.prototype.updateRoles = function () {
        var _roles = [];
        lodash_1.each(this.assignedRoles, function (elem) { return _roles.push(elem.id); });
        this.rolesSubject.next(_roles);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserRolesListComponent.prototype, "loadingSubject", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.BehaviorSubject)
    ], UserRolesListComponent.prototype, "rolesSubject", void 0);
    UserRolesListComponent = __decorate([
        core_1.Component({
            selector: 'kt-user-roles-list',
            templateUrl: './user-roles-list.component.html'
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], UserRolesListComponent);
    return UserRolesListComponent;
}());
exports.UserRolesListComponent = UserRolesListComponent;
//# sourceMappingURL=user-roles-list.component.js.map