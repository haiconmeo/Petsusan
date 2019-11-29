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
// RxJS
var rxjs_1 = require("rxjs");
// Object-Path
var objectPath = require("object-path");
// Lodash
var lodash_1 = require("lodash");
var LayoutConfigService = /** @class */ (function () {
    /**
     * Servcie constructor
     */
    function LayoutConfigService() {
        // register on config changed event and set default config
        this.onConfigUpdated$ = new rxjs_1.Subject();
    }
    /**
     * Save layout config to the local storage
     * @param layoutConfig
     */
    LayoutConfigService.prototype.saveConfig = function (layoutConfig) {
        if (layoutConfig) {
            localStorage.setItem('layoutConfig', JSON.stringify(layoutConfig));
        }
    };
    /**
     * Get layout config from local storage
     */
    LayoutConfigService.prototype.getSavedConfig = function () {
        var config = localStorage.getItem('layoutConfig');
        try {
            return JSON.parse(config);
        }
        catch (e) {
        }
    };
    /**
     * Remove saved layout config and revert back to default
     */
    LayoutConfigService.prototype.resetConfig = function () {
        localStorage.removeItem('layoutConfig');
    };
    /**
     * Get all config or by object path
     * @param path | object path separated by dot
     */
    LayoutConfigService.prototype.getConfig = function (path) {
        // merge default layout config with the saved config from layout storage
        // @todo; known issue; viewing 2 or more demos at the time in different browser's tabs, can cause conflict to the layout config
        this.layoutConfig = this.getSavedConfig();
        if (path) {
            // if path is specified, get the value within object
            return objectPath.get(this.layoutConfig, path);
        }
        return this.layoutConfig;
    };
    /**
     * Set existing config with a new value
     * @param value
     * @param save
     */
    LayoutConfigService.prototype.setConfig = function (value, save) {
        this.layoutConfig = lodash_1.merge(this.layoutConfig, value);
        if (save) {
            this.saveConfig(this.layoutConfig);
        }
        // fire off an event that all subscribers will listen
        this.onConfigUpdated$.next(this.layoutConfig);
    };
    /**
     * Get brand logo
     */
    LayoutConfigService.prototype.getLogo = function () {
        var menuAsideLeftSkin = objectPath.get(this.layoutConfig, 'brand.self.skin');
        // set brand logo
        var logoObject = objectPath.get(this.layoutConfig, 'self.logo');
        var logo;
        if (typeof logoObject === 'string') {
            logo = logoObject;
        }
        if (typeof logoObject === 'object') {
            logo = objectPath.get(logoObject, menuAsideLeftSkin + '');
        }
        if (typeof logo === 'undefined') {
            try {
                var logos = objectPath.get(this.layoutConfig, 'self.logo');
                logo = logos[Object.keys(logos)[0]];
            }
            catch (e) {
            }
        }
        return logo;
    };
    /**
     * Returns sticky logo
     */
    LayoutConfigService.prototype.getStickyLogo = function () {
        var logo = objectPath.get(this.layoutConfig, 'self.logo.sticky');
        if (typeof logo === 'undefined') {
            logo = this.getLogo();
        }
        return logo + '';
    };
    /**
     * Initialize layout config
     * @param config
     */
    LayoutConfigService.prototype.loadConfigs = function (config) {
        this.layoutConfig = this.getSavedConfig();
        // use saved config as priority, or load new config if demo does not matched
        if (!this.layoutConfig || objectPath.get(this.layoutConfig, 'demo') !== config.demo) {
            this.layoutConfig = config;
        }
        this.saveConfig(this.layoutConfig);
    };
    /**
     * Reload current layout config to the state of latest saved config
     */
    LayoutConfigService.prototype.reloadConfigs = function () {
        this.layoutConfig = this.getSavedConfig();
        this.onConfigUpdated$.next(this.layoutConfig);
        return this.layoutConfig;
    };
    /**
     * Get default route name by object
     */
    LayoutConfigService.prototype.getCurrentMainRoute = function () {
        var config = this.getConfig();
        if (!config) {
            // tslint:disable-next-line:no-string-throw
            return '';
        }
        var url = config.demo;
        if (!url) {
            // tslint:disable-next-line:no-string-throw
            return '';
        }
        return url;
    };
    LayoutConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LayoutConfigService);
    return LayoutConfigService;
}());
exports.LayoutConfigService = LayoutConfigService;
//# sourceMappingURL=layout-config.service.js.map