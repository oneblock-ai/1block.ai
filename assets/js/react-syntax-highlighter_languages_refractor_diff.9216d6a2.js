"use strict";(self.webpackChunk_1_block_ai=self.webpackChunk_1_block_ai||[]).push([[6247],{3336:e=>{function a(e){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var a={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(a).forEach((function(n){var i=a[n],s=[];/^\w+$/.test(n)||s.push(/\w+/.exec(n)[0]),"diff"===n&&s.push("bold"),e.languages.diff[n]={pattern:RegExp("^(?:["+i+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:s,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(n)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:a})}(e)}e.exports=a,a.displayName="diff",a.aliases=[]}}]);