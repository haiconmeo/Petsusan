"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var singleRow = {
    beforeCodeTitle: 'Single row',
    htmlCode: "\n<mat-toolbar>\n  <span>My Application</span>\n</mat-toolbar>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic toolbar : single row\n*/\n@Component({\n  selector: 'toolbar-overview-example',\n  templateUrl: 'toolbar-overview-example.html',\n  styleUrls: ['toolbar-overview-example.css'],\n})\nexport class ToolbarOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var multipleRows = {
    beforeCodeTitle: 'Multiple rows',
    htmlCode: "\n<mat-toolbar>\n  <mat-toolbar-row>\n    <span>First Row</span>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <span>Second Row</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic toolbar : multiple rows\n*/\n@Component({\nselector: 'toolbar-multi-example',\ntemplateUrl: 'toolbar-multi-example.html',\nstyleUrls: ['toolbar-multi-example.css'],\n})\nexport class ToolbarMultiExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var multipleRows2 = {
    beforeCodeTitle: 'Multi-row toolbar',
    htmlCode: "\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic toolbar : Multi-row toolbar\n*/\n@Component({\nselector: 'toolbar-multi-example',\ntemplateUrl: 'toolbar-multi-example.html',\nstyleUrls: ['toolbar-multi-example.css'],\n})\nexport class ToolbarMultiExample {}\n",
    cssCode: "\n.example-icon {\n  padding: 0 14px;\n}\n.example-spacer {\n  flex: 1 1 auto;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.exampleSingleRow = singleRow;
        this.examplMultipleRows = multipleRows;
        this.examplMultipleRows2 = multipleRows2;
    };
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'kt-toolbar',
            templateUrl: './toolbar.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-icon {\n\t\tpadding: 0 14px;\n\t}\n\t.example-spacer {\n\t\tflex: 1 1 auto;\n\t}\n\t"]
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map