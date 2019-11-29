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
var Timeline2Component = /** @class */ (function () {
    function Timeline2Component() {
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    Timeline2Component.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = [
                {
                    time: '10:00',
                    icon: 'fa fa-genderless kt-font-danger',
                    text: 'Lorem ipsum dolor sit amit,consectetur eiusmdd tempor\n' +
                        'incididunt ut labore et dolore magna',
                },
                {
                    time: '12:45',
                    icon: 'fa fa-genderless kt-font-success',
                    text: 'AEOL Meeting With',
                    attachment: '\n' +
                        '<a href="$event.preventDefault();"><img src="./assets/media/users/100_4.jpg" title="" alt=""></a>' +
                        '<a href="$event.preventDefault();"><img src="./assets/media/users/100_13.jpg" title="" alt=""></a>' +
                        '<a href="$event.preventDefault();"><img src="./assets/media/users/100_11.jpg" title="" alt=""></a>' +
                        '<a href="$event.preventDefault();"><img src="./assets/media/users/100_14.jpg" title="" alt=""></a>'
                },
                {
                    time: '14:00',
                    icon: 'fa fa-genderless kt-font-brand',
                    text: 'Make Deposit <a href="$event.preventDefault();" class="kt-link kt-link--brand kt-font-bolder">USD 700</a> To ESL.',
                },
                {
                    time: '17:00',
                    icon: 'fa fa-genderless kt-font-info',
                    text: 'Placed a new order in <a href="$event.preventDefault();" class="kt-link kt-link--brand kt-font-bolder">SIGNATURE MOBILE</a> marketplace.',
                },
                {
                    time: '16:00',
                    icon: 'fa fa-genderless kt-font-brand',
                    text: 'Lorem ipsum dolor sit amit,consectetur eiusmdd tempor<br>' +
                        'incididunt ut labore et dolore magna elit enim at minim<br>' +
                        'veniam quis nostrud',
                },
                {
                    time: '17:00',
                    icon: 'fa fa-genderless kt-font-danger',
                    text: 'Received a new feedback on <a href="$event.preventDefault();" class="kt-link kt-link--brand kt-font-bolder">FinancePro App</a> product.',
                },
            ];
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Timeline2Component.prototype, "data", void 0);
    Timeline2Component = __decorate([
        core_1.Component({
            selector: 'kt-timeline2',
            templateUrl: './timeline2.component.html',
            styleUrls: ['./timeline2.component.scss']
        })
    ], Timeline2Component);
    return Timeline2Component;
}());
exports.Timeline2Component = Timeline2Component;
//# sourceMappingURL=timeline2.component.js.map