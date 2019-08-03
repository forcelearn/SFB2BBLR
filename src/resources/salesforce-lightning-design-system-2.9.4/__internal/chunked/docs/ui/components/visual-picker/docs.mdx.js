var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/visual-picker/docs.mdx.js"]=function(e){function t(t){for(var a,d,i=t[0],r=t[1],c=t[2],m=0,o=[];m<i.length;m++)d=i[m],s[d]&&o.push(s[d][0]),s[d]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(u&&u(t);o.length;)o.shift()();return n.push.apply(n,c||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],a=!0,i=1;i<l.length;i++){var r=l[i];0!==s[r]&&(a=!1)}a&&(n.splice(t--,1),e=d(d.s=l[0]))}return e}var a={},s={22:0},n=[];function d(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,d),l.l=!0,l.exports}d.m=e,d.c=a,d.d=function(e,t,l){d.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},d.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=r;return n.push([165,0]),l()}({0:function(e,t){e.exports=React},162:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(l(0)),s=l(25),n=l(12),d=l(54);t.default=a.default.createElement(s.Fieldset,null,a.default.createElement(s.Legend,null,"Select an option"),a.default.createElement(n.FormElementControl,null,a.default.createElement(d.VisualPicker,{className:"slds-visual-picker_vertical",type:"radio"},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_medium slds-m-bottom_x-small"},"Item Text"),a.default.createElement("span",{className:"slds-text-title"},"Some optional item description to help the user better understand what this option is about."))),a.default.createElement(d.VisualPicker,{className:"slds-visual-picker_vertical",type:"radio"},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_medium slds-m-bottom_x-small"},"Item Text"),a.default.createElement("span",{className:"slds-text-title"},"Some optional item description to help the user better understand what this option is about."))),a.default.createElement(d.VisualPicker,{className:"slds-visual-picker_vertical",type:"radio"},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_medium slds-m-bottom_x-small"},"Item Text"),a.default.createElement("span",{className:"slds-text-title"},"Some optional item description to help the user better understand what this option is about.")))));t.states=[{id:"disabled",label:"Disabled option",element:a.default.createElement(s.Fieldset,null,a.default.createElement(s.Legend,null,"Select an option"),a.default.createElement(n.FormElementControl,null,a.default.createElement(d.VisualPicker,{className:"slds-visual-picker_vertical",type:"radio"},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_medium slds-m-bottom_x-small"},"Item Text"),a.default.createElement("span",{className:"slds-text-title"},"Some optional item description to help the user better understand what this option is about."))),a.default.createElement(d.VisualPicker,{className:"slds-visual-picker_vertical",type:"radio"},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_medium slds-m-bottom_x-small"},"Item Text"),a.default.createElement("span",{className:"slds-text-title"},"Some optional item description to help the user better understand what this option is about."))),a.default.createElement(d.VisualPicker,{className:"slds-visual-picker_vertical",type:"radio",disabled:!0},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_medium slds-m-bottom_x-small"},"Item Text"),a.default.createElement("span",{className:"slds-text-title"},"Some optional item description to help the user better understand what this option is about.")))))}]},163:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VisualPickerMediaObject=void 0;var a=d(l(0)),s=d(l(2)),n=l(11);function d(e){return e&&e.__esModule?e:{default:e}}var i=t.VisualPickerMediaObject=function(e){var t=e.symbol||"knowledge_base",l=e.icon||a.default.createElement(n.UtilityIcon,{className:"slds-icon-text-default",symbol:t,title:!1,assistiveText:!1});return a.default.createElement("a",{href:"javascript:void(0);",className:(0,s.default)("slds-box slds-box_link slds-box_x-small slds-media",e.className)},a.default.createElement("div",{className:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small"},l),a.default.createElement("div",{className:"slds-media__body slds-border_left slds-p-around_small"},e.children))};t.default=a.default.createElement("div",{className:"demo-only",style:{width:"24rem"}},a.default.createElement(i,{symbol:"knowledge_base"},a.default.createElement("h2",{className:"slds-truncate slds-text-heading_small",title:"Share the knowledge"},"Share the knowledge"),a.default.createElement("p",{className:"slds-m-top_small"},"Harness your team's collective know-how with our powerful knowledge base")))},164:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.VisualPickerMediaObject=t.PackageThree=t.PackageTwo=t.PackageOne=void 0;var a=u(l(0)),s=u(l(2)),n=u(l(1)),d=l(25),i=l(12),r=l(54),c=l(11);function u(e){return e&&e.__esModule?e:{default:e}}var m=t.PackageOne=[a.default.createElement("span",{className:"slds-text-heading_small",key:n.default.uniqueId()},"Lightning Professional"),a.default.createElement("span",{className:"slds-text-title",key:n.default.uniqueId()},"Complete service CRM for teams of any size")],o=t.PackageTwo=[a.default.createElement("span",{className:"slds-text-heading_small",key:n.default.uniqueId()},"Lightning Enterprise"),a.default.createElement("span",{className:"slds-text-title",key:n.default.uniqueId()},"Everything you need to take support to the next level")],f=t.PackageThree=[a.default.createElement("span",{className:"slds-text-heading_small",key:n.default.uniqueId()},"Lightning Unlimited"),a.default.createElement("span",{className:"slds-text-title",key:n.default.uniqueId()},"Complete support with enterprise-grade customization")];t.VisualPickerMediaObject=function(e){return a.default.createElement("a",{href:"javascript:void(0);",className:(0,s.default)("slds-box slds-box_link slds-box_x-small slds-media",e.className)},a.default.createElement("div",{className:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small"},a.default.createElement(c.UtilityIcon,{className:"slds-icon-text-default",symbol:"knowledge_base"})),a.default.createElement("div",{className:"slds-media__body slds-border_left slds-p-around_small"},e.children))};t.default=a.default.createElement(d.Fieldset,null,a.default.createElement(d.Legend,null,"Select a plan"),a.default.createElement(i.FormElementControl,null,a.default.createElement(r.VisualPicker,{type:"radio",size:"medium",label:m},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_large"},"$30"),a.default.createElement("span",{className:"slds-text-title"},"USD/user/month *"))),a.default.createElement(r.VisualPicker,{type:"radio",size:"medium",label:o},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_large"},"$150"),a.default.createElement("span",{className:"slds-text-title"},"USD/user/month *"))),a.default.createElement(r.VisualPicker,{type:"radio",size:"medium",label:f},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_large"},"$300"),a.default.createElement("span",{className:"slds-text-title"},"USD/user/month *")))));t.states=[{id:"disabled",label:"Disabled option",element:a.default.createElement(d.Fieldset,null,a.default.createElement(d.Legend,null,"Select a plan"),a.default.createElement(i.FormElementControl,null,a.default.createElement(r.VisualPicker,{type:"radio",size:"medium",label:m},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_large"},"$30"),a.default.createElement("span",{className:"slds-text-title"},"USD/user/month *"))),a.default.createElement(r.VisualPicker,{type:"radio",size:"medium",label:o},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_large"},"$150"),a.default.createElement("span",{className:"slds-text-title"},"USD/user/month *"))),a.default.createElement(r.VisualPicker,{type:"radio",size:"medium",disabled:!0,label:f},a.default.createElement("span",null,a.default.createElement("span",{className:"slds-text-heading_large"},"$300"),a.default.createElement("span",{className:"slds-text-title"},"USD/user/month *")))))}]},165:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=l(0),s=(f(a),l(4)),n=f(s),d=f(l(5)),i=l(1),r=o(l(54)),c=o(l(164)),u=o(l(163)),m=o(l(162));function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}function f(e){return e&&e.__esModule?e:{default:e}}var p=s.factories.h2,b=s.factories.h3,E=s.factories.h4,_=s.factories.p,h=t.getElement=function(){return(0,a.createElement)(n.default,{},(0,a.createElement)("div",{className:"doc lead"},"A visual picker can be either radio buttons, checkboxes, or links that are visually enhanced."),p({id:"Coverable-Content"},"Coverable Content"),b({id:"Base"},"Base"),_({},"Coverable content comes in two sizes - medium or large."),E({id:"Medium"},"Medium"),(0,a.createElement)(d.default,null,r.default),E({id:"Large"},"Large"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(r.examples,"base_large")),b({id:"States"},"States"),E({id:"Disabled"},"Disabled"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(r.states,"disabled")),b({id:"Examples"},"Examples"),E({id:"Medium-checkbox-group"},"Medium checkbox group"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(r.examples,"checkbox-group")),E({id:"Large-checkbox-group"},"Large checkbox group"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(r.examples,"checkbox-group_large")),p({id:"Non-Coverable-Content"},"Non Coverable Content"),b({id:"Base-2"},"Base"),(0,a.createElement)(d.default,null,c.default),b({id:"States-2"},"States"),E({id:"Disabled-2"},"Disabled"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(c.states,"disabled")),p({id:"Link"},"Link"),(0,a.createElement)(d.default,null,u.default),p({id:"Vertical"},"Vertical"),b({id:"Base-3"},"Base"),(0,a.createElement)(d.default,null,m.default),b({id:"States-3"},"States"),E({id:"Disabled-3"},"Disabled"),(0,a.createElement)(d.default,null,(0,i.getDisplayElementById)(m.states,"disabled")))};t.getContents=function(){return(0,s.createTableOfContents)(h())}},3:function(e,t){e.exports=JSBeautify},54:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.VisualPickerMediaObject=t.VisualPicker=t.Option=void 0;var a=u(l(0)),s=u(l(9)),n=u(l(2)),d=u(l(1)),i=l(25),r=l(12),c=l(11);function u(e){return e&&e.__esModule?e:{default:e}}var m=t.Option=function(e){return a.default.createElement("span",{className:"slds-text-title",key:d.default.uniqueId()},e.label)},o=t.VisualPicker=function(e){var t=d.default.uniqueId("visual-picker-");return a.default.createElement("div",{className:(0,n.default)("slds-visual-picker",{"slds-visual-picker_large":"large"===e.size,"slds-visual-picker_medium":"medium"===e.size},e.className)},a.default.createElement("input",{type:e.type,id:t,value:t,name:"options",defaultChecked:e.checked,disabled:e.disabled}),a.default.createElement("label",{htmlFor:t},e.icon?a.default.createElement("span",{className:(0,n.default)("slds-visual-picker__figure slds-visual-picker__icon slds-align_absolute-center")},a.default.createElement("span",{className:"slds-is-selected"},a.default.createElement("span",{className:"slds-icon_container"},a.default.createElement(s.default,{className:"slds-icon slds-icon_large slds-icon-action-check",sprite:"action",symbol:"check"}))),a.default.createElement("span",{className:"slds-is-not-selected"},a.default.createElement("span",{className:"slds-icon_container"},a.default.createElement(s.default,{className:(0,n.default)("slds-icon slds-icon-"+e.sprite+"-"+e.symbol+" slds-icon_large",{"slds-icon-text-default":"utility"===e.sprite}),sprite:e.sprite||"action",symbol:e.symbol})))):a.default.createElement("span",{className:(0,n.default)("slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-center")},e.children),e.label?a.default.createElement("span",{className:"slds-visual-picker__body"},e.label):null,e.icon?null:a.default.createElement("span",{className:"slds-icon_container slds-visual-picker__text-check"},a.default.createElement(s.default,{className:"slds-icon slds-icon-text-check slds-icon_x-small",sprite:"utility",symbol:"check"}))))};t.VisualPickerMediaObject=function(e){return a.default.createElement("a",{href:"javascript:void(0);",className:(0,n.default)("slds-box slds-box_link slds-box_x-small slds-media",e.className)},a.default.createElement("div",{className:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small"},a.default.createElement(c.UtilityIcon,{className:"slds-icon-text-default",symbol:"knowledge_base"})),a.default.createElement("div",{className:"slds-media__body slds-border_left slds-p-around_small"},e.children))};t.default=a.default.createElement(i.Fieldset,null,a.default.createElement(i.Legend,null,"Select an app"),a.default.createElement(r.FormElementControl,null,a.default.createElement(o,{type:"radio",icon:!0,sprite:"utility",symbol:"connected_apps",label:a.default.createElement(m,{label:"Connected App"}),size:"medium"}),a.default.createElement(o,{type:"radio",icon:!0,sprite:"utility",symbol:"custom_apps",label:a.default.createElement(m,{label:"Custom App"}),size:"medium"})));t.states=[{id:"disabled",label:"Disabled option",element:a.default.createElement(i.Fieldset,null,a.default.createElement(i.Legend,null,"Select an app"),a.default.createElement(r.FormElementControl,null,a.default.createElement(o,{type:"radio",icon:!0,sprite:"utility",symbol:"connected_apps",label:a.default.createElement(m,{label:"Connected App"}),size:"medium"}),a.default.createElement(o,{type:"radio",disabled:!0,icon:!0,sprite:"utility",symbol:"custom_apps",label:a.default.createElement(m,{label:"Custom App"}),size:"medium"})))}],t.examples=[{id:"base_large",label:"large base",element:a.default.createElement(i.Fieldset,null,a.default.createElement(i.Legend,null,"Select an app"),a.default.createElement(r.FormElementControl,null,a.default.createElement(o,{type:"radio",icon:!0,sprite:"utility",symbol:"connected_apps",label:a.default.createElement(m,{label:"Connected App"}),size:"large"}),a.default.createElement(o,{type:"radio",disabled:!0,icon:!0,sprite:"utility",symbol:"custom_apps",label:a.default.createElement(m,{label:"Custom App"}),size:"large"})))},{id:"checkbox-group",label:"Checkbox group",element:a.default.createElement(i.Fieldset,null,a.default.createElement(i.Legend,null,"Add the following object(s)"),a.default.createElement(r.FormElementControl,null,a.default.createElement(o,{type:"checkbox",icon:!0,sprite:"standard",symbol:"account",label:a.default.createElement(m,{label:"Account"}),size:"medium"}),a.default.createElement(o,{type:"checkbox",icon:!0,sprite:"standard",symbol:"lead",label:a.default.createElement(m,{label:"Lead"}),size:"medium"}),a.default.createElement(o,{type:"checkbox",icon:!0,sprite:"standard",symbol:"orders",label:a.default.createElement(m,{label:"Orders"}),size:"medium"})))},{id:"checkbox-group_large",label:"Large checkbox group",element:a.default.createElement(i.Fieldset,null,a.default.createElement(i.Legend,null,"Add the following object(s)"),a.default.createElement(r.FormElementControl,null,a.default.createElement(o,{type:"checkbox",icon:!0,sprite:"standard",symbol:"account",label:a.default.createElement(m,{label:"Account"}),size:"large"}),a.default.createElement(o,{type:"checkbox",icon:!0,sprite:"standard",symbol:"lead",label:a.default.createElement(m,{label:"Lead"}),size:"large"}),a.default.createElement(o,{type:"checkbox",icon:!0,sprite:"standard",symbol:"orders",label:a.default.createElement(m,{label:"Orders"}),size:"large"})))}]}});