(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7wo0":function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsPageModule",function(){return T});var i=n("ofXK"),o=n("3Pt+"),l=n("tyNb"),a=n("TEn/"),s=n("HaE+"),r=n("HtUY"),c=n("O+7k"),b=n("FUe0"),p=n("KH6c"),u=n("KQF2"),d=n("fXoL"),h=n("sYmb"),g=n("HDdC"),v=n("D0XW"),f=n("DH7j");function N(e){return!Object(f.a)(e)&&e-parseFloat(e)+1>=0}var m=n("z+Ro");function M(e){const{index:t,period:n,subscriber:i}=e;if(i.next(t),!i.closed){if(-1===n)return i.complete();e.index=t+1,this.schedule(e,n)}}const y=["fileSelector"];function S(e,t){if(1&e&&(d.Nb(0,"div",8),d.pc(1),d.Mb()),2&e){const e=d.Xb(2);d.Ab(1),d.qc(e.dropZoneLabel)}}function D(e,t){if(1&e){const e=d.Ob();d.Nb(0,"div"),d.Nb(1,"input",9),d.Vb("click",function(t){return d.ic(e),d.Xb(2).openFileSelector(t)}),d.Mb(),d.Mb()}if(2&e){const e=d.Xb(2);d.Ab(1),d.dc("value",e.browseBtnLabel),d.cc("className",e.browseBtnClassName)}}function w(e,t){if(1&e&&(d.nc(0,S,2,1,"div",6),d.nc(1,D,2,2,"div",7)),2&e){const e=d.Xb();d.cc("ngIf",e.dropZoneLabel),d.Ab(1),d.cc("ngIf",e.showBrowseBtn)}}function F(e,t){}const E=function(e){return{openFileSelector:e}};class L{constructor(e,t){this.relativePath=e,this.fileEntry=t}}let C=(()=>{class e{constructor(e){this.template=e}}return e.\u0275fac=function(t){return new(t||e)(d.Kb(d.M))},e.\u0275dir=d.Fb({type:e,selectors:[["","ngx-file-drop-content-tmp",""]]}),e})(),O=(()=>{class e{constructor(e,t){this.zone=e,this.renderer=t,this.accept="*",this.directory=!1,this.multiple=!0,this.dropZoneLabel="",this.dropZoneClassName="ngx-file-drop__drop-zone",this.contentClassName="ngx-file-drop__content",this.showBrowseBtn=!1,this.browseBtnClassName="btn btn-primary btn-xs ngx-file-drop__browse-btn",this.browseBtnLabel="Browse files",this.onFileDrop=new d.o,this.onFileOver=new d.o,this.onFileLeave=new d.o,this.isDraggingOverDropZone=!1,this.globalDraggingInProgress=!1,this.files=[],this.numOfActiveReadEntries=0,this.helperFormEl=null,this.fileInputPlaceholderEl=null,this.dropEventTimerSubscription=null,this._disabled=!1,this.openFileSelector=e=>{this.fileSelector&&this.fileSelector.nativeElement&&this.fileSelector.nativeElement.click()},this.globalDragStartListener=this.renderer.listen("document","dragstart",e=>{this.globalDraggingInProgress=!0}),this.globalDragEndListener=this.renderer.listen("document","dragend",e=>{this.globalDraggingInProgress=!1})}get disabled(){return this._disabled}set disabled(e){this._disabled=null!=e&&"false"!=`${e}`}ngOnDestroy(){this.dropEventTimerSubscription&&(this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=null),this.globalDragStartListener(),this.globalDragEndListener(),this.files=[],this.helperFormEl=null,this.fileInputPlaceholderEl=null}onDragOver(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone||(this.isDraggingOverDropZone=!0,this.onFileOver.emit(e)),this.preventAndStop(e))}onDragLeave(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone&&(this.isDraggingOverDropZone=!1,this.onFileLeave.emit(e)),this.preventAndStop(e))}dropFiles(e){if(!this.isDropzoneDisabled()&&(this.isDraggingOverDropZone=!1,e.dataTransfer)){let t;e.dataTransfer.dropEffect="copy",t=e.dataTransfer.items?e.dataTransfer.items:e.dataTransfer.files,this.preventAndStop(e),this.checkFiles(t)}}uploadFiles(e){!this.isDropzoneDisabled()&&e.target&&(this.checkFiles(e.target.files||[]),this.resetFileInput())}checkFiles(e){for(let t=0;t<e.length;t++){const n=e[t];let i=null;if(this.canGetAsEntry(n)&&(i=n.webkitGetAsEntry()),i)if(i.isFile){const e=new L(i.name,i);this.addToQueue(e)}else i.isDirectory&&this.traverseFileTree(i,i.name);else if(n){const e={name:n.name,isDirectory:!1,isFile:!0,file:e=>{e(n)}},t=new L(e.name,e);this.addToQueue(t)}}this.dropEventTimerSubscription&&this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=function(e=0,t,n){let i=-1;return N(t)?i=Number(t)<1?1:Number(t):Object(m.a)(t)&&(n=t),Object(m.a)(n)||(n=v.a),new g.a(t=>{const o=N(e)?e:+e-n.now();return n.schedule(M,o,{index:0,period:i,subscriber:t})})}(200,200).subscribe(()=>{if(this.files.length>0&&0===this.numOfActiveReadEntries){const e=this.files;this.files=[],this.onFileDrop.emit(e)}})}traverseFileTree(e,t){if(e.isFile){const n=new L(t,e);this.files.push(n)}else{t+="/";const n=e.createReader();let i=[];const o=()=>{this.numOfActiveReadEntries++,n.readEntries(n=>{if(n.length)i=i.concat(n),o();else if(0===i.length){const n=new L(t,e);this.zone.run(()=>{this.addToQueue(n)})}else for(let e=0;e<i.length;e++)this.zone.run(()=>{this.traverseFileTree(i[e],t+i[e].name)});this.numOfActiveReadEntries--})};o()}}resetFileInput(){if(this.fileSelector&&this.fileSelector.nativeElement){const e=this.fileSelector.nativeElement,t=e.parentElement,n=this.getHelperFormElement(),i=this.getFileInputPlaceholderElement();t!==n&&(this.renderer.insertBefore(t,i,e),this.renderer.appendChild(n,e),n.reset(),this.renderer.insertBefore(t,e,i),this.renderer.removeChild(t,i))}}getHelperFormElement(){return this.helperFormEl||(this.helperFormEl=this.renderer.createElement("form")),this.helperFormEl}getFileInputPlaceholderElement(){return this.fileInputPlaceholderEl||(this.fileInputPlaceholderEl=this.renderer.createElement("div")),this.fileInputPlaceholderEl}canGetAsEntry(e){return!!e.webkitGetAsEntry}isDropzoneDisabled(){return this.globalDraggingInProgress||this.disabled}addToQueue(e){this.files.push(e)}preventAndStop(e){e.stopPropagation(),e.preventDefault()}}return e.\u0275fac=function(t){return new(t||e)(d.Kb(d.B),d.Kb(d.F))},e.\u0275cmp=d.Eb({type:e,selectors:[["ngx-file-drop"]],contentQueries:function(e,t,n){if(1&e&&d.Db(n,C,1,d.M),2&e){let e;d.gc(e=d.Wb())&&(t.contentTemplate=e.first)}},viewQuery:function(e,t){if(1&e&&d.uc(y,3),2&e){let e;d.gc(e=d.Wb())&&(t.fileSelector=e.first)}},inputs:{accept:"accept",directory:"directory",multiple:"multiple",dropZoneLabel:"dropZoneLabel",dropZoneClassName:"dropZoneClassName",contentClassName:"contentClassName",showBrowseBtn:"showBrowseBtn",browseBtnClassName:"browseBtnClassName",browseBtnLabel:"browseBtnLabel",disabled:"disabled"},outputs:{onFileDrop:"onFileDrop",onFileOver:"onFileOver",onFileLeave:"onFileLeave"},decls:7,vars:15,consts:[[3,"className","drop","dragover","dragleave"],[3,"className"],["type","file",1,"ngx-file-drop__file-input",3,"accept","multiple","change"],["fileSelector",""],["defaultContentTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ngx-file-drop__drop-zone-label",4,"ngIf"],[4,"ngIf"],[1,"ngx-file-drop__drop-zone-label"],["type","button",3,"className","value","click"]],template:function(e,t){if(1&e&&(d.Nb(0,"div",0),d.Vb("drop",function(e){return t.dropFiles(e)})("dragover",function(e){return t.onDragOver(e)})("dragleave",function(e){return t.onDragLeave(e)}),d.Nb(1,"div",1),d.Nb(2,"input",2,3),d.Vb("change",function(e){return t.uploadFiles(e)}),d.Mb(),d.nc(4,w,2,2,"ng-template",null,4,d.oc),d.nc(6,F,0,0,"ng-template",5),d.Mb(),d.Mb()),2&e){const e=d.hc(5);d.Cb("ngx-file-drop__drop-zone--over",t.isDraggingOverDropZone),d.cc("className",t.dropZoneClassName),d.Ab(1),d.cc("className",t.contentClassName),d.Ab(1),d.cc("accept",t.accept)("multiple",t.multiple),d.Bb("directory",t.directory||void 0)("webkitdirectory",t.directory||void 0)("mozdirectory",t.directory||void 0)("msdirectory",t.directory||void 0)("odirectory",t.directory||void 0),d.Ab(4),d.cc("ngTemplateOutlet",t.contentTemplate||e)("ngTemplateOutletContext",d.fc(13,E,t.openFileSelector))}},directives:[i.l,i.k],styles:[".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:rgba(147,147,147,.5)}.ngx-file-drop__content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.Ib({type:e,bootstrap:function(){return[O]}}),e.\u0275inj=d.Hb({providers:[],imports:[[i.c]]}),e})(),x=(()=>{class e{constructor(e,t,n,i,o,l,a,s,r,c){this.settingsService=e,this.alertController=t,this.translate=n,this.toastController=i,this.translateService=o,this.subscriptionServiceNG=l,this.subscriptionServiceAndroid=a,this.loadingController=s,this.router=r,this.httpService=c,this.files=[],this.spmldropExpanded=!1,this.subscriptionService=b.a.isNativePlatform()?a:l}installedPuddlesNames(){}upload(e){this.settingsService.loadFile(e.target.files[0])}next(){return this.router.navigateByUrl("/edit")}ngOnInit(){var e=this;return Object(s.a)(function*(){e.UILanguage=yield e.currentUILanguage(),e.settingsService.setFirstTime(),e.installedPuddlesNames()})()}dropped(e){var t=this;this.files=e;for(const n of e)n.fileEntry.isFile&&n.fileEntry.file(function(){var e=Object(s.a)(function*(e){n&&n.relativePath&&n.relativePath.toLowerCase().endsWith(".spml")&&(yield t.presentLoading(),yield t.settingsService.loadFile(e))});return function(t){return e.apply(this,arguments)}}())}fileOver(e){return Object(s.a)(function*(){})()}fileLeave(e){}clearSigns(){var e=this;return Object(s.a)(function*(){const t=yield e.alertController.create({header:e.translate.instant("Clear Signs!"),message:e.translate.instant("Do you <strong>really</strong> want to delete all the signs!!!"),buttons:[{text:e.translate.instant("No"),role:"cancel",cssClass:"secondary",handler:e=>{}},{text:e.translate.instant("Yes"),handler:()=>{e.settingsService.removeAllSigns()}}]});yield t.present()})()}onLanguageChange(e){this.settingsService.setUILanguage(e.detail.value),this.UILanguage=e.detail.value}currentUILanguage(){var e=this;return Object(s.a)(function*(){return(yield e.settingsService.getUILanguage())||"en"})()}downloadPuddle(){var e=this;return Object(s.a)(function*(){yield e.showToast(e.translateService.instant("Downloading"),3e3),yield e.showToast(e.translateService.instant("This may take a few minutes"),3e3),yield e.presentLoading(),e.xhrDownloadPuddle()})()}xhrDownloadPuddle(){var e=this;try{let t=0;t=parseInt(this.puddleID,10),isNaN(t)&&(t=4),this.httpService.GetPuddle(t.toString()).subscribe(function(){var t=Object(s.a)(function*(t){try{yield e.settingsService.loadPuddle(t.toString()),yield e.signsLoaded()}catch(n){console.log(n)}});return function(e){return t.apply(this,arguments)}}())}catch(t){console.log(t)}}signsLoaded(){var e=this;return Object(s.a)(function*(){yield e.loading.dismiss()})()}onPuddleChange(e){this.puddleID=e.detail.value,this.downloadPuddle()}showToast(e,t){var n=this;return Object(s.a)(function*(){(yield n.toastController.create({message:e,duration:t})).present()})()}expandItem(){this.spmldropExpanded=!this.spmldropExpanded}presentLoading(){var e=this;return Object(s.a)(function*(){e.loading=yield e.loadingController.create({message:"Please wait...",backdropDismiss:!1}),e.loading.present()})()}presentLoadingWithOptions(){var e=this;return Object(s.a)(function*(){e.loading=yield e.loadingController.create({spinner:null,duration:5e3,message:"Click the backdrop to dismiss early...",translucent:!0,cssClass:"custom-class custom-loading",backdropDismiss:!0}),yield e.loading.present();const{role:t}=yield e.loading.onDidDismiss();console.log("Loading dismissed with role:",t)})()}}return e.\u0275fac=function(t){return new(t||e)(d.Kb(c.a),d.Kb(a.a),d.Kb(h.d),d.Kb(a.O),d.Kb(h.d),d.Kb(r.a),d.Kb(p.a),d.Kb(a.H),d.Kb(l.g),d.Kb(u.a))},e.\u0275cmp=d.Eb({type:e,selectors:[["app-settings"]],decls:238,vars:28,consts:[["slot","start"],["padding","padding"],["interface","popover",3,"ngModel","ionChange","ngModelChange"],["value","ca"],["value","cs"],["value","de"],["value","en"],["value","eo"],["value","es"],["value","fr"],["value","ko"],["value","mt"],["value","nl"],["value","no"],["value","pl"],["value","pt"],["value","sl"],["value","zh"],[1,"hr-margin-bottom","hr-black"],["value","106"],["value","82"],["value","41"],["value","4"],["value","29"],["value","42"],["value","43"],["value","44"],["value","134"],["value","45"],["value","46"],["value","47"],["value","48"],["value","49"],["value","50"],["value","135"],["value","83"],["value","51"],["value","52"],["value","53"],["value","30"],["value","136"],["value","109"],["value","84"],["value","54"],["value","55"],["value","56"],["value","18"],["value","57"],["value","58"],["value","59"],["value","60"],["value","61"],["value","112"],["value","16"],["value","113"],["value","122"],["value","62"],["value","110"],["value","2"],["value","131"],["value","63"],["value","86"],["value","64"],["value","79"],["value","78"],["value","107"],["value","108"],["value","31"],["value","128"],["value","65"],["value","66"],["value","32"],["value","67"],["value","68"],["value","69"],["value","133"],["value","70"],["value","71"],["value","72"],["value","87"],["value","19"],["value","33"],["value","129"],["value","132"],["value","88"],["value","40"],["value","73"],["value","11"],["value","89"],["value","137"],["value","34"],["value","104"],["value","90"],["value","75"],["value","143"],["value","76"],["value","153"],["value","35"],["value","77"],["spmldropExpanded","",3,"click"],["height","200px;"],[1,"center"],[3,"dropZoneLabel","onFileDrop","onFileOver","onFileLeave"],["type","file",3,"change"],[3,"click"],["horizontal","end","slot","fixed","vertical","bottom"],["name","caret-forward-circle-outline",2,"zoom","2.0",3,"click"]],template:function(e,t){1&e&&(d.Nb(0,"ion-header"),d.Nb(1,"ion-toolbar"),d.Nb(2,"ion-buttons",0),d.Lb(3,"ion-menu-button"),d.Mb(),d.Nb(4,"ion-title"),d.pc(5),d.Yb(6,"translate"),d.Mb(),d.Mb(),d.Mb(),d.Nb(7,"ion-content",1),d.Nb(8,"ion-item"),d.Nb(9,"ion-label"),d.pc(10),d.Yb(11,"translate"),d.Mb(),d.Nb(12,"ion-select",2),d.Vb("ionChange",function(e){return t.onLanguageChange(e)})("ngModelChange",function(e){return t.UILanguage=e}),d.Nb(13,"ion-select-option",3),d.pc(14,"catal\xe0"),d.Mb(),d.Nb(15,"ion-select-option",4),d.pc(16,"\u010de\u0161tina"),d.Mb(),d.Nb(17,"ion-select-option",5),d.pc(18,"Deutsche"),d.Mb(),d.Nb(19,"ion-select-option",6),d.pc(20,"English"),d.Mb(),d.Nb(21,"ion-select-option",7),d.pc(22,"esperanto"),d.Mb(),d.Nb(23,"ion-select-option",8),d.pc(24,"espa\xf1ol"),d.Mb(),d.Nb(25,"ion-select-option",9),d.pc(26,"fran\xe7ais"),d.Mb(),d.Nb(27,"ion-select-option",10),d.pc(28,"\ud55c\uad6d\uc5b4"),d.Mb(),d.Nb(29,"ion-select-option",11),d.pc(30,"maltin"),d.Mb(),d.Nb(31,"ion-select-option",12),d.pc(32,"Nederlands"),d.Mb(),d.Nb(33,"ion-select-option",13),d.pc(34,"norsk"),d.Mb(),d.Nb(35,"ion-select-option",14),d.pc(36,"Polskie"),d.Mb(),d.Nb(37,"ion-select-option",15),d.pc(38,"portugu\xeas"),d.Mb(),d.Nb(39,"ion-select-option",16),d.pc(40,"Sloven\u0161\u010dina"),d.Mb(),d.Nb(41,"ion-select-option",17),d.pc(42,"\u4e2d\u6587"),d.Mb(),d.Mb(),d.Mb(),d.Lb(43,"hr",18),d.Nb(44,"ion-item"),d.Nb(45,"ion-label"),d.pc(46),d.Yb(47,"translate"),d.Mb(),d.Nb(48,"ion-select",2),d.Vb("ionChange",function(e){return t.onPuddleChange(e)})("ngModelChange",function(e){return t.puddleID=e}),d.Nb(49,"ion-select-option",19),d.pc(50,"Afghanistan"),d.Mb(),d.Nb(51,"ion-select-option",20),d.pc(52,"Albania"),d.Mb(),d.Nb(53,"ion-select-option",21),d.pc(54,"Argentina"),d.Mb(),d.Nb(55,"ion-select-option",22),d.pc(56,"ASL - USA & Canada"),d.Mb(),d.Nb(57,"ion-select-option",23),d.pc(58,"AT"),d.Mb(),d.Nb(59,"ion-select-option",24),d.pc(60,"Australia"),d.Mb(),d.Nb(61,"ion-select-option",25),d.pc(62,"French Belgium"),d.Mb(),d.Nb(63,"ion-select-option",26),d.pc(64,"Flanders, Belgium"),d.Mb(),d.Nb(65,"ion-select-option",27),d.pc(66,"Bulgaria"),d.Mb(),d.Nb(67,"ion-select-option",28),d.pc(68,"Bolivia"),d.Mb(),d.Nb(69,"ion-select-option",29),d.pc(70,"LIBRAS - Brazil"),d.Mb(),d.Nb(71,"ion-select-option",30),d.pc(72,"Quebec"),d.Mb(),d.Nb(73,"ion-select-option",31),d.pc(74,"German Switzerland"),d.Mb(),d.Nb(75,"ion-select-option",32),d.pc(76,"French-Switzerland"),d.Mb(),d.Nb(77,"ion-select-option",33),d.pc(78,"CH-it"),d.Mb(),d.Nb(79,"ion-select-option",34),d.pc(80,"Chile"),d.Mb(),d.Nb(81,"ion-select-option",35),d.pc(82,"China"),d.Mb(),d.Nb(83,"ion-select-option",36),d.pc(84,"Colombia"),d.Mb(),d.Nb(85,"ion-select-option",37),d.pc(86,"Czech Republic"),d.Mb(),d.Nb(87,"ion-select-option",38),d.pc(88,"Deutschland, Germany"),d.Mb(),d.Nb(89,"ion-select-option",39),d.pc(90,"Denmark"),d.Mb(),d.Nb(91,"ion-select-option",40),d.pc(92,"Ecuador"),d.Mb(),d.Nb(93,"ion-select-option",41),d.pc(94,"Estonia"),d.Mb(),d.Nb(95,"ion-select-option",42),d.pc(96,"Egypt"),d.Mb(),d.Nb(97,"ion-select-option",43),d.pc(98,"Vortaro"),d.Mb(),d.Nb(99,"ion-select-option",44),d.pc(100,"Espa\xf1a, Spain"),d.Mb(),d.Nb(101,"ion-select-option",45),d.pc(102,"Catalonia, Barcelona"),d.Mb(),d.Nb(103,"ion-select-option",46),d.pc(104,"Ethiopia"),d.Mb(),d.Nb(105,"ion-select-option",47),d.pc(106,"Finland"),d.Mb(),d.Nb(107,"ion-select-option",48),d.pc(108,"France"),d.Mb(),d.Nb(109,"ion-select-option",49),d.pc(110,"Great Britain"),d.Mb(),d.Nb(111,"ion-select-option",50),d.pc(112,"Northern Ireland"),d.Mb(),d.Nb(113,"ion-select-option",51),d.pc(114,"Greece"),d.Mb(),d.Nb(115,"ion-select-option",52),d.pc(116,"Guatemala"),d.Mb(),d.Nb(117,"ion-select-option",53),d.pc(118,"LESHO - Honduras"),d.Mb(),d.Nb(119,"ion-select-option",54),d.pc(120,"Haiti"),d.Mb(),d.Nb(121,"ion-select-option",55),d.pc(122,"Hungary"),d.Mb(),d.Nb(123,"ion-select-option",56),d.pc(124,"Ireland"),d.Mb(),d.Nb(125,"ion-select-option",57),d.pc(126,"Israel"),d.Mb(),d.Nb(127,"ion-select-option",58),d.pc(128,"India"),d.Mb(),d.Nb(129,"ion-select-option",59),d.pc(130,"IS"),d.Mb(),d.Nb(131,"ion-select-option",60),d.pc(132,"IT"),d.Mb(),d.Nb(133,"ion-select-option",61),d.pc(134,"Jordan"),d.Mb(),d.Nb(135,"ion-select-option",62),d.pc(136,"Japan"),d.Mb(),d.Nb(137,"ion-select-option",63),d.pc(138,"Kenya"),d.Mb(),d.Nb(139,"ion-select-option",64),d.pc(140,"Korea"),d.Mb(),d.Nb(141,"ion-select-option",65),d.pc(142,"Lithuania"),d.Mb(),d.Nb(143,"ion-select-option",66),d.pc(144,"Latvia"),d.Mb(),d.Nb(145,"ion-select-option",58),d.pc(146,"Myanmar"),d.Mb(),d.Nb(147,"ion-select-option",67),d.pc(148,"Malta"),d.Mb(),d.Nb(149,"ion-select-option",68),d.pc(150,"Malawi"),d.Mb(),d.Nb(151,"ion-select-option",69),d.pc(152,"Malawi Mexico"),d.Mb(),d.Nb(153,"ion-select-option",70),d.pc(154,"Malaysia"),d.Mb(),d.Nb(155,"ion-select-option",71),d.pc(156,"Nigeria"),d.Mb(),d.Nb(157,"ion-select-option",72),d.pc(158,"Nicaragua"),d.Mb(),d.Nb(159,"ion-select-option",73),d.pc(160,"NL"),d.Mb(),d.Nb(161,"ion-select-option",74),d.pc(162,"Norge, Norway"),d.Mb(),d.Nb(163,"ion-select-option",75),d.pc(164,"Nepal"),d.Mb(),d.Nb(165,"ion-select-option",76),d.pc(166,"New Zealand"),d.Mb(),d.Nb(167,"ion-select-option",77),d.pc(168,"Diccionario Peru"),d.Mb(),d.Nb(169,"ion-select-option",78),d.pc(170,"Philippines"),d.Mb(),d.Nb(171,"ion-select-option",79),d.pc(172,"Pakistan"),d.Mb(),d.Nb(173,"ion-select-option",80),d.pc(174,"Poland"),d.Mb(),d.Nb(175,"ion-select-option",81),d.pc(176,"Portugal"),d.Mb(),d.Nb(177,"ion-select-option",82),d.pc(178,"Paraguay"),d.Mb(),d.Nb(179,"ion-select-option",83),d.pc(180,"Romania"),d.Mb(),d.Nb(181,"ion-select-option",84),d.pc(182,"Russia"),d.Mb(),d.Nb(183,"ion-select-option",85),d.pc(184,"Kingdom Saudi Arabia"),d.Mb(),d.Nb(185,"ion-select-option",86),d.pc(186,"Sverige"),d.Mb(),d.Nb(187,"ion-select-option",87),d.pc(188,"SgSL Singapore Sign Language"),d.Mb(),d.Nb(189,"ion-select-option",88),d.pc(190,"Slovakia"),d.Mb(),d.Nb(191,"ion-select-option",86),d.pc(192,"Sverige"),d.Mb(),d.Nb(193,"ion-select-option",89),d.pc(194,"El Salvador"),d.Mb(),d.Nb(195,"ion-select-option",90),d.pc(196,"Thailand"),d.Mb(),d.Nb(197,"ion-select-option",91),d.pc(198,"Tunisia"),d.Mb(),d.Nb(199,"ion-select-option",92),d.pc(200,"Turkey"),d.Mb(),d.Nb(201,"ion-select-option",93),d.pc(202,"Taiwan"),d.Mb(),d.Nb(203,"ion-select-option",94),d.pc(204,"Uruguay"),d.Mb(),d.Nb(205,"ion-select-option",95),d.pc(206,"Venezuela"),d.Mb(),d.Nb(207,"ion-select-option",96),d.pc(208,"Vietnam"),d.Mb(),d.Nb(209,"ion-select-option",97),d.pc(210),d.Yb(211,"translate"),d.Mb(),d.Nb(212,"ion-select-option",98),d.pc(213,"South Africa"),d.Mb(),d.Mb(),d.Mb(),d.Lb(214,"hr",18),d.Nb(215,"ion-list"),d.Nb(216,"ion-list-header",99),d.Vb("click",function(){return t.expandItem()}),d.Nb(217,"ion-label"),d.pc(218),d.Yb(219,"translate"),d.Mb(),d.Mb(),d.Nb(220,"ion-item",100),d.Nb(221,"div",101),d.Nb(222,"ngx-file-drop",102),d.Vb("onFileDrop",function(e){return t.dropped(e)})("onFileOver",function(e){return t.fileOver(e)})("onFileLeave",function(e){return t.fileLeave(e)}),d.Yb(223,"translate"),d.Mb(),d.Nb(224,"input",103),d.Vb("change",function(e){return t.upload(e)}),d.Mb(),d.Mb(),d.Mb(),d.Lb(225,"hr",18),d.Mb(),d.Nb(226,"ion-item"),d.Nb(227,"div"),d.Nb(228,"ion-button",104),d.Vb("click",function(){return t.clearSigns()}),d.pc(229),d.Yb(230,"translate"),d.Mb(),d.Mb(),d.Mb(),d.Lb(231,"hr",18),d.Nb(232,"ion-fab",105),d.Nb(233,"ion-label"),d.pc(234),d.Yb(235,"translate"),d.Mb(),d.Nb(236,"ion-fab-button"),d.Nb(237,"ion-icon",106),d.Vb("click",function(){return t.next()}),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&e&&(d.Ab(5),d.qc(d.Zb(6,12,"Settings")),d.Ab(5),d.qc(d.Zb(11,14,"UI Language")),d.Ab(2),d.cc("ngModel",t.UILanguage),d.Ab(34),d.qc(d.Zb(47,16,"Install Signs from SignLanguage Puddle")),d.Ab(2),d.cc("ngModel",t.puddleID),d.Ab(162),d.qc(d.Zb(211,18,"Signs Used Worldwide")),d.Ab(8),d.qc(d.Zb(219,20,"Install with SPML File")),d.Ab(2),d.Cb("collapsed",!t.spmldropExpanded),d.Ab(2),d.dc("dropZoneLabel",d.Zb(223,22,"Drop SPML file here to add signs")),d.Ab(7),d.rc(" ",d.Zb(230,24,"Clear All Signs")," "),d.Ab(5),d.qc(d.Zb(235,26,"Next")))},directives:[a.l,a.E,a.e,a.s,a.D,a.g,a.n,a.o,a.z,a.M,o.d,o.e,a.A,a.p,a.q,O,a.d,a.h,a.i,a.m],pipes:[h.c],styles:[".hr-margin-bottom[_ngcontent-%COMP%]{margin-bottom:16px}.hr-black[_ngcontent-%COMP%]{border:0;clear:both;display:block;width:96%;background-color:#000;height:1px}.collapsed[_ngcontent-%COMP%]{height:0!important}"]}),e})();var I=n("PCNd");const A=[{path:"",component:x}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.Ib({type:e}),e.\u0275inj=d.Hb({imports:[[i.c,o.a,a.F,l.j.forChild(A),P,I.a]]}),e})()}}]);