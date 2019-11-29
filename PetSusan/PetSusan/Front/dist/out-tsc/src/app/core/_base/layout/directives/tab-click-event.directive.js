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
/**
 * Listen Tab click
 */
var TabClickEventDirective = /** @class */ (function () {
    /**
     * Directive Constructor
     * @param el: ElementRef
     * @param render: Renderer2
     */
    function TabClickEventDirective(el, render) {
        this.el = el;
        this.render = render;
    }
    /**
     * A directive handler the tab click event for active tab
     * @param target
     */
    TabClickEventDirective.prototype.onClick = function (target) {
        // remove previous active tab
        var parent = target.closest('[role="tablist"]');
        var activeLink = parent.querySelector('[role="tab"].active');
        if (activeLink) {
            this.render.removeClass(activeLink, 'active');
        }
        // set active tab
        var link = target.closest('[role="tab"]');
        if (link) {
            this.render.addClass(link, 'active');
        }
    };
    __decorate([
        core_1.HostListener('click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLElement]),
        __metadata("design:returntype", void 0)
    ], TabClickEventDirective.prototype, "onClick", null);
    TabClickEventDirective = __decorate([
        core_1.Directive({
            selector: '[ktTabClickEvent]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], TabClickEventDirective);
    return TabClickEventDirective;
}());
exports.TabClickEventDirective = TabClickEventDirective;
//# sourceMappingURL=tab-click-event.directive.js.map