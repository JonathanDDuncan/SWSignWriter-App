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

module.exports = ".<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle>\r\n        <ion-button>\r\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n        </ion-button>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title>{{'Stripe Success' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  {{'Your purchase was a success.' | translate}}\r\n\r\n  {{'Your subscription will renew on' | translate}} {{subscriptionEndDate}}\r\n</ion-content>\r\n"

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
/* harmony import */ var _stripe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../stripe.service */ "./src/app/stripe.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var StripesuccessPage = /** @class */ (function () {
    function StripesuccessPage(http, storage, route, stripeservice, router) {
        this.http = http;
        this.storage = storage;
        this.route = route;
        this.stripeservice = stripeservice;
        this.router = router;
    }
    StripesuccessPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profile;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.GetCurrentUserProfile()];
                    case 1:
                        profile = _a.sent();
                        if (!profile || profile === null) {
                            this.router.navigate(['/login']);
                        }
                        return [4 /*yield*/, this.getSubscriptionInfo()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StripesuccessPage.prototype.getSubscriptionInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profile;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.GetCurrentUserProfile()];
                    case 1:
                        profile = _a.sent();
                        if (profile && profile !== null) {
                            this.route.queryParamMap.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sessionid, subscription, d, ye, mo, da;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            sessionid = params.params['session_id'];
                                            return [4 /*yield*/, this.stripeservice.GetandSaveStripeSubscriptionData(profile.email, sessionid)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, this.storage.GetSubscription(profile.email)];
                                        case 2:
                                            subscription = _a.sent();
                                            if (subscription) {
                                                d = new Date(subscription.endDate);
                                                ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                                                mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                                                da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                                                this.subscriptionEndDate = da + "-" + mo + "-" + ye;
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StripesuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stripesuccess',
            template: __webpack_require__(/*! ./stripesuccess.page.html */ "./src/app/stripesuccess/stripesuccess.page.html"),
            styles: [__webpack_require__(/*! ./stripesuccess.page.scss */ "./src/app/stripesuccess/stripesuccess.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _stripe_service__WEBPACK_IMPORTED_MODULE_1__["StripeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], StripesuccessPage);
    return StripesuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=stripesuccess-stripesuccess-module.js.map