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
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        // Public properties
        // type of error template to be used, accepted values; error-v1 | error-v2 | error-v3 | error-v4 | error-v5 | error-v6
        this.type = 'error-v1';
        // error code, some error types template has it
        this.code = '404';
        // error descriptions
        this.desc = 'Oops! Something went wrong!';
        // return back button title
        this.return = 'Return back';
        this.classes = 'kt-grid kt-grid--ver kt-grid--root';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "code", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "subtitle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "desc", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "return", void 0);
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "classes", void 0);
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'kt-error',
            templateUrl: './error.component.html',
            styleUrls: ['./error.component.scss']
        })
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;
//# sourceMappingURL=error.component.js.map