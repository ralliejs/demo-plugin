(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const _="modulepreload",p=function(r,o){return new URL(r,o).href},m={},l=function(o,s,c){if(!s||s.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e,c),e in m)return;m[e]=!0;const i=e.endsWith(".css"),f=i?'[rel="stylesheet"]':"";if(!!c)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===e&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const n=document.createElement("link");if(n.rel=i?"stylesheet":_,i||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),i)return new Promise((a,u)=>{n.addEventListener("load",a),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())},h=window.RallieBlock.createBlock,d=h("ralliejs/demo-plugin").initState({count:0}).relyOn(["core"]).onActivate(async()=>{const r=d.connect("core");await r.methods.addI18nResources({"zh-CN":()=>l(()=>import("./zh-CN-4c749a29.js"),[],import.meta.url),"en-US":()=>l(()=>import("./en-US-b003600d.js"),[],import.meta.url)}),r.methods.registerSlot("home",()=>l(()=>import("./Home-264690c6.js"),[],import.meta.url)),r.methods.registerPluginInfo({title:"plugin.title",description:"plugin.description"}),r.methods.addApplication({name:"样例应用",icon:()=>l(()=>import("./BlockOutlinedIcon-9d32e008.js"),[],import.meta.url),locale:"menu.root",path:"demo",hideInBreadcrumb:!0,children:[{index:!0,loader:()=>l(()=>import("./App-2b64106a.js"),["./App-2b64106a.js","./App-169b06fe.css"],import.meta.url)},{name:"一级菜单",locale:"menu.firstChild",path:"level-1",loader:()=>l(()=>import("./App-2b64106a.js"),["./App-2b64106a.js","./App-169b06fe.css"],import.meta.url)}]})});d.run(async r=>{if(r.isEntry){const{loadHtml:o}=await l(()=>import("./index.es-a0d885ed.js"),[],import.meta.url);r.use(o({entries:{core:"https://ralliejs.github.io/open-platform/#core"}})),d.activate(d.name)}});export{d};
