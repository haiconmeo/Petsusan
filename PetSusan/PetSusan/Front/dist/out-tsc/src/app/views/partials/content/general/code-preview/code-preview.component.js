"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var CodePreviewComponent = /** @class */ (function () {
    function CodePreviewComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewComponent.prototype, "htmlCode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewComponent.prototype, "tsCode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodePreviewComponent.prototype, "scssCode", void 0);
    CodePreviewComponent = __decorate([
        core_1.Component({
            selector: 'kt-code-preview',
            templateUrl: './code-preview.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], CodePreviewComponent);
    return CodePreviewComponent;
}());
exports.CodePreviewComponent = CodePreviewComponent;
//# sourceMappingURL=code-preview.component.js.map