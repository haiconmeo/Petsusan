"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var determinate = {
    beforeCodeTitle: 'Determinate progress-bar',
    htmlCode: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Determinate progress-bar\n*/\n@Component({\n  selector: 'progress-bar-determinate-example',\n  templateUrl: 'progress-bar-determinate-example.html',\n  styleUrls: ['progress-bar-determinate-example.css'],\n})\nexport class ProgressBarDeterminateExample {}\n\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var indeterminate = {
    beforeCodeTitle: 'Indeterminate progress-bar',
    htmlCode: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Indeterminate progress-bar\n*/\n@Component({\n  selector: 'progress-bar-indeterminate-example',\n  templateUrl: 'progress-bar-indeterminate-example.html',\n  styleUrls: ['progress-bar-indeterminate-example.css'],\n})\nexport class ProgressBarIndeterminateExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var buffer = {
    beforeCodeTitle: 'Buffer progress-bar',
    htmlCode: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Buffer progress-bar\n*/\n@Component({\n  selector: 'progress-bar-buffer-example',\n  templateUrl: 'progress-bar-buffer-example.html',\n  styleUrls: ['progress-bar-buffer-example.css'],\n})\nexport class ProgressBarBufferExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var query = {
    beforeCodeTitle: 'Query progress-bar',
    htmlCode: "<mat-progress-bar mode=\"query\"></mat-progress-bar>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Query progress-bar\n*/\n@Component({\n  selector: 'progress-bar-query-example',\n  templateUrl: 'progress-bar-query-example.html',\n  styleUrls: ['progress-bar-query-example.css'],\n})\nexport class ProgressBarQueryExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var config = {
    beforeCodeTitle: 'Configurable progress-bar',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\t<section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode == 'buffer'\">\n      <label class=\"example-margin\">Buffer:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <section class=\"example-section\">\n     <mat-progress-bar\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"value\"\n        [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Configurable progress-bar\n*/\n@Component({\n  selector: 'progress-bar-configurable-example',\n  templateUrl: 'progress-bar-configurable-example.html',\n  styleUrls: ['progress-bar-configurable-example.css'],\n})\nexport class ProgressBarConfigurableExample {\n  color = 'primary';\n  mode = 'determinate';\n  value = 50;\n  bufferValue = 75;\n}",
    cssCode: "\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 0 10px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.exampleDeterminate = determinate;
        this.exampleIndeterminate = indeterminate;
        this.exampleBuffer = buffer;
        this.exmapleQuery = query;
        this.exampleConfig = config;
    };
    ProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'kt-progress-bar',
            templateUrl: './progress-bar.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-h2 {\n\t\tmargin: 10px;\n\t}\n\t.example-section {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\theight: 60px;\n\t}\n\n\t.example-margin {\n\t\tmargin: 0 10px;\n\t}"]
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
exports.ProgressBarComponent = ProgressBarComponent;
//# sourceMappingURL=progress-bar.component.js.map