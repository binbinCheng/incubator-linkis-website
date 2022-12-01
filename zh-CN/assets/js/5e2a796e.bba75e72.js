"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77044:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const c={title:"RPC \u6a21\u5757",sidebar_position:2},o=void 0,a={unversionedId:"architecture/commons/rpc",id:"version-1.0.3/architecture/commons/rpc",isDocsHomePage:!1,title:"RPC \u6a21\u5757",description:"1. \u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/architecture/commons/rpc.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/rpc",permalink:"/zh-CN/docs/1.0.3/architecture/commons/rpc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/architecture/commons/rpc.md",tags:[],version:"1.0.3",sidebarPosition:2,frontMatter:{title:"RPC \u6a21\u5757",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Message Scheduler \u6a21\u5757",permalink:"/zh-CN/docs/1.0.3/architecture/commons/message-scheduler"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.3/architecture/computation-governance-services/overview"}},l=[{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",children:[]},{value:"2. \u67b6\u6784\u8bf4\u660e",id:"2-\u67b6\u6784\u8bf4\u660e",children:[{value:"2.1 \u67b6\u6784\u8bbe\u8ba1\u56fe",id:"21-\u67b6\u6784\u8bbe\u8ba1\u56fe",children:[]},{value:"2.2 \u6a21\u5757\u8bf4\u660e",id:"22-\u6a21\u5757\u8bf4\u660e",children:[]}]}],u={toc:l};function s(e){let{components:t,...c}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.kt)("p",null,"\u57fa\u4e8eFeign\u7684\u5fae\u670d\u52a1\u4e4b\u95f4HTTP\u63a5\u53e3\u7684\u8c03\u7528\uff0c\u53ea\u80fd\u6ee1\u8db3\u7b80\u5355\u7684A\u5fae\u670d\u52a1\u5b9e\u4f8b\u6839\u636e\u7b80\u5355\u7684\u89c4\u5219\u968f\u673a\u9009\u62e9B\u5fae\u670d\u52a1\u4e4b\u4e2d\u7684\u67d0\u4e2a\u670d\u52a1\u5b9e\u4f8b\uff0c\u800c\u8fd9\u4e2aB\u5fae\u670d\u52a1\u5b9e\u4f8b\u5982\u679c\u60f3\u5f02\u6b65\u56de\u4f20\u4fe1\u606f\u7ed9\u8c03\u7528\u65b9\uff0c\u662f\u6839\u672c\u65e0\u6cd5\u5b9e\u73b0\u7684\u3002\n\u540c\u65f6\uff0c\u7531\u4e8eFeign\u53ea\u652f\u6301\u7b80\u5355\u7684\u670d\u52a1\u9009\u53d6\u89c4\u5219\uff0c\u65e0\u6cd5\u505a\u5230\u5c06\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u6307\u5b9a\u7684\u5fae\u670d\u52a1\u5b9e\u4f8b\uff0c\u65e0\u6cd5\u505a\u5230\u5c06\u4e00\u4e2a\u8bf7\u6c42\u5e7f\u64ad\u7ed9\u63a5\u6536\u65b9\u5fae\u670d\u52a1\u7684\u6240\u6709\u5b9e\u4f8b\u3002"),(0,i.kt)("h2",{id:"2-\u67b6\u6784\u8bf4\u660e"},"2. \u67b6\u6784\u8bf4\u660e"),(0,i.kt)("h3",{id:"21-\u67b6\u6784\u8bbe\u8ba1\u56fe"},"2.1 \u67b6\u6784\u8bbe\u8ba1\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Linkis RPC\u67b6\u6784\u56fe",src:r(85205).Z})),(0,i.kt)("h3",{id:"22-\u6a21\u5757\u8bf4\u660e"},"2.2 \u6a21\u5757\u8bf4\u660e"),(0,i.kt)("p",null,"\u4e3b\u8981\u6a21\u5757\u7684\u529f\u80fd\u4ecb\u7ecd\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eureka\uff1a\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\uff0c\u7528\u6237\u7ba1\u7406\u670d\u52a1\uff0c\u670d\u52a1\u53d1\u73b0\u3002"),(0,i.kt)("li",{parentName:"ul"},"Sender\u53d1\u9001\u5668\uff1a\u670d\u52a1\u8bf7\u6c42\u63a5\u53e3\uff0c\u53d1\u9001\u7aef\u4f7f\u7528Sender\u5411\u63a5\u6536\u7aef\u8bf7\u6c42\u670d\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},"Receiver\u63a5\u6536\u5668\uff1a\u670d\u52a1\u8bf7\u6c42\u63a5\u6536\u76f8\u5e94\u63a5\u53e3\uff0c\u63a5\u6536\u7aef\u901a\u8fc7\u8be5\u63a5\u53e3\u54cd\u5e94\u670d\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},"Interceptor\u62e6\u622a\u5668\uff1aSender\u53d1\u9001\u5668\u4f1a\u5c06\u4f7f\u7528\u8005\u7684\u8bf7\u6c42\u4f20\u9012\u7ed9\u62e6\u622a\u5668\u3002\u62e6\u622a\u5668\u62e6\u622a\u8bf7\u6c42\uff0c\u5bf9\u8bf7\u6c42\u505a\u989d\u5916\u7684\u529f\u80fd\u6027\u5904\u7406\uff0c\u5206\u522b\u662f\u5e7f\u64ad\u62e6\u622a\u5668\u7528\u4e8e\u5bf9\u8bf7\u6c42\u5e7f\u64ad\u64cd\u4f5c\u3001\u91cd\u8bd5\u62e6\u622a\u5668\u7528\u4e8e\u5bf9\u5931\u8d25\u8bf7\u6c42\u91cd\u8bd5\u5904\u7406\u3001\u7f13\u5b58\u62e6\u622a\u5668\u7528\u4e8e\u7b80\u5355\u4e0d\u53d8\u7684\u8bf7\u6c42\u8bfb\u53d6\u7f13\u5b58\u5904\u7406\u3001\u548c\u63d0\u4f9b\u9ed8\u8ba4\u5b9e\u73b0\u7684\u9ed8\u8ba4\u62e6\u622a\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},"Decoder\uff0cEncoder\uff1a\u7528\u4e8e\u8bf7\u6c42\u7684\u7f16\u7801\u548c\u89e3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"Feign\uff1a\u662f\u4e00\u4e2ahttp\u8bf7\u6c42\u8c03\u7528\u7684\u8f7b\u91cf\u7ea7\u6846\u67b6\uff0c\u58f0\u660e\u5f0fWebService\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u7528\u4e8eLinkis-RPC\u5e95\u5c42\u901a\u4fe1\u3002"),(0,i.kt)("li",{parentName:"ul"},"Listener\uff1a\u76d1\u542c\u6a21\u5757\uff0c\u4e3b\u8981\u7528\u4e8e\u76d1\u542c\u5e7f\u64ad\u8bf7\u6c42\u3002")))}s.isMDXComponent=!0},85205:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/linkis-rpc-6f940d04ce7c039d0e8ca787d3bed98c.png"}}]);