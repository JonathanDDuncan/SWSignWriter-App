!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}function r(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{k5eQ:function(r,o,i){"use strict";i.r(o),i.d(o,"ion_route",function(){return p}),i.d(o,"ion_route_redirect",function(){return b}),i.d(o,"ion_router",function(){return T}),i.d(o,"ion_router_link",function(){return W});var c,s,f=i("HaE+"),l=i("wEJo"),h=i("1vRN"),v=i("E/Mt"),d=i("74mu"),p=function(){function e(t){a(this,e),Object(l.o)(this,t),this.ionRouteDataChanged=Object(l.g)(this,"ionRouteDataChanged",7),this.url=""}return u(e,[{key:"onUpdate",value:function(e){this.ionRouteDataChanged.emit(e)}},{key:"onComponentProps",value:function(e,t){if(e!==t){var r=e?Object.keys(e):[],o=t?Object.keys(t):[];if(r.length===o.length){var a,i=n(r);try{for(i.s();!(a=i.n()).done;){var u=a.value;if(e[u]!==t[u])return void this.onUpdate(e)}}catch(c){i.e(c)}finally{i.f()}}else this.onUpdate(e)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),e}(),b=function(){function e(t){a(this,e),Object(l.o)(this,t),this.ionRouteRedirectChanged=Object(l.g)(this,"ionRouteRedirectChanged",7)}return u(e,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),e}(),g=function(e){return"/"+e.filter(function(e){return e.length>0}).join("/")},m=function(e){var t,n=[""];if(null!=e){var r=e.indexOf("?");r>-1&&(t=e.substr(r+1),e=e.substr(0,r)),0===(n=e.split("/").map(function(e){return e.trim()}).filter(function(e){return e.length>0})).length&&(n=[""])}return{segments:n,queryString:t}},y=(s=Object(f.a)(regeneratorRuntime.mark(function e(t,n,r,o){var a,i,u,c,s,f=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=f.length>4&&void 0!==f[4]&&f[4],i=f.length>5?f[5]:void 0,e.prev=2,u=R(t),!(o>=n.length)&&u){e.next=6;break}return e.abrupt("return",a);case 6:return e.next=8,new Promise(function(e){return Object(h.c)(u,e)});case 8:return c=n[o],e.next=11,u.setRouteId(c.id,c.params,r,i);case 11:return(s=e.sent).changed&&(r="root",a=!0),e.next=15,y(s.element,n,r,o+1,a,i);case 15:if(a=e.sent,e.t0=s.markVisible,!e.t0){e.next=20;break}return e.next=20,s.markVisible();case 20:return e.abrupt("return",a);case 23:return e.prev=23,e.t1=e.catch(2),e.abrupt("return",(console.error(e.t1),!1));case 26:case"end":return e.stop()}},e,null,[[2,23]])})),function(e,t,n,r){return s.apply(this,arguments)}),w=(c=Object(f.a)(regeneratorRuntime.mark(function e(t){var n,r,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],o=t;case 2:if(!(r=R(o))){e.next=11;break}return e.next=5,r.getRouteId();case 5:if(a=e.sent){e.next=8;break}return e.abrupt("break",11);case 8:o=a.element,a.element=void 0,n.push(a);case 9:e.next=2;break;case 11:return e.abrupt("return",{ids:n,outlet:r});case 12:case"end":return e.stop()}},e)})),function(e){return c.apply(this,arguments)}),k=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",R=function(e){if(e){if(e.matches(k))return e;var t=e.querySelector(k);return null!=t?t:void 0}},x=function(e,t){return t.find(function(t){return function(e,t){var n=t.from;if(void 0===t.to)return!1;if(n.length>e.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==e[r])return!1}return n.length===e.length}(e,t)})},j=function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n&&e[r].toLowerCase()===t[r].id;r++);return r},O=function(e,t){for(var r,o=new E(e),a=!1,i=0;i<t.length;i++){var u=t[i].path;if(""===u[0])a=!0;else{var c,s=n(u);try{for(s.s();!(c=s.n()).done;){var f=c.value,l=o.next();if(":"===f[0]){if(""===l)return null;((r=r||[])[i]||(r[i]={}))[f.slice(1)]=l}else if(l!==f)return null}}catch(h){s.e(h)}finally{s.f()}a=!1}}return a&&a!==(""===o.next())?null:r?t.map(function(e,t){return{id:e.id,path:e.path,params:C(e.params,r[t]),beforeEnter:e.beforeEnter,beforeLeave:e.beforeLeave}}):t},C=function(e,t){return e||t?Object.assign(Object.assign({},e),t):void 0},S=function(e,t){var r,o=null,a=0,i=n(t);try{for(i.s();!(r=i.n()).done;){var u=r.value,c=O(e,u);if(null!==c){var s=P(c);s>a&&(a=s,o=c)}}}catch(f){i.e(f)}finally{i.f()}return o},P=function(e){var t,r=1,o=1,a=n(e);try{for(a.s();!(t=a.n()).done;){var i,u=n(t.value.path);try{for(u.s();!(i=u.n()).done;){var c=i.value;":"===c[0]?r+=Math.pow(1,o):""!==c&&(r+=Math.pow(2,o)),o++}}catch(s){u.e(s)}finally{u.f()}}}catch(s){a.e(s)}finally{a.f()}return r},E=function(){function e(t){a(this,e),this.path=t.slice()}return u(e,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),e}(),D=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},L=function(e){return Array.from(e.children).filter(function(e){return"ION-ROUTE-REDIRECT"===e.tagName}).map(function(e){var t=D(e,"to");return{from:m(D(e,"from")).segments,to:null==t?void 0:m(t)}})},N=function(e){return U(A(e))},A=function e(t){return Array.from(t.children).filter(function(e){return"ION-ROUTE"===e.tagName&&e.component}).map(function(t){var n=D(t,"component");return{path:m(D(t,"url")).segments,id:n.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:e(t)}})},U=function(e){var t,r=[],o=n(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;I([],r,a)}}catch(i){o.e(i)}finally{o.f()}return r},I=function e(t,r,o){if((t=t.slice()).push({id:o.id,path:o.path,params:o.params,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter}),0!==o.children.length){var a,i=n(o.children);try{for(i.s();!(a=i.n()).done;){e(t,r,a.value)}}catch(u){i.e(u)}finally{i.f()}}else r.push(t)},T=function(){function e(t){a(this,e),Object(l.o)(this,t),this.ionRouteWillChange=Object(l.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(l.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return u(e,[{key:"componentWillLoad",value:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark(function t(){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(document.body)?Promise.resolve():new Promise(function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})});case 2:return t.next=4,e.runGuards(e.getPath());case 4:if(!0===(n=t.sent)){t.next=13;break}if("object"!=typeof n){t.next=11;break}return r=n.redirect,o=m(r),e.setPath(o.segments,"root",o.queryString),t.next=11,e.writeNavStateRoot(o.segments,"root");case 11:t.next=15;break;case 13:return t.next=15,e.onRoutesChanged();case 15:case"end":return t.stop()}},t)}))()}},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",Object(h.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(h.n)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark(function t(){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.historyDirection(),r=e.getPath(),t.next=4,e.runGuards(r);case 4:if(!0===(o=t.sent)){t.next=9;break}if("object"==typeof o){t.next=8;break}return t.abrupt("return",!1);case 8:r=m(o.redirect).segments;case 9:return t.abrupt("return",e.writeNavStateRoot(r,n));case 10:case"end":return t.stop()}},t)}))()}},{key:"onBackButton",value:function(e){var t=this;e.detail.register(0,function(e){t.back(),e()})}},{key:"canTransition",value:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.runGuards();case 2:return n=t.sent,t.abrupt("return",!0===n||"object"==typeof n&&n.redirect);case 4:case"end":return t.stop()}},t)}))()}},{key:"push",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"forward",n=arguments.length>2?arguments[2]:void 0,r=this;return Object(f.a)(regeneratorRuntime.mark(function o(){var a,i;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e.startsWith(".")&&(e=new URL(e,window.location.href).pathname),a=m(e),o.next=4,r.runGuards(a.segments);case 4:if(!0===(i=o.sent)){o.next=9;break}if("object"==typeof i){o.next=8;break}return o.abrupt("return",!1);case 8:a=m(i.redirect);case 9:return o.abrupt("return",(r.setPath(a.segments,t,a.queryString),r.writeNavStateRoot(a.segments,t,n)));case 10:case"end":return o.stop()}},o)}))()}},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:(function(e){console.group("[ion-core] ROUTES[".concat(e.length,"]"));var r,o=n(e);try{var a=function(){var e=r.value,n=[];e.forEach(function(e){return n.push.apply(n,t(e.path))});var o=e.map(function(e){return e.id});console.debug("%c ".concat(g(n)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(o.join(", "),")"))};for(o.s();!(r=o.n()).done;)a()}catch(i){o.e(i)}finally{o.f()}console.groupEnd()})(N(e.el)),function(e){console.group("[ion-core] REDIRECTS[".concat(e.length,"]"));var t,r=n(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;o.to&&console.debug("FROM: ","$c ".concat(g(o.from)),"font-weight: bold"," TO: ","$c ".concat(g(o.to.segments)),"font-weight: bold")}}catch(a){r.e(a)}finally{r.f()}console.groupEnd()}(L(e.el));case 1:case"end":return r.stop()}},r)}))()}},{key:"navChanged",value:function(e){var t=this;return Object(f.a)(regeneratorRuntime.mark(function r(){var o,a,i,u,c;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.busy){r.next=2;break}return r.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return r.next=4,w(window.document.body);case 4:if(o=r.sent,a=o.ids,i=o.outlet,u=function(e,t){var r,o=null,a=0,i=e.map(function(e){return e.id}),u=n(t);try{for(u.s();!(r=u.n()).done;){var c=r.value,s=j(i,c);s>a&&(o=c,a=s)}}catch(f){u.e(f)}finally{u.f()}return o?o.map(function(t,n){return{id:t.id,path:t.path,params:C(t.params,e[n]&&e[n].params)}}):null}(a,N(t.el))){r.next=10;break}return r.abrupt("return",(console.warn("[ion-router] no matching URL for ",a.map(function(e){return e.id})),!1));case 10:if(!(c=function(e){var t,r=[],o=n(e);try{for(o.s();!(t=o.n()).done;){var a,i=t.value,u=n(i.path);try{for(u.s();!(a=u.n()).done;){var c=a.value;if(":"===c[0]){var s=i.params&&i.params[c.slice(1)];if(!s)return null;r.push(s)}else""!==c&&r.push(c)}}catch(f){u.e(f)}finally{u.f()}}}catch(f){o.e(f)}finally{o.f()}return r}(u))){r.next=18;break}return t.setPath(c,e),r.next=15,t.safeWriteNavState(i,u,"root",c,null,a.length);case 15:r.t0=!0,r.next=19;break;case 18:r.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 19:return r.abrupt("return",r.t0);case 20:case"end":return r.stop()}},r)}))()}},{key:"onRedirectChanged",value:function(){var e=this.getPath();e&&x(e,L(this.el))&&this.writeNavStateRoot(e,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var e,t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,null===(e=t.document.location)||void 0===e?void 0:e.href));var n=t.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?"forward":n<r?"back":"root"}},{key:"writeNavStateRoot",value:function(e,t,n){var r=this;return Object(f.a)(regeneratorRuntime.mark(function o(){var a,i,u,c,s,f,l,h;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(e){o.next=2;break}return o.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return a=L(r.el),i=x(e,a),u=null,i&&(c=i.to,s=c.segments,f=c.queryString,r.setPath(s,t,f),u=i.from,e=s),l=N(r.el),h=S(e,l),o.abrupt("return",h?r.safeWriteNavState(document.body,h,t,e,u,0,n):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return o.stop()}},o)}))()}},{key:"safeWriteNavState",value:function(e,t,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6?arguments[6]:void 0,u=this;return Object(f.a)(regeneratorRuntime.mark(function c(){var s,f;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,u.lock();case 2:return s=c.sent,f=!1,c.prev=4,c.next=7,u.writeNavState(e,t,n,r,o,a,i);case 7:f=c.sent,c.next=13;break;case 10:c.prev=10,c.t0=c.catch(4),console.error(c.t0);case 13:return c.abrupt("return",(s(),f));case 14:case"end":return c.stop()}},c,null,[[4,10]])}))()}},{key:"lock",value:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark(function t(){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.waitPromise,e.waitPromise=new Promise(function(e){return r=e}),t.t0=void 0!==n,!t.t0){t.next=6;break}return t.next=6,n;case 6:return t.abrupt("return",r);case 7:case"end":return t.stop()}},t)}))()}},{key:"runGuards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getPath(),t=arguments.length>1?arguments[1]:void 0,n=this;return Object(f.a)(regeneratorRuntime.mark(function r(){var o,a,i,u,c,s;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(void 0===t&&(t=m(n.previousPath).segments),e&&t){r.next=2;break}return r.abrupt("return",!0);case 2:if(o=N(n.el),a=S(t,o),i=a&&a[a.length-1].beforeLeave,r.t0=!i,r.t0){r.next=10;break}return r.next=9,i();case 9:r.t0=r.sent;case 10:if(!1!==(u=r.t0)&&"object"!=typeof u){r.next=13;break}return r.abrupt("return",u);case 13:return c=S(e,o),s=c&&c[c.length-1].beforeEnter,r.abrupt("return",!s||s());case 15:case"end":return r.stop()}},r)}))()}},{key:"writeNavState",value:function(e,t,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6?arguments[6]:void 0,u=this;return Object(f.a)(regeneratorRuntime.mark(function c(){var s,f;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!u.busy){c.next=2;break}return c.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 2:return u.busy=!0,(s=u.routeChangeEvent(r,o))&&u.ionRouteWillChange.emit(s),c.next=7,y(e,t,n,a,!1,i);case 7:return f=c.sent,c.abrupt("return",(u.busy=!1,s&&u.ionRouteDidChange.emit(s),f));case 9:case"end":return c.stop()}},c)}))()}},{key:"setPath",value:function(e,n,r){var o=this;this.state++,function(e,n,r,a,i,u,c){var s=function(e,t,n){var r=g(e);return t&&(r="#"+r),void 0!==n&&(r+="?"+n),r}([].concat(t(m(o.root).segments),t(a)),r,c);"forward"===i?e.pushState(u,"",s):e.replaceState(u,"",s)}(window.history,0,this.useHash,e,n,this.state,r)}},{key:"getPath",value:function(){var e,t,n,r,o=this;return e=window.location,t=this.useHash,n=m(o.root).segments,r=t?e.hash.slice(1):e.pathname,function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return null;return t.length===e.length?[""]:t.slice(e.length)}(n,m(r).segments)}},{key:"routeChangeEvent",value:function(e,t){var n=this.previousPath,r=g(e);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:t?g(t):null,to:r}}},{key:"el",get:function(){return Object(l.k)(this)}}]),e}(),W=function(){function t(e){var n=this;a(this,t),Object(l.o)(this,e),this.routerDirection="forward",this.onClick=function(e){Object(d.d)(n.href,e,n.routerDirection,n.routerAnimation)}}return u(t,[{key:"render",value:function(){var t,n=Object(v.b)(this),r={href:this.href,rel:this.rel,target:this.target};return Object(l.j)(l.c,{onClick:this.onClick,class:Object(d.a)(this.color,(t={},e(t,n,!0),e(t,"ion-activatable",!0),t))},Object(l.j)("a",Object.assign({},r),Object(l.j)("slot",null)))}}]),t}();W.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}])}();