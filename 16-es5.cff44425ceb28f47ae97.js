!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{HCc4:function(n,r,i){"use strict";i.r(r),i.d(r,"SubscribeAndroidPageModule",function(){return S});var o=i("sYmb"),s=i("ofXK"),a=i("3Pt+"),c=i("tyNb"),b=i("TEn/"),u=i("HaE+"),l=i("qkCY"),p=i("VUXs"),f=i("ivw2"),d=i("HtUY"),h=i("KH6c"),m=i("FUe0"),w=i("fXoL"),v=i("tk/3");function g(e,t){if(1&e){var n=w.Ob();w.Nb(0,"ion-button",7),w.Vb("click",function(){w.ic(n);var e=w.Xb().$implicit;return w.Xb().purchase(e)}),w.pc(1),w.Yb(2,"translate"),w.Mb()}2&e&&(w.Ab(1),w.rc("",w.Zb(2,1,"Subscribe Now")," "))}function y(e,t){if(1&e&&(w.Nb(0,"p"),w.pc(1,"You Own This Subscription"),w.Mb(),w.Nb(2,"p"),w.pc(3),w.Yb(4,"translate"),w.Mb()),2&e){var n=w.Xb().$implicit;w.Ab(3),w.sc("",w.Zb(4,2,"Your subscription is valid until and will renew on")," ",n.expiryDate," ")}}function N(e,t){if(1&e&&(w.Nb(0,"div",4),w.Nb(1,"p"),w.pc(2),w.Mb(),w.Nb(3,"p"),w.pc(4),w.Mb(),w.Nb(5,"p"),w.pc(6),w.Mb(),w.nc(7,g,3,3,"ion-button",5),w.nc(8,y,5,4,"ng-template",null,6,w.oc),w.Lb(10,"hr"),w.Mb()),2&e){var n=t.$implicit,r=w.hc(9);w.Ab(2),w.rc(" ",n.title,""),w.Ab(2),w.qc(n.description),w.Ab(2),w.sc("",n.price," ",n.currency,""),w.Ab(1),w.cc("ngIf",!n.owned)("ngIfElse",r)}}var k,D,M=[{path:"",component:(k=function(){function n(t,r,i,o,s,a,c,b,u,l,p){e(this,n),this.http=t,this.storage=r,this.alertController=i,this.translateService=o,this.router=s,this.sentry=a,this.platform=c,this.store=b,this.ref=u,this.subscriptionServiceNG=l,this.subscriptionServiceAndroid=p,this.buttonDisabled=null,this.products=[],this.serverUrl=window.location&&window.location.hostname&&window.location.hostname.includes("localhost")?"https://localhost:44309/":"https://swsignwriterapi.azurewebsites.net/",this.subsService=m.a.isNativePlatform()?p:l,this.store.verbosity=this.store.DEBUG,this.products=this.subsService.getProducts()}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function t(){var n,r,i,o,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.storage.GetCurrentUserProfile();case 2:if(e.profile=t.sent,console.log(e.profile),!e.profile||null===e.profile){t.next=11;break}return t.next=7,e.storage.GetSubscription(e.profile.email);case 7:n=t.sent,console.log(n),n&&(e.SetButtonDisabled(n.endDate),r=new Date(n.endDate),i=new Intl.DateTimeFormat("en",{year:"numeric"}).format(r),o=new Intl.DateTimeFormat("en",{month:"short"}).format(r),s=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(r),e.subscriptionEndDate="".concat(s,"-").concat(o,"-").concat(i),console.log(e.subscriptionEndDate,"subscription endDate"),e.autoRenewal=!n.cancelatperiodend),t.next=12;break;case 11:e.router.navigate(["/login"]);case 12:case"end":return t.stop()}},t)}))()}},{key:"restore",value:function(){this.subsService.restore()}},{key:"showAlert",value:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark(function t(){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.alertController.create({header:"Alert",subHeader:"SubTitle",message:"This is an alert message",buttons:["OK"]});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.next=7,n.onDidDismiss();case 7:r=t.sent,console.log(r);case 9:case"end":return t.stop()}},t)}))()}},{key:"SetButtonDisabled",value:function(e){var t=new Date(e)>=new Date;this.buttonDisabled=t}},{key:"purchase",value:function(e){var t=this;return Object(u.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.subsService.purchase(e.id);case 1:case"end":return n.stop()}},n)}))()}}])&&t(r.prototype,i),o&&t(r,o),n}(),k.\u0275fac=function(e){return new(e||k)(w.Kb(v.a),w.Kb(l.a),w.Kb(b.a),w.Kb(o.d),w.Kb(c.g),w.Kb(f.a),w.Kb(b.J),w.Kb(p.a),w.Kb(w.i),w.Kb(d.a),w.Kb(h.a))},k.\u0275cmp=w.Eb({type:k,selectors:[["app-subscribeAndroid"]],decls:18,vars:4,consts:[["slot","start"],["slot","icon-only","name","menu"],["detail","false",4,"ngFor","ngForOf"],["expand","full",3,"click"],["detail","false"],[3,"click",4,"ngIf","ngIfElse"],["owned",""],[3,"click"]],template:function(e,t){1&e&&(w.Nb(0,"ion-header"),w.Nb(1,"ion-toolbar"),w.Nb(2,"ion-buttons",0),w.Nb(3,"ion-menu-toggle"),w.Nb(4,"ion-button"),w.Lb(5,"ion-icon",1),w.Mb(),w.Mb(),w.Mb(),w.Nb(6,"ion-title"),w.pc(7),w.Yb(8,"translate"),w.Mb(),w.Mb(),w.Mb(),w.Nb(9,"ion-content"),w.Nb(10,"ion-row"),w.Nb(11,"ion-col"),w.nc(12,N,11,6,"div",2),w.Mb(),w.Mb(),w.Nb(13,"ion-button",3),w.Vb("click",function(){return t.restore()}),w.pc(14,"Restore"),w.Mb(),w.pc(15,"' "),w.Nb(16,"P"),w.pc(17,"To cancel any subscriptions you may go to Play Store to the Payments And Subscriptions section"),w.Mb(),w.Mb()),2&e&&(w.Ab(7),w.qc(w.Zb(8,2,"Subscribe")),w.Ab(5),w.cc("ngForOf",t.products))},directives:[b.l,b.E,b.e,b.t,b.d,b.m,b.D,b.g,b.y,b.f,s.j,s.k],pipes:[o.c],styles:["ion-col[_ngcontent-%COMP%]{text-align:center}"]}),k)}],S=((D=function t(){e(this,t)}).\u0275fac=function(e){return new(e||D)},D.\u0275mod=w.Ib({type:D}),D.\u0275inj=w.Hb({imports:[[s.c,a.a,b.F,o.b,c.j.forChild(M)]]}),D)}}])}();