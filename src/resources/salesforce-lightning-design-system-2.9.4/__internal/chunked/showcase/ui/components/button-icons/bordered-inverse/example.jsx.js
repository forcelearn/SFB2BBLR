var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/button-icons/bordered-inverse/example.jsx.js"]=function(e){function t(t){for(var r,a,i=t[0],l=t[1],u=t[2],d=0,p=[];d<i.length;d++)a=i[d],s[a]&&p.push(s[a][0]),s[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={134:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;return o.push([206,0]),n()}({0:function(e,t){e.exports=React},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.Context=void 0;var r=a(n(0)),s=n(3),o=a(s);function a(e){return e&&e.__esModule?e:{default:e}}t.Context=function(e){return r.default.createElement("div",{style:{padding:"0.5rem",backgroundColor:"#16325C"}},e.children)};t.default=r.default.createElement(o.default,{assistiveText:"Search",size:"medium",symbol:"search",theme:"inverse",title:"Search"});t.states=[{id:"disabled",label:"Disabled",element:r.default.createElement(o.default,{assistiveText:"Search",disabled:!0,size:"medium",symbol:"search",theme:"inverse",title:"Search"})}],t.examples=[{id:"with-dropdown",label:"With dropdown",element:r.default.createElement(o.default,{assistiveText:"More options",hasDropdown:!0,theme:"neutral",title:"More Options"})},{id:"hint-hover",label:"Hint on hover",element:r.default.createElement(s.HintParent,null,r.default.createElement(o.default,{assistiveText:"More options",iconClassName:"slds-button__icon_inverse-hint",size:"medium",theme:"inverse",title:"More Options"}))}]}});