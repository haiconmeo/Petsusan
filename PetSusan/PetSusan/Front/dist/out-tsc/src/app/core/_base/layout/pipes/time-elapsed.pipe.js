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
/**
 * https://github.com/AndrewPoyntz/time-ago-pipe
 * An Angular pipe for converting a date string into a time ago
 */
var TimeElapsedPipe = /** @class */ (function () {
    /**
     * Pipe Constructor
     *
     * @param changeDetectorRef: ChangeDetectorRef
     * @param ngZone: NgZone
     */
    function TimeElapsedPipe(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On destroy
     */
    TimeElapsedPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    /**
     * Transform
     *
     * @param value: string
     */
    TimeElapsedPipe.prototype.transform = function (value) {
        var _this = this;
        this.removeTimer();
        var d = new Date(value);
        var now = new Date();
        var seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        var timeToUpdate = this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.ngZone.run(function () {
                        return _this.changeDetectorRef.markForCheck();
                    });
                }, timeToUpdate);
            }
            return null;
        });
        var minutes = Math.round(Math.abs(seconds / 60));
        var hours = Math.round(Math.abs(minutes / 60));
        var days = Math.round(Math.abs(hours / 24));
        var months = Math.round(Math.abs(days / 30.416));
        var years = Math.round(Math.abs(days / 365));
        if (seconds <= 45) {
            return 'just now';
        }
        else if (seconds <= 90) {
            return '1 min';
        }
        else if (minutes <= 45) {
            return minutes + ' mins';
        }
        else if (minutes <= 90) {
            return '1 hr';
        }
        else if (hours <= 22) {
            return hours + ' hrs';
        }
        else if (hours <= 36) {
            return '1 day';
        }
        else if (days <= 25) {
            return days + ' days';
        }
        else if (days <= 45) {
            return '1 month';
        }
        else if (days <= 345) {
            return months + ' months';
        }
        else if (days <= 545) {
            return '1 year';
        }
        else {
            // (days > 545)
            return years + ' years';
        }
    };
    /**
     * Remove timer
     */
    TimeElapsedPipe.prototype.removeTimer = function () {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    };
    /**
     * Returns Seconds Until Update
     * @param seconds: number
     */
    TimeElapsedPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var min = 60;
        var hr = min * 60;
        var day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update ever 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    };
    TimeElapsedPipe = __decorate([
        core_1.Pipe({
            name: 'kTimeElapsed'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            core_1.NgZone])
    ], TimeElapsedPipe);
    return TimeElapsedPipe;
}());
exports.TimeElapsedPipe = TimeElapsedPipe;
//# sourceMappingURL=time-elapsed.pipe.js.map