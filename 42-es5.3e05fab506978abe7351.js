!function(){function e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return e};var e={},r=Object.prototype,t=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function l(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{l({},"")}catch(L){l=function(e,r,t){return e[r]=t}}function c(e,r,t,n){var i=r&&r.prototype instanceof u?r:u,s=Object.create(i.prototype),o=new O(n||[]);return s._invoke=function(e,r,t){var n="suspendedStart";return function(i,s){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw s;return S()}for(t.method=i,t.arg=s;;){var o=t.delegate;if(o){var a=x(o,t);if(a){if(a===h)continue;return a}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===n)throw n="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n="executing";var l=f(e,r,t);if("normal"===l.type){if(n=t.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:t.done}}"throw"===l.type&&(n="completed",t.method="throw",t.arg=l.arg)}}}(e,t,o),s}function f(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(L){return{type:"throw",arg:L}}}e.wrap=c;var h={};function u(){}function p(){}function d(){}var g={};l(g,s,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(E([])));v&&v!==r&&t.call(v,s)&&(g=v);var b=d.prototype=u.prototype=Object.create(g);function y(e){["next","throw","return"].forEach(function(r){l(e,r,function(e){return this._invoke(r,e)})})}function w(e,r){function n(i,s,o,a){var l=f(e[i],e,s);if("throw"!==l.type){var c=l.arg,h=c.value;return h&&"object"==typeof h&&t.call(h,"__await")?r.resolve(h.__await).then(function(e){n("next",e,o,a)},function(e){n("throw",e,o,a)}):r.resolve(h).then(function(e){c.value=e,o(c)},function(e){return n("throw",e,o,a)})}a(l.arg)}var i;this._invoke=function(e,t){function s(){return new r(function(r,i){n(e,t,r,i)})}return i=i?i.then(s,s):s()}}function x(e,r){var t=e.iterator[r.method];if(void 0===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=void 0,x(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(t,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var i=n.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function k(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function j(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function E(e){if(e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(t.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,l(b,"constructor",d),l(d,"constructor",p),p.displayName=l(d,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,a,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(w.prototype),l(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(r,t,n,i,s){void 0===s&&(s=Promise);var o=new w(c(r,t,n,i),s);return e.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},y(b),l(b,a,"Generator"),l(b,s,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var r=[];for(var t in e)r.push(t);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=E,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&t.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(t,n){return o.type="throw",o.arg=e,r.next=t,n&&(r.method="next",r.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var a=t.call(s,"catchLoc"),l=t.call(s,"finallyLoc");if(a&&l){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(e,r){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&t.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=r&&r<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=r,s?(this.method="next",this.next=s.finallyLoc,h):this.complete(o)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),h},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),j(t),h}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var i=n.arg;j(t)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:E(e),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=void 0),h}},e}function s(e,r,t,n,i,s,o){try{var a=e[s](o),l=a.value}catch(c){return void t(c)}a.done?r(l):Promise.resolve(l).then(n,i)}function o(e){return function(){var r=this,t=arguments;return new Promise(function(n,i){var o=e.apply(r,t);function a(e){s(o,n,i,a,l,"next",e)}function l(e){s(o,n,i,a,l,"throw",e)}a(void 0)})}}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{nYbb:function(t,s,a){"use strict";a.r(s),a.d(s,"ion_refresher",function(){return k}),a.d(s,"ion_refresher_content",function(){return j});var l=a("wEJo"),c=a("E/Mt"),f=a("bC4P"),h=a("W6o/"),u=a("qULd"),p=a("Kfhc"),d=a("39oe"),g=a("h3R7"),m=function(e){var r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),s=i?i.querySelector("ion-icon"):null,o=Object(p.a)().duration(1e3).easing("ease-out"),a=Object(p.a)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),l=Object(p.a)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),c=Object(p.a)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){var f=Object(p.a)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),h=Object(p.a)().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([f,h])}return o.addAnimation([a,l,c])},v=function(e,r){e.style.setProperty("opacity",r.toString())},b=function(e,r){if(!e)return Promise.resolve();var t=w(e,200);return Object(l.f)(function(){e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform","translate3d(0px, ".concat(r,", 0px)"))}),t},y=function(){var e=o(i().mark(function e(r,t){var n,s,o;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.querySelector("ion-refresher-content")){e.next=3;break}return e.abrupt("return",Promise.resolve(!1));case 3:return e.next=5,new Promise(function(e){return Object(h.c)(n,e)});case 5:return s=r.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),o=r.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),e.abrupt("return",null!==s&&null!==o&&("ios"===t&&Object(c.a)("mobile")&&void 0!==r.style.webkitOverflowScrolling||"md"===t));case 7:case"end":return e.stop()}},e)}));return function(r,t){return e.apply(this,arguments)}}(),w=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Promise(function(t){x(e,r,t)})},x=function(e){var r,t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,s={passive:!0},o=function(){r&&r()},a=function(r){void 0!==r&&e!==r.target||(o(),i(r))};return e&&(e.addEventListener("webkitTransitionEnd",a,s),e.addEventListener("transitionend",a,s),t=setTimeout(a,n+500),r=function(){t&&(clearTimeout(t),t=void 0),e.removeEventListener("webkitTransitionEnd",a,s),e.removeEventListener("transitionend",a,s)}),o},k=function(){function t(e){r(this,t),Object(l.o)(this,e),this.ionRefresh=Object(l.g)(this,"ionRefresh",7),this.ionPull=Object(l.g)(this,"ionPull",7),this.ionStart=Object(l.g)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}var s,d,g,x,k,j,O,E;return n(t,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"checkNativeRefresher",value:(E=o(i().mark(function e(){var r,t;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(this.el,Object(c.b)(this));case 2:(r=e.sent)&&!this.nativeRefresher?(t=this.el.closest("ion-content"),this.setupNativeRefresher(t)):r||this.destroyNativeRefresher();case 4:case"end":return e.stop()}},e,this)})),function(){return E.apply(this,arguments)})},{key:"destroyNativeRefresher",value:function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}},{key:"resetNativeRefresher",value:(O=o(i().mark(function e(r,t){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state=t,"ios"!==Object(c.b)(this)){e.next=6;break}return e.next=4,b(r,void 0);case 4:e.next=8;break;case 6:return e.next=8,w(this.el.querySelector(".refresher-refreshing-icon"),200);case 8:this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach(function(e){return e.destroy()}),this.animations=[],this.progress=0,this.state=1;case 15:case"end":return e.stop()}},e,this)})),function(e,r){return O.apply(this,arguments)})},{key:"setupiOSNativeRefresher",value:(j=o(i().mark(function e(r,t){var n,s,o,c=this;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.elementToTransform=this.scrollEl,n=r.shadowRoot.querySelectorAll("svg"),s=.16*this.scrollEl.clientHeight,o=n.length,Object(l.f)(function(){return n.forEach(function(e){return e.style.setProperty("animation","none")})}),this.scrollListenerCallback=function(){(c.pointerDown||1!==c.state)&&Object(l.h)(function(){var e=c.scrollEl.scrollTop,i=c.el.clientHeight;if(e>0){if(8===c.state){var a=Object(h.k)(0,e/(.5*i),1);return void Object(l.f)(function(){return v(t,1-a)})}Object(l.f)(function(){return v(r,0)})}else{c.pointerDown&&(c.didStart||(c.didStart=!0,c.ionStart.emit()),c.pointerDown&&c.ionPull.emit());var f,p,d=Object(h.k)(0,Math.abs(e)/i,.99),g=c.progress=Object(h.k)(0,(Math.abs(e)-30)/s,1),m=Object(h.k)(0,Math.floor(g*o),o-1);8===c.state||m===o-1?(c.pointerDown&&(f=t,p=c.lastVelocityY,Object(l.f)(function(){f.style.setProperty("--refreshing-rotation-duration",p>=1?"0.5s":"2s"),f.style.setProperty("opacity","1")})),c.didRefresh||(c.beginRefresh(),c.didRefresh=!0,Object(u.d)({style:"light"}),c.pointerDown||b(c.elementToTransform,"".concat(i,"px")))):(c.state=2,function(e,r,t,n){Object(l.f)(function(){v(e,t),r.forEach(function(e,r){return e.style.setProperty("opacity",r<=n?"0.99":"0")})})}(r,n,d,m))}})},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),e.next=9,Promise.resolve().then(a.bind(null,"KF81"));case 9:this.gesture=e.sent.createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:function(){c.pointerDown=!0,c.didRefresh||b(c.elementToTransform,"0px"),0===s&&(s=.16*c.scrollEl.clientHeight)},onMove:function(e){c.lastVelocityY=e.velocityY},onEnd:function(){c.pointerDown=!1,c.didStart=!1,c.needsCompletion?(c.resetNativeRefresher(c.elementToTransform,32),c.needsCompletion=!1):c.didRefresh&&Object(l.h)(function(){return b(c.elementToTransform,"".concat(c.el.clientHeight,"px"))})}}),this.disabledChanged();case 11:case"end":return e.stop()}},e,this)})),function(e,r){return j.apply(this,arguments)})},{key:"setupMDNativeRefresher",value:(k=o(i().mark(function e(r,t,n){var s,c,u,d=this;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(h.g)(t).querySelector("circle"),c=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),u=Object(h.g)(n).querySelector("circle"),null!==s&&null!==u&&Object(l.f)(function(){s.style.setProperty("animation","none"),n.style.setProperty("animation-delay","-655ms"),u.style.setProperty("animation-delay","-655ms")}),e.next=4,Promise.resolve().then(a.bind(null,"KF81"));case 4:this.gesture=e.sent.createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:function(){return 8!==d.state&&32!==d.state&&0===d.scrollEl.scrollTop},onStart:function(e){e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:function(e){if(e.velocityY<0&&0===d.progress&&!e.data.didStart||e.data.cancelled)e.data.cancelled=!0;else{if(!e.data.didStart){e.data.didStart=!0,d.state=2,Object(l.f)(function(){return d.scrollEl.style.setProperty("--overflow","hidden")});var t=function(e,r,t){return"scale"===e?function(e,r){var t=r.clientHeight,n=Object(p.a)().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-".concat(t,"px)")},{offset:1,transform:"scale(1) translateY(100px)"}]);return m(e).addAnimation([n])}(r,t):function(e,r){var t=r.clientHeight,n=Object(p.a)().addElement(e).keyframes([{offset:0,transform:"translateY(-".concat(t,"px)")},{offset:1,transform:"translateY(100px)"}]);return m(e).addAnimation([n])}(r,t)}(function(e){var r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"}(r),c,d.el);return e.data.animation=t,t.progressStart(!1,0),d.ionStart.emit(),void d.animations.push(t)}d.progress=Object(h.k)(0,e.deltaY/180*.5,1),e.data.animation.progressStep(d.progress),d.ionPull.emit()}},onEnd:function(e){if(e.data.didStart){if(Object(l.f)(function(){return d.scrollEl.style.removeProperty("--overflow")}),d.progress<=.4)return d.gesture.enable(!1),void e.data.animation.progressEnd(0,d.progress,500).onFinish(function(){d.animations.forEach(function(e){return e.destroy()}),d.animations=[],d.gesture.enable(!0),d.state=1});var r=Object(f.a)([0,0],[0,0],[1,1],[1,1],d.progress)[0],t=function(e){return Object(p.a)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")}(c);d.animations.push(t),Object(l.f)(o(i().mark(function n(){return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c.style.setProperty("--ion-pulling-refresher-translate",100*r+"px"),e.data.animation.progressEnd(),n.next=4,t.play();case 4:d.beginRefresh(),e.data.animation.destroy();case 6:case"end":return n.stop()}},n)})))}}}),this.disabledChanged();case 6:case"end":return e.stop()}},e,this)})),function(e,r,t){return k.apply(this,arguments)})},{key:"setupNativeRefresher",value:(x=o(i().mark(function e(r){var t,n;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.scrollListenerCallback&&r&&!this.nativeRefresher&&this.scrollEl){e.next=2;break}return e.abrupt("return");case 2:this.setCss(0,"",!1,""),this.nativeRefresher=!0,t=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===Object(c.b)(this)?this.setupiOSNativeRefresher(t,n):this.setupMDNativeRefresher(r,t,n);case 5:case"end":return e.stop()}},e,this)})),function(e){return x.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.checkNativeRefresher()}},{key:"connectedCallback",value:(g=o(i().mark(function e(){var r,t=this;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("fixed"===this.el.getAttribute("slot")){e.next=2;break}return e.abrupt("return",void console.error('Make sure you use: <ion-refresher slot="fixed">'));case 2:if(!(r=this.el.closest("ion-content"))){e.next=22;break}return e.next=6,new Promise(function(e){return Object(h.c)(r,e)});case 6:return e.next=8,r.getScrollElement();case 8:return this.scrollEl=e.sent,this.backgroundContentEl=Object(h.g)(r).querySelector("#background-content"),e.next=12,y(this.el,Object(c.b)(this));case 12:if(!e.sent){e.next=16;break}this.setupNativeRefresher(r),e.next=20;break;case 16:return e.next=18,Promise.resolve().then(a.bind(null,"KF81"));case 18:this.gesture=e.sent.createGesture({el:r,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:function(){return t.canStart()},onStart:function(){return t.onStart()},onMove:function(e){return t.onMove(e)},onEnd:function(){return t.onEnd()}}),this.disabledChanged();case 20:e.next=23;break;case 22:console.error("<ion-refresher> must be used inside an <ion-content>");case 23:case"end":return e.stop()}},e,this)})),function(){return g.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:(d=o(i().mark(function e(){var r=this;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||Object(h.r)(function(){return Object(h.r)(function(){return r.resetNativeRefresher(r.elementToTransform,32)})})):this.close(32,"120ms");case 1:case"end":return e.stop()}},e,this)})),function(){return d.apply(this,arguments)})},{key:"cancel",value:(s=o(i().mark(function e(){var r=this;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.nativeRefresher?this.pointerDown||Object(h.r)(function(){return Object(h.r)(function(){return r.resetNativeRefresher(r.elementToTransform,16)})}):this.close(16,"");case 1:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)})},{key:"getProgress",value:function(){return Promise.resolve(this.progress)}},{key:"canStart",value:function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}},{key:"onStart",value:function(){this.progress=0,this.state=1}},{key:"onMove",value:function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0==(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0!==n){var i=this.pullMin;this.progress=n/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<i?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}}},{key:"onEnd",value:function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}},{key:"beginRefresh",value:function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}},{key:"close",value:function(e,r){var t=this;setTimeout(function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}},{key:"setCss",value:function(e,r,t,n){var i=this;this.nativeRefresher||(this.appliedStyles=e>0,Object(l.f)(function(){if(i.scrollEl&&i.backgroundContentEl){var s=i.scrollEl.style,o=i.backgroundContentEl.style;s.transform=o.transform=e>0?"translateY(".concat(e,"px) translateZ(0px)"):"",s.transitionDuration=o.transitionDuration=r,s.transitionDelay=o.transitionDelay=n,s.overflow=t?"hidden":""}}))}},{key:"render",value:function(){var r,t=Object(c.b)(this);return Object(l.j)(l.c,{slot:"fixed",class:(r={},e(r,t,!0),e(r,"refresher-".concat(t),!0),e(r,"refresher-native",this.nativeRefresher),e(r,"refresher-active",1!==this.state),e(r,"refresher-pulling",2===this.state),e(r,"refresher-ready",4===this.state),e(r,"refresher-refreshing",8===this.state),e(r,"refresher-cancelling",16===this.state),e(r,"refresher-completing",32===this.state),r)})}},{key:"el",get:function(){return Object(l.k)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),t}();k.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};var j=function(){function e(t){r(this,e),Object(l.o)(this,t)}return n(e,[{key:"componentWillLoad",value:function(){if(void 0===this.pullingIcon){var e=Object(c.b)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=c.c.get("refreshingIcon","ios"===e&&Object(c.a)("mobile")?c.c.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){var t=Object(c.b)(this);this.refreshingSpinner=c.c.get("refreshingSpinner",c.c.get("spinner","ios"===t?"lines":"circular"))}}},{key:"render",value:function(){var e=this.pullingIcon,r=null!=e&&void 0!==g.a[e],t=Object(c.b)(this);return Object(l.j)(l.c,{class:t},Object(l.j)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&Object(l.j)("div",{class:"refresher-pulling-icon"},Object(l.j)("div",{class:"spinner-arrow-container"},Object(l.j)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&Object(l.j)("div",{class:"arrow-container"},Object(l.j)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&Object(l.j)("div",{class:"refresher-pulling-icon"},Object(l.j)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(l.j)("div",{class:"refresher-pulling-text",innerHTML:Object(d.a)(this.pullingText)})),Object(l.j)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(l.j)("div",{class:"refresher-refreshing-icon"},Object(l.j)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(l.j)("div",{class:"refresher-refreshing-text",innerHTML:Object(d.a)(this.refreshingText)})))}},{key:"el",get:function(){return Object(l.k)(this)}}]),e}()}}])}();