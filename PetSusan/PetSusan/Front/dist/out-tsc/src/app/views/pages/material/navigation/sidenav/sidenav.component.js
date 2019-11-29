"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basicSidenav = {
    beforeCodeTitle: 'Basic sidenav',
    htmlCode: "\n<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content>Main content</mat-sidenav-content>\n</mat-sidenav-container>\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Basic sidenav */\n@Component({\n  selector: 'sidenav-overview-example',\n  templateUrl: 'sidenav-overview-example.html',\n  styleUrls: ['sidenav-overview-example.css'],\n})\nexport class SidenavOverviewExample {\n  shouldRun = [/(^|.)plnkr.co$/, /(^|.)stackblitz.io$/].some(h => h.test(window.location.host));\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var basicDrawer = {
    beforeCodeTitle: 'Basic drawer',
    htmlCode: "\n<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened=\"true\">Drawer content</mat-drawer>\n  <mat-drawer-content>Main content</mat-drawer-content>\n</mat-drawer-container>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Basic drawer */\n@Component({\n  selector: 'sidenav-drawer-overview-example',\n  templateUrl: 'sidenav-drawer-overview-example.html',\n  styleUrls: ['sidenav-drawer-overview-example.css'],\n})\nexport class SidenavDrawerOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var autosizeSidenav = {
    beforeCodeTitle: 'Autosize sidenav',
    htmlCode: "\n<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n</mat-drawer-container>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Autosize sidenav\n*/\n@Component({\n  selector: 'sidenav-autosize-example',\n  templateUrl: 'sidenav-autosize-example.html',\n  styleUrls: ['sidenav-autosize-example.css'],\n})\nexport class SidenavAutosizeExample {\n  showFiller = false;\n}\n",
    cssCode: "\n.example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.example-sidenav {\n  padding: 20px;\n}\n\t\t\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.showFiller = false;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.exampleBasicSidenav = basicSidenav;
        this.exampleBasicDrawer = basicDrawer;
        this.exampleAutosizeSidenav = autosizeSidenav;
    };
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'kt-sidenav',
            templateUrl: './sidenav.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-container {\n\t\twidth: 400px;\n\t\theight: 200px;\n\t\tmargin: 10px;\n\t\tborder: 1px solid #555;\n\t  }\n\t  .example-container {\n\t\twidth: 500px;\n\t\theight: 300px;\n\t\tborder: 1px solid rgba(0, 0, 0, 0.5);\n\t  }\n\t  .example-sidenav-content {\n\t\tdisplay: flex;\n\t\theight: 100%;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t  }\n\t  .example-sidenav {\n\t\tpadding: 20px;\n\t  }\n\t"]
        })
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;
//# sourceMappingURL=sidenav.component.js.map