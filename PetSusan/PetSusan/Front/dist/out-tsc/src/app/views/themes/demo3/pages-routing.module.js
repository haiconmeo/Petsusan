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
// Components
var base_component_1 = require("./base/base.component");
var error_page_component_1 = require("./content/error-page/error-page.component");
// Auth
var auth_1 = require("../../../core/auth");
var routes = [
    {
        path: '',
        component: base_component_1.BaseComponent,
        canActivate: [auth_1.AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/views/pages/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'mail',
                loadChildren: 'app/views/pages/apps/mail/mail.module#MailModule'
            },
            {
                path: 'ecommerce',
                loadChildren: 'app/views/pages/apps/e-commerce/e-commerce.module#ECommerceModule',
            },
            {
                path: 'ngbootstrap',
                loadChildren: 'app/views/pages/ngbootstrap/ngbootstrap.module#NgbootstrapModule'
            },
            {
                path: 'material',
                loadChildren: 'app/views/pages/material/material.module#MaterialModule'
            },
            {
                path: 'user-management',
                loadChildren: 'app/views/pages/user-management/user-management.module#UserManagementModule'
            },
            {
                path: 'builder',
                loadChildren: 'app/views/themes/demo3/content/builder/builder.module#BuilderModule'
            },
            {
                path: 'error/403',
                component: error_page_component_1.ErrorPageComponent,
                data: {
                    'type': 'error-v6',
                    'code': 403,
                    'title': '403... Access forbidden',
                    'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
                }
            },
            { path: 'error/:type', component: error_page_component_1.ErrorPageComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());
exports.PagesRoutingModule = PagesRoutingModule;
//# sourceMappingURL=pages-routing.module.js.map