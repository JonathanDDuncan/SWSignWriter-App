(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1868],{1868:(U,P,l)=>{"use strict";l.r(P),l.d(P,{ViewPageModule:()=>m});var S=l(6895),p=l(4719),f=l(9990),r=l(603),g=l(5861),v=l(8940),u=l(1482),F=l(9441),w=l(1093),i=l(5362),e=l(4650),h=l(9331),s=l(7171);let d=(()=>{class c{constructor(){}utils(){return{getUserAgent:function(){return navigator.userAgent},Android:function(){return/Android/i.test(this.getUserAgent())&&!this.Windows()},BlackBerry:function(){return/BlackBerry|BB10|PlayBook/i.test(this.getUserAgent())},iPhone:function(){return/iPhone/i.test(this.getUserAgent())&&!this.iPad()&&!this.Windows()},iPod:function(){return/iPod/i.test(this.getUserAgent())},iPad:function(){return/iPad/i.test(this.getUserAgent())},iOS:function(){return this.iPad()||this.iPod()||this.iPhone()},Opera:function(){return/Opera Mini/i.test(this.getUserAgent())},Windows:function(){return/Windows Phone|IEMobile|WPDesktop/i.test(this.getUserAgent())},KindleFire:function(){return/Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(this.getUserAgent())},any:function(){return this.Android()||this.BlackBerry()||this.iOS()||this.Opera()||this.Windows()}}}}return c.\u0275fac=function(t){return new(t||c)},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();var W=l(3263);let C=(()=>{class c{constructor(t,n,o,a,b,x,O,L,E){this.modalController=t,this.toastController=n,this.documentService=o,this.translate=a,this.btUtil=b,this.router=x,this.platform=O,this.logService=L,this.datePipe=E,this.imageheight=900,this.preloadFonts=ssw.paragraph("M547x518S2ff00482x483S11911518x488S26600531x451"),this.router.events.subscribe(M=>{if(M instanceof f.OD){const D=this.documentService.getFSW();this.document=ssw.paragraph(D),this.imageheight=200}})}ionViewWillEnter(){const t=this.documentService.getFSW();this.document=ssw.paragraph(t)}share1(){const t=this.documentService.getFSW();this.document=ssw.paragraph(t),requestAnimationFrame(()=>this.sharecontinuation1(t))}share(){var t=this;return(0,g.Z)(function*(){const n=t.documentService.getFSW();t.btUtil.utils(),n&&null!==n&&(yield t.logService.AddLog("User Shared SW"),t.platform.is("android")?yield t.ShareAndroid(n):t.platform.is("ios")||t.platform.is("ipad")||t.platform.is("iphone")?yield t.ShareIOS(n):yield t.ShareDesktop(n))})()}subtitles(){var t=this;return(0,g.Z)(function*(){const n=t.documentService.getFSW(),o=ssw.parse(n,"fsw",!0);if(!o)return void t.presentToast("No content to process");const a=t.CreateSubtitles(o.all);if(a&&null!==a)if(yield t.logService.AddLog("User Subtitles SW"),t.platform.is("android"))yield t.ShareAndroid(a);else if(t.platform.is("ios")||t.platform.is("ipad")||t.platform.is("iphone"))yield t.ShareIOS(a);else{var b=new Blob([a],{type:"text/plain;charset=utf-8"});(0,F.saveAs)(b,"subtitles.vtt")}})()}CreateSubtitles(t){let n="WEBVTT\n\n";var o=new Date((new Date).setHours(0,0,0,0));for(let a=0;a<t.length;a++){const b=ssw.fsw2swu(t[a]);n+=`${this.datePipe.transform(o,"mm:ss.SSS")} --\x3e `,o.setMilliseconds(o.getMilliseconds()+500),n+=`${this.datePipe.transform(o,"mm:ss.SSS")}\n`,n+=`<c.Sgnw>${b}</c>\n\n`}return n}presentToast(t){var n=this;return(0,g.Z)(function*(){(yield n.toastController.create({message:t,duration:2e3})).present()})()}ShareIOS(t){var n=this;return(0,g.Z)(function*(){const o=getSignTextCanvas(t,20,n.imageheight);n.AddLink(o);const a=yield n.modalController.create({component:w.y,componentProps:{canvas:o,imagebase64:o.toDataURL("image/png")}});yield a.present(),yield a.onDidDismiss()})()}AddLink(t){const n=this.tempCanvas(t),o=this.reSizeCanvas(t,n);o.font="30px Arial",o.fillStyle="blue",o.textAlign="center",o.fillText("SWSW SwSignWriter.jonathanduncan.pro",t.width/2,t.height-10)}reSizeCanvas(t,n){t.height+=35;const o=t.getContext("2d");return o.fillStyle="white",o.fillRect(0,0,t.width,t.height),o.drawImage(n,0,0),o}tempCanvas(t){const n=document.createElement("canvas"),o=n.getContext("2d");return n.width=t.width,n.height=t.height,o.fillStyle="white",o.fillRect(0,0,t.width,t.height),o.drawImage(t,0,0),n}ShareAndroid(t){var n=this;return(0,g.Z)(function*(){const o=getSignTextCanvas(t,20,n.imageheight);n.AddLink(o);const a=yield n.modalController.create({component:u.W,componentProps:{canvas:o,imagebase64:o.toDataURL("image/png")}});yield a.present(),yield a.onDidDismiss()})()}ShareDesktop(t){var n=this;return(0,g.Z)(function*(){const o=getSignTextCanvas(t,20,n.imageheight);n.AddLink(o);const a=yield n.modalController.create({component:v.L,componentProps:{canvas:o,imagebase64:o.toDataURL("image/png")}});yield a.present(),yield a.onDidDismiss()})()}heightChange(t){this.signtextHeight=t.detail.value}edit(){return this.router.navigateByUrl("/edit")}sharecontinuation1(t){return(0,g.Z)(function*(){})()}isCordova(){return!!window.cordova}}return c.\u0275fac=function(t){return new(t||c)(e.Y36(r.IN),e.Y36(r.yF),e.Y36(h.Z),e.Y36(s.sK),e.Y36(d),e.Y36(f.F0),e.Y36(r.t4),e.Y36(i.$),e.Y36(S.uU))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-view"]],decls:43,vars:21,consts:[["color","navy"],["slot","start"],["id","document",1,"document"],[1,"signtext"],[3,"innerHTML"],["id","canvas",1,"ion-hide"],[1,"preloadFonts","ion-hide",3,"innerHTML"],["horizontal","end","slot","fixed","vertical","bottom",1,"ion-text-center"],["color","green",3,"click"],["name","code",2,"zoom","1.5"],["color","green",1,"mb-10"],["name","create",2,"zoom","1.5",3,"click"],["name","share",2,"zoom","1.5"],[1,"mt-10"],[1,"ion-justify-content-center"],["min","50","max","900","step","10","pin","true",3,"ngModel","ngModelChange","ionChange"],["size","small","slot","start","name","resize"],["slot","end","name","resize"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.TgZ(7,"ion-content")(8,"div",2)(9,"div",3),e._UZ(10,"span",4),e.ALo(11,"safeHtml"),e.qZA()(),e._UZ(12,"canvas",5)(13,"span",6),e.ALo(14,"safeHtml"),e.qZA(),e.TgZ(15,"ion-footer")(16,"div")(17,"ion-fab",7)(18,"ion-label"),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"ion-fab-button",8),e.NdJ("click",function(){return n.subtitles()}),e._UZ(22,"ion-icon",9),e.qZA(),e.TgZ(23,"ion-label"),e._uU(24,"Edit"),e.qZA(),e.TgZ(25,"ion-fab-button",10)(26,"ion-icon",11),e.NdJ("click",function(){return n.edit()}),e.qZA()(),e.TgZ(27,"ion-label"),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"ion-fab-button",8),e.NdJ("click",function(){return n.share()}),e._UZ(31,"ion-icon",12),e.qZA()()(),e.TgZ(32,"ion-toolbar")(33,"ion-item",13)(34,"ion-grid")(35,"ion-row",14)(36,"ion-label"),e._uU(37),e.ALo(38,"translate"),e.qZA()(),e.TgZ(39,"ion-row")(40,"ion-range",15),e.NdJ("ngModelChange",function(a){return n.imageheight=a})("ionChange",function(a){return n.heightChange(a)}),e._UZ(41,"ion-icon",16)(42,"ion-icon",17),e.qZA()()()()()()),2&t&&(e.xp6(5),e.hij(" ",e.lcZ(6,9,"Document")," "),e.xp6(4),e.Udp("height",n.signtextHeight,"px"),e.xp6(1),e.Q6J("innerHTML",e.lcZ(11,11,n.document),e.oJD),e.xp6(3),e.Q6J("innerHTML",e.lcZ(14,13,n.preloadFonts),e.oJD),e.xp6(6),e.Oqu(e.lcZ(20,15,"Subtitles")),e.xp6(9),e.Oqu(e.lcZ(29,17,"Export")),e.xp6(9),e.Oqu(e.lcZ(38,19,"Image height")),e.xp6(3),e.Q6J("ngModel",n.imageheight))},dependencies:[p.JJ,p.On,r.Sm,r.W2,r.IJ,r.W4,r.fr,r.jY,r.Gu,r.gu,r.Ie,r.Q$,r.fG,r.I_,r.Nd,r.wd,r.sr,r.QI,W.z,s.X$],styles:[".document[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto}.document[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:100%}.preloadFonts[_ngcontent-%COMP%]{width:0px;height:0px;display:inline-block;overflow:hidden}ion-range[_ngcontent-%COMP%]{padding-top:0}.mb-10[_ngcontent-%COMP%]{margin-bottom:10px}.mt-10[_ngcontent-%COMP%]{margin-top:10px}.ion-hide[_ngcontent-%COMP%]{display:none}ion-fab[_ngcontent-%COMP%]{bottom:100px}"]}),c})();var y=l(5503),Z=l(4466);const T=[{path:"",component:C}];let m=(()=>{class c{}return c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[S.ez,p.u5,r.Pc,f.Bz.forChild(T),y.D,Z.m]}),c})()},9441:function(U,P){var p;void 0!==(p=function(){"use strict";function r(i,e,h){var s=new XMLHttpRequest;s.open("GET",i),s.responseType="blob",s.onload=function(){w(s.response,e,h)},s.onerror=function(){console.error("could not download file")},s.send()}function g(i){var e=new XMLHttpRequest;e.open("HEAD",i,!1);try{e.send()}catch{}return 200<=e.status&&299>=e.status}function v(i){try{i.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),i.dispatchEvent(e)}}var u="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,F=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),w=u.saveAs||("object"!=typeof window||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!F?function(i,e,h){var s=u.URL||u.webkitURL,d=document.createElement("a");d.download=e=e||i.name||"download",d.rel="noopener","string"==typeof i?(d.href=i,d.origin===location.origin?v(d):g(d.href)?r(i,e,h):v(d,d.target="_blank")):(d.href=s.createObjectURL(i),setTimeout(function(){s.revokeObjectURL(d.href)},4e4),setTimeout(function(){v(d)},0))}:"msSaveOrOpenBlob"in navigator?function(i,e,h){if(e=e||i.name||"download","string"!=typeof i)navigator.msSaveOrOpenBlob(function f(i,e){return typeof e>"u"?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)?new Blob(["\ufeff",i],{type:i.type}):i}(i,h),e);else if(g(i))r(i,e,h);else{var s=document.createElement("a");s.href=i,s.target="_blank",setTimeout(function(){v(s)})}}:function(i,e,h,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof i)return r(i,e,h);var d="application/octet-stream"===i.type,W=/constructor/i.test(u.HTMLElement)||u.safari,C=/CriOS\/[\d]+/.test(navigator.userAgent);if((C||d&&W||F)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var m=y.result;m=C?m:m.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=m:location=m,s=null},y.readAsDataURL(i)}else{var Z=u.URL||u.webkitURL,T=Z.createObjectURL(i);s?s.location=T:location.href=T,s=null,setTimeout(function(){Z.revokeObjectURL(T)},4e4)}});u.saveAs=w.saveAs=w,U.exports=w}.apply(P,[]))&&(U.exports=p)}}]);