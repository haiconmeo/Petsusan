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
var animations_1 = require("@angular/animations");
var router_1 = require("@angular/router");
/**
 * Page load animation
 *
 */
var ContentAnimateDirective = /** @class */ (function () {
    /**
     * Directive Consturctor
     * @param el: ElementRef
     * @param router: Router
     * @param animationBuilder: AnimationBuilder
     */
    function ContentAnimateDirective(el, router, animationBuilder) {
        this.el = el;
        this.router = router;
        this.animationBuilder = animationBuilder;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ContentAnimateDirective.prototype.ngOnInit = function () {
        var _this = this;
        // animate the content
        this.initAnimate();
        // animate page load
        this.events = this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.player.play();
            }
        });
    };
    /**
     * On destroy
     */
    ContentAnimateDirective.prototype.ngOnDestroy = function () {
        this.events.unsubscribe();
        this.player.destroy();
    };
    /**
     * Animate page load
     */
    ContentAnimateDirective.prototype.initAnimate = function () {
        this.player = this.animationBuilder
            .build([
            // style({opacity: 0, transform: 'translateY(15px)'}),
            // animate(500, style({opacity: 1, transform: 'translateY(0)'})),
            // style({transform: 'none'}),
            animations_1.style({
                transform: 'translateY(-3%)',
                opacity: 0,
                position: 'static'
            }),
            animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateY(0%)', opacity: 1 }))
        ])
            .create(this.el.nativeElement);
    };
    ContentAnimateDirective = __decorate([
        core_1.Directive({
            selector: '[ktContentAnimate]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            router_1.Router,
            animations_1.AnimationBuilder])
    ], ContentAnimateDirective);
    return ContentAnimateDirective;
}());
exports.ContentAnimateDirective = ContentAnimateDirective;
//# sourceMappingURL=content-animate.directive.js.map