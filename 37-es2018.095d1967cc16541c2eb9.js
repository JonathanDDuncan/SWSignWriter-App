(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"2lz6":function(i,n,t){"use strict";t.r(n),t.d(n,"ion_infinite_scroll",function(){return r}),t.d(n,"ion_infinite_scroll_content",function(){return c});var e=t("HaE+"),s=t("wEJo"),o=t("E/Mt"),l=t("39oe");const r=class{constructor(i){Object(s.o)(this,i),this.ionInfinite=Object(s.g)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=()=>{const i=this.scrollEl;if(!i||!this.canStart())return 1;const n=this.el.offsetHeight;if(0===n)return 2;const t=i.scrollTop,e=i.offsetHeight,s=0!==this.thrPc?e*this.thrPc:this.thrPx;if(("bottom"===this.position?i.scrollHeight-n-t-s-e:t-n-s)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4}}thresholdChanged(){const i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}disabledChanged(){const i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}connectedCallback(){var i=this;return Object(e.a)(function*(){const n=i.el.closest("ion-content");n?(i.scrollEl=yield n.getScrollElement(),i.thresholdChanged(),i.disabledChanged(),"top"===i.position&&Object(s.f)(()=>{i.scrollEl&&(i.scrollEl.scrollTop=i.scrollEl.scrollHeight-i.scrollEl.clientHeight)})):console.error("<ion-infinite-scroll> must be used inside an <ion-content>")})()}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}complete(){var i=this;return Object(e.a)(function*(){const n=i.scrollEl;if(i.isLoading&&n&&(i.isLoading=!1,"top"===i.position)){i.isBusy=!0;const t=n.scrollHeight-n.scrollTop;requestAnimationFrame(()=>{Object(s.h)(()=>{const e=n.scrollHeight-t;requestAnimationFrame(()=>{Object(s.f)(()=>{n.scrollTop=e,i.isBusy=!1})})})})}})()}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const i=Object(o.b)(this),n=this.disabled;return Object(s.j)(s.c,{class:{[i]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!n}})}get el(){return Object(s.k)(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};r.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";const c=class{constructor(i){Object(s.o)(this,i)}componentDidLoad(){if(void 0===this.loadingSpinner){const i=Object(o.b)(this);this.loadingSpinner=o.c.get("infiniteLoadingSpinner",o.c.get("spinner","ios"===i?"lines":"crescent"))}}render(){const i=Object(o.b)(this);return Object(s.j)(s.c,{class:{[i]:!0,[`infinite-scroll-content-${i}`]:!0}},Object(s.j)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(s.j)("div",{class:"infinite-loading-spinner"},Object(s.j)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(s.j)("div",{class:"infinite-loading-text",innerHTML:Object(l.a)(this.loadingText)})))}};c.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);