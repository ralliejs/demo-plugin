(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const oe="modulepreload",ae=function(e,t){return new URL(e,t).href},Ot={},$=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=ae(s,r),s in Ot)return;Ot[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const p=i[u];if(p.href===s&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":oe,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,p)=>{l.addEventListener("load",u),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function ce(e,t,n,r){return new(n||(n=Promise))(function(i,s){function o(l){try{h(r.next(l))}catch(u){s(u)}}function a(l){try{h(r.throw(l))}catch(u){s(u)}}function h(l){var u;l.done?i(l.value):(u=l.value,u instanceof n?u:new n(function(p){p(u)})).then(o,a)}h((r=r.apply(e,t||[])).next())})}function f(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)}function j(e,t,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(e,n):i?i.value=n:t.set(e,n),n}function S(e,t,n,r){return new(n||(n=Promise))(function(i,s){function o(l){try{h(r.next(l))}catch(u){s(u)}}function a(l){try{h(r.throw(l))}catch(u){s(u)}}function h(l){var u;l.done?i(l.value):(u=l.value,u instanceof n?u:new n(function(p){p(u)})).then(o,a)}h((r=r.apply(e,t||[])).next())})}function c(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)}function W(e,t,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(e,n):i?i.value=n:t.set(e,n),n}const le=Object.assign,he=Object.prototype.hasOwnProperty,st=(e,t)=>he.call(e,t),L=Array.isArray,nt=e=>Dt(e)==="[object Map]",bt=e=>typeof e=="symbol",at=e=>e!==null&&typeof e=="object",ue=Object.prototype.toString,Dt=e=>ue.call(e),fe=e=>Dt(e).slice(8,-1),Et=e=>typeof e=="string"&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gt=(e,t)=>!Object.is(e,t),de=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let pe;function Ft(e,t=pe){t&&t.active&&t.effects.push(e)}const Ht=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Kt=e=>(e.w&O)>0,qt=e=>(e.n&O)>0,ft=new WeakMap;let z=0,O=1;const dt=30;let b;const B=Symbol(""),pt=Symbol("");class we{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ft(this,r)}run(){if(!this.active)return this.fn();let t=b,n=M;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=b,b=this,M=!0,O=1<<++z,z<=dt?(({deps:r})=>{if(r.length)for(let i=0;i<r.length;i++)r[i].w|=O})(this):Lt(this),this.fn()}finally{z<=dt&&(r=>{const{deps:i}=r;if(i.length){let s=0;for(let o=0;o<i.length;o++){const a=i[o];Kt(a)&&!qt(a)?a.delete(r):i[s++]=a,a.w&=~O,a.n&=~O}i.length=s}})(this),O=1<<--z,b=this.parent,M=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b===this?this.deferStop=!0:this.active&&(Lt(this),this.onStop&&this.onStop(),this.active=!1)}}function Lt(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let M=!0;const Pt=[];function g(e,t,n){if(M&&b){let r=ft.get(e);r||ft.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ht()),function(s,o){let a=!1;z<=dt?qt(s)||(s.n|=O,a=!Kt(s)):a=!s.has(b),a&&(s.add(b),b.deps.push(s))}(i)}}function P(e,t,n,r,i,s){const o=ft.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&L(e)){const h=de(r);o.forEach((l,u)=>{(u==="length"||u>=h)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":L(e)?Et(n)&&a.push(o.get("length")):(a.push(o.get(B)),nt(e)&&a.push(o.get(pt)));break;case"delete":L(e)||(a.push(o.get(B)),nt(e)&&a.push(o.get(pt)));break;case"set":nt(e)&&a.push(o.get(B))}if(a.length===1)a[0]&&$t(a[0]);else{const h=[];for(const l of a)l&&h.push(...l);$t(Ht(h))}}function $t(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&xt(r);for(const r of n)r.computed||xt(r)}function xt(e,t){(e!==b||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ve=function(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}("__proto__,__v_isRef,__isVue"),Jt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bt)),me=Qt(),ye=Qt(!0),Wt=function(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=d(this);for(let s=0,o=this.length;s<o;s++)g(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(d)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pt.push(M),M=!1;const r=d(this)[t].apply(this,n);return function(){const i=Pt.pop();M=i===void 0||i}(),r}}),e}();function Qt(e=!1,t=!1){return function(n,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?Le:Zt:t?Oe:Yt).get(n))return n;const s=L(n);if(!e&&s&&st(Wt,r))return Reflect.get(Wt,r,i);const o=Reflect.get(n,r,i);return(bt(r)?Jt.has(r):ve(r))?o:(e||g(n,"get",r),t?o:U(o)?s&&Et(r)?o:o.value:at(o)?e?J(o):kt(o):o)}}const ge={get:me,set:function(e=!1){return function(t,n,r,i){let s=t[n];if(wt(s)&&U(s)&&!U(r))return!1;if(!e&&(function(h){return!(!h||!h.__v_isShallow)}(r)||wt(r)||(s=d(s),r=d(r)),!L(t)&&U(s)&&!U(r)))return s.value=r,!0;const o=L(t)&&Et(n)?Number(n)<t.length:st(t,n),a=Reflect.set(t,n,r,i);return t===d(i)&&(o?Gt(r,s)&&P(t,"set",n,r):P(t,"add",n,r)),a}}(),deleteProperty:function(e,t){const n=st(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&P(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return bt(t)&&Jt.has(t)||g(e,"has",t),n},ownKeys:function(e){return g(e,"iterate",L(e)?"length":B),Reflect.ownKeys(e)}},_e={get:ye,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},St=e=>e,ct=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){const i=d(e=e.__v_raw),s=d(t);n||(t!==s&&g(i,"get",t),g(i,"get",s));const{has:o}=ct(i),a=r?St:n?At:Rt;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this.__v_raw,r=d(n),i=d(e);return t||(e!==i&&g(r,"has",e),g(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Y(e,t=!1){return e=e.__v_raw,!t&&g(d(e),"iterate",B),Reflect.get(e,"size",e)}function Bt(e){e=d(e);const t=d(this);return ct(t).has.call(t,e)||(t.add(e),P(t,"add",e,e)),this}function Mt(e,t){t=d(t);const n=d(this),{has:r,get:i}=ct(n);let s=r.call(n,e);s||(e=d(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?Gt(t,o)&&P(n,"set",e,t):P(n,"add",e,t),this}function jt(e){const t=d(this),{has:n,get:r}=ct(t);let i=n.call(t,e);i||(e=d(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&P(t,"delete",e,void 0),s}function Tt(){const e=d(this),t=e.size!==0,n=e.clear();return t&&P(e,"clear",void 0,void 0),n}function Z(e,t){return function(n,r){const i=this,s=i.__v_raw,o=d(s),a=t?St:e?At:Rt;return!e&&g(o,"iterate",B),s.forEach((h,l)=>n.call(r,a(h),a(l),i))}}function tt(e,t,n){return function(...r){const i=this.__v_raw,s=d(i),o=nt(s),a=e==="entries"||e===Symbol.iterator&&o,h=e==="keys"&&o,l=i[e](...r),u=n?St:t?At:Rt;return!t&&g(s,"iterate",h?pt:B),{next(){const{value:p,done:lt}=l.next();return lt?{value:p,done:lt}:{value:a?[u(p[0]),u(p[1])]:u(p),done:lt}},[Symbol.iterator](){return this}}}}function R(e){return function(...t){return e!=="delete"&&this}}const[be,Ee,Se,ke]=function(){const e={get(i){return Q(this,i)},get size(){return Y(this)},has:X,add:Bt,set:Mt,delete:jt,clear:Tt,forEach:Z(!1,!1)},t={get(i){return Q(this,i,!1,!0)},get size(){return Y(this)},has:X,add:Bt,set:Mt,delete:jt,clear:Tt,forEach:Z(!1,!0)},n={get(i){return Q(this,i,!0)},get size(){return Y(this,!0)},has(i){return X.call(this,i,!0)},add:R("add"),set:R("set"),delete:R("delete"),clear:R("clear"),forEach:Z(!0,!1)},r={get(i){return Q(this,i,!0,!0)},get size(){return Y(this,!0)},has(i){return X.call(this,i,!0)},add:R("add"),set:R("set"),delete:R("delete"),clear:R("clear"),forEach:Z(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=tt(i,!1,!1),n[i]=tt(i,!0,!1),t[i]=tt(i,!1,!0),r[i]=tt(i,!0,!0)}),[e,n,t,r]}();function Xt(e,t){const n=t?e?ke:Se:e?Ee:be;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(st(n,i)&&i in r?n:r,i,s)}const Re={get:Xt(!1,!1)},Ae={get:Xt(!0,!1)},Yt=new WeakMap,Oe=new WeakMap,Zt=new WeakMap,Le=new WeakMap;function kt(e){return wt(e)?e:te(e,!1,ge,Re,Yt)}function J(e){return te(e,!0,_e,Ae,Zt)}function te(e,t,n,r,i){if(!at(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=(a=e).__v_skip||!Object.isExtensible(a)?0:function(l){switch(l){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(fe(a));var a;if(o===0)return e;const h=new Proxy(e,o===2?r:n);return i.set(e,h),h}function wt(e){return!(!e||!e.__v_isReadonly)}function d(e){const t=e&&e.__v_raw;return t?d(t):e}const Rt=e=>at(e)?kt(e):e,At=e=>at(e)?J(e):e;function U(e){return!(!e||e.__v_isRef!==!0)}const Pe=e=>`[@rallie/core] you are trying to remove a listener of the broadcast event ${e}, but ${e} hasn't been registed as a broadcast event`,$e=e=>`[@rallie/core] you are trying to remove a listener of the broadcast event ${e}, but the listener hasn't been registed`,xe=e=>`[@rallie/core] one of the callbacks of the broadcast event ${e} throws an uncaught error`,We=e=>`[@rallie/core] you are trying to remove a listener of the unicast event ${e}, but ${e} hasn't been registed as a unicast event`,Be=e=>`[@rallie/core] you are trying to register a unicast event ${e}, but it has been registered before`,Me=e=>`[@rallie/core] you have emitted ${e} unicast, but there is no listener of this event`,je=e=>`[@rallie/core] ${e} is existing, you are not allowed to create it again`,Te=(e,t)=>`[@rallie/core] can not find any assets of the app ${e} on the bus ${t}`,Ne=e=>`[@rallie/core] you are trying to activate app ${e}, but it was not created`,Ie=e=>`[@rallie/core] state ${e} is private, you are not allowed to set it`,ze=e=>`[@rallie/core] please describe your action when you modify the state ${e}`,ee=e=>`[@rallie/core] it's not allowed to set or watch state ${e} before it is initialized`,Ue=e=>`[@rallie/core] duplicated initialized state ${e}`,Ce=e=>`[@rallie/core] it's not allowed to initialized state ${e} to a primitive value`,Ve=e=>`[@rallie/core] the bus named ${e} has been defined before, please rename your bus`,De=(e,t)=>`[@rallie/core] There is a circular dependency when activating the app ${e}, and the circular path is ${t.join("->")}`,Ge=()=>"[@rallie/core] next() called multiple times in the middleware",Fe=()=>"[@rallie/core] the middleware must be a function",He=(e,t)=>`[@rallie/core] the event ${e} is not in the events pool that you specified when calling on${t?"Unicast":"Broadcast"}`,Nt=e=>(t,n)=>{let r=-1;const i=s=>{if(s<=r)return Promise.reject(new Error(Ge()));r=s;let o=e[s];if(s===e.length&&(o=n),!o)return Promise.resolve();try{return Promise.resolve(o(t,i.bind(null,s+1)))}catch(a){return Promise.reject(a)}};return i(0)};var E,x,rt,C,V,v,_,vt,ne;class Ke{constructor(){E.set(this,{}),x.set(this,{})}addBroadcastEventListener(t,n){c(this,E,"f")[t]=c(this,E,"f")[t]||new Set,c(this,E,"f")[t].add(n)}addUnicastEventListener(t,n){if(c(this,x,"f")[t])throw new Error(Be(t));c(this,x,"f")[t]=n}removeBroadcastEventListener(t,n){const r=c(this,E,"f")[t];if(!r){const i=Pe(t);throw new Error(i)}if(!r.has(n)){const i=$e(t);throw new Error(i)}r.delete(n)}removeUnicastEventListener(t){if(!c(this,x,"f")[t]){const n=We(t);throw new Error(n)}delete c(this,x,"f")[t]}emitBroadcast(t,...n){c(this,E,"f")[t]=c(this,E,"f")[t]||new Set,c(this,E,"f")[t].forEach(r=>{try{r(...n)}catch(i){console.error(xe(t)),console.error(i)}})}emitUnicast(t,...n){const r=c(this,x,"f")[t];if(r)return r(...n);throw new Error(Me(t))}}E=new WeakMap,x=new WeakMap;class qe{constructor(t,n){rt.set(this,void 0),C.set(this,void 0),W(this,rt,t,"f"),W(this,C,n,"f"),c(this,C,"f")[t].watchers.add(this)}do(t){return this.handler=t,()=>this.unwatch()}unwatch(){this==null||this.stopEffect(),this.handler=null;const t=c(this,C,"f")[c(this,rt,"f")].watchers;t.has(this)&&t.delete(this)}}rt=new WeakMap,C=new WeakMap;class Je{constructor(t,n){V.add(this),v.set(this,void 0),_.set(this,void 0),W(this,v,t,"f"),W(this,_,n,"f")}onBroadcast(t){return Object.entries(t).forEach(([n,r])=>{c(this,v,"f").addBroadcastEventListener(n,r)}),n=>{c(this,V,"m",vt).call(this,t,!1,n)}}onUnicast(t){return Object.entries(t).forEach(([n,r])=>{try{c(this,v,"f").addUnicastEventListener(n,r)}catch(i){console.error(i)}}),n=>{c(this,V,"m",vt).call(this,t,!0,n)}}createBroadcaster(t){return new Proxy({},{get:(n,r)=>(...i)=>(t==null||t(r),c(this,v,"f").emitBroadcast(r,...i)),set:()=>!1})}createUnicaster(t){return new Proxy({},{get:(n,r)=>(...i)=>(t==null||t(r),c(this,v,"f").emitUnicast(r,...i)),set:()=>!1})}existState(t){return!!c(this,_,"f")[t]}initState(t,n,r=!1){if(this.existState(t))throw new Error(Ue(t));if(["string","number","boolean","undefined"].includes(typeof n))throw new Error(Ce(t));return c(this,_,"f")[t]={state:kt(n),owner:r?this:null,watchers:new Set},c(this,v,"f").emitBroadcast("$state-initialized",t),this.getState(t)}getState(t,n){if(this.existState(t)){const r=J(c(this,_,"f")[t].state);return n?n(r):r}return null}setState(t,n,r){return S(this,void 0,void 0,function*(){const i=c(this,V,"m",ne).call(this,t);if(!n)throw new Error(ze(t));{const s=r(i);yield Promise.resolve(s)}})}watchState(t,n){if(!this.existState(t)){const a=ee(t);throw new Error(a)}let r=!1;const i=J(c(this,_,"f")[t].state),s=new qe(t,c(this,_,"f")),o=function(a,h){a.effect&&(a=a.effect.fn);const l=new we(a);h&&(le(l,h),h.scope&&Ft(l,h.scope)),h&&h.lazy||l.run();const u=l.run.bind(l);return u.effect=l,u}(()=>n(i),{lazy:!0,scheduler:()=>{r||(r=!0,Promise.resolve().then(()=>{var a;const h=d(n(i));(a=s.handler)===null||a===void 0||a.call(s,h,s.oldWatchingStates),s.oldWatchingStates=d(h),r=!1}))}});return s.oldWatchingStates=o(),s.stopEffect=()=>o.effect.stop(),s}}v=new WeakMap,_=new WeakMap,V=new WeakSet,vt=function(e,t,n){let r=t?c(this,v,"f").removeUnicastEventListener:c(this,v,"f").removeBroadcastEventListener;r=r.bind(c(this,v,"f")),n?e[n]?(r(n,e[n]),delete e[n]):console.warn(He(n,t)):Object.entries(e).forEach(([i,s])=>{r(i,s)})},ne=function(e){if(!this.existState(e)){const n=ee(e);throw new Error(n)}const t=c(this,_,"f")[e].owner;if(t!==this&&t!==null){const n=Ie(e);throw new Error(n)}return c(this,_,"f")[e].state};class Qe{constructor(t){this.name=t,this.activated=null,this.dependencies=[],this.relatedApps=[],this.name=t,this.isRallieCoreApp=!0}relateTo(t){return this.relatedApps=Array.from(new Set([...this.relatedApps,...t])),this}relyOn(t){return this.relateTo(t),this.dependencies=Array.from(new Set([...this.dependencies,...t])),this}onActivate(t){return this.doActivate=t,this}}var k,ot,mt,yt,m,D,G,F,It,re,ie,gt,zt,Ut,et={loadScript:e=>S(void 0,void 0,void 0,function*(){return new Promise(t=>{let n=null;e instanceof HTMLScriptElement?n=e:(n=document.createElement("script"),Object.entries(typeof e!="string"?e:{type:"text/javascript",src:e}).forEach(([i,s])=>{n.setAttribute(i,s)})),n.src&&(n.onload=n.onerror=()=>{t()}),document.body.appendChild(n),n.src||t()})}),loadLink:e=>{let t=null;if(e instanceof HTMLLinkElement)t=e;else{const n=typeof e!="string"?e:{rel:"stylesheet",type:"text/css",href:e};t=document.createElement("link"),Object.entries(n).forEach(([r,i])=>{t.setAttribute(r,i)})}document.head.appendChild(t)}};class Xe{constructor(t){k.add(this),ot.set(this,void 0),mt.set(this,new Ke),yt.set(this,{}),m.set(this,{}),D.set(this,{}),this.conf=J({assets:{}}),G.set(this,[]),F.set(this,void 0),W(this,ot,t,"f"),W(this,F,Nt(c(this,G,"f")),"f")}createSocket(){return new Je(c(this,mt,"f"),c(this,yt,"f"))}existApp(t){return!!c(this,m,"f")[t]}createApp(t){if(this.existApp(t))throw new Error(je(t));const n=new Qe(t);return c(this,m,"f")[t]=n,n}loadApp(t){return S(this,void 0,void 0,function*(){c(this,m,"f")[t]||(c(this,D,"f")[t]||(c(this,D,"f")[t]=new Promise((n,r)=>{const i=c(this,k,"m",re).call(this,t);c(this,F,"f").call(this,i,c(this,k,"m",ie).bind(this)).then(()=>{t.startsWith("lib:")&&!c(this,m,"f")[t]&&(c(this,m,"f")[t]=!0),c(this,m,"f")[t]||r(new Error(Ne(t))),n()}).catch(s=>{r(s)})})),yield c(this,D,"f")[t])})}activateApp(t){return S(this,void 0,void 0,function*(){yield c(this,k,"m",gt).call(this,t,[])})}config(t){return this.conf=Object.assign(Object.assign(Object.assign({},this.conf),t),{assets:Object.assign(Object.assign({},this.conf.assets),(t==null?void 0:t.assets)||{})}),this}use(t){if(typeof t!="function")throw new Error(Fe());return c(this,G,"f").push(t),W(this,F,Nt(c(this,G,"f")),"f"),this}}ot=new WeakMap,mt=new WeakMap,yt=new WeakMap,m=new WeakMap,D=new WeakMap,G=new WeakMap,F=new WeakMap,k=new WeakSet,It=function(e){return c(this,m,"f")[e]&&typeof c(this,m,"f")[e]!="boolean"},re=function(e){return{name:e,loadScript:et.loadScript,loadLink:et.loadLink}},ie=function(e){return S(this,void 0,void 0,function*(){const{name:t,loadScript:n=et.loadScript,loadLink:r=et.loadLink}=e,{assets:i}=this.conf;if(!i[t])throw new Error(Te(t,c(this,ot,"f")));if(i[t].css&&i[t].css.forEach(s=>{r(s)}),i[t].js)for(const s of i[t].js)yield n(s)})},gt=function(e,t){return S(this,void 0,void 0,function*(){if(yield this.loadApp(e),c(this,k,"m",It).call(this,e)){const n=c(this,m,"f")[e];if(yield c(this,k,"m",Ut).call(this,n),t.includes(e)){const r=t.indexOf(e),i=[...t.slice(r),e];throw new Error(De(e,i))}if(t.push(e),!n.activated){const r=()=>S(this,void 0,void 0,function*(){yield c(this,k,"m",zt).call(this,n,t),n.doActivate&&(yield Promise.resolve(n.doActivate()))});n.activated=r()}yield n.activated,t.pop()}})},zt=function(e,t){return S(this,void 0,void 0,function*(){if(e.dependencies.length!==0)for(const n of e.dependencies)yield c(this,k,"m",gt).call(this,n,t)})},Ut=function(e){return S(this,void 0,void 0,function*(){yield Promise.all(e.relatedApps.map(t=>this.loadApp(t)))})};const Ye={},ht="DEFAULT_BUS",_t=(e=ht)=>{let t=null,n=!1;const r=((i=ht)=>window.RALLIE_BUS_STORE&&window.RALLIE_BUS_STORE[i])(e);return r?(t=r,n=!1):(t=((i=ht)=>{if(window.RALLIE_BUS_STORE===void 0&&Reflect.defineProperty(window,"RALLIE_BUS_STORE",{value:Ye,writable:!1}),window.RALLIE_BUS_STORE[i])throw new Error(Ve(i));{const s=new Xe(i);return Reflect.defineProperty(window.RALLIE_BUS_STORE,i,{value:s,writable:!1}),s}})(e),n=!0),[t,n]},y={privateBus:e=>`${e}.bus`,stateNamespace:e=>`${e}.state`,isGlobalBusAccessible:"isGlobalBusAccessible",exportMethodName:"__RallieInnerExport__"},ut=e=>`[rallie] ${e}`,it={stateNotInitialized:e=>ut(` the block ${e}'s state is not initialized, please check:
1. whether the block ${e} is loaded.
2. whether the block ${e} has initialized the state`),duplicatedBlockName:e=>ut(`the block ${e} is already registered before, please rename your block`),stateIsReadonly:e=>ut(`the state of ${e} is readonly`)},Ct=(e,t)=>new Proxy(e,{get:(n,r)=>(...i)=>(0,n[r])(i,t),set:()=>!1}),se=e=>{const t={};return Object.entries(e).forEach(([n,r])=>{t[n]=(i,s)=>r.call({trigger:s},...i)}),t};var w,A,H,T,K,N,q;class Vt{constructor(t,n,r){w.set(this,void 0),this.name=t,j(this,w,r,"f");const i=f(this,w,"f").createBroadcaster(),s=f(this,w,"f").createUnicaster();this.events=Ct(i,n),this.methods=Ct(s,n),Reflect.defineProperty(this,"state",{get:()=>f(this,w,"f").getState(y.stateNamespace(this.name)),set:()=>{throw new Error(it.stateIsReadonly(this.name))}})}setState(t,n){if(f(this,w,"f").existState(y.stateNamespace(this.name)))return f(this,w,"f").setState(y.stateNamespace(this.name),t,n);throw new Error(it.stateNotInitialized(this.name))}watchState(t){if(f(this,w,"f").existState(y.stateNamespace(this.name)))return f(this,w,"f").watchState(y.stateNamespace(this.name),t);throw new Error(it.stateNotInitialized(this.name))}listenEvents(t){return f(this,w,"f").onBroadcast(se(t))}}w=new WeakMap;class Ze extends Vt{constructor(t,n,r,i){const[s]=_t(y.privateBus(t)),o=s.createSocket();super(t,t,o),A.set(this,void 0),H.set(this,void 0),T.set(this,void 0),K.set(this,void 0),N.set(this,void 0),q.set(this,{}),j(this,K,o,"f"),j(this,A,n,"f"),j(this,H,r,"f"),j(this,N,n.createApp(t),"f"),j(this,T,i,"f")}initState(t,n){return f(this,K,"f").initState(y.stateNamespace(this.name),t,n),this}addMethods(t){return f(this,K,"f").onUnicast(se(t))}relyOn(t){return f(this,N,"f").relyOn(t),this}relateTo(t){return f(this,N,"f").relateTo(t),this}onActivate(t){return f(this,N,"f").onActivate(t),this}connect(t){if(!f(this,q,"f")[t]){const[n]=_t(y.privateBus(t)),r=n.createSocket();f(this,q,"f")[t]=new Vt(t,this.name,r)}return f(this,q,"f")[t]}load(t){return f(this,A,"f").loadApp(t)}activate(t){return f(this,A,"f").activateApp(t)}run(t){var n;return ce(this,void 0,void 0,function*(){const r=f(this,T,"f")||((n=f(this,H,"f").getState(y.isGlobalBusAccessible))===null||n===void 0?void 0:n.value),i=a=>{f(this,T,"f")&&f(this,H,"f").setState(y.isGlobalBusAccessible,a?"unfreeze the enviroment":"freeze the enviroment",h=>{h.value=a})},s={isEntry:f(this,T,"f"),use:a=>{r&&f(this,A,"f").use(a)},config:a=>{r&&f(this,A,"f").config(a)},freeze:()=>{i(!1)},unfreeze:()=>{i(!0)}},o=t(new Proxy(s,{get:(a,h,l)=>h==="conf"?JSON.parse(JSON.stringify(f(this,A,"f").conf)):Reflect.get(a,h,l),set:()=>!1}));yield Promise.resolve(o)})}}function tn(e){const[t,n]=_t();if(t.existApp(e))throw new Error(it.duplicatedBlockName(e));const r=t.createSocket();return n&&r.initState(y.isGlobalBusAccessible,{value:!0},!0),new Ze(e,t,r,n)}A=new WeakMap,H=new WeakMap,T=new WeakMap,K=new WeakMap,N=new WeakMap,q=new WeakMap;const I=tn("ralliejs/demo-plugin").initState({count:0}).relyOn(["core"]).onActivate(async()=>{const e=I.connect("core");await e.methods.addI18nResources({"zh-CN":()=>$(()=>import("./zh-CN-9e5d47d9.js"),[],import.meta.url),"en-US":()=>$(()=>import("./en-US-fa11abe3.js"),[],import.meta.url)}),e.methods.registerPluginInfo({title:"样例插件",description:"这是一个样例插件"}),e.setState("通过直接改状态的方式拓展宿主应用(不推荐)",t=>{t.slots.home=()=>$(()=>import("./Home-73448ee2.js"),[],import.meta.url),t.applications.push({name:"样例应用",icon:async()=>{const{BlockOutlined:n}=await $(()=>import("./index-719db109.js"),[],import.meta.url);return{default:n}},locale:`${I.name}:menu.root`,path:"demo",children:[{index:!0,loader:()=>$(()=>import("./App-dc89e5ba.js"),["./App-dc89e5ba.js","./App-19634022.css"],import.meta.url)},{name:"一级菜单",locale:`${I.name}:menu.firstChild`,path:"level-1",loader:()=>$(()=>import("./App-dc89e5ba.js"),["./App-dc89e5ba.js","./App-19634022.css"],import.meta.url)}]})})});I.run(async e=>{if(e.isEntry){const{loadHtml:t}=await $(()=>import("./index.es-8a047ee8.js"),[],import.meta.url);e.use(t({entries:{core:"http://localhost:8080/#core"}})),I.activate(I.name)}});export{I as d};
