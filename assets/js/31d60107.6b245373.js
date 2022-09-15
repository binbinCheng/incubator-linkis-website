"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[90202],{3905:function(e,n,i){i.d(n,{Zo:function(){return p},kt:function(){return m}});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(i),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return i?t.createElement(g,a(a({ref:n},p),{},{components:i})):t.createElement(g,a({ref:n},p))}));function m(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},91795:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=i(87462),r=i(63366),o=(i(67294),i(3905)),a=["components"],s={title:"Installation Directory Structure",sidebar_position:4},l="Installation directory structure",c={unversionedId:"deployment/installation-hierarchical-structure",id:"version-1.2.0/deployment/installation-hierarchical-structure",isDocsHomePage:!1,title:"Installation Directory Structure",description:"The directory structure of Linkis 1.0 is very different from the 0.X version. Each microservice in 0.X has a root directory that exists independently. The main advantage of this directory structure is that it is easy to distinguish microservices and facilitate individual Microservices are managed, but there are some obvious problems:",source:"@site/versioned_docs/version-1.2.0/deployment/installation-hierarchical-structure.md",sourceDirName:"deployment",slug:"/deployment/installation-hierarchical-structure",permalink:"/docs/latest/deployment/installation-hierarchical-structure",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/deployment/installation-hierarchical-structure.md",tags:[],version:"1.2.0",sidebarPosition:4,frontMatter:{title:"Installation Directory Structure",sidebar_position:4},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"EngineConnPlugin Installation",permalink:"/docs/latest/deployment/engine-conn-plugin-installation"},next:{title:"installation package directory structure",permalink:"/docs/latest/deployment/unpack-hierarchical-structure"}},p=[],u={toc:p};function d(e){var n=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-directory-structure"},"Installation directory structure"),(0,o.kt)("p",null,"The directory structure of Linkis 1.0 is very different from the 0.X version. Each microservice in 0.X has a root directory that exists independently. The main advantage of this directory structure is that it is easy to distinguish microservices and facilitate individual Microservices are managed, but there are some obvious problems:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The microservice catalog is too complicated and it is not convenient to switch catalog management"),(0,o.kt)("li",{parentName:"ol"},"There is no unified startup script, which makes it more troublesome to start and stop microservices"),(0,o.kt)("li",{parentName:"ol"},"There are a large number of duplicate service configurations, and the same configuration often needs to be modified in many places"),(0,o.kt)("li",{parentName:"ol"},"There are a large number of repeated Lib dependencies, which increases the size of the installation package and the risk of dependency conflicts")),(0,o.kt)("p",null,"Therefore, in Linkis 1.0, we have greatly optimized and adjusted the installation directory structure, reducing the number of microservice directories, reducing the jar packages that are repeatedly dependent, and reusing configuration files and microservice management scripts as much as possible. Mainly reflected in the following aspects:"),(0,o.kt)("p",null,"1.The bin folder is no longer provided for each microservice, and modified to be shared by all microservices."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Bin folder is modified to the installation directory, which is mainly used to install Linkis 1.0 and check the environment status. The new sbin directory provides one-click start and stop for Linkis, and provides independent start and stop for all microservices by changing parameters.")),(0,o.kt)("p",null,"2.No longer provide a separate conf directory for each microservice, and modify it to be shared by all microservices."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Conf folder contains two aspects of content. On the one hand, it is the configuration information shared by all microservices. This type of configuration information contains information that users can customize configuration according to their own environment; on the other hand, it is the special characteristics of each microservice. Configuration, under normal circumstances, users do not need to change by themselves.")),(0,o.kt)("p",null,"3.The lib folder is no longer provided for each microservice, and modified to be shared by all microservices"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Lib folder also contains two aspects of content, on the one hand, the common dependencies required by all microservices; on the other hand, the special dependencies required by each microservice.")),(0,o.kt)("p",null,"4.The log directory is no longer provided for each microservice, modified to be shared by all microservices"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Log directory contains log files of all microservices.")),(0,o.kt)("p",null,"The simplified directory structure of Linkis 1.0 is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 bin \u2500\u2500installation directory\n\u2502\xa0\u251c\u2500\u2500 checkEnv.sh \u2500\u2500 Environmental variable detection\n\u2502 \u251c\u2500\u2500 checkServices.sh \u2500\u2500 Microservice status check\n\u2502 \u251c\u2500\u2500 common.sh \u2500\u2500 Some public shell functions\n\u2502 \u251c\u2500\u2500 install-io.sh \u2500\u2500 Used for dependency replacement during installation\n\u2502 \u2514\u2500\u2500 install.sh \u2500\u2500 Main script of Linkis installation\n\u251c\u2500\u2500 conf \u2500\u2500configuration directory\n\u2502 \u251c\u2500\u2500 application-eureka.yml\n\u2502 \u251c\u2500\u2500 application-linkis.yml    \u2500\u2500Microservice general yml\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager-io.properties\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager.properties\n\u2502 \u251c\u2500\u2500 linkis-cg-engineplugin.properties\n\u2502 \u251c\u2500\u2500 linkis-cg-entrance.properties\n\u2502 \u251c\u2500\u2500 linkis-cg-linkismanager.properties\n\u2502 \u251c\u2500\u2500 linkis-computation-governance\n\u2502 \u2502\xa0\xa0 \u2514\u2500\u2500 linkis-client\n\u2502 \u2502\xa0\xa0     \u2514\u2500\u2500 linkis-cli\n\u2502 \u2502\xa0\xa0         \u251c\u2500\u2500 linkis-cli.properties\n\u2502 \u2502\xa0\xa0         \u2514\u2500\u2500 log4j2.xml\n\u2502 \u251c\u2500\u2500 linkis-env.sh   \u2500\u2500linkis environment properties\n\u2502 \u251c\u2500\u2500 linkis-et-validator.properties\n\u2502 \u251c\u2500\u2500 linkis-mg-gateway.properties\n\u2502 \u251c\u2500\u2500 linkis.properties  \u2500\u2500linkis global properties\n\u2502 \u251c\u2500\u2500 linkis-ps-bml.properties\n\u2502 \u251c\u2500\u2500 linkis-ps-cs.properties\n\u2502 \u251c\u2500\u2500 linkis-ps-datasource.properties\n\u2502 \u251c\u2500\u2500 linkis-ps-publicservice.properties\n\u2502 \u251c\u2500\u2500 log4j2.xml\n\u2502 \u251c\u2500\u2500 proxy.properties(Optional)\n\u2502 \u2514\u2500\u2500 token.properties(Optional)\n\u251c\u2500\u2500 db \u2500\u2500database DML and DDL file directory\n\u2502 \u251c\u2500\u2500 linkis\\_ddl.sql \u2500\u2500Database table definition SQL\n\u2502 \u251c\u2500\u2500 linkis\\_dml.sql \u2500\u2500Database table initialization SQL\n\u2502 \u2514\u2500\u2500 module \u2500\u2500Contains DML and DDL files of each microservice\n\u251c\u2500\u2500 lib \u2500\u2500lib directory\n\u2502 \u251c\u2500\u2500 linkis-commons \u2500\u2500Common dependency package\n\u2502 \u251c\u2500\u2500 linkis-computation-governance \u2500\u2500The lib directory of the computing governance module\n\u2502 \u251c\u2500\u2500 linkis-engineconn-plugins \u2500\u2500lib directory of all EngineConnPlugins\n\u2502 \u251c\u2500\u2500 linkis-public-enhancements \u2500\u2500lib directory of public enhancement services\n\u2502 \u2514\u2500\u2500 linkis-spring-cloud-services \u2500\u2500SpringCloud lib directory\n\u251c\u2500\u2500 logs \u2500\u2500log directory\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager-gc.log\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager.log\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager.out\n\u2502 \u251c\u2500\u2500 linkis-cg-engineplugin-gc.log\n\u2502 \u251c\u2500\u2500 linkis-cg-engineplugin.log\n\u2502 \u251c\u2500\u2500 linkis-cg-engineplugin.out\n\u2502 \u251c\u2500\u2500 linkis-cg-entrance-gc.log\n\u2502 \u251c\u2500\u2500 linkis-cg-entrance.log\n\u2502 \u251c\u2500\u2500 linkis-cg-entrance.out\n\u2502 \u251c\u2500\u2500 linkis-cg-linkismanager-gc.log\n\u2502 \u251c\u2500\u2500 linkis-cg-linkismanager.log\n\u2502 \u251c\u2500\u2500 linkis-cg-linkismanager.out\n\u2502 \u251c\u2500\u2500 linkis-et-validator-gc.log\n\u2502 \u251c\u2500\u2500 linkis-et-validator.log\n\u2502 \u251c\u2500\u2500 linkis-et-validator.out\n\u2502 \u251c\u2500\u2500 linkis-mg-eureka-gc.log\n\u2502 \u251c\u2500\u2500 linkis-mg-eureka.log\n\u2502 \u251c\u2500\u2500 linkis-mg-eureka.out\n\u2502 \u251c\u2500\u2500 linkis-mg-gateway-gc.log\n\u2502 \u251c\u2500\u2500 linkis-mg-gateway.log\n\u2502 \u251c\u2500\u2500 linkis-mg-gateway.out\n\u2502 \u251c\u2500\u2500 linkis-ps-bml-gc.log\n\u2502 \u251c\u2500\u2500 linkis-ps-bml.log\n\u2502 \u251c\u2500\u2500 linkis-ps-bml.out\n\u2502 \u251c\u2500\u2500 linkis-ps-cs-gc.log\n\u2502 \u251c\u2500\u2500 linkis-ps-cs.log\n\u2502 \u251c\u2500\u2500 linkis-ps-cs.out\n\u2502 \u251c\u2500\u2500 linkis-ps-datasource-gc.log\n\u2502 \u251c\u2500\u2500 linkis-ps-datasource.log\n\u2502 \u251c\u2500\u2500 linkis-ps-datasource.out\n\u2502 \u251c\u2500\u2500 linkis-ps-publicservice-gc.log\n\u2502 \u251c\u2500\u2500 linkis-ps-publicservice.log\n\u2502 \u2514\u2500\u2500 linkis-ps-publicservice.out\n\u251c\u2500\u2500 pid \u2500\u2500Process ID of all microservices\n\u2502 \u251c\u2500\u2500 linkis\\_cg-engineconnmanager.pid \u2500\u2500EngineConnManager microservice\n\u2502 \u251c\u2500\u2500 linkis\\_cg-engineconnplugin.pid \u2500\u2500EngineConnPlugin microservice\n\u2502 \u251c\u2500\u2500 linkis\\_cg-entrance.pid \u2500\u2500Engine entrance microservice\n\u2502 \u251c\u2500\u2500 linkis\\_cg-linkismanager.pid \u2500\u2500linkis manager microservice\n\u2502 \u251c\u2500\u2500 linkis\\_mg-eureka.pid \u2500\u2500eureka microservice\n\u2502 \u251c\u2500\u2500 linkis\\_mg-gateway.pid \u2500\u2500gateway microservice\n\u2502 \u251c\u2500\u2500 linkis\\_ps-bml.pid \u2500\u2500material library microservice\n\u2502 \u251c\u2500\u2500 linkis\\_ps-cs.pid \u2500\u2500Context microservice\n\u2502 \u251c\u2500\u2500 linkis\\_ps-datasource.pid \u2500\u2500Data source microservice\n\u2502 \u2514\u2500\u2500 linkis\\_ps-publicservice.pid \u2500\u2500public microservice\n\u2514\u2500\u2500 sbin \u2500\u2500microservice start and stop script directory\n    \u251c\u2500\u2500 ext \u2500\u2500Start and stop script directory of each microservice\n    \u251c\u2500\u2500 linkis-daemon.sh \u2500\u2500 Quick start and stop, restart a single microservice script\n    \u251c\u2500\u2500 linkis-start-all.sh \u2500\u2500 Start all microservice scripts with one click\n    \u2514\u2500\u2500 linkis-stop-all.sh \u2500\u2500 Stop all microservice scripts with one click\n")),(0,o.kt)("h1",{id:"configuration-item-modification"},"Configuration item modification"),(0,o.kt)("p",null,'After executing the install.sh in the bin directory to complete the Linkis installation, you need to modify the configuration items. All configuration items are located in the con directory. Normally, you need to modify the three configurations of db.sh, linkis.properties, and linkis-env.sh For documentation, project installation and configuration, please refer to the article "Linkis1.0 Installation"'),(0,o.kt)("h1",{id:"microservice-start-and-stop"},"Microservice start and stop"),(0,o.kt)("p",null,"After modifying the configuration items, you can start the microservice in the sbin directory. The names of all microservices are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 linkis-cg-engineconnmanager  \u2500\u2500engine management service\n\u251c\u2500\u2500 linkis-cg-engineplugin  \u2500\u2500EngineConnPlugin management service\n\u251c\u2500\u2500 linkis-cg-entrance  \u2500\u2500computing governance entrance service\n\u251c\u2500\u2500 linkis-cg-linkismanager  \u2500\u2500computing governance management service\n\u251c\u2500\u2500 linkis-mg-eureka  \u2500\u2500microservice registry service\n\u251c\u2500\u2500 linkis-mg-gateway  \u2500\u2500Linkis gateway service\n\u251c\u2500\u2500 linkis-ps-bml  \u2500\u2500material library service\n\u251c\u2500\u2500 linkis-ps-cs  \u2500\u2500context service\n\u251c\u2500\u2500 linkis-ps-datasource  \u2500\u2500data source service\n\u2514\u2500\u2500 linkis-ps-publicservice  \u2500\u2500public service\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Microservice abbreviation"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Abbreviation"),(0,o.kt)("th",{parentName:"tr",align:null},"Full English Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Full Chinese Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cg"),(0,o.kt)("td",{parentName:"tr",align:null},"Computation Governance"),(0,o.kt)("td",{parentName:"tr",align:null},"Computing Governance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mg"),(0,o.kt)("td",{parentName:"tr",align:null},"Microservice Governance"),(0,o.kt)("td",{parentName:"tr",align:null},"Microservice Governance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ps"),(0,o.kt)("td",{parentName:"tr",align:null},"Public Enhancement Service"),(0,o.kt)("td",{parentName:"tr",align:null},"Public Enhancement Service")))),(0,o.kt)("p",null,"In the past, to start and stop a single microservice, you need to enter the bin directory of each microservice and execute the start/stop script. When there are many microservices, it is troublesome to start and stop. A lot of additional directory switching operations are added. Linkis1.0 will all The scripts related to the start and stop of microservices are placed in the sbin directory, and only a single entry script needs to be executed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Under the Linkis/sbin directory"),":"),(0,o.kt)("p",null,"1.Start all microservices at once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh linkis-start-all.sh\n")),(0,o.kt)("p",null,"2.Shut down all microservices at once"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh linkis-stop-all.sh\n")),(0,o.kt)("p",null,"3.Start a single microservice (the service name needs to be removed from the Linkis prefix, such as mg-eureka)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh linkis-daemon.sh start service-name\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh linkis-daemon.sh start mg-eureka\n")),(0,o.kt)("p",null,"4.Shut down a single microservice"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh linkis-daemon.sh stop service-name\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh linkis-daemon.sh stop mg-eureka\n")),(0,o.kt)("p",null,"5.Restart a single microservice"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh linkis-daemon.sh restart service-name\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh linkis-daemon.sh restart mg-eureka\n")),(0,o.kt)("p",null,"6.View the status of a single microservice"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh linkis-daemon.sh status service-name\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh linkis-daemon.sh status mg-eureka\n")))}d.isMDXComponent=!0}}]);