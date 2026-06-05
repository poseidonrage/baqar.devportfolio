var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function T(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function E(e,t){return typeof e==`object`&&e&&e.key!=null?T(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+E(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+E(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+E(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&E(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&E(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var T=new MessageChannel,ie=T.port2;T.port1.onmessage=re,w=function(){ie.postMessage(null)}}else w=function(){_(re,0)};function E(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,E(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),T=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),E=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=E&&e[E]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case T:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function k(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function A(e,t){de++,ue[de]=e.current,e.current=t}var pe=fe(null),me=fe(null),he=fe(null),ge=fe(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}k(pe),A(pe,e)}function ve(){k(pe),k(me),k(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(k(pe),k(me)),ge.current===e&&(k(ge),Qf._currentValue=le)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var j=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-j(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-j(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-j(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return Oe.call(Nt,e)?!0:Oe.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ht(wt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(gn){var yr;if(gn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,ln(e)),mn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=gn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Ut(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};gn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),kt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-j(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case T:return e=hi(31,n,t,a),e.elementType=T,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=hi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=hi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-j(r)-1;r&=~(1<<i),n+=1;var a=32-j(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-j(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=fe(null),Qi=null,$i=null;function ea(e,t,n){A(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,k(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=D.S;D.S=function(e,t){eu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=fe(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?A(Ca,Ca.current):A(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case w:return t=Na(t),f(e,t,n)}if(ce(t)||ae(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Na(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Na(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Na(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===S)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=fe(null),io=fe(0);function ao(e,t){e=Wl,A(io,e),A(ro,t),Wl=e|t.baseLanes}function oo(){A(io,Wl),A(ro,ro.current)}function so(){Wl=io.current,k(ro),k(io)}var co=fe(null),lo=null;function uo(e){var t=e.alternate;A(F,F.current&1),A(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){A(F,F.current),A(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(A(F,F.current),A(co,e),lo===null&&(lo=e)):mo(e)}function mo(){A(F,F.current),A(co,co.current)}function ho(e){k(co),lo===e&&(lo=null),k(F)}var F=fe(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){D.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Ls(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,le,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-j(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=pe.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=pe.current,qi(t))Gi(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(k(F),r=t.memoizedState,r===null)return H(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return A(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Ne()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=F.current,A(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&k(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(F),null;case 4:return ve(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&k(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:k(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&k(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:D.T===null?ut():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),rt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ne(),10<a)){if(yu(r,t,Jl,!Vl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-Ne():(a&4194048)===a?eu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-j(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=$e(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-j(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,D.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=D.H;return D.H=Vs,e===null?Vs:e}function Eu(){var e=D.A;return D.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,D.H=i,D.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ne()+500,Su(e,t)):Hl=$e(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,D.H=r,D.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!je();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,it(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ne()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=ui(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-j(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-j(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),lt(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case qr:case Jr:case Yr:l=Rn;break;case $r:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c))if(vr)v=Dr;else{v=Tr;var y=wr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-j(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),b=o(((e,t)=>{t.exports=y()}))(),x=({activeView:e,setActiveView:t})=>{let[n,r]=(0,_.useState)(`home`),[i,a]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let e=()=>{window.scrollY>50?a(!0):a(!1)};return window.addEventListener(`scroll`,e),e(),()=>window.removeEventListener(`scroll`,e)},[]),(0,_.useEffect)(()=>{if(e===`blog`){r(`blog`);return}if(e===`roadmap`){r(`roadmap`);return}let t=[`hero`,`expertise`,`work`,`experience`,`contact`],n=()=>{let e=window.scrollY+window.innerHeight/3;for(let n of t){let t=document.getElementById(n);if(t){let i=t.offsetTop,a=t.offsetHeight;if(e>=i&&e<i+a){r(n===`hero`?`home`:n);break}}}};return window.addEventListener(`scroll`,n),n(),()=>window.removeEventListener(`scroll`,n)},[e]);let o=(n,i)=>{if(i.preventDefault(),n===`home`)t(`home`),window.scrollTo({top:0,behavior:`smooth`}),r(`home`);else if(e!==`home`)t(`home`),setTimeout(()=>{let e=document.getElementById(n);e&&e.scrollIntoView({behavior:`smooth`})},100);else{let e=document.getElementById(n);e&&e.scrollIntoView({behavior:`smooth`})}};return(0,b.jsxs)(`nav`,{className:`navbar-container ${i||e===`blog`||e===`admin`?`navbar-scrolled`:``}`,children:[(0,b.jsxs)(`div`,{className:`navbar-content`,children:[(0,b.jsxs)(`a`,{href:`/`,className:`logo-link`,onClick:e=>o(`home`,e),children:[(0,b.jsx)(`img`,{src:`/inline_logo.png`,alt:`baqar.dev`,className:`logo-image`}),(0,b.jsx)(`span`,{className:`logo-cursor`})]}),(0,b.jsx)(`div`,{className:`nav-links font-mono`,children:[{id:`home`,label:`home`,number:`01`},{id:`expertise`,label:`expertise`,number:`02`},{id:`work`,label:`work`,number:`03`},{id:`experience`,label:`experience`,number:`04`},{id:`blog`,label:`blog`,number:`05`},{id:`contact`,label:`contact`,number:`06`},{id:`roadmap`,label:`roadmap`,number:`07`}].map(i=>(0,b.jsxs)(`a`,{href:i.id===`roadmap`?`/roadmap`:`#${i.id}`,target:i.id===`roadmap`?`_blank`:void 0,rel:i.id===`roadmap`?`noopener noreferrer`:void 0,className:`nav-item ${i.id===`blog`?e===`blog`?`active-link`:``:e===`home`&&n===i.id?`active-link`:``}`,onClick:e=>{i.id===`blog`?(e.preventDefault(),t(`blog`),window.scrollTo({top:0,behavior:`smooth`}),r(`blog`)):i.id===`roadmap`||o(i.id,e)},children:[(0,b.jsx)(`span`,{className:`nav-number`,children:i.number}),(0,b.jsxs)(`span`,{className:`nav-label`,children:[`// `,i.label]})]},i.id))})]}),(0,b.jsx)(`style`,{children:`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 0.3s ease, border-color 0.3s ease, border-bottom-color 0.3s ease, backdrop-filter 0.3s ease;
          pointer-events: none;
        }
        .navbar-container.navbar-scrolled {
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(12px);
          border-bottom-color: rgba(102, 217, 237, 0.08);
          pointer-events: auto;
        }
        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          pointer-events: auto;
          transition: padding 0.3s ease;
        }
        .navbar-container.navbar-scrolled .navbar-content {
          padding: 0.85rem 2rem;
        }
        .logo-link {
          display: flex;
          align-items: center;
          height: 100%;
          text-decoration: none;
        }
        .logo-image {
          height: 38px;
          width: auto;
          display: block;
          transition: var(--transition-smooth);
        }
        .navbar-container.navbar-scrolled .logo-image {
          height: 32px;
        }
        .logo-cursor {
          width: 2px;
          height: 22px;
          background-color: var(--accent-color);
          margin-left: 0.45rem;
          display: inline-block;
          animation: logo-cursor-blink 1.1s infinite step-end;
          box-shadow: 0 0 6px var(--accent-color);
          transition: var(--transition-smooth);
        }
        .navbar-container.navbar-scrolled .logo-cursor {
          height: 18px;
        }
        @keyframes logo-cursor-blink {
          from, to {
            background-color: transparent;
            box-shadow: none;
          }
          50% {
            background-color: var(--accent-color);
            box-shadow: 0 0 6px var(--accent-color);
          }
        }
        .nav-links {
          display: flex;
          gap: 2.2rem;
          align-items: center;
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0.5rem 1.75rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease, backdrop-filter 0.3s ease;
        }
        .navbar-container.navbar-scrolled .nav-links {
          background: transparent;
          backdrop-filter: none;
          border-color: transparent;
          box-shadow: none;
          padding: 0;
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: rgba(255, 255, 255, 0.45);
          padding: 0.25rem 0;
          transition: color 0.25s ease, text-shadow 0.25s ease;
        }
        .nav-number {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: 0.15rem;
          font-weight: 500;
          transition: color 0.25s ease;
          opacity: 0.8;
        }
        .nav-item:hover, .nav-item.active-link {
          color: var(--accent-color);
          text-shadow: 0 0 8px var(--accent-glow);
        }
        .nav-item:hover .nav-number, .nav-item.active-link .nav-number {
          color: var(--accent-color);
          opacity: 1;
        }
        .nav-label {
          font-size: 1.05rem;
          letter-spacing: -0.05em;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `})]})},ee=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),S=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),C=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),te=e=>{let t=C(e);return t.charAt(0).toUpperCase()+t.slice(1)},ne={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},re=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},w=(0,_.createContext)({}),T=()=>(0,_.useContext)(w),ie=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=T()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...ne,width:t??l??ne.width,height:t??l??ne.height,stroke:e??f,strokeWidth:m,className:ee(`lucide`,p,i),...!a&&!re(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),E=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(ie,{ref:i,iconNode:t,className:ee(`lucide-${S(te(e))}`,`lucide-${e}`,n),...r}));return n.displayName=te(e),n},ae=E(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),oe=E(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),se=E(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),ce=E(`brain-circuit`,[[`path`,{d:`M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`,key:`l5xja`}],[`path`,{d:`M9 13a4.5 4.5 0 0 0 3-4`,key:`10igwf`}],[`path`,{d:`M6.003 5.125A3 3 0 0 0 6.401 6.5`,key:`105sqy`}],[`path`,{d:`M3.477 10.896a4 4 0 0 1 .585-.396`,key:`ql3yin`}],[`path`,{d:`M6 18a4 4 0 0 1-1.967-.516`,key:`2e4loj`}],[`path`,{d:`M12 13h4`,key:`1ku699`}],[`path`,{d:`M12 18h6a2 2 0 0 1 2 2v1`,key:`105ag5`}],[`path`,{d:`M12 8h8`,key:`1lhi5i`}],[`path`,{d:`M16 8V5a2 2 0 0 1 2-2`,key:`u6izg6`}],[`circle`,{cx:`16`,cy:`13`,r:`.5`,key:`ry7gng`}],[`circle`,{cx:`18`,cy:`3`,r:`.5`,key:`1aiba7`}],[`circle`,{cx:`20`,cy:`21`,r:`.5`,key:`yhc1fs`}],[`circle`,{cx:`20`,cy:`8`,r:`.5`,key:`1e43v0`}]]),D=E(`briefcase`,[[`path`,{d:`M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`,key:`jecpp`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]),O=E(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),le=E(`chart-no-axes-column`,[[`path`,{d:`M5 21v-6`,key:`1hz6c0`}],[`path`,{d:`M12 21V3`,key:`1lcnhd`}],[`path`,{d:`M19 21V9`,key:`unv183`}]]),ue=E(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),de=E(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),fe=E(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),k=E(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),A=E(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),pe=E(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),me=E(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),he=E(`code`,[[`path`,{d:`m16 18 6-6-6-6`,key:`eg8j8`}],[`path`,{d:`m8 6-6 6 6 6`,key:`ppft3o`}]]),ge=E(`compass`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}]]),_e=E(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),ve=E(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),ye=E(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),be=E(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),xe=E(`folder`,[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]),Se=E(`link-2`,[[`path`,{d:`M9 17H7A5 5 0 0 1 7 7h2`,key:`8i5ue5`}],[`path`,{d:`M15 7h2a5 5 0 1 1 0 10h-2`,key:`1b9ql8`}],[`line`,{x1:`8`,x2:`16`,y1:`12`,y2:`12`,key:`1jonct`}]]),Ce=E(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),we=E(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),Te=E(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),Ee=E(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),De=E(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),Oe=E(`panels-top-left`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M9 21V9`,key:`1oto5p`}]]),ke=E(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Ae=E(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),je=E(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Me=E(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),Ne=E(`square-check-big`,[[`path`,{d:`M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,key:`2acyp4`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),Pe=E(`square-pen`,[[`path`,{d:`M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`,key:`1m0v6g`}],[`path`,{d:`M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z`,key:`ohrbg2`}]]),Fe=E(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),Ie=E(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),Le=E(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),Re=E(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),ze=E(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),Be=E(`wrench`,[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,key:`1ngwbx`}]]),Ve=E(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),He=[`javascript`,`typescript`,`react`,`nextjs`,`postgres`,`sqlserver`,`oracle`,`dotnet`,`csharp`,`docker`,`n8n`,`blazor`],Ue=e=>{switch(e){case`javascript`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:[(0,b.jsx)(`rect`,{width:`100`,height:`100`,fill:`#F7DF1E`,rx:`8`}),(0,b.jsx)(`path`,{d:`M63 73c0 7-4 10-10 10-6 0-10-3-11-8h7c1 3 2 4 4 4 2 0 3-1 3-3V38h7v35zm27-14c0 7-4 10-10 10-6 0-9-3-11-8h7c1 3 2 4 4 4 2 0 3-1 3-3V59c0-3-2-4-5-5l-4-1c-5-2-7-5-7-10 0-6 4-9 10-9s9 3 10 7h-7c0-2-1-3-3-3-2 0-3 1-3 3v2c0 2 2 4 5 5l4 1c5 1 8 4 8 10z`,fill:`#000000`})]});case`typescript`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:[(0,b.jsx)(`rect`,{width:`100`,height:`100`,fill:`#3178C6`,rx:`8`}),(0,b.jsx)(`path`,{d:`M43.7 38H25.3v6.5h6v28.8h6.8V44.5h6v-6.5zM67.3 52.4c-3.1-1.7-6.2-2.1-7.7-2.1-3 0-4.3 1.1-4.3 2.5s1.2 2.2 4.1 3c5.5 1.5 10.3 3.6 10.3 9.4 0 6.6-5.8 8.8-11.8 8.8-6.9 0-12-2.9-12-7.9h6.9c.1 2.3 2.9 3.6 5.2 3.6 2.8 0 4.7-1.1 4.7-2.9s-1.8-2.2-4.5-2.9c-5.8-1.5-10-3.6-10-9 0-5.8 4.9-8.4 11-8.4 5.6 0 10.1 2.1 10.1 6.5h-6.9v-.1z`,fill:`#FFFFFF`})]});case`react`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:[(0,b.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`16`,ry:`42`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`4.5`,transform:`rotate(30 50 50)`}),(0,b.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`16`,ry:`42`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`4.5`,transform:`rotate(90 50 50)`}),(0,b.jsx)(`ellipse`,{cx:`50`,cy:`50`,rx:`16`,ry:`42`,fill:`none`,stroke:`#61DAFB`,strokeWidth:`4.5`,transform:`rotate(150 50 50)`}),(0,b.jsx)(`circle`,{cx:`50`,cy:`50`,r:`7.5`,fill:`#61DAFB`})]});case`nextjs`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:[(0,b.jsx)(`circle`,{cx:`50`,cy:`50`,r:`46`,fill:`#000000`,stroke:`#333333`,strokeWidth:`2`}),(0,b.jsx)(`path`,{d:`M69.8 73.1L38.4 33.3H32.4v33.4h5.2V41.1l27 34.3c2.4-2.7 4.1-5.8 5.2-9.3zM62.6 33.3h5.2v24.2l-5.2-6.6V33.3z`,fill:`#FFFFFF`})]});case`postgres`:return(0,b.jsx)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:(0,b.jsx)(`path`,{d:`M50 15c-15.5 0-28 11.5-28 25.7 0 11.6 8.3 21.3 19.6 24.5C38.6 69.8 35.8 78 30 80c9.5-.5 16-6 19.5-12.7 13.5 1.5 22.5-7.5 22.5-26.6C72 26.5 62.1 15 50 15zm-9.3 29.8c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm19.6 0c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z`,fill:`#336791`})});case`sqlserver`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:[(0,b.jsx)(`path`,{d:`M50 15c-22.1 0-40 4.5-40 10v12.5c0 5.5 17.9 10 40 10s40-4.5 40-10V25c0-5.5-17.9-10-40-10z`,fill:`#E61C24`}),(0,b.jsx)(`path`,{d:`M10 42.5c0 5.5 17.9 10 40 10s40-4.5 40-10v12.5c0 5.5-17.9 10-40 10s-40-4.5-40-10V42.5z`,fill:`#A81016`}),(0,b.jsx)(`path`,{d:`M10 60c0 5.5 17.9 10 40 10s40-4.5 40-10v12.5c0 5.5-17.9 10-40 10s-40-4.5-40-10V60z`,fill:`#750B0E`,fillOpacity:`0.95`}),(0,b.jsx)(`ellipse`,{cx:`50`,cy:`25`,rx:`40`,ry:`10`,fill:`#FF4D52`}),(0,b.jsx)(`ellipse`,{cx:`50`,cy:`42.5`,rx:`40`,ry:`10`,fill:`none`,stroke:`#FF4D52`,strokeWidth:`2.5`}),(0,b.jsx)(`ellipse`,{cx:`50`,cy:`60`,rx:`40`,ry:`10`,fill:`none`,stroke:`#FF4D52`,strokeWidth:`2.5`})]});case`oracle`:return(0,b.jsx)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:(0,b.jsx)(`path`,{d:`M50 20C22.4 20 0 33.4 0 50s22.4 30 50 30 50-13.4 50-30-22.4-30-50-30zm0 46.2c-15.6 0-28.2-7.3-28.2-16.2S34.4 33.8 50 33.8s28.2 7.3 28.2 16.2-12.6 16.2-28.2 16.2z`,fill:`#F80000`})});case`dotnet`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:[(0,b.jsx)(`circle`,{cx:`50`,cy:`50`,r:`45`,fill:`#512BD4`}),(0,b.jsx)(`path`,{d:`M46.2 32h-6.8v36h6.8V32zm19.8 0h-5.2L49.5 52.8V32H44.3v36h5.2L60.8 47.2V68h5.2V32zm14.1 0H68v36h12.1v-5.2H73.2v-10.2h7.6V47.4h-7.6v-10.2h6.9V32zM32.8 62.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2-1.4-3.2-3.2-3.2z`,fill:`#FFFFFF`})]});case`csharp`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:[(0,b.jsx)(`polygon`,{points:`50,5 90,28 90,72 50,95 10,72 10,28`,fill:`#512BD4`}),(0,b.jsx)(`path`,{d:`M42 35c-8.3 0-14 5.7-14 15s5.7 15 14 15c4.8 0 8.5-2.2 10-5.3h-6c-1 1.7-2.3 2.3-4 2.3-4.5 0-7.2-3.2-7.2-9.5s2.7-9.5 7.2-9.5c1.7 0 3 .6 4 2.3h6c-1.5-3.1-5.2-5.3-10-5.3zm20.8 5v6.5h-5.5V50h5.5v5h-5.5v6.5h-5V55h-4.5v-5h4.5v-3.5h-4.5V40h4.5v-5.5h5V40h5.5zm-10.5 6.5v3.5h4.5v-3.5h-4.5z`,fill:`#FFFFFF`})]});case`docker`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:[(0,b.jsx)(`rect`,{x:`25`,y:`16`,width:`10`,height:`9`,fill:`#2496ED`,rx:`1`}),(0,b.jsx)(`rect`,{x:`37`,y:`16`,width:`10`,height:`9`,fill:`#2496ED`,rx:`1`}),(0,b.jsx)(`rect`,{x:`49`,y:`16`,width:`10`,height:`9`,fill:`#2496ED`,rx:`1`}),(0,b.jsx)(`rect`,{x:`31`,y:`27`,width:`10`,height:`9`,fill:`#2496ED`,rx:`1`}),(0,b.jsx)(`rect`,{x:`43`,y:`27`,width:`10`,height:`9`,fill:`#2496ED`,rx:`1`}),(0,b.jsx)(`rect`,{x:`55`,y:`27`,width:`10`,height:`9`,fill:`#2496ED`,rx:`1`}),(0,b.jsx)(`rect`,{x:`67`,y:`27`,width:`10`,height:`9`,fill:`#2496ED`,rx:`1`}),(0,b.jsx)(`rect`,{x:`37`,y:`38`,width:`10`,height:`9`,fill:`#2496ED`,rx:`1`}),(0,b.jsx)(`rect`,{x:`49`,y:`38`,width:`10`,height:`9`,fill:`#2496ED`,rx:`1`}),(0,b.jsx)(`rect`,{x:`61`,y:`38`,width:`10`,height:`9`,fill:`#2496ED`,rx:`1`}),(0,b.jsx)(`path`,{d:`M85 53c-1.3-4-5-6.8-9-6.8h-7.2c-1 .8-2.3 1.2-3.8 1.2H25c-8.3 0-15 6.7-15 15 0 2.2.5 4.3 1.4 6.2 3.1 6.5 9.8 10.8 17.6 10.8h30c14.3 0 26-11.7 26-26 0-1.8-.2-3.6-.6-5.4zM90 40c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z`,fill:`#2496ED`})]});case`n8n`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:[(0,b.jsx)(`circle`,{cx:`50`,cy:`50`,r:`46`,fill:`#F15A24`}),(0,b.jsx)(`circle`,{cx:`50`,cy:`50`,r:`14`,fill:`#FFFFFF`}),(0,b.jsx)(`circle`,{cx:`28`,cy:`28`,r:`10`,fill:`#FFFFFF`}),(0,b.jsx)(`circle`,{cx:`72`,cy:`28`,r:`10`,fill:`#FFFFFF`}),(0,b.jsx)(`circle`,{cx:`50`,cy:`72`,r:`10`,fill:`#FFFFFF`}),(0,b.jsx)(`line`,{x1:`35`,y1:`35`,x2:`43`,y2:`43`,stroke:`#FFFFFF`,strokeWidth:`4.5`,strokeLinecap:`round`}),(0,b.jsx)(`line`,{x1:`65`,y1:`35`,x2:`57`,y2:`43`,stroke:`#FFFFFF`,strokeWidth:`4.5`,strokeLinecap:`round`}),(0,b.jsx)(`line`,{x1:`50`,y1:`62`,x2:`50`,y2:`58`,stroke:`#FFFFFF`,strokeWidth:`4.5`,strokeLinecap:`round`})]});case`blazor`:return(0,b.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`100%`,height:`100%`},children:[(0,b.jsx)(`path`,{d:`M12,50 C12,29 29,12 50,12 C71,12 88,29 88,50 C88,71 71,88 50,88 C29,88 12,71 12,50 Z`,fill:`#512BD4`}),(0,b.jsx)(`path`,{d:`M50,22 C34.5,22 22,34.5 22,50 C22,65.5 34.5,78 50,78 C65.5,78 78,65.5 78,50 C78,34.5 65.5,22 50,22 Z M50,68 C40.1,68 32,59.9 32,50 C32,40.1 40.1,32 50,32 C59.9,32 68,40.1 68,50 C68,59.9 59.9,68 50,68 Z`,fill:`#FFFFFF`}),(0,b.jsx)(`path`,{d:`M38,50 C38,43.4 43.4,38 50,38 C56.6,38 62,43.4 62,50 C62,56.6 56.6,62 50,62 C43.4,62 38,56.6 38,50 Z`,fill:`#8B4DFF`})]});default:return null}},We=e=>{let t=Ue(e);return t?(0,b.jsx)(`div`,{className:`extruded-logo-container`,children:(0,b.jsx)(`div`,{className:`logo-layer`,style:{transform:`translateZ(1px)`},children:t})}):null},j=({setActiveView:e})=>{let[t]=(0,_.useState)(()=>[...He].sort(()=>.5-Math.random()).slice(0,5)),[n]=(0,_.useState)(()=>{let e=[],t=(e,t)=>e<44&&t>=32&&t<=78,n=(e,t)=>e>=48&&e<=84&&t>=32&&t<=78,r=(t,n)=>{for(let r of e){let e=Math.abs(r.left-t),i=Math.abs(r.top-n);if(e<16&&i<16)return!0}return!1};for(let i=0;i<5;i++){let a=0,o=0,s=0,c=!1;for(;!c&&s<400;)s++,a=Math.random()*88+6,o=Math.random()*76+14,!t(a,o)&&!n(a,o)&&!r(a,o)&&(c=!0);c?e.push({top:parseFloat(o.toFixed(1)),left:parseFloat(a.toFixed(1))}):e.push([{top:20,left:15},{top:18,left:50},{top:22,left:82},{top:52,left:88},{top:82,left:30}][i])}return{cube1:{top:`${e[0].top}%`,left:`${e[0].left}%`},cube2:{top:`${e[1].top}%`,left:`${e[1].left}%`},cube3:{top:`${e[2].top}%`,left:`${e[2].left}%`},cube4:{top:`${e[3].top}%`,left:`${e[3].left}%`},cube5:{top:`${e[4].top}%`,left:`${e[4].left}%`}}}),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)([`System initialization successful.`,`Type "help" to see available commands or click the shortcut buttons below.`,``]),s=(0,_.useRef)(null),c={help:[`Available commands:`,`  skills      - Show list of core technical skills`,`  experience  - Outline current professional roles`,`  ai          - Display my agentic AI / RAG focus`,`  contact     - Print my email & github handle`,`  admin       - Open the administrator control panel`,`  clear       - Clear the terminal console screen`],skills:[`Technical Stack:`,`  • Languages   : C#, .NET 10, PL/SQL, SQL Server, Modern JavaScript/TypeScript`,`  • Enterprise  : PeopleSoft Integration, Meditech, NHIF/Jubilee API, Financial/ERP`,`  • AI & Flows  : Agentic AI, RAG Systems, n8n Automation, Hermes Agent`,`  • Infra/Web   : Docker, REST APIs, Git, Blazor, React, WinForms`],experience:[`Professional History:`,`  • Program Analyst @ Aga Khan Health Services, Tanzania (2024 - Present)`,`  • Consulting Software Engineer @ Universal Motors, UAE (2023 - 2024)`,`  • Software Engineer & App Developer @ NICVD, Pakistan (2018 - 2023)`],ai:[`AI & Agentic Focus:`,`  Currently building intelligent agents and automated pipelines:`,`  - Implementing Retrieval-Augmented Generation (RAG) models.`,`  - Designing scalable orchestration workflows in n8n and Hermes.`,`  - Automating hospital & enterprise operations using LLMs.`],contact:[`Contact Details:`,`  Email  : baqar.naqvi2@gmail.com`,`  GitHub : github.com/poseidonrage`,`  Web    : baqar.dev`]},l=t=>{let n=t.trim().toLowerCase(),r=[];if(n===``)r=[``];else if(n===`clear`){o([]);return}else if(n===`admin`){r=[`Redirecting to admin console...`],o(e=>[...e,`guest@baqar.dev:~$ ${t}`,...r,``]),setTimeout(()=>{e(`admin`)},500);return}else if(c[n]){let e=c[n];r=Array.isArray(e)?e:[e]}else r=[`Command not found: "${t}". Type "help" for a list of commands.`];o(e=>[...e,`guest@baqar.dev:~$ ${t}`,...r,``])};return(0,_.useEffect)(()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},[a]),(0,b.jsxs)(`section`,{className:`hero-section`,id:`hero`,children:[(0,b.jsxs)(`div`,{className:`hero-bg-effects`,children:[(0,b.jsx)(`div`,{className:`light-blob blob-1`}),(0,b.jsx)(`div`,{className:`light-blob blob-2`}),(0,b.jsx)(`div`,{className:`light-blob blob-3`}),(0,b.jsx)(`div`,{className:`particle p1`}),(0,b.jsx)(`div`,{className:`particle p2`}),(0,b.jsx)(`div`,{className:`particle p3`}),(0,b.jsx)(`div`,{className:`particle p4`}),(0,b.jsx)(`div`,{className:`particle p5`}),(0,b.jsx)(`div`,{className:`particle p6`}),(0,b.jsx)(`div`,{className:`particle p7`}),(0,b.jsx)(`div`,{className:`particle p8`}),(0,b.jsx)(`div`,{className:`cube-wrapper ref-cube-1`,style:{top:n.cube1.top,left:n.cube1.left,right:`auto`},children:(0,b.jsxs)(`div`,{className:`cube`,children:[(0,b.jsx)(`div`,{className:`face front`}),(0,b.jsx)(`div`,{className:`face back`}),(0,b.jsx)(`div`,{className:`face right`}),(0,b.jsx)(`div`,{className:`face left`}),(0,b.jsx)(`div`,{className:`face top`}),(0,b.jsx)(`div`,{className:`face bottom`}),(0,b.jsx)(`div`,{className:`cube-core`}),(0,b.jsx)(`div`,{className:`cube-core-logo`,children:We(t[0])})]})}),(0,b.jsx)(`div`,{className:`cube-wrapper ref-cube-2`,style:{top:n.cube2.top,left:n.cube2.left,right:`auto`},children:(0,b.jsxs)(`div`,{className:`cube`,children:[(0,b.jsxs)(`div`,{className:`face front`,children:[(0,b.jsx)(`span`,{className:`face-inner-ring`}),(0,b.jsx)(`span`,{className:`face-scanline`})]}),(0,b.jsx)(`div`,{className:`face back`}),(0,b.jsx)(`div`,{className:`face right`}),(0,b.jsx)(`div`,{className:`face left`}),(0,b.jsx)(`div`,{className:`face top`}),(0,b.jsx)(`div`,{className:`face bottom`}),(0,b.jsx)(`div`,{className:`cube-core core-cyan`}),(0,b.jsx)(`div`,{className:`cube-core-logo`,children:We(t[1])})]})}),(0,b.jsx)(`div`,{className:`cube-wrapper ref-cube-3`,style:{top:n.cube3.top,left:n.cube3.left,right:`auto`},children:(0,b.jsxs)(`div`,{className:`cube`,children:[(0,b.jsx)(`div`,{className:`face front wireframe`}),(0,b.jsx)(`div`,{className:`face back wireframe`}),(0,b.jsx)(`div`,{className:`face right wireframe`}),(0,b.jsx)(`div`,{className:`face left wireframe`}),(0,b.jsx)(`div`,{className:`face top wireframe`}),(0,b.jsx)(`div`,{className:`face bottom wireframe`}),(0,b.jsx)(`div`,{className:`cube-core-logo`,children:We(t[2])})]})}),(0,b.jsx)(`div`,{className:`cube-wrapper ref-cube-4`,style:{top:n.cube4.top,left:n.cube4.left,bottom:`auto`},children:(0,b.jsxs)(`div`,{className:`cube`,children:[(0,b.jsx)(`div`,{className:`face front neon-face`}),(0,b.jsx)(`div`,{className:`face back neon-face`}),(0,b.jsx)(`div`,{className:`face right neon-face`}),(0,b.jsx)(`div`,{className:`face left neon-face`}),(0,b.jsx)(`div`,{className:`face top neon-face`}),(0,b.jsx)(`div`,{className:`face bottom neon-face`}),(0,b.jsx)(`div`,{className:`cube-core core-warm`}),(0,b.jsx)(`div`,{className:`cube-core-logo`,children:We(t[3])})]})}),(0,b.jsx)(`div`,{className:`cube-wrapper ref-cube-5`,style:{top:n.cube5.top,left:n.cube5.left,right:`auto`,bottom:`auto`},children:(0,b.jsxs)(`div`,{className:`cube`,children:[(0,b.jsx)(`div`,{className:`face front crystal`}),(0,b.jsx)(`div`,{className:`face back crystal`}),(0,b.jsx)(`div`,{className:`face right crystal`}),(0,b.jsx)(`div`,{className:`face left crystal`}),(0,b.jsx)(`div`,{className:`face top crystal`}),(0,b.jsx)(`div`,{className:`face bottom crystal`}),(0,b.jsx)(`div`,{className:`cube-core`}),(0,b.jsx)(`div`,{className:`cube-core-logo`,children:We(t[4])})]})})]}),(0,b.jsxs)(`div`,{className:`container hero-container`,children:[(0,b.jsxs)(`div`,{className:`hero-text-content`,children:[(0,b.jsxs)(`div`,{className:`light-orb-wrapper`,children:[(0,b.jsx)(`div`,{className:`light-orb`}),(0,b.jsx)(`div`,{className:`light-orb-halo`}),(0,b.jsx)(`div`,{className:`orbital-ring orbital-1`}),(0,b.jsx)(`div`,{className:`orbital-ring orbital-2`})]}),(0,b.jsx)(`span`,{className:`hero-welcome font-mono`,children:`// hello world, meet`}),(0,b.jsxs)(`h1`,{className:`hero-title`,children:[`Baqar Hussain `,(0,b.jsx)(`span`,{className:`chonky-underline`,children:`Naqvi`})]}),(0,b.jsx)(`h2`,{className:`hero-subtitle`,children:`Program Analyst & Integration Specialist`}),(0,b.jsx)(`p`,{className:`hero-description`,children:`With 8+ years of experience in enterprise development, I build robust integrations (.NET 10, Oracle, PeopleSoft) and orchestrate AI systems using RAG, agents, and n8n workflows.`}),(0,b.jsxs)(`div`,{className:`hero-actions`,children:[(0,b.jsxs)(`a`,{href:`#work`,className:`btn-primary`,children:[`View My Work `,(0,b.jsx)(fe,{size:16})]}),(0,b.jsx)(`a`,{href:`#contact`,className:`btn-secondary`,children:`Get in Touch`})]})]}),(0,b.jsxs)(`div`,{className:`hero-terminal-wrapper`,children:[(0,b.jsxs)(`div`,{className:`terminal-header`,children:[(0,b.jsxs)(`div`,{className:`terminal-dots`,children:[(0,b.jsx)(`span`,{className:`dot dot-red`}),(0,b.jsx)(`span`,{className:`dot dot-yellow`}),(0,b.jsx)(`span`,{className:`dot dot-green`})]}),(0,b.jsxs)(`div`,{className:`terminal-title font-mono`,children:[(0,b.jsx)(Ie,{size:14}),` terminal.sh`]}),(0,b.jsx)(`div`,{className:`terminal-actions`,children:(0,b.jsx)(`button`,{onClick:()=>o([`System reset completed.`,`Type "help" for command listing.`]),title:`Reset Terminal`,className:`terminal-btn`,children:(0,b.jsx)(Ae,{size:12})})})]}),(0,b.jsxs)(`div`,{ref:s,className:`terminal-body font-mono`,children:[(0,b.jsx)(`div`,{className:`terminal-history`,children:a.map((e,t)=>(0,b.jsx)(`div`,{className:`terminal-line ${e.startsWith(`guest@`)?`user-cmd`:``}`,children:e},t))}),(0,b.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),r.trim()&&(l(r),i(``))},className:`terminal-input-row`,children:[(0,b.jsx)(`span`,{className:`terminal-prompt`,children:`guest@baqar.dev:~$`}),(0,b.jsx)(`input`,{type:`text`,value:r,onChange:e=>i(e.target.value),className:`terminal-input`,autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`off`,spellCheck:`false`,placeholder:`try 'skills'...`}),(0,b.jsx)(`button`,{type:`submit`,className:`hidden-submit`,"aria-hidden":`true`})]})]}),(0,b.jsxs)(`div`,{className:`terminal-shortcuts font-mono`,children:[(0,b.jsx)(`span`,{children:`Shortcuts:`}),(0,b.jsx)(`button`,{onClick:()=>l(`skills`),children:`skills`}),(0,b.jsx)(`button`,{onClick:()=>l(`experience`),children:`experience`}),(0,b.jsx)(`button`,{onClick:()=>l(`ai`),children:`agentic-ai`}),(0,b.jsx)(`button`,{onClick:()=>l(`contact`),children:`contact`})]})]})]}),(0,b.jsx)(`style`,{children:`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 8rem;
          padding-bottom: 4rem;
          position: relative;
          z-index: 1;
        }
        
        .hero-bg-effects {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          overflow: hidden;
          z-index: -1;
          pointer-events: none;
        }

        /* ═══════════════ ATMOSPHERIC BLOBS ═══════════════ */
        .light-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.7;
          pointer-events: none;
        }
        .blob-1 {
          width: 600px; height: 600px;
          top: 5%; right: 15%;
          background: radial-gradient(circle, rgba(var(--accent-rgb), 0.06) 0%, transparent 70%);
        }
        .blob-2 {
          width: 450px; height: 450px;
          bottom: 15%; left: 5%;
          background: radial-gradient(circle, rgba(var(--accent-rgb), 0.04) 0%, transparent 70%);
        }
        .blob-3 {
          width: 350px; height: 350px;
          top: 40%; left: 45%;
          background: radial-gradient(circle, rgba(255, 140, 50, 0.06) 0%, transparent 70%);
        }

        /* ═══════════════ GLOWING ORB + ORBITAL RINGS ═══════════════ */
        .light-orb-wrapper {
          position: absolute;
          top: 95px; left: -50px;
          transform: translate(-50%, -50%);
          z-index: -1;
          pointer-events: none;
        }
        .light-orb {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff 10%, #ffd066 35%, #ff7300 70%, #ff3c00 100%);
          box-shadow: 0 0 25px #ff7300, 0 0 50px rgba(255,115,0,0.6), 0 0 100px rgba(var(--accent-rgb),0.3);
          animation: orb-pulse 4s infinite alternate ease-in-out;
        }
        .light-orb-halo {
          position: absolute; top: 50%; left: 50%;
          width: 280px; height: 280px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,160,50,0.12) 0%, rgba(var(--accent-rgb),0.04) 40%, transparent 75%);
          filter: blur(12px);
        }
        @keyframes orb-pulse {
          0% { transform: scale(0.95); opacity: 0.9; }
          100% { transform: scale(1.08); opacity: 1; box-shadow: 0 0 35px #ff7300, 0 0 70px rgba(255,115,0,0.7), 0 0 130px rgba(var(--accent-rgb),0.4); }
        }

        /* Orbital rings */
        .orbital-ring {
          position: absolute; top: 50%; left: 50%;
          border-radius: 50%;
          border: 1px solid rgba(var(--accent-rgb), 0.18);
          transform-origin: center;
        }
        .orbital-1 {
          width: 120px; height: 120px;
          margin-top: -60px; margin-left: -60px;
          animation: orbit-spin-1 12s linear infinite;
        }
        .orbital-2 {
          width: 180px; height: 180px;
          margin-top: -90px; margin-left: -90px;
          border-style: dashed;
          border-color: rgba(var(--accent-rgb), 0.1);
          animation: orbit-spin-2 20s linear infinite;
        }
        @keyframes orbit-spin-1 {
          0% { transform: rotateX(70deg) rotateZ(0deg); }
          100% { transform: rotateX(70deg) rotateZ(360deg); }
        }
        @keyframes orbit-spin-2 {
          0% { transform: rotateX(55deg) rotateY(30deg) rotateZ(0deg); }
          100% { transform: rotateX(55deg) rotateY(30deg) rotateZ(-360deg); }
        }

        /* ═══════════════ FLOATING PARTICLES ═══════════════ */
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(var(--accent-rgb), 0.6);
          pointer-events: none;
          animation: particle-float linear infinite;
        }
        .p1 { width: 3px; height: 3px; top: 18%; left: 30%; animation-duration: 18s; animation-delay: 0s; }
        .p2 { width: 2px; height: 2px; top: 45%; left: 65%; animation-duration: 22s; animation-delay: -3s; }
        .p3 { width: 4px; height: 4px; top: 70%; left: 40%; animation-duration: 15s; animation-delay: -7s; background: rgba(255,140,50,0.5); }
        .p4 { width: 2px; height: 2px; top: 25%; left: 75%; animation-duration: 20s; animation-delay: -2s; }
        .p5 { width: 3px; height: 3px; top: 60%; left: 20%; animation-duration: 25s; animation-delay: -5s; }
        .p6 { width: 2px; height: 2px; top: 35%; left: 55%; animation-duration: 17s; animation-delay: -10s; background: rgba(255,140,50,0.4); }
        .p7 { width: 3px; height: 3px; top: 80%; left: 70%; animation-duration: 19s; animation-delay: -8s; }
        .p8 { width: 2px; height: 2px; top: 10%; left: 50%; animation-duration: 23s; animation-delay: -12s; }
        @keyframes particle-float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-60px) translateX(30px); opacity: 0.7; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-120px) translateX(-20px); opacity: 0; }
        }

        /* ═══════════════ CUBE ENGINE ═══════════════ */
        .cube-wrapper {
          position: absolute;
          perspective: 1000px;
          z-index: 0;
          transform-style: preserve-3d;
        }
        .cube {
          --sz: 100px;
          --hz: calc(var(--sz) / 2);
          width: var(--sz); height: var(--sz);
          transform-style: preserve-3d;
          position: relative;
        }
        .cube .face {
          position: absolute;
          width: var(--sz); height: var(--sz);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        .cube .face.front  { transform: rotateY(0deg)   translateZ(var(--hz)); }
        .cube .face.back   { transform: rotateY(180deg) translateZ(var(--hz)); }
        .cube .face.right  { transform: rotateY(90deg)  translateZ(var(--hz)); }
        .cube .face.left   { transform: rotateY(-90deg) translateZ(var(--hz)); }
        .cube .face.top    { transform: rotateX(90deg)  translateZ(var(--hz)); }
        .cube .face.bottom { transform: rotateX(-90deg) translateZ(var(--hz)); }

        /* ═══════ DEFAULT GLASS FACE STYLE ═══════ */
        .cube .face:not(.wireframe):not(.neon-face):not(.crystal) {
          background: linear-gradient(135deg, rgba(21,32,48,0.15) 0%, rgba(10,16,24,0.1) 100%);
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: inset 0 0 20px rgba(var(--accent-rgb), 0.08), 0 0 6px rgba(0,0,0,0.4);
        }
        .cube .face.front:not(.wireframe):not(.neon-face):not(.crystal) {
          background: radial-gradient(circle at 70% 30%, rgba(255,115,0,0.15) 0%, rgba(21,32,48,0.15) 75%);
        }
        .cube .face.top:not(.wireframe):not(.neon-face):not(.crystal) {
          background: linear-gradient(135deg, rgba(36,53,74,0.15) 0%, rgba(22,34,48,0.15) 80%);
          border-top: 1px solid rgba(255,255,255,0.12);
        }

        /* ═══════ WIREFRAME FACE (Cube 3) ═══════ */
        .face.wireframe {
          background: transparent !important;
          border: 1px solid rgba(var(--accent-rgb), 0.25) !important;
          box-shadow: 
            inset 0 0 12px rgba(var(--accent-rgb), 0.05),
            0 0 4px rgba(var(--accent-rgb), 0.1) !important;
        }

        /* ═══════ NEON-EDGE FACE (Cube 4) ═══════ */
        .face.neon-face {
          background: rgba(10, 16, 24, 0.12) !important;
          border: 1px solid rgba(var(--accent-rgb), 0.5) !important;
          box-shadow: 
            inset 0 0 25px rgba(var(--accent-rgb), 0.15),
            0 0 12px rgba(var(--accent-rgb), 0.25),
            0 0 30px rgba(var(--accent-rgb), 0.08) !important;
        }

        /* ═══════ CRYSTAL FACE (Cube 5) ═══════ */
        .face.crystal {
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.03) 0%, rgba(15,22,35,0.15) 50%, rgba(var(--accent-rgb), 0.02) 100%) !important;
          border: 1px solid rgba(var(--accent-rgb), 0.3) !important;
          box-shadow: inset 0 0 15px rgba(var(--accent-rgb), 0.1) !important;
        }

        /* ═══════ SCAN LINE EFFECT (Cube 2) ═══════ */
        .face-scanline {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(var(--accent-rgb), 0.04) 3px,
            rgba(var(--accent-rgb), 0.04) 4px
          );
          pointer-events: none;
        }
        .face-inner-ring {
          position: absolute;
          top: 50%; left: 50%;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(var(--accent-rgb), 0.5);
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.25), inset 0 0 10px rgba(var(--accent-rgb), 0.1);
          animation: ring-pulse 3s infinite alternate ease-in-out;
        }
        @keyframes ring-pulse {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        }

        /* ═══════ GLOWING CORES ═══════ */
        .cube-core {
          position: absolute;
          top: 50%; left: 50%;
          width: calc(var(--sz) * 0.32);
          height: calc(var(--sz) * 0.32);
          transform: translate3d(-50%, -50%, 0);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(var(--accent-rgb), 0.9) 0%, rgba(var(--accent-rgb), 0.3) 45%, transparent 75%);
          filter: blur(4px);
          pointer-events: none;
          z-index: 1;
          animation: core-pulse 3s infinite alternate ease-in-out;
        }
        .core-cyan {
          background: radial-gradient(circle, rgba(var(--accent-rgb), 1) 0%, rgba(var(--accent-rgb), 0.5) 35%, transparent 70%);
          filter: blur(3px);
        }
        .core-warm {
          background: radial-gradient(circle, rgba(255,180,80,0.9) 0%, rgba(255,120,40,0.4) 40%, transparent 75%);
          filter: blur(5px);
        }
        @keyframes core-pulse {
          0% { transform: translate3d(-50%,-50%,0) scale(0.8); opacity: 0.5; }
          100% { transform: translate3d(-50%,-50%,0) scale(1.2); opacity: 1; }
        }

        .extruded-logo-container {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          backface-visibility: visible;
          pointer-events: none;
        }

        .cube-core-logo {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate3d(-50%, -50%, 1px);
          width: calc(var(--sz) * 2 / 3);
          height: calc(var(--sz) * 2 / 3);
          pointer-events: none;
          z-index: 2;
          transform-style: preserve-3d;
          animation: logo-rotate-clockwise 25s linear infinite;
          filter: drop-shadow(0 0 6px var(--accent-color));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes logo-rotate-clockwise {
          0% {
            transform: translate3d(-50%, -50%, 1px) rotate(0deg);
          }
          100% {
            transform: translate3d(-50%, -50%, 1px) rotate(360deg);
          }
        }

        /* ═══════════════ 5 CUBE CONFIGURATIONS ═══════════════ */

        /* 1. HERO CUBE — Large, prominent, glass with warm light reflection */
        .ref-cube-1 {
          top: 15%; right: 28%;
        }
        .ref-cube-1 .cube {
          --sz: 140px;
          transform: rotateX(22deg) rotateY(-35deg) rotateZ(8deg);
          animation: drift-1 18s infinite ease-in-out;
        }

        /* 2. HOLOGRAM CUBE — Medium, left of orb, scan-lines + ring */
        .ref-cube-2 {
          top: 10%; right: 52%;
        }
        .ref-cube-2 .cube {
          --sz: 105px;
          transform: rotateX(12deg) rotateY(40deg) rotateZ(5deg);
          animation: drift-2 22s infinite ease-in-out;
        }

        /* 3. WIREFRAME CUBE — Small, top-right, edges only */
        .ref-cube-3 {
          top: 6%; right: 12%;
        }
        .ref-cube-3 .cube {
          --sz: 65px;
          transform: rotateX(15deg) rotateY(-25deg) rotateZ(-8deg);
          animation: drift-3 14s infinite ease-in-out;
        }

        /* 4. NEON-EDGE CUBE — Bottom-left, glowing edges */
        .ref-cube-4 {
          bottom: 22%; left: 8%;
        }
        .ref-cube-4 .cube {
          --sz: 85px;
          transform: rotateX(-18deg) rotateY(35deg) rotateZ(-12deg);
          animation: drift-4 20s infinite ease-in-out;
        }

        /* 5. MICRO CRYSTAL — Bottom-right, tiny, fast */
        .ref-cube-5 {
          bottom: 18%; right: 18%;
        }
        .ref-cube-5 .cube {
          --sz: 55px;
          transform: rotateX(30deg) rotateY(-40deg) rotateZ(25deg);
          animation: drift-5 10s infinite ease-in-out;
        }

        /* ═══════ DRIFT ANIMATIONS — smooth multi-axis ═══════ */
        @keyframes drift-1 {
          0%,100% { transform: translateY(0)    rotateX(22deg)  rotateY(-35deg) rotateZ(8deg); }
          25%     { transform: translateY(-12px) rotateX(15deg)  rotateY(-55deg) rotateZ(12deg); }
          50%     { transform: translateY(-20px) rotateX(28deg)  rotateY(-75deg) rotateZ(5deg); }
          75%     { transform: translateY(-8px)  rotateX(18deg)  rotateY(-50deg) rotateZ(15deg); }
        }
        @keyframes drift-2 {
          0%,100% { transform: translateY(0)    rotateX(12deg)  rotateY(40deg)  rotateZ(5deg); }
          25%     { transform: translateY(-8px)  rotateX(25deg)  rotateY(20deg)  rotateZ(15deg); }
          50%     { transform: translateY(-15px) rotateX(8deg)   rotateY(60deg)  rotateZ(-5deg); }
          75%     { transform: translateY(-5px)  rotateX(18deg)  rotateY(35deg)  rotateZ(10deg); }
        }
        @keyframes drift-3 {
          0%,100% { transform: translateY(0)    rotateX(15deg)  rotateY(-25deg) rotateZ(-8deg); }
          33%     { transform: translateY(-10px) rotateX(35deg)  rotateY(-50deg) rotateZ(10deg); }
          66%     { transform: translateY(-6px)  rotateX(5deg)   rotateY(-10deg) rotateZ(-15deg); }
        }
        @keyframes drift-4 {
          0%,100% { transform: translateY(0)    rotateX(-18deg) rotateY(35deg)  rotateZ(-12deg); }
          30%     { transform: translateY(-14px) rotateX(-5deg)  rotateY(60deg)  rotateZ(5deg); }
          60%     { transform: translateY(-8px)  rotateX(-25deg) rotateY(20deg)  rotateZ(-20deg); }
        }
        @keyframes drift-5 {
          0%,100% { transform: translateY(0)    rotateX(30deg)  rotateY(-40deg) rotateZ(25deg); }
          25%     { transform: translateY(-6px)  rotateX(45deg)  rotateY(-60deg) rotateZ(10deg); }
          50%     { transform: translateY(-12px) rotateX(20deg)  rotateY(-80deg) rotateZ(35deg); }
          75%     { transform: translateY(-4px)  rotateX(40deg)  rotateY(-50deg) rotateZ(20deg); }
        }

        /* ═══════════════ HERO LAYOUT ═══════════════ */
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }
        .hero-text-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 10;
          position: relative;
        }
        .hero-welcome {
          color: var(--accent-color);
          font-size: 1.05rem;
          margin-bottom: 0.75rem;
          display: block;
        }
        .hero-title {
          font-size: 3.75rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          text-shadow: 2px 2px 10px rgba(255, 115, 0, 0.3), 8px 8px 30px rgba(255, 115, 0, 0.15);
        }
        .hero-title span::after {
          height: 0.2em !important;
          bottom: 0.1em !important;
        }
        .hero-subtitle {
          font-size: 1.75rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
          max-width: 540px;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        
        /* ═══════════════ TERMINAL ═══════════════ */
        .hero-terminal-wrapper {
          border: 1px solid var(--border-color);
          background: rgba(10, 14, 23, 0.85);
          backdrop-filter: blur(15px);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.8), 0 0 20px -3px var(--accent-glow);
          display: flex;
          flex-direction: column;
          height: 380px;
          transition: var(--transition-smooth);
          z-index: 10;
        }
        .hero-terminal-wrapper:hover {
          border-color: rgba(var(--accent-rgb), 0.3);
        }
        .terminal-header {
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
        }
        .terminal-dots { display: flex; gap: 0.4rem; }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-red { background: #ef4444; }
        .dot-yellow { background: #eab308; }
        .dot-green { background: #22c55e; }
        .terminal-title {
          font-size: 0.75rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .terminal-btn {
          background: transparent; border: none;
          color: var(--text-muted); cursor: pointer;
          transition: var(--transition-fast);
          display: flex; align-items: center; justify-content: center;
        }
        .terminal-btn:hover { color: var(--accent-color); }
        .terminal-body {
          flex: 1; padding: 1.25rem;
          overflow-y: auto; display: flex;
          flex-direction: column;
          font-size: 0.85rem; line-height: 1.5;
        }
        .terminal-history { flex: 1; }
        .terminal-line { color: var(--text-secondary); white-space: pre-wrap; }
        .terminal-line.user-cmd { color: var(--text-primary); font-weight: 500; }
        .terminal-input-row { display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem; }
        .terminal-prompt { color: var(--accent-color); }
        .terminal-input {
          flex: 1; background: transparent; border: none; outline: none;
          color: var(--text-primary); font-family: var(--font-mono); font-size: 0.85rem; padding: 0;
        }
        .hidden-submit { display: none; }
        .terminal-shortcuts {
          background: rgba(255,255,255,0.02);
          border-top: 1px solid var(--border-color);
          padding: 0.6rem 1rem; display: flex;
          align-items: center; gap: 0.6rem;
          font-size: 0.75rem; flex-wrap: wrap;
        }
        .terminal-shortcuts span { color: var(--text-muted); }
        .terminal-shortcuts button {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.2rem 0.5rem; border-radius: 4px;
          cursor: pointer; transition: var(--transition-fast);
        }
        .terminal-shortcuts button:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.05);
        }

        /* ═══════════════ RESPONSIVE ═══════════════ */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 4rem; text-align: center;
          }
          .hero-text-content { align-items: center; }
          .hero-description { max-width: 100%; }
          .hero-actions { justify-content: center; }
          .ref-cube-4 { display: none; }
        }
        @media (max-width: 600px) {
          .hero-title { font-size: 2.75rem; }
          .hero-subtitle { font-size: 1.35rem; }
          .hero-actions { flex-direction: column; width: 100%; }
          .hero-actions a { width: 100%; justify-content: center; }
          .cube-wrapper, .light-orb-wrapper, .particle { display: none; }
        }
      `})]})},Ge=()=>(0,b.jsxs)(`section`,{className:`expertise-section`,id:`expertise`,children:[(0,b.jsxs)(`div`,{className:`container`,children:[(0,b.jsxs)(`div`,{className:`section-title-wrapper`,children:[(0,b.jsx)(`span`,{className:`section-number`,children:`// 02`}),(0,b.jsx)(`h2`,{className:`section-title`,children:`My Expertise`})]}),(0,b.jsx)(`div`,{className:`grid-4`,children:[{icon:(0,b.jsx)(ve,{size:32}),num:`01`,title:`Software & API Engineering`,desc:`Expertise in C#, .NET 10 Core, REST APIs, Microservices, WinForms, and database-driven application architectures.`,tags:[`.NET 10`,`C#`,`SQL Server`,`APIs`],underlineClass:`cyan`},{icon:(0,b.jsx)(Se,{size:32}),num:`02`,title:`Enterprise Integration`,desc:`Specialized in middleware, PeopleSoft/Meditech workflows, financial systems, and claims processing automation (NHIF/Jubilee).`,tags:[`PeopleSoft`,`Meditech`,`Oracle 11g`,`NHIF/Jubilee`],underlineClass:`magenta`},{icon:(0,b.jsx)(ce,{size:32}),num:`03`,title:`Agentic AI & RAG`,desc:`Designing RAG architectures, orchestrating automation workflows in n8n, and building custom LLM agents (Hermes).`,tags:[`Agentic AI`,`RAG`,`n8n`,`Hermes Agent`],underlineClass:`orange`},{icon:(0,b.jsx)(Oe,{size:32}),num:`04`,title:`Frontend & Mobile UI`,desc:`Creating modern, high-performance web interfaces with React, Next.js, and interactive Blazor applications.`,tags:[`React`,`Next.js`,`Blazor Server`,`Tailwind`],underlineClass:`violet`}].map((e,t)=>(0,b.jsxs)(`div`,{className:`glass-card skill-card`,children:[(0,b.jsxs)(`div`,{className:`skill-card-header`,children:[(0,b.jsx)(`div`,{className:`skill-icon`,children:e.icon}),(0,b.jsx)(`span`,{className:`skill-num font-mono`,children:e.num})]}),(0,b.jsx)(`h3`,{className:`skill-title`,children:e.title}),(0,b.jsx)(`p`,{className:`skill-desc`,children:e.desc}),(0,b.jsx)(`div`,{className:`skill-tags font-mono`,children:e.tags.map((e,t)=>(0,b.jsx)(`span`,{className:`skill-tag`,children:e},t))})]},t))})]}),(0,b.jsx)(`style`,{children:`
        .expertise-section {
          position: relative;
        }
        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }
        .skill-card-header {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .skill-icon {
          color: var(--accent-color);
          filter: drop-shadow(0 0 5px var(--accent-glow));
          transition: var(--transition-smooth);
        }
        .skill-num {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .skill-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        .skill-desc {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.75rem;
        }
        .skill-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .skill-card:hover .skill-icon {
          transform: scale(1.1);
        }
      `})]}),Ke=e=>(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`24`,height:`24`,stroke:`currentColor`,strokeWidth:`2`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,b.jsx)(`path`,{d:`M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22`})}),qe=e=>e.includes(`Healthcare`)||e.includes(`AKHSmart`)||e.includes(`Payam`)?(0,b.jsxs)(`svg`,{viewBox:`0 0 400 160`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,b.jsx)(`defs`,{children:(0,b.jsxs)(`linearGradient`,{id:`hc-grad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,b.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(102, 217, 237, 0.03)`}),(0,b.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(102, 217, 237, 0.15)`})]})}),(0,b.jsx)(`rect`,{width:`400`,height:`160`,fill:`url(#hc-grad)`}),(0,b.jsxs)(`g`,{stroke:`rgba(102, 217, 237, 0.1)`,strokeWidth:`1`,children:[(0,b.jsx)(`line`,{x1:`0`,y1:`40`,x2:`400`,y2:`40`}),(0,b.jsx)(`line`,{x1:`0`,y1:`80`,x2:`400`,y2:`80`}),(0,b.jsx)(`line`,{x1:`0`,y1:`120`,x2:`400`,y2:`120`}),(0,b.jsx)(`line`,{x1:`100`,y1:`0`,x2:`100`,y2:`160`}),(0,b.jsx)(`line`,{x1:`200`,y1:`0`,x2:`200`,y2:`160`}),(0,b.jsx)(`line`,{x1:`300`,y1:`0`,x2:`300`,y2:`160`})]}),(0,b.jsx)(`path`,{d:`M 50,80 L 130,80 L 145,50 L 155,110 L 165,70 L 175,90 L 185,80 L 350,80`,stroke:`var(--accent-color)`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,filter:`drop-shadow(0 0 5px var(--accent-glow))`}),(0,b.jsx)(`path`,{d:`M 230,55 A 12,12 0 0,0 200,65 A 12,12 0 0,0 170,55 C 150,25 200,95 200,95 C 200,95 250,25 230,55 Z`,fill:`rgba(102, 217, 237, 0.05)`,stroke:`var(--accent-color)`,strokeWidth:`1.5`})]}):e.includes(`Motors`)||e.includes(`Enterprise`)||e.includes(`JDC`)?(0,b.jsxs)(`svg`,{viewBox:`0 0 400 160`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,b.jsx)(`defs`,{children:(0,b.jsxs)(`linearGradient`,{id:`ent-grad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,b.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(102, 217, 237, 0.03)`}),(0,b.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(102, 217, 237, 0.12)`})]})}),(0,b.jsx)(`rect`,{width:`400`,height:`160`,fill:`url(#ent-grad)`}),(0,b.jsxs)(`g`,{stroke:`rgba(102, 217, 237, 0.08)`,strokeWidth:`1`,children:[(0,b.jsx)(`circle`,{cx:`200`,cy:`80`,r:`50`,strokeDasharray:`5,5`}),(0,b.jsx)(`circle`,{cx:`200`,cy:`80`,r:`30`}),(0,b.jsx)(`line`,{x1:`200`,y1:`10`,x2:`200`,y2:`150`}),(0,b.jsx)(`line`,{x1:`130`,y1:`80`,x2:`270`,y2:`80`})]}),(0,b.jsx)(`rect`,{x:`70`,y:`90`,width:`14`,height:`40`,fill:`var(--accent-color)`,opacity:`0.6`}),(0,b.jsx)(`rect`,{x:`95`,y:`70`,width:`14`,height:`60`,fill:`var(--accent-color)`,opacity:`0.8`}),(0,b.jsx)(`rect`,{x:`120`,y:`50`,width:`14`,height:`80`,fill:`var(--accent-color)`}),(0,b.jsx)(`rect`,{x:`250`,y:`50`,width:`80`,height:`60`,rx:`4`,stroke:`var(--accent-color)`,strokeWidth:`1.5`,fill:`rgba(102,217,237,0.05)`}),(0,b.jsx)(`line`,{x1:`260`,y1:`70`,x2:`320`,y2:`70`,stroke:`var(--accent-color)`,strokeWidth:`2`}),(0,b.jsx)(`line`,{x1:`260`,y1:`90`,x2:`300`,y2:`90`,stroke:`rgba(102,217,237,0.4)`,strokeWidth:`2`})]}):e.includes(`NICVD`)||e.includes(`CATH`)?(0,b.jsxs)(`svg`,{viewBox:`0 0 400 160`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,b.jsx)(`defs`,{children:(0,b.jsxs)(`linearGradient`,{id:`cath-grad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,b.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(102, 217, 237, 0.03)`}),(0,b.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(102, 217, 237, 0.15)`})]})}),(0,b.jsx)(`rect`,{width:`400`,height:`160`,fill:`url(#cath-grad)`}),(0,b.jsxs)(`g`,{stroke:`rgba(102, 217, 237, 0.06)`,strokeWidth:`1`,children:[(0,b.jsx)(`line`,{x1:`0`,y1:`20`,x2:`400`,y2:`20`}),(0,b.jsx)(`line`,{x1:`0`,y1:`60`,x2:`400`,y2:`60`}),(0,b.jsx)(`line`,{x1:`0`,y1:`100`,x2:`400`,y2:`100`}),(0,b.jsx)(`line`,{x1:`0`,y1:`140`,x2:`400`,y2:`140`}),(0,b.jsx)(`line`,{x1:`50`,y1:`0`,x2:`50`,y2:`160`}),(0,b.jsx)(`line`,{x1:`150`,y1:`0`,x2:`150`,y2:`160`}),(0,b.jsx)(`line`,{x1:`250`,y1:`0`,x2:`250`,y2:`160`}),(0,b.jsx)(`line`,{x1:`350`,y1:`0`,x2:`350`,y2:`160`})]}),(0,b.jsx)(`circle`,{cx:`200`,cy:`80`,r:`40`,stroke:`var(--accent-color)`,strokeWidth:`1.5`,opacity:`0.5`}),(0,b.jsx)(`circle`,{cx:`200`,cy:`80`,r:`5`,fill:`var(--accent-color)`,filter:`drop-shadow(0 0 4px var(--accent-glow))`}),(0,b.jsx)(`path`,{d:`M 120,80 L 155,80 M 245,80 L 280,80 M 200,30 L 200,55 M 200,105 L 200,130`,stroke:`var(--accent-color)`,strokeWidth:`1.5`}),(0,b.jsx)(`path`,{d:`M 175,80 C 175,70 185,62 200,62 C 215,62 225,70 225,80`,stroke:`var(--accent-color)`,strokeWidth:`2`,strokeDasharray:`3,3`})]}):(0,b.jsxs)(`svg`,{viewBox:`0 0 400 160`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,b.jsx)(`defs`,{children:(0,b.jsxs)(`linearGradient`,{id:`ai-grad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,b.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(102, 217, 237, 0.03)`}),(0,b.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(102, 217, 237, 0.15)`})]})}),(0,b.jsx)(`rect`,{width:`400`,height:`160`,fill:`url(#ai-grad)`}),(0,b.jsxs)(`g`,{stroke:`rgba(102, 217, 237, 0.15)`,strokeWidth:`1`,children:[(0,b.jsx)(`line`,{x1:`120`,y1:`50`,x2:`200`,y2:`80`}),(0,b.jsx)(`line`,{x1:`120`,y1:`110`,x2:`200`,y2:`80`}),(0,b.jsx)(`line`,{x1:`280`,y1:`50`,x2:`200`,y2:`80`}),(0,b.jsx)(`line`,{x1:`280`,y1:`110`,x2:`200`,y2:`80`}),(0,b.jsx)(`line`,{x1:`120`,y1:`50`,x2:`120`,y2:`110`}),(0,b.jsx)(`line`,{x1:`280`,y1:`50`,x2:`280`,y2:`110`})]}),(0,b.jsx)(`circle`,{cx:`120`,cy:`50`,r:`5`,fill:`var(--accent-color)`}),(0,b.jsx)(`circle`,{cx:`120`,cy:`110`,r:`5`,fill:`var(--accent-color)`}),(0,b.jsx)(`circle`,{cx:`280`,cy:`50`,r:`5`,fill:`var(--accent-color)`}),(0,b.jsx)(`circle`,{cx:`280`,cy:`110`,r:`5`,fill:`var(--accent-color)`}),(0,b.jsx)(`circle`,{cx:`200`,cy:`80`,r:`9`,fill:`var(--accent-color)`,filter:`drop-shadow(0 0 5px var(--accent-glow))`}),(0,b.jsx)(`circle`,{cx:`200`,cy:`80`,r:`4`,fill:`#fff`})]}),Je=()=>{let e=[`All`,`Enterprise`,`Healthcare`,`AI & Automation`],[t,n]=(0,_.useState)(`All`),r=[{title:`AKHSmart Healthcare System`,category:`Healthcare`,desc:`Modular healthcare platform built with NHIF/Jubilee claims automation, patient admission/discharge pipelines, and a custom financial integration engine.`,tech:[`.NET 9`,`Blazor Server`,`Oracle 11g`,`REST APIs`,`PeopleSoft`],link:`#`,github:`https://github.com/poseidonrage`,featured:!0},{title:`Universal Motors ERP Backend`,category:`Enterprise`,desc:`Modernization of legacy automotive inventory systems. Migrated core modules to Docker, optimized heavy SQL procedures, and built REST APIs for cross-border invoicing.`,tech:[`.NET 8`,`React`,`Azure SQL`,`Docker`,`REST APIs`],link:`#`,github:`https://github.com/poseidonrage`,featured:!0},{title:`JDC Container Stock Management`,category:`Enterprise`,desc:`Scalable container tracking and inventory management application built to enhance supply chain traceability, track container lifecycles, and minimize stock discrepancies.`,tech:[`.NET Core`,`SQL Server`,`REST APIs`,`Inventory Systems`],link:`#`,github:`https://github.com/poseidonrage`,featured:!1},{title:`Payam-e-Sehat Foundation Clinical App`,category:`Healthcare`,desc:`Lightweight clinical system designed for diabetic patient management, enhancing medical follow-up schedules, logging patient histories, and ensuring continuity of care.`,tech:[`.NET Framework`,`WinForms`,`SQL Server`,`HMS Workflows`],link:`#`,github:`https://github.com/poseidonrage`,featured:!1},{title:`NICVD Hospital ERP & CATH XP`,category:`Healthcare`,desc:`In-house Catheterization Lab dashboard (CATH XP) and full-scale ERP system for the largest cardiac hospital in Pakistan, replacing expensive license-based alternatives.`,tech:[`.NET Framework`,`WinForms`,`SQL Server`,`Telerik`,`Crystal Reports`],link:`#`,github:`https://github.com/poseidonrage`,featured:!1},{title:`Agentic AI & RAG Orchestrator`,category:`AI & Automation`,desc:`Retrieval-Augmented Generation workflows and n8n pipelines integrated with LLM agents (Hermes) to automate healthcare query resolutions and middleware tasks.`,tech:[`Agentic AI`,`RAG`,`n8n Workflows`,`Hermes Agent`,`LLMs`],link:`#`,github:`https://github.com/poseidonrage`,featured:!1}],i=t===`All`?r:r.filter(e=>e.category===t);return(0,b.jsxs)(`section`,{className:`projects-section`,id:`work`,children:[(0,b.jsxs)(`div`,{className:`container`,children:[(0,b.jsxs)(`div`,{className:`section-title-wrapper`,children:[(0,b.jsx)(`span`,{className:`section-number`,children:`// 03`}),(0,b.jsx)(`h2`,{className:`section-title font-sans`,children:`Featured Work`})]}),(0,b.jsx)(`div`,{className:`filter-bar font-mono`,children:e.map((e,r)=>(0,b.jsx)(`button`,{className:`filter-btn ${t===e?`active-filter`:``}`,onClick:()=>n(e),children:e},r))}),(0,b.jsx)(`div`,{className:`projects-grid`,children:i.map((e,t)=>(0,b.jsxs)(`div`,{className:`glass-card project-card`,children:[(0,b.jsx)(`div`,{className:`project-image-wrapper`,children:qe(e.title)}),(0,b.jsxs)(`div`,{className:`project-card-content`,children:[(0,b.jsxs)(`div`,{className:`project-card-header`,children:[(0,b.jsx)(xe,{className:`folder-icon`,size:32}),(0,b.jsxs)(`div`,{className:`project-links`,children:[(0,b.jsx)(`a`,{href:e.github,target:`_blank`,rel:`noopener noreferrer`,className:`proj-link`,title:`Github Repository`,children:(0,b.jsx)(Ke,{style:{width:`18px`,height:`18px`}})}),(0,b.jsx)(`a`,{href:e.link,className:`proj-link`,title:`Live Preview`,children:(0,b.jsx)(ye,{size:18})})]})]}),(0,b.jsxs)(`div`,{className:`project-info`,children:[(0,b.jsx)(`span`,{className:`project-category font-mono`,children:e.category}),(0,b.jsx)(`h3`,{className:`project-title`,children:e.title}),(0,b.jsx)(`p`,{className:`project-desc`,children:e.desc})]}),(0,b.jsx)(`div`,{className:`project-tech font-mono`,children:e.tech.map((e,t)=>(0,b.jsx)(`span`,{className:`tech-tag`,children:e},t))})]})]},t))})]}),(0,b.jsx)(`style`,{children:`
        .projects-section {
          position: relative;
        }
        .filter-bar {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.4rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: var(--transition-fast);
        }
        .filter-btn:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
        }
        .filter-btn.active-filter {
          color: var(--bg-dark);
          background: var(--accent-color);
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          padding: 0;
          overflow: hidden;
        }
        .project-image-wrapper {
          height: 160px;
          background: linear-gradient(135deg, rgba(16, 23, 33, 0.9) 0%, rgba(7, 9, 14, 0.9) 100%);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .project-image-wrapper svg {
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image-wrapper svg {
          transform: scale(1.05);
        }
        .project-card-content {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }
        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .folder-icon {
          color: var(--accent-color);
          opacity: 0.85;
          transition: var(--transition-smooth);
        }
        .project-card:hover .folder-icon {
          transform: translateY(-2px);
          color: var(--text-primary);
        }
        .project-links {
          display: flex;
          gap: 0.75rem;
        }
        .proj-link {
          color: var(--text-secondary);
          opacity: 0.75;
          transition: var(--transition-fast);
        }
        .proj-link:hover {
          color: var(--accent-color);
          opacity: 1;
          transform: scale(1.1);
        }
        .project-info {
          flex: 1;
          margin-bottom: 1.5rem;
        }
        .project-category {
          font-size: 0.75rem;
          color: var(--accent-color);
          font-weight: 500;
          display: block;
          margin-bottom: 0.5rem;
        }
        .project-title {
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .project-desc {
          font-size: 0.925rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .project-tech .tech-tag {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Ye=()=>{let e=[{role:`Program Analyst`,company:`Aga Khan Health Services`,location:`Tanzania`,duration:`2024 – Present`,tech:[`.NET 9`,`Blazor Interactive`,`Oracle 11g`,`REST APIs`,`PeopleSoft Integration`,`Meditech Integration`,`NHIF/Jubilee APIs`],highlights:[`Engineered a custom healthcare insurance engine for NHIF and Jubilee APIs, eliminating dependency on expensive third-party Meditech claim modules and saving substantial annual licensing overhead.`,`Designed and deployed Blazor Interactive Server modules backed by highly optimized Oracle 11g PL/SQL stored procedures and query tuning, improving patient workflow visibility and core HMS load times.`,`Architected and automated end-to-end financial integrations with PeopleSoft, synchronizing Goods Received Notes (GRN), voucher validation, and journal ledger entries to eliminate manual data entry and accelerate sync speed.`,`Built real-time NHIF Admission/Discharge (A/D) dashboards providing clinical coordinators with critical operational oversight.`]},{role:`Consulting Software Engineer`,company:`Universal Motors`,location:`UAE`,duration:`2023 – 2024`,tech:[`.NET 8`,`React`,`Next.js`,`Azure SQL Server`,`REST APIs`,`Docker`,`Git`],highlights:[`Spearheaded the modernization of Universal Motors' legacy backend architecture, optimizing API endpoints and Azure SQL Server queries to boost database transaction throughput by 35%.`,`Designed and implemented robust, high-performance RESTful APIs in .NET 8 to handle complex international inventory catalogues, cross-border multi-currency invoicing, and real-time stock updates.`,`Standardized development and deployment workflows by containerizing services using Docker, minimizing environmental discrepancies and establishing consistent local-to-production parity.`]},{role:`Software Engineer`,company:`NICVD (National Institute of Cardiovascular Diseases)`,location:`Pakistan`,duration:`2022 – 2023`,tech:[`.NET Framework 4.7`,`WinForms`,`Telerik Controls`,`SQL Server`,`Crystal Reports`,`ERP Modules`],highlights:[`Led the in-house development of CATH XP (Catheterization Lab System) and modular hospital ERP systems, driving a 15% reduction in organizational operating costs by replacing commercial proprietary software.`,`Re-architected legacy WinForms applications using Telerik Controls and .NET Framework, enhancing UI/UX and reducing weekly bugs by 40% through strict refactoring and comprehensive unit testing.`,`Created advanced clinical patient reporting modules and financial dashboards utilizing Crystal Reports and SQL Server, delivering real-time metrics to department heads.`]},{role:`Application Developer`,company:`NICVD`,location:`Pakistan`,duration:`2018 – 2022`,tech:[`.NET`,`WinForms`,`SQL Server`,`HMS Workflows`,`Admissions & Discharges`],highlights:[`Delivered high-concurrency HMS (Hospital Management System) modules handling high-volume patient admissions, discharges, clinical routing, and EMR database workflows.`,`Maintained and scaled mission-critical legacy healthcare applications, ensuring 99.99% system availability and seamless 24/7 operations in high-pressure emergency departments.`,`Partnered with medical and administrative staff to analyze workflow bottlenecks, translating clinical requirements into streamlined software features that optimized emergency admissions.`]}],[t,n]=(0,_.useState)([0]),r=e=>{t.includes(e)?n(t.filter(t=>t!==e)):n([...t,e])};return(0,b.jsxs)(`section`,{className:`experience-section`,id:`experience`,children:[(0,b.jsxs)(`div`,{className:`container`,children:[(0,b.jsxs)(`div`,{className:`section-title-wrapper`,children:[(0,b.jsx)(`span`,{className:`section-number`,children:`// 04`}),(0,b.jsx)(`h2`,{className:`section-title`,children:`Professional Experience`})]}),(0,b.jsxs)(`div`,{className:`timeline-container`,children:[(0,b.jsx)(`div`,{className:`timeline-line`}),(0,b.jsx)(`div`,{className:`timeline-items`,children:e.map((e,n)=>{let i=t.includes(n);return(0,b.jsxs)(`div`,{className:`timeline-item`,children:[(0,b.jsx)(`div`,{className:`timeline-badge`,children:(0,b.jsx)(D,{size:16})}),(0,b.jsxs)(`div`,{className:`glass-card timeline-card ${i?`card-expanded`:``}`,children:[(0,b.jsxs)(`div`,{className:`card-header`,onClick:()=>r(n),role:`button`,"aria-expanded":i,children:[(0,b.jsxs)(`div`,{className:`title-block`,children:[(0,b.jsx)(`h3`,{className:`job-role`,children:e.role}),(0,b.jsxs)(`h4`,{className:`job-company font-mono`,children:[e.company,`, `,(0,b.jsx)(`span`,{className:`location`,children:e.location})]})]}),(0,b.jsxs)(`div`,{className:`date-toggle-block`,children:[(0,b.jsxs)(`span`,{className:`job-date font-mono`,children:[(0,b.jsx)(O,{size:12,style:{marginRight:`0.4rem`}}),` `,e.duration]}),(0,b.jsx)(`span`,{className:`expand-icon`,children:i?(0,b.jsx)(k,{size:18}):(0,b.jsx)(de,{size:18})})]})]}),(0,b.jsxs)(`div`,{className:`card-content ${i?`content-show`:`content-hide`}`,children:[(0,b.jsx)(`ul`,{className:`highlights-list`,children:e.highlights.map((e,t)=>(0,b.jsx)(`li`,{children:e},t))}),(0,b.jsx)(`div`,{className:`tech-tags font-mono`,children:e.tech.map((e,t)=>(0,b.jsx)(`span`,{className:`tech-tag`,children:e},t))})]})]})]},n)})})]}),(0,b.jsxs)(`div`,{className:`edu-cert-container`,children:[(0,b.jsxs)(`div`,{className:`edu-column`,children:[(0,b.jsx)(`h3`,{className:`sub-section-title font-mono`,children:`// education`}),(0,b.jsxs)(`div`,{className:`edu-items`,children:[(0,b.jsxs)(`div`,{className:`edu-item`,children:[(0,b.jsx)(`h4`,{className:`edu-degree`,children:`Master of Computer Science (MCS)`}),(0,b.jsx)(`p`,{className:`edu-school font-mono`,children:`Muhammad Ali Jinnah University, Pakistan`}),(0,b.jsx)(`span`,{className:`edu-date font-mono`,children:`2016 – 2019`})]}),(0,b.jsxs)(`div`,{className:`edu-item`,children:[(0,b.jsx)(`h4`,{className:`edu-degree`,children:`ACCA Pakistan — Finalist (F1–F9)`}),(0,b.jsx)(`p`,{className:`edu-school font-mono`,children:`CAMS - College of Accounting & Management Science`}),(0,b.jsx)(`span`,{className:`edu-date font-mono`,children:`2013 – 2015`})]}),(0,b.jsxs)(`div`,{className:`edu-item`,children:[(0,b.jsx)(`h4`,{className:`edu-degree`,children:`Bachelor of Commerce (B.Com)`}),(0,b.jsx)(`p`,{className:`edu-school font-mono`,children:`University of Karachi, Pakistan`}),(0,b.jsx)(`span`,{className:`edu-date font-mono`,children:`2012 – 2014`})]})]})]}),(0,b.jsxs)(`div`,{className:`cert-column`,children:[(0,b.jsx)(`h3`,{className:`sub-section-title font-mono`,children:`// professional certifications`}),(0,b.jsxs)(`div`,{className:`cert-grid`,children:[(0,b.jsxs)(`div`,{className:`cert-card glass-card`,children:[(0,b.jsx)(`span`,{className:`cert-number font-mono`,children:`01`}),(0,b.jsx)(`h4`,{className:`cert-name`,children:`C# & ASP.NET MVC`}),(0,b.jsx)(`p`,{className:`cert-issuer font-mono`,children:`Professional Certification`})]}),(0,b.jsxs)(`div`,{className:`cert-card glass-card`,children:[(0,b.jsx)(`span`,{className:`cert-number font-mono`,children:`02`}),(0,b.jsx)(`h4`,{className:`cert-name`,children:`Software Testing & Quality Assurance`}),(0,b.jsx)(`p`,{className:`cert-issuer font-mono`,children:`Quality Assurance Engineering`})]}),(0,b.jsxs)(`div`,{className:`cert-card glass-card`,children:[(0,b.jsx)(`span`,{className:`cert-number font-mono`,children:`03`}),(0,b.jsx)(`h4`,{className:`cert-name`,children:`Modern JavaScript (ES6+)`}),(0,b.jsx)(`p`,{className:`cert-issuer font-mono`,children:`Advanced Web Development`})]}),(0,b.jsxs)(`div`,{className:`cert-card glass-card`,children:[(0,b.jsx)(`span`,{className:`cert-number font-mono`,children:`04`}),(0,b.jsx)(`h4`,{className:`cert-name`,children:`API Design in .NET Core`}),(0,b.jsx)(`p`,{className:`cert-issuer font-mono`,children:`Enterprise Backend Architecture`})]}),(0,b.jsxs)(`div`,{className:`cert-card glass-card`,children:[(0,b.jsx)(`span`,{className:`cert-number font-mono`,children:`05`}),(0,b.jsx)(`h4`,{className:`cert-name`,children:`Certified Accounting Technician (CAT)`}),(0,b.jsx)(`p`,{className:`cert-issuer font-mono`,children:`Financial & Cost Accounting`})]})]})]})]})]}),(0,b.jsx)(`style`,{children:`
        .experience-section {
          position: relative;
        }
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 1rem 0;
        }
        .timeline-line {
          position: absolute;
          left: 31px;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, var(--border-color) 0%, var(--accent-color) 20%, var(--accent-color) 80%, var(--border-color) 100%);
          box-shadow: 0 0 10px var(--accent-glow);
          opacity: 0.8;
          transition: var(--transition-smooth);
        }
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .timeline-item {
          position: relative;
          padding-left: 5rem;
        }
        .timeline-badge {
          position: absolute;
          left: 15px;
          top: 24px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--bg-dark);
          border: 2px solid var(--accent-color);
          box-shadow: 0 0 10px var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          z-index: 10;
          transition: var(--transition-smooth);
        }
        .timeline-card {
          padding: 0;
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        .card-header {
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          user-select: none;
          gap: 1rem;
        }
        .job-role {
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          transition: var(--transition-fast);
        }
        .timeline-card:hover .job-role {
          color: var(--accent-color);
        }
        .job-company {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .location {
          color: var(--text-muted);
        }
        .date-toggle-block {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .job-date {
          display: inline-flex;
          align-items: center;
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          color: var(--text-secondary);
          white-space: nowrap;
        }
        .expand-icon {
          color: var(--text-muted);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
        }
        .timeline-card:hover .expand-icon {
          color: var(--accent-color);
        }
        
        .card-content {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s ease;
        }
        .content-hide {
          max-height: 0;
          padding: 0 2rem;
          opacity: 0;
          pointer-events: none;
        }
        .content-show {
          max-height: 500px;
          padding: 0 2rem 2rem 2rem;
          opacity: 1;
          border-top: 1px dashed var(--border-color);
        }
        
        .highlights-list {
          list-style-type: none;
          padding: 1.25rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .highlights-list li {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          position: relative;
          padding-left: 1.25rem;
        }
        .highlights-list li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: 700;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .tech-tag {
          background: rgba(var(--accent-rgb), 0.05);
          border: 1px solid rgba(var(--accent-rgb), 0.15);
          color: var(--accent-color);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
        }
        
        @media (max-width: 768px) {
          .timeline-line {
            left: 15px;
          }
          .timeline-badge {
            left: -1px;
            top: 22px;
          }
          .timeline-item {
            padding-left: 2.75rem;
          }
          .card-header {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.25rem;
            gap: 0.75rem;
          }
          .date-toggle-block {
            width: 100%;
            justify-content: space-between;
          }
          .content-show {
            padding: 0 1.25rem 1.25rem 1.25rem;
          }
        }

        /* ═══════════════ EDUCATION & CERTIFICATIONS ═══════════════ */
        .edu-cert-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 5rem;
          border-top: 1px solid var(--border-color);
          padding-top: 4rem;
        }
        .sub-section-title {
          font-size: 1.2rem;
          color: var(--accent-color);
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .edu-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .edu-item {
          position: relative;
          padding-left: 1.5rem;
          border-left: 2px solid rgba(var(--accent-rgb), 0.15);
          transition: var(--transition-smooth);
        }
        .edu-item:hover {
          border-left-color: var(--accent-color);
        }
        .edu-degree {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .edu-school {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
        }
        .edu-date {
          display: inline-block;
          font-size: 0.75rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          color: var(--text-muted);
        }
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .cert-card {
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          position: relative;
          transition: var(--transition-smooth);
        }
        .cert-card:hover {
          border-color: rgba(var(--accent-rgb), 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 0 8px rgba(var(--accent-rgb), 0.05);
        }
        .cert-number {
          font-size: 0.7rem;
          color: var(--accent-color);
          opacity: 0.6;
        }
        .cert-name {
          font-size: 1rem;
          color: var(--text-primary);
        }
        .cert-issuer {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        
        @media (max-width: 900px) {
          .edu-cert-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            margin-top: 3.5rem;
            padding-top: 3rem;
          }
        }
      `})]})},Xe=e=>e.includes(`Backend`)?(0,b.jsxs)(`svg`,{viewBox:`0 0 400 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,b.jsx)(`defs`,{children:(0,b.jsxs)(`linearGradient`,{id:`blog-back`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,b.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(102, 217, 237, 0.02)`}),(0,b.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(102, 217, 237, 0.12)`})]})}),(0,b.jsx)(`rect`,{width:`400`,height:`140`,fill:`url(#blog-back)`}),(0,b.jsx)(`rect`,{x:`50`,y:`30`,width:`300`,height:`80`,rx:`4`,stroke:`rgba(102, 217, 237, 0.2)`,strokeWidth:`1.5`,fill:`rgba(16,23,33,0.8)`}),(0,b.jsx)(`circle`,{cx:`70`,cy:`45`,r:`4`,fill:`#ff5f56`}),(0,b.jsx)(`circle`,{cx:`82`,cy:`45`,r:`4`,fill:`#ffbd2e`}),(0,b.jsx)(`circle`,{cx:`94`,cy:`45`,r:`4`,fill:`#27c93f`}),(0,b.jsx)(`path`,{d:`M 70,70 L 150,70`,stroke:`var(--accent-color)`,strokeWidth:`2`,strokeLinecap:`round`}),(0,b.jsx)(`path`,{d:`M 70,85 L 110,85`,stroke:`rgba(102, 217, 237, 0.4)`,strokeWidth:`2`,strokeLinecap:`round`})]}):e.includes(`Automation`)||e.includes(`AI`)?(0,b.jsxs)(`svg`,{viewBox:`0 0 400 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,b.jsx)(`defs`,{children:(0,b.jsxs)(`linearGradient`,{id:`blog-ai`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,b.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(102, 217, 237, 0.02)`}),(0,b.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(102, 217, 237, 0.12)`})]})}),(0,b.jsx)(`rect`,{width:`400`,height:`140`,fill:`url(#blog-ai)`}),(0,b.jsx)(`circle`,{cx:`200`,cy:`70`,r:`30`,stroke:`var(--accent-color)`,strokeWidth:`1`,strokeDasharray:`4,4`}),(0,b.jsx)(`circle`,{cx:`160`,cy:`70`,r:`4`,fill:`var(--accent-color)`}),(0,b.jsx)(`circle`,{cx:`240`,cy:`70`,r:`4`,fill:`var(--accent-color)`}),(0,b.jsx)(`circle`,{cx:`200`,cy:`40`,r:`4`,fill:`var(--accent-color)`}),(0,b.jsx)(`circle`,{cx:`200`,cy:`100`,r:`4`,fill:`var(--accent-color)`}),(0,b.jsx)(`line`,{x1:`164`,y1:`70`,x2:`196`,y2:`70`,stroke:`rgba(102, 217, 237, 0.3)`,strokeWidth:`1`}),(0,b.jsx)(`line`,{x1:`204`,y1:`70`,x2:`236`,y2:`70`,stroke:`rgba(102, 217, 237, 0.3)`,strokeWidth:`1`})]}):(0,b.jsxs)(`svg`,{viewBox:`0 0 400 140`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,b.jsx)(`defs`,{children:(0,b.jsxs)(`linearGradient`,{id:`blog-hc`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,b.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(102, 217, 237, 0.02)`}),(0,b.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(102, 217, 237, 0.12)`})]})}),(0,b.jsx)(`rect`,{width:`400`,height:`140`,fill:`url(#blog-hc)`}),(0,b.jsx)(`path`,{d:`M 60,70 L 140,70 L 150,50 L 160,95 L 170,60 L 180,80 L 190,70 L 340,70`,stroke:`var(--accent-color)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),Ze=()=>{let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)({author:``,content:``}),[f,p]=(0,_.useState)(null),m=[{id:`net10-apis`,title:`Building High-Performance APIs in .NET 10 Core`,date:`May 18, 2026`,readTime:`6 min read`,category:`Backend`,summary:`A deep dive into modular API architectures, modern dependency injection, and leveraging native PL/SQL integrations in the .NET 10 pipeline.`,content:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{children:`As software systems scale, the need for performant and modular backend APIs becomes paramount. With the introduction of the .NET 10 runtime, Microsoft has brought substantial upgrades to JIT compiling, Native AOT compilation, and JSON serialization. For developers working with enterprise databases like Oracle and SQL Server, these performance gains are game-changing.`}),(0,b.jsx)(`h3`,{children:`1. Minimal APIs and Modular Architecture`}),(0,b.jsx)(`p`,{children:`In modern .NET development, Minimal APIs are the preferred choice for microservices due to low memory footprints and faster startup times. Here is how we configure a robust, route-grouped API endpoint in .NET 10:`}),(0,b.jsx)(`pre`,{className:`code-block font-mono`,children:`var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
 
var app = builder.Build();
 
var claimsGroup = app.MapGroup("/api/v1/claims")
    .WithTags("Claims Engine")
    .RequireAuthorization();
 
claimsGroup.MapPost("/process", async (ClaimRequest request, IClaimService service) => {
    var result = await service.ProcessClaimAsync(request);
    return Results.Ok(result);
});
 
app.Run();`}),(0,b.jsx)(`h3`,{children:`2. Direct PL/SQL Optimization`}),(0,b.jsx)(`p`,{children:"For applications communicating with legacy databases (such as Oracle 11g in hospital ERPs), using high-level ORMs like Entity Framework can sometimes introduce unwanted abstraction overhead. Writing optimized PL/SQL procedures and calling them directly through `OracleCommand` in ADO.NET remains one of the fastest ways to process heavy transactional batch data."}),(0,b.jsx)(`blockquote`,{children:`Always verify that connections are pooled correctly and database cursors are disposed. In a environment handling thousands of daily claims, even a minor cursor leak can crash an application pool within hours.`}),(0,b.jsx)(`h3`,{children:`3. Structuring Integrations`}),(0,b.jsx)(`p`,{children:`When bridging hospital tools like Meditech or PeopleSoft with custom web applications, maintaining structured JSON schemas is vital. By leveraging .NET 10's improved System.Text.Json source generators, we can serialize payload structures at compile time, eliminating reflection overhead and maximizing request throughput.`})]})},{id:`agentic-ai-n8n`,title:`Orchestrating AI Agents and RAG Pipelines in n8n`,date:`May 04, 2026`,readTime:`8 min read`,category:`AI & Automation`,summary:`How to automate hospital billing reports and system telemetry alerts by linking custom Hermes Agents, vector stores, and n8n webhooks.`,content:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{children:`AI is shifting from static chat widgets to active, goal-driven agents. For enterprise developers, the challenge lies in connecting large language models (LLMs) to real-world database procedures, ERP APIs, and notification systems safely. This is where workflow orchestrators like n8n and frameworks like Hermes shine.`}),(0,b.jsx)(`h3`,{children:`1. What is Agentic AI?`}),(0,b.jsx)(`p`,{children:`Unlike traditional script-driven flows, Agentic systems are given a goal, access to tools, and the autonomy to figure out the steps. For example, instead of writing complex parser rules for variable insurer claims, we can assign an LLM Agent the task: "Retrieve the claim document, search our vector database for matching billing codes, and verify the total matches our SQL database."`}),(0,b.jsx)(`h3`,{children:`2. Structuring RAG (Retrieval-Augmented Generation)`}),(0,b.jsx)(`p`,{children:`To prevent models from hallucinating, we implement RAG. The process works as follows:`}),(0,b.jsxs)(`ul`,{children:[(0,b.jsxs)(`li`,{children:[(0,b.jsx)(`strong`,{children:`Ingestion:`}),` PDF documents (e.g., insurance claim files) are read and split into text chunks.`]}),(0,b.jsxs)(`li`,{children:[(0,b.jsx)(`strong`,{children:`Embedding:`}),` Chunks are converted to vector representations and stored in a vector index.`]}),(0,b.jsxs)(`li`,{children:[(0,b.jsx)(`strong`,{children:`Retrieval:`}),` When a user asks a question, we query the vector store for the most relevant document chunks.`]}),(0,b.jsxs)(`li`,{children:[(0,b.jsx)(`strong`,{children:`Generation:`}),` The chunks are passed alongside the user query to the LLM to generate an accurate, evidence-backed response.`]})]}),(0,b.jsx)(`h3`,{children:`3. n8n Node Configurations`}),(0,b.jsx)(`p`,{children:`n8n is an excellent tool for visually connecting these pieces. We can create webhook triggers that feed incoming emails into a vector search node, pass results to a Hermes Agent node to decide on actions, and subsequently call .NET webhooks to write records directly to the SQL Server database.`})]})},{id:`nicvd-erp-migration`,title:`Building In-House ERP Solutions for Cardiac Hospitals`,date:`April 22, 2026`,readTime:`5 min read`,category:`Healthcare`,summary:`An architectural retrospective on developing CATH XP and customized HMS modules to eliminate high licensing costs and improve patient flow.`,content:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`p`,{children:`Operating a high-volume healthcare facility requires seamless coordination between clinical diagnostics, patient admissions, billing, and inventory tracking. At NICVD, the largest cardiac hospital in Pakistan, relying on generic third-party software often meant high licensing fees and lack of flexibility. Our solution was to build custom clinical systems from the ground up.`}),(0,b.jsx)(`h3`,{children:`1. The CATH XP Architecture`}),(0,b.jsx)(`p`,{children:`CATH XP was designed specifically for catheterization laboratory tracking. Built using a robust .NET framework combined with SQL Server, it captures real-time surgical data, tracks medical stents in inventory, and automatically formats surgical summary reports for surgeons.`}),(0,b.jsx)(`h3`,{children:`2. Tackling the Admissions Bottleneck`}),(0,b.jsx)(`p`,{children:`Hospital management systems often bottleneck during emergency admissions. We re-engineered the routing pipeline using direct WinForms and custom PL/SQL queries to allow rapid one-click registration of emergency patients, syncing their data automatically with lab dashboards and financial accounts.`}),(0,b.jsx)(`h3`,{children:`3. Lessons Learned`}),(0,b.jsx)(`p`,{children:`Building in-house software for medical environments requires close cooperation with the medical staff. By running iterative requirements gathering sessions and testing UI modules directly in the operating rooms, we ensured the final application was optimized for speed, reliability, and ease of use under pressure.`})]})}];(0,_.useEffect)(()=>{fetch(`/api/blogs`).then(e=>{if(!e.ok)throw Error(`API Error or Empty`);return e.json()}).then(e=>{Array.isArray(e)&&e.length>0?r(e.map(e=>({id:e.id||e._id||e.slug,title:e.title,date:e.date||new Date(e.createdAt||Date.now()).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}),readTime:e.readTime,summary:e.summary,category:e.category,content:e.content}))):r(m)}).catch(e=>{console.warn(`Backend blogs fetch failed, falling back to static posts:`,e),r(m)}).finally(()=>a(!1))},[]),(0,_.useEffect)(()=>{if(!e){s([]);return}l(!0),fetch(`/api/blogs/${e}/comments`).then(e=>{if(!e.ok)throw Error(`Failed to fetch comments`);return e.json()}).then(e=>{Array.isArray(e)&&s(e)}).catch(e=>console.error(`Error fetching comments:`,e)).finally(()=>l(!1))},[e]);let h=async t=>{if(t.preventDefault(),!(!u.author.trim()||!u.content.trim()||!e)){p(`sending`);try{(await fetch(`/api/admin/comments`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({author:u.author,content:u.content,blogId:e,postId:e,postSlug:e})})).ok?(p(`success`),d({author:``,content:``}),setTimeout(()=>p(null),5e3)):p(`error`)}catch(e){console.error(e),p(`error`)}}},g=n.find(t=>t.id===e);return(0,b.jsxs)(`section`,{className:`blog-section`,id:`blog`,children:[(0,b.jsx)(`div`,{className:`container`,children:i?(0,b.jsxs)(`div`,{className:`loading-container`,children:[(0,b.jsx)(`div`,{className:`loading-spinner`}),(0,b.jsx)(`div`,{className:`loading-text`,children:`LOADING_BLOG_SYSTEM...`})]}):g?(0,b.jsxs)(`div`,{className:`blog-post-view animate-fade-in`,children:[(0,b.jsxs)(`button`,{className:`btn-secondary back-btn`,onClick:()=>t(null),children:[(0,b.jsx)(ae,{size:16}),` Back to Blog`]}),(0,b.jsxs)(`article`,{className:`post-article`,children:[(0,b.jsxs)(`header`,{className:`post-header`,children:[(0,b.jsx)(`span`,{className:`post-category-badge font-mono`,children:g.category}),(0,b.jsx)(`h1`,{className:`post-title`,children:g.title}),(0,b.jsxs)(`div`,{className:`post-meta font-mono`,children:[(0,b.jsxs)(`span`,{children:[(0,b.jsx)(O,{size:13,style:{marginRight:`0.4rem`}}),` `,g.date]}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(ze,{size:13,style:{marginRight:`0.4rem`}}),` By Baqar Naqvi`]}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(me,{size:13,style:{marginRight:`0.4rem`}}),` `,g.readTime]})]})]}),(0,b.jsx)(`div`,{className:`post-body`,children:typeof g.content==`string`?(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:g.content}}):g.content})]}),(0,b.jsxs)(`div`,{className:`comments-section-wrapper glass-card`,children:[(0,b.jsxs)(`h3`,{className:`comments-section-title font-mono`,children:[`// DISCUSSIONS (`,o.length,`)`]}),c?(0,b.jsx)(`div`,{className:`comments-loading font-mono`,children:`QUERYING_DATABASE_COMMENTS...`}):o.length===0?(0,b.jsx)(`div`,{className:`no-comments font-mono`,children:`NO_COMMENTS_SUBMITTED_YET. BE_THE_FIRST.`}):(0,b.jsx)(`div`,{className:`comments-list`,children:o.map(e=>(0,b.jsxs)(`div`,{className:`comment-item`,children:[(0,b.jsxs)(`div`,{className:`comment-header`,children:[(0,b.jsx)(`span`,{className:`comment-author`,children:e.author}),e.date||e.createdAt?(0,b.jsx)(`span`,{className:`comment-date`,children:new Date(e.date||e.createdAt||``).toLocaleDateString()}):null]}),(0,b.jsx)(`p`,{className:`comment-content`,children:e.content})]},e.id||e._id))}),(0,b.jsxs)(`div`,{className:`comment-form-container`,children:[(0,b.jsx)(`h4`,{className:`comment-form-title font-mono`,children:`ADD_COMMENT_ENTRY`}),f===`success`&&(0,b.jsx)(`div`,{className:`comment-status-msg success font-mono`,children:`✓ COMMENT_PENDING_COMMIT: Message received and sent to moderator pool.`}),f===`error`&&(0,b.jsx)(`div`,{className:`comment-status-msg error font-mono`,children:`⚠ TRANSMISSION_FAILED: Error occurred during comment sync.`}),(0,b.jsxs)(`form`,{onSubmit:h,className:`comment-form`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`comment-author`,className:`font-mono`,children:`HANDLE / NAME`}),(0,b.jsx)(`input`,{type:`text`,id:`comment-author`,value:u.author,onChange:e=>d(t=>({...t,author:e.target.value})),required:!0,placeholder:`Anonymouse`,className:`form-input`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`comment-content`,className:`font-mono`,children:`COMMENT_PAYLOAD`}),(0,b.jsx)(`textarea`,{id:`comment-content`,value:u.content,onChange:e=>d(t=>({...t,content:e.target.value})),required:!0,rows:4,placeholder:`Write your constructive thoughts here...`,className:`form-input`})]}),(0,b.jsx)(`button`,{type:`submit`,className:`btn-primary comment-submit-btn font-mono`,disabled:f===`sending`,children:f===`sending`?`TRANSMITTING...`:(0,b.jsxs)(b.Fragment,{children:[`COMMIT_COMMENT `,(0,b.jsx)(Me,{size:14,style:{marginLeft:`0.4rem`}})]})})]})]})]})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`section-title-wrapper animate-fade-in`,children:[(0,b.jsx)(`span`,{className:`section-number`,children:`// 05`}),(0,b.jsx)(`h2`,{className:`section-title`,children:`Developer Blog`})]}),(0,b.jsx)(`div`,{className:`blog-grid`,children:n.map(e=>(0,b.jsxs)(`article`,{className:`glass-card blog-card`,onClick:()=>t(e.id),children:[(0,b.jsx)(`div`,{className:`blog-image-wrapper`,children:Xe(e.category)}),(0,b.jsxs)(`div`,{className:`blog-card-content`,children:[(0,b.jsxs)(`div`,{className:`blog-card-meta font-mono`,children:[(0,b.jsx)(`span`,{className:`blog-category`,children:e.category}),(0,b.jsxs)(`span`,{className:`blog-date`,children:[(0,b.jsx)(O,{size:12,style:{marginRight:`0.3rem`}}),` `,e.date]})]}),(0,b.jsx)(`h3`,{className:`blog-card-title`,children:e.title}),(0,b.jsx)(`p`,{className:`blog-card-summary`,children:e.summary}),(0,b.jsxs)(`div`,{className:`blog-card-footer font-mono`,children:[(0,b.jsxs)(`span`,{children:[(0,b.jsx)(me,{size:12,style:{marginRight:`0.3rem`}}),` `,e.readTime]}),(0,b.jsx)(`span`,{className:`read-more`,children:`Read article ➔`})]})]})]},e.id))})]})}),(0,b.jsx)(`style`,{children:`
        .blog-section {
          position: relative;
        }
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8rem 0;
          gap: 1.5rem;
        }
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(102, 217, 237, 0.1);
          border-top-color: var(--accent-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          box-shadow: 0 0 20px rgba(102, 217, 237, 0.15);
        }
        .loading-text {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--accent-color);
          letter-spacing: 0.15em;
          animation: pulse 1.5s ease-in-out infinite;
          text-shadow: 0 0 8px var(--accent-glow);
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .blog-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
          transition: var(--transition-smooth);
          padding: 0;
          overflow: hidden;
        }
        .blog-card:hover {
          transform: translateY(-4px);
        }
        .blog-image-wrapper {
          height: 140px;
          background: linear-gradient(135deg, rgba(16, 23, 33, 0.9) 0%, rgba(7, 9, 14, 0.9) 100%);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .blog-image-wrapper svg {
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
        }
        .blog-card:hover .blog-image-wrapper svg {
          transform: scale(1.05);
        }
        .blog-card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }
        .blog-card-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }
        .blog-category {
          color: var(--accent-color);
          font-weight: 500;
        }
        .blog-date {
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
        }
        .blog-card-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .blog-card-summary {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .blog-card-footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }
        .blog-card-footer span {
          display: inline-flex;
          align-items: center;
        }
        .read-more {
          color: var(--accent-color);
          font-weight: 500;
          transition: var(--transition-fast);
        }
        .blog-card:hover .read-more {
          transform: translateX(4px);
        }

        /* Post Article View Styling */
        .blog-post-view {
          max-width: 800px;
          margin: 0 auto;
        }
        .back-btn {
          margin-bottom: 2.5rem;
        }
        .post-category-badge {
          display: inline-block;
          font-size: 0.75rem;
          background: rgba(var(--accent-rgb), 0.08);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent-color);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        .post-title {
          font-size: 2.75rem;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          line-height: 1.2;
        }
        .post-meta {
          display: flex;
          gap: 2rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .post-meta span {
          display: inline-flex;
          align-items: center;
        }
        .post-body {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }
        .post-body p {
          margin-bottom: 1.5rem;
        }
        .post-body h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .post-body ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .post-body li {
          margin-bottom: 0.5rem;
        }
        .post-body blockquote {
          border-left: 3px solid var(--accent-color);
          background: rgba(var(--accent-rgb), 0.03);
          padding: 1rem 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: var(--text-primary);
        }
        .code-block {
          background: #0f131a;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 1.25rem;
          overflow-x: auto;
          font-size: 0.85rem;
          line-height: 1.5;
          color: #e2e8f0;
          margin: 1.5rem 0;
        }

        /* Comments styling */
        .comments-section-wrapper {
          margin-top: 3.5rem;
          padding: 2.5rem;
          border-color: rgba(102, 217, 237, 0.12);
        }
        .comments-section-title {
          font-size: 1.4rem;
          color: var(--accent-color);
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .comments-loading {
          font-size: 0.8rem;
          color: var(--text-muted);
          padding: 1.5rem 0;
          text-align: center;
        }
        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .comment-item {
          padding: 1.25rem;
          background: rgba(7, 9, 14, 0.4);
          border: 1px solid var(--border-color);
          border-radius: 6px;
        }
        .comment-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }
        .comment-author {
          color: var(--accent-color);
          font-weight: 600;
        }
        .comment-date {
          font-family: var(--font-mono);
        }
        .comment-content {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.4;
          white-space: pre-wrap;
        }
        .no-comments {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-align: center;
          padding: 1.5rem 0;
        }
        .comment-form-container {
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
        }
        .comment-form-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }
        .comment-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .comment-submit-btn {
          align-self: flex-start;
        }
        .comment-status-msg {
          font-size: 0.8rem;
          padding: 0.75rem;
          border-radius: 6px;
          margin-bottom: 1.25rem;
        }
        .comment-status-msg.success {
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.25);
          color: #4ade80;
        }
        .comment-status-msg.error {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #f87171;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }
        .form-input {
          background: rgba(7, 9, 14, 0.5);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-fast);
        }
        .form-input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .post-title {
            font-size: 2rem;
          }
          .post-meta {
            gap: 1rem;
          }
        }
      `})]})},Qe=e=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`24`,height:`24`,stroke:`currentColor`,strokeWidth:`2`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,b.jsx)(`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`}),(0,b.jsx)(`rect`,{x:`2`,y:`9`,width:`4`,height:`12`}),(0,b.jsx)(`circle`,{cx:`4`,cy:`4`,r:`2`})]}),$e=e=>(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`24`,height:`24`,stroke:`currentColor`,strokeWidth:`2`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,b.jsx)(`path`,{d:`M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22`})}),et=()=>{let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)({name:``,email:``,message:``}),[i,a]=(0,_.useState)(null),o=`baqar.naqvi2@gmail.com`,s=()=>{navigator.clipboard.writeText(o).then(()=>{t(!0),setTimeout(()=>t(!1),2e3)})},c=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))};return(0,b.jsxs)(`section`,{className:`contact-section`,id:`contact`,children:[(0,b.jsxs)(`div`,{className:`container`,children:[(0,b.jsxs)(`div`,{className:`section-title-wrapper`,children:[(0,b.jsx)(`span`,{className:`section-number`,children:`// 06`}),(0,b.jsx)(`h2`,{className:`section-title`,children:`Get In Touch`})]}),(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`contact-info-column`,children:[(0,b.jsx)(`h3`,{className:`contact-heading`,children:`Let's build something together`}),(0,b.jsx)(`p`,{className:`contact-text`,children:`I am currently open to systems integration consulting, .NET core API architecture projects, and custom Agentic AI/automation workflows. Drop a message or email me directly!`}),(0,b.jsxs)(`div`,{className:`email-copy-card glass-card`,children:[(0,b.jsx)(`div`,{className:`email-label font-mono`,children:`DIRECT EMAIL`}),(0,b.jsxs)(`div`,{className:`email-row`,children:[(0,b.jsx)(Te,{className:`mail-icon`,size:20}),(0,b.jsx)(`span`,{className:`email-text font-mono`,children:o}),(0,b.jsx)(`button`,{onClick:s,className:`copy-btn ${e?`copied`:``}`,title:`Copy email to clipboard`,children:e?(0,b.jsx)(ue,{size:14}):(0,b.jsx)(_e,{size:14})})]})]}),(0,b.jsxs)(`div`,{className:`social-links-grid`,children:[(0,b.jsxs)(`a`,{href:`https://linkedin.com/in/baqar-hussain`,target:`_blank`,rel:`noopener noreferrer`,className:`social-link-card glass-card`,children:[(0,b.jsx)(Qe,{}),(0,b.jsx)(`span`,{className:`font-mono`,children:`LinkedIn ➔`})]}),(0,b.jsxs)(`a`,{href:`https://github.com/poseidonrage`,target:`_blank`,rel:`noopener noreferrer`,className:`social-link-card glass-card`,children:[(0,b.jsx)($e,{}),(0,b.jsx)(`span`,{className:`font-mono`,children:`GitHub ➔`})]})]})]}),(0,b.jsx)(`div`,{className:`contact-form-column`,children:(0,b.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),n.name&&n.email&&n.message&&(a(`sending`),setTimeout(()=>{a(`success`),r({name:``,email:``,message:``}),setTimeout(()=>a(null),4e3)},1500))},className:`glass-card contact-form`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`name`,className:`font-mono`,children:`Name`}),(0,b.jsx)(`input`,{type:`text`,id:`name`,name:`name`,value:n.name,onChange:c,required:!0,placeholder:`John Doe`,className:`form-input`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`email`,className:`font-mono`,children:`Email`}),(0,b.jsx)(`input`,{type:`email`,id:`email`,name:`email`,value:n.email,onChange:c,required:!0,placeholder:`john@example.com`,className:`form-input`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`message`,className:`font-mono`,children:`Message`}),(0,b.jsx)(`textarea`,{id:`message`,name:`message`,value:n.message,onChange:c,required:!0,rows:5,placeholder:`Hi Baqar, I'd love to connect...`,className:`form-input`})]}),(0,b.jsx)(`button`,{type:`submit`,className:`btn-primary form-submit-btn`,disabled:i===`sending`,children:i===`sending`?`Sending...`:i===`success`?(0,b.jsxs)(b.Fragment,{children:[`Message Sent! `,(0,b.jsx)(ue,{size:16})]}):(0,b.jsxs)(b.Fragment,{children:[`Send Message `,(0,b.jsx)(Me,{size:16})]})})]})})]})]}),(0,b.jsx)(`style`,{children:`
        .contact-section {
          position: relative;
        }
        .contact-info-column {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .contact-heading {
          font-size: 1.8rem;
          color: var(--text-primary);
        }
        .contact-text {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 500px;
        }
        .email-copy-card {
          padding: 1.25rem 1.75rem;
          border-color: rgba(var(--accent-rgb), 0.1);
        }
        .email-label {
          font-size: 0.7rem;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }
        .email-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .mail-icon {
          color: var(--text-secondary);
        }
        .email-text {
          font-size: 1rem;
          color: var(--text-primary);
          flex: 1;
        }
        .copy-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          width: 28px;
          height: 28px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .copy-btn:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.05);
        }
        .copy-btn.copied {
          color: #22c55e;
          border-color: #22c55e;
          background: rgba(34, 197, 94, 0.08);
        }
        .social-links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .social-link-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1.25rem;
          cursor: pointer;
        }
        .social-link-card span {
          font-size: 0.8rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }
        .social-link-card:hover span {
          color: var(--accent-color);
          transform: translateX(4px);
        }
        
        /* Form Styling */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }
        .form-input {
          background: rgba(7, 9, 14, 0.5);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-fast);
        }
        .form-input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }
      `})]})},tt=()=>{let e=(0,_.useRef)(null),t=(0,_.useRef)(null),n=(0,_.useRef)({x:-100,y:-100}),r=(0,_.useRef)({x:-100,y:-100}),i=(0,_.useRef)(0),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let a=`ontouchstart`in window||navigator.maxTouchPoints>0;if(m(a),a)return;let s=t=>{n.current={x:t.clientX,y:t.clientY},d||f(!0),e.current&&(e.current.style.transform=`translate(${t.clientX}px, ${t.clientY}px) translate(-50%, -50%)`)},l=()=>u(!0),p=()=>u(!1),h=()=>f(!0),g=()=>{f(!1),n.current={x:-100,y:-100},r.current={x:-100,y:-100}},_=e=>{let t=e.target,n=t.closest(`.terminal-body`)||t.closest(`.terminal-input`),r=t.closest(`a`)||t.closest(`button`)||t.closest(`[role="button"]`);c(!!(n&&!r)),(t.closest(`a`)||t.closest(`button`)||t.closest(`input`)||t.closest(`textarea`)||t.closest(`[role="button"]`)||t.closest(`.terminal-shortcuts`)||t.closest(`.nav-link`))&&o(!0)},v=e=>{let t=e.relatedTarget;if(!t){o(!1),c(!1);return}let n=t.closest(`.terminal-body`)||t.closest(`.terminal-input`),r=t.closest(`a`)||t.closest(`button`)||t.closest(`[role="button"]`);c(!!(n&&!r)),t.closest(`a`)||t.closest(`button`)||t.closest(`input`)||t.closest(`textarea`)||t.closest(`[role="button"]`)||t.closest(`.terminal-shortcuts`)||t.closest(`.nav-link`)?o(!0):o(!1)};document.addEventListener(`mousemove`,s),document.addEventListener(`mousedown`,l),document.addEventListener(`mouseup`,p),document.addEventListener(`mouseover`,_),document.addEventListener(`mouseout`,v),document.documentElement.addEventListener(`mouseenter`,h),document.documentElement.addEventListener(`mouseleave`,g);let y=(e,t,n)=>e+(t-e)*n,b=()=>{r.current.x=y(r.current.x,n.current.x,.15),r.current.y=y(r.current.y,n.current.y,.15),t.current&&(t.current.style.transform=`translate(${r.current.x}px, ${r.current.y}px) translate(-50%, -50%)`),i.current=requestAnimationFrame(b)};return i.current=requestAnimationFrame(b),()=>{document.removeEventListener(`mousemove`,s),document.removeEventListener(`mousedown`,l),document.removeEventListener(`mouseup`,p),document.removeEventListener(`mouseover`,_),document.removeEventListener(`mouseout`,v),document.documentElement.removeEventListener(`mouseenter`,h),document.documentElement.removeEventListener(`mouseleave`,g),cancelAnimationFrame(i.current)}},[]),p?null:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{ref:e,className:`cursor-dot ${d?`visible`:``} ${l?`clicking`:``} ${a?`hovering`:``} ${s?`text-hover`:``}`}),(0,b.jsx)(`div`,{ref:t,className:`cursor-ring ${d?`visible`:``} ${l?`clicking`:``} ${a?`hovering`:``} ${s?`text-hover`:``}`}),(0,b.jsx)(`style`,{children:`
        /* Hide default cursor globally */
        *, *::before, *::after {
          cursor: none !important;
        }

        /* Show native I-beam cursor on terminal elements */
        .terminal-body,
        .terminal-body *,
        .terminal-input,
        .terminal-input * {
          cursor: text !important;
        }

        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent-color);
          pointer-events: none;
          z-index: 99999;
          opacity: 0;
          transition: width 0.25s ease, height 0.25s ease, opacity 0.2s ease, background 0.25s ease;
          will-change: transform;
        }
        .cursor-dot.visible { opacity: 1; }
        .cursor-dot.hovering {
          width: 8px; height: 8px;
          background: #fff;
        }
        .cursor-dot.clicking {
          width: 4px; height: 4px;
        }
        .cursor-dot.text-hover {
          opacity: 0 !important;
        }

        .cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(var(--accent-rgb), 0.5);
          pointer-events: none;
          z-index: 99998;
          opacity: 0;
          transition: width 0.3s ease, height 0.3s ease, opacity 0.2s ease,
                      border-color 0.3s ease, background 0.3s ease;
          will-change: transform;
          background: transparent;
        }
        .cursor-ring.visible { opacity: 1; }
        .cursor-ring.hovering {
          width: 56px; height: 56px;
          border-color: rgba(var(--accent-rgb), 0.3);
          background: rgba(var(--accent-rgb), 0.06);
        }
        .cursor-ring.clicking {
          width: 28px; height: 28px;
          border-color: rgba(var(--accent-rgb), 0.8);
        }
        .cursor-ring.text-hover {
          opacity: 0 !important;
        }

        /* Keep default cursor on mobile / touch */
        @media (hover: none) and (pointer: coarse) {
          *, *::before, *::after {
            cursor: auto !important;
          }
          .cursor-dot, .cursor-ring {
            display: none !important;
          }
        }
      `})]})},nt=({leftText:e,rightText:t})=>(0,b.jsxs)(`div`,{className:`section-separator-wrapper`,children:[(0,b.jsx)(`div`,{className:`separator-line`}),(0,b.jsxs)(`div`,{className:`separator-content font-mono`,children:[(0,b.jsx)(`span`,{className:`separator-tag`,children:e}),(0,b.jsxs)(`div`,{className:`separator-glyph`,children:[(0,b.jsx)(`span`,{className:`glyph-dot`}),(0,b.jsx)(`span`,{className:`glyph-pulse`})]}),(0,b.jsx)(`span`,{className:`separator-tag`,children:t})]}),(0,b.jsx)(`style`,{children:`
        .section-separator-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 1px;
          margin: 4rem 0;
          pointer-events: none;
        }

        .separator-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent 0%,
            var(--border-color) 15%,
            rgba(var(--accent-rgb), 0.3) 40%,
            var(--accent-color) 50%,
            rgba(var(--accent-rgb), 0.3) 60%,
            var(--border-color) 85%,
            transparent 100%
          );
          box-shadow: 0 0 8px var(--accent-glow);
        }

        .separator-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: #080d11; /* Blends with body radial background gradient */
          padding: 0 2rem;
          color: var(--text-muted);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: lowercase;
        }

        .separator-tag {
          opacity: 0.45;
          transition: var(--transition-smooth);
        }

        .section-separator-wrapper:hover .separator-tag {
          opacity: 0.85;
          color: var(--accent-color);
        }

        .separator-glyph {
          position: relative;
          width: 10px;
          height: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glyph-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-color);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-color);
        }

        .glyph-pulse {
          position: absolute;
          width: 16px;
          height: 16px;
          border: 1px solid var(--accent-color);
          border-radius: 50%;
          animation: separator-pulse 2s infinite ease-out;
          opacity: 0;
        }

        @keyframes separator-pulse {
          0% {
            transform: scale(0.6);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .section-separator-wrapper {
            margin: 2.5rem 0;
          }
          .separator-content {
            gap: 1rem;
            padding: 0 1.25rem;
            font-size: 0.7rem;
          }
        }
      `})]}),rt=({setActiveView:e})=>{let[t,n]=(0,_.useState)(``),[r,i]=(0,_.useState)(sessionStorage.getItem(`adminToken`)),[a,o]=(0,_.useState)(!!sessionStorage.getItem(`adminToken`)),[s,c]=(0,_.useState)(`stats`),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)([]),[v,y]=(0,_.useState)(!1),[x,ee]=(0,_.useState)(null),[S,C]=(0,_.useState)({title:``,slug:``,summary:``,content:``,category:`Backend`,readTime:`5 min read`,tags:``,keyTakeaways:``,published:!1}),[te,ne]=(0,_.useState)([]),[re,w]=(0,_.useState)([]),T=()=>{let e=sessionStorage.getItem(`adminToken`)||r;return{"Content-Type":`application/json`,Authorization:e?`Bearer ${e}`:``}},ie=async e=>{e.preventDefault(),u(null),f(!0);try{let e=await fetch(`/api/admin/login`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({password:t})}),n=await e.json();if(e.ok&&(n.token||n.success)){let e=n.token||`authenticated`;sessionStorage.setItem(`adminToken`,e),i(e),o(!0)}else u(n.message||`Authentication failed. Incorrect password.`)}catch(e){console.error(e),u(`Connection failed. Make sure the backend server is running.`)}finally{f(!1)}},E=()=>{sessionStorage.removeItem(`adminToken`),i(null),o(!1)},oe=async()=>{f(!0);try{let e=await fetch(`/api/admin/stats`,{headers:T()});if(e.ok)m(await e.json());else{let e=await fetch(`/api/stats`,{headers:T()});e.ok&&m(await e.json())}}catch(e){console.error(`Error fetching stats:`,e)}finally{f(!1)}},se=async()=>{try{let e=await fetch(`/api/admin/blogs`,{headers:T()});e.ok&&g(await e.json())}catch(e){console.error(`Error fetching blogs:`,e)}},ce=async()=>{try{let e=await fetch(`/api/admin/comments`,{headers:T()});e.ok&&ne(await e.json())}catch(e){console.error(`Error fetching comments:`,e)}},D=async()=>{try{let e=await fetch(`/api/admin/messages`,{headers:T()});e.ok&&w(await e.json())}catch(e){console.error(`Error fetching messages:`,e)}};(0,_.useEffect)(()=>{a&&(s===`stats`?oe():s===`blogs`?se():s===`comments`?ce():s===`inbox`&&D())},[a,s]);let de=async e=>{e.preventDefault(),u(null),f(!0);let t=!!x,n=x?.id||x?._id||x?.slug,r=t?`/api/admin/blogs/${n}`:`/api/admin/blogs`,i=t?`PUT`:`POST`;try{let e=await fetch(r,{method:i,headers:T(),body:JSON.stringify(S)});if(e.ok)y(!1),ee(null),C({title:``,slug:``,summary:``,content:``,category:`Backend`,readTime:`5 min read`}),se();else{if(t&&(await fetch(`/api/admin/blogs`,{method:`PUT`,headers:T(),body:JSON.stringify({...S,id:n})})).ok){y(!1),ee(null),C({title:``,slug:``,summary:``,content:``,category:`Backend`,readTime:`5 min read`}),se(),f(!1);return}u((await e.json()).message||`Failed to save blog post.`)}}catch(e){console.error(e),u(`Connection failed. Could not save blog post.`)}finally{f(!1)}},fe=e=>{ee(e),C({title:e.title,slug:e.slug,summary:e.summary,content:e.content,category:e.category,readTime:e.readTime,tags:e.tags||``,keyTakeaways:e.keyTakeaways||``,published:e.published??!1}),y(!0)},k=async e=>{let t=e.id||e._id||e.slug;if(window.confirm(`Are you sure you want to delete "${e.title}"?`))try{(await fetch(`/api/admin/blogs/${t}`,{method:`DELETE`,headers:T()})).ok?se():alert(`Failed to delete blog post.`)}catch(e){console.error(e),alert(`Connection failed. Could not delete blog post.`)}},A=async e=>{let t=e.id||e._id;try{let e=await fetch(`/api/admin/comments/${t}/approve`,{method:`PUT`,headers:T()});e.ok||(e=await fetch(`/api/admin/comments/${t}`,{method:`PUT`,headers:T(),body:JSON.stringify({approved:!0})})),e.ok||(e=await fetch(`/api/admin/comments/${t}/approve`,{method:`POST`,headers:T()})),e.ok?ce():alert(`Failed to approve comment.`)}catch(e){console.error(e),alert(`Error connecting to comment approval endpoint.`)}},pe=async e=>{let t=e.id||e._id;if(window.confirm(`Delete this comment permanently?`))try{(await fetch(`/api/admin/comments/${t}`,{method:`DELETE`,headers:T()})).ok?ce():alert(`Failed to delete comment.`)}catch(e){console.error(e),alert(`Error connecting to comment deletion endpoint.`)}},he=async e=>{let t=e.id||e._id;if(window.confirm(`Delete this message permanently?`))try{(await fetch(`/api/admin/messages/${t}`,{method:`DELETE`,headers:T()})).ok?D():alert(`Failed to delete message.`)}catch(e){console.error(e),alert(`Error connecting to message deletion endpoint.`)}},ge=e=>e.toLowerCase().replace(/[^a-z0-9 -]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`),_e=e=>{let t=e.target.value;C(e=>({...e,title:t,slug:ge(t)}))},ve=()=>!p||!p.referrals?[]:Array.isArray(p.referrals)?p.referrals:Object.entries(p.referrals).map(([e,t])=>({referrer:e||`Direct / None`,count:t})).sort((e,t)=>t.count-e.count),xe=()=>{if(!p)return[];let e=p.browsers||p.userAgents;return e?Array.isArray(e)?e.map(e=>({browser:e.browser||e.userAgent||`Unknown`,count:e.count||0})):Object.entries(e).map(([e,t])=>({browser:e||`Unknown`,count:t})).sort((e,t)=>t.count-e.count):[]};return a?(0,b.jsxs)(`section`,{className:`admin-console-section animate-fade-in`,children:[(0,b.jsxs)(`div`,{className:`container`,children:[(0,b.jsxs)(`header`,{className:`console-main-header`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`console-badge font-mono`,children:`// SECURE_SESSION_ACTIVE`}),(0,b.jsx)(`h1`,{className:`console-title font-sans`,children:`Admin Control Console`})]}),(0,b.jsxs)(`div`,{className:`console-actions`,children:[(0,b.jsxs)(`button`,{className:`btn-secondary font-mono`,onClick:()=>e(`home`),children:[(0,b.jsx)(ye,{size:14,style:{marginRight:`0.4rem`}}),` VIEW_SITE`]}),(0,b.jsxs)(`button`,{className:`btn-secondary logout-btn font-mono`,onClick:E,children:[(0,b.jsx)(we,{size:14,style:{marginRight:`0.4rem`}}),` TERMINATE`]})]})]}),(0,b.jsxs)(`div`,{className:`admin-grid-layout`,children:[(0,b.jsxs)(`aside`,{className:`admin-sidebar glass-card font-mono`,children:[(0,b.jsxs)(`button`,{className:`sidebar-nav-item ${s===`stats`?`active`:``}`,onClick:()=>{c(`stats`),y(!1)},children:[(0,b.jsx)(le,{size:16}),` `,(0,b.jsx)(`span`,{children:`01_METRICS`})]}),(0,b.jsxs)(`button`,{className:`sidebar-nav-item ${s===`blogs`?`active`:``}`,onClick:()=>c(`blogs`),children:[(0,b.jsx)(be,{size:16}),` `,(0,b.jsx)(`span`,{children:`02_BLOG_CRUD`})]}),(0,b.jsxs)(`button`,{className:`sidebar-nav-item ${s===`comments`?`active`:``}`,onClick:()=>{c(`comments`),y(!1)},children:[(0,b.jsx)(Ee,{size:16}),` `,(0,b.jsx)(`span`,{children:`03_COMMENTS`})]}),(0,b.jsxs)(`button`,{className:`sidebar-nav-item ${s===`inbox`?`active`:``}`,onClick:()=>{c(`inbox`),y(!1)},children:[(0,b.jsx)(Ne,{size:16}),` `,(0,b.jsx)(`span`,{children:`04_INBOX_MESSAGES`})]})]}),(0,b.jsxs)(`main`,{className:`admin-dashboard-area glass-card`,children:[s===`stats`&&(0,b.jsxs)(`div`,{className:`tab-view-container`,children:[(0,b.jsxs)(`div`,{className:`tab-title-row`,children:[(0,b.jsx)(`h2`,{className:`tab-heading font-mono`,children:`// SYSTEM_METRICS`}),(0,b.jsx)(`button`,{className:`btn-secondary refresh-btn`,onClick:oe,disabled:d,children:(0,b.jsx)(Ae,{size:14,className:d?`spin`:``})})]}),(0,b.jsxs)(`div`,{className:`stats-quick-metrics`,children:[(0,b.jsxs)(`div`,{className:`metric-box glass-card`,children:[(0,b.jsx)(`div`,{className:`metric-label font-mono`,children:`TOTAL_TRAFFIC`}),(0,b.jsx)(`div`,{className:`metric-val font-mono`,children:p?p.visitsCount||p.totalVisits||0:`0`}),(0,b.jsx)(`div`,{className:`metric-description`,children:`Total system views tracked in database.`})]}),(0,b.jsxs)(`div`,{className:`metric-box glass-card`,children:[(0,b.jsx)(`div`,{className:`metric-label font-mono`,children:`ACTIVE_REFERRERS`}),(0,b.jsx)(`div`,{className:`metric-val font-mono`,children:ve().length}),(0,b.jsx)(`div`,{className:`metric-description`,children:`Unique tracking source referrers.`})]})]}),(0,b.jsxs)(`div`,{className:`stats-detailed-grid`,children:[(0,b.jsxs)(`div`,{className:`stats-card glass-card`,children:[(0,b.jsx)(`h3`,{className:`stats-card-title font-mono`,children:`REFERRALS_SUMMARY`}),(0,b.jsx)(`div`,{className:`stats-list`,children:ve().length===0?(0,b.jsx)(`div`,{className:`empty-state font-mono`,children:`NO_REFERRER_DATA`}):ve().map((e,t)=>(0,b.jsxs)(`div`,{className:`stats-item-row font-mono`,children:[(0,b.jsx)(`span`,{className:`stats-item-label truncate`,title:e.referrer,children:e.referrer}),(0,b.jsxs)(`span`,{className:`stats-item-count`,children:[e.count,` views`]})]},t))})]}),(0,b.jsxs)(`div`,{className:`stats-card glass-card`,children:[(0,b.jsx)(`h3`,{className:`stats-card-title font-mono`,children:`BROWSERS_USER_AGENTS`}),(0,b.jsx)(`div`,{className:`stats-list`,children:xe().length===0?(0,b.jsx)(`div`,{className:`empty-state font-mono`,children:`NO_UA_DATA`}):xe().map((e,t)=>(0,b.jsxs)(`div`,{className:`stats-item-row font-mono`,children:[(0,b.jsx)(`span`,{className:`stats-item-label truncate`,title:e.browser,children:e.browser}),(0,b.jsxs)(`span`,{className:`stats-item-count`,children:[e.count,` hits`]})]},t))})]})]})]}),s===`blogs`&&(0,b.jsx)(`div`,{className:`tab-view-container`,children:v?(0,b.jsxs)(`div`,{className:`blog-editor-view`,children:[(0,b.jsxs)(`div`,{className:`tab-title-row`,children:[(0,b.jsx)(`h2`,{className:`tab-heading font-mono`,children:x?`// EDIT_BLOG_POST`:`// PUBLISH_NEW_BLOG`}),(0,b.jsxs)(`button`,{className:`btn-secondary font-mono`,onClick:()=>y(!1),children:[(0,b.jsx)(ae,{size:14,style:{marginRight:`0.4rem`}}),` CANCEL`]})]}),(0,b.jsxs)(`form`,{onSubmit:de,className:`blog-editor-form`,children:[l&&(0,b.jsx)(`div`,{className:`form-error font-mono`,children:l}),(0,b.jsxs)(`div`,{className:`editor-grid`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`blog-title`,className:`font-mono`,children:`POST_TITLE`}),(0,b.jsx)(`input`,{type:`text`,id:`blog-title`,value:S.title,onChange:_e,required:!0,placeholder:`e.g. Architecting Distributed Pipelines`,className:`form-input`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`blog-slug`,className:`font-mono`,children:`URL_SLUG`}),(0,b.jsx)(`input`,{type:`text`,id:`blog-slug`,value:S.slug,onChange:e=>C(t=>({...t,slug:ge(e.target.value)})),required:!0,placeholder:`e.g. architecting-distributed-pipelines`,className:`form-input font-mono`})]})]}),(0,b.jsxs)(`div`,{className:`editor-grid`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`blog-category`,className:`font-mono`,children:`CATEGORY`}),(0,b.jsx)(`input`,{type:`text`,id:`blog-category`,value:S.category,onChange:e=>C(t=>({...t,category:e.target.value})),required:!0,placeholder:`e.g. Backend, AI & Automation, Systems`,className:`form-input`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`blog-readtime`,className:`font-mono`,children:`ESTIMATED_READ_TIME`}),(0,b.jsx)(`input`,{type:`text`,id:`blog-readtime`,value:S.readTime,onChange:e=>C(t=>({...t,readTime:e.target.value})),required:!0,placeholder:`e.g. 5 min read`,className:`form-input font-mono`})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`blog-summary`,className:`font-mono`,children:`POST_SUMMARY_ABSTRACT (SEO Meta Description)`}),(0,b.jsx)(`input`,{type:`text`,id:`blog-summary`,value:S.summary,onChange:e=>C(t=>({...t,summary:e.target.value})),required:!0,placeholder:`Provide a brief description sentence. Used for SEO meta descriptions.`,className:`form-input`})]}),(0,b.jsxs)(`div`,{className:`editor-grid`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`blog-tags`,className:`font-mono`,children:`SEO_KEYWORDS_TAGS (Comma Separated)`}),(0,b.jsx)(`input`,{type:`text`,id:`blog-tags`,value:S.tags||``,onChange:e=>C(t=>({...t,tags:e.target.value})),placeholder:`e.g. .NET 10, API Design, System Architecture`,className:`form-input`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`blog-takeaways`,className:`font-mono`,children:`GEO_KEY_TAKEAWAYS (LLM Generative Summary)`}),(0,b.jsx)(`textarea`,{id:`blog-takeaways`,value:S.keyTakeaways||``,onChange:e=>C(t=>({...t,keyTakeaways:e.target.value})),rows:3,placeholder:`3-4 bullet points summarizing the core value. Helps Gemini/ChatGPT index your post.`,className:`form-input font-mono text-area-editor`,style:{minHeight:`90px`,padding:`0.50rem 0.75rem`}})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`blog-content`,className:`font-mono`,children:`POST_CONTENT (Markdown / Text)`}),(0,b.jsx)(`textarea`,{id:`blog-content`,value:S.content,onChange:e=>C(t=>({...t,content:e.target.value})),required:!0,rows:12,placeholder:`Write the full post body content. Paragraphs separated by double linebreaks will render cleanly.`,className:`form-input font-mono text-area-editor`})]}),(0,b.jsxs)(`div`,{className:`form-group checkbox-group`,style:{display:`flex`,flexDirection:`row`,alignItems:`center`,gap:`0.5rem`,marginTop:`0.5rem`,width:`auto`},children:[(0,b.jsx)(`input`,{type:`checkbox`,id:`blog-published`,checked:S.published||!1,onChange:e=>C(t=>({...t,published:e.target.checked})),style:{width:`18px`,height:`18px`,cursor:`pointer`,margin:0}}),(0,b.jsx)(`label`,{htmlFor:`blog-published`,className:`font-mono`,style:{cursor:`pointer`,fontSize:`0.85rem`,color:`var(--text-primary)`,textTransform:`none`},children:`PUBLISHED (Make this post visible on the live website)`})]}),(0,b.jsx)(`div`,{className:`form-actions-row`,children:(0,b.jsx)(`button`,{type:`submit`,className:`btn-primary font-mono`,disabled:d,children:d?`SAVING_POST...`:`PUBLISH_COMMIT ➔`})})]})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`tab-title-row`,children:[(0,b.jsx)(`h2`,{className:`tab-heading font-mono`,children:`// BLOG_MANAGER`}),(0,b.jsxs)(`button`,{className:`btn-primary font-mono`,onClick:()=>{ee(null),C({title:``,slug:``,summary:``,content:``,category:`Backend`,readTime:`5 min read`,tags:``,keyTakeaways:``,published:!1}),y(!0)},children:[(0,b.jsx)(ke,{size:14,style:{marginRight:`0.4rem`}}),` NEW_POST`]})]}),(0,b.jsx)(`div`,{className:`blogs-dashboard-list`,children:h.length===0?(0,b.jsx)(`div`,{className:`empty-dashboard-state font-mono`,children:`NO_BLOG_POSTS_FOUND. CREATE_ONE_TO_BEGIN.`}):h.map(e=>(0,b.jsxs)(`div`,{className:`blog-dashboard-item glass-card`,children:[(0,b.jsxs)(`div`,{className:`blog-dashboard-details`,children:[(0,b.jsx)(`span`,{className:`blog-category-tag font-mono`,children:e.category}),(0,b.jsx)(`h3`,{className:`blog-dashboard-title`,children:e.title}),(0,b.jsx)(`p`,{className:`blog-dashboard-summary`,children:e.summary}),(0,b.jsxs)(`div`,{className:`blog-dashboard-meta font-mono`,children:[(0,b.jsxs)(`span`,{children:[(0,b.jsx)(O,{size:12}),` `,e.date||`Static/Loaded`]}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(me,{size:12}),` `,e.readTime]}),(0,b.jsxs)(`span`,{children:[`slug: `,(0,b.jsx)(`code`,{children:e.slug})]})]})]}),(0,b.jsxs)(`div`,{className:`blog-dashboard-actions`,children:[(0,b.jsx)(`button`,{className:`btn-secondary action-btn-edit`,onClick:()=>fe(e),title:`Edit Post`,children:(0,b.jsx)(Pe,{size:14})}),(0,b.jsx)(`button`,{className:`btn-secondary action-btn-delete`,onClick:()=>k(e),title:`Delete Post`,children:(0,b.jsx)(Le,{size:14})})]})]},e.id||e._id||e.slug))})]})}),s===`comments`&&(0,b.jsxs)(`div`,{className:`tab-view-container`,children:[(0,b.jsxs)(`div`,{className:`tab-title-row`,children:[(0,b.jsx)(`h2`,{className:`tab-heading font-mono`,children:`// COMMENT_MODERATOR`}),(0,b.jsx)(`button`,{className:`btn-secondary refresh-btn`,onClick:ce,children:(0,b.jsx)(Ae,{size:14})})]}),(0,b.jsx)(`div`,{className:`comments-moderator-list`,children:te.length===0?(0,b.jsx)(`div`,{className:`empty-dashboard-state font-mono`,children:`NO_COMMENTS_AVAILABLE_FOR_MODERATION.`}):te.map(e=>(0,b.jsxs)(`div`,{className:`comment-moderator-item glass-card ${e.approved?`approved`:`pending`}`,children:[(0,b.jsxs)(`div`,{className:`comment-moderator-meta`,children:[(0,b.jsxs)(`div`,{className:`comment-author-badge`,children:[(0,b.jsx)(`span`,{className:`comment-author-name font-mono`,children:e.author}),(0,b.jsx)(`span`,{className:`comment-status-pill font-mono ${e.approved?`approved`:`pending`}`,children:e.approved?`APPROVED`:`PENDING`})]}),(0,b.jsxs)(`div`,{className:`comment-post-title font-mono truncate`,children:[`post: `,(0,b.jsx)(`code`,{children:e.postSlug||e.blogId||e.postId||`General`})]}),e.date||e.createdAt?(0,b.jsx)(`div`,{className:`comment-date-val font-mono`,children:new Date(e.date||e.createdAt||``).toLocaleString()}):null]}),(0,b.jsx)(`p`,{className:`comment-moderator-content font-mono`,children:e.content}),(0,b.jsxs)(`div`,{className:`comment-moderator-actions`,children:[!e.approved&&(0,b.jsxs)(`button`,{className:`btn-primary action-btn-approve font-mono`,onClick:()=>A(e),children:[(0,b.jsx)(ue,{size:14,style:{marginRight:`0.3rem`}}),` APPROVE`]}),(0,b.jsxs)(`button`,{className:`btn-secondary action-btn-delete-comment font-mono`,onClick:()=>pe(e),children:[(0,b.jsx)(Le,{size:14,style:{marginRight:`0.3rem`}}),` DELETE`]})]})]},e.id||e._id))})]}),s===`inbox`&&(0,b.jsxs)(`div`,{className:`tab-view-container`,children:[(0,b.jsxs)(`div`,{className:`tab-title-row`,children:[(0,b.jsx)(`h2`,{className:`tab-heading font-mono`,children:`// INBOX_MESSAGES`}),(0,b.jsx)(`button`,{className:`btn-secondary refresh-btn`,onClick:D,children:(0,b.jsx)(Ae,{size:14})})]}),(0,b.jsx)(`div`,{className:`inbox-messages-list`,children:re.length===0?(0,b.jsx)(`div`,{className:`empty-dashboard-state font-mono`,children:`NO_INCOMING_MESSAGES_FOUND.`}):re.map(e=>(0,b.jsxs)(`div`,{className:`inbox-message-item glass-card`,children:[(0,b.jsxs)(`div`,{className:`inbox-message-header`,children:[(0,b.jsxs)(`div`,{className:`inbox-sender-info`,children:[(0,b.jsx)(`span`,{className:`inbox-sender-name font-sans`,children:e.name}),(0,b.jsxs)(`a`,{href:`mailto:${e.email}`,className:`inbox-sender-email font-mono`,children:[`<`,e.email,`>`]})]}),e.date||e.createdAt?(0,b.jsx)(`div`,{className:`inbox-message-date font-mono`,children:new Date(e.date||e.createdAt||``).toLocaleString()}):null]}),(0,b.jsx)(`div`,{className:`inbox-message-body font-mono`,children:e.message}),(0,b.jsx)(`div`,{className:`inbox-message-footer`,children:(0,b.jsxs)(`button`,{className:`btn-secondary delete-msg-btn font-mono`,onClick:()=>he(e),children:[(0,b.jsx)(Le,{size:13,style:{marginRight:`0.3rem`}}),` PURGE_RECORD`]})})]},e.id||e._id))})]})]})]})]}),(0,b.jsx)(`style`,{children:`
        .admin-console-section {
          padding-top: 8rem;
          padding-bottom: 6rem;
          min-height: 90vh;
        }
        .console-main-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .console-badge {
          color: var(--accent-color);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .console-title {
          font-size: 2.25rem;
          color: var(--text-primary);
        }
        .console-actions {
          display: flex;
          gap: 1rem;
        }
        .logout-btn:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }

        /* Layout Grid */
        .admin-grid-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 2rem;
          align-items: start;
        }

        /* Sidebar styling */
        .admin-sidebar {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.5rem 1rem;
          border-color: rgba(255, 255, 255, 0.05);
        }
        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          padding: 0.85rem 1.25rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.8rem;
          text-align: left;
          transition: var(--transition-fast);
          width: 100%;
        }
        .sidebar-nav-item:hover {
          color: var(--accent-color);
          background: rgba(102, 217, 237, 0.03);
          border-color: rgba(102, 217, 237, 0.08);
        }
        .sidebar-nav-item.active {
          color: var(--bg-dark);
          background: var(--accent-color);
          border-color: var(--accent-color);
          font-weight: 600;
          box-shadow: 0 0 15px var(--accent-glow);
        }

        /* Dashboard content container */
        .admin-dashboard-area {
          min-height: 500px;
          border-color: rgba(102, 217, 237, 0.1);
          padding: 2.5rem;
        }
        .tab-view-container {
          animation: fadeIn 0.3s ease-out;
        }
        .tab-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .tab-heading {
          font-size: 1.25rem;
          color: var(--accent-color);
          letter-spacing: 0.05em;
        }
        .refresh-btn {
          width: 32px;
          height: 32px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        /* Stats Tab Specifics */
        .stats-quick-metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .metric-box {
          padding: 1.5rem;
          border-color: rgba(255, 255, 255, 0.04);
        }
        .metric-box:hover {
          transform: none;
          box-shadow: none;
        }
        .metric-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }
        .metric-val {
          font-size: 2.25rem;
          color: var(--accent-color);
          text-shadow: 0 0 10px var(--accent-glow);
          font-weight: 700;
        }
        .metric-description {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }
        .stats-detailed-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .stats-card {
          padding: 1.5rem;
          border-color: rgba(255, 255, 255, 0.04);
        }
        .stats-card:hover {
          transform: none;
          box-shadow: none;
        }
        .stats-card-title {
          font-size: 0.85rem;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }
        .stats-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-height: 300px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }
        .stats-item-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          padding: 0.5rem 0.75rem;
          background: rgba(7, 9, 14, 0.4);
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }
        .stats-item-label {
          color: var(--text-secondary);
          max-width: 70%;
        }
        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .stats-item-count {
          color: var(--accent-color);
        }
        .empty-state {
          color: var(--text-muted);
          font-size: 0.75rem;
          text-align: center;
          padding: 2rem 0;
        }

        /* Blog CRUD Tab */
        .blogs-dashboard-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .blog-dashboard-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-color: rgba(255, 255, 255, 0.04);
          gap: 1.5rem;
        }
        .blog-dashboard-item:hover {
          transform: none;
          box-shadow: none;
          border-color: rgba(102, 217, 237, 0.15);
        }
        .blog-dashboard-details {
          flex: 1;
        }
        .blog-category-tag {
          font-size: 0.7rem;
          color: var(--accent-color);
          background: rgba(102, 217, 237, 0.05);
          padding: 0.15rem 0.5rem;
          border-radius: 3px;
          border: 1px solid rgba(102, 217, 237, 0.15);
        }
        .blog-dashboard-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-top: 0.5rem;
          margin-bottom: 0.35rem;
        }
        .blog-dashboard-summary {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .blog-dashboard-meta {
          display: flex;
          gap: 1.5rem;
          font-size: 0.7rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }
        .blog-dashboard-meta span {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }
        .blog-dashboard-meta code {
          color: var(--accent-color);
        }
        .blog-dashboard-actions {
          display: flex;
          gap: 0.5rem;
        }
        .blog-dashboard-actions button {
          width: 36px;
          height: 36px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .action-btn-edit:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          background: rgba(102, 217, 237, 0.05);
        }
        .action-btn-delete:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }
        .empty-dashboard-state {
          text-align: center;
          padding: 3rem 0;
          color: var(--text-muted);
          font-size: 0.8rem;
          border: 1px dashed var(--border-color);
          border-radius: 6px;
        }

        /* Blog Editor Form */
        .blog-editor-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
        }
        .editor-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          width: 100%;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }
        .form-group label {
          font-size: 0.75rem;
          color: var(--accent-color);
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        .form-input {
          background: rgba(7, 9, 14, 0.6);
          border: 1px solid rgba(102, 217, 237, 0.2);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          width: 100%;
        }
        .form-input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px rgba(102, 217, 237, 0.15);
          background: rgba(7, 9, 14, 0.8);
        }
        .form-input::placeholder {
          color: var(--text-muted);
          opacity: 0.6;
        }
        .text-area-editor {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.5;
          min-height: 250px;
          resize: vertical;
        }
        .form-actions-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 1rem;
        }

        /* Comments Moderation */
        .comments-moderator-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .comment-moderator-item {
          padding: 1.5rem;
          border-color: rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .comment-moderator-item:hover {
          transform: none;
          box-shadow: none;
        }
        .comment-moderator-item.pending {
          border-left: 3px solid #eab308;
        }
        .comment-moderator-item.approved {
          border-left: 3px solid #22c55e;
        }
        .comment-moderator-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }
        .comment-author-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .comment-author-name {
          color: var(--text-primary);
          font-weight: 600;
        }
        .comment-status-pill {
          font-size: 0.6rem;
          padding: 0.1rem 0.4rem;
          border-radius: 3px;
        }
        .comment-status-pill.pending {
          background: rgba(234, 179, 8, 0.08);
          border: 1px solid rgba(234, 179, 8, 0.2);
          color: #facc15;
        }
        .comment-status-pill.approved {
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.2);
          color: #4ade80;
        }
        .comment-post-title {
          max-width: 250px;
        }
        .comment-post-title code {
          color: var(--accent-color);
        }
        .comment-moderator-content {
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(7, 9, 14, 0.3);
          padding: 0.75rem 1rem;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          line-height: 1.4;
        }
        .comment-moderator-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
        }
        .action-btn-approve {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          border-radius: 4px;
        }
        .action-btn-delete-comment {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          border-radius: 4px;
        }
        .action-btn-delete-comment:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }

        /* Inbox messages styling */
        .inbox-messages-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .inbox-message-item {
          padding: 1.5rem;
          border-color: rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .inbox-message-item:hover {
          transform: none;
          box-shadow: none;
          border-color: rgba(102, 217, 237, 0.15);
        }
        .inbox-message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .inbox-sender-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .inbox-sender-name {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 1.05rem;
        }
        .inbox-sender-email {
          font-size: 0.75rem;
          color: var(--accent-color);
          text-decoration: underline;
        }
        .inbox-message-date {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .inbox-message-body {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          background: rgba(7, 9, 14, 0.4);
          padding: 1rem 1.25rem;
          border-radius: 6px;
          border: 1px solid var(--border-color);
          white-space: pre-wrap;
        }
        .inbox-message-footer {
          display: flex;
          justify-content: flex-end;
        }
        .delete-msg-btn {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          border-radius: 4px;
        }
        .delete-msg-btn:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Layout adjustments */
        @media (max-width: 900px) {
          .admin-grid-layout {
            grid-template-columns: 1fr;
          }
          .admin-sidebar {
            flex-direction: row;
            overflow-x: auto;
            padding: 1rem;
            gap: 0.5rem;
          }
          .sidebar-nav-item {
            white-space: nowrap;
            width: auto;
          }
          .stats-detailed-grid {
            grid-template-columns: 1fr;
          }
          .editor-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `})]}):(0,b.jsxs)(`section`,{className:`admin-login-section animate-fade-in`,children:[(0,b.jsxs)(`div`,{className:`container login-container`,children:[(0,b.jsxs)(`button`,{className:`btn-secondary back-btn font-mono`,onClick:()=>e(`home`),children:[(0,b.jsx)(ae,{size:14,style:{marginRight:`0.4rem`}}),` BACK_TO_HOME`]}),(0,b.jsxs)(`div`,{className:`glass-card login-card`,children:[(0,b.jsxs)(`div`,{className:`login-header`,children:[(0,b.jsx)(`div`,{className:`lock-icon-container`,children:(0,b.jsx)(Ce,{className:`lock-icon`,size:28})}),(0,b.jsx)(`h2`,{className:`login-title font-mono`,children:`ADMIN_GATEWAY`}),(0,b.jsx)(`p`,{className:`login-subtitle`,children:`Provide security token to authenticate session.`})]}),(0,b.jsxs)(`form`,{onSubmit:ie,className:`login-form`,children:[l&&(0,b.jsx)(`div`,{className:`form-error font-mono`,children:l}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{htmlFor:`gatekeeper-password`,className:`font-mono`,children:`ACCESS_PASSWORD`}),(0,b.jsx)(`input`,{type:`password`,id:`gatekeeper-password`,value:t,onChange:e=>n(e.target.value),placeholder:`••••••••••••••••`,className:`form-input text-center font-mono`,required:!0,autoFocus:!0})]}),(0,b.jsx)(`button`,{type:`submit`,className:`btn-primary login-submit-btn font-mono`,disabled:d,children:d?`AUTHENTICATING...`:`INITIALIZE_HANDSHAKE ➔`})]})]})]}),(0,b.jsx)(`style`,{children:`
          .admin-login-section {
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          .login-container {
            max-width: 440px;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .login-card {
            padding: 3rem 2.5rem;
            border-color: rgba(102, 217, 237, 0.15);
            box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px -5px rgba(102, 217, 237, 0.1);
          }
          .login-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          .lock-icon-container {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: rgba(102, 217, 237, 0.08);
            border: 1px solid rgba(102, 217, 237, 0.25);
            color: var(--accent-color);
            margin-bottom: 1rem;
            box-shadow: 0 0 15px rgba(102, 217, 237, 0.1);
          }
          .login-title {
            font-size: 1.5rem;
            color: var(--text-primary);
            letter-spacing: 0.1em;
            margin-bottom: 0.5rem;
          }
          .login-subtitle {
            font-size: 0.8rem;
            color: var(--text-muted);
          }
          .login-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .text-center {
            text-align: center;
          }
          .form-error {
            background: rgba(239, 68, 68, 0.08);
            border: 1px solid rgba(239, 68, 68, 0.25);
            color: #f87171;
            padding: 0.75rem;
            border-radius: 6px;
            font-size: 0.75rem;
            text-align: center;
          }
          .login-submit-btn {
            width: 100%;
            justify-content: center;
          }
        `})]})},it=JSON.parse(`[{"id":1,"title":"Python + LLM foundations","weeks_range":"Weeks 1–4","hours":"~40 hours","badge_text":"Start here","weeks":[{"id":1,"month_id":1,"week_number":1,"title":"Python core","focus_hours":"Mon 1 Jun · 10 hours total · translation not learning","csharp_mindset":"<p><strong>C# dev mindset:</strong> Python has no types by default (add them with hints). No semicolons. Indentation IS the block. <code>def</code> = <code>void/method</code>. <code>self</code> = <code>this</code>. <code>dict</code> = <code>Dictionary</code>. <code>list</code> = <code>List</code>. That's 80% of the translation work.</p>","weekly_goal":"By Sunday night you can write a Python class, call a function with typed parameters, read/write a JSON file, and run a script from the terminal. Nothing more.","days":[{"id":100,"week_id":1,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w1_d0_t1","day_id":100,"task_num":1,"content":"Install Python 3.12 + VS Code + Python extension (15 min)"},{"id":"w1_d0_t2","day_id":100,"task_num":2,"content":"Watch Corey Schafer: Python Tutorial for Beginners #1 and #2 — variables, strings, numbers (30 min)"},{"id":"w1_d0_t3","day_id":100,"task_num":3,"content":"Open a .py file and replicate every example as you watch (15 min)"}]},{"id":101,"week_id":1,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w1_d1_t1","day_id":101,"task_num":1,"content":"Watch Corey Schafer #3: Lists, Tuples — note how they differ from List<T> (20 min)"},{"id":"w1_d1_t2","day_id":101,"task_num":2,"content":"Write a function that takes a patient name + age and prints a formatted summary C# → Python"},{"id":"w1_d1_t3","day_id":101,"task_num":3,"content":"Add type hints: def greet(name: str, age: int) -> str"}]},{"id":102,"week_id":1,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w1_d2_t1","day_id":102,"task_num":1,"content":"Watch Corey Schafer #4: Dicts — your replacement for Dictionary<string,object> (20 min)"},{"id":"w1_d2_t2","day_id":102,"task_num":2,"content":"Build a Patient dict: {\\"name\\": \\"Ali\\", \\"age\\": 34, \\"insurance\\": \\"NHIF\\"}"},{"id":"w1_d2_t3","day_id":102,"task_num":3,"content":"Write a function that reads a list of patient dicts and filters by insurance type"}]},{"id":103,"week_id":1,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w1_d3_t1","day_id":103,"task_num":1,"content":"Watch Corey Schafer #5 + #6: Functions + conditionals (30 min)"},{"id":"w1_d3_t2","day_id":103,"task_num":2,"content":"Note: elif not else if. is None not == null. Write 5 examples (20 min)"},{"id":"w1_d3_t3","day_id":103,"task_num":3,"content":"Read: Python type hints cheat sheet — bookmark it (10 min)"}]},{"id":104,"week_id":1,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w1_d4_t1","day_id":104,"task_num":1,"content":"Watch Corey Schafer #7: Classes + OOP (20 min)"},{"id":"w1_d4_t2","day_id":104,"task_num":2,"content":"Convert your patient dict into a Patient class with __init__, a method get_summary()"},{"id":"w1_d4_t3","day_id":104,"task_num":3,"content":"self = this, __init__ = constructor. Write it. Run it."}]},{"id":105,"week_id":1,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w1_d5_t1","day_id":105,"task_num":1,"content":"Setup: create a virtual env python -m venv .venv, activate it, install nothing yet (20 min)"},{"id":"w1_d5_t2","day_id":105,"task_num":2,"content":"Build patient_registry.py — a PatientRegistry class that holds a list of Patient objects, can add/find/list them (60 min)"},{"id":"w1_d5_t3","day_id":105,"task_num":3,"content":"Read/write to a JSON file: json.dump() to save, json.load() to restore (40 min)"},{"id":"w1_d5_t4","day_id":105,"task_num":4,"content":"Run it from terminal. Fix all errors. (60 min)"}]},{"id":106,"week_id":1,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w1_d6_t1","day_id":106,"task_num":1,"content":"Read back your code from the week — add docstrings to every function (\\"\\"\\"Does X\\"\\"\\")"},{"id":"w1_d6_t2","day_id":106,"task_num":2,"content":"Compare: write the same Patient class in C# side by side. See the 1:1 mapping."},{"id":"w1_d6_t3","day_id":106,"task_num":3,"content":"Push to a new GitHub repo called genai-journey. This is where all 6 months live."}]}]},{"id":2,"month_id":1,"week_number":2,"title":"Async + FastAPI","focus_hours":"10 hours · Poetry, pip, async/await, virtual environments, FastAPI basics","csharp_mindset":"<p><strong>C# dev mindset:</strong> <code>async/await</code> works the same conceptually but Python has a single event loop (like Node.js) not threads. <code>pip</code> = NuGet CLI. <code>Poetry</code> = your <code>.csproj</code> + NuGet combined. FastAPI = ASP.NET Minimal API but in 10 lines.</p>","weekly_goal":"By Sunday you have a running FastAPI server with 2 endpoints. You understand async/await in Python vs C#. You manage packages with Poetry. You never use the system Python again.","days":[{"id":200,"week_id":2,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w2_d0_t1","day_id":200,"task_num":1,"content":"Install Poetry: pip install poetry. Create a new project: poetry new ai-clinical (15 min)"},{"id":"w2_d0_t2","day_id":200,"task_num":2,"content":"Read: what's the difference between pip, venv, conda, and Poetry — one page, then forget the others (15 min)"},{"id":"w2_d0_t3","day_id":200,"task_num":3,"content":"Watch Corey Schafer: Modules and Pip (#9) — understand how imports work (30 min)"}]},{"id":201,"week_id":2,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w2_d1_t1","day_id":201,"task_num":1,"content":"Watch Corey Schafer: Decorators (#16) — FastAPI uses decorators for everything, you need this (30 min)"},{"id":"w2_d1_t2","day_id":201,"task_num":2,"content":"Write 5 examples using decorators: @property, custom decorator that logs function calls"},{"id":"w2_d1_t3","day_id":201,"task_num":3,"content":"Understand: @app.get(\\"/patients\\") is just a decorator registering a route handler"}]},{"id":202,"week_id":2,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w2_d2_t1","day_id":202,"task_num":1,"content":"Watch: Python async/await explained (TechWithTim or ArjanCodes) (30 min)"},{"id":"w2_d2_t2","day_id":202,"task_num":2,"content":"Write: an async function that pretends to fetch patient data (await asyncio.sleep(1))"},{"id":"w2_d2_t3","day_id":202,"task_num":3,"content":"Note: asyncio.run(main()) = app.Run(). Same pattern."}]},{"id":203,"week_id":2,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w2_d3_t1","day_id":203,"task_num":1,"content":"FastAPI official docs: First Steps — read and run hello world (20 min)"},{"id":"w2_d3_t2","day_id":203,"task_num":2,"content":"FastAPI: Path Parameters + Query Parameters — same as ASP.NET route params (20 min)"},{"id":"w2_d3_t3","day_id":203,"task_num":3,"content":"FastAPI: Pydantic models — this is your record / DTO class. (20 min)"}]},{"id":204,"week_id":2,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w2_d4_t1","day_id":204,"task_num":1,"content":"Build your first FastAPI app: main.py with a GET /health and POST /patient endpoint (30 min)"},{"id":"w2_d4_t2","day_id":204,"task_num":2,"content":"Define a PatientRequest Pydantic model with name, age, insurance fields"},{"id":"w2_d4_t3","day_id":204,"task_num":3,"content":"Run with uvicorn main:app --reload and open auto Swagger at /docs"}]},{"id":205,"week_id":2,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w2_d5_t1","day_id":205,"task_num":1,"content":"Extend your FastAPI app: add POST /analyze-symptoms endpoint — accepts a list of symptoms, returns a mock response for now (60 min)"},{"id":"w2_d5_t2","day_id":205,"task_num":2,"content":"Add error handling: HTTPException, what happens when input is invalid (30 min)"},{"id":"w2_d5_t3","day_id":205,"task_num":3,"content":"Add environment variables: create a .env file, load with python-dotenv (30 min)"},{"id":"w2_d5_t4","day_id":205,"task_num":4,"content":"Test all endpoints from Swagger UI. Write a simple test_main.py with pytest (60 min)"}]},{"id":206,"week_id":2,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w2_d6_t1","day_id":206,"task_num":1,"content":"Draw request lifecycle diagram. Same as your Blazor middleware mental model."},{"id":"w2_d6_t2","day_id":206,"task_num":2,"content":"Update your README.md in genai-journey: what you built, how to run it"},{"id":"w2_d6_t3","day_id":206,"task_num":3,"content":"Push everything. Week 3 starting point is this FastAPI project."}]}]},{"id":3,"month_id":1,"week_number":3,"title":"OpenAI + Claude APIs","focus_hours":"10 hours · chat completions, streaming, system prompts, calling from Python AND C#","csharp_mindset":"<p><strong>C# dev mindset:</strong> The OpenAI API is just an HTTP POST to <code>/v1/chat/completions</code>. You can call it with <code>HttpClient</code> in C# — no special SDK needed. The Python SDK is just a wrapper. Streaming = server-sent events, same as your existing Blazor streaming patterns.</p>","weekly_goal":"By Sunday you have a working FastAPI endpoint that calls an LLM and streams the response back. You've called the same API from C# too. Your AI Clinical Assistant is running end-to-end.","days":[{"id":300,"week_id":3,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w3_d0_t1","day_id":300,"task_num":1,"content":"Get your API key: platform.openai.com — add $5 credit. Store in .env. (10 min)"},{"id":"w3_d0_t2","day_id":300,"task_num":2,"content":"Read the OpenAI Chat Completions quickstart — understand: messages array, role: system/user/assistant, model, temperature (30 min)"},{"id":"w3_d0_t3","day_id":300,"task_num":3,"content":"Run the 10-line Python example from their docs. See a response. You're now an AI developer. (20 min)"}]},{"id":301,"week_id":3,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w3_d1_t1","day_id":301,"task_num":1,"content":"Write a llm_service.py module with one function: async def ask(system: str, user: str) -> str"},{"id":"w3_d1_t2","day_id":301,"task_num":2,"content":"Call it with a medical system prompt: \\"You are a clinical assistant. Be concise and factual.\\""},{"id":"w3_d1_t3","day_id":301,"task_num":3,"content":"Print the response. Change temperature from 0 to 1 — see what changes."}]},{"id":302,"week_id":3,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w3_d2_t1","day_id":302,"task_num":1,"content":"Add streaming: use stream=True, iterate the chunks, print each token as it arrives"},{"id":"w3_d2_t2","day_id":302,"task_num":2,"content":"Get a Claude API key: console.anthropic.com — free tier available (10 min)"},{"id":"w3_d2_t3","day_id":302,"task_num":3,"content":"Call Claude with the same prompt using the anthropic Python package. Compare the responses."}]},{"id":303,"week_id":3,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w3_d3_t1","day_id":303,"task_num":1,"content":"Read: OpenAI token pricing page. Understand: prompt tokens + completion tokens = cost. (20 min)"},{"id":"w3_d3_t2","day_id":303,"task_num":2,"content":"Read: the difference between gpt-4o, gpt-4o-mini, claude-sonnet (20 min)"},{"id":"w3_d3_t3","day_id":303,"task_num":3,"content":"NOW call the API from C#: use HttpClient to POST to OpenAI directly, no SDK. Parse the JSON response. (20 min)"}]},{"id":304,"week_id":3,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w3_d4_t1","day_id":304,"task_num":1,"content":"Wire your llm_service.py into your FastAPI POST /analyze-symptoms endpoint from Week 2"},{"id":"w3_d4_t2","day_id":304,"task_num":2,"content":"Build the system prompt: tell the LLM it's a clinical assistant, give it the symptoms, ask for possible conditions"},{"id":"w3_d4_t3","day_id":304,"task_num":3,"content":"Test it from Swagger UI with real symptom inputs."}]},{"id":305,"week_id":3,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w3_d5_t1","day_id":305,"task_num":1,"content":"Complete the AI Clinical Assistant: clean up the FastAPI app, add proper error handling for API failures (60 min)"},{"id":"w3_d5_t2","day_id":305,"task_num":2,"content":"Add a second endpoint: POST /insurance-check — takes patient + insurance type, returns coverage summary (60 min)"},{"id":"w3_d5_t3","day_id":305,"task_num":3,"content":"Add the ICD-10 suggester to your AKHSmart Blazor app — a button in ClaimDetails that calls Claude API from C# (60 min)"}]},{"id":306,"week_id":3,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w3_d6_t1","day_id":306,"task_num":1,"content":"Write down: what is a system prompt, why does it matter in your own words"},{"id":"w3_d6_t2","day_id":306,"task_num":2,"content":"Push: AI Clinical Assistant folder to genai-journey repo with a README"},{"id":"w3_d6_t3","day_id":306,"task_num":3,"content":"Push: the ICD-10 suggester commit to AKHSmart"}]}]},{"id":4,"month_id":1,"week_number":4,"title":"Prompt engineering & structured outputs","focus_hours":"10 hours · function calling, JSON mode, prompt patterns, Insurance Authorization project","csharp_mindset":"<p><strong>C# dev mindset:</strong> Function calling = you define a method signature (in JSON schema), the LLM decides when to \\"call\\" it and fills in the parameters. It never actually calls your function — it just returns a structured JSON saying \\"I want to call X with these args.\\" You then call your real function. Think of it as the LLM filling out a typed form.</p>","weekly_goal":"By Sunday you can make an LLM return reliable, structured JSON that you can map to a C# or Python object. You know 5 prompt patterns by name and when to use each. Your Insurance Authorization Assistant is done.","days":[{"id":400,"week_id":4,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w4_d0_t1","day_id":400,"task_num":1,"content":"Read: OpenAI Structured Outputs docs — response_format: { type: \\"json_schema\\" } (20 min)"},{"id":"w4_d0_t2","day_id":400,"task_num":2,"content":"Run the example: ask GPT to return a JSON object with specific fields. See how it never deviates. (20 min)"},{"id":"w4_d0_t3","day_id":400,"task_num":3,"content":"Read: Anthropic prompt engineering guide — focus on the \\"be specific\\" and \\"use XML tags\\" sections (20 min)"}]},{"id":401,"week_id":4,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w4_d1_t1","day_id":401,"task_num":1,"content":"Write a prompt that returns a structured authorization checklist in JSON: {\\"approved\\": bool, \\"reasons\\": [], \\"missing_documents\\": []}"},{"id":"w4_d1_t2","day_id":401,"task_num":2,"content":"Parse the JSON response into a Pydantic model: class AuthorizationResult(BaseModel)"},{"id":"w4_d1_t3","day_id":401,"task_num":3,"content":"If the parse fails — add a retry. This is real-world LLM reliability work."}]},{"id":402,"week_id":4,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w4_d2_t1","day_id":402,"task_num":1,"content":"Learn function calling: define a check_insurance_eligibility tool schema with patient_id and insurance_type params"},{"id":"w4_d2_t2","day_id":402,"task_num":2,"content":"When the LLM returns a tool_call, handle it: call your fake check_eligibility() function, return result to LLM"},{"id":"w4_d2_t3","day_id":402,"task_num":3,"content":"This is the foundation of agents. Understand the loop: LLM → tool call → your code → LLM again"}]},{"id":403,"week_id":4,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w4_d3_t1","day_id":403,"task_num":1,"content":"Learn 5 prompt patterns — write one example of each (45 min):"},{"id":"w4_d3_t2","day_id":403,"task_num":2,"content":"Zero-shot, Few-shot, Chain-of-thought, System persona, and XML tags"},{"id":"w4_d3_t3","day_id":403,"task_num":3,"content":"Test: which pattern gives the most reliable output for clinical data? (15 min)"}]},{"id":404,"week_id":4,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w4_d4_t1","day_id":404,"task_num":1,"content":"Start the Insurance Authorization Assistant: new FastAPI endpoint POST /authorization"},{"id":"w4_d4_t2","day_id":404,"task_num":2,"content":"Input model: patient name, diagnosis code, procedure, insurance type"},{"id":"w4_d4_t3","day_id":404,"task_num":3,"content":"Write system prompt using XML tags pattern + few-shot examples. Return structured JSON."}]},{"id":405,"week_id":4,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w4_d5_t1","day_id":405,"task_num":1,"content":"Complete Insurance Authorization Assistant — full endpoint, Pydantic model for output, proper error handling (90 min)"},{"id":"w4_d5_t2","day_id":405,"task_num":2,"content":"Test with 5 different inputs: NHIF, Jubilee, Staff insurance — tune the prompt. (45 min)"},{"id":"w4_d5_t3","day_id":405,"task_num":3,"content":"Improve ICD-10 suggester in AKHSmart: use structured output to return exactly 3 codes with confidence scores as JSON, not plain text (45 min)"}]},{"id":406,"week_id":4,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w4_d6_t1","day_id":406,"task_num":1,"content":"Month 1 retrospective: write 5 things you learned, 2 things that confused you, 1 thing you want to go deeper on"},{"id":"w4_d6_t2","day_id":406,"task_num":2,"content":"Push both projects with clean READMEs: AI Clinical Assistant + Insurance Authorization Assistant"},{"id":"w4_d6_t3","day_id":406,"task_num":3,"content":"You are now ready for Month 2 (LangChain). The foundation is solid."}]}]}]},{"id":2,"title":"LangChain + LangGraph + tool use","weeks_range":"Weeks 5–8","hours":"~40 hours","badge_text":"Core skills","weeks":[{"id":5,"month_id":2,"week_number":5,"title":"LangChain Essentials & Chains","focus_hours":"10 hours total · LCEL chains, prompt templates, output parsers, memory","csharp_mindset":"<p><strong>C# dev mindset:</strong> LangChain's <code>RunnableSequence</code> (using <code>|</code> pipe) is simply a functional Pipe-and-Filter or Middleware pipeline. Prompt templates are just advanced string interpolators. Output parsers replace manual JSON deserialization loops.</p>","weekly_goal":"By Sunday you can build a functional sequence using LangChain Expression Language (LCEL) that feeds structured prompts into Claude/OpenAI and parses the output back into typed Python objects.","days":[{"id":500,"week_id":5,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w5_d0_t1","day_id":500,"task_num":1,"content":"Install LangChain core: pip install langchain langchain-openai langchain-community (15 min)"},{"id":"w5_d0_t2","day_id":500,"task_num":2,"content":"Read LangChain Expression Language (LCEL) concepts — focus on runnable components (30 min)"},{"id":"w5_d0_t3","day_id":500,"task_num":3,"content":"Setup LangFuse public/secret keys in your .env. This is your essential visual debugger! (15 min)"}]},{"id":501,"week_id":5,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w5_d1_t1","day_id":501,"task_num":1,"content":"Practice PromptTemplates: write templates with multiple variables (e.g. patient name, diagnostic report) (20 min)"},{"id":"w5_d1_t2","day_id":501,"task_num":2,"content":"Learn Output Parsers: use PydanticOutputParser to define an expected medical schema (30 min)"},{"id":"w5_d1_t3","day_id":501,"task_num":3,"content":"Write a function that hooks Prompt -> Model -> Output Parser together using standard python code. (10 min)"}]},{"id":502,"week_id":5,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w5_d2_t1","day_id":502,"task_num":1,"content":"Rebuild Tuesday's workflow using LCEL pipe notation: chain = prompt | model | parser (20 min)"},{"id":"w5_d2_t2","day_id":502,"task_num":2,"content":"Run the chain asynchronously with await chain.ainvoke({\\"input\\": \\"...\\"}) (20 min)"},{"id":"w5_d2_t3","day_id":502,"task_num":3,"content":"Open LangFuse trace dashboard to view the payload execution graph step-by-step. (20 min)"}]},{"id":503,"week_id":5,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w5_d3_t1","day_id":503,"task_num":1,"content":"Understand memory: check ConversationBufferMemory vs ConversationBufferWindowMemory (30 min)"},{"id":"w5_d3_t2","day_id":503,"task_num":2,"content":"Implement SQLite persistent history: store conversation logs to a local db using SQLChatMessageHistory (30 min)"}]},{"id":504,"week_id":5,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w5_d4_t1","day_id":504,"task_num":1,"content":"Build a Claim Appeal Generator chain: feeds claim denial notes and returns a polite medical appeal letter (30 min)"},{"id":"w5_d4_t2","day_id":504,"task_num":2,"content":"Add conversation history: verify it references the original claim denial during follow-up messages (30 min)"}]},{"id":505,"week_id":5,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w5_d5_t1","day_id":505,"task_num":1,"content":"Setup: Create a FastAPI app in a new folder policy-qa. Configure poetry dependency settings. (30 min)"},{"id":"w5_d5_t2","day_id":505,"task_num":2,"content":"Implement policy chat route: receives user questions and queries policies (use mock text for policies today) (60 min)"},{"id":"w5_d5_t3","day_id":505,"task_num":3,"content":"Add chat memory so doctors can ask follow-ups. Stream token responses via StreamingResponse (60 min)"},{"id":"w5_d5_t4","day_id":505,"task_num":4,"content":"Trace all calls in LangFuse to verify latency and performance metrics. (30 min)"}]},{"id":506,"week_id":5,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w5_d6_t1","day_id":506,"task_num":1,"content":"Review your LangFuse dashboard to analyze token usage, latency, and costs. (60 min)"},{"id":"w5_d6_t2","day_id":506,"task_num":2,"content":"Read: LangChain security guidelines (data leakage, prompt injections) (30 min)"},{"id":"w5_d6_t3","day_id":506,"task_num":3,"content":"Push week 5 code to your repository. (30 min)"}]}]},{"id":6,"month_id":2,"week_number":6,"title":"Document Workflows & Retrieval Chains","focus_hours":"10 hours total · Document loaders, text splitting, custom tools, retrieval chains","csharp_mindset":"<p><strong>C# dev mindset:</strong> Document loaders replace <code>StreamReader</code> file parser scripts. Splitting text is equivalent to chunking data for memory-efficient indexing. Custom tools map to delegate callbacks or reflection-based class bindings.</p>","weekly_goal":"By Sunday you can load a PDF policy manual, split it into chunks with optimized overlaps, and register custom Python functions as tools for models to invoke.","days":[{"id":600,"week_id":6,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w6_d0_t1","day_id":600,"task_num":1,"content":"Understand loaders: check PyPDFLoader, Docx2txtLoader, and TextLoader (30 min)"},{"id":"w6_d0_t2","day_id":600,"task_num":2,"content":"Install dependencies: pip install pypdf docx2txt and load a clinical PDF document (30 min)"}]},{"id":601,"week_id":6,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w6_d1_t1","day_id":601,"task_num":1,"content":"Practice splitting: compare CharacterTextSplitter vs RecursiveCharacterTextSplitter (30 min)"},{"id":"w6_d1_t2","day_id":601,"task_num":2,"content":"Print output chunks: notice how headers are retained. Test different chunk sizes (e.g. 500 tokens, 1000 tokens) (30 min)"}]},{"id":602,"week_id":6,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w6_d2_t1","day_id":602,"task_num":1,"content":"Define a custom python function that calculates medical pricing formulas. (20 min)"},{"id":"w6_d2_t2","day_id":602,"task_num":2,"content":"Register the function as a model tool using the @tool decorator, adding clear docstrings. (20 min)"},{"id":"w6_d2_t3","day_id":602,"task_num":3,"content":"Bind tools to the chat model: model.bind_tools([my_tool]) (20 min)"}]},{"id":603,"week_id":6,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w6_d3_t1","day_id":603,"task_num":1,"content":"Read tool dispatch flows: how models output structured tool calls and how to invoke the matching python function automatically. (30 min)"},{"id":"w6_d3_t2","day_id":603,"task_num":2,"content":"Review parallel tool calling patterns in LangChain. (30 min)"}]},{"id":604,"week_id":6,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w6_d4_t1","day_id":604,"task_num":1,"content":"Add error handling to tool execution: capture exceptions and send them back to the LLM as observation context. (40 min)"},{"id":"w6_d4_t2","day_id":604,"task_num":2,"content":"Setup tool retries if validation fails. (20 min)"}]},{"id":605,"week_id":6,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w6_d5_t1","day_id":605,"task_num":1,"content":"Start the Hospital Policy Assistant: configure document loaders to read the clinical PDF files (45 min)"},{"id":"w6_d5_t2","day_id":605,"task_num":2,"content":"Build ingestion workflow: load files, extract headers, split recursively, attach metadata (source file, category) (75 min)"},{"id":"w6_d5_t3","day_id":605,"task_num":3,"content":"Connect to FastAPI: write a route POST /ingest that processes uploaded files. (60 min)"}]},{"id":606,"week_id":6,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w6_d6_t1","day_id":606,"task_num":1,"content":"Inspect metadata output logs. Verify text formatting in split blocks is clean. (60 min)"},{"id":"w6_d6_t2","day_id":606,"task_num":2,"content":"Push Hospital Policy Assistant (Part 1) to GitHub. (60 min)"}]}]},{"id":7,"month_id":2,"week_number":7,"title":"LangGraph Agent Workflows (State & Nodes)","focus_hours":"10 hours total · StateGraph, nodes, edges, conditional routing, cyclic graphs","csharp_mindset":"<p><strong>C# dev mindset:</strong> LangGraph is a State Machine engine (like Windows Workflow Foundation or stateless state machines). Nodes represent action methods. Edges determine branching rules. State is the shared context thread.</p>","weekly_goal":"By Sunday you can build a cyclic state graph where nodes execute API tasks, modify a shared workflow state dictionary, and dynamically branch based on model choices.","days":[{"id":700,"week_id":7,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w7_d0_t1","day_id":700,"task_num":1,"content":"Install LangGraph: pip install langgraph (15 min)"},{"id":"w7_d0_t2","day_id":700,"task_num":2,"content":"Read LangGraph concepts: StateGraph, Nodes, Edges, entry points. (45 min)"}]},{"id":701,"week_id":7,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w7_d1_t1","day_id":701,"task_num":1,"content":"Define a custom TypedDict representing your application state variables. (20 min)"},{"id":"w7_d1_t2","day_id":701,"task_num":2,"content":"Write 2 nodes: one that reads input, one that formats and writes output variables. (20 min)"},{"id":"w7_d1_t3","day_id":701,"task_num":3,"content":"Assemble the graph, compile it, and invoke with input values. (20 min)"}]},{"id":702,"week_id":7,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w7_d2_t1","day_id":702,"task_num":1,"content":"Learn Conditional Edges: write routing functions that examine state values and direct execution paths. (30 min)"},{"id":"w7_d2_t2","day_id":702,"task_num":2,"content":"Build a simple branching graph (e.g. if input contains 'urgent' route to high-priority node). (30 min)"}]},{"id":703,"week_id":7,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w7_d3_t1","day_id":703,"task_num":1,"content":"Understand cyclic graphs: write loops where execution goes back to an earlier node if validation metrics fail. (45 min)"},{"id":"w7_d3_t2","day_id":703,"task_num":2,"content":"Study agent design pattern: LLM node -> Tool Call node -> Observation node -> loop back. (15 min)"}]},{"id":704,"week_id":7,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w7_d4_t1","day_id":704,"task_num":1,"content":"Implement cyclic validation loops: create a state graph where the LLM corrects structured output schema if validation fails. (60 min)"}]},{"id":705,"week_id":7,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w7_d5_t1","day_id":705,"task_num":1,"content":"Start the Smart Claims Validation Pipeline: create the State schema (includes claim inputs, errors list, verification status) (45 min)"},{"id":"w7_d5_t2","day_id":705,"task_num":2,"content":"Write pipeline nodes: Node 1 checks Oracle DB (mock) for membership info. Node 2 checks pre-auth coverage. Node 3 evaluates billing consistency. (75 min)"},{"id":"w7_d5_t3","day_id":705,"task_num":3,"content":"Assemble and test: compile graph workflows. Verify errors are collected in state history. (60 min)"}]},{"id":706,"week_id":7,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w7_d6_t1","day_id":706,"task_num":1,"content":"Examine the compiled graph structure visually using graphviz / ASCII exports. (40 min)"},{"id":"w7_d6_t2","day_id":706,"task_num":2,"content":"Ensure state accumulation works. Push pipeline layout to Git. (80 min)"}]}]},{"id":8,"month_id":2,"week_number":8,"title":"Human-in-the-Loop & Checked Workflows","focus_hours":"10 hours total · State checkpointers, breakpoints, manual approval gates, custom modifications","csharp_mindset":"<p><strong>C# dev mindset:</strong> Breakpoints are asynchronous workflow savepoints. Pausing/resuming state graphs mirrors database persistence of long-running workflows with manual gateway reviews.</p>","weekly_goal":"By Sunday you can pause agent executions before executing sensitive actions, persist intermediate state databases, and resume workflows after manual user approvals.","days":[{"id":800,"week_id":8,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w8_d0_t1","day_id":800,"task_num":1,"content":"Read checkpointer concepts in LangGraph: understand how state is persisted at each step. (30 min)"},{"id":"w8_d0_t2","day_id":800,"task_num":2,"content":"Setup a simple memory database checkpointer: MemorySaver (30 min)"}]},{"id":801,"week_id":8,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w8_d1_t1","day_id":801,"task_num":1,"content":"Implement breakpoints: compile your state graph specifying interrupt_before sensitive nodes. (30 min)"},{"id":"w8_d1_t2","day_id":801,"task_num":2,"content":"Run the graph: verify execution halts and waits at the specified breakpoint step. (30 min)"}]},{"id":802,"week_id":8,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w8_d2_t1","day_id":802,"task_num":1,"content":"Resume paused workflows: pass human approval input back to the checkpointer state and call \`resume\` to finish. (40 min)"},{"id":"w8_d2_t2","day_id":802,"task_num":2,"content":"Verify state updates are preserved. (20 min)"}]},{"id":803,"week_id":8,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w8_d3_t1","day_id":803,"task_num":1,"content":"Understand state editing: how humans can correct values directly inside intermediate state databases before resuming execution. (45 min)"},{"id":"w8_d3_t2","day_id":803,"task_num":2,"content":"Study SqliteSaver configs. (15 min)"}]},{"id":804,"week_id":8,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w8_d4_t1","day_id":804,"task_num":1,"content":"Write automated unit tests for state graphs, mocking external services. (60 min)"}]},{"id":805,"week_id":8,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w8_d5_t1","day_id":805,"task_num":1,"content":"Complete Smart Claims Validation Pipeline: add checkpointer database persistence using SqliteSaver (60 min)"},{"id":"w8_d5_t2","day_id":805,"task_num":2,"content":"Add manual audit: pause claims exceeding $5,000, requiring manual approval inputs before finalizing db records (90 min)"},{"id":"w8_d5_t3","day_id":805,"task_num":3,"content":"Expose API routes in FastAPI to inspect paused states and post approval decisions. (30 min)"}]},{"id":806,"week_id":8,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w8_d6_t1","day_id":806,"task_num":1,"content":"Complete Month 2 Retrospective. Review the pipeline flow. (40 min)"},{"id":"w8_d6_t2","day_id":806,"task_num":2,"content":"Deploy pipeline details, screenshots, and logs to Git. (80 min)"}]}]}]},{"id":3,"title":"RAG mastery + evaluation","weeks_range":"Weeks 9–13","hours":"~50 hours","badge_text":"High impact","weeks":[{"id":9,"month_id":3,"week_number":9,"title":"Embeddings & Vector Stores (ChromaDB)","focus_hours":"10 hours total · Vector embeddings, similarity searches, ChromaDB integration","csharp_mindset":"<p><strong>C# dev mindset:</strong> A vector database is similar to Lucene.NET or SQL indexes, but optimized for high-dimensional float array cosine similarity checks. It finds matching concepts rather than keyword patterns.</p>","weekly_goal":"By Sunday you understand how text is transformed into float vector arrays, can write queries to check cosine similarity, and build collections in a local ChromaDB instance.","days":[{"id":900,"week_id":9,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w9_d0_t1","day_id":900,"task_num":1,"content":"Study vector embedding concepts: dimensions, cosine similarity, distance metrics. (40 min)"},{"id":"w9_d0_t2","day_id":900,"task_num":2,"content":"Generate sample embeddings using OpenAI's API: text-embedding-3-small (20 min)"}]},{"id":901,"week_id":9,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w9_d1_t1","day_id":901,"task_num":1,"content":"Install ChromaDB: pip install chromadb (15 min)"},{"id":"w9_d1_t2","day_id":901,"task_num":2,"content":"Initialize a persistent client. Create a collection called policies. (20 min)"},{"id":"w9_d1_t3","day_id":901,"task_num":3,"content":"Add 5 sample document strings with IDs and query closest results. (25 min)"}]},{"id":902,"week_id":9,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w9_d2_t1","day_id":902,"task_num":1,"content":"Practice query distance parameters. Compare Cosine Similarity, L2 Euclidean Distance, and Inner Product. (30 min)"},{"id":"w9_d2_t2","day_id":902,"task_num":2,"content":"Inspect query response metadata. (30 min)"}]},{"id":903,"week_id":9,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w9_d3_t1","day_id":903,"task_num":1,"content":"Learn Metadata Filtering: write queries filtering vectors by dictionary properties (e.g. {\\"insurer\\": \\"NHIF\\"}). (40 min)"},{"id":"w9_d3_t2","day_id":903,"task_num":2,"content":"Understand where filters fit in indexing. (20 min)"}]},{"id":904,"week_id":9,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w9_d4_t1","day_id":904,"task_num":1,"content":"Write a C# helper console app to request embeddings via HTTP and compare semantic sorting output results to Python. (60 min)"}]},{"id":905,"week_id":9,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w9_d5_t1","day_id":905,"task_num":1,"content":"Start the Local Policy Query Tool: read policy FAQs from a local JSON document. (45 min)"},{"id":"w9_d5_t2","day_id":905,"task_num":2,"content":"Ingest QA pairs into ChromaDB, creating auto-embeddings via client configs. (75 min)"},{"id":"w9_d5_t3","day_id":905,"task_num":3,"content":"Write CLI: receives search phrases, runs query with filter options, outputs closest answer. (60 min)"}]},{"id":906,"week_id":9,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w9_d6_t1","day_id":906,"task_num":1,"content":"Test CLI results using semantic rephrases. Check if matching answers return. (60 min)"},{"id":"w9_d6_t2","day_id":906,"task_num":2,"content":"Push code to Git. (60 min)"}]}]},{"id":10,"month_id":3,"week_number":10,"title":"Enterprise Vector Search (Qdrant)","focus_hours":"10 hours total · Qdrant client, payloads, schema indices, Docker setup, text chunking","csharp_mindset":"<p><strong>C# dev mindset:</strong> ChromaDB is SQLite; Qdrant is SQL Server / Postgres. A scalable cluster instance running via Docker containers. High performance, transaction safety, and schema validation index layers.</p>","weekly_goal":"By Sunday you can launch Qdrant using Docker containers, configure payload schema indexing filters, and load processed document chunks into enterprise storage pools.","days":[{"id":1000,"week_id":10,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w10_d0_t1","day_id":1000,"task_num":1,"content":"Launch Qdrant via Docker: docker run -p 6333:6333 qdrant/qdrant (30 min)"},{"id":"w10_d0_t2","day_id":1000,"task_num":2,"content":"Read Qdrant vector database concepts: points, payloads, indexes. (30 min)"}]},{"id":1001,"week_id":10,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w10_d1_t1","day_id":1001,"task_num":1,"content":"Install Qdrant python client: pip install qdrant-client (15 min)"},{"id":"w10_d1_t2","day_id":1001,"task_num":2,"content":"Connect to Docker instance. Create a collection defining vector size and distance configuration. (45 min)"}]},{"id":1002,"week_id":10,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w10_d2_t1","day_id":1002,"task_num":1,"content":"Practice upserting: define payload attributes (id, vector, metadata dictionaries). (30 min)"},{"id":"w10_d2_t2","day_id":1002,"task_num":2,"content":"Understand points updates: how to modify payloads without rewriting vector records. (30 min)"}]},{"id":1003,"week_id":10,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w10_d3_t1","day_id":1003,"task_num":1,"content":"Learn advanced payload filtering: range criteria, nested conditions, exact match blocks. (40 min)"},{"id":"w10_d3_t2","day_id":1003,"task_num":2,"content":"Study index speed tuning. (20 min)"}]},{"id":1004,"week_id":10,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w10_d4_t1","day_id":1004,"task_num":1,"content":"Practice document chunking layout: write a script to calculate overlaps when text chunks contain tables or lists. (60 min)"}]},{"id":1005,"week_id":10,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w10_d5_t1","day_id":1005,"task_num":1,"content":"Start AKHST Knowledge Assistant: index medical policy PDFs (NHIF, Jubilee, ZHSF) (60 min)"},{"id":"w10_d5_t2","day_id":1005,"task_num":2,"content":"Build ingestion logic: parse, recursively split, generate vectors, upload to Qdrant with detailed metadata payloads. (90 min)"},{"id":"w10_d5_t3","day_id":1005,"task_num":3,"content":"Verify collection points count in Qdrant dashboard at http://localhost:6333/dashboard (30 min)"}]},{"id":1006,"week_id":10,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w10_d6_t1","day_id":1006,"task_num":1,"content":"Test search responses. Validate metadata properties map correctly. (60 min)"},{"id":"w10_d6_t2","day_id":1006,"task_num":2,"content":"Push code to Git. (60 min)"}]}]},{"id":11,"month_id":3,"week_number":11,"title":"Production Retrieval (Hybrid Search & Re-ranking)","focus_hours":"10 hours total · Hybrid search (dense + sparse), BM25, Cohere re-ranking, FlashRank","csharp_mindset":"<p><strong>C# dev mindset:</strong> Hybrid search matches combining Full-Text Indexing (LIKE queries) with vector matching scores. Re-ranking is similar to sorting list items using complex secondary scoring filters.</p>","weekly_goal":"By Sunday you can combine semantic vectors with traditional BM25 text queries in a single query pipeline and apply re-ranking model layers to retrieve the top 3 high-relevance chunks.","days":[{"id":1100,"week_id":11,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w11_d0_t1","day_id":1100,"task_num":1,"content":"Read Hybrid Search concepts: Sparse Vectors (BM25 lexical) vs Dense Vectors (Semantic embeddings). (45 min)"},{"id":"w11_d0_t2","day_id":1100,"task_num":2,"content":"Compare pros and cons of each method. (15 min)"}]},{"id":1101,"week_id":11,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w11_d1_t1","day_id":1101,"task_num":1,"content":"Setup sparse indices in Qdrant collections. (30 min)"},{"id":"w11_d1_t2","day_id":1101,"task_num":2,"content":"Run query combining semantic score and text relevance metrics. (30 min)"}]},{"id":1102,"week_id":11,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w11_d2_t1","day_id":1102,"task_num":1,"content":"Learn Re-ranking: setup cohere-client or lightweight local flashrank (30 min)"},{"id":"w11_d2_t2","day_id":1102,"task_num":2,"content":"Ingest 10 retrieved vectors, re-rank, and select the top 3 with highest scores. (30 min)"}]},{"id":1103,"week_id":11,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w11_d3_t1","day_id":1103,"task_num":1,"content":"Read NirDiamant/RAG_Techniques patterns: focus on context compression and token management. (45 min)"},{"id":"w11_d3_t2","day_id":1103,"task_num":2,"content":"Compare chunk sorting styles. (15 min)"}]},{"id":1104,"week_id":11,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w11_d4_t1","day_id":1104,"task_num":1,"content":"Build context compression utility: summarizes raw retrieved text blocks to match Claude's context limits. (60 min)"}]},{"id":1105,"week_id":11,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w11_d5_t1","day_id":1105,"task_num":1,"content":"Develop AKHST Knowledge Assistant (Part 2): create a retrieval query script. (45 min)"},{"id":"w11_d5_t2","day_id":1105,"task_num":2,"content":"Implement Hybrid Search (Dense + BM25) and filter by insurer metadata. (75 min)"},{"id":"w11_d5_t3","day_id":1105,"task_num":3,"content":"Add Re-ranking using Cohere API to get the top 3 chunks, and feed them into Claude. (60 min)"}]},{"id":1106,"week_id":11,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w11_d6_t1","day_id":1106,"task_num":1,"content":"Compare search precision using semantic search alone vs hybrid search + re-ranking. (60 min)"},{"id":"w11_d6_t2","day_id":1106,"task_num":2,"content":"Push updates to Git. (60 min)"}]}]},{"id":12,"month_id":3,"week_number":12,"title":"Context Enrichment & Parent-Child Retrieval","focus_hours":"10 hours total · Parent-document retriever, sentence window retrieval, hierarchical chunking","csharp_mindset":"<p><strong>C# dev mindset:</strong> Parent-Child mapping is similar to database relationships (One-to-Many). Search query targets children keys, but loads primary tables when formatting output contexts.</p>","weekly_goal":"By Sunday you can set up a parent-child indexing schema where search queries match small text chunks but retrieve the broader parent context parameters.","days":[{"id":1200,"week_id":12,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w12_d0_t1","day_id":1200,"task_num":1,"content":"Read Parent-Document Retrieval concepts: index small, descriptive sub-chunks for similarity matches, link to parent document IDs. (45 min)"},{"id":"w12_d0_t2","day_id":1200,"task_num":2,"content":"Compare to plain chunking. (15 min)"}]},{"id":1201,"week_id":12,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w12_d1_t1","day_id":1201,"task_num":1,"content":"Setup ingestion flow: split documents into parents (e.g. 2000 chars) and child nodes (e.g. 400 chars). (40 min)"},{"id":"w12_d1_t2","day_id":1201,"task_num":2,"content":"Store child vectors containing parent IDs. (20 min)"}]},{"id":1202,"week_id":12,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w12_d2_t1","day_id":1202,"task_num":1,"content":"Write retrieval step: query closest child vectors, retrieve parent document text using the linked parent IDs. (60 min)"}]},{"id":1203,"week_id":12,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w12_d3_t1","day_id":1203,"task_num":1,"content":"Understand Sentence Window Retrieval: match a target sentence, but retrieve surrounding sentence windows (e.g. +/- 2 sentences). (40 min)"},{"id":"w12_d3_t2","day_id":1203,"task_num":2,"content":"Review NirDiamant RAG patterns. (20 min)"}]},{"id":1204,"week_id":12,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w12_d4_t1","day_id":1204,"task_num":1,"content":"Implement Sentence Window helper in Python: processes splits and resolves surrounding indices dynamically. (60 min)"}]},{"id":1205,"week_id":12,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w12_d5_t1","day_id":1205,"task_num":1,"content":"Develop Context Enrichment Pipeline: load policy manuals, ingest using sentence window metadata formatting. (90 min)"},{"id":"w12_d5_t2","day_id":1205,"task_num":2,"content":"Expose API endpoints to test querying using child matches and parent context expansion. (60 min)"},{"id":"w12_d5_t3","day_id":1205,"task_num":3,"content":"Verify prompt accuracy inside LangFuse tracing dashboard. (30 min)"}]},{"id":1206,"week_id":12,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w12_d6_t1","day_id":1206,"task_num":1,"content":"Review sentence mapping structures. Push context enrichment codes to Git. (65 min)"},{"id":"w12_d6_t2","day_id":1206,"task_num":2,"content":"Verify index storage sizes. (55 min)"}]}]},{"id":13,"month_id":3,"week_number":13,"title":"RAG Evaluation & Safety Guardrails","focus_hours":"10 hours total · RAGAS framework, hallucination filters, LLM-as-judge, input validation","csharp_mindset":"<p><strong>C# dev mindset:</strong> Evaluation is similar to unit testing, but for semantic verification. Asserting faithfulness replaces static assertions, verifying output consistency over test cases.</p>","weekly_goal":"By Sunday you can run RAGAS benchmark metrics to score answer quality, create LLM-as-judge prompts to detect clinical hallucinations, and build input validation filters.","days":[{"id":1300,"week_id":13,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w13_d0_t1","day_id":1300,"task_num":1,"content":"Understand RAG Evaluation: learn Faithfulness (factuality) vs Answer Relevance vs Context Precision. (45 min)"},{"id":"w13_d0_t2","day_id":1300,"task_num":2,"content":"Install RAGAS: pip install ragas (15 min)"}]},{"id":1301,"week_id":13,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w13_d1_t1","day_id":1301,"task_num":1,"content":"Setup RAGAS metrics. Compile a test dataset containing query, context, and output response. (40 min)"},{"id":"w13_d1_t2","day_id":1301,"task_num":2,"content":"Run evaluation and print the scores dashboard. (20 min)"}]},{"id":1302,"week_id":13,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w13_d2_t1","day_id":1302,"task_num":1,"content":"Write an LLM-as-judge validator prompt: tells a secondary model to audit output facts against context references. (35 min)"},{"id":"w13_d2_t2","day_id":1302,"task_num":2,"content":"Validate clinical correctness. (25 min)"}]},{"id":1303,"week_id":13,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w13_d3_t1","day_id":1303,"task_num":1,"content":"Learn input safety guardrails: prevent prompt injections and filter out HIPAA-sensitive PII before requests reach models. (45 min)"},{"id":"w13_d3_t2","day_id":1303,"task_num":2,"content":"Study LLM Guard libraries. (15 min)"}]},{"id":1304,"week_id":13,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w13_d4_t1","day_id":1304,"task_num":1,"content":"Write validation wrapper: intercepts responses and checks them against safety rules before returning. (60 min)"}]},{"id":1305,"week_id":13,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w13_d5_t1","day_id":1305,"task_num":1,"content":"Complete AKHST Knowledge Assistant: assemble full retrieval server (60 min)"},{"id":"w13_d5_t2","day_id":1305,"task_num":2,"content":"Integrate validation layers: check for hallucinations, verify citations exist, filter inputs. (60 min)"},{"id":"w13_d5_t3","day_id":1305,"task_num":3,"content":"Create automated benchmarks script: runs RAGAS on 20 policy scenarios, outputting a performance report. (60 min)"}]},{"id":1306,"week_id":13,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w13_d6_t1","day_id":1306,"task_num":1,"content":"Month 3 retrospective: verify RAG accuracy scores. (45 min)"},{"id":"w13_d6_t2","day_id":1306,"task_num":2,"content":"Push all codes and report documents to Git. (75 min)"}]}]}]},{"id":4,"title":"AI agents — single + multi-agent systems","weeks_range":"Weeks 14–17","hours":"~40 hours","badge_text":"Advanced","weeks":[{"id":14,"month_id":4,"week_number":14,"title":"Agent Architectures & ReAct Loops","focus_hours":"10 hours total · ReAct loop, tool registry, dynamic dispatch, stop conditions","csharp_mindset":"<p><strong>C# dev mindset:</strong> A ReAct loop is an asynchronous <code>while(true)</code> loop containing a state transition switch block. The LLM's thought outputs determine the next case statement.</p>","weekly_goal":"By Sunday you can write a custom reasoning-and-acting execution loop from scratch without high-level libraries, handling tool extraction and loop stops.","days":[{"id":1400,"week_id":14,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w14_d0_t1","day_id":1400,"task_num":1,"content":"Read ReAct agent pattern: understand Thought -> Action -> Observation cycle. (45 min)"},{"id":"w14_d0_t2","day_id":1400,"task_num":2,"content":"Compare to plain prompting styles. (15 min)"}]},{"id":1401,"week_id":14,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w14_d1_t1","day_id":1401,"task_num":1,"content":"Write parser script: inspect LLM completions for specific keywords (e.g. \`Action: search_policy[arg]\`). (30 min)"},{"id":"w14_d1_t2","day_id":1401,"task_num":2,"content":"Test regex patterns. (30 min)"}]},{"id":1402,"week_id":14,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w14_d2_t1","day_id":1402,"task_num":1,"content":"Build execution step: execute python functions based on parsed action names, and pass return values back to prompt history. (60 min)"}]},{"id":1403,"week_id":14,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w14_d3_t1","day_id":1403,"task_num":1,"content":"Understand loop stop criteria: define maximum cycles limits, check token limits, and handle infinite execution loop blocks. (40 min)"},{"id":"w14_d3_t2","day_id":1403,"task_num":2,"content":"Review NirDiamant agent codes. (20 min)"}]},{"id":1404,"week_id":14,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w14_d4_t1","day_id":1404,"task_num":1,"content":"Implement execution limits: write a handler checking runtime parameters, stopping loops if exceptions occur. (60 min)"}]},{"id":1405,"week_id":14,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w14_d5_t1","day_id":1405,"task_num":1,"content":"Develop Invoice Auditor Agent: register tools for membership queries, billing checks, and math formulas. (60 min)"},{"id":"w14_d5_t2","day_id":1405,"task_num":2,"content":"Write raw loop running loops: agent searches invoices, calls tools, and writes formatted audit summaries. (90 min)"},{"id":"w14_d5_t3","day_id":1405,"task_num":3,"content":"Test run tracing in LangFuse dashboard. (30 min)"}]},{"id":1406,"week_id":14,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w14_d6_t1","day_id":1406,"task_num":1,"content":"Identify loop bottlenecks in your code. Push custom ReAct loop codes to Git. (60 min)"},{"id":"w14_d6_t2","day_id":1406,"task_num":2,"content":"Verify error recovery parameters. (60 min)"}]}]},{"id":15,"month_id":4,"week_number":15,"title":"Multi-Agent Systems with CrewAI","focus_hours":"10 hours total · CrewAI core, specialized roles, collaborative tasks, context sharing","csharp_mindset":"<p><strong>C# dev mindset:</strong> CrewAI maps to Orchestrator or Saga workflows. A sequence of service workers, each carrying unique configurations, modifying shared context data files.</p>","weekly_goal":"By Sunday you can build a collaborative multi-agent group using CrewAI, assign sequential tasks, and share context files between specialist workers.","days":[{"id":1500,"week_id":15,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w15_d0_t1","day_id":1500,"task_num":1,"content":"Read CrewAI framework core: understand Agent configs, Task definitions, and Crew orchestration parameters. (45 min)"},{"id":"w15_d0_t2","day_id":1500,"task_num":2,"content":"Install CrewAI: pip install crewai (15 min)"}]},{"id":1501,"week_id":15,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w15_d1_t1","day_id":1501,"task_num":1,"content":"Define specialized agents: create configs specifying distinct backstories, target goals, and role descriptors. (35 min)"},{"id":"w15_d1_t2","day_id":1501,"task_num":2,"content":"Run simple group loops. (25 min)"}]},{"id":1502,"week_id":15,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w15_d2_t1","day_id":1502,"task_num":1,"content":"Configure agent handoffs: create sequential tasks where agent 2 reads output files produced by agent 1. (60 min)"}]},{"id":1503,"week_id":15,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w15_d3_t1","day_id":1503,"task_num":1,"content":"Read: Microsoft's AI Agents for Beginners course: focus on collaboration models and memory buffers. (45 min)"},{"id":"w15_d3_t2","day_id":1503,"task_num":2,"content":"Review AutoGen structures. (15 min)"}]},{"id":1504,"week_id":15,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w15_d4_t1","day_id":1504,"task_num":1,"content":"Setup agent tools delegation: controls whether agents can share tasks or delegate execution targets dynamically. (60 min)"}]},{"id":1505,"week_id":15,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w15_d5_t1","day_id":1505,"task_num":1,"content":"Develop Insurance Multi-Agent System (Part 1): setup Crew configs (45 min)"},{"id":"w15_d5_t2","day_id":1505,"task_num":2,"content":"Create 2 agents: (1) Claims Analyst (audits codes, compares rules), (2) Auditor Agent (flags suspicious billings, formats summaries). (75 min)"},{"id":"w15_d5_t3","day_id":1505,"task_num":3,"content":"Orchestrate crew workflows, sending mock claim data files. Run execution. (60 min)"}]},{"id":1506,"week_id":15,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w15_d6_t1","day_id":1506,"task_num":1,"content":"Review intermediate agent chat histories. Push CrewAI codes to Git. (60 min)"},{"id":"w15_d6_t2","day_id":1506,"task_num":2,"content":"Check validation parameters. (60 min)"}]}]},{"id":16,"month_id":4,"week_number":16,"title":"C# Semantic Kernel Agents (Parallel Practice)","focus_hours":"10 hours total · Semantic Kernel (.NET 10), native plugins, ChatHistory loops, C# database queries","csharp_mindset":"<p><strong>C# dev mindset:</strong> Fully integrated in the Microsoft .NET 10 ecosystem. Dependency injection (<code>IServiceCollection</code>), C# methods as plugins, and typed models. LangChain tools map to C# class methods.</p>","weekly_goal":"By Sunday you can create native LLM plugins in C# using Semantic Kernel, register database queries as functions, and run typed agent loops inside Blazor projects.","days":[{"id":1600,"week_id":16,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w16_d0_t1","day_id":1600,"task_num":1,"content":"Setup Semantic Kernel packages in a .NET 10 project: Microsoft.SemanticKernel (30 min)"},{"id":"w16_d0_t2","day_id":1600,"task_num":2,"content":"Read Semantic Kernel design patterns: kernel builders, plugins, connector systems. (30 min)"}]},{"id":1601,"week_id":16,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w16_d1_t1","day_id":1601,"task_num":1,"content":"Write Native C# Plugins: map class methods using [KernelFunction] and describe parameters with [Description]. (40 min)"},{"id":"w16_d1_t2","day_id":1601,"task_num":2,"content":"Verify parameter registration. (20 min)"}]},{"id":1602,"week_id":16,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w16_d2_t1","day_id":1602,"task_num":1,"content":"Build chat execution loops: use ChatHistory, append roles context, and fetch completions via IChatCompletionService. (60 min)"}]},{"id":1603,"week_id":16,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w16_d3_t1","day_id":1603,"task_num":1,"content":"Understand multi-agent coordination in C#: learn ChatCompletionAgent and AgentGroupChat configurations. (45 min)"},{"id":"w16_d3_t2","day_id":1603,"task_num":2,"content":"Study C# agent templates. (15 min)"}]},{"id":1604,"week_id":16,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w16_d4_t1","day_id":1604,"task_num":1,"content":"Setup database connections: write native C# plugins that connect to mock database files and run queries. (60 min)"}]},{"id":1605,"week_id":16,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w16_d5_t1","day_id":1605,"task_num":1,"content":"Build Claims Processing Agent (C# version): create console client and integrate Semantic Kernel core. (60 min)"},{"id":"w16_d5_t2","day_id":1605,"task_num":2,"content":"Register native SQL query plugins connecting to simulated databases. (60 min)"},{"id":"w16_d5_t3","day_id":1605,"task_num":3,"content":"Configure LLM tool calling loops: agent queries table, parses claims details, asks model to check rules, outputs audit records. (60 min)"}]},{"id":1606,"week_id":16,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w16_d6_t1","day_id":1606,"task_num":1,"content":"Review C# dependency mappings. Push Semantic Kernel codes to Git repository. (60 min)"},{"id":"w16_d6_t2","day_id":1606,"task_num":2,"content":"Verify JSON parsing speeds. (60 min)"}]}]},{"id":17,"month_id":4,"week_number":17,"title":"Production Agent Workflows","focus_hours":"10 hours total · Hierarchical routers, LangGraph supervisor, state merges, safety guardrails","csharp_mindset":"<p><strong>C# dev mindset:</strong> Hierarchical routing mirrors centralized workflow controllers delegating sub-tasks to microservices, compiling outputs before returning response payloads.</p>","weekly_goal":"By Sunday you can deploy supervisor router graphs that delegate queries to specialist agent workers and implement output guardrails to prevent data leaks.","days":[{"id":1700,"week_id":17,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w17_d0_t1","day_id":1700,"task_num":1,"content":"Read hierarchical agent graph patterns: understand supervisor concepts routing requests to child agents. (45 min)"},{"id":"w17_d0_t2","day_id":1700,"task_num":2,"content":"Compare to sequential execution. (15 min)"}]},{"id":1701,"week_id":17,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w17_d1_t1","day_id":1701,"task_num":1,"content":"Setup supervisor routing in LangGraph: write a selector node that reads task descriptions and returns routing targets. (40 min)"},{"id":"w17_d1_t2","day_id":1701,"task_num":2,"content":"Verify router logs. (20 min)"}]},{"id":1702,"week_id":17,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w17_d2_t1","day_id":1702,"task_num":1,"content":"Implement state merges: how child agents modify shared graph state dictionaries without deleting historical outputs. (60 min)"}]},{"id":1703,"week_id":17,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w17_d3_t1","day_id":1703,"task_num":1,"content":"Understand output guardrails: write verification nodes auditing final compiled texts for sensitive identifiers or incorrect rules. (45 min)"},{"id":"w17_d3_t2","day_id":1703,"task_num":2,"content":"Study HIPAA compliance checkers. (15 min)"}]},{"id":1704,"week_id":17,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w17_d4_t1","day_id":1704,"task_num":1,"content":"Optimize agent loops speed: enforce parallel execution channels for non-dependent sub-tasks. (60 min)"}]},{"id":1705,"week_id":17,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w17_d5_t1","day_id":1705,"task_num":1,"content":"Complete Insurance Multi-Agent System (Part 2): construct supervisor router (60 min)"},{"id":"w17_d5_t2","day_id":1705,"task_num":2,"content":"Integrate CrewAI specialist sub-agents (Claims Analyst, Auditor Agent) as workers inside LangGraph nodes. (60 min)"},{"id":"w17_d5_t3","day_id":1705,"task_num":3,"content":"Add validation step: pause workflow for human verification if claim discrepancies exceed limit parameters. (60 min)"}]},{"id":1706,"week_id":17,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w17_d6_t1","day_id":1706,"task_num":1,"content":"Month 4 retrospective: compare Python CrewAI orchestration to C# Semantic Kernel structures. (45 min)"},{"id":"w17_d6_t2","day_id":1706,"task_num":2,"content":"Push all code to Git. (75 min)"}]}]}]},{"id":5,"title":"MCP servers + automation + voice AI","weeks_range":"Weeks 18–21","hours":"~40 hours","badge_text":"New territory","weeks":[{"id":18,"month_id":5,"week_number":18,"title":"Model Context Protocol (MCP) Architecture","focus_hours":"10 hours total · Model Context Protocol, stdio transport, Claude Desktop, JSON-RPC 2.0","csharp_mindset":"<p><strong>C# dev mindset:</strong> MCP is gRPC or OpenAPI but optimized specifically for LLMs. A standardized JSON-RPC 2.0 protocol over stdio streams or Server-Sent Events (SSE).</p>","weekly_goal":"By Sunday you understand the MCP JSON-RPC spec, can build an stdio MCP server in Python, and configure Claude Desktop to query it for local tool outputs.","days":[{"id":1800,"week_id":18,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w18_d0_t1","day_id":1800,"task_num":1,"content":"Read Model Context Protocol specification: understand Client, Host, and Server roles. (45 min)"},{"id":"w18_d0_t2","day_id":1800,"task_num":2,"content":"Review transport mechanics. (15 min)"}]},{"id":1801,"week_id":18,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w18_d1_t1","day_id":1801,"task_num":1,"content":"Install MCP python SDK: pip install mcp (15 min)"},{"id":"w18_d1_t2","day_id":1801,"task_num":2,"content":"Write a simple stdio server that registers 1 text resource and 1 hello world tool. (45 min)"}]},{"id":1802,"week_id":18,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w18_d2_t1","day_id":1802,"task_num":1,"content":"Configure Claude Desktop: add your python server entry point to claude_desktop_config.json file. (30 min)"},{"id":"w18_d2_t2","day_id":1802,"task_num":2,"content":"Launch Claude Desktop: verify tool shows up in prompt inputs. (30 min)"}]},{"id":1803,"week_id":18,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w18_d3_t1","day_id":1803,"task_num":1,"content":"Study MCP C# SDK: check how stdio streams and tool schemas are configured in .NET projects. (40 min)"},{"id":"w18_d3_t2","day_id":1803,"task_num":2,"content":"Review JSON-RPC 2.0 specifications. (20 min)"}]},{"id":1804,"week_id":18,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w18_d4_t1","day_id":1804,"task_num":1,"content":"Write MCP error handling wrapper: intercept errors and format JSON-RPC error codes correctly. (60 min)"}]},{"id":1805,"week_id":18,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w18_d5_t1","day_id":1805,"task_num":1,"content":"Start Hospital Search MCP Server: define schema models for patient records and doctor shifts. (45 min)"},{"id":"w18_d5_t2","day_id":1805,"task_num":2,"content":"Expose tools: search_patients (mock matching) and get_doctor_shift. (75 min)"},{"id":"w18_d5_t3","day_id":1805,"task_num":3,"content":"Configure Claude Desktop, test queries, and review communication logs in Claude debugger screens. (60 min)"}]},{"id":1806,"week_id":18,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w18_d6_t1","day_id":1806,"task_num":1,"content":"Review transport protocols (stdio vs SSE). Push MCP server codes to Git. (60 min)"},{"id":"w18_d6_t2","day_id":1806,"task_num":2,"content":"Configure auto-start settings. (60 min)"}]}]},{"id":19,"month_id":5,"week_number":19,"title":"Database-backed MCP Servers","focus_hours":"10 hours total · Oracle DB connection, SQL sanitization, SSE transport, tool arguments","csharp_mindset":"<p><strong>C# dev mindset:</strong> Exposing database repositories to the LLM Client via stdio streams. Sanitizing parameters is similar to preventing SQL injections in ADO.NET.</p>","weekly_goal":"By Sunday you can serve your MCP tools over Server-Sent Events (SSE) HTTP streams, connect to mock Oracle SQL databases, and secure database prompts.","days":[{"id":1900,"week_id":19,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w19_d0_t1","day_id":1900,"task_num":1,"content":"Understand database-backed MCP logic: mapping database schemas as Markdown resource documents. (45 min)"},{"id":"w19_d0_t2","day_id":1900,"task_num":2,"content":"Compare to direct client routing. (15 min)"}]},{"id":1901,"week_id":19,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w19_d1_t1","day_id":1901,"task_num":1,"content":"Setup database client connection in python (e.g. oracledb or sqlite3 local mock db). (30 min)"},{"id":"w19_d1_t2","day_id":1901,"task_num":2,"content":"Write database query tools. (30 min)"}]},{"id":1902,"week_id":19,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w19_d2_t1","day_id":1902,"task_num":1,"content":"Write sanitization layers: check tool input arguments for prompt injection patterns and sql characters. (60 min)"}]},{"id":1903,"week_id":19,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w19_d3_t1","day_id":1903,"task_num":1,"content":"Learn MCP over HTTP: study SSE (Server-Sent Events) configurations to expose tools via networks instead of stdio. (40 min)"},{"id":"w19_d3_t2","day_id":1903,"task_num":2,"content":"Review CORS settings. (20 min)"}]},{"id":1904,"week_id":19,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w19_d4_t1","day_id":1904,"task_num":1,"content":"Convert your stdio MCP server into an SSE server using FastMCP or Starlette. (60 min)"}]},{"id":1905,"week_id":19,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w19_d5_t1","day_id":1905,"task_num":1,"content":"Complete Hospital Search MCP Server: connect python to test database tables representing patient clinical data (60 min)"},{"id":"w19_d5_t2","day_id":1905,"task_num":2,"content":"Write database tools: search_patients_db, get_treatment_history. (60 min)"},{"id":"w19_d5_t3","day_id":1905,"task_num":3,"content":"Test querying tables via Claude Desktop. Verify logs. (60 min)"}]},{"id":1906,"week_id":19,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w19_d6_t1","day_id":1906,"task_num":1,"content":"Verify security guardrail parameters. Push database-backed MCP code to Git. (60 min)"},{"id":"w19_d6_t2","day_id":1906,"task_num":2,"content":"Document setup configurations. (60 min)"}]}]},{"id":20,"month_id":5,"week_number":20,"title":"n8n Automation Workflows","focus_hours":"10 hours total · n8n integration, triggers, webhooks, attachment parser nodes, self-hosting","csharp_mindset":"<p><strong>C# dev mindset:</strong> n8n replaces Azure Logic Apps, Power Automate, or custom trigger apps. A node-based system to route JSON payloads across APIs without writing boilerplate code.</p>","weekly_goal":"By Sunday you can launch self-hosted n8n in Docker containers, create automated webhook triggers, and build mail-to-AI invoice sorting canvas graphs.","days":[{"id":2000,"week_id":20,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w20_d0_t1","day_id":2000,"task_num":1,"content":"Launch self-hosted n8n via Docker: docker run -d --name n8n -p 5678:5678 n8nio/n8n (30 min)"},{"id":"w20_d0_t2","day_id":2000,"task_num":2,"content":"Read n8n core concepts: triggers, nodes, webhooks, binary data schemas. (30 min)"}]},{"id":2001,"week_id":20,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w20_d1_t1","day_id":2001,"task_num":1,"content":"Open local n8n interface at http://localhost:5678. Create webhook nodes. (30 min)"},{"id":"w20_d1_t2","day_id":2001,"task_num":2,"content":"Trigger webhook using curl posts, verifying payload contents. (30 min)"}]},{"id":2002,"week_id":20,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w20_d2_t1","day_id":2002,"task_num":1,"content":"Add AI models integration: connect your OpenAI / Claude API keys inside n8n model blocks. (30 min)"},{"id":"w20_d2_t2","day_id":2002,"task_num":2,"content":"Build text categorization nodes. (30 min)"}]},{"id":2003,"week_id":20,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w20_d3_t1","day_id":2003,"task_num":1,"content":"Understand attachment parsing: learn how n8n retrieves files from email attachments, parses binaries, and transforms schemas. (45 min)"},{"id":"w20_d3_t2","day_id":2003,"task_num":2,"content":"Review n8n code blocks. (15 min)"}]},{"id":2004,"week_id":20,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w20_d4_t1","day_id":2004,"task_num":1,"content":"Write Javascript functions inside n8n Code Nodes to sanitize invoice schemas. (60 min)"}]},{"id":2005,"week_id":20,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w20_d5_t1","day_id":2005,"task_num":1,"content":"Build NHIF Report Automation workflow: create email trigger configurations. (60 min)"},{"id":"w20_d5_t2","day_id":2005,"task_num":2,"content":"Configure attachment parsing: extract clinical PDF claims report, parse contents, and post to a FastAPI backend endpoint for verification checks. (90 min)"},{"id":"w20_d5_t3","day_id":2005,"task_num":3,"content":"Configure DB insert nodes to log completed audits. (30 min)"}]},{"id":2006,"week_id":20,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w20_d6_t1","day_id":2006,"task_num":1,"content":"Export n8n workflow JSON, and save config layout files inside your repository folder. (60 min)"},{"id":"w20_d6_t2","day_id":2006,"task_num":2,"content":"Test webhook triggers. (60 min)"}]}]},{"id":21,"month_id":5,"week_number":21,"title":"Voice AI Assistants","focus_hours":"10 hours total · Whisper STT, ElevenLabs TTS, audio recording, streaming audio, completion latency","csharp_mindset":"<p><strong>C# dev mindset:</strong> Voice AI pipelines are event-driven audio stream transformations: Audio Bytes -&gt; Text -&gt; LLM Completion -&gt; Text -&gt; Audio Synthesizer Bytes.</p>","weekly_goal":"By Sunday you can capture microphone audio, transcribe it via OpenAI Whisper, query clinical completions, and convert outputs to audio using ElevenLabs APIs.","days":[{"id":2100,"week_id":21,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w21_d0_t1","day_id":2100,"task_num":1,"content":"Understand speech-to-text (STT) mechanics: sample rates, audio formats (wav, mp3), API limits. (45 min)"},{"id":"w21_d0_t2","day_id":2100,"task_num":2,"content":"Transcribe file via Whisper API. (15 min)"}]},{"id":2101,"week_id":21,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w21_d1_t1","day_id":2101,"task_num":1,"content":"Write microphone recording functions in Python using pyaudio or sounddevice. (40 min)"},{"id":"w21_d1_t2","day_id":2101,"task_num":2,"content":"Save output wav files. (20 min)"}]},{"id":2102,"week_id":21,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w21_d2_t1","day_id":2102,"task_num":1,"content":"Setup text-to-speech (TTS): query ElevenLabs or OpenAI TTS APIs, saving audio responses locally. (45 min)"},{"id":"w21_d2_t2","day_id":2102,"task_num":2,"content":"Play output sound clips. (15 min)"}]},{"id":2103,"week_id":21,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w21_d3_t1","day_id":2103,"task_num":1,"content":"Understand latency reduction: streaming output chunk arrays from ElevenLabs WebSocket APIs. (45 min)"},{"id":"w21_d3_t2","day_id":2103,"task_num":2,"content":"Study audio stream chunk buffering. (15 min)"}]},{"id":2104,"week_id":21,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w21_d4_t1","day_id":2104,"task_num":1,"content":"Write pipeline script linking voice recorder -> Whisper parser -> LLM completion -> ElevenLabs generator. (60 min)"}]},{"id":2105,"week_id":21,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w21_d5_t1","day_id":2105,"task_num":1,"content":"Build Voice Medical Assistant: create recording and audio transcription modules. (60 min)"},{"id":"w21_d5_t2","day_id":2105,"task_num":2,"content":"Connect to LLM: check symptom details, calling clinical prompt targets. (60 min)"},{"id":"w21_d5_t3","day_id":2105,"task_num":3,"content":"Speak response: synthesize audio bytes using ElevenLabs and play to audio output. (60 min)"}]},{"id":2106,"week_id":21,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w21_d6_t1","day_id":2106,"task_num":1,"content":"Month 5 Retrospective: review MCP integration and voice assistant speed. (45 min)"},{"id":"w21_d6_t2","day_id":2106,"task_num":2,"content":"Push all codes to Git. (75 min)"}]}]}]},{"id":6,"title":"SaaS MVP + deployment + portfolio","weeks_range":"Weeks 22–24","hours":"~30 hours","badge_text":"Ship it","weeks":[{"id":22,"month_id":6,"week_number":22,"title":"Docker Containers & AWS ECS Cloud Deploy","focus_hours":"10 hours total · Dockerfiles, multi-stage builds, AWS ECS, Task Definitions","csharp_mindset":"<p><strong>C# dev mindset:</strong> Dockerizing a .NET Web API and deploying to Azure App Service / AWS ECS. Same containerization principles apply: copy binaries, expose ports, and inject environment variables.</p>","weekly_goal":"By Sunday you can write multi-stage Dockerfiles for FastAPI backends, build container images, push them to AWS ECR, and run them on AWS ECS Fargate.","days":[{"id":2200,"week_id":22,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w22_d0_t1","day_id":2200,"task_num":1,"content":"Read Docker core: multi-stage builds, target images, dependency caches. (30 min)"},{"id":"w22_d0_t2","day_id":2200,"task_num":2,"content":"Install Docker Desktop on Windows. (30 min)"}]},{"id":2201,"week_id":22,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w22_d1_t1","day_id":2201,"task_num":1,"content":"Write multi-stage Dockerfile for your FastAPI app: use python-slim, install poetry deps, copy sources. (40 min)"},{"id":"w22_d1_t2","day_id":2201,"task_num":2,"content":"Build and run locally. (20 min)"}]},{"id":2202,"week_id":22,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w22_d2_t1","day_id":2202,"task_num":1,"content":"Write a docker-compose.yml file linking your FastAPI app and Qdrant container. (40 min)"},{"id":"w22_d2_t2","day_id":2202,"task_num":2,"content":"Run composer: verify integrations. (20 min)"}]},{"id":2203,"week_id":22,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w22_d3_t1","day_id":2203,"task_num":1,"content":"Read AWS Cloud deployment concepts: ECR repositories, Task definitions, ECS clusters, target ports. (45 min)"},{"id":"w22_d3_t2","day_id":2203,"task_num":2,"content":"Create AWS Free Tier account. (15 min)"}]},{"id":2204,"week_id":22,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w22_d4_t1","day_id":2204,"task_num":1,"content":"Publish image to cloud: create AWS ECR repository, run login commands, tag and push your container. (60 min)"}]},{"id":2205,"week_id":22,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w22_d5_t1","day_id":2205,"task_num":1,"content":"Deploy AKHST Knowledge Assistant: configure AWS ECS Fargate cluster. (60 min)"},{"id":"w22_d5_t2","day_id":2205,"task_num":2,"content":"Setup Task definition: link container image, set port mappings, write environment variables. (60 min)"},{"id":"w22_d5_t3","day_id":2205,"task_num":3,"content":"Launch ECS service. Verify public URLs and monitor cloud watch logs. (60 min)"}]},{"id":2206,"week_id":22,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w22_d6_t1","day_id":2206,"task_num":1,"content":"Test request delays. Push multi-stage Dockerfile configurations to Git. (60 min)"},{"id":"w22_d6_t2","day_id":2206,"task_num":2,"content":"Configure auto-shutdown flags. (60 min)"}]}]},{"id":23,"month_id":6,"week_number":23,"title":"Full-Stack SaaS MVP Construction (Next.js & React UI)","focus_hours":"10 hours total · Next.js / Vite React, API connections, completion streaming, Supabase Auth","csharp_mindset":"<p><strong>C# dev mindset:</strong> Next.js/Vite frontend maps to Blazor WebAssembly or ASP.NET Razor clients calling backend Web APIs asynchronously via standard HTTP clients.</p>","weekly_goal":"By Sunday you can compile React UI pages in Next.js or Vite, integrate Supabase authorization workflows, and consume token streams from FastAPI endpoints.","days":[{"id":2300,"week_id":23,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w23_d0_t1","day_id":2300,"task_num":1,"content":"Setup SaaS skeleton: initialize Next.js or Vite project. Setup CSS parameters. (30 min)"},{"id":"w23_d0_t2","day_id":2300,"task_num":2,"content":"Read streaming configurations. (30 min)"}]},{"id":2301,"week_id":23,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w23_d1_t1","day_id":2301,"task_num":1,"content":"Configure User Authorization: connect Clerk or Supabase Auth. (40 min)"},{"id":"w23_d1_t2","day_id":2301,"task_num":2,"content":"Restrict routes: ensure pages require valid logins. (20 min)"}]},{"id":2302,"week_id":23,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w23_d2_t1","day_id":2302,"task_num":1,"content":"Wire API callers: write axios or fetch callers mapping inputs, sending claims to Python endpoints. (40 min)"},{"id":"w23_d2_t2","day_id":2302,"task_num":2,"content":"Verify JSON parameters. (20 min)"}]},{"id":2303,"week_id":23,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w23_d3_t1","day_id":2303,"task_num":1,"content":"Understand output streaming: how to stream server-sent tokens directly into React components. (45 min)"},{"id":"w23_d3_t2","day_id":2303,"task_num":2,"content":"Review SSE client connections. (15 min)"}]},{"id":2304,"week_id":23,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w23_d4_t1","day_id":2304,"task_num":1,"content":"Write PDF exporter node: create a client-side button converting generated appeal letters into PDF files. (60 min)"}]},{"id":2305,"week_id":23,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w23_d5_t1","day_id":2305,"task_num":1,"content":"Develop Insurance Copilot SaaS: build dashboard layout screens, claims table components, and chatbot query blocks. (60 min)"},{"id":"w23_d5_t2","day_id":2305,"task_num":2,"content":"Connect to backend: hook UI elements to ECS APIs. Stream generated claims appeal logs. (90 min)"},{"id":"w23_d5_t3","day_id":2305,"task_num":3,"content":"Test logins and endpoint updates. (30 min)"}]},{"id":2306,"week_id":23,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w23_d6_t1","day_id":2306,"task_num":1,"content":"Ensure styles adapt to layout bounds. Push SaaS frontend codebase to Git. (60 min)"},{"id":"w23_d6_t2","day_id":2306,"task_num":2,"content":"Deploy static assets. (60 min)"}]}]},{"id":24,"month_id":6,"week_number":24,"title":"LLMOps & Portfolio Polish","focus_hours":"10 hours total · Helicone / LangFuse costs, prompt management, prompt injections, HIPAA sanitizers, GitHub polish","csharp_mindset":"<p><strong>C# dev mindset:</strong> LLMOps corresponds to Application Insights monitoring, centralized prompt versioning, and API gateway logs. In LangFuse, prompts are retrieved via SDK rather than being hardcoded, similar to how Web.config or AppSettings configurations are fetched dynamically.</p>","weekly_goal":"By Sunday you can configure self-hosted LangFuse observability dashboards, manage prompts dynamically via LangFuse Prompt Registry SDK, filter injections, and publish your complete portfolio","days":[{"id":2400,"week_id":24,"day_name":"Monday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w24_d0_t1","day_id":2400,"task_num":1,"content":"Read costing and tracking tools: setup Helicone / LangFuse keys (LANGFUSE_PUBLIC_KEY, LANGFUSE_SECRET_KEY, LANGFUSE_HOST). (30 min)"},{"id":"w24_d0_t2","day_id":2400,"task_num":2,"content":"Analyze API response times. (30 min)"}]},{"id":2401,"week_id":24,"day_name":"Tuesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w24_d1_t1","day_id":2401,"task_num":1,"content":"Deploy Prompt Registries: extract templates from code and deploy them dynamically using LangFuse Prompt Management SDK, fetching current active versions in production. (45 min)"},{"id":"w24_d1_t2","day_id":2401,"task_num":2,"content":"Verify runtime load values. (15 min)"}]},{"id":2402,"week_id":24,"day_name":"Wednesday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w24_d2_t1","day_id":2402,"task_num":1,"content":"Implement prompt injection filters and HIPAA compliance checkers in production routers. (60 min)"}]},{"id":2403,"week_id":24,"day_name":"Thursday","hours":"1 hour · learning","type":"Learn","tasks":[{"id":"w24_d3_t1","day_id":2403,"task_num":1,"content":"Understand enterprise options: study Azure OpenAI setup configurations, data residency policies, and private endpoints. (40 min)"},{"id":"w24_d3_t2","day_id":2403,"task_num":2,"content":"Review security layers. (20 min)"}]},{"id":2404,"week_id":24,"day_name":"Friday","hours":"1 hour · coding","type":"Code","tasks":[{"id":"w24_d4_t1","day_id":2404,"task_num":1,"content":"Polish GitHub: write clean README documents, add configuration steps, link diagrams. (60 min)"}]},{"id":2405,"week_id":24,"day_name":"Saturday","hours":"3 hours · project work","type":"Build","tasks":[{"id":"w24_d5_t1","day_id":2405,"task_num":1,"content":"Deploy C# claims processing features live inside AKHSmart app configurations. (60 min)"},{"id":"w24_d5_t2","day_id":2405,"task_num":2,"content":"Finalize Insurance Copilot SaaS hosting settings on AWS. (60 min)"},{"id":"w24_d5_t3","day_id":2405,"task_num":3,"content":"Push all README files and diagrams to Git. Verify all builds function correctly. (60 min)"}]},{"id":2406,"week_id":24,"day_name":"Sunday","hours":"2 hours · review","type":"Review","tasks":[{"id":"w24_d6_t1","day_id":2406,"task_num":1,"content":"Retrospective: 6-Month GenAI roadmap is fully complete! Celebrate! (60 min)"},{"id":"w24_d6_t2","day_id":2406,"task_num":2,"content":"Clean up unused sandbox setups. (60 min)"}]}]}]},{"id":7,"title":"Weekly schedule","weeks_range":"10 hours/week — protect Saturday above all else","hours":"","badge_text":"","weeks":[]},{"id":8,"title":"Final portfolio — 10 projects","weeks_range":"All on GitHub by Month 6","hours":"","badge_text":"","weeks":[]}]`),at=[{csharp:`async / await`,python:`async / await`,desc:`Both support asynchronous programming with identical keywords. C# returns Task/Task<T>, whereas Python returns a coroutine object.`},{csharp:`List<T>`,python:`list`,desc:`Dynamically sized arrays. C# is strongly-typed, whereas Python lists can hold any elements (e.g., my_list = [1, 'hello', True]).`},{csharp:`Dictionary<TKey, TValue>`,python:`dict`,desc:`Key-value pair collections. Written in Python as: my_dict = {'key': 'value'}. Python dictionaries maintain insertion order since 3.7.`},{csharp:`interface`,python:`ABC / typing.Protocol`,desc:`C# uses explicit interfaces. Python uses Duck Typing naturally, but can enforce contract validation using Abstract Base Classes (ABC) or Protocol.`},{csharp:`namespace`,python:`module / package`,desc:`C# organizes code with namespace scopes. Python uses files (modules) and folders with __init__.py (packages) to construct module paths.`},{csharp:`Console.WriteLine()`,python:`print()`,desc:`Prints output to console. Python print() automatically appends a newline unless configured otherwise (e.g. print(x, end=' ')).`},{csharp:`class / constructor (public MyClass())`,python:`class / __init__(self)`,desc:`C# uses class name as constructor. Python uses the special method __init__ with explicit 'self' as the first parameter to reference instance context.`},{csharp:`null`,python:`None`,desc:`Represents the absence of value. Python uses the singleton object None instead of null.`},{csharp:`var`,python:`(implicitly typed)`,desc:`C# uses var for local type inference. Python is dynamically typed by default, meaning variables can change types at runtime.`},{csharp:`linq (Select/Where)`,python:`List Comprehensions / filter() / map()`,desc:`LINQ expressions in C# translate directly to list comprehensions in Python (e.g., [x * 2 for x in my_list if x > 5]).`},{csharp:`string.Format() / $""`,python:`f-strings (f"{var}")`,desc:`String interpolation. C# uses dollar-sign strings. Python uses f-prefix strings (e.g., f"Hello, {name}") which are highly optimized.`},{csharp:`try / catch / finally`,python:`try / except / finally`,desc:`Error handling blocks. C# uses 'catch (Exception e)', Python uses 'except Exception as e'.`}],ot=()=>{let[e]=(0,_.useState)(it),[t,n]=(0,_.useState)({}),[r,i]=(0,_.useState)({}),[a,o]=(0,_.useState)(1),[s,c]=(0,_.useState)(1),[l,u]=(0,_.useState)(()=>{let e=localStorage.getItem(`roadmapTheme`);return e===`light`||e===`dark`?e:`light`});(0,_.useEffect)(()=>{localStorage.setItem(`roadmapTheme`,l)},[l]);let[d,f]=(0,_.useState)(()=>{let e=sessionStorage.getItem(`roadmapRole`);return e===`admin`||e===`visitor`?e:sessionStorage.getItem(`adminToken`)?`admin`:null}),[p,m]=(0,_.useState)(()=>sessionStorage.getItem(`roadmapToken`)||sessionStorage.getItem(`adminToken`)),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(``),[x,ee]=(0,_.useState)(``),[S,C]=(0,_.useState)(null),[te,ne]=(0,_.useState)(!1),[re,w]=(0,_.useState)(null),[T,ie]=(0,_.useState)(``),[E,ae]=(0,_.useState)(``),[ce,D]=(0,_.useState)(``),[le,de]=(0,_.useState)(!1),[fe,k]=(0,_.useState)(!1),[_e,ve]=(0,_.useState)(``),[ye,xe]=(0,_.useState)(null),Se=e=>{let t=e.toLowerCase();return t===`learn`?(0,b.jsx)(se,{size:11,strokeWidth:2.5,style:{marginRight:`4px`}}):t===`code`?(0,b.jsx)(he,{size:11,strokeWidth:2.5,style:{marginRight:`4px`}}):t===`build`?(0,b.jsx)(Be,{size:11,strokeWidth:2.5,style:{marginRight:`4px`}}):t===`review`?(0,b.jsx)(Ne,{size:11,strokeWidth:2.5,style:{marginRight:`4px`}}):null};(0,_.useEffect)(()=>{let e=sessionStorage.getItem(`adminToken`),t=sessionStorage.getItem(`roadmapLoggedOut`);e&&d!==`admin`&&t!==`true`&&(f(`admin`),m(e),sessionStorage.setItem(`roadmapRole`,`admin`),sessionStorage.setItem(`roadmapToken`,e))},[d]),(0,_.useEffect)(()=>{p&&d?Te():(n({}),i({}))},[p,d]),(0,_.useEffect)(()=>{let e=r[`week_${s}`];e?(ie(e.learned||``),ae(e.difficulties||``),D(e.notes||``)):(ie(``),ae(``),D(``))},[s,r]);let Te=async()=>{if(p)try{let e={Authorization:`Bearer ${p}`},[t,r]=await Promise.all([fetch(`/api/roadmap/progress`,{headers:e}),fetch(`/api/roadmap/journal`,{headers:e})]);if(t.status===401||r.status===401){Oe();return}if(t.ok&&r.ok){let e=await t.json(),a=await r.json(),o={};e.forEach(e=>{o[e.taskId]=e.completed}),n(o);let s={};a.forEach(e=>{s[e.weekId]=e}),i(s)}}catch(e){console.error(`Failed to load roadmap data:`,e)}},Ee=async e=>{e.preventDefault(),ne(!0),C(null);try{let e=await fetch(`/api/roadmap/login`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({username:v,password:x})}),t=await e.json();if(!e.ok)throw Error(t.error||`Authentication failed`);sessionStorage.setItem(`roadmapToken`,t.token),sessionStorage.setItem(`roadmapRole`,t.role),sessionStorage.removeItem(`roadmapLoggedOut`),t.role===`admin`&&sessionStorage.setItem(`adminToken`,t.token),m(t.token),f(t.role),g(!1),y(``),ee(``),w(null)}catch(e){C(e.message||`Connection error. Please try again.`)}finally{ne(!1)}},Oe=()=>{sessionStorage.removeItem(`roadmapToken`),sessionStorage.removeItem(`roadmapRole`),sessionStorage.setItem(`roadmapLoggedOut`,`true`),m(null),f(null),n({}),i({})},ke=async e=>{if(!d||!p){w(`toggle_${e}`),g(!0);return}let r=!!t[e],i=!r;n(t=>({...t,[e]:i}));try{if(!(await fetch(`/api/roadmap/progress`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${p}`},body:JSON.stringify({taskId:e,completed:i})})).ok)throw Error()}catch(t){console.error(`Failed to update task completion:`,t),n(t=>({...t,[e]:r}))}},Ae=async()=>{if(!d||!p){w(`save_journal`),g(!0);return}let e=`week_${s}`;de(!0);try{if(!(await fetch(`/api/roadmap/journal`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${p}`},body:JSON.stringify({id:e,learned:T,difficulties:E,notes:ce})})).ok)throw Error();i(t=>({...t,[e]:{weekId:e,learned:T,difficulties:E,notes:ce}})),k(!0),setTimeout(()=>k(!1),3e3)}catch(e){console.error(`Failed to save journal notes:`,e),alert(`Error saving notes. Please try again.`)}finally{de(!1)}},Me=t=>{o(t);let n=e.find(e=>e.id===t);n&&n.weeks.length>0&&c(n.weeks[0].id)},Pe=0,Ie=0,Le=0,ze=Object.keys(r).length;e.forEach(e=>{e.weeks.forEach(e=>{let n=e.focus_hours.match(/(\d+)\s*hours?/i);n&&(Le+=parseInt(n[1],10)),e.days.forEach(e=>{e.tasks.forEach(e=>{Pe++,t[e.id]&&Ie++})})})});let He=Pe>0?Math.round(Ie/Pe*100):0,Ue=e.filter(e=>e.weeks.length>0),We=e.find(e=>e.id===a),j=We?.weeks.find(e=>e.id===s),Ge=at.filter(e=>e.csharp.toLowerCase().includes(_e.toLowerCase())||e.python.toLowerCase().includes(_e.toLowerCase())||e.desc.toLowerCase().includes(_e.toLowerCase()));return(0,b.jsxs)(`div`,{className:`roadmap-wrapper theme-${l}`,children:[(0,b.jsxs)(`div`,{className:`roadmap-app-container container`,children:[(0,b.jsxs)(`header`,{className:`roadmap-header`,children:[(0,b.jsxs)(`div`,{className:`roadmap-version-badge font-mono`,children:[(0,b.jsx)(`span`,{className:`roadmap-badge-dot`}),(0,b.jsx)(`span`,{children:`GENAI ROADMAP // INTERACTIVE TRACKER`})]}),(0,b.jsxs)(`div`,{className:`roadmap-header-title-row`,children:[(0,b.jsx)(`h1`,{className:`roadmap-title`,children:`GenAI Roadmap Activity Tracker`}),(0,b.jsxs)(`div`,{className:`roadmap-header-actions font-mono`,children:[(0,b.jsx)(`button`,{onClick:()=>u(l===`light`?`dark`:`light`),className:`roadmap-theme-toggle-btn`,title:`Switch to ${l===`light`?`dark`:`light`} mode`,children:l===`light`?(0,b.jsx)(De,{size:15}):(0,b.jsx)(Fe,{size:15})}),d?(0,b.jsxs)(`button`,{onClick:Oe,className:`roadmap-logout-btn font-mono`,children:[(0,b.jsx)(we,{size:14}),(0,b.jsxs)(`span`,{children:[`Log out (`,d,`)`]})]}):(0,b.jsxs)(`button`,{onClick:()=>{w(null),g(!0)},className:`roadmap-login-btn font-mono`,children:[(0,b.jsx)(Ce,{size:14}),(0,b.jsx)(`span`,{children:`Track Progress`})]})]})]}),(0,b.jsx)(`p`,{className:`roadmap-subtitle`,children:`Track your learning checkpoints, tasks progress, and retrospective journal notes across the 24-week curriculum.`})]}),!d&&(0,b.jsxs)(`div`,{className:`roadmap-banner-alert font-mono`,children:[(0,b.jsx)(A,{size:16}),(0,b.jsxs)(`span`,{children:[`Viewing in read-only guest mode. To mark tasks and save journal logs, click `,(0,b.jsx)(`strong`,{children:`Track Progress`}),` and log in with visitor account (`,(0,b.jsx)(`code`,{children:`visitor`}),` / `,(0,b.jsx)(`code`,{children:`visitor110`}),`).`]})]}),(0,b.jsxs)(`section`,{className:`roadmap-stats-grid`,children:[(0,b.jsxs)(`div`,{className:`roadmap-stat-card`,children:[(0,b.jsx)(`div`,{className:`roadmap-stat-icon`,children:(0,b.jsx)(Re,{size:24})}),(0,b.jsxs)(`div`,{className:`roadmap-stat-info`,children:[(0,b.jsxs)(`span`,{className:`roadmap-stat-val`,children:[He,`%`]}),(0,b.jsx)(`span`,{className:`roadmap-stat-lbl`,children:`OVERALL PROGRESS`})]})]}),(0,b.jsxs)(`div`,{className:`roadmap-stat-card`,children:[(0,b.jsx)(`div`,{className:`roadmap-stat-icon`,children:(0,b.jsx)(pe,{size:24})}),(0,b.jsxs)(`div`,{className:`roadmap-stat-info`,children:[(0,b.jsxs)(`span`,{className:`roadmap-stat-val`,children:[Ie,` `,(0,b.jsxs)(`span`,{className:`roadmap-stat-total`,children:[`/ `,Pe]})]}),(0,b.jsx)(`span`,{className:`roadmap-stat-lbl`,children:`TASKS COMPLETED`})]})]}),(0,b.jsxs)(`div`,{className:`roadmap-stat-card`,children:[(0,b.jsx)(`div`,{className:`roadmap-stat-icon`,children:(0,b.jsx)(me,{size:24})}),(0,b.jsxs)(`div`,{className:`roadmap-stat-info`,children:[(0,b.jsxs)(`span`,{className:`roadmap-stat-val`,children:[`~`,Le,` hrs`]}),(0,b.jsx)(`span`,{className:`roadmap-stat-lbl`,children:`CURRICULUM SIZE`})]})]}),(0,b.jsxs)(`div`,{className:`roadmap-stat-card`,children:[(0,b.jsx)(`div`,{className:`roadmap-stat-icon`,children:(0,b.jsx)(oe,{size:24})}),(0,b.jsxs)(`div`,{className:`roadmap-stat-info`,children:[(0,b.jsxs)(`span`,{className:`roadmap-stat-val`,children:[ze,` `,(0,b.jsx)(`span`,{className:`roadmap-stat-total`,children:`/ 24`})]}),(0,b.jsx)(`span`,{className:`roadmap-stat-lbl`,children:`WEEKLY JOURNALS FILLED`})]})]})]}),(0,b.jsxs)(`div`,{className:`roadmap-dashboard-layout`,children:[(0,b.jsxs)(`aside`,{className:`roadmap-sidebar`,children:[(0,b.jsxs)(`div`,{className:`roadmap-navigation-panel`,children:[(0,b.jsx)(`div`,{className:`roadmap-nav-section-title`,children:`ROADMAP MONTHS`}),(0,b.jsx)(`ul`,{className:`roadmap-month-list`,children:Ue.map(e=>{let n=0,r=0;e.weeks.forEach(e=>{e.days.forEach(e=>{e.tasks.forEach(e=>{n++,t[e.id]&&r++})})});let i=n>0?Math.round(r/n*100):0;return(0,b.jsx)(`li`,{children:(0,b.jsxs)(`button`,{className:`roadmap-month-nav-btn ${a===e.id?`active`:``}`,onClick:()=>Me(e.id),children:[(0,b.jsxs)(`span`,{className:`roadmap-month-nav-title`,children:[`M`,e.id,`: `,e.title]}),(0,b.jsxs)(`span`,{className:`roadmap-month-nav-progress font-mono`,children:[i,`%`]})]})},e.id)})})]}),j&&j.csharp_mindset&&(0,b.jsxs)(`div`,{className:`roadmap-companion-card`,children:[(0,b.jsxs)(`span`,{className:`roadmap-companion-title font-mono`,children:[(0,b.jsx)(ge,{size:16}),`Mindset Shift`]}),(0,b.jsx)(`div`,{className:`roadmap-companion-body`,dangerouslySetInnerHTML:{__html:j.csharp_mindset}})]}),(0,b.jsxs)(`div`,{className:`roadmap-companion-card roadmap-sidebar-glossary`,children:[(0,b.jsxs)(`span`,{className:`roadmap-companion-title font-mono`,children:[(0,b.jsx)(se,{size:16}),`Parallel Syntax`]}),(0,b.jsxs)(`div`,{className:`roadmap-sidebar-glossary-search`,children:[(0,b.jsx)(je,{size:12,className:`roadmap-sidebar-search-icon`}),(0,b.jsx)(`input`,{type:`text`,className:`roadmap-sidebar-search-input`,placeholder:`Search syntax...`,value:_e,onChange:e=>ve(e.target.value)})]}),(0,b.jsxs)(`div`,{className:`roadmap-sidebar-glossary-list`,children:[Ge.map((e,t)=>{let n=ye===t||_e.trim()!==``;return(0,b.jsxs)(`div`,{className:`roadmap-sidebar-glossary-item ${n?`expanded`:``}`,children:[(0,b.jsxs)(`button`,{className:`roadmap-sidebar-glossary-header`,onClick:()=>xe(ye===t?null:t),children:[(0,b.jsx)(`span`,{className:`roadmap-sidebar-glossary-csharp font-mono`,children:e.csharp}),(0,b.jsx)(`span`,{className:`roadmap-sidebar-glossary-arrow font-mono`,children:`→`}),(0,b.jsx)(`span`,{className:`roadmap-sidebar-glossary-python font-mono`,children:e.python})]}),n&&(0,b.jsx)(`div`,{className:`roadmap-sidebar-glossary-desc`,children:e.desc})]},t)}),Ge.length===0&&(0,b.jsx)(`div`,{className:`roadmap-sidebar-glossary-empty font-sans`,children:`No matching terms found.`})]})]})]}),(0,b.jsxs)(`main`,{className:`roadmap-content-area`,children:[We&&(0,b.jsx)(`div`,{className:`roadmap-week-tabs`,children:We.weeks.map(e=>(0,b.jsxs)(`button`,{className:`roadmap-week-tab-btn ${s===e.id?`active`:``}`,onClick:()=>c(e.id),children:[`Week `,e.week_number]},e.id))}),j&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`roadmap-week-info-card`,children:[(0,b.jsxs)(`div`,{className:`roadmap-week-info-header`,children:[(0,b.jsxs)(`h2`,{className:`roadmap-week-info-title`,children:[`Week `,j.week_number,` — `,j.title]}),(0,b.jsx)(`span`,{className:`roadmap-week-info-meta`,children:j.focus_hours})]}),j.weekly_goal&&(0,b.jsxs)(`div`,{className:`roadmap-goal-box`,children:[(0,b.jsx)(O,{size:16}),(0,b.jsxs)(`p`,{className:`roadmap-goal-text`,children:[(0,b.jsx)(`strong`,{children:`Goal:`}),` `,j.weekly_goal]})]})]}),(0,b.jsx)(`div`,{className:`roadmap-day-grid`,children:j.days.map(e=>(0,b.jsxs)(`div`,{className:`roadmap-day-card`,children:[(0,b.jsxs)(`div`,{className:`roadmap-day-header`,children:[(0,b.jsxs)(`div`,{className:`roadmap-day-title-group`,children:[(0,b.jsx)(`span`,{className:`roadmap-day-name`,children:e.day_name}),(0,b.jsx)(`span`,{className:`roadmap-day-hrs`,children:e.hours})]}),(0,b.jsxs)(`span`,{className:`roadmap-day-type type-${e.type.toLowerCase()}`,children:[Se(e.type),e.type]})]}),(0,b.jsx)(`ul`,{className:`roadmap-task-list`,children:e.tasks.map(e=>{let n=!!t[e.id];return(0,b.jsxs)(`li`,{className:`roadmap-task-item ${n?`completed`:``}`,onClick:()=>ke(e.id),children:[(0,b.jsx)(`div`,{className:`roadmap-task-checkbox-container ${n?`checked`:``}`,children:n&&(0,b.jsx)(ue,{size:10,strokeWidth:4})}),(0,b.jsxs)(`span`,{className:`roadmap-task-text`,children:[(0,b.jsx)(`span`,{className:`roadmap-task-num-badge`,children:e.task_num}),e.content]})]},e.id)})})]},e.id))}),(0,b.jsxs)(`section`,{className:`roadmap-journal-section`,children:[(0,b.jsxs)(`div`,{className:`roadmap-journal-header`,children:[(0,b.jsxs)(`h3`,{className:`roadmap-journal-title`,children:[(0,b.jsx)(be,{size:16}),`Week `,j.week_number,` Retro Log`]}),fe&&(0,b.jsxs)(`span`,{className:`roadmap-journal-saved-lbl font-mono`,children:[(0,b.jsx)(ue,{size:14}),`Log Saved`]})]}),(0,b.jsxs)(`div`,{className:`roadmap-journal-grid font-sans`,children:[(0,b.jsxs)(`div`,{className:`roadmap-journal-field`,children:[(0,b.jsx)(`label`,{className:`roadmap-journal-label`,children:`💡 What I learned this week`}),(0,b.jsx)(`textarea`,{className:`roadmap-journal-input`,placeholder:d?`Summarize key concepts, tools, or experiments...`:`Login to write/save notes...`,disabled:!d,value:T,onChange:e=>ie(e.target.value)})]}),(0,b.jsxs)(`div`,{className:`roadmap-journal-field`,children:[(0,b.jsx)(`label`,{className:`roadmap-journal-label`,children:`⚠️ Difficulties & Bugs`}),(0,b.jsx)(`textarea`,{className:`roadmap-journal-input`,placeholder:d?`Mention errors, roadblocks or things to study further...`:`Login to write/save notes...`,disabled:!d,value:E,onChange:e=>ae(e.target.value)})]}),(0,b.jsxs)(`div`,{className:`roadmap-journal-field`,children:[(0,b.jsx)(`label`,{className:`roadmap-journal-label`,children:`📝 General Review & Ideas`}),(0,b.jsx)(`textarea`,{className:`roadmap-journal-input`,placeholder:d?`Reflections, next steps, coding project sketches...`:`Login to write/save notes...`,disabled:!d,value:ce,onChange:e=>D(e.target.value)})]})]}),(0,b.jsx)(`div`,{className:`roadmap-journal-footer`,children:(0,b.jsx)(`button`,{onClick:Ae,disabled:le,className:`roadmap-btn-primary`,children:le?`Saving...`:`Save Review`})})]})]})]})]})]}),h&&(0,b.jsx)(`div`,{className:`roadmap-modal-overlay`,children:(0,b.jsxs)(`div`,{className:`roadmap-modal-card`,children:[(0,b.jsxs)(`div`,{className:`roadmap-modal-header`,children:[(0,b.jsxs)(`span`,{className:`roadmap-modal-title`,children:[(0,b.jsx)(Ce,{size:16}),`Access Gatekeeper`]}),(0,b.jsx)(`button`,{onClick:()=>g(!1),className:`roadmap-modal-close`,children:(0,b.jsx)(Ve,{size:18})})]}),(0,b.jsxs)(`form`,{onSubmit:Ee,className:`roadmap-modal-form`,children:[(0,b.jsx)(`p`,{className:`roadmap-modal-description`,children:re?`Authentication is required to modify roadmap progress or save review logs.`:`Sign in to track progress checklists and write retrospective review logs.`}),(0,b.jsx)(`div`,{className:`roadmap-modal-credentials-note`,children:(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`strong`,{children:`Visitors`}),`: Login with `,(0,b.jsx)(`code`,{children:`visitor`}),` / `,(0,b.jsx)(`code`,{children:`visitor110`})]})}),S&&(0,b.jsxs)(`div`,{className:`roadmap-modal-error font-mono`,children:[(0,b.jsx)(A,{size:14}),(0,b.jsx)(`span`,{children:S})]}),(0,b.jsxs)(`div`,{className:`roadmap-modal-field`,children:[(0,b.jsx)(`label`,{className:`roadmap-modal-label`,children:`Username`}),(0,b.jsx)(`input`,{type:`text`,required:!0,className:`roadmap-modal-input`,placeholder:`Username`,value:v,onChange:e=>y(e.target.value)})]}),(0,b.jsxs)(`div`,{className:`roadmap-modal-field`,children:[(0,b.jsx)(`label`,{className:`roadmap-modal-label`,children:`Password`}),(0,b.jsx)(`input`,{type:`password`,required:!0,className:`roadmap-modal-input`,placeholder:`••••••••`,value:x,onChange:e=>ee(e.target.value)})]}),(0,b.jsx)(`button`,{type:`submit`,disabled:te,className:`roadmap-modal-btn`,children:te?`Verifying...`:`Authenticate`})]})]})}),(0,b.jsx)(`style`,{children:`
        /* Reset raw section element paddings that leak from global portfolio stylesheet */
        .roadmap-wrapper section {
          padding: 0 !important;
          position: relative;
        }

        .roadmap-wrapper {
          --radius-sm: 8px;
          --radius-md: 12px;
          --radius-lg: 20px;
          --font-sans: 'Outfit', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
          --transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .roadmap-wrapper.theme-light {
          --bg-app: #f8fafc;
          --bg-gradient: radial-gradient(circle at 50% 0%, #e2e8f0 0%, #f8fafc 100%);
          --bg-card: #ffffff;
          --bg-card-hover: #f1f5f9;
          
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --text-muted: #94a3b8;
          --text-info: #0284c7;
          
          --border-color: rgba(0, 0, 0, 0.06);
          --border-hover: rgba(14, 165, 233, 0.3);
          --accent: #0284c7;
          --accent-rgb: 2, 132, 199;
          --accent-glow: rgba(2, 132, 199, 0.06);
          --accent-border: rgba(2, 132, 199, 0.15);
          
          --color-learn: #3b82f6;
          --color-build: #10b981;
          --color-read: #f59e0b;
          --color-check: #8b5cf6;
          
          --badge-info-bg: rgba(2, 132, 199, 0.06);
          --badge-info-text: #0369a1;
          --badge-info-border: rgba(2, 132, 199, 0.12);

          --shadow-sm: 0 2px 4px rgba(0,0,0,0.02);
          --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.04);
          --shadow-lg: 0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.06);

          --progress-badge-bg: rgba(0, 0, 0, 0.05);
          --code-bg: rgba(0, 0, 0, 0.04);
          --goal-bg: rgba(2, 132, 199, 0.03);
          --goal-border: rgba(2, 132, 199, 0.08);
          
          --day-type-learn-bg: rgba(59, 130, 246, 0.08);
          --day-type-build-bg: rgba(16, 185, 129, 0.08);
          --day-type-read-bg: rgba(245, 158, 11, 0.08);
          
          --input-bg: #f8fafc;
          --modal-bg: #ffffff;
          --modal-overlay-bg: rgba(15, 23, 42, 0.6);
          
          --btn-primary-bg: #0f172a;
          --btn-primary-text: #ffffff;
          --btn-primary-hover-bg: #1e293b;

          --timeline-btn-active-bg: #0f172a;
          --timeline-btn-active-text: #ffffff;

          --title-gradient: linear-gradient(135deg, #0f172a 40%, #0284c7 100%);
        }

        .roadmap-wrapper.theme-dark {
          --bg-app: #080b11;
          --bg-gradient: radial-gradient(circle at 50% 0%, #151d2a 0%, #080b11 100%);
          --bg-card: #111724;
          --bg-card-hover: #182032;
          
          --text-primary: #f1f5f9;
          --text-secondary: #94a3b8;
          --text-muted: #64748b;
          --text-info: #38bdf8;
          
          --border-color: rgba(255, 255, 255, 0.08);
          --border-hover: rgba(56, 189, 248, 0.4);
          --accent: #38bdf8;
          --accent-rgb: 56, 189, 248;
          --accent-glow: rgba(56, 189, 248, 0.08);
          --accent-border: rgba(56, 189, 248, 0.3);
          
          --color-learn: #60a5fa;
          --color-build: #34d399;
          --color-read: #fbbf24;
          --color-check: #a78bfa;
          
          --badge-info-bg: rgba(56, 189, 248, 0.08);
          --badge-info-text: #38bdf8;
          --badge-info-border: rgba(56, 189, 248, 0.2);

          --shadow-sm: 0 2px 4px rgba(0,0,0,0.15);
          --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.3);
          --shadow-lg: 0 10px 25px -5px rgba(0,0,0,0.5), 0 8px 10px -6px rgba(0,0,0,0.5);

          --progress-badge-bg: rgba(255, 255, 255, 0.08);
          --code-bg: rgba(255, 255, 255, 0.06);
          --goal-bg: rgba(56, 189, 248, 0.04);
          --goal-border: rgba(56, 189, 248, 0.12);
          
          --day-type-learn-bg: rgba(96, 165, 250, 0.15);
          --day-type-build-bg: rgba(52, 211, 153, 0.15);
          --day-type-read-bg: rgba(251, 191, 36, 0.15);
          
          --input-bg: #0c101a;
          --modal-bg: #111724;
          --modal-overlay-bg: rgba(0, 0, 0, 0.85);
          
          --btn-primary-bg: #38bdf8;
          --btn-primary-text: #080b11;
          --btn-primary-hover-bg: #7dd3fc;

          --timeline-btn-active-bg: #38bdf8;
          --timeline-btn-active-text: #080b11;

          --title-gradient: linear-gradient(135deg, #ffffff 45%, #38bdf8 100%);
        }

        .roadmap-wrapper {
          color: var(--text-primary);
          background-color: var(--bg-app);
          background: var(--bg-gradient);
          background-attachment: fixed;
          min-height: 100vh;
          font-family: var(--font-sans);
          padding: 2.5rem 0;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }
        .roadmap-app-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .roadmap-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .roadmap-version-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-family: var(--font-mono);
          background: var(--badge-info-bg);
          color: var(--badge-info-text);
          border: 1px solid var(--badge-info-border);
          border-radius: 30px;
          padding: 6px 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          font-weight: 600;
          box-shadow: var(--shadow-sm);
        }
        .roadmap-badge-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--accent);
        }
        .roadmap-header-title-row {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-bottom: 0.5rem;
        }
        .roadmap-title {
          font-size: 2.75rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          background: var(--title-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .roadmap-header-actions {
          position: absolute;
          right: 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .roadmap-theme-toggle-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          width: 36px;
          height: 36px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
        .roadmap-theme-toggle-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
          border-color: var(--border-hover);
        }
        .roadmap-login-btn, .roadmap-logout-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
          font-family: var(--font-sans);
        }
        .roadmap-login-btn:hover, .roadmap-logout-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
          border-color: var(--border-hover);
        }
        .roadmap-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 650px;
          margin: 0 auto;
        }
        .roadmap-banner-alert {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
          color: var(--color-read);
          border-radius: var(--radius-sm);
          padding: 10px 16px;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
        }
        /* Stats grid */
        .roadmap-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .roadmap-stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
        .roadmap-stat-card:hover {
          transform: translateY(-2px);
          border-color: var(--border-hover);
          box-shadow: var(--shadow-md);
        }
        .roadmap-stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: var(--accent-glow);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .roadmap-stat-info {
          display: flex;
          flex-direction: column;
        }
        .roadmap-stat-val {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-mono);
          line-height: 1.2;
        }
        .roadmap-stat-total {
          font-size: 14px;
          color: var(--text-muted);
        }
        .roadmap-stat-lbl {
          font-size: 11px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        /* Dashboard layout */
        .roadmap-dashboard-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .roadmap-dashboard-layout {
            grid-template-columns: 1fr;
          }
          .roadmap-header-actions {
            position: static;
            margin: 1rem auto 0;
            width: fit-content;
            justify-content: center;
          }
          .roadmap-header-title-row {
            flex-direction: column;
          }
        }
        /* Sidebar */
        .roadmap-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .roadmap-navigation-panel {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1rem;
          box-shadow: var(--shadow-sm);
        }
        .roadmap-nav-section-title {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          margin-bottom: 0.75rem;
          padding-left: 0.5rem;
          font-weight: 700;
        }
        .roadmap-month-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .roadmap-month-nav-btn {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid transparent;
          background: transparent;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          text-align: left;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: var(--transition-smooth);
          font-family: inherit;
        }
        .roadmap-month-nav-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
        }
        .roadmap-month-nav-btn.active {
          background: var(--accent-glow);
          color: var(--accent);
          border-color: var(--accent-border);
          font-weight: 600;
        }
        .roadmap-month-nav-title {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 170px;
        }
        .roadmap-month-nav-progress {
          font-size: 11px;
          font-family: var(--font-mono);
          background: var(--progress-badge-bg);
          padding: 2px 6px;
          border-radius: 10px;
          color: var(--text-secondary);
        }
        .roadmap-month-nav-btn.active .roadmap-month-nav-progress {
          background: var(--accent-glow);
          color: var(--accent);
        }
        /* Mindset shift widget */
        .roadmap-companion-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .roadmap-companion-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .roadmap-companion-body {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
          border-left: 3px solid var(--accent);
          padding-left: 10px;
        }
        .roadmap-companion-body code {
          font-family: var(--font-mono);
          background: var(--code-bg);
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 11.5px;
          color: var(--text-primary);
        }
        /* Main Area */
        .roadmap-content-area {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        /* Week selector tabs */
        .roadmap-week-tabs {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding-bottom: 6px;
        }
        .roadmap-week-tab-btn {
          padding: 10px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
        .roadmap-week-tab-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
        }
        .roadmap-week-tab-btn.active {
          background: var(--timeline-btn-active-bg);
          color: var(--timeline-btn-active-text);
          border-color: var(--timeline-btn-active-bg);
        }
        /* Week header card */
        .roadmap-week-info-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .roadmap-week-info-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .roadmap-week-info-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .roadmap-week-info-meta {
          font-size: 12px;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
        .roadmap-goal-box {
          background: var(--goal-bg);
          border: 1px solid var(--goal-border);
          border-radius: var(--radius-sm);
          padding: 1rem;
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          font-size: 14px;
          color: var(--text-info);
          line-height: 1.5;
        }
        .roadmap-goal-box svg {
          flex-shrink: 0;
          color: var(--accent);
          margin-top: 2px;
        }
        .roadmap-goal-text {
          margin: 0;
        }
        /* Day grid */
        .roadmap-day-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        .roadmap-day-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }
        .roadmap-day-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--border-hover);
        }
        .roadmap-day-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed var(--border-color);
        }
        .roadmap-day-title-group {
          display: flex;
          flex-direction: column;
        }
        .roadmap-day-name {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .roadmap-day-hrs {
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
        .roadmap-day-type {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 5px 10px;
          border-radius: 6px;
          letter-spacing: 0.05em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }
        .roadmap-day-type.type-learn {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }
        .roadmap-day-type.type-code {
          background: rgba(6, 182, 212, 0.15);
          color: #22d3ee;
          border: 1px solid rgba(6, 182, 212, 0.25);
        }
        .roadmap-day-type.type-build {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }
        .roadmap-day-type.type-review {
          background: rgba(139, 92, 246, 0.15);
          color: #a78bfa;
          border: 1px solid rgba(139, 92, 246, 0.25);
        }
        /* Checklists */
        .roadmap-task-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .roadmap-task-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 13.5px;
          color: var(--text-secondary);
          cursor: pointer;
          user-select: none;
          padding: 2px 0;
          transition: var(--transition-smooth);
        }
        .roadmap-task-item:hover {
          color: var(--text-primary);
        }
        .roadmap-task-checkbox-container {
          position: relative;
          width: 18px;
          height: 18px;
          border: 2px solid var(--text-muted);
          border-radius: 4px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }
        .roadmap-task-item:hover .roadmap-task-checkbox-container {
          border-color: var(--accent);
        }
        .roadmap-task-checkbox-container.checked {
          border-color: var(--color-build);
          background-color: var(--color-build);
        }
        .roadmap-task-checkbox-container.checked svg {
          color: #ffffff;
        }
        .roadmap-task-text {
          transition: var(--transition-smooth);
          line-height: 1.4;
        }
        .roadmap-task-item.completed .roadmap-task-text {
          text-decoration: line-through;
          color: var(--text-muted);
        }
        .roadmap-task-num-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          background: var(--code-bg);
          padding: 1px 5px;
          border-radius: 3px;
          margin-right: 6px;
          color: var(--text-secondary);
        }
        .roadmap-task-item.completed .roadmap-task-num-badge {
          background: rgba(16, 185, 129, 0.1);
          color: var(--color-build);
        }
        /* Journal Section */
        .roadmap-journal-section {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .roadmap-journal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .roadmap-journal-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .roadmap-journal-saved-lbl {
          font-size: 12px;
          color: var(--color-build);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .roadmap-journal-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .roadmap-journal-field {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: var(--transition-smooth);
        }
        .roadmap-journal-field:hover {
          border-color: rgba(var(--accent-rgb), 0.15);
          background: rgba(255, 255, 255, 0.025);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .roadmap-journal-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .roadmap-journal-input {
          width: 100%;
          height: 100px;
          min-height: 100px;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 6px;
          padding: 12px 14px;
          font-family: inherit;
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-primary);
          resize: vertical;
          outline: none;
          transition: var(--transition-smooth);
        }
        .roadmap-journal-input:focus {
          border-color: var(--accent-color);
          background: rgba(0, 0, 0, 0.35);
          box-shadow: 0 0 8px var(--accent-glow);
        }
        .roadmap-journal-input::placeholder {
          color: var(--text-muted);
          font-size: 12px;
        }
        .roadmap-journal-input:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .roadmap-journal-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 0.5rem;
        }
        .roadmap-btn-primary {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
          border: none;
          padding: 10px 20px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-sm);
        }
        .roadmap-btn-primary:hover {
          background: var(--btn-primary-hover-bg);
          transform: translateY(-1px);
        }
        .roadmap-btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        /* Sidebar glossary custom styles */
        .roadmap-sidebar-glossary {
          gap: 0.75rem;
        }
        .roadmap-sidebar-glossary-search {
          position: relative;
          width: 100%;
        }
        .roadmap-sidebar-search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .roadmap-sidebar-search-input {
          width: 100%;
          padding: 6px 10px 6px 28px;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 12px;
          outline: none;
          background: var(--input-bg);
          transition: var(--transition-smooth);
          color: var(--text-primary);
          font-family: var(--font-sans);
        }
        .roadmap-sidebar-search-input:focus {
          border-color: var(--accent);
          background: var(--bg-card);
          box-shadow: 0 0 0 2px var(--accent-glow);
        }
        .roadmap-sidebar-glossary-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-height: 380px;
          overflow-y: auto;
          padding-right: 4px;
        }
        .roadmap-sidebar-glossary-list::-webkit-scrollbar {
          width: 4px;
        }
        .roadmap-sidebar-glossary-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .roadmap-sidebar-glossary-item {
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.015);
          overflow: hidden;
          transition: var(--transition-smooth);
          flex-shrink: 0;
        }
        .roadmap-sidebar-glossary-item:hover {
          border-color: rgba(var(--accent-rgb), 0.2);
          background: rgba(255, 255, 255, 0.025);
        }
        .roadmap-sidebar-glossary-item.expanded {
          border-color: rgba(var(--accent-rgb), 0.35);
          background: rgba(var(--accent-rgb), 0.03);
        }
        .roadmap-sidebar-glossary-header {
          width: 100%;
          background: transparent;
          border: none;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          color: var(--text-primary);
          min-height: 44px;
          line-height: 1.4;
        }
        .roadmap-sidebar-glossary-csharp {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-secondary);
          width: 45%;
          word-break: break-all;
          text-align: left;
        }
        .roadmap-sidebar-glossary-arrow {
          font-size: 10px;
          color: var(--text-muted);
          width: 10%;
          text-align: center;
        }
        .roadmap-sidebar-glossary-python {
          font-size: 11px;
          font-weight: 600;
          color: var(--accent);
          width: 45%;
          word-break: break-all;
          text-align: right;
        }
        .roadmap-sidebar-glossary-desc {
          padding: 8px 10px;
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1.4;
          border-top: 1px solid var(--border-color);
          background: rgba(0, 0, 0, 0.15);
        }
        .roadmap-sidebar-glossary-empty {
          font-size: 12px;
          color: var(--text-muted);
          text-align: center;
          padding: 1rem;
        }
        /* Login modal gatekeeper */
        .roadmap-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--modal-overlay-bg);
          backdrop-filter: blur(8px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .roadmap-modal-card {
          background: var(--modal-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          max-width: 420px;
          width: 100%;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          color: var(--text-primary);
        }
        .roadmap-modal-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .roadmap-modal-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
        }
        .roadmap-modal-close {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .roadmap-modal-close:hover {
          color: var(--text-primary);
        }
        .roadmap-modal-form {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .roadmap-modal-description {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .roadmap-modal-credentials-note {
          background: var(--accent-glow);
          border: 1px dashed var(--accent-border);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          font-size: 12px;
          color: var(--badge-info-text);
          text-align: center;
        }
        .roadmap-modal-credentials-note code {
          background: rgba(2, 132, 199, 0.08);
          padding: 1px 4px;
          border-radius: 4px;
        }
        .roadmap-modal-error {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #ef4444;
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          font-size: 12px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .roadmap-modal-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .roadmap-modal-label {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-secondary);
          font-weight: 600;
        }
        .roadmap-modal-input {
          width: 100%;
          background: var(--input-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px 12px;
          color: var(--text-primary);
          font-size: 13.5px;
          outline: none;
          transition: var(--transition-smooth);
        }
        .roadmap-modal-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
        .roadmap-modal-btn {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
          border: none;
          border-radius: var(--radius-sm);
          padding: 12px;
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .roadmap-modal-btn:hover {
          background: var(--btn-primary-hover-bg);
        }
      `})]})};function st(){let[e,t]=(0,_.useState)(()=>window.location.pathname===`/roadmap`?`roadmap`:`home`);return(0,_.useEffect)(()=>{fetch(`/api/stats`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({referrer:document.referrer||``,userAgent:navigator.userAgent||``,user_agent:navigator.userAgent||``,pagePath:window.location.pathname||``,page_path:window.location.pathname||``,path:window.location.pathname||``})}).catch(e=>console.error(`Failed to log stats:`,e))},[]),(0,b.jsxs)(`div`,{className:`app-wrapper`,children:[e!==`roadmap`&&(0,b.jsx)(tt,{}),e!==`roadmap`&&(0,b.jsx)(x,{activeView:e,setActiveView:t}),(0,b.jsx)(`main`,{className:`main-content`,children:e===`home`?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(j,{setActiveView:t}),(0,b.jsx)(nt,{leftText:`0x01`,rightText:`load_expertise`}),(0,b.jsx)(Ge,{}),(0,b.jsx)(nt,{leftText:`0x02`,rightText:`query_projects`}),(0,b.jsx)(Je,{}),(0,b.jsx)(nt,{leftText:`0x03`,rightText:`read_timeline`}),(0,b.jsx)(Ye,{}),(0,b.jsx)(nt,{leftText:`0x04`,rightText:`handshake_sync`}),(0,b.jsx)(et,{})]}):e===`roadmap`?(0,b.jsx)(ot,{}):e===`admin`?(0,b.jsx)(`div`,{className:`admin-view-wrapper`,children:(0,b.jsx)(rt,{setActiveView:t})}):(0,b.jsx)(`div`,{className:`blog-view-wrapper`,children:(0,b.jsx)(Ze,{})})}),e!==`roadmap`&&(0,b.jsx)(`footer`,{className:`footer font-mono`,children:(0,b.jsxs)(`div`,{className:`container footer-container`,children:[(0,b.jsxs)(`p`,{children:[`© `,new Date().getFullYear(),`. Made with passion by Baqar Hussain Naqvi.`]}),(0,b.jsx)(`p`,{className:`footer-status`,children:`Status: Active & building`})]})}),(0,b.jsx)(`style`,{children:`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
        }
        .blog-view-wrapper {
          padding-top: 8rem;
          padding-bottom: 6rem;
        }
        .admin-view-wrapper {
          padding-top: 2rem;
          padding-bottom: 6rem;
        }
        .footer {
          border-top: 1px solid var(--border-color);
          background: rgba(7, 9, 14, 0.95);
          padding: 2rem 0;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-status {
          color: var(--accent-color);
          text-shadow: 0 0 5px var(--accent-glow);
        }
        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}var ct=()=>{window.si||(window.si=function(...e){window.siq=window.siq||[],window.siq.push(e)})},lt=`@vercel/speed-insights`,ut=`2.0.0`;function dt(){return typeof window<`u`}function ft(){return`production`}function pt(){return ft()===`development`}function mt(e){return e.scriptSrc?gt(e.scriptSrc):pt()?`https://va.vercel-scripts.com/v1/speed-insights/script.debug.js`:e.dsn?`https://va.vercel-scripts.com/v1/speed-insights/script.js`:e.basePath?gt(`${e.basePath}/speed-insights/script.js`):`/_vercel/speed-insights/script.js`}function ht(e,t){let n=e;if(t)try{n={...JSON.parse(t)?.speedInsights,...e}}catch{}let r={sdkn:lt+(n.framework?`/${n.framework}`:``),sdkv:ut};return n.sampleRate&&(r.sampleRate=n.sampleRate.toString()),n.route&&(r.route=n.route),pt()&&n.debug===!1&&(r.debug=`false`),n.dsn&&(r.dsn=n.dsn),n.endpoint?r.endpoint=gt(n.endpoint):n.basePath&&(r.endpoint=gt(`${n.basePath}/speed-insights/vitals`)),{src:mt(n),beforeSend:n.beforeSend,dataset:r}}function gt(e){return e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`/`)?e:`/${e}`}function _t(e={},t){var n;if(!dt()||e.route===null)return null;ct();let{beforeSend:r,src:i,dataset:a}=ht(e,t);if(document.head.querySelector(`script[src*="${i}"]`))return null;r&&((n=window.si)==null||n.call(window,`beforeSend`,r));let o=document.createElement(`script`);o.src=i,o.defer=!0;for(let[e,t]of Object.entries(a))o.dataset[e]=t;return o.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${i}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(o),{setRoute:e=>{o.dataset.route=e??void 0}}}function vt(){if(!(typeof process>`u`))return{}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function yt(){if(!(typeof process>`u`))return{}.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG}function bt(e){(0,_.useEffect)(()=>{var t;e.beforeSend&&((t=window.si)==null||t.call(window,`beforeSend`,e.beforeSend))},[e.beforeSend]);let t=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!t.current){let n=_t({framework:e.framework??`react`,basePath:e.basePath??vt(),...e},e.configString??yt());n&&(t.current=n.setRoute)}},[e]),(0,_.useEffect)(()=>{t.current&&e.route&&t.current(e.route)},[e.route]),null}(0,v.createRoot)(document.getElementById(`root`)).render((0,b.jsxs)(_.StrictMode,{children:[(0,b.jsx)(st,{}),(0,b.jsx)(bt,{})]}));