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
var forms_1 = require("@angular/forms");
// RxJS
var rxjs_1 = require("rxjs");
// NGRX
var store_1 = require("@ngrx/store");
// Auth
var auth_1 = require("../../../../../../core/auth/");
// Layout
var crud_1 = require("../../../../../../core/_base/crud");
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    /**
     * MatchPassword
     *
     * @param AC: AbstractControl
     */
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());
exports.PasswordValidation = PasswordValidation;
var ChangePasswordComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param fb: FormBuilder
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    function ChangePasswordComponent(fb, auth, store, 
    // tslint:disable-next-line:align
    layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.loadingSubject = new rxjs_1.BehaviorSubject(false);
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    /**
     * Load data
     */
    ChangePasswordComponent.prototype.loadData = function () {
        var _this = this;
        this.auth.getUserById(this.userId).subscribe(function (res) {
            _this.user = res;
            _this.createForm();
        });
    };
    /**
     * Init form
     */
    ChangePasswordComponent.prototype.createForm = function () {
        this.changePasswordForm = this.fb.group({
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.required]
        });
    };
    /**
     * Reset
     */
    ChangePasswordComponent.prototype.reset = function () {
        this.hasFormErrors = false;
        this.loadingSubject.next(false);
        this.changePasswordForm.markAsPristine();
        this.changePasswordForm.markAsUntouched();
        this.changePasswordForm.updateValueAndValidity();
    };
    /**
     * Save data
     */
    ChangePasswordComponent.prototype.onSubmit = function () {
        this.loadingSubject.next(true);
        this.hasFormErrors = false;
        var controls = this.changePasswordForm.controls;
        /** check form */
        if (this.changePasswordForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.loadingSubject.next(false);
            return;
        }
        this.user.password = controls['password'].value;
        var updatedUser = {
            id: this.user.id,
            changes: this.user
        };
        this.store.dispatch(new auth_1.UserUpdated({
            partialUser: updatedUser,
            user: this.user
        }));
        this.loadData();
        this.loadingSubject.next(false);
        var message = "User password successfully has been changed.";
        this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Update, 5000, true, false);
        this.reset();
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    ChangePasswordComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ChangePasswordComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "loadingSubject", void 0);
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'kt-change-password',
            templateUrl: './change-password.component.html',
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, auth_1.AuthService, store_1.Store,
            crud_1.LayoutUtilsService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=change-password.component.js.map