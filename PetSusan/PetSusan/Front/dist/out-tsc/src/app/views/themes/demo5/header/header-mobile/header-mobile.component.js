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
// Layout
var layout_1 = require("../../../../../core/_base/layout");
var HeaderMobileComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function HeaderMobileComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        this.toggleOptions = {
            target: 'body',
            targetState: 'kt-header__topbar--mobile-on',
            togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    HeaderMobileComponent.prototype.ngOnInit = function () {
        this.headerLogo = this.layoutConfigService.getLogo();
        this.asideDisplay = this.layoutConfigService.getConfig('aside.self.display');
    };
    HeaderMobileComponent = __decorate([
        core_1.Component({
            selector: 'kt-header-mobile',
            templateUrl: './header-mobile.component.html',
            styleUrls: ['./header-mobile.component.scss']
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService])
    ], HeaderMobileComponent);
    return HeaderMobileComponent;
}());
exports.HeaderMobileComponent = HeaderMobileComponent;
//# sourceMappingURL=header-mobile.component.js.map