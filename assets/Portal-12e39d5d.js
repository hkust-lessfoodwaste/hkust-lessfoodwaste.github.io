import{P as C}from"./useConfigInject-855253b5.js";import{R,l,J as m,f as x,W as T,m as j,q as y,n as E,h as I,j as L,U as b}from"./vue-router.esm-bundler-d94c5ebd.js";var g=function(e){return setTimeout(e,16)},p=function(e){return clearTimeout(e)};typeof window<"u"&&"requestAnimationFrame"in window&&(g=function(e){return window.requestAnimationFrame(e)},p=function(e){return window.cancelAnimationFrame(e)});var d=0,c=new Map;function P(n){c.delete(n)}function U(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;d+=1;var a=d;function t(o){if(o===0)P(a),n();else{var r=g(function(){t(o-1)});c.set(a,r)}}return t(e),a}U.cancel=function(n){var e=c.get(n);return P(e),p(e)};var h=!1;try{var v=Object.defineProperty({},"passive",{get:function(){h=!0}});window.addEventListener("testPassive",null,v),window.removeEventListener("testPassive",null,v)}catch{}const q=h;function M(n,e,a,t){if(n&&n.addEventListener){var o=t;o===void 0&&q&&(e==="touchstart"||e==="touchmove"||e==="wheel")&&(o={passive:!1}),n.addEventListener(e,a,o)}return{remove:function(){n&&n.removeEventListener&&n.removeEventListener(e,a)}}}function N(n,e){return n?n.contains(e):!1}var A=Symbol("TriggerContextKey"),V=function(e){return e?m(A,{setPortal:function(){},popPortal:!1}):{setPortal:function(){},popPortal:!1}},w=Symbol("PortalContextKey"),D=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inTriggerContext:!0};R(w,{inTriggerContext:a.inTriggerContext,shouldRender:l(function(){var t=e||{},o=t.sPopupVisible,r=t.popupRef,f=t.forceRender,i=t.autoDestroy,s=!1;return(o||r||f)&&(s=!0),!o&&i&&(s=!1),s})})},F=function(){D({},{inTriggerContext:!1});var e=m(w,{shouldRender:l(function(){return!1}),inTriggerContext:!1});return{shouldRender:l(function(){return e.shouldRender.value||e.inTriggerContext===!1})}};const W=x({compatConfig:{MODE:3},name:"Portal",inheritAttrs:!1,props:{getContainer:C.func.isRequired,didUpdate:Function},setup:function(e,a){var t=a.slots,o=!0,r,f=F(),i=f.shouldRender;T(function(){o=!1,i.value&&(r=e.getContainer())});var s=j(i,function(){i.value&&!r&&(r=e.getContainer()),r&&s()});return y(function(){E(function(){if(i.value){var u;(u=e.didUpdate)===null||u===void 0||u.call(e,e)}})}),I(function(){r&&r.parentNode&&r.parentNode.removeChild(r)}),function(){if(!i.value)return null;if(o){var u;return(u=t.default)===null||u===void 0?void 0:u.call(t)}return r?L(b,{to:r},t):null}}});export{W as P,M as a,V as b,N as c,q as s,D as u,U as w};