"use strict";(self.webpackChunk_1_block_ai=self.webpackChunk_1_block_ai||[]).push([[608],{3169:(e,a,r)=>{r.r(a),r.d(a,{default:()=>o});r(7294);var s=r(9960),t=r(5999),i=r(1944),c=r(7961),l=r(2503),n=r(5893);function h(e){let{year:a,posts:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{as:"h3",id:a,children:a}),(0,n.jsx)("ul",{children:r.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)(s.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:a}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(h,{...e})},a)))})})})}function o(e){let{archive:a}=e;const r=(0,t.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,t.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const a=e.reduce(((e,a)=>{const r=a.metadata.date.split("-")[0],s=e.get(r)??[];return e.set(r,[a,...s])}),new Map);return Array.from(a,(e=>{let[a,r]=e;return{year:a,posts:r}}))}(a.blogPosts);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.d,{title:r,description:s}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.Z,{as:"h1",className:"hero__title",children:r}),(0,n.jsx)("p",{className:"hero__subtitle",children:s})]})}),(0,n.jsx)("main",{children:h.length>0&&(0,n.jsx)(d,{years:h})})]})]})}}}]);