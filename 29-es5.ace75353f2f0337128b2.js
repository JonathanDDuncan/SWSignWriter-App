!function(){function t(t,i){for(var o=0;o<i.length;o++){var n=i[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{wHD8:function(i,o,n){"use strict";n.r(o),n.d(o,"ion_img",function(){return s});var e=n("wEJo"),r=n("E/Mt"),s=function(){function i(t){var o=this;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i),Object(e.o)(this,t),this.ionImgWillLoad=Object(e.g)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(e.g)(this,"ionImgDidLoad",7),this.ionError=Object(e.g)(this,"ionError",7),this.onLoad=function(){o.ionImgDidLoad.emit()},this.onError=function(){o.ionError.emit()}}var o,n,s;return o=i,s=[{key:"watchers",get:function(){return{src:["srcChanged"]}}}],(n=[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var t=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(function(i){i[i.length-1].isIntersecting&&(t.load(),t.removeIO())}),this.io.observe(this.el)):setTimeout(function(){return t.load()},200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return Object(e.j)(e.c,{class:Object(r.b)(this)},Object(e.j)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}},{key:"el",get:function(){return Object(e.k)(this)}}])&&t(o.prototype,n),s&&t(o,s),Object.defineProperty(o,"prototype",{writable:!1}),i}();s.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}])}();