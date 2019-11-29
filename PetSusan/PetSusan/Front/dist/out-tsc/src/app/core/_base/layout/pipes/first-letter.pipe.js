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
/**
 * Returns only first letter of string
 */
var FirstLetterPipe = /** @class */ (function () {
    function FirstLetterPipe() {
    }
    /**
     * Transform
     *
     * @param value: any
     * @param args: any
     */
    FirstLetterPipe.prototype.transform = function (value, args) {
        return value.split(' ').map(function (n) { return n[0]; }).join('');
    };
    FirstLetterPipe = __decorate([
        core_1.Pipe({
            name: 'firstLetter'
        })
    ], FirstLetterPipe);
    return FirstLetterPipe;
}());
exports.FirstLetterPipe = FirstLetterPipe;
//# sourceMappingURL=first-letter.pipe.js.map