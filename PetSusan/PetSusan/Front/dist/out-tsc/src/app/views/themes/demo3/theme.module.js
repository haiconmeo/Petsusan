"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ngx_permissions_1 = require("ngx-permissions");
// Angular
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
// NgBootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Translation
var core_2 = require("@ngx-translate/core");
// Loading bar
var core_3 = require("@ngx-loading-bar/core");
// NGRX
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
// Ngx DatePicker
var ngx_daterangepicker_material_1 = require("ngx-daterangepicker-material");
// Perfect Scrollbar
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
// SVG inline
var ng_inline_svg_1 = require("ng-inline-svg");
// Core Module
var core_module_1 = require("../../../core/core.module");
var header_component_1 = require("./header/header.component");
var aside_left_component_1 = require("./aside/aside-left.component");
var aside_secondary_component_1 = require("./aside/aside-secondary/aside-secondary.component");
var footer_component_1 = require("./footer/footer.component");
var subheader_component_1 = require("./subheader/subheader.component");
var brand_component_1 = require("./aside/brand/brand.component");
var topbar_component_1 = require("./header/topbar/topbar.component");
var menu_horizontal_component_1 = require("./header/menu-horizontal/menu-horizontal.component");
var partials_module_1 = require("../../partials/partials.module");
var base_component_1 = require("./base/base.component");
var pages_routing_module_1 = require("./pages-routing.module");
var pages_module_1 = require("../../pages/pages.module");
var html_class_service_1 = require("./html-class.service");
var header_mobile_component_1 = require("./header/header-mobile/header-mobile.component");
var error_page_component_1 = require("./content/error-page/error-page.component");
var auth_1 = require("../../../core/auth");
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        core_1.NgModule({
            declarations: [
                base_component_1.BaseComponent,
                footer_component_1.FooterComponent,
                // headers
                header_component_1.HeaderComponent,
                brand_component_1.BrandComponent,
                header_mobile_component_1.HeaderMobileComponent,
                // subheader
                subheader_component_1.SubheaderComponent,
                // topbar components
                topbar_component_1.TopbarComponent,
                // aside left menu components
                aside_left_component_1.AsideLeftComponent,
                aside_secondary_component_1.AsideSecondaryComponent,
                // horizontal menu components
                menu_horizontal_component_1.MenuHorizontalComponent,
                error_page_component_1.ErrorPageComponent,
            ],
            exports: [
                base_component_1.BaseComponent,
                footer_component_1.FooterComponent,
                // headers
                header_component_1.HeaderComponent,
                brand_component_1.BrandComponent,
                header_mobile_component_1.HeaderMobileComponent,
                // subheader
                subheader_component_1.SubheaderComponent,
                // topbar components
                topbar_component_1.TopbarComponent,
                // aside left menu components
                aside_left_component_1.AsideLeftComponent,
                aside_secondary_component_1.AsideSecondaryComponent,
                // horizontal menu components
                menu_horizontal_component_1.MenuHorizontalComponent,
                error_page_component_1.ErrorPageComponent,
            ],
            providers: [
                html_class_service_1.HtmlClassService,
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ngx_permissions_1.NgxPermissionsModule.forChild(),
                store_1.StoreModule.forFeature('roles', auth_1.rolesReducer),
                store_1.StoreModule.forFeature('permissions', auth_1.permissionsReducer),
                effects_1.EffectsModule.forFeature([auth_1.PermissionEffects, auth_1.RoleEffects]),
                pages_routing_module_1.PagesRoutingModule,
                pages_module_1.PagesModule,
                partials_module_1.PartialsModule,
                core_module_1.CoreModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule,
                material_1.MatProgressBarModule,
                material_1.MatTabsModule,
                material_1.MatButtonModule,
                material_1.MatTooltipModule,
                core_2.TranslateModule.forChild(),
                core_3.LoadingBarModule,
                ngx_daterangepicker_material_1.NgxDaterangepickerMd,
                ng_inline_svg_1.InlineSVGModule
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());
exports.ThemeModule = ThemeModule;
//# sourceMappingURL=theme.module.js.map