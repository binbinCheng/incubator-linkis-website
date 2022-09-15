"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[49388],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57923:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),c=["components"],u={title:"MetaData Manager Server \u67b6\u6784",sidebar_position:3},o=void 0,l={unversionedId:"architecture/public-enhancement-services/metadata-manager",id:"architecture/public-enhancement-services/metadata-manager",isDocsHomePage:!1,title:"MetaData Manager Server \u67b6\u6784",description:"\u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/public-enhancement-services/metadata-manager.md",sourceDirName:"architecture/public-enhancement-services",slug:"/architecture/public-enhancement-services/metadata-manager",permalink:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/metadata-manager",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/public-enhancement-services/metadata-manager.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"MetaData Manager Server \u67b6\u6784",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"DataSource Manager Server \u67b6\u6784",permalink:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/datasource-manager"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.3.0/architecture/microservice-governance-services/overview"}},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[]},{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",children:[]},{value:"\u67b6\u6784\u8bf4\u660e",id:"\u67b6\u6784\u8bf4\u660e",children:[{value:"\u6838\u5fc3\u6d41\u7a0b",id:"\u6838\u5fc3\u6d41\u7a0b",children:[]}]}],p={toc:s};function m(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,i.kt)("p",null,"\u65e9\u671f\u7248\u672c\u4e2d\u7684Exchangis0.x\u548cLinkis0.x\u90fd\u6709\u6574\u5408\u6570\u636e\u6e90\u6a21\u5757\uff0c\u4e3a\u590d\u7528\u6570\u636e\u6e90\u7684\u7ba1\u7406\u80fd\u529b\uff0cLinkis\u4ee5linkis-datasource\u4e3a\u84dd\u672c(\u53ef\u4ee5\u53c2\u9605\u76f8\u5173\u7684\u6587\u6863)\u91cd\u6784\u6570\u636e\u6e90\u6a21\u5757\uff0c\u5c06\u6570\u636e\u6e90\u7ba1\u7406\u62c6\u5c01\u6210\u6570\u636e\u6e90\u7ba1\u7406\u670d\u52a1\u4e0e\u5143\u6570\u636e\u67e5\u8be2\u670d\u52a1\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u6d89\u53caMetaData Manager Server\u6570\u636e\u6e90\u7ba1\u7406\u670d\u52a1\uff0c\u63d0\u4f9b\u5982\u4e0b\u529f\u80fd\uff1a"),(0,i.kt)("p",null,"1\uff09\u3001Linkis\u7edf\u4e00\u7ba1\u7406\u670d\u52a1\u542f\u52a8\u4e0e\u90e8\u7f72\uff0c\u4e0d\u589e\u52a0\u8fd0\u7ef4\u6210\u672c\uff0c\u590d\u7528Linkis\u670d\u52a1\u80fd\u529b\uff1b"),(0,i.kt)("p",null,"2\uff09\u3001\u670d\u52a1\u65e0\u72b6\u6001\uff0c\u591a\u5b9e\u4f8b\u90e8\u7f72\uff0c\u505a\u5230\u670d\u52a1\u9ad8\u53ef\u7528\u3002\u672c\u7cfb\u7edf\u5728\u90e8\u7f72\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u8fdb\u884c\u591a\u5b9e\u4f8b\u90e8\u7f72\uff0c\u6bcf\u4e2a\u5b9e\u4f8b\u5bf9\u5916\u72ec\u7acb\u63d0\u4f9b\u670d\u52a1\uff0c\u4e0d\u4f1a\u4e92\u76f8\u5e72\u6270\uff0c\u6240\u6709\u7684\u4fe1\u606f\u90fd\u662f\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u5171\u4eab\u3002"),(0,i.kt)("p",null,"3\uff09\u3001\u63d0\u4f9b\u6570\u636e\u6e90\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u5305\u62ec\u65b0\u5efa\u3001\u67e5\u8be2\u3001\u66f4\u65b0\u3001\u6d4b\u8bd5\u3001\u8fc7\u671f\u7ba1\u7406\u3002"),(0,i.kt)("p",null,"4\uff09\u3001\u591a\u7248\u672c\u6570\u636e\u6e90\u7ba1\u7406\uff0c\u5386\u53f2\u6570\u636e\u6e90\u4f1a\u4fdd\u5b58\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u5e76\u63d0\u4f9b\u6570\u636e\u6e90\u8fc7\u671f\u7ba1\u7406\u3002"),(0,i.kt)("p",null,"5\uff09\u3001Restful\u63a5\u53e3\u63d0\u4f9b\u529f\u80fd\uff0c\u8be6\u7ec6\u5217\u8868\uff1a\u6570\u636e\u5e93\u4fe1\u606f\u67e5\u8be2\u3001\u6570\u636e\u5e93\u8868\u4fe1\u606f\u67e5\u8be2\u3001\u6570\u636e\u5e93\u8868\u53c2\u6570\u4fe1\u606f\u67e5\u8be2\u3001\u6570\u636e\u5206\u533a\u4fe1\u606f\u67e5\u8be2\u3002"),(0,i.kt)("h2",{id:"\u67b6\u6784\u56fe"},"\u67b6\u6784\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BML\u67b6\u6784\u56fe",src:r(52506).Z})),(0,i.kt)("h2",{id:"\u67b6\u6784\u8bf4\u660e"},"\u67b6\u6784\u8bf4\u660e"),(0,i.kt)("p",null,"1\u3001\u670d\u52a1\u767b\u8bb0\u5728Linkis-Eureak-Service\u670d\u52a1\u4e2d\uff0c\u4e0eLinkis\u5176\u4ed6\u5fae\u670d\u52a1\u7edf\u4e00\u7ba1\u7406\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7\u8fde\u63a5Linkis-GateWay-Service\u670d\u52a1\u4e0e\u670d\u52a1\u540d metamanager\u83b7\u53d6\u6570\u636e\u6e90\u7ba1\u7406\u670d\u52a1\u3002"),(0,i.kt)("p",null,"2\u3001\u63a5\u53e3\u5c42\uff0c\u901a\u8fc7Restful\u63a5\u53e3\u5411\u5176\u4ed6\u5e94\u7528\uff0c\u63d0\u4f9b\u4e86\u6570\u636e\u5e93\\\u8868\\\u5206\u533a\u4fe1\u606f\u67e5\u8be2;"),(0,i.kt)("p",null,"3\u3001Service\u5c42\uff0c\u901a\u8fc7\u6570\u636e\u6e90ID\u53f7\u5728\u6570\u636e\u6e90\u7ba1\u7406\u670d\u52a1\u4e2d\u83b7\u53d6\u5230\u6570\u636e\u6e90\u7c7b\u578b\uff0c\u901a\u8fc7\u7c7b\u578b\u83b7\u53d6\u5177\u4f53\u652f\u6301\u7684\u670d\u52a1\uff0c\u652f\u6301\u7684\u670d\u52a1\u4e3amysql\\es\\kafka\\hive;"),(0,i.kt)("h3",{id:"\u6838\u5fc3\u6d41\u7a0b"},"\u6838\u5fc3\u6d41\u7a0b"),(0,i.kt)("p",null,"1\u3001 \u5ba2\u6237\u7aef\u8f93\u5165\u6307\u5b9a\u7684\u6570\u636e\u6e90ID\uff0c\u901a\u8fc7restful\u63a5\u53e3\u83b7\u53d6\u4fe1\u606f\uff0c\u5982\u67e5\u8be2\u6570\u636e\u6e90ID\u4e3a1\u7684\u6570\u636e\u5e93\u5217\u8868\uff0c\uff0c\u5219url\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"http://<meta-server-url>/metadatamanager/dbs/1"),"\uff0c"),(0,i.kt)("p",null,"2\u3001 \u6839\u636e\u6570\u636e\u6e90ID\uff0c\u901a\u8fc7RPC\u8bbf\u95ee\u6570\u636e\u6e90\u670d\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"<data-source-manager>"),"\u83b7\u53d6\u5230\u6570\u636e\u6e90\u7c7b\u578b"),(0,i.kt)("p",null,"3\u3001 \u6839\u636e\u6570\u636e\u6e90\u7c7b\u578b\uff0c\u52a0\u8f7d\u5bf9\u5e94\u7684Service\u670d\u52a1","[hive\\es\\kafka\\mysql]","\uff0c\u6267\u884c\u5bf9\u5e94\u7684\u64cd\u4f5c\uff0c\u7136\u540e\u8fd4\u56de\uff1b"))}m.isMDXComponent=!0},52506:function(e,t,r){t.Z=r.p+"assets/images/meta-server-0230822d3e0ff3bc846635bfe4d62b94.png"}}]);