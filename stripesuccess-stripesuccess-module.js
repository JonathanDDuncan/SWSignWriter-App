(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stripesuccess-stripesuccess-module"],{

/***/ "./src/app/stripesuccess/stripesuccess.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/stripesuccess/stripesuccess.module.ts ***!
  \*******************************************************/
/*! exports provided: StripesuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripesuccessPageModule", function() { return StripesuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stripesuccess_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stripesuccess.page */ "./src/app/stripesuccess/stripesuccess.page.ts");








var routes = [
    {
        path: '',
        component: _stripesuccess_page__WEBPACK_IMPORTED_MODULE_7__["StripesuccessPage"]
    }
];
var StripesuccessPageModule = /** @class */ (function () {
    function StripesuccessPageModule() {
    }
    StripesuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_stripesuccess_page__WEBPACK_IMPORTED_MODULE_7__["StripesuccessPage"]]
        })
    ], StripesuccessPageModule);
    return StripesuccessPageModule;
}());



/***/ }),

/***/ "./src/app/stripesuccess/stripesuccess.page.html":
/*!*******************************************************!*\
  !*** ./src/app/stripesuccess/stripesuccess.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>{{'Stripe Success' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  Your purchase was a success.\n</ion-content>\n"

/***/ }),

/***/ "./src/app/stripesuccess/stripesuccess.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/stripesuccess/stripesuccess.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZXN1Y2Nlc3Mvc3RyaXBlc3VjY2Vzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/stripesuccess/stripesuccess.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/stripesuccess/stripesuccess.page.ts ***!
  \*****************************************************/
/*! exports provided: StripesuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripesuccessPage", function() { return StripesuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");




var StripesuccessPage = /** @class */ (function () {
    function StripesuccessPage(http, storage) {
        this.http = http;
        this.storage = storage;
        this.serverUrl = 'https://swsignwriterapi.azurewebsites.net/';
    }
    StripesuccessPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSubscriptionInfo()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StripesuccessPage.prototype.getSubscriptionInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profile, subscriptionData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.GetCurrentUserProfile()];
                    case 1:
                        profile = _a.sent();
                        subscriptionData = {
                            privatekey: '**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX',
                            email: profile.email
                        };
                        this.http.post(this.serverUrl + 'api/stripe/subscription', subscriptionData, {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            })
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StripesuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripesuccess',
            template: __webpack_require__(/*! ./stripesuccess.page.html */ "./src/app/stripesuccess/stripesuccess.page.html"),
            styles: [__webpack_require__(/*! ./stripesuccess.page.scss */ "./src/app/stripesuccess/stripesuccess.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], StripesuccessPage);
    return StripesuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=stripesuccess-stripesuccess-module.js.map