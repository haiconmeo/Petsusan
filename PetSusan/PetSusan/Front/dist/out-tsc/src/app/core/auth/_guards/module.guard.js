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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// NGRX
var store_1 = require("@ngrx/store");
var auth_selectors_1 = require("../_selectors/auth.selectors");
var lodash_1 = require("lodash");
var ModuleGuard = /** @class */ (function () {
    function ModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    ModuleGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var moduleName = route.data['moduleName'];
        if (!moduleName) {
            return rxjs_1.of(false);
        }
        return this.store
            .pipe(store_1.select(auth_selectors_1.currentUserPermissions), operators_1.map(function (permissions) {
            var _perm = lodash_1.find(permissions, function (elem) {
                return elem.title.toLocaleLowerCase() === moduleName.toLocaleLowerCase();
            });
            return _perm ? true : false;
        }), operators_1.tap(function (hasAccess) {
            if (!hasAccess) {
                _this.router.navigateByUrl('/error/403');
            }
        }));
    };
    ModuleGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store, router_1.Router])
    ], ModuleGuard);
    return ModuleGuard;
}());
exports.ModuleGuard = ModuleGuard;
//# sourceMappingURL=module.guard.js.map