"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductSpecificationActionTypes;
(function (ProductSpecificationActionTypes) {
    ProductSpecificationActionTypes["ProductSpecificationOnServerCreated"] = "[Edit ProductSpecification Dialog] Product Specification On Server Created";
    ProductSpecificationActionTypes["ProductSpecificationCreated"] = "[Edit ProductSpecification Dialog] Product Specification Created";
    ProductSpecificationActionTypes["ProductSpecificationUpdated"] = "[Edit SpecificationSpecification Dialog] Product Specification Updated";
    ProductSpecificationActionTypes["OneProductSpecificationDeleted"] = "[Product Specification List Page]  One Product Specification Deleted";
    ProductSpecificationActionTypes["ManyProductSpecificationsDeleted"] = "[Product Specifications List Page] Many Product Specifications Deleted";
    ProductSpecificationActionTypes["ProductSpecificationsPageRequested"] = "[Product Specifications List Page] Product Specifications Page Requested";
    ProductSpecificationActionTypes["ProductSpecificationsPageLoaded"] = "[Product Specifications API] Product Specifications Page Loaded";
    ProductSpecificationActionTypes["ProductSpecificationsPageCancelled"] = "[Product Specifications API] Product Specifications Page Cancelled";
    ProductSpecificationActionTypes["ProductSpecificationsPageToggleLoading"] = "[Product Specifications] Product Specifications Page Toggle Loading";
})(ProductSpecificationActionTypes = exports.ProductSpecificationActionTypes || (exports.ProductSpecificationActionTypes = {}));
var ProductSpecificationOnServerCreated = /** @class */ (function () {
    function ProductSpecificationOnServerCreated(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationOnServerCreated;
    }
    return ProductSpecificationOnServerCreated;
}());
exports.ProductSpecificationOnServerCreated = ProductSpecificationOnServerCreated;
var ProductSpecificationCreated = /** @class */ (function () {
    function ProductSpecificationCreated(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationCreated;
    }
    return ProductSpecificationCreated;
}());
exports.ProductSpecificationCreated = ProductSpecificationCreated;
var ProductSpecificationUpdated = /** @class */ (function () {
    function ProductSpecificationUpdated(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationUpdated;
    }
    return ProductSpecificationUpdated;
}());
exports.ProductSpecificationUpdated = ProductSpecificationUpdated;
var OneProductSpecificationDeleted = /** @class */ (function () {
    function OneProductSpecificationDeleted(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.OneProductSpecificationDeleted;
    }
    return OneProductSpecificationDeleted;
}());
exports.OneProductSpecificationDeleted = OneProductSpecificationDeleted;
var ManyProductSpecificationsDeleted = /** @class */ (function () {
    function ManyProductSpecificationsDeleted(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ManyProductSpecificationsDeleted;
    }
    return ManyProductSpecificationsDeleted;
}());
exports.ManyProductSpecificationsDeleted = ManyProductSpecificationsDeleted;
var ProductSpecificationsPageRequested = /** @class */ (function () {
    function ProductSpecificationsPageRequested(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationsPageRequested;
    }
    return ProductSpecificationsPageRequested;
}());
exports.ProductSpecificationsPageRequested = ProductSpecificationsPageRequested;
var ProductSpecificationsPageLoaded = /** @class */ (function () {
    function ProductSpecificationsPageLoaded(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationsPageLoaded;
    }
    return ProductSpecificationsPageLoaded;
}());
exports.ProductSpecificationsPageLoaded = ProductSpecificationsPageLoaded;
var ProductSpecificationsPageCancelled = /** @class */ (function () {
    function ProductSpecificationsPageCancelled() {
        this.type = ProductSpecificationActionTypes.ProductSpecificationsPageCancelled;
    }
    return ProductSpecificationsPageCancelled;
}());
exports.ProductSpecificationsPageCancelled = ProductSpecificationsPageCancelled;
var ProductSpecificationsPageToggleLoading = /** @class */ (function () {
    function ProductSpecificationsPageToggleLoading(payload) {
        this.payload = payload;
        this.type = ProductSpecificationActionTypes.ProductSpecificationsPageToggleLoading;
    }
    return ProductSpecificationsPageToggleLoading;
}());
exports.ProductSpecificationsPageToggleLoading = ProductSpecificationsPageToggleLoading;
//# sourceMappingURL=product-specification.actions.js.map