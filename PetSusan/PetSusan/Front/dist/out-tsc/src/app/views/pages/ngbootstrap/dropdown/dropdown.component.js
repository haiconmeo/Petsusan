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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var dropdown = {
    beforeCodeTitle: 'Dropdown',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div ngbDropdown class=\"d-inline-block\">\n          <button class=\"btn btn-success\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <button class=\"dropdown-item\">Action - 1</button>\n            <button class=\"dropdown-item\">Another Action</button>\n            <button class=\"dropdown-item\">Something else is here</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col text-right\">\n        <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\n          <button class=\"btn btn-outline-success\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n            <button class=\"dropdown-item\">Action - 1</button>\n            <button class=\"dropdown-item\">Another Action</button>\n            <button class=\"dropdown-item\">Something else is here</button>\n           </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-dropdown-basic',\n  templateUrl: './dropdown-basic.html'\n})\nexport class NgbdDropdownBasic { }\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var manualTriggers = {
    beforeCodeTitle: 'Manual triggers',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    You can easily control dropdowns programmatically using the exported dropdown instance.\n  </span>\n  <div class=\"kt-section__content\">\n    <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\n      <button class=\"btn btn-primary\" id=\"dropdownManual\" ngbDropdownToggle>Toggle dropdown</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n      <button class=\"btn btn-success\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\n      <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-dropdown-manual',\n  templateUrl: './dropdown-manual.html'\n})\nexport class NgbdDropdownManual { }\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var buttonGroupsAndSplitButtons = {
    beforeCodeTitle: 'Button groups and split buttons',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    Bootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.\n  </span>\n  <div class=\"kt-section__content\">\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-success\">Plain ol' button</button>\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-primary\" ngbDropdownToggle>Drop me</button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-outline-primary\">Split me</button>\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-outline-primary dropdown-toggle-split\" ngbDropdownToggle></button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-group\">\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-danger\" ngbDropdownToggle>Select me</button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-success\" ngbDropdownToggle>Or me</button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">One</button>\n          <button class=\"dropdown-item\">Two</button>\n          <button class=\"dropdown-item\">Four!</button>\n        </div>\n      </div>\n    </div>\n   </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-dropdown-split',\n    templateUrl: './dropdown-split.html'\n})\nexport class NgbdDropdownSplit {\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var globalConfigurationOfDropdowns = {
    beforeCodeTitle: 'Global configuration of dropdowns',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">This dropdown uses customized default values.</span>\n  <div class=\"kt-section__content\">\n    <div ngbDropdown>\n      <button class=\"btn btn-primary\" id=\"dropdownConfig\" ngbDropdownToggle>Toggle</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n\t  </div>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-dropdown-config',\n    templateUrl: './dropdown-config.html',\n    providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers\n})\nexport class NgbdDropdownConfig {\n    constructor(config: NgbDropdownConfig) {\n        // customize default values of dropdowns used by this component tree\n        config.placement = 'top-left';\n        config.autoClose = false;\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(config) {
        // customize default values of dropdowns used by this component tree
        // config.placement = 'top-left';
        config.autoClose = true;
    }
    DropdownComponent.prototype.ngOnInit = function () {
        this.exampleDropdown = dropdown;
        this.exampleManualTriggers = manualTriggers;
        this.exampleButtonGroupsAndSplitButtons = buttonGroupsAndSplitButtons;
        this.exampleGlobalConfigurationOfDropdowns = globalConfigurationOfDropdowns;
    };
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'kt-dropdown',
            templateUrl: './dropdown.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [ng_bootstrap_1.NgbDropdownConfig] // add NgbDropdownConfig to the component providers
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbDropdownConfig])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map