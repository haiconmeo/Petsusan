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
var core_1 = require("@angular/core");
// Angular
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
// Material
var material_1 = require("@angular/material");
// RxJS
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Services and Models
var e_commerce_1 = require("../../../../../../../../core/e-commerce");
var SpecificationEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<SpecificationEditDialogComponent>
     * @param data: any
     */
    function SpecificationEditDialogComponent(dialogRef, data, fb, cdr) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.cdr = cdr;
        this.viewLoading = true;
        this.loadingAfterSubmit = false;
        this.specificationsDictionary = e_commerce_1.SPECIFICATIONS_DICTIONARY;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SpecificationEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initSpecificationForm();
        /* Server loading imitation. Remove this on real code */
        rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
            _this.viewLoading = false; // Remove this line
            _this.cdr.detectChanges(); // Remove this line
        }); // Remove this line
    };
    /**
     * Form initalization
     * Default params, validators
     */
    SpecificationEditDialogComponent.prototype.initSpecificationForm = function () {
        var specName = !this.data.specId ? '' : this.specificationsDictionary[this.data.specId];
        var specText = this.data.value;
        this.specificationEditForm = this.fb.group({
            name: [specName, [forms_1.Validators.required]],
            text: [specText, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(100)
                ])]
        });
    };
    /**
     * Close dialog
     */
    SpecificationEditDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close({ isUpdated: false });
    };
    /**
     * Save specification
     */
    SpecificationEditDialogComponent.prototype.save = function () {
        var _this = this;
        var controls = this.specificationEditForm.controls;
        /** check form */
        if (this.specificationEditForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        var specId = this.getSpecificationIndexByName(controls['name'].value);
        var specName = controls['name'].value;
        var specValue = controls['text'].value;
        /* Server loading imitation. Remove this on real code */
        rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
            _this.viewLoading = false;
            _this.closeDialog(specId, specName, specValue);
        }); // Remove this line
    };
    /**
     * Close dialog
     *
     * @param specId: any
     */
    SpecificationEditDialogComponent.prototype.closeDialog = function (specId, specName, specValue) {
        this.dialogRef.close({
            isUpdated: true,
            value: specValue,
            specId: specId,
            _specificationName: specName
        });
    };
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    SpecificationEditDialogComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.specificationEditForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    };
    SpecificationEditDialogComponent.prototype.getSpecificationIndexByName = function (name) {
        return this.specificationsDictionary.findIndex(function (el) { return el === name; });
    };
    SpecificationEditDialogComponent = __decorate([
        core_2.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-specification-edit-dialog',
            templateUrl: './specification-edit-dialog.component.html',
            changeDetection: core_2.ChangeDetectionStrategy.OnPush
        }),
        __param(1, core_2.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, forms_1.FormBuilder,
            core_1.ChangeDetectorRef])
    ], SpecificationEditDialogComponent);
    return SpecificationEditDialogComponent;
}());
exports.SpecificationEditDialogComponent = SpecificationEditDialogComponent;
//# sourceMappingURL=specification-edit-dialog.component.js.map