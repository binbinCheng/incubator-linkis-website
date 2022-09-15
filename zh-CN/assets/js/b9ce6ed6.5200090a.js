"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[29480],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),v=c,h=d["".concat(a,".").concat(v)]||d[v]||p[v]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function v(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:c,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(87462),c=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"CS \u67b6\u6784",sidebar_position:.5},a=void 0,l={unversionedId:"architecture/public-enhancement-services/context-service/context-service",id:"version-1.1.2/architecture/public-enhancement-services/context-service/context-service",isDocsHomePage:!1,title:"CS \u67b6\u6784",description:"ContextService\u67b6\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/architecture/public-enhancement-services/context-service/context-service.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/context-service",permalink:"/zh-CN/docs/1.1.2/architecture/public-enhancement-services/context-service/context-service",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/architecture/public-enhancement-services/context-service/context-service.md",tags:[],version:"1.1.2",sidebarPosition:.5,frontMatter:{title:"CS \u67b6\u6784",sidebar_position:.5},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.1.2/architecture/public-enhancement-services/context-service/overview"},next:{title:"CS Cache \u67b6\u6784",permalink:"/zh-CN/docs/1.1.2/architecture/public-enhancement-services/context-service/context-service-cache"}},u=[{value:"<strong>ContextService\u67b6\u6784</strong>",id:"contextservice\u67b6\u6784",children:[{value:"<strong>\u6c34\u5e73\u5212\u5206</strong>",id:"\u6c34\u5e73\u5212\u5206",children:[]},{value:"<strong>\u5782\u76f4\u5212\u5206</strong>",id:"\u5782\u76f4\u5212\u5206",children:[]}]},{value:"<strong>UML\u7c7b\u56fe</strong>",id:"uml\u7c7b\u56fe",children:[]},{value:"<strong>Scheduler\u7ebf\u7a0b\u6a21\u578b</strong>",id:"scheduler\u7ebf\u7a0b\u6a21\u578b",children:[]}],p={toc:u};function d(e){var t=e.components,s=(0,c.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"contextservice\u67b6\u6784"},(0,i.kt)("strong",{parentName:"h2"},"ContextService\u67b6\u6784")),(0,i.kt)("h3",{id:"\u6c34\u5e73\u5212\u5206"},(0,i.kt)("strong",{parentName:"h3"},"\u6c34\u5e73\u5212\u5206")),(0,i.kt)("p",null,"\u4ece\u6c34\u5e73\u4e0a\u5212\u5206\u4e3a\u4e09\u4e2a\u6a21\u5757\uff1aRestful\uff0cScheduler\uff0cService"),(0,i.kt)("h4",{id:"restful\u804c\u8d23"},"Restful\u804c\u8d23"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u5c06\u8bf7\u6c42\u5c01\u88c5\u4e3ahttpjob\u63d0\u4ea4\u5230Scheduler\n")),(0,i.kt)("h4",{id:"scheduler\u804c\u8d23"},"Scheduler\u804c\u8d23"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u901a\u8fc7httpjob\u7684protocol\u7684ServiceName\u627e\u5230\u76f8\u5e94\u7684\u670d\u52a1\u6267\u884c\u8fd9\u4e2ajob\n")),(0,i.kt)("h4",{id:"service\u804c\u8d23"},"Service\u804c\u8d23"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u771f\u6b63\u6267\u884c\u8bf7\u6c42\u903b\u8f91\u7684\u6a21\u5757\uff0c\u5c01\u88c5ResponseProtocol\uff0c\u5e76\u5524\u9192Restful\u4e2dwait\u7684\u7ebf\u7a0b\n")),(0,i.kt)("h3",{id:"\u5782\u76f4\u5212\u5206"},(0,i.kt)("strong",{parentName:"h3"},"\u5782\u76f4\u5212\u5206")),(0,i.kt)("p",null,"\u4ece\u5782\u76f4\u4e0a\u5212\u5206\u4e3a4\u4e2a\u6a21\u5757\uff1aListener\uff0cHistory\uff0cContextId\uff0cContext\uff1a"),(0,i.kt)("h4",{id:"listener\u804c\u8d23"},"Listener\u804c\u8d23"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8d1f\u8d23Client\u7aef\u7684\u6ce8\u518c\u548c\u7ed1\u5b9a\uff08\u5199\u5165\u6570\u636e\u5e93\u548c\u5728CallbackEngine\u4e2d\u8fdb\u884c\u6ce8\u518c\uff09")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5fc3\u8df3\u63a5\u53e3\uff0c\u901a\u8fc7CallbackEngine\u8fd4\u56deArray","[ListenerCallback]"))),(0,i.kt)("h4",{id:"history\u804c\u8d23"},"History\u804c\u8d23"),(0,i.kt)("p",null,"\u521b\u5efa\u548c\u79fb\u9664history\uff0c\u64cd\u4f5cPersistence\u8fdb\u884cDB\u6301\u4e45\u5316"),(0,i.kt)("h4",{id:"contextid\u804c\u8d23"},"ContextId\u804c\u8d23"),(0,i.kt)("p",null,"\u4e3b\u8981\u662f\u5bf9\u63a5Persistence\u8fdb\u884cContextId\u7684\u521b\u5efa\uff0c\u66f4\u65b0\u79fb\u9664\u7b49\u64cd\u4f5c"),(0,i.kt)("h4",{id:"context\u804c\u8d23"},"Context\u804c\u8d23"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u79fb\u9664\uff0creset\u7b49\u65b9\u6cd5\uff0c\u5148\u64cd\u4f5cPersistence\u8fdb\u884cDB\u6301\u4e45\u5316\uff0c\u5e76\u66f4\u65b0ContextCache")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c01\u88c5\u67e5\u8be2condition\u53bbContextSearch\u6a21\u5757\u83b7\u53d6\u76f8\u5e94\u7684ContextKeyValue\u6570\u636e"))),(0,i.kt)("p",null,"\u8bf7\u6c42\u8bbf\u95ee\u6b65\u9aa4\u5982\u4e0b\u56fe\uff1a\n",(0,i.kt)("img",{src:n(41780).Z})),(0,i.kt)("h2",{id:"uml\u7c7b\u56fe"},(0,i.kt)("strong",{parentName:"h2"},"UML\u7c7b\u56fe")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(71567).Z})),(0,i.kt)("h2",{id:"scheduler\u7ebf\u7a0b\u6a21\u578b"},(0,i.kt)("strong",{parentName:"h2"},"Scheduler\u7ebf\u7a0b\u6a21\u578b")),(0,i.kt)("p",null,"\u9700\u8981\u4fdd\u8bc1Restful\u7684\u7ebf\u7a0b\u6c60\u4e0d\u88ab\u586b\u6ee1"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(75519).Z})),(0,i.kt)("p",null,"\u65f6\u5e8f\u56fe\u5982\u4e0b\uff1a\n",(0,i.kt)("img",{src:n(59020).Z})))}d.isMDXComponent=!0},41780:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-service-01-5b0d7f7344f7f400a13356ec948aeb6e.png"},71567:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-service-02-cde12874c800aa27c9c7d677a7a30e4f.png"},75519:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-service-03-95159d79adfcbe6ac360043ec9b419b8.png"},59020:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-service-04-d44ddd66397a140d8935e93ca5fd272a.png"}}]);