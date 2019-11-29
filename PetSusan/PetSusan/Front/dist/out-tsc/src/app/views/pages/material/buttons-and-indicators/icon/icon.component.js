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
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var basic = {
    beforeCodeTitle: 'Basic icons',
    htmlCode: "\n<mat-icon>home</mat-icon>\n<mat-icon>queue music</mat-icon>\n<mat-icon>call split</mat-icon>\n<mat-icon>event note</mat-icon>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Basic icons\n*/\n@Component({\n  selector: 'icon-overview-example',\n  templateUrl: 'icon-overview-example.html',\n  styleUrls: ['icon-overview-example.css']\n})\nexport class IconOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var sVG = {
    beforeCodeTitle: 'SVG icons',
    htmlCode: "<mat-icon svgIcon=\"thumbs-up\"></mat-icon>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {MatIconRegistry} from '@angular/material';\n\n\n/**\n* @title SVG icons\n*/\n@Component({\n  selector: 'icon-svg-example',\n  templateUrl: 'icon-svg-example.html',\n  styleUrls: ['icon-svg-example.css'],\n})\nexport class IconSvgExample {\n  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {\n  iconRegistry.addSvgIcon(\n    'thumbs-up',\n     sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));\n  }\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var IconComponent = /** @class */ (function () {
    function IconComponent(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('exchange', sanitizer.bypassSecurityTrustResourceUrl('./assets/media/icons/exchange.svg'));
    }
    IconComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleSVG = sVG;
    };
    IconComponent = __decorate([
        core_1.Component({
            selector: 'kt-icon',
            templateUrl: './icon.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [material_1.MatIconRegistry, platform_browser_1.DomSanitizer])
    ], IconComponent);
    return IconComponent;
}());
exports.IconComponent = IconComponent;
//# sourceMappingURL=icon.component.js.map