"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[92519],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return s}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),o=u(a),s=r,N=o["".concat(m,".").concat(s)]||o[s]||k[s]||l;return a?n.createElement(N,p(p({ref:e},d),{},{components:a})):n.createElement(N,p({ref:e},d))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=o;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},5876:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return d},default:function(){return o}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=["components"],i={title:"Admin Console Home Page Interface",sidebar_position:28},m=void 0,u={unversionedId:"api/http/linkis-ps-publicservice-api/homepage-function-interface-api",id:"api/http/linkis-ps-publicservice-api/homepage-function-interface-api",isDocsHomePage:!1,title:"Admin Console Home Page Interface",description:"* QueryRestfulApi class *",source:"@site/docs/api/http/linkis-ps-publicservice-api/homepage-function-interface-api.md",sourceDirName:"api/http/linkis-ps-publicservice-api",slug:"/api/http/linkis-ps-publicservice-api/homepage-function-interface-api",permalink:"/docs/1.3.0/api/http/linkis-ps-publicservice-api/homepage-function-interface-api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/api/http/linkis-ps-publicservice-api/homepage-function-interface-api.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"Admin Console Home Page Interface",sidebar_position:28},sidebar:"tutorialSidebar",previous:{title:"File System Api",permalink:"/docs/1.3.0/api/http/linkis-ps-publicservice-api/file-system-api"},next:{title:"BM Project Operation Management",permalink:"/docs/1.3.0/api/http/linkis-ps-publicservice-api/bm-operation-management-api"}},d=[{value:"admin authentication",id:"admin-authentication",children:[]},{value:"global history",id:"global-history",children:[]},{value:"list undo",id:"list-undo",children:[]},{value:"History details",id:"history-details",children:[]}],k={toc:d};function o(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," QueryRestfulApi class ")),(0,l.kt)("h2",{id:"admin-authentication"},"admin authentication"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/governanceStationAdmin")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":",(0,l.kt)("p",null,"Used to verify whether it is an administrator, if it is, it will return true if it is not false")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("p",null,"No"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"request url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    data: {\n        solution: null,\n        admin: true\n    }\n    message: "OK"\n    method: "/api/jobhistory/governanceStationAdmin"\n    status: 0\n}\n')),(0,l.kt)("h2",{id:"global-history"},"global history"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/list")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":",(0,l.kt)("p",null,"Acquire global historical data list according to conditions and get all by default")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"Creator"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"End time"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int64)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"executeApplicationName"),(0,l.kt)("td",{parentName:"tr",align:null},"operator"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isAdminView"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether it is in administrator mode or normal mode"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of pages"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxyUser"),(0,l.kt)("td",{parentName:"tr",align:null},"Proxy User"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"Start time"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int64)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"end time"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"taskID"),(0,l.kt)("td",{parentName:"tr",align:null},"ID"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int64)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tpageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"page number"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"request url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    {\n        "method": "/api/jobhistory/list",\n        "status": 0,\n        "message": "OK",\n        "data": {\n            "solution": null,\n            "totalPage": 90,\n            "tasks": [{\n                "taskID": ,\n                "instance": ",\n                "execId": "",\n                "umUser": "",\n                "engineInstance": null,\n                "executionCode": "",\n                "progress": "",\n                "logPath": "",\n                "resultLocation": "",\n                "status": "",\n                "createdTime": ,\n                "updatedTime": ,\n                "engineType": "",\n                "errCode": 0,\n                "errDesc": "",\n                "executeApplicationName": "",\n                "requestApplicationName": "",\n                "runType": "datachecker",\n                "paramsJson": "",\n                "costTime": 1000,\n                "strongerExecId": "",\n                "sourceJson": "",\n                "sourceTailor": "",\n                "engineStartTime": null,\n                "labels": [],\n                "canRetry": ,\n                "subJobs":\n            }]\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"list-undo"},"list undo"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/listundone")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":",(0,l.kt)("p",null,"Undo list")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"End time"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int64)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"engineType"),(0,l.kt)("td",{parentName:"tr",align:null},"engineType"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"Start time"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startTaskID"),(0,l.kt)("td",{parentName:"tr",align:null},"startTaskID"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int64)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"request url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,l.kt)("h2",{id:"history-details"},"History details"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface address"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/{id}/get")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request method"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"*/*")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interface description"),":",(0,l.kt)("p",null,"Get the detailed information of a history through the history ID")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"Request type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"HistoryId"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int64)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"request url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": "/api/jobhistory/1928730/get",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "task": {\n            "taskID": ,\n            "instance": "",\n            "execId": "",\n            "umUser": "",\n            "engineInstance": "",\n            "executionCode": "",\n            "progress": "",\n            "logPath": "",\n            "resultLocation": "",\n            "status": "",\n            "createdTime":,\n            "updatedTime": ,\n            "engineType": "",\n            "errCode": ,\n            "errDesc": "",\n            "executeApplicationName": "",\n            "requestApplicationName": "",\n            "runType": "hql",\n            "paramsJson": "",\n            "costTime": ,\n            "strongerExecId": "",\n            "sourceJson": "",\n            "sourceTailor": "",\n            "engineStartTime": null,\n            "labels": [""],\n            "canRetry": false,\n            "subJobs": null\n        }\n    }\n}\n')))}o.isMDXComponent=!0}}]);