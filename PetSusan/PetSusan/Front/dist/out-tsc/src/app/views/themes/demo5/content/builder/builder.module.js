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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
// NgBootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Perfect Scrollbar
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
// Partials
var partials_module_1 = require("../../../../partials/partials.module");
// Highlight JS
var ngx_highlightjs_1 = require("ngx-highlightjs");
// CoreModule
var core_module_1 = require("../../../../../core/core.module");
// Builder component
var builder_component_1 = require("./builder.component");
var BuilderModule = /** @class */ (function () {
    function BuilderModule() {
    }
    BuilderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                partials_module_1.PartialsModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                material_1.MatTabsModule,
                core_module_1.CoreModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ngx_highlightjs_1.HighlightModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: builder_component_1.BuilderComponent
                    }
                ])
            ],
            providers: [],
            declarations: [builder_component_1.BuilderComponent]
        })
    ], BuilderModule);
    return BuilderModule;
}());
exports.BuilderModule = BuilderModule;
//# sourceMappingURL=builder.module.js.map