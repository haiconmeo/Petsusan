"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basicDivider = {
    beforeCodeTitle: 'Basic divider',
    htmlCode: "\n\t\t<mat-list>\n\t\t<mat-list-item>Item 1</mat-list-item>\n\t\t<mat-divider></mat-divider>\n\t\t<mat-list-item>Item 2</mat-list-item>\n\t\t<mat-divider></mat-divider>\n\t\t<mat-list-item>Item 3</mat-list-item>\n\t  </mat-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic divider\n*/\n@Component({\n  selector: 'divider-overview-example',\n  templateUrl: 'divider-overview-example.html',\n  styleUrls: ['divider-overview-example.css'],\n})\nexport class DividerOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var verticalDivider = {
    beforeCodeTitle: 'Vertical divider',
    htmlCode: "\n<mat-divider [vertical]=\"true\"></mat-divider>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title vertical divider\n*/\n@Component({\n  selector: 'divider-vertical-example',\n  templateUrl: 'divider-vertical-example.html',\n  styleUrls: ['divider-vertical-example.css'],\n})\nexport class DividerVerticalExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var listExample = {
    beforeCodeTitle: 'Lists with inset dividers',
    htmlCode: "\n<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders; last as last\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>{{folder.name}}</h4>\n    <p mat-line class=\"demo-2\"> {{folder.updated}} </p>\n    <mat-divider [inset]=\"true\" *ngIf=\"!last\"></mat-divider>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 md-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon md-list-icon>note</mat-icon>\n    <h4 md-line>{{note.name}}</h4>\n    <p md-line class=\"demo-2\"> {{note.updated}} </p>\n  </mat-list-item>\n</mat-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title list divider\n*/\n@Component({\n  selector: 'divider-list-example',\n  templateUrl: 'divider-list-example.html',\n  styleUrls: ['divider-list-example.css'],\n})\nexport class DividerListExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var DividerComponent = /** @class */ (function () {
    function DividerComponent() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    DividerComponent.prototype.ngOnInit = function () {
        this.exampleBasicDivider = basicDivider;
        this.exampleVertical = verticalDivider;
        this.exampleList = listExample;
    };
    DividerComponent = __decorate([
        core_1.Component({
            selector: 'kt-divider',
            templateUrl: './divider.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.mat-list-icon {\n\t\tcolor: rgba(0, 0, 0, 0.54);\n\t  }\n\t  .mat-toolbar > * + .mat-divider-vertical {\n\t\tmargin-right: 16px;\n\t}\n\t.mat-toolbar > .mat-divider-vertical + * {\n\t\tmargin-right: 24px;\n\t\tmargin-left: -1px;\n\t}\n\t"]
        })
    ], DividerComponent);
    return DividerComponent;
}());
exports.DividerComponent = DividerComponent;
//# sourceMappingURL=divider.component.js.map