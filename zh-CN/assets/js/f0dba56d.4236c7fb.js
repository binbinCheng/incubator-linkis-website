"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[25782],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=i.createContext({}),c=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,a=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,k=d["".concat(a,".").concat(m)]||d[m]||p[m]||l;return t?i.createElement(k,o(o({ref:n},u),{},{components:t})):i.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,o=new Array(l);o[0]=d;var r={};for(var a in n)hasOwnProperty.call(n,a)&&(r[a]=n[a]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var c=2;c<l;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18625:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=t(87462),s=t(63366),l=(t(67294),t(3905)),o=["components"],r={title:"\u65e0 HDFS \u90e8\u7f72",sidebar_position:8},a=void 0,c={unversionedId:"deployment/deploy-linkis-without-hdfs",id:"deployment/deploy-linkis-without-hdfs",isDocsHomePage:!1,title:"\u65e0 HDFS \u90e8\u7f72",description:"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728\u6ca1\u6709\u90e8\u7f72 HDFS \u7684\u73af\u5883\u4e2d\u90e8\u7f72 Linkis \u670d\u52a1\uff0c\u4ee5\u65b9\u4fbf\u66f4\u8f7b\u91cf\u5316\u7684\u5b66\u4e60\u4f7f\u7528\u548c\u8c03\u8bd5\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/deploy-linkis-without-hdfs.md",sourceDirName:"deployment",slug:"/deployment/deploy-linkis-without-hdfs",permalink:"/zh-CN/docs/1.3.0/deployment/deploy-linkis-without-hdfs",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/deploy-linkis-without-hdfs.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u65e0 HDFS \u90e8\u7f72",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6e90\u529f\u80fd\u4f7f\u7528",permalink:"/zh-CN/docs/1.3.0/deployment/start-metadatasource"},next:{title:"\u5de5\u5177 Scriptis \u7684\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/1.3.0/deployment/linkis-scriptis-install"}},u=[{value:"1. \u914d\u7f6e\u4fee\u6539",id:"1-\u914d\u7f6e\u4fee\u6539",children:[]},{value:"2. \u62f7\u8d1d jar \u5305",id:"2-\u62f7\u8d1d-jar-\u5305",children:[]},{value:"3. \u90e8\u7f72\u548c\u542f\u52a8",id:"3-\u90e8\u7f72\u548c\u542f\u52a8",children:[]},{value:"4. \u8fd0\u884c\u4f5c\u4e1a\u9a8c\u8bc1",id:"4-\u8fd0\u884c\u4f5c\u4e1a\u9a8c\u8bc1",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,s.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728\u6ca1\u6709\u90e8\u7f72 HDFS \u7684\u73af\u5883\u4e2d\u90e8\u7f72 Linkis \u670d\u52a1\uff0c\u4ee5\u65b9\u4fbf\u66f4\u8f7b\u91cf\u5316\u7684\u5b66\u4e60\u4f7f\u7528\u548c\u8c03\u8bd5\u3002"),(0,l.kt)("p",null,'\u90e8\u7f72\u6574\u4f53\u6d41\u7a0b\u53c2\u8003 "\u5feb\u901f\u90e8\u7f72"\uff0c\u9700\u8981\u4fee\u6539\u5982\u4e0b\u5c11\u8bb8\u5185\u5bb9\u3002'),(0,l.kt)("p",null,"\u53bbHDFS\u6a21\u5f0f\u90e8\u7f72\u4e0d\u652f\u6301hive/spark/flink\u5f15\u64ce\u7b49\u4efb\u52a1"),(0,l.kt)("h2",{id:"1-\u914d\u7f6e\u4fee\u6539"},"1. \u914d\u7f6e\u4fee\u6539"),(0,l.kt)("p",null,"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-env.sh")," \u6587\u4ef6\uff0c\u4fee\u6539\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#\u4f7f\u7528[file://]\u8def\u5f84\u6a21\u5f0f\u4ee3\u66ff[hdfs://]\u6a21\u5f0f \nWORKSPACE_USER_ROOT_PATH=file:///tmp/linkis/ \nHDFS_USER_ROOT_PATH=file:///tmp/linkis \nRESULT_SET_ROOT_PATH=file:///tmp/linkis \n\nexport ENABLE_HDFS=false\nexport ENABLE_HIVE=false\nexport ENABLE_SPARK=false\n")),(0,l.kt)("p",null,"\u5c06\u4e0a\u8ff0\u7684\u914d\u7f6e\u4fee\u6539\u4e3a false \u4e4b\u540e\uff0c\u5c31\u4e0d\u9700\u8981\u518d\u5355\u72ec\u914d\u7f6e HDFS/HIVE/SPARK \u7b49\u73af\u5883\u4e86, \u5b89\u88c5\u90e8\u7f72\u65f6\u4e5f\u4f1a\u8df3\u8fc7\u8fd9\u4e9b\u57fa\u7840\u73af\u5883\u7684\u68c0\u67e5\u3002"),(0,l.kt)("h2",{id:"2-\u62f7\u8d1d-jar-\u5305"},"2. \u62f7\u8d1d jar \u5305"),(0,l.kt)("p",null,"\u56e0\u4e3a mysql-connector-java \u9a71\u52a8\u662f GPL2.0 \u534f\u8bae\uff0c\u4e0d\u6ee1\u8db3Apache\u5f00\u6e90\u534f\u8bae\u5173\u4e8elicense\u7684\u653f\u7b56\uff0c\u6240\u4ee5\u9700\u8981\u6211\u4eec\u624b\u52a8\u5c06\u5176\u62f7\u8d1d\u5230\u5982\u4e0b\u4e24\u4e2a\u76ee\u5f55\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-commons/public-module/\n${LINKIS_HOME}/lib/linkis-spring-cloud-services/linkis-mg-gateway/\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u4ece maven \u4ed3\u5e93\u4e0b\u8f7d\uff0c\u6bd4\u5982 ",(0,l.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java/5.1.49"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java/5.1.49")),(0,l.kt)("h2",{id:"3-\u90e8\u7f72\u548c\u542f\u52a8"},"3. \u90e8\u7f72\u548c\u542f\u52a8"),(0,l.kt)("p",null,'\u53c2\u8003 "\u5feb\u901f\u90e8\u7f72" \u90e8\u5206\uff0c\u901a\u8fc7\u6267\u884c ${LINKIS_HOME}/bin/install.sh \u547d\u4ee4\u5b8c\u6210\u90e8\u7f72\u3002\n\u53c2\u8003 "\u5feb\u901f\u90e8\u7f72" \u90e8\u5206\uff0c\u901a\u8fc7\u6267\u884c ${LINKIS_HOME}/sbin/linkis-start-all.sh \u547d\u4ee4\u542f\u52a8 Linkis \u670d\u52a1\u3002'),(0,l.kt)("h2",{id:"4-\u8fd0\u884c\u4f5c\u4e1a\u9a8c\u8bc1"},"4. \u8fd0\u884c\u4f5c\u4e1a\u9a8c\u8bc1"),(0,l.kt)("p",null,"\u76ee\u524d 1.1.2 \u7248\u672c\u53ea\u652f\u6301 shell \u4f5c\u4e1a\u5728\u975e HDFS \u73af\u5883\u4e2d\u8fd0\u884c\uff0c\u6267\u884c\u547d\u4ee4\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ cd ./bin\n$ chmod +x linkis-cli\n$ ./linkis-cli -engineType shell-1 -codeType shell -code "echo \\"hello\\" "  -submitUser <submitUser> -proxyUser <proxyUser>\n')),(0,l.kt)("p",null,"\u6b63\u5e38\u4f1a\u8f93\u51fa\u5982\u4e0b\u7c7b\u4f3c\u5185\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'=====Java Start Command=====\nexec /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.312.b07-2.el8_5.x86_64/jre/bin/java -server -Xms32m -Xmx2048m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/Linkis/linkis03/logs/linkis-cli -XX:ErrorFile=/Linkis/linkis03/logs/linkis-cli/ps_err_pid%p.log -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFraction=80 -XX:+DisableExplicitGC    -classpath /Linkis/linkis03/conf/linkis-cli:/Linkis/linkis03/lib/linkis-computation-governance/linkis-client/linkis-cli/*:/Linkis/linkis03/lib/linkis-commons/public-module/*: -Dconf.root=/Linkis/linkis03/conf/linkis-cli -Dconf.file=linkis-cli.properties -Dlog.path=/Linkis/linkis03/logs/linkis-cli -Dlog.file=linkis-client.root.log.20220418221952287912946  org.apache.linkis.cli.application.LinkisClientApplication \'-engineType shell-1 -codeType shell -code echo "hello"  -submitUser test -proxyUser test\'\n[INFO] LogFile path: /Linkis/linkis03/logs/linkis-cli/linkis-client.root.log.20220418221952287912946\n[INFO] User does not provide usr-configuration file. Will use default config\n[INFO] connecting to linkis gateway:http://127.0.0.1:9001\nJobId:6\nTaskId:6\nExecId:exec_id018028linkis-cg-entranceiZbp19q51jb8p984yk2jxdZ:9104LINKISCLI_test_shell_1\n[INFO] Job is successfully submitted!\n\n2022-04-18 22:19:53.019 INFO Program is substituting variables for you\n2022-04-18 22:19:53.019 INFO Variables substitution ended successfully\n2022-04-18 22:19:53.019 WARN The code you submit will not be limited by the limit\nJob with jobId : LINKISCLI_test_shell_1 and execID : LINKISCLI_test_shell_1 submitted \n2022-04-18 22:19:53.019 INFO You have submitted a new job, script code (after variable substitution) is\n************************************SCRIPT CODE************************************\necho "hello"\n************************************SCRIPT CODE************************************\n2022-04-18 22:19:53.019 INFO Your job is accepted,  jobID is LINKISCLI_test_shell_1 and jobReqId is 6 in ServiceInstance(linkis-cg-entrance, iZbp19q51jb8p984yk2jxdZ:9104). Please wait it to be scheduled\njob is scheduled.\n2022-04-18 22:19:53.019 INFO Your job is Scheduled. Please wait it to run.\nYour job is being scheduled by orchestrator.\n2022-04-18 22:19:53.019 INFO job is running.\n2022-04-18 22:19:53.019 INFO Your job is Running now. Please wait it to complete.\n2022-04-18 22:19:53.019 INFO Job with jobGroupId : 6 and subJobId : 5 was submitted to Orchestrator.\n2022-04-18 22:19:53.019 INFO Background is starting a new engine for you,execId astJob_4_codeExec_4 mark id is mark_4, it may take several seconds, please wait\n2022-04-18 22:20:01.020 INFO Task submit to ec: ServiceInstance(linkis-cg-engineconn, iZbp19q51jb8p984yk2jxdZ:43213) get engineConnExecId is: 1\n2022-04-18 22:20:01.020 INFO EngineConn local log path: ServiceInstance(linkis-cg-engineconn, iZbp19q51jb8p984yk2jxdZ:43213) /appcom1/tmp/test/20220418/shell/cc21fbb5-3a33-471b-a565-8407ff8ebd80/logs\niZbp19q51jb8p984yk2jxdZ:43213_0 >> echo "hello"\n2022-04-18 22:20:01.438 WARN  [Linkis-Default-Scheduler-Thread-1] org.apache.linkis.engineconn.computation.executor.hook.executor.ExecuteOnceHook 50 warn - execute once become effective, register lock listener\nhello\n2022-04-18 22:20:01.020 INFO Your subjob : 5 execue with state succeed, has 1 resultsets.\n2022-04-18 22:20:01.020 INFO Congratuaions! Your job : LINKISCLI_test_shell_1 executed with status succeed and 0 results.\n2022-04-18 22:20:01.020 INFO job is completed.\n2022-04-18 22:20:01.020 INFO Task creation time(\u4efb\u52a1\u521b\u5efa\u65f6\u95f4): 2022-04-18 22:19:53, Task scheduling time(\u4efb\u52a1\u8c03\u5ea6\u65f6\u95f4): 2022-04-18 22:19:53, Task start time(\u4efb\u52a1\u5f00\u59cb\u65f6\u95f4): 2022-04-18 22: Mission end time(\u4efb\u52a1\u7ed3\u675f\u65f6\u95f4): 2022-04-18 22:20:01\n2022-04-18 22:20:01.020 INFO Your mission(\u60a8\u7684\u4efb\u52a1) 6 The total time spent is(\u603b\u8017\u65f6\u65f6\u95f4\u4e3a): 8.3 \u79d2\n2022-04-18 22:20:01.020 INFO Congratulations. Your job completed with status Success.\n\n[INFO] Job execute successfully! Will try get execute result\n============Result:================\nTaskId:6\nExecId: exec_id018028linkis-cg-entranceiZbp19q51jb8p984yk2jxdZ:9104LINKISCLI_test_shell_1\nUser:test\nCurrent job status:SUCCEED\nextraMsg: \nresult: \n\n[INFO] Retrieving result-set, may take time if result-set is large, please do not exit program.\n============ RESULT SET 1 ============\nhello   \n############Execute Success!!!########\n\n')))}d.isMDXComponent=!0}}]);