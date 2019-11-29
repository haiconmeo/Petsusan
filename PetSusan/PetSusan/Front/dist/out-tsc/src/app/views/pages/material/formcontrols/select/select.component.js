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
var basicSelect = {
    beforeCodeTitle: 'Basic select',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Favorite food\">\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{ food.viewValue }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic select\n*/\n@Component({\n  selector: 'select-overview-example',\n  templateUrl: 'select-overview-example.html',\n  styleUrls: ['select-overview-example.css'],\n})\nexport class SelectOverviewExample {\n  foods = [\n    {value: 'steak-0', viewValue: 'Steak'},\n    {value: 'pizza-1', viewValue: 'Pizza'},\n    {value: 'tacos-2', viewValue: 'Tacos'}\n  ];\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false
};
var selectWith2WayValueBinding = {
    beforeCodeTitle: 'Select with 2-way value binding',
    htmlCode: "\n<mat-form-field>\n  <mat-select [(value)]=\"selected\">\n    <mat-option>None</mat-option>\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\">Option 2</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n<p>You selected: {{selected}}</p>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Select with 2-way value binding */\n@Component({\n  selector: 'select-value-binding-example',\n  templateUrl: 'select-value-binding-example.html',\n  styleUrls: ['select-value-binding-example.css'],\n})\nexport class SelectValueBindingExample {\n  selected = 'option2';\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectInAForm = {
    beforeCodeTitle: 'Select in a form',
    htmlCode: "\n<form>\n  <mat-form-field>\n    <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\n      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\t<p> Selected value: {{selectedValue}} </p>\n</form>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Select in a form\n*/\n@Component({\n  selector: 'select-form-example',\n  templateUrl: 'select-form-example.html',\n  styleUrls: ['select-form-example.css'],\n})\nexport class SelectFormExample {\n selectedValue: string;\n  foods = [\n    {value: 'steak-0', viewValue: 'Steak'},\n    {value: 'pizza-1', viewValue: 'Pizza'},\n    {value: 'tacos-2', viewValue: 'Tacos'}\n  ];\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithFormFieldFeature = {
    beforeCodeTitle: 'Select with form field features',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required>\n    <mat-option>--</mat-option>\n    <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\n      {{animal.name}}\n\t</mat-option>\n  </mat-select>\n  <mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\n\n/** @title Select with form field features */\n@Component({\n  selector: 'select-hint-error-example',\n  templateUrl: 'select-hint-error-example.html',\n  styleUrls: ['select-hint-error-example.css'],\n})\nexport class SelectHintErrorExample {\n  animalControl = new FormControl('', [Validators.required]);\n  animals = [\n    {name: 'Dog', sound: 'Woof!'},\n    {name: 'Cat', sound: 'Meow!'},\n    {name: 'Cow', sound: 'Moo!'},\n    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},\n  ];\n}\n",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithResetOption = {
    beforeCodeTitle: 'Select with reset option',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"State\">\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Select with reset option */\n@Component({\n  selector: 'select-reset-example',\n  templateUrl: 'select-reset-example.html',\n  styleUrls: ['select-reset-example.css'],\n})\nexport class SelectResetExample {\n  states = [\n    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',\n    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',\n    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',\n    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',\n    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',\n    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',\n    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'\n  ];\n}\n",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithOptionGroups = {
    beforeCodeTitle: 'Select with option groups',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n      [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n         {{ pokemon.viewValue }}\n        </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/** @title Select with option groups */\n@Component({\n  selector: 'select-optgroup-example',\n  templateUrl: 'select-optgroup-example.html',\n  styleUrls: ['select-optgroup-example.css'],\n})\nexport class SelectOptgroupExample {\n  pokemonControl = new FormControl();\n  pokemonGroups = [\n  {\n    name: 'Grass',\n    pokemon: [\n    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },\n    { value: 'oddish-1', viewValue: 'Oddish' },\n    { value: 'bellsprout-2', viewValue: 'Bellsprout' }\n  ]\n  },\n  {\n    name: 'Water',\n    pokemon: [\n    { value: 'squirtle-3', viewValue: 'Squirtle' },\n    { value: 'psyduck-4', viewValue: 'Psyduck' },\n    { value: 'horsea-5', viewValue: 'Horsea' }\n  ]\n  },\n  {\n    name: 'Fire',\n    disabled: true,\n    pokemon: [\n    { value: 'charmander-6', viewValue: 'Charmander' },\n    { value: 'vulpix-7', viewValue: 'Vulpix' },\n    { value: 'flareon-8', viewValue: 'Flareon' }\n  ]\n  },\n  {\n    name: 'Psychic',\n    pokemon: [\n    { value: 'mew-9', viewValue: 'Mew' },\n    { value: 'mewtwo-10', viewValue: 'Mewtwo' },\n  ]\n  }\n  ];\n}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithMultipleSelection = {
    beforeCodeTitle: 'Select with multiple selection',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/** @title Select with multiple selection */\n@Component({\n  selector: 'select-multiple-example',\n  templateUrl: 'select-multiple-example.html',\n  styleUrls: ['select-multiple-example.css'],\n})\nexport class SelectMultipleExample {\n  toppings = new FormControl();\n  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];\n}\n\t\t",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithCustomTriggerText = {
    beforeCodeTitle: 'Select with custom trigger text',
    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n    <mat-select-trigger>\n      {{toppings.value ? toppings.value[0] : ''}}\n      <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\n        (+{{toppings.value.length - 1}} others)\n       </span>\n    </mat-select-trigger>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/** @title Select with custom trigger text */\n@Component({\n  selector: 'select-custom-trigger-example',\n  templateUrl: 'select-custom-trigger-example.html',\n  styleUrls: ['select-custom-trigger-example.css'],\n})\nexport class SelectCustomTriggerExample {\n  toppings = new FormControl();\n  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];\n}",
    viewCode: "",
    cssCode: "\n.example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em;\n}",
    isCodeVisible: false
};
var selectWithNoOptionRipple = {
    beforeCodeTitle: 'Select with no option ripple',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Select an option\" disableRipple>\n    <mat-option value=\"1\">Option 1</mat-option>\n    <mat-option value=\"2\">Option 2</mat-option>\n    <mat-option value=\"3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/** @title Select with no option ripple */\n@Component({\n  selector: 'select-no-ripple-example',\n  templateUrl: 'select-no-ripple-example.html',\n  styleUrls: ['select-no-ripple-example.css'],\n})\nexport class SelectNoRippleExample {}",
    viewCode: "",
    cssCode: "",
    isCodeVisible: false
};
var selectWithCustomPanelStyling = {
    beforeCodeTitle: 'Select with custom panel styling',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\"\n    panelClass=\"example-panel-{{panelColor.value}}\">\n    <mat-option value=\"red\">Red</mat-option>\n    <mat-option value=\"green\">Green</mat-option>\n    <mat-option value=\"blue\">Blue</mat-option>\n  </mat-select>\n</mat-form-field>",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\n/**\n* @title Select with custom panel styling\n*/\n@Component({\n  selector: 'select-panel-class-example',\n  templateUrl: 'select-panel-class-example.html',\n  styleUrls: ['select-panel-class-example.css'],\n  encapsulation: ViewEncapsulation.None,\n})\nexport class SelectPanelClassExample {\n  panelColor = new FormControl('red');\n}",
    viewCode: "",
    cssCode: "\n.example-panel-red .mat-select-content {\n  background: rgba(255, 0, 0, 0.5);\n}\n.example-panel-green .mat-select-content {\n  background: rgba(0, 255, 0, 0.5);\n}\n.example-panel-blue .mat-select-content {\n  background: rgba(0, 0, 255, 0.5);\n}",
    isCodeVisible: false
};
var selectWithACustomErrorStateMatcher = {
    beforeCodeTitle: 'Select with a custom ErrorStateMatcher',
    htmlCode: "\n<mat-form-field>\n  <mat-select placeholder=\"Choose one\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\n    <mat-option>Clear</mat-option>\n    <mat-option value=\"valid\">Valid option</mat-option>\n    <mat-option value=\"invalid\">Invalid option</mat-option>\n  </mat-select>\n  <mat-hint>Errors appear instantly!</mat-hint>\n  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error>\n  <mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">\n    Your selection is invalid\n  </mat-error>\n</mat-form-field>\n\t  \t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';\nimport {ErrorStateMatcher} from '@angular/material/core';\n\n/** Error when invalid control is dirty, touched, or submitted. */\nexport class MyErrorStateMatcher implements ErrorStateMatcher {\n  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {\n    const isSubmitted = form && form.submitted;\n    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));\n  }\n}\n\n/** @title Select with a custom ErrorStateMatcher */\n@Component({\n  selector: 'select-error-state-matcher-example',\n  templateUrl: 'select-error-state-matcher-example.html',\n  styleUrls: ['select-error-state-matcher-example.css'],\n})\nexport class SelectErrorStateMatcherExample {\n  selected = new FormControl('valid', [\n    Validators.required,\n    Validators.pattern('valid'),\n  ]);\n\n  matcher = new MyErrorStateMatcher();\n}",
    viewCode: "",
    cssCode: "\n\t\t",
    isCodeVisible: false
};
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
exports.MyErrorStateMatcher = MyErrorStateMatcher;
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.toppings = new forms_1.FormControl();
        this.toppings2 = new forms_1.FormControl();
        this.panelColor = new forms_1.FormControl('red');
        this.toppingList2 = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
        this.selected = 'option2';
        this.pokemonControl = new forms_1.FormControl();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
        this.animalControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
        this.selected2 = new forms_1.FormControl('valid', [
            forms_1.Validators.required,
            forms_1.Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.exampleBasicSelect = basicSelect;
        this.exampleSelectWith2WayValueBinding = selectWith2WayValueBinding;
        this.exampleSelectInAForm = selectInAForm;
        this.exampleSelectWithFormFieldFeature = selectWithFormFieldFeature;
        this.exampleSelectWithResetOption = selectWithResetOption;
        this.exampleSelectWithOptionGroups = selectWithOptionGroups;
        this.exampleSelectWithMultipleSelection = selectWithMultipleSelection;
        this.exampleSelectWithCustomTriggerText = selectWithCustomTriggerText;
        this.exampleSelectWithCustomPanelStyling = selectWithCustomPanelStyling;
        this.exampleSelectWithACustomErrorStateMatcher = selectWithACustomErrorStateMatcher;
    };
    SelectComponent = __decorate([
        core_1.Component({
            selector: 'kt-select',
            templateUrl: './select.component.html',
            styles: ["\n\t.example-additional-selection {\n\t\topacity: 0.75;\n\t\tfont-size: 0.75em;\n\t  }\n\t  .example-panel-red .mat-select-content {\n\t\tbackground: rgba(255, 0, 0, 0.5);\n\t  }\n\t  .example-panel-green .mat-select-content {\n\t\tbackground: rgba(0, 255, 0, 0.5);\n\t  }\n\t  .example-panel-blue .mat-select-content {\n\t\tbackground: rgba(0, 0, 255, 0.5);\n\t  }\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map