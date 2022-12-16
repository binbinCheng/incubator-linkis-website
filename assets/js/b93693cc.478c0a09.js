"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[86939],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>u});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return t?i.createElement(k,o(o({ref:n},g),{},{components:t})):i.createElement(k,o({ref:n},g))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var p=2;p<l;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82746:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const l={title:"OpenLooKeng Engine",sidebar_position:8},o=void 0,r={unversionedId:"engine-usage/openlookeng",id:"engine-usage/openlookeng",isDocsHomePage:!1,title:"OpenLooKeng Engine",description:"This article mainly introduces the installation, usage and configuration of the openLooKeng engine plugin in Linkis `.",source:"@site/docs/engine-usage/openlookeng.md",sourceDirName:"engine-usage",slug:"/engine-usage/openlookeng",permalink:"/docs/1.3.1/engine-usage/openlookeng",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/engine-usage/openlookeng.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"OpenLooKeng Engine",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Flink Engine",permalink:"/docs/1.3.1/engine-usage/flink"},next:{title:"Sqoop Engine",permalink:"/docs/1.3.1/engine-usage/sqoop"}},s=[{value:"1. Environmental Requirements",id:"1-environmental-requirements",children:[{value:"1.1 Environment Installation",id:"11-environment-installation",children:[]},{value:"1.2 Service Authentication",id:"12-service-authentication",children:[]}]},{value:"2. Engine plugin installation",id:"2-engine-plugin-installation",children:[{value:"2.1 Engine plugin preparation (choose one) non-default engine",id:"21-engine-plugin-preparation-choose-one-non-default-engine",children:[]},{value:"2.2 Upload and load engine plugins",id:"22-upload-and-load-engine-plugins",children:[]},{value:"2.3 Engine refresh",id:"23-engine-refresh",children:[]},{value:"2.3.2 Check whether the engine is refreshed successfully",id:"232-check-whether-the-engine-is-refreshed-successfully",children:[]}]},{value:"3. The use of the engine",id:"3-the-use-of-the-engine",children:[{value:"3.1 Submitting tasks via <code>Linkis-cli</code>",id:"31-submitting-tasks-via-linkis-cli",children:[]},{value:"3.2 Submitting tasks through <code>Linkis SDK</code>",id:"32-submitting-tasks-through-linkis-sdk",children:[]}]},{value:"4. Engine configuration instructions",id:"4-engine-configuration-instructions",children:[{value:"4.1 Default Configuration Description",id:"41-default-configuration-description",children:[]},{value:"4.2 Configuration modification",id:"42-configuration-modification",children:[]},{value:"4.3 Engine related data sheet",id:"43-engine-related-data-sheet",children:[]}]}],p={toc:s};function g(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article mainly introduces the installation, usage and configuration of the openLooKeng engine plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," `."),(0,a.kt)("h2",{id:"1-environmental-requirements"},"1. Environmental Requirements"),(0,a.kt)("h3",{id:"11-environment-installation"},"1.1 Environment Installation"),(0,a.kt)("p",null,"If you wish to deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"openLooKeng")," engine, you need to prepare a working ",(0,a.kt)("inlineCode",{parentName:"p"},"openLooKeng")," environment."),(0,a.kt)("h3",{id:"12-service-authentication"},"1.2 Service Authentication"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Prepare hetu-cli\nwget https://download.openlookeng.io/1.5.0/hetu-cli-1.5.0-executable.jar\nmv hetu-cli-1.5.0-executable.jar hetu-cli\nchmod +x hetu-cli\n\n# link service\n./hetu-cli --server 172.22.32.6:9090 --catalog tpcds --schema default\n\n# Execute query statement\nlk:default> select d_date_sk, d_date_id, d_date, d_month_seq from tpcds.sf1.date_dim order by d_date limit 5;\n\n# Get the following output to represent the service is available\n d_date_sk |    d_date_id     |   d_date   | d_month_seq\n-------------+--------+------------+------ -------\n   2415022 | AAAAAAAAOKJNECAA | 1900-01-02 | 0\n   2415023 | AAAAAAAAPKJNECAA | 1900-01-03 | 0\n   2415024 | AAAAAAAAALJNECAA | 1900-01-04 | 0\n   2415025 | AAAAAAAABLJNECAA | 1900-01-05 | 0\n   2415026 | AAAAAAAACLJNECAA | 1900-01-06 | 0\n(5 rows)\n\nQuery 20221110_043803_00011_m9gmv, FINISHED, 1 node\nSplits: 33 total, 33 done (100.00%)\n0:00 [73K rows, 0B] [86.8K rows/s, 0B/s]\n")),(0,a.kt)("h2",{id:"2-engine-plugin-installation"},"2. Engine plugin installation"),(0,a.kt)("h3",{id:"21-engine-plugin-preparation-choose-one-non-default-engine"},"2.1 Engine plugin preparation (choose one) ",(0,a.kt)("a",{parentName:"h3",href:"/docs/1.3.1/engine-usage/overview"},"non-default engine")),(0,a.kt)("p",null,"Method 1: Download the engine plug-in package directly"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis Engine Plugin Download")),(0,a.kt)("p",null,"Method 2: Compile the engine plug-in separately (requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"maven")," environment)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# compile\n${linkis_code_dir}/linkis-enginepconn-pugins/engineconn-plugins/openlookeng/\nmvn clean install\n# The compiled engine plug-in package is located in the following directory\n${linkis_code_dir}/linkis-engineconn-plugins/openlookeng/target/out/\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.1/deployment/install-engineconn"},"EngineConnPlugin Engine Plugin Installation")),(0,a.kt)("h3",{id:"22-upload-and-load-engine-plugins"},"2.2 Upload and load engine plugins"),(0,a.kt)("p",null,"Upload the engine plug-in package in 2.1 to the engine directory of the server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"The directory structure after uploading is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 openlookeng\n\u2502   \u251c\u2500\u2500 dist\n\u2502 \u2502 \u2514\u2500\u2500 v1.5.0\n\u2502   \u2502       \u251c\u2500\u2500 conf\n\u2502 \u2502 \u2514\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 plugin\n\u2502 \u2514\u2500\u2500 1.5.0\n")),(0,a.kt)("h3",{id:"23-engine-refresh"},"2.3 Engine refresh"),(0,a.kt)("h4",{id:"231-restart-and-refresh"},"2.3.1 Restart and refresh"),(0,a.kt)("p",null,"Refresh the engine by restarting the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,a.kt)("h3",{id:"232-check-whether-the-engine-is-refreshed-successfully"},"2.3.2 Check whether the engine is refreshed successfully"),(0,a.kt)("p",null,"You can check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"last_update_time")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," table in the database is the time to trigger the refresh."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"#Login to the `linkis` database\nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,a.kt)("h2",{id:"3-the-use-of-the-engine"},"3. The use of the engine"),(0,a.kt)("h3",{id:"31-submitting-tasks-via-linkis-cli"},"3.1 Submitting tasks via ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -engineType openlookeng-1.5.0 \\\n-codeType sql -code 'select * from tpcds.sf1.date_dim;' \\\n-submitUser hadoop -proxyUser hadoop \\\n-runtimeMap linkis.openlookeng.url=http://127.0.0.1:8080\n")),(0,a.kt)("p",null,"More ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," command parameter reference: ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.1/user-guide/linkiscli-manual"},"Linkis-Cli usage")),(0,a.kt)("h3",{id:"32-submitting-tasks-through-linkis-sdk"},"3.2 Submitting tasks through ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis SDK")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," provides ",(0,a.kt)("inlineCode",{parentName:"p"},"SDK")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Java")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Scala")," to submit tasks to ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," server. For details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.1/user-guide/sdk-manual"},"JAVA SDK Manual"),".\nFor ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," tasks you only need to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnType")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeType")," parameters in ",(0,a.kt)("inlineCode",{parentName:"p"},"Demo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> labels = new HashMap<String, Object>();\nlabels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "openlookeng-1.5.0"); // required engineType Label\nlabels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\nlabels.put(LabelKeyConstant.CODE_TYPE_KEY, "sql"); // required codeType\n')),(0,a.kt)("h2",{id:"4-engine-configuration-instructions"},"4. Engine configuration instructions"),(0,a.kt)("h3",{id:"41-default-configuration-description"},"4.1 Default Configuration Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.openlookeng.url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"link address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.openlookeng.catalog"),(0,a.kt)("td",{parentName:"tr",align:null},"system"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"catalog")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.openlookeng.source"),(0,a.kt)("td",{parentName:"tr",align:null},"global"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"source")))),(0,a.kt)("h3",{id:"42-configuration-modification"},"4.2 Configuration modification"),(0,a.kt)("p",null,"If the default parameters are not satisfied, there are the following ways to configure some basic parameters"),(0,a.kt)("h4",{id:"421-management-console-configuration"},"4.2.1 Management console configuration"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3686).Z})),(0,a.kt)("p",null,"Note: After modifying the configuration under the IDE label, you need to specify -creator IDE to take effect (other labels are similar), such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -creator IDE \\\n-engineType openlookeng-1.5.0 -codeType sql \\\n-code 'select * from tpcds.sf1.date_dim;' \\\n-submitUser hadoop -proxyUser hadoop \n")),(0,a.kt)("h4",{id:"422-task-interface-configuration"},"4.2.2 Task interface configuration"),(0,a.kt)("p",null,"Submit the task interface, configure it through the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'Example of http request parameters\n{\n    "executionContent": {"code": "select * from tpcds.sf1.date_dim;", "runType":  "sql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "linkis.openlookeng.url":"http://127.0.0.1:9090"\n                                }\n                            }\n                    },\n    "labels": {\n        "engineType": "openlookeng-1.5.0",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,a.kt)("h3",{id:"43-engine-related-data-sheet"},"4.3 Engine related data sheet"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," is managed through the engine tag, and the data table information involved is shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key: key and default values \u200b\u200bof configuration parameters inserted into the engine\nlinkis_cg_manager_label: insert engine label such as: openlookeng-1.5.0\nlinkis_ps_configuration_category: Insert the directory association of the engine\nlinkis_ps_configuration_config_value: Insert the configuration that the engine needs to display\nlinkis_ps_configuration_key_engine_relation: The relationship between the configuration item and the engine\n")),(0,a.kt)("p",null,"The initial data related to the engine in the table is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @OPENLOOKENG_LABEL=\"openlookeng-1.5.0\";\nSET @OPENLOOKENG_ALL=CONCAT('*-*,',@OPENLOOKENG_LABEL);\nSET @OPENLOOKENG_IDE=CONCAT('*-IDE,',@OPENLOOKENG_LABEL);\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @OPENLOOKENG_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @OPENLOOKENG_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @OPENLOOKENG_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.openlookeng.url', 'eg: http://127.0.0.1:8080', 'connection address', 'http://127.0.0.1:8080', 'Regex', '^\\\\s *http://([^:]+)(:\\\\d+)(/[^\\\\?]+)?(\\\\?\\\\S*)?$', 'openlookeng', 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.openlookeng.catalog', 'catalog', 'catalog', 'system', 'None', '', 'openlookeng', 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.openlookeng.source', 'source', 'source', 'global', 'None', '', 'openlookeng', 0, 0, 1, 'data source conf');\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'openlookeng' and label_value = @OPENLOOKENG_ALL);\n\n-- openlookeng default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @OPENLOOKENG_ALL);\n\n")))}g.isMDXComponent=!0},3686:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/openlookeng-config-08d22ef76ae17cc25791503a9a06ef99.png"}}]);