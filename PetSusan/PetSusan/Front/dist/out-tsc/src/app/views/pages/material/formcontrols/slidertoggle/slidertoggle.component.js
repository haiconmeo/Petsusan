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
var basicSlideToggles = {
    beforeCodeTitle: 'Basic slide-toggles',
    htmlCode: "<mat-slide-toggle>Slide me!</mat-slide-toggle>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic slide-toggles\n*/\n@Component({\n  selector: 'slide-toggle-overview-example',\n  templateUrl: 'slide-toggle-overview-example.html',\n  styleUrls: ['slide-toggle-overview-example.css'],\n})\nexport class SlideToggleOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var configurableSlideToggle = {
    beforeCodeTitle: 'Configurable slide-toggle',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <section class=\"example-section\">\n      <mat-slide-toggle\n        class=\"example-margin\"\n        [color]=\"color\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\">\n        Slide me!\n      </mat-slide-toggle>\n    </section>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Configurable slide-toggle\n*/\n@Component({\n  selector: 'slide-toggle-configurable-example',\n  templateUrl: 'slide-toggle-configurable-example.html',\n  styleUrls: ['slide-toggle-configurable-example.css'],\n})\nexport class SlideToggleConfigurableExample {\n  color = 'accent';\n  checked = false;\n  disabled = false;\n}\n\t\t",
    viewCode: "",
    cssCode: "\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 10px;\n}\n\t\t",
    isCodeVisible: false
};
var labelPositions = {
    beforeCodeTitle: 'Label positions and \'Change\' event binding examples',
    htmlCode: "\n<mat-slide-toggle [labelPosition]=\"labelPosition\">Slide me!</mat-slide-toggle>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<mat-slide-toggle (change)=\"changeLablesPositions()\">Slide labels position</mat-slide-toggle>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'slide-toggle-label-positions-example',\n  templateUrl: 'slide-toggle-lable-positions-example.html',\n  styleUrls: ['slide-toggle-label-positions--example.css'],\n})\nexport class SlideToggleLabelPositionsExample {\n\n  labelPosition: string = \"before\";\n\n  changeLablesPositions() {\n    this.labelPosition = this.labelPosition == \"before\" ? \"after\" : \"before\";\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var SlidertoggleComponent = /** @class */ (function () {
    function SlidertoggleComponent() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.labelPosition = 'before';
    }
    SlidertoggleComponent.prototype.ngOnInit = function () {
        this.exampleBasicSlideToggles = basicSlideToggles;
        this.exampleConfigurableSlideToggle = configurableSlideToggle;
        this.exampleLabelPositions = labelPositions;
    };
    SlidertoggleComponent.prototype.changeLablesPositions = function () {
        this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
    };
    SlidertoggleComponent = __decorate([
        core_1.Component({
            selector: 'kt-slidertoggle',
            templateUrl: './slidertoggle.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-h2 {\n\t\tmargin: 10px;\n\t  }\n\t  .example-section {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\theight: 60px;\n\t  }\n\t  .example-margin {\n\t\tmargin: 10px;\n\t  }\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], SlidertoggleComponent);
    return SlidertoggleComponent;
}());
exports.SlidertoggleComponent = SlidertoggleComponent;
//# sourceMappingURL=slidertoggle.component.js.map