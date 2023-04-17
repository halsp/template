import{d as St,c as C,_ as Dt,o as U,a as vt,b as H,n as it,e as Rt,r as Ie,w as Ce,f as Ee,u as T,g as ke,h as Te,i as Oe,j as Pe,t as Ae,k as kt,l as _e}from"./index-3dd2e407.js";const je=St({name:"SvgIcon",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},size:{type:[Number,String],default:16},spin:{type:Boolean,default:!1},color:{type:String,default:""}},setup(t){const e=C(()=>`#${t.prefix}-${t.name}`),n=C(()=>{const{size:s}=t;let o=`${s}`;return o=`${o.replace("px","")}px`,{width:o,height:o}});return{symbolId:e,getStyle:n}}});const Me=["fill"],Le=["xlink:href"];function Fe(t,e,n,s,o,r){return U(),vt("svg",{class:it([t.$attrs.class,t.spin&&"svg-icon-spin"]),style:Rt(t.getStyle),fill:t.color,"aria-hidden":"true"},[H("use",{"xlink:href":t.symbolId},null,8,Le)],14,Me)}const Ne=Dt(je,[["render",Fe],["__scopeId","data-v-b89aadc5"]]);/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.1.0
*/const Bt=Object.freeze({left:0,top:0,width:16,height:16}),W=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),N=Object.freeze({...Bt,...W}),ct=Object.freeze({...N,body:"",hidden:!1});function $e(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function Tt(t,e){const n=$e(t,e);for(const s in ct)s in W?s in t&&!(s in n)&&(n[s]=W[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function ze(t,e){const n=t.icons,s=t.aliases||Object.create(null),o=Object.create(null);function r(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=s[i]&&s[i].parent,a=c&&r(c);a&&(o[i]=[c].concat(a))}return o[i]}return(e||Object.keys(n).concat(Object.keys(s))).forEach(r),o}function De(t,e,n){const s=t.icons,o=t.aliases||Object.create(null);let r={};function i(c){r=Tt(s[c]||o[c],r)}return i(e),n.forEach(i),Tt(t,r)}function Vt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const s=ze(t);for(const o in s){const r=s[o];r&&(e(o,De(t,o,r)),n.push(o))}return n}const j=/^[a-z0-9]+(-[a-z0-9]+)*$/,P=(t,e,n,s="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;s=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),a=o.pop(),u={provider:o.length>0?o[0]:s,prefix:a,name:c};return e&&!Q(u)?null:u}const r=o[0],i=r.split("-");if(i.length>1){const c={provider:s,prefix:i.shift(),name:i.join("-")};return e&&!Q(c)?null:c}if(n&&s===""){const c={provider:s,prefix:"",name:r};return e&&!Q(c,n)?null:c}return null},Q=(t,e)=>t?!!((t.provider===""||t.provider.match(j))&&(e&&t.prefix===""||t.prefix.match(j))&&t.name.match(j)):!1,Re={provider:"",aliases:{},not_found:{},...Bt};function ot(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function qt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!ot(t,Re))return null;const n=e.icons;for(const o in n){const r=n[o];if(!o.match(j)||typeof r.body!="string"||!ot(r,ct))return null}const s=e.aliases||Object.create(null);for(const o in s){const r=s[o],i=r.parent;if(!o.match(j)||typeof i!="string"||!n[i]&&!s[i]||!ot(r,ct))return null}return e}const K=Object.create(null);function Be(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function v(t,e){const n=K[t]||(K[t]=Object.create(null));return n[e]||(n[e]=Be(t,e))}function wt(t,e){return qt(e)?Vt(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function Ve(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}function qe(t,e){let n=[];return(typeof t=="string"?[t]:Object.keys(K)).forEach(o=>{(typeof o=="string"&&typeof e=="string"?[e]:Object.keys(K[o]||{})).forEach(i=>{const c=v(o,i);n=n.concat(Object.keys(c.icons).map(a=>(o!==""?"@"+o+":":"")+i+":"+a))})}),n}let L=!1;function He(t){return typeof t=="boolean"&&(L=t),L}function $(t){const e=typeof t=="string"?P(t,!0,L):t;if(e){const n=v(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function Ht(t,e){const n=P(t,!0,L);if(!n)return!1;const s=v(n.provider,n.prefix);return Ve(s,n.name,e)}function Qt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),L&&!e&&!t.prefix){let o=!1;return qt(t)&&(t.prefix="",Vt(t,(r,i)=>{i&&Ht(r,i)&&(o=!0)})),o}const n=t.prefix;if(!Q({provider:e,prefix:n,name:"a"}))return!1;const s=v(e,n);return!!wt(s,t)}function Qe(t){return!!$(t)}function Ge(t){const e=$(t);return e?{...N,...e}:null}const Gt=Object.freeze({width:null,height:null}),Ut=Object.freeze({...Gt,...W}),Ue=/(-?[0-9.]*[0-9]+[0-9.]*)/g,We=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function at(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(Ue);if(s===null||!s.length)return t;const o=[];let r=s.shift(),i=We.test(r);for(;;){if(i){const c=parseFloat(r);isNaN(c)?o.push(r):o.push(Math.ceil(c*e*n)/n)}else o.push(r);if(r=s.shift(),r===void 0)return o.join("");i=!i}}const Ke=t=>t==="unset"||t==="undefined"||t==="none";function Y(t,e){const n={...N,...t},s={...Ut,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,s].forEach(g=>{const m=[],x=g.hFlip,R=g.vFlip;let y=g.rotate;x?R?y+=2:(m.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),m.push("scale(-1 1)"),o.top=o.left=0):R&&(m.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),m.push("scale(1 -1)"),o.top=o.left=0);let b;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:b=o.height/2+o.top,m.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:m.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,m.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}y%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),m.length&&(r='<g transform="'+m.join(" ")+'">'+r+"</g>")});const i=s.width,c=s.height,a=o.width,u=o.height;let f,l;i===null?(l=c===null?"1em":c==="auto"?u:c,f=at(l,a/u)):(f=i==="auto"?a:i,l=c===null?at(f,u/a):c==="auto"?u:c);const d={},h=(g,m)=>{Ke(m)||(d[g]=m.toString())};return h("width",f),h("height",l),d.viewBox=o.left.toString()+" "+o.top.toString()+" "+a.toString()+" "+u.toString(),{attributes:d,body:r}}const Je=/\sid="(\S+)"/g,Xe="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ye=0;function Wt(t,e=Xe){const n=[];let s;for(;s=Je.exec(t);)n.push(s[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const i=typeof e=="function"?e(r):e+(Ye++).toString(),c=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const E={local:!0,session:!0},Kt={local:new Set,session:new Set};let xt=!1;function Ze(t){xt=t}const Ot="iconify2",F="iconify",Jt=F+"-count",Pt=F+"-version",Xt=36e5,tn=168;function ut(t,e){try{return t.getItem(e)}catch{}}function It(t,e,n){try{return t.setItem(e,n),!0}catch{}}function At(t,e){try{t.removeItem(e)}catch{}}function ft(t,e){return It(t,Jt,e.toString())}function lt(t){return parseInt(ut(t,Jt))||0}let V=typeof window>"u"?{}:window;function Yt(t){const e=t+"Storage";try{if(V&&V[e]&&typeof V[e].length=="number")return V[e]}catch{}E[t]=!1}function Zt(t,e){const n=Yt(t);if(!n)return;const s=ut(n,Pt);if(s!==Ot){if(s){const c=lt(n);for(let a=0;a<c;a++)At(n,F+a.toString())}It(n,Pt,Ot),ft(n,0);return}const o=Math.floor(Date.now()/Xt)-tn,r=c=>{const a=F+c.toString(),u=ut(n,a);if(typeof u=="string"){try{const f=JSON.parse(u);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&e(f,c))return!0}catch{}At(n,a)}};let i=lt(n);for(let c=i-1;c>=0;c--)r(c)||(c===i-1?(i--,ft(n,i)):Kt[t].add(c))}function te(){if(!xt){Ze(!0);for(const t in E)Zt(t,e=>{const n=e.data,s=e.provider,o=n.prefix,r=v(s,o);if(!wt(r,n).length)return!1;const i=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,i):i,!0})}}function ee(t,e){switch(t){case"local":case"session":E[t]=e;break;case"all":for(const n in E)E[n]=e;break}}const dt=Object.create(null);function ne(t,e){dt[t]=e}function pt(t){return dt[t]||dt[""]}function Ct(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Z=Object.create(null),_=["https://api.simplesvg.com","https://api.unisvg.com"],G=[];for(;_.length>0;)_.length===1||Math.random()>.5?G.push(_.shift()):G.push(_.pop());Z[""]=Ct({resources:["https://api.iconify.design"].concat(G)});function oe(t,e){const n=Ct(e);return n===null?!1:(Z[t]=n,!0)}function tt(t){return Z[t]}function en(){return Object.keys(Z)}const nn=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let J=nn();function on(t){J=t}function sn(){return J}function rn(t,e){const n=tt(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const r=e+".json?icons=";s=n.maxURL-o-n.path.length-r.length}return s}function cn(t){return t===404}const an=(t,e,n)=>{const s=[],o=rn(t,e),r="icons";let i={type:r,provider:t,prefix:e,icons:[]},c=0;return n.forEach((a,u)=>{c+=a.length+1,c>=o&&u>0&&(s.push(i),i={type:r,provider:t,prefix:e,icons:[]},c=a.length),i.icons.push(a)}),s.push(i),s};function un(t){if(typeof t=="string"){const e=tt(t);if(e)return e.path}return"/"}const fn=(t,e,n)=>{if(!J){n("abort",424);return}let s=un(e.provider);switch(e.type){case"icons":{const r=e.prefix,c=e.icons.join(","),a=new URLSearchParams({icons:c});s+=r+".json?"+a.toString();break}case"custom":{const r=e.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;J(t+s).then(r=>{const i=r.status;if(i!==200){setTimeout(()=>{n(cn(i)?"abort":"next",i)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})},ln={prepare:an,send:fn};function dn(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return t.forEach(o=>{if(s.name===o.name&&s.prefix===o.prefix&&s.provider===o.provider)return;s=o;const r=o.provider,i=o.prefix,c=o.name,a=n[r]||(n[r]=Object.create(null)),u=a[i]||(a[i]=v(r,i));let f;c in u.icons?f=e.loaded:i===""||u.missing.has(c)?f=e.missing:f=e.pending;const l={provider:r,prefix:i,name:c};f.push(l)}),e}function se(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(o=>o.id!==e))})}function pn(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,o=t.prefix;e.forEach(r=>{const i=r.icons,c=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==o)return!0;const u=a.name;if(t.icons[u])i.loaded.push({provider:s,prefix:o,name:u});else if(t.missing.has(u))i.missing.push({provider:s,prefix:o,name:u});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||se([t],r.id),r.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),r.abort))})}))}let hn=0;function gn(t,e,n){const s=hn++,o=se.bind(null,n,s);if(!e.pending.length)return o;const r={id:s,icons:e,callback:t,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(r)}),o}function mn(t,e=!0,n=!1){const s=[];return t.forEach(o=>{const r=typeof o=="string"?P(o,e,n):o;r&&s.push(r)}),s}var yn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function bn(t,e,n,s){const o=t.resources.length,r=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let p=t.resources.slice(0);for(i=[];p.length>1;){const S=Math.floor(Math.random()*p.length);i.push(p[S]),p=p.slice(0,S).concat(p.slice(S+1))}i=i.concat(p)}else i=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let a="pending",u=0,f,l=null,d=[],h=[];typeof s=="function"&&h.push(s);function g(){l&&(clearTimeout(l),l=null)}function m(){a==="pending"&&(a="aborted"),g(),d.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),d=[]}function x(p,S){S&&(h=[]),typeof p=="function"&&h.push(p)}function R(){return{startTime:c,payload:e,status:a,queriesSent:u,queriesPending:d.length,subscribe:x,abort:m}}function y(){a="failed",h.forEach(p=>{p(void 0,f)})}function b(){d.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),d=[]}function xe(p,S,A){const B=S!=="success";switch(d=d.filter(I=>I!==p),a){case"pending":break;case"failed":if(B||!t.dataAfterTimeout)return;break;default:return}if(S==="abort"){f=A,y();return}if(B){f=A,d.length||(i.length?nt():y());return}if(g(),b(),!t.random){const I=t.resources.indexOf(p.resource);I!==-1&&I!==t.index&&(t.index=I)}a="completed",h.forEach(I=>{I(A)})}function nt(){if(a!=="pending")return;g();const p=i.shift();if(p===void 0){if(d.length){l=setTimeout(()=>{g(),a==="pending"&&(b(),y())},t.timeout);return}y();return}const S={status:"pending",resource:p,callback:(A,B)=>{xe(S,A,B)}};d.push(S),u++,l=setTimeout(nt,t.rotate),n(p,e,S.callback)}return setTimeout(nt),R}function re(t){const e={...yn,...t};let n=[];function s(){n=n.filter(c=>c().status==="pending")}function o(c,a,u){const f=bn(e,c,a,(l,d)=>{s(),u&&u(l,d)});return n.push(f),f}function r(c){return n.find(a=>c(a))||null}return{query:o,find:r,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:s}}function _t(){}const st=Object.create(null);function Sn(t){if(!st[t]){const e=tt(t);if(!e)return;const n=re(e),s={config:e,redundancy:n};st[t]=s}return st[t]}function ie(t,e,n){let s,o;if(typeof t=="string"){const r=pt(t);if(!r)return n(void 0,424),_t;o=r.send;const i=Sn(t);i&&(s=i.redundancy)}else{const r=Ct(t);if(r){s=re(r);const i=t.resources?t.resources[0]:"",c=pt(i);c&&(o=c.send)}}return!s||!o?(n(void 0,424),_t):s.query(e,o,n)().abort}function vn(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const s in E)Zt(s,o=>{const r=o.data;return o.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===e});return!0}function wn(t,e){xt||te();function n(s){let o;if(!E[s]||!(o=Yt(s)))return;const r=Kt[s];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=lt(o),!ft(o,i+1))return;const c={cached:Math.floor(Date.now()/Xt),provider:t.provider,data:e};return It(o,F+i.toString(),JSON.stringify(c))}e.lastModified&&!vn(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function jt(){}function xn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,pn(t)}))}function In(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,o=t.iconsToLoad;delete t.iconsToLoad;let r;if(!o||!(r=pt(n)))return;r.prepare(n,s,o).forEach(c=>{ie(n,c,a=>{if(typeof a!="object")c.icons.forEach(u=>{t.missing.add(u)});else try{const u=wt(t,a);if(!u.length)return;const f=t.pendingIcons;f&&u.forEach(l=>{f.delete(l)}),wn(t,a)}catch(u){console.error(u)}xn(t)})})}))}const Cn=t=>{const n=v(t.provider,t.prefix).pendingIcons;return!!(n&&n.has(t.name))},Et=(t,e)=>{const n=mn(t,!0,He()),s=dn(n);if(!s.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(s.loaded,s.missing,s.pending,jt)}),()=>{a=!1}}const o=Object.create(null),r=[];let i,c;return s.pending.forEach(a=>{const{provider:u,prefix:f}=a;if(f===c&&u===i)return;i=u,c=f,r.push(v(u,f));const l=o[u]||(o[u]=Object.create(null));l[f]||(l[f]=[])}),s.pending.forEach(a=>{const{provider:u,prefix:f,name:l}=a,d=v(u,f),h=d.pendingIcons||(d.pendingIcons=new Set);h.has(l)||(h.add(l),o[u][f].push(l))}),r.forEach(a=>{const{provider:u,prefix:f}=a;o[u][f].length&&In(a,o[u][f])}),e?gn(e,s,r):jt},En=t=>new Promise((e,n)=>{const s=typeof t=="string"?P(t,!0):t;if(!s){n(t);return}Et([s||t],o=>{if(o.length&&s){const r=$(s);if(r){e({...N,...r});return}}n(t)})});function ce(t,e){const n={...t};for(const s in e){const o=e[s],r=typeof o;s in Gt?(o===null||o&&(r==="string"||r==="number"))&&(n[s]=o):r===typeof n[s]&&(n[s]=s==="rotate"?o%4:o)}return n}const et={...Ut,inline:!1},rt="iconify",ht="iconify-inline",w="iconifyData"+Date.now();let k=[];function z(t){for(let e=0;e<k.length;e++){const n=k[e];if((typeof n.node=="function"?n.node():n.node)===t)return n}}function ae(t,e=!1){let n=z(t);return n?(n.temporary&&(n.temporary=e),n):(n={node:t,temporary:e},k.push(n),n)}function kn(){if(document.documentElement)return ae(document.documentElement);k.push({node:()=>document.documentElement})}function Tn(t){k=k.filter(e=>t!==e&&t!==(typeof e.node=="function"?e.node():e.node))}function D(){return k}function On(t){const e=document;e.readyState&&e.readyState!=="loading"?t():e.addEventListener("DOMContentLoaded",t)}let M=null;const Pn={childList:!0,subtree:!0,attributes:!0};function ue(t){if(!t.observer)return;const e=t.observer;e.pendingScan||(e.pendingScan=setTimeout(()=>{delete e.pendingScan,M&&M(t)}))}function An(t,e){if(!t.observer)return;const n=t.observer;if(!n.pendingScan)for(let s=0;s<e.length;s++){const o=e[s];if(o.addedNodes&&o.addedNodes.length>0||o.type==="attributes"&&o.target[w]!==void 0){n.paused||ue(t);return}}}function fe(t,e){t.observer.instance.observe(e,Pn)}function X(t){let e=t.observer;if(e&&e.instance)return;const n=typeof t.node=="function"?t.node():t.node;!n||!window||(e||(e={paused:0},t.observer=e),e.instance=new window.MutationObserver(An.bind(null,t)),fe(t,n),e.paused||ue(t))}function Mt(){D().forEach(X)}function le(t){if(!t.observer)return;const e=t.observer;e.pendingScan&&(clearTimeout(e.pendingScan),delete e.pendingScan),e.instance&&(e.instance.disconnect(),delete e.instance)}function _n(t){const e=M!==null;if(M!==t&&(M=t,e&&D().forEach(le)),e){Mt();return}On(Mt)}function gt(t){(t?[t]:D()).forEach(e=>{if(!e.observer){e.observer={paused:1};return}const n=e.observer;if(n.paused++,n.paused>1||!n.instance)return;n.instance.disconnect()})}function jn(t){if(t){const e=z(t);e&&gt(e)}else gt()}function mt(t){(t?[t]:D()).forEach(e=>{if(!e.observer){X(e);return}const n=e.observer;if(n.paused&&(n.paused--,!n.paused)){const s=typeof e.node=="function"?e.node():e.node;if(s)n.instance?fe(e,s):X(e);else return}})}function Mn(t){if(t){const e=z(t);e&&mt(e)}else mt()}function de(t,e=!1){const n=ae(t,e);return X(n),n}function pe(t){const e=z(t);e&&(le(e),Tn(t))}function Ln(t,e){if(t.name!==e.name||t.mode!==e.mode)return!0;const n=t.customisations,s=e.customisations;for(const o in et)if(n[o]!==s[o])return!0;return!1}function Fn(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:s(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?s(r):0)}}return e}const Nn=/[\s,]+/;function $n(t,e){e.split(Nn).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const zn=["width","height"],Dn=["inline","hFlip","vFlip"];function Rn(t,e){return t===e||t==="true"?!0:t===""||t==="false"?!1:null}function Bn(t){const e=t.getAttribute("data-icon"),n=typeof e=="string"&&P(e,!0);if(!n)return null;const s={...et,inline:t.classList&&t.classList.contains(ht)};zn.forEach(c=>{const a=t.getAttribute("data-"+c);a&&(s[c]=a)});const o=t.getAttribute("data-rotate");typeof o=="string"&&(s.rotate=Fn(o));const r=t.getAttribute("data-flip");typeof r=="string"&&$n(s,r),Dn.forEach(c=>{const a="data-"+c,u=Rn(t.getAttribute(a),a);typeof u=="boolean"&&(s[c]=u)});const i=t.getAttribute("data-mode");return{name:e,icon:n,customisations:s,mode:i}}const Vn="svg."+rt+", i."+rt+", span."+rt+", i."+ht+", span."+ht;function qn(t){const e=[];return t.querySelectorAll(Vn).forEach(n=>{const s=n[w]||n.tagName.toLowerCase()!=="svg"?Bn(n):null;s&&e.push({node:n,props:s})}),e}function he(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function ge(t){const e=new Set(["iconify"]);return["provider","prefix"].forEach(n=>{t[n]&&e.add("iconify--"+t[n])}),e}function me(t,e,n,s){const o=t.classList;if(s){const i=s.classList;Array.from(i).forEach(c=>{o.add(c)})}const r=[];return e.forEach(i=>{o.contains(i)?n.has(i)&&r.push(i):(o.add(i),r.push(i))}),n.forEach(i=>{e.has(i)||o.remove(i)}),r}function ye(t,e,n){const s=t.style;(n||[]).forEach(r=>{s.removeProperty(r)});const o=[];for(const r in e)s.getPropertyValue(r)||(o.push(r),s.setProperty(r,e[r]));return o}function be(t,e,n){let s;try{s=document.createElement("span")}catch{return t}const o=e.customisations,r=Y(n,o),i=t[w],c=he(Wt(r.body),{"aria-hidden":"true",role:"img",...r.attributes});s.innerHTML=c;const a=s.childNodes[0],u=t.attributes;for(let g=0;g<u.length;g++){const m=u.item(g),x=m.name;x!=="class"&&!a.hasAttribute(x)&&a.setAttribute(x,m.value)}const f=ge(e.icon),l=me(a,f,new Set(i&&i.addedClasses),t),d=ye(a,o.inline?{"vertical-align":"-0.125em"}:{},i&&i.addedStyles),h={...e,status:"loaded",addedClasses:l,addedStyles:d};return a[w]=h,t.parentNode&&t.parentNode.replaceChild(a,t),a}function Hn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Qn(t){return'url("data:image/svg+xml,'+Hn(t)+'")'}const Gn={display:"inline-block"},yt={"background-color":"currentColor"},Se={"background-color":"transparent"},Lt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ft={"-webkit-mask":yt,mask:yt,background:Se};for(const t in Ft){const e=Ft[t];for(const n in Lt)e[t+"-"+n]=Lt[n]}function Nt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function Un(t,e,n,s){const o=e.customisations,r=Y(n,o),i=r.attributes,c=t[w],a=he(r.body,{...i,width:n.width+"",height:n.height+""}),u=ge(e.icon),f=me(t,u,new Set(c&&c.addedClasses)),d={"--svg":Qn(a),width:Nt(i.width),height:Nt(i.height),...Gn,...s?yt:Se};o.inline&&(d["vertical-align"]="-0.125em");const h=ye(t,d,c&&c.addedStyles),g={...e,status:"loaded",addedClasses:f,addedStyles:h};return t[w]=g,t}let q=!1;function Wn(){q||(q=!0,setTimeout(()=>{q&&(q=!1,O())}))}function O(t,e=!1){const n=Object.create(null);function s(o,r){const{provider:i,prefix:c,name:a}=o,u=v(i,c),f=u.icons[a];if(f)return{status:"loaded",icon:f};if(u.missing.has(a))return{status:"missing"};if(r&&!Cn(o)){const l=n[i]||(n[i]=Object.create(null));(l[c]||(l[c]=new Set)).add(a)}return{status:"loading"}}(t?[t]:D()).forEach(o=>{const r=typeof o.node=="function"?o.node():o.node;if(!r||!r.querySelectorAll)return;let i=!1,c=!1;function a(u,f,l){if(c||(c=!0,gt(o)),u.tagName.toUpperCase()!=="SVG"){const d=f.mode,h=d==="mask"||(d==="bg"?!1:d==="style"?l.body.indexOf("currentColor")!==-1:null);if(typeof h=="boolean"){Un(u,f,{...N,...l},h);return}}be(u,f,l)}qn(r).forEach(({node:u,props:f})=>{const l=u[w];if(!l){const{status:h,icon:g}=s(f.icon,!0);if(g){a(u,f,g);return}i=i||h==="loading",u[w]={...f,status:h};return}let d;if(Ln(l,f)){if(d=s(f.icon,l.name!==f.name),!d.icon){i=i||d.status==="loading",Object.assign(l,{...f,status:d.status});return}}else{if(l.status!=="loading")return;if(d=s(f.icon,!1),!d.icon){l.status=d.status;return}}a(u,f,d.icon)}),o.temporary&&!i?pe(r):e&&i?de(r,!0):c&&o.observer&&mt(o)});for(const o in n){const r=n[o];for(const i in r){const c=r[i];Et(Array.from(c).map(a=>({provider:o,prefix:i,name:a})),Wn)}}}function Kn(t){const e=z(t);e?O(e):O({node:t,temporary:!0},!0)}function ve(t,e,n=!1){const s=$(t);if(!s)return null;const o=P(t),r=ce(et,e||{}),i=be(document.createElement("span"),{name:t,icon:o,customisations:r},s);return n?i.outerHTML:i}function Jn(){return"3.1.0"}function Xn(t,e){return ve(t,e,!1)}function Yn(t,e){return ve(t,e,!0)}function Zn(t,e){const n=$(t);if(!n)return null;const s=ce(et,e||{});return Y(n,s)}function to(t){t?Kn(t):O()}if(typeof document<"u"&&typeof window<"u"){kn();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!Qt(s))&&console.error(n)}catch{console.error(n)}})}setTimeout(()=>{_n(O),O()})}function eo(t,e){ee(t,e!==!1)}function no(t){ee(t,!0)}ne("",ln);if(typeof document<"u"&&typeof window<"u"){te();const t=window;if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(const n in e){const s="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;oe(n,o)||console.error(s)}catch{console.error(s)}}}}const oo={getAPIConfig:tt,setAPIModule:ne,sendAPIQuery:ie,setFetch:on,getFetch:sn,listAPIProviders:en},bt={_api:oo,addAPIProvider:oe,loadIcons:Et,loadIcon:En,iconExists:Qe,getIcon:Ge,listIcons:qe,addIcon:Ht,addCollection:Qt,replaceIDs:Wt,calculateSize:at,buildIcon:Y,getVersion:Jn,renderSVG:Xn,renderHTML:Yn,renderIcon:Zn,scan:to,observe:de,stopObserving:pe,pauseObserver:jn,resumeObserver:Mn,enableCache:eo,disableCache:no};try{self.Iconify===void 0&&(self.Iconify=bt)}catch{}const we=bt.default||bt,so=JSON.parse('[{"prefix":"ps","width":512,"height":512,"icons":{}},{"prefix":"et","width":32,"height":32,"icons":{}},{"prefix":"ep","width":1024,"height":1024,"icons":{}},{"prefix":"ion","width":512,"height":512,"icons":{}},{"prefix":"el","width":1200,"height":1200,"icons":{}},{"prefix":"ant-design","width":1024,"height":1024,"icons":{"aliyun-outlined":{"body":"<path fill=\\"currentColor\\" d=\\"M959.2 383.9c-.3-82.1-66.9-148.6-149.1-148.6H575.9l21.6 85.2l201 43.7a42.58 42.58 0 0 1 32.9 39.7c.1.5.1 216.1 0 216.6a42.58 42.58 0 0 1-32.9 39.7l-201 43.7l-21.6 85.3h234.2c82.1 0 148.8-66.5 149.1-148.6V383.9zM225.5 660.4a42.58 42.58 0 0 1-32.9-39.7c-.1-.6-.1-216.1 0-216.6c.8-19.4 14.6-35.5 32.9-39.7l201-43.7l21.6-85.2H213.8c-82.1 0-148.8 66.4-149.1 148.6V641c.3 82.1 67 148.6 149.1 148.6H448l-21.6-85.3l-200.9-43.9zm200.9-158.8h171v21.3h-171z\\"/>"}}}]');so.forEach(t=>we.addCollection(t));const $t="|svg",ro=St({name:"Icon",components:{SvgIcon:Ne},props:{icon:{type:String,required:!0},color:{type:String,default:""},size:{type:[String,Number],default:16},spin:{type:Boolean,default:!1},prefix:{type:String,default:""}},setup(t){const e=Ie(null),n=C(()=>{var c;return(c=t.icon)==null?void 0:c.endsWith($t)}),s=C(()=>t.icon.replace($t,"")),o=C(()=>`${t.prefix?t.prefix+":":""}${t.icon}`),r=async()=>{if(T(n))return;const c=T(e);if(!c)return;await ke();const a=T(o);if(!a)return;const u=we.renderSVG(a,{});if(u)c.textContent="",c.appendChild(u);else{const f=document.createElement("span");f.className="iconify",f.dataset.icon=a,c.textContent="",c.appendChild(f)}},i=C(()=>{const{size:c,color:a}=t;let u=c;return typeof c=="string"&&(u=parseInt(c,10)),{fontSize:`${u}px`,color:a,display:"inline-flex"}});return Ce(()=>t.icon,r,{flush:"post"}),Ee(r),{elRef:e,getWrapStyle:i,isSvgIcon:n,getSvgIcon:s}}});function io(t,e,n,s,o,r){const i=Oe("SvgIcon");return t.isSvgIcon?(U(),Te(i,{key:0,size:t.size,name:t.getSvgIcon,class:it([t.$attrs.class]),spin:t.spin,color:t.color},null,8,["size","name","class","spin","color"])):(U(),vt("span",{key:1,ref:"elRef",class:it([t.$attrs.class,"app-iconify",t.spin&&"app-iconify-spin"]),style:Rt(t.getWrapStyle)},null,6))}const zt=Dt(ro,[["render",io]]),co=Pe({id:"app",state:()=>({count:0}),getters:{getCount(){return this.count}},actions:{setCount(t){this.count=t}}}),ao={class:"container p-4 flex flex-col items-start space-y-2"},uo={class:"text-lg mx-1"},lo=St({__name:"index",setup(t){const e=co(),n=C({get:()=>e.getCount,set:r=>e.setCount(r)}),s=_e();function o(){s.push("/second")}return(r,i)=>(U(),vt("div",ao,[H("span",uo,Ae(T(n)),1),H("button",{class:"bg-blue-300 px-2 py-1 round hover:bg-blue-500 rounded-md",onClick:i[0]||(i[0]=()=>n.value++)}," ClickMe "),H("button",{class:"bg-blue-300 px-2 py-1 round hover:bg-blue-500 rounded-md",onClick:i[1]||(i[1]=()=>o())}," To Second Page "),kt(T(zt),{icon:"lavcode|svg",size:"60"}),kt(T(zt),{icon:"ant-design:aliyun-outlined",size:"60",color:"red"})]))}});export{lo as default};
//# sourceMappingURL=index-52083948.js.map
