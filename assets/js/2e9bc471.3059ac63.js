"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[64866],{3905:function(e,n,i){i.d(n,{Zo:function(){return g},kt:function(){return d}});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},g=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(i),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return i?t.createElement(h,a(a({ref:n},g),{},{components:i})):t.createElement(h,a({ref:n},g))}));function d(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},38345:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return g},default:function(){return u}});var t=i(87462),r=i(63366),o=(i(67294),i(3905)),a=["components"],l={title:"EngineConnPlugin Installation",sidebar_position:3},s="EngineConnPlugin installation",c={unversionedId:"deployment/engine-conn-plugin-installation",id:"version-1.0.3/deployment/engine-conn-plugin-installation",isDocsHomePage:!1,title:"EngineConnPlugin Installation",description:"This article mainly introduces the use of Linkis EngineConnPlugins, mainly from the aspects of compilation and installation.",source:"@site/versioned_docs/version-1.0.3/deployment/engine-conn-plugin-installation.md",sourceDirName:"deployment",slug:"/deployment/engine-conn-plugin-installation",permalink:"/docs/1.0.3/deployment/engine-conn-plugin-installation",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.3/deployment/engine-conn-plugin-installation.md",tags:[],version:"1.0.3",sidebarPosition:3,frontMatter:{title:"EngineConnPlugin Installation",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Cluster Deployment",permalink:"/docs/1.0.3/deployment/cluster-deployment"},next:{title:"Installation Directory Structure",permalink:"/docs/1.0.3/deployment/installation-hierarchical-structure"}},g=[{value:"1. Compilation and packaging of EngineConnPlugins",id:"1-compilation-and-packaging-of-engineconnplugins",children:[]},{value:"2. Engine Installation",id:"2-engine-installation",children:[{value:"2.1 Plugin package installation",id:"21-plugin-package-installation",children:[]},{value:"2.2 Configuration modification of management console (optional)",id:"22-configuration-modification-of-management-console-optional",children:[]},{value:"2.3 Engine refresh",id:"23-engine-refresh",children:[]}]}],p={toc:g};function u(e){var n=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"engineconnplugin-installation"},"EngineConnPlugin installation"),(0,o.kt)("p",null,"This article mainly introduces the use of Linkis EngineConnPlugins, mainly from the aspects of compilation and installation."),(0,o.kt)("h2",{id:"1-compilation-and-packaging-of-engineconnplugins"},"1. Compilation and packaging of EngineConnPlugins"),(0,o.kt)("p",null,"After Linkis 1.0, the engine is managed by EngineConnManager, and the EngineConnPlugin (ECP) supports real-time effectiveness.\nIn order to facilitate the EngineConnManager to be loaded into the corresponding EngineConnPlugin by labels, it needs to be packaged according to the following directory structure (take hive as an example):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hive: engine home directory, must be the name of the engine\n\u2514\u2500\u2500 dist # Dependency and configuration required for engine startup, different versions of the engine need to be in this directory to prevent the corresponding version directory\n    \u2514\u2500\u2500 v1.2.1 #Must start with \u2018v\u2019 and add engine version number \u20181.2.1\u2019\n        \u2514\u2500\u2500 conf # Configuration file directory required by the engine\n        \u2514\u2500\u2500 lib # Dependency package required by EngineConnPlugin\n\u2514\u2500\u2500 plugin #EngineConnPlugin directory, this directory is used for engine management service package engine startup command and resource application\n    \u2514\u2500\u2500 1.2.1 # Engine version\n        \u2514\u2500\u2500 linkis-engineplugin-hive-1.0.0-RC1.jar #Engine module package (only need to place a separate engine package)\n")),(0,o.kt)("p",null,"If you are adding a new engine, you can refer to hive's assembly configuration method, source code directory: linkis-engineconn-plugins/engineconn-plugins/hive/src/main/assembly/distribution.xml"),(0,o.kt)("h2",{id:"2-engine-installation"},"2. Engine Installation"),(0,o.kt)("h3",{id:"21-plugin-package-installation"},"2.1 Plugin package installation"),(0,o.kt)("p",null,"1.First, confirm the dist directory of the engine: wds.linkis.engineconn.home (get the value of this parameter from ${LINKIS_HOME}/conf/linkis.properties), this parameter is used by EngineConnPluginServer to read the configuration file that the engine depends on And third-party Jar packages. If the parameter (wds.linkis.engineconn.dist.load.enable=true) is set, the engine in this directory will be automatically read and loaded into the Linkis BML (material library)."),(0,o.kt)("p",null,"2.Second, confirm the engine Jar package directory:\nwds.linkis.engineconn.plugin.loader.store.path, which is used by EngineConnPluginServer to read the actual implementation Jar of the engine."),(0,o.kt)("p",null,"It is highly recommended specifying ",(0,o.kt)("strong",{parentName:"p"},"wds.linkis.engineconn.home and wds.linkis.engineconn.plugin.loader.store.path as")," the same directory, so that you can directly unzip the engine ZIP package exported by maven into this directory, such as: Place it in the ${LINKIS_HOME}/lib/linkis-engineconn-plugins directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${LINKIS_HOME}/lib/linkis-engineconn-plugins:\n\u2514\u2500\u2500 hive\n    \u2514\u2500\u2500 dist\n    \u2514\u2500\u2500 plugin\n\u2514\u2500\u2500 spark\n    \u2514\u2500\u2500 dist\n    \u2514\u2500\u2500 plugin\n")),(0,o.kt)("p",null,"If the two parameters do not point to the same directory, you need to place the dist and plugin directories separately, as shown in the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## dist directory\n${LINKIS_HOME}/lib/linkis-engineconn-plugins/dist:\n\u2514\u2500\u2500 hive\n    \u2514\u2500\u2500 dist\n\u2514\u2500\u2500 spark\n    \u2514\u2500\u2500 dist\n## plugin directory\n${LINKIS_HOME}/lib/linkis-engineconn-plugins/plugin:\n\u2514\u2500\u2500 hive\n    \u2514\u2500\u2500 plugin\n\u2514\u2500\u2500 spark\n    \u2514\u2500\u2500 plugin\n")),(0,o.kt)("h3",{id:"22-configuration-modification-of-management-console-optional"},"2.2 Configuration modification of management console (optional)"),(0,o.kt)("p",null,"The configuration of the Linkis1.0 management console is managed according to the engine label. If the new engine has configuration parameters, you need to insert the corresponding configuration parameters in the Configuration, and you need to insert the parameters in three tables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"linkis_configuration_config_key: Insert the key and default values of the configuration parameters of the engin\nlinkis_manager_label: Insert engine label such as hive-1.2.1\nlinkis_configuration_category: Insert the catalog relationship of the engine\nlinkis_configuration_config_value: Insert the configuration that the engine needs to display\n")),(0,o.kt)("p",null,"If it is an existing engine and a new version is added, you can modify the version of the corresponding engine in the linkis_configuration_dml.sql file for execution"),(0,o.kt)("h3",{id:"23-engine-refresh"},"2.3 Engine refresh"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'The engine supports real-time refresh. After the engine is placed in the corresponding directory, Linkis1.0 provides a method to load the engine without shutting down the server, and just send a request to the linkis-engineconn-plugin-server service through the restful interface, that is, the actual deployment of the service Ip+port, the request interface is http://ip:port/api/rest_j/v1/rpc/receiveAndReply, the request method is POST, the request body is {"method":"/enginePlugin/engineConn/refreshAll"}.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart refresh: the engine catalog can be forced to refresh by restarting"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"### cd to the sbin directory, restart linkis-engineconn-plugin-server\ncd /Linkis1.0.0/sbin\n## Execute linkis-daemon script\nsh linkis-daemon.sh restart linkis-engine-plugin-server\n")),(0,o.kt)("p",null,"3.Check whether the engine refresh is successful: If you encounter problems during the refresh process and need to confirm whether the refresh is successful, you can check whether the last_update_time of the linkis_engine_conn_plugin_bml_resources table in the database is the time when the refresh is triggered."))}u.isMDXComponent=!0}}]);