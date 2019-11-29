"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Login] Action";
    AuthActionTypes["Logout"] = "[Logout] Action";
    AuthActionTypes["Register"] = "[Register] Action";
    AuthActionTypes["UserRequested"] = "[Request User] Action";
    AuthActionTypes["UserLoaded"] = "[Load User] Auth API";
})(AuthActionTypes = exports.AuthActionTypes || (exports.AuthActionTypes = {}));
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Login;
    }
    return Login;
}());
exports.Login = Login;
var Logout = /** @class */ (function () {
    function Logout() {
        this.type = AuthActionTypes.Logout;
    }
    return Logout;
}());
exports.Logout = Logout;
var Register = /** @class */ (function () {
    function Register(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Register;
    }
    return Register;
}());
exports.Register = Register;
var UserRequested = /** @class */ (function () {
    function UserRequested() {
        this.type = AuthActionTypes.UserRequested;
    }
    return UserRequested;
}());
exports.UserRequested = UserRequested;
var UserLoaded = /** @class */ (function () {
    function UserLoaded(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UserLoaded;
    }
    return UserLoaded;
}());
exports.UserLoaded = UserLoaded;
//# sourceMappingURL=auth.actions.js.map