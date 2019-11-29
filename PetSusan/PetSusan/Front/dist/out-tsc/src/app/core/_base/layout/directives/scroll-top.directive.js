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
 * Scroll to top
 */
var ScrollTopDirective = /** @class */ (function () {
    /**
     * Directive Conctructor
     * @param el: ElementRef
     */
    function ScrollTopDirective(el) {
        this.el = el;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    ScrollTopDirective.prototype.ngAfterViewInit = function () {
        this.scrollTop = new KTScrolltop(this.el.nativeElement, this.options);
    };
    /**
     * Returns ScrollTop
     */
    ScrollTopDirective.prototype.getScrollTop = function () {
        return this.scrollTop;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ScrollTopDirective.prototype, "options", void 0);
    ScrollTopDirective = __decorate([
        core_1.Directive({
            selector: '[ktScrollTop]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ScrollTopDirective);
    return ScrollTopDirective;
}());
exports.ScrollTopDirective = ScrollTopDirective;
//# sourceMappingURL=scroll-top.directive.js.map