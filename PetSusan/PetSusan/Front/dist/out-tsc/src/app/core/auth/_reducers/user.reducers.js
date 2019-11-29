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
var store_1 = require("@ngrx/store");
var entity_1 = require("@ngrx/entity");
// Actions
var user_actions_1 = require("../_actions/user.actions");
// CRUD
var crud_1 = require("../../_base/crud");
exports.adapter = entity_1.createEntityAdapter();
exports.initialUsersState = exports.adapter.getInitialState({
    listLoading: false,
    actionsloading: false,
    totalCount: 0,
    lastQuery: new crud_1.QueryParamsModel({}),
    lastCreatedUserId: undefined,
    showInitWaitingMessage: true
});
function usersReducer(state, action) {
    if (state === void 0) { state = exports.initialUsersState; }
    switch (action.type) {
        case user_actions_1.UserActionTypes.UsersPageToggleLoading: return __assign({}, state, { listLoading: action.payload.isLoading, lastCreatedUserId: undefined });
        case user_actions_1.UserActionTypes.UsersActionToggleLoading: return __assign({}, state, { actionsloading: action.payload.isLoading });
        case user_actions_1.UserActionTypes.UserOnServerCreated: return __assign({}, state);
        case user_actions_1.UserActionTypes.UserCreated: return exports.adapter.addOne(action.payload.user, __assign({}, state, { lastCreatedUserId: action.payload.user.id }));
        case user_actions_1.UserActionTypes.UserUpdated: return exports.adapter.updateOne(action.payload.partialUser, state);
        case user_actions_1.UserActionTypes.UserDeleted: return exports.adapter.removeOne(action.payload.id, state);
        case user_actions_1.UserActionTypes.UsersPageCancelled: return __assign({}, state, { listLoading: false, lastQuery: new crud_1.QueryParamsModel({}) });
        case user_actions_1.UserActionTypes.UsersPageLoaded: {
            return exports.adapter.addMany(action.payload.users, __assign({}, exports.initialUsersState, { totalCount: action.payload.totalCount, lastQuery: action.payload.page, listLoading: false, showInitWaitingMessage: false }));
        }
        default: return state;
    }
}
exports.usersReducer = usersReducer;
exports.getUserState = store_1.createFeatureSelector('users');
exports.selectAll = (_a = exports.adapter.getSelectors(), _a.selectAll), exports.selectEntities = _a.selectEntities, exports.selectIds = _a.selectIds, exports.selectTotal = _a.selectTotal;
//# sourceMappingURL=user.reducers.js.map