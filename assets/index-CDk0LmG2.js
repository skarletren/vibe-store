(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var G0={exports:{}},Ou={},Q0={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),pS=Symbol.for("react.portal"),mS=Symbol.for("react.fragment"),gS=Symbol.for("react.strict_mode"),yS=Symbol.for("react.profiler"),vS=Symbol.for("react.provider"),_S=Symbol.for("react.context"),wS=Symbol.for("react.forward_ref"),xS=Symbol.for("react.suspense"),TS=Symbol.for("react.memo"),ES=Symbol.for("react.lazy"),gg=Symbol.iterator;function SS(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var Y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X0=Object.assign,J0={};function Es(t,e,n){this.props=t,this.context=e,this.refs=J0,this.updater=n||Y0}Es.prototype.isReactComponent={};Es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Z0(){}Z0.prototype=Es.prototype;function xf(t,e,n){this.props=t,this.context=e,this.refs=J0,this.updater=n||Y0}var Tf=xf.prototype=new Z0;Tf.constructor=xf;X0(Tf,Es.prototype);Tf.isPureReactComponent=!0;var yg=Array.isArray,e_=Object.prototype.hasOwnProperty,Ef={current:null},t_={key:!0,ref:!0,__self:!0,__source:!0};function n_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)e_.call(e,r)&&!t_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ha,type:t,key:s,ref:o,props:i,_owner:Ef.current}}function IS(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function AS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vg=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AS(""+t.key):e.toString(36)}function vl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case pS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Lc(o,0):r,yg(i)?(n="",t!=null&&(n=t.replace(vg,"$&/")+"/"),vl(i,e,n,"",function(c){return c})):i!=null&&(Sf(i)&&(i=IS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Lc(s,l);o+=vl(s,e,n,u,i)}else if(u=SS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Lc(s,l++),o+=vl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return vl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function CS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},_l={transition:null},PS={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:_l,ReactCurrentOwner:Ef};function r_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!Sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Es;te.Fragment=mS;te.Profiler=yS;te.PureComponent=xf;te.StrictMode=gS;te.Suspense=xS;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PS;te.act=r_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=X0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ef.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)e_.call(e,u)&&!t_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ha,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:_S,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vS,_context:t},t.Consumer=t};te.createElement=n_;te.createFactory=function(t){var e=n_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:wS,render:t}};te.isValidElement=Sf;te.lazy=function(t){return{$$typeof:ES,_payload:{_status:-1,_result:t},_init:CS}};te.memo=function(t,e){return{$$typeof:TS,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};te.unstable_act=r_;te.useCallback=function(t,e){return xt.current.useCallback(t,e)};te.useContext=function(t){return xt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};te.useEffect=function(t,e){return xt.current.useEffect(t,e)};te.useId=function(){return xt.current.useId()};te.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return xt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};te.useRef=function(t){return xt.current.useRef(t)};te.useState=function(t){return xt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return xt.current.useTransition()};te.version="18.3.1";Q0.exports=te;var j=Q0.exports;const kS=fS(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RS=j,bS=Symbol.for("react.element"),VS=Symbol.for("react.fragment"),DS=Object.prototype.hasOwnProperty,NS=RS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MS={key:!0,ref:!0,__self:!0,__source:!0};function i_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DS.call(e,r)&&!MS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bS,type:t,key:s,ref:o,props:i,_owner:NS.current}}Ou.Fragment=VS;Ou.jsx=i_;Ou.jsxs=i_;G0.exports=Ou;var v=G0.exports,Lh={},s_={exports:{}},Ut={},o_={exports:{}},a_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,H){var Y=B.length;B.push(H);e:for(;0<Y;){var ie=Y-1>>>1,le=B[ie];if(0<i(le,H))B[ie]=H,B[Y]=le,Y=ie;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var H=B[0],Y=B.pop();if(Y!==H){B[0]=Y;e:for(var ie=0,le=B.length,ge=le>>>1;ie<ge;){var Et=2*(ie+1)-1,gt=B[Et],Vt=Et+1,Wt=B[Vt];if(0>i(gt,Y))Vt<le&&0>i(Wt,gt)?(B[ie]=Wt,B[Vt]=Y,ie=Vt):(B[ie]=gt,B[Et]=Y,ie=Et);else if(Vt<le&&0>i(Wt,Y))B[ie]=Wt,B[Vt]=Y,ie=Vt;else break e}}return H}function i(B,H){var Y=B.sortIndex-H.sortIndex;return Y!==0?Y:B.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,g=!1,I=!1,P=!1,R=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=B)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(c)}}function V(B){if(P=!1,S(B),!I)if(n(u)!==null)I=!0,Ee(M);else{var H=n(c);H!==null&&ot(V,H.startTime-B)}}function M(B,H){I=!1,P&&(P=!1,x(y),y=-1),g=!0;var Y=m;try{for(S(H),f=n(u);f!==null&&(!(f.expirationTime>H)||B&&!k());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,m=f.priorityLevel;var le=ie(f.expirationTime<=H);H=t.unstable_now(),typeof le=="function"?f.callback=le:f===n(u)&&r(u),S(H)}else r(u);f=n(u)}if(f!==null)var ge=!0;else{var Et=n(c);Et!==null&&ot(V,Et.startTime-H),ge=!1}return ge}finally{f=null,m=Y,g=!1}}var O=!1,A=null,y=-1,T=5,E=-1;function k(){return!(t.unstable_now()-E<T)}function b(){if(A!==null){var B=t.unstable_now();E=B;var H=!0;try{H=A(!0,B)}finally{H?C():(O=!1,A=null)}}else O=!1}var C;if(typeof w=="function")C=function(){w(b)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,Te=re.port2;re.port1.onmessage=b,C=function(){Te.postMessage(null)}}else C=function(){R(b,0)};function Ee(B){A=B,O||(O=!0,C())}function ot(B,H){y=R(function(){B(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){I||g||(I=!0,Ee(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var Y=m;m=H;try{return B()}finally{m=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=m;m=B;try{return H()}finally{m=Y}},t.unstable_scheduleCallback=function(B,H,Y){var ie=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ie+Y:ie):Y=ie,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Y+le,B={id:d++,callback:H,priorityLevel:B,startTime:Y,expirationTime:le,sortIndex:-1},Y>ie?(B.sortIndex=Y,e(c,B),n(u)===null&&B===n(c)&&(P?(x(y),y=-1):P=!0,ot(V,Y-ie))):(B.sortIndex=le,e(u,B),I||g||(I=!0,Ee(M))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var H=m;return function(){var Y=m;m=H;try{return B.apply(this,arguments)}finally{m=Y}}}})(a_);o_.exports=a_;var LS=o_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OS=j,zt=LS;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l_=new Set,Oo={};function Ei(t,e){os(t,e),os(t+"Capture",e)}function os(t,e){for(Oo[t]=e,t=0;t<e.length;t++)l_.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oh=Object.prototype.hasOwnProperty,jS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},wg={};function FS(t){return Oh.call(wg,t)?!0:Oh.call(_g,t)?!1:jS.test(t)?wg[t]=!0:(_g[t]=!0,!1)}function BS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zS(t,e,n,r){if(e===null||typeof e>"u"||BS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var If=/[\-:]([a-z])/g;function Af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(If,Af);it[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(If,Af);it[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(If,Af);it[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cf(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zS(e,n,i,r)&&(n=null),r||i===null?FS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=OS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),ji=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),Pf=Symbol.for("react.strict_mode"),jh=Symbol.for("react.profiler"),u_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),Fh=Symbol.for("react.suspense"),Bh=Symbol.for("react.suspense_list"),Rf=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),h_=Symbol.for("react.offscreen"),xg=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=xg&&t[xg]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Oc;function uo(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var jc=!1;function Fc(t,e){if(!t||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function US(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case ji:return"Portal";case jh:return"Profiler";case Pf:return"StrictMode";case Fh:return"Suspense";case Bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c_:return(t.displayName||"Context")+".Consumer";case u_:return(t._context.displayName||"Context")+".Provider";case kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rf:return e=t.displayName||null,e!==null?e:zh(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return zh(t(e))}catch{}}return null}function $S(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zh(e);case 8:return e===Pf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function d_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function WS(t){var e=d_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=WS(t))}function f_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=d_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uh(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p_(t,e){e=e.checked,e!=null&&Cf(t,"checked",e,!1)}function $h(t,e){p_(t,e);var n=Cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wh(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Eg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wh(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(co(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function m_(t,e){var n=Cr(e.value),r=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ig(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,y_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HS=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){HS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function v_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function __(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=v_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KS=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qh(t,e){if(e){if(KS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Gh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qh=null;function bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yh=null,es=null,ts=null;function Ag(t){if(t=pa(t)){if(typeof Yh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Uu(e),Yh(t.stateNode,t.type,e))}}function w_(t){es?ts?ts.push(t):ts=[t]:es=t}function x_(){if(es){var t=es,e=ts;if(ts=es=null,Ag(t),e)for(t=0;t<e.length;t++)Ag(e[t])}}function T_(t,e){return t(e)}function E_(){}var Bc=!1;function S_(t,e,n){if(Bc)return t(e,n);Bc=!0;try{return T_(t,e,n)}finally{Bc=!1,(es!==null||ts!==null)&&(E_(),x_())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var r=Uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Xh=!1;if($n)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Xh=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Xh=!1}function qS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var wo=!1,Hl=null,Kl=!1,Jh=null,GS={onError:function(t){wo=!0,Hl=t}};function QS(t,e,n,r,i,s,o,l,u){wo=!1,Hl=null,qS.apply(GS,arguments)}function YS(t,e,n,r,i,s,o,l,u){if(QS.apply(this,arguments),wo){if(wo){var c=Hl;wo=!1,Hl=null}else throw Error(U(198));Kl||(Kl=!0,Jh=c)}}function Si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function I_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cg(t){if(Si(t)!==t)throw Error(U(188))}function XS(t){var e=t.alternate;if(!e){if(e=Si(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cg(i),t;if(s===r)return Cg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function A_(t){return t=XS(t),t!==null?C_(t):null}function C_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=C_(t);if(e!==null)return e;t=t.sibling}return null}var P_=zt.unstable_scheduleCallback,Pg=zt.unstable_cancelCallback,JS=zt.unstable_shouldYield,ZS=zt.unstable_requestPaint,Me=zt.unstable_now,eI=zt.unstable_getCurrentPriorityLevel,Vf=zt.unstable_ImmediatePriority,k_=zt.unstable_UserBlockingPriority,ql=zt.unstable_NormalPriority,tI=zt.unstable_LowPriority,R_=zt.unstable_IdlePriority,ju=null,En=null;function nI(t){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ju,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:sI,rI=Math.log,iI=Math.LN2;function sI(t){return t>>>=0,t===0?32:31-(rI(t)/iI|0)|0}var Ya=64,Xa=4194304;function ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ho(l):(s&=o,s!==0&&(r=ho(s)))}else o=n&~i,o!==0?r=ho(o):s!==0&&(r=ho(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),i=1<<n,r|=t[n],e&=~i;return r}function oI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-cn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=oI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Zh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function b_(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function lI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function V_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D_,Nf,N_,M_,L_,ed=!1,Ja=[],mr=null,gr=null,yr=null,Bo=new Map,zo=new Map,ur=[],uI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(e.pointerId)}}function Zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pa(e),e!==null&&Nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cI(t,e,n,r,i){switch(e){case"focusin":return mr=Zs(mr,t,e,n,r,i),!0;case"dragenter":return gr=Zs(gr,t,e,n,r,i),!0;case"mouseover":return yr=Zs(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bo.set(s,Zs(Bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zo.set(s,Zs(zo.get(s)||null,t,e,n,r,i)),!0}return!1}function O_(t){var e=ei(t.target);if(e!==null){var n=Si(e);if(n!==null){if(e=n.tag,e===13){if(e=I_(n),e!==null){t.blockedOn=e,L_(t.priority,function(){N_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qh=r,n.target.dispatchEvent(r),Qh=null}else return e=pa(n),e!==null&&Nf(e),t.blockedOn=n,!1;e.shift()}return!0}function Rg(t,e,n){wl(t)&&n.delete(e)}function hI(){ed=!1,mr!==null&&wl(mr)&&(mr=null),gr!==null&&wl(gr)&&(gr=null),yr!==null&&wl(yr)&&(yr=null),Bo.forEach(Rg),zo.forEach(Rg)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,ed||(ed=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,hI)))}function Uo(t){function e(i){return eo(i,t)}if(0<Ja.length){eo(Ja[0],t);for(var n=1;n<Ja.length;n++){var r=Ja[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&eo(mr,t),gr!==null&&eo(gr,t),yr!==null&&eo(yr,t),Bo.forEach(e),zo.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)O_(n),n.blockedOn===null&&ur.shift()}var ns=Xn.ReactCurrentBatchConfig,Ql=!0;function dI(t,e,n,r){var i=de,s=ns.transition;ns.transition=null;try{de=1,Mf(t,e,n,r)}finally{de=i,ns.transition=s}}function fI(t,e,n,r){var i=de,s=ns.transition;ns.transition=null;try{de=4,Mf(t,e,n,r)}finally{de=i,ns.transition=s}}function Mf(t,e,n,r){if(Ql){var i=td(t,e,n,r);if(i===null)Xc(t,e,r,Yl,n),kg(t,r);else if(cI(i,t,e,n,r))r.stopPropagation();else if(kg(t,r),e&4&&-1<uI.indexOf(t)){for(;i!==null;){var s=pa(i);if(s!==null&&D_(s),s=td(t,e,n,r),s===null&&Xc(t,e,r,Yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xc(t,e,r,null,n)}}var Yl=null;function td(t,e,n,r){if(Yl=null,t=bf(r),t=ei(t),t!==null)if(e=Si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=I_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function j_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eI()){case Vf:return 1;case k_:return 4;case ql:case tI:return 16;case R_:return 536870912;default:return 16}default:return 16}}var hr=null,Lf=null,xl=null;function F_(){if(xl)return xl;var t,e=Lf,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xl=i.slice(t,1<r?1-r:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function bg(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:bg,this.isPropagationStopped=bg,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=$t(Ss),fa=ke({},Ss,{view:0,detail:0}),pI=$t(fa),Uc,$c,to,Fu=ke({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Uc=t.screenX-to.screenX,$c=t.screenY-to.screenY):$c=Uc=0,to=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Vg=$t(Fu),mI=ke({},Fu,{dataTransfer:0}),gI=$t(mI),yI=ke({},fa,{relatedTarget:0}),Wc=$t(yI),vI=ke({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),_I=$t(vI),wI=ke({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xI=$t(wI),TI=ke({},Ss,{data:0}),Dg=$t(TI),EI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},II={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=II[t])?!!e[t]:!1}function jf(){return AI}var CI=ke({},fa,{key:function(t){if(t.key){var e=EI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PI=$t(CI),kI=ke({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ng=$t(kI),RI=ke({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),bI=$t(RI),VI=ke({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),DI=$t(VI),NI=ke({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MI=$t(NI),LI=[9,13,27,32],Ff=$n&&"CompositionEvent"in window,xo=null;$n&&"documentMode"in document&&(xo=document.documentMode);var OI=$n&&"TextEvent"in window&&!xo,B_=$n&&(!Ff||xo&&8<xo&&11>=xo),Mg=" ",Lg=!1;function z_(t,e){switch(t){case"keyup":return LI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bi=!1;function jI(t,e){switch(t){case"compositionend":return U_(e);case"keypress":return e.which!==32?null:(Lg=!0,Mg);case"textInput":return t=e.data,t===Mg&&Lg?null:t;default:return null}}function FI(t,e){if(Bi)return t==="compositionend"||!Ff&&z_(t,e)?(t=F_(),xl=Lf=hr=null,Bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B_&&e.locale!=="ko"?null:e.data;default:return null}}var BI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BI[t.type]:e==="textarea"}function $_(t,e,n,r){w_(r),e=Xl(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,$o=null;function zI(t){ew(t,0)}function Bu(t){var e=$i(t);if(f_(e))return t}function UI(t,e){if(t==="change")return e}var W_=!1;if($n){var Hc;if($n){var Kc="oninput"in document;if(!Kc){var jg=document.createElement("div");jg.setAttribute("oninput","return;"),Kc=typeof jg.oninput=="function"}Hc=Kc}else Hc=!1;W_=Hc&&(!document.documentMode||9<document.documentMode)}function Fg(){To&&(To.detachEvent("onpropertychange",H_),$o=To=null)}function H_(t){if(t.propertyName==="value"&&Bu($o)){var e=[];$_(e,$o,t,bf(t)),S_(zI,e)}}function $I(t,e,n){t==="focusin"?(Fg(),To=e,$o=n,To.attachEvent("onpropertychange",H_)):t==="focusout"&&Fg()}function WI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bu($o)}function HI(t,e){if(t==="click")return Bu(e)}function KI(t,e){if(t==="input"||t==="change")return Bu(e)}function qI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pn=typeof Object.is=="function"?Object.is:qI;function Wo(t,e){if(pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oh.call(e,i)||!pn(t[i],e[i]))return!1}return!0}function Bg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zg(t,e){var n=Bg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bg(n)}}function K_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?K_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q_(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GI(t){var e=q_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&K_(n.ownerDocument.documentElement,n)){if(r!==null&&Bf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zg(n,s);var o=zg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QI=$n&&"documentMode"in document&&11>=document.documentMode,zi=null,nd=null,Eo=null,rd=!1;function Ug(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||zi==null||zi!==Wl(r)||(r=zi,"selectionStart"in r&&Bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Wo(Eo,r)||(Eo=r,r=Xl(nd,"onSelect"),0<r.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ui={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},qc={},G_={};$n&&(G_=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function zu(t){if(qc[t])return qc[t];if(!Ui[t])return t;var e=Ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in G_)return qc[t]=e[n];return t}var Q_=zu("animationend"),Y_=zu("animationiteration"),X_=zu("animationstart"),J_=zu("transitionend"),Z_=new Map,$g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Z_.set(t,e),Ei(e,[t])}for(var Gc=0;Gc<$g.length;Gc++){var Qc=$g[Gc],YI=Qc.toLowerCase(),XI=Qc[0].toUpperCase()+Qc.slice(1);Mr(YI,"on"+XI)}Mr(Q_,"onAnimationEnd");Mr(Y_,"onAnimationIteration");Mr(X_,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(J_,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JI=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Wg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YS(r,e,void 0,t),t.currentTarget=null}function ew(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Wg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Wg(i,l,c),s=u}}}if(Kl)throw t=Jh,Kl=!1,Jh=null,t}function _e(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var r=t+"__bubble";n.has(r)||(tw(e,t,2,!1),n.add(r))}function Yc(t,e,n){var r=0;e&&(r|=4),tw(n,t,r,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[tl]){t[tl]=!0,l_.forEach(function(n){n!=="selectionchange"&&(JI.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,Yc("selectionchange",!1,e))}}function tw(t,e,n,r){switch(j_(e)){case 1:var i=dI;break;case 4:i=fI;break;default:i=Mf}n=i.bind(null,e,n,t),i=void 0,!Xh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ei(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}S_(function(){var c=s,d=bf(n),f=[];e:{var m=Z_.get(t);if(m!==void 0){var g=Of,I=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":g=PI;break;case"focusin":I="focus",g=Wc;break;case"focusout":I="blur",g=Wc;break;case"beforeblur":case"afterblur":g=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=gI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bI;break;case Q_:case Y_:case X_:g=_I;break;case J_:g=DI;break;case"scroll":g=pI;break;case"wheel":g=MI;break;case"copy":case"cut":case"paste":g=xI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ng}var P=(e&4)!==0,R=!P&&t==="scroll",x=P?m!==null?m+"Capture":null:m;P=[];for(var w=c,S;w!==null;){S=w;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,x!==null&&(V=Fo(w,x),V!=null&&P.push(Ko(w,V,S)))),R)break;w=w.return}0<P.length&&(m=new g(m,I,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Qh&&(I=n.relatedTarget||n.fromElement)&&(ei(I)||I[Wn]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(I=n.relatedTarget||n.toElement,g=c,I=I?ei(I):null,I!==null&&(R=Si(I),I!==R||I.tag!==5&&I.tag!==6)&&(I=null)):(g=null,I=c),g!==I)){if(P=Vg,V="onMouseLeave",x="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=Ng,V="onPointerLeave",x="onPointerEnter",w="pointer"),R=g==null?m:$i(g),S=I==null?m:$i(I),m=new P(V,w+"leave",g,n,d),m.target=R,m.relatedTarget=S,V=null,ei(d)===c&&(P=new P(x,w+"enter",I,n,d),P.target=S,P.relatedTarget=R,V=P),R=V,g&&I)t:{for(P=g,x=I,w=0,S=P;S;S=Di(S))w++;for(S=0,V=x;V;V=Di(V))S++;for(;0<w-S;)P=Di(P),w--;for(;0<S-w;)x=Di(x),S--;for(;w--;){if(P===x||x!==null&&P===x.alternate)break t;P=Di(P),x=Di(x)}P=null}else P=null;g!==null&&Hg(f,m,g,P,!1),I!==null&&R!==null&&Hg(f,R,I,P,!0)}}e:{if(m=c?$i(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var M=UI;else if(Og(m))if(W_)M=KI;else{M=WI;var O=$I}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=HI);if(M&&(M=M(t,c))){$_(f,M,n,d);break e}O&&O(t,m,c),t==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&Wh(m,"number",m.value)}switch(O=c?$i(c):window,t){case"focusin":(Og(O)||O.contentEditable==="true")&&(zi=O,nd=c,Eo=null);break;case"focusout":Eo=nd=zi=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Ug(f,n,d);break;case"selectionchange":if(QI)break;case"keydown":case"keyup":Ug(f,n,d)}var A;if(Ff)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Bi?z_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(B_&&n.locale!=="ko"&&(Bi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Bi&&(A=F_()):(hr=d,Lf="value"in hr?hr.value:hr.textContent,Bi=!0)),O=Xl(c,y),0<O.length&&(y=new Dg(y,t,null,n,d),f.push({event:y,listeners:O}),A?y.data=A:(A=U_(n),A!==null&&(y.data=A)))),(A=OI?jI(t,n):FI(t,n))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(d=new Dg("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}ew(f,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fo(t,n),s!=null&&r.unshift(Ko(t,s,i)),s=Fo(t,e),s!=null&&r.push(Ko(t,s,i))),t=t.return}return r}function Di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Fo(n,s),u!=null&&o.unshift(Ko(n,u,l))):i||(u=Fo(n,s),u!=null&&o.push(Ko(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ZI=/\r\n?/g,eA=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(ZI,`
`).replace(eA,"")}function nl(t,e,n){if(e=Kg(e),Kg(t)!==e&&n)throw Error(U(425))}function Jl(){}var id=null,sd=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,tA=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,nA=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(t){return qg.resolve(null).then(t).catch(rA)}:ad;function rA(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Is,qo="__reactProps$"+Is,Wn="__reactContainer$"+Is,ld="__reactEvents$"+Is,iA="__reactListeners$"+Is,sA="__reactHandles$"+Is;function ei(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gg(t);t!==null;){if(n=t[Tn])return n;t=Gg(t)}return e}t=n,n=t.parentNode}return null}function pa(t){return t=t[Tn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Uu(t){return t[qo]||null}var ud=[],Wi=-1;function Lr(t){return{current:t}}function xe(t){0>Wi||(t.current=ud[Wi],ud[Wi]=null,Wi--)}function ye(t,e){Wi++,ud[Wi]=t.current,t.current=e}var Pr={},mt=Lr(Pr),Pt=Lr(!1),fi=Pr;function as(t,e){var n=t.type.contextTypes;if(!n)return Pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Zl(){xe(Pt),xe(mt)}function Qg(t,e,n){if(mt.current!==Pr)throw Error(U(168));ye(mt,e),ye(Pt,n)}function nw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,$S(t)||"Unknown",i));return ke({},n,r)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,fi=mt.current,ye(mt,t),ye(Pt,Pt.current),!0}function Yg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=nw(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,xe(Pt),xe(mt),ye(mt,t)):xe(Pt),ye(Pt,n)}var Fn=null,$u=!1,Zc=!1;function rw(t){Fn===null?Fn=[t]:Fn.push(t)}function oA(t){$u=!0,rw(t)}function Or(){if(!Zc&&Fn!==null){Zc=!0;var t=0,e=de;try{var n=Fn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fn=null,$u=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(t+1)),P_(Vf,Or),i}finally{de=e,Zc=!1}}return null}var Hi=[],Ki=0,tu=null,nu=0,Kt=[],qt=0,pi=null,Bn=1,zn="";function Yr(t,e){Hi[Ki++]=nu,Hi[Ki++]=tu,tu=t,nu=e}function iw(t,e,n){Kt[qt++]=Bn,Kt[qt++]=zn,Kt[qt++]=pi,pi=t;var r=Bn;t=zn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bn=1<<32-cn(e)+i|n<<i|r,zn=s+t}else Bn=1<<s|n<<i|r,zn=t}function zf(t){t.return!==null&&(Yr(t,1),iw(t,1,0))}function Uf(t){for(;t===tu;)tu=Hi[--Ki],Hi[Ki]=null,nu=Hi[--Ki],Hi[Ki]=null;for(;t===pi;)pi=Kt[--qt],Kt[qt]=null,zn=Kt[--qt],Kt[qt]=null,Bn=Kt[--qt],Kt[qt]=null}var Ot=null,Mt=null,Se=!1,un=null;function sw(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Mt=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pi!==null?{id:Bn,overflow:zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Mt=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hd(t){if(Se){var e=Mt;if(e){var n=e;if(!Xg(t,e)){if(cd(t))throw Error(U(418));e=vr(n.nextSibling);var r=Ot;e&&Xg(t,e)?sw(r,n):(t.flags=t.flags&-4097|2,Se=!1,Ot=t)}}else{if(cd(t))throw Error(U(418));t.flags=t.flags&-4097|2,Se=!1,Ot=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function rl(t){if(t!==Ot)return!1;if(!Se)return Jg(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=Mt)){if(cd(t))throw ow(),Error(U(418));for(;e;)sw(t,e),e=vr(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ot?vr(t.stateNode.nextSibling):null;return!0}function ow(){for(var t=Mt;t;)t=vr(t.nextSibling)}function ls(){Mt=Ot=null,Se=!1}function $f(t){un===null?un=[t]:un.push(t)}var aA=Xn.ReactCurrentBatchConfig;function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zg(t){var e=t._init;return e(t._payload)}function aw(t){function e(x,w){if(t){var S=x.deletions;S===null?(x.deletions=[w],x.flags|=16):S.push(w)}}function n(x,w){if(!t)return null;for(;w!==null;)e(x,w),w=w.sibling;return null}function r(x,w){for(x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function i(x,w){return x=Tr(x,w),x.index=0,x.sibling=null,x}function s(x,w,S){return x.index=S,t?(S=x.alternate,S!==null?(S=S.index,S<w?(x.flags|=2,w):S):(x.flags|=2,w)):(x.flags|=1048576,w)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,w,S,V){return w===null||w.tag!==6?(w=oh(S,x.mode,V),w.return=x,w):(w=i(w,S),w.return=x,w)}function u(x,w,S,V){var M=S.type;return M===Fi?d(x,w,S.props.children,V,S.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ar&&Zg(M)===w.type)?(V=i(w,S.props),V.ref=no(x,w,S),V.return=x,V):(V=kl(S.type,S.key,S.props,null,x.mode,V),V.ref=no(x,w,S),V.return=x,V)}function c(x,w,S,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=ah(S,x.mode,V),w.return=x,w):(w=i(w,S.children||[]),w.return=x,w)}function d(x,w,S,V,M){return w===null||w.tag!==7?(w=li(S,x.mode,V,M),w.return=x,w):(w=i(w,S),w.return=x,w)}function f(x,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=oh(""+w,x.mode,S),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case qa:return S=kl(w.type,w.key,w.props,null,x.mode,S),S.ref=no(x,null,w),S.return=x,S;case ji:return w=ah(w,x.mode,S),w.return=x,w;case ar:var V=w._init;return f(x,V(w._payload),S)}if(co(w)||Xs(w))return w=li(w,x.mode,S,null),w.return=x,w;il(x,w)}return null}function m(x,w,S,V){var M=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:l(x,w,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qa:return S.key===M?u(x,w,S,V):null;case ji:return S.key===M?c(x,w,S,V):null;case ar:return M=S._init,m(x,w,M(S._payload),V)}if(co(S)||Xs(S))return M!==null?null:d(x,w,S,V,null);il(x,S)}return null}function g(x,w,S,V,M){if(typeof V=="string"&&V!==""||typeof V=="number")return x=x.get(S)||null,l(w,x,""+V,M);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case qa:return x=x.get(V.key===null?S:V.key)||null,u(w,x,V,M);case ji:return x=x.get(V.key===null?S:V.key)||null,c(w,x,V,M);case ar:var O=V._init;return g(x,w,S,O(V._payload),M)}if(co(V)||Xs(V))return x=x.get(S)||null,d(w,x,V,M,null);il(w,V)}return null}function I(x,w,S,V){for(var M=null,O=null,A=w,y=w=0,T=null;A!==null&&y<S.length;y++){A.index>y?(T=A,A=null):T=A.sibling;var E=m(x,A,S[y],V);if(E===null){A===null&&(A=T);break}t&&A&&E.alternate===null&&e(x,A),w=s(E,w,y),O===null?M=E:O.sibling=E,O=E,A=T}if(y===S.length)return n(x,A),Se&&Yr(x,y),M;if(A===null){for(;y<S.length;y++)A=f(x,S[y],V),A!==null&&(w=s(A,w,y),O===null?M=A:O.sibling=A,O=A);return Se&&Yr(x,y),M}for(A=r(x,A);y<S.length;y++)T=g(A,x,y,S[y],V),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?y:T.key),w=s(T,w,y),O===null?M=T:O.sibling=T,O=T);return t&&A.forEach(function(k){return e(x,k)}),Se&&Yr(x,y),M}function P(x,w,S,V){var M=Xs(S);if(typeof M!="function")throw Error(U(150));if(S=M.call(S),S==null)throw Error(U(151));for(var O=M=null,A=w,y=w=0,T=null,E=S.next();A!==null&&!E.done;y++,E=S.next()){A.index>y?(T=A,A=null):T=A.sibling;var k=m(x,A,E.value,V);if(k===null){A===null&&(A=T);break}t&&A&&k.alternate===null&&e(x,A),w=s(k,w,y),O===null?M=k:O.sibling=k,O=k,A=T}if(E.done)return n(x,A),Se&&Yr(x,y),M;if(A===null){for(;!E.done;y++,E=S.next())E=f(x,E.value,V),E!==null&&(w=s(E,w,y),O===null?M=E:O.sibling=E,O=E);return Se&&Yr(x,y),M}for(A=r(x,A);!E.done;y++,E=S.next())E=g(A,x,y,E.value,V),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?y:E.key),w=s(E,w,y),O===null?M=E:O.sibling=E,O=E);return t&&A.forEach(function(b){return e(x,b)}),Se&&Yr(x,y),M}function R(x,w,S,V){if(typeof S=="object"&&S!==null&&S.type===Fi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case qa:e:{for(var M=S.key,O=w;O!==null;){if(O.key===M){if(M=S.type,M===Fi){if(O.tag===7){n(x,O.sibling),w=i(O,S.props.children),w.return=x,x=w;break e}}else if(O.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ar&&Zg(M)===O.type){n(x,O.sibling),w=i(O,S.props),w.ref=no(x,O,S),w.return=x,x=w;break e}n(x,O);break}else e(x,O);O=O.sibling}S.type===Fi?(w=li(S.props.children,x.mode,V,S.key),w.return=x,x=w):(V=kl(S.type,S.key,S.props,null,x.mode,V),V.ref=no(x,w,S),V.return=x,x=V)}return o(x);case ji:e:{for(O=S.key;w!==null;){if(w.key===O)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(x,w.sibling),w=i(w,S.children||[]),w.return=x,x=w;break e}else{n(x,w);break}else e(x,w);w=w.sibling}w=ah(S,x.mode,V),w.return=x,x=w}return o(x);case ar:return O=S._init,R(x,w,O(S._payload),V)}if(co(S))return I(x,w,S,V);if(Xs(S))return P(x,w,S,V);il(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(x,w.sibling),w=i(w,S),w.return=x,x=w):(n(x,w),w=oh(S,x.mode,V),w.return=x,x=w),o(x)):n(x,w)}return R}var us=aw(!0),lw=aw(!1),ru=Lr(null),iu=null,qi=null,Wf=null;function Hf(){Wf=qi=iu=null}function Kf(t){var e=ru.current;xe(ru),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){iu=t,Wf=qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(Wf!==t)if(t={context:t,memoizedValue:e,next:null},qi===null){if(iu===null)throw Error(U(308));qi=t,iu.dependencies={lanes:0,firstContext:t}}else qi=qi.next=t;return e}var ti=null;function qf(t){ti===null?ti=[t]:ti.push(t)}function uw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Hn(t,r)}function Hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function Gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Hn(t,n)}return i=r.interleaved,i===null?(e.next=e,qf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Hn(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Df(t,n)}}function ey(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function su(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,g=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,P=l;switch(m=e,g=n,P.tag){case 1:if(I=P.payload,typeof I=="function"){f=I.call(g,f,m);break e}f=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=P.payload,m=typeof I=="function"?I.call(g,f,m):I,m==null)break e;f=ke({},f,m);break e;case 2:lr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else g={eventTime:g,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=g,u=f):d=d.next=g,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gi|=o,t.lanes=o,t.memoizedState=f}}function ty(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ma={},Sn=Lr(ma),Go=Lr(ma),Qo=Lr(ma);function ni(t){if(t===ma)throw Error(U(174));return t}function Qf(t,e){switch(ye(Qo,e),ye(Go,t),ye(Sn,ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kh(e,t)}xe(Sn),ye(Sn,e)}function cs(){xe(Sn),xe(Go),xe(Qo)}function hw(t){ni(Qo.current);var e=ni(Sn.current),n=Kh(e,t.type);e!==n&&(ye(Go,t),ye(Sn,n))}function Yf(t){Go.current===t&&(xe(Sn),xe(Go))}var Ce=Lr(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eh=[];function Xf(){for(var t=0;t<eh.length;t++)eh[t]._workInProgressVersionPrimary=null;eh.length=0}var Sl=Xn.ReactCurrentDispatcher,th=Xn.ReactCurrentBatchConfig,mi=0,Pe=null,ze=null,qe=null,au=!1,So=!1,Yo=0,lA=0;function ut(){throw Error(U(321))}function Jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pn(t[n],e[n]))return!1;return!0}function Zf(t,e,n,r,i,s){if(mi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?dA:fA,t=n(r,i),So){s=0;do{if(So=!1,Yo=0,25<=s)throw Error(U(301));s+=1,qe=ze=null,e.updateQueue=null,Sl.current=pA,t=n(r,i)}while(So)}if(Sl.current=lu,e=ze!==null&&ze.next!==null,mi=0,qe=ze=Pe=null,au=!1,e)throw Error(U(300));return t}function ep(){var t=Yo!==0;return Yo=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Pe.memoizedState=qe=t:qe=qe.next=t,qe}function Zt(){if(ze===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=qe===null?Pe.memoizedState:qe.next;if(e!==null)qe=e,ze=t;else{if(t===null)throw Error(U(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},qe===null?Pe.memoizedState=qe=t:qe=qe.next=t}return qe}function Xo(t,e){return typeof e=="function"?e(t):e}function nh(t){var e=Zt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((mi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Pe.lanes|=d,gi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,pn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rh(t){var e=Zt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pn(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dw(){}function fw(t,e){var n=Pe,r=Zt(),i=e(),s=!pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,tp(gw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Jo(9,mw.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(U(349));mi&30||pw(n,e,i)}return i}function pw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mw(t,e,n,r){e.value=n,e.getSnapshot=r,yw(e)&&vw(t)}function gw(t,e,n){return n(function(){yw(e)&&vw(t)})}function yw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pn(t,n)}catch{return!0}}function vw(t){var e=Hn(t,1);e!==null&&hn(e,t,1,-1)}function ny(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=hA.bind(null,Pe,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _w(){return Zt().memoizedState}function Il(t,e,n,r){var i=_n();Pe.flags|=t,i.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function Wu(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(ze!==null){var o=ze.memoizedState;if(s=o.destroy,r!==null&&Jf(r,o.deps)){i.memoizedState=Jo(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Jo(1|e,n,s,r)}function ry(t,e){return Il(8390656,8,t,e)}function tp(t,e){return Wu(2048,8,t,e)}function ww(t,e){return Wu(4,2,t,e)}function xw(t,e){return Wu(4,4,t,e)}function Tw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ew(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4,4,Tw.bind(null,e,t),n)}function np(){}function Sw(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Iw(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Aw(t,e,n){return mi&21?(pn(n,e)||(n=b_(),Pe.lanes|=n,gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function uA(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=th.transition;th.transition={};try{t(!1),e()}finally{de=n,th.transition=r}}function Cw(){return Zt().memoizedState}function cA(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pw(t))kw(e,n);else if(n=uw(t,e,n,r),n!==null){var i=wt();hn(n,t,r,i),Rw(n,e,r)}}function hA(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pw(t))kw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pn(l,o)){var u=e.interleaved;u===null?(i.next=i,qf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=uw(t,e,i,r),n!==null&&(i=wt(),hn(n,t,r,i),Rw(n,e,r))}}function Pw(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function kw(t,e){So=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Df(t,n)}}var lu={readContext:Jt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},dA={readContext:Jt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:ry,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,Tw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cA.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:ny,useDebugValue:np,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=ny(!1),e=t[0];return t=uA.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=_n();if(Se){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ge===null)throw Error(U(349));mi&30||pw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ry(gw.bind(null,r,s,t),[t]),r.flags|=2048,Jo(9,mw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_n(),e=Ge.identifierPrefix;if(Se){var n=zn,r=Bn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fA={readContext:Jt,useCallback:Sw,useContext:Jt,useEffect:tp,useImperativeHandle:Ew,useInsertionEffect:ww,useLayoutEffect:xw,useMemo:Iw,useReducer:nh,useRef:_w,useState:function(){return nh(Xo)},useDebugValue:np,useDeferredValue:function(t){var e=Zt();return Aw(e,ze.memoizedState,t)},useTransition:function(){var t=nh(Xo)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:dw,useSyncExternalStore:fw,useId:Cw,unstable_isNewReconciler:!1},pA={readContext:Jt,useCallback:Sw,useContext:Jt,useEffect:tp,useImperativeHandle:Ew,useInsertionEffect:ww,useLayoutEffect:xw,useMemo:Iw,useReducer:rh,useRef:_w,useState:function(){return rh(Xo)},useDebugValue:np,useDeferredValue:function(t){var e=Zt();return ze===null?e.memoizedState=t:Aw(e,ze.memoizedState,t)},useTransition:function(){var t=rh(Xo)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:dw,useSyncExternalStore:fw,useId:Cw,unstable_isNewReconciler:!1};function an(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hu={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=xr(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(hn(e,t,i,r),El(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=xr(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(hn(e,t,i,r),El(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=xr(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=_r(t,i,r),e!==null&&(hn(e,t,r,n),El(e,t,r))}};function iy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,r)||!Wo(i,s):!0}function bw(t,e,n){var r=!1,i=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=kt(e)?fi:mt.current,r=e.contextTypes,s=(r=r!=null)?as(t,i):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hu.enqueueReplaceState(e,e.state,null)}function pd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Gf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=kt(e)?fi:mt.current,i.context=as(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hu.enqueueReplaceState(i,i.state,null),su(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e){try{var n="",r=e;do n+=US(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ih(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mA=typeof WeakMap=="function"?WeakMap:Map;function Vw(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cu||(cu=!0,Id=r),md(t,e)},n}function Dw(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){md(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function oy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kA.bind(null,t,e,n),e.then(t,t))}function ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ly(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var gA=Xn.ReactCurrentOwner,Ct=!1;function yt(t,e,n,r){e.child=t===null?lw(e,null,n,r):us(e,t.child,n,r)}function uy(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=Zf(t,e,n,r,s,i),n=ep(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(Se&&n&&zf(e),e.flags|=1,yt(t,e,r,i),e.child)}function cy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Nw(t,e,s,r,i)):(t=kl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,r)&&t.ref===e.ref)return Kn(t,e,i)}return e.flags|=1,t=Tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Nw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wo(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,Kn(t,e,i)}return gd(t,e,n,r,i)}function Mw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Qi,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Qi,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Qi,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Qi,Nt),Nt|=r;return yt(t,e,i,n),e.child}function Lw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gd(t,e,n,r,i){var s=kt(n)?fi:mt.current;return s=as(e,s),rs(e,i),n=Zf(t,e,n,r,s,i),r=ep(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(Se&&r&&zf(e),e.flags|=1,yt(t,e,n,i),e.child)}function hy(t,e,n,r,i){if(kt(n)){var s=!0;eu(e)}else s=!1;if(rs(e,i),e.stateNode===null)Al(t,e),bw(e,n,r),pd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jt(c):(c=kt(n)?fi:mt.current,c=as(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&sy(e,o,r,c),lr=!1;var m=e.memoizedState;o.state=m,su(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Pt.current||lr?(typeof d=="function"&&(fd(e,n,d,r),u=e.memoizedState),(l=lr||iy(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:an(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Jt(u):(u=kt(n)?fi:mt.current,u=as(e,u));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&sy(e,o,r,u),lr=!1,m=e.memoizedState,o.state=m,su(e,r,o,i);var I=e.memoizedState;l!==f||m!==I||Pt.current||lr?(typeof g=="function"&&(fd(e,n,g,r),I=e.memoizedState),(c=lr||iy(e,n,c,r,m,I,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return yd(t,e,n,r,s,i)}function yd(t,e,n,r,i,s){Lw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Yg(e,n,!1),Kn(t,e,s);r=e.stateNode,gA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=us(e,t.child,null,s),e.child=us(e,null,l,s)):yt(t,e,l,s),e.memoizedState=r.state,i&&Yg(e,n,!0),e.child}function Ow(t){var e=t.stateNode;e.pendingContext?Qg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qg(t,e.context,!1),Qf(t,e.containerInfo)}function dy(t,e,n,r,i){return ls(),$f(i),e.flags|=256,yt(t,e,n,r),e.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function jw(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ce,i&1),t===null)return hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,r,0,null),t=li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_d(n),e.memoizedState=vd,t):rp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tr(l,s):(s=li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vd,r}return s=t.child,t=s.sibling,r=Tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rp(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,r){return r!==null&&$f(r),us(e,t.child,null,n),t=rp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ih(Error(U(422))),sl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gu({mode:"visible",children:r.children},i,0,null),s=li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&us(e,t.child,null,o),e.child.memoizedState=_d(o),e.memoizedState=vd,s);if(!(e.mode&1))return sl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=ih(s,r,void 0),sl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ct||l){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Hn(t,i),hn(r,t,i,-1))}return up(),r=ih(Error(U(421))),sl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=RA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=vr(i.nextSibling),Ot=e,Se=!0,un=null,t!==null&&(Kt[qt++]=Bn,Kt[qt++]=zn,Kt[qt++]=pi,Bn=t.id,zn=t.overflow,pi=e),e=rp(e,r.children),e.flags|=4096,e)}function fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dd(t.return,e,n)}function sh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Fw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fy(t,n,e);else if(t.tag===19)fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ou(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sh(e,!0,n,null,s);break;case"together":sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vA(t,e,n){switch(e.tag){case 3:Ow(e),ls();break;case 5:hw(e);break;case 1:kt(e.type)&&eu(e);break;case 4:Qf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(ru,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?jw(t,e,n):(ye(Ce,Ce.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);ye(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Mw(t,e,n)}return Kn(t,e,n)}var Bw,wd,zw,Uw;Bw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wd=function(){};zw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ni(Sn.current);var s=null;switch(n){case"input":i=Uh(t,i),r=Uh(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Hh(t,i),r=Hh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jl)}qh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Uw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ro(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _A(t,e,n){var r=e.pendingProps;switch(Uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return kt(e.type)&&Zl(),ct(e),null;case 3:return r=e.stateNode,cs(),xe(Pt),xe(mt),Xf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,un!==null&&(Pd(un),un=null))),wd(t,e),ct(e),null;case 5:Yf(e);var i=ni(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)zw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return ct(e),null}if(t=ni(Sn.current),rl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tn]=e,r[qo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)_e(fo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Tg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Sg(r,s),_e("invalid",r)}qh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,l,t),i=["children",""+l]):Oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ga(r),Eg(r,s,!0);break;case"textarea":Ga(r),Ig(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tn]=e,t[qo]=r,Bw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gh(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)_e(fo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Tg(t,r),i=Uh(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Sg(t,r),i=Hh(t,r),_e("invalid",t);break;default:i=r}qh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?__(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&y_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jo(t,u):typeof u=="number"&&jo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&Cf(t,s,u,o))}switch(n){case"input":Ga(t),Eg(t,r,!1);break;case"textarea":Ga(t),Ig(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)Uw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ni(Qo.current),ni(Sn.current),rl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return ct(e),null;case 13:if(xe(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Mt!==null&&e.mode&1&&!(e.flags&128))ow(),ls(),e.flags|=98560,s=!1;else if(s=rl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Tn]=e}else ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else un!==null&&(Pd(un),un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?$e===0&&($e=3):up())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return cs(),wd(t,e),t===null&&Ho(e.stateNode.containerInfo),ct(e),null;case 10:return Kf(e.type._context),ct(e),null;case 17:return kt(e.type)&&Zl(),ct(e),null;case 19:if(xe(Ce),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ro(s,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ou(t),o!==null){for(e.flags|=128,ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>ds&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=ou(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return ct(e),null}else 2*Me()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=Ce.current,ye(Ce,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return lp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function wA(t,e){switch(Uf(e),e.tag){case 1:return kt(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cs(),xe(Pt),xe(mt),Xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yf(e),null;case 13:if(xe(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Ce),null;case 4:return cs(),null;case 10:return Kf(e.type._context),null;case 22:case 23:return lp(),null;case 24:return null;default:return null}}var ol=!1,ft=!1,xA=typeof WeakSet=="function"?WeakSet:Set,W=null;function Gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function xd(t,e,n){try{n()}catch(r){De(t,e,r)}}var py=!1;function TA(t,e){if(id=Ql,t=q_(),Bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(sd={focusedElem:t,selectionRange:n},Ql=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var P=I.memoizedProps,R=I.memoizedState,x=e.stateNode,w=x.getSnapshotBeforeUpdate(e.elementType===e.type?P:an(e.type,P),R);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){De(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return I=py,py=!1,I}function Io(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xd(e,n,s)}i=i.next}while(i!==r)}}function Ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $w(t){var e=t.alternate;e!==null&&(t.alternate=null,$w(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[qo],delete e[ld],delete e[iA],delete e[sA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ww(t){return t.tag===5||t.tag===3||t.tag===4}function my(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ww(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}var Xe=null,ln=!1;function ir(t,e,n){for(n=n.child;n!==null;)Hw(t,e,n),n=n.sibling}function Hw(t,e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ju,n)}catch{}switch(n.tag){case 5:ft||Gi(n,e);case 6:var r=Xe,i=ln;Xe=null,ir(t,e,n),Xe=r,ln=i,Xe!==null&&(ln?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(ln?(t=Xe,n=n.stateNode,t.nodeType===8?Jc(t.parentNode,n):t.nodeType===1&&Jc(t,n),Uo(t)):Jc(Xe,n.stateNode));break;case 4:r=Xe,i=ln,Xe=n.stateNode.containerInfo,ln=!0,ir(t,e,n),Xe=r,ln=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xd(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!ft&&(Gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,ir(t,e,n),ft=r):ir(t,e,n);break;default:ir(t,e,n)}}function gy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xA),e.forEach(function(r){var i=bA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,ln=!1;break e;case 3:Xe=l.stateNode.containerInfo,ln=!0;break e;case 4:Xe=l.stateNode.containerInfo,ln=!0;break e}l=l.return}if(Xe===null)throw Error(U(160));Hw(s,o,i),Xe=null,ln=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kw(e,t),e=e.sibling}function Kw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),vn(t),r&4){try{Io(3,t,t.return),Ku(3,t)}catch(P){De(t,t.return,P)}try{Io(5,t,t.return)}catch(P){De(t,t.return,P)}}break;case 1:rn(e,t),vn(t),r&512&&n!==null&&Gi(n,n.return);break;case 5:if(rn(e,t),vn(t),r&512&&n!==null&&Gi(n,n.return),t.flags&32){var i=t.stateNode;try{jo(i,"")}catch(P){De(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&p_(i,s),Gh(l,o);var c=Gh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?__(i,f):d==="dangerouslySetInnerHTML"?y_(i,f):d==="children"?jo(i,f):Cf(i,d,f,c)}switch(l){case"input":$h(i,s);break;case"textarea":m_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Zi(i,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[qo]=s}catch(P){De(t,t.return,P)}}break;case 6:if(rn(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){De(t,t.return,P)}}break;case 3:if(rn(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(P){De(t,t.return,P)}break;case 4:rn(e,t),vn(t);break;case 13:rn(e,t),vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(op=Me())),r&4&&gy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(c=ft)||d,rn(e,t),ft=c):rn(e,t),vn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(f=W=d;W!==null;){switch(m=W,g=m.child,m.tag){case 0:case 11:case 14:case 15:Io(4,m,m.return);break;case 1:Gi(m,m.return);var I=m.stateNode;if(typeof I.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(P){De(r,n,P)}}break;case 5:Gi(m,m.return);break;case 22:if(m.memoizedState!==null){vy(f);continue}}g!==null?(g.return=m,W=g):vy(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=v_("display",o))}catch(P){De(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){De(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:rn(e,t),vn(t),r&4&&gy(t);break;case 21:break;default:rn(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ww(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jo(i,""),r.flags&=-33);var s=my(t);Sd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=my(t);Ed(t,l,o);break;default:throw Error(U(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function EA(t,e,n){W=t,qw(t)}function qw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ol;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ft;l=ol;var c=ft;if(ol=o,(ft=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?_y(i):u!==null?(u.return=o,W=u):_y(i);for(;s!==null;)W=s,qw(s),s=s.sibling;W=i,ol=l,ft=c}yy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):yy(t)}}function yy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||Ku(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ty(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ty(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Uo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ft||e.flags&512&&Td(e)}catch(m){De(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function vy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function _y(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ku(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{Td(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{Td(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var SA=Math.ceil,uu=Xn.ReactCurrentDispatcher,ip=Xn.ReactCurrentOwner,Yt=Xn.ReactCurrentBatchConfig,ae=0,Ge=null,je=null,nt=0,Nt=0,Qi=Lr(0),$e=0,Zo=null,gi=0,qu=0,sp=0,Ao=null,It=null,op=0,ds=1/0,jn=null,cu=!1,Id=null,wr=null,al=!1,dr=null,hu=0,Co=0,Ad=null,Cl=-1,Pl=0;function wt(){return ae&6?Me():Cl!==-1?Cl:Cl=Me()}function xr(t){return t.mode&1?ae&2&&nt!==0?nt&-nt:aA.transition!==null?(Pl===0&&(Pl=b_()),Pl):(t=de,t!==0||(t=window.event,t=t===void 0?16:j_(t.type)),t):1}function hn(t,e,n,r){if(50<Co)throw Co=0,Ad=null,Error(U(185));da(t,n,r),(!(ae&2)||t!==Ge)&&(t===Ge&&(!(ae&2)&&(qu|=n),$e===4&&cr(t,nt)),Rt(t,r),n===1&&ae===0&&!(e.mode&1)&&(ds=Me()+500,$u&&Or()))}function Rt(t,e){var n=t.callbackNode;aI(t,e);var r=Gl(t,t===Ge?nt:0);if(r===0)n!==null&&Pg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pg(n),e===1)t.tag===0?oA(wy.bind(null,t)):rw(wy.bind(null,t)),nA(function(){!(ae&6)&&Or()}),n=null;else{switch(V_(r)){case 1:n=Vf;break;case 4:n=k_;break;case 16:n=ql;break;case 536870912:n=R_;break;default:n=ql}n=tx(n,Gw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gw(t,e){if(Cl=-1,Pl=0,ae&6)throw Error(U(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=Gl(t,t===Ge?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=du(t,r);else{e=r;var i=ae;ae|=2;var s=Yw();(Ge!==t||nt!==e)&&(jn=null,ds=Me()+500,ai(t,e));do try{CA();break}catch(l){Qw(t,l)}while(!0);Hf(),uu.current=s,ae=i,je!==null?e=0:(Ge=null,nt=0,e=$e)}if(e!==0){if(e===2&&(i=Zh(t),i!==0&&(r=i,e=Cd(t,i))),e===1)throw n=Zo,ai(t,0),cr(t,r),Rt(t,Me()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!IA(i)&&(e=du(t,r),e===2&&(s=Zh(t),s!==0&&(r=s,e=Cd(t,s))),e===1))throw n=Zo,ai(t,0),cr(t,r),Rt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Xr(t,It,jn);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=op+500-Me(),10<e)){if(Gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ad(Xr.bind(null,t,It,jn),e);break}Xr(t,It,jn);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*SA(r/1960))-r,10<r){t.timeoutHandle=ad(Xr.bind(null,t,It,jn),r);break}Xr(t,It,jn);break;case 5:Xr(t,It,jn);break;default:throw Error(U(329))}}}return Rt(t,Me()),t.callbackNode===n?Gw.bind(null,t):null}function Cd(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(ai(t,e).flags|=256),t=du(t,e),t!==2&&(e=It,It=n,e!==null&&Pd(e)),t}function Pd(t){It===null?It=t:It.push.apply(It,t)}function IA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~sp,e&=~qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function wy(t){if(ae&6)throw Error(U(327));is();var e=Gl(t,0);if(!(e&1))return Rt(t,Me()),null;var n=du(t,e);if(t.tag!==0&&n===2){var r=Zh(t);r!==0&&(e=r,n=Cd(t,r))}if(n===1)throw n=Zo,ai(t,0),cr(t,e),Rt(t,Me()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,It,jn),Rt(t,Me()),null}function ap(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ds=Me()+500,$u&&Or())}}function yi(t){dr!==null&&dr.tag===0&&!(ae&6)&&is();var e=ae;ae|=1;var n=Yt.transition,r=de;try{if(Yt.transition=null,de=1,t)return t()}finally{de=r,Yt.transition=n,ae=e,!(ae&6)&&Or()}}function lp(){Nt=Qi.current,xe(Qi)}function ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tA(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zl();break;case 3:cs(),xe(Pt),xe(mt),Xf();break;case 5:Yf(r);break;case 4:cs();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:Kf(r.type._context);break;case 22:case 23:lp()}n=n.return}if(Ge=t,je=t=Tr(t.current,null),nt=Nt=e,$e=0,Zo=null,sp=qu=gi=0,It=Ao=null,ti!==null){for(e=0;e<ti.length;e++)if(n=ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ti=null}return t}function Qw(t,e){do{var n=je;try{if(Hf(),Sl.current=lu,au){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}au=!1}if(mi=0,qe=ze=Pe=null,So=!1,Yo=0,ip.current=null,n===null||n.return===null){$e=1,Zo=e,je=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=nt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=ay(o);if(g!==null){g.flags&=-257,ly(g,o,l,s,e),g.mode&1&&oy(s,c,e),e=g,u=c;var I=e.updateQueue;if(I===null){var P=new Set;P.add(u),e.updateQueue=P}else I.add(u);break e}else{if(!(e&1)){oy(s,c,e),up();break e}u=Error(U(426))}}else if(Se&&l.mode&1){var R=ay(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),ly(R,o,l,s,e),$f(hs(u,l));break e}}s=u=hs(u,l),$e!==4&&($e=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=Vw(s,u,e);ey(s,x);break e;case 1:l=u;var w=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(wr===null||!wr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=Dw(s,l,e);ey(s,V);break e}}s=s.return}while(s!==null)}Jw(n)}catch(M){e=M,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function Yw(){var t=uu.current;return uu.current=lu,t===null?lu:t}function up(){($e===0||$e===3||$e===2)&&($e=4),Ge===null||!(gi&268435455)&&!(qu&268435455)||cr(Ge,nt)}function du(t,e){var n=ae;ae|=2;var r=Yw();(Ge!==t||nt!==e)&&(jn=null,ai(t,e));do try{AA();break}catch(i){Qw(t,i)}while(!0);if(Hf(),ae=n,uu.current=r,je!==null)throw Error(U(261));return Ge=null,nt=0,$e}function AA(){for(;je!==null;)Xw(je)}function CA(){for(;je!==null&&!JS();)Xw(je)}function Xw(t){var e=ex(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?Jw(t):je=e,ip.current=null}function Jw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wA(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,je=null;return}}else if(n=_A(n,e,Nt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);$e===0&&($e=5)}function Xr(t,e,n){var r=de,i=Yt.transition;try{Yt.transition=null,de=1,PA(t,e,n,r)}finally{Yt.transition=i,de=r}return null}function PA(t,e,n,r){do is();while(dr!==null);if(ae&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lI(t,s),t===Ge&&(je=Ge=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,tx(ql,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=de;de=1;var l=ae;ae|=4,ip.current=null,TA(t,n),Kw(n,t),GI(sd),Ql=!!id,sd=id=null,t.current=n,EA(n),ZS(),ae=l,de=o,Yt.transition=s}else t.current=n;if(al&&(al=!1,dr=t,hu=i),s=t.pendingLanes,s===0&&(wr=null),nI(n.stateNode),Rt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cu)throw cu=!1,t=Id,Id=null,t;return hu&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===Ad?Co++:(Co=0,Ad=t):Co=0,Or(),null}function is(){if(dr!==null){var t=V_(hu),e=Yt.transition,n=de;try{if(Yt.transition=null,de=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,hu=0,ae&6)throw Error(U(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Io(8,d,s)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var m=d.sibling,g=d.return;if($w(d),d===c){W=null;break}if(m!==null){m.return=g,W=m;break}W=g}}}var I=s.alternate;if(I!==null){var P=I.child;if(P!==null){I.child=null;do{var R=P.sibling;P.sibling=null,P=R}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,W=x;break e}W=s.return}}var w=t.current;for(W=w;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=w;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ku(9,l)}}catch(M){De(l,l.return,M)}if(l===o){W=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,W=V;break e}W=l.return}}if(ae=i,Or(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ju,t)}catch{}r=!0}return r}finally{de=n,Yt.transition=e}}return!1}function xy(t,e,n){e=hs(n,e),e=Vw(t,e,1),t=_r(t,e,1),e=wt(),t!==null&&(da(t,1,e),Rt(t,e))}function De(t,e,n){if(t.tag===3)xy(t,t,n);else for(;e!==null;){if(e.tag===3){xy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=hs(n,t),t=Dw(e,t,1),e=_r(e,t,1),t=wt(),e!==null&&(da(e,1,t),Rt(e,t));break}}e=e.return}}function kA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(nt&n)===n&&($e===4||$e===3&&(nt&130023424)===nt&&500>Me()-op?ai(t,0):sp|=n),Rt(t,e)}function Zw(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=wt();t=Hn(t,e),t!==null&&(da(t,e,n),Rt(t,n))}function RA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zw(t,n)}function bA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),Zw(t,n)}var ex;ex=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,vA(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Se&&e.flags&1048576&&iw(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Al(t,e),t=e.pendingProps;var i=as(e,mt.current);rs(e,n),i=Zf(null,e,r,t,i,n);var s=ep();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,eu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gf(e),i.updater=Hu,e.stateNode=i,i._reactInternals=e,pd(e,r,t,n),e=yd(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&zf(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DA(r),t=an(r,t),i){case 0:e=gd(null,e,r,t,n);break e;case 1:e=hy(null,e,r,t,n);break e;case 11:e=uy(null,e,r,t,n);break e;case 14:e=cy(null,e,r,an(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),gd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),hy(t,e,r,i,n);case 3:e:{if(Ow(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cw(t,e),su(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=hs(Error(U(423)),e),e=dy(t,e,r,n,i);break e}else if(r!==i){i=hs(Error(U(424)),e),e=dy(t,e,r,n,i);break e}else for(Mt=vr(e.stateNode.containerInfo.firstChild),Ot=e,Se=!0,un=null,n=lw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),r===i){e=Kn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return hw(e),t===null&&hd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,od(r,i)?o=null:s!==null&&od(r,s)&&(e.flags|=32),Lw(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&hd(e),null;case 13:return jw(t,e,n);case 4:return Qf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=us(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),uy(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(ru,r._currentValue),r._currentValue=o,s!==null)if(pn(s.value,o)){if(s.children===i.children&&!Pt.current){e=Kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Un(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),dd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=Jt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=an(r,e.pendingProps),i=an(r.type,i),cy(t,e,r,i,n);case 15:return Nw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Al(t,e),e.tag=1,kt(r)?(t=!0,eu(e)):t=!1,rs(e,n),bw(e,r,i),pd(e,r,i,n),yd(null,e,r,!0,t,n);case 19:return Fw(t,e,n);case 22:return Mw(t,e,n)}throw Error(U(156,e.tag))};function tx(t,e){return P_(t,e)}function VA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new VA(t,e,n,r)}function cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DA(t){if(typeof t=="function")return cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kf)return 11;if(t===Rf)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return li(n.children,i,s,e);case Pf:o=8,i|=8;break;case jh:return t=Gt(12,n,e,i|2),t.elementType=jh,t.lanes=s,t;case Fh:return t=Gt(13,n,e,i),t.elementType=Fh,t.lanes=s,t;case Bh:return t=Gt(19,n,e,i),t.elementType=Bh,t.lanes=s,t;case h_:return Gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u_:o=10;break e;case c_:o=9;break e;case kf:o=11;break e;case Rf:o=14;break e;case ar:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function li(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function Gu(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=h_,t.lanes=n,t.stateNode={isHidden:!1},t}function oh(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function ah(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function NA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hp(t,e,n,r,i,s,o,l,u){return t=new NA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(s),t}function MA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nx(t){if(!t)return Pr;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(kt(n))return nw(t,n,e)}return e}function rx(t,e,n,r,i,s,o,l,u){return t=hp(n,r,!0,t,i,s,o,l,u),t.context=nx(null),n=t.current,r=wt(),i=xr(n),s=Un(r,i),s.callback=e??null,_r(n,s,i),t.current.lanes=i,da(t,i,r),Rt(t,r),t}function Qu(t,e,n,r){var i=e.current,s=wt(),o=xr(i);return n=nx(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(i,e,o),t!==null&&(hn(t,i,o,s),El(t,i,o)),o}function fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dp(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function LA(){return null}var ix=typeof reportError=="function"?reportError:function(t){console.error(t)};function fp(t){this._internalRoot=t}Yu.prototype.render=fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Qu(t,e,null,null)};Yu.prototype.unmount=fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yi(function(){Qu(null,t,null,null)}),e[Wn]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=M_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&O_(t)}};function pp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ey(){}function OA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=fu(o);s.call(c)}}var o=rx(e,r,t,0,null,!1,!1,"",Ey);return t._reactRootContainer=o,t[Wn]=o.current,Ho(t.nodeType===8?t.parentNode:t),yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=fu(u);l.call(c)}}var u=hp(t,0,!1,null,null,!1,!1,"",Ey);return t._reactRootContainer=u,t[Wn]=u.current,Ho(t.nodeType===8?t.parentNode:t),yi(function(){Qu(e,u,n,r)}),u}function Ju(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=fu(o);l.call(u)}}Qu(e,o,t,i)}else o=OA(n,e,t,i,r);return fu(o)}D_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ho(e.pendingLanes);n!==0&&(Df(e,n|1),Rt(e,Me()),!(ae&6)&&(ds=Me()+500,Or()))}break;case 13:yi(function(){var r=Hn(t,1);if(r!==null){var i=wt();hn(r,t,1,i)}}),dp(t,1)}};Nf=function(t){if(t.tag===13){var e=Hn(t,134217728);if(e!==null){var n=wt();hn(e,t,134217728,n)}dp(t,134217728)}};N_=function(t){if(t.tag===13){var e=xr(t),n=Hn(t,e);if(n!==null){var r=wt();hn(n,t,e,r)}dp(t,e)}};M_=function(){return de};L_=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Yh=function(t,e,n){switch(e){case"input":if($h(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uu(r);if(!i)throw Error(U(90));f_(r),$h(r,i)}}}break;case"textarea":m_(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};T_=ap;E_=yi;var jA={usingClientEntryPoint:!1,Events:[pa,$i,Uu,w_,x_,ap]},io={findFiberByHostInstance:ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FA={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A_(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||LA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{ju=ll.inject(FA),En=ll}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jA;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pp(e))throw Error(U(200));return MA(t,e,null,n)};Ut.createRoot=function(t,e){if(!pp(t))throw Error(U(299));var n=!1,r="",i=ix;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hp(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,Ho(t.nodeType===8?t.parentNode:t),new fp(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=A_(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return yi(t)};Ut.hydrate=function(t,e,n){if(!Xu(e))throw Error(U(200));return Ju(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!pp(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ix;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rx(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,Ho(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yu(e)};Ut.render=function(t,e,n){if(!Xu(e))throw Error(U(200));return Ju(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(U(40));return t._reactRootContainer?(yi(function(){Ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};Ut.unstable_batchedUpdates=ap;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Ju(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sx)}catch(t){console.error(t)}}sx(),s_.exports=Ut;var BA=s_.exports,Sy=BA;Lh.createRoot=Sy.createRoot,Lh.hydrateRoot=Sy.hydrateRoot;const mp=j.createContext({});function gp(t){const e=j.useRef(null);return e.current===null&&(e.current=t()),e.current}const zA=typeof window<"u",ox=zA?j.useLayoutEffect:j.useEffect,Zu=j.createContext(null);function yp(t,e){t.indexOf(e)===-1&&t.push(e)}function pu(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const kn=(t,e,n)=>n>e?e:n<t?t:n;let vp=()=>{};const kr={},ax=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function lx(t){return typeof t=="object"&&t!==null}const ux=t=>/^0[^.\s]+$/u.test(t);function cx(t){let e;return()=>(e===void 0&&(e=t()),e)}const Xt=t=>t,UA=(t,e)=>n=>e(t(n)),ga=(...t)=>t.reduce(UA),ea=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r};class _p{constructor(){this.subscriptions=[]}add(e){return yp(this.subscriptions,e),()=>pu(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jt=t=>t*1e3,Qt=t=>t/1e3;function hx(t,e){return e?t*(1e3/e):0}const dx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,$A=1e-7,WA=12;function HA(t,e,n,r,i){let s,o,l=0;do o=e+(n-e)/2,s=dx(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>$A&&++l<WA);return o}function ya(t,e,n,r){if(t===e&&n===r)return Xt;const i=s=>HA(s,0,1,t,n);return s=>s===0||s===1?s:dx(i(s),e,r)}const fx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,px=t=>e=>1-t(1-e),mx=ya(.33,1.53,.69,.99),wp=px(mx),gx=fx(wp),yx=t=>t>=1?1:(t*=2)<1?.5*wp(t):.5*(2-Math.pow(2,-10*(t-1))),xp=t=>1-Math.sin(Math.acos(t)),vx=px(xp),_x=fx(xp),KA=ya(.42,0,1,1),qA=ya(0,0,.58,1),wx=ya(.42,0,.58,1),GA=t=>Array.isArray(t)&&typeof t[0]!="number",xx=t=>Array.isArray(t)&&typeof t[0]=="number",QA={linear:Xt,easeIn:KA,easeInOut:wx,easeOut:qA,circIn:xp,circInOut:_x,circOut:vx,backIn:wp,backInOut:gx,backOut:mx,anticipate:yx},YA=t=>typeof t=="string",Iy=t=>{if(xx(t)){vp(t.length===4);const[e,n,r,i]=t;return ya(e,n,r,i)}else if(YA(t))return QA[t];return t},ul=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function XA(t,e){let n=new Set,r=new Set,i=!1,s=!1;const o=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function u(d){o.has(d)&&(c.schedule(d),t()),d(l)}const c={schedule:(d,f=!1,m=!1)=>{const I=m&&i?n:r;return f&&o.add(d),I.add(d),d},cancel:d=>{r.delete(d),o.delete(d)},process:d=>{if(l=d,i){s=!0;return}i=!0;const f=n;n=r,r=f,n.forEach(u),n.clear(),i=!1,s&&(s=!1,c.process(d))}};return c}const JA=40;function Tx(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=ul.reduce((S,V)=>(S[V]=XA(s),S),{}),{setup:l,read:u,resolveKeyframes:c,preUpdate:d,update:f,preRender:m,render:g,postRender:I}=o,P=()=>{const S=kr.useManualTiming,V=S?i.timestamp:performance.now();n=!1,S||(i.delta=r?1e3/60:Math.max(Math.min(V-i.timestamp,JA),1)),i.timestamp=V,i.isProcessing=!0,l.process(i),u.process(i),c.process(i),d.process(i),f.process(i),m.process(i),g.process(i),I.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(P))},R=()=>{n=!0,r=!0,i.isProcessing||t(P)};return{schedule:ul.reduce((S,V)=>{const M=o[V];return S[V]=(O,A=!1,y=!1)=>(n||R(),M.schedule(O,A,y)),S},{}),cancel:S=>{for(let V=0;V<ul.length;V++)o[ul[V]].cancel(S)},state:i,steps:o}}const{schedule:me,cancel:Rr,state:Je,steps:lh}=Tx(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xt,!0);let Rl;function ZA(){Rl=void 0}const vt={now:()=>(Rl===void 0&&vt.set(Je.isProcessing||kr.useManualTiming?Je.timestamp:performance.now()),Rl),set:t=>{Rl=t,queueMicrotask(ZA)}},Ex=t=>e=>typeof e=="string"&&e.startsWith(t),Sx=Ex("--"),eC=Ex("var(--"),Tp=t=>eC(t)?tC.test(t.split("/*")[0].trim()):!1,tC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ay(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const As={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ta={...As,transform:t=>kn(0,1,t)},cl={...As,default:1},Po=t=>Math.round(t*1e5)/1e5,Ep=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function nC(t){return t==null}const rC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Sp=(t,e)=>n=>!!(typeof n=="string"&&rC.test(n)&&n.startsWith(t)||e&&!nC(n)&&Object.prototype.hasOwnProperty.call(n,e)),Ix=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,l]=r.match(Ep);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},iC=t=>kn(0,255,t),uh={...As,transform:t=>Math.round(iC(t))},ri={test:Sp("rgb","red"),parse:Ix("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+uh.transform(t)+", "+uh.transform(e)+", "+uh.transform(n)+", "+Po(ta.transform(r))+")"};function sC(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const kd={test:Sp("#"),parse:sC,transform:ri.transform},va=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),sr=va("deg"),In=va("%"),K=va("px"),oC=va("vh"),aC=va("vw"),Cy={...In,parse:t=>In.parse(t)/100,transform:t=>In.transform(t*100)},Yi={test:Sp("hsl","hue"),parse:Ix("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+In.transform(Po(e))+", "+In.transform(Po(n))+", "+Po(ta.transform(r))+")"},Oe={test:t=>ri.test(t)||kd.test(t)||Yi.test(t),parse:t=>ri.test(t)?ri.parse(t):Yi.test(t)?Yi.parse(t):kd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ri.transform(t):Yi.transform(t),getAnimatableNone:t=>{const e=Oe.parse(t);return e.alpha=0,Oe.transform(e)}},lC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function uC(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Ep))==null?void 0:e.length)||0)+(((n=t.match(lC))==null?void 0:n.length)||0)>0}const Ax="number",Cx="color",cC="var",hC="var(",Py="${}",dC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function fs(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const l=e.replace(dC,u=>(Oe.test(u)?(r.color.push(s),i.push(Cx),n.push(Oe.parse(u))):u.startsWith(hC)?(r.var.push(s),i.push(cC),n.push(u)):(r.number.push(s),i.push(Ax),n.push(parseFloat(u))),++s,Py)).split(Py);return{values:n,split:l,indexes:r,types:i}}function fC(t){return fs(t).values}function Px({split:t,types:e}){const n=t.length;return r=>{let i="";for(let s=0;s<n;s++)if(i+=t[s],r[s]!==void 0){const o=e[s];o===Ax?i+=Po(r[s]):o===Cx?i+=Oe.transform(r[s]):i+=r[s]}return i}}function pC(t){return Px(fs(t))}const mC=t=>typeof t=="number"?0:Oe.test(t)?Oe.getAnimatableNone(t):t,gC=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:mC(t);function yC(t){const e=fs(t);return Px(e)(e.values.map((r,i)=>gC(r,e.split[i])))}const dn={test:uC,parse:fC,createTransformer:pC,getAnimatableNone:yC};function ch(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function vC({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const l=n<.5?n*(1+e):n+e-n*e,u=2*n-l;i=ch(u,l,t+1/3),s=ch(u,l,t),o=ch(u,l,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function mu(t,e){return n=>n>0?e:t}const we=(t,e,n)=>t+(e-t)*n,hh=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},_C=[kd,ri,Yi],wC=t=>_C.find(e=>e.test(t));function ky(t){const e=wC(t);if(!e)return!1;let n=e.parse(t);return e===Yi&&(n=vC(n)),n}const Ry=(t,e)=>{const n=ky(t),r=ky(e);if(!n||!r)return mu(t,e);const i={...n};return s=>(i.red=hh(n.red,r.red,s),i.green=hh(n.green,r.green,s),i.blue=hh(n.blue,r.blue,s),i.alpha=we(n.alpha,r.alpha,s),ri.transform(i))},Rd=new Set(["none","hidden"]);function xC(t,e){return Rd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function TC(t,e){return n=>we(t,e,n)}function Ip(t){return typeof t=="number"?TC:typeof t=="string"?Tp(t)?mu:Oe.test(t)?Ry:IC:Array.isArray(t)?kx:typeof t=="object"?Oe.test(t)?Ry:EC:mu}function kx(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>Ip(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function EC(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=Ip(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function SC(t,e){const n=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const s=e.types[i],o=t.indexes[s][r[s]],l=t.values[o]??0;n[i]=l,r[s]++}return n}const IC=(t,e)=>{const n=dn.createTransformer(e),r=fs(t),i=fs(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Rd.has(t)&&!i.values.length||Rd.has(e)&&!r.values.length?xC(t,e):ga(kx(SC(r,i),i.values),n):mu(t,e)};function Rx(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?we(t,e,n):Ip(t)(t,e)}const AC=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>me.update(e,n),stop:()=>Rr(e),now:()=>Je.isProcessing?Je.timestamp:vt.now()}},bx=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let s=0;s<i;s++)r+=Math.round(t(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},gu=2e4;function Ap(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<gu;)e+=n,r=t.next(e);return e>=gu?1/0:e}function CC(t,e=100,n){const r=n({...t,keyframes:[0,e]}),i=Math.min(Ap(r),gu);return{type:"keyframes",ease:s=>r.next(i*s).value/e,duration:Qt(i)}}const Ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function bd(t,e){return t*Math.sqrt(1-e*e)}const PC=12;function kC(t,e,n){let r=n;for(let i=1;i<PC;i++)r=r-t(r)/e(r);return r}const dh=.001;function RC({duration:t=Ve.duration,bounce:e=Ve.bounce,velocity:n=Ve.velocity,mass:r=Ve.mass}){let i,s,o=1-e;o=kn(Ve.minDamping,Ve.maxDamping,o),t=kn(Ve.minDuration,Ve.maxDuration,Qt(t)),o<1?(i=c=>{const d=c*o,f=d*t,m=d-n,g=bd(c,o),I=Math.exp(-f);return dh-m/g*I},s=c=>{const f=c*o*t,m=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*t,I=Math.exp(-f),P=bd(Math.pow(c,2),o);return(-i(c)+dh>0?-1:1)*((m-g)*I)/P}):(i=c=>{const d=Math.exp(-c*t),f=(c-n)*t+1;return-dh+d*f},s=c=>{const d=Math.exp(-c*t),f=(n-c)*(t*t);return d*f});const l=5/t,u=kC(i,s,l);if(t=jt(t),isNaN(u))return{stiffness:Ve.stiffness,damping:Ve.damping,duration:t};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const bC=["duration","bounce"],VC=["stiffness","damping","mass"];function by(t,e){return e.some(n=>t[n]!==void 0)}function DC(t){let e={velocity:Ve.velocity,stiffness:Ve.stiffness,damping:Ve.damping,mass:Ve.mass,isResolvedFromDuration:!1,...t};if(!by(t,VC)&&by(t,bC))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*kn(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:Ve.mass,stiffness:i,damping:s}}else{const n=RC({...t,velocity:0});e={...e,...n,mass:Ve.mass},e.isResolvedFromDuration=!0}return e}function yu(t=Ve.visualDuration,e=Ve.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],l={done:!1,value:s},{stiffness:u,damping:c,mass:d,duration:f,velocity:m,isResolvedFromDuration:g}=DC({...n,velocity:-Qt(n.velocity||0)}),I=m||0,P=c/(2*Math.sqrt(u*d)),R=o-s,x=Qt(Math.sqrt(u/d)),w=Math.abs(R)<5;r||(r=w?Ve.restSpeed.granular:Ve.restSpeed.default),i||(i=w?Ve.restDelta.granular:Ve.restDelta.default);let S,V,M,O,A,y;if(P<1)M=bd(x,P),O=(I+P*x*R)/M,S=E=>{const k=Math.exp(-P*x*E);return o-k*(O*Math.sin(M*E)+R*Math.cos(M*E))},A=P*x*O+R*M,y=P*x*R-O*M,V=E=>Math.exp(-P*x*E)*(A*Math.sin(M*E)+y*Math.cos(M*E));else if(P===1){S=k=>o-Math.exp(-x*k)*(R+(I+x*R)*k);const E=I+x*R;V=k=>Math.exp(-x*k)*(x*E*k-I)}else{const E=x*Math.sqrt(P*P-1);S=re=>{const Te=Math.exp(-P*x*re),Ee=Math.min(E*re,300);return o-Te*((I+P*x*R)*Math.sinh(Ee)+E*R*Math.cosh(Ee))/E};const k=(I+P*x*R)/E,b=P*x*k-R*E,C=P*x*R-k*E;V=re=>{const Te=Math.exp(-P*x*re),Ee=Math.min(E*re,300);return Te*(b*Math.sinh(Ee)+C*Math.cosh(Ee))}}const T={calculatedDuration:g&&f||null,velocity:E=>jt(V(E)),next:E=>{if(!g&&P<1){const b=Math.exp(-P*x*E),C=Math.sin(M*E),re=Math.cos(M*E),Te=o-b*(O*C+R*re),Ee=jt(b*(A*C+y*re));return l.done=Math.abs(Ee)<=r&&Math.abs(o-Te)<=i,l.value=l.done?o:Te,l}const k=S(E);if(g)l.done=E>=f;else{const b=jt(V(E));l.done=Math.abs(b)<=r&&Math.abs(o-k)<=i}return l.value=l.done?o:k,l},toString:()=>{const E=Math.min(Ap(T),gu),k=bx(b=>T.next(E*b).value,E,30);return E+"ms "+k},toTransition:()=>{}};return T}yu.applyToOptions=t=>{const e=CC(t,100,yu);return t.ease=e.ease,t.duration=jt(e.duration),t.type="keyframes",t};const NC=5;function Vx(t,e,n){const r=Math.max(e-NC,0);return hx(n-t(r),e-r)}function Vd({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:l,max:u,restDelta:c=.5,restSpeed:d}){const f=t[0],m={done:!1,value:f},g=y=>l!==void 0&&y<l||u!==void 0&&y>u,I=y=>l===void 0?u:u===void 0||Math.abs(l-y)<Math.abs(u-y)?l:u;let P=n*e;const R=f+P,x=o===void 0?R:o(R);x!==R&&(P=x-f);const w=y=>-P*Math.exp(-y/r),S=y=>x+w(y),V=y=>{const T=w(y),E=S(y);m.done=Math.abs(T)<=c,m.value=m.done?x:E};let M,O;const A=y=>{g(m.value)&&(M=y,O=yu({keyframes:[m.value,I(m.value)],velocity:Vx(S,y,m.value),damping:i,stiffness:s,restDelta:c,restSpeed:d}))};return A(0),{calculatedDuration:null,next:y=>{let T=!1;return!O&&M===void 0&&(T=!0,V(y),A(y)),M!==void 0&&y>=M?O.next(y-M):(!T&&V(y),m)}}}function MC(t,e,n){const r=[],i=n||kr.mix||Rx,s=t.length-1;for(let o=0;o<s;o++){let l=i(t[o],t[o+1]);if(e){const u=Array.isArray(e)?e[o]||Xt:e;l=ga(u,l)}r.push(l)}return r}function LC(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(vp(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const l=MC(e,r,i),u=l.length,c=d=>{if(o&&d<t[0])return e[0];let f=0;if(u>1)for(;f<t.length-2&&!(d<t[f+1]);f++);const m=ea(t[f],t[f+1],d);return l[f](m)};return n?d=>c(kn(t[0],t[s-1],d)):c}function OC(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=ea(0,e,r);t.push(we(n,1,i))}}function jC(t){const e=[0];return OC(e,t.length-1),e}function FC(t,e){return t.map(n=>n*e)}function BC(t,e){return t.map(()=>e||wx).splice(0,t.length-1)}function ko({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=GA(r)?r.map(Iy):Iy(r),s={done:!1,value:e[0]},o=FC(n&&n.length===e.length?n:jC(e),t),l=LC(o,e,{ease:Array.isArray(i)?i:BC(e,i)});return{calculatedDuration:t,next:u=>(s.value=l(u),s.done=u>=t,s)}}const zC=t=>t!==null;function ec(t,{repeat:e,repeatType:n="loop"},r,i=1){const s=t.filter(zC),l=i<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!l||r===void 0?s[l]:r}const UC={decay:Vd,inertia:Vd,tween:ko,keyframes:ko,spring:yu};function Dx(t){typeof t.type=="string"&&(t.type=UC[t.type])}class Cp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const $C=t=>t/100;class vu extends Cp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==vt.now()&&this.tick(vt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Dx(e);const{type:n=ko,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=e;let{keyframes:l}=e;const u=n||ko;u!==ko&&typeof l[0]!="number"&&(this.mixKeyframes=ga($C,Rx(l[0],l[1])),l=[0,100]);const c=u({...e,keyframes:l});s==="mirror"&&(this.mirroredGenerator=u({...e,keyframes:[...l].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Ap(c));const{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:l,calculatedDuration:u}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:d,repeat:f,repeatType:m,repeatDelay:g,type:I,onUpdate:P,finalKeyframe:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const x=this.currentTime-c*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?x<0:x>i;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let S=this.currentTime,V=r;if(f){const y=Math.min(this.currentTime,i)/l;let T=Math.floor(y),E=y%1;!E&&y>=1&&(E=1),E===1&&T--,T=Math.min(T,f+1),!!(T%2)&&(m==="reverse"?(E=1-E,g&&(E-=g/l)):m==="mirror"&&(V=o)),S=kn(0,1,E)*l}let M;w?(this.delayState.value=d[0],M=this.delayState):M=V.next(S),s&&!w&&(M.value=s(M.value));let{done:O}=M;!w&&u!==null&&(O=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&O);return A&&I!==Vd&&(M.value=ec(d,this.options,R,this.speed)),P&&P(M.value),A&&this.finish(),M}then(e,n){return this.finished.then(e,n)}get duration(){return Qt(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Qt(e)}get time(){return Qt(this.currentTime)}set time(e){e=jt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return Vx(r=>this.generator.next(r).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(vt.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Qt(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:e=AC,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(vt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function WC(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ii=t=>t*180/Math.PI,Dd=t=>{const e=ii(Math.atan2(t[1],t[0]));return Nd(e)},HC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Dd,rotateZ:Dd,skewX:t=>ii(Math.atan(t[1])),skewY:t=>ii(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Nd=t=>(t=t%360,t<0&&(t+=360),t),Vy=Dd,Dy=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Ny=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),KC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Dy,scaleY:Ny,scale:t=>(Dy(t)+Ny(t))/2,rotateX:t=>Nd(ii(Math.atan2(t[6],t[5]))),rotateY:t=>Nd(ii(Math.atan2(-t[2],t[0]))),rotateZ:Vy,rotate:Vy,skewX:t=>ii(Math.atan(t[4])),skewY:t=>ii(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Md(t){return t.includes("scale")?1:0}function Ld(t,e){if(!t||t==="none")return Md(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=KC,i=n;else{const l=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=HC,i=l}if(!i)return Md(e);const s=r[e],o=i[1].split(",").map(GC);return typeof s=="function"?s(o):o[s]}const qC=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Ld(n,e)};function GC(t){return parseFloat(t.trim())}const Cs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ps=new Set(Cs),My=t=>t===As||t===K,QC=new Set(["x","y","z"]),YC=Cs.filter(t=>!QC.has(t));function XC(t){const e=[];return YC.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const fr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:r})=>{const i=t.max-t.min;return r==="border-box"?i:i-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:r})=>{const i=t.max-t.min;return r==="border-box"?i:i-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Ld(e,"x"),y:(t,{transform:e})=>Ld(e,"y")};fr.translateX=fr.x;fr.translateY=fr.y;const ui=new Set;let Od=!1,jd=!1,Fd=!1;function Nx(){if(jd){const t=Array.from(ui).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=XC(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var l;(l=r.getValue(s))==null||l.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}jd=!1,Od=!1,ui.forEach(t=>t.complete(Fd)),ui.clear()}function Mx(){ui.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(jd=!0)})}function JC(){Fd=!0,Mx(),Nx(),Fd=!1}class Pp{constructor(e,n,r,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(ui.add(this),Od||(Od=!0,me.read(Mx),me.resolveKeyframes(Nx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;if(e[0]===null){const s=i==null?void 0:i.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(r&&n){const l=r.readValue(n,o);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=o),i&&s===void 0&&i.set(e[0])}WC(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ui.delete(this)}cancel(){this.state==="scheduled"&&(ui.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ZC=t=>t.startsWith("--");function Lx(t,e,n){ZC(e)?t.style.setProperty(e,n):t.style[e]=n}const eP={};function Ox(t,e){const n=cx(t);return()=>eP[e]??n()}const tP=Ox(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),jx=Ox(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),po=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,Ly={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:po([0,.65,.55,1]),circOut:po([.55,0,1,.45]),backIn:po([.31,.01,.66,-.59]),backOut:po([.33,1.53,.69,.99])};function Fx(t,e){if(t)return typeof t=="function"?jx()?bx(t,e):"ease-out":xx(t)?po(t):Array.isArray(t)?t.map(n=>Fx(n,e)||Ly.easeOut):Ly[t]}function nP(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:l="easeOut",times:u}={},c=void 0){const d={[e]:n};u&&(d.offset=u);const f=Fx(l,i);Array.isArray(f)&&(d.easing=f);const m={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(m.pseudoElement=c),t.animate(d,m)}function Bx(t){return typeof t=="function"&&"applyToOptions"in t}function rP({type:t,...e}){return Bx(t)&&jx()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class zx extends Cp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:l,onComplete:u}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,vp(typeof e.type!="string");const c=rP(e);this.animation=nP(n,r,i,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const d=ec(i,this.options,l,this.speed);this.updateMotionValue&&this.updateMotionValue(d),Lx(n,r,d),this.animation.cancel()}u==null||u(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const e=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Qt(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Qt(e)}get time(){return Qt(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=jt(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:r,observe:i}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&tP()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),Xt):i(this)}}const Ux={anticipate:yx,backInOut:gx,circInOut:_x};function iP(t){return t in Ux}function sP(t){typeof t.ease=="string"&&iP(t.ease)&&(t.ease=Ux[t.ease])}const fh=10;class oP extends zx{constructor(e){sP(e),Dx(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const l=new vu({...o,autoplay:!1}),u=Math.max(fh,vt.now()-this.startTime),c=kn(0,fh,u-fh),d=l.sample(u).value,{name:f}=this.options;s&&f&&Lx(s,f,d),n.setWithVelocity(l.sample(Math.max(0,u-c)).value,d,c),l.stop()}}const Oy=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(dn.test(t)||t==="0")&&!t.startsWith("url("));function aP(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function lP(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Oy(i,e),l=Oy(s,e);return!o||!l?!1:aP(t)||(n==="spring"||Bx(n))&&r}function Bd(t){t.duration=0,t.type="keyframes"}const $x=new Set(["opacity","clipPath","filter","transform"]),uP=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function cP(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&uP.test(t[e]))return!0;return!1}const hP=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),dP=cx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function fP(t){var f;const{motionValue:e,name:n,repeatDelay:r,repeatType:i,damping:s,type:o,keyframes:l}=t;if(!(((f=e==null?void 0:e.owner)==null?void 0:f.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:d}=e.owner.getProps();return dP()&&n&&($x.has(n)||hP.has(n)&&cP(l))&&(n!=="transform"||!d)&&!c&&!r&&i!=="mirror"&&s!==0&&o!=="inertia"}const pP=40;class mP extends Cp{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:l,name:u,motionValue:c,element:d,...f}){var I;super(),this.stop=()=>{var P,R;this._animation&&(this._animation.stop(),(P=this.stopTimeline)==null||P.call(this)),(R=this.keyframeResolver)==null||R.cancel()},this.createdAt=vt.now();const m={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,name:u,motionValue:c,element:d,...f},g=(d==null?void 0:d.KeyframeResolver)||Pp;this.keyframeResolver=new g(l,(P,R,x)=>this.onKeyframesResolved(P,R,m,!x),u,c,d),(I=this.keyframeResolver)==null||I.scheduleResolve()}onKeyframesResolved(e,n,r,i){var x,w;this.keyframeResolver=void 0;const{name:s,type:o,velocity:l,delay:u,isHandoff:c,onUpdate:d}=r;this.resolvedAt=vt.now();let f=!0;lP(e,s,o,l)||(f=!1,(kr.instantAnimations||!u)&&(d==null||d(ec(e,r,n))),e[0]=e[e.length-1],Bd(r),r.repeat=0);const g={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>pP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:e},I=f&&!c&&fP(g),P=(w=(x=g.motionValue)==null?void 0:x.owner)==null?void 0:w.current;let R;if(I)try{R=new oP({...g,element:P})}catch{R=new vu(g)}else R=new vu(g);R.finished.then(()=>{this.notifyFinished()}).catch(Xt),this.pendingTimeline&&(this.stopTimeline=R.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=R}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),JC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function Wx(t,e,n,r=0,i=1){const s=Array.from(t).sort((c,d)=>c.sortNodePosition(d)).indexOf(e),o=t.size,l=(o-1)*r;return typeof n=="function"?n(s,o):i===1?s*r:l-s*r}const gP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yP(t){const e=gP.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function Hx(t,e,n=1){const[r,i]=yP(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return ax(o)?parseFloat(o):o}return Tp(i)?Hx(i,e,n+1):i}const vP={type:"spring",stiffness:500,damping:25,restSpeed:10},_P=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),wP={type:"keyframes",duration:.8},xP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},TP=(t,{keyframes:e})=>e.length>2?wP:Ps.has(t)?t.startsWith("scale")?_P(e[1]):vP:xP;function Kx(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...r}=t;return{...e,...r}}return t}function kp(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?Kx(n,t):n}const EP=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function SP(t){for(const e in t)if(!EP.has(e))return!0;return!1}const Rp=(t,e,n,r={},i,s)=>o=>{const l=kp(r,t)||{},u=l.delay||r.delay||0;let{elapsed:c=0}=r;c=c-jt(u);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...l,delay:-c,onUpdate:m=>{e.set(m),l.onUpdate&&l.onUpdate(m)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:t,motionValue:e,element:s?void 0:i};SP(l)||Object.assign(d,TP(t,d)),d.duration&&(d.duration=jt(d.duration)),d.repeatDelay&&(d.repeatDelay=jt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Bd(d),d.delay===0&&(f=!0)),(kr.instantAnimations||kr.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(f=!0,Bd(d),d.delay=0),d.allowFlatten=!l.type&&!l.ease,f&&!s&&e.get()!==void 0){const m=ec(d.keyframes,l);if(m!==void 0){me.update(()=>{d.onUpdate(m),d.onComplete()});return}}return l.isSync?new vu(d):new mP(d)};function jy(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function bp(t,e,n,r){if(typeof e=="function"){const[i,s]=jy(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=jy(r);e=e(n!==void 0?n:t.custom,i,s)}return e}function ci(t,e,n){const r=t.getProps();return bp(r,e,n!==void 0?n:r.custom,t)}const qx=new Set(["width","height","top","left","right","bottom",...Cs]),Fy=30,IP=t=>!isNaN(parseFloat(t));class AP{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var s;const i=vt.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=vt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=IP(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new _p);const r=this.events[e].add(n);return e==="change"?()=>{r(),me.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=vt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Fy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Fy);return hx(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ps(t,e){return new AP(t,e)}const zd=t=>Array.isArray(t);function CP(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ps(n))}function PP(t){return zd(t)?t[t.length-1]||0:t}function kP(t,e){const n=ci(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const l=PP(s[o]);CP(t,o,l)}}const tt=t=>!!(t&&t.getVelocity);function RP(t){return!!(tt(t)&&t.add)}function Ud(t,e){const n=t.getValue("willChange");if(RP(n))return n.add(e);if(!n&&kr.WillChange){const r=new kr.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function Vp(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const bP="framerAppearId",Gx="data-"+Vp(bP);function Qx(t){return t.props[Gx]}function VP({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function Yx(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s,transitionEnd:o,...l}=e;const u=t.getDefaultTransition();s=s?Kx(s,u):u;const c=s==null?void 0:s.reduceMotion;r&&(s=r);const d=[],f=i&&t.animationState&&t.animationState.getState()[i];for(const m in l){const g=t.getValue(m,t.latestValues[m]??null),I=l[m];if(I===void 0||f&&VP(f,m))continue;const P={delay:n,...kp(s||{},m)},R=g.get();if(R!==void 0&&!g.isAnimating()&&!Array.isArray(I)&&I===R&&!P.velocity){me.update(()=>g.set(I));continue}let x=!1;if(window.MotionHandoffAnimation){const V=Qx(t);if(V){const M=window.MotionHandoffAnimation(V,m,me);M!==null&&(P.startTime=M,x=!0)}}Ud(t,m);const w=c??t.shouldReduceMotion;g.start(Rp(m,g,I,w&&qx.has(m)?{type:!1}:P,t,x));const S=g.animation;S&&d.push(S)}if(o){const m=()=>me.update(()=>{o&&kP(t,o)});d.length?Promise.all(d).then(m):m()}return d}function $d(t,e,n={}){var u;const r=ci(t,e,n.type==="exit"?(u=t.presenceContext)==null?void 0:u.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Yx(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:m}=i;return DP(t,e,c,d,f,m,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[c,d]=l==="beforeChildren"?[s,o]:[o,s];return c().then(()=>d())}else return Promise.all([s(),o(n.delay)])}function DP(t,e,n=0,r=0,i=0,s=1,o){const l=[];for(const u of t.variantChildren)u.notify("AnimationStart",e),l.push($d(u,e,{...o,delay:n+(typeof r=="function"?0:r)+Wx(t.variantChildren,u,r,i,s)}).then(()=>u.notify("AnimationComplete",e)));return Promise.all(l)}function NP(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>$d(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=$d(t,e,n);else{const i=typeof e=="function"?ci(t,e,n.custom):e;r=Promise.all(Yx(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const MP={test:t=>t==="auto",parse:t=>t},Xx=t=>e=>e.test(t),Jx=[As,K,In,sr,aC,oC,MP],By=t=>Jx.find(Xx(t));function LP(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ux(t):!0}const OP=new Set(["brightness","contrast","saturate","opacity"]);function jP(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Ep)||[];if(!r)return t;const i=n.replace(r,"");let s=OP.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const FP=/\b([a-z-]*)\(.*?\)/gu,Wd={...dn,getAnimatableNone:t=>{const e=t.match(FP);return e?e.map(jP).join(" "):t}},Hd={...dn,getAnimatableNone:t=>{const e=dn.parse(t);return dn.createTransformer(t)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},zy={...As,transform:Math.round},BP={rotate:sr,rotateX:sr,rotateY:sr,rotateZ:sr,scale:cl,scaleX:cl,scaleY:cl,scaleZ:cl,skew:sr,skewX:sr,skewY:sr,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:ta,originX:Cy,originY:Cy,originZ:K},Dp={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,top:K,right:K,bottom:K,left:K,inset:K,insetBlock:K,insetBlockStart:K,insetBlockEnd:K,insetInline:K,insetInlineStart:K,insetInlineEnd:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,paddingBlock:K,paddingBlockStart:K,paddingBlockEnd:K,paddingInline:K,paddingInlineStart:K,paddingInlineEnd:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,marginBlock:K,marginBlockStart:K,marginBlockEnd:K,marginInline:K,marginInlineStart:K,marginInlineEnd:K,fontSize:K,backgroundPositionX:K,backgroundPositionY:K,...BP,zIndex:zy,fillOpacity:ta,strokeOpacity:ta,numOctaves:zy},zP={...Dp,color:Oe,backgroundColor:Oe,outlineColor:Oe,fill:Oe,stroke:Oe,borderColor:Oe,borderTopColor:Oe,borderRightColor:Oe,borderBottomColor:Oe,borderLeftColor:Oe,filter:Wd,WebkitFilter:Wd,mask:Hd,WebkitMask:Hd},Zx=t=>zP[t],UP=new Set([Wd,Hd]);function eT(t,e){let n=Zx(t);return UP.has(n)||(n=dn),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const $P=new Set(["auto","none","0"]);function WP(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!$P.has(s)&&fs(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=eT(n,i)}class HP extends Pp{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let f=e[d];if(typeof f=="string"&&(f=f.trim(),Tp(f))){const m=Hx(f,n.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!qx.has(r)||e.length!==2)return;const[i,s]=e,o=By(i),l=By(s),u=Ay(i),c=Ay(s);if(u!==c&&fr[r]){this.needsMeasurement=!0;return}if(o!==l)if(My(o)&&My(l))for(let d=0;d<e.length;d++){const f=e[d];typeof f=="string"&&(e[d]=parseFloat(f))}else fr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)(e[i]===null||LP(e[i]))&&r.push(i);r.length&&WP(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=fr[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var l;const{element:e,name:n,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=fr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([u,c])=>{e.getValue(u).set(c)}),this.resolveNoneKeyframes()}}function tT(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const i=(n==null?void 0:n[t])??r.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(r=>r!=null)}const nT=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function bl(t){return lx(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Np}=Tx(queueMicrotask,!1),on={x:!1,y:!1};function rT(){return on.x||on.y}function KP(t){return t==="x"||t==="y"?on[t]?null:(on[t]=!0,()=>{on[t]=!1}):on.x||on.y?null:(on.x=on.y=!0,()=>{on.x=on.y=!1})}function iT(t,e){const n=tT(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function qP(t){return!(t.pointerType==="touch"||rT())}function GP(t,e,n={}){const[r,i,s]=iT(t,n);return r.forEach(o=>{let l=!1,u=!1,c;const d=()=>{o.removeEventListener("pointerleave",I)},f=R=>{c&&(c(R),c=void 0),d()},m=R=>{l=!1,window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),u&&(u=!1,f(R))},g=()=>{l=!0,window.addEventListener("pointerup",m,i),window.addEventListener("pointercancel",m,i)},I=R=>{if(R.pointerType!=="touch"){if(l){u=!0;return}f(R)}},P=R=>{if(!qP(R))return;u=!1;const x=e(o,R);typeof x=="function"&&(c=x,o.addEventListener("pointerleave",I,i))};o.addEventListener("pointerenter",P,i),o.addEventListener("pointerdown",g,i)}),s}const sT=(t,e)=>e?t===e?!0:sT(t,e.parentElement):!1,Mp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,QP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function YP(t){return QP.has(t.tagName)||t.isContentEditable===!0}const XP=new Set(["INPUT","SELECT","TEXTAREA"]);function JP(t){return XP.has(t.tagName)||t.isContentEditable===!0}const Vl=new WeakSet;function Uy(t){return e=>{e.key==="Enter"&&t(e)}}function ph(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const ZP=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=Uy(()=>{if(Vl.has(n))return;ph(n,"down");const i=Uy(()=>{ph(n,"up")}),s=()=>ph(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function $y(t){return Mp(t)&&!rT()}const Wy=new WeakSet;function ek(t,e,n={}){const[r,i,s]=iT(t,n),o=l=>{const u=l.currentTarget;if(!$y(l)||Wy.has(l))return;Vl.add(u),n.stopPropagation&&Wy.add(l);const c=e(u,l),d=(g,I)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",m),Vl.has(u)&&Vl.delete(u),$y(g)&&typeof c=="function"&&c(g,{success:I})},f=g=>{d(g,u===window||u===document||n.useGlobalTarget||sT(u,g.target))},m=g=>{d(g,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",m,i)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",o,i),bl(l)&&(l.addEventListener("focus",c=>ZP(c,i)),!YP(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),s}function Lp(t){return lx(t)&&"ownerSVGElement"in t}const Dl=new WeakMap;let or;const oT=(t,e,n)=>(r,i)=>i&&i[0]?i[0][t+"Size"]:Lp(r)&&"getBBox"in r?r.getBBox()[e]:r[n],tk=oT("inline","width","offsetWidth"),nk=oT("block","height","offsetHeight");function rk({target:t,borderBoxSize:e}){var n;(n=Dl.get(t))==null||n.forEach(r=>{r(t,{get width(){return tk(t,e)},get height(){return nk(t,e)}})})}function ik(t){t.forEach(rk)}function sk(){typeof ResizeObserver>"u"||(or=new ResizeObserver(ik))}function ok(t,e){or||sk();const n=tT(t);return n.forEach(r=>{let i=Dl.get(r);i||(i=new Set,Dl.set(r,i)),i.add(e),or==null||or.observe(r)}),()=>{n.forEach(r=>{const i=Dl.get(r);i==null||i.delete(e),i!=null&&i.size||or==null||or.unobserve(r)})}}const Nl=new Set;let Xi;function ak(){Xi=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Nl.forEach(e=>e(t))},window.addEventListener("resize",Xi)}function lk(t){return Nl.add(t),Xi||ak(),()=>{Nl.delete(t),!Nl.size&&typeof Xi=="function"&&(window.removeEventListener("resize",Xi),Xi=void 0)}}function Hy(t,e){return typeof t=="function"?lk(t):ok(t,e)}function uk(t){return Lp(t)&&t.tagName==="svg"}const ck=[...Jx,Oe,dn],hk=t=>ck.find(Xx(t)),Ky=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ji=()=>({x:Ky(),y:Ky()}),qy=()=>({min:0,max:0}),Be=()=>({x:qy(),y:qy()}),dk=new WeakMap;function tc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function na(t){return typeof t=="string"||Array.isArray(t)}const Op=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jp=["initial",...Op];function nc(t){return tc(t.animate)||jp.some(e=>na(t[e]))}function aT(t){return!!(nc(t)||t.variants)}function fk(t,e,n){for(const r in e){const i=e[r],s=n[r];if(tt(i))t.addValue(r,i);else if(tt(s))t.addValue(r,ps(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,ps(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const Kd={current:null},lT={current:!1},pk=typeof window<"u";function mk(){if(lT.current=!0,!!pk)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Kd.current=t.matches;t.addEventListener("change",e),e()}else Kd.current=!1}const Gy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let _u={};function uT(t){_u=t}function gk(){return _u}class yk{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:s,blockInitialAnimation:o,visualState:l},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Pp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=vt.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,me.render(this.render,!1,!0))};const{latestValues:c,renderState:d}=l;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=s,this.options=u,this.blockInitialAnimation=!!o,this.isControllingVariants=nc(n),this.isVariantNode=aT(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...m}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in m){const I=m[g];c[g]!==void 0&&tt(I)&&I.set(c[g])}}mount(e){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,dk.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,s)=>this.bindToMotionValue(s,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(lT.current||mk(),this.shouldReduceMotion=Kd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Rr(this.notifyUpdate),Rr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&$x.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:l,times:u,ease:c,duration:d}=n.accelerate,f=new zx({element:this.current,name:e,keyframes:l,times:u,ease:c,duration:jt(d)}),m=o(f);this.valueSubscriptions.set(e,()=>{m(),f.cancel()});return}const r=Ps.has(e);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&me.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in _u){const n=_u[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Be()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Gy.length;r++){const i=Gy[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=fk(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=ps(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(ax(r)||ux(r))?r=parseFloat(r):!hk(r)&&dn.test(n)&&(r=eT(e,n)),this.setBaseTarget(e,tt(r)?r.get():r)),tt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=bp(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[e])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!tt(i)?i:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new _p),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Np.render(this.render)}}class cT extends yk{constructor(){super(...arguments),this.KeyframeResolver=HP}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const r=e.style;return r?r[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;tt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class jr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function hT({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function vk({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function _k(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function mh(t){return t===void 0||t===1}function qd({scale:t,scaleX:e,scaleY:n}){return!mh(t)||!mh(e)||!mh(n)}function Jr(t){return qd(t)||dT(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function dT(t){return Qy(t.x)||Qy(t.y)}function Qy(t){return t&&t!=="0%"}function wu(t,e,n){const r=t-n,i=e*r;return n+i}function Yy(t,e,n,r,i){return i!==void 0&&(t=wu(t,i,r)),wu(t,n,r)+e}function Gd(t,e=0,n=1,r,i){t.min=Yy(t.min,e,n,r,i),t.max=Yy(t.max,e,n,r,i)}function fT(t,{x:e,y:n}){Gd(t.x,e.translate,e.scale,e.originPoint),Gd(t.y,n.translate,n.scale,n.originPoint)}const Xy=.999999999999,Jy=1.0000000000001;function wk(t,e,n,r=!1){var l;const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let u=0;u<i;u++){s=n[u],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(xn(t.x,-s.scroll.offset.x),xn(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,fT(t,o)),r&&Jr(s.latestValues)&&Ml(t,s.latestValues,(l=s.layout)==null?void 0:l.layoutBox))}e.x<Jy&&e.x>Xy&&(e.x=1),e.y<Jy&&e.y>Xy&&(e.y=1)}function xn(t,e){t.min+=e,t.max+=e}function Zy(t,e,n,r,i=.5){const s=we(t.min,t.max,i);Gd(t,e,n,s,r)}function ev(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Ml(t,e,n){const r=n??t;Zy(t.x,ev(e.x,r.x),e.scaleX,e.scale,e.originX),Zy(t.y,ev(e.y,r.y),e.scaleY,e.scale,e.originY)}function pT(t,e){return hT(_k(t.getBoundingClientRect(),e))}function xk(t,e,n){const r=pT(t,n),{scroll:i}=e;return i&&(xn(r.x,i.offset.x),xn(r.y,i.offset.y)),r}const Tk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ek=Cs.length;function Sk(t,e,n){let r="",i=!0;for(let s=0;s<Ek;s++){const o=Cs[s],l=t[o];if(l===void 0)continue;let u=!0;if(typeof l=="number")u=l===(o.startsWith("scale")?1:0);else{const c=parseFloat(l);u=o.startsWith("scale")?c===1:c===0}if(!u||n){const c=nT(l,Dp[o]);if(!u){i=!1;const d=Tk[o]||o;r+=`${d}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function Fp(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,l=!1;for(const u in e){const c=e[u];if(Ps.has(u)){o=!0;continue}else if(Sx(u)){i[u]=c;continue}else{const d=nT(c,Dp[u]);u.startsWith("origin")?(l=!0,s[u]=d):r[u]=d}}if(e.transform||(o||n?r.transform=Sk(e,t.transform,n):r.transform&&(r.transform="none")),l){const{originX:u="50%",originY:c="50%",originZ:d=0}=s;r.transformOrigin=`${u} ${c} ${d}`}}function mT(t,{style:e,vars:n},r,i){const s=t.style;let o;for(o in e)s[o]=e[o];i==null||i.applyProjectionStyles(s,r);for(o in n)s.setProperty(o,n[o])}function tv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const so={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(K.test(t))t=parseFloat(t);else return t;const n=tv(t,e.target.x),r=tv(t,e.target.y);return`${n}% ${r}%`}},Ik={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=dn.parse(t);if(i.length>5)return r;const s=dn.createTransformer(t),o=typeof i[0]!="number"?1:0,l=n.x.scale*e.x,u=n.y.scale*e.y;i[0+o]/=l,i[1+o]/=u;const c=we(l,u,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}},Qd={borderRadius:{...so,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:so,borderTopRightRadius:so,borderBottomLeftRadius:so,borderBottomRightRadius:so,boxShadow:Ik};function gT(t,{layout:e,layoutId:n}){return Ps.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Qd[t]||t==="opacity")}function Bp(t,e,n){var o;const r=t.style,i=e==null?void 0:e.style,s={};if(!r)return s;for(const l in r)(tt(r[l])||i&&tt(i[l])||gT(l,t)||((o=n==null?void 0:n.getValue(l))==null?void 0:o.liveStyle)!==void 0)&&(s[l]=r[l]);return s}function Ak(t){return window.getComputedStyle(t)}class Ck extends cT{constructor(){super(...arguments),this.type="html",this.renderInstance=mT}readValueFromInstance(e,n){var r;if(Ps.has(n))return(r=this.projection)!=null&&r.isProjecting?Md(n):qC(e,n);{const i=Ak(e),s=(Sx(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return pT(e,n)}build(e,n,r){Fp(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return Bp(e,n,r)}}const Pk={offset:"stroke-dashoffset",array:"stroke-dasharray"},kk={offset:"strokeDashoffset",array:"strokeDasharray"};function Rk(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?Pk:kk;t[s.offset]=`${-r}`,t[s.array]=`${e} ${n}`}const bk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function yT(t,{attrX:e,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...l},u,c,d){if(Fp(t,l,c),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:m}=t;f.transform&&(m.transform=f.transform,delete f.transform),(m.transform||f.transformOrigin)&&(m.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),m.transform&&(m.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox);for(const g of bk)f[g]!==void 0&&(m[g]=f[g],delete f[g]);e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&Rk(f,i,s,o,!1)}const vT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),_T=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Vk(t,e,n,r){mT(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(vT.has(i)?i:Vp(i),e.attrs[i])}function wT(t,e,n){const r=Bp(t,e,n);for(const i in t)if(tt(t[i])||tt(e[i])){const s=Cs.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}class Dk extends cT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Be}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ps.has(n)){const r=Zx(n);return r&&r.default||0}return n=vT.has(n)?n:Vp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return wT(e,n,r)}build(e,n,r){yT(e,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,n,r,i){Vk(e,n,r,i)}mount(e){this.isSVGTag=_T(e.tagName),super.mount(e)}}const Nk=jp.length;function xT(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?xT(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Nk;n++){const r=jp[n],i=t.props[r];(na(i)||i===!1)&&(e[r]=i)}return e}function TT(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}const Mk=[...Op].reverse(),Lk=Op.length;function Ok(t){return e=>Promise.all(e.map(({animation:n,options:r})=>NP(t,n,r)))}function jk(t){let e=Ok(t),n=nv(),r=!0,i=!1;const s=c=>(d,f)=>{var g;const m=ci(t,f,c==="exit"?(g=t.presenceContext)==null?void 0:g.custom:void 0);if(m){const{transition:I,transitionEnd:P,...R}=m;d={...d,...R,...P}}return d};function o(c){e=c(t)}function l(c){const{props:d}=t,f=xT(t.parent)||{},m=[],g=new Set;let I={},P=1/0;for(let x=0;x<Lk;x++){const w=Mk[x],S=n[w],V=d[w]!==void 0?d[w]:f[w],M=na(V),O=w===c?S.isActive:null;O===!1&&(P=x);let A=V===f[w]&&V!==d[w]&&M;if(A&&(r||i)&&t.manuallyAnimateOnMount&&(A=!1),S.protectedKeys={...I},!S.isActive&&O===null||!V&&!S.prevProp||tc(V)||typeof V=="boolean")continue;if(w==="exit"&&S.isActive&&O!==!0){S.prevResolvedValues&&(I={...I,...S.prevResolvedValues});continue}const y=Fk(S.prevProp,V);let T=y||w===c&&S.isActive&&!A&&M||x>P&&M,E=!1;const k=Array.isArray(V)?V:[V];let b=k.reduce(s(w),{});O===!1&&(b={});const{prevResolvedValues:C={}}=S,re={...C,...b},Te=B=>{T=!0,g.has(B)&&(E=!0,g.delete(B)),S.needsAnimating[B]=!0;const H=t.getValue(B);H&&(H.liveStyle=!1)};for(const B in re){const H=b[B],Y=C[B];if(I.hasOwnProperty(B))continue;let ie=!1;zd(H)&&zd(Y)?ie=!TT(H,Y):ie=H!==Y,ie?H!=null?Te(B):g.add(B):H!==void 0&&g.has(B)?Te(B):S.protectedKeys[B]=!0}S.prevProp=V,S.prevResolvedValues=b,S.isActive&&(I={...I,...b}),(r||i)&&t.blockInitialAnimation&&(T=!1);const Ee=A&&y;T&&(!Ee||E)&&m.push(...k.map(B=>{const H={type:w};if(typeof B=="string"&&(r||i)&&!Ee&&t.manuallyAnimateOnMount&&t.parent){const{parent:Y}=t,ie=ci(Y,B);if(Y.enteringChildren&&ie){const{delayChildren:le}=ie.transition||{};H.delay=Wx(Y.enteringChildren,t,le)}}return{animation:B,options:H}}))}if(g.size){const x={};if(typeof d.initial!="boolean"){const w=ci(t,Array.isArray(d.initial)?d.initial[0]:d.initial);w&&w.transition&&(x.transition=w.transition)}g.forEach(w=>{const S=t.getBaseTarget(w),V=t.getValue(w);V&&(V.liveStyle=!0),x[w]=S??null}),m.push({animation:x})}let R=!!m.length;return r&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(R=!1),r=!1,i=!1,R?e(m):Promise.resolve()}function u(c,d){var m;if(n[c].isActive===d)return Promise.resolve();(m=t.variantChildren)==null||m.forEach(g=>{var I;return(I=g.animationState)==null?void 0:I.setActive(c,d)}),n[c].isActive=d;const f=l(c);for(const g in n)n[g].protectedKeys={};return f}return{animateChanges:l,setActive:u,setAnimateFunction:o,getState:()=>n,reset:()=>{n=nv(),i=!0}}}function Fk(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!TT(e,t):!1}function Qr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function nv(){return{animate:Qr(!0),whileInView:Qr(),whileHover:Qr(),whileTap:Qr(),whileDrag:Qr(),whileFocus:Qr(),exit:Qr()}}function Yd(t,e){t.min=e.min,t.max=e.max}function sn(t,e){Yd(t.x,e.x),Yd(t.y,e.y)}function rv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const ET=1e-4,Bk=1-ET,zk=1+ET,ST=.01,Uk=0-ST,$k=0+ST;function _t(t){return t.max-t.min}function Wk(t,e,n){return Math.abs(t-e)<=n}function iv(t,e,n,r=.5){t.origin=r,t.originPoint=we(e.min,e.max,t.origin),t.scale=_t(n)/_t(e),t.translate=we(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Bk&&t.scale<=zk||isNaN(t.scale))&&(t.scale=1),(t.translate>=Uk&&t.translate<=$k||isNaN(t.translate))&&(t.translate=0)}function Ro(t,e,n,r){iv(t.x,e.x,n.x,r?r.originX:void 0),iv(t.y,e.y,n.y,r?r.originY:void 0)}function sv(t,e,n,r=0){const i=r?we(n.min,n.max,r):n.min;t.min=i+e.min,t.max=t.min+_t(e)}function Hk(t,e,n,r){sv(t.x,e.x,n.x,r==null?void 0:r.x),sv(t.y,e.y,n.y,r==null?void 0:r.y)}function ov(t,e,n,r=0){const i=r?we(n.min,n.max,r):n.min;t.min=e.min-i,t.max=t.min+_t(e)}function xu(t,e,n,r){ov(t.x,e.x,n.x,r==null?void 0:r.x),ov(t.y,e.y,n.y,r==null?void 0:r.y)}function av(t,e,n,r,i){return t-=e,t=wu(t,1/n,r),i!==void 0&&(t=wu(t,1/i,r)),t}function Kk(t,e=0,n=1,r=.5,i,s=t,o=t){if(In.test(e)&&(e=parseFloat(e),e=we(o.min,o.max,e/100)-o.min),typeof e!="number")return;let l=we(s.min,s.max,r);t===s&&(l-=e),t.min=av(t.min,e,n,l,i),t.max=av(t.max,e,n,l,i)}function lv(t,e,[n,r,i],s,o){Kk(t,e[n],e[r],e[i],e.scale,s,o)}const qk=["x","scaleX","originX"],Gk=["y","scaleY","originY"];function uv(t,e,n,r){lv(t.x,e,qk,n?n.x:void 0,r?r.x:void 0),lv(t.y,e,Gk,n?n.y:void 0,r?r.y:void 0)}function cv(t){return t.translate===0&&t.scale===1}function IT(t){return cv(t.x)&&cv(t.y)}function hv(t,e){return t.min===e.min&&t.max===e.max}function Qk(t,e){return hv(t.x,e.x)&&hv(t.y,e.y)}function dv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function AT(t,e){return dv(t.x,e.x)&&dv(t.y,e.y)}function fv(t){return _t(t.x)/_t(t.y)}function pv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function wn(t){return[t("x"),t("y")]}function Yk(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:m,skewX:g,skewY:I}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),m&&(r+=`rotateY(${m}deg) `),g&&(r+=`skewX(${g}deg) `),I&&(r+=`skewY(${I}deg) `)}const l=t.x.scale*e.x,u=t.y.scale*e.y;return(l!==1||u!==1)&&(r+=`scale(${l}, ${u})`),r||"none"}const CT=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Xk=CT.length,mv=t=>typeof t=="string"?parseFloat(t):t,gv=t=>typeof t=="number"||K.test(t);function Jk(t,e,n,r,i,s){i?(t.opacity=we(0,n.opacity??1,Zk(r)),t.opacityExit=we(e.opacity??1,0,eR(r))):s&&(t.opacity=we(e.opacity??1,n.opacity??1,r));for(let o=0;o<Xk;o++){const l=CT[o];let u=yv(e,l),c=yv(n,l);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||gv(u)===gv(c)?(t[l]=Math.max(we(mv(u),mv(c),r),0),(In.test(c)||In.test(u))&&(t[l]+="%")):t[l]=c}(e.rotate||n.rotate)&&(t.rotate=we(e.rotate||0,n.rotate||0,r))}function yv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Zk=PT(0,.5,vx),eR=PT(.5,.95,Xt);function PT(t,e,n){return r=>r<t?0:r>e?1:n(ea(t,e,r))}function tR(t,e,n){const r=tt(t)?t:ps(t);return r.start(Rp("",r,e,n)),r.animation}function ra(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const nR=(t,e)=>t.depth-e.depth;class rR{constructor(){this.children=[],this.isDirty=!1}add(e){yp(this.children,e),this.isDirty=!0}remove(e){pu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(nR),this.isDirty=!1,this.children.forEach(e)}}function iR(t,e){const n=vt.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Rr(r),t(s-e))};return me.setup(r,!0),()=>Rr(r)}function Ll(t){return tt(t)?t.get():t}class sR{constructor(){this.members=[]}add(e){yp(this.members,e);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===e||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(pu(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(pu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let r=this.members.indexOf(e)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(e,n){var i;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=r.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(i=e.root)!=null&&i.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,r,i,s,o;(r=(n=e.options).onExitComplete)==null||r.call(n),(o=(i=e.resumingFrom)==null?void 0:(s=i.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Ol={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gh=["","X","Y","Z"],oR=1e3;let aR=0;function yh(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function kT(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Qx(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",me,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&kT(r)}function RT({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},l=e==null?void 0:e()){this.id=aR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(cR),this.nodes.forEach(gR),this.nodes.forEach(yR),this.nodes.forEach(hR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new rR)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new _p),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const u=this.eventHandlers.get(o);u&&u.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Lp(o)&&!uk(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(u||l)&&(this.isLayoutDirty=!0),t){let d,f=0;const m=()=>this.root.updateBlockedByResize=!1;me.read(()=>{f=window.innerWidth}),t(o,()=>{const g=window.innerWidth;g!==f&&(f=g,this.root.updateBlockedByResize=!0,d&&d(),d=iR(m,250),Ol.hasAnimatedSinceResize&&(Ol.hasAnimatedSinceResize=!1,this.nodes.forEach(wv)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:m,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const I=this.options.transition||c.getDefaultTransition()||TR,{onLayoutAnimationStart:P,onLayoutAnimationComplete:R}=c.getProps(),x=!this.targetLayout||!AT(this.targetLayout,g),w=!f&&m;if(this.options.layoutRoot||this.resumeFrom||w||f&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const S={...kp(I,"layout"),onPlay:P,onComplete:R};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S),this.setAnimationOrigin(d,w)}else f||wv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Rr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(vR),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&kT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:u}=this.options;if(l===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const u=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),u&&this.nodes.forEach(fR),this.nodes.forEach(vv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(_v);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(pR),this.nodes.forEach(mR),this.nodes.forEach(lR),this.nodes.forEach(uR)):this.nodes.forEach(_v),this.clearAllSnapshots();const l=vt.now();Je.delta=kn(0,1e3/60,l-Je.timestamp),Je.timestamp=l,Je.isProcessing=!0,lh.update.process(Je),lh.preRender.process(Je),lh.render.process(Je),Je.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Np.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(dR),this.sharedNodes.forEach(_R)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,me.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){me.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!_t(this.snapshot.measuredBox.x)&&!_t(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Be()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&this.instance){const u=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:u,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:u}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!IT(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&this.instance&&(l||Jr(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let u=this.removeElementScroll(l);return o&&(u=this.removeTransform(u)),ER(u),{animationId:this.root.animationId,measuredBox:l,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return Be();const l=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(SR))){const{scroll:d}=this.root;d&&(xn(l.x,d.offset.x),xn(l.y,d.offset.y))}return l}removeElementScroll(o){var u;const l=Be();if(sn(l,o),(u=this.scroll)!=null&&u.wasRoot)return l;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:m}=d;d!==this.root&&f&&m.layoutScroll&&(f.wasRoot&&sn(l,o),xn(l.x,f.offset.x),xn(l.y,f.offset.y))}return l}applyTransform(o,l=!1,u){var d,f;const c=u||Be();sn(c,o);for(let m=0;m<this.path.length;m++){const g=this.path[m];!l&&g.options.layoutScroll&&g.scroll&&g!==g.root&&(xn(c.x,-g.scroll.offset.x),xn(c.y,-g.scroll.offset.y)),Jr(g.latestValues)&&Ml(c,g.latestValues,(d=g.layout)==null?void 0:d.layoutBox)}return Jr(this.latestValues)&&Ml(c,this.latestValues,(f=this.layout)==null?void 0:f.layoutBox),c}removeTransform(o){var u;const l=Be();sn(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!Jr(d.latestValues))continue;let f;d.instance&&(qd(d.latestValues)&&d.updateSnapshot(),f=Be(),sn(f,d.measurePageBox())),uv(l,d.latestValues,(u=d.snapshot)==null?void 0:u.layoutBox,f)}return Jr(this.latestValues)&&uv(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Je.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var g;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=Je.timestamp;const m=this.getClosestProjectingParent();m&&this.linkedParentVersion!==m.layoutVersion&&!m.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&m&&m.layout?this.createRelativeTarget(m,this.layout.layoutBox,m.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Be(),this.targetWithTransforms=Be()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Hk(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):sn(this.target,this.layout.layoutBox),fT(this.target,this.targetDelta)):sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?this.createRelativeTarget(m,this.target,m.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||qd(this.parent.latestValues)||dT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,l,u){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Be(),this.relativeTargetOrigin=Be(),xu(this.relativeTargetOrigin,l,u,this.options.layoutAnchor||void 0),sn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var I;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||(I=this.parent)!=null&&I.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Je.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;sn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,m=this.treeScale.y;wk(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Be());const{target:g}=o;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(rv(this.prevProjectionDelta.x,this.projectionDelta.x),rv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ro(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==m||!pv(this.projectionDelta.x,this.prevProjectionDelta.x)||!pv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),o){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ji(),this.projectionDelta=Ji(),this.projectionDeltaWithTransform=Ji()}setAnimationOrigin(o,l=!1){const u=this.snapshot,c=u?u.latestValues:{},d={...this.latestValues},f=Ji();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const m=Be(),g=u?u.source:void 0,I=this.layout?this.layout.source:void 0,P=g!==I,R=this.getStack(),x=!R||R.members.length<=1,w=!!(P&&!x&&this.options.crossfade===!0&&!this.path.some(xR));this.animationProgress=0;let S;this.mixTargetDelta=V=>{const M=V/1e3;xv(f.x,o.x,M),xv(f.y,o.y,M),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xu(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),wR(this.relativeTarget,this.relativeTargetOrigin,m,M),S&&Qk(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=Be()),sn(S,this.relativeTarget)),P&&(this.animationValues=d,Jk(d,c,this.latestValues,M,w,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var l,u,c;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(c=(u=this.resumingFrom)==null?void 0:u.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Rr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=me.update(()=>{Ol.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ps(0)),this.motionValue.jump(0,!1),this.currentAnimation=tR(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),o.onUpdate&&o.onUpdate(d)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(oR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:u,layout:c,latestValues:d}=o;if(!(!l||!u||!c)){if(this!==o&&this.layout&&c&&bT(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||Be();const f=_t(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+f;const m=_t(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+m}sn(l,u),Ml(l,d),Ro(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new sR),this.sharedNodes.get(o).add(l);const c=l.options.initialPromotionConfig;l.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var l;const{layoutId:o}=this.options;return o?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:o}=this.options;return o?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:u}=o;if((u.z||u.rotate||u.rotateX||u.rotateY||u.rotateZ||u.skewX||u.skewY)&&(l=!0),!l)return;const c={};u.z&&yh("z",o,c,this.animationValues);for(let d=0;d<gh.length;d++)yh(`rotate${gh[d]}`,o,c,this.animationValues),yh(`skew${gh[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}applyProjectionStyles(o,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const u=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Ll(l==null?void 0:l.pointerEvents)||"",o.transform=u?u(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Ll(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!Jr(this.latestValues)&&(o.transform=u?u({},""):"none",this.hasProjected=!1);return}o.visibility="";const d=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=Yk(this.projectionDeltaWithTransform,this.treeScale,d);u&&(f=u(d,f)),o.transform=f;const{x:m,y:g}=this.projectionDelta;o.transformOrigin=`${m.origin*100}% ${g.origin*100}% 0`,c.animationValues?o.opacity=c===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:o.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const I in Qd){if(d[I]===void 0)continue;const{correct:P,applyTo:R,isCSSVariable:x}=Qd[I],w=f==="none"?d[I]:P(d[I],c);if(R){const S=R.length;for(let V=0;V<S;V++)o[R[V]]=w}else x?this.options.visualElement.renderState.vars[I]=w:o[I]=w}this.options.layoutId&&(o.pointerEvents=c===this?Ll(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(vv),this.root.sharedNodes.clear()}}}function lR(t){t.updateLayout()}function uR(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")wn(f=>{const m=o?e.measuredBox[f]:e.layoutBox[f],g=_t(m);m.min=r[f].min,m.max=m.min+g});else if(s==="x"||s==="y"){const f=s==="x"?"y":"x";Yd(o?e.measuredBox[f]:e.layoutBox[f],r[f])}else bT(s,e.layoutBox,r)&&wn(f=>{const m=o?e.measuredBox[f]:e.layoutBox[f],g=_t(r[f]);m.max=m.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+g)});const l=Ji();Ro(l,r,e.layoutBox);const u=Ji();o?Ro(u,t.applyTransform(i,!0),e.measuredBox):Ro(u,r,e.layoutBox);const c=!IT(l);let d=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:m,layout:g}=f;if(m&&g){const I=t.options.layoutAnchor||void 0,P=Be();xu(P,e.layoutBox,m.layoutBox,I);const R=Be();xu(R,r,g.layoutBox,I),AT(P,R)||(d=!0),f.options.layoutRoot&&(t.relativeTarget=R,t.relativeTargetOrigin=P,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:u,layoutDelta:l,hasLayoutChanged:c,hasRelativeLayoutChanged:d})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function cR(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function hR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function dR(t){t.clearSnapshot()}function vv(t){t.clearMeasurements()}function fR(t){t.isLayoutDirty=!0,t.updateLayout()}function _v(t){t.isLayoutDirty=!1}function pR(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function mR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function wv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function gR(t){t.resolveTargetDelta()}function yR(t){t.calcProjection()}function vR(t){t.resetSkewAndRotation()}function _R(t){t.removeLeadSnapshot()}function xv(t,e,n){t.translate=we(e.translate,0,n),t.scale=we(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Tv(t,e,n,r){t.min=we(e.min,n.min,r),t.max=we(e.max,n.max,r)}function wR(t,e,n,r){Tv(t.x,e.x,n.x,r),Tv(t.y,e.y,n.y,r)}function xR(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const TR={duration:.45,ease:[.4,0,.1,1]},Ev=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Sv=Ev("applewebkit/")&&!Ev("chrome/")?Math.round:Xt;function Iv(t){t.min=Sv(t.min),t.max=Sv(t.max)}function ER(t){Iv(t.x),Iv(t.y)}function bT(t,e,n){return t==="position"||t==="preserve-aspect"&&!Wk(fv(e),fv(n),.2)}function SR(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const IR=RT({attachResizeListener:(t,e)=>ra(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),vh={current:void 0},VT=RT({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!vh.current){const t=new IR({});t.mount(window),t.setOptions({layoutScroll:!0}),vh.current=t}return vh.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),zp=j.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Av(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function AR(...t){return e=>{let n=!1;const r=t.map(i=>{const s=Av(i,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():Av(t[i],null)}}}}function CR(...t){return j.useCallback(AR(...t),t)}class PR extends j.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(bl(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,i=bl(r)&&r.offsetWidth||0,s=bl(r)&&r.offsetHeight||0,o=getComputedStyle(n),l=this.props.sizeRef.current;l.height=parseFloat(o.height),l.width=parseFloat(o.width),l.top=n.offsetTop,l.left=n.offsetLeft,l.right=i-l.width-l.left,l.bottom=s-l.height-l.top}return null}componentDidUpdate(){}render(){return this.props.children}}function kR({children:t,isPresent:e,anchorX:n,anchorY:r,root:i,pop:s}){var m;const o=j.useId(),l=j.useRef(null),u=j.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=j.useContext(zp),d=((m=t.props)==null?void 0:m.ref)??(t==null?void 0:t.ref),f=CR(l,d);return j.useInsertionEffect(()=>{const{width:g,height:I,top:P,left:R,right:x,bottom:w}=u.current;if(e||s===!1||!l.current||!g||!I)return;const S=n==="left"?`left: ${R}`:`right: ${x}`,V=r==="bottom"?`bottom: ${w}`:`top: ${P}`;l.current.dataset.motionPopId=o;const M=document.createElement("style");c&&(M.nonce=c);const O=i??document.head;return O.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${I}px !important;
            ${S}px !important;
            ${V}px !important;
          }
        `),()=>{var A;(A=l.current)==null||A.removeAttribute("data-motion-pop-id"),O.contains(M)&&O.removeChild(M)}},[e]),v.jsx(PR,{isPresent:e,childRef:l,sizeRef:u,pop:s,children:s===!1?t:j.cloneElement(t,{ref:f})})}const RR=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o,anchorX:l,anchorY:u,root:c})=>{const d=gp(bR),f=j.useId();let m=!0,g=j.useMemo(()=>(m=!1,{id:f,initial:e,isPresent:n,custom:i,onExitComplete:I=>{d.set(I,!0);for(const P of d.values())if(!P)return;r&&r()},register:I=>(d.set(I,!1),()=>d.delete(I))}),[n,d,r]);return s&&m&&(g={...g}),j.useMemo(()=>{d.forEach((I,P)=>d.set(P,!1))},[n]),j.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),t=v.jsx(kR,{pop:o==="popLayout",isPresent:n,anchorX:l,anchorY:u,root:c,children:t}),v.jsx(Zu.Provider,{value:g,children:t})};function bR(){return new Map}function DT(t=!0){const e=j.useContext(Zu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,s=j.useId();j.useEffect(()=>{if(t)return i(s)},[t]);const o=j.useCallback(()=>t&&r&&r(s),[s,r,t]);return!n&&r?[!1,o]:[!0]}const hl=t=>t.key||"";function Cv(t){const e=[];return j.Children.forEach(t,n=>{j.isValidElement(n)&&e.push(n)}),e}const VR=({children:t,custom:e,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1,anchorX:l="left",anchorY:u="top",root:c})=>{const[d,f]=DT(o),m=j.useMemo(()=>Cv(t),[t]),g=o&&!d?[]:m.map(hl),I=j.useRef(!0),P=j.useRef(m),R=gp(()=>new Map),x=j.useRef(new Set),[w,S]=j.useState(m),[V,M]=j.useState(m);ox(()=>{I.current=!1,P.current=m;for(let y=0;y<V.length;y++){const T=hl(V[y]);g.includes(T)?(R.delete(T),x.current.delete(T)):R.get(T)!==!0&&R.set(T,!1)}},[V,g.length,g.join("-")]);const O=[];if(m!==w){let y=[...m];for(let T=0;T<V.length;T++){const E=V[T],k=hl(E);g.includes(k)||(y.splice(T,0,E),O.push(E))}return s==="wait"&&O.length&&(y=O),M(Cv(y)),S(m),null}const{forceRender:A}=j.useContext(mp);return v.jsx(v.Fragment,{children:V.map(y=>{const T=hl(y),E=o&&!d?!1:m===V||g.includes(T),k=()=>{if(x.current.has(T))return;if(R.has(T))x.current.add(T),R.set(T,!0);else return;let b=!0;R.forEach(C=>{C||(b=!1)}),b&&(A==null||A(),M(P.current),o&&(f==null||f()),r&&r())};return v.jsx(RR,{isPresent:E,initial:!I.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:s,root:c,onExitComplete:E?void 0:k,anchorX:l,anchorY:u,children:y},T)})})},NT=j.createContext({strict:!1}),Pv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let kv=!1;function DR(){if(kv)return;const t={};for(const e in Pv)t[e]={isEnabled:n=>Pv[e].some(r=>!!n[r])};uT(t),kv=!0}function MT(){return DR(),gk()}function NR(t){const e=MT();for(const n in t)e[n]={...e[n],...t[n]};uT(e)}const MR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Tu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||MR.has(t)}let LT=t=>!Tu(t);function LR(t){typeof t=="function"&&(LT=e=>e.startsWith("on")?!Tu(e):t(e))}try{LR(require("@emotion/is-prop-valid").default)}catch{}function OR(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||tt(t[i])||(LT(i)||n===!0&&Tu(i)||!e&&!Tu(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}const rc=j.createContext({});function jR(t,e){if(nc(t)){const{initial:n,animate:r}=t;return{initial:n===!1||na(n)?n:void 0,animate:na(r)?r:void 0}}return t.inherit!==!1?e:{}}function FR(t){const{initial:e,animate:n}=jR(t,j.useContext(rc));return j.useMemo(()=>({initial:e,animate:n}),[Rv(e),Rv(n)])}function Rv(t){return Array.isArray(t)?t.join(" "):t}const Up=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function OT(t,e,n){for(const r in e)!tt(e[r])&&!gT(r,n)&&(t[r]=e[r])}function BR({transformTemplate:t},e){return j.useMemo(()=>{const n=Up();return Fp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function zR(t,e){const n=t.style||{},r={};return OT(r,n,t),Object.assign(r,BR(t,e)),r}function UR(t,e){const n={},r=zR(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const jT=()=>({...Up(),attrs:{}});function $R(t,e,n,r){const i=j.useMemo(()=>{const s=jT();return yT(s,e,_T(r),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};OT(s,t.style,t),i.style={...s,...i.style}}return i}const WR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function $p(t){return typeof t!="string"||t.includes("-")?!1:!!(WR.indexOf(t)>-1||/[A-Z]/u.test(t))}function HR(t,e,n,{latestValues:r},i,s=!1,o){const u=(o??$p(t)?$R:UR)(e,r,i,t),c=OR(e,typeof t=="string",s),d=t!==j.Fragment?{...c,...u,ref:n}:{},{children:f}=e,m=j.useMemo(()=>tt(f)?f.get():f,[f]);return j.createElement(t,{...d,children:m})}function KR({scrapeMotionValuesFromProps:t,createRenderState:e},n,r,i){return{latestValues:qR(n,r,i,t),renderState:e()}}function qR(t,e,n,r){const i={},s=r(t,{});for(const m in s)i[m]=Ll(s[m]);let{initial:o,animate:l}=t;const u=nc(t),c=aT(t);e&&c&&!u&&t.inherit!==!1&&(o===void 0&&(o=e.initial),l===void 0&&(l=e.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?l:o;if(f&&typeof f!="boolean"&&!tc(f)){const m=Array.isArray(f)?f:[f];for(let g=0;g<m.length;g++){const I=bp(t,m[g]);if(I){const{transitionEnd:P,transition:R,...x}=I;for(const w in x){let S=x[w];if(Array.isArray(S)){const V=d?S.length-1:0;S=S[V]}S!==null&&(i[w]=S)}for(const w in P)i[w]=P[w]}}}return i}const FT=t=>(e,n)=>{const r=j.useContext(rc),i=j.useContext(Zu),s=()=>KR(t,e,r,i);return n?s():gp(s)},GR=FT({scrapeMotionValuesFromProps:Bp,createRenderState:Up}),QR=FT({scrapeMotionValuesFromProps:wT,createRenderState:jT}),YR=Symbol.for("motionComponentSymbol");function XR(t,e,n){const r=j.useRef(n);j.useInsertionEffect(()=>{r.current=n});const i=j.useRef(null);return j.useCallback(s=>{var l;s&&((l=t.onMount)==null||l.call(t,s));const o=r.current;if(typeof o=="function")if(s){const u=o(s);typeof u=="function"&&(i.current=u)}else i.current?(i.current(),i.current=null):o(s);else o&&(o.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const BT=j.createContext({});function Ni(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function JR(t,e,n,r,i,s){var S,V;const{visualElement:o}=j.useContext(rc),l=j.useContext(NT),u=j.useContext(Zu),c=j.useContext(zp),d=c.reducedMotion,f=c.skipAnimations,m=j.useRef(null),g=j.useRef(!1);r=r||l.renderer,!m.current&&r&&(m.current=r(t,{visualState:e,parent:o,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d,skipAnimations:f,isSVG:s}),g.current&&m.current&&(m.current.manuallyAnimateOnMount=!0));const I=m.current,P=j.useContext(BT);I&&!I.projection&&i&&(I.type==="html"||I.type==="svg")&&ZR(m.current,n,i,P);const R=j.useRef(!1);j.useInsertionEffect(()=>{I&&R.current&&I.update(n,u)});const x=n[Gx],w=j.useRef(!!x&&typeof window<"u"&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,x))&&((V=window.MotionHasOptimisedAnimation)==null?void 0:V.call(window,x)));return ox(()=>{g.current=!0,I&&(R.current=!0,window.MotionIsMounted=!0,I.updateFeatures(),I.scheduleRenderMicrotask(),w.current&&I.animationState&&I.animationState.animateChanges())}),j.useEffect(()=>{I&&(!w.current&&I.animationState&&I.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,x)}),w.current=!1),I.enteringChildren=void 0)}),I}function ZR(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:l,layoutScroll:u,layoutRoot:c,layoutAnchor:d,layoutCrossfade:f}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:zT(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||l&&Ni(l),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:f,layoutScroll:u,layoutRoot:c,layoutAnchor:d})}function zT(t){if(t)return t.options.allowProjection!==!1?t.projection:zT(t.parent)}function _h(t,{forwardMotionProps:e=!1,type:n}={},r,i){r&&NR(r);const s=n?n==="svg":$p(t),o=s?QR:GR;function l(c,d){let f;const m={...j.useContext(zp),...c,layoutId:e2(c)},{isStatic:g}=m,I=FR(c),P=o(c,g);if(!g&&typeof window<"u"){t2();const R=n2(m);f=R.MeasureLayout,I.visualElement=JR(t,P,m,i,R.ProjectionNode,s)}return v.jsxs(rc.Provider,{value:I,children:[f&&I.visualElement?v.jsx(f,{visualElement:I.visualElement,...m}):null,HR(t,c,XR(P,I.visualElement,d),P,g,e,s)]})}l.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const u=j.forwardRef(l);return u[YR]=t,u}function e2({layoutId:t}){const e=j.useContext(mp).id;return e&&t!==void 0?e+"-"+t:t}function t2(t,e){j.useContext(NT).strict}function n2(t){const e=MT(),{drag:n,layout:r}=e;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(t)||r!=null&&r.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function r2(t,e){if(typeof Proxy>"u")return _h;const n=new Map,r=(s,o)=>_h(s,o,t,e),i=(s,o)=>r(s,o);return new Proxy(i,{get:(s,o)=>o==="create"?r:(n.has(o)||n.set(o,_h(o,void 0,t,e)),n.get(o))})}const i2=(t,e)=>e.isSVG??$p(t)?new Dk(e):new Ck(e,{allowProjection:t!==j.Fragment});class s2 extends jr{constructor(e){super(e),e.animationState||(e.animationState=jk(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();tc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let o2=0;class a2 extends jr{constructor(){super(...arguments),this.id=o2++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:o,custom:l}=this.node.getProps();if(typeof o=="string"){const u=ci(this.node,o,l);if(u){const{transition:c,transitionEnd:d,...f}=u;for(const m in f)(s=this.node.getValue(m))==null||s.jump(f[m])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const l2={animation:{Feature:s2},exit:{Feature:a2}};function _a(t){return{point:{x:t.pageX,y:t.pageY}}}const u2=t=>e=>Mp(e)&&t(e,_a(e));function bo(t,e,n,r){return ra(t,e,u2(n),r)}const UT=({current:t})=>t?t.ownerDocument.defaultView:null,bv=(t,e)=>Math.abs(t-e);function c2(t,e){const n=bv(t.x,e.x),r=bv(t.y,e.y);return Math.sqrt(n**2+r**2)}const Vv=new Set(["auto","scroll"]);class $T{constructor(e,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=g=>{this.handleScroll(g.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=dl(this.lastRawMoveEventInfo,this.transformPagePoint));const g=wh(this.lastMoveEventInfo,this.history),I=this.startEvent!==null,P=c2(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!I&&!P)return;const{point:R}=g,{timestamp:x}=Je;this.history.push({...R,timestamp:x});const{onStart:w,onMove:S}=this.handlers;I||(w&&w(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,g)},this.handlePointerMove=(g,I)=>{this.lastMoveEvent=g,this.lastRawMoveEventInfo=I,this.lastMoveEventInfo=dl(I,this.transformPagePoint),me.update(this.updatePoint,!0)},this.handlePointerUp=(g,I)=>{this.end();const{onEnd:P,onSessionEnd:R,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=wh(g.type==="pointercancel"?this.lastMoveEventInfo:dl(I,this.transformPagePoint),this.history);this.startEvent&&P&&P(g,w),R&&R(g,w)},!Mp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=i||window;const u=_a(e),c=dl(u,this.transformPagePoint),{point:d}=c,{timestamp:f}=Je;this.history=[{...d,timestamp:f}];const{onSessionStart:m}=n;m&&m(e,wh(c,this.history)),this.removeListeners=ga(bo(this.contextWindow,"pointermove",this.handlePointerMove),bo(this.contextWindow,"pointerup",this.handlePointerUp),bo(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(e){let n=e.parentElement;for(;n;){const r=getComputedStyle(n);(Vv.has(r.overflowX)||Vv.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const r=e===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:i.x-n.x,y:i.y-n.y};s.x===0&&s.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,i),me.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Rr(this.updatePoint)}}function dl(t,e){return e?{point:e(t.point)}:t}function Dv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function wh({point:t},e){return{point:t,delta:Dv(t,WT(e)),offset:Dv(t,h2(e)),velocity:d2(e,.1)}}function h2(t){return t[0]}function WT(t){return t[t.length-1]}function d2(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=WT(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>jt(e)));)n--;if(!r)return{x:0,y:0};r===t[0]&&t.length>2&&i.timestamp-r.timestamp>jt(e)*2&&(r=t[1]);const s=Qt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function f2(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?we(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?we(n,t,r.max):Math.min(t,n)),t}function Nv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function p2(t,{top:e,left:n,bottom:r,right:i}){return{x:Nv(t.x,n,i),y:Nv(t.y,e,r)}}function Mv(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function m2(t,e){return{x:Mv(t.x,e.x),y:Mv(t.y,e.y)}}function g2(t,e){let n=.5;const r=_t(t),i=_t(e);return i>r?n=ea(e.min,e.max-r,t.min):r>i&&(n=ea(t.min,t.max-i,e.min)),kn(0,1,n)}function y2(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Xd=.35;function v2(t=Xd){return t===!1?t=0:t===!0&&(t=Xd),{x:Lv(t,"left","right"),y:Lv(t,"top","bottom")}}function Lv(t,e,n){return{min:Ov(t,e),max:Ov(t,n)}}function Ov(t,e){return typeof t=="number"?t:t[e]||0}const _2=new WeakMap;class w2{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Be(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=f=>{n&&this.snapToCursor(_a(f).point),this.stopAnimation()},o=(f,m)=>{const{drag:g,dragPropagation:I,onDragStart:P}=this.getProps();if(g&&!I&&(this.openDragLock&&this.openDragLock(),this.openDragLock=KP(g),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=m,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),wn(x=>{let w=this.getAxisMotionValue(x).get()||0;if(In.test(w)){const{projection:S}=this.visualElement;if(S&&S.layout){const V=S.layout.layoutBox[x];V&&(w=_t(V)*(parseFloat(w)/100))}}this.originPoint[x]=w}),P&&me.update(()=>P(f,m),!1,!0),Ud(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},l=(f,m)=>{this.latestPointerEvent=f,this.latestPanInfo=m;const{dragPropagation:g,dragDirectionLock:I,onDirectionLock:P,onDrag:R}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:x}=m;if(I&&this.currentDirection===null){this.currentDirection=T2(x),this.currentDirection!==null&&P&&P(this.currentDirection);return}this.updateAxis("x",m.point,x),this.updateAxis("y",m.point,x),this.visualElement.render(),R&&me.update(()=>R(f,m),!1,!0)},u=(f,m)=>{this.latestPointerEvent=f,this.latestPanInfo=m,this.stop(f,m),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new $T(e,{onSessionStart:s,onStart:o,onMove:l,onSessionEnd:u,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:UT(this.visualElement),element:this.visualElement.current})}stop(e,n){const r=e||this.latestPointerEvent,i=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!i||!r)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&me.postRender(()=>l(r,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!fl(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=f2(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;e&&Ni(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=p2(r.layoutBox,e):this.constraints=!1,this.elastic=v2(n),i!==this.constraints&&!Ni(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&wn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=y2(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ni(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=xk(r,i.root,this.visualElement.getTransformPagePoint());let o=m2(i.layout.layoutBox,s);if(n){const l=n(vk(o));this.hasMutatedConstraints=!!l,l&&(o=hT(l))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),u=this.constraints||{},c=wn(d=>{if(!fl(d,n,this.currentDirection))return;let f=u&&u[d]||{};(o===!0||o===d)&&(f={min:0,max:0});const m=i?200:1e6,g=i?40:1e7,I={type:"inertia",velocity:r?e[d]:0,bounceStiffness:m,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,I)});return Promise.all(c).then(l)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Ud(this.visualElement,e),r.start(Rp(e,r,0,n,this.visualElement,!1))}stopAnimation(){wn(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){wn(n=>{const{drag:r}=this.getProps();if(!fl(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[n],u=s.get()||0;s.set(e[n]-we(o,l,.5)+u)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ni(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};wn(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const u=l.get();i[o]=g2({min:u,max:u},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),wn(o=>{if(!fl(o,e,null))return;const l=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];l.set(we(u,c,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;_2.set(this.visualElement,this);const e=this.visualElement.current,n=bo(e,"pointerdown",c=>{const{drag:d,dragListener:f=!0}=this.getProps(),m=c.target,g=m!==e&&JP(m);d&&f&&!g&&this.start(c)});let r;const i=()=>{const{dragConstraints:c}=this.getProps();Ni(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),r||(r=x2(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),me.read(i);const l=ra(window,"resize",()=>this.scalePositionWithinConstraints()),u=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(wn(f=>{const m=this.getAxisMotionValue(f);m&&(this.originPoint[f]+=c[f].translate,m.set(m.get()+c[f].translate))}),this.visualElement.render())});return()=>{l(),n(),o(),u&&u(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Xd,dragMomentum:l=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:l}}}function jv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function x2(t,e,n){const r=Hy(t,jv(n)),i=Hy(e,jv(n));return()=>{r(),i()}}function fl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function T2(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class E2 extends jr{constructor(e){super(e),this.removeGroupControls=Xt,this.removeListeners=Xt,this.controls=new w2(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xt}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const xh=t=>(e,n)=>{t&&me.update(()=>t(e,n),!1,!0)};class S2 extends jr{constructor(){super(...arguments),this.removePointerDownListener=Xt}onPointerDown(e){this.session=new $T(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:UT(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:xh(e),onStart:xh(n),onMove:xh(r),onEnd:(s,o)=>{delete this.session,i&&me.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=bo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Th=!1;class I2 extends j.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),Th&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ol.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:o}=r;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Th=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||me.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),Np.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;Th=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function HT(t){const[e,n]=DT(),r=j.useContext(mp);return v.jsx(I2,{...t,layoutGroup:r,switchLayoutGroup:j.useContext(BT),isPresent:e,safeToRemove:n})}const A2={pan:{Feature:S2},drag:{Feature:E2,ProjectionNode:VT,MeasureLayout:HT}};function Fv(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&me.postRender(()=>s(e,_a(e)))}class C2 extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=GP(e,(n,r)=>(Fv(this.node,r,"Start"),i=>Fv(this.node,i,"End"))))}unmount(){}}class P2 extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ga(ra(this.node.current,"focus",()=>this.onFocus()),ra(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Bv(t,e,n){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&me.postRender(()=>s(e,_a(e)))}class k2 extends jr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=ek(e,(i,s)=>(Bv(this.node,s,"Start"),(o,{success:l})=>Bv(this.node,o,l?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Jd=new WeakMap,Eh=new WeakMap,R2=t=>{const e=Jd.get(t.target);e&&e(t)},b2=t=>{t.forEach(R2)};function V2({root:t,...e}){const n=t||document;Eh.has(n)||Eh.set(n,{});const r=Eh.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(b2,{root:t,...e})),r[i]}function D2(t,e,n){const r=V2(e);return Jd.set(t,n),r.observe(t),()=>{Jd.delete(t),r.unobserve(t)}}const N2={some:0,all:1};class M2 extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var u;(u=this.stopObserver)==null||u.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:N2[i]},l=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,s&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:f,onViewportLeave:m}=this.node.getProps(),g=d?f:m;g&&g(c)};this.stopObserver=D2(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(L2(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function L2({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const O2={inView:{Feature:M2},tap:{Feature:k2},focus:{Feature:P2},hover:{Feature:C2}},j2={layout:{ProjectionNode:VT,MeasureLayout:HT}},F2={...l2,...O2,...A2,...j2},oo=r2(F2,i2);var zv={};/**
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
 */const KT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},B2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,g=c&63;u||(g=64,o||(m=64)),r.push(n[d],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(KT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):B2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new z2;const m=s<<2|l>>4;if(r.push(m),c!==64){const g=l<<4&240|c>>2;if(r.push(g),f!==64){const I=c<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class z2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U2=function(t){const e=KT(t);return qT.encodeByteArray(e,!0)},Eu=function(t){return U2(t).replace(/\./g,"")},$2=function(t){try{return qT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function W2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const H2=()=>W2().__FIREBASE_DEFAULTS__,K2=()=>{if(typeof process>"u"||typeof zv>"u")return;const t=zv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},q2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$2(t[1]);return e&&JSON.parse(e)},Wp=()=>{try{return H2()||K2()||q2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},G2=t=>{var e,n;return(n=(e=Wp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Q2=t=>{const e=G2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},GT=()=>{var t;return(t=Wp())===null||t===void 0?void 0:t.config};/**
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
 */class Y2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function X2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eu(JSON.stringify(n)),Eu(JSON.stringify(o)),""].join(".")}/**
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
 */function J2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Z2(){var t;const e=(t=Wp())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tb(){return!Z2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QT(){try{return typeof indexedDB=="object"}catch{return!1}}function YT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function nb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const rb="FirebaseError";class Fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rb,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ic.prototype.create)}}class ic{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ib(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fr(i,l,r)}}function ib(t,e){return t.replace(sb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sb=/\{\$([^}]+)}/g;function Su(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Uv(s)&&Uv(o)){if(!Su(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uv(t){return t!==null&&typeof t=="object"}/**
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
 */const ob=1e3,ab=2,lb=4*60*60*1e3,ub=.5;function $v(t,e=ob,n=ab){const r=e*Math.pow(n,t),i=Math.round(ub*r*(Math.random()-.5)*2);return Math.min(lb,r+i)}/**
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
 */function mn(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class cb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Y2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(db(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hb(t){return t===Zr?void 0:t}function db(t){return t.instantiationMode==="EAGER"}/**
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
 */class fb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const pb={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},mb=oe.INFO,gb={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},yb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hp{constructor(e){this.name=e,this._logLevel=mb,this._logHandler=yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const vb=(t,e)=>e.some(n=>t instanceof n);let Wv,Hv;function _b(){return Wv||(Wv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wb(){return Hv||(Hv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XT=new WeakMap,Zd=new WeakMap,JT=new WeakMap,Sh=new WeakMap,Kp=new WeakMap;function xb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&XT.set(n,t)}).catch(()=>{}),Kp.set(e,t),e}function Tb(t){if(Zd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zd.set(t,e)}let ef={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||JT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Eb(t){ef=t(ef)}function Sb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ih(this),e,...n);return JT.set(r,e.sort?e.sort():[e]),Er(r)}:wb().includes(t)?function(...e){return t.apply(Ih(this),e),Er(XT.get(this))}:function(...e){return Er(t.apply(Ih(this),e))}}function Ib(t){return typeof t=="function"?Sb(t):(t instanceof IDBTransaction&&Tb(t),vb(t,_b())?new Proxy(t,ef):t)}function Er(t){if(t instanceof IDBRequest)return xb(t);if(Sh.has(t))return Sh.get(t);const e=Ib(t);return e!==t&&(Sh.set(t,e),Kp.set(e,t)),e}const Ih=t=>Kp.get(t);function ZT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Er(o.result),u.oldVersion,u.newVersion,Er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ab=["get","getKey","getAll","getAllKeys","count"],Cb=["put","add","delete","clear"],Ah=new Map;function Kv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ah.get(e))return Ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Cb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ab.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Ah.set(e,s),s}Eb(t=>({...t,get:(e,n,r)=>Kv(e,n)||t.get(e,n,r),has:(e,n)=>!!Kv(e,n)||t.has(e,n)}));/**
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
 */class Pb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tf="@firebase/app",qv="0.10.13";/**
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
 */const Gn=new Hp("@firebase/app"),Rb="@firebase/app-compat",bb="@firebase/analytics-compat",Vb="@firebase/analytics",Db="@firebase/app-check-compat",Nb="@firebase/app-check",Mb="@firebase/auth",Lb="@firebase/auth-compat",Ob="@firebase/database",jb="@firebase/data-connect",Fb="@firebase/database-compat",Bb="@firebase/functions",zb="@firebase/functions-compat",Ub="@firebase/installations",$b="@firebase/installations-compat",Wb="@firebase/messaging",Hb="@firebase/messaging-compat",Kb="@firebase/performance",qb="@firebase/performance-compat",Gb="@firebase/remote-config",Qb="@firebase/remote-config-compat",Yb="@firebase/storage",Xb="@firebase/storage-compat",Jb="@firebase/firestore",Zb="@firebase/vertexai-preview",eV="@firebase/firestore-compat",tV="firebase",nV="10.14.1";/**
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
 */const nf="[DEFAULT]",rV={[tf]:"fire-core",[Rb]:"fire-core-compat",[Vb]:"fire-analytics",[bb]:"fire-analytics-compat",[Nb]:"fire-app-check",[Db]:"fire-app-check-compat",[Mb]:"fire-auth",[Lb]:"fire-auth-compat",[Ob]:"fire-rtdb",[jb]:"fire-data-connect",[Fb]:"fire-rtdb-compat",[Bb]:"fire-fn",[zb]:"fire-fn-compat",[Ub]:"fire-iid",[$b]:"fire-iid-compat",[Wb]:"fire-fcm",[Hb]:"fire-fcm-compat",[Kb]:"fire-perf",[qb]:"fire-perf-compat",[Gb]:"fire-rc",[Qb]:"fire-rc-compat",[Yb]:"fire-gcs",[Xb]:"fire-gcs-compat",[Jb]:"fire-fst",[eV]:"fire-fst-compat",[Zb]:"fire-vertex","fire-js":"fire-js",[tV]:"fire-js-all"};/**
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
 */const Iu=new Map,iV=new Map,rf=new Map;function Gv(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function br(t){const e=t.name;if(rf.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;rf.set(e,t);for(const n of Iu.values())Gv(n,t);for(const n of iV.values())Gv(n,t);return!0}function wa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const sV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new ic("app","Firebase",sV);/**
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
 */class oV{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const aV=nV;function eE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=GT()),!n)throw Sr.create("no-options");const s=Iu.get(i);if(s){if(Su(n,s.options)&&Su(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new fb(i);for(const u of rf.values())o.addComponent(u);const l=new oV(n,r,o);return Iu.set(i,l),l}function tE(t=nf){const e=Iu.get(t);if(!e&&t===nf&&GT())return eE();if(!e)throw Sr.create("no-app",{appName:t});return e}function An(t,e,n){var r;let i=(r=rV[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(l.join(" "));return}br(new qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const lV="firebase-heartbeat-database",uV=1,ia="firebase-heartbeat-store";let Ch=null;function nE(){return Ch||(Ch=ZT(lV,uV,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ia)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function cV(t){try{const n=(await nE()).transaction(ia),r=await n.objectStore(ia).get(rE(t));return await n.done,r}catch(e){if(e instanceof Fr)Gn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Qv(t,e){try{const r=(await nE()).transaction(ia,"readwrite");await r.objectStore(ia).put(e,rE(t)),await r.done}catch(n){if(n instanceof Fr)Gn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function rE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hV=1024,dV=30*24*60*60*1e3;class fV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=dV}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yv(),{heartbeatsToSend:r,unsentEntries:i}=pV(this._heartbeatsCache.heartbeats),s=Eu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gn.warn(n),""}}}function Yv(){return new Date().toISOString().substring(0,10)}function pV(t,e=hV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QT()?YT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xv(t){return Eu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gV(t){br(new qn("platform-logger",e=>new Pb(e),"PRIVATE")),br(new qn("heartbeat",e=>new fV(e),"PRIVATE")),An(tf,qv,t),An(tf,qv,"esm2017"),An("fire-js","")}gV("");var yV="firebase",vV="10.14.1";/**
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
 */An(yV,vV,"app");var Jv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi,iE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function T(){}T.prototype=y.prototype,A.D=y.prototype,A.prototype=new T,A.prototype.constructor=A,A.C=function(E,k,b){for(var C=Array(arguments.length-2),re=2;re<arguments.length;re++)C[re-2]=arguments[re];return y.prototype[k].apply(E,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,y,T){T||(T=0);var E=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)E[k]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(k=0;16>k;++k)E[k]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=A.g[0],T=A.g[1],k=A.g[2];var b=A.g[3],C=y+(b^T&(k^b))+E[0]+3614090360&4294967295;y=T+(C<<7&4294967295|C>>>25),C=b+(k^y&(T^k))+E[1]+3905402710&4294967295,b=y+(C<<12&4294967295|C>>>20),C=k+(T^b&(y^T))+E[2]+606105819&4294967295,k=b+(C<<17&4294967295|C>>>15),C=T+(y^k&(b^y))+E[3]+3250441966&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(b^T&(k^b))+E[4]+4118548399&4294967295,y=T+(C<<7&4294967295|C>>>25),C=b+(k^y&(T^k))+E[5]+1200080426&4294967295,b=y+(C<<12&4294967295|C>>>20),C=k+(T^b&(y^T))+E[6]+2821735955&4294967295,k=b+(C<<17&4294967295|C>>>15),C=T+(y^k&(b^y))+E[7]+4249261313&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(b^T&(k^b))+E[8]+1770035416&4294967295,y=T+(C<<7&4294967295|C>>>25),C=b+(k^y&(T^k))+E[9]+2336552879&4294967295,b=y+(C<<12&4294967295|C>>>20),C=k+(T^b&(y^T))+E[10]+4294925233&4294967295,k=b+(C<<17&4294967295|C>>>15),C=T+(y^k&(b^y))+E[11]+2304563134&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(b^T&(k^b))+E[12]+1804603682&4294967295,y=T+(C<<7&4294967295|C>>>25),C=b+(k^y&(T^k))+E[13]+4254626195&4294967295,b=y+(C<<12&4294967295|C>>>20),C=k+(T^b&(y^T))+E[14]+2792965006&4294967295,k=b+(C<<17&4294967295|C>>>15),C=T+(y^k&(b^y))+E[15]+1236535329&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(k^b&(T^k))+E[1]+4129170786&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^k&(y^T))+E[6]+3225465664&4294967295,b=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(b^y))+E[11]+643717713&4294967295,k=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(k^b))+E[0]+3921069994&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(k^b&(T^k))+E[5]+3593408605&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^k&(y^T))+E[10]+38016083&4294967295,b=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(b^y))+E[15]+3634488961&4294967295,k=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(k^b))+E[4]+3889429448&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(k^b&(T^k))+E[9]+568446438&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^k&(y^T))+E[14]+3275163606&4294967295,b=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(b^y))+E[3]+4107603335&4294967295,k=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(k^b))+E[8]+1163531501&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(k^b&(T^k))+E[13]+2850285829&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^k&(y^T))+E[2]+4243563512&4294967295,b=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(b^y))+E[7]+1735328473&4294967295,k=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(k^b))+E[12]+2368359562&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(T^k^b)+E[5]+4294588738&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^k)+E[8]+2272392833&4294967295,b=y+(C<<11&4294967295|C>>>21),C=k+(b^y^T)+E[11]+1839030562&4294967295,k=b+(C<<16&4294967295|C>>>16),C=T+(k^b^y)+E[14]+4259657740&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(T^k^b)+E[1]+2763975236&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^k)+E[4]+1272893353&4294967295,b=y+(C<<11&4294967295|C>>>21),C=k+(b^y^T)+E[7]+4139469664&4294967295,k=b+(C<<16&4294967295|C>>>16),C=T+(k^b^y)+E[10]+3200236656&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(T^k^b)+E[13]+681279174&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^k)+E[0]+3936430074&4294967295,b=y+(C<<11&4294967295|C>>>21),C=k+(b^y^T)+E[3]+3572445317&4294967295,k=b+(C<<16&4294967295|C>>>16),C=T+(k^b^y)+E[6]+76029189&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(T^k^b)+E[9]+3654602809&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^k)+E[12]+3873151461&4294967295,b=y+(C<<11&4294967295|C>>>21),C=k+(b^y^T)+E[15]+530742520&4294967295,k=b+(C<<16&4294967295|C>>>16),C=T+(k^b^y)+E[2]+3299628645&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(k^(T|~b))+E[0]+4096336452&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~k))+E[7]+1126891415&4294967295,b=y+(C<<10&4294967295|C>>>22),C=k+(y^(b|~T))+E[14]+2878612391&4294967295,k=b+(C<<15&4294967295|C>>>17),C=T+(b^(k|~y))+E[5]+4237533241&4294967295,T=k+(C<<21&4294967295|C>>>11),C=y+(k^(T|~b))+E[12]+1700485571&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~k))+E[3]+2399980690&4294967295,b=y+(C<<10&4294967295|C>>>22),C=k+(y^(b|~T))+E[10]+4293915773&4294967295,k=b+(C<<15&4294967295|C>>>17),C=T+(b^(k|~y))+E[1]+2240044497&4294967295,T=k+(C<<21&4294967295|C>>>11),C=y+(k^(T|~b))+E[8]+1873313359&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~k))+E[15]+4264355552&4294967295,b=y+(C<<10&4294967295|C>>>22),C=k+(y^(b|~T))+E[6]+2734768916&4294967295,k=b+(C<<15&4294967295|C>>>17),C=T+(b^(k|~y))+E[13]+1309151649&4294967295,T=k+(C<<21&4294967295|C>>>11),C=y+(k^(T|~b))+E[4]+4149444226&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~k))+E[11]+3174756917&4294967295,b=y+(C<<10&4294967295|C>>>22),C=k+(y^(b|~T))+E[2]+718787259&4294967295,k=b+(C<<15&4294967295|C>>>17),C=T+(b^(k|~y))+E[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,A.g[2]=A.g[2]+k&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var T=y-this.blockSize,E=this.B,k=this.h,b=0;b<y;){if(k==0)for(;b<=T;)i(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<y;)if(E[k++]=A.charCodeAt(b++),k==this.blockSize){i(this,E),k=0;break}}else for(;b<y;)if(E[k++]=A[b++],k==this.blockSize){i(this,E),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var T=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=T&255,T/=256;for(this.u(A),A=Array(16),y=T=0;4>y;++y)for(var E=0;32>E;E+=8)A[T++]=this.g[y]>>>E&255;return A};function s(A,y){var T=l;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=y(A)}function o(A,y){this.h=y;for(var T=[],E=!0,k=A.length-1;0<=k;k--){var b=A[k]|0;E&&b==y||(T[k]=b,E=!1)}this.g=T}var l={};function u(A){return-128<=A&&128>A?s(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return f;if(0>A)return R(c(-A));for(var y=[],T=1,E=0;A>=T;E++)y[E]=A/T|0,T*=4294967296;return new o(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return R(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),E=f,k=0;k<A.length;k+=8){var b=Math.min(8,A.length-k),C=parseInt(A.substring(k,k+b),y);8>b?(b=c(Math.pow(y,b)),E=E.j(b).add(c(C))):(E=E.j(T),E=E.add(c(C)))}return E}var f=u(0),m=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-R(this).m();for(var A=0,y=1,T=0;T<this.g.length;T++){var E=this.i(T);A+=(0<=E?E:4294967296+E)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(I(this))return"0";if(P(this))return"-"+R(this).toString(A);for(var y=c(Math.pow(A,6)),T=this,E="";;){var k=V(T,y).g;T=x(T,k.j(y));var b=((0<T.g.length?T.g[0]:T.h)>>>0).toString(A);if(T=k,I(T))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function I(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function P(A){return A.h==-1}t.l=function(A){return A=x(this,A),P(A)?-1:I(A)?0:1};function R(A){for(var y=A.g.length,T=[],E=0;E<y;E++)T[E]=~A.g[E];return new o(T,~A.h).add(m)}t.abs=function(){return P(this)?R(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],E=0,k=0;k<=y;k++){var b=E+(this.i(k)&65535)+(A.i(k)&65535),C=(b>>>16)+(this.i(k)>>>16)+(A.i(k)>>>16);E=C>>>16,b&=65535,C&=65535,T[k]=C<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function x(A,y){return A.add(R(y))}t.j=function(A){if(I(this)||I(A))return f;if(P(this))return P(A)?R(this).j(R(A)):R(R(this).j(A));if(P(A))return R(this.j(R(A)));if(0>this.l(g)&&0>A.l(g))return c(this.m()*A.m());for(var y=this.g.length+A.g.length,T=[],E=0;E<2*y;E++)T[E]=0;for(E=0;E<this.g.length;E++)for(var k=0;k<A.g.length;k++){var b=this.i(E)>>>16,C=this.i(E)&65535,re=A.i(k)>>>16,Te=A.i(k)&65535;T[2*E+2*k]+=C*Te,w(T,2*E+2*k),T[2*E+2*k+1]+=b*Te,w(T,2*E+2*k+1),T[2*E+2*k+1]+=C*re,w(T,2*E+2*k+1),T[2*E+2*k+2]+=b*re,w(T,2*E+2*k+2)}for(E=0;E<y;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=y;E<2*y;E++)T[E]=0;return new o(T,0)};function w(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function S(A,y){this.g=A,this.h=y}function V(A,y){if(I(y))throw Error("division by zero");if(I(A))return new S(f,f);if(P(A))return y=V(R(A),y),new S(R(y.g),R(y.h));if(P(y))return y=V(A,R(y)),new S(R(y.g),y.h);if(30<A.g.length){if(P(A)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,E=y;0>=E.l(A);)T=M(T),E=M(E);var k=O(T,1),b=O(E,1);for(E=O(E,2),T=O(T,2);!I(E);){var C=b.add(E);0>=C.l(A)&&(k=k.add(T),b=C),E=O(E,1),T=O(T,1)}return y=x(A,k.j(y)),new S(k,y)}for(k=f;0<=A.l(y);){for(T=Math.max(1,Math.floor(A.m()/y.m())),E=Math.ceil(Math.log(T)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=c(T),C=b.j(y);P(C)||0<C.l(A);)T-=E,b=c(T),C=b.j(y);I(b)&&(b=m),k=k.add(b),A=x(A,C)}return new S(k,A)}t.A=function(A){return V(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],E=0;E<y;E++)T[E]=this.i(E)&A.i(E);return new o(T,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],E=0;E<y;E++)T[E]=this.i(E)|A.i(E);return new o(T,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],E=0;E<y;E++)T[E]=this.i(E)^A.i(E);return new o(T,this.h^A.h)};function M(A){for(var y=A.g.length+1,T=[],E=0;E<y;E++)T[E]=A.i(E)<<1|A.i(E-1)>>>31;return new o(T,A.h)}function O(A,y){var T=y>>5;y%=32;for(var E=A.g.length-T,k=[],b=0;b<E;b++)k[b]=0<y?A.i(b+T)>>>y|A.i(b+T+1)<<32-y:A.i(b+T);return new o(k,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,hi=o}).apply(typeof Jv<"u"?Jv:typeof self<"u"?self:typeof window<"u"?window:{});var pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sE,mo,oE,jl,sf,aE,lE,uE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof pl=="object"&&pl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,_=!1,D={next:function(){if(!_&&p<a.length){var N=p++;return{value:h(N,a[N]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function g(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function I(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,D,N){for(var $=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)$[pe-2]=arguments[pe];return h.prototype[D].apply(_,$)}}function P(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function R(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const D=a.length||0,N=_.length||0;a.length=D+N;for(let $=0;$<N;$++)a[D+$]=_[$]}else a.push(_)}}class x{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function O(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function A(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function y(a){const h={};for(const p in a)h[p]=a[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let N=0;N<T.length;N++)p=T[N],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function k(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function C(){var a=H;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class re{constructor(){this.h=this.g=null}add(h,p){const _=Te.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Te=new x(()=>new Ee,a=>a.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,B=!1,H=new re,Y=()=>{const a=l.Promise.resolve(void 0);ot=()=>{a.then(ie)}};var ie=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(p){b(p)}var h=Te;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Et=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function gt(a,h){if(ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{V(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&gt.aa.h.call(this)}}I(gt,ge);var Vt={2:"touch",3:"pen",4:"mouse"};gt.prototype.h=function(){gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Wt="closure_listenable_"+(1e6*Math.random()|0),Ca=0;function Pa(a,h,p,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=D,this.key=++Ca,this.da=this.fa=!1}function gn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function yn(a){this.src=a,this.g={},this.h=0}yn.prototype.add=function(a,h,p,_,D){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var $=zr(a,h,_,D);return-1<$?(h=a[$],p||(h.fa=!1)):(h=new Pa(h,this.src,N,!!_,D),h.fa=p,a.push(h)),h};function Jn(a,h){var p=h.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,h,void 0),N;(N=0<=D)&&Array.prototype.splice.call(_,D,1),N&&(gn(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function zr(a,h,p,_){for(var D=0;D<a.length;++D){var N=a[D];if(!N.da&&N.listener==h&&N.capture==!!p&&N.ha==_)return D}return-1}var Vs="closure_lm_"+(1e6*Math.random()|0),Ds={};function Ns(a,h,p,_,D){if(Array.isArray(h)){for(var N=0;N<h.length;N++)Ns(a,h[N],p,_,D);return null}return p=ka(p),a&&a[Wt]?a.K(h,p,c(_)?!!_.capture:!1,D):Tc(a,h,p,!1,_,D)}function Tc(a,h,p,_,D,N){if(!h)throw Error("Invalid event type");var $=c(D)?!!D.capture:!!D,pe=js(a);if(pe||(a[Vs]=pe=new yn(a)),p=pe.add(h,p,_,$,N),p.proxy)return p;if(_=Ec(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)Et||(D=$),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(Ls(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ec(){function a(p){return h.call(a.src,a.listener,p)}const h=Os;return a}function Ms(a,h,p,_,D){if(Array.isArray(h))for(var N=0;N<h.length;N++)Ms(a,h[N],p,_,D);else _=c(_)?!!_.capture:!!_,p=ka(p),a&&a[Wt]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],p=zr(N,p,_,D),-1<p&&(gn(N[p]),Array.prototype.splice.call(N,p,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=js(a))&&(h=a.g[h.toString()],a=-1,h&&(a=zr(h,p,_,D)),(p=-1<a?h[a]:null)&&Zn(p))}function Zn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Wt])Jn(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(Ls(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=js(h))?(Jn(p,a),p.h==0&&(p.src=null,h[Vs]=null)):gn(a)}}}function Ls(a){return a in Ds?Ds[a]:Ds[a]="on"+a}function Os(a,h){if(a.da)a=!0;else{h=new gt(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&Zn(a),a=p.call(_,h)}return a}function js(a){return a=a[Vs],a instanceof yn?a:null}var Fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ka(a){return typeof a=="function"?a:(a[Fs]||(a[Fs]=function(h){return a.handleEvent(h)}),a[Fs])}function He(){le.call(this),this.i=new yn(this),this.M=this,this.F=null}I(He,le),He.prototype[Wt]=!0,He.prototype.removeEventListener=function(a,h,p,_){Ms(this,a,h,p,_)};function Qe(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new ge(h,a);else if(h instanceof ge)h.target=h.target||a;else{var D=h;h=new ge(_,a),E(h,D)}if(D=!0,p)for(var N=p.length-1;0<=N;N--){var $=h.g=p[N];D=er($,_,!0,h)&&D}if($=h.g=a,D=er($,_,!0,h)&&D,D=er($,_,!1,h)&&D,p)for(N=0;N<p.length;N++)$=h.g=p[N],D=er($,_,!1,h)&&D}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)gn(p[_]);delete a.g[h],a.h--}}this.F=null},He.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},He.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function er(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,N=0;N<h.length;++N){var $=h[N];if($&&!$.da&&$.capture==p){var pe=$.listener,Ye=$.ha||$.src;$.fa&&Jn(a.i,$),D=pe.call(Ye,_)!==!1&&D}}return D&&!_.defaultPrevented}function Vn(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ur(a){a.g=Vn(()=>{a.g=null,a.i&&(a.i=!1,Ur(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Bs extends le{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ur(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(a){le.call(this),this.h=a,this.g={}}I($r,le);var Ra=[];function ba(a){O(a.g,function(h,p){this.g.hasOwnProperty(p)&&Zn(h)},a),a.g={}}$r.prototype.N=function(){$r.aa.N.call(this),ba(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ci=l.JSON.stringify,L=l.JSON.parse,G=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function he(){}he.prototype.h=null;function Fe(a){return a.h||(a.h=a.i())}function St(){}var en={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dn(){ge.call(this,"d")}I(Dn,ge);function Wr(){ge.call(this,"c")}I(Wr,ge);var Ht={},Nn=null;function Hr(){return Nn=Nn||new He}Ht.La="serverreachability";function Mn(a){ge.call(this,Ht.La,a)}I(Mn,ge);function tn(a){const h=Hr();Qe(h,new Mn(h))}Ht.STAT_EVENT="statevent";function Pi(a,h){ge.call(this,Ht.STAT_EVENT,a),this.stat=h}I(Pi,ge);function Ae(a){const h=Hr();Qe(h,new Pi(h,a))}Ht.Ma="timingevent";function Rm(a,h){ge.call(this,Ht.Ma,a),this.size=h}I(Rm,ge);function zs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Us(){this.g=!0}Us.prototype.xa=function(){this.g=!1};function W1(a,h,p,_,D,N){a.info(function(){if(a.g)if(N)for(var $="",pe=N.split("&"),Ye=0;Ye<pe.length;Ye++){var ue=pe[Ye].split("=");if(1<ue.length){var at=ue[0];ue=ue[1];var lt=at.split("_");$=2<=lt.length&&lt[1]=="type"?$+(at+"="+ue+"&"):$+(at+"=redacted&")}}else $=null;else $=N;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+p+`
`+$})}function H1(a,h,p,_,D,N,$){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+p+`
`+N+" "+$})}function ki(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+q1(a,p)+(_?" "+_:"")})}function K1(a,h){a.info(function(){return"TIMEOUT: "+h})}Us.prototype.info=function(){};function q1(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var N=D[0];if(N!="noop"&&N!="stop"&&N!="close")for(var $=1;$<D.length;$++)D[$]=""}}}}return Ci(p)}catch{return h}}var Va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sc;function Da(){}I(Da,he),Da.prototype.g=function(){return new XMLHttpRequest},Da.prototype.i=function(){return{}},Sc=new Da;function tr(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new $r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vm}function Vm(){this.i=null,this.g="",this.h=!1}var Dm={},Ic={};function Ac(a,h,p){a.L=1,a.v=Oa(Ln(h)),a.m=p,a.P=!0,Nm(a,null)}function Nm(a,h){a.F=Date.now(),Na(a),a.A=Ln(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Gm(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Vm,a.g=dg(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Bs(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Ra[0]=D.toString()),D=Ra);for(var N=0;N<D.length;N++){var $=Ns(p,D[N],_||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),tn(),W1(a.i,a.u,a.A,a.l,a.R,a.m)}tr.prototype.ca=function(a){a=a.target;const h=this.M;h&&On(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const lt=On(this.g);var h=this.g.Ba();const Vi=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||tg(this.g)))){this.J||lt!=4||h==7||(h==8||0>=Vi?tn(3):tn(2)),Cc(this);var p=this.g.Z();this.X=p;t:if(Mm(this)){var _=tg(this.g);a="";var D=_.length,N=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kr(this),$s(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(N&&h==D-1)});_.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,H1(this.i,this.u,this.A,this.l,this.R,lt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ye=this.g;if((pe=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(pe)){var ue=pe;break t}}ue=null}if(p=ue)ki(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pc(this,p);else{this.o=!1,this.s=3,Ae(12),Kr(this),$s(this);break e}}if(this.P){p=!0;let nn;for(;!this.J&&this.C<$.length;)if(nn=G1(this,$),nn==Ic){lt==4&&(this.s=4,Ae(14),p=!1),ki(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Dm){this.s=4,Ae(15),ki(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else ki(this.i,this.l,nn,null),Pc(this,nn);if(Mm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||$.length!=0||this.h.h||(this.s=1,Ae(16),p=!1),this.o=this.o&&p,!p)ki(this.i,this.l,$,"[Invalid Chunked Response]"),Kr(this),$s(this);else if(0<$.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Nc(at),at.M=!0,Ae(11))}}else ki(this.i,this.l,$,null),Pc(this,$);lt==4&&Kr(this),this.o&&!this.J&&(lt==4?lg(this.j,this):(this.o=!1,Na(this)))}else hS(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),Kr(this),$s(this)}}}catch{}finally{}};function Mm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function G1(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?Ic:(p=Number(h.substring(p,_)),isNaN(p)?Dm:(_+=1,_+p>h.length?Ic:(h=h.slice(_,_+p),a.C=_+p,h)))}tr.prototype.cancel=function(){this.J=!0,Kr(this)};function Na(a){a.S=Date.now()+a.I,Lm(a,a.I)}function Lm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zs(m(a.ba,a),h)}function Cc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(K1(this.i,this.A),this.L!=2&&(tn(),Ae(17)),Kr(this),this.s=2,$s(this)):Lm(this,this.S-a)};function $s(a){a.j.G==0||a.J||lg(a.j,a)}function Kr(a){Cc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ba(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Pc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||kc(p.h,a))){if(!a.K&&kc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)$a(p),za(p);else break e;Dc(p),Ae(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=zs(m(p.Za,p),6e3));if(1>=Fm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Gr(p,11)}else if((a.K||p.g==a)&&$a(p),!w(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let ue=D[h];if(p.T=ue[0],ue=ue[1],p.G==2)if(ue[0]=="c"){p.K=ue[1],p.ia=ue[2];const at=ue[3];at!=null&&(p.la=at,p.j.info("VER="+p.la));const lt=ue[4];lt!=null&&(p.Aa=lt,p.j.info("SVER="+p.Aa));const Vi=ue[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(_=1.5*Vi,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const nn=a.g;if(nn){const Ha=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ha){var N=_.h;N.g||Ha.indexOf("spdy")==-1&&Ha.indexOf("quic")==-1&&Ha.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Rc(N,N.h),N.h=null))}if(_.D){const Mc=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Mc&&(_.ya=Mc,ve(_.I,_.D,Mc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var $=a;if(_.qa=hg(_,_.J?_.ia:null,_.W),$.K){Bm(_.h,$);var pe=$,Ye=_.L;Ye&&(pe.I=Ye),pe.B&&(Cc(pe),Na(pe)),_.g=$}else og(_);0<p.i.length&&Ua(p)}else ue[0]!="stop"&&ue[0]!="close"||Gr(p,7);else p.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Gr(p,7):Vc(p):ue[0]!="noop"&&p.l&&p.l.ta(ue),p.v=0)}}tn(4)}catch{}}var Q1=class{constructor(a,h){this.g=a,this.map=h}};function Om(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Fm(a){return a.h?1:a.g?a.g.size:0}function kc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Rc(a,h){a.g?a.g.add(h):a.h=h}function Bm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Om.prototype.cancel=function(){if(this.i=zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return P(a.i)}function Y1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function X1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function Um(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=X1(a),_=Y1(a),D=_.length,N=0;N<D;N++)h.call(void 0,_[N],p&&p[N],a)}var $m=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function J1(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),D=null;if(0<=_){var N=a[p].substring(0,_);D=a[p].substring(_+1)}else N=a[p];h(N,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof qr){this.h=a.h,Ma(this,a.j),this.o=a.o,this.g=a.g,La(this,a.s),this.l=a.l;var h=a.i,p=new Ks;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Wm(this,p),this.m=a.m}else a&&(h=String(a).match($m))?(this.h=!1,Ma(this,h[1]||"",!0),this.o=Ws(h[2]||""),this.g=Ws(h[3]||"",!0),La(this,h[4]),this.l=Ws(h[5]||"",!0),Wm(this,h[6]||"",!0),this.m=Ws(h[7]||"")):(this.h=!1,this.i=new Ks(null,this.h))}qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Hs(h,Hm,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Hs(h,Hm,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Hs(p,p.charAt(0)=="/"?tS:eS,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Hs(p,rS)),a.join("")};function Ln(a){return new qr(a)}function Ma(a,h,p){a.j=p?Ws(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function La(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Wm(a,h,p){h instanceof Ks?(a.i=h,iS(a.i,a.h)):(p||(h=Hs(h,nS)),a.i=new Ks(h,a.h))}function ve(a,h,p){a.i.set(h,p)}function Oa(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ws(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Z1),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Z1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hm=/[#\/\?@]/g,eS=/[#\?:]/g,tS=/[#\?]/g,nS=/[#\?@]/g,rS=/#/g;function Ks(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function nr(a){a.g||(a.g=new Map,a.h=0,a.i&&J1(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ks.prototype,t.add=function(a,h){nr(this),this.i=null,a=Ri(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Km(a,h){nr(a),h=Ri(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function qm(a,h){return nr(a),h=Ri(a,h),a.g.has(h)}t.forEach=function(a,h){nr(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(h,D,_,this)},this)},this)},t.na=function(){nr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const D=a[_];for(let N=0;N<D.length;N++)p.push(h[_])}return p},t.V=function(a){nr(this);let h=[];if(typeof a=="string")qm(this,a)&&(h=h.concat(this.g.get(Ri(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return nr(this),this.i=null,a=Ri(this,a),qm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Gm(a,h,p){Km(a,h),0<p.length&&(a.i=null,a.g.set(Ri(a,h),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const N=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var D=N;$[_]!==""&&(D+="="+encodeURIComponent(String($[_]))),a.push(D)}}return this.i=a.join("&")};function Ri(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function iS(a,h){h&&!a.j&&(nr(a),a.i=null,a.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&(Km(this,_),Gm(this,D,p))},a)),a.j=h}function sS(a,h){const p=new Us;if(l.Image){const _=new Image;_.onload=g(rr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=g(rr,p,"TestLoadImage: error",!1,h,_),_.onabort=g(rr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=g(rr,p,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function oS(a,h){const p=new Us,_=new AbortController,D=setTimeout(()=>{_.abort(),rr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(N=>{clearTimeout(D),N.ok?rr(p,"TestPingServer: ok",!0,h):rr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),rr(p,"TestPingServer: error",!1,h)})}function rr(a,h,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function aS(){this.g=new G}function lS(a,h,p){const _=p||"";try{Um(a,function(D,N){let $=D;c(D)&&($=Ci(D)),h.push(_+N+"="+encodeURIComponent($))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function ja(a){this.l=a.Ub||null,this.j=a.eb||!1}I(ja,he),ja.prototype.g=function(){return new Fa(this.l,this.j)},ja.prototype.i=function(a){return function(){return a}}({});function Fa(a,h){He.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Fa,He),t=Fa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Gs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qs(this):Gs(this),this.readyState==3&&Qm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Qa=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Gs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Gs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ym(a){let h="";return O(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function bc(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Ym(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ve(a,h,p))}function be(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(be,He);var uS=/^https?$/i,cS=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sc.g(),this.v=this.o?Fe(this.o):Fe(Sc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Xm(this,N);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())p.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(cS,h,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,$]of p)this.g.setRequestHeader(N,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{eg(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Xm(this,N)}};function Xm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Jm(a),Ba(a)}function Jm(a){a.A||(a.A=!0,Qe(a,"complete"),Qe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Qe(this,"complete"),Qe(this,"abort"),Ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ba(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zm(this):this.bb())},t.bb=function(){Zm(this)};function Zm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||On(a)!=4||a.Z()!=2)){if(a.u&&On(a)==4)Vn(a.Ea,0,a);else if(Qe(a,"readystatechange"),On(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=$===0){var D=String(a.D).match($m)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),_=!uS.test(D?D.toLowerCase():"")}p=_}if(p)Qe(a,"complete"),Qe(a,"success");else{a.m=6;try{var N=2<On(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Jm(a)}}finally{Ba(a)}}}}function Ba(a,h){if(a.g){eg(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Qe(a,"ready");try{p.onreadystatechange=_}catch{}}}function eg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),L(h)}};function tg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function hS(a){const h={};a=(a.g&&2<=On(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(w(a[_]))continue;var p=k(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=h[D]||[];h[D]=N,N.push(p)}A(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function ng(a){this.Aa=0,this.i=[],this.j=new Us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,a),this.cb=Qs("retryDelaySeedMs",1e4,a),this.Wa=Qs("forwardChannelMaxRetries",2,a),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Om(a&&a.concurrentRequestLimit),this.Da=new aS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ng.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,_){Ae(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=hg(this,null,this.W),Ua(this)};function Vc(a){if(rg(a),a.G==3){var h=a.U++,p=Ln(a.I);if(ve(p,"SID",a.K),ve(p,"RID",h),ve(p,"TYPE","terminate"),Ys(a,p),h=new tr(a,a.j,h),h.L=2,h.v=Oa(Ln(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=dg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Na(h)}cg(a)}function za(a){a.g&&(Nc(a),a.g.cancel(),a.g=null)}function rg(a){za(a),a.u&&(l.clearTimeout(a.u),a.u=null),$a(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ua(a){if(!jm(a.h)&&!a.s){a.s=!0;var h=a.Ga;ot||Y(),B||(ot(),B=!0),H.add(h,a),a.B=0}}function dS(a,h){return Fm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zs(m(a.Ga,a,h),ug(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new tr(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),E(N,this.S)):N=this.S),this.m!==null||this.O||(D.H=N,N=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=sg(this,D,h),p=Ln(this.I),ve(p,"RID",a),ve(p,"CVER",22),this.D&&ve(p,"X-HTTP-Session-Id",this.D),Ys(this,p),N&&(this.O?h="headers="+encodeURIComponent(String(Ym(N)))+"&"+h:this.m&&bc(p,this.m,N)),Rc(this.h,D),this.Ua&&ve(p,"TYPE","init"),this.P?(ve(p,"$req",h),ve(p,"SID","null"),D.T=!0,Ac(D,p,null)):Ac(D,p,h),this.G=2}}else this.G==3&&(a?ig(this,a):this.i.length==0||jm(this.h)||ig(this))};function ig(a,h){var p;h?p=h.l:p=a.U++;const _=Ln(a.I);ve(_,"SID",a.K),ve(_,"RID",p),ve(_,"AID",a.T),Ys(a,_),a.m&&a.o&&bc(_,a.m,a.o),p=new tr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=sg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Rc(a.h,p),Ac(p,_,h)}function Ys(a,h){a.H&&O(a.H,function(p,_){ve(h,_,p)}),a.l&&Um({},function(p,_){ve(h,_,p)})}function sg(a,h,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let N=-1;for(;;){const $=["count="+p];N==-1?0<p?(N=D[0].g,$.push("ofs="+N)):N=0:$.push("ofs="+N);let pe=!0;for(let Ye=0;Ye<p;Ye++){let ue=D[Ye].g;const at=D[Ye].map;if(ue-=N,0>ue)N=Math.max(0,D[Ye].g-100),pe=!1;else try{lS(at,$,"req"+ue+"_")}catch{_&&_(at)}}if(pe){_=$.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function og(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ot||Y(),B||(ot(),B=!0),H.add(h,a),a.v=0}}function Dc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zs(m(a.Fa,a),ug(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ag(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),za(this),ag(this))};function Nc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ag(a){a.g=new tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Ln(a.qa);ve(h,"RID","rpc"),ve(h,"SID",a.K),ve(h,"AID",a.T),ve(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(h,"TO",a.ja),ve(h,"TYPE","xmlhttp"),Ys(a,h),a.m&&a.o&&bc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Oa(Ln(h)),p.m=null,p.P=!0,Nm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,za(this),Dc(this),Ae(19))};function $a(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function lg(a,h){var p=null;if(a.g==h){$a(a),Nc(a),a.g=null;var _=2}else if(kc(a.h,h))p=h.D,Bm(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;_=Hr(),Qe(_,new Rm(_,p)),Ua(a)}else og(a);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&dS(a,h)||_==2&&Dc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),D){case 1:Gr(a,5);break;case 4:Gr(a,10);break;case 3:Gr(a,6);break;default:Gr(a,2)}}}function ug(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Gr(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),_=a.Xa;const D=!_;_=new qr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ma(_,"https"),Oa(_),D?sS(_.toString(),p):oS(_.toString(),p)}else Ae(2);a.G=0,a.l&&a.l.sa(h),cg(a),rg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function cg(a){if(a.G=0,a.ka=[],a.l){const h=zm(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ka,h),R(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function hg(a,h,p){var _=p instanceof qr?Ln(p):new qr(p);if(_.g!="")h&&(_.g=h+"."+_.g),La(_,_.s);else{var D=l.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var N=new qr(null);_&&Ma(N,_),h&&(N.g=h),D&&La(N,D),p&&(N.l=p),_=N}return p=a.D,h=a.ya,p&&h&&ve(_,p,h),ve(_,"VER",a.la),Ys(a,_),_}function dg(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new be(new ja({eb:p})):new be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fg(){}t=fg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Wa(){}Wa.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){He.call(this),this.g=new ng(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new bi(this)}I(Dt,He),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Vc(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Ci(a),a=p);h.i.push(new Q1(h.Ya++,a)),h.G==3&&Ua(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Vc(this.g),delete this.g,Dt.aa.N.call(this)};function pg(a){Dn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}I(pg,Dn);function mg(){Wr.call(this),this.status=1}I(mg,Wr);function bi(a){this.g=a}I(bi,fg),bi.prototype.ua=function(){Qe(this.g,"a")},bi.prototype.ta=function(a){Qe(this.g,new pg(a))},bi.prototype.sa=function(a){Qe(this.g,new mg)},bi.prototype.ra=function(){Qe(this.g,"b")},Wa.prototype.createWebChannel=Wa.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,uE=function(){return new Wa},lE=function(){return Hr()},aE=Ht,sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Va.NO_ERROR=0,Va.TIMEOUT=8,Va.HTTP_ERROR=6,jl=Va,bm.COMPLETE="complete",oE=bm,St.EventType=en,en.OPEN="a",en.CLOSE="b",en.ERROR="c",en.MESSAGE="d",He.prototype.listen=He.prototype.K,mo=St,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,sE=be}).apply(typeof pl<"u"?pl:typeof self<"u"?self:typeof window<"u"?window:{});const Zv="@firebase/firestore";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let ks="10.14.0";/**
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
 */const vi=new Hp("@firebase/firestore");function ao(){return vi.logLevel}function q(t,...e){if(vi.logLevel<=oe.DEBUG){const n=e.map(qp);vi.debug(`Firestore (${ks}): ${t}`,...n)}}function Qn(t,...e){if(vi.logLevel<=oe.ERROR){const n=e.map(qp);vi.error(`Firestore (${ks}): ${t}`,...n)}}function ms(t,...e){if(vi.logLevel<=oe.WARN){const n=e.map(qp);vi.warn(`Firestore (${ks}): ${t}`,...n)}}function qp(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function fe(t,e){t||J()}function ee(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class di{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class cE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class wV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xV{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new di;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new di,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new di)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new cE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new dt(e)}}class TV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class EV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new TV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new SV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class hE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new We(0,0))}static max(){return new Z(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class sa{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends sa{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const CV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends sa{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return CV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Q(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Q(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Q(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ie.fromString(e))}static fromName(e){return new X(Ie.fromString(e).popFirst(5))}static empty(){return new X(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ie(e.slice()))}}function PV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new Vr(i,X.empty(),e)}function kV(t){return new Vr(t.readTime,t.key,-1)}class Vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vr(Z.min(),X.empty(),-1)}static max(){return new Vr(Z.max(),X.empty(),-1)}}function RV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const bV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xa(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==bV)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function DV(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ta(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Gp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Gp.oe=-1;function sc(t){return t==null}function Au(t){return t===0&&1/t==-1/0}function NV(t){return typeof t=="number"&&Number.isInteger(t)&&!Au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function e0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ml(this.root,e,this.comparator,!0)}}class ml{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new t0(this.data.getIterator())}getIteratorFrom(e){return new t0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class t0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new rt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class fE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new fE("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const MV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=MV.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */function Qp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yp(t){const e=t.mapValue.fields.__previous_value__;return Qp(e)?Yp(e):e}function oa(t){const e=Dr(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class LV{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class aa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new aa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof aa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gl={mapValue:{}};function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qp(t)?4:jV(t)?9007199254740991:OV(t)?10:11:J()}function Rn(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oa(t).isEqual(oa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Dr(i.timestampValue),l=Dr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _i(i.bytesValue).isEqual(_i(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),l=Ne(s.doubleValue);return o===l?Au(o)===Au(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(e0(o)!==e0(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Rn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function la(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function ys(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return n0(t.timestampValue,e.timestampValue);case 4:return n0(oa(t),oa(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const l=_i(s),u=_i(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ce(l[c],u[c]);if(d!==0)return d}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ce(Ne(s.latitude),Ne(o.latitude));return l!==0?l:ce(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return r0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const f=s.fields||{},m=o.fields||{},g=(l=f.value)===null||l===void 0?void 0:l.arrayValue,I=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=ce(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:r0(g,I)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===gl.mapValue&&o===gl.mapValue)return 0;if(s===gl.mapValue)return 1;if(o===gl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=ce(u[f],d[f]);if(m!==0)return m;const g=ys(l[u[f]],c[d[f]]);if(g!==0)return g}return ce(u.length,d.length)}(t.mapValue,e.mapValue);default:throw J()}}function n0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Dr(t),r=Dr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function r0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ys(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function vs(t){return of(t)}function of(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _i(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=of(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${of(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function af(t){return!!t&&"integerValue"in t}function Xp(t){return!!t&&"arrayValue"in t}function i0(t){return!!t&&"nullValue"in t}function s0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function OV(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vo(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Vo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Vo(this.value))}}function pE(t){const e=[];return Ii(t.fields,(n,r)=>{const i=new et([n]);if(Fl(r)){const s=pE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
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
 */class pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,Z.min(),Z.min(),Z.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,Z.min(),Z.min(),At.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,Z.min(),Z.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cu{constructor(e,n){this.position=e,this.inclusive=n}}function o0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=ys(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function a0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Pu{constructor(e,n="asc"){this.field=e,this.dir=n}}function FV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mE{}class Ue extends mE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zV(e,n,r):n==="array-contains"?new WV(e,r):n==="in"?new HV(e,r):n==="not-in"?new KV(e,r):n==="array-contains-any"?new qV(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UV(e,r):new $V(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ys(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends mE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new bn(e,n)}matches(e){return gE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gE(t){return t.op==="and"}function yE(t){return BV(t)&&gE(t)}function BV(t){for(const e of t.filters)if(e instanceof bn)return!1;return!0}function lf(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(yE(t))return t.filters.map(e=>lf(e)).join(",");{const e=t.filters.map(n=>lf(n)).join(",");return`${t.op}(${e})`}}function vE(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&Rn(r.value,i.value)}(t,e):t instanceof bn?function(r,i){return i instanceof bn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&vE(o,i.filters[l]),!0):!1}(t,e):void J()}function _E(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${vs(n.value)}`}(t):t instanceof bn?function(n){return n.op.toString()+" {"+n.getFilters().map(_E).join(" ,")+"}"}(t):"Filter"}class zV extends Ue{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class UV extends Ue{constructor(e,n){super(e,"in",n),this.keys=wE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $V extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=wE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class WV extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xp(n)&&la(n.arrayValue,this.value)}}class HV extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&la(this.value.arrayValue,n)}}class KV extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(la(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!la(this.value.arrayValue,n)}}class qV extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>la(this.value.arrayValue,r))}}/**
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
 */class GV{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function l0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new GV(t,e,n,r,i,s,o)}function Jp(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vs(r)).join(",")),e.ue=n}return e.ue}function Zp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!a0(t.startAt,e.startAt)&&a0(t.endAt,e.endAt)}function uf(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class oc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function QV(t,e,n,r,i,s,o,l){return new oc(t,e,n,r,i,s,o,l)}function em(t){return new oc(t)}function u0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function YV(t){return t.collectionGroup!==null}function Do(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(et.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pu(s,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new Pu(et.keyField(),r))}return e.ce}function Cn(t){const e=ee(t);return e.le||(e.le=XV(e,Do(t))),e.le}function XV(t,e){if(t.limitType==="F")return l0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pu(i.field,s)});const n=t.endAt?new Cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cu(t.startAt.position,t.startAt.inclusive):null;return l0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cf(t,e,n){return new oc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return Zp(Cn(t),Cn(e))&&t.limitType===e.limitType}function xE(t){return`${Jp(Cn(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>_E(i)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vs(i)).join(",")),`Target(${r})`}(Cn(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Do(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=o0(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Do(r),i)||r.endAt&&!function(o,l,u){const c=o0(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Do(r),i))}(t,e)}function JV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function TE(t){return(e,n)=>{let r=!1;for(const i of Do(t)){const s=ZV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ZV(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ys(u,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return dE(this.inner)}size(){return this.innerSize}}/**
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
 */const eD=new Re(X.comparator);function Yn(){return eD}const EE=new Re(X.comparator);function go(...t){let e=EE;for(const n of t)e=e.insert(n.key,n);return e}function SE(t){let e=EE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function si(){return No()}function IE(){return No()}function No(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const tD=new Re(X.comparator),nD=new rt(X.comparator);function ne(...t){let e=nD;for(const n of t)e=e.add(n);return e}const rD=new rt(ce);function iD(){return rD}/**
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
 */function tm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Au(e)?"-0":e}}function AE(t){return{integerValue:""+t}}function sD(t,e){return NV(e)?AE(e):tm(t,e)}/**
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
 */class uc{constructor(){this._=void 0}}function oD(t,e,n){return t instanceof ku?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qp(s)&&(s=Yp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ua?PE(t,e):t instanceof ca?kE(t,e):function(i,s){const o=CE(i,s),l=c0(o)+c0(i.Pe);return af(o)&&af(i.Pe)?AE(l):tm(i.serializer,l)}(t,e)}function aD(t,e,n){return t instanceof ua?PE(t,e):t instanceof ca?kE(t,e):n}function CE(t,e){return t instanceof Ru?function(r){return af(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ku extends uc{}class ua extends uc{constructor(e){super(),this.elements=e}}function PE(t,e){const n=RE(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ca extends uc{constructor(e){super(),this.elements=e}}function kE(t,e){let n=RE(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class Ru extends uc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function c0(t){return Ne(t.integerValue||t.doubleValue)}function RE(t){return Xp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ua&&i instanceof ua||r instanceof ca&&i instanceof ca?gs(r.elements,i.elements,Rn):r instanceof Ru&&i instanceof Ru?Rn(r.Pe,i.Pe):r instanceof ku&&i instanceof ku}(t.transform,e.transform)}class uD{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function bE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nm(t.key,fn.none()):new Ea(t.key,t.data,fn.none());{const n=t.data,r=At.empty();let i=new rt(et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Br(t.key,r,new Lt(i.toArray()),fn.none())}}function cD(t,e,n){t instanceof Ea?function(i,s,o){const l=i.value.clone(),u=d0(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(i,s,o){if(!Bl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=d0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(VE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Mo(t,e,n,r){return t instanceof Ea?function(s,o,l,u){if(!Bl(s.precondition,o))return l;const c=s.value.clone(),d=f0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(s,o,l,u){if(!Bl(s.precondition,o))return l;const c=f0(s.fieldTransforms,u,o),d=o.data;return d.setAll(VE(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return Bl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function hD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=CE(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function h0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&gs(r,i,(s,o)=>lD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ea extends cc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Br extends cc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function VE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function d0(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,aD(o,l,n[i]))}return r}function f0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,oD(s,o,e))}return r}class nm extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dD extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Mo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Mo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=IE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=bE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(n,r)=>h0(n,r))&&gs(this.baseMutations,e.baseMutations,(n,r)=>h0(n,r))}}class rm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return tD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rm(e,n,r,i)}}/**
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
 */class pD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Le,se;function gD(t){switch(t){default:return J();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function DE(t){if(t===void 0)return Qn("GRPC error has no .code"),z.UNKNOWN;switch(t){case Le.OK:return z.OK;case Le.CANCELLED:return z.CANCELLED;case Le.UNKNOWN:return z.UNKNOWN;case Le.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Le.INTERNAL:return z.INTERNAL;case Le.UNAVAILABLE:return z.UNAVAILABLE;case Le.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Le.NOT_FOUND:return z.NOT_FOUND;case Le.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Le.ABORTED:return z.ABORTED;case Le.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Le.DATA_LOSS:return z.DATA_LOSS;default:return J()}}(se=Le||(Le={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yD(){return new TextEncoder}/**
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
 */const vD=new hi([4294967295,4294967295],0);function p0(t){const e=yD().encode(t),n=new iE;return n.update(e),new Uint8Array(n.digest())}function m0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new hi([n,r],0),new hi([i,s],0)]}class im{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yo(`Invalid padding: ${n}`);if(r<0)throw new yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(hi.fromNumber(r)));return i.compare(vD)===1&&(i=new hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=p0(e),[r,i]=m0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new im(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=p0(e),[r,i]=m0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(Z.min(),i,new Re(ce),Yn(),ne())}}class Sa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sa(r,n,ne(),ne(),ne())}}/**
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
 */class zl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class NE{constructor(e,n){this.targetId=e,this.me=n}}class ME{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class g0{constructor(){this.fe=0,this.ge=v0(),this.pe=st.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new Sa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=v0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _D{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yn(),this.qe=y0(),this.Qe=new Re(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(uf(s))if(r===0){const o=new X(s.path);this.Ue(n,o,pt.newNoDocument(o,Z.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=_i(r).toUint8Array()}catch(u){if(u instanceof fE)return ms("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new im(o,i,s)}catch(u){return ms(u instanceof yo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&uf(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,pt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new hc(e,n,this.Qe,this.ke,r);return this.ke=Yn(),this.qe=y0(),this.Qe=new Re(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new g0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new g0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function y0(){return new Re(X.comparator)}function v0(){return new Re(X.comparator)}const wD={asc:"ASCENDING",desc:"DESCENDING"},xD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TD={and:"AND",or:"OR"};class ED{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hf(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function bu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SD(t,e){return bu(t,e.toTimestamp())}function Pn(t){return fe(!!t),Z.fromTimestamp(function(n){const r=Dr(n);return new We(r.seconds,r.nanos)}(t))}function sm(t,e){return df(t,e).canonicalString()}function df(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function OE(t){const e=Ie.fromString(t);return fe(UE(e)),e}function ff(t,e){return sm(t.databaseId,e.path)}function Ph(t,e){const n=OE(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(FE(n))}function jE(t,e){return sm(t.databaseId,e)}function ID(t){const e=OE(t);return e.length===4?Ie.emptyPath():FE(e)}function pf(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function FE(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _0(t,e,n){return{name:ff(t,e),fields:n.value.mapValue.fields}}function AD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(fe(d===void 0||typeof d=="string"),st.fromBase64String(d||"")):(fe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),st.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?z.UNKNOWN:DE(c.code);return new Q(d,c.message||"")}(o);n=new ME(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ph(t,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):Z.min(),l=new At({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new zl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ph(t,r.document),s=r.readTime?Pn(r.readTime):Z.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new zl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ph(t,r.document),s=r.removedTargetIds||[];n=new zl([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new mD(i,s),l=r.targetId;n=new NE(l,o)}}return n}function CD(t,e){let n;if(e instanceof Ea)n={update:_0(t,e.key,e.value)};else if(e instanceof nm)n={delete:ff(t,e.key)};else if(e instanceof Br)n={update:_0(t,e.key,e.data),updateMask:LD(e.fieldMask)};else{if(!(e instanceof dD))return J();n={verify:ff(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ku)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ua)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ru)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:SD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function PD(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Pn(i.updateTime):Pn(s);return o.isEqual(Z.min())&&(o=Pn(s)),new uD(o,i.transformResults||[])}(n,e))):[]}function kD(t,e){return{documents:[jE(t,e.path)]}}function RD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jE(t,i);const s=function(c){if(c.length!==0)return zE(bn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Li(m.field),direction:DD(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function bD(t){let e=ID(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=BE(f);return m instanceof bn&&yE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(I){return new Pu(Oi(I.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,sc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,g=f.values||[];return new Cu(g,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,g=f.values||[];return new Cu(g,m)}(n.endAt)),QV(e,i,o,s,l,"F",u,c)}function VD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Oi(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Oi(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Oi(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Oi(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return bn.create(n.compositeFilter.filters.map(r=>BE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function DD(t){return wD[t]}function ND(t){return xD[t]}function MD(t){return TD[t]}function Li(t){return{fieldPath:t.canonicalString()}}function Oi(t){return et.fromServerFormat(t.fieldPath)}function zE(t){return t instanceof Ue?function(n){if(n.op==="=="){if(s0(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NAN"}};if(i0(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(s0(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NOT_NAN"}};if(i0(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Li(n.field),op:ND(n.op),value:n.value}}}(t):t instanceof bn?function(n){const r=n.getFilters().map(i=>zE(i));return r.length===1?r[0]:{compositeFilter:{op:MD(n.op),filters:r}}}(t):J()}function LD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function UE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class pr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=st.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class OD{constructor(e){this.ct=e}}function jD(t){const e=bD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cf(e,e.limit,"L"):e}/**
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
 */class FD{constructor(){this.un=new BD}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Vr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class BD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new rt(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new rt(Ie.comparator)).toArray()}}/**
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
 */class _s{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new _s(0)}static kn(){return new _s(-1)}}/**
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
 */class zD{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class UD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $D{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Mo(r.mutation,i,Lt.empty(),We.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=go();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Yn();const o=No(),l=function(){return No()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Br)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Mo(d.mutation,c,d.mutation.getFieldMask(),We.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return l.set(c,new UD(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=No();let i=new Re((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Lt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=IE();d.forEach(m=>{if(!s.has(m)){const g=bE(n.get(m),r.get(m));g!==null&&f.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):YV(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(si());let l=-1,u=s;return o.next(c=>F.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:SE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=go();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=go();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(f,m){return new oc(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,pt.newInvalidDocument(d)))});let l=go();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Mo(d.mutation,c,Lt.empty(),We.now()),lc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class WD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:jD(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class HD{constructor(){this.overlays=new Re(X.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=si();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=si(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=si(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=si(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pD(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class KD{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class om{constructor(){this.Tr=new rt(Ke.Er),this.dr=new rt(Ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ke(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Ie([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Ie([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
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
 */class qD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new rt(Ke.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ke(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(ce);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new X(s),0);let l=new rt(ce);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ke(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GD{constructor(e){this.Mr=e,this.docs=function(){return new Re(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,l=new X(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||RV(kV(d),r)<=0||(i.has(d.key)||lc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QD(this)}getSize(e){return F.resolve(this.size)}}class QD extends zD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class YD{constructor(e){this.persistence=e,this.Nr=new Rs(n=>Jp(n),Zp),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new om,this.targetCount=0,this.kr=_s.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class XD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Gp(0),this.Kr=!1,this.Kr=!0,this.$r=new KD,this.referenceDelegate=e(this),this.Ur=new YD(this),this.indexManager=new FD,this.remoteDocumentCache=function(i){return new GD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new OD(n),this.Gr=new WD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new qD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new JD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class JD extends VV{constructor(e){super(),this.currentSequenceNumber=e}}class am{constructor(e){this.persistence=e,this.Jr=new om,this.Yr=null}static Zr(e){return new am(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class lm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lm(e,n.fromCache,r,i)}}/**
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
 */class ZD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return tb()?8:DV(J2())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ZD;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ao()<=oe.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(ao()<=oe.DEBUG&&q("QueryEngine","Query:",Mi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ao()<=oe.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(n))):F.resolve())}Yi(e,n){if(u0(n))return F.resolve(null);let r=Cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cf(n,null,"F"),r=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,cf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return u0(n)||i.isEqual(Z.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(ao()<=oe.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mi(n)),this.rs(e,o,n,PV(i,-1)).next(l=>l))})}ts(e,n){let r=new rt(TE(e));return n.forEach((i,s)=>{lc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ao()<=oe.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Vr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Re(ce),this._s=new Rs(s=>Jp(s),Zp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $D(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function nN(t,e,n,r){return new tN(t,e,n,r)}async function $E(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function rN(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let g=F.resolve();return m.forEach(I=>{g=g.next(()=>d.getEntry(u,I)).next(P=>{const R=c.docVersions.get(I);fe(R!==null),P.version.compareTo(R)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function WE(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function iN(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(st.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(f,g),function(P,R,x){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,g,d)&&l.push(n.Ur.updateTargetData(s,g))});let u=Yn(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(sN(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Z.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function sN(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function oN(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aN(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function mf(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ta(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function w0(t,e,n){const r=ee(t);let i=Z.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ee(u),m=f._s.get(d);return m!==void 0?F.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,Cn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ne())).next(l=>(lN(r,JV(e),l),{documents:l,Ts:s})))}function lN(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class x0{constructor(){this.activeTargetIds=iD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uN{constructor(){this.so=new x0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new x0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cN{_o(e){}shutdown(){}}/**
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
 */class T0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yl=null;function kh(){return yl===null?yl=function(){return 268435456+Math.round(2147483648*Math.random())}():yl++,"0x"+yl.toString(16)}/**
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
 */const hN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ht="WebChannelConnection";class fN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=kh(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(q("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ms("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=hN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=kh();return new Promise((o,l)=>{const u=new sE;u.setWithCredentials(!0),u.listenOnce(oE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case jl.NO_ERROR:const d=u.getResponseJson();q(ht,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case jl.TIMEOUT:q(ht,`RPC '${e}' ${s} timed out`),l(new Q(z.DEADLINE_EXCEEDED,"Request time out"));break;case jl.HTTP_ERROR:const f=u.getStatus();if(q(ht,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const I=function(R){const x=R.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(x)>=0?x:z.UNKNOWN}(g.status);l(new Q(I,g.message))}else l(new Q(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Q(z.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{q(ht,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(ht,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=kh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uE(),l=lE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(ht,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,g=!1;const I=new dN({Io:R=>{g?q(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(q(ht,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),q(ht,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},To:()=>f.close()}),P=(R,x,w)=>{R.listen(x,S=>{try{w(S)}catch(V){setTimeout(()=>{throw V},0)}})};return P(f,mo.EventType.OPEN,()=>{g||(q(ht,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),P(f,mo.EventType.CLOSE,()=>{g||(g=!0,q(ht,`RPC '${e}' stream ${i} transport closed`),I.So())}),P(f,mo.EventType.ERROR,R=>{g||(g=!0,ms(ht,`RPC '${e}' stream ${i} transport errored:`,R),I.So(new Q(z.UNAVAILABLE,"The operation could not be completed")))}),P(f,mo.EventType.MESSAGE,R=>{var x;if(!g){const w=R.data[0];fe(!!w);const S=w,V=S.error||((x=S[0])===null||x===void 0?void 0:x.error);if(V){q(ht,`RPC '${e}' stream ${i} received error:`,V);const M=V.status;let O=function(T){const E=Le[T];if(E!==void 0)return DE(E)}(M),A=V.message;O===void 0&&(O=z.INTERNAL,A="Unknown error status: "+M+" with message "+V.message),g=!0,I.So(new Q(O,A)),f.close()}else q(ht,`RPC '${e}' stream ${i} received:`,w),I.bo(w)}}),P(l,aE.STAT_EVENT,R=>{R.stat===sf.PROXY?q(ht,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===sf.NOPROXY&&q(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function Rh(){return typeof document<"u"?document:null}/**
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
 */function dc(t){return new ED(t,!0)}/**
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
 */class HE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class KE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new HE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Q(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pN extends KE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=AD(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Pn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=pf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=uf(u)?{documents:kD(s,u)}:{query:RD(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=LE(s,o.resumeToken);const c=hf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=bu(s,o.snapshotVersion.toTimestamp());const c=hf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=VD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=pf(this.serializer),n.removeTarget=e,this.a_(n)}}class mN extends KE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=PD(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=pf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CD(this.serializer,r))};this.a_(n)}}/**
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
 */class gN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Q(z.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,df(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(z.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,df(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(z.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class yN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class vN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ai(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.L_.add(4),await Ia(c),c.q_.set("Unknown"),c.L_.delete(4),await fc(c)}(this))})}),this.q_=new yN(r,i)}}async function fc(t){if(Ai(t))for(const e of t.B_)await e(!0)}async function Ia(t){for(const e of t.B_)await e(!1)}function qE(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),dm(n)?hm(n):bs(n).r_()&&cm(n,e))}function um(t,e){const n=ee(t),r=bs(n);n.N_.delete(e),r.r_()&&GE(n,e),n.N_.size===0&&(r.r_()?r.o_():Ai(n)&&n.q_.set("Unknown"))}function cm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bs(t).A_(e)}function GE(t,e){t.Q_.xe(e),bs(t).R_(e)}function hm(t){t.Q_=new _D({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),bs(t).start(),t.q_.v_()}function dm(t){return Ai(t)&&!bs(t).n_()&&t.N_.size>0}function Ai(t){return ee(t).L_.size===0}function QE(t){t.Q_=void 0}async function _N(t){t.q_.set("Online")}async function wN(t){t.N_.forEach((e,n)=>{cm(t,e)})}async function xN(t,e){QE(t),dm(t)?(t.q_.M_(e),hm(t)):t.q_.set("Unknown")}async function TN(t,e,n){if(t.q_.set("Online"),e instanceof ME&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vu(t,r)}else if(e instanceof zl?t.Q_.Ke(e):e instanceof NE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await WE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(st.EMPTY_BYTE_STRING,d.snapshotVersion)),GE(s,u);const f=new pr(d.target,u,c,d.sequenceNumber);cm(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Vu(t,r)}}async function Vu(t,e,n){if(!Ta(e))throw e;t.L_.add(1),await Ia(t),t.q_.set("Offline"),n||(n=()=>WE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await fc(t)})}function YE(t,e){return e().catch(n=>Vu(t,n,e))}async function pc(t){const e=ee(t),n=Nr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;EN(e);)try{const i=await oN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,SN(e,i)}catch(i){await Vu(e,i)}XE(e)&&JE(e)}function EN(t){return Ai(t)&&t.O_.length<10}function SN(t,e){t.O_.push(e);const n=Nr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function XE(t){return Ai(t)&&!Nr(t).n_()&&t.O_.length>0}function JE(t){Nr(t).start()}async function IN(t){Nr(t).p_()}async function AN(t){const e=Nr(t);for(const n of t.O_)e.m_(n.mutations)}async function CN(t,e,n){const r=t.O_.shift(),i=rm.from(r,e,n);await YE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pc(t)}async function PN(t,e){e&&Nr(t).V_&&await async function(r,i){if(function(o){return gD(o)&&o!==z.ABORTED}(i.code)){const s=r.O_.shift();Nr(r).s_(),await YE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await pc(r)}}(t,e),XE(t)&&JE(t)}async function E0(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Ai(n);n.L_.add(3),await Ia(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await fc(n)}async function kN(t,e){const n=ee(t);e?(n.L_.delete(2),await fc(n)):e||(n.L_.add(2),await Ia(n),n.q_.set("Unknown"))}function bs(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new pN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:_N.bind(null,t),Ro:wN.bind(null,t),mo:xN.bind(null,t),d_:TN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),dm(t)?hm(t):t.q_.set("Unknown")):(await t.K_.stop(),QE(t))})),t.K_}function Nr(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new mN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:IN.bind(null,t),mo:PN.bind(null,t),f_:AN.bind(null,t),g_:CN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await pc(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class fm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new fm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pm(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Ta(t))return new Q(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=go(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class S0{constructor(){this.W_=new Re(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ws{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ws(e,n,ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class RN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bN{constructor(){this.queries=I0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=I0(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new Q(z.ABORTED,"Firestore shutting down"))}}function I0(){return new Rs(t=>xE(t),ac)}async function VN(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new RN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=pm(o,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&mm(n)}async function DN(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NN(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&mm(n)}function MN(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function mm(t){t.Y_.forEach(e=>{e.next()})}var gf,A0;(A0=gf||(gf={})).ea="default",A0.Cache="cache";class LN{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==gf.Cache}}/**
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
 */class ZE{constructor(e){this.key=e}}class e1{constructor(e){this.key=e}}class ON{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=TE(e),this.Ra=new ss(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new S0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),g=lc(this.query,f)?f:null,I=!!m&&this.mutatedKeys.has(m.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;m&&g?m.data.isEqual(g.data)?I!==P&&(r.track({type:3,doc:g}),R=!0):this.ga(m,g)||(r.track({type:2,doc:g}),R=!0,(u&&this.Aa(g,u)>0||c&&this.Aa(g,c)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),R=!0):m&&!g&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(l=!0)),R&&(g?(o=o.add(g),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(g,I){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return P(g)-P(I)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ws(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new S0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new e1(r))}),this.da.forEach(r=>{e.has(r)||n.push(new ZE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ws.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class jN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FN{constructor(e){this.key=e,this.va=!1}}class BN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Rs(l=>xE(l),ac),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(X.comparator),this.Na=new Map,this.La=new om,this.Ba={},this.ka=new Map,this.qa=_s.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function zN(t,e,n=!0){const r=o1(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await t1(r,e,n,!0),i}async function UN(t,e){const n=o1(t);await t1(n,e,!0,!1)}async function t1(t,e,n,r){const i=await aN(t.localStore,Cn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await $N(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&qE(t.remoteStore,i),l}async function $N(t,e,n,r,i){t.Ka=(f,m,g)=>async function(P,R,x,w){let S=R.view.ma(x);S.ns&&(S=await w0(P.localStore,R.query,!1).then(({documents:A})=>R.view.ma(A,S)));const V=w&&w.targetChanges.get(R.targetId),M=w&&w.targetMismatches.get(R.targetId)!=null,O=R.view.applyChanges(S,P.isPrimaryClient,V,M);return P0(P,R.targetId,O.wa),O.snapshot}(t,f,m,g);const s=await w0(t.localStore,e,!0),o=new ON(e,s.Ts),l=o.ma(s.documents),u=Sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);P0(t,n,c.wa);const d=new jN(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function WN(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ac(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&um(r.remoteStore,i.targetId),yf(r,i.targetId)}).catch(xa)):(yf(r,i.targetId),await mf(r.localStore,i.targetId,!0))}async function HN(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),um(n.remoteStore,r.targetId))}async function KN(t,e,n){const r=ZN(t);try{const i=await function(o,l){const u=ee(o),c=We.now(),d=l.reduce((g,I)=>g.add(I.key),ne());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let I=Yn(),P=ne();return u.cs.getEntries(g,d).next(R=>{I=R,I.forEach((x,w)=>{w.isValidDocument()||(P=P.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,I)).next(R=>{f=R;const x=[];for(const w of l){const S=hD(w,f.get(w.key).overlayedDocument);S!=null&&x.push(new Br(w.key,S,pE(S.value.mapValue),fn.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,x,l)}).next(R=>{m=R;const x=R.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(g,R.batchId,x)})}).then(()=>({batchId:m.batchId,changes:SE(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Re(ce)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Aa(r,i.changes),await pc(r.remoteStore)}catch(i){const s=pm(i,"Failed to persist write");n.reject(s)}}async function n1(t,e){const n=ee(t);try{const r=await iN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?fe(o.va):i.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await Aa(n,r,e)}catch(r){await xa(r)}}function C0(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(l)&&(c=!0)}),c&&mm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qN(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Re(X.comparator);o=o.insert(s,pt.newNoDocument(s,Z.min()));const l=ne().add(s),u=new hc(Z.min(),new Map,new Re(ce),o,l);await n1(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),gm(r)}else await mf(r.localStore,e,!1).then(()=>yf(r,e,n)).catch(xa)}async function GN(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await rN(n.localStore,e);i1(n,r,null),r1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Aa(n,i)}catch(i){await xa(i)}}async function QN(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(fe(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);i1(r,e,n),r1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Aa(r,i)}catch(i){await xa(i)}}function r1(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function i1(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function yf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||s1(t,r)})}function s1(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(um(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),gm(t))}function P0(t,e,n){for(const r of n)r instanceof ZE?(t.La.addReference(r.key,e),YN(t,r)):r instanceof e1?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||s1(t,r.key)):J()}function YN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),gm(t))}function gm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Ie.fromString(e)),r=t.qa.next();t.Na.set(r,new FN(n)),t.Oa=t.Oa.insert(n,r),qE(t.remoteStore,new pr(Cn(em(n.path)),r,"TargetPurposeLimboResolution",Gp.oe))}}async function Aa(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=lm.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,m=>F.forEach(m.$i,g=>d.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>F.forEach(m.Ui,g=>d.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!Ta(f))throw f;q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const g=d.os.get(m),I=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(I);d.os=d.os.insert(m,P)}}}(r.localStore,s))}async function XN(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await $E(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new Q(z.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Aa(n,r.hs)}}function JN(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function o1(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=n1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qN.bind(null,e),e.Ca.d_=NN.bind(null,e.eventManager),e.Ca.$a=MN.bind(null,e.eventManager),e}function ZN(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QN.bind(null,e),e}class Du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return nN(this.persistence,new eN,e.initialUser,this.serializer)}Ga(e){return new XD(am.Zr,this.serializer)}Wa(e){return new uN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Du.provider={build:()=>new Du};class vf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>C0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XN.bind(null,this.syncEngine),await kN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bN}()}createDatastore(e){const n=dc(e.databaseInfo.databaseId),r=function(s){return new fN(s)}(e.databaseInfo);return function(s,o,l,u){return new gN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new vN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>C0(this.syncEngine,n,0),function(){return T0.D()?new T0:new cN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new BN(i,s,o,l,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ia(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vf.provider={build:()=>new vf};/**
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
 */class eM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=hE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bh(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $E(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function k0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nM(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>E0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>E0(e.remoteStore,i)),t._onlineComponents=e}async function nM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await bh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===z.FAILED_PRECONDITION||i.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ms("Error using user provided cache. Falling back to memory cache: "+n),await bh(t,new Du)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await bh(t,new Du);return t._offlineComponents}async function a1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await k0(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await k0(t,new vf))),t._onlineComponents}function rM(t){return a1(t).then(e=>e.syncEngine)}async function R0(t){const e=await a1(t),n=e.eventManager;return n.onListen=zN.bind(null,e.syncEngine),n.onUnlisten=WN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HN.bind(null,e.syncEngine),n}/**
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
 */function l1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const b0=new Map;/**
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
 */function u1(t,e,n){if(!n)throw new Q(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iM(t,e,n,r){if(e===!0&&r===!0)throw new Q(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function V0(t){if(!X.isDocumentKey(t))throw new Q(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function D0(t){if(X.isDocumentKey(t))throw new Q(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ym(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Ir(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ym(t);throw new Q(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class N0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=l1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Q(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Q(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Q(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new N0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new N0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _V;switch(r.type){case"firstParty":return new EV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=b0.get(n);r&&(q("ComponentProvider","Removing Datastore"),b0.delete(n),r.terminate())}(this),Promise.resolve()}}function sM(t,e,n,r={}){var i;const s=(t=Ir(t,mc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=dt.MOCK_USER;else{l=X2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Q(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new dt(c)}t._authCredentials=new wV(new cE(l,u))}}/**
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
 */class gc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gc(this.firestore,e,this._query)}}class Ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class Ar extends gc{constructor(e,n,r){super(e,n,em(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new X(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function M0(t,e,...n){if(t=mn(t),u1("collection","path",e),t instanceof mc){const r=Ie.fromString(e,...n);return D0(r),new Ar(t,null,r)}{if(!(t instanceof Ft||t instanceof Ar))throw new Q(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return D0(r),new Ar(t.firestore,null,r)}}function Ul(t,e,...n){if(t=mn(t),arguments.length===1&&(e=hE.newId()),u1("doc","path",e),t instanceof mc){const r=Ie.fromString(e,...n);return V0(r),new Ft(t,null,new X(r))}{if(!(t instanceof Ft||t instanceof Ar))throw new Q(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return V0(r),new Ft(t.firestore,t instanceof Ar?t.converter:null,new X(r))}}/**
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
 */class L0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new HE(this,"async_queue_retry"),this.Vu=()=>{const r=Rh();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Rh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new di;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ta(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=fm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function O0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class xs extends mc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new L0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new L0(e),this._firestoreClient=void 0,await e}}}function oM(t,e){const n=typeof t=="object"?t:tE(),r=typeof t=="string"?t:"(default)",i=wa(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Q2("firestore");s&&sM(i,...s)}return i}function c1(t){if(t._terminated)throw new Q(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aM(t),t._firestoreClient}function aM(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new LV(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,l1(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new tM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(st.fromBase64String(e))}catch(n){throw new Q(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vm{constructor(e){this._methodName=e}}/**
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
 */class _m{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class wm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const lM=/^__.*__$/;class uM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ea(e,this.data,n,this.fieldTransforms)}}class h1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function d1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class xm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new xm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Nu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(d1(this.Cu)&&lM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class cM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dc(e)}Qu(e,n,r,i=!1){return new xm({Cu:e,methodName:n,qu:r,path:et.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function f1(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new cM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hM(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Tm("Data must be an object, but it was:",o,r);const l=p1(r,o);let u,c;if(s.merge)u=new Lt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=_f(e,f,n);if(!o.contains(m))throw new Q(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);g1(d,m)||d.push(m)}u=new Lt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new uM(new At(l),u,c)}class vc extends vm{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}function dM(t,e,n,r){const i=t.Qu(1,e,n);Tm("Data must be an object, but it was:",i,r);const s=[],o=At.empty();Ii(r,(u,c)=>{const d=Em(e,u,n);c=mn(c);const f=i.Nu(d);if(c instanceof vc)s.push(d);else{const m=_c(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new Lt(s);return new h1(o,l,i.fieldTransforms)}function fM(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[_f(e,r,n)],u=[i];if(s.length%2!=0)throw new Q(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(_f(e,s[m])),u.push(s[m+1]);const c=[],d=At.empty();for(let m=l.length-1;m>=0;--m)if(!g1(c,l[m])){const g=l[m];let I=u[m];I=mn(I);const P=o.Nu(g);if(I instanceof vc)c.push(g);else{const R=_c(I,P);R!=null&&(c.push(g),d.set(g,R))}}const f=new Lt(c);return new h1(d,f,o.fieldTransforms)}function _c(t,e){if(m1(t=mn(t)))return Tm("Unsupported field value:",e,t),p1(t,e);if(t instanceof vm)return function(r,i){if(!d1(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=_c(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=mn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=We.fromDate(r);return{timestampValue:bu(i.serializer,s)}}if(r instanceof We){const s=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bu(i.serializer,s)}}if(r instanceof _m)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:LE(i.serializer,r._byteString)};if(r instanceof Ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof wm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return tm(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ym(r)}`)}(t,e)}function p1(t,e){const n={};return dE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ii(t,(r,i)=>{const s=_c(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function m1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof _m||t instanceof Ts||t instanceof Ft||t instanceof vm||t instanceof wm)}function Tm(t,e,n){if(!m1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ym(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function _f(t,e,n){if((e=mn(e))instanceof yc)return e._internalPath;if(typeof e=="string")return Em(t,e);throw Nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const pM=new RegExp("[~\\*/\\[\\]]");function Em(t,e,n){if(e.search(pM)>=0)throw Nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yc(...e.split("."))._internalPath}catch{throw Nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Q(z.INVALID_ARGUMENT,l+t+u)}function g1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class y1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(v1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mM extends y1{data(){return super.data()}}function v1(t,e){return typeof e=="string"?Em(t,e):e instanceof yc?e._internalPath:e._delegate._internalPath}/**
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
 */function gM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yM{convertValue(e,n="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ii(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new wm(s)}convertGeoPoint(e){return new _m(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oa(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);fe(UE(r));const i=new aa(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function vM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _1 extends y1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(v1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $l extends _1{data(e={}){return super.data(e)}}class _M{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new vo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $l(this._firestore,this._userDataWriter,r.key,r,new vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new $l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new vo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new $l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new vo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:wM(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class w1 extends yM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function j0(t,e,n,...r){t=Ir(t,Ft);const i=Ir(t.firestore,xs),s=f1(i);let o;return o=typeof(e=mn(e))=="string"||e instanceof yc?fM(s,"updateDoc",t._key,e,n,r):dM(s,"updateDoc",t._key,e),Sm(i,[o.toMutation(t._key,fn.exists(!0))])}function xM(t){return Sm(Ir(t.firestore,xs),[new nm(t._key,fn.none())])}function TM(t,e){const n=Ir(t.firestore,xs),r=Ul(t),i=vM(t.converter,e);return Sm(n,[hM(f1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then(()=>r)}function EM(t,...e){var n,r,i;t=mn(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||O0(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(O0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Ft)c=Ir(t.firestore,xs),d=em(t._key.path),u={next:f=>{e[o]&&e[o](SM(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Ir(t,gc);c=Ir(f.firestore,xs),d=f._query;const m=new w1(c);u={next:g=>{e[o]&&e[o](new _M(c,m,f,g))},error:e[o+1],complete:e[o+2]},gM(t._query)}return function(m,g,I,P){const R=new eM(P),x=new LN(g,R,I);return m.asyncQueue.enqueueAndForget(async()=>VN(await R0(m),x)),()=>{R.Za(),m.asyncQueue.enqueueAndForget(async()=>DN(await R0(m),x))}}(c1(c),d,l,u)}function Sm(t,e){return function(r,i){const s=new di;return r.asyncQueue.enqueueAndForget(async()=>KN(await rM(r),i,s)),s.promise}(c1(t),e)}function SM(t,e,n){const r=n.docs.get(e._key),i=new w1(t);return new _1(t,i,e._key,r,new vo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ks=i})(aV),br(new qn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new xs(new xV(r.getProvider("auth-internal")),new IV(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Q(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new aa(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),An(Zv,"4.7.3",e),An(Zv,"4.7.3","esm2017")})();const x1="@firebase/installations",Im="0.6.9";/**
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
 */const T1=1e4,E1=`w:${Im}`,S1="FIS_v2",IM="https://firebaseinstallations.googleapis.com/v1",AM=60*60*1e3,CM="installations",PM="Installations";/**
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
 */const kM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xi=new ic(CM,PM,kM);function I1(t){return t instanceof Fr&&t.code.includes("request-failed")}/**
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
 */function A1({projectId:t}){return`${IM}/projects/${t}/installations`}function C1(t){return{token:t.token,requestStatus:2,expiresIn:bM(t.expiresIn),creationTime:Date.now()}}async function P1(t,e){const r=(await e.json()).error;return xi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function k1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function RM(t,{refreshToken:e}){const n=k1(t);return n.append("Authorization",VM(e)),n}async function R1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bM(t){return Number(t.replace("s","000"))}function VM(t){return`${S1} ${t}`}/**
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
 */async function DM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=A1(t),i=k1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:S1,appId:t.appId,sdkVersion:E1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await R1(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:C1(c.authToken)}}else throw await P1("Create Installation",u)}/**
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
 */function b1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function NM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const MM=/^[cdef][\w-]{21}$/,wf="";function LM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=OM(t);return MM.test(n)?n:wf}catch{return wf}}function OM(t){return NM(t).substr(0,22)}/**
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
 */function wc(t){return`${t.appName}!${t.appId}`}/**
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
 */const V1=new Map;function D1(t,e){const n=wc(t);N1(n,e),jM(n,e)}function N1(t,e){const n=V1.get(t);if(n)for(const r of n)r(e)}function jM(t,e){const n=FM();n&&n.postMessage({key:t,fid:e}),BM()}let oi=null;function FM(){return!oi&&"BroadcastChannel"in self&&(oi=new BroadcastChannel("[Firebase] FID Change"),oi.onmessage=t=>{N1(t.data.key,t.data.fid)}),oi}function BM(){V1.size===0&&oi&&(oi.close(),oi=null)}/**
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
 */const zM="firebase-installations-database",UM=1,Ti="firebase-installations-store";let Vh=null;function Am(){return Vh||(Vh=ZT(zM,UM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ti)}}})),Vh}async function Mu(t,e){const n=wc(t),i=(await Am()).transaction(Ti,"readwrite"),s=i.objectStore(Ti),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&D1(t,e.fid),e}async function M1(t){const e=wc(t),r=(await Am()).transaction(Ti,"readwrite");await r.objectStore(Ti).delete(e),await r.done}async function xc(t,e){const n=wc(t),i=(await Am()).transaction(Ti,"readwrite"),s=i.objectStore(Ti),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&D1(t,l.fid),l}/**
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
 */async function Cm(t){let e;const n=await xc(t.appConfig,r=>{const i=$M(r),s=WM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===wf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $M(t){const e=t||{fid:LM(),registrationStatus:0};return L1(e)}function WM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(xi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=HM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KM(t)}:{installationEntry:e}}async function HM(t,e){try{const n=await DM(t,e);return Mu(t.appConfig,n)}catch(n){throw I1(n)&&n.customData.serverCode===409?await M1(t.appConfig):await Mu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KM(t){let e=await F0(t.appConfig);for(;e.registrationStatus===1;)await b1(100),e=await F0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Cm(t);return r||n}return e}function F0(t){return xc(t,e=>{if(!e)throw xi.create("installation-not-found");return L1(e)})}function L1(t){return qM(t)?{fid:t.fid,registrationStatus:0}:t}function qM(t){return t.registrationStatus===1&&t.registrationTime+T1<Date.now()}/**
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
 */async function GM({appConfig:t,heartbeatServiceProvider:e},n){const r=QM(t,n),i=RM(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:E1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await R1(()=>fetch(r,l));if(u.ok){const c=await u.json();return C1(c)}else throw await P1("Generate Auth Token",u)}function QM(t,{fid:e}){return`${A1(t)}/${e}/authTokens:generate`}/**
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
 */async function Pm(t,e=!1){let n;const r=await xc(t.appConfig,s=>{if(!O1(s))throw xi.create("not-registered");const o=s.authToken;if(!e&&JM(o))return s;if(o.requestStatus===1)return n=YM(t,e),s;{if(!navigator.onLine)throw xi.create("app-offline");const l=e4(s);return n=XM(t,l),l}});return n?await n:r.authToken}async function YM(t,e){let n=await B0(t.appConfig);for(;n.authToken.requestStatus===1;)await b1(100),n=await B0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Pm(t,e):r}function B0(t){return xc(t,e=>{if(!O1(e))throw xi.create("not-registered");const n=e.authToken;return t4(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function XM(t,e){try{const n=await GM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Mu(t.appConfig,r),n}catch(n){if(I1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await M1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Mu(t.appConfig,r)}throw n}}function O1(t){return t!==void 0&&t.registrationStatus===2}function JM(t){return t.requestStatus===2&&!ZM(t)}function ZM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AM}function e4(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function t4(t){return t.requestStatus===1&&t.requestTime+T1<Date.now()}/**
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
 */async function n4(t){const e=t,{installationEntry:n,registrationPromise:r}=await Cm(e);return r?r.catch(console.error):Pm(e).catch(console.error),n.fid}/**
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
 */async function r4(t,e=!1){const n=t;return await i4(n),(await Pm(n,e)).token}async function i4(t){const{registrationPromise:e}=await Cm(t);e&&await e}/**
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
 */function s4(t){if(!t||!t.options)throw Dh("App Configuration");if(!t.name)throw Dh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Dh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Dh(t){return xi.create("missing-app-config-values",{valueName:t})}/**
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
 */const j1="installations",o4="installations-internal",a4=t=>{const e=t.getProvider("app").getImmediate(),n=s4(e),r=wa(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},l4=t=>{const e=t.getProvider("app").getImmediate(),n=wa(e,j1).getImmediate();return{getId:()=>n4(n),getToken:i=>r4(n,i)}};function u4(){br(new qn(j1,a4,"PUBLIC")),br(new qn(o4,l4,"PRIVATE"))}u4();An(x1,Im);An(x1,Im,"esm2017");/**
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
 */const Lu="analytics",c4="firebase_id",h4="origin",d4=60*1e3,f4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",km="https://www.googletagmanager.com/gtag/js";/**
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
 */const bt=new Hp("@firebase/analytics");/**
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
 */const p4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bt=new ic("analytics","Analytics",p4);/**
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
 */function m4(t){if(!t.startsWith(km)){const e=Bt.create("invalid-gtag-resource",{gtagURL:t});return bt.warn(e.message),""}return t}function F1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function g4(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function y4(t,e){const n=g4("firebase-js-sdk-policy",{createScriptURL:m4}),r=document.createElement("script"),i=`${km}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function v4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _4(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await F1(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){bt.error(l)}t("config",i,s)}async function w4(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await F1(n);for(const u of o){const c=l.find(f=>f.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){bt.error(s)}}function x4(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await w4(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await _4(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){bt.error(l)}}return i}function T4(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=x4(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function E4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(km)&&n.src.includes(t))return n;return null}/**
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
 */const S4=30,I4=1e3;class A4{constructor(e={},n=I4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const B1=new A4;function C4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function P4(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:C4(r)},s=f4.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function k4(t,e=B1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Bt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Bt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new V4;return setTimeout(async()=>{l.abort()},d4),z1({appId:r,apiKey:i,measurementId:s},o,l,e)}async function z1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=B1){var s;const{appId:o,measurementId:l}=t;try{await R4(r,e)}catch(u){if(l)return bt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await P4(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!b4(c)){if(i.deleteThrottleMetadata(o),l)return bt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?$v(n,i.intervalMillis,S4):$v(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),bt.debug(`Calling attemptFetch again in ${d} millis`),z1(t,f,r,i)}}function R4(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function b4(t){if(!(t instanceof Fr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class V4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function D4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function N4(){if(QT())try{await YT()}catch(t){return bt.warn(Bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return bt.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function M4(t,e,n,r,i,s,o){var l;const u=k4(t);u.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&bt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>bt.error(g)),e.push(u);const c=N4().then(g=>{if(g)return r.getId()}),[d,f]=await Promise.all([u,c]);E4(s)||y4(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[h4]="firebase",m.update=!0,f!=null&&(m[c4]=f),i("config",d.measurementId,m),d.measurementId}/**
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
 */class L4{constructor(e){this.app=e}_delete(){return delete Lo[this.app.options.appId],Promise.resolve()}}let Lo={},z0=[];const U0={};let Nh="dataLayer",O4="gtag",$0,U1,W0=!1;function j4(){const t=[];if(eb()&&t.push("This is a browser extension environment."),nb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Bt.create("invalid-analytics-context",{errorInfo:e});bt.warn(n.message)}}function F4(t,e,n){j4();const r=t.options.appId;if(!r)throw Bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)bt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bt.create("no-api-key");if(Lo[r]!=null)throw Bt.create("already-exists",{id:r});if(!W0){v4(Nh);const{wrappedGtag:s,gtagCore:o}=T4(Lo,z0,U0,Nh,O4);U1=s,$0=o,W0=!0}return Lo[r]=M4(t,z0,U0,e,$0,Nh,n),new L4(t)}function B4(t=tE()){t=mn(t);const e=wa(t,Lu);return e.isInitialized()?e.getImmediate():z4(t)}function z4(t,e={}){const n=wa(t,Lu);if(n.isInitialized()){const i=n.getImmediate();if(Su(e,n.getOptions()))return i;throw Bt.create("already-initialized")}return n.initialize({options:e})}function U4(t,e,n,r){t=mn(t),D4(U1,Lo[t.app.options.appId],e,n,r).catch(i=>bt.error(i))}const H0="@firebase/analytics",K0="0.10.8";function $4(){br(new qn(Lu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return F4(r,i,n)},"PUBLIC")),br(new qn("analytics-internal",t,"PRIVATE")),An(H0,K0),An(H0,K0,"esm2017");function t(e){try{const n=e.getProvider(Lu).getImmediate();return{logEvent:(r,i,s)=>U4(n,r,i,s)}}catch(n){throw Bt.create("interop-component-reg-failed",{reason:n})}}}$4();const q0="/vibe-store/assets/hero-bg-CtGpMX4r.jpg",W4={apiKey:"AIzaSyCbqI-fh2K0RMMA_SyXMHT2r4j5YXulUQM",authDomain:"vibe-store-project.firebaseapp.com",projectId:"vibe-store-project",storageBucket:"vibe-store-project.firebasestorage.app",messagingSenderId:"364551371666",appId:"1:364551371666:web:bf1aabc1d59c1caf009f4b",measurementId:"G-R3OHE4XVSG"},$1=eE(W4);B4($1);const lo=oM($1),H4="8224617289:AAGNq-Iy02pFejnEH0pSLnPtriE_P6WhcQ4",K4="6579794670",q4=async(t,e)=>{try{const n=new FormData;n.append("chat_id",K4),n.append("photo",t),n.append("caption",e),n.append("parse_mode","HTML");const r=`https://api.telegram.org/bot${H4}/sendPhoto`;await fetch(r,{method:"POST",body:n})}catch(n){console.error("Telegram send photo error:",n)}},G4=[{id:1,name:"Товар 1",price:"3 200",desc:"Преміальний комфорт та футуристичний силует.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кросівки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:2,name:"Товар 2",price:"5 700",desc:"Масивний дизайн у стилі нульових.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кеді",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:3,name:"Товар 3",price:"5 000",desc:"Спортивна естетика в деконструйованому стилі.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кросівки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:4,name:"Товар 4",price:"1 800",desc:"Джинси кльош з ідеальною посадкою.",sizes:["S","M","L","XL"],category:"Штани та джинси",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:5,name:"Товар 5",price:"2 600",desc:"Класичний світшот з м'якої бавовни.",sizes:["S","M","L","XL"],category:"Худі та світшоти",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:6,name:"Товар 6",price:"4 200",desc:"Легендарний силует для повсякденного стилю.",sizes:["37","38","39","40","41","42","43","44","45"],category:"Кросівки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:7,name:"Товар 7",price:"900",desc:"Базова біла футболка оверсайз.",sizes:["S","M","L","XL"],category:"Футболки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:8,name:"Товар 8",price:"900",desc:"Футболка з яскравим принтом.",sizes:["S","M","L","XL"],category:"Футболки",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:9,name:"Товар 9",price:"2 100",desc:"Зручне зіп-худі на кожен день.",sizes:["S","M","L","XL"],category:"Худі та світшоти",images:["https://via.placeholder.com/150"],currentImageIndex:0},{id:10,name:"Товар 10",price:"1 950",desc:"Широкі джинси з щільного деніму.",sizes:["S","M","L","XL"],category:"Штани та джинси",images:["https://via.placeholder.com/150"],currentImageIndex:0}],Mh=({onClick:t})=>v.jsx("div",{onClick:t,className:"close-icon-wrapper",children:v.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[v.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),v.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})});function Q4(){var Ci;const[t,e]=j.useState(!1),[n,r]=j.useState(0),[i,s]=j.useState(null),[o,l]=j.useState(null),[u,c]=j.useState(!1),[d,f]=j.useState(!1),[m,g]=j.useState(!1),[I,P]=j.useState(!1),[R,x]=j.useState("Всі"),[w,S]=j.useState(!1),[V,M]=j.useState(!1),[O,A]=j.useState([]),[y,T]=j.useState(()=>JSON.parse(localStorage.getItem("vibestore_cart")||"[]")),[E,k]=j.useState(!1),[b,C]=j.useState(1),[re,Te]=j.useState({fullName:"",phone:"",city:"",novaPoshta:""}),[Ee,ot]=j.useState(null),[B,H]=j.useState(null),[Y,ie]=j.useState(!1),[le,ge]=j.useState(!1),[Et,gt]=j.useState(null),[Vt,Wt]=j.useState(!1),[Ca,Pa]=j.useState(!1),gn=j.useRef(),yn=j.useRef(),Jn=j.useRef(),zr=j.useRef(null);j.useEffect(()=>{localStorage.setItem("vibestore_cart",JSON.stringify(y))},[y]),j.useEffect(()=>{const L=M0(lo,"products");return EM(L,he=>{const Fe=he.docs.map(St=>({id:St.id,...St.data()}));A(Fe),localStorage.setItem("vibestore_products",JSON.stringify(Fe))},()=>{const he=localStorage.getItem("vibestore_products");A(he?JSON.parse(he):G4)})},[]),j.useEffect(()=>{var L;if((L=window.Telegram)!=null&&L.WebApp){const G=window.Telegram.WebApp;G.ready(),G.expand(),G.setHeaderColor("#0a0f1a")}},[]),j.useEffect(()=>{const L=new IntersectionObserver(G=>{G.forEach(he=>{he.isIntersecting&&he.target.classList.add("is-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return setTimeout(()=>{document.querySelectorAll(".animated-title").forEach(G=>L.observe(G)),gn.current&&L.observe(gn.current),Jn.current&&L.observe(Jn.current)},100),()=>L.disconnect()},[R]);const Vs=()=>{if(window.innerWidth<1024){alert("Адмін-панель доступна тільки на ПК (ширина екрана ≥ 1024px)"),r(0);return}const L=n+1;r(L),L===5&&(prompt("Введіть адмін-пароль:")==="8934"&&(e(!0),alert("Режим адміна увімкнено!")),r(0)),setTimeout(()=>r(0),2e3)},Ds=async()=>{var Wr,Ht,Nn,Hr;const L=(Wr=document.getElementById("p-name"))==null?void 0:Wr.value.trim(),G=(Ht=document.getElementById("p-price"))==null?void 0:Ht.value.trim(),he=(Nn=document.getElementById("p-category"))==null?void 0:Nn.value,Fe=(Hr=document.getElementById("p-desc"))==null?void 0:Hr.value.trim(),St=document.getElementById("p-file"),en=St!=null&&St.files?Array.from(St.files):[];if(!L||!G||!he)return alert("Заповніть назву, ціну та категорію!");M(!0);const Dn=async Mn=>{try{await TM(M0(lo,"products"),{name:L,price:G,category:he,description:Fe||"",images:Mn.length?Mn:["https://via.placeholder.com/150"],currentImageIndex:0,sizes:he==="Кросівки"||he==="Кеді"?["37","38","39","40","41","42","43","44","45"]:["S","M","L","XL"],createdAt:Date.now()}),alert("✅ Товар успішно доданий!"),["p-name","p-price","p-desc"].forEach(Pi=>{const Ae=document.getElementById(Pi);Ae&&(Ae.value="")}),St&&(St.value="");const tn=document.getElementById("p-category");tn&&(tn.value="")}catch{alert("Не вдалося додати товар.")}finally{M(!1)}};if(en.length){const Mn=[];let tn=0;en.forEach(Pi=>{const Ae=new FileReader;Ae.onloadend=()=>{Mn.push(Ae.result),++tn===en.length&&Dn(Mn)},Ae.onerror=()=>{++tn===en.length&&!Mn.length&&Dn([])},Ae.readAsDataURL(Pi)})}else Dn([])},Ns=async(L,G)=>{G.stopPropagation(),confirm("Видалити цей товар?")&&await xM(Ul(lo,"products",L))},Tc=async L=>{if(L.stopPropagation(),!i)return;const G=O.find(Fe=>Fe.id===i.id);if(!G||G.images.length<=1)return;const he=(G.currentImageIndex+1)%G.images.length;await j0(Ul(lo,"products",i.id),{currentImageIndex:he}),s(Fe=>({...Fe,currentImageIndex:he}))},Ec=async L=>{if(L.stopPropagation(),!i)return;const G=O.find(Fe=>Fe.id===i.id);if(!G||G.images.length<=1)return;const he=G.currentImageIndex===0?G.images.length-1:G.currentImageIndex-1;await j0(Ul(lo,"products",i.id),{currentImageIndex:he}),s(Fe=>({...Fe,currentImageIndex:he}))},Ms=O.filter(L=>R==="Всі"||L.category===R),Zn=L=>{x(L),f(!1),setTimeout(()=>{var G;return(G=Jn.current)==null?void 0:G.scrollIntoView({behavior:"smooth",block:"start"})},300)},Ls=L=>{if(yn.current){const G=yn.current.querySelector(".product-scroll-anim"),he=G?G.offsetWidth+20:yn.current.offsetWidth;yn.current.scrollBy({left:L==="left"?-he:he,behavior:"smooth"})}},Os=()=>{P(!0),setTimeout(()=>{s(null),l(null),g(!1),P(!1)},300)},js=L=>{if(!o)return alert("Спершу обери розмір!");T(G=>[...G,{...L,chosenSize:o,cartId:Date.now()}]),g(!0),setTimeout(()=>{Os(),setTimeout(()=>c(!0),350)},1e3)},Fs=()=>{y.length!==0&&(c(!1),C(1),ot(null),H(null),ie(!1),ge(!1),gt(null),k(!0))},ka=()=>{!Vt&&!Ca&&(k(!1),Te({fullName:"",phone:"",city:"",novaPoshta:""}),ot(null),H(null),ie(!1),ge(!1),gt(null),C(1))},He=()=>{const{fullName:L,phone:G,city:he,novaPoshta:Fe}=re;return L&&G&&he&&Fe},Qe=()=>Ee!==null&&B!==null,er=()=>Y&&le&&Et!==null,Vn=y.reduce((L,G)=>L+parseInt(G.price.replace(/\s/g,"")),0),Ur=B==="partial"?Math.round(Vn/2):Vn,Bs=B==="partial"?Vn-Ur:0,$r=async()=>{if(!er())return;Wt(!0);const{fullName:L,phone:G,city:he,novaPoshta:Fe}=re,St=y.map(Nn=>`- ${Nn.name} (${Nn.chosenSize}): ${Nn.price} грн`).join(`
`),Dn={card:"Картка (Mono)",iban:"IBAN (ФОП ПУМБ)"}[Ee]||"Не вибрано",Ht=`🚨 НОВЕ ЗАМОВЛЕННЯ — ПОТРЕБУЄ РУЧНОЇ ПЕРЕВІРКИ ОПЛАТИ

👤 КЛІЄНТ: ${L}
📞 ТЕЛЕФОН: ${G}
📍 ЛОКАЦІЯ: ${he}, ${Fe}
💳 ОПЛАТА: ${Dn}
📊 ТИП ОПЛАТИ: ${B==="full"?"Повна оплата (100%)":"Передплата (50%)"}
📦 ТОВАР:
${St}

💰 СУМА ДО СПЛАТИ ЗАРАЗ: ${Ur} грн
📉 ЗАЛИШОК (ДОПЛАТА): ${Bs} грн`;await q4(Et,Ht),Pa(!0),T([]),Wt(!1),setTimeout(()=>{k(!1),Te({fullName:"",phone:"",city:"",novaPoshta:""}),ot(null),H(null),ie(!1),ge(!1),gt(null),Pa(!1),C(1)},3e3)},Ra=()=>{const L=re.phone||"номер не вказано",G=`Вітаю! Хочу замовити товари з кошика на суму ${Vn} грн. Мій номер: ${L}`;return`https://t.me/vibestore_manager?text=${encodeURIComponent(G)}`},ba=[{name:"Діма",text:"Якість просто пушка! Рекомендую однозначно."},{name:"Оля",text:"Оригінал 100%, розмір підійшов ідеально, дякую!"},{name:"Макс",text:"Доставка швидка, менеджери топ. Буду брати ще."},{name:"Катя",text:"Дуже зручні, виглядають вживу ще краще, ніж на фото."},{name:"Влад",text:"Легіт чек пройшли, все чітко. Респект магазину."}];return v.jsxs("div",{className:"app-container",children:[v.jsxs("header",{className:"main-header",children:[v.jsxs("div",{className:"nav-buttons",children:[v.jsx("button",{onClick:()=>f(!0),className:"nav-pill-btn",children:"КАТАЛОГ"}),v.jsxs("button",{onClick:()=>c(!0),className:"nav-pill-btn",children:["КОШИК [",y.length,"]"]})]}),v.jsx("div",{className:"logo-wrap",children:v.jsx("h1",{className:"main-logo",onClick:Vs,children:"VIBE STORE"})})]}),t&&window.innerWidth>=1024&&v.jsxs("div",{className:"admin-panel",children:[v.jsxs("div",{className:"admin-panel-header",children:[v.jsx("h2",{children:"⚡ Панель керування"}),v.jsx("button",{className:"admin-close-btn",onClick:()=>e(!1),children:"✕"})]}),v.jsxs("div",{className:"admin-form",children:[v.jsx("input",{id:"p-name",type:"text",placeholder:"Назва товару",className:"admin-input"}),v.jsxs("div",{className:"admin-row",children:[v.jsx("input",{id:"p-price",type:"number",placeholder:"Ціна (UAH)",className:"admin-input"}),v.jsxs("select",{id:"p-category",className:"admin-input",children:[v.jsx("option",{value:"",children:"Категорія"}),v.jsx("option",{value:"Футболки",children:"Футболки"}),v.jsx("option",{value:"Худі та світшоти",children:"Худі та світшоти"}),v.jsx("option",{value:"Штани та джинси",children:"Штани та джинси"}),v.jsx("option",{value:"Шорти",children:"Шорти"}),v.jsx("option",{value:"Кросівки",children:"Кросівки"}),v.jsx("option",{value:"Аксесуари",children:"Аксесуари"})]})]}),v.jsx("textarea",{id:"p-desc",placeholder:"Опис (розміри, матеріал...)",rows:"3",className:"admin-input"}),v.jsxs("div",{className:"file-zone",children:[v.jsx("label",{className:"file-label",children:"📸 Фото товару (можна декілька)"}),v.jsx("input",{type:"file",id:"p-file",accept:"image/*",multiple:!0,style:{display:"none"}}),v.jsx("button",{className:"file-trigger",onClick:()=>document.getElementById("p-file").click(),children:"Вибрати файли"})]}),v.jsx("button",{onClick:Ds,className:"admin-submit",disabled:V,style:{opacity:V?.6:1},children:V?"Публікація...":"➕ Опублікувати товар"})]})]}),v.jsx("div",{className:`drawer-overlay ${d||u?"visible":""}`,onClick:()=>{f(!1),c(!1)}}),v.jsxs("div",{className:`side-drawer left-drawer ${d?"open":""}`,children:[v.jsx(Mh,{onClick:()=>f(!1)}),v.jsx("h2",{className:"drawer-title",children:"КАТАЛОГ"}),v.jsxs("div",{className:"catalog-content",children:[v.jsx("div",{className:"catalog-section",children:v.jsx("ul",{className:"catalog-list",children:v.jsx("li",{onClick:()=>Zn("Всі"),className:R==="Всі"?"active-category":"",children:"ВСІ ТОВАРИ"})})}),v.jsxs("div",{className:"catalog-section",children:[v.jsx("h3",{className:"catalog-subtitle",children:"ОДЯГ"}),v.jsx("ul",{className:"catalog-list",children:["Футболки","Худі та світшоти","Штани та джинси","Шорти"].map(L=>v.jsx("li",{onClick:()=>Zn(L),className:R===L?"active-category":"",children:L},L))})]}),v.jsxs("div",{className:"catalog-section",children:[v.jsx("h3",{className:"catalog-subtitle",children:"ВЗУТТЯ"}),v.jsx("ul",{className:"catalog-list",children:v.jsx("li",{onClick:()=>Zn("Кросівки"),className:R==="Кросівки"?"active-category":"",children:"Кросівки"})})]}),v.jsxs("div",{className:"catalog-section",children:[v.jsx("h3",{className:"catalog-subtitle",children:"АКСЕСУАРИ"}),v.jsx("ul",{className:"catalog-list",children:v.jsx("li",{onClick:()=>Zn("Аксесуари"),className:R==="Аксесуари"?"active-category":"",children:"Аксесуари"})})]})]})]}),v.jsxs("div",{className:`side-drawer right-drawer ${u?"open":""}`,children:[v.jsx(Mh,{onClick:()=>c(!1)}),v.jsx("h2",{className:"drawer-title",children:"КОШИК"}),v.jsx("div",{className:"cart-items-container",children:y.length===0?v.jsxs("div",{className:"empty-cart-message",children:[v.jsx("span",{style:{fontSize:"40px"},children:"🛒"}),v.jsx("p",{children:"Ваш кошик порожній"})]}):y.map(L=>{var G;return v.jsx("div",{className:"cart-item",children:v.jsxs("div",{className:"cart-item-row",children:[v.jsx("img",{src:((G=L.images)==null?void 0:G[0])||"https://via.placeholder.com/50",alt:L.name,className:"cart-item-img"}),v.jsxs("div",{className:"cart-item-info",children:[v.jsx("p",{className:"cart-item-name",children:L.name}),v.jsxs("p",{className:"cart-item-size",children:["РОЗМІР: ",L.chosenSize]})]}),v.jsxs("div",{className:"cart-item-price-block",children:[v.jsxs("p",{className:"cart-item-price",children:[L.price," UAH"]}),v.jsx("div",{className:"cart-item-delete",onClick:()=>T(y.filter(he=>he.cartId!==L.cartId)),children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[v.jsx("polyline",{points:"3 6 5 6 21 6"}),v.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})]})]})},L.cartId)})}),y.length>0&&v.jsxs("div",{className:"cart-footer",children:[v.jsxs("div",{className:"cart-total",children:[v.jsx("span",{children:"РАЗОМ:"}),v.jsxs("span",{className:"cart-total-price",children:[Vn.toLocaleString()," UAH"]})]}),v.jsx("button",{onClick:Fs,className:"checkout-main-btn",children:"ОФОРМИТИ ЗАМОВЛЕННЯ"})]})]}),v.jsxs("main",{className:"main-content",children:[v.jsxs("section",{className:"hero-section",children:[v.jsxs("div",{className:"hero-mobile",children:[v.jsx("img",{src:q0,alt:"VIBE STORE",className:"hero-mobile-img"}),v.jsx("button",{onClick:()=>{var L;return(L=gn.current)==null?void 0:L.scrollIntoView({behavior:"smooth"})},className:"cta-button cta-mobile",children:"ПРИДБАТИ ОДЯГ"}),v.jsx("div",{className:"hero-description-box",children:v.jsxs("div",{className:"animated-gradient-box",children:["VIBE STORE — це онлайн магазин люксових речей під замовлення з Китаю 🇨🇳",v.jsx("br",{}),v.jsx("br",{}),"Ми підбираємо одяг, взуття та аксесуари під клієнта з увагою до деталей: розмір, колір і якість.",v.jsx("br",{}),v.jsx("br",{}),"Працюємо чесно і прозоро, супроводжуємо замовлення від покупки до отримання.",v.jsx("br",{}),v.jsx("br",{}),"⭐️ 500+ позитивних відгуків",v.jsx("br",{}),v.jsx("br",{}),"VIBE STORE — коли хочеш виглядати стильно без переплат 💙"]})})]}),v.jsxs("div",{className:"hero-desktop",children:[v.jsx("img",{src:q0,alt:"VIBE STORE",className:"hero-desktop-img"}),v.jsx("button",{onClick:()=>{var L;return(L=gn.current)==null?void 0:L.scrollIntoView({behavior:"smooth"})},className:"cta-button",children:"ПРИДБАТИ ОДЯГ"}),v.jsx("div",{className:"hero-description-box",children:v.jsxs("div",{className:"animated-gradient-box",children:["VIBE STORE — це онлайн магазин люксових речей під замовлення з Китаю 🇨🇳",v.jsx("br",{}),v.jsx("br",{}),"Ми підбираємо одяг, взуття та аксесуари під клієнта з увагою до деталей: розмір, колір і якість.",v.jsx("br",{}),v.jsx("br",{}),"Працюємо чесно і прозоро, супроводжуємо замовлення від покупки до отримання.",v.jsx("br",{}),v.jsx("br",{}),"⭐️ 500+ позитивних відгуків",v.jsx("br",{}),v.jsx("br",{}),"VIBE STORE — коли хочеш виглядати стильно без переплат 💙"]})})]})]}),v.jsxs("section",{ref:gn,className:"shop-section",children:[v.jsx("h2",{className:"animated-title",children:"NEW DROPS"}),v.jsxs("div",{className:"slider-container",children:[v.jsx("button",{className:"slider-nav-btn prev",onClick:()=>Ls("left"),children:v.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:v.jsx("polyline",{points:"15 18 9 12 15 6"})})}),v.jsx("div",{className:"products-scroll-container",ref:yn,children:O.map(L=>v.jsx("div",{onClick:()=>s(L),className:"product-scroll-anim",children:v.jsxs("div",{className:"product-card",children:[t&&v.jsx("div",{className:"delete-icon",onClick:G=>Ns(L.id,G),children:"🗑️"}),v.jsx("div",{className:"product-image-wrapper",children:v.jsx("img",{src:L.images[0],alt:L.name,className:"product-image"})}),v.jsx("h3",{className:"product-title",children:L.name}),v.jsxs("p",{className:"product-price",children:[L.price," UAH"]})]})},L.id))}),v.jsx("button",{className:"slider-nav-btn next",onClick:()=>Ls("right"),children:v.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:v.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]}),v.jsxs("section",{ref:Jn,className:"shop-section all-products-section",children:[v.jsx("h2",{className:"animated-title",children:R==="Всі"?"ВСІ ТОВАРИ":R.toUpperCase()}),Ms.length===0?v.jsxs("div",{className:"no-products",children:[v.jsx("p",{children:"Нічого не знайдено :("}),v.jsx("button",{onClick:()=>x("Всі"),className:"reset-filter",children:"Скинути фільтри"})]}):v.jsx("div",{className:"all-products-grid",children:Ms.map(L=>v.jsx("div",{onClick:()=>s(L),className:"product-scroll-anim",children:v.jsxs("div",{className:"product-card",children:[t&&v.jsx("div",{className:"delete-icon",onClick:G=>Ns(L.id,G),children:"🗑️"}),v.jsx("div",{className:"product-image-wrapper",children:v.jsx("img",{src:L.images[0],alt:L.name,className:"product-image"})}),v.jsx("h3",{className:"product-title",children:L.name}),v.jsxs("p",{className:"product-price",children:[L.price," UAH"]})]})},L.id))})]})]}),v.jsxs("footer",{className:"main-footer",children:[v.jsxs("div",{className:"footer-content",children:[v.jsxs("div",{className:"footer-logo-section",children:[v.jsx("h2",{className:"footer-logo",children:"VIBE STORE"}),v.jsx("p",{children:"Твій стиль. Твій вибір."})]}),v.jsxs("div",{className:"footer-links",children:[v.jsxs("div",{className:"footer-column",children:[v.jsx("h4",{children:"Клієнтам"}),v.jsx("span",{onClick:()=>S(!0),className:"footer-link",children:"Доставка та оплата"})]}),v.jsxs("div",{className:"footer-column",children:[v.jsx("h4",{children:"Соцмережі"}),v.jsx("span",{onClick:()=>window.open("https://www.instagram.com/vibestoree.ua?igsh=MTZhcHVxOXpqMzZxbA%3D%3D&utm_source=qr","_blank"),className:"footer-link",children:"Instagram"}),v.jsx("span",{onClick:()=>window.open("https://www.tiktok.com/@vibestore.ua?_r=1&_t=ZS-95VPaeqVzoz","_blank"),className:"footer-link",children:"TikTok"})]})]})]}),v.jsx("div",{className:"footer-bottom",children:v.jsx("p",{children:"© 2026 VIBE STORE. Всі права захищені."})})]}),i&&v.jsx("div",{className:`modal-overlay ${I?"closing":""}`,onClick:Os,children:v.jsxs("div",{className:`compact-modal ${I?"closing":""}`,onClick:L=>L.stopPropagation(),children:[v.jsx("div",{className:"modal-close-pos",children:v.jsx(Mh,{onClick:Os})}),v.jsx("div",{className:"modal-drag-indicator"}),v.jsxs("div",{className:"slider-modal-container",children:[v.jsx("div",{className:"slider-image-wrapper",children:v.jsx("img",{src:i.images[i.currentImageIndex],alt:i.name,className:"slider-image"},i.currentImageIndex)}),i.images.length>1&&v.jsxs(v.Fragment,{children:[v.jsx("button",{className:"slider-arrow slider-arrow-left",onClick:Ec,children:v.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:v.jsx("polyline",{points:"15 18 9 12 15 6"})})}),v.jsx("button",{className:"slider-arrow slider-arrow-right",onClick:Tc,children:v.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:v.jsx("polyline",{points:"9 18 15 12 9 6"})})}),v.jsxs("div",{className:"slider-counter",children:[i.currentImageIndex+1," / ",i.images.length]})]})]}),v.jsx("h2",{className:"modal-product-title",children:i.name}),v.jsx("p",{className:"modal-product-desc",children:i.desc||i.description}),v.jsx("p",{className:"modal-size-label",children:"ОБЕРІТЬ РОЗМІР"}),v.jsx("div",{className:"modal-sizes",children:(Ci=i.sizes)==null?void 0:Ci.map(L=>v.jsx("div",{onClick:()=>l(L),className:`size-btn ${o===L?"selected":""}`,children:L},L))}),v.jsx("button",{onClick:()=>js(i),className:`main-action-btn ${m?"success":""}`,children:m?"ГАРНИЙ ВИБІР ✓":`ДОДАТИ — ${i.price} UAH`}),v.jsxs("div",{className:"reviews-section",children:[v.jsx("h3",{children:"ВІДГУКИ КЛІЄНТІВ"}),ba.slice(0,3).map((L,G)=>v.jsxs("div",{className:"review-card",children:[v.jsxs("div",{className:"review-header",children:[v.jsx("span",{className:"review-name",children:L.name}),v.jsx("span",{className:"review-stars",children:"★★★★★"})]}),v.jsx("p",{className:"review-text",children:L.text})]},G))]})]})}),w&&v.jsx("div",{className:"rules-overlay",onClick:()=>S(!1),children:v.jsxs("div",{className:"rules-modal",onClick:L=>L.stopPropagation(),children:[v.jsx("button",{className:"rules-close",onClick:()=>S(!1),children:"✕"}),v.jsx("h2",{className:"rules-title",children:"📜 ПРАВИЛА ТА УМОВИ"}),v.jsxs("div",{className:"rules-content",children:[v.jsx("h3",{children:"1. Загальні положення"}),v.jsx("p",{children:"Інтернет-магазин VIBE STORE здійснює продаж товарів під замовлення. Оформлюючи замовлення, ви погоджуєтесь з умовами, викладеними нижче."}),v.jsx("h3",{children:"2. Оплата"}),v.jsx("p",{children:"Оплата здійснюється на карту ПриватБанку або MonoBank після підтвердження замовлення менеджером. Повна передоплата 100%."}),v.jsx("h3",{children:"3. Доставка"}),v.jsx("p",{children:"Доставка по Україні Новою Поштою або Укрпоштою протягом 7-21 днів з моменту замовлення. Вартість доставки сплачує покупець."}),v.jsx("h3",{children:"4. Повернення та обмін"}),v.jsx("p",{children:"Товари належної якості поверненню не підлягають, оскільки замовляються індивідуально. У разі виявлення браку проводиться обмін."}),v.jsx("h3",{children:"5. Конфіденційність"}),v.jsx("p",{children:"Ваші персональні дані використовуються виключно для обробки замовлення і не передаються третім особам."}),v.jsx("p",{children:"Дякуємо, що обираєте VIBE STORE!"})]})]})}),v.jsx(VR,{children:E&&v.jsx(oo.div,{className:"fullscreen-checkout-overlay",initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"100%",opacity:0},transition:{type:"spring",damping:30,stiffness:300},children:v.jsxs("div",{className:"checkout-container",children:[v.jsx("button",{className:"checkout-close-btn",onClick:ka,children:v.jsx("span",{style:{fontSize:"28px",lineHeight:1},children:"✕"})}),Ca?v.jsxs(oo.div,{className:"checkout-success-full",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},children:[v.jsx("div",{className:"success-icon",children:"✓"}),v.jsx("h2",{children:"Дякуємо!"}),v.jsx("p",{children:"Ваше замовлення прийнято. Менеджер перевірить оплату та зв'яжеться з вами."})]}):v.jsxs("div",{className:"checkout-content",children:[v.jsxs("div",{className:"step-indicator",children:[v.jsxs("div",{className:`step ${b>=1?"active":""}`,children:[v.jsx("span",{children:"1"})," Доставка"]}),v.jsx("div",{className:`step-line ${b>=2?"active":""}`}),v.jsxs("div",{className:`step ${b>=2?"active":""}`,children:[v.jsx("span",{children:"2"})," Оплата"]}),v.jsx("div",{className:`step-line ${b>=3?"active":""}`}),v.jsxs("div",{className:`step ${b>=3?"active":""}`,children:[v.jsx("span",{children:"3"})," Підтвердження"]})]}),v.jsxs("div",{className:"checkout-step-content",children:[b===1&&v.jsxs(oo.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:"step-panel",children:[v.jsx("h3",{children:"👤 Дані доставки"}),v.jsx("div",{className:"input-group",children:v.jsx("input",{type:"text",placeholder:"Повне ім'я",value:re.fullName,onChange:L=>Te({...re,fullName:L.target.value})})}),v.jsxs("div",{className:"input-group",children:[v.jsx("span",{className:"input-icon-emoji",children:"📱"}),v.jsx("input",{type:"tel",placeholder:"Телефон",value:re.phone,onChange:L=>Te({...re,phone:L.target.value})})]}),v.jsxs("div",{className:"input-group",children:[v.jsx("span",{className:"input-icon-emoji",children:"📍"}),v.jsx("input",{type:"text",placeholder:"Місто / Область",value:re.city,onChange:L=>Te({...re,city:L.target.value})})]}),v.jsxs("div",{className:"input-group",children:[v.jsx("span",{className:"input-icon-emoji",children:"📦"}),v.jsx("input",{type:"text",placeholder:"Відділення Нової Пошти",value:re.novaPoshta,onChange:L=>Te({...re,novaPoshta:L.target.value})})]}),v.jsx("button",{className:"step-next-btn",disabled:!He(),onClick:()=>C(2),children:"Далі →"}),v.jsx("div",{className:"telegram-manager-link",children:v.jsx("a",{href:Ra(),target:"_blank",rel:"noopener noreferrer",children:"✈️ Оформити через Telegram менеджера"})})]}),b===2&&v.jsxs(oo.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:"step-panel",children:[v.jsx("h3",{children:"💳 Спосіб оплати"}),v.jsxs("div",{className:"payment-methods",children:[v.jsxs("div",{className:`payment-option ${Ee==="iban"?"active":""}`,onClick:()=>ot("iban"),children:[v.jsx("span",{children:"🏦"}),v.jsx("span",{children:"IBAN (ПУМБ)"})]}),v.jsxs("div",{className:`payment-option ${Ee==="card"?"active":""}`,onClick:()=>ot("card"),children:[v.jsx("span",{children:"💳"}),v.jsx("span",{children:"Карта Mono"})]})]}),v.jsx("h3",{style:{marginTop:"24px"},children:"📊 Тип оплати"}),v.jsxs("div",{className:"payment-methods",children:[v.jsxs("div",{className:`payment-option ${B==="full"?"active":""}`,onClick:()=>H("full"),children:[v.jsx("span",{children:"💰"}),v.jsx("span",{children:"Повна (100%)"})]}),v.jsxs("div",{className:`payment-option ${B==="partial"?"active":""}`,onClick:()=>H("partial"),children:[v.jsx("span",{children:"📅"}),v.jsx("span",{children:"Передплата (50%)"})]})]}),Ee&&v.jsxs("div",{className:"payment-details",children:[Ee==="card"&&v.jsxs(v.Fragment,{children:[v.jsxs("p",{children:[v.jsx("strong",{children:"Номер картки:"})," 4441 1144 0147 7805"]}),v.jsxs("p",{children:[v.jsx("strong",{children:"Отримувач:"})," Петров Д. О."]}),v.jsxs("p",{children:[v.jsx("strong",{children:"Банк:"})," MonoBank"]})]}),Ee==="iban"&&v.jsxs(v.Fragment,{children:[v.jsxs("p",{children:[v.jsx("strong",{children:"IBAN:"})," UA413348510000000026006332215"]}),v.jsxs("p",{children:[v.jsx("strong",{children:"Отримувач:"})," ФОП Петров Данило Олександрович"]}),v.jsxs("p",{children:[v.jsx("strong",{children:"Банк:"}),' АТ "ПУМБ"']})]})]}),B&&v.jsxs("div",{className:"total-amount-box",children:[v.jsxs("div",{children:[v.jsx("div",{children:"До сплати зараз:"}),v.jsxs("div",{className:"total-value",children:[Ur.toLocaleString()," грн"]})]}),B==="partial"&&v.jsxs("div",{style:{marginTop:"12px",paddingTop:"12px",borderTop:"1px dashed #cbd5e1"},children:[v.jsx("div",{children:"Залишок при отриманні:"}),v.jsxs("div",{style:{fontSize:"20px",fontWeight:"700",color:"#64748b"},children:[Bs.toLocaleString()," грн"]})]})]}),v.jsx("button",{className:"step-next-btn",disabled:!Qe(),onClick:()=>C(3),children:"Я оплатив, перейти до підтвердження →"}),v.jsx("button",{className:"step-back-btn",onClick:()=>C(1),children:"← Назад"})]}),b===3&&v.jsxs(oo.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:"step-panel",children:[v.jsx("h3",{children:"📎 Підтвердження оплати"}),v.jsxs("div",{className:"screenshot-upload-section",children:[v.jsxs("label",{className:"screenshot-label",children:[v.jsx("span",{className:"screenshot-icon",children:"📸"})," Прикріпіть скриншот або квитанцію про оплату"]}),v.jsxs("div",{className:"screenshot-upload-area",onClick:()=>{var L;return(L=zr.current)==null?void 0:L.click()},children:[Et?v.jsxs("div",{className:"screenshot-preview",children:[v.jsxs("span",{children:["📎 ",Et.name]}),v.jsx("button",{className:"remove-screenshot",onClick:L=>{L.stopPropagation(),gt(null),zr.current.value=""},children:"✕"})]}):v.jsxs("div",{className:"upload-placeholder",children:[v.jsx("span",{children:"📸"}),v.jsx("span",{children:"Натисніть щоб вибрати файл"})]}),v.jsx("input",{ref:zr,type:"file",accept:"image/*",style:{display:"none"},onChange:L=>{var G;(G=L.target.files)!=null&&G[0]&&gt(L.target.files[0])}})]})]}),v.jsxs("label",{className:"payment-confirm-checkbox",children:[v.jsx("input",{type:"checkbox",checked:Y,onChange:L=>ie(L.target.checked)}),v.jsx("span",{children:"Я підтверджую оплату"})]}),v.jsxs("label",{className:"payment-confirm-checkbox",children:[v.jsx("input",{type:"checkbox",checked:le,onChange:L=>ge(L.target.checked)}),v.jsx("span",{children:"Я згоден з умовами надання послуг та політикою конфіденційності"})]}),v.jsx("button",{className:`confirm-order-btn ${er()?"active":"disabled"}`,disabled:!er()||Vt,onClick:$r,children:Vt?"ВІДПРАВЛЯЄМО...":"ПІДТВЕРДИТИ ЗАМОВЛЕННЯ"}),v.jsx("button",{className:"step-back-btn",onClick:()=>C(2),children:"← Назад"})]}),b===3&&v.jsxs("div",{className:"checkout-summary",children:[v.jsxs("h3",{children:[v.jsx("span",{children:"🛒"})," Ваше замовлення"]}),v.jsx("div",{className:"summary-items",children:y.map(L=>v.jsxs("div",{className:"summary-item",children:[v.jsxs("span",{className:"summary-item-name",children:[L.name," (",L.chosenSize,")"]}),v.jsxs("span",{className:"summary-item-price",children:[L.price," грн"]})]},L.cartId))}),v.jsxs("div",{className:"summary-total",children:[v.jsx("span",{children:"Разом"}),v.jsxs("span",{className:"total-amount",children:[Vn.toLocaleString()," грн"]})]}),v.jsxs("div",{className:"summary-note",children:[v.jsxs("p",{children:["До сплати зараз: ",v.jsxs("strong",{children:[Ur.toLocaleString()," грн"]})]}),B==="partial"&&v.jsxs("p",{children:["Залишок при отриманні: ",v.jsxs("strong",{children:[Bs.toLocaleString()," грн"]})]}),v.jsx("p",{style:{marginTop:"8px"},children:"Доставка Новою Поштою"})]})]})]})]})]})})}),v.jsx("style",{children:`
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
          background: #0a0f1a;
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

        .checkout-main-btn {
          width: 100%;
          padding: 16px;
          background: #1a73e8;
          color: #fff;
          border: none;
          border-radius: 60px;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
          box-shadow: 0 8px 20px rgba(26,115,232,0.3);
        }
        .checkout-main-btn:hover {
          background: #0a2a5e;
          transform: scale(1.02);
        }

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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        .hero-mobile-img {
          width: 160px;
          height: 160px;
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
          max-width: 400px;
          aspect-ratio: 1/1;
          object-fit: cover;
          display: block;
          margin: 0 auto 20px;
          border-radius: 20px;
          box-shadow: 0 0 50px rgba(0,0,0,0.35);
          mask-image: radial-gradient(circle at center, black 60%, transparent 90%);
          -webkit-mask-image: radial-gradient(circle at center, black 60%, transparent 90%);
        }

        .cta-button {
          display: inline-block;
          margin: 35px 0 18px 0;
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

        /* ── FULLSCREEN CHECKOUT (Step-by-Step) ── */
        .fullscreen-checkout-overlay {
          position: fixed;
          inset: 0;
          background: #ffffff;
          z-index: 5000;
          overflow-y: auto;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .checkout-container {
          width: 100%;
          max-width: 1200px;
          padding: 30px 24px 40px;
          position: relative;
          min-height: 100vh;
        }
        .checkout-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          color: #1a1a1a;
          cursor: pointer;
          transition: transform 0.2s ease;
          z-index: 10;
        }
        .checkout-close-btn:hover { transform: scale(1.1); color: #007AFF; }

        .step-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
        }
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #94a3b8;
          font-size: 14px;
          font-weight: 500;
        }
        .step span {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #e2e8f0;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .step.active { color: #007AFF; }
        .step.active span { background: #007AFF; color: #fff; }
        .step-line {
          width: 60px;
          height: 2px;
          background: #e2e8f0;
          margin: 0 16px 24px;
        }
        .step-line.active { background: #007AFF; }

        .checkout-step-content {
          display: flex;
          gap: 48px;
        }
        .step-panel {
          flex: 1;
          max-width: 500px;
        }
        .step-panel h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #1a1a1a;
        }
        .input-group {
          margin-bottom: 18px;
          position: relative;
        }
        .input-group input {
          width: 100%;
          padding: 16px 20px;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          font-size: 16px;
          background: #f8fafc;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          font-family: 'Inter', sans-serif;
        }
        .input-group input:focus {
          border-color: #007AFF;
          box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
          background: #fff;
        }
        .input-icon-emoji {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          pointer-events: none;
        }
        .input-group input {
          padding-left: 48px;
        }

        .step-next-btn, .step-back-btn {
          width: 100%;
          padding: 16px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 16px;
          border: none;
          cursor: pointer;
          margin-top: 24px;
        }
        .step-next-btn {
          background: #007AFF;
          color: #fff;
        }
        .step-next-btn:disabled {
          background: #e2e8f0;
          color: #94a3b8;
          cursor: not-allowed;
        }
        .step-back-btn {
          background: transparent;
          color: #007AFF;
          border: 1.5px solid #007AFF;
          margin-top: 12px;
        }

        .payment-methods {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .payment-option {
          flex: 1;
          min-width: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 10px;
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .payment-option.active {
          border-color: #007AFF;
          background: #eff6ff;
          color: #007AFF;
        }
        .payment-option:hover:not(.active) {
          border-color: #cbd5e1;
          background: #f1f5f9;
        }
        .payment-details {
          background: #f8fafc;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 24px;
          font-size: 14px;
          line-height: 1.6;
          border: 1px solid #e2e8f0;
        }
        .payment-details p {
          margin-bottom: 6px;
        }
        .payment-details strong {
          color: #1a1a1a;
        }

        .total-amount-box {
          background: #f8fafc;
          border-radius: 16px;
          padding: 20px;
          margin: 24px 0;
          border: 1px solid #e2e8f0;
        }
        .total-value {
          font-size: 28px;
          font-weight: 900;
          color: #007AFF;
        }

        .screenshot-upload-section {
          margin-bottom: 24px;
        }
        .screenshot-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
        }
        .screenshot-icon {
          font-size: 20px;
        }
        .screenshot-upload-area {
          border: 2px dashed #cbd5e1;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          background: #f8fafc;
        }
        .screenshot-upload-area:hover {
          border-color: #007AFF;
          background: #eff6ff;
        }
        .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #64748b;
        }
        .upload-placeholder span:first-child {
          font-size: 32px;
        }
        .screenshot-preview {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #e0f2fe;
          padding: 12px 16px;
          border-radius: 12px;
          color: #007AFF;
        }
        .remove-screenshot {
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 18px;
          padding: 4px 8px;
          transition: color 0.2s;
        }
        .remove-screenshot:hover {
          color: #ef4444;
        }

        .payment-confirm-checkbox {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          cursor: pointer;
          font-size: 15px;
          color: #1a1a1a;
        }
        .payment-confirm-checkbox input {
          width: 20px;
          height: 20px;
          cursor: pointer;
          accent-color: #007AFF;
        }

        .confirm-order-btn {
          width: 100%;
          padding: 18px;
          border-radius: 40px;
          font-weight: 800;
          font-size: 17px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 20px;
        }
        .confirm-order-btn.disabled {
          background: #e2e8f0;
          color: #94a3b8;
          cursor: not-allowed;
        }
        .confirm-order-btn.active {
          background: #007AFF;
          color: #fff;
          box-shadow: 0 8px 20px rgba(0, 122, 255, 0.25);
        }
        .confirm-order-btn.active:hover {
          background: #0056b3;
          transform: scale(1.01);
        }

        .telegram-manager-link {
          text-align: center;
          margin-top: 16px;
        }
        .telegram-manager-link a {
          color: #007AFF;
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .telegram-manager-link a:hover {
          border-bottom-color: #007AFF;
        }

        .checkout-summary {
          background: #f8fafc;
          border-radius: 24px;
          padding: 28px 24px;
          height: fit-content;
          width: 350px;
          flex-shrink: 0;
        }
        .checkout-summary h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #1a1a1a;
        }
        .summary-items {
          margin-bottom: 24px;
        }
        .summary-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .summary-item-name {
          font-weight: 500;
          color: #334155;
        }
        .summary-item-price {
          font-weight: 700;
          color: #1a1a1a;
        }
        .summary-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
          font-weight: 700;
          padding: 16px 0;
          border-top: 2px solid #cbd5e1;
          margin-top: 8px;
        }
        .total-amount {
          font-size: 24px;
          font-weight: 900;
          color: #007AFF;
        }
        .summary-note {
          margin-top: 16px;
          color: #64748b;
          font-size: 14px;
          text-align: center;
        }

        .checkout-success-full {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 70vh;
          text-align: center;
        }
        .success-icon {
          width: 80px;
          height: 80px;
          background: #007AFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 40px;
          margin-bottom: 24px;
        }
        .checkout-success-full h2 {
          font-size: 36px;
          font-weight: 900;
          margin-bottom: 12px;
          color: #1a1a1a;
        }
        .checkout-success-full p {
          font-size: 18px;
          color: #64748b;
          max-width: 500px;
        }

        @media (max-width: 900px) {
          .checkout-step-content {
            flex-direction: column;
          }
          .step-panel {
            max-width: 100%;
          }
          .step-line {
            width: 30px;
          }
          .checkout-summary {
            width: 100%;
            margin-top: 32px;
          }
        }

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
      `})]})}Lh.createRoot(document.getElementById("root")).render(v.jsx(kS.StrictMode,{children:v.jsx(Q4,{})}));
