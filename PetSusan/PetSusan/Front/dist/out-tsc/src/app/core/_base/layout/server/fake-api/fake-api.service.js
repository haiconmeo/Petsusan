"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
// Auth
var auth_1 = require("../../../../auth");
// ECommerce
var e_commerce_1 = require("../../../../e-commerce");
// Models
var cars_1 = require("./fake-db/cars");
var FakeApiService = /** @class */ (function () {
    /**
     * Service Constructore
     */
    function FakeApiService() {
    }
    /**
     * Create Fake DB and API
     */
    FakeApiService.prototype.createDb = function () {
        // tslint:disable-next-line:class-name
        var db = {
            // auth module
            users: auth_1.AuthDataContext.users,
            roles: auth_1.AuthDataContext.roles,
            permissions: auth_1.AuthDataContext.permissions,
            // e-commerce
            // customers
            customers: e_commerce_1.ECommerceDataContext.customers,
            // products
            products: e_commerce_1.ECommerceDataContext.cars,
            productRemarks: e_commerce_1.ECommerceDataContext.remarks,
            productSpecs: e_commerce_1.ECommerceDataContext.carSpecs,
            // orders
            orders: e_commerce_1.ECommerceDataContext.orders,
            // data-table
            cars: cars_1.CarsDb.cars
        };
        return db;
    };
    FakeApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FakeApiService);
    return FakeApiService;
}());
exports.FakeApiService = FakeApiService;
//# sourceMappingURL=fake-api.service.js.map