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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
// NgBootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Partials
var partials_module_1 = require("../partials/partials.module");
// Pages
var core_module_1 = require("../../core/core.module");
var mail_module_1 = require("./apps/mail/mail.module");
var e_commerce_module_1 = require("./apps/e-commerce/e-commerce.module");
var user_management_module_1 = require("./user-management/user-management.module");
var my_page_component_1 = require("./my-page/my-page.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [my_page_component_1.MyPageComponent],
            exports: [],
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                core_module_1.CoreModule,
                partials_module_1.PartialsModule,
                mail_module_1.MailModule,
                e_commerce_module_1.ECommerceModule,
                user_management_module_1.UserManagementModule,
            ],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map