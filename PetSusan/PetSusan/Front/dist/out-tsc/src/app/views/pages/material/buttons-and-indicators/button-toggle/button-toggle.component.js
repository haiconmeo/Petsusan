"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basic = {
    beforeCodeTitle: 'Basic button-toggles',
    htmlCode: "<mat-button-toggle>Toggle me!</mat-button-toggle>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Basic button-toggles\n*/\n@Component({\n  selector: 'button-toggle-overview-example',\n  templateUrl: 'button-toggle-overview-example.html',\n  styleUrls: ['button-toggle-overview-example.css'],\n})\nexport class ButtonToggleOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var vertical = {
    beforeCodeTitle: 'Vertical button toggle',
    htmlCode: "<mat-button-toggle [vertical]=\"true\">Toggle me!</mat-button-toggle>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title  Vertical button-toggles\n*/\n@Component({\n  selector: 'button-toggle-vertical-example',\n  templateUrl: 'button-toggle-vertical-example.html',\n  styleUrls: ['button-toggle-vertical-example.css'],\n})\nexport class ButtonToggleVerticalExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var listExample = {
    beforeCodeTitle: 'Exclusive selection',
    htmlCode: "\n<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled>\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Exclusive selection\n*/\n@Component({\n  selector: 'button-toggle-exclusive-example',\n  templateUrl: 'button-toggle-exclusive-example.html',\n  styleUrls: ['button-toggle-exclusive-example.css'],\n})\nexport class ButtonToggleExclusiveExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ButtonToggleComponent = /** @class */ (function () {
    function ButtonToggleComponent() {
    }
    ButtonToggleComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleVertical = vertical;
        this.exampleList = listExample;
    };
    ButtonToggleComponent = __decorate([
        core_1.Component({
            selector: 'kt-button-toggle',
            templateUrl: './button-toggle.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-selected-value {\n\t\tmargin: 15px 0;\n\t  }\n\t"]
        })
    ], ButtonToggleComponent);
    return ButtonToggleComponent;
}());
exports.ButtonToggleComponent = ButtonToggleComponent;
//# sourceMappingURL=button-toggle.component.js.map