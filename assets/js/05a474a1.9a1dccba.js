"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[94073],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=u(n),s=r,c=k["".concat(p,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},94237:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Version Overview",sidebar_position:.1},p=void 0,u={unversionedId:"release",id:"release",isDocsHomePage:!1,title:"Version Overview",description:"- Lite Deployment Without HDFS Mode",source:"@site/docs/release.md",sourceDirName:".",slug:"/release",permalink:"/docs/1.1.3/release",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/release.md",tags:[],version:"current",sidebarPosition:.1,frontMatter:{title:"Version Overview",sidebar_position:.1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.1.3/introduction"},next:{title:"Quick Deployment",permalink:"/docs/1.1.3/deployment/quick_deploy"}},m=[{value:"Configuration Item",id:"configuration-item",children:[]},{value:"DB Table Changes",id:"db-table-changes",children:[]}],d={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1.3/deployment/deploy_linkis_without_hdfs"},"Lite Deployment Without HDFS Mode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1.3/engine_usage/sqoop"},"Sqoop Engine Usage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1.3/api/http/jobhistory-api"},"History Task Query HTTP Interface")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1.3/deployment/linkis_scriptis_install"},"Installation And Deployment of Tool Scriptis"))),(0,l.kt)("h2",{id:"configuration-item"},"Configuration Item"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Module Name (Service Name)"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.codeType.runType.relation"),(0,l.kt)("td",{parentName:"tr",align:null},"sql=>sql","|","hql","|","jdbc","|","hive","|","psql","|","fql,",(0,l.kt)("br",null),"python=>python","|","py","|","pyspark,< br/>java=>java,scala=>scala,",(0,l.kt)("br",null),"shell=>sh","|","shell"),(0,l.kt)("td",{parentName:"tr",align:null},"mapping relationship between codeType and runType")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rpc"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.rpc.spring.params.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls the ribbon mode parameter switch of the RPC module")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.engineconn.max.parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"Asynchronous execution supports setting the number of concurrent job groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.engineconn.async.group.max.running"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-flink"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.flink.execution.attached"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-flink"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.flink.kerberos.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-flink"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.flink.kerberos.login.contexts"),(0,l.kt)("td",{parentName:"tr",align:null},"Client,KafkaClient"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-flink"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.flink.kerberos.login.keytab"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-flink"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.flink.kerberos.login.principal"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-flink"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.flink.kerberos.krb5-conf.path"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-flink"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.flink.params.placeholder.blank"),(0,l.kt)("td",{parentName:"tr",align:null},"\\","0x001"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-sqoop"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"sqoop.task.map.memory"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-sqoop"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"sqoop.task.map.cpu.cores"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-sqoop"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"sqoop.params.name.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"sqoop.mode"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-sqoop"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"sqoop.params.name.prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"sqoop.args."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-sqoop"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"sqoop.params.name.env.prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"sqoop.env."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-sqoop"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.hadoop.site.xml"),(0,l.kt)("td",{parentName:"tr",align:null},"/etc/hadoop/conf/core-site.xml;",(0,l.kt)("br",null),"/etc/hadoop/conf/hdfs- site.xml;",(0,l.kt)("br",null),"/etc/hadoop/conf/yarn-site.xml;",(0,l.kt)("br",null),"/etc/hadoop/conf/mapred-site.xml"),(0,l.kt)("td",{parentName:"tr",align:null},"set sqoop to load hadoop parameter file location")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-sqoop"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"sqoop.fetch.status.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"5s"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the interval for obtaining sqoop execution status")))),(0,l.kt)("h2",{id:"db-table-changes"},"DB Table Changes"),(0,l.kt)("p",null,"no change"))}k.isMDXComponent=!0}}]);