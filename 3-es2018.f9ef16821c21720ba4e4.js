(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"ct+p":function(t,o,n){"use strict";n.r(o),n.d(o,"HomePageModule",function(){return g});var i=n("sYmb"),e=n("ofXK"),a=n("3Pt+"),s=n("tyNb"),b=n("TEn/"),c=n("4scA"),r=n("NRdZ"),l=n("n90K"),p=n("iXKo"),u=n("fXoL");function h(t,o){1&t&&u.Lb(0,"ion-backdrop",9),2&t&&u.cc("tappable",!1)("visible",!0)}const m=[{path:"",component:(()=>{class t{constructor(t,o,n,i,e){this.router=t,this.loadingCtrl=o,this.modalCtrl=n,this.storage=i,this.logService=e,this.showBackdrop=!1}async ngOnInit(){c.a.hide();var t=await this.storage.getUserName(),o=await this.storage.getEmail();t&&o?this.logService.AddLog("App Started"):(this.storage.userName=t,this.storage.email=o,this.openModal())}goAbout(){this.router.navigate(["/about"])}goPolicy(){this.router.navigate(["/policy"])}goContinue(){this.router.navigate(["/edit"])}async openModal(){const t=await this.modalCtrl.create({component:r.a,cssClass:"small-modal"});this.showBackdrop=!0,t.present();const{data:o}=await t.onWillDismiss();this.showBackdrop=!o.dismissed}}return t.\u0275fac=function(o){return new(o||t)(u.Kb(s.g),u.Kb(b.J),u.Kb(b.K),u.Kb(l.a),u.Kb(p.a))},t.\u0275cmp=u.Eb({type:t,selectors:[["app-home"]],decls:26,vars:10,consts:[["color","navy"],["slot","start"],["slot","icon-only","name","menu"],[1,"ion-text-center"],[3,"tappable","visible",4,"ngIf"],[1,"mb-30"],[1,"home-title"],[1,"mb-25"],["color","green",3,"click"],[3,"tappable","visible"]],template:function(t,o){1&t&&(u.Nb(0,"ion-header"),u.Nb(1,"ion-toolbar",0),u.Nb(2,"ion-buttons",1),u.Nb(3,"ion-menu-toggle"),u.Nb(4,"ion-button"),u.Lb(5,"ion-icon",2),u.Mb(),u.Mb(),u.Mb(),u.Nb(6,"ion-title"),u.pc(7),u.Yb(8,"translate"),u.Mb(),u.Mb(),u.Mb(),u.Nb(9,"ion-content",3),u.nc(10,h,1,2,"ion-backdrop",4),u.Nb(11,"div",5),u.Nb(12,"h1",6),u.pc(13,"Welcome!"),u.Mb(),u.Mb(),u.Nb(14,"div",7),u.Nb(15,"h4"),u.pc(16,"Hit this button to start signwriting"),u.Mb(),u.Nb(17,"ion-button",8),u.Vb("click",function(){return o.goContinue()}),u.pc(18),u.Yb(19,"translate"),u.Mb(),u.Mb(),u.Nb(20,"div",7),u.Nb(21,"h4"),u.pc(22,"Get to know a bit about us"),u.Mb(),u.Nb(23,"ion-button",8),u.Vb("click",function(){return o.goAbout()}),u.pc(24),u.Yb(25,"translate"),u.Mb(),u.Mb(),u.Mb()),2&t&&(u.Ab(7),u.qc(u.Zb(8,4,"Home")),u.Ab(3),u.cc("ngIf",o.showBackdrop),u.Ab(8),u.qc(u.Zb(19,6,"Lets start")),u.Ab(6),u.qc(u.Zb(25,8,"What's all this about?")))},directives:[b.m,b.G,b.f,b.v,b.e,b.n,b.F,b.h,e.i,b.c],pipes:[i.c],styles:[".home-title[_ngcontent-%COMP%]{font-family:LobsterTwo;font-weight:700;font-size:3em}.mb-30[_ngcontent-%COMP%]{margin-bottom:30px}.mb-25[_ngcontent-%COMP%]{margin-bottom:25px}ion-backdrop[_ngcontent-%COMP%]{opacity:.3;bottom:-100px}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({imports:[[e.b,a.b,b.H,i.b,s.i.forChild(m)]]}),t})()}}]);