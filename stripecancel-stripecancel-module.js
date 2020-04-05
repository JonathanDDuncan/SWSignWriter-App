(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stripecancel-stripecancel-module"],{

/***/ "./src/app/stripecancel/stripecancel.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/stripecancel/stripecancel.module.ts ***!
  \*****************************************************/
/*! exports provided: StripecancelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripecancelPageModule", function() { return StripecancelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stripecancel_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stripecancel.page */ "./src/app/stripecancel/stripecancel.page.ts");








var routes = [
    {
        path: '',
        component: _stripecancel_page__WEBPACK_IMPORTED_MODULE_7__["StripecancelPage"]
    }
];
var StripecancelPageModule = /** @class */ (function () {
    function StripecancelPageModule() {
    }
    StripecancelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_stripecancel_page__WEBPACK_IMPORTED_MODULE_7__["StripecancelPage"]]
        })
    ], StripecancelPageModule);
    return StripecancelPageModule;
}());



/***/ }),

/***/ "./src/app/stripecancel/stripecancel.page.html":
/*!*****************************************************!*\
  !*** ./src/app/stripecancel/stripecancel.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle>\r\n        <ion-button>\r\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n        </ion-button>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title>{{'Stripe Canceled' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  Your Stripe purchase was canceled.\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/stripecancel/stripecancel.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/stripecancel/stripecancel.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZWNhbmNlbC9zdHJpcGVjYW5jZWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/stripecancel/stripecancel.page.ts":
/*!***************************************************!*\
  !*** ./src/app/stripecancel/stripecancel.page.ts ***!
  \***************************************************/
/*! exports provided: StripecancelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripecancelPage", function() { return StripecancelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StripecancelPage = /** @class */ (function () {
    function StripecancelPage() {
    }
    StripecancelPage.prototype.ngOnInit = function () {
    };
    StripecancelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripecancel',
            template: __webpack_require__(/*! ./stripecancel.page.html */ "./src/app/stripecancel/stripecancel.page.html"),
            styles: [__webpack_require__(/*! ./stripecancel.page.scss */ "./src/app/stripecancel/stripecancel.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StripecancelPage);
    return StripecancelPage;
}());



/***/ })

}]);
//# sourceMappingURL=stripecancel-stripecancel-module.js.map