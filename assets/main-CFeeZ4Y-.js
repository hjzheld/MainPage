(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();function e2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gm={exports:{}},ou={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb;function IA(){if(rb)return ou;rb=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,s,u){var c=null;if(u!==void 0&&(c=""+u),s.key!==void 0&&(c=""+s.key),"key"in s){u={};for(var f in s)f!=="key"&&(u[f]=s[f])}else u=s;return s=u.ref,{$$typeof:n,type:a,key:c,ref:s!==void 0?s:null,props:u}}return ou.Fragment=t,ou.jsx=r,ou.jsxs=r,ou}var ab;function WA(){return ab||(ab=1,gm.exports=IA()),gm.exports}var w=WA(),ym={exports:{}},Ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sb;function JA(){if(sb)return Ct;sb=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,S={};function C(T,K,et){this.props=T,this.context=K,this.refs=S,this.updater=et||v}C.prototype.isReactComponent={},C.prototype.setState=function(T,K){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,K,"setState")},C.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function A(){}A.prototype=C.prototype;function M(T,K,et){this.props=T,this.context=K,this.refs=S,this.updater=et||v}var R=M.prototype=new A;R.constructor=M,_(R,C.prototype),R.isPureReactComponent=!0;var j=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function z(T,K,et,it,rt,mt){return et=mt.ref,{$$typeof:n,type:T,key:K,ref:et!==void 0?et:null,props:mt}}function B(T,K){return z(T.type,K,void 0,void 0,void 0,T.props)}function X(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function Z(T){var K={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(et){return K[et]})}var ot=/\/+/g;function tt(T,K){return typeof T=="object"&&T!==null&&T.key!=null?Z(""+T.key):K.toString(36)}function wt(){}function pt(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(wt,wt):(T.status="pending",T.then(function(K){T.status==="pending"&&(T.status="fulfilled",T.value=K)},function(K){T.status==="pending"&&(T.status="rejected",T.reason=K)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function gt(T,K,et,it,rt){var mt=typeof T;(mt==="undefined"||mt==="boolean")&&(T=null);var st=!1;if(T===null)st=!0;else switch(mt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(T.$$typeof){case n:case t:st=!0;break;case g:return st=T._init,gt(st(T._payload),K,et,it,rt)}}if(st)return rt=rt(T),st=it===""?"."+tt(T,0):it,j(rt)?(et="",st!=null&&(et=st.replace(ot,"$&/")+"/"),gt(rt,K,et,"",function(Ft){return Ft})):rt!=null&&(X(rt)&&(rt=B(rt,et+(rt.key==null||T&&T.key===rt.key?"":(""+rt.key).replace(ot,"$&/")+"/")+st)),K.push(rt)),1;st=0;var Ot=it===""?".":it+":";if(j(T))for(var Et=0;Et<T.length;Et++)it=T[Et],mt=Ot+tt(it,Et),st+=gt(it,K,et,mt,rt);else if(Et=x(T),typeof Et=="function")for(T=Et.call(T),Et=0;!(it=T.next()).done;)it=it.value,mt=Ot+tt(it,Et++),st+=gt(it,K,et,mt,rt);else if(mt==="object"){if(typeof T.then=="function")return gt(pt(T),K,et,it,rt);throw K=String(T),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return st}function Y(T,K,et){if(T==null)return T;var it=[],rt=0;return gt(T,it,"","",function(mt){return K.call(et,mt,rt++)}),it}function $(T){if(T._status===-1){var K=T._result;K=K(),K.then(function(et){(T._status===0||T._status===-1)&&(T._status=1,T._result=et)},function(et){(T._status===0||T._status===-1)&&(T._status=2,T._result=et)}),T._status===-1&&(T._status=0,T._result=K)}if(T._status===1)return T._result.default;throw T._result}var J=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function at(){}return Ct.Children={map:Y,forEach:function(T,K,et){Y(T,function(){K.apply(this,arguments)},et)},count:function(T){var K=0;return Y(T,function(){K++}),K},toArray:function(T){return Y(T,function(K){return K})||[]},only:function(T){if(!X(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Ct.Component=C,Ct.Fragment=r,Ct.Profiler=s,Ct.PureComponent=M,Ct.StrictMode=a,Ct.Suspense=h,Ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Ct.__COMPILER_RUNTIME={__proto__:null,c:function(T){return D.H.useMemoCache(T)}},Ct.cache=function(T){return function(){return T.apply(null,arguments)}},Ct.cloneElement=function(T,K,et){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var it=_({},T.props),rt=T.key,mt=void 0;if(K!=null)for(st in K.ref!==void 0&&(mt=void 0),K.key!==void 0&&(rt=""+K.key),K)!N.call(K,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&K.ref===void 0||(it[st]=K[st]);var st=arguments.length-2;if(st===1)it.children=et;else if(1<st){for(var Ot=Array(st),Et=0;Et<st;Et++)Ot[Et]=arguments[Et+2];it.children=Ot}return z(T.type,rt,void 0,void 0,mt,it)},Ct.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:u,_context:T},T},Ct.createElement=function(T,K,et){var it,rt={},mt=null;if(K!=null)for(it in K.key!==void 0&&(mt=""+K.key),K)N.call(K,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(rt[it]=K[it]);var st=arguments.length-2;if(st===1)rt.children=et;else if(1<st){for(var Ot=Array(st),Et=0;Et<st;Et++)Ot[Et]=arguments[Et+2];rt.children=Ot}if(T&&T.defaultProps)for(it in st=T.defaultProps,st)rt[it]===void 0&&(rt[it]=st[it]);return z(T,mt,void 0,void 0,null,rt)},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(T){return{$$typeof:f,render:T}},Ct.isValidElement=X,Ct.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:$}},Ct.memo=function(T,K){return{$$typeof:p,type:T,compare:K===void 0?null:K}},Ct.startTransition=function(T){var K=D.T,et={};D.T=et;try{var it=T(),rt=D.S;rt!==null&&rt(et,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(at,J)}catch(mt){J(mt)}finally{D.T=K}},Ct.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Ct.use=function(T){return D.H.use(T)},Ct.useActionState=function(T,K,et){return D.H.useActionState(T,K,et)},Ct.useCallback=function(T,K){return D.H.useCallback(T,K)},Ct.useContext=function(T){return D.H.useContext(T)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(T,K){return D.H.useDeferredValue(T,K)},Ct.useEffect=function(T,K,et){var it=D.H;if(typeof et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return it.useEffect(T,K)},Ct.useId=function(){return D.H.useId()},Ct.useImperativeHandle=function(T,K,et){return D.H.useImperativeHandle(T,K,et)},Ct.useInsertionEffect=function(T,K){return D.H.useInsertionEffect(T,K)},Ct.useLayoutEffect=function(T,K){return D.H.useLayoutEffect(T,K)},Ct.useMemo=function(T,K){return D.H.useMemo(T,K)},Ct.useOptimistic=function(T,K){return D.H.useOptimistic(T,K)},Ct.useReducer=function(T,K,et){return D.H.useReducer(T,K,et)},Ct.useRef=function(T){return D.H.useRef(T)},Ct.useState=function(T){return D.H.useState(T)},Ct.useSyncExternalStore=function(T,K,et){return D.H.useSyncExternalStore(T,K,et)},Ct.useTransition=function(){return D.H.useTransition()},Ct.version="19.1.0",Ct}var ob;function sg(){return ob||(ob=1,ym.exports=JA()),ym.exports}var k=sg();const Zo=e2(k);var vm={exports:{}},lu={},xm={exports:{}},bm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lb;function tC(){return lb||(lb=1,function(n){function t(Y,$){var J=Y.length;Y.push($);t:for(;0<J;){var at=J-1>>>1,T=Y[at];if(0<s(T,$))Y[at]=$,Y[J]=T,J=at;else break t}}function r(Y){return Y.length===0?null:Y[0]}function a(Y){if(Y.length===0)return null;var $=Y[0],J=Y.pop();if(J!==$){Y[0]=J;t:for(var at=0,T=Y.length,K=T>>>1;at<K;){var et=2*(at+1)-1,it=Y[et],rt=et+1,mt=Y[rt];if(0>s(it,J))rt<T&&0>s(mt,it)?(Y[at]=mt,Y[rt]=J,at=rt):(Y[at]=it,Y[et]=J,at=et);else if(rt<T&&0>s(mt,J))Y[at]=mt,Y[rt]=J,at=rt;else break t}}return $}function s(Y,$){var J=Y.sortIndex-$.sortIndex;return J!==0?J:Y.id-$.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,y=null,x=3,v=!1,_=!1,S=!1,C=!1,A=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function j(Y){for(var $=r(p);$!==null;){if($.callback===null)a(p);else if($.startTime<=Y)a(p),$.sortIndex=$.expirationTime,t(h,$);else break;$=r(p)}}function D(Y){if(S=!1,j(Y),!_)if(r(h)!==null)_=!0,N||(N=!0,tt());else{var $=r(p);$!==null&&gt(D,$.startTime-Y)}}var N=!1,z=-1,B=5,X=-1;function Z(){return C?!0:!(n.unstable_now()-X<B)}function ot(){if(C=!1,N){var Y=n.unstable_now();X=Y;var $=!0;try{t:{_=!1,S&&(S=!1,M(z),z=-1),v=!0;var J=x;try{e:{for(j(Y),y=r(h);y!==null&&!(y.expirationTime>Y&&Z());){var at=y.callback;if(typeof at=="function"){y.callback=null,x=y.priorityLevel;var T=at(y.expirationTime<=Y);if(Y=n.unstable_now(),typeof T=="function"){y.callback=T,j(Y),$=!0;break e}y===r(h)&&a(h),j(Y)}else a(h);y=r(h)}if(y!==null)$=!0;else{var K=r(p);K!==null&&gt(D,K.startTime-Y),$=!1}}break t}finally{y=null,x=J,v=!1}$=void 0}}finally{$?tt():N=!1}}}var tt;if(typeof R=="function")tt=function(){R(ot)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,pt=wt.port2;wt.port1.onmessage=ot,tt=function(){pt.postMessage(null)}}else tt=function(){A(ot,0)};function gt(Y,$){z=A(function(){Y(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var J=x;x=$;try{return Y()}finally{x=J}},n.unstable_requestPaint=function(){C=!0},n.unstable_runWithPriority=function(Y,$){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var J=x;x=Y;try{return $()}finally{x=J}},n.unstable_scheduleCallback=function(Y,$,J){var at=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?at+J:at):J=at,Y){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=J+T,Y={id:g++,callback:$,priorityLevel:Y,startTime:J,expirationTime:T,sortIndex:-1},J>at?(Y.sortIndex=J,t(p,Y),r(h)===null&&Y===r(p)&&(S?(M(z),z=-1):S=!0,gt(D,J-at))):(Y.sortIndex=T,t(h,Y),_||v||(_=!0,N||(N=!0,tt()))),Y},n.unstable_shouldYield=Z,n.unstable_wrapCallback=function(Y){var $=x;return function(){var J=x;x=$;try{return Y.apply(this,arguments)}finally{x=J}}}}(bm)),bm}var ub;function eC(){return ub||(ub=1,xm.exports=tC()),xm.exports}var _m={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb;function nC(){if(cb)return xn;cb=1;var n=sg();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(h,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:""+y,children:h,containerInfo:p,implementation:g}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,xn.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(h,p,null,g)},xn.flushSync=function(h){var p=c.T,g=a.p;try{if(c.T=null,a.p=2,h)return h()}finally{c.T=p,a.p=g,a.d.f()}},xn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(h,p))},xn.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},xn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,v=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:v}):g==="script"&&a.d.X(h,{crossOrigin:y,integrity:x,fetchPriority:v,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},xn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(h)},xn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin);a.d.L(h,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},xn.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(h)},xn.requestFormReset=function(h){a.d.r(h)},xn.unstable_batchedUpdates=function(h,p){return h(p)},xn.useFormState=function(h,p,g){return c.H.useFormState(h,p,g)},xn.useFormStatus=function(){return c.H.useHostTransitionStatus()},xn.version="19.1.0",xn}var fb;function iC(){if(fb)return _m.exports;fb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),_m.exports=nC(),_m.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var db;function rC(){if(db)return lu;db=1;var n=eC(),t=sg(),r=iC();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,o=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(o=i.return),e=i.return;while(e)}return i.tag===3?o:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(u(e)!==e)throw Error(a(188))}function h(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var o=e,l=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return f(d),e;if(m===l)return f(d),i;m=m.sibling}throw Error(a(188))}if(o.return!==l.return)o=d,l=m;else{for(var b=!1,E=d.child;E;){if(E===o){b=!0,o=d,l=m;break}if(E===l){b=!0,l=d,o=m;break}E=E.sibling}if(!b){for(E=m.child;E;){if(E===o){b=!0,o=m,l=d;break}if(E===l){b=!0,l=m,o=d;break}E=E.sibling}if(!b)throw Error(a(189))}}if(o.alternate!==l)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),R=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=ot&&e[ot]||e["@@iterator"],typeof e=="function"?e:null)}var wt=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case C:return"Profiler";case S:return"StrictMode";case D:return"Suspense";case N:return"SuspenseList";case X:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case R:return(e.displayName||"Context")+".Provider";case M:return(e._context.displayName||"Context")+".Consumer";case j:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:pt(e.type)||"Memo";case B:i=e._payload,e=e._init;try{return pt(e(i))}catch{}}return null}var gt=Array.isArray,Y=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},at=[],T=-1;function K(e){return{current:e}}function et(e){0>T||(e.current=at[T],at[T]=null,T--)}function it(e,i){T++,at[T]=e.current,e.current=i}var rt=K(null),mt=K(null),st=K(null),Ot=K(null);function Et(e,i){switch(it(st,i),it(mt,e),it(rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?jx(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=jx(i),e=zx(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(rt),it(rt,e)}function Ft(){et(rt),et(mt),et(st)}function gn(e){e.memoizedState!==null&&it(Ot,e);var i=rt.current,o=zx(i,e.type);i!==o&&(it(mt,e),it(rt,o))}function pe(e){mt.current===e&&(et(rt),et(mt)),Ot.current===e&&(et(Ot),nu._currentValue=J)}var ie=Object.prototype.hasOwnProperty,Vt=n.unstable_scheduleCallback,me=n.unstable_cancelCallback,yn=n.unstable_shouldYield,Mn=n.unstable_requestPaint,F=n.unstable_now,Rn=n.unstable_getCurrentPriorityLevel,Ai=n.unstable_ImmediatePriority,Zi=n.unstable_UserBlockingPriority,oe=n.unstable_NormalPriority,Qi=n.unstable_LowPriority,Ii=n.unstable_IdlePriority,Rr=n.log,Ue=n.unstable_setDisableYieldValue,Hn=null,Yt=null;function He(e){if(typeof Rr=="function"&&Ue(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(Hn,e)}catch{}}var ce=Math.clz32?Math.clz32:Me,Wi=Math.log,Wa=Math.LN2;function Me(e){return e>>>=0,e===0?32:31-(Wi(e)/Wa|0)|0}var Dr=256,Yn=4194304;function Gn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ji(e,i,o){var l=e.pendingLanes;if(l===0)return 0;var d=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~m,l!==0?d=Gn(l):(b&=E,b!==0?d=Gn(b):o||(o=E&~e,o!==0&&(d=Gn(o))))):(E=l&~m,E!==0?d=Gn(E):b!==0?d=Gn(b):o||(o=l&~e,o!==0&&(d=Gn(o)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,o=i&-i,m>=o||m===32&&(o&4194048)!==0)?i:d}function Xn(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Or(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mt(){var e=Dr;return Dr<<=1,(Dr&4194048)===0&&(Dr=256),e}function sr(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function Dn(e){for(var i=[],o=0;31>o;o++)i.push(e);return i}function ln(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ii(e,i,o,l,d,m){var b=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var E=e.entanglements,O=e.expirationTimes,H=e.hiddenUpdates;for(o=b&~o;0<o;){var Q=31-ce(o),W=1<<Q;E[Q]=0,O[Q]=-1;var G=H[Q];if(G!==null)for(H[Q]=null,Q=0;Q<G.length;Q++){var q=G[Q];q!==null&&(q.lane&=-536870913)}o&=~W}l!==0&&or(e,l,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function or(e,i,o){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-ce(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|o&4194090}function jr(e,i){var o=e.entangledLanes|=i;for(e=e.entanglements;o;){var l=31-ce(o),d=1<<l;d&i|e[l]&i&&(e[l]|=i),o&=~d}}function ri(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function At(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:Wx(e.type))}function vt(e,i){var o=$.p;try{return $.p=e,i()}finally{$.p=o}}var Rt=Math.random().toString(36).slice(2),nt="__reactFiber$"+Rt,dt="__reactProps$"+Rt,ft="__reactContainer$"+Rt,Tt="__reactEvents$"+Rt,Ye="__reactListeners$"+Rt,Bt="__reactHandles$"+Rt,ve="__reactResources$"+Rt,Re="__reactMarker$"+Rt;function fe(e){delete e[nt],delete e[dt],delete e[Tt],delete e[Ye],delete e[Bt]}function Zt(e){var i=e[nt];if(i)return i;for(var o=e.parentNode;o;){if(i=o[ft]||o[nt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(e=Px(e);e!==null;){if(o=e[nt])return o;e=Px(e)}return i}e=o,o=e.parentNode}return null}function Xt(e){if(e=e[nt]||e[ft]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function un(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function It(e){var i=e[ve];return i||(i=e[ve]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function $t(e){e[Re]=!0}var ai=new Set,Ge={};function ge(e,i){_e(e,i),_e(e+"Capture",i)}function _e(e,i){for(Ge[e]=i,e=0;e<i.length;e++)ai.add(i[e])}var kr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ja={},Ze={};function ke(e){return ie.call(Ze,e)?!0:ie.call(Ja,e)?!1:kr.test(e)?Ze[e]=!0:(Ja[e]=!0,!1)}function On(e,i,o){if(ke(i))if(o===null)e.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+o)}}function ua(e,i,o){if(o===null)e.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+o)}}function Ci(e,i,o,l){if(l===null)e.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(i,o,""+l)}}var Lr,si;function Mi(e){if(Lr===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);Lr=i&&i[1]||"",si=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lr+e+si}var ca=!1;function Ri(e,i){if(!e||ca)return"";ca=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(q){var G=q}Reflect.construct(e,[],W)}else{try{W.call()}catch(q){G=q}e.call(W.prototype)}}else{try{throw Error()}catch(q){G=q}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(q){if(q&&G&&typeof q.stack=="string")return[q.stack,G.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],E=m[1];if(b&&E){var O=b.split(`
`),H=E.split(`
`);for(d=l=0;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(l===O.length||d===H.length)for(l=O.length-1,d=H.length-1;1<=l&&0<=d&&O[l]!==H[d];)d--;for(;1<=l&&0<=d;l--,d--)if(O[l]!==H[d]){if(l!==1||d!==1)do if(l--,d--,0>d||O[l]!==H[d]){var Q=`
`+O[l].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=l&&0<=d);break}}}finally{ca=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Mi(o):""}function q5(e){switch(e.tag){case 26:case 27:case 5:return Mi(e.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 15:return Ri(e.type,!1);case 11:return Ri(e.type.render,!1);case 1:return Ri(e.type,!0);case 31:return Mi("Activity");default:return""}}function Ay(e){try{var i="";do i+=q5(e),e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Di(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cy(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function F5(e){var i=Cy(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return d.call(this)},set:function(b){l=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function xc(e){e._valueTracker||(e._valueTracker=F5(e))}function My(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return e&&(l=Cy(e)?e.checked?"true":"false":e.value),e=l,e!==o?(i.setValue(e),!0):!1}function bc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $5=/[\n"\\]/g;function Oi(e){return e.replace($5,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hh(e,i,o,l,d,m,b,E){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Di(i)):e.value!==""+Di(i)&&(e.value=""+Di(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?ph(e,b,Di(i)):o!=null?ph(e,b,Di(o)):l!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Di(E):e.removeAttribute("name")}function Ry(e,i,o,l,d,m,b,E){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;o=o!=null?""+Di(o):"",i=i!=null?""+Di(i):o,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function ph(e,i,o){i==="number"&&bc(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function Fs(e,i,o,l){if(e=e.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=i.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&l&&(e[o].defaultSelected=!0)}else{for(o=""+Di(o),i=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}i!==null||e[d].disabled||(i=e[d])}i!==null&&(i.selected=!0)}}function Dy(e,i,o){if(i!=null&&(i=""+Di(i),i!==e.value&&(e.value=i),o==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=o!=null?""+Di(o):""}function Oy(e,i,o,l){if(i==null){if(l!=null){if(o!=null)throw Error(a(92));if(gt(l)){if(1<l.length)throw Error(a(93));l=l[0]}o=l}o==null&&(o=""),i=o}o=Di(i),e.defaultValue=o,l=e.textContent,l===o&&l!==""&&l!==null&&(e.value=l)}function $s(e,i){if(i){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=i;return}}e.textContent=i}var K5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jy(e,i,o){var l=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,o):typeof o!="number"||o===0||K5.has(i)?i==="float"?e.cssFloat=o:e[i]=(""+o).trim():e[i]=o+"px"}function zy(e,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,o!=null){for(var l in o)!o.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var d in i)l=i[d],i.hasOwnProperty(d)&&o[d]!==l&&jy(e,d,l)}else for(var m in i)i.hasOwnProperty(m)&&jy(e,m,i[m])}function mh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Q5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _c(e){return Q5.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gh=null;function yh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,Zs=null;function ky(e){var i=Xt(e);if(i&&(e=i.stateNode)){var o=e[dt]||null;t:switch(e=i.stateNode,i.type){case"input":if(hh(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Oi(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==e&&l.form===e.form){var d=l[dt]||null;if(!d)throw Error(a(90));hh(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<o.length;i++)l=o[i],l.form===e.form&&My(l)}break t;case"textarea":Dy(e,o.value,o.defaultValue);break t;case"select":i=o.value,i!=null&&Fs(e,!!o.multiple,i,!1)}}}var vh=!1;function Ly(e,i,o){if(vh)return e(i,o);vh=!0;try{var l=e(i);return l}finally{if(vh=!1,(Ks!==null||Zs!==null)&&(of(),Ks&&(i=Ks,e=Zs,Zs=Ks=null,ky(i),e)))for(i=0;i<e.length;i++)ky(e[i])}}function ml(e,i){var o=e.stateNode;if(o===null)return null;var l=o[dt]||null;if(l===null)return null;o=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var Nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xh=!1;if(Nr)try{var gl={};Object.defineProperty(gl,"passive",{get:function(){xh=!0}}),window.addEventListener("test",gl,gl),window.removeEventListener("test",gl,gl)}catch{xh=!1}var fa=null,bh=null,wc=null;function Ny(){if(wc)return wc;var e,i=bh,o=i.length,l,d="value"in fa?fa.value:fa.textContent,m=d.length;for(e=0;e<o&&i[e]===d[e];e++);var b=o-e;for(l=1;l<=b&&i[o-l]===d[m-l];l++);return wc=d.slice(e,1<l?1-l:void 0)}function Sc(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Tc(){return!0}function Py(){return!1}function qn(e){function i(o,l,d,m,b){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(o=e[E],this[E]=o?o(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Tc:Py,this.isPropagationStopped=Py,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Tc)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Tc)},persist:function(){},isPersistent:Tc}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=qn(ts),yl=g({},ts,{view:0,detail:0}),I5=qn(yl),_h,wh,vl,Ac=g({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Th,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vl&&(vl&&e.type==="mousemove"?(_h=e.screenX-vl.screenX,wh=e.screenY-vl.screenY):wh=_h=0,vl=e),_h)},movementY:function(e){return"movementY"in e?e.movementY:wh}}),Vy=qn(Ac),W5=g({},Ac,{dataTransfer:0}),J5=qn(W5),tE=g({},yl,{relatedTarget:0}),Sh=qn(tE),eE=g({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),nE=qn(eE),iE=g({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rE=qn(iE),aE=g({},ts,{data:0}),By=qn(aE),sE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uE(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=lE[e])?!!i[e]:!1}function Th(){return uE}var cE=g({},yl,{key:function(e){if(e.key){var i=sE[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Sc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Th,charCode:function(e){return e.type==="keypress"?Sc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fE=qn(cE),dE=g({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uy=qn(dE),hE=g({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Th}),pE=qn(hE),mE=g({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),gE=qn(mE),yE=g({},Ac,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vE=qn(yE),xE=g({},ts,{newState:0,oldState:0}),bE=qn(xE),_E=[9,13,27,32],Eh=Nr&&"CompositionEvent"in window,xl=null;Nr&&"documentMode"in document&&(xl=document.documentMode);var wE=Nr&&"TextEvent"in window&&!xl,Hy=Nr&&(!Eh||xl&&8<xl&&11>=xl),Yy=" ",Gy=!1;function Xy(e,i){switch(e){case"keyup":return _E.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function SE(e,i){switch(e){case"compositionend":return qy(i);case"keypress":return i.which!==32?null:(Gy=!0,Yy);case"textInput":return e=i.data,e===Yy&&Gy?null:e;default:return null}}function TE(e,i){if(Qs)return e==="compositionend"||!Eh&&Xy(e,i)?(e=Ny(),wc=bh=fa=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hy&&i.locale!=="ko"?null:i.data;default:return null}}var EE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fy(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!EE[e.type]:i==="textarea"}function $y(e,i,o,l){Ks?Zs?Zs.push(l):Zs=[l]:Ks=l,i=hf(i,"onChange"),0<i.length&&(o=new Ec("onChange","change",null,o,l),e.push({event:o,listeners:i}))}var bl=null,_l=null;function AE(e){Cx(e,0)}function Cc(e){var i=un(e);if(My(i))return e}function Ky(e,i){if(e==="change")return i}var Zy=!1;if(Nr){var Ah;if(Nr){var Ch="oninput"in document;if(!Ch){var Qy=document.createElement("div");Qy.setAttribute("oninput","return;"),Ch=typeof Qy.oninput=="function"}Ah=Ch}else Ah=!1;Zy=Ah&&(!document.documentMode||9<document.documentMode)}function Iy(){bl&&(bl.detachEvent("onpropertychange",Wy),_l=bl=null)}function Wy(e){if(e.propertyName==="value"&&Cc(_l)){var i=[];$y(i,_l,e,yh(e)),Ly(AE,i)}}function CE(e,i,o){e==="focusin"?(Iy(),bl=i,_l=o,bl.attachEvent("onpropertychange",Wy)):e==="focusout"&&Iy()}function ME(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cc(_l)}function RE(e,i){if(e==="click")return Cc(i)}function DE(e,i){if(e==="input"||e==="change")return Cc(i)}function OE(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var oi=typeof Object.is=="function"?Object.is:OE;function wl(e,i){if(oi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var o=Object.keys(e),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!ie.call(i,d)||!oi(e[d],i[d]))return!1}return!0}function Jy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function t1(e,i){var o=Jy(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=i&&l>=i)return{node:o,offset:i-e};e=l}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=Jy(o)}}function e1(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?e1(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function n1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=bc(e.document);i instanceof e.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)e=i.contentWindow;else break;i=bc(e.document)}return i}function Mh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var jE=Nr&&"documentMode"in document&&11>=document.documentMode,Is=null,Rh=null,Sl=null,Dh=!1;function i1(e,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Dh||Is==null||Is!==bc(l)||(l=Is,"selectionStart"in l&&Mh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Sl&&wl(Sl,l)||(Sl=l,l=hf(Rh,"onSelect"),0<l.length&&(i=new Ec("onSelect","select",null,i,o),e.push({event:i,listeners:l}),i.target=Is)))}function es(e,i){var o={};return o[e.toLowerCase()]=i.toLowerCase(),o["Webkit"+e]="webkit"+i,o["Moz"+e]="moz"+i,o}var Ws={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionrun:es("Transition","TransitionRun"),transitionstart:es("Transition","TransitionStart"),transitioncancel:es("Transition","TransitionCancel"),transitionend:es("Transition","TransitionEnd")},Oh={},r1={};Nr&&(r1=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function ns(e){if(Oh[e])return Oh[e];if(!Ws[e])return e;var i=Ws[e],o;for(o in i)if(i.hasOwnProperty(o)&&o in r1)return Oh[e]=i[o];return e}var a1=ns("animationend"),s1=ns("animationiteration"),o1=ns("animationstart"),zE=ns("transitionrun"),kE=ns("transitionstart"),LE=ns("transitioncancel"),l1=ns("transitionend"),u1=new Map,jh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jh.push("scrollEnd");function tr(e,i){u1.set(e,i),ge(i,[e])}var c1=new WeakMap;function ji(e,i){if(typeof e=="object"&&e!==null){var o=c1.get(e);return o!==void 0?o:(i={value:e,source:i,stack:Ay(i)},c1.set(e,i),i)}return{value:e,source:i,stack:Ay(i)}}var zi=[],Js=0,zh=0;function Mc(){for(var e=Js,i=zh=Js=0;i<e;){var o=zi[i];zi[i++]=null;var l=zi[i];zi[i++]=null;var d=zi[i];zi[i++]=null;var m=zi[i];if(zi[i++]=null,l!==null&&d!==null){var b=l.pending;b===null?d.next=d:(d.next=b.next,b.next=d),l.pending=d}m!==0&&f1(o,d,m)}}function Rc(e,i,o,l){zi[Js++]=e,zi[Js++]=i,zi[Js++]=o,zi[Js++]=l,zh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function kh(e,i,o,l){return Rc(e,i,o,l),Dc(e)}function to(e,i){return Rc(e,null,null,i),Dc(e)}function f1(e,i,o){e.lanes|=o;var l=e.alternate;l!==null&&(l.lanes|=o);for(var d=!1,m=e.return;m!==null;)m.childLanes|=o,l=m.alternate,l!==null&&(l.childLanes|=o),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,d&&i!==null&&(d=31-ce(o),e=m.hiddenUpdates,l=e[d],l===null?e[d]=[i]:l.push(i),i.lane=o|536870912),m):null}function Dc(e){if(50<Kl)throw Kl=0,Up=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var eo={};function NE(e,i,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,i,o,l){return new NE(e,i,o,l)}function Lh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pr(e,i){var o=e.alternate;return o===null?(o=li(e.tag,i,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=i,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,i=e.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function d1(e,i){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,i=o.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Oc(e,i,o,l,d,m){var b=0;if(l=e,typeof e=="function")Lh(e)&&(b=1);else if(typeof e=="string")b=VA(e,o,rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case X:return e=li(31,o,i,d),e.elementType=X,e.lanes=m,e;case _:return is(o.children,d,m,i);case S:b=8,d|=24;break;case C:return e=li(12,o,i,d|2),e.elementType=C,e.lanes=m,e;case D:return e=li(13,o,i,d),e.elementType=D,e.lanes=m,e;case N:return e=li(19,o,i,d),e.elementType=N,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:case R:b=10;break t;case M:b=9;break t;case j:b=11;break t;case z:b=14;break t;case B:b=16,l=null;break t}b=29,o=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=li(b,o,i,d),i.elementType=e,i.type=l,i.lanes=m,i}function is(e,i,o,l){return e=li(7,e,l,i),e.lanes=o,e}function Nh(e,i,o){return e=li(6,e,null,i),e.lanes=o,e}function Ph(e,i,o){return i=li(4,e.children!==null?e.children:[],e.key,i),i.lanes=o,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var no=[],io=0,jc=null,zc=0,ki=[],Li=0,rs=null,Vr=1,Br="";function as(e,i){no[io++]=zc,no[io++]=jc,jc=e,zc=i}function h1(e,i,o){ki[Li++]=Vr,ki[Li++]=Br,ki[Li++]=rs,rs=e;var l=Vr;e=Br;var d=32-ce(l)-1;l&=~(1<<d),o+=1;var m=32-ce(i)+d;if(30<m){var b=d-d%5;m=(l&(1<<b)-1).toString(32),l>>=b,d-=b,Vr=1<<32-ce(i)+d|o<<d|l,Br=m+e}else Vr=1<<m|o<<d|l,Br=e}function Vh(e){e.return!==null&&(as(e,1),h1(e,1,0))}function Bh(e){for(;e===jc;)jc=no[--io],no[io]=null,zc=no[--io],no[io]=null;for(;e===rs;)rs=ki[--Li],ki[Li]=null,Br=ki[--Li],ki[Li]=null,Vr=ki[--Li],ki[Li]=null}var jn=null,De=null,Qt=!1,ss=null,lr=!1,Uh=Error(a(519));function os(e){var i=Error(a(418,""));throw Al(ji(i,e)),Uh}function p1(e){var i=e.stateNode,o=e.type,l=e.memoizedProps;switch(i[nt]=e,i[dt]=l,o){case"dialog":Ht("cancel",i),Ht("close",i);break;case"iframe":case"object":case"embed":Ht("load",i);break;case"video":case"audio":for(o=0;o<Ql.length;o++)Ht(Ql[o],i);break;case"source":Ht("error",i);break;case"img":case"image":case"link":Ht("error",i),Ht("load",i);break;case"details":Ht("toggle",i);break;case"input":Ht("invalid",i),Ry(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),xc(i);break;case"select":Ht("invalid",i);break;case"textarea":Ht("invalid",i),Oy(i,l.value,l.defaultValue,l.children),xc(i)}o=l.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||l.suppressHydrationWarning===!0||Ox(i.textContent,o)?(l.popover!=null&&(Ht("beforetoggle",i),Ht("toggle",i)),l.onScroll!=null&&Ht("scroll",i),l.onScrollEnd!=null&&Ht("scrollend",i),l.onClick!=null&&(i.onclick=pf),i=!0):i=!1,i||os(e)}function m1(e){for(jn=e.return;jn;)switch(jn.tag){case 5:case 13:lr=!1;return;case 27:case 3:lr=!0;return;default:jn=jn.return}}function Tl(e){if(e!==jn)return!1;if(!Qt)return m1(e),Qt=!0,!1;var i=e.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||nm(e.type,e.memoizedProps)),o=!o),o&&De&&os(e),m1(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(o=e.data,o==="/$"){if(i===0){De=nr(e.nextSibling);break t}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++;e=e.nextSibling}De=null}}else i===27?(i=De,Ca(e.type)?(e=sm,sm=null,De=e):De=i):De=jn?nr(e.stateNode.nextSibling):null;return!0}function El(){De=jn=null,Qt=!1}function g1(){var e=ss;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),ss=null),e}function Al(e){ss===null?ss=[e]:ss.push(e)}var Hh=K(null),ls=null,Ur=null;function da(e,i,o){it(Hh,i._currentValue),i._currentValue=o}function Hr(e){e._currentValue=Hh.current,et(Hh)}function Yh(e,i,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===o)break;e=e.return}}function Gh(e,i,o,l){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var b=d.child;m=m.firstContext;t:for(;m!==null;){var E=m;m=d;for(var O=0;O<i.length;O++)if(E.context===i[O]){m.lanes|=o,E=m.alternate,E!==null&&(E.lanes|=o),Yh(m.return,o,e),l||(b=null);break t}m=E.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(a(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),Yh(b,o,e),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===e){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function Cl(e,i,o,l){e=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var E=d.type;oi(d.pendingProps.value,b.value)||(e!==null?e.push(E):e=[E])}}else if(d===Ot.current){if(b=d.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(nu):e=[nu])}d=d.return}e!==null&&Gh(i,e,o,l),i.flags|=262144}function kc(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function us(e){ls=e,Ur=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vn(e){return y1(ls,e)}function Lc(e,i){return ls===null&&us(e),y1(e,i)}function y1(e,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},Ur===null){if(e===null)throw Error(a(308));Ur=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ur=Ur.next=i;return o}var PE=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(o,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(o){return o()})}},VE=n.unstable_scheduleCallback,BE=n.unstable_NormalPriority,Qe={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xh(){return{controller:new PE,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&VE(BE,function(){e.controller.abort()})}var Rl=null,qh=0,ro=0,ao=null;function UE(e,i){if(Rl===null){var o=Rl=[];qh=0,ro=$p(),ao={status:"pending",value:void 0,then:function(l){o.push(l)}}}return qh++,i.then(v1,v1),i}function v1(){if(--qh===0&&Rl!==null){ao!==null&&(ao.status="fulfilled");var e=Rl;Rl=null,ro=0,ao=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function HE(e,i){var o=[],l={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var d=0;d<o.length;d++)(0,o[d])(i)},function(d){for(l.status="rejected",l.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),l}var x1=Y.S;Y.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&UE(e,i),x1!==null&&x1(e,i)};var cs=K(null);function Fh(){var e=cs.current;return e!==null?e:de.pooledCache}function Nc(e,i){i===null?it(cs,cs.current):it(cs,i.pool)}function b1(){var e=Fh();return e===null?null:{parent:Qe._currentValue,pool:e}}var Dl=Error(a(460)),_1=Error(a(474)),Pc=Error(a(542)),$h={then:function(){}};function w1(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vc(){}function S1(e,i,o){switch(o=e[o],o===void 0?e.push(i):o!==i&&(i.then(Vc,Vc),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,E1(e),e;default:if(typeof i.status=="string")i.then(Vc,Vc);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=l}},function(l){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,E1(e),e}throw Ol=i,Dl}}var Ol=null;function T1(){if(Ol===null)throw Error(a(459));var e=Ol;return Ol=null,e}function E1(e){if(e===Dl||e===Pc)throw Error(a(483))}var ha=!1;function Kh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,i,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(te&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,i=Dc(e),f1(e,null,o),i}return Rc(e,l,i,o),Dc(e)}function jl(e,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,o|=l,i.lanes=o,jr(e,o)}}function Qh(e,i){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=i:e.next=i,o.lastBaseUpdate=i}var Ih=!1;function zl(){if(Ih){var e=ao;if(e!==null)throw e}}function kl(e,i,o,l){Ih=!1;var d=e.updateQueue;ha=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var O=E,H=O.next;O.next=null,b===null?m=H:b.next=H,b=O;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,E=Q.lastBaseUpdate,E!==b&&(E===null?Q.firstBaseUpdate=H:E.next=H,Q.lastBaseUpdate=O))}if(m!==null){var W=d.baseState;b=0,Q=H=O=null,E=m;do{var G=E.lane&-536870913,q=G!==E.lane;if(q?(qt&G)===G:(l&G)===G){G!==0&&G===ro&&(Ih=!0),Q!==null&&(Q=Q.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var St=e,xt=E;G=i;var se=o;switch(xt.tag){case 1:if(St=xt.payload,typeof St=="function"){W=St.call(se,W,G);break t}W=St;break t;case 3:St.flags=St.flags&-65537|128;case 0:if(St=xt.payload,G=typeof St=="function"?St.call(se,W,G):St,G==null)break t;W=g({},W,G);break t;case 2:ha=!0}}G=E.callback,G!==null&&(e.flags|=64,q&&(e.flags|=8192),q=d.callbacks,q===null?d.callbacks=[G]:q.push(G))}else q={lane:G,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Q===null?(H=Q=q,O=W):Q=Q.next=q,b|=G;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;q=E,E=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);Q===null&&(O=W),d.baseState=O,d.firstBaseUpdate=H,d.lastBaseUpdate=Q,m===null&&(d.shared.lanes=0),Sa|=b,e.lanes=b,e.memoizedState=W}}function A1(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function C1(e,i){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)A1(o[e],i)}var so=K(null),Bc=K(0);function M1(e,i){e=Kr,it(Bc,e),it(so,i),Kr=e|i.baseLanes}function Wh(){it(Bc,Kr),it(so,so.current)}function Jh(){Kr=Bc.current,et(so),et(Bc)}var ga=0,jt=null,re=null,Xe=null,Uc=!1,oo=!1,fs=!1,Hc=0,Ll=0,lo=null,YE=0;function Le(){throw Error(a(321))}function tp(e,i){if(i===null)return!1;for(var o=0;o<i.length&&o<e.length;o++)if(!oi(e[o],i[o]))return!1;return!0}function ep(e,i,o,l,d,m){return ga=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Y.H=e===null||e.memoizedState===null?fv:dv,fs=!1,m=o(l,d),fs=!1,oo&&(m=D1(i,o,l,d)),R1(e),m}function R1(e){Y.H=$c;var i=re!==null&&re.next!==null;if(ga=0,Xe=re=jt=null,Uc=!1,Ll=0,lo=null,i)throw Error(a(300));e===null||tn||(e=e.dependencies,e!==null&&kc(e)&&(tn=!0))}function D1(e,i,o,l){jt=e;var d=0;do{if(oo&&(lo=null),Ll=0,oo=!1,25<=d)throw Error(a(301));if(d+=1,Xe=re=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=ZE,m=i(o,l)}while(oo);return m}function GE(){var e=Y.H,i=e.useState()[0];return i=typeof i.then=="function"?Nl(i):i,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(jt.flags|=1024),i}function np(){var e=Hc!==0;return Hc=0,e}function ip(e,i,o){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~o}function rp(e){if(Uc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Uc=!1}ga=0,Xe=re=jt=null,oo=!1,Ll=Hc=0,lo=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?jt.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function qe(){if(re===null){var e=jt.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var i=Xe===null?jt.memoizedState:Xe.next;if(i!==null)Xe=i,re=e;else{if(e===null)throw jt.alternate===null?Error(a(467)):Error(a(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Xe===null?jt.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function ap(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nl(e){var i=Ll;return Ll+=1,lo===null&&(lo=[]),e=S1(lo,e,i),i=jt,(Xe===null?i.memoizedState:Xe.next)===null&&(i=i.alternate,Y.H=i===null||i.memoizedState===null?fv:dv),e}function Yc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Nl(e);if(e.$$typeof===R)return vn(e)}throw Error(a(438,String(e)))}function sp(e){var i=null,o=jt.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var l=jt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=ap(),jt.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(e),l=0;l<e;l++)o[l]=Z;return i.index++,o}function Yr(e,i){return typeof i=="function"?i(e):i}function Gc(e){var i=qe();return op(i,re,e)}function op(e,i,o){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=o;var d=e.baseQueue,m=l.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}i.baseQueue=d=m,l.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{i=d.next;var E=b=null,O=null,H=i,Q=!1;do{var W=H.lane&-536870913;if(W!==H.lane?(qt&W)===W:(ga&W)===W){var G=H.revertLane;if(G===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),W===ro&&(Q=!0);else if((ga&G)===G){H=H.next,G===ro&&(Q=!0);continue}else W={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},O===null?(E=O=W,b=m):O=O.next=W,jt.lanes|=G,Sa|=G;W=H.action,fs&&o(m,W),m=H.hasEagerState?H.eagerState:o(m,W)}else G={lane:W,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},O===null?(E=O=G,b=m):O=O.next=G,jt.lanes|=W,Sa|=W;H=H.next}while(H!==null&&H!==i);if(O===null?b=m:O.next=E,!oi(m,e.memoizedState)&&(tn=!0,Q&&(o=ao,o!==null)))throw o;e.memoizedState=m,e.baseState=b,e.baseQueue=O,l.lastRenderedState=m}return d===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function lp(e){var i=qe(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=e;var l=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var b=d=d.next;do m=e(m,b.action),b=b.next;while(b!==d);oi(m,i.memoizedState)||(tn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,l]}function O1(e,i,o){var l=jt,d=qe(),m=Qt;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=i();var b=!oi((re||d).memoizedState,o);b&&(d.memoizedState=o,tn=!0),d=d.queue;var E=k1.bind(null,l,d,e);if(Pl(2048,8,E,[e]),d.getSnapshot!==i||b||Xe!==null&&Xe.memoizedState.tag&1){if(l.flags|=2048,uo(9,Xc(),z1.bind(null,l,d,o,i),null),de===null)throw Error(a(349));m||(ga&124)!==0||j1(l,i,o)}return o}function j1(e,i,o){e.flags|=16384,e={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i=ap(),jt.updateQueue=i,i.stores=[e]):(o=i.stores,o===null?i.stores=[e]:o.push(e))}function z1(e,i,o,l){i.value=o,i.getSnapshot=l,L1(i)&&N1(e)}function k1(e,i,o){return o(function(){L1(i)&&N1(e)})}function L1(e){var i=e.getSnapshot;e=e.value;try{var o=i();return!oi(e,o)}catch{return!0}}function N1(e){var i=to(e,2);i!==null&&hi(i,e,2)}function up(e){var i=Fn();if(typeof e=="function"){var o=e;if(e=o(),fs){He(!0);try{o()}finally{He(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},i}function P1(e,i,o,l){return e.baseState=o,op(e,re,typeof l=="function"?l:Yr)}function XE(e,i,o,l,d){if(Fc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};Y.T!==null?o(!0):m.isTransition=!1,l(m),o=i.pending,o===null?(m.next=i.pending=m,V1(i,m)):(m.next=o.next,i.pending=o.next=m)}}function V1(e,i){var o=i.action,l=i.payload,d=e.state;if(i.isTransition){var m=Y.T,b={};Y.T=b;try{var E=o(d,l),O=Y.S;O!==null&&O(b,E),B1(e,i,E)}catch(H){cp(e,i,H)}finally{Y.T=m}}else try{m=o(d,l),B1(e,i,m)}catch(H){cp(e,i,H)}}function B1(e,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(l){U1(e,i,l)},function(l){return cp(e,i,l)}):U1(e,i,o)}function U1(e,i,o){i.status="fulfilled",i.value=o,H1(i),e.state=o,i=e.pending,i!==null&&(o=i.next,o===i?e.pending=null:(o=o.next,i.next=o,V1(e,o)))}function cp(e,i,o){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=o,H1(i),i=i.next;while(i!==l)}e.action=null}function H1(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Y1(e,i){return i}function G1(e,i){if(Qt){var o=de.formState;if(o!==null){t:{var l=jt;if(Qt){if(De){e:{for(var d=De,m=lr;d.nodeType!==8;){if(!m){d=null;break e}if(d=nr(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){De=nr(d.nextSibling),l=d.data==="F!";break t}}os(l)}l=!1}l&&(i=o[0])}}return o=Fn(),o.memoizedState=o.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y1,lastRenderedState:i},o.queue=l,o=lv.bind(null,jt,l),l.dispatch=o,l=up(!1),m=mp.bind(null,jt,!1,l.queue),l=Fn(),d={state:i,dispatch:null,action:e,pending:null},l.queue=d,o=XE.bind(null,jt,d,m,o),d.dispatch=o,l.memoizedState=e,[i,o,!1]}function X1(e){var i=qe();return q1(i,re,e)}function q1(e,i,o){if(i=op(e,i,Y1)[0],e=Gc(Yr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Nl(i)}catch(b){throw b===Dl?Pc:b}else l=i;i=qe();var d=i.queue,m=d.dispatch;return o!==i.memoizedState&&(jt.flags|=2048,uo(9,Xc(),qE.bind(null,d,o),null)),[l,m,e]}function qE(e,i){e.action=i}function F1(e){var i=qe(),o=re;if(o!==null)return q1(i,o,e);qe(),i=i.memoizedState,o=qe();var l=o.queue.dispatch;return o.memoizedState=e,[i,l,!1]}function uo(e,i,o,l){return e={tag:e,create:o,deps:l,inst:i,next:null},i=jt.updateQueue,i===null&&(i=ap(),jt.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,i.lastEffect=e),e}function Xc(){return{destroy:void 0,resource:void 0}}function $1(){return qe().memoizedState}function qc(e,i,o,l){var d=Fn();l=l===void 0?null:l,jt.flags|=e,d.memoizedState=uo(1|i,Xc(),o,l)}function Pl(e,i,o,l){var d=qe();l=l===void 0?null:l;var m=d.memoizedState.inst;re!==null&&l!==null&&tp(l,re.memoizedState.deps)?d.memoizedState=uo(i,m,o,l):(jt.flags|=e,d.memoizedState=uo(1|i,m,o,l))}function K1(e,i){qc(8390656,8,e,i)}function Z1(e,i){Pl(2048,8,e,i)}function Q1(e,i){return Pl(4,2,e,i)}function I1(e,i){return Pl(4,4,e,i)}function W1(e,i){if(typeof i=="function"){e=e();var o=i(e);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function J1(e,i,o){o=o!=null?o.concat([e]):null,Pl(4,4,W1.bind(null,i,e),o)}function fp(){}function tv(e,i){var o=qe();i=i===void 0?null:i;var l=o.memoizedState;return i!==null&&tp(i,l[1])?l[0]:(o.memoizedState=[e,i],e)}function ev(e,i){var o=qe();i=i===void 0?null:i;var l=o.memoizedState;if(i!==null&&tp(i,l[1]))return l[0];if(l=e(),fs){He(!0);try{e()}finally{He(!1)}}return o.memoizedState=[l,i],l}function dp(e,i,o){return o===void 0||(ga&1073741824)!==0?e.memoizedState=i:(e.memoizedState=o,e=rx(),jt.lanes|=e,Sa|=e,o)}function nv(e,i,o,l){return oi(o,i)?o:so.current!==null?(e=dp(e,o,l),oi(e,i)||(tn=!0),e):(ga&42)===0?(tn=!0,e.memoizedState=o):(e=rx(),jt.lanes|=e,Sa|=e,i)}function iv(e,i,o,l,d){var m=$.p;$.p=m!==0&&8>m?m:8;var b=Y.T,E={};Y.T=E,mp(e,!1,i,o);try{var O=d(),H=Y.S;if(H!==null&&H(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=HE(O,l);Vl(e,i,Q,di(e))}else Vl(e,i,l,di(e))}catch(W){Vl(e,i,{then:function(){},status:"rejected",reason:W},di())}finally{$.p=m,Y.T=b}}function FE(){}function hp(e,i,o,l){if(e.tag!==5)throw Error(a(476));var d=rv(e).queue;iv(e,d,i,J,o===null?FE:function(){return av(e),o(l)})}function rv(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:J},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:o},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function av(e){var i=rv(e).next.queue;Vl(e,i,{},di())}function pp(){return vn(nu)}function sv(){return qe().memoizedState}function ov(){return qe().memoizedState}function $E(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var o=di();e=pa(o);var l=ma(i,e,o);l!==null&&(hi(l,i,o),jl(l,i,o)),i={cache:Xh()},e.payload=i;return}i=i.return}}function KE(e,i,o){var l=di();o={lane:l,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Fc(e)?uv(i,o):(o=kh(e,i,o,l),o!==null&&(hi(o,e,l),cv(o,i,l)))}function lv(e,i,o){var l=di();Vl(e,i,o,l)}function Vl(e,i,o,l){var d={lane:l,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))uv(i,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,E=m(b,o);if(d.hasEagerState=!0,d.eagerState=E,oi(E,b))return Rc(e,i,d,0),de===null&&Mc(),!1}catch{}finally{}if(o=kh(e,i,d,l),o!==null)return hi(o,e,l),cv(o,i,l),!0}return!1}function mp(e,i,o,l){if(l={lane:2,revertLane:$p(),action:l,hasEagerState:!1,eagerState:null,next:null},Fc(e)){if(i)throw Error(a(479))}else i=kh(e,o,l,2),i!==null&&hi(i,e,2)}function Fc(e){var i=e.alternate;return e===jt||i!==null&&i===jt}function uv(e,i){oo=Uc=!0;var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}function cv(e,i,o){if((o&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,o|=l,i.lanes=o,jr(e,o)}}var $c={readContext:vn,use:Yc,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le},fv={readContext:vn,use:Yc,useCallback:function(e,i){return Fn().memoizedState=[e,i===void 0?null:i],e},useContext:vn,useEffect:K1,useImperativeHandle:function(e,i,o){o=o!=null?o.concat([e]):null,qc(4194308,4,W1.bind(null,i,e),o)},useLayoutEffect:function(e,i){return qc(4194308,4,e,i)},useInsertionEffect:function(e,i){qc(4,2,e,i)},useMemo:function(e,i){var o=Fn();i=i===void 0?null:i;var l=e();if(fs){He(!0);try{e()}finally{He(!1)}}return o.memoizedState=[l,i],l},useReducer:function(e,i,o){var l=Fn();if(o!==void 0){var d=o(i);if(fs){He(!0);try{o(i)}finally{He(!1)}}}else d=i;return l.memoizedState=l.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},l.queue=e,e=e.dispatch=KE.bind(null,jt,e),[l.memoizedState,e]},useRef:function(e){var i=Fn();return e={current:e},i.memoizedState=e},useState:function(e){e=up(e);var i=e.queue,o=lv.bind(null,jt,i);return i.dispatch=o,[e.memoizedState,o]},useDebugValue:fp,useDeferredValue:function(e,i){var o=Fn();return dp(o,e,i)},useTransition:function(){var e=up(!1);return e=iv.bind(null,jt,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,o){var l=jt,d=Fn();if(Qt){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),de===null)throw Error(a(349));(qt&124)!==0||j1(l,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,K1(k1.bind(null,l,m,e),[e]),l.flags|=2048,uo(9,Xc(),z1.bind(null,l,m,o,i),null),o},useId:function(){var e=Fn(),i=de.identifierPrefix;if(Qt){var o=Br,l=Vr;o=(l&~(1<<32-ce(l)-1)).toString(32)+o,i="«"+i+"R"+o,o=Hc++,0<o&&(i+="H"+o.toString(32)),i+="»"}else o=YE++,i="«"+i+"r"+o.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:pp,useFormState:G1,useActionState:G1,useOptimistic:function(e){var i=Fn();i.memoizedState=i.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=mp.bind(null,jt,!0,o),o.dispatch=i,[e,i]},useMemoCache:sp,useCacheRefresh:function(){return Fn().memoizedState=$E.bind(null,jt)}},dv={readContext:vn,use:Yc,useCallback:tv,useContext:vn,useEffect:Z1,useImperativeHandle:J1,useInsertionEffect:Q1,useLayoutEffect:I1,useMemo:ev,useReducer:Gc,useRef:$1,useState:function(){return Gc(Yr)},useDebugValue:fp,useDeferredValue:function(e,i){var o=qe();return nv(o,re.memoizedState,e,i)},useTransition:function(){var e=Gc(Yr)[0],i=qe().memoizedState;return[typeof e=="boolean"?e:Nl(e),i]},useSyncExternalStore:O1,useId:sv,useHostTransitionStatus:pp,useFormState:X1,useActionState:X1,useOptimistic:function(e,i){var o=qe();return P1(o,re,e,i)},useMemoCache:sp,useCacheRefresh:ov},ZE={readContext:vn,use:Yc,useCallback:tv,useContext:vn,useEffect:Z1,useImperativeHandle:J1,useInsertionEffect:Q1,useLayoutEffect:I1,useMemo:ev,useReducer:lp,useRef:$1,useState:function(){return lp(Yr)},useDebugValue:fp,useDeferredValue:function(e,i){var o=qe();return re===null?dp(o,e,i):nv(o,re.memoizedState,e,i)},useTransition:function(){var e=lp(Yr)[0],i=qe().memoizedState;return[typeof e=="boolean"?e:Nl(e),i]},useSyncExternalStore:O1,useId:sv,useHostTransitionStatus:pp,useFormState:F1,useActionState:F1,useOptimistic:function(e,i){var o=qe();return re!==null?P1(o,re,e,i):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:sp,useCacheRefresh:ov},co=null,Bl=0;function Kc(e){var i=Bl;return Bl+=1,co===null&&(co=[]),S1(co,e,i)}function Ul(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Zc(e,i){throw i.$$typeof===y?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function hv(e){var i=e._init;return i(e._payload)}function pv(e){function i(V,L){if(e){var U=V.deletions;U===null?(V.deletions=[L],V.flags|=16):U.push(L)}}function o(V,L){if(!e)return null;for(;L!==null;)i(V,L),L=L.sibling;return null}function l(V){for(var L=new Map;V!==null;)V.key!==null?L.set(V.key,V):L.set(V.index,V),V=V.sibling;return L}function d(V,L){return V=Pr(V,L),V.index=0,V.sibling=null,V}function m(V,L,U){return V.index=U,e?(U=V.alternate,U!==null?(U=U.index,U<L?(V.flags|=67108866,L):U):(V.flags|=67108866,L)):(V.flags|=1048576,L)}function b(V){return e&&V.alternate===null&&(V.flags|=67108866),V}function E(V,L,U,I){return L===null||L.tag!==6?(L=Nh(U,V.mode,I),L.return=V,L):(L=d(L,U),L.return=V,L)}function O(V,L,U,I){var ut=U.type;return ut===_?Q(V,L,U.props.children,I,U.key):L!==null&&(L.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===B&&hv(ut)===L.type)?(L=d(L,U.props),Ul(L,U),L.return=V,L):(L=Oc(U.type,U.key,U.props,null,V.mode,I),Ul(L,U),L.return=V,L)}function H(V,L,U,I){return L===null||L.tag!==4||L.stateNode.containerInfo!==U.containerInfo||L.stateNode.implementation!==U.implementation?(L=Ph(U,V.mode,I),L.return=V,L):(L=d(L,U.children||[]),L.return=V,L)}function Q(V,L,U,I,ut){return L===null||L.tag!==7?(L=is(U,V.mode,I,ut),L.return=V,L):(L=d(L,U),L.return=V,L)}function W(V,L,U){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Nh(""+L,V.mode,U),L.return=V,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case x:return U=Oc(L.type,L.key,L.props,null,V.mode,U),Ul(U,L),U.return=V,U;case v:return L=Ph(L,V.mode,U),L.return=V,L;case B:var I=L._init;return L=I(L._payload),W(V,L,U)}if(gt(L)||tt(L))return L=is(L,V.mode,U,null),L.return=V,L;if(typeof L.then=="function")return W(V,Kc(L),U);if(L.$$typeof===R)return W(V,Lc(V,L),U);Zc(V,L)}return null}function G(V,L,U,I){var ut=L!==null?L.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ut!==null?null:E(V,L,""+U,I);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case x:return U.key===ut?O(V,L,U,I):null;case v:return U.key===ut?H(V,L,U,I):null;case B:return ut=U._init,U=ut(U._payload),G(V,L,U,I)}if(gt(U)||tt(U))return ut!==null?null:Q(V,L,U,I,null);if(typeof U.then=="function")return G(V,L,Kc(U),I);if(U.$$typeof===R)return G(V,L,Lc(V,U),I);Zc(V,U)}return null}function q(V,L,U,I,ut){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return V=V.get(U)||null,E(L,V,""+I,ut);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case x:return V=V.get(I.key===null?U:I.key)||null,O(L,V,I,ut);case v:return V=V.get(I.key===null?U:I.key)||null,H(L,V,I,ut);case B:var Lt=I._init;return I=Lt(I._payload),q(V,L,U,I,ut)}if(gt(I)||tt(I))return V=V.get(U)||null,Q(L,V,I,ut,null);if(typeof I.then=="function")return q(V,L,U,Kc(I),ut);if(I.$$typeof===R)return q(V,L,U,Lc(L,I),ut);Zc(L,I)}return null}function St(V,L,U,I){for(var ut=null,Lt=null,ht=L,bt=L=0,nn=null;ht!==null&&bt<U.length;bt++){ht.index>bt?(nn=ht,ht=null):nn=ht.sibling;var Kt=G(V,ht,U[bt],I);if(Kt===null){ht===null&&(ht=nn);break}e&&ht&&Kt.alternate===null&&i(V,ht),L=m(Kt,L,bt),Lt===null?ut=Kt:Lt.sibling=Kt,Lt=Kt,ht=nn}if(bt===U.length)return o(V,ht),Qt&&as(V,bt),ut;if(ht===null){for(;bt<U.length;bt++)ht=W(V,U[bt],I),ht!==null&&(L=m(ht,L,bt),Lt===null?ut=ht:Lt.sibling=ht,Lt=ht);return Qt&&as(V,bt),ut}for(ht=l(ht);bt<U.length;bt++)nn=q(ht,V,bt,U[bt],I),nn!==null&&(e&&nn.alternate!==null&&ht.delete(nn.key===null?bt:nn.key),L=m(nn,L,bt),Lt===null?ut=nn:Lt.sibling=nn,Lt=nn);return e&&ht.forEach(function(ja){return i(V,ja)}),Qt&&as(V,bt),ut}function xt(V,L,U,I){if(U==null)throw Error(a(151));for(var ut=null,Lt=null,ht=L,bt=L=0,nn=null,Kt=U.next();ht!==null&&!Kt.done;bt++,Kt=U.next()){ht.index>bt?(nn=ht,ht=null):nn=ht.sibling;var ja=G(V,ht,Kt.value,I);if(ja===null){ht===null&&(ht=nn);break}e&&ht&&ja.alternate===null&&i(V,ht),L=m(ja,L,bt),Lt===null?ut=ja:Lt.sibling=ja,Lt=ja,ht=nn}if(Kt.done)return o(V,ht),Qt&&as(V,bt),ut;if(ht===null){for(;!Kt.done;bt++,Kt=U.next())Kt=W(V,Kt.value,I),Kt!==null&&(L=m(Kt,L,bt),Lt===null?ut=Kt:Lt.sibling=Kt,Lt=Kt);return Qt&&as(V,bt),ut}for(ht=l(ht);!Kt.done;bt++,Kt=U.next())Kt=q(ht,V,bt,Kt.value,I),Kt!==null&&(e&&Kt.alternate!==null&&ht.delete(Kt.key===null?bt:Kt.key),L=m(Kt,L,bt),Lt===null?ut=Kt:Lt.sibling=Kt,Lt=Kt);return e&&ht.forEach(function(QA){return i(V,QA)}),Qt&&as(V,bt),ut}function se(V,L,U,I){if(typeof U=="object"&&U!==null&&U.type===_&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case x:t:{for(var ut=U.key;L!==null;){if(L.key===ut){if(ut=U.type,ut===_){if(L.tag===7){o(V,L.sibling),I=d(L,U.props.children),I.return=V,V=I;break t}}else if(L.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===B&&hv(ut)===L.type){o(V,L.sibling),I=d(L,U.props),Ul(I,U),I.return=V,V=I;break t}o(V,L);break}else i(V,L);L=L.sibling}U.type===_?(I=is(U.props.children,V.mode,I,U.key),I.return=V,V=I):(I=Oc(U.type,U.key,U.props,null,V.mode,I),Ul(I,U),I.return=V,V=I)}return b(V);case v:t:{for(ut=U.key;L!==null;){if(L.key===ut)if(L.tag===4&&L.stateNode.containerInfo===U.containerInfo&&L.stateNode.implementation===U.implementation){o(V,L.sibling),I=d(L,U.children||[]),I.return=V,V=I;break t}else{o(V,L);break}else i(V,L);L=L.sibling}I=Ph(U,V.mode,I),I.return=V,V=I}return b(V);case B:return ut=U._init,U=ut(U._payload),se(V,L,U,I)}if(gt(U))return St(V,L,U,I);if(tt(U)){if(ut=tt(U),typeof ut!="function")throw Error(a(150));return U=ut.call(U),xt(V,L,U,I)}if(typeof U.then=="function")return se(V,L,Kc(U),I);if(U.$$typeof===R)return se(V,L,Lc(V,U),I);Zc(V,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,L!==null&&L.tag===6?(o(V,L.sibling),I=d(L,U),I.return=V,V=I):(o(V,L),I=Nh(U,V.mode,I),I.return=V,V=I),b(V)):o(V,L)}return function(V,L,U,I){try{Bl=0;var ut=se(V,L,U,I);return co=null,ut}catch(ht){if(ht===Dl||ht===Pc)throw ht;var Lt=li(29,ht,null,V.mode);return Lt.lanes=I,Lt.return=V,Lt}finally{}}}var fo=pv(!0),mv=pv(!1),Ni=K(null),ur=null;function ya(e){var i=e.alternate;it(Ie,Ie.current&1),it(Ni,e),ur===null&&(i===null||so.current!==null||i.memoizedState!==null)&&(ur=e)}function gv(e){if(e.tag===22){if(it(Ie,Ie.current),it(Ni,e),ur===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ur=e)}}else va()}function va(){it(Ie,Ie.current),it(Ni,Ni.current)}function Gr(e){et(Ni),ur===e&&(ur=null),et(Ie)}var Ie=K(0);function Qc(e){for(var i=e;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||am(o)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function gp(e,i,o,l){i=e.memoizedState,o=o(l,i),o=o==null?i:g({},i,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var yp={enqueueSetState:function(e,i,o){e=e._reactInternals;var l=di(),d=pa(l);d.payload=i,o!=null&&(d.callback=o),i=ma(e,d,l),i!==null&&(hi(i,e,l),jl(i,e,l))},enqueueReplaceState:function(e,i,o){e=e._reactInternals;var l=di(),d=pa(l);d.tag=1,d.payload=i,o!=null&&(d.callback=o),i=ma(e,d,l),i!==null&&(hi(i,e,l),jl(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var o=di(),l=pa(o);l.tag=2,i!=null&&(l.callback=i),i=ma(e,l,o),i!==null&&(hi(i,e,o),jl(i,e,o))}};function yv(e,i,o,l,d,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,b):i.prototype&&i.prototype.isPureReactComponent?!wl(o,l)||!wl(d,m):!0}function vv(e,i,o,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==e&&yp.enqueueReplaceState(i,i.state,null)}function ds(e,i){var o=i;if("ref"in i){o={};for(var l in i)l!=="ref"&&(o[l]=i[l])}if(e=e.defaultProps){o===i&&(o=g({},o));for(var d in e)o[d]===void 0&&(o[d]=e[d])}return o}var Ic=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function xv(e){Ic(e)}function bv(e){console.error(e)}function _v(e){Ic(e)}function Wc(e,i){try{var o=e.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function wv(e,i,o){try{var l=e.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function vp(e,i,o){return o=pa(o),o.tag=3,o.payload={element:null},o.callback=function(){Wc(e,i)},o}function Sv(e){return e=pa(e),e.tag=3,e}function Tv(e,i,o,l){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;e.payload=function(){return d(m)},e.callback=function(){wv(i,o,l)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){wv(i,o,l),typeof d!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function QE(e,i,o,l,d){if(o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=o.alternate,i!==null&&Cl(i,o,d,!0),o=Ni.current,o!==null){switch(o.tag){case 13:return ur===null?Yp():o.alternate===null&&Oe===0&&(Oe=3),o.flags&=-257,o.flags|=65536,o.lanes=d,l===$h?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([l]):i.add(l),Xp(e,l,d)),!1;case 22:return o.flags|=65536,l===$h?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([l]):o.add(l)),Xp(e,l,d)),!1}throw Error(a(435,o.tag))}return Xp(e,l,d),Yp(),!1}if(Qt)return i=Ni.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,l!==Uh&&(e=Error(a(422),{cause:l}),Al(ji(e,o)))):(l!==Uh&&(i=Error(a(423),{cause:l}),Al(ji(i,o))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,l=ji(l,o),d=vp(e.stateNode,l,d),Qh(e,d),Oe!==4&&(Oe=2)),!1;var m=Error(a(520),{cause:l});if(m=ji(m,o),$l===null?$l=[m]:$l.push(m),Oe!==4&&(Oe=2),i===null)return!0;l=ji(l,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,e=d&-d,o.lanes|=e,e=vp(o.stateNode,l,e),Qh(o,e),!1;case 1:if(i=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ta===null||!Ta.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=Sv(d),Tv(d,e,o,l),Qh(o,d),!1}o=o.return}while(o!==null);return!1}var Ev=Error(a(461)),tn=!1;function cn(e,i,o,l){i.child=e===null?mv(i,null,o,l):fo(i,e.child,o,l)}function Av(e,i,o,l,d){o=o.render;var m=i.ref;if("ref"in l){var b={};for(var E in l)E!=="ref"&&(b[E]=l[E])}else b=l;return us(i),l=ep(e,i,o,b,m,d),E=np(),e!==null&&!tn?(ip(e,i,d),Xr(e,i,d)):(Qt&&E&&Vh(i),i.flags|=1,cn(e,i,l,d),i.child)}function Cv(e,i,o,l,d){if(e===null){var m=o.type;return typeof m=="function"&&!Lh(m)&&m.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=m,Mv(e,i,m,l,d)):(e=Oc(o.type,null,l,i,i.mode,d),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Ap(e,d)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:wl,o(b,l)&&e.ref===i.ref)return Xr(e,i,d)}return i.flags|=1,e=Pr(m,l),e.ref=i.ref,e.return=i,i.child=e}function Mv(e,i,o,l,d){if(e!==null){var m=e.memoizedProps;if(wl(m,l)&&e.ref===i.ref)if(tn=!1,i.pendingProps=l=m,Ap(e,d))(e.flags&131072)!==0&&(tn=!0);else return i.lanes=e.lanes,Xr(e,i,d)}return xp(e,i,o,l,d)}function Rv(e,i,o){var l=i.pendingProps,d=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|o:o,e!==null){for(d=i.child=e.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Dv(e,i,l,o)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nc(i,m!==null?m.cachePool:null),m!==null?M1(i,m):Wh(),gv(i);else return i.lanes=i.childLanes=536870912,Dv(e,i,m!==null?m.baseLanes|o:o,o)}else m!==null?(Nc(i,m.cachePool),M1(i,m),va(),i.memoizedState=null):(e!==null&&Nc(i,null),Wh(),va());return cn(e,i,d,o),i.child}function Dv(e,i,o,l){var d=Fh();return d=d===null?null:{parent:Qe._currentValue,pool:d},i.memoizedState={baseLanes:o,cachePool:d},e!==null&&Nc(i,null),Wh(),gv(i),e!==null&&Cl(e,i,l,!0),null}function Jc(e,i){var o=i.ref;if(o===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(e===null||e.ref!==o)&&(i.flags|=4194816)}}function xp(e,i,o,l,d){return us(i),o=ep(e,i,o,l,void 0,d),l=np(),e!==null&&!tn?(ip(e,i,d),Xr(e,i,d)):(Qt&&l&&Vh(i),i.flags|=1,cn(e,i,o,d),i.child)}function Ov(e,i,o,l,d,m){return us(i),i.updateQueue=null,o=D1(i,l,o,d),R1(e),l=np(),e!==null&&!tn?(ip(e,i,m),Xr(e,i,m)):(Qt&&l&&Vh(i),i.flags|=1,cn(e,i,o,m),i.child)}function jv(e,i,o,l,d){if(us(i),i.stateNode===null){var m=eo,b=o.contextType;typeof b=="object"&&b!==null&&(m=vn(b)),m=new o(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=yp,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Kh(i),b=o.contextType,m.context=typeof b=="object"&&b!==null?vn(b):eo,m.state=i.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(gp(i,o,b,l),m.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&yp.enqueueReplaceState(m,m.state,null),kl(i,l,m,d),zl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var E=i.memoizedProps,O=ds(o,E);m.props=O;var H=m.context,Q=o.contextType;b=eo,typeof Q=="object"&&Q!==null&&(b=vn(Q));var W=o.getDerivedStateFromProps;Q=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E||H!==b)&&vv(i,m,l,b),ha=!1;var G=i.memoizedState;m.state=G,kl(i,l,m,d),zl(),H=i.memoizedState,E||G!==H||ha?(typeof W=="function"&&(gp(i,o,W,l),H=i.memoizedState),(O=ha||yv(i,o,O,l,G,H,b))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),m.props=l,m.state=H,m.context=b,l=O):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Zh(e,i),b=i.memoizedProps,Q=ds(o,b),m.props=Q,W=i.pendingProps,G=m.context,H=o.contextType,O=eo,typeof H=="object"&&H!==null&&(O=vn(H)),E=o.getDerivedStateFromProps,(H=typeof E=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==W||G!==O)&&vv(i,m,l,O),ha=!1,G=i.memoizedState,m.state=G,kl(i,l,m,d),zl();var q=i.memoizedState;b!==W||G!==q||ha||e!==null&&e.dependencies!==null&&kc(e.dependencies)?(typeof E=="function"&&(gp(i,o,E,l),q=i.memoizedState),(Q=ha||yv(i,o,Q,l,G,q,O)||e!==null&&e.dependencies!==null&&kc(e.dependencies))?(H||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,q,O),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,q,O)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&G===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&G===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),m.props=l,m.state=q,m.context=O,l=Q):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&G===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&G===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,Jc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,o=l&&typeof o.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=fo(i,e.child,null,d),i.child=fo(i,null,o,d)):cn(e,i,o,d),i.memoizedState=m.state,e=i.child):e=Xr(e,i,d),e}function zv(e,i,o,l){return El(),i.flags|=256,cn(e,i,o,l),i.child}var bp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _p(e){return{baseLanes:e,cachePool:b1()}}function wp(e,i,o){return e=e!==null?e.childLanes&~o:0,i&&(e|=Pi),e}function kv(e,i,o){var l=i.pendingProps,d=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),b&&(d=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(Qt){if(d?ya(i):va(),Qt){var E=De,O;if(O=E){t:{for(O=E,E=lr;O.nodeType!==8;){if(!E){E=null;break t}if(O=nr(O.nextSibling),O===null){E=null;break t}}E=O}E!==null?(i.memoizedState={dehydrated:E,treeContext:rs!==null?{id:Vr,overflow:Br}:null,retryLane:536870912,hydrationErrors:null},O=li(18,null,null,0),O.stateNode=E,O.return=i,i.child=O,jn=i,De=null,O=!0):O=!1}O||os(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return am(E)?i.lanes=32:i.lanes=536870912,null;Gr(i)}return E=l.children,l=l.fallback,d?(va(),d=i.mode,E=tf({mode:"hidden",children:E},d),l=is(l,d,o,null),E.return=i,l.return=i,E.sibling=l,i.child=E,d=i.child,d.memoizedState=_p(o),d.childLanes=wp(e,b,o),i.memoizedState=bp,l):(ya(i),Sp(i,E))}if(O=e.memoizedState,O!==null&&(E=O.dehydrated,E!==null)){if(m)i.flags&256?(ya(i),i.flags&=-257,i=Tp(e,i,o)):i.memoizedState!==null?(va(),i.child=e.child,i.flags|=128,i=null):(va(),d=l.fallback,E=i.mode,l=tf({mode:"visible",children:l.children},E),d=is(d,E,o,null),d.flags|=2,l.return=i,d.return=i,l.sibling=d,i.child=l,fo(i,e.child,null,o),l=i.child,l.memoizedState=_p(o),l.childLanes=wp(e,b,o),i.memoizedState=bp,i=d);else if(ya(i),am(E)){if(b=E.nextSibling&&E.nextSibling.dataset,b)var H=b.dgst;b=H,l=Error(a(419)),l.stack="",l.digest=b,Al({value:l,source:null,stack:null}),i=Tp(e,i,o)}else if(tn||Cl(e,i,o,!1),b=(o&e.childLanes)!==0,tn||b){if(b=de,b!==null&&(l=o&-o,l=(l&42)!==0?1:ri(l),l=(l&(b.suspendedLanes|o))!==0?0:l,l!==0&&l!==O.retryLane))throw O.retryLane=l,to(e,l),hi(b,e,l),Ev;E.data==="$?"||Yp(),i=Tp(e,i,o)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=O.treeContext,De=nr(E.nextSibling),jn=i,Qt=!0,ss=null,lr=!1,e!==null&&(ki[Li++]=Vr,ki[Li++]=Br,ki[Li++]=rs,Vr=e.id,Br=e.overflow,rs=i),i=Sp(i,l.children),i.flags|=4096);return i}return d?(va(),d=l.fallback,E=i.mode,O=e.child,H=O.sibling,l=Pr(O,{mode:"hidden",children:l.children}),l.subtreeFlags=O.subtreeFlags&65011712,H!==null?d=Pr(H,d):(d=is(d,E,o,null),d.flags|=2),d.return=i,l.return=i,l.sibling=d,i.child=l,l=d,d=i.child,E=e.child.memoizedState,E===null?E=_p(o):(O=E.cachePool,O!==null?(H=Qe._currentValue,O=O.parent!==H?{parent:H,pool:H}:O):O=b1(),E={baseLanes:E.baseLanes|o,cachePool:O}),d.memoizedState=E,d.childLanes=wp(e,b,o),i.memoizedState=bp,l):(ya(i),o=e.child,e=o.sibling,o=Pr(o,{mode:"visible",children:l.children}),o.return=i,o.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=o,i.memoizedState=null,o)}function Sp(e,i){return i=tf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function tf(e,i){return e=li(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Tp(e,i,o){return fo(i,e.child,null,o),e=Sp(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Lv(e,i,o){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Yh(e.return,i,o)}function Ep(e,i,o,l,d){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=o,m.tailMode=d)}function Nv(e,i,o){var l=i.pendingProps,d=l.revealOrder,m=l.tail;if(cn(e,i,l.children,o),l=Ie.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lv(e,o,i);else if(e.tag===19)Lv(e,o,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(it(Ie,l),d){case"forwards":for(o=i.child,d=null;o!==null;)e=o.alternate,e!==null&&Qc(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Ep(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(e=d.alternate,e!==null&&Qc(e)===null){i.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}Ep(i,!0,o,null,m);break;case"together":Ep(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xr(e,i,o){if(e!==null&&(i.dependencies=e.dependencies),Sa|=i.lanes,(o&i.childLanes)===0)if(e!==null){if(Cl(e,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,o=Pr(e,e.pendingProps),i.child=o,o.return=i;e.sibling!==null;)e=e.sibling,o=o.sibling=Pr(e,e.pendingProps),o.return=i;o.sibling=null}return i.child}function Ap(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&kc(e)))}function IE(e,i,o){switch(i.tag){case 3:Et(i,i.stateNode.containerInfo),da(i,Qe,e.memoizedState.cache),El();break;case 27:case 5:gn(i);break;case 4:Et(i,i.stateNode.containerInfo);break;case 10:da(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ya(i),i.flags|=128,null):(o&i.child.childLanes)!==0?kv(e,i,o):(ya(i),e=Xr(e,i,o),e!==null?e.sibling:null);ya(i);break;case 19:var d=(e.flags&128)!==0;if(l=(o&i.childLanes)!==0,l||(Cl(e,i,o,!1),l=(o&i.childLanes)!==0),d){if(l)return Nv(e,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),it(Ie,Ie.current),l)break;return null;case 22:case 23:return i.lanes=0,Rv(e,i,o);case 24:da(i,Qe,e.memoizedState.cache)}return Xr(e,i,o)}function Pv(e,i,o){if(e!==null)if(e.memoizedProps!==i.pendingProps)tn=!0;else{if(!Ap(e,o)&&(i.flags&128)===0)return tn=!1,IE(e,i,o);tn=(e.flags&131072)!==0}else tn=!1,Qt&&(i.flags&1048576)!==0&&h1(i,zc,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,d=l._init;if(l=d(l._payload),i.type=l,typeof l=="function")Lh(l)?(e=ds(l,e),i.tag=1,i=jv(null,i,l,e,o)):(i.tag=0,i=xp(null,i,l,e,o));else{if(l!=null){if(d=l.$$typeof,d===j){i.tag=11,i=Av(null,i,l,e,o);break t}else if(d===z){i.tag=14,i=Cv(null,i,l,e,o);break t}}throw i=pt(l)||l,Error(a(306,i,""))}}return i;case 0:return xp(e,i,i.type,i.pendingProps,o);case 1:return l=i.type,d=ds(l,i.pendingProps),jv(e,i,l,d,o);case 3:t:{if(Et(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;d=m.element,Zh(e,i),kl(i,l,null,o);var b=i.memoizedState;if(l=b.cache,da(i,Qe,l),l!==m.cache&&Gh(i,[Qe],o,!0),zl(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=zv(e,i,l,o);break t}else if(l!==d){d=ji(Error(a(424)),i),Al(d),i=zv(e,i,l,o);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=nr(e.firstChild),jn=i,Qt=!0,ss=null,lr=!0,o=mv(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(El(),l===d){i=Xr(e,i,o);break t}cn(e,i,l,o)}i=i.child}return i;case 26:return Jc(e,i),e===null?(o=Hx(i.type,null,i.pendingProps,null))?i.memoizedState=o:Qt||(o=i.type,e=i.pendingProps,l=mf(st.current).createElement(o),l[nt]=i,l[dt]=e,dn(l,o,e),$t(l),i.stateNode=l):i.memoizedState=Hx(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return gn(i),e===null&&Qt&&(l=i.stateNode=Vx(i.type,i.pendingProps,st.current),jn=i,lr=!0,d=De,Ca(i.type)?(sm=d,De=nr(l.firstChild)):De=d),cn(e,i,i.pendingProps.children,o),Jc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Qt&&((d=l=De)&&(l=EA(l,i.type,i.pendingProps,lr),l!==null?(i.stateNode=l,jn=i,De=nr(l.firstChild),lr=!1,d=!0):d=!1),d||os(i)),gn(i),d=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,l=m.children,nm(d,m)?l=null:b!==null&&nm(d,b)&&(i.flags|=32),i.memoizedState!==null&&(d=ep(e,i,GE,null,null,o),nu._currentValue=d),Jc(e,i),cn(e,i,l,o),i.child;case 6:return e===null&&Qt&&((e=o=De)&&(o=AA(o,i.pendingProps,lr),o!==null?(i.stateNode=o,jn=i,De=null,e=!0):e=!1),e||os(i)),null;case 13:return kv(e,i,o);case 4:return Et(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=fo(i,null,l,o):cn(e,i,l,o),i.child;case 11:return Av(e,i,i.type,i.pendingProps,o);case 7:return cn(e,i,i.pendingProps,o),i.child;case 8:return cn(e,i,i.pendingProps.children,o),i.child;case 12:return cn(e,i,i.pendingProps.children,o),i.child;case 10:return l=i.pendingProps,da(i,i.type,l.value),cn(e,i,l.children,o),i.child;case 9:return d=i.type._context,l=i.pendingProps.children,us(i),d=vn(d),l=l(d),i.flags|=1,cn(e,i,l,o),i.child;case 14:return Cv(e,i,i.type,i.pendingProps,o);case 15:return Mv(e,i,i.type,i.pendingProps,o);case 19:return Nv(e,i,o);case 31:return l=i.pendingProps,o=i.mode,l={mode:l.mode,children:l.children},e===null?(o=tf(l,o),o.ref=i.ref,i.child=o,o.return=i,i=o):(o=Pr(e.child,l),o.ref=i.ref,i.child=o,o.return=i,i=o),i;case 22:return Rv(e,i,o);case 24:return us(i),l=vn(Qe),e===null?(d=Fh(),d===null&&(d=de,m=Xh(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),i.memoizedState={parent:l,cache:d},Kh(i),da(i,Qe,d)):((e.lanes&o)!==0&&(Zh(e,i),kl(i,null,null,o),zl()),d=e.memoizedState,m=i.memoizedState,d.parent!==l?(d={parent:l,cache:l},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),da(i,Qe,l)):(l=m.cache,da(i,Qe,l),l!==d.cache&&Gh(i,[Qe],o,!0))),cn(e,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function qr(e){e.flags|=4}function Vv(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fx(i)){if(i=Ni.current,i!==null&&((qt&4194048)===qt?ur!==null:(qt&62914560)!==qt&&(qt&536870912)===0||i!==ur))throw Ol=$h,_1;e.flags|=8192}}function ef(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?sr():536870912,e.lanes|=i,go|=i)}function Hl(e,i){if(!Qt)switch(e.tailMode){case"hidden":i=e.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function we(e){var i=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(i)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=o,i}function WE(e,i,o){var l=i.pendingProps;switch(Bh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(i),null;case 1:return we(i),null;case 3:return o=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Hr(Qe),Ft(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Tl(i)?qr(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,g1())),we(i),null;case 26:return o=i.memoizedState,e===null?(qr(i),o!==null?(we(i),Vv(i,o)):(we(i),i.flags&=-16777217)):o?o!==e.memoizedState?(qr(i),we(i),Vv(i,o)):(we(i),i.flags&=-16777217):(e.memoizedProps!==l&&qr(i),we(i),i.flags&=-16777217),null;case 27:pe(i),o=st.current;var d=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&qr(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return we(i),null}e=rt.current,Tl(i)?p1(i):(e=Vx(d,l,o),i.stateNode=e,qr(i))}return we(i),null;case 5:if(pe(i),o=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&qr(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return we(i),null}if(e=rt.current,Tl(i))p1(i);else{switch(d=mf(st.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?d.createElement(o,{is:l.is}):d.createElement(o)}}e[nt]=i,e[dt]=l;t:for(d=i.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===i)break t;for(;d.sibling===null;){if(d.return===null||d.return===i)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}i.stateNode=e;t:switch(dn(e,o,l),o){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qr(i)}}return we(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&qr(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=st.current,Tl(i)){if(e=i.stateNode,o=i.memoizedProps,l=null,d=jn,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}e[nt]=i,e=!!(e.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||Ox(e.nodeValue,o)),e||os(i)}else e=mf(e).createTextNode(l),e[nt]=i,i.stateNode=e}return we(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Tl(i),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[nt]=i}else El(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;we(i),d=!1}else d=g1(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(Gr(i),i):(Gr(i),null)}if(Gr(i),(i.flags&128)!==0)return i.lanes=o,i;if(o=l!==null,e=e!==null&&e.memoizedState!==null,o){l=i.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)}return o!==e&&o&&(i.child.flags|=8192),ef(i,i.updateQueue),we(i),null;case 4:return Ft(),e===null&&Ip(i.stateNode.containerInfo),we(i),null;case 10:return Hr(i.type),we(i),null;case 19:if(et(Ie),d=i.memoizedState,d===null)return we(i),null;if(l=(i.flags&128)!==0,m=d.rendering,m===null)if(l)Hl(d,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Qc(e),m!==null){for(i.flags|=128,Hl(d,!1),e=m.updateQueue,i.updateQueue=e,ef(i,e),i.subtreeFlags=0,e=o,o=i.child;o!==null;)d1(o,e),o=o.sibling;return it(Ie,Ie.current&1|2),i.child}e=e.sibling}d.tail!==null&&F()>af&&(i.flags|=128,l=!0,Hl(d,!1),i.lanes=4194304)}else{if(!l)if(e=Qc(m),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,ef(i,e),Hl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Qt)return we(i),null}else 2*F()-d.renderingStartTime>af&&o!==536870912&&(i.flags|=128,l=!0,Hl(d,!1),i.lanes=4194304);d.isBackwards?(m.sibling=i.child,i.child=m):(e=d.last,e!==null?e.sibling=m:i.child=m,d.last=m)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=F(),i.sibling=null,e=Ie.current,it(Ie,l?e&1|2:e&1),i):(we(i),null);case 22:case 23:return Gr(i),Jh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(o&536870912)!==0&&(i.flags&128)===0&&(we(i),i.subtreeFlags&6&&(i.flags|=8192)):we(i),o=i.updateQueue,o!==null&&ef(i,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==o&&(i.flags|=2048),e!==null&&et(cs),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Hr(Qe),we(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function JE(e,i){switch(Bh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Hr(Qe),Ft(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return pe(i),null;case 13:if(Gr(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));El()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(Ie),null;case 4:return Ft(),null;case 10:return Hr(i.type),null;case 22:case 23:return Gr(i),Jh(),e!==null&&et(cs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Hr(Qe),null;case 25:return null;default:return null}}function Bv(e,i){switch(Bh(i),i.tag){case 3:Hr(Qe),Ft();break;case 26:case 27:case 5:pe(i);break;case 4:Ft();break;case 13:Gr(i);break;case 19:et(Ie);break;case 10:Hr(i.type);break;case 22:case 23:Gr(i),Jh(),e!==null&&et(cs);break;case 24:Hr(Qe)}}function Yl(e,i){try{var o=i.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var d=l.next;o=d;do{if((o.tag&e)===e){l=void 0;var m=o.create,b=o.inst;l=m(),b.destroy=l}o=o.next}while(o!==d)}}catch(E){le(i,i.return,E)}}function xa(e,i,o){try{var l=i.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&e)===e){var b=l.inst,E=b.destroy;if(E!==void 0){b.destroy=void 0,d=i;var O=o,H=E;try{H()}catch(Q){le(d,O,Q)}}}l=l.next}while(l!==m)}}catch(Q){le(i,i.return,Q)}}function Uv(e){var i=e.updateQueue;if(i!==null){var o=e.stateNode;try{C1(i,o)}catch(l){le(e,e.return,l)}}}function Hv(e,i,o){o.props=ds(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(l){le(e,i,l)}}function Gl(e,i){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof o=="function"?e.refCleanup=o(l):o.current=l}}catch(d){le(e,i,d)}}function cr(e,i){var o=e.ref,l=e.refCleanup;if(o!==null)if(typeof l=="function")try{l()}catch(d){le(e,i,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){le(e,i,d)}else o.current=null}function Yv(e){var i=e.type,o=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&l.focus();break t;case"img":o.src?l.src=o.src:o.srcSet&&(l.srcset=o.srcSet)}}catch(d){le(e,e.return,d)}}function Cp(e,i,o){try{var l=e.stateNode;bA(l,e.type,o,i),l[dt]=i}catch(d){le(e,e.return,d)}}function Gv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function Mp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Gv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rp(e,i,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(e),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=pf));else if(l!==4&&(l===27&&Ca(e.type)&&(o=e.stateNode,i=null),e=e.child,e!==null))for(Rp(e,i,o),e=e.sibling;e!==null;)Rp(e,i,o),e=e.sibling}function nf(e,i,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?o.insertBefore(e,i):o.appendChild(e);else if(l!==4&&(l===27&&Ca(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(nf(e,i,o),e=e.sibling;e!==null;)nf(e,i,o),e=e.sibling}function Xv(e){var i=e.stateNode,o=e.memoizedProps;try{for(var l=e.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);dn(i,l,o),i[nt]=e,i[dt]=o}catch(m){le(e,e.return,m)}}var Fr=!1,Ne=!1,Dp=!1,qv=typeof WeakSet=="function"?WeakSet:Set,en=null;function tA(e,i){if(e=e.containerInfo,tm=_f,e=n1(e),Mh(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break t}var b=0,E=-1,O=-1,H=0,Q=0,W=e,G=null;e:for(;;){for(var q;W!==o||d!==0&&W.nodeType!==3||(E=b+d),W!==m||l!==0&&W.nodeType!==3||(O=b+l),W.nodeType===3&&(b+=W.nodeValue.length),(q=W.firstChild)!==null;)G=W,W=q;for(;;){if(W===e)break e;if(G===o&&++H===d&&(E=b),G===m&&++Q===l&&(O=b),(q=W.nextSibling)!==null)break;W=G,G=W.parentNode}W=q}o=E===-1||O===-1?null:{start:E,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(em={focusedElem:e,selectionRange:o},_f=!1,en=i;en!==null;)if(i=en,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,en=e;else for(;en!==null;){switch(i=en,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,o=i,d=m.memoizedProps,m=m.memoizedState,l=o.stateNode;try{var St=ds(o.type,d,o.elementType===o.type);e=l.getSnapshotBeforeUpdate(St,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(xt){le(o,o.return,xt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,o=e.nodeType,o===9)rm(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,en=e;break}en=i.return}}function Fv(e,i,o){var l=o.flags;switch(o.tag){case 0:case 11:case 15:ba(e,o),l&4&&Yl(5,o);break;case 1:if(ba(e,o),l&4)if(e=o.stateNode,i===null)try{e.componentDidMount()}catch(b){le(o,o.return,b)}else{var d=ds(o.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(d,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){le(o,o.return,b)}}l&64&&Uv(o),l&512&&Gl(o,o.return);break;case 3:if(ba(e,o),l&64&&(e=o.updateQueue,e!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{C1(e,i)}catch(b){le(o,o.return,b)}}break;case 27:i===null&&l&4&&Xv(o);case 26:case 5:ba(e,o),i===null&&l&4&&Yv(o),l&512&&Gl(o,o.return);break;case 12:ba(e,o);break;case 13:ba(e,o),l&4&&Zv(e,o),l&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=uA.bind(null,o),CA(e,o))));break;case 22:if(l=o.memoizedState!==null||Fr,!l){i=i!==null&&i.memoizedState!==null||Ne,d=Fr;var m=Ne;Fr=l,(Ne=i)&&!m?_a(e,o,(o.subtreeFlags&8772)!==0):ba(e,o),Fr=d,Ne=m}break;case 30:break;default:ba(e,o)}}function $v(e){var i=e.alternate;i!==null&&(e.alternate=null,$v(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&fe(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,$n=!1;function $r(e,i,o){for(o=o.child;o!==null;)Kv(e,i,o),o=o.sibling}function Kv(e,i,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Hn,o)}catch{}switch(o.tag){case 26:Ne||cr(o,i),$r(e,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ne||cr(o,i);var l=xe,d=$n;Ca(o.type)&&(xe=o.stateNode,$n=!1),$r(e,i,o),Wl(o.stateNode),xe=l,$n=d;break;case 5:Ne||cr(o,i);case 6:if(l=xe,d=$n,xe=null,$r(e,i,o),xe=l,$n=d,xe!==null)if($n)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(o.stateNode)}catch(m){le(o,i,m)}else try{xe.removeChild(o.stateNode)}catch(m){le(o,i,m)}break;case 18:xe!==null&&($n?(e=xe,Nx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),su(e)):Nx(xe,o.stateNode));break;case 4:l=xe,d=$n,xe=o.stateNode.containerInfo,$n=!0,$r(e,i,o),xe=l,$n=d;break;case 0:case 11:case 14:case 15:Ne||xa(2,o,i),Ne||xa(4,o,i),$r(e,i,o);break;case 1:Ne||(cr(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"&&Hv(o,i,l)),$r(e,i,o);break;case 21:$r(e,i,o);break;case 22:Ne=(l=Ne)||o.memoizedState!==null,$r(e,i,o),Ne=l;break;default:$r(e,i,o)}}function Zv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{su(e)}catch(o){le(i,i.return,o)}}function eA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new qv),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new qv),i;default:throw Error(a(435,e.tag))}}function Op(e,i){var o=eA(e);i.forEach(function(l){var d=cA.bind(null,e,l);o.has(l)||(o.add(l),l.then(d,d))})}function ui(e,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l],m=e,b=i,E=b;t:for(;E!==null;){switch(E.tag){case 27:if(Ca(E.type)){xe=E.stateNode,$n=!1;break t}break;case 5:xe=E.stateNode,$n=!1;break t;case 3:case 4:xe=E.stateNode.containerInfo,$n=!0;break t}E=E.return}if(xe===null)throw Error(a(160));Kv(m,b,d),xe=null,$n=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Qv(i,e),i=i.sibling}var er=null;function Qv(e,i){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ui(i,e),ci(e),l&4&&(xa(3,e,e.return),Yl(3,e),xa(5,e,e.return));break;case 1:ui(i,e),ci(e),l&512&&(Ne||o===null||cr(o,o.return)),l&64&&Fr&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?l:o.concat(l))));break;case 26:var d=er;if(ui(i,e),ci(e),l&512&&(Ne||o===null||cr(o,o.return)),l&4){var m=o!==null?o.memoizedState:null;if(l=e.memoizedState,o===null)if(l===null)if(e.stateNode===null){t:{l=e.type,o=e.memoizedProps,d=d.ownerDocument||d;e:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Re]||m[nt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),dn(m,l,o),m[nt]=e,$t(m),l=m;break t;case"link":var b=Xx("link","href",d).get(l+(o.href||""));if(b){for(var E=0;E<b.length;E++)if(m=b[E],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(E,1);break e}}m=d.createElement(l),dn(m,l,o),d.head.appendChild(m);break;case"meta":if(b=Xx("meta","content",d).get(l+(o.content||""))){for(E=0;E<b.length;E++)if(m=b[E],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(E,1);break e}}m=d.createElement(l),dn(m,l,o),d.head.appendChild(m);break;default:throw Error(a(468,l))}m[nt]=e,$t(m),l=m}e.stateNode=l}else qx(d,e.type,e.stateNode);else e.stateNode=Gx(d,l,e.memoizedProps);else m!==l?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,l===null?qx(d,e.type,e.stateNode):Gx(d,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Cp(e,e.memoizedProps,o.memoizedProps)}break;case 27:ui(i,e),ci(e),l&512&&(Ne||o===null||cr(o,o.return)),o!==null&&l&4&&Cp(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ui(i,e),ci(e),l&512&&(Ne||o===null||cr(o,o.return)),e.flags&32){d=e.stateNode;try{$s(d,"")}catch(q){le(e,e.return,q)}}l&4&&e.stateNode!=null&&(d=e.memoizedProps,Cp(e,d,o!==null?o.memoizedProps:d)),l&1024&&(Dp=!0);break;case 6:if(ui(i,e),ci(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,o=e.stateNode;try{o.nodeValue=l}catch(q){le(e,e.return,q)}}break;case 3:if(vf=null,d=er,er=gf(i.containerInfo),ui(i,e),er=d,ci(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{su(i.containerInfo)}catch(q){le(e,e.return,q)}Dp&&(Dp=!1,Iv(e));break;case 4:l=er,er=gf(e.stateNode.containerInfo),ui(i,e),ci(e),er=l;break;case 12:ui(i,e),ci(e);break;case 13:ui(i,e),ci(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Pp=F()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Op(e,l)));break;case 22:d=e.memoizedState!==null;var O=o!==null&&o.memoizedState!==null,H=Fr,Q=Ne;if(Fr=H||d,Ne=Q||O,ui(i,e),Ne=Q,Fr=H,ci(e),l&8192)t:for(i=e.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(o===null||O||Fr||Ne||hs(e)),o=null,i=e;;){if(i.tag===5||i.tag===26){if(o===null){O=o=i;try{if(m=O.stateNode,d)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{E=O.stateNode;var W=O.memoizedProps.style,G=W!=null&&W.hasOwnProperty("display")?W.display:null;E.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(q){le(O,O.return,q)}}}else if(i.tag===6){if(o===null){O=i;try{O.stateNode.nodeValue=d?"":O.memoizedProps}catch(q){le(O,O.return,q)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(o=l.retryQueue,o!==null&&(l.retryQueue=null,Op(e,o))));break;case 19:ui(i,e),ci(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Op(e,l)));break;case 30:break;case 21:break;default:ui(i,e),ci(e)}}function ci(e){var i=e.flags;if(i&2){try{for(var o,l=e.return;l!==null;){if(Gv(l)){o=l;break}l=l.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var d=o.stateNode,m=Mp(e);nf(e,m,d);break;case 5:var b=o.stateNode;o.flags&32&&($s(b,""),o.flags&=-33);var E=Mp(e);nf(e,E,b);break;case 3:case 4:var O=o.stateNode.containerInfo,H=Mp(e);Rp(e,H,O);break;default:throw Error(a(161))}}catch(Q){le(e,e.return,Q)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Iv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Iv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ba(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Fv(e,i.alternate,i),i=i.sibling}function hs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:xa(4,i,i.return),hs(i);break;case 1:cr(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&Hv(i,i.return,o),hs(i);break;case 27:Wl(i.stateNode);case 26:case 5:cr(i,i.return),hs(i);break;case 22:i.memoizedState===null&&hs(i);break;case 30:hs(i);break;default:hs(i)}e=e.sibling}}function _a(e,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,d=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:_a(d,m,o),Yl(4,m);break;case 1:if(_a(d,m,o),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){le(l,l.return,H)}if(l=m,d=l.updateQueue,d!==null){var E=l.stateNode;try{var O=d.shared.hiddenCallbacks;if(O!==null)for(d.shared.hiddenCallbacks=null,d=0;d<O.length;d++)A1(O[d],E)}catch(H){le(l,l.return,H)}}o&&b&64&&Uv(m),Gl(m,m.return);break;case 27:Xv(m);case 26:case 5:_a(d,m,o),o&&l===null&&b&4&&Yv(m),Gl(m,m.return);break;case 12:_a(d,m,o);break;case 13:_a(d,m,o),o&&b&4&&Zv(d,m);break;case 22:m.memoizedState===null&&_a(d,m,o),Gl(m,m.return);break;case 30:break;default:_a(d,m,o)}i=i.sibling}}function jp(e,i){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Ml(o))}function zp(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ml(e))}function fr(e,i,o,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Wv(e,i,o,l),i=i.sibling}function Wv(e,i,o,l){var d=i.flags;switch(i.tag){case 0:case 11:case 15:fr(e,i,o,l),d&2048&&Yl(9,i);break;case 1:fr(e,i,o,l);break;case 3:fr(e,i,o,l),d&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ml(e)));break;case 12:if(d&2048){fr(e,i,o,l),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,E=m.onPostCommit;typeof E=="function"&&E(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){le(i,i.return,O)}}else fr(e,i,o,l);break;case 13:fr(e,i,o,l);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?fr(e,i,o,l):Xl(e,i):m._visibility&2?fr(e,i,o,l):(m._visibility|=2,ho(e,i,o,l,(i.subtreeFlags&10256)!==0)),d&2048&&jp(b,i);break;case 24:fr(e,i,o,l),d&2048&&zp(i.alternate,i);break;default:fr(e,i,o,l)}}function ho(e,i,o,l,d){for(d=d&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,b=i,E=o,O=l,H=b.flags;switch(b.tag){case 0:case 11:case 15:ho(m,b,E,O,d),Yl(8,b);break;case 23:break;case 22:var Q=b.stateNode;b.memoizedState!==null?Q._visibility&2?ho(m,b,E,O,d):Xl(m,b):(Q._visibility|=2,ho(m,b,E,O,d)),d&&H&2048&&jp(b.alternate,b);break;case 24:ho(m,b,E,O,d),d&&H&2048&&zp(b.alternate,b);break;default:ho(m,b,E,O,d)}i=i.sibling}}function Xl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=e,l=i,d=l.flags;switch(l.tag){case 22:Xl(o,l),d&2048&&jp(l.alternate,l);break;case 24:Xl(o,l),d&2048&&zp(l.alternate,l);break;default:Xl(o,l)}i=i.sibling}}var ql=8192;function po(e){if(e.subtreeFlags&ql)for(e=e.child;e!==null;)Jv(e),e=e.sibling}function Jv(e){switch(e.tag){case 26:po(e),e.flags&ql&&e.memoizedState!==null&&UA(er,e.memoizedState,e.memoizedProps);break;case 5:po(e);break;case 3:case 4:var i=er;er=gf(e.stateNode.containerInfo),po(e),er=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ql,ql=16777216,po(e),ql=i):po(e));break;default:po(e)}}function tx(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Fl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var l=i[o];en=l,nx(l,e)}tx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ex(e),e=e.sibling}function ex(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&xa(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,rf(e)):Fl(e);break;default:Fl(e)}}function rf(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var l=i[o];en=l,nx(l,e)}tx(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:xa(8,i,i.return),rf(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,rf(i));break;default:rf(i)}e=e.sibling}}function nx(e,i){for(;en!==null;){var o=en;switch(o.tag){case 0:case 11:case 15:xa(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var l=o.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ml(o.memoizedState.cache)}if(l=o.child,l!==null)l.return=o,en=l;else t:for(o=e;en!==null;){l=en;var d=l.sibling,m=l.return;if($v(l),l===o){en=null;break t}if(d!==null){d.return=m,en=d;break t}en=m}}}var nA={getCacheForType:function(e){var i=vn(Qe),o=i.data.get(e);return o===void 0&&(o=e(),i.data.set(e,o)),o}},iA=typeof WeakMap=="function"?WeakMap:Map,te=0,de=null,Ut=null,qt=0,ee=0,fi=null,wa=!1,mo=!1,kp=!1,Kr=0,Oe=0,Sa=0,ps=0,Lp=0,Pi=0,go=0,$l=null,Kn=null,Np=!1,Pp=0,af=1/0,sf=null,Ta=null,fn=0,Ea=null,yo=null,vo=0,Vp=0,Bp=null,ix=null,Kl=0,Up=null;function di(){if((te&2)!==0&&qt!==0)return qt&-qt;if(Y.T!==null){var e=ro;return e!==0?e:$p()}return At()}function rx(){Pi===0&&(Pi=(qt&536870912)===0||Qt?Mt():536870912);var e=Ni.current;return e!==null&&(e.flags|=32),Pi}function hi(e,i,o){(e===de&&(ee===2||ee===9)||e.cancelPendingCommit!==null)&&(xo(e,0),Aa(e,qt,Pi,!1)),ln(e,o),((te&2)===0||e!==de)&&(e===de&&((te&2)===0&&(ps|=o),Oe===4&&Aa(e,qt,Pi,!1)),dr(e))}function ax(e,i,o){if((te&6)!==0)throw Error(a(327));var l=!o&&(i&124)===0&&(i&e.expiredLanes)===0||Xn(e,i),d=l?sA(e,i):Gp(e,i,!0),m=l;do{if(d===0){mo&&!l&&Aa(e,i,0,!1);break}else{if(o=e.current.alternate,m&&!rA(o)){d=Gp(e,i,!1),m=!1;continue}if(d===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var E=e;d=$l;var O=E.current.memoizedState.isDehydrated;if(O&&(xo(E,b).flags|=256),b=Gp(E,b,!1),b!==2){if(kp&&!O){E.errorRecoveryDisabledLanes|=m,ps|=m,d=4;break t}m=Kn,Kn=d,m!==null&&(Kn===null?Kn=m:Kn.push.apply(Kn,m))}d=b}if(m=!1,d!==2)continue}}if(d===1){xo(e,0),Aa(e,i,0,!0);break}t:{switch(l=e,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Aa(l,i,Pi,!wa);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=Pp+300-F(),10<d)){if(Aa(l,i,Pi,!wa),Ji(l,0,!0)!==0)break t;l.timeoutHandle=kx(sx.bind(null,l,o,Kn,sf,Np,i,Pi,ps,go,wa,m,2,-0,0),d);break t}sx(l,o,Kn,sf,Np,i,Pi,ps,go,wa,m,0,-0,0)}}break}while(!0);dr(e)}function sx(e,i,o,l,d,m,b,E,O,H,Q,W,G,q){if(e.timeoutHandle=-1,W=i.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(eu={stylesheets:null,count:0,unsuspend:BA},Jv(i),W=HA(),W!==null)){e.cancelPendingCommit=W(hx.bind(null,e,i,m,o,l,d,b,E,O,Q,1,G,q)),Aa(e,m,b,!H);return}hx(e,i,m,o,l,d,b,E,O)}function rA(e){for(var i=e;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var d=o[l],m=d.getSnapshot;d=d.value;try{if(!oi(m(),d))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Aa(e,i,o,l){i&=~Lp,i&=~ps,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var d=i;0<d;){var m=31-ce(d),b=1<<m;l[m]=-1,d&=~b}o!==0&&or(e,o,i)}function of(){return(te&6)===0?(Zl(0),!1):!0}function Hp(){if(Ut!==null){if(ee===0)var e=Ut.return;else e=Ut,Ur=ls=null,rp(e),co=null,Bl=0,e=Ut;for(;e!==null;)Bv(e.alternate,e),e=e.return;Ut=null}}function xo(e,i){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,wA(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Hp(),de=e,Ut=o=Pr(e.current,null),qt=i,ee=0,fi=null,wa=!1,mo=Xn(e,i),kp=!1,go=Pi=Lp=ps=Sa=Oe=0,Kn=$l=null,Np=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var d=31-ce(l),m=1<<d;i|=e[d],l&=~m}return Kr=i,Mc(),o}function ox(e,i){jt=null,Y.H=$c,i===Dl||i===Pc?(i=T1(),ee=3):i===_1?(i=T1(),ee=4):ee=i===Ev?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,Ut===null&&(Oe=1,Wc(e,ji(i,e.current)))}function lx(){var e=Y.H;return Y.H=$c,e===null?$c:e}function ux(){var e=Y.A;return Y.A=nA,e}function Yp(){Oe=4,wa||(qt&4194048)!==qt&&Ni.current!==null||(mo=!0),(Sa&134217727)===0&&(ps&134217727)===0||de===null||Aa(de,qt,Pi,!1)}function Gp(e,i,o){var l=te;te|=2;var d=lx(),m=ux();(de!==e||qt!==i)&&(sf=null,xo(e,i)),i=!1;var b=Oe;t:do try{if(ee!==0&&Ut!==null){var E=Ut,O=fi;switch(ee){case 8:Hp(),b=6;break t;case 3:case 2:case 9:case 6:Ni.current===null&&(i=!0);var H=ee;if(ee=0,fi=null,bo(e,E,O,H),o&&mo){b=0;break t}break;default:H=ee,ee=0,fi=null,bo(e,E,O,H)}}aA(),b=Oe;break}catch(Q){ox(e,Q)}while(!0);return i&&e.shellSuspendCounter++,Ur=ls=null,te=l,Y.H=d,Y.A=m,Ut===null&&(de=null,qt=0,Mc()),b}function aA(){for(;Ut!==null;)cx(Ut)}function sA(e,i){var o=te;te|=2;var l=lx(),d=ux();de!==e||qt!==i?(sf=null,af=F()+500,xo(e,i)):mo=Xn(e,i);t:do try{if(ee!==0&&Ut!==null){i=Ut;var m=fi;e:switch(ee){case 1:ee=0,fi=null,bo(e,i,m,1);break;case 2:case 9:if(w1(m)){ee=0,fi=null,fx(i);break}i=function(){ee!==2&&ee!==9||de!==e||(ee=7),dr(e)},m.then(i,i);break t;case 3:ee=7;break t;case 4:ee=5;break t;case 7:w1(m)?(ee=0,fi=null,fx(i)):(ee=0,fi=null,bo(e,i,m,7));break;case 5:var b=null;switch(Ut.tag){case 26:b=Ut.memoizedState;case 5:case 27:var E=Ut;if(!b||Fx(b)){ee=0,fi=null;var O=E.sibling;if(O!==null)Ut=O;else{var H=E.return;H!==null?(Ut=H,lf(H)):Ut=null}break e}}ee=0,fi=null,bo(e,i,m,5);break;case 6:ee=0,fi=null,bo(e,i,m,6);break;case 8:Hp(),Oe=6;break t;default:throw Error(a(462))}}oA();break}catch(Q){ox(e,Q)}while(!0);return Ur=ls=null,Y.H=l,Y.A=d,te=o,Ut!==null?0:(de=null,qt=0,Mc(),Oe)}function oA(){for(;Ut!==null&&!yn();)cx(Ut)}function cx(e){var i=Pv(e.alternate,e,Kr);e.memoizedProps=e.pendingProps,i===null?lf(e):Ut=i}function fx(e){var i=e,o=i.alternate;switch(i.tag){case 15:case 0:i=Ov(o,i,i.pendingProps,i.type,void 0,qt);break;case 11:i=Ov(o,i,i.pendingProps,i.type.render,i.ref,qt);break;case 5:rp(i);default:Bv(o,i),i=Ut=d1(i,Kr),i=Pv(o,i,Kr)}e.memoizedProps=e.pendingProps,i===null?lf(e):Ut=i}function bo(e,i,o,l){Ur=ls=null,rp(i),co=null,Bl=0;var d=i.return;try{if(QE(e,d,i,o,qt)){Oe=1,Wc(e,ji(o,e.current)),Ut=null;return}}catch(m){if(d!==null)throw Ut=d,m;Oe=1,Wc(e,ji(o,e.current)),Ut=null;return}i.flags&32768?(Qt||l===1?e=!0:mo||(qt&536870912)!==0?e=!1:(wa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ni.current,l!==null&&l.tag===13&&(l.flags|=16384))),dx(i,e)):lf(i)}function lf(e){var i=e;do{if((i.flags&32768)!==0){dx(i,wa);return}e=i.return;var o=WE(i.alternate,i,Kr);if(o!==null){Ut=o;return}if(i=i.sibling,i!==null){Ut=i;return}Ut=i=e}while(i!==null);Oe===0&&(Oe=5)}function dx(e,i){do{var o=JE(e.alternate,e);if(o!==null){o.flags&=32767,Ut=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(e=e.sibling,e!==null)){Ut=e;return}Ut=e=o}while(e!==null);Oe=6,Ut=null}function hx(e,i,o,l,d,m,b,E,O){e.cancelPendingCommit=null;do uf();while(fn!==0);if((te&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=zh,ii(e,o,m,b,E,O),e===de&&(Ut=de=null,qt=0),yo=i,Ea=e,vo=o,Vp=m,Bp=d,ix=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fA(oe,function(){return vx(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,d=$.p,$.p=2,b=te,te|=4;try{tA(e,i,o)}finally{te=b,$.p=d,Y.T=l}}fn=1,px(),mx(),gx()}}function px(){if(fn===1){fn=0;var e=Ea,i=yo,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var l=$.p;$.p=2;var d=te;te|=4;try{Qv(i,e);var m=em,b=n1(e.containerInfo),E=m.focusedElem,O=m.selectionRange;if(b!==E&&E&&E.ownerDocument&&e1(E.ownerDocument.documentElement,E)){if(O!==null&&Mh(E)){var H=O.start,Q=O.end;if(Q===void 0&&(Q=H),"selectionStart"in E)E.selectionStart=H,E.selectionEnd=Math.min(Q,E.value.length);else{var W=E.ownerDocument||document,G=W&&W.defaultView||window;if(G.getSelection){var q=G.getSelection(),St=E.textContent.length,xt=Math.min(O.start,St),se=O.end===void 0?xt:Math.min(O.end,St);!q.extend&&xt>se&&(b=se,se=xt,xt=b);var V=t1(E,xt),L=t1(E,se);if(V&&L&&(q.rangeCount!==1||q.anchorNode!==V.node||q.anchorOffset!==V.offset||q.focusNode!==L.node||q.focusOffset!==L.offset)){var U=W.createRange();U.setStart(V.node,V.offset),q.removeAllRanges(),xt>se?(q.addRange(U),q.extend(L.node,L.offset)):(U.setEnd(L.node,L.offset),q.addRange(U))}}}}for(W=[],q=E;q=q.parentNode;)q.nodeType===1&&W.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<W.length;E++){var I=W[E];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}_f=!!tm,em=tm=null}finally{te=d,$.p=l,Y.T=o}}e.current=i,fn=2}}function mx(){if(fn===2){fn=0;var e=Ea,i=yo,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var l=$.p;$.p=2;var d=te;te|=4;try{Fv(e,i.alternate,i)}finally{te=d,$.p=l,Y.T=o}}fn=3}}function gx(){if(fn===4||fn===3){fn=0,Mn();var e=Ea,i=yo,o=vo,l=ix;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?fn=5:(fn=0,yo=Ea=null,yx(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(Ta=null),zr(o),i=i.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Hn,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Y.T,d=$.p,$.p=2,Y.T=null;try{for(var m=e.onRecoverableError,b=0;b<l.length;b++){var E=l[b];m(E.value,{componentStack:E.stack})}}finally{Y.T=i,$.p=d}}(vo&3)!==0&&uf(),dr(e),d=e.pendingLanes,(o&4194090)!==0&&(d&42)!==0?e===Up?Kl++:(Kl=0,Up=e):Kl=0,Zl(0)}}function yx(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ml(i)))}function uf(e){return px(),mx(),gx(),vx()}function vx(){if(fn!==5)return!1;var e=Ea,i=Vp;Vp=0;var o=zr(vo),l=Y.T,d=$.p;try{$.p=32>o?32:o,Y.T=null,o=Bp,Bp=null;var m=Ea,b=vo;if(fn=0,yo=Ea=null,vo=0,(te&6)!==0)throw Error(a(331));var E=te;if(te|=4,ex(m.current),Wv(m,m.current,b,o),te=E,Zl(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Hn,m)}catch{}return!0}finally{$.p=d,Y.T=l,yx(e,i)}}function xx(e,i,o){i=ji(o,i),i=vp(e.stateNode,i,2),e=ma(e,i,2),e!==null&&(ln(e,2),dr(e))}function le(e,i,o){if(e.tag===3)xx(e,e,o);else for(;i!==null;){if(i.tag===3){xx(i,e,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ta===null||!Ta.has(l))){e=ji(o,e),o=Sv(2),l=ma(i,o,2),l!==null&&(Tv(o,l,i,e),ln(l,2),dr(l));break}}i=i.return}}function Xp(e,i,o){var l=e.pingCache;if(l===null){l=e.pingCache=new iA;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(kp=!0,d.add(o),e=lA.bind(null,e,i,o),i.then(e,e))}function lA(e,i,o){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,de===e&&(qt&o)===o&&(Oe===4||Oe===3&&(qt&62914560)===qt&&300>F()-Pp?(te&2)===0&&xo(e,0):Lp|=o,go===qt&&(go=0)),dr(e)}function bx(e,i){i===0&&(i=sr()),e=to(e,i),e!==null&&(ln(e,i),dr(e))}function uA(e){var i=e.memoizedState,o=0;i!==null&&(o=i.retryLane),bx(e,o)}function cA(e,i){var o=0;switch(e.tag){case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),bx(e,o)}function fA(e,i){return Vt(e,i)}var cf=null,_o=null,qp=!1,ff=!1,Fp=!1,ms=0;function dr(e){e!==_o&&e.next===null&&(_o===null?cf=_o=e:_o=_o.next=e),ff=!0,qp||(qp=!0,hA())}function Zl(e,i){if(!Fp&&ff){Fp=!0;do for(var o=!1,l=cf;l!==null;){if(e!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var b=l.suspendedLanes,E=l.pingedLanes;m=(1<<31-ce(42|e)+1)-1,m&=d&~(b&~E),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Tx(l,m))}else m=qt,m=Ji(l,l===de?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Xn(l,m)||(o=!0,Tx(l,m));l=l.next}while(o);Fp=!1}}function dA(){_x()}function _x(){ff=qp=!1;var e=0;ms!==0&&(_A()&&(e=ms),ms=0);for(var i=F(),o=null,l=cf;l!==null;){var d=l.next,m=wx(l,i);m===0?(l.next=null,o===null?cf=d:o.next=d,d===null&&(_o=o)):(o=l,(e!==0||(m&3)!==0)&&(ff=!0)),l=d}Zl(e)}function wx(e,i){for(var o=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-ce(m),E=1<<b,O=d[b];O===-1?((E&o)===0||(E&l)!==0)&&(d[b]=Or(E,i)):O<=i&&(e.expiredLanes|=E),m&=~E}if(i=de,o=qt,o=Ji(e,e===i?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,o===0||e===i&&(ee===2||ee===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&me(l),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Xn(e,o)){if(i=o&-o,i===e.callbackPriority)return i;switch(l!==null&&me(l),zr(o)){case 2:case 8:o=Zi;break;case 32:o=oe;break;case 268435456:o=Ii;break;default:o=oe}return l=Sx.bind(null,e),o=Vt(o,l),e.callbackPriority=i,e.callbackNode=o,i}return l!==null&&l!==null&&me(l),e.callbackPriority=2,e.callbackNode=null,2}function Sx(e,i){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(uf()&&e.callbackNode!==o)return null;var l=qt;return l=Ji(e,e===de?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ax(e,l,i),wx(e,F()),e.callbackNode!=null&&e.callbackNode===o?Sx.bind(null,e):null)}function Tx(e,i){if(uf())return null;ax(e,i,!0)}function hA(){SA(function(){(te&6)!==0?Vt(Ai,dA):_x()})}function $p(){return ms===0&&(ms=Mt()),ms}function Ex(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_c(""+e)}function Ax(e,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,e.id&&o.setAttribute("form",e.id),i.parentNode.insertBefore(o,i),e=new FormData(e),o.parentNode.removeChild(o),e}function pA(e,i,o,l,d){if(i==="submit"&&o&&o.stateNode===d){var m=Ex((d[dt]||null).action),b=l.submitter;b&&(i=(i=b[dt]||null)?Ex(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var E=new Ec("action","action",null,l,d);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ms!==0){var O=b?Ax(d,b):new FormData(d);hp(o,{pending:!0,data:O,method:d.method,action:m},null,O)}}else typeof m=="function"&&(E.preventDefault(),O=b?Ax(d,b):new FormData(d),hp(o,{pending:!0,data:O,method:d.method,action:m},m,O))},currentTarget:d}]})}}for(var Kp=0;Kp<jh.length;Kp++){var Zp=jh[Kp],mA=Zp.toLowerCase(),gA=Zp[0].toUpperCase()+Zp.slice(1);tr(mA,"on"+gA)}tr(a1,"onAnimationEnd"),tr(s1,"onAnimationIteration"),tr(o1,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(zE,"onTransitionRun"),tr(kE,"onTransitionStart"),tr(LE,"onTransitionCancel"),tr(l1,"onTransitionEnd"),_e("onMouseEnter",["mouseout","mouseover"]),_e("onMouseLeave",["mouseout","mouseover"]),_e("onPointerEnter",["pointerout","pointerover"]),_e("onPointerLeave",["pointerout","pointerover"]),ge("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ge("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ge("onBeforeInput",["compositionend","keypress","textInput","paste"]),ge("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ge("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ge("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql));function Cx(e,i){i=(i&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],d=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var b=l.length-1;0<=b;b--){var E=l[b],O=E.instance,H=E.currentTarget;if(E=E.listener,O!==m&&d.isPropagationStopped())break t;m=E,d.currentTarget=H;try{m(d)}catch(Q){Ic(Q)}d.currentTarget=null,m=O}else for(b=0;b<l.length;b++){if(E=l[b],O=E.instance,H=E.currentTarget,E=E.listener,O!==m&&d.isPropagationStopped())break t;m=E,d.currentTarget=H;try{m(d)}catch(Q){Ic(Q)}d.currentTarget=null,m=O}}}}function Ht(e,i){var o=i[Tt];o===void 0&&(o=i[Tt]=new Set);var l=e+"__bubble";o.has(l)||(Mx(i,e,2,!1),o.add(l))}function Qp(e,i,o){var l=0;i&&(l|=4),Mx(o,e,l,i)}var df="_reactListening"+Math.random().toString(36).slice(2);function Ip(e){if(!e[df]){e[df]=!0,ai.forEach(function(o){o!=="selectionchange"&&(yA.has(o)||Qp(o,!1,e),Qp(o,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[df]||(i[df]=!0,Qp("selectionchange",!1,i))}}function Mx(e,i,o,l){switch(Wx(i)){case 2:var d=XA;break;case 8:d=qA;break;default:d=fm}o=d.bind(null,i,o,e),d=void 0,!xh||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(i,o,{capture:!0,passive:d}):e.addEventListener(i,o,!0):d!==void 0?e.addEventListener(i,o,{passive:d}):e.addEventListener(i,o,!1)}function Wp(e,i,o,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var E=l.stateNode.containerInfo;if(E===d)break;if(b===4)for(b=l.return;b!==null;){var O=b.tag;if((O===3||O===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;E!==null;){if(b=Zt(E),b===null)return;if(O=b.tag,O===5||O===6||O===26||O===27){l=m=b;continue t}E=E.parentNode}}l=l.return}Ly(function(){var H=m,Q=yh(o),W=[];t:{var G=u1.get(e);if(G!==void 0){var q=Ec,St=e;switch(e){case"keypress":if(Sc(o)===0)break t;case"keydown":case"keyup":q=fE;break;case"focusin":St="focus",q=Sh;break;case"focusout":St="blur",q=Sh;break;case"beforeblur":case"afterblur":q=Sh;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Vy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=J5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=pE;break;case a1:case s1:case o1:q=nE;break;case l1:q=gE;break;case"scroll":case"scrollend":q=I5;break;case"wheel":q=vE;break;case"copy":case"cut":case"paste":q=rE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Uy;break;case"toggle":case"beforetoggle":q=bE}var xt=(i&4)!==0,se=!xt&&(e==="scroll"||e==="scrollend"),V=xt?G!==null?G+"Capture":null:G;xt=[];for(var L=H,U;L!==null;){var I=L;if(U=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||U===null||V===null||(I=ml(L,V),I!=null&&xt.push(Il(L,I,U))),se)break;L=L.return}0<xt.length&&(G=new q(G,St,null,o,Q),W.push({event:G,listeners:xt}))}}if((i&7)===0){t:{if(G=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",G&&o!==gh&&(St=o.relatedTarget||o.fromElement)&&(Zt(St)||St[ft]))break t;if((q||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,q?(St=o.relatedTarget||o.toElement,q=H,St=St?Zt(St):null,St!==null&&(se=u(St),xt=St.tag,St!==se||xt!==5&&xt!==27&&xt!==6)&&(St=null)):(q=null,St=H),q!==St)){if(xt=Vy,I="onMouseLeave",V="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(xt=Uy,I="onPointerLeave",V="onPointerEnter",L="pointer"),se=q==null?G:un(q),U=St==null?G:un(St),G=new xt(I,L+"leave",q,o,Q),G.target=se,G.relatedTarget=U,I=null,Zt(Q)===H&&(xt=new xt(V,L+"enter",St,o,Q),xt.target=U,xt.relatedTarget=se,I=xt),se=I,q&&St)e:{for(xt=q,V=St,L=0,U=xt;U;U=wo(U))L++;for(U=0,I=V;I;I=wo(I))U++;for(;0<L-U;)xt=wo(xt),L--;for(;0<U-L;)V=wo(V),U--;for(;L--;){if(xt===V||V!==null&&xt===V.alternate)break e;xt=wo(xt),V=wo(V)}xt=null}else xt=null;q!==null&&Rx(W,G,q,xt,!1),St!==null&&se!==null&&Rx(W,se,St,xt,!0)}}t:{if(G=H?un(H):window,q=G.nodeName&&G.nodeName.toLowerCase(),q==="select"||q==="input"&&G.type==="file")var ut=Ky;else if(Fy(G))if(Zy)ut=DE;else{ut=ME;var Lt=CE}else q=G.nodeName,!q||q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?H&&mh(H.elementType)&&(ut=Ky):ut=RE;if(ut&&(ut=ut(e,H))){$y(W,ut,o,Q);break t}Lt&&Lt(e,G,H),e==="focusout"&&H&&G.type==="number"&&H.memoizedProps.value!=null&&ph(G,"number",G.value)}switch(Lt=H?un(H):window,e){case"focusin":(Fy(Lt)||Lt.contentEditable==="true")&&(Is=Lt,Rh=H,Sl=null);break;case"focusout":Sl=Rh=Is=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,i1(W,o,Q);break;case"selectionchange":if(jE)break;case"keydown":case"keyup":i1(W,o,Q)}var ht;if(Eh)t:{switch(e){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else Qs?Xy(e,o)&&(bt="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(bt="onCompositionStart");bt&&(Hy&&o.locale!=="ko"&&(Qs||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Qs&&(ht=Ny()):(fa=Q,bh="value"in fa?fa.value:fa.textContent,Qs=!0)),Lt=hf(H,bt),0<Lt.length&&(bt=new By(bt,e,null,o,Q),W.push({event:bt,listeners:Lt}),ht?bt.data=ht:(ht=qy(o),ht!==null&&(bt.data=ht)))),(ht=wE?SE(e,o):TE(e,o))&&(bt=hf(H,"onBeforeInput"),0<bt.length&&(Lt=new By("onBeforeInput","beforeinput",null,o,Q),W.push({event:Lt,listeners:bt}),Lt.data=ht)),pA(W,e,H,o,Q)}Cx(W,i)})}function Il(e,i,o){return{instance:e,listener:i,currentTarget:o}}function hf(e,i){for(var o=i+"Capture",l=[];e!==null;){var d=e,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=ml(e,o),d!=null&&l.unshift(Il(e,d,m)),d=ml(e,i),d!=null&&l.push(Il(e,d,m))),e.tag===3)return l;e=e.return}return[]}function wo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rx(e,i,o,l,d){for(var m=i._reactName,b=[];o!==null&&o!==l;){var E=o,O=E.alternate,H=E.stateNode;if(E=E.tag,O!==null&&O===l)break;E!==5&&E!==26&&E!==27||H===null||(O=H,d?(H=ml(o,m),H!=null&&b.unshift(Il(o,H,O))):d||(H=ml(o,m),H!=null&&b.push(Il(o,H,O)))),o=o.return}b.length!==0&&e.push({event:i,listeners:b})}var vA=/\r\n?/g,xA=/\u0000|\uFFFD/g;function Dx(e){return(typeof e=="string"?e:""+e).replace(vA,`
`).replace(xA,"")}function Ox(e,i){return i=Dx(i),Dx(e)===i}function pf(){}function ae(e,i,o,l,d,m){switch(o){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||$s(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&$s(e,""+l);break;case"className":ua(e,"class",l);break;case"tabIndex":ua(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ua(e,o,l);break;case"style":zy(e,l,m);break;case"data":if(i!=="object"){ua(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||o!=="href")){e.removeAttribute(o);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(o);break}l=_c(""+l),e.setAttribute(o,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(i!=="input"&&ae(e,i,"name",d.name,d,null),ae(e,i,"formEncType",d.formEncType,d,null),ae(e,i,"formMethod",d.formMethod,d,null),ae(e,i,"formTarget",d.formTarget,d,null)):(ae(e,i,"encType",d.encType,d,null),ae(e,i,"method",d.method,d,null),ae(e,i,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(o);break}l=_c(""+l),e.setAttribute(o,l);break;case"onClick":l!=null&&(e.onclick=pf);break;case"onScroll":l!=null&&Ht("scroll",e);break;case"onScrollEnd":l!=null&&Ht("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}o=_c(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,""+l):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":l===!0?e.setAttribute(o,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(o,l):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(o,l):e.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(o):e.setAttribute(o,l);break;case"popover":Ht("beforetoggle",e),Ht("toggle",e),On(e,"popover",l);break;case"xlinkActuate":Ci(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ci(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ci(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ci(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ci(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ci(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ci(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ci(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ci(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":On(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Z5.get(o)||o,On(e,o,l))}}function Jp(e,i,o,l,d,m){switch(o){case"style":zy(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(o=l.__html,o!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=o}}break;case"children":typeof l=="string"?$s(e,l):(typeof l=="number"||typeof l=="bigint")&&$s(e,""+l);break;case"onScroll":l!=null&&Ht("scroll",e);break;case"onScrollEnd":l!=null&&Ht("scrollend",e);break;case"onClick":l!=null&&(e.onclick=pf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ge.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),i=o.slice(2,d?o.length-7:void 0),m=e[dt]||null,m=m!=null?m[o]:null,typeof m=="function"&&e.removeEventListener(i,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(i,l,d);break t}o in e?e[o]=l:l===!0?e.setAttribute(o,""):On(e,o,l)}}}function dn(e,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ht("error",e),Ht("load",e);var l=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ae(e,i,m,b,o,null)}}d&&ae(e,i,"srcSet",o.srcSet,o,null),l&&ae(e,i,"src",o.src,o,null);return;case"input":Ht("invalid",e);var E=m=b=d=null,O=null,H=null;for(l in o)if(o.hasOwnProperty(l)){var Q=o[l];if(Q!=null)switch(l){case"name":d=Q;break;case"type":b=Q;break;case"checked":O=Q;break;case"defaultChecked":H=Q;break;case"value":m=Q;break;case"defaultValue":E=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(a(137,i));break;default:ae(e,i,l,Q,o,null)}}Ry(e,m,E,O,H,b,d,!1),xc(e);return;case"select":Ht("invalid",e),l=b=m=null;for(d in o)if(o.hasOwnProperty(d)&&(E=o[d],E!=null))switch(d){case"value":m=E;break;case"defaultValue":b=E;break;case"multiple":l=E;default:ae(e,i,d,E,o,null)}i=m,o=b,e.multiple=!!l,i!=null?Fs(e,!!l,i,!1):o!=null&&Fs(e,!!l,o,!0);return;case"textarea":Ht("invalid",e),m=d=l=null;for(b in o)if(o.hasOwnProperty(b)&&(E=o[b],E!=null))switch(b){case"value":l=E;break;case"defaultValue":d=E;break;case"children":m=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:ae(e,i,b,E,o,null)}Oy(e,l,d,m),xc(e);return;case"option":for(O in o)if(o.hasOwnProperty(O)&&(l=o[O],l!=null))switch(O){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ae(e,i,O,l,o,null)}return;case"dialog":Ht("beforetoggle",e),Ht("toggle",e),Ht("cancel",e),Ht("close",e);break;case"iframe":case"object":Ht("load",e);break;case"video":case"audio":for(l=0;l<Ql.length;l++)Ht(Ql[l],e);break;case"image":Ht("error",e),Ht("load",e);break;case"details":Ht("toggle",e);break;case"embed":case"source":case"link":Ht("error",e),Ht("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in o)if(o.hasOwnProperty(H)&&(l=o[H],l!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ae(e,i,H,l,o,null)}return;default:if(mh(i)){for(Q in o)o.hasOwnProperty(Q)&&(l=o[Q],l!==void 0&&Jp(e,i,Q,l,o,void 0));return}}for(E in o)o.hasOwnProperty(E)&&(l=o[E],l!=null&&ae(e,i,E,l,o,null))}function bA(e,i,o,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,b=null,E=null,O=null,H=null,Q=null;for(q in o){var W=o[q];if(o.hasOwnProperty(q)&&W!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":O=W;default:l.hasOwnProperty(q)||ae(e,i,q,null,l,W)}}for(var G in l){var q=l[G];if(W=o[G],l.hasOwnProperty(G)&&(q!=null||W!=null))switch(G){case"type":m=q;break;case"name":d=q;break;case"checked":H=q;break;case"defaultChecked":Q=q;break;case"value":b=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,i));break;default:q!==W&&ae(e,i,G,q,l,W)}}hh(e,b,E,O,H,Q,m,d);return;case"select":q=b=E=G=null;for(m in o)if(O=o[m],o.hasOwnProperty(m)&&O!=null)switch(m){case"value":break;case"multiple":q=O;default:l.hasOwnProperty(m)||ae(e,i,m,null,l,O)}for(d in l)if(m=l[d],O=o[d],l.hasOwnProperty(d)&&(m!=null||O!=null))switch(d){case"value":G=m;break;case"defaultValue":E=m;break;case"multiple":b=m;default:m!==O&&ae(e,i,d,m,l,O)}i=E,o=b,l=q,G!=null?Fs(e,!!o,G,!1):!!l!=!!o&&(i!=null?Fs(e,!!o,i,!0):Fs(e,!!o,o?[]:"",!1));return;case"textarea":q=G=null;for(E in o)if(d=o[E],o.hasOwnProperty(E)&&d!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ae(e,i,E,null,l,d)}for(b in l)if(d=l[b],m=o[b],l.hasOwnProperty(b)&&(d!=null||m!=null))switch(b){case"value":G=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&ae(e,i,b,d,l,m)}Dy(e,G,q);return;case"option":for(var St in o)if(G=o[St],o.hasOwnProperty(St)&&G!=null&&!l.hasOwnProperty(St))switch(St){case"selected":e.selected=!1;break;default:ae(e,i,St,null,l,G)}for(O in l)if(G=l[O],q=o[O],l.hasOwnProperty(O)&&G!==q&&(G!=null||q!=null))switch(O){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:ae(e,i,O,G,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xt in o)G=o[xt],o.hasOwnProperty(xt)&&G!=null&&!l.hasOwnProperty(xt)&&ae(e,i,xt,null,l,G);for(H in l)if(G=l[H],q=o[H],l.hasOwnProperty(H)&&G!==q&&(G!=null||q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,i));break;default:ae(e,i,H,G,l,q)}return;default:if(mh(i)){for(var se in o)G=o[se],o.hasOwnProperty(se)&&G!==void 0&&!l.hasOwnProperty(se)&&Jp(e,i,se,void 0,l,G);for(Q in l)G=l[Q],q=o[Q],!l.hasOwnProperty(Q)||G===q||G===void 0&&q===void 0||Jp(e,i,Q,G,l,q);return}}for(var V in o)G=o[V],o.hasOwnProperty(V)&&G!=null&&!l.hasOwnProperty(V)&&ae(e,i,V,null,l,G);for(W in l)G=l[W],q=o[W],!l.hasOwnProperty(W)||G===q||G==null&&q==null||ae(e,i,W,G,l,q)}var tm=null,em=null;function mf(e){return e.nodeType===9?e:e.ownerDocument}function jx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zx(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function nm(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var im=null;function _A(){var e=window.event;return e&&e.type==="popstate"?e===im?!1:(im=e,!0):(im=null,!1)}var kx=typeof setTimeout=="function"?setTimeout:void 0,wA=typeof clearTimeout=="function"?clearTimeout:void 0,Lx=typeof Promise=="function"?Promise:void 0,SA=typeof queueMicrotask=="function"?queueMicrotask:typeof Lx<"u"?function(e){return Lx.resolve(null).then(e).catch(TA)}:kx;function TA(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Nx(e,i){var o=i,l=0,d=0;do{var m=o.nextSibling;if(e.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<l&&8>l){o=l;var b=e.ownerDocument;if(o&1&&Wl(b.documentElement),o&2&&Wl(b.body),o&4)for(o=b.head,Wl(o),b=o.firstChild;b;){var E=b.nextSibling,O=b.nodeName;b[Re]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=E}}if(d===0){e.removeChild(m),su(i);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:l=o.charCodeAt(0)-48;else l=0;o=m}while(o);su(i)}function rm(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":rm(o),fe(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function EA(e,i,o,l){for(;e.nodeType===1;){var d=o;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Re])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=nr(e.nextSibling),e===null)break}return null}function AA(e,i,o){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=nr(e.nextSibling),e===null))return null;return e}function am(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function CA(e,i){var o=e.ownerDocument;if(e.data!=="$?"||o.readyState==="complete")i();else{var l=function(){i(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function nr(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var sm=null;function Px(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return e;i--}else o==="/$"&&i++}e=e.previousSibling}return null}function Vx(e,i,o){switch(i=mf(o),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Wl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);fe(e)}var Vi=new Map,Bx=new Set;function gf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zr=$.d;$.d={f:MA,r:RA,D:DA,C:OA,L:jA,m:zA,X:LA,S:kA,M:NA};function MA(){var e=Zr.f(),i=of();return e||i}function RA(e){var i=Xt(e);i!==null&&i.tag===5&&i.type==="form"?av(i):Zr.r(e)}var So=typeof document>"u"?null:document;function Ux(e,i,o){var l=So;if(l&&typeof i=="string"&&i){var d=Oi(i);d='link[rel="'+e+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),Bx.has(d)||(Bx.add(d),e={rel:e,crossOrigin:o,href:i},l.querySelector(d)===null&&(i=l.createElement("link"),dn(i,"link",e),$t(i),l.head.appendChild(i)))}}function DA(e){Zr.D(e),Ux("dns-prefetch",e,null)}function OA(e,i){Zr.C(e,i),Ux("preconnect",e,i)}function jA(e,i,o){Zr.L(e,i,o);var l=So;if(l&&e&&i){var d='link[rel="preload"][as="'+Oi(i)+'"]';i==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Oi(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Oi(o.imageSizes)+'"]')):d+='[href="'+Oi(e)+'"]';var m=d;switch(i){case"style":m=To(e);break;case"script":m=Eo(e)}Vi.has(m)||(e=g({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:e,as:i},o),Vi.set(m,e),l.querySelector(d)!==null||i==="style"&&l.querySelector(Jl(m))||i==="script"&&l.querySelector(tu(m))||(i=l.createElement("link"),dn(i,"link",e),$t(i),l.head.appendChild(i)))}}function zA(e,i){Zr.m(e,i);var o=So;if(o&&e){var l=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+Oi(l)+'"][href="'+Oi(e)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Eo(e)}if(!Vi.has(m)&&(e=g({rel:"modulepreload",href:e},i),Vi.set(m,e),o.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(tu(m)))return}l=o.createElement("link"),dn(l,"link",e),$t(l),o.head.appendChild(l)}}}function kA(e,i,o){Zr.S(e,i,o);var l=So;if(l&&e){var d=It(l).hoistableStyles,m=To(e);i=i||"default";var b=d.get(m);if(!b){var E={loading:0,preload:null};if(b=l.querySelector(Jl(m)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},o),(o=Vi.get(m))&&om(e,o);var O=b=l.createElement("link");$t(O),dn(O,"link",e),O._p=new Promise(function(H,Q){O.onload=H,O.onerror=Q}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,yf(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:E},d.set(m,b)}}}function LA(e,i){Zr.X(e,i);var o=So;if(o&&e){var l=It(o).hoistableScripts,d=Eo(e),m=l.get(d);m||(m=o.querySelector(tu(d)),m||(e=g({src:e,async:!0},i),(i=Vi.get(d))&&lm(e,i),m=o.createElement("script"),$t(m),dn(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function NA(e,i){Zr.M(e,i);var o=So;if(o&&e){var l=It(o).hoistableScripts,d=Eo(e),m=l.get(d);m||(m=o.querySelector(tu(d)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Vi.get(d))&&lm(e,i),m=o.createElement("script"),$t(m),dn(m,"link",e),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function Hx(e,i,o,l){var d=(d=st.current)?gf(d):null;if(!d)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=To(o.href),o=It(d).hoistableStyles,l=o.get(i),l||(l={type:"style",instance:null,count:0,state:null},o.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=To(o.href);var m=It(d).hoistableStyles,b=m.get(e);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=d.querySelector(Jl(e)))&&!m._p&&(b.instance=m,b.state.loading=5),Vi.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Vi.set(e,o),m||PA(d,e,o,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Eo(o),o=It(d).hoistableScripts,l=o.get(i),l||(l={type:"script",instance:null,count:0,state:null},o.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function To(e){return'href="'+Oi(e)+'"'}function Jl(e){return'link[rel="stylesheet"]['+e+"]"}function Yx(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function PA(e,i,o,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),dn(i,"link",o),$t(i),e.head.appendChild(i))}function Eo(e){return'[src="'+Oi(e)+'"]'}function tu(e){return"script[async]"+e}function Gx(e,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Oi(o.href)+'"]');if(l)return i.instance=l,$t(l),l;var d=g({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$t(l),dn(l,"style",d),yf(l,o.precedence,e),i.instance=l;case"stylesheet":d=To(o.href);var m=e.querySelector(Jl(d));if(m)return i.state.loading|=4,i.instance=m,$t(m),m;l=Yx(o),(d=Vi.get(d))&&om(l,d),m=(e.ownerDocument||e).createElement("link"),$t(m);var b=m;return b._p=new Promise(function(E,O){b.onload=E,b.onerror=O}),dn(m,"link",l),i.state.loading|=4,yf(m,o.precedence,e),i.instance=m;case"script":return m=Eo(o.src),(d=e.querySelector(tu(m)))?(i.instance=d,$t(d),d):(l=o,(d=Vi.get(m))&&(l=g({},o),lm(l,d)),e=e.ownerDocument||e,d=e.createElement("script"),$t(d),dn(d,"link",l),e.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,yf(l,o.precedence,e));return i.instance}function yf(e,i,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,b=0;b<l.length;b++){var E=l[b];if(E.dataset.precedence===i)m=E;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(e,i.firstChild))}function om(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function lm(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var vf=null;function Xx(e,i,o){if(vf===null){var l=new Map,d=vf=new Map;d.set(o,l)}else d=vf,l=d.get(o),l||(l=new Map,d.set(o,l));if(l.has(e))return l;for(l.set(e,null),o=o.getElementsByTagName(e),d=0;d<o.length;d++){var m=o[d];if(!(m[Re]||m[nt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var E=l.get(b);E?E.push(m):l.set(b,[m])}}return l}function qx(e,i,o){e=e.ownerDocument||e,e.head.insertBefore(o,i==="title"?e.querySelector("head > title"):null)}function VA(e,i,o){if(o===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Fx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var eu=null;function BA(){}function UA(e,i,o){if(eu===null)throw Error(a(475));var l=eu;if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=To(o.href),m=e.querySelector(Jl(d));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=xf.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=m,$t(m);return}m=e.ownerDocument||e,o=Yx(o),(d=Vi.get(d))&&om(o,d),m=m.createElement("link"),$t(m);var b=m;b._p=new Promise(function(E,O){b.onload=E,b.onerror=O}),dn(m,"link",o),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=xf.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function HA(){if(eu===null)throw Error(a(475));var e=eu;return e.stylesheets&&e.count===0&&um(e,e.stylesheets),0<e.count?function(i){var o=setTimeout(function(){if(e.stylesheets&&um(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(o)}}:null}function xf(){if(this.count--,this.count===0){if(this.stylesheets)um(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bf=null;function um(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bf=new Map,i.forEach(YA,e),bf=null,xf.call(e))}function YA(e,i){if(!(i.state.loading&4)){var o=bf.get(e);if(o)var l=o.get(null);else{o=new Map,bf.set(e,o);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var b=d[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),l=b)}l&&o.set(null,l)}d=i.instance,b=d.getAttribute("data-precedence"),m=o.get(b)||l,m===l&&o.set(null,d),o.set(b,d),this.count++,l=xf.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),i.state.loading|=4}}var nu={$$typeof:R,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function GA(e,i,o,l,d,m,b,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function $x(e,i,o,l,d,m,b,E,O,H,Q,W){return e=new GA(e,i,o,b,E,O,H,W),i=1,m===!0&&(i|=24),m=li(3,null,null,i),e.current=m,m.stateNode=e,i=Xh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:o,cache:i},Kh(m),e}function Kx(e){return e?(e=eo,e):eo}function Zx(e,i,o,l,d,m){d=Kx(d),l.context===null?l.context=d:l.pendingContext=d,l=pa(i),l.payload={element:o},m=m===void 0?null:m,m!==null&&(l.callback=m),o=ma(e,l,i),o!==null&&(hi(o,e,i),jl(o,e,i))}function Qx(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<i?o:i}}function cm(e,i){Qx(e,i),(e=e.alternate)&&Qx(e,i)}function Ix(e){if(e.tag===13){var i=to(e,67108864);i!==null&&hi(i,e,67108864),cm(e,67108864)}}var _f=!0;function XA(e,i,o,l){var d=Y.T;Y.T=null;var m=$.p;try{$.p=2,fm(e,i,o,l)}finally{$.p=m,Y.T=d}}function qA(e,i,o,l){var d=Y.T;Y.T=null;var m=$.p;try{$.p=8,fm(e,i,o,l)}finally{$.p=m,Y.T=d}}function fm(e,i,o,l){if(_f){var d=dm(l);if(d===null)Wp(e,i,l,wf,o),Jx(e,l);else if($A(d,e,i,o,l))l.stopPropagation();else if(Jx(e,l),i&4&&-1<FA.indexOf(e)){for(;d!==null;){var m=Xt(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Gn(m.pendingLanes);if(b!==0){var E=m;for(E.pendingLanes|=2,E.entangledLanes|=2;b;){var O=1<<31-ce(b);E.entanglements[1]|=O,b&=~O}dr(m),(te&6)===0&&(af=F()+500,Zl(0))}}break;case 13:E=to(m,2),E!==null&&hi(E,m,2),of(),cm(m,2)}if(m=dm(l),m===null&&Wp(e,i,l,wf,o),m===d)break;d=m}d!==null&&l.stopPropagation()}else Wp(e,i,l,null,o)}}function dm(e){return e=yh(e),hm(e)}var wf=null;function hm(e){if(wf=null,e=Zt(e),e!==null){var i=u(e);if(i===null)e=null;else{var o=i.tag;if(o===13){if(e=c(i),e!==null)return e;e=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return wf=e,null}function Wx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rn()){case Ai:return 2;case Zi:return 8;case oe:case Qi:return 32;case Ii:return 268435456;default:return 32}default:return 32}}var pm=!1,Ma=null,Ra=null,Da=null,iu=new Map,ru=new Map,Oa=[],FA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jx(e,i){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":iu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ru.delete(i.pointerId)}}function au(e,i,o,l,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Xt(i),i!==null&&Ix(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),e)}function $A(e,i,o,l,d){switch(i){case"focusin":return Ma=au(Ma,e,i,o,l,d),!0;case"dragenter":return Ra=au(Ra,e,i,o,l,d),!0;case"mouseover":return Da=au(Da,e,i,o,l,d),!0;case"pointerover":var m=d.pointerId;return iu.set(m,au(iu.get(m)||null,e,i,o,l,d)),!0;case"gotpointercapture":return m=d.pointerId,ru.set(m,au(ru.get(m)||null,e,i,o,l,d)),!0}return!1}function tb(e){var i=Zt(e.target);if(i!==null){var o=u(i);if(o!==null){if(i=o.tag,i===13){if(i=c(o),i!==null){e.blockedOn=i,vt(e.priority,function(){if(o.tag===13){var l=di();l=ri(l);var d=to(o,l);d!==null&&hi(d,o,l),cm(o,l)}});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sf(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var o=dm(e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);gh=l,o.target.dispatchEvent(l),gh=null}else return i=Xt(o),i!==null&&Ix(i),e.blockedOn=o,!1;i.shift()}return!0}function eb(e,i,o){Sf(e)&&o.delete(i)}function KA(){pm=!1,Ma!==null&&Sf(Ma)&&(Ma=null),Ra!==null&&Sf(Ra)&&(Ra=null),Da!==null&&Sf(Da)&&(Da=null),iu.forEach(eb),ru.forEach(eb)}function Tf(e,i){e.blockedOn===i&&(e.blockedOn=null,pm||(pm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,KA)))}var Ef=null;function nb(e){Ef!==e&&(Ef=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ef===e&&(Ef=null);for(var i=0;i<e.length;i+=3){var o=e[i],l=e[i+1],d=e[i+2];if(typeof l!="function"){if(hm(l||o)===null)continue;break}var m=Xt(o);m!==null&&(e.splice(i,3),i-=3,hp(m,{pending:!0,data:d,method:o.method,action:l},l,d))}}))}function su(e){function i(O){return Tf(O,e)}Ma!==null&&Tf(Ma,e),Ra!==null&&Tf(Ra,e),Da!==null&&Tf(Da,e),iu.forEach(i),ru.forEach(i);for(var o=0;o<Oa.length;o++){var l=Oa[o];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Oa.length&&(o=Oa[0],o.blockedOn===null);)tb(o),o.blockedOn===null&&Oa.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var d=o[l],m=o[l+1],b=d[dt]||null;if(typeof m=="function")b||nb(o);else if(b){var E=null;if(m&&m.hasAttribute("formAction")){if(d=m,b=m[dt]||null)E=b.formAction;else if(hm(d)!==null)continue}else E=b.action;typeof E=="function"?o[l+1]=E:(o.splice(l,3),l-=3),nb(o)}}}function mm(e){this._internalRoot=e}Af.prototype.render=mm.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,l=di();Zx(o,l,e,i,null,null)},Af.prototype.unmount=mm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Zx(e.current,2,null,e,null,null),of(),i[ft]=null}};function Af(e){this._internalRoot=e}Af.prototype.unstable_scheduleHydration=function(e){if(e){var i=At();e={blockedOn:null,target:e,priority:i};for(var o=0;o<Oa.length&&i!==0&&i<Oa[o].priority;o++);Oa.splice(o,0,e),o===0&&tb(e)}};var ib=t.version;if(ib!=="19.1.0")throw Error(a(527,ib,"19.1.0"));$.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=h(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var ZA={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cf.isDisabled&&Cf.supportsFiber)try{Hn=Cf.inject(ZA),Yt=Cf}catch{}}return lu.createRoot=function(e,i){if(!s(e))throw Error(a(299));var o=!1,l="",d=xv,m=bv,b=_v,E=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=$x(e,1,!1,null,null,o,l,d,m,b,E,null),e[ft]=i.current,Ip(e),new mm(i)},lu.hydrateRoot=function(e,i,o){if(!s(e))throw Error(a(299));var l=!1,d="",m=xv,b=bv,E=_v,O=null,H=null;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(O=o.unstable_transitionCallbacks),o.formState!==void 0&&(H=o.formState)),i=$x(e,1,!0,i,o??null,l,d,m,b,E,O,H),i.context=Kx(null),o=i.current,l=di(),l=ri(l),d=pa(l),d.callback=null,ma(o,d,l),o=l,i.current.lanes=o,ln(i,o),dr(i),e[ft]=i.current,Ip(e),new Af(i)},lu.version="19.1.0",lu}var hb;function aC(){if(hb)return vm.exports;hb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),vm.exports=rC(),vm.exports}var sC=aC();const oC=e2(sC);var In=function(){return In=Object.assign||function(t){for(var r,a=1,s=arguments.length;a<s;a++){r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},In.apply(this,arguments)};function Ad(n,t,r){if(r||arguments.length===2)for(var a=0,s=t.length,u;a<s;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var ye="-ms-",Au="-moz-",Wt="-webkit-",n2="comm",Qd="rule",og="decl",lC="@import",i2="@keyframes",uC="@layer",r2=Math.abs,lg=String.fromCharCode,u0=Object.assign;function cC(n,t){return sn(n,0)^45?(((t<<2^sn(n,0))<<2^sn(n,1))<<2^sn(n,2))<<2^sn(n,3):0}function a2(n){return n.trim()}function Ir(n,t){return(n=t.exec(n))?n[0]:n}function Dt(n,t,r){return n.replace(t,r)}function od(n,t,r){return n.indexOf(t,r)}function sn(n,t){return n.charCodeAt(t)|0}function Qo(n,t,r){return n.slice(t,r)}function mr(n){return n.length}function s2(n){return n.length}function gu(n,t){return t.push(n),n}function fC(n,t){return n.map(t).join("")}function pb(n,t){return n.filter(function(r){return!Ir(r,t)})}var Id=1,Io=1,o2=0,$i=0,Ke=0,ul="";function Wd(n,t,r,a,s,u,c,f){return{value:n,root:t,parent:r,type:a,props:s,children:u,line:Id,column:Io,length:c,return:"",siblings:f}}function za(n,t){return u0(Wd("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function Ao(n){for(;n.root;)n=za(n.root,{children:[n]});gu(n,n.siblings)}function dC(){return Ke}function hC(){return Ke=$i>0?sn(ul,--$i):0,Io--,Ke===10&&(Io=1,Id--),Ke}function ar(){return Ke=$i<o2?sn(ul,$i++):0,Io++,Ke===10&&(Io=1,Id++),Ke}function Ds(){return sn(ul,$i)}function ld(){return $i}function Jd(n,t){return Qo(ul,n,t)}function c0(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pC(n){return Id=Io=1,o2=mr(ul=n),$i=0,[]}function mC(n){return ul="",n}function wm(n){return a2(Jd($i-1,f0(n===91?n+2:n===40?n+1:n)))}function gC(n){for(;(Ke=Ds())&&Ke<33;)ar();return c0(n)>2||c0(Ke)>3?"":" "}function yC(n,t){for(;--t&&ar()&&!(Ke<48||Ke>102||Ke>57&&Ke<65||Ke>70&&Ke<97););return Jd(n,ld()+(t<6&&Ds()==32&&ar()==32))}function f0(n){for(;ar();)switch(Ke){case n:return $i;case 34:case 39:n!==34&&n!==39&&f0(Ke);break;case 40:n===41&&f0(n);break;case 92:ar();break}return $i}function vC(n,t){for(;ar()&&n+Ke!==57;)if(n+Ke===84&&Ds()===47)break;return"/*"+Jd(t,$i-1)+"*"+lg(n===47?n:ar())}function xC(n){for(;!c0(Ds());)ar();return Jd(n,$i)}function bC(n){return mC(ud("",null,null,null,[""],n=pC(n),0,[0],n))}function ud(n,t,r,a,s,u,c,f,h){for(var p=0,g=0,y=c,x=0,v=0,_=0,S=1,C=1,A=1,M=0,R="",j=s,D=u,N=a,z=R;C;)switch(_=M,M=ar()){case 40:if(_!=108&&sn(z,y-1)==58){od(z+=Dt(wm(M),"&","&\f"),"&\f",r2(p?f[p-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:z+=wm(M);break;case 9:case 10:case 13:case 32:z+=gC(_);break;case 92:z+=yC(ld()-1,7);continue;case 47:switch(Ds()){case 42:case 47:gu(_C(vC(ar(),ld()),t,r,h),h);break;default:z+="/"}break;case 123*S:f[p++]=mr(z)*A;case 125*S:case 59:case 0:switch(M){case 0:case 125:C=0;case 59+g:A==-1&&(z=Dt(z,/\f/g,"")),v>0&&mr(z)-y&&gu(v>32?gb(z+";",a,r,y-1,h):gb(Dt(z," ","")+";",a,r,y-2,h),h);break;case 59:z+=";";default:if(gu(N=mb(z,t,r,p,g,s,f,R,j=[],D=[],y,u),u),M===123)if(g===0)ud(z,t,N,N,j,u,y,f,D);else switch(x===99&&sn(z,3)===110?100:x){case 100:case 108:case 109:case 115:ud(n,N,N,a&&gu(mb(n,N,N,0,0,s,f,R,s,j=[],y,D),D),s,D,y,f,a?j:D);break;default:ud(z,N,N,N,[""],D,0,f,D)}}p=g=v=0,S=A=1,R=z="",y=c;break;case 58:y=1+mr(z),v=_;default:if(S<1){if(M==123)--S;else if(M==125&&S++==0&&hC()==125)continue}switch(z+=lg(M),M*S){case 38:A=g>0?1:(z+="\f",-1);break;case 44:f[p++]=(mr(z)-1)*A,A=1;break;case 64:Ds()===45&&(z+=wm(ar())),x=Ds(),g=y=mr(R=z+=xC(ld())),M++;break;case 45:_===45&&mr(z)==2&&(S=0)}}return u}function mb(n,t,r,a,s,u,c,f,h,p,g,y){for(var x=s-1,v=s===0?u:[""],_=s2(v),S=0,C=0,A=0;S<a;++S)for(var M=0,R=Qo(n,x+1,x=r2(C=c[S])),j=n;M<_;++M)(j=a2(C>0?v[M]+" "+R:Dt(R,/&\f/g,v[M])))&&(h[A++]=j);return Wd(n,t,r,s===0?Qd:f,h,p,g,y)}function _C(n,t,r,a){return Wd(n,t,r,n2,lg(dC()),Qo(n,2,-2),0,a)}function gb(n,t,r,a,s){return Wd(n,t,r,og,Qo(n,0,a),Qo(n,a+1,-1),a,s)}function l2(n,t,r){switch(cC(n,t)){case 5103:return Wt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Wt+n+n;case 4789:return Au+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Wt+n+Au+n+ye+n+n;case 5936:switch(sn(n,t+11)){case 114:return Wt+n+ye+Dt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Wt+n+ye+Dt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Wt+n+ye+Dt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Wt+n+ye+n+n;case 6165:return Wt+n+ye+"flex-"+n+n;case 5187:return Wt+n+Dt(n,/(\w+).+(:[^]+)/,Wt+"box-$1$2"+ye+"flex-$1$2")+n;case 5443:return Wt+n+ye+"flex-item-"+Dt(n,/flex-|-self/g,"")+(Ir(n,/flex-|baseline/)?"":ye+"grid-row-"+Dt(n,/flex-|-self/g,""))+n;case 4675:return Wt+n+ye+"flex-line-pack"+Dt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Wt+n+ye+Dt(n,"shrink","negative")+n;case 5292:return Wt+n+ye+Dt(n,"basis","preferred-size")+n;case 6060:return Wt+"box-"+Dt(n,"-grow","")+Wt+n+ye+Dt(n,"grow","positive")+n;case 4554:return Wt+Dt(n,/([^-])(transform)/g,"$1"+Wt+"$2")+n;case 6187:return Dt(Dt(Dt(n,/(zoom-|grab)/,Wt+"$1"),/(image-set)/,Wt+"$1"),n,"")+n;case 5495:case 3959:return Dt(n,/(image-set\([^]*)/,Wt+"$1$`$1");case 4968:return Dt(Dt(n,/(.+:)(flex-)?(.*)/,Wt+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Wt+n+n;case 4200:if(!Ir(n,/flex-|baseline/))return ye+"grid-column-align"+Qo(n,t)+n;break;case 2592:case 3360:return ye+Dt(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(a,s){return t=s,Ir(a.props,/grid-\w+-end/)})?~od(n+(r=r[t].value),"span",0)?n:ye+Dt(n,"-start","")+n+ye+"grid-row-span:"+(~od(r,"span",0)?Ir(r,/\d+/):+Ir(r,/\d+/)-+Ir(n,/\d+/))+";":ye+Dt(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(a){return Ir(a.props,/grid-\w+-start/)})?n:ye+Dt(Dt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Dt(n,/(.+)-inline(.+)/,Wt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mr(n)-1-t>6)switch(sn(n,t+1)){case 109:if(sn(n,t+4)!==45)break;case 102:return Dt(n,/(.+:)(.+)-([^]+)/,"$1"+Wt+"$2-$3$1"+Au+(sn(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~od(n,"stretch",0)?l2(Dt(n,"stretch","fill-available"),t,r)+n:n}break;case 5152:case 5920:return Dt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,s,u,c,f,h,p){return ye+s+":"+u+p+(c?ye+s+"-span:"+(f?h:+h-+u)+p:"")+n});case 4949:if(sn(n,t+6)===121)return Dt(n,":",":"+Wt)+n;break;case 6444:switch(sn(n,sn(n,14)===45?18:11)){case 120:return Dt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Wt+(sn(n,14)===45?"inline-":"")+"box$3$1"+Wt+"$2$3$1"+ye+"$2box$3")+n;case 100:return Dt(n,":",":"+ye)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Dt(n,"scroll-","scroll-snap-")+n}return n}function Cd(n,t){for(var r="",a=0;a<n.length;a++)r+=t(n[a],a,n,t)||"";return r}function wC(n,t,r,a){switch(n.type){case uC:if(n.children.length)break;case lC:case og:return n.return=n.return||n.value;case n2:return"";case i2:return n.return=n.value+"{"+Cd(n.children,a)+"}";case Qd:if(!mr(n.value=n.props.join(",")))return""}return mr(r=Cd(n.children,a))?n.return=n.value+"{"+r+"}":""}function SC(n){var t=s2(n);return function(r,a,s,u){for(var c="",f=0;f<t;f++)c+=n[f](r,a,s,u)||"";return c}}function TC(n){return function(t){t.root||(t=t.return)&&n(t)}}function EC(n,t,r,a){if(n.length>-1&&!n.return)switch(n.type){case og:n.return=l2(n.value,n.length,r);return;case i2:return Cd([za(n,{value:Dt(n.value,"@","@"+Wt)})],a);case Qd:if(n.length)return fC(r=n.props,function(s){switch(Ir(s,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ao(za(n,{props:[Dt(s,/:(read-\w+)/,":"+Au+"$1")]})),Ao(za(n,{props:[s]})),u0(n,{props:pb(r,a)});break;case"::placeholder":Ao(za(n,{props:[Dt(s,/:(plac\w+)/,":"+Wt+"input-$1")]})),Ao(za(n,{props:[Dt(s,/:(plac\w+)/,":"+Au+"$1")]})),Ao(za(n,{props:[Dt(s,/:(plac\w+)/,ye+"input-$1")]})),Ao(za(n,{props:[s]})),u0(n,{props:pb(r,a)});break}return""})}}var AC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pi={},Wo=typeof process<"u"&&pi!==void 0&&(pi.REACT_APP_SC_ATTR||pi.SC_ATTR)||"data-styled",u2="active",c2="data-styled-version",th="6.1.17",ug=`/*!sc*/
`,Md=typeof window<"u"&&"HTMLElement"in window,CC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&pi!==void 0&&pi.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pi.REACT_APP_SC_DISABLE_SPEEDY!==""?pi.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pi.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&pi!==void 0&&pi.SC_DISABLE_SPEEDY!==void 0&&pi.SC_DISABLE_SPEEDY!==""&&pi.SC_DISABLE_SPEEDY!=="false"&&pi.SC_DISABLE_SPEEDY),eh=Object.freeze([]),Jo=Object.freeze({});function MC(n,t,r){return r===void 0&&(r=Jo),n.theme!==r.theme&&n.theme||t||r.theme}var f2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),RC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,DC=/(^-|-$)/g;function yb(n){return n.replace(RC,"-").replace(DC,"")}var OC=/(a)(d)/gi,Mf=52,vb=function(n){return String.fromCharCode(n+(n>25?39:97))};function d0(n){var t,r="";for(t=Math.abs(n);t>Mf;t=t/Mf|0)r=vb(t%Mf)+r;return(vb(t%Mf)+r).replace(OC,"$1-$2")}var Sm,d2=5381,zo=function(n,t){for(var r=t.length;r;)n=33*n^t.charCodeAt(--r);return n},h2=function(n){return zo(d2,n)};function jC(n){return d0(h2(n)>>>0)}function zC(n){return n.displayName||n.name||"Component"}function Tm(n){return typeof n=="string"&&!0}var p2=typeof Symbol=="function"&&Symbol.for,m2=p2?Symbol.for("react.memo"):60115,kC=p2?Symbol.for("react.forward_ref"):60112,LC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},NC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},PC=((Sm={})[kC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Sm[m2]=g2,Sm);function xb(n){return("type"in(t=n)&&t.type.$$typeof)===m2?g2:"$$typeof"in n?PC[n.$$typeof]:LC;var t}var VC=Object.defineProperty,BC=Object.getOwnPropertyNames,bb=Object.getOwnPropertySymbols,UC=Object.getOwnPropertyDescriptor,HC=Object.getPrototypeOf,_b=Object.prototype;function y2(n,t,r){if(typeof t!="string"){if(_b){var a=HC(t);a&&a!==_b&&y2(n,a,r)}var s=BC(t);bb&&(s=s.concat(bb(t)));for(var u=xb(n),c=xb(t),f=0;f<s.length;++f){var h=s[f];if(!(h in NC||r&&r[h]||c&&h in c||u&&h in u)){var p=UC(t,h);try{VC(n,h,p)}catch{}}}}return n}function tl(n){return typeof n=="function"}function cg(n){return typeof n=="object"&&"styledComponentId"in n}function Ts(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function wb(n,t){if(n.length===0)return"";for(var r=n[0],a=1;a<n.length;a++)r+=n[a];return r}function Xu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function h0(n,t,r){if(r===void 0&&(r=!1),!r&&!Xu(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=h0(n[a],t[a]);else if(Xu(t))for(var a in t)n[a]=h0(n[a],t[a]);return n}function fg(n,t){Object.defineProperty(n,"toString",{value:t})}function fc(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var YC=function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var r=0,a=0;a<t;a++)r+=this.groupSizes[a];return r},n.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var a=this.groupSizes,s=a.length,u=s;t>=u;)if((u<<=1)<0)throw fc(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var c=s;c<u;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(t+1),h=(c=0,r.length);c<h;c++)this.tag.insertRule(f,r[c])&&(this.groupSizes[t]++,f++)},n.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],a=this.indexOfGroup(t),s=a+r;this.groupSizes[t]=0;for(var u=a;u<s;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var a=this.groupSizes[t],s=this.indexOfGroup(t),u=s+a,c=s;c<u;c++)r+="".concat(this.tag.getRule(c)).concat(ug);return r},n}(),cd=new Map,Rd=new Map,fd=1,Rf=function(n){if(cd.has(n))return cd.get(n);for(;Rd.has(fd);)fd++;var t=fd++;return cd.set(n,t),Rd.set(t,n),t},GC=function(n,t){fd=t+1,cd.set(n,t),Rd.set(t,n)},XC="style[".concat(Wo,"][").concat(c2,'="').concat(th,'"]'),qC=new RegExp("^".concat(Wo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),FC=function(n,t,r){for(var a,s=r.split(","),u=0,c=s.length;u<c;u++)(a=s[u])&&n.registerName(t,a)},$C=function(n,t){for(var r,a=((r=t.textContent)!==null&&r!==void 0?r:"").split(ug),s=[],u=0,c=a.length;u<c;u++){var f=a[u].trim();if(f){var h=f.match(qC);if(h){var p=0|parseInt(h[1],10),g=h[2];p!==0&&(GC(g,p),FC(n,g,h[3]),n.getTag().insertRules(p,s)),s.length=0}else s.push(f)}}},Sb=function(n){for(var t=document.querySelectorAll(XC),r=0,a=t.length;r<a;r++){var s=t[r];s&&s.getAttribute(Wo)!==u2&&($C(n,s),s.parentNode&&s.parentNode.removeChild(s))}};function KC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var v2=function(n){var t=document.head,r=n||t,a=document.createElement("style"),s=function(f){var h=Array.from(f.querySelectorAll("style[".concat(Wo,"]")));return h[h.length-1]}(r),u=s!==void 0?s.nextSibling:null;a.setAttribute(Wo,u2),a.setAttribute(c2,th);var c=KC();return c&&a.setAttribute("nonce",c),r.insertBefore(a,u),a},ZC=function(){function n(t){this.element=v2(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,s=0,u=a.length;s<u;s++){var c=a[s];if(c.ownerNode===r)return c}throw fc(17)}(this.element),this.length=0}return n.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},n}(),QC=function(){function n(t){this.element=v2(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n}(),IC=function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n}(),Tb=Md,WC={isServer:!Md,useCSSOMInjection:!CC},x2=function(){function n(t,r,a){t===void 0&&(t=Jo),r===void 0&&(r={});var s=this;this.options=In(In({},WC),t),this.gs=r,this.names=new Map(a),this.server=!!t.isServer,!this.server&&Md&&Tb&&(Tb=!1,Sb(this)),fg(this,function(){return function(u){for(var c=u.getTag(),f=c.length,h="",p=function(y){var x=function(A){return Rd.get(A)}(y);if(x===void 0)return"continue";var v=u.names.get(x),_=c.getGroup(y);if(v===void 0||!v.size||_.length===0)return"continue";var S="".concat(Wo,".g").concat(y,'[id="').concat(x,'"]'),C="";v!==void 0&&v.forEach(function(A){A.length>0&&(C+="".concat(A,","))}),h+="".concat(_).concat(S,'{content:"').concat(C,'"}').concat(ug)},g=0;g<f;g++)p(g);return h}(s)})}return n.registerId=function(t){return Rf(t)},n.prototype.rehydrate=function(){!this.server&&Md&&Sb(this)},n.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new n(In(In({},this.options),t),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var a=r.useCSSOMInjection,s=r.target;return r.isServer?new IC(s):a?new ZC(s):new QC(s)}(this.options),new YC(t)));var t},n.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.prototype.registerName=function(t,r){if(Rf(t),this.names.has(t))this.names.get(t).add(r);else{var a=new Set;a.add(r),this.names.set(t,a)}},n.prototype.insertRules=function(t,r,a){this.registerName(t,r),this.getTag().insertRules(Rf(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(Rf(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n}(),JC=/&/g,t4=/^\s*\/\/.*$/gm;function b2(n,t){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=b2(r.children,t)),r})}function e4(n){var t,r,a,s=Jo,u=s.options,c=u===void 0?Jo:u,f=s.plugins,h=f===void 0?eh:f,p=function(x,v,_){return _.startsWith(r)&&_.endsWith(r)&&_.replaceAll(r,"").length>0?".".concat(t):x},g=h.slice();g.push(function(x){x.type===Qd&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(JC,r).replace(a,p))}),c.prefix&&g.push(EC),g.push(wC);var y=function(x,v,_,S){v===void 0&&(v=""),_===void 0&&(_=""),S===void 0&&(S="&"),t=S,r=v,a=new RegExp("\\".concat(r,"\\b"),"g");var C=x.replace(t4,""),A=bC(_||v?"".concat(_," ").concat(v," { ").concat(C," }"):C);c.namespace&&(A=b2(A,c.namespace));var M=[];return Cd(A,SC(g.concat(TC(function(R){return M.push(R)})))),M};return y.hash=h.length?h.reduce(function(x,v){return v.name||fc(15),zo(x,v.name)},d2).toString():"",y}var n4=new x2,p0=e4(),_2=Zo.createContext({shouldForwardProp:void 0,styleSheet:n4,stylis:p0});_2.Consumer;Zo.createContext(void 0);function Eb(){return k.useContext(_2)}var i4=function(){function n(t,r){var a=this;this.inject=function(s,u){u===void 0&&(u=p0);var c=a.name+u.hash;s.hasNameForId(a.id,c)||s.insertRules(a.id,c,u(a.rules,c,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,fg(this,function(){throw fc(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=p0),this.name+t.hash},n}(),r4=function(n){return n>="A"&&n<="Z"};function Ab(n){for(var t="",r=0;r<n.length;r++){var a=n[r];if(r===1&&a==="-"&&n[0]==="-")return n;r4(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var w2=function(n){return n==null||n===!1||n===""},S2=function(n){var t,r,a=[];for(var s in n){var u=n[s];n.hasOwnProperty(s)&&!w2(u)&&(Array.isArray(u)&&u.isCss||tl(u)?a.push("".concat(Ab(s),":"),u,";"):Xu(u)?a.push.apply(a,Ad(Ad(["".concat(s," {")],S2(u),!1),["}"],!1)):a.push("".concat(Ab(s),": ").concat((t=s,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in AC||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function Os(n,t,r,a){if(w2(n))return[];if(cg(n))return[".".concat(n.styledComponentId)];if(tl(n)){if(!tl(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var s=n(t);return Os(s,t,r,a)}var u;return n instanceof i4?r?(n.inject(r,a),[n.getName(a)]):[n]:Xu(n)?S2(n):Array.isArray(n)?Array.prototype.concat.apply(eh,n.map(function(c){return Os(c,t,r,a)})):[n.toString()]}function a4(n){for(var t=0;t<n.length;t+=1){var r=n[t];if(tl(r)&&!cg(r))return!1}return!0}var s4=h2(th),o4=function(){function n(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&a4(t),this.componentId=r,this.baseHash=zo(s4,r),this.baseStyle=a,x2.registerId(r)}return n.prototype.generateAndInjectStyles=function(t,r,a){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=Ts(s,this.staticRulesId);else{var u=wb(Os(this.rules,t,r,a)),c=d0(zo(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,c)){var f=a(u,".".concat(c),void 0,this.componentId);r.insertRules(this.componentId,c,f)}s=Ts(s,c),this.staticRulesId=c}else{for(var h=zo(this.baseHash,a.hash),p="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")p+=y;else if(y){var x=wb(Os(y,t,r,a));h=zo(h,x+g),p+=x}}if(p){var v=d0(h>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,a(p,".".concat(v),void 0,this.componentId)),s=Ts(s,v)}}return s},n}(),T2=Zo.createContext(void 0);T2.Consumer;var Em={};function l4(n,t,r){var a=cg(n),s=n,u=!Tm(n),c=t.attrs,f=c===void 0?eh:c,h=t.componentId,p=h===void 0?function(j,D){var N=typeof j!="string"?"sc":yb(j);Em[N]=(Em[N]||0)+1;var z="".concat(N,"-").concat(jC(th+N+Em[N]));return D?"".concat(D,"-").concat(z):z}(t.displayName,t.parentComponentId):h,g=t.displayName,y=g===void 0?function(j){return Tm(j)?"styled.".concat(j):"Styled(".concat(zC(j),")")}(n):g,x=t.displayName&&t.componentId?"".concat(yb(t.displayName),"-").concat(t.componentId):t.componentId||p,v=a&&s.attrs?s.attrs.concat(f).filter(Boolean):f,_=t.shouldForwardProp;if(a&&s.shouldForwardProp){var S=s.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;_=function(j,D){return S(j,D)&&C(j,D)}}else _=S}var A=new o4(r,x,a?s.componentStyle:void 0);function M(j,D){return function(N,z,B){var X=N.attrs,Z=N.componentStyle,ot=N.defaultProps,tt=N.foldedComponentIds,wt=N.styledComponentId,pt=N.target,gt=Zo.useContext(T2),Y=Eb(),$=N.shouldForwardProp||Y.shouldForwardProp,J=MC(z,gt,ot)||Jo,at=function(mt,st,Ot){for(var Et,Ft=In(In({},st),{className:void 0,theme:Ot}),gn=0;gn<mt.length;gn+=1){var pe=tl(Et=mt[gn])?Et(Ft):Et;for(var ie in pe)Ft[ie]=ie==="className"?Ts(Ft[ie],pe[ie]):ie==="style"?In(In({},Ft[ie]),pe[ie]):pe[ie]}return st.className&&(Ft.className=Ts(Ft.className,st.className)),Ft}(X,z,J),T=at.as||pt,K={};for(var et in at)at[et]===void 0||et[0]==="$"||et==="as"||et==="theme"&&at.theme===J||(et==="forwardedAs"?K.as=at.forwardedAs:$&&!$(et,T)||(K[et]=at[et]));var it=function(mt,st){var Ot=Eb(),Et=mt.generateAndInjectStyles(st,Ot.styleSheet,Ot.stylis);return Et}(Z,at),rt=Ts(tt,wt);return it&&(rt+=" "+it),at.className&&(rt+=" "+at.className),K[Tm(T)&&!f2.has(T)?"class":"className"]=rt,B&&(K.ref=B),k.createElement(T,K)}(R,j,D)}M.displayName=y;var R=Zo.forwardRef(M);return R.attrs=v,R.componentStyle=A,R.displayName=y,R.shouldForwardProp=_,R.foldedComponentIds=a?Ts(s.foldedComponentIds,s.styledComponentId):"",R.styledComponentId=x,R.target=a?s.target:n,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=a?function(D){for(var N=[],z=1;z<arguments.length;z++)N[z-1]=arguments[z];for(var B=0,X=N;B<X.length;B++)h0(D,X[B],!0);return D}({},s.defaultProps,j):j}}),fg(R,function(){return".".concat(R.styledComponentId)}),u&&y2(R,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function Cb(n,t){for(var r=[n[0]],a=0,s=t.length;a<s;a+=1)r.push(t[a],n[a+1]);return r}var Mb=function(n){return Object.assign(n,{isCss:!0})};function u4(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(tl(n)||Xu(n))return Mb(Os(Cb(eh,Ad([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Os(a):Mb(Os(Cb(a,t)))}function m0(n,t,r){if(r===void 0&&(r=Jo),!t)throw fc(1,t);var a=function(s){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return n(t,r,u4.apply(void 0,Ad([s],u,!1)))};return a.attrs=function(s){return m0(n,t,In(In({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},a.withConfig=function(s){return m0(n,t,In(In({},r),s))},a}var E2=function(n){return m0(l4,n)},P=E2;f2.forEach(function(n){P[n]=E2(n)});const c4=P.div`
  width: 80%;
  height: 2px;
  margin: 10px auto 0;

  background: linear-gradient(
    90deg,
    transparent,
    ${({color:n})=>n==="gray"?"var(--primary-gray)":"var(--primary-color)"},
    transparent
  );
`,A2=({color:n="primary"})=>w.jsx(c4,{color:n}),dg=k.createContext({});function hg(n){const t=k.useRef(null);return t.current===null&&(t.current=n()),t.current}const pg=typeof window<"u",C2=pg?k.useLayoutEffect:k.useEffect,nh=k.createContext(null),mg=k.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class f4 extends k.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const a=r.offsetParent,s=a instanceof HTMLElement&&a.offsetWidth||0,u=this.props.sizeRef.current;u.height=r.offsetHeight||0,u.width=r.offsetWidth||0,u.top=r.offsetTop,u.left=r.offsetLeft,u.right=s-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function d4({children:n,isPresent:t,anchorX:r}){const a=k.useId(),s=k.useRef(null),u=k.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=k.useContext(mg);return k.useInsertionEffect(()=>{const{width:f,height:h,top:p,left:g,right:y}=u.current;if(t||!s.current||!f||!h)return;const x=r==="left"?`left: ${g}`:`right: ${y}`;s.current.dataset.motionPopId=a;const v=document.createElement("style");return c&&(v.nonce=c),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${x}px !important;
            top: ${p}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[t]),w.jsx(f4,{isPresent:t,childRef:s,sizeRef:u,children:k.cloneElement(n,{ref:s})})}const h4=({children:n,initial:t,isPresent:r,onExitComplete:a,custom:s,presenceAffectsLayout:u,mode:c,anchorX:f})=>{const h=hg(p4),p=k.useId(),g=k.useCallback(x=>{h.set(x,!0);for(const v of h.values())if(!v)return;a&&a()},[h,a]),y=k.useMemo(()=>({id:p,initial:t,isPresent:r,custom:s,onExitComplete:g,register:x=>(h.set(x,!1),()=>h.delete(x))}),u?[Math.random(),g]:[r,g]);return k.useMemo(()=>{h.forEach((x,v)=>h.set(v,!1))},[r]),k.useEffect(()=>{!r&&!h.size&&a&&a()},[r]),c==="popLayout"&&(n=w.jsx(d4,{isPresent:r,anchorX:f,children:n})),w.jsx(nh.Provider,{value:y,children:n})};function p4(){return new Map}function M2(n=!0){const t=k.useContext(nh);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:a,register:s}=t,u=k.useId();k.useEffect(()=>{if(n)return s(u)},[n]);const c=k.useCallback(()=>n&&a&&a(u),[u,a,n]);return!r&&a?[!1,c]:[!0]}const Df=n=>n.key||"";function Rb(n){const t=[];return k.Children.forEach(n,r=>{k.isValidElement(r)&&t.push(r)}),t}const Dd=({children:n,custom:t,initial:r=!0,onExitComplete:a,presenceAffectsLayout:s=!0,mode:u="sync",propagate:c=!1,anchorX:f="left"})=>{const[h,p]=M2(c),g=k.useMemo(()=>Rb(n),[n]),y=c&&!h?[]:g.map(Df),x=k.useRef(!0),v=k.useRef(g),_=hg(()=>new Map),[S,C]=k.useState(g),[A,M]=k.useState(g);C2(()=>{x.current=!1,v.current=g;for(let D=0;D<A.length;D++){const N=Df(A[D]);y.includes(N)?_.delete(N):_.get(N)!==!0&&_.set(N,!1)}},[A,y.length,y.join("-")]);const R=[];if(g!==S){let D=[...g];for(let N=0;N<A.length;N++){const z=A[N],B=Df(z);y.includes(B)||(D.splice(N,0,z),R.push(z))}return u==="wait"&&R.length&&(D=R),M(Rb(D)),C(g),null}const{forceRender:j}=k.useContext(dg);return w.jsx(w.Fragment,{children:A.map(D=>{const N=Df(D),z=c&&!h?!1:g===A||y.includes(N),B=()=>{if(_.has(N))_.set(N,!0);else return;let X=!0;_.forEach(Z=>{Z||(X=!1)}),X&&(j==null||j(),M(v.current),c&&(p==null||p()),a&&a())};return w.jsx(h4,{isPresent:z,initial:!x.current||r?void 0:!1,custom:t,presenceAffectsLayout:s,mode:u,onExitComplete:z?void 0:B,anchorX:f,children:D},N)})})};function gg(n,t){n.indexOf(t)===-1&&n.push(t)}function yg(n,t){const r=n.indexOf(t);r>-1&&n.splice(r,1)}let R2=()=>{};const m4={useManualTiming:!1};function vg(n){let t;return()=>(t===void 0&&(t=n()),t)}const qi=n=>n,qu=(n,t,r)=>{const a=t-n;return a===0?1:(r-n)/a};class xg{constructor(){this.subscriptions=[]}add(t){return gg(this.subscriptions,t),()=>yg(this.subscriptions,t)}notify(t,r,a){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,r,a);else for(let u=0;u<s;u++){const c=this.subscriptions[u];c&&c(t,r,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const xr=n=>n*1e3,br=n=>n/1e3;function D2(n,t){return t?n*(1e3/t):0}const g4=vg(()=>window.ScrollTimeline!==void 0);class y4{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,r){for(let a=0;a<this.animations.length;a++)this.animations[a][t]=r}attachTimeline(t,r){const a=this.animations.map(s=>{if(g4()&&s.attachTimeline)return s.attachTimeline(t);if(typeof r=="function")return r(s)});return()=>{a.forEach((s,u)=>{s&&s(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let r=0;r<this.animations.length;r++)t=Math.max(t,this.animations[r].duration);return t}runAll(t){this.animations.forEach(r=>r[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class v4 extends y4{then(t,r){return this.finished.finally(t).then(()=>{})}}const Db={value:null},bg=n=>Array.isArray(n)&&typeof n[0]=="number",x4={};function b4(n,t){const r=vg(n);return()=>x4[t]??r()}const Fu=b4(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),O2=(n,t,r=10)=>{let a="";const s=Math.max(Math.round(t/r),2);for(let u=0;u<s;u++)a+=n(u/(s-1))+", ";return`linear(${a.substring(0,a.length-2)})`},yu=([n,t,r,a])=>`cubic-bezier(${n}, ${t}, ${r}, ${a})`,g0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:yu([0,.65,.55,1]),circOut:yu([.55,0,1,.45]),backIn:yu([.31,.01,.66,-.59]),backOut:yu([.33,1.53,.69,.99])};function j2(n,t){if(n)return typeof n=="function"&&Fu()?O2(n,t):bg(n)?yu(n):Array.isArray(n)?n.map(r=>j2(r,t)||g0.easeOut):g0[n]}function _4(n,t,r,{delay:a=0,duration:s=300,repeat:u=0,repeatType:c="loop",ease:f="easeInOut",times:h}={},p=void 0){const g={[t]:r};h&&(g.offset=h);const y=j2(f,s);return Array.isArray(y)&&(g.easing=y),n.animate(g,{delay:a,duration:s,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal",pseudoElement:p})}function _g(n){return typeof n=="function"&&"applyToOptions"in n}function wg(n,t){return(n==null?void 0:n[t])??(n==null?void 0:n.default)??n}const Od=2e4;function Sg(n){let t=0;const r=50;let a=n.next(t);for(;!a.done&&t<Od;)t+=r,a=n.next(t);return t>=Od?1/0:t}function w4(n,t=100,r){const a=r({...n,keyframes:[0,t]}),s=Math.min(Sg(a),Od);return{type:"keyframes",ease:u=>a.next(s*u).value/t,duration:br(s)}}function z2(n){return!!(typeof n=="function"&&Fu()||!n||typeof n=="string"&&(n in g0||Fu())||bg(n)||Array.isArray(n)&&n.every(z2))}function Ob(n,t){n.timeline=t,n.onfinish=null}const Of=["read","resolveKeyframes","update","preRender","render","postRender"];function S4(n,t){let r=new Set,a=new Set,s=!1,u=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1},h=0;function p(y){c.has(y)&&(g.schedule(y),n()),h++,y(f)}const g={schedule:(y,x=!1,v=!1)=>{const S=v&&s?r:a;return x&&c.add(y),S.has(y)||S.add(y),y},cancel:y=>{a.delete(y),c.delete(y)},process:y=>{if(f=y,s){u=!0;return}s=!0,[r,a]=[a,r],r.forEach(p),t&&Db.value&&Db.value.frameloop[t].push(h),h=0,r.clear(),s=!1,u&&(u=!1,g.process(y))}};return g}const T4=40;function k2(n,t){let r=!1,a=!0;const s={delta:0,timestamp:0,isProcessing:!1},u=()=>r=!0,c=Of.reduce((A,M)=>(A[M]=S4(u,t?M:void 0),A),{}),{read:f,resolveKeyframes:h,update:p,preRender:g,render:y,postRender:x}=c,v=()=>{const A=performance.now();r=!1,s.delta=a?1e3/60:Math.max(Math.min(A-s.timestamp,T4),1),s.timestamp=A,s.isProcessing=!0,f.process(s),h.process(s),p.process(s),g.process(s),y.process(s),x.process(s),s.isProcessing=!1,r&&t&&(a=!1,n(v))},_=()=>{r=!0,a=!0,s.isProcessing||n(v)};return{schedule:Of.reduce((A,M)=>{const R=c[M];return A[M]=(j,D=!1,N=!1)=>(r||_(),R.schedule(j,D,N)),A},{}),cancel:A=>{for(let M=0;M<Of.length;M++)c[Of[M]].cancel(A)},state:s,steps:c}}const{schedule:he,cancel:Xa,state:hn,steps:Am}=k2(typeof requestAnimationFrame<"u"?requestAnimationFrame:qi,!0),{schedule:Tg}=k2(queueMicrotask,!1);let dd;function E4(){dd=void 0}const _r={now:()=>(dd===void 0&&_r.set(hn.isProcessing||m4.useManualTiming?hn.timestamp:performance.now()),dd),set:n=>{dd=n,queueMicrotask(E4)}},rr={x:!1,y:!1};function L2(){return rr.x||rr.y}function A4(n){return n==="x"||n==="y"?rr[n]?null:(rr[n]=!0,()=>{rr[n]=!1}):rr.x||rr.y?null:(rr.x=rr.y=!0,()=>{rr.x=rr.y=!1})}function C4(n,t,r){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const s=document.querySelectorAll(n);return s?Array.from(s):[]}return Array.from(n)}function N2(n,t){const r=C4(n),a=new AbortController,s={passive:!0,...t,signal:a.signal};return[r,s,()=>a.abort()]}function jb(n){return!(n.pointerType==="touch"||L2())}function M4(n,t,r={}){const[a,s,u]=N2(n,r),c=f=>{if(!jb(f))return;const{target:h}=f,p=t(h,f);if(typeof p!="function"||!h)return;const g=y=>{jb(y)&&(p(y),h.removeEventListener("pointerleave",g))};h.addEventListener("pointerleave",g,s)};return a.forEach(f=>{f.addEventListener("pointerenter",c,s)}),u}const P2=(n,t)=>t?n===t?!0:P2(n,t.parentElement):!1,Eg=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,R4=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function D4(n){return R4.has(n.tagName)||n.tabIndex!==-1}const vu=new WeakSet;function zb(n){return t=>{t.key==="Enter"&&n(t)}}function Cm(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const O4=(n,t)=>{const r=n.currentTarget;if(!r)return;const a=zb(()=>{if(vu.has(r))return;Cm(r,"down");const s=zb(()=>{Cm(r,"up")}),u=()=>Cm(r,"cancel");r.addEventListener("keyup",s,t),r.addEventListener("blur",u,t)});r.addEventListener("keydown",a,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",a),t)};function kb(n){return Eg(n)&&!L2()}function j4(n,t,r={}){const[a,s,u]=N2(n,r),c=f=>{const h=f.currentTarget;if(!kb(f)||vu.has(h))return;vu.add(h);const p=t(h,f),g=(v,_)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),!(!kb(v)||!vu.has(h))&&(vu.delete(h),typeof p=="function"&&p(v,{success:_}))},y=v=>{g(v,h===window||h===document||r.useGlobalTarget||P2(h,v.target))},x=v=>{g(v,!1)};window.addEventListener("pointerup",y,s),window.addEventListener("pointercancel",x,s)};return a.forEach(f=>{(r.useGlobalTarget?window:f).addEventListener("pointerdown",c,s),f instanceof HTMLElement&&(f.addEventListener("focus",p=>O4(p,s)),!D4(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),u}const Lb=30,z4=n=>!isNaN(parseFloat(n));class k4{constructor(t,r={}){this.version="12.6.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,s=!0)=>{const u=_r.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=r.owner}setCurrent(t){this.current=t,this.updatedAt=_r.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=z4(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new xg);const a=this.events[t].add(r);return t==="change"?()=>{a(),he.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,a){this.set(r),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,r=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=_r.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Lb)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Lb);return D2(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function $u(n,t){return new k4(n,t)}const V2=k.createContext({strict:!1}),Nb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},el={};for(const n in Nb)el[n]={isEnabled:t=>Nb[n].some(r=>!!t[r])};function L4(n){for(const t in n)el[t]={...el[t],...n[t]}}const N4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function jd(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||N4.has(n)}let B2=n=>!jd(n);function P4(n){n&&(B2=t=>t.startsWith("on")?!jd(t):n(t))}try{P4(require("@emotion/is-prop-valid").default)}catch{}function V4(n,t,r){const a={};for(const s in n)s==="values"&&typeof n.values=="object"||(B2(s)||r===!0&&jd(s)||!t&&!jd(s)||n.draggable&&s.startsWith("onDrag"))&&(a[s]=n[s]);return a}function B4(n){if(typeof Proxy>"u")return n;const t=new Map,r=(...a)=>n(...a);return new Proxy(r,{get:(a,s)=>s==="create"?n:(t.has(s)||t.set(s,n(s)),t.get(s))})}const ih=k.createContext({});function rh(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Ku(n){return typeof n=="string"||Array.isArray(n)}const Ag=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cg=["initial",...Ag];function ah(n){return rh(n.animate)||Cg.some(t=>Ku(n[t]))}function U2(n){return!!(ah(n)||n.variants)}function U4(n,t){if(ah(n)){const{initial:r,animate:a}=n;return{initial:r===!1||Ku(r)?r:void 0,animate:Ku(a)?a:void 0}}return n.inherit!==!1?t:{}}function H4(n){const{initial:t,animate:r}=U4(n,k.useContext(ih));return k.useMemo(()=>({initial:t,animate:r}),[Pb(t),Pb(r)])}function Pb(n){return Array.isArray(n)?n.join(" "):n}const Y4=Symbol.for("motionComponentSymbol");function ko(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function G4(n,t,r){return k.useCallback(a=>{a&&n.onMount&&n.onMount(a),t&&(a?t.mount(a):t.unmount()),r&&(typeof r=="function"?r(a):ko(r)&&(r.current=a))},[t])}const Mg=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),X4="framerAppearId",H2="data-"+Mg(X4),Y2=k.createContext({});function q4(n,t,r,a,s){var S,C;const{visualElement:u}=k.useContext(ih),c=k.useContext(V2),f=k.useContext(nh),h=k.useContext(mg).reducedMotion,p=k.useRef(null);a=a||c.renderer,!p.current&&a&&(p.current=a(n,{visualState:t,parent:u,props:r,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:h}));const g=p.current,y=k.useContext(Y2);g&&!g.projection&&s&&(g.type==="html"||g.type==="svg")&&F4(p.current,r,s,y);const x=k.useRef(!1);k.useInsertionEffect(()=>{g&&x.current&&g.update(r,f)});const v=r[H2],_=k.useRef(!!v&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,v))&&((C=window.MotionHasOptimisedAnimation)==null?void 0:C.call(window,v)));return C2(()=>{g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),Tg.render(g.render),_.current&&g.animationState&&g.animationState.animateChanges())}),k.useEffect(()=>{g&&(!_.current&&g.animationState&&g.animationState.animateChanges(),_.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)==null||A.call(window,v)}),_.current=!1))}),g}function F4(n,t,r,a){const{layoutId:s,layout:u,drag:c,dragConstraints:f,layoutScroll:h,layoutRoot:p}=t;n.projection=new r(n.latestValues,t["data-framer-portal-id"]?void 0:G2(n.parent)),n.projection.setOptions({layoutId:s,layout:u,alwaysMeasureLayout:!!c||f&&ko(f),visualElement:n,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,layoutScroll:h,layoutRoot:p})}function G2(n){if(n)return n.options.allowProjection!==!1?n.projection:G2(n.parent)}function $4({preloadedFeatures:n,createVisualElement:t,useRender:r,useVisualState:a,Component:s}){n&&L4(n);function u(f,h){let p;const g={...k.useContext(mg),...f,layoutId:K4(f)},{isStatic:y}=g,x=H4(f),v=a(f,y);if(!y&&pg){Z4();const _=Q4(g);p=_.MeasureLayout,x.visualElement=q4(s,v,g,t,_.ProjectionNode)}return w.jsxs(ih.Provider,{value:x,children:[p&&x.visualElement?w.jsx(p,{visualElement:x.visualElement,...g}):null,r(s,f,G4(v,x.visualElement,h),v,y,x.visualElement)]})}u.displayName=`motion.${typeof s=="string"?s:`create(${s.displayName??s.name??""})`}`;const c=k.forwardRef(u);return c[Y4]=s,c}function K4({layoutId:n}){const t=k.useContext(dg).id;return t&&n!==void 0?t+"-"+n:n}function Z4(n,t){k.useContext(V2).strict}function Q4(n){const{drag:t,layout:r}=el;if(!t&&!r)return{};const a={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const X2=n=>t=>typeof t=="string"&&t.startsWith(n),Rg=X2("--"),I4=X2("var(--"),Dg=n=>I4(n)?W4.test(n.split("/*")[0].trim()):!1,W4=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Zu={};function J4(n){for(const t in n)Zu[t]=n[t],Rg(t)&&(Zu[t].isCSSVariable=!0)}const cl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Gs=new Set(cl);function q2(n,{layout:t,layoutId:r}){return Gs.has(n)||n.startsWith("origin")||(t||r!==void 0)&&(!!Zu[n]||n==="opacity")}const En=n=>!!(n&&n.getVelocity),F2=(n,t)=>t&&typeof n=="number"?t.transform(n):n,ra=(n,t,r)=>r>t?t:r<n?n:r,fl={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Qu={...fl,transform:n=>ra(0,1,n)},jf={...fl,default:1},dc=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),ka=dc("deg"),wr=dc("%"),_t=dc("px"),tM=dc("vh"),eM=dc("vw"),Vb={...wr,parse:n=>wr.parse(n)/100,transform:n=>wr.transform(n*100)},nM={borderWidth:_t,borderTopWidth:_t,borderRightWidth:_t,borderBottomWidth:_t,borderLeftWidth:_t,borderRadius:_t,radius:_t,borderTopLeftRadius:_t,borderTopRightRadius:_t,borderBottomRightRadius:_t,borderBottomLeftRadius:_t,width:_t,maxWidth:_t,height:_t,maxHeight:_t,top:_t,right:_t,bottom:_t,left:_t,padding:_t,paddingTop:_t,paddingRight:_t,paddingBottom:_t,paddingLeft:_t,margin:_t,marginTop:_t,marginRight:_t,marginBottom:_t,marginLeft:_t,backgroundPositionX:_t,backgroundPositionY:_t},iM={rotate:ka,rotateX:ka,rotateY:ka,rotateZ:ka,scale:jf,scaleX:jf,scaleY:jf,scaleZ:jf,skew:ka,skewX:ka,skewY:ka,distance:_t,translateX:_t,translateY:_t,translateZ:_t,x:_t,y:_t,z:_t,perspective:_t,transformPerspective:_t,opacity:Qu,originX:Vb,originY:Vb,originZ:_t},Bb={...fl,transform:Math.round},Og={...nM,...iM,zIndex:Bb,size:_t,fillOpacity:Qu,strokeOpacity:Qu,numOctaves:Bb},rM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},aM=cl.length;function sM(n,t,r){let a="",s=!0;for(let u=0;u<aM;u++){const c=cl[u],f=n[c];if(f===void 0)continue;let h=!0;if(typeof f=="number"?h=f===(c.startsWith("scale")?1:0):h=parseFloat(f)===0,!h||r){const p=F2(f,Og[c]);if(!h){s=!1;const g=rM[c]||c;a+=`${g}(${p}) `}r&&(t[c]=p)}}return a=a.trim(),r?a=r(t,s?"":a):s&&(a="none"),a}function jg(n,t,r){const{style:a,vars:s,transformOrigin:u}=n;let c=!1,f=!1;for(const h in t){const p=t[h];if(Gs.has(h)){c=!0;continue}else if(Rg(h)){s[h]=p;continue}else{const g=F2(p,Og[h]);h.startsWith("origin")?(f=!0,u[h]=g):a[h]=g}}if(t.transform||(c||r?a.transform=sM(t,n.transform,r):a.transform&&(a.transform="none")),f){const{originX:h="50%",originY:p="50%",originZ:g=0}=u;a.transformOrigin=`${h} ${p} ${g}`}}const zg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function $2(n,t,r){for(const a in t)!En(t[a])&&!q2(a,r)&&(n[a]=t[a])}function oM({transformTemplate:n},t){return k.useMemo(()=>{const r=zg();return jg(r,t,n),Object.assign({},r.vars,r.style)},[t])}function lM(n,t){const r=n.style||{},a={};return $2(a,r,n),Object.assign(a,oM(n,t)),a}function uM(n,t){const r={},a=lM(n,t);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=a,r}const cM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kg(n){return typeof n!="string"||n.includes("-")?!1:!!(cM.indexOf(n)>-1||/[A-Z]/u.test(n))}const fM={offset:"stroke-dashoffset",array:"stroke-dasharray"},dM={offset:"strokeDashoffset",array:"strokeDasharray"};function hM(n,t,r=1,a=0,s=!0){n.pathLength=1;const u=s?fM:dM;n[u.offset]=_t.transform(-a);const c=_t.transform(t),f=_t.transform(r);n[u.array]=`${c} ${f}`}function Ub(n,t,r){return typeof n=="string"?n:_t.transform(t+r*n)}function pM(n,t,r){const a=Ub(t,n.x,n.width),s=Ub(r,n.y,n.height);return`${a} ${s}`}function Lg(n,{attrX:t,attrY:r,attrScale:a,originX:s,originY:u,pathLength:c,pathSpacing:f=1,pathOffset:h=0,...p},g,y){if(jg(n,p,y),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:v,dimensions:_}=n;x.transform&&(_&&(v.transform=x.transform),delete x.transform),_&&(s!==void 0||u!==void 0||v.transform)&&(v.transformOrigin=pM(_,s!==void 0?s:.5,u!==void 0?u:.5)),t!==void 0&&(x.x=t),r!==void 0&&(x.y=r),a!==void 0&&(x.scale=a),c!==void 0&&hM(x,c,f,h,!1)}const K2=()=>({...zg(),attrs:{}}),Ng=n=>typeof n=="string"&&n.toLowerCase()==="svg";function mM(n,t,r,a){const s=k.useMemo(()=>{const u=K2();return Lg(u,t,Ng(a),n.transformTemplate),{...u.attrs,style:{...u.style}}},[t]);if(n.style){const u={};$2(u,n.style,n),s.style={...u,...s.style}}return s}function gM(n=!1){return(r,a,s,{latestValues:u},c)=>{const h=(kg(r)?mM:uM)(a,u,c,r),p=V4(a,typeof r=="string",n),g=r!==k.Fragment?{...p,...h,ref:s}:{},{children:y}=a,x=k.useMemo(()=>En(y)?y.get():y,[y]);return k.createElement(r,{...g,children:x})}}function Hb(n){const t=[{},{}];return n==null||n.values.forEach((r,a)=>{t[0][a]=r.get(),t[1][a]=r.getVelocity()}),t}function Pg(n,t,r,a){if(typeof t=="function"){const[s,u]=Hb(a);t=t(r!==void 0?r:n.custom,s,u)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[s,u]=Hb(a);t=t(r!==void 0?r:n.custom,s,u)}return t}const y0=n=>Array.isArray(n),yM=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),vM=n=>y0(n)?n[n.length-1]||0:n;function hd(n){const t=En(n)?n.get():n;return yM(t)?t.toValue():t}function xM({scrapeMotionValuesFromProps:n,createRenderState:t,onUpdate:r},a,s,u){const c={latestValues:bM(a,s,u,n),renderState:t()};return r&&(c.onMount=f=>r({props:a,current:f,...c}),c.onUpdate=f=>r(f)),c}const Z2=n=>(t,r)=>{const a=k.useContext(ih),s=k.useContext(nh),u=()=>xM(n,t,a,s);return r?u():hg(u)};function bM(n,t,r,a){const s={},u=a(n,{});for(const x in u)s[x]=hd(u[x]);let{initial:c,animate:f}=n;const h=ah(n),p=U2(n);t&&p&&!h&&n.inherit!==!1&&(c===void 0&&(c=t.initial),f===void 0&&(f=t.animate));let g=r?r.initial===!1:!1;g=g||c===!1;const y=g?f:c;if(y&&typeof y!="boolean"&&!rh(y)){const x=Array.isArray(y)?y:[y];for(let v=0;v<x.length;v++){const _=Pg(n,x[v]);if(_){const{transitionEnd:S,transition:C,...A}=_;for(const M in A){let R=A[M];if(Array.isArray(R)){const j=g?R.length-1:0;R=R[j]}R!==null&&(s[M]=R)}for(const M in S)s[M]=S[M]}}}return s}function Vg(n,t,r){var u;const{style:a}=n,s={};for(const c in a)(En(a[c])||t.style&&En(t.style[c])||q2(c,n)||((u=r==null?void 0:r.getValue(c))==null?void 0:u.liveStyle)!==void 0)&&(s[c]=a[c]);return s}const _M={useVisualState:Z2({scrapeMotionValuesFromProps:Vg,createRenderState:zg})};function Q2(n,t){try{t.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}function I2(n,{style:t,vars:r},a,s){Object.assign(n.style,t,s&&s.getProjectionStyles(a));for(const u in r)n.style.setProperty(u,r[u])}const W2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function J2(n,t,r,a){I2(n,t,void 0,a);for(const s in t.attrs)n.setAttribute(W2.has(s)?s:Mg(s),t.attrs[s])}function tS(n,t,r){const a=Vg(n,t,r);for(const s in n)if(En(n[s])||En(t[s])){const u=cl.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;a[u]=n[s]}return a}const Yb=["x","y","width","height","cx","cy","r"],wM={useVisualState:Z2({scrapeMotionValuesFromProps:tS,createRenderState:K2,onUpdate:({props:n,prevProps:t,current:r,renderState:a,latestValues:s})=>{if(!r)return;let u=!!n.drag;if(!u){for(const f in s)if(Gs.has(f)){u=!0;break}}if(!u)return;let c=!t;if(t)for(let f=0;f<Yb.length;f++){const h=Yb[f];n[h]!==t[h]&&(c=!0)}c&&he.read(()=>{Q2(r,a),he.render(()=>{Lg(a,s,Ng(r.tagName),n.transformTemplate),J2(r,a)})})}})};function SM(n,t){return function(a,{forwardMotionProps:s}={forwardMotionProps:!1}){const c={...kg(a)?wM:_M,preloadedFeatures:n,useRender:gM(s),createVisualElement:t,Component:a};return $4(c)}}function Iu(n,t,r){const a=n.getProps();return Pg(a,t,r!==void 0?r:a.custom,n)}const eS=new Set(["width","height","top","left","right","bottom",...cl]);function TM(n,t,r){n.hasValue(t)?n.getValue(t).set(r):n.addValue(t,$u(r))}function EM(n,t){const r=Iu(n,t);let{transitionEnd:a={},transition:s={},...u}=r||{};u={...u,...a};for(const c in u){const f=vM(u[c]);TM(n,c,f)}}function AM(n){return!!(En(n)&&n.add)}function v0(n,t){const r=n.getValue("willChange");if(AM(r))return r.add(t)}function nS(n){return n.props[H2]}const iS=(n,t,r)=>(((1-3*r+3*t)*n+(3*r-6*t))*n+3*t)*n,CM=1e-7,MM=12;function RM(n,t,r,a,s){let u,c,f=0;do c=t+(r-t)/2,u=iS(c,a,s)-n,u>0?r=c:t=c;while(Math.abs(u)>CM&&++f<MM);return c}function hc(n,t,r,a){if(n===t&&r===a)return qi;const s=u=>RM(u,0,1,n,r);return u=>u===0||u===1?u:iS(s(u),t,a)}const rS=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,aS=n=>t=>1-n(1-t),sS=hc(.33,1.53,.69,.99),Bg=aS(sS),oS=rS(Bg),lS=n=>(n*=2)<1?.5*Bg(n):.5*(2-Math.pow(2,-10*(n-1))),Ug=n=>1-Math.sin(Math.acos(n)),uS=aS(Ug),cS=rS(Ug),fS=n=>/^0[^.\s]+$/u.test(n);function DM(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||fS(n):!0}const Cu=n=>Math.round(n*1e5)/1e5,Hg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function OM(n){return n==null}const jM=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yg=(n,t)=>r=>!!(typeof r=="string"&&jM.test(r)&&r.startsWith(n)||t&&!OM(r)&&Object.prototype.hasOwnProperty.call(r,t)),dS=(n,t,r)=>a=>{if(typeof a!="string")return a;const[s,u,c,f]=a.match(Hg);return{[n]:parseFloat(s),[t]:parseFloat(u),[r]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},zM=n=>ra(0,255,n),Mm={...fl,transform:n=>Math.round(zM(n))},Es={test:Yg("rgb","red"),parse:dS("red","green","blue"),transform:({red:n,green:t,blue:r,alpha:a=1})=>"rgba("+Mm.transform(n)+", "+Mm.transform(t)+", "+Mm.transform(r)+", "+Cu(Qu.transform(a))+")"};function kM(n){let t="",r="",a="",s="";return n.length>5?(t=n.substring(1,3),r=n.substring(3,5),a=n.substring(5,7),s=n.substring(7,9)):(t=n.substring(1,2),r=n.substring(2,3),a=n.substring(3,4),s=n.substring(4,5),t+=t,r+=r,a+=a,s+=s),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(a,16),alpha:s?parseInt(s,16)/255:1}}const x0={test:Yg("#"),parse:kM,transform:Es.transform},Lo={test:Yg("hsl","hue"),parse:dS("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:r,alpha:a=1})=>"hsla("+Math.round(n)+", "+wr.transform(Cu(t))+", "+wr.transform(Cu(r))+", "+Cu(Qu.transform(a))+")"},_n={test:n=>Es.test(n)||x0.test(n)||Lo.test(n),parse:n=>Es.test(n)?Es.parse(n):Lo.test(n)?Lo.parse(n):x0.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Es.transform(n):Lo.transform(n)},LM=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function NM(n){var t,r;return isNaN(n)&&typeof n=="string"&&(((t=n.match(Hg))==null?void 0:t.length)||0)+(((r=n.match(LM))==null?void 0:r.length)||0)>0}const hS="number",pS="color",PM="var",VM="var(",Gb="${}",BM=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Wu(n){const t=n.toString(),r=[],a={color:[],number:[],var:[]},s=[];let u=0;const f=t.replace(BM,h=>(_n.test(h)?(a.color.push(u),s.push(pS),r.push(_n.parse(h))):h.startsWith(VM)?(a.var.push(u),s.push(PM),r.push(h)):(a.number.push(u),s.push(hS),r.push(parseFloat(h))),++u,Gb)).split(Gb);return{values:r,split:f,indexes:a,types:s}}function mS(n){return Wu(n).values}function gS(n){const{split:t,types:r}=Wu(n),a=t.length;return s=>{let u="";for(let c=0;c<a;c++)if(u+=t[c],s[c]!==void 0){const f=r[c];f===hS?u+=Cu(s[c]):f===pS?u+=_n.transform(s[c]):u+=s[c]}return u}}const UM=n=>typeof n=="number"?0:n;function HM(n){const t=mS(n);return gS(n)(t.map(UM))}const qa={test:NM,parse:mS,createTransformer:gS,getAnimatableNone:HM},YM=new Set(["brightness","contrast","saturate","opacity"]);function GM(n){const[t,r]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[a]=r.match(Hg)||[];if(!a)return n;const s=r.replace(a,"");let u=YM.has(t)?1:0;return a!==r&&(u*=100),t+"("+u+s+")"}const XM=/\b([a-z-]*)\(.*?\)/gu,b0={...qa,getAnimatableNone:n=>{const t=n.match(XM);return t?t.map(GM).join(" "):n}},qM={...Og,color:_n,backgroundColor:_n,outlineColor:_n,fill:_n,stroke:_n,borderColor:_n,borderTopColor:_n,borderRightColor:_n,borderBottomColor:_n,borderLeftColor:_n,filter:b0,WebkitFilter:b0},yS=n=>qM[n];function vS(n,t){let r=yS(n);return r!==b0&&(r=qa),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const FM=new Set(["auto","none","0"]);function $M(n,t,r){let a=0,s;for(;a<n.length&&!s;){const u=n[a];typeof u=="string"&&!FM.has(u)&&Wu(u).values.length&&(s=n[a]),a++}if(s&&r)for(const u of t)n[u]=vS(r,s)}const As=n=>n*180/Math.PI,_0=n=>{const t=As(Math.atan2(n[1],n[0]));return w0(t)},KM={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:_0,rotateZ:_0,skewX:n=>As(Math.atan(n[1])),skewY:n=>As(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},w0=n=>(n=n%360,n<0&&(n+=360),n),Xb=_0,qb=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Fb=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),ZM={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:qb,scaleY:Fb,scale:n=>(qb(n)+Fb(n))/2,rotateX:n=>w0(As(Math.atan2(n[6],n[5]))),rotateY:n=>w0(As(Math.atan2(-n[2],n[0]))),rotateZ:Xb,rotate:Xb,skewX:n=>As(Math.atan(n[4])),skewY:n=>As(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function $b(n){return n.includes("scale")?1:0}function S0(n,t){if(!n||n==="none")return $b(t);const r=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,s;if(r)a=ZM,s=r;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=KM,s=f}if(!s)return $b(t);const u=a[t],c=s[1].split(",").map(IM);return typeof u=="function"?u(c):c[u]}const QM=(n,t)=>{const{transform:r="none"}=getComputedStyle(n);return S0(r,t)};function IM(n){return parseFloat(n.trim())}const Kb=n=>n===fl||n===_t,WM=new Set(["x","y","z"]),JM=cl.filter(n=>!WM.has(n));function tR(n){const t=[];return JM.forEach(r=>{const a=n.getValue(r);a!==void 0&&(t.push([r,a.get()]),a.set(r.startsWith("scale")?1:0))}),t}const nl={width:({x:n},{paddingLeft:t="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(t)-parseFloat(r),height:({y:n},{paddingTop:t="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(t)-parseFloat(r),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:(n,{transform:t})=>S0(t,"x"),y:(n,{transform:t})=>S0(t,"y")};nl.translateX=nl.x;nl.translateY=nl.y;const js=new Set;let T0=!1,E0=!1;function xS(){if(E0){const n=Array.from(js).filter(a=>a.needsMeasurement),t=new Set(n.map(a=>a.element)),r=new Map;t.forEach(a=>{const s=tR(a);s.length&&(r.set(a,s),a.render())}),n.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const s=r.get(a);s&&s.forEach(([u,c])=>{var f;(f=a.getValue(u))==null||f.set(c)})}),n.forEach(a=>a.measureEndState()),n.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}E0=!1,T0=!1,js.forEach(n=>n.complete()),js.clear()}function bS(){js.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(E0=!0)})}function eR(){bS(),xS()}class Gg{constructor(t,r,a,s,u,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=r,this.name=a,this.motionValue=s,this.element=u,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(js.add(this),T0||(T0=!0,he.read(bS),he.resolveKeyframes(xS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:r,element:a,motionValue:s}=this;for(let u=0;u<t.length;u++)if(t[u]===null)if(u===0){const c=s==null?void 0:s.get(),f=t[t.length-1];if(c!==void 0)t[0]=c;else if(a&&r){const h=a.readValue(r,f);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=f),s&&c===void 0&&s.set(t[0])}else t[u]=t[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),js.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,js.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const _S=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),nR=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function iR(n){const t=nR.exec(n);if(!t)return[,];const[,r,a,s]=t;return[`--${r??a}`,s]}function wS(n,t,r=1){const[a,s]=iR(n);if(!a)return;const u=window.getComputedStyle(t).getPropertyValue(a);if(u){const c=u.trim();return _S(c)?parseFloat(c):c}return Dg(s)?wS(s,t,r+1):s}const SS=n=>t=>t.test(n),rR={test:n=>n==="auto",parse:n=>n},TS=[fl,_t,wr,ka,eM,tM,rR],Zb=n=>TS.find(SS(n));class ES extends Gg{constructor(t,r,a,s,u){super(t,r,a,s,u,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:r,name:a}=this;if(!r||!r.current)return;super.readKeyframes();for(let h=0;h<t.length;h++){let p=t[h];if(typeof p=="string"&&(p=p.trim(),Dg(p))){const g=wS(p,r.current);g!==void 0&&(t[h]=g),h===t.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!eS.has(a)||t.length!==2)return;const[s,u]=t,c=Zb(s),f=Zb(u);if(c!==f)if(Kb(c)&&Kb(f))for(let h=0;h<t.length;h++){const p=t[h];typeof p=="string"&&(t[h]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:r}=this,a=[];for(let s=0;s<t.length;s++)DM(t[s])&&a.push(s);a.length&&$M(t,a,r)}measureInitialState(){const{element:t,unresolvedKeyframes:r,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=nl[a](t.measureViewportBox(),window.getComputedStyle(t.current)),r[0]=this.measuredOrigin;const s=r[r.length-1];s!==void 0&&t.getValue(a,s).jump(s,!1)}measureEndState(){var f;const{element:t,name:r,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const s=t.getValue(r);s&&s.jump(this.measuredOrigin,!1);const u=a.length-1,c=a[u];a[u]=nl[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([h,p])=>{t.getValue(h).set(p)}),this.resolveNoneKeyframes()}}const Qb=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(qa.test(n)||n==="0")&&!n.startsWith("url("));function aR(n){const t=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==t)return!0}function sR(n,t,r,a){const s=n[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const u=n[n.length-1],c=Qb(s,t),f=Qb(u,t);return!c||!f?!1:aR(n)||(r==="spring"||_g(r))&&a}const oR=n=>n!==null;function sh(n,{repeat:t,repeatType:r="loop"},a){const s=n.filter(oR),u=t&&r!=="loop"&&t%2===1?0:s.length-1;return!u||a===void 0?s[u]:a}const lR=40;class AS{constructor({autoplay:t=!0,delay:r=0,type:a="keyframes",repeat:s=0,repeatDelay:u=0,repeatType:c="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=_r.now(),this.options={autoplay:t,delay:r,type:a,repeat:s,repeatDelay:u,repeatType:c,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>lR?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&eR(),this._resolved}onKeyframesResolved(t,r){this.resolvedAt=_r.now(),this.hasAttemptedResolve=!0;const{name:a,type:s,velocity:u,delay:c,onComplete:f,onUpdate:h,isGenerator:p}=this.options;if(!p&&!sR(t,a,s,u))if(c)this.options.duration=0;else{h&&h(sh(t,this.options,r)),f&&f(),this.resolveFinishedPromise();return}const g=this.initPlayback(t,r);g!==!1&&(this._resolved={keyframes:t,finalKeyframe:r,...g},this.onPostResolved())}onPostResolved(){}then(t,r){return this.currentFinishedPromise.then(t,r)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Ee=(n,t,r)=>n+(t-n)*r;function Rm(n,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(t-n)*6*r:r<1/2?t:r<2/3?n+(t-n)*(2/3-r)*6:n}function uR({hue:n,saturation:t,lightness:r,alpha:a}){n/=360,t/=100,r/=100;let s=0,u=0,c=0;if(!t)s=u=c=r;else{const f=r<.5?r*(1+t):r+t-r*t,h=2*r-f;s=Rm(h,f,n+1/3),u=Rm(h,f,n),c=Rm(h,f,n-1/3)}return{red:Math.round(s*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:a}}function zd(n,t){return r=>r>0?t:n}const Dm=(n,t,r)=>{const a=n*n,s=r*(t*t-a)+a;return s<0?0:Math.sqrt(s)},cR=[x0,Es,Lo],fR=n=>cR.find(t=>t.test(n));function Ib(n){const t=fR(n);if(!t)return!1;let r=t.parse(n);return t===Lo&&(r=uR(r)),r}const Wb=(n,t)=>{const r=Ib(n),a=Ib(t);if(!r||!a)return zd(n,t);const s={...r};return u=>(s.red=Dm(r.red,a.red,u),s.green=Dm(r.green,a.green,u),s.blue=Dm(r.blue,a.blue,u),s.alpha=Ee(r.alpha,a.alpha,u),Es.transform(s))},dR=(n,t)=>r=>t(n(r)),pc=(...n)=>n.reduce(dR),A0=new Set(["none","hidden"]);function hR(n,t){return A0.has(n)?r=>r<=0?n:t:r=>r>=1?t:n}function pR(n,t){return r=>Ee(n,t,r)}function Xg(n){return typeof n=="number"?pR:typeof n=="string"?Dg(n)?zd:_n.test(n)?Wb:yR:Array.isArray(n)?CS:typeof n=="object"?_n.test(n)?Wb:mR:zd}function CS(n,t){const r=[...n],a=r.length,s=n.map((u,c)=>Xg(u)(u,t[c]));return u=>{for(let c=0;c<a;c++)r[c]=s[c](u);return r}}function mR(n,t){const r={...n,...t},a={};for(const s in r)n[s]!==void 0&&t[s]!==void 0&&(a[s]=Xg(n[s])(n[s],t[s]));return s=>{for(const u in a)r[u]=a[u](s);return r}}function gR(n,t){const r=[],a={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const u=t.types[s],c=n.indexes[u][a[u]],f=n.values[c]??0;r[s]=f,a[u]++}return r}const yR=(n,t)=>{const r=qa.createTransformer(t),a=Wu(n),s=Wu(t);return a.indexes.var.length===s.indexes.var.length&&a.indexes.color.length===s.indexes.color.length&&a.indexes.number.length>=s.indexes.number.length?A0.has(n)&&!s.values.length||A0.has(t)&&!a.values.length?hR(n,t):pc(CS(gR(a,s),s.values),r):zd(n,t)};function MS(n,t,r){return typeof n=="number"&&typeof t=="number"&&typeof r=="number"?Ee(n,t,r):Xg(n)(n,t)}const vR=5;function RS(n,t,r){const a=Math.max(t-vR,0);return D2(r-n(a),t-a)}const je={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Jb=.001;function xR({duration:n=je.duration,bounce:t=je.bounce,velocity:r=je.velocity,mass:a=je.mass}){let s,u,c=1-t;c=ra(je.minDamping,je.maxDamping,c),n=ra(je.minDuration,je.maxDuration,br(n)),c<1?(s=p=>{const g=p*c,y=g*n,x=g-r,v=C0(p,c),_=Math.exp(-y);return Jb-x/v*_},u=p=>{const y=p*c*n,x=y*r+r,v=Math.pow(c,2)*Math.pow(p,2)*n,_=Math.exp(-y),S=C0(Math.pow(p,2),c);return(-s(p)+Jb>0?-1:1)*((x-v)*_)/S}):(s=p=>{const g=Math.exp(-p*n),y=(p-r)*n+1;return-.001+g*y},u=p=>{const g=Math.exp(-p*n),y=(r-p)*(n*n);return g*y});const f=5/n,h=_R(s,u,f);if(n=xr(n),isNaN(h))return{stiffness:je.stiffness,damping:je.damping,duration:n};{const p=Math.pow(h,2)*a;return{stiffness:p,damping:c*2*Math.sqrt(a*p),duration:n}}}const bR=12;function _R(n,t,r){let a=r;for(let s=1;s<bR;s++)a=a-n(a)/t(a);return a}function C0(n,t){return n*Math.sqrt(1-t*t)}const wR=["duration","bounce"],SR=["stiffness","damping","mass"];function t_(n,t){return t.some(r=>n[r]!==void 0)}function TR(n){let t={velocity:je.velocity,stiffness:je.stiffness,damping:je.damping,mass:je.mass,isResolvedFromDuration:!1,...n};if(!t_(n,SR)&&t_(n,wR))if(n.visualDuration){const r=n.visualDuration,a=2*Math.PI/(r*1.2),s=a*a,u=2*ra(.05,1,1-(n.bounce||0))*Math.sqrt(s);t={...t,mass:je.mass,stiffness:s,damping:u}}else{const r=xR(n);t={...t,...r,mass:je.mass},t.isResolvedFromDuration=!0}return t}function kd(n=je.visualDuration,t=je.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:a,restDelta:s}=r;const u=r.keyframes[0],c=r.keyframes[r.keyframes.length-1],f={done:!1,value:u},{stiffness:h,damping:p,mass:g,duration:y,velocity:x,isResolvedFromDuration:v}=TR({...r,velocity:-br(r.velocity||0)}),_=x||0,S=p/(2*Math.sqrt(h*g)),C=c-u,A=br(Math.sqrt(h/g)),M=Math.abs(C)<5;a||(a=M?je.restSpeed.granular:je.restSpeed.default),s||(s=M?je.restDelta.granular:je.restDelta.default);let R;if(S<1){const D=C0(A,S);R=N=>{const z=Math.exp(-S*A*N);return c-z*((_+S*A*C)/D*Math.sin(D*N)+C*Math.cos(D*N))}}else if(S===1)R=D=>c-Math.exp(-A*D)*(C+(_+A*C)*D);else{const D=A*Math.sqrt(S*S-1);R=N=>{const z=Math.exp(-S*A*N),B=Math.min(D*N,300);return c-z*((_+S*A*C)*Math.sinh(B)+D*C*Math.cosh(B))/D}}const j={calculatedDuration:v&&y||null,next:D=>{const N=R(D);if(v)f.done=D>=y;else{let z=0;S<1&&(z=D===0?xr(_):RS(R,D,N));const B=Math.abs(z)<=a,X=Math.abs(c-N)<=s;f.done=B&&X}return f.value=f.done?c:N,f},toString:()=>{const D=Math.min(Sg(j),Od),N=O2(z=>j.next(D*z).value,D,30);return D+"ms "+N},toTransition:()=>{}};return j}kd.applyToOptions=n=>{const t=w4(n,100,kd);return n.ease=Fu()?t.ease:"easeOut",n.duration=xr(t.duration),n.type="keyframes",n};function e_({keyframes:n,velocity:t=0,power:r=.8,timeConstant:a=325,bounceDamping:s=10,bounceStiffness:u=500,modifyTarget:c,min:f,max:h,restDelta:p=.5,restSpeed:g}){const y=n[0],x={done:!1,value:y},v=B=>f!==void 0&&B<f||h!==void 0&&B>h,_=B=>f===void 0?h:h===void 0||Math.abs(f-B)<Math.abs(h-B)?f:h;let S=r*t;const C=y+S,A=c===void 0?C:c(C);A!==C&&(S=A-y);const M=B=>-S*Math.exp(-B/a),R=B=>A+M(B),j=B=>{const X=M(B),Z=R(B);x.done=Math.abs(X)<=p,x.value=x.done?A:Z};let D,N;const z=B=>{v(x.value)&&(D=B,N=kd({keyframes:[x.value,_(x.value)],velocity:RS(R,B,x.value),damping:s,stiffness:u,restDelta:p,restSpeed:g}))};return z(0),{calculatedDuration:null,next:B=>{let X=!1;return!N&&D===void 0&&(X=!0,j(B),z(B)),D!==void 0&&B>=D?N.next(B-D):(!X&&j(B),x)}}}const ER=hc(.42,0,1,1),AR=hc(0,0,.58,1),DS=hc(.42,0,.58,1),CR=n=>Array.isArray(n)&&typeof n[0]!="number",MR={linear:qi,easeIn:ER,easeInOut:DS,easeOut:AR,circIn:Ug,circInOut:cS,circOut:uS,backIn:Bg,backInOut:oS,backOut:sS,anticipate:lS},n_=n=>{if(bg(n)){R2(n.length===4);const[t,r,a,s]=n;return hc(t,r,a,s)}else if(typeof n=="string")return MR[n];return n};function RR(n,t,r){const a=[],s=r||MS,u=n.length-1;for(let c=0;c<u;c++){let f=s(n[c],n[c+1]);if(t){const h=Array.isArray(t)?t[c]||qi:t;f=pc(h,f)}a.push(f)}return a}function DR(n,t,{clamp:r=!0,ease:a,mixer:s}={}){const u=n.length;if(R2(u===t.length),u===1)return()=>t[0];if(u===2&&t[0]===t[1])return()=>t[1];const c=n[0]===n[1];n[0]>n[u-1]&&(n=[...n].reverse(),t=[...t].reverse());const f=RR(t,a,s),h=f.length,p=g=>{if(c&&g<n[0])return t[0];let y=0;if(h>1)for(;y<n.length-2&&!(g<n[y+1]);y++);const x=qu(n[y],n[y+1],g);return f[y](x)};return r?g=>p(ra(n[0],n[u-1],g)):p}function OR(n,t){const r=n[n.length-1];for(let a=1;a<=t;a++){const s=qu(0,t,a);n.push(Ee(r,1,s))}}function jR(n){const t=[0];return OR(t,n.length-1),t}function zR(n,t){return n.map(r=>r*t)}function kR(n,t){return n.map(()=>t||DS).splice(0,n.length-1)}function Ld({duration:n=300,keyframes:t,times:r,ease:a="easeInOut"}){const s=CR(a)?a.map(n_):n_(a),u={done:!1,value:t[0]},c=zR(r&&r.length===t.length?r:jR(t),n),f=DR(c,t,{ease:Array.isArray(s)?s:kR(t,s)});return{calculatedDuration:n,next:h=>(u.value=f(h),u.done=h>=n,u)}}const LR=n=>{const t=({timestamp:r})=>n(r);return{start:()=>he.update(t,!0),stop:()=>Xa(t),now:()=>hn.isProcessing?hn.timestamp:_r.now()}},NR={decay:e_,inertia:e_,tween:Ld,keyframes:Ld,spring:kd},PR=n=>n/100;class qg extends AS{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:r,motionValue:a,element:s,keyframes:u}=this.options,c=(s==null?void 0:s.KeyframeResolver)||Gg,f=(h,p)=>this.onKeyframesResolved(h,p);this.resolver=new c(u,f,r,a,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:r="keyframes",repeat:a=0,repeatDelay:s=0,repeatType:u,velocity:c=0}=this.options,f=_g(r)?r:NR[r]||Ld;let h,p;f!==Ld&&typeof t[0]!="number"&&(h=pc(PR,MS(t[0],t[1])),t=[0,100]);const g=f({...this.options,keyframes:t});u==="mirror"&&(p=f({...this.options,keyframes:[...t].reverse(),velocity:-c})),g.calculatedDuration===null&&(g.calculatedDuration=Sg(g));const{calculatedDuration:y}=g,x=y+s,v=x*(a+1)-s;return{generator:g,mirroredGenerator:p,mapPercentToKeyframes:h,calculatedDuration:y,resolvedDuration:x,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,r=!1){const{resolved:a}=this;if(!a){const{keyframes:B}=this.options;return{done:!0,value:B[B.length-1]}}const{finalKeyframe:s,generator:u,mirroredGenerator:c,mapPercentToKeyframes:f,keyframes:h,calculatedDuration:p,totalDuration:g,resolvedDuration:y}=a;if(this.startTime===null)return u.next(0);const{delay:x,repeat:v,repeatType:_,repeatDelay:S,onUpdate:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-g/this.speed,this.startTime)),r?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const A=this.currentTime-x*(this.speed>=0?1:-1),M=this.speed>=0?A<0:A>g;this.currentTime=Math.max(A,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let R=this.currentTime,j=u;if(v){const B=Math.min(this.currentTime,g)/y;let X=Math.floor(B),Z=B%1;!Z&&B>=1&&(Z=1),Z===1&&X--,X=Math.min(X,v+1),!!(X%2)&&(_==="reverse"?(Z=1-Z,S&&(Z-=S/y)):_==="mirror"&&(j=c)),R=ra(0,1,Z)*y}const D=M?{done:!1,value:h[0]}:j.next(R);f&&(D.value=f(D.value));let{done:N}=D;!M&&p!==null&&(N=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return z&&s!==void 0&&(D.value=sh(h,this.options,s)),C&&C(D.value),z&&this.finish(),D}get duration(){const{resolved:t}=this;return t?br(t.calculatedDuration):0}get time(){return br(this.currentTime)}set time(t){t=xr(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const r=this.playbackSpeed!==t;this.playbackSpeed=t,r&&(this.time=br(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=LR,onPlay:r,startTime:a}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),r&&r();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=this.currentTime??0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}get finished(){return this.currentFinishedPromise}}const VR=new Set(["opacity","clipPath","filter","transform"]),BR=vg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Nd=10,UR=2e4;function HR(n){return _g(n.type)||n.type==="spring"||!z2(n.ease)}function YR(n,t){const r=new qg({...t,keyframes:n,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:n[0]};const s=[];let u=0;for(;!a.done&&u<UR;)a=r.sample(u),s.push(a.value),u+=Nd;return{times:void 0,keyframes:s,duration:u-Nd,ease:"linear"}}const OS={anticipate:lS,backInOut:oS,circInOut:cS};function GR(n){return n in OS}class i_ extends AS{constructor(t){super(t);const{name:r,motionValue:a,element:s,keyframes:u}=this.options;this.resolver=new ES(u,(c,f)=>this.onKeyframesResolved(c,f),r,a,s),this.resolver.scheduleResolve()}initPlayback(t,r){let{duration:a=300,times:s,ease:u,type:c,motionValue:f,name:h,startTime:p}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof u=="string"&&Fu()&&GR(u)&&(u=OS[u]),HR(this.options)){const{onComplete:y,onUpdate:x,motionValue:v,element:_,...S}=this.options,C=YR(t,S);t=C.keyframes,t.length===1&&(t[1]=t[0]),a=C.duration,s=C.times,u=C.ease,c="keyframes"}const g=_4(f.owner.current,h,t,{...this.options,duration:a,times:s,ease:u});return g.startTime=p??this.calcStartTime(),this.pendingTimeline?(Ob(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:y}=this.options;f.set(sh(t,this.options,r)),y&&y(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:a,times:s,type:c,ease:u,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:r}=t;return br(r)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:r}=t;return br(r.currentTime||0)}set time(t){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.currentTime=xr(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:r}=t;return r.playbackRate}get finished(){return this.resolved.animation.finished}set speed(t){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:r}=t;return r.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:r}=t;return r.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:r}=this;if(!r)return qi;const{animation:a}=r;Ob(a,t)}return qi}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:r,keyframes:a,duration:s,type:u,ease:c,times:f}=t;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:g,onComplete:y,element:x,...v}=this.options,_=new qg({...v,keyframes:a,duration:s,type:u,ease:c,times:f,isGenerator:!0}),S=xr(this.time);p.setWithVelocity(_.sample(S-Nd).value,_.sample(S).value,Nd)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:r,name:a,repeatDelay:s,repeatType:u,damping:c,type:f}=t;if(!r||!r.owner||!(r.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=r.owner.getProps();return BR()&&a&&VR.has(a)&&(a!=="transform"||!p)&&!h&&!s&&u!=="mirror"&&c!==0&&f!=="inertia"}}const XR={type:"spring",stiffness:500,damping:25,restSpeed:10},qR=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),FR={type:"keyframes",duration:.8},$R={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},KR=(n,{keyframes:t})=>t.length>2?FR:Gs.has(n)?n.startsWith("scale")?qR(t[1]):XR:$R;function ZR({when:n,delay:t,delayChildren:r,staggerChildren:a,staggerDirection:s,repeat:u,repeatType:c,repeatDelay:f,from:h,elapsed:p,...g}){return!!Object.keys(g).length}const Fg=(n,t,r,a={},s,u)=>c=>{const f=wg(a,n)||{},h=f.delay||a.delay||0;let{elapsed:p=0}=a;p=p-xr(h);let g={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-p,onUpdate:x=>{t.set(x),f.onUpdate&&f.onUpdate(x)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:n,motionValue:t,element:u?void 0:s};ZR(f)||(g={...g,...KR(n,g)}),g.duration&&(g.duration=xr(g.duration)),g.repeatDelay&&(g.repeatDelay=xr(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(y=!0)),g.allowFlatten=!f.type&&!f.ease,y&&!u&&t.get()!==void 0){const x=sh(g.keyframes,f);if(x!==void 0)return he.update(()=>{g.onUpdate(x),g.onComplete()}),new v4([])}return!u&&i_.supports(g)?new i_(g):new qg(g)};function QR({protectedKeys:n,needsAnimating:t},r){const a=n.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,a}function jS(n,t,{delay:r=0,transitionOverride:a,type:s}={}){let{transition:u=n.getDefaultTransition(),transitionEnd:c,...f}=t;a&&(u=a);const h=[],p=s&&n.animationState&&n.animationState.getState()[s];for(const g in f){const y=n.getValue(g,n.latestValues[g]??null),x=f[g];if(x===void 0||p&&QR(p,g))continue;const v={delay:r,...wg(u||{},g)};let _=!1;if(window.MotionHandoffAnimation){const C=nS(n);if(C){const A=window.MotionHandoffAnimation(C,g,he);A!==null&&(v.startTime=A,_=!0)}}v0(n,g),y.start(Fg(g,y,x,n.shouldReduceMotion&&eS.has(g)?{type:!1}:v,n,_));const S=y.animation;S&&h.push(S)}return c&&Promise.all(h).then(()=>{he.update(()=>{c&&EM(n,c)})}),h}function M0(n,t,r={}){var h;const a=Iu(n,t,r.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:s=n.getDefaultTransition()||{}}=a||{};r.transitionOverride&&(s=r.transitionOverride);const u=a?()=>Promise.all(jS(n,a,r)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=s;return IR(n,t,g+p,y,x,r)}:()=>Promise.resolve(),{when:f}=s;if(f){const[p,g]=f==="beforeChildren"?[u,c]:[c,u];return p().then(()=>g())}else return Promise.all([u(),c(r.delay)])}function IR(n,t,r=0,a=0,s=1,u){const c=[],f=(n.variantChildren.size-1)*a,h=s===1?(p=0)=>p*a:(p=0)=>f-p*a;return Array.from(n.variantChildren).sort(WR).forEach((p,g)=>{p.notify("AnimationStart",t),c.push(M0(p,t,{...u,delay:r+h(g)}).then(()=>p.notify("AnimationComplete",t)))}),Promise.all(c)}function WR(n,t){return n.sortNodePosition(t)}function JR(n,t,r={}){n.notify("AnimationStart",t);let a;if(Array.isArray(t)){const s=t.map(u=>M0(n,u,r));a=Promise.all(s)}else if(typeof t=="string")a=M0(n,t,r);else{const s=typeof t=="function"?Iu(n,t,r.custom):t;a=Promise.all(jS(n,s,r))}return a.then(()=>{n.notify("AnimationComplete",t)})}function zS(n,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==n.length)return!1;for(let a=0;a<r;a++)if(t[a]!==n[a])return!1;return!0}const t3=Cg.length;function kS(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?kS(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const t={};for(let r=0;r<t3;r++){const a=Cg[r],s=n.props[a];(Ku(s)||s===!1)&&(t[a]=s)}return t}const e3=[...Ag].reverse(),n3=Ag.length;function i3(n){return t=>Promise.all(t.map(({animation:r,options:a})=>JR(n,r,a)))}function r3(n){let t=i3(n),r=r_(),a=!0;const s=h=>(p,g)=>{var x;const y=Iu(n,g,h==="exit"?(x=n.presenceContext)==null?void 0:x.custom:void 0);if(y){const{transition:v,transitionEnd:_,...S}=y;p={...p,...S,..._}}return p};function u(h){t=h(n)}function c(h){const{props:p}=n,g=kS(n.parent)||{},y=[],x=new Set;let v={},_=1/0;for(let C=0;C<n3;C++){const A=e3[C],M=r[A],R=p[A]!==void 0?p[A]:g[A],j=Ku(R),D=A===h?M.isActive:null;D===!1&&(_=C);let N=R===g[A]&&R!==p[A]&&j;if(N&&a&&n.manuallyAnimateOnMount&&(N=!1),M.protectedKeys={...v},!M.isActive&&D===null||!R&&!M.prevProp||rh(R)||typeof R=="boolean")continue;const z=a3(M.prevProp,R);let B=z||A===h&&M.isActive&&!N&&j||C>_&&j,X=!1;const Z=Array.isArray(R)?R:[R];let ot=Z.reduce(s(A),{});D===!1&&(ot={});const{prevResolvedValues:tt={}}=M,wt={...tt,...ot},pt=$=>{B=!0,x.has($)&&(X=!0,x.delete($)),M.needsAnimating[$]=!0;const J=n.getValue($);J&&(J.liveStyle=!1)};for(const $ in wt){const J=ot[$],at=tt[$];if(v.hasOwnProperty($))continue;let T=!1;y0(J)&&y0(at)?T=!zS(J,at):T=J!==at,T?J!=null?pt($):x.add($):J!==void 0&&x.has($)?pt($):M.protectedKeys[$]=!0}M.prevProp=R,M.prevResolvedValues=ot,M.isActive&&(v={...v,...ot}),a&&n.blockInitialAnimation&&(B=!1),B&&(!(N&&z)||X)&&y.push(...Z.map($=>({animation:$,options:{type:A}})))}if(x.size){const C={};if(typeof p.initial!="boolean"){const A=Iu(n,Array.isArray(p.initial)?p.initial[0]:p.initial);A&&A.transition&&(C.transition=A.transition)}x.forEach(A=>{const M=n.getBaseTarget(A),R=n.getValue(A);R&&(R.liveStyle=!0),C[A]=M??null}),y.push({animation:C})}let S=!!y.length;return a&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(S=!1),a=!1,S?t(y):Promise.resolve()}function f(h,p){var y;if(r[h].isActive===p)return Promise.resolve();(y=n.variantChildren)==null||y.forEach(x=>{var v;return(v=x.animationState)==null?void 0:v.setActive(h,p)}),r[h].isActive=p;const g=c(h);for(const x in r)r[x].protectedKeys={};return g}return{animateChanges:c,setActive:f,setAnimateFunction:u,getState:()=>r,reset:()=>{r=r_(),a=!0}}}function a3(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!zS(t,n):!1}function gs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function r_(){return{animate:gs(!0),whileInView:gs(),whileHover:gs(),whileTap:gs(),whileDrag:gs(),whileFocus:gs(),exit:gs()}}class Qa{constructor(t){this.isMounted=!1,this.node=t}update(){}}class s3 extends Qa{constructor(t){super(t),t.animationState||(t.animationState=r3(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();rh(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let o3=0;class l3 extends Qa{constructor(){super(...arguments),this.id=o3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const s=this.node.animationState.setActive("exit",!t);r&&!t&&s.then(()=>{r(this.id)})}mount(){const{register:t,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const u3={animation:{Feature:s3},exit:{Feature:l3}};function Ju(n,t,r,a={passive:!0}){return n.addEventListener(t,r,a),()=>n.removeEventListener(t,r)}function mc(n){return{point:{x:n.pageX,y:n.pageY}}}const c3=n=>t=>Eg(t)&&n(t,mc(t));function Mu(n,t,r,a){return Ju(n,t,c3(r),a)}function LS({top:n,left:t,right:r,bottom:a}){return{x:{min:t,max:r},y:{min:n,max:a}}}function f3({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function d3(n,t){if(!t)return n;const r=t({x:n.left,y:n.top}),a=t({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:a.y,right:a.x}}const NS=1e-4,h3=1-NS,p3=1+NS,PS=.01,m3=0-PS,g3=0+PS;function Un(n){return n.max-n.min}function y3(n,t,r){return Math.abs(n-t)<=r}function a_(n,t,r,a=.5){n.origin=a,n.originPoint=Ee(t.min,t.max,n.origin),n.scale=Un(r)/Un(t),n.translate=Ee(r.min,r.max,n.origin)-n.originPoint,(n.scale>=h3&&n.scale<=p3||isNaN(n.scale))&&(n.scale=1),(n.translate>=m3&&n.translate<=g3||isNaN(n.translate))&&(n.translate=0)}function Ru(n,t,r,a){a_(n.x,t.x,r.x,a?a.originX:void 0),a_(n.y,t.y,r.y,a?a.originY:void 0)}function s_(n,t,r){n.min=r.min+t.min,n.max=n.min+Un(t)}function v3(n,t,r){s_(n.x,t.x,r.x),s_(n.y,t.y,r.y)}function o_(n,t,r){n.min=t.min-r.min,n.max=n.min+Un(t)}function Du(n,t,r){o_(n.x,t.x,r.x),o_(n.y,t.y,r.y)}const l_=()=>({translate:0,scale:1,origin:0,originPoint:0}),No=()=>({x:l_(),y:l_()}),u_=()=>({min:0,max:0}),Pe=()=>({x:u_(),y:u_()});function Ui(n){return[n("x"),n("y")]}function Om(n){return n===void 0||n===1}function R0({scale:n,scaleX:t,scaleY:r}){return!Om(n)||!Om(t)||!Om(r)}function xs(n){return R0(n)||VS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function VS(n){return c_(n.x)||c_(n.y)}function c_(n){return n&&n!=="0%"}function Pd(n,t,r){const a=n-r,s=t*a;return r+s}function f_(n,t,r,a,s){return s!==void 0&&(n=Pd(n,s,a)),Pd(n,r,a)+t}function D0(n,t=0,r=1,a,s){n.min=f_(n.min,t,r,a,s),n.max=f_(n.max,t,r,a,s)}function BS(n,{x:t,y:r}){D0(n.x,t.translate,t.scale,t.originPoint),D0(n.y,r.translate,r.scale,r.originPoint)}const d_=.999999999999,h_=1.0000000000001;function x3(n,t,r,a=!1){const s=r.length;if(!s)return;t.x=t.y=1;let u,c;for(let f=0;f<s;f++){u=r[f],c=u.projectionDelta;const{visualElement:h}=u.options;h&&h.props.style&&h.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Vo(n,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(t.x*=c.x.scale,t.y*=c.y.scale,BS(n,c)),a&&xs(u.latestValues)&&Vo(n,u.latestValues))}t.x<h_&&t.x>d_&&(t.x=1),t.y<h_&&t.y>d_&&(t.y=1)}function Po(n,t){n.min=n.min+t,n.max=n.max+t}function p_(n,t,r,a,s=.5){const u=Ee(n.min,n.max,s);D0(n,t,r,u,a)}function Vo(n,t){p_(n.x,t.x,t.scaleX,t.scale,t.originX),p_(n.y,t.y,t.scaleY,t.scale,t.originY)}function US(n,t){return LS(d3(n.getBoundingClientRect(),t))}function b3(n,t,r){const a=US(n,r),{scroll:s}=t;return s&&(Po(a.x,s.offset.x),Po(a.y,s.offset.y)),a}const HS=({current:n})=>n?n.ownerDocument.defaultView:null,m_=(n,t)=>Math.abs(n-t);function _3(n,t){const r=m_(n.x,t.x),a=m_(n.y,t.y);return Math.sqrt(r**2+a**2)}class YS{constructor(t,r,{transformPagePoint:a,contextWindow:s,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=zm(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,v=_3(y.offset,{x:0,y:0})>=3;if(!x&&!v)return;const{point:_}=y,{timestamp:S}=hn;this.history.push({..._,timestamp:S});const{onStart:C,onMove:A}=this.handlers;x||(C&&C(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,y)},this.handlePointerMove=(y,x)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=jm(x,this.transformPagePoint),he.update(this.updatePoint,!0)},this.handlePointerUp=(y,x)=>{this.end();const{onEnd:v,onSessionEnd:_,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=zm(y.type==="pointercancel"?this.lastMoveEventInfo:jm(x,this.transformPagePoint),this.history);this.startEvent&&v&&v(y,C),_&&_(y,C)},!Eg(t))return;this.dragSnapToOrigin=u,this.handlers=r,this.transformPagePoint=a,this.contextWindow=s||window;const c=mc(t),f=jm(c,this.transformPagePoint),{point:h}=f,{timestamp:p}=hn;this.history=[{...h,timestamp:p}];const{onSessionStart:g}=r;g&&g(t,zm(f,this.history)),this.removeListeners=pc(Mu(this.contextWindow,"pointermove",this.handlePointerMove),Mu(this.contextWindow,"pointerup",this.handlePointerUp),Mu(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Xa(this.updatePoint)}}function jm(n,t){return t?{point:t(n.point)}:n}function g_(n,t){return{x:n.x-t.x,y:n.y-t.y}}function zm({point:n},t){return{point:n,delta:g_(n,GS(t)),offset:g_(n,w3(t)),velocity:S3(t,.1)}}function w3(n){return n[0]}function GS(n){return n[n.length-1]}function S3(n,t){if(n.length<2)return{x:0,y:0};let r=n.length-1,a=null;const s=GS(n);for(;r>=0&&(a=n[r],!(s.timestamp-a.timestamp>xr(t)));)r--;if(!a)return{x:0,y:0};const u=br(s.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const c={x:(s.x-a.x)/u,y:(s.y-a.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function T3(n,{min:t,max:r},a){return t!==void 0&&n<t?n=a?Ee(t,n,a.min):Math.max(n,t):r!==void 0&&n>r&&(n=a?Ee(r,n,a.max):Math.min(n,r)),n}function y_(n,t,r){return{min:t!==void 0?n.min+t:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function E3(n,{top:t,left:r,bottom:a,right:s}){return{x:y_(n.x,r,s),y:y_(n.y,t,a)}}function v_(n,t){let r=t.min-n.min,a=t.max-n.max;return t.max-t.min<n.max-n.min&&([r,a]=[a,r]),{min:r,max:a}}function A3(n,t){return{x:v_(n.x,t.x),y:v_(n.y,t.y)}}function C3(n,t){let r=.5;const a=Un(n),s=Un(t);return s>a?r=qu(t.min,t.max-a,n.min):a>s&&(r=qu(n.min,n.max-s,t.min)),ra(0,1,r)}function M3(n,t){const r={};return t.min!==void 0&&(r.min=t.min-n.min),t.max!==void 0&&(r.max=t.max-n.min),r}const O0=.35;function R3(n=O0){return n===!1?n=0:n===!0&&(n=O0),{x:x_(n,"left","right"),y:x_(n,"top","bottom")}}function x_(n,t,r){return{min:b_(n,t),max:b_(n,r)}}function b_(n,t){return typeof n=="number"?n:n[t]||0}const D3=new WeakMap;class O3{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Pe(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const s=g=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(mc(g).point)},u=(g,y)=>{const{drag:x,dragPropagation:v,onDragStart:_}=this.getProps();if(x&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=A4(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ui(C=>{let A=this.getAxisMotionValue(C).get()||0;if(wr.test(A)){const{projection:M}=this.visualElement;if(M&&M.layout){const R=M.layout.layoutBox[C];R&&(A=Un(R)*(parseFloat(A)/100))}}this.originPoint[C]=A}),_&&he.postRender(()=>_(g,y)),v0(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},c=(g,y)=>{const{dragPropagation:x,dragDirectionLock:v,onDirectionLock:_,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:C}=y;if(v&&this.currentDirection===null){this.currentDirection=j3(C),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",y.point,C),this.updateAxis("y",y.point,C),this.visualElement.render(),S&&S(g,y)},f=(g,y)=>this.stop(g,y),h=()=>Ui(g=>{var y;return this.getAnimationState(g)==="paused"&&((y=this.getAxisMotionValue(g).animation)==null?void 0:y.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new YS(t,{onSessionStart:s,onStart:u,onMove:c,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:HS(this.visualElement)})}stop(t,r){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:s}=r;this.startAnimation(s);const{onDragEnd:u}=this.getProps();u&&he.postRender(()=>u(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,a){const{drag:s}=this.getProps();if(!a||!zf(t,s,this.currentDirection))return;const u=this.getAxisMotionValue(t);let c=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(c=T3(c,this.constraints[t],this.elastic[t])),u.set(c)}resolveConstraints(){var u;const{dragConstraints:t,dragElastic:r}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,s=this.constraints;t&&ko(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=E3(a.layoutBox,t):this.constraints=!1,this.elastic=R3(r),s!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Ui(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=M3(a.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!ko(t))return!1;const a=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const u=b3(a,s.root,this.visualElement.getTransformPagePoint());let c=A3(s.layout.layoutBox,u);if(r){const f=r(f3(c));this.hasMutatedConstraints=!!f,f&&(c=LS(f))}return c}startAnimation(t){const{drag:r,dragMomentum:a,dragElastic:s,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),h=this.constraints||{},p=Ui(g=>{if(!zf(g,r,this.currentDirection))return;let y=h&&h[g]||{};c&&(y={min:0,max:0});const x=s?200:1e6,v=s?40:1e7,_={type:"inertia",velocity:a?t[g]:0,bounceStiffness:x,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(g,_)});return Promise.all(p).then(f)}startAxisValueAnimation(t,r){const a=this.getAxisMotionValue(t);return v0(this.visualElement,t),a.start(Fg(t,a,0,r,this.visualElement,!1))}stopAnimation(){Ui(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ui(t=>{var r;return(r=this.getAxisMotionValue(t).animation)==null?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)==null?void 0:r.state}getAxisMotionValue(t){const r=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),s=a[r];return s||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){Ui(r=>{const{drag:a}=this.getProps();if(!zf(r,a,this.currentDirection))return;const{projection:s}=this.visualElement,u=this.getAxisMotionValue(r);if(s&&s.layout){const{min:c,max:f}=s.layout.layoutBox[r];u.set(t[r]-Ee(c,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:a}=this.visualElement;if(!ko(r)||!a||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Ui(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const h=f.get();s[c]=C3({min:h,max:h},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Ui(c=>{if(!zf(c,t,null))return;const f=this.getAxisMotionValue(c),{min:h,max:p}=this.constraints[c];f.set(Ee(h,p,s[c]))})}addListeners(){if(!this.visualElement.current)return;D3.set(this.visualElement,this);const t=this.visualElement.current,r=Mu(t,"pointerdown",h=>{const{drag:p,dragListener:g=!0}=this.getProps();p&&g&&this.start(h)}),a=()=>{const{dragConstraints:h}=this.getProps();ko(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,u=s.addEventListener("measure",a);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),he.read(a);const c=Ju(window,"resize",()=>this.scalePositionWithinConstraints()),f=s.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Ui(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=h[g].translate,y.set(y.get()+h[g].translate))}),this.visualElement.render())});return()=>{c(),r(),u(),f&&f()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:a=!1,dragPropagation:s=!1,dragConstraints:u=!1,dragElastic:c=O0,dragMomentum:f=!0}=t;return{...t,drag:r,dragDirectionLock:a,dragPropagation:s,dragConstraints:u,dragElastic:c,dragMomentum:f}}}function zf(n,t,r){return(t===!0||t===n)&&(r===null||r===n)}function j3(n,t=10){let r=null;return Math.abs(n.y)>t?r="y":Math.abs(n.x)>t&&(r="x"),r}class z3 extends Qa{constructor(t){super(t),this.removeGroupControls=qi,this.removeListeners=qi,this.controls=new O3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qi}unmount(){this.removeGroupControls(),this.removeListeners()}}const __=n=>(t,r)=>{n&&he.postRender(()=>n(t,r))};class k3 extends Qa{constructor(){super(...arguments),this.removePointerDownListener=qi}onPointerDown(t){this.session=new YS(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:HS(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:a,onPanEnd:s}=this.node.getProps();return{onSessionStart:__(t),onStart:__(r),onMove:a,onEnd:(u,c)=>{delete this.session,s&&he.postRender(()=>s(u,c))}}}mount(){this.removePointerDownListener=Mu(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const pd={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function w_(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const uu={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(_t.test(n))n=parseFloat(n);else return n;const r=w_(n,t.target.x),a=w_(n,t.target.y);return`${r}% ${a}%`}},L3={correct:(n,{treeScale:t,projectionDelta:r})=>{const a=n,s=qa.parse(n);if(s.length>5)return a;const u=qa.createTransformer(n),c=typeof s[0]!="number"?1:0,f=r.x.scale*t.x,h=r.y.scale*t.y;s[0+c]/=f,s[1+c]/=h;const p=Ee(f,h,.5);return typeof s[2+c]=="number"&&(s[2+c]/=p),typeof s[3+c]=="number"&&(s[3+c]/=p),u(s)}};class N3 extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:a,layoutId:s}=this.props,{projection:u}=t;J4(P3),u&&(r.group&&r.group.add(u),a&&a.register&&s&&a.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),pd.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:a,drag:s,isPresent:u}=this.props,c=a.projection;return c&&(c.isPresent=u,s||t.layoutDependency!==r||r===void 0||t.isPresent!==u?c.willUpdate():this.safeToRemove(),t.isPresent!==u&&(u?c.promote():c.relegate()||he.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Tg.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:a}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(s),a&&a.deregister&&a.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function XS(n){const[t,r]=M2(),a=k.useContext(dg);return w.jsx(N3,{...n,layoutGroup:a,switchLayoutGroup:k.useContext(Y2),isPresent:t,safeToRemove:r})}const P3={borderRadius:{...uu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:uu,borderTopRightRadius:uu,borderBottomLeftRadius:uu,borderBottomRightRadius:uu,boxShadow:L3};function V3(n,t,r){const a=En(n)?n:$u(n);return a.start(Fg("",a,t,r)),a.animation}function B3(n){return n instanceof SVGElement&&n.tagName!=="svg"}const U3=(n,t)=>n.depth-t.depth;class H3{constructor(){this.children=[],this.isDirty=!1}add(t){gg(this.children,t),this.isDirty=!0}remove(t){yg(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(U3),this.isDirty=!1,this.children.forEach(t)}}function Y3(n,t){const r=_r.now(),a=({timestamp:s})=>{const u=s-r;u>=t&&(Xa(a),n(u-t))};return he.read(a,!0),()=>Xa(a)}const qS=["TopLeft","TopRight","BottomLeft","BottomRight"],G3=qS.length,S_=n=>typeof n=="string"?parseFloat(n):n,T_=n=>typeof n=="number"||_t.test(n);function X3(n,t,r,a,s,u){s?(n.opacity=Ee(0,r.opacity!==void 0?r.opacity:1,q3(a)),n.opacityExit=Ee(t.opacity!==void 0?t.opacity:1,0,F3(a))):u&&(n.opacity=Ee(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,a));for(let c=0;c<G3;c++){const f=`border${qS[c]}Radius`;let h=E_(t,f),p=E_(r,f);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||T_(h)===T_(p)?(n[f]=Math.max(Ee(S_(h),S_(p),a),0),(wr.test(p)||wr.test(h))&&(n[f]+="%")):n[f]=p}(t.rotate||r.rotate)&&(n.rotate=Ee(t.rotate||0,r.rotate||0,a))}function E_(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const q3=FS(0,.5,uS),F3=FS(.5,.95,qi);function FS(n,t,r){return a=>a<n?0:a>t?1:r(qu(n,t,a))}function A_(n,t){n.min=t.min,n.max=t.max}function Bi(n,t){A_(n.x,t.x),A_(n.y,t.y)}function C_(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}function M_(n,t,r,a,s){return n-=t,n=Pd(n,1/r,a),s!==void 0&&(n=Pd(n,1/s,a)),n}function $3(n,t=0,r=1,a=.5,s,u=n,c=n){if(wr.test(t)&&(t=parseFloat(t),t=Ee(c.min,c.max,t/100)-c.min),typeof t!="number")return;let f=Ee(u.min,u.max,a);n===u&&(f-=t),n.min=M_(n.min,t,r,f,s),n.max=M_(n.max,t,r,f,s)}function R_(n,t,[r,a,s],u,c){$3(n,t[r],t[a],t[s],t.scale,u,c)}const K3=["x","scaleX","originX"],Z3=["y","scaleY","originY"];function D_(n,t,r,a){R_(n.x,t,K3,r?r.x:void 0,a?a.x:void 0),R_(n.y,t,Z3,r?r.y:void 0,a?a.y:void 0)}function O_(n){return n.translate===0&&n.scale===1}function $S(n){return O_(n.x)&&O_(n.y)}function j_(n,t){return n.min===t.min&&n.max===t.max}function Q3(n,t){return j_(n.x,t.x)&&j_(n.y,t.y)}function z_(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function KS(n,t){return z_(n.x,t.x)&&z_(n.y,t.y)}function k_(n){return Un(n.x)/Un(n.y)}function L_(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}class I3{constructor(){this.members=[]}add(t){gg(this.members,t),t.scheduleRender()}remove(t){if(yg(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(s=>t===s);if(r===0)return!1;let a;for(let s=r;s>=0;s--){const u=this.members[s];if(u.isPresent!==!1){a=u;break}}return a?(this.promote(a),!0):!1}promote(t,r){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,r&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:a}=t;r.onExitComplete&&r.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function W3(n,t,r){let a="";const s=n.x.translate/t.x,u=n.y.translate/t.y,c=(r==null?void 0:r.z)||0;if((s||u||c)&&(a=`translate3d(${s}px, ${u}px, ${c}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),r){const{transformPerspective:p,rotate:g,rotateX:y,rotateY:x,skewX:v,skewY:_}=r;p&&(a=`perspective(${p}px) ${a}`),g&&(a+=`rotate(${g}deg) `),y&&(a+=`rotateX(${y}deg) `),x&&(a+=`rotateY(${x}deg) `),v&&(a+=`skewX(${v}deg) `),_&&(a+=`skewY(${_}deg) `)}const f=n.x.scale*t.x,h=n.y.scale*t.y;return(f!==1||h!==1)&&(a+=`scale(${f}, ${h})`),a||"none"}const km=["","X","Y","Z"],J3={visibility:"hidden"},N_=1e3;let t8=0;function Lm(n,t,r,a){const{latestValues:s}=t;s[n]&&(r[n]=s[n],t.setStaticValue(n,0),a&&(a[n]=0))}function ZS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const r=nS(t);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:s,layoutId:u}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",he,!(s||u))}const{parent:a}=n;a&&!a.hasCheckedOptimisedAppear&&ZS(a)}function QS({attachResizeListener:n,defaultParent:t,measureScroll:r,checkIsScrollRoot:a,resetTransform:s}){return class{constructor(c={},f=t==null?void 0:t()){this.id=t8++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(i8),this.nodes.forEach(l8),this.nodes.forEach(u8),this.nodes.forEach(r8)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new H3)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new xg),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const h=this.eventHandlers.get(c);h&&h.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=B3(c),this.instance=c;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(p||h)&&(this.isLayoutDirty=!0),n){let y;const x=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=Y3(x,250),pd.hasAnimatedSinceResize&&(pd.hasAnimatedSinceResize=!1,this.nodes.forEach(V_))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:v,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||p8,{onLayoutAnimationStart:C,onLayoutAnimationComplete:A}=g.getProps(),M=!this.targetLayout||!KS(this.targetLayout,_),R=!x&&v;if(this.options.layoutRoot||this.resumeFrom||R||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,R);const j={...wg(S,"layout"),onPlay:C,onComplete:A};(g.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j)}else x||V_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Xa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(c8),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ZS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:f,layout:h}=this.options;if(f===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(P_);return}this.isUpdating||this.nodes.forEach(s8),this.isUpdating=!1,this.nodes.forEach(o8),this.nodes.forEach(e8),this.nodes.forEach(n8),this.clearAllSnapshots();const f=_r.now();hn.delta=ra(0,1e3/60,f-hn.timestamp),hn.timestamp=f,hn.isProcessing=!0,Am.update.process(hn),Am.preRender.process(hn),Am.render.process(hn),hn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Tg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(a8),this.sharedNodes.forEach(f8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,he.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){he.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Un(this.snapshot.measuredBox.x)&&!Un(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Pe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f){const h=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!s)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!$S(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,g=p!==this.prevTransformTemplateValue;c&&(f||xs(this.latestValues)||g)&&(s(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let h=this.removeElementScroll(f);return c&&(h=this.removeTransform(h)),m8(h),{animationId:this.root.animationId,measuredBox:f,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:c}=this.options;if(!c)return Pe();const f=c.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(g8))){const{scroll:g}=this.root;g&&(Po(f.x,g.offset.x),Po(f.y,g.offset.y))}return f}removeElementScroll(c){var h;const f=Pe();if(Bi(f,c),(h=this.scroll)!=null&&h.wasRoot)return f;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Bi(f,c),Po(f.x,y.offset.x),Po(f.y,y.offset.y))}return f}applyTransform(c,f=!1){const h=Pe();Bi(h,c);for(let p=0;p<this.path.length;p++){const g=this.path[p];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Vo(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),xs(g.latestValues)&&Vo(h,g.latestValues)}return xs(this.latestValues)&&Vo(h,this.latestValues),h}removeTransform(c){const f=Pe();Bi(f,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!p.instance||!xs(p.latestValues))continue;R0(p.latestValues)&&p.updateSnapshot();const g=Pe(),y=p.measurePageBox();Bi(g,y),D_(f,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,g)}return xs(this.latestValues)&&D_(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==hn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var x;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=hn.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pe(),this.relativeTargetOrigin=Pe(),Du(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Bi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Pe(),this.targetWithTransforms=Pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),v3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Bi(this.target,this.layout.layoutBox),BS(this.target,this.targetDelta)):Bi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pe(),this.relativeTargetOrigin=Pe(),Du(this.relativeTargetOrigin,this.target,v.target),Bi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||R0(this.parent.latestValues)||VS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var _;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===hn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;Bi(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;x3(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Pe());const{target:v}=c;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(C_(this.prevProjectionDelta.x,this.projectionDelta.x),C_(this.prevProjectionDelta.y,this.projectionDelta.y)),Ru(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!L_(this.projectionDelta.x,this.prevProjectionDelta.x)||!L_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=No(),this.projectionDelta=No(),this.projectionDeltaWithTransform=No()}setAnimationOrigin(c,f=!1){const h=this.snapshot,p=h?h.latestValues:{},g={...this.latestValues},y=No();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const x=Pe(),v=h?h.source:void 0,_=this.layout?this.layout.source:void 0,S=v!==_,C=this.getStack(),A=!C||C.members.length<=1,M=!!(S&&!A&&this.options.crossfade===!0&&!this.path.some(h8));this.animationProgress=0;let R;this.mixTargetDelta=j=>{const D=j/1e3;B_(y.x,c.x,D),B_(y.y,c.y,D),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Du(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),d8(this.relativeTarget,this.relativeTargetOrigin,x,D),R&&Q3(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=Pe()),Bi(R,this.relativeTarget)),S&&(this.animationValues=g,X3(g,p,this.latestValues,D,M,A)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Xa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=he.update(()=>{pd.hasAnimatedSinceResize=!0,this.currentAnimation=V3(0,N_,{...c,onUpdate:f=>{this.mixTargetDelta(f),c.onUpdate&&c.onUpdate(f)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(N_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:h,layout:p,latestValues:g}=c;if(!(!f||!h||!p)){if(this!==c&&this.layout&&p&&IS(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||Pe();const y=Un(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+y;const x=Un(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+x}Bi(f,h),Vo(f,g),Ru(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new I3),this.sharedNodes.get(c).add(f);const p=f.options.initialPromotionConfig;f.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var f;const{layoutId:c}=this.options;return c?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:c}=this.options;return c?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(f=!0),!f)return;const p={};h.z&&Lm("z",c,p,this.animationValues);for(let g=0;g<km.length;g++)Lm(`rotate${km[g]}`,c,p,this.animationValues),Lm(`skew${km[g]}`,c,p,this.animationValues);c.render();for(const g in p)c.setStaticValue(g,p[g]),this.animationValues&&(this.animationValues[g]=p[g]);c.scheduleRender()}getProjectionStyles(c){if(!this.instance||this.isSVG)return;if(!this.isVisible)return J3;const f={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=hd(c==null?void 0:c.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none",f;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=hd(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!xs(this.latestValues)&&(v.transform=h?h({},""):"none",this.hasProjected=!1),v}const g=p.animationValues||p.latestValues;this.applyTransformsToTarget(),f.transform=W3(this.projectionDeltaWithTransform,this.treeScale,g),h&&(f.transform=h(g,f.transform));const{x:y,y:x}=this.projectionDelta;f.transformOrigin=`${y.origin*100}% ${x.origin*100}% 0`,p.animationValues?f.opacity=p===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:f.opacity=p===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const v in Zu){if(g[v]===void 0)continue;const{correct:_,applyTo:S,isCSSVariable:C}=Zu[v],A=f.transform==="none"?g[v]:_(g[v],p);if(S){const M=S.length;for(let R=0;R<M;R++)f[S[R]]=A}else C?this.options.visualElement.renderState.vars[v]=A:f[v]=A}return this.options.layoutId&&(f.pointerEvents=p===this?hd(c==null?void 0:c.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var f;return(f=c.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(P_),this.root.sharedNodes.clear()}}}function e8(n){n.updateLayout()}function n8(n){var r;const t=((r=n.resumeFrom)==null?void 0:r.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:s}=n.layout,{animationType:u}=n.options,c=t.source!==n.layout.source;u==="size"?Ui(y=>{const x=c?t.measuredBox[y]:t.layoutBox[y],v=Un(x);x.min=a[y].min,x.max=x.min+v}):IS(u,t.layoutBox,a)&&Ui(y=>{const x=c?t.measuredBox[y]:t.layoutBox[y],v=Un(a[y]);x.max=x.min+v,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+v)});const f=No();Ru(f,a,t.layoutBox);const h=No();c?Ru(h,n.applyTransform(s,!0),t.measuredBox):Ru(h,a,t.layoutBox);const p=!$S(f);let g=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:v}=y;if(x&&v){const _=Pe();Du(_,t.layoutBox,x.layoutBox);const S=Pe();Du(S,a,v.layoutBox),KS(_,S)||(g=!0),y.options.layoutRoot&&(n.relativeTarget=S,n.relativeTargetOrigin=_,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:h,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function i8(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function r8(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function a8(n){n.clearSnapshot()}function P_(n){n.clearMeasurements()}function s8(n){n.isLayoutDirty=!1}function o8(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function V_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function l8(n){n.resolveTargetDelta()}function u8(n){n.calcProjection()}function c8(n){n.resetSkewAndRotation()}function f8(n){n.removeLeadSnapshot()}function B_(n,t,r){n.translate=Ee(t.translate,0,r),n.scale=Ee(t.scale,1,r),n.origin=t.origin,n.originPoint=t.originPoint}function U_(n,t,r,a){n.min=Ee(t.min,r.min,a),n.max=Ee(t.max,r.max,a)}function d8(n,t,r,a){U_(n.x,t.x,r.x,a),U_(n.y,t.y,r.y,a)}function h8(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const p8={duration:.45,ease:[.4,0,.1,1]},H_=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Y_=H_("applewebkit/")&&!H_("chrome/")?Math.round:qi;function G_(n){n.min=Y_(n.min),n.max=Y_(n.max)}function m8(n){G_(n.x),G_(n.y)}function IS(n,t,r){return n==="position"||n==="preserve-aspect"&&!y3(k_(t),k_(r),.2)}function g8(n){var t;return n!==n.root&&((t=n.scroll)==null?void 0:t.wasRoot)}const y8=QS({attachResizeListener:(n,t)=>Ju(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Nm={current:void 0},WS=QS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Nm.current){const n=new y8({});n.mount(window),n.setOptions({layoutScroll:!0}),Nm.current=n}return Nm.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),v8={pan:{Feature:k3},drag:{Feature:z3,ProjectionNode:WS,MeasureLayout:XS}};function X_(n,t,r){const{props:a}=n;n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",r==="Start");const s="onHover"+r,u=a[s];u&&he.postRender(()=>u(t,mc(t)))}class x8 extends Qa{mount(){const{current:t}=this.node;t&&(this.unmount=M4(t,(r,a)=>(X_(this.node,a,"Start"),s=>X_(this.node,s,"End"))))}unmount(){}}class b8 extends Qa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=pc(Ju(this.node.current,"focus",()=>this.onFocus()),Ju(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function q_(n,t,r){const{props:a}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&a.whileTap&&n.animationState.setActive("whileTap",r==="Start");const s="onTap"+(r==="End"?"":r),u=a[s];u&&he.postRender(()=>u(t,mc(t)))}class _8 extends Qa{mount(){const{current:t}=this.node;t&&(this.unmount=j4(t,(r,a)=>(q_(this.node,a,"Start"),(s,{success:u})=>q_(this.node,s,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const j0=new WeakMap,Pm=new WeakMap,w8=n=>{const t=j0.get(n.target);t&&t(n)},S8=n=>{n.forEach(w8)};function T8({root:n,...t}){const r=n||document;Pm.has(r)||Pm.set(r,{});const a=Pm.get(r),s=JSON.stringify(t);return a[s]||(a[s]=new IntersectionObserver(S8,{root:n,...t})),a[s]}function E8(n,t,r){const a=T8(t);return j0.set(n,r),a.observe(n),()=>{j0.delete(n),a.unobserve(n)}}const A8={some:0,all:1};class C8 extends Qa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:a,amount:s="some",once:u}=t,c={root:r?r.current:void 0,rootMargin:a,threshold:typeof s=="number"?s:A8[s]},f=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,u&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=p?g:y;x&&x(h)};return E8(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(M8(t,r))&&this.startObserver()}unmount(){}}function M8({viewport:n={}},{viewport:t={}}={}){return r=>n[r]!==t[r]}const R8={inView:{Feature:C8},tap:{Feature:_8},focus:{Feature:b8},hover:{Feature:x8}},D8={layout:{ProjectionNode:WS,MeasureLayout:XS}},z0={current:null},JS={current:!1};function O8(){if(JS.current=!0,!!pg)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>z0.current=n.matches;n.addListener(t),t()}else z0.current=!1}const j8=[...TS,_n,qa],z8=n=>j8.find(SS(n)),k8=new WeakMap;function L8(n,t,r){for(const a in t){const s=t[a],u=r[a];if(En(s))n.addValue(a,s);else if(En(u))n.addValue(a,$u(s,{owner:n}));else if(u!==s)if(n.hasValue(a)){const c=n.getValue(a);c.liveStyle===!0?c.jump(s):c.hasAnimated||c.set(s)}else{const c=n.getStaticValue(a);n.addValue(a,$u(c!==void 0?c:s,{owner:n}))}}for(const a in r)t[a]===void 0&&n.removeValue(a);return t}const F_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class N8{scrapeMotionValuesFromProps(t,r,a){return{}}constructor({parent:t,props:r,presenceContext:a,reducedMotionConfig:s,blockInitialAnimation:u,visualState:c},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Gg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=_r.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,he.render(this.render,!1,!0))};const{latestValues:h,renderState:p,onUpdate:g}=c;this.onUpdate=g,this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=p,this.parent=t,this.props=r,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=f,this.blockInitialAnimation=!!u,this.isControllingVariants=ah(r),this.isVariantNode=U2(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const v in x){const _=x[v];h[v]!==void 0&&En(_)&&_.set(h[v],!1)}}mount(t){this.current=t,k8.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,a)=>this.bindToMotionValue(a,r)),JS.current||O8(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:z0.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Xa(this.notifyUpdate),Xa(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(t,r){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=Gs.has(t);a&&this.onBindTransform&&this.onBindTransform();const s=r.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&he.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),u=r.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,r)),this.valueSubscriptions.set(t,()=>{s(),u(),c&&c(),r.owner&&r.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in el){const r=el[t];if(!r)continue;const{isEnabled:a,Feature:s}=r;if(!this.features[t]&&s&&a(this.props)&&(this.features[t]=new s(this)),this.features[t]){const u=this.features[t];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Pe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let a=0;a<F_.length;a++){const s=F_[a];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const u="on"+s,c=t[u];c&&(this.propEventSubscriptions[s]=this.on(s,c))}this.prevMotionValues=L8(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){const a=this.values.get(t);r!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,r),this.values.set(t,r),this.latestValues[t]=r.get())}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&r!==void 0&&(a=$u(r===null?void 0:r,{owner:this}),this.addValue(t,a)),a}readValue(t,r){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(_S(a)||fS(a))?a=parseFloat(a):!z8(a)&&qa.test(r)&&(a=vS(t,r)),this.setBaseTarget(t,En(a)?a.get():a)),En(a)?a.get():a}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var u;const{initial:r}=this.props;let a;if(typeof r=="string"||typeof r=="object"){const c=Pg(this.props,r,(u=this.presenceContext)==null?void 0:u.custom);c&&(a=c[t])}if(r&&a!==void 0)return a;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!En(s)?s:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new xg),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class tT extends N8{constructor(){super(...arguments),this.KeyframeResolver=ES}sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:a}){delete r[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;En(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function P8(n){return window.getComputedStyle(n)}class V8 extends tT{constructor(){super(...arguments),this.type="html",this.renderInstance=I2}readValueFromInstance(t,r){if(Gs.has(r))return QM(t,r);{const a=P8(t),s=(Rg(r)?a.getPropertyValue(r):a[r])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:r}){return US(t,r)}build(t,r,a){jg(t,r,a.transformTemplate)}scrapeMotionValuesFromProps(t,r,a){return Vg(t,r,a)}}class B8 extends tT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Pe,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Q2(this.current,this.renderState)}}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(Gs.has(r)){const a=yS(r);return a&&a.default||0}return r=W2.has(r)?r:Mg(r),t.getAttribute(r)}scrapeMotionValuesFromProps(t,r,a){return tS(t,r,a)}onBindTransform(){this.current&&!this.renderState.dimensions&&he.postRender(this.updateDimensions)}build(t,r,a){Lg(t,r,this.isSVGTag,a.transformTemplate)}renderInstance(t,r,a,s){J2(t,r,a,s)}mount(t){this.isSVGTag=Ng(t.tagName),super.mount(t)}}const U8=(n,t)=>kg(n)?new B8(t):new V8(t,{allowProjection:n!==k.Fragment}),H8=SM({...u3,...R8,...v8,...D8},U8),ct=B4(H8);var cu={},$_;function Y8(){if($_)return cu;$_=1,Object.defineProperty(cu,"__esModule",{value:!0}),cu.parse=c,cu.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,u=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function c(x,v){const _=new u,S=x.length;if(S<2)return _;const C=(v==null?void 0:v.decode)||g;let A=0;do{const M=x.indexOf("=",A);if(M===-1)break;const R=x.indexOf(";",A),j=R===-1?S:R;if(M>j){A=x.lastIndexOf(";",M-1)+1;continue}const D=f(x,A,M),N=h(x,M,D),z=x.slice(D,N);if(_[z]===void 0){let B=f(x,M+1,j),X=h(x,j,B);const Z=C(x.slice(B,X));_[z]=Z}A=j+1}while(A<S);return _}function f(x,v,_){do{const S=x.charCodeAt(v);if(S!==32&&S!==9)return v}while(++v<_);return _}function h(x,v,_){for(;v>_;){const S=x.charCodeAt(--v);if(S!==32&&S!==9)return v+1}return _}function p(x,v,_){const S=(_==null?void 0:_.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const C=S(v);if(!t.test(C))throw new TypeError(`argument val is invalid: ${v}`);let A=x+"="+C;if(!_)return A;if(_.maxAge!==void 0){if(!Number.isInteger(_.maxAge))throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);A+="; Max-Age="+_.maxAge}if(_.domain){if(!r.test(_.domain))throw new TypeError(`option domain is invalid: ${_.domain}`);A+="; Domain="+_.domain}if(_.path){if(!a.test(_.path))throw new TypeError(`option path is invalid: ${_.path}`);A+="; Path="+_.path}if(_.expires){if(!y(_.expires)||!Number.isFinite(_.expires.valueOf()))throw new TypeError(`option expires is invalid: ${_.expires}`);A+="; Expires="+_.expires.toUTCString()}if(_.httpOnly&&(A+="; HttpOnly"),_.secure&&(A+="; Secure"),_.partitioned&&(A+="; Partitioned"),_.priority)switch(typeof _.priority=="string"?_.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${_.priority}`)}if(_.sameSite)switch(typeof _.sameSite=="string"?_.sameSite.toLowerCase():_.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${_.sameSite}`)}return A}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function y(x){return s.call(x)==="[object Date]"}return cu}Y8();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var K_="popstate";function G8(n={}){function t(a,s){let{pathname:u,search:c,hash:f}=a.location;return k0("",{pathname:u,search:c,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(a,s){return typeof s=="string"?s:tc(s)}return q8(t,r,null,n)}function Ce(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function Er(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function X8(){return Math.random().toString(36).substring(2,10)}function Z_(n,t){return{usr:n.state,key:n.key,idx:t}}function k0(n,t,r=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?dl(t):t,state:r,key:t&&t.key||a||X8()}}function tc({pathname:n="/",search:t="",hash:r=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function dl(n){let t={};if(n){let r=n.indexOf("#");r>=0&&(t.hash=n.substring(r),n=n.substring(0,r));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function q8(n,t,r,a={}){let{window:s=document.defaultView,v5Compat:u=!1}=a,c=s.history,f="POP",h=null,p=g();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function g(){return(c.state||{idx:null}).idx}function y(){f="POP";let C=g(),A=C==null?null:C-p;p=C,h&&h({action:f,location:S.location,delta:A})}function x(C,A){f="PUSH";let M=k0(S.location,C,A);p=g()+1;let R=Z_(M,p),j=S.createHref(M);try{c.pushState(R,"",j)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;s.location.assign(j)}u&&h&&h({action:f,location:S.location,delta:1})}function v(C,A){f="REPLACE";let M=k0(S.location,C,A);p=g();let R=Z_(M,p),j=S.createHref(M);c.replaceState(R,"",j),u&&h&&h({action:f,location:S.location,delta:0})}function _(C){let A=s.location.origin!=="null"?s.location.origin:s.location.href,M=typeof C=="string"?C:tc(C);return M=M.replace(/ $/,"%20"),Ce(A,`No window.location.(origin|href) available to create URL for href: ${M}`),new URL(M,A)}let S={get action(){return f},get location(){return n(s,c)},listen(C){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(K_,y),h=C,()=>{s.removeEventListener(K_,y),h=null}},createHref(C){return t(s,C)},createURL:_,encodeLocation(C){let A=_(C);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:x,replace:v,go(C){return c.go(C)}};return S}function eT(n,t,r="/"){return F8(n,t,r,!1)}function F8(n,t,r,a){let s=typeof t=="string"?dl(t):t,u=aa(s.pathname||"/",r);if(u==null)return null;let c=nT(n);$8(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=rD(u);f=nD(c[h],p,a)}return f}function nT(n,t=[],r=[],a=""){let s=(u,c,f)=>{let h={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};h.relativePath.startsWith("/")&&(Ce(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length));let p=na([a,h.relativePath]),g=r.concat(h);u.children&&u.children.length>0&&(Ce(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),nT(u.children,t,g,p)),!(u.path==null&&!u.index)&&t.push({path:p,score:tD(p,u.index),routesMeta:g})};return n.forEach((u,c)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))s(u,c);else for(let h of iT(u.path))s(u,c,h)}),t}function iT(n){let t=n.split("/");if(t.length===0)return[];let[r,...a]=t,s=r.endsWith("?"),u=r.replace(/\?$/,"");if(a.length===0)return s?[u,""]:[u];let c=iT(a.join("/")),f=[];return f.push(...c.map(h=>h===""?u:[u,h].join("/"))),s&&f.push(...c),f.map(h=>n.startsWith("/")&&h===""?"/":h)}function $8(n){n.sort((t,r)=>t.score!==r.score?r.score-t.score:eD(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var K8=/^:[\w-]+$/,Z8=3,Q8=2,I8=1,W8=10,J8=-2,Q_=n=>n==="*";function tD(n,t){let r=n.split("/"),a=r.length;return r.some(Q_)&&(a+=J8),t&&(a+=Q8),r.filter(s=>!Q_(s)).reduce((s,u)=>s+(K8.test(u)?Z8:u===""?I8:W8),a)}function eD(n,t){return n.length===t.length&&n.slice(0,-1).every((a,s)=>a===t[s])?n[n.length-1]-t[t.length-1]:0}function nD(n,t,r=!1){let{routesMeta:a}=n,s={},u="/",c=[];for(let f=0;f<a.length;++f){let h=a[f],p=f===a.length-1,g=u==="/"?t:t.slice(u.length)||"/",y=Vd({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),x=h.route;if(!y&&p&&r&&!a[a.length-1].route.index&&(y=Vd({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(s,y.params),c.push({params:s,pathname:na([u,y.pathname]),pathnameBase:lD(na([u,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(u=na([u,y.pathnameBase]))}return c}function Vd(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,a]=iD(n.path,n.caseSensitive,n.end),s=t.match(r);if(!s)return null;let u=s[0],c=u.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((p,{paramName:g,isOptional:y},x)=>{if(g==="*"){let _=f[x]||"";c=u.slice(0,u.length-_.length).replace(/(.)\/+$/,"$1")}const v=f[x];return y&&!v?p[g]=void 0:p[g]=(v||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:c,pattern:n}}function iD(n,t=!1,r=!0){Er(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(a.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),a]}function rD(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Er(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function aa(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=n.charAt(r);return a&&a!=="/"?null:n.slice(r)||"/"}function aD(n,t="/"){let{pathname:r,search:a="",hash:s=""}=typeof n=="string"?dl(n):n;return{pathname:r?r.startsWith("/")?r:sD(r,t):t,search:uD(a),hash:cD(s)}}function sD(n,t){let r=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Vm(n,t,r,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oD(n){return n.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function rT(n){let t=oD(n);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function aT(n,t,r,a=!1){let s;typeof n=="string"?s=dl(n):(s={...n},Ce(!s.pathname||!s.pathname.includes("?"),Vm("?","pathname","search",s)),Ce(!s.pathname||!s.pathname.includes("#"),Vm("#","pathname","hash",s)),Ce(!s.search||!s.search.includes("#"),Vm("#","search","hash",s)));let u=n===""||s.pathname==="",c=u?"/":s.pathname,f;if(c==null)f=r;else{let y=t.length-1;if(!a&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),y-=1;s.pathname=x.join("/")}f=y>=0?t[y]:"/"}let h=aD(s,f),p=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var na=n=>n.join("/").replace(/\/\/+/g,"/"),lD=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),uD=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,cD=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function fD(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var sT=["POST","PUT","PATCH","DELETE"];new Set(sT);var dD=["GET",...sT];new Set(dD);var hl=k.createContext(null);hl.displayName="DataRouter";var oh=k.createContext(null);oh.displayName="DataRouterState";var oT=k.createContext({isTransitioning:!1});oT.displayName="ViewTransition";var hD=k.createContext(new Map);hD.displayName="Fetchers";var pD=k.createContext(null);pD.displayName="Await";var Mr=k.createContext(null);Mr.displayName="Navigation";var pl=k.createContext(null);pl.displayName="Location";var la=k.createContext({outlet:null,matches:[],isDataRoute:!1});la.displayName="Route";var $g=k.createContext(null);$g.displayName="RouteError";function mD(n,{relative:t}={}){Ce(gc(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=k.useContext(Mr),{hash:s,pathname:u,search:c}=yc(n,{relative:t}),f=u;return r!=="/"&&(f=u==="/"?r:na([r,u])),a.createHref({pathname:f,search:c,hash:s})}function gc(){return k.useContext(pl)!=null}function Ki(){return Ce(gc(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(pl).location}function gD(){return k.useContext(pl).navigationType}var lT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function uT(n){k.useContext(Mr).static||k.useLayoutEffect(n)}function Xs(){let{isDataRoute:n}=k.useContext(la);return n?RD():yD()}function yD(){Ce(gc(),"useNavigate() may be used only in the context of a <Router> component.");let n=k.useContext(hl),{basename:t,navigator:r}=k.useContext(Mr),{matches:a}=k.useContext(la),{pathname:s}=Ki(),u=JSON.stringify(rT(a)),c=k.useRef(!1);return uT(()=>{c.current=!0}),k.useCallback((h,p={})=>{if(Er(c.current,lT),!c.current)return;if(typeof h=="number"){r.go(h);return}let g=aT(h,JSON.parse(u),s,p.relative==="path");n==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:na([t,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[t,r,u,s,n])}k.createContext(null);function yc(n,{relative:t}={}){let{matches:r}=k.useContext(la),{pathname:a}=Ki(),s=JSON.stringify(rT(r));return k.useMemo(()=>aT(n,JSON.parse(s),a,t==="path"),[n,s,a,t])}function vD(n,t){return cT(n,t)}function cT(n,t,r,a){var M;Ce(gc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:u}=k.useContext(Mr),{matches:c}=k.useContext(la),f=c[c.length-1],h=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let R=y&&y.path||"";fT(p,!y||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let x=Ki(),v;if(t){let R=typeof t=="string"?dl(t):t;Ce(g==="/"||((M=R.pathname)==null?void 0:M.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),v=R}else v=x;let _=v.pathname||"/",S=_;if(g!=="/"){let R=g.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=!u&&r&&r.matches&&r.matches.length>0?r.matches:eT(n,{pathname:S});Er(y||C!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Er(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=SD(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},h,R.params),pathname:na([g,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:na([g,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),c,r,a);return t&&A?k.createElement(pl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},A):A}function xD(){let n=MD(),t=fD(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:u},"ErrorBoundary")," or"," ",k.createElement("code",{style:u},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),r?k.createElement("pre",{style:s},r):null,c)}var bD=k.createElement(xD,null),_D=class extends k.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?k.createElement(la.Provider,{value:this.props.routeContext},k.createElement($g.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wD({routeContext:n,match:t,children:r}){let a=k.useContext(hl);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(la.Provider,{value:n},r)}function SD(n,t=[],r=null,a=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let s=n,u=r==null?void 0:r.errors;if(u!=null){let h=s.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Ce(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let c=!1,f=-1;if(r)for(let h=0;h<s.length;h++){let p=s[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=h),p.route.id){let{loaderData:g,errors:y}=r,x=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||x){c=!0,f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}return s.reduceRight((h,p,g)=>{let y,x=!1,v=null,_=null;r&&(y=u&&p.route.id?u[p.route.id]:void 0,v=p.route.errorElement||bD,c&&(f<0&&g===0?(fT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,_=null):f===g&&(x=!0,_=p.route.hydrateFallbackElement||null)));let S=t.concat(s.slice(0,g+1)),C=()=>{let A;return y?A=v:x?A=_:p.route.Component?A=k.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=h,k.createElement(wD,{match:p,routeContext:{outlet:h,matches:S,isDataRoute:r!=null},children:A})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?k.createElement(_D,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:C(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):C()},null)}function Kg(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TD(n){let t=k.useContext(hl);return Ce(t,Kg(n)),t}function ED(n){let t=k.useContext(oh);return Ce(t,Kg(n)),t}function AD(n){let t=k.useContext(la);return Ce(t,Kg(n)),t}function Zg(n){let t=AD(n),r=t.matches[t.matches.length-1];return Ce(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function CD(){return Zg("useRouteId")}function MD(){var a;let n=k.useContext($g),t=ED("useRouteError"),r=Zg("useRouteError");return n!==void 0?n:(a=t.errors)==null?void 0:a[r]}function RD(){let{router:n}=TD("useNavigate"),t=Zg("useNavigate"),r=k.useRef(!1);return uT(()=>{r.current=!0}),k.useCallback(async(s,u={})=>{Er(r.current,lT),r.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:t,...u}))},[n,t])}var I_={};function fT(n,t,r){!t&&!I_[n]&&(I_[n]=!0,Er(!1,r))}k.memo(DD);function DD({routes:n,future:t,state:r}){return cT(n,void 0,r,t)}function bs(n){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function OD({basename:n="/",children:t=null,location:r,navigationType:a="POP",navigator:s,static:u=!1}){Ce(!gc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),f=k.useMemo(()=>({basename:c,navigator:s,static:u,future:{}}),[c,s,u]);typeof r=="string"&&(r=dl(r));let{pathname:h="/",search:p="",hash:g="",state:y=null,key:x="default"}=r,v=k.useMemo(()=>{let _=aa(h,c);return _==null?null:{location:{pathname:_,search:p,hash:g,state:y,key:x},navigationType:a}},[c,h,p,g,y,x,a]);return Er(v!=null,`<Router basename="${c}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:k.createElement(Mr.Provider,{value:f},k.createElement(pl.Provider,{children:t,value:v}))}function jD({children:n,location:t}){return vD(L0(n),t)}function L0(n,t=[]){let r=[];return k.Children.forEach(n,(a,s)=>{if(!k.isValidElement(a))return;let u=[...t,s];if(a.type===k.Fragment){r.push.apply(r,L0(a.props.children,u));return}Ce(a.type===bs,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=L0(a.props.children,u)),r.push(c)}),r}var md="get",gd="application/x-www-form-urlencoded";function lh(n){return n!=null&&typeof n.tagName=="string"}function zD(n){return lh(n)&&n.tagName.toLowerCase()==="button"}function kD(n){return lh(n)&&n.tagName.toLowerCase()==="form"}function LD(n){return lh(n)&&n.tagName.toLowerCase()==="input"}function ND(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function PD(n,t){return n.button===0&&(!t||t==="_self")&&!ND(n)}var kf=null;function VD(){if(kf===null)try{new FormData(document.createElement("form"),0),kf=!1}catch{kf=!0}return kf}var BD=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bm(n){return n!=null&&!BD.has(n)?(Er(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gd}"`),null):n}function UD(n,t){let r,a,s,u,c;if(kD(n)){let f=n.getAttribute("action");a=f?aa(f,t):null,r=n.getAttribute("method")||md,s=Bm(n.getAttribute("enctype"))||gd,u=new FormData(n)}else if(zD(n)||LD(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||f.getAttribute("action");if(a=h?aa(h,t):null,r=n.getAttribute("formmethod")||f.getAttribute("method")||md,s=Bm(n.getAttribute("formenctype"))||Bm(f.getAttribute("enctype"))||gd,u=new FormData(f,n),!VD()){let{name:p,type:g,value:y}=n;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,y)}}else{if(lh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=md,a=null,s=gd,c=n}return u&&s==="text/plain"&&(c=u,u=void 0),{action:a,method:r.toLowerCase(),encType:s,formData:u,body:c}}function Qg(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}async function HD(n,t){if(n.id in t)return t[n.id];try{let r=await import(n.module);return t[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function YD(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function GD(n,t,r){let a=await Promise.all(n.map(async s=>{let u=t.routes[s.route.id];if(u){let c=await HD(u,r);return c.links?c.links():[]}return[]}));return $D(a.flat(1).filter(YD).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function W_(n,t,r,a,s,u){let c=(h,p)=>r[p]?h.route.id!==r[p].route.id:!0,f=(h,p)=>{var g;return r[p].pathname!==h.pathname||((g=r[p].route.path)==null?void 0:g.endsWith("*"))&&r[p].params["*"]!==h.params["*"]};return u==="assets"?t.filter((h,p)=>c(h,p)||f(h,p)):u==="data"?t.filter((h,p)=>{var y;let g=a.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((y=r[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function XD(n,t,{includeHydrateFallback:r}={}){return qD(n.map(a=>{let s=t.routes[a.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function qD(n){return[...new Set(n)]}function FD(n){let t={},r=Object.keys(n).sort();for(let a of r)t[a]=n[a];return t}function $D(n,t){let r=new Set;return new Set(t),n.reduce((a,s)=>{let u=JSON.stringify(FD(s));return r.has(u)||(r.add(u),a.push({key:u,link:s})),a},[])}function KD(n,t){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname="_root.data":t&&aa(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function dT(){let n=k.useContext(hl);return Qg(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function ZD(){let n=k.useContext(oh);return Qg(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ig=k.createContext(void 0);Ig.displayName="FrameworkContext";function hT(){let n=k.useContext(Ig);return Qg(n,"You must render this element inside a <HydratedRouter> element"),n}function QD(n,t){let r=k.useContext(Ig),[a,s]=k.useState(!1),[u,c]=k.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:y}=t,x=k.useRef(null);k.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let S=A=>{A.forEach(M=>{c(M.isIntersecting)})},C=new IntersectionObserver(S,{threshold:.5});return x.current&&C.observe(x.current),()=>{C.disconnect()}}},[n]),k.useEffect(()=>{if(a){let S=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(S)}}},[a]);let v=()=>{s(!0)},_=()=>{s(!1),c(!1)};return r?n!=="intent"?[u,x,{}]:[u,x,{onFocus:fu(f,v),onBlur:fu(h,_),onMouseEnter:fu(p,v),onMouseLeave:fu(g,_),onTouchStart:fu(y,v)}]:[!1,x,{}]}function fu(n,t){return r=>{n&&n(r),r.defaultPrevented||t(r)}}function ID({page:n,...t}){let{router:r}=dT(),a=k.useMemo(()=>eT(r.routes,n,r.basename),[r.routes,n,r.basename]);return a?k.createElement(JD,{page:n,matches:a,...t}):null}function WD(n){let{manifest:t,routeModules:r}=hT(),[a,s]=k.useState([]);return k.useEffect(()=>{let u=!1;return GD(n,t,r).then(c=>{u||s(c)}),()=>{u=!0}},[n,t,r]),a}function JD({page:n,matches:t,...r}){let a=Ki(),{manifest:s,routeModules:u}=hT(),{basename:c}=dT(),{loaderData:f,matches:h}=ZD(),p=k.useMemo(()=>W_(n,t,h,s,a,"data"),[n,t,h,s,a]),g=k.useMemo(()=>W_(n,t,h,s,a,"assets"),[n,t,h,s,a]),y=k.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let _=new Set,S=!1;if(t.forEach(A=>{var R;let M=s.routes[A.route.id];!M||!M.hasLoader||(!p.some(j=>j.route.id===A.route.id)&&A.route.id in f&&((R=u[A.route.id])!=null&&R.shouldRevalidate)||M.hasClientLoader?S=!0:_.add(A.route.id))}),_.size===0)return[];let C=KD(n,c);return S&&_.size>0&&C.searchParams.set("_routes",t.filter(A=>_.has(A.route.id)).map(A=>A.route.id).join(",")),[C.pathname+C.search]},[c,f,a,s,p,t,n,u]),x=k.useMemo(()=>XD(g,s),[g,s]),v=WD(g);return k.createElement(k.Fragment,null,y.map(_=>k.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...r})),x.map(_=>k.createElement("link",{key:_,rel:"modulepreload",href:_,...r})),v.map(({key:_,link:S})=>k.createElement("link",{key:_,...S})))}function t6(...n){return t=>{n.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var pT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{pT&&(window.__reactRouterVersion="7.4.1")}catch{}function e6({basename:n,children:t,window:r}){let a=k.useRef();a.current==null&&(a.current=G8({window:r,v5Compat:!0}));let s=a.current,[u,c]=k.useState({action:s.action,location:s.location}),f=k.useCallback(h=>{k.startTransition(()=>c(h))},[c]);return k.useLayoutEffect(()=>s.listen(f),[s,f]),k.createElement(OD,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:s})}var mT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gT=k.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:s,reloadDocument:u,replace:c,state:f,target:h,to:p,preventScrollReset:g,viewTransition:y,...x},v){let{basename:_}=k.useContext(Mr),S=typeof p=="string"&&mT.test(p),C,A=!1;if(typeof p=="string"&&S&&(C=p,pT))try{let X=new URL(window.location.href),Z=p.startsWith("//")?new URL(X.protocol+p):new URL(p),ot=aa(Z.pathname,_);Z.origin===X.origin&&ot!=null?p=ot+Z.search+Z.hash:A=!0}catch{Er(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=mD(p,{relative:s}),[R,j,D]=QD(a,x),N=a6(p,{replace:c,state:f,target:h,preventScrollReset:g,relative:s,viewTransition:y});function z(X){t&&t(X),X.defaultPrevented||N(X)}let B=k.createElement("a",{...x,...D,href:C||M,onClick:A||u?t:z,ref:t6(v,j),target:h,"data-discover":!S&&r==="render"?"true":void 0});return R&&!S?k.createElement(k.Fragment,null,B,k.createElement(ID,{page:M})):B});gT.displayName="Link";var n6=k.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:s=!1,style:u,to:c,viewTransition:f,children:h,...p},g){let y=yc(c,{relative:p.relative}),x=Ki(),v=k.useContext(oh),{navigator:_,basename:S}=k.useContext(Mr),C=v!=null&&c6(y)&&f===!0,A=_.encodeLocation?_.encodeLocation(y).pathname:y.pathname,M=x.pathname,R=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(M=M.toLowerCase(),R=R?R.toLowerCase():null,A=A.toLowerCase()),R&&S&&(R=aa(R,S)||R);const j=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let D=M===A||!s&&M.startsWith(A)&&M.charAt(j)==="/",N=R!=null&&(R===A||!s&&R.startsWith(A)&&R.charAt(A.length)==="/"),z={isActive:D,isPending:N,isTransitioning:C},B=D?t:void 0,X;typeof a=="function"?X=a(z):X=[a,D?"active":null,N?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let Z=typeof u=="function"?u(z):u;return k.createElement(gT,{...p,"aria-current":B,className:X,ref:g,style:Z,to:c,viewTransition:f},typeof h=="function"?h(z):h)});n6.displayName="NavLink";var i6=k.forwardRef(({discover:n="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:s,state:u,method:c=md,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:y,...x},v)=>{let _=l6(),S=u6(f,{relative:p}),C=c.toLowerCase()==="get"?"get":"post",A=typeof f=="string"&&mT.test(f),M=R=>{if(h&&h(R),R.defaultPrevented)return;R.preventDefault();let j=R.nativeEvent.submitter,D=(j==null?void 0:j.getAttribute("formmethod"))||c;_(j||R.currentTarget,{fetcherKey:t,method:D,navigate:r,replace:s,state:u,relative:p,preventScrollReset:g,viewTransition:y})};return k.createElement("form",{ref:v,method:C,action:S,onSubmit:a?h:M,...x,"data-discover":!A&&n==="render"?"true":void 0})});i6.displayName="Form";function r6(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yT(n){let t=k.useContext(hl);return Ce(t,r6(n)),t}function a6(n,{target:t,replace:r,state:a,preventScrollReset:s,relative:u,viewTransition:c}={}){let f=Xs(),h=Ki(),p=yc(n,{relative:u});return k.useCallback(g=>{if(PD(g,t)){g.preventDefault();let y=r!==void 0?r:tc(h)===tc(p);f(n,{replace:y,state:a,preventScrollReset:s,relative:u,viewTransition:c})}},[h,f,p,r,a,t,n,s,u,c])}var s6=0,o6=()=>`__${String(++s6)}__`;function l6(){let{router:n}=yT("useSubmit"),{basename:t}=k.useContext(Mr),r=CD();return k.useCallback(async(a,s={})=>{let{action:u,method:c,encType:f,formData:h,body:p}=UD(a,t);if(s.navigate===!1){let g=s.fetcherKey||o6();await n.fetch(g,r,s.action||u,{preventScrollReset:s.preventScrollReset,formData:h,body:p,formMethod:s.method||c,formEncType:s.encType||f,flushSync:s.flushSync})}else await n.navigate(s.action||u,{preventScrollReset:s.preventScrollReset,formData:h,body:p,formMethod:s.method||c,formEncType:s.encType||f,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,t,r])}function u6(n,{relative:t}={}){let{basename:r}=k.useContext(Mr),a=k.useContext(la);Ce(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),u={...yc(n||".",{relative:t})},c=Ki();if(n==null){u.search=c.search;let f=new URLSearchParams(u.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(y=>y).forEach(y=>f.append("index",y));let g=f.toString();u.search=g?`?${g}`:""}}return(!n||n===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:na([r,u.pathname])),tc(u)}function c6(n,t={}){let r=k.useContext(oT);Ce(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=yT("useViewTransitionState"),s=yc(n,{relative:t.relative});if(!r.isTransitioning)return!1;let u=aa(r.currentLocation.pathname,a)||r.currentLocation.pathname,c=aa(r.nextLocation.pathname,a)||r.nextLocation.pathname;return Vd(s.pathname,c)!=null||Vd(s.pathname,u)!=null}new TextEncoder;const vT=P(ct.div)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`,xT=P.svg`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
`,bT=P.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    font-family: var(--font-en);
    letter-spacing: -0.5px;
`,f6=({onClick:n})=>w.jsxs(vT,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},children:[w.jsxs(xT,{viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[w.jsx("defs",{children:w.jsxs("linearGradient",{id:"logoGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[w.jsx("stop",{offset:"0%",stopColor:"#76a4da"}),w.jsx("stop",{offset:"100%",stopColor:"#bebcd8"})]})}),w.jsx(ct.path,{d:"M 20 20 L 35 20 A 15 15 0 0 1 20 5 L 20 20 Z",fill:"none",stroke:"url(#logoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.1,ease:"easeInOut"}}),w.jsx(ct.path,{d:"M 20 20 L 20 5 A 15 15 0 0 1 5 20 L 20 20 Z",fill:"url(#logoGradient)",stroke:"url(#logoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.2,ease:"easeInOut"}}),w.jsx(ct.path,{d:"M 20 20 L 5 20 A 15 15 0 0 1 20 35 L 20 20 Z",fill:"none",stroke:"url(#logoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.3,ease:"easeInOut"}}),w.jsx(ct.path,{d:"M 20 20 L 20 35 A 15 15 0 0 1 35 20 L 20 20 Z",fill:"none",stroke:"url(#logoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.4,ease:"easeInOut"}})]}),w.jsx(bT,{children:"Portfolio"})]}),d6=({onClick:n})=>w.jsxs(vT,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},children:[w.jsxs(xT,{viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[w.jsx("defs",{children:w.jsxs("linearGradient",{id:"footerLogoGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[w.jsx("stop",{offset:"0%",stopColor:"#76a4da"}),w.jsx("stop",{offset:"100%",stopColor:"#bebcd8"})]})}),w.jsx(ct.path,{d:"M 20 20 L 35 20 A 15 15 0 0 1 20 5 L 20 20 Z",fill:"none",stroke:"url(#footerLogoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.1,ease:"easeInOut"}}),w.jsx(ct.path,{d:"M 20 20 L 20 5 A 15 15 0 0 1 5 20 L 20 20 Z",fill:"url(#footerLogoGradient)",stroke:"url(#footerLogoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.2,ease:"easeInOut"}}),w.jsx(ct.path,{d:"M 20 20 L 5 20 A 15 15 0 0 1 20 35 L 20 20 Z",fill:"none",stroke:"url(#footerLogoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.3,ease:"easeInOut"}}),w.jsx(ct.path,{d:"M 20 20 L 20 35 A 15 15 0 0 1 35 20 L 20 20 Z",fill:"none",stroke:"url(#footerLogoGradient)",strokeWidth:"2.5",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:.4,ease:"easeInOut"}})]}),w.jsx(bT,{children:"INFO"})]}),h6=P.header`
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
`,p6=P.div`
  position: relative;

  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  display: flex;

  justify-content:
    space-between;

  align-items:
    center;
`,m6=P.nav`
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
`,g6=P(ct.button)`
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
`,y6=P.button`
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
`,v6=({open:n})=>n?w.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[w.jsx("path",{d:"M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),w.jsx("path",{d:"M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}):w.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[w.jsx("path",{d:"M4 6H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),w.jsx("path",{d:"M4 12H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),w.jsx("path",{d:"M4 18H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),x6=({}={})=>{const n=Xs(),t=Ki(),[r,a]=k.useState(!1),s=[{path:"/",label:"홈"},{path:"/personal",label:"경력"},{path:"/project",label:"프로젝트"}],u=c=>c==="/"?t.pathname==="/":t.pathname.startsWith(c);return k.useEffect(()=>{a(!1)},[t.pathname]),k.useEffect(()=>{if(!r)return;const c=f=>{f.key==="Escape"&&a(!1)};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[r]),k.useEffect(()=>{const c=()=>{window.innerWidth>768&&a(!1)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),w.jsxs(h6,{children:[w.jsxs(p6,{children:[w.jsx(f6,{onClick:()=>{n("/")}}),w.jsx(y6,{type:"button",$open:r,"aria-label":r?"메뉴 닫기":"메뉴 열기","aria-expanded":r,onClick:()=>{a(c=>!c)},children:w.jsx(v6,{open:r})}),w.jsx(m6,{$open:r,children:s.map(c=>w.jsx(g6,{type:"button",$active:u(c.path),onClick:()=>{n(c.path),a(!1)},whileHover:{scale:1.06,y:-2},whileTap:{scale:.95},transition:{type:"spring",stiffness:320,damping:20},children:c.label},c.path))})]}),w.jsx(A2,{})]})},b6=n=>{const[t,r]=k.useState(!1);return k.useEffect(()=>{const a=window.matchMedia(n);r(a.matches);const s=()=>r(a.matches);return a.addEventListener("change",s),()=>a.removeEventListener("change",s)},[n]),t},_6="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%2376a4da'%20d='M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z'/%3e%3cpath%20fill='%2376a4da'%20d='M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z'/%3e%3c/svg%3e",w6=P.footer`
    width: 100%;
    padding: 1rem 2rem;
`,S6=P.footer`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    padding: 50px 0;
    margin: 0 auto;
`,T6=P.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    img {
        width: 25px;
        height: auto;
    }
`,E6=()=>{const n=b6("(max-width: 480px)");return w.jsxs(w6,{children:[w.jsx(A2,{}),w.jsxs(S6,{children:[w.jsx(d6,{}),w.jsxs(T6,{children:[w.jsx("img",{src:_6,alt:"email",loading:"lazy"}),n?w.jsx("p",{children:"dusen380@gmail.com"}):w.jsx("p",{children:"이메일: dusen380@gmail.com"})]})]})]})};function Wr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _T(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ec={duration:.5,overwrite:!1,delay:0},Wg,mn,be,Sr=1e8,An=1/Sr,N0=Math.PI*2,A6=N0/4,C6=0,wT=Math.sqrt,M6=Math.cos,R6=Math.sin,on=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},sa=function(t){return typeof t=="number"},Jg=function(t){return typeof t>"u"},Ar=function(t){return typeof t=="object"},Wn=function(t){return t!==!1},ty=function(){return typeof window<"u"},Lf=function(t){return ze(t)||on(t)},ST=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,D6=/random\([^)]+\)/g,O6=/,\s*/g,J_=/(?:-?\.?\d|\.)+/gi,TT=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Um=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ET=/[+-]=-?[.\d]+/,j6=/[^,'"\[\]\s]+/gi,z6=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Te,hr,P0,ey,Ti={},Bd={},AT,CT=function(t){return(Bd=il(t,Ti))&&ni},ny=function(t,r){return console.warn("Invalid property",t,"set to",r,"Missing plugin? gsap.registerPlugin()")},nc=function(t,r){return!r&&console.warn(t)},MT=function(t,r){return t&&(Ti[t]=r)&&Bd&&(Bd[t]=r)||Ti},ic=function(){return 0},k6={suppressEvents:!0,isStart:!0,kill:!1},yd={suppressEvents:!0,kill:!1},L6={suppressEvents:!0},iy={},Ha=[],V0={},RT,yi={},Hm={},tw=30,vd=[],ry="",ay=function(t){var r=t[0],a,s;if(Ar(r)||ze(r)||(t=[t]),!(a=(r._gsap||{}).harness)){for(s=vd.length;s--&&!vd[s].targetTest(r););a=vd[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new IT(t[s],a)))||t.splice(s,1);return t},zs=function(t){return t._gsap||ay(Xi(t))[0]._gsap},DT=function(t,r,a){return(a=t[r])&&ze(a)?t[r]():Jg(a)&&t.getAttribute&&t.getAttribute(r)||a},Jn=function(t,r){return(t=t.split(",")).forEach(r)||t},Ve=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},Yo=function(t,r){var a=r.charAt(0),s=parseFloat(r.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},N6=function(t,r){for(var a=r.length,s=0;t.indexOf(r[s])<0&&++s<a;);return s<a},Ud=function(){var t=Ha.length,r=Ha.slice(0),a,s;for(V0={},Ha.length=0,a=0;a<t;a++)s=r[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},sy=function(t){return!!(t._initted||t._startAt||t.add)},OT=function(t,r,a,s){Ha.length&&!mn&&Ud(),t.render(r,a,!!(mn&&r<0&&sy(t))),Ha.length&&!mn&&Ud()},jT=function(t){var r=parseFloat(t);return(r||r===0)&&(t+"").match(j6).length<2?r:on(t)?t.trim():t},zT=function(t){return t},Ei=function(t,r){for(var a in r)a in t||(t[a]=r[a]);return t},P6=function(t){return function(r,a){for(var s in a)s in r||s==="duration"&&t||s==="ease"||(r[s]=a[s])}},il=function(t,r){for(var a in r)t[a]=r[a];return t},ew=function n(t,r){for(var a in r)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Ar(r[a])?n(t[a]||(t[a]={}),r[a]):r[a]);return t},Hd=function(t,r){var a={},s;for(s in t)s in r||(a[s]=t[s]);return a},Ou=function(t){var r=t.parent||Te,a=t.keyframes?P6(Cn(t.keyframes)):Ei;if(Wn(t.inherit))for(;r;)a(t,r.vars.defaults),r=r.parent||r._dp;return t},V6=function(t,r){for(var a=t.length,s=a===r.length;s&&a--&&t[a]===r[a];);return a<0},kT=function(t,r,a,s,u){var c=t[s],f;if(u)for(f=r[u];c&&c[u]>f;)c=c._prev;return c?(r._next=c._next,c._next=r):(r._next=t[a],t[a]=r),r._next?r._next._prev=r:t[s]=r,r._prev=c,r.parent=r._dp=t,r},uh=function(t,r,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=r._prev,c=r._next;u?u._next=c:t[a]===r&&(t[a]=c),c?c._prev=u:t[s]===r&&(t[s]=u),r._next=r._prev=r.parent=null},Fa=function(t,r){t.parent&&(!r||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ks=function(t,r){if(t&&(!r||r._end>t._dur||r._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},B6=function(t){for(var r=t.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return t},B0=function(t,r,a,s){return t._startAt&&(mn?t._startAt.revert(yd):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(r,!0,s))},U6=function n(t){return!t||t._ts&&n(t.parent)},nw=function(t){return t._repeat?rl(t._tTime,t=t.duration()+t._rDelay)*t:0},rl=function(t,r){var a=Math.floor(t=Se(t/r));return t&&a===t?a-1:a},Yd=function(t,r){return(t-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},ch=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||An)||0))},fh=function(t,r){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=Se(a._time-(t._ts>0?r/t._ts:((t._dirty?t.totalDuration():t._tDur)-r)/-t._ts)),ch(t),a._dirty||ks(a,t)),t},LT=function(t,r){var a;if((r._time||!r._dur&&r._initted||r._start<t._time&&(r._dur||!r.add))&&(a=Yd(t.rawTime(),r),(!r._dur||vc(0,r.totalDuration(),a)-r._tTime>An)&&r.render(a,!0)),ks(t,r)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-1e-8}},gr=function(t,r,a,s){return r.parent&&Fa(r),r._start=Se((sa(a)?a:a||t!==Te?Hi(t,a,r):t._time)+r._delay),r._end=Se(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),kT(t,r,"_first","_last",t._sort?"_start":0),U0(r)||(t._recent=r),s||LT(t,r),t._ts<0&&fh(t,t._tTime),t},NT=function(t,r){return(Ti.ScrollTrigger||ny("scrollTrigger",r))&&Ti.ScrollTrigger.create(r,t)},PT=function(t,r,a,s,u){if(ly(t,r,u),!t._initted)return 1;if(!a&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&RT!==xi.frame)return Ha.push(t),t._lazy=[u,s],1},H6=function n(t){var r=t.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||n(r))},U0=function(t){var r=t.data;return r==="isFromStart"||r==="isStart"},Y6=function(t,r,a,s){var u=t.ratio,c=r<0||!r&&(!t._start&&H6(t)&&!(!t._initted&&U0(t))||(t._ts<0||t._dp._ts<0)&&!U0(t))?0:1,f=t._rDelay,h=0,p,g,y;if(f&&t._repeat&&(h=vc(0,t._tDur,r),g=rl(h,f),t._yoyo&&g&1&&(c=1-c),g!==rl(t._tTime,f)&&(u=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==u||mn||s||t._zTime===An||!r&&t._zTime){if(!t._initted&&PT(t,r,s,a,h))return;for(y=t._zTime,t._zTime=r||(a?An:0),a||(a=r&&!y),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=h,p=t._pt;p;)p.r(c,p.d),p=p._next;r<0&&B0(t,r,a,!0),t._onUpdate&&!a&&_i(t,"onUpdate"),h&&t._repeat&&!a&&t.parent&&_i(t,"onRepeat"),(r>=t._tDur||r<0)&&t.ratio===c&&(c&&Fa(t,1),!a&&!mn&&(_i(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=r)},G6=function(t,r,a){var s;if(a>r)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>r)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<r)return s;s=s._prev}},al=function(t,r,a,s){var u=t._repeat,c=Se(r)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=u?u<0?1e10:Se(c*(u+1)+t._rDelay*u):c,f>0&&!s&&fh(t,t._tTime=t._tDur*f),t.parent&&ch(t),a||ks(t.parent,t),t},iw=function(t){return t instanceof Qn?ks(t):al(t,t._dur)},X6={_start:0,endTime:ic,totalDuration:ic},Hi=function n(t,r,a){var s=t.labels,u=t._recent||X6,c=t.duration()>=Sr?u.endTime(!1):t._dur,f,h,p;return on(r)&&(isNaN(r)||r in s)?(h=r.charAt(0),p=r.substr(-1)==="%",f=r.indexOf("="),h==="<"||h===">"?(f>=0&&(r=r.replace(/=/,"")),(h==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(r.substr(1))||0)*(p?(f<0?u:a).totalDuration()/100:1)):f<0?(r in s||(s[r]=c),s[r]):(h=parseFloat(r.charAt(f-1)+r.substr(f+1)),p&&a&&(h=h/100*(Cn(a)?a[0]:a).totalDuration()),f>1?n(t,r.substr(0,f-1),a)+h:c+h)):r==null?c:+r},ju=function(t,r,a){var s=sa(r[1]),u=(s?2:1)+(t<2?0:1),c=r[u],f,h;if(s&&(c.duration=r[1]),c.parent=a,t){for(f=c,h=a;h&&!("immediateRender"in f);)f=h.vars.defaults||{},h=Wn(h.vars.inherit)&&h.parent;c.immediateRender=Wn(f.immediateRender),t<2?c.runBackwards=1:c.startAt=r[u-1]}return new $e(r[0],c,r[u+1])},Ia=function(t,r){return t||t===0?r(t):r},vc=function(t,r,a){return a<t?t:a>r?r:a},Sn=function(t,r){return!on(t)||!(r=z6.exec(t))?"":r[1]},q6=function(t,r,a){return Ia(a,function(s){return vc(t,r,s)})},H0=[].slice,VT=function(t,r){return t&&Ar(t)&&"length"in t&&(!r&&!t.length||t.length-1 in t&&Ar(t[0]))&&!t.nodeType&&t!==hr},F6=function(t,r,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return on(s)&&!r||VT(s,1)?(u=a).push.apply(u,Xi(s)):a.push(s)})||a},Xi=function(t,r,a){return be&&!r&&be.selector?be.selector(t):on(t)&&!a&&(P0||!sl())?H0.call((r||ey).querySelectorAll(t),0):Cn(t)?F6(t,a):VT(t)?H0.call(t,0):t?[t]:[]},Y0=function(t){return t=Xi(t)[0]||nc("Invalid scope")||{},function(r){var a=t.current||t.nativeElement||t;return Xi(r,a.querySelectorAll?a:a===t?nc("Invalid scope")||ey.createElement("div"):t)}},BT=function(t){return t.sort(function(){return .5-Math.random()})},UT=function(t){if(ze(t))return t;var r=Ar(t)?t:{each:t},a=Ls(r.ease),s=r.from||0,u=parseFloat(r.base)||0,c={},f=s>0&&s<1,h=isNaN(s)||f,p=r.axis,g=s,y=s;return on(s)?g=y={center:.5,edges:.5,end:1}[s]||0:!f&&h&&(g=s[0],y=s[1]),function(x,v,_){var S=(_||r).length,C=c[S],A,M,R,j,D,N,z,B,X;if(!C){if(X=r.grid==="auto"?0:(r.grid||[1,Sr])[1],!X){for(z=-1e8;z<(z=_[X++].getBoundingClientRect().left)&&X<S;);X<S&&X--}for(C=c[S]=[],A=h?Math.min(X,S)*g-.5:s%X,M=X===Sr?0:h?S*y/X-.5:s/X|0,z=0,B=Sr,N=0;N<S;N++)R=N%X-A,j=M-(N/X|0),C[N]=D=p?Math.abs(p==="y"?j:R):wT(R*R+j*j),D>z&&(z=D),D<B&&(B=D);s==="random"&&BT(C),C.max=z-B,C.min=B,C.v=S=(parseFloat(r.amount)||parseFloat(r.each)*(X>S?S-1:p?p==="y"?S/X:X:Math.max(X,S/X))||0)*(s==="edges"?-1:1),C.b=S<0?u-S:u,C.u=Sn(r.amount||r.each)||0,a=a&&S<0?aO(a):a}return S=(C[x]-C.min)/C.max||0,Se(C.b+(a?a(S):S)*C.v)+C.u}},G0=function(t){var r=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=Se(Math.round(parseFloat(a)/t)*t*r);return(s-s%1)/r+(sa(a)?0:Sn(a))}},HT=function(t,r){var a=Cn(t),s,u;return!a&&Ar(t)&&(s=a=t.radius||Sr,t.values?(t=Xi(t.values),(u=!sa(t[0]))&&(s*=s)):t=G0(t.increment)),Ia(r,a?ze(t)?function(c){return u=t(c),Math.abs(u-c)<=s?u:c}:function(c){for(var f=parseFloat(u?c.x:c),h=parseFloat(u?c.y:0),p=Sr,g=0,y=t.length,x,v;y--;)u?(x=t[y].x-f,v=t[y].y-h,x=x*x+v*v):x=Math.abs(t[y]-f),x<p&&(p=x,g=y);return g=!s||p<=s?t[g]:c,u||g===c||sa(c)?g:g+Sn(c)}:G0(t))},YT=function(t,r,a,s){return Ia(Cn(t)?!r:a===!0?!!(a=0):!s,function(){return Cn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(r-t+a*.99))/a)*a*s)/s})},$6=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return function(s){return r.reduce(function(u,c){return c(u)},s)}},K6=function(t,r){return function(a){return t(parseFloat(a))+(r||Sn(a))}},Z6=function(t,r,a){return XT(t,r,0,1,a)},GT=function(t,r,a){return Ia(a,function(s){return t[~~r(s)]})},Q6=function n(t,r,a){var s=r-t;return Cn(t)?GT(t,n(0,t.length),r):Ia(a,function(u){return(s+(u-t)%s)%s+t})},I6=function n(t,r,a){var s=r-t,u=s*2;return Cn(t)?GT(t,n(0,t.length-1),r):Ia(a,function(c){return c=(u+(c-t)%u)%u||0,t+(c>s?u-c:c)})},rc=function(t){return t.replace(D6,function(r){var a=r.indexOf("[")+1,s=r.substring(a||7,a?r.indexOf("]"):r.length-1).split(O6);return YT(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},XT=function(t,r,a,s,u){var c=r-t,f=s-a;return Ia(u,function(h){return a+((h-t)/c*f||0)})},W6=function n(t,r,a,s){var u=isNaN(t+r)?0:function(v){return(1-v)*t+v*r};if(!u){var c=on(t),f={},h,p,g,y,x;if(a===!0&&(s=1)&&(a=null),c)t={p:t},r={p:r};else if(Cn(t)&&!Cn(r)){for(g=[],y=t.length,x=y-2,p=1;p<y;p++)g.push(n(t[p-1],t[p]));y--,u=function(_){_*=y;var S=Math.min(x,~~_);return g[S](_-S)},a=r}else s||(t=il(Cn(t)?[]:{},t));if(!g){for(h in r)oy.call(f,t,h,"get",r[h]);u=function(_){return fy(_,f)||(c?t.p:t)}}}return Ia(a,u)},rw=function(t,r,a){var s=t.labels,u=Sr,c,f,h;for(c in s)f=s[c]-r,f<0==!!a&&f&&u>(f=Math.abs(f))&&(h=c,u=f);return h},_i=function(t,r,a){var s=t.vars,u=s[r],c=be,f=t._ctx,h,p,g;if(u)return h=s[r+"Params"],p=s.callbackScope||t,a&&Ha.length&&Ud(),f&&(be=f),g=h?u.apply(p,h):u.call(p),be=c,g},xu=function(t){return Fa(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&_i(t,"onInterrupt"),t},Uo,qT=[],FT=function(t){if(t)if(t=!t.name&&t.default||t,ty()||t.headless){var r=t.name,a=ze(t),s=r&&!a&&t.init?function(){this._props=[]}:t,u={init:ic,render:fy,add:oy,kill:mO,modifier:pO,rawVars:0},c={targetTest:0,get:0,getSetter:cy,aliases:{},register:0};if(sl(),t!==s){if(yi[r])return;Ei(s,Ei(Hd(t,u),c)),il(s.prototype,il(u,Hd(t,c))),yi[s.prop=r]=s,t.targetTest&&(vd.push(s),iy[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}MT(r,s),t.register&&t.register(ni,s,ti)}else qT.push(t)},ue=255,bu={aqua:[0,ue,ue],lime:[0,ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ue],navy:[0,0,128],white:[ue,ue,ue],olive:[128,128,0],yellow:[ue,ue,0],orange:[ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ue,0,0],pink:[ue,192,203],cyan:[0,ue,ue],transparent:[ue,ue,ue,0]},Ym=function(t,r,a){return t+=t<0?1:t>1?-1:0,(t*6<1?r+(a-r)*t*6:t<.5?a:t*3<2?r+(a-r)*(2/3-t)*6:r)*ue+.5|0},$T=function(t,r,a){var s=t?sa(t)?[t>>16,t>>8&ue,t&ue]:0:bu.black,u,c,f,h,p,g,y,x,v,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),bu[t])s=bu[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+u+u+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ue,s&ue,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ue,t&ue]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match(J_),!r)h=+s[0]%360/360,p=+s[1]/100,g=+s[2]/100,c=g<=.5?g*(p+1):g+p-g*p,u=g*2-c,s.length>3&&(s[3]*=1),s[0]=Ym(h+1/3,u,c),s[1]=Ym(h,u,c),s[2]=Ym(h-1/3,u,c);else if(~t.indexOf("="))return s=t.match(TT),a&&s.length<4&&(s[3]=1),s}else s=t.match(J_)||bu.transparent;s=s.map(Number)}return r&&!_&&(u=s[0]/ue,c=s[1]/ue,f=s[2]/ue,y=Math.max(u,c,f),x=Math.min(u,c,f),g=(y+x)/2,y===x?h=p=0:(v=y-x,p=g>.5?v/(2-y-x):v/(y+x),h=y===u?(c-f)/v+(c<f?6:0):y===c?(f-u)/v+2:(u-c)/v+4,h*=60),s[0]=~~(h+.5),s[1]=~~(p*100+.5),s[2]=~~(g*100+.5)),a&&s.length<4&&(s[3]=1),s},KT=function(t){var r=[],a=[],s=-1;return t.split(Ya).forEach(function(u){var c=u.match(Bo)||[];r.push.apply(r,c),a.push(s+=c.length+1)}),r.c=a,r},aw=function(t,r,a){var s="",u=(t+s).match(Ya),c=r?"hsla(":"rgba(",f=0,h,p,g,y;if(!u)return t;if(u=u.map(function(x){return(x=$T(x,r,1))&&c+(r?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),a&&(g=KT(t),h=a.c,h.join(s)!==g.c.join(s)))for(p=t.replace(Ya,"1").split(Bo),y=p.length-1;f<y;f++)s+=p[f]+(~h.indexOf(f)?u.shift()||c+"0,0,0,0)":(g.length?g:u.length?u:a).shift());if(!p)for(p=t.split(Ya),y=p.length-1;f<y;f++)s+=p[f]+u[f];return s+p[y]},Ya=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in bu)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),J6=/hsl[a]?\(/,ZT=function(t){var r=t.join(" "),a;if(Ya.lastIndex=0,Ya.test(r))return a=J6.test(r),t[1]=aw(t[1],a),t[0]=aw(t[0],a,KT(t[1])),!0},ac,xi=function(){var n=Date.now,t=500,r=33,a=n(),s=a,u=1e3/240,c=u,f=[],h,p,g,y,x,v,_=function S(C){var A=n()-s,M=C===!0,R,j,D,N;if((A>t||A<0)&&(a+=A-r),s+=A,D=s-a,R=D-c,(R>0||M)&&(N=++y.frame,x=D-y.time*1e3,y.time=D=D/1e3,c+=R+(R>=u?4:u-R),j=1),M||(h=p(S)),j)for(v=0;v<f.length;v++)f[v](D,x,N,C)};return y={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(C){return x/(1e3/(C||60))},wake:function(){AT&&(!P0&&ty()&&(hr=P0=window,ey=hr.document||{},Ti.gsap=ni,(hr.gsapVersions||(hr.gsapVersions=[])).push(ni.version),CT(Bd||hr.GreenSockGlobals||!hr.gsap&&hr||{}),qT.forEach(FT)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&y.sleep(),p=g||function(C){return setTimeout(C,c-y.time*1e3+1|0)},ac=1,_(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(h),ac=0,p=ic},lagSmoothing:function(C,A){t=C||1/0,r=Math.min(A||33,t)},fps:function(C){u=1e3/(C||240),c=y.time*1e3+u},add:function(C,A,M){var R=A?function(j,D,N,z){C(j,D,N,z),y.remove(R)}:C;return y.remove(C),f[M?"unshift":"push"](R),sl(),R},remove:function(C,A){~(A=f.indexOf(C))&&f.splice(A,1)&&v>=A&&v--},_listeners:f},y}(),sl=function(){return!ac&&xi.wake()},Gt={},tO=/^[\d.\-M][\d.\-,\s]/,eO=/["']/g,nO=function(t){for(var r={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,c=a.length,f,h,p;u<c;u++)h=a[u],f=u!==c-1?h.lastIndexOf(","):h.length,p=h.substr(0,f),r[s]=isNaN(p)?p.replace(eO,"").trim():+p,s=h.substr(f+1).trim();return r},iO=function(t){var r=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",r);return t.substring(r,~s&&s<a?t.indexOf(")",a+1):a)},rO=function(t){var r=(t+"").split("("),a=Gt[r[0]];return a&&r.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[nO(r[1])]:iO(t).split(",").map(jT)):Gt._CE&&tO.test(t)?Gt._CE("",t):a},aO=function(t){return function(r){return 1-t(1-r)}},Ls=function(t,r){return t&&(ze(t)?t:Gt[t]||rO(t))||r},qs=function(t,r,a,s){a===void 0&&(a=function(h){return 1-r(1-h)}),s===void 0&&(s=function(h){return h<.5?r(h*2)/2:1-r((1-h)*2)/2});var u={easeIn:r,easeOut:a,easeInOut:s},c;return Jn(t,function(f){Gt[f]=Ti[f]=u,Gt[c=f.toLowerCase()]=a;for(var h in u)Gt[c+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=Gt[f+"."+h]=u[h]}),u},QT=function(t){return function(r){return r<.5?(1-t(1-r*2))/2:.5+t((r-.5)*2)/2}},Gm=function n(t,r,a){var s=r>=1?r:1,u=(a||(t?.3:.45))/(r<1?r:1),c=u/N0*(Math.asin(1/s)||0),f=function(g){return g===1?1:s*Math.pow(2,-10*g)*R6((g-c)*u)+1},h=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:QT(f);return u=N0/u,h.config=function(p,g){return n(t,p,g)},h},Xm=function n(t,r){r===void 0&&(r=1.70158);var a=function(c){return c?--c*c*((r+1)*c+r)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:QT(a);return s.config=function(u){return n(t,u)},s};Jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var r=t<5?t+1:t;qs(n+",Power"+(r-1),t?function(a){return Math.pow(a,r)}:function(a){return a},function(a){return 1-Math.pow(1-a,r)},function(a){return a<.5?Math.pow(a*2,r)/2:1-Math.pow((1-a)*2,r)/2})});Gt.Linear.easeNone=Gt.none=Gt.Linear.easeIn;qs("Elastic",Gm("in"),Gm("out"),Gm());(function(n,t){var r=1/t,a=2*r,s=2.5*r,u=function(f){return f<r?n*f*f:f<a?n*Math.pow(f-1.5/t,2)+.75:f<s?n*(f-=2.25/t)*f+.9375:n*Math.pow(f-2.625/t,2)+.984375};qs("Bounce",function(c){return 1-u(1-c)},u)})(7.5625,2.75);qs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});qs("Circ",function(n){return-(wT(1-n*n)-1)});qs("Sine",function(n){return n===1?1:-M6(n*A6)+1});qs("Back",Xm("in"),Xm("out"),Xm());Gt.SteppedEase=Gt.steps=Ti.SteppedEase={config:function(t,r){t===void 0&&(t=1);var a=1/t,s=t+(r?0:1),u=r?1:0,c=1-An;return function(f){return((s*vc(0,c,f)|0)+u)*a}}};ec.ease=Gt["quad.out"];Jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return ry+=n+","+n+"Params,"});var IT=function(t,r){this.id=C6++,t._gsap=this,this.target=t,this.harness=r,this.get=r?r.get:DT,this.set=r?r.getSetter:cy},sc=function(){function n(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,al(this,+r.duration,1,1),this.data=r.data,be&&(this._ctx=be,be.data.push(this)),ac||xi.wake()}var t=n.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,al(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(sl(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(fh(this,a),!u._dp||u.parent||LT(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&gr(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===An||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),OT(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+nw(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+nw(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?rl(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?Yd(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-1e-8?0:this._rts,this.totalTime(vc(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),ch(this),B6(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==An&&(this._tTime-=An)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=Se(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&gr(s,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(Wn(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yd(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=L6);var s=mn;return mn=a,sy(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),mn=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,iw(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,iw(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Hi(this,a),Wn(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,Wn(s)),this._dur||(this._zTime=-1e-8),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-An)},t.eventCallback=function(a,s,u){var c=this.vars;return arguments.length>1?(s?(c[a]=s,u&&(c[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this,u=s._prom;return new Promise(function(c){var f=ze(a)?a:zT,h=function(){var g=s.then;s.then=null,u&&u(),ze(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=g),c(f),s.then=g};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?h():s._prom=h})},t.kill=function(){xu(this)},n}();Ei(sc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Qn=function(n){_T(t,n);function t(a,s){var u;return a===void 0&&(a={}),u=n.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=Wn(a.sortChildren),Te&&gr(a.parent||Te,Wr(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&NT(Wr(u),a.scrollTrigger),u}var r=t.prototype;return r.to=function(s,u,c){return ju(0,arguments,this),this},r.from=function(s,u,c){return ju(1,arguments,this),this},r.fromTo=function(s,u,c,f){return ju(2,arguments,this),this},r.set=function(s,u,c){return u.duration=0,u.parent=this,Ou(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new $e(s,u,Hi(this,c),1),this},r.call=function(s,u,c){return gr(this,$e.delayedCall(0,s,u),c)},r.staggerTo=function(s,u,c,f,h,p,g){return c.duration=u,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=g,c.parent=this,new $e(s,c,Hi(this,h)),this},r.staggerFrom=function(s,u,c,f,h,p,g){return c.runBackwards=1,Ou(c).immediateRender=Wn(c.immediateRender),this.staggerTo(s,u,c,f,h,p,g)},r.staggerFromTo=function(s,u,c,f,h,p,g,y){return f.startAt=c,Ou(f).immediateRender=Wn(f.immediateRender),this.staggerTo(s,u,f,h,p,g,y)},r.render=function(s,u,c){var f=this._time,h=this._dirty?this.totalDuration():this._tDur,p=this._dur,g=s<=0?0:Se(s),y=this._zTime<0!=s<0&&(this._initted||!p),x,v,_,S,C,A,M,R,j,D,N,z;if(this!==Te&&g>h&&s>=0&&(g=h),g!==this._tTime||c||y){if(f!==this._time&&p&&(g+=this._time-f,s+=this._time-f),x=g,j=this._start,R=this._ts,A=!R,y&&(p||(f=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(N=this._yoyo,C=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(C*100+s,u,c);if(x=Se(g%C),g===h?(S=this._repeat,x=p):(D=Se(g/C),S=~~D,S&&S===D&&(x=p,S--),x>p&&(x=p)),D=rl(this._tTime,C),!f&&this._tTime&&D!==S&&this._tTime-D*C-this._dur<=0&&(D=S),N&&S&1&&(x=p-x,z=1),S!==D&&!this._lock){var B=N&&D&1,X=B===(N&&S&1);if(S<D&&(B=!B),f=B?0:g%p?p:g,this._lock=1,this.render(f||(z?0:Se(S*C)),u,!p)._lock=0,this._tTime=g,!u&&this.parent&&_i(this,"onRepeat"),this.vars.repeatRefresh&&!z&&(this.invalidate()._lock=1,D=S),f&&f!==this._time||A!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,h=this._tDur,X&&(this._lock=2,f=B?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!z&&this.invalidate()),this._lock=0,!this._ts&&!A)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=G6(this,Se(f),Se(x)),M&&(g-=x-(x=M._start))),this._tTime=g,this._time=x,this._act=!!R,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&g&&p&&!u&&!D&&(_i(this,"onStart"),this._tTime!==g))return this;if(x>=f&&s>=0)for(v=this._first;v;){if(_=v._next,(v._act||x>=v._start)&&v._ts&&M!==v){if(v.parent!==this)return this.render(s,u,c);if(v.render(v._ts>0?(x-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(x-v._start)*v._ts,u,c),x!==this._time||!this._ts&&!A){M=0,_&&(g+=this._zTime=-1e-8);break}}v=_}else{v=this._last;for(var Z=s<0?s:x;v;){if(_=v._prev,(v._act||Z<=v._end)&&v._ts&&M!==v){if(v.parent!==this)return this.render(s,u,c);if(v.render(v._ts>0?(Z-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(Z-v._start)*v._ts,u,c||mn&&sy(v)),x!==this._time||!this._ts&&!A){M=0,_&&(g+=this._zTime=Z?-1e-8:An);break}}v=_}}if(M&&!u&&(this.pause(),M.render(x>=f?0:-1e-8)._zTime=x>=f?1:-1,this._ts))return this._start=j,ch(this),this.render(s,u,c);this._onUpdate&&!u&&_i(this,"onUpdate",!0),(g===h&&this._tTime>=this.totalDuration()||!g&&f)&&(j===this._start||Math.abs(R)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(g===h&&this._ts>0||!g&&this._ts<0)&&Fa(this,1),!u&&!(s<0&&!f)&&(g||f||!h)&&(_i(this,g===h&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<h&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(s,u){var c=this;if(sa(u)||(u=Hi(this,u,s)),!(s instanceof sc)){if(Cn(s))return s.forEach(function(f){return c.add(f,u)}),this;if(on(s))return this.addLabel(s,u);if(ze(s))s=$e.delayedCall(0,s);else return this}return this!==s?gr(this,s,u):this},r.getChildren=function(s,u,c,f){s===void 0&&(s=!0),u===void 0&&(u=!0),c===void 0&&(c=!0),f===void 0&&(f=-1e8);for(var h=[],p=this._first;p;)p._start>=f&&(p instanceof $e?u&&h.push(p):(c&&h.push(p),s&&h.push.apply(h,p.getChildren(!0,u,c)))),p=p._next;return h},r.getById=function(s){for(var u=this.getChildren(1,1,1),c=u.length;c--;)if(u[c].vars.id===s)return u[c]},r.remove=function(s){return on(s)?this.removeLabel(s):ze(s)?this.killTweensOf(s):(s.parent===this&&uh(this,s),s===this._recent&&(this._recent=this._last),ks(this))},r.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(xi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),n.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},r.addLabel=function(s,u){return this.labels[s]=Hi(this,u),this},r.removeLabel=function(s){return delete this.labels[s],this},r.addPause=function(s,u,c){var f=$e.delayedCall(0,u||ic,c);return f.data="isPause",this._hasPause=1,gr(this,f,Hi(this,s))},r.removePause=function(s){var u=this._first;for(s=Hi(this,s);u;)u._start===s&&u.data==="isPause"&&Fa(u),u=u._next},r.killTweensOf=function(s,u,c){for(var f=this.getTweensOf(s,c),h=f.length;h--;)Na!==f[h]&&f[h].kill(s,u);return this},r.getTweensOf=function(s,u){for(var c=[],f=Xi(s),h=this._first,p=sa(u),g;h;)h instanceof $e?N6(h._targets,f)&&(p?(!Na||h._initted&&h._ts)&&h.globalTime(0)<=u&&h.globalTime(h.totalDuration())>u:!u||h.isActive())&&c.push(h):(g=h.getTweensOf(f,u)).length&&c.push.apply(c,g),h=h._next;return c},r.tweenTo=function(s,u){u=u||{};var c=this,f=Hi(c,s),h=u,p=h.startAt,g=h.onStart,y=h.onStartParams,x=h.immediateRender,v,_=$e.to(c,Ei({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:u.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||An,onStart:function(){if(c.pause(),!v){var C=u.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());_._dur!==C&&al(_,C,0,1).render(_._time,!0,!0),v=1}g&&g.apply(_,y||[])}},u));return x?_.render(0):_},r.tweenFromTo=function(s,u,c){return this.tweenTo(u,Ei({startAt:{time:Hi(this,s)}},c))},r.recent=function(){return this._recent},r.nextLabel=function(s){return s===void 0&&(s=this._time),rw(this,Hi(this,s))},r.previousLabel=function(s){return s===void 0&&(s=this._time),rw(this,Hi(this,s),1)},r.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+An)},r.shiftChildren=function(s,u,c){c===void 0&&(c=0);var f=this._first,h=this.labels,p;for(s=Se(s);f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(u)for(p in h)h[p]>=c&&(h[p]+=s);return ks(this)},r.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return n.prototype.invalidate.call(this,s)},r.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,c;u;)c=u._next,this.remove(u),u=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ks(this)},r.totalDuration=function(s){var u=0,c=this,f=c._last,h=Sr,p,g,y;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(y=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),g=f._start,g>h&&c._sort&&f._ts&&!c._lock?(c._lock=1,gr(c,f,g-f._delay,1)._lock=0):h=g,g<0&&f._ts&&(u-=g,(!y&&!c._dp||y&&y.smoothChildTiming)&&(c._start+=Se(g/c._ts),c._time-=g,c._tTime-=g),c.shiftChildren(-g,!1,-1/0),h=0),f._end>u&&f._ts&&(u=f._end),f=p;al(c,c===Te&&c._time>u?c._time:u,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(Te._ts&&(OT(Te,Yd(s,Te)),RT=xi.frame),xi.frame>=tw){tw+=Si.autoSleep||120;var u=Te._first;if((!u||!u._ts)&&Si.autoSleep&&xi._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||xi.sleep()}}},t}(sc);Ei(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var sO=function(t,r,a,s,u,c,f){var h=new ti(this._pt,t,r,0,1,i5,null,u),p=0,g=0,y,x,v,_,S,C,A,M;for(h.b=a,h.e=s,a+="",s+="",(A=~s.indexOf("random("))&&(s=rc(s)),c&&(M=[a,s],c(M,t,r),a=M[0],s=M[1]),x=a.match(Um)||[];y=Um.exec(s);)_=y[0],S=s.substring(p,y.index),v?v=(v+1)%5:S.substr(-5)==="rgba("&&(v=1),_!==x[g++]&&(C=parseFloat(x[g-1])||0,h._pt={_next:h._pt,p:S||g===1?S:",",s:C,c:_.charAt(1)==="="?Yo(C,_)-C:parseFloat(_)-C,m:v&&v<4?Math.round:0},p=Um.lastIndex);return h.c=p<s.length?s.substring(p,s.length):"",h.fp=f,(ET.test(s)||A)&&(h.e=0),this._pt=h,h},oy=function(t,r,a,s,u,c,f,h,p,g){ze(s)&&(s=s(u||0,t,c));var y=t[r],x=a!=="get"?a:ze(y)?p?t[r.indexOf("set")||!ze(t["get"+r.substr(3)])?r:"get"+r.substr(3)](p):t[r]():y,v=ze(y)?p?fO:e5:uy,_;if(on(s)&&(~s.indexOf("random(")&&(s=rc(s)),s.charAt(1)==="="&&(_=Yo(x,s)+(Sn(x)||0),(_||_===0)&&(s=_))),!g||x!==s||X0)return!isNaN(x*s)&&s!==""?(_=new ti(this._pt,t,r,+x||0,s-(x||0),typeof y=="boolean"?hO:n5,0,v),p&&(_.fp=p),f&&_.modifier(f,this,t),this._pt=_):(!y&&!(r in t)&&ny(r,s),sO.call(this,t,r,x,s,v,h||Si.stringFilter,p))},oO=function(t,r,a,s,u){if(ze(t)&&(t=zu(t,u,r,a,s)),!Ar(t)||t.style&&t.nodeType||Cn(t)||ST(t))return on(t)?zu(t,u,r,a,s):t;var c={},f;for(f in t)c[f]=zu(t[f],u,r,a,s);return c},WT=function(t,r,a,s,u,c){var f,h,p,g;if(yi[t]&&(f=new yi[t]).init(u,f.rawVars?r[t]:oO(r[t],s,u,c,a),a,s,c)!==!1&&(a._pt=h=new ti(a._pt,u,t,0,1,f.render,f,0,f.priority),a!==Uo))for(p=a._ptLookup[a._targets.indexOf(u)],g=f._props.length;g--;)p[f._props[g]]=h;return f},Na,X0,ly=function n(t,r,a){var s=t.vars,u=s.ease,c=s.startAt,f=s.immediateRender,h=s.lazy,p=s.onUpdate,g=s.runBackwards,y=s.yoyoEase,x=s.keyframes,v=s.autoRevert,_=t._dur,S=t._startAt,C=t._targets,A=t.parent,M=A&&A.data==="nested"?A.vars.targets:C,R=t._overwrite==="auto"&&!Wg,j=t.timeline,D=s.easeReverse||y,N,z,B,X,Z,ot,tt,wt,pt,gt,Y,$,J;if(j&&(!x||!u)&&(u="none"),t._ease=Ls(u,ec.ease),t._rEase=D&&(Ls(D)||t._ease),t._from=!j&&!!s.runBackwards,t._from&&(t.ratio=1),!j||x&&!s.stagger){if(wt=C[0]?zs(C[0]).harness:0,$=wt&&s[wt.prop],N=Hd(s,iy),S&&(S._zTime<0&&S.progress(1),r<0&&g&&f&&!v?S.render(-1,!0):S.revert(g&&_?yd:k6),S._lazy=0),c){if(Fa(t._startAt=$e.set(C,Ei({data:"isStart",overwrite:!1,parent:A,immediateRender:!0,lazy:!S&&Wn(h),startAt:null,delay:0,onUpdate:p&&function(){return _i(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,r<0&&(mn||!f&&!v)&&t._startAt.revert(yd),f&&_&&r<=0&&a<=0){r&&(t._zTime=r);return}}else if(g&&_&&!S){if(r&&(f=!1),B=Ei({overwrite:!1,data:"isFromStart",lazy:f&&!S&&Wn(h),immediateRender:f,stagger:0,parent:A},N),$&&(B[wt.prop]=$),Fa(t._startAt=$e.set(C,B)),t._startAt._dp=0,t._startAt._sat=t,r<0&&(mn?t._startAt.revert(yd):t._startAt.render(-1,!0)),t._zTime=r,!f)n(t._startAt,An,An);else if(!r)return}for(t._pt=t._ptCache=0,h=_&&Wn(h)||h&&!_,z=0;z<C.length;z++){if(Z=C[z],tt=Z._gsap||ay(C)[z]._gsap,t._ptLookup[z]=gt={},V0[tt.id]&&Ha.length&&Ud(),Y=M===C?z:M.indexOf(Z),wt&&(pt=new wt).init(Z,$||N,t,Y,M)!==!1&&(t._pt=X=new ti(t._pt,Z,pt.name,0,1,pt.render,pt,0,pt.priority),pt._props.forEach(function(at){gt[at]=X}),pt.priority&&(ot=1)),!wt||$)for(B in N)yi[B]&&(pt=WT(B,N,t,Y,Z,M))?pt.priority&&(ot=1):gt[B]=X=oy.call(t,Z,B,"get",N[B],Y,M,0,s.stringFilter);t._op&&t._op[z]&&t.kill(Z,t._op[z]),R&&t._pt&&(Na=t,Te.killTweensOf(Z,gt,t.globalTime(r)),J=!t.parent,Na=0),t._pt&&h&&(V0[tt.id]=1)}ot&&r5(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!J,x&&r<=0&&j.render(Sr,!0,!0)},lO=function(t,r,a,s,u,c,f,h){var p=(t._pt&&t._ptCache||(t._ptCache={}))[r],g,y,x,v;if(!p)for(p=t._ptCache[r]=[],x=t._ptLookup,v=t._targets.length;v--;){if(g=x[v][r],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==r&&g.fp!==r;)g=g._next;if(!g)return X0=1,t.vars[r]="+=0",ly(t,f),X0=0,h?nc(r+" not eligible for reset. Try splitting into individual properties"):1;p.push(g)}for(v=p.length;v--;)y=p[v],g=y._pt||y,g.s=(s||s===0)&&!u?s:g.s+(s||0)+c*g.c,g.c=a-g.s,y.e&&(y.e=Ve(a)+Sn(y.e)),y.b&&(y.b=g.s+Sn(y.b))},uO=function(t,r){var a=t[0]?zs(t[0]).harness:0,s=a&&a.aliases,u,c,f,h;if(!s)return r;u=il({},r);for(c in s)if(c in u)for(h=s[c].split(","),f=h.length;f--;)u[h[f]]=u[c];return u},cO=function(t,r,a,s){var u=r.ease||s||"power1.inOut",c,f;if(Cn(r))f=a[t]||(a[t]=[]),r.forEach(function(h,p){return f.push({t:p/(r.length-1)*100,v:h,e:u})});else for(c in r)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:r[c],e:u})},zu=function(t,r,a,s,u){return ze(t)?t.call(r,a,s,u):on(t)&&~t.indexOf("random(")?rc(t):t},JT=ry+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",t5={};Jn(JT+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return t5[n]=1});var $e=function(n){_T(t,n);function t(a,s,u,c){var f;typeof s=="number"&&(u.duration=s,s=u,u=null),f=n.call(this,c?s:Ou(s))||this;var h=f.vars,p=h.duration,g=h.delay,y=h.immediateRender,x=h.stagger,v=h.overwrite,_=h.keyframes,S=h.defaults,C=h.scrollTrigger,A=s.parent||Te,M=(Cn(a)||ST(a)?sa(a[0]):"length"in s)?[a]:Xi(a),R,j,D,N,z,B,X,Z;if(f._targets=M.length?ay(M):nc("GSAP target "+a+" not found. https://gsap.com",!Si.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=v,_||x||Lf(p)||Lf(g)){s=f.vars;var ot=s.easeReverse||s.yoyoEase;if(R=f.timeline=new Qn({data:"nested",defaults:S||{},targets:A&&A.data==="nested"?A.vars.targets:M}),R.kill(),R.parent=R._dp=Wr(f),R._start=0,x||Lf(p)||Lf(g)){if(N=M.length,X=x&&UT(x),Ar(x))for(z in x)~JT.indexOf(z)&&(Z||(Z={}),Z[z]=x[z]);for(j=0;j<N;j++)D=Hd(s,t5),D.stagger=0,ot&&(D.easeReverse=ot),Z&&il(D,Z),B=M[j],D.duration=+zu(p,Wr(f),j,B,M),D.delay=(+zu(g,Wr(f),j,B,M)||0)-f._delay,!x&&N===1&&D.delay&&(f._delay=g=D.delay,f._start+=g,D.delay=0),R.to(B,D,X?X(j,B,M):0),R._ease=Gt.none;R.duration()?p=g=0:f.timeline=0}else if(_){Ou(Ei(R.vars.defaults,{ease:"none"})),R._ease=Ls(_.ease||s.ease||"none");var tt=0,wt,pt,gt;if(Cn(_))_.forEach(function(Y){return R.to(M,Y,">")}),R.duration();else{D={};for(z in _)z==="ease"||z==="easeEach"||cO(z,_[z],D,_.easeEach);for(z in D)for(wt=D[z].sort(function(Y,$){return Y.t-$.t}),tt=0,j=0;j<wt.length;j++)pt=wt[j],gt={ease:pt.e,duration:(pt.t-(j?wt[j-1].t:0))/100*p},gt[z]=pt.v,R.to(M,gt,tt),tt+=gt.duration;R.duration()<p&&R.to({},{duration:p-R.duration()})}}p||f.duration(p=R.duration())}else f.timeline=0;return v===!0&&!Wg&&(Na=Wr(f),Te.killTweensOf(M),Na=0),gr(A,Wr(f),u),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(y||!p&&!_&&f._start===Se(A._time)&&Wn(y)&&U6(Wr(f))&&A.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-g)||0)),C&&NT(Wr(f),C),f}var r=t.prototype;return r.render=function(s,u,c){var f=this._time,h=this._tDur,p=this._dur,g=s<0,y=s>h-An&&!g?h:s<An?0:s,x,v,_,S,C,A,M,R;if(!p)Y6(this,s,u,c);else if(y!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(x=y,R=this.timeline,this._repeat){if(S=p+this._rDelay,this._repeat<-1&&g)return this.totalTime(S*100+s,u,c);if(x=Se(y%S),y===h?(_=this._repeat,x=p):(C=Se(y/S),_=~~C,_&&_===C?(x=p,_--):x>p&&(x=p)),A=this._yoyo&&_&1,A&&(x=p-x),C=rl(this._tTime,S),x===f&&!c&&this._initted&&_===C)return this._tTime=y,this;_!==C&&this.vars.repeatRefresh&&!A&&!this._lock&&x!==S&&this._initted&&(this._lock=c=1,this.render(Se(S*_),!0).invalidate()._lock=0)}if(!this._initted){if(PT(this,g?s:x,c,u,y))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&_!==C))return this;if(p!==this._dur)return this.render(s,u,c)}if(this._rEase){var j=x<f;if(j!==this._inv){var D=j?f:p-f;this._inv=j,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=D?(j?-1:1)/D:0,this._invScale=j?-this.ratio:1-this.ratio,this._invEase=j?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((x-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(x/p);if(this._from&&(this.ratio=M=1-M),this._tTime=y,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&y&&!u&&!C&&(_i(this,"onStart"),this._tTime!==y))return this;for(v=this._pt;v;)v.r(M,v.d),v=v._next;R&&R.render(s<0?s:R._dur*R._ease(x/this._dur),u,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(g&&B0(this,s,u,c),_i(this,"onUpdate")),this._repeat&&_!==C&&this.vars.onRepeat&&!u&&this.parent&&_i(this,"onRepeat"),(y===this._tDur||!y)&&this._tTime===y&&(g&&!this._onUpdate&&B0(this,s,!0,!0),(s||!p)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&Fa(this,1),!u&&!(g&&!f)&&(y||f||A)&&(_i(this,y===h?"onComplete":"onReverseComplete",!0),this._prom&&!(y<h&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),n.prototype.invalidate.call(this,s)},r.resetTo=function(s,u,c,f,h){ac||xi.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||ly(this,p),g=this._ease(p/this._dur),lO(this,s,u,c,f,g,p,h)?this.resetTo(s,u,c,f,1):(fh(this,0),this.parent||kT(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?xu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,Na&&Na.vars.overwrite!==!0)._first||xu(this),this.parent&&c!==this.timeline.totalDuration()&&al(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,h=s?Xi(s):f,p=this._ptLookup,g=this._pt,y,x,v,_,S,C,A;if((!u||u==="all")&&V6(f,h))return u==="all"&&(this._pt=0),xu(this);for(y=this._op=this._op||[],u!=="all"&&(on(u)&&(S={},Jn(u,function(M){return S[M]=1}),u=S),u=uO(f,u)),A=f.length;A--;)if(~h.indexOf(f[A])){x=p[A],u==="all"?(y[A]=u,_=x,v={}):(v=y[A]=y[A]||{},_=u);for(S in _)C=x&&x[S],C&&((!("kill"in C.d)||C.d.kill(S)===!0)&&uh(this,C,"_pt"),delete x[S]),v!=="all"&&(v[S]=1)}return this._initted&&!this._pt&&g&&xu(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return ju(1,arguments)},t.delayedCall=function(s,u,c,f){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,u,c){return ju(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,c){return Te.killTweensOf(s,u,c)},t}(sc);Ei($e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jn("staggerTo,staggerFrom,staggerFromTo",function(n){$e[n]=function(){var t=new Qn,r=H0.call(arguments,0);return r.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,r)}});var uy=function(t,r,a){return t[r]=a},e5=function(t,r,a){return t[r](a)},fO=function(t,r,a,s){return t[r](s.fp,a)},dO=function(t,r,a){return t.setAttribute(r,a)},cy=function(t,r){return ze(t[r])?e5:Jg(t[r])&&t.setAttribute?dO:uy},n5=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e6)/1e6,r)},hO=function(t,r){return r.set(r.t,r.p,!!(r.s+r.c*t),r)},i5=function(t,r){var a=r._pt,s="";if(!t&&r.b)s=r.b;else if(t===1&&r.e)s=r.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=r.c}r.set(r.t,r.p,s,r)},fy=function(t,r){for(var a=r._pt;a;)a.r(t,a.d),a=a._next},pO=function(t,r,a,s){for(var u=this._pt,c;u;)c=u._next,u.p===s&&u.modifier(t,r,a),u=c},mO=function(t){for(var r=this._pt,a,s;r;)s=r._next,r.p===t&&!r.op||r.op===t?uh(this,r,"_pt"):r.dep||(a=1),r=s;return!a},gO=function(t,r,a,s){s.mSet(t,r,s.m.call(s.tween,a,s.mt),s)},r5=function(t){for(var r=t._pt,a,s,u,c;r;){for(a=r._next,s=u;s&&s.pr>r.pr;)s=s._next;(r._prev=s?s._prev:c)?r._prev._next=r:u=r,(r._next=s)?s._prev=r:c=r,r=a}t._pt=u},ti=function(){function n(r,a,s,u,c,f,h,p,g){this.t=a,this.s=u,this.c=c,this.p=s,this.r=f||n5,this.d=h||this,this.set=p||uy,this.pr=g||0,this._next=r,r&&(r._prev=this)}var t=n.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=gO,this.m=a,this.mt=u,this.tween=s},n}();Jn(ry+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return iy[n]=1});Ti.TweenMax=Ti.TweenLite=$e;Ti.TimelineLite=Ti.TimelineMax=Qn;Te=new Qn({sortChildren:!1,defaults:ec,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=ZT;var Ns=[],xd={},yO=[],sw=0,vO=0,qm=function(t){return(xd[t]||yO).map(function(r){return r()})},q0=function(){var t=Date.now(),r=[];t-sw>2&&(qm("matchMediaInit"),Ns.forEach(function(a){var s=a.queries,u=a.conditions,c,f,h,p;for(f in s)c=hr.matchMedia(s[f]).matches,c&&(h=1),c!==u[f]&&(u[f]=c,p=1);p&&(a.revert(),h&&r.push(a))}),qm("matchMediaRevert"),r.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),sw=t,qm("matchMedia"))},a5=function(){function n(r,a){this.selector=a&&Y0(a),this.data=[],this._r=[],this.isReverted=!1,this.id=vO++,r&&this.add(r)}var t=n.prototype;return t.add=function(a,s,u){ze(a)&&(u=s,s=a,a=ze);var c=this,f=function(){var p=be,g=c.selector,y;return p&&p!==c&&p.data.push(c),u&&(c.selector=Y0(u)),be=c,y=s.apply(c,arguments),ze(y)&&c._r.push(y),be=p,c.selector=g,c.isReverted=!1,y};return c.last=f,a===ze?f(c,function(h){return c.add(null,h)}):a?c[a]=f:f},t.ignore=function(a){var s=be;be=null,a(this),be=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof n?a.push.apply(a,s.getTweens()):s instanceof $e&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?function(){for(var f=u.getTweens(),h=u.data.length,p;h--;)p=u.data[h],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(g){return f.splice(f.indexOf(g),1)}));for(f.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,y){return y.g-g.g||-1/0}).forEach(function(g){return g.t.revert(a)}),h=u.data.length;h--;)p=u.data[h],p instanceof Qn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof $e)&&p.revert&&p.revert(a);u._r.forEach(function(g){return g(a,u)}),u.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Ns.length;c--;)Ns[c].id===this.id&&Ns.splice(c,1)},t.revert=function(a){this.kill(a||{})},n}(),xO=function(){function n(r){this.contexts=[],this.scope=r,be&&be.data.push(this)}var t=n.prototype;return t.add=function(a,s,u){Ar(a)||(a={matches:a});var c=new a5(0,u||this.scope),f=c.conditions={},h,p,g;be&&!c.selector&&(c.selector=be.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(p in a)p==="all"?g=1:(h=hr.matchMedia(a[p]),h&&(Ns.indexOf(c)<0&&Ns.push(c),(f[p]=h.matches)&&(g=1),h.addListener?h.addListener(q0):h.addEventListener("change",q0)));return g&&s(c,function(y){return c.add(null,y)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},n}(),Gd={registerPlugin:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];r.forEach(function(s){return FT(s)})},timeline:function(t){return new Qn(t)},getTweensOf:function(t,r){return Te.getTweensOf(t,r)},getProperty:function(t,r,a,s){on(t)&&(t=Xi(t)[0]);var u=zs(t||{}).get,c=a?zT:jT;return a==="native"&&(a=""),t&&(r?c((yi[r]&&yi[r].get||u)(t,r,a,s)):function(f,h,p){return c((yi[f]&&yi[f].get||u)(t,f,h,p))})},quickSetter:function(t,r,a){if(t=Xi(t),t.length>1){var s=t.map(function(g){return ni.quickSetter(g,r,a)}),u=s.length;return function(g){for(var y=u;y--;)s[y](g)}}t=t[0]||{};var c=yi[r],f=zs(t),h=f.harness&&(f.harness.aliases||{})[r]||r,p=c?function(g){var y=new c;Uo._pt=0,y.init(t,a?g+a:g,Uo,0,[t]),y.render(1,y),Uo._pt&&fy(1,Uo)}:f.set(t,h);return c?p:function(g){return p(t,h,a?g+a:g,f,1)}},quickTo:function(t,r,a){var s,u=ni.to(t,Ei((s={},s[r]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(h,p,g){return u.resetTo(r,h,p,g)};return c.tween=u,c},isTweening:function(t){return Te.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ls(t.ease,ec.ease)),ew(ec,t||{})},config:function(t){return ew(Si,t||{})},registerEffect:function(t){var r=t.name,a=t.effect,s=t.plugins,u=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!yi[f]&&!Ti[f]&&nc(r+" effect requires "+f+" plugin.")}),Hm[r]=function(f,h,p){return a(Xi(f),Ei(h||{},u),p)},c&&(Qn.prototype[r]=function(f,h,p){return this.add(Hm[r](f,Ar(h)?h:(p=h)&&{},this),p)})},registerEase:function(t,r){Gt[t]=Ls(r)},parseEase:function(t,r){return arguments.length?Ls(t,r):Gt},getById:function(t){return Te.getById(t)},exportRoot:function(t,r){t===void 0&&(t={});var a=new Qn(t),s,u;for(a.smoothChildTiming=Wn(t.smoothChildTiming),Te.remove(a),a._dp=0,a._time=a._tTime=Te._time,s=Te._first;s;)u=s._next,(r||!(!s._dur&&s instanceof $e&&s.vars.onComplete===s._targets[0]))&&gr(a,s,s._start-s._delay),s=u;return gr(Te,a,0),a},context:function(t,r){return t?new a5(t,r):be},matchMedia:function(t){return new xO(t)},matchMediaRefresh:function(){return Ns.forEach(function(t){var r=t.conditions,a,s;for(s in r)r[s]&&(r[s]=!1,a=1);a&&t.revert()})||q0()},addEventListener:function(t,r){var a=xd[t]||(xd[t]=[]);~a.indexOf(r)||a.push(r)},removeEventListener:function(t,r){var a=xd[t],s=a&&a.indexOf(r);s>=0&&a.splice(s,1)},utils:{wrap:Q6,wrapYoyo:I6,distribute:UT,random:YT,snap:HT,normalize:Z6,getUnit:Sn,clamp:q6,splitColor:$T,toArray:Xi,selector:Y0,mapRange:XT,pipe:$6,unitize:K6,interpolate:W6,shuffle:BT},install:CT,effects:Hm,ticker:xi,updateRoot:Qn.updateRoot,plugins:yi,globalTimeline:Te,core:{PropTween:ti,globals:MT,Tween:$e,Timeline:Qn,Animation:sc,getCache:zs,_removeLinkedListItem:uh,reverting:function(){return mn},context:function(t){return t&&be&&(be.data.push(t),t._ctx=be),be},suppressOverwrites:function(t){return Wg=t}}};Jn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Gd[n]=$e[n]});xi.add(Qn.updateRoot);Uo=Gd.to({},{duration:0});var bO=function(t,r){for(var a=t._pt;a&&a.p!==r&&a.op!==r&&a.fp!==r;)a=a._next;return a},_O=function(t,r){var a=t._targets,s,u,c;for(s in r)for(u=a.length;u--;)c=t._ptLookup[u][s],c&&(c=c.d)&&(c._pt&&(c=bO(c,s)),c&&c.modifier&&c.modifier(r[s],t,a[u],s))},Fm=function(t,r){return{name:t,headless:1,rawVars:1,init:function(s,u,c){c._onInit=function(f){var h,p;if(on(u)&&(h={},Jn(u,function(g){return h[g]=1}),u=h),r){h={};for(p in u)h[p]=r(u[p]);u=h}_O(f,u)}}}},ni=Gd.registerPlugin({name:"attr",init:function(t,r,a,s,u){var c,f,h;this.tween=a;for(c in r)h=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(h||0)+"",r[c],s,u,0,0,c),f.op=c,f.b=h,this._props.push(c)},render:function(t,r){for(var a=r._pt;a;)mn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,r){for(var a=r.length;a--;)this.add(t,a,t[a]||0,r[a],0,0,0,0,0,1)}},Fm("roundProps",G0),Fm("modifiers"),Fm("snap",HT))||Gd;$e.version=Qn.version=ni.version="3.15.0";AT=1;ty()&&sl();Gt.Power0;Gt.Power1;Gt.Power2;Gt.Power3;Gt.Power4;Gt.Linear;Gt.Quad;Gt.Cubic;Gt.Quart;Gt.Quint;Gt.Strong;Gt.Elastic;Gt.Back;Gt.SteppedEase;Gt.Bounce;Gt.Sine;Gt.Expo;Gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ow,Pa,Go,dy,Cs,lw,hy,wO=function(){return typeof window<"u"},oa={},_s=180/Math.PI,Xo=Math.PI/180,Co=Math.atan2,uw=1e8,py=/([A-Z])/g,SO=/(left|right|width|margin|padding|x)/i,TO=/[\s,\(]\S/,yr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},F0=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},EO=function(t,r){return r.set(r.t,r.p,t===1?r.e:Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},AO=function(t,r){return r.set(r.t,r.p,t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},CO=function(t,r){return r.set(r.t,r.p,t===1?r.e:t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},MO=function(t,r){var a=r.s+r.c*t;r.set(r.t,r.p,~~(a+(a<0?-.5:.5))+r.u,r)},s5=function(t,r){return r.set(r.t,r.p,t?r.e:r.b,r)},o5=function(t,r){return r.set(r.t,r.p,t!==1?r.b:r.e,r)},RO=function(t,r,a){return t.style[r]=a},DO=function(t,r,a){return t.style.setProperty(r,a)},OO=function(t,r,a){return t._gsap[r]=a},jO=function(t,r,a){return t._gsap.scaleX=t._gsap.scaleY=a},zO=function(t,r,a,s,u){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(u,c)},kO=function(t,r,a,s,u){var c=t._gsap;c[r]=a,c.renderTransform(u,c)},Ae="transform",ei=Ae+"Origin",LO=function n(t,r){var a=this,s=this.target,u=s.style,c=s._gsap;if(t in oa&&u){if(this.tfm=this.tfm||{},t!=="transform")t=yr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Jr(s,f)}):this.tfm[t]=c.x?c[t]:Jr(s,t),t===ei&&(this.tfm.zOrigin=c.zOrigin);else return yr.transform.split(",").forEach(function(f){return n.call(a,f,r)});if(this.props.indexOf(Ae)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ei,r,"")),t=Ae}(u||r)&&this.props.push(t,r,u[t])},l5=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},NO=function(){var t=this.props,r=this.target,a=r.style,s=r._gsap,u,c;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?r[t[u]](t[u+2]):r[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(py,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),u=hy(),(!u||!u.isStart)&&!a[Ae]&&(l5(a),s.zOrigin&&a[ei]&&(a[ei]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},u5=function(t,r){var a={target:t,props:[],revert:NO,save:LO};return t._gsap||ni.core.getCache(t),r&&t.style&&t.nodeType&&r.split(",").forEach(function(s){return a.save(s)}),a},c5,$0=function(t,r){var a=Pa.createElementNS?Pa.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Pa.createElement(t);return a&&a.style?a:Pa.createElement(t)},wi=function n(t,r,a){var s=getComputedStyle(t);return s[r]||s.getPropertyValue(r.replace(py,"-$1").toLowerCase())||s.getPropertyValue(r)||!a&&n(t,ol(r)||r,1)||""},cw="O,Moz,ms,Ms,Webkit".split(","),ol=function(t,r,a){var s=r||Cs,u=s.style,c=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(cw[c]+t in u););return c<0?null:(c===3?"ms":c>=0?cw[c]:"")+t},K0=function(){wO()&&window.document&&(ow=window,Pa=ow.document,Go=Pa.documentElement,Cs=$0("div")||{style:{}},$0("div"),Ae=ol(Ae),ei=Ae+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",c5=!!ol("perspective"),hy=ni.core.reverting,dy=1)},fw=function(t){var r=t.ownerSVGElement,a=$0("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),Go.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),Go.removeChild(a),u},dw=function(t,r){for(var a=r.length;a--;)if(t.hasAttribute(r[a]))return t.getAttribute(r[a])},f5=function(t){var r,a;try{r=t.getBBox()}catch{r=fw(t),a=1}return r&&(r.width||r.height)||a||(r=fw(t)),r&&!r.width&&!r.x&&!r.y?{x:+dw(t,["x","cx","x1"])||0,y:+dw(t,["y","cy","y1"])||0,width:0,height:0}:r},d5=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&f5(t))},$a=function(t,r){if(r){var a=t.style,s;r in oa&&r!==ei&&(r=Ae),a.removeProperty?(s=r.substr(0,2),(s==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),a.removeProperty(s==="--"?r:r.replace(py,"-$1").toLowerCase())):a.removeAttribute(r)}},Va=function(t,r,a,s,u,c){var f=new ti(t._pt,r,a,0,1,c?o5:s5);return t._pt=f,f.b=s,f.e=u,t._props.push(a),f},hw={deg:1,rad:1,turn:1},PO={grid:1,flex:1},Ka=function n(t,r,a,s){var u=parseFloat(a)||0,c=(a+"").trim().substr((u+"").length)||"px",f=Cs.style,h=SO.test(r),p=t.tagName.toLowerCase()==="svg",g=(p?"client":"offset")+(h?"Width":"Height"),y=100,x=s==="px",v=s==="%",_,S,C,A;if(s===c||!u||hw[s]||hw[c])return u;if(c!=="px"&&!x&&(u=n(t,r,a,"px")),A=t.getCTM&&d5(t),(v||c==="%")&&(oa[r]||~r.indexOf("adius")))return _=A?t.getBBox()[h?"width":"height"]:t[g],Ve(v?u/_*y:u/100*_);if(f[h?"width":"height"]=y+(x?c:s),S=s!=="rem"&&~r.indexOf("adius")||s==="em"&&t.appendChild&&!p?t:t.parentNode,A&&(S=(t.ownerSVGElement||{}).parentNode),(!S||S===Pa||!S.appendChild)&&(S=Pa.body),C=S._gsap,C&&v&&C.width&&h&&C.time===xi.time&&!C.uncache)return Ve(u/C.width*y);if(v&&(r==="height"||r==="width")){var M=t.style[r];t.style[r]=y+s,_=t[g],M?t.style[r]=M:$a(t,r)}else(v||c==="%")&&!PO[wi(S,"display")]&&(f.position=wi(t,"position")),S===t&&(f.position="static"),S.appendChild(Cs),_=Cs[g],S.removeChild(Cs),f.position="absolute";return h&&v&&(C=zs(S),C.time=xi.time,C.width=S[g]),Ve(x?_*u/y:_&&u?y/_*u:0)},Jr=function(t,r,a,s){var u;return dy||K0(),r in yr&&r!=="transform"&&(r=yr[r],~r.indexOf(",")&&(r=r.split(",")[0])),oa[r]&&r!=="transform"?(u=lc(t,s),u=r!=="transformOrigin"?u[r]:u.svg?u.origin:qd(wi(t,ei))+" "+u.zOrigin+"px"):(u=t.style[r],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=Xd[r]&&Xd[r](t,r,a)||wi(t,r)||DT(t,r)||(r==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?Ka(t,r,u,a)+a:u},VO=function(t,r,a,s){if(!a||a==="none"){var u=ol(r,t,1),c=u&&wi(t,u,1);c&&c!==a?(r=u,a=c):r==="borderColor"&&(a=wi(t,"borderTopColor"))}var f=new ti(this._pt,t.style,r,0,1,i5),h=0,p=0,g,y,x,v,_,S,C,A,M,R,j,D;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=wi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(S=t.style[r],t.style[r]=s,s=wi(t,r)||s,S?t.style[r]=S:$a(t,r)),g=[a,s],ZT(g),a=g[0],s=g[1],x=a.match(Bo)||[],D=s.match(Bo)||[],D.length){for(;y=Bo.exec(s);)C=y[0],M=s.substring(h,y.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),C!==(S=x[p++]||"")&&(v=parseFloat(S)||0,j=S.substr((v+"").length),C.charAt(1)==="="&&(C=Yo(v,C)+j),A=parseFloat(C),R=C.substr((A+"").length),h=Bo.lastIndex-R.length,R||(R=R||Si.units[r]||j,h===s.length&&(s+=R,f.e+=R)),j!==R&&(v=Ka(t,r,S,R)||0),f._pt={_next:f._pt,p:M||p===1?M:",",s:v,c:A-v,m:_&&_<4||r==="zIndex"?Math.round:0});f.c=h<s.length?s.substring(h,s.length):""}else f.r=r==="display"&&s==="none"?o5:s5;return ET.test(s)&&(f.e=0),this._pt=f,f},pw={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BO=function(t){var r=t.split(" "),a=r[0],s=r[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),r[0]=pw[a]||a,r[1]=pw[s]||s,r.join(" ")},UO=function(t,r){if(r.tween&&r.tween._time===r.tween._dur){var a=r.t,s=a.style,u=r.u,c=a._gsap,f,h,p;if(u==="all"||u===!0)s.cssText="",h=1;else for(u=u.split(","),p=u.length;--p>-1;)f=u[p],oa[f]&&(h=1,f=f==="transformOrigin"?ei:Ae),$a(a,f);h&&($a(a,Ae),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",lc(a,1),c.uncache=1,l5(s)))}},Xd={clearProps:function(t,r,a,s,u){if(u.data!=="isFromStart"){var c=t._pt=new ti(t._pt,r,a,0,0,UO);return c.u=s,c.pr=-10,c.tween=u,t._props.push(a),1}}},oc=[1,0,0,1,0,0],h5={},p5=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},mw=function(t){var r=wi(t,Ae);return p5(r)?oc:r.substr(7).match(TT).map(Ve)},my=function(t,r){var a=t._gsap||zs(t),s=t.style,u=mw(t),c,f,h,p;return a.svg&&t.getAttribute("transform")?(h=t.transform.baseVal.consolidate().matrix,u=[h.a,h.b,h.c,h.d,h.e,h.f],u.join(",")==="1,0,0,1,0,0"?oc:u):(u===oc&&!t.offsetParent&&t!==Go&&!a.svg&&(h=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Go.appendChild(t)),u=mw(t),h?s.display=h:$a(t,"display"),p&&(f?c.insertBefore(t,f):c?c.appendChild(t):Go.removeChild(t))),r&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},Z0=function(t,r,a,s,u,c){var f=t._gsap,h=u||my(t,!0),p=f.xOrigin||0,g=f.yOrigin||0,y=f.xOffset||0,x=f.yOffset||0,v=h[0],_=h[1],S=h[2],C=h[3],A=h[4],M=h[5],R=r.split(" "),j=parseFloat(R[0])||0,D=parseFloat(R[1])||0,N,z,B,X;a?h!==oc&&(z=v*C-_*S)&&(B=j*(C/z)+D*(-S/z)+(S*M-C*A)/z,X=j*(-_/z)+D*(v/z)-(v*M-_*A)/z,j=B,D=X):(N=f5(t),j=N.x+(~R[0].indexOf("%")?j/100*N.width:j),D=N.y+(~(R[1]||R[0]).indexOf("%")?D/100*N.height:D)),s||s!==!1&&f.smooth?(A=j-p,M=D-g,f.xOffset=y+(A*v+M*S)-A,f.yOffset=x+(A*_+M*C)-M):f.xOffset=f.yOffset=0,f.xOrigin=j,f.yOrigin=D,f.smooth=!!s,f.origin=r,f.originIsAbsolute=!!a,t.style[ei]="0px 0px",c&&(Va(c,f,"xOrigin",p,j),Va(c,f,"yOrigin",g,D),Va(c,f,"xOffset",y,f.xOffset),Va(c,f,"yOffset",x,f.yOffset)),t.setAttribute("data-svg-origin",j+" "+D)},lc=function(t,r){var a=t._gsap||new IT(t);if("x"in a&&!r&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,c="px",f="deg",h=getComputedStyle(t),p=wi(t,ei)||"0",g,y,x,v,_,S,C,A,M,R,j,D,N,z,B,X,Z,ot,tt,wt,pt,gt,Y,$,J,at,T,K,et,it,rt,mt;return g=y=x=S=C=A=M=R=j=0,v=_=1,a.svg=!!(t.getCTM&&d5(t)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(s[Ae]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[Ae]!=="none"?h[Ae]:"")),s.scale=s.rotate=s.translate="none"),z=my(t,a.svg),a.svg&&(a.uncache?(J=t.getBBox(),p=a.xOrigin-J.x+"px "+(a.yOrigin-J.y)+"px",$=""):$=!r&&t.getAttribute("data-svg-origin"),Z0(t,$||p,!!$||a.originIsAbsolute,a.smooth!==!1,z)),D=a.xOrigin||0,N=a.yOrigin||0,z!==oc&&(ot=z[0],tt=z[1],wt=z[2],pt=z[3],g=gt=z[4],y=Y=z[5],z.length===6?(v=Math.sqrt(ot*ot+tt*tt),_=Math.sqrt(pt*pt+wt*wt),S=ot||tt?Co(tt,ot)*_s:0,M=wt||pt?Co(wt,pt)*_s+S:0,M&&(_*=Math.abs(Math.cos(M*Xo))),a.svg&&(g-=D-(D*ot+N*wt),y-=N-(D*tt+N*pt))):(mt=z[6],it=z[7],T=z[8],K=z[9],et=z[10],rt=z[11],g=z[12],y=z[13],x=z[14],B=Co(mt,et),C=B*_s,B&&(X=Math.cos(-B),Z=Math.sin(-B),$=gt*X+T*Z,J=Y*X+K*Z,at=mt*X+et*Z,T=gt*-Z+T*X,K=Y*-Z+K*X,et=mt*-Z+et*X,rt=it*-Z+rt*X,gt=$,Y=J,mt=at),B=Co(-wt,et),A=B*_s,B&&(X=Math.cos(-B),Z=Math.sin(-B),$=ot*X-T*Z,J=tt*X-K*Z,at=wt*X-et*Z,rt=pt*Z+rt*X,ot=$,tt=J,wt=at),B=Co(tt,ot),S=B*_s,B&&(X=Math.cos(B),Z=Math.sin(B),$=ot*X+tt*Z,J=gt*X+Y*Z,tt=tt*X-ot*Z,Y=Y*X-gt*Z,ot=$,gt=J),C&&Math.abs(C)+Math.abs(S)>359.9&&(C=S=0,A=180-A),v=Ve(Math.sqrt(ot*ot+tt*tt+wt*wt)),_=Ve(Math.sqrt(Y*Y+mt*mt)),B=Co(gt,Y),M=Math.abs(B)>2e-4?B*_s:0,j=rt?1/(rt<0?-rt:rt):0),a.svg&&($=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!p5(wi(t,Ae)),$&&t.setAttribute("transform",$))),Math.abs(M)>90&&Math.abs(M)<270&&(u?(v*=-1,M+=S<=0?180:-180,S+=S<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),r=r||a.uncache,a.x=g-((a.xPercent=g&&(!r&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-g)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=y-((a.yPercent=y&&(!r&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-y)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=x+c,a.scaleX=Ve(v),a.scaleY=Ve(_),a.rotation=Ve(S)+f,a.rotationX=Ve(C)+f,a.rotationY=Ve(A)+f,a.skewX=M+f,a.skewY=R+f,a.transformPerspective=j+c,(a.zOrigin=parseFloat(p.split(" ")[2])||!r&&a.zOrigin||0)&&(s[ei]=qd(p)),a.xOffset=a.yOffset=0,a.force3D=Si.force3D,a.renderTransform=a.svg?YO:c5?m5:HO,a.uncache=0,a},qd=function(t){return(t=t.split(" "))[0]+" "+t[1]},$m=function(t,r,a){var s=Sn(r);return Ve(parseFloat(r)+parseFloat(Ka(t,"x",a+"px",s)))+s},HO=function(t,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,m5(t,r)},ys="0deg",du="0px",vs=") ",m5=function(t,r){var a=r||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,h=a.z,p=a.rotation,g=a.rotationY,y=a.rotationX,x=a.skewX,v=a.skewY,_=a.scaleX,S=a.scaleY,C=a.transformPerspective,A=a.force3D,M=a.target,R=a.zOrigin,j="",D=A==="auto"&&t&&t!==1||A===!0;if(R&&(y!==ys||g!==ys)){var N=parseFloat(g)*Xo,z=Math.sin(N),B=Math.cos(N),X;N=parseFloat(y)*Xo,X=Math.cos(N),c=$m(M,c,z*X*-R),f=$m(M,f,-Math.sin(N)*-R),h=$m(M,h,B*X*-R+R)}C!==du&&(j+="perspective("+C+vs),(s||u)&&(j+="translate("+s+"%, "+u+"%) "),(D||c!==du||f!==du||h!==du)&&(j+=h!==du||D?"translate3d("+c+", "+f+", "+h+") ":"translate("+c+", "+f+vs),p!==ys&&(j+="rotate("+p+vs),g!==ys&&(j+="rotateY("+g+vs),y!==ys&&(j+="rotateX("+y+vs),(x!==ys||v!==ys)&&(j+="skew("+x+", "+v+vs),(_!==1||S!==1)&&(j+="scale("+_+", "+S+vs),M.style[Ae]=j||"translate(0, 0)"},YO=function(t,r){var a=r||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,h=a.rotation,p=a.skewX,g=a.skewY,y=a.scaleX,x=a.scaleY,v=a.target,_=a.xOrigin,S=a.yOrigin,C=a.xOffset,A=a.yOffset,M=a.forceCSS,R=parseFloat(c),j=parseFloat(f),D,N,z,B,X;h=parseFloat(h),p=parseFloat(p),g=parseFloat(g),g&&(g=parseFloat(g),p+=g,h+=g),h||p?(h*=Xo,p*=Xo,D=Math.cos(h)*y,N=Math.sin(h)*y,z=Math.sin(h-p)*-x,B=Math.cos(h-p)*x,p&&(g*=Xo,X=Math.tan(p-g),X=Math.sqrt(1+X*X),z*=X,B*=X,g&&(X=Math.tan(g),X=Math.sqrt(1+X*X),D*=X,N*=X)),D=Ve(D),N=Ve(N),z=Ve(z),B=Ve(B)):(D=y,B=x,N=z=0),(R&&!~(c+"").indexOf("px")||j&&!~(f+"").indexOf("px"))&&(R=Ka(v,"x",c,"px"),j=Ka(v,"y",f,"px")),(_||S||C||A)&&(R=Ve(R+_-(_*D+S*z)+C),j=Ve(j+S-(_*N+S*B)+A)),(s||u)&&(X=v.getBBox(),R=Ve(R+s/100*X.width),j=Ve(j+u/100*X.height)),X="matrix("+D+","+N+","+z+","+B+","+R+","+j+")",v.setAttribute("transform",X),M&&(v.style[Ae]=X)},GO=function(t,r,a,s,u){var c=360,f=on(u),h=parseFloat(u)*(f&&~u.indexOf("rad")?_s:1),p=h-s,g=s+p+"deg",y,x;return f&&(y=u.split("_")[1],y==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-360)),y==="cw"&&p<0?p=(p+c*uw)%c-~~(p/c)*c:y==="ccw"&&p>0&&(p=(p-c*uw)%c-~~(p/c)*c)),t._pt=x=new ti(t._pt,r,a,s,p,EO),x.e=g,x.u="deg",t._props.push(a),x},gw=function(t,r){for(var a in r)t[a]=r[a];return t},XO=function(t,r,a){var s=gw({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,h,p,g,y,x,v,_;s.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),c[Ae]=r,f=lc(a,1),$a(a,Ae),a.setAttribute("transform",p)):(p=getComputedStyle(a)[Ae],c[Ae]=r,f=lc(a,1),c[Ae]=p);for(h in oa)p=s[h],g=f[h],p!==g&&u.indexOf(h)<0&&(v=Sn(p),_=Sn(g),y=v!==_?Ka(a,h,p,_):parseFloat(p),x=parseFloat(g),t._pt=new ti(t._pt,f,h,y,x-y,F0),t._pt.u=_||0,t._props.push(h));gw(f,s)};Jn("padding,margin,Width,Radius",function(n,t){var r="Top",a="Right",s="Bottom",u="Left",c=(t<3?[r,a,s,u]:[r+u,r+a,s+a,s+u]).map(function(f){return t<2?n+f:"border"+f+n});Xd[t>1?"border"+n:n]=function(f,h,p,g,y){var x,v;if(arguments.length<4)return x=c.map(function(_){return Jr(f,_,p)}),v=x.join(" "),v.split(x[0]).length===5?x[0]:v;x=(g+"").split(" "),v={},c.forEach(function(_,S){return v[_]=x[S]=x[S]||x[(S-1)/2|0]}),f.init(h,v,y)}});var g5={name:"css",register:K0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,r,a,s,u){var c=this._props,f=t.style,h=a.vars.startAt,p,g,y,x,v,_,S,C,A,M,R,j,D,N,z,B,X;dy||K0(),this.styles=this.styles||u5(t),B=this.styles.props,this.tween=a;for(S in r)if(S!=="autoRound"&&(g=r[S],!(yi[S]&&WT(S,r,a,s,t,u)))){if(v=typeof g,_=Xd[S],v==="function"&&(g=g.call(a,s,t,u),v=typeof g),v==="string"&&~g.indexOf("random(")&&(g=rc(g)),_)_(this,t,S,g,a)&&(z=1);else if(S.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(S)+"").trim(),g+="",Ya.lastIndex=0,Ya.test(p)||(C=Sn(p),A=Sn(g),A?C!==A&&(p=Ka(t,S,p,A)+A):C&&(g+=C)),this.add(f,"setProperty",p,g,s,u,0,0,S),c.push(S),B.push(S,0,f[S]);else if(v!=="undefined"){if(h&&S in h?(p=typeof h[S]=="function"?h[S].call(a,s,t,u):h[S],on(p)&&~p.indexOf("random(")&&(p=rc(p)),Sn(p+"")||p==="auto"||(p+=Si.units[S]||Sn(Jr(t,S))||""),(p+"").charAt(1)==="="&&(p=Jr(t,S))):p=Jr(t,S),x=parseFloat(p),M=v==="string"&&g.charAt(1)==="="&&g.substr(0,2),M&&(g=g.substr(2)),y=parseFloat(g),S in yr&&(S==="autoAlpha"&&(x===1&&Jr(t,"visibility")==="hidden"&&y&&(x=0),B.push("visibility",0,f.visibility),Va(this,f,"visibility",x?"inherit":"hidden",y?"inherit":"hidden",!y)),S!=="scale"&&S!=="transform"&&(S=yr[S],~S.indexOf(",")&&(S=S.split(",")[0]))),R=S in oa,R){if(this.styles.save(S),X=g,v==="string"&&g.substring(0,6)==="var(--"){if(g=wi(t,g.substring(4,g.indexOf(")"))),g.substring(0,5)==="calc("){var Z=t.style.perspective;t.style.perspective=g,g=wi(t,"perspective"),Z?t.style.perspective=Z:$a(t,"perspective")}y=parseFloat(g)}if(j||(D=t._gsap,D.renderTransform&&!r.parseTransform||lc(t,r.parseTransform),N=r.smoothOrigin!==!1&&D.smooth,j=this._pt=new ti(this._pt,f,Ae,0,1,D.renderTransform,D,0,-1),j.dep=1),S==="scale")this._pt=new ti(this._pt,D,"scaleY",D.scaleY,(M?Yo(D.scaleY,M+y):y)-D.scaleY||0,F0),this._pt.u=0,c.push("scaleY",S),S+="X";else if(S==="transformOrigin"){B.push(ei,0,f[ei]),g=BO(g),D.svg?Z0(t,g,0,N,0,this):(A=parseFloat(g.split(" ")[2])||0,A!==D.zOrigin&&Va(this,D,"zOrigin",D.zOrigin,A),Va(this,f,S,qd(p),qd(g)));continue}else if(S==="svgOrigin"){Z0(t,g,1,N,0,this);continue}else if(S in h5){GO(this,D,S,x,M?Yo(x,M+g):g);continue}else if(S==="smoothOrigin"){Va(this,D,"smooth",D.smooth,g);continue}else if(S==="force3D"){D[S]=g;continue}else if(S==="transform"){XO(this,g,t);continue}}else S in f||(S=ol(S)||S);if(R||(y||y===0)&&(x||x===0)&&!TO.test(g)&&S in f)C=(p+"").substr((x+"").length),y||(y=0),A=Sn(g)||(S in Si.units?Si.units[S]:C),C!==A&&(x=Ka(t,S,p,A)),this._pt=new ti(this._pt,R?D:f,S,x,(M?Yo(x,M+y):y)-x,!R&&(A==="px"||S==="zIndex")&&r.autoRound!==!1?MO:F0),this._pt.u=A||0,R&&X!==g?(this._pt.b=p,this._pt.e=X,this._pt.r=CO):C!==A&&A!=="%"&&(this._pt.b=p,this._pt.r=AO);else if(S in f)VO.call(this,t,S,p,M?M+g:g);else if(S in t)this.add(t,S,p||t[S],M?M+g:g,s,u);else if(S!=="parseTransform"){ny(S,g);continue}R||(S in f?B.push(S,0,f[S]):typeof t[S]=="function"?B.push(S,2,t[S]()):B.push(S,1,p||t[S])),c.push(S)}}z&&r5(this)},render:function(t,r){if(r.tween._time||!hy())for(var a=r._pt;a;)a.r(t,a.d),a=a._next;else r.styles.revert()},get:Jr,aliases:yr,getSetter:function(t,r,a){var s=yr[r];return s&&s.indexOf(",")<0&&(r=s),r in oa&&r!==ei&&(t._gsap.x||Jr(t,"x"))?a&&lw===a?r==="scale"?jO:OO:(lw=a||{})&&(r==="scale"?zO:kO):t.style&&!Jg(t.style[r])?RO:~r.indexOf("-")?DO:cy(t,r)},core:{_removeProperty:$a,_getMatrix:my}};ni.utils.checkPrefix=ol;ni.core.getStyleSaver=u5;(function(n,t,r,a){var s=Jn(n+","+t+","+r,function(u){oa[u]=1});Jn(t,function(u){Si.units[u]="deg",h5[u]=1}),yr[s[13]]=n+","+t,Jn(a,function(u){var c=u.split(":");yr[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Si.units[n]="px"});ni.registerPlugin(g5);var yt=ni.registerPlugin(g5)||ni;yt.core.Tween;function qO(n,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function FO(n,t,r){return t&&qO(n.prototype,t),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn,bd,bi,Ba,Ua,qo,y5,ws,Fo,v5,ea,ir,x5,b5=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},_5=1,Ho=[],Pt=[],Tr=[],ku=Date.now,Q0=function(t,r){return r},$O=function(){var t=Fo.core,r=t.bridge||{},a=t._scrollers,s=t._proxies;a.push.apply(a,Pt),s.push.apply(s,Tr),Pt=a,Tr=s,Q0=function(c,f){return r[c](f)}},Ga=function(t,r){return~Tr.indexOf(t)&&Tr[Tr.indexOf(t)+1][r]},Lu=function(t){return!!~v5.indexOf(t)},Ln=function(t,r,a,s,u){return t.addEventListener(r,a,{passive:s!==!1,capture:!!u})},zn=function(t,r,a,s){return t.removeEventListener(r,a,!!s)},Nf="scrollLeft",Pf="scrollTop",I0=function(){return ea&&ea.isPressed||Pt.cache++},Fd=function(t,r){var a=function s(u){if(u||u===0){_5&&(bi.history.scrollRestoration="manual");var c=ea&&ea.isPressed;u=s.v=Math.round(u)||(ea&&ea.iOS?1:0),t(u),s.cacheID=Pt.cache,c&&Q0("ss",u)}else(r||Pt.cache!==s.cacheID||Q0("ref"))&&(s.cacheID=Pt.cache,s.v=t());return s.v+s.offset};return a.offset=0,t&&a},Bn={s:Nf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Fd(function(n){return arguments.length?bi.scrollTo(n,Je.sc()):bi.pageXOffset||Ba[Nf]||Ua[Nf]||qo[Nf]||0})},Je={s:Pf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:Fd(function(n){return arguments.length?bi.scrollTo(Bn.sc(),n):bi.pageYOffset||Ba[Pf]||Ua[Pf]||qo[Pf]||0})},Zn=function(t,r){return(r&&r._ctx&&r._ctx.selector||pn.utils.toArray)(t)[0]||(typeof t=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},KO=function(t,r){for(var a=r.length;a--;)if(r[a]===t||r[a].contains(t))return!0;return!1},Za=function(t,r){var a=r.s,s=r.sc;Lu(t)&&(t=Ba.scrollingElement||Ua);var u=Pt.indexOf(t),c=s===Je.sc?1:2;!~u&&(u=Pt.push(t)-1),Pt[u+c]||Ln(t,"scroll",I0);var f=Pt[u+c],h=f||(Pt[u+c]=Fd(Ga(t,a),!0)||(Lu(t)?s:Fd(function(p){return arguments.length?t[a]=p:t[a]})));return h.target=t,f||(h.smooth=pn.getProperty(t,"scrollBehavior")==="smooth"),h},W0=function(t,r,a){var s=t,u=t,c=ku(),f=c,h=r||50,p=Math.max(500,h*3),g=function(_,S){var C=ku();S||C-c>h?(u=s,s=_,f=c,c=C):a?s+=_:s=u+(_-u)/(C-f)*(c-f)},y=function(){u=s=a?0:s,f=c=0},x=function(_){var S=f,C=u,A=ku();return(_||_===0)&&_!==s&&g(_),c===f||A-f>p?0:(s+(a?C:-C))/((a?A:c)-S)*1e3};return{update:g,reset:y,getVelocity:x}},hu=function(t,r){return r&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},yw=function(t){var r=Math.max.apply(Math,t),a=Math.min.apply(Math,t);return Math.abs(r)>=Math.abs(a)?r:a},w5=function(){Fo=pn.core.globals().ScrollTrigger,Fo&&Fo.core&&$O()},S5=function(t){return pn=t||b5(),!bd&&pn&&typeof document<"u"&&document.body&&(bi=window,Ba=document,Ua=Ba.documentElement,qo=Ba.body,v5=[bi,Ba,Ua,qo],pn.utils.clamp,x5=pn.core.context||function(){},ws="onpointerenter"in qo?"pointer":"mouse",y5=Be.isTouch=bi.matchMedia&&bi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ir=Be.eventTypes=("ontouchstart"in Ua?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ua?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return _5=0},500),bd=1),Fo||w5(),bd};Bn.op=Je;Pt.cache=0;var Be=function(){function n(r){this.init(r)}var t=n.prototype;return t.init=function(a){bd||S5(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Fo||w5();var s=a.tolerance,u=a.dragMinimum,c=a.type,f=a.target,h=a.lineHeight,p=a.debounce,g=a.preventDefault,y=a.onStop,x=a.onStopDelay,v=a.ignore,_=a.wheelSpeed,S=a.event,C=a.onDragStart,A=a.onDragEnd,M=a.onDrag,R=a.onPress,j=a.onRelease,D=a.onRight,N=a.onLeft,z=a.onUp,B=a.onDown,X=a.onChangeX,Z=a.onChangeY,ot=a.onChange,tt=a.onToggleX,wt=a.onToggleY,pt=a.onHover,gt=a.onHoverEnd,Y=a.onMove,$=a.ignoreCheck,J=a.isNormalizer,at=a.onGestureStart,T=a.onGestureEnd,K=a.onWheel,et=a.onEnable,it=a.onDisable,rt=a.onClick,mt=a.scrollSpeed,st=a.capture,Ot=a.allowClicks,Et=a.lockAxis,Ft=a.onLockAxis;this.target=f=Zn(f)||Ua,this.vars=a,v&&(v=pn.utils.toArray(v)),s=s||1e-9,u=u||0,_=_||1,mt=mt||1,c=c||"wheel,touch,pointer",p=p!==!1,h||(h=parseFloat(bi.getComputedStyle(qo).lineHeight)||22);var gn,pe,ie,Vt,me,yn,Mn,F=this,Rn=0,Ai=0,Zi=a.passive||!g&&a.passive!==!1,oe=Za(f,Bn),Qi=Za(f,Je),Ii=oe(),Rr=Qi(),Ue=~c.indexOf("touch")&&!~c.indexOf("pointer")&&ir[0]==="pointerdown",Hn=Lu(f),Yt=f.ownerDocument||Ba,He=[0,0,0],ce=[0,0,0],Wi=0,Wa=function(){return Wi=ku()},Me=function(vt,Rt){return(F.event=vt)&&v&&KO(vt.target,v)||Rt&&Ue&&vt.pointerType!=="touch"||$&&$(vt,Rt)},Dr=function(){F._vx.reset(),F._vy.reset(),pe.pause(),y&&y(F)},Yn=function(){var vt=F.deltaX=yw(He),Rt=F.deltaY=yw(ce),nt=Math.abs(vt)>=s,dt=Math.abs(Rt)>=s;ot&&(nt||dt)&&ot(F,vt,Rt,He,ce),nt&&(D&&F.deltaX>0&&D(F),N&&F.deltaX<0&&N(F),X&&X(F),tt&&F.deltaX<0!=Rn<0&&tt(F),Rn=F.deltaX,He[0]=He[1]=He[2]=0),dt&&(B&&F.deltaY>0&&B(F),z&&F.deltaY<0&&z(F),Z&&Z(F),wt&&F.deltaY<0!=Ai<0&&wt(F),Ai=F.deltaY,ce[0]=ce[1]=ce[2]=0),(Vt||ie)&&(Y&&Y(F),ie&&(C&&ie===1&&C(F),M&&M(F),ie=0),Vt=!1),yn&&!(yn=!1)&&Ft&&Ft(F),me&&(K(F),me=!1),gn=0},Gn=function(vt,Rt,nt){He[nt]+=vt,ce[nt]+=Rt,F._vx.update(vt),F._vy.update(Rt),p?gn||(gn=requestAnimationFrame(Yn)):Yn()},Ji=function(vt,Rt){Et&&!Mn&&(F.axis=Mn=Math.abs(vt)>Math.abs(Rt)?"x":"y",yn=!0),Mn!=="y"&&(He[2]+=vt,F._vx.update(vt,!0)),Mn!=="x"&&(ce[2]+=Rt,F._vy.update(Rt,!0)),p?gn||(gn=requestAnimationFrame(Yn)):Yn()},Xn=function(vt){if(!Me(vt,1)){vt=hu(vt,g);var Rt=vt.clientX,nt=vt.clientY,dt=Rt-F.x,ft=nt-F.y,Tt=F.isDragging;F.x=Rt,F.y=nt,(Tt||(dt||ft)&&(Math.abs(F.startX-Rt)>=u||Math.abs(F.startY-nt)>=u))&&(ie||(ie=Tt?2:1),Tt||(F.isDragging=!0),Ji(dt,ft))}},Or=F.onPress=function(At){Me(At,1)||At&&At.button||(F.axis=Mn=null,pe.pause(),F.isPressed=!0,At=hu(At),Rn=Ai=0,F.startX=F.x=At.clientX,F.startY=F.y=At.clientY,F._vx.reset(),F._vy.reset(),Ln(J?f:Yt,ir[1],Xn,Zi,!0),F.deltaX=F.deltaY=0,R&&R(F))},Mt=F.onRelease=function(At){if(!Me(At,1)){zn(J?f:Yt,ir[1],Xn,!0);var vt=!isNaN(F.y-F.startY),Rt=F.isDragging,nt=Rt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),dt=hu(At);!nt&&vt&&(F._vx.reset(),F._vy.reset(),g&&Ot&&pn.delayedCall(.08,function(){if(ku()-Wi>300&&!At.defaultPrevented){if(At.target.click)At.target.click();else if(Yt.createEvent){var ft=Yt.createEvent("MouseEvents");ft.initMouseEvent("click",!0,!0,bi,1,dt.screenX,dt.screenY,dt.clientX,dt.clientY,!1,!1,!1,!1,0,null),At.target.dispatchEvent(ft)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,y&&Rt&&!J&&pe.restart(!0),ie&&Yn(),A&&Rt&&A(F),j&&j(F,nt)}},sr=function(vt){return vt.touches&&vt.touches.length>1&&(F.isGesturing=!0)&&at(vt,F.isDragging)},Dn=function(){return(F.isGesturing=!1)||T(F)},ln=function(vt){if(!Me(vt)){var Rt=oe(),nt=Qi();Gn((Rt-Ii)*mt,(nt-Rr)*mt,1),Ii=Rt,Rr=nt,y&&pe.restart(!0)}},ii=function(vt){if(!Me(vt)){vt=hu(vt,g),K&&(me=!0);var Rt=(vt.deltaMode===1?h:vt.deltaMode===2?bi.innerHeight:1)*_;Gn(vt.deltaX*Rt,vt.deltaY*Rt,0),y&&!J&&pe.restart(!0)}},or=function(vt){if(!Me(vt)){var Rt=vt.clientX,nt=vt.clientY,dt=Rt-F.x,ft=nt-F.y;F.x=Rt,F.y=nt,Vt=!0,y&&pe.restart(!0),(dt||ft)&&Ji(dt,ft)}},jr=function(vt){F.event=vt,pt(F)},ri=function(vt){F.event=vt,gt(F)},zr=function(vt){return Me(vt)||hu(vt,g)&&rt(F)};pe=F._dc=pn.delayedCall(x||.25,Dr).pause(),F.deltaX=F.deltaY=0,F._vx=W0(0,50,!0),F._vy=W0(0,50,!0),F.scrollX=oe,F.scrollY=Qi,F.isDragging=F.isGesturing=F.isPressed=!1,x5(this),F.enable=function(At){return F.isEnabled||(Ln(Hn?Yt:f,"scroll",I0),c.indexOf("scroll")>=0&&Ln(Hn?Yt:f,"scroll",ln,Zi,st),c.indexOf("wheel")>=0&&Ln(f,"wheel",ii,Zi,st),(c.indexOf("touch")>=0&&y5||c.indexOf("pointer")>=0)&&(Ln(f,ir[0],Or,Zi,st),Ln(Yt,ir[2],Mt),Ln(Yt,ir[3],Mt),Ot&&Ln(f,"click",Wa,!0,!0),rt&&Ln(f,"click",zr),at&&Ln(Yt,"gesturestart",sr),T&&Ln(Yt,"gestureend",Dn),pt&&Ln(f,ws+"enter",jr),gt&&Ln(f,ws+"leave",ri),Y&&Ln(f,ws+"move",or)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=Vt=ie=!1,F._vx.reset(),F._vy.reset(),Ii=oe(),Rr=Qi(),At&&At.type&&Or(At),et&&et(F)),F},F.disable=function(){F.isEnabled&&(Ho.filter(function(At){return At!==F&&Lu(At.target)}).length||zn(Hn?Yt:f,"scroll",I0),F.isPressed&&(F._vx.reset(),F._vy.reset(),zn(J?f:Yt,ir[1],Xn,!0)),zn(Hn?Yt:f,"scroll",ln,st),zn(f,"wheel",ii,st),zn(f,ir[0],Or,st),zn(Yt,ir[2],Mt),zn(Yt,ir[3],Mt),zn(f,"click",Wa,!0),zn(f,"click",zr),zn(Yt,"gesturestart",sr),zn(Yt,"gestureend",Dn),zn(f,ws+"enter",jr),zn(f,ws+"leave",ri),zn(f,ws+"move",or),F.isEnabled=F.isPressed=F.isDragging=!1,it&&it(F))},F.kill=F.revert=function(){F.disable();var At=Ho.indexOf(F);At>=0&&Ho.splice(At,1),ea===F&&(ea=0)},Ho.push(F),J&&Lu(f)&&(ea=F),F.enable(S)},FO(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Be.version="3.15.0";Be.create=function(n){return new Be(n)};Be.register=S5;Be.getAll=function(){return Ho.slice()};Be.getById=function(n){return Ho.filter(function(t){return t.vars.id===n})[0]};b5()&&pn.registerPlugin(Be);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var lt,Oo,Nt,ne,vi,Jt,gy,$d,uc,Nu,_u,Vf,bn,dh,J0,Pn,vw,xw,jo,T5,Km,E5,Nn,tg,A5,C5,La,eg,yy,$o,vy,Pu,ng,Zm,Bf=1,wn=Date.now,Qm=wn(),Fi=0,wu=0,bw=function(t,r,a){var s=gi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return a["_"+r+"Clamp"]=s,s?t.substr(6,t.length-7):t},_w=function(t,r){return r&&(!gi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},ZO=function n(){return wu&&requestAnimationFrame(n)},ww=function(){return dh=1},Sw=function(){return dh=0},pr=function(t){return t},Su=function(t){return Math.round(t*1e5)/1e5||0},M5=function(){return typeof window<"u"},R5=function(){return lt||M5()&&(lt=window.gsap)&&lt.registerPlugin&&lt},Us=function(t){return!!~gy.indexOf(t)},D5=function(t){return(t==="Height"?vy:Nt["inner"+t])||vi["client"+t]||Jt["client"+t]},O5=function(t){return Ga(t,"getBoundingClientRect")||(Us(t)?function(){return Ed.width=Nt.innerWidth,Ed.height=vy,Ed}:function(){return ta(t)})},QO=function(t,r,a){var s=a.d,u=a.d2,c=a.a;return(c=Ga(t,"getBoundingClientRect"))?function(){return c()[s]}:function(){return(r?D5(u):t["client"+u])||0}},IO=function(t,r){return!r||~Tr.indexOf(t)?O5(t):function(){return Ed}},vr=function(t,r){var a=r.s,s=r.d2,u=r.d,c=r.a;return Math.max(0,(a="scroll"+s)&&(c=Ga(t,a))?c()-O5(t)()[u]:Us(t)?(vi[a]||Jt[a])-D5(s):t[a]-t["offset"+s])},Uf=function(t,r){for(var a=0;a<jo.length;a+=3)(!r||~r.indexOf(jo[a+1]))&&t(jo[a],jo[a+1],jo[a+2])},gi=function(t){return typeof t=="string"},Tn=function(t){return typeof t=="function"},Tu=function(t){return typeof t=="number"},Ss=function(t){return typeof t=="object"},pu=function(t,r,a){return t&&t.progress(r?0:1)&&a&&t.pause()},Mo=function(t,r,a){if(t.enabled){var s=t._ctx?t._ctx.add(function(){return r(t,a)}):r(t,a);s&&s.totalTime&&(t.callbackAnimation=s)}},Ro=Math.abs,j5="left",z5="top",xy="right",by="bottom",Ps="width",Vs="height",Vu="Right",Bu="Left",Uu="Top",Hu="Bottom",Fe="padding",Yi="margin",ll="Width",_y="Height",We="px",Gi=function(t){return Nt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},WO=function(t){var r=Gi(t).position;t.style.position=r==="absolute"||r==="fixed"?r:"relative"},Tw=function(t,r){for(var a in r)a in t||(t[a]=r[a]);return t},ta=function(t,r){var a=r&&Gi(t)[J0]!=="matrix(1, 0, 0, 1, 0, 0)"&&lt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),s=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return a&&a.progress(0).kill(),s},Kd=function(t,r){var a=r.d2;return t["offset"+a]||t["client"+a]||0},k5=function(t){var r=[],a=t.labels,s=t.duration(),u;for(u in a)r.push(a[u]/s);return r},JO=function(t){return function(r){return lt.utils.snap(k5(t),r)}},wy=function(t){var r=lt.utils.snap(t),a=Array.isArray(t)&&t.slice(0).sort(function(s,u){return s-u});return a?function(s,u,c){c===void 0&&(c=.001);var f;if(!u)return r(s);if(u>0){for(s-=c,f=0;f<a.length;f++)if(a[f]>=s)return a[f];return a[f-1]}else for(f=a.length,s+=c;f--;)if(a[f]<=s)return a[f];return a[0]}:function(s,u,c){c===void 0&&(c=.001);var f=r(s);return!u||Math.abs(f-s)<c||f-s<0==u<0?f:r(u<0?s-t:s+t)}},tj=function(t){return function(r,a){return wy(k5(t))(r,a.direction)}},Hf=function(t,r,a,s){return a.split(",").forEach(function(u){return t(r,u,s)})},an=function(t,r,a,s,u){return t.addEventListener(r,a,{passive:!s,capture:!!u})},rn=function(t,r,a,s){return t.removeEventListener(r,a,!!s)},Yf=function(t,r,a){a=a&&a.wheelHandler,a&&(t(r,"wheel",a),t(r,"touchmove",a))},Ew={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Gf={toggleActions:"play",anticipatePin:0},Zd={top:0,left:0,center:.5,bottom:1,right:1},_d=function(t,r){if(gi(t)){var a=t.indexOf("="),s=~a?+(t.charAt(a-1)+1)*parseFloat(t.substr(a+1)):0;~a&&(t.indexOf("%")>a&&(s*=r/100),t=t.substr(0,a-1)),t=s+(t in Zd?Zd[t]*r:~t.indexOf("%")?parseFloat(t)*r/100:parseFloat(t)||0)}return t},Xf=function(t,r,a,s,u,c,f,h){var p=u.startColor,g=u.endColor,y=u.fontSize,x=u.indent,v=u.fontWeight,_=ne.createElement("div"),S=Us(a)||Ga(a,"pinType")==="fixed",C=t.indexOf("scroller")!==-1,A=S?Jt:a.tagName==="IFRAME"?a.contentDocument.body:a,M=t.indexOf("start")!==-1,R=M?p:g,j="border-color:"+R+";font-size:"+y+";color:"+R+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return j+="position:"+((C||h)&&S?"fixed;":"absolute;"),(C||h||!S)&&(j+=(s===Je?xy:by)+":"+(c+parseFloat(x))+"px;"),f&&(j+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+t+(r?" marker-"+r:"")),_.style.cssText=j,_.innerText=r||r===0?t+"-"+r:t,A.children[0]?A.insertBefore(_,A.children[0]):A.appendChild(_),_._offset=_["offset"+s.op.d2],wd(_,0,s,M),_},wd=function(t,r,a,s){var u={display:"block"},c=a[s?"os2":"p2"],f=a[s?"p2":"os2"];t._isFlipped=s,u[a.a+"Percent"]=s?-100:0,u[a.a]=s?"1px":0,u["border"+c+ll]=1,u["border"+f+ll]=0,u[a.p]=r+"px",lt.set(t,u)},zt=[],ig={},cc,Aw=function(){return wn()-Fi>34&&(cc||(cc=requestAnimationFrame(ia)))},Do=function(){(!Nn||!Nn.isPressed||Nn.startX>Jt.clientWidth)&&(Pt.cache++,Nn?cc||(cc=requestAnimationFrame(ia)):ia(),Fi||Ys("scrollStart"),Fi=wn())},Im=function(){C5=Nt.innerWidth,A5=Nt.innerHeight},Eu=function(t){Pt.cache++,(t===!0||!bn&&!E5&&!ne.fullscreenElement&&!ne.webkitFullscreenElement&&(!tg||C5!==Nt.innerWidth||Math.abs(Nt.innerHeight-A5)>Nt.innerHeight*.25))&&$d.restart(!0)},Hs={},ej=[],L5=function n(){return rn(kt,"scrollEnd",n)||Ms(!0)},Ys=function(t){return Hs[t]&&Hs[t].map(function(r){return r()})||ej},mi=[],N5=function(t){for(var r=0;r<mi.length;r+=5)(!t||mi[r+4]&&mi[r+4].query===t)&&(mi[r].style.cssText=mi[r+1],mi[r].getBBox&&mi[r].setAttribute("transform",mi[r+2]||""),mi[r+3].uncache=1)},P5=function(){return Pt.forEach(function(t){return Tn(t)&&++t.cacheID&&(t.rec=t())})},Sy=function(t,r){var a;for(Pn=0;Pn<zt.length;Pn++)a=zt[Pn],a&&(!r||a._ctx===r)&&(t?a.kill(1):a.revert(!0,!0));Pu=!0,r&&N5(r),r||Ys("revert")},V5=function(t,r){Pt.cache++,(r||!Vn)&&Pt.forEach(function(a){return Tn(a)&&a.cacheID++&&(a.rec=0)}),gi(t)&&(Nt.history.scrollRestoration=yy=t)},Vn,Bs=0,Cw,nj=function(){if(Cw!==Bs){var t=Cw=Bs;requestAnimationFrame(function(){return t===Bs&&Ms(!0)})}},B5=function(){Jt.appendChild($o),vy=!Nn&&$o.offsetHeight||Nt.innerHeight,Jt.removeChild($o)},Mw=function(t){return uc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=t?"none":"block"})},Ms=function(t,r){if(vi=ne.documentElement,Jt=ne.body,gy=[Nt,ne,vi,Jt],Fi&&!t&&!Pu){an(kt,"scrollEnd",L5);return}B5(),Vn=kt.isRefreshing=!0,Pu||P5();var a=Ys("refreshInit");T5&&kt.sort(),r||Sy(),Pt.forEach(function(s){Tn(s)&&(s.smooth&&(s.target.style.scrollBehavior="auto"),s(0))}),zt.slice(0).forEach(function(s){return s.refresh()}),Pu=!1,zt.forEach(function(s){if(s._subPinOffset&&s.pin){var u=s.vars.horizontal?"offsetWidth":"offsetHeight",c=s.pin[u];s.revert(!0,1),s.adjustPinSpacing(s.pin[u]-c),s.refresh()}}),ng=1,Mw(!0),zt.forEach(function(s){var u=vr(s.scroller,s._dir),c=s.vars.end==="max"||s._endClamp&&s.end>u,f=s._startClamp&&s.start>=u;(c||f)&&s.setPositions(f?u-1:s.start,c?Math.max(f?u:s.start+1,u):s.end,!0)}),Mw(!1),ng=0,a.forEach(function(s){return s&&s.render&&s.render(-1)}),Pt.forEach(function(s){Tn(s)&&(s.smooth&&requestAnimationFrame(function(){return s.target.style.scrollBehavior="smooth"}),s.rec&&s(s.rec))}),V5(yy,1),$d.pause(),Bs++,Vn=2,ia(2),zt.forEach(function(s){return Tn(s.vars.onRefresh)&&s.vars.onRefresh(s)}),Vn=kt.isRefreshing=!1,Ys("refresh")},rg=0,Sd=1,Yu,ia=function(t){if(t===2||!Vn&&!Pu){kt.isUpdating=!0,Yu&&Yu.update(0);var r=zt.length,a=wn(),s=a-Qm>=50,u=r&&zt[0].scroll();if(Sd=rg>u?-1:1,Vn||(rg=u),s&&(Fi&&!dh&&a-Fi>200&&(Fi=0,Ys("scrollEnd")),_u=Qm,Qm=a),Sd<0){for(Pn=r;Pn-- >0;)zt[Pn]&&zt[Pn].update(0,s);Sd=1}else for(Pn=0;Pn<r;Pn++)zt[Pn]&&zt[Pn].update(0,s);kt.isUpdating=!1}cc=0},ag=[j5,z5,by,xy,Yi+Hu,Yi+Vu,Yi+Uu,Yi+Bu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Td=ag.concat([Ps,Vs,"boxSizing","max"+ll,"max"+_y,"position",Yi,Fe,Fe+Uu,Fe+Vu,Fe+Hu,Fe+Bu]),ij=function(t,r,a){Ko(a);var s=t._gsap;if(s.spacerIsNative)Ko(s.spacerState);else if(t._gsap.swappedIn){var u=r.parentNode;u&&(u.insertBefore(t,r),u.removeChild(r))}t._gsap.swappedIn=!1},Wm=function(t,r,a,s){if(!t._gsap.swappedIn){for(var u=ag.length,c=r.style,f=t.style,h;u--;)h=ag[u],c[h]=a[h];c.position=a.position==="absolute"?"absolute":"relative",a.display==="inline"&&(c.display="inline-block"),f[by]=f[xy]="auto",c.flexBasis=a.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Ps]=Kd(t,Bn)+We,c[Vs]=Kd(t,Je)+We,c[Fe]=f[Yi]=f[z5]=f[j5]="0",Ko(s),f[Ps]=f["max"+ll]=a[Ps],f[Vs]=f["max"+_y]=a[Vs],f[Fe]=a[Fe],t.parentNode!==r&&(t.parentNode.insertBefore(r,t),r.appendChild(t)),t._gsap.swappedIn=!0}},rj=/([A-Z])/g,Ko=function(t){if(t){var r=t.t.style,a=t.length,s=0,u,c;for((t.t._gsap||lt.core.getCache(t.t)).uncache=1;s<a;s+=2)c=t[s+1],u=t[s],c?r[u]=c:r[u]&&r.removeProperty(u.replace(rj,"-$1").toLowerCase())}},qf=function(t){for(var r=Td.length,a=t.style,s=[],u=0;u<r;u++)s.push(Td[u],a[Td[u]]);return s.t=t,s},aj=function(t,r,a){for(var s=[],u=t.length,c=a?8:0,f;c<u;c+=2)f=t[c],s.push(f,f in r?r[f]:t[c+1]);return s.t=t.t,s},Ed={left:0,top:0},Rw=function(t,r,a,s,u,c,f,h,p,g,y,x,v,_){Tn(t)&&(t=t(h)),gi(t)&&t.substr(0,3)==="max"&&(t=x+(t.charAt(4)==="="?_d("0"+t.substr(3),a):0));var S=v?v.time():0,C,A,M;if(v&&v.seek(0),isNaN(t)||(t=+t),Tu(t))v&&(t=lt.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,x,t)),f&&wd(f,a,s,!0);else{Tn(r)&&(r=r(h));var R=(t||"0").split(" "),j,D,N,z;M=Zn(r,h)||Jt,j=ta(M)||{},(!j||!j.left&&!j.top)&&Gi(M).display==="none"&&(z=M.style.display,M.style.display="block",j=ta(M),z?M.style.display=z:M.style.removeProperty("display")),D=_d(R[0],j[s.d]),N=_d(R[1]||"0",a),t=j[s.p]-p[s.p]-g+D+u-N,f&&wd(f,N,s,a-N<20||f._isStart&&N>20),a-=a-N}if(_&&(h[_]=t||-.001,t<0&&(t=0)),c){var B=t+a,X=c._isStart;C="scroll"+s.d2,wd(c,B,s,X&&B>20||!X&&(y?Math.max(Jt[C],vi[C]):c.parentNode[C])<=B+1),y&&(p=ta(f),y&&(c.style[s.op.p]=p[s.op.p]-s.op.m-c._offset+We))}return v&&M&&(C=ta(M),v.seek(x),A=ta(M),v._caScrollDist=C[s.p]-A[s.p],t=t/v._caScrollDist*x),v&&v.seek(S),v?t:Math.round(t)},sj=/(webkit|moz|length|cssText|inset)/i,Dw=function(t,r,a,s){if(t.parentNode!==r){var u=t.style,c,f;if(r===Jt){t._stOrig=u.cssText,f=Gi(t);for(c in f)!+c&&!sj.test(c)&&f[c]&&typeof u[c]=="string"&&c!=="0"&&(u[c]=f[c]);u.top=a,u.left=s}else u.cssText=t._stOrig;lt.core.getCache(t).uncache=1,r.appendChild(t)}},U5=function(t,r,a){var s=r,u=s;return function(c){var f=Math.round(t());return f!==s&&f!==u&&Math.abs(f-s)>3&&Math.abs(f-u)>3&&(c=f,a&&a()),u=s,s=Math.round(c),s}},Ff=function(t,r,a){var s={};s[r.p]="+="+a,lt.set(t,s)},Ow=function(t,r){var a=Za(t,r),s="_scroll"+r.p2,u=function c(f,h,p,g,y){var x=c.tween,v=h.onComplete,_={};p=p||a();var S=U5(a,p,function(){x.kill(),c.tween=0});return y=g&&y||0,g=g||f-p,x&&x.kill(),h[s]=f,h.inherit=!1,h.modifiers=_,_[s]=function(){return S(p+g*x.ratio+y*x.ratio*x.ratio)},h.onUpdate=function(){Pt.cache++,c.tween&&ia()},h.onComplete=function(){c.tween=0,v&&v.call(x)},x=c.tween=lt.to(t,h),x};return t[s]=a,a.wheelHandler=function(){return u.tween&&u.tween.kill()&&(u.tween=0)},an(t,"wheel",a.wheelHandler),kt.isTouch&&an(t,"touchmove",a.wheelHandler),u},kt=function(){function n(r,a){Oo||n.register(lt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),eg(this),this.init(r,a)}var t=n.prototype;return t.init=function(a,s){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!wu){this.update=this.refresh=this.kill=pr;return}a=Tw(gi(a)||Tu(a)||a.nodeType?{trigger:a}:a,Gf);var u=a,c=u.onUpdate,f=u.toggleClass,h=u.id,p=u.onToggle,g=u.onRefresh,y=u.scrub,x=u.trigger,v=u.pin,_=u.pinSpacing,S=u.invalidateOnRefresh,C=u.anticipatePin,A=u.onScrubComplete,M=u.onSnapComplete,R=u.once,j=u.snap,D=u.pinReparent,N=u.pinSpacer,z=u.containerAnimation,B=u.fastScrollEnd,X=u.preventOverlaps,Z=a.horizontal||a.containerAnimation&&a.horizontal!==!1?Bn:Je,ot=!y&&y!==0,tt=Zn(a.scroller||Nt),wt=lt.core.getCache(tt),pt=Us(tt),gt=("pinType"in a?a.pinType:Ga(tt,"pinType")||pt&&"fixed")==="fixed",Y=[a.onEnter,a.onLeave,a.onEnterBack,a.onLeaveBack],$=ot&&a.toggleActions.split(" "),J="markers"in a?a.markers:Gf.markers,at=pt?0:parseFloat(Gi(tt)["border"+Z.p2+ll])||0,T=this,K=a.onRefreshInit&&function(){return a.onRefreshInit(T)},et=QO(tt,pt,Z),it=IO(tt,pt),rt=0,mt=0,st=0,Ot=Za(tt,Z),Et,Ft,gn,pe,ie,Vt,me,yn,Mn,F,Rn,Ai,Zi,oe,Qi,Ii,Rr,Ue,Hn,Yt,He,ce,Wi,Wa,Me,Dr,Yn,Gn,Ji,Xn,Or,Mt,sr,Dn,ln,ii,or,jr,ri;if(T._startClamp=T._endClamp=!1,T._dir=Z,C*=45,T.scroller=tt,T.scroll=z?z.time.bind(z):Ot,pe=Ot(),T.vars=a,s=s||a.animation,"refreshPriority"in a&&(T5=1,a.refreshPriority===-9999&&(Yu=T)),wt.tweenScroll=wt.tweenScroll||{top:Ow(tt,Je),left:Ow(tt,Bn)},T.tweenTo=Et=wt.tweenScroll[Z.p],T.scrubDuration=function(nt){sr=Tu(nt)&&nt,sr?Mt?Mt.duration(nt):Mt=lt.to(s,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:sr,paused:!0,onComplete:function(){return A&&A(T)}}):(Mt&&Mt.progress(1).kill(),Mt=0)},s&&(s.vars.lazy=!1,s._initted&&!T.isReverted||s.vars.immediateRender!==!1&&a.immediateRender!==!1&&s.duration()&&s.render(0,!0,!0),T.animation=s.pause(),s.scrollTrigger=T,T.scrubDuration(y),Xn=0,h||(h=s.vars.id)),j&&((!Ss(j)||j.push)&&(j={snapTo:j}),"scrollBehavior"in Jt.style&&lt.set(pt?[Jt,vi]:tt,{scrollBehavior:"auto"}),Pt.forEach(function(nt){return Tn(nt)&&nt.target===(pt?ne.scrollingElement||vi:tt)&&(nt.smooth=!1)}),gn=Tn(j.snapTo)?j.snapTo:j.snapTo==="labels"?JO(s):j.snapTo==="labelsDirectional"?tj(s):j.directional!==!1?function(nt,dt){return wy(j.snapTo)(nt,wn()-mt<500?0:dt.direction)}:lt.utils.snap(j.snapTo),Dn=j.duration||{min:.1,max:2},Dn=Ss(Dn)?Nu(Dn.min,Dn.max):Nu(Dn,Dn),ln=lt.delayedCall(j.delay||sr/2||.1,function(){var nt=Ot(),dt=wn()-mt<500,ft=Et.tween;if((dt||Math.abs(T.getVelocity())<10)&&!ft&&!dh&&rt!==nt){var Tt=(nt-Vt)/oe,Ye=s&&!ot?s.totalProgress():Tt,Bt=dt?0:(Ye-Or)/(wn()-_u)*1e3||0,ve=lt.utils.clamp(-Tt,1-Tt,Ro(Bt/2)*Bt/.185),Re=Tt+(j.inertia===!1?0:ve),fe,Zt,Xt=j,un=Xt.onStart,It=Xt.onInterrupt,$t=Xt.onComplete;if(fe=gn(Re,T),Tu(fe)||(fe=Re),Zt=Math.max(0,Math.round(Vt+fe*oe)),nt<=me&&nt>=Vt&&Zt!==nt){if(ft&&!ft._initted&&ft.data<=Ro(Zt-nt))return;j.inertia===!1&&(ve=fe-Tt),Et(Zt,{duration:Dn(Ro(Math.max(Ro(Re-Ye),Ro(fe-Ye))*.185/Bt/.05||0)),ease:j.ease||"power3",data:Ro(Zt-nt),onInterrupt:function(){return ln.restart(!0)&&It&&Mo(T,It)},onComplete:function(){T.update(),rt=Ot(),s&&!ot&&(Mt?Mt.resetTo("totalProgress",fe,s._tTime/s._tDur):s.progress(fe)),Xn=Or=s&&!ot?s.totalProgress():T.progress,M&&M(T),$t&&Mo(T,$t)}},nt,ve*oe,Zt-nt-ve*oe),un&&Mo(T,un,Et.tween)}}else T.isActive&&rt!==nt&&ln.restart(!0)}).pause()),h&&(ig[h]=T),x=T.trigger=Zn(x||v!==!0&&v),ri=x&&x._gsap&&x._gsap.stRevert,ri&&(ri=ri(T)),v=v===!0?x:Zn(v),gi(f)&&(f={targets:x,className:f}),v&&(_===!1||_===Yi||(_=!_&&v.parentNode&&v.parentNode.style&&Gi(v.parentNode).display==="flex"?!1:Fe),T.pin=v,Ft=lt.core.getCache(v),Ft.spacer?Qi=Ft.pinState:(N&&(N=Zn(N),N&&!N.nodeType&&(N=N.current||N.nativeElement),Ft.spacerIsNative=!!N,N&&(Ft.spacerState=qf(N))),Ft.spacer=Ue=N||ne.createElement("div"),Ue.classList.add("pin-spacer"),h&&Ue.classList.add("pin-spacer-"+h),Ft.pinState=Qi=qf(v)),a.force3D!==!1&&lt.set(v,{force3D:!0}),T.spacer=Ue=Ft.spacer,Ji=Gi(v),Wa=Ji[_+Z.os2],Yt=lt.getProperty(v),He=lt.quickSetter(v,Z.a,We),Wm(v,Ue,Ji),Rr=qf(v)),J){Ai=Ss(J)?Tw(J,Ew):Ew,F=Xf("scroller-start",h,tt,Z,Ai,0),Rn=Xf("scroller-end",h,tt,Z,Ai,0,F),Hn=F["offset"+Z.op.d2];var zr=Zn(Ga(tt,"content")||tt);yn=this.markerStart=Xf("start",h,zr,Z,Ai,Hn,0,z),Mn=this.markerEnd=Xf("end",h,zr,Z,Ai,Hn,0,z),z&&(jr=lt.quickSetter([yn,Mn],Z.a,We)),!gt&&!(Tr.length&&Ga(tt,"fixedMarkers")===!0)&&(WO(pt?Jt:tt),lt.set([F,Rn],{force3D:!0}),Dr=lt.quickSetter(F,Z.a,We),Gn=lt.quickSetter(Rn,Z.a,We))}if(z){var At=z.vars.onUpdate,vt=z.vars.onUpdateParams;z.eventCallback("onUpdate",function(){T.update(0,0,1),At&&At.apply(z,vt||[])})}if(T.previous=function(){return zt[zt.indexOf(T)-1]},T.next=function(){return zt[zt.indexOf(T)+1]},T.revert=function(nt,dt){if(!dt)return T.kill(!0);var ft=nt!==!1||!T.enabled,Tt=bn;ft!==T.isReverted&&(ft&&(ii=Math.max(Ot(),T.scroll.rec||0),st=T.progress,or=s&&s.progress()),yn&&[yn,Mn,F,Rn].forEach(function(Ye){return Ye.style.display=ft?"none":"block"}),ft&&(bn=T,T.update(ft)),v&&(!D||!T.isActive)&&(ft?ij(v,Ue,Qi):Wm(v,Ue,Gi(v),Me)),ft||T.update(ft),bn=Tt,T.isReverted=ft)},T.refresh=function(nt,dt,ft,Tt){if(!((bn||!T.enabled)&&!dt)){if(v&&nt&&Fi){an(n,"scrollEnd",L5);return}!Vn&&K&&K(T),bn=T,Et.tween&&!ft&&(Et.tween.kill(),Et.tween=0),Mt&&Mt.pause(),S&&s&&(s.revert({kill:!1}).invalidate(),s.getChildren?s.getChildren(!0,!0,!1).forEach(function(Ri){return Ri.vars.immediateRender&&Ri.render(0,!0,!0)}):s.vars.immediateRender&&s.render(0,!0,!0)),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var Ye=et(),Bt=it(),ve=z?z.duration():vr(tt,Z),Re=oe<=.01||!oe,fe=0,Zt=Tt||0,Xt=Ss(ft)?ft.end:a.end,un=a.endTrigger||x,It=Ss(ft)?ft.start:a.start||(a.start===0||!x?0:v?"0 0":"0 100%"),$t=T.pinnedContainer=a.pinnedContainer&&Zn(a.pinnedContainer,T),ai=x&&Math.max(0,zt.indexOf(T))||0,Ge=ai,ge,_e,kr,Ja,Ze,ke,On,ua,Ci,Lr,si,Mi,ca;for(J&&Ss(ft)&&(Mi=lt.getProperty(F,Z.p),ca=lt.getProperty(Rn,Z.p));Ge-- >0;)ke=zt[Ge],ke.end||ke.refresh(0,1)||(bn=T),On=ke.pin,On&&(On===x||On===v||On===$t)&&!ke.isReverted&&(Lr||(Lr=[]),Lr.unshift(ke),ke.revert(!0,!0)),ke!==zt[Ge]&&(ai--,Ge--);for(Tn(It)&&(It=It(T)),It=bw(It,"start",T),Vt=Rw(It,x,Ye,Z,Ot(),yn,F,T,Bt,at,gt,ve,z,T._startClamp&&"_startClamp")||(v?-.001:0),Tn(Xt)&&(Xt=Xt(T)),gi(Xt)&&!Xt.indexOf("+=")&&(~Xt.indexOf(" ")?Xt=(gi(It)?It.split(" ")[0]:"")+Xt:(fe=_d(Xt.substr(2),Ye),Xt=gi(It)?It:(z?lt.utils.mapRange(0,z.duration(),z.scrollTrigger.start,z.scrollTrigger.end,Vt):Vt)+fe,un=x)),Xt=bw(Xt,"end",T),me=Math.max(Vt,Rw(Xt||(un?"100% 0":ve),un,Ye,Z,Ot()+fe,Mn,Rn,T,Bt,at,gt,ve,z,T._endClamp&&"_endClamp"))||-.001,fe=0,Ge=ai;Ge--;)ke=zt[Ge]||{},On=ke.pin,On&&ke.start-ke._pinPush<=Vt&&!z&&ke.end>0&&(ge=ke.end-(T._startClamp?Math.max(0,ke.start):ke.start),(On===x&&ke.start-ke._pinPush<Vt||On===$t)&&isNaN(It)&&(fe+=ge*(1-ke.progress)),On===v&&(Zt+=ge));if(Vt+=fe,me+=fe,T._startClamp&&(T._startClamp+=fe),T._endClamp&&!Vn&&(T._endClamp=me||-.001,me=Math.min(me,vr(tt,Z))),oe=me-Vt||(Vt-=.01)&&.001,Re&&(st=lt.utils.clamp(0,1,lt.utils.normalize(Vt,me,ii))),T._pinPush=Zt,yn&&fe&&(ge={},ge[Z.a]="+="+fe,$t&&(ge[Z.p]="-="+Ot()),lt.set([yn,Mn],ge)),v&&!(ng&&T.end>=vr(tt,Z)))ge=Gi(v),Ja=Z===Je,kr=Ot(),ce=parseFloat(Yt(Z.a))+Zt,!ve&&me>1&&(si=(pt?ne.scrollingElement||vi:tt).style,si={style:si,value:si["overflow"+Z.a.toUpperCase()]},pt&&Gi(Jt)["overflow"+Z.a.toUpperCase()]!=="scroll"&&(si.style["overflow"+Z.a.toUpperCase()]="scroll")),Wm(v,Ue,ge),Rr=qf(v),_e=ta(v,!0),ua=gt&&Za(tt,Ja?Bn:Je)(),_?(Me=[_+Z.os2,oe+Zt+We],Me.t=Ue,Ge=_===Fe?Kd(v,Z)+oe+Zt:0,Ge&&(Me.push(Z.d,Ge+We),Ue.style.flexBasis!=="auto"&&(Ue.style.flexBasis=Ge+We)),Ko(Me),$t&&zt.forEach(function(Ri){Ri.pin===$t&&Ri.vars.pinSpacing!==!1&&(Ri._subPinOffset=!0)}),gt&&Ot(ii)):(Ge=Kd(v,Z),Ge&&Ue.style.flexBasis!=="auto"&&(Ue.style.flexBasis=Ge+We)),gt&&(Ze={top:_e.top+(Ja?kr-Vt:ua)+We,left:_e.left+(Ja?ua:kr-Vt)+We,boxSizing:"border-box",position:"fixed"},Ze[Ps]=Ze["max"+ll]=Math.ceil(_e.width)+We,Ze[Vs]=Ze["max"+_y]=Math.ceil(_e.height)+We,Ze[Yi]=Ze[Yi+Uu]=Ze[Yi+Vu]=Ze[Yi+Hu]=Ze[Yi+Bu]="0",Ze[Fe]=ge[Fe],Ze[Fe+Uu]=ge[Fe+Uu],Ze[Fe+Vu]=ge[Fe+Vu],Ze[Fe+Hu]=ge[Fe+Hu],Ze[Fe+Bu]=ge[Fe+Bu],Ii=aj(Qi,Ze,D),Vn&&Ot(0)),s?(Ci=s._initted,Km(1),s.render(s.duration(),!0,!0),Wi=Yt(Z.a)-ce+oe+Zt,Yn=Math.abs(oe-Wi)>1,gt&&Yn&&Ii.splice(Ii.length-2,2),s.render(0,!0,!0),Ci||s.invalidate(!0),s.parent||s.totalTime(s.totalTime()),Km(0)):Wi=oe,si&&(si.value?si.style["overflow"+Z.a.toUpperCase()]=si.value:si.style.removeProperty("overflow-"+Z.a));else if(x&&Ot()&&!z)for(_e=x.parentNode;_e&&_e!==Jt;)_e._pinOffset&&(Vt-=_e._pinOffset,me-=_e._pinOffset),_e=_e.parentNode;Lr&&Lr.forEach(function(Ri){return Ri.revert(!1,!0)}),T.start=Vt,T.end=me,pe=ie=Vn?ii:Ot(),!z&&!Vn&&(pe<ii&&Ot(ii),T.scroll.rec=0),T.revert(!1,!0),mt=wn(),ln&&(rt=-1,ln.restart(!0)),bn=0,s&&ot&&(s._initted||or)&&s.progress()!==or&&s.progress(or||0,!0).render(s.time(),!0,!0),(Re||st!==T.progress||z||S||s&&!s._initted)&&(s&&!ot&&(s._initted||st||s.vars.immediateRender!==!1)&&s.totalProgress(z&&Vt<-.001&&!st?lt.utils.normalize(Vt,me,0):st,!0),T.progress=Re||(pe-Vt)/oe===st?0:st),v&&_&&(Ue._pinOffset=Math.round(T.progress*Wi)),Mt&&Mt.invalidate(),isNaN(Mi)||(Mi-=lt.getProperty(F,Z.p),ca-=lt.getProperty(Rn,Z.p),Ff(F,Z,Mi),Ff(yn,Z,Mi-(Tt||0)),Ff(Rn,Z,ca),Ff(Mn,Z,ca-(Tt||0))),Re&&!Vn&&T.update(),g&&!Vn&&!Zi&&(Zi=!0,g(T),Zi=!1)}},T.getVelocity=function(){return(Ot()-ie)/(wn()-_u)*1e3||0},T.endAnimation=function(){pu(T.callbackAnimation),s&&(Mt?Mt.progress(1):s.paused()?ot||pu(s,T.direction<0,1):pu(s,s.reversed()))},T.labelToScroll=function(nt){return s&&s.labels&&(Vt||T.refresh()||Vt)+s.labels[nt]/s.duration()*oe||0},T.getTrailing=function(nt){var dt=zt.indexOf(T),ft=T.direction>0?zt.slice(0,dt).reverse():zt.slice(dt+1);return(gi(nt)?ft.filter(function(Tt){return Tt.vars.preventOverlaps===nt}):ft).filter(function(Tt){return T.direction>0?Tt.end<=Vt:Tt.start>=me})},T.update=function(nt,dt,ft){if(!(z&&!ft&&!nt)){var Tt=Vn===!0?ii:T.scroll(),Ye=nt?0:(Tt-Vt)/oe,Bt=Ye<0?0:Ye>1?1:Ye||0,ve=T.progress,Re,fe,Zt,Xt,un,It,$t,ai;if(dt&&(ie=pe,pe=z?Ot():Tt,j&&(Or=Xn,Xn=s&&!ot?s.totalProgress():Bt)),C&&v&&!bn&&!Bf&&Fi&&(!Bt&&Vt<Tt+(Tt-ie)/(wn()-_u)*C?Bt=1e-4:Bt===1&&me>Tt+(Tt-ie)/(wn()-_u)*C&&(Bt=.9999)),Bt!==ve&&T.enabled){if(Re=T.isActive=!!Bt&&Bt<1,fe=!!ve&&ve<1,It=Re!==fe,un=It||!!Bt!=!!ve,T.direction=Bt>ve?1:-1,T.progress=Bt,un&&!bn&&(Zt=Bt&&!ve?0:Bt===1?1:ve===1?2:3,ot&&(Xt=!It&&$[Zt+1]!=="none"&&$[Zt+1]||$[Zt],ai=s&&(Xt==="complete"||Xt==="reset"||Xt in s))),X&&(It||ai)&&(ai||y||!s)&&(Tn(X)?X(T):T.getTrailing(X).forEach(function(kr){return kr.endAnimation()})),ot||(Mt&&!bn&&!Bf?(Mt._dp._time-Mt._start!==Mt._time&&Mt.render(Mt._dp._time-Mt._start),Mt.resetTo?Mt.resetTo("totalProgress",Bt,s._tTime/s._tDur):(Mt.vars.totalProgress=Bt,Mt.invalidate().restart())):s&&s.totalProgress(Bt,!!(bn&&(mt||nt)))),v){if(nt&&_&&(Ue.style[_+Z.os2]=Wa),!gt)He(Su(ce+Wi*Bt));else if(un){if($t=!nt&&Bt>ve&&me+1>Tt&&Tt+1>=vr(tt,Z),D)if(!nt&&(Re||$t)){var Ge=ta(v,!0),ge=Tt-Vt;Dw(v,Jt,Ge.top+(Z===Je?ge:0)+We,Ge.left+(Z===Je?0:ge)+We)}else Dw(v,Ue);Ko(Re||$t?Ii:Rr),Yn&&Bt<1&&Re||He(ce+(Bt===1&&!$t?Wi:0))}}j&&!Et.tween&&!bn&&!Bf&&ln.restart(!0),f&&(It||R&&Bt&&(Bt<1||!Zm))&&uc(f.targets).forEach(function(kr){return kr.classList[Re||R?"add":"remove"](f.className)}),c&&!ot&&!nt&&c(T),un&&!bn?(ot&&(ai&&(Xt==="complete"?s.pause().totalProgress(1):Xt==="reset"?s.restart(!0).pause():Xt==="restart"?s.restart(!0):s[Xt]()),c&&c(T)),(It||!Zm)&&(p&&It&&Mo(T,p),Y[Zt]&&Mo(T,Y[Zt]),R&&(Bt===1?T.kill(!1,1):Y[Zt]=0),It||(Zt=Bt===1?1:3,Y[Zt]&&Mo(T,Y[Zt]))),B&&!Re&&Math.abs(T.getVelocity())>(Tu(B)?B:2500)&&(pu(T.callbackAnimation),Mt?Mt.progress(1):pu(s,Xt==="reverse"?1:!Bt,1))):ot&&c&&!bn&&c(T)}if(Gn){var _e=z?Tt/z.duration()*(z._caScrollDist||0):Tt;Dr(_e+(F._isFlipped?1:0)),Gn(_e)}jr&&jr(-Tt/z.duration()*(z._caScrollDist||0))}},T.enable=function(nt,dt){T.enabled||(T.enabled=!0,an(tt,"resize",Eu),pt||an(tt,"scroll",Do),K&&an(n,"refreshInit",K),nt!==!1&&(T.progress=st=0,pe=ie=rt=Ot()),dt!==!1&&T.refresh())},T.getTween=function(nt){return nt&&Et?Et.tween:Mt},T.setPositions=function(nt,dt,ft,Tt){if(z){var Ye=z.scrollTrigger,Bt=z.duration(),ve=Ye.end-Ye.start;nt=Ye.start+ve*nt/Bt,dt=Ye.start+ve*dt/Bt}T.refresh(!1,!1,{start:_w(nt,ft&&!!T._startClamp),end:_w(dt,ft&&!!T._endClamp)},Tt),T.update()},T.adjustPinSpacing=function(nt){if(Me&&nt){var dt=Me.indexOf(Z.d)+1;Me[dt]=parseFloat(Me[dt])+nt+We,Me[1]=parseFloat(Me[1])+nt+We,Ko(Me)}},T.disable=function(nt,dt){if(nt!==!1&&T.revert(!0,!0),T.enabled&&(T.enabled=T.isActive=!1,dt||Mt&&Mt.pause(),ii=0,Ft&&(Ft.uncache=1),K&&rn(n,"refreshInit",K),ln&&(ln.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!pt)){for(var ft=zt.length;ft--;)if(zt[ft].scroller===tt&&zt[ft]!==T)return;rn(tt,"resize",Eu),pt||rn(tt,"scroll",Do)}},T.kill=function(nt,dt){T.disable(nt,dt),Mt&&!dt&&Mt.kill(),h&&delete ig[h];var ft=zt.indexOf(T);ft>=0&&zt.splice(ft,1),ft===Pn&&Sd>0&&Pn--,ft=0,zt.forEach(function(Tt){return Tt.scroller===T.scroller&&(ft=1)}),ft||Vn||(T.scroll.rec=0),s&&(s.scrollTrigger=null,nt&&s.revert({kill:!1}),dt||s.kill()),yn&&[yn,Mn,F,Rn].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),Yu===T&&(Yu=0),v&&(Ft&&(Ft.uncache=1),ft=0,zt.forEach(function(Tt){return Tt.pin===v&&ft++}),ft||(Ft.spacer=0)),a.onKill&&a.onKill(T)},zt.push(T),T.enable(!1,!1),ri&&ri(T),s&&s.add&&!oe){var Rt=T.update;T.update=function(){T.update=Rt,Pt.cache++,Vt||me||T.refresh()},lt.delayedCall(.01,T.update),oe=.01,Vt=me=0}else T.refresh();v&&nj()},n.register=function(a){return Oo||(lt=a||R5(),M5()&&window.document&&n.enable(),Oo=wu),Oo},n.defaults=function(a){if(a)for(var s in a)Gf[s]=a[s];return Gf},n.disable=function(a,s){wu=0,zt.forEach(function(c){return c[s?"kill":"disable"](a)}),rn(Nt,"wheel",Do),rn(ne,"scroll",Do),clearInterval(Vf),rn(ne,"touchcancel",pr),rn(Jt,"touchstart",pr),Hf(rn,ne,"pointerdown,touchstart,mousedown",ww),Hf(rn,ne,"pointerup,touchend,mouseup",Sw),$d.kill(),Uf(rn);for(var u=0;u<Pt.length;u+=3)Yf(rn,Pt[u],Pt[u+1]),Yf(rn,Pt[u],Pt[u+2])},n.enable=function(){if(Nt=window,ne=document,vi=ne.documentElement,Jt=ne.body,lt){if(uc=lt.utils.toArray,Nu=lt.utils.clamp,eg=lt.core.context||pr,Km=lt.core.suppressOverwrites||pr,yy=Nt.history.scrollRestoration||"auto",rg=Nt.pageYOffset||0,lt.core.globals("ScrollTrigger",n),Jt){wu=1,$o=document.createElement("div"),$o.style.height="100vh",$o.style.position="absolute",B5(),ZO(),Be.register(lt),n.isTouch=Be.isTouch,La=Be.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),tg=Be.isTouch===1,an(Nt,"wheel",Do),gy=[Nt,ne,vi,Jt],lt.matchMedia?(n.matchMedia=function(g){var y=lt.matchMedia(),x;for(x in g)y.add(x,g[x]);return y},lt.addEventListener("matchMediaInit",function(){P5(),Sy()}),lt.addEventListener("matchMediaRevert",function(){return N5()}),lt.addEventListener("matchMedia",function(){Ms(0,1),Ys("matchMedia")}),lt.matchMedia().add("(orientation: portrait)",function(){return Im(),Im})):console.warn("Requires GSAP 3.11.0 or later"),Im(),an(ne,"scroll",Do);var a=Jt.hasAttribute("style"),s=Jt.style,u=s.borderTopStyle,c=lt.core.Animation.prototype,f,h;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),s.borderTopStyle="solid",f=ta(Jt),Je.m=Math.round(f.top+Je.sc())||0,Bn.m=Math.round(f.left+Bn.sc())||0,u?s.borderTopStyle=u:s.removeProperty("border-top-style"),a||(Jt.setAttribute("style",""),Jt.removeAttribute("style")),Vf=setInterval(Aw,250),lt.delayedCall(.5,function(){return Bf=0}),an(ne,"touchcancel",pr),an(Jt,"touchstart",pr),Hf(an,ne,"pointerdown,touchstart,mousedown",ww),Hf(an,ne,"pointerup,touchend,mouseup",Sw),J0=lt.utils.checkPrefix("transform"),Td.push(J0),Oo=wn(),$d=lt.delayedCall(.2,Ms).pause(),jo=[ne,"visibilitychange",function(){var g=Nt.innerWidth,y=Nt.innerHeight;ne.hidden?(vw=g,xw=y):(vw!==g||xw!==y)&&Eu()},ne,"DOMContentLoaded",Ms,Nt,"load",Ms,Nt,"resize",Eu],Uf(an),zt.forEach(function(g){return g.enable(0,1)}),h=0;h<Pt.length;h+=3)Yf(rn,Pt[h],Pt[h+1]),Yf(rn,Pt[h],Pt[h+2])}else if(ne){var p=function g(){n.enable(),ne.removeEventListener("DOMContentLoaded",g)};ne.addEventListener("DOMContentLoaded",p)}}},n.config=function(a){"limitCallbacks"in a&&(Zm=!!a.limitCallbacks);var s=a.syncInterval;s&&clearInterval(Vf)||(Vf=s)&&setInterval(Aw,s),"ignoreMobileResize"in a&&(tg=n.isTouch===1&&a.ignoreMobileResize),"autoRefreshEvents"in a&&(Uf(rn)||Uf(an,a.autoRefreshEvents||"none"),E5=(a.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(a,s){var u=Zn(a),c=Pt.indexOf(u),f=Us(u);~c&&Pt.splice(c,f?6:2),s&&(f?Tr.unshift(Nt,s,Jt,s,vi,s):Tr.unshift(u,s))},n.clearMatchMedia=function(a){zt.forEach(function(s){return s._ctx&&s._ctx.query===a&&s._ctx.kill(!0,!0)})},n.isInViewport=function(a,s,u){var c=(gi(a)?Zn(a):a).getBoundingClientRect(),f=c[u?Ps:Vs]*s||0;return u?c.right-f>0&&c.left+f<Nt.innerWidth:c.bottom-f>0&&c.top+f<Nt.innerHeight},n.positionInViewport=function(a,s,u){gi(a)&&(a=Zn(a));var c=a.getBoundingClientRect(),f=c[u?Ps:Vs],h=s==null?f/2:s in Zd?Zd[s]*f:~s.indexOf("%")?parseFloat(s)*f/100:parseFloat(s)||0;return u?(c.left+h)/Nt.innerWidth:(c.top+h)/Nt.innerHeight},n.killAll=function(a){if(zt.slice(0).forEach(function(u){return u.vars.id!=="ScrollSmoother"&&u.kill()}),a!==!0){var s=Hs.killAll||[];Hs={},s.forEach(function(u){return u()})}},n}();kt.version="3.15.0";kt.saveStyles=function(n){return n?uc(n).forEach(function(t){if(t&&t.style){var r=mi.indexOf(t);r>=0&&mi.splice(r,5),mi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),lt.core.getCache(t),eg())}}):mi};kt.revert=function(n,t){return Sy(!n,t)};kt.create=function(n,t){return new kt(n,t)};kt.refresh=function(n){return n?Eu(!0):(Oo||kt.register())&&Ms(!0)};kt.update=function(n){return++Pt.cache&&ia(n===!0?2:0)};kt.clearScrollMemory=V5;kt.maxScroll=function(n,t){return vr(n,t?Bn:Je)};kt.getScrollFunc=function(n,t){return Za(Zn(n),t?Bn:Je)};kt.getById=function(n){return ig[n]};kt.getAll=function(){return zt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};kt.isScrolling=function(){return!!Fi};kt.snapDirectional=wy;kt.addEventListener=function(n,t){var r=Hs[n]||(Hs[n]=[]);~r.indexOf(t)||r.push(t)};kt.removeEventListener=function(n,t){var r=Hs[n],a=r&&r.indexOf(t);a>=0&&r.splice(a,1)};kt.batch=function(n,t){var r=[],a={},s=t.interval||.016,u=t.batchMax||1e9,c=function(p,g){var y=[],x=[],v=lt.delayedCall(s,function(){g(y,x),y=[],x=[]}).pause();return function(_){y.length||v.restart(!0),y.push(_.trigger),x.push(_),u<=y.length&&v.progress(1)}},f;for(f in t)a[f]=f.substr(0,2)==="on"&&Tn(t[f])&&f!=="onRefreshInit"?c(f,t[f]):t[f];return Tn(u)&&(u=u(),an(kt,"refresh",function(){return u=t.batchMax()})),uc(n).forEach(function(h){var p={};for(f in a)p[f]=a[f];p.trigger=h,r.push(kt.create(p))}),r};var jw=function(t,r,a,s){return r>s?t(s):r<0&&t(0),a>s?(s-r)/(a-r):a<0?r/(r-a):1},Jm=function n(t,r){r===!0?t.style.removeProperty("touch-action"):t.style.touchAction=r===!0?"auto":r?"pan-"+r+(Be.isTouch?" pinch-zoom":""):"none",t===vi&&n(Jt,r)},$f={auto:1,scroll:1},oj=function(t){var r=t.event,a=t.target,s=t.axis,u=(r.changedTouches?r.changedTouches[0]:r).target,c=u._gsap||lt.core.getCache(u),f=wn(),h;if(!c._isScrollT||f-c._isScrollT>2e3){for(;u&&u!==Jt&&(u.scrollHeight<=u.clientHeight&&u.scrollWidth<=u.clientWidth||!($f[(h=Gi(u)).overflowY]||$f[h.overflowX]));)u=u.parentNode;c._isScroll=u&&u!==a&&!Us(u)&&($f[(h=Gi(u)).overflowY]||$f[h.overflowX]),c._isScrollT=f}(c._isScroll||s==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},H5=function(t,r,a,s){return Be.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:s=s&&oj,onPress:s,onDrag:s,onScroll:s,onEnable:function(){return a&&an(ne,Be.eventTypes[0],kw,!1,!0)},onDisable:function(){return rn(ne,Be.eventTypes[0],kw,!0)}})},lj=/(input|label|select|textarea)/i,zw,kw=function(t){var r=lj.test(t.target.tagName);(r||zw)&&(t._gsapAllow=!0,zw=r)},uj=function(t){Ss(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var r=t,a=r.normalizeScrollX,s=r.momentum,u=r.allowNestedScroll,c=r.onRelease,f,h,p=Zn(t.target)||vi,g=lt.core.globals().ScrollSmoother,y=g&&g.get(),x=La&&(t.content&&Zn(t.content)||y&&t.content!==!1&&!y.smooth()&&y.content()),v=Za(p,Je),_=Za(p,Bn),S=1,C=(Be.isTouch&&Nt.visualViewport?Nt.visualViewport.scale*Nt.visualViewport.width:Nt.outerWidth)/Nt.innerWidth,A=0,M=Tn(s)?function(){return s(f)}:function(){return s||2.8},R,j,D=H5(p,t.type,!0,u),N=function(){return j=!1},z=pr,B=pr,X=function(){h=vr(p,Je),B=Nu(La?1:0,h),a&&(z=Nu(0,vr(p,Bn))),R=Bs},Z=function(){x._gsap.y=Su(parseFloat(x._gsap.y)+v.offset)+"px",x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(x._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},ot=function(){if(j){requestAnimationFrame(N);var J=Su(f.deltaY/2),at=B(v.v-J);if(x&&at!==v.v+v.offset){v.offset=at-v.v;var T=Su((parseFloat(x&&x._gsap.y)||0)-v.offset);x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",x._gsap.y=T+"px",v.cacheID=Pt.cache,ia()}return!0}v.offset&&Z(),j=!0},tt,wt,pt,gt,Y=function(){X(),tt.isActive()&&tt.vars.scrollY>h&&(v()>h?tt.progress(1)&&v(h):tt.resetTo("scrollY",h))};return x&&lt.set(x,{y:"+=0"}),t.ignoreCheck=function($){return La&&$.type==="touchmove"&&ot()||S>1.05&&$.type!=="touchstart"||f.isGesturing||$.touches&&$.touches.length>1},t.onPress=function(){j=!1;var $=S;S=Su((Nt.visualViewport&&Nt.visualViewport.scale||1)/C),tt.pause(),$!==S&&Jm(p,S>1.01?!0:a?!1:"x"),wt=_(),pt=v(),X(),R=Bs},t.onRelease=t.onGestureStart=function($,J){if(v.offset&&Z(),!J)gt.restart(!0);else{Pt.cache++;var at=M(),T,K;a&&(T=_(),K=T+at*.05*-$.velocityX/.227,at*=jw(_,T,K,vr(p,Bn)),tt.vars.scrollX=z(K)),T=v(),K=T+at*.05*-$.velocityY/.227,at*=jw(v,T,K,vr(p,Je)),tt.vars.scrollY=B(K),tt.invalidate().duration(at).play(.01),(La&&tt.vars.scrollY>=h||T>=h-1)&&lt.to({},{onUpdate:Y,duration:at})}c&&c($)},t.onWheel=function(){tt._ts&&tt.pause(),wn()-A>1e3&&(R=0,A=wn())},t.onChange=function($,J,at,T,K){if(Bs!==R&&X(),J&&a&&_(z(T[2]===J?wt+($.startX-$.x):_()+J-T[1])),at){v.offset&&Z();var et=K[2]===at,it=et?pt+$.startY-$.y:v()+at-K[1],rt=B(it);et&&it!==rt&&(pt+=rt-it),v(rt)}(at||J)&&ia()},t.onEnable=function(){Jm(p,a?!1:"x"),kt.addEventListener("refresh",Y),an(Nt,"resize",Y),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=_.smooth=!1),D.enable()},t.onDisable=function(){Jm(p,!0),rn(Nt,"resize",Y),kt.removeEventListener("refresh",Y),D.kill()},t.lockAxis=t.lockAxis!==!1,f=new Be(t),f.iOS=La,La&&!v()&&v(1),La&&lt.ticker.add(pr),gt=f._dc,tt=lt.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:a?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:U5(v,v(),function(){return tt.pause()})},onUpdate:ia,onComplete:gt.vars.onComplete}),f};kt.sort=function(n){if(Tn(n))return zt.sort(n);var t=Nt.pageYOffset||0;return kt.getAll().forEach(function(r){return r._sortY=r.trigger?t+r.trigger.getBoundingClientRect().top:r.start+Nt.innerHeight}),zt.sort(n||function(r,a){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((a.vars.containerAnimation?1e6:a._sortY)+(a.vars.refreshPriority||0)*-1e6)})};kt.observe=function(n){return new Be(n)};kt.normalizeScroll=function(n){if(typeof n>"u")return Nn;if(n===!0&&Nn)return Nn.enable();if(n===!1){Nn&&Nn.kill(),Nn=n;return}var t=n instanceof Be?n:uj(n);return Nn&&Nn.target===t.target&&Nn.kill(),Us(t.target)&&(Nn=t),t};kt.core={_getVelocityProp:W0,_inputObserver:H5,_scrollers:Pt,_proxies:Tr,bridge:{ss:function(){Fi||Ys("scrollStart"),Fi=wn()},ref:function(){return bn}}};R5()&&lt.registerPlugin(kt);/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Lw=typeof document<"u"?k.useLayoutEffect:k.useEffect,Nw=n=>n&&!Array.isArray(n)&&typeof n=="object",Kf=[],cj={},Y5=yt;const Cr=(n,t=Kf)=>{let r=cj;Nw(n)?(r=n,n=null,t="dependencies"in r?r.dependencies:Kf):Nw(t)&&(r=t,t="dependencies"in r?r.dependencies:Kf),n&&typeof n!="function"&&console.warn("First parameter must be a function or config object");const{scope:a,revertOnUpdate:s}=r,u=k.useRef(!1),c=k.useRef(Y5.context(()=>{},a)),f=k.useRef(p=>c.current.add(null,p)),h=t&&t.length&&!s;return h&&Lw(()=>(u.current=!0,()=>c.current.revert()),Kf),Lw(()=>{if(n&&c.current.add(n,a),!h||!u.current)return()=>c.current.revert()},t),{context:c.current,contextSafe:f.current}};Cr.register=n=>{Y5=n};Cr.headless=!0;const fj=P(ct.button)`
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
`,dj=({tab:n,active:t,onClick:r})=>w.jsx(fj,{onClick:r,active:t,initial:{borderColor:t?"var(--primary-color)":"var(--gray-200)"},animate:{borderColor:t?"var(--primary-color)":"var(--gray-200)"},whileHover:{borderColor:"var(--primary-color)",scale:1.05,transition:{duration:.3}},whileTap:{scale:.95},children:n.title}),hj=P(ct.button)`
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
`,pj=({tab:n,active:t,selectedSub:r,onClick:a})=>{var s;return w.jsx("div",{className:"sub-category-container",children:w.jsx(Dd,{children:(s=n.subTitle)==null?void 0:s.map((u,c)=>t&&a?w.jsx(hj,{onClick:()=>a(u),active:r==u.type,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},whileHover:{borderBottom:"2px solid",borderColor:"var(--primary-color)",scale:1.05,transition:{duration:.3}},whileTap:{scale:.95},children:u.title},u.title+c):null)})})};P(ct.button)`
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
`;const mj=P(ct.button)`
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
`,gj=P(ct.span)`
  font-size: 1rem;
  font-weight: 600;
  color: var(--white-100);
  display: inline-block;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,yj=({children:n,onClick:t,className:r})=>w.jsx(mj,{className:r,onClick:t,animate:{backgroundPosition:["0% 50%","100% 50%","0% 50%"]},transition:{duration:3,repeat:1/0,ease:"linear"},style:{backgroundPosition:"0% 50%"},whileHover:{scale:1.08,y:-2,boxShadow:"0 12px 24px rgba(118, 164, 218, 0.7)",transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95,y:0},children:w.jsx(gj,{children:n})}),Rs={CategoryBtn:dj,SubCategory:pj,GradientBtn:yj},Ty=P.div`
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
`,vj=P(ct.div)`
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
`,xj=P.h3`
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
`,bj=P.div`
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
`,_j=P(ct.div)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    color: var(--gray-400);
`,wj=P(ct.img)`
    width: 36px;
    height: 36px;
    object-fit: contain;
`,Sj=P.div`
    width: 100%;
    text-align: center;
`,Tj={hidden:{opacity:0,y:50,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:"easeOut"}}},Ej={hidden:{opacity:0,y:-10},visible:{opacity:1,y:0,transition:{duration:.3,delay:.2}}},Aj=({title:n,stack:t,layoutId:r})=>w.jsxs(vj,{layoutId:r,variants:Tj,children:[w.jsx(xj,{children:n}),w.jsx(bj,{children:t.map(a=>w.jsxs(_j,{variants:Ej,whileHover:{scale:1.15},transition:{type:"spring",stiffness:400},children:[w.jsx(wj,{src:a.logo,alt:a.name,whileHover:{rotate:5}}),w.jsx(Sj,{children:a.name})]},a.name))})]}),Cj=P(ct.button)`
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
`,Mj=P.h1`
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
`,Rj=P.div`
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
`,G5=({title:n,page:t})=>{const r=Xs();return w.jsx(Rj,{page:t,children:t==="detail"?w.jsxs(w.Fragment,{children:[w.jsx(Cj,{onClick:()=>r(-1),whileTap:{scale:.95},"aria-label":"뒤로가기"}),w.jsx(Mj,{children:n})]}):n})},Dj=P.div`
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
`,X5=({title:n})=>w.jsx(Dj,{children:n}),Oj=P(ct.div)`
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
`,jj={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},zj=()=>{const n=[{id:"card-1",title:"프론트엔드",stack:[{name:"React",logo:"https://cdn.simpleicons.org/react"},{name:"Vue",logo:"https://cdn.simpleicons.org/vue.js"},{name:"Nuxt",logo:"https://api.iconify.design/simple-icons:nuxt.svg?color=%2300C58E"},{name:"JavaScript",logo:"https://cdn.simpleicons.org/javascript"},{name:"TypeScript",logo:"https://cdn.simpleicons.org/typescript"}]},{id:"card-2",title:"백엔드",stack:[{name:"Django",logo:"https://cdn.simpleicons.org/django"},{name:"FastAPI",logo:"https://cdn.simpleicons.org/fastapi"},{name:"Node.js",logo:"https://cdn.simpleicons.org/node.js"}]},{id:"card-3",title:"데이터베이스",stack:[{name:"PostgreSQL",logo:"https://cdn.simpleicons.org/postgresql"},{name:"MySQL",logo:"https://cdn.simpleicons.org/mysql"}]},{id:"card-4",title:"인프라",stack:[{name:"Docker",logo:"https://cdn.simpleicons.org/docker"},{name:"Render",logo:"https://cdn.simpleicons.org/render"},{name:"Supabase",logo:"https://cdn.simpleicons.org/supabase"}]}];return w.jsxs("div",{children:[w.jsx(X5,{title:"Stack"}),w.jsx(Oj,{variants:jj,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:n.map(t=>w.jsx(Aj,{title:t.title,stack:t.stack,layoutId:t.id},t.id))})]})},kj=P(ct.div)`
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
`,Lj=P(ct.div)`
    padding: 2.5rem;
    border-radius: 20px;
    color: var(--gray-100);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    overflow: hidden;
`,Nj=P(ct.div)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: 2px solid rgba(118, 164, 218, 0.3);
    padding-bottom: 1rem;
`,Pj=P(ct.h3)`
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
`,Vj=P(ct.h4)`
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    color: var(--gray-400);


    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`,Bj=P(ct.p)`
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    color: var(--gray-100);
    padding-top: 0.5rem;


    @media (max-width: 480px) {
        font-size: 1rem;
    }
`,Uj=()=>{const n=[{id:1,title:"경동대학교",date:"2016 ~ 2020",content:"치기공학과"},{id:2,title:"호서고등학교",date:"2013 ~ 2016"}],t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},r={hidden:{opacity:0,y:50,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:"easeOut"}}},a={hidden:{opacity:0,y:-10},visible:{opacity:1,y:0,transition:{duration:.3,delay:.2}}};return w.jsxs("div",{children:[w.jsx(X5,{title:"학력"}),w.jsx(kj,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:n.map(s=>w.jsxs(Lj,{variants:r,children:[w.jsxs(Nj,{variants:a,children:[w.jsx(Pj,{children:s.title}),w.jsx(Vj,{children:s.date})]}),s.content&&w.jsx(Bj,{variants:a,children:s.content})]},s.id))})]})};yt.registerPlugin(kt,Cr);const Hj=P(Ty)`
  width: 100%;

  padding: 0 1.5rem 6rem;

  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0 1rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.875rem 3rem;
  }
`,Yj=P.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`,Gj=P.section`
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
`,Xj=P.div`
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
`,qj=P.div`
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 1.4rem;

  min-width: 0;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`,Fj=P.div`
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
`,$j=P.div`
  position: relative;

  width: 100%;
`,Kj=P.h1`
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
`,Zj=P.span`
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
`,Pw=({text:n,floatIndexes:t=[],accentIndexes:r=[]})=>w.jsx(Zj,{children:[...n].map((a,s)=>{const u=t.includes(s),c=r.includes(s);return w.jsx("span",{className:["hero-char",u?"idle-char":"",c?"accent-char":""].filter(Boolean).join(" "),children:a===" "?" ":a},`${a}-${s}`)})}),Qj=P.p`
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
`,Ij=P.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  gap: 0.65rem 1rem;

  width: 100%;
`,Zf=P.div`
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
`,Wj=P.div`
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
`,Qf=P.div`
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
`,If=P.div`
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
`,Wf=P.span`
  display: inline-block;

  pointer-events: none;

  will-change: transform;
`,Jj=P.div`
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
`,tz=P.div`
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
`,ez=P.div`
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
`,nz=P.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding:
    0.15rem
    0.15rem
    0.9rem;
`,iz=P.div`
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
`,rz=P.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.68rem;
`,az=P.div`
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
`,sz=P.div`
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
`,oz=P.div`
  position: relative;
  z-index: 2;

  display: flex;

  justify-content: space-between;
  align-items: flex-start;
`,lz=P.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.68rem;

  font-weight: 500;

  letter-spacing: 0.08em;
`,uz=P.span`
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
`,cz=P.div`
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
`,fz=P.div`
  position: relative;
  z-index: 2;

  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;
`,mu=P.span`
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
`,Jf=P.section`
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
`,td=P.div`
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
`,dz=P.div`
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
`,t0=P.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`,e0=P.span`
  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.7rem;

  font-weight: 500;

  letter-spacing: 0.1em;
`,hz=P.h2`
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
`,pz=P.p`
  color: var(--gray-400);

  font-size: 0.93rem;

  line-height: 1.75;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.86rem;
  }
`,mz=P.div`
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
`,n0=P.div`
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
`,i0=P.span`
  position: relative;
  z-index: 2;

  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.7rem;

  letter-spacing: 0.08em;
`,r0=P.div`
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
`,Vw=P.div`
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
`,Bw=P.div`
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
`,Uw=P.p`
  max-width: 440px;

  color: var(--gray-400);

  font-size: 0.9rem;

  line-height: 1.7;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`,gz=P.div`
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
`,yz=P.div`
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
`,vz=P.div`
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
`,xz=()=>{const n=Xs(),t=k.useRef(null);return Cr(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;yt.set(".hero-char",{transformOrigin:"50% 100%"});const a=yt.timeline();a.from(".hero-badge",{opacity:0,y:14,duration:.4,ease:"power2.out",overwrite:"auto"}),a.fromTo(".hero-char",{opacity:0,yPercent:120,rotate:5,scaleY:.9},{opacity:1,yPercent:0,rotate:0,scaleY:1,duration:.7,stagger:{each:.04,from:"start"},ease:"back.out(1.25)",overwrite:"auto"},"-=0.15"),a.to(".hero-char",{y:g=>Math.sin(g*.9)*-4,duration:.2,stagger:{each:.022,from:"start"},ease:"sine.out",overwrite:"auto"},"-=0.18"),a.to(".hero-char",{y:0,duration:.28,stagger:{each:.022,from:"start"},ease:"sine.inOut",overwrite:"auto"},"-=0.08"),a.from(".hero-description",{opacity:0,y:18,duration:.5,ease:"power2.out",overwrite:"auto"},"-=0.22"),a.from(".hero-info-item",{opacity:0,y:8,duration:.35,stagger:.06,ease:"power2.out",overwrite:"auto"},"-=0.25"),a.from(".hero-actions",{opacity:0,y:14,duration:.45,ease:"power2.out",overwrite:"auto"},"-=0.2"),a.from(".preview-card",{opacity:0,x:35,scale:.97,duration:.75,ease:"power3.out",overwrite:"auto"},"-=0.6");const s=yt.utils.toArray(".idle-char"),u=[{y:-3,rotation:-.8,duration:2.3},{y:3,rotation:.7,duration:2.8},{y:-4,rotation:1,duration:2.5}];s.forEach((g,y)=>{const x=u[y]??u[0];yt.to(g,{y:x.y,rotate:x.rotation,duration:x.duration,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:2.5+y*.2,overwrite:"auto"})}),yt.to(".preview-card",{y:-6,duration:3.2,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:1.8,overwrite:"auto"});const c=[];return window.matchMedia("(pointer: fine)").matches&&yt.utils.toArray(".mag-zone").forEach(y=>{const x=y.querySelector(".mag-target"),v=y.querySelector(".mag-label");if(!x||!v)return;const _=.3,S=.13,C=M=>{const R=y.getBoundingClientRect(),j=yt.utils.mapRange(R.left,R.right,-R.width/2,R.width/2,M.clientX),D=yt.utils.mapRange(R.top,R.bottom,-R.height/2,R.height/2,M.clientY);yt.to(x,{x:j*_,y:D*_,duration:.35,ease:"power2.out",overwrite:"auto"}),yt.to(v,{x:j*S,y:D*S,duration:.35,ease:"power2.out",overwrite:"auto"})},A=()=>{yt.to(x,{x:0,y:0,duration:.7,ease:"elastic.out(1,0.4)",overwrite:"auto"}),yt.to(v,{x:0,y:0,duration:.65,ease:"elastic.out(1,0.4)",overwrite:"auto"})};y.addEventListener("mousemove",C),y.addEventListener("mouseleave",A),c.push(()=>{y.removeEventListener("mousemove",C),y.removeEventListener("mouseleave",A)})}),yt.utils.toArray(".main-reveal").forEach(g=>{yt.from(g,{opacity:0,y:35,duration:.7,ease:"power2.out",overwrite:"auto",scrollTrigger:{trigger:g,start:"top 88%",toggleActions:"play none none none"}})}),yt.from(".about-card",{opacity:0,y:35,scale:.98,duration:.65,stagger:.1,ease:"power2.out",overwrite:"auto",scrollTrigger:{trigger:".about-grid",start:"top 82%"}}),yt.utils.toArray(".section-line").forEach(g=>{yt.from(g,{scaleX:0,duration:.8,ease:"power2.out",overwrite:"auto",scrollTrigger:{trigger:g,start:"top 92%"}})}),()=>{c.forEach(g=>g())}},{scope:t}),w.jsx(Hj,{children:w.jsxs(Yj,{ref:t,children:[w.jsx(Gj,{className:"hero-section",children:w.jsxs(Xj,{children:[w.jsxs(qj,{children:[w.jsx(Fj,{className:"hero-badge",children:"Frontend Developer Portfolio"}),w.jsx($j,{children:w.jsxs(Kj,{children:[w.jsx(Pw,{text:"안녕하세요",floatIndexes:[0,4]}),w.jsx(Pw,{text:"개발자 공혜진입니다",floatIndexes:[6],accentIndexes:[4,5,6]})]})}),w.jsx(Qj,{className:"hero-description",children:"새로운 기술을 배우는 것뿐 아니라 실제 서비스에서 사용할 수 있는 결과물로 만드는 것을 중요하게 생각합니다."}),w.jsxs(Ij,{children:[w.jsx(Zf,{className:"hero-info-item",children:"React / Vue"}),w.jsx(Zf,{className:"hero-info-item",children:"Frontend"}),w.jsx(Zf,{className:"hero-info-item",children:"Fullstack Experience"}),w.jsx(Zf,{className:"hero-info-item",children:"Team Lead"})]}),w.jsxs(Wj,{className:"hero-actions",children:[w.jsx(Qf,{className:"mag-zone",children:w.jsx(If,{className:"mag-target",children:w.jsx(Rs.GradientBtn,{onClick:()=>n("/project"),children:w.jsx(Wf,{className:"mag-label",children:"프로젝트 보러가기 ▶"})})})}),w.jsx(Qf,{className:"mag-zone",children:w.jsx(If,{className:"mag-target",children:w.jsx(Rs.GradientBtn,{onClick:()=>window.open("https://github.com/hjzheld","_blank","noopener,noreferrer"),children:w.jsx(Wf,{className:"mag-label",children:"GitHub ▶"})})})})]})]}),w.jsxs(Jj,{children:[w.jsx(tz,{}),w.jsxs(ez,{className:"preview-card",children:[w.jsxs(nz,{children:[w.jsxs(iz,{children:[w.jsx("span",{}),w.jsx("span",{}),w.jsx("span",{})]}),w.jsx(rz,{children:"portfolio.tsx"})]}),w.jsxs(az,{children:[w.jsx(sz,{}),w.jsxs(oz,{children:[w.jsx(lz,{children:"ABOUT ME"}),w.jsx(uz,{children:"AVAILABLE"})]}),w.jsxs(cz,{children:[w.jsxs("h2",{children:["Web",w.jsx("br",{}),"Developer"]}),w.jsx("p",{children:"화면 구현부터 API 연동, 데이터 처리와 서비스 구조까지 함께 고민합니다."})]}),w.jsxs(fz,{children:[w.jsx(mu,{children:"React"}),w.jsx(mu,{children:"Vue"}),w.jsx(mu,{children:"TypeScript"}),w.jsx(mu,{children:"FastAPI"}),w.jsx(mu,{children:"PostgreSQL"})]})]})]})]})]})}),w.jsxs(Jf,{children:[w.jsx(td,{className:"section-line"}),w.jsxs(dz,{className:"main-reveal",children:[w.jsxs(t0,{children:[w.jsx(e0,{children:"01 / ABOUT"}),w.jsx(hz,{children:"제가 개발할 때 중요하게 보는 것"})]}),w.jsx(pz,{children:"한 가지 영역만 바라보기보다 실제 서비스가 어떻게 연결되고 운영되는지를 이해하며 개발하려고 합니다."})]}),w.jsxs(mz,{className:"about-grid",children:[w.jsxs(n0,{className:"about-card",children:[w.jsx(i0,{children:"01 / FRONTEND"}),w.jsxs(r0,{children:[w.jsx("h3",{children:"사용자 화면"}),w.jsx("p",{children:"React와 Vue를 활용해 사용자에게 직접 보이는 화면과 인터랙션을 구현합니다."})]})]}),w.jsxs(n0,{className:"about-card",children:[w.jsx(i0,{children:"02 / SERVICE"}),w.jsxs(r0,{children:[w.jsx("h3",{children:"서비스 흐름"}),w.jsx("p",{children:"API, 사용자 상태, 권한과 데이터 흐름을 이해하고 화면과 자연스럽게 연결합니다."})]})]}),w.jsxs(n0,{className:"about-card",children:[w.jsx(i0,{children:"03 / TEAM"}),w.jsxs(r0,{children:[w.jsx("h3",{children:"협업과 결과"}),w.jsx("p",{children:"일정과 QA, 유지보수성을 함께 고려하며 팀이 결과를 낼 수 있는 방향을 고민합니다."})]})]})]})]}),w.jsxs(Jf,{children:[w.jsx(td,{className:"section-line"}),w.jsxs(Bw,{className:"main-reveal",children:[w.jsx(t0,{children:w.jsx(e0,{children:"02 / STACK"})}),w.jsx(Uw,{children:"실무와 개인 프로젝트에서 직접 사용한 기술을 중심으로 정리했습니다."})]}),w.jsx(Vw,{className:"main-reveal",children:w.jsx(zj,{})})]}),w.jsxs(Jf,{children:[w.jsx(td,{className:"section-line"}),w.jsxs(Bw,{className:"main-reveal",children:[w.jsx(t0,{children:w.jsx(e0,{children:"03 / EDUCATION"})}),w.jsx(Uw,{children:"현재까지의 학력과 개발자로 성장해온 과정을 정리했습니다."})]}),w.jsx(Vw,{className:"main-reveal",children:w.jsx(Uj,{})})]}),w.jsxs(Jf,{children:[w.jsx(td,{className:"section-line"}),w.jsxs(gz,{className:"main-reveal",children:[w.jsxs(yz,{children:[w.jsx("h2",{children:"프로젝트에서 더 자세히 보여드릴게요."}),w.jsx("p",{children:"개인 프로젝트와 실제 구현 경험, 사용 기술과 문제 해결 과정을 프로젝트 페이지에 정리해두었습니다."})]}),w.jsxs(vz,{children:[w.jsx(Qf,{className:"mag-zone",children:w.jsx(If,{className:"mag-target",children:w.jsx(Rs.GradientBtn,{onClick:()=>n("/project"),children:w.jsx(Wf,{className:"mag-label",children:"프로젝트 보러가기 ▶"})})})}),w.jsx(Qf,{className:"mag-zone",children:w.jsx(If,{className:"mag-target",children:w.jsx(Rs.GradientBtn,{onClick:()=>n("/personal"),children:w.jsx(Wf,{className:"mag-label",children:"이력 보기 ▶"})})})})]})]})]})]})})},bz=P.div`
  margin: 2rem 0;
`,_z=P.div`
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
`,wz=P.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    gap: 0.625rem;
  }
`,Hw=P(ct.a)`
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
`,ed=({title:n,links:t})=>{const r=()=>typeof t=="string"?w.jsx(Hw,{href:t,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.3},children:t}):t.map((a,s)=>w.jsx(Hw,{href:a,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.3,delay:s*.1},children:a},s));return w.jsxs(bz,{children:[w.jsx(_z,{children:n}),w.jsx(wz,{children:r()})]})},Sz="/portfolio/assets/video_thumb-CBpaTUEU.png",nd={once:!0,amount:.2},Qr={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.55,ease:"easeOut"}}},Tz={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:.55,ease:"easeOut"}}},a0={hidden:{opacity:0,scale:.75},visible:{opacity:1,scale:1,transition:{type:"spring",stiffness:220,damping:18}}},id={hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:.1}}},Ez=P(ct.div)`
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
`,Az=P(ct.div)`
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
`,Cz=P(ct.h4)`
  font-size: 1.8rem;
  font-weight: 600;

  line-height: 1.4;

  margin-bottom: 1rem;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`,Mz=P(ct.div)`
  display: flex;
  flex-wrap: wrap;

  gap: 0.75rem;

  margin-bottom: 0.5rem;
`,Rz=P(ct.div)`
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
`,Dz=P(ct.div)`
  width: 100%;
`,Oz=P(ct.div)`
  width: 100%;
`,jz=P.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  cursor: zoom-in;
`,zz=P(ct.img)`
  display: block;
  width: 100%;
  height: auto;
  max-height: 600px;

  object-fit: contain;
  user-select: none;
`,Yw=P.button`
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
`,kz=P(ct.div)`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(6px);
`,Lz=P(ct.div)`
  position: relative;

  width: min(86vw, 1200px);
  height: min(84vh, 860px);

  display: flex;
  align-items: center;
  justify-content: center;
`,Nz=P(ct.img)`
  display: block;

  max-width: 100%;
  max-height: 100%;

  width: auto;
  height: auto;

  object-fit: contain;
  user-select: none;
`,Gw=P.button`
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
`,Pz=P.div`
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
`,Vz=P.button`
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
`,Bz={back:"Back-end",front:"Front-end",database:"Database",ai:"AI",build:"Build 도구"},Uz=()=>{var R,j;const[n,t]=k.useState(null),[r,a]=k.useState(!1),[s,u]=k.useState(0),[c,f]=k.useState(0);k.useEffect(()=>{const D=localStorage.getItem("project");D&&t(JSON.parse(D))},[]);const h=(n==null?void 0:n.detail.image.length)??0,p=s>0,g=s<h-1,y=c>0,x=c<h-1,v=D=>{f(D),a(!0)},_=()=>{a(!1)},S=()=>{p&&u(D=>D-1)},C=()=>{g&&u(D=>D+1)},A=()=>{y&&f(D=>D-1)},M=()=>{x&&f(D=>D+1)};return k.useEffect(()=>{if(!r)return;const D=document.body.style.overflow,N=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";const z=B=>{if(B.key==="Escape"){a(!1);return}B.key==="ArrowLeft"&&f(X=>Math.max(X-1,0)),B.key==="ArrowRight"&&f(X=>Math.min(X+1,Math.max(h-1,0)))};return window.addEventListener("keydown",z),()=>{document.body.style.overflow=D,document.documentElement.style.overflow=N,window.removeEventListener("keydown",z)}},[r,h]),w.jsx(Ty,{children:n?w.jsxs(w.Fragment,{children:[w.jsxs(ct.div,{className:"detail-container",variants:Tz,initial:"hidden",animate:"visible",children:[w.jsx(G5,{page:"detail",title:n.title}),w.jsxs(ct.div,{className:"detail-content-container",variants:id,initial:"hidden",animate:"visible",children:[w.jsx(Dz,{className:"detail-img-container",variants:a0,children:n.detail.image.length===1?w.jsx(ct.img,{src:n.detail.image[0].src,loading:"lazy",alt:"프로젝트 이미지",onClick:()=>v(0),whileHover:{scale:1.04,rotate:.5},whileTap:{scale:.96},transition:{type:"spring",stiffness:250,damping:18}}):w.jsxs(jz,{onClick:()=>v(s),children:[w.jsx(zz,{src:(R=n.detail.image[s])==null?void 0:R.src,loading:"lazy",alt:`${n.title} 프로젝트 이미지 ${s+1}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},draggable:!1},s),w.jsx(Yw,{type:"button",$direction:"prev","aria-label":"이전 이미지",disabled:!p,onClick:D=>{D.stopPropagation(),S()}}),w.jsx(Yw,{type:"button",$direction:"next","aria-label":"다음 이미지",disabled:!g,onClick:D=>{D.stopPropagation(),C()}})]})}),w.jsxs(Oz,{className:"detail-content",variants:Qr,children:[w.jsx(Cz,{variants:Qr,children:n.content}),w.jsx(ct.p,{className:"detail-sub-content",variants:Qr,dangerouslySetInnerHTML:{__html:n.detail.content}}),n.detail.video&&w.jsx(ct.div,{className:"video-wrap",variants:a0,initial:"hidden",whileInView:"visible",viewport:nd,children:w.jsx("video",{src:n.detail.video,poster:Sz,autoPlay:!0,playsInline:!0,controls:!0,muted:!0,"aria-label":"시연영상"})}),w.jsxs(ct.div,{variants:id,initial:"hidden",whileInView:"visible",viewport:nd,children:[n.detail.github&&w.jsx(ct.div,{variants:Qr,children:w.jsx(ed,{title:"GitHub",links:n.detail.github})}),n.detail.notion&&w.jsx(ct.div,{variants:Qr,children:w.jsx(ed,{title:"Notion",links:n.detail.notion})}),n.detail.site&&w.jsx(ct.div,{variants:Qr,children:w.jsx(ed,{title:"URL",links:n.detail.site})}),n.detail.blog&&n.detail.blog.length>0&&w.jsx(ct.div,{variants:Qr,children:w.jsx(ed,{title:"Blog",links:n.detail.blog})})]}),w.jsx(Ez,{variants:Qr,initial:"hidden",whileInView:"visible",viewport:nd,children:"기술 스택"}),n.detail.stack&&Object.entries(n.detail.stack??{}).map(([D,N])=>{const z=D,B=N;return B.length===0?null:w.jsxs(ct.div,{initial:"hidden",whileInView:"visible",viewport:nd,variants:id,children:[w.jsx(Az,{variants:Qr,children:Bz[z]}),w.jsx(Mz,{variants:id,children:B.map(X=>w.jsx(Rz,{variants:a0,whileHover:{scale:1.08,y:-4,background:"rgba(118, 164, 218, 0.25)",borderColor:"var(--primary-color)"},whileTap:{scale:.96},children:X},X))})]},z)})]})]})]}),w.jsx(Dd,{children:r&&w.jsxs(kz,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:_,children:[w.jsx(Lz,{initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.96},transition:{duration:.18},onClick:D=>D.stopPropagation(),children:w.jsx(Nz,{src:(j=n.detail.image[c])==null?void 0:j.src,alt:`${n.title} 프로젝트 이미지 ${c+1}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:.18},draggable:!1},c)}),h>1&&w.jsxs(w.Fragment,{children:[w.jsx(Gw,{type:"button",$direction:"prev","aria-label":"이전 이미지",disabled:!y,onClick:D=>{D.stopPropagation(),A()}}),w.jsx(Gw,{type:"button",$direction:"next","aria-label":"다음 이미지",disabled:!x,onClick:D=>{D.stopPropagation(),M()}}),w.jsxs(Pz,{children:[c+1," / ",h]})]}),w.jsx(Vz,{type:"button","aria-label":"이미지 크게 보기 닫기",onClick:D=>{D.stopPropagation(),_()}})]})})]}):w.jsx("p",{children:"프로젝트 정보를 불러오는 중..."})})},Hz=P(ct.div)`
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
`,Yz=P.div`
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
`,Gz=({project:n,onClick:t})=>w.jsxs(Hz,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},children:[w.jsxs("div",{className:"content-wrapper",children:[w.jsx("h3",{children:n.title}),w.jsx("p",{children:n.content})]}),w.jsx("div",{className:"tag-container",children:n.tags.map((r,a)=>w.jsx(Yz,{children:r},a))})]}),Xz="/portfolio/assets/yamiyagi-YZU8s5Rh.png",qz="/portfolio/assets/hojin_main-DctrGh5X.png",Fz="/portfolio/assets/hojin_detail-DNvwE2_Y.png",$z="/portfolio/assets/petmung-B03BhRsi.png",Kz="/portfolio/assets/portfolio-AHcDy501.png",Zz="/portfolio/assets/invitation-BC-lSSMD.png",Qz="/portfolio/assets/hojin_video-C1LpzS2j.mp4",Iz=[{id:1,title:"야미야기",content:"아이들의 상상력으로 만들어지는 동화 웹사이트",mainTab:"back",subTab:"django",tags:["Python","Django","PostgreSQL"],detail:{notion:"https://www.notion.so/teamsparta/IAM-8ad9729b3dfb42e3a25c72c22106a72a",notion_vedio:"https://teamsparta.notion.site/7a49bd323df7456ebd58e9bb32360a8d",blog:[],content:`
            아이들이 원하는 주제로 동화를 만들 수 있는 웹페이지입니다. 
            <br /> ChapGPT 로 주제에 기반한 동화를 생성하고,  
            <br /> Perspective API 로 사용자가 입력한 주제 및 생성된 동화의 폭력성을 검증합니다. 
            <br /> Deepl API 사용하여 생성된 동화를 번역하며, DALL-E API 로 동화 내용의 그림을 생성합니다.
            <br /><br /> 총 인원 6명이 참여했습니다.
            <br /> 저는 구글, 카카오톡, 네이버 소셜 로그인을 가장 크게 담당했고,
            <br /> 최근 조회한 목록, 북마크한 내서재, 내가 생성한 동화 목록을 모아보고
            <br /> 프로필 수정이 가능한 마이페이지를 담당했습니다.   
            `,image:[{type:"image",src:Xz}],stack:{back:["Python","Django","DRF(Django REST Framework)","Oauth 2.0"],front:["DTL(Django Template Language)","JavaScript","CSS3"],database:["PostgreSQL"],ai:["ChatGPT API","DALL-E API","DeePL API","Perspective API"]}}},{id:2,title:"펫뭉",content:"애완동물 용품 쇼핑몰 RESTful API 서버",mainTab:"back",subTab:"fastapi",tags:["Python","FastAPI","MySQL"],detail:{github:"https://github.com/Pet-Mung/Back",blog:[],content:`
            프론트엔드 1명, 백엔드 1명으로 진행한 프로젝트로 저는 백엔드를 맡아 진행했습니다.
            <br/> FastAPI 를 활용하여 로그인, 유저/판매자 구분 회원가입, 상품 crud, 장바구니 및 결제처리를 구현한 사이트입니다.
            <br/> 배포도구로는 Render를 사용했고, DB 는 supabase 를 사용했습니다.
            <br/> Render 설정 조정하여 깃허브 머지 됐을 때 자동으로 빌드되게 설정했습니다.
            `,image:[{type:"image",src:$z}],stack:{back:["Python","FastAPI","Oauth 2.0"],database:["supabase","postgreSQL"],build:["Render"]}}},{id:3,title:"호진일보",content:"네이버 연애뉴스 모아보기 웹 사이트",mainTab:"front",subTab:"vue",tags:["Vue","Vite","JavaScript"],detail:{github:"https://github.com/HoJin-s/selenium_practice",blog:[],content:`
            매일 네이버 뉴스 연애 기사 랭킹 4위까지 가져오는 크롤링 프로젝트입니다. 
            <br/> 프론트엔드 1명, 백엔드 1명으로 진행한 프로젝트입니다.
            <br/> 이 프로젝트에서 저는 프론트엔드 개발을 맡았으며, 백엔드는 Django로 구현했습니다. 
            <br/> Django 템플릿을 Vue로 빌드한 페이지로 연동하여 프론트와 백엔드를 효과적으로 연결했습니다.
            `,video:Qz,image:[{type:"image",src:qz},{type:"image",src:Fz}],stack:{back:["Python","Django","DRF(Django REST Framework)","Selenium"],front:["Vue","Vite","JavaScript","CSS3"],database:["supabase","postgreSQL"],build:["Render"]}}},{id:4,title:"포트폴리오",content:"자기소개 및 프로젝트를 소개하는 사이트",mainTab:"front",subTab:"react",tags:["React","Vite","TypeScript"],detail:{github:"https://github.com/hjzheld/portfolio",blog:[],content:`
            리액트로 만든 프로젝트입니다.
            <br/> 혼자 진행한 프로젝트입니다.
            <br/> GitHub Actions 기반 CI/CD 파이프라인을 구축하여, 
            <br /> 머지 시 자동 빌드와 실서버 배포가 이루어지도록 배포 프로세스를 자동화했습니다.
            <br /> 자기 소개 및 그동안의 경력, 학력과 프로젝트 기록을 확인할 수 있습니다.
            <br /> 특히 경력에서 자세하게 어떤 업무를 맡았고, 어떤 성장으로 했는지 확인할 수 있습니다.
            `,image:[{type:"image",src:Kz}],stack:{front:["React","Vite","TypeScript"],build:["Github"]}}},{id:5,title:"팔순잔치 초대장",content:"모바일 환경에 최적화된 팔순잔치 초대장 웹사이트",mainTab:"front",subTab:"vue",tags:["Vue","Vite","JavaScript"],detail:{site:"https://hjzheld.github.io/birthday/",github:"https://github.com/hjzheld/birthday",blog:[],content:`
            팔순잔치를 위해 직접 기획하고 제작한 모바일 초대장 웹사이트입니다.
            <br/> 행사 소개, 초대글, 날짜 및 시간, 장소와 주차 정보를 한 페이지에서 확인할 수 있도록 구성했습니다.
            <br/> 배경음악을 적용하고 사용자가 직접 음악을 재생하거나 중지할 수 있도록 기능을 구현했습니다.
            <br/> Intersection Observer를 활용하여 스크롤 위치에 따라 콘텐츠가 자연스럽게 나타나는 애니메이션을 구현했습니다.
            <br/> 네이버 지도와 카카오 지도를 연동하여 행사 장소와 주차장까지 바로 길찾기가 가능하도록 구현했습니다.
            <br/> 모바일 환경을 중심으로 반응형 UI를 구성하여 다양한 화면 크기에서도 자연스럽게 표시되도록 작업했습니다.
            <br/> GitHub Actions 기반 CI/CD를 구성하여 main 브랜치에 Push하면 자동으로 빌드 후 GitHub Pages에 배포되도록 구현했습니다.
            `,image:[{type:"image",src:Zz}],stack:{front:["Vue","Vite","JavaScript","CSS3"],build:["GitHub Actions","GitHub Pages"]}}}],Xw=[{title:"전체",type:"all"},{title:"프론트엔드",subTitle:[{title:"Vue",type:"vue",active:!1},{title:"React",type:"react",active:!1}],type:"front"},{title:"백엔드",subTitle:[{title:"Django",type:"django",active:!1},{title:"FastAPI",type:"fastapi",active:!1}],type:"back"}];let s0=null;const Wz=()=>{const n=Ki(),t=gD(),r=()=>{s0=n.key},a=t==="POP"&&s0===n.key;return{markProjectDetailOpen:r,isReturningFromProjectDetail:a,clearProjectReturn:()=>{s0=null}}};yt.registerPlugin(Cr);const Jz=P.div`
  position: relative;

  width: 100%;

  overflow-x: hidden;
`,tk=P.div`
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
  `,ek=P.div`
    width: 100%;
  `,nk=P.div`
    position: fixed;

    inset: 0;

    z-index: 5000;

    overflow: hidden;

    pointer-events: none;
  `,Ey=P.div`
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    will-change:
      transform;
  `,ik=P(Ey)`
  z-index: 1;

  background:
    var(
      --project-transition-blue
    );
`,rk=P(Ey)`
  z-index: 2;

  background:
    var(
      --project-transition-lavender
    );
`,ak=P(Ey)`
  z-index: 3;

  background:
    var(
      --project-transition-mist
    );
`,sk=P.div`
    position: absolute;

    inset: 0;

    z-index: 4;

    pointer-events: none;
  `,ok=P.div`
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
  `,lk=P.div`
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
  `,uk=P.span`
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
  `,ck=P.strong`
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
  `,fk=P.div`
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
  `,dk=P.div`
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
  `,hk=P(ct.div)`
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
  `,pk=P.div`
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
  `,mk=P(ct.div)`
    display: flex;

    height: 100%;
  `,gk=P.div`
    display: flex;

    width: 100%;
    height: 100%;

    transform-origin:
      50%
      100%;

    will-change:
      transform,
      opacity;
  `,yk=()=>{const n=Xs(),t=k.useRef(null),{markProjectDetailOpen:r,isReturningFromProjectDetail:a,clearProjectReturn:s}=Wz(),u=k.useRef(a),c=k.useRef(!1),f=k.useRef(!1),[h,p]=k.useState("all"),[g,y]=k.useState(null);Cr(()=>{var R,j;const _=(R=t.current)==null?void 0:R.querySelector(".project-content"),S=(j=t.current)==null?void 0:j.querySelector(".project-transition");if(!_||!S)return;const C=window.matchMedia("(prefers-reduced-motion: reduce)").matches,A=u.current;if(A||C){A&&s(),yt.set(S,{display:"none"}),yt.set(_,{visibility:"visible",clipPath:"none",zIndex:"auto"}),yt.set([".project-page-intro",".project-category",".project-card"],{clearProps:"opacity,transform"}),c.current=!0;return}c.current=!1,yt.set(_,{visibility:"hidden",clipPath:"circle(0% at 50% 50%)",zIndex:"auto"}),yt.set(".project-page-intro",{opacity:0,y:22}),yt.set(".project-category",{opacity:0,y:16}),yt.set(".project-card",{opacity:0,y:58,scale:.94,rotation:D=>D%2===0?-3.2:3.2,transformOrigin:"50% 100%"}),yt.set(S,{display:"block",visibility:"visible",opacity:1}),yt.set(".transition-blue",{xPercent:0}),yt.set(".transition-lavender",{xPercent:0}),yt.set(".transition-mist",{xPercent:0}),yt.set(".transition-circle",{opacity:1,scale:1}),yt.set(".transition-content",{opacity:1,scale:1});const M=yt.timeline({defaults:{overwrite:"auto"}});return M.from(".transition-circle",{opacity:0,scale:.8,duration:.65,ease:"power3.out"}),M.from(".transition-label",{opacity:0,y:8,duration:.3,ease:"power2.out"},"-=0.38"),M.from(".transition-title",{opacity:0,y:20,scale:.96,duration:.55,ease:"power3.out"},"-=0.25"),M.from(".transition-line",{scaleX:0,duration:.38,ease:"power2.out"},"-=0.25"),M.to(".transition-mist",{xPercent:100,duration:.58,ease:"power3.inOut"},"+=0.08"),M.to(".transition-lavender",{xPercent:-100,duration:.62,ease:"power3.inOut"},"-=0.34"),M.to(".transition-blue",{xPercent:100,duration:.68,ease:"power4.inOut"},"-=0.35"),M.to(".transition-content",{opacity:0,scale:.95,duration:.3,ease:"power2.in"},"-=0.42"),M.to(".transition-circle",{opacity:0,scale:1.15,duration:.35,ease:"power2.in"},"<"),M.set(_,{visibility:"visible",zIndex:5001}),M.to(_,{clipPath:"circle(150% at 50% 50%)",duration:1.05,ease:"power4.inOut"}),M.set(S,{visibility:"hidden"}),M.set(_,{clipPath:"none",zIndex:"auto",visibility:"visible"}),M.to(".project-page-intro",{opacity:1,y:0,duration:.48,ease:"power3.out",clearProps:"transform,opacity"}),M.to(".project-category",{opacity:1,y:0,duration:.4,ease:"power2.out",clearProps:"transform,opacity"},"-=0.25"),M.to(".project-card",{opacity:1,y:0,scale:1,rotation:0,duration:.72,stagger:{each:.075,from:"start"},ease:"back.out(1.55)",clearProps:"transform,opacity"},"-=0.12"),M.call(()=>{c.current=!0}),()=>{M.kill()}},{scope:t}),Cr(()=>{if(!c.current||!f.current)return;f.current=!1;const _=yt.utils.toArray(".project-card");_.length&&(yt.killTweensOf(_),yt.fromTo(_,{opacity:0,y:32,scale:.965,rotation:S=>S%2===0?-2.2:2.2,transformOrigin:"50% 100%"},{opacity:1,y:0,scale:1,rotation:0,duration:.56,stagger:{each:.055,from:"start"},ease:"back.out(1.4)",clearProps:"transform,opacity",overwrite:"auto"}))},{scope:t,dependencies:[h,g]});const x=[...Iz].sort((_,S)=>S.id-_.id).filter(_=>h==="all"?!0:!(h!==_.mainTab||g&&g!==_.subTab)),v=Xw.find(_=>_.type===h);return w.jsxs(Jz,{ref:t,children:[w.jsxs(nk,{className:"project-transition",children:[w.jsx(ik,{className:"transition-blue"}),w.jsx(rk,{className:"transition-lavender"}),w.jsx(ak,{className:"transition-mist"}),w.jsx(sk,{children:w.jsx(ok,{className:"transition-circle"})}),w.jsxs(lk,{className:"transition-content",children:[w.jsx(uk,{className:"transition-label",children:"02 / PROJECT"}),w.jsx(ck,{className:"transition-title",children:"PROJECTS"}),w.jsx(fk,{className:"transition-line"})]})]}),w.jsx(tk,{className:"project-content",children:w.jsxs(Ty,{children:[w.jsx(ek,{className:"project-page-intro",children:w.jsx(G5,{page:"main",title:"포트폴리오"})}),w.jsx(dk,{className:"project-category",children:Xw.map(_=>w.jsx(ct.div,{whileHover:{scale:1.06,y:-3},whileTap:{scale:.95},transition:{type:"spring",stiffness:300,damping:18},children:w.jsx(Rs.CategoryBtn,{tab:_,active:h===_.type,onClick:()=>{f.current=!0,p(_.type),y(null)}})},_.type))}),w.jsx(Dd,{mode:"wait",children:(v==null?void 0:v.subTitle)&&w.jsx(hk,{initial:{opacity:0,scale:.95,y:-8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-8},transition:{duration:.25,ease:"easeOut"},children:w.jsx(Rs.SubCategory,{tab:v,active:!0,selectedSub:g??void 0,onClick:_=>{_&&(f.current=!0,y(_.type))}})},v.type)}),w.jsx(pk,{children:w.jsx(Dd,{mode:"popLayout",children:x.map(_=>w.jsx(mk,{layout:!0,initial:!1,exit:{opacity:0,scale:.94,y:18},transition:{layout:{type:"spring",stiffness:280,damping:26},opacity:{duration:.2},scale:{duration:.22}},whileHover:{y:-7,scale:1.015},whileTap:{scale:.98},children:w.jsx(gk,{className:"project-card",children:w.jsx(Gz,{project:_,onClick:()=>{localStorage.setItem("project",JSON.stringify(_)),r(),n(`/project/${_.id}`)}})})},_.id))})})]})})]})};yt.registerPlugin(kt,Cr);const vk=P.svg`
  position: fixed;
  inset: 0;
  z-index: 9998;

  width: 100%;
  height: 100%;

  pointer-events: none;

  .shape-overlays__path {
    will-change: d;
  }
`,xk=P.div`
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
`,bk=P.div`
  position: relative;

  width: 100%;

  padding: 1.5rem 0 7rem;

  overflow: hidden;


  @media (max-width: 768px) {
    padding: 0.75rem 0 4rem;
  }
`,_k=P.div`
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
`,wk=P.section`
  position: relative;

  width: 100%;

  margin-top: 1.5rem;
  padding: clamp(2rem, 5vw, 4.8rem);

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 34px;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.7),
      rgba(241, 248, 255, 0.58)
    );

  box-shadow:
    0 24px 60px rgba(99, 99, 99, 0.08),
    0 8px 24px rgba(118, 164, 218, 0.12);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  &::before {
    content: "";

    position: absolute;

    width: 320px;
    height: 320px;

    right: -110px;
    top: -130px;

    border-radius: 50%;

    background: rgba(118, 164, 218, 0.13);

    pointer-events: none;
  }

  &::after {
    content: "";

    position: absolute;

    width: 220px;
    height: 220px;

    left: -90px;
    bottom: -120px;

    border-radius: 50%;

    background: rgba(190, 188, 216, 0.16);

    pointer-events: none;
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
`,Sk=P.div`
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
`,Tk=P.h1`
  position: relative;
  z-index: 2;

  max-width: 820px;

  color: var(--gray-100);

  font-size: clamp(2.7rem, 5.6vw, 5rem);

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
`,Ek=P.p`
  position: relative;
  z-index: 2;

  max-width: 690px;

  margin-top: 1.6rem;

  color: var(--gray-400);

  font-size: 1rem;

  line-height: 1.9;

  word-break: keep-all;

  strong {
    color: var(--gray-100);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 0.94rem;
  }

  @media (max-width: 480px) {
    margin-top: 1.25rem;

    font-size: 0.88rem;
    line-height: 1.8;
  }
`,Ak=P.div`
  position: relative;
  z-index: 2;

  width: 100%;

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
`,rd=P.div`
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

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(118, 164, 218, 0.28);

    background: rgba(255, 255, 255, 0.68);
  }

  @media (max-width: 480px) {
    min-height: 96px;

    gap: 1rem;
  }
`,ad=P.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.64rem;
  letter-spacing: 0.11em;
`,sd=P.strong`
  color: var(--gray-100);

  font-size: 1.16rem;
  font-weight: 600;

  letter-spacing: -0.02em;
`,Ck=P.section`
  padding: 4.5rem 0 5.5rem;

  @media (max-width: 768px) {
    padding: 3.5rem 0 4rem;
  }
`,Mk=P.div`
  margin-bottom: 1.2rem;

  color: var(--gray-400);

  font-family: var(--font-en);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.13em;
`,Rk=P.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.6rem;
`,kn=P.span`
  padding: 0.58rem 0.9rem;

  border: 1px solid rgba(118, 164, 218, 0.12);
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.38);

  color: var(--gray-400);

  font-size: 0.78rem;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  transition:
    transform 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    color: var(--gray-100);

    border-color: rgba(118, 164, 218, 0.3);

    background: rgba(241, 248, 255, 0.75);
  }

  @media (max-width: 480px) {
    padding: 0.52rem 0.76rem;

    font-size: 0.72rem;
  }
`,Dk=P.div`
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
`,Ok=P.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 430px);

  align-items: end;

  gap: 3rem;

  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    gap: 1rem;

    margin-bottom: 2.5rem;
  }
`,jk=P.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`,zk=P.span`
  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.12em;
`,kk=P.h2`
  color: var(--gray-100);

  font-size: clamp(2rem, 4vw, 3rem);

  line-height: 1.2;

  letter-spacing: -0.045em;
`,Lk=P.p`
  max-width: 430px;

  color: var(--gray-400);

  font-size: 0.9rem;

  line-height: 1.8;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`,Nk=P.section`
  position: relative;
`,Pk=P.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 2.5rem;

  padding-left: 42px;

  @media (max-width: 768px) {
    gap: 1.7rem;

    padding-left: 24px;
  }

  @media (max-width: 480px) {
    padding-left: 14px;
  }
`,Vk=P.div`
  position: absolute;

  left: 11px;
  top: 0;
  bottom: 0;

  width: 1px;

  background: rgba(118, 164, 218, 0.15);

  @media (max-width: 768px) {
    left: 5px;
  }

  @media (max-width: 480px) {
    left: 2px;
  }
`,Bk=P.div`
  position: absolute;

  left: 11px;
  top: 0;

  width: 2px;
  height: 100%;

  border-radius: 999px;

  background: linear-gradient(
    180deg,
    var(--primary-color),
    var(--primary-light)
  );

  transform: scaleY(0);
  transform-origin: top;

  @media (max-width: 768px) {
    left: 4.5px;
  }

  @media (max-width: 480px) {
    left: 1.5px;
  }
`,Uk=P(ct.article)`
  position: relative;

  width: 100%;

  padding: 2.35rem;

  overflow: visible;

  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 26px;

  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.66),
    rgba(241, 248, 255, 0.46)
  );

  box-shadow:
    0 16px 40px rgba(99, 99, 99, 0.07),
    0 4px 14px rgba(118, 164, 218, 0.08);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  color: var(--gray-100);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &::before {
    content: "";

    position: absolute;

    left: -37px;
    top: 42px;

    width: 10px;
    height: 10px;

    border-radius: 50%;

    background: var(--main-background);

    border: 2px solid var(--primary-color);

    box-shadow: 0 0 0 5px rgba(118, 164, 218, 0.1);

    @media (max-width: 768px) {
      left: -23px;
    }

    @media (max-width: 480px) {
      left: -17px;

      width: 8px;
      height: 8px;
    }
  }

 
  &:hover {
    transform: translateY(-3px);

    border-color: rgba(118, 164, 218, 0.24);

    box-shadow:
      0 22px 48px rgba(99, 99, 99, 0.08),
      0 8px 24px rgba(118, 164, 218, 0.13);
  }

  @media (max-width: 768px) {
    padding: 1.8rem;

    border-radius: 22px;

    &::after {
      left: 1.8rem;
      right: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.35rem;

    border-radius: 18px;

    &::after {
      left: 1.35rem;
      right: 1.35rem;
    }
  }
`,Hk=P.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;

  align-items: start;

  gap: 2rem;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid rgba(118, 164, 218, 0.16);

  @media (max-width: 650px) {
    grid-template-columns: 1fr;

    gap: 1rem;
  }
`,Yk=P.div`
  display: flex;
  flex-direction: column;

  gap: 0.48rem;
`,Gk=P.span`
  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.64rem;
  font-weight: 500;
  letter-spacing: 0.12em;
`,Xk=P.h3`
  color: var(--gray-100);

  font-size: clamp(1.45rem, 3vw, 1.95rem);

  line-height: 1.3;

  letter-spacing: -0.035em;
`,qk=P.p`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.82rem;
  font-weight: 500;
`,Fk=P.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  gap: 0.6rem;

  flex-shrink: 0;

  @media (max-width: 650px) {
    align-items: flex-start;
  }
`,$k=P.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.8rem;
`,Kk=P.span`
  display: inline-flex;
  align-items: center;

  gap: 0.42rem;

  padding: 0.36rem 0.68rem;

  border: 1px solid rgba(118, 164, 218, 0.18);
  border-radius: 999px;

  background: rgba(118, 164, 218, 0.09);

  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.04em;

  &::before {
    content: "";

    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: var(--primary-color);

    box-shadow: 0 0 0 4px rgba(118, 164, 218, 0.1);
  }
`,Zk=P.div`
  display: flex;
  flex-direction: column;

  gap: 0.85rem;

  margin-top: 1.8rem;
`,Qk=P(ct.div)`
  position: relative;

  padding: 1.25rem 1.35rem;

  border: 1px solid rgba(118, 164, 218, 0.1);
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.4);

  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background 0.22s ease;

  &::before {
    content: "";

    position: absolute;

    left: 0;
    top: 1.2rem;
    bottom: 1.2rem;

    width: 2px;

    border-radius: 999px;

    background: rgba(118, 164, 218, 0.65);
  }

  &:hover {
    transform: translateX(3px);

    border-color: rgba(118, 164, 218, 0.2);

    background: rgba(241, 248, 255, 0.64);
  }

  @media (max-width: 480px) {
    padding: 1.05rem 1rem 1.05rem 1.15rem;
  }
`,Ik=P.div`
  margin-bottom: 0.68rem;

  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.1em;
`,Wk=P(ct.div)`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;
`,Jk=P(ct.p)`
  position: relative;

  padding-left: 0.95rem;

  color: var(--gray-100);

  font-size: 0.9rem;

  line-height: 1.75;

  word-break: keep-all;

  &::before {
    content: "";

    position: absolute;

    left: 0;
    top: 0.75rem;

    width: 3px;
    height: 3px;

    border-radius: 50%;

    background: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`,tL=P.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 1rem;

  margin-top: 1.7rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`,qw=P(ct.div)`
  padding: 1.3rem;

  border: 1px solid rgba(118, 164, 218, 0.11);
  border-radius: 16px;

  background: linear-gradient(
    145deg,
    rgba(241, 248, 255, 0.6),
    rgba(255, 255, 255, 0.34)
  );
`,Fw=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  padding-bottom: 0.8rem;

  border-bottom: 1px solid rgba(118, 164, 218, 0.13);
`,$w=P.h4`
  color: var(--gray-100);

  font-family: var(--font-en);

  font-size: 0.95rem;
  font-weight: 600;
`,Kw=P.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.62rem;
  letter-spacing: 0.04em;
`,Zw=P(ct.ul)`
  display: flex;
  flex-direction: column;

  gap: 0.58rem;

  margin-top: 0.9rem;
`,Qw=P(ct.li)`
  position: relative;

  padding-left: 1rem;

  color: var(--gray-100);

  font-size: 0.84rem;

  line-height: 1.65;

  word-break: keep-all;

  &::before {
    content: "";

    position: absolute;

    left: 0;
    top: 0.67rem;

    width: 4px;
    height: 4px;

    border-radius: 50%;

    background: rgba(118, 164, 218, 0.8);
  }
`,eL=P.div`
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
    max-width: 760px;

    color: var(--gray-400);

    font-size: 0.9rem;
    line-height: 1.8;

    word-break: keep-all;
  }

  @media (max-width: 480px) {
    margin-top: 3.5rem;

    padding: 1.8rem 1.35rem;

    border-radius: 20px;

    p {
      font-size: 0.84rem;
    }
  }
`,nL=[{id:1,title:"블록스퀘어랩스",role:"Frontend Developer · Fullstack · Team Lead",type:"development",date:"2024-01-15 ~ 재직중",content:[["백엔드 개발자로 입사한 후 프론트엔드 인력 부족으로 Vue.js를 학습해 프론트엔드 개발 업무를 함께 담당하게 되었습니다.","이후 다양한 가상자산 서비스의 사용자·관리자 페이지 개발을 경험하며 프론트엔드를 주 업무로 담당하고, 필요에 따라 백엔드 개발도 병행했습니다."],["첫 번째 프로젝트에서는 WebView 기반 가상자산 서비스의 알림 페이지 개발을 담당했습니다.","알림 활성화 및 수신 항목 등록 기능을 구현하고, Vue I18n을 활용한 다국어 환경을 적용했습니다.","또한 패키지 구매 권한에 따른 페이지 접근성 조정을 했습니다.","사용자별 페이지 접근 권한과 권한 유효기간을 기준으로 접근 가능 여부를 처리하고, 사용 중인 구독권 및 권한 상태가 화면에 표시되도록 구현했습니다.","권한 상태에 따라 사용할 수 있는 기능을 구분하고 모바일 앱과 웹 환경에서 동일한 정책으로 동작하도록 처리했습니다.","모바일 앱과 웹의 동작 차이를 대응하며 WebView 환경과 Vue.js 기반 서비스 개발 경험을 쌓았습니다."],["두 번째 프로젝트에서는 기존 서비스의 관리자 페이지 개발에 참여했습니다.","프로젝트 초기 환경을 구성하고 로그인 페이지와 API 오류 확인 페이지를 개발했으며, 신입 개발자들과 업무를 나누어 진행했습니다.","이때부터 개발 일정과 진행 상황을 함께 관리하며 프론트엔드 업무 조율 역할을 맡기 시작했습니다."],["세 번째 프로젝트에서는 가상자산 데이터를 시각화하는 차트 및 데이터 리스트 화면을 개발했습니다.","TradingView와 ZingChart를 활용해 총 8개의 차트와 2개의 데이터 리스트를 구현했습니다.","PC와 모바일 환경을 모두 고려한 반응형 UI를 적용하며 데이터 시각화와 차트 라이브러리 활용 경험을 쌓았습니다."],["네 번째 프로젝트에서는 외주 업체에서 개발하던 대규모 Nuxt 프로젝트를 인수하여 기존 코드 분석, 리팩토링 및 신규 기능 개발을 진행했습니다.","Nuxt의 서버·클라이언트 실행 환경과 파일 기반 라우팅 구조를 이해하고, 기존 서비스에 필요한 기능을 안정적으로 추가할 수 있도록 구조를 개선했습니다.","Access Token 만료 시 Refresh Token 을 이용해 토큰을 재발급한 뒤 기존 API 요청을 다시 처리하는 인증 흐름을 적용했습니다.","서비스의 패키지 및 구독 페이지를 개발하고 결제 페이지와 연동했습니다.","사용자 조건에 따라 적용되는 할인 정책을 화면에 표시하고 실제 결제 금액에 반영했으며, 결제 API 연동부터 결제 완료 이후의 상태 처리까지 구현했습니다.","또한 사용자의 구독 패키지, 권한 유효기간 및 권한 상태에 따라 페이지 접근 여부를 판단하고, 접근이 제한된 경우 안내 모달을 노출하는 등 서비스 전반의 권한 및 접근 제어 로직을 개발했습니다.","Docker와 Nginx 기반 배포 환경을 활용해 직접 빌드하고 버전을 관리하며 운영 환경에 대한 이해도를 높였습니다."],["다섯 번째 프로젝트에서는 앞선 Nuxt 서비스의 관리자 페이지 유지보수 및 신규 기능 개발을 담당했습니다.","회원 추천·조직 구조를 관리하는 조직도 기능을 개발하고, 상위 회원 변경 시 하위 회원이 함께 이동하도록 관련 로직을 적용했습니다.","대규모 조직도에서도 원하는 회원을 빠르게 확인할 수 있도록 검색, 선택 노드 강조 및 자동 확대 기능 등을 추가해 관리자 사용성을 개선했습니다."],["여섯 번째 프로젝트에서는 사용자 페이지와 관리자 페이지를 함께 개발하는 신규 서비스의 프론트엔드 초기 구조를 설계했습니다.","라우터와 로그인 상태에 따른 페이지 접근 구조를 구성하고, 버튼·모달 등 반복적으로 사용하는 UI를 공통 컴포넌트로 분리했습니다.","팀원들과 개발 기준과 역할을 정리하며 프로젝트 전반의 코드 재사용성과 유지보수성을 높이는 방향으로 개발했습니다."],["일곱 번째 프로젝트에서는 기존 네번째 서비스를 기반으로 새로운 서비스를 구축하는 복제·컨버팅 작업을 진행했습니다.","기존 Nuxt 프로젝트의 구조와 기능을 분석해 새로운 서비스 정책에 맞게 화면과 로직을 수정하고 신규 기능을 추가했습니다.","기존 서비스의 패키지·결제·권한 시스템을 새로운 서비스 정책에 맞게 변환했습니다.","패키지 페이지와 결제 흐름, 사용자 조건에 따른 할인 정책, 결제 API 처리 및 페이지별 접근 권한 로직을 서비스 정책에 맞게 수정했습니다.","공통으로 사용할 수 있는 기능은 기존 코드를 재사용하면서 권한·결제·UI 등 서비스별로 달라지는 영역을 분리하여 이후 두 서비스를 각각 유지보수할 수 있도록 구성했습니다.","기존 코드를 최대한 재사용하면서 서비스별 기능과 UI 차이를 분리하여 이후 유지보수가 가능하도록 구성했습니다."],["여덟 번째 프로젝트에서는 첫 번째로 개발했던 서비스를 전반적으로 리뉴얼했습니다.","운영 과정에서 확인된 중복 코드와 유지보수가 어려운 구조를 팀원들과 검토하여 리팩토링했습니다.","기존 공통 컴포넌트 구조를 한 단계 더 세분화하고 재사용 범위를 넓혀 유지보수성과 개발 효율을 개선했습니다."],["아홉 번째 프로젝트에서는 자격증 교육 과정의 수강신청 및 결제 서비스를 개발하고 프론트엔드 초기 구조를 설계했습니다.","로그인·회원가입, 수강신청, 결제, 마이페이지 등 서비스 전반의 화면과 API 연동 구조를 구성했습니다.","기존 프로젝트에서 부족했던 코드 작성 기준을 개선하기 위해 코드 컨벤션을 도입하고, Oxfmt 기반 포맷팅 환경을 적용해 코드 품질과 개발 생산성을 높였습니다.","로그인 상태에 따른 라우터 접근 제어를 구성하고 Access Token 만료 시 Refresh Token을 이용해 토큰을 재발급한 뒤 기존 API 요청을 다시 처리하는 인증 흐름을 적용했습니다."],["열 번째 프로젝트에서는 네 번째 프로젝트에서 인수·개발했던 Nuxt 기반 가상자산 서비스를 전면 리뉴얼했습니다.","기존 서비스의 권한 및 결제 시스템을 다시 검토하고 변경된 서비스 정책에 맞춰 전체 로직을 수정했습니다.","사용자 구독 상태와 권한 기한을 기준으로 처리되던 접근 제어 구조를 재정비하고, 패키지 및 결제 시스템의 데이터 흐름과 상태 관리 구조를 변경했습니다.","기존 프로젝트에서 복잡하게 연결되어 있던 권한·결제 관련 로직과 컴포넌트 구조를 리팩토링하여 기능별 책임을 분리하고 이후 정책 변경과 유지보수에 대응하기 쉬운 구조로 개선했습니다."],["프론트엔드 업무와 함께 서비스 운영에 필요한 일부 백엔드 기능도 개발했습니다.","외부 업체에 전달할 DB 데이터를 조회·가공하여 필요한 정보만 구조화하고 암호화해 전송하는 기능을 구현했습니다.","Crontab을 이용해 정해진 시간마다 데이터 전송 작업이 자동 실행되도록 구성하고 실행 결과를 로그로 관리했습니다.","또한 외부 API에서 전달받은 암호화된 사용자 정보를 서버에서 복호화한 뒤 프론트엔드에서 사용할 수 있는 형태로 가공하여 전달하는 API 연동 로직을 개발했습니다."]],front:["Nuxt.js·Vue.js 기반 사용자 및 관리자 페이지 개발","프로젝트 초기 구조 설계 및 로그인·라우터·공통 컴포넌트 구조화","사용자 구독 상태·권한 유효기간에 따른 페이지 및 기능 접근 제어 구현","패키지·구독 페이지 개발 및 결제 페이지·결제 API 연동","사용자 조건에 따른 할인 정책 표기·적용 및 결제 완료 후 상태 처리","권한 상태에 따른 접근 제한·안내 모달 및 서비스별 권한 로직 구현","TradingView·ZingChart를 활용한 가상자산 데이터 시각화","REST API 및 WebSocket 기반 실시간 데이터 연동","PC·모바일·Android WebView 환경을 고려한 반응형 UI 개발","Vue I18n 기반 다국어 지원 및 서비스별 테마 적용","기존·외주 프로젝트 코드 분석, 리팩토링 및 신규 기능 개발","기존 서비스 컨버팅 및 전면 리뉴얼 과정에서 권한·결제 시스템 구조 개선","Docker·Nginx 기반 빌드 및 배포 버전 관리","프로젝트 팀 리더로 업무 분배·일정 관리·지연 이슈 조율 및 자체 QA 진행"],back:["DB 데이터를 조회·가공하여 외부 업체에 필요한 데이터 구조로 변환하는 기능 개발","민감한 사용자 정보를 암호화하여 외부 시스템으로 전달하는 데이터 연동 로직 구현","Crontab을 활용한 정기 데이터 전송 작업 자동화 및 실행 로그 관리","외부 API를 통해 수신한 암호화 데이터를 복호화하고 프론트엔드용 데이터로 가공하는 서버 로직 개발","프론트엔드 API 연동 과정에서 필요한 백엔드 기능 수정 및 오류 분석"]},{id:2,title:"씨인스원보험컨설팅 주식회사",role:"Insurance Administration",content:[["해지 환급 업무"]],date:"2022.01 ~ 2023.04"},{id:3,title:"내일배움캠프",role:"Web Development Bootcamp",content:[["내일배움캠프에 참여하여 Python과 Django를 중심으로 웹 개발을 학습했습니다.","개인 및 팀 프로젝트를 진행하며 Figma를 활용한 화면 설계부터 ERD 및 API 설계, 백엔드·프론트엔드 개발까지 웹 서비스 개발 과정을 경험했습니다.","최종 프로젝트로 AI 기반 동화 생성 서비스인 야미야기를 개발했으며, 현업 개발자가 참여한 프로젝트 평가에서 1위를 기록했습니다.","프로젝트에서는 소셜 로그인 기능을 중심으로 담당했으며, 당시 사용하던 라이브러리에서 발생한 Google OAuth 오류를 직접 분석하여 별도 로직으로 구현했습니다."]],date:"2023.08 ~ 2023.12"}],iL={hidden:{opacity:0,y:50,scale:.97},visible:{opacity:1,y:0,scale:1,transition:{duration:.55,ease:"easeOut"}}},rL={hidden:{opacity:0,y:25},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},aL={hidden:{},visible:{transition:{staggerChildren:.055}}},sL={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}}},Iw={hidden:{},visible:{transition:{staggerChildren:.04}}},Ww={hidden:{opacity:0,x:-12},visible:{opacity:1,x:0,transition:{duration:.25,ease:"easeOut"}}},Jw=typeof navigator<"u"&&/KAKAOTALK/i.test(navigator.userAgent),oL=()=>{const n=k.useRef(null),t=k.useRef(null),r=k.useRef([]),a=k.useRef(null);return Cr(()=>{const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,u=t.current,c=r.current.filter(M=>!!M);if(s){u&&yt.set(u,{autoAlpha:0}),a.current&&yt.set(a.current,{autoAlpha:0});return}const f=document.body.style.overflow;document.body.style.overflow="hidden";const h=10,p=c.length,g=.18,y=.12,x=.82,v=Array.from({length:p},()=>Array.from({length:h},()=>({value:100}))),_=()=>{c.forEach((M,R)=>{const j=v[R];let D=`M 0 ${j[0].value} C`;for(let N=0;N<h-1;N+=1){const z=(N+1)/(h-1)*100,B=z-100/(h-1)/2;D+=` ${B} ${j[N].value}`,D+=` ${B} ${j[N+1].value}`,D+=` ${z} ${j[N+1].value}`}D+=" V 0 H 0",M.setAttribute("d",D)})};_(),u&&yt.set(u,{autoAlpha:1}),a.current&&yt.set(a.current,{autoAlpha:1,y:0});const S=Array.from({length:h},()=>Math.random()*g),C=yt.timeline({defaults:{ease:"power2.inOut"},onUpdate:_,onComplete:()=>{document.body.style.overflow=f,u&&yt.set(u,{autoAlpha:0}),kt.refresh()}});return a.current&&C.to(a.current,{opacity:0,y:-8,duration:.28,ease:"power2.out"},.18),v.forEach((M,R)=>{const j=y*(p-R-1);M.forEach((D,N)=>{C.to(D,{value:0,duration:x,ease:"power2.inOut"},.28+S[N]+j)})}),yt.timeline({delay:.82,defaults:{ease:"power3.out"}}).from(".career-badge",{opacity:0,y:12,duration:.45}).from(".career-title",{opacity:0,y:38,duration:.75},"-=0.12").from(".career-description",{opacity:0,y:18,duration:.55},"-=0.38").from(".summary-item",{opacity:0,y:18,scale:.98,stagger:.07,duration:.45},"-=0.28"),yt.to(".timeline-progress",{scaleY:1,ease:"none",scrollTrigger:{trigger:".career-timeline",start:"top 72%",end:"bottom 78%",scrub:1}}),yt.from(".section-line",{scaleX:0,duration:.9,ease:"power2.out",scrollTrigger:{trigger:".section-line",start:"top 92%"}}),()=>{document.body.style.overflow=f}},{scope:n}),w.jsxs(bk,{ref:n,children:[w.jsxs(xk,{ref:a,"aria-hidden":"true",children:[w.jsx("span",{}),"CAREER / EXPERIENCE"]}),w.jsxs(vk,{ref:t,className:"shape-overlays",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:[w.jsxs("defs",{children:[w.jsxs("linearGradient",{id:"careerOverlayBack",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[w.jsx("stop",{offset:"0%",stopColor:"#eef5fb"}),w.jsx("stop",{offset:"100%",stopColor:"#bebcd8"})]}),w.jsxs("linearGradient",{id:"careerOverlayFront",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[w.jsx("stop",{offset:"0%",stopColor:"#76a4da"}),w.jsx("stop",{offset:"100%",stopColor:"#d8e0e6"})]})]}),w.jsx("path",{ref:s=>{r.current[0]=s},className:"shape-overlays__path",fill:"url(#careerOverlayBack)"}),w.jsx("path",{ref:s=>{r.current[1]=s},className:"shape-overlays__path",fill:"url(#careerOverlayFront)"})]}),w.jsxs(_k,{children:[w.jsxs(wk,{children:[w.jsx(Sk,{className:"career-badge",children:"Career & Experience"}),w.jsxs(Tk,{className:"career-title",children:["서비스와 함께",w.jsx("br",{}),w.jsx("strong",{children:"성장해 온 경험"})]}),w.jsxs(Ek,{className:"career-description",children:["백엔드 개발자로 시작해 프론트엔드 업무까지 영역을 확장했습니다. 현재는 프론트엔드를 중심으로 서비스 구조와 API, 운영 환경까지 함께 이해하며 개발하고 있습니다.",w.jsxs("strong",{children:[" ","구현뿐 아니라 일정 조율, QA와 팀 협업까지"]}),"경험했습니다."]}),w.jsxs(Ak,{children:[w.jsxs(rd,{className:"summary-item",children:[w.jsx(ad,{children:"EXPERIENCE"}),w.jsx(sd,{children:"2+ Years"})]}),w.jsxs(rd,{className:"summary-item",children:[w.jsx(ad,{children:"MAIN ROLE"}),w.jsx(sd,{children:"Frontend"})]}),w.jsxs(rd,{className:"summary-item",children:[w.jsx(ad,{children:"EXPERIENCE"}),w.jsx(sd,{children:"Fullstack"})]}),w.jsxs(rd,{className:"summary-item",children:[w.jsx(ad,{children:"TEAM"}),w.jsx(sd,{children:"Lead · QA"})]})]})]}),w.jsxs(Ck,{children:[w.jsx(Mk,{children:"KEY EXPERIENCE"}),w.jsxs(Rk,{children:[w.jsx(kn,{children:"Vue.js"}),w.jsx(kn,{children:"Nuxt.js"}),w.jsx(kn,{children:"React"}),w.jsx(kn,{children:"TypeScript"}),w.jsx(kn,{children:"REST API"}),w.jsx(kn,{children:"WebSocket"}),w.jsx(kn,{children:"TradingView"}),w.jsx(kn,{children:"ZingChart"}),w.jsx(kn,{children:"Android WebView"}),w.jsx(kn,{children:"결제 / 구독"}),w.jsx(kn,{children:"권한 관리"}),w.jsx(kn,{children:"Docker"}),w.jsx(kn,{children:"Nginx"}),w.jsx(kn,{children:"Team Lead"}),w.jsx(kn,{children:"QA"})]})]}),w.jsxs(Nk,{children:[w.jsx(Dk,{className:"section-line"}),w.jsxs(Ok,{children:[w.jsxs(jk,{children:[w.jsx(zk,{children:"01 / CAREER"}),w.jsx(kk,{children:"경력 및 경험"})]}),w.jsx(Lk,{children:"회사와 프로젝트에서 담당했던 역할을 단순 기술 목록이 아니라 실제로 어떤 문제를 다뤘는지 중심으로 정리했습니다."})]}),w.jsxs(Pk,{className:"career-timeline",children:[w.jsx(Vk,{}),w.jsx(Bk,{className:"timeline-progress"}),nL.map((s,u)=>{const c=s.date.includes("재직중");return w.jsxs(Uk,{className:"career-card",variants:iL,initial:"hidden",animate:Jw?"visible":void 0,whileInView:Jw?void 0:"visible",viewport:{once:!0,amount:.08},children:[w.jsxs(Hk,{children:[w.jsxs(Yk,{children:[w.jsxs(Gk,{children:["EXPERIENCE_",String(u+1).padStart(2,"0")]}),w.jsx(Xk,{children:s.title}),w.jsx(qk,{children:s.role})]}),w.jsxs(Fk,{children:[w.jsx($k,{children:s.date}),c&&w.jsx(Kk,{children:"CURRENT"})]})]}),s.content&&w.jsx(Zk,{children:s.content.map((f,h)=>w.jsxs(Qk,{variants:rL,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.15},children:[w.jsx(Ik,{children:s.id===1?h===0?"ROLE / START":h===s.content.length-1?"BACKEND EXPERIENCE":`PROJECT ${String(h).padStart(2,"0")}`:`EXPERIENCE ${String(h+1).padStart(2,"0")}`}),w.jsx(Wk,{as:ct.div,variants:aL,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:f.map((p,g)=>w.jsx(Jk,{variants:sL,children:p},`${h}-${g}`))})]},h))}),(s.front||s.back)&&w.jsxs(tL,{children:[s.front&&w.jsxs(qw,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.1},transition:{duration:.45},children:[w.jsxs(Fw,{children:[w.jsx($w,{children:"Front-end"}),w.jsxs(Kw,{children:[s.front.length," ","ITEMS"]})]}),w.jsx(Zw,{variants:Iw,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},children:s.front.map((f,h)=>w.jsx(Qw,{variants:Ww,whileHover:{x:5},children:f},h))})]}),s.back&&w.jsxs(qw,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.1},transition:{duration:.45,delay:.08},children:[w.jsxs(Fw,{children:[w.jsx($w,{children:"Back-end"}),w.jsxs(Kw,{children:[s.back.length," ","ITEMS"]})]}),w.jsx(Zw,{variants:Iw,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},children:s.back.map((f,h)=>w.jsx(Qw,{variants:Ww,whileHover:{x:5},children:f},h))})]})]})]},s.id)})]})]}),w.jsxs(eL,{children:[w.jsx("h2",{children:"개발 영역을 하나로 한정하지 않습니다."}),w.jsx("p",{children:"프론트엔드를 주 업무로 하고 있지만, 화면 뒤에서 데이터가 어떻게 전달되고 서비스 정책과 사용자 상태가 어떻게 연결되는지까지 이해하며 개발하는 것을 중요하게 생각합니다. 새로운 프로젝트에서도 필요한 영역을 빠르게 학습하고 실제 결과물로 연결하는 개발자가 되고자 합니다."})]})]})]})},lL="/portfolio/assets/404-C6ZA4VqX.png",uL=P(ct.div)`
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
`,t2=()=>{const n=Xs();return w.jsxs(uL,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.4},children:[w.jsx(ct.img,{src:lL,alt:"404 Icon",loading:"lazy",initial:{y:20,opacity:0},animate:{y:[0,-12,0],opacity:1},transition:{opacity:{duration:.4},y:{duration:2.5,repeat:1/0,ease:"easeInOut"}},whileHover:{rotate:[-2,2,-2,0],scale:1.04}}),w.jsx(ct.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},whileHover:{scale:1.06},whileTap:{scale:.94},children:w.jsx(Rs.GradientBtn,{onClick:()=>n("/"),children:"메인 페이지 ▶"})})]})},cL=P.div`
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
`,fL=()=>{const[n,t]=k.useState(!1),[r,a]=k.useState({x:0,y:0}),[s,u]=k.useState({x:0,y:0}),[c,f]=k.useState(!1);return k.useEffect(()=>{const h=window.matchMedia("(hover: hover) and (pointer: fine)"),p=()=>{t(h.matches)};return p(),h.addEventListener("change",p),()=>{h.removeEventListener("change",p)}},[]),k.useEffect(()=>{if(!n)return;const h=p=>{a({x:p.clientX,y:p.clientY})};return window.addEventListener("mousemove",h),()=>{window.removeEventListener("mousemove",h)}},[n]),k.useEffect(()=>{if(!n)return;let h;const p=()=>{u(g=>({x:g.x+(r.x-g.x)*.15,y:g.y+(r.y-g.y)*.15})),h=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(h)}},[r,n]),k.useEffect(()=>{if(!n)return;const h=p=>{p.target.closest("a, button, [role='button'], input, textarea, select")?f(!0):f(!1)};return document.addEventListener("mouseover",h),()=>{document.removeEventListener("mouseover",h)}},[n]),n?w.jsx(cL,{$hover:c,style:{left:s.x,top:s.y}}):null},dL=P.div`
  position: fixed;
  inset: 0;

  pointer-events: none;
  z-index: 0;

  background: radial-gradient(
    500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(118, 164, 218, 0.12),
    transparent 65%
  );
`,hL=()=>{const[n,t]=k.useState(!1);return k.useEffect(()=>{const r=window.matchMedia("(hover: hover) and (pointer: fine)"),a=()=>{t(r.matches)};return a(),r.addEventListener("change",a),()=>{r.removeEventListener("change",a)}},[]),k.useEffect(()=>{if(!n)return;const r=a=>{document.documentElement.style.setProperty("--mouse-x",`${a.clientX}px`),document.documentElement.style.setProperty("--mouse-y",`${a.clientY}px`)};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)}},[n]),n?w.jsx(dL,{}):null},pL=P.div`
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
`,Gu=P.button`
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
`,o0=P.span`
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

  ${Gu}:hover &,
  ${Gu}:focus-visible & {
    opacity: 1;

    transform:
      translateX(-50%)
      translateY(0);
  }

  @media (max-width: 768px) {
    display: none;
  }
`,l0=P.span`
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
`,mL=P.button`
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
`,gL=()=>w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("path",{d:"M3 11.5 12 4l9 7.5"}),w.jsx("path",{d:"M5.5 10v10h13V10"}),w.jsx("path",{d:"M9.5 20v-6h5v6"})]}),yL=()=>w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("rect",{x:"4",y:"7",width:"16",height:"13",rx:"2"}),w.jsx("path",{d:"M9 7V5.5C9 4.7 9.7 4 10.5 4h3C14.3 4 15 4.7 15 5.5V7"}),w.jsx("path",{d:"M4 12h16"}),w.jsx("path",{d:"M10 12v2h4v-2"})]}),vL=()=>w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("rect",{x:"3.5",y:"4",width:"17",height:"16",rx:"2"}),w.jsx("path",{d:"M3.5 8.5h17"}),w.jsx("path",{d:"m9.5 12-2 2 2 2"}),w.jsx("path",{d:"m14.5 12 2 2-2 2"})]}),xL=()=>w.jsxs("svg",{className:"fab-plus",viewBox:"0 0 24 24",children:[w.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),w.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),bL=()=>{const n=Xs(),t=Ki(),r=k.useRef(null),a=k.useRef(null),[s,u]=k.useState(!1),c=k.useRef(!1),f=t.pathname,h=f==="/",p=f.startsWith("/personal"),g=f.startsWith("/project");Cr(()=>{var A;const v=yt.utils.toArray(".radial-item"),_=(A=r.current)==null?void 0:A.querySelector(".fab-plus"),S=()=>{a.current&&a.current.kill();const M=window.matchMedia("(max-width: 768px)").matches,R=window.matchMedia("(prefers-reduced-motion: reduce)").matches,j=M?92:120,D=180,z=v.length>1?(270-D)/(v.length-1):0;yt.set(v,{x:0,y:0,scale:0,opacity:0,pointerEvents:"none"}),_&&yt.set(_,{rotation:0});const B=yt.timeline({paused:!0,defaults:{overwrite:"auto"},onReverseComplete:()=>{yt.set(v,{pointerEvents:"none"})}});v.forEach((X,Z)=>{const ot=(D+z*Z)*(Math.PI/180),tt=Math.cos(ot)*j,wt=Math.sin(ot)*j;B.to(X,{x:tt,y:wt,scale:1,opacity:1,pointerEvents:"auto",duration:R?0:.62,ease:R?"none":"elastic.out(1, 0.5)"},R?0:Z*.055)}),_&&B.to(_,{rotation:135,duration:R?0:.35,ease:R?"none":"back.out(1.7)",overwrite:"auto"},0),a.current=B,c.current?B.progress(1):B.progress(0)};S(),yt.from(r.current,{opacity:0,y:18,scale:.9,duration:.65,delay:.7,ease:"back.out(1.5)",overwrite:"auto"}),window.addEventListener("resize",S);const C=M=>{var R;M.key==="Escape"&&c.current&&(c.current=!1,u(!1),(R=a.current)==null||R.reverse())};return window.addEventListener("keydown",C),()=>{var M;window.removeEventListener("resize",S),window.removeEventListener("keydown",C),(M=a.current)==null||M.kill()}},{scope:r});const y=()=>{const v=a.current;v&&(c.current?(c.current=!1,u(!1),v.reverse()):(c.current=!0,u(!0),v.play()))},x=v=>{var _;n(v),c.current&&(c.current=!1,u(!1),(_=a.current)==null||_.reverse())};return w.jsxs(pL,{ref:r,"aria-label":"빠른 페이지 이동",children:[w.jsxs(Gu,{type:"button",className:"radial-item",$active:h,onClick:()=>x("/"),"aria-label":"홈으로 이동",tabIndex:s?0:-1,children:[h&&w.jsx(l0,{}),w.jsx(gL,{}),w.jsx(o0,{children:"홈"})]}),w.jsxs(Gu,{type:"button",className:"radial-item",$active:p,onClick:()=>x("/personal"),"aria-label":"경력 페이지로 이동",tabIndex:s?0:-1,children:[p&&w.jsx(l0,{}),w.jsx(yL,{}),w.jsx(o0,{children:"경력"})]}),w.jsxs(Gu,{type:"button",className:"radial-item",$active:g,onClick:()=>x("/project"),"aria-label":"프로젝트 페이지로 이동",tabIndex:s?0:-1,children:[g&&w.jsx(l0,{}),w.jsx(vL,{}),w.jsx(o0,{children:"프로젝트"})]}),w.jsx(mL,{type:"button",onClick:y,"aria-label":s?"빠른 메뉴 닫기":"빠른 메뉴 열기","aria-expanded":s,children:w.jsx(xL,{})})]})},_L="G-XYQ0NRD2FC";function wL(){const n=Ki();return k.useEffect(()=>{if(!window.gtag)return;const t=n.pathname+n.search+n.hash;window.gtag("config",_L,{page_path:t,page_location:window.location.href,page_title:document.title})},[n]),null}function SL(){const{pathname:n}=Ki();return k.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo({top:0,left:0,behavior:"smooth"})},[n]),null}function TL(){return w.jsxs(w.Fragment,{children:[w.jsx(fL,{}),w.jsx(hL,{}),w.jsx(SL,{}),w.jsx(wL,{}),w.jsx(x6,{}),w.jsx(bL,{}),w.jsx("main",{children:w.jsxs(jD,{children:[w.jsx(bs,{path:"/",element:w.jsx(xz,{})}),w.jsx(bs,{path:"/project",element:w.jsx(yk,{})}),w.jsx(bs,{path:"/project/:id",element:w.jsx(Uz,{})}),w.jsx(bs,{path:"/personal",element:w.jsx(oL,{})}),w.jsx(bs,{path:"/404",element:w.jsx(t2,{})}),w.jsx(bs,{path:"*",element:w.jsx(t2,{})})]})}),w.jsx(E6,{})]})}function EL(){return w.jsx(e6,{basename:"/portfolio/",children:w.jsx(TL,{})})}oC.createRoot(document.getElementById("root")).render(w.jsx(Zo.StrictMode,{children:w.jsx(EL,{})}));
