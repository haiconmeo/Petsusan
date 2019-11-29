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
var NoticeComponent = /** @class */ (function () {
    /**
     * Component constructor
     */
    function NoticeComponent() {
        // Public properties
        this.classes = '';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    NoticeComponent.prototype.ngOnInit = function () {
        if (this.icon) {
            this.classes += ' kt-alert--icon';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NoticeComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NoticeComponent.prototype, "icon", void 0);
    NoticeComponent = __decorate([
        core_1.Component({
            selector: 'kt-notice',
            templateUrl: './notice.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], NoticeComponent);
    return NoticeComponent;
}());
exports.NoticeComponent = NoticeComponent;
//# sourceMappingURL=notice.component.js.map