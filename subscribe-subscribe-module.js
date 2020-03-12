(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscribe-subscribe-module"],{

/***/ "./src/app/subscribe/subscribe.module.ts":
/*!***********************************************!*\
  !*** ./src/app/subscribe/subscribe.module.ts ***!
  \***********************************************/
/*! exports provided: SubscribePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribePageModule", function() { return SubscribePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subscribe_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribe.page */ "./src/app/subscribe/subscribe.page.ts");








var routes = [
    {
        path: '',
        component: _subscribe_page__WEBPACK_IMPORTED_MODULE_7__["SubscribePage"]
    }
];
var SubscribePageModule = /** @class */ (function () {
    function SubscribePageModule() {
    }
    SubscribePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            ],
            declarations: [_subscribe_page__WEBPACK_IMPORTED_MODULE_7__["SubscribePage"]]
        })
    ], SubscribePageModule);
    return SubscribePageModule;
}());



/***/ }),

/***/ "./src/app/subscribe/subscribe.page.html":
/*!***********************************************!*\
  !*** ./src/app/subscribe/subscribe.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle>\r\n        <ion-button>\r\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n        </ion-button>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title>{{'Subscribe' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col>\r\n      <p>1 Month FREE</p>\r\n      <p>+ $5/month for 11 months</p>\r\n      <ion-button (click)=\"SubscribeYearly()\"> Subscribe Yearly</ion-button>\r\n    <hr/>\r\n     \r\n      <p>$5/month</p>\r\n      <ion-button (click)=\"SubscribeMonthly()\">Subscribe Monthly</ion-button>\r\n    </ion-col>\r\n    \r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.page.scss":
/*!***********************************************!*\
  !*** ./src/app/subscribe/subscribe.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZS9zdWJzY3JpYmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subscribe/subscribe.page.ts":
/*!*********************************************!*\
  !*** ./src/app/subscribe/subscribe.page.ts ***!
  \*********************************************/
/*! exports provided: SubscribePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribePage", function() { return SubscribePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");




var SubscribePage = /** @class */ (function () {
    function SubscribePage(http, storage) {
        this.http = http;
        this.storage = storage;
        // private serverUrl = 'https://localhost:44309/';
        this.serverUrl = 'https://swsignwriterapi.azurewebsites.net/';
    }
    SubscribePage.prototype.ngOnInit = function () {
    };
    SubscribePage.prototype.SubscribeMonthly = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var planId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        planId = 'plan_GEcB3WZYgKsVER';
                        return [4 /*yield*/, this.createSession(planId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscribePage.prototype.SubscribeYearly = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var planId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        planId = 'plan_GEcEaSP0i9BI5L';
                        return [4 /*yield*/, this.createSession(planId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscribePage.prototype.createSession = function (planId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profile, subscriptionEndDate, trialStartDate, subscriptionRequest;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.GetCurrentUserProfile()];
                    case 1:
                        profile = _a.sent();
                        return [4 /*yield*/, this.storage.GetSubscriptionEndDate(profile.email)];
                    case 2:
                        subscriptionEndDate = _a.sent();
                        return [4 /*yield*/, this.storage.GetTrialStartDate(profile.email)];
                    case 3:
                        trialStartDate = _a.sent();
                        console.log(profile);
                        debugger;
                        subscriptionRequest = {
                            client: profile,
                            planId: planId,
                            subscriptionEndDate: subscriptionEndDate,
                            trialStartDate: trialStartDate
                        };
                        this.http.post(this.serverUrl + 'api/stripe/createsession', subscriptionRequest, {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            })
                        })
                            .subscribe(function (data) {
                            console.log(data);
                            var CHECKOUT_SESSION_ID = data;
                            var stripe = Stripe('pk_test_l5XnhomUyeQmxzROJWndWDXD00M33eN4jl');
                            stripe.redirectToCheckout({
                                sessionId: CHECKOUT_SESSION_ID
                            }).then(function (result) {
                                if (result.error) {
                                    console.log('There was an error with the checkout.');
                                }
                                else {
                                    console.log('Checkout was a success.');
                                    console.log(result);
                                }
                                // If `redirectToCheckout` fails due to a browser or network
                                // error, display the localized error message to your customer
                                // using `result.error.message`.
                            });
                        }, function (error) {
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscribePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.page.html */ "./src/app/subscribe/subscribe.page.html"),
            styles: [__webpack_require__(/*! ./subscribe.page.scss */ "./src/app/subscribe/subscribe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], SubscribePage);
    return SubscribePage;
}());



/***/ })

}]);
//# sourceMappingURL=subscribe-subscribe-module.js.map