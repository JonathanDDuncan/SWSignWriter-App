(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"],{

/***/ "./src/app/edit/edit.module.ts":
/*!*************************************!*\
  !*** ./src/app/edit/edit.module.ts ***!
  \*************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/edit/edit.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            entryComponents: [],
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.page.html":
/*!*************************************!*\
  !*** ./src/app/edit/edit.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'Edit' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-item>\r\n    <ion-textarea\r\n      #searchRef\r\n      placeholder=\"{{'Enter sentence' | translate}}\"\r\n    ></ion-textarea>\r\n    <ion-button style=\"display: none;\" (click)=\"resetEntries()\">\r\n      {{'Reset' | translate}}\r\n    </ion-button>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div>\r\n      <ion-button\r\n        style=\"text-transform: none;\"\r\n        *ngFor=\"let item of matchingWords\"\r\n        (click)=\"addWord(item.gloss)\"\r\n      >\r\n        {{item.gloss}}\r\n      </ion-button>\r\n    </div>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content #content padding class=\"vertical-center\">\r\n  <ion-list>\r\n    <ion-item\r\n      *ngFor=\"let found of editedDocument.editedsigns; index as i; trackBy: trackFound \"\r\n    >\r\n      <ion-grid>\r\n        <ion-row justify-content-center>\r\n          <button\r\n            class=\"editbutton\"\r\n            [style.background-color]=\"found.color\"\r\n            (click)=\"replace(i)\"\r\n            type=\"button\"\r\n          >\r\n            <div [className]=\"laneStyle(found.lane)\">\r\n              <div class=\"sign\">\r\n                <span [innerHTML]=\"found.svg | safeHtml\"></span>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size=\"10\">\r\n                      <p>\r\n                        {{ (!found.sign ? (' sign not found' | translate) :\r\n                        found.sign.gloss ) }}\r\n                      </p>\r\n                    </ion-col>\r\n                    <ion-col size=\"1\">\r\n                      <ion-badge *ngIf=\"found.totalmatches > 1\" color=\"light\"\r\n                        >{{ found.totalmatches }}</ion-badge\r\n                      >\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </div>\r\n          </button>\r\n        </ion-row>\r\n        <ion-row justify-content-center>\r\n          <div class=\"lane-selector\">\r\n            <input\r\n              id=\"{{found.id}}-left\"\r\n              type=\"radio\"\r\n              name=\"name{{found.id}}\"\r\n              value=\"left\"\r\n              [checked]=\"Lane.Left === found.lane\"\r\n              (change)=\"found.lane = Lane.Left\"\r\n            />\r\n            <label\r\n              class=\"label-background left\"\r\n              for=\"{{found.id}}-left\"\r\n            ></label>\r\n            <input\r\n              id=\"{{found.id}}-middle\"\r\n              type=\"radio\"\r\n              name=\"name{{found.id}}\"\r\n              value=\"middle\"\r\n              [checked]=\"Lane.Middle === found.lane\"\r\n              (change)=\"found.lane = Lane.Middle\"\r\n            />\r\n            <label\r\n              class=\"label-background middle\"\r\n              for=\"{{found.id}}-middle\"\r\n            ></label>\r\n            <input\r\n              id=\"{{found.id}}-right\"\r\n              type=\"radio\"\r\n              name=\"name{{found.id}}\"\r\n              value=\"right\"\r\n              [checked]=\"Lane.Right === found.lane\"\r\n              (change)=\"found.lane = Lane.Right\"\r\n            />\r\n            <label\r\n              class=\"label-background right\"\r\n              for=\"{{found.id}}-right\"\r\n            ></label>\r\n          </div>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\r\n    <ion-label>{{'Next' | translate}}</ion-label>\r\n    <ion-fab-button>\r\n      <ion-icon\r\n        (click)=\"accept()\"\r\n        name=\"arrow-dropright-circle\"\r\n        style=\"zoom: 2;\"\r\n      ></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/edit/edit.page.scss":
/*!*************************************!*\
  !*** ./src/app/edit/edit.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign {\n  padding: 0; }\n\n.editbutton {\n  margin: 5px; }\n\n.lane-selector input {\n  margin: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.left {\n  background-image: url('Left.png'); }\n\n.middle {\n  background-image: url('Center.png'); }\n\n.right {\n  background-image: url('Right.png'); }\n\n.lane-selector input[type=\"radio\"]:checked + label {\n  -webkit-filter: brightness(1.2) grayscale(0.5) opacity(0.9);\n  -moz-filter: brightness(1.2) grayscale(0.5) opacity(0.9);\n  filter: brightness(1.2) grayscale(0.5) opacity(0.9);\n  background-color: #397ac4; }\n\n.lane-selector input[type=\"radio\"]:not(:checked) + label {\n  -webkit-filter: brightness(1.8) grayscale(1) opacity(0.7);\n  -moz-filter: brightness(1.8) grayscale(1) opacity(0.7);\n  filter: brightness(1.8) grayscale(1) opacity(0.7); }\n\n.label-background {\n  cursor: pointer;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: inline-block;\n  margin: 0 2px 0 2px;\n  width: 45px;\n  height: 45px;\n  transition: all 100ms ease-in; }\n\n.lane-left {\n  padding-right: 40px; }\n\n.lane-middle {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.lane-right {\n  padding-left: 40px; }\n\n.item-text-center {\n  display: -moz-flex;\n  display: flex;\n  -moz-align-items: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  height: 100%; }\n\n.vertical-center .fixed-content,\n.vertical-center .scroll-content {\n  display: flex;\n  align-items: center; }\n\n.vertical-center .fixed-content ion-list,\n  .vertical-center .scroll-content ion-list {\n    max-width: 300px;\n    width: 100%;\n    margin: auto;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9JOlxcU1dTaWduV3JpdGVyXFxTV1NpZ25Xcml0ZXItQXBwL3NyY1xcYXBwXFxlZGl0XFxlZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQ0FBa0QsRUFBQTs7QUFHdEQ7RUFDSSxtQ0FBb0QsRUFBQTs7QUFHeEQ7RUFDSSxrQ0FBbUQsRUFBQTs7QUFHdkQ7RUFDSSwyREFBeUQ7RUFDekQsd0RBQXNEO0VBQ3RELG1EQUFpRDtFQUNqRCx5QkFBbUMsRUFBQTs7QUFHdkM7RUFDSSx5REFBd0Q7RUFDeEQsc0RBQXFEO0VBQ3JELGlEQUFnRCxFQUFBOztBQUdwRDtFQUNJLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBR1osNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUtJLGtCQUFrQjtFQUVsQixhQUFhO0VBSWIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVksRUFBQTs7QUFHaEI7O0VBR00sYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUp6Qjs7SUFPVSxnQkFBZ0I7SUFDaEIsV0FBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbiB7XHJcbiAgIFxyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmVkaXRidXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5sYW5lLXNlbGVjdG9yIGlucHV0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvTGVmdC5wbmcnKTtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvQ2VudGVyLnBuZycpO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL1JpZ2h0LnBuZycpO1xyXG59XHJcblxyXG4ubGFuZS1zZWxlY3RvciBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtsYWJlbCB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcygxLjIpIGdyYXlzY2FsZSguNSkgb3BhY2l0eSguOSk7XHJcbiAgICAtbW96LWZpbHRlcjogYnJpZ2h0bmVzcygxLjIpIGdyYXlzY2FsZSguNSkgb3BhY2l0eSguOSk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKSBncmF5c2NhbGUoLjUpIG9wYWNpdHkoLjkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAxMjIsIDE5Nik7XHJcbn1cclxuXHJcbi5sYW5lLXNlbGVjdG9yIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpK2xhYmVsIHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDEuOCkgZ3JheXNjYWxlKDEpIG9wYWNpdHkoLjcpO1xyXG4gICAgLW1vei1maWx0ZXI6IGJyaWdodG5lc3MoMS44KSBncmF5c2NhbGUoMSkgb3BhY2l0eSguNyk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS44KSBncmF5c2NhbGUoMSkgb3BhY2l0eSguNyk7XHJcbn1cclxuXHJcbi5sYWJlbC1iYWNrZ3JvdW5kIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDJweCAwIDJweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmxhbmUtbGVmdCB7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxufSBcclxuXHJcbi5sYW5lLW1pZGRsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5sYW5lLXJpZ2h0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5pdGVtLXRleHQtY2VudGVyXHJcbntcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jZW50ZXIge1xyXG4gIC5maXhlZC1jb250ZW50LFxyXG4gIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4OyBcclxuICAgICAgICAgIHdpZHRoOjEwMCU7IFxyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvOyBcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit/edit.page.ts":
/*!***********************************!*\
  !*** ./src/app/edit/edit.page.ts ***!
  \***********************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../sentry.service */ "./src/app/sentry.service.ts");
