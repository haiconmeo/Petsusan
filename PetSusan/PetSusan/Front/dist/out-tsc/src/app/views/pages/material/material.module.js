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
var material_component_1 = require("./material.component");
var autocomplete_component_1 = require("./formcontrols/autocomplete/autocomplete.component");
var checkbox_component_1 = require("./formcontrols/checkbox/checkbox.component");
var forms_1 = require("@angular/forms");
var code_preview_module_1 = require("../../partials/content/general/code-preview/code-preview.module");
var partials_module_1 = require("../../partials/partials.module");
var core_module_1 = require("../../../core/core.module");
var material_preview_module_1 = require("../../partials/content/general/material-preview/material-preview.module");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var core_2 = require("@angular/material/core");
var dialog_1 = require("@angular/material/dialog");
var icon_1 = require("@angular/material/icon");
var material_1 = require("@angular/material");
var checkbox_1 = require("@angular/material/checkbox");
// Form controls
var datepicker_component_1 = require("./formcontrols/datepicker/datepicker.component");
var datepicker_1 = require("@angular/material/datepicker");
var formfield_component_1 = require("./formcontrols/formfield/formfield.component");
var input_component_1 = require("./formcontrols/input/input.component");
var radiobutton_component_1 = require("./formcontrols/radiobutton/radiobutton.component");
var select_component_1 = require("./formcontrols/select/select.component");
var slider_component_1 = require("./formcontrols/slider/slider.component");
var slidertoggle_component_1 = require("./formcontrols/slidertoggle/slidertoggle.component");
// Navigation
var menu_component_1 = require("./navigation/menu/menu.component");
var sidenav_component_1 = require("./navigation/sidenav/sidenav.component");
var toolbar_component_1 = require("./navigation/toolbar/toolbar.component");
// Layout
var card_component_1 = require("./layout/card/card.component");
var divider_component_1 = require("./layout/divider/divider.component");
var expansion_panel_component_1 = require("./layout/expansion-panel/expansion-panel.component");
var grid_list_component_1 = require("./layout/grid-list/grid-list.component");
var list_component_1 = require("./layout/list/list.component");
var material_tabs_component_1 = require("./layout/material-tabs/material-tabs.component");
var stepper_component_1 = require("./layout/stepper/stepper.component");
var tree_component_1 = require("./layout/tree/tree.component");
var default_forms_component_1 = require("./layout/default-forms/default-forms.component");
// Buttons & indicators
var button_component_1 = require("./buttons-and-indicators/button/button.component");
var button_toggle_component_1 = require("./buttons-and-indicators/button-toggle/button-toggle.component");
var chips_component_1 = require("./buttons-and-indicators/chips/chips.component");
var icon_component_1 = require("./buttons-and-indicators/icon/icon.component");
var progress_bar_component_1 = require("./buttons-and-indicators/progress-bar/progress-bar.component");
var progress_spinner_component_1 = require("./buttons-and-indicators/progress-spinner/progress-spinner.component");
var ripples_component_1 = require("./buttons-and-indicators/ripples/ripples.component");
// Popups & modals
var dialog_component_1 = require("./popups-and-modals/dialog/dialog.component");
var snackbar_component_1 = require("./popups-and-modals/snackbar/snackbar.component");
var material_tooltip_component_1 = require("./popups-and-modals/material-tooltip/material-tooltip.component");
var bottom_sheet_component_1 = require("./popups-and-modals/bottom-sheet/bottom-sheet.component");
var bottom_sheet_example_component_1 = require("./popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component");
var pizza_party_component_1 = require("./popups-and-modals/snackbar/pizza-party.component");
// Data table
var paginator_component_1 = require("./data-table/paginator/paginator.component");
var sort_header_component_1 = require("./data-table/sort-header/sort-header.component");
var material_table_component_1 = require("./data-table/material-table/material-table.component");
var material_moment_adapter_1 = require("@angular/material-moment-adapter");
var routes = [
    {
        path: '',
        component: material_component_1.MaterialComponent,
        children: [
            {
                path: 'form-controls/autocomplete',
                component: autocomplete_component_1.AutocompleteComponent
            },
            {
                path: 'form-controls/checkbox',
                component: checkbox_component_1.CheckboxComponent
            },
            {
                path: 'form-controls/datepicker',
                component: datepicker_component_1.DatepickerComponent
            },
            {
                path: 'form-controls/formfield',
                component: formfield_component_1.FormfieldComponent
            },
            {
                path: 'form-controls/input',
                component: input_component_1.InputComponent
            },
            {
                path: 'form-controls/radiobutton',
                component: radiobutton_component_1.RadiobuttonComponent
            },
            {
                path: 'form-controls/select',
                component: select_component_1.SelectComponent
            },
            {
                path: 'form-controls/slider',
                component: slider_component_1.SliderComponent
            },
            {
                path: 'form-controls/slidertoggle',
                component: slidertoggle_component_1.SlidertoggleComponent
            },
            {
                path: 'navigation/menu',
                component: menu_component_1.MenuComponent
            },
            {
                path: 'navigation/sidenav',
                component: sidenav_component_1.SidenavComponent
            },
            {
                path: 'navigation/toolbar',
                component: toolbar_component_1.ToolbarComponent
            },
            {
                path: 'layout/card',
                component: card_component_1.CardComponent
            },
            {
                path: 'layout/divider',
                component: divider_component_1.DividerComponent
            },
            {
                path: 'layout/expansion-panel',
                component: expansion_panel_component_1.ExpansionPanelComponent
            },
            {
                path: 'layout/grid-list',
                component: grid_list_component_1.GridListComponent
            },
            {
                path: 'layout/list',
                component: list_component_1.ListComponent
            },
            {
                path: 'layout/tabs',
                component: material_tabs_component_1.MaterialTabsComponent
            },
            {
                path: 'layout/stepper',
                component: stepper_component_1.StepperComponent
            },
            {
                path: 'layout/default-forms',
                component: default_forms_component_1.DefaultFormsComponent
            },
            {
                path: 'layout/tree',
                component: tree_component_1.TreeComponent
            },
            {
                path: 'buttons-and-indicators/button',
                component: button_component_1.ButtonComponent
            },
            {
                path: 'buttons-and-indicators/button-toggle',
                component: button_toggle_component_1.ButtonToggleComponent
            },
            {
                path: 'buttons-and-indicators/chips',
                component: chips_component_1.ChipsComponent
            },
            {
                path: 'buttons-and-indicators/icon',
                component: icon_component_1.IconComponent
            },
            {
                path: 'buttons-and-indicators/progress-bar',
                component: progress_bar_component_1.ProgressBarComponent
            },
            {
                path: 'buttons-and-indicators/progress-spinner',
                component: progress_spinner_component_1.ProgressSpinnerComponent
            },
            {
                path: 'buttons-and-indicators/ripples',
                component: ripples_component_1.RipplesComponent
            },
            {
                path: 'popups-and-modals/bottom-sheet',
                component: bottom_sheet_component_1.BottomSheetComponent
            },
            {
                path: 'popups-and-modals/dialog',
                component: dialog_component_1.DialogComponent
            },
            {
                path: 'popups-and-modals/snackbar',
                component: snackbar_component_1.SnackbarComponent
            },
            {
                path: 'popups-and-modals/tooltip',
                component: material_tooltip_component_1.MaterialTooltipComponent
            },
            {
                path: 'data'
            },
            {
                path: 'data-table/paginator',
                component: paginator_component_1.PaginatorComponent
            },
            {
                path: 'data-table/sort-header',
                component: sort_header_component_1.SortHeaderComponent
            },
            {
                path: 'data-table/table',
                component: material_table_component_1.MaterialTableComponent
            }
        ]
    }
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                // material modules
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
                datepicker_1.MatDatepickerModule,
                material_1.MatAutocompleteModule,
                material_1.MatListModule,
                material_1.MatSliderModule,
                material_1.MatCardModule,
                material_1.MatSelectModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatNativeDateModule,
                slide_toggle_1.MatSlideToggleModule,
                checkbox_1.MatCheckboxModule,
                material_1.MatMenuModule,
                material_1.MatTabsModule,
                material_1.MatTooltipModule,
                material_1.MatSidenavModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatSnackBarModule,
                material_1.MatTableModule,
                material_1.MatGridListModule,
                material_1.MatToolbarModule,
                material_1.MatBottomSheetModule,
                material_1.MatExpansionModule,
                material_1.MatDividerModule,
                material_1.MatSortModule,
                material_1.MatStepperModule,
                material_1.MatChipsModule,
                material_1.MatPaginatorModule,
                dialog_1.MatDialogModule,
                core_2.MatRippleModule,
                core_module_1.CoreModule,
                common_1.CommonModule,
                material_1.MatRadioModule,
                material_1.MatTreeModule,
                material_1.MatButtonToggleModule,
                partials_module_1.PartialsModule,
                material_preview_module_1.MaterialPreviewModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                code_preview_module_1.CodePreviewModule,
                router_1.RouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule],
            entryComponents: [
                pizza_party_component_1.PizzaPartyComponent,
                dialog_component_1.DialogComponent,
                dialog_component_1.ModalComponent,
                dialog_component_1.Modal2Component,
                dialog_component_1.Modal3Component,
                icon_component_1.IconComponent,
                tree_component_1.TreeComponent,
                bottom_sheet_example_component_1.BottomSheetExampleComponent
            ],
            providers: [
                icon_1.MatIconRegistry,
                { provide: material_1.MatBottomSheetRef, useValue: {} },
                { provide: material_1.MAT_BOTTOM_SHEET_DATA, useValue: {} },
                { provide: material_1.MAT_DATE_LOCALE, useValue: 'en-GB' },
                { provide: material_moment_adapter_1.MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
            ],
            declarations: [
                material_component_1.MaterialComponent,
                autocomplete_component_1.AutocompleteComponent,
                checkbox_component_1.CheckboxComponent,
                datepicker_component_1.DatepickerComponent,
                formfield_component_1.FormfieldComponent,
                input_component_1.InputComponent,
                radiobutton_component_1.RadiobuttonComponent,
                select_component_1.SelectComponent,
                slider_component_1.SliderComponent,
                slidertoggle_component_1.SlidertoggleComponent,
                menu_component_1.MenuComponent,
                sidenav_component_1.SidenavComponent,
                toolbar_component_1.ToolbarComponent,
                card_component_1.CardComponent,
                divider_component_1.DividerComponent,
                expansion_panel_component_1.ExpansionPanelComponent,
                grid_list_component_1.GridListComponent,
                list_component_1.ListComponent,
                material_tabs_component_1.MaterialTabsComponent,
                stepper_component_1.StepperComponent,
                button_component_1.ButtonComponent,
                button_toggle_component_1.ButtonToggleComponent,
                chips_component_1.ChipsComponent,
                icon_component_1.IconComponent,
                progress_bar_component_1.ProgressBarComponent,
                progress_spinner_component_1.ProgressSpinnerComponent,
                dialog_component_1.DialogComponent,
                dialog_component_1.ModalComponent,
                dialog_component_1.Modal2Component,
                dialog_component_1.Modal3Component,
                pizza_party_component_1.PizzaPartyComponent,
                snackbar_component_1.SnackbarComponent,
                material_tooltip_component_1.MaterialTooltipComponent,
                paginator_component_1.PaginatorComponent,
                sort_header_component_1.SortHeaderComponent,
                material_table_component_1.MaterialTableComponent,
                default_forms_component_1.DefaultFormsComponent,
                tree_component_1.TreeComponent,
                bottom_sheet_component_1.BottomSheetComponent,
                bottom_sheet_example_component_1.BottomSheetExampleComponent,
                ripples_component_1.RipplesComponent
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=material.module.js.map