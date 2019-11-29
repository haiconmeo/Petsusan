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
var core_1 = require("@angular/core");
var layout_1 = require("../../../../../core/_base/layout");
var html_class_service_1 = require("../../html-class.service");
var BrandComponent = /** @class */ (function () {
    function BrandComponent(layoutConfigService, htmlClassService) {
        this.layoutConfigService = layoutConfigService;
        this.htmlClassService = htmlClassService;
    }
    BrandComponent.prototype.ngOnInit = function () {
        this.headerLogo = this.layoutConfigService.getLogo();
        this.headerStickyLogo = this.layoutConfigService.getStickyLogo();
        var config = this.layoutConfigService.getConfig();
        // get menu header display option
        // this.menuHeaderDisplay = objectPath.get(config, 'header.menu.self.display');
    };
    BrandComponent.prototype.ngAfterViewInit = function () {
    };
    BrandComponent = __decorate([
        core_1.Component({
            selector: 'kt-brand',
            templateUrl: './brand.component.html',
            styleUrls: ['brand.component.scss']
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService, html_class_service_1.HtmlClassService])
    ], BrandComponent);
    return BrandComponent;
}());
exports.BrandComponent = BrandComponent;
//# sourceMappingURL=brand.component.js.map