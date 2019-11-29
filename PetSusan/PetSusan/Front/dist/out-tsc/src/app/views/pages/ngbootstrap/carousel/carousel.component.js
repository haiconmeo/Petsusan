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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var carousel = {
    beforeCodeTitle: 'Carousel',
    htmlCode: "\n<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[1]\" alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[2]\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n        <h3>Third slide label</h3>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n  </ng-template>\n</ngb-carousel>\n",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {HttpClient} from '@angular/common/http';\nimport {map} from 'rxjs/operators';\n\n@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})\nexport class NgbdCarouselBasic implements OnInit {\n    images: Array<string>;\n\n    constructor(private _http: HttpClient) {}\n\n    ngOnInit() {\n        this._http.get('https://picsum.photos/list')\n            .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))\n            .subscribe(images => this.images = images);\n    }\n\n    private _randomImageUrls(images: Array<{id: number}>): Array<string> {\n        return [1, 2, 3].map(() => {\n            const randomId = images[Math.floor(Math.random() * images.length)].id;\n            return `https://picsum.photos/900/500?image=${randomId}`;\n        });\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var navigationArrowsAndIndicatorsCarousel = {
    beforeCodeTitle: 'Navigation arrows and indicators',
    htmlCode: "\n<ngb-carousel *ngIf=\"images\" [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\n  <ng-template ngbSlide *ngFor=\"let image of images\">\n    <img [src]=\"image\" alt=\"Random slide\" />\n    <div class=\"carousel-caption\">\n      <h3>No mouse navigation</h3>\n      <p>This carousel hides navigation arrows and indicators.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n<hr />\n<div class=\"btn-group\" role=\"group\" aria-label=\"Carousel toggle controls\">\n  <button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\"\n    class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\n  <button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\"\n    class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\n  </div>\n",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';\nimport {map} from 'rxjs/operators';\nimport {HttpClient} from '@angular/common/http';\n\n@Component({\n  selector: 'ngbd-carousel-navigation',\n  templateUrl: './carousel-navigation.html',\n  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers\n})\nexport class NgbdCarouselNavigation implements OnInit {\n  showNavigationArrows = false;\n  showNavigationIndicators = false;\n  images: Array<string>;\n\n\n  constructor(config: NgbCarouselConfig, private _http: HttpClient) {\n    // customize default values of carousels used by this component tree\n    config.showNavigationArrows = true;\n    config.showNavigationIndicators = true;\n  }\n\n\n  ngOnInit() {\n    this._http.get('https://picsum.photos/list')\n      .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))\n      .subscribe(images => this.images = images);\n  }\n\n\n  private _randomImageUrls(images: Array<{id: number}>): Array<string> {\n    return [1, 2].map(() => {\n      const randomId = images[Math.floor(Math.random() * images.length)].id;\n      return `https://picsum.photos/900/500?image=${randomId}`;\n    });\n  }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var globalConfigurationOfCarousels = {
    beforeCodeTitle: 'Global configuration of carousels',
    htmlCode: "\n<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      <h3>10 seconds between slides...</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[1]\"  alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      <h3>No keyboard...</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[2]\" alt=\"Random third slide\">\n    <div class=\"carousel-caption\">\n      <h3>And no wrap after last slide.</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n",
    tsCode: "\nimport {Component, OnInit} from '@angular/core';\nimport {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';\nimport {map} from 'rxjs/operators';\nimport {HttpClient} from '@angular/common/http';\n\n@Component({\n    selector: 'ngbd-carousel-config',\n    templateUrl: './carousel-config.html',\n    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers\n})\nexport class NgbdCarouselConfig implements OnInit {\n    images: Array<string>;\n\n    constructor(config: NgbCarouselConfig, private _http: HttpClient) {\n        // customize default values of carousels used by this component tree\n        config.interval = 10000;\n        config.wrap = false;\n        config.keyboard = false;\n    }\n\n    ngOnInit() {\n        this._http.get('https://picsum.photos/list')\n            .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))\n            .subscribe(images => this.images = images);\n    }\n\n    private _randomImageUrls(images: Array<{id: number}>): Array<string> {\n        return [1, 2, 3].map(() => {\n            const randomId = images[Math.floor(Math.random() * images.length)].id;\n            return `https://picsum.photos/900/500?image=${randomId}`;\n        });\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(_http, config) {
        this._http = _http;
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleCarousel = carousel;
        this.exampleGlobalConfigurationOfCarousels = globalConfigurationOfCarousels;
        this.exampleNavigationArrowsAndIndicatorsCarousel = navigationArrowsAndIndicatorsCarousel;
        this._http.get('https://picsum.photos/list')
            .pipe(operators_1.map(function (images) { return _this._randomImageUrls(images); }))
            .subscribe(function (images) { return _this.images = images; });
        this._http.get('https://picsum.photos/list')
            .pipe(operators_1.map(function (images) { return _this._randomImageUrls(images); }))
            .subscribe(function (images) { return _this.secondImages = images; });
        this._http.get('https://picsum.photos/list')
            .pipe(operators_1.map(function (images) { return _this._randomImageUrls(images); }))
            .subscribe(function (images) { return _this.thirdImages = images; });
    };
    CarouselComponent.prototype._randomImageUrls = function (images) {
        return [1, 2, 3].map(function () {
            var randomId = images[Math.floor(Math.random() * images.length)].id;
            return "https://picsum.photos/900/500?image=" + randomId;
        });
    };
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'kt-carousel',
            templateUrl: './carousel.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [ng_bootstrap_1.NgbCarouselConfig] // add NgbCarouselConfig to the component providers
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, ng_bootstrap_1.NgbCarouselConfig])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map