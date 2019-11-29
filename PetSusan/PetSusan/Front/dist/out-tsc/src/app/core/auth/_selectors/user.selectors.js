"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NGRX
var store_1 = require("@ngrx/store");
// CRUD
var crud_1 = require("../../_base/crud");
var lodash_1 = require("lodash");
exports.selectUsersState = store_1.createFeatureSelector('users');
exports.selectUserById = function (userId) { return store_1.createSelector(exports.selectUsersState, function (usersState) { return usersState.entities[userId]; }); };
exports.selectUsersPageLoading = store_1.createSelector(exports.selectUsersState, function (usersState) {
    return usersState.listLoading;
});
exports.selectUsersActionLoading = store_1.createSelector(exports.selectUsersState, function (usersState) { return usersState.actionsloading; });
exports.selectLastCreatedUserId = store_1.createSelector(exports.selectUsersState, function (usersState) { return usersState.lastCreatedUserId; });
exports.selectUsersPageLastQuery = store_1.createSelector(exports.selectUsersState, function (usersState) { return usersState.lastQuery; });
exports.selectUsersInStore = store_1.createSelector(exports.selectUsersState, function (usersState) {
    var items = [];
    lodash_1.each(usersState.entities, function (element) {
        items.push(element);
    });
    var httpExtension = new crud_1.HttpExtenstionsModel();
    var result = httpExtension.sortArray(items, usersState.lastQuery.sortField, usersState.lastQuery.sortOrder);
    return new crud_1.QueryResultsModel(result, usersState.totalCount, '');
});
exports.selectUsersShowInitWaitingMessage = store_1.createSelector(exports.selectUsersState, function (usersState) { return usersState.showInitWaitingMessage; });
exports.selectHasUsersInStore = store_1.createSelector(exports.selectUsersState, function (queryResult) {
    if (!queryResult.totalCount) {
        return false;
    }
    return true;
});
//# sourceMappingURL=user.selectors.js.map