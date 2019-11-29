"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductRemarkActionTypes;
(function (ProductRemarkActionTypes) {
    ProductRemarkActionTypes["ProductRemarkOnServerCreated"] = "[Edit ProductRemark Dialog] ProductRemark On Server Created";
    ProductRemarkActionTypes["ProductRemarkCreated"] = "[Edit ProductRemark Dialog] ProductRemark Created";
    ProductRemarkActionTypes["ProductRemarkUpdated"] = "[Edit ProductRemark Dialog] ProductRemark Updated";
    ProductRemarkActionTypes["ProductRemarkStoreUpdated"] = "[Edit ProductRemark Dialog] ProductRemark Updated | Only on storage";
    ProductRemarkActionTypes["OneProductRemarkDeleted"] = "[Product Remarks List Page]  One Product Remark Deleted";
    ProductRemarkActionTypes["ManyProductRemarksDeleted"] = "[Product Remarks List Page] Many Product Remarks Deleted";
    ProductRemarkActionTypes["ProductRemarksPageRequested"] = "[Product Remarks List Page] Product Remarks Page Requested";
    ProductRemarkActionTypes["ProductRemarksPageLoaded"] = "[Product Remarks API] Product Remarks Page Loaded";
    ProductRemarkActionTypes["ProductRemarksPageCancelled"] = "[Product Remarks API] Product Remarks Page Cancelled";
    ProductRemarkActionTypes["ProductRemarksPageToggleLoading"] = "[Product Remarks] Product Remarks Page Toggle Loading";
})(ProductRemarkActionTypes = exports.ProductRemarkActionTypes || (exports.ProductRemarkActionTypes = {}));
var ProductRemarkOnServerCreated = /** @class */ (function () {
    function ProductRemarkOnServerCreated(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarkOnServerCreated;
    }
    return ProductRemarkOnServerCreated;
}());
exports.ProductRemarkOnServerCreated = ProductRemarkOnServerCreated;
var ProductRemarkCreated = /** @class */ (function () {
    function ProductRemarkCreated(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarkCreated;
    }
    return ProductRemarkCreated;
}());
exports.ProductRemarkCreated = ProductRemarkCreated;
var ProductRemarkUpdated = /** @class */ (function () {
    function ProductRemarkUpdated(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarkUpdated;
    }
    return ProductRemarkUpdated;
}());
exports.ProductRemarkUpdated = ProductRemarkUpdated;
var ProductRemarkStoreUpdated = /** @class */ (function () {
    function ProductRemarkStoreUpdated(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarkStoreUpdated;
    }
    return ProductRemarkStoreUpdated;
}());
exports.ProductRemarkStoreUpdated = ProductRemarkStoreUpdated;
var OneProductRemarkDeleted = /** @class */ (function () {
    function OneProductRemarkDeleted(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.OneProductRemarkDeleted;
    }
    return OneProductRemarkDeleted;
}());
exports.OneProductRemarkDeleted = OneProductRemarkDeleted;
var ManyProductRemarksDeleted = /** @class */ (function () {
    function ManyProductRemarksDeleted(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ManyProductRemarksDeleted;
    }
    return ManyProductRemarksDeleted;
}());
exports.ManyProductRemarksDeleted = ManyProductRemarksDeleted;
var ProductRemarksPageRequested = /** @class */ (function () {
    function ProductRemarksPageRequested(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarksPageRequested;
    }
    return ProductRemarksPageRequested;
}());
exports.ProductRemarksPageRequested = ProductRemarksPageRequested;
var ProductRemarksPageLoaded = /** @class */ (function () {
    function ProductRemarksPageLoaded(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarksPageLoaded;
    }
    return ProductRemarksPageLoaded;
}());
exports.ProductRemarksPageLoaded = ProductRemarksPageLoaded;
var ProductRemarksPageCancelled = /** @class */ (function () {
    function ProductRemarksPageCancelled() {
        this.type = ProductRemarkActionTypes.ProductRemarksPageCancelled;
    }
    return ProductRemarksPageCancelled;
}());
exports.ProductRemarksPageCancelled = ProductRemarksPageCancelled;
var ProductRemarksPageToggleLoading = /** @class */ (function () {
    function ProductRemarksPageToggleLoading(payload) {
        this.payload = payload;
        this.type = ProductRemarkActionTypes.ProductRemarksPageToggleLoading;
    }
    return ProductRemarksPageToggleLoading;
}());
exports.ProductRemarksPageToggleLoading = ProductRemarksPageToggleLoading;
//# sourceMappingURL=product-remark.actions.js.map