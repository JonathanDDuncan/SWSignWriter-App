"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4902],{4902:(H,r,n)=>{n.r(r),n.d(r,{HomePageModule:()=>P});var c=n(7171),m=n(6895),d=n(4719),g=n(9990),a=n(603),u=n(5861),p=n(7321),h=n(1267),v=n(5362),t=n(4650),f=n(1188);function b(e,l){1&e&&t._UZ(0,"ion-backdrop",9),2&e&&t.Q6J("tappable",!1)("visible",!0)}const Z=[{path:"",component:(()=>{class e{constructor(o,i,s,y,A){this.router=o,this.loadingCtrl=i,this.modalCtrl=s,this.storage=y,this.logService=A,this.showBackdrop=!1}ngOnInit(){var o=this;return(0,u.Z)(function*(){p.c.hide();var i=yield o.storage.getUserName(),s=yield o.storage.getEmail();i&&s?o.logService.AddLog("App Started"):(o.storage.userName=i,o.storage.email=s,o.openModal())})()}goAbout(){this.router.navigate(["/about"])}goPolicy(){this.router.navigate(["/policy"])}goContinue(){this.router.navigate(["/edit"])}openModal(){var o=this;return(0,u.Z)(function*(){const i=yield o.modalCtrl.create({component:h.e,cssClass:"small-modal"});o.showBackdrop=!0,i.present();const{data:s}=yield i.onWillDismiss();o.showBackdrop=!s.dismissed})()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g.F0),t.Y36(a.HT),t.Y36(a.IN),t.Y36(f.V),t.Y36(v.$))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:26,vars:10,consts:[["color","navy"],["slot","start"],["slot","icon-only","name","menu"],[1,"ion-text-center"],[3,"tappable","visible",4,"ngIf"],[1,"mb-30"],[1,"home-title"],[1,"mb-25"],["color","green",3,"click"],[3,"tappable","visible"]],template:function(o,i){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1)(3,"ion-menu-toggle")(4,"ion-button"),t._UZ(5,"ion-icon",2),t.qZA()()(),t.TgZ(6,"ion-title"),t._uU(7),t.ALo(8,"translate"),t.qZA()()(),t.TgZ(9,"ion-content",3),t.YNc(10,b,1,2,"ion-backdrop",4),t.TgZ(11,"div",5)(12,"h1",6),t._uU(13,"Welcome!"),t.qZA()(),t.TgZ(14,"div",7)(15,"h4"),t._uU(16,"Hit this button to start signwriting"),t.qZA(),t.TgZ(17,"ion-button",8),t.NdJ("click",function(){return i.goContinue()}),t._uU(18),t.ALo(19,"translate"),t.qZA()(),t.TgZ(20,"div",7)(21,"h4"),t._uU(22,"Get to know a bit about us"),t.qZA(),t.TgZ(23,"ion-button",8),t.NdJ("click",function(){return i.goAbout()}),t._uU(24),t.ALo(25,"translate"),t.qZA()()()),2&o&&(t.xp6(7),t.Oqu(t.lcZ(8,4,"Home")),t.xp6(3),t.Q6J("ngIf",i.showBackdrop),t.xp6(8),t.Oqu(t.lcZ(19,6,"Lets start")),t.xp6(6),t.Oqu(t.lcZ(25,8,"What's all this about?")))},dependencies:[m.O5,a.ql,a.YG,a.Sm,a.W2,a.Gu,a.gu,a.zc,a.wd,a.sr,c.X$],styles:[".home-title[_ngcontent-%COMP%]{font-family:LobsterTwo;font-weight:700;font-size:3em}.mb-30[_ngcontent-%COMP%]{margin-bottom:30px}.mb-25[_ngcontent-%COMP%]{margin-bottom:25px}ion-backdrop[_ngcontent-%COMP%]{opacity:.3;bottom:-100px}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,d.u5,a.Pc,c.aw,g.Bz.forChild(Z)]}),e})()}}]);