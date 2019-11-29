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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
// Fake API Angular-in-memory
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
// Translate Module
var core_2 = require("@ngx-translate/core");
// NGRX
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
// UI
var partials_module_1 = require("../../../partials/partials.module");
// Core
var layout_1 = require("../../../../core/_base/layout");
// Auth
var auth_1 = require("../../../../core/auth");
// Core => Services
var e_commerce_1 = require("../../../../core/e-commerce");
// Core => Utils
var crud_1 = require("../../../../core/_base/crud");
// Shared
var crud_2 = require("../../../partials/content/crud");
// Components
var e_commerce_component_1 = require("./e-commerce.component");
// Customers
var customers_list_component_1 = require("./customers/customers-list/customers-list.component");
var customer_edit_dialog_component_1 = require("./customers/customer-edit/customer-edit.dialog.component");
// Products
var products_list_component_1 = require("./products/products-list/products-list.component");
var product_edit_component_1 = require("./products/product-edit/product-edit.component");
var remarks_list_component_1 = require("./products/_subs/remarks/remarks-list/remarks-list.component");
var specifications_list_component_1 = require("./products/_subs/specifications/specifications-list/specifications-list.component");
var specification_edit_dialog_component_1 = require("./products/_subs/specifications/specification-edit/specification-edit-dialog.component");
// Orders
var orders_list_component_1 = require("./orders/orders-list/orders-list.component");
var order_edit_component_1 = require("./orders/order-edit/order-edit.component");
// Material
var material_1 = require("@angular/material");
var environment_1 = require("../../../../../environments/environment");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_permissions_1 = require("ngx-permissions");
// tslint:disable-next-line:class-name
var routes = [
    {
        path: '',
        component: e_commerce_component_1.ECommerceComponent,
        // canActivate: [ModuleGuard],
        // data: { moduleName: 'ecommerce' },
        children: [
            {
                path: '',
                redirectTo: 'customers',
                pathMatch: 'full'
            },
            {
                path: 'customers',
                component: customers_list_component_1.CustomersListComponent
            },
            {
                path: 'orders',
                component: orders_list_component_1.OrdersListComponent
            },
            {
                path: 'products',
                component: products_list_component_1.ProductsListComponent,
            },
            {
                path: 'products/add',
                component: product_edit_component_1.ProductEditComponent
            },
            {
                path: 'products/edit',
                component: product_edit_component_1.ProductEditComponent
            },
            {
                path: 'products/edit/:id',
                component: product_edit_component_1.ProductEditComponent
            },
        ]
    }
];
var ECommerceModule = /** @class */ (function () {
    function ECommerceModule() {
    }
    ECommerceModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MatDialogModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                partials_module_1.PartialsModule,
                ngx_permissions_1.NgxPermissionsModule.forChild(),
                router_1.RouterModule.forChild(routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                core_2.TranslateModule.forChild(),
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatSelectModule,
                material_1.MatInputModule,
                material_1.MatTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatRadioModule,
                material_1.MatIconModule,
                material_1.MatNativeDateModule,
                material_1.MatProgressBarModule,
                material_1.MatDatepickerModule,
                material_1.MatCardModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatCheckboxModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatSnackBarModule,
                material_1.MatTabsModule,
                material_1.MatTooltipModule,
                ng_bootstrap_1.NgbProgressbarModule,
                environment_1.environment.isMockEnabled ? angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forFeature(layout_1.FakeApiService, {
                    passThruUnknownUrl: true,
                    dataEncapsulation: false
                }) : [],
                store_1.StoreModule.forFeature('products', e_commerce_1.productsReducer),
                effects_1.EffectsModule.forFeature([e_commerce_1.ProductEffects]),
                store_1.StoreModule.forFeature('customers', e_commerce_1.customersReducer),
                effects_1.EffectsModule.forFeature([e_commerce_1.CustomerEffects]),
                store_1.StoreModule.forFeature('productRemarks', e_commerce_1.productRemarksReducer),
                effects_1.EffectsModule.forFeature([e_commerce_1.ProductRemarkEffects]),
                store_1.StoreModule.forFeature('productSpecifications', e_commerce_1.productSpecificationsReducer),
                effects_1.EffectsModule.forFeature([e_commerce_1.ProductSpecificationEffects]),
            ],
            providers: [
                auth_1.ModuleGuard,
                crud_1.InterceptService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: crud_1.InterceptService,
                    multi: true
                },
                {
                    provide: material_1.MAT_DIALOG_DEFAULT_OPTIONS,
                    useValue: {
                        hasBackdrop: true,
                        panelClass: 'kt-mat-dialog-container__wrapper',
                        height: 'auto',
                        width: '900px'
                    }
                },
                crud_1.TypesUtilsService,
                crud_1.LayoutUtilsService,
                crud_1.HttpUtilsService,
                e_commerce_1.CustomersService,
                e_commerce_1.ProductRemarksService,
                e_commerce_1.ProductSpecificationsService,
                e_commerce_1.ProductsService,
                crud_1.TypesUtilsService,
                crud_1.LayoutUtilsService
            ],
            entryComponents: [
                crud_2.ActionNotificationComponent,
                customer_edit_dialog_component_1.CustomerEditDialogComponent,
                crud_2.DeleteEntityDialogComponent,
                crud_2.FetchEntityDialogComponent,
                crud_2.UpdateStatusDialogComponent,
                specification_edit_dialog_component_1.SpecificationEditDialogComponent
            ],
            declarations: [
                e_commerce_component_1.ECommerceComponent,
                // Customers
                customers_list_component_1.CustomersListComponent,
                customer_edit_dialog_component_1.CustomerEditDialogComponent,
                // Orders
                orders_list_component_1.OrdersListComponent,
                order_edit_component_1.OrderEditComponent,
                // Products
                products_list_component_1.ProductsListComponent,
                product_edit_component_1.ProductEditComponent,
                remarks_list_component_1.RemarksListComponent,
                specifications_list_component_1.SpecificationsListComponent,
                specification_edit_dialog_component_1.SpecificationEditDialogComponent
            ]
        })
    ], ECommerceModule);
    return ECommerceModule;
}());
exports.ECommerceModule = ECommerceModule;
//# sourceMappingURL=e-commerce.module.js.map