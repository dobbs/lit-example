/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const G=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,N=(e,t,s=null)=>{for(;t!==s;){const o=t.nextSibling;e.removeChild(t),t=o}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=`{{lit-${String(Math.random()).slice(2)}}}`,$=`<!--${y}-->`,J=new RegExp(`${y}|${$}`),T="$lit$";class K{constructor(e,t){this.parts=[],this.element=t;const s=[],o=[],r=document.createTreeWalker(t.content,133,null,!1);let a=0,n=-1,i=0;const{strings:h,values:{length:p}}=e;for(;i<p;){const l=r.nextNode();if(l===null){r.currentNode=o.pop();continue}if(n++,l.nodeType===1){if(l.hasAttributes()){const d=l.attributes,{length:P}=d;let g=0;for(let u=0;u<P;u++)X(d[u].name,T)&&g++;for(;g-- >0;){const u=h[i],w=A.exec(u)[2],v=w.toLowerCase()+T,b=l.getAttribute(v);l.removeAttribute(v);const m=b.split(J);this.parts.push({type:"attribute",index:n,name:w,strings:m}),i+=m.length-1}}l.tagName==="TEMPLATE"&&(o.push(l),r.currentNode=l.content)}else if(l.nodeType===3){const d=l.data;if(d.indexOf(y)>=0){const P=l.parentNode,g=d.split(J),u=g.length-1;for(let w=0;w<u;w++){let v,b=g[w];if(b==="")v=f();else{const m=A.exec(b);m!==null&&X(m[2],T)&&(b=b.slice(0,m.index)+m[1]+m[2].slice(0,-T.length)+m[3]),v=document.createTextNode(b)}P.insertBefore(v,l),this.parts.push({type:"node",index:++n})}g[u]===""?(P.insertBefore(f(),l),s.push(l)):l.data=g[u],i+=u}}else if(l.nodeType===8)if(l.data===y){const d=l.parentNode;(l.previousSibling===null||n===a)&&(n++,d.insertBefore(f(),l)),a=n,this.parts.push({type:"node",index:n}),l.nextSibling===null?l.data="":(s.push(l),n--),i++}else{let d=-1;for(;(d=l.data.indexOf(y,d+1))!==-1;)this.parts.push({type:"node",index:-1}),i++}}for(const l of s)l.parentNode.removeChild(l)}}const X=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},Y=e=>e.index!==-1,f=()=>document.createComment(""),A=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const k=133;function Q(e,t){const{element:{content:s},parts:o}=e,r=document.createTreeWalker(s,k,null,!1);let a=x(o),n=o[a],i=-1,h=0;const p=[];let l=null;for(;r.nextNode();){i++;const d=r.currentNode;for(d.previousSibling===l&&(l=null),t.has(d)&&(p.push(d),l===null&&(l=d)),l!==null&&h++;n!==void 0&&n.index===i;)n.index=l!==null?-1:n.index-h,a=x(o,a),n=o[a]}p.forEach(d=>d.parentNode.removeChild(d))}const pe=e=>{let t=e.nodeType===11?0:1;const s=document.createTreeWalker(e,k,null,!1);for(;s.nextNode();)t++;return t},x=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const o=e[s];if(Y(o))return s}return-1};function ce(e,t,s=null){const{element:{content:o},parts:r}=e;if(s==null){o.appendChild(t);return}const a=document.createTreeWalker(o,k,null,!1);let n=x(r),i=0,h=-1;for(;a.nextNode();){h++;const p=a.currentNode;for(p===s&&(i=pe(t),s.parentNode.insertBefore(t,s));n!==-1&&r[n].index===h;){if(i>0){for(;n!==-1;)r[n].index+=i,n=x(r,n);return}n=x(r,n)}}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ue=new WeakMap,_=e=>typeof e=="function"&&ue.has(e);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const c={},Z={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class I{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)s!==void 0&&s.setValue(e[t]),t++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const e=G?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let r=0,a=0,n,i=o.nextNode();for(;r<s.length;){if(n=s[r],!Y(n)){this.__parts.push(void 0),r++;continue}for(;a<n.index;)a++,i.nodeName==="TEMPLATE"&&(t.push(i),o.currentNode=i.content),(i=o.nextNode())===null&&(o.currentNode=t.pop(),i=o.nextNode());if(n.type==="node"){const h=this.processor.handleTextExpression(this.options);h.insertAfterNode(i.previousSibling),this.__parts.push(h)}else this.__parts.push(...this.processor.handleAttributeExpressions(i,n.name,n.strings,this.options));r++}return G&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ee=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),me=` ${y} `;class te{constructor(e,t,s,o){this.strings=e,this.values=t,this.type=s,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let o=0;o<e;o++){const r=this.strings[o],a=r.lastIndexOf("<!--");s=(a>-1||s)&&r.indexOf("-->",a+1)===-1;const n=A.exec(r);n===null?t+=r+(s?me:$):t+=r.substr(0,n.index)+n[1]+n[2]+T+n[3]+y}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return ee!==void 0&&(t=ee.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=e=>e===null||!(typeof e=="object"||typeof e=="function"),R=e=>Array.isArray(e)||!!(e&&e[Symbol.iterator]);class se{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let o=0;o<s.length-1;o++)this.parts[o]=this._createPart()}_createPart(){return new oe(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=s[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!R(r))return r}let o="";for(let r=0;r<t;r++){o+=e[r];const a=s[r];if(a!==void 0){const n=a.value;if(O(n)||!R(n))o+=typeof n=="string"?n:String(n);else for(const i of n)o+=typeof i=="string"?i:String(i)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class oe{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==c&&(!O(e)||e!==this.value)&&(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const e=this.value;this.value=c,e(this)}if(this.value===c)return;this.committer.commit()}}class M{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=f()),e.__insert(this.endNode=f())}insertAfterPart(e){e.__insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}const e=this.__pendingValue;if(e===c)return;O(e)?e!==this.value&&this.__commitText(e):e instanceof te?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):R(e)?this.__commitIterable(e):e===Z?(this.value=Z,this.clear()):this.__commitText(e)}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){if(this.value===e)return;this.clear(),this.__insert(e),this.value=e}__commitText(e){const t=this.startNode.nextSibling;e=e??"";const s=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof I&&this.value.template===t)this.value.update(e.values);else{const s=new I(t,e.processor,this.options),o=s._clone();s.update(e.values),this.__commitNode(o),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s=0,o;for(const r of e)o=t[s],o===void 0&&(o=new M(this.options),t.push(o),s===0?o.appendIntoPart(this):o.insertAfterPart(t[s-1])),o.setValue(r),o.commit(),s++;s<t.length&&(t.length=s,this.clear(o&&o.endNode))}clear(e=this.startNode){N(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ye{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}if(this.__pendingValue===c)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=c}}class fe extends se{constructor(e,t,s){super(e,t,s);this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new ge(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ge extends oe{}let re=!1;(()=>{try{const e={get capture(){return re=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class be{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=o=>this.handleEvent(o)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=c,r(this)}if(this.__pendingValue===c)return;const e=this.__pendingValue,t=this.value,s=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=e!=null&&(t==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=we(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=c}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const we=e=>e&&(re?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function ve(e){let t=C.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},C.set(e.type,t));let s=t.stringsArray.get(e.strings);if(s!==void 0)return s;const o=e.strings.join(y);return s=t.keyString.get(o),s===void 0&&(s=new K(e,e.getTemplateElement()),t.keyString.set(o,s)),t.stringsArray.set(e.strings,s),s}const C=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=new WeakMap,Se=(e,t,s)=>{let o=S.get(t);o===void 0&&(N(t,t.firstChild),S.set(t,o=new M(Object.assign({templateFactory:ve},s))),o.appendInto(t)),o.setValue(e),o.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Te{handleAttributeExpressions(e,t,s,o){const r=t[0];if(r==="."){const n=new fe(e,t.slice(1),s);return n.parts}if(r==="@")return[new be(e,t.slice(1),o.eventContext)];if(r==="?")return[new ye(e,t.slice(1),s)];const a=new se(e,t,s);return a.parts}handleTextExpression(e){return new M(e)}}const xe=new Te;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const _e=(e,...t)=>new te(e,t,"html",xe);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ne=(e,t)=>`${e}--${t}`;let E=!0;typeof window.ShadyCSS=="undefined"?E=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),E=!1);const Ce=e=>t=>{const s=ne(t.type,e);let o=C.get(s);o===void 0&&(o={stringsArray:new WeakMap,keyString:new Map},C.set(s,o));let r=o.stringsArray.get(t.strings);if(r!==void 0)return r;const a=t.strings.join(y);if(r=o.keyString.get(a),r===void 0){const n=t.getTemplateElement();E&&window.ShadyCSS.prepareTemplateDom(n,e),r=new K(t,n),o.keyString.set(a,r)}return o.stringsArray.set(t.strings,r),r},Pe=["html","svg"],Ee=e=>{Pe.forEach(t=>{const s=C.get(ne(t,e));s!==void 0&&s.keyString.forEach(o=>{const{element:{content:r}}=o,a=new Set;Array.from(r.querySelectorAll("style")).forEach(n=>{a.add(n)}),Q(o,a)})})},ie=new Set,Ne=(e,t,s)=>{ie.add(e);const o=s?s.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:a}=r;if(a===0){window.ShadyCSS.prepareTemplateStyles(o,e);return}const n=document.createElement("style");for(let p=0;p<a;p++){const l=r[p];l.parentNode.removeChild(l),n.textContent+=l.textContent}Ee(e);const i=o.content;s?ce(s,n,i.firstChild):i.insertBefore(n,i.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const h=i.querySelector("style");if(window.ShadyCSS.nativeShadow&&h!==null)t.insertBefore(h.cloneNode(!0),t.firstChild);else if(s){i.insertBefore(n,i.firstChild);const p=new Set;p.add(n),Q(s,p)}},Ae=(e,t,s)=>{if(!s||typeof s!="object"||!s.scopeName)throw new Error("The `scopeName` option is required.");const o=s.scopeName,r=S.has(t),a=E&&t.nodeType===11&&!!t.host,n=a&&!ie.has(o),i=n?document.createDocumentFragment():t;if(Se(e,i,Object.assign({templateFactory:Ce(o)},s)),n){const h=S.get(i);S.delete(i);const p=h.value instanceof I?h.value.template:void 0;Ne(o,i,p),N(t,t.firstChild),t.appendChild(i),S.set(t,h)}!r&&a&&window.ShadyCSS.styleElement(t.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var ae;window.JSCompiler_renameProperty=(e,t)=>e;const U={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},le=(e,t)=>t!==e&&(t===t||e===e),j={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:le},D=1,L=1<<2,B=1<<3,F=1<<4,W="finalized";class de extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const o=this._attributeNameForProperty(s,t);o!==void 0&&(this._attributeToPropertyMap.set(o,s),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=j){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,s,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdateInternal(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||j}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(W)||e.finalize(),this[W]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const o of s)this.createProperty(o,t[o])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=le){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,o=t.converter||U,r=typeof o=="function"?o:o.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,o=t.converter,r=o&&o.toAttribute||U.toAttribute;return r(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=j){const o=this.constructor,r=o._attributeNameForProperty(e,s);if(r!==void 0){const a=o._propertyValueToAttribute(t,s);if(a===void 0)return;this._updateState=this._updateState|B,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._updateState=this._updateState&~B}}_attributeToProperty(e,t){if(this._updateState&B)return;const s=this.constructor,o=s._attributeToPropertyMap.get(e);if(o!==void 0){const r=s.getPropertyOptions(o);this._updateState=this._updateState|F,this[o]=s._propertyValueFromAttribute(t,r),this._updateState=this._updateState&~F}}requestUpdateInternal(e,t,s){let o=!0;if(e!==void 0){const r=this.constructor;s=s||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&F)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|L;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&L}get hasUpdated(){return this._updateState&D}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&D||(this._updateState=this._updateState|D,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~L}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}ae=W,de[ae]=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ke=(e,t)=>(window.customElements.define(e,t),t),Ie=(e,t)=>{const{kind:s,elements:o}=t;return{kind:s,elements:o,finisher(r){window.customElements.define(e,r)}}},Oe=e=>t=>typeof t=="function"?ke(e,t):Ie(e,t),Re=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(s){s.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}},Me=(e,t,s)=>{t.constructor.createProperty(s,e)};function Ue(e){return(t,s)=>s!==void 0?Me(e,t,s):Re(e,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const H=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol();class z{constructor(e,t){if(t!==V)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(H?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const je=e=>new z(String(e),V),De=e=>{if(e instanceof z)return e.cssText;if(typeof e=="number")return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},Le=(e,...t)=>{const s=t.reduce((o,r,a)=>o+De(r)+e[a+1],e[0]);return new z(s,V)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const he={};class q extends de{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(r,a)=>r.reduceRight((n,i)=>Array.isArray(i)?t(i,n):(n.add(i),n),a),s=t(e,new Set),o=[];s.forEach(r=>o.unshift(r)),this._styles=o}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!H){const s=Array.prototype.slice.call(t.cssRules).reduce((o,r)=>o+r.cssText,"");return je(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;if(e.length===0)return;window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):H?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==he&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const o=document.createElement("style");o.textContent=s.cssText,this.renderRoot.appendChild(o)}))}render(){return he}}q.finalized=!0,q.render=Ae;export{q as LitElement,Le as css,Oe as customElement,_e as html,Ue as property};
