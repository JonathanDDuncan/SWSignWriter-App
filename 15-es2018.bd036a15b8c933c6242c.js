(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7wo0":function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsPageModule",function(){return C});var i=n("ofXK"),o=n("3Pt+"),l=n("tyNb"),s=n("TEn/"),a=n("HaE+"),r=n("HtUY"),c=n("O+7k"),p=n("tk/3"),b=n("fXoL"),u=n("sYmb"),d=n("PqYM");const g=["fileSelector"];function h(e,t){if(1&e&&(b.Nb(0,"div",8),b.pc(1),b.Mb()),2&e){const e=b.Xb(2);b.Ab(1),b.qc(e.dropZoneLabel)}}function v(e,t){if(1&e){const e=b.Ob();b.Nb(0,"div"),b.Nb(1,"input",9),b.Vb("click",function(t){return b.ic(e),b.Xb(2).openFileSelector(t)}),b.Mb(),b.Mb()}if(2&e){const e=b.Xb(2);b.Ab(1),b.dc("value",e.browseBtnLabel),b.cc("className",e.browseBtnClassName)}}function f(e,t){if(1&e&&(b.nc(0,h,2,1,"div",6),b.nc(1,v,2,2,"div",7)),2&e){const e=b.Xb();b.cc("ngIf",e.dropZoneLabel),b.Ab(1),b.cc("ngIf",e.showBrowseBtn)}}function N(e,t){}const M=function(e){return{openFileSelector:e}};class m{constructor(e,t){this.relativePath=e,this.fileEntry=t}}let y=(()=>{class e{constructor(e){this.template=e}}return e.\u0275fac=function(t){return new(t||e)(b.Kb(b.M))},e.\u0275dir=b.Fb({type:e,selectors:[["","ngx-file-drop-content-tmp",""]]}),e})(),S=(()=>{class e{constructor(e,t){this.zone=e,this.renderer=t,this.accept="*",this.directory=!1,this.multiple=!0,this.dropZoneLabel="",this.dropZoneClassName="ngx-file-drop__drop-zone",this.contentClassName="ngx-file-drop__content",this.showBrowseBtn=!1,this.browseBtnClassName="btn btn-primary btn-xs ngx-file-drop__browse-btn",this.browseBtnLabel="Browse files",this.onFileDrop=new b.o,this.onFileOver=new b.o,this.onFileLeave=new b.o,this.isDraggingOverDropZone=!1,this.globalDraggingInProgress=!1,this.files=[],this.numOfActiveReadEntries=0,this.helperFormEl=null,this.fileInputPlaceholderEl=null,this.dropEventTimerSubscription=null,this._disabled=!1,this.openFileSelector=e=>{this.fileSelector&&this.fileSelector.nativeElement&&this.fileSelector.nativeElement.click()},this.globalDragStartListener=this.renderer.listen("document","dragstart",e=>{this.globalDraggingInProgress=!0}),this.globalDragEndListener=this.renderer.listen("document","dragend",e=>{this.globalDraggingInProgress=!1})}get disabled(){return this._disabled}set disabled(e){this._disabled=null!=e&&"false"!=`${e}`}ngOnDestroy(){this.dropEventTimerSubscription&&(this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=null),this.globalDragStartListener(),this.globalDragEndListener(),this.files=[],this.helperFormEl=null,this.fileInputPlaceholderEl=null}onDragOver(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone||(this.isDraggingOverDropZone=!0,this.onFileOver.emit(e)),this.preventAndStop(e))}onDragLeave(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone&&(this.isDraggingOverDropZone=!1,this.onFileLeave.emit(e)),this.preventAndStop(e))}dropFiles(e){if(!this.isDropzoneDisabled()&&(this.isDraggingOverDropZone=!1,e.dataTransfer)){let t;e.dataTransfer.dropEffect="copy",t=e.dataTransfer.items?e.dataTransfer.items:e.dataTransfer.files,this.preventAndStop(e),this.checkFiles(t)}}uploadFiles(e){!this.isDropzoneDisabled()&&e.target&&(this.checkFiles(e.target.files||[]),this.resetFileInput())}checkFiles(e){for(let t=0;t<e.length;t++){const n=e[t];let i=null;if(this.canGetAsEntry(n)&&(i=n.webkitGetAsEntry()),i)if(i.isFile){const e=new m(i.name,i);this.addToQueue(e)}else i.isDirectory&&this.traverseFileTree(i,i.name);else if(n){const e={name:n.name,isDirectory:!1,isFile:!0,file:e=>{e(n)}},t=new m(e.name,e);this.addToQueue(t)}}this.dropEventTimerSubscription&&this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=Object(d.a)(200,200).subscribe(()=>{if(this.files.length>0&&0===this.numOfActiveReadEntries){const e=this.files;this.files=[],this.onFileDrop.emit(e)}})}traverseFileTree(e,t){if(e.isFile){const n=new m(t,e);this.files.push(n)}else{t+="/";const n=e.createReader();let i=[];const o=()=>{this.numOfActiveReadEntries++,n.readEntries(n=>{if(n.length)i=i.concat(n),o();else if(0===i.length){const n=new m(t,e);this.zone.run(()=>{this.addToQueue(n)})}else for(let e=0;e<i.length;e++)this.zone.run(()=>{this.traverseFileTree(i[e],t+i[e].name)});this.numOfActiveReadEntries--})};o()}}resetFileInput(){if(this.fileSelector&&this.fileSelector.nativeElement){const e=this.fileSelector.nativeElement,t=e.parentElement,n=this.getHelperFormElement(),i=this.getFileInputPlaceholderElement();t!==n&&(this.renderer.insertBefore(t,i,e),this.renderer.appendChild(n,e),n.reset(),this.renderer.insertBefore(t,e,i),this.renderer.removeChild(t,i))}}getHelperFormElement(){return this.helperFormEl||(this.helperFormEl=this.renderer.createElement("form")),this.helperFormEl}getFileInputPlaceholderElement(){return this.fileInputPlaceholderEl||(this.fileInputPlaceholderEl=this.renderer.createElement("div")),this.fileInputPlaceholderEl}canGetAsEntry(e){return!!e.webkitGetAsEntry}isDropzoneDisabled(){return this.globalDraggingInProgress||this.disabled}addToQueue(e){this.files.push(e)}preventAndStop(e){e.stopPropagation(),e.preventDefault()}}return e.\u0275fac=function(t){return new(t||e)(b.Kb(b.B),b.Kb(b.F))},e.\u0275cmp=b.Eb({type:e,selectors:[["ngx-file-drop"]],contentQueries:function(e,t,n){if(1&e&&b.Db(n,y,1,b.M),2&e){let e;b.gc(e=b.Wb())&&(t.contentTemplate=e.first)}},viewQuery:function(e,t){if(1&e&&b.tc(g,3),2&e){let e;b.gc(e=b.Wb())&&(t.fileSelector=e.first)}},inputs:{accept:"accept",directory:"directory",multiple:"multiple",dropZoneLabel:"dropZoneLabel",dropZoneClassName:"dropZoneClassName",contentClassName:"contentClassName",showBrowseBtn:"showBrowseBtn",browseBtnClassName:"browseBtnClassName",browseBtnLabel:"browseBtnLabel",disabled:"disabled"},outputs:{onFileDrop:"onFileDrop",onFileOver:"onFileOver",onFileLeave:"onFileLeave"},decls:7,vars:15,consts:[[3,"className","drop","dragover","dragleave"],[3,"className"],["type","file",1,"ngx-file-drop__file-input",3,"accept","multiple","change"],["fileSelector",""],["defaultContentTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ngx-file-drop__drop-zone-label",4,"ngIf"],[4,"ngIf"],[1,"ngx-file-drop__drop-zone-label"],["type","button",3,"className","value","click"]],template:function(e,t){if(1&e&&(b.Nb(0,"div",0),b.Vb("drop",function(e){return t.dropFiles(e)})("dragover",function(e){return t.onDragOver(e)})("dragleave",function(e){return t.onDragLeave(e)}),b.Nb(1,"div",1),b.Nb(2,"input",2,3),b.Vb("change",function(e){return t.uploadFiles(e)}),b.Mb(),b.nc(4,f,2,2,"ng-template",null,4,b.oc),b.nc(6,N,0,0,"ng-template",5),b.Mb(),b.Mb()),2&e){const e=b.hc(5);b.Cb("ngx-file-drop__drop-zone--over",t.isDraggingOverDropZone),b.cc("className",t.dropZoneClassName),b.Ab(1),b.cc("className",t.contentClassName),b.Ab(1),b.cc("accept",t.accept)("multiple",t.multiple),b.Bb("directory",t.directory||void 0)("webkitdirectory",t.directory||void 0)("mozdirectory",t.directory||void 0)("msdirectory",t.directory||void 0)("odirectory",t.directory||void 0),b.Ab(4),b.cc("ngTemplateOutlet",t.contentTemplate||e)("ngTemplateOutletContext",b.fc(13,M,t.openFileSelector))}},directives:[i.l,i.k],styles:[".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:rgba(147,147,147,.5)}.ngx-file-drop__content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Ib({type:e,bootstrap:function(){return[S]}}),e.\u0275inj=b.Hb({providers:[],imports:[[i.c]]}),e})(),D=(()=>{class e{constructor(e,t,n,i,o,l,s,a,r){this.settingsService=e,this.alertController=t,this.translate=n,this.toastController=i,this.translateService=o,this.subscriptionService=l,this.loadingController=s,this.router=a,this.http=r,this.files=[],this.serverUrl="https://swsignwriterapi.azurewebsites.net/",this.spmldropExpanded=!1}installedPuddlesNames(){}upload(e){this.settingsService.loadFile(e.target.files[0])}next(){return this.router.navigateByUrl("/edit")}ngOnInit(){var e=this;return Object(a.a)(function*(){e.subscriptionService.CanUse(),e.UILanguage=yield e.currentUILanguage(),e.settingsService.setFirstTime(),e.installedPuddlesNames()})()}dropped(e){var t=this;this.files=e;for(const n of e)n.fileEntry.isFile&&n.fileEntry.file(function(){var e=Object(a.a)(function*(e){n&&n.relativePath&&n.relativePath.toLowerCase().endsWith(".spml")&&(yield t.presentLoading(),yield t.settingsService.loadFile(e))});return function(t){return e.apply(this,arguments)}}())}fileOver(e){return Object(a.a)(function*(){})()}fileLeave(e){}clearSigns(){var e=this;return Object(a.a)(function*(){const t=yield e.alertController.create({header:e.translate.instant("Clear Signs!"),message:e.translate.instant("Do you <strong>really</strong> want to delete all the signs!!!"),buttons:[{text:e.translate.instant("No"),role:"cancel",cssClass:"secondary",handler:e=>{}},{text:e.translate.instant("Yes"),handler:()=>{e.settingsService.removeAllSigns()}}]});yield t.present()})()}onLanguageChange(e){this.settingsService.setUILanguage(e.detail.value),this.UILanguage=e.detail.value}currentUILanguage(){var e=this;return Object(a.a)(function*(){return(yield e.settingsService.getUILanguage())||"en"})()}downloadPuddle(){var e=this;return Object(a.a)(function*(){yield e.showToast(e.translateService.instant("Downloading"),3e3),yield e.showToast(e.translateService.instant("This may take a few minutes"),3e3),yield e.presentLoading(),e.xhrDownloadPuddle()})()}xhrDownloadPuddle(){var e=this;try{let t=0;t=parseInt(this.puddleID,10),isNaN(t)&&(t=4);const n={params:(new p.d).append("UI","1").append("sign",t.toString())};this.http.post(this.serverUrl+"api/Puddle/GetPuddle",{},n).subscribe(function(){var t=Object(a.a)(function*(t){console.log("response",t);try{yield e.settingsService.loadPuddle(t.toString()),yield e.signsLoaded()}catch(n){console.log(n)}});return function(e){return t.apply(this,arguments)}}())}catch(t){console.log(t)}}signsLoaded(){var e=this;return Object(a.a)(function*(){yield e.loading.dismiss()})()}onPuddleChange(e){this.puddleID=e.detail.value,this.downloadPuddle()}showToast(e,t){var n=this;return Object(a.a)(function*(){(yield n.toastController.create({message:e,duration:t})).present()})()}expandItem(){this.spmldropExpanded=!this.spmldropExpanded}presentLoading(){var e=this;return Object(a.a)(function*(){e.loading=yield e.loadingController.create({message:"Please wait...",backdropDismiss:!1}),e.loading.present()})()}presentLoadingWithOptions(){var e=this;return Object(a.a)(function*(){e.loading=yield e.loadingController.create({spinner:null,duration:5e3,message:"Click the backdrop to dismiss early...",translucent:!0,cssClass:"custom-class custom-loading",backdropDismiss:!0}),yield e.loading.present();const{role:t}=yield e.loading.onDidDismiss();console.log("Loading dismissed with role:",t)})()}}return e.\u0275fac=function(t){return new(t||e)(b.Kb(c.a),b.Kb(s.a),b.Kb(u.d),b.Kb(s.O),b.Kb(u.d),b.Kb(r.a),b.Kb(s.H),b.Kb(l.g),b.Kb(p.a))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-settings"]],decls:238,vars:28,consts:[["slot","start"],["padding","padding"],["interface","popover",3,"ngModel","ionChange","ngModelChange"],["value","ca"],["value","cs"],["value","de"],["value","en"],["value","eo"],["value","es"],["value","fr"],["value","ko"],["value","mt"],["value","nl"],["value","no"],["value","pl"],["value","pt"],["value","sl"],["value","zh"],[1,"hr-margin-bottom","hr-black"],["value","106"],["value","82"],["value","41"],["value","4"],["value","29"],["value","42"],["value","43"],["value","44"],["value","134"],["value","45"],["value","46"],["value","47"],["value","48"],["value","49"],["value","50"],["value","135"],["value","83"],["value","51"],["value","52"],["value","53"],["value","30"],["value","136"],["value","109"],["value","84"],["value","54"],["value","55"],["value","56"],["value","18"],["value","57"],["value","58"],["value","59"],["value","60"],["value","61"],["value","112"],["value","16"],["value","113"],["value","122"],["value","62"],["value","110"],["value","2"],["value","131"],["value","63"],["value","86"],["value","64"],["value","79"],["value","78"],["value","107"],["value","108"],["value","31"],["value","128"],["value","65"],["value","66"],["value","32"],["value","67"],["value","68"],["value","69"],["value","133"],["value","70"],["value","71"],["value","72"],["value","87"],["value","19"],["value","33"],["value","129"],["value","132"],["value","88"],["value","40"],["value","73"],["value","11"],["value","89"],["value","137"],["value","34"],["value","104"],["value","90"],["value","75"],["value","143"],["value","76"],["value","153"],["value","35"],["value","77"],["spmldropExpanded","",3,"click"],["height","200px;"],[1,"center"],[3,"dropZoneLabel","onFileDrop","onFileOver","onFileLeave"],["type","file",3,"change"],[3,"click"],["horizontal","end","slot","fixed","vertical","bottom"],["name","caret-forward-circle-outline",2,"zoom","2.0",3,"click"]],template:function(e,t){1&e&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-buttons",0),b.Lb(3,"ion-menu-button"),b.Mb(),b.Nb(4,"ion-title"),b.pc(5),b.Yb(6,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Nb(7,"ion-content",1),b.Nb(8,"ion-item"),b.Nb(9,"ion-label"),b.pc(10),b.Yb(11,"translate"),b.Mb(),b.Nb(12,"ion-select",2),b.Vb("ionChange",function(e){return t.onLanguageChange(e)})("ngModelChange",function(e){return t.UILanguage=e}),b.Nb(13,"ion-select-option",3),b.pc(14,"catal\xe0"),b.Mb(),b.Nb(15,"ion-select-option",4),b.pc(16,"\u010de\u0161tina"),b.Mb(),b.Nb(17,"ion-select-option",5),b.pc(18,"Deutsche"),b.Mb(),b.Nb(19,"ion-select-option",6),b.pc(20,"English"),b.Mb(),b.Nb(21,"ion-select-option",7),b.pc(22,"esperanto"),b.Mb(),b.Nb(23,"ion-select-option",8),b.pc(24,"espa\xf1ol"),b.Mb(),b.Nb(25,"ion-select-option",9),b.pc(26,"fran\xe7ais"),b.Mb(),b.Nb(27,"ion-select-option",10),b.pc(28,"\ud55c\uad6d\uc5b4"),b.Mb(),b.Nb(29,"ion-select-option",11),b.pc(30,"maltin"),b.Mb(),b.Nb(31,"ion-select-option",12),b.pc(32,"Nederlands"),b.Mb(),b.Nb(33,"ion-select-option",13),b.pc(34,"norsk"),b.Mb(),b.Nb(35,"ion-select-option",14),b.pc(36,"Polskie"),b.Mb(),b.Nb(37,"ion-select-option",15),b.pc(38,"portugu\xeas"),b.Mb(),b.Nb(39,"ion-select-option",16),b.pc(40,"Sloven\u0161\u010dina"),b.Mb(),b.Nb(41,"ion-select-option",17),b.pc(42,"\u4e2d\u6587"),b.Mb(),b.Mb(),b.Mb(),b.Lb(43,"hr",18),b.Nb(44,"ion-item"),b.Nb(45,"ion-label"),b.pc(46),b.Yb(47,"translate"),b.Mb(),b.Nb(48,"ion-select",2),b.Vb("ionChange",function(e){return t.onPuddleChange(e)})("ngModelChange",function(e){return t.puddleID=e}),b.Nb(49,"ion-select-option",19),b.pc(50,"Afghanistan"),b.Mb(),b.Nb(51,"ion-select-option",20),b.pc(52,"Albania"),b.Mb(),b.Nb(53,"ion-select-option",21),b.pc(54,"Argentina"),b.Mb(),b.Nb(55,"ion-select-option",22),b.pc(56,"ASL - USA & Canada"),b.Mb(),b.Nb(57,"ion-select-option",23),b.pc(58,"AT"),b.Mb(),b.Nb(59,"ion-select-option",24),b.pc(60,"Australia"),b.Mb(),b.Nb(61,"ion-select-option",25),b.pc(62,"French Belgium"),b.Mb(),b.Nb(63,"ion-select-option",26),b.pc(64,"Flanders, Belgium"),b.Mb(),b.Nb(65,"ion-select-option",27),b.pc(66,"Bulgaria"),b.Mb(),b.Nb(67,"ion-select-option",28),b.pc(68,"Bolivia"),b.Mb(),b.Nb(69,"ion-select-option",29),b.pc(70,"LIBRAS - Brazil"),b.Mb(),b.Nb(71,"ion-select-option",30),b.pc(72,"Quebec"),b.Mb(),b.Nb(73,"ion-select-option",31),b.pc(74,"German Switzerland"),b.Mb(),b.Nb(75,"ion-select-option",32),b.pc(76,"French-Switzerland"),b.Mb(),b.Nb(77,"ion-select-option",33),b.pc(78,"CH-it"),b.Mb(),b.Nb(79,"ion-select-option",34),b.pc(80,"Chile"),b.Mb(),b.Nb(81,"ion-select-option",35),b.pc(82,"China"),b.Mb(),b.Nb(83,"ion-select-option",36),b.pc(84,"Colombia"),b.Mb(),b.Nb(85,"ion-select-option",37),b.pc(86,"Czech Republic"),b.Mb(),b.Nb(87,"ion-select-option",38),b.pc(88,"Deutschland, Germany"),b.Mb(),b.Nb(89,"ion-select-option",39),b.pc(90,"Denmark"),b.Mb(),b.Nb(91,"ion-select-option",40),b.pc(92,"Ecuador"),b.Mb(),b.Nb(93,"ion-select-option",41),b.pc(94,"Estonia"),b.Mb(),b.Nb(95,"ion-select-option",42),b.pc(96,"Egypt"),b.Mb(),b.Nb(97,"ion-select-option",43),b.pc(98,"Vortaro"),b.Mb(),b.Nb(99,"ion-select-option",44),b.pc(100,"Espa\xf1a, Spain"),b.Mb(),b.Nb(101,"ion-select-option",45),b.pc(102,"Catalonia, Barcelona"),b.Mb(),b.Nb(103,"ion-select-option",46),b.pc(104,"Ethiopia"),b.Mb(),b.Nb(105,"ion-select-option",47),b.pc(106,"Finland"),b.Mb(),b.Nb(107,"ion-select-option",48),b.pc(108,"France"),b.Mb(),b.Nb(109,"ion-select-option",49),b.pc(110,"Great Britain"),b.Mb(),b.Nb(111,"ion-select-option",50),b.pc(112,"Northern Ireland"),b.Mb(),b.Nb(113,"ion-select-option",51),b.pc(114,"Greece"),b.Mb(),b.Nb(115,"ion-select-option",52),b.pc(116,"Guatemala"),b.Mb(),b.Nb(117,"ion-select-option",53),b.pc(118,"LESHO - Honduras"),b.Mb(),b.Nb(119,"ion-select-option",54),b.pc(120,"Haiti"),b.Mb(),b.Nb(121,"ion-select-option",55),b.pc(122,"Hungary"),b.Mb(),b.Nb(123,"ion-select-option",56),b.pc(124,"Ireland"),b.Mb(),b.Nb(125,"ion-select-option",57),b.pc(126,"Israel"),b.Mb(),b.Nb(127,"ion-select-option",58),b.pc(128,"India"),b.Mb(),b.Nb(129,"ion-select-option",59),b.pc(130,"IS"),b.Mb(),b.Nb(131,"ion-select-option",60),b.pc(132,"IT"),b.Mb(),b.Nb(133,"ion-select-option",61),b.pc(134,"Jordan"),b.Mb(),b.Nb(135,"ion-select-option",62),b.pc(136,"Japan"),b.Mb(),b.Nb(137,"ion-select-option",63),b.pc(138,"Kenya"),b.Mb(),b.Nb(139,"ion-select-option",64),b.pc(140,"Korea"),b.Mb(),b.Nb(141,"ion-select-option",65),b.pc(142,"Lithuania"),b.Mb(),b.Nb(143,"ion-select-option",66),b.pc(144,"Latvia"),b.Mb(),b.Nb(145,"ion-select-option",58),b.pc(146,"Myanmar"),b.Mb(),b.Nb(147,"ion-select-option",67),b.pc(148,"Malta"),b.Mb(),b.Nb(149,"ion-select-option",68),b.pc(150,"Malawi"),b.Mb(),b.Nb(151,"ion-select-option",69),b.pc(152,"Malawi Mexico"),b.Mb(),b.Nb(153,"ion-select-option",70),b.pc(154,"Malaysia"),b.Mb(),b.Nb(155,"ion-select-option",71),b.pc(156,"Nigeria"),b.Mb(),b.Nb(157,"ion-select-option",72),b.pc(158,"Nicaragua"),b.Mb(),b.Nb(159,"ion-select-option",73),b.pc(160,"NL"),b.Mb(),b.Nb(161,"ion-select-option",74),b.pc(162,"Norge, Norway"),b.Mb(),b.Nb(163,"ion-select-option",75),b.pc(164,"Nepal"),b.Mb(),b.Nb(165,"ion-select-option",76),b.pc(166,"New Zealand"),b.Mb(),b.Nb(167,"ion-select-option",77),b.pc(168,"Diccionario Peru"),b.Mb(),b.Nb(169,"ion-select-option",78),b.pc(170,"Philippines"),b.Mb(),b.Nb(171,"ion-select-option",79),b.pc(172,"Pakistan"),b.Mb(),b.Nb(173,"ion-select-option",80),b.pc(174,"Poland"),b.Mb(),b.Nb(175,"ion-select-option",81),b.pc(176,"Portugal"),b.Mb(),b.Nb(177,"ion-select-option",82),b.pc(178,"Paraguay"),b.Mb(),b.Nb(179,"ion-select-option",83),b.pc(180,"Romania"),b.Mb(),b.Nb(181,"ion-select-option",84),b.pc(182,"Russia"),b.Mb(),b.Nb(183,"ion-select-option",85),b.pc(184,"Kingdom Saudi Arabia"),b.Mb(),b.Nb(185,"ion-select-option",86),b.pc(186,"Sverige"),b.Mb(),b.Nb(187,"ion-select-option",87),b.pc(188,"SgSL Singapore Sign Language"),b.Mb(),b.Nb(189,"ion-select-option",88),b.pc(190,"Slovakia"),b.Mb(),b.Nb(191,"ion-select-option",86),b.pc(192,"Sverige"),b.Mb(),b.Nb(193,"ion-select-option",89),b.pc(194,"El Salvador"),b.Mb(),b.Nb(195,"ion-select-option",90),b.pc(196,"Thailand"),b.Mb(),b.Nb(197,"ion-select-option",91),b.pc(198,"Tunisia"),b.Mb(),b.Nb(199,"ion-select-option",92),b.pc(200,"Turkey"),b.Mb(),b.Nb(201,"ion-select-option",93),b.pc(202,"Taiwan"),b.Mb(),b.Nb(203,"ion-select-option",94),b.pc(204,"Uruguay"),b.Mb(),b.Nb(205,"ion-select-option",95),b.pc(206,"Venezuela"),b.Mb(),b.Nb(207,"ion-select-option",96),b.pc(208,"Vietnam"),b.Mb(),b.Nb(209,"ion-select-option",97),b.pc(210),b.Yb(211,"translate"),b.Mb(),b.Nb(212,"ion-select-option",98),b.pc(213,"South Africa"),b.Mb(),b.Mb(),b.Mb(),b.Lb(214,"hr",18),b.Nb(215,"ion-list"),b.Nb(216,"ion-list-header",99),b.Vb("click",function(){return t.expandItem()}),b.Nb(217,"ion-label"),b.pc(218),b.Yb(219,"translate"),b.Mb(),b.Mb(),b.Nb(220,"ion-item",100),b.Nb(221,"div",101),b.Nb(222,"ngx-file-drop",102),b.Vb("onFileDrop",function(e){return t.dropped(e)})("onFileOver",function(e){return t.fileOver(e)})("onFileLeave",function(e){return t.fileLeave(e)}),b.Yb(223,"translate"),b.Mb(),b.Nb(224,"input",103),b.Vb("change",function(e){return t.upload(e)}),b.Mb(),b.Mb(),b.Mb(),b.Lb(225,"hr",18),b.Mb(),b.Nb(226,"ion-item"),b.Nb(227,"div"),b.Nb(228,"ion-button",104),b.Vb("click",function(){return t.clearSigns()}),b.pc(229),b.Yb(230,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Lb(231,"hr",18),b.Nb(232,"ion-fab",105),b.Nb(233,"ion-label"),b.pc(234),b.Yb(235,"translate"),b.Mb(),b.Nb(236,"ion-fab-button"),b.Nb(237,"ion-icon",106),b.Vb("click",function(){return t.next()}),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&e&&(b.Ab(5),b.qc(b.Zb(6,12,"Settings")),b.Ab(5),b.qc(b.Zb(11,14,"UI Language")),b.Ab(2),b.cc("ngModel",t.UILanguage),b.Ab(34),b.qc(b.Zb(47,16,"Install Signs from SignLanguage Puddle")),b.Ab(2),b.cc("ngModel",t.puddleID),b.Ab(162),b.qc(b.Zb(211,18,"Signs Used Worldwide")),b.Ab(8),b.qc(b.Zb(219,20,"Install with SPML File")),b.Ab(2),b.Cb("collapsed",!t.spmldropExpanded),b.Ab(2),b.dc("dropZoneLabel",b.Zb(223,22,"Drop SPML file here to add signs")),b.Ab(7),b.rc(" ",b.Zb(230,24,"Clear All Signs")," "),b.Ab(5),b.qc(b.Zb(235,26,"Next")))},directives:[s.l,s.E,s.e,s.s,s.D,s.g,s.n,s.o,s.z,s.M,o.d,o.e,s.A,s.p,s.q,S,s.d,s.h,s.i,s.m],pipes:[u.c],styles:[".hr-margin-bottom[_ngcontent-%COMP%]{margin-bottom:16px}.hr-black[_ngcontent-%COMP%]{border:0;clear:both;display:block;width:96%;background-color:#000;height:1px}.collapsed[_ngcontent-%COMP%]{height:0!important}"]}),e})();var E=n("PCNd");const L=[{path:"",component:D}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({imports:[[i.c,o.a,s.F,l.j.forChild(L),w,E.a]]}),e})()}}]);