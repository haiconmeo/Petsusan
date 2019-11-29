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
    beforeCodeTitle: 'Basic buttons',
    htmlCode: "\n<div class=\"button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Button varieties\n*/\n@Component({\n  selector: 'button-types-example',\n  templateUrl: 'button-types-example.html',\n  styleUrls: ['button-types-example.css'],\n})\nexport class ButtonTypesExample {}",
    cssCode: "\n.example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}",
    viewCode: "",
    isCodeVisible: false
};
var raised = {
    beforeCodeTitle: 'Raised buttons',
    htmlCode: "\n<div class=\"button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Button varieties\n*/\n@Component({\n  selector: 'button-types-example',\n  templateUrl: 'button-types-example.html',\n  styleUrls: ['button-types-example.css'],\n})\nexport class ButtonTypesExample {}",
    cssCode: "\n.example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}",
    viewCode: "",
    isCodeVisible: false
};
var icon = {
    beforeCodeTitle: 'Icon buttons',
    htmlCode: "\n<div class=\"button-row\">\n  <button mat-icon-button>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"accent\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"warn\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button disabled>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  </div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Button varieties\n*/\n@Component({\n  selector: 'button-types-example',\n  templateUrl: 'button-types-example.html',\n  styleUrls: ['button-types-example.css'],\n})\nexport class ButtonTypesExample {}\n\n",
    cssCode: "\n.example-button-row {\n  display: flex;\n  align-items: center;\n justify-content: space-around;\n}",
    viewCode: "",
    isCodeVisible: false
};
var fab = {
    beforeCodeTitle: 'Fab buttons',
    htmlCode: "\n<div class=\"button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n  <button mat-fab color=\"warn\">Warn</button>\n  <button mat-fab disabled>Disabled</button>\n  <button mat-fab>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <a mat-fab routerLink=\".\">Link</a>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Button varieties\n*/\n@Component({\n  selector: 'button-types-example',\n  templateUrl: 'button-types-example.html',\n  styleUrls: ['button-types-example.css'],\n})\nexport class ButtonTypesExample {}",
    cssCode: "\n.example-button-row {\n  display: flex;\n  align-items: center;\n justify-content: space-around;\n}",
    viewCode: "",
    isCodeVisible: false
};
var miniFab = {
    beforeCodeTitle: 'Mini Fab buttons',
    htmlCode: "\n<div class=\"button-row\">\n  <button mat-mini-fab>Basic</button>\n  <button mat-mini-fab color=\"primary\">Primary</button>\n  <button mat-mini-fab color=\"accent\">Accent</button>\n  <button mat-mini-fab color=\"warn\">Warn</button>\n  <button mat-mini-fab disabled>Disabled</button>\n  <button mat-mini-fab>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <a mat-mini-fab routerLink=\".\">Link</a>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/**\n* @title Button varieties\n*/\n@Component({\n  selector: 'button-types-example',\n  templateUrl: 'button-types-example.html',\n  styleUrls: ['button-types-example.css'],\n})\nexport class ButtonTypesExample {}",
    cssCode: "\n.example-button-row {\n  display: flex;\n  align-items: center;\n justify-content: space-around;\n}",
    viewCode: "",
    isCodeVisible: false
};
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleRaised = raised;
        this.exampleIcon = icon;
        this.exmapleFab = fab;
        this.exampleMiniFav = miniFab;
    };
    ButtonComponent = __decorate([
        core_1.Component({
            selector: 'kt-button',
            templateUrl: './button.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-button-row {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-around;\n\t  }\n\t"]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=button.component.js.map