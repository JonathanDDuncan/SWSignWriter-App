(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js ***!
  \***********************************************************/
/*! exports provided: FileComponent, FileDropModule, UploadFile, UploadEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropModule", function() { return FileDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFile", function() { return UploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEvent", function() { return UploadEvent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * fileEntry is an instance of {\@link FileSystemFileEntry} or {\@link FileSystemDirectoryEntry}.
 * Which one is it can be checked using {\@link FileSystemEntry.isFile} or {\@link FileSystemEntry.isDirectory}
 * properties of the given {\@link FileSystemEntry}.
 */
var  /**
 * fileEntry is an instance of {\@link FileSystemFileEntry} or {\@link FileSystemDirectoryEntry}.
 * Which one is it can be checked using {\@link FileSystemEntry.isFile} or {\@link FileSystemEntry.isDirectory}
 * properties of the given {\@link FileSystemEntry}.
 */
UploadFile = /** @class */ (function () {
    function UploadFile(relativePath, fileEntry) {
        this.relativePath = relativePath;
        this.fileEntry = fileEntry;
    }
    return UploadFile;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UploadEvent = /** @class */ (function () {
    function UploadEvent(files) {
        this.files = files;
    }
    return UploadEvent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FileComponent = /** @class */ (function () {
    function FileComponent(zone, renderer) {
        var _this = this;
        this.zone = zone;
        this.renderer = renderer;
        this.accept = '*';
        this.multiple = true;
        this.dropZoneLabel = '';
        this.dropZoneClassName = 'ngx-file-drop__drop-zone';
        this.contentClassName = 'ngx-file-drop__content';
        this.showBrowseBtn = false;
        this.browseBtnClassName = 'btn btn-primary btn-xs ngx-file-drop__browse-btn';
        this.browseBtnLabel = 'Browse files';
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDraggingOverDropZone = false;
        this.globalDraggingInProgress = false;
        this.files = [];
        this.numOfActiveReadEntries = 0;
        this.helperFormEl = null;
        this.fileInputPlaceholderEl = null;
        this.dropEventTimerSubscription = null;
        this._disabled = false;
        this.globalDragStartListener = this.renderer.listen('document', 'dragstart', function (evt) {
            _this.globalDraggingInProgress = true;
        });
        this.globalDragEndListener = this.renderer.listen('document', 'dragend', function (evt) {
            _this.globalDraggingInProgress = false;
        });
    }
    Object.defineProperty(FileComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = (value != null && "" + value !== 'false');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.dropEventTimerSubscription) {
            this.dropEventTimerSubscription.unsubscribe();
            this.dropEventTimerSubscription = null;
        }
        this.globalDragStartListener();
        this.globalDragEndListener();
        this.files = [];
        this.helperFormEl = null;
        this.fileInputPlaceholderEl = null;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileComponent.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isDropzoneDisabled()) {
            if (!this.isDraggingOverDropZone) {
                this.isDraggingOverDropZone = true;
                this.onFileOver.emit(event);
            }
            this.preventAndStop(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileComponent.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isDropzoneDisabled()) {
            if (this.isDraggingOverDropZone) {
                this.isDraggingOverDropZone = false;
                this.onFileLeave.emit(event);
            }
            this.preventAndStop(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileComponent.prototype.dropFiles = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isDropzoneDisabled()) {
            this.isDraggingOverDropZone = false;
            if (event.dataTransfer) {
                event.dataTransfer.dropEffect = 'copy';
                /** @type {?} */
                var items = void 0;
                if (event.dataTransfer.items) {
                    items = event.dataTransfer.items;
                }
                else {
                    items = event.dataTransfer.files;
                }
                this.preventAndStop(event);
                this.checkFiles(items);
            }
        }
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    FileComponent.prototype.onBrowseButtonClick = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (this.fileSelector && this.fileSelector.nativeElement) {
            ((/** @type {?} */ (this.fileSelector.nativeElement))).click();
        }
    };
    /**
     * Processes the change event of the file input and adds the given files.
     * @param Event event
     */
    /**
     * Processes the change event of the file input and adds the given files.
     * @param {?} event
     * @return {?}
     */
    FileComponent.prototype.uploadFiles = /**
     * Processes the change event of the file input and adds the given files.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isDropzoneDisabled()) {
            if (event.target) {
                /** @type {?} */
                var items = ((/** @type {?} */ (event.target))).files || ((/** @type {?} */ ([])));
                this.checkFiles(items);
                this.resetFileInput();
            }
        }
    };
    /**
     * @param {?} items
     * @return {?}
     */
    FileComponent.prototype.checkFiles = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        var _loop_1 = function (i) {
            /** @type {?} */
            var item = items[i];
            /** @type {?} */
            var entry = null;
            if (this_1.canGetAsEntry(item)) {
                entry = item.webkitGetAsEntry();
            }
            if (!entry) {
                if (item) {
                    /** @type {?} */
                    var fakeFileEntry = {
                        name: ((/** @type {?} */ (item))).name,
                        isDirectory: false,
                        isFile: true,
                        file: function (callback) {
                            callback((/** @type {?} */ (item)));
                        },
                    };
                    /** @type {?} */
                    var toUpload = new UploadFile(fakeFileEntry.name, fakeFileEntry);
                    this_1.addToQueue(toUpload);
                }
            }
            else {
                if (entry.isFile) {
                    /** @type {?} */
                    var toUpload = new UploadFile(entry.name, entry);
                    this_1.addToQueue(toUpload);
                }
                else if (entry.isDirectory) {
                    this_1.traverseFileTree(entry, entry.name);
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < items.length; i++) {
            _loop_1(i);
        }
        if (this.dropEventTimerSubscription) {
            this.dropEventTimerSubscription.unsubscribe();
        }
        this.dropEventTimerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200, 200)
            .subscribe(function () {
            if (_this.files.length > 0 && _this.numOfActiveReadEntries === 0) {
                _this.onFileDrop.emit(new UploadEvent(_this.files));
                _this.files = [];
            }
        });
    };
    /**
     * @param {?} item
     * @param {?} path
     * @return {?}
     */
    FileComponent.prototype.traverseFileTree = /**
     * @param {?} item
     * @param {?} path
     * @return {?}
     */
    function (item, path) {
        var _this = this;
        if (item.isFile) {
            /** @type {?} */
            var toUpload = new UploadFile(path, item);
            this.files.push(toUpload);
        }
        else {
            path = path + '/';
            /** @type {?} */
            var dirReader_1 = ((/** @type {?} */ (item))).createReader();
            /** @type {?} */
            var entries_1 = [];
            /** @type {?} */
            var readEntries_1 = function () {
                _this.numOfActiveReadEntries++;
                dirReader_1.readEntries(function (result) {
                    if (!result.length) {
                        // add empty folders
                        if (entries_1.length === 0) {
                            /** @type {?} */
                            var toUpload_1 = new UploadFile(path, item);
                            _this.zone.run(function () {
                                _this.addToQueue(toUpload_1);
                            });
                        }
                        else {
                            var _loop_2 = function (i) {
                                _this.zone.run(function () {
                                    _this.traverseFileTree(entries_1[i], path + entries_1[i].name);
                                });
                            };
                            for (var i = 0; i < entries_1.length; i++) {
                                _loop_2(i);
                            }
                        }
                    }
                    else {
                        // continue with the reading
                        entries_1 = entries_1.concat(result);
                        readEntries_1();
                    }
                    _this.numOfActiveReadEntries--;
                });
            };
            readEntries_1();
        }
    };
    /**
     * Clears any added files from the file input element so the same file can subsequently be added multiple times.
     */
    /**
     * Clears any added files from the file input element so the same file can subsequently be added multiple times.
     * @return {?}
     */
    FileComponent.prototype.resetFileInput = /**
     * Clears any added files from the file input element so the same file can subsequently be added multiple times.
     * @return {?}
     */
    function () {
        if (this.fileSelector && this.fileSelector.nativeElement) {
            /** @type {?} */
            var fileInputEl = (/** @type {?} */ (this.fileSelector.nativeElement));
            /** @type {?} */
            var fileInputContainerEl = fileInputEl.parentElement;
            /** @type {?} */
            var helperFormEl = this.getHelperFormElement();
            /** @type {?} */
            var fileInputPlaceholderEl = this.getFileInputPlaceholderElement();
            // Just a quick check so we do not mess up the DOM (will never happen though).
            if (fileInputContainerEl !== helperFormEl) {
                // Insert the form input placeholder in the DOM before the form input element.
                this.renderer.insertBefore(fileInputContainerEl, fileInputPlaceholderEl, fileInputEl);
                // Add the form input as child of the temporary form element, removing the form input from the DOM.
                this.renderer.appendChild(helperFormEl, fileInputEl);
                // Reset the form, thus clearing the input element of any files.
                helperFormEl.reset();
                // Add the file input back to the DOM in place of the file input placeholder element.
                this.renderer.insertBefore(fileInputContainerEl, fileInputEl, fileInputPlaceholderEl);
                // Remove the input placeholder from the DOM
                this.renderer.removeChild(fileInputContainerEl, fileInputPlaceholderEl);
            }
        }
    };
    /**
     * Get a cached HTML form element as a helper element to clear the file input element.
     */
    /**
     * Get a cached HTML form element as a helper element to clear the file input element.
     * @return {?}
     */
    FileComponent.prototype.getHelperFormElement = /**
     * Get a cached HTML form element as a helper element to clear the file input element.
     * @return {?}
     */
    function () {
        if (!this.helperFormEl) {
            this.helperFormEl = (/** @type {?} */ (this.renderer.createElement('form')));
        }
        return this.helperFormEl;
    };
    /**
     * Get a cached HTML div element to be used as placeholder for the file input element when clearing said element.
     */
    /**
     * Get a cached HTML div element to be used as placeholder for the file input element when clearing said element.
     * @return {?}
     */
    FileComponent.prototype.getFileInputPlaceholderElement = /**
     * Get a cached HTML div element to be used as placeholder for the file input element when clearing said element.
     * @return {?}
     */
    function () {
        if (!this.fileInputPlaceholderEl) {
            this.fileInputPlaceholderEl = (/** @type {?} */ (this.renderer.createElement('div')));
        }
        return this.fileInputPlaceholderEl;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileComponent.prototype.canGetAsEntry = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !!item.webkitGetAsEntry;
    };
    /**
     * @return {?}
     */
    FileComponent.prototype.isDropzoneDisabled = /**
     * @return {?}
     */
    function () {
        return (this.globalDraggingInProgress || this.disabled);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileComponent.prototype.addToQueue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.files.push(item);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileComponent.prototype.preventAndStop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    FileComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'file-drop',
                    template: "<div [className]=\"dropZoneClassName\"\r\n     [class.ngx-file-drop__drop-zone--over]=\"isDraggingOverDropZone\"\r\n     (drop)=\"dropFiles($event)\"\r\n     (dragover)=\"onDragOver($event)\"\r\n     (dragleave)=\"onDragLeave($event)\">\r\n    <div [className]=\"contentClassName\">\r\n        <ng-content></ng-content>\r\n        <div *ngIf=\"dropZoneLabel\" class=\"ngx-file-drop__drop-zone-label\">{{dropZoneLabel}}</div>\r\n        <input type=\"file\" #fileSelector [accept]=\"accept\" (change)=\"uploadFiles($event)\" [multiple]=\"multiple\" class=\"ngx-file-drop__file-input\" />\r\n        <div *ngIf=\"showBrowseBtn\">\r\n            <input type=\"button\" [className]=\"browseBtnClassName\" value=\"{{browseBtnLabel}}\" (click)=\"onBrowseButtonClick($event)\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                    styles: [".ngx-file-drop__drop-zone{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over{background-color:rgba(147,147,147,.5)}.ngx-file-drop__content{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label{text-align:center}.ngx-file-drop__file-input{display:none}"]
                }] }
    ];
    /** @nocollapse */
    FileComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    FileComponent.propDecorators = {
        accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dropZoneLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dropZoneClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        contentClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showBrowseBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        browseBtnClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        browseBtnLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onFileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onFileLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fileSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fileSelector',] }]
    };
    return FileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FileDropModule = /** @class */ (function () {
    function FileDropModule() {
    }
    FileDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        FileComponent,
                    ],
                    exports: [FileComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    providers: [],
                    bootstrap: [FileComponent],
                },] }
    ];
    return FileDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbGUtZHJvcC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWZpbGUtZHJvcC9zcmMvbGliL25neC1kcm9wL3VwbG9hZC1maWxlLm1vZGVsLnRzIiwibmc6Ly9uZ3gtZmlsZS1kcm9wL3NyYy9saWIvbmd4LWRyb3AvdXBsb2FkLWV2ZW50Lm1vZGVsLnRzIiwibmc6Ly9uZ3gtZmlsZS1kcm9wL3NyYy9saWIvbmd4LWRyb3AvZmlsZS1kcm9wLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWZpbGUtZHJvcC9zcmMvbGliL25neC1kcm9wL2ZpbGUtZHJvcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZVN5c3RlbUVudHJ5LCBGaWxlU3lzdGVtRmlsZUVudHJ5LCBGaWxlU3lzdGVtRGlyZWN0b3J5RW50cnkgfSBmcm9tICcuL2RvbS50eXBlcyc7XHJcblxyXG4vKipcclxuICogZmlsZUVudHJ5IGlzIGFuIGluc3RhbmNlIG9mIHtAbGluayBGaWxlU3lzdGVtRmlsZUVudHJ5fSBvciB7QGxpbmsgRmlsZVN5c3RlbURpcmVjdG9yeUVudHJ5fS5cclxuICogV2hpY2ggb25lIGlzIGl0IGNhbiBiZSBjaGVja2VkIHVzaW5nIHtAbGluayBGaWxlU3lzdGVtRW50cnkuaXNGaWxlfSBvciB7QGxpbmsgRmlsZVN5c3RlbUVudHJ5LmlzRGlyZWN0b3J5fVxyXG4gKiBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlbiB7QGxpbmsgRmlsZVN5c3RlbUVudHJ5fS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWxhdGl2ZVBhdGg6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZmlsZUVudHJ5OiBGaWxlU3lzdGVtRW50cnkpIHtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBVcGxvYWRGaWxlIH0gZnJvbSAnLi91cGxvYWQtZmlsZS5tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXBsb2FkRXZlbnQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGZpbGVzOiBVcGxvYWRGaWxlW10pIHtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRpbWVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFVwbG9hZEZpbGUgfSBmcm9tICcuL3VwbG9hZC1maWxlLm1vZGVsJztcclxuaW1wb3J0IHsgVXBsb2FkRXZlbnQgfSBmcm9tICcuL3VwbG9hZC1ldmVudC5tb2RlbCc7XHJcbmltcG9ydCB7IEZpbGVTeXN0ZW1GaWxlRW50cnksIEZpbGVTeXN0ZW1FbnRyeSwgRmlsZVN5c3RlbURpcmVjdG9yeUVudHJ5IH0gZnJvbSAnLi9kb20udHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmaWxlLWRyb3AnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWRyb3AuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtZHJvcC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGFjY2VwdDogc3RyaW5nID0gJyonO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGRyb3Bab25lTGFiZWw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBkcm9wWm9uZUNsYXNzTmFtZTogc3RyaW5nID0gJ25neC1maWxlLWRyb3BfX2Ryb3Atem9uZSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNvbnRlbnRDbGFzc05hbWU6IHN0cmluZyA9ICduZ3gtZmlsZS1kcm9wX19jb250ZW50JztcclxuXHJcbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9ICh2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZScpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0Jyb3dzZUJ0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJyb3dzZUJ0bkNsYXNzTmFtZTogc3RyaW5nID0gJ2J0biBidG4tcHJpbWFyeSBidG4teHMgbmd4LWZpbGUtZHJvcF9fYnJvd3NlLWJ0bic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJyb3dzZUJ0bkxhYmVsOiBzdHJpbmcgPSAnQnJvd3NlIGZpbGVzJztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIG9uRmlsZURyb3A6IEV2ZW50RW1pdHRlcjxVcGxvYWRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBvbkZpbGVPdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBvbkZpbGVMZWF2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZmlsZVNlbGVjdG9yJylcclxuICBwdWJsaWMgZmlsZVNlbGVjdG9yOiBFbGVtZW50UmVmO1xyXG5cclxuICBwdWJsaWMgaXNEcmFnZ2luZ092ZXJEcm9wWm9uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGdsb2JhbERyYWdnaW5nSW5Qcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZ2xvYmFsRHJhZ1N0YXJ0TGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBnbG9iYWxEcmFnRW5kTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcblxyXG4gIHByaXZhdGUgZmlsZXM6IFVwbG9hZEZpbGVbXSA9IFtdO1xyXG4gIHByaXZhdGUgbnVtT2ZBY3RpdmVSZWFkRW50cmllczogbnVtYmVyID0gMDtcclxuXHJcbiAgcHJpdmF0ZSBoZWxwZXJGb3JtRWw6IEhUTUxGb3JtRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZmlsZUlucHV0UGxhY2Vob2xkZXJFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBkcm9wRXZlbnRUaW1lclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHRoaXMuZ2xvYmFsRHJhZ1N0YXJ0TGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnZHJhZ3N0YXJ0JywgKGV2dDogRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5nbG9iYWxEcmFnZ2luZ0luUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdsb2JhbERyYWdFbmRMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdkcmFnZW5kJywgKGV2dDogRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5nbG9iYWxEcmFnZ2luZ0luUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHJvcEV2ZW50VGltZXJTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5kcm9wRXZlbnRUaW1lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyb3BFdmVudFRpbWVyU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMuZ2xvYmFsRHJhZ1N0YXJ0TGlzdGVuZXIoKTtcclxuICAgIHRoaXMuZ2xvYmFsRHJhZ0VuZExpc3RlbmVyKCk7XHJcbiAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICB0aGlzLmhlbHBlckZvcm1FbCA9IG51bGw7XHJcbiAgICB0aGlzLmZpbGVJbnB1dFBsYWNlaG9sZGVyRWwgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRHJhZ092ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNEcm9wem9uZURpc2FibGVkKCkpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmdPdmVyRHJvcFpvbmUpIHtcclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdPdmVyRHJvcFpvbmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25GaWxlT3Zlci5lbWl0KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByZXZlbnRBbmRTdG9wKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkRyYWdMZWF2ZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0Ryb3B6b25lRGlzYWJsZWQoKSkge1xyXG4gICAgICBpZiAodGhpcy5pc0RyYWdnaW5nT3ZlckRyb3Bab25lKSB7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nT3ZlckRyb3Bab25lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkZpbGVMZWF2ZS5lbWl0KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByZXZlbnRBbmRTdG9wKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcm9wRmlsZXMoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRHJvcHpvbmVEaXNhYmxlZCgpKSB7XHJcbiAgICAgIHRoaXMuaXNEcmFnZ2luZ092ZXJEcm9wWm9uZSA9IGZhbHNlO1xyXG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XHJcbiAgICAgICAgbGV0IGl0ZW1zOiBGaWxlTGlzdCB8IERhdGFUcmFuc2Zlckl0ZW1MaXN0O1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcclxuICAgICAgICAgIGl0ZW1zID0gZXZlbnQuZGF0YVRyYW5zZmVyLml0ZW1zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtcyA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0ZpbGVzKGl0ZW1zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQnJvd3NlQnV0dG9uQ2xpY2soZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5maWxlU2VsZWN0b3IgJiYgdGhpcy5maWxlU2VsZWN0b3IubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAodGhpcy5maWxlU2VsZWN0b3IubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvY2Vzc2VzIHRoZSBjaGFuZ2UgZXZlbnQgb2YgdGhlIGZpbGUgaW5wdXQgYW5kIGFkZHMgdGhlIGdpdmVuIGZpbGVzLlxyXG4gICAqIEBwYXJhbSBFdmVudCBldmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyB1cGxvYWRGaWxlcyhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0Ryb3B6b25lRGlzYWJsZWQoKSkge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZpbGVzIHx8IChbXSBhcyBhbnkpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tGaWxlcyhpdGVtcyk7XHJcbiAgICAgICAgdGhpcy5yZXNldEZpbGVJbnB1dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrRmlsZXMoaXRlbXM6IEZpbGVMaXN0IHwgRGF0YVRyYW5zZmVySXRlbUxpc3QpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICBsZXQgZW50cnk6IEZpbGVTeXN0ZW1FbnRyeSB8IG51bGwgPSBudWxsO1xyXG4gICAgICBpZiAodGhpcy5jYW5HZXRBc0VudHJ5KGl0ZW0pKSB7XHJcbiAgICAgICAgZW50cnkgPSBpdGVtLndlYmtpdEdldEFzRW50cnkoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFlbnRyeSkge1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICBjb25zdCBmYWtlRmlsZUVudHJ5OiBGaWxlU3lzdGVtRmlsZUVudHJ5ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAoaXRlbSBhcyBGaWxlKS5uYW1lLFxyXG4gICAgICAgICAgICBpc0RpcmVjdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRmlsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZmlsZTogKGNhbGxiYWNrOiAoZmlsZWE6IEZpbGUpID0+IHZvaWQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgICBjYWxsYmFjayhpdGVtIGFzIEZpbGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNvbnN0IHRvVXBsb2FkOiBVcGxvYWRGaWxlID0gbmV3IFVwbG9hZEZpbGUoZmFrZUZpbGVFbnRyeS5uYW1lLCBmYWtlRmlsZUVudHJ5KTtcclxuICAgICAgICAgIHRoaXMuYWRkVG9RdWV1ZSh0b1VwbG9hZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZW50cnkuaXNGaWxlKSB7XHJcbiAgICAgICAgICBjb25zdCB0b1VwbG9hZDogVXBsb2FkRmlsZSA9IG5ldyBVcGxvYWRGaWxlKGVudHJ5Lm5hbWUsIGVudHJ5KTtcclxuICAgICAgICAgIHRoaXMuYWRkVG9RdWV1ZSh0b1VwbG9hZCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW50cnkuaXNEaXJlY3RvcnkpIHtcclxuICAgICAgICAgIHRoaXMudHJhdmVyc2VGaWxlVHJlZShlbnRyeSwgZW50cnkubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZHJvcEV2ZW50VGltZXJTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5kcm9wRXZlbnRUaW1lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kcm9wRXZlbnRUaW1lclN1YnNjcmlwdGlvbiA9IHRpbWVyKDIwMCwgMjAwKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggPiAwICYmIHRoaXMubnVtT2ZBY3RpdmVSZWFkRW50cmllcyA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5vbkZpbGVEcm9wLmVtaXQobmV3IFVwbG9hZEV2ZW50KHRoaXMuZmlsZXMpKTtcclxuICAgICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmF2ZXJzZUZpbGVUcmVlKGl0ZW06IEZpbGVTeXN0ZW1FbnRyeSwgcGF0aDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoaXRlbS5pc0ZpbGUpIHtcclxuICAgICAgY29uc3QgdG9VcGxvYWQ6IFVwbG9hZEZpbGUgPSBuZXcgVXBsb2FkRmlsZShwYXRoLCBpdGVtKTtcclxuICAgICAgdGhpcy5maWxlcy5wdXNoKHRvVXBsb2FkKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXRoID0gcGF0aCArICcvJztcclxuICAgICAgY29uc3QgZGlyUmVhZGVyID0gKGl0ZW0gYXMgRmlsZVN5c3RlbURpcmVjdG9yeUVudHJ5KS5jcmVhdGVSZWFkZXIoKTtcclxuICAgICAgbGV0IGVudHJpZXM6IEZpbGVTeXN0ZW1FbnRyeVtdID0gW107XHJcblxyXG4gICAgICBjb25zdCByZWFkRW50cmllcyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm51bU9mQWN0aXZlUmVhZEVudHJpZXMrKztcclxuICAgICAgICBkaXJSZWFkZXIucmVhZEVudHJpZXMoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBlbXB0eSBmb2xkZXJzXHJcbiAgICAgICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRvVXBsb2FkOiBVcGxvYWRGaWxlID0gbmV3IFVwbG9hZEZpbGUocGF0aCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvUXVldWUodG9VcGxvYWQpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnRyYXZlcnNlRmlsZVRyZWUoZW50cmllc1tpXSwgcGF0aCArIGVudHJpZXNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb250aW51ZSB3aXRoIHRoZSByZWFkaW5nXHJcbiAgICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChyZXN1bHQpO1xyXG4gICAgICAgICAgICByZWFkRW50cmllcygpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMubnVtT2ZBY3RpdmVSZWFkRW50cmllcy0tO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVhZEVudHJpZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyBhbnkgYWRkZWQgZmlsZXMgZnJvbSB0aGUgZmlsZSBpbnB1dCBlbGVtZW50IHNvIHRoZSBzYW1lIGZpbGUgY2FuIHN1YnNlcXVlbnRseSBiZSBhZGRlZCBtdWx0aXBsZSB0aW1lcy5cclxuICAgKi9cclxuICBwcml2YXRlIHJlc2V0RmlsZUlucHV0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZmlsZVNlbGVjdG9yICYmIHRoaXMuZmlsZVNlbGVjdG9yLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgZmlsZUlucHV0RWwgPSB0aGlzLmZpbGVTZWxlY3Rvci5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGZpbGVJbnB1dENvbnRhaW5lckVsID0gZmlsZUlucHV0RWwucGFyZW50RWxlbWVudDtcclxuICAgICAgY29uc3QgaGVscGVyRm9ybUVsID0gdGhpcy5nZXRIZWxwZXJGb3JtRWxlbWVudCgpO1xyXG4gICAgICBjb25zdCBmaWxlSW5wdXRQbGFjZWhvbGRlckVsID0gdGhpcy5nZXRGaWxlSW5wdXRQbGFjZWhvbGRlckVsZW1lbnQoKTtcclxuXHJcbiAgICAgIC8vIEp1c3QgYSBxdWljayBjaGVjayBzbyB3ZSBkbyBub3QgbWVzcyB1cCB0aGUgRE9NICh3aWxsIG5ldmVyIGhhcHBlbiB0aG91Z2gpLlxyXG4gICAgICBpZiAoZmlsZUlucHV0Q29udGFpbmVyRWwgIT09IGhlbHBlckZvcm1FbCkge1xyXG4gICAgICAgIC8vIEluc2VydCB0aGUgZm9ybSBpbnB1dCBwbGFjZWhvbGRlciBpbiB0aGUgRE9NIGJlZm9yZSB0aGUgZm9ybSBpbnB1dCBlbGVtZW50LlxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKGZpbGVJbnB1dENvbnRhaW5lckVsLCBmaWxlSW5wdXRQbGFjZWhvbGRlckVsLCBmaWxlSW5wdXRFbCk7XHJcbiAgICAgICAgLy8gQWRkIHRoZSBmb3JtIGlucHV0IGFzIGNoaWxkIG9mIHRoZSB0ZW1wb3JhcnkgZm9ybSBlbGVtZW50LCByZW1vdmluZyB0aGUgZm9ybSBpbnB1dCBmcm9tIHRoZSBET00uXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChoZWxwZXJGb3JtRWwsIGZpbGVJbnB1dEVsKTtcclxuICAgICAgICAvLyBSZXNldCB0aGUgZm9ybSwgdGh1cyBjbGVhcmluZyB0aGUgaW5wdXQgZWxlbWVudCBvZiBhbnkgZmlsZXMuXHJcbiAgICAgICAgaGVscGVyRm9ybUVsLnJlc2V0KCk7XHJcbiAgICAgICAgLy8gQWRkIHRoZSBmaWxlIGlucHV0IGJhY2sgdG8gdGhlIERPTSBpbiBwbGFjZSBvZiB0aGUgZmlsZSBpbnB1dCBwbGFjZWhvbGRlciBlbGVtZW50LlxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKGZpbGVJbnB1dENvbnRhaW5lckVsLCBmaWxlSW5wdXRFbCwgZmlsZUlucHV0UGxhY2Vob2xkZXJFbCk7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBpbnB1dCBwbGFjZWhvbGRlciBmcm9tIHRoZSBET01cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGZpbGVJbnB1dENvbnRhaW5lckVsLCBmaWxlSW5wdXRQbGFjZWhvbGRlckVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgY2FjaGVkIEhUTUwgZm9ybSBlbGVtZW50IGFzIGEgaGVscGVyIGVsZW1lbnQgdG8gY2xlYXIgdGhlIGZpbGUgaW5wdXQgZWxlbWVudC5cclxuICAgKi9cclxuICBwcml2YXRlIGdldEhlbHBlckZvcm1FbGVtZW50KCk6IEhUTUxGb3JtRWxlbWVudCB7XHJcbiAgICBpZiAoIXRoaXMuaGVscGVyRm9ybUVsKSB7XHJcbiAgICAgIHRoaXMuaGVscGVyRm9ybUVsID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdmb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmhlbHBlckZvcm1FbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIGNhY2hlZCBIVE1MIGRpdiBlbGVtZW50IHRvIGJlIHVzZWQgYXMgcGxhY2Vob2xkZXIgZm9yIHRoZSBmaWxlIGlucHV0IGVsZW1lbnQgd2hlbiBjbGVhcmluZyBzYWlkIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRGaWxlSW5wdXRQbGFjZWhvbGRlckVsZW1lbnQoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgaWYgKCF0aGlzLmZpbGVJbnB1dFBsYWNlaG9sZGVyRWwpIHtcclxuICAgICAgdGhpcy5maWxlSW5wdXRQbGFjZWhvbGRlckVsID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWxlSW5wdXRQbGFjZWhvbGRlckVsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW5HZXRBc0VudHJ5KGl0ZW06IGFueSk6IGl0ZW0gaXMgRGF0YVRyYW5zZmVySXRlbSB7XHJcbiAgICByZXR1cm4gISFpdGVtLndlYmtpdEdldEFzRW50cnk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRHJvcHpvbmVEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5nbG9iYWxEcmFnZ2luZ0luUHJvZ3Jlc3MgfHwgdGhpcy5kaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRvUXVldWUoaXRlbTogVXBsb2FkRmlsZSk6IHZvaWQge1xyXG4gICAgdGhpcy5maWxlcy5wdXNoKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmV2ZW50QW5kU3RvcChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtGaWxlQ29tcG9uZW50fSBmcm9tICcuL2ZpbGUtZHJvcC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEZpbGVDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbRmlsZUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBib290c3RyYXA6IFtGaWxlQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVEcm9wTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBT0E7Ozs7OztJQUNJLG9CQUNXLFlBQW9CLEVBQ3BCLFNBQTBCO1FBRDFCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQWlCO0tBQ3BDO0lBQ0wsaUJBQUM7Q0FBQTs7Ozs7O0FDVkQ7SUFDSSxxQkFDVyxLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO0tBQzdCO0lBQ0wsa0JBQUM7Q0FBQTs7Ozs7O0FDTkQ7SUErRUUsdUJBQ1UsSUFBWSxFQUNaLFFBQW1CO1FBRjdCLGlCQVVDO1FBVFMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVc7UUF4RHRCLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFHckIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUd6QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUczQixzQkFBaUIsR0FBVywwQkFBMEIsQ0FBQztRQUd2RCxxQkFBZ0IsR0FBVyx3QkFBd0IsQ0FBQztRQVNwRCxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQix1QkFBa0IsR0FBVyxrREFBa0QsQ0FBQztRQUdoRixtQkFBYyxHQUFXLGNBQWMsQ0FBQztRQUd4QyxlQUFVLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFFeEUsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXhELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFLekQsMkJBQXNCLEdBQVksS0FBSyxDQUFDO1FBRXZDLDZCQUF3QixHQUFZLEtBQUssQ0FBQztRQUkxQyxVQUFLLEdBQWlCLEVBQUUsQ0FBQztRQUN6Qiwy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

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["FileDropModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.html":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'Settings' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding=\"padding\">\r\n  <ion-item>\r\n    <ion-label>{{'UI Language' | translate}}</ion-label>\r\n    <ion-select\r\n      (ionChange)=\"onLanguageChange($event)\"\r\n      [(ngModel)]=\"UILanguage\"\r\n      interface=\"popover\"\r\n    >\r\n      <ion-select-option value=\"en\">English</ion-select-option>\r\n      <ion-select-option value=\"es\">español</ion-select-option>\r\n      <ion-select-option value=\"pt\">português</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <hr class=\"hr-margin-bottom hr-black\" />\r\n  <ion-item>\r\n    <ion-label>{{'Sign Language Puddle' | translate}}</ion-label>\r\n    <ion-select\r\n      (ionChange)=\"onPuddleChange($event)\"\r\n      [(ngModel)]=\"puddleID\"\r\n      interface=\"popover\"\r\n    >\r\n      <ion-select-option value=\"106\">Dictionary Afghanistan</ion-select-option>\r\n      <ion-select-option value=\"82\">Dictionary Albania</ion-select-option>\r\n      <ion-select-option value=\"41\">Dictionary Argentina</ion-select-option>\r\n      <ion-select-option value=\"4\"\r\n        >Dictionary ASL - USA & Canada</ion-select-option\r\n      >\r\n      <ion-select-option value=\"29\">Dictionary AT</ion-select-option>\r\n      <ion-select-option value=\"42\">Dictionary Australia</ion-select-option>\r\n      <ion-select-option value=\"43\"\r\n        >Dictionary French Belgium</ion-select-option\r\n      >\r\n      <ion-select-option value=\"44\"\r\n        >Dictionary Flanders, Belgium</ion-select-option\r\n      >\r\n      <ion-select-option value=\"134\">Dictionary Bulgaria</ion-select-option>\r\n      <ion-select-option value=\"45\">Dictionary Bolivia</ion-select-option>\r\n      <ion-select-option value=\"46\"\r\n        >Dictionary LIBRAS - Brazil</ion-select-option\r\n      >\r\n      <ion-select-option value=\"47\">Dictionary Quebec</ion-select-option>\r\n      <ion-select-option value=\"48\"\r\n        >Dictionary German Switzerland</ion-select-option\r\n      >\r\n      <ion-select-option value=\"49\"\r\n        >Dictionary French-Switzerland</ion-select-option\r\n      >\r\n      <ion-select-option value=\"50\">Dictionary CH-it</ion-select-option>\r\n      <ion-select-option value=\"135\">Dictionary Chile</ion-select-option>\r\n      <ion-select-option value=\"83\">Dictionary China</ion-select-option>\r\n      <ion-select-option value=\"51\">Dictionary Colombia</ion-select-option>\r\n      <ion-select-option value=\"52\"\r\n        >Dictionary Czech Republic</ion-select-option\r\n      >\r\n      <ion-select-option value=\"53\"\r\n        >Dictionary Deutschland, Germany</ion-select-option\r\n      >\r\n      <ion-select-option value=\"30\">Dictionary Denmark</ion-select-option>\r\n      <ion-select-option value=\"136\">Dictionary Ecuador</ion-select-option>\r\n      <ion-select-option value=\"109\">Dictionary Estonia</ion-select-option>\r\n      <ion-select-option value=\"84\">Dictionary Egypt</ion-select-option>\r\n      <ion-select-option value=\"54\">Dictionary Vortaro</ion-select-option>\r\n      <ion-select-option value=\"55\">Dictionary España, Spain</ion-select-option>\r\n      <ion-select-option value=\"56\"\r\n        >Dictionary Catalonia, Barcelona</ion-select-option\r\n      >\r\n      <ion-select-option value=\"18\">Dictionary Ethiopia</ion-select-option>\r\n      <ion-select-option value=\"57\">Dictionary Finland</ion-select-option>\r\n      <ion-select-option value=\"58\">Dictionary France</ion-select-option>\r\n      <ion-select-option value=\"59\">Dictionary Great Britain</ion-select-option>\r\n      <ion-select-option value=\"60\"\r\n        >Dictionary Northern Ireland</ion-select-option\r\n      >\r\n      <ion-select-option value=\"61\">Dictionary Greece</ion-select-option>\r\n      <ion-select-option value=\"112\">Dictionary Guatemala</ion-select-option>\r\n      <ion-select-option value=\"16\"\r\n        >Dictionary LESHO - Honduras</ion-select-option\r\n      >\r\n      <ion-select-option value=\"113\">Dictionary Haiti</ion-select-option>\r\n      <ion-select-option value=\"122\">Dictionary Hungary</ion-select-option>\r\n      <ion-select-option value=\"62\">Dictionary Ireland</ion-select-option>\r\n      <ion-select-option value=\"110\">Dictionary Israel</ion-select-option>\r\n      <ion-select-option value=\"2\">Dictionary India</ion-select-option>\r\n      <ion-select-option value=\"131\">Dictionary IS</ion-select-option>\r\n      <ion-select-option value=\"63\">Dictionary IT</ion-select-option>\r\n      <ion-select-option value=\"86\">Dictionary Jordan</ion-select-option>\r\n      <ion-select-option value=\"64\">Dictionary Japan</ion-select-option>\r\n      <ion-select-option value=\"79\">Dictionary Kenya</ion-select-option>\r\n      <ion-select-option value=\"78\">Dictionary Korea</ion-select-option>\r\n      <ion-select-option value=\"107\">Dictionary Lithuania</ion-select-option>\r\n      <ion-select-option value=\"108\">Dictionary Latvia</ion-select-option>\r\n      <ion-select-option value=\"2\">Dictionary Myanmar</ion-select-option>\r\n      <ion-select-option value=\"31\">Dictionary Malta</ion-select-option>\r\n      <ion-select-option value=\"128\">Dictionary Malawi</ion-select-option>\r\n      <ion-select-option value=\"65\">Malawi Mexico</ion-select-option>\r\n      <ion-select-option value=\"66\">Dictionary Malaysia</ion-select-option>\r\n      <ion-select-option value=\"32\">Dictionary Nigeria</ion-select-option>\r\n      <ion-select-option value=\"67\">Dictionary Nicaragua</ion-select-option>\r\n      <ion-select-option value=\"68\">Dictionary NL</ion-select-option>\r\n      <ion-select-option value=\"69\">Dictionary Norge, Norway</ion-select-option>\r\n      <ion-select-option value=\"133\">Dictionary Nepal</ion-select-option>\r\n      <ion-select-option value=\"70\">Dictionary New Zealand</ion-select-option>\r\n      <ion-select-option value=\"71\">Diccionario Peru</ion-select-option>\r\n      <ion-select-option value=\"72\">Dictionary Philippines</ion-select-option>\r\n      <ion-select-option value=\"87\">Dictionary Pakistan</ion-select-option>\r\n      <ion-select-option value=\"19\">Dictionary Poland</ion-select-option>\r\n      <ion-select-option value=\"33\">Dictionary Portugal</ion-select-option>\r\n      <ion-select-option value=\"129\">Dictionary Paraguay</ion-select-option>\r\n      <ion-select-option value=\"132\">Dictionary Romania</ion-select-option>\r\n      <ion-select-option value=\"88\">Dictionary Russia</ion-select-option>\r\n      <ion-select-option value=\"40\"\r\n        >Dictionary Kingdom Saudi Arabia</ion-select-option\r\n      >\r\n      <ion-select-option value=\"73\">Dictionary Sverige</ion-select-option>\r\n      <ion-select-option value=\"74\">Dictionary Slovenia</ion-select-option>\r\n      <ion-select-option value=\"89\">Dictionary Slovakia</ion-select-option>\r\n      <ion-select-option value=\"137\">Dictionary El Salvador</ion-select-option>\r\n      <ion-select-option value=\"34\">Dictionary Thailand</ion-select-option>\r\n      <ion-select-option value=\"104\">Dictionary Tunisia</ion-select-option>\r\n      <ion-select-option value=\"90\">Dictionary Turkey</ion-select-option>\r\n      <ion-select-option value=\"75\">Dictionary Taiwan</ion-select-option>\r\n      <ion-select-option value=\"143\">Dictionary Uruguay</ion-select-option>\r\n      <ion-select-option value=\"76\">Dictionary Venezuela</ion-select-option>\r\n      <ion-select-option value=\"153\">Dictionary Vietnam</ion-select-option>\r\n      <ion-select-option value=\"35\"\r\n        >Dictionary Signs Used Worldwide</ion-select-option\r\n      >\r\n      <ion-select-option value=\"77\">Dictionary South Africa</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-button (click)=\"downloadPuddle()\">\r\n      {{'Install Puddle' | translate}}\r\n    </ion-button>\r\n  </ion-item>\r\n  <hr class=\"hr-margin-bottom hr-black\" />\r\n  <div class=\"center\">\r\n    <file-drop\r\n      dropZoneLabel=\"{{'Drop SPML file here to add signs' | translate}}\"\r\n      (onFileDrop)=\"dropped($event)\"\r\n      (onFileOver)=\"fileOver($event)\"\r\n      (onFileLeave)=\"fileLeave($event)\"\r\n    ></file-drop>\r\n    <input (change)=\"upload($event)\" type=\"file\" />\r\n    <!-- <input #uploader=\"ngModel\" [(ngModel)]=\"uploaderInput\" (change)=\"upload($event)\" type=\"file\"/> -->\r\n    <!-- <ion-button (click)=\"uploader.click()\">\r\n                                                            {{'Choose SPML file' | translate}}\r\n                                                        </ion-button> -->\r\n    <hr class=\"hr-margin-bottom hr-black\" />\r\n    <ion-button (click)=\"clearSigns()\">\r\n      {{'Clear Signs' | translate}}\r\n    </ion-button>\r\n  </div>\r\n  <hr class=\"hr-margin-bottom hr-black\" />\r\n  <ion-fab horizontal=\"end\" slot=\"fixed\" vertical=\"bottom\">\r\n    <ion-label>{{'Next' | translate}}</ion-label>\r\n    <ion-fab-button>\r\n      <ion-icon\r\n        (click)=\"next()\"\r\n        name=\"arrow-dropright-circle\"\r\n        style=\"zoom:2.0;\"\r\n      ></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hr-margin-bottom {\n  margin-bottom: 16px; }\n\n.hr-black {\n  border: 0;\n  clear: both;\n  display: block;\n  width: 96%;\n  background-color: black;\n  height: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvSTpcXFNXU2lnbldyaXRlclxcU1dTaWduV3JpdGVyLUFwcC9zcmNcXGFwcFxcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFNBQVM7RUFDVCxXQUFVO0VBQ1YsY0FBYTtFQUNiLFVBQVU7RUFDVix1QkFBc0I7RUFDdEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhyLW1hcmdpbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmhyLWJsYWNrIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNsZWFyOmJvdGg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6IDk2JTsgICAgICAgICAgICAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var SettingsPage = /** @class */ (function () {
    function SettingsPage(settingsService, alertController, translate, toastController, translateService, http, router) {
        this.settingsService = settingsService;
        this.alertController = alertController;
        this.translate = translate;
        this.toastController = toastController;
        this.translateService = translateService;
        this.http = http;
        this.router = router;
    }
    SettingsPage.prototype.upload = function (event) {
        var file = event.target.files[0];
        this.settingsService.loadFile(file);
    };
    SettingsPage.prototype.next = function () {
        return this.router.navigateByUrl('/edit');
    };
    SettingsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.currentUILanguage()];
                    case 1:
                        _a.UILanguage = _b.sent();
                        this.settingsService.setFirstTime();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.dropped = function (event) {
        var _this = this;
        var files = event.files;
        var _loop_1 = function (droppedFile) {
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    if (droppedFile.relativePath.toLowerCase().endsWith('.spml')) {
                        _this.settingsService.loadFile(file);
                    }
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
            }
        };
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            _loop_1(droppedFile);
        }
    };
    SettingsPage.prototype.fileOver = function (event) {
        // console.log(event);
    };
    SettingsPage.prototype.fileLeave = function (event) {
        // console.log(event);
    };
    SettingsPage.prototype.clearSigns = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.translate.instant('Clear Signs!'),
                            message: this.translate.instant('Do you <strong>really</strong> want to delete all the signs!!!'),
                            buttons: [
                                {
                                    text: this.translate.instant('No'),
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (data) {
                                    }
                                }, {
                                    text: this.translate.instant('Yes'),
                                    handler: function () {
                                        _this.settingsService.removeAllSigns();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.onLanguageChange = function (event) {
        this.settingsService.setUILanguage(event.detail.value);
        this.UILanguage = event.detail.value;
    };
    SettingsPage.prototype.currentUILanguage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var language;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.settingsService.getUILanguage()];
                    case 1:
                        language = _a.sent();
                        return [2 /*return*/, language ? language : 'en'];
                }
            });
        });
    };
    SettingsPage.prototype.downloadPuddle = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showToast(this.translateService.instant('Downloading'), 3000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.showToast(this.translateService.instant('This may take a few minutes'), 3000)];
                    case 2:
                        _a.sent();
                        this.xhrDownloadPuddle();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.xhrDownloadPuddle = function () {
        var data = 'action=Download&ex_source=All';
        var puddle = 0;
        puddle = parseInt(this.puddleID, 10);
        if (isNaN(puddle)) {
            puddle = 4;
        }
        var url = 'https://cors-anywhere.herokuapp.com/http://www.signbank.org/signpuddle2.0/export.php?ui=1&sgn=' + puddle.toString();
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        var thispage = this;
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === 4) {
                thispage.settingsService.loadPuddle(this.responseText);
            }
        });
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Accept', 'application/xml');
        xhr.send(data);
    };
    SettingsPage.prototype.onPuddleChange = function (event) {
        this.puddleID = event.detail.value;
    };
    SettingsPage.prototype.showToast = function (message, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: duration
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map