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
var basicCheckboxes = {
    beforeCodeTitle: 'Basic checkboxes',
    htmlCode: "<mat-checkbox>Check me!</mat-checkbox>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic checkboxes\n*/\n@Component({\n  selector: 'checkbox-overview-example',\n  templateUrl: 'checkbox-overview-example.html',\n  styleUrls: ['checkbox-overview-example.css'],\n})\nexport class CheckboxOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var configurableCheckbox = {
    beforeCodeTitle: 'Configurable checkbox',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"align\">\n        <mat-radio-button class=\"example-margin\" value=\"start\">Start</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"end\">End</mat-radio-button>\n      </mat-radio-group>\n\t</section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <section class=\"example-section\">\n      <mat-checkbox\n        class=\"example-margin\"\n        [(ngModel)]=\"checked\"\n        [(indeterminate)]=\"indeterminate\"\n        [align]=\"align\"\n        [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n * @title Configurable checkbox\n */\n@Component({\n  selector: 'checkbox-configurable-example',\n  templateUrl: 'checkbox-configurable-example.html',\n  styleUrls: ['checkbox-configurable-example.css'],\n})\nexport class CheckboxConfigurableExample {\n  checked = false;\n  indeterminate = false;\n  align = 'start';\n  disabled = false;\n}",
    viewCode: "",
    cssCode: "\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 0 10px;\n}",
    isCodeVisible: false
};
var labelPositions = {
    beforeCodeTitle: 'Label positions',
    htmlCode: "<mat-checkbox>Check me!</mat-checkbox>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'checkbox-label-positions-example',\n  templateUrl: 'checkbox-label-positions-example.html',\n  styleUrls: ['checkbox-label-positions-example.css'],\n})\nexport class CheckboxLabelPositionsExample {\n\n  labelPosition: string = \"before\";\n\n  changeLablesPositions() {\n    this.labelPosition = this.labelPosition == \"before\" ? \"after\" : \"before\";\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var changeEvent = {
    beforeCodeTitle: 'Change event binding',
    htmlCode: "\n<mat-checkbox [(ngModel)]=\"myValue\" (change)=\"changeValueEvent()\">Check me!</mat-checkbox>\n\n<div class=\"kt-separator kt-separator--dashed\"></div>\n\n<span>Checked: <mark>{{ myValue }}</mark></span>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'checkbox-change-event-example',\n  templateUrl: 'checkbox-change-event-example.html',\n  styleUrls: ['checkbox-change-event-example.css'],\n})\nexport class CheckboxChangeEventExample {\n  myValue: boolean = true;\n  changeValueEvent() {\n    console.log(\"myValue:\", this.myValue);\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
        this.labelPosition = 'before';
        this.myValue = true;
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        this.exampleBasicCheckboxes = basicCheckboxes;
        this.exampleConfigurableCheckbox = configurableCheckbox;
        this.exampleLabelPositions = labelPositions;
        this.exampleChangeEvent = changeEvent;
    };
    CheckboxComponent.prototype.changeLablesPositions = function () {
        this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
    };
    CheckboxComponent.prototype.changeValueEvent = function () {
        console.log('myValue:', this.myValue);
    };
    CheckboxComponent = __decorate([
        core_1.Component({
            selector: 'kt-checkbox',
            templateUrl: './checkbox.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: [
                "\n\t\t.example-h2 {\n\t\t\tmargin: 10px;\n\t\t}\n\t\t.example-section {\n\t\t\tdisplay: flex;\n\t\t\talign-content: center;\n\t\t\talign-items: center;\n\t\t\theight: 60px;\n\t\t}\n\t\t.example-margin {\n\t\t\tmargin: 0 10px;\n\t\t}\n\t"
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;
//# sourceMappingURL=checkbox.component.js.map