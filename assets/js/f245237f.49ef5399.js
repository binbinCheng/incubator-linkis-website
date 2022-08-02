"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[44963],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94346:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],c={title:"Console User Manual",sidebar_position:4},l="Introduction to Computatoin Governance Console",s={unversionedId:"user_guide/console-manual",id:"version-1.0.2/user_guide/console-manual",isDocsHomePage:!1,title:"Console User Manual",description:"Linkis1.0 has added a new Computatoin Governance Console page, which can provide users with an interactive UI interface for viewing the execution of Linkis tasks, custom parameter configuration, engine health status, resource surplus, etc, and then simplify user development and management efforts.",source:"@site/versioned_docs/version-1.0.2/user_guide/console-manual.md",sourceDirName:"user_guide",slug:"/user_guide/console-manual",permalink:"/docs/1.0.2/user_guide/console-manual",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/user_guide/console-manual.md",tags:[],version:"1.0.2",sidebarPosition:4,frontMatter:{title:"Console User Manual",sidebar_position:4},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Linkis-Cli Manual",permalink:"/docs/1.0.2/user_guide/linkiscli-manual"},next:{title:"Overview",permalink:"/docs/1.0.2/engine_usage/overview"}},u=[{value:"Global history",id:"global-history",children:[]},{value:"Resource management",id:"resource-management",children:[]},{value:"Parameter configuration",id:"parameter-configuration",children:[]},{value:"Global variable",id:"global-variable",children:[]},{value:"ECM management",id:"ecm-management",children:[]},{value:"Microservice management",id:"microservice-management",children:[]}],m={toc:u};function p(e){var t=e.components,c=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-computatoin-governance-console"},"Introduction to Computatoin Governance Console"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Linkis1.0 has added a new Computatoin Governance Console page, which can provide users with an interactive UI interface for viewing the execution of Linkis tasks, custom parameter configuration, engine health status, resource surplus, etc, and then simplify user development and management efforts.")),(0,i.kt)("h1",{id:"structure-of-computatoin-governance-console"},"Structure of Computatoin Governance Console"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Computatoin Governance Console is mainly composed of the following functional pages:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Global History]"),(0,i.kt)("li",{parentName:"ul"},"[Resource Management]"),(0,i.kt)("li",{parentName:"ul"},"[Parameter Configuration]"),(0,i.kt)("li",{parentName:"ul"},"[Global Variables]"),(0,i.kt)("li",{parentName:"ul"},"[ECM Management]"," (Only visible to linkis computing management console administrators)"),(0,i.kt)("li",{parentName:"ul"},"[Microservice Management]"," (Only visible to linkis computing management console administrators)")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Global history, resource management, parameter configuration, and global variables are visible to all users, while ECM management and microservice management are only visible to linkis computing management console administrators.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The administrator of the Linkis computing management desk can configure through the following parameters in linkis.properties:")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"wds.linkis.governance.station.admin=hadoop (multiple administrator usernames are separated by \u2018,\u2019)")),(0,i.kt)("h1",{id:"introduction-to-the-functions-and-use-of-computatoin-governance-console"},"Introduction to the functions and use of Computatoin Governance Console"),(0,i.kt)("h2",{id:"global-history"},"Global history"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(77954).Z}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The global history interface provides the user's own linkis task submission record. The execution status of each task can be displayed here, and the reason for the failure of task execution can also be queried by clicking the view button on the left side of the task")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"./media/image2.png",src:n(21223).Z}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"./media/image3.png",src:n(32715).Z}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For linkis computing management console administrators, the administrator can view the historical tasks of all users by clicking the switch administrator view on the page.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"./media/image4.png",src:n(74121).Z}))),(0,i.kt)("h2",{id:"resource-management"},"Resource management"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In the resource management interface, the user can see the status of the engine currently started and the status of resource occupation, and can also stop the engine through the page.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"./media/image5.png",src:n(62342).Z}))),(0,i.kt)("h2",{id:"parameter-configuration"},"Parameter configuration"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The parameter configuration interface provides the function of user-defined parameter management. The user can manage the related configuration of the engine in this interface, and the administrator can add application types and engines here.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"./media/image6.png",src:n(17068).Z}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'The user can expand all the configuration information in the directory by clicking on the application type at the top and then select the engine type in the application, modify the configuration information and click "Save" to take effect.')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Edit catalog and new application types are only visible to the administrator. Click the edit button to delete the existing application and engine configuration (note! Deleting the application directly will delete all engine configurations under the application and cannot be restored), or add an engine, or click "New Application" to add a new application type.')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"./media/image7.png",src:n(1401).Z}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"./media/image8.png",src:n(88507).Z}))),(0,i.kt)("h2",{id:"global-variable"},"Global variable"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In the global variable interface, users can customize variables for code writing, just click the edit button to add parameters.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"./media/image9.png",src:n(42924).Z}))),(0,i.kt)("h2",{id:"ecm-management"},"ECM management"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ECM management interface is used by the administrator to manage the ECM and all engines. This interface can view the status information of the ECM, modify the ECM label information, modify the ECM status information, and query all engine information under each ECM. And only the administrator can see, the administrator's configuration method can be viewed in the second chapter of this article.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"./media/image10.png",src:n(78722).Z}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Click the edit button to edit the label information of the ECM (only part of the labels are allowed to be edited) and modify the status of the ECM.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"./media/image11.png",src:n(82927).Z}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Click the instance name of the ECM to view all engine information under the ECM.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(30300).Z}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(25526).Z}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Similarly, you can stop the engine on this interface, and edit the label information of the engine.")),(0,i.kt)("h2",{id:"microservice-management"},"Microservice management"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The microservice management interface can view all microservice information under Linkis, and this interface is only visible to the administrator. Linkis's own microservices can be viewed by clicking on the Eureka registration center. The microservices associated with linkis will be listed directly on this interface.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(51407).Z}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(27489).Z}))))}p.isMDXComponent=!0},25526:function(e,t,n){t.Z=n.p+"assets/images/ECM_all_engine_information-9287e27e032defd0552d673aa255e6cb.png"},82927:function(e,t,n){t.Z=n.p+"assets/images/ECM_editing_interface-54359ff141679154e2c2e38699df8927.png"},78722:function(e,t,n){t.Z=n.p+"assets/images/ECM_management_interface-037cf2ab4369978f232a446c83342d33.png"},74121:function(e,t,n){t.Z=n.p+"assets/images/administrator_view-b63e316e47525591f50d2cc4abfe01ad.png"},30300:function(e,t,n){t.Z=n.p+"assets/images/click_the_instance_name_to_view_engine_information-8d7dae21b1e66aa0d9862583e3f93c6a.png"},1401:function(e,t,n){t.Z=n.p+"assets/images/edit_directory-c3171df67f1f3508bab9b932c71b05d2.png"},27489:function(e,t,n){t.Z=n.p+"assets/images/eureka_registration_center-da1d32db5479dfc28f4fbd9e36f1804b.png"},77954:function(e,t,n){t.Z=n.p+"assets/images/global_history_interface-d8c52caebaf1f5d2c0db8de151c372ed.png"},21223:function(e,t,n){t.Z=n.p+"assets/images/global_history_query_button-cd6d111f81c819de599b2c1cca4638f3.png"},42924:function(e,t,n){t.Z=n.p+"assets/images/global_variable_interface-718e695679bd48943ed38b5232ce4502.png"},51407:function(e,t,n){t.Z=n.p+"assets/images/microservice_management_interface-c14c288d36409ad4856787832a24fc3c.png"},88507:function(e,t,n){t.Z=n.p+"assets/images/new_application_type-107d71fe6993135c676e6c09e7361971.png"},17068:function(e,t,n){t.Z=n.p+"assets/images/parameter_configuration_interface-69322c08ebd2afed0979402b02f2cd8e.png"},62342:function(e,t,n){t.Z=n.p+"assets/images/resource_management_interface-6818c596351b07c3f2ff5fd38f50fd9d.png"},32715:function(e,t,n){t.Z=n.p+"assets/images/task_execution_log_of_a_single_task-9ca7aaa8d9327a7651897ff69e15e429.png"}}]);