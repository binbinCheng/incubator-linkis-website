"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[67224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,d=m["".concat(c,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35267:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Linkis Client \u67b6\u6784\u8bbe\u8ba1",sidebar_position:4},l=void 0,o={unversionedId:"architecture/feature/computation-governance-services/linkis-cli",id:"architecture/feature/computation-governance-services/linkis-cli",isDocsHomePage:!1,title:"Linkis Client \u67b6\u6784\u8bbe\u8ba1",description:"\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u8f7b\u91cf\u7ea7\u5ba2\u6237\u7aef\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/feature/computation-governance-services/linkis-cli.md",sourceDirName:"architecture/feature/computation-governance-services",slug:"/architecture/feature/computation-governance-services/linkis-cli",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/linkis-cli",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/feature/computation-governance-services/linkis-cli.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Linkis Client \u67b6\u6784\u8bbe\u8ba1",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Linkis \u652f\u6301\u4ee3\u7406\u7528\u6237\u63d0\u4ea4\u67b6\u6784\u8bbe\u8ba1",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/proxy-user"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.3.1/architecture/feature/public-enhancement-services/overview"}},c=[],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u8f7b\u91cf\u7ea7\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("h4",{id:"linkis-client\u67b6\u6784\u56fe"},"Linkis-Client\u67b6\u6784\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(2996).Z})),(0,a.kt)("h4",{id:"\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"},"\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"),(0,a.kt)("h5",{id:"linkis-computation-client"},"Linkis-Computation-Client"),(0,a.kt)("p",null,"\u4ee5SDK\u7684\u5f62\u5f0f\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u63a5\u53e3\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u8bf7\u6c42\u7684\u5c5e\u6027\uff0c\u5305\u542b\u7684\u65b9\u6cd5\u548c\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u8fd4\u56de\u7ed3\u679c\u7684\u5c5e\u6027\uff0c\u5305\u542b\u7684\u65b9\u6cd5\u548c\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UJESClient"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u8bf7\u6c42\u7684\u63d0\u4ea4\uff0c\u6267\u884c\uff0c\u72b6\u6001\u3001\u7ed3\u679c\u548c\u76f8\u5173\u53c2\u6570\u7684\u83b7\u53d6")))),(0,a.kt)("h5",{id:"linkis-cli"},"Linkis-Cli"),(0,a.kt)("p",null,"\u4ee5shell\u547d\u4ee4\u7aef\u7684\u5f62\u5f0f\u4e3a\u7528\u6237\u63d0\u4f9b\u5411Linkis\u63d0\u4ea4\u6267\u884c\u4efb\u52a1\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Common"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u6307\u4ee4\u6a21\u677f\u7236\u7c7b\u3001\u6307\u4ee4\u89e3\u6790\u5b9e\u4f53\u7c7b\u3001\u4efb\u52a1\u63d0\u4ea4\u6267\u884c\u5404\u73af\u8282\u7684\u7236\u7c7b\u548c\u63a5\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Core"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u89e3\u6790\u8f93\u5165\u3001\u4efb\u52a1\u6267\u884c\u548c\u5b9a\u4e49\u8f93\u51fa\u65b9\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528linkis-computation-client\u6267\u884c\u4efb\u52a1\uff0c\u5e76\u5b9e\u65f6\u62c9\u53d6\u65e5\u5fd7\u548c\u6700\u7ec8\u7ed3\u679c")))))}p.isMDXComponent=!0},2996:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-client-01-741a1ba0a041967a2b2b33bbd11baa75.png"}}]);