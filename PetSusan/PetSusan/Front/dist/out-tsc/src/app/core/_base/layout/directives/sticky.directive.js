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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var rxjs_1 = require("rxjs");
var animationFrame_1 = require("rxjs/internal/scheduler/animationFrame");
var operators_1 = require("rxjs/operators");
var StickyDirective = /** @class */ (function () {
    function StickyDirective(stickyElement, platformId) {
        var _this = this;
        this.stickyElement = stickyElement;
        this.platformId = platformId;
        this.filterGate = false;
        this.marginTop$ = new rxjs_1.BehaviorSubject(0);
        this.marginBottom$ = new rxjs_1.BehaviorSubject(0);
        this.enable$ = new rxjs_1.BehaviorSubject(true);
        this.sticky = false;
        this.boundaryReached = false;
        /**
         * The field represents some position values in normal (not sticky) mode.
         * If the browser size or the content of the page changes, this value must be recalculated.
         */
        this.scroll$ = new rxjs_1.Subject();
        this.resize$ = new rxjs_1.Subject();
        this.extraordinaryChange$ = new rxjs_1.BehaviorSubject(undefined);
        this.componentDestroyed = new rxjs_1.Subject();
        this.listener = function (e) {
            var upperScreenEdgeAt = e.target.scrollTop || window.pageYOffset;
            _this.scroll$.next(upperScreenEdgeAt);
        };
        /** Throttle the scroll to animation frame (around 16.67ms) */
        this.scrollThrottled$ = this.scroll$
            .pipe(operators_1.throttleTime(0, animationFrame_1.animationFrame), operators_1.share());
        /** Throttle the resize to animation frame (around 16.67ms) */
        this.resizeThrottled$ = this.resize$
            .pipe(operators_1.throttleTime(0, animationFrame_1.animationFrame), 
        // emit once since we are currently using combineLatest
        operators_1.startWith(null), operators_1.share());
        this.status$ = rxjs_1.combineLatest(this.enable$, this.scrollThrottled$, this.marginTop$, this.marginBottom$, this.extraordinaryChange$, this.resizeThrottled$)
            .pipe(operators_1.filter(function (_a) {
            var enabled = _a[0];
            return _this.checkEnabled(enabled);
        }), operators_1.map(function (_a) {
            var enabled = _a[0], pageYOffset = _a[1], marginTop = _a[2], marginBottom = _a[3];
            return _this.determineStatus(_this.determineElementOffsets(), pageYOffset, marginTop, marginBottom, enabled);
        }), operators_1.share());
    }
    Object.defineProperty(StickyDirective.prototype, "marginTop", {
        set: function (value) {
            this.marginTop$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StickyDirective.prototype, "marginBottom", {
        set: function (value) {
            this.marginBottom$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StickyDirective.prototype, "enable", {
        set: function (value) {
            this.enable$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    StickyDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.status$
            .pipe(operators_1.takeUntil(this.componentDestroyed))
            .subscribe(function (status) { return _this.setSticky(status); });
    };
    StickyDirective.prototype.recalculate = function () {
        var _this = this;
        if (common_1.isPlatformBrowser(this.platformId)) {
            // Make sure to be in the next tick by using timeout
            setTimeout(function () {
                _this.extraordinaryChange$.next(undefined);
            }, 0);
        }
    };
    /**
     * This is nasty code that should be refactored at some point.
     *
     * The Problem is, we filter for enabled. So that the code doesn't run
     * if @Input enabled = false. But if the user disables, we need exactly 1
     * emit in order to reset and call removeSticky. So this method basically
     * turns the filter in "filter, but let the first pass".
     */
    StickyDirective.prototype.checkEnabled = function (enabled) {
        if (!common_1.isPlatformBrowser(this.platformId)) {
            return false;
        }
        if (enabled) {
            // reset the gate
            this.filterGate = false;
            return true;
        }
        else {
            if (this.filterGate) {
                // gate closed, first emit has happened
                return false;
            }
            else {
                // this is the first emit for enabled = false,
                // let it pass, and activate the gate
                // so the next wont pass.
                this.filterGate = true;
                return true;
            }
        }
    };
    StickyDirective.prototype.onWindowResize = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.resize$.next();
        }
    };
    StickyDirective.prototype.setupListener = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            var target = this.getScrollTarget();
            target.addEventListener('scroll', this.listener);
        }
    };
    StickyDirective.prototype.removeListener = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            var target = this.getScrollTarget();
            target.removeEventListener('scroll', this.listener);
        }
    };
    StickyDirective.prototype.ngOnInit = function () {
        // this.checkSetup();
        this.setupListener();
    };
    StickyDirective.prototype.ngOnDestroy = function () {
        this.componentDestroyed.next();
        this.removeListener();
    };
    StickyDirective.prototype.getComputedStyle = function (el) {
        return el.getBoundingClientRect();
    };
    StickyDirective.prototype.getScrollTarget = function () {
        var target;
        if (this.scrollContainer && typeof this.scrollContainer === 'string') {
            target = document.querySelector(this.scrollContainer);
        }
        else if (this.scrollContainer && this.scrollContainer instanceof HTMLElement) {
            target = this.scrollContainer;
        }
        else {
            target = window;
        }
        return target;
    };
    StickyDirective.prototype.determineStatus = function (originalVals, pageYOffset, marginTop, marginBottom, enabled) {
        var stickyElementHeight = this.getComputedStyle(this.stickyElement.nativeElement).height;
        var reachedLowerEdge = this.boundaryElement && window.pageYOffset + stickyElementHeight + marginBottom >= (originalVals.bottomBoundary - marginTop);
        return {
            isSticky: enabled && pageYOffset > originalVals.offsetY,
            reachedLowerEdge: reachedLowerEdge,
            marginBottom: marginBottom,
            marginTop: marginTop,
        };
    };
    /**
     * Gets the offset for element. If the element
     * currently is sticky, it will get removed
     * to access the original position. Other
     * wise this would just be 0 for fixed elements.
     */
    StickyDirective.prototype.determineElementOffsets = function () {
        if (this.sticky) {
            this.removeSticky();
        }
        var bottomBoundary = null;
        if (this.boundaryElement) {
            var boundaryElementHeight = this.getComputedStyle(this.boundaryElement).height;
            var boundaryElementOffset = getPosition(this.boundaryElement).y;
            bottomBoundary = boundaryElementHeight + boundaryElementOffset;
        }
        return { offsetY: (getPosition(this.stickyElement.nativeElement).y - this.marginTop$.value), bottomBoundary: bottomBoundary };
    };
    StickyDirective.prototype.makeSticky = function (boundaryReached, marginTop, marginBottom) {
        if (boundaryReached === void 0) { boundaryReached = false; }
        this.boundaryReached = boundaryReached;
        // do this before setting it to pos:fixed
        var _a = this.getComputedStyle(this.stickyElement.nativeElement), width = _a.width, height = _a.height, left = _a.left;
        var offSet = boundaryReached ? (this.getComputedStyle(this.boundaryElement).bottom - height - this.marginBottom$.value) : this.marginTop$.value;
        this.sticky = true;
        this.stickyElement.nativeElement.style.position = 'sticky';
        this.stickyElement.nativeElement.style.backgroundColor = '#fff';
        this.stickyElement.nativeElement.style.top = this.marginTop$.value + 'px';
        // this.stickyElement.nativeElement.style.left = left + 'px';
        this.stickyElement.nativeElement.style.width = width + "px";
        if (this.spacerElement) {
            var spacerHeight = marginBottom + height + marginTop;
            this.spacerElement.style.height = spacerHeight + "px";
        }
    };
    StickyDirective.prototype.checkSetup = function () {
        if (core_1.isDevMode() && !this.spacerElement) {
            console.warn("******There might be an issue with your sticky directive!******\n\nYou haven't specified a spacer element. This will cause the page to jump.\n\nBest practise is to provide a spacer element (e.g. a div) right before/after the sticky element.\nThen pass the spacer element as input:\n\n<div #spacer></div>\n\n<div stickyThing=\"\" [spacer]=\"spacer\">\n    I am sticky!\n</div>");
        }
    };
    StickyDirective.prototype.setSticky = function (status) {
        if (status.isSticky) {
            this.makeSticky(status.reachedLowerEdge, status.marginTop, status.marginBottom);
        }
        else {
            this.removeSticky();
        }
    };
    StickyDirective.prototype.removeSticky = function () {
        this.boundaryReached = false;
        this.sticky = false;
        this.stickyElement.nativeElement.style.position = '';
        this.stickyElement.nativeElement.style.width = 'auto';
        this.stickyElement.nativeElement.style.left = 'auto';
        this.stickyElement.nativeElement.style.top = 'auto';
        if (this.spacerElement) {
            this.spacerElement.style.height = '0';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], StickyDirective.prototype, "scrollContainer", void 0);
    __decorate([
        core_1.Input('spacerElement'),
        __metadata("design:type", HTMLElement)
    ], StickyDirective.prototype, "spacerElement", void 0);
    __decorate([
        core_1.Input('boundaryElement'),
        __metadata("design:type", HTMLElement)
    ], StickyDirective.prototype, "boundaryElement", void 0);
    __decorate([
        core_1.HostBinding('class.is-sticky'),
        __metadata("design:type", Object)
    ], StickyDirective.prototype, "sticky", void 0);
    __decorate([
        core_1.HostBinding('class.boundary-reached'),
        __metadata("design:type", Object)
    ], StickyDirective.prototype, "boundaryReached", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StickyDirective.prototype, "marginTop", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StickyDirective.prototype, "marginBottom", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], StickyDirective.prototype, "enable", null);
    __decorate([
        core_1.HostListener('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StickyDirective.prototype, "onWindowResize", null);
    StickyDirective = __decorate([
        core_1.Directive({
            selector: '[ktSticky]'
        }),
        __param(1, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [core_1.ElementRef, String])
    ], StickyDirective);
    return StickyDirective;
}());
exports.StickyDirective = StickyDirective;
// Thanks to https://stanko.github.io/javascript-get-element-offset/
function getPosition(el) {
    var top = 0;
    var left = 0;
    var element = el;
    // Loop through the DOM tree
    // and add it's parent's offset to get page offset
    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);
    return {
        y: top,
        x: left,
    };
}
//# sourceMappingURL=sticky.directive.js.map