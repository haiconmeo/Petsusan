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
var operators_1 = require("rxjs/operators");
// NGRX
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
// Services
var _services_1 = require("../_services/");
// Actions
var product_specification_actions_1 = require("../_actions/product-specification.actions");
var ProductSpecificationEffects = /** @class */ (function () {
    function ProductSpecificationEffects(actions$, productSpecificationsService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.productSpecificationsService = productSpecificationsService;
        this.store = store;
        // showLoadingDistpatcher = new ProcutSpecificationsPageToggleLoading({ isLoading: true });
        this.hideLoadingDistpatcher = new product_specification_actions_1.ProductSpecificationsPageToggleLoading({ isLoading: false });
        this.loadProductSpecificationsPage$ = this.actions$
            .pipe(effects_1.ofType(product_specification_actions_1.ProductSpecificationActionTypes.ProductSpecificationsPageRequested), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            return _this.productSpecificationsService.findProductSpecs(payload.page, payload.productId);
        }), operators_1.map(function (result) {
            return new product_specification_actions_1.ProductSpecificationsPageLoaded({
                productSpecifications: result.items,
                totalCount: result.totalCount
            });
        }));
        this.deleteProductSpecification$ = this.actions$
            .pipe(effects_1.ofType(product_specification_actions_1.ProductSpecificationActionTypes.OneProductSpecificationDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(new product_specification_actions_1.ProductSpecificationsPageToggleLoading({ isLoading: true }));
            return _this.productSpecificationsService.deleteProductSpec(payload.id);
        }), operators_1.map(function () {
            return _this.hideLoadingDistpatcher;
        }));
        this.deleteProductSpecifications$ = this.actions$
            .pipe(effects_1.ofType(product_specification_actions_1.ProductSpecificationActionTypes.ManyProductSpecificationsDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(new product_specification_actions_1.ProductSpecificationsPageToggleLoading({ isLoading: true }));
            return _this.productSpecificationsService.deleteProductSpecifications(payload.ids);
        }), operators_1.map(function () {
            return _this.hideLoadingDistpatcher;
        }));
        this.updateProductSpecification$ = this.actions$
            .pipe(effects_1.ofType(product_specification_actions_1.ProductSpecificationActionTypes.ProductSpecificationUpdated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(new product_specification_actions_1.ProductSpecificationsPageToggleLoading({ isLoading: true }));
            return _this.productSpecificationsService.updateProductSpec(payload.productSpecification);
        }), operators_1.map(function () {
            return _this.hideLoadingDistpatcher;
        }));
        this.createProductSpecification$ = this.actions$
            .pipe(effects_1.ofType(product_specification_actions_1.ProductSpecificationActionTypes.ProductSpecificationOnServerCreated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(new product_specification_actions_1.ProductSpecificationsPageToggleLoading({ isLoading: true }));
            return _this.productSpecificationsService.createProductSpec(payload.productSpecification).pipe(operators_1.tap(function (res) {
                _this.store.dispatch(new product_specification_actions_1.ProductSpecificationCreated({ productSpecification: res }));
            }));
        }), operators_1.map(function () {
            return _this.hideLoadingDistpatcher;
        }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductSpecificationEffects.prototype, "loadProductSpecificationsPage$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductSpecificationEffects.prototype, "deleteProductSpecification$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductSpecificationEffects.prototype, "deleteProductSpecifications$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductSpecificationEffects.prototype, "updateProductSpecification$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductSpecificationEffects.prototype, "createProductSpecification$", void 0);
    ProductSpecificationEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, _services_1.ProductSpecificationsService, store_1.Store])
    ], ProductSpecificationEffects);
    return ProductSpecificationEffects;
}());
exports.ProductSpecificationEffects = ProductSpecificationEffects;
//# sourceMappingURL=product-specification.effects.js.map