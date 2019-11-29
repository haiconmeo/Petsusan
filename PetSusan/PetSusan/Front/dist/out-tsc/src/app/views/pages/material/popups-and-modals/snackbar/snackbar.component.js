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
var pizza_party_component_1 = require("./pizza-party.component");
var basic = {
    beforeCodeTitle: 'Basic snack-bar',
    htmlCode: "\n<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatSnackBar} from '@angular/material';\n\n/**\n* @title Basic snack-bar\n*/\n@Component({\n  selector: 'snack-bar-overview-example',\n  templateUrl: 'snack-bar-overview-example.html',\n  styleUrls: ['snack-bar-overview-example.css'],\n})\nexport class SnackBarOverviewExample {\n  constructor(public snackBar: MatSnackBar) {}\n\n  openSnackBar(message: string, action: string) {\n    this.snackBar.open(message, action, {\n      duration: 2000,\n    });\n  }\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var custom = {
    beforeCodeTitle: 'Snack-bar with a custom component',
    htmlCode: "\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatSnackBar} from '@angular/material';\n\n/**\n* @title Snack-bar with a custom component\n*/\n@Component({\n  selector: 'snack-bar-component-example',\n  templateUrl: 'snack-bar-component-example.html',\n})\nexport class SnackBarComponentExample {\n  constructor(public snackBar: MatSnackBar) {}\n\n  openSnackBar() {\n    this.snackBar.openFromComponent(PizzaPartyComponent, {\n      duration: 500,\n    });\n  }\n}\n\n@Component({\n  selector: 'snack-bar-component-example-snack',\n  template: `\n\t<span _ngcontent-c3=\"\" class=\"example-pizza-party\">\n      Pizza party!!! \uD83C\uDF55\n    </span>`,\n  styles: [`.example-pizza-party { color: hotpink; }`],\n})\nexport class PizzaPartyComponent {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var dismissal = {
    beforeCodeTitle: 'Dismissal example with 6 seconds duration',
    htmlCode: "\n<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatSnackBar} from '@angular/material';\n\n/**\n* @title Basic snack-bar\n*/\n@Component({\n  selector: 'snack-bar-overview-example',\n  templateUrl: 'snack-bar-overview-example.html',\n  styleUrls: ['snack-bar-overview-example.css'],\n})\nexport class SnackBarOverviewExample {\n  constructor(public snackBar: MatSnackBar) {}\n\n  openSnackBar(message: string, action: string) {\n    this.snackBar.open(message, action, {\n      duration: 2000,\n    });\n  }\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    SnackbarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackbarComponent.prototype.openSnackBar2 = function () {
        this.snackBar.openFromComponent(pizza_party_component_1.PizzaPartyComponent, {
            duration: 500,
        });
    };
    SnackbarComponent.prototype.openSnackBar3 = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 6500,
        });
    };
    SnackbarComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleCustom = custom;
        this.exampleDismissal = dismissal;
    };
    SnackbarComponent = __decorate([
        core_1.Component({
            selector: 'kt-snackbar',
            templateUrl: './snackbar.component.html',
            styles: ["\n\t"]
        }),
        __metadata("design:paramtypes", [material_1.MatSnackBar])
    ], SnackbarComponent);
    return SnackbarComponent;
}());
exports.SnackbarComponent = SnackbarComponent;
//# sourceMappingURL=snackbar.component.js.map