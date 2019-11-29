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
var core_1 = require("@angular/core");
var demo = {
    beforeCodeTitle: 'Demo',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <button type=\"button\"\n      class=\"btn btn-primary\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\"\n      aria-controls=\"collapseExample\">\n      Toggle\n    </button>\n  </div>\n  <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        You can collapse this card by clicking Toggle\n      </div>\n    </div>\n  </div>\n</div>\n",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-collapse-basic',\n    templateUrl: './collapse-basic.html'\n})\nexport class NgbdCollapseBasic {\n    public isCollapsed = false;\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
        this.isCollapsed = false;
    }
    CollapseComponent.prototype.ngOnInit = function () {
        this.exampleDemo = demo;
    };
    CollapseComponent = __decorate([
        core_1.Component({
            selector: 'kt-collapse',
            templateUrl: './collapse.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [])
    ], CollapseComponent);
    return CollapseComponent;
}());
exports.CollapseComponent = CollapseComponent;
//# sourceMappingURL=collapse.component.js.map