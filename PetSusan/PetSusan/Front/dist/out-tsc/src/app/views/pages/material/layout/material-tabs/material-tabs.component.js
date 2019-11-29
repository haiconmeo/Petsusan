"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basicTabs = {
    beforeCodeTitle: 'Basic tabs',
    htmlCode: "\n<mat-tab-group>\n  <mat-tab label=\"Tab 1\">Content 1</mat-tab>\n  <mat-tab label=\"Tab 2\">Content 2</mat-tab>\n</mat-tab-group>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Basic tabs\n*/\n@Component({\n  selector: 'tabs-overview-example',\n  templateUrl: 'tabs-overview-example.html',\n  styleUrls: ['tabs-overview-example.css'],\n})\nexport class TabsOverviewExample {}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var complex = {
    beforeCodeTitle: 'Complex Example',
    htmlCode: "\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Tabs with text labels</h2>\n    <mat-tab-group class=\"demo-tab-group\">\n      <mat-tab label=\"Tab 1\">\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 2\">\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 3\" disabled>\n        No content\n      </mat-tab>\n      <mat-tab label=\"Tab 4\">\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n          <br />\n          <br />\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 5\">\n        No content\n      </mat-tab>\n      <mat-tab label=\"Tab 6\">\n        No content\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Tabs with icon labels</h2>\n    <mat-tab-group class=\"demo-tab-group\">\n      <mat-tab label=\"Tab 1\">\n        <ng-template mat-tab-label>\n          <mat-icon>security</mat-icon>\n        </ng-template>\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n\t\t  In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 2\">\n        <ng-template mat-tab-label>\n          <mat-icon>attach_file</mat-icon>\n        </ng-template>\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 3\" disabled>\n        <ng-template mat-tab-label>\n          <mat-icon>block</mat-icon>\n        </ng-template>\n        No content\n      </mat-tab>\n      <mat-tab label=\"Tab 4\">\n        <ng-template mat-tab-label>\n          <mat-icon>loop</mat-icon>\n        </ng-template>\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n          <br />\n          <br />\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n\t\t</div>\n      </mat-tab>\n      <mat-tab label=\"Tab 5\">\n        <ng-template mat-tab-label>\n          <mat-icon>build</mat-icon>\n        </ng-template>\n        No content\n      </mat-tab>\n\t  <mat-tab label=\"Tab 6\">\n        <ng-template mat-tab-label>\n          <mat-icon>thumb_down</mat-icon>\n        </ng-template>\n        No content\n\t  </mat-tab>\n\t</mat-tab-group>\n  </mat-card-content>\n</mat-card>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\n/**\n* @title Complex Example\n*/\n@Component({\n  selector: 'tabs-template-label-example',\n  templateUrl: 'tabs-template-label-example.html',\n  styleUrls: ['./tabs-template-label-example.css']\n  })\nexport class TabsTemplateLabelExample {}\n",
    cssCode: "\n.demo-tab-group {\n  border: 1px solid #e8e8e8;\n}\n.demo-tab-content {\n  padding: 16px;\n}\n\t\t",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var MaterialTabsComponent = /** @class */ (function () {
    function MaterialTabsComponent() {
    }
    MaterialTabsComponent.prototype.ngOnInit = function () {
        this.exampleBasicTabs = basicTabs;
        this.exampleComplex = complex;
    };
    MaterialTabsComponent = __decorate([
        core_1.Component({
            selector: 'kt-material-tabs',
            templateUrl: './material-tabs.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ["\n\t.demo-tab-group {\n\t\tborder: 1px solid #e8e8e8;\n\t  }\n\t  .demo-tab-content {\n\t\tpadding: 16px;\n\t  }\n\t"]
        })
    ], MaterialTabsComponent);
    return MaterialTabsComponent;
}());
exports.MaterialTabsComponent = MaterialTabsComponent;
//# sourceMappingURL=material-tabs.component.js.map