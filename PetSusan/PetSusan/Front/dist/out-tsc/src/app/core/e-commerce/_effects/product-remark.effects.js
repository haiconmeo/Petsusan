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
var product_remark_actions_1 = require("../_actions/product-remark.actions");
var ProductRemarkEffects = /** @class */ (function () {
    function ProductRemarkEffects(actions$, productRemarksService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.productRemarksService = productRemarksService;
        this.store = store;
        // showLoadingDistpatcher = new ProcutRemarksPageToggleLoading({ isLoading: true });
        this.hideLoadingDistpatcher = new product_remark_actions_1.ProductRemarksPageToggleLoading({ isLoading: false });
        this.loadProductRemarksPage$ = this.actions$
            .pipe(effects_1.ofType(product_remark_actions_1.ProductRemarkActionTypes.ProductRemarksPageRequested), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            return _this.productRemarksService.findProductRemarks(payload.page, payload.productId);
        }), operators_1.map(function (result) {
            return new product_remark_actions_1.ProductRemarksPageLoaded({
                productRemarks: result.items,
                totalCount: result.totalCount
            });
        }));
        this.deleteProductRemark$ = this.actions$
            .pipe(effects_1.ofType(product_remark_actions_1.ProductRemarkActionTypes.OneProductRemarkDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(new product_remark_actions_1.ProductRemarksPageToggleLoading({ isLoading: true }));
            return _this.productRemarksService.deleteProductRemark(payload.id);
        }), operators_1.map(function () {
            return _this.hideLoadingDistpatcher;
        }));
        this.deleteProductRemarks$ = this.actions$
            .pipe(effects_1.ofType(product_remark_actions_1.ProductRemarkActionTypes.ManyProductRemarksDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(new product_remark_actions_1.ProductRemarksPageToggleLoading({ isLoading: true }));
            return _this.productRemarksService.deleteProductRemarks(payload.ids);
        }), operators_1.map(function () {
            return _this.hideLoadingDistpatcher;
        }));
        this.updateProductRemark$ = this.actions$
            .pipe(effects_1.ofType(product_remark_actions_1.ProductRemarkActionTypes.ProductRemarkUpdated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(new product_remark_actions_1.ProductRemarksPageToggleLoading({ isLoading: true }));
            return _this.productRemarksService.updateProductRemark(payload.productRemark);
        }), operators_1.map(function () {
            return _this.hideLoadingDistpatcher;
        }));
        this.createProductRemark$ = this.actions$
            .pipe(effects_1.ofType(product_remark_actions_1.ProductRemarkActionTypes.ProductRemarkOnServerCreated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(new product_remark_actions_1.ProductRemarksPageToggleLoading({ isLoading: true }));
            return _this.productRemarksService.createProductRemark(payload.productRemark).pipe(operators_1.tap(function (res) {
                _this.store.dispatch(new product_remark_actions_1.ProductRemarkCreated({ productRemark: res }));
            }));
        }), operators_1.map(function () {
            return _this.hideLoadingDistpatcher;
        }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductRemarkEffects.prototype, "loadProductRemarksPage$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductRemarkEffects.prototype, "deleteProductRemark$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductRemarkEffects.prototype, "deleteProductRemarks$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductRemarkEffects.prototype, "updateProductRemark$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProductRemarkEffects.prototype, "createProductRemark$", void 0);
    ProductRemarkEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, _services_1.ProductRemarksService, store_1.Store])
    ], ProductRemarkEffects);
    return ProductRemarkEffects;
}());
exports.ProductRemarkEffects = ProductRemarkEffects;
//# sourceMappingURL=product-remark.effects.js.map