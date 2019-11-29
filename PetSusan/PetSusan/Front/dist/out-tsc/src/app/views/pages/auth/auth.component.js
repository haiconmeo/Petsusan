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
var layout_1 = require("../../../core/_base/layout");
// Auth
var auth_1 = require("../../../core/auth");
var AuthComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param el
     * @param render
     * @param layoutConfigService: LayoutConfigService
     * @param authNoticeService: authNoticeService
     * @param translationService: TranslationService
     * @param splashScreenService: SplashScreenService
     */
    function AuthComponent(el, render, layoutConfigService, authNoticeService, translationService, splashScreenService) {
        this.el = el;
        this.render = render;
        this.layoutConfigService = layoutConfigService;
        this.authNoticeService = authNoticeService;
        this.translationService = translationService;
        this.splashScreenService = splashScreenService;
        // Public properties
        this.today = Date.now();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AuthComponent.prototype.ngOnInit = function () {
        this.translationService.setLanguage(this.translationService.getSelectedLanguage());
        this.headerLogo = this.layoutConfigService.getLogo();
        this.splashScreenService.hide();
        // load default styles
        this.loadCSS('./assets/css/demo1/style.bundle.css');
    };
    /**
     * Load CSS for this specific page only, and destroy when navigate away
     * @param styleUrl
     */
    AuthComponent.prototype.loadCSS = function (styleUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var styleElement = document.createElement('link');
            styleElement.href = styleUrl;
            styleElement.type = 'text/css';
            styleElement.rel = 'stylesheet';
            styleElement.onload = resolve;
            _this.render.appendChild(_this.el.nativeElement, styleElement);
        });
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'kt-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2,
            layout_1.LayoutConfigService,
            auth_1.AuthNoticeService,
            layout_1.TranslationService,
            layout_1.SplashScreenService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map