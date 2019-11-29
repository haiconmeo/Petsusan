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
var modalWithDefaultOptions = {
    beforeCodeTitle: 'Modal with default options',
    htmlCode: "\n<div class=\"kt-section\">\n  <span *ngIf=\"closeResult\" class=\"kt-section__sub\">\n    <pre>{{closeResult}}</pre>\n  </span>\n  <div class=\"kt-section__content\">\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Basic demo</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n\t\t  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n\t\t  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n\t\t  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum\n          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-primary\" (click)=\"open(content)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component} from '@angular/core';\n\nimport {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-basic',\n    templateUrl: './modal-basic.html'\n})\nexport class NgbdModalBasic {\n    closeResult: string;\n\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content).result.then((result) => {\n        this.closeResult = `Closed with: ${result}`;\n        }, (reason) => {\n            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;\n        });\n    }\n\n    private getDismissReason(reason: any): string {\n        if (reason === ModalDismissReasons.ESC) {\n            return 'by pressing ESC';\n        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {\n            return 'by clicking on a backdrop';\n        } else {\n            return  `with: ${reason}`;\n        }\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var componentsAsContent = {
    beforeCodeTitle: 'Components as content',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__sub\">\n    <p>You can pass an existing component as content of the modal window. In this case remember to add content component as an\n      <code>entryComponents</code> section of your\n      <code>NgModule</code>.\n    </p>\n  </div>\n  <div class=\"kt-section__content\">\n    <button class=\"btn btn-info\" (click)=\"open2()\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, Input} from '@angular/core';\n\nimport {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-content',\n    template: `\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Hi there!</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>Hello, {{name}}!</p>\n        </div>\n\t\t<div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n        </div>\n    `\n})\nexport class NgbdModalContent {\n    @Input() name;\n    constructor(public activeModal: NgbActiveModal) {}\n    }\n\n@Component({\n    selector: 'ngbd-modal-component',\n    templateUrl: './modal-component.html'\n})\nexport class NgbdModalComponent {\n    constructor(private modalService: NgbModal) {}\n\n    open() {\n        const modalRef = this.modalService.open(NgbdModalContent);\n        modalRef.componentInstance.name = 'World';\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var modalWithCustomClass = {
    beforeCodeTitle: 'Modal with custom class',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n       </div>\n    </ng-template>\n    <button class=\"btn btn-focus\" (click)=\"open(content)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\n\nimport {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-customclass',\n    templateUrl: './modal-customclass.html',\n\tencapsulation: ViewEncapsulation.None,\n\tstyles: [`\n            .dark-modal .modal-content {\n            background-color: #292b2c;\n            color: white;\n        }\n            .dark-modal .close {\n            color: white;\n        }\n   `]\n})\nexport class NgbdModalCustomclass {\n    closeResult: string;\n\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content, { windowClass: 'dark-modal' });\n    }\n\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var scrollableFixedContent = {
    beforeCodeTitle: 'Scrollable fixed content',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Scrollable fixed content</h4>\n\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n\t    </button>\n      </div>\n      <div class=\"modal-body\">\n        <perfect-scrollbar style=\"height: 250px;\" [config]=\"config\">\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n\t\t\tstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n\t\t\ttype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n\t\t\tremaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n\t\t\tLorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n          </p>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n\t\t\tstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n\t\t\ttype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n\t\t\tessentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n\t\t   dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n\t\t   book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n        </perfect-scrollbar>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-metal\" (click)=\"open(content)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-scrollablefixedcontent',\n    templateUrl: './modal-scrollabledixedcontent.html',\n})\nexport class NgbdModalScrollableFixedContent {\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content);\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var scrollingLongContent = {
    beforeCodeTitle: 'Scrolling long content',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ng-template #content5 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Scrollable fixed content</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum ateros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo\n          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo\n          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi\n\t\t  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo\n          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-brand\" (click)=\"open(content5)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-scrollingLongContent',\n    templateUrl: './modal-scrollingLongContent.html',\n})\nexport class NgbdModalScrollinglongcontent {\n    constructor(private modalService: NgbModal) {}\n\n    open(content) {\n        this.modalService.open(content);\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var largeModal = {
    beforeCodeTitle: 'Large modal',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ng-template #content6 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-success\" (click)=\"openLarge(content6)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-largemodal',\n    templateUrl: './modal-largemodal.html',\n})\nexport class NgbdModalLargeModal {\n    constructor(private modalService: NgbModal) {}\n\n    openLarge(content) {\n        this.modalService.open(content, {\n            size: 'lg'\n        });\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var smallModal = {
    beforeCodeTitle: 'Small modal',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ng-template #content7 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-success\" (click)=\"openSmall(content7)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-smallmodal',\n    templateUrl: './modal-smallmodal.html',\n})\nexport class NgbdModalSmallmodal {\n    constructor(private modalService: NgbModal) {}\n\n    openSmall(content) {\n        this.modalService.open(content, {\n            size: 'sm'\n        });\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var verticallyCentered = {
    beforeCodeTitle: 'Vertically centered',
    htmlCode: "\n<div class=\"kt-section\">\n  <div class=\"kt-section__content\">\n    <ng-template #content8 let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n\t\t  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n\t\t  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.\n          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </ng-template>\n    <button class=\"btn btn-danger\" (click)=\"openCentred(content7)\">Launch demo modal</button>\n  </div>\n</div>\n",
    tsCode: "\nimport {Component, ViewEncapsulation} from '@angular/core';\nimport {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-modal-vertically\u0441entered',\n    templateUrl: './modal-vertically\u0441entered.html',\n})\nexport class NgbdModalVerticallycentered {\n    constructor(private modalService: NgbModal) {}\n\n    openCentred(content) {\n        this.modalService.open(content, { centered: true } );\n    }\n}\n",
    isCodeVisible: false,
    isExampleExpanded: true
};
var NgbdModalContentComponent = /** @class */ (function () {
    function NgbdModalContentComponent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgbdModalContentComponent.prototype, "name", void 0);
    NgbdModalContentComponent = __decorate([
        core_1.Component({
            selector: 'kt-ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
    ], NgbdModalContentComponent);
    return NgbdModalContentComponent;
}());
exports.NgbdModalContentComponent = NgbdModalContentComponent;
var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.open2 = function () {
        var modalRef = this.modalService.open(NgbdModalContentComponent);
        modalRef.componentInstance.name = 'World';
    };
    ModalComponent.prototype.open3 = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalComponent.prototype.openLarge = function (content) {
        this.modalService.open(content, {
            size: 'lg'
        });
    };
    ModalComponent.prototype.openSmall = function (content) {
        this.modalService.open(content, {
            size: 'sm'
        });
    };
    ModalComponent.prototype.openCentred = function (content) {
        this.modalService.open(content);
    };
    ModalComponent.prototype.ngOnInit = function () {
        this.exampleModalWithDefaultOptions = modalWithDefaultOptions;
        this.exampleComponentsAsContent = componentsAsContent;
        this.exampleModalWithCustomClass = modalWithCustomClass;
        this.exampleScrollableFixedContent = scrollableFixedContent;
        this.exampleScrollingLongContent = scrollingLongContent;
        this.exampleLargeModal = largeModal;
        this.exampleSmallModal = smallModal;
        this.exampleVerticallyCentered = verticallyCentered;
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'kt-modal',
            templateUrl: './modal.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map