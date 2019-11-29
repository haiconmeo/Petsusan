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
var http_1 = require("@angular/common/http");
// CRUD
var crud_1 = require("../../_base/crud");
var API_CUSTOMERS_URL = 'api/customers';
var CustomersService = /** @class */ (function () {
    function CustomersService(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
    }
    // CREATE =>  POST: add a new customer to the server
    CustomersService.prototype.createCustomer = function (customer) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(API_CUSTOMERS_URL, customer, { headers: httpHeaders });
    };
    // READ
    CustomersService.prototype.getAllCustomers = function () {
        return this.http.get(API_CUSTOMERS_URL);
    };
    CustomersService.prototype.getCustomerById = function (customerId) {
        return this.http.get(API_CUSTOMERS_URL + ("/" + customerId));
    };
    // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
    // items => filtered/sorted result
    // Server should return filtered/sorted result
    CustomersService.prototype.findCustomers = function (queryParams) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        var httpParams = this.httpUtils.getFindHTTPParams(queryParams);
        var url = API_CUSTOMERS_URL + '/find';
        return this.http.get(url, {
            headers: httpHeaders,
            params: httpParams
        });
    };
    // UPDATE => PUT: update the customer on the server
    CustomersService.prototype.updateCustomer = function (customer) {
        var httpHeader = this.httpUtils.getHTTPHeaders();
        return this.http.put(API_CUSTOMERS_URL, customer, { headers: httpHeader });
    };
    // UPDATE Status
    CustomersService.prototype.updateStatusForCustomer = function (customers, status) {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        var body = {
            customersForUpdate: customers,
            newStatus: status
        };
        var url = API_CUSTOMERS_URL + '/updateStatus';
        return this.http.put(url, body, { headers: httpHeaders });
    };
    // DELETE => delete the customer from the server
    CustomersService.prototype.deleteCustomer = function (customerId) {
        var url = API_CUSTOMERS_URL + "/" + customerId;
        return this.http.delete(url);
    };
    CustomersService.prototype.deleteCustomers = function (ids) {
        if (ids === void 0) { ids = []; }
        var url = API_CUSTOMERS_URL + '/deleteCustomers';
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        var body = { customerIdsForDelete: ids };
        return this.http.put(url, body, { headers: httpHeaders });
    };
    CustomersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, crud_1.HttpUtilsService])
    ], CustomersService);
    return CustomersService;
}());
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map