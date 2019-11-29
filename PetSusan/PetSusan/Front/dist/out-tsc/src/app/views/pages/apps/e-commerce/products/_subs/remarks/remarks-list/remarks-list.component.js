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
// Material
var material_1 = require("@angular/material");
var collections_1 = require("@angular/cdk/collections");
// RXJS
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// NGRX
var store_1 = require("@ngrx/store");
// CRUD
var crud_1 = require("../../../../../../../../core/_base/crud");
// Services and Models
var e_commerce_1 = require("../../../../../../../../core/e-commerce");
// Table with EDIT item in new page
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var RemarksListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param dialog: MatDialog
     * @param typesUtilsService: TypeUtilsService
     * @param layoutUtilsService: LayoutUtilsService
     */
    function RemarksListComponent(store, fb, dialog, typesUtilsService, layoutUtilsService) {
        this.store = store;
        this.fb = fb;
        this.dialog = dialog;
        this.typesUtilsService = typesUtilsService;
        this.layoutUtilsService = layoutUtilsService;
        this.displayedColumns = ['select', 'id', 'text', 'type', 'dueDate', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.productRemarksResult = [];
        // Add and Edit
        this.isSwitchedToEditMode = false;
        this.loadingAfterSubmit = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    RemarksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        rxjs_1.merge(this.sort.sortChange, this.paginator.page)
            .pipe(operators_1.tap(function () {
            _this.loadRemarksList();
        }))
            .subscribe();
        // Filtration, bind to searchInput
        rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(operators_1.debounceTime(150), operators_1.distinctUntilChanged(), operators_1.tap(function () {
            _this.paginator.pageIndex = 0;
            _this.loadRemarksList();
        }))
            .subscribe();
        // Init DataSource
        this.dataSource = new e_commerce_1.ProductRemarksDataSource(this.store);
        this.dataSource.entitySubject.subscribe(function (res) { return _this.productRemarksResult = res; });
        this.productId$.subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.productId = res;
            rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
                _this.loadRemarksList();
            }); // Remove this line, just loading imitation
            _this.createFormGroup();
        });
    };
    /**
     * On destroy
     */
    RemarksListComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Loading Remarks list
     */
    RemarksListComponent.prototype.loadRemarksList = function () {
        this.selection.clear();
        var queryParams = new crud_1.QueryParamsModel(this.filterConfiguration(), this.sort.direction, this.sort.active, this.paginator.pageIndex, this.paginator.pageSize);
        // Call request from server
        this.store.dispatch(new e_commerce_1.ProductRemarksPageRequested({
            page: queryParams,
            productId: this.productId
        }));
    };
    /**
     * Create Reactive Form
     * @param _item: remark
     */
    RemarksListComponent.prototype.createFormGroup = function (_item) {
        if (_item === void 0) { _item = null; }
        // 'edit' prefix - for item editing
        // 'add' prefix - for item creation
        this.formGroup = this.fb.group({
            editText: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            editType: ['0'],
            editDueDate: [this.typesUtilsService.getDateFromString(), forms_1.Validators.compose([forms_1.Validators.required])],
            newText: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            newType: ['0'],
            newDueDate: [this.typesUtilsService.getDateFromString(), forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.clearAddForm();
        this.clearEditForm();
    };
    // ADD REMARK FUNCTIONS: clearAddForm | checkAddForm | addRemarkButtonOnClick | cancelAddButtonOnClick | saveNewRemark
    RemarksListComponent.prototype.clearAddForm = function () {
        var controls = this.formGroup.controls;
        controls['newText'].setValue('');
        controls['newText'].markAsPristine();
        controls['newText'].markAsUntouched();
        controls['newType'].setValue('0');
        controls['newType'].markAsPristine();
        controls['newType'].markAsUntouched();
        controls['newDueDate'].setValue(this.typesUtilsService.getDateFromString());
        controls['newDueDate'].markAsPristine();
        controls['newDueDate'].markAsUntouched();
        this.remarkForAdd = new e_commerce_1.ProductRemarkModel();
        this.remarkForAdd.clear(this.productId);
        this.remarkForAdd.dueDate = this.typesUtilsService.getDateStringFromDate();
        this.remarkForAdd._isEditMode = false;
    };
    /**
     * Check if Add Form is Valid
     */
    RemarksListComponent.prototype.checkAddForm = function () {
        var controls = this.formGroup.controls;
        if (controls['newText'].invalid || controls['newType'].invalid || controls['newDueDate'].invalid) {
            controls['newText'].markAsTouched();
            // controls['newType'].markAsTouched();
            controls['newDueDate'].markAsTouched();
            return false;
        }
        return true;
    };
    /**
     * Open Remark Add Form
     */
    RemarksListComponent.prototype.addRemarkButtonOnClick = function () {
        this.clearAddForm();
        this.remarkForAdd._isEditMode = true;
        this.isSwitchedToEditMode = true;
    };
    /**
     * Close Remark Add Form
     */
    RemarksListComponent.prototype.cancelAddButtonOnClick = function () {
        this.remarkForAdd._isEditMode = false;
        this.isSwitchedToEditMode = false;
    };
    /**
     *  Create new remark
     */
    RemarksListComponent.prototype.saveNewRemark = function () {
        var _this = this;
        if (!this.checkAddForm()) {
            return;
        }
        var controls = this.formGroup.controls;
        this.loadingAfterSubmit = false;
        this.remarkForAdd._isEditMode = false;
        this.remarkForAdd.text = controls['newText'].value;
        this.remarkForAdd.type = +controls['newType'].value;
        var _date = new Date(controls['newDueDate'].value);
        this.remarkForAdd.dueDate = this.typesUtilsService.getDateStringFromDate(_date);
        this.remarkForAdd._updatedDate = this.typesUtilsService.getDateStringFromDate();
        this.remarkForAdd._createdDate = this.remarkForEdit._updatedDate;
        this.remarkForAdd._userId = 1; // Admin TODO: Get from user servics
        this.store.dispatch(new e_commerce_1.ProductRemarkOnServerCreated({ productRemark: this.remarkForAdd }));
        this.componentSubscriptions = this.store.pipe(store_1.select(e_commerce_1.selectLastCreatedProductRemarkId)).subscribe(function (res) {
            if (!res) {
                return;
            }
            var _saveMessage = "Remark has been created";
            _this.isSwitchedToEditMode = false;
            _this.layoutUtilsService.showActionNotification(_saveMessage, crud_1.MessageType.Create, 10000, true, true);
            _this.clearAddForm();
        });
    };
    // EDIT REMARK FUNCTIONS: clearEditForm | checkEditForm | editRemarkButtonOnClick | cancelEditButtonOnClick |
    RemarksListComponent.prototype.clearEditForm = function () {
        var controls = this.formGroup.controls;
        controls['editText'].setValue('');
        // controls['editText'].markAsPristine();
        // controls['editText'].markAsUntouched();
        controls['editType'].setValue('0');
        // controls['editType'].markAsPristine();
        // controls['editType'].markAsUntouched();
        controls['editDueDate'].setValue(this.typesUtilsService.getDateFromString());
        // controls['editDueDate'].markAsPristine();
        // controls['editDueDate'].markAsUntouched();
        this.remarkForEdit = new e_commerce_1.ProductRemarkModel();
        this.remarkForEdit.clear(this.productId);
        this.remarkForEdit.dueDate = this.typesUtilsService.getDateStringFromDate();
        this.remarkForEdit._isEditMode = false;
    };
    /**
     * Check is Edit Form valid
     */
    RemarksListComponent.prototype.checkEditForm = function () {
        var controls = this.formGroup.controls;
        if (controls['editText'].invalid || controls['editType'].invalid || controls['editDueDate'].invalid) {
            // controls['editText'].markAsTouched();
            // controls['editType'].markAsTouched();
            // controls['editDueDate'].markAsTouched();
            return false;
        }
        return true;
    };
    /**
     * Update remark
     *
     * @param _item: ProductRemarkModel
     */
    RemarksListComponent.prototype.editRemarkButtonOnClick = function (_item) {
        var controls = this.formGroup.controls;
        controls['editText'].setValue(_item.text);
        controls['editType'].setValue(_item.type.toString());
        controls['editDueDate'].setValue(this.typesUtilsService.getDateFromString(_item.dueDate));
        var updateProductReamrk = {
            id: _item.id,
            changes: {
                _isEditMode: true
            }
        };
        this.store.dispatch(new e_commerce_1.ProductRemarkStoreUpdated({ productRemark: updateProductReamrk }));
        this.isSwitchedToEditMode = true;
    };
    /**
     * Cancel remark
     *
     * @param _item: ProductRemarkModel
     */
    RemarksListComponent.prototype.cancelEditButtonOnClick = function (_item) {
        var updateProductReamrk = {
            id: _item.id,
            changes: {
                _isEditMode: false
            }
        };
        this.store.dispatch(new e_commerce_1.ProductRemarkStoreUpdated({ productRemark: updateProductReamrk }));
        this.isSwitchedToEditMode = false;
    };
    /**
     * Save remark
     *
     * @param _item: ProductRemarkModel
     */
    RemarksListComponent.prototype.saveUpdatedRemark = function (_item) {
        if (!this.checkEditForm()) {
            return;
        }
        this.loadingAfterSubmit = true;
        var controls = this.formGroup.controls;
        this.loadingAfterSubmit = false;
        var objectForUpdate = new e_commerce_1.ProductRemarkModel();
        objectForUpdate.id = _item.id;
        objectForUpdate.carId = _item.carId;
        objectForUpdate._isEditMode = _item._isEditMode;
        objectForUpdate.text = controls['editText'].value;
        objectForUpdate.type = +controls['editType'].value;
        var _date = new Date(controls['editDueDate'].value);
        objectForUpdate.dueDate = this.typesUtilsService.getDateStringFromDate(_date);
        objectForUpdate._updatedDate = this.typesUtilsService.getDateStringFromDate();
        objectForUpdate._isEditMode = false;
        var updateProductReamrk = {
            id: _item.id,
            changes: objectForUpdate
        };
        this.store.dispatch(new e_commerce_1.ProductRemarkUpdated({
            partialProductRemark: updateProductReamrk,
            productRemark: objectForUpdate
        }));
        var saveMessage = "Remark has been updated";
        this.isSwitchedToEditMode = false;
        this.layoutUtilsService.showActionNotification(saveMessage, crud_1.MessageType.Update, 10000, true, true);
    };
    /**
     * Returns object for filtration
     */
    RemarksListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter.text = searchText;
        return filter;
    };
    /**
     * Check all rows are selected
     */
    RemarksListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.productRemarksResult.length;
        return numSelected === numRows;
    };
    /**
     * Selects all rows if they are not all selected; otherwise clear selection
     */
    RemarksListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.productRemarksResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    /** ACTIONS */
    /**
     * Delete remark
     *
     * @param _item: ProductRemarkModel
     */
    RemarksListComponent.prototype.deleteRemark = function (_item) {
        var _this = this;
        var _title = 'Remark Delete';
        var _description = 'Are you sure to permanently delete this remark?';
        var _waitDesciption = 'Remark is deleting...';
        var _deleteMessage = "Remark has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.store.dispatch(new e_commerce_1.OneProductRemarkDeleted({ id: _item.id }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
        });
    };
    /**
     * Delete selected remarks
     */
    RemarksListComponent.prototype.deleteRemarks = function () {
        var _this = this;
        var _title = 'Remarks Delete';
        var _description = 'Are you sure to permanently delete selected remarks?';
        var _waitDesciption = 'Remarks are deleting...';
        var _deleteMessage = 'Selected remarks have been deleted';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            var length = _this.selection.selected.length;
            var idsForDeletion = [];
            for (var i = 0; i < length; i++) {
                idsForDeletion.push(_this.selection.selected[i].id);
            }
            _this.store.dispatch(new e_commerce_1.ManyProductRemarksDeleted({ ids: idsForDeletion }));
            _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
            _this.selection.clear();
        });
    };
    /**
     * Fetch selected remarks
     */
    RemarksListComponent.prototype.fetchRemarks = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) { messages.push({ text: "" + elem.text, id: elem.id }); });
        this.layoutUtilsService.fetchElements(messages);
    };
    /* UI **/
    /**
     * Returns type in string
     *
     * @param _remark: ProductRemarkModel
     */
    RemarksListComponent.prototype.getTypeStr = function (_remark) {
        switch (_remark.type) {
            case 0: return 'Info';
            case 1: return 'Note';
            case 2: return 'Reminder';
            default: return '';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.Observable)
    ], RemarksListComponent.prototype, "productId$", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], RemarksListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], RemarksListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], RemarksListComponent.prototype, "searchInput", void 0);
    RemarksListComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-remarks-list',
            templateUrl: './remarks-list.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [store_1.Store,
            forms_1.FormBuilder,
            material_1.MatDialog,
            crud_1.TypesUtilsService,
            crud_1.LayoutUtilsService])
    ], RemarksListComponent);
    return RemarksListComponent;
}());
exports.RemarksListComponent = RemarksListComponent;
//# sourceMappingURL=remarks-list.component.js.map