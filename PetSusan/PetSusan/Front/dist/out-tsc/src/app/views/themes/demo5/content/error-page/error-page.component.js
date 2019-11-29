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
var layout_1 = require("../../../../../core/_base/layout");
var ErrorPageComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param route: ActivatedRoute
     * @param layoutConfigService: LayoutConfigService
     */
    function ErrorPageComponent(route, layoutConfigService) {
        this.route = route;
        this.layoutConfigService = layoutConfigService;
        // Public properties
        // type of error template to be used, accepted values; error-v1 | error-v2 | error-v3 | error-v4 | error-v5 | error-v6
        this.type = 'error-v1';
        // error code, some error types template has it
        this.code = '404';
        // error descriptions
        this.desc = 'Oops! Something went wrong!';
        // return back button title
        this.return = 'Return back';
        // set temporary values to the layout config on this page
        this.layoutConfigService.setConfig({ self: { layout: 'blank' } });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ErrorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = this.route.snapshot.paramMap.get('type');
        this.sub = this.route.data.subscribe(function (param) {
            if (!_this.type) {
                _this.type = param.type;
            }
            if (!_this.image) {
                _this.image = param.image;
            }
            if (!_this.code) {
                _this.code = param.code;
            }
            if (!_this.title) {
                _this.title = param.title;
            }
            if (!_this.subtitle) {
                _this.subtitle = param.subtitle;
            }
            if (!_this.desc) {
                _this.desc = param.desc;
            }
            if (!_this.return) {
                _this.return = param.return;
            }
        });
        switch (this.type) {
            case 'error-v1':
                if (!this.image) {
                    this.image = './assets/media/error/bg1.jpg';
                }
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.desc) {
                    this.desc = 'OOPS! Something went wrong here';
                }
                break;
            case 'error-v2':
                if (!this.image) {
                    this.image = './assets/media/error/bg2.jpg';
                }
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.title) {
                    this.title = 'OOPS!';
                }
                if (!this.desc) {
                    this.desc = 'Something went wrong here';
                }
                break;
            case 'error-v3':
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.title) {
                    this.title = 'How did you get here';
                }
                if (!this.subtitle) {
                    this.subtitle = 'Sorry we can\'t seem to find the page you\'re looking for.';
                }
                if (!this.desc) {
                    this.desc = 'There may be amisspelling in the URL entered,<br>' + 'or the page you are looking for may no longer exist.';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg3.jpg';
                }
                break;
            case 'error-v4':
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.title) {
                    this.title = 'ERROR';
                }
                if (!this.desc) {
                    this.desc = 'Nothing left to do here';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg4.jpg';
                }
                break;
            case 'error-v5':
                if (!this.title) {
                    this.title = 'Oops!';
                }
                if (!this.subtitle) {
                    this.subtitle = 'Something went wrong here';
                }
                if (!this.desc) {
                    this.desc = 'We\'re working on it and we\'ll get it fixed<br>' + 'as soon possible.<br>' + 'You can back or use our Help Center.';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg5.jpg';
                }
                break;
            case 'error-v6':
                if (!this.title) {
                    this.title = 'Oops...';
                }
                if (!this.desc) {
                    this.desc = 'Looks like something went wrong.<br>' + 'We\'re working on it';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg6.jpg';
                }
                break;
            default:
                if (!this.image) {
                    this.image = './assets/media/error/bg1.jpg';
                }
        }
    };
    /**
     * On destroy
     */
    ErrorPageComponent.prototype.ngOnDestroy = function () {
        // reset config from any temporary values
        this.layoutConfigService.reloadConfigs();
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "code", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "subtitle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "desc", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "return", void 0);
    ErrorPageComponent = __decorate([
        core_1.Component({
            selector: 'kt-error-page',
            templateUrl: './error-page.component.html',
            styleUrls: ['./error-page.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, layout_1.LayoutConfigService])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());
exports.ErrorPageComponent = ErrorPageComponent;
//# sourceMappingURL=error-page.component.js.map