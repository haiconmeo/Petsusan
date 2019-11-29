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
// CRUD
var crud_1 = require("../../_base/crud");
var API_PRODUCTS_URL = 'api/products';
// Real REST API
var ProductsService = /** @class */ (function () {
    function ProductsService(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
        this.lastFilter$ = new rxjs_1.BehaviorSubject(new crud_1.QueryParamsModel({}, 'asc', '', 0, 10));
    }
    // CREATE =>  POST: add a new product to the server
    ProductsService.prototype.createProduct = function (product) {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(API_PRODUCTS_URL, product, { headers: httpHeaders });
    };
    // READ
    ProductsService.prototype.getAllProducts = function () {
        return this.http.get(API_PRODUCTS_URL);
    };
    ProductsService.prototype.getProductById = function (productId) {
        return this.http.get(API_PRODUCTS_URL + ("/" + productId));
    };
    // Server should return filtered/sorted result
    ProductsService.prototype.findProducts = function (queryParams) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        var httpParams = this.httpUtils.getFindHTTPParams(queryParams);
        var url = API_PRODUCTS_URL + '/find';
        return this.http.get(url, {
            headers: httpHeaders,
            params: httpParams
        });
    };
    // UPDATE => PUT: update the product on the server
    ProductsService.prototype.updateProduct = function (product) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.put(API_PRODUCTS_URL, product, { headers: httpHeaders });
    };
    // UPDATE Status
    // Comment this when you start work with real server
    // This code imitates server calls
    ProductsService.prototype.updateStatusForProduct = function (products, status) {
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        var body = {
            productsForUpdate: products,
            newStatus: status
        };
        var url = API_PRODUCTS_URL + '/updateStatus';
        return this.http.put(url, body, { headers: httpHeaders });
    };
    // DELETE => delete the product from the server
    ProductsService.prototype.deleteProduct = function (productId) {
        var url = API_PRODUCTS_URL + "/" + productId;
        return this.http.delete(url);
    };
    ProductsService.prototype.deleteProducts = function (ids) {
        if (ids === void 0) { ids = []; }
        var url = API_PRODUCTS_URL + '/delete';
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        var body = { prdocutIdsForDelete: ids };
        return this.http.put(url, body, { headers: httpHeaders });
    };
    ProductsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            crud_1.HttpUtilsService])
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map