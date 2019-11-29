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
var store_1 = require("@ngrx/store");
// RxJS
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Auth
var auth_1 = require("../../../../../../core/auth");
// CRUD
var crud_1 = require("../../../../../../core/_base/crud");
var SocialNetworksComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param fb: FormBuilser
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    function SocialNetworksComponent(fb, auth, store, layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        // Public properties
        // Incoming data
        this.loadingSubject = new rxjs_1.BehaviorSubject(false);
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SocialNetworksComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.socialNetworksSubject.value) {
            var newSocialNetworks = new auth_1.SocialNetworks();
            newSocialNetworks.clear();
            this.socialNetworksSubject.next(newSocialNetworks);
        }
        this.createForm();
        this.socialNetworksForm.valueChanges
            .pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.updateSocialNetworks();
        }))
            .subscribe();
    };
    // Create form
    SocialNetworksComponent.prototype.createForm = function () {
        this.socialNetworksForm = this.fb.group({
            linkedIn: [this.socialNetworksSubject.value.linkedIn],
            facebook: [this.socialNetworksSubject.value.facebook],
            twitter: [this.socialNetworksSubject.value.twitter],
            instagram: [this.socialNetworksSubject.value.instagram]
        });
    };
    /**
     * Update social networks
     */
    SocialNetworksComponent.prototype.updateSocialNetworks = function () {
        this.loadingSubject.next(true);
        this.hasFormErrors = false;
        var controls = this.socialNetworksForm.controls;
        /** check form */
        if (this.socialNetworksForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.loadingSubject.next(false);
            return;
        }
        var newSocialNetworks = new auth_1.SocialNetworks();
        newSocialNetworks.clear();
        newSocialNetworks.linkedIn = controls['linkedIn'].value;
        newSocialNetworks.facebook = controls['facebook'].value;
        newSocialNetworks.twitter = controls['twitter'].value;
        newSocialNetworks.instagram = controls['instagram'].value;
        this.socialNetworksSubject.next(newSocialNetworks);
        this.loadingSubject.next(false);
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    SocialNetworksComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SocialNetworksComponent.prototype, "loadingSubject", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.BehaviorSubject)
    ], SocialNetworksComponent.prototype, "socialNetworksSubject", void 0);
    SocialNetworksComponent = __decorate([
        core_1.Component({
            selector: 'kt-social-networks',
            templateUrl: './social-networks.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_1.AuthService,
            store_1.Store,
            crud_1.LayoutUtilsService])
    ], SocialNetworksComponent);
    return SocialNetworksComponent;
}());
exports.SocialNetworksComponent = SocialNetworksComponent;
//# sourceMappingURL=social-networks.component.js.map