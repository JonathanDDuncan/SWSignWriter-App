!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"B4v+":function(t,i,r){"use strict";r.r(i),r.d(i,"ViewPageModule",function(){return C});var a,o,s,c=r("ofXK"),u=r("3Pt+"),h=r("tyNb"),d=r("TEn/"),g=r("HaE+"),l=r("fXoL"),b=((a=function(){function t(){e(this,t)}return n(t,[{key:"utils",value:function(){return{getUserAgent:function(){return navigator.userAgent},Android:function(){return/Android/i.test(this.getUserAgent())&&!this.Windows()},BlackBerry:function(){return/BlackBerry|BB10|PlayBook/i.test(this.getUserAgent())},iPhone:function(){return/iPhone/i.test(this.getUserAgent())&&!this.iPad()&&!this.Windows()},iPod:function(){return/iPod/i.test(this.getUserAgent())},iPad:function(){return/iPad/i.test(this.getUserAgent())},iOS:function(){return this.iPad()||this.iPod()||this.iPhone()},Opera:function(){return/Opera Mini/i.test(this.getUserAgent())},Windows:function(){return/Windows Phone|IEMobile|WPDesktop/i.test(this.getUserAgent())},KindleFire:function(){return/Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(this.getUserAgent())},any:function(){return this.Android()||this.BlackBerry()||this.iOS()||this.Opera()||this.Windows()}}}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275prov=l.Gb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),f=r("FTYq"),p=r("8AEQ"),m=r("HtUY"),v=r("2/4T"),w=r("HKhi"),k=r("FUe0"),S=r("KH6c"),A=r("sYmb"),x=r("ZJwn"),y=((o=function(){function t(n,i,r,a,o,s,c){var u=this;e(this,t),this.modalController=n,this.documentService=i,this.subscriptionServiceNG=r,this.subscriptionServiceAndroid=a,this.translate=o,this.btUtil=s,this.router=c,this.imageheight=900,this.preloadFonts=ssw.paragraph("M547x518S2ff00482x483S11911518x488S26600531x451"),this.router.events.subscribe(function(e){if(e instanceof h.d){var t=u.documentService.getFSW();u.document=ssw.paragraph(t),u.imageheight=200}}),this.subscriptionService=k.a.isNativePlatform()?a:r}return n(t,[{key:"ngOnInit",value:function(){this.subscriptionService.CanUse()}},{key:"ionViewWillEnter",value:function(){var e=this.documentService.getFSW();this.document=ssw.paragraph(e)}},{key:"share1",value:function(){var e=this,t=this.documentService.getFSW();this.document=ssw.paragraph(t),requestAnimationFrame(function(){return e.sharecontinuation1(t)})}},{key:"share",value:function(){var e=this;return Object(g.a)(regeneratorRuntime.mark(function t(){var n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.documentService.getFSW(),i=e.btUtil.utils(),t.t0=n&&null!==n,!t.t0){t.next=15;break}if(!i.Android()){t.next=8;break}return t.next=6,e.ShareAndroid(n);case 6:t.next=15;break;case 8:if(!(i.iOS()||i.iPad()||i.iPhone()||i.iPod())){t.next=13;break}return t.next=11,e.ShareIOS(n);case 11:t.next=15;break;case 13:return t.next=15,e.ShareDesktop(n);case 15:case"end":return t.stop()}},t)}))()}},{key:"ShareIOS",value:function(e){var t=this;return Object(g.a)(regeneratorRuntime.mark(function n(){var i,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=getSignTextCanvas(e,20,t.imageheight),t.AddLink(i),n.next=4,t.modalController.create({component:w.a,componentProps:{canvas:i,imagebase64:i.toDataURL("image/png")}});case 4:return r=n.sent,n.next=7,r.present();case 7:return n.next=9,r.onDidDismiss();case 9:case"end":return n.stop()}},n)}))()}},{key:"AddLink",value:function(e){var t=this.tempCanvas(e),n=this.reSizeCanvas(e,t);n.font="30px Arial",n.fillStyle="blue",n.textAlign="center",n.fillText("SWSW SwSignWriter.jonathanduncan.pro",e.width/2,e.height-10)}},{key:"reSizeCanvas",value:function(e,t){e.height+=35;var n=e.getContext("2d");return n.fillStyle="white",n.fillRect(0,0,e.width,e.height),n.drawImage(t,0,0),n}},{key:"tempCanvas",value:function(e){var t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.fillStyle="white",n.fillRect(0,0,e.width,e.height),n.drawImage(e,0,0),t}},{key:"ShareAndroid",value:function(e){var t=this;return Object(g.a)(regeneratorRuntime.mark(function n(){var i,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=getSignTextCanvas(e,20,t.imageheight),t.AddLink(i),n.next=4,t.modalController.create({component:p.a,componentProps:{canvas:i,imagebase64:i.toDataURL("image/png")}});case 4:return r=n.sent,n.next=7,r.present();case 7:return n.next=9,r.onDidDismiss();case 9:case"end":return n.stop()}},n)}))()}},{key:"ShareDesktop",value:function(e){var t=this;return Object(g.a)(regeneratorRuntime.mark(function n(){var i,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=getSignTextCanvas(e,20,t.imageheight),t.AddLink(i),n.next=4,t.modalController.create({component:f.a,componentProps:{canvas:i,imagebase64:i.toDataURL("image/png")}});case 4:return r=n.sent,n.next=7,r.present();case 7:return n.next=9,r.onDidDismiss();case 9:case"end":return n.stop()}},n)}))()}},{key:"heightChange",value:function(e){this.signtextHeight=e.detail.value}},{key:"edit",value:function(){return this.router.navigateByUrl("/edit")}},{key:"sharecontinuation1",value:function(e){return Object(g.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}))()}},{key:"isCordova",value:function(){return!!window.cordova}}]),t}()).\u0275fac=function(e){return new(e||o)(l.Kb(d.I),l.Kb(v.a),l.Kb(m.a),l.Kb(S.a),l.Kb(A.d),l.Kb(b),l.Kb(h.g))},o.\u0275cmp=l.Eb({type:o,selectors:[["app-view"]],decls:31,vars:18,consts:[["slot","start"],["justify-content-center",""],["min","50","max","900","step","10","pin","true",3,"ngModel","ngModelChange","ionChange"],["size","small","slot","start","name","resize"],["slot","end","name","resize"],["padding",""],["id","document",1,"document"],[1,"signtext"],[3,"innerHTML"],["horizontal","end","slot","fixed","vertical","bottom"],[3,"click"],["name","share",2,"zoom","2"],["id","canvas"],[1,"preloadFonts",3,"innerHTML"]],template:function(e,t){1&e&&(l.Nb(0,"ion-header"),l.Nb(1,"ion-toolbar"),l.Nb(2,"ion-buttons",0),l.Lb(3,"ion-menu-button"),l.Mb(),l.Nb(4,"ion-title"),l.pc(5),l.Yb(6,"translate"),l.Mb(),l.Nb(7,"ion-item"),l.Nb(8,"ion-grid"),l.Nb(9,"ion-row",1),l.Nb(10,"ion-label"),l.pc(11),l.Yb(12,"translate"),l.Mb(),l.Mb(),l.Nb(13,"ion-row"),l.Nb(14,"ion-range",2),l.Vb("ngModelChange",function(e){return t.imageheight=e})("ionChange",function(e){return t.heightChange(e)}),l.Lb(15,"ion-icon",3),l.Lb(16,"ion-icon",4),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Nb(17,"ion-content",5),l.Nb(18,"div",6),l.Nb(19,"div",7),l.Lb(20,"span",8),l.Yb(21,"safeHtml"),l.Mb(),l.Mb(),l.Nb(22,"ion-fab",9),l.Nb(23,"ion-label"),l.pc(24),l.Yb(25,"translate"),l.Mb(),l.Nb(26,"ion-fab-button",10),l.Vb("click",function(){return t.share()}),l.Lb(27,"ion-icon",11),l.Mb(),l.Mb(),l.Lb(28,"canvas",12),l.Lb(29,"span",13),l.Yb(30,"safeHtml"),l.Mb()),2&e&&(l.Ab(5),l.rc(" ",l.Zb(6,8,"Document")," "),l.Ab(6),l.qc(l.Zb(12,10,"Image height")),l.Ab(3),l.cc("ngModel",t.imageheight),l.Ab(5),l.mc("height",t.signtextHeight,"px"),l.Ab(1),l.cc("innerHTML",l.Zb(21,12,t.document),l.jc),l.Ab(4),l.qc(l.Zb(25,14,"Share")),l.Ab(5),l.cc("innerHTML",l.Zb(30,16,t.preloadFonts),l.jc))},directives:[d.l,d.E,d.e,d.s,d.D,d.n,d.k,d.y,d.o,d.w,d.M,u.d,u.e,d.m,d.g,d.h,d.i],pipes:[A.c,x.a],styles:[".document[_ngcontent-%COMP%]{width:100%;overflow:auto}.document[_ngcontent-%COMP%], .document[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:100%}.preloadFonts[_ngcontent-%COMP%]{width:0;height:0;display:inline-block;overflow:hidden}ion-range[_ngcontent-%COMP%]{padding-top:0}"]}),o),M=r("iTUp"),P=r("PCNd"),F=[{path:"",component:y}],C=((s=function t(){e(this,t)}).\u0275fac=function(e){return new(e||s)},s.\u0275mod=l.Ib({type:s}),s.\u0275inj=l.Hb({imports:[[c.c,u.a,d.F,h.j.forChild(F),M.a,P.a]]}),s)}}])}();