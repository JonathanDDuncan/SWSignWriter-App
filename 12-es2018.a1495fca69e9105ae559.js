(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{mxtL:function(a,e,t){"use strict";t.r(e),t.d(e,"ShareWeb",function(){return r});var n=t("FUe0");class r extends n.b{async canShare(){return"undefined"!=typeof navigator&&navigator.share?{value:!0}:{value:!1}}async share(a){if("undefined"==typeof navigator||!navigator.share)throw this.unavailable("Share API not available in this browser");return await navigator.share({title:a.title,text:a.text,url:a.url}),{}}}}}]);