"use strict";(self.webpackChunk_1_block_ai=self.webpackChunk_1_block_ai||[]).push([[7176,3047],{20791:(e,a,n)=>{var t=n(93205);function s(e){e.register(t),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=s,s.displayName="ejs",s.aliases=["eta"]},93205:e=>{function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,s,o){if(n.language===t){var i=n.tokenStack=[];n.code=n.code.replace(s,(function(e){if("function"==typeof o&&!o(e))return e;for(var s,r=i.length;-1!==n.code.indexOf(s=a(t,r));)++r;return i[r]=e,s})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var s=0,o=Object.keys(n.tokenStack);!function i(r){for(var l=0;l<r.length&&!(s>=o.length);l++){var u=r[l];if("string"==typeof u||u.content&&"string"==typeof u.content){var g=o[s],c=n.tokenStack[g],p="string"==typeof u?u:u.content,f=a(t,g),k=p.indexOf(f);if(k>-1){++s;var d=p.substring(0,k),m=new e.Token(t,e.tokenize(c,n.grammar),"language-"+t,c),h=p.substring(k+f.length),_=[];d&&_.push.apply(_,i([d])),_.push(m),h&&_.push.apply(_,i([h])),"string"==typeof u?r.splice.apply(r,[l,1].concat(_)):u.content=_}}else u.content&&i(u.content)}return r}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);