"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
// NGRX
var store_1 = require("@ngrx/store");
var entity_1 = require("@ngrx/entity");
// Actions
var customer_actions_1 = require("../_actions/customer.actions");
var crud_1 = require("../../_base/crud");
exports.adapter = entity_1.createEntityAdapter();
exports.initialCustomersState = exports.adapter.getInitialState({
    customerForEdit: null,
    listLoading: false,
    actionsloading: false,
    totalCount: 0,
    lastCreatedCustomerId: undefined,
    lastQuery: new crud_1.QueryParamsModel({}),
    showInitWaitingMessage: true
});
function customersReducer(state, action) {
    if (state === void 0) { state = exports.initialCustomersState; }
    switch (action.type) {
        case customer_actions_1.CustomerActionTypes.CustomersPageToggleLoading: {
            return __assign({}, state, { listLoading: action.payload.isLoading, lastCreatedCustomerId: undefined });
        }
        case customer_actions_1.CustomerActionTypes.CustomerActionToggleLoading: {
            return __assign({}, state, { actionsloading: action.payload.isLoading });
        }
        case customer_actions_1.CustomerActionTypes.CustomerOnServerCreated: return __assign({}, state);
        case customer_actions_1.CustomerActionTypes.CustomerCreated: return exports.adapter.addOne(action.payload.customer, __assign({}, state, { lastCreatedCustomerId: action.payload.customer.id }));
        case customer_actions_1.CustomerActionTypes.CustomerUpdated: return exports.adapter.updateOne(action.payload.partialCustomer, state);
        case customer_actions_1.CustomerActionTypes.CustomersStatusUpdated: {
            var _partialCustomers = [];
            // tslint:disable-next-line:prefer-const
            for (var i = 0; i < action.payload.customers.length; i++) {
                _partialCustomers.push({
                    id: action.payload.customers[i].id,
                    changes: {
                        status: action.payload.status
                    }
                });
            }
            return exports.adapter.updateMany(_partialCustomers, state);
        }
        case customer_actions_1.CustomerActionTypes.OneCustomerDeleted: return exports.adapter.removeOne(action.payload.id, state);
        case customer_actions_1.CustomerActionTypes.ManyCustomersDeleted: return exports.adapter.removeMany(action.payload.ids, state);
        case customer_actions_1.CustomerActionTypes.CustomersPageCancelled: {
            return __assign({}, state, { listLoading: false, lastQuery: new crud_1.QueryParamsModel({}) });
        }
        case customer_actions_1.CustomerActionTypes.CustomersPageLoaded: {
            return exports.adapter.addMany(action.payload.customers, __assign({}, exports.initialCustomersState, { totalCount: action.payload.totalCount, listLoading: false, lastQuery: action.payload.page, showInitWaitingMessage: false }));
        }
        default: return state;
    }
}
exports.customersReducer = customersReducer;
exports.getCustomerState = store_1.createFeatureSelector('customers');
exports.selectAll = (_a = exports.adapter.getSelectors(), _a.selectAll), exports.selectEntities = _a.selectEntities, exports.selectIds = _a.selectIds, exports.selectTotal = _a.selectTotal;
//# sourceMappingURL=customer.reducers.js.map