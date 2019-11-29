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
var material_1 = require("@angular/material");
// Partials for CRUD
var crud_1 = require("../../../../views/partials/content/crud");
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Create"] = 0] = "Create";
    MessageType[MessageType["Read"] = 1] = "Read";
    MessageType[MessageType["Update"] = 2] = "Update";
    MessageType[MessageType["Delete"] = 3] = "Delete";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var LayoutUtilsService = /** @class */ (function () {
    /**
     * Service constructor
     *
     * @param snackBar: MatSnackBar
     * @param dialog: MatDialog
     */
    function LayoutUtilsService(snackBar, dialog) {
        this.snackBar = snackBar;
        this.dialog = dialog;
    }
    /**
     * Showing (Mat-Snackbar) Notification
     *
     * @param message: string
     * @param type: MessageType
     * @param duration: number
     * @param showCloseButton: boolean
     * @param showUndoButton: boolean
     * @param undoButtonDuration: number
     * @param verticalPosition: 'top' | 'bottom' = 'top'
     */
    LayoutUtilsService.prototype.showActionNotification = function (_message, _type, _duration, _showCloseButton, _showUndoButton, _undoButtonDuration, _verticalPosition) {
        if (_type === void 0) { _type = MessageType.Create; }
        if (_duration === void 0) { _duration = 10000; }
        if (_showCloseButton === void 0) { _showCloseButton = true; }
        if (_showUndoButton === void 0) { _showUndoButton = true; }
        if (_undoButtonDuration === void 0) { _undoButtonDuration = 3000; }
        if (_verticalPosition === void 0) { _verticalPosition = 'bottom'; }
        var _data = {
            message: _message,
            snackBar: this.snackBar,
            showCloseButton: _showCloseButton,
            showUndoButton: _showUndoButton,
            undoButtonDuration: _undoButtonDuration,
            verticalPosition: _verticalPosition,
            type: _type,
            action: 'Undo'
        };
        return this.snackBar.openFromComponent(crud_1.ActionNotificationComponent, {
            duration: _duration,
            data: _data,
            verticalPosition: _verticalPosition
        });
    };
    /**
     * Showing Confirmation (Mat-Dialog) before Entity Removing
     *
     * @param title: stirng
     * @param description: stirng
     * @param waitDesciption: string
     */
    LayoutUtilsService.prototype.deleteElement = function (title, description, waitDesciption) {
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        if (waitDesciption === void 0) { waitDesciption = ''; }
        return this.dialog.open(crud_1.DeleteEntityDialogComponent, {
            data: { title: title, description: description, waitDesciption: waitDesciption },
            width: '440px'
        });
    };
    /**
     * Showing Fetching Window(Mat-Dialog)
     *
     * @param _data: any
     */
    LayoutUtilsService.prototype.fetchElements = function (_data) {
        return this.dialog.open(crud_1.FetchEntityDialogComponent, {
            data: _data,
            width: '400px'
        });
    };
    /**
     * Showing Update Status for Entites Window
     *
     * @param title: string
     * @param statuses: string[]
     * @param messages: string[]
     */
    LayoutUtilsService.prototype.updateStatusForEntities = function (title, statuses, messages) {
        return this.dialog.open(crud_1.UpdateStatusDialogComponent, {
            data: { title: title, statuses: statuses, messages: messages },
            width: '480px'
        });
    };
    LayoutUtilsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [material_1.MatSnackBar,
            material_1.MatDialog])
    ], LayoutUtilsService);
    return LayoutUtilsService;
}());
exports.LayoutUtilsService = LayoutUtilsService;
//# sourceMappingURL=layout-utils.service.js.map