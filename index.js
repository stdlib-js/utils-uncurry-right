// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).uncurryRight=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,e,r.get),p&&c&&c.call(t,e,r.set),t};var a=r;function s(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(t){var e,r,n,o,i;if(null==t)return v.call(t);r=t[m],i=m,e=null!=(o=t)&&d.call(o,i);try{t[m]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[m]=r:delete t[m],n}:function(t){return v.call(t)},h=Boolean.prototype.toString;var w=b();function j(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function _(t){return p(t)||j(t)}function E(){return new Function("return this;")()}s(_,"isPrimitive",p),s(_,"isObject",j);var O="object"==typeof self?self:null,S="object"==typeof window?window:null,T="object"==typeof global?global:null;var A=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(O)return O;if(S)return S;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),I=A.document&&A.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var N=/^\s*function\s*([^(]*)/i;s(x,"REGEXP",N);var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function V(t){return null!==t&&"object"==typeof t}function C(t){var e,r,n,o;if(("Object"===(r=g(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=N.exec(n.toString()))return e[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!B(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(V));var F="function"==typeof t||"object"==typeof P||"function"==typeof I?function(t){return C(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?C(t).toLowerCase():e};function G(t){return"function"===F(t)}function k(t){return"number"==typeof t}var L=Number,M=L.prototype.toString;var R=b();function U(t){return"object"==typeof t&&(t instanceof L||(R?function(t){try{return M.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function Y(t){return k(t)||U(t)}s(Y,"isPrimitive",k),s(Y,"isObject",U);var X=Number.POSITIVE_INFINITY,q=L.NEGATIVE_INFINITY,z=Math.floor;function D(t){return t<X&&t>q&&z(e=t)===e;var e}function H(t){return k(t)&&D(t)}function J(t){return U(t)&&D(t.valueOf())}function K(t){return H(t)||J(t)}function Q(t){return H(t)&&t>0}function W(t){return J(t)&&t.valueOf()>0}function Z(t){return Q(t)||W(t)}function $(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return s(K,"isPrimitive",H),s(K,"isObject",J),s(Z,"isPrimitive",Q),s(Z,"isObject",W),function(t,e,r){var n,o;if(!G(t))throw new TypeError($("0lt3p",t));if(arguments.length<2)o=null;else if(arguments.length>2){if(n=r,!Q(o=e))throw new TypeError($("0ltBi",o))}else Q(e)?o=e:(o=null,n=e);return i;function i(){var e,r;if(e=t,o){if(o>arguments.length)throw new Error($("insufficient arguments. Expected %u argument(s) and only received %u argument(s).",o,arguments.length));for(r=o-1;r>=0;r--){if(!G(e))throw new Error($("invalid invocation. The configured arity exceeds the number of possible curried function invocations. Expected: `%u`. Actual: `%u`.",o,r));e=e.call(n,arguments[r])}return e}for(r=arguments.length-1;r>=0;r--){if(!G(e))throw new Error($("invalid invocation. Number of arguments exceeds the number of possible curried function invocations. Expected: `%u`. Actual: `%u`.",arguments.length,r));e=e.call(n,arguments[r])}return e}}}));
//# sourceMappingURL=index.js.map
