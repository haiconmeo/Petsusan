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
var API_PRODUCTREMARKS_URL = 'api/productRemarks';
// Real REST API
var ProductRemarksService = /** @class */ (function () {
    function ProductRemarksService(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
    }
    // CREATE =>  POST: add a new product remark to the server
    ProductRemarksService.prototype.createProductRemark = function (productRemark) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(API_PRODUCTREMARKS_URL, productRemark, { headers: httpHeaders });
    };
    // READ
    // Server should return filtered remarks by productId
    ProductRemarksService.prototype.getAllProductRemarksByProductId = function (productId) {
        var url = API_PRODUCTREMARKS_URL + '?productId=' + productId;
        return this.http.get(url);
    };
    ProductRemarksService.prototype.getProductRemarkById = function (productRemarkId) {
        return this.http.get(API_PRODUCTREMARKS_URL + ("/" + productRemarkId));
    };
    // Server should return sorted/filtered remarks and merge with items from state
    ProductRemarksService.prototype.findProductRemarks = function (queryParams, productId) {
        var url = API_PRODUCTREMARKS_URL + '/find?productId=' + productId;
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        var body = {
            query: queryParams
        };
        return this.http.post(url, body, { headers: httpHeaders });
    };
    // UPDATE => PUT: update the product remark
    ProductRemarksService.prototype.updateProductRemark = function (productRemark) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.put(API_PRODUCTREMARKS_URL, productRemark, { headers: httpHeaders });
    };
    // DELETE => delete the product remark
    ProductRemarksService.prototype.deleteProductRemark = function (productRemarkId) {
        var url = API_PRODUCTREMARKS_URL + "/" + productRemarkId;
        return this.http.delete(url);
    };
    ProductRemarksService.prototype.deleteProductRemarks = function (ids) {
        if (ids === void 0) { ids = []; }
        var url = API_PRODUCTREMARKS_URL + '/deleteProductRemarks';
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        var body = { productRemarkIdsForDelete: ids };
        return this.http.put(url, body, { headers: httpHeaders });
    };
    ProductRemarksService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, crud_1.HttpUtilsService])
    ], ProductRemarksService);
    return ProductRemarksService;
}());
exports.ProductRemarksService = ProductRemarksService;
//# sourceMappingURL=product-remarks.service.js.map