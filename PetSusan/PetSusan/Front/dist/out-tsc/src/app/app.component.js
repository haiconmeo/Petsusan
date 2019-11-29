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
// Layout
var layout_1 = require("./core/_base/layout");
// Layout
var layout_2 = require("./core/_base/layout");
// language list
var en_1 = require("./core/_config/i18n/en");
var ch_1 = require("./core/_config/i18n/ch");
var es_1 = require("./core/_config/i18n/es");
var jp_1 = require("./core/_config/i18n/jp");
var de_1 = require("./core/_config/i18n/de");
var fr_1 = require("./core/_config/i18n/fr");
var AppComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param translationService: TranslationService
     * @param router: Router
     * @param layoutConfigService: LayoutCongifService
     * @param splashScreenService: SplashScreenService
     */
    function AppComponent(translationService, router, layoutConfigService, splashScreenService) {
        this.translationService = translationService;
        this.router = router;
        this.layoutConfigService = layoutConfigService;
        this.splashScreenService = splashScreenService;
        // Public properties
        this.title = 'Metronic';
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        // register translations
        this.translationService.loadTranslations(en_1.locale, ch_1.locale, es_1.locale, jp_1.locale, de_1.locale, fr_1.locale);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // enable/disable loader
        this.loader = this.layoutConfigService.getConfig('loader.enabled');
        var routerSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                // hide splash screen
                _this.splashScreenService.hide();
                // scroll to top on every route change
                window.scrollTo(0, 0);
            }
        });
        this.unsubscribe.push(routerSubscription);
    };
    /**
     * On Destroy
     */
    AppComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.forEach(function (sb) { return sb.unsubscribe(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'body[kt-root]',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [layout_2.TranslationService,
            router_1.Router,
            layout_1.LayoutConfigService,
            layout_1.SplashScreenService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map