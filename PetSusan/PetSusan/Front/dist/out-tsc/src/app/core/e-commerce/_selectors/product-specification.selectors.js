"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NGRX
var store_1 = require("@ngrx/store");
// Lodash
var lodash_1 = require("lodash");
// CRUD
var crud_1 = require("../../_base/crud");
exports.selectProductSpecificationsState = store_1.createFeatureSelector('productSpecifications');
exports.selectProductSpecificationById = function (productSpecificationId) { return store_1.createSelector(exports.selectProductSpecificationsState, function (productSpecificationsState) { return productSpecificationsState.entities[productSpecificationId]; }); };
exports.selectProductSpecificationsPageLoading = store_1.createSelector(exports.selectProductSpecificationsState, function (productSpecificationsState) { return productSpecificationsState.loading; });
exports.selectCurrentProductIdInStoreForProductSpecs = store_1.createSelector(exports.selectProductSpecificationsState, function (productSpecificationsState) { return productSpecificationsState.productId; });
exports.selectLastCreatedProductSpecificationId = store_1.createSelector(exports.selectProductSpecificationsState, function (productSpecificationsState) { return productSpecificationsState.lastCreatedProductSpecificationId; });
exports.selectPSShowInitWaitingMessage = store_1.createSelector(exports.selectProductSpecificationsState, function (productSpecificationsState) { return productSpecificationsState.showInitWaitingMessage; });
exports.selectProductSpecificationsInStore = store_1.createSelector(exports.selectProductSpecificationsState, function (productSpecificationsState) {
    var items = [];
    lodash_1.each(productSpecificationsState.entities, function (element) {
        items.push(element);
    });
    var httpExtension = new crud_1.HttpExtenstionsModel();
    var result = httpExtension.sortArray(items, productSpecificationsState.lastQuery.sortField, productSpecificationsState.lastQuery.sortOrder);
    return new crud_1.QueryResultsModel(result, productSpecificationsState.totalCount, '');
});
//# sourceMappingURL=product-specification.selectors.js.map