(window.webpackJsonp=window.webpackJsonp||[]).push([["wc.gs",5],{489:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(193),r=n(19),l=n(476),u=n(506),s=n(504),d=n(467),i=n(466),m=n(474),p=n(473),b=n(505),f=n(470),j=n(471),O=n(477),g=n(475),k=n(472),h=n(490),w=n.n(h);const E=["rgba(0, 128, 0, 0.25)"];function P(e){return{currentPotNum:0,selectedTeam:null,pickedGroup:null,hungPot:e[0]}}t.default=Object(c.memo)(({pots:e})=>{const[t,n]=Object(d.a)("draw-"),h=Object(c.useMemo)(()=>e.map(e=>o(e)),[e,t]),T=Object(c.useMemo)(()=>e[0].map(()=>[]),[e,t]),G=Object(c.useMemo)(()=>P(h),[h]),[{currentPotNum:N,selectedTeam:y,pickedGroup:x,hungPot:C},v]=Object(c.useState)(G),[,M]=Object(r.a)(),$=Object(s.a)(w.a),[I,J]=Object(l.a)(),[S,A]=Object(u.a)(3e3),W=Object(c.useCallback)(async e=>(await $({pots:h,groups:T,selectedTeam:e})).pickedGroup,[h,T,$]),q=Object(c.useCallback)(async e=>{if(y)return;const t=h[N];t[e]&&v({currentPotNum:N,hungPot:t.slice(),selectedTeam:t.splice(e,1)[0],pickedGroup:null})},[h,N]);Object(c.useEffect)(()=>{y&&(async()=>{if(!y)throw new Error("no selected team");let e;A.set(y);try{e=await W(y)}catch(e){return console.error(e),void M({error:"Could not determine the group"})}T[e].push(y);const t=h[N].length>0?N:N+1;J.add(y),A.reset(),v({selectedTeam:null,pickedGroup:e,hungPot:h[t],currentPotNum:t})})()},[y]),Object(c.useEffect)(()=>{const e=h[N].findIndex(e=>e.host);q(e)},[t]);const z=Object(c.useCallback)(()=>{n(),v(P(e))},[e]),B=N>=h.length;return a.a.createElement(k.a,null,a.a.createElement(f.a,null,a.a.createElement(p.a,{selectedTeams:y&&[y],initialPots:e,pots:h,currentPotNum:N}),a.a.createElement(b.a,{maxTeams:h.length,currentPotNum:N,groups:T,possibleGroups:null,airborneTeams:I,groupColors:E})),a.a.createElement(j.a,null,a.a.createElement(O.a,{forceNoSelect:!!y,display:!B,selectedTeam:y,pot:C,onPick:q}),a.a.createElement(g.a,{long:!0,calculating:S,completed:B,selectedTeam:y,pickedGroup:x,possibleGroups:null,numGroups:T.length,reset:z})),I.map(e=>{const t=T.findIndex(t=>t.includes(e)),n=Object(i.a)(t),c=T[t].indexOf(e);return a.a.createElement(m.a,{key:e.id,from:`[data-cellid='${e.id}']`,to:`[data-cellid='${n}${c}']`,duration:350,data:e,onAnimationEnd:J.remove})}))})},490:function(e,t,n){e.exports=function(){return new Worker(n.p+"e920c76296bb9f2f71d6.worker.js")}}}]);