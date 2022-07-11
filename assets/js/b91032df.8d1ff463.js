"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[87682],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40780:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"How to Participate in the Official Website Contribution",sidebar_position:2.1},l=void 0,c={unversionedId:"how-to-contribute-to-website",id:"how-to-contribute-to-website",title:"How to Participate in the Official Website Contribution",description:"Branch",source:"@site/community/how-to-contribute-to-website.md",sourceDirName:".",slug:"/how-to-contribute-to-website",permalink:"/community/how-to-contribute-to-website",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/how-to-contribute-to-website.md",tags:[],version:"current",sidebarPosition:2.1,frontMatter:{title:"How to Participate in the Official Website Contribution",sidebar_position:2.1},sidebar:"tutorialSidebar",previous:{title:"How to Participate in Project Contribution",permalink:"/community/how-to-contribute"},next:{title:"How to participate in developer meetings",permalink:"/community/how-to-participate-in-developer-meetings"}},d=[{value:"Branch",id:"branch",children:[],level:2},{value:"1 Preview and generate static files",id:"1-preview-and-generate-static-files",children:[],level:2},{value:"2 Directory structure",id:"2-directory-structure",children:[],level:2},{value:"3 Specification",id:"3-specification",children:[{value:"3.1 Directory naming convention",id:"31-directory-naming-convention",children:[],level:3},{value:"3.2 Vue and the naming convention of static resource files",id:"32-vue-and-the-naming-convention-of-static-resource-files",children:[],level:3},{value:"3.3 Resource Path",id:"33-resource-path",children:[],level:3},{value:"3.4 Page content modification",id:"34-page-content-modification",children:[],level:3},{value:"3.5 Home page modification",id:"35-home-page-modification",children:[],level:3},{value:"3.6 Team page modification",id:"36-team-page-modification",children:[],level:3},{value:"3.7 User list page modification",id:"37-user-list-page-modification",children:[],level:3},{value:"3.8 Version list page modification",id:"38-version-list-page-modification",children:[],level:3},{value:"3.9 User list page modification",id:"39-user-list-page-modification",children:[],level:3}],level:2},{value:"4 New documents",id:"4-new-documents",children:[],level:2},{value:"5 How to deploy",id:"5-how-to-deploy",children:[],level:2},{value:"6 Points for attention",id:"6-points-for-attention",children:[],level:2},{value:"7 Other",id:"7-other",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"branch"},"Branch"),(0,o.kt)("p",null,"dev is the development branch, please fork to your own repository, create a fix/feature branch based on the dev branch, and then perform development and modification on this branch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"master \ndev #development branch\nasf-site   #The official environment of asf-site official website is accessed through https://linkis.apache.org\nasf-staging #The asf-staging official website test environment is accessed through https://linkis.staged.apache.org\n")),(0,o.kt)("h2",{id:"1-preview-and-generate-static-files"},"1 Preview and generate static files"),(0,o.kt)("p",null,"This website is compiled using node, using Docusaurus framework components"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and install nodejs (version>12.5.0)"),(0,o.kt)("li",{parentName:"ol"},"Clone the code to the local ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:{githubid}/incubator-linkis-website.git")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," to install the required dependent libraries."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run start")," in the root directory, you can visit http://localhost:3000 to view the English mode preview of the site"),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run start-zh")," in the root directory, you can visit http://localhost:3000 to view the Chinese mode preview of the site"),(0,o.kt)("li",{parentName:"ol"},"To generate static website resource files, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build"),". The static resources of the build are in the build directory.")),(0,o.kt)("h2",{id:"2-directory-structure"},"2 Directory structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"|-- blog\n|-- community \n|-- docs     //The next version of the document that will be released soon\n|-- download \n|-- faq      //Q&A\n|-- i18n    \n|   `-- zh-CN  //Internationalized Chinese\n|       |-- code.json\n|       |-- docusaurus-plugin-content-blog\n|       |-- docusaurus-plugin-content-docs\n|       |-- docusaurus-plugin-content-docs-community\n|       |-- docusaurus-plugin-content-docs-download\n|       |-- docusaurus-plugin-content-docs-faq\n|       `-- docusaurus-theme-classic\n|-- resource  // Original project files for architecture/timing diagram/flow chart, etc.\n|-- src\n|   |-- components\n|   |-- css\n|   |-- js\n|   |-- pages\n|   |   |-- home\n|   |   |-- index.jsx\n|   |   |-- team\n|   |   |-- user\n|   |   `-- versions\n|   |-- styles\n|-- static //Picture static resource\n|   |-- Images\n|   |-- Images-zh\n|   |-- faq\n|   |-- home\n|   `-- img\n|-- docusaurus.config.js\n|-- versioned_docs //Historical version archive\n|   `-- version-1.0.2\n|-- versioned_sidebars\n|   `-- version-1.0.2-sidebars.json\n`-- versions.json\n\n")),(0,o.kt)("p",null,"The following table illustrates how versioned files are mapped to their version and generated URL."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"file Path"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"http URL"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.0.1/hello.md")),(0,o.kt)("td",{parentName:"tr",align:null},"1.0.1"),(0,o.kt)("td",{parentName:"tr",align:null},"/docs/1.0.1/hello")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.0.2/hello.md")),(0,o.kt)("td",{parentName:"tr",align:null},"1.0.2 (latest current stable version)"),(0,o.kt)("td",{parentName:"tr",align:null},"/docs/latest/hello")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"docs/hello.md")),(0,o.kt)("td",{parentName:"tr",align:null},"current (the next version 1.0.3 to be released)"),(0,o.kt)("td",{parentName:"tr",align:null},"/docs/1.0.3/hello")))),(0,o.kt)("p",null,"Current version information"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Access Path"),(0,o.kt)("th",{parentName:"tr",align:null},"English Document Path"),(0,o.kt)("th",{parentName:"tr",align:null},"Chinese Document Path"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.0.2"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://linkis.apache.org/docs/latest/xxx"},"https://linkis.apache.org/docs/latest/xxx")," (",(0,o.kt)("a",{parentName:"td",href:"https://linkis.apache.org/zh-CN/docs/latest/xxx"},"https://linkis.apache.org/zh-CN/docs/latest/xxx"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"versioned_docs/version-1.0.2/"),(0,o.kt)("td",{parentName:"tr",align:null},"i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.0.3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://linkis.apache.org/docs/1.0.3/xxx"},"https://linkis.apache.org/docs/1.0.3/xxx")," (",(0,o.kt)("a",{parentName:"td",href:"https://linkis.apache.org/zh-CN/docs/1.0.3/xxx"},"https://linkis.apache.org/zh-CN/docs/1.0.3/xxx"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"/docs"),(0,o.kt)("td",{parentName:"tr",align:null},"i18n/zh-CN/docusaurus-plugin-content-docs/current")))),(0,o.kt)("h2",{id:"3-specification"},"3 Specification"),(0,o.kt)("h3",{id:"31-directory-naming-convention"},"3.1 Directory naming convention"),(0,o.kt)("p",null,"Use all lowercase, separated by underscores. If there is a plural structure, use plural nomenclature, and do not use plural abbreviations"),(0,o.kt)("p",null,"Positive example: ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts / styles / components / images / utils / layouts / demo_styles / demo-scripts / img / doc")),(0,o.kt)("p",null,"Counter example: ",(0,o.kt)("inlineCode",{parentName:"p"},"script / style / demoStyles / imgs / docs")),(0,o.kt)("h3",{id:"32-vue-and-the-naming-convention-of-static-resource-files"},"3.2 Vue and the naming convention of static resource files"),(0,o.kt)("p",null,"All lowercase, separated by a dash"),(0,o.kt)("p",null,"Positive example: ",(0,o.kt)("inlineCode",{parentName:"p"},"render-dom.js / signup.css / index.html / company-logo.png")),(0,o.kt)("p",null,"Counter example: ",(0,o.kt)("inlineCode",{parentName:"p"},"renderDom.js / UserManagement.html")),(0,o.kt)("h3",{id:"33-resource-path"},"3.3 Resource Path"),(0,o.kt)("p",null,"Image resources are unified under ",(0,o.kt)("inlineCode",{parentName:"p"},"static/{module name}")),(0,o.kt)("p",null,"css and other style files are placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/css")," directory"),(0,o.kt)("h3",{id:"34-page-content-modification"},"3.4 Page content modification"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Except for the homepage, team, user, Docs>All Version module page, all other pages can be directly jumped to the corresponding github resource modification page through the'Edit this page' button at the bottom")),(0,o.kt)("h3",{id:"35-home-page-modification"},"3.5 Home page modification"),(0,o.kt)("p",null,"Visit the page ",(0,o.kt)("a",{parentName:"p",href:"https://linkis.apache.org"},"https://linkis.apache.org"),"\nLocated in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/home")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500home\n\u2502 config.json Home page Chinese and English configuration\n\u2502 index.less homepage style\n")),(0,o.kt)("h3",{id:"36-team-page-modification"},"3.6 Team page modification"),(0,o.kt)("p",null,"Visit the page ",(0,o.kt)("a",{parentName:"p",href:"https://linkis.apache.org/team"},"https://linkis.apache.org/team"),"\nLocated in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/team")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500team\n\u2502 config.json\n\u2502 index.js\n\u2502 index.less\n")),(0,o.kt)("h3",{id:"37-user-list-page-modification"},"3.7 User list page modification"),(0,o.kt)("p",null,"Visit the page ",(0,o.kt)("a",{parentName:"p",href:"https://linkis.apache.org/user"},"https://linkis.apache.org/user")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Located in `src/pages/user`\n\u2514\u2500versions\n        config.json\n        data.json\n        img.json\n        index.js\n        index.less\n")),(0,o.kt)("h3",{id:"38-version-list-page-modification"},"3.8 Version list page modification"),(0,o.kt)("p",null,"Visit the page ",(0,o.kt)("a",{parentName:"p",href:"https://linkis.apache.org/versions"},"https://linkis.apache.org/versions")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Located in `src/pages/versions`\n\u2514\u2500versions\n        config.json\n        index.jsorchestrator/overview.md\n        index.less\n")),(0,o.kt)("h3",{id:"39-user-list-page-modification"},"3.9 User list page modification"),(0,o.kt)("p",null,"Visit the page ",(0,o.kt)("a",{parentName:"p",href:"https://linkis.apache.org/user"},"https://linkis.apache.org/user")),(0,o.kt)("p",null,"Company logo Located in ",(0,o.kt)("inlineCode",{parentName:"p"},"static/home/user"),", and the picture size must be 176 \xd7 88."),(0,o.kt)("h2",{id:"4-new-documents"},"4 New documents"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://via.placeholder.com/15/f03c15/000000?text=+",alt:"#f03c15"})," The md document is recommended to be viewed by visiting the official website and viewing the md document through github. There is a problem that static resources such as pictures cannot be displayed correctly"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The English document docs/ corresponds to the next Next version to be released, and the historical archive version is stored in the versioned_docs/version-${versionno} directory."),(0,o.kt)("li",{parentName:"ul"},"Chinese documents are placed in the corresponding directory of i18n/zh-CN/docusaurus-plugin-content-docs/, current is the next version to be released. version-${versionno} is the historical archive version."),(0,o.kt)("li",{parentName:"ul"},"Image resources are placed in the static/ directory")),(0,o.kt)("h2",{id:"5-how-to-deploy"},"5 How to deploy"),(0,o.kt)("p",null,"The official website of linkis is divided into test environment and formal environment\n-Test environment access URL ",(0,o.kt)("a",{parentName:"p",href:"https://linkis.staged.apache.org"},"https://linkis.staged.apache.org"),"\n-Official environment visit URL ",(0,o.kt)("a",{parentName:"p",href:"https://linkis.apache.org"},"https://linkis.apache.org")),(0,o.kt)("p",null,"When the dev branch code is updated, git action will automatically execute the source build of the dev branch, and automatically update the compiled resource results to the asf-staging branch.\nThe internal mechanism of Apache will deploy the content of the asf-staging branch to the test environment, so when the git action is successfully executed, it can be verified by visiting ",(0,o.kt)("a",{parentName:"p",href:"https://linkis.staged.apache.org."},"https://linkis.staged.apache.org."),"\nAfter the verification is correct, the asf-staging branch can be merged to the asf-site branch. The internal mechanism of Apache will deploy the content of the asf-site branch to the formal environment. After the merge, the formal environment is considered to be updated successfully."),(0,o.kt)("h2",{id:"6-points-for-attention"},"6 Points for attention"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When adding Chinese documents, you need to add English documents at the same time, otherwise the added page cannot be displayed  "),(0,o.kt)("li",{parentName:"ul"},"When adding a document, pay attention to the document node name and node sorting fields, as shown in the following figure",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/29391030/161210331-497bbc90-369d-4401-b9dd-fe63bbaba850.png",alt:"pg-eng"}))),(0,o.kt)("h2",{id:"7-other"},"7 Other"),(0,o.kt)("p",null,'The naming convention refers to "Alibaba Front-end Development Specification"'))}u.isMDXComponent=!0}}]);