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
// Actions
var auth_actions_1 = require("../_actions/auth.actions");
exports.initialAuthState = {
    loggedIn: false,
    authToken: undefined,
    user: undefined,
    isUserLoaded: false
};
function authReducer(state, action) {
    if (state === void 0) { state = exports.initialAuthState; }
    switch (action.type) {
        case auth_actions_1.AuthActionTypes.Login: {
            var _token = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: _token,
                user: undefined,
                isUserLoaded: false
            };
        }
        case auth_actions_1.AuthActionTypes.Register: {
            var _token = action.payload.authToken;
            return {
                loggedIn: true,
                authToken: _token,
                user: undefined,
                isUserLoaded: false
            };
        }
        case auth_actions_1.AuthActionTypes.Logout:
            return exports.initialAuthState;
        case auth_actions_1.AuthActionTypes.UserLoaded: {
            var _user = action.payload.user;
            return __assign({}, state, { user: _user, isUserLoaded: true });
        }
        default:
            return state;
    }
}
exports.authReducer = authReducer;
//# sourceMappingURL=auth.reducers.js.map