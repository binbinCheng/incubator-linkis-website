"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7176],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98374:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],s={title:"CS Client Design",sidebar_position:3},c=void 0,l={unversionedId:"architecture/public_enhancement_services/context_service/context_service_client",id:"architecture/public_enhancement_services/context_service/context_service_client",isDocsHomePage:!1,title:"CS Client Design",description:"CSClient design ideas and implementation",source:"@site/docs/architecture/public_enhancement_services/context_service/context_service_client.md",sourceDirName:"architecture/public_enhancement_services/context_service",slug:"/architecture/public_enhancement_services/context_service/context_service_client",permalink:"/docs/1.1.2/architecture/public_enhancement_services/context_service/context_service_client",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/public_enhancement_services/context_service/context_service_client.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"CS Client Design",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CS Cache Architecture",permalink:"/docs/1.1.2/architecture/public_enhancement_services/context_service/context_service_cache"},next:{title:"CS HA Design",permalink:"/docs/1.1.2/architecture/public_enhancement_services/context_service/context_service_highavailable"}},d=[{value:"<strong>CSClient design ideas and implementation</strong>",id:"csclient-design-ideas-and-implementation",children:[{value:"1. The ability to apply for context objects",id:"1-the-ability-to-apply-for-context-objects",children:[]},{value:"2. Ability to register contextual information",id:"2-ability-to-register-contextual-information",children:[]},{value:"3. Ability to update registered context",id:"3-ability-to-update-registered-context",children:[]},{value:"4. The ability to get context",id:"4-the-ability-to-get-context",children:[]},{value:"5. Certain special microservices can sniff operations that have modified context information in cs-server",id:"5-certain-special-microservices-can-sniff-operations-that-have-modified-context-information-in-cs-server",children:[]},{value:"6. CSClient needs to provide a copy of all context information of csid1 as a new csid2 for scheduling execution",id:"6-csclient-needs-to-provide-a-copy-of-all-context-information-of-csid1-as-a-new-csid2-for-scheduling-execution",children:[]}]},{value:"<strong>Implementation of ClientListener Module</strong>",id:"implementation-of-clientlistener-module",children:[]},{value:"<strong>Implementation of GatewayRouter</strong>",id:"implementation-of-gatewayrouter",children:[]}],h={toc:d};function u(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"csclient-design-ideas-and-implementation"},(0,r.kt)("strong",{parentName:"h2"},"CSClient design ideas and implementation")),(0,r.kt)("p",null,"CSClient is a client that interacts with each microservice and CSServer group. CSClient needs to meet the following functions."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ability of microservices to apply for a context object from cs-server")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ability of microservices to register context information with cs-server")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ability of microservices to update context information to cs-server")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ability of microservices to obtain context information from cs-server")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Certain special microservices can sniff operations that have modified context information in cs-server")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"CSClient can give clear instructions when the csserver cluster fails")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"CSClient needs to provide a copy of all the context information of csid1 as a new csid2 for scheduling execution"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The overall approach is to send http requests through the linkis-httpclient that comes with linkis, and send requests and receive responses by implementing various Action and Result entity classes.")),(0,r.kt)("h3",{id:"1-the-ability-to-apply-for-context-objects"},"1. The ability to apply for context objects"),(0,r.kt)("p",null,"To apply for a context object, for example, if a user creates a new workflow on the front end, dss-server needs to apply for a context object from dss-server. When applying for a context object, the identification information (project name, workflow name) of the workflow needs to be passed through CSClient Send it to the CSServer (the gateway should be sent to one randomly at this time, because no csid information is carried at this time), once the application context returns the correct result, it will return a csid and bind the workflow."),(0,r.kt)("h3",{id:"2-ability-to-register-contextual-information"},"2. Ability to register contextual information"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ability to register context, for example, the user uploads a resource file on the front-end page, uploads the file content to dss-server, dss-server stores the content in bml, and then needs to register the resourceid and version obtained from bml to cs-server In this case, you need to use the ability of csclient to register. The ability to register is to pass in csid and cskey\nRegister with csvalue (resourceid and version).")),(0,r.kt)("h3",{id:"3-ability-to-update-registered-context"},"3. Ability to update registered context"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ability to update contextual information. For example, if a user uploads a resource file test.jar, csserver already has registered information. If the user updates the resource file when editing the workflow, then cs-server needs to update this content Update. At this time, you need to call the updated interface of csclient")),(0,r.kt)("h3",{id:"4-the-ability-to-get-context"},"4. The ability to get context"),(0,r.kt)("p",null,"The context information registered to csserver needs to be read when variable replacement, resource file download, and downstream nodes call upstream nodes to generate information. For example, when the engine side executes code, it needs to download bml resources. When you need to interact with csclient and csserver, get the resourceid and version of the file in bml and then download it."),(0,r.kt)("h3",{id:"5-certain-special-microservices-can-sniff-operations-that-have-modified-context-information-in-cs-server"},"5. Certain special microservices can sniff operations that have modified context information in cs-server"),(0,r.kt)("p",null,"This operation is based on the following example. For example, a widget node has a strong linkage with the upstream sql node. The user writes a sql in the sql node, and the metadata of the sql result set is a, b, and c. Field, the widget node behind is bound to this sql, you can edit these three fields on the page, and then the user changes the sql statement, the metadata becomes a, b, c, d four fields, this When the user needs to refresh manually. We hope that if the script is changed, the widget node can automatically update the metadata. This generally uses the listener mode. For simplicity, the heartbeat mechanism can also be used for polling."),(0,r.kt)("h3",{id:"6-csclient-needs-to-provide-a-copy-of-all-context-information-of-csid1-as-a-new-csid2-for-scheduling-execution"},"6. CSClient needs to provide a copy of all context information of csid1 as a new csid2 for scheduling execution"),(0,r.kt)("p",null,"Once the user publishes a project, he hopes to tag all the information of the project similar to git. The resource files and custom variables here will not change anymore, but there are some dynamic information, such as the result set generated. The content of csid will still be updated. So csclient needs to provide an interface for csid1 to copy all context information for microservices to call"),(0,r.kt)("h2",{id:"implementation-of-clientlistener-module"},(0,r.kt)("strong",{parentName:"h2"},"Implementation of ClientListener Module")),(0,r.kt)("p",null,"For a client, sometimes you want to know that a certain csid and cskey have changed in the cs-server as soon as possible. For example, the csclient of visualis needs to be able to know that the previous sql node has changed, then it needs to be notified , The server has a listener module, and the client also needs a listener module. For example, a client wants to be able to monitor the changes of a certain cskey of a certain csid, then he needs to register the cskey to the callbackEngine in the corresponding csserver instance, Subsequent, for example, another client changes the content of the cskey. When the first client performs a heatbeat, the callbackengine needs to notify all the cskeys that the client has listened to. In this case, the first client knows it. The content of the cskey has changed. When heatbeat returns data, we should notify all listeners registered to ContextClientListenerBus to use the on method"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(41434).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(54350).Z})),(0,r.kt)("h2",{id:"implementation-of-gatewayrouter"},(0,r.kt)("strong",{parentName:"h2"},"Implementation of GatewayRouter")),(0,r.kt)("p",null,"The Gateway plug-in implements Context forwarding. The forwarding logic of the Gateway plug-in is carried out through the GatewayRouter. It needs to be divided into two ways. The first is to apply for a context object. At this time, the information carried by the CSClient does not contain csid. For the information, the judgment logic at this time should be through the registration information of eureka, and the first request sent will randomly enter a microservice instance.\nThe second case is that the content of the ContextID is carried. We need to parse the csid. The way of parsing is to obtain the information of each instance through the method of string cutting, and then use eureka to determine whether this micro-channel still exists through the instance information. Service, if it exists, send it to this microservice instance"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1074).Z})))}u.isMDXComponent=!0},41434:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-client-01-ba8b0f09ba7796cf8409c2623c44471b.png"},54350:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-client-02-385b63d102d7a3728532b0f4a289e3e0.png"},1074:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-client-03-05ee50db6fcf9a3e4a2fdc0e328664d6.png"}}]);