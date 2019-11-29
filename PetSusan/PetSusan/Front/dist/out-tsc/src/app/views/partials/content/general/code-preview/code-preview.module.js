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
// NgBootstrap
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Code Preview
var code_preview_component_1 = require("./code-preview.component");
var code_preview_inner_component_1 = require("./code-preview-inner/code-preview-inner.component");
var CodePreviewModule = /** @class */ (function () {
    function CodePreviewModule() {
    }
    CodePreviewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule
            ],
            exports: [code_preview_component_1.CodePreviewComponent, code_preview_inner_component_1.CodePreviewInnerComponent],
            declarations: [code_preview_component_1.CodePreviewComponent, code_preview_inner_component_1.CodePreviewInnerComponent]
        })
    ], CodePreviewModule);
    return CodePreviewModule;
}());
exports.CodePreviewModule = CodePreviewModule;
//# sourceMappingURL=code-preview.module.js.map