"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[55056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||h[d]||s;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96333:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const s={title:"Job Submission",sidebar_position:2},o=void 0,a={unversionedId:"architecture/computation-governance-services/job-submission-preparation-and-execution-process",id:"architecture/computation-governance-services/job-submission-preparation-and-execution-process",isDocsHomePage:!1,title:"Job Submission",description:"Linkis task execution is the core function of Linkis. It calls to Linkis's computing governance service, public enhancement service, and three-tier services of microservice governance. Now it supports the execution of tasks of OLAP, OLTP, Streaming and other engine types. This article will discuss OLAP The process of task submission, preparation, execution, and result return of the type engine is introduced.",source:"@site/docs/architecture/computation-governance-services/job-submission-preparation-and-execution-process.md",sourceDirName:"architecture/computation-governance-services",slug:"/architecture/computation-governance-services/job-submission-preparation-and-execution-process",permalink:"/docs/1.3.1/architecture/computation-governance-services/job-submission-preparation-and-execution-process",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/computation-governance-services/job-submission-preparation-and-execution-process.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Job Submission",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"EngineConn Metrics Reporting Feature",permalink:"/docs/1.3.1/architecture/computation-governance-services/engine/engine-conn-metrics"},next:{title:"Linkis-Client Architecture",permalink:"/docs/1.3.1/architecture/computation-governance-services/linkis-cli"}},c=[{value:"Keywords:",id:"keywords",children:[]},{value:"1. Linkis interactive task execution architecture",id:"1-linkis-interactive-task-execution-architecture",children:[{value:"1.1, Task execution thinking",id:"11-task-execution-thinking",children:[]},{value:"1.2, Linkis task execution design",id:"12-linkis-task-execution-design",children:[]}]},{value:"2. Introduction to the task execution process",id:"2-introduction-to-the-task-execution-process",children:[{value:"2.1 Job submission stage",id:"21-job-submission-stage",children:[]},{value:"2.2 Job preparation stage",id:"22-job-preparation-stage",children:[]},{value:"2.3 Job execution phase",id:"23-job-execution-phase",children:[]},{value:"2.4 Job result push stage",id:"24-job-result-push-stage",children:[]}]},{value:"3. Summary",id:"3-summary",children:[]}],l={toc:c};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Linkis task execution is the core function of Linkis. It calls to Linkis's computing governance service, public enhancement service, and three-tier services of microservice governance. Now it supports the execution of tasks of OLAP, OLTP, Streaming and other engine types. This article will discuss OLAP The process of task submission, preparation, execution, and result return of the type engine is introduced.")),(0,r.kt)("h2",{id:"keywords"},"Keywords:"),(0,r.kt)("p",null,"LinkisMaster: The management service in the computing governance service layer of Linkis mainly includes several management and control services such as AppManager, ResourceManager, and LabelManager. Formerly known as LinkisManager service\nEntrance: The entry service in the computing governance service layer, which completes the functions of task scheduling, status control, task information push, etc.\nOrchestrator: Linkis' orchestration service provides powerful orchestration and computing strategy capabilities to meet the needs of multiple application scenarios such as multi-active, active-standby, transaction, replay, current limiting, heterogeneous and mixed computing. At this stage, Orchestrator is relied on by the Entrance service\nEngineConn (EC): Engine connector, responsible for accepting tasks and submitting them to underlying engines such as Spark, hive, Flink, Presto, trino, etc. for execution\nEngineConnManager (ECM): Linkis' EC process management service, responsible for controlling the life cycle of EngineConn (start, stop)\nLinkisEnginePluginServer: This service is responsible for managing the startup materials and configuration of each engine, and also provides the startup command acquisition of each EngineConn, as well as the resources required by each EngineConn\nPublicEnhencementService (PES): A public enhancement service, a module that provides functions such as unified configuration management, context service, material library, data source management, microservice management, and historical task query for other microservice modules"),(0,r.kt)("h2",{id:"1-linkis-interactive-task-execution-architecture"},"1. Linkis interactive task execution architecture"),(0,r.kt)("h3",{id:"11-task-execution-thinking"},"1.1, Task execution thinking"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","Before the existing Linkis 1.0 task execution architecture, it has undergone many evolutions. From the very beginning, various FullGC caused the service to crash when there were many users, to how the scripts developed by users support multi-platform , multi-tenancy, strong control, high concurrent operation, we encountered the following problems:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"How to support tens of thousands of concurrent tenants and isolate each other?"),(0,r.kt)("li",{parentName:"ol"},"How to support context unification, user-defined UDFs, custom variables, etc. to support the use of multiple systems?"),(0,r.kt)("li",{parentName:"ol"},"How to support high availability so that the tasks submitted by users can run normally?"),(0,r.kt)("li",{parentName:"ol"},"How to support the underlying engine log, progress, and status of the task to be pushed to the front end in real time?"),(0,r.kt)("li",{parentName:"ol"},"How to support multiple types of tasks to submit sql, python, shell, scala, java, etc.")),(0,r.kt)("h3",{id:"12-linkis-task-execution-design"},"1.2, Linkis task execution design"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","Based on the above five questions, Linkis divides the OLTP task into four stages, which are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Submission stage: The APP is submitted to the CG-Entrance service of Linkis to the completion of the persistence of the task (PS-JobHistory) and various interceptor processing of the task (dangerous syntax, variable substitution, parameter checking) and other steps, and become a producer Consumer concurrency control;"),(0,r.kt)("li",{parentName:"ol"},"Preparation stage: The task is scheduled by the Scheduler in Entrance to the Orchestrator module for task arrangement, and completes the EngineConn application to the LinkisMaster. During this process, the tenant's resources will be managed and controlled;"),(0,r.kt)("li",{parentName:"ol"},"Execution stage: The task is submitted from Orchestrator to EngineConn for execution, and EngineConn specifically submits the underlying engine for execution, and pushes the task information to the caller in real time;"),(0,r.kt)("li",{parentName:"ol"},"Result return stage: return results to the caller, support json and io streams to return result sets\nThe overall task execution architecture of Linkis is shown in the following figure:\n",(0,r.kt)("img",{alt:"arc",src:n(86883).Z}))),(0,r.kt)("h2",{id:"2-introduction-to-the-task-execution-process"},"2. Introduction to the task execution process"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","First of all, let's give a brief introduction to the processing flow of OLAP tasks. An overall execution flow of the task is shown in the following figure:\n",(0,r.kt)("img",{alt:"flow",src:n(48177).Z})),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","The whole task involves all the services of all computing governance. After the task is forwarded to Linkis's population service Entrance through the Gateway, it will perform multi-level scheduling (producer-consumer mode) through the label of the task. The FIFO mode completes task scheduling and execution. Entrance then submits the task to Orchestrator for task scheduling and submission. Orchestrator will complete the EC application to LinkisMaster. During this process, resource management and engine version selection will be performed through the task Label. EC. Orchestrator then submits the orchestrated task to the EC for execution. The EC will push the job log, progress, resource usage and other information to the Entrance service and push it to the caller. Next, we will give a brief introduction to the execution process of the task based on the above figure and the four stages of the task (submit, prepare, execute, and return)."),(0,r.kt)("h3",{id:"21-job-submission-stage"},"2.1 Job submission stage"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","Job submission phase Linkis supports multiple types of tasks: SQL, Python, Shell, Scala, Java, etc., supports different submission interfaces, and supports Restful/JDBC/Python/Shell and other submission interfaces. Submitting tasks mainly includes task code, labels, parameters and other information. The following is an example of RestFul:\nInitiate a Spark Sql task through the Restfu interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'"method": "/api/rest_j/v1/entrance/submit",\n"data": {\n  "executionContent": {\n    "code": "select * from table01",\n    "runType": "sql"\n  },\n  "params": {\n    "variable": {// task variable\n      "testvar": "hello"\n    },\n    "configuration": {\n      "runtime": {// task runtime params\n        "jdbc.url": "XX"\n      },\n      "startup": { // ec start up params\n        "spark.executor.cores": "4"\n      }\n    }\n  },\n  "source": { //task source information\n    "scriptPath": "file:///tmp/hadoop/test.sql"\n  },\n  "labels": {\n    "engineType": "spark-2.4.3",\n    "userCreator": "hadoop-IDE"\n  }\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The task will first be submitted to Linkis's gateway linkis-mg-gateway service. Gateway will forward it to the corresponding Entrance service according to whether the task has a routeLabel. If there is no RouteLabel, it will be forwarded to an Entrance service randomly."),(0,r.kt)("li",{parentName:"ol"},"After Entrance receives the corresponding job, it will call the RPC of the JobHistory module in the PES to persist the job information, and parse the parameters and code to replace the custom variables, and submit them to the scheduler (default FIFO scheduling) ) The scheduler will group tasks by tags, and tasks with different tags do not affect scheduling."),(0,r.kt)("li",{parentName:"ol"},"After Entrance is consumed by the FIFO scheduler, it will be submitted to the Orchestrator for orchestration and execution, and the submission phase of the task is completed.\nA brief description of the main classes involved:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"EntranceRestfulApi: Controller class of entry service, operations such as task submission, status, log, result, job information, task kill, etc.\nEntranceServer: task submission entry, complete task persistence, task interception analysis (EntranceInterceptors), and submit to the scheduler\nEntranceContext: Entrance's context holding class, including methods for obtaining scheduler, task parsing interceptor, logManager, persistence, listenBus, etc.\nFIFOScheduler: FIFO scheduler for scheduling tasks\nEntranceExecutor: The scheduled executor, after the task is scheduled, it will be submitted to the EntranceExecutor for execution\nEntranceJob: The job task scheduled by the scheduler, and the JobRequest submitted by the user is parsed through the EntranceParser to generate a one-to-one correspondence with the JobRequest\n")),(0,r.kt)("p",null,"The task status is now queued"),(0,r.kt)("h3",{id:"22-job-preparation-stage"},"2.2 Job preparation stage"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","Entrance's scheduler will generate different consumers to consume tasks according to the Label in the Job. When the task is consumed and modified to Running, it will enter the preparation state, and the task will be prepared after the corresponding task. Phase begins. It mainly involves the following services: Entrance, LinkisMaster, EnginepluginServer, EngineConnManager, and EngineConn. The following services will be introduced separately."),(0,r.kt)("h4",{id:"221-entrance-steps"},"2.2.1 Entrance steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The consumer (FIFOUserConsumer) consumes the supported concurrent number configured by the corresponding tag, and schedules the task consumption to the Orchestrator for execution"),(0,r.kt)("li",{parentName:"ol"},"First, Orchestrator arranges the submitted tasks. For ordinary hive and Spark single-engine tasks, it is mainly task parsing, label checking and verification. For multi-data source mixed computing scenarios, different tasks will be split and submitted to Different data sources for execution, etc."),(0,r.kt)("li",{parentName:"ol"},"In the preparation phase, another important thing for the Orchestrator is to request the LinkisMaster to obtain the EngineConn for executing the task. If LinkisMaster has a corresponding EngineConn that can be reused, it will return directly, if not, create an EngineConn."),(0,r.kt)("li",{parentName:"ol"},"Orchestrator gets the task and submits it to EngineConn for execution. The preparation phase ends and the job execution phase is entered.\nA brief description of the main classes involved:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"## Entrance\nFIFOUserConsumer: The consumer of the scheduler, which will generate different consumers according to the tags, such as IDE-hadoop and spark-2.4.3. Consume submitted tasks. And control the number of tasks running at the same time, configure the number of concurrency through the corresponding tag: wds.linkis.rm.instance\nDefaultEntranceExecutor: The entry point for task execution, which initiates a call to the orchestrator: callExecute\nJobReq: The task object accepted by the scheduler, converted from EntranceJob, mainly including code, label information, parameters, etc.\nOrchestratorSession: Similar to SparkSession, it is the entry point of the orchestrator. Normal singleton.\nOrchestration: The return object of the JobReq orchestrated by the OrchestratorSession, which supports execution and printing of execution plans, etc.\nOrchestrationFuture: Orchestration selects the return of asynchronous execution, including common methods such as cancel, waitForCompleted, and getResponse\nOperation: An interface used to extend operation tasks. Now LogOperation for obtaining logs and ProgressOperation for obtaining progress have been implemented.\n\n## Orchestrator\nCodeLogicalUnitExecTask: The execution entry of code type tasks. After the task is finally scheduled and run, the execute method of this class will be called. First, it will request EngineConn from LinkisMaster and then submit for execution.\nDefaultCodeExecTaskExecutorManager: EngineConn responsible for managing code types, including requesting and releasing EngineConn\nComputationEngineConnManager: Responsible for LinkisMaster to connect, request and release ENgineConn\n")),(0,r.kt)("h4",{id:"222-linkismaster-steps"},"2.2.2 LinkisMaster steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"LinkisMaster receives the request EngineConn request from the Entrance service for processing"),(0,r.kt)("li",{parentName:"ol"},"Determine if there is an EngineConn that can be reused by the corresponding Label, and return directly if there is"),(0,r.kt)("li",{parentName:"ol"},"If not, enter the process of creating EngineConn:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First select the appropriate EngineConnManager service through Label."),(0,r.kt)("li",{parentName:"ul"},"Then get the resource type and resource usage of this request EngineConn by calling EnginePluginServer,"),(0,r.kt)("li",{parentName:"ul"},"According to the resource type and resource, determine whether the corresponding Label still has resources, if so, enter the creation, otherwise throw a retry exception"),(0,r.kt)("li",{parentName:"ul"},"Request the EngineConnManager of the first step to start EngineConn"),(0,r.kt)("li",{parentName:"ul"},"Wait for the EngineConn to be idle, return the created EngineConn, otherwise judge whether the exception can be retried")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Lock the created EngineConn and return it to Entrance. Note that it will receive the corresponding request ID after sending the EC request for the asynchronous request Entrance. After the LinkisMaster request is completed, it will actively pass the corresponding Entrance service.")),(0,r.kt)("p",null,"A brief description of the main classes involved:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"## LinkisMaster\nEngineAskEngineService: LinkisMaster is responsible for processing the engine request processing class. The main logic judges whether there is an EngineConn that can be reused by calling EngineReuseService, otherwise calling EngineCreateService to create an EngineConn\nEngineCreateService: Responsible for creating EngineConn, the main steps are:\n\n\n##LinkisEnginePluginServer\nEngineConnLaunchService: Provides ECM to obtain the startup information of the corresponding engine type EngineConn\nEngineConnResourceFactoryService: Provided to LinkisMaster to obtain the resources needed to start EngineConn corresponding to this task\nEngineConnResourceService: Responsible for managing engine materials, including refreshing and refreshing all\n\n## EngineConnManager\nAbstractEngineConnLaunchService: Responsible for starting the request to start the EngineConn by accepting the LinkisMaster request, and completing the start of the EngineConn engine\nECMHook: It is used to process the pre and post operations before and after EngineConn is started. For example, hive UDF Jar is added to the classPath started by EngineConn.\n")),(0,r.kt)("p",null,"It should be noted here that if the user has an available idle engine, the four steps 1, 2, 3, and 4 will be skipped;"),(0,r.kt)("h3",{id:"23-job-execution-phase"},"2.3 Job execution phase"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","When the orchestrator in the Entrance service gets the EngineConn, it enters the execution phase. CodeLogicalUnitExecTask will submit the task to the EngineConn for execution, and the EngineConn will create different executors through the corresponding CodeLanguageLabel for execution. The main steps are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"CodeLogicalUnitExecTask submits tasks to EngineConn via RPC"),(0,r.kt)("li",{parentName:"ol"},"EngineConn determines whether there is a corresponding CodeLanguageLabel executor, if not, create it"),(0,r.kt)("li",{parentName:"ol"},"Submit to Executor for execution, and execute by linking to the specific underlying engine execution, such as Spark submitting sql, pyspark, and scala tasks through sparkSession"),(0,r.kt)("li",{parentName:"ol"},"The task status flow is pushed to the Entrance service in real time"),(0,r.kt)("li",{parentName:"ol"},"By implementing log4jAppender, SendAppender pushes logs to Entrance service via RPC"),(0,r.kt)("li",{parentName:"ol"},"Push task progress and resource information to Entrance in real time through timed tasks")),(0,r.kt)("p",null,"A brief description of the main classes involved:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ComputationTaskExecutionReceiver: The service class used by the Entrance server orchestrator to receive all RPC requests from EngineConn, responsible for receiving progress, logs, status, and result sets pushed to the last caller through the ListenerBus mode\nTaskExecutionServiceImpl: The service class for EngineConn to receive all RPC requests from Entrance, including task execution, status query, task Kill, etc.\nComputationExecutor: specific task execution parent class, such as Spark is divided into SQL/Python/Scala Executor\nComputationExecutorHook: Hook before and after Executor creation, such as initializing UDF, executing default UseDB, etc.\nEngineConnSyncListener: ResultSetListener/TaskProgressListener/TaskStatusListener is used to monitor the progress, result set, and progress of the Executor during the execution of the task.\nSendAppender: Responsible for pushing logs from EngineConn to Entrance\n")),(0,r.kt)("h3",{id:"24-job-result-push-stage"},"2.4 Job result push stage"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","This stage is relatively simple and is mainly used to return the result set generated by the task in EngineConn to the Client. The main steps are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, when EngineConn executes the task, the result set will be written, and the corresponding path will be obtained by writing to the file system. Of course, memory cache is also supported, and files are written by default."),(0,r.kt)("li",{parentName:"ol"},"EngineConn returns the corresponding result set path and the number of result sets to Entrance"),(0,r.kt)("li",{parentName:"ol"},"Entrance calls JobHistory to update the result set path information to the task table"),(0,r.kt)("li",{parentName:"ol"},"Client obtains the result set path through task information and reads the result set\nA brief description of the main classes involved:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"EngineExecutionContext: responsible for creating the result set and pushing the result set to the Entrance service\nResultSetWriter: Responsible for writing result sets to filesystems that support linkis-storage support, and now supports both local and HDFS. Supported result set types, table, text, HTML, image, etc.\nJobHistory: Stores all the information of the task, including status, result path, indicator information, etc. corresponding to the entity class in the DB\nResultSetReader: The key class for reading the result set\n")),(0,r.kt)("h2",{id:"3-summary"},"3. Summary"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","Above we mainly introduced the entire execution process of the OLAP task of the Linkis Computing Governance Service Group CGS. According to the processing process of the task request, the task is divided into four parts: submit, prepare, execute, and return the result stage. CGS is mainly designed and implemented according to these 4 stages, serves these 4 stages, and provides powerful and flexible capabilities for each stage. In the submission stage, it mainly provides a common interface, receives tasks submitted by upper-layer application tools, and provides basic parsing and interception capabilities; in the preparation stage, it mainly completes the parsing and scheduling of tasks through the orchestrator Orchestrator and LinkisMaster, and does Resource control, and the creation of EngineConn; in the execution stage, the connection with the underlying engine is actually completed through the engine connector EngineConn. Usually, each user needs to start a corresponding underlying engine connector EC to connect to a different underlying engine. . The computing task is submitted to the underlying engine for actual execution through EC, and information such as status, log, and result is obtained, and; in the result return stage, the result information of the task execution is returned, and various return modes are supported, such as: file Streams, JSON, JDBC, etc. The overall timing diagram is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"time",src:n(78030).Z})))}u.isMDXComponent=!0},86883:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linkis_job_arc-53d75e433b76ba786432f5a63391d5e7.png"},48177:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linkis_job_flow-1fb921406a0fe0fee71654be709c89f2.png"},78030:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linkis_job_time-27dc29c05dd07903e9a96e7ed9ae4f67.png"}}]);