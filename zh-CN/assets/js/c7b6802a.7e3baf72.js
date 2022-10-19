"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[18716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),k=i,v=h["".concat(o,".").concat(k)]||h[k]||u[k]||c;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},10451:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var r=n(87462),i=(n(67294),n(3905));const c={title:"\u603b\u89c8",sidebar_position:0},a=void 0,l={unversionedId:"architecture/public-enhancement-services/context-service/overview",id:"architecture/public-enhancement-services/context-service/overview",isDocsHomePage:!1,title:"\u603b\u89c8",description:"\u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/public-enhancement-services/context-service/overview.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/overview",permalink:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/public-enhancement-services/context-service/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u603b\u89c8",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"BML \u5f15\u64ce\u7269\u6599\u7ba1\u7406\u529f\u80fd\u5256\u6790",permalink:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/bml/engine-bml-dissect"},next:{title:"CS \u67b6\u6784",permalink:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/context-service"}},o=[{value:"<strong>\u80cc\u666f</strong>",id:"\u80cc\u666f",children:[{value:"<strong>\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587Context\uff1f</strong>",id:"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587context",children:[]},{value:"<strong>\u4e3a\u4ec0\u4e48\u9700\u8981CS\uff08Context Service\uff09\uff1f</strong>",id:"\u4e3a\u4ec0\u4e48\u9700\u8981cscontext-service",children:[]}]},{value:"<strong>\u4ea7\u54c1\u8303\u56f4</strong>",id:"\u4ea7\u54c1\u8303\u56f4",children:[{value:"\u5143\u6570\u636e\u4e0a\u4e0b\u6587",id:"\u5143\u6570\u636e\u4e0a\u4e0b\u6587",children:[]},{value:"\u6570\u636e\u4e0a\u4e0b\u6587",id:"\u6570\u636e\u4e0a\u4e0b\u6587",children:[]},{value:"\u8d44\u6e90\u4e0a\u4e0b\u6587",id:"\u8d44\u6e90\u4e0a\u4e0b\u6587",children:[]},{value:"\u73af\u5883\u4e0a\u4e0b\u6587",id:"\u73af\u5883\u4e0a\u4e0b\u6587",children:[]},{value:"\u5bf9\u8c61\u4e0a\u4e0b\u6587",id:"\u5bf9\u8c61\u4e0a\u4e0b\u6587",children:[]}]},{value:"<strong>CS\u67b6\u6784\u56fe</strong>",id:"cs\u67b6\u6784\u56fe",children:[]},{value:"<strong>\u67b6\u6784\u8bf4\u660e\uff1a</strong>",id:"\u67b6\u6784\u8bf4\u660e",children:[{value:"1.  Client",id:"1--client",children:[]},{value:"2.  Service\u6a21\u5757",id:"2--service\u6a21\u5757",children:[]},{value:"3.  ContextSearch",id:"3--contextsearch",children:[]},{value:"4.  Listener",id:"4--listener",children:[]},{value:"5.  ContextCache",id:"5--contextcache",children:[]},{value:"6.  HighAvailable",id:"6--highavailable",children:[]},{value:"7.  Persistence",id:"7--persistence",children:[]}]}],s={toc:o};function p(e){let{components:t,...c}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u80cc\u666f"},(0,i.kt)("strong",{parentName:"h2"},"\u80cc\u666f")),(0,i.kt)("h3",{id:"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587context"},(0,i.kt)("strong",{parentName:"h3"},"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587Context\uff1f")),(0,i.kt)("p",null,"\u4fdd\u6301\u67d0\u79cd\u64cd\u4f5c\u7ee7\u7eed\u8fdb\u884c\u7684\u6240\u6709\u5fc5\u9700\u4fe1\u606f\u3002\u5982\uff1a\u540c\u65f6\u770b\u4e09\u672c\u4e66\uff0c\u6bcf\u672c\u4e66\u5df2\u7ffb\u770b\u7684\u9875\u7801\u5c31\u662f\u7ee7\u7eed\u770b\u8fd9\u672c\u4e66\u7684\u4e0a\u4e0b\u6587\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981cscontext-service"},(0,i.kt)("strong",{parentName:"h3"},"\u4e3a\u4ec0\u4e48\u9700\u8981CS\uff08Context Service\uff09\uff1f")),(0,i.kt)("p",null,"CS\uff0c\u7528\u4e8e\u89e3\u51b3\u4e00\u4e2a\u6570\u636e\u5e94\u7528\u5f00\u53d1\u6d41\u7a0b\uff0c\u8de8\u591a\u4e2a\u7cfb\u7edf\u95f4\u7684\u6570\u636e\u548c\u4fe1\u606f\u5171\u4eab\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0cB\u7cfb\u7edf\u9700\u8981\u4f7f\u7528A\u7cfb\u7edf\u4ea7\u751f\u7684\u4e00\u4efd\u6570\u636e\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"B\u7cfb\u7edf\u8c03\u7528A\u7cfb\u7edf\u5f00\u53d1\u7684\u6570\u636e\u8bbf\u95ee\u63a5\u53e3\uff1b")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"B\u7cfb\u7edf\u8bfb\u53d6A\u7cfb\u7edf\u5199\u5165\u67d0\u4e2a\u5171\u4eab\u5b58\u50a8\u7684\u6570\u636e\u3002"))),(0,i.kt)("p",null,"\u6709\u4e86CS\u4e4b\u540e\uff0cA\u548cB\u7cfb\u7edf\u53ea\u9700\u8981\u4e0eCS\u4ea4\u4e92\uff0c\u5c06\u9700\u8981\u5171\u4eab\u7684\u6570\u636e\u548c\u4fe1\u606f\u5199\u5165\u5230CS\uff0c\u9700\u8981\u8bfb\u53d6\u7684\u6570\u636e\u548c\u4fe1\u606f\u4eceCS\u4e2d\u8bfb\u51fa\u5373\u53ef\uff0c\u65e0\u9700\u5916\u90e8\u7cfb\u7edf\u4e24\u4e24\u5f00\u53d1\u9002\u914d\uff0c\u6781\u5927\u964d\u4f4e\u4e86\u7cfb\u7edf\u95f4\u4fe1\u606f\u5171\u4eab\u7684\u8c03\u7528\u590d\u6742\u5ea6\u548c\u8026\u5408\u5ea6\uff0c\u4f7f\u5404\u7cfb\u7edf\u7684\u8fb9\u754c\u66f4\u52a0\u6e05\u6670\u3002"),(0,i.kt)("h2",{id:"\u4ea7\u54c1\u8303\u56f4"},(0,i.kt)("strong",{parentName:"h2"},"\u4ea7\u54c1\u8303\u56f4")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8409).Z})),(0,i.kt)("h3",{id:"\u5143\u6570\u636e\u4e0a\u4e0b\u6587"},"\u5143\u6570\u636e\u4e0a\u4e0b\u6587"),(0,i.kt)("p",null,"\u5143\u6570\u636e\u4e0a\u4e0b\u6587\u5b9a\u4e49\u5143\u6570\u636e\u89c4\u8303\u3002"),(0,i.kt)("p",null,"\u5143\u6570\u636e\u4e0a\u4e0b\u6587\u4f9d\u6258\u4e8e\u6570\u636e\u4e2d\u95f4\u4ef6\uff0c\u4e3b\u8981\u529f\u80fd\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6253\u901a\u4e0e\u6570\u636e\u4e2d\u95f4\u4ef6\u7684\u5173\u7cfb\uff0c\u80fd\u62ff\u5230\u6240\u6709\u7684\u7528\u6237\u5143\u6570\u636e\u4fe1\u606f\uff08\u5305\u62ecHive\u8868\u5143\u6570\u636e\u3001\u7ebf\u4e0a\u5e93\u8868\u5143\u6570\u636e\u3001\u5176\u4ed6NOSQL\u5982HBase\u3001Kafka\u7b49\u5143\u6570\u636e\uff09")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6240\u6709\u8282\u70b9\u9700\u8981\u8bbf\u95ee\u5143\u6570\u636e\u65f6\uff0c\u5305\u62ec\u5df2\u6709\u5143\u6570\u636e\u548c\u5e94\u7528\u6a21\u677f\u5185\u5143\u6570\u636e\uff0c\u90fd\u5fc5\u987b\u7ecf\u8fc7\u5143\u6570\u636e\u4e0a\u4e0b\u6587\u3002\u5143\u6570\u636e\u4e0a\u4e0b\u6587\u8bb0\u5f55\u4e86\u5e94\u7528\u6a21\u677f\u6240\u4f7f\u7528\u7684\u6240\u6709\u5143\u6570\u636e\u4fe1\u606f\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5404\u8282\u70b9\u6240\u4ea7\u751f\u7684\u65b0\u5143\u6570\u636e\uff0c\u90fd\u5fc5\u987b\u5f80\u5143\u6570\u636e\u4e0a\u4e0b\u6587\u6ce8\u518c\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u62bd\u51fa\u5e94\u7528\u6a21\u677f\u65f6\uff0c\u5143\u6570\u636e\u4e0a\u4e0b\u6587\u4e3a\u5e94\u7528\u6a21\u677f\u62bd\u8c61\uff08\u4e3b\u8981\u662f\u5c06\u7528\u5230\u7684\u591a\u4e2a\u5e93\u8868\u505a\u6210\\${db}.\u8868\u5f62\u5f0f\uff0c\u907f\u514d\u6570\u636e\u6743\u9650\u95ee\u9898\uff09\u548c\u6253\u5305\u6240\u6709\u4f9d\u8d56\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002"))),(0,i.kt)("p",null,"\u5143\u6570\u636e\u4e0a\u4e0b\u6587\u662f\u4ea4\u4e92\u5f0f\u5de5\u4f5c\u6d41\u7684\u57fa\u7840\uff0c\u4e5f\u662f\u5e94\u7528\u6a21\u677f\u7684\u57fa\u7840\u3002\u8bbe\u60f3\uff1aWidget\u5b9a\u4e49\u65f6\uff0c\u5982\u4f55\u77e5\u9053DataWrangler\u5b9a\u4e49\u7684\u5404\u6307\u6807\u7ef4\u5ea6\uff1fQualitis\u5982\u4f55\u6821\u9a8cWidget\u4ea7\u751f\u7684\u56fe\u62a5\u8868\uff1f"),(0,i.kt)("h3",{id:"\u6570\u636e\u4e0a\u4e0b\u6587"},"\u6570\u636e\u4e0a\u4e0b\u6587"),(0,i.kt)("p",null,"\u6570\u636e\u4e0a\u4e0b\u6587\u5b9a\u4e49\u6570\u636e\u89c4\u8303\u3002"),(0,i.kt)("p",null,"\u6570\u636e\u4e0a\u4e0b\u6587\u4f9d\u8d56\u4e8e\u6570\u636e\u4e2d\u95f4\u4ef6\u548cLinkis\u8ba1\u7b97\u4e2d\u95f4\u4ef6\u3002\u4e3b\u8981\u529f\u80fd\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6253\u901a\u6570\u636e\u4e2d\u95f4\u4ef6\uff0c\u62ff\u5230\u6240\u6709\u7528\u6237\u6570\u636e\u4fe1\u606f\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6253\u901a\u8ba1\u7b97\u4e2d\u95f4\u4ef6\uff0c\u62ff\u5230\u6240\u6709\u8282\u70b9\u7684\u6570\u636e\u5b58\u50a8\u4fe1\u606f\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6240\u6709\u8282\u70b9\u9700\u8981\u5199\u4e34\u65f6\u7ed3\u679c\u65f6\uff0c\u5fc5\u987b\u901a\u8fc7\u6570\u636e\u4e0a\u4e0b\u6587\uff0c\u7531\u6570\u636e\u4e0a\u4e0b\u6587\u7edf\u4e00\u5206\u914d\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6240\u6709\u8282\u70b9\u9700\u8981\u8bbf\u95ee\u6570\u636e\u65f6\uff0c\u5fc5\u987b\u901a\u8fc7\u6570\u636e\u4e0a\u4e0b\u6587\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6570\u636e\u4e0a\u4e0b\u6587\u4f1a\u533a\u5206\u4f9d\u8d56\u6570\u636e\u548c\u751f\u6210\u6570\u636e\uff0c\u5728\u62bd\u51fa\u5e94\u7528\u6a21\u677f\u65f6\uff0c\u4e3a\u5e94\u7528\u6a21\u677f\u62bd\u8c61\u548c\u6253\u5305\u6240\u6709\u4f9d\u8d56\u7684\u6570\u636e\u3002"))),(0,i.kt)("h3",{id:"\u8d44\u6e90\u4e0a\u4e0b\u6587"},"\u8d44\u6e90\u4e0a\u4e0b\u6587"),(0,i.kt)("p",null,"\u8d44\u6e90\u4e0a\u4e0b\u6587\u5b9a\u4e49\u8d44\u6e90\u89c4\u8303\u3002"),(0,i.kt)("p",null,"\u8d44\u6e90\u4e0a\u4e0b\u6587\u4e3b\u8981\u4e0eLinkis\u8ba1\u7b97\u4e2d\u95f4\u4ef6\u4ea4\u4e92\u3002\u4e3b\u8981\u529f\u80fd\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7528\u6237\u8d44\u6e90\u6587\u4ef6\uff08\u5982Jar\u3001Zip\u6587\u4ef6\u3001properties\u6587\u4ef6\u7b49\uff09")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7528\u6237UDF")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7528\u6237\u7b97\u6cd5\u5305")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7528\u6237\u811a\u672c"))),(0,i.kt)("h3",{id:"\u73af\u5883\u4e0a\u4e0b\u6587"},"\u73af\u5883\u4e0a\u4e0b\u6587"),(0,i.kt)("p",null,"\u73af\u5883\u4e0a\u4e0b\u6587\u5b9a\u4e49\u73af\u5883\u89c4\u8303\u3002"),(0,i.kt)("p",null,"\u4e3b\u8981\u529f\u80fd\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u64cd\u4f5c\u7cfb\u7edf")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f6f\u4ef6\uff0c\u5982Hadoop\u3001Spark\u7b49")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f6f\u4ef6\u5305\u4f9d\u8d56\uff0c\u5982Mysql-JDBC\u3002"))),(0,i.kt)("h3",{id:"\u5bf9\u8c61\u4e0a\u4e0b\u6587"},"\u5bf9\u8c61\u4e0a\u4e0b\u6587"),(0,i.kt)("p",null,"\u8fd0\u884c\u65f6\u4e0a\u4e0b\u6587\u4e3a\u5e94\u7528\u6a21\u677f\uff08\u5de5\u4f5c\u6d41\uff09\u5728\u5b9a\u4e49\u548c\u6267\u884c\u65f6\uff0c\u6240\u4fdd\u7559\u7684\u6240\u6709\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u5b83\u7528\u4e8e\u534f\u52a9\u5b9a\u4e49\u5de5\u4f5c\u6d41/\u5e94\u7528\u6a21\u677f\uff0c\u5728\u5de5\u4f5c\u6d41/\u5e94\u7528\u6a21\u677f\u6267\u884c\u65f6\u63d0\u793a\u548c\u5b8c\u5584\u6240\u6709\u5fc5\u8981\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u8fd0\u884c\u65f6\u5de5\u4f5c\u6d41\u4e3b\u8981\u662fLinkis\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"cs\u67b6\u6784\u56fe"},(0,i.kt)("strong",{parentName:"h2"},"CS\u67b6\u6784\u56fe")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(58721).Z})),(0,i.kt)("h2",{id:"\u67b6\u6784\u8bf4\u660e"},(0,i.kt)("strong",{parentName:"h2"},"\u67b6\u6784\u8bf4\u660e\uff1a")),(0,i.kt)("h3",{id:"1--client"},"1.  Client"),(0,i.kt)("p",null,"\u5916\u90e8\u8bbf\u95eeCS\u7684\u5165\u53e3\uff0cClient\u6a21\u5757\u63d0\u4f9bHA\u529f\u80fd\uff1b\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/context-service-client"},"\u8fdb\u5165Client\u67b6\u6784\u8bbe\u8ba1")),(0,i.kt)("h3",{id:"2--service\u6a21\u5757"},"2.  Service\u6a21\u5757"),(0,i.kt)("p",null,"\u63d0\u4f9bRestful\u63a5\u53e3\uff0c\u5c01\u88c5\u548c\u5904\u7406\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684CS\u8bf7\u6c42\uff1b\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/context-service"},"\u8fdb\u5165Service\u67b6\u6784\u8bbe\u8ba1")),(0,i.kt)("h3",{id:"3--contextsearch"},"3.  ContextSearch"),(0,i.kt)("p",null,"\u4e0a\u4e0b\u6587\u67e5\u8be2\u6a21\u5757\uff0c\u63d0\u4f9b\u4e30\u5bcc\u548c\u5f3a\u5927\u7684\u67e5\u8be2\u80fd\u529b\uff0c\u4f9b\u5ba2\u6237\u7aef\u67e5\u627e\u4e0a\u4e0b\u6587\u7684Key-Value\u952e\u503c\u5bf9\uff1b\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/context-service-search"},"\u8fdb\u5165ContextSearch\u67b6\u6784\u8bbe\u8ba1")),(0,i.kt)("h3",{id:"4--listener"},"4.  Listener"),(0,i.kt)("p",null,"CS\u7684\u76d1\u542c\u5668\u6a21\u5757\uff0c\u63d0\u4f9b\u540c\u6b65\u548c\u5f02\u6b65\u7684\u4e8b\u4ef6\u6d88\u8d39\u80fd\u529b\uff0c\u5177\u5907\u7c7b\u4f3cZookeeper\u7684Key-Value\u4e00\u65e6\u66f4\u65b0\uff0c\u5b9e\u65f6\u901a\u77e5Client\u7684\u80fd\u529b\uff1b\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/context-service-listener"},"\u8fdb\u5165Listener\u67b6\u6784\u8bbe\u8ba1")),(0,i.kt)("h3",{id:"5--contextcache"},"5.  ContextCache"),(0,i.kt)("p",null,"\u4e0a\u4e0b\u6587\u7684\u5185\u5b58\u7f13\u5b58\u6a21\u5757\uff0c\u63d0\u4f9b\u5feb\u901f\u68c0\u7d22\u4e0a\u4e0b\u6587\u7684\u80fd\u529b\u548c\u5bf9JVM\u5185\u5b58\u4f7f\u7528\u7684\u76d1\u542c\u548c\u6e05\u7406\u80fd\u529b\uff1b\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/context-service-cache"},"\u8fdb\u5165ContextCache\u67b6\u6784\u8bbe\u8ba1")),(0,i.kt)("h3",{id:"6--highavailable"},"6.  HighAvailable"),(0,i.kt)("p",null,"\u63d0\u4f9bCS\u9ad8\u53ef\u7528\u80fd\u529b\uff1b\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/context-service-highavailable"},"\u8fdb\u5165HighAvailable\u67b6\u6784\u8bbe\u8ba1")),(0,i.kt)("h3",{id:"7--persistence"},"7.  Persistence"),(0,i.kt)("p",null,"CS\u7684\u6301\u4e45\u5316\u529f\u80fd\uff1b\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/architecture/public-enhancement-services/context-service/context-service-persistence"},"\u8fdb\u5165Persistence\u67b6\u6784\u8bbe\u8ba1")))}p.isMDXComponent=!0},8409:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-01-a932c089b228950c365304909a5f8025.png"},58721:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-02-42287c01e204a4e04091b56b65e25972.png"}}]);