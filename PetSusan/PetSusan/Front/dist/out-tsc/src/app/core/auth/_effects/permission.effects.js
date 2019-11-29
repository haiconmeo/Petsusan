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
// Services
var _services_1 = require("../_services");
// Actions
var permission_actions_1 = require("../_actions/permission.actions");
var PermissionEffects = /** @class */ (function () {
    function PermissionEffects(actions$, auth) {
        var _this = this;
        this.actions$ = actions$;
        this.auth = auth;
        this.loadAllPermissions$ = this.actions$
            .pipe(effects_1.ofType(permission_actions_1.PermissionActionTypes.AllPermissionsRequested), operators_1.mergeMap(function () { return _this.auth.getAllPermissions(); }), operators_1.map(function (result) {
            return new permission_actions_1.AllPermissionsLoaded({
                permissions: result
            });
        }));
        this.init$ = rxjs_1.defer(function () {
            return rxjs_1.of(new permission_actions_1.AllPermissionsRequested());
        });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], PermissionEffects.prototype, "loadAllPermissions$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", rxjs_1.Observable)
    ], PermissionEffects.prototype, "init$", void 0);
    PermissionEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, _services_1.AuthService])
    ], PermissionEffects);
    return PermissionEffects;
}());
exports.PermissionEffects = PermissionEffects;
//# sourceMappingURL=permission.effects.js.map