var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/activity-timeline/docs.mdx.js"]=function(e){function t(t){for(var l,i,d=t[0],o=t[1],r=t[2],m=0,u=[];m<d.length;m++)i=d[m],s[i]&&u.push(s[i][0]),s[i]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(c&&c(t);u.length;)u.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,d=1;d<a.length;d++){var o=a[d];0!==s[o]&&(l=!1)}l&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var l={},s={5:0},n=[];function i(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=l,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var d=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=d.push.bind(d);d.push=t,d=d.slice();for(var r=0;r<d.length;r++)t(d[r]);var c=o;return n.push([127,0]),a()}({0:function(e,t){e.exports=React},126:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.examples=t.ActivityTimeline=t.NarrowContext=t.DescriptionCard=t.FieldInfoList=t.FieldInfoListItem=t.TimelineItem=t.TimelineError=t.TimelineSubtext=t.TimelineTrigger=t.TimelineMediaBody=t.TimelineMediaFigure=t.TimelineActions=t.TimelineIcon=void 0;var l=c(a(0)),s=c(a(7)),n=a(21),i=c(a(9)),d=a(11),o=a(14),r=c(a(2));function c(e){return e&&e.__esModule?e:{default:e}}var m=[l.default.createElement(d.UtilityIcon,{key:"groups",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"groups",title:"Group email",assistiveText:"Group email"}),l.default.createElement(d.UtilityIcon,{key:"attach",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"attach",title:"Has attachments",assistiveText:"Has attachments"})],u=[l.default.createElement(d.UtilityIcon,{key:"rotate",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"rotate",title:"Recurring Task",assistiveText:"Recurring Task"})],f=[l.default.createElement(d.UtilityIcon,{key:"world",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"world",title:"Public sharing",assistiveText:"Public sharing"})],p=t.TimelineIcon=function(e){return l.default.createElement("div",{className:(0,r.default)("slds-icon_container","log_a_call"===e.symbol?"slds-icon-standard-log-a-call":"slds-icon-standard-"+e.symbol,e.className),title:"log_a_call"===e.symbol?"call":e.symbol},l.default.createElement(i.default,{className:"slds-icon slds-icon_small",sprite:"standard",symbol:e.symbol}))},h=t.TimelineActions=function(e){return l.default.createElement("div",{className:(0,r.default)("slds-timeline__actions",{"slds-timeline__actions_inline":e.inline})},l.default.createElement("p",{className:"slds-timeline__date"},e.date||"Feb 24"),l.default.createElement(s.default,{className:"slds-button_icon-border-filled slds-button_icon-x-small",symbol:"down",assistiveText:e.assistiveText||"More Options","aria-haspopup":"true",title:e.title||"More Options"}))},E=t.TimelineMediaFigure=function(e){return l.default.createElement("div",{className:"slds-media__figure"},l.default.createElement(s.default,{iconClassName:"slds-timeline__details-action-icon",symbol:"switch",title:"Toggle details for "+e.title,assistiveText:"Toggle details for "+e.title,"aria-controls":e.id,"aria-expanded":e.isExpanded}),l.default.createElement(p,{symbol:e.type,className:"slds-timeline__icon"}))},b=t.TimelineMediaBody=function(e){return l.default.createElement("div",{className:"slds-media__body"},e.children)},x=t.TimelineTrigger=function(e){return l.default.createElement("div",{className:"slds-grid slds-grid_align-spread slds-timeline__trigger"},l.default.createElement("div",{className:"slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space"},"task"===e.type&&l.default.createElement(n.Checkbox,{hideLabel:!0,label:"Mark "+e.title+" complete"}),l.default.createElement("h3",{className:"slds-truncate",title:e.title},l.default.createElement("a",{href:"javascript:void(0);"},l.default.createElement("strong",null,e.title))),e.iconSet&&l.default.createElement("div",{className:"slds-no-flex"},e.iconSet)),l.default.createElement(h,{inline:!0,date:e.date,title:"More Options for this item",assistiveText:"More Options for this item"}))},_=t.TimelineSubtext=function(e){return l.default.createElement("p",{className:"slds-m-horizontal_xx-small"},l.default.createElement("a",{href:"javascript:void(0);"},e.subtext.you)," ",e.subtext.action," ",l.default.createElement("a",{href:"javascript:void(0);"},e.subtext.to)," ",e.subtext.extra)},y=t.TimelineError=function(e){return l.default.createElement("div",{className:"slds-grid slds-text-color_error slds-m-top_x-small slds-m-horizontal_xx-small",id:e.id},l.default.createElement(d.UtilityIcon,{key:"attach",className:"slds-icon-text-error slds-icon_x-small slds-m-right_xx-small",symbol:"error",title:"Error Occurred",assistiveText:"Error Occurred"}),l.default.createElement("p",null,"There was an error loading the details"))},g=t.TimelineItem=function(e){return l.default.createElement("div",{className:(0,r.default)("slds-timeline__item_expandable","log_a_call"===e.type?"slds-timeline__item_call":"slds-timeline__item_"+e.type,{"slds-is-open":e.isExpanded},e.className)},l.default.createElement("span",{className:"slds-assistive-text"},e.type),l.default.createElement("div",{className:(0,r.default)("slds-media")},l.default.createElement(E,e),l.default.createElement(b,null,l.default.createElement(x,e),l.default.createElement(_,e),e.hasError?l.default.createElement(y,e):l.default.createElement(w,{id:e.id,isExpanded:e.isExpanded,fields:e.fields,bodyLabel:e.bodyLabel,footerButtons:e.footerButtons},e.children))))},v=t.FieldInfoListItem=function(e){return l.default.createElement("li",{className:"slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small"},l.default.createElement("span",{className:"slds-text-title slds-p-bottom_x-small"},e.label),l.default.createElement("span",{className:"slds-text-body_medium slds-truncate",title:e.content},l.default.createElement("a",{href:"javascript:void(0);"},e.content)))},N=t.FieldInfoList=function(e){return l.default.createElement("ul",{className:"slds-list_horizontal slds-wrap"},e.fields.map(function(e,t){return l.default.createElement(v,{key:t,label:e.label,content:e.content})}))},w=t.DescriptionCard=function(e){return l.default.createElement("article",{className:(0,r.default)("slds-box","slds-timeline__item_details","slds-theme_shade","slds-m-top_x-small","slds-m-horizontal_xx-small",{"slds-p-around_medium":e.isExpanded},e.className),id:e.id,"aria-hidden":!e.isExpanded},e.fields&&l.default.createElement(N,e),e.children&&l.default.createElement("div",null,l.default.createElement("span",{className:"slds-text-title"},e.bodyLabel),l.default.createElement("p",{className:"slds-p-top_x-small"},e.children)),e.footerButtons&&l.default.createElement(o.Button,{isNeutral:!0,className:"slds-m-top_small"},l.default.createElement(i.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"world"}),"Public Sharing"))},T=t.NarrowContext=function(e){return l.default.createElement("div",{className:"demo-only",style:{width:"400px"}},e.children)},I=t.ActivityTimeline=function(e){var t=function(t){if(e.itemsExpanded)return e.itemsExpanded.includes(t)};return l.default.createElement("ul",{className:"slds-timeline"},l.default.createElement("li",null,l.default.createElement(g,{id:"task-item-"+e.id,type:"task",title:"Review proposals for EBC deck with larger team and have marketing review this",date:"9:00am | 3/20/17",subtext:{you:"You",action:"created a task with",to:"Charlie Gomez"},iconSet:u,fields:[{label:"Name",content:"Charlie Gomez"},{label:"Related To",content:"Tesla Cloudhub + Anypoint Connectors"}],bodyLabel:"Description",isExpanded:t(1),isNarrow:e.isNarrow,hasError:e.hasError},"Need to finalize proposals and brand details before the meeting")),l.default.createElement("li",null,l.default.createElement(g,{id:"call-item-"+e.id,type:"log_a_call",title:"Mobile conversation on Monday",date:"10:00am | 3/23/17",subtext:{you:"You",action:"logged a call with",to:"Adam Chan"},fields:[{label:"Name",content:"Adam Chan"},{label:"Related To",content:"Tesla Cloudhub + Anypoint Connectors"}],bodyLabel:"Description",isExpanded:t(2),isNarrow:e.isNarrow},"Adam seemed interested in closing this deal quickly! Let’s move.")),l.default.createElement("li",null,l.default.createElement(g,{id:"email-item-"+e.id,type:"email",title:"Re: Mobile conversation on Monday with the new global team",date:"10:00am | 3/24/17",subtext:{you:"You",action:"emailed",to:"Lea Chan"},iconSet:m,fields:[{label:"From Address",content:"Jackie Dewar"},{label:"To Address",content:"Lea Chan"}],bodyLabel:"Text Body",isExpanded:t(3),isNarrow:e.isNarrow,footerButtons:e.footerButtons},"Hi everyone, Thanks for meeting with the team today and going through the proposals we saw. This goes on and wraps if needed.")),l.default.createElement("li",null,l.default.createElement(g,{id:"event-item-"+e.id,type:"event",title:"EBC Follow up call",date:"10:30am | 3/24/17",subtext:{you:"You",action:"created an event with",to:"Aida Lee",extra:"and 5 others"},iconSet:f,fields:[{label:"Location",content:"Westen St. Francis, San Francisco, CA, 94622"},{label:"Attendees",content:"Jason Dewar (Organizer) + 5 others"},{label:"When",content:"March 26, 10:00 AM - 11:00 AM"}],bodyLabel:"Description",isExpanded:t(4),isNarrow:e.isNarrow,footerButtons:e.footerButtons},"Let's discuss the 2017 product roadmap and address any questions")))};t.default=l.default.createElement(I,{id:"base",isExpanded:"false"});t.examples=[{id:"narrow",label:"Narrow",element:l.default.createElement(T,null,l.default.createElement(I,{id:"narrow",itemsExpanded:[1,2,3,4],isNarrow:!0,footerButtons:!0}))}],t.states=[{id:"expanded",label:"Expanded",element:l.default.createElement(I,{id:"expanded",itemsExpanded:[1,2,3,4],footerButtons:!0})},{id:"expanded-single",label:"Expanded - Single Item",element:l.default.createElement(I,{id:"expanded",itemsExpanded:[1],footerButtons:!0})},{id:"error",label:"Error",element:l.default.createElement(I,{id:"error",itemsExpanded:[1,2,3,4],hasError:!0,footerButtons:!0})},{id:"error-single",label:"Error - Single Item",element:l.default.createElement(I,{id:"error",itemsExpanded:[1],hasError:!0,footerButtons:!0})}]},127:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var l=a(0),s=(c(l),a(4)),n=c(s),i=c(a(5)),d=(c(a(10)),c(a(8))),o=a(1),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(126));function c(e){return e&&e.__esModule?e:{default:e}}var m=s.factories.h2,u=s.factories.h3,f=s.factories.h4,p=s.factories.li,h=s.factories.p,E=s.factories.strong,b=s.factories.ul,x=t.getElement=function(){return(0,l.createElement)(n.default,{},(0,l.createElement)("div",{className:"doc lead"},"The activity timeline displays each of the user’s upcoming, current, and past activities."),m({id:"About-Activity-Timeline"},"About Activity Timeline"),h({},"Each Activity timeline item receives its width from the parent list. It can consume the full width of the main page area or be placed in the smaller right sidebar."),u({id:"Accessibility"},"Accessibility"),h({},"Text describing the type of timeline item is placed in a ",(0,l.createElement)("code",{className:"doc"},"span"),". It is the first element in the timeline item and should be hidden with the ",(0,l.createElement)("code",{className:"doc"},"slds-assistive-text")," class. The ",(0,l.createElement)("code",{className:"doc"},"SVG")," image does not need the ",(0,l.createElement)("code",{className:"doc"},"slds-assistive-text")," class."),f({id:"Markup"},"Markup"),h({},E({},"Button:")),b({},p({},(0,l.createElement)("code",{className:"doc"},"aria-controls")," is used to create an association between the button and the details section. If the details section has an ",(0,l.createElement)("code",{className:"doc"},'id="email-content"'),", then the button should have ",(0,l.createElement)("code",{className:"doc"},'aria-controls="email-content"'),"."),p({},"The title of the timeline item can also be used as a button to open the details section. If the details section has an ",(0,l.createElement)("code",{className:"doc"},'id="email-content"'),", then the div with ",(0,l.createElement)("code",{className:"doc"},"slds-timeline__trigger")," should have ",(0,l.createElement)("code",{className:"doc"},'aria-controls="email-content"')," and the click handler."),p({},(0,l.createElement)("code",{className:"doc"},"aria-expanded")," indicates if the details section is open or closed and is read aloud by assitive technology when the button is focused.")),h({},E({},"Section:")),b({},p({},(0,l.createElement)("code",{className:"doc"},"aria-hidden")," indicates if the details section is open or closed, and if set to ",(0,l.createElement)("code",{className:"doc"},"true"),", assistive technology hides the details section.")),f({id:"Keyboard-Interactions"},"Keyboard Interactions"),b({},p({},"The button should behave as a normal button. The user should be able to tab to focus it and press enter/space to activate it.")),m({id:"Base"},"Base"),(0,l.createElement)(i.default,null,r.default),m({id:"States"},"States"),u({id:"Expanding-sections"},"Expanding sections"),(0,l.createElement)(d.default,{type:"a11y",header:"Accessibility Note"},"When the user interacts with the button to open the details section, ",(0,l.createElement)("code",{className:"doc"},"aria-expanded")," on the button should be ",(0,l.createElement)("code",{className:"doc"},"true")," and ",(0,l.createElement)("code",{className:"doc"},"aria-hidden")," on the details section should be ",(0,l.createElement)("code",{className:"doc"},"false"),". When the user interacts with the button to close the details section, ",(0,l.createElement)("code",{className:"doc"},"aria-expanded")," on the button should be ",(0,l.createElement)("code",{className:"doc"},"false")," and ",(0,l.createElement)("code",{className:"doc"},"aria-hidden")," on the details section should be ",(0,l.createElement)("code",{className:"doc"},"true"),"."),f({id:"Single-Item-Expanded"},"Single Item Expanded"),(0,l.createElement)(i.default,null,(0,o.getDisplayElementById)(r.states,"expanded-single")),f({id:"Multiple-Items-Expanded"},"Multiple Items Expanded"),(0,l.createElement)(i.default,null,(0,o.getDisplayElementById)(r.states,"expanded")),u({id:"Error"},"Error"),(0,l.createElement)(i.default,null,(0,o.getDisplayElementById)(r.states,"error-single")),m({id:"Narrow-Region-Example"},"Narrow Region Example"),(0,l.createElement)(i.default,null,(0,o.getDisplayElementById)(r.examples,"narrow")))};t.getContents=function(){return(0,s.createTableOfContents)(x())}},3:function(e,t){e.exports=JSBeautify}});