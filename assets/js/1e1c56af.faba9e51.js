"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[22788],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=i,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6019:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],s={title:"Console User Manual",sidebar_position:4},c="Introduction to Computatoin Governance Console",l={unversionedId:"user-guide/console-manual",id:"version-1.0.2/user-guide/console-manual",isDocsHomePage:!1,title:"Console User Manual",description:"Linkis1.0 has added a new Computatoin Governance Console page, which can provide users with an interactive UI interface for viewing the execution of Linkis tasks, custom parameter configuration, engine health status, resource surplus, etc, and then simplify user development and management efforts.",source:"@site/versioned_docs/version-1.0.2/user-guide/console-manual.md",sourceDirName:"user-guide",slug:"/user-guide/console-manual",permalink:"/docs/1.0.2/user-guide/console-manual",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/user-guide/console-manual.md",tags:[],version:"1.0.2",sidebarPosition:4,frontMatter:{title:"Console User Manual",sidebar_position:4},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Linkis-Cli Manual",permalink:"/docs/1.0.2/user-guide/linkiscli-manual"},next:{title:"Overview",permalink:"/docs/1.0.2/engine-usage/overview"}},u=[{value:"Global history",id:"global-history",children:[]},{value:"Resource management",id:"resource-management",children:[]},{value:"Parameter configuration",id:"parameter-configuration",children:[]},{value:"Global variable",id:"global-variable",children:[]},{value:"ECM management",id:"ecm-management",children:[]},{value:"Microservice management",id:"microservice-management",children:[]}],m={toc:u};function d(e){var n=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-computatoin-governance-console"},"Introduction to Computatoin Governance Console"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Linkis1.0 has added a new Computatoin Governance Console page, which can provide users with an interactive UI interface for viewing the execution of Linkis tasks, custom parameter configuration, engine health status, resource surplus, etc, and then simplify user development and management efforts.")),(0,o.kt)("h1",{id:"structure-of-computatoin-governance-console"},"Structure of Computatoin Governance Console"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Computatoin Governance Console is mainly composed of the following functional pages:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[Global History]"),(0,o.kt)("li",{parentName:"ul"},"[Resource Management]"),(0,o.kt)("li",{parentName:"ul"},"[Parameter Configuration]"),(0,o.kt)("li",{parentName:"ul"},"[Global Variables]"),(0,o.kt)("li",{parentName:"ul"},"[ECM Management]"," (Only visible to linkis computing management console administrators)"),(0,o.kt)("li",{parentName:"ul"},"[Microservice Management]"," (Only visible to linkis computing management console administrators)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Global history, resource management, parameter configuration, and global variables are visible to all users, while ECM management and microservice management are only visible to linkis computing management console administrators.\nThe administrator of the Linkis computing management desk can configure through the following parameters in linkis.properties:\nwds.linkis.governance.station.admin=hadoop (multiple administrator usernames are separated by \u2018,\u2019)")),(0,o.kt)("h1",{id:"introduction-to-the-functions-and-use-of-computatoin-governance-console"},"Introduction to the functions and use of Computatoin Governance Console"),(0,o.kt)("h2",{id:"global-history"},"Global history"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{src:t(77954).Z}),"\nThe global history interface provides the user's own linkis task submission record. The execution status of each task can be displayed here, and the reason for the failure of task execution can also be queried by clicking the view button on the left side of the task\n",(0,o.kt)("img",{alt:"./media/image2.png",src:t(21223).Z}),"\n",(0,o.kt)("img",{alt:"./media/image3.png",src:t(32715).Z}),"\nFor linkis computing management console administrators, the administrator can view the historical tasks of all users by clicking the switch administrator view on the page.\n",(0,o.kt)("img",{alt:"./media/image4.png",src:t(74121).Z}))),(0,o.kt)("h2",{id:"resource-management"},"Resource management"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the resource management interface, the user can see the status of the engine currently started and the status of resource occupation, and can also stop the engine through the page.\n",(0,o.kt)("img",{alt:"./media/image5.png",src:t(62342).Z}))),(0,o.kt)("h2",{id:"parameter-configuration"},"Parameter configuration"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The parameter configuration interface provides the function of user-defined parameter management. The user can manage the related configuration of the engine in this interface, and the administrator can add application types and engines here.\n",(0,o.kt)("img",{alt:"./media/image6.png",src:t(17068).Z}),'\nThe user can expand all the configuration information in the directory by clicking on the application type at the top and then select the engine type in the application, modify the configuration information and click "Save" to take effect.\nEdit catalog and new application types are only visible to the administrator. Click the edit button to delete the existing application and engine configuration (note! Deleting the application directly will delete all engine configurations under the application and cannot be restored), or add an engine, or click "New Application" to add a new application type.\n',(0,o.kt)("img",{alt:"./media/image7.png",src:t(1401).Z}),"\n",(0,o.kt)("img",{alt:"./media/image8.png",src:t(88507).Z}))),(0,o.kt)("h2",{id:"global-variable"},"Global variable"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the global variable interface, users can customize variables for code writing, just click the edit button to add parameters.\n",(0,o.kt)("img",{alt:"./media/image9.png",src:t(42924).Z}))),(0,o.kt)("h2",{id:"ecm-management"},"ECM management"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ECM management interface is used by the administrator to manage the ECM and all engines. This interface can view the status information of the ECM, modify the ECM label information, modify the ECM status information, and query all engine information under each ECM. And only the administrator can see, the administrator's configuration method can be viewed in the second chapter of this article.\n",(0,o.kt)("img",{alt:"./media/image10.png",src:t(78722).Z}),"\nClick the edit button to edit the label information of the ECM (only part of the labels are allowed to be edited) and modify the status of the ECM.\n",(0,o.kt)("img",{alt:"./media/image11.png",src:t(82927).Z}),"\nClick the instance name of the ECM to view all engine information under the ECM.\n",(0,o.kt)("img",{src:t(30300).Z}),"\n",(0,o.kt)("img",{src:t(25526).Z}),"\nSimilarly, you can stop the engine on this interface, and edit the label information of the engine.")),(0,o.kt)("h2",{id:"microservice-management"},"Microservice management"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The microservice management interface can view all microservice information under Linkis, and this interface is only visible to the administrator. Linkis's own microservices can be viewed by clicking on the Eureka registration center. The microservices associated with linkis will be listed directly on this interface.\n",(0,o.kt)("img",{src:t(51407).Z}),"\n",(0,o.kt)("img",{src:t(27489).Z}))))}d.isMDXComponent=!0},25526:function(e,n,t){n.Z=t.p+"assets/images/ECM_all_engine_information-9287e27e032defd0552d673aa255e6cb.png"},82927:function(e,n,t){n.Z=t.p+"assets/images/ECM_editing_interface-54359ff141679154e2c2e38699df8927.png"},78722:function(e,n,t){n.Z=t.p+"assets/images/ECM_management_interface-037cf2ab4369978f232a446c83342d33.png"},74121:function(e,n,t){n.Z=t.p+"assets/images/administrator_view-b63e316e47525591f50d2cc4abfe01ad.png"},30300:function(e,n,t){n.Z=t.p+"assets/images/click_the_instance_name_to_view_engine_information-8d7dae21b1e66aa0d9862583e3f93c6a.png"},1401:function(e,n,t){n.Z=t.p+"assets/images/edit_directory-c3171df67f1f3508bab9b932c71b05d2.png"},27489:function(e,n,t){n.Z=t.p+"assets/images/eureka_registration_center-da1d32db5479dfc28f4fbd9e36f1804b.png"},77954:function(e,n,t){n.Z=t.p+"assets/images/global_history_interface-d8c52caebaf1f5d2c0db8de151c372ed.png"},21223:function(e,n,t){n.Z=t.p+"assets/images/global_history_query_button-cd6d111f81c819de599b2c1cca4638f3.png"},42924:function(e,n,t){n.Z=t.p+"assets/images/global_variable_interface-718e695679bd48943ed38b5232ce4502.png"},51407:function(e,n,t){n.Z=t.p+"assets/images/microservice_management_interface-c14c288d36409ad4856787832a24fc3c.png"},88507:function(e,n,t){n.Z=t.p+"assets/images/new_application_type-107d71fe6993135c676e6c09e7361971.png"},17068:function(e,n,t){n.Z=t.p+"assets/images/parameter_configuration_interface-69322c08ebd2afed0979402b02f2cd8e.png"},62342:function(e,n,t){n.Z=t.p+"assets/images/resource_management_interface-6818c596351b07c3f2ff5fd38f50fd9d.png"},32715:function(e,n,t){n.Z=t.p+"assets/images/task_execution_log_of_a_single_task-9ca7aaa8d9327a7651897ff69e15e429.png"}}]);