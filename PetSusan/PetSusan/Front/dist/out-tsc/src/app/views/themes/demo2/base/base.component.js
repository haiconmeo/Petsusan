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
// Object-Path
var objectPath = require("object-path");
// Layout
var layout_1 = require("../../../../core/_base/layout");
var html_class_service_1 = require("../html-class.service");
var layout_config_1 = require("../../../../core/_config/demo2/layout.config");
var menu_config_1 = require("../../../../core/_config/demo2/menu.config");
var page_config_1 = require("../../../../core/_config/demo2/page.config");
// User permissions
var ngx_permissions_1 = require("ngx-permissions");
var auth_1 = require("../../../../core/auth");
var store_1 = require("@ngrx/store");
var BaseComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param menuConfigService: MenuConfifService
     * @param pageConfigService: PageConfigService
     * @param htmlClassService: HtmlClassService
     */
    function BaseComponent(layoutConfigService, menuConfigService, pageConfigService, htmlClassService, store, permissionsService) {
        var _this = this;
        this.layoutConfigService = layoutConfigService;
        this.menuConfigService = menuConfigService;
        this.pageConfigService = pageConfigService;
        this.htmlClassService = htmlClassService;
        this.store = store;
        this.permissionsService = permissionsService;
        // Private properties
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.loadRolesWithPermissions();
        // register configs by demos
        this.layoutConfigService.loadConfigs(new layout_config_1.LayoutConfig().configs);
        this.menuConfigService.loadConfigs(new menu_config_1.MenuConfig().configs);
        this.pageConfigService.loadConfigs(new page_config_1.PageConfig().configs);
        // setup element classes
        this.htmlClassService.setConfig(this.layoutConfigService.getConfig());
        var layoutSubdscription = this.layoutConfigService.onConfigUpdated$.subscribe(function (layoutConfig) {
            // reset body class based on global and page level layout config, refer to html-class.service.ts
            document.body.className = '';
            _this.htmlClassService.setConfig(layoutConfig);
        });
        this.unsubscribe.push(layoutSubdscription);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.layoutConfigService.getConfig();
        this.selfLayout = objectPath.get(config, 'self.layout');
        this.asideDisplay = objectPath.get(config, 'aside.self.display');
        this.subheaderDisplay = objectPath.get(config, 'subheader.display');
        // let the layout type change
        var layoutConfigSubscription = this.layoutConfigService.onConfigUpdated$.subscribe(function (cfg) {
            setTimeout(function () {
                _this.selfLayout = objectPath.get(cfg, 'self.layout');
            });
        });
        this.unsubscribe.push(layoutConfigSubscription);
    };
    /**
     * On destroy
     */
    BaseComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * NGX Permissions, init roles
     */
    BaseComponent.prototype.loadRolesWithPermissions = function () {
        var _this = this;
        this.currentUserPermissions$ = this.store.pipe(store_1.select(auth_1.currentUserPermissions));
        var subscr = this.currentUserPermissions$.subscribe(function (res) {
            if (!res || res.length === 0) {
                return;
            }
            _this.permissionsService.flushPermissions();
            res.forEach(function (pm) { return _this.permissionsService.addPermission(pm.name); });
        });
        this.unsubscribe.push(subscr);
    };
    BaseComponent = __decorate([
        core_1.Component({
            selector: 'kt-base',
            templateUrl: './base.component.html',
            styleUrls: ['./base.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService,
            layout_1.MenuConfigService,
            layout_1.PageConfigService,
            html_class_service_1.HtmlClassService,
            store_1.Store,
            ngx_permissions_1.NgxPermissionsService])
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map