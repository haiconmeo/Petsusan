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
var keycodes_1 = require("@angular/cdk/keycodes");
var material_1 = require("@angular/material");
var pizza_party_component_1 = require("../../popups-and-modals/snackbar/pizza-party.component");
var State = /** @class */ (function () {
    function State(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
    return State;
}());
exports.State = State;
var DefaultFormsComponent = /** @class */ (function () {
    function DefaultFormsComponent(snackBar) {
        var _this = this;
        this.snackBar = snackBar;
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
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.isHuman = true;
        this.isHuman2 = true;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA];
        this.fruits = [
            { name: 'Pizza' },
            { name: 'Steak' },
            { name: 'Tacos' },
        ];
        this.stateCtrl = new forms_1.FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
    }
    DefaultFormsComponent.prototype.ngOnInit = function () { };
    DefaultFormsComponent.prototype.onChange = function (value) {
        this.isHuman = value.checked === true;
    };
    DefaultFormsComponent.prototype.onChange2 = function (value) {
        this.isHuman2 = value.checked === true;
    };
    DefaultFormsComponent.prototype.filterStates = function (name) {
        return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    DefaultFormsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    DefaultFormsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    DefaultFormsComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(pizza_party_component_1.PizzaPartyComponent, {
            duration: 500,
        });
    };
    DefaultFormsComponent = __decorate([
        core_1.Component({
            selector: 'kt-default-forms',
            templateUrl: './default-forms.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\t.example-full-width {\n\t\twidth: 100%;\n\t  }\n\n\t .kt-checkbox-inline > mat-checkbox {\n\t\t padding-right: 20px;\n\t }\n\t"]
        }),
        __metadata("design:paramtypes", [material_1.MatSnackBar])
    ], DefaultFormsComponent);
    return DefaultFormsComponent;
}());
exports.DefaultFormsComponent = DefaultFormsComponent;
//# sourceMappingURL=default-forms.component.js.map