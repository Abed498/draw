(()=>{var r,t,e={49283:(r,t,e)=>{"use strict";const n=e(32875),o=(r,t,e)=>r.map(((r,t)=>t)).filter((n=>e(t,r,n)));function c(r,t,e,u,i){const a=t.slice(),s=a[u];return a[u]=[e,...s],function(r,t,e){const u=r.findIndex(n.default);if(u<0)return!0;const i=r.slice(),[a,...s]=i[u];return i[u]=s,o(t,a,e).some((r=>c(i,t,a,r,e)))}(r,a,i)}t.up=(r,t,e,n)=>o(t,e,n).find((o=>c(r,t,e,o,n)))},62705:(r,t,e)=>{var n=e(55639).Symbol;r.exports=n},44174:r=>{r.exports=function(r,t,e,n){for(var o=-1,c=null==r?0:r.length;++o<c;){var u=r[o];t(n,u,e(u),r)}return n}},29932:r=>{r.exports=function(r,t){for(var e=-1,n=null==r?0:r.length,o=Array(n);++e<n;)o[e]=t(r[e],e,r);return o}},81119:(r,t,e)=>{var n=e(89881);r.exports=function(r,t,e,o){return n(r,(function(r,n,c){t(o,r,e(r),c)})),o}},89465:(r,t,e)=>{var n=e(38777);r.exports=function(r,t,e){"__proto__"==t&&n?n(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}},89881:(r,t,e)=>{var n=e(47816),o=e(99291)(n);r.exports=o},28483:(r,t,e)=>{var n=e(25063)();r.exports=n},47816:(r,t,e)=>{var n=e(28483),o=e(3674);r.exports=function(r,t){return r&&n(r,t,o)}},44239:(r,t,e)=>{var n=e(62705),o=e(89607),c=e(2333),u=n?n.toStringTag:void 0;r.exports=function(r){return null==r?void 0===r?"[object Undefined]":"[object Null]":u&&u in Object(r)?o(r):c(r)}},28458:(r,t,e)=>{var n=e(23560),o=e(15346),c=e(13218),u=e(80346),i=/^\[object .+?Constructor\]$/,a=Function.prototype,s=Object.prototype,f=a.toString,l=s.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");r.exports=function(r){return!(!c(r)||o(r))&&(n(r)?p:i).test(u(r))}},69199:(r,t,e)=>{var n=e(89881),o=e(98612);r.exports=function(r,t){var e=-1,c=o(r)?Array(r.length):[];return n(r,(function(r,n,o){c[++e]=t(r,n,o)})),c}},82689:(r,t,e)=>{var n=e(29932),o=e(97786),c=e(67206),u=e(69199),i=e(71131),a=e(7518),s=e(85022),f=e(6557),l=e(1469);r.exports=function(r,t,e){t=t.length?n(t,(function(r){return l(r)?function(t){return o(t,1===r.length?r[0]:r)}:r})):[f];var p=-1;t=n(t,a(c));var v=u(r,(function(r,e,o){return{criteria:n(t,(function(t){return t(r)})),index:++p,value:r}}));return i(v,(function(r,t){return s(r,t,e)}))}},71131:r=>{r.exports=function(r,t){var e=r.length;for(r.sort(t);e--;)r[e]=r[e].value;return r}},7518:r=>{r.exports=function(r){return function(t){return r(t)}}},26393:(r,t,e)=>{var n=e(33448);r.exports=function(r,t){if(r!==t){var e=void 0!==r,o=null===r,c=r==r,u=n(r),i=void 0!==t,a=null===t,s=t==t,f=n(t);if(!a&&!f&&!u&&r>t||u&&i&&s&&!a&&!f||o&&i&&s||!e&&s||!c)return 1;if(!o&&!u&&!f&&r<t||f&&e&&c&&!o&&!u||a&&e&&c||!i&&c||!s)return-1}return 0}},85022:(r,t,e)=>{var n=e(26393);r.exports=function(r,t,e){for(var o=-1,c=r.criteria,u=t.criteria,i=c.length,a=e.length;++o<i;){var s=n(c[o],u[o]);if(s)return o>=a?s:s*("desc"==e[o]?-1:1)}return r.index-t.index}},14429:(r,t,e)=>{var n=e(55639)["__core-js_shared__"];r.exports=n},55189:(r,t,e)=>{var n=e(44174),o=e(81119),c=e(67206),u=e(1469);r.exports=function(r,t){return function(e,i){var a=u(e)?n:o,s=t?t():{};return a(e,r,c(i,2),s)}}},99291:(r,t,e)=>{var n=e(98612);r.exports=function(r,t){return function(e,o){if(null==e)return e;if(!n(e))return r(e,o);for(var c=e.length,u=t?c:-1,i=Object(e);(t?u--:++u<c)&&!1!==o(i[u],u,i););return e}}},25063:r=>{r.exports=function(r){return function(t,e,n){for(var o=-1,c=Object(t),u=n(t),i=u.length;i--;){var a=u[r?i:++o];if(!1===e(c[a],a,c))break}return t}}},38777:(r,t,e)=>{var n=e(10852),o=function(){try{var r=n(Object,"defineProperty");return r({},"",{}),r}catch(r){}}();r.exports=o},31957:(r,t,e)=>{var n="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;r.exports=n},10852:(r,t,e)=>{var n=e(28458),o=e(47801);r.exports=function(r,t){var e=o(r,t);return n(e)?e:void 0}},89607:(r,t,e)=>{var n=e(62705),o=Object.prototype,c=o.hasOwnProperty,u=o.toString,i=n?n.toStringTag:void 0;r.exports=function(r){var t=c.call(r,i),e=r[i];try{r[i]=void 0;var n=!0}catch(r){}var o=u.call(r);return n&&(t?r[i]=e:delete r[i]),o}},47801:r=>{r.exports=function(r,t){return null==r?void 0:r[t]}},15346:(r,t,e)=>{var n,o=e(14429),c=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";r.exports=function(r){return!!c&&c in r}},2333:r=>{var t=Object.prototype.toString;r.exports=function(r){return t.call(r)}},55639:(r,t,e)=>{var n=e(31957),o="object"==typeof self&&self&&self.Object===Object&&self,c=n||o||Function("return this")();r.exports=c},80346:r=>{var t=Function.prototype.toString;r.exports=function(r){if(null!=r){try{return t.call(r)}catch(r){}try{return r+""}catch(r){}}return""}},49995:(r,t,e)=>{var n=e(89465),o=e(55189),c=Object.prototype.hasOwnProperty,u=o((function(r,t,e){c.call(r,e)?++r[e]:n(r,e,1)}));r.exports=u},6557:r=>{r.exports=function(r){return r}},23560:(r,t,e)=>{var n=e(44239),o=e(13218);r.exports=function(r){if(!o(r))return!1;var t=n(r);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},13218:r=>{r.exports=function(r){var t=typeof r;return null!=r&&("object"==t||"function"==t)}},66604:(r,t,e)=>{var n=e(89465),o=e(47816),c=e(67206);r.exports=function(r,t){var e={};return t=c(t,3),o(r,(function(r,o,c){n(e,o,t(r,o,c))})),e}},75472:(r,t,e)=>{var n=e(82689),o=e(1469);r.exports=function(r,t,e,c){return null==r?[]:(o(t)||(t=null==t?[]:[t]),o(e=c?void 0:e)||(e=null==e?[]:[e]),n(r,t,e))}},44714:(r,t,e)=>{"use strict";var n=e(30845),o=e(49283),c=e(75472),u=e(49995),i=e(73303),a=e(66604),s=e(16746);function f([r,t]){const e=c(t,(r=>r.id));return JSON.stringify({year:r,teams:e})}const l=(0,n.Z)(((r,t)=>{const e=(r=>r<2026?8:16)(r),n=t.length/e,o=u(t,(r=>r.confederation)),c=a(o,(r=>{const t=r/e;return[Math.floor(t),Math.ceil(t)]})),f=Object.entries(c);return(r,t,e)=>{const o=t[e],c=(0,s.Z)(t);if(o.length>c)return!1;const u=[...o,r],a=n-u.length;return f.every((([r,[t,e]])=>{const n=i(u,(t=>t.confederation===r?1:0));return n<=e&&n+a>=t}))}}),((r,t)=>f(r)===f(t)));addEventListener("message",(r=>{const{messageId:t,data:{season:e,pots:n,groups:c,selectedTeam:u}}=r.data,i=[u,...n.flat(),...c.flat()],a=l(e,i),s=(0,o.up)(n,c,u,a);postMessage({messageId:t,data:{pickedGroup:s}})}))}},n={};function o(r){var t=n[r];if(void 0!==t)return t.exports;var c=n[r]={id:r,loaded:!1,exports:{}};return e[r](c,c.exports,o),c.loaded=!0,c.exports}o.m=e,o.x=()=>{var r=o.O(void 0,[2396,7823],(()=>o(44714)));return r=o.O(r)},r=[],o.O=(t,e,n,c)=>{if(!e){var u=1/0;for(f=0;f<r.length;f++){for(var[e,n,c]=r[f],i=!0,a=0;a<e.length;a++)(!1&c||u>=c)&&Object.keys(o.O).every((r=>o.O[r](e[a])))?e.splice(a--,1):(i=!1,c<u&&(u=c));if(i){r.splice(f--,1);var s=n();void 0!==s&&(t=s)}}return t}c=c||0;for(var f=r.length;f>0&&r[f-1][2]>c;f--)r[f]=r[f-1];r[f]=[e,n,c]},o.d=(r,t)=>{for(var e in t)o.o(t,e)&&!o.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},o.f={},o.e=r=>Promise.all(Object.keys(o.f).reduce(((t,e)=>(o.f[e](r,t),t)),[])),o.u=r=>r+"."+{2396:"c132345365fb64f93a46",7823:"e84989ff452798af5e5b"}[r]+".js",o.miniCssF=r=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),o.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),o.nmd=r=>(r.paths=[],r.children||(r.children=[]),r),(()=>{var r;o.g.importScripts&&(r=o.g.location+"");var t=o.g.document;if(!r&&t&&(t.currentScript&&(r=t.currentScript.src),!r)){var e=t.getElementsByTagName("script");e.length&&(r=e[e.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=r})(),(()=>{var r={4714:1,8654:1};o.f.i=(t,e)=>{r[t]||importScripts(o.p+o.u(t))};var t=self.webpackChunkdraw=self.webpackChunkdraw||[],e=t.push.bind(t);t.push=t=>{var[n,c,u]=t;for(var i in c)o.o(c,i)&&(o.m[i]=c[i]);for(u&&u(o);n.length;)r[n.pop()]=1;e(t)}})(),t=o.x,o.x=()=>Promise.all([o.e(2396),o.e(7823)]).then(t);o.x()})();