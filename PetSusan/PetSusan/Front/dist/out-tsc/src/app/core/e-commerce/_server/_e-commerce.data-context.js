"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customers_table_1 = require("./customers.table");
var cars_table_1 = require("./cars.table");
var remarks_table_1 = require("./remarks.table");
var car_specifications_table_1 = require("./car-specifications.table");
var orders_table_1 = require("./orders.table");
// Wrapper class
var ECommerceDataContext = /** @class */ (function () {
    function ECommerceDataContext() {
    }
    ECommerceDataContext.customers = customers_table_1.CustomersTable.customers;
    ECommerceDataContext.cars = cars_table_1.CarsTable.cars;
    // e-commerce car remarks
    // one => many relations
    ECommerceDataContext.remarks = remarks_table_1.RemarksTable.remarks;
    // e-commerce car specifications
    // one => many relations
    ECommerceDataContext.carSpecs = car_specifications_table_1.CarSpecificationsTable.carSpecifications;
    ECommerceDataContext.orders = orders_table_1.OrdersTable.orders;
    return ECommerceDataContext;
}());
exports.ECommerceDataContext = ECommerceDataContext;
//# sourceMappingURL=_e-commerce.data-context.js.map