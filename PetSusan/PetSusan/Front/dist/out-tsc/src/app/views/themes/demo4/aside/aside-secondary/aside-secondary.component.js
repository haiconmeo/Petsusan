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
var AsideSecondaryComponent = /** @class */ (function () {
    function AsideSecondaryComponent() {
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * after content checked
     */
    AsideSecondaryComponent.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(AsideSecondaryComponent.prototype, "mobileToggleOptions", {
        /**
         * Return toggle options
         */
        get: function () {
            return {
                target: 'body',
                targetState: 'kt-aside-secondary--mobile-nav-expanded',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsideSecondaryComponent.prototype, "toggleOptions", {
        get: function () {
            return {
                target: 'body',
                targetState: 'kt-aside-secondary--expanded'
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tab click event
     *
     * @param event: MouseEvent
     */
    AsideSecondaryComponent.prototype.tabClicked = function (event) {
        if ((this.lastOpenedTab && this.lastOpenedTab.isEqualNode(event.srcElement)) && document.body.classList.contains('kt-aside-secondary--expanded')) {
            this.toggler.toggle.toggleOff();
        }
        else {
            this.lastOpenedTab = event.srcElement;
            this.toggler.toggle.toggleOn();
        }
    };
    __decorate([
        core_1.ViewChild('toggler'),
        __metadata("design:type", Object)
    ], AsideSecondaryComponent.prototype, "toggler", void 0);
    AsideSecondaryComponent = __decorate([
        core_1.Component({
            selector: 'kt-aside-secondary',
            templateUrl: './aside-secondary.component.html',
            styleUrls: ['./aside-secondary.component.scss']
        })
    ], AsideSecondaryComponent);
    return AsideSecondaryComponent;
}());
exports.AsideSecondaryComponent = AsideSecondaryComponent;
//# sourceMappingURL=aside-secondary.component.js.map