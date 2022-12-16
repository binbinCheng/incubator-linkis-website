"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[87673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25470:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Restful Api",sidebar_position:2},l=void 0,s={unversionedId:"api/rest-api",id:"version-0.11.0/api/rest-api",isDocsHomePage:!1,title:"Restful Api",description:"Linkis provides a convenient HTTP interface to facilitate the front-end upper application or the back-end to call through the Restful interface",source:"@site/versioned_docs/version-0.11.0/api/rest-api.md",sourceDirName:"api",slug:"/api/rest-api",permalink:"/docs/0.11.0/api/rest-api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/api/rest-api.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"Restful Api",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Login Api",permalink:"/docs/0.11.0/api/login-api"},next:{title:"WebSocket",permalink:"/docs/0.11.0/api/web-socket"}},p=[{value:"1 Linkis interface specification",id:"1-linkis-interface-specification",children:[]},{value:"2 HTTP interface summary",id:"2-http-interface-summary",children:[]},{value:"3 Interface details",id:"3-interface-details",children:[{value:"3.1 Submit for execution",id:"31-submit-for-execution",children:[]},{value:"3.2 Get status",id:"32-get-status",children:[]},{value:"3.3 Obtaining logs",id:"33-obtaining-logs",children:[]},{value:"3.4 Get progress",id:"34-get-progress",children:[]},{value:"3.5 kill task",id:"35-kill-task",children:[]},{value:"3.6 System User Agent Settings",id:"36-system-user-agent-settings",children:[]}]}],o={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Linkis provides a convenient HTTP interface to facilitate the front-end upper application or the back-end to call through the Restful interface")),(0,r.kt)("h2",{id:"1-linkis-interface-specification"},"1 Linkis interface specification"),(0,r.kt)("p",null,"Linkis defines its own set of interface specifications when interacting between the front and back ends."),(0,r.kt)("p",null,"If you are interested in the interface specification, please click here ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.3.1/development/development-specification/api"},"view interface specification")),(0,r.kt)("h2",{id:"2-http-interface-summary"},"2 HTTP interface summary"),(0,r.kt)("p",null,"We provide the following interfaces to facilitate users to quickly submit execution jobs and obtain execution results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Submit for execution"),(0,r.kt)("li",{parentName:"ul"},"Get status"),(0,r.kt)("li",{parentName:"ul"},"Get logs"),(0,r.kt)("li",{parentName:"ul"},"Get progress"),(0,r.kt)("li",{parentName:"ul"},"Kill mission")),(0,r.kt)("h2",{id:"3-interface-details"},"3 Interface details"),(0,r.kt)("h3",{id:"31-submit-for-execution"},"3.1 Submit for execution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/execute"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method":"/api/rest_j/v1/entrance/execute",\n "params": {\n    "variable":{\n    "k1":"v1"\n    },\n    "configuration":{\n    "special":{\n    "k2":"v2"\n    },\n    "runtime":{\n    "k3":"v3"\n    },\n    "startup":{\n    "k4":"v4"\n    }\n    }\n    },\n    "executeApplicationName":"spark",\n    "executionCode":"show tables",\n    "runType":"sql",\n    "source":{\n    "scriptPath": "/home/Linkis/Linkis.sql"\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The parameters in the request body data are described as follows")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executeApplicationName"),(0,r.kt)("td",{parentName:"tr",align:null},"The engine service that the user expects to use, such as Spark, hive, etc."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"cannot be empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requestApplicationName"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the system that initiated the request"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"User-specified parameters for running the service program"),(0,r.kt)("td",{parentName:"tr",align:null},"Map"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, the value inside can be empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executionCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Execution code submitted by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"cannot be empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runType"),(0,r.kt)("td",{parentName:"tr",align:null},"When users execute services such as spark, they can choose python, R, SQL, etc. runType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Cannot be empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scriptPath"),(0,r.kt)("td",{parentName:"tr",align:null},"The storage path of the script submitted by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"If it is an IDE, and executionCode cannot be empty at the same time")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Return to example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/execute",\n "status": 0,\n "message": "Request executed successfully",\n "data": {\n   "execID": "030418IDEhivebdpdwc010004:10087IDE_johnnwang_21",\n   "taskID": "123"\n }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"execID is the uniquely identified execution ID generated for the task after the user task is submitted to UJES. It is of String type. This ID is only useful when the task is running, similar to the concept of PID. ExecID is designed as (requestApplicationName length) (executeAppName length 1) (Instance length 2)${requestApplicationName}${executeApplicationName}${entranceInstance information ip+port}${requestApplicationName}",(0,r.kt)("em",{parentName:"li"},"${umUser}"),"${index}"),(0,r.kt)("li",{parentName:"ul"},"taskID is the unique ID of the task submitted by the user. This ID is generated by the database self-increment and is of Long type")),(0,r.kt)("h3",{id:"32-get-status"},"3.2 Get status"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/status"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Return to example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/status",\n "status": 0,\n "message": "Get status successful",\n "data": {\n   "execID": "${execID}",\n   "status": "Running"\n }\n}\n')),(0,r.kt)("h3",{id:"33-obtaining-logs"},"3.3 Obtaining logs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/log?fromLine=${fromLine}&size=${size}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The request parameter fromLine refers to the number of lines from which to get, and size refers to the number of lines of logs that this request gets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Return example, where the returned fromLine needs the parameters of the next log request"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/${execID}/log",\n  "status": 0,\n  "message": "Return log information",\n  "data": {\n    "execID": "${execID}",\n    "log": ["error log","warn log","info log", "all log"],\n    "fromLine": 56\n   }\n}\n')),(0,r.kt)("h3",{id:"34-get-progress"},"3.4 Get progress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/progress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),(0,r.kt)("br",null))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Return to example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/{execID}/progress",\n  "status": 0,\n  "message": "Return progress information",\n  "data": {\n    "execID": "${execID}",\n    "progress": 0.2,\n    "progressInfo": [\n        {\n        "id": "job-1",\n        "succeedTasks": 2,\n        "failedTasks": 0,\n        "runningTasks": 5,\n        "totalTasks": 10\n        },\n        {\n        "id": "job-2",\n        "succeedTasks": 5,\n        "failedTasks": 0,\n        "runningTasks": 5,\n        "totalTasks": 10\n        }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"35-kill-task"},"3.5 kill task"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/kill"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Return example, where the returned fromLine needs the parameters of the next log request"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/kill",\n "status": 0,\n "message": "OK",\n "data": {\n   "execID":"${execID}"\n  }\n}\n')),(0,r.kt)("h3",{id:"36-system-user-agent-settings"},"3.6 System User Agent Settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Gateway proxy settings"),(0,r.kt)("p",{parentName:"li"},"Modify the proxy.properties file in the gateway installation directory conf and add content:\ntoken=user1,user2"),(0,r.kt)("p",{parentName:"li"},"Note: The token is the secret key given to the system user, and the right is the other users that the system user can act as proxy. For example, token=*, the user is not restricted.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"http request proxy settings"),(0,r.kt)("p",{parentName:"li"}," Add two parameter settings to the Headers parameter of the request"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   Proxy-User = proxy user xxx\n   Validation-Code = system token configured by the gateway\n\n")))))}u.isMDXComponent=!0}}]);