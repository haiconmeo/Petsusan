"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermissionActionTypes;
(function (PermissionActionTypes) {
    PermissionActionTypes["AllPermissionsRequested"] = "[Init] All Permissions Requested";
    PermissionActionTypes["AllPermissionsLoaded"] = "[Init] All Permissions Loaded";
})(PermissionActionTypes = exports.PermissionActionTypes || (exports.PermissionActionTypes = {}));
var AllPermissionsRequested = /** @class */ (function () {
    function AllPermissionsRequested() {
        this.type = PermissionActionTypes.AllPermissionsRequested;
    }
    return AllPermissionsRequested;
}());
exports.AllPermissionsRequested = AllPermissionsRequested;
var AllPermissionsLoaded = /** @class */ (function () {
    function AllPermissionsLoaded(payload) {
        this.payload = payload;
        this.type = PermissionActionTypes.AllPermissionsLoaded;
    }
    return AllPermissionsLoaded;
}());
exports.AllPermissionsLoaded = AllPermissionsLoaded;
//# sourceMappingURL=permission.actions.js.map