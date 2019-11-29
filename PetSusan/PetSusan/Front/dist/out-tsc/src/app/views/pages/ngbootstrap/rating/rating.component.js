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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var basicDemo = {
    beforeCodeTitle: 'Basic demo',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n    <div class=\"kt-separator kt-separator--dashed\"></div>\n    <pre>Rate: <b>{{currentRate}}</b></pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-rating-basic',\n    templateUrl: './rating-basic.html'\n})\nexport class NgbdRatingBasic {\n    currentRate = 8;\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var eventsAndReadonlyRatings = {
    beforeCodeTitle: 'Events and readonly ratings',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <pre>Selected: <b>{{selected}}</b></pre>\n    <pre>Hovered: <b>{{hovered}}</b></pre>\n    <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <button class=\"btn btn-sm btn-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\n      {{ readonly ? \"readonly\" : \"editable\"}}\n    </button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-rating-events',\n  templateUrl: './rating-events.html'\n})\nexport class NgbdRatingEvents {\n  selected = 0;\n  hovered = 0;\n  readonly = false;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var customStarTemplate = {
    beforeCodeTitle: 'Custom star template',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    Custom rating template provided as child element\n  </span>\n  <div class=\"kt-section__content\">\n    <ngb-rating [(rate)]=\"currentRate1\">\n      <ng-template let-fill=\"fill\" let-index=\"index\">\n        <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\n      </ng-template>\n\t</ngb-rating>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <pre>Rate: <b>{{currentRate1}}</b></pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-rating-template',\n    templateUrl: './rating-template.html',\n    styles: [`\n        .star {\n            font-size: 1.5rem;\n                color: #b0c4de;\n            }\n            .filled {\n                color: #1e90ff;\n            }\n            .bad {\n                color: #deb0b0;\n            }\n            .filled.bad {\n                color: #ff1e1e;\n            }\n        `]\n})\nexport class NgbdRatingTemplate {\n    currentRate = 6;\n}\n ",
    viewCode: "",
    isCodeVisible: false
};
var customDecimalRating = {
    beforeCodeTitle: 'Custom decimal rating',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    Custom rating template provided via a variable. Shows fine-grained rating display\n  </span>\n  <div class=\"kt-section__content\">\n    <ng-template #t let-fill=\"fill\">\n      <span class=\"star2\" [class.full]=\"fill === 100\">\n        <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n      </span>\n    </ng-template>\n    <ngb-rating [(rate)]=\"currentRate2\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <pre>Rate: <b>{{currentRate2}}</b></pre>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"currentRate2 = 1.35\">1.35</button>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"currentRate2 = 4.72\">4.72</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-rating-decimal',\n    templateUrl: './rating-decimal.html',\n    styles: [`\n        .star {\n\t\t\tposition: relative;\n            display: inline-block;\n            font-size: 3rem;\n            color: #d3d3d3;\n        }\n        .full {\n             color: red;\n        }\n        .half {\n            position: absolute;\n            display: inline-block;\n            overflow: hidden;\n            color: red;\n        }\n   `]\n})\nexport class NgbdRatingDecimal {\n    currentRate = 3.14;\n}\n\t",
    viewCode: "",
    isCodeVisible: false
};
var formIntegration = {
    beforeCodeTitle: 'Form integration',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    NgModel and reactive forms can be used without the 'rate' binding\n  </span>\n  <div class=\"kt-section__content\">\n    <div class=\"form-group\">\n\t  <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\n      <div class=\"form-text small\">\n        <div *ngIf=\"ctrl.valid\" class=\"text-success\">Thanks!</div>\n        <div *ngIf=\"ctrl.invalid\" class=\"text-danger\">Please rate us</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">Model: <b>{{ ctrl.value }}</b></span>\n  <div class=\"kt-section__content\">\n    <button class=\"btn btn-sm btn-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\n      {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\n    </button>\n\t<button class=\"btn btn-sm btn-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\n\n@Component({\n    selector: 'ngbd-rating-form',\n    templateUrl: './rating-form.html'\n})\nexport class NgbdRatingForm {\n    ctrl = new FormControl(null, Validators.required);\n\n    toggle() {\n        if (this.ctrl.disabled) {\n            this.ctrl.enable();\n        } else {\n            this.ctrl.disable();\n        }\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfRatings = {
    beforeCodeTitle: 'Global configuration of ratings',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    This rating uses customized default values.\n  </span>\n  <div class=\"kt-section__content\">\n    <ngb-rating [rate]=\"3\" max=\"5\" [readonly]=\"true\"></ngb-rating>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-rating-config',\n    templateUrl: './rating-config.html',\n    providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers\n})\nexport class NgbdRatingConfig {\n    constructor(config: NgbRatingConfig) {\n    // customize default values of ratings used by this component tree\n    config.max = 5;\n    config.readonly = true;\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(config) {
        this.currentRate = 8;
        this.currentRate1 = 6;
        this.currentRate2 = 3.14;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        this.ctrl = new forms_1.FormControl(null, forms_1.Validators.required);
        // customize default values of ratings used by this component tree
        // config.max = 5;
        // config.readonly = true;
    }
    RatingComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    RatingComponent.prototype.ngOnInit = function () {
        this.exampleBasicDemo = basicDemo;
        this.exampleEventsAndReadonlyRatings = eventsAndReadonlyRatings;
        this.exampleCustomStarTemplate = customStarTemplate;
        this.exampleCustomDecimalRating = customDecimalRating;
        this.exampleFormIntegration = formIntegration;
        this.exampleGlobalConfigurationOfRatings = globalConfigurationOfRatings;
    };
    RatingComponent = __decorate([
        core_1.Component({
            selector: 'kt-rating',
            templateUrl: './rating.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t\t.star {\n\t\tf\tont-size: 1.5rem;\n\t\t\tcolor: #b0c4de;\n\t\t}\n\t\t.filled {\n\t\t\tcolor: #1e90ff;\n\t\t}\n\t\t.bad {\n\t\t\tcolor: #deb0b0;\n\t\t}\n\t\t.filled.bad {\n\t\t\tcolor: #ff1e1e;\n\t\t}\n\t\t.star2 {\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 3rem;\n\t\t\tcolor: #d3d3d3;\n\t\t  }\n\t\t.full {\n\t\t\tcolor: red;\n\t\t  }\n\t\t.half {\n\t\t\tposition: absolute;\n\t\t\tdisplay: inline-block;\n\t\t\toverflow: hidden;\n\t\t\tcolor: red;\n\t\t}\n\t"],
            providers: [ng_bootstrap_1.NgbRatingConfig] // add NgbRatingConfig to the component providers
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbRatingConfig])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map