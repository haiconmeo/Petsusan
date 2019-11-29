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
// Angular
var core_1 = require("@angular/core");
var PortletFooterComponent = /** @class */ (function () {
    function PortletFooterComponent() {
        // Public properties
        this.classList = 'kt-portlet__foot';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    PortletFooterComponent.prototype.ngOnInit = function () {
        if (this.class) {
            this.classList += ' ' + this.class;
        }
    };
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], PortletFooterComponent.prototype, "classList", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PortletFooterComponent.prototype, "class", void 0);
    PortletFooterComponent = __decorate([
        core_1.Component({
            selector: 'kt-portlet-footer',
            template: "\n\t\t<ng-content></ng-content>"
        })
    ], PortletFooterComponent);
    return PortletFooterComponent;
}());
exports.PortletFooterComponent = PortletFooterComponent;
//# sourceMappingURL=portlet-footer.component.js.map