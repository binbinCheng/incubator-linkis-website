"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[64013,29231],{46165:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(67294),r=n(86010),l=n(26028),c=n(36742);const s="sidebar_q+wC",i="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",m="sidebarItem_cjdF",u="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var h=n(24973);function f(e){let{sidebar:t}=e;return 0===t.items.length?null:a.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(i,"margin-bottom--md")},t.title),a.createElement("ul",{className:o},t.items.map((e=>a.createElement("li",{key:e.permalink,className:m},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))))))}var g=n(571);const E=function(e){const{sidebar:t,toc:n,children:c,...s}=e,i=t&&t.items.length>0;return a.createElement(l.Z,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},i&&a.createElement("aside",{className:"col col--3"},a.createElement(f,{sidebar:t})),a.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&a.createElement("div",{className:"col col--2"},a.createElement(g.Z,{toc:n})))))}},70094:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(67294),r=n(46165),l=n(6584),c=n(941);const s=function(e){const{tags:t,sidebar:n}=e,s=(0,c.MA)();return a.createElement(r.Z,{title:s,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,s),a.createElement(l.Z,{tags:Object.values(t)}))}},571:(e,t,n)=>{n.d(t,{r:()=>h,Z:()=>f});var a=n(67294),r=n(86010),l=n(941);function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e){let{anchorTopOffset:t}=e;const n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=n.find((e=>c(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:n[n.indexOf(a)-1]??null}return n[n.length-1]}function i(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.LU)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const o=function(e){const t=(0,a.useRef)(void 0),n=i();(0,a.useEffect)((()=>{const{linkClassName:a,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=s({anchorTopOffset:n.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},m="tableOfContents_vrFS",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function h(e){let{toc:t,isChild:n}=e;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(h,{isChild:!0,toc:e.children}))))):null}const f=function(e){let{toc:t}=e;return o(d),a.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},a.createElement(h,{toc:t}))}},37211:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010),l=n(36742);const c="tag_WK-t",s="tagRegular_LXbV",i="tagWithCount_S5Zl";const o=function(e){const{permalink:t,name:n,count:o}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)(c,{[s]:!o,[i]:o})},n,o&&a.createElement("span",null,o))}},6584:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(37211),l=n(941);const c="tag_7kA+";function s(e){let{letterEntry:t}=e;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((e=>a.createElement("li",{key:e.permalink,className:c},a.createElement(r.Z,e))))),a.createElement("hr",null))}const i=function(e){let{tags:t}=e;const n=(0,l.PZ)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((e=>a.createElement(s,{key:e.letter,letterEntry:e}))))}},96196:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(67294);const l=e=>{let{width:t=40,height:n=20,...l}=e;return r.createElement("svg",(0,a.Z)({t:"1631348384596",className:"icon",viewBox:"0 0 1024 1024",version:"1.1"},l,{"p-id":"557",width:"20",height:"20"}),r.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);