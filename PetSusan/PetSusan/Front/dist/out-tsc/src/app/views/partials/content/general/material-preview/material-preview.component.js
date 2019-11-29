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
var MaterialPreviewComponent = /** @class */ (function () {
    /**
     * Component constructor
     */
    function MaterialPreviewComponent() {
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    MaterialPreviewComponent.prototype.ngOnInit = function () {
    };
    /**
     * Toggle visibility
     */
    MaterialPreviewComponent.prototype.changeCodeVisibility = function () {
        this.viewItem.isCodeVisible = !this.viewItem.isCodeVisible;
    };
    /**
     * Check examples existing
     */
    MaterialPreviewComponent.prototype.hasExampleSource = function () {
        if (!this.viewItem) {
            return false;
        }
        if (!this.viewItem.cssCode && !this.viewItem.htmlCode && !this.viewItem.scssCode && !this.viewItem.tsCode) {
            return false;
        }
        return true;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MaterialPreviewComponent.prototype, "viewItem", void 0);
    MaterialPreviewComponent = __decorate([
        core_1.Component({
            selector: 'kt-material-preview',
            templateUrl: './material-preview.component.html',
            styleUrls: ['./material-preview.component.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], MaterialPreviewComponent);
    return MaterialPreviewComponent;
}());
exports.MaterialPreviewComponent = MaterialPreviewComponent;
//# sourceMappingURL=material-preview.component.js.map