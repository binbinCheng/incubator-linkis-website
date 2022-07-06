"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[40968],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92531:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),r=["components"],o={title:"How to Verify",sidebar_position:4},c="Verify the candidate version",s={unversionedId:"how-to-verify",id:"how-to-verify",title:"How to Verify",description:"For detailed check list, please refer to the official check list",source:"@site/community/how-to-verify.md",sourceDirName:".",slug:"/how-to-verify",permalink:"/community/how-to-verify",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/how-to-verify.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to Verify",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Release",permalink:"/community/how-to-release"},next:{title:"Security",permalink:"/community/security"}},p=[{value:"1. Download the candidate version",id:"1-download-the-candidate-version",children:[],level:2},{value:"2. Verify that the uploaded version is compliant",id:"2-verify-that-the-uploaded-version-is-compliant",children:[{value:"2.1 Check whether the release package is complete",id:"21-check-whether-the-release-package-is-complete",children:[],level:3},{value:"2.2 Check gpg signature",id:"22-check-gpg-signature",children:[{value:"2.2.1 Import public key",id:"221-import-public-key",children:[],level:4},{value:"2.2.2 Trust the public key",id:"222-trust-the-public-key",children:[],level:4},{value:"2.2.3 Check the gpg signature",id:"223-check-the-gpg-signature",children:[],level:4}],level:3},{value:"2.3 Check sha512 hash",id:"23-check-sha512-hash",children:[],level:3},{value:"2.4. Check the file content of the source package",id:"24-check-the-file-content-of-the-source-package",children:[{value:"2.4.1 ASF License RAT Check",id:"241-asf-license-rat-check",children:[],level:4},{value:"2.4.2 Project source code compilation verification",id:"242-project-source-code-compilation-verification",children:[],level:4},{value:"2.4.3 Web source code compilation verification",id:"243-web-source-code-compilation-verification",children:[],level:4},{value:"2.4.4 Check related compliance items",id:"244-check-related-compliance-items",children:[],level:4}],level:3},{value:"2.5 Check the binary package",id:"25-check-the-binary-package",children:[],level:3}],level:2},{value:"3. Email reply",id:"3-email-reply",children:[],level:2},{value:"4. Precautions",id:"4-precautions",children:[],level:2}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"verify-the-candidate-version"},"Verify the candidate version"),(0,l.kt)("p",null,"For detailed check list, please refer to the official ",(0,l.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"check list")),(0,l.kt)("h2",{id:"1-download-the-candidate-version"},"1. Download the candidate version"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Download the candidate version to be released to the local environment\nNeed to rely on gpg tool, if not, it is recommended to install gpg2")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If the network is poor, downloading may be time-consuming. The download is completed normally in about 20 minutes, please wait patiently."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#If there is svn locally, you can clone to the local\n$ svn co https://dist.apache.org/repos/dist/dev/incubator/linkis/${release_version}-${rc_version}/\n#or download the material file directly\n$ wget https://dist.apache.org/repos/dist/dev/incubator/linkis/${release_version}-${rc_version}/xxx.xxx\n\n")),(0,l.kt)("h2",{id:"2-verify-that-the-uploaded-version-is-compliant"},"2. Verify that the uploaded version is compliant"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Start the verification process, which includes but is not limited to the following content and forms")),(0,l.kt)("h3",{id:"21-check-whether-the-release-package-is-complete"},"2.1 Check whether the release package is complete"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The package uploaded to dist must include the source code package, and the binary package is optional")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Whether to include the source code package"),(0,l.kt)("li",{parentName:"ol"},"Whether to include the signature of the source code package"),(0,l.kt)("li",{parentName:"ol"},"Whether to include the sha512 of the source code package"),(0,l.kt)("li",{parentName:"ol"},"If the binary package is uploaded, also check the contents listed in (2)-(4)")),(0,l.kt)("h3",{id:"22-check-gpg-signature"},"2.2 Check gpg signature"),(0,l.kt)("p",null,"First import the publisher's public key. Import KEYS from the svn repository to the local environment. (The person who releases the version does not need to import it again, the person who helps to do the verification needs to import it, and the user name is enough for the person who issued the version)"),(0,l.kt)("h4",{id:"221-import-public-key"},"2.2.1 Import public key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl  https://downloads.apache.org/incubator/linkis/KEYS > KEYS # Download KEYS\n$ gpg --import KEYS # Import KEYS to local\n")),(0,l.kt)("h4",{id:"222-trust-the-public-key"},"2.2.2 Trust the public key"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Trust the KEY used in this version")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --edit-key xxxxxxxxxx #KEY user used in this version\ngpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nSecret key is available.\ngpg> trust #trust\nPlease decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n\nYour decision? 5 #choose 5\nDo you really want to set this key to ultimate trust? (y/N) y  #choose y\n                                                            \ngpg>\n         \n")),(0,l.kt)("h4",{id:"223-check-the-gpg-signature"},"2.2.3 Check the gpg signature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i; done\n#or\n$ gpg --verify apache-linkis-${release_version}-src.tar.gz.asc apache-linkis-${release_version}-src.tar.gz\n# If you upload a binary package, you also need to check whether the signature of the binary package is correct\n$ gpg --verify apache-linkis-${release_version}-bin.tar.gz.asc apache-linkis-${release_version}-bin.tar.gz\n")),(0,l.kt)("p",null,"check result"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If something like the following appears, it means the signature is correct. Keyword: ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Good signature")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'apache-linkis-xxx-incubating-src.tar.gz\ngpg: Signature made XXXX\ngpg: using RSA key XXXXX\ngpg: Good signature from "xxx @apache.org>"\n')),(0,l.kt)("h3",{id:"23-check-sha512-hash"},"2.3 Check sha512 hash"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"After calculating the sha512 hash locally, verify that it is consistent with the dist. If you upload a binary package, you also need to check the sha512 hash of the binary package")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"macOS/Linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done\n\n#or\n$ sha512sum --check apache-linkis-${release_version}-src.tar.gz.sha512\n# If you upload a binary package, you also need to check whether the signature of the binary package is correct\n$ sha512sum --check apache-linkis-${release_version}-bin.tar.gz.sha512\n\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Windows")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ certUtil -hashfile apache-linkis-${release_version}-incubating-xxx.tar.gz SHA512\n#Compare the output content with the content of the apache-linkis-${release_version}-incubating-xxx.tar.gz.sha512 file\n")),(0,l.kt)("h3",{id:"24-check-the-file-content-of-the-source-package"},"2.4. Check the file content of the source package"),(0,l.kt)("p",null,"Unzip ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-linkis-${release_version}-incubating-src.tar.gz")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"$ tar -xvf apache-linkis-${release_version}-incubating-src.tar.gz\n\n$ cd apache-linkis-${release_version}-incubating-src\n")),(0,l.kt)("h4",{id:"241-asf-license-rat-check"},"2.4.1 ASF License RAT Check"),(0,l.kt)("p",null,"Mac OS/Linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#normally can be executed within 5 minutes\n$ ./mvnw -N install  \n$ ./mvnw apache-rat:check\n\n#Check all rat files after no exception\n$ find ./ -name rat.txt -print0 | xargs -0 -I file cat file > merged-rat.txt\n")),(0,l.kt)("p",null,"Window"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#normally can be executed within 5 minutes\n$ mvnw.cmd -N install\n$ mvnw.cmd apache-rat:check\n")),(0,l.kt)("p",null,"The whitelist file of rat check is configured in the apache-rat-plugin plugin configuration in the outer pom.xml.\nCheck all the license information in merged-rat.txt, and notice if the Binaries and Archives files are 0."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Notes: 0\nBinaries: 0\nArchives: 0\n0 Unknown Licenses\n")),(0,l.kt)("font",{color:"red"},"If it is not 0, you need to confirm whether the source code has the license for the binary or compressed file. You can refer to the `linkis-engineconn-plugins/engineconn-plugins/python/src/main/py4j/py4j- 0.10.7-src.zip`"),(0,l.kt)("h4",{id:"242-project-source-code-compilation-verification"},"2.4.2 Project source code compilation verification"),(0,l.kt)("p",null,"Mac OS/Linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./mvnw -N install\n#If the performance of the machine where the compilation is located is relatively poor, this process will be time-consuming, usually about 30min\n$  ./mvnw clean install -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n")),(0,l.kt)("p",null,"Window "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvnw.cmd -N install\n#If the performance of the machine where the compilation is located is relatively poor, this process will be time-consuming, usually about 30min\n$ mvnw.cmd clean install -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n")),(0,l.kt)("h4",{id:"243-web-source-code-compilation-verification"},"2.4.3 Web source code compilation verification"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This will require node.js environment. It is recommended to use node v14 version.")),(0,l.kt)("p",null,"First, install the packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),(0,l.kt)("p",null,"Next, build the project\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\n")),(0,l.kt)("p",null,"The console installation package ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-linkis-${version}-incubating-web-bin.tar.gz")," will be generated after the above command is successfully executed"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"1.An error occured when running ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install"),":"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},'Error: Can\'t find Python executable "python", you can set the PYTHON env variable')),(0,l.kt)("p",{parentName:"div"},"You can install the windows-build-tools (This requires administractor privileges)"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install --global --production windows-build-tools\n")),(0,l.kt)("p",{parentName:"div"},"Install the node-gyp:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install --global node-gyp\n")),(0,l.kt)("p",{parentName:"div"},"2.If compilation fails, please clean up and re-execute as follows:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#Delete node_modules\n$ rm -rf node_modules\n#Delete package-lock.json\n$ rm -rf package-lock.json\n#Clean npm cache\n$ npm cache clear --force\n#Download packages again\n$ npm install\n\n")))),(0,l.kt)("h4",{id:"244-check-related-compliance-items"},"2.4.4 Check related compliance items"),(0,l.kt)("p",null,"and check as follows:"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check whether the source package contains unnecessary files, which makes the tar package too large"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Folder contains the word ",(0,l.kt)("inlineCode",{parentName:"li"},"incubating")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There are ",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," files"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There is a ",(0,l.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"DISCLAIMER-WIP")," file"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The year in the ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Only text files exist, not binary files"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All files have ASF license at the beginning"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Able to compile correctly"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check for extra files or folders, such as empty folders, etc."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",".....")),(0,l.kt)("h3",{id:"25-check-the-binary-package"},"2.5 Check the binary package"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the binary/web-binary package is uploaded, check the binary package. ")),(0,l.kt)("p",null,"Unzip ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-linkis-${release_version}-incubating-bin.tar.gz")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir apache-linkis-${release_version}-incubating-bin\n$ tar -xvf  apache-linkis-${release_version}-incubating-bin.tar.gz -C  apache-linkis-${release_version}-incubating-bin\n$ cd apache-linkis-${release_version}-incubating-bin\n")),(0,l.kt)("p",null,"and check as follows:"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Folder contains the word ",(0,l.kt)("inlineCode",{parentName:"li"},"incubating")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There are ",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," files"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There is a ",(0,l.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"DISCLAIMER-WIP")," file"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The year in the ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All text files have ASF license at the beginning"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check the third-party dependent license:"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Compatible with third-party dependent licenses"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All third-party dependent licenses are named in the ",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE")," file"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If you are relying on the Apache license and there is a ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," file, then these ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," files also need to be added to the version of the ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," file"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",".....")),(0,l.kt)("p",null,"You can refer to this article: ",(0,l.kt)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF Third Party License Policy")),(0,l.kt)("h2",{id:"3-email-reply"},"3. Email reply"),(0,l.kt)("p",null,"If you initiate a posting vote, you can refer to this response example to reply to the email after verification"),(0,l.kt)("font",{color:"red"},"When replying to the email, you must bring the information that you have checked by yourself. Simply replying to `+1 approve` is invalid.",(0,l.kt)("p",null,"When PPMC votes in the ",(0,l.kt)("a",{parentName:"p",href:"mailto:dev@linkis.apache.org"},"dev@linkis.apache.org")," linkis community, Please bring the binding suffix to indicate that it has a binding vote for the vote in the linkis community, and it is convenient to count the voting results."),(0,l.kt)("p",null,"When IPMC votes in the ",(0,l.kt)("a",{parentName:"p",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")," incubator community. Please bring the binding suffix to indicate that the voting in the incubator community has a binding vote, which is convenient for counting the voting results.")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you have already voted on ",(0,l.kt)("a",{parentName:"p",href:"mailto:dev@linkis.apache.org"},"dev@linkis.apache.org"),", you can take it directly to the incubator community when you reply to the vote, such as:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-html"},"//Incubator community voting, only IPMC members have binding binding\uff0cPPMC needs to be aware of binding changes\nForward my +1 from dev@linkis (non-binding)\nCopy my +1 from linkis DEV ML (non-binding)\n")))),(0,l.kt)("p",null,"Non-PPMC/Non-IPMC member"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"+1 (non-binding)\nI checked:\n     1. All download links are valid\n     2. Checksum and signature are OK\n     3. LICENSE and NOTICE are exist\n     4. Build successfully on macOS(Big Sur)\n     5. \xa0\n")),(0,l.kt)("p",null,"PPMC/IPMC member"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"//Incubator community voting, only IPMC members have binding binding\n+1 (binding)\nI checked:\n     1. All download links are valid\n     2. Checksum and signature are OK\n     3. LICENSE and NOTICE are exist\n     4. Build successfully on macOS(Big Sur)\n     5. \xa0\n")),(0,l.kt)("h2",{id:"4-precautions"},"4. Precautions"),(0,l.kt)("font",{color:"red"},"If you have maven tools installed, you can replace ./mvnw or mvnw.cmd with your own mvn command",(0,l.kt)("p",null,"mvnw is short for Maven Wrapper. It can support running Maven projects without installing Maven and configuring environment variables. If it can't find it, it will download the corresponding Maven version according to the configuration file")))}d.isMDXComponent=!0}}]);