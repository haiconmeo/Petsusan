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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
// RxJS
var operators_1 = require("rxjs/operators");
// Translate
var core_2 = require("@ngx-translate/core");
// NGRX
var store_1 = require("@ngrx/store");
// Auth
var auth_1 = require("../../../../core/auth/");
var rxjs_1 = require("rxjs");
var confirm_password_validator_1 = require("./confirm-password.validator");
var RegisterComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param authNoticeService: AuthNoticeService
     * @param translate: TranslateService
     * @param router: Router
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param cdr
     */
    function RegisterComponent(authNoticeService, translate, router, auth, store, fb, cdr) {
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.router = router;
        this.auth = auth;
        this.store = store;
        this.fb = fb;
        this.cdr = cdr;
        this.loading = false;
        this.errors = [];
        this.unsubscribe = new rxjs_1.Subject();
    }
    /*
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */
    /**
     * On init
     */
    RegisterComponent.prototype.ngOnInit = function () {
        this.initRegisterForm();
    };
    /*
    * On destroy
    */
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.loading = false;
    };
    /**
     * Form initalization
     * Default params, validators
     */
    RegisterComponent.prototype.initRegisterForm = function () {
        this.registerForm = this.fb.group({
            fullname: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(100)
                ])
            ],
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.email,
                    forms_1.Validators.minLength(3),
                    // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                    forms_1.Validators.maxLength(320)
                ]),
            ],
            username: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(100)
                ]),
            ],
            password: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(100)
                ])
            ],
            confirmPassword: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(100)
                ])
            ],
            agree: [false, forms_1.Validators.compose([forms_1.Validators.required])]
        }, {
            validator: confirm_password_validator_1.ConfirmPasswordValidator.MatchPassword
        });
    };
    /**
     * Form Submit
     */
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        var controls = this.registerForm.controls;
        // check form
        if (this.registerForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        this.loading = true;
        if (!controls['agree'].value) {
            // you must agree the terms and condition
            // checkbox cannot work inside mat-form-field https://github.com/angular/material2/issues/7891
            this.authNoticeService.setNotice('You must agree the terms and condition', 'danger');
            return;
        }
        var _user = new auth_1.User();
        _user.clear();
        _user.email = controls['email'].value;
        _user.username = controls['username'].value;
        _user.fullname = controls['fullname'].value;
        _user.password = controls['password'].value;
        _user.roles = [];
        this.auth.register(_user).pipe(operators_1.tap(function (user) {
            if (user) {
                _this.store.dispatch(new auth_1.Register({ authToken: user.accessToken }));
                // pass notice message to the login page
                _this.authNoticeService.setNotice(_this.translate.instant('AUTH.REGISTER.SUCCESS'), 'success');
                _this.router.navigateByUrl('/auth/login');
            }
            else {
                _this.authNoticeService.setNotice(_this.translate.instant('AUTH.VALIDATION.INVALID_LOGIN'), 'danger');
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
    RegisterComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.registerForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'kt-register',
            templateUrl: './register.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [auth_1.AuthNoticeService,
            core_2.TranslateService,
            router_1.Router,
            auth_1.AuthService,
            store_1.Store,
            forms_1.FormBuilder,
            core_1.ChangeDetectorRef])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map