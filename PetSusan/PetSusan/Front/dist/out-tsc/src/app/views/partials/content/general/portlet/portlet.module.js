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
var material_1 = require("@angular/material");
// Module
var core_module_1 = require("../../../../../core/core.module");
// Portlet
var portlet_component_1 = require("./portlet.component");
var portlet_header_component_1 = require("./portlet-header.component");
var portlet_body_component_1 = require("./portlet-body.component");
var portlet_footer_component_1 = require("./portlet-footer.component");
var PortletModule = /** @class */ (function () {
    function PortletModule() {
    }
    PortletModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                core_module_1.CoreModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatProgressBarModule
            ],
            declarations: [
                portlet_component_1.PortletComponent,
                portlet_header_component_1.PortletHeaderComponent,
                portlet_body_component_1.PortletBodyComponent,
                portlet_footer_component_1.PortletFooterComponent,
            ],
            exports: [
                portlet_component_1.PortletComponent,
                portlet_header_component_1.PortletHeaderComponent,
                portlet_body_component_1.PortletBodyComponent,
                portlet_footer_component_1.PortletFooterComponent,
            ]
        })
    ], PortletModule);
    return PortletModule;
}());
exports.PortletModule = PortletModule;
//# sourceMappingURL=portlet.module.js.map