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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var FetchEntityDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<FetchEntityDialogComponent>,
     * @param data: any
     */
    function FetchEntityDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * Close dialog with false result
     */
    FetchEntityDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    /** UI */
    /**
     * Returns CSS Class Name by status type
     * @param status: number
     */
    FetchEntityDialogComponent.prototype.getItemCssClassByStatus = function (status) {
        if (status === void 0) { status = 0; }
        switch (status) {
            case 0: return 'success';
            case 1: return 'metal';
            case 2: return 'danger';
            default: return 'success';
        }
    };
    FetchEntityDialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-fetch-entity-dialog',
            templateUrl: './fetch-entity-dialog.component.html'
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], FetchEntityDialogComponent);
    return FetchEntityDialogComponent;
}());
exports.FetchEntityDialogComponent = FetchEntityDialogComponent;
//# sourceMappingURL=fetch-entity-dialog.component.js.map