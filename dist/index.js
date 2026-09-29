"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=s(function(m,u){
var a=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),q=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),p=require('@stdlib/blas-ext-base-glinspace/dist').ndarray;function g(e){var r,i,n,t;return t=e[0],i=a(e[1]),n=a(e[2]),r=a(e[3]),p(q(t,0),i,n,r,c(t),d(t,0),o(t)),t}u.exports=g
});var l=v();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
