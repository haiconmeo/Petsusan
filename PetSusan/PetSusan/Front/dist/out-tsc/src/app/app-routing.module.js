"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    { path: 'auth', loadChildren: 'app/views/pages/auth/auth.module#AuthModule' },
    // enable this router to set which demo theme to load,
    // leave the path value empty to enter into nested router in ThemeModule
    // {path: '', loadChildren: 'app/views/themes/demo1/theme.module#ThemeModule'},
    /** START: remove this themes list on production */
    { path: '', redirectTo: 'demo1', pathMatch: 'full' },
    // list of routers specified by demos, for demo purpose only!
    { path: 'demo1', loadChildren: 'app/views/themes/demo1/theme.module#ThemeModule' },
    { path: 'demo2', loadChildren: 'app/views/themes/demo2/theme.module#ThemeModule' },
    { path: 'demo3', loadChildren: 'app/views/themes/demo3/theme.module#ThemeModule' },
    { path: 'demo4', loadChildren: 'app/views/themes/demo4/theme.module#ThemeModule' },
    { path: 'demo5', loadChildren: 'app/views/themes/demo5/theme.module#ThemeModule' },
    /** END: themes list end */
    { path: '**', redirectTo: 'demo1/error/403', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map