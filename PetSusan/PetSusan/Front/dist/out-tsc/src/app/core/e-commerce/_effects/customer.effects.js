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
var rxjs_1 = require("rxjs");
// Angular
var core_1 = require("@angular/core");
// RxJS
var operators_1 = require("rxjs/operators");
// NGRX
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
// Services
var _services_1 = require("../_services/");
// Actions
var customer_actions_1 = require("../_actions/customer.actions");
var rxjs_2 = require("rxjs");
var CustomerEffects = /** @class */ (function () {
    function CustomerEffects(actions$, customersService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.customersService = customersService;
        this.store = store;
        this.showPageLoadingDistpatcher = new customer_actions_1.CustomersPageToggleLoading({ isLoading: true });
        this.showActionLoadingDistpatcher = new customer_actions_1.CustomerActionToggleLoading({ isLoading: true });
        this.hideActionLoadingDistpatcher = new customer_actions_1.CustomerActionToggleLoading({ isLoading: false });
        this.loadCustomersPage$ = this.actions$.pipe(effects_1.ofType(customer_actions_1.CustomerActionTypes.CustomersPageRequested), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showPageLoadingDistpatcher);
            var requestToServer = _this.customersService.findCustomers(payload.page);
            var lastQuery = rxjs_2.of(payload.page);
            return rxjs_1.forkJoin(requestToServer, lastQuery);
        }), operators_1.map(function (response) {
            var result = response[0];
            var lastQuery = response[1];
            var pageLoadedDispatch = new customer_actions_1.CustomersPageLoaded({
                customers: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
            return pageLoadedDispatch;
        }));
        this.deleteCustomer$ = this.actions$
            .pipe(effects_1.ofType(customer_actions_1.CustomerActionTypes.OneCustomerDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.customersService.deleteCustomer(payload.id);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.deleteCustomers$ = this.actions$
            .pipe(effects_1.ofType(customer_actions_1.CustomerActionTypes.ManyCustomersDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.customersService.deleteCustomers(payload.ids);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.updateCustomer$ = this.actions$
            .pipe(effects_1.ofType(customer_actions_1.CustomerActionTypes.CustomerUpdated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.customersService.updateCustomer(payload.customer);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.updateCustomersStatus$ = this.actions$
            .pipe(effects_1.ofType(customer_actions_1.CustomerActionTypes.CustomersStatusUpdated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.customersService.updateStatusForCustomer(payload.customers, payload.status);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.createCustomer$ = this.actions$
            .pipe(effects_1.ofType(customer_actions_1.CustomerActionTypes.CustomerOnServerCreated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.customersService.createCustomer(payload.customer).pipe(operators_1.tap(function (res) {
                _this.store.dispatch(new customer_actions_1.CustomerCreated({ customer: res }));
            }));
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CustomerEffects.prototype, "loadCustomersPage$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CustomerEffects.prototype, "deleteCustomer$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CustomerEffects.prototype, "deleteCustomers$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CustomerEffects.prototype, "updateCustomer$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CustomerEffects.prototype, "updateCustomersStatus$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CustomerEffects.prototype, "createCustomer$", void 0);
    CustomerEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, _services_1.CustomersService, store_1.Store])
    ], CustomerEffects);
    return CustomerEffects;
}());
exports.CustomerEffects = CustomerEffects;
//# sourceMappingURL=customer.effects.js.map