"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RolesTable = /** @class */ (function () {
    function RolesTable() {
    }
    RolesTable.roles = [
        {
            id: 1,
            title: 'Administrator',
            isCoreRole: true,
            permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            title: 'Manager',
            isCoreRole: false,
            permissions: [3, 4, 10]
        },
        {
            id: 3,
            title: 'Guest',
            isCoreRole: false,
            permissions: []
        }
    ];
    return RolesTable;
}());
exports.RolesTable = RolesTable;
//# sourceMappingURL=roles.table.js.map