"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basicMenu = {
    beforeCodeTitle: 'Basic menu',
    htmlCode: "\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic menu\n */\n@Component({\n  selector: 'menu-overview-example',\n  templateUrl: 'menu-overview-example.html',\n  styleUrls: ['menu-overview-example.css'],\n})\nexport class MenuOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var nestedMenu = {
    beforeCodeTitle: 'Nested menu',
    htmlCode: "\n<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n<mat-menu #animals=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n</mat-menu>\n<mat-menu #vertebrates=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n  <button mat-menu-item>Birds</button>\n  <button mat-menu-item>Mammals</button>\n</mat-menu>\n<mat-menu #invertebrates=\"matMenu\">\n  <button mat-menu-item>Insects</button>\n  <button mat-menu-item>Molluscs</button>\n  <button mat-menu-item>Crustaceans</button>\n  <button mat-menu-item>Corals</button>\n  <button mat-menu-item>Arachnids</button>\n  <button mat-menu-item>Velvet worms</button>\n  <button mat-menu-item>Horseshoe crabs</button>\n</mat-menu>\n<mat-menu #fish=\"matMenu\">\n  <button mat-menu-item>Baikal oilfish</button>\n  <button mat-menu-item>Bala shark</button>\n  <button mat-menu-item>Ballan wrasse</button>\n  <button mat-menu-item>Bamboo shark</button>\n  <button mat-menu-item>Banded killifish</button>\n</mat-menu>\n<mat-menu #amphibians=\"matMenu\">\n  <button mat-menu-item>Sonoran desert toad</button>\n  <button mat-menu-item>Western toad</button>\n  <button mat-menu-item>Arroyo toad</button>\n  <button mat-menu-item>Yosemite toad</button>\n</mat-menu>\n<mat-menu #reptiles=\"matMenu\">\n  <button mat-menu-item>Banded Day Gecko</button>\n  <button mat-menu-item>Banded Gila Monster</button>\n  <button mat-menu-item>Black Tree Monitor</button>\n  <button mat-menu-item>Blue Spiny Lizard</button>\n  <button mat-menu-item disabled>Velociraptor</button>\n</mat-menu>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Nested menu\n*/\n@Component({\n  selector: 'nested-menu-example',\n  templateUrl: 'nested-menu-example.html',\n  styleUrls: ['nested-menu-example.css']\n})\nexport class NestedMenuExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var menuWithIcons = {
    beforeCodeTitle: 'Menu with icons',
    htmlCode: "\n<button mat-icon-button [matMenuTriggerFor]=\"menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voicemail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Menu with icons\n*/\n@Component({\n  selector: 'menu-icons-example',\n  templateUrl: 'menu-icons-example.html',\n  styleUrls: ['menu-icons-example.css'],\n})\nexport class MenuIconsExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var toggling = {
    beforeCodeTitle: 'Customizing menu position',
    htmlCode: "\n<mat-menu #appMenu=\"matMenu\" yPosition=\"above\">\n  <button mat-menu-item>Settings</button>\n  <button mat-menu-item>Help</button>\n</mat-menu>\n<button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @Customizing menu position\n */\n@Component({\n  selector: 'menu-customizing-example',\n  templateUrl: 'menu-customizing-example.html',\n  styleUrls: ['menu-customizing-example.css'],\n})\nexport class MenuCustomizingExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.exampleBasicMenu = basicMenu;
        this.exampleNestedMenu = nestedMenu;
        this.exampleMenuWithIcons = menuWithIcons;
        this.exampleToggling = toggling;
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'kt-menu',
            templateUrl: './menu.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        })
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map