"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ngbootstrap_component_1 = require("./ngbootstrap.component");
var alert_component_1 = require("./alert/alert.component");
var accordion_component_1 = require("./accordion/accordion.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var code_preview_module_1 = require("../../partials/content/general/code-preview/code-preview.module");
var partials_module_1 = require("../../partials/partials.module");
var core_module_1 = require("../../../core/core.module");
var material_preview_module_1 = require("../../partials/content/general/material-preview/material-preview.module");
var buttons_component_1 = require("./buttons/buttons.component");
var forms_1 = require("@angular/forms");
var carousel_component_1 = require("./carousel/carousel.component");
var http_1 = require("@angular/common/http");
var collapse_component_1 = require("./collapse/collapse.component");
var datepicker_component_1 = require("./datepicker/datepicker.component");
var dropdown_component_1 = require("./dropdown/dropdown.component");
var modal_component_1 = require("./modal/modal.component");
var pagination_component_1 = require("./pagination/pagination.component");
var popover_component_1 = require("./popover/popover.component");
var progressbar_component_1 = require("./progressbar/progressbar.component");
var rating_component_1 = require("./rating/rating.component");
var tabs_component_1 = require("./tabs/tabs.component");
var timepicker_component_1 = require("./timepicker/timepicker.component");
var tooltip_component_1 = require("./tooltip/tooltip.component");
var typehead_component_1 = require("./typehead/typehead.component");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var routes = [
    {
        path: '',
        component: ngbootstrap_component_1.NgbootstrapComponent,
        children: [
            {
                path: 'accordion',
                component: accordion_component_1.AccordionComponent
            },
            {
                path: 'alert',
                component: alert_component_1.AlertComponent
            },
            {
                path: 'buttons',
                component: buttons_component_1.ButtonsComponent
            },
            {
                path: 'carousel',
                component: carousel_component_1.CarouselComponent
            },
            {
                path: 'collapse',
                component: collapse_component_1.CollapseComponent
            },
            {
                path: 'datepicker',
                component: datepicker_component_1.DatepickerComponent
            },
            {
                path: 'dropdown',
                component: dropdown_component_1.DropdownComponent
            },
            {
                path: 'modal',
                component: modal_component_1.ModalComponent
            },
            {
                path: 'pagination',
                component: pagination_component_1.PaginationComponent
            },
            {
                path: 'popover',
                component: popover_component_1.PopoverComponent
            },
            {
                path: 'progressbar',
                component: progressbar_component_1.ProgressbarComponent
            },
            {
                path: 'rating',
                component: rating_component_1.RatingComponent
            },
            {
                path: 'tabs',
                component: tabs_component_1.TabsComponent
            },
            {
                path: 'timepicker',
                component: timepicker_component_1.TimepickerComponent
            },
            {
                path: 'tooltip',
                component: tooltip_component_1.TooltipComponent
            },
            {
                path: 'typehead',
                component: typehead_component_1.TypeheadComponent
            }
        ]
    }
];
var NgbootstrapModule = /** @class */ (function () {
    function NgbootstrapModule() {
    }
    NgbootstrapModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                partials_module_1.PartialsModule,
                ng_bootstrap_1.NgbModule,
                code_preview_module_1.CodePreviewModule,
                core_module_1.CoreModule,
                material_preview_module_1.MaterialPreviewModule,
                router_1.RouterModule.forChild(routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule
            ],
            exports: [router_1.RouterModule],
            declarations: [
                ngbootstrap_component_1.NgbootstrapComponent,
                alert_component_1.AlertComponent,
                accordion_component_1.AccordionComponent,
                buttons_component_1.ButtonsComponent,
                carousel_component_1.CarouselComponent,
                collapse_component_1.CollapseComponent,
                datepicker_component_1.DatepickerComponent,
                dropdown_component_1.DropdownComponent,
                modal_component_1.ModalComponent,
                modal_component_1.NgbdModalContentComponent,
                pagination_component_1.PaginationComponent,
                popover_component_1.PopoverComponent,
                progressbar_component_1.ProgressbarComponent,
                rating_component_1.RatingComponent,
                tabs_component_1.TabsComponent,
                timepicker_component_1.TimepickerComponent,
                tooltip_component_1.TooltipComponent,
                typehead_component_1.TypeheadComponent
            ],
            providers: [
                ng_bootstrap_1.NgbAlertConfig,
            ],
            entryComponents: [
                modal_component_1.NgbdModalContentComponent
            ]
        })
    ], NgbootstrapModule);
    return NgbootstrapModule;
}());
exports.NgbootstrapModule = NgbootstrapModule;
//# sourceMappingURL=ngbootstrap.module.js.map