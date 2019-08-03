var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/pills/docs.mdx.js"]=function(e){function t(t){for(var a,s,o=t[0],r=t[1],c=t[2],u=0,p=[];u<o.length;u++)s=o[u],i[s]&&p.push(i[s][0]),i[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(d&&d(t);p.length;)p.shift()();return n.push.apply(n,c||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],a=!0,o=1;o<l.length;o++){var r=l[o];0!==i[r]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=l[0]))}return e}var a={},i={25:0},n=[];function s(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=e,s.c=a,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=r;return n.push([171,0]),l()}({0:function(e,t){e.exports=React},169:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(l(0)),i=l(29),n=l(22),s=l(19);t.default=a.default.createElement(i.PillContainer,null,a.default.createElement(i.ListboxPills,null,a.default.createElement(i.ListboxPillsItem,null,a.default.createElement(i.ListboxPill,{tabIndex:"0"})),a.default.createElement(i.ListboxPillsItem,null,a.default.createElement(i.ListboxPill,null))));t.examples=[{id:"listbox-pill-with-icon",label:"With icon",element:a.default.createElement(i.PillContainer,null,a.default.createElement(i.ListboxPills,null,a.default.createElement(i.ListboxPillsItem,null,a.default.createElement(i.ListboxPill,{tabIndex:"0"},a.default.createElement(s.StandardIcon,{containerClassName:"slds-pill__icon_container",title:"Account",assistiveText:"Account"}))),a.default.createElement(i.ListboxPillsItem,null,a.default.createElement(i.ListboxPill,null,a.default.createElement(s.StandardIcon,{containerClassName:"slds-pill__icon_container",symbol:"case",title:"Case",assistiveText:"Case"})))))},{id:"listbox-pill-with-avatar",label:"With avatar",element:a.default.createElement(i.PillContainer,null,a.default.createElement(i.ListboxPills,null,a.default.createElement(i.ListboxPillsItem,null,a.default.createElement(i.ListboxPill,{tabIndex:"0"},a.default.createElement(n.Avatar,{className:"slds-avatar_x-small slds-pill__icon_container"},a.default.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"})))),a.default.createElement(i.ListboxPillsItem,null,a.default.createElement(i.ListboxPill,null,a.default.createElement(n.Avatar,{className:"slds-avatar_x-small slds-pill__icon_container"},a.default.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"}))))))},{id:"listbox-pill-bare",label:"Bare",element:a.default.createElement(i.PillContainer,null,a.default.createElement(i.ListboxPills,null,a.default.createElement(i.ListboxPillsItem,null,a.default.createElement(i.ListboxPill,{className:"slds-pill_bare",tabIndex:"0"})),a.default.createElement(i.ListboxPillsItem,null,a.default.createElement(i.ListboxPill,{className:"slds-pill_bare"}))))}]},170:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=void 0;var a=s(l(0)),i=s(l(9)),n=l(29);function s(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.createElement(n.Pill,null);t.states=[{id:"error",label:"Error",element:a.default.createElement(n.Pill,{className:"slds-has-error"},a.default.createElement("span",{className:"slds-pill__icon_container"},a.default.createElement("span",{className:"slds-icon_container",title:"Error"},a.default.createElement(i.default,{className:"slds-icon slds-icon-text-error",sprite:"utility",symbol:"error"}),a.default.createElement("span",{className:"slds-assistive-text"},"Warning"))))},{id:"truncated",label:"Truncated",element:a.default.createElement(n.PillContainer,null,a.default.createElement(n.Pill,{label:"Pill label that is longer than the area that contains it"}))}],t.examples=[{id:"icon",label:"With icon",element:a.default.createElement(n.Pill,null,a.default.createElement("span",{className:"slds-pill__icon_container"},a.default.createElement("span",{className:"slds-icon_container slds-icon-standard-account",title:"Account"},a.default.createElement(i.default,{className:"slds-icon",sprite:"standard",symbol:"account"}),a.default.createElement("span",{className:"slds-assistive-text"},"Account"))))},{id:"avatar",label:"With avatar",element:a.default.createElement(n.Pill,null,a.default.createElement("span",{className:"slds-pill__icon_container"},a.default.createElement("span",{className:"slds-avatar slds-avatar_circle",title:"User avatar"},a.default.createElement("img",{alt:"Person name",src:"/assets/images/avatar2.jpg",title:"User avatar"}))))},{id:"container",label:"Pill with Container",element:a.default.createElement(n.PillContainer,null,a.default.createElement(n.Pill,null),a.default.createElement(n.Pill,null),a.default.createElement(n.Pill,null))}]},171:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=l(0),i=(u(a),l(4)),n=u(i),s=u(l(5)),o=(u(l(10)),u(l(8)),l(1)),r=d(l(170)),c=d(l(169));function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}function u(e){return e&&e.__esModule?e:{default:e}}var p=i.factories.a,f=i.factories.code,m=i.factories.h2,h=i.factories.h3,b=i.factories.h4,E=i.factories.li,x=i.factories.p,_=i.factories.strong,v=i.factories.ul,y=t.getElement=function(){return(0,a.createElement)(n.default,{},(0,a.createElement)("div",{className:"lead doc"},"A pill represents an object that can be viewed with or without an icon."),m({id:"About-Pills"},"About Pills"),x({},"To create a pill, apply the ",f({},".slds-pill")," class on a ",f({},"<span>"),"."),x({},"Depending on your context, you will either need a linked pill or a pill option inside of a listbox."),x({},"For linked pills, a modifier class of ",f({},"slds-pill_link")," needs to be added to the existing ",f({},"<span>")," with the classname of ",f({},"slds-pill"),". You need an ",f({},"<a>")," inside of the span with the ",f({},"slds-pill_link")," class. The ",f({},"<a>")," will get the classname of ",f({},"slds-pill__action"),". This will treat the interactions differently from an unlinked pill option inside of a listbox."),x({},"For both linked pills and unlinked pill options, a ",f({},"<span>")," with the classname of ",f({},"slds-pill__label")," should contain the string of text describing the pill object."),x({},"Note, that a linked pill should not be used as a pill option inside of a listbox."),x({},"Additionally, a pill can have an icon or image that sits to the left-hand side of the ",f({},".slds-pill__label"),". That icon or image should receive the class ",f({},".slds-pill__icon_container"),"."),x({},'You may also want the functionality to remove the pill as a selection. An "X" icon is normally used and will sit to the right-hand side of the ',f({},".slds-pill__label"),". That icon should receive the class ",f({},".slds-pill__remove"),"."),x({},"A ",f({},".slds-pill_container")," can be used as a visual container for multiple pill(s)."),m({id:"Base"},"Base"),(0,a.createElement)(s.default,null,r.default),h({id:"Examples"},"Examples"),b({id:"With-Icon"},"With Icon"),(0,a.createElement)(s.default,null,(0,o.getDisplayElementById)(r.examples,"icon")),b({id:"With-Avatar"},"With Avatar"),(0,a.createElement)(s.default,null,(0,o.getDisplayElementById)(r.examples,"avatar")),b({id:"Pill-with-Container"},"Pill with Container"),(0,a.createElement)(s.default,null,(0,o.getDisplayElementById)(r.examples,"container")),h({id:"States"},"States"),b({id:"Error"},"Error"),(0,a.createElement)(s.default,null,(0,o.getDisplayElementById)(r.states,"error")),b({id:"Truncated"},"Truncated"),x({},"The pills component will respect the width of its parent and truncate if necessary."),(0,a.createElement)(s.default,{style:{width:"220px"}},(0,o.getDisplayElementById)(r.states,"truncated")),m({id:"Listbox-Of-Pill-Options"},"Listbox Of Pill Options"),(0,a.createElement)(s.default,null,c.default),x({},"A Listbox of Pills is a way to display a list of selected options when performing user input, usually from a multi-select ",p({href:"/components/combobox"},"Combobox"),", ",p({href:"/components/lookups"},"Lookup")," or ",p({href:"/components/picklist"},"Picklist"),"."),h({id:"Accessibility"},"Accessibility"),x({},_({},"Interaction requirements")),v({},E({},"Only 1 focusabled Pill per set of Pills"),E({},"The remove button must not be a focusable element, but can be clickable"),E({},"Delete with a keyboard is performed with the ",f({},"Backspace")," or ",f({},"Delete")," key when focused on a pill")),x({},_({},"Notable attributes")),v({},E({},f({},'role="listbox"')," is placed on the ",f({},"ul")),E({},f({},"aria-label")," is applied to ",f({},"listbox")," to describe what the list of options are to the user"),E({},f({},'aria-orientation="horizontal"')," is applied to the ",f({},"listbox")," to describe the left to right direction of the pills"),E({},f({},'role="presentation"')," is placed on the ",f({},"li")," elements"),E({},f({},'role="option"')," is placed on the ",f({},"slds-pill")," elements"),E({},f({},'aria-selected="true"')," is applied to all ",f({},"option")," elements, this is because they have all be selected"),E({},f({},'tabindex="0"')," is applied to the ",f({},"option")," that is in focus last. By default it is placed on the first ",f({},"option"))),x({},_({},"Keyboard navigation")),v({},E({},"The first ",f({},"option")," in the list will be take user focus initially, when tabbed to"),E({},f({},"Right")," arrow key will move focus to the next pill in the list"),E({},f({},"Left")," arrow key will move focus to the previous pill in the list"),E({},f({},"Left")," arrow key when on the first ",f({},"option")," should cycle user focus to the last ",f({},"option")),E({},f({},"Right")," arrow key when on the last ",f({},"option")," should cycle user focus to the first ",f({},"option")),E({},f({},"Delete")," or ",f({},"Backspace")," key when focused on an ",f({},"option")," should remove that ",f({},"option"),". Focus should then be placed on the nearest ",f({},"option"),v({},E({},"When on the last ",f({},"option"),", place user focus on the previous ",f({},"option")),E({},"When on the first ",f({},"option"),", place user focus on the next ",f({},"option")),E({},"When on the only ",f({},"option"),", place user focus on the ",f({},"listbox")," or any ",f({},"input")," element the ",f({},"option")," might be associated with")))),h({id:"Examples-2"},"Examples"),b({id:"With-Icon-2"},"With Icon"),(0,a.createElement)(s.default,null,(0,o.getDisplayElementById)(c.examples,"listbox-pill-with-icon")),b({id:"With-Avatar-2"},"With Avatar"),(0,a.createElement)(s.default,null,(0,o.getDisplayElementById)(c.examples,"listbox-pill-with-avatar")),h({id:"Layout"},"Layout"),b({id:"Bare"},"Bare"),(0,a.createElement)(s.default,null,(0,o.getDisplayElementById)(c.examples,"listbox-pill-bare")))};t.getContents=function(){return(0,i.createTableOfContents)(y())}},3:function(e,t){e.exports=JSBeautify}});