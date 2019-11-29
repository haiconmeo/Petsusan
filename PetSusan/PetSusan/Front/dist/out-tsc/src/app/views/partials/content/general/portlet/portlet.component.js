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
// Loading bar
var core_2 = require("@ngx-loading-bar/core");
// RxJS
var rxjs_1 = require("rxjs");
// Portlet
var portlet_body_component_1 = require("./portlet-body.component");
var portlet_header_component_1 = require("./portlet-header.component");
var portlet_footer_component_1 = require("./portlet-footer.component");
// Layout
var layout_1 = require("../../../../../core/_base/layout");
var PortletComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param el: ElementRef
     * @param loader: LoadingBarService
     * @param layoutConfigService: LayoutConfigService
     */
    function PortletComponent(el, loader, layoutConfigService) {
        this.el = el;
        this.loader = loader;
        this.layoutConfigService = layoutConfigService;
        this.loader.complete();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    PortletComponent.prototype.ngOnInit = function () {
    };
    /**
     * After view init
     */
    PortletComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.Observable)
    ], PortletComponent.prototype, "loading$", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PortletComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PortletComponent.prototype, "class", void 0);
    __decorate([
        core_1.ViewChild('portlet'),
        __metadata("design:type", core_1.ElementRef)
    ], PortletComponent.prototype, "portlet", void 0);
    __decorate([
        core_1.ViewChild(portlet_header_component_1.PortletHeaderComponent),
        __metadata("design:type", portlet_header_component_1.PortletHeaderComponent)
    ], PortletComponent.prototype, "header", void 0);
    __decorate([
        core_1.ViewChild(portlet_body_component_1.PortletBodyComponent),
        __metadata("design:type", portlet_body_component_1.PortletBodyComponent)
    ], PortletComponent.prototype, "body", void 0);
    __decorate([
        core_1.ViewChild(portlet_footer_component_1.PortletFooterComponent),
        __metadata("design:type", portlet_footer_component_1.PortletFooterComponent)
    ], PortletComponent.prototype, "footer", void 0);
    PortletComponent = __decorate([
        core_1.Component({
            selector: 'kt-portlet',
            templateUrl: './portlet.component.html',
            exportAs: 'ktPortlet'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_2.LoadingBarService,
            layout_1.LayoutConfigService])
    ], PortletComponent);
    return PortletComponent;
}());
exports.PortletComponent = PortletComponent;
//# sourceMappingURL=portlet.component.js.map