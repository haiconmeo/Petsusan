"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NGRX
var store_1 = require("@ngrx/store");
// Lodash
var lodash_1 = require("lodash");
// CRUD
var crud_1 = require("../../_base/crud");
exports.selectCustomersState = store_1.createFeatureSelector('customers');
exports.selectCustomerById = function (customerId) { return store_1.createSelector(exports.selectCustomersState, function (customersState) { return customersState.entities[customerId]; }); };
exports.selectCustomersPageLoading = store_1.createSelector(exports.selectCustomersState, function (customersState) { return customersState.listLoading; });
exports.selectCustomersActionLoading = store_1.createSelector(exports.selectCustomersState, function (customersState) { return customersState.actionsloading; });
exports.selectLastCreatedCustomerId = store_1.createSelector(exports.selectCustomersState, function (customersState) { return customersState.lastCreatedCustomerId; });
exports.selectCustomersShowInitWaitingMessage = store_1.createSelector(exports.selectCustomersState, function (customersState) { return customersState.showInitWaitingMessage; });
exports.selectCustomersInStore = store_1.createSelector(exports.selectCustomersState, function (customersState) {
    var items = [];
    lodash_1.each(customersState.entities, function (element) {
        items.push(element);
    });
    var httpExtension = new crud_1.HttpExtenstionsModel();
    var result = httpExtension.sortArray(items, customersState.lastQuery.sortField, customersState.lastQuery.sortOrder);
    return new crud_1.QueryResultsModel(result, customersState.totalCount, '');
});
//# sourceMappingURL=customer.selectors.js.map