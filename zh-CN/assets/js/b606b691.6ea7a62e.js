"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[96912],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),d=u(n),g=r,N=d["".concat(m,".").concat(g)]||d[g]||o[g]||l;return n?a.createElement(N,i(i({ref:e},k),{},{components:n})):a.createElement(N,i({ref:e},k))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30877:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return k},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={title:"EC\u8d44\u6e90\u4fe1\u606f\u7ba1\u7406",sidebar_position:4},m=void 0,u={unversionedId:"api/http/linkis-cg-linkismanager-api/ec-resource-management-api",id:"version-1.1.3/api/http/linkis-cg-linkismanager-api/ec-resource-management-api",isDocsHomePage:!1,title:"EC\u8d44\u6e90\u4fe1\u606f\u7ba1\u7406",description:"ECResourceInfoRestfulApi \u7c7b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/api/http/linkis-cg-linkismanager-api/ec-resource-management-api.md",sourceDirName:"api/http/linkis-cg-linkismanager-api",slug:"/api/http/linkis-cg-linkismanager-api/ec-resource-management-api",permalink:"/zh-CN/docs/1.1.3/api/http/linkis-cg-linkismanager-api/ec-resource-management-api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/api/http/linkis-cg-linkismanager-api/ec-resource-management-api.md",tags:[],version:"1.1.3",sidebarPosition:4,frontMatter:{title:"EC\u8d44\u6e90\u4fe1\u606f\u7ba1\u7406",sidebar_position:4},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"ECM\u8d44\u6e90\u7ba1\u7406",permalink:"/zh-CN/docs/1.1.3/api/http/linkis-cg-linkismanager-api/ecm-resource-management-api"},next:{title:"\u4e0a\u4e0b\u6587\u5386\u53f2\u8bb0\u5f55\u670d\u52a1",permalink:"/zh-CN/docs/1.1.3/api/http/linkis-ps-cs-api/context-history-service-api"}},k=[{value:"\u5220\u9664EC\u4fe1\u606f",id:"\u5220\u9664ec\u4fe1\u606f",children:[]},{value:"\u83b7\u53d6EC\u4fe1\u606f",id:"\u83b7\u53d6ec\u4fe1\u606f",children:[]}],o={toc:k};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ECResourceInfoRestfulApi \u7c7b")),(0,l.kt)("h2",{id:"\u5220\u9664ec\u4fe1\u606f"},"\u5220\u9664EC\u4fe1\u606f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/delete/{ticketid}}")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u5220\u9664EC\u4fe1\u606f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,l.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"204"),(0,l.kt)("td",{parentName:"tr",align:null},"No Content"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n "data": {},\n "message": "",\n "method": "",\n "status": 0\n}\n')),(0,l.kt)("h2",{id:"\u83b7\u53d6ec\u4fe1\u606f"},"\u83b7\u53d6EC\u4fe1\u606f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/get")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,l.kt)("inlineCode",{parentName:"p"},"GET")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":",(0,l.kt)("p",null,"\u83b7\u53d6EC\u4fe1\u606f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,l.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u72b6\u6001"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"Message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u53c2\u6570"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n "data": {},\n "message": "",\n "method": "",\n "status": 0\n}\n')))}d.isMDXComponent=!0}}]);