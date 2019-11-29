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
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var timepicker = {
    beforeCodeTitle: 'Timepicker',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-timepicker-basic',\n    templateUrl: './timepicker-basic.html'\n})\nexport class NgbdTimepickerBasic {\n    time = {hour: 13, minute: 30};\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var meridian = {
    beforeCodeTitle: 'Meridian',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\n    <button class=\"btn btn-sm btn-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\n      Meridian - {{meridian ? \"ON\" : \"OFF\"}}\n    </button>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n\t<pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n",
    tsCode: "\n\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-timepicker-meridian',\n    templateUrl: './timepicker-meridian.html'\n})\nexport class NgbdTimepickerMeridian {\n    time = {hour: 13, minute: 30};\n    meridian = true;\n\n    toggleMeridian() {\n        this.meridian = !this.meridian;\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var seconds = {
    beforeCodeTitle: 'Seconds',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"seconds\"></ngb-timepicker>\n    <button class=\"btn btn-sm btn-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\n      Seconds - {{seconds ? \"ON\" : \"OFF\"}}\n    </button>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport { Component } from '@angular/core';\nimport { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-timepicker-seconds',\n    templateUrl: './timepicker-seconds.html'\n})\nexport class NgbdTimepickerSeconds {\n    time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};\n    seconds = true;\n\n    toggleSeconds() {\n\t\tthis.seconds = !this.seconds;\n    }\n}\n ",
    viewCode: "",
    isCodeVisible: false
};
var spinners = {
    beforeCodeTitle: 'Spinners',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ngb-timepicker [(ngModel)]=\"time\" [spinners]=\"spinners\"></ngb-timepicker>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <button class=\"kt-t-1 btn btn-sm btn-{{spinners ? 'success' : 'danger'}}\" (click)=\"toggleSpinners()\">\n      Spinners - {{spinners ? \"ON\" : \"OFF\"}}\n    </button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-timepicker-spinners',\n    templateUrl: './timepicker-spinners.html'\n})\nexport class NgbdTimepickerSpinners {\n    time = {hour: 13, minute: 30};\n    spinners = true;\n\n    toggleSpinners() {\n        this.spinners = !this.spinners;\n    }\n}\n\n\t",
    viewCode: "",
    isCodeVisible: false
};
var customSteps = {
    beforeCodeTitle: 'Custom steps',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n\t<ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"true\" [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\"\n      [secondStep]=\"secondStep\"></ngb-timepicker>\n     <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <label for=\"changeHourStep\">Hour Step</label>\n          <input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\n        </div>\n        <div class=\"col-sm-3\">\n          <label for=\"changeMinuteStep\">Minute Step</label>\n          <input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\n        </div>\n        <div class=\"col-sm-3\">\n          <label for=\"changeSecondStep\">Second Step</label>\n          <input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n  <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-timepicker-steps',\n    templateUrl: './timepicker-steps.html'\n})\nexport class NgbdTimepickerSteps {\n    time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};\n    hourStep = 1;\n    minuteStep = 15;\n    secondStep = 30;\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var customValidation = {
    beforeCodeTitle: 'Custom validation',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n\tIllustrates custom validation, you have to select time between 12:00 and 13:59\n  </span>\n  <div class=\"kt-section__content\">\n    <div class=\"form-group\">\n      <ngb-timepicker [(ngModel)]=\"time\" [formControl]=\"ctrl\" required></ngb-timepicker>\n\t  <div *ngIf=\"ctrl.valid\" class=\"small form-text text-success\">Great choice</div>\n      <div class=\"small form-text text-danger\" *ngIf=\"!ctrl.valid\">\n      <div *ngIf=\"ctrl.errors['required']\">Select some time during lunchtime</div>\n      <div *ngIf=\"ctrl.errors['tooLate']\">Oh no, it's way too late</div>\n      <div *ngIf=\"ctrl.errors['tooEarly']\">It's a bit too early</div>\n    </div>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <pre>Selected time: {{time | json}}</pre>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n@Component({\n    selector: 'ngbd-timepicker-validation',\n    templateUrl: './timepicker-validation.html'\n})\nexport class NgbdTimepickerValidation {\n    time;\n\n    ctrl = new FormControl('', (control: FormControl) => {\n        const value = control.value;\n\n        if (!value) {\n            return null;\n        }\n\n        if (value.hour < 12) {\n            return {tooEarly: true};\n        }\n\n        if (value.hour > 13) {\n            return {tooLate: true};\n\t\t}\n\n        return null;\n    });\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfTimepickers = {
    beforeCodeTitle: 'Global configuration of timepickers',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n\tThis timepicker uses customized default values.\n  </span>\n  <div class=\"kt-section__content\">\n    <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"'true'\" [spinners]=\"'false'\"></ngb-timepicker>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';\nimport {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-timepicker-config',\n    templateUrl: './timepicker-config.html',\n    providers: [NgbTimepickerConfig] // add NgbTimepickerConfig to the component providers\n})\nexport class NgbdTimepickerConfig {\n    time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};\n\n    constructor(config: NgbTimepickerConfig) {\n        // customize default values of ratings used by this component tree\n        config.seconds = true;\n        config.spinners = false;\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent(config) {
        this.time = { hour: 13, minute: 30 };
        this.time2 = { hour: 13, minute: 30 };
        this.meridian = true;
        this.time3 = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
        this.time4 = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        this.time6 = { hour: 13, minute: 30, second: 0 };
        this.time7 = { hour: 13, minute: 30 };
        this.spinners = true;
        // customize default values of ratings used by this component tree
        // config.seconds = true;
        // config.spinners = false;
    }
    TimepickerComponent.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    TimepickerComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    TimepickerComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    TimepickerComponent.prototype.ngOnInit = function () {
        this.exampleTimepicker = timepicker;
        this.exampleMeridian = meridian;
        this.exampleSeconds = seconds;
        this.exampleSpinners = spinners;
        this.exampleCustomSteps = customSteps;
        this.exampleCustomValidation = customValidation;
        this.exampleGlobalConfigurationOfTimepickers = globalConfigurationOfTimepickers;
        this.ctrl = new forms_1.FormControl('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    };
    TimepickerComponent = __decorate([
        core_1.Component({
            selector: 'kt-timepicker',
            templateUrl: './timepicker.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [ng_bootstrap_1.NgbTimepickerConfig] // add NgbTimepickerConfig to the component providers
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbTimepickerConfig])
    ], TimepickerComponent);
    return TimepickerComponent;
}());
exports.TimepickerComponent = TimepickerComponent;
//# sourceMappingURL=timepicker.component.js.map