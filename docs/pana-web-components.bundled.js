/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class r{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const o=(t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new r(e,t,s)},n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:h,defineProperty:a,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,g=p.trustedTypes,f=g?g.emptyScript:"",v=p.reactiveElementPolyfillSupport,m=(t,i)=>t,b={toAttribute(t,i){switch(i){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,i)=>!h(t,i),w={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=w){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),e=this.getPropertyDescriptor(t,s,i);void 0!==e&&a(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){const{get:e,set:r}=l(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return e?.call(this)},set(i){const o=e?.call(this);r.call(this,i),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,i=[...c(t),...d(t)];for(const s of i)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,s]of i)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Eu(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{if(i)s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=t.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,s.appendChild(e)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i){const s=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,s);if(void 0!==e&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(i,s.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null}}_$AK(t,i){const s=this.constructor,e=s._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=s.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=e,this[e]=r.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,s,e=!1,r){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??y)(e?r:this[t],i))return;this.C(t,i,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,i,s){this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,s]of t)!0!==s.wrapped||this._$AL.has(i)||void 0===this[i]||this.C(i,this[i],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,v?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,k=$.trustedTypes,S=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,E="?"+A,O=`<${E}>`,_=document,j=()=>_.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,U="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,R=/>/g,T=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,D=/^(?:script|style|textarea|title)$/i,H=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),B=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),W=new WeakMap,J=_.createTreeWalker(_,129);function q(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let r,o=2===i?"<svg>":"",n=N;for(let i=0;i<s;i++){const s=t[i];let h,a,l=-1,c=0;for(;c<s.length&&(n.lastIndex=c,a=n.exec(s),null!==a);)c=n.lastIndex,n===N?"!--"===a[1]?n=z:void 0!==a[1]?n=R:void 0!==a[2]?(D.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=T):void 0!==a[3]&&(n=T):n===T?">"===a[0]?(n=r??N,l=-1):void 0===a[1]?l=-2:(l=n.lastIndex-a[2].length,h=a[1],n=void 0===a[3]?T:'"'===a[3]?I:L):n===I||n===L?n=T:n===z||n===R?n=N:(n=T,r=void 0);const d=n===T&&t[i+1].startsWith("/>")?" ":"";o+=n===N?s+O:l>=0?(e.push(h),s.slice(0,l)+C+s.slice(l)+A+d):s+A+(-2===l?i:d)}return[q(t,o+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class Z{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let r=0,o=0;const n=t.length-1,h=this.parts,[a,l]=V(t,i);if(this.el=Z.createElement(a,s),J.currentNode=this.el.content,2===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=J.nextNode())&&h.length<n;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(C)){const i=l[o++],s=e.getAttribute(t).split(A),n=/([.?@])?(.*)/.exec(i);h.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?Y:"?"===n[1]?tt:"@"===n[1]?it:X}),e.removeAttribute(t)}else t.startsWith(A)&&(h.push({type:6,index:r}),e.removeAttribute(t));if(D.test(e.tagName)){const t=e.textContent.split(A),i=t.length-1;if(i>0){e.textContent=k?k.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],j()),J.nextNode(),h.push({type:2,index:++r});e.append(t[i],j())}}}else if(8===e.nodeType)if(e.data===E)h.push({type:2,index:r});else{let t=-1;for(;-1!==(t=e.data.indexOf(A,t+1));)h.push({type:7,index:r}),t+=A.length-1}r++}}static createElement(t,i){const s=_.createElement("template");return s.innerHTML=t,s}}function K(t,i,s=t,e){if(i===B)return i;let r=void 0!==e?s._$Co?.[e]:s._$Cl;const o=P(i)?void 0:i._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=r:s._$Cl=r),void 0!==r&&(i=K(t,r._$AS(t,i.values),r,e)),i}class G{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??_).importNode(i,!0);J.currentNode=e;let r=J.nextNode(),o=0,n=0,h=s[0];for(;void 0!==h;){if(o===h.index){let i;2===h.type?i=new Q(r,r.nextSibling,this,t):1===h.type?i=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(i=new st(r,this,t)),this._$AV.push(i),h=s[++n]}o!==h?.index&&(r=J.nextNode(),o++)}return J.currentNode=_,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=K(this,t,i),P(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(_.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(q(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new G(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=W.get(t.strings);return void 0===i&&W.set(t.strings,i=new Z(t)),i}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const r of t)e===i.length?i.push(s=new Q(this.k(j()),this.k(j()),this,this.options)):s=i[e],s._$AI(r),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,i=this,s,e){const r=this.strings;let o=!1;if(void 0===r)t=K(this,t,i,0),o=!P(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const e=t;let n,h;for(t=r[0],n=0;n<r.length-1;n++)h=K(this,e[s+n],i,n),h===B&&(h=this._$AH[n]),o||=!P(h)||h!==this._$AH[n],h===F?t=F:t!==F&&(t+=(h??"")+r[n+1]),this._$AH[n]=h}o&&!e&&this.O(t)}O(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===F?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class it extends X{constructor(t,i,s,e,r){super(t,i,s,e,r),this.type=5}_$AI(t,i=this){if((t=K(this,t,i,0)??F)===B)return;const s=this._$AH,e=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==F&&(s===F||e);e&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const et=$.litHtmlPolyfillSupport;et?.(Z,Q),($.litHtmlVersions??=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class rt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{const e=s?.renderBefore??i;let r=e._$litPart$;if(void 0===r){const t=s?.renderBefore??null;e._$litPart$=r=new Q(i.insertBefore(j(),t),t,void 0,s??{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>(i,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},at=(t=ht,i,s)=>{const{kind:e,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,t),"accessor"===e){const{name:e}=s;return{set(s){const r=i.get.call(this);i.set.call(this,s),this.requestUpdate(e,r,t)},init(i){return void 0!==i&&this.C(e,void 0,t),i}}}if("setter"===e){const{name:e}=s;return function(s){const r=this[e];i.call(this,s),this.requestUpdate(e,r,t)}}throw Error("Unsupported decorator location: "+e)};function lt(t){return(i,s)=>"object"==typeof s?at(t,i,s):((t,i,s)=>{const e=i.hasOwnProperty(s);return i.constructor.createProperty(s,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(i,s):void 0})(t,i,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ct=function(t,i,s,e){for(var r,o=arguments.length,n=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(i,s,n):r(i,s))||n);return o>3&&n&&Object.defineProperty(i,s,n),n};let dt=class extends rt{constructor(){super(...arguments),this.text="",this.href="#"}render(){return H`
      <a href="${this.href}"><slot></slot></a>
      <i class="fa-solid fa-angle-right"></i>
    `}};dt.styles=o`
    a {
      text-decoration: none;
      font-size: 16px;
      color: rgb(0, 102, 204);
    }
    a::after {
      color: rgb(0, 102, 204);
      content: '';
      display: inline-block;
      width: 0.7em;
      height: 0.7em;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cstyle%3Esvg%7Bfill:%230066cc%7D%3C/style%3E%3Cpath d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  `,ct([lt()],dt.prototype,"text",void 0),ct([lt()],dt.prototype,"href",void 0),dt=ct([nt("pana-link")],dt);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ut=function(t,i,s,e){for(var r,o=arguments.length,n=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(i,s,n):r(i,s))||n);return o>3&&n&&Object.defineProperty(i,s,n),n};let pt=class extends rt{constructor(){super(...arguments),this.headline="",this.subhead="",this.image="",this.color="gray"}render(){return H`
      <style>
        .background-image {
          background-image: url("${this.image}");
        }
      </style>
      <a href="${this.url}">
        <div class="unit-wrapper unit-image background-image color-${this.color}">
          <div class="unit-copy-wrapper">
            <h4 class="headline headline-${this.weight}">${this.headline}</h4>
            <h5 class="subhead subhead-${this.weight}">${this.subhead}</h5>
            <div class="cta-links cta-link-${this.weight}">
              ${this.ctatext?H`<pana-link href="${this.url}">${this.ctatext}</pana-link>`:""}
              ${this.subctatext?H`<pana-link href="${this.subctaurl}">${this.subctatext}</pana-link>`:""}
            </div>
          </div>
          <div class="unit-image-wrapper">
          </div>
        </div>
      </a>
    `}};pt.styles=o`
    .unit-wrapper {
      display: flex;
      overflow-x: hidden;
      overflow-y: hidden;
      align-content: flex-start;
      flex-direction: column;
      padding: 4px 0px 0px 0px;
      border-width: 0px;
    }
    .unit-copy-wrapper {
      text-align: center;
      margin-top: 44px;
    }
    .unit-image {
      flex-grow: 1;
      overflow-x: visible;
      overflow-y: visible;
      display: block;
      background-size: 1262px 580px;
      height: 580px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
    }
    .headline {
      font-style: normal;
      margin: 0px;
      padding: 0px;
      letter-spacing: normal;
    }
    .headline-normal {
      font-size: 38px;
      font-weight: 600;
    }
    .headline-large {
      font-size: 60px;
      font-weight: 460;
    }
    .subhead {
      font-style: normal;
      margin: 0px;
      padding: 0px 0px 4px 0px;
    }
    .subhead-normal {
      font-size: 18px;
      font-weight: 400;
    }
    .subhead-large {
      font-size: 26px;
      font-weight: 440;
    }
    .cta-links pana-link:not(:first-of-type) {
      margin-left: 28px;
    }
    .cta-links-normal {
      font-size: 14px;
      font-weight: 300;
    }
    .cta-links-large {
      font-size: 16px;
      font-weight: 300;
    }
    .color-gray {
      background-color: rgb(251, 251, 253);
    }
    .color-black {
      background-color: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
    }
    .color-white {
      background-color: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
    }
    a,a:visited,a:hover {
      text-decoration: none;
      color: rgb(0, 0, 0);
    }
  `,ut([lt()],pt.prototype,"headline",void 0),ut([lt()],pt.prototype,"subhead",void 0),ut([lt()],pt.prototype,"image",void 0),ut([lt()],pt.prototype,"color",void 0),ut([lt()],pt.prototype,"weight",void 0),ut([lt()],pt.prototype,"url",void 0),ut([lt()],pt.prototype,"ctatext",void 0),ut([lt()],pt.prototype,"subctaurl",void 0),ut([lt()],pt.prototype,"subctatext",void 0),pt=ut([nt("pana-card")],pt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt=Symbol();class ft{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((t,i)=>{this.i=t,this.o=i})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,i,s){this.u=0,this.status=0,(this.p=t).addController(this);const e="object"==typeof i?i:{task:i,args:s};this._=e.task,this.v=e.args,this.j=e.argsEqual??vt,this.m=e.onComplete,this.g=e.onError,this.autoRun=e.autoRun??!0,"initialValue"in e&&(this.l=e.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),i=this.k;this.k=t,t===i||void 0===t||void 0!==i&&this.j(i,t)||await this.run(t)}async run(t){let i,s;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const e=++this.u;this.T=new AbortController;let r=!1;try{i=await this._(t,{signal:this.T.signal})}catch(t){r=!0,s=t}if(this.u===e){if(i===gt)this.status=0;else{if(!1===r){try{this.m?.(i)}catch{}this.status=2,this.i?.(i)}else{try{this.g?.(s)}catch{}this.status=3,this.o?.(s)}this.l=i,this.h=s}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}}const vt=(t,i)=>t===i||t.length===i.length&&t.every(((t,s)=>!y(t,i[s])))
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var mt=function(t,i,s,e){for(var r,o=arguments.length,n=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(i,s,n):r(i,s))||n);return o>3&&n&&Object.defineProperty(i,s,n),n};let bt=class extends rt{constructor(){super(...arguments),this.cols=1}getCols(){return this.cols>=1&&this.cols<=4?this.cols:1}render(){return H`
      <div class="grid-container grid-${this.getCols()}">
        <slot></slot>
      </div>
    `}};bt.styles=o`
    :host {
      display: block;
      border-width: 0px;
      color: rgb(29, 29, 31);
      font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .grid-container {
      display: grid;
      grid-auto-rows: 580px;
      row-gap: 12px;
      column-gap: 12px;
      margin-top: 12px;
      padding: 0px;
    }
    .grid-1 {
      grid-template-columns: auto;
      padding: 0px;
      margin: 0px;
    }
    .grid-2 {
      grid-template-columns: auto auto;
      padding: 0px 12px;
    }
    .grid-3 {
      grid-template-columns: auto auto auto;
      padding: 0px 12px;
    }
    .grid-4 {
      grid-template-columns: auto auto auto auto;
      padding: 0px 12px;
    }
  `,mt([lt({type:Number})],bt.prototype,"cols",void 0),mt([
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(i,s)=>{const{slot:e,selector:r}=t??{},o="slot"+(e?`[name=${e}]`:":not([name])");return((t,i,s)=>(s.configurable=!0,s.enumerable=!0,s))(0,0,{get(){const i=this.renderRoot?.querySelector(o),s=i?.assignedElements(t)??[];return void 0===r?s:s.filter((t=>t.matches(r)))}})}}({flatten:!0})],bt.prototype,"_listItems",void 0),bt=mt([nt("pana-grid")],bt);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var yt=function(t,i,s,e){for(var r,o=arguments.length,n=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(i,s,n):r(i,s))||n);return o>3&&n&&Object.defineProperty(i,s,n),n};let wt=class extends rt{constructor(){super(...arguments),this._task=new ft(this,{task:async([],{signal:t})=>{const i=await fetch("https://main--hackathon-2023--hiroyukimiyata.hlx.page/content-modules.json",{signal:t});if(!i.ok)throw new Error(String(i.status));return this._convert(await i.json())},args:()=>[]}),this._shuffleArray=t=>{const i=[...t];for(let t=i.length-1;t>=0;t--){let s=Math.floor(Math.random()*(t+1)),e=i[t];i[t]=i[s],i[s]=e}return i},this.fullwidthrows=0,this.cols=2,this.tags="",this.condition="and",this.algorithm="normal"}_convert(t){const i=t.data.filter((t=>{const i=JSON.parse(`"${t.tags}"`),s=this.tags.split(" ");return"AND"==this.condition.toUpperCase()?(e=i,s.every((t=>e.includes(t)))):((t,i)=>t.some((t=>i.includes(t))))(s,i);var e}));return this._applyAlgorithm(i)}_applyAlgorithm(t){const i=this.algorithm.toUpperCase();return"NORMAL"==i?t:"RANDOM"==i?(console.log("RRRRR"),this._shuffleArray(t)):void 0}getCard(t,i){return H`
        <pana-card
          headline="${t.headline}"
          subhead="${t.subhead}"
          color="${t.color}"
          image="${t.image}"
          weight="${i?"large":"normal"}"
          url=${t.url}
          ctatext=${t.ctatext}
          subctatext="${t.subctatext}"
          subctaurl="${t.subctaurl}"
        >
        </pana-card>
      `}render(){return this._task.render({pending:()=>H`<p>Loading product...</p>`,complete:t=>H`
        <pana-grid cols="1">
          ${t.map((t=>this.getCard(t,!0))).slice(0,this.fullwidthrows)}
        </pana-grid>
        <pana-grid cols="${this.cols}">
          ${t.map((t=>this.getCard(t,!1))).slice(this.fullwidthrows,t.length-(t.length-this.fullwidthrows)%this.cols)}
        </pana-grid>
        `,error:t=>H`<p>Error: ${t}</p>`})}};wt.styles=o`
  `,yt([lt({type:Number})],wt.prototype,"fullwidthrows",void 0),yt([lt({type:Number})],wt.prototype,"cols",void 0),yt([lt()],wt.prototype,"tags",void 0),yt([lt()],wt.prototype,"condition",void 0),yt([lt()],wt.prototype,"algorithm",void 0),wt=yt([nt("pana-collection")],wt);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var xt=function(t,i,s,e){for(var r,o=arguments.length,n=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(i,s,n):r(i,s))||n);return o>3&&n&&Object.defineProperty(i,s,n),n};let $t=class extends rt{constructor(){super(...arguments),this.text="",this.href="#"}render(){return H`
      <header>
          <div class="head">
            <div class="logo">
              <img src="https://panasonic.jp/etc.clientlibs/panasonic-aem-frontend/clientlibs/clientlib-site/resources/images/logo.svg" />
            </div>
            <div class="search">
              <img src="https://panasonic.jp/etc.clientlibs/panasonic-aem-frontend/clientlibs/clientlib-site/resources/images/icons/icon_search.svg" />
            </div>
          </div>
          <div class="navi">
            <ul>
              <li>商品情報</li>
              <li>サポート</li>
              <li>Panasonic Store Plus</li>
              <li>CLUB Panasonic</li>
            </ul>
          </div>
      </header>
    `}};$t.styles=o`
    :host {
      //background-color: lightpink;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    header {
      margin: 0;
      padding: 0;
      width: 100%;
      background-color: lightpink;
    }
    .head {
      margin: 0;
      padding-top: 24px;
      height: 28px;
      //width: 80pc;
      display: grid;
      place-content: center;
      place-items: center;
      //grid-template: repeat(2, auto);
      grid-template-columns: 1fr 1fr 1fr;
      background-color: lightgoldenrodyellow;
    }
    .logo {
      margin: 120px 150px 150px;
      padding: 130px 150px 120px;
      height: 28px;
      background-color: lightgray;
      grid-column: 2 / 3;
    }
    .search {
      margin: 0;
      padding: 0;
      background-color: lightcoral;
      grid-column: 3 / 4;
    }
    .navi {
      background-color: lightblue;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    ul {
      grid-column: 2 / 3;
      display: flex;
      justify-content: space-between;
      flex-flow: row;
      list-style-type: none;
      background-color: lightskyblue;
      vertical-align: center;
    }
    li {
      text-align: center;
      width: 160px;
    }
  `,xt([lt()],$t.prototype,"text",void 0),xt([lt()],$t.prototype,"href",void 0),$t=xt([nt("pana-header")],$t);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var kt=function(t,i,s,e){for(var r,o=arguments.length,n=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(i,s,n):r(i,s))||n);return o>3&&n&&Object.defineProperty(i,s,n),n};let St=class extends rt{constructor(){super(...arguments),this.name="World",this.count=0}render(){return H`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed"))}sayHello(t){return`Hello, ${t}`}};St.styles=o`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,kt([lt()],St.prototype,"name",void 0),kt([lt({type:Number})],St.prototype,"count",void 0),St=kt([nt("my-element")],St);export{St as MyElement};
