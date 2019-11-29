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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var contextualProgressBars = {
    beforeCodeTitle: 'Contextual progress bars',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar>\n    </p>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-basic',\n    templateUrl: './progressbar-basic.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n   `]\n})\nexport class NgbdProgressbarBasic {}\n\t\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var progressBarsWithCurrentValueLabels = {
    beforeCodeTitle: 'Progress bars with current value labels',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <p>\n      <ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar>\n    </p>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-showvalue',\n    templateUrl: './progressbar-showvalue.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n   `]\n})\nexport class NgbdProgressbarShowvalue {\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var stripedProgressBars = {
    beforeCodeTitle: 'Striped progress bars',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar>\n    </p>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-striped',\n    templateUrl: './progressbar-striped.html'\n})\nexport class NgbdProgressbarStriped {\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var progressBarsWithCustomLabels = {
    beforeCodeTitle: 'Progress bars with custom labels',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\">Copying file\n\t\t<b>2 of 4</b>...\n\t  </ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\">\n        <i>50%</i>\n      </ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n    </p>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-labels',\n    templateUrl: './progressbar-labels.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n    `]\n})\nexport class NgbdProgressbarLabels {\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var progressBarsWithHeight = {
    beforeCodeTitle: 'Progress bars with height',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <p>\n      <ngb-progressbar type=\"success\" [value]=\"25\">default</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"info\" [value]=\"50\" height=\"10px\">10px</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"warning\" [value]=\"75\" height=\".5rem\">.5rem</ngb-progressbar>\n    </p>\n    <p>\n      <ngb-progressbar type=\"danger\" [value]=\"100\" [height]=\"height\">{{height}}</ngb-progressbar>\n    </p>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-height',\n    templateUrl: './progressbar-height.html',\n    styles: [`\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n    `]\n})\nexport class NgbdProgressbarHeight {\n    height = '20px';\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfProgressBars = {
    beforeCodeTitle: 'Global configuration of progress bars',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <p>This progress bar uses the customized default values.</p>\n    <p><ngb-progressbar value=\"250\"></ngb-progressbar></p>\n\t<p>This progress bar uses the customized default values, but changes the type using an input.</p>\n    <p><ngb-progressbar value=\"500\" type=\"info\"></ngb-progressbar></p>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-progressbar-config',\n    templateUrl: './progressbar-config.html',\n    providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers\n})\nexport class NgbdProgressbarConfig {\n    constructor(config: NgbProgressbarConfig) {\n        // customize default values of progress bars used by this component tree\n        config.max = 1000;\n        config.striped = true;\n\t\tconfig.animated = true;\n        config.type = 'success';\n        config.height = '20px';\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        this.height = '20px';
        // customize default values of progress bars used by this component tree
        // config.max = 1000;
        // config.striped = true;
        // config.animated = true;
        // config.type = 'success';
        // config.height = '20px';
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
        this.exampleContextualProgressBars = contextualProgressBars;
        this.exampleProgressBarsWithCurrentValueLabels = progressBarsWithCurrentValueLabels;
        this.exampleStripedProgressBars = stripedProgressBars;
        this.exampleProgressBarsWithCustomLabels = progressBarsWithCustomLabels;
        this.exampleProgressBarsWithHeight = progressBarsWithHeight;
        this.exampleGlobalConfigurationOfProgressBars = globalConfigurationOfProgressBars;
    };
    ProgressbarComponent = __decorate([
        core_1.Component({
            selector: 'kt-progressbar',
            templateUrl: './progressbar.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n    \tngb-progressbar {\n      \t\tmargin-top: 5rem;\n    \t}\n\t  "],
            providers: [ng_bootstrap_1.NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbProgressbarConfig])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());
exports.ProgressbarComponent = ProgressbarComponent;
//# sourceMappingURL=progressbar.component.js.map