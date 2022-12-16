"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[18644],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=i,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40255:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"ECM Management",sidebar_position:5},o=void 0,s={unversionedId:"user-guide/control-panel/ecm-management",id:"user-guide/control-panel/ecm-management",isDocsHomePage:!1,title:"ECM Management",description:"The ECM management interface is only visible to Linkis Computing Management Console administrators. This page is used to manage ECM and all engines. On this interface, you can view the status information of the ECM, modify the ECM label information, modify the ECM status information, and query all engine information under each ECM.",source:"@site/docs/user-guide/control-panel/ecm-management.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/ecm-management",permalink:"/docs/1.3.1/user-guide/control-panel/ecm-management",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/user-guide/control-panel/ecm-management.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"ECM Management",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Spark Engine Parameter Adjustment",permalink:"/docs/1.3.1/user-guide/control-panel/spark-param"},next:{title:"Limit Parameter Adjustment",permalink:"/docs/1.3.1/user-guide/control-panel/resource-limit"}},c=[{value:"1. Instance view",id:"1-instance-view",children:[]},{value:"2. Tag management",id:"2-tag-management",children:[]},{value:"3. Engine information under ECM",id:"3-engine-information-under-ecm",children:[]}],l={toc:c};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ECM management interface is only visible to Linkis Computing Management Console administrators. This page is used to manage ECM and all engines. On this interface, you can view the status information of the ECM, modify the ECM label information, modify the ECM status information, and query all engine information under each ECM."),(0,i.kt)("h2",{id:"1-instance-view"},"1. Instance view"),(0,i.kt)("p",null,"An ECM instance is an ECM service. Users can start multiple ECM services according to requirements to improve request processing efficiency. On this page, you can view ECM instance information, including name, label, and resource information. In addition, ECM instances can be filtered through keywords such as instance name, status, and creator."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(51291).Z})),(0,i.kt)("h2",{id:"2-tag-management"},"2. Tag management"),(0,i.kt)("p",null,"The ECM service filters and processes requests based on tags. Each service contains default labels and user-defined labels. Only the request carrying the label information of the ECM service will be processed by the current service. Click the Edit button to edit the label information of the ECM (only user-defined labels are allowed), and modify the status of the ECM."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(50944).Z})),(0,i.kt)("p",null,"The most commonly used is the tenant label tenant, through which users can isolate tenant requests."),(0,i.kt)("h2",{id:"3-engine-information-under-ecm"},"3. Engine information under ECM"),(0,i.kt)("p",null,"Click the instance name of an ECM to view all engine information under the ECM. And manage the engine, including stopping the engine, adding or deleting user-defined tags, viewing engine logs, and other operations."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(55509).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(76659).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(71943).Z})),(0,i.kt)("p",null,"Similarly, after tagging the engine under the ECM instance, you can control the specific engine that processes the request in a finer granularity."))}u.isMDXComponent=!0},55509:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ecm-btn-45a39d4701040616dc6e99337ef3918e.png"},71943:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ecm-engine-label-875b14a7ddc573101aff1a559b5c0443.png"},76659:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ecm-engine-45a39d4701040616dc6e99337ef3918e.png"},51291:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ecm-management-14df8b56a2a04191aa72552945986ba2.png"},50944:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/edit-label-495211531caf48595515012c945f1d21.png"}}]);