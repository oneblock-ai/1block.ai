"use strict";(self.webpackChunk_1_block_ai=self.webpackChunk_1_block_ai||[]).push([[7561,3657],{45950:e=>{function n(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}e.exports=n,n.displayName="json",n.aliases=["webmanifest"]},80963:(e,n,a)=>{var s=a(45950);function t(e){e.register(s),e.languages.jsonp=e.languages.extend("json",{punctuation:/[{}[\]();,.]/}),e.languages.insertBefore("jsonp","punctuation",{function:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/})}e.exports=t,t.displayName="jsonp",t.aliases=[]}}]);