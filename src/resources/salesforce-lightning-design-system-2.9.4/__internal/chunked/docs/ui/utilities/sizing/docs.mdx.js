var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/utilities/sizing/docs.mdx.js"]=function(e){function t(t){for(var a,i,o=t[0],r=t[1],d=t[2],u=0,m=[];u<o.length;u++)i=o[u],n[i]&&m.push(n[i][0]),n[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(f&&f(t);m.length;)m.shift()();return s.push.apply(s,d||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var l=s[t],a=!0,o=1;o<l.length;o++){var r=l[o];0!==n[r]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=l[0]))}return e}var a={},n={14:0},s=[];function i(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=a,i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var f=r;return s.push([146,0]),l()}({0:function(e,t){e.exports=React},145:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(l(0));var n=function(e){return a.default.createElement("div",{className:"slds-size_"+e.size},a.default.createElement("div",{className:"slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"},".slds-size_",e.size))};t.examples=[{id:"two-column",label:"2 Column Span",element:a.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},a.default.createElement(n,{size:"1-of-2"}),a.default.createElement(n,{size:"1-of-2"}),a.default.createElement(n,{size:"2-of-2"}))},{id:"three-column",label:"3 Column Span",element:a.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},a.default.createElement(n,{size:"1-of-3"}),a.default.createElement(n,{size:"1-of-3"}),a.default.createElement(n,{size:"1-of-3"}),a.default.createElement(n,{size:"1-of-3"}),a.default.createElement(n,{size:"2-of-3"}),a.default.createElement(n,{size:"3-of-3"}))},{id:"four-column",label:"4 Column Span",element:a.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},a.default.createElement(n,{size:"1-of-4"}),a.default.createElement(n,{size:"1-of-4"}),a.default.createElement(n,{size:"1-of-4"}),a.default.createElement(n,{size:"1-of-4"}),a.default.createElement(n,{size:"1-of-4"}),a.default.createElement(n,{size:"3-of-4"}),a.default.createElement(n,{size:"2-of-4"}),a.default.createElement(n,{size:"2-of-4"}),a.default.createElement(n,{size:"4-of-4"}))},{id:"five-column",label:"5 Column Span",element:a.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},a.default.createElement(n,{size:"1-of-5"}),a.default.createElement(n,{size:"1-of-5"}),a.default.createElement(n,{size:"1-of-5"}),a.default.createElement(n,{size:"1-of-5"}),a.default.createElement(n,{size:"1-of-5"}),a.default.createElement(n,{size:"1-of-5"}),a.default.createElement(n,{size:"4-of-5"}),a.default.createElement(n,{size:"2-of-5"}),a.default.createElement(n,{size:"3-of-5"}),a.default.createElement(n,{size:"5-of-5"}))},{id:"six-column",label:"6 Column Span",element:a.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},a.default.createElement(n,{size:"1-of-6"}),a.default.createElement(n,{size:"1-of-6"}),a.default.createElement(n,{size:"1-of-6"}),a.default.createElement(n,{size:"1-of-6"}),a.default.createElement(n,{size:"1-of-6"}),a.default.createElement(n,{size:"1-of-6"}),a.default.createElement(n,{size:"2-of-6"}),a.default.createElement(n,{size:"4-of-6"}),a.default.createElement(n,{size:"3-of-6"}),a.default.createElement(n,{size:"3-of-6"}),a.default.createElement(n,{size:"6-of-6"}))},{id:"seven-column",label:"7 Column Span",element:a.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},a.default.createElement(n,{size:"1-of-7"}),a.default.createElement(n,{size:"1-of-7"}),a.default.createElement(n,{size:"1-of-7"}),a.default.createElement(n,{size:"1-of-7"}),a.default.createElement(n,{size:"1-of-7"}),a.default.createElement(n,{size:"1-of-7"}),a.default.createElement(n,{size:"1-of-7"}),a.default.createElement(n,{size:"2-of-7"}),a.default.createElement(n,{size:"5-of-7"}),a.default.createElement(n,{size:"3-of-7"}),a.default.createElement(n,{size:"4-of-7"}),a.default.createElement(n,{size:"7-of-7"}))},{id:"eight-column",label:"8 Column Span",element:a.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},a.default.createElement(n,{size:"1-of-8"}),a.default.createElement(n,{size:"1-of-8"}),a.default.createElement(n,{size:"1-of-8"}),a.default.createElement(n,{size:"1-of-8"}),a.default.createElement(n,{size:"1-of-8"}),a.default.createElement(n,{size:"1-of-8"}),a.default.createElement(n,{size:"1-of-8"}),a.default.createElement(n,{size:"1-of-8"}),a.default.createElement(n,{size:"2-of-8"}),a.default.createElement(n,{size:"6-of-8"}),a.default.createElement(n,{size:"3-of-8"}),a.default.createElement(n,{size:"5-of-8"}),a.default.createElement(n,{size:"4-of-8"}),a.default.createElement(n,{size:"4-of-8"}),a.default.createElement(n,{size:"8-of-8"}))},{id:"twelve-column",label:"12 Column Span",element:a.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"1-of-12"}),a.default.createElement(n,{size:"2-of-12"}),a.default.createElement(n,{size:"10-of-12"}),a.default.createElement(n,{size:"3-of-12"}),a.default.createElement(n,{size:"9-of-12"}),a.default.createElement(n,{size:"4-of-12"}),a.default.createElement(n,{size:"8-of-12"}),a.default.createElement(n,{size:"5-of-12"}),a.default.createElement(n,{size:"7-of-12"}),a.default.createElement(n,{size:"6-of-12"}),a.default.createElement(n,{size:"6-of-12"}),a.default.createElement(n,{size:"12-of-12"}))}]},146:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=l(0),n=(d(a),l(4)),s=d(n),i=d(l(5)),o=l(1),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(l(145));function d(e){return e&&e.__esModule?e:{default:e}}var f=n.factories.a,u=n.factories.code,m=n.factories.h2,c=n.factories.h3,p=n.factories.p,z=n.factories.table,E=n.factories.tbody,g=n.factories.td,h=n.factories.th,v=n.factories.thead,y=n.factories.tr,x=t.getElement=function(){return(0,a.createElement)(s.default,{},(0,a.createElement)("div",{className:"doc lead"},"Sizing utilities allow for easy width sizing on an element."),m({id:"About-Sizing"},"About Sizing"),p({},"Our sizing class names are set up in a human-readable format, e.g. ",u({},".slds-size_1-of-2"),". This equates to a width of 50%."),p({},"By default, a group of sizing helpers are created based on standard grid column spans of 2, 3, 4, 5, 6, 7, 8 and 12. For example, if you need 3 cards to horizontally align along the same x-axis, you would use the class ",u({},".slds-size_1-of-3")," on each element. This will make each card take up 33.333% of containing section."),p({},"Our sizing helpers have the option to be responsive. By pre-pending a breakpoint name to a sizing helper, e.g. ",u({},".slds-medium-size_1-of-3")," you will output a width at the specified breakpoint name."),p({},"Absolute sizing helpers are also available (where widths are declared in ",u({},"rem")," units): ",u({},"xx-small"),", ",u({},"x-small"),", ",u({},"medium"),", ",u({},"large"),", ",u({},"x-large")," and ",u({},"xx-large")," as defined in the ",f({href:"/design-tokens/#category-sizing"},"sizing category of the Design Tokens"),". e.g. ",u({},".slds-size_large"),"."),p({},"In some uncommon cases, you may need a sizing helper that is up to a certain breakpoint. For these, use the classes prefixed with ",u({},"max-")," to achieve this result."),p({},"Here is an overview of our available breakpoint names:"),z({},v({},y({},h({},"Breakpoint Name"),h({},"Breakpoint Width"))),E({},y({},g({},u({},"small-")),g({},"30em / 480px and higher")),y({},g({},u({},"medium-")),g({},"48em / 768px and higher")),y({},g({},u({},"large-")),g({},"64em / 1024px and higher")),y({},g({},u({},"max-small-")),g({},"up to 29.9375em / 479px")),y({},g({},u({},"max-medium-")),g({},"up to 47.9375em / 767px")),y({},g({},u({},"max-large-")),g({},"up to 63.9375em / 1023px")))),p({},"Our responsive sizing helpers are built upon a mobile first approach. To achieve the desired outcome of this approach, you will need to append responsive sizing helpers to an element that overrides the previous breakpoint. A default sizing helper is required and responsive sizing helpers are additive. The following example demonstrates the class name position for each breakpoint:"),p({},u({},'<div class="[default] [small size override] [medium size override] [large size override]">')),m({id:"Examples"},"Examples"),c({id:"2-Column-Span"},"2 Column Span"),(0,a.createElement)(i.default,null,(0,o.getDisplayElementById)(r.examples,"two-column")),c({id:"3-Column-Span"},"3 Column Span"),(0,a.createElement)(i.default,null,(0,o.getDisplayElementById)(r.examples,"three-column")),c({id:"4-Column-Span"},"4 Column Span"),(0,a.createElement)(i.default,null,(0,o.getDisplayElementById)(r.examples,"four-column")),c({id:"5-Column-Span"},"5 Column Span"),(0,a.createElement)(i.default,null,(0,o.getDisplayElementById)(r.examples,"five-column")),c({id:"6-Column-Span"},"6 Column Span"),(0,a.createElement)(i.default,null,(0,o.getDisplayElementById)(r.examples,"six-column")),c({id:"7-Column-Span"},"7 Column Span"),(0,a.createElement)(i.default,null,(0,o.getDisplayElementById)(r.examples,"seven-column")),c({id:"8-Column-Span"},"8 Column Span"),(0,a.createElement)(i.default,null,(0,o.getDisplayElementById)(r.examples,"eight-column")),c({id:"12-Column-Span"},"12 Column Span"),(0,a.createElement)(i.default,null,(0,o.getDisplayElementById)(r.examples,"twelve-column")))};t.getContents=function(){return(0,n.createTableOfContents)(x())}},3:function(e,t){e.exports=JSBeautify}});