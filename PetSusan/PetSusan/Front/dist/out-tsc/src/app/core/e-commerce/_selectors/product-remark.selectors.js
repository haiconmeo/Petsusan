"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NGRX
var store_1 = require("@ngrx/store");
// Lodash
var lodash_1 = require("lodash");
// CRUD
var crud_1 = require("../../_base/crud");
exports.selectProductRemarksState = store_1.createFeatureSelector('productRemarks');
exports.selectProductRemarkById = function (productRemarkId) { return store_1.createSelector(exports.selectProductRemarksState, function (productRemarksState) { return productRemarksState.entities[productRemarkId]; }); };
exports.selectProductRemarksPageLoading = store_1.createSelector(exports.selectProductRemarksState, function (productRemarksState) { return productRemarksState.loading; });
exports.selectCurrentProductIdInStoreForProductRemarks = store_1.createSelector(exports.selectProductRemarksState, function (productRemarksState) { return productRemarksState.productId; });
exports.selectLastCreatedProductRemarkId = store_1.createSelector(exports.selectProductRemarksState, function (productRemarksState) { return productRemarksState.lastCreatedProductRemarkId; });
exports.selectPRShowInitWaitingMessage = store_1.createSelector(exports.selectProductRemarksState, function (productRemarksState) { return productRemarksState.showInitWaitingMessage; });
exports.selectProductRemarksInStore = store_1.createSelector(exports.selectProductRemarksState, function (productRemarksState) {
    var items = [];
    lodash_1.each(productRemarksState.entities, function (element) {
        items.push(element);
    });
    var httpExtension = new crud_1.HttpExtenstionsModel();
    var result = httpExtension.sortArray(items, productRemarksState.lastQuery.sortField, productRemarksState.lastQuery.sortOrder);
    return new crud_1.QueryResultsModel(items, productRemarksState.totalCount, '');
});
//# sourceMappingURL=product-remark.selectors.js.map