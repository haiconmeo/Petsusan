"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basicSlider = {
    beforeCodeTitle: 'Basic slider',
    htmlCode: "<mat-slider></mat-slider>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n * @title Basic slider\n */\n@Component({\n  selector: 'slider-overview-example',\n  templateUrl: 'slider-overview-example.html',\n  styleUrls: ['slider-overview-example.css'],\n})\nexport class SliderOverviewExample {}\n\t\t",
    cssCode: "\n/** No CSS for this example */\n.mat-slider {\n  width: 300px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var configurableSlider = {
    beforeCodeTitle: 'Configurable slider',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\n        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n     </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n    <mat-slider\n      class=\"example-margin\"\n      [disabled]=\"disabled\"\n      [invert]=\"invert\"\n      [max]=\"max\"\n      [min]=\"min\"\n      [step]=\"step\"\n      [thumb-label]=\"thumbLabel\"\n      [tick-interval]=\"tickInterval\"\n      [(ngModel)]=\"value\"\n      [vertical]=\"vertical\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\n\n/**\n* @title Configurable slider\n*/\n@Component({\n  selector: 'slider-configurable-example',\n  templateUrl: 'slider-configurable-example.html',\n  styleUrls: ['slider-configurable-example.css'],\n  encapsulation: ViewEncapsulation.None,\n  preserveWhitespaces: false,\n})\nexport class SliderConfigurableExample {\n  autoTicks = false;\n  disabled = false;\n  invert = false;\n  max = 100;\n  min = 0;\n  showTicks = false;\n  step = 1;\n  thumbLabel = false;\n  value = 0;\n  vertical = false;\n\n  get tickInterval(): number | 'auto' {\n    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;\n  }\n  set tickInterval(v) {\n    this._tickInterval = Number(v);\n  }\n  private _tickInterval = 1;\n}",
    viewCode: "",
    cssCode: "\n.example-h2 {\n  margin: 10px;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.example-margin {\n  margin: 10px;\n}\n.mat-slider-horizontal {\n  width: 300px;\n}\n.mat-slider-vertical {\n  height: 300px;\n}",
    isCodeVisible: false
};
var changeEvent = {
    beforeCodeTitle: 'Change event binding',
    htmlCode: "\n<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"myValue\" min=\"0\" max=\"100\" step=\"1\"></mat-slider>\n<div class=\"kt-separator kt-separator--dashed\" *ngIf=\"myValue\"></div>\n<span *ngIf=\"myValue\">Selected: <mark>{{ myValue }}</mark>%</span>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'slider-change-event-example',\n  templateUrl: 'slider-change-event-example.html',\n  styleUrls: ['slider-change-event-example.css'],\n})\nexport class SliderChangeEventExample {\n\n  myValue = 50;\n  changeSlider() {\n    console.log('myValue:', this.myValue);\n  }\n}",
    cssCode: "\n.mat-slider {\n  width: 300px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
        this.myValue = 50;
    }
    Object.defineProperty(SliderComponent.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnInit = function () {
        this.exampleBasicSlider = basicSlider;
        this.exampleConfigurableSlider = configurableSlider;
        this.exampleChangeEvent = changeEvent;
    };
    SliderComponent.prototype.changeSlider = function () {
        console.log('myValue', this.myValue);
    };
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'kt-slider',
            templateUrl: './slider.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.mat-slider {\n\t\twidth: 300px;\n\t}\n\t.example-margin {\n\t\t  margin: 15px;\n\t  }\n\t"],
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        })
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map