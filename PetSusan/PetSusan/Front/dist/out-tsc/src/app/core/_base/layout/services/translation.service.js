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
// Tranlsation
var core_2 = require("@ngx-translate/core");
var TranslationService = /** @class */ (function () {
    /**
     * Service Constructor
     *
     * @param translate: TranslateService
     */
    function TranslationService(translate) {
        this.translate = translate;
        // Private properties
        this.langIds = [];
        // add new langIds to the list
        this.translate.addLangs(['en']);
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
    }
    /**
     * Load Translation
     *
     * @param args: Locale[]
     */
    TranslationService.prototype.loadTranslations = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var locales = args.slice();
        locales.forEach(function (locale) {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            _this.translate.setTranslation(locale.lang, locale.data, true);
            _this.langIds.push(locale.lang);
        });
        // add new languages to the list
        this.translate.addLangs(this.langIds);
    };
    /**
     * Setup language
     *
     * @param lang: any
     */
    TranslationService.prototype.setLanguage = function (lang) {
        if (lang) {
            this.translate.use(this.translate.getDefaultLang());
            this.translate.use(lang);
            localStorage.setItem('language', lang);
        }
    };
    /**
     * Returns selected language
     */
    TranslationService.prototype.getSelectedLanguage = function () {
        return localStorage.getItem('language') || this.translate.getDefaultLang();
    };
    TranslationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], TranslationService);
    return TranslationService;
}());
exports.TranslationService = TranslationService;
//# sourceMappingURL=translation.service.js.map