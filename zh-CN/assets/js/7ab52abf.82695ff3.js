"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[669],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return k}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=a.createContext({}),u=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):p(p({},n),t)),e},d=function(t){var n=u(t.components);return a.createElement(o.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(e),k=r,x=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return e?a.createElement(x,p(p({ref:n},d),{},{components:e})):a.createElement(x,p({ref:n},d))}));function k(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=s;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=e[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},72361:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var a=e(87462),r=e(63366),l=(e(67294),e(3905)),p=["components"],i={title:"\u5386\u53f2\u4f5c\u4e1a\u63a5\u53e3",sidebar_position:3},o=void 0,u={unversionedId:"api/http/jobhistory-api",id:"api/http/jobhistory-api",isDocsHomePage:!1,title:"\u5386\u53f2\u4f5c\u4e1a\u63a5\u53e3",description:"* QueryRestfulApi \u7c7b *",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/http/jobhistory-api.md",sourceDirName:"api/http",slug:"/api/http/jobhistory-api",permalink:"/zh-CN/docs/1.1.2/api/http/jobhistory-api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/http/jobhistory-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5386\u53f2\u4f5c\u4e1a\u63a5\u53e3",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5143\u6570\u636e\u67e5\u8be2\u63a5\u53e3",permalink:"/zh-CN/docs/1.1.2/api/http/metadatamanager-api"},next:{title:"\u5f15\u64ce\u63d2\u4ef6api",permalink:"/zh-CN/docs/1.1.2/api/http/engine-plugin-api"}},d=[{value:"\u5224\u65ad\u7528\u6237\u662f\u5426\u662f\u7ba1\u7406\u5458",id:"\u5224\u65ad\u7528\u6237\u662f\u5426\u662f\u7ba1\u7406\u5458",children:[]},{value:"\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868",id:"\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868",children:[]},{value:"\u5386\u53f2\u4efb\u52a1\u5217\u8868",id:"\u5386\u53f2\u4efb\u52a1\u5217\u8868",children:[]},{value:"\u672a\u5b8c\u6210\u7684\u5386\u53f2\u4efb\u52a1\u5217\u8868",id:"\u672a\u5b8c\u6210\u7684\u5386\u53f2\u4efb\u52a1\u5217\u8868",children:[]}],m={toc:d};function s(t){var n=t.components,e=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," QueryRestfulApi \u7c7b ")),(0,l.kt)("h2",{id:"\u5224\u65ad\u7528\u6237\u662f\u5426\u662f\u7ba1\u7406\u5458"},"\u5224\u65ad\u7528\u6237\u662f\u5426\u662f\u7ba1\u7406\u5458"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/governanceStationAdmin")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),": \u5224\u65ad\u7528\u6237\u662f\u5426\u662f\u7ba1\u7406\u5458"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":\n\u65e0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "admin": true\n    }\n}\n')),(0,l.kt)("h2",{id:"\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868"},"\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/{id}/get")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "task": {\n                "taskID": 1, \n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "FAILED",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5386\u53f2\u4efb\u52a1\u5217\u8868"},"\u5386\u53f2\u4efb\u52a1\u5217\u8868"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/list")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":\u5386\u53f2\u4efb\u52a1\u5217\u8868"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"taskID"),(0,l.kt)("td",{parentName:"tr",align:null},"taskID"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"executeApplicationName"),(0,l.kt)("td",{parentName:"tr",align:null},"executeApplicationName"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxyUser"),(0,l.kt)("td",{parentName:"tr",align:null},"proxyUser"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isAdminView"),(0,l.kt)("td",{parentName:"tr",align:null},"isAdminView"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n        "status": 0,\n        "message": "OK",\n        "data": {\n            "tasks": [{\n                "taskID": 1,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "FAILED",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            },\n            {\n                "taskID": 2,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "FAILED",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            }],\n            "totalPage": 1\n    }\n}\n')),(0,l.kt)("h2",{id:"\u672a\u5b8c\u6210\u7684\u5386\u53f2\u4efb\u52a1\u5217\u8868"},"\u672a\u5b8c\u6210\u7684\u5386\u53f2\u4efb\u52a1\u5217\u8868"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/listundone")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":\u672a\u5b8c\u6210\u7684\u5386\u53f2\u4efb\u52a1\u5217\u8868"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startTaskID"),(0,l.kt)("td",{parentName:"tr",align:null},"startTaskID"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"engineType"),(0,l.kt)("td",{parentName:"tr",align:null},"engineType"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"creator"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n        "status": 0,\n        "message": "OK",\n        "data": {\n            "tasks": [{\n                "taskID": 1,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "Running",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            },\n            {\n                "taskID": 2,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "Running",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            }],\n            "totalPage": 1\n    }\n}\n')))}s.isMDXComponent=!0}}]);