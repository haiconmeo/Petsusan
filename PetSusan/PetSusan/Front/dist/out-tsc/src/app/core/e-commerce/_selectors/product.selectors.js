"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NGRX
var store_1 = require("@ngrx/store");
// Lodash
var lodash_1 = require("lodash");
// CRUD
var crud_1 = require("../../_base/crud");
exports.selectProductsState = store_1.createFeatureSelector('products');
exports.selectProductById = function (productId) { return store_1.createSelector(exports.selectProductsState, function (productsState) { return productsState.entities[productId]; }); };
exports.selectProductsPageLoading = store_1.createSelector(exports.selectProductsState, function (productsState) { return productsState.listLoading; });
exports.selectProductsActionLoading = store_1.createSelector(exports.selectProductsState, function (customersState) { return customersState.actionsloading; });
exports.selectProductsPageLastQuery = store_1.createSelector(exports.selectProductsState, function (productsState) { return productsState.lastQuery; });
exports.selectLastCreatedProductId = store_1.createSelector(exports.selectProductsState, function (productsState) { return productsState.lastCreatedProductId; });
exports.selectProductsInitWaitingMessage = store_1.createSelector(exports.selectProductsState, function (productsState) { return productsState.showInitWaitingMessage; });
exports.selectProductsInStore = store_1.createSelector(exports.selectProductsState, function (productsState) {
    var items = [];
    lodash_1.each(productsState.entities, function (element) {
        items.push(element);
    });
    var httpExtension = new crud_1.HttpExtenstionsModel();
    var result = httpExtension.sortArray(items, productsState.lastQuery.sortField, productsState.lastQuery.sortOrder);
    return new crud_1.QueryResultsModel(result, productsState.totalCount, '');
});
exports.selectHasProductsInStore = store_1.createSelector(exports.selectProductsInStore, function (queryResult) {
    if (!queryResult.totalCount) {
        return false;
    }
    return true;
});
//# sourceMappingURL=product.selectors.js.map