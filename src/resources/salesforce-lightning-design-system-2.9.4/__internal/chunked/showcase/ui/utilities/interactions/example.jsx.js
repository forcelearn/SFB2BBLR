var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/utilities/interactions/example.jsx.js"]=function(e){function t(t){for(var s,r,i=t[0],o=t[1],u=t[2],f=0,d=[];f<i.length;f++)r=i[f],a[r]&&d.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);for(c&&c(t);d.length;)d.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],s=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(s=!1)}s&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={140:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},l=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=o;return l.push([219,0]),n()}({0:function(e,t){e.exports=React},219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var s=function(e){return e&&e.__esModule?e:{default:e}}(n(0));t.examples=[{id:"reset",label:"Link reset",element:s.default.createElement("a",{href:"javascript:void(0);",className:"slds-text-link_reset"},"Link")},{id:"link",label:"Link reset with text link inside",element:s.default.createElement("a",{href:"javascript:void(0);",className:"slds-text-link_reset"},"This text is a link but looks like normal text...",s.default.createElement("span",{className:"slds-text-link"},"More"),".")},{id:"halo-focus",label:"Link reset with halo focus",element:s.default.createElement("a",{href:"javascript:void(0);",className:"slds-has-blur-focus"},"Link with halo focus")},{id:"button-reset",label:"Button reset",element:s.default.createElement("button",{className:"slds-button slds-text-link_reset"},"Button")},{id:"faux",label:"Faux Link on a span",element:s.default.createElement("span",{className:"slds-text-link_faux"},"Span with faux link interactions")}]}});