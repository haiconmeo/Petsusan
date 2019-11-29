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
// RxJS
var operators_1 = require("rxjs/operators");
// Translate
var layout_1 = require("../../../../../core/_base/layout");
var LanguageSelectorComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param translationService: TranslationService
     * @param router: Router
     */
    function LanguageSelectorComponent(translationService, router) {
        this.translationService = translationService;
        this.router = router;
        // Public properties
        this.classes = '';
        this.languages = [
            {
                lang: 'en',
                name: 'English',
                flag: './assets/media/flags/012-uk.svg'
            },
            {
                lang: 'ch',
                name: 'Mandarin',
                flag: './assets/media/flags/015-china.svg'
            },
            {
                lang: 'es',
                name: 'Spanish',
                flag: './assets/media/flags/016-spain.svg'
            },
            {
                lang: 'jp',
                name: 'Japanese',
                flag: './assets/media/flags/014-japan.svg'
            },
            {
                lang: 'de',
                name: 'German',
                flag: './assets/media/flags/017-germany.svg'
            },
            {
                lang: 'fr',
                name: 'French',
                flag: './assets/media/flags/019-france.svg'
            },
        ];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    LanguageSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setSelectedLanguage();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationStart; }))
            .subscribe(function (event) {
            _this.setSelectedLanguage();
        });
    };
    /**
     * Set language
     *
     * @param lang: any
     */
    LanguageSelectorComponent.prototype.setLanguage = function (lang) {
        var _this = this;
        this.languages.forEach(function (language) {
            if (language.lang === lang) {
                language.active = true;
                _this.language = language;
            }
            else {
                language.active = false;
            }
        });
        this.translationService.setLanguage(lang);
    };
    /**
     * Set selected language
     */
    LanguageSelectorComponent.prototype.setSelectedLanguage = function () {
        this.setLanguage(this.translationService.getSelectedLanguage());
    };
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], LanguageSelectorComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LanguageSelectorComponent.prototype, "iconType", void 0);
    LanguageSelectorComponent = __decorate([
        core_1.Component({
            selector: 'kt-language-selector',
            templateUrl: './language-selector.component.html',
        }),
        __metadata("design:paramtypes", [layout_1.TranslationService, router_1.Router])
    ], LanguageSelectorComponent);
    return LanguageSelectorComponent;
}());
exports.LanguageSelectorComponent = LanguageSelectorComponent;
//# sourceMappingURL=language-selector.component.js.map