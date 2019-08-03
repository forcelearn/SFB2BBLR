var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/rich-text-editor/docs.mdx.js"]=function(e){function t(t){for(var a,n,s=t[0],i=t[1],d=t[2],c=0,f=[];c<s.length;c++)n=s[c],r[n]&&f.push(r[n][0]),r[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,d||[]),l()}function l(){for(var e,t=0;t<o.length;t++){for(var l=o[t],a=!0,s=1;s<l.length;s++){var i=l[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=l[0]))}return e}var a={},r={37:0},o=[];function n(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=a,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=i;return o.push([212,0]),l()}({0:function(e,t){e.exports=React},212:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=l(0),r=(d(a),l(4)),o=d(r),n=d(l(5)),s=(d(l(17)),d(l(18)),d(l(8)),l(1)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(l(58));function d(e){return e&&e.__esModule?e:{default:e}}var u=r.factories.code,c=r.factories.h2,f=r.factories.h3,p=r.factories.p,h=t.getElement=function(){return(0,a.createElement)(o.default,{},(0,a.createElement)("div",{className:"doc lead"},"The Rich Text Editor is a textarea with added capabilities for use in various publishers."),c({id:"About-Rich-Text-Editor"},"About Rich Text Editor"),p({},"At a high-level, the buttons in Rich Text Editor (RTE) are organized into four groupings: “format text”, “format body”, “insert content”, and “clear formatting”."),p({},'The "clear formatting” button always stays at the end of the buttons set, regardless of which rich text editor variant is used. It should always stand by itself.'),p({},"On smaller screen sizes, the select dropdowns for Font and Size in the toolbar can overlap outside of the container. To adjust the widths of the dropdowns, apply the class ",u({},"slds-region_narrow")," to the outermost ",u({},"div")," of the rich text editor."),p({},"A label may be used to further describe the purpose of a Rich Text Editor. To add a label, place a ",u({},"<span>")," element with the class ",u({},"slds-form-element__label"),", right before the ",u({},"slds-form-element__control")," element."),f({id:"Accessibility"},"Accessibility"),p({},"Ensure that there is a single tab key stop for the button groups in the toolbar, and that left and right arrows are used to navigate through each button."),c({id:"Base"},"Base"),(0,a.createElement)(n.default,null,i.default),c({id:"States"},"States"),f({id:"Focused"},"Focused"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.states,"focused")),f({id:"Filled-Out"},"Filled Out"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.states,"filled-out")),f({id:"Error"},"Error"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.states,"error")),f({id:"Disabled"},"Disabled"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.states,"disabled")),f({id:"Tooltip"},"Tooltip"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.states,"tooltip")),c({id:"Examples"},"Examples"),f({id:"Bottom-toolbar"},"Bottom toolbar"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.examples,"bottom-toolbar")),f({id:"With-a-Label"},"With a Label"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.examples,"with-label")),f({id:"Email"},"Email"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.examples,"email")),f({id:"Toolbar-Narrow"},"Toolbar Narrow"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.examples,"toolbar-narrow")),f({id:"Feed"},"Feed"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.examples,"feed")),f({id:"Notes"},"Notes"),(0,a.createElement)(n.default,null,(0,s.getDisplayElementById)(i.examples,"note")))};t.getContents=function(){return(0,r.createTableOfContents)(h())}},3:function(e,t){e.exports=JSBeautify}});