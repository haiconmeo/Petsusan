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
var rxjs_1 = require("rxjs");
// Object-Path
var objectPath = require("object-path");
// Lodash
var lodash_1 = require("lodash");
var PageConfigService = /** @class */ (function () {
    /**
     * Service Constructor
     *
     * @param router: Router
     */
    function PageConfigService(router) {
        this.router = router;
        // register on config changed event and set default config
        this.onConfigUpdated$ = new rxjs_1.Subject();
    }
    /**
     * Get current page config based on route
     */
    PageConfigService.prototype.getCurrentPageConfig = function (path) {
        var url = this.router.url;
        // remove first route (demo name) from url router
        if (new RegExp(/^\/demo/).test(url)) {
            var urls = url.split('/');
            urls.splice(0, 2);
            url = urls.join('/');
        }
        if (url.charAt(0) == '/') {
            url = url.substr(1);
        }
        var configPath = url.replace(/\//g, '.');
        if (path) {
            configPath += '.' + path;
        }
        // get page config by path
        return objectPath.get(this.pageConfig, configPath);
    };
    /**
     * Set existing config with a new value
     * @param value: any
     * @param save: boolean?
     */
    PageConfigService.prototype.setConfig = function (value, save) {
        this.pageConfig = lodash_1.merge(this.pageConfig, value);
        if (save) {
            // not implemented
        }
        // fire off an event that all subscribers will listen
        this.onConfigUpdated$.next(this.pageConfig);
    };
    /**
     * Load confgis
     *
     * @param config: any
     */
    PageConfigService.prototype.loadConfigs = function (config) {
        this.pageConfig = config;
        this.onConfigUpdated$.next(this.pageConfig);
    };
    PageConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], PageConfigService);
    return PageConfigService;
}());
exports.PageConfigService = PageConfigService;
//# sourceMappingURL=page-config.service.js.map