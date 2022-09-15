"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[76613],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76937:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Cluster Deployment",sidebar_position:2},s="Introduction to Distributed Deployment Scheme",d={unversionedId:"deployment/cluster-deployment",id:"deployment/cluster-deployment",isDocsHomePage:!1,title:"Cluster Deployment",description:"Linkis's stand-alone deployment is simple, but it cannot be used in a production environment, because too many processes on the same server will make the server too stressful. The choice of deployment plan is related to the company's user scale, user habits, and the number of simultaneous users of the cluster. Generally speaking, we will choose the deployment method based on the number of simultaneous users using Linkis and the user's preference for the execution engine.",source:"@site/docs/deployment/cluster-deployment.md",sourceDirName:"deployment",slug:"/deployment/cluster-deployment",permalink:"/docs/1.3.0/deployment/cluster-deployment",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/deployment/cluster-deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Cluster Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Deployment",permalink:"/docs/1.3.0/deployment/quick-deploy"},next:{title:"EngineConnPlugin Installation",permalink:"/docs/1.3.0/deployment/engine-conn-plugin-installation"}},m=[{value:"1.Multi-node deployment method reference",id:"1multi-node-deployment-method-reference",children:[]},{value:"2.Linkis microservices distributed deployment configuration parameters",id:"2linkis-microservices-distributed-deployment-configuration-parameters",children:[{value:"1. Preparation for distributed deployment",id:"1-preparation-for-distributed-deployment",children:[]},{value:"2. Distributed deployment process",id:"2-distributed-deployment-process",children:[]},{value:"3. Start and stop of distributed deployment services",id:"3-start-and-stop-of-distributed-deployment-services",children:[]},{value:"4. matters needing attention",id:"4-matters-needing-attention",children:[]}]}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-distributed-deployment-scheme"},"Introduction to Distributed Deployment Scheme"),(0,i.kt)("p",null,"Linkis's stand-alone deployment is simple, but it cannot be used in a production environment, because too many processes on the same server will make the server too stressful. The choice of deployment plan is related to the company's user scale, user habits, and the number of simultaneous users of the cluster. Generally speaking, we will choose the deployment method based on the number of simultaneous users using Linkis and the user's preference for the execution engine."),(0,i.kt)("h2",{id:"1multi-node-deployment-method-reference"},"1.Multi-node deployment method reference"),(0,i.kt)("p",null,"Linkis1.0 still maintains the SpringCloud-based microservice architecture, in which each microservice supports multiple active deployment schemes. Of course, different microservices play different roles in the system. Some microservices are called frequently, and more It may be in a high load situation. *",(0,i.kt)("em",{parentName:"p"},"On the machine where EngineConnManager is installed, the memory load of the machine will be relatively high because the user's engine process will be started, and the load of other types of microservices on the machine will be relatively low.")," *For this kind of microservices, we recommend starting multiple distributed deployments. The total resources dynamically used by Linkis can be calculated as follows."),(0,i.kt)("p",null,"EngineConnManager Total resources used = total memory + total number of cores =\nNumber of people online at the same time ","*"," (All types of engines occupy memory) ","*","maximum concurrency per user + number of people online at the same time ","*","\n(total memory occupied by all types of engine conns) ","*","maximum concurrency per user"),(0,i.kt)("p",null,"For example, when only spark, hive, and python engines are used and the maximum concurrency of a single user is 1, 50 people are used at the same time, Spark's driver memory is 1G, and Hive\nClient memory 1G, python client 1G, each engine uses 1 core, then it is 50 ","*","(1+1+1)G ","*","\n1 + 50 ","*","(1+1+1) cores","*","1 = 150G memory + 150 CPU cores."),(0,i.kt)("p",null,"During distributed deployment, the memory occupied by the microservice itself can be calculated according to each 2G memory. In the case of a large number of users, it is recommended to increase the memory of ps-publicservice to 6G, and it is recommended to reserve 10G of memory as a buffer.\nThe following configuration assumes that ",(0,i.kt)("strong",{parentName:"p"},"each user starts two engines at the same time as an example"),". ",(0,i.kt)("strong",{parentName:"p"},"For a machine with 64G memory"),", the reference configuration is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"10-50 people online at the same time")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Server configuration recommended")," 4 servers, named S1, S2, S3, S4")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service"),(0,i.kt)("th",{parentName:"tr",align:null},"Host name"),(0,i.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,i.kt)("td",{parentName:"tr",align:null},"S1, S2"),(0,i.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Other services"),(0,i.kt)("td",{parentName:"tr",align:null},"S3, S4"),(0,i.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"50-100 people online at the same time")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 6 servers, named S1, S2, S3, S4, S5, S6")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service"),(0,i.kt)("th",{parentName:"tr",align:null},"Host name"),(0,i.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,i.kt)("td",{parentName:"tr",align:null},"S1-S4"),(0,i.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Other services"),(0,i.kt)("td",{parentName:"tr",align:null},"S5, S6"),(0,i.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of simultaneous users 100-300")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Recommended server configuration"),": 12 servers, named S1, S2...S12"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service"),(0,i.kt)("th",{parentName:"tr",align:null},"Host name"),(0,i.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,i.kt)("td",{parentName:"tr",align:null},"S1-S10"),(0,i.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Other services"),(0,i.kt)("td",{parentName:"tr",align:null},"S11, S12"),(0,i.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"300-500 people at the same time")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 20 servers, named S1, S2...S20")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service"),(0,i.kt)("th",{parentName:"tr",align:null},"Host name"),(0,i.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,i.kt)("td",{parentName:"tr",align:null},"S1-S18"),(0,i.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Other services"),(0,i.kt)("td",{parentName:"tr",align:null},"S19, S20"),(0,i.kt)("td",{parentName:"tr",align:null},"Eureka high-availability deployment, some microservices can be expanded if the request volume is tens of thousands, and the current active-active deployment can support thousands of users in the industry")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"More than 500 users at the same time (estimated based on 800 people online at the same time)")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 34 servers, named S1, S2...S34")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service"),(0,i.kt)("th",{parentName:"tr",align:null},"Host name"),(0,i.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,i.kt)("td",{parentName:"tr",align:null},"S1-S32"),(0,i.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Other services"),(0,i.kt)("td",{parentName:"tr",align:null},"S33, S34"),(0,i.kt)("td",{parentName:"tr",align:null},"Eureka high-availability deployment, some microservices can be expanded if the request volume is tens of thousands, and the current active-active deployment can support thousands of users in the industry")))),(0,i.kt)("h2",{id:"2linkis-microservices-distributed-deployment-configuration-parameters"},"2.Linkis microservices distributed deployment configuration parameters"),(0,i.kt)("h3",{id:"1-preparation-for-distributed-deployment"},"1. Preparation for distributed deployment"),(0,i.kt)("p",null,"Download the jar package to be deployed and prepare the development environment (mysql, Hadoop, hive and other development environments)  "),(0,i.kt)("h3",{id:"2-distributed-deployment-process"},"2. Distributed deployment process"),(0,i.kt)("h4",{id:"21-modify-the-eureka-configuration-file-and-add-the-configuration-addresses-of-both-eureka"},"2.1 modify the Eureka configuration file and add the configuration addresses of both Eureka"),(0,i.kt)("p",null,"You can decide whether to deploy Eureka service according to the actual situation",(0,i.kt)("br",{parentName:"p"}),"\n","Take the dual active deployment of machine Server1 and server2 as an example, in order to make Eureka register with each other.",(0,i.kt)("br",{parentName:"p"}),"\n","Make the following configuration changes for Server1/server2  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$LINKIS_ HOME/conf/application-eureka. yml\n$LINKIS_ HOME/conf/application-linkis. yml\neureka:\nclient:\nserviceUrl:\ndefaultZone: http:/eurekaIp1:port1/eureka/,http:/eurekaIp2:port2/eureka/\n\n$LINKIS_ HOME/conf/linkis  Properties configuration modification\nwds. linkis. eureka. defaultZone=http:/eurekaIp1:port1/eureka/,http:/eurekaIp2:port2/eureka/\n\n")),(0,i.kt)("h4",{id:"22-deploy-all-services-on-server-a-and-use-sbin--links-start-all-the-sh-command-starts"},"2.2 deploy all services on server a and use SBIN / links start all The SH command starts"),(0,i.kt)("h4",{id:"23-copy-the-content-deployed-on-server-a-to-server-b-and-use-sh-links-daemon-for-the-services-that-need-to-be-started-the-sh-restart-command-starts-the-command-that-needs-to-be-started-on-server-b"},"2.3 copy the content deployed on server a to server B, and use sh links daemon for the services that need to be started The SH restart command starts the command that needs to be started on server B"),(0,i.kt)("p",null,"For example, start the linkis PS CS service sh linkis daemon SH restart PS CS, and the specific service name can be linkis start all Find in SH file  "),(0,i.kt)("h4",{id:"24-testing-on-deployed-front-end-projects"},"2.4 testing on deployed front-end projects"),(0,i.kt)("p",null,"Test the interface of the service on server A",(0,i.kt)("br",{parentName:"p"}),"\n","Test the interface of the service on server B"),(0,i.kt)("h3",{id:"3-start-and-stop-of-distributed-deployment-services"},"3. Start and stop of distributed deployment services"),(0,i.kt)("p",null,"Linux port occupies netstat - tunlp | grep port number",(0,i.kt)("br",{parentName:"p"}),"\n","Linux clear process sudo kill - 9 process number  "),(0,i.kt)("h3",{id:"4-matters-needing-attention"},"4. matters needing attention"),(0,i.kt)("h4",{id:"41-it-is-best-to-start-all-services-at-the-beginning-because-there-are-dependencies-between-services-if-some-services-do-not-exist-and-the-corresponding-backup-cannot-be-found-through-eureka-the-service-will-fail-to-start-after-the-service-fails-to-start-it-will-not-restart-automatically-wait-until-the-alternative-service-is-added-and-then-close-the-relevant-services"},"4.1 It is best to start all services at the beginning, because there are dependencies between services. If some services do not exist and the corresponding backup cannot be found through Eureka, the service will fail to start. After the service fails to start, it will not restart automatically. Wait until the alternative service is added, and then close the relevant services"))}u.isMDXComponent=!0}}]);