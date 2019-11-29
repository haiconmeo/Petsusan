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
var QuickPanelComponent = /** @class */ (function () {
    function QuickPanelComponent() {
        // Public properties
        this.offcanvasOptions = {
            overlay: true,
            baseClass: 'kt-quick-panel',
            closeBy: 'kt_quick_panel_close_btn',
            toggleBy: 'kt_quick_panel_toggler_btn'
        };
    }
    QuickPanelComponent = __decorate([
        core_1.Component({
            selector: 'kt-quick-panel',
            templateUrl: './quick-panel.component.html',
            styleUrls: ['./quick-panel.component.scss']
        })
    ], QuickPanelComponent);
    return QuickPanelComponent;
}());
exports.QuickPanelComponent = QuickPanelComponent;
//# sourceMappingURL=quick-panel.component.js.map