"use strict";var f=function(i,n){return function(){return n||i((n={exports:{}}).exports,n),n.exports}};var c=f(function(p,l){
var a=require('@stdlib/assert-is-function/dist'),o=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function v(i,n,g){var s,e;if(!a(i))throw new TypeError(u('1Y53c',i));if(arguments.length<2)e=null;else if(arguments.length>2){if(e=n,s=g,!o(e))throw new TypeError(u('1Y5Az',e))}else o(n)?e=n:(e=null,s=n);return m;function m(){var t,r;if(t=i,e){if(e>arguments.length)throw new Error(u('1Y5Bs',e,arguments.length));for(r=e-1;r>=0;r--)if(a(t))t=t.call(s,arguments[r]);else throw new Error(u('1Y5Bv',e,r));return t}for(r=arguments.length-1;r>=0;r--)if(a(t))t=t.call(s,arguments[r]);else throw new Error(u('1Y5Bu',arguments.length,r));return t}}l.exports=v
});var d=c();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
