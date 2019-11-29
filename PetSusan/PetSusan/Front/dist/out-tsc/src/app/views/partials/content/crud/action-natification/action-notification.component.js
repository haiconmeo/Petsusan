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
// Angular
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
// RxJS
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ActionNotificationComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param data: any
     */
    function ActionNotificationComponent(data) {
        this.data = data;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ActionNotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.data.showUndoButton || (this.data.undoButtonDuration >= this.data.duration)) {
            return;
        }
        this.delayForUndoButton(this.data.undoButtonDuration).subscribe(function () {
            _this.data.showUndoButton = false;
        });
    };
    /*
     *	Returns delay
     *
     * @param timeToDelay: any
     */
    ActionNotificationComponent.prototype.delayForUndoButton = function (timeToDelay) {
        return rxjs_1.of('').pipe(operators_1.delay(timeToDelay));
    };
    /**
     * Dismiss with Action
     */
    ActionNotificationComponent.prototype.onDismissWithAction = function () {
        this.data.snackBar.dismiss();
    };
    /**
     * Dismiss
     */
    ActionNotificationComponent.prototype.onDismiss = function () {
        this.data.snackBar.dismiss();
    };
    ActionNotificationComponent = __decorate([
        core_1.Component({
            selector: 'kt-action-natification',
            templateUrl: './action-notification.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __param(0, core_1.Inject(material_1.MAT_SNACK_BAR_DATA)),
        __metadata("design:paramtypes", [Object])
    ], ActionNotificationComponent);
    return ActionNotificationComponent;
}());
exports.ActionNotificationComponent = ActionNotificationComponent;
//# sourceMappingURL=action-notification.component.js.map