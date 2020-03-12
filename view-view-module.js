(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-view-module"],{

/***/ "./src/app/view/view.module.ts":
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/*! exports provided: ViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view.page */ "./src/app/view/view.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_6__["ViewPage"]
    }
];
var ViewPageModule = /** @class */ (function () {
    function ViewPageModule() {
    }
    ViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [_view_page__WEBPACK_IMPORTED_MODULE_6__["ViewPage"]]
        })
    ], ViewPageModule);
    return ViewPageModule;
}());



/***/ }),

/***/ "./src/app/view/view.page.html":
/*!*************************************!*\
  !*** ./src/app/view/view.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{'Document' | translate}}\r\n    </ion-title> \r\n    <ion-item>\r\n      <ion-grid>\r\n        <ion-row justify-content-center >\r\n          <ion-label>{{'Image height' | translate}}</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-range min=\"50\" max=\"900\" step=\"10\" [(ngModel)]=\"imageheight\" pin=\"true\"\r\n            (ionChange)=\"heightChange($event)\">\r\n            <ion-icon size=\"small\" slot=\"start\" name=\"resize\"></ion-icon>\r\n            <ion-icon slot=\"end\" name=\"resize\"></ion-icon>\r\n          </ion-range>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n\r\n    <!-- <ion-buttons slot=\"end\">\r\n\r\n      <ion-button *ngIf=\"isCordova()\" color=\"primary\" fill=\"solid\" (click)=\"share()\">\r\n         {{'Share' | translate}}<ion-icon name=\"share\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"!isCordova()\" color=\"primary\" fill=\"solid\" (click)=\"copy()\">\r\n        <ion-icon name=\"copy\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div id=\"document\" class=\"document\">\r\n    <div class=\"signtext\" [style.height.px]=\"signtextHeight\">\r\n      <span [innerHTML]=\"document | safeHtml\"></span>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon (click)=\"edit()\" name=\"create\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> \r\n\r\n  <div>\r\n  <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\r\n      <ion-label>Edit</ion-label>\r\n      <ion-fab-button>\r\n          <ion-icon (click)=\"edit()\" name=\"arrow-dropright-circle\" style=\"zoom:2.0;\"></ion-icon>\r\n      </ion-fab-button>\r\n  </ion-fab>\r\n</div>\r\n  -->\r\n  <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\r\n       <ion-label>{{'Share' | translate}}</ion-label>\r\n      <ion-fab-button (click)=\"share()\" *ngIf=\"isCordova()\">\r\n          <ion-icon  name=\"arrow-dropright-circle\" style=\"zoom:2.0;\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button (click)=\"copy()\" *ngIf=\"!isCordova()\" >\r\n          <ion-icon  name=\"share\" style=\"zoom:2.0;\"></ion-icon>\r\n      </ion-fab-button>\r\n  </ion-fab>\r\n \r\n\r\n  <canvas id='canvas'></canvas>\r\n  <span class=\"preloadFonts\" [innerHTML]=\"preloadFonts | safeHtml\"></span>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/view/view.page.scss":
/*!*************************************!*\
  !*** ./src/app/view/view.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".document {\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n  .document div {\n    height: 100%; }\n  .preloadFonts {\n  width: 0px;\n  height: 0px;\n  display: inline-block;\n  overflow: hidden; }\n  ion-range {\n  padding-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9JOlxcU1dTaWduV3JpdGVyXFxTV1NpZ25Xcml0ZXItQXBwL3NyY1xcYXBwXFx2aWV3XFx2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBO0VBSGxCO0lBTVEsWUFBWSxFQUFBO0VBSXBCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3L3ZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcmVsb2FkRm9udHMge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW9uLXJhbmdlIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/view/view.page.ts":
/*!***********************************!*\
  !*** ./src/app/view/view.page.ts ***!
  \***********************************/
/*! exports provided: ViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPage", function() { return ViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../document.service */ "./src/app/document.service.ts");
/* harmony import */ var _social_sharing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../social-sharing.service */ "./src/app/social-sharing.service.ts");
/* harmony import */ var _show_image_show_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../show-image/show-image.page */ "./src/app/show-image/show-image.page.ts");








var ViewPage = /** @class */ (function () {
    function ViewPage(modalController, documentService, socialSharingService, translate, router) {
        var _this = this;
        this.modalController = modalController;
        this.documentService = documentService;
        this.socialSharingService = socialSharingService;
        this.translate = translate;
        this.router = router;
        this.imageheight = 199;
        // Force fonts to load before anything is shown
        this.preloadFonts = ssw.paragraph('M547x518S2ff00482x483S11911518x488S26600531x451');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                var fsw = _this.documentService.getFSW();
                _this.document = ssw.paragraph(fsw);
                _this.imageheight = 200;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // Hide loading indicator
            }
        });
    }
    ViewPage.prototype.ngOnInit = function () { };
    ViewPage.prototype.ionViewWillEnter = function () {
        var fsw = this.documentService.getFSW();
        this.document = ssw.paragraph(fsw);
    };
    ViewPage.prototype.share = function () {
        var _this = this;
        var fsw = this.documentService.getFSW();
        this.document = ssw.paragraph(fsw);
        requestAnimationFrame(function () { return _this.sharecontinuation(fsw); });
    };
    ViewPage.prototype.copy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fsw, canvas1, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fsw = this.documentService.getFSW();
                        canvas1 = getSignTextCanvas(fsw, 20.0, this.imageheight);
                        return [4 /*yield*/, this.modalController.create({
                                component: _show_image_show_image_page__WEBPACK_IMPORTED_MODULE_7__["ShowImagePage"],
                                componentProps: { canvas: canvas1, imagebase64: canvas1.toDataURL('image/png') }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewPage.prototype.heightChange = function (ev) {
        this.signtextHeight = ev.detail.value;
    };
    ViewPage.prototype.edit = function () {
        return this.router.navigateByUrl('/edit');
    };
    ViewPage.prototype.sharecontinuation = function (fsw) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ViewPage.prototype.isCordova = function () {
        return !!window.cordova;
    };
    ViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.page.html */ "./src/app/view/view.page.html"),
            styles: [__webpack_require__(/*! ./view.page.scss */ "./src/app/view/view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"],
            _social_sharing_service__WEBPACK_IMPORTED_MODULE_6__["SocialSharingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewPage);
    return ViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-view-module.js.map