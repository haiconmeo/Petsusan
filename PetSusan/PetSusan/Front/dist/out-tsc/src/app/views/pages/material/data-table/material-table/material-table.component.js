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
var collections_1 = require("@angular/cdk/collections");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var basic = {
    beforeCodeTitle: 'Basic table',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!--- Note that these columns can be defined in any order.\n\t\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n\t</ng-container>\n\t<!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic table\n*/\n@Component({\n  selector: 'table-basic-example',\n  styleUrls: ['table-basic-example.css'],\n  templateUrl: 'table-basic-example.html',\n})\nexport class TableBasicExample {\n  displayedColumns = ['position', 'name', 'weight', 'symbol'];\n  dataSource = ELEMENT_DATA;\n}\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var pagination = {
    beforeCodeTitle: 'Table with pagination',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator #paginator\n    [pageSize]=\"10\"\n    [pageSizeOptions]=\"[5, 10, 20]\"\n    [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n</div>\n\t\t",
    tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {MatPaginator, MatTableDataSource} from '@angular/material';\n\n/**\n* @title Table with pagination\n*/\n@Component({\n  selector: 'table-pagination-example',\n  styleUrls: ['table-pagination-example.css'],\n  templateUrl: 'table-pagination-example.html',\n})\nexport class TablePaginationExample {\n  displayedColumns = ['position', 'name', 'weight', 'symbol'];\n  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);\n\n  @ViewChild(MatPaginator) paginator: MatPaginator;\n\n  /**\n  * Set the paginator after the view init since this component will\n  * be able to query its view for the initialized paginator.\n  */\n  ngAfterViewInit() {\n    this.dataSource.paginator = this.paginator;\n  }\n}\n\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\n\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var sorting = {
    beforeCodeTitle: 'Table with sorting',
    beforeCodeDescription: "",
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>",
    tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {MatTableDataSource, MatSort} from '@angular/material';\n\n/**\n* @title Table with sorting\n*/\n@Component({\n  selector: 'table-sorting-example',\n  styleUrls: ['table-sorting-example.css'],\n  templateUrl: 'table-sorting-example.html',\n})\nexport class TableSortingExample {\n  displayedColumns = ['position', 'name', 'weight', 'symbol'];\n  dataSource = new MatTableDataSource(ELEMENT_DATA);\n\n  @ViewChild(MatSort) sort: MatSort;\n\n\n  /**\n  * Set the sort after the view init since this component will\n  * be able to query its view for the initialized sort.\n  */\n  ngAfterViewInit() {\n    this.dataSource.sort = this.sort;\n  }\n}\n\n\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\n\n\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n.mat-header-cell.mat-sort-header-sorted {\n  color: black;\n}",
    viewCode: "",
    isCodeVisible: false
};
var filtering = {
    beforeCodeTitle: 'Table with filtering',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </div>\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatTableDataSource} from '@angular/material';\n\n\n/**\n* @title Table with filtering\n*/\n@Component({\n  selector: 'table-filtering-example',\n  styleUrls: ['table-filtering-example.css'],\n  templateUrl: 'table-filtering-example.html',\n})\nexport class TableFilteringExample {\n  displayedColumns = ['position', 'name', 'weight', 'symbol'];\n  dataSource = new MatTableDataSource(ELEMENT_DATA);\n\n\n  applyFilter(filterValue: string) {\n    filterValue = filterValue.trim(); // Remove whitespace\n    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches\n    this.dataSource.filter = filterValue;\n  }\n}\n\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\n\n\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    cssCode: "\n/* Structure */\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}",
    viewCode: "",
    isCodeVisible: false
};
var selection = {
    beforeCodeTitle: 'Table with selection',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n          [checked]=\"selection.hasValue() && isAllSelected()\"\n          [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n          (change)=\"$event ? selection.toggle(row) : null\"\n          [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n      (click)=\"selection.toggle(row)\">\n    </mat-row>\n  </mat-table>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {MatTableDataSource} from '@angular/material';\nimport {SelectionModel} from '@angular/cdk/collections';\n\n/**\n* @title Table with selection\n*/\n@Component({\n  selector: 'table-selection-example',\n  styleUrls: ['table-selection-example.css'],\n  templateUrl: 'table-selection-example.html',\n})\nexport class TableSelectionExample {\n  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];\n  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);\n  selection = new SelectionModel<Element>(true, []);\n\n  /** Whether the number of selected elements matches the total number of rows. */\n  isAllSelected() {\n    const numSelected = this.selection.selected.length;\n    const numRows = this.dataSource.data.length;\n    return numSelected === numRows;\n  }\n\n  /** Selects all rows if they are not all selected; otherwise clear selection. */\n  masterToggle() {\n    this.isAllSelected() ?\n    this.selection.clear() :\n    this.dataSource.data.forEach(row => this.selection.select(row));\n  }\n}\n\nexport interface Element {\n  name: string;\n  position: number;\n  weight: number;\n  symbol: string;\n}\n\nconst ELEMENT_DATA: Element[] = [\n  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},\n  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},\n  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},\n  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},\n  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},\n  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},\n  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},\n  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},\n  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},\n  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},\n  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},\n  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},\n  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},\n  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},\n  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},\n  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},\n  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},\n  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},\n  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},\n  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},\n];",
    viewCode: "",
    isCodeVisible: false
};
var main = {
    beforeCodeTitle: 'Data table with sorting, pagination, and filtering.',
    htmlCode: "\n<div class=\"example-header\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" matSort>\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>",
    tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';\n\n/**\n* @title Data table with sorting, pagination, and filtering.\n*/\n@Component({\n  selector: 'table-overview-example',\n  styleUrls: ['table-overview-example.css'],\n  templateUrl: 'table-overview-example.html',\n})\nexport class TableOverviewExample {\n  displayedColumns = ['id', 'name', 'progress', 'color'];\n  dataSource: MatTableDataSource<UserData>;\n\n  @ViewChild(MatPaginator) paginator: MatPaginator;\n  @ViewChild(MatSort) sort: MatSort;\n\n  constructor() {\n    // Create 100 users\n    const users: UserData[] = [];\n      for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }\n\n      // Assign the data to the data source for the table to render\n      this.dataSource = new MatTableDataSource(users);\n  }\n\n  /**\n  * Set the paginator and sort after the view init since this component will\n  * be able to query its view for the initialized paginator and sort.\n  */\n  ngAfterViewInit() {\n    this.dataSource.paginator = this.paginator;\n    this.dataSource.sort = this.sort;\n  }\n\n  applyFilter(filterValue: string) {\n    filterValue = filterValue.trim(); // Remove whitespace\n    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches\n    this.dataSource.filter = filterValue;\n  }\n}\n\n\n/** Builds and returns a new User. */\nfunction createNewUser(id: number): UserData {\n  const name =\n    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +\n    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';\n\n\n  return {\n    id: id.toString(),\n    name: name,\n    progress: Math.round(Math.random() * 100).toString(),\n    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]\n   };\n}\n\n\n/** Constants used to fill up our data base. */\nconst COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',\n  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];\nconst NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',\n  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',\n  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];\n\nexport interface UserData {\n  id: string;\n  name: string;\n  progress: string;\n  color: string;\n}",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var hTTP = {
    beforeCodeTitle: 'Table retrieving data through HTTP',
    htmlCode: "\n<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n    *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n\t  GitHub's API rate limit has been reached. It will be reset in one minute.\n    </div>\n  </div>\n  <mat-table #table [dataSource]=\"dataSource\" class=\"example-table\"\n    matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\">\n    <!--- Note that these columns can be defined in any order.\n    The actual rendered columns are set as a property on the row definition\" -->\n    <!-- Number Column -->\n    <ng-container matColumnDef=\"number\">\n      <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{ row.number }}</mat-cell>\n    </ng-container>\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{ row.title }}</mat-cell>\n    </ng-container>\n    <!-- State Column -->\n    <ng-container matColumnDef=\"state\">\n      <mat-header-cell *matHeaderCellDef>State</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{ row.state }}</mat-cell>\n    </ng-container>\n    <!-- Created Column -->\n    <ng-container matColumnDef=\"created\">\n      <mat-header-cell *matHeaderCellDef\n        mat-sort-header\n        disableClear=\"true\">\n        Created\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{ row.created_at | date }}</mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\">\n  </mat-paginator>\n </div>",
    tsCode: "\nimport {Component, OnInit, ViewChild} from '@angular/core';\nimport {HttpClient} from '@angular/common/http';\nimport {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';\nimport {Observable} from 'rxjs/Observable';\nimport {merge} from 'rxjs/observable/merge';\nimport {of as observableOf} from 'rxjs/observable/of';\nimport {catchError} from 'rxjs/operators/catchError';\nimport {map} from 'rxjs/operators/map';\nimport {startWith} from 'rxjs/operators/startWith';\nimport {switchMap} from 'rxjs/operators/switchMap';\n\n/**\n* @title Table retrieving data through HTTP\n*/\n@Component({\n  selector: 'table-http-example',\n  styleUrls: ['table-http-example.css'],\n  templateUrl: 'table-http-example.html',\n})\nexport class TableHttpExample implements OnInit {\n  displayedColumns = ['created', 'state', 'number', 'title'];\n  exampleDatabase: ExampleHttpDao | null;\n  dataSource = new MatTableDataSource();\n\n  resultsLength = 0;\n  isLoadingResults = true;\n  isRateLimitReached = false;\n\n  @ViewChild(MatPaginator) paginator: MatPaginator;\n  @ViewChild(MatSort) sort: MatSort;\n\n  constructor(private http: HttpClient) {}\n\n  ngOnInit() {\n    this.exampleDatabase = new ExampleHttpDao(this.http);\n\n\n    // If the user changes the sort order, reset back to the first page.\n\tthis.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);\n\n    merge(this.sort.sortChange, this.paginator.page)\n      .pipe(\n        startWith({}),\n\t    switchMap(() => {\n          this.isLoadingResults = true;\n\t\t\t  return this.exampleDatabase!.getRepoIssues(\n          this.sort.active, this.sort.direction, this.paginator.pageIndex);\n        }),\n        map(data => {\n        // Flip flag to show that loading has finished.\n          this.isLoadingResults = false;\n          this.isRateLimitReached = false;\n          this.resultsLength = data.total_count;\n\n\n          return data.items;\n        }),\n        catchError(() => {\n          this.isLoadingResults = false;\n          // Catch if the GitHub API has reached its rate limit. Return empty data.\n          this.isRateLimitReached = true;\n            return observableOf([]);\n      })\n    ).subscribe(data => this.dataSource.data = data);\n  }\n}\n\n\nexport interface GithubApi {\n  items: GithubIssue[];\n  total_count: number;\n}\n\nexport interface GithubIssue {\n  created_at: string;\n  number: string;\n  state: string;\n  title: string;\n}\n\n/** An example database that the data source uses to retrieve data for the table. */\nexport class ExampleHttpDao {\n  constructor(private http: HttpClient) {}\n  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {\n    const href = 'https://api.github.com/search/issues';\n    const requestUrl =\n    `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;\n\n    return this.http.get<GithubApi>(requestUrl);\n  }\n}",
    cssCode: "\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  position: relative;\n}\n.example-header {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n.example-table {\n  overflow: auto;\n  min-height: 300px;\n}\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n.mat-column-created {\n  max-width: 124px;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
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
];
var ELEMENT_DATA2 = [
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
/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (sort, order, page) {
        var href = 'https://api.github.com/search/issues';
        var requestUrl = href + "?q=repo:angular/material2&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this.http.get(requestUrl);
    };
    return ExampleHttpDao;
}());
exports.ExampleHttpDao = ExampleHttpDao;
/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
var MaterialTableComponent = /** @class */ (function () {
    function MaterialTableComponent(http) {
        this.http = http;
        this.displayedColumns1 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns2 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns3 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns4 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns5 = ['select', 'position', 'name', 'weight', 'symbol'];
        this.displayedColumns6 = ['created', 'state', 'number', 'title'];
        this.displayedColumns7 = ['id', 'name', 'progress', 'color'];
        this.dataSource1 = ELEMENT_DATA;
        this.dataSource2 = new material_1.MatTableDataSource(ELEMENT_DATA2);
        this.dataSource3 = new material_1.MatTableDataSource(ELEMENT_DATA);
        this.dataSource4 = new material_1.MatTableDataSource(ELEMENT_DATA);
        this.dataSource5 = new material_1.MatTableDataSource(ELEMENT_DATA);
        this.dataSource6 = [];
        this.selection = new collections_1.SelectionModel(true, []);
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        // Assign the data to the data source for the table to render
        this.dataSource7 = new material_1.MatTableDataSource(users);
    }
    MaterialTableComponent.prototype.ngAfterViewInit = function () {
    };
    MaterialTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleBasic = basic;
        this.examplePagination = pagination;
        this.exampleSorting = sorting;
        this.exampleFiltering = filtering;
        this.exampleSelection = selection;
        this.exampleHTTP = hTTP;
        this.exampleMain = main;
        this.dataSource2.paginator = this.paginator2;
        this.dataSource3.sort = this.sort3;
        // Example 6
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort6.sortChange.subscribe(function () { return _this.paginator6.pageIndex = 0; });
        rxjs_1.merge(this.sort6.sortChange, this.paginator6.page)
            .pipe(operators_1.startWith({}), operators_1.switchMap(function () {
            _this.isLoadingResults = true;
            // tslint:disable-next-line:no-non-null-assertion
            return _this.exampleDatabase.getRepoIssues(_this.sort6.active, _this.sort6.direction, _this.paginator6.pageIndex);
        }), operators_1.map(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data.total_count;
            return data.items;
        }), operators_1.catchError(function () {
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return rxjs_1.of([]);
        })).subscribe(function (data) { return _this.dataSource6 = data; });
        // Example 7
        this.dataSource7.paginator = this.paginator7;
        this.dataSource7.sort = this.sort7;
    };
    MaterialTableComponent.prototype.applyFilter4 = function (filterValue) {
        this.dataSource4.filter = filterValue.trim().toLowerCase();
    };
    MaterialTableComponent.prototype.applyFilter7 = function (filterValue) {
        this.dataSource7.filter = filterValue.trim().toLowerCase();
        if (this.dataSource7.paginator) {
            this.dataSource7.paginator.firstPage();
        }
    };
    /** Whether the number of selected elements matches the total number of rows. */
    MaterialTableComponent.prototype.isAllSelected5 = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource5.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    MaterialTableComponent.prototype.masterToggle5 = function () {
        var _this = this;
        this.isAllSelected5() ?
            this.selection.clear() :
            this.dataSource5.data.forEach(function (row) { return _this.selection.select(row); });
    };
    __decorate([
        core_1.ViewChild('matPaginator2'),
        __metadata("design:type", material_1.MatPaginator)
    ], MaterialTableComponent.prototype, "paginator2", void 0);
    __decorate([
        core_1.ViewChild('matPaginator6'),
        __metadata("design:type", material_1.MatPaginator)
    ], MaterialTableComponent.prototype, "paginator6", void 0);
    __decorate([
        core_1.ViewChild('matPaginator7'),
        __metadata("design:type", material_1.MatPaginator)
    ], MaterialTableComponent.prototype, "paginator7", void 0);
    __decorate([
        core_1.ViewChild('sort3'),
        __metadata("design:type", material_1.MatSort)
    ], MaterialTableComponent.prototype, "sort3", void 0);
    __decorate([
        core_1.ViewChild('sort6'),
        __metadata("design:type", material_1.MatSort)
    ], MaterialTableComponent.prototype, "sort6", void 0);
    __decorate([
        core_1.ViewChild('sort7'),
        __metadata("design:type", material_1.MatSort)
    ], MaterialTableComponent.prototype, "sort7", void 0);
    MaterialTableComponent = __decorate([
        core_1.Component({
            selector: 'kt-material-table',
            templateUrl: './material-table.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.Default,
            styles: ["\n\t.example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmax-height: 500px;\n\t\tmin-width: 300px;\n\t\tposition: relative;\n\t  }\n\n\t  .mat-table {\n\t\toverflow: auto;\n\t\tmax-height: 500px;\n\t  }\n\n\t  .mat-header-cell.mat-sort-header-sorted {\n\t\tcolor: black;\n\t  }\n\n\t  .example-header {\n\t\tmin-height: 64px;\n\t\tpadding: 8px 24px 0;\n\t  }\n\n\t  .mat-form-field {\n\t\tfont-size: 14px;\n\t\twidth: 100%;\n\t  }\n\n\t  .mat-table {\n\t\toverflow: auto;\n\t\tmax-height: 500px;\n\t  }\n\t  .mat-column-select {\n\t\toverflow: initial;\n\t  }\n\t  .example-header {\n\t\tmin-height: 64px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding-left: 24px;\n\t\tfont-size: 20px;\n\t  }\n\n\t  .example-table {\n\t\toverflow: auto;\n\t\tmin-height: 300px;\n\t  }\n\n.example-loading-shade {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 56px;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.15);\n\tz-index: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n  }\n\n  .example-rate-limit-reached {\n\tcolor: #980000;\n\tmax-width: 360px;\n\ttext-align: center;\n  }\n\n  /* Column Widths */\n  .mat-column-number,\n  .mat-column-state {\n\tmax-width: 64px;\n  }\n\n  .mat-column-created {\n\tmax-width: 124px;\n  }\n\t"]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MaterialTableComponent);
    return MaterialTableComponent;
}());
exports.MaterialTableComponent = MaterialTableComponent;
//# sourceMappingURL=material-table.component.js.map