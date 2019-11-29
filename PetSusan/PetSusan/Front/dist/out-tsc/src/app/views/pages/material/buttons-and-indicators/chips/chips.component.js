"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var keycodes_1 = require("@angular/cdk/keycodes");
var basic = {
    beforeCodeTitle: 'Basic chips',
    htmlCode: "\n<mat-chip-list>\n  <mat-chip>One fish</mat-chip>\n  <mat-chip>Two fish</mat-chip>\n  <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\n  <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\n</mat-chip-list>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Basic chips\n*/\n@Component({\n  selector: 'chips-overview-example',\n  templateUrl: 'chips-overview-example.html',\n  styleUrls: ['chips-overview-example.css'],\n})\nexport class ChipsOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var input = {
    beforeCodeTitle: 'Chips with input',
    htmlCode: "\n<mat-form-field class=\"demo-chip-list\">\n  <mat-chip-list #chipList>\n    <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\n      [removable]=\"removable\" (remove)=\"remove(fruit)\">\n      {{fruit.name}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input placeholder=\"New fruit...\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\" />\n  </mat-chip-list>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatChipInputEvent} from '@angular/material';\nimport {ENTER, COMMA} from '@angular/cdk/keycodes';\n\n\n/**\n* @title Chips with input\n*/\n@Component({\n  selector: 'chips-input-example',\n  templateUrl: 'chips-input-example.html',\n  styleUrls: ['chips-input-example.css']\n})\nexport class ChipsInputExample {\n  visible: boolean = true;\n  selectable: boolean = true;\n  removable: boolean = true;\n  addOnBlur: boolean = true;\n\n\n  // Enter, comma\n  separatorKeysCodes = [ENTER, COMMA];\n\n\n  fruits = [\n    { name: 'Lemon' },\n    { name: 'Lime' },\n    { name: 'Apple' },\n  ];\n\n\n  add(event: MatChipInputEvent): void {\n    let input = event.input;\n    let value = event.value;\n\n\n    // Add our fruit\n    if ((value || '').trim()) {\n      this.fruits.push({ name: value.trim() });\n    }\n\n\n    // Reset the input value\n    if (input) {\n      input.value = '';\n    }\n  }\n\n\n  remove(fruit: any): void {\n    let index = this.fruits.indexOf(fruit);\n\n    if (index >= 0) {\n      this.fruits.splice(index, 1);\n    }\n  }\n}\n",
    cssCode: "\n.demo-chip-list {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var stacked = {
    beforeCodeTitle: 'Stacked chips',
    htmlCode: "\n<<mat-chip-list class=\"mat-chip-list-stacked\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected=\"true\" [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Stacked chips\n*/\n@Component({\n  selector: 'chips-stacked-example',\n  templateUrl: 'chips-stacked-example.html',\n  styleUrls: ['chips-stacked-example.css'],\n})\nexport class ChipsStackedExample {\n  color: string;\n\n\n  availableColors = [\n    { name: 'none', color: '' },\n    { name: 'Primary', color: 'primary' },\n    { name: 'Accent', color: 'accent' },\n    { name: 'Warn', color: 'warn' }\n  ];\n}\n",
    cssCode: "\n\t\tmat-chip {\n\t\t\tmax-width: 200px;\n\t\t}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ChipsComponent = /** @class */ (function () {
    function ChipsComponent() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleInput = input;
        this.exampleStacked = stacked;
    };
    ChipsComponent.prototype.add = function (event) {
        var inputText = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (inputText) {
            inputText.value = '';
        }
    };
    ChipsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsComponent = __decorate([
        core_1.Component({
            selector: 'kt-chips',
            templateUrl: './chips.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.demo-chip-list {\n\t\twidth: 100%;\n\t}\n\tmat-chip {\n\t\tmax-width: 200px;\n\t}\n\t"]
        })
    ], ChipsComponent);
    return ChipsComponent;
}());
exports.ChipsComponent = ChipsComponent;
//# sourceMappingURL=chips.component.js.map