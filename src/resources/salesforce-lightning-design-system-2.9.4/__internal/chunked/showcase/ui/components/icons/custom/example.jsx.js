var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/icons/custom/example.jsx.js"]=function(e){function t(t){for(var s,a,c=t[0],u=t[1],l=t[2],f=0,p=[];f<c.length;f++)a=c[f],r[a]&&p.push(r[a][0]),r[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);for(i&&i(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={116:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var i=u;return o.push([192,0]),n()}({0:function(e,t){e.exports=React},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomIcon=void 0;var s=a(n(0)),r=a(n(4)),o=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var c=t.CustomIcon=function(e){var t=e.symbol||"custom5";return s.default.createElement("span",{className:(0,o.default)("slds-icon_container slds-icon-custom-"+t),title:e.title||"Description of icon when needed"},s.default.createElement(r.default,{className:(0,o.default)("slds-icon",e.className),sprite:"custom",symbol:t}),s.default.createElement("span",{className:"slds-assistive-text"},e.assistiveText||"Description of icon when needed"))};t.default=s.default.createElement(c,null)}});