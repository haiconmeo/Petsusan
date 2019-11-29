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
var ng_bootstrap_2 = require("@ng-bootstrap/ng-bootstrap");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var wikipedia_service_1 = require("./wikipedia.service");
var simpleTypeahead = {
    beforeCodeTitle: 'Simple Typeahead',
    htmlCode: "\n<div class=\"kt-section\">\n<div class=\"kt-section__sub\">\nA typeahead example that gets values from a static\n<code>string[]</code>\n<ul>\n  <li>\n\t<code>debounceTime</code> operator\n  </li>\n  <li>kicks in only if 2+ characters typed</li>\n  <li>limits to 10 results</li>\n</ul>\n</div>\n<div class=\"kt-section__content\">\n<label for=\"typeahead-basic\">Search for a state:</label>\n<input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\n</div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n<div class=\"kt-section__sub\">\n<pre>Model: {{ model | json }}</pre>\n</div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\nselector: 'ngbd-typeahead-basic',\ntemplateUrl: './typeahead-basic.html',\nstyles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadBasic {\npublic model: any;\n\n  search = (text$: Observable<string>) =>\n  text$.pipe(\n    debounceTime(200),\n    distinctUntilChanged(),\n    map(term => term.length < 2 ? [] : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))\n  );\n}\n",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var openOnFocus = {
    beforeCodeTitle: 'Open on focus',
    htmlCode: "\n<div class=\"kt-section\">\n<div class=\"kt-section__sub\">\nIt is possible to get the focus events with the current input value to emit results on focus with a great flexibility.\nIn this simple example, a search is done no matter the content of the input:\n<ul>\n  <li>on empty input all options will be taken</li>\n  <li>otherwise options will be filtered against the search term</li>\n  <li>it will limit the display to 10 results in all cases</li>\n</ul>\n</div>\n<div class=\"kt-section__content\">\n<label for=\"typeahead-focus\">Search for a state:</label>\n<input id=\"typeahead-focus\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\"\n  (focus)=\"focus$.next($event.target.value)\" (click)=\"click$.next($event.target.value)\" #instance=\"ngbTypeahead\" />\n</div>\n</div>\n\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n<div class=\"kt-section__sub\">\n<pre>Model: {{ model | json }}</pre>\n</div>\n</div>\n",
    tsCode: "\nimport {Component, ViewChild} from '@angular/core';\nimport {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';\nimport {Observable} from 'rxjs/Observable';\nimport {Subject} from 'rxjs/Subject';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/merge';\nimport 'rxjs/add/operator/filter';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\nselector: 'ngbd-typeahead-focus',\ntemplateUrl: './typeahead-focus.html',\nstyles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadFocus {\nmodel: any;\n\n@ViewChild('instance') instance: NgbTypeahead;\nfocus$ = new Subject<string>();\nclick$ = new Subject<string>();\n\nsearch = (text$: Observable<string>) => {\n  const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());\n  const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));\n  const inputFocus$ = this.focus$;\n\n\n  return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(\n    map(term => (term === '' ? states\n      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))\n  );\n}\n\n",
    viewCode: "",
    isCodeVisible: false
};
var formattedResults = {
    beforeCodeTitle: 'Formatted results',
    htmlCode: "\n<div class=\"kt-section\">\n<div class=\"kt-section__sub\">\nA typeahead example that uses a formatter function for string results\n</div>\n<div class=\"kt-section__content\">\n<label for=\"typeahead-format\">Search for a state:</label>\n<input id=\"typeahead-format\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\"\n  [resultFormatter]=\"formatter\" />\n</div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n<div class=\"kt-section__sub\">\n<pre>Model: {{ model | json }}</pre>\n</div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\nselector: 'ngbd-typeahead-format',\ntemplateUrl: './typeahead-format.html',\nstyles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadFormat {\n  public model: any;\n\n  formatter = (result: string) => result.toUpperCase();\n\n  search = (text$: Observable<string>) =>\n    text$.pipe(\n      debounceTime(200),\n      distinctUntilChanged(),\n      map(term => term === '' ? []\n        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))\n    );\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var wikipediaSearch = {
    beforeCodeTitle: 'Wikipedia search',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    A typeahead example that gets values from the\n    <code>WikipediaService</code>\n    <ul>\n      <li>remote data retrieval</li>\n      <li><code>debounceTime</code> operator</li>\n      <li><code>do</code> operator</li>\n      <li><code>distinctUntilChanged</code> operator</li>\n      <li><code>switchMap</code> operator</li>\n      <li><code>catch</code> operator to display an error message in case of connectivity issue</li>\n    </ul>\n  </div>\n  <div class=\"kt-section__content\">\n    <div class=\"form-group\">\n      <label for=\"typeahead-http\">Search for a wiki page:</label>\n      <input id=\"typeahead-http\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"searchFailed\" [(ngModel)]=\"model\"\n       [ngbTypeahead]=\"search\" placeholder=\"Wikipedia search\" />\n      <span *ngIf=\"searching\">searching...</span>\n      <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\n    </div>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, Injectable} from '@angular/core';\nimport {HttpClient, HttpParams} from '@angular/common/http';\nimport {Observable} from 'rxjs/Observable';\nimport {of} from 'rxjs/observable/of';\nimport 'rxjs/add/operator/catch';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged';\nimport 'rxjs/add/operator/do';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/switchMap';\nimport 'rxjs/add/operator/merge';\n\nconst WIKI_URL = 'https://en.wikipedia.org/w/api.php';\nconst PARAMS = new HttpParams({\n  fromObject: {\n    action: 'opensearch',\n    format: 'json',\n    origin: '*'\n  }\n});\n\n@Injectable()\nexport class WikipediaService {\nconstructor(private http: HttpClient) {}\n\n  search(term: string) {\n    if (term === '') {\n      return of([]);\n    }\n\n    return this.http\n      .get(WIKI_URL, {params: PARAMS.set('search', term)})\n      .map(response => response[1]);\n  }\n}\n\n@Component({\n  selector: 'ngbd-typeahead-http',\n  templateUrl: './typeahead-http.html',\n  providers: [WikipediaService],\n  styles: [`.form-control { width: 300px; display: inline; }`]\n})\nexport class NgbdTypeaheadHttp {\n  model: any;\n  searching = false;\n  searchFailed = false;\n  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);\n\n  constructor(private _service: WikipediaService) {}\n\n  search = (text$: Observable<string>) =>\n    text$.pipe(\n      debounceTime(300),\n      distinctUntilChanged(),\n      tap(() => this.searching = true),\n      switchMap(term =>\n        this._service.search(term).pipe(\n        tap(() => this.searchFailed = false),\n        catchError(() => {\n\t\t  this.searchFailed = true;\n          return of([]);\n        }))\n    ),\n    tap(() => this.searching = false)\n  );\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var templateForResults = {
    beforeCodeTitle: 'Template for results',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    A typeahead example that uses custom template for results display and uses object as a model\n  </div>\n  <div class=\"kt-section__content\">\n    <ng-template #rt let-r=\"result\" let-t=\"term\">\n      <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r['flag']\" width=\"16\"> {{ r.name}}\n    </ng-template>\n    <label for=\"typeahead-template\">Search for a state:</label>\n\t<input id=\"typeahead-template\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\"\n      [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" />\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    <pre>Model: {{ model | json }}</pre>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/map';\n\nconst statesWithFlags = [\n  {'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},\n  {'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},\n  {'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},\n  {'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},\n  {'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},\n  {'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},\n  {'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},\n  {'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},\n  {'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},\n  {\n    'name': 'Georgia',\n    'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'\n  },\n  {'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},\n  {'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},\n  {'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},\n  {'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},\n  {'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},\n  {'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},\n  {'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},\n  {'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},\n  {'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},\n  {'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},\n  {'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},\n  {'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},\n  {'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},\n  {'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},\n  {'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},\n  {'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},\n  {'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},\n  {'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},\n  {'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},\n  {'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},\n  {'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},\n  {'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},\n  {'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},\n  {'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},\n  {'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},\n  {'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},\n  {'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},\n  {'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},\n  {'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},\n  {'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},\n  {'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},\n  {'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},\n  {'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},\n  {'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},\n  {'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},\n  {'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},\n  {'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},\n  {'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},\n  {'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},\n  {'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}\n]; \n\n@Component({\n  selector: 'ngbd-typeahead-template',\n  templateUrl: './typeahead-template.html',\n  styles: [`.form-control { width: 300px; }`]\n})\nexport class NgbdTypeaheadTemplate {\n  public model: any;\n\n  search = (text$: Observable<string>) =>\n  text$.pipe(\n\tdebounceTime(200),\n    map(term => term === '' ? []\n      : statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))\n  );\n\n  formatter = (x: {name: string}) => x.name;\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfTypeaheads = {
    beforeCodeTitle: 'Global configuration of progress typeaheads',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    This typeahead shows a hint when the input matches because the default values have been customized.\n  </div>\n  <div class=\"kt-section__content\">\n    <label for=\"typeahead-config\">Search for a state:</label>\n    <input id=\"typeahead-config\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {Observable} from 'rxjs/Observable';\nimport {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/debounceTime';\nimport 'rxjs/add/operator/distinctUntilChanged'; \n\nconst states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',\n  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',\n  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',\n  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',\n  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',\n  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',\n  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n\n@Component({\n  selector: 'ngbd-typeahead-config',\n  templateUrl: './typeahead-config.html',\n  styles: [`.form-control { width: 300px; }`],\n  providers: [NgbTypeaheadConfig] // add NgbTypeaheadConfig to the component providers\n})\nexport class NgbdTypeaheadConfig {\n  public model: any;\n\n  constructor(config: NgbTypeaheadConfig) {\n    // customize default values of typeaheads used by this component tree\n    config.showHint = true;\n  } \n\n  search = (text$: Observable<string>) =>\n    text$.pipe(\n\t  debounceTime(200),\n      distinctUntilChanged(),\n      map(term => term.length < 2 ? []\n        : states.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))\n  );\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var statesWithFlags = [
    { 'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { 'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { 'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
    { 'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { 'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { 'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { 'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { 'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
    { 'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    {
        'name': 'Georgia',
        'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
    },
    { 'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { 'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { 'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { 'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { 'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { 'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { 'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { 'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { 'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { 'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { 'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { 'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { 'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { 'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { 'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { 'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { 'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { 'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { 'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { 'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { 'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { 'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { 'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { 'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { 'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { 'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { 'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { 'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { 'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { 'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { 'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { 'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { 'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { 'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { 'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { 'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { 'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { 'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { 'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { 'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
];
var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var TypeheadComponent = /** @class */ (function () {
    function TypeheadComponent(_service, config) {
        var _this = this;
        this._service = _service;
        this.focus$ = new rxjs_1.Subject();
        this.click$ = new rxjs_1.Subject();
        this.searching = false;
        this.searchFailed = false;
        this.search6 = function (text$) {
            return text$.pipe(operators_1.debounceTime(200), operators_1.distinctUntilChanged(), operators_1.map(function (term) { return term.length < 2 ? []
                : states.filter(function (v) { return v.toLowerCase().startsWith(term.toLocaleLowerCase()); }).splice(0, 10); })
            // tslint:disable-next-line:semicolon
            );
        };
        this.search5 = function (text$) {
            return text$.pipe(operators_1.debounceTime(200), operators_1.map(function (term) { return term === '' ? []
                : statesWithFlags.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter3 = function (result) { return result.toUpperCase(); };
        this.formatter = function (x) { return x.name; };
        this.search4 = function (text$) {
            return text$.pipe(operators_1.debounceTime(300), operators_1.distinctUntilChanged(), operators_1.tap(function () { return _this.searching = true; }), operators_1.switchMap(function (term) {
                return _this._service.search(term).pipe(operators_1.tap(function () { return _this.searchFailed = false; }), operators_1.catchError(function () {
                    _this.searchFailed = true;
                    return rxjs_1.of([]);
                }));
            }), operators_1.tap(function () { return _this.searching = false; }));
        };
        this.search3 = function (text$) {
            return text$.pipe(operators_1.debounceTime(200), operators_1.distinctUntilChanged(), operators_1.map(function (term) { return term === '' ? []
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.search2 = function (text$) {
            var debouncedText$ = text$.pipe(operators_1.debounceTime(200), operators_1.distinctUntilChanged());
            var clicksWithClosedPopup$ = _this.click$.pipe(operators_1.filter(function () { return !_this.instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$;
            return rxjs_1.merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(operators_1.map(function (term) { return (term === '' ? states
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
        };
        this.search = function (text$) { return (text$.pipe(operators_1.debounceTime(200), operators_1.distinctUntilChanged(), operators_1.map(function (term) { return term.length < 2 ? [] : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }))); };
    }
    TypeheadComponent.prototype.ngOnInit = function () {
        this.exampleSimpleTypeahead = simpleTypeahead;
        this.exampleOpenOnFocus = openOnFocus;
        this.exampleFormattedResults = formattedResults;
        this.exampleWikipediaSearch = wikipediaSearch;
        this.exampleTemplateForResults = templateForResults;
        this.exampleGlobalConfigurationOfTypeaheads = globalConfigurationOfTypeaheads;
    };
    __decorate([
        core_1.ViewChild('instance'),
        __metadata("design:type", ng_bootstrap_1.NgbTypeahead)
    ], TypeheadComponent.prototype, "instance", void 0);
    TypeheadComponent = __decorate([
        core_1.Component({
            selector: 'kt-typehead',
            templateUrl: './typehead.component.html',
            styles: [".form-control { width: 300px; }"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [wikipedia_service_1.WikipediaService, ng_bootstrap_2.NgbTypeaheadConfig],
        }),
        __metadata("design:paramtypes", [wikipedia_service_1.WikipediaService, ng_bootstrap_2.NgbTypeaheadConfig])
    ], TypeheadComponent);
    return TypeheadComponent;
}());
exports.TypeheadComponent = TypeheadComponent;
//# sourceMappingURL=typehead.component.js.map