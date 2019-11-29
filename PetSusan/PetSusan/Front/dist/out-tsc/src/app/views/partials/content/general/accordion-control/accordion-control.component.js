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
var nextId = 0;
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
var AccordionControlPanelTitleDirective = /** @class */ (function () {
    function AccordionControlPanelTitleDirective(templateRef) {
        this.templateRef = templateRef;
    }
    AccordionControlPanelTitleDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'ng-template[AccordionControlPanelTitle]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], AccordionControlPanelTitleDirective);
    return AccordionControlPanelTitleDirective;
}());
exports.AccordionControlPanelTitleDirective = AccordionControlPanelTitleDirective;
/**
 * This directive must be used to wrap accordion panel content.
 */
var AccordionControlPanelContentDirective = /** @class */ (function () {
    function AccordionControlPanelContentDirective(templateRef) {
        this.templateRef = templateRef;
    }
    AccordionControlPanelContentDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'ng-template[AccordionControlPanelContent]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], AccordionControlPanelContentDirective);
    return AccordionControlPanelContentDirective;
}());
exports.AccordionControlPanelContentDirective = AccordionControlPanelContentDirective;
/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
var AccordionControlPanelDirective = /** @class */ (function () {
    function AccordionControlPanelDirective() {
        /**
         *  A flag determining whether the panel is disabled or not.
         *  When disabled, the panel cannot be toggled.
         */
        this.disabled = false;
        this.height = 0;
        this.contentHeight = 0;
        /**
         *  An optional id for the panel. The id should be unique.
         *  If not provided, it will be auto-generated.
         */
        this.id = "kt-accordion-control-panel-" + nextId++;
        /**
         * A flag telling if the panel is currently open
         */
        this.isOpen = false;
    }
    AccordionControlPanelDirective.prototype.ngAfterContentChecked = function () {
        // We are using @ContentChildren instead of @ContantChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        this.titleTpl = this.titleTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AccordionControlPanelDirective.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AccordionControlPanelDirective.prototype, "id", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionControlPanelDirective.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionControlPanelDirective.prototype, "iconClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionControlPanelDirective.prototype, "hasBodyWrapper", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionControlPanelDirective.prototype, "type", void 0);
    __decorate([
        core_1.ContentChildren(AccordionControlPanelTitleDirective, { descendants: false }),
        __metadata("design:type", core_1.QueryList)
    ], AccordionControlPanelDirective.prototype, "titleTpls", void 0);
    __decorate([
        core_1.ContentChildren(AccordionControlPanelContentDirective, { descendants: false }),
        __metadata("design:type", core_1.QueryList)
    ], AccordionControlPanelDirective.prototype, "contentTpls", void 0);
    AccordionControlPanelDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'kt-accordion-control-panel'
        })
    ], AccordionControlPanelDirective);
    return AccordionControlPanelDirective;
}());
exports.AccordionControlPanelDirective = AccordionControlPanelDirective;
/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only one panel can be opened at a time.
 */
var AccordionControlComponent = /** @class */ (function () {
    function AccordionControlComponent() {
        /**
         * An array or comma separated strings of panel identifiers that should be opened
         */
        this.activeIds = [];
        this.hasAnimation = false;
        /**
         * Whether the closed panels should be hidden without destroying them
         */
        this.destroyOnHide = true;
        /**
         * A panel change event fired right before the panel toggle happens. See PanelChangeEvent for payload details
         */
        this.panelChange = new core_1.EventEmitter();
    }
    /**
     * Programmatically toggle a panel with a given id.
     */
    AccordionControlComponent.prototype.toggle = function (panelId, accordionBodyScrollHeight) {
        var panel = this.panels.find(function (p) { return p.id === panelId; });
        if (panel && !panel.disabled) {
            var defaultPrevented_1 = false;
            if (this.hasAnimation) {
                panel.height = panel.height ? 0 : panel.contentHeight;
            }
            this.panelChange.emit({ panelId: panelId, nextState: !panel.isOpen, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                panel.isOpen = !panel.isOpen;
                if (this.closeOthers) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    };
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * after content checked
     */
    AccordionControlComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // active id updates
        if (typeof this.activeIds === 'string') {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach(function (panel) {
            panel.isOpen = !panel.disabled && _this.activeIds.indexOf(panel.id) > -1;
            if (_this.hasAnimation) {
                var domPanel = document.getElementById(panel.id);
                panel.contentHeight = domPanel && domPanel.scrollHeight ? domPanel.scrollHeight : 200;
            }
        });
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOthers) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    /**
     * Close all panel except selected
     * @param panelId: string
     */
    AccordionControlComponent.prototype._closeOthers = function (panelId) {
        this.panels.forEach(function (panel) {
            if (panel.id !== panelId) {
                panel.isOpen = false;
            }
        });
    };
    /**
     * Update active ids
     */
    AccordionControlComponent.prototype._updateActiveIds = function () {
        this.activeIds = this.panels.filter(function (panel) { return panel.isOpen && !panel.disabled; }).map(function (panel) { return panel.id; });
    };
    __decorate([
        core_1.ContentChildren(AccordionControlPanelDirective),
        __metadata("design:type", core_1.QueryList)
    ], AccordionControlComponent.prototype, "panels", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AccordionControlComponent.prototype, "activeIds", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AccordionControlComponent.prototype, "hasAnimation", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AccordionControlComponent.prototype, "closeOthers", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AccordionControlComponent.prototype, "destroyOnHide", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionControlComponent.prototype, "type", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AccordionControlComponent.prototype, "panelChange", void 0);
    AccordionControlComponent = __decorate([
        core_1.Component({
            selector: 'kt-accordion-control',
            exportAs: 'AccordionControl',
            host: {
                'role': 'tablist',
                '[attr.aria-multiselectable]': '!closeOtherPanels',
                'class': 'accordion'
            },
            templateUrl: './accordion-control.component.html',
            styles: ["\n\t\t.accordion--animation {\n\t\t\toverflow: hidden;\n        \t-webkit-transition: height .5s;\n      \t\ttransition: height .5s;\n\t\t}\n\t"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], AccordionControlComponent);
    return AccordionControlComponent;
}());
exports.AccordionControlComponent = AccordionControlComponent;
//# sourceMappingURL=accordion-control.component.js.map