var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/breadcrumbs/base/example.jsx.js"]=function(e){function t(t){for(var n,u,s=t[0],o=t[1],c=t[2],i=0,f=[];i<s.length;i++)u=s[i],a[u]&&f.push(a[u][0]),a[u]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);f.length;)f.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(n=!1)}n&&(l.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={181:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},l=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=o;return l.push([272,0]),r()}({0:function(e,t){e.exports=React},272:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.BreadcrumbsWithOverflow=t.BreadcrumbsBase=t.Context=void 0;var n=s(r(0)),a=s(r(72)),l=s(r(3)),u=r(10);function s(e){return e&&e.__esModule?e:{default:e}}var o=a.default.Crumb,c=n.default.createElement(l.default,{className:"slds-button_icon-border-filled slds-button_icon-x-small",symbol:"threedots",assistiveText:"Show More","aria-haspopup":"true",title:"Show More"}),d=function(e){return n.default.createElement(u.Trigger,{className:"slds-is-open",triggerIcon:c},n.default.createElement(u.Menu,{className:"slds-dropdown_left slds-dropdown_actions"},n.default.createElement(u.MenuList,null,n.default.createElement(u.MenuItem,{tabIndex:"0"},"Menu Item One"),n.default.createElement(u.MenuItem,null,"Menu Item Two"),n.default.createElement(u.MenuItem,null,"Menu Item Three"))))},i=(t.Context=function(e){return n.default.createElement("div",{className:"demo-only",style:{height:"150px"}},e.children)},t.BreadcrumbsBase=function(e){return n.default.createElement(a.default,null,n.default.createElement(o,{href:"javascript:void(0);"},"Parent Entity"),n.default.createElement(o,{href:"javascript:void(0);"},"Parent Record Name"))}),f=t.BreadcrumbsWithOverflow=function(e){return n.default.createElement(a.default,{listClassNames:"slds-grid_vertical-align-center"},n.default.createElement(o,{hasMenu:!0},n.default.createElement(d,null)),n.default.createElement(o,{href:"javascript:void(0);"},"Parent Entity"),n.default.createElement(o,{href:"javascript:void(0);"},"Parent Record Name"))};t.default=n.default.createElement(i,null);t.states=[{id:"overflow-breadcrumbs",label:"Breadcrumbs with Overflow Menu",element:n.default.createElement(f,null)}]}});