"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[36095],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92264:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"DataSource",sidebar_position:7},l=void 0,c={unversionedId:"deployment/start-metadatasource",id:"version-1.1.2/deployment/start-metadatasource",isDocsHomePage:!1,title:"DataSource",description:"Introduce how to use the new feature function data source of version 1.1.0",source:"@site/versioned_docs/version-1.1.2/deployment/start-metadatasource.md",sourceDirName:"deployment",slug:"/deployment/start-metadatasource",permalink:"/docs/1.1.2/deployment/start-metadatasource",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.2/deployment/start-metadatasource.md",tags:[],version:"1.1.2",sidebarPosition:7,frontMatter:{title:"DataSource",sidebar_position:7},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"Involve SkyWaling into Linkis",permalink:"/docs/1.1.2/deployment/involve-skywalking-into-linkis"},next:{title:"Deploy Linkis without HDFS",permalink:"/docs/1.1.2/deployment/deploy-linkis-without-hdfs"}},u=[{value:"1. Data source function introduction",id:"1-data-source-function-introduction",children:[{value:"1.1 Concept",id:"11-concept",children:[]},{value:"1.2 Three main modules",id:"12-three-main-modules",children:[]},{value:"1.3 Processing logic",id:"13-processing-logic",children:[]},{value:"1.3 Source module directory structure",id:"13-source-module-directory-structure",children:[]},{value:"1.4 Installation package directory structure",id:"14-installation-package-directory-structure",children:[]},{value:"1.5 Configuration Parameters",id:"15-configuration-parameters",children:[]}]},{value:"2. Enable data source function",id:"2-enable-data-source-function",children:[]},{value:"3. Use of data sources",id:"3-use-of-data-sources",children:[{value:"3.1 Mysql data source",id:"31-mysql-data-source",children:[]},{value:"3.2 Hive data source",id:"32-hive-data-source",children:[]}]}],d={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Introduce how to use the new feature function data source of version 1.1.0")),(0,i.kt)("h2",{id:"1-data-source-function-introduction"},"1. Data source function introduction"),(0,i.kt)("h3",{id:"11-concept"},"1.1 Concept"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data source: We call database services that can provide data storage as databases, such as mysql/hive/kafka. The data source defines the configuration information for connecting to the actual database. The configuration information is mainly the address required for connection and user authentication information , connection parameters, etc. Stored in the linkis",(0,i.kt)("em",{parentName:"li"},"ps_dm_datasource"),"* table related to the linkis database"),(0,i.kt)("li",{parentName:"ul"},"Metadata: single refers to the metadata of the database, which refers to the data that defines the data structure and the data of various object structures of the database. For example, the database name, table name, column name, field length, type and other information data in the database.")),(0,i.kt)("h3",{id:"12-three-main-modules"},"1.2 Three main modules"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"linkis-datasource-client"),"\nClient module, DataSourceRemoteClient for basic management of user data sources, and MetaDataRemoteClient for metadata query operations."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"linkis-datasource-manager-server"),"\nData source management module, service name ps-data-source-manager. Perform basic management of data sources, and provide http interfaces such as adding, querying, modifying, and connection testing of external data sources. The rpc service is provided internally, which is convenient for the data element management module to call through rpc to query the necessary information needed to establish a connection to the database."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.1.2/api/http/linkis-ps-publicservice-api/data-source-manager-api"},"http interface documentation")),(0,i.kt)("li",{parentName:"ul"},"http interface class org.apache.linkis.metadatamanager.server.restful"),(0,i.kt)("li",{parentName:"ul"},"rpc interface class org.apache.linkis.metadatamanager.server.receiver")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"linkis-metedata-manager-server"),"\nData element management module, service name ps-metadatamanager. It provides the basic query function of the data metadata of the database, provides the http interface externally, and provides the rpc service internally, which is convenient for the data source management module to perform the connection test of the data source through the rpc call."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.1.2/api/http/linkis-ps-publicservice-api/metadatamanager-api"},"http interface documentation")),(0,i.kt)("li",{parentName:"ul"},"http interface class org.apache.linkis.datasourcemanager.core.restful"),(0,i.kt)("li",{parentName:"ul"},"rpc interface class org.apache.linkis.datasourcemanager.core.receivers")),(0,i.kt)("h3",{id:"13-processing-logic"},"1.3 Processing logic"),(0,i.kt)("h4",{id:"131-linkisdatasourceremoteclient"},"1.3.1 LinkisDataSourceRemoteClient"),(0,i.kt)("p",null,"The functional structure diagram is as follows:\n",(0,i.kt)("img",{alt:"datasource",src:a(31183).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The LinkisDataSourceRemoteClient client assembles the http request according to the request parameters,"),(0,i.kt)("li",{parentName:"ul"},"HTTP request sent to linkis-ps-data-source-manager"),(0,i.kt)("li",{parentName:"ul"},"linkis-ps-data-source-manager will perform basic parameter verification, some interfaces can only be operated by the administrator role"),(0,i.kt)("li",{parentName:"ul"},"linkis-ps-data-source-manager performs basic data operations with the database"),(0,i.kt)("li",{parentName:"ul"},"The data source test connection interface provided by linkis-ps-data-source-manager internally uses rpc to call the ps-metadatamanager method for connection test"),(0,i.kt)("li",{parentName:"ul"},"The data result after the http request is processed will be mapped and converted from the result set to the entity class by annotating the DWSHttpMessageResult function")),(0,i.kt)("p",null,"LinkisDataSourceRemoteClient interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GetAllDataSourceTypesResult getAllDataSourceTypes(GetAllDataSourceTypesAction) Query all data source types"),(0,i.kt)("li",{parentName:"ul"},"QueryDataSourceEnvResult queryDataSourceEnv(QueryDataSourceEnvAction) Query the cluster configuration information that can be used by the data source"),(0,i.kt)("li",{parentName:"ul"},"GetInfoByDataSourceIdResult getInfoByDataSourceId(GetInfoByDataSourceIdAction): query data source information by data source id"),(0,i.kt)("li",{parentName:"ul"},"QueryDataSourceResult queryDataSource(QueryDataSourceAction) query data source information"),(0,i.kt)("li",{parentName:"ul"},"GetConnectParamsByDataSourceIdResult getConnectParams(GetConnectParamsByDataSourceIdAction) Get connection configuration parameters"),(0,i.kt)("li",{parentName:"ul"},"CreateDataSourceResult createDataSource(CreateDataSourceAction) to create a data source"),(0,i.kt)("li",{parentName:"ul"},"DataSourceTestConnectResult getDataSourceTestConnect(DataSourceTestConnectAction) to test whether the data source can be connected normally"),(0,i.kt)("li",{parentName:"ul"},"DeleteDataSourceResult deleteDataSource(DeleteDataSourceAction) deletes the data source"),(0,i.kt)("li",{parentName:"ul"},"ExpireDataSourceResult expireDataSource(ExpireDataSourceAction) sets the data source to expired state"),(0,i.kt)("li",{parentName:"ul"},"GetDataSourceVersionsResult getDataSourceVersions(GetDataSourceVersionsAction) Query the version list of the data source configuration"),(0,i.kt)("li",{parentName:"ul"},"PublishDataSourceVersionResult publishDataSourceVersion(PublishDataSourceVersionAction) publishes the data source configuration version"),(0,i.kt)("li",{parentName:"ul"},"UpdateDataSourceResult updateDataSource(UpdateDataSourceAction) to update the data source"),(0,i.kt)("li",{parentName:"ul"},"UpdateDataSourceParameterResult updateDataSourceParameter(UpdateDataSourceParameterAction) Update data source configuration parameters"),(0,i.kt)("li",{parentName:"ul"},"GetKeyTypeDatasourceResult getKeyDefinitionsByType(GetKeyTypeDatasourceAction) Query the configuration properties required by a data source type")),(0,i.kt)("h4",{id:"132-linkismetadataremoteclient"},"1.3.2 LinkisMetaDataRemoteClient"),(0,i.kt)("p",null,"The functional structure diagram is as follows:\n",(0,i.kt)("img",{alt:"metadata",src:a(20824).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LinkisMetaDataRemoteClient client, according to the request parameters, assemble the http request,"),(0,i.kt)("li",{parentName:"ul"},"HTTP request sent to ps-metadatamanager"),(0,i.kt)("li",{parentName:"ul"},"ps-metadatamanager will perform basic parameter verification,"),(0,i.kt)("li",{parentName:"ul"},"The request will send an RPC request to linkis-ps-data-source-manager based on the parameter datasourceId to obtain the type of the data source, connection parameters such as username and password, etc."),(0,i.kt)("li",{parentName:"ul"},"After getting the information required for the connection, load the lib package in the corresponding directory according to the data source type, and call the corresponding function method through the reflection mechanism to query the metadata information"),(0,i.kt)("li",{parentName:"ul"},"The data result after the http request is processed will be mapped and converted from the result set to the entity class by annotating the DWSHttpMessageResult function")),(0,i.kt)("p",null,"LinkisMetaDataRemoteClient interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MetadataGetDatabasesResult getDatabases(MetadataGetDatabasesAction) query database list"),(0,i.kt)("li",{parentName:"ul"},"MetadataGetTablesResult getTables(MetadataGetTablesAction) query table data"),(0,i.kt)("li",{parentName:"ul"},"MetadataGetTablePropsResult getTableProps(MetadataGetTablePropsAction)"),(0,i.kt)("li",{parentName:"ul"},"MetadataGetPartitionsResult getPartitions(MetadataGetPartitionsAction) query partition table"),(0,i.kt)("li",{parentName:"ul"},"MetadataGetColumnsResult getColumns(MetadataGetColumnsAction) query data table fields")),(0,i.kt)("h3",{id:"13-source-module-directory-structure"},"1.3 Source module directory structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"linkis-public-enhancements/linkis-datasource\n\n\u251c\u2500\u2500 linkis-datasource-client //client code\n\u251c\u2500\u2500 linkis-datasource-manager //Datasource management module\n\u2502 \u251c\u2500\u2500 common //Data source management common module\n\u2502 \u2514\u2500\u2500 server //Data source management service module\n\u251c\u2500\u2500 linkis-metadata //Module existing in the old version, reserved\n\u251c\u2500\u2500 linkis-metadata-manager //Data Metadata Management Module\n\u2502 \u251c\u2500\u2500 common //Data element management common module\n\u2502 \u251c\u2500\u2500 server //Data element management service module\n\u2502 \u2514\u2500\u2500 service //Supported data sources\n\u2502 \u251c\u2500\u2500 elasticsearch\n\u2502 \u251c\u2500\u2500 hive\n\u2502 \u251c\u2500\u2500 kafka\n\u2502 \u2514\u2500\u2500 mysql\n\n\n")),(0,i.kt)("h3",{id:"14-installation-package-directory-structure"},"1.4 Installation package directory structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"/lib/linkis-public-enhancements/\n\n\u251c\u2500\u2500 linkis-ps-data-source-manager\n\u251c\u2500\u2500 linkis-ps-metadatamanager\n\u2502 \u2514\u2500\u2500 service\n\u2502 \u251c\u2500\u2500 elasticsearch\n\u2502 \u251c\u2500\u2500 hive\n\u2502 \u251c\u2500\u2500 kafka\n\u2502 \u2514\u2500\u2500 mysql\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wds.linkis.server.mdm.service.lib.dir")," controls the classpath loaded during reflection calls. The default value of the parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},"/lib/linkis-public-enhancements/linkis-ps-metadatamanager/service")),(0,i.kt)("h3",{id:"15-configuration-parameters"},"1.5 Configuration Parameters"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.0/tuning-and-troubleshooting/configuration#6-datasource-and-metadata-service-configuration-parameters"},"Tuning and Troubleshooting>Parameter List#datasourceConfiguration Parameters")),(0,i.kt)("h2",{id:"2-enable-data-source-function"},"2. Enable data source function"),(0,i.kt)("p",null,"In the startup script of linkis, the two services related to the data source (ps-data-source-manager, ps-metadatamanager) will not be started by default.\nIf you want to use the data source service, you can enable it in the following ways:\nModify ",(0,i.kt)("inlineCode",{parentName:"p"},"export ENABLE_METADATA_MANAGER=true")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"$LINKIS_CONF_DIR/linkis-env.sh")," to true.\nWhen the service is started and stopped through linkis-start-all.sh/linkis-stop-all.sh, the data source service will be started and stopped."),(0,i.kt)("p",null,"Check whether the service starts normally through the eureka page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"datasource eureka",src:a(6762).Z})),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Management of linkis The web version needs to be upgraded to version 1.1.0 to use the data source management page function on the linkis console."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"At present, there are jar packages of mysql/hive/kafak/elasticsearch in the data source, but the kafak/elasticsearch data source has not been strictly tested, and the complete availability of functions is not guaranteed.")))))),(0,i.kt)("h2",{id:"3-use-of-data-sources"},"3. Use of data sources"),(0,i.kt)("p",null,"The use of data sources is divided into three steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step 1. Create data source/configure connection parameters"),(0,i.kt)("li",{parentName:"ul"},"step 2. Publish the data source and select the connection configuration version to use"),(0,i.kt)("li",{parentName:"ul"},"step 3. Data source usage, query metadata information\n, hive/kafka/elasticsearch configuration is associated with the corresponding cluster environment configuration.")),(0,i.kt)("h3",{id:"31-mysql-data-source"},"3.1 Mysql data source"),(0,i.kt)("h4",{id:"311-created-through-the-management-console"},"3.1.1 Created through the management console"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can only create configuration data sources, and test whether the data sources can be connected normally, and cannot directly query metadata")),(0,i.kt)("p",null,"Data Source Management > New Data Source > Select MySQL Type"),(0,i.kt)("p",null,"Enter relevant configuration information"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create mysql",src:a(13165).Z})),(0,i.kt)("p",null,"After the entry is successful, you can pass the connection test to verify whether the connection can be made normally"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The system to which the data source created through the management console belongs is Linkis"),(0,i.kt)("li",{parentName:"ul"},"After the creation is successful, it needs to be published (switching and selecting the configuration parameter version when publishing) before it can be used normally")))),(0,i.kt)("p",null,"Publishing of the configuration (using that configuration for the connection to the data source):"),(0,i.kt)("p",null,"Click on the version and then pop up the page to select the appropriate configuration to publish"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"publish",src:a(59851).Z})),(0,i.kt)("h4",{id:"312-using-the-client"},"3.1.2 Using the client"),(0,i.kt)("p",null,"scala code example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.linkis.datasource.client\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nimport org.apache.linkis.common.utils.JsonUtils\nimport org.apache.linkis.datasource.client.impl.{LinkisDataSourceRemoteClient, LinkisMetaDataRemoteClient}\nimport org.apache.linkis.datasource.client.request._\nimport org.apache.linkis.datasource.client.response._\nimport org.apache.linkis.datasourcemanager.common.domain.DataSource\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport org.junit.jupiter.api.{Disabled, Test}\n\nobject TestMysqlClient {\n\n  val gatewayUrl = "http://127.0.0.1:9001"\n  val clientConfig = DWSClientConfigBuilder.newBuilder\n    .addServerUrl(gatewayUrl)\n    .connectionTimeout(30000)\n    .discoveryEnabled(false)\n    .discoveryFrequency(1, TimeUnit.MINUTES)\n    .loadbalancerEnabled(true)\n    .maxConnectionSize(1)\n    .retryEnabled(false)\n    .readTimeout(30000)\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy)\n    .setAuthTokenKey("hadoop")\n    .setAuthTokenValue("xxxxx")\n    .setDWSVersion("v1")\n\n  val dataSourceclient = new LinkisDataSourceRemoteClient(clientConfig.build())\n\n  val clientConfig2 = DWSClientConfigBuilder.newBuilder\n    .addServerUrl(gatewayUrl)\n    .connectionTimeout(30000)\n    .discoveryEnabled(false)\n    .discoveryFrequency(1, TimeUnit.MINUTES)\n    .loadbalancerEnabled(true)\n    .maxConnectionSize(1)\n    .retryEnabled(false)\n    .readTimeout(30000)\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy)\n    .setAuthTokenKey("hadoop")\n    .setAuthTokenValue("xxxxx")\n    .setDWSVersion("v1")\n\n  val metaDataClient = new LinkisMetaDataRemoteClient(clientConfig2.build())\n\n  @Test\n  @Disabled\n  def testCreateDataSourceMysql: Unit = {\n    val user = "hadoop"\n    val system = "Linkis"\n\n    //create data source\n    val dataSource = new DataSource();\n    dataSource.setDataSourceName("for-mysql-test")\n    dataSource.setDataSourceDesc("this is for mysql test")\n    dataSource.setCreateSystem(system)\n    dataSource.setDataSourceTypeId(1L)\n\n    val map = JsonUtils.jackson.readValue(JsonUtils.jackson.writeValueAsString(dataSource), new util.HashMap[String, Any]().getClass)\n    val createDataSourceAction: CreateDataSourceAction = CreateDataSourceAction.builder()\n      .setUser(user)\n      .addRequestPayloads(map)\n      .build()\n    val createDataSourceResult: CreateDataSourceResult = dataSourceclient.createDataSource(createDataSourceAction)\n    val dataSourceId = createDataSourceResult.getInsertId\n\n\n    // set connection parameters\n    val params = new util.HashMap[String, Any]\n\n    val connectParams = new util.HashMap[String, Any]\n    connectParams.put("host", "127.0.0.1")\n    connectParams.put("port", "36000")\n    connectParams.put("username", "db username")\n    connectParams.put("password", "db password")\n\n    params.put("connectParams", connectParams)\n    params.put("comment", "init")\n\n    val updateParameterAction: UpdateDataSourceParameterAction = UpdateDataSourceParameterAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .addRequestPayloads(params)\n      .build()\n    val updateParameterResult: UpdateDataSourceParameterResult = dataSourceclient.updateDataSourceParameter(updateParameterAction)\n\n    val version: Long = updateParameterResult.getVersion\n\n    //publish configuration version\n    dataSourceclient.publishDataSourceVersion(\n      PublishDataSourceVersionAction.builder()\n        .setDataSourceId(dataSourceId)\n        .setUser(user)\n        .setVersion(version)\n        .build())\n\n     // use example\n    val metadataGetDatabasesAction: MetadataGetDatabasesAction = MetadataGetDatabasesAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setSystem(system)\n      .build()\n    val metadataGetDatabasesResult: MetadataGetDatabasesResult = metaDataClient.getDatabases(metadataGetDatabasesAction)\n\n    val metadataGetTablesAction: MetadataGetTablesAction = MetadataGetTablesAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setDatabase("linkis")\n      .setSystem(system)\n      .build()\n    val metadataGetTablesResult: MetadataGetTablesResult = metaDataClient.getTables(metadataGetTablesAction)\n\n    val metadataGetColumnsAction = MetadataGetColumnsAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setDatabase("linkis")\n      .setSystem(system)\n      .setTable("linkis_datasource")\n      .build()\n    val metadataGetColumnsResult: MetadataGetColumnsResult = metaDataClient.getColumns(metadataGetColumnsAction)\n\n  }\n}\n\n')),(0,i.kt)("h3",{id:"32-hive-data-source"},"3.2 Hive data source"),(0,i.kt)("h4",{id:"321-created-through-the-management-console"},"3.2.1 Created through the management console"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can only create configuration data sources, and test whether the data sources can be connected normally, and cannot directly query metadata")),(0,i.kt)("p",null,"First need to configure the cluster environment information\nTable ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis_ps_dm_datasource_env")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-roomsql"},'INSERT INTO `linkis_ps_dm_datasource_env`\n(`env_name`, `env_desc`, `datasource_type_id`, `parameter`, `create_user`, `modify_user`)\nVALUES\n(\'testEnv\', \'TestEnv\', 4, \'{\\r\\n "keytab": "4dd408ad-a2f9-4501-83b3-139290977ca2",\\r\\n "uris": "thrift://clustername:9083 ",\\r\\n "principle":"hadoop@WEBANK.COM"\\r\\n}\', \'user\',\'user\');\n\n')),(0,i.kt)("p",null,"The primary key id, used as the envId, needs to pass the envId parameter to obtain information about the cluster configuration when establishing a connection.\nExplanation of configuration fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "keytab": "bml resource id", //keytab stores the resourceId in the material library, which currently needs to be manually uploaded through the http interface.\n    "uris": "thrift://clustername:9083",\n    "principle":"hadoop@WEBANK.COM" //Authenticated principle\n}\n')),(0,i.kt)("p",null,"Create on the web side:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create_hive",src:a(326).Z})),(0,i.kt)("h4",{id:"322-using-the-client"},"3.2.2 Using the client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.linkis.datasource.client\n\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nimport org.apache.linkis.common.utils.JsonUtils\nimport org.apache.linkis.datasource.client.impl.{LinkisDataSourceRemoteClient, LinkisMetaDataRemoteClient}\nimport org.apache.linkis.datasource.client.request._\nimport org.apache.linkis.datasource.client.response._\nimport org.apache.linkis.datasourcemanager.common.domain.DataSource\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport org.junit.jupiter.api.{Disabled, Test}\n\nobject TestHiveClient {\n  val gatewayUrl = "http://127.0.0.1:9001"\n  val clientConfig = DWSClientConfigBuilder.newBuilder\n    .addServerUrl(gatewayUrl)\n    .connectionTimeout(30000)\n    .discoveryEnabled(false)\n    .discoveryFrequency(1, TimeUnit.MINUTES)\n    .loadbalancerEnabled(true)\n    .maxConnectionSize(1)\n    .retryEnabled(false)\n    .readTimeout(30000)\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy)\n    .setAuthTokenKey("hadoop")\n    .setAuthTokenValue("xxxxx")\n    .setDWSVersion("v1")\n\n  val dataSourceclient = new LinkisDataSourceRemoteClient(clientConfig.build())\n\n  val clientConfig2 = DWSClientConfigBuilder.newBuilder\n    .addServerUrl(gatewayUrl)\n    .connectionTimeout(30000)\n    .discoveryEnabled(false)\n    .discoveryFrequency(1, TimeUnit.MINUTES)\n    .loadbalancerEnabled(true)\n    .maxConnectionSize(1)\n    .retryEnabled(false)\n    .readTimeout(30000)\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy)\n    .setAuthTokenKey("hadoop")\n    .setAuthTokenValue("xxxxx")\n    .setDWSVersion("v1")\n\n  val metaDataClient = new LinkisMetaDataRemoteClient(clientConfig2.build())\n\n\n  @Test\n  @Disabled\n  def testCreateDataSourceMysql: Unit = {\n    val user = "hadoop"\n    val system = "Linkis"\n\n   //create data source\n    val dataSource = new DataSource();\n    dataSource.setDataSourceName("for-hive-test")\n    dataSource.setDataSourceDesc("this is for hive test")\n    dataSource.setCreateSystem(system)\n    dataSource.setDataSourceTypeId(4L)\n\n    val map = JsonUtils.jackson.readValue(JsonUtils.jackson.writeValueAsString(dataSource), new util.HashMap[String, Any]().getClass)\n    val createDataSourceAction: CreateDataSourceAction = CreateDataSourceAction.builder()\n      .setUser(user)\n      .addRequestPayloads(map)\n      .build()\n    val createDataSourceResult: CreateDataSourceResult = dataSourceclient.createDataSource(createDataSourceAction)\n    val dataSourceId = createDataSourceResult.getInsertId\n\n     // set connection parameters\n    val params = new util.HashMap[String, Any]\n    val connectParams = new util.HashMap[String, Any]\n    connectParams.put("envId", "3")\n    params.put("connectParams", connectParams)\n    params.put("comment", "init")\n\n    val updateParameterAction: UpdateDataSourceParameterAction = UpdateDataSourceParameterAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .addRequestPayloads(params)\n      .build()\n    val updateParameterResult: UpdateDataSourceParameterResult = dataSourceclient.updateDataSourceParameter(updateParameterAction)\n\n    val version: Long = updateParameterResult.getVersion\n\n    //publish configuration version\n    dataSourceclient.publishDataSourceVersion(\n      PublishDataSourceVersionAction.builder()\n        .setDataSourceId(dataSourceId)\n        .setUser(user)\n        .setVersion(version)\n        .build())\n\n    // use example\n    val metadataGetDatabasesAction: MetadataGetDatabasesAction = MetadataGetDatabasesAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setSystem(system)\n      .build()\n    val metadataGetDatabasesResult: MetadataGetDatabasesResult = metaDataClient.getDatabases(metadataGetDatabasesAction)\n\n    val metadataGetTablesAction: MetadataGetTablesAction = MetadataGetTablesAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setDatabase("linkis_test_ind")\n      .setSystem(system)\n      .build()\n    val metadataGetTablesResult: MetadataGetTablesResult = metaDataClient.getTables(metadataGetTablesAction)\n\n\n\n    val metadataGetColumnsAction = MetadataGetColumnsAction.builder()\n      .setUser(user)\n      .setDataSourceId(dataSourceId)\n      .setDatabase("linkis_test_ind")\n      .setSystem(system)\n      .setTable("test")\n      .build()\n    val metadataGetColumnsResult: MetadataGetColumnsResult = metaDataClient.getColumns(metadataGetColumnsAction)\n\n  }\n}\n')))}m.isMDXComponent=!0},326:function(e,t,a){t.Z=a.p+"assets/images/create_hive-6b7da346506ec10f1ebd68ed37ff4e12.png"},13165:function(e,t,a){t.Z=a.p+"assets/images/create_mysql-748ae7a51622be09651e31630bf6403e.png"},31183:function(e,t,a){t.Z=a.p+"assets/images/datasource-33466f8154b90ce8c308f80af54fed9d.png"},6762:function(e,t,a){t.Z=a.p+"assets/images/eureka-6c655a155cf632afe0003ad92f7cddd7.png"},20824:function(e,t,a){t.Z=a.p+"assets/images/metadata-00c6c1e49a4eafa8a2496b9a08917758.png"},59851:function(e,t,a){t.Z=a.p+"assets/images/publish_version-74eb63ec4aedd2b4a28ff93fbb5e567d.png"}}]);