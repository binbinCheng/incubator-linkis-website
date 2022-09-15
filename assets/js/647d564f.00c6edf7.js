"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[65087],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20135:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={title:"Linkis Console Deployment",sidebar_position:6},s=void 0,p={unversionedId:"deployment/web-install",id:"version-1.0.2/deployment/web-install",isDocsHomePage:!1,title:"Linkis Console Deployment",description:"Linkis 1.0 provides a Linkis Console, which provides functions such as displaying Linis's global history, modifying user parameters, managing ECM and microservices, etc. Before deploying the front-end management console, you need to deploy the Linkis back-end. Linkis deployment manual See: Linkis Deployment Manual",source:"@site/versioned_docs/version-1.0.2/deployment/web-install.md",sourceDirName:"deployment",slug:"/deployment/web-install",permalink:"/docs/1.0.2/deployment/web-install",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/deployment/web-install.md",tags:[],version:"1.0.2",sidebarPosition:6,frontMatter:{title:"Linkis Console Deployment",sidebar_position:6},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Source Code Directory Structure",permalink:"/docs/1.0.2/deployment/sourcecode-hierarchical-structure"},next:{title:"Overview",permalink:"/docs/1.0.2/user-guide/overview"}},d=[{value:"1. Preparation",id:"1-preparation",children:[]},{value:"2. Deployment",id:"2-deployment",children:[{value:"2.1 Automated deployment",id:"21-automated-deployment",children:[]},{value:"2.2 Manual deployment",id:"22-manual-deployment",children:[]}]},{value:"3. Common problems",id:"3-common-problems",children:[]}],c={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Linkis 1.0 provides a Linkis Console, which provides functions such as displaying Linis's global history, modifying user parameters, managing ECM and microservices, etc. Before deploying the front-end management console, you need to deploy the Linkis back-end. Linkis deployment manual See: ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0.2/deployment/quick-deploy"},"Linkis Deployment Manual")),(0,i.kt)("h2",{id:"1-preparation"},"1. Preparation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After decompressing the linkis installation package (wedatasphere-linkis-x.x.x-combined-package-dist.tar.gz), there will be a front-end compressed package: wedatasphere-linkis-web-1.0.0.zip"),(0,i.kt)("li",{parentName:"ol"},"Need to manually decompress: unzip wedatasphere-linkis-web-1.0.0.zip, the directory after decompression is:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"config.sh\ndist\ninstall.sh\n")),(0,i.kt)("h2",{id:"2-deployment"},"2. Deployment"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","There are two deployment methods, automated deployment and manual deployment"),(0,i.kt)("h3",{id:"21-automated-deployment"},"2.1 Automated deployment"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","Enter the unzipped front-end directory, and edit ",(0,i.kt)("inlineCode",{parentName:"p"},"vi config.sh")," in the directory\nChange the front-end port and back-end interface address, the back-end interface address is the gateway address of linkis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-$xslt"},'#Configuring front-end ports\nlinkis_port="8088"\n\n#URL of the backend linkis gateway\nlinkis_url="http://localhost:9001"\n\n#linkis ip address\nlinkis_ipaddr=$(ip addr | awk\'/^[0-9]+: / {}; /inet.*global/ {print gensub(/(.*)\\/(.*)/, "\\\\1" , "g", $2)}\')\n')),(0,i.kt)("p",null,"After the modification is executed in this directory, you need to use sudo to execute: ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo sh install.sh")),(0,i.kt)("p",null,"After execution, you can directly access it in Google browser: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://linkis_ipaddr:linkis_port")," where linkis_port is the port configured in config.sh, and linkis_ipaddr is the IP of the installation machine"),(0,i.kt)("p",null,"If the access fails: You can check the installation log which step went wrong"),(0,i.kt)("h3",{id:"22-manual-deployment"},"2.2 Manual deployment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Nginx: ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo yum install nginx -y"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify the configuration file: sudo vi /etc/nginx/conf.d/linkis.conf\nAdd the following content:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"server {\n            listen 8080;# access port\n            server_name localhost;\n            #charset koi8-r;\n            #access_log /var/log/nginx/host.access.log main;\n            location / {\n            root /appcom/Install/linkis/dist; # The directory where the front-end package is decompressed\n            index index.html index.html;\n            }\n\n            location /api {\n            proxy_pass http://192.168.xxx.xxx:9001; # ip port of linkis-gateway service\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header x_real_ipP $remote_addr;\n            proxy_set_header remote_addr $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_http_version 1.1;\n            proxy_connect_timeout 4s;\n            proxy_read_timeout 600s;\n            proxy_send_timeout 12s;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            }\n            #error_page 404 /404.html;\n            # redirect server error pages to the static page /50x.html\n            #\n            error_page 500 502 503 504 /50x.html;\n            location = /50x.html {\n            root /usr/share/nginx/html;\n            }\n        }\n\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the front-end package to the corresponding directory: ",(0,i.kt)("inlineCode",{parentName:"p"},"/appcom/Install/linkis/dist; # The directory where the front-end package is decompressed"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the service ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart nginx"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After execution, you can directly access it in Google browser: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://nginx_ip:nginx_port")))),(0,i.kt)("h2",{id:"3-common-problems"},"3. Common problems"),(0,i.kt)("p",null,"(1) Upload file size limit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo vi /etc/nginx/nginx.conf\n")),(0,i.kt)("p",null,"Change upload size"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"client_max_body_size 200m\n")),(0,i.kt)("p",null," (2) Interface timeout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo vi /etc/nginx/conf.d/linkis.conf\n")),(0,i.kt)("p",null,"Change interface timeout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"proxy_read_timeout 600s\n")))}m.isMDXComponent=!0}}]);