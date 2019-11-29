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
/**
 * Toggle
 */
var ToggleDirective = /** @class */ (function () {
    /**
     * Directive constructor
     * @param el: ElementRef
     */
    function ToggleDirective(el) {
        this.el = el;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    ToggleDirective.prototype.ngAfterViewInit = function () {
        this.toggle = new KTToggle(this.el.nativeElement, this.options);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ToggleDirective.prototype, "options", void 0);
    ToggleDirective = __decorate([
        core_1.Directive({
            selector: '[ktToggle]',
            exportAs: 'ktToggle'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ToggleDirective);
    return ToggleDirective;
}());
exports.ToggleDirective = ToggleDirective;
//# sourceMappingURL=toggle.directive.js.map