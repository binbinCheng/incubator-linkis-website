"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[38468],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,k=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return t?o.createElement(k,r(r({ref:n},u),{},{components:t})):o.createElement(k,r({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34845:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(87462),i=(t(67294),t(3905));const a={title:"OpenLookEng Engine",sidebar_position:8},r=void 0,l={unversionedId:"engine-usage/openlookeng",id:"version-1.1.1/engine-usage/openlookeng",isDocsHomePage:!1,title:"OpenLookEng Engine",description:"This article mainly introduces the configuration, deployment and use of the openlookeng (>=1.1.1 version support) engine.",source:"@site/versioned_docs/version-1.1.1/engine-usage/openlookeng.md",sourceDirName:"engine-usage",slug:"/engine-usage/openlookeng",permalink:"/docs/1.1.1/engine-usage/openlookeng",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.1/engine-usage/openlookeng.md",tags:[],version:"1.1.1",sidebarPosition:8,frontMatter:{title:"OpenLookEng Engine",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Flink Engine Usage",permalink:"/docs/1.1.1/engine-usage/flink"},next:{title:"pipeline engine",permalink:"/docs/1.1.1/engine-usage/pipeline"}},s=[{value:"1. Environmental Requirements",id:"1-environmental-requirements",children:[]},{value:"2. Configuration and Deployment",id:"2-configuration-and-deployment",children:[{value:"2.1 version selection and compilation",id:"21-version-selection-and-compilation",children:[]},{value:"2.2 Deployment and loading of materials",id:"22-deployment-and-loading-of-materials",children:[]},{value:"2.3 Engine tags",id:"23-engine-tags",children:[]}]},{value:"3. The use of the engine",id:"3-the-use-of-the-engine",children:[{value:"Prepare for operation",id:"prepare-for-operation",children:[]},{value:"3.1 Using Linkis SDK",id:"31-using-linkis-sdk",children:[]},{value:"3.2 Task submission via Linkis-cli",id:"32-task-submission-via-linkis-cli",children:[]}]}],p={toc:s};function u(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article mainly introduces the configuration, deployment and use of the openlookeng (>=1.1.1 version support) engine."),(0,i.kt)("h2",{id:"1-environmental-requirements"},"1. Environmental Requirements"),(0,i.kt)("p",null,"If you want to deploy the openlookeng engine, you need to prepare an available openlookeng environment."),(0,i.kt)("h2",{id:"2-configuration-and-deployment"},"2. Configuration and Deployment"),(0,i.kt)("h3",{id:"21-version-selection-and-compilation"},"2.1 version selection and compilation"),(0,i.kt)("p",null,"Currently the openlookeng engine, the default version used by the client is ",(0,i.kt)("inlineCode",{parentName:"p"},"io.hetu.core:presto-client:1.5.0")),(0,i.kt)("p",null,"This engine plug-in is not included in the released installation deployment package by default.\nYou can follow this guide to deploy and install ",(0,i.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"),"\n, or follow the process below to manually compile and deploy"),(0,i.kt)("p",null,"Compile openlookeng separately"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"${linkis_code_dir}/linkis-enginepconn-lugins/engineconn-plugins/openlookeng/\nmvn clean install\n")),(0,i.kt)("h3",{id:"22-deployment-and-loading-of-materials"},"2.2 Deployment and loading of materials"),(0,i.kt)("p",null,"The engine package compiled in step 2.1 is located in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-plugins/engineconn-plugins/openlookeng/target/out/openlookeng\n")),(0,i.kt)("p",null,"Upload to the engine directory of the server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,i.kt)("p",null,"And restart linkis-engineplugin (or refresh through the engine interface)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon restart cg-engineplugin\n")),(0,i.kt)("h3",{id:"23-engine-tags"},"2.3 Engine tags"),(0,i.kt)("p",null,"Linkis1.X is done through tags, so we need to insert data into our database, and the insertion method is as follows."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin engine plugin installation")),(0,i.kt)("h2",{id:"3-the-use-of-the-engine"},"3. The use of the engine"),(0,i.kt)("h3",{id:"prepare-for-operation"},"Prepare for operation"),(0,i.kt)("p",null,"If the default parameters are not satisfied, you can configure some basic parameters through the parameter configuration page of the management console\nThe service connection information of openlookeng, the default address is ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(35852).Z})),(0,i.kt)("p",null,"Figure 3-1 openlookeng configuration information"),(0,i.kt)("p",null,"You can also configure it through the parameter params.configuration.runtime in the submit task interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Example of http request parameters\n{\n    "executionContent": {"code": "show databases;", "runType": "sql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "linkis.openlookeng.url":"http://127.0.0.1:9090"\n                                }\n                            }\n                    },\n    "source": {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n    "labels": {\n        "engineType": "openlookeng-1.5.0",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,i.kt)("h3",{id:"31-using-linkis-sdk"},"3.1 Using Linkis SDK"),(0,i.kt)("p",null,"Linkis provides Java and Scala SDKs to submit tasks to the Linkis server. For details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.1/user-guide/sdk-manual"},"JAVA SDK Manual"),".\nFor the openlookeng task, you only need to modify the EngineConnType and CodeType parameters in the Demo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "openlookeng-1.5.0"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "sql"); // required codeType\n')),(0,i.kt)("h3",{id:"32-task-submission-via-linkis-cli"},"3.2 Task submission via Linkis-cli"),(0,i.kt)("p",null,"After Linkis 1.0, the cli method is provided to submit tasks. We only need to specify the corresponding EngineConn and CodeType tag types. The use of openlookeng is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -engineType openlookeng-1.5.0 -codeType sql -code 'show databases;' -submitUser hadoop -proxyUser hadoop\n")),(0,i.kt)("p",null,"For specific usage, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.1/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."))}u.isMDXComponent=!0},35852:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/openlookeng-config-2df376b782443f32b528df56ce88d8b8.png"}}]);