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
var material_1 = require("@angular/material");
var basic = {
    beforeCodeTitle: 'MatRipple basic usage',
    htmlCode: "\n<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\n\n<mat-form-field class=\"example-ripple-form-field\">\n  <input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\">\n</mat-form-field>\n<mat-form-field class=\"example-ripple-form-field\">\n  <input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\">\n</mat-form-field>\n\n<div class=\"example-ripple-container mat-elevation-z4\"\n  matRipple\n  [matRippleCentered]=\"centered\"\n  [matRippleDisabled]=\"disabled\"\n  [matRippleUnbounded]=\"unbounded\"\n  [matRippleRadius]=\"radius\"\n  [matRippleColor]=\"color\">\n  Click me\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n  * @title MatRipple basic usage\n*/\n@Component({\n  selector: 'ripple-overview-example',\n  templateUrl: 'ripple-overview-example.html',\n  styleUrls: ['ripple-overview-example.css'],\n})\nexport class RippleOverviewExample {\n  centered = false;\n  disabled = false;\n  unbounded = false;\n\n  radius: number;\n  color: string;\n}",
    cssCode: "\n.example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/** Styles to make the demo look better. */\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var RipplesComponent = /** @class */ (function () {
    function RipplesComponent(iconRegistry) {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
    RipplesComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
    };
    RipplesComponent = __decorate([
        core_1.Component({
            selector: 'kt-ripples',
            templateUrl: './ripples.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [material_1.MatIconRegistry])
    ], RipplesComponent);
    return RipplesComponent;
}());
exports.RipplesComponent = RipplesComponent;
//# sourceMappingURL=ripples.component.js.map