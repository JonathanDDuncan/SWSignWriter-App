(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{q6at:function(t,e,o){"use strict";o.r(e),o.d(e,"LogoutPageModule",function(){return f});var n=o("ofXK"),s=o("3Pt+"),i=o("tyNb"),r=o("TEn/"),a=o("ivw2"),c=o("qkCY"),u=o("lGQG"),l=o("FUe0"),b=o("y6Nz"),h=o("fXoL");const p=[{path:"",component:(()=>{class t{constructor(t,e,o,n,s){this.storage=t,this.sentry=e,this.authMobile=o,this.platform=n,this.authAngular=s,this.authService=l.a.isNativePlatform()?o:s}ngOnInit(){const t=this.storage.GetCurrentUserProfile();this.sentry.sentryMessage("Logged out: "+JSON.stringify(t)),this.authService.logout()}}return t.\u0275fac=function(e){return new(e||t)(h.Kb(c.a),h.Kb(a.a),h.Kb(u.a),h.Kb(r.J),h.Kb(b.a))},t.\u0275cmp=h.Eb({type:t,selectors:[["app-logout"]],decls:5,vars:0,template:function(t,e){1&t&&(h.Nb(0,"ion-header"),h.Nb(1,"ion-toolbar"),h.Nb(2,"ion-title"),h.pc(3,"logout"),h.Mb(),h.Mb(),h.Mb(),h.Lb(4,"ion-content"))},directives:[r.l,r.E,r.D,r.g],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.Ib({type:t}),t.\u0275inj=h.Hb({imports:[[n.c,s.a,r.F,i.j.forChild(p)]]}),t})()}}]);