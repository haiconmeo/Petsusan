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
var basicInputs = {
    beforeCodeTitle: 'Basic Inputs',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Leave a comment\"></textarea>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic Inputs\n*/\n@Component({\n  selector: 'input-overview-example',\n  styleUrls: ['input-overview-example.css'],\n  templateUrl: 'input-overview-example.html',\n})\nexport class InputOverviewExample {}",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false
};
var inputWithACustomErrorStateMatcher = {
    beforeCodeTitle: 'Input with a custom ErrorStateMatcher',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n      [errorStateMatcher]=\"matcher\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';\nimport {ErrorStateMatcher} from '@angular/material/core';\n\n/** Error when invalid control is dirty, touched, or submitted. */\nexport class MyErrorStateMatcher implements ErrorStateMatcher {\n  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {\n  const isSubmitted = form && form.submitted;\n    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));\n  }\n}\n/** @title Input with a custom ErrorStateMatcher */\n@Component({\n  selector: 'input-error-state-matcher-example',\n  templateUrl: './input-error-state-matcher-example.html',\n  styleUrls: ['./input-error-state-matcher-example.css'],\n})\nexport class InputErrorStateMatcherExample {\n  emailFormControl = new FormControl('', [\n  Validators.required,\n  Validators.email,\n]);\n  matcher = new MyErrorStateMatcher();\n}",
    viewCode: "",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    isCodeVisible: false
};
var autoResizingTextarea = {
    beforeCodeTitle: 'Auto-resizing textarea',
    htmlCode: "\n<mat-form-field>\n  <textarea matInput placeholder=\"Autosize textarea\" matTextareaAutosize matAutosizeMinRows=\"2\"\n    matAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';'n\n/** @title Auto-resizing textarea */\n@Component({\n  selector: 'input-autosize-textarea-example',\n  templateUrl: './input-autosize-textarea-example.html',\n  styleUrls: ['./input-autosize-textarea-example.css'],\n})\nexport class InputAutosizeTextareaExample {}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var inputWithAClearButton = {
    beforeCodeTitle: 'Input with a clear button',
    htmlCode: "\n<mat-form-field class=\"example-form-field\">\n  <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"/>\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n </mat-form-field>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Input with a clear button\n*/\n@Component({\n  selector: 'input-clearable-example',\n  templateUrl: './input-clearable-example.html',\n  styleUrls: ['./input-clearable-example.css'],\n})\nexport class InputClearableExample {\n  value = 'Clear me';\n}",
    viewCode: "",
    cssCode: "\n.example-form-field {\n  width: 200px;\n}",
    isCodeVisible: false
};
var inputWithErrorMessages = {
    beforeCodeTitle: 'Input with error messages',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n </form>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\n\n/**\n* @title Input with error messages\n*/\n@Component({\n  selector: 'input-errors-example',\n  templateUrl: 'input-errors-example.html',\n  styleUrls: ['input-errors-example.css'],\n})\nexport class InputErrorsExample {\n  emailFormControl = new FormControl('', [\n    Validators.required,\n    Validators.email,\n  ]);\n}",
    viewCode: "",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    isCodeVisible: false
};
var inputsInAForm = {
    beforeCodeTitle: 'Inputs in a form',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n  </mat-form-field>\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"First name\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n    </mat-form-field></td>\n  </tr></table>\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address 2\"></textarea>\n    </mat-form-field>\n  </p>\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"City\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"State\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Inputs in a form\n*/\n@Component({\n  selector: 'input-form-example',\n  templateUrl: 'input-form-example.html',\n  styleUrls: ['input-form-example.css'],\n})\nexport class InputFormExample {}",
    viewCode: "",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    isCodeVisible: false
};
var inputWithHints = {
    beforeCodeTitle: 'Input with hints',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Input with hints\n*/\n@Component({\n  selector: 'input-hint-example',\n  templateUrl: 'input-hint-example.html',\n  styleUrls: ['input-hint-example.css'],\n})\nexport class InputHintExample {}",
    viewCode: "",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    isCodeVisible: false
};
var inputsWithPrefixesAndSuffixes = {
    beforeCodeTitle: 'Inputs with prefixes and suffixes',
    htmlCode: "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <span matPrefix>+1 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"Telephone\">\n    <mat-icon matSuffix>mode_edit</mat-icon>\n  </mat-form-field>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Inputs with prefixes and suffixes\n*/\n@Component({\n  selector: 'input-prefix-suffix-example',\n  templateUrl: 'input-prefix-suffix-example.html',\n styleUrls: ['input-prefix-suffix-example.css'],\n})\nexport class InputPrefixSuffixExample {}",
    viewCode: "",
    cssCode: "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    isCodeVisible: false
};
var datepickerOpenMethod = {
    beforeCodeTitle: 'Datepicker open method',
    htmlCode: "\n<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n    <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker open method */\n@Component({\n  selector: 'datepicker-api-example',\n  templateUrl: 'datepicker-api-example.html',\n  styleUrls: ['datepicker-api-example.css'],\n})\nexport class DatepickerApiExample {}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerWithDifferentLocale = {
    beforeCodeTitle: 'Datepicker with different locale',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n/** @title Datepicker with different locale */\n@Component({\n  selector: 'datepicker-locale-example',\n  templateUrl: 'datepicker-locale-example.html',\n  styleUrls: ['datepicker-locale-example.css'],\n  providers: [\n    // The locale would typically be provided on the root module of your application. We do it at\n    // the component level here, due to limitations of our example generation script.\n    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},\n    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing\n    // `MatMomentDateModule` in your applications root module. We provide it at the component level\n\t// here, due to limitations of our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},\n  ],\n})\nexport class DatepickerLocaleExample {\n  constructor(private adapter: DateAdapter<any>) {}\n  french() {\n    this.adapter.setLocale('fr');\n  }\n}",
    viewCode: "",
    cssCode: "\n\t\t",
    isCodeVisible: false
};
var datepickerThatUsesMomentJsDates = {
    beforeCodeTitle: 'Datepicker that uses Moment.js dates',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n\n// Depending on whether rollup is used, moment needs to be imported differently.\n// Since Moment.js doesn't have a default export, we normally need to import using the `* as`\n// syntax. However, rollup creates a synthetic default module and we thus need to import it using\n// the `default as` syntax.\nimport * as _moment from 'moment';\nimport {default as _rollupMoment} from 'moment';\nconst moment = _rollupMoment || _moment;\n\n/** @title Datepicker that uses Moment.js dates */\n@Component({\n  selector: 'datepicker-moment-example',\n  templateUrl: 'datepicker-moment-example.html',\n  styleUrls: ['datepicker-moment-example.css'],\n  providers: [\n    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing\n    // `MatMomentDateModule` in your applications root module. We provide it at the component level\n    // here, due to limitations of our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},\n  ],\n})\nexport class DatepickerMomentExample {\n// Datepicker takes `Moment` objects instead of `Date` objects.\n  date = new FormControl(moment([2017, 0, 1]));\n}",
    viewCode: "",
    cssCode: "\n\t\t",
    isCodeVisible: false
};
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
exports.MyErrorStateMatcher = MyErrorStateMatcher;
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.emailFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.email,
        ]);
        this.emailFormControl2 = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.value = 'Clear me';
    }
    InputComponent.prototype.ngOnInit = function () {
        this.exampleBasicInputs = basicInputs;
        this.exampleInputWithACustomErrorStateMatcher = inputWithACustomErrorStateMatcher;
        this.exampleAutoResizingTextarea = autoResizingTextarea;
        this.exampleInputWithAClearButton = inputWithAClearButton;
        this.exampleInputWithErrorMessages = inputWithErrorMessages;
        this.exampleInputsInAForm = inputsInAForm;
        this.exampleInputWithHints = inputWithHints;
        this.exampleInputsWithPrefixesAndSuffixes = inputsWithPrefixesAndSuffixes;
    };
    InputComponent = __decorate([
        core_1.Component({
            selector: 'kt-input',
            templateUrl: './input.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-form {\n\t\tmin-width: 150px;\n\t\tmax-width: 500px;\n\t\twidth: 100%;\n\t  }\n\t  .example-full-width {\n\t\twidth: 100%;\n\t  }\n\t  .example-form-field {\n\t\twidth: 200px;\n\t  }\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.component.js.map