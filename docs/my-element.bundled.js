/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class o{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const n=(t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new o(e,t,s)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:h,defineProperty:a,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,g=f?f.emptyScript:"",v=p.reactiveElementPolyfillSupport,m=(t,i)=>t,b={toAttribute(t,i){switch(i){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,i)=>!h(t,i),w={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=w){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),e=this.getPropertyDescriptor(t,s,i);void 0!==e&&a(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){const{get:e,set:o}=l(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return e?.call(this)},set(i){const n=e?.call(this);o.call(this,i),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,i=[...c(t),...d(t)];for(const s of i)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,s]of i)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Eu(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{if(i)s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),o=t.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,s.appendChild(e)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i){const s=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,s);if(void 0!==e&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(i,s.type);this._$Em=t,null==o?this.removeAttribute(e):this.setAttribute(e,o),this._$Em=null}}_$AK(t,i){const s=this.constructor,e=s._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=s.getPropertyOptions(e),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=e,this[e]=o.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,s,e=!1,o){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??y)(e?o:this[t],i))return;this.C(t,i,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,i,s){this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,s]of t)!0!==s.wrapped||this._$AL.has(i)||void 0===this[i]||this.C(i,this[i],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,v?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,k=$.trustedTypes,S=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,A="?"+E,_=`<${A}>`,O=document,z=()=>O.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,T="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,N=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,H=/^(?:script|style|textarea|title)$/i,D=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),F=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),W=new WeakMap,J=O.createTreeWalker(O,129);function Z(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(i):i}const q=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=U;for(let i=0;i<s;i++){const s=t[i];let h,a,l=-1,c=0;for(;c<s.length&&(r.lastIndex=c,a=r.exec(s),null!==a);)c=r.lastIndex,r===U?"!--"===a[1]?r=j:void 0!==a[1]?r=N:void 0!==a[2]?(H.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=R):void 0!==a[3]&&(r=R):r===R?">"===a[0]?(r=o??U,l=-1):void 0===a[1]?l=-2:(l=r.lastIndex-a[2].length,h=a[1],r=void 0===a[3]?R:'"'===a[3]?L:I):r===L||r===I?r=R:r===j||r===N?r=U:(r=R,o=void 0);const d=r===R&&t[i+1].startsWith("/>")?" ":"";n+=r===U?s+_:l>=0?(e.push(h),s.slice(0,l)+C+s.slice(l)+E+d):s+E+(-2===l?i:d)}return[Z(t,n+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class K{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[a,l]=q(t,i);if(this.el=K.createElement(a,s),J.currentNode=this.el.content,2===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=J.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(C)){const i=l[n++],s=e.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(i);h.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?Y:"?"===r[1]?tt:"@"===r[1]?it:X}),e.removeAttribute(t)}else t.startsWith(E)&&(h.push({type:6,index:o}),e.removeAttribute(t));if(H.test(e.tagName)){const t=e.textContent.split(E),i=t.length-1;if(i>0){e.textContent=k?k.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],z()),J.nextNode(),h.push({type:2,index:++o});e.append(t[i],z())}}}else if(8===e.nodeType)if(e.data===A)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(E,t+1));)h.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,i){const s=O.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){if(i===F)return i;let o=void 0!==e?s._$Co?.[e]:s._$Cl;const n=M(i)?void 0:i._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=o:s._$Cl=o),void 0!==o&&(i=V(t,o._$AS(t,i.values),o,e)),i}class G{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??O).importNode(i,!0);J.currentNode=e;let o=J.nextNode(),n=0,r=0,h=s[0];for(;void 0!==h;){if(n===h.index){let i;2===h.type?i=new Q(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new st(o,this,t)),this._$AV.push(i),h=s[++r]}n!==h?.index&&(o=J.nextNode(),n++)}return J.currentNode=O,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),M(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new G(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=W.get(t.strings);return void 0===i&&W.set(t.strings,i=new K(t)),i}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new Q(this.k(z()),this.k(z()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=B}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!M(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const e=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=V(this,e[s+r],i,r),h===F&&(h=this._$AH[r]),n||=!M(h)||h!==this._$AH[r],h===B?t=B:t!==B&&(t+=(h??"")+o[r+1]),this._$AH[r]=h}n&&!e&&this.O(t)}O(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===B?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class it extends X{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){if((t=V(this,t,i,0)??B)===F)return;const s=this._$AH,e=t===B&&s!==B||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==B&&(s===B||e);e&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const et=$.litHtmlPolyfillSupport;et?.(K,Q),($.litHtmlVersions??=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ot extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{const e=s?.renderBefore??i;let o=e._$litPart$;if(void 0===o){const t=s?.renderBefore??null;e._$litPart$=o=new Q(i.insertBefore(z(),t),t,void 0,s??{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=t=>(i,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},at=(t=ht,i,s)=>{const{kind:e,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(s.name,t),"accessor"===e){const{name:e}=s;return{set(s){const o=i.get.call(this);i.set.call(this,s),this.requestUpdate(e,o,t)},init(i){return void 0!==i&&this.C(e,void 0,t),i}}}if("setter"===e){const{name:e}=s;return function(s){const o=this[e];i.call(this,s),this.requestUpdate(e,o,t)}}throw Error("Unsupported decorator location: "+e)};function lt(t){return(i,s)=>"object"==typeof s?at(t,i,s):((t,i,s)=>{const e=i.hasOwnProperty(s);return i.constructor.createProperty(s,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(i,s):void 0})(t,i,s)
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
var ct=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let dt=class extends ot{constructor(){super(...arguments),this.text="",this.href="#"}render(){return D`
      <a href="${this.href}"><slot></slot></a>
      <i class="fa-solid fa-angle-right"></i>
    `}};dt.styles=n`
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
  `,ct([lt()],dt.prototype,"text",void 0),ct([lt()],dt.prototype,"href",void 0),dt=ct([rt("apple-link")],dt);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ut=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let pt=class extends ot{constructor(){super(...arguments),this.headline="",this.subhead="",this.image="",this.color="gray"}render(){return D`
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
              <apple-link href="${this.url}">さらに詳しく</apple-link>
              <apple-link href="${this.url}">購入する</apple-link>
            </div>
          </div>
          <div class="unit-image-wrapper">
          </div>
        </div>
      </a>
    `}};pt.styles=n`
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
    .cta-links apple-link:not(:first-of-type) {
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
  `,ut([lt()],pt.prototype,"headline",void 0),ut([lt()],pt.prototype,"subhead",void 0),ut([lt()],pt.prototype,"image",void 0),ut([lt()],pt.prototype,"color",void 0),ut([lt()],pt.prototype,"weight",void 0),ut([lt()],pt.prototype,"url",void 0),pt=ut([rt("apple-card")],pt);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ft=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let gt=class extends ot{constructor(){super(...arguments),this.cols=1}getCols(){return this.cols>=1&&this.cols<=4?this.cols:1}render(){return console.log(this._listItems),D`
      <div class="grid-container grid-${this.getCols()}">
        <slot></slot>
      </div>
    `}};gt.styles=n`
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
  `,ft([lt({type:Number})],gt.prototype,"cols",void 0),ft([
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(i,s)=>{const{slot:e,selector:o}=t??{},n="slot"+(e?`[name=${e}]`:":not([name])");return((t,i,s)=>(s.configurable=!0,s.enumerable=!0,s))(0,0,{get(){const i=this.renderRoot?.querySelector(n),s=i?.assignedElements(t)??[];return void 0===o?s:s.filter((t=>t.matches(o)))}})}}({flatten:!0})],gt.prototype,"_listItems",void 0),gt=ft([rt("apple-grid")],gt);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var vt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let mt=class extends ot{constructor(){super(...arguments),this.name="World",this.count=0}render(){return D`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed"))}sayHello(t){return`Hello, ${t}`}};mt.styles=n`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,vt([lt()],mt.prototype,"name",void 0),vt([lt({type:Number})],mt.prototype,"count",void 0),mt=vt([rt("my-element")],mt);export{mt as MyElement};
