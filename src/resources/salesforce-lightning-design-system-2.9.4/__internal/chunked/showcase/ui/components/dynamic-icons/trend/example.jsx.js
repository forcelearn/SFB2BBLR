var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/dynamic-icons/trend/example.jsx.js"]=function(e){function t(t){for(var s,i,l=t[0],o=t[1],c=t[2],u=0,f=[];u<l.length;u++)i=l[u],n[i]&&f.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);for(d&&d(t);f.length;)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={108:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;return r.push([184,0]),a()}({0:function(e,t){e.exports=React},183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},n=l(a(0)),r=l(a(2)),i=l(a(1));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.assistiveText,a=function(e,t){var a={};for(var s in e)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(a[s]=e[s]);return a}(e,["assistiveText"]);return n.default.createElement("span",s({},a,{className:(0,i.default)("slds-icon-trend",e.className)}),n.default.createElement("svg",{viewBox:"0 0 16 16","aria-hidden":"true"},n.default.createElement("path",{className:"slds-icon-trend__arrow",d:"M.75 8H11M8 4.5L11.5 8 8 11.5"}),n.default.createElement("circle",{className:"slds-icon-trend__circle",cy:"8",cx:"8",r:"7.375",transform:"rotate(-28 8 8) scale(-1 1) translate(-16 0)"})),n.default.createElement("span",{className:"slds-assistive-text"},t))};o.propTypes={title:r.default.string.isRequired,assistiveText:r.default.string.isRequired},t.default=o},184:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var s=r(a(0)),n=r(a(183));function r(e){return e&&e.__esModule?e:{default:e}}t.default=s.default.createElement(n.default,{"data-slds-trend":"neutral",className:"slds-is-animated",title:"Description of the icon",assistiveText:"Text alternative"});t.states=[{id:"down",label:"Down",element:s.default.createElement(n.default,{"data-slds-trend":"down",className:"slds-is-animated",title:"Description of the icon",assistiveText:"Text alternative"})},{id:"up",label:"Up",element:s.default.createElement(n.default,{"data-slds-trend":"up",className:"slds-is-animated",title:"Description of the icon",assistiveText:"Text alternative"})},{id:"static",label:"Static (no animation)",element:s.default.createElement(n.default,{"data-slds-trend":"up",title:"Description of the icon",assistiveText:"Text alternative"})},{id:"paused",label:"Paused",element:s.default.createElement(n.default,{"data-slds-trend":"up",className:"slds-is-animated slds-is-paused",title:"Description of the icon",assistiveText:"Text alternative"})}]}});