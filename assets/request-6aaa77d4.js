import{_ as se,s as rt,l as st,b as x,t as it,P as ge,v as ot,w as D}from"./useConfigInject-855253b5.js";import{f as at,J as ct,n as ut,L as Se,M as Ee,j as R}from"./vue-router.esm-bundler-d94c5ebd.js";import{R as ee}from"./index-79d3e907.js";var lt=typeof global=="object"&&global&&global.Object===Object&&global;const ft=lt;var dt=typeof self=="object"&&self&&self.Object===Object&&self,pt=ft||dt||Function("return this")();const Le=pt;var ht=Le.Symbol;const K=ht;var ve=Object.prototype,mt=ve.hasOwnProperty,yt=ve.toString,k=K?K.toStringTag:void 0;function bt(e){var t=mt.call(e,k),n=e[k];try{e[k]=void 0;var r=!0}catch{}var s=yt.call(e);return r&&(t?e[k]=n:delete e[k]),s}var gt=Object.prototype,St=gt.toString;function Et(e){return St.call(e)}var wt="[object Null]",Ot="[object Undefined]",we=K?K.toStringTag:void 0;function Rt(e){return e==null?e===void 0?Ot:wt:we&&we in Object(e)?bt(e):Et(e)}function Tt(e){return e!=null&&typeof e=="object"}var At=function(t,n){var r=se({},t);return Object.keys(n).forEach(function(s){var i=r[s];if(i)i.type||i.default?i.default=n[s]:i.def?i.def(n[s]):r[s]={type:i,default:n[s]};else throw new Error("not have ".concat(s," prop"))}),r};const xt=At;function ie(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Nt="[object Symbol]";function Pt(e){return typeof e=="symbol"||Tt(e)&&Rt(e)==Nt}var Ct=/\s/;function _t(e){for(var t=e.length;t--&&Ct.test(e.charAt(t)););return t}var jt=/^\s+/;function Ft(e){return e&&e.slice(0,_t(e)+1).replace(jt,"")}var Oe=0/0,Ut=/^[-+]0x[0-9a-f]+$/i,Dt=/^0b[01]+$/i,Bt=/^0o[0-7]+$/i,Lt=parseInt;function Re(e){if(typeof e=="number")return e;if(Pt(e))return Oe;if(ie(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ie(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ft(e);var n=Dt.test(e);return n||Bt.test(e)?Lt(e.slice(2),n?2:8):Ut.test(e)?Oe:+e}var vt=function(){return Le.Date.now()};const te=vt;var kt="Expected a function",It=Math.max,$t=Math.min;function Mt(e,t,n){var r,s,i,o,a,d,u=0,l=!1,p=!1,g=!0;if(typeof e!="function")throw new TypeError(kt);t=Re(t)||0,ie(n)&&(l=!!n.leading,p="maxWait"in n,i=p?It(Re(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g);function y(S){var T=r,v=s;return r=s=void 0,u=S,o=e.apply(v,T),o}function f(S){return u=S,a=setTimeout(b,t),l?y(S):o}function h(S){var T=S-d,v=S-u,be=t-T;return p?$t(be,i-v):be}function w(S){var T=S-d,v=S-u;return d===void 0||T>=t||T<0||p&&v>=i}function b(){var S=te();if(w(S))return O(S);a=setTimeout(b,h(S))}function O(S){return a=void 0,g&&r?y(S):(r=s=void 0,o)}function C(){a!==void 0&&clearTimeout(a),u=0,r=d=s=a=void 0}function U(){return a===void 0?o:O(te())}function j(){var S=te(),T=w(S);if(r=arguments,s=this,d=S,T){if(a===void 0)return f(d);if(p)return clearTimeout(a),a=setTimeout(b,t),y(d)}return a===void 0&&(a=setTimeout(b,t)),o}return j.cancel=C,j.flush=U,j}var Ht=["class","style"],qt=function(){return{prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:ge.any,delay:Number,indicator:ge.any}},q=null;function zt(e,t){return!!e&&!!t&&!isNaN(Number(t))}function cr(e){var t=e.indicator;q=typeof t=="function"?t:function(){return R(t,null,null)}}const ur=at({compatConfig:{MODE:3},name:"ASpin",inheritAttrs:!1,props:xt(qt(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:ct("configProvider",ot)}},data:function(){var t=this.spinning,n=this.delay,r=zt(t,n);return{sSpinning:t&&!r}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var t=this;ut(function(){t.debouncifyUpdateSpinning(),t.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(t){var n=t||this.$props,r=n.delay;r&&(this.cancelExistingSpin(),this.updateSpinning=Mt(this.originalUpdateSpinning,r))},updateSpinning:function(){var t=this.spinning,n=this.sSpinning;n!==t&&(this.sSpinning=t)},cancelExistingSpin:function(){var t=this.updateSpinning;t&&t.cancel&&t.cancel()},renderIndicator:function(t){var n="".concat(t,"-dot"),r=rt(this,"indicator");return r===null?null:(Array.isArray(r)&&(r=r.length===1?r[0]:r),Se(r)?Ee(r,{class:n}):q&&Se(q())?Ee(q(),{class:n}):R("span",{class:"".concat(n," ").concat(t,"-dot-spin")},[R("i",{class:"".concat(t,"-dot-item")},null),R("i",{class:"".concat(t,"-dot-item")},null),R("i",{class:"".concat(t,"-dot-item")},null),R("i",{class:"".concat(t,"-dot-item")},null)]))}},render:function(){var t,n,r,s=this.$props,i=s.size,o=s.prefixCls,a=s.tip,d=a===void 0?(t=(n=this.$slots).tip)===null||t===void 0?void 0:t.call(n):a,u=s.wrapperClassName,l=this.$attrs,p=l.class,g=l.style,y=st(l,Ht),f=this.configProvider,h=f.getPrefixCls,w=f.direction,b=h("spin",o),O=this.sSpinning,C=(r={},x(r,b,!0),x(r,"".concat(b,"-sm"),i==="small"),x(r,"".concat(b,"-lg"),i==="large"),x(r,"".concat(b,"-spinning"),O),x(r,"".concat(b,"-show-text"),!!d),x(r,"".concat(b,"-rtl"),w==="rtl"),x(r,p,!!p),r),U=R("div",se(se({},y),{},{style:g,class:C}),[this.renderIndicator(b),d?R("div",{class:"".concat(b,"-text")},[d]):null]),j=it(this);if(j&&j.length){var S,T=(S={},x(S,"".concat(b,"-container"),!0),x(S,"".concat(b,"-blur"),O),S);return R("div",{class:["".concat(b,"-nested-loading"),u]},[O&&R("div",{key:"loading"},[U]),R("div",{class:T,key:"container"},[j])])}return U}});function ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ie}=Object.prototype,{getPrototypeOf:le}=Object,fe=(e=>t=>{const n=Ie.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>fe(t)===e),X=e=>t=>typeof t===e,{isArray:L}=Array,$=X("undefined");function Jt(e){return e!==null&&!$(e)&&e.constructor!==null&&!$(e.constructor)&&F(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const $e=P("ArrayBuffer");function Wt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&$e(e.buffer),t}const Vt=X("string"),F=X("function"),Me=X("number"),de=e=>e!==null&&typeof e=="object",Kt=e=>e===!0||e===!1,z=e=>{if(fe(e)!=="object")return!1;const t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Gt=P("Date"),Xt=P("File"),Qt=P("Blob"),Yt=P("FileList"),Zt=e=>de(e)&&F(e.pipe),en=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ie.call(e)===t||F(e.toString)&&e.toString()===t)},tn=P("URLSearchParams"),nn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function He(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const qe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ze=e=>!$(e)&&e!==qe;function oe(){const{caseless:e}=ze(this)&&this||{},t={},n=(r,s)=>{const i=e&&He(t,s)||s;z(t[i])&&z(r)?t[i]=oe(t[i],r):z(r)?t[i]=oe({},r):L(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&M(arguments[r],n);return t}const rn=(e,t,n,{allOwnKeys:r}={})=>(M(t,(s,i)=>{n&&F(s)?e[i]=ke(s,n):e[i]=s},{allOwnKeys:r}),e),sn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),on=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},an=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},cn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},un=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Me(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ln=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&le(Uint8Array)),fn=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},dn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pn=P("HTMLFormElement"),hn=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Te=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mn=P("RegExp"),Je=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},yn=e=>{Je(e,(t,n)=>{if(F(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(F(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bn=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return L(e)?r(e):r(String(e).split(t)),n},gn=()=>{},Sn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),En=e=>{const t=new Array(10),n=(r,s)=>{if(de(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=L(r)?[]:{};return M(r,(o,a)=>{const d=n(o,s+1);!$(d)&&(i[a]=d)}),t[s]=void 0,i}}return r};return n(e,0)},c={isArray:L,isArrayBuffer:$e,isBuffer:Jt,isFormData:en,isArrayBufferView:Wt,isString:Vt,isNumber:Me,isBoolean:Kt,isObject:de,isPlainObject:z,isUndefined:$,isDate:Gt,isFile:Xt,isBlob:Qt,isRegExp:mn,isFunction:F,isStream:Zt,isURLSearchParams:tn,isTypedArray:ln,isFileList:Yt,forEach:M,merge:oe,extend:rn,trim:nn,stripBOM:sn,inherits:on,toFlatObject:an,kindOf:fe,kindOfTest:P,endsWith:cn,toArray:un,forEachEntry:fn,matchAll:dn,isHTMLForm:pn,hasOwnProperty:Te,hasOwnProp:Te,reduceDescriptors:Je,freezeMethods:yn,toObjectSet:bn,toCamelCase:hn,noop:gn,toFiniteNumber:Sn,findKey:He,global:qe,isContextDefined:ze,toJSONObject:En};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}c.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const We=m.prototype,Ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ve[e]={value:e}});Object.defineProperties(m,Ve);Object.defineProperty(We,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(We);return c.toFlatObject(e,o,function(d){return d!==Error.prototype},a=>a!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var wn=typeof self=="object"?self.FormData:window.FormData;const On=wn;function ae(e){return c.isPlainObject(e)||c.isArray(e)}function Ke(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function Ae(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ke(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Rn(e){return c.isArray(e)&&!e.some(ae)}const Tn=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function An(e){return e&&c.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function Q(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new(On||FormData),n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,w){return!c.isUndefined(w[h])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&An(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(c.isDate(f))return f.toISOString();if(!d&&c.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(f)||c.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,w){let b=f;if(f&&!w&&typeof f=="object"){if(c.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(c.isArray(f)&&Rn(f)||c.isFileList(f)||c.endsWith(h,"[]")&&(b=c.toArray(f)))return h=Ke(h),b.forEach(function(C,U){!(c.isUndefined(C)||C===null)&&t.append(o===!0?Ae([h],U,i):o===null?h:h+"[]",u(C))}),!1}return ae(f)?!0:(t.append(Ae(w,h,i),u(f)),!1)}const p=[],g=Object.assign(Tn,{defaultVisitor:l,convertValue:u,isVisitable:ae});function y(f,h){if(!c.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),c.forEach(f,function(b,O){(!(c.isUndefined(b)||b===null)&&s.call(t,b,c.isString(O)?O.trim():O,h,g))===!0&&y(b,h?h.concat(O):[O])}),p.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return y(e),t}function xe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&Q(e,this,t)}const Ge=pe.prototype;Ge.append=function(t,n){this._pairs.push([t,n])};Ge.toString=function(t){const n=t?function(r){return t.call(this,r,xe)}:xe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function xn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xe(e,t,n){if(!t)return e;const r=n&&n.encode||xn,s=n&&n.serialize;let i;if(s?i=s(t,n):i=c.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Nn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ne=Nn,Qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pn=typeof URLSearchParams<"u"?URLSearchParams:pe,Cn=FormData,_n=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),jn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:Pn,FormData:Cn,Blob},isStandardBrowserEnv:_n,isStandardBrowserWebWorkerEnv:jn,protocols:["http","https","file","blob","url","data"]};function Fn(e,t){return Q(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return A.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Un(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Dn(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ye(e){function t(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),d=i>=n.length;return o=!o&&c.isArray(s)?s.length:o,d?(c.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!c.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&c.isArray(s[o])&&(s[o]=Dn(s[o])),!a)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,s)=>{t(Un(r),s,n,0)}),n}return null}const Bn={"Content-Type":void 0};function Ln(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Y={transitional:Qe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=c.isObject(t);if(i&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s&&s?JSON.stringify(Ye(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Fn(t,this.formSerializer).toString();if((a=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Q(a?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Ln(t)):t}],transformResponse:[function(t){const n=this.transitional||Y.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&c.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?m.from(a,m.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(t){Y.headers[t]={}});c.forEach(["post","put","patch"],function(t){Y.headers[t]=c.merge(Bn)});const he=Y,vn=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&vn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Pe=Symbol("internals");function I(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:c.isArray(e)?e.map(J):String(e)}function In(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function $n(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Ce(e,t,n,r){if(c.isFunction(r))return r.call(this,t,n);if(c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function Mn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Hn(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class Z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,d,u){const l=I(d);if(!l)throw new Error("header name must be a non-empty string");const p=c.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||d]=J(a))}const o=(a,d)=>c.forEach(a,(u,l)=>i(u,l,d));return c.isPlainObject(t)||t instanceof this.constructor?o(t,n):c.isString(t)&&(t=t.trim())&&!$n(t)?o(kn(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=I(t),t){const r=c.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return In(s);if(c.isFunction(n))return n.call(this,s,r);if(c.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=I(t),t){const r=c.findKey(this,t);return!!(r&&(!n||Ce(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=I(o),o){const a=c.findKey(r,o);a&&(!n||Ce(r,r[a],a,n))&&(delete r[a],s=!0)}}return c.isArray(t)?t.forEach(i):i(t),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return c.forEach(this,(s,i)=>{const o=c.findKey(r,i);if(o){n[o]=J(s),delete n[i];return}const a=t?Mn(i):String(i).trim();a!==i&&delete n[i],n[a]=J(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return c.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&c.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Pe]=this[Pe]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=I(o);r[a]||(Hn(s,o),r[a]=!0)}return c.isArray(t)?t.forEach(i):i(t),this}}Z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);c.freezeMethods(Z.prototype);c.freezeMethods(Z);const N=Z;function ne(e,t){const n=this||he,r=t||n,s=N.from(r.headers);let i=r.data;return c.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Ze(e){return!!(e&&e.__CANCEL__)}function H(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}c.inherits(H,m,{__CANCEL__:!0});const qn=null;function zn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Jn=A.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const d=[];d.push(n+"="+encodeURIComponent(r)),c.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),c.isString(i)&&d.push("path="+i),c.isString(o)&&d.push("domain="+o),a===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Wn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Vn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function et(e,t){return e&&!Wn(t)?Vn(e,t):t}const Kn=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=c.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Gn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Xn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[i];o||(o=u),n[s]=d,r[s]=u;let p=i,g=0;for(;p!==s;)g+=n[p++],p=p%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-o<t)return;const y=l&&u-l;return y?Math.round(g*1e3/y):void 0}}function _e(e,t){let n=0;const r=Xn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,d=r(a),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:d||void 0,estimated:d&&o&&u?(o-i)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Qn=typeof XMLHttpRequest<"u",Yn=Qn&&function(e){return new Promise(function(n,r){let s=e.data;const i=N.from(e.headers).normalize(),o=e.responseType;let a;function d(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}c.isFormData(s)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+f))}const l=et(e.baseURL,e.url);u.open(e.method.toUpperCase(),Xe(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const y=N.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),h={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};zn(function(b){n(b),d()},function(b){r(b),d()},h),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Qe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},A.isStandardBrowserEnv){const y=(e.withCredentials||Kn(l))&&e.xsrfCookieName&&Jn.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&c.forEach(i.toJSON(),function(f,h){u.setRequestHeader(h,f)}),c.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",_e(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",_e(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=y=>{u&&(r(!y||y.type?new H(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const g=Gn(l);if(g&&A.protocols.indexOf(g)===-1){r(new m("Unsupported protocol "+g+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},W={http:qn,xhr:Yn};c.forEach(W,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Zn={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=c.isString(n)?W[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(c.hasOwnProp(W,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!c.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:W};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function je(e){return re(e),e.headers=N.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Zn.getAdapter(e.adapter||he.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return Ze(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const Fe=e=>e instanceof N?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(u,l,p){return c.isPlainObject(u)&&c.isPlainObject(l)?c.merge.call({caseless:p},u,l):c.isPlainObject(l)?c.merge({},l):c.isArray(l)?l.slice():l}function s(u,l,p){if(c.isUndefined(l)){if(!c.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function i(u,l){if(!c.isUndefined(l))return r(void 0,l)}function o(u,l){if(c.isUndefined(l)){if(!c.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>s(Fe(u),Fe(l),!0)};return c.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=d[l]||s,g=p(e[l],t[l],l);c.isUndefined(g)&&p!==a||(n[l]=g)}),n}const tt="1.2.3",me={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{me[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ue={};me.transitional=function(t,n,r){function s(i,o){return"[Axios v"+tt+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ue[o]&&(Ue[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function er(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],d=a===void 0||o(a,i,e);if(d!==!0)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const ce={assertOptions:er,validators:me},_=ce.validators;class G{constructor(t){this.defaults=t,this.interceptors={request:new Ne,response:new Ne}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ce.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!==void 0&&ce.assertOptions(s,{encode:_.function,serialize:_.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&c.merge(i.common,i[n.method]),o&&c.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=N.concat(o,i);const a=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,a.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let l,p=0,g;if(!d){const f=[je.bind(this),void 0];for(f.unshift.apply(f,a),f.push.apply(f,u),g=f.length,l=Promise.resolve(n);p<g;)l=l.then(f[p++],f[p++]);return l}g=a.length;let y=n;for(p=0;p<g;){const f=a[p++],h=a[p++];try{y=f(y)}catch(w){h.call(this,w);break}}try{l=je.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,g=u.length;p<g;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=B(this.defaults,t);const n=et(t.baseURL,t.url);return Xe(n,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){G.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(B(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}G.prototype[t]=n(),G.prototype[t+"Form"]=n(!0)});const V=G;class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new H(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ye(function(s){t=s}),cancel:t}}}const tr=ye;function nr(e){return function(n){return e.apply(null,n)}}function rr(e){return c.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});const sr=ue;function nt(e){const t=new V(e),n=ke(V.prototype.request,t);return c.extend(n,V.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return nt(B(e,s))},n}const E=nt(he);E.Axios=V;E.CanceledError=H;E.CancelToken=tr;E.isCancel=Ze;E.VERSION=tt;E.toFormData=Q;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=nr;E.isAxiosError=rr;E.mergeConfig=B;E.AxiosHeaders=N;E.formToJSON=e=>Ye(c.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=sr;E.default=E;const De=E,Be="https://smart-canteen-huatm1.herokuapp.com/",lr=(e,t,n,r=!1,s={"Content-Type":"application/json"})=>new Promise((i,o)=>{if(r){let a=JSON.parse(localStorage.getItem("food_minus_app"));if(!a||!a.itsc||!a.token){ee.push({path:"/login"});return}else n instanceof FormData?(n.append("itsc",a.itsc),n.append("token",a.token)):(n.itsc=a.itsc,n.token=a.token)}e==="post"?De.post(Be+t,n,s).then(a=>{a.data.error&&(a.data.error==="Unable to locate user"?(D.error(a.data.error),ee.push({path:"/login"})):D.error(a.data.error)),i(a.data)}).catch(a=>{D.error(a.message)}):e==="get"&&De.get(Be+t,{params:n}).then(a=>{a.data.error&&(a.data.error==="Unable to locate user"?(D.error(a.data.error),ee.push({path:"/login"})):D.error(a.data.error)),i(a.data)}).catch(a=>{console.log(a),D.error(a.message)})});export{ur as S,lr as a,ie as b,Rt as c,K as d,Tt as e,ft as f,xt as i,Le as r,cr as s};