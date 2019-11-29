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
// RxJS
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Lodash
var lodash_1 = require("lodash");
// CRUD
var crud_1 = require("../../_base/crud");
var API_CUSTOMERS_URL = 'api/customers';
// Fake REST API (Mock)
// This code emulates server calls
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
    CustomersService.prototype.findCustomers = function (queryParams) {
        var _this = this;
        // This code imitates server calls
        var url = API_CUSTOMERS_URL;
        return this.http.get(API_CUSTOMERS_URL).pipe(operators_1.mergeMap(function (res) {
            var result = _this.httpUtils.baseFilter(res, queryParams, ['status', 'type']);
            return rxjs_1.of(result);
        }));
    };
    // UPDATE => PUT: update the customer on the server
    CustomersService.prototype.updateCustomer = function (customer) {
        var httpHeader = this.httpUtils.getHTTPHeaders();
        return this.http.put(API_CUSTOMERS_URL, customer, { headers: httpHeader });
    };
    // UPDATE Status
    CustomersService.prototype.updateStatusForCustomer = function (customers, status) {
        var _this = this;
        var tasks$ = [];
        lodash_1.each(customers, function (element) {
            var _customer = Object.assign({}, element);
            _customer.status = status;
            tasks$.push(_this.updateCustomer(_customer));
        });
        return rxjs_1.forkJoin(tasks$);
    };
    // DELETE => delete the customer from the server
    CustomersService.prototype.deleteCustomer = function (customerId) {
        var url = API_CUSTOMERS_URL + "/" + customerId;
        return this.http.delete(url);
    };
    CustomersService.prototype.deleteCustomers = function (ids) {
        if (ids === void 0) { ids = []; }
        var tasks$ = [];
        var length = ids.length;
        // tslint:disable-next-line:prefer-const
        for (var i = 0; i < length; i++) {
            tasks$.push(this.deleteCustomer(ids[i]));
        }
        return rxjs_1.forkJoin(tasks$);
    };
    CustomersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, crud_1.HttpUtilsService])
    ], CustomersService);
    return CustomersService;
}());
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.fake.js.map