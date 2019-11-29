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
// Object path
var objectPath = require("object-path");
// Services
var menu_config_service_1 = require("./menu-config.service");
var MenuAsideService = /** @class */ (function () {
    /**
     * Service Constructor
     *
     * @param menuConfigService: MenuConfigService
     * @param store: Store<AppState>
     */
    function MenuAsideService(menuConfigService) {
        this.menuConfigService = menuConfigService;
        this.menuList$ = new rxjs_1.BehaviorSubject([]);
        this.loadMenu();
    }
    /**
     * Load menu
     */
    MenuAsideService.prototype.loadMenu = function () {
        // get menu list
        var menuItems = objectPath.get(this.menuConfigService.getMenus(), 'aside.items');
        this.menuList$.next(menuItems);
    };
    MenuAsideService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [menu_config_service_1.MenuConfigService])
    ], MenuAsideService);
    return MenuAsideService;
}());
exports.MenuAsideService = MenuAsideService;
//# sourceMappingURL=menu-aside.service.js.map