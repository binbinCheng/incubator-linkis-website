"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7766],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},c=Object.keys(e);for(i=0;i<c.length;i++)t=c[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)t=c[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),l=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return i.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},v=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),v=l(t),d=n,m=v["".concat(s,".").concat(d)]||v[d]||p[d]||c;return t?i.createElement(m,o(o({ref:r},u),{},{components:t})):i.createElement(m,o({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=v;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var l=2;l<c;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}v.displayName="MDXCreateElement"},23715:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var i=t(87462),n=(t(67294),t(3905));const c={title:"Overview",sidebar_position:0},o=void 0,a={unversionedId:"architecture/overview",id:"version-1.1.2/architecture/overview",isDocsHomePage:!1,title:"Overview",description:"Linkis 1.0 divides all microservices into three categories: public enhancement services, computing governance services, and microservice governance services. The following figure shows the architecture of Linkis 1.0.",source:"@site/versioned_docs/version-1.1.2/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/docs/1.1.2/architecture/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.2/architecture/overview.md",tags:[],version:"1.1.2",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"UDF table structure",permalink:"/docs/1.1.2/table/udf-table"},next:{title:"Difference Between 1.0 And 0.x",permalink:"/docs/1.1.2/architecture/difference-between-1.0-and-0.x"}},s=[],l={toc:s};function u(e){let{components:r,...c}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,c,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Linkis 1.0 divides all microservices into three categories: public enhancement services, computing governance services, and microservice governance services. The following figure shows the architecture of Linkis 1.0."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Linkis1.0 Architecture Figure",src:t(14359).Z})),(0,n.kt)("p",null,"The specific responsibilities of each category are as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Public enhancement services are the material library services, context services, data source services and public services that Linkis 0.X has provided."),(0,n.kt)("li",{parentName:"ol"},"The microservice governance services are Spring Cloud Gateway, Eureka and Open Feign already provided by Linkis 0.X, and Linkis 1.0 will also provide support for Nacos"),(0,n.kt)("li",{parentName:"ol"},"Computing governance services are the core focus of Linkis 1.0, from submission, preparation to execution, overall three stages to comprehensively upgrade Linkis' ability to perform control over user tasks.")),(0,n.kt)("p",null,"The following is a directory listing of Linkis1.0 architecture documents:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The characteristics of Linkis1.0's architecture , please read ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.1.2/architecture/difference-between-1.0-and-0.x"},"The difference between Linkis1.0 and Linkis0.x"),"."),(0,n.kt)("li",{parentName:"ol"},"Linkis 1.0 public enhancement service related documents, please read ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.1.2/architecture/public-enhancement-services/overview"},"Public Enhancement Service"),"."),(0,n.kt)("li",{parentName:"ol"},"Linkis 1.0 microservice governance related documents, please read ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.1.2/architecture/microservice-governance-services/overview"},"Microservice Governance"),"."),(0,n.kt)("li",{parentName:"ol"},"Linkis 1.0 computing governance service related documents, please read ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.1.2/architecture/computation-governance-services/overview"},"Computation Governance Service"),".")))}u.isMDXComponent=!0},14359:(e,r,t)=>{t.d(r,{Z:()=>i});const i=t.p+"assets/images/Linkis1.0-architecture-e11ce51d9deb9c92a9e813e439c530d4.png"}}]);