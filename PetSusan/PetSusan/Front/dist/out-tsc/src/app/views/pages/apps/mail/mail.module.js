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
// Component
var mail_component_1 = require("./mail.component");
var MailModule = /** @class */ (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: mail_component_1.MailComponent
                    }
                ])
            ],
            declarations: [mail_component_1.MailComponent]
        })
    ], MailModule);
    return MailModule;
}());
exports.MailModule = MailModule;
//# sourceMappingURL=mail.module.js.map