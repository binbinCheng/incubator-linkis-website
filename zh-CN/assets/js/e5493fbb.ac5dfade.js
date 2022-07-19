"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[74231],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),o=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=o(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(n),k=r,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||s;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var o=2;o<s;o++)a[o]=n[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59775:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var i=n(87462),r=n(63366),s=(n(67294),n(3905)),a=["components"],l={title:"\u5de5\u5177scriptis\u7684\u5b89\u88c5\u90e8\u7f72",sidebar_position:10},p=void 0,o={unversionedId:"deployment/linkis_scriptis_install",id:"deployment/linkis_scriptis_install",isDocsHomePage:!1,title:"\u5de5\u5177scriptis\u7684\u5b89\u88c5\u90e8\u7f72",description:"1. \u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/linkis_scriptis_install.md",sourceDirName:"deployment",slug:"/deployment/linkis_scriptis_install",permalink:"/zh-CN/docs/1.1.3/deployment/linkis_scriptis_install",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/linkis_scriptis_install.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u5de5\u5177scriptis\u7684\u5b89\u88c5\u90e8\u7f72",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Linkis \u53bb HDFS \u90e8\u7f72",permalink:"/zh-CN/docs/1.1.3/deployment/deploy_linkis_without_hdfs"},next:{title:"\u5f00\u542fPrometheus\u76d1\u63a7",permalink:"/zh-CN/docs/1.1.3/deployment/involve_prometheus_into_linkis"}},c=[{value:"1. \u4ecb\u7ecd",id:"1-\u4ecb\u7ecd",children:[]},{value:"2.\u73af\u5883\u51c6\u5907",id:"2\u73af\u5883\u51c6\u5907",children:[{value:"2.1 \u5b89\u88c5node.js",id:"21-\u5b89\u88c5nodejs",children:[]},{value:"2.2 \u5b89\u88c5learn",id:"22-\u5b89\u88c5learn",children:[]}]},{value:"3 \u7f16\u8bd1\u90e8\u7f72",id:"3-\u7f16\u8bd1\u90e8\u7f72",children:[{value:"3.1 \u83b7\u53d6scriptis\u4ee3\u7801",id:"31-\u83b7\u53d6scriptis\u4ee3\u7801",children:[]},{value:"3.2 \u672c\u5730\u8fd0\u884c\u9879\u76ee\uff08\u53ef\u9009\uff09",id:"32-\u672c\u5730\u8fd0\u884c\u9879\u76ee\u53ef\u9009",children:[]}]},{value:"4 \u6253\u5305&amp;\u90e8\u7f72 scriptis",id:"4-\u6253\u5305\u90e8\u7f72-scriptis",children:[{value:"4.1  \u6253\u5305",id:"41--\u6253\u5305",children:[]},{value:"4.2 \u90e8\u7f72",id:"42-\u90e8\u7f72",children:[]}]},{value:"5 scriptis \u4f7f\u7528\u6b65\u9aa4",id:"5-scriptis-\u4f7f\u7528\u6b65\u9aa4",children:[{value:"5.1 \u6b63\u5e38\u767b\u5f55linkis\u7ba1\u7406\u53f0",id:"51-\u6b63\u5e38\u767b\u5f55linkis\u7ba1\u7406\u53f0",children:[]},{value:"5.2 \u767b\u5f55\u6210\u529f\u540e \u8bbf\u95ee scriptis \u9875\u9762",id:"52-\u767b\u5f55\u6210\u529f\u540e-\u8bbf\u95ee-scriptis-\u9875\u9762",children:[]},{value:"4.3 \u4f7f\u7528 scriptis",id:"43-\u4f7f\u7528-scriptis",children:[]}]}],d={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5728Linkis1.0\u548cDSS 1.1.0\u4e4b\u540e\uff0c\u652f\u6301\u5c06scriptis\u5355\u72ec\u90e8\u7f72\u6765\u96c6\u6210Linkis\uff0c\u4f7f\u7528scriptis\u7684\u4ea4\u4e92\u5f0f\u5206\u6790\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u5728web \u9875\u9762\u5728\u7ebf\u5199SQL\u3001Pyspark\u3001HiveQL\u7b49\u811a\u672c\uff0c\u63d0\u4ea4\u7ed9Linkis\u6267\u884c\u4e14\u652f\u6301UDF\u3001\u51fd\u6570\u3001\u8d44\u6e90\u7ba1\u63a7\u548c\u81ea\u5b9a\u4e49\u53d8\u91cf\u7b49\u7279\u6027\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5355\u72ec\u90e8\u7f72Web\u7ec4\u4ef6-scriptis\uff0c\u5e76\u901a\u8fc7scriptis\u8fd9\u79cdWeb\u9875\u9762\u6765\u4f7f\u7528Linkis\u3002")),(0,s.kt)("p",null,"\u524d\u63d0:\u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u5e76\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u4e86linkis\u670d\u52a1\uff08\u540e\u7aef\u548c\u7ba1\u7406\u53f0\u670d\u52a1\uff09\uff0clinkis\u7684\u90e8\u7f72\u6d41\u7a0b\u53ef\u4ee5\u89c1",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.3/deployment/quick_deploy"},"Linkis\u7684\u5feb\u901f\u90e8\u7f72")),(0,s.kt)("p",null,"\u793a\u4f8b\u8bf4\u660e:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"linkis-gateway\u670d\u52a1\u7684\u5730\u5740\u4e3a10.10.10.10 \u7aef\u53e3\u4e3a9001 "),(0,s.kt)("li",{parentName:"ul"},"linkis\u7684\u7ba1\u7406\u53f0nginx\u90e8\u7f72\u572810.10.10.10 \u7aef\u53e3\u4e3a8080")),(0,s.kt)("h2",{id:"2\u73af\u5883\u51c6\u5907"},"2.\u73af\u5883\u51c6\u5907"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u9996\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u5b89\u88c5")),(0,s.kt)("h3",{id:"21-\u5b89\u88c5nodejs"},"2.1 \u5b89\u88c5node.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\u5c06node.js\u4e0b\u8f7d\uff0c\u5b89\u88c5\u5373\u53ef\u3002\u4e0b\u8f7d\u5730\u5740\uff1ahttp://nodejs.cn/download/ \uff08\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c\uff09 \u8be5\u6b65\u9aa4\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c\n")),(0,s.kt)("h3",{id:"22-\u5b89\u88c5learn"},"2.2 \u5b89\u88c5learn"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#\u7b49\u5f85\u5b89\u88c5\u5b8c\u5373\u53ef\uff0c\u5b89\u88c5liarn\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c\nnpm install lerna -g\n")),(0,s.kt)("h2",{id:"3-\u7f16\u8bd1\u90e8\u7f72"},"3 \u7f16\u8bd1\u90e8\u7f72"),(0,s.kt)("h3",{id:"31-\u83b7\u53d6scriptis\u4ee3\u7801"},"3.1 \u83b7\u53d6scriptis\u4ee3\u7801"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"scriptis\u662f\u4e00\u4e2a\u7eaf\u524d\u7aef\u7684\u9879\u76ee\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u7ec4\u4ef6\u96c6\u6210\u5728DSS\u7684web\u4ee3\u7801\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5c06DSS web\u9879\u76ee\u8fdb\u884c\u5355\u72ec\u7684scriptis\u6a21\u5757\u7f16\u8bd1")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#\u901a\u8fc7git\u4e0b\u8f7d >=dss 1.1.0 \u7248\u672c\u6765\u7f16\u8bd1scriptis\u7ec4\u4ef6\ngit clone  https://github.com/WeBankFinTech/DataSphereStudio/tree/branch-1.1.0\n# \u6216\u5219\u76f4\u63a5\u4e0b\u8f7dzip\u5305 \u540e\u89e3\u538b\nhttps://github.com/WeBankFinTech/DataSphereStudio/archive/refs/heads/branch-1.1.0.zip\n\n#\u8fdb\u5165web\u76ee\u5f55\ncd DataSphereStudio/web \n\n#\u6dfb\u52a0\u4f9d\u8d56  \u6ce8\u610f\uff1a\u8fd9\u91cc\u4e0d\u662f\u901a\u8fc7npm install \u800c\u662flerna bootstrap  \u9700\u5148\u5b89\u88c5 learn  \u8be5\u6b65\u9aa4\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c\nlerna bootstrap\n")),(0,s.kt)("h3",{id:"32-\u672c\u5730\u8fd0\u884c\u9879\u76ee\u53ef\u9009"},"3.2 \u672c\u5730\u8fd0\u884c\u9879\u76ee\uff08\u53ef\u9009\uff09"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4e0d\u9700\u8981\u672c\u5730\u8fd0\u884c\u8c03\u8bd5\u67e5\u770b\uff0c\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65")),(0,s.kt)("h4",{id:"321-\u914d\u7f6elinkis-gateway\u670d\u52a1\u5730\u5740\u914d\u7f6e"},"3.2.1 \u914d\u7f6elinkis-gateway\u670d\u52a1\u5730\u5740\u914d\u7f6e"),(0,s.kt)("p",null,"\u5982\u679c\u662f\u5728\u672c\u5730\u542f\u52a8\u670d\u52a1\uff0c\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u914d\u7f6e\u540e\u7aeflinkis-gateway\u670d\u52a1\u5730\u5740\uff0c\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"web/packages/dss/"),"\u76ee\u5f55\u4e0b\u7684",(0,s.kt)("inlineCode",{parentName:"p"},".env"),"\u6587\u4ef6\uff0c\n\u6253\u5305\u90e8\u7f72\u65f6\u4e0d\u9700\u8981\u8fdb\u884c\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"// \u540e\u7aeflinkis-gatway\u670d\u52a1\u5730\u5740\nVUE_APP_HOST=http://10.10.10.10:9001\nVUE_APP_MN_CONFIG_PREFIX=http://10.10.10.10:9001/api/rest_j/v1\n")),(0,s.kt)("h4",{id:"322-\u8fd0\u884cscriptis\u6a21\u5757"},"3.2.2 \u8fd0\u884cscriptis\u6a21\u5757"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd DataSphereStudio/web \n# \u8fd0\u884cscriptis\u7ec4\u4ef6 \nnpm run serve --module=scriptis\n")),(0,s.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u901a\u8fc7\u94fe\u63a5",(0,s.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"(\u672c\u5730\u8bf7\u6c42\u9ed8\u8ba4\u7aef\u53e3\u662f8080)\u8bbf\u95ee\u5e94\u7528scriptis \uff0c\u56e0\u4e3a\u4f1a\u8bf7\u6c42\u5230\u8fdc\u7aef\u7684linkis-gatway\u670d\u52a1\u63a5\u53e3\uff0c\u8fd9\u4f1a\u5b58\u5728\u8de8\u57df\u95ee\u9898\uff0cchrome\u6d4f\u89c8\u5668\u89e3\u51b3\u8de8\u57df\u95ee\u9898\u53ef\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/56b1e01e6b6a"},"\u89e3\u51b3Chrome\u8de8\u57df\u95ee\u9898")),(0,s.kt)("h2",{id:"4-\u6253\u5305\u90e8\u7f72-scriptis"},"4 \u6253\u5305&\u90e8\u7f72 scriptis"),(0,s.kt)("h3",{id:"41--\u6253\u5305"},"4.1  \u6253\u5305"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#\u6307\u5b9ascriptis\u6a21\u5757 \ncd DataSphereStudio/web \n\n#\u8be5\u6307\u4ee4\u6210\u529f\u6267\u884c\u540e\uff0cweb\u76ee\u5f55\u4e0b\u4f1a\u51fa\u73b0\u4e00\u4e2a\u540d\u53eb `dist` \u7684\u6587\u4ef6\u5939\uff0c\u8be5\u6587\u4ef6\u5939\u5373\u4e3a\u6253\u5305\u597dscriptis\u7684\u7ec4\u4ef6\u8d44\u6e90\u4ee3\u7801\u3002\u6211\u4eec\u9700\u8981\u5c06\u8be5\u524d\u7aef\u8d44\u6e90\u90e8\u7f72\u5230linkis-web\u6240\u5728\u7684nginx\u670d\u52a1\u5668\u4e0a\nnpm run build --module=scriptis \n")),(0,s.kt)("h3",{id:"42-\u90e8\u7f72"},"4.2 \u90e8\u7f72"),(0,s.kt)("p",null,"\u5c06 3.1\u7f16\u8bd1\u51fa\u6765\u7684\u9759\u6001\u8d44\u6e90 \u4e0a\u4f20\u81f3 linkis \u7ba1\u7406\u53f0\u6240\u5728\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u5b58\u653e\u4e8e",(0,s.kt)("inlineCode",{parentName:"p"},"/data/Install/scriptis-web/dist/"),"\uff0c\n\u5728\u5b89\u88c5 linkis \u7ba1\u7406\u53f0\u7684nginx\u670d\u52a1\u5668\u914d\u7f6e\u4e2d\uff0c\u6dfb\u52a0 scriptis \u7684\u9759\u6001\u8d44\u6e90\u8bbf\u95ee\u89c4\u5219\uff0clinkis \u7ba1\u7406\u53f0\u90e8\u7f72\u7684 nginx \u914d\u7f6e\u4e00\u822c\u4f4d\u4e8e ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/linkis.conf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," location /scriptis { \n     alias      /data/Install/scriptis-web/dist/ ;\n     index     index.html ;\n}\n")),(0,s.kt)("p",null,"sudo vim ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/linkis.conf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"server {\n            listen       8080;# \u8bbf\u95ee\u7aef\u53e3\n            server_name  localhost;\n            #charset koi8-r;\n            #access_log  /var/log/nginx/host.access.log  main;\n\n            location / {\n             root    /appcom/Install/linkis-web/dist/; # \u9759\u6001\u6587\u4ef6\u76ee\u5f55\n             index   index.html;\n            }\n\n           location /scriptis {  #scriptis\u7684\u8d44\u6e90\u5e26\u6709scriptis\u524d\u7f00\u4e0elinkis \u7ba1\u7406\u53f0\u533a\u5206\u5f00\n             alias        /data/Install/scriptis-web/dist/  ;  #nginx scriptis\u9759\u6001\u6587\u4ef6\u5b58\u653e\u8def\u5f84(\u53ef\u81ea\u5b9a\u4e49)\n             index     index.html ;\n            }\n\n        .......\n\nlocation /api {\n            proxy_pass http://10.10.10.10:9001; #gatway\u7684\u5730\u5740\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header x_real_ipP $remote_addr;\n            proxy_set_header remote_addr $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_http_version 1.1;\n            proxy_connect_timeout 4s;\n            proxy_read_timeout 600s;\n            proxy_send_timeout 12s;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            }\n\n            #error_page  404              /404.html;\n            # redirect server error pages to the static page /50x.html\n            #\n            error_page   500 502 503 504  /50x.html;\n            location = /50x.html {\n            root   /usr/share/nginx/html;\n            }\n        }\n\n")),(0,s.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u540e \uff0c\u91cd\u65b0\u52a0\u8f7dnginx\u914d\u7f6e "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo nginx -s reload\n")),(0,s.kt)("p",null,"\u6ce8\u610fnginx\u4e2d\uff0clocaiton\u914d\u7f6e\u5757\u4e2d\u4f7f\u7528 root\u548calias\u533a\u522b"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"root\u7684\u5904\u7406\u7ed3\u679c\u662f\uff1aroot\u8def\u5f84\uff0blocation\u8def\u5f84."),(0,s.kt)("li",{parentName:"ul"},"alias\u7684\u5904\u7406\u7ed3\u679c\u662f\uff1a\u4f7f\u7528alias\u8def\u5f84\u66ff\u6362location\u8def\u5f84."),(0,s.kt)("li",{parentName:"ul"},"alias\u662f\u4e00\u4e2a\u76ee\u5f55\u522b\u540d\u7684\u5b9a\u4e49\uff0croot\u5219\u662f\u6700\u4e0a\u5c42\u76ee\u5f55\u7684\u5b9a\u4e49")),(0,s.kt)("h2",{id:"5-scriptis-\u4f7f\u7528\u6b65\u9aa4"},"5 scriptis \u4f7f\u7528\u6b65\u9aa4"),(0,s.kt)("h3",{id:"51-\u6b63\u5e38\u767b\u5f55linkis\u7ba1\u7406\u53f0"},"5.1 \u6b63\u5e38\u767b\u5f55linkis\u7ba1\u7406\u53f0"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#http://10.10.10.10:8080/#/\nhttp://nginxIp:port/#/\n")),(0,s.kt)("p",null,"\u56e0scriptis\u9700\u8981\u8fdb\u884c\u767b\u5f55\u9a8c\u8bc1\u6240\u4ee5\u9700\u8981\u5148\u8fdb\u884c\u767b\u5f55\uff0c\u62ff\u5230cookie\u3002"),(0,s.kt)("h3",{id:"52-\u767b\u5f55\u6210\u529f\u540e-\u8bbf\u95ee-scriptis-\u9875\u9762"},"5.2 \u767b\u5f55\u6210\u529f\u540e \u8bbf\u95ee scriptis \u9875\u9762"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#http://10.10.10.10:8080/scriptis/#/home\nhttp://nginxIp:port/scriptis/#/home\n")),(0,s.kt)("p",null,"nginxIp:nginx\u670d\u52a1\u5668ip\uff0cport:linkis\u7ba1\u7406\u53f0nginx\u914d\u7f6e\u542f\u52a8\u7684\u7aef\u53e3\u53f7\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"scriptis"),"\u4e3a\u8bf7\u6c42scriptis\u9879\u76ee\u9759\u6001\u6587\u4ef6nginx\u914d\u7f6e\u7684location \u5730\u5740\uff08\u53ef\u81ea\u5b9a\u4e49\u8bbe\u7f6e\uff09"),(0,s.kt)("h3",{id:"43-\u4f7f\u7528-scriptis"},"4.3 \u4f7f\u7528 scriptis"),(0,s.kt)("p",null,"\u4ee5\u65b0\u5efa\u4e00\u4e2asql\u67e5\u8be2\u4efb\u52a1\u4e3a\u4f8b\u3002"),(0,s.kt)("p",null,"step1 \u65b0\u5efa\u811a\u672c \u9009\u62e9\u811a\u672c\u7c7b\u578b\u4e3asql\u7c7b\u578b"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u6548\u679c\u56fe",src:n(79900).Z})),(0,s.kt)("p",null,"step2 \u8f93\u5165\u8981\u67e5\u8be2\u7684\u8bed\u53e5"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u6548\u679c\u56fe",src:n(98967).Z})),(0,s.kt)("p",null,"step3 \u8fd0\u884c"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u6548\u679c\u56fe",src:n(18407).Z})),(0,s.kt)("p",null,"shep4 \u67e5\u770b\u7ed3\u679c "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u6548\u679c\u56fe",src:n(56811).Z})))}u.isMDXComponent=!0},56811:function(e,t,n){t.Z=n.p+"assets/images/design_sketch-5a7e1807d1f587129e33b863c1da1418.png"},79900:function(e,t,n){t.Z=n.p+"assets/images/new_script-f73ee84fe932d7d4cc43c40408405722.png"},18407:function(e,t,n){t.Z=n.p+"assets/images/running_results-b181b4b3a60bc22c7a1bfc72356b165b.png"},98967:function(e,t,n){t.Z=n.p+"assets/images/test_statement-0ed452eb88b6c3f9a9bb89fe06901c3b.png"}}]);