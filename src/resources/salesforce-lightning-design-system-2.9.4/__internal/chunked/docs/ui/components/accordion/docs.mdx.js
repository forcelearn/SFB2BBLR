var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/accordion/docs.mdx.js"]=function(e){function t(t){for(var a,o,l=t[0],s=t[1],i=t[2],u=0,m=[];u<l.length;u++)o=l[u],r[o]&&m.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(d&&d(t);m.length;)m.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={86:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var d=s;return c.push([393,0]),n()}({0:function(e,t){e.exports=React},3:function(e,t){e.exports=JSBeautify},392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.AccordionSection=t.Accordion=void 0;var a=l(n(0)),r=l(n(9)),c=l(n(2)),o=n(111);function l(e){return e&&e.__esModule?e:{default:e}}var s="accordion-details-01",i="accordion-details-02",d="accordion-details-03",u=t.Accordion=function(e){return a.default.createElement("ul",{className:(0,c.default)("slds-accordion",e.className)},e.children)},m=t.AccordionSection=function(e){return a.default.createElement("li",{className:"slds-accordion__list-item"},a.default.createElement("section",{className:(0,c.default)("slds-accordion__section",e.isOpen?"slds-is-open":null)},a.default.createElement("div",{className:(0,c.default)("slds-accordion__summary",e.className)},a.default.createElement("h3",{className:(0,c.default)("slds-accordion__summary-heading",e.className)},a.default.createElement("button",{"aria-controls":e.referenceId,"aria-expanded":e.isOpen,className:"slds-button slds-button_reset slds-accordion__summary-action"},a.default.createElement(r.default,{className:"slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"switch"}),a.default.createElement("span",{className:"slds-truncate",title:e.summary},e.summary))),e.hasActionOverflow&&a.default.createElement(o.ActionOverflow,{position:"right",dropdownIsOpen:!1})),a.default.createElement("div",{hidden:!e.isOpen,className:(0,c.default)("slds-accordion__content",e.className),id:e.referenceId},e.children)))};t.default=a.default.createElement(u,null,a.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:s},"Accordion details - A"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - B"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - C"));t.states=[{id:"section-one-open",label:"Section one open",element:a.default.createElement(u,null,a.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:s},"Accordion details - A"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - B"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - C"))},{id:"section-two-open",label:"Section two open",element:a.default.createElement(u,null,a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:s},"Accordion details - A"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:i},"Accordion details - B"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - C"))},{id:"section-three-open",label:"Section three open",element:a.default.createElement(u,null,a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:s},"Accordion details - A"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - B"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:d},"Accordion details - C"))},{id:"multiple-sections-open",label:"Multiple sections open",element:a.default.createElement(u,null,a.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:s},"Accordion details - A"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - B"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:d},"Accordion details - C"))}],t.examples=[{id:"nested-accordions",label:"Nested Accordions",element:a.default.createElement(u,null,a.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:s},a.default.createElement(u,null,a.default.createElement(m,{summary:"Nested accordion summary",isOpen:!0,referenceId:"accordion-details-04"},"Accordion details - A"),a.default.createElement(m,{summary:"Nested accordion summary",isOpen:!1,referenceId:"accordion-details-05"},"Accordion details - B"))),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - B"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - C"))},{id:"styled",label:"Wrapped in Card",element:a.default.createElement("div",{className:"slds-card"},a.default.createElement(u,null,a.default.createElement(m,{summary:"Accordion summary",isOpen:!0,referenceId:s},"Accordion details - A"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:i},"Accordion details - B"),a.default.createElement(m,{summary:"Accordion summary",isOpen:!1,referenceId:d},"Accordion details - C")))},{id:"has-action-overflow",label:"Has Action Overflow Menu",element:a.default.createElement(u,null,a.default.createElement(m,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!0,referenceId:s},"Accordion details - A"),a.default.createElement(m,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!1,referenceId:i},"Accordion details - B"),a.default.createElement(m,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!1,referenceId:d},"Accordion details - C"))}]},393:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=n(0),r=(i(a),n(4)),c=i(r),o=i(n(5)),l=(i(n(8)),n(1)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(392));function i(e){return e&&e.__esModule?e:{default:e}}var d=r.factories.a,u=r.factories.code,m=r.factories.h2,f=r.factories.h3,p=r.factories.p,y=t.getElement=function(){return(0,a.createElement)(c.default,{},(0,a.createElement)("div",{className:"doc lead"},"An accordion allows a user to toggle the display of a section of content."),(0,a.createElement)(o.default,{exampleOnly:!0},(0,l.getDisplayElementById)(s.examples,"styled")),m({id:"About-Accordions"},"About Accordions"),p({},"Accordions are composed of a list of longer blocks of text, with a header button to toggle the visibility of each block."),m({id:"Accessibility"},"Accessibility"),p({},"Availability of accordion content to assistive technology requires the use of ",u({},"aria-controls")," and toggling ",u({},"aria-expanded")," as regions are expanded and collapsed."),p({},"There are additional accessibility considerations within the ",d({href:"/components/buttons"},"Buttons")," and ",d({href:"/components/menus"},"Menus"),"."),m({id:"Default"},"Default"),(0,a.createElement)(o.default,null,s.default),f({id:"Structure-and-Implementation"},"Structure and Implementation"),p({},"An accordion is implemented as an unordered list with a class of ",u({},"slds-accordion"),". Inside the list, each chunk of content is inside both a list item with class of ",u({},"slds-accordion__list-item")," and a section with a class of ",u({},"slds-accordion__section"),"."),p({},"The content itself is contained within a div with the class ",u({},"slds-accordion__content"),", an ID that corresponds to the ",u({},"aria-control")," on the button and the hidden attribute."),p({},"Content visibility is toggled via a ",d({href:"/components/buttons"},"Button")," in the H3 heading. To make accordion content visible, the section is given the class ",u({},"slds-is-open"),", the button is changed from ",u({},'aria-expanded="false"')," to ",u({},'aria-expanded="true"'),", and the hidden attribute is removed from the content div."),m({id:"States"},"States"),f({id:"Section-1-Open"},"Section 1 - Open"),(0,a.createElement)(o.default,null,(0,l.getDisplayElementById)(s.states,"section-one-open")),f({id:"Section-2-Open"},"Section 2 - Open"),(0,a.createElement)(o.default,null,(0,l.getDisplayElementById)(s.states,"section-two-open")),f({id:"Section-3-Open"},"Section 3 - Open"),(0,a.createElement)(o.default,null,(0,l.getDisplayElementById)(s.states,"section-three-open")),f({id:"Multiple-Sections-Open"},"Multiple Sections - Open"),(0,a.createElement)(o.default,null,(0,l.getDisplayElementById)(s.states,"multiple-sections-open")),m({id:"Examples"},"Examples"),f({id:"With-Action-Overflow-Menu"},"With Action Overflow Menu"),(0,a.createElement)(o.default,null,(0,l.getDisplayElementById)(s.examples,"has-action-overflow")),f({id:"In-a-Card"},"In a Card"),(0,a.createElement)(o.default,null,(0,l.getDisplayElementById)(s.examples,"styled")),f({id:"Nested"},"Nested"),(0,a.createElement)(o.default,null,(0,l.getDisplayElementById)(s.examples,"nested-accordions")))};t.getContents=function(){return(0,r.createTableOfContents)(y())}}});