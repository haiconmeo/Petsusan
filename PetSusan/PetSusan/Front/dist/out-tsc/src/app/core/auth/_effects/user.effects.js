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
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// NGRX
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
// Services
var _services_1 = require("../../../core/auth/_services");
var user_actions_1 = require("../_actions/user.actions");
var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, auth, store) {
        var _this = this;
        this.actions$ = actions$;
        this.auth = auth;
        this.store = store;
        this.showPageLoadingDistpatcher = new user_actions_1.UsersPageToggleLoading({ isLoading: true });
        this.hidePageLoadingDistpatcher = new user_actions_1.UsersPageToggleLoading({ isLoading: false });
        this.showActionLoadingDistpatcher = new user_actions_1.UsersActionToggleLoading({ isLoading: true });
        this.hideActionLoadingDistpatcher = new user_actions_1.UsersActionToggleLoading({ isLoading: false });
        this.loadUsersPage$ = this.actions$
            .pipe(effects_1.ofType(user_actions_1.UserActionTypes.UsersPageRequested), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showPageLoadingDistpatcher);
            var requestToServer = _this.auth.findUsers(payload.page);
            var lastQuery = rxjs_1.of(payload.page);
            return rxjs_1.forkJoin(requestToServer, lastQuery);
        }), operators_1.map(function (response) {
            var result = response[0];
            var lastQuery = response[1];
            return new user_actions_1.UsersPageLoaded({
                users: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
        }));
        this.deleteUser$ = this.actions$
            .pipe(effects_1.ofType(user_actions_1.UserActionTypes.UserDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.deleteUser(payload.id);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.updateUser$ = this.actions$
            .pipe(effects_1.ofType(user_actions_1.UserActionTypes.UserUpdated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.updateUser(payload.user);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.createUser$ = this.actions$
            .pipe(effects_1.ofType(user_actions_1.UserActionTypes.UserOnServerCreated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.createUser(payload.user).pipe(operators_1.tap(function (res) {
                _this.store.dispatch(new user_actions_1.UserCreated({ user: res }));
            }));
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "loadUsersPage$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "deleteUser$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "updateUser$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "createUser$", void 0);
    UserEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, _services_1.AuthService, store_1.Store])
    ], UserEffects);
    return UserEffects;
}());
exports.UserEffects = UserEffects;
//# sourceMappingURL=user.effects.js.map