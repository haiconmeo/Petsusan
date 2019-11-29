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
var tabs_1 = require("@angular/material/tabs");
var expansion_1 = require("@angular/material/expansion");
var card_1 = require("@angular/material/card");
var icon_1 = require("@angular/material/icon");
var ngx_clipboard_1 = require("ngx-clipboard");
// NgBootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Perfect ScrollBar
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var material_preview_component_1 = require("./material-preview.component");
// Core Module
var core_module_1 = require("../../../../../core/core.module");
var portlet_module_1 = require("../portlet/portlet.module");
// Highlight JS
var ngx_highlightjs_1 = require("ngx-highlightjs");
var MaterialPreviewModule = /** @class */ (function () {
    function MaterialPreviewModule() {
    }
    MaterialPreviewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule,
                core_module_1.CoreModule,
                ngx_highlightjs_1.HighlightModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                portlet_module_1.PortletModule,
                ngx_clipboard_1.ClipboardModule,
                // material modules
                tabs_1.MatTabsModule,
                expansion_1.MatExpansionModule,
                card_1.MatCardModule,
                icon_1.MatIconModule,
            ],
            exports: [material_preview_component_1.MaterialPreviewComponent],
            declarations: [material_preview_component_1.MaterialPreviewComponent]
        })
    ], MaterialPreviewModule);
    return MaterialPreviewModule;
}());
exports.MaterialPreviewModule = MaterialPreviewModule;
//# sourceMappingURL=material-preview.module.js.map