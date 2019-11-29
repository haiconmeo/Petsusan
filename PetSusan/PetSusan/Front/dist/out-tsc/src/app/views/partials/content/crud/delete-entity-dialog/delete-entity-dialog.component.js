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
var DeleteEntityDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<DeleteEntityDialogComponent>
     * @param data: any
     */
    function DeleteEntityDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Public properties
        this.viewLoading = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    DeleteEntityDialogComponent.prototype.ngOnInit = function () {
    };
    /**
     * Close dialog with false result
     */
    DeleteEntityDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    /**
     * Close dialog with true result
     */
    DeleteEntityDialogComponent.prototype.onYesClick = function () {
        var _this = this;
        /* Server loading imitation. Remove this */
        this.viewLoading = true;
        setTimeout(function () {
            _this.dialogRef.close(true); // Keep only this row
        }, 2500);
    };
    DeleteEntityDialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-delete-entity-dialog',
            templateUrl: './delete-entity-dialog.component.html'
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], DeleteEntityDialogComponent);
    return DeleteEntityDialogComponent;
}());
exports.DeleteEntityDialogComponent = DeleteEntityDialogComponent;
//# sourceMappingURL=delete-entity-dialog.component.js.map