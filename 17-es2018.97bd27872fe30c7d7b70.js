(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Gj2j:function(t,e,n){"use strict";n.r(e),n.d(e,"SubscribePageModule",function(){return w});var o=n("sYmb"),i=n("ofXK"),a=n("3Pt+"),r=n("tyNb"),s=n("TEn/"),c=n("HaE+"),l=n("Xo/0"),b=n("tk/3"),u=n("qkCY"),p=n("fXoL");function d(t,e){if(1&t){const t=p.Ob();p.Nb(0,"ion-col"),p.pc(1),p.Yb(2,"translate"),p.Nb(3,"ion-button",6),p.Vb("click",function(){return p.ic(t),p.Xb(2).CancelRenewal()}),p.pc(4),p.Yb(5,"translate"),p.Mb(),p.Mb()}if(2&t){const t=p.Xb(2);p.Ab(1),p.sc(" ",p.Zb(2,3,"Your subscription is valid until and will renew on")," ",t.subscriptionEndDate," "),p.Ab(3),p.rc(" ",p.Zb(5,5,"Cancel Automatic Renewal"),"")}}function h(t,e){if(1&t&&(p.Nb(0,"ion-col"),p.pc(1),p.Yb(2,"translate"),p.Mb()),2&t){const t=p.Xb(2);p.Ab(1),p.sc(" ",p.Zb(2,2,"Your subscription is valid until")," ",t.subscriptionEndDate," ")}}function m(t,e){if(1&t&&(p.Nb(0,"ion-row"),p.nc(1,d,6,7,"ion-col",4),p.nc(2,h,3,4,"ng-template",null,5,p.oc),p.Mb()),2&t){const t=p.hc(3),e=p.Xb();p.Ab(1),p.cc("ngIf",e.autoRenewal)("ngIfElse",t)}}const f=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i,a){this.http=t,this.storage=e,this.alertController=n,this.translateService=o,this.stripeservice=i,this.router=a,this.buttonDisabled=null,this.serverUrl=window.location&&window.location.hostname&&window.location.hostname.includes("localhost")?"https://localhost:44309/":"https://swsignwriterapi.azurewebsites.net/"}ngOnInit(){var t=this;return Object(c.a)(function*(){const e=yield t.storage.GetCurrentUserProfile();if(e&&null!==e){const n=yield t.storage.GetSubscription(e.email);if(n){t.SetButtonDisabled(n.endDate);const e=new Date(n.endDate),o=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),i=new Intl.DateTimeFormat("en",{month:"short"}).format(e),a=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e);t.subscriptionEndDate=`${a}-${i}-${o}`,t.autoRenewal=!n.cancelatperiodend}}else t.router.navigate(["/home"])})()}SetButtonDisabled(t){const e=new Date(t)>=new Date;this.buttonDisabled=e}SubscribeMonthly(){var t=this;return Object(c.a)(function*(){yield t.createSession("plan_HHKPHgsv5Vdy49")})()}SubscribeYearly(){var t=this;return Object(c.a)(function*(){yield t.createSession("plan_HHKPf6K2bmpeN7")})()}createSession(t){var e=this;return Object(c.a)(function*(){const n=yield e.storage.GetCurrentUserProfile();n&&null!==n||e.router.navigate(["/login"]);const o=yield e.storage.GetSubscription(n.email);let i=new Date;o&&(i=o.endDate);const a=yield e.storage.GetTrialStartDate(n.email),r=n;r.planId=t,r.trialStartDate=a,r.subscriptionEndDate=i,e.http.post(e.serverUrl+"api/stripe/createsession",r,{headers:new b.c({Accept:"application/json","Content-Type":"application/json"})}).subscribe(t=>{console.log(t);const e=t;Stripe("pk_live_Q4UaSLy3gZtg16efKx9JUhCh009AFVCrne").redirectToCheckout({sessionId:e}).then(function(t){t.error?console.log("There was an error with the checkout."):(console.log("Checkout was a success."),console.log(t))})},t=>{console.log(t)})})()}CancelRenewal(){var t=this;return Object(c.a)(function*(){const e=yield t.alertController.create({header:t.translateService.instant("Cancel automatic renewal"),message:t.translateService.instant("Are you <strong>sure</strong> you want to remove automatic renewal?"),buttons:[{text:"Disagree",role:"cancel",cssClass:"secondary",handler:t=>{}},{text:"Agree",handler:(n=Object(c.a)(function*(){const e=yield t.storage.GetCurrentUserProfile();e&&null!==e||t.router.navigate(["/login"]);const n={privatekey:"**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX",email:e.email};yield t.http.post(t.serverUrl+"api/stripe/cancelrenewal",n,{headers:new b.c({Accept:"application/json","Content-Type":"application/json"})}).toPromise(),t.stripeservice.GetandSaveStripeSubscriptionData(e.email);const o=yield t.storage.GetSubscription(e.email),i=o.endDate,a=new Intl.DateTimeFormat("en",{year:"numeric"}).format(i),r=new Intl.DateTimeFormat("en",{month:"short"}).format(i),s=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(i);t.subscriptionEndDate=`${s}-${r}-${a}`,t.autoRenewal=o.CancelAtPeriodEnd,t.SetButtonDisabled(o.endDate)}),function(){return n.apply(this,arguments)})}]});var n;yield e.present()})()}}return t.\u0275fac=function(e){return new(e||t)(p.Kb(b.a),p.Kb(u.a),p.Kb(s.a),p.Kb(o.d),p.Kb(l.a),p.Kb(r.g))},t.\u0275cmp=p.Eb({type:t,selectors:[["app-subscribe"]],decls:29,vars:21,consts:[["slot","start"],["slot","icon-only","name","menu"],[4,"ngIf"],[3,"disabled","click"],[4,"ngIf","ngIfElse"],["validuntil",""],[3,"click"]],template:function(t,e){1&t&&(p.Nb(0,"ion-header"),p.Nb(1,"ion-toolbar"),p.Nb(2,"ion-buttons",0),p.Nb(3,"ion-menu-toggle"),p.Nb(4,"ion-button"),p.Lb(5,"ion-icon",1),p.Mb(),p.Mb(),p.Mb(),p.Nb(6,"ion-title"),p.pc(7),p.Yb(8,"translate"),p.Mb(),p.Mb(),p.Mb(),p.Nb(9,"ion-content"),p.nc(10,m,4,2,"ion-row",2),p.Nb(11,"ion-row"),p.Nb(12,"ion-col"),p.Nb(13,"p"),p.pc(14),p.Yb(15,"translate"),p.Mb(),p.Nb(16,"p"),p.pc(17),p.Yb(18,"translate"),p.Mb(),p.Nb(19,"ion-button",3),p.Vb("click",function(){return e.SubscribeYearly()}),p.pc(20),p.Yb(21,"translate"),p.Mb(),p.Lb(22,"hr"),p.Nb(23,"p"),p.pc(24),p.Yb(25,"translate"),p.Mb(),p.Nb(26,"ion-button",3),p.Vb("click",function(){return e.SubscribeMonthly()}),p.pc(27),p.Yb(28,"translate"),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&t&&(p.Ab(7),p.qc(p.Zb(8,9,"Subscribe")),p.Ab(3),p.cc("ngIf",e.subscriptionEndDate),p.Ab(4),p.rc("1 ",p.Zb(15,11,"Month FREE"),""),p.Ab(3),p.rc("+ ",p.Zb(18,13,"$5/month for 11 months"),""),p.Ab(2),p.cc("disabled",e.buttonDisabled),p.Ab(1),p.qc(p.Zb(21,15,"Subscribe Yearly")),p.Ab(4),p.rc(" ",p.Zb(25,17,"$5/month"),""),p.Ab(2),p.cc("disabled",e.buttonDisabled),p.Ab(1),p.qc(p.Zb(28,19,"Subscribe Monthly")))},directives:[s.l,s.E,s.e,s.t,s.d,s.m,s.D,s.g,i.k,s.y,s.f],pipes:[o.c],styles:["ion-col[_ngcontent-%COMP%]{text-align:center}"]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({imports:[[i.c,a.a,s.F,o.b,r.j.forChild(f)]]}),t})()}}]);