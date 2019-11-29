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
var common_1 = require("@angular/common");
// NgBootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Core Module
var core_module_1 = require("../../../core/core.module");
var partials_module_1 = require("../../partials/partials.module");
var dashboard_component_1 = require("./dashboard.component");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                partials_module_1.PartialsModule,
                core_module_1.CoreModule,
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: dashboard_component_1.DashboardComponent
                    },
                ]),
            ],
            providers: [],
            declarations: [
                dashboard_component_1.DashboardComponent,
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map