"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["AllUsersRequested"] = "[Users Module] All Users Requested";
    UserActionTypes["AllUsersLoaded"] = "[Users API] All Users Loaded";
    UserActionTypes["UserOnServerCreated"] = "[Edit User Component] User On Server Created";
    UserActionTypes["UserCreated"] = "[Edit User Dialog] User Created";
    UserActionTypes["UserUpdated"] = "[Edit User Dialog] User Updated";
    UserActionTypes["UserDeleted"] = "[Users List Page] User Deleted";
    UserActionTypes["UsersPageRequested"] = "[Users List Page] Users Page Requested";
    UserActionTypes["UsersPageLoaded"] = "[Users API] Users Page Loaded";
    UserActionTypes["UsersPageCancelled"] = "[Users API] Users Page Cancelled";
    UserActionTypes["UsersPageToggleLoading"] = "[Users] Users Page Toggle Loading";
    UserActionTypes["UsersActionToggleLoading"] = "[Users] Users Action Toggle Loading";
})(UserActionTypes = exports.UserActionTypes || (exports.UserActionTypes = {}));
var UserOnServerCreated = /** @class */ (function () {
    function UserOnServerCreated(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserOnServerCreated;
    }
    return UserOnServerCreated;
}());
exports.UserOnServerCreated = UserOnServerCreated;
var UserCreated = /** @class */ (function () {
    function UserCreated(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserCreated;
    }
    return UserCreated;
}());
exports.UserCreated = UserCreated;
var UserUpdated = /** @class */ (function () {
    function UserUpdated(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserUpdated;
    }
    return UserUpdated;
}());
exports.UserUpdated = UserUpdated;
var UserDeleted = /** @class */ (function () {
    function UserDeleted(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UserDeleted;
    }
    return UserDeleted;
}());
exports.UserDeleted = UserDeleted;
var UsersPageRequested = /** @class */ (function () {
    function UsersPageRequested(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersPageRequested;
    }
    return UsersPageRequested;
}());
exports.UsersPageRequested = UsersPageRequested;
var UsersPageLoaded = /** @class */ (function () {
    function UsersPageLoaded(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersPageLoaded;
    }
    return UsersPageLoaded;
}());
exports.UsersPageLoaded = UsersPageLoaded;
var UsersPageCancelled = /** @class */ (function () {
    function UsersPageCancelled() {
        this.type = UserActionTypes.UsersPageCancelled;
    }
    return UsersPageCancelled;
}());
exports.UsersPageCancelled = UsersPageCancelled;
var UsersPageToggleLoading = /** @class */ (function () {
    function UsersPageToggleLoading(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersPageToggleLoading;
    }
    return UsersPageToggleLoading;
}());
exports.UsersPageToggleLoading = UsersPageToggleLoading;
var UsersActionToggleLoading = /** @class */ (function () {
    function UsersActionToggleLoading(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UsersActionToggleLoading;
    }
    return UsersActionToggleLoading;
}());
exports.UsersActionToggleLoading = UsersActionToggleLoading;
//# sourceMappingURL=user.actions.js.map