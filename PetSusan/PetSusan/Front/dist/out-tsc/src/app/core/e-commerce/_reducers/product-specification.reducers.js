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
var product_specification_actions_1 = require("../_actions/product-specification.actions");
var crud_1 = require("../../_base/crud");
exports.adapter = entity_1.createEntityAdapter();
exports.initialProductSpecificationsState = exports.adapter.getInitialState({
    loading: false,
    totalCount: 0,
    productId: undefined,
    lastCreatedProductSpecificationId: undefined,
    lastQuery: new crud_1.QueryParamsModel({}),
    showInitWaitingMessage: true
});
function productSpecificationsReducer(state, action) {
    if (state === void 0) { state = exports.initialProductSpecificationsState; }
    switch (action.type) {
        case product_specification_actions_1.ProductSpecificationActionTypes.ProductSpecificationsPageToggleLoading:
            return __assign({}, state, { loading: action.payload.isLoading, lastCreatedProductSpecificationId: undefined });
        case product_specification_actions_1.ProductSpecificationActionTypes.ProductSpecificationOnServerCreated:
            return __assign({}, state, { loading: true });
        case product_specification_actions_1.ProductSpecificationActionTypes.ProductSpecificationCreated:
            return exports.adapter.addOne(action.payload.productSpecification, __assign({}, state, { lastCreatedProductSpecificationId: action.payload.productSpecification.id }));
        case product_specification_actions_1.ProductSpecificationActionTypes.ProductSpecificationUpdated:
            return exports.adapter.updateOne(action.payload.partialProductSpecification, state);
        case product_specification_actions_1.ProductSpecificationActionTypes.OneProductSpecificationDeleted:
            return exports.adapter.removeOne(action.payload.id, state);
        case product_specification_actions_1.ProductSpecificationActionTypes.ManyProductSpecificationsDeleted:
            return exports.adapter.removeMany(action.payload.ids, state);
        case product_specification_actions_1.ProductSpecificationActionTypes.ProductSpecificationsPageCancelled:
            return __assign({}, state, { totalCount: 0, loading: false, productId: undefined, lastQuery: new crud_1.QueryParamsModel({}) });
        case product_specification_actions_1.ProductSpecificationActionTypes.ProductSpecificationsPageRequested:
            return __assign({}, state, { totalCount: 0, loading: true, productId: action.payload.productId, lastQuery: action.payload.page });
        case product_specification_actions_1.ProductSpecificationActionTypes.ProductSpecificationsPageLoaded:
            return exports.adapter.addMany(action.payload.productSpecifications, __assign({}, exports.initialProductSpecificationsState, { totalCount: action.payload.totalCount, loading: false, productId: state.productId, lastQuery: state.lastQuery, showInitWaitingMessage: false }));
        default:
            return state;
    }
}
exports.productSpecificationsReducer = productSpecificationsReducer;
exports.getProductRemarlState = store_1.createFeatureSelector('productSpecifications');
exports.selectAll = (_a = exports.adapter.getSelectors(), _a.selectAll), exports.selectEntities = _a.selectEntities, exports.selectIds = _a.selectIds, exports.selectTotal = _a.selectTotal;
//# sourceMappingURL=product-specification.reducers.js.map