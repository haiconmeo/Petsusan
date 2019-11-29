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
var forms_1 = require("@angular/forms");
var basicStepper = {
    beforeCodeTitle: 'Basic stepper',
    htmlCode: "\n<button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button>\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n     <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormBuilder, FormGroup, Validators} from '@angular/forms';\n/**\n* @title Stepper overview\n*/\n@Component({\n  selector: 'stepper-overview-example',\n  templateUrl: 'stepper-overview-example.html',\n  styleUrls: ['stepper-overview-example.css']\n})\nexport class StepperOverviewExample {\n  isLinear = false;\n  firstFormGroup: FormGroup;\n  secondFormGroup: FormGroup;\n  constructor(private _formBuilder: FormBuilder) { }\n  ngOnInit() {\n    this.firstFormGroup = this._formBuilder.group({\n      firstCtrl: ['', Validators.required]\n    });\n    this.secondFormGroup = this._formBuilder.group({\n      secondCtrl: ['', Validators.required]\n    });\n  }\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var horizontalStepper = {
    beforeCodeTitle: 'Horizontal stepper',
    htmlCode: "\n<mat-horizontal-stepper>\n  <mat-step label=\"Step 1\">\n    Content 1\n  </mat-step>\n  <mat-step label=\"Step 1\">\n    Content 2\n  </mat-step>\n</mat-horizontal-stepper>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Horizontal stepper\n*/\n@Component({\n  selector: 'stepper-horizontal-example',\n  styleUrls: ['stepper-horizontal-example.css'],\n  templateUrl: 'stepper-horizontal-example.html',\n})\nexport class StepperHorizontalExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var stepperOverview = {
    beforeCodeTitle: 'Stepper overview',
    htmlCode: "\n<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n\t<h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title List with sections\n*/\n@Component({\n  selector: 'list-sections-example',\n  styleUrls: ['list-sections-example.css'],\ntemplateUrl: 'list-sections-example.html',\n})\nexport class ListSectionsExample {\n  folders = [\n  {\n    name: 'Photos',\n    updated: new Date('1/1/16'),\n  },\n  {\n    name: 'Recipes',\n    updated: new Date('1/17/16'),\n  },\n  {\n    name: 'Work',\n    updated: new Date('1/28/16'),\n  }\n  ];\n  notes = [\n  {\n    name: 'Vacation Itinerary',\n    updated: new Date('2/20/16'),\n  },\n  {\n    name: 'Kitchen Remodel',\n    updated: new Date('1/18/16'),\n  }\n  ];\n}\n",
    cssCode: "\n.mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var StepperComponent = /** @class */ (function () {
    function StepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    StepperComponent.prototype.ngOnInit = function () {
        this.exampleBasicStepper = basicStepper;
        this.exampleHorizontalStepper = horizontalStepper;
        this.exampleStepperOverview = stepperOverview;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', forms_1.Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', forms_1.Validators.required]
        });
    };
    StepperComponent = __decorate([
        core_1.Component({
            selector: 'kt-stepper',
            templateUrl: './stepper.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], StepperComponent);
    return StepperComponent;
}());
exports.StepperComponent = StepperComponent;
//# sourceMappingURL=stepper.component.js.map