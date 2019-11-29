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
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.duration = 0;
        this.showCloseButton = true;
        this.close = new core_1.EventEmitter();
        this.alertShowing = true;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.duration === 0) {
            return;
        }
        setTimeout(function () {
            _this.closeAlert();
        }, this.duration);
    };
    /**
     * close alert
     */
    AlertComponent.prototype.closeAlert = function () {
        this.close.emit();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AlertComponent.prototype, "duration", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "showCloseButton", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "close", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'kt-alert',
            templateUrl: './alert.component.html'
        })
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map