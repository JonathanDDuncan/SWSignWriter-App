(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-view-module"],{

/***/ "./src/app/browser-type.service.ts":
/*!*****************************************!*\
  !*** ./src/app/browser-type.service.ts ***!
  \*****************************************/
/*! exports provided: BrowserTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserTypeService", function() { return BrowserTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrowserTypeService = /** @class */ (function () {
    function BrowserTypeService() {
    }
    //  * @summary
    //  * utils.isMobile
    //  * --------------
    //  * @desc
    //  * Creates a global object with member functions that test if the client's browser
    //  * belongs to a specific family of devices.
    //  * @function utils.isMobile
    //  * @return {Boolean}
    //  * @see {@link https://stackoverflow.com/questions/32570067/how-to-detect-whether-browser-is-ios-android-or-desktop-using-jquery},
    //  * {@link https://bitsrc.io/tomlandau/simple-js/global/is-mobile/code#src/global/isMobile.js}
    BrowserTypeService.prototype.utils = function () {
        return {
            getUserAgent: function () {
                return navigator.userAgent;
            },
            Android: function () {
                return /Android/i.test(this.getUserAgent()) && !this.Windows();
            },
            BlackBerry: function () {
                return /BlackBerry|BB10|PlayBook/i.test(this.getUserAgent());
            },
            iPhone: function () {
                return /iPhone/i.test(this.getUserAgent()) && !this.iPad() && !this.Windows();
            },
            iPod: function () {
                return /iPod/i.test(this.getUserAgent());
            },
            iPad: function () {
                return /iPad/i.test(this.getUserAgent());
            },
            iOS: function () {
                return (this.iPad() || this.iPod() || this.iPhone());
            },
            Opera: function () {
                return /Opera Mini/i.test(this.getUserAgent());
            },
            Windows: function () {
                return /Windows Phone|IEMobile|WPDesktop/i.test(this.getUserAgent());
            },
            KindleFire: function () {
                return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i
                    .test(this.getUserAgent());
            },
            any: function () {
                return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
            }
        };
    };
    BrowserTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrowserTypeService);
    return BrowserTypeService;
}());



/***/ }),

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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{'Document' | translate}}\r\n    </ion-title>\r\n    <ion-item>\r\n      <ion-grid>\r\n        <ion-row justify-content-center>\r\n          <ion-label>{{'Image height' | translate}}</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-range\r\n            min=\"50\"\r\n            max=\"900\"\r\n            step=\"10\"\r\n            [(ngModel)]=\"imageheight\"\r\n            pin=\"true\"\r\n            (ionChange)=\"heightChange($event)\"\r\n          >\r\n            <ion-icon size=\"small\" slot=\"start\" name=\"resize\"></ion-icon>\r\n            <ion-icon slot=\"end\" name=\"resize\"></ion-icon>\r\n          </ion-range>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n\r\n    <!-- <ion-buttons slot=\"end\">\r\n\r\n      <ion-button *ngIf=\"isCordova()\" color=\"primary\" fill=\"solid\" (click)=\"share()\">\r\n         {{'Share' | translate}}<ion-icon name=\"share\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"!isCordova()\" color=\"primary\" fill=\"solid\" (click)=\"copy()\">\r\n        <ion-icon name=\"copy\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div id=\"document\" class=\"document\">\r\n    <div class=\"signtext\" [style.height.px]=\"signtextHeight\">\r\n      <span [innerHTML]=\"document | safeHtml\"></span>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon (click)=\"edit()\" name=\"create\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> \r\n\r\n  <div>\r\n  <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\r\n      <ion-label>Edit</ion-label>\r\n      <ion-fab-button>\r\n          <ion-icon (click)=\"edit()\" name=\"arrow-dropright-circle\" style=\"zoom:2.0;\"></ion-icon>\r\n      </ion-fab-button>\r\n  </ion-fab>\r\n</div>\r\n  -->\r\n  <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\r\n    <ion-label>{{'Share' | translate}}</ion-label>\r\n    <!-- <ion-fab-button (click)=\"share1()\" *ngIf=\"isCordova()\">\r\n          <ion-icon  name=\"arrow-dropright-circle\" style=\"zoom:2.0;\"></ion-icon>\r\n      </ion-fab-button> -->\r\n    <ion-fab-button (click)=\"share()\">\r\n      <!-- *ngIf=\"!isCordova()\"  -->\r\n      <ion-icon name=\"share\" style=\"zoom: 2;\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <canvas id=\"canvas\"></canvas>\r\n  <span class=\"preloadFonts\" [innerHTML]=\"preloadFonts | safeHtml\"></span>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/view/view.page.scss":
/*!*************************************!*\
  !*** ./src/app/view/view.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".document {\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n  .document div {\n    height: 100%; }\n  .preloadFonts {\n  width: 0px;\n  height: 0px;\n  display: inline-block;\n  overflow: hidden; }\n  ion-range {\n  padding-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9IOlxcU1dTaWduV3JpdGVyXFxTV1NpZ25Xcml0ZXItQXBwL3NyY1xcYXBwXFx2aWV3XFx2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBO0VBSGxCO0lBTVEsWUFBWSxFQUFBO0VBSXBCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3L3ZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcmVsb2FkRm9udHMge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW9uLXJhbmdlIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _browser_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../browser-type.service */ "./src/app/browser-type.service.ts");
