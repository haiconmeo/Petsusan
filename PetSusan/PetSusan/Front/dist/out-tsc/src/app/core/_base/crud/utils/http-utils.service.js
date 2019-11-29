"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var http_extentsions_model_1 = require("../../crud/models/http-extentsions-model");
var HttpUtilsService = /** @class */ (function () {
    function HttpUtilsService() {
    }
    /**
     * Prepare query http params
     * @param queryParams: QueryParamsModel
     */
    HttpUtilsService.prototype.getFindHTTPParams = function (queryParams) {
        var params = new http_1.HttpParams()
            .set('lastNamefilter', queryParams.filter)
            .set('sortOrder', queryParams.sortOrder)
            .set('sortField', queryParams.sortField)
            .set('pageNumber', queryParams.pageNumber.toString())
            .set('pageSize', queryParams.pageSize.toString());
        return params;
    };
    /**
     * get standard content-type
     */
    HttpUtilsService.prototype.getHTTPHeaders = function () {
        var result = new http_1.HttpHeaders();
        result.set('Content-Type', 'application/json');
        return result;
    };
    HttpUtilsService.prototype.baseFilter = function (_entities, _queryParams, _filtrationFields) {
        if (_filtrationFields === void 0) { _filtrationFields = []; }
        var httpExtention = new http_extentsions_model_1.HttpExtenstionsModel();
        return httpExtention.baseFilter(_entities, _queryParams, _filtrationFields);
    };
    HttpUtilsService.prototype.sortArray = function (_incomingArray, _sortField, _sortOrder) {
        if (_sortField === void 0) { _sortField = ''; }
        if (_sortOrder === void 0) { _sortOrder = 'asc'; }
        var httpExtention = new http_extentsions_model_1.HttpExtenstionsModel();
        return httpExtention.sortArray(_incomingArray, _sortField, _sortOrder);
    };
    HttpUtilsService.prototype.searchInArray = function (_incomingArray, _queryObj, _filtrationFields) {
        if (_filtrationFields === void 0) { _filtrationFields = []; }
        var httpExtention = new http_extentsions_model_1.HttpExtenstionsModel();
        return httpExtention.searchInArray(_incomingArray, _queryObj, _filtrationFields);
    };
    HttpUtilsService = __decorate([
        core_1.Injectable()
    ], HttpUtilsService);
    return HttpUtilsService;
}());
exports.HttpUtilsService = HttpUtilsService;
//# sourceMappingURL=http-utils.service.js.map