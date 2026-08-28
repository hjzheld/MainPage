(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();function sS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Em={exports:{}},mu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pb;function nC(){if(pb)return mu;pb=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,s,u){var c=null;if(u!==void 0&&(c=""+u),s.key!==void 0&&(c=""+s.key),"key"in s){u={};for(var f in s)f!=="key"&&(u[f]=s[f])}else u=s;return s=u.ref,{$$typeof:n,type:a,key:c,ref:s!==void 0?s:null,props:u}}return mu.Fragment=t,mu.jsx=r,mu.jsxs=r,mu}var mb;function iC(){return mb||(mb=1,Em.exports=nC()),Em.exports}var b=iC(),Am={exports:{}},Ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gb;function rC(){if(gb)return Ct;gb=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function C(T,Q,et){this.props=T,this.context=Q,this.refs=S,this.updater=et||v}C.prototype.isReactComponent={},C.prototype.setState=function(T,Q){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Q,"setState")},C.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function A(){}A.prototype=C.prototype;function D(T,Q,et){this.props=T,this.context=Q,this.refs=S,this.updater=et||v}var R=D.prototype=new A;R.constructor=D,w(R,C.prototype),R.isPureReactComponent=!0;var O=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function z(T,Q,et,it,rt,mt){return et=mt.ref,{$$typeof:n,type:T,key:Q,ref:et!==void 0?et:null,props:mt}}function V(T,Q){return z(T.type,Q,void 0,void 0,void 0,T.props)}function X(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function K(T){var Q={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(et){return Q[et]})}var ot=/\/+/g;function tt(T,Q){return typeof T=="object"&&T!==null&&T.key!=null?K(""+T.key):Q.toString(36)}function wt(){}function pt(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(wt,wt):(T.status="pending",T.then(function(Q){T.status==="pending"&&(T.status="fulfilled",T.value=Q)},function(Q){T.status==="pending"&&(T.status="rejected",T.reason=Q)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function gt(T,Q,et,it,rt){var mt=typeof T;(mt==="undefined"||mt==="boolean")&&(T=null);var st=!1;if(T===null)st=!0;else switch(mt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(T.$$typeof){case n:case t:st=!0;break;case g:return st=T._init,gt(st(T._payload),Q,et,it,rt)}}if(st)return rt=rt(T),st=it===""?"."+tt(T,0):it,O(rt)?(et="",st!=null&&(et=st.replace(ot,"$&/")+"/"),gt(rt,Q,et,"",function(Ft){return Ft})):rt!=null&&(X(rt)&&(rt=V(rt,et+(rt.key==null||T&&T.key===rt.key?"":(""+rt.key).replace(ot,"$&/")+"/")+st)),Q.push(rt)),1;st=0;var Ot=it===""?".":it+":";if(O(T))for(var Et=0;Et<T.length;Et++)it=T[Et],mt=Ot+tt(it,Et),st+=gt(it,Q,et,mt,rt);else if(Et=x(T),typeof Et=="function")for(T=Et.call(T),Et=0;!(it=T.next()).done;)it=it.value,mt=Ot+tt(it,Et++),st+=gt(it,Q,et,mt,rt);else if(mt==="object"){if(typeof T.then=="function")return gt(pt(T),Q,et,it,rt);throw Q=String(T),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return st}function Y(T,Q,et){if(T==null)return T;var it=[],rt=0;return gt(T,it,"","",function(mt){return Q.call(et,mt,rt++)}),it}function $(T){if(T._status===-1){var Q=T._result;Q=Q(),Q.then(function(et){(T._status===0||T._status===-1)&&(T._status=1,T._result=et)},function(et){(T._status===0||T._status===-1)&&(T._status=2,T._result=et)}),T._status===-1&&(T._status=0,T._result=Q)}if(T._status===1)return T._result.default;throw T._result}var J=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function at(){}return Ct.Children={map:Y,forEach:function(T,Q,et){Y(T,function(){Q.apply(this,arguments)},et)},count:function(T){var Q=0;return Y(T,function(){Q++}),Q},toArray:function(T){return Y(T,function(Q){return Q})||[]},only:function(T){if(!X(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Ct.Component=C,Ct.Fragment=r,Ct.Profiler=s,Ct.PureComponent=D,Ct.StrictMode=a,Ct.Suspense=h,Ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,Ct.__COMPILER_RUNTIME={__proto__:null,c:function(T){return M.H.useMemoCache(T)}},Ct.cache=function(T){return function(){return T.apply(null,arguments)}},Ct.cloneElement=function(T,Q,et){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var it=w({},T.props),rt=T.key,mt=void 0;if(Q!=null)for(st in Q.ref!==void 0&&(mt=void 0),Q.key!==void 0&&(rt=""+Q.key),Q)!P.call(Q,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&Q.ref===void 0||(it[st]=Q[st]);var st=arguments.length-2;if(st===1)it.children=et;else if(1<st){for(var Ot=Array(st),Et=0;Et<st;Et++)Ot[Et]=arguments[Et+2];it.children=Ot}return z(T.type,rt,void 0,void 0,mt,it)},Ct.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:u,_context:T},T},Ct.createElement=function(T,Q,et){var it,rt={},mt=null;if(Q!=null)for(it in Q.key!==void 0&&(mt=""+Q.key),Q)P.call(Q,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(rt[it]=Q[it]);var st=arguments.length-2;if(st===1)rt.children=et;else if(1<st){for(var Ot=Array(st),Et=0;Et<st;Et++)Ot[Et]=arguments[Et+2];rt.children=Ot}if(T&&T.defaultProps)for(it in st=T.defaultProps,st)rt[it]===void 0&&(rt[it]=st[it]);return z(T,mt,void 0,void 0,null,rt)},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(T){return{$$typeof:f,render:T}},Ct.isValidElement=X,Ct.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:$}},Ct.memo=function(T,Q){return{$$typeof:p,type:T,compare:Q===void 0?null:Q}},Ct.startTransition=function(T){var Q=M.T,et={};M.T=et;try{var it=T(),rt=M.S;rt!==null&&rt(et,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(at,J)}catch(mt){J(mt)}finally{M.T=Q}},Ct.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},Ct.use=function(T){return M.H.use(T)},Ct.useActionState=function(T,Q,et){return M.H.useActionState(T,Q,et)},Ct.useCallback=function(T,Q){return M.H.useCallback(T,Q)},Ct.useContext=function(T){return M.H.useContext(T)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(T,Q){return M.H.useDeferredValue(T,Q)},Ct.useEffect=function(T,Q,et){var it=M.H;if(typeof et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return it.useEffect(T,Q)},Ct.useId=function(){return M.H.useId()},Ct.useImperativeHandle=function(T,Q,et){return M.H.useImperativeHandle(T,Q,et)},Ct.useInsertionEffect=function(T,Q){return M.H.useInsertionEffect(T,Q)},Ct.useLayoutEffect=function(T,Q){return M.H.useLayoutEffect(T,Q)},Ct.useMemo=function(T,Q){return M.H.useMemo(T,Q)},Ct.useOptimistic=function(T,Q){return M.H.useOptimistic(T,Q)},Ct.useReducer=function(T,Q,et){return M.H.useReducer(T,Q,et)},Ct.useRef=function(T){return M.H.useRef(T)},Ct.useState=function(T){return M.H.useState(T)},Ct.useSyncExternalStore=function(T,Q,et){return M.H.useSyncExternalStore(T,Q,et)},Ct.useTransition=function(){return M.H.useTransition()},Ct.version="19.1.0",Ct}var yb;function gg(){return yb||(yb=1,Am.exports=rC()),Am.exports}var k=gg();const nl=sS(k);var Cm={exports:{}},gu={},Rm={exports:{}},Mm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vb;function aC(){return vb||(vb=1,function(n){function t(Y,$){var J=Y.length;Y.push($);t:for(;0<J;){var at=J-1>>>1,T=Y[at];if(0<s(T,$))Y[at]=$,Y[J]=T,J=at;else break t}}function r(Y){return Y.length===0?null:Y[0]}function a(Y){if(Y.length===0)return null;var $=Y[0],J=Y.pop();if(J!==$){Y[0]=J;t:for(var at=0,T=Y.length,Q=T>>>1;at<Q;){var et=2*(at+1)-1,it=Y[et],rt=et+1,mt=Y[rt];if(0>s(it,J))rt<T&&0>s(mt,it)?(Y[at]=mt,Y[rt]=J,at=rt):(Y[at]=it,Y[et]=J,at=et);else if(rt<T&&0>s(mt,J))Y[at]=mt,Y[rt]=J,at=rt;else break t}}return $}function s(Y,$){var J=Y.sortIndex-$.sortIndex;return J!==0?J:Y.id-$.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,y=null,x=3,v=!1,w=!1,S=!1,C=!1,A=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function O(Y){for(var $=r(p);$!==null;){if($.callback===null)a(p);else if($.startTime<=Y)a(p),$.sortIndex=$.expirationTime,t(h,$);else break;$=r(p)}}function M(Y){if(S=!1,O(Y),!w)if(r(h)!==null)w=!0,P||(P=!0,tt());else{var $=r(p);$!==null&&gt(M,$.startTime-Y)}}var P=!1,z=-1,V=5,X=-1;function K(){return C?!0:!(n.unstable_now()-X<V)}function ot(){if(C=!1,P){var Y=n.unstable_now();X=Y;var $=!0;try{t:{w=!1,S&&(S=!1,D(z),z=-1),v=!0;var J=x;try{e:{for(O(Y),y=r(h);y!==null&&!(y.expirationTime>Y&&K());){var at=y.callback;if(typeof at=="function"){y.callback=null,x=y.priorityLevel;var T=at(y.expirationTime<=Y);if(Y=n.unstable_now(),typeof T=="function"){y.callback=T,O(Y),$=!0;break e}y===r(h)&&a(h),O(Y)}else a(h);y=r(h)}if(y!==null)$=!0;else{var Q=r(p);Q!==null&&gt(M,Q.startTime-Y),$=!1}}break t}finally{y=null,x=J,v=!1}$=void 0}}finally{$?tt():P=!1}}}var tt;if(typeof R=="function")tt=function(){R(ot)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,pt=wt.port2;wt.port1.onmessage=ot,tt=function(){pt.postMessage(null)}}else tt=function(){A(ot,0)};function gt(Y,$){z=A(function(){Y(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var J=x;x=$;try{return Y()}finally{x=J}},n.unstable_requestPaint=function(){C=!0},n.unstable_runWithPriority=function(Y,$){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var J=x;x=Y;try{return $()}finally{x=J}},n.unstable_scheduleCallback=function(Y,$,J){var at=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?at+J:at):J=at,Y){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=J+T,Y={id:g++,callback:$,priorityLevel:Y,startTime:J,expirationTime:T,sortIndex:-1},J>at?(Y.sortIndex=J,t(p,Y),r(h)===null&&Y===r(p)&&(S?(D(z),z=-1):S=!0,gt(M,J-at))):(Y.sortIndex=T,t(h,Y),w||v||(w=!0,P||(P=!0,tt()))),Y},n.unstable_shouldYield=K,n.unstable_wrapCallback=function(Y){var $=x;return function(){var J=x;x=$;try{return Y.apply(this,arguments)}finally{x=J}}}}(Mm)),Mm}var xb;function sC(){return xb||(xb=1,Rm.exports=aC()),Rm.exports}var Dm={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bb;function oC(){if(bb)return xn;bb=1;var n=gg();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(h,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:""+y,children:h,containerInfo:p,implementation:g}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,xn.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(h,p,null,g)},xn.flushSync=function(h){var p=c.T,g=a.p;try{if(c.T=null,a.p=2,h)return h()}finally{c.T=p,a.p=g,a.d.f()}},xn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(h,p))},xn.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},xn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,v=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:v}):g==="script"&&a.d.X(h,{crossOrigin:y,integrity:x,fetchPriority:v,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},xn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(h)},xn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin);a.d.L(h,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},xn.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(h)},xn.requestFormReset=function(h){a.d.r(h)},xn.unstable_batchedUpdates=function(h,p){return h(p)},xn.useFormState=function(h,p,g){return c.H.useFormState(h,p,g)},xn.useFormStatus=function(){return c.H.useHostTransitionStatus()},xn.version="19.1.0",xn}var _b;function lC(){if(_b)return Dm.exports;_b=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Dm.exports=oC(),Dm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wb;function uC(){if(wb)return gu;wb=1;var n=sC(),t=gg(),r=lC();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,o=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(o=i.return),e=i.return;while(e)}return i.tag===3?o:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(u(e)!==e)throw Error(a(188))}function h(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var o=e,l=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return f(d),e;if(m===l)return f(d),i;m=m.sibling}throw Error(a(188))}if(o.return!==l.return)o=d,l=m;else{for(var _=!1,E=d.child;E;){if(E===o){_=!0,o=d,l=m;break}if(E===l){_=!0,l=d,o=m;break}E=E.sibling}if(!_){for(E=m.child;E;){if(E===o){_=!0,o=m,l=d;break}if(E===l){_=!0,l=m,o=d;break}E=E.sibling}if(!_)throw Error(a(189))}}if(o.alternate!==l)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),R=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=ot&&e[ot]||e["@@iterator"],typeof e=="function"?e:null)}var wt=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case C:return"Profiler";case S:return"StrictMode";case M:return"Suspense";case P:return"SuspenseList";case X:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case R:return(e.displayName||"Context")+".Provider";case D:return(e._context.displayName||"Context")+".Consumer";case O:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:pt(e.type)||"Memo";case V:i=e._payload,e=e._init;try{return pt(e(i))}catch{}}return null}var gt=Array.isArray,Y=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},at=[],T=-1;function Q(e){return{current:e}}function et(e){0>T||(e.current=at[T],at[T]=null,T--)}function it(e,i){T++,at[T]=e.current,e.current=i}var rt=Q(null),mt=Q(null),st=Q(null),Ot=Q(null);function Et(e,i){switch(it(st,i),it(mt,e),it(rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Yx(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Yx(i),e=Gx(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(rt),it(rt,e)}function Ft(){et(rt),et(mt),et(st)}function gn(e){e.memoizedState!==null&&it(Ot,e);var i=rt.current,o=Gx(i,e.type);i!==o&&(it(mt,e),it(rt,o))}function pe(e){mt.current===e&&(et(rt),et(mt)),Ot.current===e&&(et(Ot),cu._currentValue=J)}var ie=Object.prototype.hasOwnProperty,Bt=n.unstable_scheduleCallback,me=n.unstable_cancelCallback,yn=n.unstable_shouldYield,Rn=n.unstable_requestPaint,F=n.unstable_now,Mn=n.unstable_getCurrentPriorityLevel,Ei=n.unstable_ImmediatePriority,Qi=n.unstable_UserBlockingPriority,oe=n.unstable_NormalPriority,Ki=n.unstable_LowPriority,Zi=n.unstable_IdlePriority,Rr=n.log,Ue=n.unstable_setDisableYieldValue,Un=null,Yt=null;function He(e){if(typeof Rr=="function"&&Ue(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(Un,e)}catch{}}var ce=Math.clz32?Math.clz32:Re,Ii=Math.log,Ia=Math.LN2;function Re(e){return e>>>=0,e===0?32:31-(Ii(e)/Ia|0)|0}var Mr=256,Hn=4194304;function Yn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wi(e,i,o){var l=e.pendingLanes;if(l===0)return 0;var d=0,m=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~m,l!==0?d=Yn(l):(_&=E,_!==0?d=Yn(_):o||(o=E&~e,o!==0&&(d=Yn(o))))):(E=l&~m,E!==0?d=Yn(E):_!==0?d=Yn(_):o||(o=l&~e,o!==0&&(d=Yn(o)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,o=i&-i,m>=o||m===32&&(o&4194048)!==0)?i:d}function Gn(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Dr(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(){var e=Mr;return Mr<<=1,(Mr&4194048)===0&&(Mr=256),e}function ar(){var e=Hn;return Hn<<=1,(Hn&62914560)===0&&(Hn=4194304),e}function Dn(e){for(var i=[],o=0;31>o;o++)i.push(e);return i}function ln(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ni(e,i,o,l,d,m){var _=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var E=e.entanglements,j=e.expirationTimes,H=e.hiddenUpdates;for(o=_&~o;0<o;){var Z=31-ce(o),W=1<<Z;E[Z]=0,j[Z]=-1;var G=H[Z];if(G!==null)for(H[Z]=null,Z=0;Z<G.length;Z++){var q=G[Z];q!==null&&(q.lane&=-536870913)}o&=~W}l!==0&&sr(e,l,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(_&~i))}function sr(e,i,o){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-ce(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|o&4194090}function Or(e,i){var o=e.entangledLanes|=i;for(e=e.entanglements;o;){var l=31-ce(o),d=1<<l;d&i|e[l]&i&&(e[l]|=i),o&=~d}}function ii(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function At(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:lb(e.type))}function vt(e,i){var o=$.p;try{return $.p=e,i()}finally{$.p=o}}var Mt=Math.random().toString(36).slice(2),nt="__reactFiber$"+Mt,ft="__reactProps$"+Mt,ct="__reactContainer$"+Mt,Tt="__reactEvents$"+Mt,Ye="__reactListeners$"+Mt,Vt="__reactHandles$"+Mt,ve="__reactResources$"+Mt,Me="__reactMarker$"+Mt;function fe(e){delete e[nt],delete e[ft],delete e[Tt],delete e[Ye],delete e[Vt]}function Kt(e){var i=e[nt];if(i)return i;for(var o=e.parentNode;o;){if(i=o[ct]||o[nt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(e=$x(e);e!==null;){if(o=e[nt])return o;e=$x(e)}return i}e=o,o=e.parentNode}return null}function Xt(e){if(e=e[nt]||e[ct]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function un(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function It(e){var i=e[ve];return i||(i=e[ve]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function $t(e){e[Me]=!0}var ri=new Set,Ge={};function ge(e,i){_e(e,i),_e(e+"Capture",i)}function _e(e,i){for(Ge[e]=i,e=0;e<i.length;e++)ri.add(i[e])}var zr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wa={},Ke={};function ke(e){return ie.call(Ke,e)?!0:ie.call(Wa,e)?!1:zr.test(e)?Ke[e]=!0:(Wa[e]=!0,!1)}function On(e,i,o){if(ke(i))if(o===null)e.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+o)}}function la(e,i,o){if(o===null)e.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+o)}}function Ai(e,i,o,l){if(l===null)e.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(i,o,""+l)}}var kr,ai;function Ci(e){if(kr===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);kr=i&&i[1]||"",ai=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kr+e+ai}var ua=!1;function Ri(e,i){if(!e||ua)return"";ua=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(q){var G=q}Reflect.construct(e,[],W)}else{try{W.call()}catch(q){G=q}e.call(W.prototype)}}else{try{throw Error()}catch(q){G=q}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(q){if(q&&G&&typeof q.stack=="string")return[q.stack,G.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),_=m[0],E=m[1];if(_&&E){var j=_.split(`
`),H=E.split(`
`);for(d=l=0;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(l===j.length||d===H.length)for(l=j.length-1,d=H.length-1;1<=l&&0<=d&&j[l]!==H[d];)d--;for(;1<=l&&0<=d;l--,d--)if(j[l]!==H[d]){if(l!==1||d!==1)do if(l--,d--,0>d||j[l]!==H[d]){var Z=`
`+j[l].replace(" at new "," at ");return e.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",e.displayName)),Z}while(1<=l&&0<=d);break}}}finally{ua=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Ci(o):""}function Z5(e){switch(e.tag){case 26:case 27:case 5:return Ci(e.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 15:return Ri(e.type,!1);case 11:return Ri(e.type.render,!1);case 1:return Ri(e.type,!0);case 31:return Ci("Activity");default:return""}}function Ny(e){try{var i="";do i+=Z5(e),e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Mi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Py(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function I5(e){var i=Py(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){l=""+_,m.call(this,_)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Cc(e){e._valueTracker||(e._valueTracker=I5(e))}function By(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return e&&(l=Py(e)?e.checked?"true":"false":e.value),e=l,e!==o?(i.setValue(e),!0):!1}function Rc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var W5=/[\n"\\]/g;function Di(e){return e.replace(W5,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function wh(e,i,o,l,d,m,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),i!=null?_==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Mi(i)):e.value!==""+Mi(i)&&(e.value=""+Mi(i)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),i!=null?Sh(e,_,Mi(i)):o!=null?Sh(e,_,Mi(o)):l!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Mi(E):e.removeAttribute("name")}function Vy(e,i,o,l,d,m,_,E){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;o=o!=null?""+Mi(o):"",i=i!=null?""+Mi(i):o,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function Sh(e,i,o){i==="number"&&Rc(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function qs(e,i,o,l){if(e=e.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=i.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&l&&(e[o].defaultSelected=!0)}else{for(o=""+Mi(o),i=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}i!==null||e[d].disabled||(i=e[d])}i!==null&&(i.selected=!0)}}function Uy(e,i,o){if(i!=null&&(i=""+Mi(i),i!==e.value&&(e.value=i),o==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=o!=null?""+Mi(o):""}function Hy(e,i,o,l){if(i==null){if(l!=null){if(o!=null)throw Error(a(92));if(gt(l)){if(1<l.length)throw Error(a(93));l=l[0]}o=l}o==null&&(o=""),i=o}o=Mi(i),e.defaultValue=o,l=e.textContent,l===o&&l!==""&&l!==null&&(e.value=l)}function Fs(e,i){if(i){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=i;return}}e.textContent=i}var J5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yy(e,i,o){var l=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,o):typeof o!="number"||o===0||J5.has(i)?i==="float"?e.cssFloat=o:e[i]=(""+o).trim():e[i]=o+"px"}function Gy(e,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,o!=null){for(var l in o)!o.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var d in i)l=i[d],i.hasOwnProperty(d)&&o[d]!==l&&Yy(e,d,l)}else for(var m in i)i.hasOwnProperty(m)&&Yy(e,m,i[m])}function Th(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mc(e){return eE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Eh=null;function Ah(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,Qs=null;function Xy(e){var i=Xt(e);if(i&&(e=i.stateNode)){var o=e[ft]||null;t:switch(e=i.stateNode,i.type){case"input":if(wh(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Di(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==e&&l.form===e.form){var d=l[ft]||null;if(!d)throw Error(a(90));wh(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<o.length;i++)l=o[i],l.form===e.form&&By(l)}break t;case"textarea":Uy(e,o.value,o.defaultValue);break t;case"select":i=o.value,i!=null&&qs(e,!!o.multiple,i,!1)}}}var Ch=!1;function qy(e,i,o){if(Ch)return e(i,o);Ch=!0;try{var l=e(i);return l}finally{if(Ch=!1,($s!==null||Qs!==null)&&(mf(),$s&&(i=$s,e=Qs,Qs=$s=null,Xy(i),e)))for(i=0;i<e.length;i++)Xy(e[i])}}function Sl(e,i){var o=e.stateNode;if(o===null)return null;var l=o[ft]||null;if(l===null)return null;o=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var Lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rh=!1;if(Lr)try{var Tl={};Object.defineProperty(Tl,"passive",{get:function(){Rh=!0}}),window.addEventListener("test",Tl,Tl),window.removeEventListener("test",Tl,Tl)}catch{Rh=!1}var ca=null,Mh=null,Dc=null;function Fy(){if(Dc)return Dc;var e,i=Mh,o=i.length,l,d="value"in ca?ca.value:ca.textContent,m=d.length;for(e=0;e<o&&i[e]===d[e];e++);var _=o-e;for(l=1;l<=_&&i[o-l]===d[m-l];l++);return Dc=d.slice(e,1<l?1-l:void 0)}function Oc(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function jc(){return!0}function $y(){return!1}function Xn(e){function i(o,l,d,m,_){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(o=e[E],this[E]=o?o(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?jc:$y,this.isPropagationStopped=$y,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=jc)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=jc)},persist:function(){},isPersistent:jc}),i}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zc=Xn(Ja),El=g({},Ja,{view:0,detail:0}),nE=Xn(El),Dh,Oh,Al,kc=g({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Al&&(Al&&e.type==="mousemove"?(Dh=e.screenX-Al.screenX,Oh=e.screenY-Al.screenY):Oh=Dh=0,Al=e),Dh)},movementY:function(e){return"movementY"in e?e.movementY:Oh}}),Qy=Xn(kc),iE=g({},kc,{dataTransfer:0}),rE=Xn(iE),aE=g({},El,{relatedTarget:0}),jh=Xn(aE),sE=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),oE=Xn(sE),lE=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uE=Xn(lE),cE=g({},Ja,{data:0}),Ky=Xn(cE),fE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pE(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=hE[e])?!!i[e]:!1}function zh(){return pE}var mE=g({},El,{key:function(e){if(e.key){var i=fE[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Oc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(e){return e.type==="keypress"?Oc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gE=Xn(mE),yE=g({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zy=Xn(yE),vE=g({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),xE=Xn(vE),bE=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),_E=Xn(bE),wE=g({},kc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),SE=Xn(wE),TE=g({},Ja,{newState:0,oldState:0}),EE=Xn(TE),AE=[9,13,27,32],kh=Lr&&"CompositionEvent"in window,Cl=null;Lr&&"documentMode"in document&&(Cl=document.documentMode);var CE=Lr&&"TextEvent"in window&&!Cl,Iy=Lr&&(!kh||Cl&&8<Cl&&11>=Cl),Wy=" ",Jy=!1;function t1(e,i){switch(e){case"keyup":return AE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function RE(e,i){switch(e){case"compositionend":return e1(i);case"keypress":return i.which!==32?null:(Jy=!0,Wy);case"textInput":return e=i.data,e===Wy&&Jy?null:e;default:return null}}function ME(e,i){if(Ks)return e==="compositionend"||!kh&&t1(e,i)?(e=Fy(),Dc=Mh=ca=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Iy&&i.locale!=="ko"?null:i.data;default:return null}}var DE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n1(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!DE[e.type]:i==="textarea"}function i1(e,i,o,l){$s?Qs?Qs.push(l):Qs=[l]:$s=l,i=_f(i,"onChange"),0<i.length&&(o=new zc("onChange","change",null,o,l),e.push({event:o,listeners:i}))}var Rl=null,Ml=null;function OE(e){Px(e,0)}function Lc(e){var i=un(e);if(By(i))return e}function r1(e,i){if(e==="change")return i}var a1=!1;if(Lr){var Lh;if(Lr){var Nh="oninput"in document;if(!Nh){var s1=document.createElement("div");s1.setAttribute("oninput","return;"),Nh=typeof s1.oninput=="function"}Lh=Nh}else Lh=!1;a1=Lh&&(!document.documentMode||9<document.documentMode)}function o1(){Rl&&(Rl.detachEvent("onpropertychange",l1),Ml=Rl=null)}function l1(e){if(e.propertyName==="value"&&Lc(Ml)){var i=[];i1(i,Ml,e,Ah(e)),qy(OE,i)}}function jE(e,i,o){e==="focusin"?(o1(),Rl=i,Ml=o,Rl.attachEvent("onpropertychange",l1)):e==="focusout"&&o1()}function zE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lc(Ml)}function kE(e,i){if(e==="click")return Lc(i)}function LE(e,i){if(e==="input"||e==="change")return Lc(i)}function NE(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var si=typeof Object.is=="function"?Object.is:NE;function Dl(e,i){if(si(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var o=Object.keys(e),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!ie.call(i,d)||!si(e[d],i[d]))return!1}return!0}function u1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function c1(e,i){var o=u1(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=i&&l>=i)return{node:o,offset:i-e};e=l}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=u1(o)}}function f1(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?f1(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function d1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Rc(e.document);i instanceof e.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)e=i.contentWindow;else break;i=Rc(e.document)}return i}function Ph(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var PE=Lr&&"documentMode"in document&&11>=document.documentMode,Zs=null,Bh=null,Ol=null,Vh=!1;function h1(e,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Vh||Zs==null||Zs!==Rc(l)||(l=Zs,"selectionStart"in l&&Ph(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ol&&Dl(Ol,l)||(Ol=l,l=_f(Bh,"onSelect"),0<l.length&&(i=new zc("onSelect","select",null,i,o),e.push({event:i,listeners:l}),i.target=Zs)))}function ts(e,i){var o={};return o[e.toLowerCase()]=i.toLowerCase(),o["Webkit"+e]="webkit"+i,o["Moz"+e]="moz"+i,o}var Is={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionrun:ts("Transition","TransitionRun"),transitionstart:ts("Transition","TransitionStart"),transitioncancel:ts("Transition","TransitionCancel"),transitionend:ts("Transition","TransitionEnd")},Uh={},p1={};Lr&&(p1=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function es(e){if(Uh[e])return Uh[e];if(!Is[e])return e;var i=Is[e],o;for(o in i)if(i.hasOwnProperty(o)&&o in p1)return Uh[e]=i[o];return e}var m1=es("animationend"),g1=es("animationiteration"),y1=es("animationstart"),BE=es("transitionrun"),VE=es("transitionstart"),UE=es("transitioncancel"),v1=es("transitionend"),x1=new Map,Hh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hh.push("scrollEnd");function Ji(e,i){x1.set(e,i),ge(i,[e])}var b1=new WeakMap;function Oi(e,i){if(typeof e=="object"&&e!==null){var o=b1.get(e);return o!==void 0?o:(i={value:e,source:i,stack:Ny(i)},b1.set(e,i),i)}return{value:e,source:i,stack:Ny(i)}}var ji=[],Ws=0,Yh=0;function Nc(){for(var e=Ws,i=Yh=Ws=0;i<e;){var o=ji[i];ji[i++]=null;var l=ji[i];ji[i++]=null;var d=ji[i];ji[i++]=null;var m=ji[i];if(ji[i++]=null,l!==null&&d!==null){var _=l.pending;_===null?d.next=d:(d.next=_.next,_.next=d),l.pending=d}m!==0&&_1(o,d,m)}}function Pc(e,i,o,l){ji[Ws++]=e,ji[Ws++]=i,ji[Ws++]=o,ji[Ws++]=l,Yh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Gh(e,i,o,l){return Pc(e,i,o,l),Bc(e)}function Js(e,i){return Pc(e,null,null,i),Bc(e)}function _1(e,i,o){e.lanes|=o;var l=e.alternate;l!==null&&(l.lanes|=o);for(var d=!1,m=e.return;m!==null;)m.childLanes|=o,l=m.alternate,l!==null&&(l.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,d&&i!==null&&(d=31-ce(o),e=m.hiddenUpdates,l=e[d],l===null?e[d]=[i]:l.push(i),i.lane=o|536870912),m):null}function Bc(e){if(50<nu)throw nu=0,Kp=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var to={};function HE(e,i,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,i,o,l){return new HE(e,i,o,l)}function Xh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nr(e,i){var o=e.alternate;return o===null?(o=oi(e.tag,i,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=i,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,i=e.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function w1(e,i){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,i=o.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Vc(e,i,o,l,d,m){var _=0;if(l=e,typeof e=="function")Xh(e)&&(_=1);else if(typeof e=="string")_=GA(e,o,rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case X:return e=oi(31,o,i,d),e.elementType=X,e.lanes=m,e;case w:return ns(o.children,d,m,i);case S:_=8,d|=24;break;case C:return e=oi(12,o,i,d|2),e.elementType=C,e.lanes=m,e;case M:return e=oi(13,o,i,d),e.elementType=M,e.lanes=m,e;case P:return e=oi(19,o,i,d),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:case R:_=10;break t;case D:_=9;break t;case O:_=11;break t;case z:_=14;break t;case V:_=16,l=null;break t}_=29,o=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=oi(_,o,i,d),i.elementType=e,i.type=l,i.lanes=m,i}function ns(e,i,o,l){return e=oi(7,e,l,i),e.lanes=o,e}function qh(e,i,o){return e=oi(6,e,null,i),e.lanes=o,e}function Fh(e,i,o){return i=oi(4,e.children!==null?e.children:[],e.key,i),i.lanes=o,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var eo=[],no=0,Uc=null,Hc=0,zi=[],ki=0,is=null,Pr=1,Br="";function rs(e,i){eo[no++]=Hc,eo[no++]=Uc,Uc=e,Hc=i}function S1(e,i,o){zi[ki++]=Pr,zi[ki++]=Br,zi[ki++]=is,is=e;var l=Pr;e=Br;var d=32-ce(l)-1;l&=~(1<<d),o+=1;var m=32-ce(i)+d;if(30<m){var _=d-d%5;m=(l&(1<<_)-1).toString(32),l>>=_,d-=_,Pr=1<<32-ce(i)+d|o<<d|l,Br=m+e}else Pr=1<<m|o<<d|l,Br=e}function $h(e){e.return!==null&&(rs(e,1),S1(e,1,0))}function Qh(e){for(;e===Uc;)Uc=eo[--no],eo[no]=null,Hc=eo[--no],eo[no]=null;for(;e===is;)is=zi[--ki],zi[ki]=null,Br=zi[--ki],zi[ki]=null,Pr=zi[--ki],zi[ki]=null}var jn=null,De=null,Zt=!1,as=null,or=!1,Kh=Error(a(519));function ss(e){var i=Error(a(418,""));throw kl(Oi(i,e)),Kh}function T1(e){var i=e.stateNode,o=e.type,l=e.memoizedProps;switch(i[nt]=e,i[ft]=l,o){case"dialog":Ht("cancel",i),Ht("close",i);break;case"iframe":case"object":case"embed":Ht("load",i);break;case"video":case"audio":for(o=0;o<ru.length;o++)Ht(ru[o],i);break;case"source":Ht("error",i);break;case"img":case"image":case"link":Ht("error",i),Ht("load",i);break;case"details":Ht("toggle",i);break;case"input":Ht("invalid",i),Vy(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Cc(i);break;case"select":Ht("invalid",i);break;case"textarea":Ht("invalid",i),Hy(i,l.value,l.defaultValue,l.children),Cc(i)}o=l.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||l.suppressHydrationWarning===!0||Hx(i.textContent,o)?(l.popover!=null&&(Ht("beforetoggle",i),Ht("toggle",i)),l.onScroll!=null&&Ht("scroll",i),l.onScrollEnd!=null&&Ht("scrollend",i),l.onClick!=null&&(i.onclick=wf),i=!0):i=!1,i||ss(e)}function E1(e){for(jn=e.return;jn;)switch(jn.tag){case 5:case 13:or=!1;return;case 27:case 3:or=!0;return;default:jn=jn.return}}function jl(e){if(e!==jn)return!1;if(!Zt)return E1(e),Zt=!0,!1;var i=e.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||fm(e.type,e.memoizedProps)),o=!o),o&&De&&ss(e),E1(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(o=e.data,o==="/$"){if(i===0){De=er(e.nextSibling);break t}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++;e=e.nextSibling}De=null}}else i===27?(i=De,Aa(e.type)?(e=mm,mm=null,De=e):De=i):De=jn?er(e.stateNode.nextSibling):null;return!0}function zl(){De=jn=null,Zt=!1}function A1(){var e=as;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),as=null),e}function kl(e){as===null?as=[e]:as.push(e)}var Zh=Q(null),os=null,Vr=null;function fa(e,i,o){it(Zh,i._currentValue),i._currentValue=o}function Ur(e){e._currentValue=Zh.current,et(Zh)}function Ih(e,i,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===o)break;e=e.return}}function Wh(e,i,o,l){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var _=d.child;m=m.firstContext;t:for(;m!==null;){var E=m;m=d;for(var j=0;j<i.length;j++)if(E.context===i[j]){m.lanes|=o,E=m.alternate,E!==null&&(E.lanes|=o),Ih(m.return,o,e),l||(_=null);break t}m=E.next}}else if(d.tag===18){if(_=d.return,_===null)throw Error(a(341));_.lanes|=o,m=_.alternate,m!==null&&(m.lanes|=o),Ih(_,o,e),_=null}else _=d.child;if(_!==null)_.return=d;else for(_=d;_!==null;){if(_===e){_=null;break}if(d=_.sibling,d!==null){d.return=_.return,_=d;break}_=_.return}d=_}}function Ll(e,i,o,l){e=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var _=d.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var E=d.type;si(d.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(d===Ot.current){if(_=d.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(cu):e=[cu])}d=d.return}e!==null&&Wh(i,e,o,l),i.flags|=262144}function Yc(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ls(e){os=e,Vr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vn(e){return C1(os,e)}function Gc(e,i){return os===null&&ls(e),C1(e,i)}function C1(e,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},Vr===null){if(e===null)throw Error(a(308));Vr=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Vr=Vr.next=i;return o}var YE=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(o,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(o){return o()})}},GE=n.unstable_scheduleCallback,XE=n.unstable_NormalPriority,Ze={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jh(){return{controller:new YE,data:new Map,refCount:0}}function Nl(e){e.refCount--,e.refCount===0&&GE(XE,function(){e.controller.abort()})}var Pl=null,tp=0,io=0,ro=null;function qE(e,i){if(Pl===null){var o=Pl=[];tp=0,io=nm(),ro={status:"pending",value:void 0,then:function(l){o.push(l)}}}return tp++,i.then(R1,R1),i}function R1(){if(--tp===0&&Pl!==null){ro!==null&&(ro.status="fulfilled");var e=Pl;Pl=null,io=0,ro=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function FE(e,i){var o=[],l={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var d=0;d<o.length;d++)(0,o[d])(i)},function(d){for(l.status="rejected",l.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),l}var M1=Y.S;Y.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&qE(e,i),M1!==null&&M1(e,i)};var us=Q(null);function ep(){var e=us.current;return e!==null?e:de.pooledCache}function Xc(e,i){i===null?it(us,us.current):it(us,i.pool)}function D1(){var e=ep();return e===null?null:{parent:Ze._currentValue,pool:e}}var Bl=Error(a(460)),O1=Error(a(474)),qc=Error(a(542)),np={then:function(){}};function j1(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fc(){}function z1(e,i,o){switch(o=e[o],o===void 0?e.push(i):o!==i&&(i.then(Fc,Fc),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,L1(e),e;default:if(typeof i.status=="string")i.then(Fc,Fc);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=l}},function(l){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,L1(e),e}throw Vl=i,Bl}}var Vl=null;function k1(){if(Vl===null)throw Error(a(459));var e=Vl;return Vl=null,e}function L1(e){if(e===Bl||e===qc)throw Error(a(483))}var da=!1;function ip(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rp(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,i,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(te&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,i=Bc(e),_1(e,null,o),i}return Pc(e,l,i,o),Bc(e)}function Ul(e,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,o|=l,i.lanes=o,Or(e,o)}}function ap(e,i){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var _={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=_:m=m.next=_,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=i:e.next=i,o.lastBaseUpdate=i}var sp=!1;function Hl(){if(sp){var e=ro;if(e!==null)throw e}}function Yl(e,i,o,l){sp=!1;var d=e.updateQueue;da=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var j=E,H=j.next;j.next=null,_===null?m=H:_.next=H,_=j;var Z=e.alternate;Z!==null&&(Z=Z.updateQueue,E=Z.lastBaseUpdate,E!==_&&(E===null?Z.firstBaseUpdate=H:E.next=H,Z.lastBaseUpdate=j))}if(m!==null){var W=d.baseState;_=0,Z=H=j=null,E=m;do{var G=E.lane&-536870913,q=G!==E.lane;if(q?(qt&G)===G:(l&G)===G){G!==0&&G===io&&(sp=!0),Z!==null&&(Z=Z.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var St=e,xt=E;G=i;var se=o;switch(xt.tag){case 1:if(St=xt.payload,typeof St=="function"){W=St.call(se,W,G);break t}W=St;break t;case 3:St.flags=St.flags&-65537|128;case 0:if(St=xt.payload,G=typeof St=="function"?St.call(se,W,G):St,G==null)break t;W=g({},W,G);break t;case 2:da=!0}}G=E.callback,G!==null&&(e.flags|=64,q&&(e.flags|=8192),q=d.callbacks,q===null?d.callbacks=[G]:q.push(G))}else q={lane:G,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Z===null?(H=Z=q,j=W):Z=Z.next=q,_|=G;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;q=E,E=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);Z===null&&(j=W),d.baseState=j,d.firstBaseUpdate=H,d.lastBaseUpdate=Z,m===null&&(d.shared.lanes=0),wa|=_,e.lanes=_,e.memoizedState=W}}function N1(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function P1(e,i){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)N1(o[e],i)}var ao=Q(null),$c=Q(0);function B1(e,i){e=$r,it($c,e),it(ao,i),$r=e|i.baseLanes}function op(){it($c,$r),it(ao,ao.current)}function lp(){$r=$c.current,et(ao),et($c)}var ma=0,jt=null,re=null,Xe=null,Qc=!1,so=!1,cs=!1,Kc=0,Gl=0,oo=null,$E=0;function Le(){throw Error(a(321))}function up(e,i){if(i===null)return!1;for(var o=0;o<i.length&&o<e.length;o++)if(!si(e[o],i[o]))return!1;return!0}function cp(e,i,o,l,d,m){return ma=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Y.H=e===null||e.memoizedState===null?_v:wv,cs=!1,m=o(l,d),cs=!1,so&&(m=U1(i,o,l,d)),V1(e),m}function V1(e){Y.H=ef;var i=re!==null&&re.next!==null;if(ma=0,Xe=re=jt=null,Qc=!1,Gl=0,oo=null,i)throw Error(a(300));e===null||tn||(e=e.dependencies,e!==null&&Yc(e)&&(tn=!0))}function U1(e,i,o,l){jt=e;var d=0;do{if(so&&(oo=null),Gl=0,so=!1,25<=d)throw Error(a(301));if(d+=1,Xe=re=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=tA,m=i(o,l)}while(so);return m}function QE(){var e=Y.H,i=e.useState()[0];return i=typeof i.then=="function"?Xl(i):i,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(jt.flags|=1024),i}function fp(){var e=Kc!==0;return Kc=0,e}function dp(e,i,o){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~o}function hp(e){if(Qc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Qc=!1}ma=0,Xe=re=jt=null,so=!1,Gl=Kc=0,oo=null}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?jt.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function qe(){if(re===null){var e=jt.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var i=Xe===null?jt.memoizedState:Xe.next;if(i!==null)Xe=i,re=e;else{if(e===null)throw jt.alternate===null?Error(a(467)):Error(a(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Xe===null?jt.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function pp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(e){var i=Gl;return Gl+=1,oo===null&&(oo=[]),e=z1(oo,e,i),i=jt,(Xe===null?i.memoizedState:Xe.next)===null&&(i=i.alternate,Y.H=i===null||i.memoizedState===null?_v:wv),e}function Zc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xl(e);if(e.$$typeof===R)return vn(e)}throw Error(a(438,String(e)))}function mp(e){var i=null,o=jt.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var l=jt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=pp(),jt.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(e),l=0;l<e;l++)o[l]=K;return i.index++,o}function Hr(e,i){return typeof i=="function"?i(e):i}function Ic(e){var i=qe();return gp(i,re,e)}function gp(e,i,o){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=o;var d=e.baseQueue,m=l.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}i.baseQueue=d=m,l.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{i=d.next;var E=_=null,j=null,H=i,Z=!1;do{var W=H.lane&-536870913;if(W!==H.lane?(qt&W)===W:(ma&W)===W){var G=H.revertLane;if(G===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),W===io&&(Z=!0);else if((ma&G)===G){H=H.next,G===io&&(Z=!0);continue}else W={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},j===null?(E=j=W,_=m):j=j.next=W,jt.lanes|=G,wa|=G;W=H.action,cs&&o(m,W),m=H.hasEagerState?H.eagerState:o(m,W)}else G={lane:W,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},j===null?(E=j=G,_=m):j=j.next=G,jt.lanes|=W,wa|=W;H=H.next}while(H!==null&&H!==i);if(j===null?_=m:j.next=E,!si(m,e.memoizedState)&&(tn=!0,Z&&(o=ro,o!==null)))throw o;e.memoizedState=m,e.baseState=_,e.baseQueue=j,l.lastRenderedState=m}return d===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function yp(e){var i=qe(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var l=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var _=d=d.next;do m=e(m,_.action),_=_.next;while(_!==d);si(m,i.memoizedState)||(tn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,l]}function H1(e,i,o){var l=jt,d=qe(),m=Zt;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=i();var _=!si((re||d).memoizedState,o);_&&(d.memoizedState=o,tn=!0),d=d.queue;var E=X1.bind(null,l,d,e);if(ql(2048,8,E,[e]),d.getSnapshot!==i||_||Xe!==null&&Xe.memoizedState.tag&1){if(l.flags|=2048,lo(9,Wc(),G1.bind(null,l,d,o,i),null),de===null)throw Error(a(349));m||(ma&124)!==0||Y1(l,i,o)}return o}function Y1(e,i,o){e.flags|=16384,e={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i=pp(),jt.updateQueue=i,i.stores=[e]):(o=i.stores,o===null?i.stores=[e]:o.push(e))}function G1(e,i,o,l){i.value=o,i.getSnapshot=l,q1(i)&&F1(e)}function X1(e,i,o){return o(function(){q1(i)&&F1(e)})}function q1(e){var i=e.getSnapshot;e=e.value;try{var o=i();return!si(e,o)}catch{return!0}}function F1(e){var i=Js(e,2);i!==null&&di(i,e,2)}function vp(e){var i=qn();if(typeof e=="function"){var o=e;if(e=o(),cs){He(!0);try{o()}finally{He(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},i}function $1(e,i,o,l){return e.baseState=o,gp(e,re,typeof l=="function"?l:Hr)}function KE(e,i,o,l,d){if(tf(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){m.listeners.push(_)}};Y.T!==null?o(!0):m.isTransition=!1,l(m),o=i.pending,o===null?(m.next=i.pending=m,Q1(i,m)):(m.next=o.next,i.pending=o.next=m)}}function Q1(e,i){var o=i.action,l=i.payload,d=e.state;if(i.isTransition){var m=Y.T,_={};Y.T=_;try{var E=o(d,l),j=Y.S;j!==null&&j(_,E),K1(e,i,E)}catch(H){xp(e,i,H)}finally{Y.T=m}}else try{m=o(d,l),K1(e,i,m)}catch(H){xp(e,i,H)}}function K1(e,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(l){Z1(e,i,l)},function(l){return xp(e,i,l)}):Z1(e,i,o)}function Z1(e,i,o){i.status="fulfilled",i.value=o,I1(i),e.state=o,i=e.pending,i!==null&&(o=i.next,o===i?e.pending=null:(o=o.next,i.next=o,Q1(e,o)))}function xp(e,i,o){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=o,I1(i),i=i.next;while(i!==l)}e.action=null}function I1(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function W1(e,i){return i}function J1(e,i){if(Zt){var o=de.formState;if(o!==null){t:{var l=jt;if(Zt){if(De){e:{for(var d=De,m=or;d.nodeType!==8;){if(!m){d=null;break e}if(d=er(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){De=er(d.nextSibling),l=d.data==="F!";break t}}ss(l)}l=!1}l&&(i=o[0])}}return o=qn(),o.memoizedState=o.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:W1,lastRenderedState:i},o.queue=l,o=vv.bind(null,jt,l),l.dispatch=o,l=vp(!1),m=Tp.bind(null,jt,!1,l.queue),l=qn(),d={state:i,dispatch:null,action:e,pending:null},l.queue=d,o=KE.bind(null,jt,d,m,o),d.dispatch=o,l.memoizedState=e,[i,o,!1]}function tv(e){var i=qe();return ev(i,re,e)}function ev(e,i,o){if(i=gp(e,i,W1)[0],e=Ic(Hr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Xl(i)}catch(_){throw _===Bl?qc:_}else l=i;i=qe();var d=i.queue,m=d.dispatch;return o!==i.memoizedState&&(jt.flags|=2048,lo(9,Wc(),ZE.bind(null,d,o),null)),[l,m,e]}function ZE(e,i){e.action=i}function nv(e){var i=qe(),o=re;if(o!==null)return ev(i,o,e);qe(),i=i.memoizedState,o=qe();var l=o.queue.dispatch;return o.memoizedState=e,[i,l,!1]}function lo(e,i,o,l){return e={tag:e,create:o,deps:l,inst:i,next:null},i=jt.updateQueue,i===null&&(i=pp(),jt.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,i.lastEffect=e),e}function Wc(){return{destroy:void 0,resource:void 0}}function iv(){return qe().memoizedState}function Jc(e,i,o,l){var d=qn();l=l===void 0?null:l,jt.flags|=e,d.memoizedState=lo(1|i,Wc(),o,l)}function ql(e,i,o,l){var d=qe();l=l===void 0?null:l;var m=d.memoizedState.inst;re!==null&&l!==null&&up(l,re.memoizedState.deps)?d.memoizedState=lo(i,m,o,l):(jt.flags|=e,d.memoizedState=lo(1|i,m,o,l))}function rv(e,i){Jc(8390656,8,e,i)}function av(e,i){ql(2048,8,e,i)}function sv(e,i){return ql(4,2,e,i)}function ov(e,i){return ql(4,4,e,i)}function lv(e,i){if(typeof i=="function"){e=e();var o=i(e);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function uv(e,i,o){o=o!=null?o.concat([e]):null,ql(4,4,lv.bind(null,i,e),o)}function bp(){}function cv(e,i){var o=qe();i=i===void 0?null:i;var l=o.memoizedState;return i!==null&&up(i,l[1])?l[0]:(o.memoizedState=[e,i],e)}function fv(e,i){var o=qe();i=i===void 0?null:i;var l=o.memoizedState;if(i!==null&&up(i,l[1]))return l[0];if(l=e(),cs){He(!0);try{e()}finally{He(!1)}}return o.memoizedState=[l,i],l}function _p(e,i,o){return o===void 0||(ma&1073741824)!==0?e.memoizedState=i:(e.memoizedState=o,e=px(),jt.lanes|=e,wa|=e,o)}function dv(e,i,o,l){return si(o,i)?o:ao.current!==null?(e=_p(e,o,l),si(e,i)||(tn=!0),e):(ma&42)===0?(tn=!0,e.memoizedState=o):(e=px(),jt.lanes|=e,wa|=e,i)}function hv(e,i,o,l,d){var m=$.p;$.p=m!==0&&8>m?m:8;var _=Y.T,E={};Y.T=E,Tp(e,!1,i,o);try{var j=d(),H=Y.S;if(H!==null&&H(E,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Z=FE(j,l);Fl(e,i,Z,fi(e))}else Fl(e,i,l,fi(e))}catch(W){Fl(e,i,{then:function(){},status:"rejected",reason:W},fi())}finally{$.p=m,Y.T=_}}function IE(){}function wp(e,i,o,l){if(e.tag!==5)throw Error(a(476));var d=pv(e).queue;hv(e,d,i,J,o===null?IE:function(){return mv(e),o(l)})}function pv(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:J},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:o},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function mv(e){var i=pv(e).next.queue;Fl(e,i,{},fi())}function Sp(){return vn(cu)}function gv(){return qe().memoizedState}function yv(){return qe().memoizedState}function WE(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var o=fi();e=ha(o);var l=pa(i,e,o);l!==null&&(di(l,i,o),Ul(l,i,o)),i={cache:Jh()},e.payload=i;return}i=i.return}}function JE(e,i,o){var l=fi();o={lane:l,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},tf(e)?xv(i,o):(o=Gh(e,i,o,l),o!==null&&(di(o,e,l),bv(o,i,l)))}function vv(e,i,o){var l=fi();Fl(e,i,o,l)}function Fl(e,i,o,l){var d={lane:l,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(tf(e))xv(i,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,E=m(_,o);if(d.hasEagerState=!0,d.eagerState=E,si(E,_))return Pc(e,i,d,0),de===null&&Nc(),!1}catch{}finally{}if(o=Gh(e,i,d,l),o!==null)return di(o,e,l),bv(o,i,l),!0}return!1}function Tp(e,i,o,l){if(l={lane:2,revertLane:nm(),action:l,hasEagerState:!1,eagerState:null,next:null},tf(e)){if(i)throw Error(a(479))}else i=Gh(e,o,l,2),i!==null&&di(i,e,2)}function tf(e){var i=e.alternate;return e===jt||i!==null&&i===jt}function xv(e,i){so=Qc=!0;var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}function bv(e,i,o){if((o&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,o|=l,i.lanes=o,Or(e,o)}}var ef={readContext:vn,use:Zc,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le},_v={readContext:vn,use:Zc,useCallback:function(e,i){return qn().memoizedState=[e,i===void 0?null:i],e},useContext:vn,useEffect:rv,useImperativeHandle:function(e,i,o){o=o!=null?o.concat([e]):null,Jc(4194308,4,lv.bind(null,i,e),o)},useLayoutEffect:function(e,i){return Jc(4194308,4,e,i)},useInsertionEffect:function(e,i){Jc(4,2,e,i)},useMemo:function(e,i){var o=qn();i=i===void 0?null:i;var l=e();if(cs){He(!0);try{e()}finally{He(!1)}}return o.memoizedState=[l,i],l},useReducer:function(e,i,o){var l=qn();if(o!==void 0){var d=o(i);if(cs){He(!0);try{o(i)}finally{He(!1)}}}else d=i;return l.memoizedState=l.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},l.queue=e,e=e.dispatch=JE.bind(null,jt,e),[l.memoizedState,e]},useRef:function(e){var i=qn();return e={current:e},i.memoizedState=e},useState:function(e){e=vp(e);var i=e.queue,o=vv.bind(null,jt,i);return i.dispatch=o,[e.memoizedState,o]},useDebugValue:bp,useDeferredValue:function(e,i){var o=qn();return _p(o,e,i)},useTransition:function(){var e=vp(!1);return e=hv.bind(null,jt,e.queue,!0,!1),qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,o){var l=jt,d=qn();if(Zt){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),de===null)throw Error(a(349));(qt&124)!==0||Y1(l,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,rv(X1.bind(null,l,m,e),[e]),l.flags|=2048,lo(9,Wc(),G1.bind(null,l,m,o,i),null),o},useId:function(){var e=qn(),i=de.identifierPrefix;if(Zt){var o=Br,l=Pr;o=(l&~(1<<32-ce(l)-1)).toString(32)+o,i="«"+i+"R"+o,o=Kc++,0<o&&(i+="H"+o.toString(32)),i+="»"}else o=$E++,i="«"+i+"r"+o.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Sp,useFormState:J1,useActionState:J1,useOptimistic:function(e){var i=qn();i.memoizedState=i.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=Tp.bind(null,jt,!0,o),o.dispatch=i,[e,i]},useMemoCache:mp,useCacheRefresh:function(){return qn().memoizedState=WE.bind(null,jt)}},wv={readContext:vn,use:Zc,useCallback:cv,useContext:vn,useEffect:av,useImperativeHandle:uv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:fv,useReducer:Ic,useRef:iv,useState:function(){return Ic(Hr)},useDebugValue:bp,useDeferredValue:function(e,i){var o=qe();return dv(o,re.memoizedState,e,i)},useTransition:function(){var e=Ic(Hr)[0],i=qe().memoizedState;return[typeof e=="boolean"?e:Xl(e),i]},useSyncExternalStore:H1,useId:gv,useHostTransitionStatus:Sp,useFormState:tv,useActionState:tv,useOptimistic:function(e,i){var o=qe();return $1(o,re,e,i)},useMemoCache:mp,useCacheRefresh:yv},tA={readContext:vn,use:Zc,useCallback:cv,useContext:vn,useEffect:av,useImperativeHandle:uv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:fv,useReducer:yp,useRef:iv,useState:function(){return yp(Hr)},useDebugValue:bp,useDeferredValue:function(e,i){var o=qe();return re===null?_p(o,e,i):dv(o,re.memoizedState,e,i)},useTransition:function(){var e=yp(Hr)[0],i=qe().memoizedState;return[typeof e=="boolean"?e:Xl(e),i]},useSyncExternalStore:H1,useId:gv,useHostTransitionStatus:Sp,useFormState:nv,useActionState:nv,useOptimistic:function(e,i){var o=qe();return re!==null?$1(o,re,e,i):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:mp,useCacheRefresh:yv},uo=null,$l=0;function nf(e){var i=$l;return $l+=1,uo===null&&(uo=[]),z1(uo,e,i)}function Ql(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function rf(e,i){throw i.$$typeof===y?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Sv(e){var i=e._init;return i(e._payload)}function Tv(e){function i(B,L){if(e){var U=B.deletions;U===null?(B.deletions=[L],B.flags|=16):U.push(L)}}function o(B,L){if(!e)return null;for(;L!==null;)i(B,L),L=L.sibling;return null}function l(B){for(var L=new Map;B!==null;)B.key!==null?L.set(B.key,B):L.set(B.index,B),B=B.sibling;return L}function d(B,L){return B=Nr(B,L),B.index=0,B.sibling=null,B}function m(B,L,U){return B.index=U,e?(U=B.alternate,U!==null?(U=U.index,U<L?(B.flags|=67108866,L):U):(B.flags|=67108866,L)):(B.flags|=1048576,L)}function _(B){return e&&B.alternate===null&&(B.flags|=67108866),B}function E(B,L,U,I){return L===null||L.tag!==6?(L=qh(U,B.mode,I),L.return=B,L):(L=d(L,U),L.return=B,L)}function j(B,L,U,I){var ut=U.type;return ut===w?Z(B,L,U.props.children,I,U.key):L!==null&&(L.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===V&&Sv(ut)===L.type)?(L=d(L,U.props),Ql(L,U),L.return=B,L):(L=Vc(U.type,U.key,U.props,null,B.mode,I),Ql(L,U),L.return=B,L)}function H(B,L,U,I){return L===null||L.tag!==4||L.stateNode.containerInfo!==U.containerInfo||L.stateNode.implementation!==U.implementation?(L=Fh(U,B.mode,I),L.return=B,L):(L=d(L,U.children||[]),L.return=B,L)}function Z(B,L,U,I,ut){return L===null||L.tag!==7?(L=ns(U,B.mode,I,ut),L.return=B,L):(L=d(L,U),L.return=B,L)}function W(B,L,U){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=qh(""+L,B.mode,U),L.return=B,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case x:return U=Vc(L.type,L.key,L.props,null,B.mode,U),Ql(U,L),U.return=B,U;case v:return L=Fh(L,B.mode,U),L.return=B,L;case V:var I=L._init;return L=I(L._payload),W(B,L,U)}if(gt(L)||tt(L))return L=ns(L,B.mode,U,null),L.return=B,L;if(typeof L.then=="function")return W(B,nf(L),U);if(L.$$typeof===R)return W(B,Gc(B,L),U);rf(B,L)}return null}function G(B,L,U,I){var ut=L!==null?L.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ut!==null?null:E(B,L,""+U,I);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case x:return U.key===ut?j(B,L,U,I):null;case v:return U.key===ut?H(B,L,U,I):null;case V:return ut=U._init,U=ut(U._payload),G(B,L,U,I)}if(gt(U)||tt(U))return ut!==null?null:Z(B,L,U,I,null);if(typeof U.then=="function")return G(B,L,nf(U),I);if(U.$$typeof===R)return G(B,L,Gc(B,U),I);rf(B,U)}return null}function q(B,L,U,I,ut){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return B=B.get(U)||null,E(L,B,""+I,ut);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case x:return B=B.get(I.key===null?U:I.key)||null,j(L,B,I,ut);case v:return B=B.get(I.key===null?U:I.key)||null,H(L,B,I,ut);case V:var Lt=I._init;return I=Lt(I._payload),q(B,L,U,I,ut)}if(gt(I)||tt(I))return B=B.get(U)||null,Z(L,B,I,ut,null);if(typeof I.then=="function")return q(B,L,U,nf(I),ut);if(I.$$typeof===R)return q(B,L,U,Gc(L,I),ut);rf(L,I)}return null}function St(B,L,U,I){for(var ut=null,Lt=null,dt=L,bt=L=0,nn=null;dt!==null&&bt<U.length;bt++){dt.index>bt?(nn=dt,dt=null):nn=dt.sibling;var Qt=G(B,dt,U[bt],I);if(Qt===null){dt===null&&(dt=nn);break}e&&dt&&Qt.alternate===null&&i(B,dt),L=m(Qt,L,bt),Lt===null?ut=Qt:Lt.sibling=Qt,Lt=Qt,dt=nn}if(bt===U.length)return o(B,dt),Zt&&rs(B,bt),ut;if(dt===null){for(;bt<U.length;bt++)dt=W(B,U[bt],I),dt!==null&&(L=m(dt,L,bt),Lt===null?ut=dt:Lt.sibling=dt,Lt=dt);return Zt&&rs(B,bt),ut}for(dt=l(dt);bt<U.length;bt++)nn=q(dt,B,bt,U[bt],I),nn!==null&&(e&&nn.alternate!==null&&dt.delete(nn.key===null?bt:nn.key),L=m(nn,L,bt),Lt===null?ut=nn:Lt.sibling=nn,Lt=nn);return e&&dt.forEach(function(Oa){return i(B,Oa)}),Zt&&rs(B,bt),ut}function xt(B,L,U,I){if(U==null)throw Error(a(151));for(var ut=null,Lt=null,dt=L,bt=L=0,nn=null,Qt=U.next();dt!==null&&!Qt.done;bt++,Qt=U.next()){dt.index>bt?(nn=dt,dt=null):nn=dt.sibling;var Oa=G(B,dt,Qt.value,I);if(Oa===null){dt===null&&(dt=nn);break}e&&dt&&Oa.alternate===null&&i(B,dt),L=m(Oa,L,bt),Lt===null?ut=Oa:Lt.sibling=Oa,Lt=Oa,dt=nn}if(Qt.done)return o(B,dt),Zt&&rs(B,bt),ut;if(dt===null){for(;!Qt.done;bt++,Qt=U.next())Qt=W(B,Qt.value,I),Qt!==null&&(L=m(Qt,L,bt),Lt===null?ut=Qt:Lt.sibling=Qt,Lt=Qt);return Zt&&rs(B,bt),ut}for(dt=l(dt);!Qt.done;bt++,Qt=U.next())Qt=q(dt,B,bt,Qt.value,I),Qt!==null&&(e&&Qt.alternate!==null&&dt.delete(Qt.key===null?bt:Qt.key),L=m(Qt,L,bt),Lt===null?ut=Qt:Lt.sibling=Qt,Lt=Qt);return e&&dt.forEach(function(eC){return i(B,eC)}),Zt&&rs(B,bt),ut}function se(B,L,U,I){if(typeof U=="object"&&U!==null&&U.type===w&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case x:t:{for(var ut=U.key;L!==null;){if(L.key===ut){if(ut=U.type,ut===w){if(L.tag===7){o(B,L.sibling),I=d(L,U.props.children),I.return=B,B=I;break t}}else if(L.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===V&&Sv(ut)===L.type){o(B,L.sibling),I=d(L,U.props),Ql(I,U),I.return=B,B=I;break t}o(B,L);break}else i(B,L);L=L.sibling}U.type===w?(I=ns(U.props.children,B.mode,I,U.key),I.return=B,B=I):(I=Vc(U.type,U.key,U.props,null,B.mode,I),Ql(I,U),I.return=B,B=I)}return _(B);case v:t:{for(ut=U.key;L!==null;){if(L.key===ut)if(L.tag===4&&L.stateNode.containerInfo===U.containerInfo&&L.stateNode.implementation===U.implementation){o(B,L.sibling),I=d(L,U.children||[]),I.return=B,B=I;break t}else{o(B,L);break}else i(B,L);L=L.sibling}I=Fh(U,B.mode,I),I.return=B,B=I}return _(B);case V:return ut=U._init,U=ut(U._payload),se(B,L,U,I)}if(gt(U))return St(B,L,U,I);if(tt(U)){if(ut=tt(U),typeof ut!="function")throw Error(a(150));return U=ut.call(U),xt(B,L,U,I)}if(typeof U.then=="function")return se(B,L,nf(U),I);if(U.$$typeof===R)return se(B,L,Gc(B,U),I);rf(B,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,L!==null&&L.tag===6?(o(B,L.sibling),I=d(L,U),I.return=B,B=I):(o(B,L),I=qh(U,B.mode,I),I.return=B,B=I),_(B)):o(B,L)}return function(B,L,U,I){try{$l=0;var ut=se(B,L,U,I);return uo=null,ut}catch(dt){if(dt===Bl||dt===qc)throw dt;var Lt=oi(29,dt,null,B.mode);return Lt.lanes=I,Lt.return=B,Lt}finally{}}}var co=Tv(!0),Ev=Tv(!1),Li=Q(null),lr=null;function ga(e){var i=e.alternate;it(Ie,Ie.current&1),it(Li,e),lr===null&&(i===null||ao.current!==null||i.memoizedState!==null)&&(lr=e)}function Av(e){if(e.tag===22){if(it(Ie,Ie.current),it(Li,e),lr===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(lr=e)}}else ya()}function ya(){it(Ie,Ie.current),it(Li,Li.current)}function Yr(e){et(Li),lr===e&&(lr=null),et(Ie)}var Ie=Q(0);function af(e){for(var i=e;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||pm(o)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Ep(e,i,o,l){i=e.memoizedState,o=o(l,i),o=o==null?i:g({},i,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Ap={enqueueSetState:function(e,i,o){e=e._reactInternals;var l=fi(),d=ha(l);d.payload=i,o!=null&&(d.callback=o),i=pa(e,d,l),i!==null&&(di(i,e,l),Ul(i,e,l))},enqueueReplaceState:function(e,i,o){e=e._reactInternals;var l=fi(),d=ha(l);d.tag=1,d.payload=i,o!=null&&(d.callback=o),i=pa(e,d,l),i!==null&&(di(i,e,l),Ul(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var o=fi(),l=ha(o);l.tag=2,i!=null&&(l.callback=i),i=pa(e,l,o),i!==null&&(di(i,e,o),Ul(i,e,o))}};function Cv(e,i,o,l,d,m,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,_):i.prototype&&i.prototype.isPureReactComponent?!Dl(o,l)||!Dl(d,m):!0}function Rv(e,i,o,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==e&&Ap.enqueueReplaceState(i,i.state,null)}function fs(e,i){var o=i;if("ref"in i){o={};for(var l in i)l!=="ref"&&(o[l]=i[l])}if(e=e.defaultProps){o===i&&(o=g({},o));for(var d in e)o[d]===void 0&&(o[d]=e[d])}return o}var sf=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Mv(e){sf(e)}function Dv(e){console.error(e)}function Ov(e){sf(e)}function of(e,i){try{var o=e.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function jv(e,i,o){try{var l=e.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Cp(e,i,o){return o=ha(o),o.tag=3,o.payload={element:null},o.callback=function(){of(e,i)},o}function zv(e){return e=ha(e),e.tag=3,e}function kv(e,i,o,l){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;e.payload=function(){return d(m)},e.callback=function(){jv(i,o,l)}}var _=o.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){jv(i,o,l),typeof d!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function eA(e,i,o,l,d){if(o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=o.alternate,i!==null&&Ll(i,o,d,!0),o=Li.current,o!==null){switch(o.tag){case 13:return lr===null?Ip():o.alternate===null&&Oe===0&&(Oe=3),o.flags&=-257,o.flags|=65536,o.lanes=d,l===np?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([l]):i.add(l),Jp(e,l,d)),!1;case 22:return o.flags|=65536,l===np?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([l]):o.add(l)),Jp(e,l,d)),!1}throw Error(a(435,o.tag))}return Jp(e,l,d),Ip(),!1}if(Zt)return i=Li.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,l!==Kh&&(e=Error(a(422),{cause:l}),kl(Oi(e,o)))):(l!==Kh&&(i=Error(a(423),{cause:l}),kl(Oi(i,o))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,l=Oi(l,o),d=Cp(e.stateNode,l,d),ap(e,d),Oe!==4&&(Oe=2)),!1;var m=Error(a(520),{cause:l});if(m=Oi(m,o),eu===null?eu=[m]:eu.push(m),Oe!==4&&(Oe=2),i===null)return!0;l=Oi(l,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,e=d&-d,o.lanes|=e,e=Cp(o.stateNode,l,e),ap(o,e),!1;case 1:if(i=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sa===null||!Sa.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=zv(d),kv(d,e,o,l),ap(o,d),!1}o=o.return}while(o!==null);return!1}var Lv=Error(a(461)),tn=!1;function cn(e,i,o,l){i.child=e===null?Ev(i,null,o,l):co(i,e.child,o,l)}function Nv(e,i,o,l,d){o=o.render;var m=i.ref;if("ref"in l){var _={};for(var E in l)E!=="ref"&&(_[E]=l[E])}else _=l;return ls(i),l=cp(e,i,o,_,m,d),E=fp(),e!==null&&!tn?(dp(e,i,d),Gr(e,i,d)):(Zt&&E&&$h(i),i.flags|=1,cn(e,i,l,d),i.child)}function Pv(e,i,o,l,d){if(e===null){var m=o.type;return typeof m=="function"&&!Xh(m)&&m.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=m,Bv(e,i,m,l,d)):(e=Vc(o.type,null,l,i,i.mode,d),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Lp(e,d)){var _=m.memoizedProps;if(o=o.compare,o=o!==null?o:Dl,o(_,l)&&e.ref===i.ref)return Gr(e,i,d)}return i.flags|=1,e=Nr(m,l),e.ref=i.ref,e.return=i,i.child=e}function Bv(e,i,o,l,d){if(e!==null){var m=e.memoizedProps;if(Dl(m,l)&&e.ref===i.ref)if(tn=!1,i.pendingProps=l=m,Lp(e,d))(e.flags&131072)!==0&&(tn=!0);else return i.lanes=e.lanes,Gr(e,i,d)}return Rp(e,i,o,l,d)}function Vv(e,i,o){var l=i.pendingProps,d=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|o:o,e!==null){for(d=i.child=e.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Uv(e,i,l,o)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xc(i,m!==null?m.cachePool:null),m!==null?B1(i,m):op(),Av(i);else return i.lanes=i.childLanes=536870912,Uv(e,i,m!==null?m.baseLanes|o:o,o)}else m!==null?(Xc(i,m.cachePool),B1(i,m),ya(),i.memoizedState=null):(e!==null&&Xc(i,null),op(),ya());return cn(e,i,d,o),i.child}function Uv(e,i,o,l){var d=ep();return d=d===null?null:{parent:Ze._currentValue,pool:d},i.memoizedState={baseLanes:o,cachePool:d},e!==null&&Xc(i,null),op(),Av(i),e!==null&&Ll(e,i,l,!0),null}function lf(e,i){var o=i.ref;if(o===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(i.flags|=4194816)}}function Rp(e,i,o,l,d){return ls(i),o=cp(e,i,o,l,void 0,d),l=fp(),e!==null&&!tn?(dp(e,i,d),Gr(e,i,d)):(Zt&&l&&$h(i),i.flags|=1,cn(e,i,o,d),i.child)}function Hv(e,i,o,l,d,m){return ls(i),i.updateQueue=null,o=U1(i,l,o,d),V1(e),l=fp(),e!==null&&!tn?(dp(e,i,m),Gr(e,i,m)):(Zt&&l&&$h(i),i.flags|=1,cn(e,i,o,m),i.child)}function Yv(e,i,o,l,d){if(ls(i),i.stateNode===null){var m=to,_=o.contextType;typeof _=="object"&&_!==null&&(m=vn(_)),m=new o(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ap,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},ip(i),_=o.contextType,m.context=typeof _=="object"&&_!==null?vn(_):to,m.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Ep(i,o,_,l),m.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(_=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),_!==m.state&&Ap.enqueueReplaceState(m,m.state,null),Yl(i,l,m,d),Hl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var E=i.memoizedProps,j=fs(o,E);m.props=j;var H=m.context,Z=o.contextType;_=to,typeof Z=="object"&&Z!==null&&(_=vn(Z));var W=o.getDerivedStateFromProps;Z=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,Z||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E||H!==_)&&Rv(i,m,l,_),da=!1;var G=i.memoizedState;m.state=G,Yl(i,l,m,d),Hl(),H=i.memoizedState,E||G!==H||da?(typeof W=="function"&&(Ep(i,o,W,l),H=i.memoizedState),(j=da||Cv(i,o,j,l,G,H,_))?(Z||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),m.props=l,m.state=H,m.context=_,l=j):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,rp(e,i),_=i.memoizedProps,Z=fs(o,_),m.props=Z,W=i.pendingProps,G=m.context,H=o.contextType,j=to,typeof H=="object"&&H!==null&&(j=vn(H)),E=o.getDerivedStateFromProps,(H=typeof E=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==W||G!==j)&&Rv(i,m,l,j),da=!1,G=i.memoizedState,m.state=G,Yl(i,l,m,d),Hl();var q=i.memoizedState;_!==W||G!==q||da||e!==null&&e.dependencies!==null&&Yc(e.dependencies)?(typeof E=="function"&&(Ep(i,o,E,l),q=i.memoizedState),(Z=da||Cv(i,o,Z,l,G,q,j)||e!==null&&e.dependencies!==null&&Yc(e.dependencies))?(H||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,q,j),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,q,j)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),m.props=l,m.state=q,m.context=j,l=Z):(typeof m.componentDidUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,lf(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,o=l&&typeof o.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=co(i,e.child,null,d),i.child=co(i,null,o,d)):cn(e,i,o,d),i.memoizedState=m.state,e=i.child):e=Gr(e,i,d),e}function Gv(e,i,o,l){return zl(),i.flags|=256,cn(e,i,o,l),i.child}var Mp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dp(e){return{baseLanes:e,cachePool:D1()}}function Op(e,i,o){return e=e!==null?e.childLanes&~o:0,i&&(e|=Ni),e}function Xv(e,i,o){var l=i.pendingProps,d=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),_&&(d=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,e===null){if(Zt){if(d?ga(i):ya(),Zt){var E=De,j;if(j=E){t:{for(j=E,E=or;j.nodeType!==8;){if(!E){E=null;break t}if(j=er(j.nextSibling),j===null){E=null;break t}}E=j}E!==null?(i.memoizedState={dehydrated:E,treeContext:is!==null?{id:Pr,overflow:Br}:null,retryLane:536870912,hydrationErrors:null},j=oi(18,null,null,0),j.stateNode=E,j.return=i,i.child=j,jn=i,De=null,j=!0):j=!1}j||ss(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return pm(E)?i.lanes=32:i.lanes=536870912,null;Yr(i)}return E=l.children,l=l.fallback,d?(ya(),d=i.mode,E=uf({mode:"hidden",children:E},d),l=ns(l,d,o,null),E.return=i,l.return=i,E.sibling=l,i.child=E,d=i.child,d.memoizedState=Dp(o),d.childLanes=Op(e,_,o),i.memoizedState=Mp,l):(ga(i),jp(i,E))}if(j=e.memoizedState,j!==null&&(E=j.dehydrated,E!==null)){if(m)i.flags&256?(ga(i),i.flags&=-257,i=zp(e,i,o)):i.memoizedState!==null?(ya(),i.child=e.child,i.flags|=128,i=null):(ya(),d=l.fallback,E=i.mode,l=uf({mode:"visible",children:l.children},E),d=ns(d,E,o,null),d.flags|=2,l.return=i,d.return=i,l.sibling=d,i.child=l,co(i,e.child,null,o),l=i.child,l.memoizedState=Dp(o),l.childLanes=Op(e,_,o),i.memoizedState=Mp,i=d);else if(ga(i),pm(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var H=_.dgst;_=H,l=Error(a(419)),l.stack="",l.digest=_,kl({value:l,source:null,stack:null}),i=zp(e,i,o)}else if(tn||Ll(e,i,o,!1),_=(o&e.childLanes)!==0,tn||_){if(_=de,_!==null&&(l=o&-o,l=(l&42)!==0?1:ii(l),l=(l&(_.suspendedLanes|o))!==0?0:l,l!==0&&l!==j.retryLane))throw j.retryLane=l,Js(e,l),di(_,e,l),Lv;E.data==="$?"||Ip(),i=zp(e,i,o)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=j.treeContext,De=er(E.nextSibling),jn=i,Zt=!0,as=null,or=!1,e!==null&&(zi[ki++]=Pr,zi[ki++]=Br,zi[ki++]=is,Pr=e.id,Br=e.overflow,is=i),i=jp(i,l.children),i.flags|=4096);return i}return d?(ya(),d=l.fallback,E=i.mode,j=e.child,H=j.sibling,l=Nr(j,{mode:"hidden",children:l.children}),l.subtreeFlags=j.subtreeFlags&65011712,H!==null?d=Nr(H,d):(d=ns(d,E,o,null),d.flags|=2),d.return=i,l.return=i,l.sibling=d,i.child=l,l=d,d=i.child,E=e.child.memoizedState,E===null?E=Dp(o):(j=E.cachePool,j!==null?(H=Ze._currentValue,j=j.parent!==H?{parent:H,pool:H}:j):j=D1(),E={baseLanes:E.baseLanes|o,cachePool:j}),d.memoizedState=E,d.childLanes=Op(e,_,o),i.memoizedState=Mp,l):(ga(i),o=e.child,e=o.sibling,o=Nr(o,{mode:"visible",children:l.children}),o.return=i,o.sibling=null,e!==null&&(_=i.deletions,_===null?(i.deletions=[e],i.flags|=16):_.push(e)),i.child=o,i.memoizedState=null,o)}function jp(e,i){return i=uf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function uf(e,i){return e=oi(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zp(e,i,o){return co(i,e.child,null,o),e=jp(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function qv(e,i,o){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Ih(e.return,i,o)}function kp(e,i,o,l,d){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=o,m.tailMode=d)}function Fv(e,i,o){var l=i.pendingProps,d=l.revealOrder,m=l.tail;if(cn(e,i,l.children,o),l=Ie.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qv(e,o,i);else if(e.tag===19)qv(e,o,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(it(Ie,l),d){case"forwards":for(o=i.child,d=null;o!==null;)e=o.alternate,e!==null&&af(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),kp(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(e=d.alternate,e!==null&&af(e)===null){i.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}kp(i,!0,o,null,m);break;case"together":kp(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Gr(e,i,o){if(e!==null&&(i.dependencies=e.dependencies),wa|=i.lanes,(o&i.childLanes)===0)if(e!==null){if(Ll(e,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,o=Nr(e,e.pendingProps),i.child=o,o.return=i;e.sibling!==null;)e=e.sibling,o=o.sibling=Nr(e,e.pendingProps),o.return=i;o.sibling=null}return i.child}function Lp(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Yc(e)))}function nA(e,i,o){switch(i.tag){case 3:Et(i,i.stateNode.containerInfo),fa(i,Ze,e.memoizedState.cache),zl();break;case 27:case 5:gn(i);break;case 4:Et(i,i.stateNode.containerInfo);break;case 10:fa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ga(i),i.flags|=128,null):(o&i.child.childLanes)!==0?Xv(e,i,o):(ga(i),e=Gr(e,i,o),e!==null?e.sibling:null);ga(i);break;case 19:var d=(e.flags&128)!==0;if(l=(o&i.childLanes)!==0,l||(Ll(e,i,o,!1),l=(o&i.childLanes)!==0),d){if(l)return Fv(e,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),it(Ie,Ie.current),l)break;return null;case 22:case 23:return i.lanes=0,Vv(e,i,o);case 24:fa(i,Ze,e.memoizedState.cache)}return Gr(e,i,o)}function $v(e,i,o){if(e!==null)if(e.memoizedProps!==i.pendingProps)tn=!0;else{if(!Lp(e,o)&&(i.flags&128)===0)return tn=!1,nA(e,i,o);tn=(e.flags&131072)!==0}else tn=!1,Zt&&(i.flags&1048576)!==0&&S1(i,Hc,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,d=l._init;if(l=d(l._payload),i.type=l,typeof l=="function")Xh(l)?(e=fs(l,e),i.tag=1,i=Yv(null,i,l,e,o)):(i.tag=0,i=Rp(null,i,l,e,o));else{if(l!=null){if(d=l.$$typeof,d===O){i.tag=11,i=Nv(null,i,l,e,o);break t}else if(d===z){i.tag=14,i=Pv(null,i,l,e,o);break t}}throw i=pt(l)||l,Error(a(306,i,""))}}return i;case 0:return Rp(e,i,i.type,i.pendingProps,o);case 1:return l=i.type,d=fs(l,i.pendingProps),Yv(e,i,l,d,o);case 3:t:{if(Et(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;d=m.element,rp(e,i),Yl(i,l,null,o);var _=i.memoizedState;if(l=_.cache,fa(i,Ze,l),l!==m.cache&&Wh(i,[Ze],o,!0),Hl(),l=_.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Gv(e,i,l,o);break t}else if(l!==d){d=Oi(Error(a(424)),i),kl(d),i=Gv(e,i,l,o);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=er(e.firstChild),jn=i,Zt=!0,as=null,or=!0,o=Ev(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(zl(),l===d){i=Gr(e,i,o);break t}cn(e,i,l,o)}i=i.child}return i;case 26:return lf(e,i),e===null?(o=Ix(i.type,null,i.pendingProps,null))?i.memoizedState=o:Zt||(o=i.type,e=i.pendingProps,l=Sf(st.current).createElement(o),l[nt]=i,l[ft]=e,dn(l,o,e),$t(l),i.stateNode=l):i.memoizedState=Ix(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return gn(i),e===null&&Zt&&(l=i.stateNode=Qx(i.type,i.pendingProps,st.current),jn=i,or=!0,d=De,Aa(i.type)?(mm=d,De=er(l.firstChild)):De=d),cn(e,i,i.pendingProps.children,o),lf(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Zt&&((d=l=De)&&(l=DA(l,i.type,i.pendingProps,or),l!==null?(i.stateNode=l,jn=i,De=er(l.firstChild),or=!1,d=!0):d=!1),d||ss(i)),gn(i),d=i.type,m=i.pendingProps,_=e!==null?e.memoizedProps:null,l=m.children,fm(d,m)?l=null:_!==null&&fm(d,_)&&(i.flags|=32),i.memoizedState!==null&&(d=cp(e,i,QE,null,null,o),cu._currentValue=d),lf(e,i),cn(e,i,l,o),i.child;case 6:return e===null&&Zt&&((e=o=De)&&(o=OA(o,i.pendingProps,or),o!==null?(i.stateNode=o,jn=i,De=null,e=!0):e=!1),e||ss(i)),null;case 13:return Xv(e,i,o);case 4:return Et(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=co(i,null,l,o):cn(e,i,l,o),i.child;case 11:return Nv(e,i,i.type,i.pendingProps,o);case 7:return cn(e,i,i.pendingProps,o),i.child;case 8:return cn(e,i,i.pendingProps.children,o),i.child;case 12:return cn(e,i,i.pendingProps.children,o),i.child;case 10:return l=i.pendingProps,fa(i,i.type,l.value),cn(e,i,l.children,o),i.child;case 9:return d=i.type._context,l=i.pendingProps.children,ls(i),d=vn(d),l=l(d),i.flags|=1,cn(e,i,l,o),i.child;case 14:return Pv(e,i,i.type,i.pendingProps,o);case 15:return Bv(e,i,i.type,i.pendingProps,o);case 19:return Fv(e,i,o);case 31:return l=i.pendingProps,o=i.mode,l={mode:l.mode,children:l.children},e===null?(o=uf(l,o),o.ref=i.ref,i.child=o,o.return=i,i=o):(o=Nr(e.child,l),o.ref=i.ref,i.child=o,o.return=i,i=o),i;case 22:return Vv(e,i,o);case 24:return ls(i),l=vn(Ze),e===null?(d=ep(),d===null&&(d=de,m=Jh(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),i.memoizedState={parent:l,cache:d},ip(i),fa(i,Ze,d)):((e.lanes&o)!==0&&(rp(e,i),Yl(i,null,null,o),Hl()),d=e.memoizedState,m=i.memoizedState,d.parent!==l?(d={parent:l,cache:l},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),fa(i,Ze,l)):(l=m.cache,fa(i,Ze,l),l!==d.cache&&Wh(i,[Ze],o,!0))),cn(e,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Xr(e){e.flags|=4}function Qv(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nb(i)){if(i=Li.current,i!==null&&((qt&4194048)===qt?lr!==null:(qt&62914560)!==qt&&(qt&536870912)===0||i!==lr))throw Vl=np,O1;e.flags|=8192}}function cf(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ar():536870912,e.lanes|=i,mo|=i)}function Kl(e,i){if(!Zt)switch(e.tailMode){case"hidden":i=e.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function we(e){var i=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(i)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=o,i}function iA(e,i,o){var l=i.pendingProps;switch(Qh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(i),null;case 1:return we(i),null;case 3:return o=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ur(Ze),Ft(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(jl(i)?Xr(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,A1())),we(i),null;case 26:return o=i.memoizedState,e===null?(Xr(i),o!==null?(we(i),Qv(i,o)):(we(i),i.flags&=-16777217)):o?o!==e.memoizedState?(Xr(i),we(i),Qv(i,o)):(we(i),i.flags&=-16777217):(e.memoizedProps!==l&&Xr(i),we(i),i.flags&=-16777217),null;case 27:pe(i),o=st.current;var d=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Xr(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return we(i),null}e=rt.current,jl(i)?T1(i):(e=Qx(d,l,o),i.stateNode=e,Xr(i))}return we(i),null;case 5:if(pe(i),o=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Xr(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return we(i),null}if(e=rt.current,jl(i))T1(i);else{switch(d=Sf(st.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?d.createElement(o,{is:l.is}):d.createElement(o)}}e[nt]=i,e[ft]=l;t:for(d=i.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===i)break t;for(;d.sibling===null;){if(d.return===null||d.return===i)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}i.stateNode=e;t:switch(dn(e,o,l),o){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Xr(i)}}return we(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Xr(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=st.current,jl(i)){if(e=i.stateNode,o=i.memoizedProps,l=null,d=jn,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}e[nt]=i,e=!!(e.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||Hx(e.nodeValue,o)),e||ss(i)}else e=Sf(e).createTextNode(l),e[nt]=i,i.stateNode=e}return we(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=jl(i),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[nt]=i}else zl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;we(i),d=!1}else d=A1(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(Yr(i),i):(Yr(i),null)}if(Yr(i),(i.flags&128)!==0)return i.lanes=o,i;if(o=l!==null,e=e!==null&&e.memoizedState!==null,o){l=i.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)}return o!==e&&o&&(i.child.flags|=8192),cf(i,i.updateQueue),we(i),null;case 4:return Ft(),e===null&&sm(i.stateNode.containerInfo),we(i),null;case 10:return Ur(i.type),we(i),null;case 19:if(et(Ie),d=i.memoizedState,d===null)return we(i),null;if(l=(i.flags&128)!==0,m=d.rendering,m===null)if(l)Kl(d,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=af(e),m!==null){for(i.flags|=128,Kl(d,!1),e=m.updateQueue,i.updateQueue=e,cf(i,e),i.subtreeFlags=0,e=o,o=i.child;o!==null;)w1(o,e),o=o.sibling;return it(Ie,Ie.current&1|2),i.child}e=e.sibling}d.tail!==null&&F()>hf&&(i.flags|=128,l=!0,Kl(d,!1),i.lanes=4194304)}else{if(!l)if(e=af(m),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,cf(i,e),Kl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Zt)return we(i),null}else 2*F()-d.renderingStartTime>hf&&o!==536870912&&(i.flags|=128,l=!0,Kl(d,!1),i.lanes=4194304);d.isBackwards?(m.sibling=i.child,i.child=m):(e=d.last,e!==null?e.sibling=m:i.child=m,d.last=m)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=F(),i.sibling=null,e=Ie.current,it(Ie,l?e&1|2:e&1),i):(we(i),null);case 22:case 23:return Yr(i),lp(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(o&536870912)!==0&&(i.flags&128)===0&&(we(i),i.subtreeFlags&6&&(i.flags|=8192)):we(i),o=i.updateQueue,o!==null&&cf(i,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==o&&(i.flags|=2048),e!==null&&et(us),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ur(Ze),we(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function rA(e,i){switch(Qh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ur(Ze),Ft(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return pe(i),null;case 13:if(Yr(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));zl()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(Ie),null;case 4:return Ft(),null;case 10:return Ur(i.type),null;case 22:case 23:return Yr(i),lp(),e!==null&&et(us),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ur(Ze),null;case 25:return null;default:return null}}function Kv(e,i){switch(Qh(i),i.tag){case 3:Ur(Ze),Ft();break;case 26:case 27:case 5:pe(i);break;case 4:Ft();break;case 13:Yr(i);break;case 19:et(Ie);break;case 10:Ur(i.type);break;case 22:case 23:Yr(i),lp(),e!==null&&et(us);break;case 24:Ur(Ze)}}function Zl(e,i){try{var o=i.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var d=l.next;o=d;do{if((o.tag&e)===e){l=void 0;var m=o.create,_=o.inst;l=m(),_.destroy=l}o=o.next}while(o!==d)}}catch(E){le(i,i.return,E)}}function va(e,i,o){try{var l=i.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&e)===e){var _=l.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,d=i;var j=o,H=E;try{H()}catch(Z){le(d,j,Z)}}}l=l.next}while(l!==m)}}catch(Z){le(i,i.return,Z)}}function Zv(e){var i=e.updateQueue;if(i!==null){var o=e.stateNode;try{P1(i,o)}catch(l){le(e,e.return,l)}}}function Iv(e,i,o){o.props=fs(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(l){le(e,i,l)}}function Il(e,i){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof o=="function"?e.refCleanup=o(l):o.current=l}}catch(d){le(e,i,d)}}function ur(e,i){var o=e.ref,l=e.refCleanup;if(o!==null)if(typeof l=="function")try{l()}catch(d){le(e,i,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){le(e,i,d)}else o.current=null}function Wv(e){var i=e.type,o=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&l.focus();break t;case"img":o.src?l.src=o.src:o.srcSet&&(l.srcset=o.srcSet)}}catch(d){le(e,e.return,d)}}function Np(e,i,o){try{var l=e.stateNode;EA(l,e.type,o,i),l[ft]=i}catch(d){le(e,e.return,d)}}function Jv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function Pp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bp(e,i,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(e),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=wf));else if(l!==4&&(l===27&&Aa(e.type)&&(o=e.stateNode,i=null),e=e.child,e!==null))for(Bp(e,i,o),e=e.sibling;e!==null;)Bp(e,i,o),e=e.sibling}function ff(e,i,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?o.insertBefore(e,i):o.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(ff(e,i,o),e=e.sibling;e!==null;)ff(e,i,o),e=e.sibling}function tx(e){var i=e.stateNode,o=e.memoizedProps;try{for(var l=e.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);dn(i,l,o),i[nt]=e,i[ft]=o}catch(m){le(e,e.return,m)}}var qr=!1,Ne=!1,Vp=!1,ex=typeof WeakSet=="function"?WeakSet:Set,en=null;function aA(e,i){if(e=e.containerInfo,um=Mf,e=d1(e),Ph(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break t}var _=0,E=-1,j=-1,H=0,Z=0,W=e,G=null;e:for(;;){for(var q;W!==o||d!==0&&W.nodeType!==3||(E=_+d),W!==m||l!==0&&W.nodeType!==3||(j=_+l),W.nodeType===3&&(_+=W.nodeValue.length),(q=W.firstChild)!==null;)G=W,W=q;for(;;){if(W===e)break e;if(G===o&&++H===d&&(E=_),G===m&&++Z===l&&(j=_),(q=W.nextSibling)!==null)break;W=G,G=W.parentNode}W=q}o=E===-1||j===-1?null:{start:E,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(cm={focusedElem:e,selectionRange:o},Mf=!1,en=i;en!==null;)if(i=en,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,en=e;else for(;en!==null;){switch(i=en,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=i,d=m.memoizedProps,m=m.memoizedState,l=o.stateNode;try{var St=fs(o.type,d,o.elementType===o.type);e=l.getSnapshotBeforeUpdate(St,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(xt){le(o,o.return,xt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,o=e.nodeType,o===9)hm(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,en=e;break}en=i.return}}function nx(e,i,o){var l=o.flags;switch(o.tag){case 0:case 11:case 15:xa(e,o),l&4&&Zl(5,o);break;case 1:if(xa(e,o),l&4)if(e=o.stateNode,i===null)try{e.componentDidMount()}catch(_){le(o,o.return,_)}else{var d=fs(o.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(d,i,e.__reactInternalSnapshotBeforeUpdate)}catch(_){le(o,o.return,_)}}l&64&&Zv(o),l&512&&Il(o,o.return);break;case 3:if(xa(e,o),l&64&&(e=o.updateQueue,e!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{P1(e,i)}catch(_){le(o,o.return,_)}}break;case 27:i===null&&l&4&&tx(o);case 26:case 5:xa(e,o),i===null&&l&4&&Wv(o),l&512&&Il(o,o.return);break;case 12:xa(e,o);break;case 13:xa(e,o),l&4&&ax(e,o),l&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=pA.bind(null,o),jA(e,o))));break;case 22:if(l=o.memoizedState!==null||qr,!l){i=i!==null&&i.memoizedState!==null||Ne,d=qr;var m=Ne;qr=l,(Ne=i)&&!m?ba(e,o,(o.subtreeFlags&8772)!==0):xa(e,o),qr=d,Ne=m}break;case 30:break;default:xa(e,o)}}function ix(e){var i=e.alternate;i!==null&&(e.alternate=null,ix(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&fe(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,Fn=!1;function Fr(e,i,o){for(o=o.child;o!==null;)rx(e,i,o),o=o.sibling}function rx(e,i,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Un,o)}catch{}switch(o.tag){case 26:Ne||ur(o,i),Fr(e,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ne||ur(o,i);var l=xe,d=Fn;Aa(o.type)&&(xe=o.stateNode,Fn=!1),Fr(e,i,o),su(o.stateNode),xe=l,Fn=d;break;case 5:Ne||ur(o,i);case 6:if(l=xe,d=Fn,xe=null,Fr(e,i,o),xe=l,Fn=d,xe!==null)if(Fn)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(o.stateNode)}catch(m){le(o,i,m)}else try{xe.removeChild(o.stateNode)}catch(m){le(o,i,m)}break;case 18:xe!==null&&(Fn?(e=xe,Fx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),pu(e)):Fx(xe,o.stateNode));break;case 4:l=xe,d=Fn,xe=o.stateNode.containerInfo,Fn=!0,Fr(e,i,o),xe=l,Fn=d;break;case 0:case 11:case 14:case 15:Ne||va(2,o,i),Ne||va(4,o,i),Fr(e,i,o);break;case 1:Ne||(ur(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"&&Iv(o,i,l)),Fr(e,i,o);break;case 21:Fr(e,i,o);break;case 22:Ne=(l=Ne)||o.memoizedState!==null,Fr(e,i,o),Ne=l;break;default:Fr(e,i,o)}}function ax(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pu(e)}catch(o){le(i,i.return,o)}}function sA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new ex),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new ex),i;default:throw Error(a(435,e.tag))}}function Up(e,i){var o=sA(e);i.forEach(function(l){var d=mA.bind(null,e,l);o.has(l)||(o.add(l),l.then(d,d))})}function li(e,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l],m=e,_=i,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(Aa(E.type)){xe=E.stateNode,Fn=!1;break t}break;case 5:xe=E.stateNode,Fn=!1;break t;case 3:case 4:xe=E.stateNode.containerInfo,Fn=!0;break t}E=E.return}if(xe===null)throw Error(a(160));rx(m,_,d),xe=null,Fn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)sx(i,e),i=i.sibling}var tr=null;function sx(e,i){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:li(i,e),ui(e),l&4&&(va(3,e,e.return),Zl(3,e),va(5,e,e.return));break;case 1:li(i,e),ui(e),l&512&&(Ne||o===null||ur(o,o.return)),l&64&&qr&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?l:o.concat(l))));break;case 26:var d=tr;if(li(i,e),ui(e),l&512&&(Ne||o===null||ur(o,o.return)),l&4){var m=o!==null?o.memoizedState:null;if(l=e.memoizedState,o===null)if(l===null)if(e.stateNode===null){t:{l=e.type,o=e.memoizedProps,d=d.ownerDocument||d;e:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Me]||m[nt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),dn(m,l,o),m[nt]=e,$t(m),l=m;break t;case"link":var _=tb("link","href",d).get(l+(o.href||""));if(_){for(var E=0;E<_.length;E++)if(m=_[E],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){_.splice(E,1);break e}}m=d.createElement(l),dn(m,l,o),d.head.appendChild(m);break;case"meta":if(_=tb("meta","content",d).get(l+(o.content||""))){for(E=0;E<_.length;E++)if(m=_[E],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){_.splice(E,1);break e}}m=d.createElement(l),dn(m,l,o),d.head.appendChild(m);break;default:throw Error(a(468,l))}m[nt]=e,$t(m),l=m}e.stateNode=l}else eb(d,e.type,e.stateNode);else e.stateNode=Jx(d,l,e.memoizedProps);else m!==l?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,l===null?eb(d,e.type,e.stateNode):Jx(d,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Np(e,e.memoizedProps,o.memoizedProps)}break;case 27:li(i,e),ui(e),l&512&&(Ne||o===null||ur(o,o.return)),o!==null&&l&4&&Np(e,e.memoizedProps,o.memoizedProps);break;case 5:if(li(i,e),ui(e),l&512&&(Ne||o===null||ur(o,o.return)),e.flags&32){d=e.stateNode;try{Fs(d,"")}catch(q){le(e,e.return,q)}}l&4&&e.stateNode!=null&&(d=e.memoizedProps,Np(e,d,o!==null?o.memoizedProps:d)),l&1024&&(Vp=!0);break;case 6:if(li(i,e),ui(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,o=e.stateNode;try{o.nodeValue=l}catch(q){le(e,e.return,q)}}break;case 3:if(Af=null,d=tr,tr=Tf(i.containerInfo),li(i,e),tr=d,ui(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{pu(i.containerInfo)}catch(q){le(e,e.return,q)}Vp&&(Vp=!1,ox(e));break;case 4:l=tr,tr=Tf(e.stateNode.containerInfo),li(i,e),ui(e),tr=l;break;case 12:li(i,e),ui(e);break;case 13:li(i,e),ui(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Fp=F()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Up(e,l)));break;case 22:d=e.memoizedState!==null;var j=o!==null&&o.memoizedState!==null,H=qr,Z=Ne;if(qr=H||d,Ne=Z||j,li(i,e),Ne=Z,qr=H,ui(e),l&8192)t:for(i=e.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(o===null||j||qr||Ne||ds(e)),o=null,i=e;;){if(i.tag===5||i.tag===26){if(o===null){j=o=i;try{if(m=j.stateNode,d)_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=j.stateNode;var W=j.memoizedProps.style,G=W!=null&&W.hasOwnProperty("display")?W.display:null;E.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(q){le(j,j.return,q)}}}else if(i.tag===6){if(o===null){j=i;try{j.stateNode.nodeValue=d?"":j.memoizedProps}catch(q){le(j,j.return,q)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(o=l.retryQueue,o!==null&&(l.retryQueue=null,Up(e,o))));break;case 19:li(i,e),ui(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Up(e,l)));break;case 30:break;case 21:break;default:li(i,e),ui(e)}}function ui(e){var i=e.flags;if(i&2){try{for(var o,l=e.return;l!==null;){if(Jv(l)){o=l;break}l=l.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var d=o.stateNode,m=Pp(e);ff(e,m,d);break;case 5:var _=o.stateNode;o.flags&32&&(Fs(_,""),o.flags&=-33);var E=Pp(e);ff(e,E,_);break;case 3:case 4:var j=o.stateNode.containerInfo,H=Pp(e);Bp(e,H,j);break;default:throw Error(a(161))}}catch(Z){le(e,e.return,Z)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function ox(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;ox(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function xa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)nx(e,i.alternate,i),i=i.sibling}function ds(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:va(4,i,i.return),ds(i);break;case 1:ur(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&Iv(i,i.return,o),ds(i);break;case 27:su(i.stateNode);case 26:case 5:ur(i,i.return),ds(i);break;case 22:i.memoizedState===null&&ds(i);break;case 30:ds(i);break;default:ds(i)}e=e.sibling}}function ba(e,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,d=e,m=i,_=m.flags;switch(m.tag){case 0:case 11:case 15:ba(d,m,o),Zl(4,m);break;case 1:if(ba(d,m,o),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){le(l,l.return,H)}if(l=m,d=l.updateQueue,d!==null){var E=l.stateNode;try{var j=d.shared.hiddenCallbacks;if(j!==null)for(d.shared.hiddenCallbacks=null,d=0;d<j.length;d++)N1(j[d],E)}catch(H){le(l,l.return,H)}}o&&_&64&&Zv(m),Il(m,m.return);break;case 27:tx(m);case 26:case 5:ba(d,m,o),o&&l===null&&_&4&&Wv(m),Il(m,m.return);break;case 12:ba(d,m,o);break;case 13:ba(d,m,o),o&&_&4&&ax(d,m);break;case 22:m.memoizedState===null&&ba(d,m,o),Il(m,m.return);break;case 30:break;default:ba(d,m,o)}i=i.sibling}}function Hp(e,i){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Nl(o))}function Yp(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Nl(e))}function cr(e,i,o,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)lx(e,i,o,l),i=i.sibling}function lx(e,i,o,l){var d=i.flags;switch(i.tag){case 0:case 11:case 15:cr(e,i,o,l),d&2048&&Zl(9,i);break;case 1:cr(e,i,o,l);break;case 3:cr(e,i,o,l),d&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Nl(e)));break;case 12:if(d&2048){cr(e,i,o,l),e=i.stateNode;try{var m=i.memoizedProps,_=m.id,E=m.onPostCommit;typeof E=="function"&&E(_,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){le(i,i.return,j)}}else cr(e,i,o,l);break;case 13:cr(e,i,o,l);break;case 23:break;case 22:m=i.stateNode,_=i.alternate,i.memoizedState!==null?m._visibility&2?cr(e,i,o,l):Wl(e,i):m._visibility&2?cr(e,i,o,l):(m._visibility|=2,fo(e,i,o,l,(i.subtreeFlags&10256)!==0)),d&2048&&Hp(_,i);break;case 24:cr(e,i,o,l),d&2048&&Yp(i.alternate,i);break;default:cr(e,i,o,l)}}function fo(e,i,o,l,d){for(d=d&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,_=i,E=o,j=l,H=_.flags;switch(_.tag){case 0:case 11:case 15:fo(m,_,E,j,d),Zl(8,_);break;case 23:break;case 22:var Z=_.stateNode;_.memoizedState!==null?Z._visibility&2?fo(m,_,E,j,d):Wl(m,_):(Z._visibility|=2,fo(m,_,E,j,d)),d&&H&2048&&Hp(_.alternate,_);break;case 24:fo(m,_,E,j,d),d&&H&2048&&Yp(_.alternate,_);break;default:fo(m,_,E,j,d)}i=i.sibling}}function Wl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=e,l=i,d=l.flags;switch(l.tag){case 22:Wl(o,l),d&2048&&Hp(l.alternate,l);break;case 24:Wl(o,l),d&2048&&Yp(l.alternate,l);break;default:Wl(o,l)}i=i.sibling}}var Jl=8192;function ho(e){if(e.subtreeFlags&Jl)for(e=e.child;e!==null;)ux(e),e=e.sibling}function ux(e){switch(e.tag){case 26:ho(e),e.flags&Jl&&e.memoizedState!==null&&qA(tr,e.memoizedState,e.memoizedProps);break;case 5:ho(e);break;case 3:case 4:var i=tr;tr=Tf(e.stateNode.containerInfo),ho(e),tr=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Jl,Jl=16777216,ho(e),Jl=i):ho(e));break;default:ho(e)}}function cx(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function tu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var l=i[o];en=l,dx(l,e)}cx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fx(e),e=e.sibling}function fx(e){switch(e.tag){case 0:case 11:case 15:tu(e),e.flags&2048&&va(9,e,e.return);break;case 3:tu(e);break;case 12:tu(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,df(e)):tu(e);break;default:tu(e)}}function df(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var l=i[o];en=l,dx(l,e)}cx(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:va(8,i,i.return),df(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,df(i));break;default:df(i)}e=e.sibling}}function dx(e,i){for(;en!==null;){var o=en;switch(o.tag){case 0:case 11:case 15:va(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var l=o.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Nl(o.memoizedState.cache)}if(l=o.child,l!==null)l.return=o,en=l;else t:for(o=e;en!==null;){l=en;var d=l.sibling,m=l.return;if(ix(l),l===o){en=null;break t}if(d!==null){d.return=m,en=d;break t}en=m}}}var oA={getCacheForType:function(e){var i=vn(Ze),o=i.data.get(e);return o===void 0&&(o=e(),i.data.set(e,o)),o}},lA=typeof WeakMap=="function"?WeakMap:Map,te=0,de=null,Ut=null,qt=0,ee=0,ci=null,_a=!1,po=!1,Gp=!1,$r=0,Oe=0,wa=0,hs=0,Xp=0,Ni=0,mo=0,eu=null,$n=null,qp=!1,Fp=0,hf=1/0,pf=null,Sa=null,fn=0,Ta=null,go=null,yo=0,$p=0,Qp=null,hx=null,nu=0,Kp=null;function fi(){if((te&2)!==0&&qt!==0)return qt&-qt;if(Y.T!==null){var e=io;return e!==0?e:nm()}return At()}function px(){Ni===0&&(Ni=(qt&536870912)===0||Zt?Rt():536870912);var e=Li.current;return e!==null&&(e.flags|=32),Ni}function di(e,i,o){(e===de&&(ee===2||ee===9)||e.cancelPendingCommit!==null)&&(vo(e,0),Ea(e,qt,Ni,!1)),ln(e,o),((te&2)===0||e!==de)&&(e===de&&((te&2)===0&&(hs|=o),Oe===4&&Ea(e,qt,Ni,!1)),fr(e))}function mx(e,i,o){if((te&6)!==0)throw Error(a(327));var l=!o&&(i&124)===0&&(i&e.expiredLanes)===0||Gn(e,i),d=l?fA(e,i):Wp(e,i,!0),m=l;do{if(d===0){po&&!l&&Ea(e,i,0,!1);break}else{if(o=e.current.alternate,m&&!uA(o)){d=Wp(e,i,!1),m=!1;continue}if(d===2){if(m=i,e.errorRecoveryDisabledLanes&m)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;t:{var E=e;d=eu;var j=E.current.memoizedState.isDehydrated;if(j&&(vo(E,_).flags|=256),_=Wp(E,_,!1),_!==2){if(Gp&&!j){E.errorRecoveryDisabledLanes|=m,hs|=m,d=4;break t}m=$n,$n=d,m!==null&&($n===null?$n=m:$n.push.apply($n,m))}d=_}if(m=!1,d!==2)continue}}if(d===1){vo(e,0),Ea(e,i,0,!0);break}t:{switch(l=e,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ea(l,i,Ni,!_a);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=Fp+300-F(),10<d)){if(Ea(l,i,Ni,!_a),Wi(l,0,!0)!==0)break t;l.timeoutHandle=Xx(gx.bind(null,l,o,$n,pf,qp,i,Ni,hs,mo,_a,m,2,-0,0),d);break t}gx(l,o,$n,pf,qp,i,Ni,hs,mo,_a,m,0,-0,0)}}break}while(!0);fr(e)}function gx(e,i,o,l,d,m,_,E,j,H,Z,W,G,q){if(e.timeoutHandle=-1,W=i.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(uu={stylesheets:null,count:0,unsuspend:XA},ux(i),W=FA(),W!==null)){e.cancelPendingCommit=W(Sx.bind(null,e,i,m,o,l,d,_,E,j,Z,1,G,q)),Ea(e,m,_,!H);return}Sx(e,i,m,o,l,d,_,E,j)}function uA(e){for(var i=e;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var d=o[l],m=d.getSnapshot;d=d.value;try{if(!si(m(),d))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ea(e,i,o,l){i&=~Xp,i&=~hs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var d=i;0<d;){var m=31-ce(d),_=1<<m;l[m]=-1,d&=~_}o!==0&&sr(e,o,i)}function mf(){return(te&6)===0?(iu(0),!1):!0}function Zp(){if(Ut!==null){if(ee===0)var e=Ut.return;else e=Ut,Vr=os=null,hp(e),uo=null,$l=0,e=Ut;for(;e!==null;)Kv(e.alternate,e),e=e.return;Ut=null}}function vo(e,i){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,CA(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Zp(),de=e,Ut=o=Nr(e.current,null),qt=i,ee=0,ci=null,_a=!1,po=Gn(e,i),Gp=!1,mo=Ni=Xp=hs=wa=Oe=0,$n=eu=null,qp=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var d=31-ce(l),m=1<<d;i|=e[d],l&=~m}return $r=i,Nc(),o}function yx(e,i){jt=null,Y.H=ef,i===Bl||i===qc?(i=k1(),ee=3):i===O1?(i=k1(),ee=4):ee=i===Lv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ci=i,Ut===null&&(Oe=1,of(e,Oi(i,e.current)))}function vx(){var e=Y.H;return Y.H=ef,e===null?ef:e}function xx(){var e=Y.A;return Y.A=oA,e}function Ip(){Oe=4,_a||(qt&4194048)!==qt&&Li.current!==null||(po=!0),(wa&134217727)===0&&(hs&134217727)===0||de===null||Ea(de,qt,Ni,!1)}function Wp(e,i,o){var l=te;te|=2;var d=vx(),m=xx();(de!==e||qt!==i)&&(pf=null,vo(e,i)),i=!1;var _=Oe;t:do try{if(ee!==0&&Ut!==null){var E=Ut,j=ci;switch(ee){case 8:Zp(),_=6;break t;case 3:case 2:case 9:case 6:Li.current===null&&(i=!0);var H=ee;if(ee=0,ci=null,xo(e,E,j,H),o&&po){_=0;break t}break;default:H=ee,ee=0,ci=null,xo(e,E,j,H)}}cA(),_=Oe;break}catch(Z){yx(e,Z)}while(!0);return i&&e.shellSuspendCounter++,Vr=os=null,te=l,Y.H=d,Y.A=m,Ut===null&&(de=null,qt=0,Nc()),_}function cA(){for(;Ut!==null;)bx(Ut)}function fA(e,i){var o=te;te|=2;var l=vx(),d=xx();de!==e||qt!==i?(pf=null,hf=F()+500,vo(e,i)):po=Gn(e,i);t:do try{if(ee!==0&&Ut!==null){i=Ut;var m=ci;e:switch(ee){case 1:ee=0,ci=null,xo(e,i,m,1);break;case 2:case 9:if(j1(m)){ee=0,ci=null,_x(i);break}i=function(){ee!==2&&ee!==9||de!==e||(ee=7),fr(e)},m.then(i,i);break t;case 3:ee=7;break t;case 4:ee=5;break t;case 7:j1(m)?(ee=0,ci=null,_x(i)):(ee=0,ci=null,xo(e,i,m,7));break;case 5:var _=null;switch(Ut.tag){case 26:_=Ut.memoizedState;case 5:case 27:var E=Ut;if(!_||nb(_)){ee=0,ci=null;var j=E.sibling;if(j!==null)Ut=j;else{var H=E.return;H!==null?(Ut=H,gf(H)):Ut=null}break e}}ee=0,ci=null,xo(e,i,m,5);break;case 6:ee=0,ci=null,xo(e,i,m,6);break;case 8:Zp(),Oe=6;break t;default:throw Error(a(462))}}dA();break}catch(Z){yx(e,Z)}while(!0);return Vr=os=null,Y.H=l,Y.A=d,te=o,Ut!==null?0:(de=null,qt=0,Nc(),Oe)}function dA(){for(;Ut!==null&&!yn();)bx(Ut)}function bx(e){var i=$v(e.alternate,e,$r);e.memoizedProps=e.pendingProps,i===null?gf(e):Ut=i}function _x(e){var i=e,o=i.alternate;switch(i.tag){case 15:case 0:i=Hv(o,i,i.pendingProps,i.type,void 0,qt);break;case 11:i=Hv(o,i,i.pendingProps,i.type.render,i.ref,qt);break;case 5:hp(i);default:Kv(o,i),i=Ut=w1(i,$r),i=$v(o,i,$r)}e.memoizedProps=e.pendingProps,i===null?gf(e):Ut=i}function xo(e,i,o,l){Vr=os=null,hp(i),uo=null,$l=0;var d=i.return;try{if(eA(e,d,i,o,qt)){Oe=1,of(e,Oi(o,e.current)),Ut=null;return}}catch(m){if(d!==null)throw Ut=d,m;Oe=1,of(e,Oi(o,e.current)),Ut=null;return}i.flags&32768?(Zt||l===1?e=!0:po||(qt&536870912)!==0?e=!1:(_a=e=!0,(l===2||l===9||l===3||l===6)&&(l=Li.current,l!==null&&l.tag===13&&(l.flags|=16384))),wx(i,e)):gf(i)}function gf(e){var i=e;do{if((i.flags&32768)!==0){wx(i,_a);return}e=i.return;var o=iA(i.alternate,i,$r);if(o!==null){Ut=o;return}if(i=i.sibling,i!==null){Ut=i;return}Ut=i=e}while(i!==null);Oe===0&&(Oe=5)}function wx(e,i){do{var o=rA(e.alternate,e);if(o!==null){o.flags&=32767,Ut=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(e=e.sibling,e!==null)){Ut=e;return}Ut=e=o}while(e!==null);Oe=6,Ut=null}function Sx(e,i,o,l,d,m,_,E,j){e.cancelPendingCommit=null;do yf();while(fn!==0);if((te&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Yh,ni(e,o,m,_,E,j),e===de&&(Ut=de=null,qt=0),go=i,Ta=e,yo=o,$p=m,Qp=d,hx=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gA(oe,function(){return Rx(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,d=$.p,$.p=2,_=te,te|=4;try{aA(e,i,o)}finally{te=_,$.p=d,Y.T=l}}fn=1,Tx(),Ex(),Ax()}}function Tx(){if(fn===1){fn=0;var e=Ta,i=go,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var l=$.p;$.p=2;var d=te;te|=4;try{sx(i,e);var m=cm,_=d1(e.containerInfo),E=m.focusedElem,j=m.selectionRange;if(_!==E&&E&&E.ownerDocument&&f1(E.ownerDocument.documentElement,E)){if(j!==null&&Ph(E)){var H=j.start,Z=j.end;if(Z===void 0&&(Z=H),"selectionStart"in E)E.selectionStart=H,E.selectionEnd=Math.min(Z,E.value.length);else{var W=E.ownerDocument||document,G=W&&W.defaultView||window;if(G.getSelection){var q=G.getSelection(),St=E.textContent.length,xt=Math.min(j.start,St),se=j.end===void 0?xt:Math.min(j.end,St);!q.extend&&xt>se&&(_=se,se=xt,xt=_);var B=c1(E,xt),L=c1(E,se);if(B&&L&&(q.rangeCount!==1||q.anchorNode!==B.node||q.anchorOffset!==B.offset||q.focusNode!==L.node||q.focusOffset!==L.offset)){var U=W.createRange();U.setStart(B.node,B.offset),q.removeAllRanges(),xt>se?(q.addRange(U),q.extend(L.node,L.offset)):(U.setEnd(L.node,L.offset),q.addRange(U))}}}}for(W=[],q=E;q=q.parentNode;)q.nodeType===1&&W.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<W.length;E++){var I=W[E];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}Mf=!!um,cm=um=null}finally{te=d,$.p=l,Y.T=o}}e.current=i,fn=2}}function Ex(){if(fn===2){fn=0;var e=Ta,i=go,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var l=$.p;$.p=2;var d=te;te|=4;try{nx(e,i.alternate,i)}finally{te=d,$.p=l,Y.T=o}}fn=3}}function Ax(){if(fn===4||fn===3){fn=0,Rn();var e=Ta,i=go,o=yo,l=hx;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?fn=5:(fn=0,go=Ta=null,Cx(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(Sa=null),jr(o),i=i.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Un,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Y.T,d=$.p,$.p=2,Y.T=null;try{for(var m=e.onRecoverableError,_=0;_<l.length;_++){var E=l[_];m(E.value,{componentStack:E.stack})}}finally{Y.T=i,$.p=d}}(yo&3)!==0&&yf(),fr(e),d=e.pendingLanes,(o&4194090)!==0&&(d&42)!==0?e===Kp?nu++:(nu=0,Kp=e):nu=0,iu(0)}}function Cx(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Nl(i)))}function yf(e){return Tx(),Ex(),Ax(),Rx()}function Rx(){if(fn!==5)return!1;var e=Ta,i=$p;$p=0;var o=jr(yo),l=Y.T,d=$.p;try{$.p=32>o?32:o,Y.T=null,o=Qp,Qp=null;var m=Ta,_=yo;if(fn=0,go=Ta=null,yo=0,(te&6)!==0)throw Error(a(331));var E=te;if(te|=4,fx(m.current),lx(m,m.current,_,o),te=E,iu(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Un,m)}catch{}return!0}finally{$.p=d,Y.T=l,Cx(e,i)}}function Mx(e,i,o){i=Oi(o,i),i=Cp(e.stateNode,i,2),e=pa(e,i,2),e!==null&&(ln(e,2),fr(e))}function le(e,i,o){if(e.tag===3)Mx(e,e,o);else for(;i!==null;){if(i.tag===3){Mx(i,e,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){e=Oi(o,e),o=zv(2),l=pa(i,o,2),l!==null&&(kv(o,l,i,e),ln(l,2),fr(l));break}}i=i.return}}function Jp(e,i,o){var l=e.pingCache;if(l===null){l=e.pingCache=new lA;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(Gp=!0,d.add(o),e=hA.bind(null,e,i,o),i.then(e,e))}function hA(e,i,o){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,de===e&&(qt&o)===o&&(Oe===4||Oe===3&&(qt&62914560)===qt&&300>F()-Fp?(te&2)===0&&vo(e,0):Xp|=o,mo===qt&&(mo=0)),fr(e)}function Dx(e,i){i===0&&(i=ar()),e=Js(e,i),e!==null&&(ln(e,i),fr(e))}function pA(e){var i=e.memoizedState,o=0;i!==null&&(o=i.retryLane),Dx(e,o)}function mA(e,i){var o=0;switch(e.tag){case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Dx(e,o)}function gA(e,i){return Bt(e,i)}var vf=null,bo=null,tm=!1,xf=!1,em=!1,ps=0;function fr(e){e!==bo&&e.next===null&&(bo===null?vf=bo=e:bo=bo.next=e),xf=!0,tm||(tm=!0,vA())}function iu(e,i){if(!em&&xf){em=!0;do for(var o=!1,l=vf;l!==null;){if(e!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var _=l.suspendedLanes,E=l.pingedLanes;m=(1<<31-ce(42|e)+1)-1,m&=d&~(_&~E),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,kx(l,m))}else m=qt,m=Wi(l,l===de?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Gn(l,m)||(o=!0,kx(l,m));l=l.next}while(o);em=!1}}function yA(){Ox()}function Ox(){xf=tm=!1;var e=0;ps!==0&&(AA()&&(e=ps),ps=0);for(var i=F(),o=null,l=vf;l!==null;){var d=l.next,m=jx(l,i);m===0?(l.next=null,o===null?vf=d:o.next=d,d===null&&(bo=o)):(o=l,(e!==0||(m&3)!==0)&&(xf=!0)),l=d}iu(e)}function jx(e,i){for(var o=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var _=31-ce(m),E=1<<_,j=d[_];j===-1?((E&o)===0||(E&l)!==0)&&(d[_]=Dr(E,i)):j<=i&&(e.expiredLanes|=E),m&=~E}if(i=de,o=qt,o=Wi(e,e===i?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,o===0||e===i&&(ee===2||ee===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&me(l),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Gn(e,o)){if(i=o&-o,i===e.callbackPriority)return i;switch(l!==null&&me(l),jr(o)){case 2:case 8:o=Qi;break;case 32:o=oe;break;case 268435456:o=Zi;break;default:o=oe}return l=zx.bind(null,e),o=Bt(o,l),e.callbackPriority=i,e.callbackNode=o,i}return l!==null&&l!==null&&me(l),e.callbackPriority=2,e.callbackNode=null,2}function zx(e,i){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(yf()&&e.callbackNode!==o)return null;var l=qt;return l=Wi(e,e===de?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(mx(e,l,i),jx(e,F()),e.callbackNode!=null&&e.callbackNode===o?zx.bind(null,e):null)}function kx(e,i){if(yf())return null;mx(e,i,!0)}function vA(){RA(function(){(te&6)!==0?Bt(Ei,yA):Ox()})}function nm(){return ps===0&&(ps=Rt()),ps}function Lx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mc(""+e)}function Nx(e,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,e.id&&o.setAttribute("form",e.id),i.parentNode.insertBefore(o,i),e=new FormData(e),o.parentNode.removeChild(o),e}function xA(e,i,o,l,d){if(i==="submit"&&o&&o.stateNode===d){var m=Lx((d[ft]||null).action),_=l.submitter;_&&(i=(i=_[ft]||null)?Lx(i.formAction):_.getAttribute("formAction"),i!==null&&(m=i,_=null));var E=new zc("action","action",null,l,d);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ps!==0){var j=_?Nx(d,_):new FormData(d);wp(o,{pending:!0,data:j,method:d.method,action:m},null,j)}}else typeof m=="function"&&(E.preventDefault(),j=_?Nx(d,_):new FormData(d),wp(o,{pending:!0,data:j,method:d.method,action:m},m,j))},currentTarget:d}]})}}for(var im=0;im<Hh.length;im++){var rm=Hh[im],bA=rm.toLowerCase(),_A=rm[0].toUpperCase()+rm.slice(1);Ji(bA,"on"+_A)}Ji(m1,"onAnimationEnd"),Ji(g1,"onAnimationIteration"),Ji(y1,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(BE,"onTransitionRun"),Ji(VE,"onTransitionStart"),Ji(UE,"onTransitionCancel"),Ji(v1,"onTransitionEnd"),_e("onMouseEnter",["mouseout","mouseover"]),_e("onMouseLeave",["mouseout","mouseover"]),_e("onPointerEnter",["pointerout","pointerover"]),_e("onPointerLeave",["pointerout","pointerover"]),ge("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ge("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ge("onBeforeInput",["compositionend","keypress","textInput","paste"]),ge("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ge("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ge("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));function Px(e,i){i=(i&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],d=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var _=l.length-1;0<=_;_--){var E=l[_],j=E.instance,H=E.currentTarget;if(E=E.listener,j!==m&&d.isPropagationStopped())break t;m=E,d.currentTarget=H;try{m(d)}catch(Z){sf(Z)}d.currentTarget=null,m=j}else for(_=0;_<l.length;_++){if(E=l[_],j=E.instance,H=E.currentTarget,E=E.listener,j!==m&&d.isPropagationStopped())break t;m=E,d.currentTarget=H;try{m(d)}catch(Z){sf(Z)}d.currentTarget=null,m=j}}}}function Ht(e,i){var o=i[Tt];o===void 0&&(o=i[Tt]=new Set);var l=e+"__bubble";o.has(l)||(Bx(i,e,2,!1),o.add(l))}function am(e,i,o){var l=0;i&&(l|=4),Bx(o,e,l,i)}var bf="_reactListening"+Math.random().toString(36).slice(2);function sm(e){if(!e[bf]){e[bf]=!0,ri.forEach(function(o){o!=="selectionchange"&&(wA.has(o)||am(o,!1,e),am(o,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[bf]||(i[bf]=!0,am("selectionchange",!1,i))}}function Bx(e,i,o,l){switch(lb(i)){case 2:var d=KA;break;case 8:d=ZA;break;default:d=bm}o=d.bind(null,i,o,e),d=void 0,!Rh||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(i,o,{capture:!0,passive:d}):e.addEventListener(i,o,!0):d!==void 0?e.addEventListener(i,o,{passive:d}):e.addEventListener(i,o,!1)}function om(e,i,o,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var E=l.stateNode.containerInfo;if(E===d)break;if(_===4)for(_=l.return;_!==null;){var j=_.tag;if((j===3||j===4)&&_.stateNode.containerInfo===d)return;_=_.return}for(;E!==null;){if(_=Kt(E),_===null)return;if(j=_.tag,j===5||j===6||j===26||j===27){l=m=_;continue t}E=E.parentNode}}l=l.return}qy(function(){var H=m,Z=Ah(o),W=[];t:{var G=x1.get(e);if(G!==void 0){var q=zc,St=e;switch(e){case"keypress":if(Oc(o)===0)break t;case"keydown":case"keyup":q=gE;break;case"focusin":St="focus",q=jh;break;case"focusout":St="blur",q=jh;break;case"beforeblur":case"afterblur":q=jh;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Qy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=rE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=xE;break;case m1:case g1:case y1:q=oE;break;case v1:q=_E;break;case"scroll":case"scrollend":q=nE;break;case"wheel":q=SE;break;case"copy":case"cut":case"paste":q=uE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Zy;break;case"toggle":case"beforetoggle":q=EE}var xt=(i&4)!==0,se=!xt&&(e==="scroll"||e==="scrollend"),B=xt?G!==null?G+"Capture":null:G;xt=[];for(var L=H,U;L!==null;){var I=L;if(U=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||U===null||B===null||(I=Sl(L,B),I!=null&&xt.push(au(L,I,U))),se)break;L=L.return}0<xt.length&&(G=new q(G,St,null,o,Z),W.push({event:G,listeners:xt}))}}if((i&7)===0){t:{if(G=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",G&&o!==Eh&&(St=o.relatedTarget||o.fromElement)&&(Kt(St)||St[ct]))break t;if((q||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,q?(St=o.relatedTarget||o.toElement,q=H,St=St?Kt(St):null,St!==null&&(se=u(St),xt=St.tag,St!==se||xt!==5&&xt!==27&&xt!==6)&&(St=null)):(q=null,St=H),q!==St)){if(xt=Qy,I="onMouseLeave",B="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(xt=Zy,I="onPointerLeave",B="onPointerEnter",L="pointer"),se=q==null?G:un(q),U=St==null?G:un(St),G=new xt(I,L+"leave",q,o,Z),G.target=se,G.relatedTarget=U,I=null,Kt(Z)===H&&(xt=new xt(B,L+"enter",St,o,Z),xt.target=U,xt.relatedTarget=se,I=xt),se=I,q&&St)e:{for(xt=q,B=St,L=0,U=xt;U;U=_o(U))L++;for(U=0,I=B;I;I=_o(I))U++;for(;0<L-U;)xt=_o(xt),L--;for(;0<U-L;)B=_o(B),U--;for(;L--;){if(xt===B||B!==null&&xt===B.alternate)break e;xt=_o(xt),B=_o(B)}xt=null}else xt=null;q!==null&&Vx(W,G,q,xt,!1),St!==null&&se!==null&&Vx(W,se,St,xt,!0)}}t:{if(G=H?un(H):window,q=G.nodeName&&G.nodeName.toLowerCase(),q==="select"||q==="input"&&G.type==="file")var ut=r1;else if(n1(G))if(a1)ut=LE;else{ut=zE;var Lt=jE}else q=G.nodeName,!q||q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?H&&Th(H.elementType)&&(ut=r1):ut=kE;if(ut&&(ut=ut(e,H))){i1(W,ut,o,Z);break t}Lt&&Lt(e,G,H),e==="focusout"&&H&&G.type==="number"&&H.memoizedProps.value!=null&&Sh(G,"number",G.value)}switch(Lt=H?un(H):window,e){case"focusin":(n1(Lt)||Lt.contentEditable==="true")&&(Zs=Lt,Bh=H,Ol=null);break;case"focusout":Ol=Bh=Zs=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,h1(W,o,Z);break;case"selectionchange":if(PE)break;case"keydown":case"keyup":h1(W,o,Z)}var dt;if(kh)t:{switch(e){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else Ks?t1(e,o)&&(bt="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(bt="onCompositionStart");bt&&(Iy&&o.locale!=="ko"&&(Ks||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Ks&&(dt=Fy()):(ca=Z,Mh="value"in ca?ca.value:ca.textContent,Ks=!0)),Lt=_f(H,bt),0<Lt.length&&(bt=new Ky(bt,e,null,o,Z),W.push({event:bt,listeners:Lt}),dt?bt.data=dt:(dt=e1(o),dt!==null&&(bt.data=dt)))),(dt=CE?RE(e,o):ME(e,o))&&(bt=_f(H,"onBeforeInput"),0<bt.length&&(Lt=new Ky("onBeforeInput","beforeinput",null,o,Z),W.push({event:Lt,listeners:bt}),Lt.data=dt)),xA(W,e,H,o,Z)}Px(W,i)})}function au(e,i,o){return{instance:e,listener:i,currentTarget:o}}function _f(e,i){for(var o=i+"Capture",l=[];e!==null;){var d=e,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Sl(e,o),d!=null&&l.unshift(au(e,d,m)),d=Sl(e,i),d!=null&&l.push(au(e,d,m))),e.tag===3)return l;e=e.return}return[]}function _o(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vx(e,i,o,l,d){for(var m=i._reactName,_=[];o!==null&&o!==l;){var E=o,j=E.alternate,H=E.stateNode;if(E=E.tag,j!==null&&j===l)break;E!==5&&E!==26&&E!==27||H===null||(j=H,d?(H=Sl(o,m),H!=null&&_.unshift(au(o,H,j))):d||(H=Sl(o,m),H!=null&&_.push(au(o,H,j)))),o=o.return}_.length!==0&&e.push({event:i,listeners:_})}var SA=/\r\n?/g,TA=/\u0000|\uFFFD/g;function Ux(e){return(typeof e=="string"?e:""+e).replace(SA,`
`).replace(TA,"")}function Hx(e,i){return i=Ux(i),Ux(e)===i}function wf(){}function ae(e,i,o,l,d,m){switch(o){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Fs(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Fs(e,""+l);break;case"className":la(e,"class",l);break;case"tabIndex":la(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":la(e,o,l);break;case"style":Gy(e,l,m);break;case"data":if(i!=="object"){la(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||o!=="href")){e.removeAttribute(o);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(o);break}l=Mc(""+l),e.setAttribute(o,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(i!=="input"&&ae(e,i,"name",d.name,d,null),ae(e,i,"formEncType",d.formEncType,d,null),ae(e,i,"formMethod",d.formMethod,d,null),ae(e,i,"formTarget",d.formTarget,d,null)):(ae(e,i,"encType",d.encType,d,null),ae(e,i,"method",d.method,d,null),ae(e,i,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(o);break}l=Mc(""+l),e.setAttribute(o,l);break;case"onClick":l!=null&&(e.onclick=wf);break;case"onScroll":l!=null&&Ht("scroll",e);break;case"onScrollEnd":l!=null&&Ht("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}o=Mc(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,""+l):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":l===!0?e.setAttribute(o,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,l):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(o,l):e.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(o):e.setAttribute(o,l);break;case"popover":Ht("beforetoggle",e),Ht("toggle",e),On(e,"popover",l);break;case"xlinkActuate":Ai(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ai(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ai(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ai(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ai(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ai(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ai(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ai(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ai(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":On(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=tE.get(o)||o,On(e,o,l))}}function lm(e,i,o,l,d,m){switch(o){case"style":Gy(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof l=="string"?Fs(e,l):(typeof l=="number"||typeof l=="bigint")&&Fs(e,""+l);break;case"onScroll":l!=null&&Ht("scroll",e);break;case"onScrollEnd":l!=null&&Ht("scrollend",e);break;case"onClick":l!=null&&(e.onclick=wf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ge.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),i=o.slice(2,d?o.length-7:void 0),m=e[ft]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(i,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(i,l,d);break t}o in e?e[o]=l:l===!0?e.setAttribute(o,""):On(e,o,l)}}}function dn(e,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ht("error",e),Ht("load",e);var l=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var _=o[m];if(_!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ae(e,i,m,_,o,null)}}d&&ae(e,i,"srcSet",o.srcSet,o,null),l&&ae(e,i,"src",o.src,o,null);return;case"input":Ht("invalid",e);var E=m=_=d=null,j=null,H=null;for(l in o)if(o.hasOwnProperty(l)){var Z=o[l];if(Z!=null)switch(l){case"name":d=Z;break;case"type":_=Z;break;case"checked":j=Z;break;case"defaultChecked":H=Z;break;case"value":m=Z;break;case"defaultValue":E=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,i));break;default:ae(e,i,l,Z,o,null)}}Vy(e,m,E,j,H,_,d,!1),Cc(e);return;case"select":Ht("invalid",e),l=_=m=null;for(d in o)if(o.hasOwnProperty(d)&&(E=o[d],E!=null))switch(d){case"value":m=E;break;case"defaultValue":_=E;break;case"multiple":l=E;default:ae(e,i,d,E,o,null)}i=m,o=_,e.multiple=!!l,i!=null?qs(e,!!l,i,!1):o!=null&&qs(e,!!l,o,!0);return;case"textarea":Ht("invalid",e),m=d=l=null;for(_ in o)if(o.hasOwnProperty(_)&&(E=o[_],E!=null))switch(_){case"value":l=E;break;case"defaultValue":d=E;break;case"children":m=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:ae(e,i,_,E,o,null)}Hy(e,l,d,m),Cc(e);return;case"option":for(j in o)if(o.hasOwnProperty(j)&&(l=o[j],l!=null))switch(j){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ae(e,i,j,l,o,null)}return;case"dialog":Ht("beforetoggle",e),Ht("toggle",e),Ht("cancel",e),Ht("close",e);break;case"iframe":case"object":Ht("load",e);break;case"video":case"audio":for(l=0;l<ru.length;l++)Ht(ru[l],e);break;case"image":Ht("error",e),Ht("load",e);break;case"details":Ht("toggle",e);break;case"embed":case"source":case"link":Ht("error",e),Ht("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in o)if(o.hasOwnProperty(H)&&(l=o[H],l!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ae(e,i,H,l,o,null)}return;default:if(Th(i)){for(Z in o)o.hasOwnProperty(Z)&&(l=o[Z],l!==void 0&&lm(e,i,Z,l,o,void 0));return}}for(E in o)o.hasOwnProperty(E)&&(l=o[E],l!=null&&ae(e,i,E,l,o,null))}function EA(e,i,o,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,_=null,E=null,j=null,H=null,Z=null;for(q in o){var W=o[q];if(o.hasOwnProperty(q)&&W!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":j=W;default:l.hasOwnProperty(q)||ae(e,i,q,null,l,W)}}for(var G in l){var q=l[G];if(W=o[G],l.hasOwnProperty(G)&&(q!=null||W!=null))switch(G){case"type":m=q;break;case"name":d=q;break;case"checked":H=q;break;case"defaultChecked":Z=q;break;case"value":_=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,i));break;default:q!==W&&ae(e,i,G,q,l,W)}}wh(e,_,E,j,H,Z,m,d);return;case"select":q=_=E=G=null;for(m in o)if(j=o[m],o.hasOwnProperty(m)&&j!=null)switch(m){case"value":break;case"multiple":q=j;default:l.hasOwnProperty(m)||ae(e,i,m,null,l,j)}for(d in l)if(m=l[d],j=o[d],l.hasOwnProperty(d)&&(m!=null||j!=null))switch(d){case"value":G=m;break;case"defaultValue":E=m;break;case"multiple":_=m;default:m!==j&&ae(e,i,d,m,l,j)}i=E,o=_,l=q,G!=null?qs(e,!!o,G,!1):!!l!=!!o&&(i!=null?qs(e,!!o,i,!0):qs(e,!!o,o?[]:"",!1));return;case"textarea":q=G=null;for(E in o)if(d=o[E],o.hasOwnProperty(E)&&d!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ae(e,i,E,null,l,d)}for(_ in l)if(d=l[_],m=o[_],l.hasOwnProperty(_)&&(d!=null||m!=null))switch(_){case"value":G=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&ae(e,i,_,d,l,m)}Uy(e,G,q);return;case"option":for(var St in o)if(G=o[St],o.hasOwnProperty(St)&&G!=null&&!l.hasOwnProperty(St))switch(St){case"selected":e.selected=!1;break;default:ae(e,i,St,null,l,G)}for(j in l)if(G=l[j],q=o[j],l.hasOwnProperty(j)&&G!==q&&(G!=null||q!=null))switch(j){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:ae(e,i,j,G,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xt in o)G=o[xt],o.hasOwnProperty(xt)&&G!=null&&!l.hasOwnProperty(xt)&&ae(e,i,xt,null,l,G);for(H in l)if(G=l[H],q=o[H],l.hasOwnProperty(H)&&G!==q&&(G!=null||q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,i));break;default:ae(e,i,H,G,l,q)}return;default:if(Th(i)){for(var se in o)G=o[se],o.hasOwnProperty(se)&&G!==void 0&&!l.hasOwnProperty(se)&&lm(e,i,se,void 0,l,G);for(Z in l)G=l[Z],q=o[Z],!l.hasOwnProperty(Z)||G===q||G===void 0&&q===void 0||lm(e,i,Z,G,l,q);return}}for(var B in o)G=o[B],o.hasOwnProperty(B)&&G!=null&&!l.hasOwnProperty(B)&&ae(e,i,B,null,l,G);for(W in l)G=l[W],q=o[W],!l.hasOwnProperty(W)||G===q||G==null&&q==null||ae(e,i,W,G,l,q)}var um=null,cm=null;function Sf(e){return e.nodeType===9?e:e.ownerDocument}function Yx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gx(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function fm(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dm=null;function AA(){var e=window.event;return e&&e.type==="popstate"?e===dm?!1:(dm=e,!0):(dm=null,!1)}var Xx=typeof setTimeout=="function"?setTimeout:void 0,CA=typeof clearTimeout=="function"?clearTimeout:void 0,qx=typeof Promise=="function"?Promise:void 0,RA=typeof queueMicrotask=="function"?queueMicrotask:typeof qx<"u"?function(e){return qx.resolve(null).then(e).catch(MA)}:Xx;function MA(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Fx(e,i){var o=i,l=0,d=0;do{var m=o.nextSibling;if(e.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<l&&8>l){o=l;var _=e.ownerDocument;if(o&1&&su(_.documentElement),o&2&&su(_.body),o&4)for(o=_.head,su(o),_=o.firstChild;_;){var E=_.nextSibling,j=_.nodeName;_[Me]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&_.rel.toLowerCase()==="stylesheet"||o.removeChild(_),_=E}}if(d===0){e.removeChild(m),pu(i);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:l=o.charCodeAt(0)-48;else l=0;o=m}while(o);pu(i)}function hm(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":hm(o),fe(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function DA(e,i,o,l){for(;e.nodeType===1;){var d=o;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Me])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=er(e.nextSibling),e===null)break}return null}function OA(e,i,o){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=er(e.nextSibling),e===null))return null;return e}function pm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function jA(e,i){var o=e.ownerDocument;if(e.data!=="$?"||o.readyState==="complete")i();else{var l=function(){i(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function er(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var mm=null;function $x(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return e;i--}else o==="/$"&&i++}e=e.previousSibling}return null}function Qx(e,i,o){switch(i=Sf(o),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function su(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);fe(e)}var Pi=new Map,Kx=new Set;function Tf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qr=$.d;$.d={f:zA,r:kA,D:LA,C:NA,L:PA,m:BA,X:UA,S:VA,M:HA};function zA(){var e=Qr.f(),i=mf();return e||i}function kA(e){var i=Xt(e);i!==null&&i.tag===5&&i.type==="form"?mv(i):Qr.r(e)}var wo=typeof document>"u"?null:document;function Zx(e,i,o){var l=wo;if(l&&typeof i=="string"&&i){var d=Di(i);d='link[rel="'+e+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),Kx.has(d)||(Kx.add(d),e={rel:e,crossOrigin:o,href:i},l.querySelector(d)===null&&(i=l.createElement("link"),dn(i,"link",e),$t(i),l.head.appendChild(i)))}}function LA(e){Qr.D(e),Zx("dns-prefetch",e,null)}function NA(e,i){Qr.C(e,i),Zx("preconnect",e,i)}function PA(e,i,o){Qr.L(e,i,o);var l=wo;if(l&&e&&i){var d='link[rel="preload"][as="'+Di(i)+'"]';i==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Di(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Di(o.imageSizes)+'"]')):d+='[href="'+Di(e)+'"]';var m=d;switch(i){case"style":m=So(e);break;case"script":m=To(e)}Pi.has(m)||(e=g({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:e,as:i},o),Pi.set(m,e),l.querySelector(d)!==null||i==="style"&&l.querySelector(ou(m))||i==="script"&&l.querySelector(lu(m))||(i=l.createElement("link"),dn(i,"link",e),$t(i),l.head.appendChild(i)))}}function BA(e,i){Qr.m(e,i);var o=wo;if(o&&e){var l=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+Di(l)+'"][href="'+Di(e)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=To(e)}if(!Pi.has(m)&&(e=g({rel:"modulepreload",href:e},i),Pi.set(m,e),o.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(lu(m)))return}l=o.createElement("link"),dn(l,"link",e),$t(l),o.head.appendChild(l)}}}function VA(e,i,o){Qr.S(e,i,o);var l=wo;if(l&&e){var d=It(l).hoistableStyles,m=So(e);i=i||"default";var _=d.get(m);if(!_){var E={loading:0,preload:null};if(_=l.querySelector(ou(m)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},o),(o=Pi.get(m))&&gm(e,o);var j=_=l.createElement("link");$t(j),dn(j,"link",e),j._p=new Promise(function(H,Z){j.onload=H,j.onerror=Z}),j.addEventListener("load",function(){E.loading|=1}),j.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ef(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:E},d.set(m,_)}}}function UA(e,i){Qr.X(e,i);var o=wo;if(o&&e){var l=It(o).hoistableScripts,d=To(e),m=l.get(d);m||(m=o.querySelector(lu(d)),m||(e=g({src:e,async:!0},i),(i=Pi.get(d))&&ym(e,i),m=o.createElement("script"),$t(m),dn(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function HA(e,i){Qr.M(e,i);var o=wo;if(o&&e){var l=It(o).hoistableScripts,d=To(e),m=l.get(d);m||(m=o.querySelector(lu(d)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Pi.get(d))&&ym(e,i),m=o.createElement("script"),$t(m),dn(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function Ix(e,i,o,l){var d=(d=st.current)?Tf(d):null;if(!d)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=So(o.href),o=It(d).hoistableStyles,l=o.get(i),l||(l={type:"style",instance:null,count:0,state:null},o.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=So(o.href);var m=It(d).hoistableStyles,_=m.get(e);if(_||(d=d.ownerDocument||d,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,_),(m=d.querySelector(ou(e)))&&!m._p&&(_.instance=m,_.state.loading=5),Pi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Pi.set(e,o),m||YA(d,e,o,_.state))),i&&l===null)throw Error(a(528,""));return _}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=To(o),o=It(d).hoistableScripts,l=o.get(i),l||(l={type:"script",instance:null,count:0,state:null},o.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function So(e){return'href="'+Di(e)+'"'}function ou(e){return'link[rel="stylesheet"]['+e+"]"}function Wx(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function YA(e,i,o,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),dn(i,"link",o),$t(i),e.head.appendChild(i))}function To(e){return'[src="'+Di(e)+'"]'}function lu(e){return"script[async]"+e}function Jx(e,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Di(o.href)+'"]');if(l)return i.instance=l,$t(l),l;var d=g({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$t(l),dn(l,"style",d),Ef(l,o.precedence,e),i.instance=l;case"stylesheet":d=So(o.href);var m=e.querySelector(ou(d));if(m)return i.state.loading|=4,i.instance=m,$t(m),m;l=Wx(o),(d=Pi.get(d))&&gm(l,d),m=(e.ownerDocument||e).createElement("link"),$t(m);var _=m;return _._p=new Promise(function(E,j){_.onload=E,_.onerror=j}),dn(m,"link",l),i.state.loading|=4,Ef(m,o.precedence,e),i.instance=m;case"script":return m=To(o.src),(d=e.querySelector(lu(m)))?(i.instance=d,$t(d),d):(l=o,(d=Pi.get(m))&&(l=g({},o),ym(l,d)),e=e.ownerDocument||e,d=e.createElement("script"),$t(d),dn(d,"link",l),e.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ef(l,o.precedence,e));return i.instance}function Ef(e,i,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,_=0;_<l.length;_++){var E=l[_];if(E.dataset.precedence===i)m=E;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(e,i.firstChild))}function gm(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ym(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Af=null;function tb(e,i,o){if(Af===null){var l=new Map,d=Af=new Map;d.set(o,l)}else d=Af,l=d.get(o),l||(l=new Map,d.set(o,l));if(l.has(e))return l;for(l.set(e,null),o=o.getElementsByTagName(e),d=0;d<o.length;d++){var m=o[d];if(!(m[Me]||m[nt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var _=m.getAttribute(i)||"";_=e+_;var E=l.get(_);E?E.push(m):l.set(_,[m])}}return l}function eb(e,i,o){e=e.ownerDocument||e,e.head.insertBefore(o,i==="title"?e.querySelector("head > title"):null)}function GA(e,i,o){if(o===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function nb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var uu=null;function XA(){}function qA(e,i,o){if(uu===null)throw Error(a(475));var l=uu;if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=So(o.href),m=e.querySelector(ou(d));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Cf.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=m,$t(m);return}m=e.ownerDocument||e,o=Wx(o),(d=Pi.get(d))&&gm(o,d),m=m.createElement("link"),$t(m);var _=m;_._p=new Promise(function(E,j){_.onload=E,_.onerror=j}),dn(m,"link",o),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Cf.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function FA(){if(uu===null)throw Error(a(475));var e=uu;return e.stylesheets&&e.count===0&&vm(e,e.stylesheets),0<e.count?function(i){var o=setTimeout(function(){if(e.stylesheets&&vm(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(o)}}:null}function Cf(){if(this.count--,this.count===0){if(this.stylesheets)vm(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Rf=null;function vm(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rf=new Map,i.forEach($A,e),Rf=null,Cf.call(e))}function $A(e,i){if(!(i.state.loading&4)){var o=Rf.get(e);if(o)var l=o.get(null);else{o=new Map,Rf.set(e,o);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var _=d[m];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(o.set(_.dataset.precedence,_),l=_)}l&&o.set(null,l)}d=i.instance,_=d.getAttribute("data-precedence"),m=o.get(_)||l,m===l&&o.set(null,d),o.set(_,d),this.count++,l=Cf.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),i.state.loading|=4}}var cu={$$typeof:R,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function QA(e,i,o,l,d,m,_,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function ib(e,i,o,l,d,m,_,E,j,H,Z,W){return e=new QA(e,i,o,_,E,j,H,W),i=1,m===!0&&(i|=24),m=oi(3,null,null,i),e.current=m,m.stateNode=e,i=Jh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:o,cache:i},ip(m),e}function rb(e){return e?(e=to,e):to}function ab(e,i,o,l,d,m){d=rb(d),l.context===null?l.context=d:l.pendingContext=d,l=ha(i),l.payload={element:o},m=m===void 0?null:m,m!==null&&(l.callback=m),o=pa(e,l,i),o!==null&&(di(o,e,i),Ul(o,e,i))}function sb(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<i?o:i}}function xm(e,i){sb(e,i),(e=e.alternate)&&sb(e,i)}function ob(e){if(e.tag===13){var i=Js(e,67108864);i!==null&&di(i,e,67108864),xm(e,67108864)}}var Mf=!0;function KA(e,i,o,l){var d=Y.T;Y.T=null;var m=$.p;try{$.p=2,bm(e,i,o,l)}finally{$.p=m,Y.T=d}}function ZA(e,i,o,l){var d=Y.T;Y.T=null;var m=$.p;try{$.p=8,bm(e,i,o,l)}finally{$.p=m,Y.T=d}}function bm(e,i,o,l){if(Mf){var d=_m(l);if(d===null)om(e,i,l,Df,o),ub(e,l);else if(WA(d,e,i,o,l))l.stopPropagation();else if(ub(e,l),i&4&&-1<IA.indexOf(e)){for(;d!==null;){var m=Xt(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var _=Yn(m.pendingLanes);if(_!==0){var E=m;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var j=1<<31-ce(_);E.entanglements[1]|=j,_&=~j}fr(m),(te&6)===0&&(hf=F()+500,iu(0))}}break;case 13:E=Js(m,2),E!==null&&di(E,m,2),mf(),xm(m,2)}if(m=_m(l),m===null&&om(e,i,l,Df,o),m===d)break;d=m}d!==null&&l.stopPropagation()}else om(e,i,l,null,o)}}function _m(e){return e=Ah(e),wm(e)}var Df=null;function wm(e){if(Df=null,e=Kt(e),e!==null){var i=u(e);if(i===null)e=null;else{var o=i.tag;if(o===13){if(e=c(i),e!==null)return e;e=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Df=e,null}function lb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mn()){case Ei:return 2;case Qi:return 8;case oe:case Ki:return 32;case Zi:return 268435456;default:return 32}default:return 32}}var Sm=!1,Ca=null,Ra=null,Ma=null,fu=new Map,du=new Map,Da=[],IA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ub(e,i){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":fu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(i.pointerId)}}function hu(e,i,o,l,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Xt(i),i!==null&&ob(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),e)}function WA(e,i,o,l,d){switch(i){case"focusin":return Ca=hu(Ca,e,i,o,l,d),!0;case"dragenter":return Ra=hu(Ra,e,i,o,l,d),!0;case"mouseover":return Ma=hu(Ma,e,i,o,l,d),!0;case"pointerover":var m=d.pointerId;return fu.set(m,hu(fu.get(m)||null,e,i,o,l,d)),!0;case"gotpointercapture":return m=d.pointerId,du.set(m,hu(du.get(m)||null,e,i,o,l,d)),!0}return!1}function cb(e){var i=Kt(e.target);if(i!==null){var o=u(i);if(o!==null){if(i=o.tag,i===13){if(i=c(o),i!==null){e.blockedOn=i,vt(e.priority,function(){if(o.tag===13){var l=fi();l=ii(l);var d=Js(o,l);d!==null&&di(d,o,l),xm(o,l)}});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Of(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var o=_m(e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);Eh=l,o.target.dispatchEvent(l),Eh=null}else return i=Xt(o),i!==null&&ob(i),e.blockedOn=o,!1;i.shift()}return!0}function fb(e,i,o){Of(e)&&o.delete(i)}function JA(){Sm=!1,Ca!==null&&Of(Ca)&&(Ca=null),Ra!==null&&Of(Ra)&&(Ra=null),Ma!==null&&Of(Ma)&&(Ma=null),fu.forEach(fb),du.forEach(fb)}function jf(e,i){e.blockedOn===i&&(e.blockedOn=null,Sm||(Sm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,JA)))}var zf=null;function db(e){zf!==e&&(zf=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){zf===e&&(zf=null);for(var i=0;i<e.length;i+=3){var o=e[i],l=e[i+1],d=e[i+2];if(typeof l!="function"){if(wm(l||o)===null)continue;break}var m=Xt(o);m!==null&&(e.splice(i,3),i-=3,wp(m,{pending:!0,data:d,method:o.method,action:l},l,d))}}))}function pu(e){function i(j){return jf(j,e)}Ca!==null&&jf(Ca,e),Ra!==null&&jf(Ra,e),Ma!==null&&jf(Ma,e),fu.forEach(i),du.forEach(i);for(var o=0;o<Da.length;o++){var l=Da[o];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Da.length&&(o=Da[0],o.blockedOn===null);)cb(o),o.blockedOn===null&&Da.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var d=o[l],m=o[l+1],_=d[ft]||null;if(typeof m=="function")_||db(o);else if(_){var E=null;if(m&&m.hasAttribute("formAction")){if(d=m,_=m[ft]||null)E=_.formAction;else if(wm(d)!==null)continue}else E=_.action;typeof E=="function"?o[l+1]=E:(o.splice(l,3),l-=3),db(o)}}}function Tm(e){this._internalRoot=e}kf.prototype.render=Tm.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,l=fi();ab(o,l,e,i,null,null)},kf.prototype.unmount=Tm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;ab(e.current,2,null,e,null,null),mf(),i[ct]=null}};function kf(e){this._internalRoot=e}kf.prototype.unstable_scheduleHydration=function(e){if(e){var i=At();e={blockedOn:null,target:e,priority:i};for(var o=0;o<Da.length&&i!==0&&i<Da[o].priority;o++);Da.splice(o,0,e),o===0&&cb(e)}};var hb=t.version;if(hb!=="19.1.0")throw Error(a(527,hb,"19.1.0"));$.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=h(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var tC={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lf.isDisabled&&Lf.supportsFiber)try{Un=Lf.inject(tC),Yt=Lf}catch{}}return gu.createRoot=function(e,i){if(!s(e))throw Error(a(299));var o=!1,l="",d=Mv,m=Dv,_=Ov,E=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=ib(e,1,!1,null,null,o,l,d,m,_,E,null),e[ct]=i.current,sm(e),new Tm(i)},gu.hydrateRoot=function(e,i,o){if(!s(e))throw Error(a(299));var l=!1,d="",m=Mv,_=Dv,E=Ov,j=null,H=null;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(_=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(j=o.unstable_transitionCallbacks),o.formState!==void 0&&(H=o.formState)),i=ib(e,1,!0,i,o??null,l,d,m,_,E,j,H),i.context=rb(null),o=i.current,l=fi(),l=ii(l),d=ha(l),d.callback=null,pa(o,d,l),o=l,i.current.lanes=o,ln(i,o),fr(i),e[ct]=i.current,sm(e),new kf(i)},gu.version="19.1.0",gu}var Sb;function cC(){if(Sb)return Cm.exports;Sb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Cm.exports=uC(),Cm.exports}var fC=cC();const dC=sS(fC);var Zn=function(){return Zn=Object.assign||function(t){for(var r,a=1,s=arguments.length;a<s;a++){r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},Zn.apply(this,arguments)};function Ld(n,t,r){if(r||arguments.length===2)for(var a=0,s=t.length,u;a<s;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var ye="-ms-",ku="-moz-",Wt="-webkit-",oS="comm",ah="rule",yg="decl",hC="@import",lS="@keyframes",pC="@layer",uS=Math.abs,vg=String.fromCharCode,x0=Object.assign;function mC(n,t){return sn(n,0)^45?(((t<<2^sn(n,0))<<2^sn(n,1))<<2^sn(n,2))<<2^sn(n,3):0}function cS(n){return n.trim()}function Zr(n,t){return(n=t.exec(n))?n[0]:n}function Dt(n,t,r){return n.replace(t,r)}function gd(n,t,r){return n.indexOf(t,r)}function sn(n,t){return n.charCodeAt(t)|0}function il(n,t,r){return n.slice(t,r)}function pr(n){return n.length}function fS(n){return n.length}function Tu(n,t){return t.push(n),n}function gC(n,t){return n.map(t).join("")}function Tb(n,t){return n.filter(function(r){return!Zr(r,t)})}var sh=1,rl=1,dS=0,Fi=0,Qe=0,gl="";function oh(n,t,r,a,s,u,c,f){return{value:n,root:t,parent:r,type:a,props:s,children:u,line:sh,column:rl,length:c,return:"",siblings:f}}function ja(n,t){return x0(oh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function Eo(n){for(;n.root;)n=ja(n.root,{children:[n]});Tu(n,n.siblings)}function yC(){return Qe}function vC(){return Qe=Fi>0?sn(gl,--Fi):0,rl--,Qe===10&&(rl=1,sh--),Qe}function rr(){return Qe=Fi<dS?sn(gl,Fi++):0,rl++,Qe===10&&(rl=1,sh++),Qe}function Ms(){return sn(gl,Fi)}function yd(){return Fi}function lh(n,t){return il(gl,n,t)}function b0(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xC(n){return sh=rl=1,dS=pr(gl=n),Fi=0,[]}function bC(n){return gl="",n}function Om(n){return cS(lh(Fi-1,_0(n===91?n+2:n===40?n+1:n)))}function _C(n){for(;(Qe=Ms())&&Qe<33;)rr();return b0(n)>2||b0(Qe)>3?"":" "}function wC(n,t){for(;--t&&rr()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return lh(n,yd()+(t<6&&Ms()==32&&rr()==32))}function _0(n){for(;rr();)switch(Qe){case n:return Fi;case 34:case 39:n!==34&&n!==39&&_0(Qe);break;case 40:n===41&&_0(n);break;case 92:rr();break}return Fi}function SC(n,t){for(;rr()&&n+Qe!==57;)if(n+Qe===84&&Ms()===47)break;return"/*"+lh(t,Fi-1)+"*"+vg(n===47?n:rr())}function TC(n){for(;!b0(Ms());)rr();return lh(n,Fi)}function EC(n){return bC(vd("",null,null,null,[""],n=xC(n),0,[0],n))}function vd(n,t,r,a,s,u,c,f,h){for(var p=0,g=0,y=c,x=0,v=0,w=0,S=1,C=1,A=1,D=0,R="",O=s,M=u,P=a,z=R;C;)switch(w=D,D=rr()){case 40:if(w!=108&&sn(z,y-1)==58){gd(z+=Dt(Om(D),"&","&\f"),"&\f",uS(p?f[p-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:z+=Om(D);break;case 9:case 10:case 13:case 32:z+=_C(w);break;case 92:z+=wC(yd()-1,7);continue;case 47:switch(Ms()){case 42:case 47:Tu(AC(SC(rr(),yd()),t,r,h),h);break;default:z+="/"}break;case 123*S:f[p++]=pr(z)*A;case 125*S:case 59:case 0:switch(D){case 0:case 125:C=0;case 59+g:A==-1&&(z=Dt(z,/\f/g,"")),v>0&&pr(z)-y&&Tu(v>32?Ab(z+";",a,r,y-1,h):Ab(Dt(z," ","")+";",a,r,y-2,h),h);break;case 59:z+=";";default:if(Tu(P=Eb(z,t,r,p,g,s,f,R,O=[],M=[],y,u),u),D===123)if(g===0)vd(z,t,P,P,O,u,y,f,M);else switch(x===99&&sn(z,3)===110?100:x){case 100:case 108:case 109:case 115:vd(n,P,P,a&&Tu(Eb(n,P,P,0,0,s,f,R,s,O=[],y,M),M),s,M,y,f,a?O:M);break;default:vd(z,P,P,P,[""],M,0,f,M)}}p=g=v=0,S=A=1,R=z="",y=c;break;case 58:y=1+pr(z),v=w;default:if(S<1){if(D==123)--S;else if(D==125&&S++==0&&vC()==125)continue}switch(z+=vg(D),D*S){case 38:A=g>0?1:(z+="\f",-1);break;case 44:f[p++]=(pr(z)-1)*A,A=1;break;case 64:Ms()===45&&(z+=Om(rr())),x=Ms(),g=y=pr(R=z+=TC(yd())),D++;break;case 45:w===45&&pr(z)==2&&(S=0)}}return u}function Eb(n,t,r,a,s,u,c,f,h,p,g,y){for(var x=s-1,v=s===0?u:[""],w=fS(v),S=0,C=0,A=0;S<a;++S)for(var D=0,R=il(n,x+1,x=uS(C=c[S])),O=n;D<w;++D)(O=cS(C>0?v[D]+" "+R:Dt(R,/&\f/g,v[D])))&&(h[A++]=O);return oh(n,t,r,s===0?ah:f,h,p,g,y)}function AC(n,t,r,a){return oh(n,t,r,oS,vg(yC()),il(n,2,-2),0,a)}function Ab(n,t,r,a,s){return oh(n,t,r,yg,il(n,0,a),il(n,a+1,-1),a,s)}function hS(n,t,r){switch(mC(n,t)){case 5103:return Wt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Wt+n+n;case 4789:return ku+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Wt+n+ku+n+ye+n+n;case 5936:switch(sn(n,t+11)){case 114:return Wt+n+ye+Dt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Wt+n+ye+Dt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Wt+n+ye+Dt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Wt+n+ye+n+n;case 6165:return Wt+n+ye+"flex-"+n+n;case 5187:return Wt+n+Dt(n,/(\w+).+(:[^]+)/,Wt+"box-$1$2"+ye+"flex-$1$2")+n;case 5443:return Wt+n+ye+"flex-item-"+Dt(n,/flex-|-self/g,"")+(Zr(n,/flex-|baseline/)?"":ye+"grid-row-"+Dt(n,/flex-|-self/g,""))+n;case 4675:return Wt+n+ye+"flex-line-pack"+Dt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Wt+n+ye+Dt(n,"shrink","negative")+n;case 5292:return Wt+n+ye+Dt(n,"basis","preferred-size")+n;case 6060:return Wt+"box-"+Dt(n,"-grow","")+Wt+n+ye+Dt(n,"grow","positive")+n;case 4554:return Wt+Dt(n,/([^-])(transform)/g,"$1"+Wt+"$2")+n;case 6187:return Dt(Dt(Dt(n,/(zoom-|grab)/,Wt+"$1"),/(image-set)/,Wt+"$1"),n,"")+n;case 5495:case 3959:return Dt(n,/(image-set\([^]*)/,Wt+"$1$`$1");case 4968:return Dt(Dt(n,/(.+:)(flex-)?(.*)/,Wt+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Wt+n+n;case 4200:if(!Zr(n,/flex-|baseline/))return ye+"grid-column-align"+il(n,t)+n;break;case 2592:case 3360:return ye+Dt(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(a,s){return t=s,Zr(a.props,/grid-\w+-end/)})?~gd(n+(r=r[t].value),"span",0)?n:ye+Dt(n,"-start","")+n+ye+"grid-row-span:"+(~gd(r,"span",0)?Zr(r,/\d+/):+Zr(r,/\d+/)-+Zr(n,/\d+/))+";":ye+Dt(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(a){return Zr(a.props,/grid-\w+-start/)})?n:ye+Dt(Dt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Dt(n,/(.+)-inline(.+)/,Wt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pr(n)-1-t>6)switch(sn(n,t+1)){case 109:if(sn(n,t+4)!==45)break;case 102:return Dt(n,/(.+:)(.+)-([^]+)/,"$1"+Wt+"$2-$3$1"+ku+(sn(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~gd(n,"stretch",0)?hS(Dt(n,"stretch","fill-available"),t,r)+n:n}break;case 5152:case 5920:return Dt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,s,u,c,f,h,p){return ye+s+":"+u+p+(c?ye+s+"-span:"+(f?h:+h-+u)+p:"")+n});case 4949:if(sn(n,t+6)===121)return Dt(n,":",":"+Wt)+n;break;case 6444:switch(sn(n,sn(n,14)===45?18:11)){case 120:return Dt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Wt+(sn(n,14)===45?"inline-":"")+"box$3$1"+Wt+"$2$3$1"+ye+"$2box$3")+n;case 100:return Dt(n,":",":"+ye)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Dt(n,"scroll-","scroll-snap-")+n}return n}function Nd(n,t){for(var r="",a=0;a<n.length;a++)r+=t(n[a],a,n,t)||"";return r}function CC(n,t,r,a){switch(n.type){case pC:if(n.children.length)break;case hC:case yg:return n.return=n.return||n.value;case oS:return"";case lS:return n.return=n.value+"{"+Nd(n.children,a)+"}";case ah:if(!pr(n.value=n.props.join(",")))return""}return pr(r=Nd(n.children,a))?n.return=n.value+"{"+r+"}":""}function RC(n){var t=fS(n);return function(r,a,s,u){for(var c="",f=0;f<t;f++)c+=n[f](r,a,s,u)||"";return c}}function MC(n){return function(t){t.root||(t=t.return)&&n(t)}}function DC(n,t,r,a){if(n.length>-1&&!n.return)switch(n.type){case yg:n.return=hS(n.value,n.length,r);return;case lS:return Nd([ja(n,{value:Dt(n.value,"@","@"+Wt)})],a);case ah:if(n.length)return gC(r=n.props,function(s){switch(Zr(s,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Eo(ja(n,{props:[Dt(s,/:(read-\w+)/,":"+ku+"$1")]})),Eo(ja(n,{props:[s]})),x0(n,{props:Tb(r,a)});break;case"::placeholder":Eo(ja(n,{props:[Dt(s,/:(plac\w+)/,":"+Wt+"input-$1")]})),Eo(ja(n,{props:[Dt(s,/:(plac\w+)/,":"+ku+"$1")]})),Eo(ja(n,{props:[Dt(s,/:(plac\w+)/,ye+"input-$1")]})),Eo(ja(n,{props:[s]})),x0(n,{props:Tb(r,a)});break}return""})}}var OC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hi={},al=typeof process<"u"&&hi!==void 0&&(hi.REACT_APP_SC_ATTR||hi.SC_ATTR)||"data-styled",pS="active",mS="data-styled-version",uh="6.1.17",xg=`/*!sc*/
`,Pd=typeof window<"u"&&"HTMLElement"in window,jC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&hi!==void 0&&hi.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hi.REACT_APP_SC_DISABLE_SPEEDY!==""?hi.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hi.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&hi!==void 0&&hi.SC_DISABLE_SPEEDY!==void 0&&hi.SC_DISABLE_SPEEDY!==""&&hi.SC_DISABLE_SPEEDY!=="false"&&hi.SC_DISABLE_SPEEDY),ch=Object.freeze([]),sl=Object.freeze({});function zC(n,t,r){return r===void 0&&(r=sl),n.theme!==r.theme&&n.theme||t||r.theme}var gS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,LC=/(^-|-$)/g;function Cb(n){return n.replace(kC,"-").replace(LC,"")}var NC=/(a)(d)/gi,Nf=52,Rb=function(n){return String.fromCharCode(n+(n>25?39:97))};function w0(n){var t,r="";for(t=Math.abs(n);t>Nf;t=t/Nf|0)r=Rb(t%Nf)+r;return(Rb(t%Nf)+r).replace(NC,"$1-$2")}var jm,yS=5381,Uo=function(n,t){for(var r=t.length;r;)n=33*n^t.charCodeAt(--r);return n},vS=function(n){return Uo(yS,n)};function PC(n){return w0(vS(n)>>>0)}function BC(n){return n.displayName||n.name||"Component"}function zm(n){return typeof n=="string"&&!0}var xS=typeof Symbol=="function"&&Symbol.for,bS=xS?Symbol.for("react.memo"):60115,VC=xS?Symbol.for("react.forward_ref"):60112,UC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},HC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_S={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},YC=((jm={})[VC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jm[bS]=_S,jm);function Mb(n){return("type"in(t=n)&&t.type.$$typeof)===bS?_S:"$$typeof"in n?YC[n.$$typeof]:UC;var t}var GC=Object.defineProperty,XC=Object.getOwnPropertyNames,Db=Object.getOwnPropertySymbols,qC=Object.getOwnPropertyDescriptor,FC=Object.getPrototypeOf,Ob=Object.prototype;function wS(n,t,r){if(typeof t!="string"){if(Ob){var a=FC(t);a&&a!==Ob&&wS(n,a,r)}var s=XC(t);Db&&(s=s.concat(Db(t)));for(var u=Mb(n),c=Mb(t),f=0;f<s.length;++f){var h=s[f];if(!(h in HC||r&&r[h]||c&&h in c||u&&h in u)){var p=qC(t,h);try{GC(n,h,p)}catch{}}}}return n}function ol(n){return typeof n=="function"}function bg(n){return typeof n=="object"&&"styledComponentId"in n}function Ss(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function jb(n,t){if(n.length===0)return"";for(var r=n[0],a=1;a<n.length;a++)r+=n[a];return r}function Wu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function S0(n,t,r){if(r===void 0&&(r=!1),!r&&!Wu(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=S0(n[a],t[a]);else if(Wu(t))for(var a in t)n[a]=S0(n[a],t[a]);return n}function _g(n,t){Object.defineProperty(n,"toString",{value:t})}function xc(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var $C=function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var r=0,a=0;a<t;a++)r+=this.groupSizes[a];return r},n.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var a=this.groupSizes,s=a.length,u=s;t>=u;)if((u<<=1)<0)throw xc(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var c=s;c<u;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(t+1),h=(c=0,r.length);c<h;c++)this.tag.insertRule(f,r[c])&&(this.groupSizes[t]++,f++)},n.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],a=this.indexOfGroup(t),s=a+r;this.groupSizes[t]=0;for(var u=a;u<s;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var a=this.groupSizes[t],s=this.indexOfGroup(t),u=s+a,c=s;c<u;c++)r+="".concat(this.tag.getRule(c)).concat(xg);return r},n}(),xd=new Map,Bd=new Map,bd=1,Pf=function(n){if(xd.has(n))return xd.get(n);for(;Bd.has(bd);)bd++;var t=bd++;return xd.set(n,t),Bd.set(t,n),t},QC=function(n,t){bd=t+1,xd.set(n,t),Bd.set(t,n)},KC="style[".concat(al,"][").concat(mS,'="').concat(uh,'"]'),ZC=new RegExp("^".concat(al,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),IC=function(n,t,r){for(var a,s=r.split(","),u=0,c=s.length;u<c;u++)(a=s[u])&&n.registerName(t,a)},WC=function(n,t){for(var r,a=((r=t.textContent)!==null&&r!==void 0?r:"").split(xg),s=[],u=0,c=a.length;u<c;u++){var f=a[u].trim();if(f){var h=f.match(ZC);if(h){var p=0|parseInt(h[1],10),g=h[2];p!==0&&(QC(g,p),IC(n,g,h[3]),n.getTag().insertRules(p,s)),s.length=0}else s.push(f)}}},zb=function(n){for(var t=document.querySelectorAll(KC),r=0,a=t.length;r<a;r++){var s=t[r];s&&s.getAttribute(al)!==pS&&(WC(n,s),s.parentNode&&s.parentNode.removeChild(s))}};function JC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var SS=function(n){var t=document.head,r=n||t,a=document.createElement("style"),s=function(f){var h=Array.from(f.querySelectorAll("style[".concat(al,"]")));return h[h.length-1]}(r),u=s!==void 0?s.nextSibling:null;a.setAttribute(al,pS),a.setAttribute(mS,uh);var c=JC();return c&&a.setAttribute("nonce",c),r.insertBefore(a,u),a},tR=function(){function n(t){this.element=SS(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,s=0,u=a.length;s<u;s++){var c=a[s];if(c.ownerNode===r)return c}throw xc(17)}(this.element),this.length=0}return n.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},n}(),eR=function(){function n(t){this.element=SS(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n}(),nR=function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n}(),kb=Pd,iR={isServer:!Pd,useCSSOMInjection:!jC},TS=function(){function n(t,r,a){t===void 0&&(t=sl),r===void 0&&(r={});var s=this;this.options=Zn(Zn({},iR),t),this.gs=r,this.names=new Map(a),this.server=!!t.isServer,!this.server&&Pd&&kb&&(kb=!1,zb(this)),_g(this,function(){return function(u){for(var c=u.getTag(),f=c.length,h="",p=function(y){var x=function(A){return Bd.get(A)}(y);if(x===void 0)return"continue";var v=u.names.get(x),w=c.getGroup(y);if(v===void 0||!v.size||w.length===0)return"continue";var S="".concat(al,".g").concat(y,'[id="').concat(x,'"]'),C="";v!==void 0&&v.forEach(function(A){A.length>0&&(C+="".concat(A,","))}),h+="".concat(w).concat(S,'{content:"').concat(C,'"}').concat(xg)},g=0;g<f;g++)p(g);return h}(s)})}return n.registerId=function(t){return Pf(t)},n.prototype.rehydrate=function(){!this.server&&Pd&&zb(this)},n.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new n(Zn(Zn({},this.options),t),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var a=r.useCSSOMInjection,s=r.target;return r.isServer?new nR(s):a?new tR(s):new eR(s)}(this.options),new $C(t)));var t},n.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.prototype.registerName=function(t,r){if(Pf(t),this.names.has(t))this.names.get(t).add(r);else{var a=new Set;a.add(r),this.names.set(t,a)}},n.prototype.insertRules=function(t,r,a){this.registerName(t,r),this.getTag().insertRules(Pf(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(Pf(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n}(),rR=/&/g,aR=/^\s*\/\/.*$/gm;function ES(n,t){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=ES(r.children,t)),r})}function sR(n){var t,r,a,s=sl,u=s.options,c=u===void 0?sl:u,f=s.plugins,h=f===void 0?ch:f,p=function(x,v,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(t):x},g=h.slice();g.push(function(x){x.type===ah&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(rR,r).replace(a,p))}),c.prefix&&g.push(DC),g.push(CC);var y=function(x,v,w,S){v===void 0&&(v=""),w===void 0&&(w=""),S===void 0&&(S="&"),t=S,r=v,a=new RegExp("\\".concat(r,"\\b"),"g");var C=x.replace(aR,""),A=EC(w||v?"".concat(w," ").concat(v," { ").concat(C," }"):C);c.namespace&&(A=ES(A,c.namespace));var D=[];return Nd(A,RC(g.concat(MC(function(R){return D.push(R)})))),D};return y.hash=h.length?h.reduce(function(x,v){return v.name||xc(15),Uo(x,v.name)},yS).toString():"",y}var oR=new TS,T0=sR(),AS=nl.createContext({shouldForwardProp:void 0,styleSheet:oR,stylis:T0});AS.Consumer;nl.createContext(void 0);function Lb(){return k.useContext(AS)}var lR=function(){function n(t,r){var a=this;this.inject=function(s,u){u===void 0&&(u=T0);var c=a.name+u.hash;s.hasNameForId(a.id,c)||s.insertRules(a.id,c,u(a.rules,c,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,_g(this,function(){throw xc(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=T0),this.name+t.hash},n}(),uR=function(n){return n>="A"&&n<="Z"};function Nb(n){for(var t="",r=0;r<n.length;r++){var a=n[r];if(r===1&&a==="-"&&n[0]==="-")return n;uR(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var CS=function(n){return n==null||n===!1||n===""},RS=function(n){var t,r,a=[];for(var s in n){var u=n[s];n.hasOwnProperty(s)&&!CS(u)&&(Array.isArray(u)&&u.isCss||ol(u)?a.push("".concat(Nb(s),":"),u,";"):Wu(u)?a.push.apply(a,Ld(Ld(["".concat(s," {")],RS(u),!1),["}"],!1)):a.push("".concat(Nb(s),": ").concat((t=s,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in OC||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function Ds(n,t,r,a){if(CS(n))return[];if(bg(n))return[".".concat(n.styledComponentId)];if(ol(n)){if(!ol(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var s=n(t);return Ds(s,t,r,a)}var u;return n instanceof lR?r?(n.inject(r,a),[n.getName(a)]):[n]:Wu(n)?RS(n):Array.isArray(n)?Array.prototype.concat.apply(ch,n.map(function(c){return Ds(c,t,r,a)})):[n.toString()]}function cR(n){for(var t=0;t<n.length;t+=1){var r=n[t];if(ol(r)&&!bg(r))return!1}return!0}var fR=vS(uh),dR=function(){function n(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&cR(t),this.componentId=r,this.baseHash=Uo(fR,r),this.baseStyle=a,TS.registerId(r)}return n.prototype.generateAndInjectStyles=function(t,r,a){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=Ss(s,this.staticRulesId);else{var u=jb(Ds(this.rules,t,r,a)),c=w0(Uo(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,c)){var f=a(u,".".concat(c),void 0,this.componentId);r.insertRules(this.componentId,c,f)}s=Ss(s,c),this.staticRulesId=c}else{for(var h=Uo(this.baseHash,a.hash),p="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")p+=y;else if(y){var x=jb(Ds(y,t,r,a));h=Uo(h,x+g),p+=x}}if(p){var v=w0(h>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,a(p,".".concat(v),void 0,this.componentId)),s=Ss(s,v)}}return s},n}(),MS=nl.createContext(void 0);MS.Consumer;var km={};function hR(n,t,r){var a=bg(n),s=n,u=!zm(n),c=t.attrs,f=c===void 0?ch:c,h=t.componentId,p=h===void 0?function(O,M){var P=typeof O!="string"?"sc":Cb(O);km[P]=(km[P]||0)+1;var z="".concat(P,"-").concat(PC(uh+P+km[P]));return M?"".concat(M,"-").concat(z):z}(t.displayName,t.parentComponentId):h,g=t.displayName,y=g===void 0?function(O){return zm(O)?"styled.".concat(O):"Styled(".concat(BC(O),")")}(n):g,x=t.displayName&&t.componentId?"".concat(Cb(t.displayName),"-").concat(t.componentId):t.componentId||p,v=a&&s.attrs?s.attrs.concat(f).filter(Boolean):f,w=t.shouldForwardProp;if(a&&s.shouldForwardProp){var S=s.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;w=function(O,M){return S(O,M)&&C(O,M)}}else w=S}var A=new dR(r,x,a?s.componentStyle:void 0);function D(O,M){return function(P,z,V){var X=P.attrs,K=P.componentStyle,ot=P.defaultProps,tt=P.foldedComponentIds,wt=P.styledComponentId,pt=P.target,gt=nl.useContext(MS),Y=Lb(),$=P.shouldForwardProp||Y.shouldForwardProp,J=zC(z,gt,ot)||sl,at=function(mt,st,Ot){for(var Et,Ft=Zn(Zn({},st),{className:void 0,theme:Ot}),gn=0;gn<mt.length;gn+=1){var pe=ol(Et=mt[gn])?Et(Ft):Et;for(var ie in pe)Ft[ie]=ie==="className"?Ss(Ft[ie],pe[ie]):ie==="style"?Zn(Zn({},Ft[ie]),pe[ie]):pe[ie]}return st.className&&(Ft.className=Ss(Ft.className,st.className)),Ft}(X,z,J),T=at.as||pt,Q={};for(var et in at)at[et]===void 0||et[0]==="$"||et==="as"||et==="theme"&&at.theme===J||(et==="forwardedAs"?Q.as=at.forwardedAs:$&&!$(et,T)||(Q[et]=at[et]));var it=function(mt,st){var Ot=Lb(),Et=mt.generateAndInjectStyles(st,Ot.styleSheet,Ot.stylis);return Et}(K,at),rt=Ss(tt,wt);return it&&(rt+=" "+it),at.className&&(rt+=" "+at.className),Q[zm(T)&&!gS.has(T)?"class":"className"]=rt,V&&(Q.ref=V),k.createElement(T,Q)}(R,O,M)}D.displayName=y;var R=nl.forwardRef(D);return R.attrs=v,R.componentStyle=A,R.displayName=y,R.shouldForwardProp=w,R.foldedComponentIds=a?Ss(s.foldedComponentIds,s.styledComponentId):"",R.styledComponentId=x,R.target=a?s.target:n,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=a?function(M){for(var P=[],z=1;z<arguments.length;z++)P[z-1]=arguments[z];for(var V=0,X=P;V<X.length;V++)S0(M,X[V],!0);return M}({},s.defaultProps,O):O}}),_g(R,function(){return".".concat(R.styledComponentId)}),u&&wS(R,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function Pb(n,t){for(var r=[n[0]],a=0,s=t.length;a<s;a+=1)r.push(t[a],n[a+1]);return r}var Bb=function(n){return Object.assign(n,{isCss:!0})};function pR(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ol(n)||Wu(n))return Bb(Ds(Pb(ch,Ld([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ds(a):Bb(Ds(Pb(a,t)))}function E0(n,t,r){if(r===void 0&&(r=sl),!t)throw xc(1,t);var a=function(s){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return n(t,r,pR.apply(void 0,Ld([s],u,!1)))};return a.attrs=function(s){return E0(n,t,Zn(Zn({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},a.withConfig=function(s){return E0(n,t,Zn(Zn({},r),s))},a}var DS=function(n){return E0(hR,n)},N=DS;gS.forEach(function(n){N[n]=DS(n)});const mR=N.div`
  width: 80%;
  height: 2px;
  margin: 10px auto 0;

  background: linear-gradient(
    90deg,
    transparent,
    ${({color:n})=>n==="gray"?"var(--primary-gray)":"var(--primary-color)"},
    transparent
  );
`,OS=({color:n="primary"})=>b.jsx(mR,{color:n}),wg=k.createContext({});function Sg(n){const t=k.useRef(null);return t.current===null&&(t.current=n()),t.current}const Tg=typeof window<"u",jS=Tg?k.useLayoutEffect:k.useEffect,fh=k.createContext(null),Eg=k.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class gR extends k.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const a=r.offsetParent,s=a instanceof HTMLElement&&a.offsetWidth||0,u=this.props.sizeRef.current;u.height=r.offsetHeight||0,u.width=r.offsetWidth||0,u.top=r.offsetTop,u.left=r.offsetLeft,u.right=s-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function yR({children:n,isPresent:t,anchorX:r}){const a=k.useId(),s=k.useRef(null),u=k.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=k.useContext(Eg);return k.useInsertionEffect(()=>{const{width:f,height:h,top:p,left:g,right:y}=u.current;if(t||!s.current||!f||!h)return;const x=r==="left"?`left: ${g}`:`right: ${y}`;s.current.dataset.motionPopId=a;const v=document.createElement("style");return c&&(v.nonce=c),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${x}px !important;
            top: ${p}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[t]),b.jsx(gR,{isPresent:t,childRef:s,sizeRef:u,children:k.cloneElement(n,{ref:s})})}const vR=({children:n,initial:t,isPresent:r,onExitComplete:a,custom:s,presenceAffectsLayout:u,mode:c,anchorX:f})=>{const h=Sg(xR),p=k.useId(),g=k.useCallback(x=>{h.set(x,!0);for(const v of h.values())if(!v)return;a&&a()},[h,a]),y=k.useMemo(()=>({id:p,initial:t,isPresent:r,custom:s,onExitComplete:g,register:x=>(h.set(x,!1),()=>h.delete(x))}),u?[Math.random(),g]:[r,g]);return k.useMemo(()=>{h.forEach((x,v)=>h.set(v,!1))},[r]),k.useEffect(()=>{!r&&!h.size&&a&&a()},[r]),c==="popLayout"&&(n=b.jsx(yR,{isPresent:r,anchorX:f,children:n})),b.jsx(fh.Provider,{value:y,children:n})};function xR(){return new Map}function zS(n=!0){const t=k.useContext(fh);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:a,register:s}=t,u=k.useId();k.useEffect(()=>{if(n)return s(u)},[n]);const c=k.useCallback(()=>n&&a&&a(u),[u,a,n]);return!r&&a?[!1,c]:[!0]}const Bf=n=>n.key||"";function Vb(n){const t=[];return k.Children.forEach(n,r=>{k.isValidElement(r)&&t.push(r)}),t}const Vd=({children:n,custom:t,initial:r=!0,onExitComplete:a,presenceAffectsLayout:s=!0,mode:u="sync",propagate:c=!1,anchorX:f="left"})=>{const[h,p]=zS(c),g=k.useMemo(()=>Vb(n),[n]),y=c&&!h?[]:g.map(Bf),x=k.useRef(!0),v=k.useRef(g),w=Sg(()=>new Map),[S,C]=k.useState(g),[A,D]=k.useState(g);jS(()=>{x.current=!1,v.current=g;for(let M=0;M<A.length;M++){const P=Bf(A[M]);y.includes(P)?w.delete(P):w.get(P)!==!0&&w.set(P,!1)}},[A,y.length,y.join("-")]);const R=[];if(g!==S){let M=[...g];for(let P=0;P<A.length;P++){const z=A[P],V=Bf(z);y.includes(V)||(M.splice(P,0,z),R.push(z))}return u==="wait"&&R.length&&(M=R),D(Vb(M)),C(g),null}const{forceRender:O}=k.useContext(wg);return b.jsx(b.Fragment,{children:A.map(M=>{const P=Bf(M),z=c&&!h?!1:g===A||y.includes(P),V=()=>{if(w.has(P))w.set(P,!0);else return;let X=!0;w.forEach(K=>{K||(X=!1)}),X&&(O==null||O(),D(v.current),c&&(p==null||p()),a&&a())};return b.jsx(vR,{isPresent:z,initial:!x.current||r?void 0:!1,custom:t,presenceAffectsLayout:s,mode:u,onExitComplete:z?void 0:V,anchorX:f,children:M},P)})})};function Ag(n,t){n.indexOf(t)===-1&&n.push(t)}function Cg(n,t){const r=n.indexOf(t);r>-1&&n.splice(r,1)}let kS=()=>{};const bR={useManualTiming:!1};function Rg(n){let t;return()=>(t===void 0&&(t=n()),t)}const Xi=n=>n,Ju=(n,t,r)=>{const a=t-n;return a===0?1:(r-n)/a};class Mg{constructor(){this.subscriptions=[]}add(t){return Ag(this.subscriptions,t),()=>Cg(this.subscriptions,t)}notify(t,r,a){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,r,a);else for(let u=0;u<s;u++){const c=this.subscriptions[u];c&&c(t,r,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const vr=n=>n*1e3,xr=n=>n/1e3;function LS(n,t){return t?n*(1e3/t):0}const _R=Rg(()=>window.ScrollTimeline!==void 0);class wR{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,r){for(let a=0;a<this.animations.length;a++)this.animations[a][t]=r}attachTimeline(t,r){const a=this.animations.map(s=>{if(_R()&&s.attachTimeline)return s.attachTimeline(t);if(typeof r=="function")return r(s)});return()=>{a.forEach((s,u)=>{s&&s(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let r=0;r<this.animations.length;r++)t=Math.max(t,this.animations[r].duration);return t}runAll(t){this.animations.forEach(r=>r[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class SR extends wR{then(t,r){return this.finished.finally(t).then(()=>{})}}const Ub={value:null},Dg=n=>Array.isArray(n)&&typeof n[0]=="number",TR={};function ER(n,t){const r=Rg(n);return()=>TR[t]??r()}const tc=ER(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),NS=(n,t,r=10)=>{let a="";const s=Math.max(Math.round(t/r),2);for(let u=0;u<s;u++)a+=n(u/(s-1))+", ";return`linear(${a.substring(0,a.length-2)})`},Eu=([n,t,r,a])=>`cubic-bezier(${n}, ${t}, ${r}, ${a})`,A0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Eu([0,.65,.55,1]),circOut:Eu([.55,0,1,.45]),backIn:Eu([.31,.01,.66,-.59]),backOut:Eu([.33,1.53,.69,.99])};function PS(n,t){if(n)return typeof n=="function"&&tc()?NS(n,t):Dg(n)?Eu(n):Array.isArray(n)?n.map(r=>PS(r,t)||A0.easeOut):A0[n]}function AR(n,t,r,{delay:a=0,duration:s=300,repeat:u=0,repeatType:c="loop",ease:f="easeInOut",times:h}={},p=void 0){const g={[t]:r};h&&(g.offset=h);const y=PS(f,s);return Array.isArray(y)&&(g.easing=y),n.animate(g,{delay:a,duration:s,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal",pseudoElement:p})}function Og(n){return typeof n=="function"&&"applyToOptions"in n}function jg(n,t){return(n==null?void 0:n[t])??(n==null?void 0:n.default)??n}const Ud=2e4;function zg(n){let t=0;const r=50;let a=n.next(t);for(;!a.done&&t<Ud;)t+=r,a=n.next(t);return t>=Ud?1/0:t}function CR(n,t=100,r){const a=r({...n,keyframes:[0,t]}),s=Math.min(zg(a),Ud);return{type:"keyframes",ease:u=>a.next(s*u).value/t,duration:xr(s)}}function BS(n){return!!(typeof n=="function"&&tc()||!n||typeof n=="string"&&(n in A0||tc())||Dg(n)||Array.isArray(n)&&n.every(BS))}function Hb(n,t){n.timeline=t,n.onfinish=null}const Vf=["read","resolveKeyframes","update","preRender","render","postRender"];function RR(n,t){let r=new Set,a=new Set,s=!1,u=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1},h=0;function p(y){c.has(y)&&(g.schedule(y),n()),h++,y(f)}const g={schedule:(y,x=!1,v=!1)=>{const S=v&&s?r:a;return x&&c.add(y),S.has(y)||S.add(y),y},cancel:y=>{a.delete(y),c.delete(y)},process:y=>{if(f=y,s){u=!0;return}s=!0,[r,a]=[a,r],r.forEach(p),t&&Ub.value&&Ub.value.frameloop[t].push(h),h=0,r.clear(),s=!1,u&&(u=!1,g.process(y))}};return g}const MR=40;function VS(n,t){let r=!1,a=!0;const s={delta:0,timestamp:0,isProcessing:!1},u=()=>r=!0,c=Vf.reduce((A,D)=>(A[D]=RR(u,t?D:void 0),A),{}),{read:f,resolveKeyframes:h,update:p,preRender:g,render:y,postRender:x}=c,v=()=>{const A=performance.now();r=!1,s.delta=a?1e3/60:Math.max(Math.min(A-s.timestamp,MR),1),s.timestamp=A,s.isProcessing=!0,f.process(s),h.process(s),p.process(s),g.process(s),y.process(s),x.process(s),s.isProcessing=!1,r&&t&&(a=!1,n(v))},w=()=>{r=!0,a=!0,s.isProcessing||n(v)};return{schedule:Vf.reduce((A,D)=>{const R=c[D];return A[D]=(O,M=!1,P=!1)=>(r||w(),R.schedule(O,M,P)),A},{}),cancel:A=>{for(let D=0;D<Vf.length;D++)c[Vf[D]].cancel(A)},state:s,steps:c}}const{schedule:he,cancel:Ga,state:hn,steps:Lm}=VS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xi,!0),{schedule:kg}=VS(queueMicrotask,!1);let _d;function DR(){_d=void 0}const br={now:()=>(_d===void 0&&br.set(hn.isProcessing||bR.useManualTiming?hn.timestamp:performance.now()),_d),set:n=>{_d=n,queueMicrotask(DR)}},ir={x:!1,y:!1};function US(){return ir.x||ir.y}function OR(n){return n==="x"||n==="y"?ir[n]?null:(ir[n]=!0,()=>{ir[n]=!1}):ir.x||ir.y?null:(ir.x=ir.y=!0,()=>{ir.x=ir.y=!1})}function jR(n,t,r){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const s=document.querySelectorAll(n);return s?Array.from(s):[]}return Array.from(n)}function HS(n,t){const r=jR(n),a=new AbortController,s={passive:!0,...t,signal:a.signal};return[r,s,()=>a.abort()]}function Yb(n){return!(n.pointerType==="touch"||US())}function zR(n,t,r={}){const[a,s,u]=HS(n,r),c=f=>{if(!Yb(f))return;const{target:h}=f,p=t(h,f);if(typeof p!="function"||!h)return;const g=y=>{Yb(y)&&(p(y),h.removeEventListener("pointerleave",g))};h.addEventListener("pointerleave",g,s)};return a.forEach(f=>{f.addEventListener("pointerenter",c,s)}),u}const YS=(n,t)=>t?n===t?!0:YS(n,t.parentElement):!1,Lg=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,kR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function LR(n){return kR.has(n.tagName)||n.tabIndex!==-1}const Au=new WeakSet;function Gb(n){return t=>{t.key==="Enter"&&n(t)}}function Nm(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const NR=(n,t)=>{const r=n.currentTarget;if(!r)return;const a=Gb(()=>{if(Au.has(r))return;Nm(r,"down");const s=Gb(()=>{Nm(r,"up")}),u=()=>Nm(r,"cancel");r.addEventListener("keyup",s,t),r.addEventListener("blur",u,t)});r.addEventListener("keydown",a,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",a),t)};function Xb(n){return Lg(n)&&!US()}function PR(n,t,r={}){const[a,s,u]=HS(n,r),c=f=>{const h=f.currentTarget;if(!Xb(f)||Au.has(h))return;Au.add(h);const p=t(h,f),g=(v,w)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),!(!Xb(v)||!Au.has(h))&&(Au.delete(h),typeof p=="function"&&p(v,{success:w}))},y=v=>{g(v,h===window||h===document||r.useGlobalTarget||YS(h,v.target))},x=v=>{g(v,!1)};window.addEventListener("pointerup",y,s),window.addEventListener("pointercancel",x,s)};return a.forEach(f=>{(r.useGlobalTarget?window:f).addEventListener("pointerdown",c,s),f instanceof HTMLElement&&(f.addEventListener("focus",p=>NR(p,s)),!LR(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),u}const qb=30,BR=n=>!isNaN(parseFloat(n));class VR{constructor(t,r={}){this.version="12.6.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,s=!0)=>{const u=br.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=r.owner}setCurrent(t){this.current=t,this.updatedAt=br.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=BR(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new Mg);const a=this.events[t].add(r);return t==="change"?()=>{a(),he.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,a){this.set(r),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,r=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=br.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>qb)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,qb);return LS(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ec(n,t){return new VR(n,t)}const GS=k.createContext({strict:!1}),Fb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ll={};for(const n in Fb)ll[n]={isEnabled:t=>Fb[n].some(r=>!!t[r])};function UR(n){for(const t in n)ll[t]={...ll[t],...n[t]}}const HR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hd(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||HR.has(n)}let XS=n=>!Hd(n);function YR(n){n&&(XS=t=>t.startsWith("on")?!Hd(t):n(t))}try{YR(require("@emotion/is-prop-valid").default)}catch{}function GR(n,t,r){const a={};for(const s in n)s==="values"&&typeof n.values=="object"||(XS(s)||r===!0&&Hd(s)||!t&&!Hd(s)||n.draggable&&s.startsWith("onDrag"))&&(a[s]=n[s]);return a}function XR(n){if(typeof Proxy>"u")return n;const t=new Map,r=(...a)=>n(...a);return new Proxy(r,{get:(a,s)=>s==="create"?n:(t.has(s)||t.set(s,n(s)),t.get(s))})}const dh=k.createContext({});function hh(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function nc(n){return typeof n=="string"||Array.isArray(n)}const Ng=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pg=["initial",...Ng];function ph(n){return hh(n.animate)||Pg.some(t=>nc(n[t]))}function qS(n){return!!(ph(n)||n.variants)}function qR(n,t){if(ph(n)){const{initial:r,animate:a}=n;return{initial:r===!1||nc(r)?r:void 0,animate:nc(a)?a:void 0}}return n.inherit!==!1?t:{}}function FR(n){const{initial:t,animate:r}=qR(n,k.useContext(dh));return k.useMemo(()=>({initial:t,animate:r}),[$b(t),$b(r)])}function $b(n){return Array.isArray(n)?n.join(" "):n}const $R=Symbol.for("motionComponentSymbol");function Ho(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function QR(n,t,r){return k.useCallback(a=>{a&&n.onMount&&n.onMount(a),t&&(a?t.mount(a):t.unmount()),r&&(typeof r=="function"?r(a):Ho(r)&&(r.current=a))},[t])}const Bg=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),KR="framerAppearId",FS="data-"+Bg(KR),$S=k.createContext({});function ZR(n,t,r,a,s){var S,C;const{visualElement:u}=k.useContext(dh),c=k.useContext(GS),f=k.useContext(fh),h=k.useContext(Eg).reducedMotion,p=k.useRef(null);a=a||c.renderer,!p.current&&a&&(p.current=a(n,{visualState:t,parent:u,props:r,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:h}));const g=p.current,y=k.useContext($S);g&&!g.projection&&s&&(g.type==="html"||g.type==="svg")&&IR(p.current,r,s,y);const x=k.useRef(!1);k.useInsertionEffect(()=>{g&&x.current&&g.update(r,f)});const v=r[FS],w=k.useRef(!!v&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,v))&&((C=window.MotionHasOptimisedAnimation)==null?void 0:C.call(window,v)));return jS(()=>{g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),kg.render(g.render),w.current&&g.animationState&&g.animationState.animateChanges())}),k.useEffect(()=>{g&&(!w.current&&g.animationState&&g.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)==null||A.call(window,v)}),w.current=!1))}),g}function IR(n,t,r,a){const{layoutId:s,layout:u,drag:c,dragConstraints:f,layoutScroll:h,layoutRoot:p}=t;n.projection=new r(n.latestValues,t["data-framer-portal-id"]?void 0:QS(n.parent)),n.projection.setOptions({layoutId:s,layout:u,alwaysMeasureLayout:!!c||f&&Ho(f),visualElement:n,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,layoutScroll:h,layoutRoot:p})}function QS(n){if(n)return n.options.allowProjection!==!1?n.projection:QS(n.parent)}function WR({preloadedFeatures:n,createVisualElement:t,useRender:r,useVisualState:a,Component:s}){n&&UR(n);function u(f,h){let p;const g={...k.useContext(Eg),...f,layoutId:JR(f)},{isStatic:y}=g,x=FR(f),v=a(f,y);if(!y&&Tg){tM();const w=eM(g);p=w.MeasureLayout,x.visualElement=ZR(s,v,g,t,w.ProjectionNode)}return b.jsxs(dh.Provider,{value:x,children:[p&&x.visualElement?b.jsx(p,{visualElement:x.visualElement,...g}):null,r(s,f,QR(v,x.visualElement,h),v,y,x.visualElement)]})}u.displayName=`motion.${typeof s=="string"?s:`create(${s.displayName??s.name??""})`}`;const c=k.forwardRef(u);return c[$R]=s,c}function JR({layoutId:n}){const t=k.useContext(wg).id;return t&&n!==void 0?t+"-"+n:n}function tM(n,t){k.useContext(GS).strict}function eM(n){const{drag:t,layout:r}=ll;if(!t&&!r)return{};const a={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const KS=n=>t=>typeof t=="string"&&t.startsWith(n),Vg=KS("--"),nM=KS("var(--"),Ug=n=>nM(n)?iM.test(n.split("/*")[0].trim()):!1,iM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ic={};function rM(n){for(const t in n)ic[t]=n[t],Vg(t)&&(ic[t].isCSSVariable=!0)}const yl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ys=new Set(yl);function ZS(n,{layout:t,layoutId:r}){return Ys.has(n)||n.startsWith("origin")||(t||r!==void 0)&&(!!ic[n]||n==="opacity")}const En=n=>!!(n&&n.getVelocity),IS=(n,t)=>t&&typeof n=="number"?t.transform(n):n,ia=(n,t,r)=>r>t?t:r<n?n:r,vl={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},rc={...vl,transform:n=>ia(0,1,n)},Uf={...vl,default:1},bc=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),za=bc("deg"),_r=bc("%"),_t=bc("px"),aM=bc("vh"),sM=bc("vw"),Qb={..._r,parse:n=>_r.parse(n)/100,transform:n=>_r.transform(n*100)},oM={borderWidth:_t,borderTopWidth:_t,borderRightWidth:_t,borderBottomWidth:_t,borderLeftWidth:_t,borderRadius:_t,radius:_t,borderTopLeftRadius:_t,borderTopRightRadius:_t,borderBottomRightRadius:_t,borderBottomLeftRadius:_t,width:_t,maxWidth:_t,height:_t,maxHeight:_t,top:_t,right:_t,bottom:_t,left:_t,padding:_t,paddingTop:_t,paddingRight:_t,paddingBottom:_t,paddingLeft:_t,margin:_t,marginTop:_t,marginRight:_t,marginBottom:_t,marginLeft:_t,backgroundPositionX:_t,backgroundPositionY:_t},lM={rotate:za,rotateX:za,rotateY:za,rotateZ:za,scale:Uf,scaleX:Uf,scaleY:Uf,scaleZ:Uf,skew:za,skewX:za,skewY:za,distance:_t,translateX:_t,translateY:_t,translateZ:_t,x:_t,y:_t,z:_t,perspective:_t,transformPerspective:_t,opacity:rc,originX:Qb,originY:Qb,originZ:_t},Kb={...vl,transform:Math.round},Hg={...oM,...lM,zIndex:Kb,size:_t,fillOpacity:rc,strokeOpacity:rc,numOctaves:Kb},uM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cM=yl.length;function fM(n,t,r){let a="",s=!0;for(let u=0;u<cM;u++){const c=yl[u],f=n[c];if(f===void 0)continue;let h=!0;if(typeof f=="number"?h=f===(c.startsWith("scale")?1:0):h=parseFloat(f)===0,!h||r){const p=IS(f,Hg[c]);if(!h){s=!1;const g=uM[c]||c;a+=`${g}(${p}) `}r&&(t[c]=p)}}return a=a.trim(),r?a=r(t,s?"":a):s&&(a="none"),a}function Yg(n,t,r){const{style:a,vars:s,transformOrigin:u}=n;let c=!1,f=!1;for(const h in t){const p=t[h];if(Ys.has(h)){c=!0;continue}else if(Vg(h)){s[h]=p;continue}else{const g=IS(p,Hg[h]);h.startsWith("origin")?(f=!0,u[h]=g):a[h]=g}}if(t.transform||(c||r?a.transform=fM(t,n.transform,r):a.transform&&(a.transform="none")),f){const{originX:h="50%",originY:p="50%",originZ:g=0}=u;a.transformOrigin=`${h} ${p} ${g}`}}const Gg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function WS(n,t,r){for(const a in t)!En(t[a])&&!ZS(a,r)&&(n[a]=t[a])}function dM({transformTemplate:n},t){return k.useMemo(()=>{const r=Gg();return Yg(r,t,n),Object.assign({},r.vars,r.style)},[t])}function hM(n,t){const r=n.style||{},a={};return WS(a,r,n),Object.assign(a,dM(n,t)),a}function pM(n,t){const r={},a=hM(n,t);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=a,r}const mM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xg(n){return typeof n!="string"||n.includes("-")?!1:!!(mM.indexOf(n)>-1||/[A-Z]/u.test(n))}const gM={offset:"stroke-dashoffset",array:"stroke-dasharray"},yM={offset:"strokeDashoffset",array:"strokeDasharray"};function vM(n,t,r=1,a=0,s=!0){n.pathLength=1;const u=s?gM:yM;n[u.offset]=_t.transform(-a);const c=_t.transform(t),f=_t.transform(r);n[u.array]=`${c} ${f}`}function Zb(n,t,r){return typeof n=="string"?n:_t.transform(t+r*n)}function xM(n,t,r){const a=Zb(t,n.x,n.width),s=Zb(r,n.y,n.height);return`${a} ${s}`}function qg(n,{attrX:t,attrY:r,attrScale:a,originX:s,originY:u,pathLength:c,pathSpacing:f=1,pathOffset:h=0,...p},g,y){if(Yg(n,p,y),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:v,dimensions:w}=n;x.transform&&(w&&(v.transform=x.transform),delete x.transform),w&&(s!==void 0||u!==void 0||v.transform)&&(v.transformOrigin=xM(w,s!==void 0?s:.5,u!==void 0?u:.5)),t!==void 0&&(x.x=t),r!==void 0&&(x.y=r),a!==void 0&&(x.scale=a),c!==void 0&&vM(x,c,f,h,!1)}const JS=()=>({...Gg(),attrs:{}}),Fg=n=>typeof n=="string"&&n.toLowerCase()==="svg";function bM(n,t,r,a){const s=k.useMemo(()=>{const u=JS();return qg(u,t,Fg(a),n.transformTemplate),{...u.attrs,style:{...u.style}}},[t]);if(n.style){const u={};WS(u,n.style,n),s.style={...u,...s.style}}return s}function _M(n=!1){return(r,a,s,{latestValues:u},c)=>{const h=(Xg(r)?bM:pM)(a,u,c,r),p=GR(a,typeof r=="string",n),g=r!==k.Fragment?{...p,...h,ref:s}:{},{children:y}=a,x=k.useMemo(()=>En(y)?y.get():y,[y]);return k.createElement(r,{...g,children:x})}}function Ib(n){const t=[{},{}];return n==null||n.values.forEach((r,a)=>{t[0][a]=r.get(),t[1][a]=r.getVelocity()}),t}function $g(n,t,r,a){if(typeof t=="function"){const[s,u]=Ib(a);t=t(r!==void 0?r:n.custom,s,u)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[s,u]=Ib(a);t=t(r!==void 0?r:n.custom,s,u)}return t}const C0=n=>Array.isArray(n),wM=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),SM=n=>C0(n)?n[n.length-1]||0:n;function wd(n){const t=En(n)?n.get():n;return wM(t)?t.toValue():t}function TM({scrapeMotionValuesFromProps:n,createRenderState:t,onUpdate:r},a,s,u){const c={latestValues:EM(a,s,u,n),renderState:t()};return r&&(c.onMount=f=>r({props:a,current:f,...c}),c.onUpdate=f=>r(f)),c}const t2=n=>(t,r)=>{const a=k.useContext(dh),s=k.useContext(fh),u=()=>TM(n,t,a,s);return r?u():Sg(u)};function EM(n,t,r,a){const s={},u=a(n,{});for(const x in u)s[x]=wd(u[x]);let{initial:c,animate:f}=n;const h=ph(n),p=qS(n);t&&p&&!h&&n.inherit!==!1&&(c===void 0&&(c=t.initial),f===void 0&&(f=t.animate));let g=r?r.initial===!1:!1;g=g||c===!1;const y=g?f:c;if(y&&typeof y!="boolean"&&!hh(y)){const x=Array.isArray(y)?y:[y];for(let v=0;v<x.length;v++){const w=$g(n,x[v]);if(w){const{transitionEnd:S,transition:C,...A}=w;for(const D in A){let R=A[D];if(Array.isArray(R)){const O=g?R.length-1:0;R=R[O]}R!==null&&(s[D]=R)}for(const D in S)s[D]=S[D]}}}return s}function Qg(n,t,r){var u;const{style:a}=n,s={};for(const c in a)(En(a[c])||t.style&&En(t.style[c])||ZS(c,n)||((u=r==null?void 0:r.getValue(c))==null?void 0:u.liveStyle)!==void 0)&&(s[c]=a[c]);return s}const AM={useVisualState:t2({scrapeMotionValuesFromProps:Qg,createRenderState:Gg})};function e2(n,t){try{t.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}function n2(n,{style:t,vars:r},a,s){Object.assign(n.style,t,s&&s.getProjectionStyles(a));for(const u in r)n.style.setProperty(u,r[u])}const i2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function r2(n,t,r,a){n2(n,t,void 0,a);for(const s in t.attrs)n.setAttribute(i2.has(s)?s:Bg(s),t.attrs[s])}function a2(n,t,r){const a=Qg(n,t,r);for(const s in n)if(En(n[s])||En(t[s])){const u=yl.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;a[u]=n[s]}return a}const Wb=["x","y","width","height","cx","cy","r"],CM={useVisualState:t2({scrapeMotionValuesFromProps:a2,createRenderState:JS,onUpdate:({props:n,prevProps:t,current:r,renderState:a,latestValues:s})=>{if(!r)return;let u=!!n.drag;if(!u){for(const f in s)if(Ys.has(f)){u=!0;break}}if(!u)return;let c=!t;if(t)for(let f=0;f<Wb.length;f++){const h=Wb[f];n[h]!==t[h]&&(c=!0)}c&&he.read(()=>{e2(r,a),he.render(()=>{qg(a,s,Fg(r.tagName),n.transformTemplate),r2(r,a)})})}})};function RM(n,t){return function(a,{forwardMotionProps:s}={forwardMotionProps:!1}){const c={...Xg(a)?CM:AM,preloadedFeatures:n,useRender:_M(s),createVisualElement:t,Component:a};return WR(c)}}function ac(n,t,r){const a=n.getProps();return $g(a,t,r!==void 0?r:a.custom,n)}const s2=new Set(["width","height","top","left","right","bottom",...yl]);function MM(n,t,r){n.hasValue(t)?n.getValue(t).set(r):n.addValue(t,ec(r))}function DM(n,t){const r=ac(n,t);let{transitionEnd:a={},transition:s={},...u}=r||{};u={...u,...a};for(const c in u){const f=SM(u[c]);MM(n,c,f)}}function OM(n){return!!(En(n)&&n.add)}function R0(n,t){const r=n.getValue("willChange");if(OM(r))return r.add(t)}function o2(n){return n.props[FS]}const l2=(n,t,r)=>(((1-3*r+3*t)*n+(3*r-6*t))*n+3*t)*n,jM=1e-7,zM=12;function kM(n,t,r,a,s){let u,c,f=0;do c=t+(r-t)/2,u=l2(c,a,s)-n,u>0?r=c:t=c;while(Math.abs(u)>jM&&++f<zM);return c}function _c(n,t,r,a){if(n===t&&r===a)return Xi;const s=u=>kM(u,0,1,n,r);return u=>u===0||u===1?u:l2(s(u),t,a)}const u2=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,c2=n=>t=>1-n(1-t),f2=_c(.33,1.53,.69,.99),Kg=c2(f2),d2=u2(Kg),h2=n=>(n*=2)<1?.5*Kg(n):.5*(2-Math.pow(2,-10*(n-1))),Zg=n=>1-Math.sin(Math.acos(n)),p2=c2(Zg),m2=u2(Zg),g2=n=>/^0[^.\s]+$/u.test(n);function LM(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||g2(n):!0}const Lu=n=>Math.round(n*1e5)/1e5,Ig=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function NM(n){return n==null}const PM=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wg=(n,t)=>r=>!!(typeof r=="string"&&PM.test(r)&&r.startsWith(n)||t&&!NM(r)&&Object.prototype.hasOwnProperty.call(r,t)),y2=(n,t,r)=>a=>{if(typeof a!="string")return a;const[s,u,c,f]=a.match(Ig);return{[n]:parseFloat(s),[t]:parseFloat(u),[r]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},BM=n=>ia(0,255,n),Pm={...vl,transform:n=>Math.round(BM(n))},Ts={test:Wg("rgb","red"),parse:y2("red","green","blue"),transform:({red:n,green:t,blue:r,alpha:a=1})=>"rgba("+Pm.transform(n)+", "+Pm.transform(t)+", "+Pm.transform(r)+", "+Lu(rc.transform(a))+")"};function VM(n){let t="",r="",a="",s="";return n.length>5?(t=n.substring(1,3),r=n.substring(3,5),a=n.substring(5,7),s=n.substring(7,9)):(t=n.substring(1,2),r=n.substring(2,3),a=n.substring(3,4),s=n.substring(4,5),t+=t,r+=r,a+=a,s+=s),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(a,16),alpha:s?parseInt(s,16)/255:1}}const M0={test:Wg("#"),parse:VM,transform:Ts.transform},Yo={test:Wg("hsl","hue"),parse:y2("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:r,alpha:a=1})=>"hsla("+Math.round(n)+", "+_r.transform(Lu(t))+", "+_r.transform(Lu(r))+", "+Lu(rc.transform(a))+")"},_n={test:n=>Ts.test(n)||M0.test(n)||Yo.test(n),parse:n=>Ts.test(n)?Ts.parse(n):Yo.test(n)?Yo.parse(n):M0.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ts.transform(n):Yo.transform(n)},UM=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function HM(n){var t,r;return isNaN(n)&&typeof n=="string"&&(((t=n.match(Ig))==null?void 0:t.length)||0)+(((r=n.match(UM))==null?void 0:r.length)||0)>0}const v2="number",x2="color",YM="var",GM="var(",Jb="${}",XM=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function sc(n){const t=n.toString(),r=[],a={color:[],number:[],var:[]},s=[];let u=0;const f=t.replace(XM,h=>(_n.test(h)?(a.color.push(u),s.push(x2),r.push(_n.parse(h))):h.startsWith(GM)?(a.var.push(u),s.push(YM),r.push(h)):(a.number.push(u),s.push(v2),r.push(parseFloat(h))),++u,Jb)).split(Jb);return{values:r,split:f,indexes:a,types:s}}function b2(n){return sc(n).values}function _2(n){const{split:t,types:r}=sc(n),a=t.length;return s=>{let u="";for(let c=0;c<a;c++)if(u+=t[c],s[c]!==void 0){const f=r[c];f===v2?u+=Lu(s[c]):f===x2?u+=_n.transform(s[c]):u+=s[c]}return u}}const qM=n=>typeof n=="number"?0:n;function FM(n){const t=b2(n);return _2(n)(t.map(qM))}const Xa={test:HM,parse:b2,createTransformer:_2,getAnimatableNone:FM},$M=new Set(["brightness","contrast","saturate","opacity"]);function QM(n){const[t,r]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[a]=r.match(Ig)||[];if(!a)return n;const s=r.replace(a,"");let u=$M.has(t)?1:0;return a!==r&&(u*=100),t+"("+u+s+")"}const KM=/\b([a-z-]*)\(.*?\)/gu,D0={...Xa,getAnimatableNone:n=>{const t=n.match(KM);return t?t.map(QM).join(" "):n}},ZM={...Hg,color:_n,backgroundColor:_n,outlineColor:_n,fill:_n,stroke:_n,borderColor:_n,borderTopColor:_n,borderRightColor:_n,borderBottomColor:_n,borderLeftColor:_n,filter:D0,WebkitFilter:D0},w2=n=>ZM[n];function S2(n,t){let r=w2(n);return r!==D0&&(r=Xa),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const IM=new Set(["auto","none","0"]);function WM(n,t,r){let a=0,s;for(;a<n.length&&!s;){const u=n[a];typeof u=="string"&&!IM.has(u)&&sc(u).values.length&&(s=n[a]),a++}if(s&&r)for(const u of t)n[u]=S2(r,s)}const Es=n=>n*180/Math.PI,O0=n=>{const t=Es(Math.atan2(n[1],n[0]));return j0(t)},JM={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:O0,rotateZ:O0,skewX:n=>Es(Math.atan(n[1])),skewY:n=>Es(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},j0=n=>(n=n%360,n<0&&(n+=360),n),t_=O0,e_=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),n_=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),t4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:e_,scaleY:n_,scale:n=>(e_(n)+n_(n))/2,rotateX:n=>j0(Es(Math.atan2(n[6],n[5]))),rotateY:n=>j0(Es(Math.atan2(-n[2],n[0]))),rotateZ:t_,rotate:t_,skewX:n=>Es(Math.atan(n[4])),skewY:n=>Es(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function i_(n){return n.includes("scale")?1:0}function z0(n,t){if(!n||n==="none")return i_(t);const r=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,s;if(r)a=t4,s=r;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=JM,s=f}if(!s)return i_(t);const u=a[t],c=s[1].split(",").map(n4);return typeof u=="function"?u(c):c[u]}const e4=(n,t)=>{const{transform:r="none"}=getComputedStyle(n);return z0(r,t)};function n4(n){return parseFloat(n.trim())}const r_=n=>n===vl||n===_t,i4=new Set(["x","y","z"]),r4=yl.filter(n=>!i4.has(n));function a4(n){const t=[];return r4.forEach(r=>{const a=n.getValue(r);a!==void 0&&(t.push([r,a.get()]),a.set(r.startsWith("scale")?1:0))}),t}const ul={width:({x:n},{paddingLeft:t="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(t)-parseFloat(r),height:({y:n},{paddingTop:t="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(t)-parseFloat(r),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:(n,{transform:t})=>z0(t,"x"),y:(n,{transform:t})=>z0(t,"y")};ul.translateX=ul.x;ul.translateY=ul.y;const Os=new Set;let k0=!1,L0=!1;function T2(){if(L0){const n=Array.from(Os).filter(a=>a.needsMeasurement),t=new Set(n.map(a=>a.element)),r=new Map;t.forEach(a=>{const s=a4(a);s.length&&(r.set(a,s),a.render())}),n.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const s=r.get(a);s&&s.forEach(([u,c])=>{var f;(f=a.getValue(u))==null||f.set(c)})}),n.forEach(a=>a.measureEndState()),n.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}L0=!1,k0=!1,Os.forEach(n=>n.complete()),Os.clear()}function E2(){Os.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(L0=!0)})}function s4(){E2(),T2()}class Jg{constructor(t,r,a,s,u,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=r,this.name=a,this.motionValue=s,this.element=u,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Os.add(this),k0||(k0=!0,he.read(E2),he.resolveKeyframes(T2))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:r,element:a,motionValue:s}=this;for(let u=0;u<t.length;u++)if(t[u]===null)if(u===0){const c=s==null?void 0:s.get(),f=t[t.length-1];if(c!==void 0)t[0]=c;else if(a&&r){const h=a.readValue(r,f);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=f),s&&c===void 0&&s.set(t[0])}else t[u]=t[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Os.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Os.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const A2=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),o4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function l4(n){const t=o4.exec(n);if(!t)return[,];const[,r,a,s]=t;return[`--${r??a}`,s]}function C2(n,t,r=1){const[a,s]=l4(n);if(!a)return;const u=window.getComputedStyle(t).getPropertyValue(a);if(u){const c=u.trim();return A2(c)?parseFloat(c):c}return Ug(s)?C2(s,t,r+1):s}const R2=n=>t=>t.test(n),u4={test:n=>n==="auto",parse:n=>n},M2=[vl,_t,_r,za,sM,aM,u4],a_=n=>M2.find(R2(n));class D2 extends Jg{constructor(t,r,a,s,u){super(t,r,a,s,u,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:r,name:a}=this;if(!r||!r.current)return;super.readKeyframes();for(let h=0;h<t.length;h++){let p=t[h];if(typeof p=="string"&&(p=p.trim(),Ug(p))){const g=C2(p,r.current);g!==void 0&&(t[h]=g),h===t.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!s2.has(a)||t.length!==2)return;const[s,u]=t,c=a_(s),f=a_(u);if(c!==f)if(r_(c)&&r_(f))for(let h=0;h<t.length;h++){const p=t[h];typeof p=="string"&&(t[h]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:r}=this,a=[];for(let s=0;s<t.length;s++)LM(t[s])&&a.push(s);a.length&&WM(t,a,r)}measureInitialState(){const{element:t,unresolvedKeyframes:r,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ul[a](t.measureViewportBox(),window.getComputedStyle(t.current)),r[0]=this.measuredOrigin;const s=r[r.length-1];s!==void 0&&t.getValue(a,s).jump(s,!1)}measureEndState(){var f;const{element:t,name:r,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const s=t.getValue(r);s&&s.jump(this.measuredOrigin,!1);const u=a.length-1,c=a[u];a[u]=ul[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([h,p])=>{t.getValue(h).set(p)}),this.resolveNoneKeyframes()}}const s_=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Xa.test(n)||n==="0")&&!n.startsWith("url("));function c4(n){const t=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==t)return!0}function f4(n,t,r,a){const s=n[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const u=n[n.length-1],c=s_(s,t),f=s_(u,t);return!c||!f?!1:c4(n)||(r==="spring"||Og(r))&&a}const d4=n=>n!==null;function mh(n,{repeat:t,repeatType:r="loop"},a){const s=n.filter(d4),u=t&&r!=="loop"&&t%2===1?0:s.length-1;return!u||a===void 0?s[u]:a}const h4=40;class O2{constructor({autoplay:t=!0,delay:r=0,type:a="keyframes",repeat:s=0,repeatDelay:u=0,repeatType:c="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=br.now(),this.options={autoplay:t,delay:r,type:a,repeat:s,repeatDelay:u,repeatType:c,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>h4?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&s4(),this._resolved}onKeyframesResolved(t,r){this.resolvedAt=br.now(),this.hasAttemptedResolve=!0;const{name:a,type:s,velocity:u,delay:c,onComplete:f,onUpdate:h,isGenerator:p}=this.options;if(!p&&!f4(t,a,s,u))if(c)this.options.duration=0;else{h&&h(mh(t,this.options,r)),f&&f(),this.resolveFinishedPromise();return}const g=this.initPlayback(t,r);g!==!1&&(this._resolved={keyframes:t,finalKeyframe:r,...g},this.onPostResolved())}onPostResolved(){}then(t,r){return this.currentFinishedPromise.then(t,r)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Ee=(n,t,r)=>n+(t-n)*r;function Bm(n,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(t-n)*6*r:r<1/2?t:r<2/3?n+(t-n)*(2/3-r)*6:n}function p4({hue:n,saturation:t,lightness:r,alpha:a}){n/=360,t/=100,r/=100;let s=0,u=0,c=0;if(!t)s=u=c=r;else{const f=r<.5?r*(1+t):r+t-r*t,h=2*r-f;s=Bm(h,f,n+1/3),u=Bm(h,f,n),c=Bm(h,f,n-1/3)}return{red:Math.round(s*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:a}}function Yd(n,t){return r=>r>0?t:n}const Vm=(n,t,r)=>{const a=n*n,s=r*(t*t-a)+a;return s<0?0:Math.sqrt(s)},m4=[M0,Ts,Yo],g4=n=>m4.find(t=>t.test(n));function o_(n){const t=g4(n);if(!t)return!1;let r=t.parse(n);return t===Yo&&(r=p4(r)),r}const l_=(n,t)=>{const r=o_(n),a=o_(t);if(!r||!a)return Yd(n,t);const s={...r};return u=>(s.red=Vm(r.red,a.red,u),s.green=Vm(r.green,a.green,u),s.blue=Vm(r.blue,a.blue,u),s.alpha=Ee(r.alpha,a.alpha,u),Ts.transform(s))},y4=(n,t)=>r=>t(n(r)),wc=(...n)=>n.reduce(y4),N0=new Set(["none","hidden"]);function v4(n,t){return N0.has(n)?r=>r<=0?n:t:r=>r>=1?t:n}function x4(n,t){return r=>Ee(n,t,r)}function ty(n){return typeof n=="number"?x4:typeof n=="string"?Ug(n)?Yd:_n.test(n)?l_:w4:Array.isArray(n)?j2:typeof n=="object"?_n.test(n)?l_:b4:Yd}function j2(n,t){const r=[...n],a=r.length,s=n.map((u,c)=>ty(u)(u,t[c]));return u=>{for(let c=0;c<a;c++)r[c]=s[c](u);return r}}function b4(n,t){const r={...n,...t},a={};for(const s in r)n[s]!==void 0&&t[s]!==void 0&&(a[s]=ty(n[s])(n[s],t[s]));return s=>{for(const u in a)r[u]=a[u](s);return r}}function _4(n,t){const r=[],a={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const u=t.types[s],c=n.indexes[u][a[u]],f=n.values[c]??0;r[s]=f,a[u]++}return r}const w4=(n,t)=>{const r=Xa.createTransformer(t),a=sc(n),s=sc(t);return a.indexes.var.length===s.indexes.var.length&&a.indexes.color.length===s.indexes.color.length&&a.indexes.number.length>=s.indexes.number.length?N0.has(n)&&!s.values.length||N0.has(t)&&!a.values.length?v4(n,t):wc(j2(_4(a,s),s.values),r):Yd(n,t)};function z2(n,t,r){return typeof n=="number"&&typeof t=="number"&&typeof r=="number"?Ee(n,t,r):ty(n)(n,t)}const S4=5;function k2(n,t,r){const a=Math.max(t-S4,0);return LS(r-n(a),t-a)}const je={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},u_=.001;function T4({duration:n=je.duration,bounce:t=je.bounce,velocity:r=je.velocity,mass:a=je.mass}){let s,u,c=1-t;c=ia(je.minDamping,je.maxDamping,c),n=ia(je.minDuration,je.maxDuration,xr(n)),c<1?(s=p=>{const g=p*c,y=g*n,x=g-r,v=P0(p,c),w=Math.exp(-y);return u_-x/v*w},u=p=>{const y=p*c*n,x=y*r+r,v=Math.pow(c,2)*Math.pow(p,2)*n,w=Math.exp(-y),S=P0(Math.pow(p,2),c);return(-s(p)+u_>0?-1:1)*((x-v)*w)/S}):(s=p=>{const g=Math.exp(-p*n),y=(p-r)*n+1;return-.001+g*y},u=p=>{const g=Math.exp(-p*n),y=(r-p)*(n*n);return g*y});const f=5/n,h=A4(s,u,f);if(n=vr(n),isNaN(h))return{stiffness:je.stiffness,damping:je.damping,duration:n};{const p=Math.pow(h,2)*a;return{stiffness:p,damping:c*2*Math.sqrt(a*p),duration:n}}}const E4=12;function A4(n,t,r){let a=r;for(let s=1;s<E4;s++)a=a-n(a)/t(a);return a}function P0(n,t){return n*Math.sqrt(1-t*t)}const C4=["duration","bounce"],R4=["stiffness","damping","mass"];function c_(n,t){return t.some(r=>n[r]!==void 0)}function M4(n){let t={velocity:je.velocity,stiffness:je.stiffness,damping:je.damping,mass:je.mass,isResolvedFromDuration:!1,...n};if(!c_(n,R4)&&c_(n,C4))if(n.visualDuration){const r=n.visualDuration,a=2*Math.PI/(r*1.2),s=a*a,u=2*ia(.05,1,1-(n.bounce||0))*Math.sqrt(s);t={...t,mass:je.mass,stiffness:s,damping:u}}else{const r=T4(n);t={...t,...r,mass:je.mass},t.isResolvedFromDuration=!0}return t}function Gd(n=je.visualDuration,t=je.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:a,restDelta:s}=r;const u=r.keyframes[0],c=r.keyframes[r.keyframes.length-1],f={done:!1,value:u},{stiffness:h,damping:p,mass:g,duration:y,velocity:x,isResolvedFromDuration:v}=M4({...r,velocity:-xr(r.velocity||0)}),w=x||0,S=p/(2*Math.sqrt(h*g)),C=c-u,A=xr(Math.sqrt(h/g)),D=Math.abs(C)<5;a||(a=D?je.restSpeed.granular:je.restSpeed.default),s||(s=D?je.restDelta.granular:je.restDelta.default);let R;if(S<1){const M=P0(A,S);R=P=>{const z=Math.exp(-S*A*P);return c-z*((w+S*A*C)/M*Math.sin(M*P)+C*Math.cos(M*P))}}else if(S===1)R=M=>c-Math.exp(-A*M)*(C+(w+A*C)*M);else{const M=A*Math.sqrt(S*S-1);R=P=>{const z=Math.exp(-S*A*P),V=Math.min(M*P,300);return c-z*((w+S*A*C)*Math.sinh(V)+M*C*Math.cosh(V))/M}}const O={calculatedDuration:v&&y||null,next:M=>{const P=R(M);if(v)f.done=M>=y;else{let z=0;S<1&&(z=M===0?vr(w):k2(R,M,P));const V=Math.abs(z)<=a,X=Math.abs(c-P)<=s;f.done=V&&X}return f.value=f.done?c:P,f},toString:()=>{const M=Math.min(zg(O),Ud),P=NS(z=>O.next(M*z).value,M,30);return M+"ms "+P},toTransition:()=>{}};return O}Gd.applyToOptions=n=>{const t=CR(n,100,Gd);return n.ease=tc()?t.ease:"easeOut",n.duration=vr(t.duration),n.type="keyframes",n};function f_({keyframes:n,velocity:t=0,power:r=.8,timeConstant:a=325,bounceDamping:s=10,bounceStiffness:u=500,modifyTarget:c,min:f,max:h,restDelta:p=.5,restSpeed:g}){const y=n[0],x={done:!1,value:y},v=V=>f!==void 0&&V<f||h!==void 0&&V>h,w=V=>f===void 0?h:h===void 0||Math.abs(f-V)<Math.abs(h-V)?f:h;let S=r*t;const C=y+S,A=c===void 0?C:c(C);A!==C&&(S=A-y);const D=V=>-S*Math.exp(-V/a),R=V=>A+D(V),O=V=>{const X=D(V),K=R(V);x.done=Math.abs(X)<=p,x.value=x.done?A:K};let M,P;const z=V=>{v(x.value)&&(M=V,P=Gd({keyframes:[x.value,w(x.value)],velocity:k2(R,V,x.value),damping:s,stiffness:u,restDelta:p,restSpeed:g}))};return z(0),{calculatedDuration:null,next:V=>{let X=!1;return!P&&M===void 0&&(X=!0,O(V),z(V)),M!==void 0&&V>=M?P.next(V-M):(!X&&O(V),x)}}}const D4=_c(.42,0,1,1),O4=_c(0,0,.58,1),L2=_c(.42,0,.58,1),j4=n=>Array.isArray(n)&&typeof n[0]!="number",z4={linear:Xi,easeIn:D4,easeInOut:L2,easeOut:O4,circIn:Zg,circInOut:m2,circOut:p2,backIn:Kg,backInOut:d2,backOut:f2,anticipate:h2},d_=n=>{if(Dg(n)){kS(n.length===4);const[t,r,a,s]=n;return _c(t,r,a,s)}else if(typeof n=="string")return z4[n];return n};function k4(n,t,r){const a=[],s=r||z2,u=n.length-1;for(let c=0;c<u;c++){let f=s(n[c],n[c+1]);if(t){const h=Array.isArray(t)?t[c]||Xi:t;f=wc(h,f)}a.push(f)}return a}function L4(n,t,{clamp:r=!0,ease:a,mixer:s}={}){const u=n.length;if(kS(u===t.length),u===1)return()=>t[0];if(u===2&&t[0]===t[1])return()=>t[1];const c=n[0]===n[1];n[0]>n[u-1]&&(n=[...n].reverse(),t=[...t].reverse());const f=k4(t,a,s),h=f.length,p=g=>{if(c&&g<n[0])return t[0];let y=0;if(h>1)for(;y<n.length-2&&!(g<n[y+1]);y++);const x=Ju(n[y],n[y+1],g);return f[y](x)};return r?g=>p(ia(n[0],n[u-1],g)):p}function N4(n,t){const r=n[n.length-1];for(let a=1;a<=t;a++){const s=Ju(0,t,a);n.push(Ee(r,1,s))}}function P4(n){const t=[0];return N4(t,n.length-1),t}function B4(n,t){return n.map(r=>r*t)}function V4(n,t){return n.map(()=>t||L2).splice(0,n.length-1)}function Xd({duration:n=300,keyframes:t,times:r,ease:a="easeInOut"}){const s=j4(a)?a.map(d_):d_(a),u={done:!1,value:t[0]},c=B4(r&&r.length===t.length?r:P4(t),n),f=L4(c,t,{ease:Array.isArray(s)?s:V4(t,s)});return{calculatedDuration:n,next:h=>(u.value=f(h),u.done=h>=n,u)}}const U4=n=>{const t=({timestamp:r})=>n(r);return{start:()=>he.update(t,!0),stop:()=>Ga(t),now:()=>hn.isProcessing?hn.timestamp:br.now()}},H4={decay:f_,inertia:f_,tween:Xd,keyframes:Xd,spring:Gd},Y4=n=>n/100;class ey extends O2{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:r,motionValue:a,element:s,keyframes:u}=this.options,c=(s==null?void 0:s.KeyframeResolver)||Jg,f=(h,p)=>this.onKeyframesResolved(h,p);this.resolver=new c(u,f,r,a,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:r="keyframes",repeat:a=0,repeatDelay:s=0,repeatType:u,velocity:c=0}=this.options,f=Og(r)?r:H4[r]||Xd;let h,p;f!==Xd&&typeof t[0]!="number"&&(h=wc(Y4,z2(t[0],t[1])),t=[0,100]);const g=f({...this.options,keyframes:t});u==="mirror"&&(p=f({...this.options,keyframes:[...t].reverse(),velocity:-c})),g.calculatedDuration===null&&(g.calculatedDuration=zg(g));const{calculatedDuration:y}=g,x=y+s,v=x*(a+1)-s;return{generator:g,mirroredGenerator:p,mapPercentToKeyframes:h,calculatedDuration:y,resolvedDuration:x,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,r=!1){const{resolved:a}=this;if(!a){const{keyframes:V}=this.options;return{done:!0,value:V[V.length-1]}}const{finalKeyframe:s,generator:u,mirroredGenerator:c,mapPercentToKeyframes:f,keyframes:h,calculatedDuration:p,totalDuration:g,resolvedDuration:y}=a;if(this.startTime===null)return u.next(0);const{delay:x,repeat:v,repeatType:w,repeatDelay:S,onUpdate:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-g/this.speed,this.startTime)),r?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const A=this.currentTime-x*(this.speed>=0?1:-1),D=this.speed>=0?A<0:A>g;this.currentTime=Math.max(A,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let R=this.currentTime,O=u;if(v){const V=Math.min(this.currentTime,g)/y;let X=Math.floor(V),K=V%1;!K&&V>=1&&(K=1),K===1&&X--,X=Math.min(X,v+1),!!(X%2)&&(w==="reverse"?(K=1-K,S&&(K-=S/y)):w==="mirror"&&(O=c)),R=ia(0,1,K)*y}const M=D?{done:!1,value:h[0]}:O.next(R);f&&(M.value=f(M.value));let{done:P}=M;!D&&p!==null&&(P=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return z&&s!==void 0&&(M.value=mh(h,this.options,s)),C&&C(M.value),z&&this.finish(),M}get duration(){const{resolved:t}=this;return t?xr(t.calculatedDuration):0}get time(){return xr(this.currentTime)}set time(t){t=vr(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const r=this.playbackSpeed!==t;this.playbackSpeed=t,r&&(this.time=xr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=U4,onPlay:r,startTime:a}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),r&&r();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=this.currentTime??0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}get finished(){return this.currentFinishedPromise}}const G4=new Set(["opacity","clipPath","filter","transform"]),X4=Rg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),qd=10,q4=2e4;function F4(n){return Og(n.type)||n.type==="spring"||!BS(n.ease)}function $4(n,t){const r=new ey({...t,keyframes:n,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:n[0]};const s=[];let u=0;for(;!a.done&&u<q4;)a=r.sample(u),s.push(a.value),u+=qd;return{times:void 0,keyframes:s,duration:u-qd,ease:"linear"}}const N2={anticipate:h2,backInOut:d2,circInOut:m2};function Q4(n){return n in N2}class h_ extends O2{constructor(t){super(t);const{name:r,motionValue:a,element:s,keyframes:u}=this.options;this.resolver=new D2(u,(c,f)=>this.onKeyframesResolved(c,f),r,a,s),this.resolver.scheduleResolve()}initPlayback(t,r){let{duration:a=300,times:s,ease:u,type:c,motionValue:f,name:h,startTime:p}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof u=="string"&&tc()&&Q4(u)&&(u=N2[u]),F4(this.options)){const{onComplete:y,onUpdate:x,motionValue:v,element:w,...S}=this.options,C=$4(t,S);t=C.keyframes,t.length===1&&(t[1]=t[0]),a=C.duration,s=C.times,u=C.ease,c="keyframes"}const g=AR(f.owner.current,h,t,{...this.options,duration:a,times:s,ease:u});return g.startTime=p??this.calcStartTime(),this.pendingTimeline?(Hb(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:y}=this.options;f.set(mh(t,this.options,r)),y&&y(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:a,times:s,type:c,ease:u,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:r}=t;return xr(r)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:r}=t;return xr(r.currentTime||0)}set time(t){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.currentTime=vr(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:r}=t;return r.playbackRate}get finished(){return this.resolved.animation.finished}set speed(t){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:r}=t;return r.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:r}=t;return r.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:r}=this;if(!r)return Xi;const{animation:a}=r;Hb(a,t)}return Xi}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:r,keyframes:a,duration:s,type:u,ease:c,times:f}=t;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:g,onComplete:y,element:x,...v}=this.options,w=new ey({...v,keyframes:a,duration:s,type:u,ease:c,times:f,isGenerator:!0}),S=vr(this.time);p.setWithVelocity(w.sample(S-qd).value,w.sample(S).value,qd)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:r,name:a,repeatDelay:s,repeatType:u,damping:c,type:f}=t;if(!r||!r.owner||!(r.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=r.owner.getProps();return X4()&&a&&G4.has(a)&&(a!=="transform"||!p)&&!h&&!s&&u!=="mirror"&&c!==0&&f!=="inertia"}}const K4={type:"spring",stiffness:500,damping:25,restSpeed:10},Z4=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),I4={type:"keyframes",duration:.8},W4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},J4=(n,{keyframes:t})=>t.length>2?I4:Ys.has(n)?n.startsWith("scale")?Z4(t[1]):K4:W4;function t3({when:n,delay:t,delayChildren:r,staggerChildren:a,staggerDirection:s,repeat:u,repeatType:c,repeatDelay:f,from:h,elapsed:p,...g}){return!!Object.keys(g).length}const ny=(n,t,r,a={},s,u)=>c=>{const f=jg(a,n)||{},h=f.delay||a.delay||0;let{elapsed:p=0}=a;p=p-vr(h);let g={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-p,onUpdate:x=>{t.set(x),f.onUpdate&&f.onUpdate(x)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:n,motionValue:t,element:u?void 0:s};t3(f)||(g={...g,...J4(n,g)}),g.duration&&(g.duration=vr(g.duration)),g.repeatDelay&&(g.repeatDelay=vr(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(y=!0)),g.allowFlatten=!f.type&&!f.ease,y&&!u&&t.get()!==void 0){const x=mh(g.keyframes,f);if(x!==void 0)return he.update(()=>{g.onUpdate(x),g.onComplete()}),new SR([])}return!u&&h_.supports(g)?new h_(g):new ey(g)};function e3({protectedKeys:n,needsAnimating:t},r){const a=n.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,a}function P2(n,t,{delay:r=0,transitionOverride:a,type:s}={}){let{transition:u=n.getDefaultTransition(),transitionEnd:c,...f}=t;a&&(u=a);const h=[],p=s&&n.animationState&&n.animationState.getState()[s];for(const g in f){const y=n.getValue(g,n.latestValues[g]??null),x=f[g];if(x===void 0||p&&e3(p,g))continue;const v={delay:r,...jg(u||{},g)};let w=!1;if(window.MotionHandoffAnimation){const C=o2(n);if(C){const A=window.MotionHandoffAnimation(C,g,he);A!==null&&(v.startTime=A,w=!0)}}R0(n,g),y.start(ny(g,y,x,n.shouldReduceMotion&&s2.has(g)?{type:!1}:v,n,w));const S=y.animation;S&&h.push(S)}return c&&Promise.all(h).then(()=>{he.update(()=>{c&&DM(n,c)})}),h}function B0(n,t,r={}){var h;const a=ac(n,t,r.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:s=n.getDefaultTransition()||{}}=a||{};r.transitionOverride&&(s=r.transitionOverride);const u=a?()=>Promise.all(P2(n,a,r)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=s;return n3(n,t,g+p,y,x,r)}:()=>Promise.resolve(),{when:f}=s;if(f){const[p,g]=f==="beforeChildren"?[u,c]:[c,u];return p().then(()=>g())}else return Promise.all([u(),c(r.delay)])}function n3(n,t,r=0,a=0,s=1,u){const c=[],f=(n.variantChildren.size-1)*a,h=s===1?(p=0)=>p*a:(p=0)=>f-p*a;return Array.from(n.variantChildren).sort(i3).forEach((p,g)=>{p.notify("AnimationStart",t),c.push(B0(p,t,{...u,delay:r+h(g)}).then(()=>p.notify("AnimationComplete",t)))}),Promise.all(c)}function i3(n,t){return n.sortNodePosition(t)}function r3(n,t,r={}){n.notify("AnimationStart",t);let a;if(Array.isArray(t)){const s=t.map(u=>B0(n,u,r));a=Promise.all(s)}else if(typeof t=="string")a=B0(n,t,r);else{const s=typeof t=="function"?ac(n,t,r.custom):t;a=Promise.all(P2(n,s,r))}return a.then(()=>{n.notify("AnimationComplete",t)})}function B2(n,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==n.length)return!1;for(let a=0;a<r;a++)if(t[a]!==n[a])return!1;return!0}const a3=Pg.length;function V2(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?V2(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const t={};for(let r=0;r<a3;r++){const a=Pg[r],s=n.props[a];(nc(s)||s===!1)&&(t[a]=s)}return t}const s3=[...Ng].reverse(),o3=Ng.length;function l3(n){return t=>Promise.all(t.map(({animation:r,options:a})=>r3(n,r,a)))}function u3(n){let t=l3(n),r=p_(),a=!0;const s=h=>(p,g)=>{var x;const y=ac(n,g,h==="exit"?(x=n.presenceContext)==null?void 0:x.custom:void 0);if(y){const{transition:v,transitionEnd:w,...S}=y;p={...p,...S,...w}}return p};function u(h){t=h(n)}function c(h){const{props:p}=n,g=V2(n.parent)||{},y=[],x=new Set;let v={},w=1/0;for(let C=0;C<o3;C++){const A=s3[C],D=r[A],R=p[A]!==void 0?p[A]:g[A],O=nc(R),M=A===h?D.isActive:null;M===!1&&(w=C);let P=R===g[A]&&R!==p[A]&&O;if(P&&a&&n.manuallyAnimateOnMount&&(P=!1),D.protectedKeys={...v},!D.isActive&&M===null||!R&&!D.prevProp||hh(R)||typeof R=="boolean")continue;const z=c3(D.prevProp,R);let V=z||A===h&&D.isActive&&!P&&O||C>w&&O,X=!1;const K=Array.isArray(R)?R:[R];let ot=K.reduce(s(A),{});M===!1&&(ot={});const{prevResolvedValues:tt={}}=D,wt={...tt,...ot},pt=$=>{V=!0,x.has($)&&(X=!0,x.delete($)),D.needsAnimating[$]=!0;const J=n.getValue($);J&&(J.liveStyle=!1)};for(const $ in wt){const J=ot[$],at=tt[$];if(v.hasOwnProperty($))continue;let T=!1;C0(J)&&C0(at)?T=!B2(J,at):T=J!==at,T?J!=null?pt($):x.add($):J!==void 0&&x.has($)?pt($):D.protectedKeys[$]=!0}D.prevProp=R,D.prevResolvedValues=ot,D.isActive&&(v={...v,...ot}),a&&n.blockInitialAnimation&&(V=!1),V&&(!(P&&z)||X)&&y.push(...K.map($=>({animation:$,options:{type:A}})))}if(x.size){const C={};if(typeof p.initial!="boolean"){const A=ac(n,Array.isArray(p.initial)?p.initial[0]:p.initial);A&&A.transition&&(C.transition=A.transition)}x.forEach(A=>{const D=n.getBaseTarget(A),R=n.getValue(A);R&&(R.liveStyle=!0),C[A]=D??null}),y.push({animation:C})}let S=!!y.length;return a&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(S=!1),a=!1,S?t(y):Promise.resolve()}function f(h,p){var y;if(r[h].isActive===p)return Promise.resolve();(y=n.variantChildren)==null||y.forEach(x=>{var v;return(v=x.animationState)==null?void 0:v.setActive(h,p)}),r[h].isActive=p;const g=c(h);for(const x in r)r[x].protectedKeys={};return g}return{animateChanges:c,setActive:f,setAnimateFunction:u,getState:()=>r,reset:()=>{r=p_(),a=!0}}}function c3(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!B2(t,n):!1}function ms(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function p_(){return{animate:ms(!0),whileInView:ms(),whileHover:ms(),whileTap:ms(),whileDrag:ms(),whileFocus:ms(),exit:ms()}}class Ka{constructor(t){this.isMounted=!1,this.node=t}update(){}}class f3 extends Ka{constructor(t){super(t),t.animationState||(t.animationState=u3(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();hh(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let d3=0;class h3 extends Ka{constructor(){super(...arguments),this.id=d3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const s=this.node.animationState.setActive("exit",!t);r&&!t&&s.then(()=>{r(this.id)})}mount(){const{register:t,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const p3={animation:{Feature:f3},exit:{Feature:h3}};function oc(n,t,r,a={passive:!0}){return n.addEventListener(t,r,a),()=>n.removeEventListener(t,r)}function Sc(n){return{point:{x:n.pageX,y:n.pageY}}}const m3=n=>t=>Lg(t)&&n(t,Sc(t));function Nu(n,t,r,a){return oc(n,t,m3(r),a)}function U2({top:n,left:t,right:r,bottom:a}){return{x:{min:t,max:r},y:{min:n,max:a}}}function g3({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function y3(n,t){if(!t)return n;const r=t({x:n.left,y:n.top}),a=t({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:a.y,right:a.x}}const H2=1e-4,v3=1-H2,x3=1+H2,Y2=.01,b3=0-Y2,_3=0+Y2;function Vn(n){return n.max-n.min}function w3(n,t,r){return Math.abs(n-t)<=r}function m_(n,t,r,a=.5){n.origin=a,n.originPoint=Ee(t.min,t.max,n.origin),n.scale=Vn(r)/Vn(t),n.translate=Ee(r.min,r.max,n.origin)-n.originPoint,(n.scale>=v3&&n.scale<=x3||isNaN(n.scale))&&(n.scale=1),(n.translate>=b3&&n.translate<=_3||isNaN(n.translate))&&(n.translate=0)}function Pu(n,t,r,a){m_(n.x,t.x,r.x,a?a.originX:void 0),m_(n.y,t.y,r.y,a?a.originY:void 0)}function g_(n,t,r){n.min=r.min+t.min,n.max=n.min+Vn(t)}function S3(n,t,r){g_(n.x,t.x,r.x),g_(n.y,t.y,r.y)}function y_(n,t,r){n.min=t.min-r.min,n.max=n.min+Vn(t)}function Bu(n,t,r){y_(n.x,t.x,r.x),y_(n.y,t.y,r.y)}const v_=()=>({translate:0,scale:1,origin:0,originPoint:0}),Go=()=>({x:v_(),y:v_()}),x_=()=>({min:0,max:0}),Pe=()=>({x:x_(),y:x_()});function Vi(n){return[n("x"),n("y")]}function Um(n){return n===void 0||n===1}function V0({scale:n,scaleX:t,scaleY:r}){return!Um(n)||!Um(t)||!Um(r)}function vs(n){return V0(n)||G2(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function G2(n){return b_(n.x)||b_(n.y)}function b_(n){return n&&n!=="0%"}function Fd(n,t,r){const a=n-r,s=t*a;return r+s}function __(n,t,r,a,s){return s!==void 0&&(n=Fd(n,s,a)),Fd(n,r,a)+t}function U0(n,t=0,r=1,a,s){n.min=__(n.min,t,r,a,s),n.max=__(n.max,t,r,a,s)}function X2(n,{x:t,y:r}){U0(n.x,t.translate,t.scale,t.originPoint),U0(n.y,r.translate,r.scale,r.originPoint)}const w_=.999999999999,S_=1.0000000000001;function T3(n,t,r,a=!1){const s=r.length;if(!s)return;t.x=t.y=1;let u,c;for(let f=0;f<s;f++){u=r[f],c=u.projectionDelta;const{visualElement:h}=u.options;h&&h.props.style&&h.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&qo(n,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(t.x*=c.x.scale,t.y*=c.y.scale,X2(n,c)),a&&vs(u.latestValues)&&qo(n,u.latestValues))}t.x<S_&&t.x>w_&&(t.x=1),t.y<S_&&t.y>w_&&(t.y=1)}function Xo(n,t){n.min=n.min+t,n.max=n.max+t}function T_(n,t,r,a,s=.5){const u=Ee(n.min,n.max,s);U0(n,t,r,u,a)}function qo(n,t){T_(n.x,t.x,t.scaleX,t.scale,t.originX),T_(n.y,t.y,t.scaleY,t.scale,t.originY)}function q2(n,t){return U2(y3(n.getBoundingClientRect(),t))}function E3(n,t,r){const a=q2(n,r),{scroll:s}=t;return s&&(Xo(a.x,s.offset.x),Xo(a.y,s.offset.y)),a}const F2=({current:n})=>n?n.ownerDocument.defaultView:null,E_=(n,t)=>Math.abs(n-t);function A3(n,t){const r=E_(n.x,t.x),a=E_(n.y,t.y);return Math.sqrt(r**2+a**2)}class $2{constructor(t,r,{transformPagePoint:a,contextWindow:s,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Ym(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,v=A3(y.offset,{x:0,y:0})>=3;if(!x&&!v)return;const{point:w}=y,{timestamp:S}=hn;this.history.push({...w,timestamp:S});const{onStart:C,onMove:A}=this.handlers;x||(C&&C(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,y)},this.handlePointerMove=(y,x)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Hm(x,this.transformPagePoint),he.update(this.updatePoint,!0)},this.handlePointerUp=(y,x)=>{this.end();const{onEnd:v,onSessionEnd:w,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Ym(y.type==="pointercancel"?this.lastMoveEventInfo:Hm(x,this.transformPagePoint),this.history);this.startEvent&&v&&v(y,C),w&&w(y,C)},!Lg(t))return;this.dragSnapToOrigin=u,this.handlers=r,this.transformPagePoint=a,this.contextWindow=s||window;const c=Sc(t),f=Hm(c,this.transformPagePoint),{point:h}=f,{timestamp:p}=hn;this.history=[{...h,timestamp:p}];const{onSessionStart:g}=r;g&&g(t,Ym(f,this.history)),this.removeListeners=wc(Nu(this.contextWindow,"pointermove",this.handlePointerMove),Nu(this.contextWindow,"pointerup",this.handlePointerUp),Nu(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ga(this.updatePoint)}}function Hm(n,t){return t?{point:t(n.point)}:n}function A_(n,t){return{x:n.x-t.x,y:n.y-t.y}}function Ym({point:n},t){return{point:n,delta:A_(n,Q2(t)),offset:A_(n,C3(t)),velocity:R3(t,.1)}}function C3(n){return n[0]}function Q2(n){return n[n.length-1]}function R3(n,t){if(n.length<2)return{x:0,y:0};let r=n.length-1,a=null;const s=Q2(n);for(;r>=0&&(a=n[r],!(s.timestamp-a.timestamp>vr(t)));)r--;if(!a)return{x:0,y:0};const u=xr(s.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const c={x:(s.x-a.x)/u,y:(s.y-a.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function M3(n,{min:t,max:r},a){return t!==void 0&&n<t?n=a?Ee(t,n,a.min):Math.max(n,t):r!==void 0&&n>r&&(n=a?Ee(r,n,a.max):Math.min(n,r)),n}function C_(n,t,r){return{min:t!==void 0?n.min+t:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function D3(n,{top:t,left:r,bottom:a,right:s}){return{x:C_(n.x,r,s),y:C_(n.y,t,a)}}function R_(n,t){let r=t.min-n.min,a=t.max-n.max;return t.max-t.min<n.max-n.min&&([r,a]=[a,r]),{min:r,max:a}}function O3(n,t){return{x:R_(n.x,t.x),y:R_(n.y,t.y)}}function j3(n,t){let r=.5;const a=Vn(n),s=Vn(t);return s>a?r=Ju(t.min,t.max-a,n.min):a>s&&(r=Ju(n.min,n.max-s,t.min)),ia(0,1,r)}function z3(n,t){const r={};return t.min!==void 0&&(r.min=t.min-n.min),t.max!==void 0&&(r.max=t.max-n.min),r}const H0=.35;function k3(n=H0){return n===!1?n=0:n===!0&&(n=H0),{x:M_(n,"left","right"),y:M_(n,"top","bottom")}}function M_(n,t,r){return{min:D_(n,t),max:D_(n,r)}}function D_(n,t){return typeof n=="number"?n:n[t]||0}const L3=new WeakMap;class N3{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Pe(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const s=g=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Sc(g).point)},u=(g,y)=>{const{drag:x,dragPropagation:v,onDragStart:w}=this.getProps();if(x&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=OR(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Vi(C=>{let A=this.getAxisMotionValue(C).get()||0;if(_r.test(A)){const{projection:D}=this.visualElement;if(D&&D.layout){const R=D.layout.layoutBox[C];R&&(A=Vn(R)*(parseFloat(A)/100))}}this.originPoint[C]=A}),w&&he.postRender(()=>w(g,y)),R0(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},c=(g,y)=>{const{dragPropagation:x,dragDirectionLock:v,onDirectionLock:w,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:C}=y;if(v&&this.currentDirection===null){this.currentDirection=P3(C),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",y.point,C),this.updateAxis("y",y.point,C),this.visualElement.render(),S&&S(g,y)},f=(g,y)=>this.stop(g,y),h=()=>Vi(g=>{var y;return this.getAnimationState(g)==="paused"&&((y=this.getAxisMotionValue(g).animation)==null?void 0:y.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new $2(t,{onSessionStart:s,onStart:u,onMove:c,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:F2(this.visualElement)})}stop(t,r){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:s}=r;this.startAnimation(s);const{onDragEnd:u}=this.getProps();u&&he.postRender(()=>u(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,a){const{drag:s}=this.getProps();if(!a||!Hf(t,s,this.currentDirection))return;const u=this.getAxisMotionValue(t);let c=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(c=M3(c,this.constraints[t],this.elastic[t])),u.set(c)}resolveConstraints(){var u;const{dragConstraints:t,dragElastic:r}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,s=this.constraints;t&&Ho(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=D3(a.layoutBox,t):this.constraints=!1,this.elastic=k3(r),s!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Vi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=z3(a.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Ho(t))return!1;const a=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const u=E3(a,s.root,this.visualElement.getTransformPagePoint());let c=O3(s.layout.layoutBox,u);if(r){const f=r(g3(c));this.hasMutatedConstraints=!!f,f&&(c=U2(f))}return c}startAnimation(t){const{drag:r,dragMomentum:a,dragElastic:s,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),h=this.constraints||{},p=Vi(g=>{if(!Hf(g,r,this.currentDirection))return;let y=h&&h[g]||{};c&&(y={min:0,max:0});const x=s?200:1e6,v=s?40:1e7,w={type:"inertia",velocity:a?t[g]:0,bounceStiffness:x,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(g,w)});return Promise.all(p).then(f)}startAxisValueAnimation(t,r){const a=this.getAxisMotionValue(t);return R0(this.visualElement,t),a.start(ny(t,a,0,r,this.visualElement,!1))}stopAnimation(){Vi(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Vi(t=>{var r;return(r=this.getAxisMotionValue(t).animation)==null?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)==null?void 0:r.state}getAxisMotionValue(t){const r=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),s=a[r];return s||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){Vi(r=>{const{drag:a}=this.getProps();if(!Hf(r,a,this.currentDirection))return;const{projection:s}=this.visualElement,u=this.getAxisMotionValue(r);if(s&&s.layout){const{min:c,max:f}=s.layout.layoutBox[r];u.set(t[r]-Ee(c,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:a}=this.visualElement;if(!Ho(r)||!a||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Vi(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const h=f.get();s[c]=j3({min:h,max:h},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Vi(c=>{if(!Hf(c,t,null))return;const f=this.getAxisMotionValue(c),{min:h,max:p}=this.constraints[c];f.set(Ee(h,p,s[c]))})}addListeners(){if(!this.visualElement.current)return;L3.set(this.visualElement,this);const t=this.visualElement.current,r=Nu(t,"pointerdown",h=>{const{drag:p,dragListener:g=!0}=this.getProps();p&&g&&this.start(h)}),a=()=>{const{dragConstraints:h}=this.getProps();Ho(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,u=s.addEventListener("measure",a);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),he.read(a);const c=oc(window,"resize",()=>this.scalePositionWithinConstraints()),f=s.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Vi(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=h[g].translate,y.set(y.get()+h[g].translate))}),this.visualElement.render())});return()=>{c(),r(),u(),f&&f()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:a=!1,dragPropagation:s=!1,dragConstraints:u=!1,dragElastic:c=H0,dragMomentum:f=!0}=t;return{...t,drag:r,dragDirectionLock:a,dragPropagation:s,dragConstraints:u,dragElastic:c,dragMomentum:f}}}function Hf(n,t,r){return(t===!0||t===n)&&(r===null||r===n)}function P3(n,t=10){let r=null;return Math.abs(n.y)>t?r="y":Math.abs(n.x)>t&&(r="x"),r}class B3 extends Ka{constructor(t){super(t),this.removeGroupControls=Xi,this.removeListeners=Xi,this.controls=new N3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xi}unmount(){this.removeGroupControls(),this.removeListeners()}}const O_=n=>(t,r)=>{n&&he.postRender(()=>n(t,r))};class V3 extends Ka{constructor(){super(...arguments),this.removePointerDownListener=Xi}onPointerDown(t){this.session=new $2(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:F2(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:a,onPanEnd:s}=this.node.getProps();return{onSessionStart:O_(t),onStart:O_(r),onMove:a,onEnd:(u,c)=>{delete this.session,s&&he.postRender(()=>s(u,c))}}}mount(){this.removePointerDownListener=Nu(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Sd={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function j_(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const yu={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(_t.test(n))n=parseFloat(n);else return n;const r=j_(n,t.target.x),a=j_(n,t.target.y);return`${r}% ${a}%`}},U3={correct:(n,{treeScale:t,projectionDelta:r})=>{const a=n,s=Xa.parse(n);if(s.length>5)return a;const u=Xa.createTransformer(n),c=typeof s[0]!="number"?1:0,f=r.x.scale*t.x,h=r.y.scale*t.y;s[0+c]/=f,s[1+c]/=h;const p=Ee(f,h,.5);return typeof s[2+c]=="number"&&(s[2+c]/=p),typeof s[3+c]=="number"&&(s[3+c]/=p),u(s)}};class H3 extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:a,layoutId:s}=this.props,{projection:u}=t;rM(Y3),u&&(r.group&&r.group.add(u),a&&a.register&&s&&a.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),Sd.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:a,drag:s,isPresent:u}=this.props,c=a.projection;return c&&(c.isPresent=u,s||t.layoutDependency!==r||r===void 0||t.isPresent!==u?c.willUpdate():this.safeToRemove(),t.isPresent!==u&&(u?c.promote():c.relegate()||he.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),kg.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:a}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(s),a&&a.deregister&&a.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function K2(n){const[t,r]=zS(),a=k.useContext(wg);return b.jsx(H3,{...n,layoutGroup:a,switchLayoutGroup:k.useContext($S),isPresent:t,safeToRemove:r})}const Y3={borderRadius:{...yu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yu,borderTopRightRadius:yu,borderBottomLeftRadius:yu,borderBottomRightRadius:yu,boxShadow:U3};function G3(n,t,r){const a=En(n)?n:ec(n);return a.start(ny("",a,t,r)),a.animation}function X3(n){return n instanceof SVGElement&&n.tagName!=="svg"}const q3=(n,t)=>n.depth-t.depth;class F3{constructor(){this.children=[],this.isDirty=!1}add(t){Ag(this.children,t),this.isDirty=!0}remove(t){Cg(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(q3),this.isDirty=!1,this.children.forEach(t)}}function $3(n,t){const r=br.now(),a=({timestamp:s})=>{const u=s-r;u>=t&&(Ga(a),n(u-t))};return he.read(a,!0),()=>Ga(a)}const Z2=["TopLeft","TopRight","BottomLeft","BottomRight"],Q3=Z2.length,z_=n=>typeof n=="string"?parseFloat(n):n,k_=n=>typeof n=="number"||_t.test(n);function K3(n,t,r,a,s,u){s?(n.opacity=Ee(0,r.opacity!==void 0?r.opacity:1,Z3(a)),n.opacityExit=Ee(t.opacity!==void 0?t.opacity:1,0,I3(a))):u&&(n.opacity=Ee(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,a));for(let c=0;c<Q3;c++){const f=`border${Z2[c]}Radius`;let h=L_(t,f),p=L_(r,f);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||k_(h)===k_(p)?(n[f]=Math.max(Ee(z_(h),z_(p),a),0),(_r.test(p)||_r.test(h))&&(n[f]+="%")):n[f]=p}(t.rotate||r.rotate)&&(n.rotate=Ee(t.rotate||0,r.rotate||0,a))}function L_(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const Z3=I2(0,.5,p2),I3=I2(.5,.95,Xi);function I2(n,t,r){return a=>a<n?0:a>t?1:r(Ju(n,t,a))}function N_(n,t){n.min=t.min,n.max=t.max}function Bi(n,t){N_(n.x,t.x),N_(n.y,t.y)}function P_(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}function B_(n,t,r,a,s){return n-=t,n=Fd(n,1/r,a),s!==void 0&&(n=Fd(n,1/s,a)),n}function W3(n,t=0,r=1,a=.5,s,u=n,c=n){if(_r.test(t)&&(t=parseFloat(t),t=Ee(c.min,c.max,t/100)-c.min),typeof t!="number")return;let f=Ee(u.min,u.max,a);n===u&&(f-=t),n.min=B_(n.min,t,r,f,s),n.max=B_(n.max,t,r,f,s)}function V_(n,t,[r,a,s],u,c){W3(n,t[r],t[a],t[s],t.scale,u,c)}const J3=["x","scaleX","originX"],tD=["y","scaleY","originY"];function U_(n,t,r,a){V_(n.x,t,J3,r?r.x:void 0,a?a.x:void 0),V_(n.y,t,tD,r?r.y:void 0,a?a.y:void 0)}function H_(n){return n.translate===0&&n.scale===1}function W2(n){return H_(n.x)&&H_(n.y)}function Y_(n,t){return n.min===t.min&&n.max===t.max}function eD(n,t){return Y_(n.x,t.x)&&Y_(n.y,t.y)}function G_(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function J2(n,t){return G_(n.x,t.x)&&G_(n.y,t.y)}function X_(n){return Vn(n.x)/Vn(n.y)}function q_(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}class nD{constructor(){this.members=[]}add(t){Ag(this.members,t),t.scheduleRender()}remove(t){if(Cg(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(s=>t===s);if(r===0)return!1;let a;for(let s=r;s>=0;s--){const u=this.members[s];if(u.isPresent!==!1){a=u;break}}return a?(this.promote(a),!0):!1}promote(t,r){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,r&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:a}=t;r.onExitComplete&&r.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function iD(n,t,r){let a="";const s=n.x.translate/t.x,u=n.y.translate/t.y,c=(r==null?void 0:r.z)||0;if((s||u||c)&&(a=`translate3d(${s}px, ${u}px, ${c}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),r){const{transformPerspective:p,rotate:g,rotateX:y,rotateY:x,skewX:v,skewY:w}=r;p&&(a=`perspective(${p}px) ${a}`),g&&(a+=`rotate(${g}deg) `),y&&(a+=`rotateX(${y}deg) `),x&&(a+=`rotateY(${x}deg) `),v&&(a+=`skewX(${v}deg) `),w&&(a+=`skewY(${w}deg) `)}const f=n.x.scale*t.x,h=n.y.scale*t.y;return(f!==1||h!==1)&&(a+=`scale(${f}, ${h})`),a||"none"}const Gm=["","X","Y","Z"],rD={visibility:"hidden"},F_=1e3;let aD=0;function Xm(n,t,r,a){const{latestValues:s}=t;s[n]&&(r[n]=s[n],t.setStaticValue(n,0),a&&(a[n]=0))}function tT(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const r=o2(t);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:s,layoutId:u}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",he,!(s||u))}const{parent:a}=n;a&&!a.hasCheckedOptimisedAppear&&tT(a)}function eT({attachResizeListener:n,defaultParent:t,measureScroll:r,checkIsScrollRoot:a,resetTransform:s}){return class{constructor(c={},f=t==null?void 0:t()){this.id=aD++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(lD),this.nodes.forEach(hD),this.nodes.forEach(pD),this.nodes.forEach(uD)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new F3)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Mg),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const h=this.eventHandlers.get(c);h&&h.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=X3(c),this.instance=c;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(p||h)&&(this.isLayoutDirty=!0),n){let y;const x=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=$3(x,250),Sd.hasAnimatedSinceResize&&(Sd.hasAnimatedSinceResize=!1,this.nodes.forEach(Q_))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:v,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||xD,{onLayoutAnimationStart:C,onLayoutAnimationComplete:A}=g.getProps(),D=!this.targetLayout||!J2(this.targetLayout,w),R=!x&&v;if(this.options.layoutRoot||this.resumeFrom||R||x&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,R);const O={...jg(S,"layout"),onPlay:C,onComplete:A};(g.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O)}else x||Q_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ga(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mD),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&tT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:f,layout:h}=this.options;if(f===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach($_);return}this.isUpdating||this.nodes.forEach(fD),this.isUpdating=!1,this.nodes.forEach(dD),this.nodes.forEach(sD),this.nodes.forEach(oD),this.clearAllSnapshots();const f=br.now();hn.delta=ia(0,1e3/60,f-hn.timestamp),hn.timestamp=f,hn.isProcessing=!0,Lm.update.process(hn),Lm.preRender.process(hn),Lm.render.process(hn),hn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,kg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cD),this.sharedNodes.forEach(gD)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,he.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){he.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vn(this.snapshot.measuredBox.x)&&!Vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Pe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f){const h=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!s)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!W2(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,g=p!==this.prevTransformTemplateValue;c&&(f||vs(this.latestValues)||g)&&(s(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let h=this.removeElementScroll(f);return c&&(h=this.removeTransform(h)),bD(h),{animationId:this.root.animationId,measuredBox:f,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:c}=this.options;if(!c)return Pe();const f=c.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(_D))){const{scroll:g}=this.root;g&&(Xo(f.x,g.offset.x),Xo(f.y,g.offset.y))}return f}removeElementScroll(c){var h;const f=Pe();if(Bi(f,c),(h=this.scroll)!=null&&h.wasRoot)return f;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Bi(f,c),Xo(f.x,y.offset.x),Xo(f.y,y.offset.y))}return f}applyTransform(c,f=!1){const h=Pe();Bi(h,c);for(let p=0;p<this.path.length;p++){const g=this.path[p];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&qo(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),vs(g.latestValues)&&qo(h,g.latestValues)}return vs(this.latestValues)&&qo(h,this.latestValues),h}removeTransform(c){const f=Pe();Bi(f,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!p.instance||!vs(p.latestValues))continue;V0(p.latestValues)&&p.updateSnapshot();const g=Pe(),y=p.measurePageBox();Bi(g,y),U_(f,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,g)}return vs(this.latestValues)&&U_(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==hn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var x;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=hn.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pe(),this.relativeTargetOrigin=Pe(),Bu(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Bi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Pe(),this.targetWithTransforms=Pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),S3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Bi(this.target,this.layout.layoutBox),X2(this.target,this.targetDelta)):Bi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pe(),this.relativeTargetOrigin=Pe(),Bu(this.relativeTargetOrigin,this.target,v.target),Bi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||V0(this.parent.latestValues)||G2(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var w;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===hn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;Bi(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;T3(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Pe());const{target:v}=c;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(P_(this.prevProjectionDelta.x,this.projectionDelta.x),P_(this.prevProjectionDelta.y,this.projectionDelta.y)),Pu(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!q_(this.projectionDelta.x,this.prevProjectionDelta.x)||!q_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Go(),this.projectionDelta=Go(),this.projectionDeltaWithTransform=Go()}setAnimationOrigin(c,f=!1){const h=this.snapshot,p=h?h.latestValues:{},g={...this.latestValues},y=Go();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const x=Pe(),v=h?h.source:void 0,w=this.layout?this.layout.source:void 0,S=v!==w,C=this.getStack(),A=!C||C.members.length<=1,D=!!(S&&!A&&this.options.crossfade===!0&&!this.path.some(vD));this.animationProgress=0;let R;this.mixTargetDelta=O=>{const M=O/1e3;K_(y.x,c.x,M),K_(y.y,c.y,M),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bu(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),yD(this.relativeTarget,this.relativeTargetOrigin,x,M),R&&eD(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=Pe()),Bi(R,this.relativeTarget)),S&&(this.animationValues=g,K3(g,p,this.latestValues,M,D,A)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ga(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=he.update(()=>{Sd.hasAnimatedSinceResize=!0,this.currentAnimation=G3(0,F_,{...c,onUpdate:f=>{this.mixTargetDelta(f),c.onUpdate&&c.onUpdate(f)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(F_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:h,layout:p,latestValues:g}=c;if(!(!f||!h||!p)){if(this!==c&&this.layout&&p&&nT(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||Pe();const y=Vn(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+y;const x=Vn(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+x}Bi(f,h),qo(f,g),Pu(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new nD),this.sharedNodes.get(c).add(f);const p=f.options.initialPromotionConfig;f.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var f;const{layoutId:c}=this.options;return c?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:c}=this.options;return c?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(f=!0),!f)return;const p={};h.z&&Xm("z",c,p,this.animationValues);for(let g=0;g<Gm.length;g++)Xm(`rotate${Gm[g]}`,c,p,this.animationValues),Xm(`skew${Gm[g]}`,c,p,this.animationValues);c.render();for(const g in p)c.setStaticValue(g,p[g]),this.animationValues&&(this.animationValues[g]=p[g]);c.scheduleRender()}getProjectionStyles(c){if(!this.instance||this.isSVG)return;if(!this.isVisible)return rD;const f={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=wd(c==null?void 0:c.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none",f;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=wd(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!vs(this.latestValues)&&(v.transform=h?h({},""):"none",this.hasProjected=!1),v}const g=p.animationValues||p.latestValues;this.applyTransformsToTarget(),f.transform=iD(this.projectionDeltaWithTransform,this.treeScale,g),h&&(f.transform=h(g,f.transform));const{x:y,y:x}=this.projectionDelta;f.transformOrigin=`${y.origin*100}% ${x.origin*100}% 0`,p.animationValues?f.opacity=p===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:f.opacity=p===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const v in ic){if(g[v]===void 0)continue;const{correct:w,applyTo:S,isCSSVariable:C}=ic[v],A=f.transform==="none"?g[v]:w(g[v],p);if(S){const D=S.length;for(let R=0;R<D;R++)f[S[R]]=A}else C?this.options.visualElement.renderState.vars[v]=A:f[v]=A}return this.options.layoutId&&(f.pointerEvents=p===this?wd(c==null?void 0:c.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var f;return(f=c.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach($_),this.root.sharedNodes.clear()}}}function sD(n){n.updateLayout()}function oD(n){var r;const t=((r=n.resumeFrom)==null?void 0:r.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:s}=n.layout,{animationType:u}=n.options,c=t.source!==n.layout.source;u==="size"?Vi(y=>{const x=c?t.measuredBox[y]:t.layoutBox[y],v=Vn(x);x.min=a[y].min,x.max=x.min+v}):nT(u,t.layoutBox,a)&&Vi(y=>{const x=c?t.measuredBox[y]:t.layoutBox[y],v=Vn(a[y]);x.max=x.min+v,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+v)});const f=Go();Pu(f,a,t.layoutBox);const h=Go();c?Pu(h,n.applyTransform(s,!0),t.measuredBox):Pu(h,a,t.layoutBox);const p=!W2(f);let g=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:v}=y;if(x&&v){const w=Pe();Bu(w,t.layoutBox,x.layoutBox);const S=Pe();Bu(S,a,v.layoutBox),J2(w,S)||(g=!0),y.options.layoutRoot&&(n.relativeTarget=S,n.relativeTargetOrigin=w,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:h,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function lD(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function uD(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function cD(n){n.clearSnapshot()}function $_(n){n.clearMeasurements()}function fD(n){n.isLayoutDirty=!1}function dD(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function Q_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function hD(n){n.resolveTargetDelta()}function pD(n){n.calcProjection()}function mD(n){n.resetSkewAndRotation()}function gD(n){n.removeLeadSnapshot()}function K_(n,t,r){n.translate=Ee(t.translate,0,r),n.scale=Ee(t.scale,1,r),n.origin=t.origin,n.originPoint=t.originPoint}function Z_(n,t,r,a){n.min=Ee(t.min,r.min,a),n.max=Ee(t.max,r.max,a)}function yD(n,t,r,a){Z_(n.x,t.x,r.x,a),Z_(n.y,t.y,r.y,a)}function vD(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const xD={duration:.45,ease:[.4,0,.1,1]},I_=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),W_=I_("applewebkit/")&&!I_("chrome/")?Math.round:Xi;function J_(n){n.min=W_(n.min),n.max=W_(n.max)}function bD(n){J_(n.x),J_(n.y)}function nT(n,t,r){return n==="position"||n==="preserve-aspect"&&!w3(X_(t),X_(r),.2)}function _D(n){var t;return n!==n.root&&((t=n.scroll)==null?void 0:t.wasRoot)}const wD=eT({attachResizeListener:(n,t)=>oc(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),qm={current:void 0},iT=eT({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!qm.current){const n=new wD({});n.mount(window),n.setOptions({layoutScroll:!0}),qm.current=n}return qm.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),SD={pan:{Feature:V3},drag:{Feature:B3,ProjectionNode:iT,MeasureLayout:K2}};function tw(n,t,r){const{props:a}=n;n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",r==="Start");const s="onHover"+r,u=a[s];u&&he.postRender(()=>u(t,Sc(t)))}class TD extends Ka{mount(){const{current:t}=this.node;t&&(this.unmount=zR(t,(r,a)=>(tw(this.node,a,"Start"),s=>tw(this.node,s,"End"))))}unmount(){}}class ED extends Ka{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wc(oc(this.node.current,"focus",()=>this.onFocus()),oc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ew(n,t,r){const{props:a}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&a.whileTap&&n.animationState.setActive("whileTap",r==="Start");const s="onTap"+(r==="End"?"":r),u=a[s];u&&he.postRender(()=>u(t,Sc(t)))}class AD extends Ka{mount(){const{current:t}=this.node;t&&(this.unmount=PR(t,(r,a)=>(ew(this.node,a,"Start"),(s,{success:u})=>ew(this.node,s,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Y0=new WeakMap,Fm=new WeakMap,CD=n=>{const t=Y0.get(n.target);t&&t(n)},RD=n=>{n.forEach(CD)};function MD({root:n,...t}){const r=n||document;Fm.has(r)||Fm.set(r,{});const a=Fm.get(r),s=JSON.stringify(t);return a[s]||(a[s]=new IntersectionObserver(RD,{root:n,...t})),a[s]}function DD(n,t,r){const a=MD(t);return Y0.set(n,r),a.observe(n),()=>{Y0.delete(n),a.unobserve(n)}}const OD={some:0,all:1};class jD extends Ka{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:a,amount:s="some",once:u}=t,c={root:r?r.current:void 0,rootMargin:a,threshold:typeof s=="number"?s:OD[s]},f=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,u&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=p?g:y;x&&x(h)};return DD(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(zD(t,r))&&this.startObserver()}unmount(){}}function zD({viewport:n={}},{viewport:t={}}={}){return r=>n[r]!==t[r]}const kD={inView:{Feature:jD},tap:{Feature:AD},focus:{Feature:ED},hover:{Feature:TD}},LD={layout:{ProjectionNode:iT,MeasureLayout:K2}},G0={current:null},rT={current:!1};function ND(){if(rT.current=!0,!!Tg)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>G0.current=n.matches;n.addListener(t),t()}else G0.current=!1}const PD=[...M2,_n,Xa],BD=n=>PD.find(R2(n)),VD=new WeakMap;function UD(n,t,r){for(const a in t){const s=t[a],u=r[a];if(En(s))n.addValue(a,s);else if(En(u))n.addValue(a,ec(s,{owner:n}));else if(u!==s)if(n.hasValue(a)){const c=n.getValue(a);c.liveStyle===!0?c.jump(s):c.hasAnimated||c.set(s)}else{const c=n.getStaticValue(a);n.addValue(a,ec(c!==void 0?c:s,{owner:n}))}}for(const a in r)t[a]===void 0&&n.removeValue(a);return t}const nw=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class HD{scrapeMotionValuesFromProps(t,r,a){return{}}constructor({parent:t,props:r,presenceContext:a,reducedMotionConfig:s,blockInitialAnimation:u,visualState:c},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Jg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=br.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,he.render(this.render,!1,!0))};const{latestValues:h,renderState:p,onUpdate:g}=c;this.onUpdate=g,this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=p,this.parent=t,this.props=r,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=f,this.blockInitialAnimation=!!u,this.isControllingVariants=ph(r),this.isVariantNode=qS(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const v in x){const w=x[v];h[v]!==void 0&&En(w)&&w.set(h[v],!1)}}mount(t){this.current=t,VD.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,a)=>this.bindToMotionValue(a,r)),rT.current||ND(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:G0.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Ga(this.notifyUpdate),Ga(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(t,r){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=Ys.has(t);a&&this.onBindTransform&&this.onBindTransform();const s=r.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&he.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),u=r.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,r)),this.valueSubscriptions.set(t,()=>{s(),u(),c&&c(),r.owner&&r.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ll){const r=ll[t];if(!r)continue;const{isEnabled:a,Feature:s}=r;if(!this.features[t]&&s&&a(this.props)&&(this.features[t]=new s(this)),this.features[t]){const u=this.features[t];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Pe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let a=0;a<nw.length;a++){const s=nw[a];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const u="on"+s,c=t[u];c&&(this.propEventSubscriptions[s]=this.on(s,c))}this.prevMotionValues=UD(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){const a=this.values.get(t);r!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,r),this.values.set(t,r),this.latestValues[t]=r.get())}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&r!==void 0&&(a=ec(r===null?void 0:r,{owner:this}),this.addValue(t,a)),a}readValue(t,r){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(A2(a)||g2(a))?a=parseFloat(a):!BD(a)&&Xa.test(r)&&(a=S2(t,r)),this.setBaseTarget(t,En(a)?a.get():a)),En(a)?a.get():a}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var u;const{initial:r}=this.props;let a;if(typeof r=="string"||typeof r=="object"){const c=$g(this.props,r,(u=this.presenceContext)==null?void 0:u.custom);c&&(a=c[t])}if(r&&a!==void 0)return a;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!En(s)?s:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new Mg),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class aT extends HD{constructor(){super(...arguments),this.KeyframeResolver=D2}sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:a}){delete r[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;En(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function YD(n){return window.getComputedStyle(n)}class GD extends aT{constructor(){super(...arguments),this.type="html",this.renderInstance=n2}readValueFromInstance(t,r){if(Ys.has(r))return e4(t,r);{const a=YD(t),s=(Vg(r)?a.getPropertyValue(r):a[r])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:r}){return q2(t,r)}build(t,r,a){Yg(t,r,a.transformTemplate)}scrapeMotionValuesFromProps(t,r,a){return Qg(t,r,a)}}class XD extends aT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Pe,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&e2(this.current,this.renderState)}}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(Ys.has(r)){const a=w2(r);return a&&a.default||0}return r=i2.has(r)?r:Bg(r),t.getAttribute(r)}scrapeMotionValuesFromProps(t,r,a){return a2(t,r,a)}onBindTransform(){this.current&&!this.renderState.dimensions&&he.postRender(this.updateDimensions)}build(t,r,a){qg(t,r,this.isSVGTag,a.transformTemplate)}renderInstance(t,r,a,s){r2(t,r,a,s)}mount(t){this.isSVGTag=Fg(t.tagName),super.mount(t)}}const qD=(n,t)=>Xg(n)?new XD(t):new GD(t,{allowProjection:n!==k.Fragment}),FD=RM({...p3,...kD,...SD,...LD},qD),ht=XR(FD);var vu={},iw;function $D(){if(iw)return vu;iw=1,Object.defineProperty(vu,"__esModule",{value:!0}),vu.parse=c,vu.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,u=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function c(x,v){const w=new u,S=x.length;if(S<2)return w;const C=(v==null?void 0:v.decode)||g;let A=0;do{const D=x.indexOf("=",A);if(D===-1)break;const R=x.indexOf(";",A),O=R===-1?S:R;if(D>O){A=x.lastIndexOf(";",D-1)+1;continue}const M=f(x,A,D),P=h(x,D,M),z=x.slice(M,P);if(w[z]===void 0){let V=f(x,D+1,O),X=h(x,O,V);const K=C(x.slice(V,X));w[z]=K}A=O+1}while(A<S);return w}function f(x,v,w){do{const S=x.charCodeAt(v);if(S!==32&&S!==9)return v}while(++v<w);return w}function h(x,v,w){for(;v>w;){const S=x.charCodeAt(--v);if(S!==32&&S!==9)return v+1}return w}function p(x,v,w){const S=(w==null?void 0:w.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const C=S(v);if(!t.test(C))throw new TypeError(`argument val is invalid: ${v}`);let A=x+"="+C;if(!w)return A;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);A+="; Max-Age="+w.maxAge}if(w.domain){if(!r.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);A+="; Domain="+w.domain}if(w.path){if(!a.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);A+="; Path="+w.path}if(w.expires){if(!y(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);A+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(A+="; HttpOnly"),w.secure&&(A+="; Secure"),w.partitioned&&(A+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return A}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function y(x){return s.call(x)==="[object Date]"}return vu}$D();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rw="popstate";function QD(n={}){function t(a,s){let{pathname:u,search:c,hash:f}=a.location;return X0("",{pathname:u,search:c,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(a,s){return typeof s=="string"?s:lc(s)}return ZD(t,r,null,n)}function Ce(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function Tr(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function KD(){return Math.random().toString(36).substring(2,10)}function aw(n,t){return{usr:n.state,key:n.key,idx:t}}function X0(n,t,r=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?xl(t):t,state:r,key:t&&t.key||a||KD()}}function lc({pathname:n="/",search:t="",hash:r=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function xl(n){let t={};if(n){let r=n.indexOf("#");r>=0&&(t.hash=n.substring(r),n=n.substring(0,r));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function ZD(n,t,r,a={}){let{window:s=document.defaultView,v5Compat:u=!1}=a,c=s.history,f="POP",h=null,p=g();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function g(){return(c.state||{idx:null}).idx}function y(){f="POP";let C=g(),A=C==null?null:C-p;p=C,h&&h({action:f,location:S.location,delta:A})}function x(C,A){f="PUSH";let D=X0(S.location,C,A);p=g()+1;let R=aw(D,p),O=S.createHref(D);try{c.pushState(R,"",O)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;s.location.assign(O)}u&&h&&h({action:f,location:S.location,delta:1})}function v(C,A){f="REPLACE";let D=X0(S.location,C,A);p=g();let R=aw(D,p),O=S.createHref(D);c.replaceState(R,"",O),u&&h&&h({action:f,location:S.location,delta:0})}function w(C){let A=s.location.origin!=="null"?s.location.origin:s.location.href,D=typeof C=="string"?C:lc(C);return D=D.replace(/ $/,"%20"),Ce(A,`No window.location.(origin|href) available to create URL for href: ${D}`),new URL(D,A)}let S={get action(){return f},get location(){return n(s,c)},listen(C){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(rw,y),h=C,()=>{s.removeEventListener(rw,y),h=null}},createHref(C){return t(s,C)},createURL:w,encodeLocation(C){let A=w(C);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:x,replace:v,go(C){return c.go(C)}};return S}function sT(n,t,r="/"){return ID(n,t,r,!1)}function ID(n,t,r,a){let s=typeof t=="string"?xl(t):t,u=ra(s.pathname||"/",r);if(u==null)return null;let c=oT(n);WD(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=u8(u);f=o8(c[h],p,a)}return f}function oT(n,t=[],r=[],a=""){let s=(u,c,f)=>{let h={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};h.relativePath.startsWith("/")&&(Ce(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length));let p=ea([a,h.relativePath]),g=r.concat(h);u.children&&u.children.length>0&&(Ce(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),oT(u.children,t,g,p)),!(u.path==null&&!u.index)&&t.push({path:p,score:a8(p,u.index),routesMeta:g})};return n.forEach((u,c)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))s(u,c);else for(let h of lT(u.path))s(u,c,h)}),t}function lT(n){let t=n.split("/");if(t.length===0)return[];let[r,...a]=t,s=r.endsWith("?"),u=r.replace(/\?$/,"");if(a.length===0)return s?[u,""]:[u];let c=lT(a.join("/")),f=[];return f.push(...c.map(h=>h===""?u:[u,h].join("/"))),s&&f.push(...c),f.map(h=>n.startsWith("/")&&h===""?"/":h)}function WD(n){n.sort((t,r)=>t.score!==r.score?r.score-t.score:s8(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var JD=/^:[\w-]+$/,t8=3,e8=2,n8=1,i8=10,r8=-2,sw=n=>n==="*";function a8(n,t){let r=n.split("/"),a=r.length;return r.some(sw)&&(a+=r8),t&&(a+=e8),r.filter(s=>!sw(s)).reduce((s,u)=>s+(JD.test(u)?t8:u===""?n8:i8),a)}function s8(n,t){return n.length===t.length&&n.slice(0,-1).every((a,s)=>a===t[s])?n[n.length-1]-t[t.length-1]:0}function o8(n,t,r=!1){let{routesMeta:a}=n,s={},u="/",c=[];for(let f=0;f<a.length;++f){let h=a[f],p=f===a.length-1,g=u==="/"?t:t.slice(u.length)||"/",y=$d({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),x=h.route;if(!y&&p&&r&&!a[a.length-1].route.index&&(y=$d({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(s,y.params),c.push({params:s,pathname:ea([u,y.pathname]),pathnameBase:h8(ea([u,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(u=ea([u,y.pathnameBase]))}return c}function $d(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,a]=l8(n.path,n.caseSensitive,n.end),s=t.match(r);if(!s)return null;let u=s[0],c=u.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((p,{paramName:g,isOptional:y},x)=>{if(g==="*"){let w=f[x]||"";c=u.slice(0,u.length-w.length).replace(/(.)\/+$/,"$1")}const v=f[x];return y&&!v?p[g]=void 0:p[g]=(v||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:c,pattern:n}}function l8(n,t=!1,r=!0){Tr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(a.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),a]}function u8(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function ra(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=n.charAt(r);return a&&a!=="/"?null:n.slice(r)||"/"}function c8(n,t="/"){let{pathname:r,search:a="",hash:s=""}=typeof n=="string"?xl(n):n;return{pathname:r?r.startsWith("/")?r:f8(r,t):t,search:p8(a),hash:m8(s)}}function f8(n,t){let r=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function $m(n,t,r,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function d8(n){return n.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function uT(n){let t=d8(n);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function cT(n,t,r,a=!1){let s;typeof n=="string"?s=xl(n):(s={...n},Ce(!s.pathname||!s.pathname.includes("?"),$m("?","pathname","search",s)),Ce(!s.pathname||!s.pathname.includes("#"),$m("#","pathname","hash",s)),Ce(!s.search||!s.search.includes("#"),$m("#","search","hash",s)));let u=n===""||s.pathname==="",c=u?"/":s.pathname,f;if(c==null)f=r;else{let y=t.length-1;if(!a&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),y-=1;s.pathname=x.join("/")}f=y>=0?t[y]:"/"}let h=c8(s,f),p=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var ea=n=>n.join("/").replace(/\/\/+/g,"/"),h8=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),p8=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,m8=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function g8(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var fT=["POST","PUT","PATCH","DELETE"];new Set(fT);var y8=["GET",...fT];new Set(y8);var bl=k.createContext(null);bl.displayName="DataRouter";var gh=k.createContext(null);gh.displayName="DataRouterState";var dT=k.createContext({isTransitioning:!1});dT.displayName="ViewTransition";var v8=k.createContext(new Map);v8.displayName="Fetchers";var x8=k.createContext(null);x8.displayName="Await";var Cr=k.createContext(null);Cr.displayName="Navigation";var _l=k.createContext(null);_l.displayName="Location";var oa=k.createContext({outlet:null,matches:[],isDataRoute:!1});oa.displayName="Route";var iy=k.createContext(null);iy.displayName="RouteError";function b8(n,{relative:t}={}){Ce(Tc(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=k.useContext(Cr),{hash:s,pathname:u,search:c}=Ec(n,{relative:t}),f=u;return r!=="/"&&(f=u==="/"?r:ea([r,u])),a.createHref({pathname:f,search:c,hash:s})}function Tc(){return k.useContext(_l)!=null}function $i(){return Ce(Tc(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(_l).location}function _8(){return k.useContext(_l).navigationType}var hT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pT(n){k.useContext(Cr).static||k.useLayoutEffect(n)}function Gs(){let{isDataRoute:n}=k.useContext(oa);return n?k8():w8()}function w8(){Ce(Tc(),"useNavigate() may be used only in the context of a <Router> component.");let n=k.useContext(bl),{basename:t,navigator:r}=k.useContext(Cr),{matches:a}=k.useContext(oa),{pathname:s}=$i(),u=JSON.stringify(uT(a)),c=k.useRef(!1);return pT(()=>{c.current=!0}),k.useCallback((h,p={})=>{if(Tr(c.current,hT),!c.current)return;if(typeof h=="number"){r.go(h);return}let g=cT(h,JSON.parse(u),s,p.relative==="path");n==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ea([t,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[t,r,u,s,n])}k.createContext(null);function Ec(n,{relative:t}={}){let{matches:r}=k.useContext(oa),{pathname:a}=$i(),s=JSON.stringify(uT(r));return k.useMemo(()=>cT(n,JSON.parse(s),a,t==="path"),[n,s,a,t])}function S8(n,t){return mT(n,t)}function mT(n,t,r,a){var D;Ce(Tc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:u}=k.useContext(Cr),{matches:c}=k.useContext(oa),f=c[c.length-1],h=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let R=y&&y.path||"";gT(p,!y||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let x=$i(),v;if(t){let R=typeof t=="string"?xl(t):t;Ce(g==="/"||((D=R.pathname)==null?void 0:D.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),v=R}else v=x;let w=v.pathname||"/",S=w;if(g!=="/"){let R=g.replace(/^\//,"").split("/");S="/"+w.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=!u&&r&&r.matches&&r.matches.length>0?r.matches:sT(n,{pathname:S});Tr(y||C!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Tr(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=R8(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},h,R.params),pathname:ea([g,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:ea([g,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),c,r,a);return t&&A?k.createElement(_l.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},A):A}function T8(){let n=z8(),t=g8(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:u},"ErrorBoundary")," or"," ",k.createElement("code",{style:u},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),r?k.createElement("pre",{style:s},r):null,c)}var E8=k.createElement(T8,null),A8=class extends k.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?k.createElement(oa.Provider,{value:this.props.routeContext},k.createElement(iy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function C8({routeContext:n,match:t,children:r}){let a=k.useContext(bl);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(oa.Provider,{value:n},r)}function R8(n,t=[],r=null,a=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let s=n,u=r==null?void 0:r.errors;if(u!=null){let h=s.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Ce(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let c=!1,f=-1;if(r)for(let h=0;h<s.length;h++){let p=s[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=h),p.route.id){let{loaderData:g,errors:y}=r,x=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||x){c=!0,f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}return s.reduceRight((h,p,g)=>{let y,x=!1,v=null,w=null;r&&(y=u&&p.route.id?u[p.route.id]:void 0,v=p.route.errorElement||E8,c&&(f<0&&g===0?(gT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,w=null):f===g&&(x=!0,w=p.route.hydrateFallbackElement||null)));let S=t.concat(s.slice(0,g+1)),C=()=>{let A;return y?A=v:x?A=w:p.route.Component?A=k.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=h,k.createElement(C8,{match:p,routeContext:{outlet:h,matches:S,isDataRoute:r!=null},children:A})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?k.createElement(A8,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:C(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):C()},null)}function ry(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function M8(n){let t=k.useContext(bl);return Ce(t,ry(n)),t}function D8(n){let t=k.useContext(gh);return Ce(t,ry(n)),t}function O8(n){let t=k.useContext(oa);return Ce(t,ry(n)),t}function ay(n){let t=O8(n),r=t.matches[t.matches.length-1];return Ce(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function j8(){return ay("useRouteId")}function z8(){var a;let n=k.useContext(iy),t=D8("useRouteError"),r=ay("useRouteError");return n!==void 0?n:(a=t.errors)==null?void 0:a[r]}function k8(){let{router:n}=M8("useNavigate"),t=ay("useNavigate"),r=k.useRef(!1);return pT(()=>{r.current=!0}),k.useCallback(async(s,u={})=>{Tr(r.current,hT),r.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:t,...u}))},[n,t])}var ow={};function gT(n,t,r){!t&&!ow[n]&&(ow[n]=!0,Tr(!1,r))}k.memo(L8);function L8({routes:n,future:t,state:r}){return mT(n,void 0,r,t)}function xs(n){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function N8({basename:n="/",children:t=null,location:r,navigationType:a="POP",navigator:s,static:u=!1}){Ce(!Tc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),f=k.useMemo(()=>({basename:c,navigator:s,static:u,future:{}}),[c,s,u]);typeof r=="string"&&(r=xl(r));let{pathname:h="/",search:p="",hash:g="",state:y=null,key:x="default"}=r,v=k.useMemo(()=>{let w=ra(h,c);return w==null?null:{location:{pathname:w,search:p,hash:g,state:y,key:x},navigationType:a}},[c,h,p,g,y,x,a]);return Tr(v!=null,`<Router basename="${c}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:k.createElement(Cr.Provider,{value:f},k.createElement(_l.Provider,{children:t,value:v}))}function P8({children:n,location:t}){return S8(q0(n),t)}function q0(n,t=[]){let r=[];return k.Children.forEach(n,(a,s)=>{if(!k.isValidElement(a))return;let u=[...t,s];if(a.type===k.Fragment){r.push.apply(r,q0(a.props.children,u));return}Ce(a.type===xs,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=q0(a.props.children,u)),r.push(c)}),r}var Td="get",Ed="application/x-www-form-urlencoded";function yh(n){return n!=null&&typeof n.tagName=="string"}function B8(n){return yh(n)&&n.tagName.toLowerCase()==="button"}function V8(n){return yh(n)&&n.tagName.toLowerCase()==="form"}function U8(n){return yh(n)&&n.tagName.toLowerCase()==="input"}function H8(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Y8(n,t){return n.button===0&&(!t||t==="_self")&&!H8(n)}var Yf=null;function G8(){if(Yf===null)try{new FormData(document.createElement("form"),0),Yf=!1}catch{Yf=!0}return Yf}var X8=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qm(n){return n!=null&&!X8.has(n)?(Tr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ed}"`),null):n}function q8(n,t){let r,a,s,u,c;if(V8(n)){let f=n.getAttribute("action");a=f?ra(f,t):null,r=n.getAttribute("method")||Td,s=Qm(n.getAttribute("enctype"))||Ed,u=new FormData(n)}else if(B8(n)||U8(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||f.getAttribute("action");if(a=h?ra(h,t):null,r=n.getAttribute("formmethod")||f.getAttribute("method")||Td,s=Qm(n.getAttribute("formenctype"))||Qm(f.getAttribute("enctype"))||Ed,u=new FormData(f,n),!G8()){let{name:p,type:g,value:y}=n;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,y)}}else{if(yh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Td,a=null,s=Ed,c=n}return u&&s==="text/plain"&&(c=u,u=void 0),{action:a,method:r.toLowerCase(),encType:s,formData:u,body:c}}function sy(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}async function F8(n,t){if(n.id in t)return t[n.id];try{let r=await import(n.module);return t[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $8(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Q8(n,t,r){let a=await Promise.all(n.map(async s=>{let u=t.routes[s.route.id];if(u){let c=await F8(u,r);return c.links?c.links():[]}return[]}));return W8(a.flat(1).filter($8).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function lw(n,t,r,a,s,u){let c=(h,p)=>r[p]?h.route.id!==r[p].route.id:!0,f=(h,p)=>{var g;return r[p].pathname!==h.pathname||((g=r[p].route.path)==null?void 0:g.endsWith("*"))&&r[p].params["*"]!==h.params["*"]};return u==="assets"?t.filter((h,p)=>c(h,p)||f(h,p)):u==="data"?t.filter((h,p)=>{var y;let g=a.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((y=r[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function K8(n,t,{includeHydrateFallback:r}={}){return Z8(n.map(a=>{let s=t.routes[a.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function Z8(n){return[...new Set(n)]}function I8(n){let t={},r=Object.keys(n).sort();for(let a of r)t[a]=n[a];return t}function W8(n,t){let r=new Set;return new Set(t),n.reduce((a,s)=>{let u=JSON.stringify(I8(s));return r.has(u)||(r.add(u),a.push({key:u,link:s})),a},[])}function J8(n,t){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname="_root.data":t&&ra(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function yT(){let n=k.useContext(bl);return sy(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function tO(){let n=k.useContext(gh);return sy(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var oy=k.createContext(void 0);oy.displayName="FrameworkContext";function vT(){let n=k.useContext(oy);return sy(n,"You must render this element inside a <HydratedRouter> element"),n}function eO(n,t){let r=k.useContext(oy),[a,s]=k.useState(!1),[u,c]=k.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:y}=t,x=k.useRef(null);k.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let S=A=>{A.forEach(D=>{c(D.isIntersecting)})},C=new IntersectionObserver(S,{threshold:.5});return x.current&&C.observe(x.current),()=>{C.disconnect()}}},[n]),k.useEffect(()=>{if(a){let S=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(S)}}},[a]);let v=()=>{s(!0)},w=()=>{s(!1),c(!1)};return r?n!=="intent"?[u,x,{}]:[u,x,{onFocus:xu(f,v),onBlur:xu(h,w),onMouseEnter:xu(p,v),onMouseLeave:xu(g,w),onTouchStart:xu(y,v)}]:[!1,x,{}]}function xu(n,t){return r=>{n&&n(r),r.defaultPrevented||t(r)}}function nO({page:n,...t}){let{router:r}=yT(),a=k.useMemo(()=>sT(r.routes,n,r.basename),[r.routes,n,r.basename]);return a?k.createElement(rO,{page:n,matches:a,...t}):null}function iO(n){let{manifest:t,routeModules:r}=vT(),[a,s]=k.useState([]);return k.useEffect(()=>{let u=!1;return Q8(n,t,r).then(c=>{u||s(c)}),()=>{u=!0}},[n,t,r]),a}function rO({page:n,matches:t,...r}){let a=$i(),{manifest:s,routeModules:u}=vT(),{basename:c}=yT(),{loaderData:f,matches:h}=tO(),p=k.useMemo(()=>lw(n,t,h,s,a,"data"),[n,t,h,s,a]),g=k.useMemo(()=>lw(n,t,h,s,a,"assets"),[n,t,h,s,a]),y=k.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let w=new Set,S=!1;if(t.forEach(A=>{var R;let D=s.routes[A.route.id];!D||!D.hasLoader||(!p.some(O=>O.route.id===A.route.id)&&A.route.id in f&&((R=u[A.route.id])!=null&&R.shouldRevalidate)||D.hasClientLoader?S=!0:w.add(A.route.id))}),w.size===0)return[];let C=J8(n,c);return S&&w.size>0&&C.searchParams.set("_routes",t.filter(A=>w.has(A.route.id)).map(A=>A.route.id).join(",")),[C.pathname+C.search]},[c,f,a,s,p,t,n,u]),x=k.useMemo(()=>K8(g,s),[g,s]),v=iO(g);return k.createElement(k.Fragment,null,y.map(w=>k.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),x.map(w=>k.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),v.map(({key:w,link:S})=>k.createElement("link",{key:w,...S})))}function aO(...n){return t=>{n.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var xT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xT&&(window.__reactRouterVersion="7.4.1")}catch{}function sO({basename:n,children:t,window:r}){let a=k.useRef();a.current==null&&(a.current=QD({window:r,v5Compat:!0}));let s=a.current,[u,c]=k.useState({action:s.action,location:s.location}),f=k.useCallback(h=>{k.startTransition(()=>c(h))},[c]);return k.useLayoutEffect(()=>s.listen(f),[s,f]),k.createElement(N8,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:s})}var bT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_T=k.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:s,reloadDocument:u,replace:c,state:f,target:h,to:p,preventScrollReset:g,viewTransition:y,...x},v){let{basename:w}=k.useContext(Cr),S=typeof p=="string"&&bT.test(p),C,A=!1;if(typeof p=="string"&&S&&(C=p,xT))try{let X=new URL(window.location.href),K=p.startsWith("//")?new URL(X.protocol+p):new URL(p),ot=ra(K.pathname,w);K.origin===X.origin&&ot!=null?p=ot+K.search+K.hash:A=!0}catch{Tr(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=b8(p,{relative:s}),[R,O,M]=eO(a,x),P=cO(p,{replace:c,state:f,target:h,preventScrollReset:g,relative:s,viewTransition:y});function z(X){t&&t(X),X.defaultPrevented||P(X)}let V=k.createElement("a",{...x,...M,href:C||D,onClick:A||u?t:z,ref:aO(v,O),target:h,"data-discover":!S&&r==="render"?"true":void 0});return R&&!S?k.createElement(k.Fragment,null,V,k.createElement(nO,{page:D})):V});_T.displayName="Link";var oO=k.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:s=!1,style:u,to:c,viewTransition:f,children:h,...p},g){let y=Ec(c,{relative:p.relative}),x=$i(),v=k.useContext(gh),{navigator:w,basename:S}=k.useContext(Cr),C=v!=null&&mO(y)&&f===!0,A=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,D=x.pathname,R=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(D=D.toLowerCase(),R=R?R.toLowerCase():null,A=A.toLowerCase()),R&&S&&(R=ra(R,S)||R);const O=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let M=D===A||!s&&D.startsWith(A)&&D.charAt(O)==="/",P=R!=null&&(R===A||!s&&R.startsWith(A)&&R.charAt(A.length)==="/"),z={isActive:M,isPending:P,isTransitioning:C},V=M?t:void 0,X;typeof a=="function"?X=a(z):X=[a,M?"active":null,P?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let K=typeof u=="function"?u(z):u;return k.createElement(_T,{...p,"aria-current":V,className:X,ref:g,style:K,to:c,viewTransition:f},typeof h=="function"?h(z):h)});oO.displayName="NavLink";var lO=k.forwardRef(({discover:n="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:s,state:u,method:c=Td,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:y,...x},v)=>{let w=hO(),S=pO(f,{relative:p}),C=c.toLowerCase()==="get"?"get":"post",A=typeof f=="string"&&bT.test(f),D=R=>{if(h&&h(R),R.defaultPrevented)return;R.preventDefault();let O=R.nativeEvent.submitter,M=(O==null?void 0:O.getAttribute("formmethod"))||c;w(O||R.currentTarget,{fetcherKey:t,method:M,navigate:r,replace:s,state:u,relative:p,preventScrollReset:g,viewTransition:y})};return k.createElement("form",{ref:v,method:C,action:S,onSubmit:a?h:D,...x,"data-discover":!A&&n==="render"?"true":void 0})});lO.displayName="Form";function uO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wT(n){let t=k.useContext(bl);return Ce(t,uO(n)),t}function cO(n,{target:t,replace:r,state:a,preventScrollReset:s,relative:u,viewTransition:c}={}){let f=Gs(),h=$i(),p=Ec(n,{relative:u});return k.useCallback(g=>{if(Y8(g,t)){g.preventDefault();let y=r!==void 0?r:lc(h)===lc(p);f(n,{replace:y,state:a,preventScrollReset:s,relative:u,viewTransition:c})}},[h,f,p,r,a,t,n,s,u,c])}var fO=0,dO=()=>`__${String(++fO)}__`;function hO(){let{router:n}=wT("useSubmit"),{basename:t}=k.useContext(Cr),r=j8();return k.useCallback(async(a,s={})=>{let{action:u,method:c,encType:f,formData:h,body:p}=q8(a,t);if(s.navigate===!1){let g=s.fetcherKey||dO();await n.fetch(g,r,s.action||u,{preventScrollReset:s.preventScrollReset,formData:h,body:p,formMethod:s.method||c,formEncType:s.encType||f,flushSync:s.flushSync})}else await n.navigate(s.action||u,{preventScrollReset:s.preventScrollReset,formData:h,body:p,formMethod:s.method||c,formEncType:s.encType||f,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,t,r])}function pO(n,{relative:t}={}){let{basename:r}=k.useContext(Cr),a=k.useContext(oa);Ce(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),u={...Ec(n||".",{relative:t})},c=$i();if(n==null){u.search=c.search;let f=new URLSearchParams(u.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(y=>y).forEach(y=>f.append("index",y));let g=f.toString();u.search=g?`?${g}`:""}}return(!n||n===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:ea([r,u.pathname])),lc(u)}function mO(n,t={}){let r=k.useContext(dT);Ce(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=wT("useViewTransitionState"),s=Ec(n,{relative:t.relative});if(!r.isTransitioning)return!1;let u=ra(r.currentLocation.pathname,a)||r.currentLocation.pathname,c=ra(r.nextLocation.pathname,a)||r.nextLocation.pathname;return $d(s.pathname,c)!=null||$d(s.pathname,u)!=null}new TextEncoder;const ST=N(ht.div)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`,TT=N.svg`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
`,ET=N.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    font-family: var(--font-en);
    letter-spacing: -0.5px;
`,gO=({onClick:n})=>b.jsxs(ST,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},children:[b.jsxs(TT,{viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[b.jsx("defs",{children:b.jsxs("linearGradient",{id:"logoGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[b.jsx("stop",{offset:"0%",stopColor:"#76a4da"}),b.jsx("stop",{offset:"100%",stopColor:"#bebcd8"})]})}),b.jsx(ht.path,{d:"M 20 20 L 35 20 A 15 15 0 0 1 20 5 L 20 20 Z",fill:"none",stroke:"url(#logoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.1,ease:"easeInOut"}}),b.jsx(ht.path,{d:"M 20 20 L 20 5 A 15 15 0 0 1 5 20 L 20 20 Z",fill:"url(#logoGradient)",stroke:"url(#logoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.2,ease:"easeInOut"}}),b.jsx(ht.path,{d:"M 20 20 L 5 20 A 15 15 0 0 1 20 35 L 20 20 Z",fill:"none",stroke:"url(#logoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.3,ease:"easeInOut"}}),b.jsx(ht.path,{d:"M 20 20 L 20 35 A 15 15 0 0 1 35 20 L 20 20 Z",fill:"none",stroke:"url(#logoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.4,ease:"easeInOut"}})]}),b.jsx(ET,{children:"Portfolio"})]}),yO=({onClick:n})=>b.jsxs(ST,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},children:[b.jsxs(TT,{viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[b.jsx("defs",{children:b.jsxs("linearGradient",{id:"footerLogoGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[b.jsx("stop",{offset:"0%",stopColor:"#76a4da"}),b.jsx("stop",{offset:"100%",stopColor:"#bebcd8"})]})}),b.jsx(ht.path,{d:"M 20 20 L 35 20 A 15 15 0 0 1 20 5 L 20 20 Z",fill:"none",stroke:"url(#footerLogoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.1,ease:"easeInOut"}}),b.jsx(ht.path,{d:"M 20 20 L 20 5 A 15 15 0 0 1 5 20 L 20 20 Z",fill:"url(#footerLogoGradient)",stroke:"url(#footerLogoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.2,ease:"easeInOut"}}),b.jsx(ht.path,{d:"M 20 20 L 5 20 A 15 15 0 0 1 20 35 L 20 20 Z",fill:"none",stroke:"url(#footerLogoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.3,ease:"easeInOut"}}),b.jsx(ht.path,{d:"M 20 20 L 20 35 A 15 15 0 0 1 35 20 L 20 20 Z",fill:"none",stroke:"url(#footerLogoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.4,ease:"easeInOut"}})]}),b.jsx(ET,{children:"INFO"})]}),vO=N.header`
  position: relative;

  width: 100%;

  z-index: 1000;

  background-color: transparent;

  padding:
    1rem
    2rem;

  @media (max-width: 768px) {
    padding:
      0.75rem
      1rem;
  }
`,xO=N.div`
  position: relative;

  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  display: flex;

  justify-content:
    space-between;

  align-items:
    center;
`,bO=N.nav`
  display: flex;

  align-items:
    center;

  gap: 2rem;

  /* =====================================================
     MOBILE
  ===================================================== */

  @media (max-width: 768px) {
    position: absolute;

    /*
     * HeaderContainer 바로 아래
     */
    top: calc(100% + 0.75rem);

    left: 0;
    right: 0;

    z-index: 1001;

    width: 100%;

    padding:
      0.75rem;

    display: flex;

    flex-direction: column;

    align-items:
      stretch;

    gap: 0.35rem;

    border:
      1px solid
      rgba(
        118,
        164,
        218,
        0.16
      );

    border-radius:
      16px;

    background:
      rgba(
        241,
        248,
        255,
        0.96
      );

    box-shadow:
      0
      14px
      35px
      rgba(
        118,
        164,
        218,
        0.16
      );

    backdrop-filter:
      blur(18px);

    -webkit-backdrop-filter:
      blur(18px);

    /*
     * 닫힘
     */
    opacity:
      ${({$open:n})=>n?1:0};

    visibility:
      ${({$open:n})=>n?"visible":"hidden"};

    transform:
      translateY(
        ${({$open:n})=>n?"0":"-12px"}
      )
      scale(
        ${({$open:n})=>n?"1":"0.98"}
      );

    transform-origin:
      top center;

    pointer-events:
      ${({$open:n})=>n?"auto":"none"};

    transition:
      opacity
        0.24s
        ease,
      transform
        0.24s
        ease,
      visibility
        0.24s
        ease;
  }
`,_O=N(ht.button)`
  position: relative;

  padding:
    0.5rem
    1rem;

  border: none;

  background: none;

  color:
    ${({$active:n})=>n?"var(--primary-color)":"var(--gray-100)"};

  font-size: 1rem;

  font-weight:
    ${({$active:n})=>n?"600":"400"};

  cursor: pointer;

  &::after {
    content: "";

    position: absolute;

    left: 50%;
    bottom: 0;

    width:
      ${({$active:n})=>n?"80%":"0%"};

    height: 2px;

    transform:
      translateX(-50%);

    background:
      var(--primary-color);

    border-radius:
      999px;

    transition:
      width
      0.3s
      ease;
  }

  &:hover::after {
    width: 80%;
  }

  /* =====================================================
     MOBILE
  ===================================================== */

  @media (max-width: 768px) {
    width: 100%;

    padding:
      0.85rem
      1rem;

    border-radius:
      11px;

    font-size:
      1rem;

    text-align:
      center;

    transition:
      background
        0.2s
        ease,
      color
        0.2s
        ease;

    background:
      ${({$active:n})=>n?"rgba(118, 164, 218, 0.08)":"transparent"};

    &:hover {
      background:
        rgba(
          118,
          164,
          218,
          0.08
        );
    }

    &::after {
      bottom: 5px;

      width:
        ${({$active:n})=>n?"32px":"0"};
    }

    &:hover::after {
      width: 32px;
    }
  }
`,wO=N.button`
  display: none;

  position: relative;

  width: 42px;
  height: 42px;

  padding: 0;

  flex-shrink: 0;

  border:
    1px solid
    ${({$open:n})=>n?"rgba(118, 164, 218, 0.22)":"transparent"};

  border-radius:
    12px;

  background:
    ${({$open:n})=>n?"rgba(118, 164, 218, 0.08)":"transparent"};

  color:
    ${({$open:n})=>n?"var(--primary-color)":"var(--gray-100)"};

  cursor: pointer;

  transition:
    background
      0.2s
      ease,
    color
      0.2s
      ease,
    border
      0.2s
      ease;

  &:hover {
    color:
      var(--primary-color);

    background:
      rgba(
        118,
        164,
        218,
        0.08
      );
  }

  &:focus-visible {
    outline:
      2px solid
      var(--primary-color);

    outline-offset:
      3px;
  }

  @media (max-width: 768px) {
    display: flex;

    align-items:
      center;

    justify-content:
      center;
  }

  svg {
    width: 24px;
    height: 24px;

    transition:
      transform
      0.25s
      ease;
  }
`,SO=({open:n})=>n?b.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[b.jsx("path",{d:"M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),b.jsx("path",{d:"M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}):b.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[b.jsx("path",{d:"M4 6H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),b.jsx("path",{d:"M4 12H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),b.jsx("path",{d:"M4 18H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),TO=({}={})=>{const n=Gs(),t=$i(),[r,a]=k.useState(!1),s=[{path:"/",label:"홈"},{path:"/personal",label:"경력"},{path:"/project",label:"프로젝트"}],u=c=>c==="/"?t.pathname==="/":t.pathname.startsWith(c);return k.useEffect(()=>{a(!1)},[t.pathname]),k.useEffect(()=>{if(!r)return;const c=f=>{f.key==="Escape"&&a(!1)};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[r]),k.useEffect(()=>{const c=()=>{window.innerWidth>768&&a(!1)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),b.jsxs(vO,{children:[b.jsxs(xO,{children:[b.jsx(gO,{onClick:()=>{n("/")}}),b.jsx(wO,{type:"button",$open:r,"aria-label":r?"메뉴 닫기":"메뉴 열기","aria-expanded":r,onClick:()=>{a(c=>!c)},children:b.jsx(SO,{open:r})}),b.jsx(bO,{$open:r,children:s.map(c=>b.jsx(_O,{type:"button",$active:u(c.path),onClick:()=>{n(c.path),a(!1)},whileHover:{scale:1.06,y:-2},whileTap:{scale:.95},transition:{type:"spring",stiffness:320,damping:20},children:c.label},c.path))})]}),b.jsx(OS,{})]})},EO=n=>{const[t,r]=k.useState(!1);return k.useEffect(()=>{const a=window.matchMedia(n);r(a.matches);const s=()=>r(a.matches);return a.addEventListener("change",s),()=>a.removeEventListener("change",s)},[n]),t},AO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%2376a4da'%20d='M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z'/%3e%3cpath%20fill='%2376a4da'%20d='M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z'/%3e%3c/svg%3e",CO=N.footer`
    width: 100%;
    padding: 1rem 2rem;
`,RO=N.footer`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    padding: 50px 0;
    margin: 0 auto;
`,MO=N.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    img {
        width: 25px;
        height: auto;
    }
`,DO=()=>{const n=EO("(max-width: 480px)");return b.jsxs(CO,{children:[b.jsx(OS,{}),b.jsxs(RO,{children:[b.jsx(yO,{}),b.jsxs(MO,{children:[b.jsx("img",{src:AO,alt:"email",loading:"lazy"}),n?b.jsx("p",{children:"dusen380@gmail.com"}):b.jsx("p",{children:"이메일: dusen380@gmail.com"})]})]})]})};function Ir(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function AT(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},uc={duration:.5,overwrite:!1,delay:0},ly,mn,be,wr=1e8,An=1/wr,F0=Math.PI*2,OO=F0/4,jO=0,CT=Math.sqrt,zO=Math.cos,kO=Math.sin,on=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},aa=function(t){return typeof t=="number"},uy=function(t){return typeof t>"u"},Er=function(t){return typeof t=="object"},In=function(t){return t!==!1},cy=function(){return typeof window<"u"},Gf=function(t){return ze(t)||on(t)},RT=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,LO=/random\([^)]+\)/g,NO=/,\s*/g,uw=/(?:-?\.?\d|\.)+/gi,MT=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Km=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,DT=/[+-]=-?[.\d]+/,PO=/[^,'"\[\]\s]+/gi,BO=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Te,dr,$0,fy,Si={},Qd={},OT,jT=function(t){return(Qd=cl(t,Si))&&ei},dy=function(t,r){return console.warn("Invalid property",t,"set to",r,"Missing plugin? gsap.registerPlugin()")},cc=function(t,r){return!r&&console.warn(t)},zT=function(t,r){return t&&(Si[t]=r)&&Qd&&(Qd[t]=r)||Si},fc=function(){return 0},VO={suppressEvents:!0,isStart:!0,kill:!1},Ad={suppressEvents:!0,kill:!1},UO={suppressEvents:!0},hy={},Ua=[],Q0={},kT,gi={},Zm={},cw=30,Cd=[],py="",my=function(t){var r=t[0],a,s;if(Er(r)||ze(r)||(t=[t]),!(a=(r._gsap||{}).harness)){for(s=Cd.length;s--&&!Cd[s].targetTest(r););a=Cd[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new n5(t[s],a)))||t.splice(s,1);return t},js=function(t){return t._gsap||my(Gi(t))[0]._gsap},LT=function(t,r,a){return(a=t[r])&&ze(a)?t[r]():uy(a)&&t.getAttribute&&t.getAttribute(r)||a},Wn=function(t,r){return(t=t.split(",")).forEach(r)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},Ko=function(t,r){var a=r.charAt(0),s=parseFloat(r.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},HO=function(t,r){for(var a=r.length,s=0;t.indexOf(r[s])<0&&++s<a;);return s<a},Kd=function(){var t=Ua.length,r=Ua.slice(0),a,s;for(Q0={},Ua.length=0,a=0;a<t;a++)s=r[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},gy=function(t){return!!(t._initted||t._startAt||t.add)},NT=function(t,r,a,s){Ua.length&&!mn&&Kd(),t.render(r,a,!!(mn&&r<0&&gy(t))),Ua.length&&!mn&&Kd()},PT=function(t){var r=parseFloat(t);return(r||r===0)&&(t+"").match(PO).length<2?r:on(t)?t.trim():t},BT=function(t){return t},Ti=function(t,r){for(var a in r)a in t||(t[a]=r[a]);return t},YO=function(t){return function(r,a){for(var s in a)s in r||s==="duration"&&t||s==="ease"||(r[s]=a[s])}},cl=function(t,r){for(var a in r)t[a]=r[a];return t},fw=function n(t,r){for(var a in r)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Er(r[a])?n(t[a]||(t[a]={}),r[a]):r[a]);return t},Zd=function(t,r){var a={},s;for(s in t)s in r||(a[s]=t[s]);return a},Vu=function(t){var r=t.parent||Te,a=t.keyframes?YO(Cn(t.keyframes)):Ti;if(In(t.inherit))for(;r;)a(t,r.vars.defaults),r=r.parent||r._dp;return t},GO=function(t,r){for(var a=t.length,s=a===r.length;s&&a--&&t[a]===r[a];);return a<0},VT=function(t,r,a,s,u){var c=t[s],f;if(u)for(f=r[u];c&&c[u]>f;)c=c._prev;return c?(r._next=c._next,c._next=r):(r._next=t[a],t[a]=r),r._next?r._next._prev=r:t[s]=r,r._prev=c,r.parent=r._dp=t,r},vh=function(t,r,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=r._prev,c=r._next;u?u._next=c:t[a]===r&&(t[a]=c),c?c._prev=u:t[s]===r&&(t[s]=u),r._next=r._prev=r.parent=null},qa=function(t,r){t.parent&&(!r||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zs=function(t,r){if(t&&(!r||r._end>t._dur||r._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},XO=function(t){for(var r=t.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return t},K0=function(t,r,a,s){return t._startAt&&(mn?t._startAt.revert(Ad):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(r,!0,s))},qO=function n(t){return!t||t._ts&&n(t.parent)},dw=function(t){return t._repeat?fl(t._tTime,t=t.duration()+t._rDelay)*t:0},fl=function(t,r){var a=Math.floor(t=Se(t/r));return t&&a===t?a-1:a},Id=function(t,r){return(t-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},xh=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||An)||0))},bh=function(t,r){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=Se(a._time-(t._ts>0?r/t._ts:((t._dirty?t.totalDuration():t._tDur)-r)/-t._ts)),xh(t),a._dirty||zs(a,t)),t},UT=function(t,r){var a;if((r._time||!r._dur&&r._initted||r._start<t._time&&(r._dur||!r.add))&&(a=Id(t.rawTime(),r),(!r._dur||Ac(0,r.totalDuration(),a)-r._tTime>An)&&r.render(a,!0)),zs(t,r)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-1e-8}},mr=function(t,r,a,s){return r.parent&&qa(r),r._start=Se((aa(a)?a:a||t!==Te?Ui(t,a,r):t._time)+r._delay),r._end=Se(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),VT(t,r,"_first","_last",t._sort?"_start":0),Z0(r)||(t._recent=r),s||UT(t,r),t._ts<0&&bh(t,t._tTime),t},HT=function(t,r){return(Si.ScrollTrigger||dy("scrollTrigger",r))&&Si.ScrollTrigger.create(r,t)},YT=function(t,r,a,s,u){if(vy(t,r,u),!t._initted)return 1;if(!a&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&kT!==vi.frame)return Ua.push(t),t._lazy=[u,s],1},FO=function n(t){var r=t.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||n(r))},Z0=function(t){var r=t.data;return r==="isFromStart"||r==="isStart"},$O=function(t,r,a,s){var u=t.ratio,c=r<0||!r&&(!t._start&&FO(t)&&!(!t._initted&&Z0(t))||(t._ts<0||t._dp._ts<0)&&!Z0(t))?0:1,f=t._rDelay,h=0,p,g,y;if(f&&t._repeat&&(h=Ac(0,t._tDur,r),g=fl(h,f),t._yoyo&&g&1&&(c=1-c),g!==fl(t._tTime,f)&&(u=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==u||mn||s||t._zTime===An||!r&&t._zTime){if(!t._initted&&YT(t,r,s,a,h))return;for(y=t._zTime,t._zTime=r||(a?An:0),a||(a=r&&!y),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=h,p=t._pt;p;)p.r(c,p.d),p=p._next;r<0&&K0(t,r,a,!0),t._onUpdate&&!a&&bi(t,"onUpdate"),h&&t._repeat&&!a&&t.parent&&bi(t,"onRepeat"),(r>=t._tDur||r<0)&&t.ratio===c&&(c&&qa(t,1),!a&&!mn&&(bi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=r)},QO=function(t,r,a){var s;if(a>r)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>r)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<r)return s;s=s._prev}},dl=function(t,r,a,s){var u=t._repeat,c=Se(r)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=u?u<0?1e10:Se(c*(u+1)+t._rDelay*u):c,f>0&&!s&&bh(t,t._tTime=t._tDur*f),t.parent&&xh(t),a||zs(t.parent,t),t},hw=function(t){return t instanceof Kn?zs(t):dl(t,t._dur)},KO={_start:0,endTime:fc,totalDuration:fc},Ui=function n(t,r,a){var s=t.labels,u=t._recent||KO,c=t.duration()>=wr?u.endTime(!1):t._dur,f,h,p;return on(r)&&(isNaN(r)||r in s)?(h=r.charAt(0),p=r.substr(-1)==="%",f=r.indexOf("="),h==="<"||h===">"?(f>=0&&(r=r.replace(/=/,"")),(h==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(r.substr(1))||0)*(p?(f<0?u:a).totalDuration()/100:1)):f<0?(r in s||(s[r]=c),s[r]):(h=parseFloat(r.charAt(f-1)+r.substr(f+1)),p&&a&&(h=h/100*(Cn(a)?a[0]:a).totalDuration()),f>1?n(t,r.substr(0,f-1),a)+h:c+h)):r==null?c:+r},Uu=function(t,r,a){var s=aa(r[1]),u=(s?2:1)+(t<2?0:1),c=r[u],f,h;if(s&&(c.duration=r[1]),c.parent=a,t){for(f=c,h=a;h&&!("immediateRender"in f);)f=h.vars.defaults||{},h=In(h.vars.inherit)&&h.parent;c.immediateRender=In(f.immediateRender),t<2?c.runBackwards=1:c.startAt=r[u-1]}return new $e(r[0],c,r[u+1])},Za=function(t,r){return t||t===0?r(t):r},Ac=function(t,r,a){return a<t?t:a>r?r:a},Sn=function(t,r){return!on(t)||!(r=BO.exec(t))?"":r[1]},ZO=function(t,r,a){return Za(a,function(s){return Ac(t,r,s)})},I0=[].slice,GT=function(t,r){return t&&Er(t)&&"length"in t&&(!r&&!t.length||t.length-1 in t&&Er(t[0]))&&!t.nodeType&&t!==dr},IO=function(t,r,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return on(s)&&!r||GT(s,1)?(u=a).push.apply(u,Gi(s)):a.push(s)})||a},Gi=function(t,r,a){return be&&!r&&be.selector?be.selector(t):on(t)&&!a&&($0||!hl())?I0.call((r||fy).querySelectorAll(t),0):Cn(t)?IO(t,a):GT(t)?I0.call(t,0):t?[t]:[]},W0=function(t){return t=Gi(t)[0]||cc("Invalid scope")||{},function(r){var a=t.current||t.nativeElement||t;return Gi(r,a.querySelectorAll?a:a===t?cc("Invalid scope")||fy.createElement("div"):t)}},XT=function(t){return t.sort(function(){return .5-Math.random()})},qT=function(t){if(ze(t))return t;var r=Er(t)?t:{each:t},a=ks(r.ease),s=r.from||0,u=parseFloat(r.base)||0,c={},f=s>0&&s<1,h=isNaN(s)||f,p=r.axis,g=s,y=s;return on(s)?g=y={center:.5,edges:.5,end:1}[s]||0:!f&&h&&(g=s[0],y=s[1]),function(x,v,w){var S=(w||r).length,C=c[S],A,D,R,O,M,P,z,V,X;if(!C){if(X=r.grid==="auto"?0:(r.grid||[1,wr])[1],!X){for(z=-1e8;z<(z=w[X++].getBoundingClientRect().left)&&X<S;);X<S&&X--}for(C=c[S]=[],A=h?Math.min(X,S)*g-.5:s%X,D=X===wr?0:h?S*y/X-.5:s/X|0,z=0,V=wr,P=0;P<S;P++)R=P%X-A,O=D-(P/X|0),C[P]=M=p?Math.abs(p==="y"?O:R):CT(R*R+O*O),M>z&&(z=M),M<V&&(V=M);s==="random"&&XT(C),C.max=z-V,C.min=V,C.v=S=(parseFloat(r.amount)||parseFloat(r.each)*(X>S?S-1:p?p==="y"?S/X:X:Math.max(X,S/X))||0)*(s==="edges"?-1:1),C.b=S<0?u-S:u,C.u=Sn(r.amount||r.each)||0,a=a&&S<0?c6(a):a}return S=(C[x]-C.min)/C.max||0,Se(C.b+(a?a(S):S)*C.v)+C.u}},J0=function(t){var r=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=Se(Math.round(parseFloat(a)/t)*t*r);return(s-s%1)/r+(aa(a)?0:Sn(a))}},FT=function(t,r){var a=Cn(t),s,u;return!a&&Er(t)&&(s=a=t.radius||wr,t.values?(t=Gi(t.values),(u=!aa(t[0]))&&(s*=s)):t=J0(t.increment)),Za(r,a?ze(t)?function(c){return u=t(c),Math.abs(u-c)<=s?u:c}:function(c){for(var f=parseFloat(u?c.x:c),h=parseFloat(u?c.y:0),p=wr,g=0,y=t.length,x,v;y--;)u?(x=t[y].x-f,v=t[y].y-h,x=x*x+v*v):x=Math.abs(t[y]-f),x<p&&(p=x,g=y);return g=!s||p<=s?t[g]:c,u||g===c||aa(c)?g:g+Sn(c)}:J0(t))},$T=function(t,r,a,s){return Za(Cn(t)?!r:a===!0?!!(a=0):!s,function(){return Cn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(r-t+a*.99))/a)*a*s)/s})},WO=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return function(s){return r.reduce(function(u,c){return c(u)},s)}},JO=function(t,r){return function(a){return t(parseFloat(a))+(r||Sn(a))}},t6=function(t,r,a){return KT(t,r,0,1,a)},QT=function(t,r,a){return Za(a,function(s){return t[~~r(s)]})},e6=function n(t,r,a){var s=r-t;return Cn(t)?QT(t,n(0,t.length),r):Za(a,function(u){return(s+(u-t)%s)%s+t})},n6=function n(t,r,a){var s=r-t,u=s*2;return Cn(t)?QT(t,n(0,t.length-1),r):Za(a,function(c){return c=(u+(c-t)%u)%u||0,t+(c>s?u-c:c)})},dc=function(t){return t.replace(LO,function(r){var a=r.indexOf("[")+1,s=r.substring(a||7,a?r.indexOf("]"):r.length-1).split(NO);return $T(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},KT=function(t,r,a,s,u){var c=r-t,f=s-a;return Za(u,function(h){return a+((h-t)/c*f||0)})},i6=function n(t,r,a,s){var u=isNaN(t+r)?0:function(v){return(1-v)*t+v*r};if(!u){var c=on(t),f={},h,p,g,y,x;if(a===!0&&(s=1)&&(a=null),c)t={p:t},r={p:r};else if(Cn(t)&&!Cn(r)){for(g=[],y=t.length,x=y-2,p=1;p<y;p++)g.push(n(t[p-1],t[p]));y--,u=function(w){w*=y;var S=Math.min(x,~~w);return g[S](w-S)},a=r}else s||(t=cl(Cn(t)?[]:{},t));if(!g){for(h in r)yy.call(f,t,h,"get",r[h]);u=function(w){return _y(w,f)||(c?t.p:t)}}}return Za(a,u)},pw=function(t,r,a){var s=t.labels,u=wr,c,f,h;for(c in s)f=s[c]-r,f<0==!!a&&f&&u>(f=Math.abs(f))&&(h=c,u=f);return h},bi=function(t,r,a){var s=t.vars,u=s[r],c=be,f=t._ctx,h,p,g;if(u)return h=s[r+"Params"],p=s.callbackScope||t,a&&Ua.length&&Kd(),f&&(be=f),g=h?u.apply(p,h):u.call(p),be=c,g},Cu=function(t){return qa(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&bi(t,"onInterrupt"),t},$o,ZT=[],IT=function(t){if(t)if(t=!t.name&&t.default||t,cy()||t.headless){var r=t.name,a=ze(t),s=r&&!a&&t.init?function(){this._props=[]}:t,u={init:fc,render:_y,add:yy,kill:b6,modifier:x6,rawVars:0},c={targetTest:0,get:0,getSetter:by,aliases:{},register:0};if(hl(),t!==s){if(gi[r])return;Ti(s,Ti(Zd(t,u),c)),cl(s.prototype,cl(u,Zd(t,c))),gi[s.prop=r]=s,t.targetTest&&(Cd.push(s),hy[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}zT(r,s),t.register&&t.register(ei,s,Jn)}else ZT.push(t)},ue=255,Ru={aqua:[0,ue,ue],lime:[0,ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ue],navy:[0,0,128],white:[ue,ue,ue],olive:[128,128,0],yellow:[ue,ue,0],orange:[ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ue,0,0],pink:[ue,192,203],cyan:[0,ue,ue],transparent:[ue,ue,ue,0]},Im=function(t,r,a){return t+=t<0?1:t>1?-1:0,(t*6<1?r+(a-r)*t*6:t<.5?a:t*3<2?r+(a-r)*(2/3-t)*6:r)*ue+.5|0},WT=function(t,r,a){var s=t?aa(t)?[t>>16,t>>8&ue,t&ue]:0:Ru.black,u,c,f,h,p,g,y,x,v,w;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ru[t])s=Ru[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+u+u+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ue,s&ue,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ue,t&ue]}else if(t.substr(0,3)==="hsl"){if(s=w=t.match(uw),!r)h=+s[0]%360/360,p=+s[1]/100,g=+s[2]/100,c=g<=.5?g*(p+1):g+p-g*p,u=g*2-c,s.length>3&&(s[3]*=1),s[0]=Im(h+1/3,u,c),s[1]=Im(h,u,c),s[2]=Im(h-1/3,u,c);else if(~t.indexOf("="))return s=t.match(MT),a&&s.length<4&&(s[3]=1),s}else s=t.match(uw)||Ru.transparent;s=s.map(Number)}return r&&!w&&(u=s[0]/ue,c=s[1]/ue,f=s[2]/ue,y=Math.max(u,c,f),x=Math.min(u,c,f),g=(y+x)/2,y===x?h=p=0:(v=y-x,p=g>.5?v/(2-y-x):v/(y+x),h=y===u?(c-f)/v+(c<f?6:0):y===c?(f-u)/v+2:(u-c)/v+4,h*=60),s[0]=~~(h+.5),s[1]=~~(p*100+.5),s[2]=~~(g*100+.5)),a&&s.length<4&&(s[3]=1),s},JT=function(t){var r=[],a=[],s=-1;return t.split(Ha).forEach(function(u){var c=u.match(Fo)||[];r.push.apply(r,c),a.push(s+=c.length+1)}),r.c=a,r},mw=function(t,r,a){var s="",u=(t+s).match(Ha),c=r?"hsla(":"rgba(",f=0,h,p,g,y;if(!u)return t;if(u=u.map(function(x){return(x=WT(x,r,1))&&c+(r?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),a&&(g=JT(t),h=a.c,h.join(s)!==g.c.join(s)))for(p=t.replace(Ha,"1").split(Fo),y=p.length-1;f<y;f++)s+=p[f]+(~h.indexOf(f)?u.shift()||c+"0,0,0,0)":(g.length?g:u.length?u:a).shift());if(!p)for(p=t.split(Ha),y=p.length-1;f<y;f++)s+=p[f]+u[f];return s+p[y]},Ha=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ru)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),r6=/hsl[a]?\(/,t5=function(t){var r=t.join(" "),a;if(Ha.lastIndex=0,Ha.test(r))return a=r6.test(r),t[1]=mw(t[1],a),t[0]=mw(t[0],a,JT(t[1])),!0},hc,vi=function(){var n=Date.now,t=500,r=33,a=n(),s=a,u=1e3/240,c=u,f=[],h,p,g,y,x,v,w=function S(C){var A=n()-s,D=C===!0,R,O,M,P;if((A>t||A<0)&&(a+=A-r),s+=A,M=s-a,R=M-c,(R>0||D)&&(P=++y.frame,x=M-y.time*1e3,y.time=M=M/1e3,c+=R+(R>=u?4:u-R),O=1),D||(h=p(S)),O)for(v=0;v<f.length;v++)f[v](M,x,P,C)};return y={time:0,frame:0,tick:function(){w(!0)},deltaRatio:function(C){return x/(1e3/(C||60))},wake:function(){OT&&(!$0&&cy()&&(dr=$0=window,fy=dr.document||{},Si.gsap=ei,(dr.gsapVersions||(dr.gsapVersions=[])).push(ei.version),jT(Qd||dr.GreenSockGlobals||!dr.gsap&&dr||{}),ZT.forEach(IT)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&y.sleep(),p=g||function(C){return setTimeout(C,c-y.time*1e3+1|0)},hc=1,w(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(h),hc=0,p=fc},lagSmoothing:function(C,A){t=C||1/0,r=Math.min(A||33,t)},fps:function(C){u=1e3/(C||240),c=y.time*1e3+u},add:function(C,A,D){var R=A?function(O,M,P,z){C(O,M,P,z),y.remove(R)}:C;return y.remove(C),f[D?"unshift":"push"](R),hl(),R},remove:function(C,A){~(A=f.indexOf(C))&&f.splice(A,1)&&v>=A&&v--},_listeners:f},y}(),hl=function(){return!hc&&vi.wake()},Gt={},a6=/^[\d.\-M][\d.\-,\s]/,s6=/["']/g,o6=function(t){for(var r={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,c=a.length,f,h,p;u<c;u++)h=a[u],f=u!==c-1?h.lastIndexOf(","):h.length,p=h.substr(0,f),r[s]=isNaN(p)?p.replace(s6,"").trim():+p,s=h.substr(f+1).trim();return r},l6=function(t){var r=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",r);return t.substring(r,~s&&s<a?t.indexOf(")",a+1):a)},u6=function(t){var r=(t+"").split("("),a=Gt[r[0]];return a&&r.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[o6(r[1])]:l6(t).split(",").map(PT)):Gt._CE&&a6.test(t)?Gt._CE("",t):a},c6=function(t){return function(r){return 1-t(1-r)}},ks=function(t,r){return t&&(ze(t)?t:Gt[t]||u6(t))||r},Xs=function(t,r,a,s){a===void 0&&(a=function(h){return 1-r(1-h)}),s===void 0&&(s=function(h){return h<.5?r(h*2)/2:1-r((1-h)*2)/2});var u={easeIn:r,easeOut:a,easeInOut:s},c;return Wn(t,function(f){Gt[f]=Si[f]=u,Gt[c=f.toLowerCase()]=a;for(var h in u)Gt[c+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=Gt[f+"."+h]=u[h]}),u},e5=function(t){return function(r){return r<.5?(1-t(1-r*2))/2:.5+t((r-.5)*2)/2}},Wm=function n(t,r,a){var s=r>=1?r:1,u=(a||(t?.3:.45))/(r<1?r:1),c=u/F0*(Math.asin(1/s)||0),f=function(g){return g===1?1:s*Math.pow(2,-10*g)*kO((g-c)*u)+1},h=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:e5(f);return u=F0/u,h.config=function(p,g){return n(t,p,g)},h},Jm=function n(t,r){r===void 0&&(r=1.70158);var a=function(c){return c?--c*c*((r+1)*c+r)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:e5(a);return s.config=function(u){return n(t,u)},s};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var r=t<5?t+1:t;Xs(n+",Power"+(r-1),t?function(a){return Math.pow(a,r)}:function(a){return a},function(a){return 1-Math.pow(1-a,r)},function(a){return a<.5?Math.pow(a*2,r)/2:1-Math.pow((1-a)*2,r)/2})});Gt.Linear.easeNone=Gt.none=Gt.Linear.easeIn;Xs("Elastic",Wm("in"),Wm("out"),Wm());(function(n,t){var r=1/t,a=2*r,s=2.5*r,u=function(f){return f<r?n*f*f:f<a?n*Math.pow(f-1.5/t,2)+.75:f<s?n*(f-=2.25/t)*f+.9375:n*Math.pow(f-2.625/t,2)+.984375};Xs("Bounce",function(c){return 1-u(1-c)},u)})(7.5625,2.75);Xs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Xs("Circ",function(n){return-(CT(1-n*n)-1)});Xs("Sine",function(n){return n===1?1:-zO(n*OO)+1});Xs("Back",Jm("in"),Jm("out"),Jm());Gt.SteppedEase=Gt.steps=Si.SteppedEase={config:function(t,r){t===void 0&&(t=1);var a=1/t,s=t+(r?0:1),u=r?1:0,c=1-An;return function(f){return((s*Ac(0,c,f)|0)+u)*a}}};uc.ease=Gt["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return py+=n+","+n+"Params,"});var n5=function(t,r){this.id=jO++,t._gsap=this,this.target=t,this.harness=r,this.get=r?r.get:LT,this.set=r?r.getSetter:by},pc=function(){function n(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,dl(this,+r.duration,1,1),this.data=r.data,be&&(this._ctx=be,be.data.push(this)),hc||vi.wake()}var t=n.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,dl(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(hl(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(bh(this,a),!u._dp||u.parent||UT(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===An||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),NT(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+dw(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+dw(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?fl(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?Id(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-1e-8?0:this._rts,this.totalTime(Ac(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),xh(this),XO(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==An&&(this._tTime-=An)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=Se(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&mr(s,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(In(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Id(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=UO);var s=mn;return mn=a,gy(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),mn=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,hw(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,hw(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Ui(this,a),In(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,In(s)),this._dur||(this._zTime=-1e-8),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-An)},t.eventCallback=function(a,s,u){var c=this.vars;return arguments.length>1?(s?(c[a]=s,u&&(c[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this,u=s._prom;return new Promise(function(c){var f=ze(a)?a:BT,h=function(){var g=s.then;s.then=null,u&&u(),ze(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=g),c(f),s.then=g};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?h():s._prom=h})},t.kill=function(){Cu(this)},n}();Ti(pc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Kn=function(n){AT(t,n);function t(a,s){var u;return a===void 0&&(a={}),u=n.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=In(a.sortChildren),Te&&mr(a.parent||Te,Ir(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&HT(Ir(u),a.scrollTrigger),u}var r=t.prototype;return r.to=function(s,u,c){return Uu(0,arguments,this),this},r.from=function(s,u,c){return Uu(1,arguments,this),this},r.fromTo=function(s,u,c,f){return Uu(2,arguments,this),this},r.set=function(s,u,c){return u.duration=0,u.parent=this,Vu(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new $e(s,u,Ui(this,c),1),this},r.call=function(s,u,c){return mr(this,$e.delayedCall(0,s,u),c)},r.staggerTo=function(s,u,c,f,h,p,g){return c.duration=u,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=g,c.parent=this,new $e(s,c,Ui(this,h)),this},r.staggerFrom=function(s,u,c,f,h,p,g){return c.runBackwards=1,Vu(c).immediateRender=In(c.immediateRender),this.staggerTo(s,u,c,f,h,p,g)},r.staggerFromTo=function(s,u,c,f,h,p,g,y){return f.startAt=c,Vu(f).immediateRender=In(f.immediateRender),this.staggerTo(s,u,f,h,p,g,y)},r.render=function(s,u,c){var f=this._time,h=this._dirty?this.totalDuration():this._tDur,p=this._dur,g=s<=0?0:Se(s),y=this._zTime<0!=s<0&&(this._initted||!p),x,v,w,S,C,A,D,R,O,M,P,z;if(this!==Te&&g>h&&s>=0&&(g=h),g!==this._tTime||c||y){if(f!==this._time&&p&&(g+=this._time-f,s+=this._time-f),x=g,O=this._start,R=this._ts,A=!R,y&&(p||(f=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,C=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(C*100+s,u,c);if(x=Se(g%C),g===h?(S=this._repeat,x=p):(M=Se(g/C),S=~~M,S&&S===M&&(x=p,S--),x>p&&(x=p)),M=fl(this._tTime,C),!f&&this._tTime&&M!==S&&this._tTime-M*C-this._dur<=0&&(M=S),P&&S&1&&(x=p-x,z=1),S!==M&&!this._lock){var V=P&&M&1,X=V===(P&&S&1);if(S<M&&(V=!V),f=V?0:g%p?p:g,this._lock=1,this.render(f||(z?0:Se(S*C)),u,!p)._lock=0,this._tTime=g,!u&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!z&&(this.invalidate()._lock=1,M=S),f&&f!==this._time||A!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,h=this._tDur,X&&(this._lock=2,f=V?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!z&&this.invalidate()),this._lock=0,!this._ts&&!A)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(D=QO(this,Se(f),Se(x)),D&&(g-=x-(x=D._start))),this._tTime=g,this._time=x,this._act=!!R,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&g&&p&&!u&&!M&&(bi(this,"onStart"),this._tTime!==g))return this;if(x>=f&&s>=0)for(v=this._first;v;){if(w=v._next,(v._act||x>=v._start)&&v._ts&&D!==v){if(v.parent!==this)return this.render(s,u,c);if(v.render(v._ts>0?(x-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(x-v._start)*v._ts,u,c),x!==this._time||!this._ts&&!A){D=0,w&&(g+=this._zTime=-1e-8);break}}v=w}else{v=this._last;for(var K=s<0?s:x;v;){if(w=v._prev,(v._act||K<=v._end)&&v._ts&&D!==v){if(v.parent!==this)return this.render(s,u,c);if(v.render(v._ts>0?(K-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(K-v._start)*v._ts,u,c||mn&&gy(v)),x!==this._time||!this._ts&&!A){D=0,w&&(g+=this._zTime=K?-1e-8:An);break}}v=w}}if(D&&!u&&(this.pause(),D.render(x>=f?0:-1e-8)._zTime=x>=f?1:-1,this._ts))return this._start=O,xh(this),this.render(s,u,c);this._onUpdate&&!u&&bi(this,"onUpdate",!0),(g===h&&this._tTime>=this.totalDuration()||!g&&f)&&(O===this._start||Math.abs(R)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(g===h&&this._ts>0||!g&&this._ts<0)&&qa(this,1),!u&&!(s<0&&!f)&&(g||f||!h)&&(bi(this,g===h&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<h&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(s,u){var c=this;if(aa(u)||(u=Ui(this,u,s)),!(s instanceof pc)){if(Cn(s))return s.forEach(function(f){return c.add(f,u)}),this;if(on(s))return this.addLabel(s,u);if(ze(s))s=$e.delayedCall(0,s);else return this}return this!==s?mr(this,s,u):this},r.getChildren=function(s,u,c,f){s===void 0&&(s=!0),u===void 0&&(u=!0),c===void 0&&(c=!0),f===void 0&&(f=-1e8);for(var h=[],p=this._first;p;)p._start>=f&&(p instanceof $e?u&&h.push(p):(c&&h.push(p),s&&h.push.apply(h,p.getChildren(!0,u,c)))),p=p._next;return h},r.getById=function(s){for(var u=this.getChildren(1,1,1),c=u.length;c--;)if(u[c].vars.id===s)return u[c]},r.remove=function(s){return on(s)?this.removeLabel(s):ze(s)?this.killTweensOf(s):(s.parent===this&&vh(this,s),s===this._recent&&(this._recent=this._last),zs(this))},r.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(vi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),n.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},r.addLabel=function(s,u){return this.labels[s]=Ui(this,u),this},r.removeLabel=function(s){return delete this.labels[s],this},r.addPause=function(s,u,c){var f=$e.delayedCall(0,u||fc,c);return f.data="isPause",this._hasPause=1,mr(this,f,Ui(this,s))},r.removePause=function(s){var u=this._first;for(s=Ui(this,s);u;)u._start===s&&u.data==="isPause"&&qa(u),u=u._next},r.killTweensOf=function(s,u,c){for(var f=this.getTweensOf(s,c),h=f.length;h--;)La!==f[h]&&f[h].kill(s,u);return this},r.getTweensOf=function(s,u){for(var c=[],f=Gi(s),h=this._first,p=aa(u),g;h;)h instanceof $e?HO(h._targets,f)&&(p?(!La||h._initted&&h._ts)&&h.globalTime(0)<=u&&h.globalTime(h.totalDuration())>u:!u||h.isActive())&&c.push(h):(g=h.getTweensOf(f,u)).length&&c.push.apply(c,g),h=h._next;return c},r.tweenTo=function(s,u){u=u||{};var c=this,f=Ui(c,s),h=u,p=h.startAt,g=h.onStart,y=h.onStartParams,x=h.immediateRender,v,w=$e.to(c,Ti({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:u.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||An,onStart:function(){if(c.pause(),!v){var C=u.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());w._dur!==C&&dl(w,C,0,1).render(w._time,!0,!0),v=1}g&&g.apply(w,y||[])}},u));return x?w.render(0):w},r.tweenFromTo=function(s,u,c){return this.tweenTo(u,Ti({startAt:{time:Ui(this,s)}},c))},r.recent=function(){return this._recent},r.nextLabel=function(s){return s===void 0&&(s=this._time),pw(this,Ui(this,s))},r.previousLabel=function(s){return s===void 0&&(s=this._time),pw(this,Ui(this,s),1)},r.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+An)},r.shiftChildren=function(s,u,c){c===void 0&&(c=0);var f=this._first,h=this.labels,p;for(s=Se(s);f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(u)for(p in h)h[p]>=c&&(h[p]+=s);return zs(this)},r.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return n.prototype.invalidate.call(this,s)},r.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,c;u;)c=u._next,this.remove(u),u=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),zs(this)},r.totalDuration=function(s){var u=0,c=this,f=c._last,h=wr,p,g,y;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(y=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),g=f._start,g>h&&c._sort&&f._ts&&!c._lock?(c._lock=1,mr(c,f,g-f._delay,1)._lock=0):h=g,g<0&&f._ts&&(u-=g,(!y&&!c._dp||y&&y.smoothChildTiming)&&(c._start+=Se(g/c._ts),c._time-=g,c._tTime-=g),c.shiftChildren(-g,!1,-1/0),h=0),f._end>u&&f._ts&&(u=f._end),f=p;dl(c,c===Te&&c._time>u?c._time:u,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(Te._ts&&(NT(Te,Id(s,Te)),kT=vi.frame),vi.frame>=cw){cw+=wi.autoSleep||120;var u=Te._first;if((!u||!u._ts)&&wi.autoSleep&&vi._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||vi.sleep()}}},t}(pc);Ti(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var f6=function(t,r,a,s,u,c,f){var h=new Jn(this._pt,t,r,0,1,l5,null,u),p=0,g=0,y,x,v,w,S,C,A,D;for(h.b=a,h.e=s,a+="",s+="",(A=~s.indexOf("random("))&&(s=dc(s)),c&&(D=[a,s],c(D,t,r),a=D[0],s=D[1]),x=a.match(Km)||[];y=Km.exec(s);)w=y[0],S=s.substring(p,y.index),v?v=(v+1)%5:S.substr(-5)==="rgba("&&(v=1),w!==x[g++]&&(C=parseFloat(x[g-1])||0,h._pt={_next:h._pt,p:S||g===1?S:",",s:C,c:w.charAt(1)==="="?Ko(C,w)-C:parseFloat(w)-C,m:v&&v<4?Math.round:0},p=Km.lastIndex);return h.c=p<s.length?s.substring(p,s.length):"",h.fp=f,(DT.test(s)||A)&&(h.e=0),this._pt=h,h},yy=function(t,r,a,s,u,c,f,h,p,g){ze(s)&&(s=s(u||0,t,c));var y=t[r],x=a!=="get"?a:ze(y)?p?t[r.indexOf("set")||!ze(t["get"+r.substr(3)])?r:"get"+r.substr(3)](p):t[r]():y,v=ze(y)?p?g6:s5:xy,w;if(on(s)&&(~s.indexOf("random(")&&(s=dc(s)),s.charAt(1)==="="&&(w=Ko(x,s)+(Sn(x)||0),(w||w===0)&&(s=w))),!g||x!==s||tg)return!isNaN(x*s)&&s!==""?(w=new Jn(this._pt,t,r,+x||0,s-(x||0),typeof y=="boolean"?v6:o5,0,v),p&&(w.fp=p),f&&w.modifier(f,this,t),this._pt=w):(!y&&!(r in t)&&dy(r,s),f6.call(this,t,r,x,s,v,h||wi.stringFilter,p))},d6=function(t,r,a,s,u){if(ze(t)&&(t=Hu(t,u,r,a,s)),!Er(t)||t.style&&t.nodeType||Cn(t)||RT(t))return on(t)?Hu(t,u,r,a,s):t;var c={},f;for(f in t)c[f]=Hu(t[f],u,r,a,s);return c},i5=function(t,r,a,s,u,c){var f,h,p,g;if(gi[t]&&(f=new gi[t]).init(u,f.rawVars?r[t]:d6(r[t],s,u,c,a),a,s,c)!==!1&&(a._pt=h=new Jn(a._pt,u,t,0,1,f.render,f,0,f.priority),a!==$o))for(p=a._ptLookup[a._targets.indexOf(u)],g=f._props.length;g--;)p[f._props[g]]=h;return f},La,tg,vy=function n(t,r,a){var s=t.vars,u=s.ease,c=s.startAt,f=s.immediateRender,h=s.lazy,p=s.onUpdate,g=s.runBackwards,y=s.yoyoEase,x=s.keyframes,v=s.autoRevert,w=t._dur,S=t._startAt,C=t._targets,A=t.parent,D=A&&A.data==="nested"?A.vars.targets:C,R=t._overwrite==="auto"&&!ly,O=t.timeline,M=s.easeReverse||y,P,z,V,X,K,ot,tt,wt,pt,gt,Y,$,J;if(O&&(!x||!u)&&(u="none"),t._ease=ks(u,uc.ease),t._rEase=M&&(ks(M)||t._ease),t._from=!O&&!!s.runBackwards,t._from&&(t.ratio=1),!O||x&&!s.stagger){if(wt=C[0]?js(C[0]).harness:0,$=wt&&s[wt.prop],P=Zd(s,hy),S&&(S._zTime<0&&S.progress(1),r<0&&g&&f&&!v?S.render(-1,!0):S.revert(g&&w?Ad:VO),S._lazy=0),c){if(qa(t._startAt=$e.set(C,Ti({data:"isStart",overwrite:!1,parent:A,immediateRender:!0,lazy:!S&&In(h),startAt:null,delay:0,onUpdate:p&&function(){return bi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,r<0&&(mn||!f&&!v)&&t._startAt.revert(Ad),f&&w&&r<=0&&a<=0){r&&(t._zTime=r);return}}else if(g&&w&&!S){if(r&&(f=!1),V=Ti({overwrite:!1,data:"isFromStart",lazy:f&&!S&&In(h),immediateRender:f,stagger:0,parent:A},P),$&&(V[wt.prop]=$),qa(t._startAt=$e.set(C,V)),t._startAt._dp=0,t._startAt._sat=t,r<0&&(mn?t._startAt.revert(Ad):t._startAt.render(-1,!0)),t._zTime=r,!f)n(t._startAt,An,An);else if(!r)return}for(t._pt=t._ptCache=0,h=w&&In(h)||h&&!w,z=0;z<C.length;z++){if(K=C[z],tt=K._gsap||my(C)[z]._gsap,t._ptLookup[z]=gt={},Q0[tt.id]&&Ua.length&&Kd(),Y=D===C?z:D.indexOf(K),wt&&(pt=new wt).init(K,$||P,t,Y,D)!==!1&&(t._pt=X=new Jn(t._pt,K,pt.name,0,1,pt.render,pt,0,pt.priority),pt._props.forEach(function(at){gt[at]=X}),pt.priority&&(ot=1)),!wt||$)for(V in P)gi[V]&&(pt=i5(V,P,t,Y,K,D))?pt.priority&&(ot=1):gt[V]=X=yy.call(t,K,V,"get",P[V],Y,D,0,s.stringFilter);t._op&&t._op[z]&&t.kill(K,t._op[z]),R&&t._pt&&(La=t,Te.killTweensOf(K,gt,t.globalTime(r)),J=!t.parent,La=0),t._pt&&h&&(Q0[tt.id]=1)}ot&&u5(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!J,x&&r<=0&&O.render(wr,!0,!0)},h6=function(t,r,a,s,u,c,f,h){var p=(t._pt&&t._ptCache||(t._ptCache={}))[r],g,y,x,v;if(!p)for(p=t._ptCache[r]=[],x=t._ptLookup,v=t._targets.length;v--;){if(g=x[v][r],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==r&&g.fp!==r;)g=g._next;if(!g)return tg=1,t.vars[r]="+=0",vy(t,f),tg=0,h?cc(r+" not eligible for reset. Try splitting into individual properties"):1;p.push(g)}for(v=p.length;v--;)y=p[v],g=y._pt||y,g.s=(s||s===0)&&!u?s:g.s+(s||0)+c*g.c,g.c=a-g.s,y.e&&(y.e=Be(a)+Sn(y.e)),y.b&&(y.b=g.s+Sn(y.b))},p6=function(t,r){var a=t[0]?js(t[0]).harness:0,s=a&&a.aliases,u,c,f,h;if(!s)return r;u=cl({},r);for(c in s)if(c in u)for(h=s[c].split(","),f=h.length;f--;)u[h[f]]=u[c];return u},m6=function(t,r,a,s){var u=r.ease||s||"power1.inOut",c,f;if(Cn(r))f=a[t]||(a[t]=[]),r.forEach(function(h,p){return f.push({t:p/(r.length-1)*100,v:h,e:u})});else for(c in r)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:r[c],e:u})},Hu=function(t,r,a,s,u){return ze(t)?t.call(r,a,s,u):on(t)&&~t.indexOf("random(")?dc(t):t},r5=py+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",a5={};Wn(r5+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return a5[n]=1});var $e=function(n){AT(t,n);function t(a,s,u,c){var f;typeof s=="number"&&(u.duration=s,s=u,u=null),f=n.call(this,c?s:Vu(s))||this;var h=f.vars,p=h.duration,g=h.delay,y=h.immediateRender,x=h.stagger,v=h.overwrite,w=h.keyframes,S=h.defaults,C=h.scrollTrigger,A=s.parent||Te,D=(Cn(a)||RT(a)?aa(a[0]):"length"in s)?[a]:Gi(a),R,O,M,P,z,V,X,K;if(f._targets=D.length?my(D):cc("GSAP target "+a+" not found. https://gsap.com",!wi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=v,w||x||Gf(p)||Gf(g)){s=f.vars;var ot=s.easeReverse||s.yoyoEase;if(R=f.timeline=new Kn({data:"nested",defaults:S||{},targets:A&&A.data==="nested"?A.vars.targets:D}),R.kill(),R.parent=R._dp=Ir(f),R._start=0,x||Gf(p)||Gf(g)){if(P=D.length,X=x&&qT(x),Er(x))for(z in x)~r5.indexOf(z)&&(K||(K={}),K[z]=x[z]);for(O=0;O<P;O++)M=Zd(s,a5),M.stagger=0,ot&&(M.easeReverse=ot),K&&cl(M,K),V=D[O],M.duration=+Hu(p,Ir(f),O,V,D),M.delay=(+Hu(g,Ir(f),O,V,D)||0)-f._delay,!x&&P===1&&M.delay&&(f._delay=g=M.delay,f._start+=g,M.delay=0),R.to(V,M,X?X(O,V,D):0),R._ease=Gt.none;R.duration()?p=g=0:f.timeline=0}else if(w){Vu(Ti(R.vars.defaults,{ease:"none"})),R._ease=ks(w.ease||s.ease||"none");var tt=0,wt,pt,gt;if(Cn(w))w.forEach(function(Y){return R.to(D,Y,">")}),R.duration();else{M={};for(z in w)z==="ease"||z==="easeEach"||m6(z,w[z],M,w.easeEach);for(z in M)for(wt=M[z].sort(function(Y,$){return Y.t-$.t}),tt=0,O=0;O<wt.length;O++)pt=wt[O],gt={ease:pt.e,duration:(pt.t-(O?wt[O-1].t:0))/100*p},gt[z]=pt.v,R.to(D,gt,tt),tt+=gt.duration;R.duration()<p&&R.to({},{duration:p-R.duration()})}}p||f.duration(p=R.duration())}else f.timeline=0;return v===!0&&!ly&&(La=Ir(f),Te.killTweensOf(D),La=0),mr(A,Ir(f),u),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(y||!p&&!w&&f._start===Se(A._time)&&In(y)&&qO(Ir(f))&&A.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-g)||0)),C&&HT(Ir(f),C),f}var r=t.prototype;return r.render=function(s,u,c){var f=this._time,h=this._tDur,p=this._dur,g=s<0,y=s>h-An&&!g?h:s<An?0:s,x,v,w,S,C,A,D,R;if(!p)$O(this,s,u,c);else if(y!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(x=y,R=this.timeline,this._repeat){if(S=p+this._rDelay,this._repeat<-1&&g)return this.totalTime(S*100+s,u,c);if(x=Se(y%S),y===h?(w=this._repeat,x=p):(C=Se(y/S),w=~~C,w&&w===C?(x=p,w--):x>p&&(x=p)),A=this._yoyo&&w&1,A&&(x=p-x),C=fl(this._tTime,S),x===f&&!c&&this._initted&&w===C)return this._tTime=y,this;w!==C&&this.vars.repeatRefresh&&!A&&!this._lock&&x!==S&&this._initted&&(this._lock=c=1,this.render(Se(S*w),!0).invalidate()._lock=0)}if(!this._initted){if(YT(this,g?s:x,c,u,y))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&w!==C))return this;if(p!==this._dur)return this.render(s,u,c)}if(this._rEase){var O=x<f;if(O!==this._inv){var M=O?f:p-f;this._inv=O,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=M?(O?-1:1)/M:0,this._invScale=O?-this.ratio:1-this.ratio,this._invEase=O?this._rEase:this._ease}this.ratio=D=this._invRatio+this._invScale*this._invEase((x-this._invTime)*this._invRecip)}else this.ratio=D=this._ease(x/p);if(this._from&&(this.ratio=D=1-D),this._tTime=y,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&y&&!u&&!C&&(bi(this,"onStart"),this._tTime!==y))return this;for(v=this._pt;v;)v.r(D,v.d),v=v._next;R&&R.render(s<0?s:R._dur*R._ease(x/this._dur),u,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(g&&K0(this,s,u,c),bi(this,"onUpdate")),this._repeat&&w!==C&&this.vars.onRepeat&&!u&&this.parent&&bi(this,"onRepeat"),(y===this._tDur||!y)&&this._tTime===y&&(g&&!this._onUpdate&&K0(this,s,!0,!0),(s||!p)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&qa(this,1),!u&&!(g&&!f)&&(y||f||A)&&(bi(this,y===h?"onComplete":"onReverseComplete",!0),this._prom&&!(y<h&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),n.prototype.invalidate.call(this,s)},r.resetTo=function(s,u,c,f,h){hc||vi.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||vy(this,p),g=this._ease(p/this._dur),h6(this,s,u,c,f,g,p,h)?this.resetTo(s,u,c,f,1):(bh(this,0),this.parent||VT(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?Cu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,La&&La.vars.overwrite!==!0)._first||Cu(this),this.parent&&c!==this.timeline.totalDuration()&&dl(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,h=s?Gi(s):f,p=this._ptLookup,g=this._pt,y,x,v,w,S,C,A;if((!u||u==="all")&&GO(f,h))return u==="all"&&(this._pt=0),Cu(this);for(y=this._op=this._op||[],u!=="all"&&(on(u)&&(S={},Wn(u,function(D){return S[D]=1}),u=S),u=p6(f,u)),A=f.length;A--;)if(~h.indexOf(f[A])){x=p[A],u==="all"?(y[A]=u,w=x,v={}):(v=y[A]=y[A]||{},w=u);for(S in w)C=x&&x[S],C&&((!("kill"in C.d)||C.d.kill(S)===!0)&&vh(this,C,"_pt"),delete x[S]),v!=="all"&&(v[S]=1)}return this._initted&&!this._pt&&g&&Cu(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return Uu(1,arguments)},t.delayedCall=function(s,u,c,f){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,u,c){return Uu(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,c){return Te.killTweensOf(s,u,c)},t}(pc);Ti($e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(n){$e[n]=function(){var t=new Kn,r=I0.call(arguments,0);return r.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,r)}});var xy=function(t,r,a){return t[r]=a},s5=function(t,r,a){return t[r](a)},g6=function(t,r,a,s){return t[r](s.fp,a)},y6=function(t,r,a){return t.setAttribute(r,a)},by=function(t,r){return ze(t[r])?s5:uy(t[r])&&t.setAttribute?y6:xy},o5=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e6)/1e6,r)},v6=function(t,r){return r.set(r.t,r.p,!!(r.s+r.c*t),r)},l5=function(t,r){var a=r._pt,s="";if(!t&&r.b)s=r.b;else if(t===1&&r.e)s=r.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=r.c}r.set(r.t,r.p,s,r)},_y=function(t,r){for(var a=r._pt;a;)a.r(t,a.d),a=a._next},x6=function(t,r,a,s){for(var u=this._pt,c;u;)c=u._next,u.p===s&&u.modifier(t,r,a),u=c},b6=function(t){for(var r=this._pt,a,s;r;)s=r._next,r.p===t&&!r.op||r.op===t?vh(this,r,"_pt"):r.dep||(a=1),r=s;return!a},_6=function(t,r,a,s){s.mSet(t,r,s.m.call(s.tween,a,s.mt),s)},u5=function(t){for(var r=t._pt,a,s,u,c;r;){for(a=r._next,s=u;s&&s.pr>r.pr;)s=s._next;(r._prev=s?s._prev:c)?r._prev._next=r:u=r,(r._next=s)?s._prev=r:c=r,r=a}t._pt=u},Jn=function(){function n(r,a,s,u,c,f,h,p,g){this.t=a,this.s=u,this.c=c,this.p=s,this.r=f||o5,this.d=h||this,this.set=p||xy,this.pr=g||0,this._next=r,r&&(r._prev=this)}var t=n.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=_6,this.m=a,this.mt=u,this.tween=s},n}();Wn(py+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return hy[n]=1});Si.TweenMax=Si.TweenLite=$e;Si.TimelineLite=Si.TimelineMax=Kn;Te=new Kn({sortChildren:!1,defaults:uc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=t5;var Ls=[],Rd={},w6=[],gw=0,S6=0,t0=function(t){return(Rd[t]||w6).map(function(r){return r()})},eg=function(){var t=Date.now(),r=[];t-gw>2&&(t0("matchMediaInit"),Ls.forEach(function(a){var s=a.queries,u=a.conditions,c,f,h,p;for(f in s)c=dr.matchMedia(s[f]).matches,c&&(h=1),c!==u[f]&&(u[f]=c,p=1);p&&(a.revert(),h&&r.push(a))}),t0("matchMediaRevert"),r.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),gw=t,t0("matchMedia"))},c5=function(){function n(r,a){this.selector=a&&W0(a),this.data=[],this._r=[],this.isReverted=!1,this.id=S6++,r&&this.add(r)}var t=n.prototype;return t.add=function(a,s,u){ze(a)&&(u=s,s=a,a=ze);var c=this,f=function(){var p=be,g=c.selector,y;return p&&p!==c&&p.data.push(c),u&&(c.selector=W0(u)),be=c,y=s.apply(c,arguments),ze(y)&&c._r.push(y),be=p,c.selector=g,c.isReverted=!1,y};return c.last=f,a===ze?f(c,function(h){return c.add(null,h)}):a?c[a]=f:f},t.ignore=function(a){var s=be;be=null,a(this),be=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof n?a.push.apply(a,s.getTweens()):s instanceof $e&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?function(){for(var f=u.getTweens(),h=u.data.length,p;h--;)p=u.data[h],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(g){return f.splice(f.indexOf(g),1)}));for(f.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,y){return y.g-g.g||-1/0}).forEach(function(g){return g.t.revert(a)}),h=u.data.length;h--;)p=u.data[h],p instanceof Kn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof $e)&&p.revert&&p.revert(a);u._r.forEach(function(g){return g(a,u)}),u.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Ls.length;c--;)Ls[c].id===this.id&&Ls.splice(c,1)},t.revert=function(a){this.kill(a||{})},n}(),T6=function(){function n(r){this.contexts=[],this.scope=r,be&&be.data.push(this)}var t=n.prototype;return t.add=function(a,s,u){Er(a)||(a={matches:a});var c=new c5(0,u||this.scope),f=c.conditions={},h,p,g;be&&!c.selector&&(c.selector=be.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(p in a)p==="all"?g=1:(h=dr.matchMedia(a[p]),h&&(Ls.indexOf(c)<0&&Ls.push(c),(f[p]=h.matches)&&(g=1),h.addListener?h.addListener(eg):h.addEventListener("change",eg)));return g&&s(c,function(y){return c.add(null,y)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},n}(),Wd={registerPlugin:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];r.forEach(function(s){return IT(s)})},timeline:function(t){return new Kn(t)},getTweensOf:function(t,r){return Te.getTweensOf(t,r)},getProperty:function(t,r,a,s){on(t)&&(t=Gi(t)[0]);var u=js(t||{}).get,c=a?BT:PT;return a==="native"&&(a=""),t&&(r?c((gi[r]&&gi[r].get||u)(t,r,a,s)):function(f,h,p){return c((gi[f]&&gi[f].get||u)(t,f,h,p))})},quickSetter:function(t,r,a){if(t=Gi(t),t.length>1){var s=t.map(function(g){return ei.quickSetter(g,r,a)}),u=s.length;return function(g){for(var y=u;y--;)s[y](g)}}t=t[0]||{};var c=gi[r],f=js(t),h=f.harness&&(f.harness.aliases||{})[r]||r,p=c?function(g){var y=new c;$o._pt=0,y.init(t,a?g+a:g,$o,0,[t]),y.render(1,y),$o._pt&&_y(1,$o)}:f.set(t,h);return c?p:function(g){return p(t,h,a?g+a:g,f,1)}},quickTo:function(t,r,a){var s,u=ei.to(t,Ti((s={},s[r]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(h,p,g){return u.resetTo(r,h,p,g)};return c.tween=u,c},isTweening:function(t){return Te.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ks(t.ease,uc.ease)),fw(uc,t||{})},config:function(t){return fw(wi,t||{})},registerEffect:function(t){var r=t.name,a=t.effect,s=t.plugins,u=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!gi[f]&&!Si[f]&&cc(r+" effect requires "+f+" plugin.")}),Zm[r]=function(f,h,p){return a(Gi(f),Ti(h||{},u),p)},c&&(Kn.prototype[r]=function(f,h,p){return this.add(Zm[r](f,Er(h)?h:(p=h)&&{},this),p)})},registerEase:function(t,r){Gt[t]=ks(r)},parseEase:function(t,r){return arguments.length?ks(t,r):Gt},getById:function(t){return Te.getById(t)},exportRoot:function(t,r){t===void 0&&(t={});var a=new Kn(t),s,u;for(a.smoothChildTiming=In(t.smoothChildTiming),Te.remove(a),a._dp=0,a._time=a._tTime=Te._time,s=Te._first;s;)u=s._next,(r||!(!s._dur&&s instanceof $e&&s.vars.onComplete===s._targets[0]))&&mr(a,s,s._start-s._delay),s=u;return mr(Te,a,0),a},context:function(t,r){return t?new c5(t,r):be},matchMedia:function(t){return new T6(t)},matchMediaRefresh:function(){return Ls.forEach(function(t){var r=t.conditions,a,s;for(s in r)r[s]&&(r[s]=!1,a=1);a&&t.revert()})||eg()},addEventListener:function(t,r){var a=Rd[t]||(Rd[t]=[]);~a.indexOf(r)||a.push(r)},removeEventListener:function(t,r){var a=Rd[t],s=a&&a.indexOf(r);s>=0&&a.splice(s,1)},utils:{wrap:e6,wrapYoyo:n6,distribute:qT,random:$T,snap:FT,normalize:t6,getUnit:Sn,clamp:ZO,splitColor:WT,toArray:Gi,selector:W0,mapRange:KT,pipe:WO,unitize:JO,interpolate:i6,shuffle:XT},install:jT,effects:Zm,ticker:vi,updateRoot:Kn.updateRoot,plugins:gi,globalTimeline:Te,core:{PropTween:Jn,globals:zT,Tween:$e,Timeline:Kn,Animation:pc,getCache:js,_removeLinkedListItem:vh,reverting:function(){return mn},context:function(t){return t&&be&&(be.data.push(t),t._ctx=be),be},suppressOverwrites:function(t){return ly=t}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Wd[n]=$e[n]});vi.add(Kn.updateRoot);$o=Wd.to({},{duration:0});var E6=function(t,r){for(var a=t._pt;a&&a.p!==r&&a.op!==r&&a.fp!==r;)a=a._next;return a},A6=function(t,r){var a=t._targets,s,u,c;for(s in r)for(u=a.length;u--;)c=t._ptLookup[u][s],c&&(c=c.d)&&(c._pt&&(c=E6(c,s)),c&&c.modifier&&c.modifier(r[s],t,a[u],s))},e0=function(t,r){return{name:t,headless:1,rawVars:1,init:function(s,u,c){c._onInit=function(f){var h,p;if(on(u)&&(h={},Wn(u,function(g){return h[g]=1}),u=h),r){h={};for(p in u)h[p]=r(u[p]);u=h}A6(f,u)}}}},ei=Wd.registerPlugin({name:"attr",init:function(t,r,a,s,u){var c,f,h;this.tween=a;for(c in r)h=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(h||0)+"",r[c],s,u,0,0,c),f.op=c,f.b=h,this._props.push(c)},render:function(t,r){for(var a=r._pt;a;)mn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,r){for(var a=r.length;a--;)this.add(t,a,t[a]||0,r[a],0,0,0,0,0,1)}},e0("roundProps",J0),e0("modifiers"),e0("snap",FT))||Wd;$e.version=Kn.version=ei.version="3.15.0";OT=1;cy()&&hl();Gt.Power0;Gt.Power1;Gt.Power2;Gt.Power3;Gt.Power4;Gt.Linear;Gt.Quad;Gt.Cubic;Gt.Quart;Gt.Quint;Gt.Strong;Gt.Elastic;Gt.Back;Gt.SteppedEase;Gt.Bounce;Gt.Sine;Gt.Expo;Gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yw,Na,Zo,wy,As,vw,Sy,C6=function(){return typeof window<"u"},sa={},bs=180/Math.PI,Io=Math.PI/180,Ao=Math.atan2,xw=1e8,Ty=/([A-Z])/g,R6=/(left|right|width|margin|padding|x)/i,M6=/[\s,\(]\S/,gr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ng=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},D6=function(t,r){return r.set(r.t,r.p,t===1?r.e:Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},O6=function(t,r){return r.set(r.t,r.p,t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},j6=function(t,r){return r.set(r.t,r.p,t===1?r.e:t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},z6=function(t,r){var a=r.s+r.c*t;r.set(r.t,r.p,~~(a+(a<0?-.5:.5))+r.u,r)},f5=function(t,r){return r.set(r.t,r.p,t?r.e:r.b,r)},d5=function(t,r){return r.set(r.t,r.p,t!==1?r.b:r.e,r)},k6=function(t,r,a){return t.style[r]=a},L6=function(t,r,a){return t.style.setProperty(r,a)},N6=function(t,r,a){return t._gsap[r]=a},P6=function(t,r,a){return t._gsap.scaleX=t._gsap.scaleY=a},B6=function(t,r,a,s,u){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(u,c)},V6=function(t,r,a,s,u){var c=t._gsap;c[r]=a,c.renderTransform(u,c)},Ae="transform",ti=Ae+"Origin",U6=function n(t,r){var a=this,s=this.target,u=s.style,c=s._gsap;if(t in sa&&u){if(this.tfm=this.tfm||{},t!=="transform")t=gr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Wr(s,f)}):this.tfm[t]=c.x?c[t]:Wr(s,t),t===ti&&(this.tfm.zOrigin=c.zOrigin);else return gr.transform.split(",").forEach(function(f){return n.call(a,f,r)});if(this.props.indexOf(Ae)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ti,r,"")),t=Ae}(u||r)&&this.props.push(t,r,u[t])},h5=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},H6=function(){var t=this.props,r=this.target,a=r.style,s=r._gsap,u,c;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?r[t[u]](t[u+2]):r[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(Ty,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),u=Sy(),(!u||!u.isStart)&&!a[Ae]&&(h5(a),s.zOrigin&&a[ti]&&(a[ti]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},p5=function(t,r){var a={target:t,props:[],revert:H6,save:U6};return t._gsap||ei.core.getCache(t),r&&t.style&&t.nodeType&&r.split(",").forEach(function(s){return a.save(s)}),a},m5,ig=function(t,r){var a=Na.createElementNS?Na.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Na.createElement(t);return a&&a.style?a:Na.createElement(t)},_i=function n(t,r,a){var s=getComputedStyle(t);return s[r]||s.getPropertyValue(r.replace(Ty,"-$1").toLowerCase())||s.getPropertyValue(r)||!a&&n(t,pl(r)||r,1)||""},bw="O,Moz,ms,Ms,Webkit".split(","),pl=function(t,r,a){var s=r||As,u=s.style,c=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(bw[c]+t in u););return c<0?null:(c===3?"ms":c>=0?bw[c]:"")+t},rg=function(){C6()&&window.document&&(yw=window,Na=yw.document,Zo=Na.documentElement,As=ig("div")||{style:{}},ig("div"),Ae=pl(Ae),ti=Ae+"Origin",As.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",m5=!!pl("perspective"),Sy=ei.core.reverting,wy=1)},_w=function(t){var r=t.ownerSVGElement,a=ig("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),Zo.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),Zo.removeChild(a),u},ww=function(t,r){for(var a=r.length;a--;)if(t.hasAttribute(r[a]))return t.getAttribute(r[a])},g5=function(t){var r,a;try{r=t.getBBox()}catch{r=_w(t),a=1}return r&&(r.width||r.height)||a||(r=_w(t)),r&&!r.width&&!r.x&&!r.y?{x:+ww(t,["x","cx","x1"])||0,y:+ww(t,["y","cy","y1"])||0,width:0,height:0}:r},y5=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&g5(t))},Fa=function(t,r){if(r){var a=t.style,s;r in sa&&r!==ti&&(r=Ae),a.removeProperty?(s=r.substr(0,2),(s==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),a.removeProperty(s==="--"?r:r.replace(Ty,"-$1").toLowerCase())):a.removeAttribute(r)}},Pa=function(t,r,a,s,u,c){var f=new Jn(t._pt,r,a,0,1,c?d5:f5);return t._pt=f,f.b=s,f.e=u,t._props.push(a),f},Sw={deg:1,rad:1,turn:1},Y6={grid:1,flex:1},$a=function n(t,r,a,s){var u=parseFloat(a)||0,c=(a+"").trim().substr((u+"").length)||"px",f=As.style,h=R6.test(r),p=t.tagName.toLowerCase()==="svg",g=(p?"client":"offset")+(h?"Width":"Height"),y=100,x=s==="px",v=s==="%",w,S,C,A;if(s===c||!u||Sw[s]||Sw[c])return u;if(c!=="px"&&!x&&(u=n(t,r,a,"px")),A=t.getCTM&&y5(t),(v||c==="%")&&(sa[r]||~r.indexOf("adius")))return w=A?t.getBBox()[h?"width":"height"]:t[g],Be(v?u/w*y:u/100*w);if(f[h?"width":"height"]=y+(x?c:s),S=s!=="rem"&&~r.indexOf("adius")||s==="em"&&t.appendChild&&!p?t:t.parentNode,A&&(S=(t.ownerSVGElement||{}).parentNode),(!S||S===Na||!S.appendChild)&&(S=Na.body),C=S._gsap,C&&v&&C.width&&h&&C.time===vi.time&&!C.uncache)return Be(u/C.width*y);if(v&&(r==="height"||r==="width")){var D=t.style[r];t.style[r]=y+s,w=t[g],D?t.style[r]=D:Fa(t,r)}else(v||c==="%")&&!Y6[_i(S,"display")]&&(f.position=_i(t,"position")),S===t&&(f.position="static"),S.appendChild(As),w=As[g],S.removeChild(As),f.position="absolute";return h&&v&&(C=js(S),C.time=vi.time,C.width=S[g]),Be(x?w*u/y:w&&u?y/w*u:0)},Wr=function(t,r,a,s){var u;return wy||rg(),r in gr&&r!=="transform"&&(r=gr[r],~r.indexOf(",")&&(r=r.split(",")[0])),sa[r]&&r!=="transform"?(u=gc(t,s),u=r!=="transformOrigin"?u[r]:u.svg?u.origin:th(_i(t,ti))+" "+u.zOrigin+"px"):(u=t.style[r],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=Jd[r]&&Jd[r](t,r,a)||_i(t,r)||LT(t,r)||(r==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?$a(t,r,u,a)+a:u},G6=function(t,r,a,s){if(!a||a==="none"){var u=pl(r,t,1),c=u&&_i(t,u,1);c&&c!==a?(r=u,a=c):r==="borderColor"&&(a=_i(t,"borderTopColor"))}var f=new Jn(this._pt,t.style,r,0,1,l5),h=0,p=0,g,y,x,v,w,S,C,A,D,R,O,M;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=_i(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(S=t.style[r],t.style[r]=s,s=_i(t,r)||s,S?t.style[r]=S:Fa(t,r)),g=[a,s],t5(g),a=g[0],s=g[1],x=a.match(Fo)||[],M=s.match(Fo)||[],M.length){for(;y=Fo.exec(s);)C=y[0],D=s.substring(h,y.index),w?w=(w+1)%5:(D.substr(-5)==="rgba("||D.substr(-5)==="hsla(")&&(w=1),C!==(S=x[p++]||"")&&(v=parseFloat(S)||0,O=S.substr((v+"").length),C.charAt(1)==="="&&(C=Ko(v,C)+O),A=parseFloat(C),R=C.substr((A+"").length),h=Fo.lastIndex-R.length,R||(R=R||wi.units[r]||O,h===s.length&&(s+=R,f.e+=R)),O!==R&&(v=$a(t,r,S,R)||0),f._pt={_next:f._pt,p:D||p===1?D:",",s:v,c:A-v,m:w&&w<4||r==="zIndex"?Math.round:0});f.c=h<s.length?s.substring(h,s.length):""}else f.r=r==="display"&&s==="none"?d5:f5;return DT.test(s)&&(f.e=0),this._pt=f,f},Tw={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},X6=function(t){var r=t.split(" "),a=r[0],s=r[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),r[0]=Tw[a]||a,r[1]=Tw[s]||s,r.join(" ")},q6=function(t,r){if(r.tween&&r.tween._time===r.tween._dur){var a=r.t,s=a.style,u=r.u,c=a._gsap,f,h,p;if(u==="all"||u===!0)s.cssText="",h=1;else for(u=u.split(","),p=u.length;--p>-1;)f=u[p],sa[f]&&(h=1,f=f==="transformOrigin"?ti:Ae),Fa(a,f);h&&(Fa(a,Ae),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",gc(a,1),c.uncache=1,h5(s)))}},Jd={clearProps:function(t,r,a,s,u){if(u.data!=="isFromStart"){var c=t._pt=new Jn(t._pt,r,a,0,0,q6);return c.u=s,c.pr=-10,c.tween=u,t._props.push(a),1}}},mc=[1,0,0,1,0,0],v5={},x5=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ew=function(t){var r=_i(t,Ae);return x5(r)?mc:r.substr(7).match(MT).map(Be)},Ey=function(t,r){var a=t._gsap||js(t),s=t.style,u=Ew(t),c,f,h,p;return a.svg&&t.getAttribute("transform")?(h=t.transform.baseVal.consolidate().matrix,u=[h.a,h.b,h.c,h.d,h.e,h.f],u.join(",")==="1,0,0,1,0,0"?mc:u):(u===mc&&!t.offsetParent&&t!==Zo&&!a.svg&&(h=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Zo.appendChild(t)),u=Ew(t),h?s.display=h:Fa(t,"display"),p&&(f?c.insertBefore(t,f):c?c.appendChild(t):Zo.removeChild(t))),r&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},ag=function(t,r,a,s,u,c){var f=t._gsap,h=u||Ey(t,!0),p=f.xOrigin||0,g=f.yOrigin||0,y=f.xOffset||0,x=f.yOffset||0,v=h[0],w=h[1],S=h[2],C=h[3],A=h[4],D=h[5],R=r.split(" "),O=parseFloat(R[0])||0,M=parseFloat(R[1])||0,P,z,V,X;a?h!==mc&&(z=v*C-w*S)&&(V=O*(C/z)+M*(-S/z)+(S*D-C*A)/z,X=O*(-w/z)+M*(v/z)-(v*D-w*A)/z,O=V,M=X):(P=g5(t),O=P.x+(~R[0].indexOf("%")?O/100*P.width:O),M=P.y+(~(R[1]||R[0]).indexOf("%")?M/100*P.height:M)),s||s!==!1&&f.smooth?(A=O-p,D=M-g,f.xOffset=y+(A*v+D*S)-A,f.yOffset=x+(A*w+D*C)-D):f.xOffset=f.yOffset=0,f.xOrigin=O,f.yOrigin=M,f.smooth=!!s,f.origin=r,f.originIsAbsolute=!!a,t.style[ti]="0px 0px",c&&(Pa(c,f,"xOrigin",p,O),Pa(c,f,"yOrigin",g,M),Pa(c,f,"xOffset",y,f.xOffset),Pa(c,f,"yOffset",x,f.yOffset)),t.setAttribute("data-svg-origin",O+" "+M)},gc=function(t,r){var a=t._gsap||new n5(t);if("x"in a&&!r&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,c="px",f="deg",h=getComputedStyle(t),p=_i(t,ti)||"0",g,y,x,v,w,S,C,A,D,R,O,M,P,z,V,X,K,ot,tt,wt,pt,gt,Y,$,J,at,T,Q,et,it,rt,mt;return g=y=x=S=C=A=D=R=O=0,v=w=1,a.svg=!!(t.getCTM&&y5(t)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(s[Ae]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[Ae]!=="none"?h[Ae]:"")),s.scale=s.rotate=s.translate="none"),z=Ey(t,a.svg),a.svg&&(a.uncache?(J=t.getBBox(),p=a.xOrigin-J.x+"px "+(a.yOrigin-J.y)+"px",$=""):$=!r&&t.getAttribute("data-svg-origin"),ag(t,$||p,!!$||a.originIsAbsolute,a.smooth!==!1,z)),M=a.xOrigin||0,P=a.yOrigin||0,z!==mc&&(ot=z[0],tt=z[1],wt=z[2],pt=z[3],g=gt=z[4],y=Y=z[5],z.length===6?(v=Math.sqrt(ot*ot+tt*tt),w=Math.sqrt(pt*pt+wt*wt),S=ot||tt?Ao(tt,ot)*bs:0,D=wt||pt?Ao(wt,pt)*bs+S:0,D&&(w*=Math.abs(Math.cos(D*Io))),a.svg&&(g-=M-(M*ot+P*wt),y-=P-(M*tt+P*pt))):(mt=z[6],it=z[7],T=z[8],Q=z[9],et=z[10],rt=z[11],g=z[12],y=z[13],x=z[14],V=Ao(mt,et),C=V*bs,V&&(X=Math.cos(-V),K=Math.sin(-V),$=gt*X+T*K,J=Y*X+Q*K,at=mt*X+et*K,T=gt*-K+T*X,Q=Y*-K+Q*X,et=mt*-K+et*X,rt=it*-K+rt*X,gt=$,Y=J,mt=at),V=Ao(-wt,et),A=V*bs,V&&(X=Math.cos(-V),K=Math.sin(-V),$=ot*X-T*K,J=tt*X-Q*K,at=wt*X-et*K,rt=pt*K+rt*X,ot=$,tt=J,wt=at),V=Ao(tt,ot),S=V*bs,V&&(X=Math.cos(V),K=Math.sin(V),$=ot*X+tt*K,J=gt*X+Y*K,tt=tt*X-ot*K,Y=Y*X-gt*K,ot=$,gt=J),C&&Math.abs(C)+Math.abs(S)>359.9&&(C=S=0,A=180-A),v=Be(Math.sqrt(ot*ot+tt*tt+wt*wt)),w=Be(Math.sqrt(Y*Y+mt*mt)),V=Ao(gt,Y),D=Math.abs(V)>2e-4?V*bs:0,O=rt?1/(rt<0?-rt:rt):0),a.svg&&($=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!x5(_i(t,Ae)),$&&t.setAttribute("transform",$))),Math.abs(D)>90&&Math.abs(D)<270&&(u?(v*=-1,D+=S<=0?180:-180,S+=S<=0?180:-180):(w*=-1,D+=D<=0?180:-180)),r=r||a.uncache,a.x=g-((a.xPercent=g&&(!r&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-g)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=y-((a.yPercent=y&&(!r&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-y)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=x+c,a.scaleX=Be(v),a.scaleY=Be(w),a.rotation=Be(S)+f,a.rotationX=Be(C)+f,a.rotationY=Be(A)+f,a.skewX=D+f,a.skewY=R+f,a.transformPerspective=O+c,(a.zOrigin=parseFloat(p.split(" ")[2])||!r&&a.zOrigin||0)&&(s[ti]=th(p)),a.xOffset=a.yOffset=0,a.force3D=wi.force3D,a.renderTransform=a.svg?$6:m5?b5:F6,a.uncache=0,a},th=function(t){return(t=t.split(" "))[0]+" "+t[1]},n0=function(t,r,a){var s=Sn(r);return Be(parseFloat(r)+parseFloat($a(t,"x",a+"px",s)))+s},F6=function(t,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,b5(t,r)},gs="0deg",bu="0px",ys=") ",b5=function(t,r){var a=r||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,h=a.z,p=a.rotation,g=a.rotationY,y=a.rotationX,x=a.skewX,v=a.skewY,w=a.scaleX,S=a.scaleY,C=a.transformPerspective,A=a.force3D,D=a.target,R=a.zOrigin,O="",M=A==="auto"&&t&&t!==1||A===!0;if(R&&(y!==gs||g!==gs)){var P=parseFloat(g)*Io,z=Math.sin(P),V=Math.cos(P),X;P=parseFloat(y)*Io,X=Math.cos(P),c=n0(D,c,z*X*-R),f=n0(D,f,-Math.sin(P)*-R),h=n0(D,h,V*X*-R+R)}C!==bu&&(O+="perspective("+C+ys),(s||u)&&(O+="translate("+s+"%, "+u+"%) "),(M||c!==bu||f!==bu||h!==bu)&&(O+=h!==bu||M?"translate3d("+c+", "+f+", "+h+") ":"translate("+c+", "+f+ys),p!==gs&&(O+="rotate("+p+ys),g!==gs&&(O+="rotateY("+g+ys),y!==gs&&(O+="rotateX("+y+ys),(x!==gs||v!==gs)&&(O+="skew("+x+", "+v+ys),(w!==1||S!==1)&&(O+="scale("+w+", "+S+ys),D.style[Ae]=O||"translate(0, 0)"},$6=function(t,r){var a=r||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,h=a.rotation,p=a.skewX,g=a.skewY,y=a.scaleX,x=a.scaleY,v=a.target,w=a.xOrigin,S=a.yOrigin,C=a.xOffset,A=a.yOffset,D=a.forceCSS,R=parseFloat(c),O=parseFloat(f),M,P,z,V,X;h=parseFloat(h),p=parseFloat(p),g=parseFloat(g),g&&(g=parseFloat(g),p+=g,h+=g),h||p?(h*=Io,p*=Io,M=Math.cos(h)*y,P=Math.sin(h)*y,z=Math.sin(h-p)*-x,V=Math.cos(h-p)*x,p&&(g*=Io,X=Math.tan(p-g),X=Math.sqrt(1+X*X),z*=X,V*=X,g&&(X=Math.tan(g),X=Math.sqrt(1+X*X),M*=X,P*=X)),M=Be(M),P=Be(P),z=Be(z),V=Be(V)):(M=y,V=x,P=z=0),(R&&!~(c+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(R=$a(v,"x",c,"px"),O=$a(v,"y",f,"px")),(w||S||C||A)&&(R=Be(R+w-(w*M+S*z)+C),O=Be(O+S-(w*P+S*V)+A)),(s||u)&&(X=v.getBBox(),R=Be(R+s/100*X.width),O=Be(O+u/100*X.height)),X="matrix("+M+","+P+","+z+","+V+","+R+","+O+")",v.setAttribute("transform",X),D&&(v.style[Ae]=X)},Q6=function(t,r,a,s,u){var c=360,f=on(u),h=parseFloat(u)*(f&&~u.indexOf("rad")?bs:1),p=h-s,g=s+p+"deg",y,x;return f&&(y=u.split("_")[1],y==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-360)),y==="cw"&&p<0?p=(p+c*xw)%c-~~(p/c)*c:y==="ccw"&&p>0&&(p=(p-c*xw)%c-~~(p/c)*c)),t._pt=x=new Jn(t._pt,r,a,s,p,D6),x.e=g,x.u="deg",t._props.push(a),x},Aw=function(t,r){for(var a in r)t[a]=r[a];return t},K6=function(t,r,a){var s=Aw({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,h,p,g,y,x,v,w;s.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),c[Ae]=r,f=gc(a,1),Fa(a,Ae),a.setAttribute("transform",p)):(p=getComputedStyle(a)[Ae],c[Ae]=r,f=gc(a,1),c[Ae]=p);for(h in sa)p=s[h],g=f[h],p!==g&&u.indexOf(h)<0&&(v=Sn(p),w=Sn(g),y=v!==w?$a(a,h,p,w):parseFloat(p),x=parseFloat(g),t._pt=new Jn(t._pt,f,h,y,x-y,ng),t._pt.u=w||0,t._props.push(h));Aw(f,s)};Wn("padding,margin,Width,Radius",function(n,t){var r="Top",a="Right",s="Bottom",u="Left",c=(t<3?[r,a,s,u]:[r+u,r+a,s+a,s+u]).map(function(f){return t<2?n+f:"border"+f+n});Jd[t>1?"border"+n:n]=function(f,h,p,g,y){var x,v;if(arguments.length<4)return x=c.map(function(w){return Wr(f,w,p)}),v=x.join(" "),v.split(x[0]).length===5?x[0]:v;x=(g+"").split(" "),v={},c.forEach(function(w,S){return v[w]=x[S]=x[S]||x[(S-1)/2|0]}),f.init(h,v,y)}});var _5={name:"css",register:rg,targetTest:function(t){return t.style&&t.nodeType},init:function(t,r,a,s,u){var c=this._props,f=t.style,h=a.vars.startAt,p,g,y,x,v,w,S,C,A,D,R,O,M,P,z,V,X;wy||rg(),this.styles=this.styles||p5(t),V=this.styles.props,this.tween=a;for(S in r)if(S!=="autoRound"&&(g=r[S],!(gi[S]&&i5(S,r,a,s,t,u)))){if(v=typeof g,w=Jd[S],v==="function"&&(g=g.call(a,s,t,u),v=typeof g),v==="string"&&~g.indexOf("random(")&&(g=dc(g)),w)w(this,t,S,g,a)&&(z=1);else if(S.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(S)+"").trim(),g+="",Ha.lastIndex=0,Ha.test(p)||(C=Sn(p),A=Sn(g),A?C!==A&&(p=$a(t,S,p,A)+A):C&&(g+=C)),this.add(f,"setProperty",p,g,s,u,0,0,S),c.push(S),V.push(S,0,f[S]);else if(v!=="undefined"){if(h&&S in h?(p=typeof h[S]=="function"?h[S].call(a,s,t,u):h[S],on(p)&&~p.indexOf("random(")&&(p=dc(p)),Sn(p+"")||p==="auto"||(p+=wi.units[S]||Sn(Wr(t,S))||""),(p+"").charAt(1)==="="&&(p=Wr(t,S))):p=Wr(t,S),x=parseFloat(p),D=v==="string"&&g.charAt(1)==="="&&g.substr(0,2),D&&(g=g.substr(2)),y=parseFloat(g),S in gr&&(S==="autoAlpha"&&(x===1&&Wr(t,"visibility")==="hidden"&&y&&(x=0),V.push("visibility",0,f.visibility),Pa(this,f,"visibility",x?"inherit":"hidden",y?"inherit":"hidden",!y)),S!=="scale"&&S!=="transform"&&(S=gr[S],~S.indexOf(",")&&(S=S.split(",")[0]))),R=S in sa,R){if(this.styles.save(S),X=g,v==="string"&&g.substring(0,6)==="var(--"){if(g=_i(t,g.substring(4,g.indexOf(")"))),g.substring(0,5)==="calc("){var K=t.style.perspective;t.style.perspective=g,g=_i(t,"perspective"),K?t.style.perspective=K:Fa(t,"perspective")}y=parseFloat(g)}if(O||(M=t._gsap,M.renderTransform&&!r.parseTransform||gc(t,r.parseTransform),P=r.smoothOrigin!==!1&&M.smooth,O=this._pt=new Jn(this._pt,f,Ae,0,1,M.renderTransform,M,0,-1),O.dep=1),S==="scale")this._pt=new Jn(this._pt,M,"scaleY",M.scaleY,(D?Ko(M.scaleY,D+y):y)-M.scaleY||0,ng),this._pt.u=0,c.push("scaleY",S),S+="X";else if(S==="transformOrigin"){V.push(ti,0,f[ti]),g=X6(g),M.svg?ag(t,g,0,P,0,this):(A=parseFloat(g.split(" ")[2])||0,A!==M.zOrigin&&Pa(this,M,"zOrigin",M.zOrigin,A),Pa(this,f,S,th(p),th(g)));continue}else if(S==="svgOrigin"){ag(t,g,1,P,0,this);continue}else if(S in v5){Q6(this,M,S,x,D?Ko(x,D+g):g);continue}else if(S==="smoothOrigin"){Pa(this,M,"smooth",M.smooth,g);continue}else if(S==="force3D"){M[S]=g;continue}else if(S==="transform"){K6(this,g,t);continue}}else S in f||(S=pl(S)||S);if(R||(y||y===0)&&(x||x===0)&&!M6.test(g)&&S in f)C=(p+"").substr((x+"").length),y||(y=0),A=Sn(g)||(S in wi.units?wi.units[S]:C),C!==A&&(x=$a(t,S,p,A)),this._pt=new Jn(this._pt,R?M:f,S,x,(D?Ko(x,D+y):y)-x,!R&&(A==="px"||S==="zIndex")&&r.autoRound!==!1?z6:ng),this._pt.u=A||0,R&&X!==g?(this._pt.b=p,this._pt.e=X,this._pt.r=j6):C!==A&&A!=="%"&&(this._pt.b=p,this._pt.r=O6);else if(S in f)G6.call(this,t,S,p,D?D+g:g);else if(S in t)this.add(t,S,p||t[S],D?D+g:g,s,u);else if(S!=="parseTransform"){dy(S,g);continue}R||(S in f?V.push(S,0,f[S]):typeof t[S]=="function"?V.push(S,2,t[S]()):V.push(S,1,p||t[S])),c.push(S)}}z&&u5(this)},render:function(t,r){if(r.tween._time||!Sy())for(var a=r._pt;a;)a.r(t,a.d),a=a._next;else r.styles.revert()},get:Wr,aliases:gr,getSetter:function(t,r,a){var s=gr[r];return s&&s.indexOf(",")<0&&(r=s),r in sa&&r!==ti&&(t._gsap.x||Wr(t,"x"))?a&&vw===a?r==="scale"?P6:N6:(vw=a||{})&&(r==="scale"?B6:V6):t.style&&!uy(t.style[r])?k6:~r.indexOf("-")?L6:by(t,r)},core:{_removeProperty:Fa,_getMatrix:Ey}};ei.utils.checkPrefix=pl;ei.core.getStyleSaver=p5;(function(n,t,r,a){var s=Wn(n+","+t+","+r,function(u){sa[u]=1});Wn(t,function(u){wi.units[u]="deg",v5[u]=1}),gr[s[13]]=n+","+t,Wn(a,function(u){var c=u.split(":");gr[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){wi.units[n]="px"});ei.registerPlugin(_5);var yt=ei.registerPlugin(_5)||ei;yt.core.Tween;function Z6(n,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function I6(n,t,r){return t&&Z6(n.prototype,t),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn,Md,xi,Ba,Va,Wo,w5,_s,Jo,S5,ta,nr,T5,E5=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},A5=1,Qo=[],Pt=[],Sr=[],Yu=Date.now,sg=function(t,r){return r},W6=function(){var t=Jo.core,r=t.bridge||{},a=t._scrollers,s=t._proxies;a.push.apply(a,Pt),s.push.apply(s,Sr),Pt=a,Sr=s,sg=function(c,f){return r[c](f)}},Ya=function(t,r){return~Sr.indexOf(t)&&Sr[Sr.indexOf(t)+1][r]},Gu=function(t){return!!~S5.indexOf(t)},kn=function(t,r,a,s,u){return t.addEventListener(r,a,{passive:s!==!1,capture:!!u})},zn=function(t,r,a,s){return t.removeEventListener(r,a,!!s)},Xf="scrollLeft",qf="scrollTop",og=function(){return ta&&ta.isPressed||Pt.cache++},eh=function(t,r){var a=function s(u){if(u||u===0){A5&&(xi.history.scrollRestoration="manual");var c=ta&&ta.isPressed;u=s.v=Math.round(u)||(ta&&ta.iOS?1:0),t(u),s.cacheID=Pt.cache,c&&sg("ss",u)}else(r||Pt.cache!==s.cacheID||sg("ref"))&&(s.cacheID=Pt.cache,s.v=t());return s.v+s.offset};return a.offset=0,t&&a},Bn={s:Xf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:eh(function(n){return arguments.length?xi.scrollTo(n,Je.sc()):xi.pageXOffset||Ba[Xf]||Va[Xf]||Wo[Xf]||0})},Je={s:qf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:eh(function(n){return arguments.length?xi.scrollTo(Bn.sc(),n):xi.pageYOffset||Ba[qf]||Va[qf]||Wo[qf]||0})},Qn=function(t,r){return(r&&r._ctx&&r._ctx.selector||pn.utils.toArray)(t)[0]||(typeof t=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},J6=function(t,r){for(var a=r.length;a--;)if(r[a]===t||r[a].contains(t))return!0;return!1},Qa=function(t,r){var a=r.s,s=r.sc;Gu(t)&&(t=Ba.scrollingElement||Va);var u=Pt.indexOf(t),c=s===Je.sc?1:2;!~u&&(u=Pt.push(t)-1),Pt[u+c]||kn(t,"scroll",og);var f=Pt[u+c],h=f||(Pt[u+c]=eh(Ya(t,a),!0)||(Gu(t)?s:eh(function(p){return arguments.length?t[a]=p:t[a]})));return h.target=t,f||(h.smooth=pn.getProperty(t,"scrollBehavior")==="smooth"),h},lg=function(t,r,a){var s=t,u=t,c=Yu(),f=c,h=r||50,p=Math.max(500,h*3),g=function(w,S){var C=Yu();S||C-c>h?(u=s,s=w,f=c,c=C):a?s+=w:s=u+(w-u)/(C-f)*(c-f)},y=function(){u=s=a?0:s,f=c=0},x=function(w){var S=f,C=u,A=Yu();return(w||w===0)&&w!==s&&g(w),c===f||A-f>p?0:(s+(a?C:-C))/((a?A:c)-S)*1e3};return{update:g,reset:y,getVelocity:x}},_u=function(t,r){return r&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Cw=function(t){var r=Math.max.apply(Math,t),a=Math.min.apply(Math,t);return Math.abs(r)>=Math.abs(a)?r:a},C5=function(){Jo=pn.core.globals().ScrollTrigger,Jo&&Jo.core&&W6()},R5=function(t){return pn=t||E5(),!Md&&pn&&typeof document<"u"&&document.body&&(xi=window,Ba=document,Va=Ba.documentElement,Wo=Ba.body,S5=[xi,Ba,Va,Wo],pn.utils.clamp,T5=pn.core.context||function(){},_s="onpointerenter"in Wo?"pointer":"mouse",w5=Ve.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,nr=Ve.eventTypes=("ontouchstart"in Va?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Va?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return A5=0},500),Md=1),Jo||C5(),Md};Bn.op=Je;Pt.cache=0;var Ve=function(){function n(r){this.init(r)}var t=n.prototype;return t.init=function(a){Md||R5(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Jo||C5();var s=a.tolerance,u=a.dragMinimum,c=a.type,f=a.target,h=a.lineHeight,p=a.debounce,g=a.preventDefault,y=a.onStop,x=a.onStopDelay,v=a.ignore,w=a.wheelSpeed,S=a.event,C=a.onDragStart,A=a.onDragEnd,D=a.onDrag,R=a.onPress,O=a.onRelease,M=a.onRight,P=a.onLeft,z=a.onUp,V=a.onDown,X=a.onChangeX,K=a.onChangeY,ot=a.onChange,tt=a.onToggleX,wt=a.onToggleY,pt=a.onHover,gt=a.onHoverEnd,Y=a.onMove,$=a.ignoreCheck,J=a.isNormalizer,at=a.onGestureStart,T=a.onGestureEnd,Q=a.onWheel,et=a.onEnable,it=a.onDisable,rt=a.onClick,mt=a.scrollSpeed,st=a.capture,Ot=a.allowClicks,Et=a.lockAxis,Ft=a.onLockAxis;this.target=f=Qn(f)||Va,this.vars=a,v&&(v=pn.utils.toArray(v)),s=s||1e-9,u=u||0,w=w||1,mt=mt||1,c=c||"wheel,touch,pointer",p=p!==!1,h||(h=parseFloat(xi.getComputedStyle(Wo).lineHeight)||22);var gn,pe,ie,Bt,me,yn,Rn,F=this,Mn=0,Ei=0,Qi=a.passive||!g&&a.passive!==!1,oe=Qa(f,Bn),Ki=Qa(f,Je),Zi=oe(),Rr=Ki(),Ue=~c.indexOf("touch")&&!~c.indexOf("pointer")&&nr[0]==="pointerdown",Un=Gu(f),Yt=f.ownerDocument||Ba,He=[0,0,0],ce=[0,0,0],Ii=0,Ia=function(){return Ii=Yu()},Re=function(vt,Mt){return(F.event=vt)&&v&&J6(vt.target,v)||Mt&&Ue&&vt.pointerType!=="touch"||$&&$(vt,Mt)},Mr=function(){F._vx.reset(),F._vy.reset(),pe.pause(),y&&y(F)},Hn=function(){var vt=F.deltaX=Cw(He),Mt=F.deltaY=Cw(ce),nt=Math.abs(vt)>=s,ft=Math.abs(Mt)>=s;ot&&(nt||ft)&&ot(F,vt,Mt,He,ce),nt&&(M&&F.deltaX>0&&M(F),P&&F.deltaX<0&&P(F),X&&X(F),tt&&F.deltaX<0!=Mn<0&&tt(F),Mn=F.deltaX,He[0]=He[1]=He[2]=0),ft&&(V&&F.deltaY>0&&V(F),z&&F.deltaY<0&&z(F),K&&K(F),wt&&F.deltaY<0!=Ei<0&&wt(F),Ei=F.deltaY,ce[0]=ce[1]=ce[2]=0),(Bt||ie)&&(Y&&Y(F),ie&&(C&&ie===1&&C(F),D&&D(F),ie=0),Bt=!1),yn&&!(yn=!1)&&Ft&&Ft(F),me&&(Q(F),me=!1),gn=0},Yn=function(vt,Mt,nt){He[nt]+=vt,ce[nt]+=Mt,F._vx.update(vt),F._vy.update(Mt),p?gn||(gn=requestAnimationFrame(Hn)):Hn()},Wi=function(vt,Mt){Et&&!Rn&&(F.axis=Rn=Math.abs(vt)>Math.abs(Mt)?"x":"y",yn=!0),Rn!=="y"&&(He[2]+=vt,F._vx.update(vt,!0)),Rn!=="x"&&(ce[2]+=Mt,F._vy.update(Mt,!0)),p?gn||(gn=requestAnimationFrame(Hn)):Hn()},Gn=function(vt){if(!Re(vt,1)){vt=_u(vt,g);var Mt=vt.clientX,nt=vt.clientY,ft=Mt-F.x,ct=nt-F.y,Tt=F.isDragging;F.x=Mt,F.y=nt,(Tt||(ft||ct)&&(Math.abs(F.startX-Mt)>=u||Math.abs(F.startY-nt)>=u))&&(ie||(ie=Tt?2:1),Tt||(F.isDragging=!0),Wi(ft,ct))}},Dr=F.onPress=function(At){Re(At,1)||At&&At.button||(F.axis=Rn=null,pe.pause(),F.isPressed=!0,At=_u(At),Mn=Ei=0,F.startX=F.x=At.clientX,F.startY=F.y=At.clientY,F._vx.reset(),F._vy.reset(),kn(J?f:Yt,nr[1],Gn,Qi,!0),F.deltaX=F.deltaY=0,R&&R(F))},Rt=F.onRelease=function(At){if(!Re(At,1)){zn(J?f:Yt,nr[1],Gn,!0);var vt=!isNaN(F.y-F.startY),Mt=F.isDragging,nt=Mt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),ft=_u(At);!nt&&vt&&(F._vx.reset(),F._vy.reset(),g&&Ot&&pn.delayedCall(.08,function(){if(Yu()-Ii>300&&!At.defaultPrevented){if(At.target.click)At.target.click();else if(Yt.createEvent){var ct=Yt.createEvent("MouseEvents");ct.initMouseEvent("click",!0,!0,xi,1,ft.screenX,ft.screenY,ft.clientX,ft.clientY,!1,!1,!1,!1,0,null),At.target.dispatchEvent(ct)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,y&&Mt&&!J&&pe.restart(!0),ie&&Hn(),A&&Mt&&A(F),O&&O(F,nt)}},ar=function(vt){return vt.touches&&vt.touches.length>1&&(F.isGesturing=!0)&&at(vt,F.isDragging)},Dn=function(){return(F.isGesturing=!1)||T(F)},ln=function(vt){if(!Re(vt)){var Mt=oe(),nt=Ki();Yn((Mt-Zi)*mt,(nt-Rr)*mt,1),Zi=Mt,Rr=nt,y&&pe.restart(!0)}},ni=function(vt){if(!Re(vt)){vt=_u(vt,g),Q&&(me=!0);var Mt=(vt.deltaMode===1?h:vt.deltaMode===2?xi.innerHeight:1)*w;Yn(vt.deltaX*Mt,vt.deltaY*Mt,0),y&&!J&&pe.restart(!0)}},sr=function(vt){if(!Re(vt)){var Mt=vt.clientX,nt=vt.clientY,ft=Mt-F.x,ct=nt-F.y;F.x=Mt,F.y=nt,Bt=!0,y&&pe.restart(!0),(ft||ct)&&Wi(ft,ct)}},Or=function(vt){F.event=vt,pt(F)},ii=function(vt){F.event=vt,gt(F)},jr=function(vt){return Re(vt)||_u(vt,g)&&rt(F)};pe=F._dc=pn.delayedCall(x||.25,Mr).pause(),F.deltaX=F.deltaY=0,F._vx=lg(0,50,!0),F._vy=lg(0,50,!0),F.scrollX=oe,F.scrollY=Ki,F.isDragging=F.isGesturing=F.isPressed=!1,T5(this),F.enable=function(At){return F.isEnabled||(kn(Un?Yt:f,"scroll",og),c.indexOf("scroll")>=0&&kn(Un?Yt:f,"scroll",ln,Qi,st),c.indexOf("wheel")>=0&&kn(f,"wheel",ni,Qi,st),(c.indexOf("touch")>=0&&w5||c.indexOf("pointer")>=0)&&(kn(f,nr[0],Dr,Qi,st),kn(Yt,nr[2],Rt),kn(Yt,nr[3],Rt),Ot&&kn(f,"click",Ia,!0,!0),rt&&kn(f,"click",jr),at&&kn(Yt,"gesturestart",ar),T&&kn(Yt,"gestureend",Dn),pt&&kn(f,_s+"enter",Or),gt&&kn(f,_s+"leave",ii),Y&&kn(f,_s+"move",sr)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=Bt=ie=!1,F._vx.reset(),F._vy.reset(),Zi=oe(),Rr=Ki(),At&&At.type&&Dr(At),et&&et(F)),F},F.disable=function(){F.isEnabled&&(Qo.filter(function(At){return At!==F&&Gu(At.target)}).length||zn(Un?Yt:f,"scroll",og),F.isPressed&&(F._vx.reset(),F._vy.reset(),zn(J?f:Yt,nr[1],Gn,!0)),zn(Un?Yt:f,"scroll",ln,st),zn(f,"wheel",ni,st),zn(f,nr[0],Dr,st),zn(Yt,nr[2],Rt),zn(Yt,nr[3],Rt),zn(f,"click",Ia,!0),zn(f,"click",jr),zn(Yt,"gesturestart",ar),zn(Yt,"gestureend",Dn),zn(f,_s+"enter",Or),zn(f,_s+"leave",ii),zn(f,_s+"move",sr),F.isEnabled=F.isPressed=F.isDragging=!1,it&&it(F))},F.kill=F.revert=function(){F.disable();var At=Qo.indexOf(F);At>=0&&Qo.splice(At,1),ta===F&&(ta=0)},Qo.push(F),J&&Gu(f)&&(ta=F),F.enable(S)},I6(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Ve.version="3.15.0";Ve.create=function(n){return new Ve(n)};Ve.register=R5;Ve.getAll=function(){return Qo.slice()};Ve.getById=function(n){return Qo.filter(function(t){return t.vars.id===n})[0]};E5()&&pn.registerPlugin(Ve);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var lt,Bo,Nt,ne,yi,Jt,Ay,nh,yc,Xu,Mu,Ff,bn,_h,ug,Nn,Rw,Mw,Vo,M5,i0,D5,Ln,cg,O5,j5,ka,fg,Cy,tl,Ry,qu,dg,r0,$f=1,wn=Date.now,a0=wn(),qi=0,Du=0,Dw=function(t,r,a){var s=mi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return a["_"+r+"Clamp"]=s,s?t.substr(6,t.length-7):t},Ow=function(t,r){return r&&(!mi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},tj=function n(){return Du&&requestAnimationFrame(n)},jw=function(){return _h=1},zw=function(){return _h=0},hr=function(t){return t},Ou=function(t){return Math.round(t*1e5)/1e5||0},z5=function(){return typeof window<"u"},k5=function(){return lt||z5()&&(lt=window.gsap)&&lt.registerPlugin&&lt},Vs=function(t){return!!~Ay.indexOf(t)},L5=function(t){return(t==="Height"?Ry:Nt["inner"+t])||yi["client"+t]||Jt["client"+t]},N5=function(t){return Ya(t,"getBoundingClientRect")||(Vs(t)?function(){return kd.width=Nt.innerWidth,kd.height=Ry,kd}:function(){return Jr(t)})},ej=function(t,r,a){var s=a.d,u=a.d2,c=a.a;return(c=Ya(t,"getBoundingClientRect"))?function(){return c()[s]}:function(){return(r?L5(u):t["client"+u])||0}},nj=function(t,r){return!r||~Sr.indexOf(t)?N5(t):function(){return kd}},yr=function(t,r){var a=r.s,s=r.d2,u=r.d,c=r.a;return Math.max(0,(a="scroll"+s)&&(c=Ya(t,a))?c()-N5(t)()[u]:Vs(t)?(yi[a]||Jt[a])-L5(s):t[a]-t["offset"+s])},Qf=function(t,r){for(var a=0;a<Vo.length;a+=3)(!r||~r.indexOf(Vo[a+1]))&&t(Vo[a],Vo[a+1],Vo[a+2])},mi=function(t){return typeof t=="string"},Tn=function(t){return typeof t=="function"},ju=function(t){return typeof t=="number"},ws=function(t){return typeof t=="object"},wu=function(t,r,a){return t&&t.progress(r?0:1)&&a&&t.pause()},Co=function(t,r,a){if(t.enabled){var s=t._ctx?t._ctx.add(function(){return r(t,a)}):r(t,a);s&&s.totalTime&&(t.callbackAnimation=s)}},Ro=Math.abs,P5="left",B5="top",My="right",Dy="bottom",Ns="width",Ps="height",Fu="Right",$u="Left",Qu="Top",Ku="Bottom",Fe="padding",Hi="margin",ml="Width",Oy="Height",We="px",Yi=function(t){return Nt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},ij=function(t){var r=Yi(t).position;t.style.position=r==="absolute"||r==="fixed"?r:"relative"},kw=function(t,r){for(var a in r)a in t||(t[a]=r[a]);return t},Jr=function(t,r){var a=r&&Yi(t)[ug]!=="matrix(1, 0, 0, 1, 0, 0)"&&lt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),s=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return a&&a.progress(0).kill(),s},ih=function(t,r){var a=r.d2;return t["offset"+a]||t["client"+a]||0},V5=function(t){var r=[],a=t.labels,s=t.duration(),u;for(u in a)r.push(a[u]/s);return r},rj=function(t){return function(r){return lt.utils.snap(V5(t),r)}},jy=function(t){var r=lt.utils.snap(t),a=Array.isArray(t)&&t.slice(0).sort(function(s,u){return s-u});return a?function(s,u,c){c===void 0&&(c=.001);var f;if(!u)return r(s);if(u>0){for(s-=c,f=0;f<a.length;f++)if(a[f]>=s)return a[f];return a[f-1]}else for(f=a.length,s+=c;f--;)if(a[f]<=s)return a[f];return a[0]}:function(s,u,c){c===void 0&&(c=.001);var f=r(s);return!u||Math.abs(f-s)<c||f-s<0==u<0?f:r(u<0?s-t:s+t)}},aj=function(t){return function(r,a){return jy(V5(t))(r,a.direction)}},Kf=function(t,r,a,s){return a.split(",").forEach(function(u){return t(r,u,s)})},an=function(t,r,a,s,u){return t.addEventListener(r,a,{passive:!s,capture:!!u})},rn=function(t,r,a,s){return t.removeEventListener(r,a,!!s)},Zf=function(t,r,a){a=a&&a.wheelHandler,a&&(t(r,"wheel",a),t(r,"touchmove",a))},Lw={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},If={toggleActions:"play",anticipatePin:0},rh={top:0,left:0,center:.5,bottom:1,right:1},Dd=function(t,r){if(mi(t)){var a=t.indexOf("="),s=~a?+(t.charAt(a-1)+1)*parseFloat(t.substr(a+1)):0;~a&&(t.indexOf("%")>a&&(s*=r/100),t=t.substr(0,a-1)),t=s+(t in rh?rh[t]*r:~t.indexOf("%")?parseFloat(t)*r/100:parseFloat(t)||0)}return t},Wf=function(t,r,a,s,u,c,f,h){var p=u.startColor,g=u.endColor,y=u.fontSize,x=u.indent,v=u.fontWeight,w=ne.createElement("div"),S=Vs(a)||Ya(a,"pinType")==="fixed",C=t.indexOf("scroller")!==-1,A=S?Jt:a.tagName==="IFRAME"?a.contentDocument.body:a,D=t.indexOf("start")!==-1,R=D?p:g,O="border-color:"+R+";font-size:"+y+";color:"+R+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return O+="position:"+((C||h)&&S?"fixed;":"absolute;"),(C||h||!S)&&(O+=(s===Je?My:Dy)+":"+(c+parseFloat(x))+"px;"),f&&(O+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),w._isStart=D,w.setAttribute("class","gsap-marker-"+t+(r?" marker-"+r:"")),w.style.cssText=O,w.innerText=r||r===0?t+"-"+r:t,A.children[0]?A.insertBefore(w,A.children[0]):A.appendChild(w),w._offset=w["offset"+s.op.d2],Od(w,0,s,D),w},Od=function(t,r,a,s){var u={display:"block"},c=a[s?"os2":"p2"],f=a[s?"p2":"os2"];t._isFlipped=s,u[a.a+"Percent"]=s?-100:0,u[a.a]=s?"1px":0,u["border"+c+ml]=1,u["border"+f+ml]=0,u[a.p]=r+"px",lt.set(t,u)},zt=[],hg={},vc,Nw=function(){return wn()-qi>34&&(vc||(vc=requestAnimationFrame(na)))},Mo=function(){(!Ln||!Ln.isPressed||Ln.startX>Jt.clientWidth)&&(Pt.cache++,Ln?vc||(vc=requestAnimationFrame(na)):na(),qi||Hs("scrollStart"),qi=wn())},s0=function(){j5=Nt.innerWidth,O5=Nt.innerHeight},zu=function(t){Pt.cache++,(t===!0||!bn&&!D5&&!ne.fullscreenElement&&!ne.webkitFullscreenElement&&(!cg||j5!==Nt.innerWidth||Math.abs(Nt.innerHeight-O5)>Nt.innerHeight*.25))&&nh.restart(!0)},Us={},sj=[],U5=function n(){return rn(kt,"scrollEnd",n)||Cs(!0)},Hs=function(t){return Us[t]&&Us[t].map(function(r){return r()})||sj},pi=[],H5=function(t){for(var r=0;r<pi.length;r+=5)(!t||pi[r+4]&&pi[r+4].query===t)&&(pi[r].style.cssText=pi[r+1],pi[r].getBBox&&pi[r].setAttribute("transform",pi[r+2]||""),pi[r+3].uncache=1)},Y5=function(){return Pt.forEach(function(t){return Tn(t)&&++t.cacheID&&(t.rec=t())})},zy=function(t,r){var a;for(Nn=0;Nn<zt.length;Nn++)a=zt[Nn],a&&(!r||a._ctx===r)&&(t?a.kill(1):a.revert(!0,!0));qu=!0,r&&H5(r),r||Hs("revert")},G5=function(t,r){Pt.cache++,(r||!Pn)&&Pt.forEach(function(a){return Tn(a)&&a.cacheID++&&(a.rec=0)}),mi(t)&&(Nt.history.scrollRestoration=Cy=t)},Pn,Bs=0,Pw,oj=function(){if(Pw!==Bs){var t=Pw=Bs;requestAnimationFrame(function(){return t===Bs&&Cs(!0)})}},X5=function(){Jt.appendChild(tl),Ry=!Ln&&tl.offsetHeight||Nt.innerHeight,Jt.removeChild(tl)},Bw=function(t){return yc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=t?"none":"block"})},Cs=function(t,r){if(yi=ne.documentElement,Jt=ne.body,Ay=[Nt,ne,yi,Jt],qi&&!t&&!qu){an(kt,"scrollEnd",U5);return}X5(),Pn=kt.isRefreshing=!0,qu||Y5();var a=Hs("refreshInit");M5&&kt.sort(),r||zy(),Pt.forEach(function(s){Tn(s)&&(s.smooth&&(s.target.style.scrollBehavior="auto"),s(0))}),zt.slice(0).forEach(function(s){return s.refresh()}),qu=!1,zt.forEach(function(s){if(s._subPinOffset&&s.pin){var u=s.vars.horizontal?"offsetWidth":"offsetHeight",c=s.pin[u];s.revert(!0,1),s.adjustPinSpacing(s.pin[u]-c),s.refresh()}}),dg=1,Bw(!0),zt.forEach(function(s){var u=yr(s.scroller,s._dir),c=s.vars.end==="max"||s._endClamp&&s.end>u,f=s._startClamp&&s.start>=u;(c||f)&&s.setPositions(f?u-1:s.start,c?Math.max(f?u:s.start+1,u):s.end,!0)}),Bw(!1),dg=0,a.forEach(function(s){return s&&s.render&&s.render(-1)}),Pt.forEach(function(s){Tn(s)&&(s.smooth&&requestAnimationFrame(function(){return s.target.style.scrollBehavior="smooth"}),s.rec&&s(s.rec))}),G5(Cy,1),nh.pause(),Bs++,Pn=2,na(2),zt.forEach(function(s){return Tn(s.vars.onRefresh)&&s.vars.onRefresh(s)}),Pn=kt.isRefreshing=!1,Hs("refresh")},pg=0,jd=1,Zu,na=function(t){if(t===2||!Pn&&!qu){kt.isUpdating=!0,Zu&&Zu.update(0);var r=zt.length,a=wn(),s=a-a0>=50,u=r&&zt[0].scroll();if(jd=pg>u?-1:1,Pn||(pg=u),s&&(qi&&!_h&&a-qi>200&&(qi=0,Hs("scrollEnd")),Mu=a0,a0=a),jd<0){for(Nn=r;Nn-- >0;)zt[Nn]&&zt[Nn].update(0,s);jd=1}else for(Nn=0;Nn<r;Nn++)zt[Nn]&&zt[Nn].update(0,s);kt.isUpdating=!1}vc=0},mg=[P5,B5,Dy,My,Hi+Ku,Hi+Fu,Hi+Qu,Hi+$u,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zd=mg.concat([Ns,Ps,"boxSizing","max"+ml,"max"+Oy,"position",Hi,Fe,Fe+Qu,Fe+Fu,Fe+Ku,Fe+$u]),lj=function(t,r,a){el(a);var s=t._gsap;if(s.spacerIsNative)el(s.spacerState);else if(t._gsap.swappedIn){var u=r.parentNode;u&&(u.insertBefore(t,r),u.removeChild(r))}t._gsap.swappedIn=!1},o0=function(t,r,a,s){if(!t._gsap.swappedIn){for(var u=mg.length,c=r.style,f=t.style,h;u--;)h=mg[u],c[h]=a[h];c.position=a.position==="absolute"?"absolute":"relative",a.display==="inline"&&(c.display="inline-block"),f[Dy]=f[My]="auto",c.flexBasis=a.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Ns]=ih(t,Bn)+We,c[Ps]=ih(t,Je)+We,c[Fe]=f[Hi]=f[B5]=f[P5]="0",el(s),f[Ns]=f["max"+ml]=a[Ns],f[Ps]=f["max"+Oy]=a[Ps],f[Fe]=a[Fe],t.parentNode!==r&&(t.parentNode.insertBefore(r,t),r.appendChild(t)),t._gsap.swappedIn=!0}},uj=/([A-Z])/g,el=function(t){if(t){var r=t.t.style,a=t.length,s=0,u,c;for((t.t._gsap||lt.core.getCache(t.t)).uncache=1;s<a;s+=2)c=t[s+1],u=t[s],c?r[u]=c:r[u]&&r.removeProperty(u.replace(uj,"-$1").toLowerCase())}},Jf=function(t){for(var r=zd.length,a=t.style,s=[],u=0;u<r;u++)s.push(zd[u],a[zd[u]]);return s.t=t,s},cj=function(t,r,a){for(var s=[],u=t.length,c=a?8:0,f;c<u;c+=2)f=t[c],s.push(f,f in r?r[f]:t[c+1]);return s.t=t.t,s},kd={left:0,top:0},Vw=function(t,r,a,s,u,c,f,h,p,g,y,x,v,w){Tn(t)&&(t=t(h)),mi(t)&&t.substr(0,3)==="max"&&(t=x+(t.charAt(4)==="="?Dd("0"+t.substr(3),a):0));var S=v?v.time():0,C,A,D;if(v&&v.seek(0),isNaN(t)||(t=+t),ju(t))v&&(t=lt.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,x,t)),f&&Od(f,a,s,!0);else{Tn(r)&&(r=r(h));var R=(t||"0").split(" "),O,M,P,z;D=Qn(r,h)||Jt,O=Jr(D)||{},(!O||!O.left&&!O.top)&&Yi(D).display==="none"&&(z=D.style.display,D.style.display="block",O=Jr(D),z?D.style.display=z:D.style.removeProperty("display")),M=Dd(R[0],O[s.d]),P=Dd(R[1]||"0",a),t=O[s.p]-p[s.p]-g+M+u-P,f&&Od(f,P,s,a-P<20||f._isStart&&P>20),a-=a-P}if(w&&(h[w]=t||-.001,t<0&&(t=0)),c){var V=t+a,X=c._isStart;C="scroll"+s.d2,Od(c,V,s,X&&V>20||!X&&(y?Math.max(Jt[C],yi[C]):c.parentNode[C])<=V+1),y&&(p=Jr(f),y&&(c.style[s.op.p]=p[s.op.p]-s.op.m-c._offset+We))}return v&&D&&(C=Jr(D),v.seek(x),A=Jr(D),v._caScrollDist=C[s.p]-A[s.p],t=t/v._caScrollDist*x),v&&v.seek(S),v?t:Math.round(t)},fj=/(webkit|moz|length|cssText|inset)/i,Uw=function(t,r,a,s){if(t.parentNode!==r){var u=t.style,c,f;if(r===Jt){t._stOrig=u.cssText,f=Yi(t);for(c in f)!+c&&!fj.test(c)&&f[c]&&typeof u[c]=="string"&&c!=="0"&&(u[c]=f[c]);u.top=a,u.left=s}else u.cssText=t._stOrig;lt.core.getCache(t).uncache=1,r.appendChild(t)}},q5=function(t,r,a){var s=r,u=s;return function(c){var f=Math.round(t());return f!==s&&f!==u&&Math.abs(f-s)>3&&Math.abs(f-u)>3&&(c=f,a&&a()),u=s,s=Math.round(c),s}},td=function(t,r,a){var s={};s[r.p]="+="+a,lt.set(t,s)},Hw=function(t,r){var a=Qa(t,r),s="_scroll"+r.p2,u=function c(f,h,p,g,y){var x=c.tween,v=h.onComplete,w={};p=p||a();var S=q5(a,p,function(){x.kill(),c.tween=0});return y=g&&y||0,g=g||f-p,x&&x.kill(),h[s]=f,h.inherit=!1,h.modifiers=w,w[s]=function(){return S(p+g*x.ratio+y*x.ratio*x.ratio)},h.onUpdate=function(){Pt.cache++,c.tween&&na()},h.onComplete=function(){c.tween=0,v&&v.call(x)},x=c.tween=lt.to(t,h),x};return t[s]=a,a.wheelHandler=function(){return u.tween&&u.tween.kill()&&(u.tween=0)},an(t,"wheel",a.wheelHandler),kt.isTouch&&an(t,"touchmove",a.wheelHandler),u},kt=function(){function n(r,a){Bo||n.register(lt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),fg(this),this.init(r,a)}var t=n.prototype;return t.init=function(a,s){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Du){this.update=this.refresh=this.kill=hr;return}a=kw(mi(a)||ju(a)||a.nodeType?{trigger:a}:a,If);var u=a,c=u.onUpdate,f=u.toggleClass,h=u.id,p=u.onToggle,g=u.onRefresh,y=u.scrub,x=u.trigger,v=u.pin,w=u.pinSpacing,S=u.invalidateOnRefresh,C=u.anticipatePin,A=u.onScrubComplete,D=u.onSnapComplete,R=u.once,O=u.snap,M=u.pinReparent,P=u.pinSpacer,z=u.containerAnimation,V=u.fastScrollEnd,X=u.preventOverlaps,K=a.horizontal||a.containerAnimation&&a.horizontal!==!1?Bn:Je,ot=!y&&y!==0,tt=Qn(a.scroller||Nt),wt=lt.core.getCache(tt),pt=Vs(tt),gt=("pinType"in a?a.pinType:Ya(tt,"pinType")||pt&&"fixed")==="fixed",Y=[a.onEnter,a.onLeave,a.onEnterBack,a.onLeaveBack],$=ot&&a.toggleActions.split(" "),J="markers"in a?a.markers:If.markers,at=pt?0:parseFloat(Yi(tt)["border"+K.p2+ml])||0,T=this,Q=a.onRefreshInit&&function(){return a.onRefreshInit(T)},et=ej(tt,pt,K),it=nj(tt,pt),rt=0,mt=0,st=0,Ot=Qa(tt,K),Et,Ft,gn,pe,ie,Bt,me,yn,Rn,F,Mn,Ei,Qi,oe,Ki,Zi,Rr,Ue,Un,Yt,He,ce,Ii,Ia,Re,Mr,Hn,Yn,Wi,Gn,Dr,Rt,ar,Dn,ln,ni,sr,Or,ii;if(T._startClamp=T._endClamp=!1,T._dir=K,C*=45,T.scroller=tt,T.scroll=z?z.time.bind(z):Ot,pe=Ot(),T.vars=a,s=s||a.animation,"refreshPriority"in a&&(M5=1,a.refreshPriority===-9999&&(Zu=T)),wt.tweenScroll=wt.tweenScroll||{top:Hw(tt,Je),left:Hw(tt,Bn)},T.tweenTo=Et=wt.tweenScroll[K.p],T.scrubDuration=function(nt){ar=ju(nt)&&nt,ar?Rt?Rt.duration(nt):Rt=lt.to(s,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ar,paused:!0,onComplete:function(){return A&&A(T)}}):(Rt&&Rt.progress(1).kill(),Rt=0)},s&&(s.vars.lazy=!1,s._initted&&!T.isReverted||s.vars.immediateRender!==!1&&a.immediateRender!==!1&&s.duration()&&s.render(0,!0,!0),T.animation=s.pause(),s.scrollTrigger=T,T.scrubDuration(y),Gn=0,h||(h=s.vars.id)),O&&((!ws(O)||O.push)&&(O={snapTo:O}),"scrollBehavior"in Jt.style&&lt.set(pt?[Jt,yi]:tt,{scrollBehavior:"auto"}),Pt.forEach(function(nt){return Tn(nt)&&nt.target===(pt?ne.scrollingElement||yi:tt)&&(nt.smooth=!1)}),gn=Tn(O.snapTo)?O.snapTo:O.snapTo==="labels"?rj(s):O.snapTo==="labelsDirectional"?aj(s):O.directional!==!1?function(nt,ft){return jy(O.snapTo)(nt,wn()-mt<500?0:ft.direction)}:lt.utils.snap(O.snapTo),Dn=O.duration||{min:.1,max:2},Dn=ws(Dn)?Xu(Dn.min,Dn.max):Xu(Dn,Dn),ln=lt.delayedCall(O.delay||ar/2||.1,function(){var nt=Ot(),ft=wn()-mt<500,ct=Et.tween;if((ft||Math.abs(T.getVelocity())<10)&&!ct&&!_h&&rt!==nt){var Tt=(nt-Bt)/oe,Ye=s&&!ot?s.totalProgress():Tt,Vt=ft?0:(Ye-Dr)/(wn()-Mu)*1e3||0,ve=lt.utils.clamp(-Tt,1-Tt,Ro(Vt/2)*Vt/.185),Me=Tt+(O.inertia===!1?0:ve),fe,Kt,Xt=O,un=Xt.onStart,It=Xt.onInterrupt,$t=Xt.onComplete;if(fe=gn(Me,T),ju(fe)||(fe=Me),Kt=Math.max(0,Math.round(Bt+fe*oe)),nt<=me&&nt>=Bt&&Kt!==nt){if(ct&&!ct._initted&&ct.data<=Ro(Kt-nt))return;O.inertia===!1&&(ve=fe-Tt),Et(Kt,{duration:Dn(Ro(Math.max(Ro(Me-Ye),Ro(fe-Ye))*.185/Vt/.05||0)),ease:O.ease||"power3",data:Ro(Kt-nt),onInterrupt:function(){return ln.restart(!0)&&It&&Co(T,It)},onComplete:function(){T.update(),rt=Ot(),s&&!ot&&(Rt?Rt.resetTo("totalProgress",fe,s._tTime/s._tDur):s.progress(fe)),Gn=Dr=s&&!ot?s.totalProgress():T.progress,D&&D(T),$t&&Co(T,$t)}},nt,ve*oe,Kt-nt-ve*oe),un&&Co(T,un,Et.tween)}}else T.isActive&&rt!==nt&&ln.restart(!0)}).pause()),h&&(hg[h]=T),x=T.trigger=Qn(x||v!==!0&&v),ii=x&&x._gsap&&x._gsap.stRevert,ii&&(ii=ii(T)),v=v===!0?x:Qn(v),mi(f)&&(f={targets:x,className:f}),v&&(w===!1||w===Hi||(w=!w&&v.parentNode&&v.parentNode.style&&Yi(v.parentNode).display==="flex"?!1:Fe),T.pin=v,Ft=lt.core.getCache(v),Ft.spacer?Ki=Ft.pinState:(P&&(P=Qn(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),Ft.spacerIsNative=!!P,P&&(Ft.spacerState=Jf(P))),Ft.spacer=Ue=P||ne.createElement("div"),Ue.classList.add("pin-spacer"),h&&Ue.classList.add("pin-spacer-"+h),Ft.pinState=Ki=Jf(v)),a.force3D!==!1&&lt.set(v,{force3D:!0}),T.spacer=Ue=Ft.spacer,Wi=Yi(v),Ia=Wi[w+K.os2],Yt=lt.getProperty(v),He=lt.quickSetter(v,K.a,We),o0(v,Ue,Wi),Rr=Jf(v)),J){Ei=ws(J)?kw(J,Lw):Lw,F=Wf("scroller-start",h,tt,K,Ei,0),Mn=Wf("scroller-end",h,tt,K,Ei,0,F),Un=F["offset"+K.op.d2];var jr=Qn(Ya(tt,"content")||tt);yn=this.markerStart=Wf("start",h,jr,K,Ei,Un,0,z),Rn=this.markerEnd=Wf("end",h,jr,K,Ei,Un,0,z),z&&(Or=lt.quickSetter([yn,Rn],K.a,We)),!gt&&!(Sr.length&&Ya(tt,"fixedMarkers")===!0)&&(ij(pt?Jt:tt),lt.set([F,Mn],{force3D:!0}),Mr=lt.quickSetter(F,K.a,We),Yn=lt.quickSetter(Mn,K.a,We))}if(z){var At=z.vars.onUpdate,vt=z.vars.onUpdateParams;z.eventCallback("onUpdate",function(){T.update(0,0,1),At&&At.apply(z,vt||[])})}if(T.previous=function(){return zt[zt.indexOf(T)-1]},T.next=function(){return zt[zt.indexOf(T)+1]},T.revert=function(nt,ft){if(!ft)return T.kill(!0);var ct=nt!==!1||!T.enabled,Tt=bn;ct!==T.isReverted&&(ct&&(ni=Math.max(Ot(),T.scroll.rec||0),st=T.progress,sr=s&&s.progress()),yn&&[yn,Rn,F,Mn].forEach(function(Ye){return Ye.style.display=ct?"none":"block"}),ct&&(bn=T,T.update(ct)),v&&(!M||!T.isActive)&&(ct?lj(v,Ue,Ki):o0(v,Ue,Yi(v),Re)),ct||T.update(ct),bn=Tt,T.isReverted=ct)},T.refresh=function(nt,ft,ct,Tt){if(!((bn||!T.enabled)&&!ft)){if(v&&nt&&qi){an(n,"scrollEnd",U5);return}!Pn&&Q&&Q(T),bn=T,Et.tween&&!ct&&(Et.tween.kill(),Et.tween=0),Rt&&Rt.pause(),S&&s&&(s.revert({kill:!1}).invalidate(),s.getChildren?s.getChildren(!0,!0,!1).forEach(function(Ri){return Ri.vars.immediateRender&&Ri.render(0,!0,!0)}):s.vars.immediateRender&&s.render(0,!0,!0)),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var Ye=et(),Vt=it(),ve=z?z.duration():yr(tt,K),Me=oe<=.01||!oe,fe=0,Kt=Tt||0,Xt=ws(ct)?ct.end:a.end,un=a.endTrigger||x,It=ws(ct)?ct.start:a.start||(a.start===0||!x?0:v?"0 0":"0 100%"),$t=T.pinnedContainer=a.pinnedContainer&&Qn(a.pinnedContainer,T),ri=x&&Math.max(0,zt.indexOf(T))||0,Ge=ri,ge,_e,zr,Wa,Ke,ke,On,la,Ai,kr,ai,Ci,ua;for(J&&ws(ct)&&(Ci=lt.getProperty(F,K.p),ua=lt.getProperty(Mn,K.p));Ge-- >0;)ke=zt[Ge],ke.end||ke.refresh(0,1)||(bn=T),On=ke.pin,On&&(On===x||On===v||On===$t)&&!ke.isReverted&&(kr||(kr=[]),kr.unshift(ke),ke.revert(!0,!0)),ke!==zt[Ge]&&(ri--,Ge--);for(Tn(It)&&(It=It(T)),It=Dw(It,"start",T),Bt=Vw(It,x,Ye,K,Ot(),yn,F,T,Vt,at,gt,ve,z,T._startClamp&&"_startClamp")||(v?-.001:0),Tn(Xt)&&(Xt=Xt(T)),mi(Xt)&&!Xt.indexOf("+=")&&(~Xt.indexOf(" ")?Xt=(mi(It)?It.split(" ")[0]:"")+Xt:(fe=Dd(Xt.substr(2),Ye),Xt=mi(It)?It:(z?lt.utils.mapRange(0,z.duration(),z.scrollTrigger.start,z.scrollTrigger.end,Bt):Bt)+fe,un=x)),Xt=Dw(Xt,"end",T),me=Math.max(Bt,Vw(Xt||(un?"100% 0":ve),un,Ye,K,Ot()+fe,Rn,Mn,T,Vt,at,gt,ve,z,T._endClamp&&"_endClamp"))||-.001,fe=0,Ge=ri;Ge--;)ke=zt[Ge]||{},On=ke.pin,On&&ke.start-ke._pinPush<=Bt&&!z&&ke.end>0&&(ge=ke.end-(T._startClamp?Math.max(0,ke.start):ke.start),(On===x&&ke.start-ke._pinPush<Bt||On===$t)&&isNaN(It)&&(fe+=ge*(1-ke.progress)),On===v&&(Kt+=ge));if(Bt+=fe,me+=fe,T._startClamp&&(T._startClamp+=fe),T._endClamp&&!Pn&&(T._endClamp=me||-.001,me=Math.min(me,yr(tt,K))),oe=me-Bt||(Bt-=.01)&&.001,Me&&(st=lt.utils.clamp(0,1,lt.utils.normalize(Bt,me,ni))),T._pinPush=Kt,yn&&fe&&(ge={},ge[K.a]="+="+fe,$t&&(ge[K.p]="-="+Ot()),lt.set([yn,Rn],ge)),v&&!(dg&&T.end>=yr(tt,K)))ge=Yi(v),Wa=K===Je,zr=Ot(),ce=parseFloat(Yt(K.a))+Kt,!ve&&me>1&&(ai=(pt?ne.scrollingElement||yi:tt).style,ai={style:ai,value:ai["overflow"+K.a.toUpperCase()]},pt&&Yi(Jt)["overflow"+K.a.toUpperCase()]!=="scroll"&&(ai.style["overflow"+K.a.toUpperCase()]="scroll")),o0(v,Ue,ge),Rr=Jf(v),_e=Jr(v,!0),la=gt&&Qa(tt,Wa?Bn:Je)(),w?(Re=[w+K.os2,oe+Kt+We],Re.t=Ue,Ge=w===Fe?ih(v,K)+oe+Kt:0,Ge&&(Re.push(K.d,Ge+We),Ue.style.flexBasis!=="auto"&&(Ue.style.flexBasis=Ge+We)),el(Re),$t&&zt.forEach(function(Ri){Ri.pin===$t&&Ri.vars.pinSpacing!==!1&&(Ri._subPinOffset=!0)}),gt&&Ot(ni)):(Ge=ih(v,K),Ge&&Ue.style.flexBasis!=="auto"&&(Ue.style.flexBasis=Ge+We)),gt&&(Ke={top:_e.top+(Wa?zr-Bt:la)+We,left:_e.left+(Wa?la:zr-Bt)+We,boxSizing:"border-box",position:"fixed"},Ke[Ns]=Ke["max"+ml]=Math.ceil(_e.width)+We,Ke[Ps]=Ke["max"+Oy]=Math.ceil(_e.height)+We,Ke[Hi]=Ke[Hi+Qu]=Ke[Hi+Fu]=Ke[Hi+Ku]=Ke[Hi+$u]="0",Ke[Fe]=ge[Fe],Ke[Fe+Qu]=ge[Fe+Qu],Ke[Fe+Fu]=ge[Fe+Fu],Ke[Fe+Ku]=ge[Fe+Ku],Ke[Fe+$u]=ge[Fe+$u],Zi=cj(Ki,Ke,M),Pn&&Ot(0)),s?(Ai=s._initted,i0(1),s.render(s.duration(),!0,!0),Ii=Yt(K.a)-ce+oe+Kt,Hn=Math.abs(oe-Ii)>1,gt&&Hn&&Zi.splice(Zi.length-2,2),s.render(0,!0,!0),Ai||s.invalidate(!0),s.parent||s.totalTime(s.totalTime()),i0(0)):Ii=oe,ai&&(ai.value?ai.style["overflow"+K.a.toUpperCase()]=ai.value:ai.style.removeProperty("overflow-"+K.a));else if(x&&Ot()&&!z)for(_e=x.parentNode;_e&&_e!==Jt;)_e._pinOffset&&(Bt-=_e._pinOffset,me-=_e._pinOffset),_e=_e.parentNode;kr&&kr.forEach(function(Ri){return Ri.revert(!1,!0)}),T.start=Bt,T.end=me,pe=ie=Pn?ni:Ot(),!z&&!Pn&&(pe<ni&&Ot(ni),T.scroll.rec=0),T.revert(!1,!0),mt=wn(),ln&&(rt=-1,ln.restart(!0)),bn=0,s&&ot&&(s._initted||sr)&&s.progress()!==sr&&s.progress(sr||0,!0).render(s.time(),!0,!0),(Me||st!==T.progress||z||S||s&&!s._initted)&&(s&&!ot&&(s._initted||st||s.vars.immediateRender!==!1)&&s.totalProgress(z&&Bt<-.001&&!st?lt.utils.normalize(Bt,me,0):st,!0),T.progress=Me||(pe-Bt)/oe===st?0:st),v&&w&&(Ue._pinOffset=Math.round(T.progress*Ii)),Rt&&Rt.invalidate(),isNaN(Ci)||(Ci-=lt.getProperty(F,K.p),ua-=lt.getProperty(Mn,K.p),td(F,K,Ci),td(yn,K,Ci-(Tt||0)),td(Mn,K,ua),td(Rn,K,ua-(Tt||0))),Me&&!Pn&&T.update(),g&&!Pn&&!Qi&&(Qi=!0,g(T),Qi=!1)}},T.getVelocity=function(){return(Ot()-ie)/(wn()-Mu)*1e3||0},T.endAnimation=function(){wu(T.callbackAnimation),s&&(Rt?Rt.progress(1):s.paused()?ot||wu(s,T.direction<0,1):wu(s,s.reversed()))},T.labelToScroll=function(nt){return s&&s.labels&&(Bt||T.refresh()||Bt)+s.labels[nt]/s.duration()*oe||0},T.getTrailing=function(nt){var ft=zt.indexOf(T),ct=T.direction>0?zt.slice(0,ft).reverse():zt.slice(ft+1);return(mi(nt)?ct.filter(function(Tt){return Tt.vars.preventOverlaps===nt}):ct).filter(function(Tt){return T.direction>0?Tt.end<=Bt:Tt.start>=me})},T.update=function(nt,ft,ct){if(!(z&&!ct&&!nt)){var Tt=Pn===!0?ni:T.scroll(),Ye=nt?0:(Tt-Bt)/oe,Vt=Ye<0?0:Ye>1?1:Ye||0,ve=T.progress,Me,fe,Kt,Xt,un,It,$t,ri;if(ft&&(ie=pe,pe=z?Ot():Tt,O&&(Dr=Gn,Gn=s&&!ot?s.totalProgress():Vt)),C&&v&&!bn&&!$f&&qi&&(!Vt&&Bt<Tt+(Tt-ie)/(wn()-Mu)*C?Vt=1e-4:Vt===1&&me>Tt+(Tt-ie)/(wn()-Mu)*C&&(Vt=.9999)),Vt!==ve&&T.enabled){if(Me=T.isActive=!!Vt&&Vt<1,fe=!!ve&&ve<1,It=Me!==fe,un=It||!!Vt!=!!ve,T.direction=Vt>ve?1:-1,T.progress=Vt,un&&!bn&&(Kt=Vt&&!ve?0:Vt===1?1:ve===1?2:3,ot&&(Xt=!It&&$[Kt+1]!=="none"&&$[Kt+1]||$[Kt],ri=s&&(Xt==="complete"||Xt==="reset"||Xt in s))),X&&(It||ri)&&(ri||y||!s)&&(Tn(X)?X(T):T.getTrailing(X).forEach(function(zr){return zr.endAnimation()})),ot||(Rt&&!bn&&!$f?(Rt._dp._time-Rt._start!==Rt._time&&Rt.render(Rt._dp._time-Rt._start),Rt.resetTo?Rt.resetTo("totalProgress",Vt,s._tTime/s._tDur):(Rt.vars.totalProgress=Vt,Rt.invalidate().restart())):s&&s.totalProgress(Vt,!!(bn&&(mt||nt)))),v){if(nt&&w&&(Ue.style[w+K.os2]=Ia),!gt)He(Ou(ce+Ii*Vt));else if(un){if($t=!nt&&Vt>ve&&me+1>Tt&&Tt+1>=yr(tt,K),M)if(!nt&&(Me||$t)){var Ge=Jr(v,!0),ge=Tt-Bt;Uw(v,Jt,Ge.top+(K===Je?ge:0)+We,Ge.left+(K===Je?0:ge)+We)}else Uw(v,Ue);el(Me||$t?Zi:Rr),Hn&&Vt<1&&Me||He(ce+(Vt===1&&!$t?Ii:0))}}O&&!Et.tween&&!bn&&!$f&&ln.restart(!0),f&&(It||R&&Vt&&(Vt<1||!r0))&&yc(f.targets).forEach(function(zr){return zr.classList[Me||R?"add":"remove"](f.className)}),c&&!ot&&!nt&&c(T),un&&!bn?(ot&&(ri&&(Xt==="complete"?s.pause().totalProgress(1):Xt==="reset"?s.restart(!0).pause():Xt==="restart"?s.restart(!0):s[Xt]()),c&&c(T)),(It||!r0)&&(p&&It&&Co(T,p),Y[Kt]&&Co(T,Y[Kt]),R&&(Vt===1?T.kill(!1,1):Y[Kt]=0),It||(Kt=Vt===1?1:3,Y[Kt]&&Co(T,Y[Kt]))),V&&!Me&&Math.abs(T.getVelocity())>(ju(V)?V:2500)&&(wu(T.callbackAnimation),Rt?Rt.progress(1):wu(s,Xt==="reverse"?1:!Vt,1))):ot&&c&&!bn&&c(T)}if(Yn){var _e=z?Tt/z.duration()*(z._caScrollDist||0):Tt;Mr(_e+(F._isFlipped?1:0)),Yn(_e)}Or&&Or(-Tt/z.duration()*(z._caScrollDist||0))}},T.enable=function(nt,ft){T.enabled||(T.enabled=!0,an(tt,"resize",zu),pt||an(tt,"scroll",Mo),Q&&an(n,"refreshInit",Q),nt!==!1&&(T.progress=st=0,pe=ie=rt=Ot()),ft!==!1&&T.refresh())},T.getTween=function(nt){return nt&&Et?Et.tween:Rt},T.setPositions=function(nt,ft,ct,Tt){if(z){var Ye=z.scrollTrigger,Vt=z.duration(),ve=Ye.end-Ye.start;nt=Ye.start+ve*nt/Vt,ft=Ye.start+ve*ft/Vt}T.refresh(!1,!1,{start:Ow(nt,ct&&!!T._startClamp),end:Ow(ft,ct&&!!T._endClamp)},Tt),T.update()},T.adjustPinSpacing=function(nt){if(Re&&nt){var ft=Re.indexOf(K.d)+1;Re[ft]=parseFloat(Re[ft])+nt+We,Re[1]=parseFloat(Re[1])+nt+We,el(Re)}},T.disable=function(nt,ft){if(nt!==!1&&T.revert(!0,!0),T.enabled&&(T.enabled=T.isActive=!1,ft||Rt&&Rt.pause(),ni=0,Ft&&(Ft.uncache=1),Q&&rn(n,"refreshInit",Q),ln&&(ln.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!pt)){for(var ct=zt.length;ct--;)if(zt[ct].scroller===tt&&zt[ct]!==T)return;rn(tt,"resize",zu),pt||rn(tt,"scroll",Mo)}},T.kill=function(nt,ft){T.disable(nt,ft),Rt&&!ft&&Rt.kill(),h&&delete hg[h];var ct=zt.indexOf(T);ct>=0&&zt.splice(ct,1),ct===Nn&&jd>0&&Nn--,ct=0,zt.forEach(function(Tt){return Tt.scroller===T.scroller&&(ct=1)}),ct||Pn||(T.scroll.rec=0),s&&(s.scrollTrigger=null,nt&&s.revert({kill:!1}),ft||s.kill()),yn&&[yn,Rn,F,Mn].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),Zu===T&&(Zu=0),v&&(Ft&&(Ft.uncache=1),ct=0,zt.forEach(function(Tt){return Tt.pin===v&&ct++}),ct||(Ft.spacer=0)),a.onKill&&a.onKill(T)},zt.push(T),T.enable(!1,!1),ii&&ii(T),s&&s.add&&!oe){var Mt=T.update;T.update=function(){T.update=Mt,Pt.cache++,Bt||me||T.refresh()},lt.delayedCall(.01,T.update),oe=.01,Bt=me=0}else T.refresh();v&&oj()},n.register=function(a){return Bo||(lt=a||k5(),z5()&&window.document&&n.enable(),Bo=Du),Bo},n.defaults=function(a){if(a)for(var s in a)If[s]=a[s];return If},n.disable=function(a,s){Du=0,zt.forEach(function(c){return c[s?"kill":"disable"](a)}),rn(Nt,"wheel",Mo),rn(ne,"scroll",Mo),clearInterval(Ff),rn(ne,"touchcancel",hr),rn(Jt,"touchstart",hr),Kf(rn,ne,"pointerdown,touchstart,mousedown",jw),Kf(rn,ne,"pointerup,touchend,mouseup",zw),nh.kill(),Qf(rn);for(var u=0;u<Pt.length;u+=3)Zf(rn,Pt[u],Pt[u+1]),Zf(rn,Pt[u],Pt[u+2])},n.enable=function(){if(Nt=window,ne=document,yi=ne.documentElement,Jt=ne.body,lt){if(yc=lt.utils.toArray,Xu=lt.utils.clamp,fg=lt.core.context||hr,i0=lt.core.suppressOverwrites||hr,Cy=Nt.history.scrollRestoration||"auto",pg=Nt.pageYOffset||0,lt.core.globals("ScrollTrigger",n),Jt){Du=1,tl=document.createElement("div"),tl.style.height="100vh",tl.style.position="absolute",X5(),tj(),Ve.register(lt),n.isTouch=Ve.isTouch,ka=Ve.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),cg=Ve.isTouch===1,an(Nt,"wheel",Mo),Ay=[Nt,ne,yi,Jt],lt.matchMedia?(n.matchMedia=function(g){var y=lt.matchMedia(),x;for(x in g)y.add(x,g[x]);return y},lt.addEventListener("matchMediaInit",function(){Y5(),zy()}),lt.addEventListener("matchMediaRevert",function(){return H5()}),lt.addEventListener("matchMedia",function(){Cs(0,1),Hs("matchMedia")}),lt.matchMedia().add("(orientation: portrait)",function(){return s0(),s0})):console.warn("Requires GSAP 3.11.0 or later"),s0(),an(ne,"scroll",Mo);var a=Jt.hasAttribute("style"),s=Jt.style,u=s.borderTopStyle,c=lt.core.Animation.prototype,f,h;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),s.borderTopStyle="solid",f=Jr(Jt),Je.m=Math.round(f.top+Je.sc())||0,Bn.m=Math.round(f.left+Bn.sc())||0,u?s.borderTopStyle=u:s.removeProperty("border-top-style"),a||(Jt.setAttribute("style",""),Jt.removeAttribute("style")),Ff=setInterval(Nw,250),lt.delayedCall(.5,function(){return $f=0}),an(ne,"touchcancel",hr),an(Jt,"touchstart",hr),Kf(an,ne,"pointerdown,touchstart,mousedown",jw),Kf(an,ne,"pointerup,touchend,mouseup",zw),ug=lt.utils.checkPrefix("transform"),zd.push(ug),Bo=wn(),nh=lt.delayedCall(.2,Cs).pause(),Vo=[ne,"visibilitychange",function(){var g=Nt.innerWidth,y=Nt.innerHeight;ne.hidden?(Rw=g,Mw=y):(Rw!==g||Mw!==y)&&zu()},ne,"DOMContentLoaded",Cs,Nt,"load",Cs,Nt,"resize",zu],Qf(an),zt.forEach(function(g){return g.enable(0,1)}),h=0;h<Pt.length;h+=3)Zf(rn,Pt[h],Pt[h+1]),Zf(rn,Pt[h],Pt[h+2])}else if(ne){var p=function g(){n.enable(),ne.removeEventListener("DOMContentLoaded",g)};ne.addEventListener("DOMContentLoaded",p)}}},n.config=function(a){"limitCallbacks"in a&&(r0=!!a.limitCallbacks);var s=a.syncInterval;s&&clearInterval(Ff)||(Ff=s)&&setInterval(Nw,s),"ignoreMobileResize"in a&&(cg=n.isTouch===1&&a.ignoreMobileResize),"autoRefreshEvents"in a&&(Qf(rn)||Qf(an,a.autoRefreshEvents||"none"),D5=(a.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(a,s){var u=Qn(a),c=Pt.indexOf(u),f=Vs(u);~c&&Pt.splice(c,f?6:2),s&&(f?Sr.unshift(Nt,s,Jt,s,yi,s):Sr.unshift(u,s))},n.clearMatchMedia=function(a){zt.forEach(function(s){return s._ctx&&s._ctx.query===a&&s._ctx.kill(!0,!0)})},n.isInViewport=function(a,s,u){var c=(mi(a)?Qn(a):a).getBoundingClientRect(),f=c[u?Ns:Ps]*s||0;return u?c.right-f>0&&c.left+f<Nt.innerWidth:c.bottom-f>0&&c.top+f<Nt.innerHeight},n.positionInViewport=function(a,s,u){mi(a)&&(a=Qn(a));var c=a.getBoundingClientRect(),f=c[u?Ns:Ps],h=s==null?f/2:s in rh?rh[s]*f:~s.indexOf("%")?parseFloat(s)*f/100:parseFloat(s)||0;return u?(c.left+h)/Nt.innerWidth:(c.top+h)/Nt.innerHeight},n.killAll=function(a){if(zt.slice(0).forEach(function(u){return u.vars.id!=="ScrollSmoother"&&u.kill()}),a!==!0){var s=Us.killAll||[];Us={},s.forEach(function(u){return u()})}},n}();kt.version="3.15.0";kt.saveStyles=function(n){return n?yc(n).forEach(function(t){if(t&&t.style){var r=pi.indexOf(t);r>=0&&pi.splice(r,5),pi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),lt.core.getCache(t),fg())}}):pi};kt.revert=function(n,t){return zy(!n,t)};kt.create=function(n,t){return new kt(n,t)};kt.refresh=function(n){return n?zu(!0):(Bo||kt.register())&&Cs(!0)};kt.update=function(n){return++Pt.cache&&na(n===!0?2:0)};kt.clearScrollMemory=G5;kt.maxScroll=function(n,t){return yr(n,t?Bn:Je)};kt.getScrollFunc=function(n,t){return Qa(Qn(n),t?Bn:Je)};kt.getById=function(n){return hg[n]};kt.getAll=function(){return zt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};kt.isScrolling=function(){return!!qi};kt.snapDirectional=jy;kt.addEventListener=function(n,t){var r=Us[n]||(Us[n]=[]);~r.indexOf(t)||r.push(t)};kt.removeEventListener=function(n,t){var r=Us[n],a=r&&r.indexOf(t);a>=0&&r.splice(a,1)};kt.batch=function(n,t){var r=[],a={},s=t.interval||.016,u=t.batchMax||1e9,c=function(p,g){var y=[],x=[],v=lt.delayedCall(s,function(){g(y,x),y=[],x=[]}).pause();return function(w){y.length||v.restart(!0),y.push(w.trigger),x.push(w),u<=y.length&&v.progress(1)}},f;for(f in t)a[f]=f.substr(0,2)==="on"&&Tn(t[f])&&f!=="onRefreshInit"?c(f,t[f]):t[f];return Tn(u)&&(u=u(),an(kt,"refresh",function(){return u=t.batchMax()})),yc(n).forEach(function(h){var p={};for(f in a)p[f]=a[f];p.trigger=h,r.push(kt.create(p))}),r};var Yw=function(t,r,a,s){return r>s?t(s):r<0&&t(0),a>s?(s-r)/(a-r):a<0?r/(r-a):1},l0=function n(t,r){r===!0?t.style.removeProperty("touch-action"):t.style.touchAction=r===!0?"auto":r?"pan-"+r+(Ve.isTouch?" pinch-zoom":""):"none",t===yi&&n(Jt,r)},ed={auto:1,scroll:1},dj=function(t){var r=t.event,a=t.target,s=t.axis,u=(r.changedTouches?r.changedTouches[0]:r).target,c=u._gsap||lt.core.getCache(u),f=wn(),h;if(!c._isScrollT||f-c._isScrollT>2e3){for(;u&&u!==Jt&&(u.scrollHeight<=u.clientHeight&&u.scrollWidth<=u.clientWidth||!(ed[(h=Yi(u)).overflowY]||ed[h.overflowX]));)u=u.parentNode;c._isScroll=u&&u!==a&&!Vs(u)&&(ed[(h=Yi(u)).overflowY]||ed[h.overflowX]),c._isScrollT=f}(c._isScroll||s==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},F5=function(t,r,a,s){return Ve.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:s=s&&dj,onPress:s,onDrag:s,onScroll:s,onEnable:function(){return a&&an(ne,Ve.eventTypes[0],Xw,!1,!0)},onDisable:function(){return rn(ne,Ve.eventTypes[0],Xw,!0)}})},hj=/(input|label|select|textarea)/i,Gw,Xw=function(t){var r=hj.test(t.target.tagName);(r||Gw)&&(t._gsapAllow=!0,Gw=r)},pj=function(t){ws(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var r=t,a=r.normalizeScrollX,s=r.momentum,u=r.allowNestedScroll,c=r.onRelease,f,h,p=Qn(t.target)||yi,g=lt.core.globals().ScrollSmoother,y=g&&g.get(),x=ka&&(t.content&&Qn(t.content)||y&&t.content!==!1&&!y.smooth()&&y.content()),v=Qa(p,Je),w=Qa(p,Bn),S=1,C=(Ve.isTouch&&Nt.visualViewport?Nt.visualViewport.scale*Nt.visualViewport.width:Nt.outerWidth)/Nt.innerWidth,A=0,D=Tn(s)?function(){return s(f)}:function(){return s||2.8},R,O,M=F5(p,t.type,!0,u),P=function(){return O=!1},z=hr,V=hr,X=function(){h=yr(p,Je),V=Xu(ka?1:0,h),a&&(z=Xu(0,yr(p,Bn))),R=Bs},K=function(){x._gsap.y=Ou(parseFloat(x._gsap.y)+v.offset)+"px",x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(x._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},ot=function(){if(O){requestAnimationFrame(P);var J=Ou(f.deltaY/2),at=V(v.v-J);if(x&&at!==v.v+v.offset){v.offset=at-v.v;var T=Ou((parseFloat(x&&x._gsap.y)||0)-v.offset);x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",x._gsap.y=T+"px",v.cacheID=Pt.cache,na()}return!0}v.offset&&K(),O=!0},tt,wt,pt,gt,Y=function(){X(),tt.isActive()&&tt.vars.scrollY>h&&(v()>h?tt.progress(1)&&v(h):tt.resetTo("scrollY",h))};return x&&lt.set(x,{y:"+=0"}),t.ignoreCheck=function($){return ka&&$.type==="touchmove"&&ot()||S>1.05&&$.type!=="touchstart"||f.isGesturing||$.touches&&$.touches.length>1},t.onPress=function(){O=!1;var $=S;S=Ou((Nt.visualViewport&&Nt.visualViewport.scale||1)/C),tt.pause(),$!==S&&l0(p,S>1.01?!0:a?!1:"x"),wt=w(),pt=v(),X(),R=Bs},t.onRelease=t.onGestureStart=function($,J){if(v.offset&&K(),!J)gt.restart(!0);else{Pt.cache++;var at=D(),T,Q;a&&(T=w(),Q=T+at*.05*-$.velocityX/.227,at*=Yw(w,T,Q,yr(p,Bn)),tt.vars.scrollX=z(Q)),T=v(),Q=T+at*.05*-$.velocityY/.227,at*=Yw(v,T,Q,yr(p,Je)),tt.vars.scrollY=V(Q),tt.invalidate().duration(at).play(.01),(ka&&tt.vars.scrollY>=h||T>=h-1)&&lt.to({},{onUpdate:Y,duration:at})}c&&c($)},t.onWheel=function(){tt._ts&&tt.pause(),wn()-A>1e3&&(R=0,A=wn())},t.onChange=function($,J,at,T,Q){if(Bs!==R&&X(),J&&a&&w(z(T[2]===J?wt+($.startX-$.x):w()+J-T[1])),at){v.offset&&K();var et=Q[2]===at,it=et?pt+$.startY-$.y:v()+at-Q[1],rt=V(it);et&&it!==rt&&(pt+=rt-it),v(rt)}(at||J)&&na()},t.onEnable=function(){l0(p,a?!1:"x"),kt.addEventListener("refresh",Y),an(Nt,"resize",Y),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=w.smooth=!1),M.enable()},t.onDisable=function(){l0(p,!0),rn(Nt,"resize",Y),kt.removeEventListener("refresh",Y),M.kill()},t.lockAxis=t.lockAxis!==!1,f=new Ve(t),f.iOS=ka,ka&&!v()&&v(1),ka&&lt.ticker.add(hr),gt=f._dc,tt=lt.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:a?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:q5(v,v(),function(){return tt.pause()})},onUpdate:na,onComplete:gt.vars.onComplete}),f};kt.sort=function(n){if(Tn(n))return zt.sort(n);var t=Nt.pageYOffset||0;return kt.getAll().forEach(function(r){return r._sortY=r.trigger?t+r.trigger.getBoundingClientRect().top:r.start+Nt.innerHeight}),zt.sort(n||function(r,a){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((a.vars.containerAnimation?1e6:a._sortY)+(a.vars.refreshPriority||0)*-1e6)})};kt.observe=function(n){return new Ve(n)};kt.normalizeScroll=function(n){if(typeof n>"u")return Ln;if(n===!0&&Ln)return Ln.enable();if(n===!1){Ln&&Ln.kill(),Ln=n;return}var t=n instanceof Ve?n:pj(n);return Ln&&Ln.target===t.target&&Ln.kill(),Vs(t.target)&&(Ln=t),t};kt.core={_getVelocityProp:lg,_inputObserver:F5,_scrollers:Pt,_proxies:Sr,bridge:{ss:function(){qi||Hs("scrollStart"),qi=wn()},ref:function(){return bn}}};k5()&&lt.registerPlugin(kt);/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let qw=typeof document<"u"?k.useLayoutEffect:k.useEffect,Fw=n=>n&&!Array.isArray(n)&&typeof n=="object",nd=[],mj={},$5=yt;const Ar=(n,t=nd)=>{let r=mj;Fw(n)?(r=n,n=null,t="dependencies"in r?r.dependencies:nd):Fw(t)&&(r=t,t="dependencies"in r?r.dependencies:nd),n&&typeof n!="function"&&console.warn("First parameter must be a function or config object");const{scope:a,revertOnUpdate:s}=r,u=k.useRef(!1),c=k.useRef($5.context(()=>{},a)),f=k.useRef(p=>c.current.add(null,p)),h=t&&t.length&&!s;return h&&qw(()=>(u.current=!0,()=>c.current.revert()),nd),qw(()=>{if(n&&c.current.add(n,a),!h||!u.current)return()=>c.current.revert()},t),{context:c.current,contextSafe:f.current}};Ar.register=n=>{$5=n};Ar.headless=!0;const gj=N(ht.button)`
  padding: 10px 30px;
  border-radius: 50px;
  border: 3px solid;
  border-color: ${({active:n})=>n?"var(--primary-color)":"var(--gray-200)"};
  background: ${({active:n})=>n?"var(--primary-color)":"transparent"};
  color: ${({active:n})=>n?"var(--white-100)":"var(--gray-100)"};
  font-weight: 400;
  font-size: 1rem;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 8px 24px;
    font-size: 0.9rem;
    border-width: 2.5px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 18px;
    font-size: 0.85rem;
    border-width: 2px;
  }
  
  @media (max-width: 360px) {
    padding: 5px 14px;
    font-size: 0.8rem;
  }
`,yj=({tab:n,active:t,onClick:r})=>b.jsx(gj,{onClick:r,active:t,initial:{borderColor:t?"var(--primary-color)":"var(--gray-200)"},animate:{borderColor:t?"var(--primary-color)":"var(--gray-200)"},whileHover:{borderColor:"var(--primary-color)",scale:1.05,transition:{duration:.3}},whileTap:{scale:.95},children:n.title}),vj=N(ht.button)`
  width: fit-content;
  margin-top: 1rem;
  padding: 0.25rem 0.5rem;
  border-bottom: ${({active:n})=>n?"2px solid":"none"};
  color: ${({active:n})=>n?"var(--primary-color)":"var(--gray-100)"};
  border-color: var(--primary-color);
  font-weight: ${({active:n})=>n?"600":"400"};
  font-size: 1rem;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 0.75rem;
    padding: 0.2rem 0.4rem;
    border-bottom-width: ${({active:n})=>n?"1.5px":"none"};
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    padding: 0.15rem 0.3rem;
    border-bottom-width: ${({active:n})=>n?"1px":"none"};
  }
  
  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
`,xj=({tab:n,active:t,selectedSub:r,onClick:a})=>{var s;return b.jsx("div",{className:"sub-category-container",children:b.jsx(Vd,{children:(s=n.subTitle)==null?void 0:s.map((u,c)=>t&&a?b.jsx(vj,{onClick:()=>a(u),active:r==u.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},whileHover:{borderBottom:"2px solid",borderColor:"var(--primary-color)",scale:1.05,transition:{duration:.3}},whileTap:{scale:.95},children:u.title},u.title+c):null)})})};N(ht.button)`
  margin: 1rem;
  padding: 10px 30px;
  border-radius: 50px;
  border: 3px solid;
  border-color: var(--gray-200);
  background: transparent;
  color: var(--gray-100);
  font-weight: 400;
  font-size: 1rem;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    margin: 0.75rem;
    padding: 8px 24px;
    font-size: 0.9rem;
    border-width: 2.5px;
  }
  
  @media (max-width: 480px) {
    margin: 0.5rem;
    padding: 6px 20px;
    font-size: 0.85rem;
    border-width: 2px;
  }
  
  @media (max-width: 360px) {
    margin: 0.5rem;
    padding: 5px 16px;
    font-size: 0.8rem;
  }
`;const bj=N(ht.button)`
  padding: 10px 30px;
  border-radius: 15px;
  border: 3px solid transparent;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #76a4da, #bebcd8, #76a4da);
  background-size: 200% auto;
  box-shadow: 0 4px 6px rgba(118, 164, 218, 0.3);
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 20px rgba(118, 164, 218, 0.6);
    
    &::before {
      left: 100%;
    }
  }
`,_j=N(ht.span)`
  font-size: 1rem;
  font-weight: 600;
  color: var(--white-100);
  display: inline-block;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,wj=({children:n,onClick:t,className:r})=>b.jsx(bj,{className:r,onClick:t,animate:{backgroundPosition:["0% 50%","100% 50%","0% 50%"]},transition:{duration:3,repeat:1/0,ease:"linear"},style:{backgroundPosition:"0% 50%"},whileHover:{scale:1.08,y:-2,boxShadow:"0 12px 24px rgba(118, 164, 218, 0.7)",transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95,y:0},children:b.jsx(_j,{children:n})}),Rs={CategoryBtn:yj,SubCategory:xj,GradientBtn:wj},ky=N.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 1.2rem 2rem;
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        padding: 1.2rem 1.5rem;
    }
    
    @media (max-width: 768px) {
        padding: 1rem 1rem;
    }
    
    @media (max-width: 480px) {
        padding: 0.875rem 0.75rem;
    }
    
    @media (max-width: 360px) {
        padding: 0.75rem 0.5rem;
    }
`,Sj=N(ht.div)`
    height: 100%;
    padding: 2rem;
    background: linear-gradient(
        160deg,
        rgba(175, 213, 255, 0.9),
        rgba(205, 205, 205, 0.9)
    );
    border-radius: 20px;
    backdrop-filter: blur(6px);      
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
`,Tj=N.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    z-index: 1;
    color: var(--gray-400);

    @media (max-width: 768px) {
        font-size: 1.4rem;
    } 

    @media (max-width: 480px) {
        font-size: 1.2rem;
    } 
`,Ej=N.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: auto;         
    padding-top: 1rem;
    z-index: 1;

    flex-wrap: wrap;
    align-items: start;
    min-height: 120px;      

    & > * {
        flex: 0 0 calc(33.333% - 0.67rem);
    }
`,Aj=N(ht.div)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    color: var(--gray-400);
`,Cj=N(ht.img)`
    width: 36px;
    height: 36px;
    object-fit: contain;
`,Rj=N.div`
    width: 100%;
    text-align: center;
`,Mj={hidden:{opacity:0,y:50,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:"easeOut"}}},Dj={hidden:{opacity:0,y:-10},visible:{opacity:1,y:0,transition:{duration:.3,delay:.2}}},Oj=({title:n,stack:t,layoutId:r})=>b.jsxs(Sj,{layoutId:r,variants:Mj,children:[b.jsx(Tj,{children:n}),b.jsx(Ej,{children:t.map(a=>b.jsxs(Aj,{variants:Dj,whileHover:{scale:1.15},transition:{type:"spring",stiffness:400},children:[b.jsx(Cj,{src:a.logo,alt:a.name,whileHover:{rotate:5}}),b.jsx(Rj,{children:a.name})]},a.name))})]}),jj=N(ht.button)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    background: transparent;
    border: 2px solid rgba(118, 164, 218, 0.3);
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    margin-right: 1rem;
    flex-shrink: 0;
    
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 10px;
        height: 10px;
        border-left: 2.5px solid var(--primary-color);
        border-bottom: 2.5px solid var(--primary-color);
        transition: all 0.3s ease;
    }
    
    &:hover {
        background: rgba(118, 164, 218, 0.1);
        border-color: var(--primary-color);
        transform: translateX(-4px);
        
        &::before {
            transform: translate(-60%, -50%) rotate(45deg);
        }
    }
    
    &:active {
        scale: 0.95;
    }
    
    @media (max-width: 768px) {
        width: 36px;
        height: 36px;
        margin-right: 0.75rem;
        border-radius: 10px;
        border-width: 1.5px;
        
        &::before {
            width: 8px;
            height: 8px;
            border-width: 2px;
        }
    }
    
    @media (max-width: 480px) {
        width: 32px;
        height: 32px;
        margin-right: 0.5rem;
        border-radius: 8px;
        border-width: 1.5px;
        
        &::before {
            width: 7px;
            height: 7px;
            border-width: 2px;
        }
    }
`,zj=N.h1`
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: var(--gray-100);
    line-height: 1.4;
    
    @media (max-width: 1200px) {
        font-size: 1.75rem;
    }
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.25rem;
    }
`,kj=N.div`
    width: 100%;
    padding-top: ${({page:n})=>n=="main"?"5rem":"0px"};
    padding-bottom: ${({page:n})=>n=="main"?"0px":"2rem"};
    font-size: ${({page:n})=>n=="main"?"3rem":"2rem"};
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: ${({page:n})=>n=="main"?"center":"start"};
    padding-left: ${({page:n})=>n=="main"?"0px":"5rem"};
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        padding-top: ${({page:n})=>n=="main"?"4rem":"0px"};
        padding-bottom: ${({page:n})=>n=="main"?"0px":"1.75rem"};
        font-size: ${({page:n})=>n=="main"?"2.5rem":"1.75rem"};
        padding-left: ${({page:n})=>n=="main"?"0px":"4rem"};
    }
    
    @media (max-width: 768px) {
        padding-top: ${({page:n})=>n=="main"?"3rem":"0px"};
        padding-bottom: ${({page:n})=>n=="main"?"0px":"1.5rem"};
        font-size: ${({page:n})=>n=="main"?"2rem":"1.5rem"};
        padding-left: ${({page:n})=>n=="main"?"0px":"2rem"};
    }
    
    @media (max-width: 480px) {
        padding-top: ${({page:n})=>n=="main"?"2.5rem":"0px"};
        padding-bottom: ${({page:n})=>n=="main"?"0px":"1.25rem"};
        font-size: ${({page:n})=>n=="main"?"1.75rem":"1.25rem"};
        padding-left: ${({page:n})=>n=="main"?"0px":"1rem"};
    }
    
    @media (max-width: 360px) {
        font-size: ${({page:n})=>n=="main"?"1.5rem":"1.1rem"};
        padding-left: ${({page:n})=>n=="main"?"0px":"0.75rem"};
    }
`,Q5=({title:n,page:t})=>{const r=Gs();return b.jsx(kj,{page:t,children:t==="detail"?b.jsxs(b.Fragment,{children:[b.jsx(jj,{onClick:()=>r(-1),whileTap:{scale:.95},"aria-label":"뒤로가기"}),b.jsx(zj,{children:n})]}):n})},Lj=N.div`
    width: 100%;
    font-size: ${({page:n})=>n=="main"?"3rem":"2rem"};
    font-weight: 600;
    display: flex;
    margin-top: 1em;
    justify-content: center;
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        font-size: ${({page:n})=>n=="main"?"2.5rem":"1.75rem"};
        margin-top: 0.875em;
    }
    
    @media (max-width: 768px) {
        font-size: ${({page:n})=>n=="main"?"2rem":"1.5rem"};
        margin-top: 0.75em;
    }
    
    @media (max-width: 480px) {
        font-size: ${({page:n})=>n=="main"?"1.75rem":"1.25rem"};
        margin-top: 0.625em;
    }
    
    @media (max-width: 360px) {
        font-size: ${({page:n})=>n=="main"?"1.5rem":"1.1rem"};
    }
`,K5=({title:n})=>b.jsx(Lj,{children:n}),Nj=N(ht.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
    max-width: 1000px;
    margin: 3rem auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`,Pj={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},Bj=()=>{const n=[{id:"card-1",title:"프론트엔드",stack:[{name:"React",logo:"https://cdn.simpleicons.org/react"},{name:"Vue",logo:"https://cdn.simpleicons.org/vue.js"},{name:"Nuxt",logo:"https://api.iconify.design/simple-icons:nuxt.svg?color=%2300C58E"},{name:"JavaScript",logo:"https://cdn.simpleicons.org/javascript"},{name:"TypeScript",logo:"https://cdn.simpleicons.org/typescript"}]},{id:"card-2",title:"백엔드",stack:[{name:"Django",logo:"https://cdn.simpleicons.org/django"},{name:"FastAPI",logo:"https://cdn.simpleicons.org/fastapi"},{name:"Node.js",logo:"https://cdn.simpleicons.org/node.js"}]},{id:"card-3",title:"데이터베이스",stack:[{name:"PostgreSQL",logo:"https://cdn.simpleicons.org/postgresql"},{name:"MySQL",logo:"https://cdn.simpleicons.org/mysql"}]},{id:"card-4",title:"인프라",stack:[{name:"Docker",logo:"https://cdn.simpleicons.org/docker"},{name:"Render",logo:"https://cdn.simpleicons.org/render"},{name:"Supabase",logo:"https://cdn.simpleicons.org/supabase"}]}];return b.jsxs("div",{children:[b.jsx(K5,{title:"Stack"}),b.jsx(Nj,{variants:Pj,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:n.map(t=>b.jsx(Oj,{title:t.title,stack:t.stack,layoutId:t.id},t.id))})]})},Vj=N(ht.div)`
    display: flex;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    max-width: 1000px;
    margin: 3rem auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
        padding: 0 1rem;
        gap: 1rem;
        flex-direction: column;
    }
`,Uj=N(ht.div)`
    padding: 2.5rem;
    border-radius: 20px;
    color: var(--gray-100);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    overflow: hidden;
`,Hj=N(ht.div)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: 2px solid rgba(118, 164, 218, 0.3);
    padding-bottom: 1rem;
`,Yj=N(ht.h3)`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    color: var(--gray-100);

    @media (max-width: 768px) {
        font-size: 1.4rem;
    } 

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`,Gj=N(ht.h4)`
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    color: var(--gray-400);


    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`,Xj=N(ht.p)`
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    color: var(--gray-100);
    padding-top: 0.5rem;


    @media (max-width: 480px) {
        font-size: 1rem;
    }
`,qj=()=>{const n=[{id:1,title:"경동대학교",date:"2016 ~ 2020",content:"치기공학과"},{id:2,title:"호서고등학교",date:"2013 ~ 2016"}],t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},r={hidden:{opacity:0,y:50,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:"easeOut"}}},a={hidden:{opacity:0,y:-10},visible:{opacity:1,y:0,transition:{duration:.3,delay:.2}}};return b.jsxs("div",{children:[b.jsx(K5,{title:"학력"}),b.jsx(Vj,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:n.map(s=>b.jsxs(Uj,{variants:r,children:[b.jsxs(Hj,{variants:a,children:[b.jsx(Yj,{children:s.title}),b.jsx(Gj,{children:s.date})]}),s.content&&b.jsx(Xj,{variants:a,children:s.content})]},s.id))})]})};yt.registerPlugin(kt,Ar);const Fj=N(ky)`
  width: 100%;

  padding: 0 1.5rem 6rem;

  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0 1rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.875rem 3rem;
  }
`,$j=N.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`,Qj=N.section`
  position: relative;

  width: 100%;

  min-height: calc(100vh - 100px);

  display: flex;
  align-items: center;

  padding: 5rem 0 6rem;

  @media (max-width: 1024px) {
    min-height: auto;

    padding: 4.5rem 0 5rem;
  }

  @media (max-width: 768px) {
    padding: 3.5rem 0 4rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0 3rem;
  }
`,Kj=N.div`
  position: relative;
  z-index: 2;

  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(320px, 0.85fr);

  align-items: center;

  gap: clamp(2rem, 5vw, 5rem);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;

    gap: 3.5rem;
  }

  @media (max-width: 768px) {
    gap: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2.5rem;
  }
`,Zj=N.div`
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 1.4rem;

  min-width: 0;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`,Ij=N.div`
  display: inline-flex;
  align-items: center;

  width: fit-content;

  gap: 0.55rem;

  padding: 0.5rem 0.9rem;

  border-radius: 999px;

  background: var(--sky-100);

  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.78rem;
  font-weight: 500;

  box-shadow: var(--box-shadow);

  &::before {
    content: "";

    width: 7px;
    height: 7px;

    flex-shrink: 0;

    border-radius: 50%;

    background: var(--primary-color);
  }

  @media (max-width: 480px) {
    padding: 0.45rem 0.75rem;

    font-size: 0.7rem;
  }
`,Wj=N.div`
  position: relative;

  width: 100%;
`,Jj=N.h1`
  width: 100%;

  color: var(--gray-100);

  font-size: clamp(3rem, 5.25vw, 5rem);

  line-height: 1.12;

  letter-spacing: -0.055em;

  font-weight: 700;

  word-break: keep-all;

  @media (max-width: 1024px) {
    max-width: 850px;

    font-size: clamp(
      3.1rem,
      7vw,
      5rem
    );
  }

  @media (max-width: 768px) {
    font-size: clamp(
      2.6rem,
      9vw,
      4.2rem
    );

    line-height: 1.15;
  }

  @media (max-width: 480px) {
    font-size: clamp(
      2.15rem,
      10vw,
      3.2rem
    );

    line-height: 1.18;

    letter-spacing: -0.045em;
  }
`,tz=N.span`
  display: block;

  overflow: hidden;

  /*
   * GSAP으로 위아래 움직일 때
   * 글자가 잘리지 않도록 여유
   */
  padding-top: 0.13em;
  padding-bottom: 0.13em;

  margin-top: -0.13em;
  margin-bottom: -0.13em;

  .hero-char {
    position: relative;

    display: inline-block;

    transform-origin: 50% 100%;

    will-change:
      transform,
      opacity;
  }

  .accent-char {
    color: var(--primary-color);
  }
`,$w=({text:n,floatIndexes:t=[],accentIndexes:r=[]})=>b.jsx(tz,{children:[...n].map((a,s)=>{const u=t.includes(s),c=r.includes(s);return b.jsx("span",{className:["hero-char",u?"idle-char":"",c?"accent-char":""].filter(Boolean).join(" "),children:a===" "?" ":a},`${a}-${s}`)})}),ez=N.p`
  width: 100%;
  max-width: 590px;

  color: var(--gray-400);

  font-size: 1rem;

  line-height: 1.85;

  word-break: keep-all;

  strong {
    color: var(--gray-100);

    font-weight: 500;
  }

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    max-width: 620px;

    font-size: 0.95rem;

    line-height: 1.8;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;

    line-height: 1.75;

    br {
      display: none;
    }
  }
`,nz=N.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  gap: 0.65rem 1rem;

  width: 100%;
`,id=N.div`
  display: flex;
  align-items: center;

  gap: 0.45rem;

  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.75rem;

  white-space: nowrap;

  &::before {
    content: "";

    width: 5px;
    height: 5px;

    flex-shrink: 0;

    border-radius: 50%;

    background: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 0.68rem;

    gap: 0.35rem;
  }
`,iz=N.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  gap: 1rem;

  margin-top: 0.35rem;

  @media (max-width: 480px) {
    width: 100%;

    flex-direction: column;

    align-items: stretch;

    gap: 0.75rem;
  }
`,rd=N.div`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 1.4rem;

  margin: -1.4rem;

  @media (max-width: 480px) {
    width: 100%;

    padding: 0;
    margin: 0;
  }
`,ad=N.div`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  will-change: transform;

  @media (max-width: 480px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`,sd=N.span`
  display: inline-block;

  pointer-events: none;

  will-change: transform;
`,rz=N.div`
  position: relative;

  width: 100%;
  max-width: 430px;

  margin-left: auto;

  @media (max-width: 1024px) {
    max-width: 720px;

    margin: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,az=N.div`
  position: absolute;

  width: 250px;
  height: 250px;

  right: -60px;
  top: -60px;

  border-radius: 50%;

  background:
    rgba(
      118,
      164,
      218,
      0.18
    );

  filter: blur(10px);

  pointer-events: none;

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;

    right: -50px;
  }
`,sz=N.div`
  position: relative;
  z-index: 2;

  width: 100%;

  padding: 0.9rem;

  border-radius: 26px;

  background: var(--sky-200);

  border:
    1px solid
    rgba(
      118,
      164,
      218,
      0.18
    );

  box-shadow:
    0 10px 35px
      rgba(
        118,
        164,
        218,
        0.16
      ),
    var(--box-shadow);

  will-change: transform;

  @media (max-width: 480px) {
    padding: 0.7rem;

    border-radius: 20px;
  }
`,oz=N.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding:
    0.15rem
    0.15rem
    0.9rem;
`,lz=N.div`
  display: flex;

  gap: 0.35rem;

  span {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: var(
      --primary-gray
    );
  }

  span:first-child {
    background:
      var(--primary-color);
  }

  span:nth-child(2) {
    background:
      var(--primary-light);
  }

  span:last-child {
    opacity: 0.55;
  }
`,uz=N.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.68rem;
`,cz=N.div`
  position: relative;

  min-height: 360px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  padding: 2rem;

  overflow: hidden;

  border-radius: 19px;

  background: linear-gradient(
    145deg,
    rgba(
      175,
      213,
      255,
      0.8
    ),
    rgba(
      238,
      238,
      238,
      0.92
    )
  );

  @media (max-width: 1024px) {
    min-height: 320px;
  }

  @media (max-width: 768px) {
    min-height: 300px;

    padding: 1.6rem;
  }

  @media (max-width: 480px) {
    min-height: 270px;

    padding: 1.3rem;

    border-radius: 15px;
  }
`,fz=N.div`
  position: absolute;

  width: 170px;
  height: 170px;

  right: -50px;
  top: 50%;

  border-radius:
    40%
    60%
    55%
    45%;

  background:
    rgba(
      255,
      255,
      255,
      0.25
    );

  transform:
    translateY(-50%)
    rotate(25deg);

  pointer-events: none;

  @media (max-width: 480px) {
    width: 130px;
    height: 130px;
  }
`,dz=N.div`
  position: relative;
  z-index: 2;

  display: flex;

  justify-content: space-between;
  align-items: flex-start;
`,hz=N.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.68rem;

  font-weight: 500;

  letter-spacing: 0.08em;
`,pz=N.span`
  display: inline-flex;
  align-items: center;

  gap: 0.35rem;

  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.62rem;

  &::before {
    content: "";

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background:
      var(--primary-color);
  }
`,mz=N.div`
  position: relative;
  z-index: 2;

  h2 {
    margin-bottom: 0.7rem;

    color: var(--gray-100);

    font-family: var(--font-en);

    font-size: clamp(
      2.4rem,
      4vw,
      3.4rem
    );

    line-height: 1;

    letter-spacing: -0.05em;
  }

  p {
    max-width: 300px;

    color: var(--gray-400);

    font-size: 0.85rem;

    line-height: 1.7;

    word-break: keep-all;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2.15rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`,gz=N.div`
  position: relative;
  z-index: 2;

  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;
`,Su=N.span`
  padding:
    0.42rem
    0.7rem;

  border-radius: 999px;

  background:
    rgba(
      255,
      255,
      255,
      0.62
    );

  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.67rem;

  box-shadow:
    0 2px 5px
    rgba(
      118,
      164,
      218,
      0.1
    );

  @media (max-width: 480px) {
    padding:
      0.38rem
      0.6rem;

    font-size: 0.62rem;
  }
`,od=N.section`
  position: relative;

  width: 100%;

  padding: 6rem 0;

  @media (max-width: 1024px) {
    padding: 5rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0 0;
  }
`,ld=N.div`
  width: 100%;
  height: 1px;

  margin-bottom: 4.5rem;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(
      118,
      164,
      218,
      0.42
    ),
    transparent
  );

  transform-origin: left;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`,yz=N.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(280px, 430px);

  align-items: end;

  gap: 3rem;

  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    gap: 1rem;

    margin-bottom: 2rem;
  }
`,u0=N.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`,c0=N.span`
  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.7rem;

  font-weight: 500;

  letter-spacing: 0.1em;
`,vz=N.h2`
  color: var(--gray-100);

  font-size: clamp(
    2rem,
    4vw,
    3.1rem
  );

  line-height: 1.2;

  letter-spacing: -0.045em;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,xz=N.p`
  color: var(--gray-400);

  font-size: 0.93rem;

  line-height: 1.75;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.86rem;
  }
`,bz=N.div`
  display: grid;

  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );

  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(
        2,
        minmax(0, 1fr)
      );

    /*
     * 세 번째 카드는
     * 태블릿에서 한 줄 전체 사용
     */
    & > :last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    & > :last-child {
      grid-column: auto;
    }
  }
`,f0=N.div`
  position: relative;

  min-height: 250px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  gap: 2rem;

  padding: 1.8rem;

  overflow: hidden;

  border-radius: 22px;

  border:
    1px solid
    rgba(
      118,
      164,
      218,
      0.13
    );

  background: linear-gradient(
    150deg,
    rgba(
      175,
      213,
      255,
      0.58
    ),
    rgba(
      238,
      238,
      238,
      0.9
    )
  );

  box-shadow:
    var(--box-shadow);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &::after {
    content: "";

    position: absolute;

    width: 110px;
    height: 110px;

    right: -40px;
    top: -40px;

    border-radius: 50%;

    background:
      rgba(
        255,
        255,
        255,
        0.25
      );
  }

  &:hover {
    transform:
      translateY(-6px);

    box-shadow:
      0 10px 25px
      rgba(
        118,
        164,
        218,
        0.2
      );
  }

  @media (max-width: 768px) {
    min-height: 220px;

    padding: 1.6rem;
  }

  @media (max-width: 480px) {
    min-height: 200px;

    padding: 1.4rem;

    border-radius: 18px;
  }
`,d0=N.span`
  position: relative;
  z-index: 2;

  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.7rem;

  letter-spacing: 0.08em;
`,h0=N.div`
  position: relative;
  z-index: 2;

  h3 {
    margin-bottom: 0.65rem;

    color: var(--gray-100);

    font-size: 1.4rem;

    letter-spacing: -0.03em;
  }

  p {
    color: var(--gray-400);

    font-size: 0.88rem;

    line-height: 1.7;

    word-break: keep-all;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.84rem;
    }
  }
`,Qw=N.div`
  width: 100%;

  padding: 1rem 0;

  overflow: hidden;

  border-radius: 26px;

  @media (max-width: 768px) {
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`,Kw=N.div`
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  gap: 2rem;

  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;

    align-items: flex-start;

    gap: 0.7rem;
  }
`,Zw=N.p`
  max-width: 440px;

  color: var(--gray-400);

  font-size: 0.9rem;

  line-height: 1.7;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`,_z=N.div`
  position: relative;

  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto;

  align-items: center;

  gap: 3rem;

  padding: 3.5rem;

  overflow: hidden;

  border-radius: 28px;

  background: linear-gradient(
    135deg,
    rgba(
      175,
      213,
      255,
      0.92
    ),
    rgba(
      205,
      205,
      205,
      0.86
    )
  );

  box-shadow: var(--box-shadow);

  &::after {
    content: "";

    position: absolute;

    width: 240px;
    height: 240px;

    right: -80px;
    top: -100px;

    border-radius: 50%;

    background:
      rgba(
        255,
        255,
        255,
        0.2
      );
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    gap: 2rem;

    padding: 3rem 2.5rem;
  }

  @media (max-width: 600px) {
    padding: 2.2rem 1.6rem;

    border-radius: 22px;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1.3rem;

    border-radius: 18px;
  }
`,wz=N.div`
  position: relative;
  z-index: 2;

  h2 {
    max-width: 660px;

    margin-bottom: 0.8rem;

    color: var(--gray-100);

    font-size: clamp(
      1.8rem,
      4vw,
      3rem
    );

    line-height: 1.2;

    letter-spacing: -0.045em;

    word-break: keep-all;
  }

  p {
    max-width: 560px;

    color: var(--gray-400);

    font-size: 0.9rem;

    line-height: 1.75;

    word-break: keep-all;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.65rem;
    }

    p {
      font-size: 0.84rem;
    }
  }
`,Sz=N.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 0.8rem;

  min-width: 170px;

  @media (max-width: 850px) {
    flex-direction: row;

    min-width: 0;
  }

  @media (max-width: 480px) {
    width: 100%;

    flex-direction: column;

    button {
      width: 100%;
    }
  }
`,Tz=()=>{const n=Gs(),t=k.useRef(null);return Ar(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;yt.set(".hero-char",{transformOrigin:"50% 100%"});const a=yt.timeline();a.from(".hero-badge",{opacity:0,y:14,duration:.4,ease:"power2.out",overwrite:"auto"}),a.fromTo(".hero-char",{opacity:0,yPercent:120,rotate:5,scaleY:.9},{opacity:1,yPercent:0,rotate:0,scaleY:1,duration:.7,stagger:{each:.04,from:"start"},ease:"back.out(1.25)",overwrite:"auto"},"-=0.15"),a.to(".hero-char",{y:g=>Math.sin(g*.9)*-4,duration:.2,stagger:{each:.022,from:"start"},ease:"sine.out",overwrite:"auto"},"-=0.18"),a.to(".hero-char",{y:0,duration:.28,stagger:{each:.022,from:"start"},ease:"sine.inOut",overwrite:"auto"},"-=0.08"),a.from(".hero-description",{opacity:0,y:18,duration:.5,ease:"power2.out",overwrite:"auto"},"-=0.22"),a.from(".hero-info-item",{opacity:0,y:8,duration:.35,stagger:.06,ease:"power2.out",overwrite:"auto"},"-=0.25"),a.from(".hero-actions",{opacity:0,y:14,duration:.45,ease:"power2.out",overwrite:"auto"},"-=0.2"),a.from(".preview-card",{opacity:0,x:35,scale:.97,duration:.75,ease:"power3.out",overwrite:"auto"},"-=0.6");const s=yt.utils.toArray(".idle-char"),u=[{y:-3,rotation:-.8,duration:2.3},{y:3,rotation:.7,duration:2.8},{y:-4,rotation:1,duration:2.5}];s.forEach((g,y)=>{const x=u[y]??u[0];yt.to(g,{y:x.y,rotate:x.rotation,duration:x.duration,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:2.5+y*.2,overwrite:"auto"})}),yt.to(".preview-card",{y:-6,duration:3.2,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:1.8,overwrite:"auto"});const c=[];return window.matchMedia("(pointer: fine)").matches&&yt.utils.toArray(".mag-zone").forEach(y=>{const x=y.querySelector(".mag-target"),v=y.querySelector(".mag-label");if(!x||!v)return;const w=.3,S=.13,C=D=>{const R=y.getBoundingClientRect(),O=yt.utils.mapRange(R.left,R.right,-R.width/2,R.width/2,D.clientX),M=yt.utils.mapRange(R.top,R.bottom,-R.height/2,R.height/2,D.clientY);yt.to(x,{x:O*w,y:M*w,duration:.35,ease:"power2.out",overwrite:"auto"}),yt.to(v,{x:O*S,y:M*S,duration:.35,ease:"power2.out",overwrite:"auto"})},A=()=>{yt.to(x,{x:0,y:0,duration:.7,ease:"elastic.out(1,0.4)",overwrite:"auto"}),yt.to(v,{x:0,y:0,duration:.65,ease:"elastic.out(1,0.4)",overwrite:"auto"})};y.addEventListener("mousemove",C),y.addEventListener("mouseleave",A),c.push(()=>{y.removeEventListener("mousemove",C),y.removeEventListener("mouseleave",A)})}),yt.utils.toArray(".main-reveal").forEach(g=>{yt.from(g,{opacity:0,y:35,duration:.7,ease:"power2.out",overwrite:"auto",scrollTrigger:{trigger:g,start:"top 88%",toggleActions:"play none none none"}})}),yt.from(".about-card",{opacity:0,y:35,scale:.98,duration:.65,stagger:.1,ease:"power2.out",overwrite:"auto",scrollTrigger:{trigger:".about-grid",start:"top 82%"}}),yt.utils.toArray(".section-line").forEach(g=>{yt.from(g,{scaleX:0,duration:.8,ease:"power2.out",overwrite:"auto",scrollTrigger:{trigger:g,start:"top 92%"}})}),()=>{c.forEach(g=>g())}},{scope:t}),b.jsx(Fj,{children:b.jsxs($j,{ref:t,children:[b.jsx(Qj,{className:"hero-section",children:b.jsxs(Kj,{children:[b.jsxs(Zj,{children:[b.jsx(Ij,{className:"hero-badge",children:"Frontend Developer Portfolio"}),b.jsx(Wj,{children:b.jsxs(Jj,{children:[b.jsx($w,{text:"안녕하세요",floatIndexes:[0,4]}),b.jsx($w,{text:"개발자 공혜진입니다",floatIndexes:[6],accentIndexes:[4,5,6]})]})}),b.jsx(ez,{className:"hero-description",children:"새로운 기술을 배우는 것뿐 아니라 실제 서비스에서 사용할 수 있는 결과물로 만드는 것을 중요하게 생각합니다."}),b.jsxs(nz,{children:[b.jsx(id,{className:"hero-info-item",children:"React / Vue"}),b.jsx(id,{className:"hero-info-item",children:"Frontend"}),b.jsx(id,{className:"hero-info-item",children:"Fullstack Experience"}),b.jsx(id,{className:"hero-info-item",children:"Team Lead"})]}),b.jsxs(iz,{className:"hero-actions",children:[b.jsx(rd,{className:"mag-zone",children:b.jsx(ad,{className:"mag-target",children:b.jsx(Rs.GradientBtn,{onClick:()=>n("/project"),children:b.jsx(sd,{className:"mag-label",children:"프로젝트 보러가기 ▶"})})})}),b.jsx(rd,{className:"mag-zone",children:b.jsx(ad,{className:"mag-target",children:b.jsx(Rs.GradientBtn,{onClick:()=>window.open("https://github.com/hjzheld","_blank","noopener,noreferrer"),children:b.jsx(sd,{className:"mag-label",children:"GitHub ▶"})})})})]})]}),b.jsxs(rz,{children:[b.jsx(az,{}),b.jsxs(sz,{className:"preview-card",children:[b.jsxs(oz,{children:[b.jsxs(lz,{children:[b.jsx("span",{}),b.jsx("span",{}),b.jsx("span",{})]}),b.jsx(uz,{children:"portfolio.tsx"})]}),b.jsxs(cz,{children:[b.jsx(fz,{}),b.jsxs(dz,{children:[b.jsx(hz,{children:"ABOUT ME"}),b.jsx(pz,{children:"AVAILABLE"})]}),b.jsxs(mz,{children:[b.jsxs("h2",{children:["Web",b.jsx("br",{}),"Developer"]}),b.jsx("p",{children:"화면 구현부터 API 연동, 데이터 처리와 서비스 구조까지 함께 고민합니다."})]}),b.jsxs(gz,{children:[b.jsx(Su,{children:"React"}),b.jsx(Su,{children:"Vue"}),b.jsx(Su,{children:"TypeScript"}),b.jsx(Su,{children:"FastAPI"}),b.jsx(Su,{children:"PostgreSQL"})]})]})]})]})]})}),b.jsxs(od,{children:[b.jsx(ld,{className:"section-line"}),b.jsxs(yz,{className:"main-reveal",children:[b.jsxs(u0,{children:[b.jsx(c0,{children:"01 / ABOUT"}),b.jsx(vz,{children:"제가 개발할 때 중요하게 보는 것"})]}),b.jsx(xz,{children:"한 가지 영역만 바라보기보다 실제 서비스가 어떻게 연결되고 운영되는지를 이해하며 개발하려고 합니다."})]}),b.jsxs(bz,{className:"about-grid",children:[b.jsxs(f0,{className:"about-card",children:[b.jsx(d0,{children:"01 / FRONTEND"}),b.jsxs(h0,{children:[b.jsx("h3",{children:"사용자 화면"}),b.jsx("p",{children:"React와 Vue를 활용해 사용자에게 직접 보이는 화면과 인터랙션을 구현합니다."})]})]}),b.jsxs(f0,{className:"about-card",children:[b.jsx(d0,{children:"02 / SERVICE"}),b.jsxs(h0,{children:[b.jsx("h3",{children:"서비스 흐름"}),b.jsx("p",{children:"API, 사용자 상태, 권한과 데이터 흐름을 이해하고 화면과 자연스럽게 연결합니다."})]})]}),b.jsxs(f0,{className:"about-card",children:[b.jsx(d0,{children:"03 / TEAM"}),b.jsxs(h0,{children:[b.jsx("h3",{children:"협업과 결과"}),b.jsx("p",{children:"일정과 QA, 유지보수성을 함께 고려하며 팀이 결과를 낼 수 있는 방향을 고민합니다."})]})]})]})]}),b.jsxs(od,{children:[b.jsx(ld,{className:"section-line"}),b.jsxs(Kw,{className:"main-reveal",children:[b.jsx(u0,{children:b.jsx(c0,{children:"02 / STACK"})}),b.jsx(Zw,{children:"실무와 개인 프로젝트에서 직접 사용한 기술을 중심으로 정리했습니다."})]}),b.jsx(Qw,{className:"main-reveal",children:b.jsx(Bj,{})})]}),b.jsxs(od,{children:[b.jsx(ld,{className:"section-line"}),b.jsxs(Kw,{className:"main-reveal",children:[b.jsx(u0,{children:b.jsx(c0,{children:"03 / EDUCATION"})}),b.jsx(Zw,{children:"현재까지의 학력입니다."})]}),b.jsx(Qw,{className:"main-reveal",children:b.jsx(qj,{})})]}),b.jsxs(od,{children:[b.jsx(ld,{className:"section-line"}),b.jsxs(_z,{className:"main-reveal",children:[b.jsxs(wz,{children:[b.jsx("h2",{children:"프로젝트에서 더 자세히 보여드릴게요."}),b.jsx("p",{children:"개인 프로젝트와 실제 구현 경험, 사용 기술과 문제 해결 과정을 프로젝트 페이지에 정리해두었습니다."})]}),b.jsxs(Sz,{children:[b.jsx(rd,{className:"mag-zone",children:b.jsx(ad,{className:"mag-target",children:b.jsx(Rs.GradientBtn,{onClick:()=>n("/project"),children:b.jsx(sd,{className:"mag-label",children:"프로젝트 보러가기 ▶"})})})}),b.jsx(rd,{className:"mag-zone",children:b.jsx(ad,{className:"mag-target",children:b.jsx(Rs.GradientBtn,{onClick:()=>n("/personal"),children:b.jsx(sd,{className:"mag-label",children:"경력 보기 ▶"})})})})]})]})]})]})})},Ez=N.div`
  margin: 2rem 0;
`,Az=N.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--gray-100);
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`,Cz=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    gap: 0.625rem;
  }
`,Iw=N(ht.a)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
  background: rgba(118, 164, 218, 0.1);
  border: 1.5px solid rgba(118, 164, 218, 0.3);
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--gray-100);
  text-decoration: none;
  transition: all 0.3s ease;
  word-break: break-all;
  overflow-wrap: break-word;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '→';
    margin-left: 0.5rem;
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: rgba(118, 164, 218, 0.2);
    border-color: var(--primary-color);
    transform: translateX(4px);
    
    &::after {
      opacity: 1;
      transform: translateX(4px);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 0.625rem 0.875rem;
    font-size: 0.85rem;
    border-radius: 8px;
  }
`,ud=({title:n,links:t})=>{const r=()=>typeof t=="string"?b.jsx(Iw,{href:t,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.3},children:t}):t.map((a,s)=>b.jsx(Iw,{href:a,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.3,delay:s*.1},children:a},s));return b.jsxs(Ez,{children:[b.jsx(Az,{children:n}),b.jsx(Cz,{children:r()})]})},Rz="/portfolio/assets/video_thumb-CBpaTUEU.png",cd={once:!0,amount:.2},Kr={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.55,ease:"easeOut"}}},Mz={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:.55,ease:"easeOut"}}},p0={hidden:{opacity:0,scale:.75},visible:{opacity:1,scale:1,transition:{type:"spring",stiffness:220,damping:18}}},fd={hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:.1}}},Dz=N(ht.div)`
  font-size: 1.5rem;
  font-weight: 700;

  margin: 2.5rem 0 1.5rem 0;
  padding-bottom: 0.75rem;

  border-bottom:
    3px solid var(--primary-color);

  color: var(--gray-100);

  line-height: 1.4;

  position: relative;

  &::before {
    content: "";

    position: absolute;

    bottom: -3px;
    left: 0;

    width: 60px;
    height: 3px;

    background: var(--primary-light);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,Oz=N(ht.div)`
  font-size: 1.2rem;
  font-weight: 600;

  margin: 1.5rem 0 1rem 0;

  color: var(--primary-color);

  display: flex;
  align-items: center;

  gap: 0.5rem;

  &::before {
    content: "";

    width: 4px;
    height: 1.2rem;

    background: var(--primary-color);

    border-radius: 2px;
  }
`,jz=N(ht.h4)`
  font-size: 1.8rem;
  font-weight: 600;

  line-height: 1.4;

  margin-bottom: 1rem;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`,zz=N(ht.div)`
  display: flex;
  flex-wrap: wrap;

  gap: 0.75rem;

  margin-bottom: 0.5rem;
`,kz=N(ht.div)`
  display: inline-flex;
  align-items: center;

  padding: 0.5rem 1rem;

  background: rgba(118, 164, 218, 0.15);

  border:
    1px solid rgba(118, 164, 218, 0.3);

  border-radius: 20px;

  font-size: 0.9rem;
  font-weight: 500;

  color: var(--gray-100);
`,Lz=N(ht.div)`
  width: 100%;
`,Nz=N(ht.div)`
  width: 100%;
`,Pz=N.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  cursor: zoom-in;
`,Bz=N(ht.img)`
  display: block;
  width: 100%;
  height: auto;
  max-height: 600px;

  object-fit: contain;
  user-select: none;
`,Ww=N.button`
  position: absolute;
  top: 50%;

  ${({$direction:n})=>n==="prev"?"left: 1rem;":"right: 1rem;"}

  z-index: 5;

  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid rgba(154, 189, 230, 0.5);
  border-radius: 50%;

  background: rgba(114, 130, 151, 0.85);

  transform: translateY(-50%);

  transition:
    opacity 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  /* 화살표 */
  &::before {
    content: "";

    width: 10px;
    height: 10px;

    border-top: 2px solid #fff;
    border-right: 2px solid #fff;

    ${({$direction:n})=>n==="prev"?`
          transform: translateX(2px) rotate(-135deg);
        `:`
          transform: translateX(-2px) rotate(45deg);
        `}
  }

  &:hover:not(:disabled) {
    background: rgba(116, 125, 136, 0.95);
  }

  &:disabled {
    opacity: 0.25;
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;

    ${({$direction:n})=>n==="prev"?"left: 0.5rem;":"right: 0.5rem;"}
  }
`,Vz=N(ht.div)`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(6px);
`,Uz=N(ht.div)`
  position: relative;

  width: min(86vw, 1200px);
  height: min(84vh, 860px);

  display: flex;
  align-items: center;
  justify-content: center;
`,Hz=N(ht.img)`
  display: block;

  max-width: 100%;
  max-height: 100%;

  width: auto;
  height: auto;

  object-fit: contain;
  user-select: none;
`,Jw=N.button`
  position: absolute;
  top: 50%;

  ${({$direction:n})=>n==="prev"?"left: 32px;":"right: 32px;"}

  z-index: 10001;

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  border: 1px solid rgba(154, 189, 230, 0.5);
  border-radius: 50%;

  background: rgba(114, 130, 151, 0.85);
  transform: translateY(-50%);

  transition:
    opacity 0.2s ease,
    background 0.2s ease;

  /* 화살표 직접 그리기 */
  &::before {
    content: "";

    width: 11px;
    height: 11px;

    border-top: 2px solid #fff;
    border-right: 2px solid #fff;

    ${({$direction:n})=>n==="prev"?`
          transform: translateX(2px) rotate(-135deg);
        `:`
          transform: translateX(-2px) rotate(45deg);
        `}
  }

  &:hover:not(:disabled) {
    background: rgba(116, 125, 136, 0.95);
  }

  &:active:not(:disabled) {
    background: rgba(116, 125, 136, 0.95);
  }

  &:disabled {
    opacity: 0.18;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;

    ${({$direction:n})=>n==="prev"?"left: 12px;":"right: 12px;"}

    &::before {
      width: 9px;
      height: 9px;
    }
  }
`,Yz=N.div`
  position: absolute;
  left: 50%;
  bottom: 24px;

  z-index: 10001;

  transform: translateX(-50%);

  padding: 0.4rem 0.75rem;
  border-radius: 999px;

  background: rgba(0, 0, 0, 0.65);
  color: #fff;

  font-size: 0.85rem;
  pointer-events: none;
`,Gz=N.button`
  /*
   * ModalBackdrop 자체가 position: fixed + inset: 0 이므로
   * 그 안에서 absolute로 고정하면 이미지 scale 애니메이션과
   * 아무 상관 없이 우측 상단 위치가 항상 동일함.
   */
  position: absolute;
  top: 20px;
  right: 20px;

  z-index: 10002;

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.68);

  /*
   * transform을 transition 대상에서 완전히 제외.
   * hover / active 시 버튼 위치와 크기가 절대 변하지 않음.
   */
  transform: none !important;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;

    left: 50%;
    top: 50%;

    width: 22px;
    height: 2px;

    border-radius: 999px;
    background: #fff;

    transform-origin: center;
  }

  &::before {
    transform:
      translate(-50%, -50%)
      rotate(45deg);
  }

  &::after {
    transform:
      translate(-50%, -50%)
      rotate(-45deg);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.88);
    border-color: rgba(255, 255, 255, 0.7);
    transform: none !important;
  }

  &:active {
    background: rgba(0, 0, 0, 0.95);
    transform: none !important;
  }

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;

    width: 44px;
    height: 44px;

    &::before,
    &::after {
      width: 19px;
    }
  }
`,Xz={back:"Back-end",front:"Front-end",database:"Database",ai:"AI",build:"Build 도구"},qz=()=>{var R,O;const[n,t]=k.useState(null),[r,a]=k.useState(!1),[s,u]=k.useState(0),[c,f]=k.useState(0);k.useEffect(()=>{const M=localStorage.getItem("project");M&&t(JSON.parse(M))},[]);const h=(n==null?void 0:n.detail.image.length)??0,p=s>0,g=s<h-1,y=c>0,x=c<h-1,v=M=>{f(M),a(!0)},w=()=>{a(!1)},S=()=>{p&&u(M=>M-1)},C=()=>{g&&u(M=>M+1)},A=()=>{y&&f(M=>M-1)},D=()=>{x&&f(M=>M+1)};return k.useEffect(()=>{if(!r)return;const M=document.body.style.overflow,P=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";const z=V=>{if(V.key==="Escape"){a(!1);return}V.key==="ArrowLeft"&&f(X=>Math.max(X-1,0)),V.key==="ArrowRight"&&f(X=>Math.min(X+1,Math.max(h-1,0)))};return window.addEventListener("keydown",z),()=>{document.body.style.overflow=M,document.documentElement.style.overflow=P,window.removeEventListener("keydown",z)}},[r,h]),b.jsx(ky,{children:n?b.jsxs(b.Fragment,{children:[b.jsxs(ht.div,{className:"detail-container",variants:Mz,initial:"hidden",animate:"visible",children:[b.jsx(Q5,{page:"detail",title:n.title}),b.jsxs(ht.div,{className:"detail-content-container",variants:fd,initial:"hidden",animate:"visible",children:[b.jsx(Lz,{className:"detail-img-container",variants:p0,children:n.detail.image.length===1?b.jsx(ht.img,{src:n.detail.image[0].src,loading:"lazy",alt:"프로젝트 이미지",onClick:()=>v(0),whileHover:{scale:1.04,rotate:.5},whileTap:{scale:.96},transition:{type:"spring",stiffness:250,damping:18}}):b.jsxs(Pz,{onClick:()=>v(s),children:[b.jsx(Bz,{src:(R=n.detail.image[s])==null?void 0:R.src,loading:"lazy",alt:`${n.title} 프로젝트 이미지 ${s+1}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},draggable:!1},s),b.jsx(Ww,{type:"button",$direction:"prev","aria-label":"이전 이미지",disabled:!p,onClick:M=>{M.stopPropagation(),S()}}),b.jsx(Ww,{type:"button",$direction:"next","aria-label":"다음 이미지",disabled:!g,onClick:M=>{M.stopPropagation(),C()}})]})}),b.jsxs(Nz,{className:"detail-content",variants:Kr,children:[b.jsx(jz,{variants:Kr,children:n.content}),b.jsx(ht.p,{className:"detail-sub-content",variants:Kr,dangerouslySetInnerHTML:{__html:n.detail.content}}),n.detail.video&&b.jsx(ht.div,{className:"video-wrap",variants:p0,initial:"hidden",whileInView:"visible",viewport:cd,children:b.jsx("video",{src:n.detail.video,poster:Rz,autoPlay:!0,playsInline:!0,controls:!0,muted:!0,"aria-label":"시연영상"})}),b.jsxs(ht.div,{variants:fd,initial:"hidden",whileInView:"visible",viewport:cd,children:[n.detail.github&&b.jsx(ht.div,{variants:Kr,children:b.jsx(ud,{title:"GitHub",links:n.detail.github})}),n.detail.notion&&b.jsx(ht.div,{variants:Kr,children:b.jsx(ud,{title:"Notion",links:n.detail.notion})}),n.detail.site&&b.jsx(ht.div,{variants:Kr,children:b.jsx(ud,{title:"URL",links:n.detail.site})}),n.detail.blog&&n.detail.blog.length>0&&b.jsx(ht.div,{variants:Kr,children:b.jsx(ud,{title:"Blog",links:n.detail.blog})})]}),b.jsx(Dz,{variants:Kr,initial:"hidden",whileInView:"visible",viewport:cd,children:"기술 스택"}),n.detail.stack&&Object.entries(n.detail.stack??{}).map(([M,P])=>{const z=M,V=P;return V.length===0?null:b.jsxs(ht.div,{initial:"hidden",whileInView:"visible",viewport:cd,variants:fd,children:[b.jsx(Oz,{variants:Kr,children:Xz[z]}),b.jsx(zz,{variants:fd,children:V.map(X=>b.jsx(kz,{variants:p0,whileHover:{scale:1.08,y:-4,background:"rgba(118, 164, 218, 0.25)",borderColor:"var(--primary-color)"},whileTap:{scale:.96},children:X},X))})]},z)})]})]})]}),b.jsx(Vd,{children:r&&b.jsxs(Vz,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:w,children:[b.jsx(Uz,{initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.96},transition:{duration:.18},onClick:M=>M.stopPropagation(),children:b.jsx(Hz,{src:(O=n.detail.image[c])==null?void 0:O.src,alt:`${n.title} 프로젝트 이미지 ${c+1}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:.18},draggable:!1},c)}),h>1&&b.jsxs(b.Fragment,{children:[b.jsx(Jw,{type:"button",$direction:"prev","aria-label":"이전 이미지",disabled:!y,onClick:M=>{M.stopPropagation(),A()}}),b.jsx(Jw,{type:"button",$direction:"next","aria-label":"다음 이미지",disabled:!x,onClick:M=>{M.stopPropagation(),D()}}),b.jsxs(Yz,{children:[c+1," / ",h]})]}),b.jsx(Gz,{type:"button","aria-label":"이미지 크게 보기 닫기",onClick:M=>{M.stopPropagation(),w()}})]})})]}):b.jsx("p",{children:"프로젝트 정보를 불러오는 중..."})})},Fz=N(ht.div)`
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin-bottom: 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  
  color: var(--white-100);
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));

  border-radius: 10px;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 0.95rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-top: 0.875rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.85rem;
      margin-top: 0.75rem;
    }
  }

  .content-wrapper {
    flex: 1 1 auto;
  }
  
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    gap: 0.75rem;
    flex-shrink: 0;
    
    @media (max-width: 768px) {
      gap: 0.625rem;
      margin-top: 0.875rem;
    }
    
    @media (max-width: 480px) {
      gap: 0.5rem;
      margin-top: 0.75rem;
    }
  }
  
  @media (max-width: 1200px) {
    padding: 1.75rem;
    min-height: 180px;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 160px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
    min-height: 140px;
    border-radius: 6px;
  }
  
  @media (max-width: 360px) {
    padding: 1rem;
    min-height: 120px;
  }
`,$z=N.div`
  width: fit-content;
  padding: 5px 15px;
  border-radius: 50px;
  background: var(--gray-300);
  color: var(--gray-100);
  font-size: 0.85rem;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 4px 12px;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 3px 10px;
    font-size: 0.75rem;
  }
`,Qz=({project:n,onClick:t})=>b.jsxs(Fz,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},children:[b.jsxs("div",{className:"content-wrapper",children:[b.jsx("h3",{children:n.title}),b.jsx("p",{children:n.content})]}),b.jsx("div",{className:"tag-container",children:n.tags.map((r,a)=>b.jsx($z,{children:r},a))})]}),Kz="/portfolio/assets/yamiyagi-YZU8s5Rh.png",Zz="/portfolio/assets/hojin_main-DctrGh5X.png",Iz="/portfolio/assets/hojin_detail-DNvwE2_Y.png",Wz="/portfolio/assets/petmung-B03BhRsi.png",Jz="/portfolio/assets/portfolio-AHcDy501.png",tk="/portfolio/assets/invitation-BC-lSSMD.png",ek="/portfolio/assets/hojin_video-C1LpzS2j.mp4",nk=[{id:1,title:"야미야기",content:"아이들의 상상력으로 만들어지는 동화 웹사이트",mainTab:"back",subTab:"django",tags:["Python","Django","PostgreSQL"],detail:{notion:"https://www.notion.so/teamsparta/IAM-8ad9729b3dfb42e3a25c72c22106a72a",notion_vedio:"https://teamsparta.notion.site/7a49bd323df7456ebd58e9bb32360a8d",blog:[],content:`
            아이들이 원하는 주제로 동화를 만들 수 있는 웹페이지입니다. 
            <br /> ChapGPT 로 주제에 기반한 동화를 생성하고,  
            <br /> Perspective API 로 사용자가 입력한 주제 및 생성된 동화의 폭력성을 검증합니다. 
            <br /> Deepl API 사용하여 생성된 동화를 번역하며, DALL-E API 로 동화 내용의 그림을 생성합니다.
            <br /><br /> 총 인원 6명이 참여했습니다.
            <br /> 저는 구글, 카카오톡, 네이버 소셜 로그인을 가장 크게 담당했고,
            <br /> 최근 조회한 목록, 북마크한 내서재, 내가 생성한 동화 목록을 모아보고
            <br /> 프로필 수정이 가능한 마이페이지를 담당했습니다.   
            `,image:[{type:"image",src:Kz}],stack:{back:["Python","Django","DRF(Django REST Framework)","Oauth 2.0"],front:["DTL(Django Template Language)","JavaScript","CSS3"],database:["PostgreSQL"],ai:["ChatGPT API","DALL-E API","DeePL API","Perspective API"]}}},{id:2,title:"펫뭉",content:"애완동물 용품 쇼핑몰 RESTful API 서버",mainTab:"back",subTab:"fastapi",tags:["Python","FastAPI","MySQL"],detail:{github:"https://github.com/Pet-Mung/Back",blog:[],content:`
            프론트엔드 1명, 백엔드 1명으로 진행한 프로젝트로 저는 백엔드를 맡아 진행했습니다.
            <br/> FastAPI 를 활용하여 로그인, 유저/판매자 구분 회원가입, 상품 crud, 장바구니 및 결제처리를 구현한 사이트입니다.
            <br/> 배포도구로는 Render를 사용했고, DB 는 supabase 를 사용했습니다.
            <br/> Render 설정 조정하여 깃허브 머지 됐을 때 자동으로 빌드되게 설정했습니다.
            `,image:[{type:"image",src:Wz}],stack:{back:["Python","FastAPI","Oauth 2.0"],database:["supabase","postgreSQL"],build:["Render"]}}},{id:3,title:"호진일보",content:"네이버 연애뉴스 모아보기 웹 사이트",mainTab:"front",subTab:"vue",tags:["Vue","Vite","JavaScript"],detail:{github:"https://github.com/HoJin-s/selenium_practice",blog:[],content:`
            매일 네이버 뉴스 연애 기사 랭킹 4위까지 가져오는 크롤링 프로젝트입니다. 
            <br/> 프론트엔드 1명, 백엔드 1명으로 진행한 프로젝트입니다.
            <br/> 이 프로젝트에서 저는 프론트엔드 개발을 맡았으며, 백엔드는 Django로 구현했습니다. 
            <br/> Django 템플릿을 Vue로 빌드한 페이지로 연동하여 프론트와 백엔드를 효과적으로 연결했습니다.
            `,video:ek,image:[{type:"image",src:Zz},{type:"image",src:Iz}],stack:{back:["Python","Django","DRF(Django REST Framework)","Selenium"],front:["Vue","Vite","JavaScript","CSS3"],database:["supabase","postgreSQL"],build:["Render"]}}},{id:4,title:"포트폴리오",content:"자기소개 및 프로젝트를 소개하는 사이트",mainTab:"front",subTab:"react",tags:["React","Vite","TypeScript"],detail:{github:"https://github.com/hjzheld/portfolio",blog:[],content:`
            리액트로 만든 프로젝트입니다.
            <br/> 혼자 진행한 프로젝트입니다.
            <br/> GitHub Actions 기반 CI/CD 파이프라인을 구축하여, 
            <br /> 머지 시 자동 빌드와 실서버 배포가 이루어지도록 배포 프로세스를 자동화했습니다.
            <br /> 자기 소개 및 그동안의 경력, 학력과 프로젝트 기록을 확인할 수 있습니다.
            <br /> 특히 경력에서 자세하게 어떤 업무를 맡았고, 어떤 성장으로 했는지 확인할 수 있습니다.
            `,image:[{type:"image",src:Jz}],stack:{front:["React","Vite","TypeScript"],build:["Github"]}}},{id:5,title:"팔순잔치 초대장",content:"모바일 환경에 최적화된 팔순잔치 초대장 웹사이트",mainTab:"front",subTab:"vue",tags:["Vue","Vite","JavaScript"],detail:{site:"https://hjzheld.github.io/birthday/",github:"https://github.com/hjzheld/birthday",blog:[],content:`
            팔순잔치를 위해 직접 기획하고 제작한 모바일 초대장 웹사이트입니다.
            <br/> 행사 소개, 초대글, 날짜 및 시간, 장소와 주차 정보를 한 페이지에서 확인할 수 있도록 구성했습니다.
            <br/> 배경음악을 적용하고 사용자가 직접 음악을 재생하거나 중지할 수 있도록 기능을 구현했습니다.
            <br/> Intersection Observer를 활용하여 스크롤 위치에 따라 콘텐츠가 자연스럽게 나타나는 애니메이션을 구현했습니다.
            <br/> 네이버 지도와 카카오 지도를 연동하여 행사 장소와 주차장까지 바로 길찾기가 가능하도록 구현했습니다.
            <br/> 모바일 환경을 중심으로 반응형 UI를 구성하여 다양한 화면 크기에서도 자연스럽게 표시되도록 작업했습니다.
            <br/> GitHub Actions 기반 CI/CD를 구성하여 main 브랜치에 Push하면 자동으로 빌드 후 GitHub Pages에 배포되도록 구현했습니다.
            `,image:[{type:"image",src:tk}],stack:{front:["Vue","Vite","JavaScript","CSS3"],build:["GitHub Actions","GitHub Pages"]}}}],tS=[{title:"전체",type:"all"},{title:"프론트엔드",subTitle:[{title:"Vue",type:"vue",active:!1},{title:"React",type:"react",active:!1}],type:"front"},{title:"백엔드",subTitle:[{title:"Django",type:"django",active:!1},{title:"FastAPI",type:"fastapi",active:!1}],type:"back"}];let m0=null;const ik=()=>{const n=$i(),t=_8(),r=()=>{m0=n.key},a=t==="POP"&&m0===n.key;return{markProjectDetailOpen:r,isReturningFromProjectDetail:a,clearProjectReturn:()=>{m0=null}}};yt.registerPlugin(Ar);const rk=N.div`
  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow: visible;
`,ak=N.div`
    position: relative;

    width: 100%;

    /*
     * 프로젝트 화면이
     * transition보다 먼저 보이는 것 방지
     */
    visibility: hidden;

    clip-path:
      circle(
        0%
        at
        50%
        50%
      );

    will-change:
      clip-path;
  `,sk=N.div`
    width: 100%;
  `,ok=N.div`
    position: fixed;

    inset: 0;

    z-index: 5000;

    overflow: hidden;

    pointer-events: none;
  `,Ly=N.div`
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    will-change:
      transform;
  `,lk=N(Ly)`
  z-index: 1;

  background:
    var(
      --project-transition-blue
    );
`,uk=N(Ly)`
  z-index: 2;

  background:
    var(
      --project-transition-lavender
    );
`,ck=N(Ly)`
  z-index: 3;

  background:
    var(
      --project-transition-mist
    );
`,fk=N.div`
    position: absolute;

    inset: 0;

    z-index: 4;

    pointer-events: none;
  `,dk=N.div`
    position: absolute;

    left: 50%;
    top: 50%;

    width: min(
      44vw,
      520px
    );

    aspect-ratio: 1;

    transform:
      translate(
        -50%,
        -50%
      );

    border:
      1px solid
      var(
        --project-transition-line
      );

    border-radius: 50%;

    opacity: 0.75;

    box-shadow:
      0
      20px
      60px
      var(
        --project-transition-shadow
      );

    &::before {
      content: "";

      position: absolute;

      inset: 12%;

      border:
        1px solid
        var(
          --project-transition-line
        );

      border-radius:
        inherit;

      opacity: 0.7;
    }

    &::after {
      content: "";

      position: absolute;

      inset: 27%;

      border:
        1px solid
        var(
          --project-transition-line
        );

      border-radius:
        inherit;

      opacity: 0.5;
    }

    @media (
      max-width:
      768px
    ) {
      width: 72vw;
    }

    @media (
      max-width:
      480px
    ) {
      width: 86vw;
    }
  `,hk=N.div`
    position: absolute;

    left: 50%;
    top: 50%;

    z-index: 5;

    transform:
      translate(
        -50%,
        -50%
      );

    display: flex;

    flex-direction: column;

    align-items:
      center;

    text-align:
      center;

    pointer-events:
      none;
  `,pk=N.span`
    margin-bottom:
      0.75rem;

    color:
      var(
        --project-transition-text
      );

    font-family:
      var(--font-en);

    font-size:
      0.67rem;

    font-weight:
      500;

    letter-spacing:
      0.2em;
  `,mk=N.strong`
    color:
      var(--gray-100);

    font-family:
      var(--font-en);

    font-size:
      clamp(
        2.8rem,
        7vw,
        6rem
      );

    font-weight:
      600;

    line-height:
      0.95;

    letter-spacing:
      -0.06em;

    white-space:
      nowrap;

    @media (
      max-width:
      480px
    ) {
      font-size:
        clamp(
          2.3rem,
          15vw,
          4rem
        );
    }
  `,gk=N.div`
    width: 52px;
    height: 1px;

    margin-top:
      1.2rem;

    background:
      var(
        --primary-color
      );

    transform-origin:
      center;
  `,yk=N.div`
    width: 100%;

    max-width: 800px;

    margin: 0 auto;

    padding:
      2rem
      2rem
      1rem;

    min-height: 50px;

    display: flex;

    justify-content:
      center;

    align-items:
      center;

    gap: 2rem;

    flex-wrap:
      wrap;

    @media (
      max-width:
      1200px
    ) {
      padding:
        1.75rem
        1.5rem
        0.75rem;

      gap: 1.5rem;
    }

    @media (
      max-width:
      768px
    ) {
      padding:
        1.5rem
        1rem
        0.5rem;

      gap: 1rem;
    }

    @media (
      max-width:
      480px
    ) {
      padding:
        1rem
        0.5rem
        0.5rem;

      gap:
        0.75rem;
    }

    @media (
      max-width:
      360px
    ) {
      padding:
        0.75rem
        0.25rem
        0.5rem;

      gap:
        0.5rem;
    }
  `,vk=N(ht.div)`
    min-height: 30px;

    margin-top:
      1.5rem;

    margin-bottom:
      1rem;

    padding:
      0
      2rem;

    display: flex;

    justify-content:
      center;

    align-items:
      center;

    flex-wrap:
      wrap;

    gap: 1rem;

    @media (
      max-width:
      1200px
    ) {
      padding:
        0
        1.5rem;

      gap:
        0.875rem;
    }

    @media (
      max-width:
      768px
    ) {
      padding:
        0
        1rem;

      gap:
        0.75rem;

      margin-top:
        1rem;

      margin-bottom:
        0.75rem;
    }

    @media (
      max-width:
      480px
    ) {
      padding:
        0
        0.5rem;

      gap:
        0.5rem;

      margin-top:
        0.75rem;

      margin-bottom:
        0.5rem;
    }

    @media (
      max-width:
      360px
    ) {
      padding:
        0
        0.25rem;

      gap:
        0.375rem;
    }
  `,xk=N.div`
    width: 100%;

    max-width: 1200px;

    margin: 0 auto;

    padding:
      2rem
      1.5rem;

    display: grid;

    grid-template-columns:
      repeat(
        auto-fill,
        minmax(
          300px,
          1fr
        )
      );

    gap: 2rem;

    align-items:
      stretch;

    @media (
      max-width:
      1200px
    ) {
      grid-template-columns:
        repeat(
          auto-fill,
          minmax(
            280px,
            1fr
          )
        );

      gap:
        1.5rem;

      padding:
        1.5rem
        1.25rem;
    }

    @media (
      max-width:
      992px
    ) {
      grid-template-columns:
        repeat(
          auto-fill,
          minmax(
            260px,
            1fr
          )
        );

      gap:
        1.25rem;

      padding:
        1.25rem
        1rem;
    }

    @media (
      max-width:
      768px
    ) {
      grid-template-columns:
        repeat(
          auto-fill,
          minmax(
            240px,
            1fr
          )
        );

      gap: 1rem;

      padding:
        1rem;
    }

    @media (
      max-width:
      640px
    ) {
      grid-template-columns:
        1fr;

      gap: 1rem;

      padding:
        1rem;
    }

    @media (
      max-width:
      480px
    ) {
      gap:
        0.875rem;

      padding:
        0.75rem;
    }

    @media (
      max-width:
      360px
    ) {
      gap:
        0.75rem;

      padding:
        0.5rem;
    }
  `,bk=N(ht.div)`
    display: flex;

    height: 100%;
  `,_k=N.div`
    display: flex;

    width: 100%;
    height: 100%;

    transform-origin:
      50%
      100%;

    will-change:
      transform,
      opacity;
  `,wk=()=>{const n=Gs(),t=k.useRef(null),{markProjectDetailOpen:r,isReturningFromProjectDetail:a,clearProjectReturn:s}=ik(),u=k.useRef(a),c=k.useRef(!1),f=k.useRef(!1),[h,p]=k.useState("all"),[g,y]=k.useState(null);Ar(()=>{var M,P;const w=(M=t.current)==null?void 0:M.querySelector(".project-content"),S=(P=t.current)==null?void 0:P.querySelector(".project-transition");if(!w||!S)return;const C=window.matchMedia("(prefers-reduced-motion: reduce)").matches,A=u.current;if(A||C){A&&s(),yt.set(S,{display:"none"}),yt.set(w,{visibility:"visible",clipPath:"none",zIndex:"auto"}),yt.set([".project-page-intro",".project-category",".project-card"],{clearProps:"opacity,transform"}),c.current=!0;return}c.current=!1;const D=document.body.style.overflow,R=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",yt.set(w,{visibility:"hidden",clipPath:"circle(0% at 50% 50%)",zIndex:"auto"}),yt.set(".project-page-intro",{opacity:0,y:22}),yt.set(".project-category",{opacity:0,y:16}),yt.set(".project-card",{opacity:0,y:58,scale:.94,rotation:z=>z%2===0?-3.2:3.2,transformOrigin:"50% 100%"}),yt.set(S,{display:"block",visibility:"visible",opacity:1}),yt.set(".transition-blue",{xPercent:0}),yt.set(".transition-lavender",{xPercent:0}),yt.set(".transition-mist",{xPercent:0}),yt.set(".transition-circle",{opacity:1,scale:1}),yt.set(".transition-content",{opacity:1,scale:1});const O=yt.timeline({defaults:{overwrite:"auto"}});return O.from(".transition-circle",{opacity:0,scale:.8,duration:.65,ease:"power3.out"}),O.from(".transition-label",{opacity:0,y:8,duration:.3,ease:"power2.out"},"-=0.38"),O.from(".transition-title",{opacity:0,y:20,scale:.96,duration:.55,ease:"power3.out"},"-=0.25"),O.from(".transition-line",{scaleX:0,duration:.38,ease:"power2.out"},"-=0.25"),O.to(".transition-mist",{xPercent:100,duration:.58,ease:"power3.inOut"},"+=0.08"),O.to(".transition-lavender",{xPercent:-100,duration:.62,ease:"power3.inOut"},"-=0.34"),O.to(".transition-blue",{xPercent:100,duration:.68,ease:"power4.inOut"},"-=0.35"),O.to(".transition-content",{opacity:0,scale:.95,duration:.3,ease:"power2.in"},"-=0.42"),O.to(".transition-circle",{opacity:0,scale:1.15,duration:.35,ease:"power2.in"},"<"),O.set(w,{visibility:"visible",zIndex:5001}),O.to(w,{clipPath:"circle(150% at 50% 50%)",duration:1.05,ease:"power4.inOut"}),O.set(S,{visibility:"hidden"}),O.set(w,{clipPath:"none",zIndex:"auto",visibility:"visible"}),O.to(".project-page-intro",{opacity:1,y:0,duration:.48,ease:"power3.out",clearProps:"transform,opacity"}),O.to(".project-category",{opacity:1,y:0,duration:.4,ease:"power2.out",clearProps:"transform,opacity"},"-=0.25"),O.to(".project-card",{opacity:1,y:0,scale:1,rotation:0,duration:.72,stagger:{each:.075,from:"start"},ease:"back.out(1.55)",clearProps:"transform,opacity"},"-=0.12"),O.call(()=>{c.current=!0,document.body.style.overflow=D,document.documentElement.style.overflow=R}),()=>{O.kill(),document.body.style.overflow=D,document.documentElement.style.overflow=R}},{scope:t}),Ar(()=>{if(!c.current||!f.current)return;f.current=!1;const w=yt.utils.toArray(".project-card");w.length&&(yt.killTweensOf(w),yt.fromTo(w,{opacity:0,y:32,scale:.965,rotation:S=>S%2===0?-2.2:2.2,transformOrigin:"50% 100%"},{opacity:1,y:0,scale:1,rotation:0,duration:.56,stagger:{each:.055,from:"start"},ease:"back.out(1.4)",clearProps:"transform,opacity",overwrite:"auto"}))},{scope:t,dependencies:[h,g]});const x=[...nk].sort((w,S)=>S.id-w.id).filter(w=>h==="all"?!0:!(h!==w.mainTab||g&&g!==w.subTab)),v=tS.find(w=>w.type===h);return b.jsxs(rk,{ref:t,children:[b.jsxs(ok,{className:"project-transition",children:[b.jsx(lk,{className:"transition-blue"}),b.jsx(uk,{className:"transition-lavender"}),b.jsx(ck,{className:"transition-mist"}),b.jsx(fk,{children:b.jsx(dk,{className:"transition-circle"})}),b.jsxs(hk,{className:"transition-content",children:[b.jsx(pk,{className:"transition-label",children:"02 / PROJECT"}),b.jsx(mk,{className:"transition-title",children:"PROJECTS"}),b.jsx(gk,{className:"transition-line"})]})]}),b.jsx(ak,{className:"project-content",children:b.jsxs(ky,{children:[b.jsx(sk,{className:"project-page-intro",children:b.jsx(Q5,{page:"main",title:"포트폴리오"})}),b.jsx(yk,{className:"project-category",children:tS.map(w=>b.jsx(ht.div,{whileHover:{scale:1.06,y:-3},whileTap:{scale:.95},transition:{type:"spring",stiffness:300,damping:18},children:b.jsx(Rs.CategoryBtn,{tab:w,active:h===w.type,onClick:()=>{f.current=!0,p(w.type),y(null)}})},w.type))}),b.jsx(Vd,{mode:"wait",children:(v==null?void 0:v.subTitle)&&b.jsx(vk,{initial:{opacity:0,scale:.95,y:-8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-8},transition:{duration:.25,ease:"easeOut"},children:b.jsx(Rs.SubCategory,{tab:v,active:!0,selectedSub:g??void 0,onClick:w=>{w&&(f.current=!0,y(w.type))}})},v.type)}),b.jsx(xk,{children:b.jsx(Vd,{mode:"popLayout",children:x.map(w=>b.jsx(bk,{layout:!0,initial:!1,exit:{opacity:0,scale:.94,y:18},transition:{layout:{type:"spring",stiffness:280,damping:26},opacity:{duration:.2},scale:{duration:.22}},whileHover:{y:-7,scale:1.015},whileTap:{scale:.98},children:b.jsx(_k,{className:"project-card",children:b.jsx(Qz,{project:w,onClick:()=>{localStorage.setItem("project",JSON.stringify(w)),r(),n(`/project/${w.id}`)}})})},w.id))})})]})})]})};yt.registerPlugin(kt,Ar);const Sk=N.svg`
  position: fixed;
  inset: 0;
  z-index: 9998;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .shape-overlays__path {
    will-change: d;
  }
`,Tk=N.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  color: rgba(255, 255, 255, 0.95);
  font-family: var(--font-en);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  pointer-events: none;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
  }

  @media (max-width: 480px) {
    font-size: 0.64rem;
  }
`,Ek=N.div`
  position: relative;
  width: 100%;
  padding: 1.5rem 0 7rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.75rem 0 4rem;
  }
`,Ak=N.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.875rem;
  }
`,Do=N.section`
  padding: 5rem 0 0;

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`,Oo=N.div`
  width: 100%;
  height: 1px;
  margin-bottom: 3.5rem;
  background: linear-gradient(
    90deg,
    rgba(118, 164, 218, 0),
    rgba(118, 164, 218, 0.36),
    rgba(118, 164, 218, 0)
  );
  transform-origin: left;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,jo=N.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: end;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`,zo=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ko=N.span`
  color: var(--primary-color);
  font-family: var(--font-en);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
`,Lo=N.h2`
  color: var(--gray-100);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  letter-spacing: -0.045em;
`,No=N.p`
  color: var(--gray-400);
  font-size: 0.9rem;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`,Ck=N.section`
  position: relative;
  width: 100%;
  margin-top: 1.5rem;
  padding: clamp(2rem, 5vw, 4.8rem);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 34px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.7),
    rgba(241, 248, 255, 0.58)
  );
  box-shadow:
    0 24px 60px rgba(99, 99, 99, 0.08),
    0 8px 24px rgba(118, 164, 218, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 320px;
    height: 320px;
    right: -110px;
    top: -130px;
    background: rgba(118, 164, 218, 0.13);
  }

  &::after {
    width: 220px;
    height: 220px;
    left: -90px;
    bottom: -120px;
    background: rgba(190, 188, 216, 0.16);
  }

  @media (max-width: 768px) {
    margin-top: 0.75rem;
    padding: 2.3rem 1.5rem;
    border-radius: 26px;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1.2rem;
    border-radius: 22px;
  }
`,Rk=N.div`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  gap: 0.55rem;
  margin-bottom: 1.35rem;
  padding: 0.48rem 0.82rem;
  border: 1px solid rgba(118, 164, 218, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.48);
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.04em;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--primary-color);
    box-shadow: 0 0 0 5px rgba(118, 164, 218, 0.1);
  }
`,Mk=N.h1`
  position: relative;
  z-index: 2;
  max-width: 850px;
  color: var(--gray-100);
  font-size: clamp(1.7rem, 3vw, 3.6rem);
  line-height: 1.08;
  letter-spacing: -0.06em;
  word-break: keep-all;

  strong {
    color: var(--primary-color);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.35rem, 8.5vw, 4rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2.05rem, 10vw, 3rem);
    line-height: 1.13;
  }
`,Dk=N.p`
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin-top: 1.6rem;
  color: var(--gray-400);
  font-size: 1rem;
  line-height: 1.9;
  word-break: keep-all;

  strong {
    color: var(--gray-100);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.94rem;
  }

  @media (max-width: 480px) {
    margin-top: 1.25rem;
    font-size: 0.88rem;
    line-height: 1.8;
  }
`,Ok=N.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 3rem;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 2.2rem;
  }
`,jk=N.div`
  min-height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.2rem 1.25rem;
  border: 1px solid rgba(118, 164, 218, 0.14);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.46);
  box-shadow: 0 8px 24px rgba(118, 164, 218, 0.08);

  @media (max-width: 480px) {
    min-height: 96px;
    gap: 1rem;
  }
`,zk=N.span`
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.64rem;
  letter-spacing: 0.11em;
`,kk=N.strong`
  color: var(--gray-100);
  font-size: 1.16rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`,Lk=N.section`
  padding: 4.5rem 0 0;

  @media (max-width: 768px) {
    padding-top: 3.5rem;
  }
`,Nk=N.div`
  margin-bottom: 1.2rem;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.13em;
`,Pk=N.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`,Bk=N.span`
  padding: 0.58rem 0.9rem;
  border: 1px solid rgba(118, 164, 218, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.38);
  color: var(--gray-400);
  font-size: 0.78rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: var(--gray-100);
    border-color: rgba(118, 164, 218, 0.3);
    background: rgba(241, 248, 255, 0.75);
  }
`,wl=N(ht.article)`
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 24px;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.66),
    rgba(241, 248, 255, 0.46)
  );
  box-shadow:
    0 16px 40px rgba(99, 99, 99, 0.06),
    0 4px 14px rgba(118, 164, 218, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`,eS=N.span`
  display: block;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
  font-family: var(--font-en);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
`,dd=N.h3`
  color: var(--gray-100);
  font-size: 1.22rem;
  line-height: 1.45;
  letter-spacing: -0.03em;
  word-break: keep-all;
`,g0=N.p`
  margin-top: 0.75rem;
  color: var(--gray-400);
  font-size: 0.86rem;
  line-height: 1.75;
  word-break: keep-all;
`,hd=N.ul`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-top: 1rem;
`,pd=N.li`
  position: relative;
  padding-left: 1rem;
  color: var(--gray-100);
  font-size: 0.84rem;
  line-height: 1.7;
  word-break: keep-all;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.68rem;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(118, 164, 218, 0.9);
  }
`,nS=N.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.2rem;
`,iS=N.span`
  padding: 0.4rem 0.65rem;
  border: 1px solid rgba(118, 164, 218, 0.13);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.45);
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.67rem;
`,Vk=N.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Uk=N(wl)`
  min-height: 235px;
  padding: 1.5rem;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(118, 164, 218, 0.28);
  }
`,Hk=N.span`
  display: block;
  margin-bottom: 2rem;
  color: var(--primary-color);
  font-family: var(--font-en);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.08em;
`,Yk=N.h3`
  color: var(--gray-100);
  font-family: var(--font-en);
  font-size: 1rem;
  font-weight: 600;
`,Gk=N.p`
  margin-top: 0.55rem;
  color: var(--gray-400);
  font-size: 0.85rem;
  line-height: 1.75;
  word-break: keep-all;
`,Xk=N(wl)`
  padding: 2.2rem;

  @media (max-width: 560px) {
    padding: 1.4rem;
  }
`,qk=N.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(118, 164, 218, 0.15);

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Fk=N.h3`
  color: var(--gray-100);
  font-size: clamp(1.55rem, 3vw, 2rem);
  letter-spacing: -0.04em;
`,$k=N.p`
  margin-top: 0.45rem;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.82rem;
`,Qk=N.div`
  text-align: right;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.8rem;

  span {
    display: inline-flex;
    margin-top: 0.65rem;
    padding: 0.35rem 0.62rem;
    border-radius: 999px;
    background: rgba(118, 164, 218, 0.1);
    color: var(--primary-color);
    font-size: 0.64rem;
    font-weight: 600;
  }

  @media (max-width: 650px) {
    text-align: left;
  }
`,Kk=N.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
`,Zk=N.p`
  color: var(--gray-100);
  font-size: 0.95rem;
  line-height: 1.85;
  word-break: keep-all;
`,Ik=N.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
`,md=N.div`
  padding: 0.9rem;
  border: 1px solid rgba(118, 164, 218, 0.11);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.4);

  span {
    display: block;
    color: var(--gray-400);
    font-family: var(--font-en);
    font-size: 0.6rem;
    letter-spacing: 0.07em;
  }

  strong {
    display: block;
    margin-top: 0.4rem;
    color: var(--gray-100);
    font-size: 0.86rem;
    line-height: 1.45;
  }
`,Wk=N.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,Jk=N(wl)`
  position: relative;
  padding: 1.7rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1.4rem;
    bottom: 1.4rem;
    width: 2px;
    background: rgba(118, 164, 218, 0.72);
    border-radius: 999px;
  }
`,tL=N.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`,eL=N.span`
  flex-shrink: 0;
  color: rgba(118, 164, 218, 0.55);
  font-family: var(--font-en);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
`,nL=N.div`
  margin-top: 1.25rem;
  padding: 0.95rem 1rem;
  border: 1px solid rgba(118, 164, 218, 0.12);
  border-radius: 14px;
  background: rgba(118, 164, 218, 0.06);
  color: var(--gray-100);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.6;
`,iL=N.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,rL=N(wl)`
  padding: 1.35rem;
`,aL=N.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`,sL=N(wl)`
  grid-column: ${({$wide:n})=>n?"1 / -1":"auto"};
  padding: 1.7rem;

  @media (max-width: 800px) {
    grid-column: auto;
  }
`,oL=N.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.2rem;
`,lL=N.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--gray-100);
  font-size: 0.76rem;

  &:not(:last-child)::after {
    content: "→";
    color: rgba(118, 164, 218, 0.65);
  }
`,uL=N.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,cL=N(wl)`
  padding: 1.5rem;
`,fL=N.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.8rem;
  color: var(--gray-400);
  font-family: var(--font-en);
  font-size: 0.72rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`,dL=N.div`
  position: relative;
  margin-top: 5rem;
  padding: 3rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 26px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.54),
    rgba(216, 224, 230, 0.58)
  );
  box-shadow:
    0 16px 40px rgba(99, 99, 99, 0.06),
    0 5px 18px rgba(118, 164, 218, 0.09);

  &::after {
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    right: -70px;
    top: -100px;
    border-radius: 50%;
    background: rgba(118, 164, 218, 0.12);
  }

  h2,
  p {
    position: relative;
    z-index: 2;
  }

  h2 {
    margin-bottom: 0.8rem;
    color: var(--gray-100);
    font-size: clamp(1.5rem, 3vw, 2.2rem);    
    letter-spacing: -0.04em;
  }

  p {
    max-width: 780px;
    color: var(--gray-400);
    font-size: 0.9rem;
    line-height: 1.8;
    word-break: keep-all;
  }

  @media (max-width: 480px) {
    margin-top: 3.5rem;
    padding: 1.8rem 1.35rem;
    border-radius: 20px;
  }
`,hL=[["EXPERIENCE","2+ Years"],["MAIN ROLE","Frontend"],["EXPERIENCE","Fullstack"],["TEAM","Lead · QA"]],pL=["Vue.js","Nuxt.js","React","TypeScript","REST API","WebSocket","TradingView","ZingChart","Android WebView","Figma","Payment / Subscription","Authorization","Docker","Nginx","Team Lead","QA"],mL=[{name:"Frontend Architecture",description:"신규 프로젝트의 라우팅·인증·API 연동 구조와 공통 컴포넌트를 설계하고, 유지보수와 재사용을 고려해 초기 프론트엔드 구조를 구성합니다."},{name:"Business Logic",description:"인증·결제·구독·할인·권한처럼 사용자 상태와 서비스 정책이 맞물리는 핵심 비즈니스 로직을 화면과 API 흐름에 연결합니다."},{name:"Legacy & Refactoring",description:"외주·기존 프로젝트를 인수해 코드를 분석하고 신규 기능을 안정적으로 추가하며, 복잡한 구조를 기능별 책임으로 분리해 개선합니다."},{name:"Data & Visualization",description:"REST API·WebSocket 데이터를 화면에 연결하고 TradingView·ZingChart 등을 활용해 실시간·금융 데이터를 시각화합니다."},{name:"UI Implementation",description:"별도 퍼블리셔 없이 Figma 시안을 기반으로 직접 UI를 구현하고 PC·Mobile·Android WebView 환경에 맞춰 반응형으로 대응합니다."},{name:"Team Lead & QA",description:"프론트엔드 업무 분배·일정 조율·지연 이슈 대응을 진행하고, 기능 오류와 예외 상황을 직접 확인하며 자체 QA까지 수행합니다."}],gL=["Vue.js·Nuxt.js 기반 사용자 및 관리자 페이지 개발","신규 프로젝트 초기 구조, 인증·라우팅·공통 컴포넌트 설계","결제·구독·할인·사용자 권한 및 접근 제어 로직 구현","REST API·WebSocket 연동 및 금융 데이터 시각화","외주·운영 서비스 인수, 리팩토링, 컨버팅 및 전면 리뉴얼","별도 퍼블리셔 없이 Figma 기반 UI 직접 구현","Docker·Nginx 기반 빌드·배포와 운영 환경 대응","팀 업무 분배·일정 관리·오류 분석·자체 QA"],yL=[{title:"Nuxt 기반 가상자산 서비스 인수 및 구조 개선",subtitle:"외주 프로젝트 인수 · 인증 · 결제 · 권한 · 운영",bullets:["외주 업체가 개발하던 대규모 Nuxt 프로젝트를 인수해 기존 코드와 실행 구조 분석","Access Token 만료 시 Refresh Token 재발급 후 기존 요청을 재처리하는 인증 흐름 구현","패키지·구독·할인·결제 API 및 결제 완료 이후 상태 처리 개발","사용자 구독 상태·권한 유효기간에 따른 페이지 및 기능 접근 제어 구현","Docker·Nginx 기반 빌드 및 배포 버전 관리"],tags:["Nuxt","Vue","Auth","Payment","Docker","Nginx"],highlight:"기존 코드를 빠르게 파악해 운영 중인 서비스에 신규 기능을 안정적으로 연결한 경험"},{title:"교육 플랫폼 신규 구축 및 프론트엔드 구조 설계",subtitle:"Figma · Architecture · Auth · Enrollment · Payment",bullets:["로그인·회원가입·수강신청·결제·마이페이지 등 서비스 전반 화면 개발","초기 라우터·로그인 상태·API 연동·공통 컴포넌트 구조 설계","별도 퍼블리셔 없이 Figma 디자인 시안을 기준으로 UI 직접 구현","Access/Refresh Token 인증 흐름 및 로그인 상태별 라우터 접근 제어 구성","코드 컨벤션과 Oxfmt 포맷팅 환경을 도입해 코드 작성 기준 정리"],tags:["Vue","Figma","Architecture","REST API","Oxfmt","QA"],highlight:"화면 구현뿐 아니라 프로젝트 시작 단계에서 개발 구조와 코드 기준까지 직접 설계"},{title:"가상자산 데이터 시각화 대시보드 개발",subtitle:"TradingView · ZingChart · Responsive Data UI",bullets:["TradingView·ZingChart를 활용해 총 8개의 차트와 2개의 데이터 리스트 구현","API 데이터 구조를 화면 요구사항에 맞춰 가공하고 각 차트에 연결","PC와 모바일 환경을 고려한 반응형 데이터 UI 구성","짧은 일정 안에서 라이브러리 실제 사용 코드를 분석해 필요한 기능을 적용"],tags:["TradingView","ZingChart","REST API","Responsive","Data"],highlight:"Chart 8 · Data List 2 — 결과물이 수치로 명확하게 남는 데이터 시각화 프로젝트"},{title:"운영 서비스 전면 리뉴얼 및 권한·결제 구조 개선",subtitle:"Refactoring · State Flow · Authorization · Payment",bullets:["기존 서비스의 권한 및 결제 시스템을 변경된 정책 기준으로 전면 재검토","사용자 구독 상태·권한 기한에 따른 접근 제어 구조 재정비","패키지·결제 시스템의 데이터 흐름과 상태 관리 구조 변경","복잡하게 연결된 권한·결제 로직과 컴포넌트 책임을 분리해 유지보수성 개선"],tags:["Nuxt","Refactoring","Authorization","Payment","State"],highlight:"신규 개발보다 더 어려운 운영 코드의 구조를 분석하고 정책 변경에 대응하기 쉬운 형태로 개선"}],vL=[{title:"Android WebView 서비스",bullets:["알림 활성화·수신 항목 등록 기능 개발","Vue I18n 기반 다국어 환경 구성","구독·권한 상태별 페이지 및 기능 접근 제어"]},{title:"관리자 조직도 기능",bullets:["회원 추천·조직 구조 관리 기능 개발","상위 회원 변경 시 하위 조직 이동 로직 적용","검색·선택 노드 강조·자동 확대를 통해 관리자 사용성 개선"]},{title:"서비스 컨버팅",bullets:["기존 Nuxt 서비스 구조와 기능을 새로운 서비스 정책에 맞게 변환","공통 코드는 재사용하고 UI·권한·결제 정책 차이는 분리","두 서비스를 각각 유지보수할 수 있도록 구조화"]},{title:"공통 컴포넌트 리팩토링",bullets:["운영 중 확인된 중복 코드와 유지보수가 어려운 구조 개선","공통 컴포넌트를 세분화하고 재사용 범위를 확대","화면 간 일관성과 이후 개발 효율 향상"]}],xL=["User Flow","Process Flow","Figma","ERD","API Design","Back-end","Front-end","QA","User Feedback","Improvement"],bL=[{key:"backend",wide:!0,eyebrow:"PRACTICAL BACK-END EXPERIENCE",title:"실무에서 직접 개발한 Back-end & System Integration",text:"프론트엔드를 주 업무로 하면서도 서비스 운영과 외부 시스템 연동에 필요한 백엔드 기능을 실무에서 직접 개발했습니다. 화면에서 끝나는 개발이 아니라 DB부터 외부 API, 자동화 작업까지 이어지는 데이터 흐름을 함께 이해하고 대응할 수 있습니다.",bullets:["DB 데이터를 조회·가공해 외부 업체에서 사용할 수 있는 데이터 구조로 변환","민감한 사용자 정보를 암호화해 외부 시스템으로 전달하는 연동 로직 구현","Crontab 기반 정기 데이터 전송 작업 자동화 및 실행 결과 로그 관리","외부 API에서 전달받은 암호화 데이터를 서버에서 복호화하고 프론트엔드용 데이터로 가공","프론트엔드 API 연동 과정에서 필요한 백엔드 기능 수정 및 오류 원인 분석","Front-end와 Back-end 양쪽 흐름을 확인하며 API·데이터 연동 문제 대응"],tags:["Back-end","DB","API Integration","Encryption","Crontab","Troubleshooting"]},{key:"yummyyagi",eyebrow:"SUB EXPERIENCE / YUMMYYAGI",title:"설계부터 Front-end · Back-end · QA까지 경험한 Full-cycle Project",text:"AI 기반 동화 생성 서비스 ‘야미야기’에서는 서비스 기획·설계부터 Front-end와 Back-end 구현, QA와 사용자 피드백 반영까지 전체 개발 사이클을 경험했습니다. 현업 개발자가 참여한 최종 프로젝트 평가에서 1위를 기록했습니다.",bullets:["사용자 행동과 화면 이동을 기준으로 User Flow 설계","기능별 처리 과정과 시스템 동작을 정리한 Process Flow 설계","Figma 기반 화면 구조와 기능 흐름 구체화","서비스 데이터 구조 정의 및 ERD 설계","Front-end와 Back-end 데이터 흐름을 고려한 REST API 설계","Python·Django 기반 Back-end와 Front-end 개발 모두 참여","Google OAuth 라이브러리 오류를 분석하고 별도 로직으로 소셜 로그인 구현","기능 QA·예외 상황 검증 후 실제 사용자 피드백을 수집하고 개선 사항 반영"],tags:["User Flow","Process Flow","ERD","API Design","Python","Django","QA"]},{key:"performance",eyebrow:"PERFORMANCE & OPTIMIZATION",title:"사용자 체감 성능과 개발 환경을 함께 개선",text:"페이지 로딩과 개발 생산성을 구분해 필요한 영역의 부담을 줄이는 방향으로 최적화했습니다.",bullets:["초기 화면에 필요한 핵심 이미지는 우선 로드하고 비필수 이미지는 Lazy Loading 적용","CRA 기반 프로젝트를 Vite로 전환해 개발 서버 구동과 HMR 환경 개선","node_modules·.git·빌드 산출물 등 불필요한 파일 감시 범위를 제외해 개발 리소스 사용 감소","Production build에서 불필요한 console 코드를 제거해 운영 빌드 정리"],tags:["Lazy Loading","Vite","HMR","Build","Optimization"]},{key:"qa",eyebrow:"QA & USER FEEDBACK",title:"구현 이후 실제 사용성을 다시 검증",text:"기능 구현을 완료로 보지 않고 실제 사용자 흐름에서 오류와 불편을 확인한 뒤 개선까지 연결하는 과정을 경험했습니다.",bullets:["기능 QA 및 예외 상황 검증","주요 사용자 흐름과 사용성 직접 확인","사용자 테스트 및 피드백 수집","피드백을 바탕으로 기능·UI 개선 항목을 정리하고 반영","수정 이후 재검증을 통해 정상 동작과 개선 여부 확인"],tags:["QA","User Test","Feedback","UX Improvement","Iteration"]}],_L=[{company:"내일배움캠프",role:"Web Development Bootcamp",date:"2023.08 ~ 2023.12",text:"Python·Django를 중심으로 웹 개발을 학습하고 개인·팀 프로젝트를 통해 Figma, ERD, API 설계, Front-end·Back-end 개발까지 웹 서비스 개발 전 과정을 경험했습니다."},{company:"씨인스원보험컨설팅 주식회사",role:"Insurance Administration",date:"2022.01 ~ 2023.04",text:"보험 해지 환급 관련 업무를 담당했습니다."}],wL={hidden:{opacity:0,y:34,scale:.98},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:"easeOut"}}},rS=typeof navigator<"u"&&/KAKAOTALK/i.test(navigator.userAgent),Po={variants:wL,initial:"hidden",animate:rS?"visible":void 0,whileInView:rS?void 0:"visible",viewport:{once:!0,amount:.1}},SL=()=>{const n=k.useRef(null),t=k.useRef(null),r=k.useRef([]),a=k.useRef(null);return Ar(()=>{const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,u=t.current,c=r.current.filter(D=>!!D);if(s){u&&yt.set(u,{autoAlpha:0}),a.current&&yt.set(a.current,{autoAlpha:0});return}const f=document.body.style.overflow;document.body.style.overflow="hidden";const h=10,p=c.length,g=.18,y=.12,x=.82,v=Array.from({length:p},()=>Array.from({length:h},()=>({value:100}))),w=()=>{c.forEach((D,R)=>{const O=v[R];let M=`M 0 ${O[0].value} C`;for(let P=0;P<h-1;P+=1){const z=(P+1)/(h-1)*100,V=z-100/(h-1)/2;M+=` ${V} ${O[P].value}`,M+=` ${V} ${O[P+1].value}`,M+=` ${z} ${O[P+1].value}`}M+=" V 0 H 0",D.setAttribute("d",M)})};w(),u&&yt.set(u,{autoAlpha:1}),a.current&&yt.set(a.current,{autoAlpha:1,y:0});const S=Array.from({length:h},()=>Math.random()*g),C=yt.timeline({defaults:{ease:"power2.inOut"},onUpdate:w,onComplete:()=>{document.body.style.overflow=f,u&&yt.set(u,{autoAlpha:0}),kt.refresh()}});return a.current&&C.to(a.current,{opacity:0,y:-8,duration:.28,ease:"power2.out"},.18),v.forEach((D,R)=>{const O=y*(p-R-1);D.forEach((M,P)=>{C.to(M,{value:0,duration:x,ease:"power2.inOut"},.28+S[P]+O)})}),yt.timeline({delay:.82,defaults:{ease:"power3.out"}}).from(".career-badge",{opacity:0,y:12,duration:.45}).from(".career-title",{opacity:0,y:38,duration:.75},"-=0.12").from(".career-description",{opacity:0,y:18,duration:.55},"-=0.38").from(".summary-item",{opacity:0,y:18,scale:.98,stagger:.07,duration:.45},"-=0.28"),yt.utils.toArray(".section-line").forEach(D=>{yt.from(D,{scaleX:0,duration:.9,ease:"power2.out",scrollTrigger:{trigger:D,start:"top 92%"}})}),()=>{document.body.style.overflow=f}},{scope:n}),b.jsxs(Ek,{ref:n,children:[b.jsxs(Tk,{ref:a,"aria-hidden":"true",children:[b.jsx("span",{}),"CAREER / EXPERIENCE"]}),b.jsxs(Sk,{ref:t,className:"shape-overlays",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:[b.jsxs("defs",{children:[b.jsxs("linearGradient",{id:"careerOverlayBack",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[b.jsx("stop",{offset:"0%",stopColor:"#eef5fb"}),b.jsx("stop",{offset:"100%",stopColor:"#bebcd8"})]}),b.jsxs("linearGradient",{id:"careerOverlayFront",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[b.jsx("stop",{offset:"0%",stopColor:"#76a4da"}),b.jsx("stop",{offset:"100%",stopColor:"#d8e0e6"})]})]}),b.jsx("path",{ref:s=>{r.current[0]=s},className:"shape-overlays__path",fill:"url(#careerOverlayBack)"}),b.jsx("path",{ref:s=>{r.current[1]=s},className:"shape-overlays__path",fill:"url(#careerOverlayFront)"})]}),b.jsxs(Ak,{children:[b.jsxs(Ck,{children:[b.jsx(Rk,{className:"career-badge",children:"Career & Experience"}),b.jsxs(Mk,{className:"career-title",children:["서비스 전체 흐름을 이해하며",b.jsx("br",{}),b.jsx("strong",{children:"프론트엔드를 설계하고 개선합니다."})]}),b.jsxs(Dk,{className:"career-description",children:["백엔드 개발자로 시작해 프론트엔드로 영역을 확장했고, 현재는 Vue.js·Nuxt.js 기반 서비스 개발을 중심으로 ",b.jsx("strong",{children:"구조 설계, 인증·결제·권한, 데이터 연동, 리팩토링, QA와 팀 협업"}),"까지 함께 경험하고 있습니다."]}),b.jsx(Ok,{children:hL.map(([s,u])=>b.jsxs(jk,{className:"summary-item",children:[b.jsx(zk,{children:s}),b.jsx(kk,{children:u})]},`${s}-${u}`))})]}),b.jsxs(Lk,{children:[b.jsx(Nk,{children:"KEY EXPERIENCE"}),b.jsx(Pk,{children:pL.map(s=>b.jsx(Bk,{children:s},s))})]}),b.jsxs(Do,{children:[b.jsx(Oo,{className:"section-line"}),b.jsxs(jo,{children:[b.jsxs(zo,{children:[b.jsx(ko,{children:"01 / CORE COMPETENCY"}),b.jsx(Lo,{children:"핵심 역량"})]}),b.jsx(No,{children:"기술 이름보다 실제 프로젝트에서 반복해서 사용해 온 문제 해결 역량을 중심으로 정리했습니다."})]}),b.jsx(Vk,{children:mL.map((s,u)=>b.jsxs(Uk,{...Po,children:[b.jsx(Hk,{children:String(u+1).padStart(2,"0")}),b.jsx(Yk,{children:s.name}),b.jsx(Gk,{children:s.description})]},s.name))})]}),b.jsxs(Do,{children:[b.jsx(Oo,{className:"section-line"}),b.jsxs(jo,{children:[b.jsxs(zo,{children:[b.jsx(ko,{children:"02 / CAREER SUMMARY"}),b.jsx(Lo,{children:"경력 요약"})]}),b.jsx(No,{children:"긴 프로젝트 이력을 모두 나열하기보다 현재 회사에서 맡아 온 역할과 책임을 먼저 빠르게 확인할 수 있도록 요약했습니다."})]}),b.jsxs(Xk,{...Po,children:[b.jsxs(qk,{children:[b.jsxs("div",{children:[b.jsx(Fk,{children:"블록스퀘어랩스"}),b.jsx($k,{children:"Frontend Developer · Fullstack · Team Lead"})]}),b.jsxs(Qk,{children:["2024.01.15 ~ 재직중",b.jsx("br",{}),b.jsx("span",{children:"CURRENT"})]})]}),b.jsxs(Kk,{children:[b.jsxs("div",{children:[b.jsx(Zk,{children:"백엔드 개발자로 입사한 뒤 프론트엔드 인력 부족을 계기로 Vue.js를 학습해 역할을 확장했습니다. 이후 사용자·관리자 서비스, 결제·구독·권한, 차트, WebView, 운영 서비스 리뉴얼까지 프론트엔드를 주 업무로 담당하고 있으며, 필요한 경우 백엔드와 운영 환경까지 함께 확인하고 있습니다."}),b.jsx(hd,{children:gL.map(s=>b.jsx(pd,{children:s},s))})]}),b.jsxs(Ik,{children:[b.jsxs(md,{children:[b.jsx("span",{children:"PROJECT TYPE"}),b.jsx("strong",{children:"신규 구축 · 인수 · 리뉴얼"})]}),b.jsxs(md,{children:[b.jsx("span",{children:"PLATFORM"}),b.jsx("strong",{children:"PC · Mobile · WebView"})]}),b.jsxs(md,{children:[b.jsx("span",{children:"SERVICE LOGIC"}),b.jsx("strong",{children:"Auth · Payment · Permission"})]}),b.jsxs(md,{children:[b.jsx("span",{children:"COLLABORATION"}),b.jsx("strong",{children:"Lead · Schedule · QA"})]})]})]})]})]}),b.jsxs(Do,{children:[b.jsx(Oo,{className:"section-line"}),b.jsxs(jo,{children:[b.jsxs(zo,{children:[b.jsx(ko,{children:"03 / SELECTED PROJECTS"}),b.jsx(Lo,{children:"대표 프로젝트"})]}),b.jsx(No,{children:"프로젝트 수보다 문제의 복잡도와 주도성이 잘 드러나는 경험 4개를 선별했습니다."})]}),b.jsx(Wk,{children:yL.map((s,u)=>b.jsxs(Jk,{...Po,children:[b.jsxs(tL,{children:[b.jsxs("div",{children:[b.jsx(eS,{children:"SELECTED PROJECT"}),b.jsx(dd,{children:s.title}),b.jsx(g0,{children:s.subtitle})]}),b.jsx(eL,{children:String(u+1).padStart(2,"0")})]}),b.jsx(hd,{children:s.bullets.map(c=>b.jsx(pd,{children:c},c))}),b.jsx(nL,{children:s.highlight}),b.jsx(nS,{children:s.tags.map(c=>b.jsx(iS,{children:c},c))})]},s.title))})]}),b.jsxs(Do,{children:[b.jsx(Oo,{className:"section-line"}),b.jsxs(jo,{children:[b.jsxs(zo,{children:[b.jsx(ko,{children:"04 / OTHER EXPERIENCE"}),b.jsx(Lo,{children:"그 외 실무 경험"})]}),b.jsx(No,{children:"대표 프로젝트와 겹치지 않으면서 실무 범위를 보여주는 경험은 짧게 묶었습니다."})]}),b.jsx(iL,{children:vL.map(s=>b.jsxs(rL,{...Po,children:[b.jsx(dd,{children:s.title}),b.jsx(hd,{children:s.bullets.map(u=>b.jsx(pd,{children:u},u))})]},s.title))})]}),b.jsxs(Do,{children:[b.jsx(Oo,{className:"section-line"}),b.jsxs(jo,{children:[b.jsxs(zo,{children:[b.jsx(ko,{children:"05 / SUPPORTING EXPERIENCE"}),b.jsx(Lo,{children:"Supporting Experience"})]}),b.jsx(No,{children:"프론트엔드를 중심으로 일하면서 실무에서 직접 수행한 백엔드 경험을 메인으로, Full-cycle 개발·최적화·QA 경험을 함께 정리했습니다."})]}),b.jsx(aL,{children:bL.map(s=>b.jsxs(sL,{$wide:s.wide,...Po,children:[b.jsx(eS,{children:s.eyebrow}),b.jsx(dd,{children:s.title}),b.jsx(g0,{children:s.text}),b.jsx(hd,{children:s.bullets.map(u=>b.jsx(pd,{children:u},u))}),s.key==="yummyyagi"&&b.jsx(oL,{"aria-label":"YummyYagi development flow",children:xL.map(u=>b.jsx(lL,{children:u},u))}),b.jsx(nS,{children:s.tags.map(u=>b.jsx(iS,{children:u},u))})]},s.key))})]}),b.jsxs(Do,{children:[b.jsx(Oo,{className:"section-line"}),b.jsxs(jo,{children:[b.jsxs(zo,{children:[b.jsx(ko,{children:"06 / PREVIOUS EXPERIENCE"}),b.jsx(Lo,{children:"이전 경험"})]}),b.jsx(No,{children:"현재 개발 경력으로 이어지기 전의 교육 및 직무 경험은 필요한 내용만 간단히 정리했습니다."})]}),b.jsx(uL,{children:_L.map(s=>b.jsxs(cL,{...Po,children:[b.jsxs(fL,{children:[b.jsx("span",{children:s.role}),b.jsx("span",{children:s.date})]}),b.jsx(dd,{children:s.company}),b.jsx(g0,{children:s.text})]},s.company))})]}),b.jsxs(dL,{children:[b.jsx("h2",{children:"프론트엔드를 중심으로, 서비스 전체 흐름까지 봅니다."}),b.jsx("p",{children:"화면을 구현하는 것에서 끝나지 않고 데이터가 어디에서 오고, 사용자 상태와 서비스 정책이 어떻게 연결되며, 운영 이후 어떤 부분을 다시 개선해야 하는지까지 확인하는 개발을 중요하게 생각합니다. 새로운 환경에서도 필요한 영역을 빠르게 학습하고 실제 서비스 결과로 연결하는 개발자가 되고자 합니다."})]})]})]})},TL="/portfolio/assets/404-C6ZA4VqX.png",EL=N(ht.div)`
  width: 60%;

  margin: 5vh auto;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 2rem;

  img {
    width: 60%;
    height: auto;
  }
`,aS=()=>{const n=Gs();return b.jsxs(EL,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.4},children:[b.jsx(ht.img,{src:TL,alt:"404 Icon",loading:"lazy",initial:{y:20,opacity:0},animate:{y:[0,-12,0],opacity:1},transition:{opacity:{duration:.4},y:{duration:2.5,repeat:1/0,ease:"easeInOut"}},whileHover:{rotate:[-2,2,-2,0],scale:1.04}}),b.jsx(ht.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},whileHover:{scale:1.06},whileTap:{scale:.94},children:b.jsx(Rs.GradientBtn,{onClick:()=>n("/"),children:"메인 페이지 ▶"})})]})},AL=N.div`
  position: fixed;
  top: 0;
  left: 0;

  width: ${({$hover:n})=>n?"52px":"32px"};
  height: ${({$hover:n})=>n?"52px":"32px"};

  border-radius: 50%;

  border: 1px solid rgba(118, 164, 218, 0.7);
  background: rgba(118, 164, 218, 0.08);

  pointer-events: none;
  z-index: 99998;

  transform: translate(-50%, -50%);

  transition:
    width 0.2s ease,
    height 0.2s ease,
    background 0.2s ease;
`,CL=()=>{const[n,t]=k.useState(!1),[r,a]=k.useState({x:0,y:0}),[s,u]=k.useState({x:0,y:0}),[c,f]=k.useState(!1);return k.useEffect(()=>{const h=window.matchMedia("(hover: hover) and (pointer: fine)"),p=()=>{t(h.matches)};return p(),h.addEventListener("change",p),()=>{h.removeEventListener("change",p)}},[]),k.useEffect(()=>{if(!n)return;const h=p=>{a({x:p.clientX,y:p.clientY})};return window.addEventListener("mousemove",h),()=>{window.removeEventListener("mousemove",h)}},[n]),k.useEffect(()=>{if(!n)return;let h;const p=()=>{u(g=>({x:g.x+(r.x-g.x)*.15,y:g.y+(r.y-g.y)*.15})),h=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(h)}},[r,n]),k.useEffect(()=>{if(!n)return;const h=p=>{p.target.closest("a, button, [role='button'], input, textarea, select")?f(!0):f(!1)};return document.addEventListener("mouseover",h),()=>{document.removeEventListener("mouseover",h)}},[n]),n?b.jsx(AL,{$hover:c,style:{left:s.x,top:s.y}}):null},RL=N.div`
  position: fixed;
  inset: 0;

  pointer-events: none;
  z-index: 0;

  background: radial-gradient(
    500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(118, 164, 218, 0.12),
    transparent 65%
  );
`,ML=()=>{const[n,t]=k.useState(!1);return k.useEffect(()=>{const r=window.matchMedia("(hover: hover) and (pointer: fine)"),a=()=>{t(r.matches)};return a(),r.addEventListener("change",a),()=>{r.removeEventListener("change",a)}},[]),k.useEffect(()=>{if(!n)return;const r=a=>{document.documentElement.style.setProperty("--mouse-x",`${a.clientX}px`),document.documentElement.style.setProperty("--mouse-y",`${a.clientY}px`)};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)}},[n]),n?b.jsx(RL,{}):null},DL=N.div`
  position: fixed;

  right: 2rem;
  bottom: 2rem;

  z-index: 1200;

  width: 60px;
  height: 60px;

  @media (max-width: 768px) {
    right: 1.25rem;

    bottom: calc(
      1.25rem +
      env(safe-area-inset-bottom)
    );

    width: 56px;
    height: 56px;
  }

  @media (max-width: 480px) {
    right: 1rem;

    bottom: calc(
      1rem +
      env(safe-area-inset-bottom)
    );
  }
`,Iu=N.button`
  position: absolute;

  left: 5px;
  top: 5px;

  width: 50px;
  height: 50px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${({$active:n})=>n?"rgba(118, 164, 218, .65)":"rgba(255, 255, 255, .7)"};

  border-radius: 50%;

  background: ${({$active:n})=>n?`
        linear-gradient(
          145deg,
          var(--primary-color),
          #8eb5e1
        )
      `:`
        rgba(
          241,
          248,
          255,
          .92
        )
      `};

  color: ${({$active:n})=>n?"var(--white-100)":"var(--gray-400)"};

  box-shadow: ${({$active:n})=>n?`
        0 8px 22px
        rgba(
          118,
          164,
          218,
          .32
        )
      `:`
        0 8px 24px
        rgba(
          118,
          164,
          218,
          .16
        ),
        0 2px 5px
        rgba(
          99,
          99,
          99,
          .05
        )
      `};

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  cursor: pointer;

  opacity: 0;

  transform: scale(0);

  will-change:
    transform,
    opacity;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    border 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    color: var(--white-100);

    background:
      var(--primary-color);

    border-color:
      var(--primary-color);

    box-shadow:
      0 10px 27px
      rgba(
        118,
        164,
        218,
        .34
      );
  }

  &:focus-visible {
    outline:
      2px solid
      var(--primary-color);

    outline-offset: 4px;
  }

  svg {
    width: 20px;
    height: 20px;

    fill: none;

    stroke:
      currentColor;

    stroke-width: 1.8;

    stroke-linecap: round;
    stroke-linejoin: round;

    transition:
      transform 0.25s ease;
  }

  &:hover svg {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    left: 5px;
    top: 5px;

    width: 46px;
    height: 46px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,y0=N.span`
  position: absolute;

  /*
   * 아이콘 정중앙 기준
   */
  left: 50%;
  bottom: calc(100% + 10px);

  /*
   * 기본 상태는 살짝 아래
   */
  transform:
    translateX(-50%)
    translateY(5px);

  padding:
    0.4rem
    0.7rem;

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.75
    );

  border-radius: 10px;

  background:
    rgba(
      241,
      248,
      255,
      0.95
    );

  color:
    var(--gray-400);

  box-shadow:
    0 6px 18px
    rgba(
      118,
      164,
      218,
      0.15
    );

  backdrop-filter:
    blur(12px);

  -webkit-backdrop-filter:
    blur(12px);

  font-size: 0.7rem;
  font-weight: 500;

  white-space: nowrap;

  opacity: 0;

  pointer-events: none;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  /*
   * 작은 꼬리
   */
  &::after {
    content: "";

    position: absolute;

    left: 50%;
    top: 100%;

    width: 7px;
    height: 7px;

    background:
      rgba(
        241,
        248,
        255,
        0.95
      );

    border-right:
      1px solid
      rgba(
        255,
        255,
        255,
        0.75
      );

    border-bottom:
      1px solid
      rgba(
        255,
        255,
        255,
        0.75
      );

    transform:
      translate(-50%, -50%)
      rotate(45deg);
  }

  ${Iu}:hover &,
  ${Iu}:focus-visible & {
    opacity: 1;

    transform:
      translateX(-50%)
      translateY(0);
  }

  @media (max-width: 768px) {
    display: none;
  }
`,v0=N.span`
  position: absolute;

  right: 2px;
  top: 2px;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background:
    var(--white-100);

  box-shadow:
    0 0 0 2px
    var(--primary-color);
`,OL=N.button`
  position: absolute;

  left: 0;
  top: 0;

  z-index: 5;

  width: 60px;
  height: 60px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      .75
    );

  border-radius: 50%;

  color:
    var(--white-100);

  background: linear-gradient(
    145deg,
    var(--primary-color),
    var(--primary-light)
  );

  box-shadow:
    0 12px 30px
    rgba(
      118,
      164,
      218,
      .32
    ),
    0 3px 8px
    rgba(
      99,
      99,
      99,
      .08
    );

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  /*
   * 바깥쪽 은은한 링
   */
  &::before {
    content: "";

    position: absolute;

    inset: -6px;

    border:
      1px solid
      rgba(
        118,
        164,
        218,
        .18
      );

    border-radius: inherit;

    pointer-events: none;

    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.06);

    box-shadow:
      0 15px 34px
      rgba(
        118,
        164,
        218,
        .38
      );
  }

  &:hover::before {
    transform: scale(1.08);

    opacity: 0.55;
  }

  &:focus-visible {
    outline:
      2px solid
      var(--primary-color);

    outline-offset: 6px;
  }

  svg {
    width: 23px;
    height: 23px;

    fill: none;

    stroke:
      currentColor;

    stroke-width: 2.2;

    stroke-linecap: round;

    will-change: transform;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;

    svg {
      width: 21px;
      height: 21px;
    }
  }
`,jL=()=>b.jsxs("svg",{viewBox:"0 0 24 24",children:[b.jsx("path",{d:"M3 11.5 12 4l9 7.5"}),b.jsx("path",{d:"M5.5 10v10h13V10"}),b.jsx("path",{d:"M9.5 20v-6h5v6"})]}),zL=()=>b.jsxs("svg",{viewBox:"0 0 24 24",children:[b.jsx("rect",{x:"4",y:"7",width:"16",height:"13",rx:"2"}),b.jsx("path",{d:"M9 7V5.5C9 4.7 9.7 4 10.5 4h3C14.3 4 15 4.7 15 5.5V7"}),b.jsx("path",{d:"M4 12h16"}),b.jsx("path",{d:"M10 12v2h4v-2"})]}),kL=()=>b.jsxs("svg",{viewBox:"0 0 24 24",children:[b.jsx("rect",{x:"3.5",y:"4",width:"17",height:"16",rx:"2"}),b.jsx("path",{d:"M3.5 8.5h17"}),b.jsx("path",{d:"m9.5 12-2 2 2 2"}),b.jsx("path",{d:"m14.5 12 2 2-2 2"})]}),LL=()=>b.jsxs("svg",{className:"fab-plus",viewBox:"0 0 24 24",children:[b.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),b.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),NL=()=>{const n=Gs(),t=$i(),r=k.useRef(null),a=k.useRef(null),[s,u]=k.useState(!1),c=k.useRef(!1),f=t.pathname,h=f==="/",p=f.startsWith("/personal"),g=f.startsWith("/project");Ar(()=>{var A;const v=yt.utils.toArray(".radial-item"),w=(A=r.current)==null?void 0:A.querySelector(".fab-plus"),S=()=>{a.current&&a.current.kill();const D=window.matchMedia("(max-width: 768px)").matches,R=window.matchMedia("(prefers-reduced-motion: reduce)").matches,O=D?92:120,M=180,z=v.length>1?(270-M)/(v.length-1):0;yt.set(v,{x:0,y:0,scale:0,opacity:0,pointerEvents:"none"}),w&&yt.set(w,{rotation:0});const V=yt.timeline({paused:!0,defaults:{overwrite:"auto"},onReverseComplete:()=>{yt.set(v,{pointerEvents:"none"})}});v.forEach((X,K)=>{const ot=(M+z*K)*(Math.PI/180),tt=Math.cos(ot)*O,wt=Math.sin(ot)*O;V.to(X,{x:tt,y:wt,scale:1,opacity:1,pointerEvents:"auto",duration:R?0:.62,ease:R?"none":"elastic.out(1, 0.5)"},R?0:K*.055)}),w&&V.to(w,{rotation:135,duration:R?0:.35,ease:R?"none":"back.out(1.7)",overwrite:"auto"},0),a.current=V,c.current?V.progress(1):V.progress(0)};S(),yt.from(r.current,{opacity:0,y:18,scale:.9,duration:.65,delay:.7,ease:"back.out(1.5)",overwrite:"auto"}),window.addEventListener("resize",S);const C=D=>{var R;D.key==="Escape"&&c.current&&(c.current=!1,u(!1),(R=a.current)==null||R.reverse())};return window.addEventListener("keydown",C),()=>{var D;window.removeEventListener("resize",S),window.removeEventListener("keydown",C),(D=a.current)==null||D.kill()}},{scope:r});const y=()=>{const v=a.current;v&&(c.current?(c.current=!1,u(!1),v.reverse()):(c.current=!0,u(!0),v.play()))},x=v=>{var w;n(v),c.current&&(c.current=!1,u(!1),(w=a.current)==null||w.reverse())};return b.jsxs(DL,{ref:r,"aria-label":"빠른 페이지 이동",children:[b.jsxs(Iu,{type:"button",className:"radial-item",$active:h,onClick:()=>x("/"),"aria-label":"홈으로 이동",tabIndex:s?0:-1,children:[h&&b.jsx(v0,{}),b.jsx(jL,{}),b.jsx(y0,{children:"홈"})]}),b.jsxs(Iu,{type:"button",className:"radial-item",$active:p,onClick:()=>x("/personal"),"aria-label":"경력 페이지로 이동",tabIndex:s?0:-1,children:[p&&b.jsx(v0,{}),b.jsx(zL,{}),b.jsx(y0,{children:"경력"})]}),b.jsxs(Iu,{type:"button",className:"radial-item",$active:g,onClick:()=>x("/project"),"aria-label":"프로젝트 페이지로 이동",tabIndex:s?0:-1,children:[g&&b.jsx(v0,{}),b.jsx(kL,{}),b.jsx(y0,{children:"프로젝트"})]}),b.jsx(OL,{type:"button",onClick:y,"aria-label":s?"빠른 메뉴 닫기":"빠른 메뉴 열기","aria-expanded":s,children:b.jsx(LL,{})})]})},PL="G-XYQ0NRD2FC";function BL(){const n=$i();return k.useEffect(()=>{if(!window.gtag)return;const t=n.pathname+n.search+n.hash;window.gtag("config",PL,{page_path:t,page_location:window.location.href,page_title:document.title})},[n]),null}function VL(){const{pathname:n}=$i();return k.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo({top:0,left:0,behavior:"smooth"})},[n]),null}function UL(){return b.jsxs(b.Fragment,{children:[b.jsx(CL,{}),b.jsx(ML,{}),b.jsx(VL,{}),b.jsx(BL,{}),b.jsx(TO,{}),b.jsx(NL,{}),b.jsx("main",{children:b.jsxs(P8,{children:[b.jsx(xs,{path:"/",element:b.jsx(Tz,{})}),b.jsx(xs,{path:"/project",element:b.jsx(wk,{})}),b.jsx(xs,{path:"/project/:id",element:b.jsx(qz,{})}),b.jsx(xs,{path:"/personal",element:b.jsx(SL,{})}),b.jsx(xs,{path:"/404",element:b.jsx(aS,{})}),b.jsx(xs,{path:"*",element:b.jsx(aS,{})})]})}),b.jsx(DO,{})]})}function HL(){return b.jsx(sO,{basename:"/portfolio/",children:b.jsx(UL,{})})}dC.createRoot(document.getElementById("root")).render(b.jsx(nl.StrictMode,{children:b.jsx(HL,{})}));
