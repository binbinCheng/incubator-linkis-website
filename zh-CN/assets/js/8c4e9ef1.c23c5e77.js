"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[11152],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),l=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),h=l(a),m=n,g=h["".concat(c,".").concat(m)]||h[m]||u[m]||i;return a?r.createElement(g,p(p({ref:e},s),{},{components:a})):r.createElement(g,p({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,p=new Array(i);p[0]=h;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},83574:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return h}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),p=["components"],o={title:"PPMC/Committer \u76f8\u5173\u6743\u9650\u914d\u7f6e",sidebar_position:8},c=void 0,l={unversionedId:"ppmc-related-permission-configuration",id:"ppmc-related-permission-configuration",title:"PPMC/Committer \u76f8\u5173\u6743\u9650\u914d\u7f6e",description:"PPMC(Podling Project Management Committee)\u6210\u5458,\u7ed1\u5b9agithub\u8d26\u53f7\u6d41\u7a0b/\u4ee5\u53ca\u4e3b\u8981\u90ae\u4ef6\u8ba2\u9605",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/ppmc-related-permission-configuration.md",sourceDirName:".",slug:"/ppmc-related-permission-configuration",permalink:"/zh-CN/community/ppmc-related-permission-configuration",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/ppmc-related-permission-configuration.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"PPMC/Committer \u76f8\u5173\u6743\u9650\u914d\u7f6e",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"ICLA \u7b7e\u7f72\u6d41\u7a0b",permalink:"/zh-CN/community/how-to-sign-apache-icla"},next:{title:"\u5982\u4f55\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801",permalink:"/zh-CN/community/how-to-write-unit-test-code"}},s=[{value:"1. \u7ed1\u5b9agithub\u8d26\u53f7\u6d41\u7a0b",id:"1-\u7ed1\u5b9agithub\u8d26\u53f7\u6d41\u7a0b",children:[{value:"1.1 \u6d41\u7a0b\u603b\u89c8",id:"11-\u6d41\u7a0b\u603b\u89c8",children:[],level:3},{value:"1.2\u5173\u8054apache Id\u4e0egithub\u8d26\u53f7",id:"12\u5173\u8054apache-id\u4e0egithub\u8d26\u53f7",children:[],level:3},{value:"1.3 \u5f00\u542f2FA\u8ba4\u8bc1\uff08\u767b\u9646\u4ee4\u724c\uff09",id:"13-\u5f00\u542f2fa\u8ba4\u8bc1\u767b\u9646\u4ee4\u724c",children:[],level:3},{value:"1.4 gitbox\u4e0a\u5f00\u542f\u6743\u9650\u7533\u8bf7",id:"14-gitbox\u4e0a\u5f00\u542f\u6743\u9650\u7533\u8bf7",children:[],level:3},{value:"1.5 \u76f8\u5173\u94fe\u63a5\u6587\u6863",id:"15-\u76f8\u5173\u94fe\u63a5\u6587\u6863",children:[],level:3}],level:2},{value:"2. \u914d\u7f6e\u90ae\u4ef6\u4e0e\u90ae\u4ef6\u8ba2\u9605",id:"2-\u914d\u7f6e\u90ae\u4ef6\u4e0e\u90ae\u4ef6\u8ba2\u9605",children:[{value:"2.1 \u5173\u8054\u81ea\u5df1\u7684\u90ae\u7bb1",id:"21-\u5173\u8054\u81ea\u5df1\u7684\u90ae\u7bb1",children:[],level:3},{value:"2.2 \u914d\u7f6e\u8f6c\u53d1\u5730\u5740",id:"22-\u914d\u7f6e\u8f6c\u53d1\u5730\u5740",children:[],level:3},{value:"2.2 \u8ba2\u9605\u76f8\u5173\u90ae\u4ef6\u5217\u8868",id:"22-\u8ba2\u9605\u76f8\u5173\u90ae\u4ef6\u5217\u8868",children:[],level:3}],level:2}],u={toc:s};function h(t){var e=t.components,o=(0,n.Z)(t,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"PPMC(Podling Project Management Committee)\u6210\u5458,\u7ed1\u5b9agithub\u8d26\u53f7\u6d41\u7a0b/\u4ee5\u53ca\u4e3b\u8981\u90ae\u4ef6\u8ba2\u9605")),(0,i.kt)("h2",{id:"1-\u7ed1\u5b9agithub\u8d26\u53f7\u6d41\u7a0b"},"1. \u7ed1\u5b9agithub\u8d26\u53f7\u6d41\u7a0b"),(0,i.kt)("h3",{id:"11-\u6d41\u7a0b\u603b\u89c8"},"1.1 \u6d41\u7a0b\u603b\u89c8"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5173\u8054apache\u8d26\u53f7\u4e0egithub\u8d26\u53f7"),(0,i.kt)("li",{parentName:"ol"},"github\u4e2a\u4eba\u8d26\u53f7\u5b89\u5168\u5f00\u542f2FA\u8ba4\u8bc1"),(0,i.kt)("li",{parentName:"ol"},"gitbox\u4e0a\u5f00\u542f\u6743\u9650\u7533\u8bf7")),(0,i.kt)("h3",{id:"12\u5173\u8054apache-id\u4e0egithub\u8d26\u53f7"},"1.2\u5173\u8054apache Id\u4e0egithub\u8d26\u53f7"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u65b9\u5f0f1"),"\n\u767b\u9646 \xa0",(0,i.kt)("a",{parentName:"p",href:"https://id.apache.org"},"https://id.apache.org")," LDAP\u4e2d\u7684","[Your\xa0GitHub\xa0Username]",'\u5b57\u6bb5\u8bbe\u7f6e\u4e3a\u81ea\u5df1\u7684\xa0GitHub\xa0ID\u3002\u8f93\u5165\u5bc6\u7801 \u70b9\u51fbsubmit changes \u56db\u5c0f\u65f6\u5185\u4f1a\u6536\u5230\u9080\u8bf7\u52a0\u5165github \u4e0aapache organization \u7684\u7ec4\u7ec7\u7684\u9080\u7ea6\u3002\u60a8\u7684github \u8d26\u53f7\u90ae\u7bb1\uff0c\u5e94\u8be5\u4f1a\u6536\u5230\u4e00\u5c01\u6807\u9898\u5305\u542b\u201casf-gitbox\u201d\u7684\u90ae\u4ef6\u3002\n\u5982\u9080\u7ea6\u5df2\u8fc7\u671f\uff087\u5929\u8fc7\u671f\uff09\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u628a\u65b9\u5f0f1\u3001\u65b9\u5f0f2\u90fd\u518d\u5c1d\u8bd5\u4e00\u4e0b\u3002\u770b\u770bgithub \u8d26\u53f7\u5173\u8054\u90ae\u7bb1\u4e2d\uff0c\u80fd\u5426\u91cd\u65b0\u6536\u5230\u52a0\u5165ASF org \u7684\u9080\u7ea6\u90ae\u4ef6(\u641c\u7d22"asf-gitbox")\u3002\n\u5982\u8fd8\u672a\u6536\u5230\u9080\u7ea6\uff0c\u53ef\u5c1d\u8bd5\u5982\u4e0b\uff1a'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u628a\u65b9\u5f0f1\u30012\u4e2d\u7684github\u8d26\u53f7\u5148\u90fd\u5220\u6389\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u7b49\u5f851\u4e2a\u626b\u63cf\u5468\u671f\u540e(\u7a33\u59a5\u8d77\u89c1\u53ef\u7b494\u4e2a\u5c0f\u65f6)\uff0c\u518d\u91cd\u65b0\u628agithub \u8d26\u53f7\u52a0\u56de\u53bb\uff1b"),(0,i.kt)("li",{parentName:"ol"},'\u7136\u540e\u518d\u7b494\u5c0f\u65f6\uff0c\u770b\u770bgithub \u8d26\u53f7\u5173\u8054\u90ae\u7bb1\u4e2d\uff0c\u80fd\u5426\u91cd\u65b0\u6536\u5230\u52a0\u5165ASF org \u7684\u9080\u7ea6\u90ae\u4ef6(\u641c\u7d22\u90ae\u4ef6\u6807\u9898"asf-gitbox")\u3002')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153324492-cc4e4348-5e4b-450f-a23f-6c208e1a26fb.png",alt:"Open-Apache's-GitHub-warehouse1"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u65b9\u5f0f2"),"\n\u8bbf\u95ee",(0,i.kt)("a",{parentName:"p",href:"https://whimsy.apache.org/roster/committer/xxx"},"https://whimsy.apache.org/roster/committer/xxx")," (\u66ff\u6362\u6210\u4f60\u7684apache id)  \u4fee\u6539\u5bf9\u5e94\u7684\u6570\u636e\uff0c\u56db\u5c0f\u65f6\u5185\u4f1a\u6536\u5230\u9080\u8bf7\u52a0\u5165apache\u7684github\u7ec4\u7ec7\u7684\u9080\u7ea6\u3002\n\u6ce8\u610f\u67e5\u6536\u9080\u8bf7\u52a0\u5165apache\u7684github\u7ec4\u7ec7\u7684\u9080\u7ea6\u90ae\u4ef6\u3002\u9080\u7ea6\u6709\u6548\u671f\u662f7\u5929"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153324641-351cf239-c0ff-4fa6-a9f9-46991d4b11fd.png",alt:"open-Apache's-GitHub-warehouse2"})),(0,i.kt)("p",null,"\u6210\u529f\u9080\u7ea6\u540e \u4e2a\u4ebagithub\u8d26\u6237\u4fe1\u606f\u53ef\u4ee5\u770b\u5230\u5f52\u5c5e\u7ec4\u7ec7\u6709\u4e86apache "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153324664-6633b5be-a5b5-400a-b9db-685c4eeab8ad.png",alt:"open-Apache's-GitHub-warehouse3"})),(0,i.kt)("h3",{id:"13-\u5f00\u542f2fa\u8ba4\u8bc1\u767b\u9646\u4ee4\u724c"},"1.3 \u5f00\u542f2FA\u8ba4\u8bc1\uff08\u767b\u9646\u4ee4\u724c\uff09"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"github\u4e2a\u4eba\u8d26\u53f7\u5b89\u5168 \u5f00\u542f2FA\u8ba4\u8bc1\uff08\u767b\u9646\u4ee4\u724c\uff09")),(0,i.kt)("p",null,"\u53cc\u56e0\u5b50\u9a8c\u8bc1\uff082FA\uff09\u662f\u6307\u7ed3\u5408\u5bc6\u7801\u4ee5\u53ca\u5b9e\u7269\uff08\u4fe1\u7528\u5361\u3001SMS\u624b\u673a\u3001\u4ee4\u724c\u6216\u6307\u7eb9\u7b49\u751f\u7269\u6807\u5fd7\uff09\u4e24\u79cd\u6761\u4ef6\u5bf9\u7528\u6237\u8fdb\u884c\u8ba4\u8bc1\u7684\u65b9\u6cd5\u3002 \u4e3a\u4fdd\u8bc1\u63d0\u4ea4\u8005\u8d26\u6237\u7684\u5b89\u5168\uff0c\u6211\u4eec\u9700\u8981\u60a8\u5728GitHub\u4e0a\u542f\u75282FA\u6765\u9a8c\u8bc1\u767b\u5f55\u7528\u6237\u3001\u5e76\u8d21\u732e\u4ee3\u7801\u3002\u5177\u4f53\u5185\u5bb9\u53ef\u53c2\u80032FA\u3002\n\u9700\u5728\u624b\u673a\u7aef\u5b89\u88c5TOTP \u8f6f\u4ef6\uff0c\u5e94\u7528\u5e02\u573a\u641c\u7d22TOTP(\u5b89\u5353\u53ef\u7528Microsoft Authenticator)\uff0cios\u82f9\u679c\u624b\u673a\u4e2a\u4eba\u63a8\u8350\u4e0b\u8f7dauthy\u4ee4\u724c\u8f6f\u4ef6 \u7ed1\u5b9a\u624b\u673a\u53ef\u4e91\u7aef\u5907\u4efd\u3002\u624b\u673a\u77ed\u4fe1\u4e5f\u652f\u6301 \u4f46\u662fgithub\u914d\u7f6e\u9875\u9762\u9ed8\u8ba4\u6ca1\u6709\u4e2d\u56fd\u5730\u533a\u624b\u673a\u53f7+86\u53ef\u4ee5\u9009\u62e9\uff0c\u9700\u8981\u4fee\u6539\u914d\u7f6e\u65f6\u7684\u524d\u7aef\u4ee3\u7801\u7ed5\u8fc7\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://www.programmerall.com/article/5457100195/"},"https://www.programmerall.com/article/5457100195/")," \u3002"),(0,i.kt)("p",null,"step1 \u8bbf\u95ee\u4e2a\u4eba\u8d26\u53f7\u5b89\u5168\u8bbe\u7f6e\u9875\u9762 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/security"},"https://github.com/settings/security")," \u9009\u62e9\u7b2c\u56db\u9879","[Account security]"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325044-4b68a5c0-959a-4077-abdf-5ad5e67aa26a.png",alt:"open-Apache's-GitHub-warehouse4"})),(0,i.kt)("p",null,"step2 \u9009\u62e9\u3010Set up using an app\u3011 \u4e0b\u4e00\u6b65"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325063-ea61ad8c-cbbc-4053-8a37-35d315dc3b00.png",alt:"open-Apache's-GitHub-warehouse5"})),(0,i.kt)("p",null,"step3 \u8fdb\u5165\u4e8c\u7ef4\u7801\u7ed1\u5b9a\u9875\u9762\uff0c\u4f7f\u7528\u4e8b\u5148\u4e0b\u8f7d\u53f7\u7684totp\u7c7b\u578bapp \u626b\u7801\uff0c\u5f55\u5165\u624b\u673a\u7aef\u663e\u793a\u76846\u4e3a\u4ee4\u724c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325084-b57d3647-a6a5-4e15-9e9c-3c2f632c0655.png",alt:"open-Apache's-GitHub-warehouse6"})),(0,i.kt)("p",null,"step4 \u4e0b\u8f7drecover codes \uff0c\u7136\u540e\u8fdb\u5165\u6210\u529f\u9875\u9762 \u70b9\u51fbdone \u7ed1\u5b9a\u6210\u529f"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325124-a523bd8c-f6d5-44ce-8372-3804d9c693c6.png",alt:"open-Apache's-GitHub-warehouse7"})),(0,i.kt)("p",null,"\u6ce8\u610f\n\u5f53\u5f00\u542f2FA\u9a8c\u8bc1\u540e\uff0c\u9700\u8981\u4f7f\u7528\u7528\u6237\u540d/\u5bc6\u7801 + \u624b\u673a\u8ba4\u8bc1\u7801\u7684\u65b9\u5f0f\u6765\u767b\u5f55GitHub\u3002\n\u5f53\u542f\u75282FA\u8ba4\u8bc1\u540e\uff0c\u9700\u8981\u751f\u6210\u79c1\u6709\u8bbf\u95eeToken\u6765\u8fdb\u884cgit\u63d0\u4ea4\u7b49\u64cd\u4f5c\u3002\u6b64\u65f6\uff0c\u60a8\u5c06\u4f7f\u7528\u7528\u6237\u540d + \u79c1\u6709\u8bbf\u95eeToken \u6765\u4ee3\u66ff \u7528\u6237\u540d + \u5bc6\u7801\u7684\u65b9\u5f0f \u8fdb\u884c\u4ee3\u7801\u7684\u63d0\u4ea4(\u540e\u7eed\u6309\u9700\u914d\u7f6e)\u3002\n\u5177\u4f53\u64cd\u4f5c\uff0c\u8bf7\u53c2\u8003\u521b\u5efa\u79c1\u6709Token\u3002"),(0,i.kt)("p",null,"\u82e5\u540e\u7eed\u5173\u95ed2FA\uff0c\u5c06\u4f1a\u4ece\u672c\u9879\u76ee\u4e2d\u9664\u540d\uff0c\u5e76\u4e14\u65e0\u6cd5\u8bbf\u95ee\u6211\u4eec\u7684\u4ed3\u5e93\u4ee5\u53ca\u6765\u81ea\u6211\u4eec\u79c1\u6709\u4ed3\u5e93\u7684fork\u4ed3\u5e93\u3002"),(0,i.kt)("h3",{id:"14-gitbox\u4e0a\u5f00\u542f\u6743\u9650\u7533\u8bf7"},"1.4 gitbox\u4e0a\u5f00\u542f\u6743\u9650\u7533\u8bf7"),(0,i.kt)("p",null,"step1 \u8bbf\u95ee\xa0",(0,i.kt)("a",{parentName:"p",href:"https://gitbox.apache.org/setup/"},"https://gitbox.apache.org/setup/")," \u6388\u6743\u5173\u8054apache\u8d26\u53f7 "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325227-f917e9c3-16ea-42d4-8432-4b63fd5849da.png",alt:"open-Apache's-GitHub-warehouse8"})),(0,i.kt)("p",null,"step 2  \u6388\u6743\u5173\u8054github\u8d26\u53f7"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325245-e2eea319-278f-4254-afb8-7e1ec418f004.png",alt:"open-Apache's-GitHub-warehouse9"})),(0,i.kt)("p",null,"step3 mfa status\u6821\u9a8c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325267-71761576-9467-49a1-809b-2a5c0fc1a681.png",alt:"open-Apache's-GitHub-warehouse10"})),(0,i.kt)("p",null,"\u6ce8\u610f\n\u6267\u884c\u6210\u529f\u540e\u5982\u4e0b\u56fe\u3002\u6210\u529f\u540e\u5927\u6982\u4e00\u5c0f\u65f6\u5185\u4f1a\u5f00\u901a\u5199\u6743\u9650\u3002\u5982\u679cMFA Status \u63d0\u793a\u201cUser not a member of the ASF GitHub organisation. Please make sure you are a part of the ASF Organisation on GitHub and have 2FA enabled. Visit id.apache.org and set your GitHub ID to be invited to the org.\u201d \u8bf7\u68c0\u67e5\u3010\u5173\u8054apache\u4e0egithub\u8d26\u53f7\u3011\u662f\u5426\u5b8c\u6210/2FA\u662f\u5426\u5f00\u542f\uff0c\u5982\u90fd\u6b63\u5e38\u8bf7\u7a0d\u540e\u5728\u8fdb\u884c\u9a8c\u8bc1\uff0c\u56e0\u4e3a\u65b0\u6210\u5458\u83b7\u53d6 MFA \u72b6\u6001\u6709\u5ef6\u8fdf\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/153325293-654c1cd4-7b2c-44be-94b0-9520e2ea05c1.png",alt:"open-Apache's-GitHub-warehouse11"})),(0,i.kt)("h3",{id:"15-\u76f8\u5173\u94fe\u63a5\u6587\u6863"},"1.5 \u76f8\u5173\u94fe\u63a5\u6587\u6863"),(0,i.kt)("p",null,"\u3010github\u4f7f\u7528TOTP\u542f\u75282FA\u8ba4\u8bc1\u3011",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication"},"https://docs.github.com/cn/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication")),(0,i.kt)("p",null,"\u3010\u521b\u5efa\u79c1\u6709Token\u3011   ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token")),(0,i.kt)("p",null,"\u3010gitbox \u4ecb\u7ecd\u3011    ",(0,i.kt)("a",{parentName:"p",href:"https://gitbox.apache.org"},"https://gitbox.apache.org")),(0,i.kt)("p",null,"\u3010apache \u548cgithub\u3011  ",(0,i.kt)("a",{parentName:"p",href:"https://infra.apache.org/apache-github.html"},"https://infra.apache.org/apache-github.html")),(0,i.kt)("p",null,"\u3010git github &gitbox \u3011",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INFRA/Git%2C+GitHub+and+Gitbox"},"https://cwiki.apache.org/confluence/display/INFRA/Git%2C+GitHub+and+Gitbox")),(0,i.kt)("h2",{id:"2-\u914d\u7f6e\u90ae\u4ef6\u4e0e\u90ae\u4ef6\u8ba2\u9605"},"2. \u914d\u7f6e\u90ae\u4ef6\u4e0e\u90ae\u4ef6\u8ba2\u9605"),(0,i.kt)("h3",{id:"21-\u5173\u8054\u81ea\u5df1\u7684\u90ae\u7bb1"},"2.1 \u5173\u8054\u81ea\u5df1\u7684\u90ae\u7bb1"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://infra.apache.org/committer-email.html"},"https://infra.apache.org/committer-email.html")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"\u65b9\u5f0f1\uff1a\u767b\u9646",(0,i.kt)("a",{parentName:"li",href:"https://id.apache.org/"},"https://id.apache.org/")," ,\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"Forwarding email address"),"\u680f\u4e2d\u586b\u5199\u81ea\u5df1\u7684\u90ae\u4ef6\u5730\u5740(\u901a\u5e38\u662f\u5728\u60a8\u63d0\u4f9b\u7684\u72ec\u7acb\u8d21\u732e\u8005\u8bb8\u53ef\u534f\u8bae (ICLA)\u4e2d\u63d0\u4f9b\u7684\u5730\u5740),\u4fdd\u5b58\u4fee\u6539"),(0,i.kt)("li",{parentName:"ul"},"\u65b9\u5f0f2\uff1a\u767b\u9646",(0,i.kt)("a",{parentName:"li",href:"https://whimsy.apache.org/roster/committer/__self"},"https://whimsy.apache.org/roster/committer/__self"),"__ \u53cc\u51fb",(0,i.kt)("inlineCode",{parentName:"li"},"Email forwarded to")," \u8fdb\u884c\u7f16\u8f91 "))),(0,i.kt)("h3",{id:"22-\u914d\u7f6e\u8f6c\u53d1\u5730\u5740"},"2.2 \u914d\u7f6e\u8f6c\u53d1\u5730\u5740"),(0,i.kt)("p",null,"\u60a8\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\u60a8\u7684 Apache \u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002\u60a8\u5fc5\u987b\u4e3a\u6b64\u5730\u5740\u8bbe\u7f6e\u8f6c\u53d1\u3002\u5f53\u5199\u4fe1\u5230\u60a8\u7684 ASF \u5730\u5740\u65f6\uff0c\u7cfb\u7edf\u4f1a\u5c06\u7535\u5b50\u90ae\u4ef6\u8f6c\u53d1\u5230\u60a8\u7684\u8f6c\u53d1\u5730\u5740\u3002\u5f53\u60a8\u56de\u590d\u65f6\uff0c\u6d88\u606f\u4f1a\u901a\u8fc7 ASF \u7cfb\u7edf\u8fd4\u56de\uff0c\u56e0\u6b64\u4e0e\u60a8\u4e00\u8d77\u5199\u4fe1\u7684\u4eba\u4f1a\u770b\u5230\u5b83\u6765\u81ea\u60a8\u7684 ASF \u5730\u5740\n\u3002\u5728\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u73af\u5883\u4e2d\u8fdb\u884c\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"Server: mail-relay.apache.org Port: 587 (STARTTLS), 465 (SSL) User/Pass: {Your LDAP credentials}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(49889).Z})),(0,i.kt)("h3",{id:"22-\u8ba2\u9605\u76f8\u5173\u90ae\u4ef6\u5217\u8868"},"2.2 \u8ba2\u9605\u76f8\u5173\u90ae\u4ef6\u5217\u8868"),(0,i.kt)("p",null,"\u4f5c\u4e3aPPMC\u4e00\u5458 \u9700\u8981\u79ef\u6781\u53c2\u4e0e\u5230\u793e\u533a\u5efa\u8bbe\u4e2d\uff0c\u63a8\u52a8\u793e\u533a\u5065\u5eb7\u53d1\u5c55\uff0c\u627f\u5f53\u9879\u76ee\u7684\u8d23\u4efb\u548c\u6cbb\u7406\u5de5\u4f5c,\u8fd9\u90e8\u5206\u5de5\u4f5c\u5f88\u591a\u65f6\u5019\u662f\u901a\u8fc7\u90ae\u4ef6\u65b9\u5f0f\u8fdb\u884c\uff08\u8ba8\u8bba/\u6295\u7968/\u7b54\u7591\u7b49\uff09,\n\u6bcf\u4e00\u4f4dPPMC\u6210\u5458\u90fd\u9700\u8981\u8ba2\u9605\u4ee5\u4e0b\u90ae\u4ef6\u5217\u8868:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8ba2\u9605\u90ae\u4ef6"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9000\u8ba2\u90ae\u4ef6"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u90ae\u4ef6\u5f52\u6863"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"mailto:dev@linkis.apache.org"},"dev@linkis.apache.org")),(0,i.kt)("td",{parentName:"tr",align:"left"},"linkis\u7684\u793e\u533a\u6d3b\u52a8\u4fe1\u606f,\u9879\u76ee\u7684\u8ba8\u8bba\u516c\u544a\u7b49"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"mailto:dev-subscribe@linkis.apache.org"},"\u8ba2\u9605")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"mailto:dev-unsubscribe@linkis.apache.org"},"\u9000\u8ba2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"http://mail-archives.apache.org/mod_mbox/linkis-dev"},"\u5f52\u6863"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"mailto:private@linkis.apache.org"},"private@linkis.apache.org")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u90ae\u4ef6\u5217\u8868\u662f\u4e0d\u516c\u5f00\u7684\uff0cPPMC\u5185\u90e8\u53ef\u89c1\uff0c\u4e3b\u8981\u7528\u4e8e\u5185\u90e8\u8ba8\u8bba"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"mailto:private-subscribe@linkis.apache.org"},"\u8ba2\u9605")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"mailto:private-unsubscribe@linkis.apache.org"},"\u9000\u8ba2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"http://mail-archives.apache.org/mod_mbox/linkis-private"},"\u5f52\u6863"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5b75\u5316\u793e\u533a\u7684\u516c\u5f00\u90ae\u4ef6\uff0c\u4e3b\u8981\u662f\u5b75\u5316\u9879\u76ee\u7684\u76f8\u5173\u52a8\u6001"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"mailto:general-subscribe@incubator.apache.org"},"\u8ba2\u9605")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"mailto:general-unsubscribe@incubator.apache.org"},"\u9000\u8ba2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"http://mail-archives.apache.org/mod_mbox/incubator-general"},"\u5f52\u6863"))))),(0,i.kt)("p",null,"\u8ba2\u9605\u64cd\u4f5c\u53ef\u4ee5\u89c1\u6307\u5f15",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/community/how-to-subscribe"},"\u8ba2\u9605\u90ae\u4ef6\u5217\u8868")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6ce8\u610f:",(0,i.kt)("a",{parentName:"p",href:"mailto:private@linkis.apache.org"},"private@linkis.apache.org"),"\u8ba2\u9605\u9700\u8981\u90ae\u4ef6\u7248\u4e3b(",(0,i.kt)("a",{parentName:"p",href:"mailto:shaofengshi@apache.org"},"shaofengshi@apache.org"),")\u5ba1\u6838\uff0c\u6240\u4ee5\u8ba2\u9605\u65f6\u8bf7\u5728\u90ae\u4ef6\u5185\u5bb9\u4e2d\u9644\u4e0a\u4e2a\u4eba\u59d3\u540d\u4fe1\u606f\uff0c\u4ee5\u4fbf\u7248\u4e3b\u5ba1\u6838\u3002"))),(0,i.kt)("p",null,"\u5982\u679c\u4e0a\u8ff0\u8ba2\u9605\u4e0d\u6210\u529f\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u7f51\u9875\u7aef\u5de5\u5177:",(0,i.kt)("a",{parentName:"p",href:"https://whimsy.apache.org/committers/subscribe.cgi"},"https://whimsy.apache.org/committers/subscribe.cgi")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(19449).Z})),(0,i.kt)("p",null,"\u90ae\u4ef6\u5217\u8868\u8ba2\u9605\u60c5\u51b5\uff0cPPMC\u6210\u5458\u53ef\u4ee5\u5728\u6b64\u67e5\u770b:",(0,i.kt)("a",{parentName:"p",href:"https://whimsy.apache.org/roster/ppmc/linkis"},"https://whimsy.apache.org/roster/ppmc/linkis")))}h.isMDXComponent=!0},49889:function(t,e,a){e.Z=a.p+"assets/images/mail-relay-1f2eabdddc519c075b52d3b1eca7dfe0.png"},19449:function(t,e,a){e.Z=a.p+"assets/images/subscribe-6582a13d3b388415b07d58fdb98bbe84.png"}}]);