"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8629],{8629:(Y,v,a)=>{a.r(v),a.d(v,{SettingsPageModule:()=>J});var d=a(6895),Z=a(4719),_=a(9990),s=a(603),g=a(5861),U=a(722),D=a(7423),q=a(5362),e=a(4650),f=a(7171),y=a(9415),F=a(6498),S=a(6014),b=a(6688);function m(l){return!(0,b.k)(l)&&l-parseFloat(l)+1>=0}var T=a(2866);function x(l){const{index:r,period:t,subscriber:n}=l;if(n.next(r),!n.closed){if(-1===t)return n.complete();l.index=r+1,this.schedule(l,t)}}const E=["fileSelector"];function N(l,r){if(1&l&&(e.TgZ(0,"div",8),e._uU(1),e.qZA()),2&l){const t=e.oxw(2);e.xp6(1),e.Oqu(t.dropZoneLabel)}}function P(l,r){if(1&l){const t=e.EpF();e.TgZ(0,"div")(1,"input",9),e.NdJ("click",function(o){e.CHM(t);const i=e.oxw(2);return e.KtG(i.openFileSelector(o))}),e.qZA()()}if(2&l){const t=e.oxw(2);e.xp6(1),e.s9C("value",t.browseBtnLabel),e.Q6J("className",t.browseBtnClassName)}}function L(l,r){if(1&l&&(e.YNc(0,N,2,1,"div",6),e.YNc(1,P,2,2,"div",7)),2&l){const t=e.oxw();e.Q6J("ngIf",t.dropZoneLabel),e.xp6(1),e.Q6J("ngIf",t.showBrowseBtn)}}function I(l,r){}const w=function(l){return{openFileSelector:l}};class h{constructor(r,t){this.relativePath=r,this.fileEntry=t}}let O=(()=>{class l{constructor(t){this.template=t}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(e.Rgc))},l.\u0275dir=e.lG2({type:l,selectors:[["","ngx-file-drop-content-tmp",""]]}),l})(),A=(()=>{class l{constructor(t,n){this.zone=t,this.renderer=n,this.accept="*",this.directory=!1,this.multiple=!0,this.dropZoneLabel="",this.dropZoneClassName="ngx-file-drop__drop-zone",this.useDragEnter=!1,this.contentClassName="ngx-file-drop__content",this.showBrowseBtn=!1,this.browseBtnClassName="btn btn-primary btn-xs ngx-file-drop__browse-btn",this.browseBtnLabel="Browse files",this.onFileDrop=new e.vpe,this.onFileOver=new e.vpe,this.onFileLeave=new e.vpe,this.isDraggingOverDropZone=!1,this.globalDraggingInProgress=!1,this.files=[],this.numOfActiveReadEntries=0,this.helperFormEl=null,this.fileInputPlaceholderEl=null,this.dropEventTimerSubscription=null,this._disabled=!1,this.openFileSelector=o=>{this.fileSelector&&this.fileSelector.nativeElement&&this.fileSelector.nativeElement.click()},this.globalDragStartListener=this.renderer.listen("document","dragstart",o=>{this.globalDraggingInProgress=!0}),this.globalDragEndListener=this.renderer.listen("document","dragend",o=>{this.globalDraggingInProgress=!1})}get disabled(){return this._disabled}set disabled(t){this._disabled=null!=t&&"false"!=`${t}`}ngOnDestroy(){this.dropEventTimerSubscription&&(this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=null),this.globalDragStartListener(),this.globalDragEndListener(),this.files=[],this.helperFormEl=null,this.fileInputPlaceholderEl=null}onDragOver(t){this.useDragEnter?(this.preventAndStop(t),t.dataTransfer&&(t.dataTransfer.dropEffect="copy")):!this.isDropzoneDisabled()&&!this.useDragEnter&&t.dataTransfer&&(this.isDraggingOverDropZone||(this.isDraggingOverDropZone=!0,this.onFileOver.emit(t)),this.preventAndStop(t),t.dataTransfer.dropEffect="copy")}onDragEnter(t){!this.isDropzoneDisabled()&&this.useDragEnter&&(this.isDraggingOverDropZone||(this.isDraggingOverDropZone=!0,this.onFileOver.emit(t)),this.preventAndStop(t))}onDragLeave(t){this.isDropzoneDisabled()||(this.isDraggingOverDropZone&&(this.isDraggingOverDropZone=!1,this.onFileLeave.emit(t)),this.preventAndStop(t))}dropFiles(t){if(!this.isDropzoneDisabled()&&(this.isDraggingOverDropZone=!1,t.dataTransfer)){let n;n=t.dataTransfer.items?t.dataTransfer.items:t.dataTransfer.files,this.preventAndStop(t),this.checkFiles(n)}}uploadFiles(t){!this.isDropzoneDisabled()&&t.target&&(this.checkFiles(t.target.files||[]),this.resetFileInput())}checkFiles(t){for(let n=0;n<t.length;n++){const o=t[n];let i=null;if(this.canGetAsEntry(o)&&(i=o.webkitGetAsEntry()),i)if(i.isFile){const u=new h(i.name,i);this.addToQueue(u)}else i.isDirectory&&this.traverseFileTree(i,i.name);else if(o){const u={name:o.name,isDirectory:!1,isFile:!0,file:c=>c(o)},p=new h(u.name,u);this.addToQueue(p)}}this.dropEventTimerSubscription&&this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=function C(l=0,r,t){let n=-1;return m(r)?n=Number(r)<1?1:Number(r):(0,T.K)(r)&&(t=r),(0,T.K)(t)||(t=S.P),new F.y(o=>{const i=m(l)?l:+l-t.now();return t.schedule(x,i,{index:0,period:n,subscriber:o})})}(200,200).subscribe(()=>{if(this.files.length>0&&0===this.numOfActiveReadEntries){const n=this.files;this.files=[],this.onFileDrop.emit(n)}})}traverseFileTree(t,n){if(t.isFile){const o=new h(n,t);this.files.push(o)}else{n+="/";const o=t.createReader();let i=[];const u=()=>{this.numOfActiveReadEntries++,o.readEntries(p=>{if(p.length)i=i.concat(p),u();else if(0===i.length){const c=new h(n,t);this.zone.run(()=>{this.addToQueue(c)})}else for(let c=0;c<i.length;c++)this.zone.run(()=>{this.traverseFileTree(i[c],n+i[c].name)});this.numOfActiveReadEntries--})};u()}}resetFileInput(){if(this.fileSelector&&this.fileSelector.nativeElement){const t=this.fileSelector.nativeElement,n=t.parentElement,o=this.getHelperFormElement(),i=this.getFileInputPlaceholderElement();n!==o&&(this.renderer.insertBefore(n,i,t),this.renderer.appendChild(o,t),o.reset(),this.renderer.insertBefore(n,t,i),this.renderer.removeChild(n,i))}}getHelperFormElement(){return this.helperFormEl||(this.helperFormEl=this.renderer.createElement("form")),this.helperFormEl}getFileInputPlaceholderElement(){return this.fileInputPlaceholderEl||(this.fileInputPlaceholderEl=this.renderer.createElement("div")),this.fileInputPlaceholderEl}canGetAsEntry(t){return!!t.webkitGetAsEntry}isDropzoneDisabled(){return this.globalDraggingInProgress||this.disabled}addToQueue(t){this.files.push(t)}preventAndStop(t){t.stopPropagation(),t.preventDefault()}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(e.R0b),e.Y36(e.Qsj))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ngx-file-drop"]],contentQueries:function(t,n,o){if(1&t&&e.Suo(o,O,5,e.Rgc),2&t){let i;e.iGM(i=e.CRH())&&(n.contentTemplate=i.first)}},viewQuery:function(t,n){if(1&t&&e.Gf(E,7),2&t){let o;e.iGM(o=e.CRH())&&(n.fileSelector=o.first)}},inputs:{accept:"accept",directory:"directory",multiple:"multiple",dropZoneLabel:"dropZoneLabel",dropZoneClassName:"dropZoneClassName",useDragEnter:"useDragEnter",contentClassName:"contentClassName",showBrowseBtn:"showBrowseBtn",browseBtnClassName:"browseBtnClassName",browseBtnLabel:"browseBtnLabel",disabled:"disabled"},outputs:{onFileDrop:"onFileDrop",onFileOver:"onFileOver",onFileLeave:"onFileLeave"},decls:7,vars:15,consts:[[3,"className","drop","dragover","dragenter","dragleave"],[3,"className"],["type","file",1,"ngx-file-drop__file-input",3,"accept","multiple","change"],["fileSelector",""],["defaultContentTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ngx-file-drop__drop-zone-label",4,"ngIf"],[4,"ngIf"],[1,"ngx-file-drop__drop-zone-label"],["type","button",3,"className","value","click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.NdJ("drop",function(i){return n.dropFiles(i)})("dragover",function(i){return n.onDragOver(i)})("dragenter",function(i){return n.onDragEnter(i)})("dragleave",function(i){return n.onDragLeave(i)}),e.TgZ(1,"div",1)(2,"input",2,3),e.NdJ("change",function(i){return n.uploadFiles(i)}),e.qZA(),e.YNc(4,L,2,2,"ng-template",null,4,e.W1O),e.YNc(6,I,0,0,"ng-template",5),e.qZA()()),2&t){const o=e.MAs(5);e.ekj("ngx-file-drop__drop-zone--over",n.isDraggingOverDropZone),e.Q6J("className",n.dropZoneClassName),e.xp6(1),e.Q6J("className",n.contentClassName),e.xp6(1),e.Q6J("accept",n.accept)("multiple",n.multiple),e.uIk("directory",n.directory||void 0)("webkitdirectory",n.directory||void 0)("mozdirectory",n.directory||void 0)("msdirectory",n.directory||void 0)("odirectory",n.directory||void 0),e.xp6(4),e.Q6J("ngTemplateOutlet",n.contentTemplate||o)("ngTemplateOutletContext",e.VKq(13,w,n.openFileSelector))}},dependencies:[d.O5,d.tP],styles:[".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{border:2px dotted #0782d0;border-radius:30px;height:100px;margin:auto}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:hsla(0,0%,57.6%,.5)}.ngx-file-drop__content[_ngcontent-%COMP%]{align-items:center;color:#0782d0;display:flex;height:100px;justify-content:center}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]}),l})(),M=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l,bootstrap:function(){return[A]}}),l.\u0275inj=e.cJS({imports:[d.ez]}),l})(),B=(()=>{class l{constructor(t,n,o,i,u,p,c,Q,G){this.settingsService=t,this.alertController=n,this.translate=o,this.toastController=i,this.translateService=u,this.loadingController=p,this.router=c,this.httpService=Q,this.logService=G,this.files=[],this.spmldropExpanded=!1}installedPuddlesNames(){}upload(t){this.settingsService.loadFile(t.target.files[0])}next(){return this.router.navigateByUrl("/edit")}ngOnInit(){var t=this;return(0,g.Z)(function*(){t.UILanguage=yield t.currentUILanguage(),t.settingsService.setFirstTime(),t.installedPuddlesNames()})()}dropped(t){var n=this;this.files=t;for(const o of t)o.fileEntry.isFile&&o.fileEntry.file(function(){var u=(0,g.Z)(function*(p){o&&o.relativePath&&o.relativePath.toLowerCase().endsWith(".spml")&&(yield n.presentLoading(),yield n.settingsService.loadFile(p))});return function(p){return u.apply(this,arguments)}}())}fileOver(t){return(0,g.Z)(function*(){})()}fileLeave(t){}clearSigns(){var t=this;return(0,g.Z)(function*(){yield(yield t.alertController.create({header:t.translate.instant("Clear Signs!"),message:t.translate.instant("Do you <strong>really</strong> want to delete all the signs!!!"),buttons:[{text:t.translate.instant("No"),role:"cancel",cssClass:"secondary",handler:o=>{}},{text:t.translate.instant("Yes"),handler:()=>{t.settingsService.removeAllSigns(),t.logService.AddLog("Removed all Signs")}}]})).present()})()}onLanguageChange(t){this.settingsService.setUILanguage(t.detail.value),this.UILanguage=t.detail.value}currentUILanguage(){var t=this;return(0,g.Z)(function*(){return(yield t.settingsService.getUILanguage())||"en"})()}downloadPuddle(){var t=this;return(0,g.Z)(function*(){yield t.showToast(t.translateService.instant("Downloading"),3e3),yield t.showToast(t.translateService.instant("This may take a few minutes"),3e3),yield t.presentLoading(),t.xhrDownloadPuddle()})()}xhrDownloadPuddle(){var t=this;try{let n=0;n=parseInt(this.puddleID,10),isNaN(n)&&(n=4),this.httpService.GetPuddle(n.toString()).subscribe(function(){var o=(0,g.Z)(function*(i){try{yield t.settingsService.loadPuddle(i.toString()),t.logService.AddLog(`Loaded Puddle ${t.puddleID}`),yield t.signsLoaded()}catch(u){console.log(u)}});return function(i){return o.apply(this,arguments)}}())}catch(n){console.log(n)}}signsLoaded(){var t=this;return(0,g.Z)(function*(){yield t.loading.dismiss()})()}onPuddleChange(t){this.puddleID=t.detail.value,this.downloadPuddle()}showToast(t,n){var o=this;return(0,g.Z)(function*(){(yield o.toastController.create({message:t,duration:n})).present()})()}expandItem(){D.dV.isNativePlatform()&&(this.spmldropExpanded=!this.spmldropExpanded)}presentLoading(){var t=this;return(0,g.Z)(function*(){t.loading=yield t.loadingController.create({message:"Please wait...",backdropDismiss:!1}),t.loading.present()})()}presentLoadingWithOptions(){var t=this;return(0,g.Z)(function*(){t.loading=yield t.loadingController.create({spinner:null,duration:5e3,message:"Click the backdrop to dismiss early...",translucent:!0,cssClass:"custom-class custom-loading",backdropDismiss:!0}),yield t.loading.present();const{role:n}=yield t.loading.onDidDismiss();console.log("Loading dismissed with role:",n)})()}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(U.g),e.Y36(s.Br),e.Y36(f.sK),e.Y36(s.yF),e.Y36(f.sK),e.Y36(s.HT),e.Y36(_.F0),e.Y36(y.O),e.Y36(q.$))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-settings"]],decls:239,vars:28,consts:[["color","navy"],["slot","start"],["padding","padding"],["interface","popover",3,"ngModel","ionChange","ngModelChange"],["value","ca"],["value","cs"],["value","de"],["value","en"],["value","eo"],["value","es"],["value","fr"],["value","ko"],["value","mt"],["value","nl"],["value","no"],["value","pl"],["value","pt"],["value","sl"],["value","zh"],[1,"hr-margin-bottom","hr-black"],["value","106"],["value","82"],["value","41"],["value","4"],["value","29"],["value","42"],["value","43"],["value","44"],["value","134"],["value","45"],["value","46"],["value","47"],["value","48"],["value","49"],["value","50"],["value","135"],["value","83"],["value","51"],["value","52"],["value","53"],["value","30"],["value","136"],["value","109"],["value","84"],["value","54"],["value","55"],["value","56"],["value","18"],["value","57"],["value","58"],["value","59"],["value","60"],["value","61"],["value","112"],["value","16"],["value","113"],["value","122"],["value","62"],["value","110"],["value","2"],["value","131"],["value","63"],["value","86"],["value","64"],["value","79"],["value","78"],["value","107"],["value","108"],["value","31"],["value","128"],["value","65"],["value","66"],["value","32"],["value","67"],["value","68"],["value","69"],["value","133"],["value","70"],["value","71"],["value","72"],["value","87"],["value","19"],["value","33"],["value","129"],["value","132"],["value","88"],["value","40"],["value","73"],["value","11"],["value","89"],["value","137"],["value","34"],["value","104"],["value","90"],["value","75"],["value","143"],["value","76"],["value","153"],["value","35"],["value","77"],[3,"click"],["height","200px;"],[1,"center"],[3,"dropZoneLabel","onFileDrop","onFileOver","onFileLeave"],["type","file",3,"change"],["color","orange",3,"click"],["horizontal","end","slot","fixed","vertical","bottom"],["color","green"],["name","caret-forward-circle-outline",2,"zoom","2.0",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.TgZ(7,"ion-content",2)(8,"ion-item")(9,"ion-label"),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"ion-select",3),e.NdJ("ionChange",function(i){return n.onLanguageChange(i)})("ngModelChange",function(i){return n.UILanguage=i}),e.TgZ(13,"ion-select-option",4),e._uU(14,"catal\xe0"),e.qZA(),e.TgZ(15,"ion-select-option",5),e._uU(16,"\u010de\u0161tina"),e.qZA(),e.TgZ(17,"ion-select-option",6),e._uU(18,"Deutsche"),e.qZA(),e.TgZ(19,"ion-select-option",7),e._uU(20,"English"),e.qZA(),e.TgZ(21,"ion-select-option",8),e._uU(22,"esperanto"),e.qZA(),e.TgZ(23,"ion-select-option",9),e._uU(24,"espa\xf1ol"),e.qZA(),e.TgZ(25,"ion-select-option",10),e._uU(26,"fran\xe7ais"),e.qZA(),e.TgZ(27,"ion-select-option",11),e._uU(28,"\ud55c\uad6d\uc5b4"),e.qZA(),e.TgZ(29,"ion-select-option",12),e._uU(30,"maltin"),e.qZA(),e.TgZ(31,"ion-select-option",13),e._uU(32,"Nederlands"),e.qZA(),e.TgZ(33,"ion-select-option",14),e._uU(34,"norsk"),e.qZA(),e.TgZ(35,"ion-select-option",15),e._uU(36,"Polskie"),e.qZA(),e.TgZ(37,"ion-select-option",16),e._uU(38,"portugu\xeas"),e.qZA(),e.TgZ(39,"ion-select-option",17),e._uU(40,"Sloven\u0161\u010dina"),e.qZA(),e.TgZ(41,"ion-select-option",18),e._uU(42,"\u4e2d\u6587"),e.qZA()()(),e._UZ(43,"hr",19),e.TgZ(44,"ion-list")(45,"ion-item")(46,"ion-label"),e._uU(47),e.ALo(48,"translate"),e.qZA(),e.TgZ(49,"ion-select",3),e.NdJ("ionChange",function(i){return n.onPuddleChange(i)})("ngModelChange",function(i){return n.puddleID=i}),e.TgZ(50,"ion-select-option",20),e._uU(51,"Afghanistan"),e.qZA(),e.TgZ(52,"ion-select-option",21),e._uU(53,"Albania"),e.qZA(),e.TgZ(54,"ion-select-option",22),e._uU(55,"Argentina"),e.qZA(),e.TgZ(56,"ion-select-option",23),e._uU(57,"ASL - USA & Canada"),e.qZA(),e.TgZ(58,"ion-select-option",24),e._uU(59,"AT"),e.qZA(),e.TgZ(60,"ion-select-option",25),e._uU(61,"Australia"),e.qZA(),e.TgZ(62,"ion-select-option",26),e._uU(63,"French Belgium"),e.qZA(),e.TgZ(64,"ion-select-option",27),e._uU(65,"Flanders, Belgium"),e.qZA(),e.TgZ(66,"ion-select-option",28),e._uU(67,"Bulgaria"),e.qZA(),e.TgZ(68,"ion-select-option",29),e._uU(69,"Bolivia"),e.qZA(),e.TgZ(70,"ion-select-option",30),e._uU(71,"LIBRAS - Brazil"),e.qZA(),e.TgZ(72,"ion-select-option",31),e._uU(73,"Quebec"),e.qZA(),e.TgZ(74,"ion-select-option",32),e._uU(75,"German Switzerland"),e.qZA(),e.TgZ(76,"ion-select-option",33),e._uU(77,"French-Switzerland"),e.qZA(),e.TgZ(78,"ion-select-option",34),e._uU(79,"CH-it"),e.qZA(),e.TgZ(80,"ion-select-option",35),e._uU(81,"Chile"),e.qZA(),e.TgZ(82,"ion-select-option",36),e._uU(83,"China"),e.qZA(),e.TgZ(84,"ion-select-option",37),e._uU(85,"Colombia"),e.qZA(),e.TgZ(86,"ion-select-option",38),e._uU(87,"Czech Republic"),e.qZA(),e.TgZ(88,"ion-select-option",39),e._uU(89,"Deutschland, Germany"),e.qZA(),e.TgZ(90,"ion-select-option",40),e._uU(91,"Denmark"),e.qZA(),e.TgZ(92,"ion-select-option",41),e._uU(93,"Ecuador"),e.qZA(),e.TgZ(94,"ion-select-option",42),e._uU(95,"Estonia"),e.qZA(),e.TgZ(96,"ion-select-option",43),e._uU(97,"Egypt"),e.qZA(),e.TgZ(98,"ion-select-option",44),e._uU(99,"Vortaro"),e.qZA(),e.TgZ(100,"ion-select-option",45),e._uU(101,"Espa\xf1a, Spain"),e.qZA(),e.TgZ(102,"ion-select-option",46),e._uU(103,"Catalonia, Barcelona"),e.qZA(),e.TgZ(104,"ion-select-option",47),e._uU(105,"Ethiopia"),e.qZA(),e.TgZ(106,"ion-select-option",48),e._uU(107,"Finland"),e.qZA(),e.TgZ(108,"ion-select-option",49),e._uU(109,"France"),e.qZA(),e.TgZ(110,"ion-select-option",50),e._uU(111,"Great Britain"),e.qZA(),e.TgZ(112,"ion-select-option",51),e._uU(113,"Northern Ireland"),e.qZA(),e.TgZ(114,"ion-select-option",52),e._uU(115,"Greece"),e.qZA(),e.TgZ(116,"ion-select-option",53),e._uU(117,"Guatemala"),e.qZA(),e.TgZ(118,"ion-select-option",54),e._uU(119,"LESHO - Honduras"),e.qZA(),e.TgZ(120,"ion-select-option",55),e._uU(121,"Haiti"),e.qZA(),e.TgZ(122,"ion-select-option",56),e._uU(123,"Hungary"),e.qZA(),e.TgZ(124,"ion-select-option",57),e._uU(125,"Ireland"),e.qZA(),e.TgZ(126,"ion-select-option",58),e._uU(127,"Israel"),e.qZA(),e.TgZ(128,"ion-select-option",59),e._uU(129,"India"),e.qZA(),e.TgZ(130,"ion-select-option",60),e._uU(131,"IS"),e.qZA(),e.TgZ(132,"ion-select-option",61),e._uU(133,"IT"),e.qZA(),e.TgZ(134,"ion-select-option",62),e._uU(135,"Jordan"),e.qZA(),e.TgZ(136,"ion-select-option",63),e._uU(137,"Japan"),e.qZA(),e.TgZ(138,"ion-select-option",64),e._uU(139,"Kenya"),e.qZA(),e.TgZ(140,"ion-select-option",65),e._uU(141,"Korea"),e.qZA(),e.TgZ(142,"ion-select-option",66),e._uU(143,"Lithuania"),e.qZA(),e.TgZ(144,"ion-select-option",67),e._uU(145,"Latvia"),e.qZA(),e.TgZ(146,"ion-select-option",59),e._uU(147,"Myanmar"),e.qZA(),e.TgZ(148,"ion-select-option",68),e._uU(149,"Malta"),e.qZA(),e.TgZ(150,"ion-select-option",69),e._uU(151,"Malawi"),e.qZA(),e.TgZ(152,"ion-select-option",70),e._uU(153,"Malawi Mexico"),e.qZA(),e.TgZ(154,"ion-select-option",71),e._uU(155,"Malaysia"),e.qZA(),e.TgZ(156,"ion-select-option",72),e._uU(157,"Nigeria"),e.qZA(),e.TgZ(158,"ion-select-option",73),e._uU(159,"Nicaragua"),e.qZA(),e.TgZ(160,"ion-select-option",74),e._uU(161,"NL"),e.qZA(),e.TgZ(162,"ion-select-option",75),e._uU(163,"Norge, Norway"),e.qZA(),e.TgZ(164,"ion-select-option",76),e._uU(165,"Nepal"),e.qZA(),e.TgZ(166,"ion-select-option",77),e._uU(167,"New Zealand"),e.qZA(),e.TgZ(168,"ion-select-option",78),e._uU(169,"Diccionario Peru"),e.qZA(),e.TgZ(170,"ion-select-option",79),e._uU(171,"Philippines"),e.qZA(),e.TgZ(172,"ion-select-option",80),e._uU(173,"Pakistan"),e.qZA(),e.TgZ(174,"ion-select-option",81),e._uU(175,"Poland"),e.qZA(),e.TgZ(176,"ion-select-option",82),e._uU(177,"Portugal"),e.qZA(),e.TgZ(178,"ion-select-option",83),e._uU(179,"Paraguay"),e.qZA(),e.TgZ(180,"ion-select-option",84),e._uU(181,"Romania"),e.qZA(),e.TgZ(182,"ion-select-option",85),e._uU(183,"Russia"),e.qZA(),e.TgZ(184,"ion-select-option",86),e._uU(185,"Kingdom Saudi Arabia"),e.qZA(),e.TgZ(186,"ion-select-option",87),e._uU(187,"Sverige"),e.qZA(),e.TgZ(188,"ion-select-option",88),e._uU(189,"SgSL Singapore Sign Language"),e.qZA(),e.TgZ(190,"ion-select-option",89),e._uU(191,"Slovakia"),e.qZA(),e.TgZ(192,"ion-select-option",87),e._uU(193,"Sverige"),e.qZA(),e.TgZ(194,"ion-select-option",90),e._uU(195,"El Salvador"),e.qZA(),e.TgZ(196,"ion-select-option",91),e._uU(197,"Thailand"),e.qZA(),e.TgZ(198,"ion-select-option",92),e._uU(199,"Tunisia"),e.qZA(),e.TgZ(200,"ion-select-option",93),e._uU(201,"Turkey"),e.qZA(),e.TgZ(202,"ion-select-option",94),e._uU(203,"Taiwan"),e.qZA(),e.TgZ(204,"ion-select-option",95),e._uU(205,"Uruguay"),e.qZA(),e.TgZ(206,"ion-select-option",96),e._uU(207,"Venezuela"),e.qZA(),e.TgZ(208,"ion-select-option",97),e._uU(209,"Vietnam"),e.qZA(),e.TgZ(210,"ion-select-option",98),e._uU(211),e.ALo(212,"translate"),e.qZA(),e.TgZ(213,"ion-select-option",99),e._uU(214,"South Africa"),e.qZA()()()(),e._UZ(215,"hr",19),e.TgZ(216,"ion-list")(217,"ion-list-header",100),e.NdJ("click",function(){return n.expandItem()}),e.TgZ(218,"ion-label"),e._uU(219),e.ALo(220,"translate"),e.qZA()(),e.TgZ(221,"ion-item",101)(222,"div",102)(223,"ngx-file-drop",103),e.NdJ("onFileDrop",function(i){return n.dropped(i)})("onFileOver",function(i){return n.fileOver(i)})("onFileLeave",function(i){return n.fileLeave(i)}),e.ALo(224,"translate"),e.qZA(),e.TgZ(225,"input",104),e.NdJ("change",function(i){return n.upload(i)}),e.qZA()()(),e._UZ(226,"hr",19),e.qZA(),e.TgZ(227,"ion-item")(228,"div")(229,"ion-button",105),e.NdJ("click",function(){return n.clearSigns()}),e._uU(230),e.ALo(231,"translate"),e.qZA()()(),e._UZ(232,"hr",19),e.TgZ(233,"ion-fab",106)(234,"ion-label"),e._uU(235),e.ALo(236,"translate"),e.qZA(),e.TgZ(237,"ion-fab-button",107)(238,"ion-icon",108),e.NdJ("click",function(){return n.next()}),e.qZA()()()()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,12,"Settings")),e.xp6(5),e.Oqu(e.lcZ(11,14,"UI Language")),e.xp6(2),e.Q6J("ngModel",n.UILanguage),e.xp6(35),e.Oqu(e.lcZ(48,16,"Install Signs from SignLanguage Puddle")),e.xp6(2),e.Q6J("ngModel",n.puddleID),e.xp6(162),e.Oqu(e.lcZ(212,18,"Signs Used Worldwide")),e.xp6(8),e.Oqu(e.lcZ(220,20,"Install with SPML File")),e.xp6(2),e.ekj("collapsed",!n.spmldropExpanded),e.xp6(2),e.s9C("dropZoneLabel",e.lcZ(224,22,"Drop SPML file here to add signs")),e.xp6(7),e.hij(" ",e.lcZ(231,24,"Clear All Signs")," "),e.xp6(5),e.Oqu(e.lcZ(236,26,"Next")))},dependencies:[Z.JJ,Z.On,s.YG,s.Sm,s.W2,s.IJ,s.W4,s.Gu,s.gu,s.Ie,s.Q$,s.q_,s.yh,s.fG,s.t9,s.n0,s.wd,s.sr,s.QI,A,f.X$],styles:[".hr-margin-bottom[_ngcontent-%COMP%]{margin-bottom:16px}.hr-black[_ngcontent-%COMP%]{border:0;clear:both;display:block;width:96%;background-color:#000;height:1px}.collapsed[_ngcontent-%COMP%]{height:0!important}"]}),l})();var k=a(4466);const z=[{path:"",component:B}];let J=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[d.ez,Z.u5,s.Pc,_.Bz.forChild(z),M,k.m]}),l})()}}]);