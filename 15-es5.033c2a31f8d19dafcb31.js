!function(){function e(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return l=e.done,e},e:function(e){s=!0,a=e},f:function(){try{l||null==i.return||i.return()}finally{if(s)throw a}}}}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function t(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7wo0":function(n,t,r){"use strict";r.r(t),r.d(t,"SettingsPageModule",function(){return Z});var a=r("ofXK"),l=r("3Pt+"),s=r("tyNb"),c=r("TEn/"),u=r("HaE+"),p=r("HtUY"),b=r("O+7k"),d=r("tk/3"),v=r("fXoL"),f=r("sYmb"),g=r("HDdC"),h=r("D0XW"),m=r("DH7j");function N(e){return!Object(m.a)(e)&&e-parseFloat(e)+1>=0}var M=r("z+Ro");function y(e){var n=e.index,t=e.period,i=e.subscriber;if(i.next(n),!i.closed){if(-1===t)return i.complete();e.index=n+1,this.schedule(e,t)}}var w=["fileSelector"];function k(e,n){if(1&e&&(v.Nb(0,"div",8),v.pc(1),v.Mb()),2&e){var t=v.Xb(2);v.Ab(1),v.qc(t.dropZoneLabel)}}function x(e,n){if(1&e){var t=v.Ob();v.Nb(0,"div"),v.Nb(1,"input",9),v.Vb("click",function(e){return v.ic(t),v.Xb(2).openFileSelector(e)}),v.Mb(),v.Mb()}if(2&e){var i=v.Xb(2);v.Ab(1),v.dc("value",i.browseBtnLabel),v.cc("className",i.browseBtnClassName)}}function S(e,n){if(1&e&&(v.nc(0,k,2,1,"div",6),v.nc(1,x,2,2,"div",7)),2&e){var t=v.Xb();v.cc("ngIf",t.dropZoneLabel),v.Ab(1),v.cc("ngIf",t.showBrowseBtn)}}function D(e,n){}var C,E,L,F,O,I=function(e){return{openFileSelector:e}},P=function e(n,t){o(this,e),this.relativePath=n,this.fileEntry=t},A=((F=function e(n){o(this,e),this.template=n}).\u0275fac=function(e){return new(e||F)(v.Kb(v.M))},F.\u0275dir=v.Fb({type:F,selectors:[["","ngx-file-drop-content-tmp",""]]}),F),T=((L=function(){function e(n,t){var i=this;o(this,e),this.zone=n,this.renderer=t,this.accept="*",this.directory=!1,this.multiple=!0,this.dropZoneLabel="",this.dropZoneClassName="ngx-file-drop__drop-zone",this.contentClassName="ngx-file-drop__content",this.showBrowseBtn=!1,this.browseBtnClassName="btn btn-primary btn-xs ngx-file-drop__browse-btn",this.browseBtnLabel="Browse files",this.onFileDrop=new v.o,this.onFileOver=new v.o,this.onFileLeave=new v.o,this.isDraggingOverDropZone=!1,this.globalDraggingInProgress=!1,this.files=[],this.numOfActiveReadEntries=0,this.helperFormEl=null,this.fileInputPlaceholderEl=null,this.dropEventTimerSubscription=null,this._disabled=!1,this.openFileSelector=function(e){i.fileSelector&&i.fileSelector.nativeElement&&i.fileSelector.nativeElement.click()},this.globalDragStartListener=this.renderer.listen("document","dragstart",function(e){i.globalDraggingInProgress=!0}),this.globalDragEndListener=this.renderer.listen("document","dragend",function(e){i.globalDraggingInProgress=!1})}return i(e,[{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=null!=e&&"false"!="".concat(e)}},{key:"ngOnDestroy",value:function(){this.dropEventTimerSubscription&&(this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=null),this.globalDragStartListener(),this.globalDragEndListener(),this.files=[],this.helperFormEl=null,this.fileInputPlaceholderEl=null}},{key:"onDragOver",value:function(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone||(this.isDraggingOverDropZone=!0,this.onFileOver.emit(e)),this.preventAndStop(e))}},{key:"onDragLeave",value:function(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone&&(this.isDraggingOverDropZone=!1,this.onFileLeave.emit(e)),this.preventAndStop(e))}},{key:"dropFiles",value:function(e){var n;!this.isDropzoneDisabled()&&(this.isDraggingOverDropZone=!1,e.dataTransfer)&&(e.dataTransfer.dropEffect="copy",n=e.dataTransfer.items?e.dataTransfer.items:e.dataTransfer.files,this.preventAndStop(e),this.checkFiles(n))}},{key:"uploadFiles",value:function(e){!this.isDropzoneDisabled()&&e.target&&(this.checkFiles(e.target.files||[]),this.resetFileInput())}},{key:"checkFiles",value:function(e){for(var n=this,t=function(t){var i=e[t],o=null;if(n.canGetAsEntry(i)&&(o=i.webkitGetAsEntry()),o)if(o.isFile){var r=new P(o.name,o);n.addToQueue(r)}else o.isDirectory&&n.traverseFileTree(o,o.name);else if(i){var a={name:i.name,isDirectory:!1,isFile:!0,file:function(e){e(i)}},l=new P(a.name,a);n.addToQueue(l)}},i=0;i<e.length;i++)t(i);this.dropEventTimerSubscription&&this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,i=-1;return N(n)?i=Number(n)<1?1:Number(n):Object(M.a)(n)&&(t=n),Object(M.a)(t)||(t=h.a),new g.a(function(n){var o=N(e)?e:+e-t.now();return t.schedule(y,o,{index:0,period:i,subscriber:n})})}(200,200).subscribe(function(){if(n.files.length>0&&0===n.numOfActiveReadEntries){var e=n.files;n.files=[],n.onFileDrop.emit(e)}})}},{key:"traverseFileTree",value:function(e,n){var t=this;if(e.isFile){var i=new P(n,e);this.files.push(i)}else{n+="/";var o=e.createReader(),r=[];!function i(){t.numOfActiveReadEntries++,o.readEntries(function(o){if(o.length)r=r.concat(o),i();else if(0===r.length){var a=new P(n,e);t.zone.run(function(){t.addToQueue(a)})}else for(var l=function(e){t.zone.run(function(){t.traverseFileTree(r[e],n+r[e].name)})},s=0;s<r.length;s++)l(s);t.numOfActiveReadEntries--})}()}}},{key:"resetFileInput",value:function(){if(this.fileSelector&&this.fileSelector.nativeElement){var e=this.fileSelector.nativeElement,n=e.parentElement,t=this.getHelperFormElement(),i=this.getFileInputPlaceholderElement();n!==t&&(this.renderer.insertBefore(n,i,e),this.renderer.appendChild(t,e),t.reset(),this.renderer.insertBefore(n,e,i),this.renderer.removeChild(n,i))}}},{key:"getHelperFormElement",value:function(){return this.helperFormEl||(this.helperFormEl=this.renderer.createElement("form")),this.helperFormEl}},{key:"getFileInputPlaceholderElement",value:function(){return this.fileInputPlaceholderEl||(this.fileInputPlaceholderEl=this.renderer.createElement("div")),this.fileInputPlaceholderEl}},{key:"canGetAsEntry",value:function(e){return!!e.webkitGetAsEntry}},{key:"isDropzoneDisabled",value:function(){return this.globalDraggingInProgress||this.disabled}},{key:"addToQueue",value:function(e){this.files.push(e)}},{key:"preventAndStop",value:function(e){e.stopPropagation(),e.preventDefault()}}]),e}()).\u0275fac=function(e){return new(e||L)(v.Kb(v.B),v.Kb(v.F))},L.\u0275cmp=v.Eb({type:L,selectors:[["ngx-file-drop"]],contentQueries:function(e,n,t){var i;1&e&&v.Db(t,A,1,v.M),2&e&&v.gc(i=v.Wb())&&(n.contentTemplate=i.first)},viewQuery:function(e,n){var t;1&e&&v.tc(w,3),2&e&&v.gc(t=v.Wb())&&(n.fileSelector=t.first)},inputs:{accept:"accept",directory:"directory",multiple:"multiple",dropZoneLabel:"dropZoneLabel",dropZoneClassName:"dropZoneClassName",contentClassName:"contentClassName",showBrowseBtn:"showBrowseBtn",browseBtnClassName:"browseBtnClassName",browseBtnLabel:"browseBtnLabel",disabled:"disabled"},outputs:{onFileDrop:"onFileDrop",onFileOver:"onFileOver",onFileLeave:"onFileLeave"},decls:7,vars:15,consts:[[3,"className","drop","dragover","dragleave"],[3,"className"],["type","file",1,"ngx-file-drop__file-input",3,"accept","multiple","change"],["fileSelector",""],["defaultContentTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ngx-file-drop__drop-zone-label",4,"ngIf"],[4,"ngIf"],[1,"ngx-file-drop__drop-zone-label"],["type","button",3,"className","value","click"]],template:function(e,n){if(1&e&&(v.Nb(0,"div",0),v.Vb("drop",function(e){return n.dropFiles(e)})("dragover",function(e){return n.onDragOver(e)})("dragleave",function(e){return n.onDragLeave(e)}),v.Nb(1,"div",1),v.Nb(2,"input",2,3),v.Vb("change",function(e){return n.uploadFiles(e)}),v.Mb(),v.nc(4,S,2,2,"ng-template",null,4,v.oc),v.nc(6,D,0,0,"ng-template",5),v.Mb(),v.Mb()),2&e){var t=v.hc(5);v.Cb("ngx-file-drop__drop-zone--over",n.isDraggingOverDropZone),v.cc("className",n.dropZoneClassName),v.Ab(1),v.cc("className",n.contentClassName),v.Ab(1),v.cc("accept",n.accept)("multiple",n.multiple),v.Bb("directory",n.directory||void 0)("webkitdirectory",n.directory||void 0)("mozdirectory",n.directory||void 0)("msdirectory",n.directory||void 0)("odirectory",n.directory||void 0),v.Ab(4),v.cc("ngTemplateOutlet",n.contentTemplate||t)("ngTemplateOutletContext",v.fc(13,I,n.openFileSelector))}},directives:[a.l,a.k],styles:[".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:rgba(147,147,147,.5)}.ngx-file-drop__content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]}),L),_=((E=function e(){o(this,e)}).\u0275fac=function(e){return new(e||E)},E.\u0275mod=v.Ib({type:E,bootstrap:function(){return[T]}}),E.\u0275inj=v.Hb({providers:[],imports:[[a.c]]}),E),R=((C=function(){function n(e,t,i,r,a,l,s,c,u){o(this,n),this.settingsService=e,this.alertController=t,this.translate=i,this.toastController=r,this.translateService=a,this.subscriptionService=l,this.loadingController=s,this.router=c,this.http=u,this.files=[],this.serverUrl="https://swsignwriterapi.azurewebsites.net/",this.spmldropExpanded=!1}return i(n,[{key:"installedPuddlesNames",value:function(){}},{key:"upload",value:function(e){this.settingsService.loadFile(e.target.files[0])}},{key:"next",value:function(){return this.router.navigateByUrl("/edit")}},{key:"ngOnInit",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.subscriptionService.CanUse(),n.next=3,e.currentUILanguage();case 3:e.UILanguage=n.sent,e.settingsService.setFirstTime(),e.installedPuddlesNames();case 6:case"end":return n.stop()}},n)}))()}},{key:"dropped",value:function(n){var t=this;this.files=n;var i,o=e(n);try{var r=function(){var e,n=i.value;n.fileEntry.isFile&&n.fileEntry.file((e=Object(u.a)(regeneratorRuntime.mark(function e(i){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n&&n.relativePath&&n.relativePath.toLowerCase().endsWith(".spml"),!e.t0){e.next=6;break}return e.next=4,t.presentLoading();case 4:return e.next=6,t.settingsService.loadFile(i);case 6:case"end":return e.stop()}},e)})),function(n){return e.apply(this,arguments)}))};for(o.s();!(i=o.n()).done;)r()}catch(a){o.e(a)}finally{o.f()}}},{key:"fileOver",value:function(e){return Object(u.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}))()}},{key:"fileLeave",value:function(e){}},{key:"clearSigns",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.alertController.create({header:e.translate.instant("Clear Signs!"),message:e.translate.instant("Do you <strong>really</strong> want to delete all the signs!!!"),buttons:[{text:e.translate.instant("No"),role:"cancel",cssClass:"secondary",handler:function(e){}},{text:e.translate.instant("Yes"),handler:function(){e.settingsService.removeAllSigns()}}]});case 2:return t=n.sent,n.next=5,t.present();case 5:case"end":return n.stop()}},n)}))()}},{key:"onLanguageChange",value:function(e){this.settingsService.setUILanguage(e.detail.value),this.UILanguage=e.detail.value}},{key:"currentUILanguage",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.settingsService.getUILanguage();case 2:if(n.t0=n.sent,n.t0){n.next=5;break}n.t0="en";case 5:return n.abrupt("return",n.t0);case 6:case"end":return n.stop()}},n)}))()}},{key:"downloadPuddle",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.showToast(e.translateService.instant("Downloading"),3e3);case 2:return n.next=4,e.showToast(e.translateService.instant("This may take a few minutes"),3e3);case 4:return n.next=6,e.presentLoading();case 6:e.xhrDownloadPuddle();case 7:case"end":return n.stop()}},n)}))()}},{key:"xhrDownloadPuddle",value:function(){var e,n=this;try{var t=0;t=parseInt(this.puddleID,10),isNaN(t)&&(t=4);var i={params:(new d.d).append("UI","1").append("sign",t.toString())};this.http.post(this.serverUrl+"api/Puddle/GetPuddle",{},i).subscribe((e=Object(u.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("response",t),e.prev=1,e.next=4,n.settingsService.loadPuddle(t.toString());case 4:return e.next=6,n.signsLoaded();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])})),function(n){return e.apply(this,arguments)}))}catch(o){console.log(o)}}},{key:"signsLoaded",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loading.dismiss();case 2:case"end":return n.stop()}},n)}))()}},{key:"onPuddleChange",value:function(e){this.puddleID=e.detail.value,this.downloadPuddle()}},{key:"showToast",value:function(e,n){var t=this;return Object(u.a)(regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.toastController.create({message:e,duration:n});case 2:i.sent.present();case 3:case"end":return i.stop()}},i)}))()}},{key:"expandItem",value:function(){this.spmldropExpanded=!this.spmldropExpanded}},{key:"presentLoading",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadingController.create({message:"Please wait...",backdropDismiss:!1});case 2:e.loading=n.sent,e.loading.present();case 4:case"end":return n.stop()}},n)}))()}},{key:"presentLoadingWithOptions",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function n(){var t,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadingController.create({spinner:null,duration:5e3,message:"Click the backdrop to dismiss early...",translucent:!0,cssClass:"custom-class custom-loading",backdropDismiss:!0});case 2:return e.loading=n.sent,n.next=5,e.loading.present();case 5:return n.next=7,e.loading.onDidDismiss();case 7:t=n.sent,i=t.role,console.log("Loading dismissed with role:",i);case 10:case"end":return n.stop()}},n)}))()}}]),n}()).\u0275fac=function(e){return new(e||C)(v.Kb(b.a),v.Kb(c.a),v.Kb(f.d),v.Kb(c.O),v.Kb(f.d),v.Kb(p.a),v.Kb(c.H),v.Kb(s.g),v.Kb(d.a))},C.\u0275cmp=v.Eb({type:C,selectors:[["app-settings"]],decls:238,vars:28,consts:[["slot","start"],["padding","padding"],["interface","popover",3,"ngModel","ionChange","ngModelChange"],["value","ca"],["value","cs"],["value","de"],["value","en"],["value","eo"],["value","es"],["value","fr"],["value","ko"],["value","mt"],["value","nl"],["value","no"],["value","pl"],["value","pt"],["value","sl"],["value","zh"],[1,"hr-margin-bottom","hr-black"],["value","106"],["value","82"],["value","41"],["value","4"],["value","29"],["value","42"],["value","43"],["value","44"],["value","134"],["value","45"],["value","46"],["value","47"],["value","48"],["value","49"],["value","50"],["value","135"],["value","83"],["value","51"],["value","52"],["value","53"],["value","30"],["value","136"],["value","109"],["value","84"],["value","54"],["value","55"],["value","56"],["value","18"],["value","57"],["value","58"],["value","59"],["value","60"],["value","61"],["value","112"],["value","16"],["value","113"],["value","122"],["value","62"],["value","110"],["value","2"],["value","131"],["value","63"],["value","86"],["value","64"],["value","79"],["value","78"],["value","107"],["value","108"],["value","31"],["value","128"],["value","65"],["value","66"],["value","32"],["value","67"],["value","68"],["value","69"],["value","133"],["value","70"],["value","71"],["value","72"],["value","87"],["value","19"],["value","33"],["value","129"],["value","132"],["value","88"],["value","40"],["value","73"],["value","11"],["value","89"],["value","137"],["value","34"],["value","104"],["value","90"],["value","75"],["value","143"],["value","76"],["value","153"],["value","35"],["value","77"],["spmldropExpanded","",3,"click"],["height","200px;"],[1,"center"],[3,"dropZoneLabel","onFileDrop","onFileOver","onFileLeave"],["type","file",3,"change"],[3,"click"],["horizontal","end","slot","fixed","vertical","bottom"],["name","caret-forward-circle-outline",2,"zoom","2.0",3,"click"]],template:function(e,n){1&e&&(v.Nb(0,"ion-header"),v.Nb(1,"ion-toolbar"),v.Nb(2,"ion-buttons",0),v.Lb(3,"ion-menu-button"),v.Mb(),v.Nb(4,"ion-title"),v.pc(5),v.Yb(6,"translate"),v.Mb(),v.Mb(),v.Mb(),v.Nb(7,"ion-content",1),v.Nb(8,"ion-item"),v.Nb(9,"ion-label"),v.pc(10),v.Yb(11,"translate"),v.Mb(),v.Nb(12,"ion-select",2),v.Vb("ionChange",function(e){return n.onLanguageChange(e)})("ngModelChange",function(e){return n.UILanguage=e}),v.Nb(13,"ion-select-option",3),v.pc(14,"catal\xe0"),v.Mb(),v.Nb(15,"ion-select-option",4),v.pc(16,"\u010de\u0161tina"),v.Mb(),v.Nb(17,"ion-select-option",5),v.pc(18,"Deutsche"),v.Mb(),v.Nb(19,"ion-select-option",6),v.pc(20,"English"),v.Mb(),v.Nb(21,"ion-select-option",7),v.pc(22,"esperanto"),v.Mb(),v.Nb(23,"ion-select-option",8),v.pc(24,"espa\xf1ol"),v.Mb(),v.Nb(25,"ion-select-option",9),v.pc(26,"fran\xe7ais"),v.Mb(),v.Nb(27,"ion-select-option",10),v.pc(28,"\ud55c\uad6d\uc5b4"),v.Mb(),v.Nb(29,"ion-select-option",11),v.pc(30,"maltin"),v.Mb(),v.Nb(31,"ion-select-option",12),v.pc(32,"Nederlands"),v.Mb(),v.Nb(33,"ion-select-option",13),v.pc(34,"norsk"),v.Mb(),v.Nb(35,"ion-select-option",14),v.pc(36,"Polskie"),v.Mb(),v.Nb(37,"ion-select-option",15),v.pc(38,"portugu\xeas"),v.Mb(),v.Nb(39,"ion-select-option",16),v.pc(40,"Sloven\u0161\u010dina"),v.Mb(),v.Nb(41,"ion-select-option",17),v.pc(42,"\u4e2d\u6587"),v.Mb(),v.Mb(),v.Mb(),v.Lb(43,"hr",18),v.Nb(44,"ion-item"),v.Nb(45,"ion-label"),v.pc(46),v.Yb(47,"translate"),v.Mb(),v.Nb(48,"ion-select",2),v.Vb("ionChange",function(e){return n.onPuddleChange(e)})("ngModelChange",function(e){return n.puddleID=e}),v.Nb(49,"ion-select-option",19),v.pc(50,"Afghanistan"),v.Mb(),v.Nb(51,"ion-select-option",20),v.pc(52,"Albania"),v.Mb(),v.Nb(53,"ion-select-option",21),v.pc(54,"Argentina"),v.Mb(),v.Nb(55,"ion-select-option",22),v.pc(56,"ASL - USA & Canada"),v.Mb(),v.Nb(57,"ion-select-option",23),v.pc(58,"AT"),v.Mb(),v.Nb(59,"ion-select-option",24),v.pc(60,"Australia"),v.Mb(),v.Nb(61,"ion-select-option",25),v.pc(62,"French Belgium"),v.Mb(),v.Nb(63,"ion-select-option",26),v.pc(64,"Flanders, Belgium"),v.Mb(),v.Nb(65,"ion-select-option",27),v.pc(66,"Bulgaria"),v.Mb(),v.Nb(67,"ion-select-option",28),v.pc(68,"Bolivia"),v.Mb(),v.Nb(69,"ion-select-option",29),v.pc(70,"LIBRAS - Brazil"),v.Mb(),v.Nb(71,"ion-select-option",30),v.pc(72,"Quebec"),v.Mb(),v.Nb(73,"ion-select-option",31),v.pc(74,"German Switzerland"),v.Mb(),v.Nb(75,"ion-select-option",32),v.pc(76,"French-Switzerland"),v.Mb(),v.Nb(77,"ion-select-option",33),v.pc(78,"CH-it"),v.Mb(),v.Nb(79,"ion-select-option",34),v.pc(80,"Chile"),v.Mb(),v.Nb(81,"ion-select-option",35),v.pc(82,"China"),v.Mb(),v.Nb(83,"ion-select-option",36),v.pc(84,"Colombia"),v.Mb(),v.Nb(85,"ion-select-option",37),v.pc(86,"Czech Republic"),v.Mb(),v.Nb(87,"ion-select-option",38),v.pc(88,"Deutschland, Germany"),v.Mb(),v.Nb(89,"ion-select-option",39),v.pc(90,"Denmark"),v.Mb(),v.Nb(91,"ion-select-option",40),v.pc(92,"Ecuador"),v.Mb(),v.Nb(93,"ion-select-option",41),v.pc(94,"Estonia"),v.Mb(),v.Nb(95,"ion-select-option",42),v.pc(96,"Egypt"),v.Mb(),v.Nb(97,"ion-select-option",43),v.pc(98,"Vortaro"),v.Mb(),v.Nb(99,"ion-select-option",44),v.pc(100,"Espa\xf1a, Spain"),v.Mb(),v.Nb(101,"ion-select-option",45),v.pc(102,"Catalonia, Barcelona"),v.Mb(),v.Nb(103,"ion-select-option",46),v.pc(104,"Ethiopia"),v.Mb(),v.Nb(105,"ion-select-option",47),v.pc(106,"Finland"),v.Mb(),v.Nb(107,"ion-select-option",48),v.pc(108,"France"),v.Mb(),v.Nb(109,"ion-select-option",49),v.pc(110,"Great Britain"),v.Mb(),v.Nb(111,"ion-select-option",50),v.pc(112,"Northern Ireland"),v.Mb(),v.Nb(113,"ion-select-option",51),v.pc(114,"Greece"),v.Mb(),v.Nb(115,"ion-select-option",52),v.pc(116,"Guatemala"),v.Mb(),v.Nb(117,"ion-select-option",53),v.pc(118,"LESHO - Honduras"),v.Mb(),v.Nb(119,"ion-select-option",54),v.pc(120,"Haiti"),v.Mb(),v.Nb(121,"ion-select-option",55),v.pc(122,"Hungary"),v.Mb(),v.Nb(123,"ion-select-option",56),v.pc(124,"Ireland"),v.Mb(),v.Nb(125,"ion-select-option",57),v.pc(126,"Israel"),v.Mb(),v.Nb(127,"ion-select-option",58),v.pc(128,"India"),v.Mb(),v.Nb(129,"ion-select-option",59),v.pc(130,"IS"),v.Mb(),v.Nb(131,"ion-select-option",60),v.pc(132,"IT"),v.Mb(),v.Nb(133,"ion-select-option",61),v.pc(134,"Jordan"),v.Mb(),v.Nb(135,"ion-select-option",62),v.pc(136,"Japan"),v.Mb(),v.Nb(137,"ion-select-option",63),v.pc(138,"Kenya"),v.Mb(),v.Nb(139,"ion-select-option",64),v.pc(140,"Korea"),v.Mb(),v.Nb(141,"ion-select-option",65),v.pc(142,"Lithuania"),v.Mb(),v.Nb(143,"ion-select-option",66),v.pc(144,"Latvia"),v.Mb(),v.Nb(145,"ion-select-option",58),v.pc(146,"Myanmar"),v.Mb(),v.Nb(147,"ion-select-option",67),v.pc(148,"Malta"),v.Mb(),v.Nb(149,"ion-select-option",68),v.pc(150,"Malawi"),v.Mb(),v.Nb(151,"ion-select-option",69),v.pc(152,"Malawi Mexico"),v.Mb(),v.Nb(153,"ion-select-option",70),v.pc(154,"Malaysia"),v.Mb(),v.Nb(155,"ion-select-option",71),v.pc(156,"Nigeria"),v.Mb(),v.Nb(157,"ion-select-option",72),v.pc(158,"Nicaragua"),v.Mb(),v.Nb(159,"ion-select-option",73),v.pc(160,"NL"),v.Mb(),v.Nb(161,"ion-select-option",74),v.pc(162,"Norge, Norway"),v.Mb(),v.Nb(163,"ion-select-option",75),v.pc(164,"Nepal"),v.Mb(),v.Nb(165,"ion-select-option",76),v.pc(166,"New Zealand"),v.Mb(),v.Nb(167,"ion-select-option",77),v.pc(168,"Diccionario Peru"),v.Mb(),v.Nb(169,"ion-select-option",78),v.pc(170,"Philippines"),v.Mb(),v.Nb(171,"ion-select-option",79),v.pc(172,"Pakistan"),v.Mb(),v.Nb(173,"ion-select-option",80),v.pc(174,"Poland"),v.Mb(),v.Nb(175,"ion-select-option",81),v.pc(176,"Portugal"),v.Mb(),v.Nb(177,"ion-select-option",82),v.pc(178,"Paraguay"),v.Mb(),v.Nb(179,"ion-select-option",83),v.pc(180,"Romania"),v.Mb(),v.Nb(181,"ion-select-option",84),v.pc(182,"Russia"),v.Mb(),v.Nb(183,"ion-select-option",85),v.pc(184,"Kingdom Saudi Arabia"),v.Mb(),v.Nb(185,"ion-select-option",86),v.pc(186,"Sverige"),v.Mb(),v.Nb(187,"ion-select-option",87),v.pc(188,"SgSL Singapore Sign Language"),v.Mb(),v.Nb(189,"ion-select-option",88),v.pc(190,"Slovakia"),v.Mb(),v.Nb(191,"ion-select-option",86),v.pc(192,"Sverige"),v.Mb(),v.Nb(193,"ion-select-option",89),v.pc(194,"El Salvador"),v.Mb(),v.Nb(195,"ion-select-option",90),v.pc(196,"Thailand"),v.Mb(),v.Nb(197,"ion-select-option",91),v.pc(198,"Tunisia"),v.Mb(),v.Nb(199,"ion-select-option",92),v.pc(200,"Turkey"),v.Mb(),v.Nb(201,"ion-select-option",93),v.pc(202,"Taiwan"),v.Mb(),v.Nb(203,"ion-select-option",94),v.pc(204,"Uruguay"),v.Mb(),v.Nb(205,"ion-select-option",95),v.pc(206,"Venezuela"),v.Mb(),v.Nb(207,"ion-select-option",96),v.pc(208,"Vietnam"),v.Mb(),v.Nb(209,"ion-select-option",97),v.pc(210),v.Yb(211,"translate"),v.Mb(),v.Nb(212,"ion-select-option",98),v.pc(213,"South Africa"),v.Mb(),v.Mb(),v.Mb(),v.Lb(214,"hr",18),v.Nb(215,"ion-list"),v.Nb(216,"ion-list-header",99),v.Vb("click",function(){return n.expandItem()}),v.Nb(217,"ion-label"),v.pc(218),v.Yb(219,"translate"),v.Mb(),v.Mb(),v.Nb(220,"ion-item",100),v.Nb(221,"div",101),v.Nb(222,"ngx-file-drop",102),v.Vb("onFileDrop",function(e){return n.dropped(e)})("onFileOver",function(e){return n.fileOver(e)})("onFileLeave",function(e){return n.fileLeave(e)}),v.Yb(223,"translate"),v.Mb(),v.Nb(224,"input",103),v.Vb("change",function(e){return n.upload(e)}),v.Mb(),v.Mb(),v.Mb(),v.Lb(225,"hr",18),v.Mb(),v.Nb(226,"ion-item"),v.Nb(227,"div"),v.Nb(228,"ion-button",104),v.Vb("click",function(){return n.clearSigns()}),v.pc(229),v.Yb(230,"translate"),v.Mb(),v.Mb(),v.Mb(),v.Lb(231,"hr",18),v.Nb(232,"ion-fab",105),v.Nb(233,"ion-label"),v.pc(234),v.Yb(235,"translate"),v.Mb(),v.Nb(236,"ion-fab-button"),v.Nb(237,"ion-icon",106),v.Vb("click",function(){return n.next()}),v.Mb(),v.Mb(),v.Mb(),v.Mb()),2&e&&(v.Ab(5),v.qc(v.Zb(6,12,"Settings")),v.Ab(5),v.qc(v.Zb(11,14,"UI Language")),v.Ab(2),v.cc("ngModel",n.UILanguage),v.Ab(34),v.qc(v.Zb(47,16,"Install Signs from SignLanguage Puddle")),v.Ab(2),v.cc("ngModel",n.puddleID),v.Ab(162),v.qc(v.Zb(211,18,"Signs Used Worldwide")),v.Ab(8),v.qc(v.Zb(219,20,"Install with SPML File")),v.Ab(2),v.Cb("collapsed",!n.spmldropExpanded),v.Ab(2),v.dc("dropZoneLabel",v.Zb(223,22,"Drop SPML file here to add signs")),v.Ab(7),v.rc(" ",v.Zb(230,24,"Clear All Signs")," "),v.Ab(5),v.qc(v.Zb(235,26,"Next")))},directives:[c.l,c.E,c.e,c.s,c.D,c.g,c.n,c.o,c.z,c.M,l.d,l.e,c.A,c.p,c.q,T,c.d,c.h,c.i,c.m],pipes:[f.c],styles:[".hr-margin-bottom[_ngcontent-%COMP%]{margin-bottom:16px}.hr-black[_ngcontent-%COMP%]{border:0;clear:both;display:block;width:96%;background-color:#000;height:1px}.collapsed[_ngcontent-%COMP%]{height:0!important}"]}),C),B=r("PCNd"),z=[{path:"",component:R}],Z=((O=function e(){o(this,e)}).\u0275fac=function(e){return new(e||O)},O.\u0275mod=v.Ib({type:O}),O.\u0275inj=v.Hb({imports:[[a.c,l.a,c.F,s.j.forChild(z),_,B.a]]}),O)}}])}();