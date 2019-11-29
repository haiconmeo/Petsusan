"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
// NGRX
var entity_1 = require("@ngrx/entity");
// Actions
var role_actions_1 = require("../_actions/role.actions");
var crud_1 = require("../../_base/crud");
exports.adapter = entity_1.createEntityAdapter();
exports.initialRolesState = exports.adapter.getInitialState({
    isAllRolesLoaded: false,
    queryRowsCount: 0,
    queryResult: [],
    lastCreatedRoleId: undefined,
    listLoading: false,
    actionsloading: false,
    lastQuery: new crud_1.QueryParamsModel({}),
    showInitWaitingMessage: true
});
function rolesReducer(state, action) {
    if (state === void 0) { state = exports.initialRolesState; }
    switch (action.type) {
        case role_actions_1.RoleActionTypes.RolesPageToggleLoading: return __assign({}, state, { listLoading: action.payload.isLoading, lastCreatedRoleId: undefined });
        case role_actions_1.RoleActionTypes.RolesActionToggleLoading: return __assign({}, state, { actionsloading: action.payload.isLoading });
        case role_actions_1.RoleActionTypes.RoleOnServerCreated: return __assign({}, state);
        case role_actions_1.RoleActionTypes.RoleCreated: return exports.adapter.addOne(action.payload.role, __assign({}, state, { lastCreatedRoleId: action.payload.role.id }));
        case role_actions_1.RoleActionTypes.RoleUpdated: return exports.adapter.updateOne(action.payload.partialrole, state);
        case role_actions_1.RoleActionTypes.RoleDeleted: return exports.adapter.removeOne(action.payload.id, state);
        case role_actions_1.RoleActionTypes.AllRolesLoaded: return exports.adapter.addAll(action.payload.roles, __assign({}, state, { isAllRolesLoaded: true }));
        case role_actions_1.RoleActionTypes.RolesPageCancelled: return __assign({}, state, { listLoading: false, queryRowsCount: 0, queryResult: [], lastQuery: new crud_1.QueryParamsModel({}) });
        case role_actions_1.RoleActionTypes.RolesPageLoaded: return exports.adapter.addMany(action.payload.roles, __assign({}, exports.initialRolesState, { listLoading: false, queryRowsCount: action.payload.totalCount, queryResult: action.payload.roles, lastQuery: action.payload.page, showInitWaitingMessage: false }));
        default: return state;
    }
}
exports.rolesReducer = rolesReducer;
exports.selectAll = (_a = exports.adapter.getSelectors(), _a.selectAll), exports.selectEntities = _a.selectEntities, exports.selectIds = _a.selectIds, exports.selectTotal = _a.selectTotal;
//# sourceMappingURL=role.reducers.js.map