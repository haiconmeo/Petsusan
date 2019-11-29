"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent = __decorate([
        core_1.Component({
            selector: 'kt-snack-bar-component-example-snack',
            template: "\n\t<span class=\"example-pizza-party\">Pizza party!!! \uD83C\uDF55</span>\n\t",
            styles: [".example-pizza-party { color: hotpink; }"],
        })
    ], PizzaPartyComponent);
    return PizzaPartyComponent;
}());
exports.PizzaPartyComponent = PizzaPartyComponent;
//# sourceMappingURL=pizza-party.component.js.map