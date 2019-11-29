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
var router_1 = require("@angular/router");
// Object-Path
var objectPath = require("object-path");
// Loading bar
var core_2 = require("@ngx-loading-bar/core");
// Layout
var layout_1 = require("../../../../core/_base/layout");
// HTML Class Service
var html_class_service_1 = require("../html-class.service");
var HeaderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param router: Router
     * @param layoutRefService: LayoutRefService
     * @param layoutConfigService: LayoutConfigService
     * @param loader: LoadingBarService
     * @param htmlClassService: HtmlClassService
     */
    function HeaderComponent(router, layoutRefService, layoutConfigService, loader, htmlClassService) {
        var _this = this;
        this.router = router;
        this.layoutRefService = layoutRefService;
        this.layoutConfigService = layoutConfigService;
        this.loader = loader;
        this.htmlClassService = htmlClassService;
        // page progress bar percentage
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                // set page progress bar loading to start on NavigationStart event router
                _this.loader.start();
            }
            if (event instanceof router_1.RouteConfigLoadStart) {
                _this.loader.increment(35);
            }
            if (event instanceof router_1.RouteConfigLoadEnd) {
                _this.loader.increment(75);
            }
            if (event instanceof router_1.NavigationEnd || event instanceof router_1.NavigationCancel) {
                // set page progress bar loading to end on NavigationEnd event router
                _this.loader.complete();
            }
        });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    HeaderComponent.prototype.ngOnInit = function () {
        var config = this.layoutConfigService.getConfig();
        // get menu header display option
        this.menuHeaderDisplay = objectPath.get(config, 'header.menu.self.display');
        // animate the header minimize the height on scroll down
        if (objectPath.get(config, 'header.self.fixed.desktop.enabled') || objectPath.get(config, 'header.self.fixed.desktop')) {
            // header minimize on scroll down
            this.ktHeader.nativeElement.setAttribute('data-ktheader-minimize', '1');
        }
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        // keep header element in the service
        this.layoutRefService.addElement('header', this.ktHeader.nativeElement);
    };
    __decorate([
        core_1.ViewChild('ktHeader'),
        __metadata("design:type", core_1.ElementRef)
    ], HeaderComponent.prototype, "ktHeader", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'kt-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            layout_1.LayoutRefService,
            layout_1.LayoutConfigService,
            core_2.LoadingBarService,
            html_class_service_1.HtmlClassService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map