/* harmony import */ var _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/subscription.service */ "./src/app/services/subscription.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choose_sign_choose_sign_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../choose-sign/choose-sign.page */ "./src/app/choose-sign/choose-sign.page.ts");
/* harmony import */ var _signs_lookup_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../signs-lookup.service */ "./src/app/signs-lookup.service.ts");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../document.service */ "./src/app/document.service.ts");












var EditPage = /** @class */ (function () {
    function EditPage(modalController, documentService, settingsService, subscriptionService, sentry, router) {
        this.modalController = modalController;
        this.documentService = documentService;
        this.settingsService = settingsService;
        this.subscriptionService = subscriptionService;
        this.sentry = sentry;
        this.router = router;
        this.Lane = _signs_lookup_service__WEBPACK_IMPORTED_MODULE_10__["Lane"];
    }
    EditPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isFirstTime;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subscriptionService.CanUse();
                        this.editedDocument = {
                            editedsigns: []
                        };
                        return [4 /*yield*/, this.settingsService.getFirstTime()];
                    case 1:
                        isFirstTime = _a.sent();
                        if (isFirstTime == null) {
                            return [2 /*return*/, this.router.navigateByUrl('/settings')];
                        }
                        this.documentService.clearDocument();
                        this.availableWords = this.documentService.editWordArray();
                        this.showDocument(this.documentService.getDocument());
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.ionViewWillEnter = function () {
        this.searchRef.nativeElement.value = this.documentService.getSearchSentence();
        this.showDocument(this.documentService.getDocument());
    };
    EditPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.searchRef.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (evt) { return evt.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])())
            // subscription
            .subscribe(function (text) {
            _this.showAvailableWords(text);
            _this.documentService.searchFrase(text);
            _this.showDocument(_this.documentService.getDocument());
            _this.scrollToBottom();
        });
    };
    EditPage.prototype.showAvailableWords = function (text) {
        var words = text.split(' ');
        var keyword = words.length > 0 ? words[words.length - 1] : '';
        this.matchingWords = this.getResults(this.availableWords, keyword);
    };
    EditPage.prototype.getResults = function (availableWords, keyword) {
        keyword = 'nombre';
        if (availableWords && keyword && keyword !== '') {
            var maxResults = 12;
            var startsWith = [];
            var contains = [];
            var lwrCaseKeyword = keyword.toLowerCase();
            var i = 0;
            for (var _i = 0, availableWords_1 = availableWords; _i < availableWords_1.length; _i++) {
                var element = availableWords_1[_i];
                if (element.gloss.toLowerCase().startsWith(lwrCaseKeyword)) {
                    startsWith.push(element);
                    i++;
                    debugger;
                }
                else if (element.normalized.toLowerCase().startsWith(lwrCaseKeyword)) {
                    startsWith.push(element);
                    i++;
                    debugger;
                }
                else if (element.gloss.toLowerCase().indexOf(lwrCaseKeyword) !== -1) {
                    contains.push(element);
                    debugger;
                }
                else if (element.normalized.toLowerCase().indexOf(lwrCaseKeyword) !== -1) {
                    contains.push(element);
                    debugger;
                }
                if (i >= maxResults) {
                    break;
                }
            }
            var result = [];
            result = startsWith.slice(0, maxResults);
            if (result.length < maxResults) {
                result.concat(contains.slice(0, maxResults - result.length));
            }
            return result;
        }
        else {
            return [];
        }
    };
    EditPage.prototype.showDocument = function (document) {
        this.editedDocument = { editedsigns: document.signs };
    };
    EditPage.prototype.trackFound = function (index, foundSign) {
        return foundSign ? foundSign.id : undefined;
    };
    EditPage.prototype.addWord = function (word) {
        var sentence = this.documentService.getSearchSentence();
        var sentenceSplit = sentence.split(' ').filter(function (x) { return x !== '' && x !== ' '; });
        sentenceSplit = sentenceSplit.slice(0, -1);
        var allExceptLast = sentenceSplit.join(' ');
        this.documentService.searchFrase(allExceptLast + ' ' + word);
        this.searchRef.nativeElement.value = this.documentService.getSearchSentence();
        this.showDocument(this.documentService.getDocument());
        this.matchingWords = [];
    };
    EditPage.prototype.accept = function () {
        this.sentry.sentryMessage('Entered text : ' + this.documentService.getSearchSentence());
        return this.router.navigateByUrl('/view');
    };
    EditPage.prototype.replace = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var searchWord, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchWord = this.documentService.getSearchWord(index);
                        return [4 /*yield*/, this.modalController.create({
                                component: _choose_sign_choose_sign_page__WEBPACK_IMPORTED_MODULE_9__["ChooseSignPage"],
                                componentProps: {
                                    searchword: searchWord
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        // Replace existing item in list
                        this.documentService.replaceElement(index, data.result);
                        this.showDocument(this.documentService.getDocument());
                        this.searchRef.nativeElement.value = this.documentService.getSearchSentence();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(300);
        }, 50);
    };
    EditPage.prototype.resetEntries = function () { };
    EditPage.prototype.laneStyle = function (lane) {
        switch (lane) {
            case (_signs_lookup_service__WEBPACK_IMPORTED_MODULE_10__["Lane"].Left): return 'lane-left';
            case (_signs_lookup_service__WEBPACK_IMPORTED_MODULE_10__["Lane"].Right): return 'lane-right';
            default: return 'lane-middle';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('searchRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
    ], EditPage.prototype, "searchRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditPage.prototype, "content", void 0);
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.page.html */ "./src/app/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
            _document_service__WEBPACK_IMPORTED_MODULE_11__["DocumentService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _services_subscription_service__WEBPACK_IMPORTED_MODULE_2__["SubscriptionService"],
            _sentry_service__WEBPACK_IMPORTED_MODULE_1__["SentryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-edit-module.js.map