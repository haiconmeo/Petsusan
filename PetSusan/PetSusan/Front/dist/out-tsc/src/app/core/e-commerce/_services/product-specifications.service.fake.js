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
// CRUD
var crud_1 = require("../../_base/crud");
var specification_dictionary_1 = require("../_consts/specification.dictionary");
var API_PRODUCTSPECS_URL = 'api/productSpecs';
// Fake REST API (Mock)
// This code emulates server calls
var ProductSpecificationsService = /** @class */ (function () {
    function ProductSpecificationsService(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
    }
    // CREATE =>  POST: add a new product specification to the server
    ProductSpecificationsService.prototype.createProductSpec = function (productSpec) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(API_PRODUCTSPECS_URL, productSpec, { headers: httpHeaders });
    };
    // READ
    ProductSpecificationsService.prototype.getAllProductSpecsByProductId = function (productId) {
        var prodSpecs = this.http
            .get(API_PRODUCTSPECS_URL)
            .pipe(operators_1.map(function (productSpecifications) {
            return productSpecifications.filter(function (ps) { return ps.carId === productId; });
        }));
        return prodSpecs.pipe(operators_1.map(function (res) {
            var _prodSpecs = res;
            var result = [];
            _prodSpecs.forEach(function (item) {
                var _item = Object.assign({}, item);
                var specName = specification_dictionary_1.SPECIFICATIONS_DICTIONARY[_item.specId];
                if (specName) {
                    _item._specificationName = specName;
                }
                result.push(_item);
            });
            return result;
        }));
    };
    ProductSpecificationsService.prototype.getProductSpecById = function (productSpecId) {
        return this.http.get(API_PRODUCTSPECS_URL + ("/" + productSpecId));
    };
    ProductSpecificationsService.prototype.findProductSpecs = function (queryParams, productId) {
        var _this = this;
        return this.getAllProductSpecsByProductId(productId).pipe(operators_1.mergeMap(function (res) {
            var result = _this.httpUtils.baseFilter(res, queryParams, []);
            return rxjs_1.of(result);
        }));
    };
    // UPDATE => PUT: update the product specification on the server
    ProductSpecificationsService.prototype.updateProductSpec = function (productSpec) {
        return this.http.put(API_PRODUCTSPECS_URL, productSpec, {
            headers: this.httpUtils.getHTTPHeaders()
        });
    };
    // DELETE => delete the product specification from the server
    ProductSpecificationsService.prototype.deleteProductSpec = function (productSpecId) {
        var url = API_PRODUCTSPECS_URL + "/" + productSpecId;
        return this.http.delete(url);
    };
    ProductSpecificationsService.prototype.deleteProductSpecifications = function (ids) {
        if (ids === void 0) { ids = []; }
        var tasks$ = [];
        var length = ids.length;
        // tslint:disable-next-line:prefer-const
        for (var i = 0; i < length; i++) {
            tasks$.push(this.deleteProductSpec(ids[i]));
        }
        return rxjs_1.forkJoin(tasks$);
    };
    ProductSpecificationsService.prototype.getSpecs = function () {
        return specification_dictionary_1.SPECIFICATIONS_DICTIONARY;
    };
    ProductSpecificationsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, crud_1.HttpUtilsService])
    ], ProductSpecificationsService);
    return ProductSpecificationsService;
}());
exports.ProductSpecificationsService = ProductSpecificationsService;
//# sourceMappingURL=product-specifications.service.fake.js.map