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
var rxjs_1 = require("rxjs");
// Angular
var core_1 = require("@angular/core");
// RxJS
var operators_1 = require("rxjs/operators");
// NGRX
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
// Services
var _services_1 = require("../_services/");
// Actions
var product_actions_1 = require("../_actions/product.actions");
var rxjs_2 = require("rxjs");
var ProductEffects = /** @class */ (function () {
    // @Effect()
    // init$: Observable<Action> = defer(() => {
    //     const queryParams = new QueryParamsModel({});
    //     return of(new ProductsPageRequested({ page: queryParams }));
    // });
    function ProductEffects(actions$, productsService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.productsService = productsService;
        this.store = store;
        this.showPageLoadingDistpatcher = new product_actions_1.ProductsPageToggleLoading({ isLoading: true });
        this.showLoadingDistpatcher = new product_actions_1.ProductsPageToggleLoading({ isLoading: true });
        this.hideActionLoadingDistpatcher = new product_actions_1.ProductsPageToggleLoading({ isLoading: false });
        this.loadProductsPage$ = this.actions$
            .pipe(effects_1.ofType(product_actions_1.ProductActionTypes.ProductsPageRequested), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showPageLoadingDistpatcher);
            var requestToServer = _this.productsService.findProducts(payload.page);
            var lastQuery = rxjs_2.of(payload.page);
            return rxjs_1.forkJoin(requestToServer, lastQuery);
        }), operators_1.map(function (response) {
            var result = response[0];
            var lastQuery = response[1];
            return new product_actions_1.ProductsPageLoaded({
                products: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
        }));
        this.deleteProduct$ = this.actions$
            .pipe(effects_1.ofType(product_actions_1.ProductActionTypes.OneProductDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showLoadingDistpatcher);
            return _this.productsService.deleteProduct(payload.id);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.deleteProducts$ = this.actions$
            .pipe(effects_1.ofType(product_actions_1.ProductActionTypes.ManyProductsDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showLoadingDistpatcher);
            return _this.productsService.deleteProducts(payload.ids);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.updateProductsStatus$ = this.actions$
            .pipe(effects_1.ofType(product_actions_1.ProductActionTypes.ProductsStatusUpdated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showLoadingDistpatcher);
            return _this.productsService.updateStatusForProduct(payload.products, payload.status);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.updateProduct$ = this.actions$
            .pipe(effects_1.ofType(product_actions_1.ProductActionTypes.ProductUpdated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showLoadingDistpatcher);
            return _this.productsService.updateProduct(payload.product);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.createProduct$ = this.actions$
            .pipe(effects_1.ofType(product_actions_1.ProductActionTypes.ProductOnServerCreated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showLoadingDistpatcher);
            return _this.productsService.createProduct(payload.product).pipe(operators_1.tap(function (res) {
                _this.store.dispatch(new product_actions_1.ProductCreated({ product: res }));
            }));
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductEffects.prototype, "loadProductsPage$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductEffects.prototype, "deleteProduct$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductEffects.prototype, "deleteProducts$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductEffects.prototype, "updateProductsStatus$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductEffects.prototype, "updateProduct$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductEffects.prototype, "createProduct$", void 0);
    ProductEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, _services_1.ProductsService, store_1.Store])
    ], ProductEffects);
    return ProductEffects;
}());
exports.ProductEffects = ProductEffects;
//# sourceMappingURL=product.effects.js.map