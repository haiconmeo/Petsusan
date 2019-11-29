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
    beforeCodeTitle: 'Basic table',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!--- Note that these columns can be defined in any order.\n\t\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n/**\n* @title Basic tooltip\n*/\n@Component({\n  selector: 'tooltip-overview-example',\n  templateUrl: 'tooltip-overview-example.html',\n  styleUrls: ['tooltip-overview-example.css'],\n})\nexport class TooltipOverviewExample {}\n\t\t",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var customPosition = {
    beforeCodeTitle: 'Tooltip with custom position',
    htmlCode: "\n<div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\n  <span>Show tooltip</span>\n  <mat-form-field>\n    <mat-select class=\"example-select\" [(ngModel)]=\"position\">\n      <mat-option value=\"before\">Before</mat-option>\n      <mat-option value=\"after\">After</mat-option>\n      <mat-option value=\"above\">Above</mat-option>\n      <mat-option value=\"below\">Below</mat-option>\n      <mat-option value=\"left\">Left</mat-option>\n      <mat-option value=\"right\">Right</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Tooltip with custom position\n*/\n@Component({\n  selector: 'tooltip-position-example',\n  templateUrl: 'tooltip-position-example.html',\n  styleUrls: ['tooltip-position-example.css'],\n})\nexport class TooltipPositionExample {\n  position = 'before';\n}\n\t\t",
    cssCode: "\n.example-tooltip-host {\n  display: inline-flex;\n  align-items: center;\n  margin: 50px;\n}\n.example-select {\n  margin: 0 10px;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var showHigh = {
    beforeCodeTitle: 'Tooltip with a show and hide delay',
    beforeCodeDescription: "",
    htmlCode: "\n<button mat-raised-button matTooltip=\"Tooltip!\" matTooltipShowDelay=\"1000\">\n  My tooltip waits one second to show\n</button>\n<button mat-raised-button matTooltip=\"Tooltip!\" matTooltipHideDelay=\"2000\">\n  My tooltip waits two seconds to hide\n</button>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Tooltip with a show and hide delay\n*/\n@Component({\n  selector: 'tooltip-delay-example',\n  templateUrl: 'tooltip-delay-example.html',\n  styleUrls: ['tooltip-delay-example.css'],\n})\nexport class TooltipDelayExample {}\n",
    cssCode: "\nbutton {\n  margin: 8px;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var delay = {
    beforeCodeTitle: 'Tooltip with a show and hide delay',
    htmlCode: "\n<button mat-raised-button matTooltip=\"By default, I delay\">\n  Button with delay-default tooltip\n</button>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material';\n\n/** Custom options the configure the tooltip's default show/hide delays. */\nexport const myCustomTooltipDefaults: MatTooltipDefaultOptions = {\n  showDelay: 1000,\n  hideDelay: 1000,\n  touchendHideDelay: 1000,\n};\n\n/**\n* @title Tooltip with a show and hide delay\n*/\n@Component({\n  selector: 'tooltip-modified-defaults-example',\n  templateUrl: 'tooltip-modified-defaults-example.html',\n  styleUrls: ['tooltip-modified-defaults-example.css'],\n  providers: [\n    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}\n  ],\n})\nexport class TooltipModifiedDefaultsExample {}\n\t\t",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var manually = {
    beforeCodeTitle: 'Tooltip that can be manually shown/hidden.',
    htmlCode: "\n<button mat-raised-button (click)=\"tooltip.show()\"> Show tooltip </button>\n<span matTooltip=\"This is the tooltip message\" #tooltip=\"matTooltip\">\n  I have a tooltip\n</span>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Tooltip that can be manually shown/hidden.\n*/\n@Component({\n  selector: 'tooltip-manual-example',\n  templateUrl: 'tooltip-manual-example.html',\n  styleUrls: ['tooltip-manual-example.css'],\n})\nexport class TooltipManualExample {}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var MaterialTooltipComponent = /** @class */ (function () {
    function MaterialTooltipComponent() {
        this.position = 'before';
    }
    MaterialTooltipComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleCustomPosition = customPosition;
        this.exampleShowHigh = showHigh;
        this.exampleDelay = delay;
        this.exampleManually = manually;
    };
    MaterialTooltipComponent = __decorate([
        core_1.Component({
            selector: 'kt-material-tooltip',
            templateUrl: './material-tooltip.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        })
    ], MaterialTooltipComponent);
    return MaterialTooltipComponent;
}());
exports.MaterialTooltipComponent = MaterialTooltipComponent;
//# sourceMappingURL=material-tooltip.component.js.map