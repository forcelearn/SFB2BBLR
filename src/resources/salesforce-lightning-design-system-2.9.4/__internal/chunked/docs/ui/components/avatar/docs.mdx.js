var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/avatar/docs.mdx.js"]=function(e){function a(a){for(var l,i,s=a[0],o=a[1],c=a[2],u=0,f=[];u<s.length;u++)i=s[u],n[i]&&f.push(n[i][0]),n[i]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(d&&d(a);f.length;)f.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],l=!0,s=1;s<t.length;s++){var o=t[s];0!==n[o]&&(l=!1)}l&&(r.splice(a--,1),e=i(i.s=t[0]))}return e}var l={},n={50:0},r=[];function i(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=l,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:t})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var d=o;return r.push([304,0]),t()}({0:function(e,a){e.exports=React},3:function(e,a){e.exports=JSBeautify},303:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.examples=void 0;var l=function(e){return e&&e.__esModule?e:{default:e}}(t(0)),n=t(22),r=t(50);a.default=l.default.createElement(n.Avatar,null,l.default.createElement(r.AvatarInitials,{iconClassName:"slds-icon-standard-account",title:"company name",initials:"Ac"}));a.examples=[{id:"linked-avatar-initials",label:"Wrapped in a link",element:l.default.createElement("a",{href:"javascript:void(0);"},l.default.createElement(n.Avatar,null,l.default.createElement(r.AvatarInitials,{iconClassName:"slds-icon-standard-account",title:"company name",initials:"Ac"})))}]},304:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getContents=a.getElement=void 0;var l=t(0),n=(u(l),t(4)),r=u(n),i=u(t(5)),s=t(1),o=d(t(22)),c=d(t(303));function d(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a.default=e,a}function u(e){return e&&e.__esModule?e:{default:e}}var f=n.factories.code,m=n.factories.h2,p=n.factories.h3,y=n.factories.h4,v=n.factories.p,g=a.getElement=function(){return(0,l.createElement)(r.default,{},(0,l.createElement)("div",{className:"doc lead"},"An avatar component represents an object or entity"),m({id:"About-Avatar"},"About Avatar"),v({},"An avatar can be circular or a rounded rectangle, depending on usage. The default is a rounded rectangle and requires ",f({},".slds-avatar")," as the base class."),m({id:"Base"},"Base"),(0,l.createElement)(i.default,null,o.default),p({id:"Examples"},"Examples"),y({id:"Profile-Icon"},"Profile Icon"),(0,l.createElement)(i.default,null,(0,s.getDisplayElementById)(o.examples,"profile-icon")),y({id:"Group-Icon"},"Group Icon"),(0,l.createElement)(i.default,null,(0,s.getDisplayElementById)(o.examples,"group-icon")),y({id:"Fallback-User-Icon"},"Fallback User Icon"),(0,l.createElement)(i.default,null,(0,s.getDisplayElementById)(o.examples,"fallback-user-icon")),y({id:"Fallback-Entity-Icon"},"Fallback Entity Icon"),(0,l.createElement)(i.default,null,(0,s.getDisplayElementById)(o.examples,"fallback-entity-icon")),y({id:"Fallback-User-Initials"},"Fallback User Initials"),(0,l.createElement)(i.default,null,(0,s.getDisplayElementById)(o.examples,"fallback-user-initials")),y({id:"Fallback-Entity-Initials"},"Fallback Entity Initials"),(0,l.createElement)(i.default,null,(0,s.getDisplayElementById)(o.examples,"fallback-entity-initials")),y({id:"Fallback-User-Inverse"},"Fallback User Inverse"),(0,l.createElement)(i.default,null,(0,s.getDisplayElementById)(o.examples,"fallback-user-initials-inverse")),y({id:"Linked-Avatar"},"Linked Avatar"),(0,l.createElement)(i.default,null,(0,s.getDisplayElementById)(o.examples,"linked-avatar")),m({id:"Initials"},"Initials"),v({},"If an image is unavailable, up to two letters can be used instead. If the record name contains two words, like first and last name, use the first capitalized letter of each. For records that only have a single word name, use the first two letters of that word using one capital and one lower case letter. If either an image or initials are unavailable, use the object icon as a fallback."),(0,l.createElement)(i.default,null,c.default),p({id:"Examples-2"},"Examples"),y({id:"Linked-Avatar-2"},"Linked Avatar"),(0,l.createElement)(i.default,null,(0,s.getDisplayElementById)(c.examples,"linked-avatar-initials")),m({id:"Layout"},"Layout"),p({id:"Circle"},"Circle"),v({},"Use a circle for all people-oriented objects that could potentially render as avatars. For a fully round avatar, add the ",f({},".slds-avatar_circle")," class. Four additional classes are available for sizing."),(0,l.createElement)(i.default,null,(0,s.getDisplayElementById)(o.examples,"circle")),m({id:"Sizes"},"Sizes"),p({id:"X-Small"},"X-Small"),(0,l.createElement)(i.default,{toggleCode:!1},(0,s.getDisplayElementById)(o.examples,"x-small-image")),p({id:"Small"},"Small"),(0,l.createElement)(i.default,{toggleCode:!1},(0,s.getDisplayElementById)(o.examples,"small-image")),p({id:"Medium"},"Medium"),(0,l.createElement)(i.default,{toggleCode:!1},(0,s.getDisplayElementById)(o.examples,"medium-image")),p({id:"Large"},"Large"),(0,l.createElement)(i.default,{toggleCode:!1},(0,s.getDisplayElementById)(o.examples,"large-image")))};a.getContents=function(){return(0,n.createTableOfContents)(g())}}});