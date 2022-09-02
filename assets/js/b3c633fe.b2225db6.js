"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[34617],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return m}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=i.createContext({}),p=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,k=h["".concat(u,".").concat(m)]||h[m]||c[m]||r;return a?i.createElement(k,l(l({ref:t},o),{},{components:a})):i.createElement(k,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1400:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return o},default:function(){return h}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),l=["components"],s={title:"Release Notes 1.2.0-RC1",sidebar_position:.18},u=void 0,p={unversionedId:"release-notes-1.2.0",id:"release-notes-1.2.0",title:"Release Notes 1.2.0-RC1",description:"Apache Linkis(incubating) 1.2.0 includes all of Project Linkis-1.2.0.",source:"@site/download/release-notes-1.2.0.md",sourceDirName:".",slug:"/release-notes-1.2.0",permalink:"/download/release-notes-1.2.0",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/download/release-notes-1.2.0.md",tags:[],version:"current",sidebarPosition:.18,frontMatter:{title:"Release Notes 1.2.0-RC1",sidebar_position:.18},sidebar:"defaultSidebar",previous:{title:"Release List",permalink:"/download/main"},next:{title:"Release Notes 1.1.3",permalink:"/download/release-notes-1.1.3"}},o=[{value:"New Feature",id:"new-feature",children:[],level:2},{value:"Enhancement",id:"enhancement",children:[],level:2},{value:"Bugs Fix",id:"bugs-fix",children:[],level:2},{value:"Security related",id:"security-related",children:[],level:2},{value:"Dependency changes",id:"dependency-changes",children:[],level:2},{value:"Thanks",id:"thanks",children:[],level:2}],c={toc:o};function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.2.0 includes all of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/projects/12"},"Project Linkis-1.2.0"),"."),(0,r.kt)("p",null,"This release mainly supports Presto and ElasticSearch engines for Linkis 1.X architecture, enhances JDBC engine to support configuration multiple data source, supports displaying historical engine information on web, reduced and optimized Linkis modules, improved test cases for some engines, and made a lot of bug fixes and feature improvements."),(0,r.kt)("p",null,"The main functions are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added support for Presto engine"),(0,r.kt)("li",{parentName:"ul"},"Added support for ElasticSearch engine"),(0,r.kt)("li",{parentName:"ul"},"Added features to JDBC engine to support data source mode"),(0,r.kt)("li",{parentName:"ul"},"Reduce and optimize Linkis modules"),(0,r.kt)("li",{parentName:"ul"},"Data source module interface optimization")),(0,r.kt)("p",null,"Abbreviations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"COMMON: Linkis Common"),(0,r.kt)("li",{parentName:"ul"},"EC: Engineconn"),(0,r.kt)("li",{parentName:"ul"},"ECM: EngineConnManager"),(0,r.kt)("li",{parentName:"ul"},"ECP: EngineConnPlugin"),(0,r.kt)("li",{parentName:"ul"},"DMS: Data Source Manager Service"),(0,r.kt)("li",{parentName:"ul"},"MDS: MetaData Manager Service"),(0,r.kt)("li",{parentName:"ul"},"LM: Linkis Manager"),(0,r.kt)("li",{parentName:"ul"},"PS: Linkis Public Service"),(0,r.kt)("li",{parentName:"ul"},"PE: Linkis Public Enhancement"),(0,r.kt)("li",{parentName:"ul"},"RPC: Linkis Common RPC"),(0,r.kt)("li",{parentName:"ul"},"CG: Linkis Computation Governance")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"new-feature"},"New Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","ECP-PRESTO]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1631"},"[LINKIS-1631]")," Enhance PrestoEngine, adatps to Linkis1.X architecture"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-ES]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1632"},"[LINKIS-1632]")," Enhance ElasticSearchEngine, adatps to Linkis1.X architecture"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2092"},"[LINKIS-2092]")," Linkis jdbc engine supports multiple data source links"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2191"},"[LINKIS-2191]")," Add common rest api offline for all services"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2222"},"[LINKIS-2222]")," Single LinkisEntrance task metrics collection"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2227"},"[LINKIS-2227]")," Add ECR history query interface"),(0,r.kt)("li",{parentName:"ul"},"[","WEB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2227"},"[LINKIS-2227]")," Support displaying history EngineConn information"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2257"},"[LINKIS-2257]")," Gateway supports forwarding non-execution related requests of Entrance"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2258"},"[LINKIS-2258]")," Added feature to clean up running tasks when the Entrance process exits normally"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2277"},"[LINKIS-2277]")," In the workspace, files can be moved to another folder"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2288"},"[LINKIS-2288]")," Added query interface for unfinished tasks"),(0,r.kt)("li",{parentName:"ul"},"[","CG]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2291"},"[LINKIS-2291]")," Entrance support isolation by routing labels"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]","[","CG]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2320"},"[LINKIS-2320]")," Entrance adds restful interface to support modifying routelabel"),(0,r.kt)("li",{parentName:"ul"},"[","CG]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2326"},"[LINKIS-2326]")," Linkis tasks support automatic retry"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2366"},"[LINKIS-2366]")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2434"},"[LINKIS-2434]")," Support knif4j"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2392"},"[LINKIS-2392]")," Jdbc engine support trino"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2415"},"[LINKIS-2415]")," Support variable operation")),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1411"},"[LINKIS-1411]")," Remove sun.misc.BASE64"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1475"},"[LINKIS-1475]")," Optimize code style"),(0,r.kt)("li",{parentName:"ul"},"[","LM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1763"},"[LINKIS-1763]")," Add non empty validation to the applicationlist interface"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1824"},"[LINKIS-1824]")," Update commons-lang to commons-lang3"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]","[","CG]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2077"},"[LINKIS-2077]")," Optimized to automatically refresh all LinkisManager caches after modifying parameters for the management console"),(0,r.kt)("li",{parentName:"ul"},"[","DMS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2082"},"[LINKIS-2082]")," DataSource Manager module optimization"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2140"},"[LINKIS-2140]")," Consistent adjustment of JDBC connection parameters in the JDBC engine"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2141"},"[LINKIS-2141]")," Change dbcp to druid in JDBC engine"),(0,r.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2193"},"[LINKIS-2193]")," Add graceful upgrade script"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2194"},"[LINKIS-2194]")," Cancel the supportedDBs in the jdbc engine ConnectionManager.java and add the parameter wds.linkis.jdbc.driver"),(0,r.kt)("li",{parentName:"ul"},"[","DMS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2212"},"[LINKIS-2212]")," Add the default DWSClientConfig constructor for LinkisDataSourceRemoteClient to simplify the client API for internal microservices to call data source services"),(0,r.kt)("li",{parentName:"ul"},"[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2214"},"[LINKIS-2214]")," In the engine material refresh interface, refeshAll and refesh are changed to refreshAll and refresh"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-PYTHON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2216"},"[LINKIS-2216]")," The python plt show method directly supports display"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2217"},"[LINKIS-2217]")," Added trino engine type"),(0,r.kt)("li",{parentName:"ul"},"[","CG]","[","ECP]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2264"},"[LINKIS-2264]")," Module optimization reduces the number of modules"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2278"},"[LINKIS-2278]")," Add test case for jdbc engine"),(0,r.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2293"},"[LINKIS-2293]")," Add port check in install.sh"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2299"},"[LINKIS-2299]")," Add built-in variables run_today_h and run_today_h_std"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2344"},"[LINKIS-2344]")," Optimize metadata sql"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2352"},"[LINKIS-2352]")," Optimize CS module and reduce the number of modules"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2362"},"[LINKIS-2362]")," Move the linkis-engineconn-plugin-framework to linkis-cg module"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2368"},"[LINKIS-2368]")," Automatically create workspace for newly added users"),(0,r.kt)("li",{parentName:"ul"},"[","PACKAGE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2374"},"[LINKIS-2374]")," Optimize of linkis assamble-combined-package module"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2396"},"[LINKIS-2396]")," Remove the use of Logging's deprecated method"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SPARK]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2405"},"[LINKIS-2405]")," Support scala multi-version of spark"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SPARK]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2419"},"[LINKIS-2419]")," Remove the config SPARK_SCALA_VERSION and get the scalaVersion from env"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2441"},"[LINKIS-2441]")," Knife4j interface document"),(0,r.kt)("li",{parentName:"ul"},"[","PE-BML]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2450"},"[LINKIS-2450]")," The new storage path is optimized when the engine material is updated"),(0,r.kt)("li",{parentName:"ul"},"[","PE-BML]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2475"},"[LINKIS-2475]")," Fix package name capitalization problem"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2477"},"[LINKIS-2477]")," Optimize build out dependence of linkis-cg-engineconnplugin"),(0,r.kt)("li",{parentName:"ul"},"[","CG]","[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2479"},"[LINKIS-2479]")," The ECM kill engine needs to be able to complete the kill of the yarn appid"),(0,r.kt)("li",{parentName:"ul"},"[","MDS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2481"},"[LINKIS-2481]")," Linkis-metadat-query-service-hive package name modification"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]","[","CG]","[","GATEWAY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2496"},"[LINKIS-2496]")," Opt refactor entrance bean conf"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]","[","CG]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2508"},"[LINKIS-2508]")," Feature optimization that supports high concurrency"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-PRESTO]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2512"},"[LINKIS-2512]")," Optimize presto engineconn"),(0,r.kt)("li",{parentName:"ul"},"[","WEB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2524"},"[LINKIS-2524]")," Rename web to linkis-web"),(0,r.kt)("li",{parentName:"ul"},"[","PE-BML]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2531"},"[LINKIS-2531]")," Update VersionServiceImplTest"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2549"},"[LINKIS-2549]")," Optimize the read efficiency of the result set when the result set is output after the script is executed"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SPARK]","[","TEST]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2617"},"[LINKIS-2617]")," Add test case for factory launch extension"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2618"},"[LINKIS-2618]")," Optimized module and plugin configuration"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SHELL]","[","TEST]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2620"},"[LINKIS-2620]")," Add test case for shell engine"),(0,r.kt)("li",{parentName:"ul"},"[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2628"},"[LINKIS-2628]")," EC Yarn app id logs should be printed to a separate log"),(0,r.kt)("li",{parentName:"ul"},"[","PE-BML]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2633"},"[LINKIS-2633]")," The rollbackversion function modifies the case"),(0,r.kt)("li",{parentName:"ul"},"[","PACKAGE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2635"},"[LINKIS-2635]")," Add 1.2.0_schema file records to update changes to 1.2.0"),(0,r.kt)("li",{parentName:"ul"},"[","PACKAGE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2679"},"[LINKIS-2679]")," Optimize the default queue and hive default reduces parameters in dml"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2741"},"[LINKIS-2741]")," The connection cache pool key value in the ConnectionManager is adjusted to the data source name and version number"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2743"},"[LINKIS-2743]")," Jdbc data source configuration priority definition.")),(0,r.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","PS-RM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1850"},"[LINKIS-1850]")," Fix NullPointerException"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1879"},"[LINKIS-1879]")," FileWriter and BufferedWriter are not closed in finally clause"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1911"},"[LINKIS-1911]")," Fix linkis-computation-client failed to submit jobs"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2040"},"[LINKIS-2040]")," Fix HDFSCacheLogWriter getOutPutStream NPE"),(0,r.kt)("li",{parentName:"ul"},"[","DMS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2255"},"[LINKIS-2255]")," The expired field is missing when querying information from a single data source"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2269"},"[LINKIS-2269]")," Fix ddl sql bug"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2314"},"[LINKIS-2314]")," Fix AbstractDiscovery delayTime calculate error"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-HIVE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2321"},"[LINKIS-2321]")," For hive on tez tasks, the task cannot be ended correctly when canceled"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2346"},"[LINKIS-2346]")," Fix the admin user get tables not return all tables"),(0,r.kt)("li",{parentName:"ul"},"[","RPC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2370"},"[LINKIS-2370]")," Fix linkis-rpc messageUtils.orderIsLast not correct"),(0,r.kt)("li",{parentName:"ul"},"[","LM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2372"},"[LINKIS-2372]")," Fix LM ec history restful bug"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2273"},"[LINKIS-2273]")," Data source edit form supports Chinese and English"),(0,r.kt)("li",{parentName:"ul"},"[","PACKAGE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2389"},"[LINKIS-2389]")," Fixed the bug in the linkis-ps-metadataquery module that was missing after packaging"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2412"},"[LINKIS-2412]")," Fix issue that querying ECM history, permission management fails"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2418"},"[LINKIS-2418]")," Fixed the problem that the task state could not be flipped normally when thread unsafe SimpleDateFormat was used as a global variable"),(0,r.kt)("li",{parentName:"ul"},"[","MDS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2435"},"[LINKIS-2435]")," Fix NPE of metadata mysql query"),(0,r.kt)("li",{parentName:"ul"},"[","GATEWAY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2454"},"[LINKIS-2454]")," When linkis-gateway is debugged locally, knife4j-related class dependencies conflict"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2456"},"[LINKIS-2456]")," Fix test bug"),(0,r.kt)("li",{parentName:"ul"},"[","ECM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2469"},"[LINKIS-2469]")," ECM logOperator uses wrong delimiter to get log path"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2470"},"[LINKIS-2470]")," File upload Chinese name is garbled"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2471"},"[LINKIS-2471]")," Orchestrator supports task wait timeout"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2472"},"[LINKIS-2472]")," Throws an exception when the data is empty"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SPARK]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2488"},"[LINKIS-2488]")," Fix the problem that 'CsvRelation' class cannot be serialized"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2506"},"[LINKIS-2506]")," Upgrade 1.1.1 ddl,miss engine=innodb default charset=utf8 statement"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2535"},"[LINKIS-2535]")," Fix call ExceptionUtils.getStackTrace NPE"),(0,r.kt)("li",{parentName:"ul"},"[","PE-BML]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2543"},"[LINKIS-2543]")," Fix ps_bml_resources_version insert new version missing some information"),(0,r.kt)("li",{parentName:"ul"},"[","CG]","[","MDS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2547"},"[LINKIS-2547]")," Fix MetadataQuery sql syntax error and LockManagerMapper method overload bug"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2559"},"[LINKIS-2559]")," Fix variable substitution error"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-PRESTO]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2596"},"[LINKIS-2596]")," Fix presto missing dependencies when compiling package"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-ES]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2603"},"[LINKIS-2603]")," NoSuchMethodError for ES engine"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-ES]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2604"},"[LINKIS-2604]")," NumberFormatException for ES engine"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2614"},"[LINKIS-2614]")," Fixed a NPE caused by a client request"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2631"},"[LINKIS-2631]")," Fix the dead loop"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SHELL]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2654"},"[LINKIS-2654]")," Fix test case for ShellEngineConnExecutor"),(0,r.kt)("li",{parentName:"ul"},"[","LM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2688"},"[LINKIS-2688]")," Upgrade the default EngineType version of the flink ec"),(0,r.kt)("li",{parentName:"ul"},"[","TOOL]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2701"},"[LINKIS-2701]")," Fix github repos page License display with Unknown licenses found")),(0,r.kt)("h2",{id:"security-related"},"Security related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","SPRING]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2395"},"[LINKIS-2395]")," SynchronossPartHttpMessageReader should only create temp directory when needed (CVE-2022-2296)")),(0,r.kt)("h2",{id:"dependency-changes"},"Dependency changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","COMMON]","[","CG]","[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2301"},"[LINKIS-2301]")," Update dependency to fix CVEs"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2452"},"[LINKIS-2452]")," Upgrade oshi-core version")),(0,r.kt)("h2",{id:"thanks"},"Thanks"),(0,r.kt)("p",null,"The release of Apache Linkis(incubating) 1.2.0 is inseparable from the contributors of the Linkis community.\nThanks to all the community contributors, including but not limited to the following Contributors\n(in no particular order): CCweixiao, Dlimeng, QuintinTao, WenxiangFan, aiceflower, barry8023, binbinCheng,\ncasionone, duhanmin, gabeng1996, huangKai-2323, huapan123456, huiyuanjjjjuice, hunter-cloud09, jackxu2011,\nlegendtkl, liangqilang, liuyou2, mindflow94, peacewong, ruY9527, seedscoder, wForget, yyuser5201314"))}h.isMDXComponent=!0}}]);