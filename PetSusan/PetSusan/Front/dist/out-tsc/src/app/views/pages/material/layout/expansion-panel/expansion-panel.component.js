"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basicPanel = {
    beforeCodeTitle: 'Basic expansion panel',
    htmlCode: "\n<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n\t  <mat-panel-description>\n        Type your name and age\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Age\">\n    </mat-form-field>\n  </mat-expansion-panel>\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n    (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic expansion panel\n*/\n@Component({\n  selector: 'expansion-overview-example',\n  templateUrl: 'expansion-overview-example.html',\n  styleUrls: ['expansion-overview-example.css'],\n})\nexport class ExpansionOverviewExample {\n  panelOpenState: boolean = false;\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var disabledPanel = {
    beforeCodeTitle: 'Disabling a panel',
    htmlCode: "\n<mat-expansion-panel [disabled]=\"isDisabled\">\n  <mat-expansion-panel-header>\n\tThis is the expansion title\n  </mat-expansion-panel-header>\n  <mat-panel-description>\n    This is a summary of the content\n  </mat-panel-description>\n</mat-expansion-panel>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Disabled expansion panel\n*/\n@Component({\n  selector: 'expansion-disabled-example',\n  templateUrl: 'expansion-disabled-example.html',\n  styleUrls: ['expansion-disabled-example.css'],\n})\nexport class ExpansionDisabledExample {\n  isDisabled: boolean = true;\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var accordion = {
    beforeCodeTitle: 'Expansion panel as accordion',
    htmlCode: "\n<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n\t  <mat-panel-description>\n\t\tType your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n    </mat-form-field>\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput placeholder=\"Country\">\n    </mat-form-field>\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n   </mat-expansion-panel>\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n\t  </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n     </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n</mat-accordion>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Expansion panel as accordion\n*/\n@Component({\n  selector: 'expansion-steps-example',\n  templateUrl: 'expansion-steps-example.html',\n  styleUrls: ['expansion-steps-example.css']\n})\nexport class ExpansionStepsExample {\n  step = 0;\n\n  setStep(index: number) {\n    this.step = index;\n  }\n\n  nextStep() {\n    this.step++;\n   }\n\n  prevStep() {\n    this.step--;\n  }\n}\n",
    cssCode: "\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ExpansionPanelComponent = /** @class */ (function () {
    function ExpansionPanelComponent() {
        this.panelOpenState = false;
        this.isDisabled = true;
        this.step = 0;
    }
    ExpansionPanelComponent.prototype.ngOnInit = function () {
        this.exampleBasicPanel = basicPanel;
        this.exampleDisabledPanel = disabledPanel;
        this.exampleAccordion = accordion;
    };
    ExpansionPanelComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionPanelComponent.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionPanelComponent.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionPanelComponent = __decorate([
        core_1.Component({
            selector: 'kt-expansion-panel',
            templateUrl: './expansion-panel.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\t"]
        })
    ], ExpansionPanelComponent);
    return ExpansionPanelComponent;
}());
exports.ExpansionPanelComponent = ExpansionPanelComponent;
//# sourceMappingURL=expansion-panel.component.js.map