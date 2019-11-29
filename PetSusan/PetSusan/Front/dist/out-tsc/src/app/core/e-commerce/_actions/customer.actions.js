"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerActionTypes;
(function (CustomerActionTypes) {
    CustomerActionTypes["CustomerOnServerCreated"] = "[Edit Customer Dialog] Customer On Server Created";
    CustomerActionTypes["CustomerCreated"] = "[Edit Customer Dialog] Customer Created";
    CustomerActionTypes["CustomerUpdated"] = "[Edit Customer Dialog] Customer Updated";
    CustomerActionTypes["CustomersStatusUpdated"] = "[Customer List Page] Customers Status Updated";
    CustomerActionTypes["OneCustomerDeleted"] = "[Customers List Page] One Customer Deleted";
    CustomerActionTypes["ManyCustomersDeleted"] = "[Customers List Page] Many Customer Deleted";
    CustomerActionTypes["CustomersPageRequested"] = "[Customers List Page] Customers Page Requested";
    CustomerActionTypes["CustomersPageLoaded"] = "[Customers API] Customers Page Loaded";
    CustomerActionTypes["CustomersPageCancelled"] = "[Customers API] Customers Page Cancelled";
    CustomerActionTypes["CustomersPageToggleLoading"] = "[Customers] Customers Page Toggle Loading";
    CustomerActionTypes["CustomerActionToggleLoading"] = "[Customers] Customers Action Toggle Loading";
})(CustomerActionTypes = exports.CustomerActionTypes || (exports.CustomerActionTypes = {}));
var CustomerOnServerCreated = /** @class */ (function () {
    function CustomerOnServerCreated(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomerOnServerCreated;
    }
    return CustomerOnServerCreated;
}());
exports.CustomerOnServerCreated = CustomerOnServerCreated;
var CustomerCreated = /** @class */ (function () {
    function CustomerCreated(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomerCreated;
    }
    return CustomerCreated;
}());
exports.CustomerCreated = CustomerCreated;
var CustomerUpdated = /** @class */ (function () {
    function CustomerUpdated(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomerUpdated;
    }
    return CustomerUpdated;
}());
exports.CustomerUpdated = CustomerUpdated;
var CustomersStatusUpdated = /** @class */ (function () {
    function CustomersStatusUpdated(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomersStatusUpdated;
    }
    return CustomersStatusUpdated;
}());
exports.CustomersStatusUpdated = CustomersStatusUpdated;
var OneCustomerDeleted = /** @class */ (function () {
    function OneCustomerDeleted(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.OneCustomerDeleted;
    }
    return OneCustomerDeleted;
}());
exports.OneCustomerDeleted = OneCustomerDeleted;
var ManyCustomersDeleted = /** @class */ (function () {
    function ManyCustomersDeleted(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.ManyCustomersDeleted;
    }
    return ManyCustomersDeleted;
}());
exports.ManyCustomersDeleted = ManyCustomersDeleted;
var CustomersPageRequested = /** @class */ (function () {
    function CustomersPageRequested(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomersPageRequested;
    }
    return CustomersPageRequested;
}());
exports.CustomersPageRequested = CustomersPageRequested;
var CustomersPageLoaded = /** @class */ (function () {
    function CustomersPageLoaded(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomersPageLoaded;
    }
    return CustomersPageLoaded;
}());
exports.CustomersPageLoaded = CustomersPageLoaded;
var CustomersPageCancelled = /** @class */ (function () {
    function CustomersPageCancelled() {
        this.type = CustomerActionTypes.CustomersPageCancelled;
    }
    return CustomersPageCancelled;
}());
exports.CustomersPageCancelled = CustomersPageCancelled;
var CustomersPageToggleLoading = /** @class */ (function () {
    function CustomersPageToggleLoading(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomersPageToggleLoading;
    }
    return CustomersPageToggleLoading;
}());
exports.CustomersPageToggleLoading = CustomersPageToggleLoading;
var CustomerActionToggleLoading = /** @class */ (function () {
    function CustomerActionToggleLoading(payload) {
        this.payload = payload;
        this.type = CustomerActionTypes.CustomerActionToggleLoading;
    }
    return CustomerActionToggleLoading;
}());
exports.CustomerActionToggleLoading = CustomerActionToggleLoading;
//# sourceMappingURL=customer.actions.js.map