"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[45611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38793:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"RPC\u67b6\u6784",sidebar_position:2},l=void 0,c={unversionedId:"architecture/commons/rpc",id:"version-0.11.0/architecture/commons/rpc",isDocsHomePage:!1,title:"RPC\u67b6\u6784",description:"1. \u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/commons/rpc.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/rpc",permalink:"/zh-CN/docs/0.11.0/architecture/commons/rpc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/commons/rpc.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"RPC\u67b6\u6784",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Scheduler\u67b6\u6784",permalink:"/zh-CN/docs/0.11.0/architecture/commons/scheduler"},next:{title:"\u5bf9\u63a5\u591a\u79cd\u6587\u4ef6\u7cfb\u7edf",permalink:"/zh-CN/docs/0.11.0/architecture/storage/file-system"}},p=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",children:[]},{value:"2. \u7b80\u4ecb",id:"2-\u7b80\u4ecb",children:[]},{value:"3. \u5b9e\u73b0",id:"3-\u5b9e\u73b0",children:[{value:"3.1 \u53d1\u9001\u7aef",id:"31-\u53d1\u9001\u7aef",children:[]},{value:"3.2 \u63a5\u6536\u7aef",id:"32-\u63a5\u6536\u7aef",children:[]}]}],o={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,i.kt)("p",null,"\u57fa\u4e8eFeign\u7684\u5fae\u670d\u52a1\u4e4b\u95f4HTTP\u63a5\u53e3\u7684\u8c03\u7528\uff0c\u53ea\u80fd\u6ee1\u8db3\u7b80\u5355\u7684A\u5fae\u670d\u52a1\u5b9e\u4f8b\u6839\u636e\u7b80\u5355\u7684\u89c4\u5219\u968f\u673a\u9009\u62e9B\u5fae\u670d\u52a1\u4e4b\u4e2d\u7684\u67d0\u4e2a\u670d\u52a1\u5b9e\u4f8b\uff0c\u800c\u8fd9\u4e2aB\u5fae\u670d\u52a1\u5b9e\u4f8b\u5982\u679c\u60f3\u5f02\u6b65\u56de\u4f20\u4fe1\u606f\u7ed9\u8c03\u7528\u65b9\uff0c\u662f\u6839\u672c\u65e0\u6cd5\u5b9e\u73b0\u7684\u3002"),(0,i.kt)("p",null,"\u540c\u65f6\uff0c\u7531\u4e8eFeign\u53ea\u652f\u6301\u7b80\u5355\u7684\u670d\u52a1\u9009\u53d6\u89c4\u5219\uff0c\u65e0\u6cd5\u505a\u5230\u5c06\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u6307\u5b9a\u7684\u5fae\u670d\u52a1\u5b9e\u4f8b\uff0c\u65e0\u6cd5\u505a\u5230\u5c06\u4e00\u4e2a\u8bf7\u6c42\u5e7f\u64ad\u7ed9\u63a5\u6536\u65b9\u5fae\u670d\u52a1\u7684\u6240\u6709\u5b9e\u4f8b\u3002"),(0,i.kt)("h2",{id:"2-\u7b80\u4ecb"},"2. \u7b80\u4ecb"),(0,i.kt)("p",null,"Linkis\u57fa\u4e8eFeign\u5b9e\u73b0\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u5e95\u5c42RPC\u901a\u4fe1\u65b9\u6848\u3002"),(0,i.kt)("p",null,"Linkis RPC\u4f5c\u4e3a\u5e95\u5c42\u7684\u901a\u4fe1\u65b9\u6848\uff0c\u5c06\u63d0\u4f9bSDK\u96c6\u6210\u5230\u6709\u9700\u8981\u7684\u5fae\u670d\u52a1\u4e4b\u4e2d\u3002"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5fae\u670d\u52a1\u65e2\u53ef\u4ee5\u4f5c\u4e3a\u8bf7\u6c42\u8c03\u7528\u65b9\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u8bf7\u6c42\u63a5\u6536\u65b9\u3002"),(0,i.kt)("p",null,"\u4f5c\u4e3a\u8bf7\u6c42\u8c03\u7528\u65b9\u65f6\uff0c\u5c06\u901a\u8fc7Sender\u8bf7\u6c42\u76ee\u6807\u63a5\u6536\u65b9\u5fae\u670d\u52a1\u7684Receiver\uff0c\u4f5c\u4e3a\u8bf7\u6c42\u63a5\u6536\u65b9\u65f6\uff0c\u5c06\u63d0\u4f9bReceiver\u7528\u6765\u5904\u7406\u8bf7\u6c42\u63a5\u6536\u65b9Sender\u53d1\u9001\u8fc7\u6765\u7684\u8bf7\u6c42\uff0c\u4ee5\u4fbf\u5b8c\u6210\u540c\u6b65\u54cd\u5e94\u6216\u5f02\u6b65\u54cd\u5e94\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Linkis RPC\u67b6\u6784\u56fe",src:n(55700).Z})),(0,i.kt)("h2",{id:"3-\u5b9e\u73b0"},"3. \u5b9e\u73b0"),(0,i.kt)("p",null,"\u57fa\u4e8e\u8bf7\u6c42\u8c03\u7528\u65b9\u7684Sender\u4f53\u7cfb\u548c\u8bf7\u6c42\u63a5\u6536\u65b9\u7684Receiver\u4f53\u7cfb\uff0c\u6784\u6210\u4e86Linkis RPC\u7684\u5168\u90e8\u67b6\u6784\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Linkis RPC\u8be6\u7ec6\u67b6\u6784\u56fe",src:n(38994).Z})),(0,i.kt)("h3",{id:"31-\u53d1\u9001\u7aef"},"3.1 \u53d1\u9001\u7aef"),(0,i.kt)("p",null,"Linkis RPC\u4f5c\u4e3a\u5e95\u5c42\u7684\u901a\u4fe1\u5c42\uff0c\u53d1\u9001\u7aef\u65e0\u9700\u4f7f\u7528\u8005\u5199\u4efb\u4f55\u7684\u5b9e\u9645\u4ee3\u7801\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"1) \u4f7f\u7528\u8005\u901a\u8fc7\u8c03\u7528Linkis RPC\u63d0\u4f9b\u7684SDK\uff0c\u901a\u8fc7\u5fae\u670d\u52a1\u540d\uff08Service Name\uff09\u6216\u6307\u5b9a\u5fae\u670d\u52a1\u5b9e\u4f8b\uff08\u5fae\u670d\u52a1\u540d+\u5fae\u670d\u52a1\u5b9e\u4f8b\u7684IP\u548c\u7aef\u53e3\uff09\uff0c\u83b7\u53d6\u4e00\u4e2aSender\u53d1\u9001\u5668\u3002"),(0,i.kt)("p",{parentName:"li"},"\u2002"," ","\u2002"," ","\u2002"," ","\u2002"," Sender\u63d0\u4f9b\u7684\u53ef\u4f7f\u7528\u65b9\u6cd5\uff0c\u89c1\u5982\u4e0b\u4f2a\u4ee3\u7801\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"abstract class Sender {\n    Object ask(Object message);\n    Object ask(Object message, Duration timeout);\n    void send(Object message);\n    void deliver(Object message);\n}\n")),(0,i.kt)("p",null," ","\u2002"," ","\u2002"," ","\u2002"," ","\u2002","\u5176\u4e2d:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    1. ask\u65b9\u6cd5\u4e3a\u540c\u6b65\u8bf7\u6c42\u54cd\u5e94\u65b9\u6cd5\uff0c\u8981\u6c42\u63a5\u6536\u7aef\u5fc5\u987b\u540c\u6b65\u8fd4\u56de\u54cd\u5e94\uff1b\n    2. send\u65b9\u6cd5\u4e3a\u540c\u6b65\u8bf7\u6c42\u65b9\u6cd5\uff0c\u53ea\u8d1f\u8d23\u540c\u6b65\u5c06\u8bf7\u6c42\u53d1\u9001\u7ed9\u63a5\u6536\u7aef\uff0c\u4e0d\u8981\u6c42\u63a5\u6536\u7aef\u7ed9\u51fa\u7b54\u590d\uff1b\n    3. deliver\u5219\u4e3a\u5f02\u6b65\u8bf7\u6c42\u65b9\u6cd5\uff0c\u53ea\u8981\u53d1\u9001\u7aef\u7684\u8fdb\u7a0b\u4e0d\u5f02\u5e38\u9000\u51fa\uff0c\u5728\u7a0d\u540e\u4f1a\u901a\u8fc7\u5176\u5b83\u7ebf\u7a0b\u5c06\u8bf7\u6c42\u53d1\u9001\u7ed9\u63a5\u6536\u7aef\u3002\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2) \u4f7f\u7528\u8005\u4f5c\u4e3a\u53d1\u9001\u7aef\uff0c\u901a\u8fc7Sender\u53d1\u9001\u5668\u63d0\u4f9b\u7684\u8bf7\u6c42\u65b9\u6cd5\uff0c\u53d1\u9001\u8bf7\u6c42\u7ed9\u63a5\u6536\u7aef\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"3) Sender\u53d1\u9001\u5668\u4f1a\u5c06\u4f7f\u7528\u8005\u7684\u8bf7\u6c42\u4f20\u9012\u7ed9\u62e6\u622a\u5668\u3002\u62e6\u622a\u5668\u62e6\u622a\u8bf7\u6c42\uff0c\u5f00\u59cb\u5bf9\u8bf7\u6c42\u505a\u989d\u5916\u7684\u529f\u80fd\u6027\u5904\u7406\uff1a"),(0,i.kt)("p",{parentName:"li"},"   a)\t\u5e7f\u64ad\u62e6\u622a\u5668\u3002"),(0,i.kt)("p",{parentName:"li"},"   \u5e7f\u64ad\u62e6\u622a\u5668\u53ea\u5bf9\u9700\u8981\u8fdb\u884c\u5e7f\u64ad\u7684\u8bf7\u6c42\u751f\u6548\u3002"),(0,i.kt)("p",{parentName:"li"},"   \u5e7f\u64ad\u62e6\u622a\u5668\u4f1a\u63d0\u4f9b\u7279\u6b8a\u7684\u5e7f\u64ad\u63a5\u53e3\uff0c\u5982\u679c\u672c\u6b21\u8bf7\u6c42\u5b9e\u73b0\u4e86\u8be5\u5e7f\u64ad\u63a5\u53e3\uff0c\u4e14\u8be5\u8bf7\u6c42\u4e0d\u662f\u6b63\u5728\u5e7f\u64ad\u4e2d\uff0c\u5e7f\u64ad\u62e6\u622a\u5668\u5219\u8ba4\u4e3a\u672c\u6b21\u8bf7\u6c42\u9700\u8981\u8fdb\u884c\u5e7f\u64ad\uff0c\u8fd9\u65f6\u4f1a\u89e6\u53d1\u5e7f\u64ad\u64cd\u4f5c\u3002"),(0,i.kt)("p",{parentName:"li"},"   \u5177\u4f53\u6b65\u9aa4\u4e3a\uff1a\u83b7\u53d6\u8bf7\u6c42\u9700\u8981\u8fdb\u884c\u5e7f\u64ad\u7684\u6240\u6709\u5fae\u670d\u52a1\u5b9e\u4f8b\uff0c\u5982\u679c\u4e3a\u7a7a\u5219\u9ed8\u8ba4\u5e7f\u64ad\u7ed9\u8be5\u5fae\u670d\u52a1\u7684\u6240\u6709\u5b9e\u4f8b\uff1b\u7136\u540e\u5c06\u8bf7\u6c42\u6807\u8bb0\u4e3a\u5e7f\u64ad\u4e2d\uff0c\u8c03\u7528\u6b65\u9aa41)\uff0c\u83b7\u53d6\u5bf9\u5e94\u7684\u6240\u6709\u5fae\u670d\u52a1\u5b9e\u4f8b\u7684\u6240\u6709Sender\uff0c\u901a\u8fc7\u591a\u7ebf\u7a0b\u7684\u65b9\u5f0f\u5f00\u59cb\u8fdb\u884c\u8bf7\u6c42\u53d1\u9001\uff1b\u7b49\u5230\u7ebf\u7a0b\u6c60\u4e2d\u7684Sender\u90fd\u53d1\u9001\u5b8c\u8bf7\u6c42\uff0c\u5c06\u672c\u6b21\u5e7f\u64ad\u8bf7\u6c42\u6807\u8bb0\u4e3a\u6210\u529f\uff0c\u8fd4\u56de\u7ed9\u4f7f\u7528\u8005\uff0c\u5904\u7406\u5b8c\u6bd5\u3002"),(0,i.kt)("p",{parentName:"li"},"   b)\t\u91cd\u8bd5\u62e6\u622a\u5668\u3002"),(0,i.kt)("p",{parentName:"li"},"   \u91cd\u8bd5\u62e6\u622a\u5668\u4f1a\u5bf9\u63a5\u4e0b\u6765\u7684\u6240\u6709\u6b65\u9aa4\u63d0\u4f9b\u91cd\u8bd5\u529f\u80fd\u3002"),(0,i.kt)("p",{parentName:"li"},"   \u5982\u679c\u53d1\u9001\u7aef\u6210\u529f\u53d1\u9001\u4e86\u8bf7\u6c42\uff0c\u4f46\u662f\u63a5\u6536\u7aef\u8fd4\u56de\u4e86\u8981\u6c42\u91cd\u8bd5\u7684\u5f02\u5e38\uff0c\u8fd9\u65f6\u4f1a\u89e6\u53d1\u91cd\u8bd5\u62e6\u622a\u5668\u7684\u91cd\u8bd5\uff0c\u91cd\u65b0\u81ea\u52a8\u63d0\u4ea4\u8bf7\u6c42\uff1b\u5982\u679c\u672c\u6b21\u8bf7\u6c42\u6ca1\u6709\u6307\u5b9a\u5fae\u670d\u52a1\u63a5\u6536\u7aef\u7684\u7279\u5b9a\u5b9e\u4f8b\uff0c\u53d1\u9001\u8bf7\u6c42\u65f6\u51fa\u73b0\u4e86ConnectException\uff08\u8fde\u63a5\u5f02\u5e38\uff09\uff0c\u4e5f\u4f1a\u4e3b\u52a8\u8fdb\u884c\u91cd\u8bd5\uff1b\u6216\u8005\u4f7f\u7528\u8005\u6307\u5b9a\u4e86\u67d0\u4e9b\u5f02\u5e38\u9700\u8981\u91cd\u8bd5\uff0c\u8fd9\u65f6\u91cd\u8bd5\u62e6\u622a\u5668\u4e5f\u4f1a\u81ea\u52a8\u8fdb\u884c\u91cd\u8bd5\u3002"),(0,i.kt)("p",{parentName:"li"},"   c)\t\u7f13\u5b58\u62e6\u622a\u5668\u3002"),(0,i.kt)("p",{parentName:"li"},"   \u7f13\u5b58\u62e6\u622a\u5668\u662f\u9488\u5bf9\u4e00\u4e9b\u54cd\u5e94\u5185\u5bb9\u4e0d\u5927\u53ef\u80fd\u7ecf\u5e38\u53d8\u52a8\u7684\u540c\u6b65\u8bf7\u6c42\u800c\u8bbe\u5b9a\u7684\u3002"),(0,i.kt)("p",{parentName:"li"},"   \u7f13\u5b58\u62e6\u622a\u5668\u4e5f\u4f1a\u63d0\u4f9b\u7279\u6b8a\u7684\u7f13\u5b58\u63a5\u53e3\uff0c\u5982\u679c\u672c\u6b21\u8bf7\u6c42\u5b9e\u73b0\u4e86\u8be5\u7f13\u5b58\u63a5\u53e3\uff0c\u4f1a\u9996\u5148\u5728\u7f13\u5b58\u62e6\u622a\u5668\u4e2d\u5bfb\u627e\u8be5\u8bf7\u6c42\u662f\u5426\u5df2\u7f13\u5b58\u4e86\u63a5\u6536\u7aef\u7684\u54cd\u5e94\uff0c\u5982\u679c\u6709\u5219\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u54cd\u5e94\uff0c\u5426\u5219\u7ee7\u7eed\u63a5\u4e0b\u62c9\u7684\u6b65\u9aa4\uff0c\u5e76\u5728\u63a5\u6536\u7aef\u8fd4\u56de\u54cd\u5e94\u540e\uff0c\u5148\u5c06\u54cd\u5e94\u7f13\u5b58\u8d77\u6765\uff0c\u518d\u5c06\u54cd\u5e94\u8fd4\u56de\u4f7f\u7528\u8005\uff0c\u5904\u7406\u5b8c\u6bd5\u3002"),(0,i.kt)("p",{parentName:"li"},"   d)\t\u9ed8\u8ba4\u62e6\u622a\u5668\u3002"),(0,i.kt)("p",{parentName:"li"},"   \u9ed8\u8ba4\u62e6\u622a\u5668\u7528\u4e8e\u8c03\u7528\u63a5\u4e0b\u6765\u7684\u5904\u7406\u6b65\u9aa4\u3002"),(0,i.kt)("p",{parentName:"li"},"   e)\t\u81ea\u5b9a\u4e49\u62e6\u622a\u5668\u3002\u4f7f\u7528\u8005\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u81ea\u5b9a\u4e49\u62e6\u622a\u5668\uff0c\u7528\u4e8e\u5b9e\u73b0\u4e00\u4e9b\u7279\u5b9a\u7684\u529f\u80fd\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"4) \u8bf7\u6c42\u7f16\u7801\u5668\u4f1a\u5148\u5c06\u7528\u6237\u8bf7\u6c42\u7684\u6570\u636e\uff08\u5b9e\u4f53Bean\uff09\u8f6c\u6362\u6210\u5e8f\u5217\u5316\u7684JSON\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u4f20\u9012\u7ed9Feign\u5ba2\u6237\u7aef\u751f\u6210\u5668\u3002"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"5) Feign\u5ba2\u6237\u7aef\u751f\u6210\u5668\uff0c\u751f\u6210\u53ef\u8bbf\u95ee\u63a5\u6536\u7aefRestful\u8bf7\u6c42\u63a5\u6536\u5668\u7684Feign\u5ba2\u6237\u7aef\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"6) \u751f\u6210\u7684Feign\u5ba2\u6237\u7aef\uff0c\u4f1a\u8c03\u7528\u670d\u52a1\u53d1\u73b0\u7ba1\u7406\u5668\uff0c\u83b7\u53d6\u6240\u6709\u7684\u5fae\u670d\u52a1\u5217\u8868\uff0c\u901a\u8fc7\u670d\u52a1\u9009\u62e9\u5668\uff0c\u5982\u679c\u4f7f\u7528\u8005\u5728\u6b65\u9aa41)\u6307\u5b9a\u7684\u662f\u5fae\u670d\u52a1\u540d\uff0c\u5219\u901a\u8fc7Feign\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u4e3a\u8bf7\u6c42\u9009\u62e9\u4e00\u4e2a\u5408\u9002\u7684\u63a5\u6536\u65b9\u5fae\u670d\u52a1\u5b9e\u4f8b\u8fdb\u884c\u8bf7\u6c42\u8f6c\u53d1\uff0c\u5426\u5219\u670d\u52a1\u9009\u62e9\u5668\u4f1a\u91cd\u5199Spring Cloud Feign\u7684FeignLoadBalancer\uff08Feign\u8d1f\u8f7d\u5747\u8861\u5668\uff09\uff0c\u5728\u521b\u5efaLoadBalancerCommand\u65f6\uff0c\u6307\u5b9a\u5bf9\u5e94\u7684\u5fae\u670d\u52a1\u5b9e\u4f8b\u4e3a\u6b65\u9aa41\uff09\u83b7\u53d6Sender\u65f6\u6307\u5b9a\u7684\u5fae\u670d\u52a1\u5b9e\u4f8b\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"7) \u8c03\u7528Feign\u5ba2\u6237\u7aef\uff0c\u5f00\u59cb\u8bf7\u6c42\u63a5\u6536\u7aef\u7684Restful\u8bf7\u6c42\u63a5\u6536\u5668\u3002")),(0,i.kt)("h3",{id:"32-\u63a5\u6536\u7aef"},"3.2 \u63a5\u6536\u7aef"),(0,i.kt)("p",null," \u63a5\u6536\u7aef\u9700\u8981\u4f7f\u7528\u8005\u5b9e\u73b0Receiver\u63a5\u53e3\uff0c\u7528\u4e8e\u5904\u7406\u771f\u6b63\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),(0,i.kt)("p",null,"1)\tRestful\u8bf7\u6c42\u63a5\u6536\u5668\u4f5c\u4e3aLinkis RPC\u5185\u5d4c\u7684HTTP\u8bf7\u6c42Web Service\u670d\u52a1\uff0c\u8d1f\u8d23\u63a5\u6536\u53d1\u9001\u7aef\u7684\u8bf7\u6c42"),(0,i.kt)("p",null,"2)\tRestful\u8bf7\u6c42\u63a5\u6536\u5668\u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u5148\u8c03\u7528\u8bf7\u6c42\u89e3\u7801\u5668\u5bf9\u8bf7\u6c42\u8fdb\u884c\u89e3\u7801\uff0c\u89e3\u6790\u51fa\u5b9e\u9645\u7684\u8bf7\u6c42\u4fe1\u606f\u548c\u53d1\u9001\u7aef\u5fae\u670d\u52a1\u4fe1\u606f\uff08\u5fae\u670d\u52a1\u540d+\u5fae\u670d\u52a1\u5b9e\u4f8b\u7684IP\u548c\u7aef\u53e3\uff09\uff0c\u5982\u679c\u89e3\u6790\u5931\u8d25\uff0c\u4f1a\u76f4\u63a5\u54cd\u5e94\u89e3\u6790\u8bf7\u6c42\u5931\u8d25\u3002"),(0,i.kt)("p",null,"3)\t\u5c06\u89e3\u6790\u540e\u7684\u8bf7\u6c42\u4fe1\u606f\u548c\u53d1\u9001\u7aef\u5fae\u670d\u52a1\u4fe1\u606f\u653e\u5165\u8bf7\u6c42\u6d88\u606f\u961f\u5217\uff1b"),(0,i.kt)("p",null,"4)\t\u8bf7\u6c42\u6d88\u8d39\u5668\u4f1a\u6d88\u8d39\u8bf7\u6c42\u6d88\u606f\u961f\u5217\u91cc\uff0c\u5df2\u7ecf\u89e3\u7801\u7684\u53d1\u9001\u7aef\u8bf7\u6c42\u3002"),(0,i.kt)("p",null," \u901a\u8fc7\u8c03\u7528Receiver\u7ba1\u7406\u5668\u83b7\u53d6\u4e00\u4e2a\u5408\u9002\u7684Receiver\uff1b\u540c\u65f6\u901a\u8fc7\u83b7\u53d6\u5230\u7684\u53d1\u9001\u7aef\u5fae\u670d\u52a1\u4fe1\u606f\uff0c\u4f7f\u7528Sender\u751f\u6210\u5668\u751f\u6210\u4e00\u4e2a\u6307\u5411\u53d1\u9001\u7aef\u7684Sender\u3002\u7136\u540e\u8bf7\u6c42\u6d88\u8d39\u5668\u5c06\u5b9e\u9645\u7684\u8bf7\u6c42\u4fe1\u606f\u548c\u751f\u6210\u7684\u53d1\u9001\u7aefSender\uff0c\u4f20\u7ed9Receiver\u8fdb\u884c\u5904\u7406\uff1b "),(0,i.kt)("p",null,"5)\tReceiver\u4f5c\u4e3a\u7528\u6237\u8bf7\u6c42\u7684\u5b9e\u9645\u5904\u7406\u5355\u5143\uff0c\u8981\u6c42\u4f7f\u7528\u8005\u5fc5\u987b\u5b9e\u73b0Receiver\u63a5\u53e3\uff0c\u5b8c\u6210\u5bf9\u8c03\u7528\u7aef\u8bf7\u6c42\u7684\u5b9e\u9645\u5904\u7406\u903b\u8f91\u3002"),(0,i.kt)("p",null," Receiver\u7684\u4f2a\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Receiver {\n    void receive(Object message, Sender sender);\n    Object receiveAndReply(Object message, Sender sender);\n    Object receiveAndReply(Object message, Duration duration, Sender sender);\n}\n")),(0,i.kt)("p",null," Receiver\u63d0\u4f9b\u4e86\u5904\u7406\u540c\u6b65\u8bf7\u6c42\u548c\u5f02\u6b65\u8bf7\u6c42\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"6)\t \u5982\u679c\u672c\u6b21\u8bf7\u6c42\u662f\u5f02\u6b65\u8bf7\u6c42\uff0c\u5219\u8c03\u7528Receiver\u7684receive\u65b9\u6cd5\uff0c\u7531\u4e0a\u5c42\u4e1a\u52a1\u51b3\u5b9a\u662f\u5426\u9700\u8981\u901a\u8fc7\u53d1\u9001\u7aef\u7684Sender\u56de\u4f20\u54cd\u5e94\u3002"),(0,i.kt)("p",null,"7)\t\u5982\u679c\u672c\u6b21\u8bf7\u6c42\u662f\u540c\u6b65\u8bf7\u6c42\uff0c\u5219\u8c03\u7528 Receiver\u7684receiveAndReply\u65b9\u6cd5\uff0c\u5c06\u8fd4\u56de\u503c\u4f5c\u4e3a\u54cd\u5e94\u7ed3\u679c\uff0c\u56de\u4f20\u53d1\u9001\u7aef\u3002"))}u.isMDXComponent=!0},55700:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rpc1-50c633a63c04e7c497be42055ea7da8e.png"},38994:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rpc2-4ab2032cef27bfebc9cdcf959b63179a.png"}}]);