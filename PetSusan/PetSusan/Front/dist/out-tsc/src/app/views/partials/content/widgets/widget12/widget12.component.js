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
// Layout config
var layout_1 = require("../../../../../core/_base/layout");
/**
 * Sample components with sample data
 */
var Widget12Component = /** @class */ (function () {
    /**
     * Component constructor
     * @param layoutConfigService
     */
    function Widget12Component(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        this.type = 'line';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    Widget12Component.prototype.ngOnInit = function () {
        if (!this.data) {
            var color = Chart.helpers.color;
            this.data = {
                labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan'],
                datasets: [
                    {
                        fill: true,
                        // borderWidth: 0,
                        backgroundColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0.6).rgbString(),
                        borderColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0).rgbString(),
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 12,
                        pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                        pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                        pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                        pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                        data: [20, 40, 50, 25, 35, 60, 30]
                    },
                    {
                        fill: true,
                        // borderWidth: 0,
                        backgroundColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0.2).rgbString(),
                        borderColor: color(this.layoutConfigService.getConfig('colors.state.brand')).alpha(0).rgbString(),
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 12,
                        pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                        pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                        pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                        pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                        data: [25, 45, 55, 30, 40, 65, 35]
                    }
                ]
            };
        }
        this.initChart();
    };
    Widget12Component.prototype.initChart = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        var chart = new Chart(this.chart.nativeElement, {
            type: this.type,
            data: this.data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [{
                            categoryPercentage: 0.35,
                            barPercentage: 0.70,
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Month'
                            },
                            gridLines: false,
                            ticks: {
                                display: true,
                                beginAtZero: true,
                                fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
                                fontSize: 13,
                                padding: 10
                            }
                        }],
                    yAxes: [{
                            categoryPercentage: 0.35,
                            barPercentage: 0.70,
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value'
                            },
                            gridLines: {
                                color: this.layoutConfigService.getConfig('colors.base.shape.2'),
                                drawBorder: false,
                                offsetGridLines: false,
                                drawTicks: false,
                                borderDash: [3, 4],
                                zeroLineWidth: 1,
                                zeroLineColor: this.layoutConfigService.getConfig('colors.base.shape.2'),
                                zeroLineBorderDash: [3, 4]
                            },
                            ticks: {
                                max: 70,
                                stepSize: 10,
                                display: true,
                                beginAtZero: true,
                                fontColor: this.layoutConfigService.getConfig('colors.base.shape.3'),
                                fontSize: 13,
                                padding: 10
                            }
                        }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10,
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: this.layoutConfigService.getConfig('colors.state.brand'),
                    titleFontColor: '#ffffff',
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Widget12Component.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Widget12Component.prototype, "type", void 0);
    __decorate([
        core_1.ViewChild('chart'),
        __metadata("design:type", core_1.ElementRef)
    ], Widget12Component.prototype, "chart", void 0);
    Widget12Component = __decorate([
        core_1.Component({
            selector: 'kt-widget12',
            templateUrl: './widget12.component.html',
            styleUrls: ['./widget12.component.scss']
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService])
    ], Widget12Component);
    return Widget12Component;
}());
exports.Widget12Component = Widget12Component;
//# sourceMappingURL=widget12.component.js.map