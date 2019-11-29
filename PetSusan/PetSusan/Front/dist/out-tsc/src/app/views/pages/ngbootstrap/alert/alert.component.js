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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var basicAlert = {
    beforeCodeTitle: 'Basic Alert',
    htmlCode: "\n<p>\n  <ngb-alert [dismissible]=\"false\" [type]=\"'success'\">\n    <strong>Well done! </strong> You successfully read this important alert message.\n  </ngb-alert>\n</p>",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-alert-basic',\n    templateUrl: './alert-basic.html'\n})\nexport class NgbdAlertBasic {}",
    isCodeVisible: false,
    isExampleExpanded: true
};
var closeableAlert = {
    beforeCodeTitle: 'Closeable Alert ',
    htmlCode: "\n<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\n</p>\n<p>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n</p>",
    tsCode: "\nimport { Input, Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-alert-closeable',\n    templateUrl: './alert-closeable.html'\n})\nexport class NgbdAlertCloseable {\n\n    @Input() public alerts: Array<IAlert> = [];\n    private backup: Array<IAlert>;\n\n    constructor() {\n        this.alerts.push({\n            id: 1,\n            type: 'success',\n            message: 'This is an success alert',\n        }, {\n            id: 2,\n            type: 'info',\n            message: 'This is an info alert',\n        }, {\n            id: 3,\n            type: 'warning',\n            message: 'This is a warning alert',\n        }, {\n            id: 4,\n            type: 'danger',\n            message: 'This is a danger alert',\n        }, {\n            id: 5,\n            type: 'primary',\n            message: 'This is a primary alert',\n        }, {\n            id: 6,\n            type: 'secondary',\n            message: 'This is a secondary alert',\n        }, {\n            id: 7,\n            type: 'light',\n            message: 'This is a light alert',\n        }, {\n            id: 8,\n            type: 'dark',\n            message: 'This is a dark alert',\n        });\n        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));\n    }\n\n    public closeAlert(alert: IAlert) {\n\t\tconst index: number = this.alerts.indexOf(alert);\n        this.alerts.splice(index, 1);\n    }\n\n    public reset() {\n        this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));\n    }\n}\n\nexport interface IAlert {\n    id: number;\n    type: string;\n    message: string;\n}",
    viewCode: "",
    isCodeVisible: false
};
var selfClosingAlert = {
    beforeCodeTitle: 'Self-Closing Alert',
    htmlCode: "\n<div class=\"kt-section\">\n  <h3 class=\"kt-section__heading\">Self closing</h3>\n  <span class=\"kt-section__sub\">\n    Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)\n  </span>\n  <div class=\"kt-section__content\">\n    <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <h3 class=\"kt-section__heading\">Change message</h3>\n  <span class=\"kt-section__sub\">\n    Show a self-closing success message that disappears after 5 seconds.\n  </span>\n  <div class=\"kt-section__content\">\n    <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n      <p>\n        <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\n      </p>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {Subject} from 'rxjs/Subject';\nimport {debounceTime} from 'rxjs/operator/debounceTime';\n\n@Component({\n    selector: 'ngbd-alert-selfclosing',\n    templateUrl: './alert-selfclosing.html'\n})\nexport class NgbdAlertSelfclosing implements OnInit {\n    private _success = new Subject<string>();\n\n    staticAlertClosed = false;\n    successMessage: string;\n\n    ngOnInit(): void {\n        setTimeout(() => this.staticAlertClosed = true, 20000);\n        this._success.pipe(\n          debounceTime(5000)\n        ).subscribe(() => this.successMessage = null);\n\n        public changeSuccessMessage() {\n            this._success.next(`${new Date()} - Message successfully changed.`);\n        }\n    }\n}",
    viewCode: "",
    isCodeVisible: false
};
var customAlert = {
    beforeCodeTitle: 'Custom Alert',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    Show a custom alert that can be styled via CSS or SCSS.\n  </span>\n  <div class=\"kt-section__content\">\n    <ngb-alert type=\"custom\" [dismissible]=\"false\">\n      <strong>Whoa!</strong> This is a custom alert.</ngb-alert>\n  </div>\n</div>\n\t",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-alert-custom',\n    templateUrl: './alert-custom.html',\n\tstyles: [`\n\t    :host >>> .alert-custom {\n            color: #99004d;\n            background-color: #f169b4;\n            border-color: #800040;\n        }\n    `]\n})\nexport class NgbdAlertCustom {}",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfAlerts = {
    beforeCodeTitle: 'Global configuration of alerts',
    htmlCode: "\n<p>\n  <ngb-alert>\n    This alert's type is success and it's not dismissible because the config has been customized\n  </ngb-alert>\n</p>",
    tsCode: "\nimport {Component, Input} from '@angular/core';\nimport {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-alert-config',\n\ttemplateUrl: './alert-config.html',\n    // add NgbAlertConfig  to the component providers\n    providers: [NgbAlertConfig]\n})\nexport class NgbdAlertConfig {\n    @Input() public alerts: Array<string> = [];\n\n    constructor(alertConfig: NgbAlertConfig) {\n        // customize default values of alerts used by this component tree\n        alertConfig.type = 'success';\n        alertConfig.dismissible = false;\n    }\n}",
    viewCode: "",
    isCodeVisible: false
};
var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertConfig) {
        // customize default values of alerts used by this component tree
        // alertConfig.type = 'success';
        // alertConfig.dismissible = false;
        this.alerts = [];
        this._success = new rxjs_1.Subject();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
        }, {
            id: 5,
            type: 'brand',
            message: 'This is a brand  alert'
        }, {
            id: 6,
            type: 'primary',
            message: 'This is a primary alert'
        });
        this.backup = this.alerts.map(function (alert) {
            return Object.assign({}, alert);
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleBasicAlert = basicAlert;
        this.exampleCloseableAlert = closeableAlert;
        this.exampleSelfClosingAlert = selfClosingAlert;
        this.exampleCustomAlert = customAlert;
        this.exampleGlobalConfigurationOfAlerts = globalConfigurationOfAlerts;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.pipe(operators_1.debounceTime(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    AlertComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    AlertComponent.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) {
            return Object.assign({}, alert);
        });
    };
    AlertComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AlertComponent.prototype, "alerts", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'kt-alert',
            templateUrl: './alert.component.html',
            styles: [
                "\n    \t:host >>> .alert-custom {\n\t\t\tcolor: #99004d;\n\t\t\tbackground-color: #f169b4;\n\t\t\tborder-color: #800040;\n    \t}"
            ],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbAlertConfig])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map