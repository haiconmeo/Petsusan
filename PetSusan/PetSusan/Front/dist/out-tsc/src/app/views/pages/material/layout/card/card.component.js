"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basicCards = {
    beforeCodeTitle: 'Basic cards',
    htmlCode: "<mat-card>Simple card</mat-card>",
    tsCode: "\nimport {Component} from '@angular/core';\n/**\n* @title Basic cards\n*/\n@Component({\n  selector: 'card-overview-example',\n  templateUrl: 'card-overview-example.html',\n  styleUrls: ['card-overview-example.css'],\n})\nexport class CardOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var cardWithTitle = {
    beforeCodeTitle: 'Card header',
    htmlCode: "\n<mat-toolbar>\n  <mat-toolbar-row>\n    <span>First Row</span>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <span>Second Row</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Card with title\n*/\n@Component({\nselector: 'card-title-example',\ntemplateUrl: 'card-title-example.html',\nstyleUrls: ['card-title-example.css'],\n})\nexport class CardTitleExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var bigExample = {
    beforeCodeTitle: 'Example with image',
    htmlCode: "\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n  </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Card with iamge\n*/\n@Component({\nselector: 'card-image-example',\ntemplateUrl: 'card-image-example.html',\nstyleUrls: ['card-image-example.css'],\n})\nexport class CardImageExample {}\n",
    cssCode: "\n.example-card {\n  max-width: 400px;\n}\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
        this.exampleBasicCards = basicCards;
        this.exampleCardWithTitle = cardWithTitle;
        this.examplBigExample = bigExample;
    };
    CardComponent = __decorate([
        core_1.Component({
            selector: 'kt-card',
            templateUrl: './card.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-card {\n\t\tmax-width: 400px;\n\t  }\n\t.example-header-image {\n\t\tbackground-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n\t\tbackground-size: cover;\n\t  }\n\t"]
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map