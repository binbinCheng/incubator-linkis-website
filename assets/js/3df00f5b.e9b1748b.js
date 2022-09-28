"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7353],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,v=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(v,l(l({ref:t},u),{},{components:n})):a.createElement(v,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21291:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Overview",sidebar_position:0},c="PublicEnhencementService (PS) architecture design",s={unversionedId:"architecture/public_enhancement_services/overview",id:"version-1.1.0/architecture/public_enhancement_services/overview",isDocsHomePage:!1,title:"Overview",description:"PublicEnhancementService (PS): Public enhancement service, a module that provides functions such as unified configuration management, context service, physical library, data source management, microservice management, and historical task query for other microservice modules.",source:"@site/versioned_docs/version-1.1.0/architecture/public_enhancement_services/overview.md",sourceDirName:"architecture/public_enhancement_services",slug:"/architecture/public_enhancement_services/overview",permalink:"/docs/1.1.0/architecture/public_enhancement_services/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.0/architecture/public_enhancement_services/overview.md",tags:[],version:"1.1.0",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Linkis-Client Architecture Design",permalink:"/docs/1.1.0/architecture/computation_governance_services/linkis-cli"},next:{title:"Public Service",permalink:"/docs/1.1.0/architecture/public_enhancement_services/public_service"}},u=[{value:"BML material library",id:"bml-material-library",children:[]},{value:"Unified configuration management",id:"unified-configuration-management",children:[]},{value:"ContextService context service",id:"contextservice-context-service",children:[]},{value:"Datasource data source management",id:"datasource-data-source-management",children:[]},{value:"InstanceLabel microservice management",id:"instancelabel-microservice-management",children:[]},{value:"Jobhistory historical task management",id:"jobhistory-historical-task-management",children:[]},{value:"Variable user-defined variable management",id:"variable-user-defined-variable-management",children:[]},{value:"UDF user-defined function management",id:"udf-user-defined-function-management",children:[]}],m={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"publicenhencementservice-ps-architecture-design"},"PublicEnhencementService (PS) architecture design"),(0,i.kt)("p",null,"PublicEnhancementService (PS): Public enhancement service, a module that provides functions such as unified configuration management, context service, physical library, data source management, microservice management, and historical task query for other microservice modules."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(75538).Z})),(0,i.kt)("h1",{id:"introduction-to-the-second-level-module"},"Introduction to the second-level module:"),(0,i.kt)("h2",{id:"bml-material-library"},"BML material library"),(0,i.kt)("p",null,"It is the linkis material management system, which is mainly used to store various file data of users, including user scripts, resource files, third-party Jar packages, etc., and can also store class libraries that need to be used when the engine runs."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UploadService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide resource upload service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DownloadService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide resource download service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ResourceManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides a unified management entry for uploading and downloading resources")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VersionManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides resource version marking and version management functions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ProjectManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides project-level resource management and control capabilities")))),(0,i.kt)("h2",{id:"unified-configuration-management"},"Unified configuration management"),(0,i.kt)("p",null,'Configuration provides a "user-engine-application" three-level configuration management solution, which provides users with the function of configuring custom engine parameters under various access applications.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CategoryService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides management services for application and engine catalogs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ConfigurationService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides a unified management service for user configuration")))),(0,i.kt)("h2",{id:"contextservice-context-service"},"ContextService context service"),(0,i.kt)("p",null,"ContextService is used to solve the problem of data and information sharing across multiple systems in a data application development process."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ContextCacheService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides a cache service for context information")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ContextClient"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides the ability for other microservices to interact with the CSServer group")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ContextHAManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide high-availability capabilities for ContextService")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ListenerManager"),(0,i.kt)("td",{parentName:"tr",align:null},"The ability to provide a message bus")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ContextSearch"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides query entry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ContextService"),(0,i.kt)("td",{parentName:"tr",align:null},"Implements the overall execution logic of the context service")))),(0,i.kt)("h2",{id:"datasource-data-source-management"},"Datasource data source management"),(0,i.kt)("p",null,"Datasource provides the ability to connect to different data sources for other microservices."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"datasource-server"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the ability to connect to different data sources")))),(0,i.kt)("h2",{id:"instancelabel-microservice-management"},"InstanceLabel microservice management"),(0,i.kt)("p",null,"InstanceLabel provides registration and labeling functions for other microservices connected to linkis."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"InsLabelService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides microservice registration and label management functions")))),(0,i.kt)("h2",{id:"jobhistory-historical-task-management"},"Jobhistory historical task management"),(0,i.kt)("p",null,"Jobhistory provides users with linkis historical task query, progress, log display related functions, and provides a unified historical task view for administrators."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JobHistoryQueryService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide historical task query service")))),(0,i.kt)("h2",{id:"variable-user-defined-variable-management"},"Variable user-defined variable management"),(0,i.kt)("p",null,"Variable provides users with functions related to the storage and use of custom variables."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VariableService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides functions related to the storage and use of custom variables")))),(0,i.kt)("h2",{id:"udf-user-defined-function-management"},"UDF user-defined function management"),(0,i.kt)("p",null,"UDF provides users with the function of custom functions, which can be introduced by users when writing code."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UDFService"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide user-defined function service")))))}d.isMDXComponent=!0},75538:function(e,t,n){t.Z=n.p+"assets/images/PublicEnhencementArchitecture-db0c27e2d15a4827045f158ce30b45ca.png"}}]);