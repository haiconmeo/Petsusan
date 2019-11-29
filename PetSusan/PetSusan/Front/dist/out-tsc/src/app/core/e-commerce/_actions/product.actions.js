"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductActionTypes;
(function (ProductActionTypes) {
    ProductActionTypes["ProductOnServerCreated"] = "[Edit Product Component] Product On Server Created";
    ProductActionTypes["ProductCreated"] = "[Edit Product Component] Product Created";
    ProductActionTypes["ProductUpdated"] = "[Edit Product Component] Product Updated";
    ProductActionTypes["ProductsStatusUpdated"] = "[Products List Page] Products Status Updated";
    ProductActionTypes["OneProductDeleted"] = "[Products List Page] One Product Deleted";
    ProductActionTypes["ManyProductsDeleted"] = "[Products List Page] Many Selected Products Deleted";
    ProductActionTypes["ProductsPageRequested"] = "[Products List Page] Products Page Requested";
    ProductActionTypes["ProductsPageLoaded"] = "[Products API] Products Page Loaded";
    ProductActionTypes["ProductsPageCancelled"] = "[Products API] Products Page Cancelled";
    ProductActionTypes["ProductsPageToggleLoading"] = "[Products] Products Page Toggle Loading";
    ProductActionTypes["ProductsActionToggleLoading"] = "[Products] Products Action Toggle Loading";
})(ProductActionTypes = exports.ProductActionTypes || (exports.ProductActionTypes = {}));
var ProductOnServerCreated = /** @class */ (function () {
    function ProductOnServerCreated(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductOnServerCreated;
    }
    return ProductOnServerCreated;
}());
exports.ProductOnServerCreated = ProductOnServerCreated;
var ProductCreated = /** @class */ (function () {
    function ProductCreated(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductCreated;
    }
    return ProductCreated;
}());
exports.ProductCreated = ProductCreated;
var ProductUpdated = /** @class */ (function () {
    function ProductUpdated(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductUpdated;
    }
    return ProductUpdated;
}());
exports.ProductUpdated = ProductUpdated;
var ProductsStatusUpdated = /** @class */ (function () {
    function ProductsStatusUpdated(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductsStatusUpdated;
    }
    return ProductsStatusUpdated;
}());
exports.ProductsStatusUpdated = ProductsStatusUpdated;
var OneProductDeleted = /** @class */ (function () {
    function OneProductDeleted(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.OneProductDeleted;
    }
    return OneProductDeleted;
}());
exports.OneProductDeleted = OneProductDeleted;
var ManyProductsDeleted = /** @class */ (function () {
    function ManyProductsDeleted(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ManyProductsDeleted;
    }
    return ManyProductsDeleted;
}());
exports.ManyProductsDeleted = ManyProductsDeleted;
var ProductsPageRequested = /** @class */ (function () {
    function ProductsPageRequested(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductsPageRequested;
    }
    return ProductsPageRequested;
}());
exports.ProductsPageRequested = ProductsPageRequested;
var ProductsPageLoaded = /** @class */ (function () {
    function ProductsPageLoaded(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductsPageLoaded;
    }
    return ProductsPageLoaded;
}());
exports.ProductsPageLoaded = ProductsPageLoaded;
var ProductsPageCancelled = /** @class */ (function () {
    function ProductsPageCancelled() {
        this.type = ProductActionTypes.ProductsPageCancelled;
    }
    return ProductsPageCancelled;
}());
exports.ProductsPageCancelled = ProductsPageCancelled;
var ProductsPageToggleLoading = /** @class */ (function () {
    function ProductsPageToggleLoading(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductsPageToggleLoading;
    }
    return ProductsPageToggleLoading;
}());
exports.ProductsPageToggleLoading = ProductsPageToggleLoading;
var ProductsActionToggleLoading = /** @class */ (function () {
    function ProductsActionToggleLoading(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ProductsActionToggleLoading;
    }
    return ProductsActionToggleLoading;
}());
exports.ProductsActionToggleLoading = ProductsActionToggleLoading;
//# sourceMappingURL=product.actions.js.map