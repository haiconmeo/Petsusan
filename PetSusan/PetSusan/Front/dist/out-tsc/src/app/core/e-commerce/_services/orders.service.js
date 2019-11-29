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
var API_ORDERS_URL = 'api/orders';
var OrdersService = /** @class */ (function () {
    function OrdersService(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
        this.httpOptions = this.httpUtils.getHTTPHeaders();
    }
    OrdersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            crud_1.HttpUtilsService])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map