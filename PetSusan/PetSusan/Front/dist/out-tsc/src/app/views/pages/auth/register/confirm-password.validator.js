"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfirmPasswordValidator = /** @class */ (function () {
    function ConfirmPasswordValidator() {
    }
    /**
     * Check matching password with confirm password
     * @param control AbstractControl
     */
    ConfirmPasswordValidator.MatchPassword = function (control) {
        var password = control.get('password').value;
        var confirmPassword = control.get('confirmPassword').value;
        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ ConfirmPassword: true });
        }
        else {
            return null;
        }
    };
    return ConfirmPasswordValidator;
}());
exports.ConfirmPasswordValidator = ConfirmPasswordValidator;
//# sourceMappingURL=confirm-password.validator.js.map