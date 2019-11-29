"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NGRX
var store_1 = require("@ngrx/store");
// CRUD
var crud_1 = require("../../_base/crud");
var fromRole = require("../_reducers/role.reducers");
var lodash_1 = require("lodash");
exports.selectRolesState = store_1.createFeatureSelector('roles');
exports.selectRoleById = function (roleId) { return store_1.createSelector(exports.selectRolesState, function (rolesState) { return rolesState.entities[roleId]; }); };
exports.selectAllRoles = store_1.createSelector(exports.selectRolesState, fromRole.selectAll);
exports.selectAllRolesIds = store_1.createSelector(exports.selectRolesState, fromRole.selectIds);
exports.allRolesLoaded = store_1.createSelector(exports.selectRolesState, function (rolesState) { return rolesState.isAllRolesLoaded; });
exports.selectRolesPageLoading = store_1.createSelector(exports.selectRolesState, function (rolesState) { return rolesState.listLoading; });
exports.selectRolesActionLoading = store_1.createSelector(exports.selectRolesState, function (rolesState) { return rolesState.actionsloading; });
exports.selectLastCreatedRoleId = store_1.createSelector(exports.selectRolesState, function (rolesState) { return rolesState.lastCreatedRoleId; });
exports.selectRolesShowInitWaitingMessage = store_1.createSelector(exports.selectRolesState, function (rolesState) { return rolesState.showInitWaitingMessage; });
exports.selectQueryResult = store_1.createSelector(exports.selectRolesState, function (rolesState) {
    var items = [];
    lodash_1.each(rolesState.entities, function (element) {
        items.push(element);
    });
    var httpExtension = new crud_1.HttpExtenstionsModel();
    var result = httpExtension.sortArray(items, rolesState.lastQuery.sortField, rolesState.lastQuery.sortOrder);
    return new crud_1.QueryResultsModel(rolesState.queryResult, rolesState.queryRowsCount);
});
//# sourceMappingURL=role.selectors.js.map