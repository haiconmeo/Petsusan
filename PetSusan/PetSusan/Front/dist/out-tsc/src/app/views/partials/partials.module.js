"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
// NgBootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Perfect Scrollbar
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
// Core module
var core_module_1 = require("../../core/core.module");
// CRUD Partials
var crud_1 = require("./content/crud");
// Layout partials
var layout_1 = require("./layout");
// General
var notice_component_1 = require("./content/general/notice/notice.component");
var portlet_module_1 = require("./content/general/portlet/portlet.module");
// Errpr
var error_component_1 = require("./content/general/error/error.component");
// Extra module
var widget_module_1 = require("./content/widgets/widget.module");
// SVG inline
var ng_inline_svg_1 = require("ng-inline-svg");
var cart_component_1 = require("./layout/topbar/cart/cart.component");
var PartialsModule = /** @class */ (function () {
    function PartialsModule() {
    }
    PartialsModule = __decorate([
        core_1.NgModule({
            declarations: [
                layout_1.ScrollTopComponent,
                notice_component_1.NoticeComponent,
                crud_1.ActionNotificationComponent,
                crud_1.DeleteEntityDialogComponent,
                crud_1.FetchEntityDialogComponent,
                crud_1.UpdateStatusDialogComponent,
                crud_1.AlertComponent,
                // topbar components
                layout_1.ContextMenu2Component,
                layout_1.ContextMenuComponent,
                layout_1.QuickPanelComponent,
                layout_1.ScrollTopComponent,
                layout_1.SearchResultComponent,
                layout_1.SplashScreenComponent,
                layout_1.StickyToolbarComponent,
                layout_1.Subheader1Component,
                layout_1.Subheader2Component,
                layout_1.Subheader3Component,
                layout_1.Subheader4Component,
                layout_1.Subheader5Component,
                layout_1.LanguageSelectorComponent,
                layout_1.NotificationComponent,
                layout_1.QuickActionComponent,
                layout_1.SearchDefaultComponent,
                layout_1.SearchDropdownComponent,
                layout_1.UserProfileComponent,
                layout_1.UserProfile2Component,
                layout_1.UserProfile3Component,
                cart_component_1.CartComponent,
                error_component_1.ErrorComponent,
            ],
            exports: [
                widget_module_1.WidgetModule,
                portlet_module_1.PortletModule,
                layout_1.ScrollTopComponent,
                notice_component_1.NoticeComponent,
                crud_1.ActionNotificationComponent,
                crud_1.DeleteEntityDialogComponent,
                crud_1.FetchEntityDialogComponent,
                crud_1.UpdateStatusDialogComponent,
                crud_1.AlertComponent,
                // topbar components
                layout_1.ContextMenu2Component,
                layout_1.ContextMenuComponent,
                layout_1.QuickPanelComponent,
                layout_1.ScrollTopComponent,
                layout_1.SearchResultComponent,
                layout_1.SplashScreenComponent,
                layout_1.StickyToolbarComponent,
                layout_1.Subheader1Component,
                layout_1.Subheader2Component,
                layout_1.Subheader3Component,
                layout_1.Subheader4Component,
                layout_1.Subheader5Component,
                layout_1.LanguageSelectorComponent,
                layout_1.NotificationComponent,
                layout_1.QuickActionComponent,
                layout_1.SearchDefaultComponent,
                layout_1.SearchDropdownComponent,
                layout_1.UserProfileComponent,
                layout_1.UserProfile2Component,
                layout_1.UserProfile3Component,
                cart_component_1.CartComponent,
                error_component_1.ErrorComponent,
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ng_inline_svg_1.InlineSVGModule,
                core_module_1.CoreModule,
                portlet_module_1.PortletModule,
                widget_module_1.WidgetModule,
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatSelectModule,
                material_1.MatInputModule,
                material_1.MatTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatRadioModule,
                material_1.MatIconModule,
                material_1.MatNativeDateModule,
                material_1.MatProgressBarModule,
                material_1.MatDatepickerModule,
                material_1.MatCardModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatCheckboxModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatSnackBarModule,
                material_1.MatTabsModule,
                material_1.MatTooltipModule,
                material_1.MatDialogModule,
            ]
        })
    ], PartialsModule);
    return PartialsModule;
}());
exports.PartialsModule = PartialsModule;
//# sourceMappingURL=partials.module.js.map