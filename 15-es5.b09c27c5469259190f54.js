!function(){function e(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return l=e.done,e},e:function(e){s=!0,a=e},f:function(){try{l||null==i.return||i.return()}finally{if(s)throw a}}}}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function t(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7wo0":function(n,t,r){"use strict";r.r(t),r.d(t,"SettingsPageModule",function(){return K});var a=r("ofXK"),l=r("3Pt+"),s=r("tyNb"),c=r("TEn/"),u=r("HaE+"),p=r("HtUY"),b=r("O+7k"),d=r("FUe0"),v=r("KH6c"),f=r("KQF2"),g=r("fXoL"),h=r("sYmb"),m=r("HDdC"),N=r("D0XW"),M=r("DH7j");function y(e){return!Object(M.a)(e)&&e-parseFloat(e)+1>=0}var w=r("z+Ro");function k(e){var n=e.index,t=e.period,i=e.subscriber;if(i.next(n),!i.closed){if(-1===t)return i.complete();e.index=n+1,this.schedule(e,t)}}var S=["fileSelector"];function x(e,n){if(1&e&&(g.Nb(0,"div",8),g.pc(1),g.Mb()),2&e){var t=g.Xb(2);g.Ab(1),g.qc(t.dropZoneLabel)}}function D(e,n){if(1&e){var t=g.Ob();g.Nb(0,"div"),g.Nb(1,"input",9),g.Vb("click",function(e){return g.ic(t),g.Xb(2).openFileSelector(e)}),g.Mb(),g.Mb()}if(2&e){var i=g.Xb(2);g.Ab(1),g.dc("value",i.browseBtnLabel),g.cc("className",i.browseBtnClassName)}}function E(e,n){if(1&e&&(g.nc(0,x,2,1,"div",6),g.nc(1,D,2,2,"div",7)),2&e){var t=g.Xb();g.cc("ngIf",t.dropZoneLabel),g.Ab(1),g.cc("ngIf",t.showBrowseBtn)}}function C(e,n){}var F,L,O,A,P,I=function(e){return{openFileSelector:e}},T=function e(n,t){o(this,e),this.relativePath=n,this.fileEntry=t},_=((A=function e(n){o(this,e),this.template=n}).\u0275fac=function(e){return new(e||A)(g.Kb(g.M))},A.\u0275dir=g.Fb({type:A,selectors:[["","ngx-file-drop-content-tmp",""]]}),A),R=((O=function(){function e(n,t){var i=this;o(this,e),this.zone=n,this.renderer=t,this.accept="*",this.directory=!1,this.multiple=!0,this.dropZoneLabel="",this.dropZoneClassName="ngx-file-drop__drop-zone",this.contentClassName="ngx-file-drop__content",this.showBrowseBtn=!1,this.browseBtnClassName="btn btn-primary btn-xs ngx-file-drop__browse-btn",this.browseBtnLabel="Browse files",this.onFileDrop=new g.o,this.onFileOver=new g.o,this.onFileLeave=new g.o,this.isDraggingOverDropZone=!1,this.globalDraggingInProgress=!1,this.files=[],this.numOfActiveReadEntries=0,this.helperFormEl=null,this.fileInputPlaceholderEl=null,this.dropEventTimerSubscription=null,this._disabled=!1,this.openFileSelector=function(e){i.fileSelector&&i.fileSelector.nativeElement&&i.fileSelector.nativeElement.click()},this.globalDragStartListener=this.renderer.listen("document","dragstart",function(e){i.globalDraggingInProgress=!0}),this.globalDragEndListener=this.renderer.listen("document","dragend",function(e){i.globalDraggingInProgress=!1})}return i(e,[{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=null!=e&&"false"!="".concat(e)}},{key:"ngOnDestroy",value:function(){this.dropEventTimerSubscription&&(this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=null),this.globalDragStartListener(),this.globalDragEndListener(),this.files=[],this.helperFormEl=null,this.fileInputPlaceholderEl=null}},{key:"onDragOver",value:function(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone||(this.isDraggingOverDropZone=!0,this.onFileOver.emit(e)),this.preventAndStop(e))}},{key:"onDragLeave",value:function(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone&&(this.isDraggingOverDropZone=!1,this.onFileLeave.emit(e)),this.preventAndStop(e))}},{key:"dropFiles",value:function(e){var n;!this.isDropzoneDisabled()&&(this.isDraggingOverDropZone=!1,e.dataTransfer)&&(e.dataTransfer.dropEffect="copy",n=e.dataTransfer.items?e.dataTransfer.items:e.dataTransfer.files,this.preventAndStop(e),this.checkFiles(n))}},{key:"uploadFiles",value:function(e){!this.isDropzoneDisabled()&&e.target&&(this.checkFiles(e.target.files||[]),this.resetFileInput())}},{key:"checkFiles",value:function(e){for(var n=this,t=function(t){var i=e[t],o=null;if(n.canGetAsEntry(i)&&(o=i.webkitGetAsEntry()),o)if(o.isFile){var r=new T(o.name,o);n.addToQueue(r)}else o.isDirectory&&n.traverseFileTree(o,o.name);else if(i){var a={name:i.name,isDirectory:!1,isFile:!0,file:function(e){e(i)}},l=new T(a.name,a);n.addToQueue(l)}},i=0;i<e.length;i++)t(i);this.dropEventTimerSubscription&&this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,i=-1;return y(n)?i=Number(n)<1?1:Number(n):Object(w.a)(n)&&(t=n),Object(w.a)(t)||(t=N.a),new m.a(function(n){var o=y(e)?e:+e-t.now();return t.schedule(k,o,{index:0,period:i,subscriber:n})})}(200,200).subscribe(function(){if(n.files.length>0&&0===n.numOfActiveReadEntries){var e=n.files;n.files=[],n.onFileDrop.emit(e)}})}},{key:"traverseFileTree",value:function(e,n){var t=this;if(e.isFile){var i=new T(n,e);this.files.push(i)}else{n+="/";var o=e.createReader(),r=[];!function i(){t.numOfActiveReadEntries++,o.readEntries(function(o){if(o.length)r=r.concat(o),i();else if(0===r.length){var a=new T(n,e);t.zone.run(function(){t.addToQueue(a)})}else for(var l=function(e){t.zone.run(function(){t.traverseFileTree(r[e],n+r[e].name)})},s=0;s<r.length;s++)l(s);t.numOfActiveReadEntries--})}()}}},{key:"resetFileInput",value:function(){if(this.fileSelector&&this.fileSelector.nativeElement){var e=this.fileSelector.nativeElement,n=e.parentElement,t=this.getHelperFormElement(),i=this.getFileInputPlaceholderElement();n!==t&&(this.renderer.insertBefore(n,i,e),this.renderer.appendChild(t,e),t.reset(),this.renderer.insertBefore(n,e,i),this.renderer.removeChild(n,i))}}},{key:"getHelperFormElement",value:function(){return this.helperFormEl||(this.helperFormEl=this.renderer.createElement("form")),this.helperFormEl}},{key:"getFileInputPlaceholderElement",value:function(){return this.fileInputPlaceholderEl||(this.fileInputPlaceholderEl=this.renderer.createElement("div")),this.fileInputPlaceholderEl}},{key:"canGetAsEntry",value:function(e){return!!e.webkitGetAsEntry}},{key:"isDropzoneDisabled",value:function(){return this.globalDraggingInProgress||this.disabled}},{key:"addToQueue",value:function(e){this.files.push(e)}},{key:"preventAndStop",value:function(e){e.stopPropagation(),e.preventDefault()}}]),e}()).\u0275fac=function(e){return new(e||O)(g.Kb(g.B),g.Kb(g.F))},O.\u0275cmp=g.Eb({type:O,selectors:[["ngx-file-drop"]],contentQueries:function(e,n,t){var i;1&e&&g.Db(t,_,1,g.M),2&e&&g.gc(i=g.Wb())&&(n.contentTemplate=i.first)},viewQuery:function(e,n){var t;1&e&&g.uc(S,3),2&e&&g.gc(t=g.Wb())&&(n.fileSelector=t.first)},inputs:{accept:"accept",directory:"directory",multiple:"multiple",dropZoneLabel:"dropZoneLabel",dropZoneClassName:"dropZoneClassName",contentClassName:"contentClassName",showBrowseBtn:"showBrowseBtn",browseBtnClassName:"browseBtnClassName",browseBtnLabel:"browseBtnLabel",disabled:"disabled"},outputs:{onFileDrop:"onFileDrop",onFileOver:"onFileOver",onFileLeave:"onFileLeave"},decls:7,vars:15,consts:[[3,"className","drop","dragover","dragleave"],[3,"className"],["type","file",1,"ngx-file-drop__file-input",3,"accept","multiple","change"],["fileSelector",""],["defaultContentTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ngx-file-drop__drop-zone-label",4,"ngIf"],[4,"ngIf"],[1,"ngx-file-drop__drop-zone-label"],["type","button",3,"className","value","click"]],template:function(e,n){if(1&e&&(g.Nb(0,"div",0),g.Vb("drop",function(e){return n.dropFiles(e)})("dragover",function(e){return n.onDragOver(e)})("dragleave",function(e){return n.onDragLeave(e)}),g.Nb(1,"div",1),g.Nb(2,"input",2,3),g.Vb("change",function(e){return n.uploadFiles(e)}),g.Mb(),g.nc(4,E,2,2,"ng-template",null,4,g.oc),g.nc(6,C,0,0,"ng-template",5),g.Mb(),g.Mb()),2&e){var t=g.hc(5);g.Cb("ngx-file-drop__drop-zone--over",n.isDraggingOverDropZone),g.cc("className",n.dropZoneClassName),g.Ab(1),g.cc("className",n.contentClassName),g.Ab(1),g.cc("accept",n.accept)("multiple",n.multiple),g.Bb("directory",n.directory||void 0)("webkitdirectory",n.directory||void 0)("mozdirectory",n.directory||void 0)("msdirectory",n.directory||void 0)("odirectory",n.directory||void 0),g.Ab(4),g.cc("ngTemplateOutlet",n.contentTemplate||t)("ngTemplateOutletContext",g.fc(13,I,n.openFileSelector))}},directives:[a.l,a.k],styles:[".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:rgba(147,147,147,.5)}.ngx-file-drop__content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]}),O),B=((L=function e(){o(this,e)}).\u0275fac=function(e){return new(e||L)},L.\u0275mod=g.Ib({type:L,bootstrap:function(){return[R]}}),L.\u0275inj=g.Hb({providers:[],imports:[[a.c]]}),L),Z=((F=function(){function n(e,t,i,r,a,l,s,c,u,p){o(this,n),this.settingsService=e,this.alertController=t,this.translate=i,this.toastController=r,this.translateService=a,this.subscriptionServiceNG=l,this.subscriptionServiceAndroid=s,this.loadingController=c,this.router=u,this.httpService=p,this.files=[],this.spmldropExpanded=!1,this.subscriptionService=d.a.isNativePlatform()?s:l}return i(n,[{key:"installedPuddlesNames",value:function(){}},{key:"upload",value:function(e){this.settingsService.loadFile(e.target.files[0])}},{key:"next",value:function(){return this.router.navigateByUrl("/edit")}},{key:"ngOnInit",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.currentUILanguage();case 2:e.UILanguage=n.sent,e.settingsService.setFirstTime(),e.installedPuddlesNames();case 5:case"end":return n.stop()}},n)}))()}},{key:"dropped",value:function(n){var t=this;this.files=n;var i,o=e(n);try{var r=function(){var e,n=i.value;n.fileEntry.isFile&&n.fileEntry.file((e=Object(u.a)(regeneratorRuntime.mark(function e(i){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n&&n.relativePath&&n.relativePath.toLowerCase().endsWith(".spml"),!e.t0){e.next=6;break}return e.next=4,t.presentLoading();case 4:return e.next=6,t.settingsService.loadFile(i);case 6:case"end":return e.stop()}},e)})),function(n){return e.apply(this,arguments)}))};for(o.s();!(i=o.n()).done;)r()}catch(a){o.e(a)}finally{o.f()}}},{key:"fileOver",value:function(e){return Object(u.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}))()}},{key:"fileLeave",value:function(e){}},{key:"clearSigns",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.alertController.create({header:e.translate.instant("Clear Signs!"),message:e.translate.instant("Do you <strong>really</strong> want to delete all the signs!!!"),buttons:[{text:e.translate.instant("No"),role:"cancel",cssClass:"secondary",handler:function(e){}},{text:e.translate.instant("Yes"),handler:function(){e.settingsService.removeAllSigns()}}]});case 2:return t=n.sent,n.next=5,t.present();case 5:case"end":return n.stop()}},n)}))()}},{key:"onLanguageChange",value:function(e){this.settingsService.setUILanguage(e.detail.value),this.UILanguage=e.detail.value}},{key:"currentUILanguage",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.settingsService.getUILanguage();case 2:if(n.t0=n.sent,n.t0){n.next=5;break}n.t0="en";case 5:return n.abrupt("return",n.t0);case 6:case"end":return n.stop()}},n)}))()}},{key:"downloadPuddle",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.showToast(e.translateService.instant("Downloading"),3e3);case 2:return n.next=4,e.showToast(e.translateService.instant("This may take a few minutes"),3e3);case 4:return n.next=6,e.presentLoading();case 6:e.xhrDownloadPuddle();case 7:case"end":return n.stop()}},n)}))()}},{key:"xhrDownloadPuddle",value:function(){var e,n=this;try{var t=0;t=parseInt(this.puddleID,10),isNaN(t)&&(t=4),this.httpService.GetPuddle(t.toString()).subscribe((e=Object(u.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.settingsService.loadPuddle(t.toString());case 3:return e.next=5,n.signsLoaded();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(n){return e.apply(this,arguments)}))}catch(i){console.log(i)}}},{key:"signsLoaded",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loading.dismiss();case 2:case"end":return n.stop()}},n)}))()}},{key:"onPuddleChange",value:function(e){this.puddleID=e.detail.value,this.downloadPuddle()}},{key:"showToast",value:function(e,n){var t=this;return Object(u.a)(regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.toastController.create({message:e,duration:n});case 2:i.sent.present();case 3:case"end":return i.stop()}},i)}))()}},{key:"expandItem",value:function(){this.spmldropExpanded=!this.spmldropExpanded}},{key:"presentLoading",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadingController.create({message:"Please wait...",backdropDismiss:!1});case 2:e.loading=n.sent,e.loading.present();case 4:case"end":return n.stop()}},n)}))()}},{key:"presentLoadingWithOptions",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){var t,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadingController.create({spinner:null,duration:5e3,message:"Click the backdrop to dismiss early...",translucent:!0,cssClass:"custom-class custom-loading",backdropDismiss:!0});case 2:return e.loading=n.sent,n.next=5,e.loading.present();case 5:return n.next=7,e.loading.onDidDismiss();case 7:t=n.sent,i=t.role,console.log("Loading dismissed with role:",i);case 10:case"end":return n.stop()}},n)}))()}}]),n}()).\u0275fac=function(e){return new(e||F)(g.Kb(b.a),g.Kb(c.a),g.Kb(h.d),g.Kb(c.O),g.Kb(h.d),g.Kb(p.a),g.Kb(v.a),g.Kb(c.H),g.Kb(s.g),g.Kb(f.a))},F.\u0275cmp=g.Eb({type:F,selectors:[["app-settings"]],decls:238,vars:28,consts:[["slot","start"],["padding","padding"],["interface","popover",3,"ngModel","ionChange","ngModelChange"],["value","ca"],["value","cs"],["value","de"],["value","en"],["value","eo"],["value","es"],["value","fr"],["value","ko"],["value","mt"],["value","nl"],["value","no"],["value","pl"],["value","pt"],["value","sl"],["value","zh"],[1,"hr-margin-bottom","hr-black"],["value","106"],["value","82"],["value","41"],["value","4"],["value","29"],["value","42"],["value","43"],["value","44"],["value","134"],["value","45"],["value","46"],["value","47"],["value","48"],["value","49"],["value","50"],["value","135"],["value","83"],["value","51"],["value","52"],["value","53"],["value","30"],["value","136"],["value","109"],["value","84"],["value","54"],["value","55"],["value","56"],["value","18"],["value","57"],["value","58"],["value","59"],["value","60"],["value","61"],["value","112"],["value","16"],["value","113"],["value","122"],["value","62"],["value","110"],["value","2"],["value","131"],["value","63"],["value","86"],["value","64"],["value","79"],["value","78"],["value","107"],["value","108"],["value","31"],["value","128"],["value","65"],["value","66"],["value","32"],["value","67"],["value","68"],["value","69"],["value","133"],["value","70"],["value","71"],["value","72"],["value","87"],["value","19"],["value","33"],["value","129"],["value","132"],["value","88"],["value","40"],["value","73"],["value","11"],["value","89"],["value","137"],["value","34"],["value","104"],["value","90"],["value","75"],["value","143"],["value","76"],["value","153"],["value","35"],["value","77"],["spmldropExpanded","",3,"click"],["height","200px;"],[1,"center"],[3,"dropZoneLabel","onFileDrop","onFileOver","onFileLeave"],["type","file",3,"change"],[3,"click"],["horizontal","end","slot","fixed","vertical","bottom"],["name","caret-forward-circle-outline",2,"zoom","2.0",3,"click"]],template:function(e,n){1&e&&(g.Nb(0,"ion-header"),g.Nb(1,"ion-toolbar"),g.Nb(2,"ion-buttons",0),g.Lb(3,"ion-menu-button"),g.Mb(),g.Nb(4,"ion-title"),g.pc(5),g.Yb(6,"translate"),g.Mb(),g.Mb(),g.Mb(),g.Nb(7,"ion-content",1),g.Nb(8,"ion-item"),g.Nb(9,"ion-label"),g.pc(10),g.Yb(11,"translate"),g.Mb(),g.Nb(12,"ion-select",2),g.Vb("ionChange",function(e){return n.onLanguageChange(e)})("ngModelChange",function(e){return n.UILanguage=e}),g.Nb(13,"ion-select-option",3),g.pc(14,"catal\xe0"),g.Mb(),g.Nb(15,"ion-select-option",4),g.pc(16,"\u010de\u0161tina"),g.Mb(),g.Nb(17,"ion-select-option",5),g.pc(18,"Deutsche"),g.Mb(),g.Nb(19,"ion-select-option",6),g.pc(20,"English"),g.Mb(),g.Nb(21,"ion-select-option",7),g.pc(22,"esperanto"),g.Mb(),g.Nb(23,"ion-select-option",8),g.pc(24,"espa\xf1ol"),g.Mb(),g.Nb(25,"ion-select-option",9),g.pc(26,"fran\xe7ais"),g.Mb(),g.Nb(27,"ion-select-option",10),g.pc(28,"\ud55c\uad6d\uc5b4"),g.Mb(),g.Nb(29,"ion-select-option",11),g.pc(30,"maltin"),g.Mb(),g.Nb(31,"ion-select-option",12),g.pc(32,"Nederlands"),g.Mb(),g.Nb(33,"ion-select-option",13),g.pc(34,"norsk"),g.Mb(),g.Nb(35,"ion-select-option",14),g.pc(36,"Polskie"),g.Mb(),g.Nb(37,"ion-select-option",15),g.pc(38,"portugu\xeas"),g.Mb(),g.Nb(39,"ion-select-option",16),g.pc(40,"Sloven\u0161\u010dina"),g.Mb(),g.Nb(41,"ion-select-option",17),g.pc(42,"\u4e2d\u6587"),g.Mb(),g.Mb(),g.Mb(),g.Lb(43,"hr",18),g.Nb(44,"ion-item"),g.Nb(45,"ion-label"),g.pc(46),g.Yb(47,"translate"),g.Mb(),g.Nb(48,"ion-select",2),g.Vb("ionChange",function(e){return n.onPuddleChange(e)})("ngModelChange",function(e){return n.puddleID=e}),g.Nb(49,"ion-select-option",19),g.pc(50,"Afghanistan"),g.Mb(),g.Nb(51,"ion-select-option",20),g.pc(52,"Albania"),g.Mb(),g.Nb(53,"ion-select-option",21),g.pc(54,"Argentina"),g.Mb(),g.Nb(55,"ion-select-option",22),g.pc(56,"ASL - USA & Canada"),g.Mb(),g.Nb(57,"ion-select-option",23),g.pc(58,"AT"),g.Mb(),g.Nb(59,"ion-select-option",24),g.pc(60,"Australia"),g.Mb(),g.Nb(61,"ion-select-option",25),g.pc(62,"French Belgium"),g.Mb(),g.Nb(63,"ion-select-option",26),g.pc(64,"Flanders, Belgium"),g.Mb(),g.Nb(65,"ion-select-option",27),g.pc(66,"Bulgaria"),g.Mb(),g.Nb(67,"ion-select-option",28),g.pc(68,"Bolivia"),g.Mb(),g.Nb(69,"ion-select-option",29),g.pc(70,"LIBRAS - Brazil"),g.Mb(),g.Nb(71,"ion-select-option",30),g.pc(72,"Quebec"),g.Mb(),g.Nb(73,"ion-select-option",31),g.pc(74,"German Switzerland"),g.Mb(),g.Nb(75,"ion-select-option",32),g.pc(76,"French-Switzerland"),g.Mb(),g.Nb(77,"ion-select-option",33),g.pc(78,"CH-it"),g.Mb(),g.Nb(79,"ion-select-option",34),g.pc(80,"Chile"),g.Mb(),g.Nb(81,"ion-select-option",35),g.pc(82,"China"),g.Mb(),g.Nb(83,"ion-select-option",36),g.pc(84,"Colombia"),g.Mb(),g.Nb(85,"ion-select-option",37),g.pc(86,"Czech Republic"),g.Mb(),g.Nb(87,"ion-select-option",38),g.pc(88,"Deutschland, Germany"),g.Mb(),g.Nb(89,"ion-select-option",39),g.pc(90,"Denmark"),g.Mb(),g.Nb(91,"ion-select-option",40),g.pc(92,"Ecuador"),g.Mb(),g.Nb(93,"ion-select-option",41),g.pc(94,"Estonia"),g.Mb(),g.Nb(95,"ion-select-option",42),g.pc(96,"Egypt"),g.Mb(),g.Nb(97,"ion-select-option",43),g.pc(98,"Vortaro"),g.Mb(),g.Nb(99,"ion-select-option",44),g.pc(100,"Espa\xf1a, Spain"),g.Mb(),g.Nb(101,"ion-select-option",45),g.pc(102,"Catalonia, Barcelona"),g.Mb(),g.Nb(103,"ion-select-option",46),g.pc(104,"Ethiopia"),g.Mb(),g.Nb(105,"ion-select-option",47),g.pc(106,"Finland"),g.Mb(),g.Nb(107,"ion-select-option",48),g.pc(108,"France"),g.Mb(),g.Nb(109,"ion-select-option",49),g.pc(110,"Great Britain"),g.Mb(),g.Nb(111,"ion-select-option",50),g.pc(112,"Northern Ireland"),g.Mb(),g.Nb(113,"ion-select-option",51),g.pc(114,"Greece"),g.Mb(),g.Nb(115,"ion-select-option",52),g.pc(116,"Guatemala"),g.Mb(),g.Nb(117,"ion-select-option",53),g.pc(118,"LESHO - Honduras"),g.Mb(),g.Nb(119,"ion-select-option",54),g.pc(120,"Haiti"),g.Mb(),g.Nb(121,"ion-select-option",55),g.pc(122,"Hungary"),g.Mb(),g.Nb(123,"ion-select-option",56),g.pc(124,"Ireland"),g.Mb(),g.Nb(125,"ion-select-option",57),g.pc(126,"Israel"),g.Mb(),g.Nb(127,"ion-select-option",58),g.pc(128,"India"),g.Mb(),g.Nb(129,"ion-select-option",59),g.pc(130,"IS"),g.Mb(),g.Nb(131,"ion-select-option",60),g.pc(132,"IT"),g.Mb(),g.Nb(133,"ion-select-option",61),g.pc(134,"Jordan"),g.Mb(),g.Nb(135,"ion-select-option",62),g.pc(136,"Japan"),g.Mb(),g.Nb(137,"ion-select-option",63),g.pc(138,"Kenya"),g.Mb(),g.Nb(139,"ion-select-option",64),g.pc(140,"Korea"),g.Mb(),g.Nb(141,"ion-select-option",65),g.pc(142,"Lithuania"),g.Mb(),g.Nb(143,"ion-select-option",66),g.pc(144,"Latvia"),g.Mb(),g.Nb(145,"ion-select-option",58),g.pc(146,"Myanmar"),g.Mb(),g.Nb(147,"ion-select-option",67),g.pc(148,"Malta"),g.Mb(),g.Nb(149,"ion-select-option",68),g.pc(150,"Malawi"),g.Mb(),g.Nb(151,"ion-select-option",69),g.pc(152,"Malawi Mexico"),g.Mb(),g.Nb(153,"ion-select-option",70),g.pc(154,"Malaysia"),g.Mb(),g.Nb(155,"ion-select-option",71),g.pc(156,"Nigeria"),g.Mb(),g.Nb(157,"ion-select-option",72),g.pc(158,"Nicaragua"),g.Mb(),g.Nb(159,"ion-select-option",73),g.pc(160,"NL"),g.Mb(),g.Nb(161,"ion-select-option",74),g.pc(162,"Norge, Norway"),g.Mb(),g.Nb(163,"ion-select-option",75),g.pc(164,"Nepal"),g.Mb(),g.Nb(165,"ion-select-option",76),g.pc(166,"New Zealand"),g.Mb(),g.Nb(167,"ion-select-option",77),g.pc(168,"Diccionario Peru"),g.Mb(),g.Nb(169,"ion-select-option",78),g.pc(170,"Philippines"),g.Mb(),g.Nb(171,"ion-select-option",79),g.pc(172,"Pakistan"),g.Mb(),g.Nb(173,"ion-select-option",80),g.pc(174,"Poland"),g.Mb(),g.Nb(175,"ion-select-option",81),g.pc(176,"Portugal"),g.Mb(),g.Nb(177,"ion-select-option",82),g.pc(178,"Paraguay"),g.Mb(),g.Nb(179,"ion-select-option",83),g.pc(180,"Romania"),g.Mb(),g.Nb(181,"ion-select-option",84),g.pc(182,"Russia"),g.Mb(),g.Nb(183,"ion-select-option",85),g.pc(184,"Kingdom Saudi Arabia"),g.Mb(),g.Nb(185,"ion-select-option",86),g.pc(186,"Sverige"),g.Mb(),g.Nb(187,"ion-select-option",87),g.pc(188,"SgSL Singapore Sign Language"),g.Mb(),g.Nb(189,"ion-select-option",88),g.pc(190,"Slovakia"),g.Mb(),g.Nb(191,"ion-select-option",86),g.pc(192,"Sverige"),g.Mb(),g.Nb(193,"ion-select-option",89),g.pc(194,"El Salvador"),g.Mb(),g.Nb(195,"ion-select-option",90),g.pc(196,"Thailand"),g.Mb(),g.Nb(197,"ion-select-option",91),g.pc(198,"Tunisia"),g.Mb(),g.Nb(199,"ion-select-option",92),g.pc(200,"Turkey"),g.Mb(),g.Nb(201,"ion-select-option",93),g.pc(202,"Taiwan"),g.Mb(),g.Nb(203,"ion-select-option",94),g.pc(204,"Uruguay"),g.Mb(),g.Nb(205,"ion-select-option",95),g.pc(206,"Venezuela"),g.Mb(),g.Nb(207,"ion-select-option",96),g.pc(208,"Vietnam"),g.Mb(),g.Nb(209,"ion-select-option",97),g.pc(210),g.Yb(211,"translate"),g.Mb(),g.Nb(212,"ion-select-option",98),g.pc(213,"South Africa"),g.Mb(),g.Mb(),g.Mb(),g.Lb(214,"hr",18),g.Nb(215,"ion-list"),g.Nb(216,"ion-list-header",99),g.Vb("click",function(){return n.expandItem()}),g.Nb(217,"ion-label"),g.pc(218),g.Yb(219,"translate"),g.Mb(),g.Mb(),g.Nb(220,"ion-item",100),g.Nb(221,"div",101),g.Nb(222,"ngx-file-drop",102),g.Vb("onFileDrop",function(e){return n.dropped(e)})("onFileOver",function(e){return n.fileOver(e)})("onFileLeave",function(e){return n.fileLeave(e)}),g.Yb(223,"translate"),g.Mb(),g.Nb(224,"input",103),g.Vb("change",function(e){return n.upload(e)}),g.Mb(),g.Mb(),g.Mb(),g.Lb(225,"hr",18),g.Mb(),g.Nb(226,"ion-item"),g.Nb(227,"div"),g.Nb(228,"ion-button",104),g.Vb("click",function(){return n.clearSigns()}),g.pc(229),g.Yb(230,"translate"),g.Mb(),g.Mb(),g.Mb(),g.Lb(231,"hr",18),g.Nb(232,"ion-fab",105),g.Nb(233,"ion-label"),g.pc(234),g.Yb(235,"translate"),g.Mb(),g.Nb(236,"ion-fab-button"),g.Nb(237,"ion-icon",106),g.Vb("click",function(){return n.next()}),g.Mb(),g.Mb(),g.Mb(),g.Mb()),2&e&&(g.Ab(5),g.qc(g.Zb(6,12,"Settings")),g.Ab(5),g.qc(g.Zb(11,14,"UI Language")),g.Ab(2),g.cc("ngModel",n.UILanguage),g.Ab(34),g.qc(g.Zb(47,16,"Install Signs from SignLanguage Puddle")),g.Ab(2),g.cc("ngModel",n.puddleID),g.Ab(162),g.qc(g.Zb(211,18,"Signs Used Worldwide")),g.Ab(8),g.qc(g.Zb(219,20,"Install with SPML File")),g.Ab(2),g.Cb("collapsed",!n.spmldropExpanded),g.Ab(2),g.dc("dropZoneLabel",g.Zb(223,22,"Drop SPML file here to add signs")),g.Ab(7),g.rc(" ",g.Zb(230,24,"Clear All Signs")," "),g.Ab(5),g.qc(g.Zb(235,26,"Next")))},directives:[c.l,c.E,c.e,c.s,c.D,c.g,c.n,c.o,c.z,c.M,l.d,l.e,c.A,c.p,c.q,R,c.d,c.h,c.i,c.m],pipes:[h.c],styles:[".hr-margin-bottom[_ngcontent-%COMP%]{margin-bottom:16px}.hr-black[_ngcontent-%COMP%]{border:0;clear:both;display:block;width:96%;background-color:#000;height:1px}.collapsed[_ngcontent-%COMP%]{height:0!important}"]}),F),z=r("PCNd"),j=[{path:"",component:Z}],K=((P=function e(){o(this,e)}).\u0275fac=function(e){return new(e||P)},P.\u0275mod=g.Ib({type:P}),P.\u0275inj=g.Hb({imports:[[a.c,l.a,c.F,s.j.forChild(j),B,z.a]]}),P)}}])}();