/* harmony import */ var _share_desktop_share_desktop_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../share-desktop/share-desktop.page */ "./src/app/share-desktop/share-desktop.page.ts");
/* harmony import */ var _share_android_share_android_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../share-android/share-android.page */ "./src/app/share-android/share-android.page.ts");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/subscription.service */ "./src/app/services/subscription.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../document.service */ "./src/app/document.service.ts");
/* harmony import */ var _share_ios_share_ios_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../share-ios/share-ios.page */ "./src/app/share-ios/share-ios.page.ts");











var ViewPage = /** @class */ (function () {
    function ViewPage(modalController, documentService, subscriptionService, translate, btUtil, router) {
        var _this = this;
        this.modalController = modalController;
        this.documentService = documentService;
        this.subscriptionService = subscriptionService;
        this.translate = translate;
        this.btUtil = btUtil;
        this.router = router;
        this.imageheight = 900;
        // Force fonts to load before anything is shown
        this.preloadFonts = ssw.paragraph('M547x518S2ff00482x483S11911518x488S26600531x451');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                var fsw = _this.documentService.getFSW();
                _this.document = ssw.paragraph(fsw);
                _this.imageheight = 200;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                // Hide loading indicator
            }
        });
    }
    ViewPage.prototype.ngOnInit = function () {
        this.subscriptionService.CanUse();
    };
    ViewPage.prototype.ionViewWillEnter = function () {
        var fsw = this.documentService.getFSW();
        this.document = ssw.paragraph(fsw);
    };
    ViewPage.prototype.share1 = function () {
        var _this = this;
        var fsw = this.documentService.getFSW();
        this.document = ssw.paragraph(fsw);
        requestAnimationFrame(function () { return _this.sharecontinuation1(fsw); });
    };
    ViewPage.prototype.share = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fsw, btUtils;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fsw = this.documentService.getFSW();
                        btUtils = this.btUtil.utils();
                        if (!(fsw && fsw !== null)) return [3 /*break*/, 6];
                        if (!btUtils.Android()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ShareAndroid(fsw)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(btUtils.iOS() || btUtils.iPad() || btUtils.iPhone() || btUtils.iPod())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.ShareIOS(fsw)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.ShareDesktop(fsw)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ViewPage.prototype.ShareIOS = function (fsw) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var canvas1, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canvas1 = getSignTextCanvas(fsw, 20.0, this.imageheight);
                        return [4 /*yield*/, this.modalController.create({
                                component: _share_ios_share_ios_page__WEBPACK_IMPORTED_MODULE_10__["ShareIOSPage"],
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
    ViewPage.prototype.ShareAndroid = function (fsw) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var canvas1, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canvas1 = getSignTextCanvas(fsw, 20.0, this.imageheight);
                        return [4 /*yield*/, this.modalController.create({
                                component: _share_android_share_android_page__WEBPACK_IMPORTED_MODULE_3__["ShareAndroidPage"],
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
    ViewPage.prototype.ShareDesktop = function (fsw) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var canvas1, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canvas1 = getSignTextCanvas(fsw, 20.0, this.imageheight);
                        return [4 /*yield*/, this.modalController.create({
                                component: _share_desktop_share_desktop_page__WEBPACK_IMPORTED_MODULE_2__["ShareDesktopPage"],
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
    ViewPage.prototype.sharecontinuation1 = function (fsw) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    ViewPage.prototype.isCordova = function () {
        return !!window.cordova;
    };
    ViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.page.html */ "./src/app/view/view.page.html"),
            styles: [__webpack_require__(/*! ./view.page.scss */ "./src/app/view/view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _document_service__WEBPACK_IMPORTED_MODULE_9__["DocumentService"],
            _services_subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _browser_type_service__WEBPACK_IMPORTED_MODULE_1__["BrowserTypeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ViewPage);
    return ViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-view-module.js.map