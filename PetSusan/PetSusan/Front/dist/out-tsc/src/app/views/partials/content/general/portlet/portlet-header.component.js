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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var layout_1 = require("../../../../../core/_base/layout");
// Angular
var core_1 = require("@angular/core");
// RXJS
var rxjs_1 = require("rxjs");
var PortletHeaderComponent = /** @class */ (function () {
    function PortletHeaderComponent(el, platformId, ktDialogService) {
        this.el = el;
        this.platformId = platformId;
        this.ktDialogService = ktDialogService;
        this.viewLoading = false;
        this.classes = 'kt-portlet__head';
        this.lastScrollTop = 0;
        this.subscriptions = [];
        this.isScrollDown = false;
        this.stickyDirective = new layout_1.StickyDirective(this.el, this.platformId);
    }
    PortletHeaderComponent.prototype.onResize = function () {
        this.updateStickyPosition();
    };
    PortletHeaderComponent.prototype.onScroll = function () {
        this.updateStickyPosition();
        var st = window.pageYOffset || document.documentElement.scrollTop;
        this.isScrollDown = st > this.lastScrollTop;
        this.lastScrollTop = st <= 0 ? 0 : st;
    };
    PortletHeaderComponent.prototype.updateStickyPosition = function () {
        var _this = this;
        if (this.sticky) {
            Promise.resolve(null).then(function () {
                // get boundary top margin for sticky header
                var headerElement = document.querySelector('.kt-header');
                var subheaderElement = document.querySelector('.kt-subheader');
                var headerMobileElement = document.querySelector('.kt-header-mobile');
                var height = 0;
                // mobile header
                if (window.getComputedStyle(headerElement).height === '0px') {
                    height += headerMobileElement.offsetHeight;
                }
                else {
                    // desktop header
                    if (document.body.classList.contains('kt-header--minimize-topbar')) {
                        // hardcoded minimized header height
                        height = 60;
                    }
                    else {
                        // normal fixed header
                        if (document.body.classList.contains('kt-header--fixed')) {
                            height += headerElement.offsetHeight;
                        }
                        if (document.body.classList.contains('kt-subheader--fixed')) {
                            height += subheaderElement.offsetHeight;
                        }
                    }
                }
                _this.stickyDirective.marginTop = height;
            });
        }
    };
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    PortletHeaderComponent.prototype.ngOnInit = function () {
        if (this.sticky) {
            this.stickyDirective.ngOnInit();
        }
        // append custom class
        this.classes += this.class ? ' ' + this.class : '';
        // hide icon's parent node if no icon provided
        this.hideIcon = this.refIcon.nativeElement.children.length === 0;
        // hide tools' parent node if no tools template is provided
        this.hideTools = this.refTools.nativeElement.children.length === 0;
    };
    PortletHeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.sticky) {
            this.updateStickyPosition();
            this.stickyDirective.ngAfterViewInit();
        }
        // initialize loading dialog
        if (this.viewLoading$) {
            var loadingSubscription = this.viewLoading$.subscribe(function (res) { return _this.toggleLoading(res); });
            this.subscriptions.push(loadingSubscription);
        }
    };
    PortletHeaderComponent.prototype.toggleLoading = function (_incomingValue) {
        this.viewLoading = _incomingValue;
        if (_incomingValue && !this.ktDialogService.checkIsShown()) {
            this.ktDialogService.show();
        }
        if (!this.viewLoading && this.ktDialogService.checkIsShown()) {
            this.ktDialogService.hide();
        }
    };
    PortletHeaderComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
        if (this.sticky) {
            this.stickyDirective.ngOnDestroy();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PortletHeaderComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PortletHeaderComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PortletHeaderComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PortletHeaderComponent.prototype, "noTitle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PortletHeaderComponent.prototype, "sticky", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.Observable)
    ], PortletHeaderComponent.prototype, "viewLoading$", void 0);
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", String)
    ], PortletHeaderComponent.prototype, "classes", void 0);
    __decorate([
        core_1.HostBinding('attr.ktSticky'),
        __metadata("design:type", layout_1.StickyDirective)
    ], PortletHeaderComponent.prototype, "stickyDirective", void 0);
    __decorate([
        core_1.ViewChild('refIcon'),
        __metadata("design:type", core_1.ElementRef)
    ], PortletHeaderComponent.prototype, "refIcon", void 0);
    __decorate([
        core_1.ViewChild('refTools'),
        __metadata("design:type", core_1.ElementRef)
    ], PortletHeaderComponent.prototype, "refTools", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PortletHeaderComponent.prototype, "onResize", null);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PortletHeaderComponent.prototype, "onScroll", null);
    PortletHeaderComponent = __decorate([
        core_1.Component({
            selector: 'kt-portlet-header',
            styleUrls: ['portlet-header.component.scss'],
            template: "\n\t\t<div class=\"kt-portlet__head-label\" [hidden]=\"noTitle\">\n\t\t\t<span class=\"kt-portlet__head-icon\" #refIcon [hidden]=\"hideIcon\">\n\t\t\t\t<ng-content *ngIf=\"!icon\" select=\"[ktPortletIcon]\"></ng-content>\n\t\t\t\t<i *ngIf=\"icon\" [ngClass]=\"icon\"></i>\n\t\t\t</span>\n\t\t\t<ng-content *ngIf=\"!title\" select=\"[ktPortletTitle]\"></ng-content>\n\t\t\t<h3 *ngIf=\"title\" class=\"kt-portlet__head-title\" [innerHTML]=\"title\"></h3>\n\t\t</div>\n\t\t<div class=\"kt-portlet__head-toolbar\" #refTools [hidden]=\"hideTools\">\n\t\t\t<ng-content select=\"[ktPortletTools]\"></ng-content>\n\t\t</div>"
        }),
        __param(1, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [core_1.ElementRef, String, layout_1.KtDialogService])
    ], PortletHeaderComponent);
    return PortletHeaderComponent;
}());
exports.PortletHeaderComponent = PortletHeaderComponent;
//# sourceMappingURL=portlet-header.component.js.map