(()=>{var t,r,e={49283:(t,r,e)=>{"use strict";const n=e(32875),o=(t,r,e)=>t.map(((t,r)=>r)).filter((n=>e(r,t,n)));function c(t,r,e,s,i){const a=r.slice(),u=a[s];return a[s]=[e,...u],function(t,r,e){const s=t.findIndex(n.default);if(s<0)return!0;const i=t.slice(),[a,...u]=i[s];return i[s]=u,o(r,a,e).some((t=>c(i,r,a,t,e)))}(t,a,i)}r.UR=(t,r,e,n)=>o(r,e,n).filter((o=>c(t,r,e,o,n)))},62705:(t,r,e)=>{var n=e(55639).Symbol;t.exports=n},29932:t=>{t.exports=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o}},44239:(t,r,e)=>{var n=e(62705),o=e(89607),c=e(2333),s=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?o(t):c(t)}},28458:(t,r,e)=>{var n=e(23560),o=e(15346),c=e(13218),s=e(80346),i=/^\[object .+?Constructor\]$/,a=Function.prototype,u=Object.prototype,p=a.toString,l=u.hasOwnProperty,f=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!c(t)||o(t))&&(n(t)?f:i).test(s(t))}},7518:t=>{t.exports=function(t){return function(r){return t(r)}}},14429:(t,r,e)=>{var n=e(55639)["__core-js_shared__"];t.exports=n},31957:(t,r,e)=>{var n="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=n},10852:(t,r,e)=>{var n=e(28458),o=e(47801);t.exports=function(t,r){var e=o(t,r);return n(e)?e:void 0}},89607:(t,r,e)=>{var n=e(62705),o=Object.prototype,c=o.hasOwnProperty,s=o.toString,i=n?n.toStringTag:void 0;t.exports=function(t){var r=c.call(t,i),e=t[i];try{t[i]=void 0;var n=!0}catch(t){}var o=s.call(t);return n&&(r?t[i]=e:delete t[i]),o}},47801:t=>{t.exports=function(t,r){return null==t?void 0:t[r]}},15346:(t,r,e)=>{var n,o=e(14429),c=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!c&&c in t}},2333:t=>{var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},55639:(t,r,e)=>{var n=e(31957),o="object"==typeof self&&self&&self.Object===Object&&self,c=n||o||Function("return this")();t.exports=c},80346:t=>{var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},6557:t=>{t.exports=function(t){return t}},23560:(t,r,e)=>{var n=e(44239),o=e(13218);t.exports=function(t){if(!o(t))return!1;var r=n(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},13218:t=>{t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},97527:t=>{t.exports=function(){return!0}},97532:(t,r,e)=>{"use strict";e.d(r,{Z:()=>a});var n=e(73303),o=e(16746);var c=e(76303);const s=new Set(["Kazakhstan","Russia","Belarus","Lithuania","Latvia","Estonia","Norway","Finland","Sweden","Iceland","Faroe Islands"]);function i(t,r){const e=r-(r>>1),o=t=>s.has(t.country),c=t=>o(t)?1:0;return t=>n(t,c)<=e}const a=(t,r)=>{const e=(0,c.Z)(t),n=i(0,r);return(t,r,c)=>{const s=r[c],i=(0,o.Z)(r);var a;return!(s.length>i||s.some((a=t.country,t=>t.country===a))||s.some(e(t))||!n([...s,t])||t.pairing&&((t,r)=>{const e=t.length>>1,n=r<e?0:e;return t.slice(n,n+e)})(r,c).some(function(t){const r=function(t){const{id:r}=t;return t=>t.id===r}(t);return t=>t.some(r)}(t.pairing)))}}},76303:(t,r,e)=>{"use strict";e.d(r,{Z:()=>p});var n=e(95062),o=e(97527);const c=[{countries:["Russia","Ukraine"],predicate:(s=2014,i=Number.MAX_SAFE_INTEGER,t=>t>=s&&t<=i)},{countries:["Azerbaijan","Armenia"]},{countries:["Serbia","Kosovo"]},{countries:["Bosnia & Herzegovina","Kosovo"]},{countries:["Spain","Gibraltar"]}];var s,i;const a={predicate:o},u=c.map((t=>({...a,...t}))),p=t=>{const r=(t=>{const r=new Map;for(const{countries:e,predicate:n}of u)n(t)&&(r.set(e[0],e[1]),r.set(e[1],e[0]));return r.get.bind(r)})(t);return t=>{const e=r(t.country);return void 0===e?n:t=>t.country===e}}},83394:(t,r,e)=>{"use strict";var n=e(30845),o=e(49283),c=e(97532);const s=([t,r])=>JSON.stringify({year:t,groupSize:r}),i=(0,n.Z)(c.Z,((t,r)=>s(t)===s(r)));addEventListener("message",(t=>{const{messageId:r,data:{season:e,pots:n,groups:c,selectedTeam:s}}=t.data,a=i(e,n.length),u=(0,o.UR)(n,c,s,a);postMessage({messageId:r,data:{possibleGroups:u}})}))}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var c=n[t]={id:t,loaded:!1,exports:{}};return e[t](c,c.exports,o),c.loaded=!0,c.exports}o.m=e,o.x=()=>{var t=o.O(void 0,[2396,7823],(()=>o(83394)));return t=o.O(t)},t=[],o.O=(r,e,n,c)=>{if(!e){var s=1/0;for(p=0;p<t.length;p++){for(var[e,n,c]=t[p],i=!0,a=0;a<e.length;a++)(!1&c||s>=c)&&Object.keys(o.O).every((t=>o.O[t](e[a])))?e.splice(a--,1):(i=!1,c<s&&(s=c));if(i){t.splice(p--,1);var u=n();void 0!==u&&(r=u)}}return r}c=c||0;for(var p=t.length;p>0&&t[p-1][2]>c;p--)t[p]=t[p-1];t[p]=[e,n,c]},o.d=(t,r)=>{for(var e in r)o.o(r,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((r,e)=>(o.f[e](t,r),r)),[])),o.u=t=>t+"."+{2396:"c132345365fb64f93a46",7823:"e84989ff452798af5e5b"}[t]+".js",o.miniCssF=t=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var r=o.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var e=r.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={8502:1,2794:1};o.f.i=(r,e)=>{t[r]||importScripts(o.p+o.u(r))};var r=self.webpackChunkdraw=self.webpackChunkdraw||[],e=r.push.bind(r);r.push=r=>{var[n,c,s]=r;for(var i in c)o.o(c,i)&&(o.m[i]=c[i]);for(s&&s(o);n.length;)t[n.pop()]=1;e(r)}})(),r=o.x,o.x=()=>Promise.all([o.e(2396),o.e(7823)]).then(r);o.x()})();