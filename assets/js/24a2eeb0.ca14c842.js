"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[40698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33399:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Introduction to Linkis Configuration Parameters",sidebar_position:1},s=void 0,o={unversionedId:"development/linkis-config",id:"version-1.1.1/development/linkis-config",isDocsHomePage:!1,title:"Introduction to Linkis Configuration Parameters",description:"1. Parameter classification",source:"@site/versioned_docs/version-1.1.1/development/linkis-config.md",sourceDirName:"development",slug:"/development/linkis-config",permalink:"/docs/1.1.1/development/linkis-config",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.1/development/linkis-config.md",tags:[],version:"1.1.1",sidebarPosition:1,frontMatter:{title:"Introduction to Linkis Configuration Parameters",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Compile And Package",permalink:"/docs/1.1.1/development/linkis-compile-and-package"},next:{title:"Linkis Debug",permalink:"/docs/1.1.1/development/linkis-debug"}},l=[{value:"1. Parameter classification",id:"1-parameter-classification",children:[]},{value:"2. Linkis server parameters",id:"2-linkis-server-parameters",children:[]},{value:"3. Linkis client parameters",id:"3-linkis-client-parameters",children:[]},{value:"4. Linkis console parameters",id:"4-linkis-console-parameters",children:[]}],p={toc:l};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-parameter-classification"},"1. Parameter classification"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis parameters are mainly divided into the following three parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Linkis server parameters, mainly including the parameters of Linkis itself and the parameters of Spring"),(0,r.kt)("li",{parentName:"ol"},"Parameters submitted by client calls such as Linkis SDK and Restful"),(0,r.kt)("li",{parentName:"ol"},"Linkis console parameters")),(0,r.kt)("h2",{id:"2-linkis-server-parameters"},"2. Linkis server parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Parameters of Linkis itself\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The parameters of linkis itself can be set in the configuration file, or through environment variables and system properties. It is recommended to use the configuration file to set.\nThe Linkis configuration file format is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 conf configuration directory\n\u2502 \u251c\u2500\u2500 application-eureka.yml\n\u2502 \u251c\u2500\u2500 application-linkis.yml\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager-io.properties\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager.properties\n\u2502 \u251c\u2500\u2500 linkis-cg-engineplugin.properties\n\u2502 \u251c\u2500\u2500 linkis-cg-entrance.properties\n\u2502 \u251c\u2500\u2500 linkis-cg-linkismanager.properties\n\u2502 \u251c\u2500\u2500 linkis.properties \u2500\u2500 linkis global properties\n\u2502 \u251c\u2500\u2500 linkis-ps-bml.properties\n\u2502 \u251c\u2500\u2500 linkis-ps-cs.properties\n\u2502 \u251c\u2500\u2500 linkis-ps-datasource.properties\n\u2502 \u251c\u2500\u2500 linkis-ps-publicservice.properties\n\u2502 \u251c\u2500\u2500 log4j2.xml\n")),(0,r.kt)("p",null,"Each service loads two property configuration files, a common main configuration file linkis.properties, and a service configuration file linkis-serviceName.properties. The priority of settings is that the service profile is higher than the main profile\nIt is recommended that common parameters be placed in the main configuration file, and individual configuration files are placed in the service configuration file"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Spring parameters\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis service is based on SpringBoot application, Spring related parameters can be set in application-linkis.yml or in linkis configuration file. The configuration in the linkis configuration file needs to be prefixed with spring. as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# spring port default\nserver.port=9102\n# in linkis conf need spring prefix\nspring.server.port=9102\n\n")),(0,r.kt)("h2",{id:"3-linkis-client-parameters"},"3. Linkis client parameters"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis client parameters mainly refer to the parameters when the task is submitted, mainly the parameters specified in the submission interface."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"How restful sets parameters:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "executionContent": {"code": "show tables", "runType": "sql"},\n    "params": { // submit parameters\n                        "variable":{ //Custom variables needed in the code\n                                "k1":"v1"\n                        },\n                        "configuration":{\n                                "special":{ //Special configuration parameters such as log path, result set path, etc.\n                                        "k2":"v2"\n                                },\n                                "runtime":{ //Runtime parameters, execution configuration parameters, such as database connection parameters of JDBC engine, data source parameters of presto engine\n                                        "k3":"v3"\n                                },\n                                "startup":{ //Startup parameters, such as memory parameters for starting EC, spark engine parameters, hive engine parameters, etc.\n                                        "k4":"v4" For example: spark.executor.memory:5G Set the Spark executor memory, the underlying Spark, hive and other engine parameters keyName are consistent with the native parameters\n                                }\n                        }\n                },\n    "labels": { //Label parameters, support setting engine version, user and application\n        "engineType": "spark-2.4.3",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"How to set parameters in SDK:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"JobSubmitAction jobSubmitAction = JobSubmitAction.builder()\n                .addExecuteCode(code)\n                .setStartupParams(startupMap) //Startup parameters, such as memory parameters for starting EC, spark engine parameters, hive engine parameters, etc., such as: spark.executor.memory:5G Set the Spark executor memory, the underlying Spark, hive and other engine parameters keyName is the same as the original parameter\n                .setRuntimeParams(runTimeMap) //Engine, execute configuration parameters, such as database connection parameters of JDBC engine, data source parameters of presto engine\n                .setVariableMap(varMap) //Custom variables needed in the code\n                .setLabels(labels) //Label parameters, support setting engine version, user and application, etc.\n                .setUser(user) //submit user\n                .addExecuteUser(user) // execute user\n                .build();\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"How linkis-cli sets parameters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"linkis-cli -runtieMap key1=value -runtieMap key2=value\n          -labelMap key1=value\n          -varMap key1=value\n          -startUpMap key1=value\n\n")),(0,r.kt)("p",null,"Note: When submitting client parameters, only engine-related parameters, tag parameters, and Yarn queue settings can take effect. Other Linkis server-side parameters and resource limit parameters, such as task and engine concurrency parameters wds.linkis.rm.instances do not support task settings"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Common label parameters:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'    Map<String, Object> labels = new HashMap<String, Object>();\n     labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // Specify engine type and version\n     labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-IDE");// Specify the running user and your APPName\n     labels.put(LabelKeyConstant.CODE_TYPE_KEY, "sql"); // Specify the type of script to run: spark supports: sql, scala, py; Hive: hql; shell: sh; python: python; presto: psql\n     labels.put(LabelKeyConstant.JOB_RUNNING_TIMEOUT_KEY, "10000");//The job runs for 10s and automatically initiates Kill, the unit is s\n     labels.put(LabelKeyConstant.JOB_QUEUING_TIMEOUT_KEY, "10000");//The job is queued for more than 10s and automatically initiates Kill, the unit is s\n     labels.put(LabelKeyConstant.RETRY_TIMEOUT_KEY, "10000");//The waiting time for the job to retry due to resources and other reasons, the unit is ms. If it fails due to insufficient queue resources, it will initiate 10 retries at intervals by default\n     labels.put(LabelKeyConstant.TENANT_KEY,"hduser02");//Tenant label, if the tenant parameter is specified for the task, the task will be routed to a separate ECM machine\n     labels.put(LabelKeyConstant.EXECUTE_ONCE_KEY,"");//Execute the label once, this parameter is not recommended to be set. After setting, the engine will not reuse the task and the engine will end after running. Only a certain task parameter can be specialized. set up\n')),(0,r.kt)("h2",{id:"4-linkis-console-parameters"},"4. Linkis console parameters"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis management console parameters are convenient for users to specify resource limit parameters and default task parameters. The web interface provided is as follows:\nGlobal configuration parameters:\n",(0,r.kt)("img",{src:n(2783).Z}),"\nIt mainly includes the global queue parameter ","[wds.linkis.rm.yarnqueue]",", the Yarn queue used by the task by default, which can be specified in the client StartUPMap.\nResource limit parameters, these parameters do not support task settings, but can be adjusted by the management console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Queue CPU usage upper limit [wds.linkis.rm.yarnqueue.cores.max], currently only supports limit the usage of total queue resources for Spark type tasks\nQueue memory usage limit [wds.linkis.rm.yarnqueue.memory.max]\nThe upper limit of the global memory usage of each engine [wds.linkis.rm.client.memory.max] This parameter does not refer to the total memory that can only be used, but specifies the total memory usage of a specific engine of a Creator, such as limiting the IDE-SPARK task to only Can use 10G memory\nThe maximum number of global engine cores [wds.linkis.rm.client.core.max] This parameter does not refer to the total number of CPUs that can only be used, but specifies the total memory usage of a specific engine of a Creator, such as limiting IDE-SPARK tasks Can only use 10Cores\nThe maximum concurrent number of each engine in the world [wds.linkis.rm.instance], this parameter has two meanings, one is to limit how many a Creator-specific engine can start in total, and to limit the tasks that a Creator-specific engine task can run at the same time number\n")),(0,r.kt)("p",null,"Engine configuration parameters:\n",(0,r.kt)("img",{src:n(22398).Z}),"\nIt mainly specifies the startup parameters and runtime parameters of the engine. These parameters can be set on the client side. It is recommended to use the client side for personalized submission settings. Only the default values \u200b\u200bare set on the page."))}c.isMDXComponent=!0},22398:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linkis_creator_ec_conf-a6fd39de358f4bd72c3335f319d9bdd9.png"},2783:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linkis_global_conf-039e3e727f7e331beaa2298d9f69b488.png"}}]);