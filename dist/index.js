"use strict";var f=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var g=f(function(p,c){
var o=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function v(i,r,a){var s,e;if(!o(i))throw new TypeError(u('1Y53c',i));if(arguments.length<2)e=null;else if(arguments.length>2){if(e=r,s=a,!l(e))throw new TypeError(u('1Y5Az',e))}else l(r)?e=r:(e=null,s=r);return m;function m(){var t,n;if(t=i,e){if(e>arguments.length)throw new Error(u('1Y5Bs',e,arguments.length));for(n=e-1;n>=0;n--)if(o(t))t=t.call(s,arguments[n]);else throw new Error(u('1Y5Bv',e,n));return t}for(n=arguments.length-1;n>=0;n--)if(o(t))t=t.call(s,arguments[n]);else throw new Error(u('1Y5Bu',arguments.length,n));return t}}c.exports=v
});var d=g();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
