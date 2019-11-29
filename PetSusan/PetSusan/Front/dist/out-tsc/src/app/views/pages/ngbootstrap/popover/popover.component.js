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
var quickAndEasyPopovers = {
    beforeCodeTitle: 'Quick and easy popovers',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <button type=\"button\" class=\"btn btn-primary kt-btn--wide\" placement=\"top\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\n      Popover on top\n    </button>\n    <button type=\"button\" class=\"btn btn-success kt-btn--wide\" placement=\"right\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\n      Popover on right\n    </button>\n    <button type=\"button\" class=\"btn btn-info kt-btn--wide\" container=\"body\" placement=\"bottom\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\n      Popover on bottom\n    </button>\n\t<button type=\"button\" class=\"btn btn-danger kt-btn--wide\" placement=\"left\"\n      ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\n      Popover on left\n    </button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-basic',\n    templateUrl: './popover-basic.html'\n})\nexport class NgbdPopoverBasic {\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var HTMLAndBindingsInPopovers = {
    beforeCodeTitle: 'HTML and bindings in popovers',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a\n    <code>&lt;ng-template&gt;</code> element.\n  </div>\n  <div class=\"kt-section__content\">\n    <ng-template #popContent>\n      <span>Hello</span>,\n      <b>{{name}}</b>!\n    </ng-template>\n    <button type=\"button\" class=\"btn btn-warning\" [ngbPopover]=\"popContent\" popoverTitle=\"Fancy content\">\n      I've got markup and bindings in my popover!\n    </button>\n   </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-tplcontent',\n    templateUrl: './popover-tplcontent.html'\n})\nexport class NgbdPopoverTplcontent {\n    name = 'World';\n}",
    viewCode: "",
    isCodeVisible: false
};
var customAndManualTriggers = {
    beforeCodeTitle: 'Custom and manual triggers',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    You can easily override open and close triggers by specifying event names (separated by\n    <code>:</code>) in the\n    <code>triggers</code> property.\n  </div>\n  <div class=\"kt-section__content\">\n\t<button type=\"button\" class=\"btn btn-primary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\"\n      popoverTitle=\"Pop title\">\n      Hover over me!\n    </button>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    Alternatively you can take full manual control over popover opening / closing events.\n  </span>\n  <div class=\"kt-section__content\">\n\t<button type=\"button\" class=\"btn btn-success\" ngbPopover=\"What a great tip!\" triggers=\"manual\" #p=\"ngbPopover\"\n      (click)=\"p.open()\" popoverTitle=\"Pop title\">\n      Click me to open a popover\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"p.close()\">\n      Click me to close a popover\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-triggers',\n    templateUrl: './popover-triggers.html'\n})\nexport class NgbdPopoverTriggers {\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var contextAndManualTriggers = {
    beforeCodeTitle: 'Context and manual triggers',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    You can optionally pass in a context when manually triggering a popover.\n  </span>\n  <div class=\"kt-section__content\">\n    <ng-template #popContent let-greeting=\"greeting\">{{greeting}},\n\t  <b>{{name1}}</b>!\n\t</ng-template>\n    <p>\n      How would you like to greet\n      <strong [ngbPopover]=\"popContent\" popoverTitle=\"Greeting\" #p2=\"ngbPopover\" triggers=\"manual\">me</strong>?\n    </p>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\n      French\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\n      German\n    </button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\n      English\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {NgbPopover} from '@ng-bootstrap/ng-bootstrap';\nimport {Component, ViewChild} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-tplwithcontext',\n    templateUrl: './popover-tplwithcontext.html'\n})\nexport class NgbdPopoverTplwithcontext {\n    greeting = {};\n    name = 'World';\n\n    @ViewChild('p') public popover: NgbPopover;\n\n    public changeGreeting(greeting: any): void {\n        const isOpen = this.popover.isOpen();\n        this.popover.close();\n        if (greeting !== this.greeting || !isOpen) {\n            this.greeting = greeting;\n            this.popover.open(greeting);\n        }\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var popoverVisibilityEvents = {
    beforeCodeTitle: 'Popover visibility events',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n\t<button type=\"button\" class=\"btn btn-primary\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum\n      faucibus.\" popoverTitle=\"Popover on top\" #popover=\"ngbPopover\">\n      Open Popover\n    </button>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    Popover is currently:\n    <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-visibility',\n    templateUrl: './popover-visibility.html'\n})\nexport class NgbdPopoverVisibility {}\n",
    viewCode: "",
    isCodeVisible: false
};
var appendPopoverInTheBody = {
    beforeCodeTitle: 'Append popover in the body',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    Set the\n\t<code>container</code> property to \"body\" to have the popover be appended to the body instead of the triggering element's\n      parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e.\n    <code>overflow: hidden</code>).\n  </div>\n  <div class=\"kt-section__content\">\n    <div class='row'>\n      <div class='card'>\n        <button type=\"button\" class=\"btn btn-outline-info\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n\t\t  Default popover\n        </button>\n\t\t<br />\n\t\t<button type=\"button\" class=\"btn btn-outline-danger\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n          container=\"body\">\n          Popover appended to body\n        </button>\n      </div>\n\t</div>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-popover-container',\n    templateUrl: './popover-container.html',\n    styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }']\n})\nexport class NgbdPopoverContainer {\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfPopovers = {
    beforeCodeTitle: 'Global configuration of popovers',
    htmlCode: "\n<button type=\"button\" class=\"btn btn-outline-secondary\"\n  ngbPopover=\"This popover gets its inputs from the customized configuration\" popoverTitle=\"Customized popover\">\n  Customized popover\n</button>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-popover-config',\n    templateUrl: './popover-config.html',\n    providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers\n})\nexport class NgbdPopoverConfig {\nconstructor(config: NgbPopoverConfig) {\n    // customize default values of popovers used by this component tree\n    config.placement = 'right';\n    config.triggers = 'hover';\n    }\n}\n", viewCode: "",
    isCodeVisible: false
};
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(config) {
        this.name = 'World';
        this.greeting = {};
        this.name1 = 'World';
        // customize default values of popovers used by this component tree
        // config.placement = 'right';
        config.container = 'body';
    }
    PopoverComponent.prototype.ngOnInit = function () {
        this.exampleQuickAndEasyPopovers = quickAndEasyPopovers;
        this.exampleHTMLAndBindingsInPopovers = HTMLAndBindingsInPopovers;
        this.exampleCustomAndManualTriggers = customAndManualTriggers;
        this.exampleContextAndManualTriggers = contextAndManualTriggers;
        this.examplePopoverVisibilityEvents = popoverVisibilityEvents;
        this.exampleAppendPopoverInTheBody = appendPopoverInTheBody;
        this.exampleGlobalConfigurationOfPopovers = globalConfigurationOfPopovers;
    };
    PopoverComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover2.isOpen();
        this.popover2.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover2.open(greeting);
        }
    };
    __decorate([
        core_1.ViewChild('p'),
        __metadata("design:type", ng_bootstrap_1.NgbPopover)
    ], PopoverComponent.prototype, "popover", void 0);
    __decorate([
        core_1.ViewChild('p2'),
        __metadata("design:type", ng_bootstrap_1.NgbPopover)
    ], PopoverComponent.prototype, "popover2", void 0);
    PopoverComponent = __decorate([
        core_1.Component({
            selector: 'kt-popover',
            templateUrl: './popover.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            // styles: [`.card { padding: 50px 0; text-align: center; overflow:hidden }`],
            providers: [ng_bootstrap_2.NgbPopoverConfig] // add NgbPopoverConfig to the component providers
        }),
        __metadata("design:paramtypes", [ng_bootstrap_2.NgbPopoverConfig])
    ], PopoverComponent);
    return PopoverComponent;
}());
exports.PopoverComponent = PopoverComponent;
//# sourceMappingURL=popover.component.js.map