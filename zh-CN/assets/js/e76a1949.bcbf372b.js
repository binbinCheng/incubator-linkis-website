"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9935],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||c;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22548:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(87462),i=r(63366),c=(r(67294),r(3905)),o=["components"],a={title:"Message Scheduler \u6a21\u5757",sidebar_position:1},u=void 0,l={unversionedId:"architecture/commons/message_scheduler",id:"architecture/commons/message_scheduler",isDocsHomePage:!1,title:"Message Scheduler \u6a21\u5757",description:"1. \u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/commons/message_scheduler.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/message_scheduler",permalink:"/zh-CN/docs/1.1.2/architecture/commons/message_scheduler",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/commons/message_scheduler.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Message Scheduler \u6a21\u5757",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u7406\u7528\u6237\u6a21\u5f0f",permalink:"/zh-CN/docs/1.1.2/architecture/proxy_user"},next:{title:"RPC \u6a21\u5757",permalink:"/zh-CN/docs/1.1.2/architecture/commons/rpc"}},s=[{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",children:[]},{value:"2. \u67b6\u6784\u8bf4\u660e",id:"2-\u67b6\u6784\u8bf4\u660e",children:[]},{value:"2.1. \u67b6\u6784\u8bbe\u8ba1\u56fe",id:"21-\u67b6\u6784\u8bbe\u8ba1\u56fe",children:[]},{value:"2.2. \u6a21\u5757\u8bf4\u660e",id:"22-\u6a21\u5757\u8bf4\u660e",children:[]}],p={toc:s};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,c.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis-RPC\u53ef\u4ee5\u5b9e\u73b0\u5fae\u670d\u52a1\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u4e3a\u4e86\u7b80\u5316RPC\u7684\u4f7f\u7528\u65b9\u5f0f\uff0cLinkis\u63d0\u4f9bMessage-Scheduler\u6a21\u5757\uff0c\u901a\u8fc7\u5982@Receiver\u6ce8\u89e3\u7684\u65b9\u5f0f\u7684\u89e3\u6790\u8bc6\u522b\u4e0e\u8c03\u7528\uff0c\u540c\u65f6\uff0c\u4e5f\u7edf\u4e00\u4e86RPC\u548cRestful\u63a5\u53e3\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u5177\u6709\u66f4\u597d\u7684\u53ef\u62d3\u5c55\u6027\u3002"),(0,c.kt)("h2",{id:"2-\u67b6\u6784\u8bf4\u660e"},"2. \u67b6\u6784\u8bf4\u660e"),(0,c.kt)("h2",{id:"21-\u67b6\u6784\u8bbe\u8ba1\u56fe"},"2.1. \u67b6\u6784\u8bbe\u8ba1\u56fe"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"\u6a21\u5757\u8bbe\u8ba1\u56fe",src:r(33756).Z})),(0,c.kt)("h2",{id:"22-\u6a21\u5757\u8bf4\u660e"},"2.2. \u6a21\u5757\u8bf4\u660e"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"ServiceParser\uff1a\u89e3\u6790Service\u6a21\u5757\u7684(Object)\u5bf9\u8c61\uff0c\u540c\u65f6\u628a@Receiver\u6ce8\u89e3\u7684\u65b9\u6cd5\u5c01\u88c5\u5230ServiceMethod\u5bf9\u8c61\u4e2d\u3002"),(0,c.kt)("li",{parentName:"ul"},"ServiceRegistry\uff1a\u6ce8\u518c\u5bf9\u5e94\u7684Service\u6a21\u5757\uff0c\u5c06Service\u89e3\u6790\u540e\u7684ServiceMethod\u5b58\u50a8\u5728Map\u5bb9\u5668\u4e2d\u3002"),(0,c.kt)("li",{parentName:"ul"},"ImplicitParser\uff1a\u5c06Implicit\u6a21\u5757\u7684\u5bf9\u8c61\u8fdb\u884c\u89e3\u6790\uff0c\u4f7f\u7528@Implicit\u6807\u6ce8\u7684\u65b9\u6cd5\u4f1a\u88ab\u5c01\u88c5\u5230ImplicitMethod\u5bf9\u8c61\u4e2d\u3002"),(0,c.kt)("li",{parentName:"ul"},"ImplicitRegistry\uff1a\u6ce8\u518c\u5bf9\u5e94\u7684Implicit\u6a21\u5757\uff0c\u5c06\u89e3\u6790\u540e\u7684ImplicitMethod\u5b58\u50a8\u5728\u4e00\u4e2aMap\u5bb9\u5668\u4e2d\u3002"),(0,c.kt)("li",{parentName:"ul"},"Converter\uff1a\u542f\u52a8\u626b\u63cfRequestMethod\u7684\u975e\u63a5\u53e3\u975e\u62bd\u8c61\u7684\u5b50\u7c7b\uff0c\u5e76\u5b58\u50a8\u5728Map\u4e2d\uff0c\u89e3\u6790Restful\u5e76\u5339\u914d\u76f8\u5173\u7684RequestProtocol\u3002"),(0,c.kt)("li",{parentName:"ul"},"Publisher\uff1a\u5b9e\u73b0\u53d1\u5e03\u8c03\u5ea6\u529f\u80fd\uff0c\u5728Registry\u4e2d\u627e\u51fa\u5339\u914dRequestProtocol\u7684ServiceMethod\uff0c\u5e76\u5c01\u88c5\u4e3aJob\u8fdb\u884c\u63d0\u4ea4\u8c03\u5ea6\u3002"),(0,c.kt)("li",{parentName:"ul"},"Scheduler\uff1a\u8c03\u5ea6\u5b9e\u73b0\uff0c\u4f7f\u7528Linkis-Sceduler\u6267\u884cJob\uff0c\u8fd4\u56deMessageJob\u5bf9\u8c61\u3002"),(0,c.kt)("li",{parentName:"ul"},"TxManager\uff1a\u5b8c\u6210\u4e8b\u52a1\u7ba1\u7406\uff0c\u5bf9Job\u6267\u884c\u8fdb\u884c\u4e8b\u52a1\u7ba1\u7406\uff0c\u5728Job\u6267\u884c\u7ed3\u675f\u540e\u5224\u65ad\u662f\u5426\u8fdb\u884cCommit\u6216\u8005Rollback\u3002")))}m.isMDXComponent=!0},33756:function(e,t,r){t.Z=r.p+"assets/images/linkis-message-scheduler-f135fb5503becb15e197bf0a2d422bac.png"}}]);