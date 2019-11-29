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
var checkboxButtons = {
    beforeCodeTitle: 'Checkbox buttons',
    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    Click buttons to get the result:\n    <pre>{{modelFirst | json}}</pre>\n  </span>\n  <div class=\"kt-section__content\">\n    <div class=\"btn-group btn-group-toggle\">\n      <label class=\"btn-primary\" ngbButtonLabel>\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.left\"> Left (pre-checked)\n      </label>\n      <label class=\"btn-success\" ngbButtonLabel>\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.middle\"> Middle\n      </label>\n      <label class=\"btn-info\" ngbButtonLabel>\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"modelFirst.right\"> Right\n       </label>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-buttons-checkbox',\n    templateUrl: './buttons-checkbox.html'\n})\nexport class NgbdButtonsCheckbox {\n    model = {\n    left: true,\n    middle: false,\n    right: false\n  };\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var checkboxButtonsReactiveForms = {
    beforeCodeTitle: 'Checkbox buttons (Reactive Forms)',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    Click buttons to get the result:\n    <pre>{{checkboxGroupForm.value | json}}</pre>\n  </span>\n  <div class=\"kt-section__content\">\n    <form [formGroup]=\"checkboxGroupForm\">\n      <div class=\"btn-group btn-group-toggle\">\n        <label class=\"btn-warning\" ngbButtonLabel>\n          <input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\n        </label>\n        <label class=\"btn-danger\" ngbButtonLabel>\n          <input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\n        </label>\n        <label class=\"btn-success\" ngbButtonLabel>\n          <input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\n        </label>\n      </div>\n     </form>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-buttons-checkbox',\n    templateUrl: './buttons-checkbox.html'\n})\nexport class NgbdButtonsCheckbox {\n    model = {\n        left: true,\n        middle: false,\n        right: false\n    };\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var radioButtons = {
    beforeCodeTitle: 'Radio buttons',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    Click buttons to get the result:\n    <pre>{{secondModel}}</pre>\n  </span>\n  <div class=\"kt-section__content\">\n    <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"secondModel\">\n      <label ngbButtonLabel class=\"btn-primary\">\n        <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n      </label>\n      <label ngbButtonLabel class=\"btn-info\">\n        <input ngbButton type=\"radio\" value=\"middle\"> Middle\n      </label>\n      <label ngbButtonLabel class=\"btn-danger\">\n        <input ngbButton type=\"radio\" [value]=\"false\"> Right\n      </label>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-buttons-radio',\n    templateUrl: './buttons-radio.html'\n})\nexport class NgbdButtonsRadio {\n    model = 1;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var radioButtonsReactiveForms = {
    beforeCodeTitle: 'Radio buttons (Reactive Forms)',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    Click buttons to get the result:\n    <pre>{{radioGroupForm.value['model']}}</pre>\n  </span>\n  <div class=\"kt-section__content\">\n    <form [formGroup]=\"radioGroupForm\">\n      <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n        <label ngbButtonLabel class=\"btn-warning\">\n          <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n        </label>\n        <label ngbButtonLabel class=\"btn-success\">\n          <input ngbButton type=\"radio\" value=\"middle\"> Middle\n        </label>\n        <label ngbButtonLabel class=\"btn-info\">\n          <input ngbButton type=\"radio\" [value]=\"false\"> Right\n        </label>\n      </div>\n    </form>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {FormBuilder, FormGroup} from '@angular/forms';\n\n@Component({\n    selector: 'ngbd-buttons-radioreactive',\n    templateUrl: './buttons-radioreactive.html'\n})\nexport class NgbdButtonsRadioreactive implements OnInit {\n    public radioGroupForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    ngOnInit() {\n        this.radioGroupForm = this.formBuilder.group({\n            'model': 1\n        });\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.modelFirst = {
            left: true,
            middle: false,
            right: false
        };
        this.secondModel = 1;
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        this.exampleCheckboxButtons = checkboxButtons;
        this.exampleCheckboxButtonsReactiveForms = checkboxButtonsReactiveForms;
        this.exampleRadioButtons = radioButtons;
        this.exampleRadioButtonsReactiveForms = radioButtonsReactiveForms;
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
        this.radioGroupForm = this.formBuilder.group({
            model: 1
        });
    };
    ButtonsComponent = __decorate([
        core_1.Component({
            selector: 'kt-buttons',
            templateUrl: './buttons.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], ButtonsComponent);
    return ButtonsComponent;
}());
exports.ButtonsComponent = ButtonsComponent;
//# sourceMappingURL=buttons.component.js.map