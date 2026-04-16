(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function E0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jm={exports:{}},Xa={},zm={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Symbol.for("react.element"),T0=Symbol.for("react.portal"),I0=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),S0=Symbol.for("react.profiler"),A0=Symbol.for("react.provider"),k0=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),R0=Symbol.for("react.suspense"),P0=Symbol.for("react.memo"),N0=Symbol.for("react.lazy"),If=Symbol.iterator;function V0(t){return t===null||typeof t!="object"?null:(t=If&&t[If]||t["@@iterator"],typeof t=="function"?t:null)}var Um={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bm=Object.assign,$m={};function Ci(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||Um}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hm(){}Hm.prototype=Ci.prototype;function Wc(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||Um}var Kc=Wc.prototype=new Hm;Kc.constructor=Wc;Bm(Kc,Ci.prototype);Kc.isPureReactComponent=!0;var xf=Array.isArray,qm=Object.prototype.hasOwnProperty,Qc={current:null},Wm={key:!0,ref:!0,__self:!0,__source:!0};function Km(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)qm.call(e,r)&&!Wm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ys,type:t,key:s,ref:a,props:i,_owner:Qc.current}}function D0(t,e){return{$$typeof:Ys,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ys}function b0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sf=/\/+/g;function Ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?b0(""+t.key):e.toString(36)}function Go(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ys:case T0:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Ql(a,0):r,xf(i)?(n="",t!=null&&(n=t.replace(Sf,"$&/")+"/"),Go(i,e,n,"",function(h){return h})):i!=null&&(Gc(i)&&(i=D0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Sf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",xf(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ql(s,l);a+=Go(s,e,n,u,i)}else if(u=V0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ql(s,l++),a+=Go(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Co(t,e,n){if(t==null)return t;var r=[],i=0;return Go(t,r,"","",function(s){return e.call(n,s,i++)}),r}function O0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Yo={transition:null},M0={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:Qc};function Qm(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Co,forEach:function(t,e,n){Co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Co(t,function(){e++}),e},toArray:function(t){return Co(t,function(e){return e})||[]},only:function(t){if(!Gc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Ci;ee.Fragment=I0;ee.Profiler=S0;ee.PureComponent=Wc;ee.StrictMode=x0;ee.Suspense=R0;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;ee.act=Qm;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bm({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)qm.call(e,u)&&!Wm.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ys,type:t.type,key:i,ref:s,props:r,_owner:a}};ee.createContext=function(t){return t={$$typeof:k0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:A0,_context:t},t.Consumer=t};ee.createElement=Km;ee.createFactory=function(t){var e=Km.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:C0,render:t}};ee.isValidElement=Gc;ee.lazy=function(t){return{$$typeof:N0,_payload:{_status:-1,_result:t},_init:O0}};ee.memo=function(t,e){return{$$typeof:P0,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};ee.unstable_act=Qm;ee.useCallback=function(t,e){return at.current.useCallback(t,e)};ee.useContext=function(t){return at.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return at.current.useDeferredValue(t)};ee.useEffect=function(t,e){return at.current.useEffect(t,e)};ee.useId=function(){return at.current.useId()};ee.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return at.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};ee.useRef=function(t){return at.current.useRef(t)};ee.useState=function(t){return at.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return at.current.useTransition()};ee.version="18.3.1";zm.exports=ee;var ye=zm.exports;const L0=E0(ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=ye,j0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),U0=Object.prototype.hasOwnProperty,B0=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$0={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)U0.call(e,r)&&!$0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:j0,type:t,key:s,ref:a,props:i,_owner:B0.current}}Xa.Fragment=z0;Xa.jsx=Gm;Xa.jsxs=Gm;jm.exports=Xa;var I=jm.exports,Vu={},Ym={exports:{}},At={},Xm={exports:{}},Jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var he=J-1>>>1,se=B[he];if(0<i(se,Q))B[he]=Q,B[J]=se,J=he;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var he=0,se=B.length,ge=se>>>1;he<ge;){var gt=2*(he+1)-1,Ot=B[gt],Mt=gt+1,Lt=B[Mt];if(0>i(Ot,J))Mt<se&&0>i(Lt,Ot)?(B[he]=Lt,B[Mt]=J,he=Mt):(B[he]=Ot,B[gt]=J,he=gt);else if(Mt<se&&0>i(Lt,J))B[he]=Lt,B[Mt]=J,he=Mt;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,g=null,y=3,k=!1,P=!1,V=!1,b=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=B)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function D(B){if(V=!1,S(B),!P)if(n(u)!==null)P=!0,sr(U);else{var Q=n(h);Q!==null&&bt(D,Q.startTime-B)}}function U(B,Q){P=!1,V&&(V=!1,x(m),m=-1),k=!0;var J=y;try{for(S(Q),g=n(u);g!==null&&(!(g.expirationTime>Q)||B&&!A());){var he=g.callback;if(typeof he=="function"){g.callback=null,y=g.priorityLevel;var se=he(g.expirationTime<=Q);Q=t.unstable_now(),typeof se=="function"?g.callback=se:g===n(u)&&r(u),S(Q)}else r(u);g=n(u)}if(g!==null)var ge=!0;else{var gt=n(h);gt!==null&&bt(D,gt.startTime-Q),ge=!1}return ge}finally{g=null,y=J,k=!1}}var z=!1,_=null,m=-1,v=5,T=-1;function A(){return!(t.unstable_now()-T<v)}function C(){if(_!==null){var B=t.unstable_now();T=B;var Q=!0;try{Q=_(!0,B)}finally{Q?E():(z=!1,_=null)}}else z=!1}var E;if(typeof w=="function")E=function(){w(C)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,on=Fe.port2;Fe.port1.onmessage=C,E=function(){on.postMessage(null)}}else E=function(){b(C,0)};function sr(B){_=B,z||(z=!0,E())}function bt(B,Q){m=b(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||k||(P=!0,sr(U))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var J=y;y=Q;try{return B()}finally{y=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=y;y=B;try{return Q()}finally{y=J}},t.unstable_scheduleCallback=function(B,Q,J){var he=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?he+J:he):J=he,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=J+se,B={id:f++,callback:Q,priorityLevel:B,startTime:J,expirationTime:se,sortIndex:-1},J>he?(B.sortIndex=J,e(h,B),n(u)===null&&B===n(h)&&(V?(x(m),m=-1):V=!0,bt(D,J-he))):(B.sortIndex=se,e(u,B),P||k||(P=!0,sr(U))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var Q=y;return function(){var J=y;y=Q;try{return B.apply(this,arguments)}finally{y=J}}}})(Jm);Xm.exports=Jm;var H0=Xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0=ye,St=H0;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zm=new Set,As={};function br(t,e){fi(t,e),fi(t+"Capture",e)}function fi(t,e){for(As[t]=e,t=0;t<e.length;t++)Zm.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=Object.prototype.hasOwnProperty,W0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Af={},kf={};function K0(t){return Du.call(kf,t)?!0:Du.call(Af,t)?!1:W0.test(t)?kf[t]=!0:(Af[t]=!0,!1)}function Q0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function G0(t,e,n,r){if(e===null||typeof e>"u"||Q0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yc=/[\-:]([a-z])/g;function Xc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yc,Xc);qe[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yc,Xc);qe[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yc,Xc);qe[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jc(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(G0(e,n,i,r)&&(n=null),r||i===null?K0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),Zc=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),th=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),Cf=Symbol.iterator;function Qi(t){return t===null||typeof t!="object"?null:(t=Cf&&t[Cf]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Gl;function is(t){if(Gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||""}return`
`+Gl+t}var Yl=!1;function Xl(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?is(t):""}function Y0(t){switch(t.tag){case 5:return is(t.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function Lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gr:return"Fragment";case Qr:return"Portal";case bu:return"Profiler";case Zc:return"StrictMode";case Ou:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tg:return(t.displayName||"Context")+".Consumer";case eg:return(t._context.displayName||"Context")+".Provider";case eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case th:return e=t.displayName||null,e!==null?e:Lu(t.type)||"Memo";case Rn:e=t._payload,t=t._init;try{return Lu(t(e))}catch{}}return null}function X0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===Zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J0(t){var e=rg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Po(t){t._valueTracker||(t._valueTracker=J0(t))}function ig(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fu(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sg(t,e){e=e.checked,e!=null&&Jc(t,"checked",e,!1)}function ju(t,e){sg(t,e);var n=Qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,Qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||fa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(ss(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qn(n)}}function og(t,e){var n=Qn(e.value),r=Qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var No,lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=No.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z0=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(t){Z0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ds[e]=ds[t]})});function ug(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ds.hasOwnProperty(t)&&ds[t]?(""+e).trim():e+"px"}function cg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ug(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ew=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(t,e){if(e){if(ew[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Hu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,ai=null,li=null;function Df(t){if(t=Zs(t)){if(typeof Wu!="function")throw Error(L(280));var e=t.stateNode;e&&(e=nl(e),Wu(t.stateNode,t.type,e))}}function hg(t){ai?li?li.push(t):li=[t]:ai=t}function dg(){if(ai){var t=ai,e=li;if(li=ai=null,Df(t),e)for(t=0;t<e.length;t++)Df(e[t])}}function fg(t,e){return t(e)}function pg(){}var Jl=!1;function mg(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return fg(t,e,n)}finally{Jl=!1,(ai!==null||li!==null)&&(pg(),dg())}}function Cs(t,e){var n=t.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Ku=!1;if(mn)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Ku=!1}function tw(t,e,n,r,i,s,a,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var fs=!1,pa=null,ma=!1,Qu=null,nw={onError:function(t){fs=!0,pa=t}};function rw(t,e,n,r,i,s,a,l,u){fs=!1,pa=null,tw.apply(nw,arguments)}function iw(t,e,n,r,i,s,a,l,u){if(rw.apply(this,arguments),fs){if(fs){var h=pa;fs=!1,pa=null}else throw Error(L(198));ma||(ma=!0,Qu=h)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bf(t){if(Or(t)!==t)throw Error(L(188))}function sw(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bf(i),t;if(s===r)return bf(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function yg(t){return t=sw(t),t!==null?vg(t):null}function vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vg(t);if(e!==null)return e;t=t.sibling}return null}var _g=St.unstable_scheduleCallback,Of=St.unstable_cancelCallback,ow=St.unstable_shouldYield,aw=St.unstable_requestPaint,ke=St.unstable_now,lw=St.unstable_getCurrentPriorityLevel,rh=St.unstable_ImmediatePriority,wg=St.unstable_UserBlockingPriority,ga=St.unstable_NormalPriority,uw=St.unstable_LowPriority,Eg=St.unstable_IdlePriority,Ja=null,Jt=null;function cw(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ja,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:fw,hw=Math.log,dw=Math.LN2;function fw(t){return t>>>=0,t===0?32:31-(hw(t)/dw|0)|0}var Vo=64,Do=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ya(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=os(l):(s&=a,s!==0&&(r=os(s)))}else a=n&~i,a!==0?r=os(a):s!==0&&(r=os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function pw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Ht(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=pw(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tg(){var t=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function gw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ih(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function Ig(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xg,sh,Sg,Ag,kg,Yu=!1,bo=[],Mn=null,Ln=null,Fn=null,Rs=new Map,Ps=new Map,Nn=[],yw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mf(t,e){switch(t){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Rs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(e.pointerId)}}function Yi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Zs(e),e!==null&&sh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vw(t,e,n,r,i){switch(e){case"focusin":return Mn=Yi(Mn,t,e,n,r,i),!0;case"dragenter":return Ln=Yi(Ln,t,e,n,r,i),!0;case"mouseover":return Fn=Yi(Fn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rs.set(s,Yi(Rs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ps.set(s,Yi(Ps.get(s)||null,t,e,n,r,i)),!0}return!1}function Cg(t){var e=mr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=gg(n),e!==null){t.blockedOn=e,kg(t.priority,function(){Sg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qu=r,n.target.dispatchEvent(r),qu=null}else return e=Zs(n),e!==null&&sh(e),t.blockedOn=n,!1;e.shift()}return!0}function Lf(t,e,n){Xo(t)&&n.delete(e)}function _w(){Yu=!1,Mn!==null&&Xo(Mn)&&(Mn=null),Ln!==null&&Xo(Ln)&&(Ln=null),Fn!==null&&Xo(Fn)&&(Fn=null),Rs.forEach(Lf),Ps.forEach(Lf)}function Xi(t,e){t.blockedOn===e&&(t.blockedOn=null,Yu||(Yu=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,_w)))}function Ns(t){function e(i){return Xi(i,t)}if(0<bo.length){Xi(bo[0],t);for(var n=1;n<bo.length;n++){var r=bo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mn!==null&&Xi(Mn,t),Ln!==null&&Xi(Ln,t),Fn!==null&&Xi(Fn,t),Rs.forEach(e),Ps.forEach(e),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)Cg(n),n.blockedOn===null&&Nn.shift()}var ui=In.ReactCurrentBatchConfig,va=!0;function ww(t,e,n,r){var i=le,s=ui.transition;ui.transition=null;try{le=1,oh(t,e,n,r)}finally{le=i,ui.transition=s}}function Ew(t,e,n,r){var i=le,s=ui.transition;ui.transition=null;try{le=4,oh(t,e,n,r)}finally{le=i,ui.transition=s}}function oh(t,e,n,r){if(va){var i=Xu(t,e,n,r);if(i===null)uu(t,e,r,_a,n),Mf(t,r);else if(vw(i,t,e,n,r))r.stopPropagation();else if(Mf(t,r),e&4&&-1<yw.indexOf(t)){for(;i!==null;){var s=Zs(i);if(s!==null&&xg(s),s=Xu(t,e,n,r),s===null&&uu(t,e,r,_a,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uu(t,e,r,null,n)}}var _a=null;function Xu(t,e,n,r){if(_a=null,t=nh(r),t=mr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _a=t,null}function Rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lw()){case rh:return 1;case wg:return 4;case ga:case uw:return 16;case Eg:return 536870912;default:return 16}default:return 16}}var Dn=null,ah=null,Jo=null;function Pg(){if(Jo)return Jo;var t,e=ah,n=e.length,r,i="value"in Dn?Dn.value:Dn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Jo=i.slice(t,1<r?1-r:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function Ff(){return!1}function kt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:Ff,this.isPropagationStopped=Ff,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lh=kt(Ri),Js=Te({},Ri,{view:0,detail:0}),Tw=kt(Js),eu,tu,Ji,Za=Te({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(eu=t.screenX-Ji.screenX,tu=t.screenY-Ji.screenY):tu=eu=0,Ji=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),jf=kt(Za),Iw=Te({},Za,{dataTransfer:0}),xw=kt(Iw),Sw=Te({},Js,{relatedTarget:0}),nu=kt(Sw),Aw=Te({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),kw=kt(Aw),Cw=Te({},Ri,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rw=kt(Cw),Pw=Te({},Ri,{data:0}),zf=kt(Pw),Nw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dw[t])?!!e[t]:!1}function uh(){return bw}var Ow=Te({},Js,{key:function(t){if(t.key){var e=Nw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uh,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mw=kt(Ow),Lw=Te({},Za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=kt(Lw),Fw=Te({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uh}),jw=kt(Fw),zw=Te({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uw=kt(zw),Bw=Te({},Za,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$w=kt(Bw),Hw=[9,13,27,32],ch=mn&&"CompositionEvent"in window,ps=null;mn&&"documentMode"in document&&(ps=document.documentMode);var qw=mn&&"TextEvent"in window&&!ps,Ng=mn&&(!ch||ps&&8<ps&&11>=ps),Bf=" ",$f=!1;function Vg(t,e){switch(t){case"keyup":return Hw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function Ww(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:($f=!0,Bf);case"textInput":return t=e.data,t===Bf&&$f?null:t;default:return null}}function Kw(t,e){if(Yr)return t==="compositionend"||!ch&&Vg(t,e)?(t=Pg(),Jo=ah=Dn=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ng&&e.locale!=="ko"?null:e.data;default:return null}}var Qw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qw[t.type]:e==="textarea"}function bg(t,e,n,r){hg(r),e=wa(e,"onChange"),0<e.length&&(n=new lh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ms=null,Vs=null;function Gw(t){qg(t,0)}function el(t){var e=Zr(t);if(ig(e))return t}function Yw(t,e){if(t==="change")return e}var Og=!1;if(mn){var ru;if(mn){var iu="oninput"in document;if(!iu){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),iu=typeof qf.oninput=="function"}ru=iu}else ru=!1;Og=ru&&(!document.documentMode||9<document.documentMode)}function Wf(){ms&&(ms.detachEvent("onpropertychange",Mg),Vs=ms=null)}function Mg(t){if(t.propertyName==="value"&&el(Vs)){var e=[];bg(e,Vs,t,nh(t)),mg(Gw,e)}}function Xw(t,e,n){t==="focusin"?(Wf(),ms=e,Vs=n,ms.attachEvent("onpropertychange",Mg)):t==="focusout"&&Wf()}function Jw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return el(Vs)}function Zw(t,e){if(t==="click")return el(e)}function eE(t,e){if(t==="input"||t==="change")return el(e)}function tE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:tE;function Ds(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Du.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function Kf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qf(t,e){var n=Kf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kf(n)}}function Lg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fg(){for(var t=window,e=fa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fa(t.document)}return e}function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nE(t){var e=Fg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Lg(n.ownerDocument.documentElement,n)){if(r!==null&&hh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qf(n,s);var a=Qf(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rE=mn&&"documentMode"in document&&11>=document.documentMode,Xr=null,Ju=null,gs=null,Zu=!1;function Gf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||Xr==null||Xr!==fa(r)||(r=Xr,"selectionStart"in r&&hh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gs&&Ds(gs,r)||(gs=r,r=wa(Ju,"onSelect"),0<r.length&&(e=new lh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xr)))}function Mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},su={},jg={};mn&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function tl(t){if(su[t])return su[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jg)return su[t]=e[n];return t}var zg=tl("animationend"),Ug=tl("animationiteration"),Bg=tl("animationstart"),$g=tl("transitionend"),Hg=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){Hg.set(t,e),br(e,[t])}for(var ou=0;ou<Yf.length;ou++){var au=Yf[ou],iE=au.toLowerCase(),sE=au[0].toUpperCase()+au.slice(1);er(iE,"on"+sE)}er(zg,"onAnimationEnd");er(Ug,"onAnimationIteration");er(Bg,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er($g,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oE=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function Xf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iw(r,e,void 0,t),t.currentTarget=null}function qg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Xf(i,l,h),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Xf(i,l,h),s=u}}}if(ma)throw t=Qu,ma=!1,Qu=null,t}function pe(t,e){var n=e[ic];n===void 0&&(n=e[ic]=new Set);var r=t+"__bubble";n.has(r)||(Wg(e,t,2,!1),n.add(r))}function lu(t,e,n){var r=0;e&&(r|=4),Wg(n,t,r,e)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function bs(t){if(!t[Lo]){t[Lo]=!0,Zm.forEach(function(n){n!=="selectionchange"&&(oE.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lo]||(e[Lo]=!0,lu("selectionchange",!1,e))}}function Wg(t,e,n,r){switch(Rg(e)){case 1:var i=ww;break;case 4:i=Ew;break;default:i=oh}n=i.bind(null,e,n,t),i=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=mr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}mg(function(){var h=s,f=nh(n),g=[];e:{var y=Hg.get(t);if(y!==void 0){var k=lh,P=t;switch(t){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":k=Mw;break;case"focusin":P="focus",k=nu;break;case"focusout":P="blur",k=nu;break;case"beforeblur":case"afterblur":k=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=xw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=jw;break;case zg:case Ug:case Bg:k=kw;break;case $g:k=Uw;break;case"scroll":k=Tw;break;case"wheel":k=$w;break;case"copy":case"cut":case"paste":k=Rw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Uf}var V=(e&4)!==0,b=!V&&t==="scroll",x=V?y!==null?y+"Capture":null:y;V=[];for(var w=h,S;w!==null;){S=w;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,x!==null&&(D=Cs(w,x),D!=null&&V.push(Os(w,D,S)))),b)break;w=w.return}0<V.length&&(y=new k(y,P,null,n,f),g.push({event:y,listeners:V}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",y&&n!==qu&&(P=n.relatedTarget||n.fromElement)&&(mr(P)||P[gn]))break e;if((k||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,k?(P=n.relatedTarget||n.toElement,k=h,P=P?mr(P):null,P!==null&&(b=Or(P),P!==b||P.tag!==5&&P.tag!==6)&&(P=null)):(k=null,P=h),k!==P)){if(V=jf,D="onMouseLeave",x="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(V=Uf,D="onPointerLeave",x="onPointerEnter",w="pointer"),b=k==null?y:Zr(k),S=P==null?y:Zr(P),y=new V(D,w+"leave",k,n,f),y.target=b,y.relatedTarget=S,D=null,mr(f)===h&&(V=new V(x,w+"enter",P,n,f),V.target=S,V.relatedTarget=b,D=V),b=D,k&&P)t:{for(V=k,x=P,w=0,S=V;S;S=Hr(S))w++;for(S=0,D=x;D;D=Hr(D))S++;for(;0<w-S;)V=Hr(V),w--;for(;0<S-w;)x=Hr(x),S--;for(;w--;){if(V===x||x!==null&&V===x.alternate)break t;V=Hr(V),x=Hr(x)}V=null}else V=null;k!==null&&Jf(g,y,k,V,!1),P!==null&&b!==null&&Jf(g,b,P,V,!0)}}e:{if(y=h?Zr(h):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var U=Yw;else if(Hf(y))if(Og)U=eE;else{U=Jw;var z=Xw}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=Zw);if(U&&(U=U(t,h))){bg(g,U,n,f);break e}z&&z(t,y,h),t==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&zu(y,"number",y.value)}switch(z=h?Zr(h):window,t){case"focusin":(Hf(z)||z.contentEditable==="true")&&(Xr=z,Ju=h,gs=null);break;case"focusout":gs=Ju=Xr=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Gf(g,n,f);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":Gf(g,n,f)}var _;if(ch)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Yr?Vg(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Ng&&n.locale!=="ko"&&(Yr||m!=="onCompositionStart"?m==="onCompositionEnd"&&Yr&&(_=Pg()):(Dn=f,ah="value"in Dn?Dn.value:Dn.textContent,Yr=!0)),z=wa(h,m),0<z.length&&(m=new zf(m,t,null,n,f),g.push({event:m,listeners:z}),_?m.data=_:(_=Dg(n),_!==null&&(m.data=_)))),(_=qw?Ww(t,n):Kw(t,n))&&(h=wa(h,"onBeforeInput"),0<h.length&&(f=new zf("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=_))}qg(g,e)})}function Os(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Cs(t,n),s!=null&&r.unshift(Os(t,s,i)),s=Cs(t,e),s!=null&&r.push(Os(t,s,i))),t=t.return}return r}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jf(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Cs(n,s),u!=null&&a.unshift(Os(n,u,l))):i||(u=Cs(n,s),u!=null&&a.push(Os(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var aE=/\r\n?/g,lE=/\u0000|\uFFFD/g;function Zf(t){return(typeof t=="string"?t:""+t).replace(aE,`
`).replace(lE,"")}function Fo(t,e,n){if(e=Zf(e),Zf(t)!==e&&n)throw Error(L(425))}function Ea(){}var ec=null,tc=null;function nc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,uE=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,cE=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(hE)}:rc;function hE(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ns(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ns(e)}function jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Pi=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Pi,Ms="__reactProps$"+Pi,gn="__reactContainer$"+Pi,ic="__reactEvents$"+Pi,dE="__reactListeners$"+Pi,fE="__reactHandles$"+Pi;function mr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tp(t);t!==null;){if(n=t[Xt])return n;t=tp(t)}return e}t=n,n=t.parentNode}return null}function Zs(t){return t=t[Xt]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function nl(t){return t[Ms]||null}var sc=[],ei=-1;function tr(t){return{current:t}}function me(t){0>ei||(t.current=sc[ei],sc[ei]=null,ei--)}function de(t,e){ei++,sc[ei]=t.current,t.current=e}var Gn={},nt=tr(Gn),dt=tr(!1),xr=Gn;function pi(t,e){var n=t.type.contextTypes;if(!n)return Gn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function Ta(){me(dt),me(nt)}function np(t,e,n){if(nt.current!==Gn)throw Error(L(168));de(nt,e),de(dt,n)}function Kg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,X0(t)||"Unknown",i));return Te({},n,r)}function Ia(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gn,xr=nt.current,de(nt,t),de(dt,dt.current),!0}function rp(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Kg(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,me(dt),me(nt),de(nt,t)):me(dt),de(dt,n)}var hn=null,rl=!1,hu=!1;function Qg(t){hn===null?hn=[t]:hn.push(t)}function pE(t){rl=!0,Qg(t)}function nr(){if(!hu&&hn!==null){hu=!0;var t=0,e=le;try{var n=hn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hn=null,rl=!1}catch(i){throw hn!==null&&(hn=hn.slice(t+1)),_g(rh,nr),i}finally{le=e,hu=!1}}return null}var ti=[],ni=0,xa=null,Sa=0,Ct=[],Rt=0,Sr=null,dn=1,fn="";function dr(t,e){ti[ni++]=Sa,ti[ni++]=xa,xa=t,Sa=e}function Gg(t,e,n){Ct[Rt++]=dn,Ct[Rt++]=fn,Ct[Rt++]=Sr,Sr=t;var r=dn;t=fn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dn=1<<32-Ht(e)+i|n<<i|r,fn=s+t}else dn=1<<s|n<<i|r,fn=t}function dh(t){t.return!==null&&(dr(t,1),Gg(t,1,0))}function fh(t){for(;t===xa;)xa=ti[--ni],ti[ni]=null,Sa=ti[--ni],ti[ni]=null;for(;t===Sr;)Sr=Ct[--Rt],Ct[Rt]=null,fn=Ct[--Rt],Ct[Rt]=null,dn=Ct[--Rt],Ct[Rt]=null}var Tt=null,wt=null,ve=!1,$t=null;function Yg(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:dn,overflow:fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function oc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ac(t){if(ve){var e=wt;if(e){var n=e;if(!ip(t,e)){if(oc(t))throw Error(L(418));e=jn(n.nextSibling);var r=Tt;e&&ip(t,e)?Yg(r,n):(t.flags=t.flags&-4097|2,ve=!1,Tt=t)}}else{if(oc(t))throw Error(L(418));t.flags=t.flags&-4097|2,ve=!1,Tt=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function jo(t){if(t!==Tt)return!1;if(!ve)return sp(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nc(t.type,t.memoizedProps)),e&&(e=wt)){if(oc(t))throw Xg(),Error(L(418));for(;e;)Yg(t,e),e=jn(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?jn(t.stateNode.nextSibling):null;return!0}function Xg(){for(var t=wt;t;)t=jn(t.nextSibling)}function mi(){wt=Tt=null,ve=!1}function ph(t){$t===null?$t=[t]:$t.push(t)}var mE=In.ReactCurrentBatchConfig;function Zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function op(t){var e=t._init;return e(t._payload)}function Jg(t){function e(x,w){if(t){var S=x.deletions;S===null?(x.deletions=[w],x.flags|=16):S.push(w)}}function n(x,w){if(!t)return null;for(;w!==null;)e(x,w),w=w.sibling;return null}function r(x,w){for(x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function i(x,w){return x=$n(x,w),x.index=0,x.sibling=null,x}function s(x,w,S){return x.index=S,t?(S=x.alternate,S!==null?(S=S.index,S<w?(x.flags|=2,w):S):(x.flags|=2,w)):(x.flags|=1048576,w)}function a(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,w,S,D){return w===null||w.tag!==6?(w=vu(S,x.mode,D),w.return=x,w):(w=i(w,S),w.return=x,w)}function u(x,w,S,D){var U=S.type;return U===Gr?f(x,w,S.props.children,D,S.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Rn&&op(U)===w.type)?(D=i(w,S.props),D.ref=Zi(x,w,S),D.return=x,D):(D=oa(S.type,S.key,S.props,null,x.mode,D),D.ref=Zi(x,w,S),D.return=x,D)}function h(x,w,S,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=_u(S,x.mode,D),w.return=x,w):(w=i(w,S.children||[]),w.return=x,w)}function f(x,w,S,D,U){return w===null||w.tag!==7?(w=Er(S,x.mode,D,U),w.return=x,w):(w=i(w,S),w.return=x,w)}function g(x,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=vu(""+w,x.mode,S),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ro:return S=oa(w.type,w.key,w.props,null,x.mode,S),S.ref=Zi(x,null,w),S.return=x,S;case Qr:return w=_u(w,x.mode,S),w.return=x,w;case Rn:var D=w._init;return g(x,D(w._payload),S)}if(ss(w)||Qi(w))return w=Er(w,x.mode,S,null),w.return=x,w;zo(x,w)}return null}function y(x,w,S,D){var U=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(x,w,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:return S.key===U?u(x,w,S,D):null;case Qr:return S.key===U?h(x,w,S,D):null;case Rn:return U=S._init,y(x,w,U(S._payload),D)}if(ss(S)||Qi(S))return U!==null?null:f(x,w,S,D,null);zo(x,S)}return null}function k(x,w,S,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return x=x.get(S)||null,l(w,x,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ro:return x=x.get(D.key===null?S:D.key)||null,u(w,x,D,U);case Qr:return x=x.get(D.key===null?S:D.key)||null,h(w,x,D,U);case Rn:var z=D._init;return k(x,w,S,z(D._payload),U)}if(ss(D)||Qi(D))return x=x.get(S)||null,f(w,x,D,U,null);zo(w,D)}return null}function P(x,w,S,D){for(var U=null,z=null,_=w,m=w=0,v=null;_!==null&&m<S.length;m++){_.index>m?(v=_,_=null):v=_.sibling;var T=y(x,_,S[m],D);if(T===null){_===null&&(_=v);break}t&&_&&T.alternate===null&&e(x,_),w=s(T,w,m),z===null?U=T:z.sibling=T,z=T,_=v}if(m===S.length)return n(x,_),ve&&dr(x,m),U;if(_===null){for(;m<S.length;m++)_=g(x,S[m],D),_!==null&&(w=s(_,w,m),z===null?U=_:z.sibling=_,z=_);return ve&&dr(x,m),U}for(_=r(x,_);m<S.length;m++)v=k(_,x,m,S[m],D),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?m:v.key),w=s(v,w,m),z===null?U=v:z.sibling=v,z=v);return t&&_.forEach(function(A){return e(x,A)}),ve&&dr(x,m),U}function V(x,w,S,D){var U=Qi(S);if(typeof U!="function")throw Error(L(150));if(S=U.call(S),S==null)throw Error(L(151));for(var z=U=null,_=w,m=w=0,v=null,T=S.next();_!==null&&!T.done;m++,T=S.next()){_.index>m?(v=_,_=null):v=_.sibling;var A=y(x,_,T.value,D);if(A===null){_===null&&(_=v);break}t&&_&&A.alternate===null&&e(x,_),w=s(A,w,m),z===null?U=A:z.sibling=A,z=A,_=v}if(T.done)return n(x,_),ve&&dr(x,m),U;if(_===null){for(;!T.done;m++,T=S.next())T=g(x,T.value,D),T!==null&&(w=s(T,w,m),z===null?U=T:z.sibling=T,z=T);return ve&&dr(x,m),U}for(_=r(x,_);!T.done;m++,T=S.next())T=k(_,x,m,T.value,D),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?m:T.key),w=s(T,w,m),z===null?U=T:z.sibling=T,z=T);return t&&_.forEach(function(C){return e(x,C)}),ve&&dr(x,m),U}function b(x,w,S,D){if(typeof S=="object"&&S!==null&&S.type===Gr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:e:{for(var U=S.key,z=w;z!==null;){if(z.key===U){if(U=S.type,U===Gr){if(z.tag===7){n(x,z.sibling),w=i(z,S.props.children),w.return=x,x=w;break e}}else if(z.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Rn&&op(U)===z.type){n(x,z.sibling),w=i(z,S.props),w.ref=Zi(x,z,S),w.return=x,x=w;break e}n(x,z);break}else e(x,z);z=z.sibling}S.type===Gr?(w=Er(S.props.children,x.mode,D,S.key),w.return=x,x=w):(D=oa(S.type,S.key,S.props,null,x.mode,D),D.ref=Zi(x,w,S),D.return=x,x=D)}return a(x);case Qr:e:{for(z=S.key;w!==null;){if(w.key===z)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(x,w.sibling),w=i(w,S.children||[]),w.return=x,x=w;break e}else{n(x,w);break}else e(x,w);w=w.sibling}w=_u(S,x.mode,D),w.return=x,x=w}return a(x);case Rn:return z=S._init,b(x,w,z(S._payload),D)}if(ss(S))return P(x,w,S,D);if(Qi(S))return V(x,w,S,D);zo(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(x,w.sibling),w=i(w,S),w.return=x,x=w):(n(x,w),w=vu(S,x.mode,D),w.return=x,x=w),a(x)):n(x,w)}return b}var gi=Jg(!0),Zg=Jg(!1),Aa=tr(null),ka=null,ri=null,mh=null;function gh(){mh=ri=ka=null}function yh(t){var e=Aa.current;me(Aa),t._currentValue=e}function lc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ci(t,e){ka=t,mh=ri=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(mh!==t)if(t={context:t,memoizedValue:e,next:null},ri===null){if(ka===null)throw Error(L(308));ri=t,ka.dependencies={lanes:0,firstContext:t}}else ri=ri.next=t;return e}var gr=null;function vh(t){gr===null?gr=[t]:gr.push(t)}function ey(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vh(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pn=!1;function _h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ty(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,vh(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ih(t,n)}}function ap(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ca(t,e,n,r){var i=t.updateQueue;Pn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;a=0,f=h=u=null,l=s;do{var y=l.lane,k=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,V=l;switch(y=e,k=n,V.tag){case 1:if(P=V.payload,typeof P=="function"){g=P.call(k,g,y);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=V.payload,y=typeof P=="function"?P.call(k,g,y):P,y==null)break e;g=Te({},g,y);break e;case 2:Pn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=g):f=f.next=k,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);kr|=a,t.lanes=a,t.memoizedState=g}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var eo={},Zt=tr(eo),Ls=tr(eo),Fs=tr(eo);function yr(t){if(t===eo)throw Error(L(174));return t}function wh(t,e){switch(de(Fs,e),de(Ls,t),de(Zt,eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bu(e,t)}me(Zt),de(Zt,e)}function yi(){me(Zt),me(Ls),me(Fs)}function ny(t){yr(Fs.current);var e=yr(Zt.current),n=Bu(e,t.type);e!==n&&(de(Ls,t),de(Zt,n))}function Eh(t){Ls.current===t&&(me(Zt),me(Ls))}var we=tr(0);function Ra(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function Th(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var ta=In.ReactCurrentDispatcher,fu=In.ReactCurrentBatchConfig,Ar=0,Ee=null,Ne=null,Me=null,Pa=!1,ys=!1,js=0,gE=0;function Ye(){throw Error(L(321))}function Ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function xh(t,e,n,r,i,s){if(Ar=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ta.current=t===null||t.memoizedState===null?wE:EE,t=n(r,i),ys){s=0;do{if(ys=!1,js=0,25<=s)throw Error(L(301));s+=1,Me=Ne=null,e.updateQueue=null,ta.current=TE,t=n(r,i)}while(ys)}if(ta.current=Na,e=Ne!==null&&Ne.next!==null,Ar=0,Me=Ne=Ee=null,Pa=!1,e)throw Error(L(300));return t}function Sh(){var t=js!==0;return js=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ee.memoizedState=Me=t:Me=Me.next=t,Me}function Dt(){if(Ne===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Me===null?Ee.memoizedState:Me.next;if(e!==null)Me=e,Ne=t;else{if(t===null)throw Error(L(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Me===null?Ee.memoizedState=Me=t:Me=Me.next=t}return Me}function zs(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=Dt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,h=s;do{var f=h.lane;if((Ar&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,Ee.lanes|=f,kr|=f}h=h.next}while(h!==null&&h!==s);u===null?a=r:u.next=l,Kt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=Dt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Kt(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ry(){}function iy(t,e){var n=Ee,r=Dt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,Ah(ay.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Us(9,oy.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(L(349));Ar&30||sy(n,e,i)}return i}function sy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function oy(t,e,n,r){e.value=n,e.getSnapshot=r,ly(e)&&uy(t)}function ay(t,e,n){return n(function(){ly(e)&&uy(t)})}function ly(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function uy(t){var e=yn(t,1);e!==null&&qt(e,t,1,-1)}function up(t){var e=Yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:t},e.queue=t,t=t.dispatch=_E.bind(null,Ee,t),[e.memoizedState,t]}function Us(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function cy(){return Dt().memoizedState}function na(t,e,n,r){var i=Yt();Ee.flags|=t,i.memoizedState=Us(1|e,n,void 0,r===void 0?null:r)}function il(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var a=Ne.memoizedState;if(s=a.destroy,r!==null&&Ih(r,a.deps)){i.memoizedState=Us(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Us(1|e,n,s,r)}function cp(t,e){return na(8390656,8,t,e)}function Ah(t,e){return il(2048,8,t,e)}function hy(t,e){return il(4,2,t,e)}function dy(t,e){return il(4,4,t,e)}function fy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function py(t,e,n){return n=n!=null?n.concat([t]):null,il(4,4,fy.bind(null,e,t),n)}function kh(){}function my(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ih(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gy(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ih(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yy(t,e,n){return Ar&21?(Kt(n,e)||(n=Tg(),Ee.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function yE(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=fu.transition;fu.transition={};try{t(!1),e()}finally{le=n,fu.transition=r}}function vy(){return Dt().memoizedState}function vE(t,e,n){var r=Bn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_y(t))wy(e,n);else if(n=ey(t,e,n,r),n!==null){var i=ot();qt(n,t,r,i),Ey(n,e,r)}}function _E(t,e,n){var r=Bn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_y(t))wy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,a)){var u=e.interleaved;u===null?(i.next=i,vh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ey(t,e,i,r),n!==null&&(i=ot(),qt(n,t,r,i),Ey(n,e,r))}}function _y(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function wy(t,e){ys=Pa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ey(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ih(t,n)}}var Na={readContext:Vt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},wE={readContext:Vt,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,na(4194308,4,fy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return na(4194308,4,t,e)},useInsertionEffect:function(t,e){return na(4,2,t,e)},useMemo:function(t,e){var n=Yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vE.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:up,useDebugValue:kh,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=up(!1),e=t[0];return t=yE.bind(null,t[1]),Yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Yt();if(ve){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Le===null)throw Error(L(349));Ar&30||sy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cp(ay.bind(null,r,s,t),[t]),r.flags|=2048,Us(9,oy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Yt(),e=Le.identifierPrefix;if(ve){var n=fn,r=dn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=js++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EE={readContext:Vt,useCallback:my,useContext:Vt,useEffect:Ah,useImperativeHandle:py,useInsertionEffect:hy,useLayoutEffect:dy,useMemo:gy,useReducer:pu,useRef:cy,useState:function(){return pu(zs)},useDebugValue:kh,useDeferredValue:function(t){var e=Dt();return yy(e,Ne.memoizedState,t)},useTransition:function(){var t=pu(zs)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:ry,useSyncExternalStore:iy,useId:vy,unstable_isNewReconciler:!1},TE={readContext:Vt,useCallback:my,useContext:Vt,useEffect:Ah,useImperativeHandle:py,useInsertionEffect:hy,useLayoutEffect:dy,useMemo:gy,useReducer:mu,useRef:cy,useState:function(){return mu(zs)},useDebugValue:kh,useDeferredValue:function(t){var e=Dt();return Ne===null?e.memoizedState=t:yy(e,Ne.memoizedState,t)},useTransition:function(){var t=mu(zs)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:ry,useSyncExternalStore:iy,useId:vy,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function uc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Bn(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(qt(e,t,i,r),ea(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Bn(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(qt(e,t,i,r),ea(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=Bn(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(qt(e,t,r,n),ea(e,t,r))}};function hp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ds(n,r)||!Ds(i,s):!0}function Ty(t,e,n){var r=!1,i=Gn,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=ft(e)?xr:nt.current,r=e.contextTypes,s=(r=r!=null)?pi(t,i):Gn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&sl.enqueueReplaceState(e,e.state,null)}function cc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_h(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=ft(e)?xr:nt.current,i.context=pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(uc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&sl.enqueueReplaceState(i,i.state,null),Ca(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vi(t,e){try{var n="",r=e;do n+=Y0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IE=typeof WeakMap=="function"?WeakMap:Map;function Iy(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Da||(Da=!0,Ec=r),hc(t,e)},n}function xy(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hc(t,e),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function fp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=LE.bind(null,t,e,n),e.then(t,t))}function pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var xE=In.ReactCurrentOwner,ht=!1;function st(t,e,n,r){e.child=t===null?Zg(e,null,n,r):gi(e,t.child,n,r)}function gp(t,e,n,r,i){n=n.render;var s=e.ref;return ci(e,i),r=xh(t,e,n,r,s,i),n=Sh(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(ve&&n&&dh(e),e.flags|=1,st(t,e,r,i),e.child)}function yp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sy(t,e,s,r,i)):(t=oa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ds,n(a,r)&&t.ref===e.ref)return vn(t,e,i)}return e.flags|=1,t=$n(s,r),t.ref=e.ref,t.return=e,e.child=t}function Sy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ds(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,vn(t,e,i)}return dc(t,e,n,r,i)}function Ay(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(si,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(si,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(si,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(si,_t),_t|=r;return st(t,e,i,n),e.child}function ky(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dc(t,e,n,r,i){var s=ft(n)?xr:nt.current;return s=pi(e,s),ci(e,i),n=xh(t,e,n,r,s,i),r=Sh(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(ve&&r&&dh(e),e.flags|=1,st(t,e,n,i),e.child)}function vp(t,e,n,r,i){if(ft(n)){var s=!0;Ia(e)}else s=!1;if(ci(e,i),e.stateNode===null)ra(t,e),Ty(e,n,r),cc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=Vt(h):(h=ft(n)?xr:nt.current,h=pi(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==h)&&dp(e,a,r,h),Pn=!1;var y=e.memoizedState;a.state=y,Ca(e,r,a,i),u=e.memoizedState,l!==r||y!==u||dt.current||Pn?(typeof f=="function"&&(uc(e,n,f,r),u=e.memoizedState),(l=Pn||hp(e,n,l,r,y,u,h))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,ty(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ut(e.type,l),a.props=h,g=e.pendingProps,y=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=ft(n)?xr:nt.current,u=pi(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||y!==u)&&dp(e,a,r,u),Pn=!1,y=e.memoizedState,a.state=y,Ca(e,r,a,i);var P=e.memoizedState;l!==g||y!==P||dt.current||Pn?(typeof k=="function"&&(uc(e,n,k,r),P=e.memoizedState),(h=Pn||hp(e,n,h,r,y,P,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,P,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,P,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),a.props=r,a.state=P,a.context=u,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return fc(t,e,n,r,s,i)}function fc(t,e,n,r,i,s){ky(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&rp(e,n,!1),vn(t,e,s);r=e.stateNode,xE.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=gi(e,t.child,null,s),e.child=gi(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&rp(e,n,!0),e.child}function Cy(t){var e=t.stateNode;e.pendingContext?np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&np(t,e.context,!1),wh(t,e.containerInfo)}function _p(t,e,n,r,i){return mi(),ph(i),e.flags|=256,st(t,e,n,r),e.child}var pc={dehydrated:null,treeContext:null,retryLane:0};function mc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ry(t,e,n){var r=e.pendingProps,i=we.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return ac(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ll(a,r,0,null),t=Er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mc(n),e.memoizedState=pc,t):Ch(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return SE(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$n(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=$n(l,s):(s=Er(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?mc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=pc,r}return s=t.child,t=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ch(t,e){return e=ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uo(t,e,n,r){return r!==null&&ph(r),gi(e,t.child,null,n),t=Ch(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SE(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=gu(Error(L(422))),Uo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ll({mode:"visible",children:r.children},i,0,null),s=Er(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gi(e,t.child,null,a),e.child.memoizedState=mc(a),e.memoizedState=pc,s);if(!(e.mode&1))return Uo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=gu(s,r,void 0),Uo(t,e,a,r)}if(l=(a&t.childLanes)!==0,ht||l){if(r=Le,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),qt(r,t,i,-1))}return bh(),r=gu(Error(L(421))),Uo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=jn(i.nextSibling),Tt=e,ve=!0,$t=null,t!==null&&(Ct[Rt++]=dn,Ct[Rt++]=fn,Ct[Rt++]=Sr,dn=t.id,fn=t.overflow,Sr=e),e=Ch(e,r.children),e.flags|=4096,e)}function wp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lc(t.return,e,n)}function yu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Py(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wp(t,n,e);else if(t.tag===19)wp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ra(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ra(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yu(e,!0,n,null,s);break;case"together":yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ra(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AE(t,e,n){switch(e.tag){case 3:Cy(e),mi();break;case 5:ny(e);break;case 1:ft(e.type)&&Ia(e);break;case 4:wh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Aa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?Ry(t,e,n):(de(we,we.current&1),t=vn(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Py(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,Ay(t,e,n)}return vn(t,e,n)}var Ny,gc,Vy,Dy;Ny=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gc=function(){};Vy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yr(Zt.current);var s=null;switch(n){case"input":i=Fu(t,i),r=Fu(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=Uu(t,i),r=Uu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ea)}$u(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(As.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(As.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Dy=function(t,e,n,r){n!==r&&(e.flags|=4)};function es(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kE(t,e,n){var r=e.pendingProps;switch(fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return ft(e.type)&&Ta(),Xe(e),null;case 3:return r=e.stateNode,yi(),me(dt),me(nt),Th(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(xc($t),$t=null))),gc(t,e),Xe(e),null;case 5:Eh(e);var i=yr(Fs.current);if(n=e.type,t!==null&&e.stateNode!=null)Vy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Xe(e),null}if(t=yr(Zt.current),jo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[Ms]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<as.length;i++)pe(as[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Rf(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Nf(r,s),pe("invalid",r)}$u(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fo(r.textContent,l,t),i=["children",""+l]):As.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&pe("scroll",r)}switch(n){case"input":Po(r),Pf(r,s,!0);break;case"textarea":Po(r),Vf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ea)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Xt]=e,t[Ms]=r,Ny(t,e,!1,!1),e.stateNode=t;e:{switch(a=Hu(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<as.length;i++)pe(as[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Rf(t,r),i=Fu(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Nf(t,r),i=Uu(t,r),pe("invalid",t);break;default:i=r}$u(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?cg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ks(t,u):typeof u=="number"&&ks(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(As.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&Jc(t,s,u,a))}switch(n){case"input":Po(t),Pf(t,r,!1);break;case"textarea":Po(t),Vf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)Dy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=yr(Fs.current),yr(Zt.current),jo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Fo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Xe(e),null;case 13:if(me(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&wt!==null&&e.mode&1&&!(e.flags&128))Xg(),mi(),e.flags|=98560,s=!1;else if(s=jo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Xt]=e}else mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else $t!==null&&(xc($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?De===0&&(De=3):bh())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return yi(),gc(t,e),t===null&&bs(e.stateNode.containerInfo),Xe(e),null;case 10:return yh(e.type._context),Xe(e),null;case 17:return ft(e.type)&&Ta(),Xe(e),null;case 19:if(me(we),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)es(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ra(t),a!==null){for(e.flags|=128,es(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>_i&&(e.flags|=128,r=!0,es(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ra(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ve)return Xe(e),null}else 2*ke()-s.renderingStartTime>_i&&n!==1073741824&&(e.flags|=128,r=!0,es(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Dh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function CE(t,e){switch(fh(e),e.tag){case 1:return ft(e.type)&&Ta(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yi(),me(dt),me(nt),Th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(me(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(we),null;case 4:return yi(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Dh(),null;case 24:return null;default:return null}}var Bo=!1,et=!1,RE=typeof WeakSet=="function"?WeakSet:Set,$=null;function ii(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function yc(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Ep=!1;function PE(t,e){if(ec=va,t=Fg(),hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,g=t,y=null;t:for(;;){for(var k;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==s||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(k=g.firstChild)!==null;)y=g,g=k;for(;;){if(g===t)break t;if(y===n&&++h===i&&(l=a),y===s&&++f===r&&(u=a),(k=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(tc={focusedElem:t,selectionRange:n},va=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var V=P.memoizedProps,b=P.memoizedState,x=e.stateNode,w=x.getSnapshotBeforeUpdate(e.elementType===e.type?V:Ut(e.type,V),b);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(D){Se(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=Ep,Ep=!1,P}function vs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yc(e,n,s)}i=i.next}while(i!==r)}}function ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function by(t){var e=t.alternate;e!==null&&(t.alternate=null,by(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[Ms],delete e[ic],delete e[dE],delete e[fE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Oy(t){return t.tag===5||t.tag===3||t.tag===4}function Tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Oy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _c(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ea));else if(r!==4&&(t=t.child,t!==null))for(_c(t,e,n),t=t.sibling;t!==null;)_c(t,e,n),t=t.sibling}function wc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wc(t,e,n),t=t.sibling;t!==null;)wc(t,e,n),t=t.sibling}var ze=null,Bt=!1;function Cn(t,e,n){for(n=n.child;n!==null;)My(t,e,n),n=n.sibling}function My(t,e,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ja,n)}catch{}switch(n.tag){case 5:et||ii(n,e);case 6:var r=ze,i=Bt;ze=null,Cn(t,e,n),ze=r,Bt=i,ze!==null&&(Bt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Bt?(t=ze,n=n.stateNode,t.nodeType===8?cu(t.parentNode,n):t.nodeType===1&&cu(t,n),Ns(t)):cu(ze,n.stateNode));break;case 4:r=ze,i=Bt,ze=n.stateNode.containerInfo,Bt=!0,Cn(t,e,n),ze=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&yc(n,e,a),i=i.next}while(i!==r)}Cn(t,e,n);break;case 1:if(!et&&(ii(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}Cn(t,e,n);break;case 21:Cn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Cn(t,e,n),et=r):Cn(t,e,n);break;default:Cn(t,e,n)}}function Ip(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RE),e.forEach(function(r){var i=jE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Bt=!1;break e;case 3:ze=l.stateNode.containerInfo,Bt=!0;break e;case 4:ze=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(ze===null)throw Error(L(160));My(s,a,i),ze=null,Bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Se(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ly(e,t),e=e.sibling}function Ly(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),Gt(t),r&4){try{vs(3,t,t.return),ol(3,t)}catch(V){Se(t,t.return,V)}try{vs(5,t,t.return)}catch(V){Se(t,t.return,V)}}break;case 1:zt(e,t),Gt(t),r&512&&n!==null&&ii(n,n.return);break;case 5:if(zt(e,t),Gt(t),r&512&&n!==null&&ii(n,n.return),t.flags&32){var i=t.stateNode;try{ks(i,"")}catch(V){Se(t,t.return,V)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&sg(i,s),Hu(l,a);var h=Hu(l,s);for(a=0;a<u.length;a+=2){var f=u[a],g=u[a+1];f==="style"?cg(i,g):f==="dangerouslySetInnerHTML"?lg(i,g):f==="children"?ks(i,g):Jc(i,f,g,h)}switch(l){case"input":ju(i,s);break;case"textarea":og(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?oi(i,!!s.multiple,k,!1):y!==!!s.multiple&&(s.defaultValue!=null?oi(i,!!s.multiple,s.defaultValue,!0):oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ms]=s}catch(V){Se(t,t.return,V)}}break;case 6:if(zt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(V){Se(t,t.return,V)}}break;case 3:if(zt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ns(e.containerInfo)}catch(V){Se(t,t.return,V)}break;case 4:zt(e,t),Gt(t);break;case 13:zt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nh=ke())),r&4&&Ip(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(et=(h=et)||f,zt(e,t),et=h):zt(e,t),Gt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(g=$=f;$!==null;){switch(y=$,k=y.child,y.tag){case 0:case 11:case 14:case 15:vs(4,y,y.return);break;case 1:ii(y,y.return);var P=y.stateNode;if(typeof P.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(V){Se(r,n,V)}}break;case 5:ii(y,y.return);break;case 22:if(y.memoizedState!==null){Sp(g);continue}}k!==null?(k.return=y,$=k):Sp(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ug("display",a))}catch(V){Se(t,t.return,V)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(V){Se(t,t.return,V)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:zt(e,t),Gt(t),r&4&&Ip(t);break;case 21:break;default:zt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Oy(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ks(i,""),r.flags&=-33);var s=Tp(t);wc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Tp(t);_c(t,l,a);break;default:throw Error(L(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NE(t,e,n){$=t,Fy(t)}function Fy(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Bo;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=Bo;var h=et;if(Bo=a,(et=u)&&!h)for($=i;$!==null;)a=$,u=a.child,a.tag===22&&a.memoizedState!==null?Ap(i):u!==null?(u.return=a,$=u):Ap(i);for(;s!==null;)$=s,Fy(s),s=s.sibling;$=i,Bo=l,et=h}xp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):xp(t)}}function xp(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||ol(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lp(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Ns(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}et||e.flags&512&&vc(e)}catch(y){Se(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Sp(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Ap(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ol(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{vc(e)}catch(u){Se(e,s,u)}break;case 5:var a=e.return;try{vc(e)}catch(u){Se(e,a,u)}}}catch(u){Se(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var VE=Math.ceil,Va=In.ReactCurrentDispatcher,Rh=In.ReactCurrentOwner,Nt=In.ReactCurrentBatchConfig,ie=0,Le=null,Pe=null,$e=0,_t=0,si=tr(0),De=0,Bs=null,kr=0,al=0,Ph=0,_s=null,ut=null,Nh=0,_i=1/0,cn=null,Da=!1,Ec=null,Un=null,$o=!1,bn=null,ba=0,ws=0,Tc=null,ia=-1,sa=0;function ot(){return ie&6?ke():ia!==-1?ia:ia=ke()}function Bn(t){return t.mode&1?ie&2&&$e!==0?$e&-$e:mE.transition!==null?(sa===0&&(sa=Tg()),sa):(t=le,t!==0||(t=window.event,t=t===void 0?16:Rg(t.type)),t):1}function qt(t,e,n,r){if(50<ws)throw ws=0,Tc=null,Error(L(185));Xs(t,n,r),(!(ie&2)||t!==Le)&&(t===Le&&(!(ie&2)&&(al|=n),De===4&&Vn(t,$e)),pt(t,r),n===1&&ie===0&&!(e.mode&1)&&(_i=ke()+500,rl&&nr()))}function pt(t,e){var n=t.callbackNode;mw(t,e);var r=ya(t,t===Le?$e:0);if(r===0)n!==null&&Of(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Of(n),e===1)t.tag===0?pE(kp.bind(null,t)):Qg(kp.bind(null,t)),cE(function(){!(ie&6)&&nr()}),n=null;else{switch(Ig(r)){case 1:n=rh;break;case 4:n=wg;break;case 16:n=ga;break;case 536870912:n=Eg;break;default:n=ga}n=Wy(n,jy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jy(t,e){if(ia=-1,sa=0,ie&6)throw Error(L(327));var n=t.callbackNode;if(hi()&&t.callbackNode!==n)return null;var r=ya(t,t===Le?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Oa(t,r);else{e=r;var i=ie;ie|=2;var s=Uy();(Le!==t||$e!==e)&&(cn=null,_i=ke()+500,wr(t,e));do try{OE();break}catch(l){zy(t,l)}while(!0);gh(),Va.current=s,ie=i,Pe!==null?e=0:(Le=null,$e=0,e=De)}if(e!==0){if(e===2&&(i=Gu(t),i!==0&&(r=i,e=Ic(t,i))),e===1)throw n=Bs,wr(t,0),Vn(t,r),pt(t,ke()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!DE(i)&&(e=Oa(t,r),e===2&&(s=Gu(t),s!==0&&(r=s,e=Ic(t,s))),e===1))throw n=Bs,wr(t,0),Vn(t,r),pt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:fr(t,ut,cn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=Nh+500-ke(),10<e)){if(ya(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rc(fr.bind(null,t,ut,cn),e);break}fr(t,ut,cn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Ht(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*VE(r/1960))-r,10<r){t.timeoutHandle=rc(fr.bind(null,t,ut,cn),r);break}fr(t,ut,cn);break;case 5:fr(t,ut,cn);break;default:throw Error(L(329))}}}return pt(t,ke()),t.callbackNode===n?jy.bind(null,t):null}function Ic(t,e){var n=_s;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Oa(t,e),t!==2&&(e=ut,ut=n,e!==null&&xc(e)),t}function xc(t){ut===null?ut=t:ut.push.apply(ut,t)}function DE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~Ph,e&=~al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function kp(t){if(ie&6)throw Error(L(327));hi();var e=ya(t,0);if(!(e&1))return pt(t,ke()),null;var n=Oa(t,e);if(t.tag!==0&&n===2){var r=Gu(t);r!==0&&(e=r,n=Ic(t,r))}if(n===1)throw n=Bs,wr(t,0),Vn(t,e),pt(t,ke()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,ut,cn),pt(t,ke()),null}function Vh(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(_i=ke()+500,rl&&nr())}}function Cr(t){bn!==null&&bn.tag===0&&!(ie&6)&&hi();var e=ie;ie|=1;var n=Nt.transition,r=le;try{if(Nt.transition=null,le=1,t)return t()}finally{le=r,Nt.transition=n,ie=e,!(ie&6)&&nr()}}function Dh(){_t=si.current,me(si)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uE(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(fh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ta();break;case 3:yi(),me(dt),me(nt),Th();break;case 5:Eh(r);break;case 4:yi();break;case 13:me(we);break;case 19:me(we);break;case 10:yh(r.type._context);break;case 22:case 23:Dh()}n=n.return}if(Le=t,Pe=t=$n(t.current,null),$e=_t=e,De=0,Bs=null,Ph=al=kr=0,ut=_s=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}gr=null}return t}function zy(t,e){do{var n=Pe;try{if(gh(),ta.current=Na,Pa){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pa=!1}if(Ar=0,Me=Ne=Ee=null,ys=!1,js=0,Rh.current=null,n===null||n.return===null){De=1,Bs=e,Pe=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=pp(a);if(k!==null){k.flags&=-257,mp(k,a,l,s,e),k.mode&1&&fp(s,h,e),e=k,u=h;var P=e.updateQueue;if(P===null){var V=new Set;V.add(u),e.updateQueue=V}else P.add(u);break e}else{if(!(e&1)){fp(s,h,e),bh();break e}u=Error(L(426))}}else if(ve&&l.mode&1){var b=pp(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),mp(b,a,l,s,e),ph(vi(u,l));break e}}s=u=vi(u,l),De!==4&&(De=2),_s===null?_s=[s]:_s.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=Iy(s,u,e);ap(s,x);break e;case 1:l=u;var w=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Un===null||!Un.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=xy(s,l,e);ap(s,D);break e}}s=s.return}while(s!==null)}$y(n)}catch(U){e=U,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Uy(){var t=Va.current;return Va.current=Na,t===null?Na:t}function bh(){(De===0||De===3||De===2)&&(De=4),Le===null||!(kr&268435455)&&!(al&268435455)||Vn(Le,$e)}function Oa(t,e){var n=ie;ie|=2;var r=Uy();(Le!==t||$e!==e)&&(cn=null,wr(t,e));do try{bE();break}catch(i){zy(t,i)}while(!0);if(gh(),ie=n,Va.current=r,Pe!==null)throw Error(L(261));return Le=null,$e=0,De}function bE(){for(;Pe!==null;)By(Pe)}function OE(){for(;Pe!==null&&!ow();)By(Pe)}function By(t){var e=qy(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?$y(t):Pe=e,Rh.current=null}function $y(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CE(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Pe=null;return}}else if(n=kE(n,e,_t),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);De===0&&(De=5)}function fr(t,e,n){var r=le,i=Nt.transition;try{Nt.transition=null,le=1,ME(t,e,n,r)}finally{Nt.transition=i,le=r}return null}function ME(t,e,n,r){do hi();while(bn!==null);if(ie&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gw(t,s),t===Le&&(Pe=Le=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,Wy(ga,function(){return hi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var a=le;le=1;var l=ie;ie|=4,Rh.current=null,PE(t,n),Ly(n,t),nE(tc),va=!!ec,tc=ec=null,t.current=n,NE(n),aw(),ie=l,le=a,Nt.transition=s}else t.current=n;if($o&&($o=!1,bn=t,ba=i),s=t.pendingLanes,s===0&&(Un=null),cw(n.stateNode),pt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Da)throw Da=!1,t=Ec,Ec=null,t;return ba&1&&t.tag!==0&&hi(),s=t.pendingLanes,s&1?t===Tc?ws++:(ws=0,Tc=t):ws=0,nr(),null}function hi(){if(bn!==null){var t=Ig(ba),e=Nt.transition,n=le;try{if(Nt.transition=null,le=16>t?16:t,bn===null)var r=!1;else{if(t=bn,bn=null,ba=0,ie&6)throw Error(L(331));var i=ie;for(ie|=4,$=t.current;$!==null;){var s=$,a=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:vs(8,f,s)}var g=f.child;if(g!==null)g.return=f,$=g;else for(;$!==null;){f=$;var y=f.sibling,k=f.return;if(by(f),f===h){$=null;break}if(y!==null){y.return=k,$=y;break}$=k}}}var P=s.alternate;if(P!==null){var V=P.child;if(V!==null){P.child=null;do{var b=V.sibling;V.sibling=null,V=b}while(V!==null)}}$=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,$=a;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vs(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,$=x;break e}$=s.return}}var w=t.current;for($=w;$!==null;){a=$;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,$=S;else e:for(a=w;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ol(9,l)}}catch(U){Se(l,l.return,U)}if(l===a){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(ie=i,nr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ja,t)}catch{}r=!0}return r}finally{le=n,Nt.transition=e}}return!1}function Cp(t,e,n){e=vi(n,e),e=Iy(t,e,1),t=zn(t,e,1),e=ot(),t!==null&&(Xs(t,1,e),pt(t,e))}function Se(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){t=vi(n,t),t=xy(e,t,1),e=zn(e,t,1),t=ot(),e!==null&&(Xs(e,1,t),pt(e,t));break}}e=e.return}}function LE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&($e&n)===n&&(De===4||De===3&&($e&130023424)===$e&&500>ke()-Nh?wr(t,0):Ph|=n),pt(t,e)}function Hy(t,e){e===0&&(t.mode&1?(e=Do,Do<<=1,!(Do&130023424)&&(Do=4194304)):e=1);var n=ot();t=yn(t,e),t!==null&&(Xs(t,e,n),pt(t,n))}function FE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hy(t,n)}function jE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),Hy(t,n)}var qy;qy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,AE(t,e,n);ht=!!(t.flags&131072)}else ht=!1,ve&&e.flags&1048576&&Gg(e,Sa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ra(t,e),t=e.pendingProps;var i=pi(e,nt.current);ci(e,n),i=xh(null,e,r,t,i,n);var s=Sh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,Ia(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_h(e),i.updater=sl,e.stateNode=i,i._reactInternals=e,cc(e,r,t,n),e=fc(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&dh(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ra(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=UE(r),t=Ut(r,t),i){case 0:e=dc(null,e,r,t,n);break e;case 1:e=vp(null,e,r,t,n);break e;case 11:e=gp(null,e,r,t,n);break e;case 14:e=yp(null,e,r,Ut(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),dc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),vp(t,e,r,i,n);case 3:e:{if(Cy(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ty(t,e),Ca(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(L(423)),e),e=_p(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(L(424)),e),e=_p(t,e,r,n,i);break e}else for(wt=jn(e.stateNode.containerInfo.firstChild),Tt=e,ve=!0,$t=null,n=Zg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){e=vn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return ny(e),t===null&&ac(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,nc(r,i)?a=null:s!==null&&nc(r,s)&&(e.flags|=32),ky(t,e),st(t,e,a,n),e.child;case 6:return t===null&&ac(e),null;case 13:return Ry(t,e,n);case 4:return wh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gi(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),gp(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,de(Aa,r._currentValue),r._currentValue=a,s!==null)if(Kt(s.value,a)){if(s.children===i.children&&!dt.current){e=vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),lc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(L(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),lc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ci(e,n),i=Vt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),yp(t,e,r,i,n);case 15:return Sy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),ra(t,e),e.tag=1,ft(r)?(t=!0,Ia(e)):t=!1,ci(e,n),Ty(e,r,i),cc(e,r,i,n),fc(null,e,r,!0,t,n);case 19:return Py(t,e,n);case 22:return Ay(t,e,n)}throw Error(L(156,e.tag))};function Wy(t,e){return _g(t,e)}function zE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new zE(t,e,n,r)}function Oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function UE(t){if(typeof t=="function")return Oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eh)return 11;if(t===th)return 14}return 2}function $n(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oa(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Oh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Gr:return Er(n.children,i,s,e);case Zc:a=8,i|=8;break;case bu:return t=Pt(12,n,e,i|2),t.elementType=bu,t.lanes=s,t;case Ou:return t=Pt(13,n,e,i),t.elementType=Ou,t.lanes=s,t;case Mu:return t=Pt(19,n,e,i),t.elementType=Mu,t.lanes=s,t;case ng:return ll(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eg:a=10;break e;case tg:a=9;break e;case eh:a=11;break e;case th:a=14;break e;case Rn:a=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Pt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Er(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function ll(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=ng,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mh(t,e,n,r,i,s,a,l,u){return t=new BE(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_h(s),t}function $E(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ky(t){if(!t)return Gn;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(ft(n))return Kg(t,n,e)}return e}function Qy(t,e,n,r,i,s,a,l,u){return t=Mh(n,r,!0,t,i,s,a,l,u),t.context=Ky(null),n=t.current,r=ot(),i=Bn(n),s=pn(r,i),s.callback=e??null,zn(n,s,i),t.current.lanes=i,Xs(t,i,r),pt(t,r),t}function ul(t,e,n,r){var i=e.current,s=ot(),a=Bn(i);return n=Ky(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,a),t!==null&&(qt(t,i,a,s),ea(t,i,a)),a}function Ma(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lh(t,e){Rp(t,e),(t=t.alternate)&&Rp(t,e)}function HE(){return null}var Gy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fh(t){this._internalRoot=t}cl.prototype.render=Fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));ul(t,e,null,null)};cl.prototype.unmount=Fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){ul(null,t,null,null)}),e[gn]=null}};function cl(t){this._internalRoot=t}cl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nn.length&&e!==0&&e<Nn[n].priority;n++);Nn.splice(n,0,t),n===0&&Cg(t)}};function jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function qE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Ma(a);s.call(h)}}var a=Qy(e,r,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=a,t[gn]=a.current,bs(t.nodeType===8?t.parentNode:t),Cr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Ma(u);l.call(h)}}var u=Mh(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=u,t[gn]=u.current,bs(t.nodeType===8?t.parentNode:t),Cr(function(){ul(e,u,n,r)}),u}function dl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=Ma(a);l.call(u)}}ul(e,a,t,i)}else a=qE(n,e,t,i,r);return Ma(a)}xg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(ih(e,n|1),pt(e,ke()),!(ie&6)&&(_i=ke()+500,nr()))}break;case 13:Cr(function(){var r=yn(t,1);if(r!==null){var i=ot();qt(r,t,1,i)}}),Lh(t,1)}};sh=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=ot();qt(e,t,134217728,n)}Lh(t,134217728)}};Sg=function(t){if(t.tag===13){var e=Bn(t),n=yn(t,e);if(n!==null){var r=ot();qt(n,t,e,r)}Lh(t,e)}};Ag=function(){return le};kg=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Wu=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nl(r);if(!i)throw Error(L(90));ig(r),ju(r,i)}}}break;case"textarea":og(t,n);break;case"select":e=n.value,e!=null&&oi(t,!!n.multiple,e,!1)}};fg=Vh;pg=Cr;var WE={usingClientEntryPoint:!1,Events:[Zs,Zr,nl,hg,dg,Vh]},ts={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KE={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yg(t),t===null?null:t.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||HE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{Ja=Ho.inject(KE),Jt=Ho}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WE;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(e))throw Error(L(200));return $E(t,e,null,n)};At.createRoot=function(t,e){if(!jh(t))throw Error(L(299));var n=!1,r="",i=Gy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mh(t,1,!1,null,null,n,!1,r,i),t[gn]=e.current,bs(t.nodeType===8?t.parentNode:t),new Fh(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=yg(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return Cr(t)};At.hydrate=function(t,e,n){if(!hl(e))throw Error(L(200));return dl(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!jh(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Gy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Qy(e,null,t,1,n??null,i,!1,s,a),t[gn]=e.current,bs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cl(e)};At.render=function(t,e,n){if(!hl(e))throw Error(L(200));return dl(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!hl(t))throw Error(L(40));return t._reactRootContainer?(Cr(function(){dl(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1};At.unstable_batchedUpdates=Vh;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hl(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return dl(t,e,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function Yy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yy)}catch(t){console.error(t)}}Yy(),Ym.exports=At;var QE=Ym.exports,Np=QE;Vu.createRoot=Np.createRoot,Vu.hydrateRoot=Np.hydrateRoot;var Vp={};/**
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
 */const Xy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},GE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Jy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,k=h&63;u||(k=64,a||(y=64)),r.push(n[f],n[g],n[y],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new YE;const y=s<<2|l>>4;if(r.push(y),h!==64){const k=l<<4&240|h>>2;if(r.push(k),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XE=function(t){const e=Xy(t);return Jy.encodeByteArray(e,!0)},La=function(t){return XE(t).replace(/\./g,"")},JE=function(t){try{return Jy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ZE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const e1=()=>ZE().__FIREBASE_DEFAULTS__,t1=()=>{if(typeof process>"u"||typeof Vp>"u")return;const t=Vp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},n1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&JE(t[1]);return e&&JSON.parse(e)},zh=()=>{try{return e1()||t1()||n1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r1=t=>{var e,n;return(n=(e=zh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},i1=t=>{const e=r1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zy=()=>{var t;return(t=zh())===null||t===void 0?void 0:t.config};/**
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
 */class s1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function o1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[La(JSON.stringify(n)),La(JSON.stringify(a)),""].join(".")}/**
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
 */function a1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function l1(){var t;const e=(t=zh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function u1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function c1(){return!l1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ev(){try{return typeof indexedDB=="object"}catch{return!1}}function tv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function h1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const d1="FirebaseError";class rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=d1,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fl.prototype.create)}}class fl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?f1(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new rr(i,l,r)}}function f1(t,e){return t.replace(p1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const p1=/\{\$([^}]+)}/g;function Fa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Dp(s)&&Dp(a)){if(!Fa(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dp(t){return t!==null&&typeof t=="object"}/**
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
 */const m1=1e3,g1=2,y1=4*60*60*1e3,v1=.5;function bp(t,e=m1,n=g1){const r=e*Math.pow(n,t),i=Math.round(v1*r*(Math.random()-.5)*2);return Math.min(y1,r+i)}/**
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
 */function Qt(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class _1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new s1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E1(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:w1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function w1(t){return t===pr?void 0:t}function E1(t){return t.instantiationMode==="EAGER"}/**
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
 */class T1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const I1={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},x1=re.INFO,S1={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},A1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=S1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uh{constructor(e){this.name=e,this._logLevel=x1,this._logHandler=A1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const k1=(t,e)=>e.some(n=>t instanceof n);let Op,Mp;function C1(){return Op||(Op=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R1(){return Mp||(Mp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nv=new WeakMap,Sc=new WeakMap,rv=new WeakMap,wu=new WeakMap,Bh=new WeakMap;function P1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Hn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&nv.set(n,t)}).catch(()=>{}),Bh.set(e,t),e}function N1(t){if(Sc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Sc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function V1(t){Ac=t(Ac)}function D1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eu(this),e,...n);return rv.set(r,e.sort?e.sort():[e]),Hn(r)}:R1().includes(t)?function(...e){return t.apply(Eu(this),e),Hn(nv.get(this))}:function(...e){return Hn(t.apply(Eu(this),e))}}function b1(t){return typeof t=="function"?D1(t):(t instanceof IDBTransaction&&N1(t),k1(t,C1())?new Proxy(t,Ac):t)}function Hn(t){if(t instanceof IDBRequest)return P1(t);if(wu.has(t))return wu.get(t);const e=b1(t);return e!==t&&(wu.set(t,e),Bh.set(e,t)),e}const Eu=t=>Bh.get(t);function iv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Hn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Hn(a.result),u.oldVersion,u.newVersion,Hn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const O1=["get","getKey","getAll","getAllKeys","count"],M1=["put","add","delete","clear"],Tu=new Map;function Lp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tu.get(e))return Tu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=M1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||O1.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Tu.set(e,s),s}V1(t=>({...t,get:(e,n,r)=>Lp(e,n)||t.get(e,n,r),has:(e,n)=>!!Lp(e,n)||t.has(e,n)}));/**
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
 */class L1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(F1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function F1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",Fp="0.10.13";/**
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
 */const wn=new Uh("@firebase/app"),j1="@firebase/app-compat",z1="@firebase/analytics-compat",U1="@firebase/analytics",B1="@firebase/app-check-compat",$1="@firebase/app-check",H1="@firebase/auth",q1="@firebase/auth-compat",W1="@firebase/database",K1="@firebase/data-connect",Q1="@firebase/database-compat",G1="@firebase/functions",Y1="@firebase/functions-compat",X1="@firebase/installations",J1="@firebase/installations-compat",Z1="@firebase/messaging",eT="@firebase/messaging-compat",tT="@firebase/performance",nT="@firebase/performance-compat",rT="@firebase/remote-config",iT="@firebase/remote-config-compat",sT="@firebase/storage",oT="@firebase/storage-compat",aT="@firebase/firestore",lT="@firebase/vertexai-preview",uT="@firebase/firestore-compat",cT="firebase",hT="10.14.1";/**
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
 */const Cc="[DEFAULT]",dT={[kc]:"fire-core",[j1]:"fire-core-compat",[U1]:"fire-analytics",[z1]:"fire-analytics-compat",[$1]:"fire-app-check",[B1]:"fire-app-check-compat",[H1]:"fire-auth",[q1]:"fire-auth-compat",[W1]:"fire-rtdb",[K1]:"fire-data-connect",[Q1]:"fire-rtdb-compat",[G1]:"fire-fn",[Y1]:"fire-fn-compat",[X1]:"fire-iid",[J1]:"fire-iid-compat",[Z1]:"fire-fcm",[eT]:"fire-fcm-compat",[tT]:"fire-perf",[nT]:"fire-perf-compat",[rT]:"fire-rc",[iT]:"fire-rc-compat",[sT]:"fire-gcs",[oT]:"fire-gcs-compat",[aT]:"fire-fst",[uT]:"fire-fst-compat",[lT]:"fire-vertex","fire-js":"fire-js",[cT]:"fire-js-all"};/**
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
 */const ja=new Map,fT=new Map,Rc=new Map;function jp(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yn(t){const e=t.name;if(Rc.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of ja.values())jp(n,t);for(const n of fT.values())jp(n,t);return!0}function to(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new fl("app","Firebase",pT);/**
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
 */class mT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const gT=hT;function sv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qn.create("bad-app-name",{appName:String(i)});if(n||(n=Zy()),!n)throw qn.create("no-options");const s=ja.get(i);if(s){if(Fa(n,s.options)&&Fa(r,s.config))return s;throw qn.create("duplicate-app",{appName:i})}const a=new T1(i);for(const u of Rc.values())a.addComponent(u);const l=new mT(n,r,a);return ja.set(i,l),l}function ov(t=Cc){const e=ja.get(t);if(!e&&t===Cc&&Zy())return sv();if(!e)throw qn.create("no-app",{appName:t});return e}function en(t,e,n){var r;let i=(r=dT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(l.join(" "));return}Yn(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yT="firebase-heartbeat-database",vT=1,$s="firebase-heartbeat-store";let Iu=null;function av(){return Iu||(Iu=iv(yT,vT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($s)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Iu}async function _T(t){try{const n=(await av()).transaction($s),r=await n.objectStore($s).get(lv(t));return await n.done,r}catch(e){if(e instanceof rr)wn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function zp(t,e){try{const r=(await av()).transaction($s,"readwrite");await r.objectStore($s).put(e,lv(t)),await r.done}catch(n){if(n instanceof rr)wn.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function lv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wT=1024,ET=30*24*60*60*1e3;class TT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Up();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ET}),this._storage.overwrite(this._heartbeatsCache))}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Up(),{heartbeatsToSend:r,unsentEntries:i}=IT(this._heartbeatsCache.heartbeats),s=La(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function Up(){return new Date().toISOString().substring(0,10)}function IT(t,e=wT){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Bp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ev()?tv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _T(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bp(t){return La(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ST(t){Yn(new _n("platform-logger",e=>new L1(e),"PRIVATE")),Yn(new _n("heartbeat",e=>new TT(e),"PRIVATE")),en(kc,Fp,t),en(kc,Fp,"esm2017"),en("fire-js","")}ST("");var AT="firebase",kT="10.14.1";/**
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
 */en(AT,kT,"app");var $p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,uv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,m){function v(){}v.prototype=m.prototype,_.D=m.prototype,_.prototype=new v,_.prototype.constructor=_,_.C=function(T,A,C){for(var E=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)E[Fe-2]=arguments[Fe];return m.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)T[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=_.g[0],v=_.g[1],A=_.g[2];var C=_.g[3],E=m+(C^v&(A^C))+T[0]+3614090360&4294967295;m=v+(E<<7&4294967295|E>>>25),E=C+(A^m&(v^A))+T[1]+3905402710&4294967295,C=m+(E<<12&4294967295|E>>>20),E=A+(v^C&(m^v))+T[2]+606105819&4294967295,A=C+(E<<17&4294967295|E>>>15),E=v+(m^A&(C^m))+T[3]+3250441966&4294967295,v=A+(E<<22&4294967295|E>>>10),E=m+(C^v&(A^C))+T[4]+4118548399&4294967295,m=v+(E<<7&4294967295|E>>>25),E=C+(A^m&(v^A))+T[5]+1200080426&4294967295,C=m+(E<<12&4294967295|E>>>20),E=A+(v^C&(m^v))+T[6]+2821735955&4294967295,A=C+(E<<17&4294967295|E>>>15),E=v+(m^A&(C^m))+T[7]+4249261313&4294967295,v=A+(E<<22&4294967295|E>>>10),E=m+(C^v&(A^C))+T[8]+1770035416&4294967295,m=v+(E<<7&4294967295|E>>>25),E=C+(A^m&(v^A))+T[9]+2336552879&4294967295,C=m+(E<<12&4294967295|E>>>20),E=A+(v^C&(m^v))+T[10]+4294925233&4294967295,A=C+(E<<17&4294967295|E>>>15),E=v+(m^A&(C^m))+T[11]+2304563134&4294967295,v=A+(E<<22&4294967295|E>>>10),E=m+(C^v&(A^C))+T[12]+1804603682&4294967295,m=v+(E<<7&4294967295|E>>>25),E=C+(A^m&(v^A))+T[13]+4254626195&4294967295,C=m+(E<<12&4294967295|E>>>20),E=A+(v^C&(m^v))+T[14]+2792965006&4294967295,A=C+(E<<17&4294967295|E>>>15),E=v+(m^A&(C^m))+T[15]+1236535329&4294967295,v=A+(E<<22&4294967295|E>>>10),E=m+(A^C&(v^A))+T[1]+4129170786&4294967295,m=v+(E<<5&4294967295|E>>>27),E=C+(v^A&(m^v))+T[6]+3225465664&4294967295,C=m+(E<<9&4294967295|E>>>23),E=A+(m^v&(C^m))+T[11]+643717713&4294967295,A=C+(E<<14&4294967295|E>>>18),E=v+(C^m&(A^C))+T[0]+3921069994&4294967295,v=A+(E<<20&4294967295|E>>>12),E=m+(A^C&(v^A))+T[5]+3593408605&4294967295,m=v+(E<<5&4294967295|E>>>27),E=C+(v^A&(m^v))+T[10]+38016083&4294967295,C=m+(E<<9&4294967295|E>>>23),E=A+(m^v&(C^m))+T[15]+3634488961&4294967295,A=C+(E<<14&4294967295|E>>>18),E=v+(C^m&(A^C))+T[4]+3889429448&4294967295,v=A+(E<<20&4294967295|E>>>12),E=m+(A^C&(v^A))+T[9]+568446438&4294967295,m=v+(E<<5&4294967295|E>>>27),E=C+(v^A&(m^v))+T[14]+3275163606&4294967295,C=m+(E<<9&4294967295|E>>>23),E=A+(m^v&(C^m))+T[3]+4107603335&4294967295,A=C+(E<<14&4294967295|E>>>18),E=v+(C^m&(A^C))+T[8]+1163531501&4294967295,v=A+(E<<20&4294967295|E>>>12),E=m+(A^C&(v^A))+T[13]+2850285829&4294967295,m=v+(E<<5&4294967295|E>>>27),E=C+(v^A&(m^v))+T[2]+4243563512&4294967295,C=m+(E<<9&4294967295|E>>>23),E=A+(m^v&(C^m))+T[7]+1735328473&4294967295,A=C+(E<<14&4294967295|E>>>18),E=v+(C^m&(A^C))+T[12]+2368359562&4294967295,v=A+(E<<20&4294967295|E>>>12),E=m+(v^A^C)+T[5]+4294588738&4294967295,m=v+(E<<4&4294967295|E>>>28),E=C+(m^v^A)+T[8]+2272392833&4294967295,C=m+(E<<11&4294967295|E>>>21),E=A+(C^m^v)+T[11]+1839030562&4294967295,A=C+(E<<16&4294967295|E>>>16),E=v+(A^C^m)+T[14]+4259657740&4294967295,v=A+(E<<23&4294967295|E>>>9),E=m+(v^A^C)+T[1]+2763975236&4294967295,m=v+(E<<4&4294967295|E>>>28),E=C+(m^v^A)+T[4]+1272893353&4294967295,C=m+(E<<11&4294967295|E>>>21),E=A+(C^m^v)+T[7]+4139469664&4294967295,A=C+(E<<16&4294967295|E>>>16),E=v+(A^C^m)+T[10]+3200236656&4294967295,v=A+(E<<23&4294967295|E>>>9),E=m+(v^A^C)+T[13]+681279174&4294967295,m=v+(E<<4&4294967295|E>>>28),E=C+(m^v^A)+T[0]+3936430074&4294967295,C=m+(E<<11&4294967295|E>>>21),E=A+(C^m^v)+T[3]+3572445317&4294967295,A=C+(E<<16&4294967295|E>>>16),E=v+(A^C^m)+T[6]+76029189&4294967295,v=A+(E<<23&4294967295|E>>>9),E=m+(v^A^C)+T[9]+3654602809&4294967295,m=v+(E<<4&4294967295|E>>>28),E=C+(m^v^A)+T[12]+3873151461&4294967295,C=m+(E<<11&4294967295|E>>>21),E=A+(C^m^v)+T[15]+530742520&4294967295,A=C+(E<<16&4294967295|E>>>16),E=v+(A^C^m)+T[2]+3299628645&4294967295,v=A+(E<<23&4294967295|E>>>9),E=m+(A^(v|~C))+T[0]+4096336452&4294967295,m=v+(E<<6&4294967295|E>>>26),E=C+(v^(m|~A))+T[7]+1126891415&4294967295,C=m+(E<<10&4294967295|E>>>22),E=A+(m^(C|~v))+T[14]+2878612391&4294967295,A=C+(E<<15&4294967295|E>>>17),E=v+(C^(A|~m))+T[5]+4237533241&4294967295,v=A+(E<<21&4294967295|E>>>11),E=m+(A^(v|~C))+T[12]+1700485571&4294967295,m=v+(E<<6&4294967295|E>>>26),E=C+(v^(m|~A))+T[3]+2399980690&4294967295,C=m+(E<<10&4294967295|E>>>22),E=A+(m^(C|~v))+T[10]+4293915773&4294967295,A=C+(E<<15&4294967295|E>>>17),E=v+(C^(A|~m))+T[1]+2240044497&4294967295,v=A+(E<<21&4294967295|E>>>11),E=m+(A^(v|~C))+T[8]+1873313359&4294967295,m=v+(E<<6&4294967295|E>>>26),E=C+(v^(m|~A))+T[15]+4264355552&4294967295,C=m+(E<<10&4294967295|E>>>22),E=A+(m^(C|~v))+T[6]+2734768916&4294967295,A=C+(E<<15&4294967295|E>>>17),E=v+(C^(A|~m))+T[13]+1309151649&4294967295,v=A+(E<<21&4294967295|E>>>11),E=m+(A^(v|~C))+T[4]+4149444226&4294967295,m=v+(E<<6&4294967295|E>>>26),E=C+(v^(m|~A))+T[11]+3174756917&4294967295,C=m+(E<<10&4294967295|E>>>22),E=A+(m^(C|~v))+T[2]+718787259&4294967295,A=C+(E<<15&4294967295|E>>>17),E=v+(C^(A|~m))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.u=function(_,m){m===void 0&&(m=_.length);for(var v=m-this.blockSize,T=this.B,A=this.h,C=0;C<m;){if(A==0)for(;C<=v;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<m;)if(T[A++]=_.charCodeAt(C++),A==this.blockSize){i(this,T),A=0;break}}else for(;C<m;)if(T[A++]=_[C++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;var v=8*this.o;for(m=_.length-8;m<_.length;++m)_[m]=v&255,v/=256;for(this.u(_),_=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)_[v++]=this.g[m]>>>T&255;return _};function s(_,m){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=m(_)}function a(_,m){this.h=m;for(var v=[],T=!0,A=_.length-1;0<=A;A--){var C=_[A]|0;T&&C==m||(v[A]=C,T=!1)}this.g=v}var l={};function u(_){return-128<=_&&128>_?s(_,function(m){return new a([m|0],0>m?-1:0)}):new a([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return g;if(0>_)return b(h(-_));for(var m=[],v=1,T=0;_>=v;T++)m[T]=_/v|0,v*=4294967296;return new a(m,0)}function f(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return b(f(_.substring(1),m));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),T=g,A=0;A<_.length;A+=8){var C=Math.min(8,_.length-A),E=parseInt(_.substring(A,A+C),m);8>C?(C=h(Math.pow(m,C)),T=T.j(C).add(h(E))):(T=T.j(v),T=T.add(h(E)))}return T}var g=u(0),y=u(1),k=u(16777216);t=a.prototype,t.m=function(){if(V(this))return-b(this).m();for(var _=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);_+=(0<=T?T:4294967296+T)*m,m*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(V(this))return"-"+b(this).toString(_);for(var m=h(Math.pow(_,6)),v=this,T="";;){var A=D(v,m).g;v=x(v,A.j(m));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(_);if(v=A,P(v))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function V(_){return _.h==-1}t.l=function(_){return _=x(this,_),V(_)?-1:P(_)?0:1};function b(_){for(var m=_.g.length,v=[],T=0;T<m;T++)v[T]=~_.g[T];return new a(v,~_.h).add(y)}t.abs=function(){return V(this)?b(this):this},t.add=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],T=0,A=0;A<=m;A++){var C=T+(this.i(A)&65535)+(_.i(A)&65535),E=(C>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);T=E>>>16,C&=65535,E&=65535,v[A]=E<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function x(_,m){return _.add(b(m))}t.j=function(_){if(P(this)||P(_))return g;if(V(this))return V(_)?b(this).j(b(_)):b(b(this).j(_));if(V(_))return b(this.j(b(_)));if(0>this.l(k)&&0>_.l(k))return h(this.m()*_.m());for(var m=this.g.length+_.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<_.g.length;A++){var C=this.i(T)>>>16,E=this.i(T)&65535,Fe=_.i(A)>>>16,on=_.i(A)&65535;v[2*T+2*A]+=E*on,w(v,2*T+2*A),v[2*T+2*A+1]+=C*on,w(v,2*T+2*A+1),v[2*T+2*A+1]+=E*Fe,w(v,2*T+2*A+1),v[2*T+2*A+2]+=C*Fe,w(v,2*T+2*A+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new a(v,0)};function w(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function S(_,m){this.g=_,this.h=m}function D(_,m){if(P(m))throw Error("division by zero");if(P(_))return new S(g,g);if(V(_))return m=D(b(_),m),new S(b(m.g),b(m.h));if(V(m))return m=D(_,b(m)),new S(b(m.g),m.h);if(30<_.g.length){if(V(_)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,T=m;0>=T.l(_);)v=U(v),T=U(T);var A=z(v,1),C=z(T,1);for(T=z(T,2),v=z(v,2);!P(T);){var E=C.add(T);0>=E.l(_)&&(A=A.add(v),C=E),T=z(T,1),v=z(v,1)}return m=x(_,A.j(m)),new S(A,m)}for(A=g;0<=_.l(m);){for(v=Math.max(1,Math.floor(_.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(v),E=C.j(m);V(E)||0<E.l(_);)v-=T,C=h(v),E=C.j(m);P(C)&&(C=y),A=A.add(C),_=x(_,E)}return new S(A,_)}t.A=function(_){return D(this,_).h},t.and=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&_.i(T);return new a(v,this.h&_.h)},t.or=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|_.i(T);return new a(v,this.h|_.h)},t.xor=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^_.i(T);return new a(v,this.h^_.h)};function U(_){for(var m=_.g.length+1,v=[],T=0;T<m;T++)v[T]=_.i(T)<<1|_.i(T-1)>>>31;return new a(v,_.h)}function z(_,m){var v=m>>5;m%=32;for(var T=_.g.length-v,A=[],C=0;C<T;C++)A[C]=0<m?_.i(C+v)>>>m|_.i(C+v+1)<<32-m:_.i(C+v);return new a(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,uv=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Tr=a}).apply(typeof $p<"u"?$p:typeof self<"u"?self:typeof window<"u"?window:{});var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cv,ls,hv,aa,Pc,dv,fv,pv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof qo=="object"&&qo];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var N=d++;return{value:c(N,o[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function g(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function y(o,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function k(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,N){for(var j=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)j[ce-2]=arguments[ce];return c.prototype[R].apply(p,j)}}function V(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function b(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=o.length||0,N=p.length||0;o.length=R+N;for(let j=0;j<N;j++)o[R+j]=p[j]}else o.push(p)}}class x{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function D(o){return D[" "](o),o}D[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function z(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function _(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function m(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let N=0;N<v.length;N++)d=v[N],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function C(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Q;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Fe{constructor(){this.h=this.g=null}add(c,d){const p=on.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var on=new x(()=>new sr,o=>o.reset());class sr{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let bt,B=!1,Q=new Fe,J=()=>{const o=l.Promise.resolve(void 0);bt=()=>{o.then(he)}};var he=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){C(d)}var c=on;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}B=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var gt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function Ot(o,c){if(ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(U){e:{try{D(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Mt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ot.aa.h.call(this)}}P(Ot,ge);var Mt={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),Nl=0;function lo(o,c,d,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++Nl,this.da=this.fa=!1}function F(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function W(o){this.src=o,this.g={},this.h=0}W.prototype.add=function(o,c,d,p,R){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var j=Ce(o,c,p,R);return-1<j?(c=o[j],d||(c.fa=!1)):(c=new lo(c,this.src,N,!!p,R),c.fa=d,o.push(c)),c};function Z(o,c){var d=c.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=R)&&Array.prototype.splice.call(p,R,1),N&&(F(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ce(o,c,d,p){for(var R=0;R<o.length;++R){var N=o[R];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return R}return-1}var yt="closure_lm_"+(1e6*Math.random()|0),xn={};function Fr(o,c,d,p,R){if(Array.isArray(c)){for(var N=0;N<c.length;N++)Fr(o,c[N],d,p,R);return null}return d=Ad(d),o&&o[Lt]?o.K(c,d,h(p)?!!p.capture:!1,R):uo(o,c,d,!1,p,R)}function uo(o,c,d,p,R,N){if(!c)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,ce=ar(o);if(ce||(o[yt]=ce=new W(o)),d=ce.add(c,d,p,j,N),d.proxy)return d;if(p=co(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)gt||(R=j),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(an(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function co(){function o(d){return c.call(o.src,o.listener,d)}const c=or;return o}function bi(o,c,d,p,R){if(Array.isArray(c))for(var N=0;N<c.length;N++)bi(o,c[N],d,p,R);else p=h(p)?!!p.capture:!!p,d=Ad(d),o&&o[Lt]?(o=o.i,c=String(c).toString(),c in o.g&&(N=o.g[c],d=Ce(N,d,p,R),-1<d&&(F(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete o.g[c],o.h--)))):o&&(o=ar(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ce(c,d,p,R)),(d=-1<o?c[o]:null)&&jr(d))}function jr(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Lt])Z(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(an(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=ar(c))?(Z(d,o),d.h==0&&(d.src=null,c[yt]=null)):F(o)}}}function an(o){return o in xn?xn[o]:xn[o]="on"+o}function or(o,c){if(o.da)o=!0;else{c=new Ot(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&jr(o),o=d.call(p,c)}return o}function ar(o){return o=o[yt],o instanceof W?o:null}var Ft="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ad(o){return typeof o=="function"?o:(o[Ft]||(o[Ft]=function(c){return o.handleEvent(c)}),o[Ft])}function Ke(){se.call(this),this.i=new W(this),this.M=this,this.F=null}P(Ke,se),Ke.prototype[Lt]=!0,Ke.prototype.removeEventListener=function(o,c,d,p){bi(this,o,c,d,p)};function rt(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new ge(c,o);else if(c instanceof ge)c.target=c.target||o;else{var R=c;c=new ge(p,o),T(c,R)}if(R=!0,d)for(var N=d.length-1;0<=N;N--){var j=c.g=d[N];R=ho(j,p,!0,c)&&R}if(j=c.g=o,R=ho(j,p,!0,c)&&R,R=ho(j,p,!1,c)&&R,d)for(N=0;N<d.length;N++)j=c.g=d[N],R=ho(j,p,!1,c)&&R}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)F(d[p]);delete o.g[c],o.h--}}this.F=null},Ke.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},Ke.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function ho(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,N=0;N<c.length;++N){var j=c[N];if(j&&!j.da&&j.capture==d){var ce=j.listener,je=j.ha||j.src;j.fa&&Z(o.i,j),R=ce.call(je,p)!==!1&&R}}return R&&!p.defaultPrevented}function kd(o,c,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Cd(o){o.g=kd(()=>{o.g=null,o.i&&(o.i=!1,Cd(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class G_ extends se{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Cd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oi(o){se.call(this),this.h=o,this.g={}}P(Oi,se);var Rd=[];function Pd(o){z(o.g,function(c,d){this.g.hasOwnProperty(d)&&jr(c)},o),o.g={}}Oi.prototype.N=function(){Oi.aa.N.call(this),Pd(this)},Oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vl=l.JSON.stringify,Y_=l.JSON.parse,X_=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Dl(){}Dl.prototype.h=null;function Nd(o){return o.h||(o.h=o.i())}function Vd(){}var Mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bl(){ge.call(this,"d")}P(bl,ge);function Ol(){ge.call(this,"c")}P(Ol,ge);var lr={},Dd=null;function fo(){return Dd=Dd||new Ke}lr.La="serverreachability";function bd(o){ge.call(this,lr.La,o)}P(bd,ge);function Li(o){const c=fo();rt(c,new bd(c))}lr.STAT_EVENT="statevent";function Od(o,c){ge.call(this,lr.STAT_EVENT,o),this.stat=c}P(Od,ge);function it(o){const c=fo();rt(c,new Od(c,o))}lr.Ma="timingevent";function Md(o,c){ge.call(this,lr.Ma,o),this.size=c}P(Md,ge);function Fi(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function ji(){this.g=!0}ji.prototype.xa=function(){this.g=!1};function J_(o,c,d,p,R,N){o.info(function(){if(o.g)if(N)for(var j="",ce=N.split("&"),je=0;je<ce.length;je++){var oe=ce[je].split("=");if(1<oe.length){var Qe=oe[0];oe=oe[1];var Ge=Qe.split("_");j=2<=Ge.length&&Ge[1]=="type"?j+(Qe+"="+oe+"&"):j+(Qe+"=redacted&")}}else j=null;else j=N;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+j})}function Z_(o,c,d,p,R,N,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+N+" "+j})}function zr(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+t0(o,d)+(p?" "+p:"")})}function e0(o,c){o.info(function(){return"TIMEOUT: "+c})}ji.prototype.info=function(){};function t0(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var N=R[0];if(N!="noop"&&N!="stop"&&N!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Vl(d)}catch{return c}}var po={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ld={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ml;function mo(){}P(mo,Dl),mo.prototype.g=function(){return new XMLHttpRequest},mo.prototype.i=function(){return{}},Ml=new mo;function Sn(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new Oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fd}function Fd(){this.i=null,this.g="",this.h=!1}var jd={},Ll={};function Fl(o,c,d){o.L=1,o.v=_o(ln(c)),o.m=d,o.P=!0,zd(o,null)}function zd(o,c){o.F=Date.now(),go(o),o.A=ln(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ef(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Fd,o.g=_f(o.j,d?c:null,!o.m),0<o.O&&(o.M=new G_(y(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Rd[0]=R.toString()),R=Rd);for(var N=0;N<R.length;N++){var j=Fr(d,R[N],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Li(),J_(o.i,o.u,o.A,o.l,o.R,o.m)}Sn.prototype.ca=function(o){o=o.target;const c=this.M;c&&un(o)==3?c.j():this.Y(o)},Sn.prototype.Y=function(o){try{if(o==this.g)e:{const Ge=un(this.g);var c=this.g.Ba();const $r=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||lf(this.g)))){this.J||Ge!=4||c==7||(c==8||0>=$r?Li(3):Li(2)),jl(this);var d=this.g.Z();this.X=d;t:if(Ud(this)){var p=lf(this.g);o="";var R=p.length,N=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),zi(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(N&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,Z_(this.i,this.u,this.A,this.l,this.R,Ge,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,je=this.g;if((ce=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ce)){var oe=ce;break t}}oe=null}if(d=oe)zr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zl(this,d);else{this.o=!1,this.s=3,it(12),ur(this),zi(this);break e}}if(this.P){d=!0;let jt;for(;!this.J&&this.C<j.length;)if(jt=n0(this,j),jt==Ll){Ge==4&&(this.s=4,it(14),d=!1),zr(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==jd){this.s=4,it(15),zr(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else zr(this.i,this.l,jt,null),zl(this,jt);if(Ud(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||j.length!=0||this.h.h||(this.s=1,it(16),d=!1),this.o=this.o&&d,!d)zr(this.i,this.l,j,"[Invalid Chunked Response]"),ur(this),zi(this);else if(0<j.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Wl(Qe),Qe.M=!0,it(11))}}else zr(this.i,this.l,j,null),zl(this,j);Ge==4&&ur(this),this.o&&!this.J&&(Ge==4?mf(this.j,this):(this.o=!1,go(this)))}else _0(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),ur(this),zi(this)}}}catch{}finally{}};function Ud(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function n0(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?Ll:(d=Number(c.substring(d,p)),isNaN(d)?jd:(p+=1,p+d>c.length?Ll:(c=c.slice(p,p+d),o.C=p+d,c)))}Sn.prototype.cancel=function(){this.J=!0,ur(this)};function go(o){o.S=Date.now()+o.I,Bd(o,o.I)}function Bd(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Fi(y(o.ba,o),c)}function jl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Sn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(e0(this.i,this.A),this.L!=2&&(Li(),it(17)),ur(this),this.s=2,zi(this)):Bd(this,this.S-o)};function zi(o){o.j.G==0||o.J||mf(o.j,o)}function ur(o){jl(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Pd(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function zl(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Ul(d.h,o))){if(!o.K&&Ul(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)So(d),Io(d);else break e;ql(d),it(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Fi(y(d.Za,d),6e3));if(1>=qd(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else hr(d,11)}else if((o.K||d.g==o)&&So(d),!w(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let oe=R[c];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Qe=oe[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Ge=oe[4];Ge!=null&&(d.Aa=Ge,d.j.info("SVER="+d.Aa));const $r=oe[5];$r!=null&&typeof $r=="number"&&0<$r&&(p=1.5*$r,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const jt=o.g;if(jt){const ko=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ko){var N=p.h;N.g||ko.indexOf("spdy")==-1&&ko.indexOf("quic")==-1&&ko.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Bl(N,N.h),N.h=null))}if(p.D){const Kl=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Kl&&(p.ya=Kl,fe(p.I,p.D,Kl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=o;if(p.qa=vf(p,p.J?p.ia:null,p.W),j.K){Wd(p.h,j);var ce=j,je=p.L;je&&(ce.I=je),ce.B&&(jl(ce),go(ce)),p.g=j}else ff(p);0<d.i.length&&xo(d)}else oe[0]!="stop"&&oe[0]!="close"||hr(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?hr(d,7):Hl(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}Li(4)}catch{}}var r0=class{constructor(o,c){this.g=o,this.map=c}};function $d(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function qd(o){return o.h?1:o.g?o.g.size:0}function Ul(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Bl(o,c){o.g?o.g.add(c):o.h=c}function Wd(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}$d.prototype.cancel=function(){if(this.i=Kd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Kd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return V(o.i)}function i0(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function s0(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function Qd(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=s0(o),p=i0(o),R=p.length,N=0;N<R;N++)c.call(void 0,p[N],d&&d[N],o)}var Gd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function o0(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var N=o[d].substring(0,p);R=o[d].substring(p+1)}else N=o[d];c(N,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function cr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof cr){this.h=o.h,yo(this,o.j),this.o=o.o,this.g=o.g,vo(this,o.s),this.l=o.l;var c=o.i,d=new $i;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Yd(this,d),this.m=o.m}else o&&(c=String(o).match(Gd))?(this.h=!1,yo(this,c[1]||"",!0),this.o=Ui(c[2]||""),this.g=Ui(c[3]||"",!0),vo(this,c[4]),this.l=Ui(c[5]||"",!0),Yd(this,c[6]||"",!0),this.m=Ui(c[7]||"")):(this.h=!1,this.i=new $i(null,this.h))}cr.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Bi(c,Xd,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Bi(c,Xd,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Bi(d,d.charAt(0)=="/"?u0:l0,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Bi(d,h0)),o.join("")};function ln(o){return new cr(o)}function yo(o,c,d){o.j=d?Ui(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function vo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Yd(o,c,d){c instanceof $i?(o.i=c,d0(o.i,o.h)):(d||(c=Bi(c,c0)),o.i=new $i(c,o.h))}function fe(o,c,d){o.i.set(c,d)}function _o(o){return fe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ui(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Bi(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,a0),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function a0(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xd=/[#\/\?@]/g,l0=/[#\?:]/g,u0=/[#\?]/g,c0=/[#\?@]/g,h0=/#/g;function $i(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function An(o){o.g||(o.g=new Map,o.h=0,o.i&&o0(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=$i.prototype,t.add=function(o,c){An(this),this.i=null,o=Ur(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Jd(o,c){An(o),c=Ur(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Zd(o,c){return An(o),c=Ur(o,c),o.g.has(c)}t.forEach=function(o,c){An(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(c,R,p,this)},this)},this)},t.na=function(){An(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=o[p];for(let N=0;N<R.length;N++)d.push(c[p])}return d},t.V=function(o){An(this);let c=[];if(typeof o=="string")Zd(this,o)&&(c=c.concat(this.g.get(Ur(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},t.set=function(o,c){return An(this),this.i=null,o=Ur(this,o),Zd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function ef(o,c,d){Jd(o,c),0<d.length&&(o.i=null,o.g.set(Ur(o,c),V(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var R=N;j[p]!==""&&(R+="="+encodeURIComponent(String(j[p]))),o.push(R)}}return this.i=o.join("&")};function Ur(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function d0(o,c){c&&!o.j&&(An(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(Jd(this,p),ef(this,R,d))},o)),o.j=c}function f0(o,c){const d=new ji;if(l.Image){const p=new Image;p.onload=k(kn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=k(kn,d,"TestLoadImage: error",!1,c,p),p.onabort=k(kn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=k(kn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function p0(o,c){const d=new ji,p=new AbortController,R=setTimeout(()=>{p.abort(),kn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(N=>{clearTimeout(R),N.ok?kn(d,"TestPingServer: ok",!0,c):kn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),kn(d,"TestPingServer: error",!1,c)})}function kn(o,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function m0(){this.g=new X_}function g0(o,c,d){const p=d||"";try{Qd(o,function(R,N){let j=R;h(R)&&(j=Vl(R)),c.push(p+N+"="+encodeURIComponent(j))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function wo(o){this.l=o.Ub||null,this.j=o.eb||!1}P(wo,Dl),wo.prototype.g=function(){return new Eo(this.l,this.j)},wo.prototype.i=function(o){return function(){return o}}({});function Eo(o,c){Ke.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Eo,Ke),t=Eo.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,qi(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,qi(this)),this.g&&(this.readyState=3,qi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tf(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function tf(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Hi(this):qi(this),this.readyState==3&&tf(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Hi(this))},t.Qa=function(o){this.g&&(this.response=o,Hi(this))},t.ga=function(){this.g&&Hi(this)};function Hi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,qi(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function qi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function nf(o){let c="";return z(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function $l(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=nf(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):fe(o,c,d))}function xe(o){Ke.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(xe,Ke);var y0=/^https?$/i,v0=["POST","PUT"];t=xe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ml.g(),this.v=this.o?Nd(this.o):Nd(Ml),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(N){rf(this,N);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(v0,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of d)this.g.setRequestHeader(N,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{af(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){rf(this,N)}};function rf(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,sf(o),To(o)}function sf(o){o.A||(o.A=!0,rt(o,"complete"),rt(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,rt(this,"complete"),rt(this,"abort"),To(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),To(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?of(this):this.bb())},t.bb=function(){of(this)};function of(o){if(o.h&&typeof a<"u"&&(!o.v[1]||un(o)!=4||o.Z()!=2)){if(o.u&&un(o)==4)kd(o.Ea,0,o);else if(rt(o,"readystatechange"),un(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=j===0){var R=String(o.D).match(Gd)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!y0.test(R?R.toLowerCase():"")}d=p}if(d)rt(o,"complete"),rt(o,"success");else{o.m=6;try{var N=2<un(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",sf(o)}}finally{To(o)}}}}function To(o,c){if(o.g){af(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||rt(o,"ready");try{d.onreadystatechange=p}catch{}}}function af(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function un(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Y_(c)}};function lf(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function _0(o){const c={};o=(o.g&&2<=un(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(w(o[p]))continue;var d=A(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[R]||[];c[R]=N,N.push(d)}_(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function uf(o){this.Aa=0,this.i=[],this.j=new ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wi("baseRetryDelayMs",5e3,o),this.cb=Wi("retryDelaySeedMs",1e4,o),this.Wa=Wi("forwardChannelMaxRetries",2,o),this.wa=Wi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new $d(o&&o.concurrentRequestLimit),this.Da=new m0,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=uf.prototype,t.la=8,t.G=1,t.connect=function(o,c,d,p){it(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=vf(this,null,this.W),xo(this)};function Hl(o){if(cf(o),o.G==3){var c=o.U++,d=ln(o.I);if(fe(d,"SID",o.K),fe(d,"RID",c),fe(d,"TYPE","terminate"),Ki(o,d),c=new Sn(o,o.j,c),c.L=2,c.v=_o(ln(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=_f(c.j,null),c.g.ea(c.v)),c.F=Date.now(),go(c)}yf(o)}function Io(o){o.g&&(Wl(o),o.g.cancel(),o.g=null)}function cf(o){Io(o),o.u&&(l.clearTimeout(o.u),o.u=null),So(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function xo(o){if(!Hd(o.h)&&!o.s){o.s=!0;var c=o.Ga;bt||J(),B||(bt(),B=!0),Q.add(c,o),o.B=0}}function w0(o,c){return qd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Fi(y(o.Ga,o,c),gf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Sn(this,this.j,o);let N=this.o;if(this.S&&(N?(N=m(N),T(N,this.S)):N=this.S),this.m!==null||this.O||(R.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=df(this,R,c),d=ln(this.I),fe(d,"RID",o),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),Ki(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(nf(N)))+"&"+c:this.m&&$l(d,this.m,N)),Bl(this.h,R),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",c),fe(d,"SID","null"),R.T=!0,Fl(R,d,null)):Fl(R,d,c),this.G=2}}else this.G==3&&(o?hf(this,o):this.i.length==0||Hd(this.h)||hf(this))};function hf(o,c){var d;c?d=c.l:d=o.U++;const p=ln(o.I);fe(p,"SID",o.K),fe(p,"RID",d),fe(p,"AID",o.T),Ki(o,p),o.m&&o.o&&$l(p,o.m,o.o),d=new Sn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=df(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Bl(o.h,d),Fl(d,p,c)}function Ki(o,c){o.H&&z(o.H,function(d,p){fe(c,p,d)}),o.l&&Qd({},function(d,p){fe(c,p,d)})}function df(o,c,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let N=-1;for(;;){const j=["count="+d];N==-1?0<d?(N=R[0].g,j.push("ofs="+N)):N=0:j.push("ofs="+N);let ce=!0;for(let je=0;je<d;je++){let oe=R[je].g;const Qe=R[je].map;if(oe-=N,0>oe)N=Math.max(0,R[je].g-100),ce=!1;else try{g0(Qe,j,"req"+oe+"_")}catch{p&&p(Qe)}}if(ce){p=j.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function ff(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;bt||J(),B||(bt(),B=!0),Q.add(c,o),o.v=0}}function ql(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Fi(y(o.Fa,o),gf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,pf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Fi(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Io(this),pf(this))};function Wl(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function pf(o){o.g=new Sn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ln(o.qa);fe(c,"RID","rpc"),fe(c,"SID",o.K),fe(c,"AID",o.T),fe(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&fe(c,"TO",o.ja),fe(c,"TYPE","xmlhttp"),Ki(o,c),o.m&&o.o&&$l(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=_o(ln(c)),d.m=null,d.P=!0,zd(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Io(this),ql(this),it(19))};function So(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function mf(o,c){var d=null;if(o.g==c){So(o),Wl(o),o.g=null;var p=2}else if(Ul(o.h,c))d=c.D,Wd(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=fo(),rt(p,new Md(p,d)),xo(o)}else ff(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&w0(o,c)||p==2&&ql(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),R){case 1:hr(o,5);break;case 4:hr(o,10);break;case 3:hr(o,6);break;default:hr(o,2)}}}function gf(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function hr(o,c){if(o.j.info("Error code "+c),c==2){var d=y(o.fb,o),p=o.Xa;const R=!p;p=new cr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||yo(p,"https"),_o(p),R?f0(p.toString(),d):p0(p.toString(),d)}else it(2);o.G=0,o.l&&o.l.sa(c),yf(o),cf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function yf(o){if(o.G=0,o.ka=[],o.l){const c=Kd(o.h);(c.length!=0||o.i.length!=0)&&(b(o.ka,c),b(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function vf(o,c,d){var p=d instanceof cr?ln(d):new cr(d);if(p.g!="")c&&(p.g=c+"."+p.g),vo(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var N=new cr(null);p&&yo(N,p),c&&(N.g=c),R&&vo(N,R),d&&(N.l=d),p=N}return d=o.D,c=o.ya,d&&c&&fe(p,d,c),fe(p,"VER",o.la),Ki(o,p),p}function _f(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new xe(new wo({eb:d})):new xe(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wf(){}t=wf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ao(){}Ao.prototype.g=function(o,c){return new vt(o,c)};function vt(o,c){Ke.call(this),this.g=new uf(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!w(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Br(this)}P(vt,Ke),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Hl(this.g)},vt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Vl(o),o=d);c.i.push(new r0(c.Ya++,o)),c.G==3&&xo(c)},vt.prototype.N=function(){this.g.l=null,delete this.j,Hl(this.g),delete this.g,vt.aa.N.call(this)};function Ef(o){bl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(Ef,bl);function Tf(){Ol.call(this),this.status=1}P(Tf,Ol);function Br(o){this.g=o}P(Br,wf),Br.prototype.ua=function(){rt(this.g,"a")},Br.prototype.ta=function(o){rt(this.g,new Ef(o))},Br.prototype.sa=function(o){rt(this.g,new Tf)},Br.prototype.ra=function(){rt(this.g,"b")},Ao.prototype.createWebChannel=Ao.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,pv=function(){return new Ao},fv=function(){return fo()},dv=lr,Pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},po.NO_ERROR=0,po.TIMEOUT=8,po.HTTP_ERROR=6,aa=po,Ld.COMPLETE="complete",hv=Ld,Vd.EventType=Mi,Mi.OPEN="a",Mi.CLOSE="b",Mi.ERROR="c",Mi.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,ls=Vd,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,cv=xe}).apply(typeof qo<"u"?qo:typeof self<"u"?self:typeof window<"u"?window:{});const Hp="@firebase/firestore";/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let Ni="10.14.0";/**
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
 */const Rr=new Uh("@firebase/firestore");function ns(){return Rr.logLevel}function H(t,...e){if(Rr.logLevel<=re.DEBUG){const n=e.map($h);Rr.debug(`Firestore (${Ni}): ${t}`,...n)}}function En(t,...e){if(Rr.logLevel<=re.ERROR){const n=e.map($h);Rr.error(`Firestore (${Ni}): ${t}`,...n)}}function wi(t,...e){if(Rr.logLevel<=re.WARN){const n=e.map($h);Rr.warn(`Firestore (${Ni}): ${t}`,...n)}}function $h(t){if(typeof t=="string")return t;try{/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ni}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function ue(t,e){t||G()}function X(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class RT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PT{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ir,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ir)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new mv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Ze(e)}}class NT{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new NT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new DT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function OT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class gv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=OT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Ei(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Hs{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends Hs{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const MT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Hs{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return MT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(_e.fromString(e))}static fromName(e){return new K(_e.fromString(e).popFirst(5))}static empty(){return new K(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new _e(e.slice()))}}function LT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new Xn(i,K.empty(),e)}function FT(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(Y.min(),K.empty(),-1)}static max(){return new Xn(Y.max(),K.empty(),-1)}}function jT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const zT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function no(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==zT)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function BT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ro(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Hh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hh.oe=-1;function pl(t){return t==null}function za(t){return t===0&&1/t==-1/0}function $T(t){return typeof t=="number"&&Number.isInteger(t)&&!za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function qp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wo(this.root,e,this.comparator,!0)}}class Wo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wp(this.data.getIterator())}getIteratorFrom(e){return new Wp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Wp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Et{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Et([])}unionWith(e){let n=new He(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class vv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vv("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const HT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(ue(!!t),typeof t=="string"){let e=0;const n=HT.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function qh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wh(t){const e=t.mapValue.fields.__previous_value__;return qh(e)?Wh(e):e}function qs(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class qT{constructor(e,n,r,i,s,a,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Ws{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ws("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ws&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ko={mapValue:{}};function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qh(t)?4:KT(t)?9007199254740991:WT(t)?10:11:G()}function rn(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qs(t).isEqual(qs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Jn(i.timestampValue),l=Jn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Pr(i.bytesValue).isEqual(Pr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ae(i.doubleValue),l=Ae(s.doubleValue);return a===l?za(a)===za(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(qp(a)!==qp(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!rn(a[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Ks(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function Ti(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Ae(s.integerValue||s.doubleValue),u=Ae(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Kp(t.timestampValue,e.timestampValue);case 4:return Kp(qs(t),qs(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Pr(s),u=Pr(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ae(l[h],u[h]);if(f!==0)return f}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ae(Ae(s.latitude),Ae(a.latitude));return l!==0?l:ae(Ae(s.longitude),Ae(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Qp(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const g=s.fields||{},y=a.fields||{},k=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(u=y.value)===null||u===void 0?void 0:u.arrayValue,V=ae(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Qp(k,P)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ko.mapValue&&a===Ko.mapValue)return 0;if(s===Ko.mapValue)return 1;if(a===Ko.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=ae(u[g],f[g]);if(y!==0)return y;const k=Ti(l[u[g]],h[f[g]]);if(k!==0)return k}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function Kp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Jn(t),r=Jn(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Qp(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ti(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Ii(t){return Nc(t)}function Nc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Nc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Nc(n.fields[a])}`;return i+"}"}(t.mapValue):G()}function Vc(t){return!!t&&"integerValue"in t}function Kh(t){return!!t&&"arrayValue"in t}function Gp(t){return!!t&&"nullValue"in t}function Yp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function la(t){return!!t&&"mapValue"in t}function WT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Es(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Es(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Es(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!la(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=Es(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());la(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];la(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Es(this.value))}}function _v(t){const e=[];return Mr(t.fields,(n,r)=>{const i=new Be([n]);if(la(r)){const s=_v(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Et(e)}/**
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
 */class tt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,Y.min(),Y.min(),Y.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,Y.min(),Y.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Y.min(),Y.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ua{constructor(e,n){this.position=e,this.inclusive=n}}function Xp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(a.referenceValue),n.key):r=Ti(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ba{constructor(e,n="asc"){this.field=e,this.dir=n}}function QT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class wv{}class Ve extends wv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new YT(e,n,r):n==="array-contains"?new ZT(e,r):n==="in"?new eI(e,r):n==="not-in"?new tI(e,r):n==="array-contains-any"?new nI(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XT(e,r):new JT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ti(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(Ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends wv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new sn(e,n)}matches(e){return Ev(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ev(t){return t.op==="and"}function Tv(t){return GT(t)&&Ev(t)}function GT(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function Dc(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Ii(t.value);if(Tv(t))return t.filters.map(e=>Dc(e)).join(",");{const e=t.filters.map(n=>Dc(n)).join(",");return`${t.op}(${e})`}}function Iv(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&rn(r.value,i.value)}(t,e):t instanceof sn?function(r,i){return i instanceof sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Iv(a,i.filters[l]),!0):!1}(t,e):void G()}function xv(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Ii(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(xv).join(" ,")+"}"}(t):"Filter"}class YT extends Ve{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class XT extends Ve{constructor(e,n){super(e,"in",n),this.keys=Sv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JT extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=Sv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class ZT extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kh(n)&&Ks(n.arrayValue,this.value)}}class eI extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ks(this.value.arrayValue,n)}}class tI extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ks(this.value.arrayValue,n)}}class nI extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ks(this.value.arrayValue,r))}}/**
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
 */class rI{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Zp(t,e=null,n=[],r=[],i=null,s=null,a=null){return new rI(t,e,n,r,i,s,a)}function Qh(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ii(r)).join(",")),e.ue=n}return e.ue}function Gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Iv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jp(t.startAt,e.startAt)&&Jp(t.endAt,e.endAt)}function bc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ml{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iI(t,e,n,r,i,s,a,l){return new ml(t,e,n,r,i,s,a,l)}function Yh(t){return new ml(t)}function em(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sI(t){return t.collectionGroup!==null}function Ts(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new He(Be.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ba(s,r))}),n.has(Be.keyField().canonicalString())||e.ce.push(new Ba(Be.keyField(),r))}return e.ce}function tn(t){const e=X(t);return e.le||(e.le=oI(e,Ts(t))),e.le}function oI(t,e){if(t.limitType==="F")return Zp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ba(i.field,s)});const n=t.endAt?new Ua(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ua(t.startAt.position,t.startAt.inclusive):null;return Zp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oc(t,e,n){return new ml(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gl(t,e){return Gh(tn(t),tn(e))&&t.limitType===e.limitType}function Av(t){return`${Qh(tn(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xv(i)).join(", ")}]`),pl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ii(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ii(i)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function yl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ts(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=Xp(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Ts(r),i)||r.endAt&&!function(a,l,u){const h=Xp(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Ts(r),i))}(t,e)}function aI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kv(t){return(e,n)=>{let r=!1;for(const i of Ts(t)){const s=lI(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lI(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ti(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class Vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return yv(this.inner)}size(){return this.innerSize}}/**
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
 */const uI=new Ie(K.comparator);function Tn(){return uI}const Cv=new Ie(K.comparator);function us(...t){let e=Cv;for(const n of t)e=e.insert(n.key,n);return e}function Rv(t){let e=Cv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vr(){return Is()}function Pv(){return Is()}function Is(){return new Vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const cI=new Ie(K.comparator),hI=new He(K.comparator);function te(...t){let e=hI;for(const n of t)e=e.add(n);return e}const dI=new He(ae);function fI(){return dI}/**
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
 */function Xh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:za(e)?"-0":e}}function Nv(t){return{integerValue:""+t}}function pI(t,e){return $T(e)?Nv(e):Xh(t,e)}/**
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
 */class vl{constructor(){this._=void 0}}function mI(t,e,n){return t instanceof $a?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qh(s)&&(s=Wh(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Qs?Dv(t,e):t instanceof Gs?bv(t,e):function(i,s){const a=Vv(i,s),l=tm(a)+tm(i.Pe);return Vc(a)&&Vc(i.Pe)?Nv(l):Xh(i.serializer,l)}(t,e)}function gI(t,e,n){return t instanceof Qs?Dv(t,e):t instanceof Gs?bv(t,e):n}function Vv(t,e){return t instanceof Ha?function(r){return Vc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $a extends vl{}class Qs extends vl{constructor(e){super(),this.elements=e}}function Dv(t,e){const n=Ov(e);for(const r of t.elements)n.some(i=>rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gs extends vl{constructor(e){super(),this.elements=e}}function bv(t,e){let n=Ov(e);for(const r of t.elements)n=n.filter(i=>!rn(i,r));return{arrayValue:{values:n}}}class Ha extends vl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function tm(t){return Ae(t.integerValue||t.doubleValue)}function Ov(t){return Kh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yI(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Qs&&i instanceof Qs||r instanceof Gs&&i instanceof Gs?Ei(r.elements,i.elements,rn):r instanceof Ha&&i instanceof Ha?rn(r.Pe,i.Pe):r instanceof $a&&i instanceof $a}(t.transform,e.transform)}class vI{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _l{}function Mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jh(t.key,Wt.none()):new io(t.key,t.data,Wt.none());{const n=t.data,r=ct.empty();let i=new He(Be.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new ir(t.key,r,new Et(i.toArray()),Wt.none())}}function _I(t,e,n){t instanceof io?function(i,s,a){const l=i.value.clone(),u=rm(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ir?function(i,s,a){if(!ua(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=rm(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Lv(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function xs(t,e,n,r){return t instanceof io?function(s,a,l,u){if(!ua(s.precondition,a))return l;const h=s.value.clone(),f=im(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ir?function(s,a,l,u){if(!ua(s.precondition,a))return l;const h=im(s.fieldTransforms,u,a),f=a.data;return f.setAll(Lv(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,a,l){return ua(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function wI(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Vv(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function nm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ei(r,i,(s,a)=>yI(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class io extends _l{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ir extends _l{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Lv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rm(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,gI(a,l,n[i]))}return r}function im(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,mI(s,a,e))}return r}class Jh extends _l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EI extends _l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TI{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_I(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Pv();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=Mv(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,(n,r)=>nm(n,r))&&Ei(this.baseMutations,e.baseMutations,(n,r)=>nm(n,r))}}class Zh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return cI}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Zh(e,n,r,i)}}/**
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
 */class II{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Re,ne;function SI(t){switch(t){default:return G();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Fv(t){if(t===void 0)return En("GRPC error has no .code"),M.UNKNOWN;switch(t){case Re.OK:return M.OK;case Re.CANCELLED:return M.CANCELLED;case Re.UNKNOWN:return M.UNKNOWN;case Re.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Re.INTERNAL:return M.INTERNAL;case Re.UNAVAILABLE:return M.UNAVAILABLE;case Re.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Re.NOT_FOUND:return M.NOT_FOUND;case Re.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Re.ABORTED:return M.ABORTED;case Re.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Re.DATA_LOSS:return M.DATA_LOSS;default:return G()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function AI(){return new TextEncoder}/**
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
 */const kI=new Tr([4294967295,4294967295],0);function sm(t){const e=AI().encode(t),n=new uv;return n.update(e),new Uint8Array(n.digest())}function om(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([i,s],0)]}class ed{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new cs(`Invalid padding: ${n}`);if(r<0)throw new cs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new cs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new cs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Tr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Tr.fromNumber(r)));return i.compare(kI)===1&&(i=new Tr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=sm(e),[r,i]=om(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new ed(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=sm(e),[r,i]=om(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class cs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wl(Y.min(),i,new Ie(ae),Tn(),te())}}class so{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new so(r,n,te(),te(),te())}}/**
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
 */class ca{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class jv{constructor(e,n){this.targetId=e,this.me=n}}class zv{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class am{constructor(){this.fe=0,this.ge=um(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new so(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=um()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class CI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tn(),this.qe=lm(),this.Qe=new Ie(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(bc(s))if(r===0){const a=new K(s.path);this.Ue(n,a,tt.newNoDocument(a,Y.min()))}else ue(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=Pr(r).toUint8Array()}catch(u){if(u instanceof vv)return wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ed(a,i,s)}catch(u){return wi(u instanceof cs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&bc(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,tt.newNoDocument(u,e))}s.be&&(n.set(a,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new wl(e,n,this.Qe,this.ke,r);return this.ke=Tn(),this.qe=lm(),this.Qe=new Ie(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new am,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new am),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function lm(){return new Ie(K.comparator)}function um(){return new Ie(K.comparator)}const RI={asc:"ASCENDING",desc:"DESCENDING"},PI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NI={and:"AND",or:"OR"};class VI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mc(t,e){return t.useProto3Json||pl(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DI(t,e){return qa(t,e.toTimestamp())}function nn(t){return ue(!!t),Y.fromTimestamp(function(n){const r=Jn(n);return new be(r.seconds,r.nanos)}(t))}function td(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Bv(t){const e=_e.fromString(t);return ue(Kv(e)),e}function Fc(t,e){return td(t.databaseId,e.path)}function xu(t,e){const n=Bv(e);if(n.get(1)!==t.databaseId.projectId)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Hv(n))}function $v(t,e){return td(t.databaseId,e)}function bI(t){const e=Bv(t);return e.length===4?_e.emptyPath():Hv(e)}function jc(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hv(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cm(t,e,n){return{name:Fc(t,e),fields:n.value.mapValue.fields}}function OI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string"),We.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?M.UNKNOWN:Fv(h.code);return new q(f,h.message||"")}(a);n=new zv(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xu(t,r.document.name),s=nn(r.document.updateTime),a=r.document.createTime?nn(r.document.createTime):Y.min(),l=new ct({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ca(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xu(t,r.document),s=r.readTime?nn(r.readTime):Y.min(),a=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ca([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xu(t,r.document),s=r.removedTargetIds||[];n=new ca([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new xI(i,s),l=r.targetId;n=new jv(l,a)}}return n}function MI(t,e){let n;if(e instanceof io)n={update:cm(t,e.key,e.value)};else if(e instanceof Jh)n={delete:Fc(t,e.key)};else if(e instanceof ir)n={update:cm(t,e.key,e.data),updateMask:qI(e.fieldMask)};else{if(!(e instanceof EI))return G();n={verify:Fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof $a)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Gs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ha)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:DI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function LI(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?nn(i.updateTime):nn(s);return a.isEqual(Y.min())&&(a=nn(s)),new vI(a,i.transformResults||[])}(n,e))):[]}function FI(t,e){return{documents:[$v(t,e.path)]}}function jI(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$v(t,i);const s=function(h){if(h.length!==0)return Wv(sn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Wr(y.field),direction:BI(y.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Mc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function zI(t){let e=bI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const y=qv(g);return y instanceof sn&&Tv(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(y=>function(P){return new Ba(Kr(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,pl(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,k=g.values||[];return new Ua(k,y)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const y=!g.before,k=g.values||[];return new Ua(k,y)}(n.endAt)),iI(e,i,a,s,l,"F",u,h)}function UI(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Kr(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Kr(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Kr(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Kr(n.unaryFilter.field);return Ve.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Kr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>qv(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function BI(t){return RI[t]}function $I(t){return PI[t]}function HI(t){return NI[t]}function Wr(t){return{fieldPath:t.canonicalString()}}function Kr(t){return Be.fromServerFormat(t.fieldPath)}function Wv(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Yp(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NAN"}};if(Gp(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yp(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NAN"}};if(Gp(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(n.field),op:$I(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(i=>Wv(i));return r.length===1?r[0]:{compositeFilter:{op:HI(n.op),filters:r}}}(t):G()}function qI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Kv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class On{constructor(e,n,r,i,s=Y.min(),a=Y.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new On(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class WI{constructor(e){this.ct=e}}function KI(t){const e=zI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oc(e,e.limit,"L"):e}/**
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
 */class QI{constructor(){this.un=new GI}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Xn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class GI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(_e.comparator)).toArray()}}/**
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
 */class xi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new xi(0)}static kn(){return new xi(-1)}}/**
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
 */class YI{constructor(){this.changes=new Vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JI{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xs(r.mutation,i,Et.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=us();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=Tn();const a=Is(),l=function(){return Is()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ir)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),xs(f.mutation,h,f.mutation.getFieldMask(),be.now())):a.set(h.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new XI(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Is();let i=new Ie((a,l)=>a-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Et.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=Pv();f.forEach(y=>{if(!s.has(y)){const k=Mv(n.get(y),r.get(y));k!==null&&g.set(y,k),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return K.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(vr());let l=-1,u=s;return a.next(h=>O.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:Rv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=us();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=us();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(g,y){return new ml(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,y)=>{a=a.insert(g,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,tt.newInvalidDocument(f)))});let l=us();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&xs(f.mutation,h,Et.empty(),be.now()),yl(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class ZI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:KI(i.bundledQuery),readTime:nn(i.readTime)}}(n)),O.resolve()}}/**
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
 */class ex{constructor(){this.overlays=new Ie(K.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=vr(),s=n.length+1,a=new K(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=vr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=vr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new II(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class tx{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class nd{constructor(){this.Tr=new He(Oe.Er),this.dr=new He(Oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Oe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new _e([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new _e([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=te();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class nx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new He(Oe.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new TI(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Oe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(ae);return n.forEach(i=>{const s=new Oe(i,0),a=new Oe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const a=new Oe(new K(s),0);let l=new He(ae);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),O.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Oe(n,0),i=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rx{constructor(e){this.Mr=e,this.docs=function(){return new Ie(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tn();const a=n.path,l=new K(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||jT(FT(f),r)<=0||(i.has(f.key)||yl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ix(this)}getSize(e){return O.resolve(this.size)}}class ix extends YI{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class sx{constructor(e){this.persistence=e,this.Nr=new Vi(n=>Qh(n),Gh),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nd,this.targetCount=0,this.kr=xi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new xi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
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
 */class ox{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Hh(0),this.Kr=!1,this.Kr=!0,this.$r=new tx,this.referenceDelegate=e(this),this.Ur=new sx(this),this.indexManager=new QI,this.remoteDocumentCache=function(i){return new rx(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new WI(n),this.Gr=new ZI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ex,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new nx(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new ax(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ax extends UT{constructor(e){super(),this.currentSequenceNumber=e}}class rd{constructor(e){this.persistence=e,this.Jr=new nd,this.Yr=null}static Zr(e){return new rd(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class lx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ux{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return c1()?8:BT(a1())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new lx;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ns()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(ns()<=re.DEBUG&&H("QueryEngine","Query:",qr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ns()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):O.resolve())}Yi(e,n){if(em(n))return O.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Oc(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=te(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,a,u.readTime)?this.Yi(e,Oc(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return em(n)||i.isEqual(Y.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?O.resolve(null):(ns()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qr(n)),this.rs(e,a,n,LT(i,-1)).next(l=>l))})}ts(e,n){let r=new He(kv(e));return n.forEach((i,s)=>{yl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ns()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",qr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Xn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class cx{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(ae),this._s=new Vi(s=>Qh(s),Gh),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function hx(t,e,n,r){return new cx(t,e,n,r)}async function Qv(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=te();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function dx(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,y=g.keys();let k=O.resolve();return y.forEach(P=>{k=k.next(()=>f.getEntry(u,P)).next(V=>{const b=h.docVersions.get(P);ue(b!==null),V.version.compareTo(b)<0&&(g.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Gv(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function fx(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let k=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(We.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(g,k),function(V,b,x){return V.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(y,k,f)&&l.push(n.Ur.updateTargetData(s,k))});let u=Tn(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(px(s,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function px(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=Tn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function mx(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gx(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Ur.allocateTargetId(r).next(a=>(i=new On(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function zc(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ro(a))throw a;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function hm(t,e,n){const r=X(t);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=X(u),y=g._s.get(f);return y!==void 0?O.resolve(g.os.get(y)):g.Ur.getTargetData(h,f)}(r,a,tn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?i:Y.min(),n?s:te())).next(l=>(yx(r,aI(e),l),{documents:l,Ts:s})))}function yx(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class dm{constructor(){this.activeTargetIds=fI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vx{constructor(){this.so=new dm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new dm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _x{_o(e){}shutdown(){}}/**
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
 */class fm{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qo=null;function Su(){return Qo===null?Qo=function(){return 268435456+Math.round(2147483648*Math.random())}():Qo++,"0x"+Qo.toString(16)}/**
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
 */const wx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ex{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Je="WebChannelConnection";class Tx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=Su(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw wi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ni}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=wx[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Su();return new Promise((a,l)=>{const u=new cv;u.setWithCredentials(!0),u.listenOnce(hv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case aa.NO_ERROR:const f=u.getResponseJson();H(Je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case aa.TIMEOUT:H(Je,`RPC '${e}' ${s} timed out`),l(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case aa.HTTP_ERROR:const g=u.getStatus();if(H(Je,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const k=y==null?void 0:y.error;if(k&&k.status&&k.message){const P=function(b){const x=b.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(x)>=0?x:M.UNKNOWN}(k.status);l(new q(P,k.message))}else l(new q(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(M.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{H(Je,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(Je,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Su(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=pv(),l=fv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(Je,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=a.createWebChannel(f,u);let y=!1,k=!1;const P=new Ex({Io:b=>{k?H(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(y||(H(Je,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),H(Je,`RPC '${e}' stream ${i} sending:`,b),g.send(b))},To:()=>g.close()}),V=(b,x,w)=>{b.listen(x,S=>{try{w(S)}catch(D){setTimeout(()=>{throw D},0)}})};return V(g,ls.EventType.OPEN,()=>{k||(H(Je,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),V(g,ls.EventType.CLOSE,()=>{k||(k=!0,H(Je,`RPC '${e}' stream ${i} transport closed`),P.So())}),V(g,ls.EventType.ERROR,b=>{k||(k=!0,wi(Je,`RPC '${e}' stream ${i} transport errored:`,b),P.So(new q(M.UNAVAILABLE,"The operation could not be completed")))}),V(g,ls.EventType.MESSAGE,b=>{var x;if(!k){const w=b.data[0];ue(!!w);const S=w,D=S.error||((x=S[0])===null||x===void 0?void 0:x.error);if(D){H(Je,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let z=function(v){const T=Re[v];if(T!==void 0)return Fv(T)}(U),_=D.message;z===void 0&&(z=M.INTERNAL,_="Unknown error status: "+U+" with message "+D.message),k=!0,P.So(new q(z,_)),g.close()}else H(Je,`RPC '${e}' stream ${i} received:`,w),P.bo(w)}}),V(l,dv.STAT_EVENT,b=>{b.stat===Pc.PROXY?H(Je,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Pc.NOPROXY&&H(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Au(){return typeof document<"u"?document:null}/**
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
 */function El(t){return new VI(t,!0)}/**
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
 */class Yv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Xv{constructor(e,n,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Yv(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ix extends Xv{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=OI(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?nn(a.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jc(this.serializer),n.addTarget=function(s,a){let l;const u=a.target;if(l=bc(u)?{documents:FI(s,u)}:{query:jI(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Uv(s,a.resumeToken);const h=Mc(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(Y.min())>0){l.readTime=qa(s,a.snapshotVersion.toTimestamp());const h=Mc(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=UI(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jc(this.serializer),n.removeTarget=e,this.a_(n)}}class xx extends Xv{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=LI(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MI(this.serializer,r))};this.a_(n)}}/**
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
 */class Sx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Lc(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Lc(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ax{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class kx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{Lr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.L_.add(4),await oo(h),h.q_.set("Unknown"),h.L_.delete(4),await Tl(h)}(this))})}),this.q_=new Ax(r,i)}}async function Tl(t){if(Lr(t))for(const e of t.B_)await e(!0)}async function oo(t){for(const e of t.B_)await e(!1)}function Jv(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ld(n)?ad(n):Di(n).r_()&&od(n,e))}function sd(t,e){const n=X(t),r=Di(n);n.N_.delete(e),r.r_()&&Zv(n,e),n.N_.size===0&&(r.r_()?r.o_():Lr(n)&&n.q_.set("Unknown"))}function od(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Di(t).A_(e)}function Zv(t,e){t.Q_.xe(e),Di(t).R_(e)}function ad(t){t.Q_=new CI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Di(t).start(),t.q_.v_()}function ld(t){return Lr(t)&&!Di(t).n_()&&t.N_.size>0}function Lr(t){return X(t).L_.size===0}function e_(t){t.Q_=void 0}async function Cx(t){t.q_.set("Online")}async function Rx(t){t.N_.forEach((e,n)=>{od(t,e)})}async function Px(t,e){e_(t),ld(t)?(t.q_.M_(e),ad(t)):t.q_.set("Unknown")}async function Nx(t,e,n){if(t.q_.set("Online"),e instanceof zv&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wa(t,r)}else if(e instanceof ca?t.Q_.Ke(e):e instanceof jv?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await Gv(t.localStore);n.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),Zv(s,u);const g=new On(f.target,u,h,f.sequenceNumber);od(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Wa(t,r)}}async function Wa(t,e,n){if(!ro(e))throw e;t.L_.add(1),await oo(t),t.q_.set("Offline"),n||(n=()=>Gv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Tl(t)})}function t_(t,e){return e().catch(n=>Wa(t,n,e))}async function Il(t){const e=X(t),n=Zn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Vx(e);)try{const i=await mx(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Dx(e,i)}catch(i){await Wa(e,i)}n_(e)&&r_(e)}function Vx(t){return Lr(t)&&t.O_.length<10}function Dx(t,e){t.O_.push(e);const n=Zn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function n_(t){return Lr(t)&&!Zn(t).n_()&&t.O_.length>0}function r_(t){Zn(t).start()}async function bx(t){Zn(t).p_()}async function Ox(t){const e=Zn(t);for(const n of t.O_)e.m_(n.mutations)}async function Mx(t,e,n){const r=t.O_.shift(),i=Zh.from(r,e,n);await t_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Il(t)}async function Lx(t,e){e&&Zn(t).V_&&await async function(r,i){if(function(a){return SI(a)&&a!==M.ABORTED}(i.code)){const s=r.O_.shift();Zn(r).s_(),await t_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Il(r)}}(t,e),n_(t)&&r_(t)}async function pm(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Lr(n);n.L_.add(3),await oo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Tl(n)}async function Fx(t,e){const n=X(t);e?(n.L_.delete(2),await Tl(n)):e||(n.L_.add(2),await oo(n),n.q_.set("Unknown"))}function Di(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new Ix(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Cx.bind(null,t),Ro:Rx.bind(null,t),mo:Px.bind(null,t),d_:Nx.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ld(t)?ad(t):t.q_.set("Unknown")):(await t.K_.stop(),e_(t))})),t.K_}function Zn(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new xx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:bx.bind(null,t),mo:Lx.bind(null,t),f_:Ox.bind(null,t),g_:Mx.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Il(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class ud{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new ud(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cd(t,e){if(En("AsyncQueue",`${e}: ${t}`),ro(t))return new q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class di{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=us(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new di(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof di)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new di;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class mm{constructor(){this.W_=new Ie(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Si{constructor(e,n,r,i,s,a,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Si(e,n,di.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class zx{constructor(){this.queries=gm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=gm(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(M.ABORTED,"Firestore shutting down"))}}function gm(){return new Vi(t=>Av(t),gl)}async function Ux(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new jx,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=cd(a,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&hd(n)}async function Bx(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $x(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&hd(n)}function Hx(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function hd(t){t.Y_.forEach(e=>{e.next()})}var Uc,ym;(ym=Uc||(Uc={})).ea="default",ym.Cache="cache";class qx{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Uc.Cache}}/**
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
 */class i_{constructor(e){this.key=e}}class s_{constructor(e){this.key=e}}class Wx{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=kv(e),this.Ra=new di(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new mm,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const y=i.get(f),k=yl(this.query,g)?g:null,P=!!y&&this.mutatedKeys.has(y.key),V=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let b=!1;y&&k?y.data.isEqual(k.data)?P!==V&&(r.track({type:3,doc:k}),b=!0):this.ga(y,k)||(r.track({type:2,doc:k}),b=!0,(u&&this.Aa(k,u)>0||h&&this.Aa(k,h)<0)&&(l=!0)):!y&&k?(r.track({type:0,doc:k}),b=!0):y&&!k&&(r.track({type:1,doc:y}),b=!0,(u||h)&&(l=!0)),b&&(k?(a=a.add(k),s=V?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(k,P){const V=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return V(k)-V(P)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new Si(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new mm,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new s_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new i_(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Si.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Kx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Qx{constructor(e){this.key=e,this.va=!1}}class Gx{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Vi(l=>Av(l),gl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(K.comparator),this.Na=new Map,this.La=new nd,this.Ba={},this.ka=new Map,this.qa=xi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Yx(t,e,n=!0){const r=h_(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await o_(r,e,n,!0),i}async function Xx(t,e){const n=h_(t);await o_(n,e,!0,!1)}async function o_(t,e,n,r){const i=await gx(t.localStore,tn(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Jx(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&Jv(t.remoteStore,i),l}async function Jx(t,e,n,r,i){t.Ka=(g,y,k)=>async function(V,b,x,w){let S=b.view.ma(x);S.ns&&(S=await hm(V.localStore,b.query,!1).then(({documents:_})=>b.view.ma(_,S)));const D=w&&w.targetChanges.get(b.targetId),U=w&&w.targetMismatches.get(b.targetId)!=null,z=b.view.applyChanges(S,V.isPrimaryClient,D,U);return _m(V,b.targetId,z.wa),z.snapshot}(t,g,y,k);const s=await hm(t.localStore,e,!0),a=new Wx(e,s.Ts),l=a.ma(s.documents),u=so.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=a.applyChanges(l,t.isPrimaryClient,u);_m(t,n,h.wa);const f=new Kx(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Zx(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!gl(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sd(r.remoteStore,i.targetId),Bc(r,i.targetId)}).catch(no)):(Bc(r,i.targetId),await zc(r.localStore,i.targetId,!0))}async function eS(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sd(n.remoteStore,r.targetId))}async function tS(t,e,n){const r=lS(t);try{const i=await function(a,l){const u=X(a),h=be.now(),f=l.reduce((k,P)=>k.add(P.key),te());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let P=Tn(),V=te();return u.cs.getEntries(k,f).next(b=>{P=b,P.forEach((x,w)=>{w.isValidDocument()||(V=V.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,P)).next(b=>{g=b;const x=[];for(const w of l){const S=wI(w,g.get(w.key).overlayedDocument);S!=null&&x.push(new ir(w.key,S,_v(S.value.mapValue),Wt.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,x,l)}).next(b=>{y=b;const x=b.applyToLocalDocumentSet(g,V);return u.documentOverlayCache.saveOverlays(k,b.batchId,x)})}).then(()=>({batchId:y.batchId,changes:Rv(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new Ie(ae)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,n),await ao(r,i.changes),await Il(r.remoteStore)}catch(i){const s=cd(i,"Failed to persist write");n.reject(s)}}async function a_(t,e){const n=X(t);try{const r=await fx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Na.get(s);a&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ue(a.va):i.removedDocuments.size>0&&(ue(a.va),a.va=!1))}),await ao(n,r,e)}catch(r){await no(r)}}function vm(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=X(a);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(l)&&(h=!0)}),h&&hd(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nS(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new Ie(K.comparator);a=a.insert(s,tt.newNoDocument(s,Y.min()));const l=te().add(s),u=new wl(Y.min(),new Map,new Ie(ae),a,l);await a_(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),dd(r)}else await zc(r.localStore,e,!1).then(()=>Bc(r,e,n)).catch(no)}async function rS(t,e){const n=X(t),r=e.batch.batchId;try{const i=await dx(n.localStore,e);u_(n,r,null),l_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ao(n,i)}catch(i){await no(i)}}async function iS(t,e,n){const r=X(t);try{const i=await function(a,l){const u=X(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(ue(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);u_(r,e,n),l_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ao(r,i)}catch(i){await no(i)}}function l_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function u_(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Bc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||c_(t,r)})}function c_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),dd(t))}function _m(t,e,n){for(const r of n)r instanceof i_?(t.La.addReference(r.key,e),sS(t,r)):r instanceof s_?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||c_(t,r.key)):G()}function sS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),dd(t))}function dd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new Qx(n)),t.Oa=t.Oa.insert(n,r),Jv(t.remoteStore,new On(tn(Yh(n.path)),r,"TargetPurposeLimboResolution",Hh.oe))}}async function ao(t,e,n){const r=X(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=id.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(h,y=>O.forEach(y.$i,k=>f.persistence.referenceDelegate.addReference(g,y.targetId,k)).next(()=>O.forEach(y.Ui,k=>f.persistence.referenceDelegate.removeReference(g,y.targetId,k)))))}catch(g){if(!ro(g))throw g;H("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const k=f.os.get(y),P=k.snapshotVersion,V=k.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(y,V)}}}(r.localStore,s))}async function oS(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Qv(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(M.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ao(n,r.hs)}}function aS(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const a of s){const l=n.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function h_(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=a_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nS.bind(null,e),e.Ca.d_=$x.bind(null,e.eventManager),e.Ca.$a=Hx.bind(null,e.eventManager),e}function lS(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iS.bind(null,e),e}class Ka{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=El(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return hx(this.persistence,new ux,e.initialUser,this.serializer)}Ga(e){return new ox(rd.Zr,this.serializer)}Wa(e){return new vx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ka.provider={build:()=>new Ka};class $c{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oS.bind(null,this.syncEngine),await Fx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zx}()}createDatastore(e){const n=El(e.databaseInfo.databaseId),r=function(s){return new Tx(s)}(e.databaseInfo);return function(s,a,l,u){return new Sx(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new kx(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>vm(this.syncEngine,n,0),function(){return fm.D()?new fm:new _x}())}createSyncEngine(e,n){return function(i,s,a,l,u,h,f){const g=new Gx(i,s,a,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await oo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$c.provider={build:()=>new $c};/**
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
 */class uS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class cS{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=gv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{H("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ku(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Qv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hS(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>pm(e.remoteStore,i)),t._onlineComponents=e}async function hS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await ku(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;wi("Error using user provided cache. Falling back to memory cache: "+n),await ku(t,new Ka)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await ku(t,new Ka);return t._offlineComponents}async function d_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await wm(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await wm(t,new $c))),t._onlineComponents}function dS(t){return d_(t).then(e=>e.syncEngine)}async function Em(t){const e=await d_(t),n=e.eventManager;return n.onListen=Yx.bind(null,e.syncEngine),n.onUnlisten=Zx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Xx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eS.bind(null,e.syncEngine),n}/**
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
 */function f_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Tm=new Map;/**
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
 */function p_(t,e,n){if(!n)throw new q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fS(t,e,n,r){if(e===!0&&r===!0)throw new q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Im(t){if(!K.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xm(t){if(K.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fd(t);throw new q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Sm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CT;switch(r.type){case"firstParty":return new VT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Tm.get(n);r&&(H("ComponentProvider","Removing Datastore"),Tm.delete(n),r.terminate())}(this),Promise.resolve()}}function pS(t,e,n,r={}){var i;const s=(t=Wn(t,xl))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ze.MOCK_USER;else{l=o1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ze(h)}t._authCredentials=new RT(new mv(l,u))}}/**
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
 */class Sl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sl(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Kn extends Sl{constructor(e,n,r){super(e,n,Yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new K(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function Am(t,e,...n){if(t=Qt(t),p_("collection","path",e),t instanceof xl){const r=_e.fromString(e,...n);return xm(r),new Kn(t,null,r)}{if(!(t instanceof It||t instanceof Kn))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return xm(r),new Kn(t.firestore,null,r)}}function ha(t,e,...n){if(t=Qt(t),arguments.length===1&&(e=gv.newId()),p_("doc","path",e),t instanceof xl){const r=_e.fromString(e,...n);return Im(r),new It(t,null,new K(r))}{if(!(t instanceof It||t instanceof Kn))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Im(r),new It(t.firestore,t instanceof Kn?t.converter:null,new K(r))}}/**
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
 */class km{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Yv(this,"async_queue_retry"),this.Vu=()=>{const r=Au();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Au();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Au();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ir;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ro(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw En("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=ud.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Cm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ai extends xl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new km,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new km(e),this._firestoreClient=void 0,await e}}}function mS(t,e){const n=typeof t=="object"?t:ov(),r=typeof t=="string"?t:"(default)",i=to(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=i1("firestore");s&&pS(i,...s)}return i}function m_(t){if(t._terminated)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gS(t),t._firestoreClient}function gS(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new qT(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new cS(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class ki{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ki(We.fromBase64String(e))}catch(n){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ki(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Al{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class md{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
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
 */const yS=/^__.*__$/;class vS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new io(e,this.data,n,this.fieldTransforms)}}class g_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function y_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class yd{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Qa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(y_(this.Cu)&&yS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class _S{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||El(e)}Qu(e,n,r,i=!1){return new yd({Cu:e,methodName:n,qu:r,path:Be.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function v_(t){const e=t._freezeSettings(),n=El(t._databaseId);return new _S(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wS(t,e,n,r,i,s={}){const a=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);vd("Data must be an object, but it was:",a,r);const l=__(r,a);let u,h;if(s.merge)u=new Et(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=Hc(e,g,n);if(!a.contains(y))throw new q(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);E_(f,y)||f.push(y)}u=new Et(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new vS(new ct(l),u,h)}class kl extends pd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kl}}function ES(t,e,n,r){const i=t.Qu(1,e,n);vd("Data must be an object, but it was:",i,r);const s=[],a=ct.empty();Mr(r,(u,h)=>{const f=_d(e,u,n);h=Qt(h);const g=i.Nu(f);if(h instanceof kl)s.push(f);else{const y=Cl(h,g);y!=null&&(s.push(f),a.set(f,y))}});const l=new Et(s);return new g_(a,l,i.fieldTransforms)}function TS(t,e,n,r,i,s){const a=t.Qu(1,e,n),l=[Hc(e,r,n)],u=[i];if(s.length%2!=0)throw new q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Hc(e,s[y])),u.push(s[y+1]);const h=[],f=ct.empty();for(let y=l.length-1;y>=0;--y)if(!E_(h,l[y])){const k=l[y];let P=u[y];P=Qt(P);const V=a.Nu(k);if(P instanceof kl)h.push(k);else{const b=Cl(P,V);b!=null&&(h.push(k),f.set(k,b))}}const g=new Et(h);return new g_(f,g,a.fieldTransforms)}function Cl(t,e){if(w_(t=Qt(t)))return vd("Unsupported field value:",e,t),__(t,e);if(t instanceof pd)return function(r,i){if(!y_(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Cl(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:qa(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qa(i.serializer,s)}}if(r instanceof md)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ki)return{bytesValue:Uv(i.serializer,r._byteString)};if(r instanceof It){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:td(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gd)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Xh(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${fd(r)}`)}(t,e)}function __(t,e){const n={};return yv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(r,i)=>{const s=Cl(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function w_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof md||t instanceof ki||t instanceof It||t instanceof pd||t instanceof gd)}function vd(t,e,n){if(!w_(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=fd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Hc(t,e,n){if((e=Qt(e))instanceof Al)return e._internalPath;if(typeof e=="string")return _d(t,e);throw Qa("Field path arguments must be of type string or ",t,!1,void 0,n)}const IS=new RegExp("[~\\*/\\[\\]]");function _d(t,e,n){if(e.search(IS)>=0)throw Qa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Al(...e.split("."))._internalPath}catch{throw Qa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qa(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new q(M.INVALID_ARGUMENT,l+t+u)}function E_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class T_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(I_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xS extends T_{data(){return super.data()}}function I_(t,e){return typeof e=="string"?_d(t,e):e instanceof Al?e._internalPath:e._delegate._internalPath}/**
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
 */function SS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class AS{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Ae(a.doubleValue));return new gd(s)}convertGeoPoint(e){return new md(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qs(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);ue(Kv(r));const i=new Ws(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||En(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function kS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class x_ extends T_{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(I_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class da extends x_{data(e={}){return super.data(e)}}class CS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new hs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new da(this._firestore,this._userDataWriter,r.key,r,new hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new da(i._firestore,i._userDataWriter,l.doc.key,l.doc,new hs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new da(i._firestore,i._userDataWriter,l.doc.key,l.doc,new hs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:RS(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class S_ extends AS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ki(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function Rm(t,e,n,...r){t=Wn(t,It);const i=Wn(t.firestore,Ai),s=v_(i);let a;return a=typeof(e=Qt(e))=="string"||e instanceof Al?TS(s,"updateDoc",t._key,e,n,r):ES(s,"updateDoc",t._key,e),wd(i,[a.toMutation(t._key,Wt.exists(!0))])}function PS(t){return wd(Wn(t.firestore,Ai),[new Jh(t._key,Wt.none())])}function NS(t,e){const n=Wn(t.firestore,Ai),r=ha(t),i=kS(t.converter,e);return wd(n,[wS(v_(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function VS(t,...e){var n,r,i;t=Qt(t);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Cm(e[a])||(s=e[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Cm(e[a])){const g=e[a];e[a]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,f;if(t instanceof It)h=Wn(t.firestore,Ai),f=Yh(t._key.path),u={next:g=>{e[a]&&e[a](DS(h,t,g))},error:e[a+1],complete:e[a+2]};else{const g=Wn(t,Sl);h=Wn(g.firestore,Ai),f=g._query;const y=new S_(h);u={next:k=>{e[a]&&e[a](new CS(h,y,g,k))},error:e[a+1],complete:e[a+2]},SS(t._query)}return function(y,k,P,V){const b=new uS(V),x=new qx(k,b,P);return y.asyncQueue.enqueueAndForget(async()=>Ux(await Em(y),x)),()=>{b.Za(),y.asyncQueue.enqueueAndForget(async()=>Bx(await Em(y),x))}}(m_(h),f,l,u)}function wd(t,e){return function(r,i){const s=new Ir;return r.asyncQueue.enqueueAndForget(async()=>tS(await dS(r),i,s)),s.promise}(m_(t),e)}function DS(t,e,n){const r=n.docs.get(e._key),i=new S_(t);return new x_(t,i,e._key,r,new hs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ni=i})(gT),Yn(new _n("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Ai(new PT(r.getProvider("auth-internal")),new bT(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ws(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),en(Hp,"4.7.3",e),en(Hp,"4.7.3","esm2017")})();const A_="@firebase/installations",Ed="0.6.9";/**
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
 */const k_=1e4,C_=`w:${Ed}`,R_="FIS_v2",bS="https://firebaseinstallations.googleapis.com/v1",OS=60*60*1e3,MS="installations",LS="Installations";/**
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
 */const FS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vr=new fl(MS,LS,FS);function P_(t){return t instanceof rr&&t.code.includes("request-failed")}/**
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
 */function N_({projectId:t}){return`${bS}/projects/${t}/installations`}function V_(t){return{token:t.token,requestStatus:2,expiresIn:zS(t.expiresIn),creationTime:Date.now()}}async function D_(t,e){const r=(await e.json()).error;return Vr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function b_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function jS(t,{refreshToken:e}){const n=b_(t);return n.append("Authorization",US(e)),n}async function O_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function zS(t){return Number(t.replace("s","000"))}function US(t){return`${R_} ${t}`}/**
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
 */async function BS({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=N_(t),i=b_(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:R_,appId:t.appId,sdkVersion:C_},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await O_(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:V_(h.authToken)}}else throw await D_("Create Installation",u)}/**
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
 */function M_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function $S(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const HS=/^[cdef][\w-]{21}$/,qc="";function qS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=WS(t);return HS.test(n)?n:qc}catch{return qc}}function WS(t){return $S(t).substr(0,22)}/**
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
 */function Rl(t){return`${t.appName}!${t.appId}`}/**
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
 */const L_=new Map;function F_(t,e){const n=Rl(t);j_(n,e),KS(n,e)}function j_(t,e){const n=L_.get(t);if(n)for(const r of n)r(e)}function KS(t,e){const n=QS();n&&n.postMessage({key:t,fid:e}),GS()}let _r=null;function QS(){return!_r&&"BroadcastChannel"in self&&(_r=new BroadcastChannel("[Firebase] FID Change"),_r.onmessage=t=>{j_(t.data.key,t.data.fid)}),_r}function GS(){L_.size===0&&_r&&(_r.close(),_r=null)}/**
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
 */const YS="firebase-installations-database",XS=1,Dr="firebase-installations-store";let Cu=null;function Td(){return Cu||(Cu=iv(YS,XS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dr)}}})),Cu}async function Ga(t,e){const n=Rl(t),i=(await Td()).transaction(Dr,"readwrite"),s=i.objectStore(Dr),a=await s.get(n);return await s.put(e,n),await i.done,(!a||a.fid!==e.fid)&&F_(t,e.fid),e}async function z_(t){const e=Rl(t),r=(await Td()).transaction(Dr,"readwrite");await r.objectStore(Dr).delete(e),await r.done}async function Pl(t,e){const n=Rl(t),i=(await Td()).transaction(Dr,"readwrite"),s=i.objectStore(Dr),a=await s.get(n),l=e(a);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!a||a.fid!==l.fid)&&F_(t,l.fid),l}/**
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
 */async function Id(t){let e;const n=await Pl(t.appConfig,r=>{const i=JS(r),s=ZS(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===qc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function JS(t){const e=t||{fid:qS(),registrationStatus:0};return U_(e)}function ZS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Vr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=eA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tA(t)}:{installationEntry:e}}async function eA(t,e){try{const n=await BS(t,e);return Ga(t.appConfig,n)}catch(n){throw P_(n)&&n.customData.serverCode===409?await z_(t.appConfig):await Ga(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tA(t){let e=await Pm(t.appConfig);for(;e.registrationStatus===1;)await M_(100),e=await Pm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Id(t);return r||n}return e}function Pm(t){return Pl(t,e=>{if(!e)throw Vr.create("installation-not-found");return U_(e)})}function U_(t){return nA(t)?{fid:t.fid,registrationStatus:0}:t}function nA(t){return t.registrationStatus===1&&t.registrationTime+k_<Date.now()}/**
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
 */async function rA({appConfig:t,heartbeatServiceProvider:e},n){const r=iA(t,n),i=jS(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:C_,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await O_(()=>fetch(r,l));if(u.ok){const h=await u.json();return V_(h)}else throw await D_("Generate Auth Token",u)}function iA(t,{fid:e}){return`${N_(t)}/${e}/authTokens:generate`}/**
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
 */async function xd(t,e=!1){let n;const r=await Pl(t.appConfig,s=>{if(!B_(s))throw Vr.create("not-registered");const a=s.authToken;if(!e&&aA(a))return s;if(a.requestStatus===1)return n=sA(t,e),s;{if(!navigator.onLine)throw Vr.create("app-offline");const l=uA(s);return n=oA(t,l),l}});return n?await n:r.authToken}async function sA(t,e){let n=await Nm(t.appConfig);for(;n.authToken.requestStatus===1;)await M_(100),n=await Nm(t.appConfig);const r=n.authToken;return r.requestStatus===0?xd(t,e):r}function Nm(t){return Pl(t,e=>{if(!B_(e))throw Vr.create("not-registered");const n=e.authToken;return cA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function oA(t,e){try{const n=await rA(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ga(t.appConfig,r),n}catch(n){if(P_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await z_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ga(t.appConfig,r)}throw n}}function B_(t){return t!==void 0&&t.registrationStatus===2}function aA(t){return t.requestStatus===2&&!lA(t)}function lA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+OS}function uA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function cA(t){return t.requestStatus===1&&t.requestTime+k_<Date.now()}/**
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
 */async function hA(t){const e=t,{installationEntry:n,registrationPromise:r}=await Id(e);return r?r.catch(console.error):xd(e).catch(console.error),n.fid}/**
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
 */async function dA(t,e=!1){const n=t;return await fA(n),(await xd(n,e)).token}async function fA(t){const{registrationPromise:e}=await Id(t);e&&await e}/**
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
 */function pA(t){if(!t||!t.options)throw Ru("App Configuration");if(!t.name)throw Ru("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ru(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ru(t){return Vr.create("missing-app-config-values",{valueName:t})}/**
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
 */const $_="installations",mA="installations-internal",gA=t=>{const e=t.getProvider("app").getImmediate(),n=pA(e),r=to(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yA=t=>{const e=t.getProvider("app").getImmediate(),n=to(e,$_).getImmediate();return{getId:()=>hA(n),getToken:i=>dA(n,i)}};function vA(){Yn(new _n($_,gA,"PUBLIC")),Yn(new _n(mA,yA,"PRIVATE"))}vA();en(A_,Ed);en(A_,Ed,"esm2017");/**
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
 */const Ya="analytics",_A="firebase_id",wA="origin",EA=60*1e3,TA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sd="https://www.googletagmanager.com/gtag/js";/**
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
 */const mt=new Uh("@firebase/analytics");/**
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
 */const IA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xt=new fl("analytics","Analytics",IA);/**
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
 */function xA(t){if(!t.startsWith(Sd)){const e=xt.create("invalid-gtag-resource",{gtagURL:t});return mt.warn(e.message),""}return t}function H_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function SA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function AA(t,e){const n=SA("firebase-js-sdk-policy",{createScriptURL:xA}),r=document.createElement("script"),i=`${Sd}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function kA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function CA(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const u=(await H_(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(l){mt.error(l)}t("config",i,s)}async function RA(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await H_(n);for(const u of a){const h=l.find(g=>g.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){mt.error(s)}}function PA(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[l,u]=a;await RA(t,e,n,l,u)}else if(s==="config"){const[l,u]=a;await CA(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=a;t("consent",l,u)}else if(s==="get"){const[l,u,h]=a;t("get",l,u,h)}else if(s==="set"){const[l]=a;t("set",l)}else t(s,...a)}catch(l){mt.error(l)}}return i}function NA(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=PA(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function VA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Sd)&&n.src.includes(t))return n;return null}/**
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
 */const DA=30,bA=1e3;class OA{constructor(e={},n=bA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const q_=new OA;function MA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function LA(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:MA(r)},s=TA.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw xt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function FA(t,e=q_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw xt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw xt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new UA;return setTimeout(async()=>{l.abort()},EA),W_({appId:r,apiKey:i,measurementId:s},a,l,e)}async function W_(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=q_){var s;const{appId:a,measurementId:l}=t;try{await jA(r,e)}catch(u){if(l)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await LA(t);return i.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!zA(h)){if(i.deleteThrottleMetadata(a),l)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const f=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?bp(n,i.intervalMillis,DA):bp(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(a,g),mt.debug(`Calling attemptFetch again in ${f} millis`),W_(t,g,r,i)}}function jA(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zA(t){if(!(t instanceof rr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class UA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function BA(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});t("event",n,a)}}/**
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
 */async function $A(){if(ev())try{await tv()}catch(t){return mt.warn(xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return mt.warn(xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function HA(t,e,n,r,i,s,a){var l;const u=FA(t);u.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>mt.error(k)),e.push(u);const h=$A().then(k=>{if(k)return r.getId()}),[f,g]=await Promise.all([u,h]);VA(s)||AA(s,f.measurementId),i("js",new Date);const y=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return y[wA]="firebase",y.update=!0,g!=null&&(y[_A]=g),i("config",f.measurementId,y),f.measurementId}/**
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
 */class qA{constructor(e){this.app=e}_delete(){return delete Ss[this.app.options.appId],Promise.resolve()}}let Ss={},Vm=[];const Dm={};let Pu="dataLayer",WA="gtag",bm,K_,Om=!1;function KA(){const t=[];if(u1()&&t.push("This is a browser extension environment."),h1()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xt.create("invalid-analytics-context",{errorInfo:e});mt.warn(n.message)}}function QA(t,e,n){KA();const r=t.options.appId;if(!r)throw xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xt.create("no-api-key");if(Ss[r]!=null)throw xt.create("already-exists",{id:r});if(!Om){kA(Pu);const{wrappedGtag:s,gtagCore:a}=NA(Ss,Vm,Dm,Pu,WA);K_=s,bm=a,Om=!0}return Ss[r]=HA(t,Vm,Dm,e,bm,Pu,n),new qA(t)}function GA(t=ov()){t=Qt(t);const e=to(t,Ya);return e.isInitialized()?e.getImmediate():YA(t)}function YA(t,e={}){const n=to(t,Ya);if(n.isInitialized()){const i=n.getImmediate();if(Fa(e,n.getOptions()))return i;throw xt.create("already-initialized")}return n.initialize({options:e})}function XA(t,e,n,r){t=Qt(t),BA(K_,Ss[t.app.options.appId],e,n,r).catch(i=>mt.error(i))}const Mm="@firebase/analytics",Lm="0.10.8";function JA(){Yn(new _n(Ya,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return QA(r,i,n)},"PUBLIC")),Yn(new _n("analytics-internal",t,"PRIVATE")),en(Mm,Lm),en(Mm,Lm,"esm2017");function t(e){try{const n=e.getProvider(Ya).getImmediate();return{logEvent:(r,i,s)=>XA(n,r,i,s)}}catch(n){throw xt.create("interop-component-reg-failed",{reason:n})}}}JA();const Fm="/vibe-store/assets/hero-bg-CtGpMX4r.jpg",ZA={apiKey:"AIzaSyCbqI-fh2K0RMMA_SyXMHT2r4j5YXulUQM",authDomain:"vibe-store-project.firebaseapp.com",projectId:"vibe-store-project",storageBucket:"vibe-store-project.firebasestorage.app",messagingSenderId:"364551371666",appId:"1:364551371666:web:bf1aabc1d59c1caf009f4b",measurementId:"G-R3OHE4XVSG"},Q_=sv(ZA);GA(Q_);const rs=mS(Q_),e2=[{id:1,name:"Товар 1",price:"3 200",desc:"Преміальний комфорт та футуристичний силует.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кросівки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:2,name:"Товар 2",price:"5 700",desc:"Масивний дизайн у стилі нульових.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кеді",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:3,name:"Товар 3",price:"5 000",desc:"Спортивна естетика в деконструйованому стилі.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кросівки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:4,name:"Товар 4",price:"1 800",desc:"Джинси кльош з ідеальною посадкою.",sizes:["S","M","L","XL"],category:"Штани та джинси",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:5,name:"Товар 5",price:"2 600",desc:"Класичний світшот з м'якої бавовни.",sizes:["S","M","L","XL"],category:"Худі та світшоти",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:6,name:"Товар 6",price:"4 200",desc:"Легендарний силует для повсякденного стилю.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кросівки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:7,name:"Товар 7",price:"900",desc:"Базова біла футболка оверсайз.",sizes:["S","M","L","XL"],category:"Футболки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:8,name:"Товар 8",price:"900",desc:"Футболка з яскравим принтом.",sizes:["S","M","L","XL"],category:"Футболки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:9,name:"Товар 9",price:"2 100",desc:"Зручне зіп-худі на кожен день.",sizes:["S","M","L","XL"],category:"Худі та світшоти",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:10,name:"Товар 10",price:"1 950",desc:"Широкі джинси з щільного деніму.",sizes:["S","M","L","XL"],category:"Штани та джинси",images:["https://via.placeholder.com/150"],currentImageIndex:0}],Nu=({onClick:t})=>I.jsx("div",{onClick:t,className:"close-icon-wrapper",children:I.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})});function t2(){var lo;const[t,e]=ye.useState(!1),[n,r]=ye.useState(0),[i,s]=ye.useState(null),[a,l]=ye.useState(null),[u,h]=ye.useState(!1),[f,g]=ye.useState(!1),[y,k]=ye.useState(!1),[P,V]=ye.useState(!1),[b,x]=ye.useState("Всі"),[w,S]=ye.useState(!1),[D,U]=ye.useState(!1),[z,_]=ye.useState([]),[m,v]=ye.useState(()=>JSON.parse(localStorage.getItem("vibestore_cart")||"[]")),[T,A]=ye.useState(()=>!localStorage.getItem("vibe_consent_accepted")),C=ye.useRef(),E=ye.useRef(),Fe=ye.useRef();ye.useEffect(()=>{localStorage.setItem("vibestore_cart",JSON.stringify(m))},[m]),ye.useEffect(()=>{const F=Am(rs,"products");return VS(F,Z=>{const Ce=Z.docs.map(yt=>({id:yt.id,...yt.data()}));_(Ce),localStorage.setItem("vibestore_products",JSON.stringify(Ce))},()=>{const Z=localStorage.getItem("vibestore_products");_(Z?JSON.parse(Z):e2)})},[]),ye.useEffect(()=>{var F;if((F=window.Telegram)!=null&&F.WebApp){const W=window.Telegram.WebApp;W.ready(),W.expand(),W.setHeaderColor("#0a0f1a")}},[]),ye.useEffect(()=>{const F=new IntersectionObserver(W=>{W.forEach(Z=>{Z.isIntersecting&&Z.target.classList.add("is-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return setTimeout(()=>{document.querySelectorAll(".animated-title").forEach(W=>F.observe(W)),C.current&&F.observe(C.current),Fe.current&&F.observe(Fe.current)},100),()=>F.disconnect()},[b]);const on=()=>{localStorage.setItem("vibe_consent_accepted","true"),A(!1)},sr=()=>{if(window.innerWidth<1024){alert("Адмін-панель доступна тільки на ПК (ширина екрана ≥ 1024px)"),r(0);return}const F=n+1;r(F),F===5&&(prompt("Введіть адмін-пароль:")==="8934"&&(e(!0),alert("Режим адміна увімкнено!")),r(0)),setTimeout(()=>r(0),2e3)},bt=async()=>{var uo,co,bi,jr;const F=(uo=document.getElementById("p-name"))==null?void 0:uo.value.trim(),W=(co=document.getElementById("p-price"))==null?void 0:co.value.trim(),Z=(bi=document.getElementById("p-category"))==null?void 0:bi.value,Ce=(jr=document.getElementById("p-desc"))==null?void 0:jr.value.trim(),yt=document.getElementById("p-file"),xn=yt!=null&&yt.files?Array.from(yt.files):[];if(!F||!W||!Z)return alert("Заповніть назву, ціну та категорію!");U(!0);const Fr=async an=>{try{await NS(Am(rs,"products"),{name:F,price:W,category:Z,description:Ce||"",images:an.length?an:["https://via.placeholder.com/150"],currentImageIndex:0,sizes:Z==="Кросівки"||Z==="Кеді"?["37","38","39","40","41","42","43","44","45"]:["S","M","L","XL"],createdAt:Date.now()}),alert("✅ Товар успішно доданий!"),["p-name","p-price","p-desc"].forEach(ar=>{const Ft=document.getElementById(ar);Ft&&(Ft.value="")}),yt&&(yt.value="");const or=document.getElementById("p-category");or&&(or.value="")}catch{alert("Не вдалося додати товар.")}finally{U(!1)}};if(xn.length){const an=[];let or=0;xn.forEach(ar=>{const Ft=new FileReader;Ft.onloadend=()=>{an.push(Ft.result),++or===xn.length&&Fr(an)},Ft.onerror=()=>{++or===xn.length&&!an.length&&Fr([])},Ft.readAsDataURL(ar)})}else Fr([])},B=async(F,W)=>{W.stopPropagation(),confirm("Видалити цей товар?")&&await PS(ha(rs,"products",F))},Q=async F=>{if(F.stopPropagation(),!i)return;const W=z.find(Ce=>Ce.id===i.id);if(!W||W.images.length<=1)return;const Z=(W.currentImageIndex+1)%W.images.length;await Rm(ha(rs,"products",i.id),{currentImageIndex:Z}),s(Ce=>({...Ce,currentImageIndex:Z}))},J=async F=>{if(F.stopPropagation(),!i)return;const W=z.find(Ce=>Ce.id===i.id);if(!W||W.images.length<=1)return;const Z=W.currentImageIndex===0?W.images.length-1:W.currentImageIndex-1;await Rm(ha(rs,"products",i.id),{currentImageIndex:Z}),s(Ce=>({...Ce,currentImageIndex:Z}))},he=z.filter(F=>b==="Всі"||F.category===b),se=F=>{x(F),g(!1),setTimeout(()=>{var W;return(W=Fe.current)==null?void 0:W.scrollIntoView({behavior:"smooth",block:"start"})},300)},ge=F=>{if(E.current){const W=E.current.querySelector(".product-scroll-anim"),Z=W?W.offsetWidth+20:E.current.offsetWidth;E.current.scrollBy({left:F==="left"?-Z:Z,behavior:"smooth"})}},gt=()=>{V(!0),setTimeout(()=>{s(null),l(null),k(!1),V(!1)},300)},Ot=F=>{if(!a)return alert("Спершу обери розмір!");v(W=>[...W,{...F,chosenSize:a,cartId:Date.now()}]),k(!0),setTimeout(()=>{gt(),setTimeout(()=>h(!0),350)},1e3)},Mt=()=>{if(!m.length)return;const F=m.map(Z=>`- ${Z.name} (${Z.chosenSize}): ${Z.price} UAH`).join(`
`),W=m.reduce((Z,Ce)=>Z+parseInt(Ce.price.replace(/\s/g,"")),0);window.open(`https://t.me/vibestore_manager?text=${encodeURIComponent(`Вітаю! Хочу зробити замовлення:

${F}

Разом: ${W} UAH`)}`,"_blank"),v([]),h(!1)},Lt=()=>{if(!m.length)return;const F=m.map(Z=>`- ${Z.name} (${Z.chosenSize}): ${Z.price} UAH`).join(`
`),W=m.reduce((Z,Ce)=>Z+parseInt(Ce.price.replace(/\s/g,"")),0);window.open(`https://viber.click/380936739172?text=${encodeURIComponent(`Вітаю! Хочу зробити замовлення:

${F}

Разом: ${W} UAH`)}`,"_blank"),v([]),h(!1)},Nl=[{name:"Діма",text:"Якість просто пушка! Рекомендую однозначно."},{name:"Оля",text:"Оригінал 100%, розмір підійшов ідеально, дякую!"},{name:"Макс",text:"Доставка швидка, менеджери топ. Буду брати ще."},{name:"Катя",text:"Дуже зручні, виглядають вживу ще краще, ніж на фото."},{name:"Влад",text:"Легіт чек пройшли, все чітко. Респект магазину."}];return I.jsxs("div",{className:"app-container",children:[T&&I.jsxs("div",{className:"consent-banner",children:[I.jsx("span",{className:"consent-text",children:"Заходячи на сайт, ви погоджуєтеся з Умовами використання та Політикою конфіденційності VIBE STORE."}),I.jsx("button",{className:"consent-btn",onClick:on,children:"ПРИЙМАЮ"})]}),I.jsxs("header",{className:"main-header",children:[I.jsxs("div",{className:"nav-buttons",children:[I.jsx("button",{onClick:()=>g(!0),className:"nav-pill-btn",children:"КАТАЛОГ"}),I.jsxs("button",{onClick:()=>h(!0),className:"nav-pill-btn",children:["КОШИК [",m.length,"]"]})]}),I.jsx("div",{className:"logo-wrap",children:I.jsx("h1",{className:"main-logo",onClick:sr,children:"VIBE STORE"})})]}),t&&window.innerWidth>=1024&&I.jsxs("div",{className:"admin-panel",children:[I.jsxs("div",{className:"admin-panel-header",children:[I.jsx("h2",{children:"⚡ Панель керування"}),I.jsx("button",{className:"admin-close-btn",onClick:()=>e(!1),children:"✕"})]}),I.jsxs("div",{className:"admin-form",children:[I.jsx("input",{id:"p-name",type:"text",placeholder:"Назва товару",className:"admin-input"}),I.jsxs("div",{className:"admin-row",children:[I.jsx("input",{id:"p-price",type:"number",placeholder:"Ціна (UAH)",className:"admin-input"}),I.jsxs("select",{id:"p-category",className:"admin-input",children:[I.jsx("option",{value:"",children:"Категорія"}),I.jsx("option",{value:"Футболки",children:"Футболки"}),I.jsx("option",{value:"Худі та світшоти",children:"Худі та світшоти"}),I.jsx("option",{value:"Штани та джинси",children:"Штани та джинси"}),I.jsx("option",{value:"Шорти",children:"Шорти"}),I.jsx("option",{value:"Кросівки",children:"Кросівки"}),I.jsx("option",{value:"Аксесуари",children:"Аксесуари"})]})]}),I.jsx("textarea",{id:"p-desc",placeholder:"Опис (розміри, матеріал...)",rows:"3",className:"admin-input"}),I.jsxs("div",{className:"file-zone",children:[I.jsx("label",{className:"file-label",children:"📸 Фото товару (можна декілька)"}),I.jsx("input",{type:"file",id:"p-file",accept:"image/*",multiple:!0,style:{display:"none"}}),I.jsx("button",{className:"file-trigger",onClick:()=>document.getElementById("p-file").click(),children:"Вибрати файли"})]}),I.jsx("button",{onClick:bt,className:"admin-submit",disabled:D,style:{opacity:D?.6:1},children:D?"Публікація...":"➕ Опублікувати товар"})]})]}),I.jsx("div",{className:`drawer-overlay ${f||u?"visible":""}`,onClick:()=>{g(!1),h(!1)}}),I.jsxs("div",{className:`side-drawer left-drawer ${f?"open":""}`,children:[I.jsx(Nu,{onClick:()=>g(!1)}),I.jsx("h2",{className:"drawer-title",children:"КАТАЛОГ"}),I.jsxs("div",{className:"catalog-content",children:[I.jsx("div",{className:"catalog-section",children:I.jsx("ul",{className:"catalog-list",children:I.jsx("li",{onClick:()=>se("Всі"),className:b==="Всі"?"active-category":"",children:"ВСІ ТОВАРИ"})})}),I.jsxs("div",{className:"catalog-section",children:[I.jsx("h3",{className:"catalog-subtitle",children:"ОДЯГ"}),I.jsx("ul",{className:"catalog-list",children:["Футболки","Худі та світшоти","Штани та джинси","Шорти"].map(F=>I.jsx("li",{onClick:()=>se(F),className:b===F?"active-category":"",children:F},F))})]}),I.jsxs("div",{className:"catalog-section",children:[I.jsx("h3",{className:"catalog-subtitle",children:"ВЗУТТЯ"}),I.jsx("ul",{className:"catalog-list",children:I.jsx("li",{onClick:()=>se("Кросівки"),className:b==="Кросівки"?"active-category":"",children:"Кросівки"})})]}),I.jsxs("div",{className:"catalog-section",children:[I.jsx("h3",{className:"catalog-subtitle",children:"АКСЕСУАРИ"}),I.jsx("ul",{className:"catalog-list",children:I.jsx("li",{onClick:()=>se("Аксесуари"),className:b==="Аксесуари"?"active-category":"",children:"Аксесуари"})})]})]})]}),I.jsxs("div",{className:`side-drawer right-drawer ${u?"open":""}`,children:[I.jsx(Nu,{onClick:()=>h(!1)}),I.jsx("h2",{className:"drawer-title",children:"КОШИК"}),I.jsx("div",{className:"cart-items-container",children:m.length===0?I.jsxs("div",{className:"empty-cart-message",children:[I.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#aaa",strokeWidth:"1.5",children:[I.jsx("circle",{cx:"9",cy:"21",r:"1"}),I.jsx("circle",{cx:"20",cy:"21",r:"1"}),I.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),I.jsx("p",{children:"Ваш кошик порожній"})]}):m.map(F=>{var W;return I.jsx("div",{className:"cart-item",children:I.jsxs("div",{className:"cart-item-row",children:[I.jsx("img",{src:((W=F.images)==null?void 0:W[0])||"https://via.placeholder.com/50",alt:F.name,className:"cart-item-img"}),I.jsxs("div",{className:"cart-item-info",children:[I.jsx("p",{className:"cart-item-name",children:F.name}),I.jsxs("p",{className:"cart-item-size",children:["РОЗМІР: ",F.chosenSize]})]}),I.jsxs("div",{className:"cart-item-price-block",children:[I.jsxs("p",{className:"cart-item-price",children:[F.price," UAH"]}),I.jsx("div",{className:"cart-item-delete",onClick:()=>v(m.filter(Z=>Z.cartId!==F.cartId)),children:I.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[I.jsx("polyline",{points:"3 6 5 6 21 6"}),I.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})]})]})},F.cartId)})}),m.length>0&&I.jsxs("div",{className:"cart-footer",children:[I.jsxs("div",{className:"cart-total",children:[I.jsx("span",{children:"РАЗОМ:"}),I.jsxs("span",{className:"cart-total-price",children:[m.reduce((F,W)=>F+parseInt(W.price.replace(/\s/g,"")),0).toLocaleString()," UAH"]})]}),I.jsxs("div",{className:"cart-order-buttons",children:[I.jsx("button",{onClick:Mt,className:"order-btn telegram-btn",children:"📱 Замовити через Telegram"}),I.jsx("button",{onClick:Lt,className:"order-btn viber-btn",children:"📞 Замовити через Viber"})]})]})]}),I.jsxs("main",{className:"main-content",children:[I.jsxs("section",{className:"hero-section",children:[I.jsxs("div",{className:"hero-mobile",children:[I.jsx("img",{src:Fm,alt:"VIBE STORE",className:"hero-mobile-img"}),I.jsx("button",{onClick:()=>{var F;return(F=C.current)==null?void 0:F.scrollIntoView({behavior:"smooth"})},className:"cta-button cta-mobile",children:"ПРИДБАТИ ОДЯГ"}),I.jsx("div",{className:"hero-description-box",children:I.jsxs("div",{className:"animated-gradient-box",children:["VIBE STORE — це онлайн магазин люксових речей під замовлення з Китаю 🇨🇳",I.jsx("br",{}),I.jsx("br",{}),"Ми підбираємо одяг, взуття та аксесуари під клієнта з увагою до деталей: розмір, колір і якість.",I.jsx("br",{}),I.jsx("br",{}),"Працюємо чесно і прозоро, супроводжуємо замовлення від покупки до отримання.",I.jsx("br",{}),I.jsx("br",{}),"⭐️ 500+ позитивних відгуків",I.jsx("br",{}),I.jsx("br",{}),"VIBE STORE — коли хочеш виглядати стильно без переплат 💙"]})})]}),I.jsxs("div",{className:"hero-desktop",children:[I.jsx("img",{src:Fm,alt:"VIBE STORE",className:"hero-desktop-img"}),I.jsx("button",{onClick:()=>{var F;return(F=C.current)==null?void 0:F.scrollIntoView({behavior:"smooth"})},className:"cta-button",children:"ПРИДБАТИ ОДЯГ"}),I.jsx("div",{className:"hero-description-box",children:I.jsxs("div",{className:"animated-gradient-box",children:["VIBE STORE — це онлайн магазин люксових речей під замовлення з Китаю 🇨🇳",I.jsx("br",{}),I.jsx("br",{}),"Ми підбираємо одяг, взуття та аксесуари під клієнта з увагою до деталей: розмір, колір і якість.",I.jsx("br",{}),I.jsx("br",{}),"Працюємо чесно і прозоро, супроводжуємо замовлення від покупки до отримання.",I.jsx("br",{}),I.jsx("br",{}),"⭐️ 500+ позитивних відгуків",I.jsx("br",{}),I.jsx("br",{}),"VIBE STORE — коли хочеш виглядати стильно без переплат 💙"]})})]})]}),I.jsxs("section",{ref:C,className:"shop-section",children:[I.jsx("h2",{className:"animated-title",children:"NEW DROPS"}),I.jsxs("div",{className:"slider-container",children:[I.jsx("button",{className:"slider-nav-btn prev",onClick:()=>ge("left"),children:I.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:I.jsx("polyline",{points:"15 18 9 12 15 6"})})}),I.jsx("div",{className:"products-scroll-container",ref:E,children:z.map(F=>I.jsx("div",{onClick:()=>s(F),className:"product-scroll-anim",children:I.jsxs("div",{className:"product-card",children:[t&&I.jsx("div",{className:"delete-icon",onClick:W=>B(F.id,W),children:"🗑️"}),I.jsx("div",{className:"product-image-wrapper",children:I.jsx("img",{src:F.images[0],alt:F.name,className:"product-image"})}),I.jsx("h3",{className:"product-title",children:F.name}),I.jsxs("p",{className:"product-price",children:[F.price," UAH"]})]})},F.id))}),I.jsx("button",{className:"slider-nav-btn next",onClick:()=>ge("right"),children:I.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:I.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]}),I.jsxs("section",{ref:Fe,className:"shop-section all-products-section",children:[I.jsx("h2",{className:"animated-title",children:b==="Всі"?"ВСІ ТОВАРИ":b.toUpperCase()}),he.length===0?I.jsxs("div",{className:"no-products",children:[I.jsx("p",{children:"Нічого не знайдено :("}),I.jsx("button",{onClick:()=>x("Всі"),className:"reset-filter",children:"Скинути фільтри"})]}):I.jsx("div",{className:"all-products-grid",children:he.map(F=>I.jsx("div",{onClick:()=>s(F),className:"product-scroll-anim",children:I.jsxs("div",{className:"product-card",children:[t&&I.jsx("div",{className:"delete-icon",onClick:W=>B(F.id,W),children:"🗑️"}),I.jsx("div",{className:"product-image-wrapper",children:I.jsx("img",{src:F.images[0],alt:F.name,className:"product-image"})}),I.jsx("h3",{className:"product-title",children:F.name}),I.jsxs("p",{className:"product-price",children:[F.price," UAH"]})]})},F.id))})]})]}),I.jsxs("footer",{className:"main-footer",children:[I.jsxs("div",{className:"footer-content",children:[I.jsxs("div",{className:"footer-logo-section",children:[I.jsx("h2",{className:"footer-logo",children:"VIBE STORE"}),I.jsx("p",{children:"Твій стиль. Твій вибір."})]}),I.jsxs("div",{className:"footer-links",children:[I.jsxs("div",{className:"footer-column",children:[I.jsx("h4",{children:"Клієнтам"}),I.jsx("span",{onClick:()=>S(!0),className:"footer-link",children:"Доставка та оплата"})]}),I.jsxs("div",{className:"footer-column",children:[I.jsx("h4",{children:"Соцмережі"}),I.jsx("span",{onClick:()=>window.open("https://www.instagram.com/vibestoree.ua?igsh=MTZhcHVxOXpqMzZxbA%3D%3D&utm_source=qr","_blank"),className:"footer-link",children:"Instagram"}),I.jsx("span",{onClick:()=>window.open("https://t.me/vibestore_manager","_blank"),className:"footer-link",children:"Telegram"}),I.jsx("span",{onClick:()=>window.open("https://viber.click/380936739172","_blank"),className:"footer-link",children:"Viber"}),I.jsx("span",{onClick:()=>window.open("https://www.tiktok.com/@vibestore.ua?_r=1&_t=ZS-95VPaeqVzoz","_blank"),className:"footer-link",children:"TikTok"})]})]})]}),I.jsx("div",{className:"footer-bottom",children:I.jsx("p",{children:"© 2026 VIBE STORE. Всі права захищені."})})]}),i&&I.jsx("div",{className:`modal-overlay ${P?"closing":""}`,onClick:gt,children:I.jsxs("div",{className:`compact-modal ${P?"closing":""}`,onClick:F=>F.stopPropagation(),children:[I.jsx("div",{className:"modal-close-pos",children:I.jsx(Nu,{onClick:gt})}),I.jsx("div",{className:"modal-drag-indicator"}),I.jsxs("div",{className:"slider-modal-container",children:[I.jsx("div",{className:"slider-image-wrapper",children:I.jsx("img",{src:i.images[i.currentImageIndex],alt:i.name,className:"slider-image"},i.currentImageIndex)}),i.images.length>1&&I.jsxs(I.Fragment,{children:[I.jsx("button",{className:"slider-arrow slider-arrow-left",onClick:J,children:I.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:I.jsx("polyline",{points:"15 18 9 12 15 6"})})}),I.jsx("button",{className:"slider-arrow slider-arrow-right",onClick:Q,children:I.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:I.jsx("polyline",{points:"9 18 15 12 9 6"})})}),I.jsxs("div",{className:"slider-counter",children:[i.currentImageIndex+1," / ",i.images.length]})]})]}),I.jsx("h2",{className:"modal-product-title",children:i.name}),I.jsx("p",{className:"modal-product-desc",children:i.desc||i.description}),I.jsx("p",{className:"modal-size-label",children:"ОБЕРІТЬ РОЗМІР"}),I.jsx("div",{className:"modal-sizes",children:(lo=i.sizes)==null?void 0:lo.map(F=>I.jsx("div",{onClick:()=>l(F),className:`size-btn ${a===F?"selected":""}`,children:F},F))}),I.jsx("button",{onClick:()=>Ot(i),className:`main-action-btn ${y?"success":""}`,children:y?"ГАРНИЙ ВИБІР ✓":`ДОДАТИ — ${i.price} UAH`}),I.jsxs("div",{className:"reviews-section",children:[I.jsx("h3",{children:"ВІДГУКИ КЛІЄНТІВ"}),Nl.slice(0,3).map((F,W)=>I.jsxs("div",{className:"review-card",children:[I.jsxs("div",{className:"review-header",children:[I.jsx("span",{className:"review-name",children:F.name}),I.jsx("span",{className:"review-stars",children:"★★★★★"})]}),I.jsx("p",{className:"review-text",children:F.text})]},W))]})]})}),w&&I.jsx("div",{className:"rules-overlay",onClick:()=>S(!1),children:I.jsxs("div",{className:"rules-modal",onClick:F=>F.stopPropagation(),children:[I.jsx("button",{className:"rules-close",onClick:()=>S(!1),children:"✕"}),I.jsx("h2",{className:"rules-title",children:"📜 ПРАВИЛА ТА УМОВИ"}),I.jsxs("div",{className:"rules-content",children:[I.jsx("h3",{children:"1. Загальні положення"}),I.jsx("p",{children:"Інтернет-магазин VIBE STORE здійснює продаж товарів під замовлення. Оформлюючи замовлення, ви погоджуєтесь з умовами, викладеними нижче."}),I.jsx("h3",{children:"2. Оплата"}),I.jsx("p",{children:"Оплата здійснюється на карту ПриватБанку або MonoBank після підтвердження замовлення менеджером. Повна передоплата 100%."}),I.jsx("h3",{children:"3. Доставка"}),I.jsx("p",{children:"Доставка по Україні Новою Поштою або Укрпоштою протягом 7-21 днів з моменту замовлення. Вартість доставки сплачує покупець."}),I.jsx("h3",{children:"4. Повернення та обмін"}),I.jsx("p",{children:"Товари належної якості поверненню не підлягають, оскільки замовляються індивідуально. У разі виявлення браку проводиться обмін."}),I.jsx("h3",{children:"5. Конфіденційність"}),I.jsx("p",{children:"Ваші персональні дані використовуються виключно для обробки замовлення і не передаються третім особам."}),I.jsx("p",{children:"Дякуємо, що обираєте VIBE STORE!"})]})]})}),I.jsx("style",{children:`
        /* ── Reset ── */
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        *::-webkit-scrollbar { display: none; }

        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
          outline: 0 !important;
          width: 100%;
          overflow-x: hidden;
          background: #0a0f1a;   /* тёмный фон, чтобы blur был заметен */
        }

        body {
          font-family: 'Inter', sans-serif;
          color: #000;
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-x: hidden;
          background: transparent;
          margin: 0;
          padding: 0;
        }

        /* ── Consent Banner ── */
        .consent-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #ffffff;
          color: #1a1a2e;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          z-index: 8500;
          box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08);
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 24px 24px 0 0;
          animation: slideUpBanner 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .consent-text {
          font-size: 13px;
          font-weight: 500;
          line-height: 1.5;
          flex: 1;
          color: #444;
        }
        .consent-btn {
          background: #1a73e8;
          border: none;
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          padding: 10px 22px;
          border-radius: 50px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
          white-space: nowrap;
          letter-spacing: 0.6px;
          flex-shrink: 0;
        }
        .consent-btn:hover { background: #0a2a5e; transform: scale(1.03); }
        @keyframes slideUpBanner {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        /* ── Header (Glassmorphism + Gradient) ── */
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
          background: linear-gradient(
            to bottom,
            rgba(0, 80, 255, 0.7) 0%,
            rgba(0, 80, 255, 0.3) 100%
          );
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin: 0;
        }
        .nav-buttons { display: flex; gap: 8px; }
        .nav-pill-btn {
          background: #fff;
          border: none;
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 900;
          color: #1a73e8;
          cursor: pointer;
          transition: transform 0.2s ease;
          letter-spacing: 0.3px;
        }
        .nav-pill-btn:hover { transform: scale(1.05); }
        .logo-wrap { text-align: center; }
        .main-logo {
          font-size: 26px;
          font-weight: 900;
          color: #fff;
          text-shadow: 2px 2px 0 #0a2a5e;
          margin: 0;
          letter-spacing: 2px;
          cursor: pointer;
          user-select: none;
          transition: text-shadow 0.3s ease;
        }
        .main-logo:hover { text-shadow: 0 0 14px #00ccff, 2px 2px 0 #0a2a5e; }

        /* ── Admin Panel ── */
        .admin-panel {
          position: fixed;
          top: 80px;
          right: 20px;
          width: 400px;
          background: #fff;
          border-radius: 24px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
          z-index: 2000;
          padding: 24px;
          border: 1px solid #e8e8e8;
        }
        .admin-panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .admin-panel-header h2 { font-size: 18px; font-weight: 800; }
        .admin-close-btn { background: none; border: none; font-size: 20px; cursor: pointer; color: #888; transition: color 0.2s; }
        .admin-close-btn:hover { color: #1a73e8; }
        .admin-form { display: flex; flex-direction: column; gap: 0; }
        .admin-input {
          width: 100%;
          padding: 11px 14px;
          margin-bottom: 12px;
          border: 1px solid #e0e0e0;
          border-radius: 14px;
          font-size: 14px;
          background: #f9f9f9;
          transition: border-color 0.2s;
          font-family: inherit;
        }
        .admin-input:focus { border-color: #1a73e8; outline: none; background: #fff; }
        .admin-row { display: flex; gap: 10px; }
        .file-zone { margin-bottom: 12px; }
        .file-label { font-size: 13px; font-weight: 600; margin-bottom: 8px; display: block; color: #555; }
        .file-trigger {
          background: #f4f4f4;
          border: 1.5px dashed #ccc;
          padding: 11px;
          border-radius: 14px;
          width: 100%;
          cursor: pointer;
          font-weight: 500;
          font-size: 13px;
          transition: border-color 0.2s, background 0.2s;
        }
        .file-trigger:hover { background: #eaeaea; border-color: #1a73e8; }
        .admin-submit {
          width: 100%;
          padding: 13px;
          background: #1a73e8;
          color: #fff;
          border: none;
          border-radius: 30px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
        }
        .admin-submit:hover { background: #0a2a5e; transform: scale(1.02); }

        /* ── Drawer Overlay ── */
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.25);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1500;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          pointer-events: none;
        }
        .drawer-overlay.visible {
          opacity: 1;
          visibility: visible;
          pointer-events: all;
        }

        /* ── Side Drawers (with blue glow) ── */
        .side-drawer {
          position: fixed;
          top: 0;
          bottom: 0;
          width: 320px;
          background: rgba(255,255,255,0.99);
          z-index: 1600;
          padding: 30px 20px;
          overflow-y: auto;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
          display: flex;
          flex-direction: column;
        }
        .left-drawer {
          left: 0;
          transform: translateX(-100%);
          border-radius: 0 28px 28px 0;
        }
        .right-drawer {
          right: 0;
          transform: translateX(100%);
          border-radius: 28px 0 0 28px;
        }
        .left-drawer.open {
          transform: translateX(0);
          box-shadow: 15px 0 40px rgba(0, 110, 255, 0.6);
        }
        .right-drawer.open {
          transform: translateX(0);
          box-shadow: -15px 0 40px rgba(0, 110, 255, 0.6);
        }

        .close-icon-wrapper {
          position: absolute;
          top: 18px;
          right: 18px;
          cursor: pointer;
          color: #333;
          transition: color 0.25s ease, transform 0.25s ease;
          z-index: 2;
        }
        .close-icon-wrapper:hover { color: #1a73e8; transform: rotate(90deg); }

        .drawer-title {
          font-size: 26px;
          font-weight: 900;
          margin-bottom: 20px;
          margin-top: 24px;
          color: #000;
          letter-spacing: 1px;
        }

        /* Catalog styles */
        .catalog-content { flex: 1; }
        .catalog-section { margin-bottom: 26px; }
        .catalog-subtitle {
          font-size: 11px;
          font-weight: 800;
          color: #aaa;
          margin-bottom: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .catalog-list { list-style: none; }
        .catalog-list li {
          padding: 11px 0;
          font-size: 17px;
          font-weight: 700;
          border-bottom: 1px solid #f2f2f2;
          cursor: pointer;
          transition: color 0.2s ease, padding-left 0.2s ease;
          color: #111;
        }
        .catalog-list li:hover { color: #1a73e8; padding-left: 6px; }
        .catalog-list li.active-category { color: #1a73e8; }

        /* Cart styles */
        .cart-items-container { flex: 1; overflow-y: auto; }
        .empty-cart-message {
          text-align: center;
          margin-top: 60px;
          color: #999;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .cart-item { margin-bottom: 18px; border-bottom: 1px solid #f0f0f0; padding-bottom: 14px; }
        .cart-item-row { display: flex; gap: 12px; align-items: center; }
        .cart-item-img { width: 52px; height: 52px; object-fit: cover; border-radius: 12px; flex-shrink: 0; }
        .cart-item-info { flex: 1; border-left: 2px solid #1a73e8; padding-left: 10px; }
        .cart-item-name { font-weight: 800; font-size: 14px; color: #000; }
        .cart-item-size { font-size: 11px; margin-top: 3px; color: #777; letter-spacing: 0.3px; }
        .cart-item-price-block { text-align: right; flex-shrink: 0; }
        .cart-item-price { font-weight: 900; font-size: 14px; color: #000; }
        .cart-item-delete { cursor: pointer; color: #bbb; margin-top: 6px; transition: color 0.2s ease; display: inline-block; }
        .cart-item-delete:hover { color: #ff3b30; }
        .cart-footer { padding-top: 18px; border-top: 1px solid #efefef; }
        .cart-total { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; font-weight: 700; font-size: 15px; }
        .cart-total-price { font-weight: 900; font-size: 20px; color: #1a73e8; }
        .cart-order-buttons { display: flex; flex-direction: column; gap: 10px; }
        .order-btn {
          border: none;
          color: #fff;
          padding: 14px;
          border-radius: 40px;
          font-weight: 700;
          cursor: pointer;
          font-size: 14px;
          transition: filter 0.2s ease, transform 0.2s ease;
        }
        .order-btn:hover { filter: brightness(0.88); transform: scale(1.02); }
        .telegram-btn { background: #0088cc; }
        .viber-btn { background: #7360f2; }

        /* ── Main Content ── */
        .main-content {
          flex: 1;
          margin-top: 70px;
          background: #fff;
        }

        /* ── Hero ── */
        .hero-section {
          background: linear-gradient(135deg, #001a4d 0%, #1a73e8 100%);
          position: relative;
          overflow: hidden;
          padding: 36px 5% 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
        }
        .hero-section::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 28%;
          background: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* Mobile hero */
        .hero-mobile {
          display: block;
          width: 100%;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        .hero-mobile-img {
          width: 128px;
          height: 128px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255,255,255,0.2);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          margin-bottom: 20px;
        }

        /* Desktop hero */
        .hero-desktop {
          display: none;
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        .hero-desktop-img {
          width: 100%;
          max-width: 495px;
          height: auto;
          display: block;
          margin: 0 auto 20px;
          border-radius: 20px;
          box-shadow: 0 0 50px rgba(0,0,0,0.35);
          mask-image: radial-gradient(circle at center, black 52%, transparent 92%);
          -webkit-mask-image: radial-gradient(circle at center, black 52%, transparent 92%);
        }

        .cta-button {
          display: inline-block;
          margin: 18px 0;
          padding: 13px 32px;
          background: #0a2a5e;
          color: #fff;
          font-weight: 900;
          font-size: 1.1rem;
          border: none;
          border-radius: 60px;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.22);
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          z-index: 20;
        }
        .cta-button:hover { transform: scale(1.05) translateY(-2px); box-shadow: 0 10px 26px rgba(0,0,0,0.35); }
        .cta-mobile { font-size: 0.95rem; padding: 11px 24px; }

        .hero-description-box {
          margin-top: 16px;
          width: 100%;
          position: relative;
          z-index: 5;
        }

        /* ОБНОВЛЁННЫЙ БЛОК С РАЗМЫТИЕМ */
        .animated-gradient-box {
          position: relative;
          background: rgba(26, 115, 232, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 18px;
          padding: 16px 20px;
          text-align: center;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.6;
          width: 100%;
          max-width: 550px;
          margin: 0 auto;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          text-shadow: 0 1px 4px rgba(0,0,0,0.3);
          letter-spacing: 0.3px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .animated-gradient-box::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #0066ff, #00ccff, #0066ff, #6600ff, #0066ff);
          background-size: 300% 300%;
          border-radius: 20px;
          z-index: -1;
          animation: borderShift 6s ease infinite;
          opacity: 0.6;
        }
        @keyframes borderShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (min-width: 1024px) {
          .hero-mobile { display: none; }
          .hero-desktop { display: block; }
          .hero-section { padding: 70px 5% 70px; min-height: 63vh; }
          .animated-gradient-box {
            font-size: 16px;
            padding: 20px 26px;
            max-width: 550px;
          }
        }

        /* ── Animated Titles ── */
        .animated-title {
          font-size: 34px;
          font-weight: 900;
          margin-bottom: 28px;
          text-transform: uppercase;
          background: linear-gradient(90deg, #000, #1a73e8, #000);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: textShimmer 3s linear infinite;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .animated-title.is-visible { opacity: 1; transform: translateY(0); }
        @keyframes textShimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* ── Shop Sections ── */
        .shop-section { padding: 40px 5%; max-width: 1400px; margin: 0 auto; }
        .all-products-section { padding-top: 16px; }

        /* Slider */
        .slider-container { position: relative; }
        .products-scroll-container {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 8px;
        }
        .product-scroll-anim {
          flex: 0 0 calc(50% - 8px);
          scroll-snap-align: start;
          cursor: pointer;
        }
        .slider-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.95);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          color: #1a73e8;
          box-shadow: 0 2px 10px rgba(0,0,0,0.10);
        }
        .slider-nav-btn:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 4px 16px rgba(26,115,232,0.2);
        }
        .slider-nav-btn.prev { left: -18px; }
        .slider-nav-btn.next { right: -18px; }

        /* Product Cards */
        .product-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          position: relative;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.10);
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
        .product-card:hover .product-image { transform: scale(1.04); }
        .product-title { font-size: 15px; font-weight: 700; margin: 10px 12px 4px; color: #111; }
        .product-price { font-size: 14px; font-weight: 800; color: #1a73e8; margin: 0 12px 12px; }
        .delete-icon {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(255,255,255,0.96);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: background 0.2s ease;
          font-size: 14px;
        }
        .delete-icon:hover { background: #ff3b30; }

        /* All Products Grid */
        .all-products-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .no-products { text-align: center; padding: 60px 20px; }
        .no-products p { font-weight: 700; color: #aaa; font-size: 17px; margin-bottom: 20px; }
        .reset-filter {
          background: #1a73e8;
          color: #fff;
          border: none;
          padding: 11px 26px;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .reset-filter:hover { background: #0a2a5e; transform: scale(1.04); }

        /* ── Footer ── */
        .main-footer { background: #0a0a0a; color: #fff; padding: 56px 5% 20px; margin-top: auto; }
        .footer-content { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 36px; }
        .footer-logo-section p { color: #888; font-size: 14px; margin-top: 6px; }
        .footer-logo { font-size: 30px; font-weight: 900; color: #fff; text-shadow: 0 0 10px rgba(26,115,232,0.6); }
        .footer-links { display: flex; gap: 70px; flex-wrap: wrap; }
        .footer-column { display: flex; flex-direction: column; gap: 12px; }
        .footer-column h4 { font-size: 15px; font-weight: 800; color: #fff; }
        .footer-link { cursor: pointer; font-size: 14px; color: #999; transition: color 0.2s ease, padding-left 0.2s ease; padding: 4px 0; display: inline-block; }
        .footer-link:hover { color: #1a73e8; padding-left: 4px; }
        .footer-bottom { text-align: center; color: #555; font-size: 12px; margin-top: 40px; padding-top: 18px; border-top: 1px solid #1e1e1e; }

        /* ── Product Modal ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 3000;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .modal-overlay.closing { animation: fadeOut 0.3s ease forwards; }
        .compact-modal {
          background: #fff;
          width: 100%;
          max-width: 520px;
          border-radius: 36px 36px 0 0;
          padding: 22px 22px 36px;
          max-height: 91vh;
          overflow-y: auto;
          animation: slideUp 0.38s cubic-bezier(0.16,1,0.3,1);
        }
        .compact-modal.closing { animation: slideDown 0.3s ease forwards; }
        .modal-close-pos { position: absolute; top: 22px; right: 22px; z-index: 5; }
        .modal-drag-indicator { width: 44px; height: 4px; background: #e0e0e0; border-radius: 10px; margin: 0 auto 22px; }
        .slider-modal-container { position: relative; margin-bottom: 18px; }
        .slider-image-wrapper { border-radius: 22px; overflow: hidden; background: #f5f5f5; }
        .slider-image { width: 100%; height: auto; display: block; }
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.92);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.10);
          z-index: 10;
          transition: transform 0.2s ease;
          color: #222;
        }
        .slider-arrow:hover { transform: translateY(-50%) scale(1.1); }
        .slider-arrow-left { left: 8px; }
        .slider-arrow-right { right: 8px; }
        .slider-counter {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0,0,0,0.55);
          color: #fff;
          padding: 5px 12px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 600;
        }
        .modal-product-title { font-weight: 900; font-size: 24px; margin: 12px 0 6px; color: #000; }
        .modal-product-desc { color: #555; font-size: 14px; margin: 0 0 18px; line-height: 1.55; }
        .modal-size-label { font-size: 11px; font-weight: 900; margin: 0 0 10px; color: #000; letter-spacing: 0.6px; text-transform: uppercase; }
        .modal-sizes { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
        .size-btn {
          padding: 9px 18px;
          border: 1.5px solid #ddd;
          border-radius: 40px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.15s;
          background: #fff;
          color: #222;
        }
        .size-btn:hover { border-color: #1a73e8; color: #1a73e8; transform: scale(1.04); }
        .size-btn.selected { background: #1a73e8; color: #fff; border-color: #1a73e8; }
        .main-action-btn {
          width: 100%;
          padding: 16px;
          background: #1a73e8;
          color: #fff;
          border: none;
          border-radius: 50px;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
          margin-bottom: 18px;
        }
        .main-action-btn:hover { background: #0a2a5e; transform: scale(1.02); }
        .main-action-btn.success { background: #28a745; }
        .reviews-section { margin-top: 4px; }
        .reviews-section h3 { font-size: 14px; font-weight: 900; margin: 16px 0 12px; color: #1a73e8; letter-spacing: 0.5px; }
        .review-card { background: #f8f8f8; border-radius: 18px; padding: 16px; margin-bottom: 10px; }
        .review-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
        .review-name { font-weight: 800; font-size: 14px; }
        .review-stars { color: #ffb800; font-size: 13px; }
        .review-text { font-size: 13px; color: #444; line-height: 1.5; }

        /* ── Rules Modal ── */
        .rules-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 4000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .rules-modal {
          background: #fff;
          width: 100%;
          max-width: 580px;
          max-height: 80vh;
          border-radius: 32px;
          padding: 30px;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 16px 40px rgba(0,0,0,0.16);
        }
        .rules-close {
          position: absolute;
          top: 18px;
          right: 18px;
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
          color: #888;
          transition: color 0.2s, transform 0.2s;
        }
        .rules-close:hover { color: #1a73e8; transform: rotate(90deg); }
        .rules-title { font-size: 24px; font-weight: 900; margin-bottom: 22px; }
        .rules-content h3 { margin-top: 18px; margin-bottom: 8px; font-size: 15px; }
        .rules-content p { margin-bottom: 12px; line-height: 1.65; font-size: 14px; color: #444; }

        /* ── Animations ── */
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes slideUp   { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes slideDown { from { transform: translateY(0); } to { transform: translateY(100%); } }

        /* ── Responsive ── */
        @media (min-width: 600px) {
          .product-scroll-anim { flex: 0 0 calc(33.333% - 11px); }
          .all-products-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; }
        }
        @media (min-width: 1024px) {
          .product-scroll-anim { flex: 0 0 calc(25% - 12px); }
          .all-products-grid { grid-template-columns: repeat(4, 1fr); }
          .footer-links { gap: 90px; }
        }
        @media (max-width: 480px) {
          .consent-banner { flex-direction: column; align-items: flex-start; gap: 12px; padding: 14px 18px; }
          .consent-btn { align-self: flex-end; }
          .slider-nav-btn { width: 34px; height: 34px; }
          .slider-nav-btn.prev { left: -12px; }
          .slider-nav-btn.next { right: -12px; }
        }
      `})]})}Vu.createRoot(document.getElementById("root")).render(I.jsx(L0.StrictMode,{children:I.jsx(t2,{})}));
