"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[16797],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),p=s(a),h=r,c=p["".concat(o,".").concat(h)]||p[h]||m[h]||i;return a?n.createElement(c,l(l({ref:e},u),{},{components:a})):n.createElement(c,l({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=p;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,l[1]=d;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},91939:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={title:"Custom Variable Design",sidebar_position:1},l=void 0,d={unversionedId:"architecture/commons/variable",id:"version-1.3.0/architecture/commons/variable",isDocsHomePage:!1,title:"Custom Variable Design",description:"1. General",source:"@site/versioned_docs/version-1.3.0/architecture/commons/variable.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/variable",permalink:"/docs/latest/architecture/commons/variable",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.3.0/architecture/commons/variable.md",tags:[],version:"1.3.0",sidebarPosition:1,frontMatter:{title:"Custom Variable Design",sidebar_position:1},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Difference Between 1.0 & 0.x",permalink:"/docs/latest/architecture/difference-between-1.0-and-0.x"},next:{title:"RPC Module",permalink:"/docs/latest/architecture/commons/rpc"}},o=[{value:"1. General",id:"1-general",children:[{value:"1.1 Requirements Background",id:"11-requirements-background",children:[]},{value:"1.2 Target",id:"12-target",children:[]}]},{value:"2. Overall Design",id:"2-overall-design",children:[{value:"2.1 Technical Architecture",id:"21-technical-architecture",children:[]}]},{value:"3. Function introduction",id:"3-function-introduction",children:[{value:"3.1 Built-in variables",id:"31-built-in-variables",children:[]},{value:"3.2 Custom variables",id:"32-custom-variables",children:[]},{value:"3.3 Variable scope",id:"33-variable-scope",children:[]}]}],s={toc:o};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-general"},"1. General"),(0,r.kt)("h3",{id:"11-requirements-background"},"1.1 Requirements Background"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Users want to be able to define some common variables when writing code and then replace them during execution. For example, users run the same sql in batches every day, and need to specify the partition time of the previous day. If based on sql It will be more complicated to write if the system provides a variable of run_date which will be very convenient to use."),(0,r.kt)("h3",{id:"12-target"},"1.2 Target"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Support variable substitution of task code"),(0,r.kt)("li",{parentName:"ol"},"Support custom variables, support users to define custom variables in scripts and task parameters submitted to Linkis, support simple +, - and other calculations"),(0,r.kt)("li",{parentName:"ol"},"Preset system variables: run_date, run_month, run_today and other system variables")),(0,r.kt)("h2",{id:"2-overall-design"},"2. Overall Design"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","During the execution of the Linkis task, the custom variables are carried out in Entrance, mainly through the interceptor of Entrance before the task is submitted and executed. The variable and the defined variable, and complete the code replacement through the initial value of the custom variable passed in by the task, and become the final executable code."),(0,r.kt)("h3",{id:"21-technical-architecture"},"2.1 Technical Architecture"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","The overall structure of custom variables is as follows. After the task is submitted, it will go through the variable replacement interceptor. First, all variables and expressions used in the code will be parsed, and then replaced with the system and user-defined initial values \u200b\u200bof variables, and finally the parsed code will be submitted to EngineConn for execution. So the underlying engine is already replaced code."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"var_arc",src:a(67529).Z})),(0,r.kt)("h2",{id:"3-function-introduction"},"3. Function introduction"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","The variable types supported by Linkis are divided into custom variables and system built-in variables. The internal variables are predefined by Linkis and can be used directly. Then different variable types support different calculation formats: String supports +, integer decimal supports +-*/, date supports +-."),(0,r.kt)("h3",{id:"31-built-in-variables"},"3.1 Built-in variables"),(0,r.kt)("p",null,"The currently supported built-in variables are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"variable name"),(0,r.kt)("th",{parentName:"tr",align:null},"variable type"),(0,r.kt)("th",{parentName:"tr",align:null},"variable meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"variable value example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","date"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Data statistics time (support user's own setting, the default setting is the day before the current time), if the data of yesterday is executed today, it will be the time of yesterday, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20180129")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","date","_","std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Data statistics time (standard date format), if yesterday's data is executed today, it will be yesterday's time, the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2018-01-29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_today"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The day after run_date (data statistics time), the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20211210")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_today_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The day after run_date (data statistics time) (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_mon"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The month of the data statistics time, the format is yyyyMM"),(0,r.kt)("td",{parentName:"tr",align:null},"202112")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_mon_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The month of the data statistics time (standard format), the format is yyyy-MM"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the month in which the data is counted, in the format yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20180101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","begin","_","std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the month where the data statistics time is (standard date format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2018-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the month where run_today is in the format yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20211201")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the month run_today (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the month in which the data is counted, in the format yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20180131")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","end","_","std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the month in which the data is counted (standard date format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2018-01-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the month where run_today is in the format yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20211231")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the month in which run_today is located (standard date format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the quarter in which the data is counted, in the format yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20210401")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the quarter in which the data is counted, in the format yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20210630")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the half year where the data statistics time is located, in the format yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20210101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the half year where the data statistics time is located, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20210630")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the year in which the data is counted, in the format yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20210101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the year in which the data is counted, in the format yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20211231")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the quarter in which the data is counted (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-10-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the quarter where the data statistics time is located (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the half year where the data statistics time is located (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-07-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the half year where the data statistics time is located (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the year in which the data is counted (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the year in which the data is counted (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-31")))),(0,r.kt)("p",null,"details:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"run_date is the core built-in date variable, which supports user-defined date. If not specified, the default is the day before the current system time."),(0,r.kt)("li",{parentName:"ol"},"Definition of other derived built-in date variables: other date built-in variables are calculated relative to run_date. Once run_date changes, other variable values \u200b\u200bwill also change automatically. Other date variables do not support setting initial values \u200b\u200band can only be modified by modifying run_date. ."),(0,r.kt)("li",{parentName:"ol"},"Built-in variables support more abundant usage scenarios: ${run_date-1} is the day before run_data; ${run_month_begin-1} is the first day of the previous month of run_month_begin, where -1 means minus one month.")),(0,r.kt)("h3",{id:"32-custom-variables"},"3.2 Custom variables"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","What are custom variables? User variables that are defined first and then used. User-defined variables temporarily support the definition of strings, integers, and floating-point variables. Strings support the + method, and integers and floating-point numbers support the +-*/ method. User-defined variables do not conflict with the set variable syntax supported by SparkSQL and HQL, but the same name is not allowed. How to define and use custom variables? as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"## Defined in the code, specified before the task code\nsql type definition method:\n--@set f=20.1\nThe python/shell types are defined as follows:\n#@set f=20.1\nNote: Only one variable can be defined on one line\n")),(0,r.kt)("p",null,"The use is directly used in the code through ",(0,r.kt)("inlineCode",{parentName:"p"},"{varName expression}, such as ${f*2}")),(0,r.kt)("h3",{id:"33-variable-scope"},"3.3 Variable scope"),(0,r.kt)("p",null,"Custom variables in linkis also have scope, and the priority is that the variable defined in the script is greater than the Variable defined in the task parameter is greater than the built-in run_date variable. The task parameters are defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'##restful\n{\n    "executionContent": {"code": "select \\"${f-1}\\";", "runType": "sql"},\n    "params": {\n                    "variable": {f: "20.1"},\n                    "configuration": {\n                            "runtime": {\n                                "linkis.openlookeng.url":"http://127.0.0.1:9090"\n                                }\n                            }\n                    },\n    "source": {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n    "labels": {\n        "engineType": "spark-2.4.3",\n        "userCreator": "hadoop-IDE"\n    }\n}\n## java SDK\nJobSubmitAction.builder\n  .addExecuteCode(code)\n  .setStartupParams(startupMap)\n  .setUser(user) //submit user\n  .addExecuteUser(user) //execute user\n  .setLabels(labels)\n  .setVariableMap(varMap) //setVar\n  .build\n')))}u.isMDXComponent=!0},67529:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/var_arc-c922fa1f418fb6125ecc7d0af1534c3c.png"}}]);