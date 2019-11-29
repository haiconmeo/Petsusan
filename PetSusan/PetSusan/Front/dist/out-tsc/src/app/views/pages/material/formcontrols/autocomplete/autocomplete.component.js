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
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var simpleAutocomplete = {
    beforeCodeTitle: 'Simple autocomplete',
    htmlCode: "<form class=\"example-full-width\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\"\n      matInput [formControl]=\"myControl\"\n      [matAutocomplete]=\"auto\">\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n          {{ option }}\n        </mat-option>\n       </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
    tsCode: "\nimport {FormControl} from '@angular/forms';\nimport {Component} from '@angular/core';\n\n/**\n* @title Simple autocomplete\n*/\n@Component({\n    selector: 'autocomplete-simple-example',\n    templateUrl: 'autocomplete-simple-example.html',\n    styleUrls: ['autocomplete-simple-example.css']\n})\nexport class AutocompleteSimpleExample {\n    myControl: FormControl = new FormControl();\n    options = [\n        'One',\n        'Two',\n        'Three'\n    ];\n}",
    cssCode: ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n.example-full-width {\n    width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var addingACustomFilter = {
    beforeCodeTitle: 'Adding a custom filter',
    htmlCode: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n          {{ option }}\n        </mat-option>\n      </mat-autocomplete>\n  </mat-form-field>\n</form>",
    tsCode: "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {Observable} from 'rxjs/Observable';\nimport {startWith} from 'rxjs/operators/startWith';\nimport {map} from 'rxjs/operators/map';\n\n/**\n* @title Filter autocomplete\n*/\n@Component({\n  selector: 'autocomplete-filter-example',\n  templateUrl: 'autocomplete-filter-example.html',\n  styleUrls: ['autocomplete-filter-example.css']\n})\nexport class AutocompleteFilterExample {\n\n  myControl: FormControl = new FormControl();\n\n  options = [\n    'One',\n    'Two',\n\t'Three'\n  ];\n\n  filteredOptions: Observable<string[]>;\n\n  ngOnInit() {\n    this.filteredOptions = this.myControl.valueChanges\n      .pipe(\n        startWith(''),\n         map(val => this.filter(val))\n      );\n  }\n\n  filter(val: string): string[] {\n    return this.options.filter(option =>\n\t\toption.toLowerCase().includes(val.toLowerCase()));\n  }\n}",
    cssCode: ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false
};
var settingSeparateControlAndDisplayValues = {
    beforeCodeTitle: 'Setting separate control and display valuess',
    beforeCodeDescription: "",
    htmlCode: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{ option.name }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>",
    tsCode: "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {Observable} from 'rxjs/Observable';\nimport {startWith} from 'rxjs/operators/startWith';\nimport {map} from 'rxjs/operators/map';\n\nexport class User {\n  constructor(public name: string) { }\n}\n/**\n* @title Display value autocomplete\n*/\n@Component({\n  selector: 'autocomplete-display-example',\n  templateUrl: 'autocomplete-display-example.html',\n  styleUrls: ['autocomplete-display-example.css']\n})\nexport class AutocompleteDisplayExample {\n\n  myControl = new FormControl();\n\n  options = [\n    new User('Mary'),\n    new User('Shelley'),\n    new User('Igor')\n  ];\n\n  filteredOptions: Observable<User[]>;\n\n  ngOnInit() {\n    this.filteredOptions = this.myControl.valueChanges\n      .pipe(\n        startWith<string | User>(''),\n        map(value => typeof value === 'string' ? value : value.name),\n        map(name => name ? this.filter(name) : this.options.slice())\n      );\n  }\n\n  filter(name: string): User[] {\n    return this.options.filter(option =>\n      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);\n  }\n\n  displayFn(user?: User): string | undefined {\n    return user ? user.name : undefined;\n  }\n\n}",
    cssCode: ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false
};
var automaticallyHighlightingTheFirstOption = {
    beforeCodeTitle: 'Automatically highlighting the first option',
    htmlCode: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{ option }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>",
    tsCode: "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {Observable} from 'rxjs/Observable';\nimport {startWith} from 'rxjs/operators/startWith';\nimport {map} from 'rxjs/operators/map';\n/**\n* @title Highlight the first autocomplete option\n*/\n@Component({\n  selector: 'autocomplete-auto-active-first-option-example',\n  templateUrl: 'autocomplete-auto-active-first-option-example.html',\n  styleUrls: ['autocomplete-auto-active-first-option-example.css']\n})\nexport class AutocompleteAutoActiveFirstOptionExample {\n  myControl: FormControl = new FormControl();\n  options = ['One', 'Two', 'Three'];\n  filteredOptions: Observable<string[]>;\n\n  ngOnInit() {\n    this.filteredOptions = this.myControl.valueChanges.pipe(\n      startWith(''),\n      map(val => this.filter(val))\n    );\n\n  filter(val: string): string[] {\n    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);\n  }\n\n}",
    cssCode: ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}",
    viewCode: "",
    isCodeVisible: false
};
var autocompleteOverview = {
    beforeCodeTitle: 'Autocomplete overview',
    htmlCode: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\n        <span>{{ state.name }}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n  <br />\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>",
    tsCode: "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\nimport {Observable} from 'rxjs/Observable';\nimport {startWith} from 'rxjs/operators/startWith';\nimport {map} from 'rxjs/operators/map';\n\nexport class State {\n  constructor(public name: string, public population: string, public flag: string) { }\n}\n\n/**\n * @title Autocomplete overview\n*/\n@Component({\n  selector: 'autocomplete-overview-example',\n  templateUrl: 'autocomplete-overview-example.html',\n  styleUrls: ['autocomplete-overview-example.css']\n})\nexport class AutocompleteOverviewExample {\n  stateCtrl: FormControl;\n  filteredStates: Observable<any[]>;\n  states: State[] = [\n  {\n    name: 'Arkansas',\n    population: '2.978M',\n    // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg\n    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'\n  },\n  {\n\tname: 'California',\n    population: '39.14M',\n    // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg\n    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'\n  },\n  {\n    name: 'Florida',\n\tpopulation: '20.27M',\n\t// https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg\n\tflag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'\n  },\n  {\n    name: 'Texas',\n    population: '27.47M',\n    // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg\n    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'\n  }\n];\n  constructor() {\n    this.stateCtrl = new FormControl();\n     this.filteredStates = this.stateCtrl.valueChanges\n      .pipe(\n        startWith(''),\n        map(state => state ? this.filterStates(state) : this.states.slice())\n      );\n}\n  filterStates(name: string) {\n    return this.states.filter(state =>\n      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);\n  }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var optionGroupsAutocomplete = {
    beforeCodeTitle: 'Option groups autocomplete',
    htmlCode: "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\"/>\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{ name }}\n          </mat-option>\n        </mat-optgroup>\n      </mat-autocomplete>\n  </mat-form-field>\n</form>  ",
    tsCode: "import {Component, OnInit} from '@angular/core';\nimport {FormGroup, FormBuilder} from '@angular/forms';\nimport {Observable} from 'rxjs';\nimport {startWith, map} from 'rxjs/operators';\n\nexport interface StateGroup {\n  letter: string;\n  names: string[];\n}\n\n/**\n* @title Option groups autocomplete\n*/\n@Component({\n  templateUrl: './autocomplete-optgroup-example.html',\n  styleUrls: ['./autocomplete-optgroup-example.css'],\n})\n\nexport class AutocompleteOptgroupExample implements OnInit {\n  stateForm: FormGroup = this.fb.group({\n  stateGroup: '',\n});\n\nstateGroups: StateGroup[] = [{\n  letter: 'A',\n  names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']\n}, {\n  letter: 'C',\n  names: ['California', 'Colorado', 'Connecticut']\n}, {\n  letter: 'D',\n  names: ['Delaware']\n}, {\n  letter: 'F',\n  names: ['Florida']\n}, {\n  letter: 'G',\n  names: ['Georgia']\n}, {\n  letter: 'H',\n  names: ['Hawaii']\n}, {\n  letter: 'I',\n  names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']\n}, {\n  letter: 'K',\n  names: ['Kansas', 'Kentucky']\n}, {\n  letter: 'L',\n  names: ['Louisiana']\n}, {\n  letter: 'M',\n  names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',\n  'Minnesota', 'Mississippi', 'Missouri', 'Montana']\n}, {\n  letter: 'N',\n  names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',\n  'New Mexico', 'New York', 'North Carolina', 'North Dakota']\n}, {\n  letter: 'O',\n  names: ['Ohio', 'Oklahoma', 'Oregon']\n}, {\n  letter: 'P',\n  names: ['Pennsylvania']\n}, {\n  letter: 'R',\n  names: ['Rhode Island']\n}, {\n  letter: 'S',\n  names: ['South Carolina', 'South Dakota']\n}, {\n  letter: 'T',\n  names: ['Tennessee', 'Texas']\n}, {\n  letter: 'U',\n  names: ['Utah']\n}, {\n  letter: 'V',\n  names: ['Vermont', 'Virginia']\n}, {\n  letter: 'W',\n  names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']\n}];\n\n  stateGroupOptions: Observable<StateGroup[]>;\n\n  constructor(private fb: FormBuilder) { }\n\n  ngOnInit() {\n    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges\n      .pipe(\n        startWith(''),\n          map(val => this.filterGroup(val))\n       );\n  }\n\n  filterGroup(val: string): StateGroup[] {\n    if (val) {\n      return this.stateGroups\n      .map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))\n      .filter(group => group.names.length > 0);\n    }\n\n     return this.stateGroups;\n  }\n\n  private _filter(opt: string[], val: string) {\n    const filterValue = val.toLowerCase();\n      return opt.filter(item => item.toLowerCase().startsWith(filterValue));\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
exports.User = User;
var State = /** @class */ (function () {
    function State(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
    return State;
}());
exports.State = State;
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(fb) {
        var _this = this;
        this.fb = fb;
        this.myControl = new forms_1.FormControl();
        this.options = ['One', 'Two', 'Three'];
        this.myControl2 = new forms_1.FormControl();
        this.myControl33 = new forms_1.FormControl();
        this.options33 = [
            new User('Mary'),
            new User('Shelley'),
            new User('Igor')
        ];
        this.myControl44 = new forms_1.FormControl();
        this.options44 = ['One', 'Two', 'Three'];
        this.myControl3 = new forms_1.FormControl();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.stateForm = this.fb.group({
            stateGroup: '',
        });
        this.stateGroups = [{
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
            }, {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut']
            }, {
                letter: 'D',
                names: ['Delaware']
            }, {
                letter: 'F',
                names: ['Florida']
            }, {
                letter: 'G',
                names: ['Georgia']
            }, {
                letter: 'H',
                names: ['Hawaii']
            }, {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
            }, {
                letter: 'K',
                names: ['Kansas', 'Kentucky']
            }, {
                letter: 'L',
                names: ['Louisiana']
            }, {
                letter: 'M',
                names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                    'Minnesota', 'Mississippi', 'Missouri', 'Montana']
            }, {
                letter: 'N',
                names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota']
            }, {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon']
            }, {
                letter: 'P',
                names: ['Pennsylvania']
            }, {
                letter: 'R',
                names: ['Rhode Island']
            }, {
                letter: 'S',
                names: ['South Carolina', 'South Dakota']
            }, {
                letter: 'T',
                names: ['Tennessee', 'Texas']
            }, {
                letter: 'U',
                names: ['Utah']
            }, {
                letter: 'V',
                names: ['Vermont', 'Virginia']
            }, {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
            }];
        this.stateCtrl = new forms_1.FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
    }
    AutocompleteComponent.prototype.filterStates = function (name) {
        return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exampleSimpleAutocomplete = simpleAutocomplete;
        this.exampleAddingACustomFilter = addingACustomFilter;
        this.exampleSettingSeparateControlAndDisplayValues = settingSeparateControlAndDisplayValues;
        this.exampleAutomaticallyHighlightingTheFirstOption = automaticallyHighlightingTheFirstOption;
        this.exampleAutocompleteOverview = autocompleteOverview;
        this.exampleOptionGroupsAutocomplete = optionGroupsAutocomplete;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (val) { return _this.filter(val); }));
        this.filteredOptions33 = this.myControl33.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (value) { return typeof value === 'string' ? value : value.name; }), operators_1.map(function (name) { return name ? _this.filter33(name) : _this.options33.slice(); }));
        this.filteredOptions44 = this.myControl44.valueChanges.pipe(operators_1.startWith(''), operators_1.map(function (val) { return _this.filter44(val); }));
        // tslint:disable-next-line:no-non-null-assertion
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (val) { return _this.filterGroup(val); }));
    };
    AutocompleteComponent.prototype.filter33 = function (name) {
        return this.options33.filter(function (option) {
            return option.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    AutocompleteComponent.prototype.filter44 = function (val) {
        return this.options44.filter(function (option) { return option.toLowerCase().indexOf(val.toLowerCase()) === 0; });
    };
    AutocompleteComponent.prototype.displayFn = function (user) {
        return user ? user.name : undefined;
    };
    AutocompleteComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AutocompleteComponent.prototype.filterGroup = function (val) {
        var _this = this;
        if (val) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _this._filter(group.names, val) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    AutocompleteComponent.prototype._filter = function (opt, val) {
        var filterValue = val.toLowerCase();
        return opt.filter(function (item) { return item.toLowerCase().startsWith(filterValue); });
    };
    AutocompleteComponent = __decorate([
        core_1.Component({
            selector: 'kt-autocomplete',
            templateUrl: './autocomplete.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-form {\n\t\tmin-width: 150px;\n\t\tmax-width: 500px;\n\t\twidth: 100%;\n\t}\n\t.example-full-width {\n\t\twidth: 100%;\n\t}\n\t"]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());
exports.AutocompleteComponent = AutocompleteComponent;
//# sourceMappingURL=autocomplete.component.js.map