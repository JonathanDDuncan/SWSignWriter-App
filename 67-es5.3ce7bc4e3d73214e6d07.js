!function(){function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){s=!0,a=e},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(S){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=M(a,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=c;var p={};function b(){}function d(){}function h(){}var f={};s(f,i,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==t&&r.call(g,i)&&(f=g);var m=h.prototype=b.prototype=Object.create(f);function y(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function N(e,t){function n(o,i,a,l){var s=u(e[o],e,i);if("throw"!==s.type){var c=s.arg,p=c.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then(function(e){n("next",e,a,l)},function(e){n("throw",e,a,l)}):t.resolve(p).then(function(e){c.value=e,a(c)},function(e){return n("throw",e,a,l)})}l(s.arg)}var o;this._invoke=function(e,r){function i(){return new t(function(t,o){n(e,r,t,o)})}return o=o?o.then(i,i):i()}}function M(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,M(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=h,s(m,"constructor",h),s(h,"constructor",d),d.displayName=s(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,l,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},y(N.prototype),s(N.prototype,a,function(){return this}),e.AsyncIterator=N,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new N(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},y(m),s(m,l,"Generator"),s(m,i,function(){return this}),s(m,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function r(e,t,n,r,o,i,a){try{var l=e[i](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var a=e.apply(t,n);function l(e){r(a,o,i,l,s,"next",e)}function s(e){r(a,o,i,l,s,"throw",e)}l(void 0)})}}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"7wo0":function(t,r,i){"use strict";i.r(r),i.d(r,"SettingsPageModule",function(){return K});var s=i("ofXK"),c=i("3Pt+"),u=i("tyNb"),p=i("TEn/"),b=i("O+7k"),d=i("FUe0"),h=i("KQF2"),f=i("iXKo"),v=i("fXoL"),g=i("sYmb"),m=i("HDdC"),y=i("D0XW"),N=i("DH7j");function M(e){return!Object(N.a)(e)&&e-parseFloat(e)+1>=0}var w=i("z+Ro");function x(e){var t=e.index,n=e.period,r=e.subscriber;if(r.next(t),!r.closed){if(-1===n)return r.complete();e.index=t+1,this.schedule(e,n)}}var k=["fileSelector"];function L(e,t){if(1&e&&(v.Nb(0,"div",8),v.pc(1),v.Mb()),2&e){var n=v.Xb(2);v.Ab(1),v.qc(n.dropZoneLabel)}}function E(e,t){if(1&e){var n=v.Ob();v.Nb(0,"div"),v.Nb(1,"input",9),v.Vb("click",function(e){return v.ic(n),v.Xb(2).openFileSelector(e)}),v.Mb(),v.Mb()}if(2&e){var r=v.Xb(2);v.Ab(1),v.dc("value",r.browseBtnLabel),v.cc("className",r.browseBtnClassName)}}function S(e,t){if(1&e&&(v.nc(0,L,2,1,"div",6),v.nc(1,E,2,2,"div",7)),2&e){var n=v.Xb();v.cc("ngIf",n.dropZoneLabel),v.Ab(1),v.cc("ngIf",n.showBrowseBtn)}}function D(e,t){}var F,C,O,P,A,I=function(e){return{openFileSelector:e}},_=a(function e(t,n){l(this,e),this.relativePath=t,this.fileEntry=n}),T=((P=a(function e(t){l(this,e),this.template=t})).\u0275fac=function(e){return new(e||P)(v.Kb(v.M))},P.\u0275dir=v.Fb({type:P,selectors:[["","ngx-file-drop-content-tmp",""]]}),P),B=((O=function(){function e(t,n){var r=this;l(this,e),this.zone=t,this.renderer=n,this.accept="*",this.directory=!1,this.multiple=!0,this.dropZoneLabel="",this.dropZoneClassName="ngx-file-drop__drop-zone",this.useDragEnter=!1,this.contentClassName="ngx-file-drop__content",this.showBrowseBtn=!1,this.browseBtnClassName="btn btn-primary btn-xs ngx-file-drop__browse-btn",this.browseBtnLabel="Browse files",this.onFileDrop=new v.o,this.onFileOver=new v.o,this.onFileLeave=new v.o,this.isDraggingOverDropZone=!1,this.globalDraggingInProgress=!1,this.files=[],this.numOfActiveReadEntries=0,this.helperFormEl=null,this.fileInputPlaceholderEl=null,this.dropEventTimerSubscription=null,this._disabled=!1,this.openFileSelector=function(e){r.fileSelector&&r.fileSelector.nativeElement&&r.fileSelector.nativeElement.click()},this.globalDragStartListener=this.renderer.listen("document","dragstart",function(e){r.globalDraggingInProgress=!0}),this.globalDragEndListener=this.renderer.listen("document","dragend",function(e){r.globalDraggingInProgress=!1})}return a(e,[{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=null!=e&&"false"!="".concat(e)}},{key:"ngOnDestroy",value:function(){this.dropEventTimerSubscription&&(this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=null),this.globalDragStartListener(),this.globalDragEndListener(),this.files=[],this.helperFormEl=null,this.fileInputPlaceholderEl=null}},{key:"onDragOver",value:function(e){this.useDragEnter?(this.preventAndStop(e),e.dataTransfer&&(e.dataTransfer.dropEffect="copy")):this.isDropzoneDisabled()||this.useDragEnter||!e.dataTransfer||(this.isDraggingOverDropZone||(this.isDraggingOverDropZone=!0,this.onFileOver.emit(e)),this.preventAndStop(e),e.dataTransfer.dropEffect="copy")}},{key:"onDragEnter",value:function(e){!this.isDropzoneDisabled()&&this.useDragEnter&&(this.isDraggingOverDropZone||(this.isDraggingOverDropZone=!0,this.onFileOver.emit(e)),this.preventAndStop(e))}},{key:"onDragLeave",value:function(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone&&(this.isDraggingOverDropZone=!1,this.onFileLeave.emit(e)),this.preventAndStop(e))}},{key:"dropFiles",value:function(e){var t;!this.isDropzoneDisabled()&&(this.isDraggingOverDropZone=!1,e.dataTransfer)&&(t=e.dataTransfer.items?e.dataTransfer.items:e.dataTransfer.files,this.preventAndStop(e),this.checkFiles(t))}},{key:"uploadFiles",value:function(e){!this.isDropzoneDisabled()&&e.target&&(this.checkFiles(e.target.files||[]),this.resetFileInput())}},{key:"checkFiles",value:function(e){for(var t=this,n=function(n){var r=e[n],o=null;if(t.canGetAsEntry(r)&&(o=r.webkitGetAsEntry()),o)if(o.isFile){var i=new _(o.name,o);t.addToQueue(i)}else o.isDirectory&&t.traverseFileTree(o,o.name);else if(r){var a={name:r.name,isDirectory:!1,isFile:!0,file:function(e){return e(r)}},l=new _(a.name,a);t.addToQueue(l)}},r=0;r<e.length;r++)n(r);this.dropEventTimerSubscription&&this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=-1;return M(t)?r=Number(t)<1?1:Number(t):Object(w.a)(t)&&(n=t),Object(w.a)(n)||(n=y.a),new m.a(function(t){var o=M(e)?e:+e-n.now();return n.schedule(x,o,{index:0,period:r,subscriber:t})})}(200,200).subscribe(function(){if(t.files.length>0&&0===t.numOfActiveReadEntries){var e=t.files;t.files=[],t.onFileDrop.emit(e)}})}},{key:"traverseFileTree",value:function(e,t){var n=this;if(e.isFile){var r=new _(t,e);this.files.push(r)}else{t+="/";var o=e.createReader(),i=[];!function r(){n.numOfActiveReadEntries++,o.readEntries(function(o){if(o.length)i=i.concat(o),r();else if(0===i.length){var a=new _(t,e);n.zone.run(function(){n.addToQueue(a)})}else for(var l=function(e){n.zone.run(function(){n.traverseFileTree(i[e],t+i[e].name)})},s=0;s<i.length;s++)l(s);n.numOfActiveReadEntries--})}()}}},{key:"resetFileInput",value:function(){if(this.fileSelector&&this.fileSelector.nativeElement){var e=this.fileSelector.nativeElement,t=e.parentElement,n=this.getHelperFormElement(),r=this.getFileInputPlaceholderElement();t!==n&&(this.renderer.insertBefore(t,r,e),this.renderer.appendChild(n,e),n.reset(),this.renderer.insertBefore(t,e,r),this.renderer.removeChild(t,r))}}},{key:"getHelperFormElement",value:function(){return this.helperFormEl||(this.helperFormEl=this.renderer.createElement("form")),this.helperFormEl}},{key:"getFileInputPlaceholderElement",value:function(){return this.fileInputPlaceholderEl||(this.fileInputPlaceholderEl=this.renderer.createElement("div")),this.fileInputPlaceholderEl}},{key:"canGetAsEntry",value:function(e){return!!e.webkitGetAsEntry}},{key:"isDropzoneDisabled",value:function(){return this.globalDraggingInProgress||this.disabled}},{key:"addToQueue",value:function(e){this.files.push(e)}},{key:"preventAndStop",value:function(e){e.stopPropagation(),e.preventDefault()}}]),e}()).\u0275fac=function(e){return new(e||O)(v.Kb(v.B),v.Kb(v.F))},O.\u0275cmp=v.Eb({type:O,selectors:[["ngx-file-drop"]],contentQueries:function(e,t,n){var r;1&e&&v.Db(n,T,1,v.M),2&e&&v.gc(r=v.Wb())&&(t.contentTemplate=r.first)},viewQuery:function(e,t){var n;1&e&&v.tc(k,3),2&e&&v.gc(n=v.Wb())&&(t.fileSelector=n.first)},inputs:{accept:"accept",directory:"directory",multiple:"multiple",dropZoneLabel:"dropZoneLabel",dropZoneClassName:"dropZoneClassName",useDragEnter:"useDragEnter",contentClassName:"contentClassName",showBrowseBtn:"showBrowseBtn",browseBtnClassName:"browseBtnClassName",browseBtnLabel:"browseBtnLabel",disabled:"disabled"},outputs:{onFileDrop:"onFileDrop",onFileOver:"onFileOver",onFileLeave:"onFileLeave"},decls:7,vars:15,consts:[[3,"className","drop","dragover","dragenter","dragleave"],[3,"className"],["type","file",1,"ngx-file-drop__file-input",3,"accept","multiple","change"],["fileSelector",""],["defaultContentTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ngx-file-drop__drop-zone-label",4,"ngIf"],[4,"ngIf"],[1,"ngx-file-drop__drop-zone-label"],["type","button",3,"className","value","click"]],template:function(e,t){if(1&e&&(v.Nb(0,"div",0),v.Vb("drop",function(e){return t.dropFiles(e)})("dragover",function(e){return t.onDragOver(e)})("dragenter",function(e){return t.onDragEnter(e)})("dragleave",function(e){return t.onDragLeave(e)}),v.Nb(1,"div",1),v.Nb(2,"input",2,3),v.Vb("change",function(e){return t.uploadFiles(e)}),v.Mb(),v.nc(4,S,2,2,"ng-template",null,4,v.oc),v.nc(6,D,0,0,"ng-template",5),v.Mb(),v.Mb()),2&e){var n=v.hc(5);v.Cb("ngx-file-drop__drop-zone--over",t.isDraggingOverDropZone),v.cc("className",t.dropZoneClassName),v.Ab(1),v.cc("className",t.contentClassName),v.Ab(1),v.cc("accept",t.accept)("multiple",t.multiple),v.Bb("directory",t.directory||void 0)("webkitdirectory",t.directory||void 0)("mozdirectory",t.directory||void 0)("msdirectory",t.directory||void 0)("odirectory",t.directory||void 0),v.Ab(4),v.cc("ngTemplateOutlet",t.contentTemplate||n)("ngTemplateOutletContext",v.fc(13,I,t.openFileSelector))}},directives:[s.j,s.i],styles:[".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{border:2px dotted #0782d0;border-radius:30px;height:100px;margin:auto}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:hsla(0,0%,57.6%,.5)}.ngx-file-drop__content[_ngcontent-%COMP%]{align-items:center;color:#0782d0;display:flex;height:100px;justify-content:center}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]}),O),Z=((C=a(function e(){l(this,e)})).\u0275fac=function(e){return new(e||C)},C.\u0275mod=v.Ib({type:C,bootstrap:function(){return[B]}}),C.\u0275inj=v.Hb({providers:[],imports:[[s.b]]}),C),z=((F=function(){function t(e,n,r,o,i,a,s,c,u){l(this,t),this.settingsService=e,this.alertController=n,this.translate=r,this.toastController=o,this.translateService=i,this.loadingController=a,this.router=s,this.httpService=c,this.logService=u,this.files=[],this.spmldropExpanded=!1}var r,i,s,c,u,p,b,h,f;return a(t,[{key:"installedPuddlesNames",value:function(){}},{key:"upload",value:function(e){this.settingsService.loadFile(e.target.files[0])}},{key:"next",value:function(){return this.router.navigateByUrl("/edit")}},{key:"ngOnInit",value:(f=o(n().mark(function e(){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.currentUILanguage();case 2:this.UILanguage=e.sent,this.settingsService.setFirstTime(),this.installedPuddlesNames();case 5:case"end":return e.stop()}},e,this)})),function(){return f.apply(this,arguments)})},{key:"dropped",value:function(t){var r=this;this.files=t;var i,a=e(t);try{var l=function(){var e=i.value;e.fileEntry.isFile&&e.fileEntry.file(function(){var t=o(n().mark(function t(o){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e&&e.relativePath&&e.relativePath.toLowerCase().endsWith(".spml"),!t.t0){t.next=6;break}return t.next=4,r.presentLoading();case 4:return t.next=6,r.settingsService.loadFile(o);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())};for(a.s();!(i=a.n()).done;)l()}catch(s){a.e(s)}finally{a.f()}}},{key:"fileOver",value:(h=o(n().mark(function e(t){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)})),function(e){return h.apply(this,arguments)})},{key:"fileLeave",value:function(e){}},{key:"clearSigns",value:(b=o(n().mark(function e(){var t,r=this;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:this.translate.instant("Clear Signs!"),message:this.translate.instant("Do you <strong>really</strong> want to delete all the signs!!!"),buttons:[{text:this.translate.instant("No"),role:"cancel",cssClass:"secondary",handler:function(e){}},{text:this.translate.instant("Yes"),handler:function(){r.settingsService.removeAllSigns(),r.logService.AddLog("Removed all Signs")}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)})),function(){return b.apply(this,arguments)})},{key:"onLanguageChange",value:function(e){this.settingsService.setUILanguage(e.detail.value),this.UILanguage=e.detail.value}},{key:"currentUILanguage",value:(p=o(n().mark(function e(){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.settingsService.getUILanguage();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0="en";case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}},e,this)})),function(){return p.apply(this,arguments)})},{key:"downloadPuddle",value:(u=o(n().mark(function e(){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.showToast(this.translateService.instant("Downloading"),3e3);case 2:return e.next=4,this.showToast(this.translateService.instant("This may take a few minutes"),3e3);case 4:return e.next=6,this.presentLoading();case 6:this.xhrDownloadPuddle();case 7:case"end":return e.stop()}},e,this)})),function(){return u.apply(this,arguments)})},{key:"xhrDownloadPuddle",value:function(){var e=this;try{var t=0;t=parseInt(this.puddleID,10),isNaN(t)&&(t=4),this.httpService.GetPuddle(t.toString()).subscribe(function(){var t=o(n().mark(function t(r){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.settingsService.loadPuddle(r.toString());case 3:return e.logService.AddLog("Loaded Puddle ".concat(e.puddleID)),t.next=6,e.signsLoaded();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}())}catch(r){console.log(r)}}},{key:"signsLoaded",value:(c=o(n().mark(function e(){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loading.dismiss();case 2:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"onPuddleChange",value:function(e){this.puddleID=e.detail.value,this.downloadPuddle()}},{key:"showToast",value:(s=o(n().mark(function e(t,r){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({message:t,duration:r});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)})),function(e,t){return s.apply(this,arguments)})},{key:"expandItem",value:function(){d.a.isNativePlatform()&&(this.spmldropExpanded=!this.spmldropExpanded)}},{key:"presentLoading",value:(i=o(n().mark(function e(){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({message:"Please wait...",backdropDismiss:!1});case 2:this.loading=e.sent,this.loading.present();case 4:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"presentLoadingWithOptions",value:(r=o(n().mark(function e(){var t,r;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({spinner:null,duration:5e3,message:"Click the backdrop to dismiss early...",translucent:!0,cssClass:"custom-class custom-loading",backdropDismiss:!0});case 2:return this.loading=e.sent,e.next=5,this.loading.present();case 5:return e.next=7,this.loading.onDidDismiss();case 7:t=e.sent,r=t.role,console.log("Loading dismissed with role:",r);case 10:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})}]),t}()).\u0275fac=function(e){return new(e||F)(v.Kb(b.a),v.Kb(p.a),v.Kb(g.d),v.Kb(p.Q),v.Kb(g.d),v.Kb(p.J),v.Kb(u.g),v.Kb(h.a),v.Kb(f.a))},F.\u0275cmp=v.Eb({type:F,selectors:[["app-settings"]],decls:239,vars:28,consts:[["color","navy"],["slot","start"],["padding","padding"],["interface","popover",3,"ngModel","ionChange","ngModelChange"],["value","ca"],["value","cs"],["value","de"],["value","en"],["value","eo"],["value","es"],["value","fr"],["value","ko"],["value","mt"],["value","nl"],["value","no"],["value","pl"],["value","pt"],["value","sl"],["value","zh"],[1,"hr-margin-bottom","hr-black"],["value","106"],["value","82"],["value","41"],["value","4"],["value","29"],["value","42"],["value","43"],["value","44"],["value","134"],["value","45"],["value","46"],["value","47"],["value","48"],["value","49"],["value","50"],["value","135"],["value","83"],["value","51"],["value","52"],["value","53"],["value","30"],["value","136"],["value","109"],["value","84"],["value","54"],["value","55"],["value","56"],["value","18"],["value","57"],["value","58"],["value","59"],["value","60"],["value","61"],["value","112"],["value","16"],["value","113"],["value","122"],["value","62"],["value","110"],["value","2"],["value","131"],["value","63"],["value","86"],["value","64"],["value","79"],["value","78"],["value","107"],["value","108"],["value","31"],["value","128"],["value","65"],["value","66"],["value","32"],["value","67"],["value","68"],["value","69"],["value","133"],["value","70"],["value","71"],["value","72"],["value","87"],["value","19"],["value","33"],["value","129"],["value","132"],["value","88"],["value","40"],["value","73"],["value","11"],["value","89"],["value","137"],["value","34"],["value","104"],["value","90"],["value","75"],["value","143"],["value","76"],["value","153"],["value","35"],["value","77"],[3,"click"],["height","200px;"],[1,"center"],[3,"dropZoneLabel","onFileDrop","onFileOver","onFileLeave"],["type","file",3,"change"],["color","orange",3,"click"],["horizontal","end","slot","fixed","vertical","bottom"],["color","green"],["name","caret-forward-circle-outline",2,"zoom","2.0",3,"click"]],template:function(e,t){1&e&&(v.Nb(0,"ion-header"),v.Nb(1,"ion-toolbar",0),v.Nb(2,"ion-buttons",1),v.Lb(3,"ion-menu-button"),v.Mb(),v.Nb(4,"ion-title"),v.pc(5),v.Yb(6,"translate"),v.Mb(),v.Mb(),v.Mb(),v.Nb(7,"ion-content",2),v.Nb(8,"ion-item"),v.Nb(9,"ion-label"),v.pc(10),v.Yb(11,"translate"),v.Mb(),v.Nb(12,"ion-select",3),v.Vb("ionChange",function(e){return t.onLanguageChange(e)})("ngModelChange",function(e){return t.UILanguage=e}),v.Nb(13,"ion-select-option",4),v.pc(14,"catal\xe0"),v.Mb(),v.Nb(15,"ion-select-option",5),v.pc(16,"\u010de\u0161tina"),v.Mb(),v.Nb(17,"ion-select-option",6),v.pc(18,"Deutsche"),v.Mb(),v.Nb(19,"ion-select-option",7),v.pc(20,"English"),v.Mb(),v.Nb(21,"ion-select-option",8),v.pc(22,"esperanto"),v.Mb(),v.Nb(23,"ion-select-option",9),v.pc(24,"espa\xf1ol"),v.Mb(),v.Nb(25,"ion-select-option",10),v.pc(26,"fran\xe7ais"),v.Mb(),v.Nb(27,"ion-select-option",11),v.pc(28,"\ud55c\uad6d\uc5b4"),v.Mb(),v.Nb(29,"ion-select-option",12),v.pc(30,"maltin"),v.Mb(),v.Nb(31,"ion-select-option",13),v.pc(32,"Nederlands"),v.Mb(),v.Nb(33,"ion-select-option",14),v.pc(34,"norsk"),v.Mb(),v.Nb(35,"ion-select-option",15),v.pc(36,"Polskie"),v.Mb(),v.Nb(37,"ion-select-option",16),v.pc(38,"portugu\xeas"),v.Mb(),v.Nb(39,"ion-select-option",17),v.pc(40,"Sloven\u0161\u010dina"),v.Mb(),v.Nb(41,"ion-select-option",18),v.pc(42,"\u4e2d\u6587"),v.Mb(),v.Mb(),v.Mb(),v.Lb(43,"hr",19),v.Nb(44,"ion-list"),v.Nb(45,"ion-item"),v.Nb(46,"ion-label"),v.pc(47),v.Yb(48,"translate"),v.Mb(),v.Nb(49,"ion-select",3),v.Vb("ionChange",function(e){return t.onPuddleChange(e)})("ngModelChange",function(e){return t.puddleID=e}),v.Nb(50,"ion-select-option",20),v.pc(51,"Afghanistan"),v.Mb(),v.Nb(52,"ion-select-option",21),v.pc(53,"Albania"),v.Mb(),v.Nb(54,"ion-select-option",22),v.pc(55,"Argentina"),v.Mb(),v.Nb(56,"ion-select-option",23),v.pc(57,"ASL - USA & Canada"),v.Mb(),v.Nb(58,"ion-select-option",24),v.pc(59,"AT"),v.Mb(),v.Nb(60,"ion-select-option",25),v.pc(61,"Australia"),v.Mb(),v.Nb(62,"ion-select-option",26),v.pc(63,"French Belgium"),v.Mb(),v.Nb(64,"ion-select-option",27),v.pc(65,"Flanders, Belgium"),v.Mb(),v.Nb(66,"ion-select-option",28),v.pc(67,"Bulgaria"),v.Mb(),v.Nb(68,"ion-select-option",29),v.pc(69,"Bolivia"),v.Mb(),v.Nb(70,"ion-select-option",30),v.pc(71,"LIBRAS - Brazil"),v.Mb(),v.Nb(72,"ion-select-option",31),v.pc(73,"Quebec"),v.Mb(),v.Nb(74,"ion-select-option",32),v.pc(75,"German Switzerland"),v.Mb(),v.Nb(76,"ion-select-option",33),v.pc(77,"French-Switzerland"),v.Mb(),v.Nb(78,"ion-select-option",34),v.pc(79,"CH-it"),v.Mb(),v.Nb(80,"ion-select-option",35),v.pc(81,"Chile"),v.Mb(),v.Nb(82,"ion-select-option",36),v.pc(83,"China"),v.Mb(),v.Nb(84,"ion-select-option",37),v.pc(85,"Colombia"),v.Mb(),v.Nb(86,"ion-select-option",38),v.pc(87,"Czech Republic"),v.Mb(),v.Nb(88,"ion-select-option",39),v.pc(89,"Deutschland, Germany"),v.Mb(),v.Nb(90,"ion-select-option",40),v.pc(91,"Denmark"),v.Mb(),v.Nb(92,"ion-select-option",41),v.pc(93,"Ecuador"),v.Mb(),v.Nb(94,"ion-select-option",42),v.pc(95,"Estonia"),v.Mb(),v.Nb(96,"ion-select-option",43),v.pc(97,"Egypt"),v.Mb(),v.Nb(98,"ion-select-option",44),v.pc(99,"Vortaro"),v.Mb(),v.Nb(100,"ion-select-option",45),v.pc(101,"Espa\xf1a, Spain"),v.Mb(),v.Nb(102,"ion-select-option",46),v.pc(103,"Catalonia, Barcelona"),v.Mb(),v.Nb(104,"ion-select-option",47),v.pc(105,"Ethiopia"),v.Mb(),v.Nb(106,"ion-select-option",48),v.pc(107,"Finland"),v.Mb(),v.Nb(108,"ion-select-option",49),v.pc(109,"France"),v.Mb(),v.Nb(110,"ion-select-option",50),v.pc(111,"Great Britain"),v.Mb(),v.Nb(112,"ion-select-option",51),v.pc(113,"Northern Ireland"),v.Mb(),v.Nb(114,"ion-select-option",52),v.pc(115,"Greece"),v.Mb(),v.Nb(116,"ion-select-option",53),v.pc(117,"Guatemala"),v.Mb(),v.Nb(118,"ion-select-option",54),v.pc(119,"LESHO - Honduras"),v.Mb(),v.Nb(120,"ion-select-option",55),v.pc(121,"Haiti"),v.Mb(),v.Nb(122,"ion-select-option",56),v.pc(123,"Hungary"),v.Mb(),v.Nb(124,"ion-select-option",57),v.pc(125,"Ireland"),v.Mb(),v.Nb(126,"ion-select-option",58),v.pc(127,"Israel"),v.Mb(),v.Nb(128,"ion-select-option",59),v.pc(129,"India"),v.Mb(),v.Nb(130,"ion-select-option",60),v.pc(131,"IS"),v.Mb(),v.Nb(132,"ion-select-option",61),v.pc(133,"IT"),v.Mb(),v.Nb(134,"ion-select-option",62),v.pc(135,"Jordan"),v.Mb(),v.Nb(136,"ion-select-option",63),v.pc(137,"Japan"),v.Mb(),v.Nb(138,"ion-select-option",64),v.pc(139,"Kenya"),v.Mb(),v.Nb(140,"ion-select-option",65),v.pc(141,"Korea"),v.Mb(),v.Nb(142,"ion-select-option",66),v.pc(143,"Lithuania"),v.Mb(),v.Nb(144,"ion-select-option",67),v.pc(145,"Latvia"),v.Mb(),v.Nb(146,"ion-select-option",59),v.pc(147,"Myanmar"),v.Mb(),v.Nb(148,"ion-select-option",68),v.pc(149,"Malta"),v.Mb(),v.Nb(150,"ion-select-option",69),v.pc(151,"Malawi"),v.Mb(),v.Nb(152,"ion-select-option",70),v.pc(153,"Malawi Mexico"),v.Mb(),v.Nb(154,"ion-select-option",71),v.pc(155,"Malaysia"),v.Mb(),v.Nb(156,"ion-select-option",72),v.pc(157,"Nigeria"),v.Mb(),v.Nb(158,"ion-select-option",73),v.pc(159,"Nicaragua"),v.Mb(),v.Nb(160,"ion-select-option",74),v.pc(161,"NL"),v.Mb(),v.Nb(162,"ion-select-option",75),v.pc(163,"Norge, Norway"),v.Mb(),v.Nb(164,"ion-select-option",76),v.pc(165,"Nepal"),v.Mb(),v.Nb(166,"ion-select-option",77),v.pc(167,"New Zealand"),v.Mb(),v.Nb(168,"ion-select-option",78),v.pc(169,"Diccionario Peru"),v.Mb(),v.Nb(170,"ion-select-option",79),v.pc(171,"Philippines"),v.Mb(),v.Nb(172,"ion-select-option",80),v.pc(173,"Pakistan"),v.Mb(),v.Nb(174,"ion-select-option",81),v.pc(175,"Poland"),v.Mb(),v.Nb(176,"ion-select-option",82),v.pc(177,"Portugal"),v.Mb(),v.Nb(178,"ion-select-option",83),v.pc(179,"Paraguay"),v.Mb(),v.Nb(180,"ion-select-option",84),v.pc(181,"Romania"),v.Mb(),v.Nb(182,"ion-select-option",85),v.pc(183,"Russia"),v.Mb(),v.Nb(184,"ion-select-option",86),v.pc(185,"Kingdom Saudi Arabia"),v.Mb(),v.Nb(186,"ion-select-option",87),v.pc(187,"Sverige"),v.Mb(),v.Nb(188,"ion-select-option",88),v.pc(189,"SgSL Singapore Sign Language"),v.Mb(),v.Nb(190,"ion-select-option",89),v.pc(191,"Slovakia"),v.Mb(),v.Nb(192,"ion-select-option",87),v.pc(193,"Sverige"),v.Mb(),v.Nb(194,"ion-select-option",90),v.pc(195,"El Salvador"),v.Mb(),v.Nb(196,"ion-select-option",91),v.pc(197,"Thailand"),v.Mb(),v.Nb(198,"ion-select-option",92),v.pc(199,"Tunisia"),v.Mb(),v.Nb(200,"ion-select-option",93),v.pc(201,"Turkey"),v.Mb(),v.Nb(202,"ion-select-option",94),v.pc(203,"Taiwan"),v.Mb(),v.Nb(204,"ion-select-option",95),v.pc(205,"Uruguay"),v.Mb(),v.Nb(206,"ion-select-option",96),v.pc(207,"Venezuela"),v.Mb(),v.Nb(208,"ion-select-option",97),v.pc(209,"Vietnam"),v.Mb(),v.Nb(210,"ion-select-option",98),v.pc(211),v.Yb(212,"translate"),v.Mb(),v.Nb(213,"ion-select-option",99),v.pc(214,"South Africa"),v.Mb(),v.Mb(),v.Mb(),v.Mb(),v.Lb(215,"hr",19),v.Nb(216,"ion-list"),v.Nb(217,"ion-list-header",100),v.Vb("click",function(){return t.expandItem()}),v.Nb(218,"ion-label"),v.pc(219),v.Yb(220,"translate"),v.Mb(),v.Mb(),v.Nb(221,"ion-item",101),v.Nb(222,"div",102),v.Nb(223,"ngx-file-drop",103),v.Vb("onFileDrop",function(e){return t.dropped(e)})("onFileOver",function(e){return t.fileOver(e)})("onFileLeave",function(e){return t.fileLeave(e)}),v.Yb(224,"translate"),v.Mb(),v.Nb(225,"input",104),v.Vb("change",function(e){return t.upload(e)}),v.Mb(),v.Mb(),v.Mb(),v.Lb(226,"hr",19),v.Mb(),v.Nb(227,"ion-item"),v.Nb(228,"div"),v.Nb(229,"ion-button",105),v.Vb("click",function(){return t.clearSigns()}),v.pc(230),v.Yb(231,"translate"),v.Mb(),v.Mb(),v.Mb(),v.Lb(232,"hr",19),v.Nb(233,"ion-fab",106),v.Nb(234,"ion-label"),v.pc(235),v.Yb(236,"translate"),v.Mb(),v.Nb(237,"ion-fab-button",107),v.Nb(238,"ion-icon",108),v.Vb("click",function(){return t.next()}),v.Mb(),v.Mb(),v.Mb(),v.Mb()),2&e&&(v.Ab(5),v.qc(v.Zb(6,12,"Settings")),v.Ab(5),v.qc(v.Zb(11,14,"UI Language")),v.Ab(2),v.cc("ngModel",t.UILanguage),v.Ab(35),v.qc(v.Zb(48,16,"Install Signs from SignLanguage Puddle")),v.Ab(2),v.cc("ngModel",t.puddleID),v.Ab(162),v.qc(v.Zb(212,18,"Signs Used Worldwide")),v.Ab(8),v.qc(v.Zb(220,20,"Install with SPML File")),v.Ab(2),v.Cb("collapsed",!t.spmldropExpanded),v.Ab(2),v.dc("dropZoneLabel",v.Zb(224,22,"Drop SPML file here to add signs")),v.Ab(7),v.rc(" ",v.Zb(231,24,"Clear All Signs")," "),v.Ab(5),v.qc(v.Zb(236,26,"Next")))},directives:[p.m,p.G,p.f,p.u,p.F,p.h,p.p,p.q,p.B,p.O,c.e,c.f,p.C,p.r,p.s,B,p.e,p.i,p.j,p.n],pipes:[g.c],styles:[".hr-margin-bottom[_ngcontent-%COMP%]{margin-bottom:16px}.hr-black[_ngcontent-%COMP%]{border:0;clear:both;display:block;width:96%;background-color:#000;height:1px}.collapsed[_ngcontent-%COMP%]{height:0!important}"]}),F),j=i("PCNd"),G=[{path:"",component:z}],K=((A=a(function e(){l(this,e)})).\u0275fac=function(e){return new(e||A)},A.\u0275mod=v.Ib({type:A}),A.\u0275inj=v.Hb({imports:[[s.b,c.b,p.H,u.i.forChild(G),Z,j.a]]}),A)}}])}();