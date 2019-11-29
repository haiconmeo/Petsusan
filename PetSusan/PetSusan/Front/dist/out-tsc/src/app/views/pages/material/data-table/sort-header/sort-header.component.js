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
var material_1 = require("@angular/material");
var basic = {
    beforeCodeTitle: 'Sorting overview',
    htmlCode: "\n<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\">Fat (g)</th>\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n    <th mat-sort-header=\"protein\">Protein (g)</th>\n  </tr>\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {Sort} from '@angular/material';\n\n/**\n* @title Sorting overview\n*/\n@Component({\n  selector: 'sort-overview-example',\n  templateUrl: 'sort-overview-example.html',\n  styleUrls: ['sort-overview-example.css'],\n})\nexport class SortOverviewExample {\n  desserts = [\n    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},\n    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},\n    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},\n    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},\n    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},\n  ];\n\n  sortedData;\n\n  constructor() {\n    this.sortedData = this.desserts.slice();\n  }\n\n  sortData(sort: Sort) {\n    const data = this.desserts.slice();\n    if (!sort.active || sort.direction == '') {\n      this.sortedData = data;\n      return;\n    }\n\n    this.sortedData = data.sort((a, b) => {\n      let isAsc = sort.direction == 'asc';\n      switch (sort.active) {\n        case 'name': return compare(a.name, b.name, isAsc);\n        case 'calories': return compare(+a.calories, +b.calories, isAsc);\n        case 'fat': return compare(+a.fat, +b.fat, isAsc);\n        case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);\n        case 'protein': return compare(+a.protein, +b.protein, isAsc);\n        default: return 0;\n      }\n    });\n  }\n}\n\n\nfunction compare(a, b, isAsc) {\n  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);\n}",
    cssCode: "\n.mat-sort-header-container {\n  align-items: center;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var config = {
    beforeCodeTitle: 'Table with sorting',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n  </ng-container>\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n  </ng-container>\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n  </ng-container>\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>",
    tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {MatTableDataSource, MatSort} from '@angular/material';\n\n/**\n* @title Table with sorting\n*/\n@Component({\n  selector: 'table-sorting-example',\n  styleUrls: ['table-sorting-example.css'],\n  templateUrl: 'table-sorting-example.html',\n})\nexport class TableSortingExample {\n  displayedColumns = ['position', 'name', 'weight', 'symbol'];\n  dataSource = new MatTableDataSource(ELEMENT_DATA);\n\n  @ViewChild(MatSort) sort: MatSort;\n\n  /**\n  * Set the sort after the view init since this component will\n  * be able to query its view for the initialized sort.\n  */\n  ngAfterViewInit() {\n    this.dataSource.sort = this.sort;\n  }\n}\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\n\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n.mat-header-cell.mat-sort-header-sorted {\n  color: black;\n}",
    viewCode: "",
    isCodeVisible: false
};
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
var SortHeaderComponent = /** @class */ (function () {
    function SortHeaderComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new material_1.MatTableDataSource(ELEMENT_DATA);
        this.desserts = [
            { name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4' },
        ];
        this.sortedData = this.desserts.slice();
    }
    SortHeaderComponent.prototype.ngOnInit = function () {
        this.exampleBasic = basic;
        this.exampleConfig = config;
    };
    SortHeaderComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort2;
    };
    SortHeaderComponent.prototype.sortData = function (_sort) {
        var data = this.desserts.slice();
        if (!_sort.active || _sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = _sort.direction === 'asc';
            switch (_sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(+a.calories, +b.calories, isAsc);
                case 'fat': return compare(+a.fat, +b.fat, isAsc);
                case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
                case 'protein': return compare(+a.protein, +b.protein, isAsc);
                default: return 0;
            }
        });
    };
    __decorate([
        core_1.ViewChild('sort1'),
        __metadata("design:type", material_1.MatSort)
    ], SortHeaderComponent.prototype, "sort1", void 0);
    __decorate([
        core_1.ViewChild('sort2'),
        __metadata("design:type", material_1.MatSort)
    ], SortHeaderComponent.prototype, "sort2", void 0);
    SortHeaderComponent = __decorate([
        core_1.Component({
            selector: 'kt-sort-header',
            templateUrl: './sort-header.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.mat-sort-header-container {\n\t\talign-items: center;\n\t  }\n\t  .example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-width: 300px;\n\t  }\n\t  .mat-table {\n\t\toverflow: auto;\n\t\tmax-height: 500px;\n\t  }\n\t  .mat-header-cell.mat-sort-header-sorted {\n\t\tcolor: black;\n\t  }\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], SortHeaderComponent);
    return SortHeaderComponent;
}());
exports.SortHeaderComponent = SortHeaderComponent;
//# sourceMappingURL=sort-header.component.js.map