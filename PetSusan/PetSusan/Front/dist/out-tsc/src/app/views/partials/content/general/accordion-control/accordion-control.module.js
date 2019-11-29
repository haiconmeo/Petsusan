"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// Config
var accordion_control_config_1 = require("./accordion-control.config");
var accordion_control_component_1 = require("./accordion-control.component");
var accordion_control_config_2 = require("./accordion-control.config");
exports.AccordionControlConfig = accordion_control_config_2.AccordionControlConfig;
var accordion_control_component_2 = require("./accordion-control.component");
exports.AccordionControlComponent = accordion_control_component_2.AccordionControlComponent;
exports.AccordionControlPanelDirective = accordion_control_component_2.AccordionControlPanelDirective;
exports.AccordionControlPanelTitleDirective = accordion_control_component_2.AccordionControlPanelTitleDirective;
exports.AccordionControlPanelContentDirective = accordion_control_component_2.AccordionControlPanelContentDirective;
var ACCORDION_CONTROL_DIRECTIVES = [
    accordion_control_component_1.AccordionControlComponent,
    accordion_control_component_1.AccordionControlPanelDirective,
    accordion_control_component_1.AccordionControlPanelTitleDirective,
    accordion_control_component_1.AccordionControlPanelContentDirective
];
var AccordionControlModule = /** @class */ (function () {
    function AccordionControlModule() {
    }
    AccordionControlModule_1 = AccordionControlModule;
    AccordionControlModule.forRoot = function () {
        return { ngModule: AccordionControlModule_1, providers: [accordion_control_config_1.AccordionControlConfig] };
    };
    var AccordionControlModule_1;
    AccordionControlModule = AccordionControlModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            exports: ACCORDION_CONTROL_DIRECTIVES,
            declarations: ACCORDION_CONTROL_DIRECTIVES
        })
    ], AccordionControlModule);
    return AccordionControlModule;
}());
exports.AccordionControlModule = AccordionControlModule;
//# sourceMappingURL=accordion-control.module.js.map