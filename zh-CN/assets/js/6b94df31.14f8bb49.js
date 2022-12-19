"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[95168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97531:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={title:"Linkis \u652f\u6301\u4ee3\u7406\u7528\u6237\u63d0\u4ea4\u67b6\u6784\u8bbe\u8ba1",sidebar_position:2},o=void 0,c={unversionedId:"architecture/feature/computation-governance-services/proxy-user",id:"architecture/feature/computation-governance-services/proxy-user",isDocsHomePage:!1,title:"Linkis \u652f\u6301\u4ee3\u7406\u7528\u6237\u63d0\u4ea4\u67b6\u6784\u8bbe\u8ba1",description:"1 \u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/feature/computation-governance-services/proxy-user.md",sourceDirName:"architecture/feature/computation-governance-services",slug:"/architecture/feature/computation-governance-services/proxy-user",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/proxy-user",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/feature/computation-governance-services/proxy-user.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Linkis \u652f\u6301\u4ee3\u7406\u7528\u6237\u63d0\u4ea4\u67b6\u6784\u8bbe\u8ba1",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"EngineConnPlugin \u670d\u52a1\u67b6\u6784",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/engine/engine-conn-plugin"},next:{title:"Linkis Client \u67b6\u6784\u8bbe\u8ba1",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/linkis-cli"}},u=[{value:"1 \u80cc\u666f",id:"1-\u80cc\u666f",children:[]},{value:"2 \u57fa\u672c\u6982\u5ff5",id:"2-\u57fa\u672c\u6982\u5ff5",children:[]},{value:"3 \u5b9e\u73b0\u7684\u76ee\u6807",id:"3-\u5b9e\u73b0\u7684\u76ee\u6807",children:[]},{value:"4 \u5b9e\u73b0\u5927\u4f53\u601d\u8def",id:"4-\u5b9e\u73b0\u5927\u4f53\u601d\u8def",children:[]},{value:"5 \u9700\u8981\u8003\u8651&amp;\u6ce8\u610f\u7684\u4e8b\u9879",id:"5-\u9700\u8981\u8003\u8651\u6ce8\u610f\u7684\u4e8b\u9879",children:[]}],l={toc:u};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u80cc\u666f"},"1 \u80cc\u666f"),(0,i.kt)("p",null,"\u76ee\u524dlinkis\u5728\u6267\u884c\u7528\u6237\u63d0\u4ea4\u7684\u4efb\u52a1\u65f6\uff0clinkis\u4e3b\u8981\u8fdb\u7a0b\u670d\u52a1\u4f1a\u901a\u8fc7sudo -u ${submit user} \u5207\u6362\u5230\u5bf9\u5e94\u7528\u6237\u4e0b\uff0c\u7136\u540e\u6267\u884c\u5bf9\u5e94\u7684\u5f15\u64ce\u542f\u52a8\u547d\u4ee4\uff0c\n\u8fd9\u5c31\u9700\u8981\u4e3a\u6bcf\u4e2a${submit user} \u63d0\u524d\u521b\u5efa\u5bf9\u5e94\u7684\u7cfb\u7edf\u7528\u6237\uff0c\u5e76\u4e14\u914d\u7f6e\u597d\u76f8\u5173\u7684\u73af\u5883\u53d8\u91cf\u3002\n\u5bf9\u4e8e\u65b0\u7528\u6237\uff0c\u9700\u8981\u4e00\u7cfb\u5217\u7684\u73af\u5883\u7684\u521d\u59cb\u5316\u51c6\u5907\u5de5\u4f5c\uff0c\u5982\u679c\u9891\u7e41\u7684\u7528\u6237\u53d8\u5316\uff0c\u4f1a\u589e\u5927\u8fd0\u7ef4\u6210\u672c\uff0c\u800c\u4e14\u7528\u6237\u8fc7\u591a\uff0c\u6ca1\u6cd5\u9488\u5bf9\u5355\u4e2a\u7528\u6237\u914d\u7f6e\u8d44\u6e90\uff0c\u8d44\u6e90\u4e4b\u95f4\u65e0\u6cd5\u5f88\u597d\u7684\u7ba1\u63a7\u3002\u5982\u679c\u80fd\u591f\u5b9e\u73b0A\u4ee3\u7406\u7ed9\u6307\u5b9a\u7684\u4ee3\u7406\u7528\u6237\u6267\u884c\uff0c\u53ef\u4ee5\u5c06\u6267\u884c\u5165\u53e3\u7edf\u4e00\u6536\u655b\uff0c\u89e3\u51b3\u9700\u8981\u521d\u59cb\u5316\u73af\u5883\u7684\u95ee\u9898\u3002"),(0,i.kt)("h2",{id:"2-\u57fa\u672c\u6982\u5ff5"},"2 \u57fa\u672c\u6982\u5ff5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u767b\u9646\u7528\u6237\uff1a\u901a\u8fc7\u7528\u6237\u540d\u5bc6\u7801\u76f4\u63a5\u767b\u9646\u7cfb\u7edf\u7684\u7528\u6237"),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u7528\u6237\uff1a\u4f5c\u4e3a\u767b\u9646\u7528\u6237\u5b9e\u9645\u6267\u884c\u64cd\u4f5c\u7684\u7528\u6237\u79f0\u4e4b\u4e3a\u4ee3\u7406\u7528\u6237\uff0c\u4ee3\u7406\u767b\u9646\u7528\u6237\u7684\u76f8\u5173\u64cd\u4f5c")),(0,i.kt)("h2",{id:"3-\u5b9e\u73b0\u7684\u76ee\u6807"},"3 \u5b9e\u73b0\u7684\u76ee\u6807"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u767b\u9646\u7528\u6237A\u53ef\u4ee5\u8fdb\u884c\u4ee3\u7406\u7528\u6237\u7684\u9009\u62e9\uff0c\u51b3\u5b9a\u4ee3\u7406\u7ed9\u54ea\u4e2a\u4ee3\u7406\u7528\u6237"),(0,i.kt)("li",{parentName:"ul"},"\u767b\u9646\u7528\u6237A\u53ef\u4ee5\u5c06\u4efb\u52a1\u4ee3\u7406\u7ed9\u4ee3\u7406\u7528\u6237B\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u767b\u9646\u7528\u6237A\u4ee3\u7406\u5230\u4ee3\u7406\u7528\u6237B\u65f6\uff0c\u53ef\u4ee5\u67e5\u770bB\u76f8\u5173\u7684\u6267\u884c\u8bb0\u5f55\uff0c\u4efb\u52a1\u7ed3\u679c\u7b49\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u4ee3\u7406\u7528\u6237\u540c\u65f6\u53ef\u4ee5\u4ee3\u7406\u591a\u4e2a\u767b\u9646\u7528\u6237\uff0c\u4f46\u662f\u4e00\u4e2a\u767b\u9646\u7528\u6237\u540c\u4e00\u65f6\u523b\u53ea\u80fd\u5173\u8054\u67d0\u4e00\u4e2a\u4ee3\u7406\u7528\u6237")),(0,i.kt)("h2",{id:"4-\u5b9e\u73b0\u5927\u4f53\u601d\u8def"},"4 \u5b9e\u73b0\u5927\u4f53\u601d\u8def"),(0,i.kt)("p",null,"\u4fee\u6539\u73b0\u6709\u63a5\u53e3cookie\u5904\u7406\uff0c\u9700\u8981\u80fd\u5728cookie\u4e2d\u89e3\u6790\u51fa\u767b\u5f55\u7528\u6237\u548c\u4ee3\u7406\u7528\u6237"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\u4ee3\u7406\u7528\u6237\u7684cookie\u7684key\u4e3a\uff1alinkis_user_session_proxy_ticket_id_v1\n\u767b\u5f55\u7528\u6237\u7684cookie:\xa0linkis_user_session_ticket_id_v1\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"linkis\u7684\u76f8\u5173\u63a5\u53e3\u9700\u8981\xa0\u5728\u539f\u6765\u83b7\u53d6UserName\u7684\u57fa\u7840\u4e0a\uff0c\u8981\u80fd\u8bc6\u522b\u51fa\u4ee3\u7406\u7528\u6237\u4fe1\u606f\uff0c\u4f7f\u7528\u4ee3\u7406\u7528\u6237\u8fdb\u884c\u5404\u9879\u64cd\u4f5c\u3002\u5e76\u8bb0\u5f55\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u5305\u542b\u7528\u6237\u7684\u4efb\u52a1\u6267\u884c\u64cd\u4f5c\uff0c\u4e0b\u8f7d\u64cd\u4f5c"),(0,i.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c\u7684\u65f6\u5019\uff0centrance\u5165\u53e3\u670d\u52a1\u9700\u8981\u4fee\u6539\u6267\u884c\u7684\u7528\u6237\u4e3a\u4ee3\u7406\u7528\u6237")),(0,i.kt)("h2",{id:"5-\u9700\u8981\u8003\u8651\u6ce8\u610f\u7684\u4e8b\u9879"},"5 \u9700\u8981\u8003\u8651&\u6ce8\u610f\u7684\u4e8b\u9879"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u5206\u4e3a\u4ee3\u7406\u7528\u6237\u548c\u975e\u4ee3\u7406\u7528\u6237\uff0c\u4ee3\u7406\u7c7b\u578b\u7684\u7528\u6237\u4e0d\u80fd\u8fdb\u884c\u518d\u6b21\u4ee3\u7406\u5230\u5176\u4ed6\u7528\u6237\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u63a7\u5236\u767b\u9646\u7528\u6237\u4e0e\u53ef\u4ee3\u7406\u7684\u7cfb\u7edf\u7528\u6237\u5217\u8868\uff0c\u7981\u6b62\u51fa\u73b0\u4efb\u610f\u4ee3\u7406\u7684\u60c5\u51b5\uff0c\u907f\u514d\u6743\u9650\u4e0d\u53ef\u63a7\u3002\u6700\u597d\u652f\u6301\u6570\u636e\u5e93\u8868\u6765\u914d\u7f6e\uff0c\u5e76\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u751f\u6548\uff0c\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u5355\u72ec\u8bb0\u5f55\u65e5\u5fd7\u6587\u4ef6\u5305\u542b\u4ee3\u7406\u7528\u6237\u7684\u64cd\u4f5c\uff0c\u5982\u4ee3\u7406\u6267\u884c\u3001\u51fd\u6570\u66f4\u65b0\u7b49PublicService\u7684\u4ee3\u7406\u7528\u6237\u64cd\u4f5c\u5168\u90e8\u8bb0\u5f55\u5230\u65e5\u5fd7\u4e2d\uff0c\u65b9\u4fbf\u5ba1\u8ba1")))}s.isMDXComponent=!0}}]);