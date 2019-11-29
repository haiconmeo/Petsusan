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
var material_1 = require("@angular/material");
var bottom_sheet_example_component_1 = require("./bottom-sheet-example/bottom-sheet-example.component");
var basic = {
    beforeCodeTitle: 'Bottom Sheet Overview',
    htmlCode: "\nimport {Component} from '@angular/core';\nimport {MatBottomSheet, MatBottomSheetRef} from '@angular/material';\n\n/**\n* @title Bottom Sheet Overview\n@Component({\n  selector: 'bottom-sheet-overview-example',\n  templateUrl: 'bottom-sheet-overview-example.html',\n  styleUrls: ['bottom-sheet-overview-example.css'],\n})\nexport class BottomSheetOverviewExample {\n  constructor(private bottomSheet: MatBottomSheet) {}\n\n  openBottomSheet(): void {\n    this.bottomSheet.open(BottomSheetOverviewExampleSheet);\n  }\n}\n\n\n@Component({\n  selector: 'bottom-sheet-overview-example-sheet',\n  templateUrl: 'bottom-sheet-overview-example-sheet.html',\n})\nexport class BottomSheetOverviewExampleSheet {\n  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}\n\n  openLink(event: MouseEvent): void {\n    this.bottomSheetRef.dismiss();\n    event.preventDefault();\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var BottomSheetComponent = /** @class */ (function () {
    function BottomSheetComponent(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    BottomSheetComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(bottom_sheet_example_component_1.BottomSheetExampleComponent);
    };
    BottomSheetComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
    };
    BottomSheetComponent = __decorate([
        core_1.Component({
            selector: 'kt-bottom-sheet',
            templateUrl: './bottom-sheet.component.html'
        }),
        __metadata("design:paramtypes", [material_1.MatBottomSheet])
    ], BottomSheetComponent);
    return BottomSheetComponent;
}());
exports.BottomSheetComponent = BottomSheetComponent;
//# sourceMappingURL=bottom-sheet.component.js.map