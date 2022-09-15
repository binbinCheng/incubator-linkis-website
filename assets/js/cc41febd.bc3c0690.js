"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[13441],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),k=i,g=d["".concat(l,".").concat(k)]||d[k]||c[k]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98680:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],s={title:"Spark Engine Usage",sidebar_position:2},l=void 0,p={unversionedId:"engine-usage/spark",id:"version-1.1.1/engine-usage/spark",isDocsHomePage:!1,title:"Spark Engine Usage",description:"This article mainly introduces the configuration, deployment and use of spark EngineConn in Linkis1.0.",source:"@site/versioned_docs/version-1.1.1/engine-usage/spark.md",sourceDirName:"engine-usage",slug:"/engine-usage/spark",permalink:"/docs/1.1.1/engine-usage/spark",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.1/engine-usage/spark.md",tags:[],version:"1.1.1",sidebarPosition:2,frontMatter:{title:"Spark Engine Usage",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Shell Engine Usage",permalink:"/docs/1.1.1/engine-usage/shell"},next:{title:"Flink Engine Usage",permalink:"/docs/1.1.1/engine-usage/flink"}},u=[{value:"1. Environment configuration before using Spark EngineConn",id:"1-environment-configuration-before-using-spark-engineconn",children:[]},{value:"2. Configuration and deployment of Spark EngineConn",id:"2-configuration-and-deployment-of-spark-engineconn",children:[{value:"2.1 Selection and compilation of spark version",id:"21-selection-and-compilation-of-spark-version",children:[]},{value:"2.2 spark engineConn deployment and loading",id:"22-spark-engineconn-deployment-and-loading",children:[]},{value:"2.3 tags of spark EngineConn",id:"23-tags-of-spark-engineconn",children:[]}]},{value:"3. Use of spark EngineConn",id:"3-use-of-spark-engineconn",children:[{value:"Preparation for operation, queue setting",id:"preparation-for-operation-queue-setting",children:[]},{value:"3.1 How to use Linkis SDK",id:"31-how-to-use-linkis-sdk",children:[]},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",children:[]},{value:"3.3 How to use Scriptis",id:"33-how-to-use-scriptis",children:[]}]},{value:"4. Spark EngineConn user settings",id:"4-spark-engineconn-user-settings",children:[]}],c={toc:u};function d(e){var n=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article mainly introduces the configuration, deployment and use of spark EngineConn in Linkis1.0."),(0,r.kt)("h2",{id:"1-environment-configuration-before-using-spark-engineconn"},"1. Environment configuration before using Spark EngineConn"),(0,r.kt)("p",null,"If you want to use the spark EngineConn on your server, you need to ensure that the following environment variables have been set correctly and that the user who started the EngineConn has these environment variables."),(0,r.kt)("p",null,"It is strongly recommended that you check these environment variables of the executing user before executing spark tasks."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"JDK installation path"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop installation path"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop configuration path"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HIVE_CONF_DIR"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive configuration path"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPARK_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"Spark installation path"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPARK_CONF_DIR"),(0,r.kt)("td",{parentName:"tr",align:null},"Spark configuration path"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"python"),(0,r.kt)("td",{parentName:"tr",align:null},"python"),(0,r.kt)("td",{parentName:"tr",align:null},"Anaconda's python is recommended as the default python")))),(0,r.kt)("p",null,"Table 1-1 Environmental configuration list"),(0,r.kt)("h2",{id:"2-configuration-and-deployment-of-spark-engineconn"},"2. Configuration and deployment of Spark EngineConn"),(0,r.kt)("h3",{id:"21-selection-and-compilation-of-spark-version"},"2.1 Selection and compilation of spark version"),(0,r.kt)("p",null,"In theory, Linkis1.0 supports all versions of spark2.x and above. Spark 2.4.3 is the default supported version. If you want to use your spark version, such as spark2.1.0, you only need to modify the version of the plug-in spark and then compile it. Specifically, you can find the linkis-engineplugin-spark module, change the \\<spark.version",">"," tag to 2.1.0, and then compile this module separately."),(0,r.kt)("h3",{id:"22-spark-engineconn-deployment-and-loading"},"2.2 spark engineConn deployment and loading"),(0,r.kt)("p",null,"If you have already compiled your spark EngineConn plug-in has been compiled, then you need to put the new plug-in to the specified location to load, you can refer to the following article for details"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin Installation")),(0,r.kt)("h3",{id:"23-tags-of-spark-engineconn"},"2.3 tags of spark EngineConn"),(0,r.kt)("p",null,"Linkis1.0 is done through tags, so we need to insert data in our database, the way of inserting is shown below."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin Installation > 2.2 Configuration modification of management console (optional)")),(0,r.kt)("h2",{id:"3-use-of-spark-engineconn"},"3. Use of spark EngineConn"),(0,r.kt)("h3",{id:"preparation-for-operation-queue-setting"},"Preparation for operation, queue setting"),(0,r.kt)("p",null,"Because the execution of spark is a resource that requires a queue, the user must set up a queue that he can execute before executing."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(67117).Z})),(0,r.kt)("p",null,"Figure 3-1 Queue settings"),(0,r.kt)("p",null,"You can also add the queue value in the StartUpMap of the submission parameter: ",(0,r.kt)("inlineCode",{parentName:"p"},'startupMap.put("wds.linkis.rm.yarnqueue", "dws")')),(0,r.kt)("h3",{id:"31-how-to-use-linkis-sdk"},"3.1 How to use Linkis SDK"),(0,r.kt)("p",null,"Linkis  provides a client method to call Spark tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.1/user-guide/sdk-manual"},"JAVA SDK Manual"),".\nIf you use Hive, you only need to make the following changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "sql"); // required codeType\n')),(0,r.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,r.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of Spark is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'## codeType py--\x3epyspark  sql--\x3esparkSQL scala--\x3eSpark scala\nsh ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,r.kt)("p",null,"The specific usage can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.1/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,r.kt)("h3",{id:"33-how-to-use-scriptis"},"3.3 How to use Scriptis"),(0,r.kt)("p",null,"The use of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},"Scriptis")," is the simplest. You can directly enter Scriptis and create a new sql, scala or pyspark script for execution."),(0,r.kt)("p",null,"The sql method is the simplest. You can create a new sql script and write and execute it. When it is executed, the progress will be displayed. If the user does not have a spark EngineConn at the beginning, the execution of sql will start a spark session (it may take some time here),\nAfter the SparkSession is initialized, you can start to execute sql."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(82196).Z})),(0,r.kt)("p",null,"Figure 3-2 Screenshot of the execution effect of sparksql"),(0,r.kt)("p",null,"For spark-scala tasks, we have initialized sqlContext and other variables, and users can directly use this sqlContext to execute sql."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(91298).Z})),(0,r.kt)("p",null,"Figure 3-3 Execution effect diagram of spark-scala"),(0,r.kt)("p",null,"Similarly, in the way of pyspark, we have also initialized the SparkSession, and users can directly use spark.sql to execute SQL."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(47829).Z}),"\nFigure 3-4 pyspark execution mode"),(0,r.kt)("h2",{id:"4-spark-engineconn-user-settings"},"4. Spark EngineConn user settings"),(0,r.kt)("p",null,"In addition to the above EngineConn configuration, users can also make custom settings, such as the number of spark session executors and the memory of the executors. These parameters are for users to set their own spark parameters more freely, and other spark parameters can also be modified, such as the python version of pyspark."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(63593).Z})),(0,r.kt)("p",null,"Figure 4-1 Spark user-defined configuration management console"))}d.isMDXComponent=!0},47829:function(e,n,t){n.Z=t.p+"assets/images/pyspakr-run-6e37a518afe1e104834abe4adecbbbf2.png"},67117:function(e,n,t){n.Z=t.p+"assets/images/queue-set-7c9c3c2db8e77ce7f948909adfd80398.png"},91298:function(e,n,t){n.Z=t.p+"assets/images/scala-run-a2982b184c1e726e9746ac040910d775.png"},63593:function(e,n,t){n.Z=t.p+"assets/images/spark-conf-33d44a90c1e7ca6c23450b18555807aa.png"},82196:function(e,n,t){n.Z=t.p+"assets/images/sparksql-run-9ec9870b9a630c04ce166ffc6246aa17.png"}}]);