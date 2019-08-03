var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/files/docs.mdx.js"]=function(e){function t(t){for(var a,n,o=t[0],r=t[1],d=t[2],m=0,u=[];m<o.length;m++)n=o[m],i[n]&&u.push(i[n][0]),i[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(c&&c(t);u.length;)u.shift()();return s.push.apply(s,d||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var l=s[t],a=!0,o=1;o<l.length;o++){var r=l[o];0!==i[r]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=l[0]))}return e}var a={},i={34:0},s=[];function n(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=a,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var c=r;return s.push([202,0]),l()}({0:function(e,t){e.exports=React},201:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(l(0)),i=l(60);t.default=a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,hasTitleCard:!0,symbol:"pdf",title:"Proposal.pdf",hasImage:!0}));t.examples=[{id:"attachment-file-no-image",label:"File with no image",element:a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,hasTitleCard:!0,symbol:"image",title:"Image Title"}))},{id:"attachment-file-no-title",label:"File with no title",element:a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,noCaption:!0,symbol:"pdf",hasImage:!0}))},{id:"attachment-file-with-actions",label:"File with actions",element:a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,hasTitleCard:!0,symbol:"pdf",title:"Proposal.pdf",hasActions:!0,hasImage:!0}))},{id:"attachment-file-with-no-title-actions",label:"File with no title + actions",element:a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,symbol:"pdf",title:"Proposal.pdf",hasActions:!0,iconColor:"white",hasScrim:!0,noCaption:!0,hasImage:!0}))},{id:"attachment-file-external-icon",label:"File with external icon",element:a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,hasTitleCard:!0,symbol:"pdf",title:"Proposal.pdf",isExternalSource:!0}))},{id:"attachment-file-loading-with-title",label:"File in loading state with title",element:a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,hasTitleCard:!0,sprite:"utility",symbol:"image",isLoading:!0}))},{id:"attachment-file-loading-no-title",label:"File in loading state without title",element:a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,isLoading:!0,noCaption:!0}))},{id:"multi-attachments",label:"< 3 file attachments",element:a.default.createElement("ul",{className:"slds-grid slds-grid_pull-padded"},a.default.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3"},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,hasTitleCard:!0,symbol:"pdf",title:"Proposal.pdf",hasImage:!0})),a.default.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3"},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,hasTitleCard:!0,symbol:"pdf",title:"Proposal.pdf"})))},{id:"multi-attachments-overflow",label:"> 3 file attachments",element:a.default.createElement("ul",{className:"slds-grid slds-grid_pull-padded"},a.default.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3"},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,hasTitleCard:!0,symbol:"pdf",title:"Proposal.pdf",hasImage:!0})),a.default.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3  slds-medium-show"},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,hasTitleCard:!0,symbol:"pdf",title:"Proposal.pdf"})),a.default.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3"},a.default.createElement(i.File,{isCard:!0,hasCrop:!0,title:"+22",hasImage:!0,hasOverlay:!0})))},{id:"link-attachment",label:"Link attachment",element:a.default.createElement(i.AttachmentLink,{articleTitle:"Maui By Air The Best Way Around The Island",articleDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."})},{id:"crop-4-by-3",label:"Crop 4 x 3",element:a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,has4x3Crop:!0,hasTitleCard:!0,symbol:"pdf",title:"Proposal.pdf",hasImage:!0}))},{id:"crop-16-by-9",label:"Crop 16 x 9",element:a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,has16x9Crop:!0,hasTitleCard:!0,symbol:"pdf",title:"Proposal.pdf",hasImage:!0}))},{id:"crop-1-by-1",label:"Crop 1 by 1",element:a.default.createElement("div",{style:{width:"20rem"}},a.default.createElement(i.File,{isCard:!0,has1x1Crop:!0,hasTitleCard:!0,symbol:"pdf",title:"Proposal.pdf",hasImage:!0}))}]},202:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=l(0),i=(d(a),l(4)),s=d(i),n=d(l(5)),o=(d(l(17)),d(l(18)),d(l(8)),l(1)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(l(201));function d(e){return e&&e.__esModule?e:{default:e}}var c=i.factories.code,m=i.factories.h2,u=i.factories.h3,f=i.factories.h4,h=i.factories.p,p=i.factories.strong,y=t.getElement=function(){return(0,a.createElement)(s.default,{},(0,a.createElement)("div",{className:"doc lead"},"Files are a representation of content uploaded as an attachment."),m({id:"About-Files"},"About Files"),h({},"A figure component is a self-contained unit of content, such as an image with an optional caption. The figure component should NOT be used with icons or logos. A figure can optionally be cropped to a specific ratio such as 16x9, 4x3 and 1x1 with the use of ",c({},".slds-image__crop")," and passing in a ratio class such as ",c({},".slds-image__crop_16-by-9"),"."),u({id:"Accessibility"},"Accessibility"),h({},"Every ",c({},"<img>")," you add to your site needs to have an ",c({},"alt")," attribute. If the image is informational, set the ",c({},"alt")," equal to a descriptive alternative for that image. If the image is decorative or redundant to adjacent text, set ",c({},'alt=""'),", which conveys to assistive technology users that the image isn’t necessary for understanding the page. Avoid using generic strings like ",p({},"photo"),", ",p({},"image"),", or ",p({},"icon")," as alt values, as they don’t communicate valuable content to the user."),m({id:"Base"},"Base"),(0,a.createElement)(n.default,null,r.default),m({id:"States"},"States"),u({id:"File-with-no-image"},"File with no image"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"attachment-file-no-image")),u({id:"File-with-no-title"},"File with no title"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"attachment-file-no-title")),u({id:"File-with-actions"},"File with actions"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"attachment-file-with-actions")),u({id:"File-with-no-title-+-actions"},"File with no title + actions"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"attachment-file-with-no-title-actions")),u({id:"File-with-external-icon"},"File with external icon"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"attachment-file-external-icon")),u({id:"File-in-loading-state-with-title"},"File in loading state with title"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"attachment-file-loading-with-title")),u({id:"File-in-loading-state-without-title"},"File in loading state without title"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"attachment-file-loading-no-title")),u({id:"3-file-attachments"},"< 3 file attachments"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"multi-attachments")),u({id:"3-file-attachments-2"},"> 3 file attachments"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"multi-attachments-overflow")),m({id:"Modifiers"},"Modifiers"),u({id:"Ratio"},"Ratio"),f({id:".slds-file__crop_4-by-3"},".slds-file__crop_4-by-3"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"crop-4-by-3")),f({id:".slds-file__crop_16-by-9"},".slds-file__crop_16-by-9"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"crop-16-by-9")),f({id:".slds-file__crop_1-by-1"},".slds-file__crop_1-by-1"),(0,a.createElement)(n.default,null,(0,o.getDisplayElementById)(r.examples,"crop-1-by-1")))};t.getContents=function(){return(0,i.createTableOfContents)(y())}},3:function(e,t){e.exports=JSBeautify}});