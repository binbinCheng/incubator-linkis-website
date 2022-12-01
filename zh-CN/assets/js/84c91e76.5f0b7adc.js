"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[72997],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=s(t),d=i,k=g["".concat(p,".").concat(d)]||g[d]||c[d]||l;return t?o.createElement(k,r(r({ref:n},u),{},{components:t})):o.createElement(k,r({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=g;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var s=2;s<l;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},31863:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var o=t(87462),i=(t(67294),t(3905));const l={title:"OpenLooKeng \u5f15\u64ce",sidebar_position:8},r=void 0,a={unversionedId:"engine-usage/openlookeng",id:"version-1.3.0/engine-usage/openlookeng",isDocsHomePage:!1,title:"OpenLooKeng \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdopenLooKeng(>=1.1.1\u7248\u672c\u652f\u6301)\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/engine-usage/openlookeng.md",sourceDirName:"engine-usage",slug:"/engine-usage/openlookeng",permalink:"/zh-CN/docs/latest/engine-usage/openlookeng",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/engine-usage/openlookeng.md",tags:[],version:"1.3.0",sidebarPosition:8,frontMatter:{title:"OpenLooKeng \u5f15\u64ce",sidebar_position:8},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Flink \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine-usage/flink"},next:{title:"Sqoop \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine-usage/sqoop"}},p=[{value:"1. \u73af\u5883\u8981\u6c42",id:"1-\u73af\u5883\u8981\u6c42",children:[]},{value:"2. \u914d\u7f6e\u548c\u90e8\u7f72",id:"2-\u914d\u7f6e\u548c\u90e8\u7f72",children:[{value:"2.1 \u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 \u5f15\u64ce\u7684\u6807\u7b7e",id:"23-\u5f15\u64ce\u7684\u6807\u7b7e",children:[]}]},{value:"3. \u5f15\u64ce\u7684\u4f7f\u7528",id:"3-\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"\u51c6\u5907\u64cd\u4f5c",id:"\u51c6\u5907\u64cd\u4f5c",children:[]},{value:"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528",id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528",children:[]},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",children:[]}]}],s={toc:p};function u(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdopenLooKeng(>=1.1.1\u7248\u672c\u652f\u6301)\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"1-\u73af\u5883\u8981\u6c42"},"1. \u73af\u5883\u8981\u6c42"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u90e8\u7f72\u4f7f\u7528openLooKeng\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u51c6\u5907\u4e00\u5957\u53ef\u7528\u7684openLooKeng\u73af\u5883\u3002"),(0,i.kt)("h2",{id:"2-\u914d\u7f6e\u548c\u90e8\u7f72"},"2. \u914d\u7f6e\u548c\u90e8\u7f72"),(0,i.kt)("h3",{id:"21-\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 \u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,i.kt)("p",null,"\u6ce8\u610f: \u7f16\u8bd1openLooKeng\u5f15\u64ce\u4e4b\u524d\u9700\u8981\u8fdb\u884clinkis\u9879\u76ee\u5168\u91cf\u7f16\u8bd1",(0,i.kt)("br",{parentName:"p"}),"\n","\u76ee\u524dopenLooKeng\u5f15\u64ce\uff0c\u5ba2\u6237\u7aef\u9ed8\u8ba4\u4f7f\u7528\u7684\u7248\u672c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"io.hetu.core:presto-client:1.5.0")),(0,i.kt)("p",null,"\u53d1\u5e03\u7684\u5b89\u88c5\u90e8\u7f72\u5305\u4e2d\u9ed8\u8ba4\u4e0d\u5305\u542b\u6b64\u5f15\u64ce\u63d2\u4ef6\uff0c\n\u4f60\u53ef\u4ee5\u6309\u6b64\u6307\u5f15\u90e8\u7f72\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"),"\n\uff0c\u6216\u8005\u6309\u4ee5\u4e0b\u6d41\u7a0b\uff0c\u624b\u52a8\u7f16\u8bd1\u90e8\u7f72"),(0,i.kt)("p",null,"\u5355\u72ec\u7f16\u8bd1openLooKeng "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"${linkis_code_dir}/linkis-enginepconn-pugins/engineconn-plugins/openlookeng/\nmvn clean install\n")),(0,i.kt)("h3",{id:"22-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,i.kt)("p",null,"\u5c06 2.1 \u6b65\u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u5305,\u4f4d\u4e8e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-plugins/openlookeng/target/out/openlookeng\n")),(0,i.kt)("p",null,"\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,i.kt)("p",null,"\u5e76\u91cd\u542flinkis-engineplugin\uff08\u6216\u5219\u901a\u8fc7\u5f15\u64ce\u63a5\u53e3\u8fdb\u884c\u5237\u65b0\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-engineplugin\n")),(0,i.kt)("h3",{id:"23-\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 \u5f15\u64ce\u7684\u6807\u7b7e"),(0,i.kt)("p",null,"Linkis1.X\u662f\u901a\u8fc7\u6807\u7b7e\u6765\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6211\u4eec\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../deployment/install-engineconn"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")," "),(0,i.kt)("h2",{id:"3-\u5f15\u64ce\u7684\u4f7f\u7528"},"3. \u5f15\u64ce\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c"},"\u51c6\u5907\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u53c2\u6570\u4e0d\u6ee1\u8db3\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u7ba1\u7406\u53f0\u7684\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u8fdb\u884c\u4e00\u4e9b\u57fa\u7840\u53c2\u6570\u914d\u7f6e\nopenlookeng\u7684\u670d\u52a1\u8fde\u63a5\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4f7f\u7528\u5730\u5740\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(35852).Z})),(0,i.kt)("p",null,"\u56fe3-1 openlookeng\u914d\u7f6e\u4fe1\u606f"),(0,i.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5728\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\uff0c\u901a\u8fc7\u53c2\u6570params.configuration.runtime\u8fdb\u884c\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'http \u8bf7\u6c42\u53c2\u6570\u793a\u4f8b \n{\n    "executionContent": {"code": "show databases;", "runType":  "sql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "linkis.openlookeng.url":"http://127.0.0.1:9090"\n                                }\n                            }\n                    },\n    "source":  {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n    "labels": {\n        "engineType": "openlookeng-1.5.0",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,i.kt)("h3",{id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528"},"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528"),(0,i.kt)("p",null,"Linkis\u63d0\u4f9b\u4e86Java\u548cScala \u7684SDK\u5411Linkis\u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1. \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/sdk-manual"},"JAVA SDK Manual"),".\n\u5bf9\u4e8eopenlookeng\u4efb\u52a1\u60a8\u53ea\u9700\u8981\u4fee\u6539Demo\u4e2d\u7684EngineConnType\u548cCodeType\u53c2\u6570\u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "openlookeng-1.5.0"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "sql"); // required codeType\n')),(0,i.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,i.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0copenlookeng\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli   -engineType openlookeng-1.5.0 -codeType sql -code 'show databases;' -submitUser hadoop -proxyUser hadoop\n")),(0,i.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."))}u.isMDXComponent=!0},35852:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/openlookeng-config-2df376b782443f32b528df56ce88d8b8.png"}}]);