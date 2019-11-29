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
var operators_1 = require("rxjs/operators");
// Object-Path
var objectPath = require("object-path");
// Services
var page_config_service_1 = require("./page-config.service");
var menu_config_service_1 = require("./menu-config.service");
var SubheaderService = /** @class */ (function () {
    /**
     * Service Constructor
     *
     * @param router: Router
     * @param pageConfigService: PageConfigServie
     * @param menuConfigService: MenuConfigService
     */
    function SubheaderService(router, pageConfigService, menuConfigService) {
        var _this = this;
        this.router = router;
        this.pageConfigService = pageConfigService;
        this.menuConfigService = menuConfigService;
        // Public properties
        this.title$ = new rxjs_1.BehaviorSubject({ title: '', desc: '' });
        this.breadcrumbs$ = new rxjs_1.BehaviorSubject([]);
        this.disabled$ = new rxjs_1.Subject();
        // Private properties
        this.manualBreadcrumbs = {};
        this.appendingBreadcrumbs = {};
        this.manualTitle = {};
        var initBreadcrumb = function () {
            // get updated title current page config
            _this.pageConfig = _this.pageConfigService.getCurrentPageConfig();
            _this.headerMenus = objectPath.get(_this.menuConfigService.getMenus(), 'header');
            _this.asideMenus = objectPath.get(_this.menuConfigService.getMenus(), 'aside');
            // update breadcrumb on initial page load
            _this.updateBreadcrumbs();
            if (objectPath.get(_this.manualTitle, _this.router.url)) {
                _this.setTitle(_this.manualTitle[_this.router.url]);
            }
            else {
                // get updated page title on every route changed
                _this.title$.next(objectPath.get(_this.pageConfig, 'page'));
                // subheader enable/disable
                var hideSubheader = objectPath.get(_this.pageConfig, 'page.subheader');
                _this.disabled$.next(typeof hideSubheader !== 'undefined' && !hideSubheader);
                if (objectPath.get(_this.manualBreadcrumbs, _this.router.url)) {
                    // breadcrumbs was set manually
                    _this.setBreadcrumbs(_this.manualBreadcrumbs[_this.router.url]);
                }
                else {
                    // get updated breadcrumbs on every route changed
                    _this.updateBreadcrumbs();
                    // breadcrumbs was appended before, reuse it for this page
                    if (objectPath.get(_this.appendingBreadcrumbs, _this.router.url)) {
                        _this.appendBreadcrumbs(_this.appendingBreadcrumbs[_this.router.url]);
                    }
                }
            }
        };
        initBreadcrumb();
        // subscribe to router events
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(initBreadcrumb);
    }
    /**
     * Update breadCrumbs
     */
    SubheaderService.prototype.updateBreadcrumbs = function () {
        // get breadcrumbs from header menu
        var breadcrumbs = this.getBreadcrumbs(this.headerMenus);
        // if breadcrumbs empty from header menu
        if (breadcrumbs.length === 0) {
            // get breadcrumbs from aside menu
            breadcrumbs = this.getBreadcrumbs(this.asideMenus);
        }
        if (
        // if breadcrumb has only 1 item
        breadcrumbs.length === 1 &&
            // and breadcrumb title is same as current page title
            breadcrumbs[0].title.indexOf(objectPath.get(this.pageConfig, 'page.title')) !== -1) {
            // no need to display on frontend
            breadcrumbs = [];
        }
        this.breadcrumbs$.next(breadcrumbs);
    };
    /**
     * Manually set full breadcrumb paths
     */
    SubheaderService.prototype.setBreadcrumbs = function (breadcrumbs) {
        this.manualBreadcrumbs[this.router.url] = breadcrumbs;
        this.breadcrumbs$.next(breadcrumbs);
    };
    /**
     * Append breadcrumb to the last existing breadcrumbs
     * @param breadcrumbs
     */
    SubheaderService.prototype.appendBreadcrumbs = function (breadcrumbs) {
        this.appendingBreadcrumbs[this.router.url] = breadcrumbs;
        var prev = this.breadcrumbs$.getValue();
        this.breadcrumbs$.next(prev.concat(breadcrumbs));
    };
    /**
     * Get breadcrumbs from menu items
     * @param menus
     */
    SubheaderService.prototype.getBreadcrumbs = function (menus) {
        var url = this.router.url;
        // remove first route (demo name) from url router
        if (new RegExp(/^\/de/).test(url)) {
            var urls = url.split('/');
            urls.splice(0, 2);
            url = urls.join('/');
        }
        var breadcrumbs = [];
        var menuPath = this.getPath(menus, url);
        menuPath.forEach(function (key) {
            menus = menus[key];
            if (typeof menus !== 'undefined' && menus.title) {
                breadcrumbs.push(menus);
            }
        });
        return breadcrumbs;
    };
    /**
     * Set title
     *
     * @param title: string
     */
    SubheaderService.prototype.setTitle = function (title) {
        this.manualTitle[this.router.url] = title;
        this.title$.next({ title: title });
    };
    /**
     * Get object path by value
     * @param obj
     * @param value
     */
    SubheaderService.prototype.getPath = function (obj, value) {
        if (typeof obj !== 'object') {
            // tslint:disable-next-line:no-var-keyword
            throw new TypeError('Can only operate on Array or Object');
        }
        var path = [];
        var found = false;
        var search = function (haystack) {
            // tslint:disable-next-line:forin
            for (var key in haystack) {
                path.push(key);
                if (haystack[key] === value) {
                    found = true;
                    break;
                }
                if (typeof haystack[key] === 'object') {
                    search(haystack[key]);
                    if (found) {
                        break;
                    }
                }
                path.pop();
            }
        };
        search(obj);
        return path;
    };
    SubheaderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            page_config_service_1.PageConfigService,
            menu_config_service_1.MenuConfigService])
    ], SubheaderService);
    return SubheaderService;
}());
exports.SubheaderService = SubheaderService;
//# sourceMappingURL=subheader.service.js.map