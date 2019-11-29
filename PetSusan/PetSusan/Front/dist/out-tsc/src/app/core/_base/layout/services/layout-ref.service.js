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
// RxJS
var rxjs_1 = require("rxjs");
var LayoutRefService = /** @class */ (function () {
    function LayoutRefService() {
        // Public properties
        this.layoutRefs$ = new rxjs_1.BehaviorSubject({});
        this.layoutRefs = {};
    }
    /**
     * Add element to Ref
     *
     * @param name: any
     * @param element: any
     */
    LayoutRefService.prototype.addElement = function (name, element) {
        var obj = {};
        obj[name] = element;
        this.layoutRefs = Object.assign({}, this.layoutRefs, obj);
        this.layoutRefs$.next(this.layoutRefs);
    };
    LayoutRefService = __decorate([
        core_1.Injectable()
    ], LayoutRefService);
    return LayoutRefService;
}());
exports.LayoutRefService = LayoutRefService;
//# sourceMappingURL=layout-ref.service.js.map