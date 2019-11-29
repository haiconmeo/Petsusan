"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basicList = {
    beforeCodeTitle: 'Basic list',
    htmlCode: "\n<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic list\n*/\n@Component({\n  selector: 'list-overview-example',\n  templateUrl: 'list-overview-example.html',\n  styleUrls: ['list-overview-example.css'],\n})\nexport class ListOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var listWithSelection = {
    beforeCodeTitle: 'List with selection',
    htmlCode: "\n<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title List with selection\n*/\n@Component({\n  selector: 'list-selection-example',\n  styleUrls: ['list-selection-example.css'],\n  templateUrl: 'list-selection-example.html',\n})\nexport class ListSelectionExample {\n  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var listWithSection = {
    beforeCodeTitle: 'List with sections',
    htmlCode: "\n<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n\t<h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title List with sections\n*/\n@Component({\n  selector: 'list-sections-example',\n  styleUrls: ['list-sections-example.css'],\ntemplateUrl: 'list-sections-example.html',\n})\nexport class ListSectionsExample {\n  folders = [\n  {\n    name: 'Photos',\n    updated: new Date('1/1/16'),\n  },\n  {\n    name: 'Recipes',\n    updated: new Date('1/17/16'),\n  },\n  {\n    name: 'Work',\n    updated: new Date('1/28/16'),\n  }\n  ];\n  notes = [\n  {\n    name: 'Vacation Itinerary',\n    updated: new Date('2/20/16'),\n  },\n  {\n    name: 'Kitchen Remodel',\n    updated: new Date('1/18/16'),\n  }\n  ];\n}\n",
    cssCode: "\n.mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ListComponent = /** @class */ (function () {
    function ListComponent() {
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
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.exampleBasicList = basicList;
        this.exampleListWithSelection = listWithSelection;
        this.exampleListWithSection = listWithSection;
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'kt-list',
            templateUrl: './list.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.mat-list-icon {\n\t\tcolor: rgba(0, 0, 0, 0.54);\n\t  }\n\t"]
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map