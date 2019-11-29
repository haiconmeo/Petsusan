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
var simpleFormField = {
    beforeCodeTitle: 'Simple form field',
    htmlCode: "\n<div class=\"example-container\">\n  <mat-form-field>\n     <input matInput placeholder=\"Input\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Textarea\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Simple form field */\n=@Component({\n  selector: 'form-field-overview-example',\n  templateUrl: 'form-field-overview-example.html',\n  styleUrls: ['form-field-overview-example.css']\n})\nexport class FormFieldOverviewExample {}",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false
};
var formFieldAppearanceVariants = {
    beforeCodeTitle: 'Form field appearance variants',
    htmlCode: "\n<p>\n  <mat-form-field appearance=\"legacy\">\n    <mat-label>Legacy form field</mat-label>\n      <input matInput placeholder=\"Placeholder\">\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n      <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Standard form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n     <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n  ",
    tsCode: "\nimport {Component} from '@angular/core';\n\n\n/** @title Form field appearance variants */\n@Component({\n  selector: 'form-field-appearance-example',\n  templateUrl: 'form-field-appearance-example.html',\n  styleUrls: ['form-field-appearance-example.css'],\n})\nexport class FormFieldAppearanceExample {}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var formFieldWithLabel = {
    beforeCodeTitle: 'Form field with label',
    htmlCode: "\n<div class=\"example-container\">\n  <form class=\"example-container\" [formGroup]=\"options\">\n    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group formControlName=\"floatLabel\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n        <mat-radio-button value=\"never\">Never</mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </form>\n  <mat-form-field\n    [hideRequiredMarker]=\"options.value.hideRequired\"\n    [floatLabel]=\"options.value.floatLabel\">\n    <input matInput placeholder=\"Simple placeholder\" required>\n  </mat-form-field>\n  <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n    <mat-label>Both a label and a placeholder</mat-label>\n    <input matInput placeholder=\"Simple placeholder\">\n  </mat-form-field>\n  <mat-form-field\n    [hideRequiredMarker]=\"options.value.hideRequired\"\n    [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-placeholder><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> placeholder</i></mat-placeholder>\n  </mat-form-field>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormBuilder, FormGroup} from '@angular/forms';\n/** @title Form field with label */\n@Component({\n  selector: 'form-field-label-example',\n  templateUrl: 'form-field-label-example.html',\n  styleUrls: ['form-field-label-example.css']\n})\nexport class FormFieldLabelExample {\n  options: FormGroup;\n  constructor(fb: FormBuilder) {\n    this.options = fb.group({\n      hideRequired: false,\n      floatLabel: 'auto',\n    });\n  }\n}",
    viewCode: "",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}\n.example-container form {\n  margin-bottom: 20px;\n}\n.example-container form > * {\n  margin: 5px 0;\n}\n.example-container .mat-radio-button {\n  margin: 0 5px;\n}",
    isCodeVisible: false
};
var formFieldWithHints = {
    beforeCodeTitle: 'Form field with hints',
    htmlCode: "\n<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\n    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select placeholder=\"Select me\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Form field with hints */\n@Component({\n  selector: 'form-field-hint-example',\n  templateUrl: 'form-field-hint-example.html',\n  styleUrls: ['form-field-hint-example.css']\n})\nexport class FormFieldHintExample {}",
    viewCode: "",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}",
    isCodeVisible: false
};
var formFieldWithErrorMessages = {
    beforeCodeTitle: 'Form field with error messages',
    htmlCode: "\n<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\n\n/** @title Form field with error messages */\n@Component({\n  selector: 'form-field-error-example',\n  templateUrl: 'form-field-error-example.html',\n  styleUrls: ['form-field-error-example.css']\n})\nexport class FormFieldErrorExample {\n  email = new FormControl('', [Validators.required, Validators.email]);\n\n  getErrorMessage() {\n    return this.email.hasError('required') ? 'You must enter a value' :\n      this.email.hasError('email') ? 'Not a valid email' :\n    '';\n  }\n}",
    viewCode: "",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}",
    isCodeVisible: false
};
var formFieldWithPrefixSuffix = {
    beforeCodeTitle: 'Form field with prefix & suffix',
    htmlCode: "\n<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\">\n    <span matPrefix>$&nbsp;</span>\n    <span matSuffix>.00</span>\n  </mat-form-field>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Form field with prefix & suffix */\n@Component({\n  selector: 'form-field-prefix-suffix-example',\n  templateUrl: 'form-field-prefix-suffix-example.html',\n  styleUrls: ['form-field-prefix-suffix-example.css']\n})\nexport class FormFieldPrefixSuffixExample {\n  hide = true;\n}",
    viewCode: "",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}\n.example-right-align {\n  text-align: right;\n}\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\ninput.example-right-align {\n  -moz-appearance: textfield;\n}",
    isCodeVisible: false
};
var formFieldTheming = {
    beforeCodeTitle: 'Form field theming',
    htmlCode: "\n<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field [color]=\"options.value.color\">\n    <mat-select placeholder=\"Color\" formControlName=\"color\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field [color]=\"options.value.color\">\n    <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\n     <mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n </form>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormBuilder, FormGroup, Validators} from '@angular/forms';\n\n/** @title Form field theming */\n@Component({\n  selector: 'form-field-theming-example',\n  templateUrl: 'form-field-theming-example.html',\n  styleUrls: ['form-field-theming-example.css']\n})\nexport class FormFieldThemingExample {\n  options: FormGroup;\n\n  constructor(fb: FormBuilder) {\n    this.options = fb.group({\n      'color': 'primary',\n      'fontSize': [16, Validators.min(10)],\n    });\n  }\n  getFontSize() {\n    return Math.max(10, this.options.value.fontSize);\n  }\n}",
    viewCode: "",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}",
    isCodeVisible: false
};
var formFieldWithCustomTelephoneNumberInputControl = {
    beforeCodeTitle: 'Form field with custom telephone number input control.',
    htmlCode: "\n<div [formGroup]=\"parts\">\n  <input class=\"area\" formControlName=\"area\" size=\"3\">\n  <span>&ndash;</span>\n  <input class=\"exchange\" formControlName=\"exchange\" size=\"3\">\n  <span>&ndash;</span>\n  <input class=\"subscriber\" formControlName=\"subscriber\" size=\"4\">\n</div>",
    tsCode: "\nimport {FocusMonitor} from '@angular/cdk/a11y';\nimport {coerceBooleanProperty} from '@angular/cdk/coercion';\nimport {Component, ElementRef, Input, OnDestroy} from '@angular/core';\nimport {FormBuilder, FormGroup} from '@angular/forms';\nimport {MatFormFieldControl} from '@angular/material';\nimport {Subject} from 'rxjs/Subject';\n\n/** Data structure for holding telephone number. */\nexport class MyTel {\n  constructor(public area: string, public exchange: string, public subscriber: string) {}\n}\n/** Custom `MatFormFieldControl` for telephone number input. */\n@Component({\n  selector: 'my-tel-input',\n  templateUrl: 'form-field-custom-control-example.html',\n  styleUrls: ['form-field-custom-control-example.css'],\n  providers: [{provide: MatFormFieldControl, useExisting: MyTelInput}],\n  host: {\n    '[class.floating]': 'shouldLabelFloat',\n    '[id]': 'id',\n    '[attr.aria-describedby]': 'describedBy',\n  }\n})\nexport class MyTelInput implements MatFormFieldControl<MyTel>, OnDestroy {\n  static nextId = 0;\n  parts: FormGroup;\n  stateChanges = new Subject<void>();\n  focused = false;\n  ngControl = null;\n  errorState = false;\n  controlType = 'my-tel-input';\n  get empty() {\n    let n = this.parts.value;\n    return !n.area && !n.exchange && !n.subscriber;\n  }\n  get shouldLabelFloat() { return this.focused || !this.empty; }\n  id = `my-tel-input-${MyTelInput.nextId++}`;\n  describedBy = '';\n\n  @Input()\n  get placeholder() { return this._placeholder; }\n  set placeholder(plh) {\n    this._placeholder = plh;\n    this.stateChanges.next();\n  }\n\n  private _placeholder: string;\n  @Input()\n  get required() { return this._required; }\n  set required(req) {\n    this._required = coerceBooleanProperty(req);\n    this.stateChanges.next();\n  }\n\n  private _required = false;\n\n  @Input()\n  get disabled() { return this._disabled; }\n  set disabled(dis) {\n    this._disabled = coerceBooleanProperty(dis);\n    this.stateChanges.next();\n  }\n\n  private _disabled = false;\n\n  @Input()\n  get value(): MyTel | null {\n    let n = this.parts.value;\n    if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {\n      return new MyTel(n.area, n.exchange, n.subscriber);\n    }\n    return null;\n  }\n  set value(tel: MyTel | null) {\n    tel = tel || new MyTel('', '', '');\n    this.parts.setValue({area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber});\n    this.stateChanges.next();\n  }\n\n  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef) {\n    this.parts = fb.group({\n      'area': '',\n      'exchange': '',\n     'subscriber': '',\n    });\n\n    fm.monitor(elRef.nativeElement, true).subscribe((origin) => {\n      this.focused = !!origin;\n      this.stateChanges.next();\n    });\n  }\n\n  ngOnDestroy() {\n    this.stateChanges.complete();\n    this.fm.stopMonitoring(this.elRef.nativeElement);\n  }\n\n  setDescribedByIds(ids: string[]) {\n    this.describedBy = ids.join(' ');\n  }\n\n  onContainerClick(event: MouseEvent) {\n    if ((event.target as Element).tagName.toLowerCase() != 'input') {\n      this.elRef.nativeElement.querySelector('input').focus();\n    }\n  }\n}\n\n\n/** @title Form field with custom telephone number input control. */\n@Component({\n  selector: 'form-field-custom-control-example',\n  template: `\n    <mat-form-field>\n      <my-tel-input placeholder=\"Phone number\" required></my-tel-input>\n      <mat-icon matSuffix>phone</mat-icon>\n      <mat-hint>Include area code</mat-hint>\n    </mat-form-field>\n  `\n})\nexport class FormFieldCustomControlExample {}",
    viewCode: "",
    cssCode: "\ndiv {\n  display: flex;\n}\n\ninput {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\nspan {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.floating span {\n  opacity: 1;\n}",
    isCodeVisible: false
};
var FormfieldComponent = /** @class */ (function () {
    function FormfieldComponent(fb) {
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        this.hide = true;
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.options2 = fb.group({
            // tslint:disable-next-line:object-literal-key-quotes
            'color': 'primary',
            // tslint:disable-next-line:object-literal-key-quotes
            'fontSize': [16, forms_1.Validators.min(10)],
        });
    }
    FormfieldComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormfieldComponent.prototype.getFontSize = function () {
        return Math.max(10, this.options2.value.fontSize);
    };
    FormfieldComponent.prototype.ngOnInit = function () {
        this.exampleSimpleFormField = simpleFormField;
        this.exampleFormFieldWithLabel = formFieldWithLabel;
        this.exampleFormFieldWithHints = formFieldWithHints;
        this.exampleFormFieldWithErrorMessages = formFieldWithErrorMessages;
        this.exampleFormFieldWithPrefixSuffix = formFieldWithPrefixSuffix;
        this.exampleFormFieldTheming = formFieldTheming;
        this.exampleFormFieldWithCustomTelephoneNumberInputControl = formFieldWithCustomTelephoneNumberInputControl;
        this.exampleFormFieldAppearanceVariants = formFieldAppearanceVariants;
    };
    FormfieldComponent = __decorate([
        core_1.Component({
            selector: 'kt-formfield',
            templateUrl: './formfield.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t  }\n\t  .example-container > * {\n\t\twidth: 100%;\n\t  }\n\n\t  .example-container form {\n\t  \tmargin-bottom: 20px;\n  \t  }\n  \t  .example-container form > * {\n\t    margin: 5px 0;\n      }\n  \t  .example-container .mat-radio-button {\n\t    margin: 0 5px;\n\t  }\n\t  .example-right-align {\n\t\ttext-align: right;\n\t  }\n\t  input.example-right-align::-webkit-outer-spin-button,\n\t  input.example-right-align::-webkit-inner-spin-button {\n\t\tdisplay: none;\n\t  }\n\t  input.example-right-align {\n\t\t-moz-appearance: textfield;\n\t  }\n\t"]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], FormfieldComponent);
    return FormfieldComponent;
}());
exports.FormfieldComponent = FormfieldComponent;
//# sourceMappingURL=formfield.component.js.map