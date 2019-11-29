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
// Material
var material_1 = require("@angular/material");
// RxJS
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// NGRX
var store_1 = require("@ngrx/store");
// Layout
var layout_1 = require("../../../../../../core/_base/layout");
// CRUD
var crud_1 = require("../../../../../../core/_base/crud");
// Services and Models
var e_commerce_1 = require("../../../../../../core/e-commerce");
var AVAILABLE_COLORS = ['Red', 'CadetBlue', 'Gold', 'LightSlateGrey', 'RoyalBlue', 'Crimson', 'Blue', 'Sienna', 'Indigo', 'Green', 'Violet',
    'GoldenRod', 'OrangeRed', 'Khaki', 'Teal', 'Purple', 'Orange', 'Pink', 'Black', 'DarkTurquoise'];
var AVAILABLE_MANUFACTURES = ['Pontiac', 'Subaru', 'Mitsubishi', 'Oldsmobile', 'Chevrolet', 'Chrysler', 'Suzuki', 'GMC', 'Cadillac', 'Mercury', 'Dodge',
    'Ram', 'Lexus', 'Lamborghini', 'Honda', 'Nissan', 'Ford', 'Hyundai', 'Saab', 'Toyota'];
var ProductEditComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param typesUtilsService: TypesUtilsService
     * @param productFB: FormBuilder
     * @param dialog: MatDialog
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: SubheaderService
     * @param layoutConfigService: LayoutConfigService
     */
    function ProductEditComponent(store, activatedRoute, router, typesUtilsService, productFB, dialog, subheaderService, layoutUtilsService, layoutConfigService, productService, cdr) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.typesUtilsService = typesUtilsService;
        this.productFB = productFB;
        this.dialog = dialog;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.layoutConfigService = layoutConfigService;
        this.productService = productService;
        this.cdr = cdr;
        this.selectedTab = 0;
        this.loadingSubject = new rxjs_1.BehaviorSubject(true);
        this.hasFormErrors = false;
        this.availableYears = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 2019; i > 1945; i--) {
            this.availableYears.push(i);
        }
        this.loading$ = this.loadingSubject.asObservable();
        this.loadingSubject.next(true);
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id && id > 0) {
                _this.store.pipe(store_1.select(e_commerce_1.selectProductById(id))).subscribe(function (result) {
                    if (!result) {
                        _this.loadProductFromService(id);
                        return;
                    }
                    _this.loadProduct(result);
                });
            }
            else {
                var newProduct = new e_commerce_1.ProductModel();
                newProduct.clear();
                _this.loadProduct(newProduct);
            }
        });
        // sticky portlet header
        window.onload = function () {
            var style = getComputedStyle(document.getElementById('kt_header'));
            _this.headerMargin = parseInt(style.height, 0);
        };
    };
    ProductEditComponent.prototype.loadProduct = function (_product, fromService) {
        if (fromService === void 0) { fromService = false; }
        if (!_product) {
            this.goBack('');
        }
        this.product = _product;
        this.productId$ = rxjs_1.of(_product.id);
        this.oldProduct = Object.assign({}, _product);
        this.initProduct();
        if (fromService) {
            this.cdr.detectChanges();
        }
    };
    // If product didn't find in store
    ProductEditComponent.prototype.loadProductFromService = function (productId) {
        var _this = this;
        this.productService.getProductById(productId).subscribe(function (res) {
            _this.loadProduct(res, true);
        });
    };
    /**
     * On destroy
     */
    ProductEditComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Init product
     */
    ProductEditComponent.prototype.initProduct = function () {
        this.createForm();
        var prefix = this.layoutConfigService.getCurrentMainRoute();
        this.loadingSubject.next(false);
        if (!this.product.id) {
            this.subheaderService.setBreadcrumbs([
                { title: 'eCommerce', page: "../" + prefix + "/ecommerce" },
                { title: 'Products', page: "../" + prefix + "/ecommerce/products" },
                { title: 'Create product', page: "../" + prefix + "/ecommerce/products/add" }
            ]);
            return;
        }
        this.subheaderService.setTitle('Edit product');
        this.subheaderService.setBreadcrumbs([
            { title: 'eCommerce', page: "../" + prefix + "/ecommerce" },
            { title: 'Products', page: "../" + prefix + "/ecommerce/products" },
            { title: 'Edit product', page: "../" + prefix + "/ecommerce/products/edit", queryParams: { id: this.product.id } }
        ]);
    };
    /**
     * Create form
     */
    ProductEditComponent.prototype.createForm = function () {
        var _this = this;
        this.productForm = this.productFB.group({
            model: [this.product.model, forms_1.Validators.required],
            manufacture: [this.product.manufacture, forms_1.Validators.required],
            modelYear: [this.product.modelYear.toString(), forms_1.Validators.required],
            mileage: [this.product.mileage, [forms_1.Validators.required, forms_1.Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
            description: [this.product.description],
            color: [this.product.color, forms_1.Validators.required],
            price: [this.product.price, [forms_1.Validators.required, forms_1.Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
            condition: [this.product.condition.toString(), [forms_1.Validators.required, forms_1.Validators.min(0), forms_1.Validators.max(1)]],
            status: [this.product.status.toString(), [forms_1.Validators.required, forms_1.Validators.min(0), forms_1.Validators.max(1)]],
            VINCode: [this.product.VINCode, forms_1.Validators.required]
        });
        this.filteredManufactures = this.productForm.controls.manufacture.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (val) { return _this.filterManufacture(val.toString()); }));
        this.filteredColors = this.productForm.controls.color.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (val) { return _this.filterColor(val.toString()); }));
    };
    /**
     * Filter manufacture
     *
     * @param val: string
     */
    ProductEditComponent.prototype.filterManufacture = function (val) {
        return AVAILABLE_MANUFACTURES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    /**
     * Filter color
     *
     * @param val: string
     */
    ProductEditComponent.prototype.filterColor = function (val) {
        return AVAILABLE_COLORS.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    /**
     * Go back to the list
     *
     * @param id: any
     */
    ProductEditComponent.prototype.goBack = function (id) {
        this.loadingSubject.next(false);
        var url = this.layoutConfigService.getCurrentMainRoute() + "/ecommerce/products?id=" + id;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    /**
     * Refresh product
     *
     * @param isNew: boolean
     * @param id: number
     */
    ProductEditComponent.prototype.refreshProduct = function (isNew, id) {
        if (isNew === void 0) { isNew = false; }
        if (id === void 0) { id = 0; }
        this.loadingSubject.next(false);
        var url = this.router.url;
        if (!isNew) {
            this.router.navigate([url], { relativeTo: this.activatedRoute });
            return;
        }
        url = this.layoutConfigService.getCurrentMainRoute() + "/ecommerce/products/edit/" + id;
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    /**
     * Reset
     */
    ProductEditComponent.prototype.reset = function () {
        this.product = Object.assign({}, this.oldProduct);
        this.createForm();
        this.hasFormErrors = false;
        this.productForm.markAsPristine();
        this.productForm.markAsUntouched();
        this.productForm.updateValueAndValidity();
    };
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    ProductEditComponent.prototype.onSumbit = function (withBack) {
        if (withBack === void 0) { withBack = false; }
        this.hasFormErrors = false;
        var controls = this.productForm.controls;
        /** check form */
        if (this.productForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.selectedTab = 0;
            return;
        }
        // tslint:disable-next-line:prefer-const
        var editedProduct = this.prepareProduct();
        if (editedProduct.id > 0) {
            this.updateProduct(editedProduct, withBack);
            return;
        }
        this.addProduct(editedProduct, withBack);
    };
    /**
     * Returns object for saving
     */
    ProductEditComponent.prototype.prepareProduct = function () {
        var controls = this.productForm.controls;
        var _product = new e_commerce_1.ProductModel();
        _product.id = this.product.id;
        _product.model = controls['model'].value;
        _product.manufacture = controls['manufacture'].value;
        _product.modelYear = +controls['modelYear'].value;
        _product.mileage = +controls['mileage'].value;
        _product.description = controls['description'].value;
        _product.color = controls['color'].value;
        _product.price = +controls['price'].value;
        _product.condition = +controls['condition'].value;
        _product.status = +controls['status'].value;
        _product.VINCode = controls['VINCode'].value;
        _product._userId = 1; // TODO: get version from userId
        _product._createdDate = this.product._createdDate;
        _product._updatedDate = this.product._updatedDate;
        _product._updatedDate = this.typesUtilsService.getDateStringFromDate();
        _product._createdDate = this.product.id > 0 ? _product._createdDate : _product._updatedDate;
        return _product;
    };
    /**
     * Add product
     *
     * @param _product: ProductModel
     * @param withBack: boolean
     */
    ProductEditComponent.prototype.addProduct = function (_product, withBack) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        this.loadingSubject.next(true);
        this.store.dispatch(new e_commerce_1.ProductOnServerCreated({ product: _product }));
        this.componentSubscriptions = this.store.pipe(operators_1.delay(1000), store_1.select(e_commerce_1.selectLastCreatedProductId)).subscribe(function (newId) {
            if (!newId) {
                return;
            }
            _this.loadingSubject.next(false);
            if (withBack) {
                _this.goBack(newId);
            }
            else {
                var message = "New product successfully has been added.";
                _this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Create, 10000, true, true);
                _this.refreshProduct(true, newId);
            }
        });
    };
    /**
     * Update product
     *
     * @param _product: ProductModel
     * @param withBack: boolean
     */
    ProductEditComponent.prototype.updateProduct = function (_product, withBack) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        this.loadingSubject.next(true);
        var updateProduct = {
            id: _product.id,
            changes: _product
        };
        this.store.dispatch(new e_commerce_1.ProductUpdated({
            partialProduct: updateProduct,
            product: _product
        }));
        rxjs_1.of(undefined).pipe(operators_1.delay(3000)).subscribe(function () {
            if (withBack) {
                _this.goBack(_product.id);
            }
            else {
                var message = "Product successfully has been saved.";
                _this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Update, 10000, true, true);
                _this.refreshProduct(false);
            }
        }); // Remove this line
    };
    /**
     * Returns component title
     */
    ProductEditComponent.prototype.getComponentTitle = function () {
        var result = 'Create product';
        if (!this.product || !this.product.id) {
            return result;
        }
        result = "Edit product - " + this.product.manufacture + " " + this.product.model + ", " + this.product.modelYear;
        return result;
    };
    /**
     * Close alert
     *
     * @param $event
     */
    ProductEditComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'kt-product-edit',
            templateUrl: './product-edit.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [store_1.Store,
            router_1.ActivatedRoute,
            router_1.Router,
            crud_1.TypesUtilsService,
            forms_1.FormBuilder,
            material_1.MatDialog,
            layout_1.SubheaderService,
            crud_1.LayoutUtilsService,
            layout_1.LayoutConfigService,
            e_commerce_1.ProductsService,
            core_1.ChangeDetectorRef])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map