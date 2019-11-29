"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_bootstrap_2 = require("@ng-bootstrap/ng-bootstrap");
var now = new Date();
var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var basicDatepicker = {
    beforeCodeTitle: 'Basic datepicker',
    htmlCode: "\n<div class=\"kt-section\">\n  <h3 class=\"kt-section__heading\">Simple datepicker</h3>\n  <div class=\"kt-section__content\">\n    <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__heading\">\n    <button class=\"btn btn-sm btn-primary\" (click)=\"selectToday()\">Select Today</button>\n    <button class=\"btn btn-sm btn-info\" (click)=\"dp.navigateTo()\">To current month</button>\n    <button class=\"btn btn-sm btn-danger\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n  </div>\n  <div class=\"kt-section__content\">\n    <pre>Month: {{ date.month }}.{{ date.year }}</pre>\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\nconst now = new Date();\n\n@Component({\n  selector: 'ngbd-datepicker-basic',\n  templateUrl: './datepicker-basic.html'\n})\nexport class NgbdDatepickerBasic {\n\n  model: NgbDateStruct;\n  date: {year: number, month: number};\n\n  selectToday() {\n    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};\n  }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var datepickerInAPopup = {
    beforeCodeTitle: 'Datepicker in a popup',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__heading\">\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n  <div class=\"kt-section__content\">\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'ngbd-collapse-basic',\n  templateUrl: './collapse-basic.html'\n})\nexport class NgbdCollapseBasic {\n  public isCollapsed = false;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var multipleMonths = {
    beforeCodeTitle: 'Multiple months',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\"></ngb-datepicker>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <form class=\"form-inline\">\n      <div class=\"form-group kt-form__group\">\n        <div class=\"input-group\">\n\t\t  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\"\n           [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\" ngbDatepicker #d=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <select class=\"custom-select kt-input\" [(ngModel)]=\"displayMonths\">\n      <option [ngValue]=\"1\">One month</option>\n      <option [ngValue]=\"2\">Two months</option>\n      <option [ngValue]=\"3\">Three months</option>\n    </select>\n    <select class=\"custom-select kt-input\" [(ngModel)]=\"navigation\">\n      <option value=\"none\">Without navigation</option>\n      <option value=\"select\">With select boxes</option>\n      <option value=\"arrows\">Without select boxes</option>\n    </select>\n    <select class=\"custom-select kt-input\" [(ngModel)]=\"showWeekNumbers\">\n      <option [ngValue]=\"true\">Week numbers</option>\n      <option [ngValue]=\"false\">No week numbers</option>\n    </select>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-datepicker-multiple',\n  templateUrl: './datepicker-multiple.html',\n  styles: [`\n    select.custom-select {\n    margin-right: 0.5rem;\n    width: auto;\n  }\n `]\n})\nexport class NgbdDatepickerMultiple {\n  displayMonths = 2;\n  navigation = 'select';\n  showWeekNumbers = false;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var rangeSelection = {
    beforeCodeTitle: 'Range selection',
    htmlCode: "\n<div class=\"kt-section\">\n  <h3 class=\"kt-section__heading\">Example of the range selection</h3>\n  <div class=\"kt-section__content\">\n    <ngb-datepicker #dp ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\"></ngb-datepicker>\n    <ng-template #t let-date=\"date\" let-focused=\"focused\">\n\t  <span class=\"custom-day\" [class.focused]=\"focused\"\n        [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\" [class.faded]=\"isHovered(date) || isInside(date)\"\n        (mouseenter)=\"hoveredDate = date\" (mouseleave)=\"hoveredDate = null\">\n        {{ date.day }}\n      </span>\n    </ng-template>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <pre>From: {{ fromDate | json }} </pre>\n    <pre>To: {{ toDate | json }} </pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';\n\nconst equals = (one: NgbDateStruct, two: NgbDateStruct) =>\n  one && two && two.year === one.year && two.month === one.month && two.day === one.day;\n\nconst before = (one: NgbDateStruct, two: NgbDateStruct) =>\n  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day\n  ? false : one.day < two.day : one.month < two.month : one.year < two.year;\n\nconst after = (one: NgbDateStruct, two: NgbDateStruct) =>\n  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day\n  ? false : one.day > two.day : one.month > two.month : one.year > two.year;\n\n@Component({\n  selector: 'ngbd-datepicker-range',\n  templateUrl: './datepicker-range.html',\n  styles: [`\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n\t}\n    .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n    .custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n `]\n})\nexport class NgbdDatepickerRange {\n  hoveredDate: NgbDateStruct;\n  fromDate: NgbDateStruct;\n  toDate: NgbDateStruct;\n\n  constructor(calendar: NgbCalendar) {\n    this.fromDate = calendar.getToday();\n    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);\n  }\n\n  onDateChange(date: NgbDateStruct) {\n    if (!this.fromDate && !this.toDate) {\n      this.fromDate = date;\n    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {\n      this.toDate = date;\n    } else {\n      this.toDate = null;\n      this.fromDate = date;\n    }\n  }\n\n  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);\n  isInside = date => after(date, this.fromDate) && before(date, this.toDate);\n  isFrom = date => equals(date, this.fromDate);\n  isTo = date => equals(date, this.toDate);\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var disabledDatepicker = {
    beforeCodeTitle: 'Disabled datepicker',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ngb-datepicker [(ngModel)]=\"model\" [disabled]=\"disabled\"></ngb-datepicker>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <button class=\"btn btn-sm btn-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\n      {{ disabled ? \"disabled\" : \"enabled\"}}\n    </button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\nconst now = new Date();\n\n@Component({\n  selector: 'ngbd-datepicker-disabled',\n  templateUrl: './datepicker-disabled.html'\n})\nexport class NgbdDatepickerDisabled {\n  model: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};\n  disabled = true;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var customDateAdapter = {
    beforeCodeTitle: 'Custom date adapter',
    htmlCode: "\n\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n\tThese datepickers use custom Date adapter that lets you use your own model implementation.\n    In this example we are converting from and to a JS native Date object\n  </span>\n  <div class=\"kt-section__content\">\n    <ngb-datepicker #d1 [(ngModel)]=\"model1\" #c1=\"ngModel\"></ngb-datepicker>\n    <div class=\"kt-separator kt-separator--dashed\"></div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"model1 = today\">Select Today</button>\n    <div class=\"kt-separator kt-separator--dashed\"></div>\n    <pre>Model: {{ model1 | json }}</pre>\n    <pre>State: {{ c1.status }}</pre>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n\tThese datepickers use custom Date adapter that lets you use your own model implementation. In this example we are\n    converting from and to a JS native Date object\n  </span>\n\n  <div class=\"kt-section__content\">\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n\t\t  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d22\" #c2=\"ngModel\" [(ngModel)]=\"model2\"\n            ngbDatepicker #d22=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d22.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n    <div class=\"kt-separator kt-separator--dashed\"></div>\n    <button class=\"btn btn-sm btn-info\" (click)=\"model2 = today\">Select Today</button>\n\t<div class=\"kt-separator kt-separator--dashed\"></div>\n    <pre>Model: {{ model2 | json }}</pre>\n    <pre>State: {{ c2.status }}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, Injectable} from '@angular/core';\nimport {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\n/**\n* Example of a Native Date adapter\n*/\n@Injectable()\nexport class NgbDateNativeAdapter extends NgbDateAdapter<Date> {\n  fromModel(date: Date): NgbDateStruct {\n    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : null;\n  }\n\n  toModel(date: NgbDateStruct): Date {\n    return date ? new Date(date.year, date.month - 1, date.day) : null;\n  }\n}\n\n@Component({\n  selector: 'ngbd-datepicker-adapter',\n  templateUrl: './datepicker-adapter.html',\n\n  // NOTE: For this example we are only providing current component, but probably\n  // NOTE: you will want to provide your main App Module\n  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]\n})\nexport class NgbdDatepickerAdapter {\n  model1: Date;\n  model2: Date;\n\n  get today() {\n    return new Date();\n  }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var iternationalizationOfDatepickers = {
    beforeCodeTitle: 'Internationalization of datepicker',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    Datepicker in French\n  </span>\n  <div class=\"kt-section__content\">\n    <ngb-datepicker [(ngModel)]=\"fourthModel\"></ngb-datepicker>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, Injectable} from '@angular/core';\nimport {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';\n\nconst I18N_VALUES = {\n  'fr': {\n    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],\n    months: ['Jan', 'F\u00E9v', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'D\u00E9c'],\n  }\n  // other languages you would support\n};\n\n// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also\n// use the Angular LOCALE_ID value\n@Injectable()\nexport class I18n {\n  language = 'fr';\n}\n\n// Define custom service providing the months and weekdays translations\n@Injectable()\nexport class CustomDatepickerI18n extends NgbDatepickerI18n {\n  constructor(private _i18n: I18n) {\n    super();\n  }\n\n  getWeekdayShortName(weekday: number): string {\n    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];\n  }\n\n  getMonthShortName(month: number): string {\n    return I18N_VALUES[this._i18n.language].months[month - 1];\n  }\n\n  getMonthFullName(month: number): string {\n    return this.getMonthShortName(month);\n  }\n}\n\n@Component({\n  selector: 'ngbd-datepicker-i18n',\n  templateUrl: './datepicker-i18n.html',\n  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}] // define custom NgbDatepickerI18n provider\n})\nexport class NgbdDatepickerI18n {\n  model;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var customDayView = {
    beforeCodeTitle: 'Custom day view',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.\n  </span>\n  <div class=\"kt-section__content\">\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n\t\t  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"fifthModel\" ngbDatepicker\n           [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #d=\"ngbDatepicker\">\n\t      <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"d.toggle()\" type=\"button\">\n              <i class=\"la la-calendar\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n   </form>\n\t<ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\"\n      let-focused=\"focused\">\n\t  <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.focused]=\"focused\" [class.bg-primary]=\"selected\"\n        [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\n        {{ date.day }}\n      </span>\n    </ng-template>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, Input} from '@angular/core';\nimport {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n@Component({\n  selector: 'ngbd-datepicker-customday',\n  templateUrl: './datepicker-customday.html',\n  styles: [`\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      border-radius: 0.25rem;\n      display: inline-block;\n      width: 2rem;\n    }\n    .custom-day:hover, .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .weekend {\n      background-color: #f0ad4e;\n      border-radius: 1rem;\n      color: white;\n    }\n    .hidden {\n      display: none;\n    }\n `]\n})\nexport class NgbdDatepickerCustomday {\n  model: NgbDateStruct;\n\n  isWeekend(date: NgbDateStruct) {\n    const d = new Date(date.year, date.month - 1, date.day);\n    return d.getDay() === 0 || d.getDay() === 6;\n  }\n\n  isDisabled(date: NgbDateStruct, current: {month: number}) {\n    return date.month !== current.month;\n  }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var alternativeCalendars = {
    beforeCodeTitle: 'Alternative calendars',
    htmlCode: "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <ngbd-islamic-civil></ngbd-islamic-civil>\n    </div>\n    <div class=\"col\">\n      <ngbd-islamic-umalqura></ngbd-islamic-umalqura>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-collapse-basic',\n    templateUrl: './collapse-basic.html'\n})\nexport class NgbdCollapseBasic {\n    public isCollapsed = false;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var globalConfigurationOfDatepickers = {
    beforeCodeTitle: 'Global configuration of datepickers',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    This datepicker uses customized default values.\n  </span>\n  <div class=\"kt-section__content\">\n    <ngb-datepicker [(ngModel)]=\"model\"></ngb-datepicker>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n  selector: 'ngbd-datepicker-config',\n  templateUrl: './datepicker-config.html',\n  providers: [NgbDatepickerConfig] // add NgbDatepickerConfig to the component providers\n})\nexport class NgbdDatepickerConfig {\n  model;\n\n  constructor(config: NgbDatepickerConfig) {\n    // customize default values of datepickers used by this component tree\n    config.minDate = {year: 1900, month: 1, day: 1};\n    config.maxDate = {year: 2099, month: 12, day: 31};\n\n    // days that don't belong to current month are not visible\n    config.outsideDays = 'hidden';\n\n    // weekends are disabled\n    config.markDisabled = (date: NgbDateStruct) => {\n    const d = new Date(date.year, date.month - 1, date.day);\n      return d.getDay() === 0 || d.getDay() === 6;\n     };\n  }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
/**
 * Example of a Native Date adapter
 */
var NgbDateNativeAdapter = /** @class */ (function (_super) {
    __extends(NgbDateNativeAdapter, _super);
    function NgbDateNativeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateNativeAdapter.prototype.fromModel = function (date) {
        return (date && date.getFullYear) ? { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : null;
    };
    NgbDateNativeAdapter.prototype.toModel = function (date) {
        return date ? new Date(date.year, date.month - 1, date.day) : null;
    };
    NgbDateNativeAdapter = __decorate([
        core_1.Injectable()
    ], NgbDateNativeAdapter);
    return NgbDateNativeAdapter;
}(ng_bootstrap_1.NgbDateAdapter));
exports.NgbDateNativeAdapter = NgbDateNativeAdapter;
var I18N_VALUES = {
    'fr': {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
    }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'fr';
    }
    I18n = __decorate([
        core_1.Injectable()
    ], I18n);
    return I18n;
}());
exports.I18n = I18n;
// Define custom service providing the months and weekdays translations
var CustomDatepickerI18n = /** @class */ (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getDayAriaLabel = function (date) {
        throw new Error('Method not implemented.'); // TODO: implement this
    };
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(ng_bootstrap_2.NgbDatepickerI18n));
exports.CustomDatepickerI18n = CustomDatepickerI18n;
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(calendar, config) {
        var _this = this;
        this.displayMonths = 2;
        this.navigation = 'select';
        this.showWeekNumbers = false;
        this.thirdModel = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.disabled = true;
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        // customize default values of datepickers used by this component tree
        config.minDate = { year: 1900, month: 1, day: 1 };
        config.maxDate = { year: 2099, month: 12, day: 31 };
        // days that don't belong to current month are not visible
        config.outsideDays = 'hidden';
        // weekends are disabled
        config.markDisabled = function (date) {
            var d = new Date(date.year, date.month - 1, date.day);
            return d.getDay() === 0 || d.getDay() === 6;
        };
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.exampleBasicDatepicker = basicDatepicker;
        this.exampleDatepickerInAPopup = datepickerInAPopup;
        this.exampleMultipleMonths = multipleMonths;
        this.exampleRangeSelection = rangeSelection;
        this.exampleDisabledDatepicker = disabledDatepicker;
        this.exampleCustomDateAdapter = customDateAdapter;
        this.exampleInternationalizationOfDatepickers = iternationalizationOfDatepickers;
        this.exampleCustomDayView = customDayView;
        this.exampleAlternativeCalendar = alternativeCalendars;
        this.exampleGlobalConfigurationOfDatepickers = globalConfigurationOfDatepickers;
    };
    DatepickerComponent.prototype.selectToday = function () {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    Object.defineProperty(DatepickerComponent.prototype, "today", {
        get: function () {
            return new Date();
        },
        enumerable: true,
        configurable: true
    });
    DatepickerComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DatepickerComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    DatepickerComponent.prototype.onDateChange = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    DatepickerComponent = __decorate([
        core_1.Component({
            selector: 'kt-datepicker',
            templateUrl: './datepicker.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n    select.custom-select {\n      margin-right: 0.5rem;\n      width: auto;\n\t}\n\t.custom-day {\n\t\ttext-align: center;\n\t\tpadding: 0.185rem 0.25rem;\n\t\tdisplay: inline-block;\n\t\theight: 2rem;\n\t\twidth: 2rem;\n\t  }\n\t  .custom-day.focused {\n\t\tbackground-color: #e6e6e6;\n\t  }\n\t  .custom-day.range, .custom-day:hover {\n\t\tbackground-color: rgb(2, 117, 216);\n\t\tcolor: white;\n\t  }\n\t  .custom-day.faded {\n\t\tbackground-color: rgba(2, 117, 216, 0.5);\n\t  }\n\t  .weekend {\n\t\tbackground-color: #f0ad4e;\n\t\tborder-radius: 1rem;\n\t\tcolor: white;\n\t  }\n\t  .hidden {\n\t\tdisplay: none;\n\t  }\n  "],
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbCalendar, ng_bootstrap_1.NgbDatepickerConfig])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.component.js.map