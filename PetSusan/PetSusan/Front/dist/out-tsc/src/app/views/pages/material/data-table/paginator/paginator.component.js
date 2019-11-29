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
    beforeCodeTitle: 'Paginator',
    htmlCode: "\n<mat-paginator [length]=\"100\"\n  [pageSize]=\"10\"\n  [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Paginator\n*/\n@Component({\n  selector: 'paginator-overview-example',\n  templateUrl: 'paginator-overview-example.html',\n  styleUrls: ['paginator-overview-example.css'],\n})\nexport class PaginatorOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var config = {
    beforeCodeTitle: 'Configurable paginatorn',
    htmlCode: "\n<mat-form-field>\n  List length:\n  <input matInput [(ngModel)]=\"length\">\n</mat-form-field>\n  <mat-form-field>\n    Page size:\n    <input matInput [(ngModel)]=\"pageSize\">\n  </mat-form-field>\n  <mat-form-field>\n    Page size options:\n    <input matInput\n      [ngModel]=\"pageSizeOptions\"\n      (ngModelChange)=\"setPageSizeOptions($event)\">\n  </mat-form-field>\n  <mat-paginator [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    (page)=\"pageEvent = $event\">\n  </mat-paginator>\n  <div *ngIf=\"pageEvent\">\n    <h5>Page Change Event Properties</h5>\n    <div>List length: {{pageEvent.length}}</div>\n    <div>Page size: {{pageEvent.pageSize}}</div>\n    <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {PageEvent} from '@angular/material';\n\n/**\n* @title Configurable paginator\n*/\n@Component({\n  selector: 'paginator-configurable-example',\n  templateUrl: 'paginator-configurable-example.html',\n  styleUrls: ['paginator-configurable-example.css'],\n})\nexport class PaginatorConfigurableExample {\n  // MatPaginator Inputs\n  length = 100;\n  pageSize = 10;\n  pageSizeOptions = [5, 10, 25, 100];\n\n  // MatPaginator Output\n  pageEvent: PageEvent;\n  setPageSizeOptions(setPageSizeOptionsInput: string) {\n    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    PaginatorComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleConfig = config;
    };
    PaginatorComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    PaginatorComponent = __decorate([
        core_1.Component({
            selector: 'kt-paginator',
            templateUrl: './paginator.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], PaginatorComponent);
    return PaginatorComponent;
}());
exports.PaginatorComponent = PaginatorComponent;
//# sourceMappingURL=paginator.component.js.map