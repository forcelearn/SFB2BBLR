var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/progress-bar/vertical/example.jsx.js"]=function(e){function t(t){for(var n,s,o=t[0],u=t[1],c=t[2],p=0,f=[];p<o.length;p++)s=o[p],l[s]&&f.push(l[s][0]),l[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(i&&i(t);f.length;)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==l[u]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},l={73:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var i=u;return a.push([142,0]),r()}({0:function(e,t){e.exports=React},142:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.Context=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0)),l=r(26);t.Context=function(e){return n.default.createElement("div",{style:{height:"200px"}},e.children)};t.default=n.default.createElement(l.ProgressBar,{value:"25",isVertical:!0});t.states=[{id:"zero",label:"0% complete",element:n.default.createElement(l.ProgressBar,{value:"0",isVertical:!0})},{id:"25",label:"25% complete",element:n.default.createElement(l.ProgressBar,{value:"25",isVertical:!0})},{id:"50",label:"50% complete",element:n.default.createElement(l.ProgressBar,{value:"50",isVertical:!0})},{id:"75",label:"75% complete",element:n.default.createElement(l.ProgressBar,{value:"75",isVertical:!0})},{id:"100",label:"100% complete",element:n.default.createElement(l.ProgressBar,{value:"100",isVertical:!0})}]}});