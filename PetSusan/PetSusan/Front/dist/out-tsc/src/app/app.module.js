"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var overlay_1 = require("@angular/cdk/overlay");
// Angular in memory
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
// NgBootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Perfect Scroll bar
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
// SVG inline
var ng_inline_svg_1 = require("ng-inline-svg");
// Env
var environment_1 = require("../environments/environment");
// Hammer JS
require("hammerjs");
// NGX Permissions
var ngx_permissions_1 = require("ngx-permissions");
// NGRX
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var router_store_1 = require("@ngrx/router-store");
var store_devtools_1 = require("@ngrx/store-devtools");
// State
var reducers_1 = require("./core/reducers");
// Copmponents
var app_component_1 = require("./app.component");
// Modules
var app_routing_module_1 = require("./app-routing.module");
var core_module_1 = require("./core/core.module");
// Partials
var partials_module_1 = require("./views/partials/partials.module");
// Services
var layout_1 = require("./core/_base/layout");
// Layout Services
var layout_2 = require("./core/_base/layout");
// Auth
var auth_module_1 = require("./views/pages/auth/auth.module");
var auth_1 = require("./core/auth");
// CRUD
var crud_1 = require("./core/_base/crud");
// Config
var layout_config_1 = require("./core/_config/demo1/layout.config");
// Highlight JS
var ngx_highlightjs_1 = require("ngx-highlightjs");
var typescript = require("highlight.js/lib/languages/typescript");
var scss = require("highlight.js/lib/languages/scss");
var xml = require("highlight.js/lib/languages/xml");
var json = require("highlight.js/lib/languages/json");
// tslint:disable-next-line:class-name
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelSpeed: 0.5,
    swipeEasing: true,
    minScrollbarLength: 40,
    maxScrollbarLength: 300,
};
function initializeLayoutConfig(appConfig) {
    // initialize app by loading default demo layout config
    return function () {
        if (appConfig.getConfig() === null) {
            appConfig.loadConfigs(new layout_config_1.LayoutConfig().configs);
        }
    };
}
exports.initializeLayoutConfig = initializeLayoutConfig;
function hljsLanguages() {
    return [
        { name: 'typescript', func: typescript },
        { name: 'scss', func: scss },
        { name: 'xml', func: xml },
        { name: 'json', func: json }
    ];
}
exports.hljsLanguages = hljsLanguages;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                environment_1.environment.isMockEnabled ? angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(layout_1.FakeApiService, {
                    passThruUnknownUrl: true,
                    dataEncapsulation: false
                }) : [],
                ngx_permissions_1.NgxPermissionsModule.forRoot(),
                partials_module_1.PartialsModule,
                core_module_1.CoreModule,
                overlay_1.OverlayModule,
                store_1.StoreModule.forRoot(reducers_1.reducers, { metaReducers: reducers_1.metaReducers }),
                effects_1.EffectsModule.forRoot([]),
                router_store_1.StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
                store_devtools_1.StoreDevtoolsModule.instrument(),
                auth_module_1.AuthModule.forRoot(),
                ng_bootstrap_1.NgbModule,
                core_2.TranslateModule.forRoot(),
                material_1.MatProgressSpinnerModule,
                ng_inline_svg_1.InlineSVGModule.forRoot()
            ],
            exports: [],
            providers: [
                auth_1.AuthService,
                layout_2.LayoutConfigService,
                layout_2.LayoutRefService,
                layout_2.MenuConfigService,
                layout_2.PageConfigService,
                layout_2.KtDialogService,
                layout_1.DataTableService,
                layout_2.SplashScreenService,
                {
                    provide: ngx_perfect_scrollbar_1.PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                {
                    provide: platform_browser_1.HAMMER_GESTURE_CONFIG,
                    useClass: material_1.GestureConfig
                },
                {
                    // layout config initializer
                    provide: core_1.APP_INITIALIZER,
                    useFactory: initializeLayoutConfig,
                    deps: [layout_2.LayoutConfigService], multi: true
                },
                {
                    provide: ngx_highlightjs_1.HIGHLIGHT_OPTIONS,
                    useValue: { languages: hljsLanguages }
                },
                // template services
                layout_2.SubheaderService,
                layout_2.MenuHorizontalService,
                layout_2.MenuAsideService,
                crud_1.HttpUtilsService,
                crud_1.TypesUtilsService,
                crud_1.LayoutUtilsService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map