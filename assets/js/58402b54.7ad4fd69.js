"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[17034],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var s=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,s,n=function(e,t){if(null==e)return{};var i,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=s.createContext({}),u=function(e){var t=s.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(i),f=n,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return i?s.createElement(m,r(r({ref:t},p),{},{components:i})):s.createElement(m,r({ref:t},p))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var u=2;u<a;u++)r[u]=i[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,i)}d.displayName="MDXCreateElement"},11166:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=i(87462),n=(i(67294),i(3905));const a={title:"How to Use",sidebar_position:1},r="How to use Linkis?",o={unversionedId:"user-guide/how-to-use",id:"version-1.1.2/user-guide/how-to-use",isDocsHomePage:!1,title:"How to Use",description:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In order to meet the needs of different usage scenarios, Linkis provides a variety of usage and access methods, which can be summarized into three categories, namely Client-side use, Scriptis-side use, and DataSphere It is used on the Studio side, among which Scriptis and DataSphere Studio are the open source data analysis platforms of the WeBank Big Data Platform Room. Since these two projects are essentially compatible with Linkis, it is easiest to use Linkis through Scriptis and DataSphere Studio.",source:"@site/versioned_docs/version-1.1.2/user-guide/how-to-use.md",sourceDirName:"user-guide",slug:"/user-guide/how-to-use",permalink:"/docs/1.1.2/user-guide/how-to-use",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.2/user-guide/how-to-use.md",tags:[],version:"1.1.2",sidebarPosition:1,frontMatter:{title:"How to Use",sidebar_position:1},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.1.2/user-guide/overview"},next:{title:"JAVA SDK Manual",permalink:"/docs/1.1.2/user-guide/sdk-manual"}},c=[{value:"1. Client side usage",id:"1-client-side-usage",children:[]},{value:"2. Scriptis uses Linkis",id:"2-scriptis-uses-linkis",children:[]},{value:"2.1. Use Scriptis to execute scripts",id:"21-use-scriptis-to-execute-scripts",children:[]},{value:"2.2. Scriptis Management Console",id:"22-scriptis-management-console",children:[]},{value:"3. DataSphere Studio uses Linkis",id:"3-datasphere-studio-uses-linkis",children:[]}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-use-linkis"},"How to use Linkis?"),(0,n.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","In order to meet the needs of different usage scenarios, Linkis provides a variety of usage and access methods, which can be summarized into three categories, namely Client-side use, Scriptis-side use, and DataSphere It is used on the Studio side, among which Scriptis and DataSphere Studio are the open source data analysis platforms of the WeBank Big Data Platform Room. Since these two projects are essentially compatible with Linkis, it is easiest to use Linkis through Scriptis and DataSphere Studio."),(0,n.kt)("h2",{id:"1-client-side-usage"},"1. Client side usage"),(0,n.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","If you need to connect to other applications on the basis of Linkis, you need to develop the interface provided by Linkis. Linkis provides a variety of client access interfaces. For detailed usage introduction, please refer to the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.1.2/api/linkis-task-operator"},(0,n.kt)("strong",{parentName:"a"},"Restful API Usage"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.1.2/api/jdbc-api"},(0,n.kt)("strong",{parentName:"a"},"JDBC API Usage"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.1.2/user-guide/sdk-manual"},(0,n.kt)("strong",{parentName:"a"},"How \u200b\u200bto use Java SDK")))),(0,n.kt)("h2",{id:"2-scriptis-uses-linkis"},"2. Scriptis uses Linkis"),(0,n.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","If you need to use Linkis to complete interactive online analysis and processing, and you do not need data analysis application tools such as workflow development, workflow scheduling, data services, etc., you can Install ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},(0,n.kt)("strong",{parentName:"a"},"Scriptis"))," separately. For detailed installation tutorial, please refer to its corresponding installation and deployment documents."),(0,n.kt)("h2",{id:"21-use-scriptis-to-execute-scripts"},"2.1. Use Scriptis to execute scripts"),(0,n.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Currently Scriptis supports submitting a variety of task types to Linkis, including Spark SQL, Hive SQL, Scala, PythonSpark, etc. In order to meet the needs of data analysis, the left side of Scriptis, Provides viewing user workspace information, user database and table information, user-defined functions, and HDFS directories. It also supports uploading and downloading, result set exporting and other functions. Scriptis is very simple to use Linkis, you can easily write scripts in the edit bar, and submit them to Linkis to run.\n",(0,n.kt)("img",{alt:"Scriptis uses Linkis",src:i(66017).Z})),(0,n.kt)("h2",{id:"22-scriptis-management-console"},"2.2. Scriptis Management Console"),(0,n.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis provides an interface for resource configuration and management. If you want to configure and manage task resources, you can set it on the Scriptis management console interface, including queue settings and resource configuration , The number of engine instances, etc. Through the management console, you can easily configure the resources for submitting tasks to Linkis, making it more convenient and faster.\n",(0,n.kt)("img",{alt:"Scriptis uses Linkis",src:i(69997).Z})),(0,n.kt)("h2",{id:"3-datasphere-studio-uses-linkis"},"3. DataSphere Studio uses Linkis"),(0,n.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/DataSphereStudio"},(0,n.kt)("strong",{parentName:"a"},"DataSphere Studio")),", referred to as DSS, is an open source part of WeBank\u2019s big data platform Station-type data analysis and processing platform, the DSS interactive analysis module integrates Scriptis. Using DSS for interactive analysis is the same as Scriptis. In addition to providing the basic functions of Scriptis, DSS provides and integrates richer and more powerful data analysis functions, including Data services for data extraction, workflow for developing reports, visual analysis software Visualis, etc. Due to native support, DSS is currently the most integrated software with Linkis. If you want to use the complete Linkis function, it is recommended to use DSS with Linkis.\n",(0,n.kt)("img",{alt:"DSS Run Workflow",src:i(74468).Z})))}p.isMDXComponent=!0},69997:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/queue_set-f1b8b581fb86c824571ae840d1d863c5.png"},66017:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/sparksql_run-70b79534055603f0f9d5d2e1a81b141f.png"},74468:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/workflow-ad7a013941932042b55bfdb883e24fd4.png"}}]);