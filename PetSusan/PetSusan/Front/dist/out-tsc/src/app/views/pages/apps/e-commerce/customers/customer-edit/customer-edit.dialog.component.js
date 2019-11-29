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
var forms_1 = require("@angular/forms");
// Material
var material_1 = require("@angular/material");
// RxJS
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var store_1 = require("@ngrx/store");
// CRUD
var crud_1 = require("../../../../../../core/_base/crud");
// Services and Models
var e_commerce_1 = require("../../../../../../core/e-commerce");
var CustomerEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<CustomerEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param typesUtilsService: TypesUtilsService
     */
    function CustomerEditDialogComponent(dialogRef, data, fb, store, typesUtilsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.typesUtilsService = typesUtilsService;
        this.hasFormErrors = false;
        this.viewLoading = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    CustomerEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(store_1.select(e_commerce_1.selectCustomersActionLoading)).subscribe(function (res) { return _this.viewLoading = res; });
        this.customer = this.data.customer;
        this.createForm();
    };
    /**
     * On destroy
     */
    CustomerEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    CustomerEditDialogComponent.prototype.createForm = function () {
        this.customerForm = this.fb.group({
            firstName: [this.customer.firstName, forms_1.Validators.required],
            lastName: [this.customer.lastName, forms_1.Validators.required],
            email: [this.customer.email, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])],
            dob: [this.typesUtilsService.getDateFromString(this.customer.dateOfBbirth), forms_1.Validators.compose([forms_1.Validators.nullValidator])],
            userName: [this.customer.userName, forms_1.Validators.compose([forms_1.Validators.required])],
            gender: [this.customer.gender, forms_1.Validators.compose([forms_1.Validators.required])],
            ipAddress: [this.customer.ipAddress, forms_1.Validators.compose([forms_1.Validators.required])],
            type: [this.customer.type.toString(), forms_1.Validators.compose([forms_1.Validators.required])]
        });
    };
    /**
     * Returns page title
     */
    CustomerEditDialogComponent.prototype.getTitle = function () {
        if (this.customer.id > 0) {
            return "Edit customer '" + this.customer.firstName + " " + this.customer.lastName + "'";
        }
        return 'New customer';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    CustomerEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.customerForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
     * Returns prepared customer
     */
    CustomerEditDialogComponent.prototype.prepareCustomer = function () {
        var controls = this.customerForm.controls;
        var _customer = new e_commerce_1.CustomerModel();
        _customer.id = this.customer.id;
        var _date = controls['dob'].value;
        if (_date) {
            _customer.dateOfBbirth = this.typesUtilsService.dateFormat(_date);
        }
        else {
            _customer.dateOfBbirth = '';
        }
        _customer.firstName = controls['firstName'].value;
        _customer.lastName = controls['lastName'].value;
        _customer.email = controls['email'].value;
        _customer.userName = controls['userName'].value;
        _customer.gender = controls['gender'].value;
        _customer.ipAddress = controls['ipAddress'].value;
        _customer.type = +controls['type'].value;
        _customer.status = this.customer.status;
        return _customer;
    };
    /**
     * On Submit
     */
    CustomerEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.customerForm.controls;
        /** check form */
        if (this.customerForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedCustomer = this.prepareCustomer();
        if (editedCustomer.id > 0) {
            this.updateCustomer(editedCustomer);
        }
        else {
            this.createCustomer(editedCustomer);
        }
    };
    /**
     * Update customer
     *
     * @param _customer: CustomerModel
     */
    CustomerEditDialogComponent.prototype.updateCustomer = function (_customer) {
        var _this = this;
        var updateCustomer = {
            id: _customer.id,
            changes: _customer
        };
        this.store.dispatch(new e_commerce_1.CustomerUpdated({
            partialCustomer: updateCustomer,
            customer: _customer
        }));
        // Remove this line
        rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () { return _this.dialogRef.close({ _customer: _customer, isEdit: true }); });
        // Uncomment this line
        // this.dialogRef.close({ _customer, isEdit: true }
    };
    /**
     * Create customer
     *
     * @param _customer: CustomerModel
     */
    CustomerEditDialogComponent.prototype.createCustomer = function (_customer) {
        var _this = this;
        this.store.dispatch(new e_commerce_1.CustomerOnServerCreated({ customer: _customer }));
        this.componentSubscriptions = this.store.pipe(store_1.select(e_commerce_1.selectLastCreatedCustomerId), operators_1.delay(1000)).subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.dialogRef.close({ _customer: _customer, isEdit: false });
        });
    };
    /** Alect Close event */
    CustomerEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    CustomerEditDialogComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-customers-edit-dialog',
            templateUrl: './customer-edit.dialog.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, forms_1.FormBuilder,
            store_1.Store,
            crud_1.TypesUtilsService])
    ], CustomerEditDialogComponent);
    return CustomerEditDialogComponent;
}());
exports.CustomerEditDialogComponent = CustomerEditDialogComponent;
//# sourceMappingURL=customer-edit.dialog.component.js.map