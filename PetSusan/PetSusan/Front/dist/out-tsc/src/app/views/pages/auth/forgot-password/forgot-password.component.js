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
var router_1 = require("@angular/router");
// RxJS
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// Translate
var core_2 = require("@ngx-translate/core");
// Auth
var auth_1 = require("../../../../core/auth");
var ForgotPasswordComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param authService
     * @param authNoticeService
     * @param translate
     * @param router
     * @param fb
     * @param cdr
     */
    function ForgotPasswordComponent(authService, authNoticeService, translate, router, fb, cdr) {
        this.authService = authService;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.router = router;
        this.fb = fb;
        this.cdr = cdr;
        this.loading = false;
        this.errors = [];
        this.unsubscribe = new rxjs_1.Subject();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.initRegistrationForm();
    };
    /**
     * On destroy
     */
    ForgotPasswordComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.loading = false;
    };
    /**
     * Form initalization
     * Default params, validators
     */
    ForgotPasswordComponent.prototype.initRegistrationForm = function () {
        this.forgotPasswordForm = this.fb.group({
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.email,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                ])
            ]
        });
    };
    /**
     * Form Submit
     */
    ForgotPasswordComponent.prototype.submit = function () {
        var _this = this;
        var controls = this.forgotPasswordForm.controls;
        /** check form */
        if (this.forgotPasswordForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        this.loading = true;
        var email = controls['email'].value;
        this.authService.requestPassword(email).pipe(operators_1.tap(function (response) {
            if (response) {
                _this.authNoticeService.setNotice(_this.translate.instant('AUTH.FORGOT.SUCCESS'), 'success');
                _this.router.navigateByUrl('/auth/login');
            }
            else {
                _this.authNoticeService.setNotice(_this.translate.instant('AUTH.VALIDATION.NOT_FOUND', { name: _this.translate.instant('AUTH.INPUT.EMAIL') }), 'danger');
            }
        }), operators_1.takeUntil(this.unsubscribe), operators_1.finalize(function () {
            _this.loading = false;
            _this.cdr.markForCheck();
        })).subscribe();
    };
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    ForgotPasswordComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.forgotPasswordForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) &&
            (control.dirty || control.touched);
        return result;
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: 'kt-forgot-password',
            templateUrl: './forgot-password.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [auth_1.AuthService,
            auth_1.AuthNoticeService,
            core_2.TranslateService,
            router_1.Router,
            forms_1.FormBuilder,
            core_1.ChangeDetectorRef])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot-password.component.js.map