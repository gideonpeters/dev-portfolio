(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"16ce035c"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"4f56cb38"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"43d8":function(t,e,n){t.exports=n.p+"img/second-logo.e8b01a0b.png"},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"76f4":function(t,e,n){t.exports=n.p+"img/github.74308b79.svg"},"9c0c":function(t,e,n){},b089:function(t,e,n){},b2c5:function(t,e,n){t.exports=n.p+"img/linkedin.e11392c4.svg"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app1"}},[n("div",{staticClass:"logo-over",style:{backgroundImage:"url("+t.bgImg+")"}}),t.overlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"d-flex flex-column text-center p-5",staticStyle:{position:"relative"}},[n("div",{staticClass:"text-right",on:{click:t.toggleOverlay}},[n("i",{staticClass:"mdi mdi-36px mdi-close"})]),t._l(t.routes,(function(e){return n("div",{key:e.id,staticClass:"fs-5 py-3",on:{click:function(n){return t.goToPage(e.route)}}},[t._v(" "+t._s(e.name)+" ")])}))],2)]):t._e(),n("div",{staticClass:"d-lg-none"},[n("div",{staticClass:"icon-menu p-2",on:{click:t.toggleOverlay}},[n("i",{staticClass:"mdi mdi-36px mdi-view-dashboard"})])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-1 d-none d-lg-flex"},[n("div",{staticClass:"d-flex flex-column text-center justify-content-between",attrs:{id:"nav"}},[n("div",{staticClass:"logo-icon"}),n("router-link",{attrs:{exact:"","active-class":"nav-active",to:"/"}},[n("i",{staticClass:"mdi mdi-24px mdi-view-dashboard"})]),n("router-link",{attrs:{exact:"","active-class":"nav-active",to:"/about"}},[n("i",{staticClass:"mdi mdi-24px mdi-account"})]),n("router-link",{attrs:{exact:"","active-class":"nav-active",to:"/skills"}},[n("i",{staticClass:"mdi mdi-24px mdi-settings"})]),n("router-link",{attrs:{exact:"","active-class":"nav-active",to:"/projects"}},[n("i",{staticClass:"mdi mdi-24px mdi-folder"})]),n("router-link",{attrs:{exact:"","active-class":"nav-active",to:"/contact"}},[n("i",{staticClass:"mdi mdi-24px mdi-email"})]),t._m(0)],1)]),n("div",{staticClass:"col"},[n("div",{staticClass:"b-view "},[n("router-view")],1)])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"social d-flex flex-column mb-3 text-center"},[r("div",[r("a",{attrs:{href:"https://github.com/gideonpeters"}},[r("img",{attrs:{color:"primary",src:n("76f4")}})])]),r("div",[r("a",{attrs:{href:"https://www.linkedin.com/in/gideon-peters-8b813089/"}},[r("img",{attrs:{color:"primary",src:n("b2c5")}})])]),r("div",[r("a",{attrs:{href:"https://medium.com/@gideonpeters85"}},[r("img",{attrs:{color:"primary",src:n("eb09")}})])])])}],i=(n("b0c0"),{data:function(){return{overlay:!1,routes:[{id:1,name:"Home",route:"home"},{id:2,name:"About Me",route:"about"},{id:3,name:"My Skills",route:"skills"},{id:4,name:"My Projects",route:"projects"},{id:5,name:"Contact Me",route:"contact"}]}},computed:{bgImg:function(){var t;return t="skills"==this.$route.name?n("43d8"):n("cf05"),t}},methods:{toggleOverlay:function(){this.overlay=!this.overlay},goToPage:function(t){this.toggleOverlay(),this.$router.push({name:t})}}}),s=i,c=(n("5c0b"),n("2877")),u=Object(c["a"])(s,o,a,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("8c4f"));r["a"].use(d["a"]);var p=[{path:"/",name:"home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/skills",name:"skills",component:function(){return n.e("about").then(n.bind(null,"ad83"))}},{path:"/projects",name:"projects",component:function(){return n.e("about").then(n.bind(null,"acca"))}},{path:"/contact",name:"contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}}],m=new d["a"]({mode:"history",base:"",routes:p}),f=m,v=n("2f62");r["a"].use(v["a"]);var b=new v["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("4989"),n("ab8b"),n("b089"),n("5363");r["a"].config.productionTip=!1,new r["a"]({router:f,store:b,render:function(t){return t(l)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.86e51631.png"},eb09:function(t,e,n){t.exports=n.p+"img/medium.d4f87790.svg"}});
//# sourceMappingURL=app.8c627402.js.map