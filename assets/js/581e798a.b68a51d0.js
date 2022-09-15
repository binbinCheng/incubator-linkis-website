"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[42290],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,v=d["".concat(a,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(v,c(c({ref:t},u),{},{components:r})):n.createElement(v,c({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13334:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),c=["components"],s={title:"CS Architecture",sidebar_position:1},a=void 0,l={unversionedId:"architecture/public-enhancement-services/context-service/context-service",id:"version-1.1.2/architecture/public-enhancement-services/context-service/context-service",isDocsHomePage:!1,title:"CS Architecture",description:"ContextService Architecture",source:"@site/versioned_docs/version-1.1.2/architecture/public-enhancement-services/context-service/context-service.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/context-service",permalink:"/docs/1.1.2/architecture/public-enhancement-services/context-service/context-service",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.2/architecture/public-enhancement-services/context-service/context-service.md",tags:[],version:"1.1.2",sidebarPosition:1,frontMatter:{title:"CS Architecture",sidebar_position:1},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"CS Cache Architecture",permalink:"/docs/1.1.2/architecture/public-enhancement-services/context-service/context-service-cache"},next:{title:"CS Client Design",permalink:"/docs/1.1.2/architecture/public-enhancement-services/context-service/context-service-client"}},u=[{value:"<strong>ContextService Architecture</strong>",id:"contextservice-architecture",children:[{value:"<strong>Horizontal Division</strong>",id:"horizontal-division",children:[]},{value:"<strong>Vertical Division</strong>",id:"vertical-division",children:[]}]},{value:"<strong>UML Class Diagram</strong>",id:"uml-class-diagram",children:[]},{value:"<strong>Scheduler thread model</strong>",id:"scheduler-thread-model",children:[]}],p={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"contextservice-architecture"},(0,o.kt)("strong",{parentName:"h2"},"ContextService Architecture")),(0,o.kt)("h3",{id:"horizontal-division"},(0,o.kt)("strong",{parentName:"h3"},"Horizontal Division")),(0,o.kt)("p",null,"Horizontally divided into three modules: Restful, Scheduler, Service"),(0,o.kt)("h4",{id:"restful-responsibilities"},"Restful Responsibilities"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Encapsulate the request as httpjob and submit it to the Scheduler\n")),(0,o.kt)("h4",{id:"scheduler-responsibilities"},"Scheduler Responsibilities"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Find the corresponding service through the ServiceName of the httpjob protocol to execute the job\n")),(0,o.kt)("h4",{id:"service-responsibilities"},"Service Responsibilities"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"The module that actually executes the request logic, encapsulates the ResponseProtocol, and wakes up the wait thread in Restful\n")),(0,o.kt)("h3",{id:"vertical-division"},(0,o.kt)("strong",{parentName:"h3"},"Vertical Division")),(0,o.kt)("p",null,"Vertically divided into 4 modules: Listener, History, ContextId, Context:"),(0,o.kt)("h4",{id:"listener-responsibilities"},"Listener responsibilities"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Responsible for the registration and binding of the client side (write to the database and register in the CallbackEngine)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Heartbeat interface, return Array","[ListenerCallback]"," through CallbackEngine"))),(0,o.kt)("h4",{id:"history-responsibilities"},"History Responsibilities"),(0,o.kt)("p",null,"Create and remove history, operate Persistence for DB persistence"),(0,o.kt)("h4",{id:"contextid-responsibilities"},"ContextId Responsibilities"),(0,o.kt)("p",null,"Mainly docking with Persistence for ContextId creation, update and removal, etc."),(0,o.kt)("h4",{id:"context-responsibility"},"Context responsibility"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For removal, reset and other methods, first operate Persistence for DB persistence, and update ContextCache")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Encapsulate the query condition and go to the ContextSearch module to obtain the corresponding ContextKeyValue data"))),(0,o.kt)("p",null,"The steps for requesting access are as follows:\n",(0,o.kt)("img",{src:r(46017).Z})),(0,o.kt)("h2",{id:"uml-class-diagram"},(0,o.kt)("strong",{parentName:"h2"},"UML Class Diagram")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(19527).Z})),(0,o.kt)("h2",{id:"scheduler-thread-model"},(0,o.kt)("strong",{parentName:"h2"},"Scheduler thread model")),(0,o.kt)("p",null,"Need to ensure that Restful's thread pool is not filled"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(37125).Z})),(0,o.kt)("p",null,"The sequence diagram is as follows:\n",(0,o.kt)("img",{src:r(16638).Z})))}d.isMDXComponent=!0},46017:function(e,t,r){t.Z=r.p+"assets/images/linkis-contextservice-service-01-0485b2ab2a1dda7825e8a6e80fbd32a6.png"},19527:function(e,t,r){t.Z=r.p+"assets/images/linkis-contextservice-service-02-2f79607f5b69bcfd7b73000d5ae61eb5.png"},37125:function(e,t,r){t.Z=r.p+"assets/images/linkis-contextservice-service-03-95159d79adfcbe6ac360043ec9b419b8.png"},16638:function(e,t,r){t.Z=r.p+"assets/images/linkis-contextservice-service-04-d44ddd66397a140d8935e93ca5fd272a.png"}}]);