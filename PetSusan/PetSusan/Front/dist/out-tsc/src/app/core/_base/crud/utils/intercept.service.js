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
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
/**
 * More information there => https://medium.com/@MetonymyQT/angular-http-interceptors-what-are-they-and-how-to-use-them-52e060321088
 */
var InterceptService = /** @class */ (function () {
    function InterceptService() {
    }
    // intercept request and add token
    InterceptService.prototype.intercept = function (request, next) {
        // tslint:disable-next-line:no-debugger
        // modify request
        // request = request.clone({
        // 	setHeaders: {
        // 		Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // 	}
        // });
        // console.log('----request----');
        // console.log(request);
        // console.log('--- end of request---');
        return next.handle(request).pipe(operators_1.tap(function (event) {
            if (event instanceof http_1.HttpResponse) {
                // console.log('all looks good');
                // http response status code
                // console.log(event.status);
            }
        }, function (error) {
            // http response status code
            // console.log('----response----');
            // console.error('status code:');
            // tslint:disable-next-line:no-debugger
            console.error(error.status);
            console.error(error.message);
            // console.log('--- end of response---');
        }));
    };
    InterceptService = __decorate([
        core_1.Injectable()
    ], InterceptService);
    return InterceptService;
}());
exports.InterceptService = InterceptService;
//# sourceMappingURL=intercept.service.js.map