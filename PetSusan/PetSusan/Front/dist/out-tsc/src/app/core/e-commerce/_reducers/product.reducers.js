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
var product_actions_1 = require("../_actions/product.actions");
// CRUD
var crud_1 = require("../../_base/crud");
exports.adapter = entity_1.createEntityAdapter();
exports.initialProductsState = exports.adapter.getInitialState({
    listLoading: false,
    actionsloading: false,
    totalCount: 0,
    lastQuery: new crud_1.QueryParamsModel({}),
    lastCreatedProductId: undefined,
    showInitWaitingMessage: true
});
function productsReducer(state, action) {
    if (state === void 0) { state = exports.initialProductsState; }
    switch (action.type) {
        case product_actions_1.ProductActionTypes.ProductsPageToggleLoading: return __assign({}, state, { listLoading: action.payload.isLoading, lastCreatedProductId: undefined });
        case product_actions_1.ProductActionTypes.ProductsActionToggleLoading: return __assign({}, state, { actionsloading: action.payload.isLoading });
        case product_actions_1.ProductActionTypes.ProductOnServerCreated: return __assign({}, state);
        case product_actions_1.ProductActionTypes.ProductCreated: return exports.adapter.addOne(action.payload.product, __assign({}, state, { lastCreatedProductId: action.payload.product.id }));
        case product_actions_1.ProductActionTypes.ProductUpdated: return exports.adapter.updateOne(action.payload.partialProduct, state);
        case product_actions_1.ProductActionTypes.ProductsStatusUpdated: {
            var _partialProducts = [];
            for (var i = 0; i < action.payload.products.length; i++) {
                _partialProducts.push({
                    id: action.payload.products[i].id,
                    changes: {
                        status: action.payload.status
                    }
                });
            }
            return exports.adapter.updateMany(_partialProducts, state);
        }
        case product_actions_1.ProductActionTypes.OneProductDeleted: return exports.adapter.removeOne(action.payload.id, state);
        case product_actions_1.ProductActionTypes.ManyProductsDeleted: return exports.adapter.removeMany(action.payload.ids, state);
        case product_actions_1.ProductActionTypes.ProductsPageCancelled: return __assign({}, state, { listLoading: false, lastQuery: new crud_1.QueryParamsModel({}) });
        case product_actions_1.ProductActionTypes.ProductsPageLoaded:
            return exports.adapter.addMany(action.payload.products, __assign({}, exports.initialProductsState, { totalCount: action.payload.totalCount, listLoading: false, lastQuery: action.payload.page, showInitWaitingMessage: false }));
        default: return state;
    }
}
exports.productsReducer = productsReducer;
exports.getProductState = store_1.createFeatureSelector('products');
exports.selectAll = (_a = exports.adapter.getSelectors(), _a.selectAll), exports.selectEntities = _a.selectEntities, exports.selectIds = _a.selectIds, exports.selectTotal = _a.selectTotal;
//# sourceMappingURL=product.reducers.js.map