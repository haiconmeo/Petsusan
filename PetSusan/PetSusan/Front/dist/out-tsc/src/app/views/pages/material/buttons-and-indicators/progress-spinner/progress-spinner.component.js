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
    beforeCodeTitle: 'Basic progressbar-spinner',
    htmlCode: "<mat-spinner></mat-spinner>",
    tsCode: "import {Component} from '@angular/core';\n\n\n/**\n* @title Basic progress-spinner\n*/\n@Component({\n  selector: 'progress-spinner-overview-example',\n  templateUrl: 'progress-spinner-overview-example.html',\n  styleUrls: ['progress-spinner-overview-example.css'],\n})\nexport class ProgressSpinnerOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var config = {
    beforeCodeTitle: 'Configurable progress spinner',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress spinner configuration</h2>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n\t    <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode == 'determinate'\">\n      <label class=\"example-margin\">Progress:</label>\n        <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <mat-progress-spinner\n     class=\"example-margin\"\n     [color]=\"color\"\n     [mode]=\"mode\"\n     [value]=\"value\">\n    </mat-progress-spinner>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Configurable progress spinner\n*/\n@Component({\n  selector: 'progress-spinner-configurable-example',\n  templateUrl: 'progress-spinner-configurable-example.html',\n  styleUrls: ['progress-spinner-configurable-example.css'],\n})\nexport class ProgressSpinnerConfigurableExample {\n  color = 'primary';\n  mode = 'determinate';\n  value = 50;\n}",
    cssCode: "\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 0 10px;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var warn = {
    beforeCodeTitle: 'Colorized progressbar-spinner',
    htmlCode: "\n<mat-spinner [color]=\"'accent'\"></mat-spinner>\n<mat-spinner [color]=\"'warn'\"></mat-spinner>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Colorized progress-spinner\n*/\n@Component({\n  selector: 'progress-spinner-colorized-example',\n  templateUrl: 'progress-spinner-colorized-example.html',\n  styleUrls: ['progress-spinner-colorized-example.css'],\n})\nexport class ProgressSpinnerColorizedExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ProgressSpinnerComponent = /** @class */ (function () {
    function ProgressSpinnerComponent() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    ProgressSpinnerComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleWarn = warn;
        this.exampleConfig = config;
    };
    ProgressSpinnerComponent = __decorate([
        core_1.Component({
            selector: 'kt-progress-spinner',
            templateUrl: './progress-spinner.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-h2 {\n\t\tmargin: 10px;\n\t  }\n\t  .example-section {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\theight: 60px;\n\t  }\n\t  .example-margin {\n\t\tmargin: 0 10px;\n\t  }\n\t"]
        })
    ], ProgressSpinnerComponent);
    return ProgressSpinnerComponent;
}());
exports.ProgressSpinnerComponent = ProgressSpinnerComponent;
//# sourceMappingURL=progress-spinner.component.js.map