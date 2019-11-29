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
/**
 * Configuration service for the MAccordionControl component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
var AccordionControlConfig = /** @class */ (function () {
    function AccordionControlConfig() {
        this.closeOthers = false;
    }
    AccordionControlConfig = __decorate([
        core_1.Injectable()
    ], AccordionControlConfig);
    return AccordionControlConfig;
}());
exports.AccordionControlConfig = AccordionControlConfig;
//# sourceMappingURL=accordion-control.config.js.map