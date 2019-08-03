var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/utilities/vertical-list/docs.mdx.js"]=function(e){function t(t){for(var a,d,n=t[0],r=t[1],c=t[2],u=0,o=[];u<n.length;u++)d=n[u],i[d]&&o.push(i[d][0]),i[d]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(m&&m(t);o.length;)o.shift()();return s.push.apply(s,c||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var l=s[t],a=!0,n=1;n<l.length;n++){var r=l[n];0!==i[r]&&(a=!1)}a&&(s.splice(t--,1),e=d(d.s=l[0]))}return e}var a={},i={57:0},s=[];function d(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,d),l.l=!0,l.exports}d.m=e,d.c=a,d.d=function(e,t,l){d.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},d.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/assets/scripts/bundle/";var n=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var m=r;return s.push([323,0]),l()}({0:function(e,t){e.exports=React},3:function(e,t){e.exports=JSBeautify},322:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(l(0));t.examples=[{id:"vertical-list",label:"Default",element:a.default.createElement("ul",null,a.default.createElement("li",null,"Vertical List"),a.default.createElement("li",null,"List Item"),a.default.createElement("li",null,"List Item"))},{id:"unordered-list-decimal",label:"Dotted",element:a.default.createElement("ul",{className:"slds-list_dotted"},a.default.createElement("li",null,"Basic ordered list"),a.default.createElement("li",null,"List Item"),a.default.createElement("li",null,"List Item"))},{id:"ordered-list-decimal",label:"Decimal",element:a.default.createElement("ol",{className:"slds-list_ordered"},a.default.createElement("li",null,"Basic ordered list"),a.default.createElement("li",null,"List Item"),a.default.createElement("li",null,"List Item"))},{id:"vertical-list-links",label:"Links",element:a.default.createElement("ul",null,a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"Vertical List with links")),a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"vertical-list-block-links",label:"Block links",element:a.default.createElement("ul",{className:"slds-has-block-links"},a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"Vertical List with block links")),a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"vertical-list-block-links-space",label:"Block links with space",element:a.default.createElement("ul",{className:"slds-has-block-links_space"},a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"Vertical List with block links with space")),a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"vertical-list-inline-block-links",label:"Inline block links",element:a.default.createElement("ul",{className:"slds-has-inline-block-links"},a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"Vertical List with inline-block links")),a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"vertical-list-inline-block-links-space",label:"Inline block links with space",element:a.default.createElement("ul",{className:"slds-has-inline-block-links_space"},a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"Vertical List with inline-block links with space")),a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",null,a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"vertical-list-nested",label:"Nested vertical lists",element:a.default.createElement("ul",null,a.default.createElement("li",null,"Vertical List with nested vertical lists"),a.default.createElement("li",null,"List Item"),a.default.createElement("li",null,a.default.createElement("ul",{className:"slds-is-nested"},a.default.createElement("li",null,"Nested Vertical List"),a.default.createElement("li",null,"List Item"),a.default.createElement("li",null,a.default.createElement("ul",{className:"slds-is-nested"},a.default.createElement("li",null,"Nested Vertical List"),a.default.createElement("li",null,"List Item"),a.default.createElement("li",null,"List Item"))))))},{id:"vertical-dividers-top",label:"Top",element:a.default.createElement("ul",{className:"slds-has-dividers_top"},a.default.createElement("li",{className:"slds-item"},"List item with top divider"),a.default.createElement("li",{className:"slds-item"},"List Item"),a.default.createElement("li",{className:"slds-item"},"List Item"))},{id:"vertical-dividers-top-space",label:"Top with space",element:a.default.createElement("ul",{className:"slds-has-dividers_top-space"},a.default.createElement("li",{className:"slds-item"},"List item with top divider with space"),a.default.createElement("li",{className:"slds-item"},"List Item"),a.default.createElement("li",{className:"slds-item"},"List Item"))},{id:"vertical-dividers-link-top",label:"Top with link",element:a.default.createElement("ul",{className:"slds-has-dividers_top slds-has-block-links"},a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List item with link and top divider")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"vertical-dividers-link-top-space",label:"Top with link and space",element:a.default.createElement("ul",{className:"slds-has-dividers_top slds-has-block-links_space"},a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List item with link and top divider")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"vertical-dividers-bottom",label:"Bottom",element:a.default.createElement("ul",{className:"slds-has-dividers_bottom"},a.default.createElement("li",{className:"slds-item"},"List item with bottom divider"),a.default.createElement("li",{className:"slds-item"},"List Item"),a.default.createElement("li",{className:"slds-item"},"List Item"))},{id:"vertical-dividers-bottom-space",label:"Bottom with space",element:a.default.createElement("ul",{className:"slds-has-dividers_bottom-space"},a.default.createElement("li",{className:"slds-item"},"List item with bottom divider with space"),a.default.createElement("li",{className:"slds-item"},"List Item"),a.default.createElement("li",{className:"slds-item"},"List Item"))},{id:"vertical-dividers-link-bottom",label:"Bottom with link",element:a.default.createElement("ul",{className:"slds-has-dividers_bottom slds-has-block-links"},a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List item with link and bottom divider")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"vertical-dividers-link-bottom-space",label:"Bottom with link and space",element:a.default.createElement("ul",{className:"slds-has-dividers_bottom slds-has-block-links_space"},a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List item with link and bottom divider with space")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"vertical-dividers-around",label:"Around",element:a.default.createElement("ul",{className:"slds-has-dividers_around"},a.default.createElement("li",{className:"slds-item"},"List item with around divider"),a.default.createElement("li",{className:"slds-item"},"List Item"),a.default.createElement("li",{className:"slds-item"},"List Item"))},{id:"vertical-dividers-around-space",label:"Around with space",element:a.default.createElement("ul",{className:"slds-has-dividers_around-space"},a.default.createElement("li",{className:"slds-item"},"List item with around divider with space"),a.default.createElement("li",{className:"slds-item"},"List Item"),a.default.createElement("li",{className:"slds-item"},"List Item"))},{id:"vertical-dividers-link-around",label:"Around with link",element:a.default.createElement("ul",{className:"slds-has-dividers_around slds-has-block-links"},a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List item with link and around divider")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"vertical-dividers-link-around-space",label:"Around with link and space",element:a.default.createElement("ul",{className:"slds-has-dividers_around slds-has-block-links_space"},a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List item with link and around divider with space")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")),a.default.createElement("li",{className:"slds-item"},a.default.createElement("a",{href:"javascript:void(0);"},"List Item")))}]},323:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=l(0),i=(c(a),l(4)),s=c(i),d=c(l(5)),n=l(1),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(l(322));function c(e){return e&&e.__esModule?e:{default:e}}var m=i.factories.h2,u=i.factories.h3,o=t.getElement=function(){return(0,a.createElement)(s.default,{},(0,a.createElement)("div",{className:"doc lead"},"A vertical list."),m({id:"Base"},"Base"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-list")),m({id:"Examples"},"Examples"),u({id:"Dotted"},"Dotted"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"unordered-list-decimal")),u({id:"Decimal"},"Decimal"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"ordered-list-decimal")),u({id:"Links"},"Links"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-list-links")),u({id:"Block-Links"},"Block Links"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-list-block-links")),u({id:"Block-Links-with-Space"},"Block Links with Space"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-list-block-links-space")),u({id:"Inline-Block-Links"},"Inline Block Links"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-list-inline-block-links")),u({id:"Inline-Block-Links-with-Space"},"Inline Block Links with Space"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-list-inline-block-links-space")),u({id:"Nested-Vertical-Lists"},"Nested Vertical Lists"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-list-nested")),u({id:"Top"},"Top"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-top")),u({id:"Top-with-Space"},"Top with Space"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-top-space")),u({id:"Top-with-Link"},"Top with Link"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-link-top")),u({id:"Top-with-Link-and-Space"},"Top with Link and Space"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-link-top-space")),u({id:"Bottom"},"Bottom"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-bottom")),u({id:"Bottom-with-Space"},"Bottom with Space"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-bottom-space")),u({id:"Bottom-with-Link"},"Bottom with Link"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-link-bottom")),u({id:"Bottom-with-Link-and-Space"},"Bottom with Link and Space"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-link-bottom-space")),u({id:"Around"},"Around"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-around")),u({id:"Around-with-Space"},"Around with Space"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-around-space")),u({id:"Around-with-Link"},"Around with Link"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-link-around")),u({id:"Around-with-Link-and-Space"},"Around with Link and Space"),(0,a.createElement)(d.default,null,(0,n.getDisplayElementById)(r.examples,"vertical-dividers-link-around-space")))};t.getContents=function(){return(0,i.createTableOfContents)(o())}}});