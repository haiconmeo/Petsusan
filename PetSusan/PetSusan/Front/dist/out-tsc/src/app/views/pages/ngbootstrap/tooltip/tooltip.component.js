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
var quickAndEasyTooltips = {
    beforeCodeTitle: 'Quick and easy tooltips',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <button type=\"button\" class=\"btn btn-primary\" placement=\"top\" ngbTooltip=\"Tooltip on top\" ngbTooltipClass=\"kt-tooltip\">\n      Tooltip on top\n\t</button>\n    <button type=\"button\" class=\"btn btn-info\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n      Tooltip on right\n    </button>\n    <button type=\"button\" class=\"btn btn-success\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n      Tooltip on bottom\n    </button>\n\t<button type=\"button\" class=\"btn btn-danger\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n      Tooltip on left\n    </button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tooltip-basic',\n    templateUrl: './tooltip-basic.html'\n})\nexport class NgbdTooltipBasic {}\n\t\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var HTMLAndBindingsInTooltips = {
    beforeCodeTitle: 'Progress bars with current value labels',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a\n    <code>&lt;ng-template&gt;</code> element.\n  </div>\n  <div class=\"kt-section__content\">\n    <ng-template #tipContentS>Hello,\n      <b>{{name}}</b>!</ng-template>\n    <button type=\"button\" class=\"btn btn-primary\" [ngbTooltip]=\"tipContentS\">\n      I've got markup and bindings in my tooltip!\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tooltip-tplcontent',\n    templateUrl: './tooltip-tplcontent.html'\n})\nexport class NgbdTooltipTplcontent {\n    name = 'World';\n}\n\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var customAndManualTriggers = {
    beforeCodeTitle: 'Custom and manual triggers',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    You can easily override open and close triggers by specifying event names (separated by\n    <code>:</code>) in the\n    <code>triggers</code> property.\n  </div>\n  <div class=\"kt-section__content\">\n    <button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\">\n      Click me!\n    </button>\n  </div>\n</div>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    Alternatively you can take full manual control over tooltip opening / closing events.\n  </div>\n  <div class=\"kt-section__content\">\n    <button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"What a great tip!\" triggers=\"manual\" #t=\"ngbTooltip\" (click)=\"t.open()\">\n      Click me to open a tooltip\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"t.close()\">\n      Click me to close a tooltip\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-progressbar-striped',\n    templateUrl: './progressbar-striped.html'\n})\nexport class NgbdProgressbarStriped {\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false
};
var contextAndManualTriggers = {
    beforeCodeTitle: 'Context and manual triggers',
    htmlCode: "\n<ng-template #tipContent let-greeting=\"greeting\">{{greeting}},\n  <b>{{name2}}</b>!\n</ng-template>\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    You can optionally pass in a context when manually triggering a popover.\n    <div class=\"kt-separator kt-separator--dashed\"></div>\n    How would you like to greet\n   <strong [ngbTooltip]=\"tipContent\" #t2=\"ngbTooltip\" triggers=\"manual\">me</strong>?\n  </div>\n  <div class=\"kt-section__content\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\n      French\n    </button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\n      German\n    </button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\n      English\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';\nimport {Component, ViewChild} from '@angular/core';\n\n@Component({\n     selector: 'ngbd-tooltip-tplwithcontext',\n     templateUrl: './tooltip-tplwithcontext.html'\n})\nexport class NgbdTooltipTplwithcontext {\n    greeting = {};\n    name = 'World';\n\n    @ViewChild('t') public tooltip: NgbTooltip;\n\n    public changeGreeting(greeting: any): void {\n        const isOpen = this.tooltip.isOpen();\n        this.tooltip.close();\n        if (greeting !== this.greeting || !isOpen) {\n\t\t    this.greeting = greeting;\n            this.tooltip.open(greeting);\n        }\n    }\n}\n",
    viewCode: "",
    isCodeVisible: false
};
var appendTooltipInTheBody = {
    beforeCodeTitle: 'Append tooltip in the body',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    Set the\n\t<code>container</code> property to \"body\" to have the tooltip be appended to the body instead of the triggering element's parent.\n      This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e.\n    <code>overflow: hidden</code>).\n  </div>\n  <div class=\"kt-section__content\">\n    <div class='row'>\n      <div class='card'>\n        <button type=\"button\" class=\"btn btn-outline-primary\" ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n          Default tooltip\n        </button>\n        <br />\n\t\t<button type=\"button\" class=\"btn btn-outline-info\"\n          ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\n          Tooltip appended to body\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n    selector: 'ngbd-tooltip-container',\n    templateUrl: './tooltip-container.html',\n    styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }']\n})\nexport class NgbdTooltipContainer {\n}\n\n",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfTooltips = {
    beforeCodeTitle: 'Global configuration of progress tooltips',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n\t<button type=\"button\" class=\"btn btn-primary\"\n      ngbTooltip=\"This tooltip gets its inputs from the customized configuration\" placement=\"right\" triggers=\"click\">\n      Customized tooltip\n    </button>\n  </div>\n</div>\n\t\t",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n  selector: 'ngbd-tooltip-config',\n  templateUrl: './tooltip-config.html',\n  providers: [NgbTooltipConfig] // add NgbTooltipConfig to the component providers\n})\nexport class NgbdTooltipConfig {\n    constructor(config: NgbTooltipConfig) {\n        // customize default values of tooltips used by this component tree\n        config.placement = 'right';\n        config.triggers = 'click';\n    }\n}\n\n",
    viewCode: "",
    isCodeVisible: false
};
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(config) {
        this.name = 'World';
        this.greeting = {};
        this.name2 = 'World';
        // customize default values of tooltips used by this component tree
        // config.placement = 'right';
        // config.triggers = 'click';
        config.container = 'body';
    }
    TooltipComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.tooltip.isOpen();
        this.tooltip.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.tooltip.open(greeting);
        }
    };
    TooltipComponent.prototype.ngOnInit = function () {
        this.exampleQuickAndEasyTooltips = quickAndEasyTooltips;
        this.exampleHTMLAndBindingsInTooltipsl = HTMLAndBindingsInTooltips;
        this.exampleCustomAndManualTriggers = customAndManualTriggers;
        this.exampleContextAndManualTriggers = contextAndManualTriggers;
        this.exampleAppendTooltipInTheBody = appendTooltipInTheBody;
        this.exampleGlobalConfigurationOfTooltips = globalConfigurationOfTooltips;
    };
    __decorate([
        core_1.ViewChild('t2'),
        __metadata("design:type", ng_bootstrap_1.NgbTooltip)
    ], TooltipComponent.prototype, "tooltip", void 0);
    TooltipComponent = __decorate([
        core_1.Component({
            selector: 'kt-tooltip',
            templateUrl: './tooltip.component.html',
            styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [ng_bootstrap_2.NgbTooltipConfig] // add NgbTooltipConfig to the component providers
        }),
        __metadata("design:paramtypes", [ng_bootstrap_2.NgbTooltipConfig])
    ], TooltipComponent);
    return TooltipComponent;
}());
exports.TooltipComponent = TooltipComponent;
//# sourceMappingURL=tooltip.component.js.map