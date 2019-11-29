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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var rxjs_1 = require("rxjs");
var Modal3Component = /** @class */ (function () {
    function Modal3Component() {
    }
    Modal3Component = __decorate([
        core_1.Component({
            selector: 'kt-modal3',
            template: "\n\t\t<div class=\"col-xl-12\">\n\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t<div class=\"kt-modal3__container\">\n\t\t\t\t\t<h1 mat-dialog-title>Favorite Animal</h1>\n\t\t\t\t\t<h2 mat-dialog-title>Install Angular</h2>\n\t\t\t\t\t<mat-dialog-content>\n\t\t\t\t\t\t<h3>DEVELOP ACROSS ALL PLATFORMS</h3>\n\t\t\t\t\t\t<p>Learn one way to build applications with Angular and reuse your code and abilities to build\n\t\t\t\t\t\t\tapps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\t\t\t\t\t\t<h3>SPEED &amp; PERFORMANCE</h3>\n\t\t\t\t\t\t<p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n\t\t\t\t\t\t\tWorkers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements\n\t\t\t\t\t\t\tby building data models on RxJS, Immutable.js or another push-model.</p>\n\t\t\t\t\t\t<h3>INCREDIBLE TOOLING</h3>\n\t\t\t\t\t\t<p>Build features quickly with simple, declarative templates. Extend the template language with your own\n\t\t\t\t\t\t\tcomponents and use a wide array of existing components. Get immediate Angular-specific help and feedback\n\t\t\t\t\t\t\twith nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather\n\t\t\t\t\t\t\tthan trying to make the code work.</p>\n\t\t\t\t\t\t<h3>LOVED BY MILLIONS</h3>\n\t\t\t\t\t\t<p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure\n\t\t\t\t\t\t\tthat supports Google's largest applications.</p>\n\t\t\t\t\t</mat-dialog-content>\n\t\t\t\t\t<mat-dialog-actions>\n\t\t\t\t\t\t<button mat-button mat-dialog-close>Cancel</button>\n\t\t\t\t\t\t<button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n\t\t\t\t\t</mat-dialog-actions>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>",
        })
    ], Modal3Component);
    return Modal3Component;
}());
exports.Modal3Component = Modal3Component;
var Modal2Component = /** @class */ (function () {
    function Modal2Component(data) {
        this.data = data;
    }
    Modal2Component = __decorate([
        core_1.Component({
            selector: 'kt-modal2',
            template: "\n\t\t<div class=\"col-xl-12\">\n\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t<div class=\"kt-modal2__container\">\n\t\t\t\t\t<h1 mat-dialog-title>Favorite Animal</h1>\n\t\t\t\t\t<div mat-dialog-content>\n\t\t\t\t\t\tMy favorite animal is:\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
        }),
        __param(0, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [Object])
    ], Modal2Component);
    return Modal2Component;
}());
exports.Modal2Component = Modal2Component;
var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'kt-modal',
            template: "\n\t\t<div class=\"col-xl-12\">\n\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t<br/>\n\t\t\t\t<h1 mat-dialog-title>Hi {{data.name}}</h1>\n\t\t\t\t<div mat-dialog-content>\n\t\t\t\t\t<p>What's your favorite animal?</p>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput [(ngModel)]=\"data.animal\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div mat-dialog-actions>\n\t\t\t\t\t<button mat-button (click)=\"onNoClick()\">No Thanks</button>\n\t\t\t\t\t<button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n\t\t\t\t</div>\n\t\t\t\t<br/>\n\t\t\t</div>\n\t\t</div>",
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
var basic = {
    beforeCodeTitle: 'Dialog Overview',
    htmlCode: "\n\t\t<h1 mat-dialog-title>Hi {{data.name}}</h1>\n\t\t<div mat-dialog-content>\n\t\t  <p>What's your favorite animal?</p>\n\t\t  <mat-form-field>\n\t\t\t<input matInput [(ngModel)]=\"data.animal\">\n\t\t  </mat-form-field>\n\t\t</div>\n\t\t<div mat-dialog-actions>\n\t\t  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n\t\t  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n\t\t</div>\n",
    tsCode: "\nimport {Component, Inject} from '@angular/core';\nimport {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';\n\n/**\n* @title Dialog Overview\n*/\n@Component({\n  selector: 'dialog-overview-example',\n  templateUrl: 'dialog-overview-example.html',\n  styleUrls: ['dialog-overview-example.css'],\n})\nexport class DialogOverviewExample {\n\n  animal: string;\n  name: string;\n\n  constructor(public dialog: MatDialog) {}\n\n  openDialog(): void {\n    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {\n      width: '250px',\n      data: { name: this.name, animal: this.animal }\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log('The dialog was closed');\n      this.animal = result;\n    });\n  }\n}\n\n@Component({\n  selector: 'dialog-overview-example-dialog',\n  template: `\n    <h1 mat-dialog-title>Hi {{data.name}}</h1>\n    <div mat-dialog-content>\n      <p>What's your favorite animal?</p>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"data.animal\">\n      </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n      <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n    </div>`\n})\nexport class DialogOverviewExampleDialog {\n\n  constructor(\n    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,\n      @Inject(MAT_DIALOG_DATA) public data: any) { }\n\n  onNoClick(): void {\n    this.dialogRef.close();\n  }\n\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var injecting = {
    beforeCodeTitle: 'Injecting data when opening a dialog',
    htmlCode: '<button mat-button (click)="openDialog()">Open dialog</button>',
    tsCode: "\nimport {Component, Inject} from '@angular/core';\nimport {MatDialog, MAT_DIALOG_DATA} from '@angular/material';\n\n/**\n* @title Injecting data when opening a dialog\n*/\n@Component({\n  selector: 'dialog-data-example',\n  templateUrl: 'dialog-data-example.html',\n  styleUrls: ['dialog-data-example.css']\n})\nexport class DialogDataExample {\n  constructor(public dialog: MatDialog) {}\n\n  openDialog() {\n    this.dialog.open(DialogDataExampleDialog, {\n      data: {\n        animal: 'panda'\n     }\n    });\n  }\n}\n\n@Component({\n  selector: 'dialog-data-example-dialog',\n  template: `\n    <h1 mat-dialog-title>Favorite Animal</h1>\n    <div mat-dialog-content>\n      My favorite animal is:\n      <ul>\n        <li>\n          <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n        </li>\n        <li>\n          <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n        </li>\n        <li>\n          <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n        </li>\n      </ul>\n    </div>\n\t`,\n})\nexport class DialogDataExampleDialog {\n  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var header = {
    beforeCodeTitle: 'Dialog with header, scrollable content and actions',
    htmlCode: "\n<button mat-button (click)=\"openDialog()\">Open dialog</button>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatDialog} from '@angular/material';\n\n/**\n* @title Dialog with header, scrollable content and actions\n*/\n@Component({\n  selector: 'dialog-content-example',\n  templateUrl: 'dialog-content-example.html',\n  styleUrls: ['dialog-content-example.css'],\n})\nexport class DialogContentExample {\n  constructor(public dialog: MatDialog) {}\n\n  openDialog() {\n    const dialogRef = this.dialog.open(DialogContentExampleDialog, {\n      height: '350px'\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(`Dialog result: ${result}`);\n    });\n  }\n}\n\n@Component({\n  selector: 'dialog-content-example-dialog',\n  templateUrl: 'dialog-content-example-dialog.html',\n})\nexport class DialogContentExampleDialog {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
        this.animal2 = '';
        this.animalSubject = new rxjs_1.BehaviorSubject('');
    }
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animal$ = this.animalSubject.asObservable();
        this.animal$.subscribe(function (result) {
            _this.animal = result;
        });
        this.exampleBasic = basic;
        this.exampleInjecting = injecting;
        this.examplHeader = header;
    };
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ModalComponent, {
            width: '280px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.animalSubject.next(result);
            }
        });
    };
    DialogComponent.prototype.openDialog2 = function () {
        this.dialog.open(Modal2Component, {
            data: {
                animal: 'panda'
            }
        });
    };
    DialogComponent.prototype.openDialog3 = function () {
        var dialogRef = this.dialog.open(Modal3Component, {
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-dialog',
            templateUrl: './dialog.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.Default,
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
//# sourceMappingURL=dialog.component.js.map