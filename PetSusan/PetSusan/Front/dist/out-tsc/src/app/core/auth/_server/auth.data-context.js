"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_table_1 = require("./users.table");
var permissions_table_1 = require("./permissions.table");
var roles_table_1 = require("./roles.table");
// Wrapper class
var AuthDataContext = /** @class */ (function () {
    function AuthDataContext() {
    }
    AuthDataContext.users = users_table_1.UsersTable.users;
    AuthDataContext.roles = roles_table_1.RolesTable.roles;
    AuthDataContext.permissions = permissions_table_1.PermissionsTable.permissions;
    return AuthDataContext;
}());
exports.AuthDataContext = AuthDataContext;
//# sourceMappingURL=auth.data-context.js.map