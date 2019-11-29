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
var product_remark_actions_1 = require("../_actions/product-remark.actions");
var crud_1 = require("../../_base/crud");
exports.adapter = entity_1.createEntityAdapter();
exports.initialProductRemarksState = exports.adapter.getInitialState({
    loading: false,
    totalCount: 0,
    productId: undefined,
    lastCreatedProductRemarkId: undefined,
    lastQuery: new crud_1.QueryParamsModel({}),
    showInitWaitingMessage: true
});
function productRemarksReducer(state, action) {
    if (state === void 0) { state = exports.initialProductRemarksState; }
    switch (action.type) {
        case product_remark_actions_1.ProductRemarkActionTypes.ProductRemarksPageToggleLoading:
            return __assign({}, state, { loading: action.payload.isLoading, lastCreatedProductRemarkId: undefined });
        case product_remark_actions_1.ProductRemarkActionTypes.ProductRemarkOnServerCreated:
            return __assign({}, state, { loading: true });
        case product_remark_actions_1.ProductRemarkActionTypes.ProductRemarkCreated:
            return exports.adapter.addOne(action.payload.productRemark, __assign({}, state, { lastCreatedProductRemarkId: action.payload.productRemark.id }));
        case product_remark_actions_1.ProductRemarkActionTypes.ProductRemarkUpdated:
            return exports.adapter.updateOne(action.payload.partialProductRemark, state);
        case product_remark_actions_1.ProductRemarkActionTypes.ProductRemarkStoreUpdated:
            return exports.adapter.updateOne(action.payload.productRemark, state);
        case product_remark_actions_1.ProductRemarkActionTypes.OneProductRemarkDeleted:
            return exports.adapter.removeOne(action.payload.id, state);
        case product_remark_actions_1.ProductRemarkActionTypes.ManyProductRemarksDeleted:
            return exports.adapter.removeMany(action.payload.ids, state);
        case product_remark_actions_1.ProductRemarkActionTypes.ProductRemarksPageCancelled:
            return __assign({}, state, { totalCount: 0, loading: false, productId: undefined, lastQuery: new crud_1.QueryParamsModel({}) });
        case product_remark_actions_1.ProductRemarkActionTypes.ProductRemarksPageRequested:
            return __assign({}, state, { totalCount: 0, loading: true, productId: action.payload.productId, lastQuery: action.payload.page });
        case product_remark_actions_1.ProductRemarkActionTypes.ProductRemarksPageLoaded:
            return exports.adapter.addMany(action.payload.productRemarks, __assign({}, exports.initialProductRemarksState, { totalCount: action.payload.totalCount, loading: false, productId: state.productId, lastQuery: state.lastQuery, showInitWaitingMessage: false }));
        default:
            return state;
    }
}
exports.productRemarksReducer = productRemarksReducer;
exports.getProductRemarlState = store_1.createFeatureSelector('productRemarks');
exports.selectAll = (_a = exports.adapter.getSelectors(), _a.selectAll), exports.selectEntities = _a.selectEntities, exports.selectIds = _a.selectIds, exports.selectTotal = _a.selectTotal;
//# sourceMappingURL=product-remark.reducers.js.map