"use strict";(self.webpackChunk_1_block_ai=self.webpackChunk_1_block_ai||[]).push([[3846,3047],{2834:(e,a,n)=>{var t=n(3205);function s(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"handlebars")})),e.languages.hbs=e.languages.handlebars}(e)}e.exports=s,s.displayName="handlebars",s.aliases=["hbs"]},3205:e=>{function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,s,r){if(n.language===t){var o=n.tokenStack=[];n.code=n.code.replace(s,(function(e){if("function"==typeof r&&!r(e))return e;for(var s,i=o.length;-1!==n.code.indexOf(s=a(t,i));)++i;return o[i]=e,s})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var s=0,r=Object.keys(n.tokenStack);!function o(i){for(var l=0;l<i.length&&!(s>=r.length);l++){var u=i[l];if("string"==typeof u||u.content&&"string"==typeof u.content){var c=r[s],g=n.tokenStack[c],p="string"==typeof u?u:u.content,f=a(t,c),k=p.indexOf(f);if(k>-1){++s;var d=p.substring(0,k),b=new e.Token(t,e.tokenize(g,n.grammar),"language-"+t,g),h=p.substring(k+f.length),m=[];d&&m.push.apply(m,o([d])),m.push(b),h&&m.push.apply(m,o([h])),"string"==typeof u?i.splice.apply(i,[l,1].concat(m)):u.content=m}}else u.content&&o(u.content)}return i}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);