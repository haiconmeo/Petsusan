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
// Lodash
var lodash_1 = require("lodash");
var Widget5Component = /** @class */ (function () {
    function Widget5Component() {
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    Widget5Component.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = lodash_1.shuffle([
                {
                    pic: './assets/media/products/product6.jpg',
                    title: 'Great Logo Designn',
                    desc: 'Metronic admin themes.',
                    info: '<span>Author:</span><span class="kt-font-info">Keenthemes</span>' +
                        '<span>Released:</span><span class="kt-font-info">23.08.17</span>',
                    largeInfo: '<div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">19,200</span>\n' +
                        ' <span class="kt-widget5__sales">sales</span>\n' +
                        ' </div>\n' +
                        ' <div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">1046</span>\n' +
                        ' <span class="kt-widget5__votes">votes</span>\n' +
                        ' </div>'
                },
                {
                    pic: './assets/media/products/product10.jpg',
                    title: 'Branding Mockup',
                    desc: 'Metronic bootstrap themes.',
                    info: '<span>Author:</span><span class="kt-font-info">Fly themes</span>' +
                        '<span>Released:</span><span class="kt-font-info">23.08.17</span>',
                    largeInfo: '<div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">24,583</span>\n' +
                        ' <span class="kt-widget5__sales">sales</span>\n' +
                        ' </div>\n' +
                        ' <div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">3809</span>\n' +
                        ' <span class="kt-widget5__votes">votes</span>\n' +
                        ' </div>'
                },
                {
                    pic: './assets/media/products/product11.jpg',
                    title: 'Awesome Mobile App',
                    desc: 'Metronic admin themes. Lorem Ipsum Amet.',
                    info: '<span>Author:</span><span class="kt-font-info">Fly themes</span>' +
                        '<span>Released:</span><span class="kt-font-info">23.08.17</span>',
                    largeInfo: '<div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">210,054</span>\n' +
                        ' <span class="kt-widget5__sales">sales</span>\n' +
                        ' </div>\n' +
                        ' <div class="kt-widget5__stats">\n' +
                        ' <span class="kt-widget5__number">1103</span>\n' +
                        ' <span class="kt-widget5__votes">votes</span>\n' +
                        ' </div>'
                },
            ]);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Widget5Component.prototype, "data", void 0);
    Widget5Component = __decorate([
        core_1.Component({
            selector: 'kt-widget5',
            templateUrl: './widget5.component.html',
            styleUrls: ['./widget5.component.scss']
        })
    ], Widget5Component);
    return Widget5Component;
}());
exports.Widget5Component = Widget5Component;
//# sourceMappingURL=widget5.component.js.map