(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{HCc4:function(t,i,n){"use strict";n.r(i),n.d(i,"SubscribeAndroidPageModule",function(){return A});var e=n("sYmb"),r=n("ofXK"),c=n("3Pt+"),s=n("tyNb"),o=n("TEn/"),b=n("HaE+"),a=n("qkCY"),l=n("VUXs"),u=n("KH6c"),p=n("Blvj"),f=n("fXoL");function d(t,i){1&t&&(f.Nb(0,"p"),f.pc(1,"You can start a 15 day free trial"),f.Mb())}function h(t,i){if(1&t){const t=f.Ob();f.Nb(0,"ion-button",7),f.Vb("click",function(){return f.ic(t),f.Xb().StartTrial()}),f.pc(1),f.Yb(2,"translate"),f.Mb()}2&t&&(f.Ab(1),f.rc("",f.Zb(2,1,"Start Trial")," "))}function S(t,i){if(1&t&&(f.Nb(0,"p"),f.pc(1),f.Mb()),2&t){const t=f.Xb();f.Ab(1),f.rc("Your free trial has ",t.trialDaysLeft," days left")}}function g(t,i){if(1&t){const t=f.Ob();f.Nb(0,"ion-button",7),f.Vb("click",function(){f.ic(t);const i=f.Xb().$implicit;return f.Xb(2).purchase(i)}),f.pc(1),f.Yb(2,"translate"),f.Mb()}2&t&&(f.Ab(1),f.rc("",f.Zb(2,1,"Subscribe Now")," "))}function v(t,i){if(1&t&&(f.Nb(0,"p"),f.pc(1,"You Own This Subscription"),f.Mb(),f.Nb(2,"p"),f.pc(3),f.Yb(4,"translate"),f.Mb()),2&t){const t=f.Xb().$implicit;f.Ab(3),f.sc("",f.Zb(4,2,"Your subscription is valid until and will renew on")," ",t.expiryDate," ")}}function w(t,i){if(1&t&&(f.Nb(0,"div",9),f.Nb(1,"p"),f.pc(2),f.Mb(),f.Nb(3,"p"),f.pc(4),f.Mb(),f.Nb(5,"p"),f.pc(6),f.Mb(),f.nc(7,g,3,3,"ion-button",10),f.nc(8,v,5,4,"ng-template",null,11,f.oc),f.Lb(10,"hr"),f.Mb()),2&t){const t=i.$implicit,n=f.hc(9);f.Ab(2),f.rc(" ",t.title,""),f.Ab(2),f.qc(t.description),f.Ab(2),f.sc("",t.price," ",t.currency,""),f.Ab(1),f.cc("ngIf",!t.owned)("ngIfElse",n)}}function y(t,i){if(1&t&&(f.Nb(0,"div"),f.nc(1,w,11,6,"div",8),f.Mb()),2&t){const t=f.Xb();f.Ab(1),f.cc("ngForOf",t.products)}}function M(t,i){1&t&&(f.Nb(0,"p"),f.pc(1,"Yoou own a Stripe Subscription"),f.Mb())}function N(t,i){if(1&t){const t=f.Ob();f.Nb(0,"ion-button",12),f.Vb("click",function(){return f.ic(t),f.Xb().restore()}),f.pc(1,"Refresh"),f.Mb()}}const T=[{path:"",component:(()=>{class t{constructor(t,i,n,e,r,c,s){this.storage=t,this.alertController=i,this.translateService=n,this.platform=e,this.store=r,this.subscriptionService=c,this.trialService=s,this.buttonDisabled=null,this.products=[],this.showTrialButton=!1,this.hasStartedTrial=!1,this.trialDaysLeft=0,this.store.verbosity=this.store.DEBUG,this.products=this.subscriptionService.getProducts()}ngOnInit(){var t=this;return Object(b.a)(function*(){yield t.ShowTrialButton()})()}ShowTrialButton(){var t=this;return Object(b.a)(function*(){var i=yield t.storage.GetCurrentUserProfile();t.hasStartedTrial=yield t.trialService.HasStartedTrial(i.sub),t.showTrialButton=!t.subscriptionService.isSubscribed.getValue()&&!t.hasStartedTrial,t.hasStartedTrial&&(t.trialDaysLeft=yield t.trialService.GetTrialDaysLeft(i.sub))})()}StartTrial(){var t=this;return Object(b.a)(function*(){var i=yield t.storage.GetCurrentUserProfile();null!==(yield t.trialService.StartTrial(i.sub)).TrialStartDate&&(t.showAlert(),t.ShowTrialButton())})()}CheckSubscription(){var t=this;return Object(b.a)(function*(){t.subscriptionService.checkSubscription()})()}restore(){this.subscriptionService.restore()}showAlert(){var t=this;return Object(b.a)(function*(){const i=yield t.alertController.create({header:"Alert",subHeader:"SubTitle",message:"This is an alert message",buttons:["OK"]});yield i.present();const n=yield i.onDidDismiss();console.log(n)})()}SetButtonDisabled(t){const i=new Date(t)>=new Date;this.buttonDisabled=i}purchase(t){var i=this;return Object(b.a)(function*(){i.subscriptionService.purchase(t.id)})()}}return t.\u0275fac=function(i){return new(i||t)(f.Kb(a.a),f.Kb(o.a),f.Kb(e.d),f.Kb(o.J),f.Kb(l.a),f.Kb(u.a),f.Kb(p.a))},t.\u0275cmp=f.Eb({type:t,selectors:[["app-subscribeAndroid"]],decls:21,vars:9,consts:[["slot","start"],["slot","icon-only","name","menu"],[4,"ngIf"],[3,"click",4,"ngIf"],[4,"ngIf","ngIfElse"],["stripeSubscribed",""],["expand","full",3,"click",4,"ngIf"],[3,"click"],["detail","false",4,"ngFor","ngForOf"],["detail","false"],[3,"click",4,"ngIf","ngIfElse"],["owned",""],["expand","full",3,"click"]],template:function(t,i){if(1&t&&(f.Nb(0,"ion-header"),f.Nb(1,"ion-toolbar"),f.Nb(2,"ion-buttons",0),f.Nb(3,"ion-menu-toggle"),f.Nb(4,"ion-button"),f.Lb(5,"ion-icon",1),f.Mb(),f.Mb(),f.Mb(),f.Nb(6,"ion-title"),f.pc(7),f.Yb(8,"translate"),f.Mb(),f.Mb(),f.Mb(),f.Nb(9,"ion-content"),f.Nb(10,"ion-row"),f.Nb(11,"ion-col"),f.Nb(12,"div"),f.nc(13,d,2,0,"p",2),f.nc(14,h,3,3,"ion-button",3),f.nc(15,S,2,1,"p",2),f.Mb(),f.nc(16,y,2,1,"div",4),f.nc(17,M,2,0,"ng-template",null,5,f.oc),f.Mb(),f.Mb(),f.nc(19,N,2,0,"ion-button",6),f.pc(20,"'\n"),f.Mb()),2&t){const t=f.hc(18);f.Ab(7),f.qc(f.Zb(8,7,"Subscribe")),f.Ab(6),f.cc("ngIf",i.showTrialButton),f.Ab(1),f.cc("ngIf",i.showTrialButton),f.Ab(1),f.cc("ngIf",i.hasStartedTrial&&i.trialDaysLeft>0&&!i.subscriptionService.isSubscribed.getValue()),f.Ab(1),f.cc("ngIf",!("Stripe"===i.subscriptionService.subscriptionType))("ngIfElse",t),f.Ab(3),f.cc("ngIf",!("Stripe"===i.subscriptionService.subscriptionType))}},directives:[o.l,o.E,o.e,o.t,o.d,o.m,o.D,o.g,o.y,o.f,r.k,r.j],pipes:[e.c],styles:["ion-col[_ngcontent-%COMP%]{text-align:center}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=f.Ib({type:t}),t.\u0275inj=f.Hb({imports:[[r.c,c.a,o.F,e.b,s.j.forChild(T)]]}),t})()}}]);