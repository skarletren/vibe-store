(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function w_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fm={exports:{}},Ja={},jm={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),E_=Symbol.for("react.portal"),T_=Symbol.for("react.fragment"),I_=Symbol.for("react.strict_mode"),x_=Symbol.for("react.profiler"),S_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),k_=Symbol.for("react.forward_ref"),C_=Symbol.for("react.suspense"),R_=Symbol.for("react.memo"),P_=Symbol.for("react.lazy"),Tf=Symbol.iterator;function N_(t){return t===null||typeof t!="object"?null:(t=Tf&&t[Tf]||t["@@iterator"],typeof t=="function"?t:null)}var zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Um=Object.assign,Bm={};function Pi(t,e,n){this.props=t,this.context=e,this.refs=Bm,this.updater=n||zm}Pi.prototype.isReactComponent={};Pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $m(){}$m.prototype=Pi.prototype;function Wc(t,e,n){this.props=t,this.context=e,this.refs=Bm,this.updater=n||zm}var Kc=Wc.prototype=new $m;Kc.constructor=Wc;Um(Kc,Pi.prototype);Kc.isPureReactComponent=!0;var If=Array.isArray,Hm=Object.prototype.hasOwnProperty,Qc={current:null},qm={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Hm.call(e,r)&&!qm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:eo,type:t,key:s,ref:a,props:i,_owner:Qc.current}}function V_(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gc(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function D_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xf=/\/+/g;function Gl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D_(""+t.key):e.toString(36)}function Yo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case eo:case E_:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Gl(a,0):r,If(i)?(n="",t!=null&&(n=t.replace(xf,"$&/")+"/"),Yo(i,e,n,"",function(h){return h})):i!=null&&(Gc(i)&&(i=V_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(xf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",If(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Gl(s,l);a+=Yo(s,e,n,u,i)}else if(u=N_(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Gl(s,l++),a+=Yo(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ro(t,e,n){if(t==null)return t;var r=[],i=0;return Yo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function b_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Xo={transition:null},O_={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:Qc};function Km(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ro,forEach:function(t,e,n){Ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ro(t,function(){e++}),e},toArray:function(t){return Ro(t,function(e){return e})||[]},only:function(t){if(!Gc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Pi;ee.Fragment=T_;ee.Profiler=x_;ee.PureComponent=Wc;ee.StrictMode=I_;ee.Suspense=C_;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_;ee.act=Km;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Um({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Hm.call(e,u)&&!qm.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:eo,type:t.type,key:i,ref:s,props:r,_owner:a}};ee.createContext=function(t){return t={$$typeof:A_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:S_,_context:t},t.Consumer=t};ee.createElement=Wm;ee.createFactory=function(t){var e=Wm.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:k_,render:t}};ee.isValidElement=Gc;ee.lazy=function(t){return{$$typeof:P_,_payload:{_status:-1,_result:t},_init:b_}};ee.memo=function(t,e){return{$$typeof:R_,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Xo.transition;Xo.transition={};try{t()}finally{Xo.transition=e}};ee.unstable_act=Km;ee.useCallback=function(t,e){return lt.current.useCallback(t,e)};ee.useContext=function(t){return lt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return lt.current.useEffect(t,e)};ee.useId=function(){return lt.current.useId()};ee.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return lt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};ee.useRef=function(t){return lt.current.useRef(t)};ee.useState=function(t){return lt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return lt.current.useTransition()};ee.version="18.3.1";jm.exports=ee;var he=jm.exports;const M_=w_(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_=he,F_=Symbol.for("react.element"),j_=Symbol.for("react.fragment"),z_=Object.prototype.hasOwnProperty,U_=L_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B_={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)z_.call(e,r)&&!B_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:F_,type:t,key:s,ref:a,props:i,_owner:U_.current}}Ja.Fragment=j_;Ja.jsx=Qm;Ja.jsxs=Qm;Fm.exports=Ja;var I=Fm.exports,Vu={},Gm={exports:{}},At={},Ym={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var J=B.length;B.push(K);e:for(;0<J;){var fe=J-1>>>1,ae=B[fe];if(0<i(ae,K))B[fe]=K,B[J]=ae,J=fe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],J=B.pop();if(J!==K){B[0]=J;e:for(var fe=0,ae=B.length,_e=ae>>>1;fe<_e;){var Mt=2*(fe+1)-1,Ct=B[Mt],je=Mt+1,Rt=B[je];if(0>i(Ct,J))je<ae&&0>i(Rt,Ct)?(B[fe]=Rt,B[je]=J,fe=je):(B[fe]=Ct,B[Mt]=J,fe=Mt);else if(je<ae&&0>i(Rt,J))B[fe]=Rt,B[je]=J,fe=je;else break e}}return K}function i(B,K){var J=B.sortIndex-K.sortIndex;return J!==0?J:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,g=null,y=3,A=!1,P=!1,V=!1,b=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=B)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function D(B){if(V=!1,S(B),!P)if(n(u)!==null)P=!0,ir(z);else{var K=n(h);K!==null&&it(D,K.startTime-B)}}function z(B,K){P=!1,V&&(V=!1,x(m),m=-1),A=!0;var J=y;try{for(S(K),g=n(u);g!==null&&(!(g.expirationTime>K)||B&&!k());){var fe=g.callback;if(typeof fe=="function"){g.callback=null,y=g.priorityLevel;var ae=fe(g.expirationTime<=K);K=t.unstable_now(),typeof ae=="function"?g.callback=ae:g===n(u)&&r(u),S(K)}else r(u);g=n(u)}if(g!==null)var _e=!0;else{var Mt=n(h);Mt!==null&&it(D,Mt.startTime-K),_e=!1}return _e}finally{g=null,y=J,A=!1}}var U=!1,w=null,m=-1,v=5,T=-1;function k(){return!(t.unstable_now()-T<v)}function C(){if(w!==null){var B=t.unstable_now();T=B;var K=!0;try{K=w(!0,B)}finally{K?E():(U=!1,w=null)}}else U=!1}var E;if(typeof _=="function")E=function(){_(C)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,sn=ct.port2;ct.port1.onmessage=C,E=function(){sn.postMessage(null)}}else E=function(){b(C,0)};function ir(B){w=B,U||(U=!0,E())}function it(B,K){m=b(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,ir(z))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var J=y;y=K;try{return B()}finally{y=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=y;y=B;try{return K()}finally{y=J}},t.unstable_scheduleCallback=function(B,K,J){var fe=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?fe+J:fe):J=fe,B){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=J+ae,B={id:f++,callback:K,priorityLevel:B,startTime:J,expirationTime:ae,sortIndex:-1},J>fe?(B.sortIndex=J,e(h,B),n(u)===null&&B===n(h)&&(V?(x(m),m=-1):V=!0,it(D,J-fe))):(B.sortIndex=ae,e(u,B),P||A||(P=!0,ir(z))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var K=y;return function(){var J=y;y=K;try{return B.apply(this,arguments)}finally{y=J}}}})(Xm);Ym.exports=Xm;var $_=Ym.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=he,St=$_;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jm=new Set,Ps={};function br(t,e){mi(t,e),mi(t+"Capture",e)}function mi(t,e){for(Ps[t]=e,t=0;t<e.length;t++)Jm.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=Object.prototype.hasOwnProperty,q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sf={},Af={};function W_(t){return Du.call(Af,t)?!0:Du.call(Sf,t)?!1:q_.test(t)?Af[t]=!0:(Sf[t]=!0,!1)}function K_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q_(t,e,n,r){if(e===null||typeof e>"u"||K_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yc=/[\-:]([a-z])/g;function Xc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yc,Xc);Ke[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yc,Xc);Ke[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yc,Xc);Ke[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jc(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q_(e,n,i,r)&&(n=null),r||i===null?W_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),Zc=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),Zm=Symbol.for("react.provider"),eg=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),th=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),tg=Symbol.for("react.offscreen"),kf=Symbol.iterator;function Ji(t){return t===null||typeof t!="object"?null:(t=kf&&t[kf]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Yl;function ls(t){if(Yl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yl=e&&e[1]||""}return`
`+Yl+t}var Xl=!1;function Jl(t,e){if(!t||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ls(t):""}function G_(t){switch(t.tag){case 5:return ls(t.type);case 16:return ls("Lazy");case 13:return ls("Suspense");case 19:return ls("SuspenseList");case 0:case 2:case 15:return t=Jl(t.type,!1),t;case 11:return t=Jl(t.type.render,!1),t;case 1:return t=Jl(t.type,!0),t;default:return""}}function Lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Yr:return"Portal";case bu:return"Profiler";case Zc:return"StrictMode";case Ou:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case eg:return(t.displayName||"Context")+".Consumer";case Zm:return(t._context.displayName||"Context")+".Provider";case eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case th:return e=t.displayName||null,e!==null?e:Lu(t.type)||"Memo";case Cn:e=t._payload,t=t._init;try{return Lu(t(e))}catch{}}return null}function Y_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===Zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ng(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function X_(t){var e=ng(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){t._valueTracker||(t._valueTracker=X_(t))}function rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ng(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fu(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ig(t,e){e=e.checked,e!=null&&Jc(t,"checked",e,!1)}function ju(t,e){ig(t,e);var n=Kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,Kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||pa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var us=Array.isArray;function li(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(us(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kn(n)}}function sg(t,e){var n=Kn(e.value),r=Kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Nf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function og(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?og(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vo,ag=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ns(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J_=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(t){J_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gs[e]=gs[t]})});function lg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gs.hasOwnProperty(t)&&gs[t]?(""+e).trim():e+"px"}function ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Z_=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(t,e){if(e){if(Z_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Hu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,ui=null,ci=null;function Vf(t){if(t=ro(t)){if(typeof Wu!="function")throw Error(L(280));var e=t.stateNode;e&&(e=rl(e),Wu(t.stateNode,t.type,e))}}function cg(t){ui?ci?ci.push(t):ci=[t]:ui=t}function hg(){if(ui){var t=ui,e=ci;if(ci=ui=null,Vf(t),e)for(t=0;t<e.length;t++)Vf(e[t])}}function dg(t,e){return t(e)}function fg(){}var Zl=!1;function pg(t,e,n){if(Zl)return t(e,n);Zl=!0;try{return dg(t,e,n)}finally{Zl=!1,(ui!==null||ci!==null)&&(fg(),hg())}}function Vs(t,e){var n=t.stateNode;if(n===null)return null;var r=rl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Ku=!1;if(mn)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Ku=!1}function ew(t,e,n,r,i,s,a,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var ys=!1,ma=null,ga=!1,Qu=null,tw={onError:function(t){ys=!0,ma=t}};function nw(t,e,n,r,i,s,a,l,u){ys=!1,ma=null,ew.apply(tw,arguments)}function rw(t,e,n,r,i,s,a,l,u){if(nw.apply(this,arguments),ys){if(ys){var h=ma;ys=!1,ma=null}else throw Error(L(198));ga||(ga=!0,Qu=h)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Df(t){if(Or(t)!==t)throw Error(L(188))}function iw(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Df(i),t;if(s===r)return Df(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function gg(t){return t=iw(t),t!==null?yg(t):null}function yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yg(t);if(e!==null)return e;t=t.sibling}return null}var vg=St.unstable_scheduleCallback,bf=St.unstable_cancelCallback,sw=St.unstable_shouldYield,ow=St.unstable_requestPaint,Ce=St.unstable_now,aw=St.unstable_getCurrentPriorityLevel,rh=St.unstable_ImmediatePriority,_g=St.unstable_UserBlockingPriority,ya=St.unstable_NormalPriority,lw=St.unstable_LowPriority,wg=St.unstable_IdlePriority,Za=null,Xt=null;function uw(t){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Za,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:dw,cw=Math.log,hw=Math.LN2;function dw(t){return t>>>=0,t===0?32:31-(cw(t)/hw|0)|0}var Do=64,bo=4194304;function cs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function va(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=cs(l):(s&=a,s!==0&&(r=cs(s)))}else a=n&~i,a!==0?r=cs(a):s!==0&&(r=cs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function fw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-$t(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=fw(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Eg(){var t=Do;return Do<<=1,!(Do&4194240)&&(Do=64),t}function eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function mw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ih(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function Tg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ig,sh,xg,Sg,Ag,Yu=!1,Oo=[],On=null,Mn=null,Ln=null,Ds=new Map,bs=new Map,Pn=[],gw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Of(t,e){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Ds.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(e.pointerId)}}function es(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ro(e),e!==null&&sh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yw(t,e,n,r,i){switch(e){case"focusin":return On=es(On,t,e,n,r,i),!0;case"dragenter":return Mn=es(Mn,t,e,n,r,i),!0;case"mouseover":return Ln=es(Ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ds.set(s,es(Ds.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bs.set(s,es(bs.get(s)||null,t,e,n,r,i)),!0}return!1}function kg(t){var e=mr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=mg(n),e!==null){t.blockedOn=e,Ag(t.priority,function(){xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qu=r,n.target.dispatchEvent(r),qu=null}else return e=ro(n),e!==null&&sh(e),t.blockedOn=n,!1;e.shift()}return!0}function Mf(t,e,n){Jo(t)&&n.delete(e)}function vw(){Yu=!1,On!==null&&Jo(On)&&(On=null),Mn!==null&&Jo(Mn)&&(Mn=null),Ln!==null&&Jo(Ln)&&(Ln=null),Ds.forEach(Mf),bs.forEach(Mf)}function ts(t,e){t.blockedOn===e&&(t.blockedOn=null,Yu||(Yu=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,vw)))}function Os(t){function e(i){return ts(i,t)}if(0<Oo.length){ts(Oo[0],t);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(On!==null&&ts(On,t),Mn!==null&&ts(Mn,t),Ln!==null&&ts(Ln,t),Ds.forEach(e),bs.forEach(e),n=0;n<Pn.length;n++)r=Pn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)kg(n),n.blockedOn===null&&Pn.shift()}var hi=In.ReactCurrentBatchConfig,_a=!0;function _w(t,e,n,r){var i=le,s=hi.transition;hi.transition=null;try{le=1,oh(t,e,n,r)}finally{le=i,hi.transition=s}}function ww(t,e,n,r){var i=le,s=hi.transition;hi.transition=null;try{le=4,oh(t,e,n,r)}finally{le=i,hi.transition=s}}function oh(t,e,n,r){if(_a){var i=Xu(t,e,n,r);if(i===null)cu(t,e,r,wa,n),Of(t,r);else if(yw(i,t,e,n,r))r.stopPropagation();else if(Of(t,r),e&4&&-1<gw.indexOf(t)){for(;i!==null;){var s=ro(i);if(s!==null&&Ig(s),s=Xu(t,e,n,r),s===null&&cu(t,e,r,wa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cu(t,e,r,null,n)}}var wa=null;function Xu(t,e,n,r){if(wa=null,t=nh(r),t=mr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wa=t,null}function Cg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aw()){case rh:return 1;case _g:return 4;case ya:case lw:return 16;case wg:return 536870912;default:return 16}default:return 16}}var Vn=null,ah=null,Zo=null;function Rg(){if(Zo)return Zo;var t,e=ah,n=e.length,r,i="value"in Vn?Vn.value:Vn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Zo=i.slice(t,1<r?1-r:void 0)}function ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Mo(){return!0}function Lf(){return!1}function kt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Mo:Lf,this.isPropagationStopped=Lf,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),e}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lh=kt(Ni),no=Te({},Ni,{view:0,detail:0}),Ew=kt(no),tu,nu,ns,el=Te({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ns&&(ns&&t.type==="mousemove"?(tu=t.screenX-ns.screenX,nu=t.screenY-ns.screenY):nu=tu=0,ns=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:nu}}),Ff=kt(el),Tw=Te({},el,{dataTransfer:0}),Iw=kt(Tw),xw=Te({},no,{relatedTarget:0}),ru=kt(xw),Sw=Te({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),Aw=kt(Sw),kw=Te({},Ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cw=kt(kw),Rw=Te({},Ni,{data:0}),jf=kt(Rw),Pw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vw[t])?!!e[t]:!1}function uh(){return Dw}var bw=Te({},no,{key:function(t){if(t.key){var e=Pw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uh,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ow=kt(bw),Mw=Te({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=kt(Mw),Lw=Te({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uh}),Fw=kt(Lw),jw=Te({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),zw=kt(jw),Uw=Te({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bw=kt(Uw),$w=[9,13,27,32],ch=mn&&"CompositionEvent"in window,vs=null;mn&&"documentMode"in document&&(vs=document.documentMode);var Hw=mn&&"TextEvent"in window&&!vs,Pg=mn&&(!ch||vs&&8<vs&&11>=vs),Uf=" ",Bf=!1;function Ng(t,e){switch(t){case"keyup":return $w.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function qw(t,e){switch(t){case"compositionend":return Vg(e);case"keypress":return e.which!==32?null:(Bf=!0,Uf);case"textInput":return t=e.data,t===Uf&&Bf?null:t;default:return null}}function Ww(t,e){if(Jr)return t==="compositionend"||!ch&&Ng(t,e)?(t=Rg(),Zo=ah=Vn=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pg&&e.locale!=="ko"?null:e.data;default:return null}}var Kw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kw[t.type]:e==="textarea"}function Dg(t,e,n,r){cg(r),e=Ea(e,"onChange"),0<e.length&&(n=new lh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _s=null,Ms=null;function Qw(t){Hg(t,0)}function tl(t){var e=ti(t);if(rg(e))return t}function Gw(t,e){if(t==="change")return e}var bg=!1;if(mn){var iu;if(mn){var su="oninput"in document;if(!su){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),su=typeof Hf.oninput=="function"}iu=su}else iu=!1;bg=iu&&(!document.documentMode||9<document.documentMode)}function qf(){_s&&(_s.detachEvent("onpropertychange",Og),Ms=_s=null)}function Og(t){if(t.propertyName==="value"&&tl(Ms)){var e=[];Dg(e,Ms,t,nh(t)),pg(Qw,e)}}function Yw(t,e,n){t==="focusin"?(qf(),_s=e,Ms=n,_s.attachEvent("onpropertychange",Og)):t==="focusout"&&qf()}function Xw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tl(Ms)}function Jw(t,e){if(t==="click")return tl(e)}function Zw(t,e){if(t==="input"||t==="change")return tl(e)}function eE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:eE;function Ls(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Du.call(e,i)||!Wt(t[i],e[i]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kf(t,e){var n=Wf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wf(n)}}function Mg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lg(){for(var t=window,e=pa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pa(t.document)}return e}function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tE(t){var e=Lg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mg(n.ownerDocument.documentElement,n)){if(r!==null&&hh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kf(n,s);var a=Kf(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nE=mn&&"documentMode"in document&&11>=document.documentMode,Zr=null,Ju=null,ws=null,Zu=!1;function Qf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||Zr==null||Zr!==pa(r)||(r=Zr,"selectionStart"in r&&hh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ws&&Ls(ws,r)||(ws=r,r=Ea(Ju,"onSelect"),0<r.length&&(e=new lh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zr)))}function Lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ei={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},ou={},Fg={};mn&&(Fg=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function nl(t){if(ou[t])return ou[t];if(!ei[t])return t;var e=ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fg)return ou[t]=e[n];return t}var jg=nl("animationend"),zg=nl("animationiteration"),Ug=nl("animationstart"),Bg=nl("transitionend"),$g=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(t,e){$g.set(t,e),br(e,[t])}for(var au=0;au<Gf.length;au++){var lu=Gf[au],rE=lu.toLowerCase(),iE=lu[0].toUpperCase()+lu.slice(1);Zn(rE,"on"+iE)}Zn(jg,"onAnimationEnd");Zn(zg,"onAnimationIteration");Zn(Ug,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(Bg,"onTransitionEnd");mi("onMouseEnter",["mouseout","mouseover"]);mi("onMouseLeave",["mouseout","mouseover"]);mi("onPointerEnter",["pointerout","pointerover"]);mi("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("cancel close invalid load scroll toggle".split(" ").concat(hs));function Yf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rw(r,e,void 0,t),t.currentTarget=null}function Hg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Yf(i,l,h),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Yf(i,l,h),s=u}}}if(ga)throw t=Qu,ga=!1,Qu=null,t}function me(t,e){var n=e[ic];n===void 0&&(n=e[ic]=new Set);var r=t+"__bubble";n.has(r)||(qg(e,t,2,!1),n.add(r))}function uu(t,e,n){var r=0;e&&(r|=4),qg(n,t,r,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Fs(t){if(!t[Fo]){t[Fo]=!0,Jm.forEach(function(n){n!=="selectionchange"&&(sE.has(n)||uu(n,!1,t),uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,uu("selectionchange",!1,e))}}function qg(t,e,n,r){switch(Cg(e)){case 1:var i=_w;break;case 4:i=ww;break;default:i=oh}n=i.bind(null,e,n,t),i=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=mr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}pg(function(){var h=s,f=nh(n),g=[];e:{var y=$g.get(t);if(y!==void 0){var A=lh,P=t;switch(t){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":A=Ow;break;case"focusin":P="focus",A=ru;break;case"focusout":P="blur",A=ru;break;case"beforeblur":case"afterblur":A=ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Iw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Fw;break;case jg:case zg:case Ug:A=Aw;break;case Bg:A=zw;break;case"scroll":A=Ew;break;case"wheel":A=Bw;break;case"copy":case"cut":case"paste":A=Cw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=zf}var V=(e&4)!==0,b=!V&&t==="scroll",x=V?y!==null?y+"Capture":null:y;V=[];for(var _=h,S;_!==null;){S=_;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,x!==null&&(D=Vs(_,x),D!=null&&V.push(js(_,D,S)))),b)break;_=_.return}0<V.length&&(y=new A(y,P,null,n,f),g.push({event:y,listeners:V}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",y&&n!==qu&&(P=n.relatedTarget||n.fromElement)&&(mr(P)||P[gn]))break e;if((A||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?mr(P):null,P!==null&&(b=Or(P),P!==b||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(V=Ff,D="onMouseLeave",x="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(V=zf,D="onPointerLeave",x="onPointerEnter",_="pointer"),b=A==null?y:ti(A),S=P==null?y:ti(P),y=new V(D,_+"leave",A,n,f),y.target=b,y.relatedTarget=S,D=null,mr(f)===h&&(V=new V(x,_+"enter",P,n,f),V.target=S,V.relatedTarget=b,D=V),b=D,A&&P)t:{for(V=A,x=P,_=0,S=V;S;S=Wr(S))_++;for(S=0,D=x;D;D=Wr(D))S++;for(;0<_-S;)V=Wr(V),_--;for(;0<S-_;)x=Wr(x),S--;for(;_--;){if(V===x||x!==null&&V===x.alternate)break t;V=Wr(V),x=Wr(x)}V=null}else V=null;A!==null&&Xf(g,y,A,V,!1),P!==null&&b!==null&&Xf(g,b,P,V,!0)}}e:{if(y=h?ti(h):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var z=Gw;else if($f(y))if(bg)z=Zw;else{z=Xw;var U=Yw}else(A=y.nodeName)&&A.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(z=Jw);if(z&&(z=z(t,h))){Dg(g,z,n,f);break e}U&&U(t,y,h),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&zu(y,"number",y.value)}switch(U=h?ti(h):window,t){case"focusin":($f(U)||U.contentEditable==="true")&&(Zr=U,Ju=h,ws=null);break;case"focusout":ws=Ju=Zr=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Qf(g,n,f);break;case"selectionchange":if(nE)break;case"keydown":case"keyup":Qf(g,n,f)}var w;if(ch)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Jr?Ng(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Pg&&n.locale!=="ko"&&(Jr||m!=="onCompositionStart"?m==="onCompositionEnd"&&Jr&&(w=Rg()):(Vn=f,ah="value"in Vn?Vn.value:Vn.textContent,Jr=!0)),U=Ea(h,m),0<U.length&&(m=new jf(m,t,null,n,f),g.push({event:m,listeners:U}),w?m.data=w:(w=Vg(n),w!==null&&(m.data=w)))),(w=Hw?qw(t,n):Ww(t,n))&&(h=Ea(h,"onBeforeInput"),0<h.length&&(f=new jf("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=w))}Hg(g,e)})}function js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ea(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vs(t,n),s!=null&&r.unshift(js(t,s,i)),s=Vs(t,e),s!=null&&r.push(js(t,s,i))),t=t.return}return r}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xf(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Vs(n,s),u!=null&&a.unshift(js(n,u,l))):i||(u=Vs(n,s),u!=null&&a.push(js(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var oE=/\r\n?/g,aE=/\u0000|\uFFFD/g;function Jf(t){return(typeof t=="string"?t:""+t).replace(oE,`
`).replace(aE,"")}function jo(t,e,n){if(e=Jf(e),Jf(t)!==e&&n)throw Error(L(425))}function Ta(){}var ec=null,tc=null;function nc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,lE=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(t){return Zf.resolve(null).then(t).catch(cE)}:rc;function cE(t){setTimeout(function(){throw t})}function hu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Os(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Os(e)}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vi=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Vi,zs="__reactProps$"+Vi,gn="__reactContainer$"+Vi,ic="__reactEvents$"+Vi,hE="__reactListeners$"+Vi,dE="__reactHandles$"+Vi;function mr(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ep(t);t!==null;){if(n=t[Yt])return n;t=ep(t)}return e}t=n,n=t.parentNode}return null}function ro(t){return t=t[Yt]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function rl(t){return t[zs]||null}var sc=[],ni=-1;function er(t){return{current:t}}function ge(t){0>ni||(t.current=sc[ni],sc[ni]=null,ni--)}function de(t,e){ni++,sc[ni]=t.current,t.current=e}var Qn={},rt=er(Qn),pt=er(!1),xr=Qn;function gi(t,e){var n=t.type.contextTypes;if(!n)return Qn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Ia(){ge(pt),ge(rt)}function tp(t,e,n){if(rt.current!==Qn)throw Error(L(168));de(rt,e),de(pt,n)}function Wg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,Y_(t)||"Unknown",i));return Te({},n,r)}function xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qn,xr=rt.current,de(rt,t),de(pt,pt.current),!0}function np(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Wg(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,ge(pt),ge(rt),de(rt,t)):ge(pt),de(pt,n)}var hn=null,il=!1,du=!1;function Kg(t){hn===null?hn=[t]:hn.push(t)}function fE(t){il=!0,Kg(t)}function tr(){if(!du&&hn!==null){du=!0;var t=0,e=le;try{var n=hn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hn=null,il=!1}catch(i){throw hn!==null&&(hn=hn.slice(t+1)),vg(rh,tr),i}finally{le=e,du=!1}}return null}var ri=[],ii=0,Sa=null,Aa=0,Pt=[],Nt=0,Sr=null,dn=1,fn="";function dr(t,e){ri[ii++]=Aa,ri[ii++]=Sa,Sa=t,Aa=e}function Qg(t,e,n){Pt[Nt++]=dn,Pt[Nt++]=fn,Pt[Nt++]=Sr,Sr=t;var r=dn;t=fn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dn=1<<32-$t(e)+i|n<<i|r,fn=s+t}else dn=1<<s|n<<i|r,fn=t}function dh(t){t.return!==null&&(dr(t,1),Qg(t,1,0))}function fh(t){for(;t===Sa;)Sa=ri[--ii],ri[ii]=null,Aa=ri[--ii],ri[ii]=null;for(;t===Sr;)Sr=Pt[--Nt],Pt[Nt]=null,fn=Pt[--Nt],Pt[Nt]=null,dn=Pt[--Nt],Pt[Nt]=null}var Tt=null,wt=null,ye=!1,Bt=null;function Gg(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=Fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:dn,overflow:fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function oc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ac(t){if(ye){var e=wt;if(e){var n=e;if(!rp(t,e)){if(oc(t))throw Error(L(418));e=Fn(n.nextSibling);var r=Tt;e&&rp(t,e)?Gg(r,n):(t.flags=t.flags&-4097|2,ye=!1,Tt=t)}}else{if(oc(t))throw Error(L(418));t.flags=t.flags&-4097|2,ye=!1,Tt=t}}}function ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function zo(t){if(t!==Tt)return!1;if(!ye)return ip(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nc(t.type,t.memoizedProps)),e&&(e=wt)){if(oc(t))throw Yg(),Error(L(418));for(;e;)Gg(t,e),e=Fn(e.nextSibling)}if(ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=Fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?Fn(t.stateNode.nextSibling):null;return!0}function Yg(){for(var t=wt;t;)t=Fn(t.nextSibling)}function yi(){wt=Tt=null,ye=!1}function ph(t){Bt===null?Bt=[t]:Bt.push(t)}var pE=In.ReactCurrentBatchConfig;function rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Uo(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sp(t){var e=t._init;return e(t._payload)}function Xg(t){function e(x,_){if(t){var S=x.deletions;S===null?(x.deletions=[_],x.flags|=16):S.push(_)}}function n(x,_){if(!t)return null;for(;_!==null;)e(x,_),_=_.sibling;return null}function r(x,_){for(x=new Map;_!==null;)_.key!==null?x.set(_.key,_):x.set(_.index,_),_=_.sibling;return x}function i(x,_){return x=Bn(x,_),x.index=0,x.sibling=null,x}function s(x,_,S){return x.index=S,t?(S=x.alternate,S!==null?(S=S.index,S<_?(x.flags|=2,_):S):(x.flags|=2,_)):(x.flags|=1048576,_)}function a(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,_,S,D){return _===null||_.tag!==6?(_=_u(S,x.mode,D),_.return=x,_):(_=i(_,S),_.return=x,_)}function u(x,_,S,D){var z=S.type;return z===Xr?f(x,_,S.props.children,D,S.key):_!==null&&(_.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Cn&&sp(z)===_.type)?(D=i(_,S.props),D.ref=rs(x,_,S),D.return=x,D):(D=aa(S.type,S.key,S.props,null,x.mode,D),D.ref=rs(x,_,S),D.return=x,D)}function h(x,_,S,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=wu(S,x.mode,D),_.return=x,_):(_=i(_,S.children||[]),_.return=x,_)}function f(x,_,S,D,z){return _===null||_.tag!==7?(_=Er(S,x.mode,D,z),_.return=x,_):(_=i(_,S),_.return=x,_)}function g(x,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=_u(""+_,x.mode,S),_.return=x,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Po:return S=aa(_.type,_.key,_.props,null,x.mode,S),S.ref=rs(x,null,_),S.return=x,S;case Yr:return _=wu(_,x.mode,S),_.return=x,_;case Cn:var D=_._init;return g(x,D(_._payload),S)}if(us(_)||Ji(_))return _=Er(_,x.mode,S,null),_.return=x,_;Uo(x,_)}return null}function y(x,_,S,D){var z=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:l(x,_,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Po:return S.key===z?u(x,_,S,D):null;case Yr:return S.key===z?h(x,_,S,D):null;case Cn:return z=S._init,y(x,_,z(S._payload),D)}if(us(S)||Ji(S))return z!==null?null:f(x,_,S,D,null);Uo(x,S)}return null}function A(x,_,S,D,z){if(typeof D=="string"&&D!==""||typeof D=="number")return x=x.get(S)||null,l(_,x,""+D,z);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Po:return x=x.get(D.key===null?S:D.key)||null,u(_,x,D,z);case Yr:return x=x.get(D.key===null?S:D.key)||null,h(_,x,D,z);case Cn:var U=D._init;return A(x,_,S,U(D._payload),z)}if(us(D)||Ji(D))return x=x.get(S)||null,f(_,x,D,z,null);Uo(_,D)}return null}function P(x,_,S,D){for(var z=null,U=null,w=_,m=_=0,v=null;w!==null&&m<S.length;m++){w.index>m?(v=w,w=null):v=w.sibling;var T=y(x,w,S[m],D);if(T===null){w===null&&(w=v);break}t&&w&&T.alternate===null&&e(x,w),_=s(T,_,m),U===null?z=T:U.sibling=T,U=T,w=v}if(m===S.length)return n(x,w),ye&&dr(x,m),z;if(w===null){for(;m<S.length;m++)w=g(x,S[m],D),w!==null&&(_=s(w,_,m),U===null?z=w:U.sibling=w,U=w);return ye&&dr(x,m),z}for(w=r(x,w);m<S.length;m++)v=A(w,x,m,S[m],D),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?m:v.key),_=s(v,_,m),U===null?z=v:U.sibling=v,U=v);return t&&w.forEach(function(k){return e(x,k)}),ye&&dr(x,m),z}function V(x,_,S,D){var z=Ji(S);if(typeof z!="function")throw Error(L(150));if(S=z.call(S),S==null)throw Error(L(151));for(var U=z=null,w=_,m=_=0,v=null,T=S.next();w!==null&&!T.done;m++,T=S.next()){w.index>m?(v=w,w=null):v=w.sibling;var k=y(x,w,T.value,D);if(k===null){w===null&&(w=v);break}t&&w&&k.alternate===null&&e(x,w),_=s(k,_,m),U===null?z=k:U.sibling=k,U=k,w=v}if(T.done)return n(x,w),ye&&dr(x,m),z;if(w===null){for(;!T.done;m++,T=S.next())T=g(x,T.value,D),T!==null&&(_=s(T,_,m),U===null?z=T:U.sibling=T,U=T);return ye&&dr(x,m),z}for(w=r(x,w);!T.done;m++,T=S.next())T=A(w,x,m,T.value,D),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?m:T.key),_=s(T,_,m),U===null?z=T:U.sibling=T,U=T);return t&&w.forEach(function(C){return e(x,C)}),ye&&dr(x,m),z}function b(x,_,S,D){if(typeof S=="object"&&S!==null&&S.type===Xr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Po:e:{for(var z=S.key,U=_;U!==null;){if(U.key===z){if(z=S.type,z===Xr){if(U.tag===7){n(x,U.sibling),_=i(U,S.props.children),_.return=x,x=_;break e}}else if(U.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Cn&&sp(z)===U.type){n(x,U.sibling),_=i(U,S.props),_.ref=rs(x,U,S),_.return=x,x=_;break e}n(x,U);break}else e(x,U);U=U.sibling}S.type===Xr?(_=Er(S.props.children,x.mode,D,S.key),_.return=x,x=_):(D=aa(S.type,S.key,S.props,null,x.mode,D),D.ref=rs(x,_,S),D.return=x,x=D)}return a(x);case Yr:e:{for(U=S.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(x,_.sibling),_=i(_,S.children||[]),_.return=x,x=_;break e}else{n(x,_);break}else e(x,_);_=_.sibling}_=wu(S,x.mode,D),_.return=x,x=_}return a(x);case Cn:return U=S._init,b(x,_,U(S._payload),D)}if(us(S))return P(x,_,S,D);if(Ji(S))return V(x,_,S,D);Uo(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(x,_.sibling),_=i(_,S),_.return=x,x=_):(n(x,_),_=_u(S,x.mode,D),_.return=x,x=_),a(x)):n(x,_)}return b}var vi=Xg(!0),Jg=Xg(!1),ka=er(null),Ca=null,si=null,mh=null;function gh(){mh=si=Ca=null}function yh(t){var e=ka.current;ge(ka),t._currentValue=e}function lc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function di(t,e){Ca=t,mh=si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function bt(t){var e=t._currentValue;if(mh!==t)if(t={context:t,memoizedValue:e,next:null},si===null){if(Ca===null)throw Error(L(308));si=t,Ca.dependencies={lanes:0,firstContext:t}}else si=si.next=t;return e}var gr=null;function vh(t){gr===null?gr=[t]:gr.push(t)}function Zg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vh(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rn=!1;function _h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ey(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,vh(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ih(t,n)}}function op(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ra(t,e,n,r){var i=t.updateQueue;Rn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;a=0,f=h=u=null,l=s;do{var y=l.lane,A=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,V=l;switch(y=e,A=n,V.tag){case 1:if(P=V.payload,typeof P=="function"){g=P.call(A,g,y);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=V.payload,y=typeof P=="function"?P.call(A,g,y):P,y==null)break e;g=Te({},g,y);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else A={eventTime:A,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=g):f=f.next=A,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);kr|=a,t.lanes=a,t.memoizedState=g}}function ap(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var io={},Jt=er(io),Us=er(io),Bs=er(io);function yr(t){if(t===io)throw Error(L(174));return t}function wh(t,e){switch(de(Bs,e),de(Us,t),de(Jt,io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bu(e,t)}ge(Jt),de(Jt,e)}function _i(){ge(Jt),ge(Us),ge(Bs)}function ty(t){yr(Bs.current);var e=yr(Jt.current),n=Bu(e,t.type);e!==n&&(de(Us,t),de(Jt,n))}function Eh(t){Us.current===t&&(ge(Jt),ge(Us))}var we=er(0);function Pa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Th(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var na=In.ReactCurrentDispatcher,pu=In.ReactCurrentBatchConfig,Ar=0,Ee=null,Ne=null,Le=null,Na=!1,Es=!1,$s=0,mE=0;function Xe(){throw Error(L(321))}function Ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function xh(t,e,n,r,i,s){if(Ar=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,na.current=t===null||t.memoizedState===null?_E:wE,t=n(r,i),Es){s=0;do{if(Es=!1,$s=0,25<=s)throw Error(L(301));s+=1,Le=Ne=null,e.updateQueue=null,na.current=EE,t=n(r,i)}while(Es)}if(na.current=Va,e=Ne!==null&&Ne.next!==null,Ar=0,Le=Ne=Ee=null,Na=!1,e)throw Error(L(300));return t}function Sh(){var t=$s!==0;return $s=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?Ee.memoizedState=Le=t:Le=Le.next=t,Le}function Ot(){if(Ne===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Le===null?Ee.memoizedState:Le.next;if(e!==null)Le=e,Ne=t;else{if(t===null)throw Error(L(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?Ee.memoizedState=Le=t:Le=Le.next=t}return Le}function Hs(t,e){return typeof e=="function"?e(t):e}function mu(t){var e=Ot(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,h=s;do{var f=h.lane;if((Ar&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,Ee.lanes|=f,kr|=f}h=h.next}while(h!==null&&h!==s);u===null?a=r:u.next=l,Wt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gu(t){var e=Ot(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Wt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ny(){}function ry(t,e){var n=Ee,r=Ot(),i=e(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,Ah(oy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,qs(9,sy.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(L(349));Ar&30||iy(n,e,i)}return i}function iy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sy(t,e,n,r){e.value=n,e.getSnapshot=r,ay(e)&&ly(t)}function oy(t,e,n){return n(function(){ay(e)&&ly(t)})}function ay(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function ly(t){var e=yn(t,1);e!==null&&Ht(e,t,1,-1)}function lp(t){var e=Gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:t},e.queue=t,t=t.dispatch=vE.bind(null,Ee,t),[e.memoizedState,t]}function qs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function uy(){return Ot().memoizedState}function ra(t,e,n,r){var i=Gt();Ee.flags|=t,i.memoizedState=qs(1|e,n,void 0,r===void 0?null:r)}function sl(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var a=Ne.memoizedState;if(s=a.destroy,r!==null&&Ih(r,a.deps)){i.memoizedState=qs(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=qs(1|e,n,s,r)}function up(t,e){return ra(8390656,8,t,e)}function Ah(t,e){return sl(2048,8,t,e)}function cy(t,e){return sl(4,2,t,e)}function hy(t,e){return sl(4,4,t,e)}function dy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fy(t,e,n){return n=n!=null?n.concat([t]):null,sl(4,4,dy.bind(null,e,t),n)}function kh(){}function py(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ih(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function my(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ih(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gy(t,e,n){return Ar&21?(Wt(n,e)||(n=Eg(),Ee.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function gE(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=pu.transition;pu.transition={};try{t(!1),e()}finally{le=n,pu.transition=r}}function yy(){return Ot().memoizedState}function yE(t,e,n){var r=Un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vy(t))_y(e,n);else if(n=Zg(t,e,n,r),n!==null){var i=at();Ht(n,t,r,i),wy(n,e,r)}}function vE(t,e,n){var r=Un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vy(t))_y(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,a)){var u=e.interleaved;u===null?(i.next=i,vh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Zg(t,e,i,r),n!==null&&(i=at(),Ht(n,t,r,i),wy(n,e,r))}}function vy(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function _y(t,e){Es=Na=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ih(t,n)}}var Va={readContext:bt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},_E={readContext:bt,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ra(4194308,4,dy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return ra(4,2,t,e)},useMemo:function(t,e){var n=Gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yE.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:lp,useDebugValue:kh,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=lp(!1),e=t[0];return t=gE.bind(null,t[1]),Gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Gt();if(ye){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Fe===null)throw Error(L(349));Ar&30||iy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,up(oy.bind(null,r,s,t),[t]),r.flags|=2048,qs(9,sy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gt(),e=Fe.identifierPrefix;if(ye){var n=fn,r=dn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wE={readContext:bt,useCallback:py,useContext:bt,useEffect:Ah,useImperativeHandle:fy,useInsertionEffect:cy,useLayoutEffect:hy,useMemo:my,useReducer:mu,useRef:uy,useState:function(){return mu(Hs)},useDebugValue:kh,useDeferredValue:function(t){var e=Ot();return gy(e,Ne.memoizedState,t)},useTransition:function(){var t=mu(Hs)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:ny,useSyncExternalStore:ry,useId:yy,unstable_isNewReconciler:!1},EE={readContext:bt,useCallback:py,useContext:bt,useEffect:Ah,useImperativeHandle:fy,useInsertionEffect:cy,useLayoutEffect:hy,useMemo:my,useReducer:gu,useRef:uy,useState:function(){return gu(Hs)},useDebugValue:kh,useDeferredValue:function(t){var e=Ot();return Ne===null?e.memoizedState=t:gy(e,Ne.memoizedState,t)},useTransition:function(){var t=gu(Hs)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:ny,useSyncExternalStore:ry,useId:yy,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function uc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ol={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=Un(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(Ht(e,t,i,r),ta(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=Un(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(Ht(e,t,i,r),ta(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=Un(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=jn(t,i,r),e!==null&&(Ht(e,t,r,n),ta(e,t,r))}};function cp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ls(n,r)||!Ls(i,s):!0}function Ey(t,e,n){var r=!1,i=Qn,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=mt(e)?xr:rt.current,r=e.contextTypes,s=(r=r!=null)?gi(t,i):Qn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ol.enqueueReplaceState(e,e.state,null)}function cc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_h(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=mt(e)?xr:rt.current,i.context=gi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(uc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ol.enqueueReplaceState(i,i.state,null),Ra(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function wi(t,e){try{var n="",r=e;do n+=G_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TE=typeof WeakMap=="function"?WeakMap:Map;function Ty(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ba||(ba=!0,Ec=r),hc(t,e)},n}function Iy(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hc(t,e),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function dp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new TE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ME.bind(null,t,e,n),e.then(t,t))}function fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,jn(n,e,1))),n.lanes|=1),t)}var IE=In.ReactCurrentOwner,ft=!1;function ot(t,e,n,r){e.child=t===null?Jg(e,null,n,r):vi(e,t.child,n,r)}function mp(t,e,n,r,i){n=n.render;var s=e.ref;return di(e,i),r=xh(t,e,n,r,s,i),n=Sh(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(ye&&n&&dh(e),e.flags|=1,ot(t,e,r,i),e.child)}function gp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xy(t,e,s,r,i)):(t=aa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ls,n(a,r)&&t.ref===e.ref)return vn(t,e,i)}return e.flags|=1,t=Bn(s,r),t.ref=e.ref,t.return=e,e.child=t}function xy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ls(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,vn(t,e,i)}return dc(t,e,n,r,i)}function Sy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ai,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(ai,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(ai,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(ai,_t),_t|=r;return ot(t,e,i,n),e.child}function Ay(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dc(t,e,n,r,i){var s=mt(n)?xr:rt.current;return s=gi(e,s),di(e,i),n=xh(t,e,n,r,s,i),r=Sh(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(ye&&r&&dh(e),e.flags|=1,ot(t,e,n,i),e.child)}function yp(t,e,n,r,i){if(mt(n)){var s=!0;xa(e)}else s=!1;if(di(e,i),e.stateNode===null)ia(t,e),Ey(e,n,r),cc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=bt(h):(h=mt(n)?xr:rt.current,h=gi(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==h)&&hp(e,a,r,h),Rn=!1;var y=e.memoizedState;a.state=y,Ra(e,r,a,i),u=e.memoizedState,l!==r||y!==u||pt.current||Rn?(typeof f=="function"&&(uc(e,n,f,r),u=e.memoizedState),(l=Rn||cp(e,n,l,r,y,u,h))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,ey(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:zt(e.type,l),a.props=h,g=e.pendingProps,y=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=bt(u):(u=mt(n)?xr:rt.current,u=gi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||y!==u)&&hp(e,a,r,u),Rn=!1,y=e.memoizedState,a.state=y,Ra(e,r,a,i);var P=e.memoizedState;l!==g||y!==P||pt.current||Rn?(typeof A=="function"&&(uc(e,n,A,r),P=e.memoizedState),(h=Rn||cp(e,n,h,r,y,P,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,P,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,P,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),a.props=r,a.state=P,a.context=u,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return fc(t,e,n,r,s,i)}function fc(t,e,n,r,i,s){Ay(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&np(e,n,!1),vn(t,e,s);r=e.stateNode,IE.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=vi(e,t.child,null,s),e.child=vi(e,null,l,s)):ot(t,e,l,s),e.memoizedState=r.state,i&&np(e,n,!0),e.child}function ky(t){var e=t.stateNode;e.pendingContext?tp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tp(t,e.context,!1),wh(t,e.containerInfo)}function vp(t,e,n,r,i){return yi(),ph(i),e.flags|=256,ot(t,e,n,r),e.child}var pc={dehydrated:null,treeContext:null,retryLane:0};function mc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cy(t,e,n){var r=e.pendingProps,i=we.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return ac(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ul(a,r,0,null),t=Er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mc(n),e.memoizedState=pc,t):Ch(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xE(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Bn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Bn(l,s):(s=Er(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?mc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=pc,r}return s=t.child,t=s.sibling,r=Bn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ch(t,e){return e=ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bo(t,e,n,r){return r!==null&&ph(r),vi(e,t.child,null,n),t=Ch(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xE(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=yu(Error(L(422))),Bo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ul({mode:"visible",children:r.children},i,0,null),s=Er(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vi(e,t.child,null,a),e.child.memoizedState=mc(a),e.memoizedState=pc,s);if(!(e.mode&1))return Bo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=yu(s,r,void 0),Bo(t,e,a,r)}if(l=(a&t.childLanes)!==0,ft||l){if(r=Fe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),Ht(r,t,i,-1))}return bh(),r=yu(Error(L(421))),Bo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=LE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=Fn(i.nextSibling),Tt=e,ye=!0,Bt=null,t!==null&&(Pt[Nt++]=dn,Pt[Nt++]=fn,Pt[Nt++]=Sr,dn=t.id,fn=t.overflow,Sr=e),e=Ch(e,r.children),e.flags|=4096,e)}function _p(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lc(t.return,e,n)}function vu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ry(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,n,e);else if(t.tag===19)_p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),vu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}vu(e,!0,n,null,s);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Bn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SE(t,e,n){switch(e.tag){case 3:ky(e),yi();break;case 5:ty(e);break;case 1:mt(e.type)&&xa(e);break;case 4:wh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(ka,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?Cy(t,e,n):(de(we,we.current&1),t=vn(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ry(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,Sy(t,e,n)}return vn(t,e,n)}var Py,gc,Ny,Vy;Py=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gc=function(){};Ny=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yr(Jt.current);var s=null;switch(n){case"input":i=Fu(t,i),r=Fu(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=Uu(t,i),r=Uu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ta)}$u(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ps.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ps.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Vy=function(t,e,n,r){n!==r&&(e.flags|=4)};function is(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AE(t,e,n){var r=e.pendingProps;switch(fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return mt(e.type)&&Ia(),Je(e),null;case 3:return r=e.stateNode,_i(),ge(pt),ge(rt),Th(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bt!==null&&(xc(Bt),Bt=null))),gc(t,e),Je(e),null;case 5:Eh(e);var i=yr(Bs.current);if(n=e.type,t!==null&&e.stateNode!=null)Ny(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Je(e),null}if(t=yr(Jt.current),zo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[zs]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<hs.length;i++)me(hs[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Cf(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Pf(r,s),me("invalid",r)}$u(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,l,t),i=["children",""+l]):Ps.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&me("scroll",r)}switch(n){case"input":No(r),Rf(r,s,!0);break;case"textarea":No(r),Nf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ta)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=og(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Yt]=e,t[zs]=r,Py(t,e,!1,!1),e.stateNode=t;e:{switch(a=Hu(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<hs.length;i++)me(hs[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Cf(t,r),i=Fu(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),me("invalid",t);break;case"textarea":Pf(t,r),i=Uu(t,r),me("invalid",t);break;default:i=r}$u(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?ug(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ag(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ns(t,u):typeof u=="number"&&Ns(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ps.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Jc(t,s,u,a))}switch(n){case"input":No(t),Rf(t,r,!1);break;case"textarea":No(t),Nf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?li(t,!!r.multiple,s,!1):r.defaultValue!=null&&li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)Vy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=yr(Bs.current),yr(Jt.current),zo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return Je(e),null;case 13:if(ge(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&wt!==null&&e.mode&1&&!(e.flags&128))Yg(),yi(),e.flags|=98560,s=!1;else if(s=zo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Yt]=e}else yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Bt!==null&&(xc(Bt),Bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?De===0&&(De=3):bh())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return _i(),gc(t,e),t===null&&Fs(e.stateNode.containerInfo),Je(e),null;case 10:return yh(e.type._context),Je(e),null;case 17:return mt(e.type)&&Ia(),Je(e),null;case 19:if(ge(we),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)is(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Pa(t),a!==null){for(e.flags|=128,is(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Ei&&(e.flags|=128,r=!0,is(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pa(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ye)return Je(e),null}else 2*Ce()-s.renderingStartTime>Ei&&n!==1073741824&&(e.flags|=128,r=!0,is(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return Dh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function kE(t,e){switch(fh(e),e.tag){case 1:return mt(e.type)&&Ia(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _i(),ge(pt),ge(rt),Th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(ge(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(we),null;case 4:return _i(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Dh(),null;case 24:return null;default:return null}}var $o=!1,tt=!1,CE=typeof WeakSet=="function"?WeakSet:Set,$=null;function oi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function yc(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var wp=!1;function RE(t,e){if(ec=_a,t=Lg(),hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,g=t,y=null;t:for(;;){for(var A;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==s||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(A=g.firstChild)!==null;)y=g,g=A;for(;;){if(g===t)break t;if(y===n&&++h===i&&(l=a),y===s&&++f===r&&(u=a),(A=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(tc={focusedElem:t,selectionRange:n},_a=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var V=P.memoizedProps,b=P.memoizedState,x=e.stateNode,_=x.getSnapshotBeforeUpdate(e.elementType===e.type?V:zt(e.type,V),b);x.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(D){Ae(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=wp,wp=!1,P}function Ts(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yc(e,n,s)}i=i.next}while(i!==r)}}function al(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dy(t){var e=t.alternate;e!==null&&(t.alternate=null,Dy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[zs],delete e[ic],delete e[hE],delete e[dE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function by(t){return t.tag===5||t.tag===3||t.tag===4}function Ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||by(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _c(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ta));else if(r!==4&&(t=t.child,t!==null))for(_c(t,e,n),t=t.sibling;t!==null;)_c(t,e,n),t=t.sibling}function wc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wc(t,e,n),t=t.sibling;t!==null;)wc(t,e,n),t=t.sibling}var Be=null,Ut=!1;function kn(t,e,n){for(n=n.child;n!==null;)Oy(t,e,n),n=n.sibling}function Oy(t,e,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Za,n)}catch{}switch(n.tag){case 5:tt||oi(n,e);case 6:var r=Be,i=Ut;Be=null,kn(t,e,n),Be=r,Ut=i,Be!==null&&(Ut?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ut?(t=Be,n=n.stateNode,t.nodeType===8?hu(t.parentNode,n):t.nodeType===1&&hu(t,n),Os(t)):hu(Be,n.stateNode));break;case 4:r=Be,i=Ut,Be=n.stateNode.containerInfo,Ut=!0,kn(t,e,n),Be=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&yc(n,e,a),i=i.next}while(i!==r)}kn(t,e,n);break;case 1:if(!tt&&(oi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}kn(t,e,n);break;case 21:kn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,kn(t,e,n),tt=r):kn(t,e,n);break;default:kn(t,e,n)}}function Tp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CE),e.forEach(function(r){var i=FE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ut=!1;break e;case 3:Be=l.stateNode.containerInfo,Ut=!0;break e;case 4:Be=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(Be===null)throw Error(L(160));Oy(s,a,i),Be=null,Ut=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ae(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)My(e,t),e=e.sibling}function My(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(e,t),Qt(t),r&4){try{Ts(3,t,t.return),al(3,t)}catch(V){Ae(t,t.return,V)}try{Ts(5,t,t.return)}catch(V){Ae(t,t.return,V)}}break;case 1:jt(e,t),Qt(t),r&512&&n!==null&&oi(n,n.return);break;case 5:if(jt(e,t),Qt(t),r&512&&n!==null&&oi(n,n.return),t.flags&32){var i=t.stateNode;try{Ns(i,"")}catch(V){Ae(t,t.return,V)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ig(i,s),Hu(l,a);var h=Hu(l,s);for(a=0;a<u.length;a+=2){var f=u[a],g=u[a+1];f==="style"?ug(i,g):f==="dangerouslySetInnerHTML"?ag(i,g):f==="children"?Ns(i,g):Jc(i,f,g,h)}switch(l){case"input":ju(i,s);break;case"textarea":sg(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?li(i,!!s.multiple,A,!1):y!==!!s.multiple&&(s.defaultValue!=null?li(i,!!s.multiple,s.defaultValue,!0):li(i,!!s.multiple,s.multiple?[]:"",!1))}i[zs]=s}catch(V){Ae(t,t.return,V)}}break;case 6:if(jt(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(V){Ae(t,t.return,V)}}break;case 3:if(jt(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Os(e.containerInfo)}catch(V){Ae(t,t.return,V)}break;case 4:jt(e,t),Qt(t);break;case 13:jt(e,t),Qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nh=Ce())),r&4&&Tp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(h=tt)||f,jt(e,t),tt=h):jt(e,t),Qt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(g=$=f;$!==null;){switch(y=$,A=y.child,y.tag){case 0:case 11:case 14:case 15:Ts(4,y,y.return);break;case 1:oi(y,y.return);var P=y.stateNode;if(typeof P.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(V){Ae(r,n,V)}}break;case 5:oi(y,y.return);break;case 22:if(y.memoizedState!==null){xp(g);continue}}A!==null?(A.return=y,$=A):xp(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=lg("display",a))}catch(V){Ae(t,t.return,V)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(V){Ae(t,t.return,V)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:jt(e,t),Qt(t),r&4&&Tp(t);break;case 21:break;default:jt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(by(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ns(i,""),r.flags&=-33);var s=Ep(t);wc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ep(t);_c(t,l,a);break;default:throw Error(L(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PE(t,e,n){$=t,Ly(t)}function Ly(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||$o;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=$o;var h=tt;if($o=a,(tt=u)&&!h)for($=i;$!==null;)a=$,u=a.child,a.tag===22&&a.memoizedState!==null?Sp(i):u!==null?(u.return=a,$=u):Sp(i);for(;s!==null;)$=s,Ly(s),s=s.sibling;$=i,$o=l,tt=h}Ip(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Ip(t)}}function Ip(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||al(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ap(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ap(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Os(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}tt||e.flags&512&&vc(e)}catch(y){Ae(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function xp(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Sp(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{al(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{vc(e)}catch(u){Ae(e,s,u)}break;case 5:var a=e.return;try{vc(e)}catch(u){Ae(e,a,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var NE=Math.ceil,Da=In.ReactCurrentDispatcher,Rh=In.ReactCurrentOwner,Dt=In.ReactCurrentBatchConfig,ie=0,Fe=null,Pe=null,qe=0,_t=0,ai=er(0),De=0,Ws=null,kr=0,ll=0,Ph=0,Is=null,ht=null,Nh=0,Ei=1/0,cn=null,ba=!1,Ec=null,zn=null,Ho=!1,Dn=null,Oa=0,xs=0,Tc=null,sa=-1,oa=0;function at(){return ie&6?Ce():sa!==-1?sa:sa=Ce()}function Un(t){return t.mode&1?ie&2&&qe!==0?qe&-qe:pE.transition!==null?(oa===0&&(oa=Eg()),oa):(t=le,t!==0||(t=window.event,t=t===void 0?16:Cg(t.type)),t):1}function Ht(t,e,n,r){if(50<xs)throw xs=0,Tc=null,Error(L(185));to(t,n,r),(!(ie&2)||t!==Fe)&&(t===Fe&&(!(ie&2)&&(ll|=n),De===4&&Nn(t,qe)),gt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Ei=Ce()+500,il&&tr()))}function gt(t,e){var n=t.callbackNode;pw(t,e);var r=va(t,t===Fe?qe:0);if(r===0)n!==null&&bf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bf(n),e===1)t.tag===0?fE(Ap.bind(null,t)):Kg(Ap.bind(null,t)),uE(function(){!(ie&6)&&tr()}),n=null;else{switch(Tg(r)){case 1:n=rh;break;case 4:n=_g;break;case 16:n=ya;break;case 536870912:n=wg;break;default:n=ya}n=qy(n,Fy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fy(t,e){if(sa=-1,oa=0,ie&6)throw Error(L(327));var n=t.callbackNode;if(fi()&&t.callbackNode!==n)return null;var r=va(t,t===Fe?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ma(t,r);else{e=r;var i=ie;ie|=2;var s=zy();(Fe!==t||qe!==e)&&(cn=null,Ei=Ce()+500,wr(t,e));do try{bE();break}catch(l){jy(t,l)}while(!0);gh(),Da.current=s,ie=i,Pe!==null?e=0:(Fe=null,qe=0,e=De)}if(e!==0){if(e===2&&(i=Gu(t),i!==0&&(r=i,e=Ic(t,i))),e===1)throw n=Ws,wr(t,0),Nn(t,r),gt(t,Ce()),n;if(e===6)Nn(t,r);else{if(i=t.current.alternate,!(r&30)&&!VE(i)&&(e=Ma(t,r),e===2&&(s=Gu(t),s!==0&&(r=s,e=Ic(t,s))),e===1))throw n=Ws,wr(t,0),Nn(t,r),gt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:fr(t,ht,cn);break;case 3:if(Nn(t,r),(r&130023424)===r&&(e=Nh+500-Ce(),10<e)){if(va(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rc(fr.bind(null,t,ht,cn),e);break}fr(t,ht,cn);break;case 4:if(Nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-$t(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NE(r/1960))-r,10<r){t.timeoutHandle=rc(fr.bind(null,t,ht,cn),r);break}fr(t,ht,cn);break;case 5:fr(t,ht,cn);break;default:throw Error(L(329))}}}return gt(t,Ce()),t.callbackNode===n?Fy.bind(null,t):null}function Ic(t,e){var n=Is;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Ma(t,e),t!==2&&(e=ht,ht=n,e!==null&&xc(e)),t}function xc(t){ht===null?ht=t:ht.push.apply(ht,t)}function VE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nn(t,e){for(e&=~Ph,e&=~ll,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Ap(t){if(ie&6)throw Error(L(327));fi();var e=va(t,0);if(!(e&1))return gt(t,Ce()),null;var n=Ma(t,e);if(t.tag!==0&&n===2){var r=Gu(t);r!==0&&(e=r,n=Ic(t,r))}if(n===1)throw n=Ws,wr(t,0),Nn(t,e),gt(t,Ce()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,ht,cn),gt(t,Ce()),null}function Vh(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Ei=Ce()+500,il&&tr())}}function Cr(t){Dn!==null&&Dn.tag===0&&!(ie&6)&&fi();var e=ie;ie|=1;var n=Dt.transition,r=le;try{if(Dt.transition=null,le=1,t)return t()}finally{le=r,Dt.transition=n,ie=e,!(ie&6)&&tr()}}function Dh(){_t=ai.current,ge(ai)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lE(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(fh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ia();break;case 3:_i(),ge(pt),ge(rt),Th();break;case 5:Eh(r);break;case 4:_i();break;case 13:ge(we);break;case 19:ge(we);break;case 10:yh(r.type._context);break;case 22:case 23:Dh()}n=n.return}if(Fe=t,Pe=t=Bn(t.current,null),qe=_t=e,De=0,Ws=null,Ph=ll=kr=0,ht=Is=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}gr=null}return t}function jy(t,e){do{var n=Pe;try{if(gh(),na.current=Va,Na){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Na=!1}if(Ar=0,Le=Ne=Ee=null,Es=!1,$s=0,Rh.current=null,n===null||n.return===null){De=1,Ws=e,Pe=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=fp(a);if(A!==null){A.flags&=-257,pp(A,a,l,s,e),A.mode&1&&dp(s,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var V=new Set;V.add(u),e.updateQueue=V}else P.add(u);break e}else{if(!(e&1)){dp(s,h,e),bh();break e}u=Error(L(426))}}else if(ye&&l.mode&1){var b=fp(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),pp(b,a,l,s,e),ph(wi(u,l));break e}}s=u=wi(u,l),De!==4&&(De=2),Is===null?Is=[s]:Is.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=Ty(s,u,e);op(s,x);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(zn===null||!zn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Iy(s,l,e);op(s,D);break e}}s=s.return}while(s!==null)}By(n)}catch(z){e=z,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function zy(){var t=Da.current;return Da.current=Va,t===null?Va:t}function bh(){(De===0||De===3||De===2)&&(De=4),Fe===null||!(kr&268435455)&&!(ll&268435455)||Nn(Fe,qe)}function Ma(t,e){var n=ie;ie|=2;var r=zy();(Fe!==t||qe!==e)&&(cn=null,wr(t,e));do try{DE();break}catch(i){jy(t,i)}while(!0);if(gh(),ie=n,Da.current=r,Pe!==null)throw Error(L(261));return Fe=null,qe=0,De}function DE(){for(;Pe!==null;)Uy(Pe)}function bE(){for(;Pe!==null&&!sw();)Uy(Pe)}function Uy(t){var e=Hy(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?By(t):Pe=e,Rh.current=null}function By(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kE(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Pe=null;return}}else if(n=AE(n,e,_t),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);De===0&&(De=5)}function fr(t,e,n){var r=le,i=Dt.transition;try{Dt.transition=null,le=1,OE(t,e,n,r)}finally{Dt.transition=i,le=r}return null}function OE(t,e,n,r){do fi();while(Dn!==null);if(ie&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mw(t,s),t===Fe&&(Pe=Fe=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,qy(ya,function(){return fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var a=le;le=1;var l=ie;ie|=4,Rh.current=null,RE(t,n),My(n,t),tE(tc),_a=!!ec,tc=ec=null,t.current=n,PE(n),ow(),ie=l,le=a,Dt.transition=s}else t.current=n;if(Ho&&(Ho=!1,Dn=t,Oa=i),s=t.pendingLanes,s===0&&(zn=null),uw(n.stateNode),gt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ba)throw ba=!1,t=Ec,Ec=null,t;return Oa&1&&t.tag!==0&&fi(),s=t.pendingLanes,s&1?t===Tc?xs++:(xs=0,Tc=t):xs=0,tr(),null}function fi(){if(Dn!==null){var t=Tg(Oa),e=Dt.transition,n=le;try{if(Dt.transition=null,le=16>t?16:t,Dn===null)var r=!1;else{if(t=Dn,Dn=null,Oa=0,ie&6)throw Error(L(331));var i=ie;for(ie|=4,$=t.current;$!==null;){var s=$,a=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Ts(8,f,s)}var g=f.child;if(g!==null)g.return=f,$=g;else for(;$!==null;){f=$;var y=f.sibling,A=f.return;if(Dy(f),f===h){$=null;break}if(y!==null){y.return=A,$=y;break}$=A}}}var P=s.alternate;if(P!==null){var V=P.child;if(V!==null){P.child=null;do{var b=V.sibling;V.sibling=null,V=b}while(V!==null)}}$=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,$=a;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ts(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,$=x;break e}$=s.return}}var _=t.current;for($=_;$!==null;){a=$;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,$=S;else e:for(a=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:al(9,l)}}catch(z){Ae(l,l.return,z)}if(l===a){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(ie=i,tr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Za,t)}catch{}r=!0}return r}finally{le=n,Dt.transition=e}}return!1}function kp(t,e,n){e=wi(n,e),e=Ty(t,e,1),t=jn(t,e,1),e=at(),t!==null&&(to(t,1,e),gt(t,e))}function Ae(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){t=wi(n,t),t=Iy(e,t,1),e=jn(e,t,1),t=at(),e!==null&&(to(e,1,t),gt(e,t));break}}e=e.return}}function ME(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(qe&n)===n&&(De===4||De===3&&(qe&130023424)===qe&&500>Ce()-Nh?wr(t,0):Ph|=n),gt(t,e)}function $y(t,e){e===0&&(t.mode&1?(e=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):e=1);var n=at();t=yn(t,e),t!==null&&(to(t,e,n),gt(t,n))}function LE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$y(t,n)}function FE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),$y(t,n)}var Hy;Hy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,SE(t,e,n);ft=!!(t.flags&131072)}else ft=!1,ye&&e.flags&1048576&&Qg(e,Aa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ia(t,e),t=e.pendingProps;var i=gi(e,rt.current);di(e,n),i=xh(null,e,r,t,i,n);var s=Sh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,xa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_h(e),i.updater=ol,e.stateNode=i,i._reactInternals=e,cc(e,r,t,n),e=fc(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&dh(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ia(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zE(r),t=zt(r,t),i){case 0:e=dc(null,e,r,t,n);break e;case 1:e=yp(null,e,r,t,n);break e;case 11:e=mp(null,e,r,t,n);break e;case 14:e=gp(null,e,r,zt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),dc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),yp(t,e,r,i,n);case 3:e:{if(ky(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ey(t,e),Ra(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=wi(Error(L(423)),e),e=vp(t,e,r,n,i);break e}else if(r!==i){i=wi(Error(L(424)),e),e=vp(t,e,r,n,i);break e}else for(wt=Fn(e.stateNode.containerInfo.firstChild),Tt=e,ye=!0,Bt=null,n=Jg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yi(),r===i){e=vn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return ty(e),t===null&&ac(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,nc(r,i)?a=null:s!==null&&nc(r,s)&&(e.flags|=32),Ay(t,e),ot(t,e,a,n),e.child;case 6:return t===null&&ac(e),null;case 13:return Cy(t,e,n);case 4:return wh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vi(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),mp(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,de(ka,r._currentValue),r._currentValue=a,s!==null)if(Wt(s.value,a)){if(s.children===i.children&&!pt.current){e=vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),lc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(L(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),lc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,di(e,n),i=bt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),gp(t,e,r,i,n);case 15:return xy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),ia(t,e),e.tag=1,mt(r)?(t=!0,xa(e)):t=!1,di(e,n),Ey(e,r,i),cc(e,r,i,n),fc(null,e,r,!0,t,n);case 19:return Ry(t,e,n);case 22:return Sy(t,e,n)}throw Error(L(156,e.tag))};function qy(t,e){return vg(t,e)}function jE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new jE(t,e,n,r)}function Oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zE(t){if(typeof t=="function")return Oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eh)return 11;if(t===th)return 14}return 2}function Bn(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function aa(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Oh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Xr:return Er(n.children,i,s,e);case Zc:a=8,i|=8;break;case bu:return t=Vt(12,n,e,i|2),t.elementType=bu,t.lanes=s,t;case Ou:return t=Vt(13,n,e,i),t.elementType=Ou,t.lanes=s,t;case Mu:return t=Vt(19,n,e,i),t.elementType=Mu,t.lanes=s,t;case tg:return ul(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zm:a=10;break e;case eg:a=9;break e;case eh:a=11;break e;case th:a=14;break e;case Cn:a=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Vt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Er(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function ul(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=tg,t.lanes=n,t.stateNode={isHidden:!1},t}function _u(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function wu(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mh(t,e,n,r,i,s,a,l,u){return t=new UE(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_h(s),t}function BE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Wy(t){if(!t)return Qn;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(mt(n))return Wg(t,n,e)}return e}function Ky(t,e,n,r,i,s,a,l,u){return t=Mh(n,r,!0,t,i,s,a,l,u),t.context=Wy(null),n=t.current,r=at(),i=Un(n),s=pn(r,i),s.callback=e??null,jn(n,s,i),t.current.lanes=i,to(t,i,r),gt(t,r),t}function cl(t,e,n,r){var i=e.current,s=at(),a=Un(i);return n=Wy(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jn(i,e,a),t!==null&&(Ht(t,i,a,s),ta(t,i,a)),a}function La(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lh(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function $E(){return null}var Qy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fh(t){this._internalRoot=t}hl.prototype.render=Fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));cl(t,e,null,null)};hl.prototype.unmount=Fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){cl(null,t,null,null)}),e[gn]=null}};function hl(t){this._internalRoot=t}hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pn.length&&e!==0&&e<Pn[n].priority;n++);Pn.splice(n,0,t),n===0&&kg(t)}};function jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function HE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=La(a);s.call(h)}}var a=Ky(e,r,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=a,t[gn]=a.current,Fs(t.nodeType===8?t.parentNode:t),Cr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=La(u);l.call(h)}}var u=Mh(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=u,t[gn]=u.current,Fs(t.nodeType===8?t.parentNode:t),Cr(function(){cl(e,u,n,r)}),u}function fl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=La(a);l.call(u)}}cl(e,a,t,i)}else a=HE(n,e,t,i,r);return La(a)}Ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=cs(e.pendingLanes);n!==0&&(ih(e,n|1),gt(e,Ce()),!(ie&6)&&(Ei=Ce()+500,tr()))}break;case 13:Cr(function(){var r=yn(t,1);if(r!==null){var i=at();Ht(r,t,1,i)}}),Lh(t,1)}};sh=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=at();Ht(e,t,134217728,n)}Lh(t,134217728)}};xg=function(t){if(t.tag===13){var e=Un(t),n=yn(t,e);if(n!==null){var r=at();Ht(n,t,e,r)}Lh(t,e)}};Sg=function(){return le};Ag=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Wu=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=rl(r);if(!i)throw Error(L(90));rg(r),ju(r,i)}}}break;case"textarea":sg(t,n);break;case"select":e=n.value,e!=null&&li(t,!!n.multiple,e,!1)}};dg=Vh;fg=Cr;var qE={usingClientEntryPoint:!1,Events:[ro,ti,rl,cg,hg,Vh]},ss={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WE={bundleType:ss.bundleType,version:ss.version,rendererPackageName:ss.rendererPackageName,rendererConfig:ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gg(t),t===null?null:t.stateNode},findFiberByHostInstance:ss.findFiberByHostInstance||$E,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{Za=qo.inject(WE),Xt=qo}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(e))throw Error(L(200));return BE(t,e,null,n)};At.createRoot=function(t,e){if(!jh(t))throw Error(L(299));var n=!1,r="",i=Qy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mh(t,1,!1,null,null,n,!1,r,i),t[gn]=e.current,Fs(t.nodeType===8?t.parentNode:t),new Fh(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=gg(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return Cr(t)};At.hydrate=function(t,e,n){if(!dl(e))throw Error(L(200));return fl(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!jh(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Qy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ky(e,null,t,1,n??null,i,!1,s,a),t[gn]=e.current,Fs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hl(e)};At.render=function(t,e,n){if(!dl(e))throw Error(L(200));return fl(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!dl(t))throw Error(L(40));return t._reactRootContainer?(Cr(function(){fl(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1};At.unstable_batchedUpdates=Vh;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dl(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return fl(t,e,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function Gy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gy)}catch(t){console.error(t)}}Gy(),Gm.exports=At;var KE=Gm.exports,Pp=KE;Vu.createRoot=Pp.createRoot,Vu.hydrateRoot=Pp.hydrateRoot;var Np={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Xy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,A=h&63;u||(A=64,a||(y=64)),r.push(n[f],n[g],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new GE;const y=s<<2|l>>4;if(r.push(y),h!==64){const A=l<<4&240|h>>2;if(r.push(A),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YE=function(t){const e=Yy(t);return Xy.encodeByteArray(e,!0)},Fa=function(t){return YE(t).replace(/\./g,"")},XE=function(t){try{return Xy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=()=>JE().__FIREBASE_DEFAULTS__,eT=()=>{if(typeof process>"u"||typeof Np>"u")return;const t=Np.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&XE(t[1]);return e&&JSON.parse(e)},zh=()=>{try{return ZE()||eT()||tT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nT=t=>{var e,n;return(n=(e=zh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rT=t=>{const e=nT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jy=()=>{var t;return(t=zh())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fa(JSON.stringify(n)),Fa(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aT(){var t;const e=(t=zh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uT(){return!aT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zy(){try{return typeof indexedDB=="object"}catch{return!1}}function ev(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function cT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="FirebaseError";class nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hT,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pl.prototype.create)}}class pl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?dT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new nr(i,l,r)}}function dT(t,e){return t.replace(fT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fT=/\{\$([^}]+)}/g;function ja(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Vp(s)&&Vp(a)){if(!ja(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=1e3,mT=2,gT=4*60*60*1e3,yT=.5;function Dp(t,e=pT,n=mT){const r=e*Math.pow(n,t),i=Math.round(yT*r*(Math.random()-.5)*2);return Math.min(gT,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wT(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_T(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _T(t){return t===pr?void 0:t}function wT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const TT={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},IT=re.INFO,xT={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},ST=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uh{constructor(e){this.name=e,this._logLevel=IT,this._logHandler=ST,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const AT=(t,e)=>e.some(n=>t instanceof n);let bp,Op;function kT(){return bp||(bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CT(){return Op||(Op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tv=new WeakMap,Sc=new WeakMap,nv=new WeakMap,Eu=new WeakMap,Bh=new WeakMap;function RT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n($n(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&tv.set(n,t)}).catch(()=>{}),Bh.set(e,t),e}function PT(t){if(Sc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Sc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NT(t){Ac=t(Ac)}function VT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tu(this),e,...n);return nv.set(r,e.sort?e.sort():[e]),$n(r)}:CT().includes(t)?function(...e){return t.apply(Tu(this),e),$n(tv.get(this))}:function(...e){return $n(t.apply(Tu(this),e))}}function DT(t){return typeof t=="function"?VT(t):(t instanceof IDBTransaction&&PT(t),AT(t,kT())?new Proxy(t,Ac):t)}function $n(t){if(t instanceof IDBRequest)return RT(t);if(Eu.has(t))return Eu.get(t);const e=DT(t);return e!==t&&(Eu.set(t,e),Bh.set(e,t)),e}const Tu=t=>Bh.get(t);function rv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=$n(a);return r&&a.addEventListener("upgradeneeded",u=>{r($n(a.result),u.oldVersion,u.newVersion,$n(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const bT=["get","getKey","getAll","getAllKeys","count"],OT=["put","add","delete","clear"],Iu=new Map;function Mp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Iu.get(e))return Iu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bT.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Iu.set(e,s),s}NT(t=>({...t,get:(e,n,r)=>Mp(e,n)||t.get(e,n,r),has:(e,n)=>!!Mp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",Lp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Uh("@firebase/app"),FT="@firebase/app-compat",jT="@firebase/analytics-compat",zT="@firebase/analytics",UT="@firebase/app-check-compat",BT="@firebase/app-check",$T="@firebase/auth",HT="@firebase/auth-compat",qT="@firebase/database",WT="@firebase/data-connect",KT="@firebase/database-compat",QT="@firebase/functions",GT="@firebase/functions-compat",YT="@firebase/installations",XT="@firebase/installations-compat",JT="@firebase/messaging",ZT="@firebase/messaging-compat",e1="@firebase/performance",t1="@firebase/performance-compat",n1="@firebase/remote-config",r1="@firebase/remote-config-compat",i1="@firebase/storage",s1="@firebase/storage-compat",o1="@firebase/firestore",a1="@firebase/vertexai-preview",l1="@firebase/firestore-compat",u1="firebase",c1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="[DEFAULT]",h1={[kc]:"fire-core",[FT]:"fire-core-compat",[zT]:"fire-analytics",[jT]:"fire-analytics-compat",[BT]:"fire-app-check",[UT]:"fire-app-check-compat",[$T]:"fire-auth",[HT]:"fire-auth-compat",[qT]:"fire-rtdb",[WT]:"fire-data-connect",[KT]:"fire-rtdb-compat",[QT]:"fire-fn",[GT]:"fire-fn-compat",[YT]:"fire-iid",[XT]:"fire-iid-compat",[JT]:"fire-fcm",[ZT]:"fire-fcm-compat",[e1]:"fire-perf",[t1]:"fire-perf-compat",[n1]:"fire-rc",[r1]:"fire-rc-compat",[i1]:"fire-gcs",[s1]:"fire-gcs-compat",[o1]:"fire-fst",[l1]:"fire-fst-compat",[a1]:"fire-vertex","fire-js":"fire-js",[u1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map,d1=new Map,Rc=new Map;function Fp(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gn(t){const e=t.name;if(Rc.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of za.values())Fp(n,t);for(const n of d1.values())Fp(n,t);return!0}function so(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hn=new pl("app","Firebase",f1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=c1;function iv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Hn.create("bad-app-name",{appName:String(i)});if(n||(n=Jy()),!n)throw Hn.create("no-options");const s=za.get(i);if(s){if(ja(n,s.options)&&ja(r,s.config))return s;throw Hn.create("duplicate-app",{appName:i})}const a=new ET(i);for(const u of Rc.values())a.addComponent(u);const l=new p1(n,r,a);return za.set(i,l),l}function sv(t=Cc){const e=za.get(t);if(!e&&t===Cc&&Jy())return iv();if(!e)throw Hn.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let i=(r=h1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(l.join(" "));return}Gn(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="firebase-heartbeat-database",y1=1,Ks="firebase-heartbeat-store";let xu=null;function ov(){return xu||(xu=rv(g1,y1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ks)}catch(n){console.warn(n)}}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),xu}async function v1(t){try{const n=(await ov()).transaction(Ks),r=await n.objectStore(Ks).get(av(t));return await n.done,r}catch(e){if(e instanceof nr)wn.warn(e.message);else{const n=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function jp(t,e){try{const r=(await ov()).transaction(Ks,"readwrite");await r.objectStore(Ks).put(e,av(t)),await r.done}catch(n){if(n instanceof nr)wn.warn(n.message);else{const r=Hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function av(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=1024,w1=30*24*60*60*1e3;class E1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new I1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=w1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zp(),{heartbeatsToSend:r,unsentEntries:i}=T1(this._heartbeatsCache.heartbeats),s=Fa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function zp(){return new Date().toISOString().substring(0,10)}function T1(t,e=_1){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Up(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Up(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class I1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zy()?ev().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await v1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Up(t){return Fa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t){Gn(new _n("platform-logger",e=>new MT(e),"PRIVATE")),Gn(new _n("heartbeat",e=>new E1(e),"PRIVATE")),Zt(kc,Lp,t),Zt(kc,Lp,"esm2017"),Zt("fire-js","")}x1("");var S1="firebase",A1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(S1,A1,"app");var Bp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,lv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,k,C){for(var E=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)E[ct-2]=arguments[ct];return m.prototype[k].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var k=0;16>k;++k)T[k]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(k=0;16>k;++k)T[k]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],k=w.g[2];var C=w.g[3],E=m+(C^v&(k^C))+T[0]+3614090360&4294967295;m=v+(E<<7&4294967295|E>>>25),E=C+(k^m&(v^k))+T[1]+3905402710&4294967295,C=m+(E<<12&4294967295|E>>>20),E=k+(v^C&(m^v))+T[2]+606105819&4294967295,k=C+(E<<17&4294967295|E>>>15),E=v+(m^k&(C^m))+T[3]+3250441966&4294967295,v=k+(E<<22&4294967295|E>>>10),E=m+(C^v&(k^C))+T[4]+4118548399&4294967295,m=v+(E<<7&4294967295|E>>>25),E=C+(k^m&(v^k))+T[5]+1200080426&4294967295,C=m+(E<<12&4294967295|E>>>20),E=k+(v^C&(m^v))+T[6]+2821735955&4294967295,k=C+(E<<17&4294967295|E>>>15),E=v+(m^k&(C^m))+T[7]+4249261313&4294967295,v=k+(E<<22&4294967295|E>>>10),E=m+(C^v&(k^C))+T[8]+1770035416&4294967295,m=v+(E<<7&4294967295|E>>>25),E=C+(k^m&(v^k))+T[9]+2336552879&4294967295,C=m+(E<<12&4294967295|E>>>20),E=k+(v^C&(m^v))+T[10]+4294925233&4294967295,k=C+(E<<17&4294967295|E>>>15),E=v+(m^k&(C^m))+T[11]+2304563134&4294967295,v=k+(E<<22&4294967295|E>>>10),E=m+(C^v&(k^C))+T[12]+1804603682&4294967295,m=v+(E<<7&4294967295|E>>>25),E=C+(k^m&(v^k))+T[13]+4254626195&4294967295,C=m+(E<<12&4294967295|E>>>20),E=k+(v^C&(m^v))+T[14]+2792965006&4294967295,k=C+(E<<17&4294967295|E>>>15),E=v+(m^k&(C^m))+T[15]+1236535329&4294967295,v=k+(E<<22&4294967295|E>>>10),E=m+(k^C&(v^k))+T[1]+4129170786&4294967295,m=v+(E<<5&4294967295|E>>>27),E=C+(v^k&(m^v))+T[6]+3225465664&4294967295,C=m+(E<<9&4294967295|E>>>23),E=k+(m^v&(C^m))+T[11]+643717713&4294967295,k=C+(E<<14&4294967295|E>>>18),E=v+(C^m&(k^C))+T[0]+3921069994&4294967295,v=k+(E<<20&4294967295|E>>>12),E=m+(k^C&(v^k))+T[5]+3593408605&4294967295,m=v+(E<<5&4294967295|E>>>27),E=C+(v^k&(m^v))+T[10]+38016083&4294967295,C=m+(E<<9&4294967295|E>>>23),E=k+(m^v&(C^m))+T[15]+3634488961&4294967295,k=C+(E<<14&4294967295|E>>>18),E=v+(C^m&(k^C))+T[4]+3889429448&4294967295,v=k+(E<<20&4294967295|E>>>12),E=m+(k^C&(v^k))+T[9]+568446438&4294967295,m=v+(E<<5&4294967295|E>>>27),E=C+(v^k&(m^v))+T[14]+3275163606&4294967295,C=m+(E<<9&4294967295|E>>>23),E=k+(m^v&(C^m))+T[3]+4107603335&4294967295,k=C+(E<<14&4294967295|E>>>18),E=v+(C^m&(k^C))+T[8]+1163531501&4294967295,v=k+(E<<20&4294967295|E>>>12),E=m+(k^C&(v^k))+T[13]+2850285829&4294967295,m=v+(E<<5&4294967295|E>>>27),E=C+(v^k&(m^v))+T[2]+4243563512&4294967295,C=m+(E<<9&4294967295|E>>>23),E=k+(m^v&(C^m))+T[7]+1735328473&4294967295,k=C+(E<<14&4294967295|E>>>18),E=v+(C^m&(k^C))+T[12]+2368359562&4294967295,v=k+(E<<20&4294967295|E>>>12),E=m+(v^k^C)+T[5]+4294588738&4294967295,m=v+(E<<4&4294967295|E>>>28),E=C+(m^v^k)+T[8]+2272392833&4294967295,C=m+(E<<11&4294967295|E>>>21),E=k+(C^m^v)+T[11]+1839030562&4294967295,k=C+(E<<16&4294967295|E>>>16),E=v+(k^C^m)+T[14]+4259657740&4294967295,v=k+(E<<23&4294967295|E>>>9),E=m+(v^k^C)+T[1]+2763975236&4294967295,m=v+(E<<4&4294967295|E>>>28),E=C+(m^v^k)+T[4]+1272893353&4294967295,C=m+(E<<11&4294967295|E>>>21),E=k+(C^m^v)+T[7]+4139469664&4294967295,k=C+(E<<16&4294967295|E>>>16),E=v+(k^C^m)+T[10]+3200236656&4294967295,v=k+(E<<23&4294967295|E>>>9),E=m+(v^k^C)+T[13]+681279174&4294967295,m=v+(E<<4&4294967295|E>>>28),E=C+(m^v^k)+T[0]+3936430074&4294967295,C=m+(E<<11&4294967295|E>>>21),E=k+(C^m^v)+T[3]+3572445317&4294967295,k=C+(E<<16&4294967295|E>>>16),E=v+(k^C^m)+T[6]+76029189&4294967295,v=k+(E<<23&4294967295|E>>>9),E=m+(v^k^C)+T[9]+3654602809&4294967295,m=v+(E<<4&4294967295|E>>>28),E=C+(m^v^k)+T[12]+3873151461&4294967295,C=m+(E<<11&4294967295|E>>>21),E=k+(C^m^v)+T[15]+530742520&4294967295,k=C+(E<<16&4294967295|E>>>16),E=v+(k^C^m)+T[2]+3299628645&4294967295,v=k+(E<<23&4294967295|E>>>9),E=m+(k^(v|~C))+T[0]+4096336452&4294967295,m=v+(E<<6&4294967295|E>>>26),E=C+(v^(m|~k))+T[7]+1126891415&4294967295,C=m+(E<<10&4294967295|E>>>22),E=k+(m^(C|~v))+T[14]+2878612391&4294967295,k=C+(E<<15&4294967295|E>>>17),E=v+(C^(k|~m))+T[5]+4237533241&4294967295,v=k+(E<<21&4294967295|E>>>11),E=m+(k^(v|~C))+T[12]+1700485571&4294967295,m=v+(E<<6&4294967295|E>>>26),E=C+(v^(m|~k))+T[3]+2399980690&4294967295,C=m+(E<<10&4294967295|E>>>22),E=k+(m^(C|~v))+T[10]+4293915773&4294967295,k=C+(E<<15&4294967295|E>>>17),E=v+(C^(k|~m))+T[1]+2240044497&4294967295,v=k+(E<<21&4294967295|E>>>11),E=m+(k^(v|~C))+T[8]+1873313359&4294967295,m=v+(E<<6&4294967295|E>>>26),E=C+(v^(m|~k))+T[15]+4264355552&4294967295,C=m+(E<<10&4294967295|E>>>22),E=k+(m^(C|~v))+T[6]+2734768916&4294967295,k=C+(E<<15&4294967295|E>>>17),E=v+(C^(k|~m))+T[13]+1309151649&4294967295,v=k+(E<<21&4294967295|E>>>11),E=m+(k^(v|~C))+T[4]+4149444226&4294967295,m=v+(E<<6&4294967295|E>>>26),E=C+(v^(m|~k))+T[11]+3174756917&4294967295,C=m+(E<<10&4294967295|E>>>22),E=k+(m^(C|~v))+T[2]+718787259&4294967295,k=C+(E<<15&4294967295|E>>>17),E=v+(C^(k|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(k+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,T=this.B,k=this.h,C=0;C<m;){if(k==0)for(;C<=v;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<m;)if(T[k++]=w.charCodeAt(C++),k==this.blockSize){i(this,T),k=0;break}}else for(;C<m;)if(T[k++]=w[C++],k==this.blockSize){i(this,T),k=0;break}}this.h=k,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)w[v++]=this.g[m]>>>T&255;return w};function s(w,m){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function a(w,m){this.h=m;for(var v=[],T=!0,k=w.length-1;0<=k;k--){var C=w[k]|0;T&&C==m||(v[k]=C,T=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return b(h(-w));for(var m=[],v=1,T=0;w>=v;T++)m[T]=w/v|0,v*=4294967296;return new a(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return b(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),T=g,k=0;k<w.length;k+=8){var C=Math.min(8,w.length-k),E=parseInt(w.substring(k,k+C),m);8>C?(C=h(Math.pow(m,C)),T=T.j(C).add(h(E))):(T=T.j(v),T=T.add(h(E)))}return T}var g=u(0),y=u(1),A=u(16777216);t=a.prototype,t.m=function(){if(V(this))return-b(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(V(this))return"-"+b(this).toString(w);for(var m=h(Math.pow(w,6)),v=this,T="";;){var k=D(v,m).g;v=x(v,k.j(m));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=k,P(v))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function V(w){return w.h==-1}t.l=function(w){return w=x(this,w),V(w)?-1:P(w)?0:1};function b(w){for(var m=w.g.length,v=[],T=0;T<m;T++)v[T]=~w.g[T];return new a(v,~w.h).add(y)}t.abs=function(){return V(this)?b(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0,k=0;k<=m;k++){var C=T+(this.i(k)&65535)+(w.i(k)&65535),E=(C>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);T=E>>>16,C&=65535,E&=65535,v[k]=E<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function x(w,m){return w.add(b(m))}t.j=function(w){if(P(this)||P(w))return g;if(V(this))return V(w)?b(this).j(b(w)):b(b(this).j(w));if(V(w))return b(this.j(b(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var k=0;k<w.g.length;k++){var C=this.i(T)>>>16,E=this.i(T)&65535,ct=w.i(k)>>>16,sn=w.i(k)&65535;v[2*T+2*k]+=E*sn,_(v,2*T+2*k),v[2*T+2*k+1]+=C*sn,_(v,2*T+2*k+1),v[2*T+2*k+1]+=E*ct,_(v,2*T+2*k+1),v[2*T+2*k+2]+=C*ct,_(v,2*T+2*k+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new a(v,0)};function _(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function S(w,m){this.g=w,this.h=m}function D(w,m){if(P(m))throw Error("division by zero");if(P(w))return new S(g,g);if(V(w))return m=D(b(w),m),new S(b(m.g),b(m.h));if(V(m))return m=D(w,b(m)),new S(b(m.g),m.h);if(30<w.g.length){if(V(w)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,T=m;0>=T.l(w);)v=z(v),T=z(T);var k=U(v,1),C=U(T,1);for(T=U(T,2),v=U(v,2);!P(T);){var E=C.add(T);0>=E.l(w)&&(k=k.add(v),C=E),T=U(T,1),v=U(v,1)}return m=x(w,k.j(m)),new S(k,m)}for(k=g;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(v),E=C.j(m);V(E)||0<E.l(w);)v-=T,C=h(v),E=C.j(m);P(C)&&(C=y),k=k.add(C),w=x(w,E)}return new S(k,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&w.i(T);return new a(v,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|w.i(T);return new a(v,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^w.i(T);return new a(v,this.h^w.h)};function z(w){for(var m=w.g.length+1,v=[],T=0;T<m;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(v,w.h)}function U(w,m){var v=m>>5;m%=32;for(var T=w.g.length-v,k=[],C=0;C<T;C++)k[C]=0<m?w.i(C+v)>>>m|w.i(C+v+1)<<32-m:w.i(C+v);return new a(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lv=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Tr=a}).apply(typeof Bp<"u"?Bp:typeof self<"u"?self:typeof window<"u"?window:{});var Wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uv,ds,cv,la,Pc,hv,dv,fv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wo=="object"&&Wo];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var N=d++;return{value:c(N,o[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function g(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function y(o,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function A(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,N){for(var j=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)j[ce-2]=arguments[ce];return c.prototype[R].apply(p,j)}}function V(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function b(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=o.length||0,N=p.length||0;o.length=R+N;for(let j=0;j<N;j++)o[R+j]=p[j]}else o.push(p)}}class x{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function D(o){return D[" "](o),o}D[" "]=function(){};var z=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function w(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function m(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let N=0;N<v.length;N++)d=v[N],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function k(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function C(o){l.setTimeout(()=>{throw o},0)}function E(){var o=K;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ct{constructor(){this.h=this.g=null}add(c,d){const p=sn.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var sn=new x(()=>new ir,o=>o.reset());class ir{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let it,B=!1,K=new ct,J=()=>{const o=l.Promise.resolve(void 0);it=()=>{o.then(fe)}};var fe=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){C(d)}var c=sn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}B=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Mt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function Ct(o,c){if(_e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(z){e:{try{D(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:je[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ct.aa.h.call(this)}}P(Ct,_e);var je={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Rt="closure_listenable_"+(1e6*Math.random()|0),Mi=0;function Vl(o,c,d,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++Mi,this.da=this.fa=!1}function Fr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function jr(o){this.src=o,this.g={},this.h=0}jr.prototype.add=function(o,c,d,p,R){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var j=Li(o,c,p,R);return-1<j?(c=o[j],d||(c.fa=!1)):(c=new Vl(c,this.src,N,!!p,R),c.fa=d,o.push(c)),c};function sr(o,c){var d=c.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=R)&&Array.prototype.splice.call(p,R,1),N&&(Fr(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Li(o,c,d,p){for(var R=0;R<o.length;++R){var N=o[R];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return R}return-1}var F="closure_lm_"+(1e6*Math.random()|0),Q={};function Z(o,c,d,p,R){if(Array.isArray(c)){for(var N=0;N<c.length;N++)Z(o,c[N],d,p,R);return null}return d=on(d),o&&o[Rt]?o.K(c,d,h(p)?!!p.capture:!1,R):Oe(o,c,d,!1,p,R)}function Oe(o,c,d,p,R,N){if(!c)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,ce=zr(o);if(ce||(o[F]=ce=new jr(o)),d=ce.add(c,d,p,j,N),d.proxy)return d;if(p=Lt(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Mt||(R=j),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(Fi(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Lt(){function o(d){return c.call(o.src,o.listener,d)}const c=fo;return o}function or(o,c,d,p,R){if(Array.isArray(c))for(var N=0;N<c.length;N++)or(o,c[N],d,p,R);else p=h(p)?!!p.capture:!!p,d=on(d),o&&o[Rt]?(o=o.i,c=String(c).toString(),c in o.g&&(N=o.g[c],d=Li(N,d,p,R),-1<d&&(Fr(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete o.g[c],o.h--)))):o&&(o=zr(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Li(c,d,p,R)),(d=-1<o?c[o]:null)&&ar(d))}function ar(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Rt])sr(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Fi(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=zr(c))?(sr(d,o),d.h==0&&(d.src=null,c[F]=null)):Fr(o)}}}function Fi(o){return o in Q?Q[o]:Q[o]="on"+o}function fo(o,c){if(o.da)o=!0;else{c=new Ct(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&ar(o),o=d.call(p,c)}return o}function zr(o){return o=o[F],o instanceof jr?o:null}var Ur="__closure_events_fn_"+(1e9*Math.random()>>>0);function on(o){return typeof o=="function"?o:(o[Ur]||(o[Ur]=function(c){return o.handleEvent(c)}),o[Ur])}function xe(){ae.call(this),this.i=new jr(this),this.M=this,this.F=null}P(xe,ae),xe.prototype[Rt]=!0,xe.prototype.removeEventListener=function(o,c,d,p){or(this,o,c,d,p)};function ze(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new _e(c,o);else if(c instanceof _e)c.target=c.target||o;else{var R=c;c=new _e(p,o),T(c,R)}if(R=!0,d)for(var N=d.length-1;0<=N;N--){var j=c.g=d[N];R=an(j,p,!0,c)&&R}if(j=c.g=o,R=an(j,p,!0,c)&&R,R=an(j,p,!1,c)&&R,d)for(N=0;N<d.length;N++)j=c.g=d[N],R=an(j,p,!1,c)&&R}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)Fr(d[p]);delete o.g[c],o.h--}}this.F=null},xe.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},xe.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function an(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,N=0;N<c.length;++N){var j=c[N];if(j&&!j.da&&j.capture==d){var ce=j.listener,Ue=j.ha||j.src;j.fa&&sr(o.i,j),R=ce.call(Ue,p)!==!1&&R}}return R&&!p.defaultPrevented}function Ad(o,c,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function kd(o){o.g=Ad(()=>{o.g=null,o.i&&(o.i=!1,kd(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Q0 extends ae{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:kd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(o){ae.call(this),this.h=o,this.g={}}P(ji,ae);var Cd=[];function Rd(o){U(o.g,function(c,d){this.g.hasOwnProperty(d)&&ar(c)},o),o.g={}}ji.prototype.N=function(){ji.aa.N.call(this),Rd(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dl=l.JSON.stringify,G0=l.JSON.parse,Y0=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function bl(){}bl.prototype.h=null;function Pd(o){return o.h||(o.h=o.i())}function Nd(){}var zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ol(){_e.call(this,"d")}P(Ol,_e);function Ml(){_e.call(this,"c")}P(Ml,_e);var lr={},Vd=null;function po(){return Vd=Vd||new xe}lr.La="serverreachability";function Dd(o){_e.call(this,lr.La,o)}P(Dd,_e);function Ui(o){const c=po();ze(c,new Dd(c))}lr.STAT_EVENT="statevent";function bd(o,c){_e.call(this,lr.STAT_EVENT,o),this.stat=c}P(bd,_e);function st(o){const c=po();ze(c,new bd(c,o))}lr.Ma="timingevent";function Od(o,c){_e.call(this,lr.Ma,o),this.size=c}P(Od,_e);function Bi(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function X0(o,c,d,p,R,N){o.info(function(){if(o.g)if(N)for(var j="",ce=N.split("&"),Ue=0;Ue<ce.length;Ue++){var se=ce[Ue].split("=");if(1<se.length){var Ge=se[0];se=se[1];var Ye=Ge.split("_");j=2<=Ye.length&&Ye[1]=="type"?j+(Ge+"="+se+"&"):j+(Ge+"=redacted&")}}else j=null;else j=N;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+j})}function J0(o,c,d,p,R,N,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+N+" "+j})}function Br(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+e_(o,d)+(p?" "+p:"")})}function Z0(o,c){o.info(function(){return"TIMEOUT: "+c})}$i.prototype.info=function(){};function e_(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var N=R[0];if(N!="noop"&&N!="stop"&&N!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Dl(d)}catch{return c}}var mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Md={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ll;function go(){}P(go,bl),go.prototype.g=function(){return new XMLHttpRequest},go.prototype.i=function(){return{}},Ll=new go;function xn(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ld}function Ld(){this.i=null,this.g="",this.h=!1}var Fd={},Fl={};function jl(o,c,d){o.L=1,o.v=wo(ln(c)),o.m=d,o.P=!0,jd(o,null)}function jd(o,c){o.F=Date.now(),yo(o),o.A=ln(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Zd(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Ld,o.g=vf(o.j,d?c:null,!o.m),0<o.O&&(o.M=new Q0(y(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Cd[0]=R.toString()),R=Cd);for(var N=0;N<R.length;N++){var j=Z(d,R[N],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Ui(),X0(o.i,o.u,o.A,o.l,o.R,o.m)}xn.prototype.ca=function(o){o=o.target;const c=this.M;c&&un(o)==3?c.j():this.Y(o)},xn.prototype.Y=function(o){try{if(o==this.g)e:{const Ye=un(this.g);var c=this.g.Ba();const qr=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||af(this.g)))){this.J||Ye!=4||c==7||(c==8||0>=qr?Ui(3):Ui(2)),zl(this);var d=this.g.Z();this.X=d;t:if(zd(this)){var p=af(this.g);o="";var R=p.length,N=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Hi(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(N&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,J0(this.i,this.u,this.A,this.l,this.R,Ye,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Ue=this.g;if((ce=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ce)){var se=ce;break t}}se=null}if(d=se)Br(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ul(this,d);else{this.o=!1,this.s=3,st(12),ur(this),Hi(this);break e}}if(this.P){d=!0;let Ft;for(;!this.J&&this.C<j.length;)if(Ft=t_(this,j),Ft==Fl){Ye==4&&(this.s=4,st(14),d=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Fd){this.s=4,st(15),Br(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Br(this.i,this.l,Ft,null),Ul(this,Ft);if(zd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||j.length!=0||this.h.h||(this.s=1,st(16),d=!1),this.o=this.o&&d,!d)Br(this.i,this.l,j,"[Invalid Chunked Response]"),ur(this),Hi(this);else if(0<j.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Kl(Ge),Ge.M=!0,st(11))}}else Br(this.i,this.l,j,null),Ul(this,j);Ye==4&&ur(this),this.o&&!this.J&&(Ye==4?pf(this.j,this):(this.o=!1,yo(this)))}else v_(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),ur(this),Hi(this)}}}catch{}finally{}};function zd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function t_(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?Fl:(d=Number(c.substring(d,p)),isNaN(d)?Fd:(p+=1,p+d>c.length?Fl:(c=c.slice(p,p+d),o.C=p+d,c)))}xn.prototype.cancel=function(){this.J=!0,ur(this)};function yo(o){o.S=Date.now()+o.I,Ud(o,o.I)}function Ud(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Bi(y(o.ba,o),c)}function zl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}xn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Z0(this.i,this.A),this.L!=2&&(Ui(),st(17)),ur(this),this.s=2,Hi(this)):Ud(this,this.S-o)};function Hi(o){o.j.G==0||o.J||pf(o.j,o)}function ur(o){zl(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Rd(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ul(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Bl(d.h,o))){if(!o.K&&Bl(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ao(d),xo(d);else break e;Wl(d),st(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Bi(y(d.Za,d),6e3));if(1>=Hd(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else hr(d,11)}else if((o.K||d.g==o)&&Ao(d),!_(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let se=R[c];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Ge=se[3];Ge!=null&&(d.la=Ge,d.j.info("VER="+d.la));const Ye=se[4];Ye!=null&&(d.Aa=Ye,d.j.info("SVER="+d.Aa));const qr=se[5];qr!=null&&typeof qr=="number"&&0<qr&&(p=1.5*qr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ft=o.g;if(Ft){const Co=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var N=p.h;N.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&($l(N,N.h),N.h=null))}if(p.D){const Ql=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Ql&&(p.ya=Ql,pe(p.I,p.D,Ql))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=o;if(p.qa=yf(p,p.J?p.ia:null,p.W),j.K){qd(p.h,j);var ce=j,Ue=p.L;Ue&&(ce.I=Ue),ce.B&&(zl(ce),yo(ce)),p.g=j}else df(p);0<d.i.length&&So(d)}else se[0]!="stop"&&se[0]!="close"||hr(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?hr(d,7):ql(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}Ui(4)}catch{}}var n_=class{constructor(o,c){this.g=o,this.map=c}};function Bd(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $d(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Hd(o){return o.h?1:o.g?o.g.size:0}function Bl(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function $l(o,c){o.g?o.g.add(c):o.h=c}function qd(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Bd.prototype.cancel=function(){if(this.i=Wd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Wd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return V(o.i)}function r_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function i_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function Kd(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=i_(o),p=r_(o),R=p.length,N=0;N<R;N++)c.call(void 0,p[N],d&&d[N],o)}var Qd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function s_(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var N=o[d].substring(0,p);R=o[d].substring(p+1)}else N=o[d];c(N,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function cr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof cr){this.h=o.h,vo(this,o.j),this.o=o.o,this.g=o.g,_o(this,o.s),this.l=o.l;var c=o.i,d=new Ki;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Gd(this,d),this.m=o.m}else o&&(c=String(o).match(Qd))?(this.h=!1,vo(this,c[1]||"",!0),this.o=qi(c[2]||""),this.g=qi(c[3]||"",!0),_o(this,c[4]),this.l=qi(c[5]||"",!0),Gd(this,c[6]||"",!0),this.m=qi(c[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}cr.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Wi(c,Yd,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Wi(c,Yd,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Wi(d,d.charAt(0)=="/"?l_:a_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Wi(d,c_)),o.join("")};function ln(o){return new cr(o)}function vo(o,c,d){o.j=d?qi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function _o(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Gd(o,c,d){c instanceof Ki?(o.i=c,h_(o.i,o.h)):(d||(c=Wi(c,u_)),o.i=new Ki(c,o.h))}function pe(o,c,d){o.i.set(c,d)}function wo(o){return pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function qi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Wi(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,o_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function o_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Yd=/[#\/\?@]/g,a_=/[#\?:]/g,l_=/[#\?]/g,u_=/[#\?@]/g,c_=/#/g;function Ki(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Sn(o){o.g||(o.g=new Map,o.h=0,o.i&&s_(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Ki.prototype,t.add=function(o,c){Sn(this),this.i=null,o=$r(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Xd(o,c){Sn(o),c=$r(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Jd(o,c){return Sn(o),c=$r(o,c),o.g.has(c)}t.forEach=function(o,c){Sn(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(c,R,p,this)},this)},this)},t.na=function(){Sn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=o[p];for(let N=0;N<R.length;N++)d.push(c[p])}return d},t.V=function(o){Sn(this);let c=[];if(typeof o=="string")Jd(this,o)&&(c=c.concat(this.g.get($r(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},t.set=function(o,c){return Sn(this),this.i=null,o=$r(this,o),Jd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Zd(o,c,d){Xd(o,c),0<d.length&&(o.i=null,o.g.set($r(o,c),V(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var R=N;j[p]!==""&&(R+="="+encodeURIComponent(String(j[p]))),o.push(R)}}return this.i=o.join("&")};function $r(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function h_(o,c){c&&!o.j&&(Sn(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(Xd(this,p),Zd(this,R,d))},o)),o.j=c}function d_(o,c){const d=new $i;if(l.Image){const p=new Image;p.onload=A(An,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(An,d,"TestLoadImage: error",!1,c,p),p.onabort=A(An,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(An,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function f_(o,c){const d=new $i,p=new AbortController,R=setTimeout(()=>{p.abort(),An(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(N=>{clearTimeout(R),N.ok?An(d,"TestPingServer: ok",!0,c):An(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),An(d,"TestPingServer: error",!1,c)})}function An(o,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function p_(){this.g=new Y0}function m_(o,c,d){const p=d||"";try{Kd(o,function(R,N){let j=R;h(R)&&(j=Dl(R)),c.push(p+N+"="+encodeURIComponent(j))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function Eo(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Eo,bl),Eo.prototype.g=function(){return new To(this.l,this.j)},Eo.prototype.i=function(o){return function(){return o}}({});function To(o,c){xe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(To,xe),t=To.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Gi(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Gi(this)),this.g&&(this.readyState=3,Gi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ef(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ef(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Qi(this):Gi(this),this.readyState==3&&ef(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Qi(this))},t.Qa=function(o){this.g&&(this.response=o,Qi(this))},t.ga=function(){this.g&&Qi(this)};function Qi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Gi(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Gi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(To.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function tf(o){let c="";return U(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Hl(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=tf(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):pe(o,c,d))}function Se(o){xe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Se,xe);var g_=/^https?$/i,y_=["POST","PUT"];t=Se.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ll.g(),this.v=this.o?Pd(this.o):Pd(Ll),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(N){nf(this,N);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(y_,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of d)this.g.setRequestHeader(N,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{of(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){nf(this,N)}};function nf(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,rf(o),Io(o)}function rf(o){o.A||(o.A=!0,ze(o,"complete"),ze(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ze(this,"complete"),ze(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sf(this):this.bb())},t.bb=function(){sf(this)};function sf(o){if(o.h&&typeof a<"u"&&(!o.v[1]||un(o)!=4||o.Z()!=2)){if(o.u&&un(o)==4)Ad(o.Ea,0,o);else if(ze(o,"readystatechange"),un(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=j===0){var R=String(o.D).match(Qd)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!g_.test(R?R.toLowerCase():"")}d=p}if(d)ze(o,"complete"),ze(o,"success");else{o.m=6;try{var N=2<un(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",rf(o)}}finally{Io(o)}}}}function Io(o,c){if(o.g){of(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||ze(o,"ready");try{d.onreadystatechange=p}catch{}}}function of(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function un(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),G0(c)}};function af(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function v_(o){const c={};o=(o.g&&2<=un(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var d=k(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[R]||[];c[R]=N,N.push(d)}w(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yi(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function lf(o){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yi("baseRetryDelayMs",5e3,o),this.cb=Yi("retryDelaySeedMs",1e4,o),this.Wa=Yi("forwardChannelMaxRetries",2,o),this.wa=Yi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Bd(o&&o.concurrentRequestLimit),this.Da=new p_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lf.prototype,t.la=8,t.G=1,t.connect=function(o,c,d,p){st(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=yf(this,null,this.W),So(this)};function ql(o){if(uf(o),o.G==3){var c=o.U++,d=ln(o.I);if(pe(d,"SID",o.K),pe(d,"RID",c),pe(d,"TYPE","terminate"),Xi(o,d),c=new xn(o,o.j,c),c.L=2,c.v=wo(ln(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=vf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),yo(c)}gf(o)}function xo(o){o.g&&(Kl(o),o.g.cancel(),o.g=null)}function uf(o){xo(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ao(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function So(o){if(!$d(o.h)&&!o.s){o.s=!0;var c=o.Ga;it||J(),B||(it(),B=!0),K.add(c,o),o.B=0}}function __(o,c){return Hd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Bi(y(o.Ga,o,c),mf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new xn(this,this.j,o);let N=this.o;if(this.S&&(N?(N=m(N),T(N,this.S)):N=this.S),this.m!==null||this.O||(R.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=hf(this,R,c),d=ln(this.I),pe(d,"RID",o),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),Xi(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(tf(N)))+"&"+c:this.m&&Hl(d,this.m,N)),$l(this.h,R),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",c),pe(d,"SID","null"),R.T=!0,jl(R,d,null)):jl(R,d,c),this.G=2}}else this.G==3&&(o?cf(this,o):this.i.length==0||$d(this.h)||cf(this))};function cf(o,c){var d;c?d=c.l:d=o.U++;const p=ln(o.I);pe(p,"SID",o.K),pe(p,"RID",d),pe(p,"AID",o.T),Xi(o,p),o.m&&o.o&&Hl(p,o.m,o.o),d=new xn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=hf(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),$l(o.h,d),jl(d,p,c)}function Xi(o,c){o.H&&U(o.H,function(d,p){pe(c,p,d)}),o.l&&Kd({},function(d,p){pe(c,p,d)})}function hf(o,c,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let N=-1;for(;;){const j=["count="+d];N==-1?0<d?(N=R[0].g,j.push("ofs="+N)):N=0:j.push("ofs="+N);let ce=!0;for(let Ue=0;Ue<d;Ue++){let se=R[Ue].g;const Ge=R[Ue].map;if(se-=N,0>se)N=Math.max(0,R[Ue].g-100),ce=!1;else try{m_(Ge,j,"req"+se+"_")}catch{p&&p(Ge)}}if(ce){p=j.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function df(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;it||J(),B||(it(),B=!0),K.add(c,o),o.v=0}}function Wl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Bi(y(o.Fa,o),mf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,ff(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Bi(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),xo(this),ff(this))};function Kl(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function ff(o){o.g=new xn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ln(o.qa);pe(c,"RID","rpc"),pe(c,"SID",o.K),pe(c,"AID",o.T),pe(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&pe(c,"TO",o.ja),pe(c,"TYPE","xmlhttp"),Xi(o,c),o.m&&o.o&&Hl(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=wo(ln(c)),d.m=null,d.P=!0,jd(d,o)}t.Za=function(){this.C!=null&&(this.C=null,xo(this),Wl(this),st(19))};function Ao(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function pf(o,c){var d=null;if(o.g==c){Ao(o),Kl(o),o.g=null;var p=2}else if(Bl(o.h,c))d=c.D,qd(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=po(),ze(p,new Od(p,d)),So(o)}else df(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&__(o,c)||p==2&&Wl(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),R){case 1:hr(o,5);break;case 4:hr(o,10);break;case 3:hr(o,6);break;default:hr(o,2)}}}function mf(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function hr(o,c){if(o.j.info("Error code "+c),c==2){var d=y(o.fb,o),p=o.Xa;const R=!p;p=new cr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||vo(p,"https"),wo(p),R?d_(p.toString(),d):f_(p.toString(),d)}else st(2);o.G=0,o.l&&o.l.sa(c),gf(o),uf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function gf(o){if(o.G=0,o.ka=[],o.l){const c=Wd(o.h);(c.length!=0||o.i.length!=0)&&(b(o.ka,c),b(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function yf(o,c,d){var p=d instanceof cr?ln(d):new cr(d);if(p.g!="")c&&(p.g=c+"."+p.g),_o(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var N=new cr(null);p&&vo(N,p),c&&(N.g=c),R&&_o(N,R),d&&(N.l=d),p=N}return d=o.D,c=o.ya,d&&c&&pe(p,d,c),pe(p,"VER",o.la),Xi(o,p),p}function vf(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Se(new Eo({eb:d})):new Se(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _f(){}t=_f.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ko(){}ko.prototype.g=function(o,c){return new vt(o,c)};function vt(o,c){xe.call(this),this.g=new lf(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!_(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Hr(this)}P(vt,xe),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){ql(this.g)},vt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Dl(o),o=d);c.i.push(new n_(c.Ya++,o)),c.G==3&&So(c)},vt.prototype.N=function(){this.g.l=null,delete this.j,ql(this.g),delete this.g,vt.aa.N.call(this)};function wf(o){Ol.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(wf,Ol);function Ef(){Ml.call(this),this.status=1}P(Ef,Ml);function Hr(o){this.g=o}P(Hr,_f),Hr.prototype.ua=function(){ze(this.g,"a")},Hr.prototype.ta=function(o){ze(this.g,new wf(o))},Hr.prototype.sa=function(o){ze(this.g,new Ef)},Hr.prototype.ra=function(){ze(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,fv=function(){return new ko},dv=function(){return po()},hv=lr,Pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,la=mo,Md.COMPLETE="complete",cv=Md,Nd.EventType=zi,zi.OPEN="a",zi.CLOSE="b",zi.ERROR="c",zi.MESSAGE="d",xe.prototype.listen=xe.prototype.K,ds=Nd,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,uv=Se}).apply(typeof Wo<"u"?Wo:typeof self<"u"?self:typeof window<"u"?window:{});const $p="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Uh("@firebase/firestore");function os(){return Rr.logLevel}function H(t,...e){if(Rr.logLevel<=re.DEBUG){const n=e.map($h);Rr.debug(`Firestore (${Di}): ${t}`,...n)}}function En(t,...e){if(Rr.logLevel<=re.ERROR){const n=e.map($h);Rr.error(`Firestore (${Di}): ${t}`,...n)}}function Ti(t,...e){if(Rr.logLevel<=re.WARN){const n=e.map($h);Rr.warn(`Firestore (${Di}): ${t}`,...n)}}function $h(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function ue(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends nr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class C1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class R1{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ir,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ir)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new pv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new et(e)}}class P1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class N1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new P1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new V1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=b1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Ii(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new be(0,0))}static max(){return new Y(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Qs{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const O1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Qs{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return O1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ve.fromString(e))}static fromName(e){return new W(ve.fromString(e).popFirst(5))}static empty(){return new W(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ve(e.slice()))}}function M1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new Yn(i,W.empty(),e)}function L1(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(Y.min(),W.empty(),-1)}static max(){return new Yn(Y.max(),W.empty(),-1)}}function F1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class z1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==j1)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function U1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ao(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hh.oe=-1;function ml(t){return t==null}function Ua(t){return t===0&&1/t==-1/0}function B1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ko(this.root,e,this.comparator,!0)}}class Ko{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qp(this.data.getIterator())}getIteratorFrom(e){return new qp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class qp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Et([])}unionWith(e){let n=new We(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ii(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yv("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const $1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(ue(!!t),typeof t=="string"){let e=0;const n=$1.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wh(t){const e=t.mapValue.fields.__previous_value__;return qh(e)?Wh(e):e}function Gs(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,r,i,s,a,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Ys{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ys("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ys&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo={mapValue:{}};function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qh(t)?4:W1(t)?9007199254740991:q1(t)?10:11:G()}function nn(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gs(t).isEqual(Gs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Xn(i.timestampValue),l=Xn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Pr(i.bytesValue).isEqual(Pr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ke(i.doubleValue),l=ke(s.doubleValue);return a===l?Ua(a)===Ua(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Ii(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Hp(a)!==Hp(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!nn(a[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Xs(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function xi(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=ke(s.integerValue||s.doubleValue),u=ke(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Wp(t.timestampValue,e.timestampValue);case 4:return Wp(Gs(t),Gs(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Pr(s),u=Pr(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=oe(l[h],u[h]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=oe(ke(s.latitude),ke(a.latitude));return l!==0?l:oe(ke(s.longitude),ke(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kp(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const g=s.fields||{},y=a.fields||{},A=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(u=y.value)===null||u===void 0?void 0:u.arrayValue,V=oe(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Kp(A,P)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Qo.mapValue&&a===Qo.mapValue)return 0;if(s===Qo.mapValue)return 1;if(a===Qo.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=oe(u[g],f[g]);if(y!==0)return y;const A=xi(l[u[g]],h[f[g]]);if(A!==0)return A}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function Wp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Xn(t),r=Xn(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Kp(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=xi(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Si(t){return Nc(t)}function Nc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Nc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Nc(n.fields[a])}`;return i+"}"}(t.mapValue):G()}function Vc(t){return!!t&&"integerValue"in t}function Kh(t){return!!t&&"arrayValue"in t}function Qp(t){return!!t&&"nullValue"in t}function Gp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ua(t){return!!t&&"mapValue"in t}function q1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ss(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ss(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ss(t.arrayValue.values[n]);return e}return Object.assign({},t)}function W1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ss(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=Ss(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ua(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(Ss(this.value))}}function vv(t){const e=[];return Mr(t.fields,(n,r)=>{const i=new He([n]);if(ua(r)){const s=vv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,Y.min(),Y.min(),Y.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,Y.min(),Y.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,Y.min(),Y.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.position=e,this.inclusive=n}}function Yp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),n.key):r=xi(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n="asc"){this.field=e,this.dir=n}}function K1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{}class Ve extends _v{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new G1(e,n,r):n==="array-contains"?new J1(e,r):n==="in"?new Z1(e,r):n==="not-in"?new eI(e,r):n==="array-contains-any"?new tI(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Y1(e,r):new X1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xi(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends _v{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return wv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wv(t){return t.op==="and"}function Ev(t){return Q1(t)&&wv(t)}function Q1(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Dc(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Si(t.value);if(Ev(t))return t.filters.map(e=>Dc(e)).join(",");{const e=t.filters.map(n=>Dc(n)).join(",");return`${t.op}(${e})`}}function Tv(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&nn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Tv(a,i.filters[l]),!0):!1}(t,e):void G()}function Iv(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Si(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(Iv).join(" ,")+"}"}(t):"Filter"}class G1 extends Ve{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class Y1 extends Ve{constructor(e,n){super(e,"in",n),this.keys=xv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class X1 extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=xv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class J1 extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kh(n)&&Xs(n.arrayValue,this.value)}}class Z1 extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xs(this.value.arrayValue,n)}}class eI extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xs(this.value.arrayValue,n)}}class tI extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Jp(t,e=null,n=[],r=[],i=null,s=null,a=null){return new nI(t,e,n,r,i,s,a)}function Qh(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ml(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Si(r)).join(",")),e.ue=n}return e.ue}function Gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!K1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xp(t.startAt,e.startAt)&&Xp(t.endAt,e.endAt)}function bc(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rI(t,e,n,r,i,s,a,l){return new gl(t,e,n,r,i,s,a,l)}function Yh(t){return new gl(t)}function Zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iI(t){return t.collectionGroup!==null}function As(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new We(He.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new $a(s,r))}),n.has(He.keyField().canonicalString())||e.ce.push(new $a(He.keyField(),r))}return e.ce}function en(t){const e=X(t);return e.le||(e.le=sI(e,As(t))),e.le}function sI(t,e){if(t.limitType==="F")return Jp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new $a(i.field,s)});const n=t.endAt?new Ba(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ba(t.startAt.position,t.startAt.inclusive):null;return Jp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oc(t,e,n){return new gl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yl(t,e){return Gh(en(t),en(e))&&t.limitType===e.limitType}function Sv(t){return`${Qh(en(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Iv(i)).join(", ")}]`),ml(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Si(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Si(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function vl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of As(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=Yp(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,As(r),i)||r.endAt&&!function(a,l,u){const h=Yp(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,As(r),i))}(t,e)}function oI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Av(t){return(e,n)=>{let r=!1;for(const i of As(t)){const s=aI(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function aI(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?xi(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return gv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new Ie(W.comparator);function Tn(){return lI}const kv=new Ie(W.comparator);function fs(...t){let e=kv;for(const n of t)e=e.insert(n.key,n);return e}function Cv(t){let e=kv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vr(){return ks()}function Rv(){return ks()}function ks(){return new bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const uI=new Ie(W.comparator),cI=new We(W.comparator);function te(...t){let e=cI;for(const n of t)e=e.add(n);return e}const hI=new We(oe);function dI(){return hI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function Pv(t){return{integerValue:""+t}}function fI(t,e){return B1(e)?Pv(e):Xh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this._=void 0}}function pI(t,e,n){return t instanceof Ha?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qh(s)&&(s=Wh(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Js?Vv(t,e):t instanceof Zs?Dv(t,e):function(i,s){const a=Nv(i,s),l=em(a)+em(i.Pe);return Vc(a)&&Vc(i.Pe)?Pv(l):Xh(i.serializer,l)}(t,e)}function mI(t,e,n){return t instanceof Js?Vv(t,e):t instanceof Zs?Dv(t,e):n}function Nv(t,e){return t instanceof qa?function(r){return Vc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ha extends _l{}class Js extends _l{constructor(e){super(),this.elements=e}}function Vv(t,e){const n=bv(e);for(const r of t.elements)n.some(i=>nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zs extends _l{constructor(e){super(),this.elements=e}}function Dv(t,e){let n=bv(e);for(const r of t.elements)n=n.filter(i=>!nn(i,r));return{arrayValue:{values:n}}}class qa extends _l{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function em(t){return ke(t.integerValue||t.doubleValue)}function bv(t){return Kh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gI(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Js&&i instanceof Js||r instanceof Zs&&i instanceof Zs?Ii(r.elements,i.elements,nn):r instanceof qa&&i instanceof qa?nn(r.Pe,i.Pe):r instanceof Ha&&i instanceof Ha}(t.transform,e.transform)}class yI{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wl{}function Ov(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jh(t.key,qt.none()):new lo(t.key,t.data,qt.none());{const n=t.data,r=dt.empty();let i=new We(He.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new rr(t.key,r,new Et(i.toArray()),qt.none())}}function vI(t,e,n){t instanceof lo?function(i,s,a){const l=i.value.clone(),u=nm(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(i,s,a){if(!ca(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=nm(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Mv(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Cs(t,e,n,r){return t instanceof lo?function(s,a,l,u){if(!ca(s.precondition,a))return l;const h=s.value.clone(),f=rm(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof rr?function(s,a,l,u){if(!ca(s.precondition,a))return l;const h=rm(s.fieldTransforms,u,a),f=a.data;return f.setAll(Mv(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,a,l){return ca(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function _I(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Nv(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function tm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ii(r,i,(s,a)=>gI(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lo extends wl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rr extends wl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Mv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nm(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,mI(a,l,n[i]))}return r}function rm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,pI(s,a,e))}return r}class Jh extends wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wI extends wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vI(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Cs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Cs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Rv();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=Ov(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ii(this.mutations,e.mutations,(n,r)=>tm(n,r))&&Ii(this.baseMutations,e.baseMutations,(n,r)=>tm(n,r))}}class Zh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return uI}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Zh(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ne;function xI(t){switch(t){default:return G();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Lv(t){if(t===void 0)return En("GRPC error has no .code"),M.UNKNOWN;switch(t){case Re.OK:return M.OK;case Re.CANCELLED:return M.CANCELLED;case Re.UNKNOWN:return M.UNKNOWN;case Re.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Re.INTERNAL:return M.INTERNAL;case Re.UNAVAILABLE:return M.UNAVAILABLE;case Re.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Re.NOT_FOUND:return M.NOT_FOUND;case Re.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Re.ABORTED:return M.ABORTED;case Re.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Re.DATA_LOSS:return M.DATA_LOSS;default:return G()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new Tr([4294967295,4294967295],0);function im(t){const e=SI().encode(t),n=new lv;return n.update(e),new Uint8Array(n.digest())}function sm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([i,s],0)]}class ed{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ps(`Invalid padding: ${n}`);if(r<0)throw new ps(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ps(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ps(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Tr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Tr.fromNumber(r)));return i.compare(AI)===1&&(i=new Tr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=im(e),[r,i]=sm(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new ed(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=im(e),[r,i]=sm(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new El(Y.min(),i,new Ie(oe),Tn(),te())}}class uo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new uo(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Fv{constructor(e,n){this.targetId=e,this.me=n}}class jv{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class om{constructor(){this.fe=0,this.ge=lm(),this.pe=Qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new uo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=lm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tn(),this.qe=am(),this.Qe=new Ie(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(bc(s))if(r===0){const a=new W(s.path);this.Ue(n,a,nt.newNoDocument(a,Y.min()))}else ue(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=Pr(r).toUint8Array()}catch(u){if(u instanceof yv)return Ti("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ed(a,i,s)}catch(u){return Ti(u instanceof ps?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&bc(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,nt.newNoDocument(u,e))}s.be&&(n.set(a,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new El(e,n,this.Qe,this.ke,r);return this.ke=Tn(),this.qe=am(),this.Qe=new Ie(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new om,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new We(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new om),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function am(){return new Ie(W.comparator)}function lm(){return new Ie(W.comparator)}const CI={asc:"ASCENDING",desc:"DESCENDING"},RI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PI={and:"AND",or:"OR"};class NI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mc(t,e){return t.useProto3Json||ml(e)?e:{value:e}}function Wa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VI(t,e){return Wa(t,e.toTimestamp())}function tn(t){return ue(!!t),Y.fromTimestamp(function(n){const r=Xn(n);return new be(r.seconds,r.nanos)}(t))}function td(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Uv(t){const e=ve.fromString(t);return ue(Wv(e)),e}function Fc(t,e){return td(t.databaseId,e.path)}function Su(t,e){const n=Uv(e);if(n.get(1)!==t.databaseId.projectId)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W($v(n))}function Bv(t,e){return td(t.databaseId,e)}function DI(t){const e=Uv(t);return e.length===4?ve.emptyPath():$v(e)}function jc(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $v(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function um(t,e,n){return{name:Fc(t,e),fields:n.value.mapValue.fields}}function bI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string"),Qe.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?M.UNKNOWN:Lv(h.code);return new q(f,h.message||"")}(a);n=new jv(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Su(t,r.document.name),s=tn(r.document.updateTime),a=r.document.createTime?tn(r.document.createTime):Y.min(),l=new dt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ha(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Su(t,r.document),s=r.readTime?tn(r.readTime):Y.min(),a=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ha([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Su(t,r.document),s=r.removedTargetIds||[];n=new ha([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new II(i,s),l=r.targetId;n=new Fv(l,a)}}return n}function OI(t,e){let n;if(e instanceof lo)n={update:um(t,e.key,e.value)};else if(e instanceof Jh)n={delete:Fc(t,e.key)};else if(e instanceof rr)n={update:um(t,e.key,e.data),updateMask:HI(e.fieldMask)};else{if(!(e instanceof wI))return G();n={verify:Fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Ha)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Js)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof qa)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:VI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function MI(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?tn(i.updateTime):tn(s);return a.isEqual(Y.min())&&(a=tn(s)),new yI(a,i.transformResults||[])}(n,e))):[]}function LI(t,e){return{documents:[Bv(t,e.path)]}}function FI(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bv(t,i);const s=function(h){if(h.length!==0)return qv(rn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Qr(y.field),direction:UI(y.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Mc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function jI(t){let e=DI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const y=Hv(g);return y instanceof rn&&Ev(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(y=>function(P){return new $a(Gr(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,ml(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,A=g.values||[];return new Ba(A,y)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const y=!g.before,A=g.values||[];return new Ba(A,y)}(n.endAt)),rI(e,i,a,s,l,"F",u,h)}function zI(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gr(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Gr(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gr(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Gr(n.unaryFilter.field);return Ve.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Gr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>Hv(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function UI(t){return CI[t]}function BI(t){return RI[t]}function $I(t){return PI[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Gr(t){return He.fromServerFormat(t.fieldPath)}function qv(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Gp(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(Qp(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gp(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(Qp(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:BI(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>qv(i));return r.length===1?r[0]:{compositeFilter:{op:$I(n.op),filters:r}}}(t):G()}function HI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Wv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n,r,i,s=Y.min(),a=Y.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.ct=e}}function WI(t){const e=jI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.un=new QI}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Yn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class QI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ai(0)}static kn(){return new Ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(){this.changes=new bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Cs(r.mutation,i,Et.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=fs();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=Tn();const a=ks(),l=function(){return ks()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof rr)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Cs(f.mutation,h,f.mutation.getFieldMask(),be.now())):a.set(h.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new YI(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ks();let i=new Ie((a,l)=>a-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Et.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=Rv();f.forEach(y=>{if(!s.has(y)){const A=Ov(n.get(y),r.get(y));A!==null&&g.set(y,A),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(vr());let l=-1,u=s;return a.next(h=>O.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:Cv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=fs();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(g,y){return new gl(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,y)=>{a=a.insert(g,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,nt.newInvalidDocument(f)))});let l=fs();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Cs(f.mutation,h,Et.empty(),be.now()),vl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:tn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:WI(i.bundledQuery),readTime:tn(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.overlays=new Ie(W.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=vr(),s=n.length+1,a=new W(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=vr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=vr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new TI(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.Tr=new We(Me.Er),this.dr=new We(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new ve([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new ve([])),r=new Me(n,e),i=new Me(n,e+1);let s=te();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new We(Me.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new EI(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(oe);return n.forEach(i=>{const s=new Me(i,0),a=new Me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const a=new Me(new W(s),0);let l=new We(oe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),O.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),i=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.Mr=e,this.docs=function(){return new Ie(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tn();const a=n.path,l=new W(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||F1(L1(f),r)<=0||(i.has(f.key)||vl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rx(this)}getSize(e){return O.resolve(this.size)}}class rx extends GI{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.persistence=e,this.Nr=new bi(n=>Qh(n),Gh),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nd,this.targetCount=0,this.kr=Ai.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ai(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Hh(0),this.Kr=!1,this.Kr=!0,this.$r=new ex,this.referenceDelegate=e(this),this.Ur=new ix(this),this.indexManager=new KI,this.remoteDocumentCache=function(i){return new nx(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qI(n),this.Gr=new JI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new tx(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new ox(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ox extends z1{constructor(e){super(),this.currentSequenceNumber=e}}class rd{constructor(e){this.persistence=e,this.Jr=new nd,this.Yr=null}static Zr(e){return new rd(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new id(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return uT()?8:U1(oT())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new ax;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(os()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(os()<=re.DEBUG&&H("QueryEngine","Query:",Kr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(os()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):O.resolve())}Yi(e,n){if(Zp(n))return O.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Oc(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=te(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,a,u.readTime)?this.Yi(e,Oc(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Zp(n)||i.isEqual(Y.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?O.resolve(null):(os()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kr(n)),this.rs(e,a,n,M1(i,-1)).next(l=>l))})}ts(e,n){let r=new We(Av(e));return n.forEach((i,s)=>{vl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return os()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Yn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(oe),this._s=new bi(s=>Qh(s),Gh),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function cx(t,e,n,r){return new ux(t,e,n,r)}async function Kv(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=te();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function hx(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,y=g.keys();let A=O.resolve();return y.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(V=>{const b=h.docVersions.get(P);ue(b!==null),V.version.compareTo(b)<0&&(g.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Qv(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function dx(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let A=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(Qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(g,A),function(V,b,x){return V.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(y,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=Tn(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(fx(s,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function fx(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=Tn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function px(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mx(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Ur.allocateTargetId(r).next(a=>(i=new bn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function zc(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ao(a))throw a;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function cm(t,e,n){const r=X(t);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=X(u),y=g._s.get(f);return y!==void 0?O.resolve(g.os.get(y)):g.Ur.getTargetData(h,f)}(r,a,en(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?i:Y.min(),n?s:te())).next(l=>(gx(r,oI(e),l),{documents:l,Ts:s})))}function gx(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class hm{constructor(){this.activeTargetIds=dI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yx{constructor(){this.so=new hm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new hm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go=null;function Au(){return Go===null?Go=function(){return 268435456+Math.round(2147483648*Math.random())}():Go++,"0x"+Go.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class Ex extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=Au(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ti("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Di}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=_x[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Au();return new Promise((a,l)=>{const u=new uv;u.setWithCredentials(!0),u.listenOnce(cv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case la.NO_ERROR:const f=u.getResponseJson();H(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case la.TIMEOUT:H(Ze,`RPC '${e}' ${s} timed out`),l(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case la.HTTP_ERROR:const g=u.getStatus();if(H(Ze,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const P=function(b){const x=b.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(x)>=0?x:M.UNKNOWN}(A.status);l(new q(P,A.message))}else l(new q(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(M.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{H(Ze,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(Ze,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Au(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=fv(),l=dv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(Ze,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=a.createWebChannel(f,u);let y=!1,A=!1;const P=new wx({Io:b=>{A?H(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(y||(H(Ze,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),H(Ze,`RPC '${e}' stream ${i} sending:`,b),g.send(b))},To:()=>g.close()}),V=(b,x,_)=>{b.listen(x,S=>{try{_(S)}catch(D){setTimeout(()=>{throw D},0)}})};return V(g,ds.EventType.OPEN,()=>{A||(H(Ze,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),V(g,ds.EventType.CLOSE,()=>{A||(A=!0,H(Ze,`RPC '${e}' stream ${i} transport closed`),P.So())}),V(g,ds.EventType.ERROR,b=>{A||(A=!0,Ti(Ze,`RPC '${e}' stream ${i} transport errored:`,b),P.So(new q(M.UNAVAILABLE,"The operation could not be completed")))}),V(g,ds.EventType.MESSAGE,b=>{var x;if(!A){const _=b.data[0];ue(!!_);const S=_,D=S.error||((x=S[0])===null||x===void 0?void 0:x.error);if(D){H(Ze,`RPC '${e}' stream ${i} received error:`,D);const z=D.status;let U=function(v){const T=Re[v];if(T!==void 0)return Lv(T)}(z),w=D.message;U===void 0&&(U=M.INTERNAL,w="Unknown error status: "+z+" with message "+D.message),A=!0,P.So(new q(U,w)),g.close()}else H(Ze,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),V(l,hv.STAT_EVENT,b=>{b.stat===Pc.PROXY?H(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Pc.NOPROXY&&H(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function ku(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t){return new NI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gv(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Tx extends Yv{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=bI(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?tn(a.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jc(this.serializer),n.addTarget=function(s,a){let l;const u=a.target;if(l=bc(u)?{documents:LI(s,u)}:{query:FI(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=zv(s,a.resumeToken);const h=Mc(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(Y.min())>0){l.readTime=Wa(s,a.snapshotVersion.toTimestamp());const h=Mc(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=zI(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jc(this.serializer),n.removeTarget=e,this.a_(n)}}class Ix extends Yv{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=MI(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>OI(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Lc(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Lc(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Sx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(En(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{Lr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.L_.add(4),await co(h),h.q_.set("Unknown"),h.L_.delete(4),await Il(h)}(this))})}),this.q_=new Sx(r,i)}}async function Il(t){if(Lr(t))for(const e of t.B_)await e(!0)}async function co(t){for(const e of t.B_)await e(!1)}function Xv(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ld(n)?ad(n):Oi(n).r_()&&od(n,e))}function sd(t,e){const n=X(t),r=Oi(n);n.N_.delete(e),r.r_()&&Jv(n,e),n.N_.size===0&&(r.r_()?r.o_():Lr(n)&&n.q_.set("Unknown"))}function od(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oi(t).A_(e)}function Jv(t,e){t.Q_.xe(e),Oi(t).R_(e)}function ad(t){t.Q_=new kI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Oi(t).start(),t.q_.v_()}function ld(t){return Lr(t)&&!Oi(t).n_()&&t.N_.size>0}function Lr(t){return X(t).L_.size===0}function Zv(t){t.Q_=void 0}async function kx(t){t.q_.set("Online")}async function Cx(t){t.N_.forEach((e,n)=>{od(t,e)})}async function Rx(t,e){Zv(t),ld(t)?(t.q_.M_(e),ad(t)):t.q_.set("Unknown")}async function Px(t,e,n){if(t.q_.set("Online"),e instanceof jv&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ka(t,r)}else if(e instanceof ha?t.Q_.Ke(e):e instanceof Fv?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await Qv(t.localStore);n.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Qe.EMPTY_BYTE_STRING,f.snapshotVersion)),Jv(s,u);const g=new bn(f.target,u,h,f.sequenceNumber);od(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ka(t,r)}}async function Ka(t,e,n){if(!ao(e))throw e;t.L_.add(1),await co(t),t.q_.set("Offline"),n||(n=()=>Qv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Il(t)})}function e0(t,e){return e().catch(n=>Ka(t,n,e))}async function xl(t){const e=X(t),n=Jn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Nx(e);)try{const i=await px(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Vx(e,i)}catch(i){await Ka(e,i)}t0(e)&&n0(e)}function Nx(t){return Lr(t)&&t.O_.length<10}function Vx(t,e){t.O_.push(e);const n=Jn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function t0(t){return Lr(t)&&!Jn(t).n_()&&t.O_.length>0}function n0(t){Jn(t).start()}async function Dx(t){Jn(t).p_()}async function bx(t){const e=Jn(t);for(const n of t.O_)e.m_(n.mutations)}async function Ox(t,e,n){const r=t.O_.shift(),i=Zh.from(r,e,n);await e0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xl(t)}async function Mx(t,e){e&&Jn(t).V_&&await async function(r,i){if(function(a){return xI(a)&&a!==M.ABORTED}(i.code)){const s=r.O_.shift();Jn(r).s_(),await e0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xl(r)}}(t,e),t0(t)&&n0(t)}async function fm(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Lr(n);n.L_.add(3),await co(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Il(n)}async function Lx(t,e){const n=X(t);e?(n.L_.delete(2),await Il(n)):e||(n.L_.add(2),await co(n),n.q_.set("Unknown"))}function Oi(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new Tx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:kx.bind(null,t),Ro:Cx.bind(null,t),mo:Rx.bind(null,t),d_:Px.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ld(t)?ad(t):t.q_.set("Unknown")):(await t.K_.stop(),Zv(t))})),t.K_}function Jn(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new Ix(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Dx.bind(null,t),mo:Mx.bind(null,t),f_:bx.bind(null,t),g_:Ox.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xl(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new ud(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cd(t,e){if(En("AsyncQueue",`${e}: ${t}`),ao(t))return new q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=fs(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new pi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.W_=new Ie(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ki{constructor(e,n,r,i,s,a,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new ki(e,n,pi.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class jx{constructor(){this.queries=mm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=mm(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(M.ABORTED,"Firestore shutting down"))}}function mm(){return new bi(t=>Sv(t),yl)}async function zx(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Fx,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=cd(a,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&hd(n)}async function Ux(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Bx(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&hd(n)}function $x(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function hd(t){t.Y_.forEach(e=>{e.next()})}var Uc,gm;(gm=Uc||(Uc={})).ea="default",gm.Cache="cache";class Hx{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Uc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.key=e}}class i0{constructor(e){this.key=e}}class qx{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=Av(e),this.Ra=new pi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new pm,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const y=i.get(f),A=vl(this.query,g)?g:null,P=!!y&&this.mutatedKeys.has(y.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let b=!1;y&&A?y.data.isEqual(A.data)?P!==V&&(r.track({type:3,doc:A}),b=!0):this.ga(y,A)||(r.track({type:2,doc:A}),b=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!y&&A?(r.track({type:0,doc:A}),b=!0):y&&!A&&(r.track({type:1,doc:y}),b=!0,(u||h)&&(l=!0)),b&&(A?(a=a.add(A),s=V?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(A,P){const V=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return V(A)-V(P)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new ki(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pm,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new i0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new r0(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ki.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Wx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Kx{constructor(e){this.key=e,this.va=!1}}class Qx{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new bi(l=>Sv(l),yl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(W.comparator),this.Na=new Map,this.La=new nd,this.Ba={},this.ka=new Map,this.qa=Ai.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Gx(t,e,n=!0){const r=c0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await s0(r,e,n,!0),i}async function Yx(t,e){const n=c0(t);await s0(n,e,!0,!1)}async function s0(t,e,n,r){const i=await mx(t.localStore,en(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Xx(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&Xv(t.remoteStore,i),l}async function Xx(t,e,n,r,i){t.Ka=(g,y,A)=>async function(V,b,x,_){let S=b.view.ma(x);S.ns&&(S=await cm(V.localStore,b.query,!1).then(({documents:w})=>b.view.ma(w,S)));const D=_&&_.targetChanges.get(b.targetId),z=_&&_.targetMismatches.get(b.targetId)!=null,U=b.view.applyChanges(S,V.isPrimaryClient,D,z);return vm(V,b.targetId,U.wa),U.snapshot}(t,g,y,A);const s=await cm(t.localStore,e,!0),a=new qx(e,s.Ts),l=a.ma(s.documents),u=uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=a.applyChanges(l,t.isPrimaryClient,u);vm(t,n,h.wa);const f=new Wx(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Jx(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!yl(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sd(r.remoteStore,i.targetId),Bc(r,i.targetId)}).catch(oo)):(Bc(r,i.targetId),await zc(r.localStore,i.targetId,!0))}async function Zx(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sd(n.remoteStore,r.targetId))}async function eS(t,e,n){const r=aS(t);try{const i=await function(a,l){const u=X(a),h=be.now(),f=l.reduce((A,P)=>A.add(P.key),te());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Tn(),V=te();return u.cs.getEntries(A,f).next(b=>{P=b,P.forEach((x,_)=>{_.isValidDocument()||(V=V.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(b=>{g=b;const x=[];for(const _ of l){const S=_I(_,g.get(_.key).overlayedDocument);S!=null&&x.push(new rr(_.key,S,vv(S.value.mapValue),qt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,x,l)}).next(b=>{y=b;const x=b.applyToLocalDocumentSet(g,V);return u.documentOverlayCache.saveOverlays(A,b.batchId,x)})}).then(()=>({batchId:y.batchId,changes:Cv(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new Ie(oe)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,n),await ho(r,i.changes),await xl(r.remoteStore)}catch(i){const s=cd(i,"Failed to persist write");n.reject(s)}}async function o0(t,e){const n=X(t);try{const r=await dx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Na.get(s);a&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ue(a.va):i.removedDocuments.size>0&&(ue(a.va),a.va=!1))}),await ho(n,r,e)}catch(r){await oo(r)}}function ym(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=X(a);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(l)&&(h=!0)}),h&&hd(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tS(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new Ie(W.comparator);a=a.insert(s,nt.newNoDocument(s,Y.min()));const l=te().add(s),u=new El(Y.min(),new Map,new Ie(oe),a,l);await o0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),dd(r)}else await zc(r.localStore,e,!1).then(()=>Bc(r,e,n)).catch(oo)}async function nS(t,e){const n=X(t),r=e.batch.batchId;try{const i=await hx(n.localStore,e);l0(n,r,null),a0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ho(n,i)}catch(i){await oo(i)}}async function rS(t,e,n){const r=X(t);try{const i=await function(a,l){const u=X(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(ue(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);l0(r,e,n),a0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ho(r,i)}catch(i){await oo(i)}}function a0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function l0(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Bc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||u0(t,r)})}function u0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),dd(t))}function vm(t,e,n){for(const r of n)r instanceof r0?(t.La.addReference(r.key,e),iS(t,r)):r instanceof i0?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||u0(t,r.key)):G()}function iS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),dd(t))}function dd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(ve.fromString(e)),r=t.qa.next();t.Na.set(r,new Kx(n)),t.Oa=t.Oa.insert(n,r),Xv(t.remoteStore,new bn(en(Yh(n.path)),r,"TargetPurposeLimboResolution",Hh.oe))}}async function ho(t,e,n){const r=X(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=id.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(h,y=>O.forEach(y.$i,A=>f.persistence.referenceDelegate.addReference(g,y.targetId,A)).next(()=>O.forEach(y.Ui,A=>f.persistence.referenceDelegate.removeReference(g,y.targetId,A)))))}catch(g){if(!ao(g))throw g;H("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const A=f.os.get(y),P=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(y,V)}}}(r.localStore,s))}async function sS(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Kv(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(M.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ho(n,r.hs)}}function oS(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const a of s){const l=n.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function c0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=o0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tS.bind(null,e),e.Ca.d_=Bx.bind(null,e.eventManager),e.Ca.$a=$x.bind(null,e.eventManager),e}function aS(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rS.bind(null,e),e}class Qa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return cx(this.persistence,new lx,e.initialUser,this.serializer)}Ga(e){return new sx(rd.Zr,this.serializer)}Wa(e){return new yx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qa.provider={build:()=>new Qa};class $c{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ym(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sS.bind(null,this.syncEngine),await Lx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jx}()}createDatastore(e){const n=Tl(e.databaseInfo.databaseId),r=function(s){return new Ex(s)}(e.databaseInfo);return function(s,a,l,u){return new xx(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new Ax(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ym(this.syncEngine,n,0),function(){return dm.D()?new dm:new vx}())}createSyncEngine(e,n){return function(i,s,a,l,u,h,f){const g=new Qx(i,s,a,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await co(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$c.provider={build:()=>new $c};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=mv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{H("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cu(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Kv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _m(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cS(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>fm(e.remoteStore,i)),t._onlineComponents=e}async function cS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ti("Error using user provided cache. Falling back to memory cache: "+n),await Cu(t,new Qa)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Cu(t,new Qa);return t._offlineComponents}async function h0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await _m(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await _m(t,new $c))),t._onlineComponents}function hS(t){return h0(t).then(e=>e.syncEngine)}async function wm(t){const e=await h0(t),n=e.eventManager;return n.onListen=Gx.bind(null,e.syncEngine),n.onUnlisten=Jx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Yx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Zx.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t,e,n){if(!n)throw new q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dS(t,e,n,r){if(e===!0&&r===!0)throw new q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tm(t){if(!W.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Im(t){if(W.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fd(t);throw new q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=d0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new k1;switch(r.type){case"firstParty":return new N1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Em.get(n);r&&(H("ComponentProvider","Removing Datastore"),Em.delete(n),r.terminate())}(this),Promise.resolve()}}function fS(t,e,n,r={}){var i;const s=(t=qn(t,Sl))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=et.MOCK_USER;else{l=sT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(h)}t._authCredentials=new C1(new pv(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Al(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Wn extends Al{constructor(e,n,r){super(e,n,Yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new W(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function Sm(t,e,...n){if(t=Kt(t),f0("collection","path",e),t instanceof Sl){const r=ve.fromString(e,...n);return Im(r),new Wn(t,null,r)}{if(!(t instanceof It||t instanceof Wn))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Im(r),new Wn(t.firestore,null,r)}}function da(t,e,...n){if(t=Kt(t),arguments.length===1&&(e=mv.newId()),f0("doc","path",e),t instanceof Sl){const r=ve.fromString(e,...n);return Tm(r),new It(t,null,new W(r))}{if(!(t instanceof It||t instanceof Wn))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Tm(r),new It(t.firestore,t instanceof Wn?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Gv(this,"async_queue_retry"),this.Vu=()=>{const r=ku();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ku();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ku();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ir;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ao(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw En("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=ud.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function km(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ci extends Sl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Am,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Am(e),this._firestoreClient=void 0,await e}}}function pS(t,e){const n=typeof t=="object"?t:sv(),r=typeof t=="string"?t:"(default)",i=so(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rT("firestore");s&&fS(i,...s)}return i}function p0(t){if(t._terminated)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||mS(t),t._firestoreClient}function mS(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new H1(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,d0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new uS(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ri(Qe.fromBase64String(e))}catch(n){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ri(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=/^__.*__$/;class yS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new lo(e,this.data,n,this.fieldTransforms)}}class m0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function g0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class yd{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ga(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(g0(this.Cu)&&gS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tl(e)}Qu(e,n,r,i=!1){return new yd({Cu:e,methodName:n,qu:r,path:He.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function y0(t){const e=t._freezeSettings(),n=Tl(t._databaseId);return new vS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _S(t,e,n,r,i,s={}){const a=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);vd("Data must be an object, but it was:",a,r);const l=v0(r,a);let u,h;if(s.merge)u=new Et(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=Hc(e,g,n);if(!a.contains(y))throw new q(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);w0(f,y)||f.push(y)}u=new Et(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new yS(new dt(l),u,h)}class Cl extends pd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cl}}function wS(t,e,n,r){const i=t.Qu(1,e,n);vd("Data must be an object, but it was:",i,r);const s=[],a=dt.empty();Mr(r,(u,h)=>{const f=_d(e,u,n);h=Kt(h);const g=i.Nu(f);if(h instanceof Cl)s.push(f);else{const y=Rl(h,g);y!=null&&(s.push(f),a.set(f,y))}});const l=new Et(s);return new m0(a,l,i.fieldTransforms)}function ES(t,e,n,r,i,s){const a=t.Qu(1,e,n),l=[Hc(e,r,n)],u=[i];if(s.length%2!=0)throw new q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Hc(e,s[y])),u.push(s[y+1]);const h=[],f=dt.empty();for(let y=l.length-1;y>=0;--y)if(!w0(h,l[y])){const A=l[y];let P=u[y];P=Kt(P);const V=a.Nu(A);if(P instanceof Cl)h.push(A);else{const b=Rl(P,V);b!=null&&(h.push(A),f.set(A,b))}}const g=new Et(h);return new m0(f,g,a.fieldTransforms)}function Rl(t,e){if(_0(t=Kt(t)))return vd("Unsupported field value:",e,t),v0(t,e);if(t instanceof pd)return function(r,i){if(!g0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Rl(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:Wa(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wa(i.serializer,s)}}if(r instanceof md)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ri)return{bytesValue:zv(i.serializer,r._byteString)};if(r instanceof It){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:td(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gd)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Xh(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${fd(r)}`)}(t,e)}function v0(t,e){const n={};return gv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(r,i)=>{const s=Rl(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof md||t instanceof Ri||t instanceof It||t instanceof pd||t instanceof gd)}function vd(t,e,n){if(!_0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=fd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Hc(t,e,n){if((e=Kt(e))instanceof kl)return e._internalPath;if(typeof e=="string")return _d(t,e);throw Ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const TS=new RegExp("[~\\*/\\[\\]]");function _d(t,e,n){if(e.search(TS)>=0)throw Ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kl(...e.split("."))._internalPath}catch{throw Ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ga(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new q(M.INVALID_ARGUMENT,l+t+u)}function w0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(T0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IS extends E0{data(){return super.data()}}function T0(t,e){return typeof e=="string"?_d(t,e):e instanceof kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class SS{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ke(a.doubleValue));return new gd(s)}convertGeoPoint(e){return new md(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gs(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);ue(Wv(r));const i=new Ys(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||En(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class I0 extends E0{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(T0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fa extends I0{data(e={}){return super.data(e)}}class kS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ms(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fa(this._firestore,this._userDataWriter,r.key,r,new ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new fa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ms(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new fa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ms(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:CS(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class x0 extends SS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function Cm(t,e,n,...r){t=qn(t,It);const i=qn(t.firestore,Ci),s=y0(i);let a;return a=typeof(e=Kt(e))=="string"||e instanceof kl?ES(s,"updateDoc",t._key,e,n,r):wS(s,"updateDoc",t._key,e),wd(i,[a.toMutation(t._key,qt.exists(!0))])}function RS(t){return wd(qn(t.firestore,Ci),[new Jh(t._key,qt.none())])}function PS(t,e){const n=qn(t.firestore,Ci),r=da(t),i=AS(t.converter,e);return wd(n,[_S(y0(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function NS(t,...e){var n,r,i;t=Kt(t);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||km(e[a])||(s=e[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(km(e[a])){const g=e[a];e[a]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,f;if(t instanceof It)h=qn(t.firestore,Ci),f=Yh(t._key.path),u={next:g=>{e[a]&&e[a](VS(h,t,g))},error:e[a+1],complete:e[a+2]};else{const g=qn(t,Al);h=qn(g.firestore,Ci),f=g._query;const y=new x0(h);u={next:A=>{e[a]&&e[a](new kS(h,y,g,A))},error:e[a+1],complete:e[a+2]},xS(t._query)}return function(y,A,P,V){const b=new lS(V),x=new Hx(A,b,P);return y.asyncQueue.enqueueAndForget(async()=>zx(await wm(y),x)),()=>{b.Za(),y.asyncQueue.enqueueAndForget(async()=>Ux(await wm(y),x))}}(p0(h),f,l,u)}function wd(t,e){return function(r,i){const s=new Ir;return r.asyncQueue.enqueueAndForget(async()=>eS(await hS(r),i,s)),s.promise}(p0(t),e)}function VS(t,e,n){const r=n.docs.get(e._key),i=new x0(t);return new I0(t,i,e._key,r,new ms(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Di=i})(m1),Gn(new _n("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Ci(new R1(r.getProvider("auth-internal")),new D1(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ys(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Zt($p,"4.7.3",e),Zt($p,"4.7.3","esm2017")})();const S0="@firebase/installations",Ed="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=1e4,k0=`w:${Ed}`,C0="FIS_v2",DS="https://firebaseinstallations.googleapis.com/v1",bS=60*60*1e3,OS="installations",MS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vr=new pl(OS,MS,LS);function R0(t){return t instanceof nr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0({projectId:t}){return`${DS}/projects/${t}/installations`}function N0(t){return{token:t.token,requestStatus:2,expiresIn:jS(t.expiresIn),creationTime:Date.now()}}async function V0(t,e){const r=(await e.json()).error;return Vr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function D0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function FS(t,{refreshToken:e}){const n=D0(t);return n.append("Authorization",zS(e)),n}async function b0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function jS(t){return Number(t.replace("s","000"))}function zS(t){return`${C0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=P0(t),i=D0(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:C0,appId:t.appId,sdkVersion:k0},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await b0(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:N0(h.authToken)}}else throw await V0("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=/^[cdef][\w-]{21}$/,qc="";function HS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qS(t);return $S.test(n)?n:qc}catch{return qc}}function qS(t){return BS(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new Map;function L0(t,e){const n=Pl(t);F0(n,e),WS(n,e)}function F0(t,e){const n=M0.get(t);if(n)for(const r of n)r(e)}function WS(t,e){const n=KS();n&&n.postMessage({key:t,fid:e}),QS()}let _r=null;function KS(){return!_r&&"BroadcastChannel"in self&&(_r=new BroadcastChannel("[Firebase] FID Change"),_r.onmessage=t=>{F0(t.data.key,t.data.fid)}),_r}function QS(){M0.size===0&&_r&&(_r.close(),_r=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="firebase-installations-database",YS=1,Dr="firebase-installations-store";let Ru=null;function Td(){return Ru||(Ru=rv(GS,YS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dr)}}})),Ru}async function Ya(t,e){const n=Pl(t),i=(await Td()).transaction(Dr,"readwrite"),s=i.objectStore(Dr),a=await s.get(n);return await s.put(e,n),await i.done,(!a||a.fid!==e.fid)&&L0(t,e.fid),e}async function j0(t){const e=Pl(t),r=(await Td()).transaction(Dr,"readwrite");await r.objectStore(Dr).delete(e),await r.done}async function Nl(t,e){const n=Pl(t),i=(await Td()).transaction(Dr,"readwrite"),s=i.objectStore(Dr),a=await s.get(n),l=e(a);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!a||a.fid!==l.fid)&&L0(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(t){let e;const n=await Nl(t.appConfig,r=>{const i=XS(r),s=JS(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===qc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function XS(t){const e=t||{fid:HS(),registrationStatus:0};return z0(e)}function JS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Vr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ZS(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eA(t)}:{installationEntry:e}}async function ZS(t,e){try{const n=await US(t,e);return Ya(t.appConfig,n)}catch(n){throw R0(n)&&n.customData.serverCode===409?await j0(t.appConfig):await Ya(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eA(t){let e=await Rm(t.appConfig);for(;e.registrationStatus===1;)await O0(100),e=await Rm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Id(t);return r||n}return e}function Rm(t){return Nl(t,e=>{if(!e)throw Vr.create("installation-not-found");return z0(e)})}function z0(t){return tA(t)?{fid:t.fid,registrationStatus:0}:t}function tA(t){return t.registrationStatus===1&&t.registrationTime+A0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA({appConfig:t,heartbeatServiceProvider:e},n){const r=rA(t,n),i=FS(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:k0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await b0(()=>fetch(r,l));if(u.ok){const h=await u.json();return N0(h)}else throw await V0("Generate Auth Token",u)}function rA(t,{fid:e}){return`${P0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xd(t,e=!1){let n;const r=await Nl(t.appConfig,s=>{if(!U0(s))throw Vr.create("not-registered");const a=s.authToken;if(!e&&oA(a))return s;if(a.requestStatus===1)return n=iA(t,e),s;{if(!navigator.onLine)throw Vr.create("app-offline");const l=lA(s);return n=sA(t,l),l}});return n?await n:r.authToken}async function iA(t,e){let n=await Pm(t.appConfig);for(;n.authToken.requestStatus===1;)await O0(100),n=await Pm(t.appConfig);const r=n.authToken;return r.requestStatus===0?xd(t,e):r}function Pm(t){return Nl(t,e=>{if(!U0(e))throw Vr.create("not-registered");const n=e.authToken;return uA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sA(t,e){try{const n=await nA(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ya(t.appConfig,r),n}catch(n){if(R0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await j0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ya(t.appConfig,r)}throw n}}function U0(t){return t!==void 0&&t.registrationStatus===2}function oA(t){return t.requestStatus===2&&!aA(t)}function aA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+bS}function lA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uA(t){return t.requestStatus===1&&t.requestTime+A0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t){const e=t,{installationEntry:n,registrationPromise:r}=await Id(e);return r?r.catch(console.error):xd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e=!1){const n=t;return await dA(n),(await xd(n,e)).token}async function dA(t){const{registrationPromise:e}=await Id(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){if(!t||!t.options)throw Pu("App Configuration");if(!t.name)throw Pu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Pu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Pu(t){return Vr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="installations",pA="installations-internal",mA=t=>{const e=t.getProvider("app").getImmediate(),n=fA(e),r=so(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},gA=t=>{const e=t.getProvider("app").getImmediate(),n=so(e,B0).getImmediate();return{getId:()=>cA(n),getToken:i=>hA(n,i)}};function yA(){Gn(new _n(B0,mA,"PUBLIC")),Gn(new _n(pA,gA,"PRIVATE"))}yA();Zt(S0,Ed);Zt(S0,Ed,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="analytics",vA="firebase_id",_A="origin",wA=60*1e3,EA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Uh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xt=new pl("analytics","Analytics",TA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t){if(!t.startsWith(Sd)){const e=xt.create("invalid-gtag-resource",{gtagURL:t});return yt.warn(e.message),""}return t}function $0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function xA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function SA(t,e){const n=xA("firebase-js-sdk-policy",{createScriptURL:IA}),r=document.createElement("script"),i=`${Sd}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function AA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function kA(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const u=(await $0(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(l){yt.error(l)}t("config",i,s)}async function CA(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await $0(n);for(const u of a){const h=l.find(g=>g.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){yt.error(s)}}function RA(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[l,u]=a;await CA(t,e,n,l,u)}else if(s==="config"){const[l,u]=a;await kA(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=a;t("consent",l,u)}else if(s==="get"){const[l,u,h]=a;t("get",l,u,h)}else if(s==="set"){const[l]=a;t("set",l)}else t(s,...a)}catch(l){yt.error(l)}}return i}function PA(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=RA(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function NA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Sd)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=30,DA=1e3;class bA{constructor(e={},n=DA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const H0=new bA;function OA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function MA(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:OA(r)},s=EA.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw xt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function LA(t,e=H0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw xt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw xt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new zA;return setTimeout(async()=>{l.abort()},wA),q0({appId:r,apiKey:i,measurementId:s},a,l,e)}async function q0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=H0){var s;const{appId:a,measurementId:l}=t;try{await FA(r,e)}catch(u){if(l)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await MA(t);return i.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!jA(h)){if(i.deleteThrottleMetadata(a),l)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const f=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?Dp(n,i.intervalMillis,VA):Dp(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(a,g),yt.debug(`Calling attemptFetch again in ${f} millis`),q0(t,g,r,i)}}function FA(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jA(t){if(!(t instanceof nr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class zA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function UA(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(){if(Zy())try{await ev()}catch(t){return yt.warn(xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return yt.warn(xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $A(t,e,n,r,i,s,a){var l;const u=LA(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>yt.error(A)),e.push(u);const h=BA().then(A=>{if(A)return r.getId()}),[f,g]=await Promise.all([u,h]);NA(s)||SA(s,f.measurementId),i("js",new Date);const y=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return y[_A]="firebase",y.update=!0,g!=null&&(y[vA]=g),i("config",f.measurementId,y),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.app=e}_delete(){return delete Rs[this.app.options.appId],Promise.resolve()}}let Rs={},Nm=[];const Vm={};let Nu="dataLayer",qA="gtag",Dm,W0,bm=!1;function WA(){const t=[];if(lT()&&t.push("This is a browser extension environment."),cT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xt.create("invalid-analytics-context",{errorInfo:e});yt.warn(n.message)}}function KA(t,e,n){WA();const r=t.options.appId;if(!r)throw xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xt.create("no-api-key");if(Rs[r]!=null)throw xt.create("already-exists",{id:r});if(!bm){AA(Nu);const{wrappedGtag:s,gtagCore:a}=PA(Rs,Nm,Vm,Nu,qA);W0=s,Dm=a,bm=!0}return Rs[r]=$A(t,Nm,Vm,e,Dm,Nu,n),new HA(t)}function QA(t=sv()){t=Kt(t);const e=so(t,Xa);return e.isInitialized()?e.getImmediate():GA(t)}function GA(t,e={}){const n=so(t,Xa);if(n.isInitialized()){const i=n.getImmediate();if(ja(e,n.getOptions()))return i;throw xt.create("already-initialized")}return n.initialize({options:e})}function YA(t,e,n,r){t=Kt(t),UA(W0,Rs[t.app.options.appId],e,n,r).catch(i=>yt.error(i))}const Om="@firebase/analytics",Mm="0.10.8";function XA(){Gn(new _n(Xa,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return KA(r,i,n)},"PUBLIC")),Gn(new _n("analytics-internal",t,"PRIVATE")),Zt(Om,Mm),Zt(Om,Mm,"esm2017");function t(e){try{const n=e.getProvider(Xa).getImmediate();return{logEvent:(r,i,s)=>YA(n,r,i,s)}}catch(n){throw xt.create("interop-component-reg-failed",{reason:n})}}}XA();const Lm="/vibe-store/assets/hero-bg-CtGpMX4r.jpg",JA={apiKey:"AIzaSyCbqI-fh2K0RMMA_SyXMHT2r4j5YXulUQM",authDomain:"vibe-store-project.firebaseapp.com",projectId:"vibe-store-project",storageBucket:"vibe-store-project.firebasestorage.app",messagingSenderId:"364551371666",appId:"1:364551371666:web:bf1aabc1d59c1caf009f4b",measurementId:"G-R3OHE4XVSG"},K0=iv(JA);QA(K0);const as=pS(K0),ZA=[{id:1,name:"Товар 1",price:"3 200",desc:"Преміальний комфорт та футуристичний силует.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кросівки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:2,name:"Товар 2",price:"5 700",desc:"Масивний дизайн у стилі нульових.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кеди",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:3,name:"Товар 3",price:"5 000",desc:"Спортивна естетика в деконструйованому стилі.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кросівки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:4,name:"Товар 4",price:"1 800",desc:"Джинси кльош з ідеальною посадкою.",sizes:["S","M","L","XL"],category:"Штани та джинси",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:5,name:"Товар 5",price:"2 600",desc:"Класичний світшот з м'якої бавовни.",sizes:["S","M","L","XL"],category:"Худі та світшоти",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:6,name:"Товар 6",price:"4 200",desc:"Легендарний силует для повсякденного стилю.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кросівки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:7,name:"Товар 7",price:"900",desc:"Базова біла футболка оверсайз.",sizes:["S","M","L","XL"],category:"Футболки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:8,name:"Товар 8",price:"900",desc:"Футболка з яскравим принтом.",sizes:["S","M","L","XL"],category:"Футболки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:9,name:"Товар 9",price:"2 100",desc:"Зручне зіп-худі на кожен день.",sizes:["S","M","L","XL"],category:"Худі та світшоти",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:10,name:"Товар 10",price:"1 950",desc:"Широкі джинси з щільного деніму.",sizes:["S","M","L","XL"],category:"Штани та джинси",images:["https://via.placeholder.com/150"],currentImageIndex:0}];function ek(){const[t,e]=he.useState(!1),[n,r]=he.useState(0),[i,s]=he.useState(!0),[a,l]=he.useState(null),[u,h]=he.useState(null),[f,g]=he.useState(!1),[y,A]=he.useState(!1),[P,V]=he.useState(!1),[b,x]=he.useState(!1),[_,S]=he.useState("Всі"),[D,z]=he.useState(""),[U,w]=he.useState(!1),[m,v]=he.useState(!1),[T,k]=he.useState([]),[C,E]=he.useState(()=>JSON.parse(localStorage.getItem("vibestore_cart")||"[]")),[ct,sn]=he.useState(()=>!localStorage.getItem("vibe_consent_accepted")),ir=()=>{localStorage.setItem("vibe_consent_accepted","true"),sn(!1)};he.useEffect(()=>{localStorage.setItem("vibestore_cart",JSON.stringify(C))},[C]),he.useEffect(()=>{const F=Sm(as,"products");return NS(F,Z=>{const Oe=Z.docs.map(Lt=>({id:Lt.id,...Lt.data()}));k(Oe),localStorage.setItem("vibestore_products",JSON.stringify(Oe))},()=>{const Z=localStorage.getItem("vibestore_products");k(Z?JSON.parse(Z):ZA)})},[]),he.useEffect(()=>{var F;if((F=window.Telegram)!=null&&F.WebApp){const Q=window.Telegram.WebApp;Q.ready(),Q.expand(),Q.setHeaderColor("#1a73e8")}},[]);const it=he.useRef(),B=he.useRef(),K=he.useRef();he.useEffect(()=>{const F=new IntersectionObserver(Q=>{Q.forEach(Z=>{Z.isIntersecting&&Z.target.classList.add("is-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return setTimeout(()=>{document.querySelectorAll(".animated-title").forEach(Q=>F.observe(Q)),it.current&&F.observe(it.current),K.current&&F.observe(K.current)},100),()=>F.disconnect()},[_,D]);const J=()=>{if(window.innerWidth<1024){alert("Адмін-панель доступна тільки на ПК (ширина екрана ≥ 1024px)"),r(0);return}r(F=>F+1),n+1===5&&(prompt("Введіть адмін-пароль:")==="8934"&&(e(!0),alert("Режим адміна увімкнено!")),r(0)),setTimeout(()=>r(0),2e3)},fe=async()=>{var Fi,fo,zr,Ur;const F=(Fi=document.getElementById("p-name"))==null?void 0:Fi.value.trim(),Q=(fo=document.getElementById("p-price"))==null?void 0:fo.value.trim(),Z=(zr=document.getElementById("p-category"))==null?void 0:zr.value,Oe=(Ur=document.getElementById("p-desc"))==null?void 0:Ur.value.trim(),Lt=document.getElementById("p-file"),or=Lt!=null&&Lt.files?Array.from(Lt.files):[];if(!F||!Q||!Z)return alert("Заповніть назву, ціну та категорію!");v(!0);const ar=async on=>{try{await PS(Sm(as,"products"),{name:F,price:Q,category:Z,description:Oe||"",images:on.length?on:["https://via.placeholder.com/150"],currentImageIndex:0,sizes:Z==="Кросівки"||Z==="Кеди"?["37","38","39","40","41","42","43","44","45"]:["S","M","L","XL"],createdAt:Date.now()}),alert("✅ Товар успішно доданий!"),["p-name","p-price","p-desc"].forEach(xe=>document.getElementById(xe).value=""),Lt&&(Lt.value=""),document.getElementById("p-category").value=""}catch{alert("Не вдалося додати товар.")}finally{v(!1)}};if(or.length){const on=[];let xe=0;or.forEach(ze=>{const an=new FileReader;an.onloadend=()=>{on.push(an.result),++xe===or.length&&ar(on)},an.onerror=()=>{++xe===or.length&&!on.length&&ar([])},an.readAsDataURL(ze)})}else ar([])},ae=async(F,Q)=>{Q.stopPropagation(),confirm("Видалити цей товар?")&&await RS(da(as,"products",F))},_e=async F=>{if(F.stopPropagation(),!a)return;const Q=T.find(Oe=>Oe.id===a.id);if(!Q||Q.images.length<=1)return;const Z=(Q.currentImageIndex+1)%Q.images.length;await Cm(da(as,"products",a.id),{currentImageIndex:Z}),l(Oe=>({...Oe,currentImageIndex:Z}))},Mt=async F=>{if(F.stopPropagation(),!a)return;const Q=T.find(Oe=>Oe.id===a.id);if(!Q||Q.images.length<=1)return;const Z=Q.currentImageIndex===0?Q.images.length-1:Q.currentImageIndex-1;await Cm(da(as,"products",a.id),{currentImageIndex:Z}),l(Oe=>({...Oe,currentImageIndex:Z}))},Ct=T.filter(F=>(_==="Всі"||F.category===_)&&F.name.toLowerCase().includes(D.toLowerCase())),je=F=>{S(F),z(""),A(!1),setTimeout(()=>{var Q;return(Q=K.current)==null?void 0:Q.scrollIntoView({behavior:"smooth",block:"start"})},300)},Rt=F=>{if(B.current){const Q=B.current.querySelector(".product-scroll-anim"),Z=Q?Q.offsetWidth+20:B.current.offsetWidth;B.current.scrollBy({left:F==="left"?-Z:Z,behavior:"smooth"})}},Mi=()=>{x(!0),setTimeout(()=>{l(null),h(null),V(!1),x(!1)},300)},Vl=F=>{if(!u)return alert("Спершу обери розмір!");E([...C,{...F,chosenSize:u,cartId:Date.now()}]),V(!0),setTimeout(()=>{Mi(),setTimeout(()=>g(!0),350)},1e3)},Fr=()=>{if(!C.length)return;const F=C.map(Z=>`- ${Z.name} (${Z.chosenSize}): ${Z.price} UAH`).join(`
`),Q=C.reduce((Z,Oe)=>Z+parseInt(Oe.price.replace(/\s/g,"")),0);window.open(`https://t.me/vibestore_manager?text=${encodeURIComponent(`Вітаю! Хочу зробити замовлення:

${F}

Разом: ${Q} UAH`)}`,"_blank"),E([]),g(!1)},jr=()=>{if(!C.length)return;const F=C.map(Z=>`- ${Z.name} (${Z.chosenSize}): ${Z.price} UAH`).join(`
`),Q=C.reduce((Z,Oe)=>Z+parseInt(Oe.price.replace(/\s/g,"")),0);window.open(`https://viber.click/380936739172?text=${encodeURIComponent(`Вітаю! Хочу зробити замовлення:

${F}

Разом: ${Q} UAH`)}`,"_blank"),E([]),g(!1)},sr=({onClick:F})=>I.jsx("div",{onClick:F,className:"close-icon-wrapper",children:I.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),Li=[{name:"Діма",text:"Якість просто пушка! Рекомендую однозначно."},{name:"Оля",text:"Оригінал 100%, розмір підійшов ідеально, дякую!"},{name:"Макс",text:"Доставка швидка, менеджери топ. Буду брати ще."},{name:"Катя",text:"Дуже зручні, виглядають вживу ще краще, ніж на фото."},{name:"Влад",text:"Легіт чек пройшли, все чітко. Респект магазину."}];return I.jsxs("div",{className:"app-container",style:{opacity:i?1:0,transition:"opacity 0.8s"},children:[ct&&I.jsxs("div",{className:"consent-banner",children:[I.jsx("span",{className:"consent-text",children:"Заходячи на сайт, ви погоджуєтеся з Умовами використання та Політикою конфіденційності VIBE STORE."}),I.jsx("button",{className:"consent-btn",onClick:ir,children:"ПРИЙМАЮ"})]}),I.jsxs("header",{className:"main-header",children:[I.jsxs("div",{style:{display:"flex",gap:"8px"},children:[I.jsx("button",{onClick:()=>A(!0),className:"nav-pill-btn",children:"КАТАЛОГ"}),I.jsxs("button",{onClick:()=>g(!0),className:"nav-pill-btn",children:["КОШИК [",C.length,"]"]})]}),I.jsx("div",{className:"logo-wrap-3d",children:I.jsx("h1",{className:"main-logo-3d",onClick:J,children:"VIBE STORE"})})]}),t&&window.innerWidth>=1024&&I.jsxs("div",{className:"admin-panel-modern",children:[I.jsxs("div",{className:"admin-panel-header",children:[I.jsx("h2",{children:"⚡ Панель керування"}),I.jsx("button",{className:"admin-close-btn",onClick:()=>e(!1),children:"✕"})]}),I.jsxs("div",{className:"admin-form",children:[I.jsx("input",{id:"p-name",type:"text",placeholder:"Назва товару",className:"admin-input"}),I.jsxs("div",{className:"admin-row",children:[I.jsx("input",{id:"p-price",type:"number",placeholder:"Ціна (UAH)",className:"admin-input"}),I.jsxs("select",{id:"p-category",className:"admin-input",children:[I.jsx("option",{value:"",children:"Категорія"}),I.jsx("option",{value:"Футболки",children:"Футболки"}),I.jsx("option",{value:"Худі та світшоти",children:"Худі та світшоти"}),I.jsx("option",{value:"Штани та джинси",children:"Штани та джинси"}),I.jsx("option",{value:"Шорти",children:"Шорти"}),I.jsx("option",{value:"Кросівки",children:"Кросівки"}),I.jsx("option",{value:"Аксесуари",children:"Аксесуари"})]})]}),I.jsx("textarea",{id:"p-desc",placeholder:"Опис (розміри, матеріал...)",rows:"3",className:"admin-input"}),I.jsxs("div",{className:"file-zone",children:[I.jsx("label",{className:"file-label",children:"📸 Фото товару (можна декілька)"}),I.jsx("input",{type:"file",id:"p-file",accept:"image/*",multiple:!0,style:{display:"none"}}),I.jsx("button",{className:"file-trigger",onClick:()=>document.getElementById("p-file").click(),children:"Вибрати файли"})]}),I.jsx("button",{onClick:fe,className:"admin-submit",disabled:m,style:{opacity:m?.6:1},children:m?"Публікація...":"➕ Опублікувати товар"})]})]}),I.jsx("div",{className:`drawer-overlay ${y||f?"visible":""}`,onClick:()=>{A(!1),g(!1)}}),I.jsxs("div",{className:`side-drawer left-drawer ${y?"open":""}`,children:[I.jsx(sr,{onClick:()=>A(!1)}),I.jsx("h2",{className:"drawer-title",children:"КАТАЛОГ"}),I.jsx("div",{className:"search-container",children:I.jsx("input",{type:"text",placeholder:"Пошук товару...",value:D,onChange:F=>z(F.target.value),className:"search-input"})}),I.jsxs("div",{className:"catalog-content",children:[I.jsx("div",{className:"catalog-section",children:I.jsx("ul",{className:"catalog-list",children:I.jsx("li",{onClick:()=>je("Всі"),className:_==="Всі"?"active-category":"",children:"ВСІ ТОВАРИ"})})}),I.jsxs("div",{className:"catalog-section",children:[I.jsx("h3",{className:"catalog-subtitle",children:"ОДЯГ"}),I.jsxs("ul",{className:"catalog-list",children:[I.jsx("li",{onClick:()=>je("Футболки"),children:"Футболки"}),I.jsx("li",{onClick:()=>je("Худі та світшоти"),children:"Худі та світшоти"}),I.jsx("li",{onClick:()=>je("Штани та джинси"),children:"Штани та джинси"}),I.jsx("li",{onClick:()=>je("Шорти"),children:"Шорти"})]})]}),I.jsxs("div",{className:"catalog-section",children:[I.jsx("h3",{className:"catalog-subtitle",children:"ВЗУТТЯ"}),I.jsx("ul",{className:"catalog-list",children:I.jsx("li",{onClick:()=>je("Кросівки"),children:"Кросівки"})})]}),I.jsxs("div",{className:"catalog-section",children:[I.jsx("h3",{className:"catalog-subtitle",children:"АКСЕСУАРИ"}),I.jsx("ul",{className:"catalog-list",children:I.jsx("li",{onClick:()=>je("Аксесуари"),children:"Аксесуари"})})]})]})]}),I.jsxs("div",{className:`side-drawer right-drawer ${f?"open":""}`,children:[I.jsx(sr,{onClick:()=>g(!1)}),I.jsx("h2",{className:"drawer-title",children:"КОШИК"}),I.jsx("div",{className:"cart-items-container",children:C.length===0?I.jsxs("div",{className:"empty-cart-message",children:[I.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#555",strokeWidth:"1",children:[I.jsx("circle",{cx:"9",cy:"21",r:"1"}),I.jsx("circle",{cx:"20",cy:"21",r:"1"}),I.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),I.jsx("p",{children:"Ваш кошик порожній"})]}):C.map(F=>{var Q;return I.jsx("div",{className:"cart-item",children:I.jsxs("div",{className:"cart-item-row",children:[I.jsx("img",{src:((Q=F.images)==null?void 0:Q[0])||"https://via.placeholder.com/50",alt:F.name,className:"cart-item-img"}),I.jsxs("div",{className:"cart-item-info",children:[I.jsx("p",{className:"cart-item-name",children:F.name}),I.jsxs("p",{className:"cart-item-size",children:["РОЗМІР: ",F.chosenSize]})]}),I.jsxs("div",{className:"cart-item-price-block",children:[I.jsxs("p",{className:"cart-item-price",children:[F.price," UAH"]}),I.jsx("div",{className:"cart-item-delete",onClick:()=>E(C.filter(Z=>Z.cartId!==F.cartId)),children:I.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[I.jsx("polyline",{points:"3 6 5 6 21 6"}),I.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})]})]})},F.cartId)})}),C.length>0&&I.jsxs("div",{className:"cart-footer",children:[I.jsxs("div",{className:"cart-total",children:[I.jsx("span",{children:"РАЗОМ:"}),I.jsxs("span",{className:"cart-total-price",children:[C.reduce((F,Q)=>F+parseInt(Q.price.replace(/\s/g,"")),0).toLocaleString()," UAH"]})]}),I.jsxs("div",{className:"cart-order-buttons",children:[I.jsx("button",{onClick:Fr,className:"order-btn telegram-btn",children:"📱 Замовити через Telegram"}),I.jsx("button",{onClick:jr,className:"order-btn viber-btn",children:"📞 Замовити через Viber"})]})]})]}),I.jsxs("main",{className:"main-content",children:[I.jsxs("section",{className:"hero-section",children:[I.jsxs("div",{className:"hero-mobile",children:[I.jsx("img",{src:Lm,alt:"VIBE STORE",className:"hero-mobile-img"}),I.jsx("button",{onClick:()=>{var F;return(F=it.current)==null?void 0:F.scrollIntoView({behavior:"smooth"})},className:"cta-button cta-mobile",children:"ПРИДБАТИ ОДЯГ"}),I.jsx("div",{className:"hero-description-box",children:I.jsxs("div",{className:"animated-gradient-box",children:["VIBE STORE — це онлайн магазин люксових речей під замовлення з Китаю 🇨🇳",I.jsx("br",{}),I.jsx("br",{}),"Ми підбираємо одяг, взуття та аксесуари під клієнта з увагою до деталей: розмір, колір і якість.",I.jsx("br",{}),I.jsx("br",{}),"Працюємо чесно і прозоро, супроводжуємо замовлення від покупки до отримання.",I.jsx("br",{}),I.jsx("br",{}),"⭐️ 500+ позитивних відгуків",I.jsx("br",{}),I.jsx("br",{}),"VIBE STORE — коли хочеш виглядати стильно без переплат 💙"]})})]}),I.jsxs("div",{className:"hero-desktop",children:[I.jsx("img",{src:Lm,alt:"VIBE STORE",className:"hero-desktop-img"}),I.jsx("button",{onClick:()=>{var F;return(F=it.current)==null?void 0:F.scrollIntoView({behavior:"smooth"})},className:"cta-button",children:"ПРИДБАТИ ОДЯГ"}),I.jsx("div",{className:"hero-description-box",children:I.jsxs("div",{className:"animated-gradient-box",children:["VIBE STORE — це онлайн магазин люксових речей під замовлення з Китаю 🇨🇳",I.jsx("br",{}),I.jsx("br",{}),"Ми підбираємо одяг, взуття та аксесуари під клієнта з увагою до деталей: розмір, колір і якість.",I.jsx("br",{}),I.jsx("br",{}),"Працюємо чесно і прозоро, супроводжуємо замовлення від покупки до отримання.",I.jsx("br",{}),I.jsx("br",{}),"⭐️ 500+ позитивних відгуків",I.jsx("br",{}),I.jsx("br",{}),"VIBE STORE — коли хочеш виглядати стильно без переплат 💙"]})})]})]}),I.jsxs("section",{ref:it,className:"shop-section",children:[I.jsx("h2",{className:"animated-title",children:"NEW DROPS"}),I.jsxs("div",{className:"slider-container",children:[I.jsx("button",{className:"slider-nav-btn prev",onClick:()=>Rt("left"),children:I.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:I.jsx("polyline",{points:"15 18 9 12 15 6"})})}),I.jsx("div",{className:"products-scroll-container",ref:B,children:T.map(F=>I.jsx("div",{onClick:()=>l(F),className:"product-scroll-anim",children:I.jsxs("div",{className:"product-card-modern",children:[t&&I.jsx("div",{className:"delete-icon",onClick:Q=>ae(F.id,Q),children:"🗑️"}),I.jsx("div",{className:"product-image-wrapper",children:I.jsx("img",{src:F.images[0],alt:F.name,className:"product-image"})}),I.jsx("h3",{className:"product-title-modern",children:F.name}),I.jsxs("p",{className:"product-price-modern",children:[F.price," UAH"]})]})},F.id))}),I.jsx("button",{className:"slider-nav-btn next",onClick:()=>Rt("right"),children:I.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:I.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]}),I.jsxs("section",{ref:K,className:"shop-section",style:{paddingTop:"20px"},children:[I.jsx("h2",{className:"animated-title",children:D?`РЕЗУЛЬТАТИ ПОШУКУ: "${D}"`:_==="Всі"?"ВСІ ТОВАРИ":_.toUpperCase()}),Ct.length===0?I.jsxs("div",{className:"no-products",children:[I.jsx("p",{children:"Нічого не знайдено :("}),I.jsx("button",{onClick:()=>{S("Всі"),z("")},className:"reset-filter",children:"Скинути фільтри"})]}):I.jsx("div",{className:"all-products-grid",children:Ct.map(F=>I.jsx("div",{onClick:()=>l(F),className:"product-scroll-anim",children:I.jsxs("div",{className:"product-card-modern",children:[t&&I.jsx("div",{className:"delete-icon",onClick:Q=>ae(F.id,Q),children:"🗑️"}),I.jsx("div",{className:"product-image-wrapper",children:I.jsx("img",{src:F.images[0],alt:F.name,className:"product-image"})}),I.jsx("h3",{className:"product-title-modern",children:F.name}),I.jsxs("p",{className:"product-price-modern",children:[F.price," UAH"]})]})},F.id))})]})]}),I.jsxs("footer",{className:"main-footer",children:[I.jsxs("div",{className:"footer-content",children:[I.jsxs("div",{className:"footer-logo-section",children:[I.jsx("h2",{className:"footer-logo-3d",children:"VIBE STORE"}),I.jsx("p",{children:"Твій стиль. Твій вибір."})]}),I.jsxs("div",{className:"footer-links",children:[I.jsxs("div",{className:"footer-column",children:[I.jsx("h4",{children:"Клієнтам"}),I.jsx("span",{onClick:()=>w(!0),className:"footer-link",children:"Доставка та оплата"})]}),I.jsxs("div",{className:"footer-column",children:[I.jsx("h4",{children:"Соцмережі"}),I.jsx("span",{onClick:()=>window.open("https://www.instagram.com/vibestoree.ua?igsh=MTZhcHVxOXpqMzZxbA%3D%3D&utm_source=qr","_blank"),className:"footer-link",children:"Instagram"}),I.jsx("span",{onClick:()=>window.open("https://t.me/vibestore_manager","_blank"),className:"footer-link",children:"Telegram"}),I.jsx("span",{onClick:()=>window.open("https://viber.click/380936739172","_blank"),className:"footer-link",children:"Viber"}),I.jsx("span",{onClick:()=>window.open("https://www.tiktok.com/@vibestore.ua?_r=1&_t=ZS-95VPaeqVzoz","_blank"),className:"footer-link",children:"TikTok"})]})]})]}),I.jsx("div",{className:"footer-bottom",children:I.jsx("p",{children:"© 2026 VIBE STORE. Всі права захищені."})})]}),a&&I.jsx("div",{className:`modal-overlay ${b?"closing":""}`,onClick:Mi,children:I.jsxs("div",{className:`compact-modal ${b?"closing":""}`,onClick:F=>F.stopPropagation(),children:[I.jsx("div",{className:"modal-close-pos",children:I.jsx(sr,{onClick:Mi})}),I.jsx("div",{className:"modal-drag-indicator"}),I.jsxs("div",{className:"slider-modal-container",children:[I.jsx("div",{className:"slider-image-wrapper",children:I.jsx("img",{src:a.images[a.currentImageIndex],alt:a.name,className:"slider-image"},a.currentImageIndex)}),a.images.length>1&&I.jsxs(I.Fragment,{children:[I.jsx("button",{className:"slider-arrow slider-arrow-left",onClick:Mt,children:I.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:I.jsx("polyline",{points:"15 18 9 12 15 6"})})}),I.jsx("button",{className:"slider-arrow slider-arrow-right",onClick:_e,children:I.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:I.jsx("polyline",{points:"9 18 15 12 9 6"})})}),I.jsxs("div",{className:"slider-counter",children:[a.currentImageIndex+1," / ",a.images.length]})]})]}),I.jsx("h2",{className:"modal-product-title",children:a.name}),I.jsx("p",{className:"modal-product-desc",children:a.desc}),I.jsx("p",{className:"modal-size-label",children:"ОБЕРІТЬ РОЗМІР"}),I.jsx("div",{className:"modal-sizes",children:a.sizes.map(F=>I.jsx("div",{onClick:()=>h(F),className:`size-btn ${u===F?"selected":""}`,children:F},F))}),I.jsx("button",{onClick:()=>Vl(a),className:`main-action-btn ${P?"success":""}`,children:P?"ГАРНИЙ ВИБІР ✓":`ДОДАТИ — ${a.price} UAH`}),I.jsxs("div",{className:"reviews-section",children:[I.jsx("h3",{children:"ВІДГУКИ КЛІЄНТІВ"}),Li.slice(0,3).map((F,Q)=>I.jsxs("div",{className:"review-card",children:[I.jsxs("div",{className:"review-header",children:[I.jsx("span",{className:"review-name",children:F.name}),I.jsx("span",{className:"review-stars",children:"★★★★★"})]}),I.jsx("p",{className:"review-text",children:F.text})]},Q))]})]})}),U&&I.jsx("div",{className:"rules-overlay",onClick:()=>w(!1),children:I.jsxs("div",{className:"rules-modal",onClick:F=>F.stopPropagation(),children:[I.jsx("button",{className:"rules-close",onClick:()=>w(!1),children:"✕"}),I.jsx("h2",{className:"rules-title",children:"📜 ПРАВИЛА ТА УМОВИ"}),I.jsxs("div",{className:"rules-content",children:[I.jsx("h3",{children:"1. Загальні положення"}),I.jsx("p",{children:"Інтернет-магазин VIBE STORE здійснює продаж товарів під замовлення. Оформлюючи замовлення, ви погоджуєтесь з умовами, викладеними нижче."}),I.jsx("h3",{children:"2. Оплата"}),I.jsx("p",{children:"Оплата здійснюється на карту ПриватБанку або MonoBank після підтвердження замовлення менеджером. Повна передоплата 100%."}),I.jsx("h3",{children:"3. Доставка"}),I.jsx("p",{children:"Доставка по Україні Новою Поштою або Укрпоштою протягом 7-21 днів з моменту замовлення. Вартість доставки сплачує покупець."}),I.jsx("h3",{children:"4. Повернення та обмін"}),I.jsx("p",{children:"Товари належної якості поверненню не підлягають, оскільки замовляються індивідуально. У разі виявлення браку проводиться обмін."}),I.jsx("h3",{children:"5. Конфіденційність"}),I.jsx("p",{children:"Ваші персональні дані використовуються виключно для обробки замовлення і не передаються третім особам."}),I.jsx("p",{children:"Дякуємо, що обираєте VIBE STORE!"})]})]})}),I.jsx("style",{children:`
        /* Сброс отступов у корня, чтобы не было белой полосы сверху */
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        *::-webkit-scrollbar {
          display: none;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #fff;
          color: #000;
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-x: hidden;
        }

        /* ===== CONSENT BANNER ===== */
        .consent-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #fff;
          color: #0047FF;
          padding: 12px 5%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          z-index: 8500;
          box-shadow: 0 -4px 15px rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,71,255,0.15);
          font-family: 'Inter', sans-serif;
          animation: slideUpBanner 0.4s ease-out;
        }
        .consent-text {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
          flex: 1;
        }
        .consent-btn {
          background: #0047FF;
          border: none;
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          padding: 10px 24px;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 2px solid #0047FF;
        }
        .consent-btn:hover {
          background: #0033cc;
          border-color: #0033cc;
          transform: scale(1.02);
        }

        @keyframes slideUpBanner {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        /* ===== HEADER ===== */
        /* Удалили .top-glow-bar — он больше не отображается */

        .main-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 5%;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: linear-gradient(to bottom, rgba(26,115,232,0.95) 0%, rgba(26,115,232,0.5) 60%, rgba(26,115,232,0) 100%);
          backdrop-filter: blur(8px);
        }
        .nav-pill-btn {
          background: #fff;
          border: none;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 900;
          color: #1a73e8;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        .nav-pill-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(26,115,232,0.3);
        }

        .logo-wrap-3d {
          text-align: center;
        }
        .main-logo-3d {
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          text-shadow: 3px 3px 0 #0a2a5e;
          margin: 0;
          letter-spacing: 2px;
          cursor: pointer;
          user-select: none;
          transition: all 0.3s ease;
        }
        .main-logo-3d:hover {
          text-shadow: 0 0 15px #00ccff;
        }

        /* ===== ADMIN PANEL ===== */
        .admin-panel-modern {
          position: fixed;
          top: 80px;
          right: 20px;
          width: 400px;
          background: #fff;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          z-index: 2000;
          padding: 24px;
          border: 1px solid #e0e0e0;
        }
        .admin-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .admin-panel-header h2 {
          font-size: 20px;
          font-weight: 800;
          margin: 0;
        }
        .admin-close-btn {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #888;
          transition: all 0.2s;
        }
        .admin-close-btn:hover {
          color: #1a73e8;
          transform: scale(1.1);
        }
        .admin-input {
          width: 100%;
          padding: 12px;
          margin-bottom: 12px;
          border: 1px solid #ddd;
          border-radius: 16px;
          font-size: 14px;
          background: #f9f9f9;
          transition: border 0.2s;
        }
        .admin-input:focus {
          border-color: #1a73e8;
          outline: none;
        }
        .admin-row {
          display: flex;
          gap: 12px;
        }
        .file-zone {
          margin: 16px 0;
        }
        .file-label {
          font-weight: 600;
          margin-bottom: 8px;
          display: block;
        }
        .file-trigger {
          background: #f0f0f0;
          border: 1px dashed #aaa;
          padding: 12px;
          border-radius: 16px;
          width: 100%;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .file-trigger:hover {
          background: #e0e0e0;
          border-color: #1a73e8;
        }
        .admin-submit {
          width: 100%;
          padding: 14px;
          background: #1a73e8;
          color: #fff;
          border: none;
          border-radius: 30px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
          transition: all 0.3s ease;
        }
        .admin-submit:hover {
          background: #0a2a5e;
          transform: scale(1.02);
        }

        /* ===== DRAWERS (Catalog & Cart) ===== */
        .drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.25);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1500;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .drawer-overlay.visible {
          opacity: 1;
          visibility: visible;
        }

        .side-drawer {
          position: fixed;
          top: 0;
          bottom: 0;
          width: 340px;
          background: rgba(255,255,255,0.98);
          z-index: 1600;
          padding: 30px 20px;
          overflow-y: auto;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -15px 0 40px rgba(0, 123, 255, 0.4);
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .left-drawer {
          left: 0;
          transform: translateX(-100%);
          border-radius: 0 30px 30px 0;
          box-shadow: 15px 0 40px rgba(0, 123, 255, 0.4);
        }
        .right-drawer {
          right: 0;
          transform: translateX(100%);
          border-radius: 30px 0 0 30px;
        }
        .left-drawer.open {
          transform: translateX(0);
        }
        .right-drawer.open {
          transform: translateX(0);
        }

        .close-icon-wrapper {
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          color: #000;
          transition: all 0.3s ease;
        }
        .close-icon-wrapper:hover {
          color: #1a73e8;
          transform: rotate(90deg);
        }

        .drawer-title {
          font-size: 28px;
          font-weight: 900;
          margin-bottom: 20px;
          margin-top: 20px;
          color: #000;
        }

        .search-container {
          margin-bottom: 25px;
        }
        .search-input {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #ddd;
          border-radius: 40px;
          font-size: 14px;
          background: #f5f5f5;
          transition: all 0.3s ease;
        }
        .search-input:focus {
          border-color: #1a73e8;
          box-shadow: 0 0 0 3px rgba(26,115,232,0.1);
          outline: none;
        }

        .catalog-content {
          flex: 1;
        }
        .catalog-section {
          margin-bottom: 28px;
        }
        .catalog-subtitle {
          font-size: 14px;
          font-weight: 800;
          color: #888;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .catalog-list {
          list-style: none;
        }
        .catalog-list li {
          padding: 12px 0;
          font-size: 18px;
          font-weight: 700;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .catalog-list li:hover {
          color: #1a73e8;
          padding-left: 8px;
        }
        .catalog-list li.active-category {
          color: #1a73e8;
          font-weight: 900;
        }

        /* ===== CART ===== */
        .cart-items-container {
          flex: 1;
          overflow-y: auto;
          padding-right: 5px;
        }
        .empty-cart-message {
          text-align: center;
          margin-top: 60px;
          color: #555;
          font-size: 14px;
          font-weight: 500;
        }
        .cart-item {
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
        }
        .cart-item-row {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .cart-item-img {
          width: 55px;
          height: 55px;
          object-fit: cover;
          border-radius: 12px;
        }
        .cart-item-info {
          flex: 1;
          border-left: 3px solid #1a73e8;
          padding-left: 12px;
        }
        .cart-item-name {
          font-weight: 800;
          margin: 0;
          font-size: 15px;
          color: #000;
        }
        .cart-item-size {
          font-size: 11px;
          margin-top: 4px;
          color: #555;
        }
        .cart-item-price-block {
          text-align: right;
        }
        .cart-item-price {
          font-weight: 900;
          margin: 0;
          font-size: 15px;
          color: #000;
        }
        .cart-item-delete {
          cursor: pointer;
          color: #999;
          margin-top: 8px;
          transition: all 0.3s ease;
        }
        .cart-item-delete:hover {
          color: #ff3b30;
          transform: scale(1.1);
        }

        .cart-footer {
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        .cart-total {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          font-weight: 700;
          font-size: 16px;
        }
        .cart-total-price {
          font-weight: 900;
          font-size: 20px;
          color: #1a73e8;
        }
        .cart-order-buttons {
          display: flex;
          gap: 12px;
          flex-direction: column;
        }
        .order-btn {
          background: #1a73e8;
          color: #fff;
          border: none;
          padding: 16px;
          border-radius: 40px;
          font-weight: 700;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(26,115,232,0.2);
        }
        .order-btn:hover {
          background: #0a2a5e;
          transform: scale(1.02);
          box-shadow: 0 6px 15px rgba(26,115,232,0.4);
        }
        .telegram-btn {
          background: #0088cc;
        }
        .viber-btn {
          background: #7360f2;
        }

        /* ===== MAIN CONTENT ===== */
        .main-content {
          flex: 1;
          margin-top: 70px;
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          background: linear-gradient(135deg, #001a4d, #1a73e8);
          position: relative;
          overflow: hidden;
          padding: 60px 5% 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 90vh;
        }
        .hero-section::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%);
          z-index: 1;
        }

        .hero-mobile {
          display: block;
          width: 100%;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        .hero-mobile-img {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(255,255,255,0.2);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          margin-bottom: 30px;
          transition: transform 0.3s ease;
        }
        .hero-mobile-img:hover {
          transform: scale(1.02);
        }
        .hero-desktop {
          display: none;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        .hero-desktop-img {
          width: 100%;
          max-width: 600px;
          height: auto;
          display: block;
          margin: 0 auto 20px;
          border-radius: 20px;
          box-shadow: 0 0 60px rgba(0,0,0,0.4);
          mask-image: radial-gradient(circle at center, black 55%, transparent 95%);
          -webkit-mask-image: radial-gradient(circle at center, black 55%, transparent 95%);
          transition: transform 0.3s ease;
        }
        .hero-desktop-img:hover {
          transform: scale(1.01);
        }

        .cta-button {
          display: inline-block;
          margin: 20px 0;
          padding: 16px 40px;
          background: #0a2a5e;
          color: #fff;
          font-weight: 900;
          font-size: 1.3rem;
          border: none;
          border-radius: 60px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          z-index: 20;
        }
        .cta-button:hover {
          transform: scale(1.05) translateY(-3px);
          background: #051a3a;
          box-shadow: 0 12px 30px rgba(0,0,0,0.4);
        }
        .cta-mobile {
          background: #0a2a5e;
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
          font-size: 1rem;
          padding: 14px 30px;
        }

        .hero-description-box {
          margin-top: 20px;
          width: 100%;
          position: relative;
          z-index: 5;
        }
        .animated-gradient-box {
          position: relative;
          background: rgba(0,0,0,0.85);
          border-radius: 20px;
          padding: 25px 30px;
          text-align: center;
          color: #fff;
          font-size: 14px;
          line-height: 1.6;
          backdrop-filter: blur(2px);
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .animated-gradient-box::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #0066ff, #00ccff, #0066ff, #6600ff, #0066ff);
          background-size: 300% 300%;
          border-radius: 22px;
          z-index: -1;
          animation: borderShift 6s infinite;
          opacity: 0.8;
        }

        @keyframes borderShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Responsive Hero */
        @media (min-width: 1024px) {
          .hero-mobile { display: none; }
          .hero-desktop { display: block; }
          .hero-section { padding: 120px 5% 100px; }
        }

        /* ===== ANIMATED TITLES ===== */
        .animated-title {
          font-size: 36px;
          font-weight: 900;
          margin-bottom: 30px;
          text-transform: uppercase;
          background: linear-gradient(90deg, #000, #1a73e8, #000);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: textShimmer 3s linear infinite;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s;
        }
        .animated-title.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes textShimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        /* ===== SHOP SECTIONS ===== */
        .shop-section {
          padding: 40px 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Slider */
        .slider-container {
          position: relative;
        }
        .products-scroll-container {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 10px;
        }
        .product-scroll-anim {
          flex: 0 0 calc(50% - 10px);
          scroll-snap-align: start;
          cursor: pointer;
        }
        .slider-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          z-index: 10;
          transition: all 0.3s ease;
          color: #1a73e8;
        }
        .slider-nav-btn:hover {
          background: #fff;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 20px rgba(26,115,232,0.3);
        }
        .slider-nav-btn.prev { left: -20px; }
        .slider-nav-btn.next { right: -20px; }

        /* Product Cards */
        .product-card-modern {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          position: relative;
        }
        .product-card-modern:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(26,115,232,0.15);
        }
        .product-image-wrapper {
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f5f5f5;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .product-card-modern:hover .product-image {
          transform: scale(1.05);
        }
        .product-title-modern {
          font-size: 16px;
          font-weight: 700;
          margin: 12px 12px 4px;
        }
        .product-price-modern {
          font-size: 15px;
          font-weight: 800;
          color: #1a73e8;
          margin: 0 12px 12px;
        }
        .delete-icon {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255,255,255,0.95);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        .delete-icon:hover {
          background: #ff3b30;
          color: #fff;
          transform: scale(1.1);
        }

        /* All Products Grid */
        .all-products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .no-products {
          text-align: center;
          padding: 60px 20px;
        }
        .no-products p {
          font-weight: bold;
          color: #999;
          font-size: 18px;
          margin-bottom: 20px;
        }
        .reset-filter {
          background: #1a73e8;
          color: #fff;
          border: none;
          padding: 12px 28px;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .reset-filter:hover {
          background: #0a2a5e;
          transform: scale(1.05);
        }

        /* ===== FOOTER ===== */
        .main-footer {
          background: #0a0a0a;
          color: #fff;
          padding: 60px 5% 20px;
          margin-top: auto;
        }
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
        }
        .footer-logo-section h2 {
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 8px;
          color: #fff;
          text-shadow: 0 0 10px #1a73e8;
        }
        .footer-links {
          display: flex;
          gap: 80px;
          flex-wrap: wrap;
        }
        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-column h4 {
          margin: 0 0 5px;
          font-size: 16px;
          font-weight: 800;
          color: #fff;
        }
        .footer-link {
          cursor: pointer;
          font-size: 14px;
          color: #ccc;
          transition: all 0.3s ease;
          padding: 6px 0;
        }
        .footer-link:hover {
          color: #1a73e8;
          transform: translateX(5px);
        }
        .footer-bottom {
          text-align: center;
          color: #666;
          font-size: 12px;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #222;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          z-index: 3000;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          animation: fadeIn 0.3s;
        }
        .modal-overlay.closing {
          animation: fadeOut 0.3s forwards;
        }
        .compact-modal {
          background: #fff;
          width: 100%;
          max-width: 520px;
          border-radius: 40px 40px 0 0;
          padding: 24px;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.4s;
          box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
        }
        .compact-modal.closing {
          animation: slideDown 0.3s forwards;
        }
        .modal-close-pos {
          position: absolute;
          top: 24px;
          right: 24px;
        }
        .modal-drag-indicator {
          width: 50px;
          height: 5px;
          background: #ddd;
          border-radius: 10px;
          margin: 0 auto 24px;
        }
        .slider-modal-container {
          position: relative;
          margin-bottom: 20px;
        }
        .slider-image-wrapper {
          border-radius: 24px;
          overflow: hidden;
          background: #f5f5f5;
        }
        .slider-image {
          width: 100%;
          height: auto;
          display: block;
        }
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
          transition: all 0.3s ease;
        }
        .slider-arrow:hover {
          background: #fff;
          transform: translateY(-50%) scale(1.1);
        }
        .slider-arrow-left { left: 10px; }
        .slider-arrow-right { right: 10px; }
        .slider-counter {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: rgba(0,0,0,0.6);
          color: #fff;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 600;
        }
        .modal-product-title {
          font-weight: 900;
          font-size: 26px;
          margin: 15px 0 8px;
          color: #000;
        }
        .modal-product-desc {
          color: #333;
          font-size: 14px;
          margin: 0 0 20px;
          line-height: 1.5;
        }
        .modal-size-label {
          font-size: 12px;
          font-weight: 900;
          margin: 0 0 12px;
          color: #000;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .modal-sizes {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }
        .size-btn {
          padding: 10px 20px;
          border: 1.5px solid #ddd;
          border-radius: 40px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .size-btn:hover {
          border-color: #1a73e8;
          color: #1a73e8;
          transform: scale(1.05);
        }
        .size-btn.selected {
          background: #1a73e8;
          color: #fff;
          border-color: #1a73e8;
        }
        .main-action-btn {
          width: 100%;
          padding: 18px;
          background: #1a73e8;
          color: #fff;
          border: none;
          border-radius: 50px;
          font-weight: 800;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 15px rgba(26,115,232,0.2);
          margin-bottom: 20px;
        }
        .main-action-btn:hover {
          background: #0a2a5e;
          transform: scale(1.02);
        }
        .main-action-btn.success {
          background: #28a745;
        }
        .reviews-section {
          margin-top: 20px;
        }
        .reviews-section h3 {
          font-size: 16px;
          font-weight: 900;
          margin: 20px 0 15px;
          color: #1a73e8;
        }
        .review-card {
          background: #f9f9f9;
          border-radius: 20px;
          padding: 18px;
          margin-bottom: 12px;
        }
        .review-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .review-name {
          font-weight: 800;
        }
        .review-stars {
          color: #ffb800;
        }
        .review-text {
          font-size: 14px;
          color: #333;
        }

        /* ===== RULES MODAL ===== */
        .rules-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          z-index: 4000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rules-modal {
          background: #fff;
          width: 90%;
          max-width: 600px;
          max-height: 80vh;
          border-radius: 40px;
          padding: 30px;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .rules-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .rules-close:hover {
          color: #1a73e8;
          transform: rotate(90deg);
        }
        .rules-title {
          font-size: 26px;
          font-weight: 900;
          margin-bottom: 25px;
        }
        .rules-content h3 {
          margin-top: 20px;
          margin-bottom: 10px;
        }
        .rules-content p {
          margin-bottom: 15px;
          line-height: 1.6;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes slideDown {
          from { transform: translateY(0); }
          to { transform: translateY(100%); }
        }

        /* Responsive */
        @media (min-width: 768px) {
          .product-scroll-anim {
            flex: 0 0 calc(33.333% - 14px);
          }
          .all-products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (min-width: 1024px) {
          .product-scroll-anim {
            flex: 0 0 calc(25% - 15px);
          }
          .all-products-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .footer-links {
            gap: 100px;
          }
        }

        @media (max-width: 600px) {
          .consent-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 20px;
          }
          .consent-btn {
            align-self: flex-end;
          }
          .slider-nav-btn {
            width: 36px;
            height: 36px;
          }
          .slider-nav-btn.prev { left: -10px; }
          .slider-nav-btn.next { right: -10px; }
        }
      `})]})}Vu.createRoot(document.getElementById("root")).render(I.jsx(M_.StrictMode,{children:I.jsx(ek,{})}));
