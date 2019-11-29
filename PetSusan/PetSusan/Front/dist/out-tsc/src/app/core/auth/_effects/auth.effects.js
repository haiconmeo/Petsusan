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
// RxJS
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// NGRX
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
// Auth actions
var auth_actions_1 = require("../_actions/auth.actions");
var index_1 = require("../_services/index");
var environment_1 = require("../../../../environments/environment");
var auth_selectors_1 = require("../_selectors/auth.selectors");
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, router, auth, store) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.auth = auth;
        this.store = store;
        this.login$ = this.actions$.pipe(effects_1.ofType(auth_actions_1.AuthActionTypes.Login), operators_1.tap(function (action) {
            localStorage.setItem(environment_1.environment.authTokenKey, action.payload.authToken);
            _this.store.dispatch(new auth_actions_1.UserRequested());
        }));
        this.logout$ = this.actions$.pipe(effects_1.ofType(auth_actions_1.AuthActionTypes.Logout), operators_1.tap(function () {
            localStorage.removeItem(environment_1.environment.authTokenKey);
            _this.router.navigate(['/auth/login'], { queryParams: { returnUrl: _this.returnUrl } });
        }));
        this.register$ = this.actions$.pipe(effects_1.ofType(auth_actions_1.AuthActionTypes.Register), operators_1.tap(function (action) {
            localStorage.setItem(environment_1.environment.authTokenKey, action.payload.authToken);
        }));
        this.loadUser$ = this.actions$
            .pipe(effects_1.ofType(auth_actions_1.AuthActionTypes.UserRequested), operators_1.withLatestFrom(this.store.pipe(store_1.select(auth_selectors_1.isUserLoaded))), operators_1.filter(function (_a) {
            var action = _a[0], _isUserLoaded = _a[1];
            return !_isUserLoaded;
        }), operators_1.mergeMap(function (_a) {
            var action = _a[0], _isUserLoaded = _a[1];
            return _this.auth.getUserByToken();
        }), operators_1.tap(function (_user) {
            if (_user) {
                _this.store.dispatch(new auth_actions_1.UserLoaded({ user: _user }));
            }
            else {
                _this.store.dispatch(new auth_actions_1.Logout());
            }
        }));
        this.init$ = rxjs_1.defer(function () {
            var userToken = localStorage.getItem(environment_1.environment.authTokenKey);
            var observableResult = rxjs_1.of({ type: 'NO_ACTION' });
            if (userToken) {
                observableResult = rxjs_1.of(new auth_actions_1.Login({ authToken: userToken }));
            }
            return observableResult;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.returnUrl = event.url;
            }
        });
    }
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "logout$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "register$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loadUser$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", rxjs_1.Observable)
    ], AuthEffects.prototype, "init$", void 0);
    AuthEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            router_1.Router,
            index_1.AuthService,
            store_1.Store])
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
//# sourceMappingURL=auth.effects.js.map