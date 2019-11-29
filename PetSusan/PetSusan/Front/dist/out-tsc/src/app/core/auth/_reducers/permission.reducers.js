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
var store_1 = require("@ngrx/store");
// Actions
var permission_actions_1 = require("../_actions/permission.actions");
exports.adapter = entity_1.createEntityAdapter();
exports.initialPermissionsState = exports.adapter.getInitialState({
    _isAllPermissionsLoaded: false
});
function permissionsReducer(state, action) {
    if (state === void 0) { state = exports.initialPermissionsState; }
    switch (action.type) {
        case permission_actions_1.PermissionActionTypes.AllPermissionsRequested:
            return __assign({}, state, { _isAllPermissionsLoaded: false });
        case permission_actions_1.PermissionActionTypes.AllPermissionsLoaded:
            return exports.adapter.addAll(action.payload.permissions, __assign({}, state, { _isAllPermissionsLoaded: true }));
        default:
            return state;
    }
}
exports.permissionsReducer = permissionsReducer;
exports.getRoleState = store_1.createFeatureSelector('permissions');
exports.selectAll = (_a = exports.adapter.getSelectors(), _a.selectAll), exports.selectEntities = _a.selectEntities, exports.selectIds = _a.selectIds, exports.selectTotal = _a.selectTotal;
//# sourceMappingURL=permission.reducers.js.map