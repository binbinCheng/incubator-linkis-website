"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[24656],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(d,l(l({ref:n},g),{},{components:t})):a.createElement(d,l({ref:n},g))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const r={title:"Overview",sidebar_position:1},l="LinkisManager Architecture Design",o={unversionedId:"architecture/computation-governance-services/linkis-manager/overview",id:"version-1.3.0/architecture/computation-governance-services/linkis-manager/overview",title:"Overview",description:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As an independent microservice of Linkis, LinkisManager provides AppManager (application management), ResourceManager (resource management), and LabelManager (label management) capabilities. It can support multi-active deployment and has the characteristics of high availability and easy expansion.",source:"@site/versioned_docs/version-1.3.0/architecture/computation-governance-services/linkis-manager/overview.md",sourceDirName:"architecture/computation-governance-services/linkis-manager",slug:"/architecture/computation-governance-services/linkis-manager/overview",permalink:"/docs/latest/architecture/computation-governance-services/linkis-manager/overview",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.3.0/architecture/computation-governance-services/linkis-manager/overview.md",tags:[],version:"1.3.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"App Manager",permalink:"/docs/latest/architecture/computation-governance-services/linkis-manager/app-manager"},next:{title:"Resource Manager",permalink:"/docs/latest/architecture/computation-governance-services/linkis-manager/resource-manager"}},c={},s=[{value:"1. Architecture Diagram",id:"1-architecture-diagram",level:2},{value:"Noun explanation",id:"noun-explanation",level:3},{value:"2. Introduction to the second-level module",id:"2-introduction-to-the-second-level-module",level:2},{value:"2.1. Application management module linkis-application-manager",id:"21-application-management-module-linkis-application-manager",level:3},{value:"1. Architecture Diagram",id:"1-architecture-diagram-1",level:2},{value:"Noun explanation",id:"noun-explanation-1",level:3},{value:"2. Introduction to the second-level module",id:"2-introduction-to-the-second-level-module-1",level:2},{value:"2.1. Application management module linkis-application-manager",id:"21-application-management-module-linkis-application-manager-1",level:3},{value:"2. Label management module linkis-label-manager",id:"2-label-management-module-linkis-label-manager",level:3},{value:"4. Monitoring module linkis-manager-monitor",id:"4-monitoring-module-linkis-manager-monitor",level:3}],g={toc:s};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linkismanager-architecture-design"},"LinkisManager Architecture Design"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","As an independent microservice of Linkis, LinkisManager provides AppManager (application management), ResourceManager (resource management), and LabelManager (label management) capabilities. It can support multi-active deployment and has the characteristics of high availability and easy expansion.  "),(0,i.kt)("h2",{id:"1-architecture-diagram"},"1. Architecture Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture Diagram",src:t(3547).Z,width:"1200",height:"698"}),"  "),(0,i.kt)("h3",{id:"noun-explanation"},"Noun explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EngineConnManager (ECM): Engine Manager, used to start and manage engines."),(0,i.kt)("li",{parentName:"ul"},"EngineConn (EC): Engine connector, used to connect the underlying computing engine."),(0,i.kt)("li",{parentName:"ul"},"ResourceManager (RM): Resource Manager, used to manage node resources.")),(0,i.kt)("h2",{id:"2-introduction-to-the-second-level-module"},"2. Introduction to the second-level module"),(0,i.kt)("h3",{id:"21-application-management-module-linkis-application-manager"},"2.1. Application management module linkis-application-manager"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","AppManager is used for unified scheduling and management of engines:  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Interface/Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Main Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EMInfoService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConnManager information query and modification functions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EMRegisterService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConnManager registration function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EMEngineService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConnManager's creation, query, and closing functions of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineAskEngineService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the function of querying EngineConn")))),(0,i.kt)("h1",{id:"linkismanager-architecture-design-1"},"LinkisManager Architecture Design"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","As an independent microservice of Linkis, LinkisManager provides AppManager (application management), ResourceManager (resource management), and LabelManager (label management) capabilities. It can support multi-active deployment and has the characteristics of high availability and easy expansion.  "),(0,i.kt)("h2",{id:"1-architecture-diagram-1"},"1. Architecture Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture Diagram",src:t(3547).Z,width:"1200",height:"698"}),"  "),(0,i.kt)("h3",{id:"noun-explanation-1"},"Noun explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EngineConnManager (ECM): Engine Manager, used to start and manage engines."),(0,i.kt)("li",{parentName:"ul"},"EngineConn (EC): Engine connector, used to connect the underlying computing engine."),(0,i.kt)("li",{parentName:"ul"},"ResourceManager (RM): Resource Manager, used to manage node resources.")),(0,i.kt)("h2",{id:"2-introduction-to-the-second-level-module-1"},"2. Introduction to the second-level module"),(0,i.kt)("h3",{id:"21-application-management-module-linkis-application-manager-1"},"2.1. Application management module linkis-application-manager"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","AppManager is used for unified scheduling and management of engines:  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Interface/Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Main Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EMInfoService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConnManager information query and modification functions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EMRegisterService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConnManager registration function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EMEngineService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConnManager's creation, query, and closing functions of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineAskEngineService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the function of querying EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineConnStatusCallbackService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the function of processing EngineConn status callbacks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineCreateService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the function of creating EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineInfoService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines EngineConn query function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineKillService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the stop function of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineRecycleService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the recycling function of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineReuseService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the reuse function of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineStopService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the self-destruct function of EngineConn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EngineSwitchService"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the engine switching function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AMHeartbeatService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides EngineConnManager and EngineConn node heartbeat processing functions")))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The process of applying for an engine through AppManager is as follows:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"AppManager",src:t(79427).Z,width:"854",height:"601"}),"  "),(0,i.kt)("h3",{id:"2-label-management-module-linkis-label-manager"},"2. Label management module linkis-label-manager"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","LabelManager provides label management and analysis capabilities.  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Interface/Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Main Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LabelService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides the function of adding, deleting, modifying and checking labels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ResourceLabelService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides resource label management functions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UserLabelService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides user label management functions")))),(0,i.kt)("p",null,"The LabelManager architecture diagram is as follows:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"ResourceManager",src:t(21591).Z,width:"1558",height:"760"}),"  "),(0,i.kt)("h3",{id:"4-monitoring-module-linkis-manager-monitor"},"4. Monitoring module linkis-manager-monitor"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Monitor provides the function of node status monitoring."))}u.isMDXComponent=!0},79427:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/AppManager-01-dce0763edae9da9bd59a6589c3a76042.png"},3547:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/LinkisManager-01-157c5229093110f06fd878491e57bf2c.png"},21591:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ResourceManager-01-ec200341a43bb1a04fc091123438d093.png"}}]);