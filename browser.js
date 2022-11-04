// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).uncurryRight=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,s,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(e,t)||l.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(e,t,r.get),p&&c&&c.call(e,t,r.set),e};var a=r;function s(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"boolean"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[m],i=m,t=null!=(o=e)&&v.call(o,i);try{e[m]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[m]=r:delete e[m],n}:function(e){return d.call(e)},h=Boolean.prototype.toString;var w=b();function j(e){return"object"==typeof e&&(e instanceof Boolean||(w?function(e){try{return h.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===g(e)))}function _(e){return p(e)||j(e)}function E(){return new Function("return this;")()}s(_,"isPrimitive",p),s(_,"isObject",j);var O="object"==typeof self?self:null,S="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof T?T:null;var I=function(e){if(arguments.length){if(!p(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return E()}if(O)return O;if(S)return S;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),P=I.document&&I.document.childNodes,x=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;s(N,"REGEXP",B);var V=Array.isArray?Array.isArray:function(e){return"[object Array]"===g(e)};function C(e){return null!==e&&"object"==typeof e}function F(e){var t,r,n,o;if(("Object"===(r=g(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=B.exec(n.toString()))return t[1]}return C(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(C,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!V(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(C));var G="function"==typeof e||"object"==typeof x||"function"==typeof P?function(e){return F(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?F(e).toLowerCase():t};function k(e){return"function"===G(e)}function L(e){return"number"==typeof e}var M=Number,R=M.prototype.toString;var U=b();function Y(e){return"object"==typeof e&&(e instanceof M||(U?function(e){try{return R.call(e),!0}catch(e){return!1}}(e):"[object Number]"===g(e)))}function X(e){return L(e)||Y(e)}s(X,"isPrimitive",L),s(X,"isObject",Y);var q=Number.POSITIVE_INFINITY,z=M.NEGATIVE_INFINITY,D=Math.floor;function H(e){return e<q&&e>z&&D(t=e)===t;var t}function J(e){return L(e)&&H(e)}function K(e){return Y(e)&&H(e.valueOf())}function Q(e){return J(e)||K(e)}function W(e){return J(e)&&e>0}function Z(e){return K(e)&&e.valueOf()>0}function $(e){return W(e)||Z(e)}function ee(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return s(Q,"isPrimitive",J),s(Q,"isObject",K),s($,"isPrimitive",W),s($,"isObject",Z),function(e,t,r){var n,o;if(!k(e))throw new TypeError(ee("0lt3p",e));if(arguments.length<2)o=null;else if(arguments.length>2){if(n=r,!W(o=t))throw new TypeError(ee("0ltBi",o))}else W(t)?o=t:(o=null,n=t);return i;function i(){var t,r;if(t=e,o){if(o>arguments.length)throw new Error(ee("insufficient arguments. Expected %u argument(s) and only received %u argument(s).",o,arguments.length));for(r=o-1;r>=0;r--){if(!k(t))throw new Error(ee("invalid invocation. The configured arity exceeds the number of possible curried function invocations. Expected: `%u`. Actual: `%u`.",o,r));t=t.call(n,arguments[r])}return t}for(r=arguments.length-1;r>=0;r--){if(!k(t))throw new Error(ee("invalid invocation. Number of arguments exceeds the number of possible curried function invocations. Expected: `%u`. Actual: `%u`.",arguments.length,r));t=t.call(n,arguments[r])}return t}}}));
//# sourceMappingURL=browser.js.map
