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
// Angular
var core_1 = require("@angular/core");
var SearchDropdownComponent = /** @class */ (function () {
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    function SearchDropdownComponent(cdr) {
        this.cdr = cdr;
        // Public properties
        // Set icon class name
        this.icon = 'flaticon2-search-1';
    }
    /**
     * On init
     */
    SearchDropdownComponent.prototype.ngOnInit = function () {
        // simulate result from API
        // type 0|1 as separator or item
        this.result = [
            {
                icon: '',
                text: 'Documents',
                type: 0
            }, {
                icon: '<i class="flaticon-interface-3 kt-font-warning">',
                text: 'Annual finance report',
                type: 1
            }, {
                icon: '<i class="flaticon-share kt-font-success"></i>',
                text: 'Company meeting schedule',
                type: 1
            }, {
                icon: '<i class="flaticon-paper-plane kt-font-info"></i>',
                text: 'Project quotations',
                type: 1
            }, {
                icon: '',
                text: 'Customers',
                type: 0
            }, {
                icon: '<img src="assets/media/users/user1.jpg" alt="">',
                text: 'Amanda Anderson',
                type: 1
            }, {
                icon: '<img src="assets/media/users/user2.jpg" alt="">',
                text: 'Kennedy Lloyd',
                type: 1
            }, {
                icon: '<img src="assets/media/users/user3.jpg" alt="">',
                text: 'Megan Weldon',
                type: 1
            }, {
                icon: '<img src="assets/media/users/user4.jpg" alt="">',
                text: 'Marc-André ter Stegen',
                type: 1
            }, {
                icon: '',
                text: 'Files',
                type: 0
            }, {
                icon: '<i class="flaticon-lifebuoy kt-font-warning"></i>',
                text: 'Revenue report',
                type: 1
            }, {
                icon: '<i class="flaticon-coins kt-font-primary"></i>',
                text: 'Anual finance report',
                type: 1
            }, {
                icon: '<i class="flaticon-calendar kt-font-danger"></i>',
                text: 'Tax calculations',
                type: 1
            }
        ];
    };
    /**
     * Search
     * @param e: Event
     */
    SearchDropdownComponent.prototype.search = function (e) {
        var _this = this;
        this.data = null;
        if (e.target.value.length > 2) {
            this.loading = true;
            // simulate getting search result
            setTimeout(function () {
                _this.data = _this.result;
                _this.loading = false;
                _this.cdr.markForCheck();
            }, 500);
        }
    };
    /**
     * Clear search
     *
     * @param e: Event
     */
    SearchDropdownComponent.prototype.clear = function (e) {
        this.data = null;
        this.searchInput.nativeElement.value = '';
    };
    SearchDropdownComponent.prototype.openChange = function () {
        var _this = this;
        setTimeout(function () { return _this.searchInput.nativeElement.focus(); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SearchDropdownComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SearchDropdownComponent.prototype, "useSVG", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], SearchDropdownComponent.prototype, "searchInput", void 0);
    SearchDropdownComponent = __decorate([
        core_1.Component({
            selector: 'kt-search-dropdown',
            templateUrl: './search-dropdown.component.html',
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], SearchDropdownComponent);
    return SearchDropdownComponent;
}());
exports.SearchDropdownComponent = SearchDropdownComponent;
//# sourceMappingURL=search-dropdown.component.js.map