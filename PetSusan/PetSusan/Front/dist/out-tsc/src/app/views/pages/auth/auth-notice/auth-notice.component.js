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
// Auth
var auth_1 = require("../../../../core/auth/");
var AuthNoticeComponent = /** @class */ (function () {
    /**
     * Component Constructure
     *
     * @param authNoticeService
     * @param cdr
     */
    function AuthNoticeComponent(authNoticeService, cdr) {
        this.authNoticeService = authNoticeService;
        this.cdr = cdr;
        this.message = '';
        // Private properties
        this.subscriptions = [];
    }
    /*
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */
    /**
     * On init
     */
    AuthNoticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.authNoticeService.onNoticeChanged$.subscribe(function (notice) {
            notice = Object.assign({}, { message: '', type: '' }, notice);
            _this.message = notice.message;
            _this.type = notice.type;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * On destroy
     */
    AuthNoticeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AuthNoticeComponent.prototype, "type", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AuthNoticeComponent.prototype, "message", void 0);
    AuthNoticeComponent = __decorate([
        core_1.Component({
            selector: 'kt-auth-notice',
            templateUrl: './auth-notice.component.html',
        }),
        __metadata("design:paramtypes", [auth_1.AuthNoticeService, core_1.ChangeDetectorRef])
    ], AuthNoticeComponent);
    return AuthNoticeComponent;
}());
exports.AuthNoticeComponent = AuthNoticeComponent;
//# sourceMappingURL=auth-notice.component.js.map