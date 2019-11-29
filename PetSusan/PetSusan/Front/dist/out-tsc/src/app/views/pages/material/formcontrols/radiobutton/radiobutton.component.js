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
var basicRadios = {
    beforeCodeTitle: 'Basic radios',
    htmlCode: "\n<mat-radio-group>\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic radios\n*/\n@Component({\n  selector: 'radio-overview-example',\n  templateUrl: 'radio-overview-example.html',\n styleUrls: ['radio-overview-example.css'],\n})\nexport class RadioOverviewExample {}",
    cssCode: "\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var radiosWithNgModel = {
    beforeCodeTitle: 'Radios with ngModel',
    htmlCode: "\n<mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Radios with ngModel\n*/\n@Component({\n  selector: 'radio-ng-model-example',\n  templateUrl: 'radio-ng-model-example.html',\n  styleUrls: ['radio-ng-model-example.css'],\n})\nexport class RadioNgModelExample {\n  favoriteSeason: string;\n\n  seasons = [\n    'Winter',\n    'Spring',\n    'Summer',\n    'Autumn',\n  ];\n}",
    viewCode: "",
    cssCode: "\n.example-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n.example-radio-button {\n  margin: 5px;\n}\n.example-selected-value {\n  margin: 15px 0;\n}\n\t\t",
    isCodeVisible: false
};
var disabledRadios = {
    beforeCodeTitle: 'Disabled radios',
    htmlCode: "\n<mat-radio-group disabled=\"true\">\n  <mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\n  <mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\n  <mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\n  <mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\n  <mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\n</mat-radio-group>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'radio-disabled-example',\n  templateUrl: 'radio-disabled-example.html',\n styleUrls: ['radio-disabled-example.css'],\n})\nexport class RadioDisabledExample {}",
    cssCode: "\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var labelPosition = {
    beforeCodeTitle: 'Label position',
    htmlCode: "\n<mat-radio-group [labelPosition]=\"labelPosition\">\n  <mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\n  <mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\n  <mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\n  <mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\n  <mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\n</mat-radio-group>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<mat-slide-toggle (change)=\"changeLablesPositions()\">Slide labels position</mat-slide-toggle>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'radio-label-position-example',\n  templateUrl: 'radio-lablel-position.html',\n styleUrls: ['radio-label-position-example.css'],\n})\nexport class RadioLabelPositionExample {\n  labelPosition: string = \"before\";\n\n  changeLablesPositions() {\n    this.labelPosition = this.labelPosition == \"before\" ? \"after\" : \"before\";\n  }\n}",
    cssCode: "\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var changeEvent = {
    beforeCodeTitle: 'Change event binding',
    htmlCode: "\n<mat-radio-group (change)=\"changeState()\" [(ngModel)]=\"selectedState\">\n  <mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\n  <mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\n  <mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\n  <mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\n  <mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\n</mat-radio-group>\n<div class=\"kt-separator kt-separator--dashed\" *ngIf=\"state\"></div>\n<span *ngIf=\"state\">Welcome to <mark>{{ state }}</mark>!</span>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\nselector: 'radio-change-event-example',\ntemplateUrl: 'radio-change-event.html',\nstyleUrls: ['radio-change-event-example.css'],\n})\nexport class RadioChangeEventExample {\n  state: string = \"\";\n  selectedState: string = \"\";\n\n  changeState() {\n    this.state = this.selectedState;\n  }\n}",
    cssCode: "\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var RadiobuttonComponent = /** @class */ (function () {
    function RadiobuttonComponent() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
        this.state = '';
        this.selectedState = '';
        this.labelPosition = 'before';
    }
    RadiobuttonComponent.prototype.changeLablesPositions = function () {
        this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
    };
    RadiobuttonComponent.prototype.ngOnInit = function () {
        this.exampleBasicRadios = basicRadios;
        this.exampleRadiosWithNgModel = radiosWithNgModel;
        this.exampleDisabledRadios = disabledRadios;
        this.exmapleLabelPosition = labelPosition;
        this.exampleChangeEvent = changeEvent;
    };
    RadiobuttonComponent.prototype.changeState = function () {
        this.state = this.selectedState;
    };
    RadiobuttonComponent = __decorate([
        core_1.Component({
            selector: 'kt-radiobutton',
            templateUrl: './radiobutton.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\tmat-radio-button {\n\t\tpadding-right: 16px;\n\t}\n\t.example-radio-group {\n\t\tdisplay: inline-flex;\n\t\tflex-direction: column;\n\t  }\n\t  .example-radio-button {\n\t\tmargin: 15px;\n\t  }\n\t.example-selected-value {\n\t\tmargin: 15px 0;\n\t}\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], RadiobuttonComponent);
    return RadiobuttonComponent;
}());
exports.RadiobuttonComponent = RadiobuttonComponent;
//# sourceMappingURL=radiobutton.component.js.map