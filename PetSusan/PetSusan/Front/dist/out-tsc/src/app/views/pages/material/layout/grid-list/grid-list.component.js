"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamicGrid = {
    beforeCodeTitle: 'Dynamic grid-list',
    htmlCode: "\n<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n<mat-grid-tile\n*ngFor=\"let tile of tiles\"\n[colspan]=\"tile.cols\"\n[rowspan]=\"tile.rows\"\n[style.background]=\"tile.color\">\n{{tile.text}}\n</mat-grid-tile>\n</mat-grid-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Dynamic grid-list\n*/\n@Component({\nselector: 'grid-list-dynamic-example',\ntemplateUrl: 'grid-list-dynamic-example.html',\nstyleUrls: ['grid-list-dynamic-example.css'],\n})\nexport class GridListDynamicExample {\ntiles = [\n{text: 'One', cols: 3, rows: 1, color: 'lightblue'},\n{text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},\n{text: 'Three', cols: 1, rows: 1, color: 'lightpink'},\n{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},\n];\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var basicGrid = {
    beforeCodeTitle: 'Basic grid-list',
    htmlCode: "\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n<mat-grid-tile>1</mat-grid-tile>\n<mat-grid-tile>2</mat-grid-tile>\n<mat-grid-tile>3</mat-grid-tile>\n<mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic grid-list\n*/\n@Component({\nselector: 'grid-list-overview-example',\nstyleUrls: ['grid-list-overview-example.css'],\ntemplateUrl: 'grid-list-overview-example.html',\n})\nexport class GridListOverviewExample {}\n",
    cssCode: "\nmat-grid-tile {\nbackground: lightblue;\n}\n\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var GridListComponent = /** @class */ (function () {
    function GridListComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    GridListComponent.prototype.ngOnInit = function () {
        this.exampleBasicGrid = basicGrid;
        this.exampleDynamicGrid = dynamicGrid;
    };
    GridListComponent = __decorate([
        core_1.Component({
            selector: 'kt-grid-list',
            templateUrl: './grid-list.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\tmat-grid-tile {\n\t\tbackground: lightblue;\n\t  }\n\t"]
        })
    ], GridListComponent);
    return GridListComponent;
}());
exports.GridListComponent = GridListComponent;
//# sourceMappingURL=grid-list.component.js.map