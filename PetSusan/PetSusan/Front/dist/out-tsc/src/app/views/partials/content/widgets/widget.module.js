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
var material_1 = require("@angular/material");
var core_module_1 = require("../../../../core/core.module");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
// Datatable
var data_table_component_1 = require("./general/data-table/data-table.component");
// General widgets
var widget1_component_1 = require("./widget1/widget1.component");
var widget4_component_1 = require("./widget4/widget4.component");
var widget5_component_1 = require("./widget5/widget5.component");
var widget12_component_1 = require("./widget12/widget12.component");
var widget14_component_1 = require("./widget14/widget14.component");
var widget26_component_1 = require("./widget26/widget26.component");
var timeline2_component_1 = require("./timeline2/timeline2.component");
var WidgetModule = /** @class */ (function () {
    function WidgetModule() {
    }
    WidgetModule = __decorate([
        core_1.NgModule({
            declarations: [
                data_table_component_1.DataTableComponent,
                // Widgets
                widget1_component_1.Widget1Component,
                widget4_component_1.Widget4Component,
                widget5_component_1.Widget5Component,
                widget12_component_1.Widget12Component,
                widget14_component_1.Widget14Component,
                widget26_component_1.Widget26Component,
                timeline2_component_1.Timeline2Component,
            ],
            exports: [
                data_table_component_1.DataTableComponent,
                // Widgets
                widget1_component_1.Widget1Component,
                widget4_component_1.Widget4Component,
                widget5_component_1.Widget5Component,
                widget12_component_1.Widget12Component,
                widget14_component_1.Widget14Component,
                widget26_component_1.Widget26Component,
                timeline2_component_1.Timeline2Component,
            ],
            imports: [
                common_1.CommonModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                material_1.MatTableModule,
                core_module_1.CoreModule,
                material_1.MatIconModule,
                material_1.MatButtonModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
            ]
        })
    ], WidgetModule);
    return WidgetModule;
}());
exports.WidgetModule = WidgetModule;
//# sourceMappingURL=widget.module.js.map