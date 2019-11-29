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
var operators_1 = require("rxjs/operators");
// NGRX
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
// Services
var _services_1 = require("../_services");
// Selectors
var role_selectors_1 = require("../_selectors/role.selectors");
// Actions
var role_actions_1 = require("../_actions/role.actions");
var RoleEffects = /** @class */ (function () {
    function RoleEffects(actions$, auth, store) {
        var _this = this;
        this.actions$ = actions$;
        this.auth = auth;
        this.store = store;
        this.showPageLoadingDistpatcher = new role_actions_1.RolesPageToggleLoading({ isLoading: true });
        this.hidePageLoadingDistpatcher = new role_actions_1.RolesPageToggleLoading({ isLoading: false });
        this.showActionLoadingDistpatcher = new role_actions_1.RolesActionToggleLoading({ isLoading: true });
        this.hideActionLoadingDistpatcher = new role_actions_1.RolesActionToggleLoading({ isLoading: false });
        this.loadAllRoles$ = this.actions$
            .pipe(effects_1.ofType(role_actions_1.RoleActionTypes.AllRolesRequested), operators_1.withLatestFrom(this.store.pipe(store_1.select(role_selectors_1.allRolesLoaded))), operators_1.filter(function (_a) {
            var action = _a[0], isAllRolesLoaded = _a[1];
            return !isAllRolesLoaded;
        }), operators_1.mergeMap(function () { return _this.auth.getAllRoles(); }), operators_1.map(function (roles) {
            return new role_actions_1.AllRolesLoaded({ roles: roles });
        }));
        this.loadRolesPage$ = this.actions$
            .pipe(effects_1.ofType(role_actions_1.RoleActionTypes.RolesPageRequested), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showPageLoadingDistpatcher);
            var requestToServer = _this.auth.findRoles(payload.page);
            var lastQuery = rxjs_1.of(payload.page);
            return rxjs_1.forkJoin(requestToServer, lastQuery);
        }), operators_1.map(function (response) {
            var result = response[0];
            var lastQuery = response[1];
            _this.store.dispatch(_this.hidePageLoadingDistpatcher);
            return new role_actions_1.RolesPageLoaded({
                roles: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
        }));
        this.deleteRole$ = this.actions$
            .pipe(effects_1.ofType(role_actions_1.RoleActionTypes.RoleDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.deleteRole(payload.id);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.updateRole$ = this.actions$
            .pipe(effects_1.ofType(role_actions_1.RoleActionTypes.RoleUpdated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.updateRole(payload.role);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.createRole$ = this.actions$
            .pipe(effects_1.ofType(role_actions_1.RoleActionTypes.RoleOnServerCreated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.createRole(payload.role).pipe(operators_1.tap(function (res) {
                _this.store.dispatch(new role_actions_1.RoleCreated({ role: res }));
            }));
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.init$ = rxjs_1.defer(function () {
            return rxjs_1.of(new role_actions_1.AllRolesRequested());
        });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], RoleEffects.prototype, "loadAllRoles$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], RoleEffects.prototype, "loadRolesPage$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], RoleEffects.prototype, "deleteRole$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], RoleEffects.prototype, "updateRole$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], RoleEffects.prototype, "createRole$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", rxjs_1.Observable)
    ], RoleEffects.prototype, "init$", void 0);
    RoleEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, _services_1.AuthService, store_1.Store])
    ], RoleEffects);
    return RoleEffects;
}());
exports.RoleEffects = RoleEffects;
//# sourceMappingURL=role.effects.js.map