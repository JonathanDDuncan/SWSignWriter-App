(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3Iwd":function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",function(){return p});var o=n("HaE+"),r=n("1vRN");const i=new WeakMap,a=(e,t,n,o=0)=>{i.has(e)!==n&&(n?c(e,t,o):l(e,t))},s=e=>e===e.getRootNode().activeElement,c=(e,t,n)=>{const o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(e,r);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},l=(e,t)=>{const n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},d="input, textarea, [no-blur], [contenteditable]",u=function(){var e=Object(o.a)(function*(e,t,n,i,s){if(!n&&!i)return;const c=((e,t,n)=>((e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=a+15,c=.75*Math.min(t.bottom,o-n)-i,l=s-r,d=Math.round(c<0?-c:l>0?-l:0),u=Math.min(d,r-a),f=Math.abs(u);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:n,inputSafeY:4-(r-s)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight))(e,n||i,s);if(n&&Math.abs(c.scrollAmount)<4)t.focus();else if(a(e,t,!0,c.inputSafeY),t.focus(),Object(r.q)(()=>e.click()),"undefined"!=typeof window){let r;const i=function(){var l=Object(o.a)(function*(){void 0!==r&&clearTimeout(r),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",i),n&&(yield n.scrollByPoint(0,c.scrollAmount,c.scrollDuration)),a(e,t,!1,c.inputSafeY),t.focus()});return function(){return l.apply(this,arguments)}}(),s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",i)};if(n){const e=yield n.getScrollElement();if(c.scrollAmount>e.scrollHeight-e.clientHeight-e.scrollTop)return"password"===t.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",i),void(r=setTimeout(i,1e3))}i()}});return function(t,n,o,r,i){return e.apply(this,arguments)}}(),f=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n.$ionPaddingTimer=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},p=e=>{const t=document,n=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",!0),l=e.getBoolean("inputBlurring",!0),p=e.getBoolean("scrollPadding",!0),m=Array.from(t.querySelectorAll("ion-input, ion-textarea")),v=new WeakMap,w=new WeakMap,b=function(){var e=Object(o.a)(function*(e){yield new Promise(t=>Object(r.c)(e,t));const t=e.shadowRoot||e,o=t.querySelector("input")||t.querySelector("textarea"),l=e.closest("ion-content"),d=l?null:e.closest("ion-footer");if(o){if(l&&c&&!v.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{s(t)&&a(e,t,n)},i=()=>a(e,t,!1),c=()=>o(!0),l=()=>o(!1);return Object(r.a)(n,"ionScrollStart",c),Object(r.a)(n,"ionScrollEnd",l),t.addEventListener("blur",i),()=>{Object(r.b)(n,"ionScrollStart",c),Object(r.b)(n,"ionScrollEnd",l),t.addEventListener("ionBlur",i)}})(e,o,l);v.set(e,t)}if((l||d)&&i&&!w.has(e)){const t=((e,t,n,o,i)=>{let a;const c=e=>{a=Object(r.p)(e)},l=c=>{if(!a)return;const l=Object(r.p)(c);((e,t,n)=>{if(t&&n){const e=t.x-n.x,o=t.y-n.y;return e*e+o*o>36}return!1})(0,a,l)||s(t)||(c.stopPropagation(),u(e,t,n,o,i))};return e.addEventListener("touchstart",c,!0),e.addEventListener("touchend",l,!0),()=>{e.removeEventListener("touchstart",c,!0),e.removeEventListener("touchend",l,!0)}})(e,o,l,d,n);w.set(e,t)}}});return function(t){return e.apply(this,arguments)}}();l&&(()=>{let e=!0,t=!1;const n=document;Object(r.a)(n,"ionScrollStart",()=>{t=!0}),n.addEventListener("focusin",()=>{e=!0},!0),n.addEventListener("touchend",o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(d))return;const i=o.target;i!==r&&(i.matches(d)||i.closest(d)||(e=!1,setTimeout(()=>{e||r.blur()},50)))},!1)})(),p&&(e=>{const t=document;t.addEventListener("focusin",t=>{f(t.target,e)}),t.addEventListener("focusout",e=>{f(e.target,0)})})(n);for(const o of m)b(o);t.addEventListener("ionInputDidLoad",e=>{b(e.detail)}),t.addEventListener("ionInputDidUnload",e=>{(e=>{if(c){const t=v.get(e);t&&t(),v.delete(e)}if(i){const t=w.get(e);t&&t(),w.delete(e)}})(e.detail)})}}}]);