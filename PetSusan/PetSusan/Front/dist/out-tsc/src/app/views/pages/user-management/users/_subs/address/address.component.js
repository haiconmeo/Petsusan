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
var operators_1 = require("rxjs/operators");
// Auth
var auth_1 = require("../../../../../../core/auth");
// Layout
var crud_1 = require("../../../../../../core/_base/crud");
var AddressComponent = /** @class */ (function () {
    /**
     * Component Costructor
     *
     * @param fb: FormBuilder
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    function AddressComponent(fb, auth, store, layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.addressSubject.value) {
            var newAddress = new auth_1.Address();
            newAddress.clear();
            this.addressSubject.next(newAddress);
        }
        this.createForm();
        this.addressForm.valueChanges
            .pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.updateAddress();
        }))
            .subscribe();
    };
    /**
     * Init form
     */
    AddressComponent.prototype.createForm = function () {
        this.addressForm = this.fb.group({
            addressLine: [this.addressSubject.value.addressLine, forms_1.Validators.required],
            city: [this.addressSubject.value.city, forms_1.Validators.required],
            state: [this.addressSubject.value.state, forms_1.Validators.required],
            postCode: [this.addressSubject.value.postCode, forms_1.Validators.required]
        });
    };
    /**
     * Update address
     */
    AddressComponent.prototype.updateAddress = function () {
        this.hasFormErrors = false;
        var controls = this.addressForm.controls;
        /** check form */
        if (this.addressForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var newAddress = new auth_1.Address();
        newAddress.clear();
        newAddress.addressLine = controls['addressLine'].value;
        newAddress.city = controls['city'].value;
        newAddress.postCode = controls['postCode'].value;
        newAddress.state = controls['state'].value;
        this.addressSubject.next(newAddress);
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    AddressComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.BehaviorSubject)
    ], AddressComponent.prototype, "addressSubject", void 0);
    AddressComponent = __decorate([
        core_1.Component({
            selector: 'kt-address',
            templateUrl: './address.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_1.AuthService,
            store_1.Store,
            crud_1.LayoutUtilsService])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map