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
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
// Material
var material_1 = require("@angular/material");
// Translate
var core_2 = require("@ngx-translate/core");
// NGRX
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
// CRUD
var crud_1 = require("../../../core/_base/crud/");
// Module components
var auth_component_1 = require("./auth.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var auth_notice_component_1 = require("./auth-notice/auth-notice.component");
// Auth
var auth_1 = require("../../../core/auth");
var routes = [
    {
        path: '',
        component: auth_component_1.AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent,
                data: { returnUrl: window.location.pathname }
            },
            {
                path: 'register',
                component: register_component_1.RegisterComponent
            },
            {
                path: 'forgot-password',
                component: forgot_password_component_1.ForgotPasswordComponent,
            }
        ]
    }
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1,
            providers: [
                auth_1.AuthService,
                auth_1.AuthGuard
            ]
        };
    };
    var AuthModule_1;
    AuthModule = AuthModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatButtonModule,
                router_1.RouterModule.forChild(routes),
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
                material_1.MatCheckboxModule,
                core_2.TranslateModule.forChild(),
                store_1.StoreModule.forFeature('auth', auth_1.authReducer),
                effects_1.EffectsModule.forFeature([auth_1.AuthEffects])
            ],
            providers: [
                crud_1.InterceptService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: crud_1.InterceptService,
                    multi: true
                },
            ],
            exports: [auth_component_1.AuthComponent],
            declarations: [
                auth_component_1.AuthComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                auth_notice_component_1.AuthNoticeComponent
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map