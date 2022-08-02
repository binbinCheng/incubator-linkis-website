"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[41423],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76762:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={title:"Public Service",sidebar_position:1},s=void 0,l={unversionedId:"architecture/public_enhancement_services/public-service",id:"architecture/public_enhancement_services/public-service",isDocsHomePage:!1,title:"Public Service",description:"Background",source:"@site/docs/architecture/public_enhancement_services/public-service.md",sourceDirName:"architecture/public_enhancement_services",slug:"/architecture/public_enhancement_services/public-service",permalink:"/docs/1.1.3/architecture/public_enhancement_services/public-service",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/public_enhancement_services/public-service.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Public Service",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.1.3/architecture/public_enhancement_services/overview"},next:{title:"Overview",permalink:"/docs/1.1.3/architecture/public_enhancement_services/bml/overview"}},u=[{value:"<strong>Background</strong>",id:"background",children:[]},{value:"<strong>Architecture diagram</strong>",id:"architecture-diagram",children:[]},{value:"<strong>Architecture Introduction</strong>",id:"architecture-introduction",children:[]}],p={toc:u};function d(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},(0,a.kt)("strong",{parentName:"h2"},"Background")),(0,a.kt)("p",null,'PublicService is a comprehensive service composed of multiple sub-modules such as "configuration", "jobhistory", "udf", "variable", etc. Linkis\n1.0 added label management based on version 0.9. Linkis doesn\'t need to set the parameters every time during the execution of different jobs.\nMany variables, functions and configurations can be reused after the user completes the settings once, and of course that they can also be shared with other users.'),(0,a.kt)("h2",{id:"architecture-diagram"},(0,a.kt)("strong",{parentName:"h2"},"Architecture diagram")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(49080).Z})),(0,a.kt)("h2",{id:"architecture-introduction"},(0,a.kt)("strong",{parentName:"h2"},"Architecture Introduction")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"linkis-configuration\uff1aProvides query and save operations for global settings and general settings, especially engine configuration parameters.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'linkis-jobhistory\uff1aSpecially used for storage and query of historical execution task, users can obtain the historical tasks through the interface provided by "jobhistory", include logs, status and execution content.\nAt the same time, the historical task also support the paging query operation.The administrator can view all the historical tasks, but the ordinary users can only view their own tasks.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Linkis-udf\uff1aProvides the user function management capability in Linkis, which can be divided into shared functions, personal functions, system functions and the functions used by engine.\nOnce the user selects one, it will be automatically loaded for users to directly quote in the code and reuse between different scripts when the engine starting. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Linkis-variable\uff1aProvides the global variable management capability in Linkis, store and query the user-defined global variables\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'linkis-instance-label\uff1aProvides two modules named "label server" and "label client" for labeling Engine and EM. It also provides node-based label addition, deletion, modification and query capabilities.\nThe main functions are as follows:'))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Provides resource management capabilities for some specific labels to assist RM in more refined resource management.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Provides labeling capabilities for users. The user label will be automatically added for judgment when applying for the engine. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Provides the label analysis module, which can parse the users' request into a bunch of labels\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"With the ability of node label management, it is mainly used to provide the label  CRUD capability of the node and the label resource management to manage the resources of certain labels, marking the maximum resource, minimum resource and used resource of a Label."))))}d.isMDXComponent=!0},49080:function(e,t,n){t.Z=n.p+"assets/images/linkis-publicService-01-fe98364417c2879f8c12204e36ef6dfc.png"}}]);