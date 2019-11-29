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
var material_moment_adapter_1 = require("@angular/material-moment-adapter");
var core_2 = require("@angular/material/core");
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
var _moment = require("moment");
// tslint:disable-next-line:no-duplicate-imports
var moment_1 = require("moment");
var basicDatepicker = {
    beforeCodeTitle: 'Basic datepicker',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Basic datepicker */\n@Component({\n  selector: 'datepicker-overview-example',\n  templateUrl: 'datepicker-overview-example.html',\n  styleUrls: ['datepicker-overview-example.css'],\n})\nexport class DatepickerOverviewExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var datepickerSelectedValue = {
    beforeCodeTitle: 'Datepicker selected value',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"align\">\n        <mat-radio-button class=\"example-margin\" value=\"start\">Start</mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"end\">End</mat-radio-button>\n      </mat-radio-group>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <section class=\"example-section\">\n      <mat-checkbox\n        class=\"example-margin\"\n        [(ngModel)]=\"checked\"\n        [(indeterminate)]=\"indeterminate\"\n        [align]=\"align\"\n        [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/** @title Datepicker selected value */\n@Component({\n  selector: 'datepicker-value-example',\n  templateUrl: 'datepicker-value-example.html',\n  styleUrls: ['datepicker-value-example.css'],\n})\nexport class DatepickerValueExample {\n  date = new FormControl(new Date());\n  serializedDate = new FormControl((new Date()).toISOString());\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerStartDate = {
    beforeCodeTitle: 'Datepicker start date',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker start date */\n@Component({\n  selector: 'datepicker-start-view-example',\n  templateUrl: 'datepicker-start-view-example.html',\n  styleUrls: ['datepicker-start-view-example.css'],\n})\nexport class DatepickerStartViewExample {\n  startDate = new Date(1990, 0, 1);\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerWithMinMaxValidation = {
    beforeCodeTitle: 'Datepicker with min & max validation',
    htmlCode: "\n<mat-form-field class=\"example-full-width\">\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker with min & max validation */\n@Component({\n  selector: 'datepicker-min-max-example',\n  templateUrl: 'datepicker-min-max-example.html',\n  styleUrls: ['datepicker-min-max-example.css'],\n})\nexport class DatepickerMinMaxExample {\n  minDate = new Date(2000, 0, 1);\n  maxDate = new Date(2020, 0, 1);\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerWithFilterValidation = {
    beforeCodeTitle: 'Datepicker with filter validation',
    htmlCode: "\n<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker with filter validation */\n@Component({\n  selector: 'datepicker-filter-example',\n  templateUrl: 'datepicker-filter-example.html',\n  styleUrls: ['datepicker-filter-example.css'],\n})\nexport class DatepickerFilterExample {\n  myFilter = (d: Date): boolean => {\n    const day = d.getDay();\n    // Prevent Saturday and Sunday from being selected.\n    return day !== 0 && day !== 6;\n  }\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerInputAndChangeEvents = {
    beforeCodeTitle: 'Datepicker input and change events',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\"\n    (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<div class=\"example-events\">\n  <div *ngFor=\"let e of events\">{{e}}</div>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatDatepickerInputEvent} from '@angular/material/datepicker';\n\n/** @title Datepicker input and change events */\n@Component({\n  selector: 'datepicker-events-example',\n  templateUrl: 'datepicker-events-example.html',\n  styleUrls: ['datepicker-events-example.css'],\n})\nexport class DatepickerEventsExample {\n  events: string[] = [];\n\n  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {\n  this.events.push(`${type}: ${event.value}`);\n  }\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var disabledDatepicker = {
    beforeCodeTitle: 'Disabled datepicker',
    htmlCode: "\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\n    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\n\t<mat-datepicker-toggle matSuffix [for]=\"dp3\">\n  </mat-datepicker-toggle>\n  <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n    </mat-form-field>\n</p>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Disabled datepicker */\n@Component({\n  selector: 'datepicker-disabled-example',\n  templateUrl: 'datepicker-disabled-example.html',\n  styleUrls: ['datepicker-disabled-example.css'],\n})\nexport class DatepickerDisabledExample {}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerTouchUI = {
    beforeCodeTitle: 'Datepicker touch UI',
    htmlCode: "\n<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Datepicker touch UI */\n@Component({\n  selector: 'datepicker-touch-example',\n  templateUrl: 'datepicker-touch-example.html',\n  styleUrls: ['datepicker-touch-example.css'],\n})\nexport class DatepickerTouchExample {}",
    viewCode: "",
    cssCode: "",
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
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n\n/** @title Datepicker with different locale */\n@Component({\n  selector: 'datepicker-locale-example',\n  templateUrl: 'datepicker-locale-example.html',\n  styleUrls: ['datepicker-locale-example.css'],\n  providers: [\n    // The locale would typically be provided on the root module of your application. We do it at\n    // the component level here, due to limitations of our example generation script.\n    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},\n\n    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing\n    // `MatMomentDateModule` in your applications root module. We provide it at the component level\n\t// here, due to limitations of our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},\n  ],\n})\nexport class DatepickerLocaleExample {\n  constructor(private adapter: DateAdapter<any>) {}\n  french() {\n    this.adapter.setLocale('fr');\n  }\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerThatUsesMomentJsDates = {
    beforeCodeTitle: 'Datepicker that uses Moment.js dates',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n\n// Depending on whether rollup is used, moment needs to be imported differently.\n// Since Moment.js doesn't have a default export, we normally need to import using the `* as`\n// syntax. However, rollup creates a synthetic default module and we thus need to import it using\n// the `default as` syntax.\nimport * as _moment from 'moment';\nimport {default as _rollupMoment} from 'moment';\nconst moment = _rollupMoment || _moment;\n\n/** @title Datepicker that uses Moment.js dates */\n@Component({\n  selector: 'datepicker-moment-example',\n  templateUrl: 'datepicker-moment-example.html',\n  styleUrls: ['datepicker-moment-example.css'],\n  providers: [\n    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing\n    // `MatMomentDateModule` in your applications root module. We provide it at the component level\n    // here, due to limitations of our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},\n  ],\n})\nexport class DatepickerMomentExample {\n// Datepicker takes `Moment` objects instead of `Date` objects.\n  date = new FormControl(moment([2017, 0, 1]));\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var datepickerWithCustomFormats = {
    beforeCodeTitle: 'Datepicker with custom formats',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n\n// Depending on whether rollup is used, moment needs to be imported differently.\n// Since Moment.js doesn't have a default export, we normally need to import using the `* as`\n// syntax. However, rollup creates a synthetic default module and we thus need to import it using\n// the `default as` syntax.\nimport * as _moment from 'moment';\nimport {default as _rollupMoment} from 'moment';\nconst moment = _rollupMoment || _moment;\n// See the Moment.js docs for the meaning of these formats:\n// https://momentjs.com/docs/#/displaying/format/\nexport const MY_FORMATS = {\n  parse: {\n    dateInput: 'LL',\n  },\n  display: {\n    dateInput: 'LL',\n    monthYearLabel: 'MMM YYYY',\n    dateA11yLabel: 'LL',\n    monthYearA11yLabel: 'MMMM YYYY',\n  },\n};\n/** @title Datepicker with custom formats */\n@Component({\n  selector: 'datepicker-formats-example',\n  templateUrl: 'datepicker-formats-example.html',\n  styleUrls: ['datepicker-formats-example.css'],\n  providers: [\n  // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your\n  // application's root module. We provide it at the component level here, due to limitations of\n  // our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n\t{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},\n  ],\n})\nexport class DatepickerFormatsExample {\n  date = new FormControl(moment());\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var usesMomentJsDates = {
    beforeCodeTitle: 'Datepicker uses Moment.js dates',
    htmlCode: "\n<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';\nimport {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n\n// Depending on whether rollup is used, moment needs to be imported differently.\n// Since Moment.js doesn't have a default export, we normally need to import using the `* as`\n// syntax. However, rollup creates a synthetic default module and we thus need to import it using\n// the `default as` syntax.\nimport * as _moment from 'moment';\n// tslint:disable-next-line:no-duplicate-imports\nimport {default as _rollupMoment} from 'moment';\n\nconst moment = _rollupMoment || _moment;\n\n/** @title Datepicker that uses Moment.js dates */\n@Component({\n  selector: 'datepicker-moment-example',\n  templateUrl: 'datepicker-moment-example.html',\n  styleUrls: ['datepicker-moment-example.css'],\n  providers: [\n  // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing\n  // `MatMomentDateModule` in your applications root module. We provide it at the component level\n  // here, due to limitations of our example generation script.\n    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},\n    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},\n  ],\n})\nexport class DatepickerMomentExample {\n  // Datepicker takes `Moment` objects instead of `Date` objects.\n  date = new FormControl(moment([2017, 0, 1]));\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var moment = moment_1.default || _moment;
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        this.startDate = new Date(1990, 0, 1);
        this.date = new forms_1.FormControl(new Date());
        this.date10 = new forms_1.FormControl(moment([2017, 0, 1]));
        this.serializedDate = new forms_1.FormControl((new Date()).toISOString());
        this.minDate = new Date(2011, 0, 1);
        this.maxDate = new Date(2018, 11, 1);
        this.events = [];
        this.myFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.exampleBasicDatepicker = basicDatepicker;
        this.exampleDatepickerStartDate = datepickerStartDate;
        this.exampleDatepickerSelectedValue = datepickerSelectedValue;
        this.exampleDatepickerWithMinMaxValidation = datepickerWithMinMaxValidation;
        this.exampleDatepickerWithFilterValidation = datepickerWithFilterValidation;
        this.exampleDatepickerInputAndChangeEvents = datepickerInputAndChangeEvents;
        this.exampleDisabledDatepicker = disabledDatepicker;
        this.exampleDatepickerTouchUI = datepickerTouchUI;
        this.exampleDatepickerOpenMethod = datepickerOpenMethod;
        this.exampleDatepickerWithDifferentLocale = datepickerWithDifferentLocale;
        this.exampleDatepickerThatUsesMomentJsDates = datepickerThatUsesMomentJsDates;
        this.exampleDatepickerWithCustomFormats = datepickerWithCustomFormats;
        this.exampleUsesMomentJsDates = usesMomentJsDates;
    };
    DatepickerComponent.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerComponent = __decorate([
        core_1.Component({
            selector: 'kt-datepicker',
            templateUrl: './datepicker.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-events {\n\t\twidth: 400px;\n\t\theight: 200px;\n\t\tborder: 1px solid #555;\n\t\toverflow: auto;\n\t  }\n\t"],
            providers: [
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: core_2.DateAdapter, useClass: material_moment_adapter_1.MomentDateAdapter, deps: [core_2.MAT_DATE_LOCALE] },
                { provide: core_2.MAT_DATE_FORMATS, useValue: material_moment_adapter_1.MAT_MOMENT_DATE_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.component.js.map