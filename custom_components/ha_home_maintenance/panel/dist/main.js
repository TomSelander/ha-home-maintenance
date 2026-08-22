var Se=Object.defineProperty;var tt=Object.getOwnPropertyDescriptor;var ce=(i,t)=>{for(var e in t)Se(i,e,{get:t[e],enumerable:!0})};var d=(i,t,e,r)=>{for(var s=r>1?void 0:r?tt(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Se(t,e,s),s};var Z=globalThis,Y=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_e=Symbol(),Te=new WeakMap,q=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==_e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Y&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Te.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Te.set(e,t))}return t}toString(){return this.cssText}},Ae=i=>new q(typeof i=="string"?i:i+"",void 0,_e),w=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((r,s,a)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[a+1],i[0]);return new q(e,i,_e)},Ce=(i,t)=>{if(Y)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),s=Z.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},de=Y?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Ae(e)})(i):i;var{is:rt,defineProperty:st,getOwnPropertyDescriptor:it,getOwnPropertyNames:at,getOwnPropertySymbols:nt,getPrototypeOf:lt}=Object,A=globalThis,ze=A.trustedTypes,ot=ze?ze.emptyScript:"",ct=A.reactiveElementPolyfillSupport,F=(i,t)=>i,O={toAttribute(i,t){switch(t){case Boolean:i=i?ot:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},X=(i,t)=>!rt(i,t),Ee={attribute:!0,type:String,converter:O,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);var S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ee){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&st(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){let{get:s,set:a}=it(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let o=s?.call(this);a?.call(this,n),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ee}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;let t=lt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){let e=this.properties,r=[...at(e),...nt(e)];for(let s of r)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)e.unshift(de(s))}else t!==void 0&&e.push(de(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ce(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){let a=(r.converter?.toAttribute!==void 0?r.converter:O).toAttribute(e,r.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){let r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let a=r.getPropertyOptions(s),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:O;this._$Em=s;let o=n.fromAttribute(e,a.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,r,s=!1,a){if(t!==void 0){let n=this.constructor;if(s===!1&&(a=this[t]),r??(r=n.getPropertyOptions(t)),!((r.hasChanged??X)(a,e)||r.useDefault&&r.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:a},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,a]of r){let{wrapped:n}=a,o=this[s];n!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,a,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[F("elementProperties")]=new Map,S[F("finalized")]=new Map,ct?.({ReactiveElement:S}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.2");var W=globalThis,Re=i=>i,ee=W.trustedTypes,Le=ee?ee.createPolicy("lit-html",{createHTML:i=>i}):void 0,Me="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,qe="?"+C,_t=`<${qe}>`,P=document,V=()=>P.createComment(""),U=i=>i===null||typeof i!="object"&&typeof i!="function",ve=Array.isArray,dt=i=>ve(i)||typeof i?.[Symbol.iterator]=="function",pe=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pe=/-->/g,Ie=/>/g,R=RegExp(`>|${pe}(?:([^\\s"'>=/]+)(${pe}*=${pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),De=/'/g,Ne=/"/g,Fe=/^(?:script|style|textarea|title)$/i,be=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),_=be(1),Ht=be(2),Mt=be(3),I=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),He=new WeakMap,L=P.createTreeWalker(P,129);function Oe(i,t){if(!ve(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Le!==void 0?Le.createHTML(t):t}var pt=(i,t)=>{let e=i.length-1,r=[],s,a=t===2?"<svg>":t===3?"<math>":"",n=j;for(let o=0;o<e;o++){let c=i[o],h,g,m=-1,$=0;for(;$<c.length&&(n.lastIndex=$,g=n.exec(c),g!==null);)$=n.lastIndex,n===j?g[1]==="!--"?n=Pe:g[1]!==void 0?n=Ie:g[2]!==void 0?(Fe.test(g[2])&&(s=RegExp("</"+g[2],"g")),n=R):g[3]!==void 0&&(n=R):n===R?g[0]===">"?(n=s??j,m=-1):g[1]===void 0?m=-2:(m=n.lastIndex-g[2].length,h=g[1],n=g[3]===void 0?R:g[3]==='"'?Ne:De):n===Ne||n===De?n=R:n===Pe||n===Ie?n=j:(n=R,s=void 0);let T=n===R&&i[o+1].startsWith("/>")?" ":"";a+=n===j?c+_t:m>=0?(r.push(h),c.slice(0,m)+Me+c.slice(m)+C+T):c+C+(m===-2?o:T)}return[Oe(i,a+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},B=class i{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let a=0,n=0,o=t.length-1,c=this.parts,[h,g]=pt(t,e);if(this.el=i.createElement(h,r),L.currentNode=this.el.content,e===2||e===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=L.nextNode())!==null&&c.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let m of s.getAttributeNames())if(m.endsWith(Me)){let $=g[n++],T=s.getAttribute(m).split(C),Q=/([.?@])?(.*)/.exec($);c.push({type:1,index:a,name:Q[2],strings:T,ctor:Q[1]==="."?he:Q[1]==="?"?ge:Q[1]==="@"?me:H}),s.removeAttribute(m)}else m.startsWith(C)&&(c.push({type:6,index:a}),s.removeAttribute(m));if(Fe.test(s.tagName)){let m=s.textContent.split(C),$=m.length-1;if($>0){s.textContent=ee?ee.emptyScript:"";for(let T=0;T<$;T++)s.append(m[T],V()),L.nextNode(),c.push({type:2,index:++a});s.append(m[$],V())}}}else if(s.nodeType===8)if(s.data===qe)c.push({type:2,index:a});else{let m=-1;for(;(m=s.data.indexOf(C,m+1))!==-1;)c.push({type:7,index:a}),m+=C.length-1}a++}}static createElement(t,e){let r=P.createElement("template");return r.innerHTML=t,r}};function N(i,t,e=i,r){if(t===I)return t;let s=r!==void 0?e._$Co?.[r]:e._$Cl,a=U(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),a===void 0?s=void 0:(s=new a(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=N(i,s._$AS(i,t.values),s,r)),t}var ue=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);L.currentNode=s;let a=L.nextNode(),n=0,o=0,c=r[0];for(;c!==void 0;){if(n===c.index){let h;c.type===2?h=new K(a,a.nextSibling,this,t):c.type===1?h=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(h=new fe(a,this,t)),this._$AV.push(h),c=r[++o]}n!==c?.index&&(a=L.nextNode(),n++)}return L.currentNode=P,s}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},K=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),U(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):dt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=B.createElement(Oe(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{let a=new ue(s,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=He.get(t.strings);return e===void 0&&He.set(t.strings,e=new B(t)),e}k(t){ve(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,s=0;for(let a of t)s===e.length?e.push(r=new i(this.O(V()),this.O(V()),this,this.options)):r=e[s],r._$AI(a),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Re(t).nextSibling;Re(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,a){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,s){let a=this.strings,n=!1;if(a===void 0)t=N(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{let o=t,c,h;for(t=a[0],c=0;c<a.length-1;c++)h=N(this,o[r+c],e,c),h===I&&(h=this._$AH[c]),n||(n=!U(h)||h!==this._$AH[c]),h===p?t=p:t!==p&&(t+=(h??"")+a[c+1]),this._$AH[c]=h}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},he=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},ge=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},me=class extends H{constructor(t,e,r,s,a){super(t,e,r,s,a),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??p)===I)return;let r=this._$AH,s=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},fe=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};var ut=W.litHtmlPolyfillSupport;ut?.(B,K),(W.litHtmlVersions??(W.litHtmlVersions=[])).push("3.3.2");var je=(i,t,e)=>{let r=e?.renderBefore??t,s=r._$litPart$;if(s===void 0){let a=e?.renderBefore??null;r._$litPart$=s=new K(t.insertBefore(V(),a),a,void 0,e??{})}return s._$AI(i),s};var G=globalThis,b=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=je(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};b._$litElement$=!0,b.finalized=!0,G.litElementHydrateSupport?.({LitElement:b});var ht=G.litElementPolyfillSupport;ht?.({LitElement:b});(G.litElementVersions??(G.litElementVersions=[])).push("4.2.2");var z=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var gt={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:X},mt=(i=gt,t,e)=>{let{kind:r,metadata:s}=e,a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),a.set(e.name,i),r==="accessor"){let{name:n}=e;return{set(o){let c=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,c,i,!0,o)},init(o){return o!==void 0&&this.C(n,void 0,i,o),o}}}if(r==="setter"){let{name:n}=e;return function(o){let c=this[n];t.call(this,o),this.requestUpdate(n,c,i,!0,o)}}throw Error("Unsupported decorator location: "+r)};function v(i){return(t,e)=>typeof e=="object"?mt(i,t,e):((r,s,a)=>{let n=s.hasOwnProperty(a);return s.constructor.createProperty(a,r),n?Object.getOwnPropertyDescriptor(s,a):void 0})(i,t,e)}function u(i){return v({...i,state:!0,attribute:!1})}var We="1.12.0",E="ha_home_maintenance";var ft={red:"#f44336",pink:"#e91e63",purple:"#9c27b0","deep-purple":"#673ab7",indigo:"#3f51b5",blue:"#2196f3","light-blue":"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caf50","light-green":"#8bc34a",lime:"#cddc39",yellow:"#ffeb3b",amber:"#ffc107",orange:"#ff9800","deep-orange":"#ff5722",brown:"#795548",grey:"#9e9e9e","blue-grey":"#607d8b"};function Ve(i){return ft[i.toLowerCase()]??i}function re(i){if(!i)return"";let t=Ve(i);if(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(t)){let e=t.slice(1);e.length===3&&(e=e.split("").map(c=>c+c).join(""));let r=parseInt(e.slice(0,2),16),s=parseInt(e.slice(2,4),16),a=parseInt(e.slice(4,6),16),o=(.299*r+.587*s+.114*a)/255>.5?`rgb(${Math.round(r*.5)},${Math.round(s*.5)},${Math.round(a*.5)})`:t;return`background:rgba(${r},${s},${a},0.12);color:${o};`}return`border-left:3px solid ${t};padding-left:5px;`}function se(i){return i?`background:${Ve(i)};color:#fff;`:""}var J=i=>i.callWS({type:`${E}/get_tasks`}),Ue=(i,t)=>i.callWS({type:`${E}/get_task`,task_id:t}),ie=(i,t)=>i.callWS({type:`${E}/add_task`,...t}),Be=(i,t,e)=>i.callWS({type:`${E}/update_task`,task_id:t,...e}),Ke=(i,t)=>i.callWS({type:`${E}/complete_task`,task_id:t}),Ge=(i,t)=>i.callWS({type:`${E}/remove_task`,task_id:t});var Je=i=>i.callWS({type:`${E}/get_templates`}),Qe=async i=>{try{return await i.callWS({type:"tag/list"})}catch{return[]}},ae=async i=>{try{return await i.callWS({type:"config/label_registry/list"})}catch{return[]}};var M=w`
  :host {
    display: block;
    padding: 16px;
    --hmp-accent-color: var(--ha-card-header-color, var(--primary-text-color));
  }

  .page-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0 16px;
  }

  .page-header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
    flex: 1;
  }

  .page-header .back-btn {
    cursor: pointer;
    --mdc-icon-size: 24px;
  }

  .page-header ha-menu-button {
    flex-shrink: 0;
  }

  /* Task table - responsive, NOT hardcoded 850px */
  .task-table {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    border-collapse: collapse;
  }

  .task-table-header {
    display: grid;
    grid-template-columns: 48px 2fr 1fr 1fr 1fr 1fr 100px 120px;
    gap: 8px;
    padding: 12px 16px;
    background: var(--table-header-background-color, var(--secondary-background-color));
    border-bottom: 1px solid var(--divider-color);
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    cursor: pointer;
    user-select: none;
  }

  .task-table-row {
    display: grid;
    grid-template-columns: 48px 2fr 1fr 1fr 1fr 1fr 100px 120px;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--divider-color);
    align-items: center;
    transition: background-color 0.2s;
  }

  .task-table-row:hover {
    background: var(--table-row-background-color, rgba(0, 0, 0, 0.04));
  }

  .task-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
  }

  .task-title {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 200px;
  }

  .task-title .subtitle {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-weight: 400;
  }

  /* Status indicators */
  .status-indicator {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }

  .status-ok {
    background: rgba(76, 175, 80, 0.12);
    color: var(--label-badge-green, #4caf50);
  }

  .status-due-soon {
    background: rgba(255, 152, 0, 0.12);
    color: var(--label-badge-yellow, #ff9800);
  }

  .status-overdue {
    background: rgba(244, 67, 54, 0.12);
    color: var(--label-badge-red, #f44336);
  }

  .status-out-of-season {
    background: rgba(158, 158, 158, 0.12);
    color: var(--label-badge-grey, #9e9e9e);
  }

  /* Action buttons */
  .action-buttons {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .action-btn {
    cursor: pointer;
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
    border: none;
    background: none;
    padding: 4px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s, background-color 0.2s;
  }

  .action-btn:hover {
    background: var(--secondary-background-color);
  }

  .action-btn.complete:hover {
    color: var(--label-badge-green, #4caf50);
  }

  .action-btn.edit:hover {
    color: var(--hmp-accent-color);
  }

  .action-btn.delete:hover {
    color: var(--label-badge-red, #f44336);
  }

  /* FAB / Add button */
  .fab {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 10;
  }

  .header-actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  /* Form styles */
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 16px 0;
  }

  .form-field {
    margin-bottom: 16px;
  }

  .form-field label {
    display: block;
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
    font-weight: 500;
  }

  .form-field input,
  .form-field textarea,
  .form-field select {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 14px;
    font-family: inherit;
    box-sizing: border-box;
  }

  .form-field textarea {
    min-height: 80px;
    resize: vertical;
  }

  .form-field input:focus,
  .form-field textarea:focus,
  .form-field select:focus {
    outline: none;
    border-color: var(--hmp-accent-color);
  }

  .form-row {
    display: flex;
    gap: 16px;
  }

  .form-row .form-field {
    flex: 1;
  }

  .form-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding-top: 16px;
  }

  /* Template browser */
  .template-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 16px 0;
  }

  .template-category {
    margin-bottom: 24px;
  }

  .template-category h2 {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 12px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--divider-color);
  }

  .template-card {
    padding: 16px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;
    background: var(--card-background-color);
  }

  .template-card:hover {
    border-color: var(--hmp-accent-color);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .template-card .template-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .template-card .template-title {
    font-weight: 500;
  }

  .template-card .template-desc {
    font-size: 13px;
    color: var(--secondary-text-color);
    margin-bottom: 8px;
  }

  .template-card .template-interval {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Search input */
  .search-bar {
    width: 100%;
    max-width: 400px;
    padding: 8px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 14px;
    box-sizing: border-box;
  }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 48px 16px;
    color: var(--secondary-text-color);
  }

  .empty-state ha-svg-icon {
    --mdc-icon-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  /* Expansion panel for advanced settings */
  .expansion-panel {
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    margin-top: 16px;
  }

  .expansion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    cursor: pointer;
    font-weight: 500;
    user-select: none;
  }

  .expansion-content {
    padding: 0 16px 16px;
  }

  /* Mobile responsive */
  @media (max-width: 900px) {
    .page-header {
      flex-wrap: wrap;
    }

    .page-header h1 {
      flex: 1 1 100%;
    }

    .header-actions {
      flex-wrap: wrap;
    }

    .task-table-header {
      grid-template-columns: 40px 2fr 1fr 100px 100px;
    }
    .task-table-row {
      grid-template-columns: 40px 2fr 1fr 100px 100px;
    }
    .hide-medium {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .task-table-header {
      display: none;
    }

    .task-table-row {
      display: grid;
      grid-template-columns: 32px 1fr auto auto;
      gap: 4px 8px;
      padding: 10px 12px;
      align-items: center;
    }

    /* Row 1: icon | title | status | actions */
    .task-table-row .task-icon {
      grid-row: 1 / 3;
      grid-column: 1;
      --mdc-icon-size: 18px;
    }

    .task-table-row .task-title {
      grid-row: 1;
      grid-column: 2;
      min-width: 0;
    }

    .task-table-row .task-title .subtitle {
      display: none;
    }

    /* Status badge */
    .task-table-row > div:nth-child(7) {
      grid-row: 1;
      grid-column: 3;
    }

    /* Action buttons */
    .task-table-row .action-buttons {
      grid-row: 1;
      grid-column: 4;
    }

    /* Row 2: interval text under the title */
    .task-table-row > div:nth-child(3) {
      grid-row: 2;
      grid-column: 2 / -1;
      font-size: 12px;
      color: var(--secondary-text-color);
    }

    .form-row {
      flex-direction: column;
      gap: 0;
    }

    .template-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Label chips */
  .task-labels {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;
  }

  .label-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    white-space: nowrap;
  }

  .label-chip ha-icon {
    --mdc-icon-size: 12px;
  }

  /* Label picker (form) */
  .label-picker {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px 0;
  }

  .label-picker-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    border-radius: 14px;
    font-size: 12px;
    font-family: inherit;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid var(--divider-color);
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    transition: background-color 0.15s, color 0.15s, border-color 0.15s;
  }

  .label-picker-chip ha-icon {
    --mdc-icon-size: 14px;
  }

  .label-picker-chip.selected {
    border-color: transparent;
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .label-picker-chip.selected:hover {
    background: var(--primary-color);
  }

  .label-picker-empty {
    font-size: 13px;
    color: var(--secondary-text-color);
    font-style: italic;
  }

  /* Filter chips */
  .filter-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
  }

  .filter-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 12px;
    border-radius: 16px;
    cursor: pointer;
    font-size: 12px;
    font-family: inherit;
    border: none;
    transition: background-color 0.2s, color 0.2s;
  }

  .filter-chip ha-icon {
    --mdc-icon-size: 14px;
  }

  .filter-chip.active {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .filter-chip:not(.active) {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color);
  }

  .filter-chip:not(.active):hover {
    background: var(--table-row-background-color, rgba(0, 0, 0, 0.08));
  }

  .filter-chip.clear-chip {
    background: transparent;
    color: var(--secondary-text-color);
    border: 1px solid var(--divider-color);
  }

  .filter-chip.clear-chip:hover {
    background: var(--secondary-background-color);
  }

  /* Completion history section */
  .history-section {
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid var(--divider-color);
  }

  .history-section h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 12px;
  }

  .history-count {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color);
    background: var(--secondary-background-color);
    border-radius: 10px;
    padding: 1px 8px;
  }

  .history-list {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 240px;
    overflow-y: auto;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
  }

  .history-list li {
    padding: 8px 12px;
    border-bottom: 1px solid var(--divider-color);
    font-size: 14px;
    color: var(--primary-text-color);
  }

  .history-list li:last-child {
    border-bottom: none;
  }

  .history-empty {
    color: var(--secondary-text-color);
    font-style: italic;
  }

  /* Sort indicator */
  .sort-indicator {
    font-size: 10px;
    margin-left: 4px;
  }

  /* Column header clickable */
  .col-header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .col-header:hover {
    color: var(--primary-text-color);
  }
`;var ye={};ce(ye,{config:()=>vt,default:()=>kt,options:()=>bt,panel:()=>yt});var vt={step:{user:{title:"Home Maintenance Pro",description:"Set up the Home Maintenance Pro integration to track recurring maintenance tasks."}},abort:{single_instance_allowed:"Only a single instance is allowed."}},bt={step:{init:{title:"Home Maintenance Pro Options",data:{admin_only:"Admin only",sidebar_title:"Sidebar title",max_completion_history:"Max completion history per task"},data_description:{admin_only:"Restrict panel access to admin users only.",sidebar_title:"Title shown in the sidebar navigation.",max_completion_history:"Oldest entries are dropped once a task's completion history exceeds this many entries. Set to 0 for no limit."}}}},yt={panel_title:"Home Maintenance Pro",tasks:"Tasks",add_task:"Add Task",browse_templates:"Browse Templates",create_task:"Create Task",edit_task:"Edit Task",choose_template:"Choose a Template",create_from_scratch:"Create from Scratch",title:"Title",description:"Description",interval:"Interval",interval_value:"Interval Value",interval_type:"Interval Type",every:"Every",every_days_one:"Every day",every_days_other:"Every {count} days",every_weeks_one:"Every week",every_weeks_other:"Every {count} weeks",every_months_one:"Every month",every_months_other:"Every {count} months",last_performed:"Last Performed",next_due:"Next Due",status:"Status",actions:"Actions",save:"Save",cancel:"Cancel",delete:"Delete",complete:"Complete",edit:"Edit",days:"Days",weeks:"Weeks",months:"Months",overdue:"Overdue",due_soon:"Due Soon",ok:"OK",out_of_season:"Out of Season",never:"Never",active_months:"Active Months",active_months_hint:"Select the months this task is in season. Outside these months it won't show as due or overdue. Leave empty to run year-round.",month_1:"Jan",month_2:"Feb",month_3:"Mar",month_4:"Apr",month_5:"May",month_6:"Jun",month_7:"Jul",month_8:"Aug",month_9:"Sep",month_10:"Oct",month_11:"Nov",month_12:"Dec",advanced_settings:"Advanced Settings",tag:"NFC Tag",icon:"Icon",labels:"Labels",search_tasks:"Search tasks...",all_labels:"All Labels",search_templates:"Search templates...",no_tasks:"No maintenance tasks yet. Add a task or browse templates to get started.",confirm_delete:"Are you sure you want to delete this task?",task_saved:"Task saved successfully.",task_deleted:"Task deleted.",task_completed:"Task marked as complete.",required_field:"This field is required.",today:"Today",import_csv:"Import CSV",import_csv_info:"Upload a CSV file with the following columns (title is required, others are optional):",import:"Import",done:"Done",no_results:"No templates match your search.",notify_when_overdue:"Notify when overdue",export_csv:"Export CSV",sort_by:"Sort by",clear:"Clear",track_history:"Track completion history",completion_history:"Completion History",no_history:"No completion history yet.",loading:"Loading...",importing:"Importing...",none_option:"None",add_custom_label_placeholder:"Add custom label, press Enter",custom_label_hint:"Custom labels are local to this integration. To use a label across Home Assistant (with colors, icons, and filtering), create it in Settings \u2192 Labels first.",category_hvac:"HVAC",category_plumbing:"Plumbing",category_electrical:"Electrical",category_exterior:"Exterior",category_interior:"Interior",category_appliances:"Appliances",category_safety:"Safety",category_lawn_garden:"Lawn & Garden",category_seasonal:"Seasonal",category_garage_vehicles:"Garage & Vehicles",category_pool_spa:"Pool & Spa",category_pest_control:"Pest Control",category_water_treatment:"Water Treatment",category_fireplace_chimney:"Fireplace & Chimney",category_septic_system:"Septic System",category_painting_finishes:"Painting & Finishes",tpl_title_change_hvac_filter:"Change HVAC filter",tpl_desc_change_hvac_filter:"Replace the HVAC air filter to maintain air quality and system efficiency.",tpl_title_clean_air_vents:"Clean air vents",tpl_desc_clean_air_vents:"Remove dust and debris from air vents and registers throughout the home.",tpl_title_inspect_ductwork:"Inspect ductwork",tpl_desc_inspect_ductwork:"Check ductwork for leaks, damage, or disconnected sections.",tpl_title_service_ac_unit:"Service AC unit",tpl_desc_service_ac_unit:"Schedule professional service for the air conditioning unit including refrigerant check.",tpl_title_check_thermostat_calibration:"Check thermostat calibration",tpl_desc_check_thermostat_calibration:"Verify thermostat reads the correct temperature and adjust if needed.",tpl_title_bleed_radiators:"Bleed radiators",tpl_desc_bleed_radiators:"Release trapped air from radiators to improve heating efficiency.",tpl_title_clean_condensate_drain_line:"Clean condensate drain line",tpl_desc_clean_condensate_drain_line:"Flush the AC condensate drain line with vinegar to prevent clogs.",tpl_title_check_for_leaks_under_sinks:"Check for leaks under sinks",tpl_desc_check_for_leaks_under_sinks:"Inspect under all sinks for signs of leaks, drips, or water damage.",tpl_title_flush_water_heater:"Flush water heater",tpl_desc_flush_water_heater:"Drain and flush the water heater to remove sediment buildup.",tpl_title_clean_faucet_aerators:"Clean faucet aerators",tpl_desc_clean_faucet_aerators:"Remove and clean faucet aerators to restore water flow and remove mineral deposits.",tpl_title_test_sump_pump:"Test sump pump",tpl_desc_test_sump_pump:"Pour water into the sump pit to verify the pump activates and drains properly.",tpl_title_inspect_washing_machine_hoses:"Inspect washing machine hoses",tpl_desc_inspect_washing_machine_hoses:"Check washing machine supply hoses for bulges, cracks, or leaks.",tpl_title_clean_garbage_disposal:"Clean garbage disposal",tpl_desc_clean_garbage_disposal:"Clean and deodorize the garbage disposal with ice and citrus peels.",tpl_title_check_toilet_components:"Check toilet components",tpl_desc_check_toilet_components:"Inspect toilet flappers, fill valves, and supply lines for wear or leaks.",tpl_title_test_gfci_outlets:"Test GFCI outlets",tpl_desc_test_gfci_outlets:"Press the test and reset buttons on all GFCI outlets to verify they trip properly.",tpl_title_check_electrical_panel:"Check electrical panel",tpl_desc_check_electrical_panel:"Inspect the electrical panel for signs of corrosion, overheating, or loose connections.",tpl_title_replace_smoke_detector_batteries:"Replace smoke detector batteries",tpl_desc_replace_smoke_detector_batteries:"Replace batteries in all smoke detectors even if they have not chirped.",tpl_title_test_carbon_monoxide_detectors:"Test carbon monoxide detectors",tpl_desc_test_carbon_monoxide_detectors:"Test all carbon monoxide detectors to confirm they are functioning correctly.",tpl_title_inspect_extension_cords:"Inspect extension cords",tpl_desc_inspect_extension_cords:"Check all extension cords for fraying, damage, or overloading.",tpl_title_clean_gutters:"Clean gutters",tpl_desc_clean_gutters:"Remove leaves and debris from gutters and downspouts to prevent water damage.",tpl_title_inspect_roof:"Inspect roof",tpl_desc_inspect_roof:"Check roof for missing, damaged, or curling shingles and signs of wear.",tpl_title_power_wash_siding:"Power wash siding",tpl_desc_power_wash_siding:"Power wash the exterior siding to remove dirt, mold, and mildew.",tpl_title_check_caulking_around_windows:"Check caulking around windows",tpl_desc_check_caulking_around_windows:"Inspect and replace deteriorated caulking around windows and door frames.",tpl_title_inspect_foundation:"Inspect foundation",tpl_desc_inspect_foundation:"Walk around the foundation looking for cracks, settling, or water intrusion.",tpl_title_clean_dryer_vent:"Clean dryer vent",tpl_desc_clean_dryer_vent:"Clean the exterior dryer vent duct to prevent lint buildup and fire hazard.",tpl_title_seal_driveway_cracks:"Seal driveway cracks",tpl_desc_seal_driveway_cracks:"Fill and seal cracks in the driveway to prevent water damage and further deterioration.",tpl_title_deep_clean_carpets:"Deep clean carpets",tpl_desc_deep_clean_carpets:"Steam clean or shampoo all carpeted areas to remove deep dirt and allergens.",tpl_title_clean_range_hood_filter:"Clean range hood filter",tpl_desc_clean_range_hood_filter:"Remove and clean the range hood grease filter in hot soapy water.",tpl_title_recaulk_bathroom:"Recaulk bathroom",tpl_desc_recaulk_bathroom:"Remove old caulk and apply fresh caulk around bathtub, shower, and sink edges.",tpl_title_check_window_locks:"Check window locks",tpl_desc_check_window_locks:"Test all window locks and latches to ensure they engage properly.",tpl_title_clean_drains:"Clean drains",tpl_desc_clean_drains:"Clear slow drains using a drain snake or enzyme-based cleaner.",tpl_title_lubricate_door_hinges:"Lubricate door hinges",tpl_desc_lubricate_door_hinges:"Apply lubricant to all door hinges to eliminate squeaks and ensure smooth operation.",tpl_title_clean_dishwasher:"Clean dishwasher",tpl_desc_clean_dishwasher:"Run an empty cycle with dishwasher cleaner and wipe down the door seal.",tpl_title_clean_washing_machine:"Clean washing machine",tpl_desc_clean_washing_machine:"Run a cleaning cycle with washing machine cleaner and wipe the gasket.",tpl_title_clean_refrigerator_coils:"Clean refrigerator coils",tpl_desc_clean_refrigerator_coils:"Vacuum or brush the condenser coils on the refrigerator to maintain efficiency.",tpl_title_replace_water_filter:"Replace water filter",tpl_desc_replace_water_filter:"Replace the refrigerator water filter cartridge for clean drinking water.",tpl_title_clean_oven:"Clean oven",tpl_desc_clean_oven:"Run the self-clean cycle or manually clean the oven interior.",tpl_title_defrost_freezer:"Defrost freezer",tpl_desc_defrost_freezer:"Defrost the freezer if ice buildup exceeds a quarter inch.",tpl_title_clean_dryer_lint_trap_deep:"Clean dryer lint trap deep",tpl_desc_clean_dryer_lint_trap_deep:"Remove the lint screen and vacuum the lint trap housing to improve airflow.",tpl_title_test_smoke_detectors:"Test smoke detectors",tpl_desc_test_smoke_detectors:"Press the test button on every smoke detector and replace any that fail.",tpl_title_check_fire_extinguisher_pressure:"Check fire extinguisher pressure",tpl_desc_check_fire_extinguisher_pressure:"Verify the pressure gauge on each fire extinguisher is in the green zone.",tpl_title_review_emergency_plan:"Review emergency plan",tpl_desc_review_emergency_plan:"Review and update the household emergency plan with all family members.",tpl_title_test_security_system:"Test security system",tpl_desc_test_security_system:"Run a full test of the home security system including all sensors and alarms.",tpl_title_check_first_aid_kit:"Check first aid kit",tpl_desc_check_first_aid_kit:"Inspect the first aid kit and replace any expired or used supplies.",tpl_title_inspect_fire_escape_routes:"Inspect fire escape routes",tpl_desc_inspect_fire_escape_routes:"Walk through all fire escape routes and ensure exits are clear and accessible.",tpl_title_mow_lawn:"Mow lawn",tpl_desc_mow_lawn:"Mow the lawn to the recommended height for the grass type.",tpl_title_fertilize_lawn:"Fertilize lawn",tpl_desc_fertilize_lawn:"Apply seasonal fertilizer to the lawn following product instructions.",tpl_title_sharpen_mower_blades:"Sharpen mower blades",tpl_desc_sharpen_mower_blades:"Remove and sharpen or replace lawn mower blades for a clean cut.",tpl_title_prune_shrubs:"Prune shrubs",tpl_desc_prune_shrubs:"Trim and shape shrubs and hedges to maintain appearance and plant health.",tpl_title_aerate_lawn:"Aerate lawn",tpl_desc_aerate_lawn:"Aerate the lawn to reduce soil compaction and improve root growth.",tpl_title_clean_outdoor_furniture:"Clean outdoor furniture",tpl_desc_clean_outdoor_furniture:"Wash and treat outdoor furniture to remove dirt, mold, and weather damage.",tpl_title_inspect_irrigation_system:"Inspect irrigation system",tpl_desc_inspect_irrigation_system:"Check sprinkler heads, drip lines, and timers for proper operation.",tpl_title_winterize_outdoor_faucets:"Winterize outdoor faucets",tpl_desc_winterize_outdoor_faucets:"Disconnect hoses, drain outdoor faucets, and install insulated covers.",tpl_title_service_snow_blower:"Service snow blower",tpl_desc_service_snow_blower:"Change oil, check belts, and test the snow blower before winter arrives.",tpl_title_reverse_ceiling_fan_direction:"Reverse ceiling fan direction",tpl_desc_reverse_ceiling_fan_direction:"Switch ceiling fan rotation direction for the current season.",tpl_title_check_weather_stripping:"Check weather stripping",tpl_desc_check_weather_stripping:"Inspect and replace worn weather stripping around doors and windows.",tpl_title_store_or_retrieve_seasonal_items:"Store or retrieve seasonal items",tpl_desc_store_or_retrieve_seasonal_items:"Rotate seasonal items in and out of storage as the season changes.",tpl_title_test_outdoor_lighting:"Test outdoor lighting",tpl_desc_test_outdoor_lighting:"Check all exterior lights, replace bulbs, and clean fixtures.",tpl_title_inspect_attic_insulation:"Inspect attic insulation",tpl_desc_inspect_attic_insulation:"Check attic insulation for settling, moisture, or pest damage before winter.",tpl_title_clean_window_screens:"Clean window screens",tpl_desc_clean_window_screens:"Remove window screens, wash with soapy water, and reinstall.",tpl_title_lubricate_garage_door:"Lubricate garage door",tpl_desc_lubricate_garage_door:"Apply lubricant to garage door tracks, rollers, hinges, and springs.",tpl_title_test_garage_door_auto_reverse:"Test garage door auto-reverse",tpl_desc_test_garage_door_auto_reverse:"Place an object under the garage door and verify it reverses when closing.",tpl_title_check_garage_door_weather_seal:"Check garage door weather seal",tpl_desc_check_garage_door_weather_seal:"Inspect the bottom seal and side weather stripping on the garage door.",tpl_title_organize_garage_storage:"Organize garage storage",tpl_desc_organize_garage_storage:"Declutter the garage, check for expired chemicals, and reorganize storage.",tpl_title_check_vehicle_tire_pressure:"Check vehicle tire pressure",tpl_desc_check_vehicle_tire_pressure:"Check and adjust tire pressure on all vehicles to the recommended PSI.",tpl_title_rotate_vehicle_tires:"Rotate vehicle tires",tpl_desc_rotate_vehicle_tires:"Rotate tires to ensure even wear and extend tire life.",tpl_title_change_engine_oil:"Change engine oil",tpl_desc_change_engine_oil:"Change engine oil and oil filter per manufacturer recommendations.",tpl_title_replace_windshield_wipers:"Replace windshield wipers",tpl_desc_replace_windshield_wipers:"Replace windshield wiper blades when streaking or skipping.",tpl_title_test_pool_water_chemistry:"Test pool water chemistry",tpl_desc_test_pool_water_chemistry:"Test pool pH, chlorine, alkalinity, and calcium hardness levels.",tpl_title_clean_pool_filter:"Clean pool filter",tpl_desc_clean_pool_filter:"Backwash or clean the pool filter cartridge to maintain proper filtration.",tpl_title_skim_and_vacuum_pool:"Skim and vacuum pool",tpl_desc_skim_and_vacuum_pool:"Skim debris from the surface and vacuum the pool floor.",tpl_title_inspect_pool_pump_and_motor:"Inspect pool pump and motor",tpl_desc_inspect_pool_pump_and_motor:"Check pool pump for leaks, unusual noise, and proper pressure readings.",tpl_title_shock_treat_pool:"Shock treat pool",tpl_desc_shock_treat_pool:"Add pool shock treatment to eliminate bacteria and restore water clarity.",tpl_title_clean_spa_filter:"Clean spa filter",tpl_desc_clean_spa_filter:"Remove, rinse, and deep clean the hot tub or spa filter cartridge.",tpl_title_drain_and_refill_spa:"Drain and refill spa",tpl_desc_drain_and_refill_spa:"Drain the hot tub completely, clean the shell, and refill with fresh water.",tpl_title_inspect_for_termites:"Inspect for termites",tpl_desc_inspect_for_termites:"Check foundation, wood structures, and crawl spaces for signs of termite activity.",tpl_title_refresh_ant_and_roach_bait_stations:"Refresh ant and roach bait stations",tpl_desc_refresh_ant_and_roach_bait_stations:"Replace indoor and outdoor pest bait stations with fresh bait.",tpl_title_seal_entry_points:"Seal entry points",tpl_desc_seal_entry_points:"Inspect and seal gaps around pipes, vents, and the foundation where pests can enter.",tpl_title_check_attic_for_rodents:"Check attic for rodents",tpl_desc_check_attic_for_rodents:"Inspect attic for droppings, nesting materials, or chewed wiring from rodents.",tpl_title_clean_bird_feeders:"Clean bird feeders",tpl_desc_clean_bird_feeders:"Disassemble and scrub bird feeders to prevent mold and disease spread.",tpl_title_replace_whole_house_water_filter:"Replace whole-house water filter",tpl_desc_replace_whole_house_water_filter:"Replace the sediment and carbon filter cartridges in the whole-house water filtration system.",tpl_title_add_salt_to_water_softener:"Add salt to water softener",tpl_desc_add_salt_to_water_softener:"Check and refill salt in the water softener brine tank.",tpl_title_clean_water_softener_brine_tank:"Clean water softener brine tank",tpl_desc_clean_water_softener_brine_tank:"Empty, scrub, and refill the brine tank to remove salt bridges and sediment.",tpl_title_replace_reverse_osmosis_filters:"Replace reverse osmosis filters",tpl_desc_replace_reverse_osmosis_filters:"Replace pre-filter, post-filter, and membrane in the RO drinking water system.",tpl_title_test_well_water_quality:"Test well water quality",tpl_desc_test_well_water_quality:"Send a water sample to a lab for bacteria, nitrates, and mineral testing.",tpl_title_schedule_chimney_sweep:"Schedule chimney sweep",tpl_desc_schedule_chimney_sweep:"Hire a professional to clean the chimney flue and remove creosote buildup.",tpl_title_inspect_chimney_cap_and_flashing:"Inspect chimney cap and flashing",tpl_desc_inspect_chimney_cap_and_flashing:"Check the chimney cap for damage and inspect flashing for gaps or rust.",tpl_title_clean_fireplace_firebox:"Clean fireplace firebox",tpl_desc_clean_fireplace_firebox:"Remove ash buildup from the firebox and inspect firebrick for cracks.",tpl_title_check_fireplace_damper:"Check fireplace damper",tpl_desc_check_fireplace_damper:"Open and close the fireplace damper to ensure it moves freely and seals properly.",tpl_title_pump_septic_tank:"Pump septic tank",tpl_desc_pump_septic_tank:"Schedule professional septic tank pumping to prevent overflow and drain field damage.",tpl_title_inspect_septic_drain_field:"Inspect septic drain field",tpl_desc_inspect_septic_drain_field:"Walk the drain field area checking for wet spots, odors, or lush grass patches.",tpl_title_add_septic_treatment:"Add septic treatment",tpl_desc_add_septic_treatment:"Add enzyme-based septic treatment to maintain healthy bacteria levels in the tank.",tpl_title_touch_up_interior_paint:"Touch up interior paint",tpl_desc_touch_up_interior_paint:"Inspect walls for scuffs, nail holes, and chips. Touch up with matching paint.",tpl_title_inspect_exterior_paint:"Inspect exterior paint",tpl_desc_inspect_exterior_paint:"Check exterior paint for peeling, cracking, or fading and schedule repainting if needed.",tpl_title_refinish_deck_or_porch:"Refinish deck or porch",tpl_desc_refinish_deck_or_porch:"Sand, stain, or seal the deck or porch to protect wood from weather damage.",tpl_title_seal_grout_lines:"Seal grout lines",tpl_desc_seal_grout_lines:"Apply grout sealer to tile floors, backsplash, and shower areas to prevent staining."},kt={config:vt,options:bt,panel:yt};var ke={};ce(ke,{config:()=>wt,default:()=>St,options:()=>xt,panel:()=>$t});var wt={step:{user:{title:"Hauswartung Pro",description:"Richte die Integration von Hauswartung Pro ein, um wiederkehrende Wartungsaufgaben zu verfolgen."}},abort:{single_instance_allowed:"Es ist nur eine einzige Instanz zul\xE4ssig."}},xt={step:{init:{title:"Hauswartung Pro Optionen",data:{admin_only:"Nur f\xFCr Administratoren",sidebar_title:"Seitenleisten-Titel",max_completion_history:"Max. Abschlussverlauf pro Aufgabe"},data_description:{admin_only:"Zugriff auf das Panel auf Admin-Benutzer einschr\xE4nken.",sidebar_title:"Titel, der in der Seitenleisten-Navigation angezeigt wird.",max_completion_history:"\xC4lteste Eintr\xE4ge werden entfernt, sobald der Abschlussverlauf einer Aufgabe diese Anzahl \xFCberschreitet. 0 bedeutet unbegrenzt."}}}},$t={panel_title:"Hauswartung Pro",tasks:"Aufgaben",add_task:"Aufgabe hinzuf\xFCgen",browse_templates:"Vorlagen durchsuchen",create_task:"Aufgabe erstellen",edit_task:"Aufgabe bearbeiten",choose_template:"Vorlage ausw\xE4hlen",create_from_scratch:"Neu erstellen",title:"Titel",description:"Beschreibung",interval:"Intervall",interval_value:"Intervallwert",interval_type:"Intervalltyp",every:"Alle",every_days_one:"Jeden Tag",every_days_other:"Alle {count} Tage",every_weeks_one:"Jede Woche",every_weeks_other:"Alle {count} Wochen",every_months_one:"Jeden Monat",every_months_other:"Alle {count} Monate",last_performed:"Zuletzt durchgef\xFChrt",next_due:"N\xE4chste F\xE4lligkeit",status:"Status",actions:"Aktionen",save:"Speichern",cancel:"Abbrechen",delete:"L\xF6schen",complete:"Abschlie\xDFen",edit:"Bearbeiten",days:"Tage",weeks:"Wochen",months:"Monate",overdue:"\xDCberf\xE4llig",due_soon:"Bald f\xE4llig",ok:"OK",out_of_season:"Au\xDFerhalb der Saison",never:"Nie",active_months:"Aktive Monate",active_months_hint:"W\xE4hle die Monate aus, in denen diese Aufgabe anf\xE4llt. Au\xDFerhalb dieser Monate wird sie weder als f\xE4llig noch als \xFCberf\xE4llig angezeigt. Lass das Feld leer, wenn die Aufgabe das ganze Jahr \xFCber ausgef\xFChrt werden soll.",month_1:"Jan",month_2:"Feb",month_3:"M\xE4r",month_4:"Apr",month_5:"Mai",month_6:"Jun",month_7:"Jul",month_8:"Aug",month_9:"Sep",month_10:"Okt",month_11:"Nov",month_12:"Dez",advanced_settings:"Erweiterte Einstellungen",tag:"NFC-Tag",icon:"Symbol",labels:"Labels",search_tasks:"Aufgaben suchen...",all_labels:"Alle Labels",search_templates:"Vorlagen suchen...",no_tasks:"Noch keine Wartungsaufgaben. F\xFCge eine Aufgabe hinzu oder durchsuche die Vorlagen, um loszulegen.",confirm_delete:"M\xF6chtest du diese Aufgabe wirklich l\xF6schen?",task_saved:"Aufgabe erfolgreich gespeichert.",task_deleted:"Aufgabe gel\xF6scht.",task_completed:"Aufgabe als erledigt markiert.",required_field:"Dieses Feld ist erforderlich.",today:"Heute",import_csv:"CSV importieren",import_csv_info:"Lade eine CSV-Datei mit den folgenden Spalten hoch (Titel ist erforderlich, alles andere optional):",import:"Importieren",done:"Fertig",no_results:"Keine Vorlagen entsprechen deiner Suche.",notify_when_overdue:"Bei \xDCberf\xE4lligkeit benachrichtigen",export_csv:"CSV exportieren",sort_by:"Sortieren nach",clear:"Zur\xFCcksetzen",track_history:"Verlauf der Erledigungen verfolgen",completion_history:"Verlauf der Erledigungen",no_history:"Noch kein Verlauf vorhanden.",loading:"Wird geladen...",importing:"Wird importiert...",none_option:"Keine",add_custom_label_placeholder:"Benutzerdefiniertes Label hinzuf\xFCgen, Enter dr\xFCcken",custom_label_hint:"Benutzerdefinierte Labels gelten nur f\xFCr diese Integration. Um ein Label integrations\xFCbergreifend in Home Assistant zu verwenden (mit Farben, Symbolen und Filterung), erstelle es zuerst unter Einstellungen \u2192 Labels.",category_hvac:"Heizung, L\xFCftung, Klimatisierung (HLK)",category_plumbing:"Sanit\xE4r",category_electrical:"Elektrik",category_exterior:"Au\xDFenbereich",category_interior:"Innenbereich",category_appliances:"Haushaltsger\xE4te",category_safety:"Sicherheit",category_lawn_garden:"Rasen & Garten",category_seasonal:"Saisonal",category_garage_vehicles:"Garage & Fahrzeuge",category_pool_spa:"Pool & Spa",category_pest_control:"Sch\xE4dlingsbek\xE4mpfung",category_water_treatment:"Wasseraufbereitung",category_fireplace_chimney:"Kamin & Schornstein",category_septic_system:"Kl\xE4rgrube",category_painting_finishes:"Anstrich & Oberfl\xE4chen",tpl_title_change_hvac_filter:"HLK-Filter wechseln",tpl_desc_change_hvac_filter:"Ersetze den HLK-Luftfilter, um Luftqualit\xE4t und Effizienz der Anlage zu erhalten.",tpl_title_clean_air_vents:"L\xFCftungs\xF6ffnungen reinigen",tpl_desc_clean_air_vents:"Entferne Staub und Schmutz aus L\xFCftungs\xF6ffnungen und Luftausl\xE4ssen im ganzen Haus.",tpl_title_inspect_ductwork:"Luftkan\xE4le pr\xFCfen",tpl_desc_inspect_ductwork:"Pr\xFCfe Luftkan\xE4le auf Lecks, Sch\xE4den oder gel\xF6ste Teile.",tpl_title_service_ac_unit:"Klimaanlage warten",tpl_desc_service_ac_unit:"Plane eine fachm\xE4nnische Wartung der Klimaanlage einschlie\xDFlich K\xE4ltemittelpr\xFCfung.",tpl_title_check_thermostat_calibration:"Thermostat-Kalibrierung pr\xFCfen",tpl_desc_check_thermostat_calibration:"Verifiziere, dass das Thermostat die korrekte Temperatur anzeigt und kalibriere es bei Bedarf.",tpl_title_bleed_radiators:"Heizk\xF6rper entl\xFCften",tpl_desc_bleed_radiators:"Lasse eingeschlossene Luft aus Heizk\xF6rpern ab, um die Heizleistung zu verbessern.",tpl_title_clean_condensate_drain_line:"Kondensatablauf reinigen",tpl_desc_clean_condensate_drain_line:"Sp\xFCle den Kondensatablauf der Klimaanlage mit Essig, um Verstopfungen zu vermeiden.",tpl_title_check_for_leaks_under_sinks:"Auf Lecks unter Waschbecken pr\xFCfen",tpl_desc_check_for_leaks_under_sinks:"Pr\xFCfe unter allen Waschbecken auf Lecks, Tropfen oder Wassersch\xE4den.",tpl_title_flush_water_heater:"Warmwasserbereiter sp\xFClen",tpl_desc_flush_water_heater:"Entleere und sp\xFCle den Warmwasserbereiter, um Sedimentablagerungen zu entfernen.",tpl_title_clean_faucet_aerators:"Perlatoren reinigen",tpl_desc_clean_faucet_aerators:"Entferne und reinige Perlatoren, um den Wasserfluss wiederherzustellen und Kalk zu entfernen.",tpl_title_test_sump_pump:"Sumpfpumpe testen",tpl_desc_test_sump_pump:"Gie\xDFe Wasser in die Sumpfgrube, um zu pr\xFCfen, ob die Pumpe korrekt anspringt und abpumpt.",tpl_title_inspect_washing_machine_hoses:"Waschmaschinenschl\xE4uche pr\xFCfen",tpl_desc_inspect_washing_machine_hoses:"Pr\xFCfe Zulaufschl\xE4uche der Waschmaschine auf Ausbeulungen, Risse oder Lecks.",tpl_title_clean_garbage_disposal:"Speiserestezerkleinerer reinigen",tpl_desc_clean_garbage_disposal:"Reinige und desodorisiere den Speiserestezerkleinerer mit Eis und Zitrusschalen.",tpl_title_check_toilet_components:"Toilettenkomponenten pr\xFCfen",tpl_desc_check_toilet_components:"Pr\xFCfe Klappen, F\xFCllventile und Zuleitungen der Toilette auf Verschlei\xDF oder Lecks.",tpl_title_test_gfci_outlets:"FI-Steckdosen testen",tpl_desc_test_gfci_outlets:"Dr\xFCcke Test- und Reset-Taste an allen FI-Steckdosen, um die Ausl\xF6sung zu pr\xFCfen.",tpl_title_check_electrical_panel:"Sicherungskasten pr\xFCfen",tpl_desc_check_electrical_panel:"Pr\xFCfe den Sicherungskasten auf Korrosion, \xDCberhitzung oder lose Verbindungen.",tpl_title_replace_smoke_detector_batteries:"Batterien der Rauchmelder wechseln",tpl_desc_replace_smoke_detector_batteries:"Wechsle die Batterien in allen Rauchmeldern, auch wenn noch kein Signalton zu h\xF6ren war.",tpl_title_test_carbon_monoxide_detectors:"Kohlenmonoxidmelder testen",tpl_desc_test_carbon_monoxide_detectors:"Teste alle Kohlenmonoxidmelder, um die korrekte Funktion sicherzustellen.",tpl_title_inspect_extension_cords:"Verl\xE4ngerungskabel pr\xFCfen",tpl_desc_inspect_extension_cords:"Pr\xFCfe alle Verl\xE4ngerungskabel auf Ausfransungen, Sch\xE4den oder \xDCberlastung.",tpl_title_clean_gutters:"Regenrinnen reinigen",tpl_desc_clean_gutters:"Entferne Laub und Schmutz aus Rinnen und Fallrohren, um Wassersch\xE4den zu vermeiden.",tpl_title_inspect_roof:"Dach pr\xFCfen",tpl_desc_inspect_roof:"Pr\xFCfe das Dach auf fehlende, besch\xE4digte oder gew\xF6lbte Schindeln und auf Verschlei\xDF.",tpl_title_power_wash_siding:"Fassade mit Hochdruck reinigen",tpl_desc_power_wash_siding:"Reinige die Au\xDFenfassade mit Hochdruck, um Schmutz, Schimmel und Mehltau zu entfernen.",tpl_title_check_caulking_around_windows:"Dichtungen um Fenster pr\xFCfen",tpl_desc_check_caulking_around_windows:"Pr\xFCfe und erneuere besch\xE4digte Fugenmasse um Fenster und T\xFCrrahmen.",tpl_title_inspect_foundation:"Fundament pr\xFCfen",tpl_desc_inspect_foundation:"Gehe um das Fundament und achte auf Risse, Setzungen oder eindringendes Wasser.",tpl_title_clean_dryer_vent:"Trocknerabluft reinigen",tpl_desc_clean_dryer_vent:"Reinige den \xE4u\xDFeren Trocknerabluftkanal, um Flusenansammlungen und Brandgefahr zu vermeiden.",tpl_title_seal_driveway_cracks:"Risse in der Einfahrt versiegeln",tpl_desc_seal_driveway_cracks:"F\xFClle und versiegele Risse in der Einfahrt, um Wassersch\xE4den und weitere Verschlechterung zu verhindern.",tpl_title_deep_clean_carpets:"Teppiche gr\xFCndlich reinigen",tpl_desc_deep_clean_carpets:"Reinige alle Teppichfl\xE4chen mit Dampf oder Shampoo, um tief sitzenden Schmutz und Allergene zu entfernen.",tpl_title_clean_range_hood_filter:"Dunstabzugsfilter reinigen",tpl_desc_clean_range_hood_filter:"Entferne und reinige den Fettfilter der Dunstabzugshaube in hei\xDFem Seifenwasser.",tpl_title_recaulk_bathroom:"Bad neu verfugen",tpl_desc_recaulk_bathroom:"Entferne alte Fugenmasse und trage neue um Badewanne, Dusche und Waschbecken auf.",tpl_title_check_window_locks:"Fensterverriegelungen pr\xFCfen",tpl_desc_check_window_locks:"Teste alle Fensterverriegelungen und -riegel auf korrekte Funktion.",tpl_title_clean_drains:"Abfl\xFCsse reinigen",tpl_desc_clean_drains:"Beseitige langsame Abfl\xFCsse mit Spirale oder enzymbasiertem Reiniger.",tpl_title_lubricate_door_hinges:"T\xFCrscharniere schmieren",tpl_desc_lubricate_door_hinges:"Trage Schmiermittel auf alle T\xFCrscharniere auf, um Quietschen zu beseitigen und einen ruhigen Lauf zu sichern.",tpl_title_clean_dishwasher:"Geschirrsp\xFCler reinigen",tpl_desc_clean_dishwasher:"Lasse einen Leerzyklus mit Sp\xFClmaschinenreiniger laufen und wische die T\xFCrdichtung ab.",tpl_title_clean_washing_machine:"Waschmaschine reinigen",tpl_desc_clean_washing_machine:"F\xFChre einen Reinigungszyklus mit Waschmaschinenreiniger aus und wische die Dichtung ab.",tpl_title_clean_refrigerator_coils:"K\xFChlschrankspulen reinigen",tpl_desc_clean_refrigerator_coils:"Sauge oder b\xFCrste die Kondensatorspulen am K\xFChlschrank, um die Effizienz zu erhalten.",tpl_title_replace_water_filter:"Wasserfilter wechseln",tpl_desc_replace_water_filter:"Ersetze die Wasserfilterkartusche des K\xFChlschranks f\xFCr sauberes Trinkwasser.",tpl_title_clean_oven:"Backofen reinigen",tpl_desc_clean_oven:"Starte den Selbstreinigungszyklus oder reinige den Backofeninnenraum manuell.",tpl_title_defrost_freezer:"Gefrierfach abtauen",tpl_desc_defrost_freezer:"Taue das Gefrierfach ab, wenn die Eisbildung mehr als etwa 6 mm betr\xE4gt.",tpl_title_clean_dryer_lint_trap_deep:"Flusensieb gr\xFCndlich reinigen",tpl_desc_clean_dryer_lint_trap_deep:"Entferne das Flusensieb und sauge das Flusenfach aus, um den Luftstrom zu verbessern.",tpl_title_test_smoke_detectors:"Rauchmelder testen",tpl_desc_test_smoke_detectors:"Dr\xFCcke bei jedem Rauchmelder die Testtaste und ersetze defekte Ger\xE4te.",tpl_title_check_fire_extinguisher_pressure:"Feuerl\xF6scherdruck pr\xFCfen",tpl_desc_check_fire_extinguisher_pressure:"Stelle sicher, dass die Druckanzeige jedes Feuerl\xF6schers im gr\xFCnen Bereich ist.",tpl_title_review_emergency_plan:"Notfallplan \xFCberpr\xFCfen",tpl_desc_review_emergency_plan:"\xDCberpr\xFCfe und aktualisiere den Notfallplan des Haushalts mit allen Familienmitgliedern.",tpl_title_test_security_system:"Sicherheitssystem testen",tpl_desc_test_security_system:"F\xFChre einen vollst\xE4ndigen Test des Haussicherheitssystems inklusive aller Sensoren und Alarme durch.",tpl_title_check_first_aid_kit:"Erste-Hilfe-Kasten pr\xFCfen",tpl_desc_check_first_aid_kit:"Pr\xFCfe den Erste-Hilfe-Kasten und ersetze abgelaufene oder verbrauchte Materialien.",tpl_title_inspect_fire_escape_routes:"Fluchtwege pr\xFCfen",tpl_desc_inspect_fire_escape_routes:"Gehe alle Fluchtwege ab und stelle sicher, dass Ausg\xE4nge frei und zug\xE4nglich sind.",tpl_title_mow_lawn:"Rasen m\xE4hen",tpl_desc_mow_lawn:"M\xE4he den Rasen auf die f\xFCr die Grasart empfohlene H\xF6he.",tpl_title_fertilize_lawn:"Rasen d\xFCngen",tpl_desc_fertilize_lawn:"Bringe saisonalen D\xFCnger gem\xE4\xDF Produktanleitung auf dem Rasen aus.",tpl_title_sharpen_mower_blades:"Rasenm\xE4hermesser sch\xE4rfen",tpl_desc_sharpen_mower_blades:"Baue die Messer aus und sch\xE4rfe oder ersetze sie f\xFCr einen sauberen Schnitt.",tpl_title_prune_shrubs:"Str\xE4ucher schneiden",tpl_desc_prune_shrubs:"Schneide und forme Str\xE4ucher und Hecken, um Aussehen und Pflanzengesundheit zu erhalten.",tpl_title_aerate_lawn:"Rasen aerifizieren",tpl_desc_aerate_lawn:"Aerifiziere den Rasen, um Bodenverdichtung zu reduzieren und das Wurzelwachstum zu f\xF6rdern.",tpl_title_clean_outdoor_furniture:"Gartenm\xF6bel reinigen",tpl_desc_clean_outdoor_furniture:"Wasche und pflege Gartenm\xF6bel, um Schmutz, Schimmel und Wettersch\xE4den zu entfernen.",tpl_title_inspect_irrigation_system:"Bew\xE4sserungssystem pr\xFCfen",tpl_desc_inspect_irrigation_system:"Pr\xFCfe Sprinklerk\xF6pfe, Tropfleitungen und Timer auf korrekte Funktion.",tpl_title_winterize_outdoor_faucets:"Au\xDFenh\xE4hne winterfest machen",tpl_desc_winterize_outdoor_faucets:"Trenne Schl\xE4uche, entleere Au\xDFenh\xE4hne und montiere isolierende Abdeckungen.",tpl_title_service_snow_blower:"Schneefr\xE4se warten",tpl_desc_service_snow_blower:"Wechsle \xD6l, pr\xFCfe Riemen und teste die Schneefr\xE4se vor Winterbeginn.",tpl_title_reverse_ceiling_fan_direction:"Drehrichtung des Deckenventilators umstellen",tpl_desc_reverse_ceiling_fan_direction:"Passe die Drehrichtung des Deckenventilators an die aktuelle Jahreszeit an.",tpl_title_check_weather_stripping:"Zugluftdichtungen pr\xFCfen",tpl_desc_check_weather_stripping:"Pr\xFCfe und ersetze abgenutzte Dichtungen an T\xFCren und Fenstern.",tpl_title_store_or_retrieve_seasonal_items:"Saisonartikel ein- oder auslagern",tpl_desc_store_or_retrieve_seasonal_items:"Tausche saisonale Gegenst\xE4nde beim Jahreszeitenwechsel in Lagerung ein oder aus.",tpl_title_test_outdoor_lighting:"Au\xDFenbeleuchtung testen",tpl_desc_test_outdoor_lighting:"Pr\xFCfe alle Au\xDFenleuchten, tausche Leuchtmittel und reinige Leuchten.",tpl_title_inspect_attic_insulation:"Dachd\xE4mmung pr\xFCfen",tpl_desc_inspect_attic_insulation:"Pr\xFCfe die D\xE4mmung im Dachboden vor dem Winter auf Setzungen, Feuchtigkeit oder Sch\xE4dlingssch\xE4den.",tpl_title_clean_window_screens:"Fliegengitter reinigen",tpl_desc_clean_window_screens:"Entferne Fliegengitter, reinige sie mit Seifenwasser und montiere sie wieder.",tpl_title_lubricate_garage_door:"Garagentor schmieren",tpl_desc_lubricate_garage_door:"Trage Schmiermittel auf Schienen, Rollen, Scharniere und Federn des Garagentors auf.",tpl_title_test_garage_door_auto_reverse:"Auto-Reverse am Garagentor testen",tpl_desc_test_garage_door_auto_reverse:"Lege ein Objekt unter das Garagentor und pr\xFCfe, ob es beim Schlie\xDFen umkehrt.",tpl_title_check_garage_door_weather_seal:"Garagentor-Dichtung pr\xFCfen",tpl_desc_check_garage_door_weather_seal:"Pr\xFCfe die untere Dichtung und seitlichen Abdichtungen des Garagentors.",tpl_title_organize_garage_storage:"Garagenlager organisieren",tpl_desc_organize_garage_storage:"Entr\xFCmple die Garage, pr\xFCfe Chemikalien auf Ablaufdatum und ordne die Lagerung neu.",tpl_title_check_vehicle_tire_pressure:"Reifendruck pr\xFCfen",tpl_desc_check_vehicle_tire_pressure:"Pr\xFCfe und korrigiere den Reifendruck aller Fahrzeuge auf den empfohlenen PSI-Wert.",tpl_title_rotate_vehicle_tires:"Reifen rotieren",tpl_desc_rotate_vehicle_tires:"Tausche die Reifenpositionen, um gleichm\xE4\xDFigen Verschlei\xDF und l\xE4ngere Lebensdauer zu erreichen.",tpl_title_change_engine_oil:"Motor\xF6l wechseln",tpl_desc_change_engine_oil:"Wechsle Motor\xF6l und \xD6lfilter gem\xE4\xDF Herstellerangaben.",tpl_title_replace_windshield_wipers:"Scheibenwischer wechseln",tpl_desc_replace_windshield_wipers:"Ersetze Wischerbl\xE4tter bei Schlierenbildung oder Rattern.",tpl_title_test_pool_water_chemistry:"Poolwasserchemie testen",tpl_desc_test_pool_water_chemistry:"Teste pH-Wert, Chlor, Alkalinit\xE4t und Calciumh\xE4rte des Poolwassers.",tpl_title_clean_pool_filter:"Poolfilter reinigen",tpl_desc_clean_pool_filter:"Sp\xFCle die Filterpatrone des Pools r\xFCckw\xE4rts oder reinige sie, um eine ordnungsgem\xE4\xDFe Filterung zu gew\xE4hrleisten.",tpl_title_skim_and_vacuum_pool:"Pool abkeschern und saugen",tpl_desc_skim_and_vacuum_pool:"Entferne Schmutz von der Oberfl\xE4che und sauge den Poolboden.",tpl_title_inspect_pool_pump_and_motor:"Poolpumpe und Motor pr\xFCfen",tpl_desc_inspect_pool_pump_and_motor:"Pr\xFCfe die Poolpumpe auf Lecks, ungew\xF6hnliche Ger\xE4usche und korrekte Druckwerte.",tpl_title_shock_treat_pool:"Pool schockchloren",tpl_desc_shock_treat_pool:"Gib eine Schockbehandlung ins Poolwasser, um Bakterien zu beseitigen und die Wasserklarheit wiederherzustellen.",tpl_title_clean_spa_filter:"Spa-Filter reinigen",tpl_desc_clean_spa_filter:"Entferne, sp\xFCle und reinige die Filterkartusche des Whirlpools oder Spas gr\xFCndlich.",tpl_title_drain_and_refill_spa:"Spa entleeren und neu bef\xFCllen",tpl_desc_drain_and_refill_spa:"Entleere den Whirlpool vollst\xE4ndig, reinige die Wanne und f\xFClle mit frischem Wasser.",tpl_title_inspect_for_termites:"Auf Termiten pr\xFCfen",tpl_desc_inspect_for_termites:"Pr\xFCfe Fundament, Holzkonstruktionen und Kriechkeller auf Anzeichen von Termitenbefall.",tpl_title_refresh_ant_and_roach_bait_stations:"Ameisen- und Kakerlakenk\xF6der erneuern",tpl_desc_refresh_ant_and_roach_bait_stations:"Ersetze K\xF6derstationen innen und au\xDFen mit frischem K\xF6der.",tpl_title_seal_entry_points:"Eintrittsstellen abdichten",tpl_desc_seal_entry_points:"Pr\xFCfe und verschlie\xDFe Spalten an Rohren, L\xFCftungen und Fundament, durch die Sch\xE4dlinge eindringen k\xF6nnen.",tpl_title_check_attic_for_rodents:"Dachboden auf Nagetiere pr\xFCfen",tpl_desc_check_attic_for_rodents:"Pr\xFCfe den Dachboden auf Kot, Nistmaterial oder angenagte Kabel durch Nagetiere.",tpl_title_clean_bird_feeders:"Vogelfutterspender reinigen",tpl_desc_clean_bird_feeders:"Zerlege und schrubbe Vogelfutterspender, um Schimmel und Krankheits\xFCbertragung zu verhindern.",tpl_title_replace_whole_house_water_filter:"Hauptwasserfilter wechseln",tpl_desc_replace_whole_house_water_filter:"Ersetze Sediment- und Aktivkohlefilterkartuschen im zentralen Wasserfiltersystem.",tpl_title_add_salt_to_water_softener:"Salz in Enth\xE4rtungsanlage nachf\xFCllen",tpl_desc_add_salt_to_water_softener:"Pr\xFCfe den Salzstand im Solebeh\xE4lter der Wasserenth\xE4rtungsanlage und f\xFClle bei Bedarf nach.",tpl_title_clean_water_softener_brine_tank:"Solebeh\xE4lter reinigen",tpl_desc_clean_water_softener_brine_tank:"Entleere, schrubbe und bef\xFClle den Solebeh\xE4lter neu, um Salzbr\xFCcken und Ablagerungen zu entfernen.",tpl_title_replace_reverse_osmosis_filters:"Umkehrosmosefilter wechseln",tpl_desc_replace_reverse_osmosis_filters:"Ersetze Vorfilter, Nachfilter und Membran des Umkehrosmose-Trinkwassersystems.",tpl_title_test_well_water_quality:"Brunnenwasserqualit\xE4t testen",tpl_desc_test_well_water_quality:"Sende eine Wasserprobe ins Labor zur Pr\xFCfung auf Bakterien, Nitrate und Mineralien.",tpl_title_schedule_chimney_sweep:"Schornsteinreinigung planen",tpl_desc_schedule_chimney_sweep:"Beauftrage einen Fachbetrieb, den Schornsteinzug zu reinigen und Kreosotablagerungen zu entfernen.",tpl_title_inspect_chimney_cap_and_flashing:"Schornsteinhaube und Anschlussbleche pr\xFCfen",tpl_desc_inspect_chimney_cap_and_flashing:"Pr\xFCfe die Schornsteinhaube auf Sch\xE4den und die Anschlussbleche auf Spalten oder Rost.",tpl_title_clean_fireplace_firebox:"Feuerraum reinigen",tpl_desc_clean_fireplace_firebox:"Entferne Ascheablagerungen aus dem Feuerraum und pr\xFCfe Schamottsteine auf Risse.",tpl_title_check_fireplace_damper:"Kaminzugklappe pr\xFCfen",tpl_desc_check_fireplace_damper:"\xD6ffne und schlie\xDFe die Zugklappe, um sicherzustellen, dass sie leichtg\xE4ngig ist und korrekt abdichtet.",tpl_title_pump_septic_tank:"Kl\xE4rgrube abpumpen",tpl_desc_pump_septic_tank:"Plane das fachgerechte Abpumpen der Kl\xE4rgrube, um \xDCberlauf und Sch\xE4den am Versickerungsfeld zu vermeiden.",tpl_title_inspect_septic_drain_field:"Versickerungsfeld pr\xFCfen",tpl_desc_inspect_septic_drain_field:"Gehe das Versickerungsfeld ab und achte auf nasse Stellen, Ger\xFCche oder auff\xE4llig gr\xFCnes Gras.",tpl_title_add_septic_treatment:"Biologische Kl\xE4rgrubenpflege hinzuf\xFCgen",tpl_desc_add_septic_treatment:"F\xFCge eine enzymbasierte Pflege hinzu, um gesunde Bakterienwerte in der Kl\xE4rgrube zu erhalten.",tpl_title_touch_up_interior_paint:"Innenanstrich ausbessern",tpl_desc_touch_up_interior_paint:"Pr\xFCfe W\xE4nde auf Abrieb, Nagell\xF6cher und Abplatzer und bessere sie mit passender Farbe aus.",tpl_title_inspect_exterior_paint:"Au\xDFenanstrich pr\xFCfen",tpl_desc_inspect_exterior_paint:"Pr\xFCfe den Au\xDFenanstrich auf Abbl\xE4ttern, Risse oder Ausbleichen und plane bei Bedarf einen neuen Anstrich.",tpl_title_refinish_deck_or_porch:"Terrasse oder Veranda aufarbeiten",tpl_desc_refinish_deck_or_porch:"Schleife, beize oder versiegele Terrasse bzw. Veranda, um das Holz vor Witterung zu sch\xFCtzen.",tpl_title_seal_grout_lines:"Fugen versiegeln",tpl_desc_seal_grout_lines:"Trage Fugenversiegelung auf Fliesenb\xF6den, K\xFCchenr\xFCckwand und Duschbereiche auf, um Flecken zu verhindern."},St={config:wt,options:xt,panel:$t};var we={};ce(we,{config:()=>Tt,default:()=>zt,options:()=>At,panel:()=>Ct});var Tt={step:{user:{title:"Home Maintenance Pro",description:"Configurez l'int\xE9gration Home Maintenance Pro pour suivre les t\xE2ches d'entretien r\xE9currentes."}},abort:{single_instance_allowed:"Une seule instance est autoris\xE9e."}},At={step:{init:{title:"Options de Home Maintenance Pro",data:{admin_only:"Administrateurs uniquement",sidebar_title:"Titre dans la barre lat\xE9rale",max_completion_history:"Historique d'ach\xE8vement maximal par t\xE2che"},data_description:{admin_only:"Restreindre l'acc\xE8s au panneau aux administrateurs uniquement.",sidebar_title:"Titre affich\xE9 dans la barre lat\xE9rale.",max_completion_history:"Les entr\xE9es les plus anciennes sont supprim\xE9es lorsque l'historique d'ach\xE8vement d'une t\xE2che d\xE9passe ce nombre. Mettre 0 pour aucune limite."}}}},Ct={panel_title:"Home Maintenance Pro",tasks:"T\xE2ches",add_task:"Ajouter une t\xE2che",browse_templates:"Parcourir les mod\xE8les",create_task:"Cr\xE9er une t\xE2che",edit_task:"Modifier la t\xE2che",choose_template:"Choisir un mod\xE8le",create_from_scratch:"Cr\xE9er \xE0 partir de z\xE9ro",title:"Titre",description:"Description",interval:"Intervalle",interval_value:"Valeur de l'intervalle",interval_type:"Type d'intervalle",every:"Tous les",every_days_one:"Tous les jours",every_days_other:"Tous les {count} jours",every_weeks_one:"Toutes les semaines",every_weeks_other:"Toutes les {count} semaines",every_months_one:"Tous les mois",every_months_other:"Tous les {count} mois",last_performed:"Derni\xE8re ex\xE9cution",next_due:"Prochaine \xE9ch\xE9ance",status:"Statut",actions:"Actions",save:"Enregistrer",cancel:"Annuler",delete:"Supprimer",complete:"Terminer",edit:"Modifier",days:"Jours",weeks:"Semaines",months:"Mois",overdue:"En retard",due_soon:"\xC0 venir",ok:"OK",out_of_season:"Hors saison",never:"Jamais",active_months:"Mois actifs",active_months_hint:"S\xE9lectionnez les mois pendant lesquels cette t\xE2che est de saison. En dehors de ces mois, elle n'appara\xEEtra ni comme \xE0 venir ni comme en retard. Laissez vide pour un fonctionnement toute l'ann\xE9e.",month_1:"Jan",month_2:"F\xE9v",month_3:"Mar",month_4:"Avr",month_5:"Mai",month_6:"Juin",month_7:"Juil",month_8:"Ao\xFBt",month_9:"Sep",month_10:"Oct",month_11:"Nov",month_12:"D\xE9c",advanced_settings:"Param\xE8tres avanc\xE9s",tag:"Tag NFC",icon:"Ic\xF4ne",labels:"\xC9tiquettes",search_tasks:"Rechercher des t\xE2ches...",all_labels:"Toutes les \xE9tiquettes",search_templates:"Rechercher des mod\xE8les...",no_tasks:"Aucune t\xE2che d'entretien pour le moment. Ajoutez une t\xE2che ou parcourez les mod\xE8les pour commencer.",confirm_delete:"\xCAtes-vous s\xFBr de vouloir supprimer cette t\xE2che ?",task_saved:"T\xE2che enregistr\xE9e avec succ\xE8s.",task_deleted:"T\xE2che supprim\xE9e.",task_completed:"T\xE2che marqu\xE9e comme termin\xE9e.",required_field:"Ce champ est obligatoire.",today:"Aujourd'hui",import_csv:"Importer un CSV",import_csv_info:"T\xE9l\xE9versez un fichier CSV avec les colonnes suivantes (le titre est obligatoire, les autres sont facultatives) :",import:"Importer",done:"Termin\xE9",no_results:"Aucun mod\xE8le ne correspond \xE0 votre recherche.",notify_when_overdue:"Notifier en cas de retard",export_csv:"Exporter en CSV",sort_by:"Trier par",clear:"Effacer",track_history:"Suivre l'historique des ex\xE9cutions",completion_history:"Historique des ex\xE9cutions",no_history:"Aucun historique d'ex\xE9cution pour le moment.",loading:"Chargement...",importing:"Importation en cours...",none_option:"Aucun",add_custom_label_placeholder:"Ajouter une \xE9tiquette personnalis\xE9e, appuyez sur Entr\xE9e",custom_label_hint:"Les \xE9tiquettes personnalis\xE9es sont propres \xE0 cette int\xE9gration. Pour utiliser une \xE9tiquette dans l'ensemble de Home Assistant (avec couleurs, ic\xF4nes et filtrage), cr\xE9ez-la d'abord dans Param\xE8tres \u2192 \xC9tiquettes.",category_hvac:"CVC",category_plumbing:"Plomberie",category_electrical:"\xC9lectricit\xE9",category_exterior:"Ext\xE9rieur",category_interior:"Int\xE9rieur",category_appliances:"\xC9lectrom\xE9nager",category_safety:"S\xE9curit\xE9",category_lawn_garden:"Pelouse et jardin",category_seasonal:"Saisonnier",category_garage_vehicles:"Garage et v\xE9hicules",category_pool_spa:"Piscine et spa",category_pest_control:"Contr\xF4le des nuisibles",category_water_treatment:"Traitement de l'eau",category_fireplace_chimney:"Chemin\xE9e et conduit",category_septic_system:"Fosse septique",category_painting_finishes:"Peinture et finitions",tpl_title_change_hvac_filter:"Changer le filtre CVC",tpl_desc_change_hvac_filter:"Remplacer le filtre \xE0 air du syst\xE8me CVC pour pr\xE9server la qualit\xE9 de l'air et l'efficacit\xE9 du syst\xE8me.",tpl_title_clean_air_vents:"Nettoyer les bouches d'a\xE9ration",tpl_desc_clean_air_vents:"Retirer la poussi\xE8re et les d\xE9bris des bouches et grilles d'a\xE9ration dans toute la maison.",tpl_title_inspect_ductwork:"Inspecter les conduits",tpl_desc_inspect_ductwork:"V\xE9rifier les conduits pour d\xE9tecter les fuites, les dommages ou les sections d\xE9solidaris\xE9es.",tpl_title_service_ac_unit:"Entretenir le climatiseur",tpl_desc_service_ac_unit:"Planifier un entretien professionnel du climatiseur, incluant le contr\xF4le du r\xE9frig\xE9rant.",tpl_title_check_thermostat_calibration:"V\xE9rifier l'\xE9talonnage du thermostat",tpl_desc_check_thermostat_calibration:"V\xE9rifier que le thermostat affiche la bonne temp\xE9rature et l'ajuster si n\xE9cessaire.",tpl_title_bleed_radiators:"Purger les radiateurs",tpl_desc_bleed_radiators:"\xC9vacuer l'air emprisonn\xE9 dans les radiateurs pour am\xE9liorer l'efficacit\xE9 du chauffage.",tpl_title_clean_condensate_drain_line:"Nettoyer la conduite d'\xE9vacuation des condensats",tpl_desc_clean_condensate_drain_line:"Rincer la conduite d'\xE9vacuation des condensats du climatiseur avec du vinaigre pour \xE9viter les bouchons.",tpl_title_check_for_leaks_under_sinks:"V\xE9rifier les fuites sous les \xE9viers",tpl_desc_check_for_leaks_under_sinks:"Inspecter sous tous les \xE9viers pour d\xE9tecter les fuites, les gouttes ou les d\xE9g\xE2ts des eaux.",tpl_title_flush_water_heater:"Purger le chauffe-eau",tpl_desc_flush_water_heater:"Vidanger et purger le chauffe-eau pour \xE9liminer les s\xE9diments accumul\xE9s.",tpl_title_clean_faucet_aerators:"Nettoyer les mousseurs de robinet",tpl_desc_clean_faucet_aerators:"Retirer et nettoyer les mousseurs de robinet pour r\xE9tablir le d\xE9bit d'eau et \xE9liminer les d\xE9p\xF4ts min\xE9raux.",tpl_title_test_sump_pump:"Tester la pompe de puisard",tpl_desc_test_sump_pump:"Verser de l'eau dans le puisard pour v\xE9rifier que la pompe s'active et \xE9vacue correctement.",tpl_title_inspect_washing_machine_hoses:"Inspecter les tuyaux du lave-linge",tpl_desc_inspect_washing_machine_hoses:"V\xE9rifier les tuyaux d'alimentation du lave-linge pour d\xE9tecter les renflements, les fissures ou les fuites.",tpl_title_clean_garbage_disposal:"Nettoyer le broyeur d'\xE9vier",tpl_desc_clean_garbage_disposal:"Nettoyer et d\xE9sodoriser le broyeur d'\xE9vier avec des gla\xE7ons et des \xE9corces d'agrumes.",tpl_title_check_toilet_components:"V\xE9rifier les composants des toilettes",tpl_desc_check_toilet_components:"Inspecter les clapets, les robinets flotteurs et les flexibles d'alimentation des toilettes pour d\xE9tecter usure ou fuites.",tpl_title_test_gfci_outlets:"Tester les prises diff\xE9rentielles (DDFT)",tpl_desc_test_gfci_outlets:"Appuyer sur les boutons test et reset de toutes les prises diff\xE9rentielles pour v\xE9rifier qu'elles se d\xE9clenchent correctement.",tpl_title_check_electrical_panel:"V\xE9rifier le tableau \xE9lectrique",tpl_desc_check_electrical_panel:"Inspecter le tableau \xE9lectrique pour d\xE9tecter la corrosion, la surchauffe ou les connexions desserr\xE9es.",tpl_title_replace_smoke_detector_batteries:"Remplacer les piles des d\xE9tecteurs de fum\xE9e",tpl_desc_replace_smoke_detector_batteries:"Remplacer les piles de tous les d\xE9tecteurs de fum\xE9e m\xEAme s'ils n'ont pas encore bip\xE9.",tpl_title_test_carbon_monoxide_detectors:"Tester les d\xE9tecteurs de monoxyde de carbone",tpl_desc_test_carbon_monoxide_detectors:"Tester tous les d\xE9tecteurs de monoxyde de carbone pour confirmer leur bon fonctionnement.",tpl_title_inspect_extension_cords:"Inspecter les rallonges \xE9lectriques",tpl_desc_inspect_extension_cords:"V\xE9rifier toutes les rallonges \xE9lectriques pour d\xE9tecter l'effilochage, les dommages ou la surcharge.",tpl_title_clean_gutters:"Nettoyer les goutti\xE8res",tpl_desc_clean_gutters:"Retirer les feuilles et d\xE9bris des goutti\xE8res et des descentes pluviales pour \xE9viter les d\xE9g\xE2ts des eaux.",tpl_title_inspect_roof:"Inspecter la toiture",tpl_desc_inspect_roof:"V\xE9rifier la toiture pour d\xE9tecter des bardeaux manquants, endommag\xE9s ou recourb\xE9s, et les signes d'usure.",tpl_title_power_wash_siding:"Nettoyer le bardage au nettoyeur haute pression",tpl_desc_power_wash_siding:"Nettoyer le bardage ext\xE9rieur au nettoyeur haute pression pour \xE9liminer la salet\xE9, la moisissure et le mildiou.",tpl_title_check_caulking_around_windows:"V\xE9rifier le calfeutrage des fen\xEAtres",tpl_desc_check_caulking_around_windows:"Inspecter et remplacer le calfeutrage d\xE9t\xE9rior\xE9 autour des fen\xEAtres et des encadrements de porte.",tpl_title_inspect_foundation:"Inspecter les fondations",tpl_desc_inspect_foundation:"Faire le tour des fondations \xE0 la recherche de fissures, de tassements ou d'infiltrations d'eau.",tpl_title_clean_dryer_vent:"Nettoyer la gaine d'\xE9vacuation du s\xE8che-linge",tpl_desc_clean_dryer_vent:"Nettoyer la gaine d'\xE9vacuation ext\xE9rieure du s\xE8che-linge pour \xE9viter l'accumulation de peluches et les risques d'incendie.",tpl_title_seal_driveway_cracks:"Sceller les fissures de l'all\xE9e",tpl_desc_seal_driveway_cracks:"Remplir et sceller les fissures de l'all\xE9e pour \xE9viter les d\xE9g\xE2ts des eaux et une d\xE9t\xE9rioration suppl\xE9mentaire.",tpl_title_deep_clean_carpets:"Nettoyer les tapis en profondeur",tpl_desc_deep_clean_carpets:"Nettoyer \xE0 la vapeur ou shampouiner toutes les zones moquett\xE9es pour \xE9liminer la salet\xE9 incrust\xE9e et les allerg\xE8nes.",tpl_title_clean_range_hood_filter:"Nettoyer le filtre de la hotte",tpl_desc_clean_range_hood_filter:"Retirer et nettoyer le filtre \xE0 graisse de la hotte dans de l'eau chaude savonneuse.",tpl_title_recaulk_bathroom:"Refaire le joint de la salle de bain",tpl_desc_recaulk_bathroom:"Retirer l'ancien joint et en appliquer un nouveau autour de la baignoire, de la douche et de l'\xE9vier.",tpl_title_check_window_locks:"V\xE9rifier les verrous de fen\xEAtre",tpl_desc_check_window_locks:"Tester tous les verrous et loquets de fen\xEAtre pour s'assurer qu'ils s'enclenchent correctement.",tpl_title_clean_drains:"Nettoyer les canalisations",tpl_desc_clean_drains:"D\xE9boucher les canalisations lentes avec un furet ou un nettoyant enzymatique.",tpl_title_lubricate_door_hinges:"Lubrifier les gonds de porte",tpl_desc_lubricate_door_hinges:"Appliquer du lubrifiant sur tous les gonds de porte pour supprimer les grincements et assurer un fonctionnement fluide.",tpl_title_clean_dishwasher:"Nettoyer le lave-vaisselle",tpl_desc_clean_dishwasher:"Faire tourner un cycle \xE0 vide avec un nettoyant pour lave-vaisselle et essuyer le joint de la porte.",tpl_title_clean_washing_machine:"Nettoyer le lave-linge",tpl_desc_clean_washing_machine:"Faire tourner un cycle de nettoyage avec un nettoyant pour lave-linge et essuyer le joint.",tpl_title_clean_refrigerator_coils:"Nettoyer les serpentins du r\xE9frig\xE9rateur",tpl_desc_clean_refrigerator_coils:"Aspirer ou brosser les serpentins du condenseur du r\xE9frig\xE9rateur pour maintenir son efficacit\xE9.",tpl_title_replace_water_filter:"Remplacer le filtre \xE0 eau",tpl_desc_replace_water_filter:"Remplacer la cartouche du filtre \xE0 eau du r\xE9frig\xE9rateur pour une eau potable propre.",tpl_title_clean_oven:"Nettoyer le four",tpl_desc_clean_oven:"Lancer le cycle d'autonettoyage ou nettoyer manuellement l'int\xE9rieur du four.",tpl_title_defrost_freezer:"D\xE9givrer le cong\xE9lateur",tpl_desc_defrost_freezer:"D\xE9givrer le cong\xE9lateur si l'accumulation de givre d\xE9passe un centim\xE8tre.",tpl_title_clean_dryer_lint_trap_deep:"Nettoyer en profondeur le filtre \xE0 peluches du s\xE8che-linge",tpl_desc_clean_dryer_lint_trap_deep:"Retirer le tamis \xE0 peluches et aspirer son logement pour am\xE9liorer la circulation de l'air.",tpl_title_test_smoke_detectors:"Tester les d\xE9tecteurs de fum\xE9e",tpl_desc_test_smoke_detectors:"Appuyer sur le bouton test de chaque d\xE9tecteur de fum\xE9e et remplacer ceux qui sont d\xE9faillants.",tpl_title_check_fire_extinguisher_pressure:"V\xE9rifier la pression des extincteurs",tpl_desc_check_fire_extinguisher_pressure:"V\xE9rifier que le manom\xE8tre de chaque extincteur est dans la zone verte.",tpl_title_review_emergency_plan:"Revoir le plan d'urgence",tpl_desc_review_emergency_plan:"Revoir et mettre \xE0 jour le plan d'urgence familial avec tous les membres du foyer.",tpl_title_test_security_system:"Tester le syst\xE8me de s\xE9curit\xE9",tpl_desc_test_security_system:"Effectuer un test complet du syst\xE8me de s\xE9curit\xE9, y compris tous les capteurs et alarmes.",tpl_title_check_first_aid_kit:"V\xE9rifier la trousse de premiers secours",tpl_desc_check_first_aid_kit:"Inspecter la trousse de premiers secours et remplacer les fournitures expir\xE9es ou utilis\xE9es.",tpl_title_inspect_fire_escape_routes:"Inspecter les issues de secours",tpl_desc_inspect_fire_escape_routes:"Parcourir toutes les issues de secours et s'assurer que les sorties sont d\xE9gag\xE9es et accessibles.",tpl_title_mow_lawn:"Tondre la pelouse",tpl_desc_mow_lawn:"Tondre la pelouse \xE0 la hauteur recommand\xE9e selon le type de gazon.",tpl_title_fertilize_lawn:"Fertiliser la pelouse",tpl_desc_fertilize_lawn:"Appliquer un engrais de saison sur la pelouse en suivant les instructions du produit.",tpl_title_sharpen_mower_blades:"Aff\xFBter les lames de la tondeuse",tpl_desc_sharpen_mower_blades:"Retirer et aff\xFBter ou remplacer les lames de la tondeuse pour une coupe nette.",tpl_title_prune_shrubs:"Tailler les arbustes",tpl_desc_prune_shrubs:"Tailler et fa\xE7onner les arbustes et haies pour pr\xE9server leur apparence et leur sant\xE9.",tpl_title_aerate_lawn:"A\xE9rer la pelouse",tpl_desc_aerate_lawn:"A\xE9rer la pelouse pour r\xE9duire le compactage du sol et favoriser la croissance des racines.",tpl_title_clean_outdoor_furniture:"Nettoyer le mobilier ext\xE9rieur",tpl_desc_clean_outdoor_furniture:"Laver et traiter le mobilier ext\xE9rieur pour \xE9liminer salet\xE9, moisissure et dommages li\xE9s aux intemp\xE9ries.",tpl_title_inspect_irrigation_system:"Inspecter le syst\xE8me d'irrigation",tpl_desc_inspect_irrigation_system:"V\xE9rifier les t\xEAtes d'arrosage, les tuyaux goutte-\xE0-goutte et les programmateurs pour un bon fonctionnement.",tpl_title_winterize_outdoor_faucets:"Hivernage des robinets ext\xE9rieurs",tpl_desc_winterize_outdoor_faucets:"D\xE9brancher les tuyaux, vidanger les robinets ext\xE9rieurs et installer des housses isolantes.",tpl_title_service_snow_blower:"Entretenir la souffleuse \xE0 neige",tpl_desc_service_snow_blower:"Vidanger l'huile, v\xE9rifier les courroies et tester la souffleuse \xE0 neige avant l'arriv\xE9e de l'hiver.",tpl_title_reverse_ceiling_fan_direction:"Inverser le sens du ventilateur de plafond",tpl_desc_reverse_ceiling_fan_direction:"Inverser le sens de rotation du ventilateur de plafond selon la saison.",tpl_title_check_weather_stripping:"V\xE9rifier les joints d'\xE9tanch\xE9it\xE9",tpl_desc_check_weather_stripping:"Inspecter et remplacer les joints d'\xE9tanch\xE9it\xE9 us\xE9s autour des portes et fen\xEAtres.",tpl_title_store_or_retrieve_seasonal_items:"Ranger ou sortir les objets saisonniers",tpl_desc_store_or_retrieve_seasonal_items:"Faire la rotation des objets saisonniers vers ou depuis le stockage selon le changement de saison.",tpl_title_test_outdoor_lighting:"Tester l'\xE9clairage ext\xE9rieur",tpl_desc_test_outdoor_lighting:"V\xE9rifier tous les luminaires ext\xE9rieurs, remplacer les ampoules et nettoyer les luminaires.",tpl_title_inspect_attic_insulation:"Inspecter l'isolation des combles",tpl_desc_inspect_attic_insulation:"V\xE9rifier l'isolation des combles pour d\xE9tecter le tassement, l'humidit\xE9 ou les dommages caus\xE9s par des nuisibles avant l'hiver.",tpl_title_clean_window_screens:"Nettoyer les moustiquaires",tpl_desc_clean_window_screens:"Retirer les moustiquaires, les laver \xE0 l'eau savonneuse et les r\xE9installer.",tpl_title_lubricate_garage_door:"Lubrifier la porte de garage",tpl_desc_lubricate_garage_door:"Appliquer du lubrifiant sur les rails, les galets, les gonds et les ressorts de la porte de garage.",tpl_title_test_garage_door_auto_reverse:"Tester l'inversion automatique de la porte de garage",tpl_desc_test_garage_door_auto_reverse:"Placer un objet sous la porte de garage et v\xE9rifier qu'elle remonte lors de la fermeture.",tpl_title_check_garage_door_weather_seal:"V\xE9rifier le joint d'\xE9tanch\xE9it\xE9 de la porte de garage",tpl_desc_check_garage_door_weather_seal:"Inspecter le joint bas et les joints lat\xE9raux de la porte de garage.",tpl_title_organize_garage_storage:"Organiser le rangement du garage",tpl_desc_organize_garage_storage:"D\xE9sencombrer le garage, v\xE9rifier les produits chimiques p\xE9rim\xE9s et r\xE9organiser le rangement.",tpl_title_check_vehicle_tire_pressure:"V\xE9rifier la pression des pneus des v\xE9hicules",tpl_desc_check_vehicle_tire_pressure:"V\xE9rifier et ajuster la pression des pneus de tous les v\xE9hicules selon la pression recommand\xE9e.",tpl_title_rotate_vehicle_tires:"Permuter les pneus des v\xE9hicules",tpl_desc_rotate_vehicle_tires:"Permuter les pneus pour assurer une usure uniforme et prolonger leur dur\xE9e de vie.",tpl_title_change_engine_oil:"Changer l'huile moteur",tpl_desc_change_engine_oil:"Changer l'huile moteur et le filtre \xE0 huile selon les recommandations du fabricant.",tpl_title_replace_windshield_wipers:"Remplacer les essuie-glaces",tpl_desc_replace_windshield_wipers:"Remplacer les balais d'essuie-glace en cas de traces ou de saccades.",tpl_title_test_pool_water_chemistry:"Tester l'\xE9quilibre chimique de l'eau de la piscine",tpl_desc_test_pool_water_chemistry:"Tester le pH, le chlore et la duret\xE9 de l'eau de la piscine.",tpl_title_clean_pool_filter:"Nettoyer le filtre de la piscine",tpl_desc_clean_pool_filter:"Effectuer un contre-lavage ou nettoyer la cartouche du filtre de la piscine pour maintenir une bonne filtration.",tpl_title_skim_and_vacuum_pool:"\xC9cumer et passer l'aspirateur dans la piscine",tpl_desc_skim_and_vacuum_pool:"\xC9cumer les d\xE9bris \xE0 la surface et passer l'aspirateur sur le fond de la piscine.",tpl_title_inspect_pool_pump_and_motor:"Inspecter la pompe et le moteur de la piscine",tpl_desc_inspect_pool_pump_and_motor:"V\xE9rifier la pompe de la piscine pour d\xE9tecter les fuites, les bruits anormaux et contr\xF4ler la pression.",tpl_title_shock_treat_pool:"Traiter la piscine au choc chlor\xE9",tpl_desc_shock_treat_pool:"Ajouter un traitement choc \xE0 la piscine pour \xE9liminer les bact\xE9ries et restaurer la clart\xE9 de l'eau.",tpl_title_clean_spa_filter:"Nettoyer le filtre du spa",tpl_desc_clean_spa_filter:"Retirer, rincer et nettoyer en profondeur la cartouche filtrante du spa ou du jacuzzi.",tpl_title_drain_and_refill_spa:"Vidanger et remplir le spa",tpl_desc_drain_and_refill_spa:"Vidanger compl\xE8tement le spa, nettoyer la cuve et la remplir d'eau fra\xEEche.",tpl_title_inspect_for_termites:"Inspecter la pr\xE9sence de termites",tpl_desc_inspect_for_termites:"V\xE9rifier les fondations, structures en bois et vides sanitaires pour d\xE9tecter des signes d'activit\xE9 de termites.",tpl_title_refresh_ant_and_roach_bait_stations:"Renouveler les app\xE2ts contre fourmis et cafards",tpl_desc_refresh_ant_and_roach_bait_stations:"Remplacer les stations d'app\xE2t int\xE9rieures et ext\xE9rieures contre les nuisibles par un app\xE2t frais.",tpl_title_seal_entry_points:"Sceller les points d'entr\xE9e",tpl_desc_seal_entry_points:"Inspecter et sceller les ouvertures autour des tuyaux, gaines et fondations par o\xF9 les nuisibles peuvent entrer.",tpl_title_check_attic_for_rodents:"V\xE9rifier la pr\xE9sence de rongeurs dans les combles",tpl_desc_check_attic_for_rodents:"Inspecter les combles pour d\xE9tecter excr\xE9ments, mat\xE9riaux de nidification ou c\xE2blage rong\xE9 par des rongeurs.",tpl_title_clean_bird_feeders:"Nettoyer les mangeoires \xE0 oiseaux",tpl_desc_clean_bird_feeders:"D\xE9monter et r\xE9curer les mangeoires \xE0 oiseaux pour \xE9viter la propagation de moisissures et de maladies.",tpl_title_replace_whole_house_water_filter:"Remplacer le filtre \xE0 eau de la maison",tpl_desc_replace_whole_house_water_filter:"Remplacer les cartouches s\xE9diment et charbon du syst\xE8me de filtration d'eau de la maison.",tpl_title_add_salt_to_water_softener:"Ajouter du sel \xE0 l'adoucisseur d'eau",tpl_desc_add_salt_to_water_softener:"V\xE9rifier et remplir en sel le bac \xE0 saumure de l'adoucisseur d'eau.",tpl_title_clean_water_softener_brine_tank:"Nettoyer le bac \xE0 saumure de l'adoucisseur",tpl_desc_clean_water_softener_brine_tank:"Vider, r\xE9curer et remplir le bac \xE0 saumure pour \xE9liminer les ponts de sel et les s\xE9diments.",tpl_title_replace_reverse_osmosis_filters:"Remplacer les filtres \xE0 osmose inverse",tpl_desc_replace_reverse_osmosis_filters:"Remplacer le pr\xE9filtre, le postfiltre et la membrane du syst\xE8me d'eau potable \xE0 osmose inverse.",tpl_title_test_well_water_quality:"Tester la qualit\xE9 de l'eau de puits",tpl_desc_test_well_water_quality:"Envoyer un \xE9chantillon d'eau \xE0 un laboratoire pour analyse des bact\xE9ries, nitrates et min\xE9raux.",tpl_title_schedule_chimney_sweep:"Planifier un ramonage de chemin\xE9e",tpl_desc_schedule_chimney_sweep:"Faire appel \xE0 un professionnel pour nettoyer le conduit de chemin\xE9e et retirer les d\xE9p\xF4ts de cr\xE9osote.",tpl_title_inspect_chimney_cap_and_flashing:"Inspecter le chapeau et les solins de chemin\xE9e",tpl_desc_inspect_chimney_cap_and_flashing:"V\xE9rifier l'\xE9tat du chapeau de chemin\xE9e et inspecter les solins pour d\xE9tecter les fissures ou la rouille.",tpl_title_clean_fireplace_firebox:"Nettoyer le foyer de la chemin\xE9e",tpl_desc_clean_fireplace_firebox:"Retirer les cendres accumul\xE9es dans le foyer et v\xE9rifier l'\xE9tat des briques r\xE9fractaires.",tpl_title_check_fireplace_damper:"V\xE9rifier le clapet de la chemin\xE9e",tpl_desc_check_fireplace_damper:"Ouvrir et fermer le clapet de la chemin\xE9e pour s'assurer qu'il bouge librement et se ferme correctement.",tpl_title_pump_septic_tank:"Vidanger la fosse septique",tpl_desc_pump_septic_tank:"Planifier une vidange professionnelle de la fosse septique pour \xE9viter le d\xE9bordement et les dommages au champ d'\xE9pandage.",tpl_title_inspect_septic_drain_field:"Inspecter le champ d'\xE9pandage",tpl_desc_inspect_septic_drain_field:"Parcourir la zone du champ d'\xE9pandage \xE0 la recherche de zones humides, d'odeurs ou de zones d'herbe anormalement verte.",tpl_title_add_septic_treatment:"Ajouter un traitement pour fosse septique",tpl_desc_add_septic_treatment:"Ajouter un traitement enzymatique pour maintenir un niveau bact\xE9rien sain dans la fosse.",tpl_title_touch_up_interior_paint:"Retoucher la peinture int\xE9rieure",tpl_desc_touch_up_interior_paint:"Inspecter les murs pour d\xE9tecter les \xE9raflures, les trous de clous et les \xE9caillures. Retoucher avec une peinture assortie.",tpl_title_inspect_exterior_paint:"Inspecter la peinture ext\xE9rieure",tpl_desc_inspect_exterior_paint:"V\xE9rifier la peinture ext\xE9rieure pour d\xE9tecter l'\xE9caillage, les fissures ou la d\xE9coloration, et planifier une nouvelle peinture si n\xE9cessaire.",tpl_title_refinish_deck_or_porch:"R\xE9nover la terrasse ou le porche",tpl_desc_refinish_deck_or_porch:"Poncer, teindre ou vernir la terrasse ou le porche pour prot\xE9ger le bois des intemp\xE9ries.",tpl_title_seal_grout_lines:"Sceller les joints de carrelage",tpl_desc_seal_grout_lines:"Appliquer un produit d'\xE9tanch\xE9it\xE9 sur les joints des sols carrel\xE9s, de la cr\xE9dence et des douches pour \xE9viter les taches."},zt={config:Tt,options:At,panel:Ct};var xe={en:ye,de:ke,fr:we},D="en";function Et(i){return(i||D).toLowerCase().split(/[-_]/)[0]}function l(i,t=D){let e=xe[Et(t)]||xe[D],r=xe[D].panel;return(e.panel||r)[i]||r[i]||i}function $e(i){return i.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Ze(i,t=D){let e=`tpl_title_${$e(i.title)}`,r=l(e,t);return r===e?i.title:r}function Ye(i,t=D){let e=`tpl_desc_${$e(i.title)}`,r=l(e,t);return r===e?i.description||"":r}function Xe(i,t=D){let e=`category_${$e(i)}`,r=l(e,t);return r===e?i:r}var et="ha_home_maintenance_sort",y=class extends b{constructor(){super(...arguments);this.narrow=!1;this._tasks=[];this._labels=[];this._searchQuery="";this._selectedLabels=new Set;this._sortColumn="title";this._sortDirection="asc";this._loading=!0}_loadSortPreference(){try{let e=localStorage.getItem(et);if(e){let{column:r,direction:s}=JSON.parse(e);r&&(this._sortColumn=r),s&&(this._sortDirection=s)}}catch{}}_saveSortPreference(){try{localStorage.setItem(et,JSON.stringify({column:this._sortColumn,direction:this._sortDirection}))}catch{}}static get styles(){return[M,w`
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
          font-size: 14px;
          font-family: inherit;
          cursor: pointer;
          transition: background-color 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }

        .btn:hover {
          background: var(--secondary-background-color);
        }

        .btn.primary {
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          border-color: var(--primary-color);
        }

        .btn.primary:hover {
          opacity: 0.9;
        }

        .empty-state .empty-actions {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 16px;
        }

        .loading {
          text-align: center;
          padding: 48px 16px;
          color: var(--secondary-text-color);
        }

        .filter-bar {
          display: flex;
          gap: 12px;
          padding: 0 0 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .filter-bar input {
          flex: 1;
          min-width: 200px;
          max-width: 400px;
          padding: 8px 12px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
          font-size: 14px;
          font-family: inherit;
          box-sizing: border-box;
        }

        .filter-bar input:focus {
          outline: none;
          border-color: var(--hmp-accent-color);
        }

        .filter-bar select {
          padding: 8px 12px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
          font-size: 14px;
          font-family: inherit;
        }

        .filter-bar select:focus {
          outline: none;
          border-color: var(--hmp-accent-color);
        }

        .sort-select {
          padding: 8px 12px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
          font-size: 14px;
          font-family: inherit;
        }

        .sort-select:focus {
          outline: none;
          border-color: var(--hmp-accent-color);
        }
      `]}connectedCallback(){super.connectedCallback(),this._loadSortPreference(),this._loadData()}async _loadData(){this._loading=!0;try{let[e,r]=await Promise.all([J(this.hass),ae(this.hass)]);this._tasks=e,this._labels=r}catch(e){console.error("Failed to load data:",e),this._tasks=[],this._labels=[]}this._loading=!1}async _loadTasks(){try{this._tasks=await J(this.hass)}catch(e){console.error("Failed to load tasks:",e),this._tasks=[]}}get _filteredTasks(){let e=this._tasks,r=this._searchQuery.toLowerCase().trim();return r&&(e=e.filter(s=>s.title.toLowerCase().includes(r)||s.description&&s.description.toLowerCase().includes(r))),this._selectedLabels.size>0&&(e=e.filter(s=>s.labels&&s.labels.some(a=>this._selectedLabels.has(a)))),e}get _sortedTasks(){let e=[...this._filteredTasks],r=this._sortDirection==="asc"?1:-1;return e.sort((s,a)=>{let n=0;switch(this._sortColumn){case"title":n=s.title.localeCompare(a.title);break;case"interval":n=this._intervalToDays(s)-this._intervalToDays(a);break;case"last_performed":{let o=s.last_performed?this._parseLocalDate(s.last_performed).getTime():0,c=a.last_performed?this._parseLocalDate(a.last_performed).getTime():0;n=o-c;break}case"next_due":{let o=this._getNextDueTimestamp(s),c=this._getNextDueTimestamp(a);n=o-c;break}case"labels":{let o=s.labels?.length?s.labels.map(h=>this._getLabelName(h)).sort().join(", "):"",c=a.labels?.length?a.labels.map(h=>this._getLabelName(h)).sort().join(", "):"";n=o.localeCompare(c);break}case"status":{let o={overdue:0,due_soon:1,ok:2,out_of_season:3};n=(o[this._getStatus(s)]??3)-(o[this._getStatus(a)]??3);break}}return n*r}),e}_intervalToDays(e){let r=e.interval_value;switch(e.interval_type){case"days":return r;case"weeks":return r*7;case"months":return r*30;default:return r}}_getNextDueTimestamp(e){return e.next_due?this._parseLocalDate(e.next_due).getTime():0}_isInSeason(e){if(!e.active_months||e.active_months.length===0)return!0;let r=new Date().getMonth()+1;return e.active_months.includes(r)}_getStatus(e){if(!this._isInSeason(e))return"out_of_season";if(!e.last_performed)return"overdue";let r=Date.now(),s=this._getNextDueTimestamp(e);if(s<=r)return"overdue";let a=7*24*60*60*1e3;return s-r<=a?"due_soon":"ok"}_getStatusLabel(e){let r=this.hass?.language;switch(e){case"overdue":return l("overdue",r);case"due_soon":return l("due_soon",r);case"ok":return l("ok",r);case"out_of_season":return l("out_of_season",r)}}_getStatusClass(e){switch(e){case"overdue":return"status-overdue";case"due_soon":return"status-due-soon";case"ok":return"status-ok";case"out_of_season":return"status-out-of-season"}}_formatInterval(e){let r=l(e.interval_type,this.hass?.language);return`${e.interval_value} ${r.toLowerCase()}`}_parseLocalDate(e){let[r,s,a]=e.split("-").map(Number);return new Date(r,s-1,a)}_formatDate(e){return e?this._parseLocalDate(e).toLocaleDateString():l("never",this.hass?.language)}_sort(e){this._sortColumn===e?this._sortDirection=this._sortDirection==="asc"?"desc":"asc":(this._sortColumn=e,this._sortDirection="asc"),this._saveSortPreference()}_sortIndicator(e){return this._sortColumn!==e?"":this._sortDirection==="asc"?" \u25B2":" \u25BC"}async _completeTask(e){try{await Ke(this.hass,e.id),await this._loadTasks()}catch(r){console.error("Failed to complete task:",r)}}_editTask(e){this.dispatchEvent(new CustomEvent("navigate-to-edit",{bubbles:!0,composed:!0,detail:{taskId:e.id}}))}async _deleteTask(e){let r=l("confirm_delete",this.hass?.language);if(window.confirm(r))try{await Ge(this.hass,e.id),await this._loadTasks()}catch(s){console.error("Failed to delete task:",s)}}_navigateToCreate(){this.dispatchEvent(new CustomEvent("navigate-to-create",{bubbles:!0,composed:!0}))}_handleSearchInput(e){this._searchQuery=e.target.value}_toggleLabelFilter(e){let r=new Set(this._selectedLabels);r.has(e)?r.delete(e):r.add(e),this._selectedLabels=r,this.requestUpdate()}_clearLabelFilters(){this._selectedLabels=new Set,this.requestUpdate()}_handleSortChange(e){let r=e.target.value,[s,a]=r.split("-");this._sortColumn=s,this._sortDirection=a,this._saveSortPreference()}_getLabelName(e){let r=this._labels.find(s=>s.label_id===e);return r?r.name:e}_getLabel(e){return this._labels.find(r=>r.label_id===e)}_labelChipStyle(e){return re(e?.color)}_renderLabelChip(e){let r=this._getLabel(e),s=r?r.name:e,a=this._labelChipStyle(r);return _`<span class="label-chip" style=${a}>
      ${r?.icon?_`<ha-icon .icon=${r.icon}></ha-icon>`:p}${s}
    </span>`}_renderFilterChip(e){let r=this._labelChipStyle(e),s=this._selectedLabels.has(e.label_id),a=s&&e.color?se(e.color):s?"":r;return _`<button
      class="filter-chip ${s?"active":""}"
      style=${s?a:r}
      @click=${()=>this._toggleLabelFilter(e.label_id)}
    >
      ${e.icon?_`<ha-icon .icon=${e.icon}></ha-icon>`:p}${e.name}
    </button>`}_navigateToTemplates(){this.dispatchEvent(new CustomEvent("navigate-to-templates",{bubbles:!0,composed:!0}))}render(){return this._loading?_`<div class="loading">${l("loading",this.hass?.language)}</div>`:_`
      <div class="task-list">
        <div class="page-header">
          ${this.narrow?_`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:p}
          <h1>${l("panel_title",this.hass?.language)}</h1>
          <div class="header-actions">
            <button class="btn" @click=${this._navigateToTemplates}>
              ${l("browse_templates",this.hass?.language)}
            </button>
            <button class="btn primary" @click=${this._navigateToCreate}>
              ${l("add_task",this.hass?.language)}
            </button>
          </div>
        </div>

        ${this._tasks.length===0?this._renderEmptyState():_`
              ${this._renderFilterBar()}
              ${this._renderTable()}
            `}
      </div>
    `}_renderEmptyState(){return _`
      <div class="empty-state">
        <p>${l("no_tasks",this.hass?.language)}</p>
        <div class="empty-actions">
          <button class="btn" @click=${this._navigateToTemplates}>
            ${l("browse_templates",this.hass?.language)}
          </button>
          <button class="btn primary" @click=${this._navigateToCreate}>
            ${l("add_task",this.hass?.language)}
          </button>
        </div>
      </div>
    `}_renderFilterBar(){let e=new Set;for(let n of this._tasks)if(n.labels)for(let o of n.labels)e.add(o);let r=new Set(this._labels.map(n=>n.label_id)),s=this._labels.filter(n=>e.has(n.label_id)),a=[...e].filter(n=>!r.has(n));return _`
      <div class="filter-bar">
        <input
          type="text"
          placeholder="${l("search_tasks",this.hass?.language)}"
          .value=${this._searchQuery}
          @input=${this._handleSearchInput}
        />
        ${s.length>0||a.length>0?_`
              <div class="filter-chips">
                ${s.map(n=>this._renderFilterChip(n))}
                ${a.map(n=>{let o=this._selectedLabels.has(n);return _`<button
                    class="filter-chip ${o?"active":""}"
                    @click=${()=>this._toggleLabelFilter(n)}
                  >${n}</button>`})}
                ${this._selectedLabels.size>0?_`<button class="filter-chip clear-chip" @click=${this._clearLabelFilters}>${l("clear",this.hass?.language)}</button>`:p}
              </div>
            `:p}
        <select class="sort-select" @change=${this._handleSortChange}>
          <option value="title-asc" ?selected=${this._sortColumn==="title"&&this._sortDirection==="asc"}>
            ${l("title",this.hass?.language)} ▲
          </option>
          <option value="title-desc" ?selected=${this._sortColumn==="title"&&this._sortDirection==="desc"}>
            ${l("title",this.hass?.language)} ▼
          </option>
          <option value="status-asc" ?selected=${this._sortColumn==="status"&&this._sortDirection==="asc"}>
            ${l("status",this.hass?.language)} ▲
          </option>
          <option value="status-desc" ?selected=${this._sortColumn==="status"&&this._sortDirection==="desc"}>
            ${l("status",this.hass?.language)} ▼
          </option>
          <option value="interval-asc" ?selected=${this._sortColumn==="interval"&&this._sortDirection==="asc"}>
            ${l("interval",this.hass?.language)} ▲
          </option>
          <option value="interval-desc" ?selected=${this._sortColumn==="interval"&&this._sortDirection==="desc"}>
            ${l("interval",this.hass?.language)} ▼
          </option>
          <option value="last_performed-asc" ?selected=${this._sortColumn==="last_performed"&&this._sortDirection==="asc"}>
            ${l("last_performed",this.hass?.language)} ▲
          </option>
          <option value="last_performed-desc" ?selected=${this._sortColumn==="last_performed"&&this._sortDirection==="desc"}>
            ${l("last_performed",this.hass?.language)} ▼
          </option>
          <option value="next_due-asc" ?selected=${this._sortColumn==="next_due"&&this._sortDirection==="asc"}>
            ${l("next_due",this.hass?.language)} ▲
          </option>
          <option value="next_due-desc" ?selected=${this._sortColumn==="next_due"&&this._sortDirection==="desc"}>
            ${l("next_due",this.hass?.language)} ▼
          </option>
        </select>
      </div>
    `}_renderTable(){return _`
      <div class="task-table-header">
        <div></div>
        <div class="col-header" @click=${()=>this._sort("title")}>
          ${l("title",this.hass?.language)}${this._sortIndicator("title")}
        </div>
        <div class="col-header" @click=${()=>this._sort("interval")}>
          ${l("interval",this.hass?.language)}${this._sortIndicator("interval")}
        </div>
        <div class="col-header hide-medium" @click=${()=>this._sort("last_performed")}>
          ${l("last_performed",this.hass?.language)}${this._sortIndicator("last_performed")}
        </div>
        <div class="col-header hide-medium" @click=${()=>this._sort("next_due")}>
          ${l("next_due",this.hass?.language)}${this._sortIndicator("next_due")}
        </div>
        <div class="col-header hide-medium" @click=${()=>this._sort("labels")}>
          ${l("labels",this.hass?.language)}${this._sortIndicator("labels")}
        </div>
        <div class="col-header" @click=${()=>this._sort("status")}>
          ${l("status",this.hass?.language)}${this._sortIndicator("status")}
        </div>
        <div>${l("actions",this.hass?.language)}</div>
      </div>

      ${this._sortedTasks.map(e=>this._renderTaskRow(e))}
    `}_renderTaskRow(e){let r=this._getStatus(e),s=this._getStatusLabel(r),a=this._getStatusClass(r);return _`
      <div class="task-table-row">
        <div class="task-icon">
          <ha-icon .icon=${e.icon||"mdi:wrench"}></ha-icon>
        </div>
        <div class="task-title">
          ${e.title}
          ${e.description?_`<div class="subtitle">${e.description}</div>`:p}
        </div>
        <div>${this._formatInterval(e)}</div>
        <div class="hide-medium">${this._formatDate(e.last_performed)}</div>
        <div class="hide-medium">${this._formatDate(e.next_due)}</div>
        <div class="hide-medium task-labels">
          ${e.labels&&e.labels.length>0?e.labels.map(n=>this._renderLabelChip(n)):p}
        </div>
        <div>
          <span class="status-indicator ${a}">${s}</span>
        </div>
        <div class="action-buttons">
          <button
            class="action-btn complete"
            title="${l("complete",this.hass?.language)}"
            @click=${()=>this._completeTask(e)}
          >
            <ha-icon .icon=${"mdi:check"}></ha-icon>
          </button>
          <button
            class="action-btn edit"
            title="${l("edit",this.hass?.language)}"
            @click=${()=>this._editTask(e)}
          >
            <ha-icon .icon=${"mdi:pencil"}></ha-icon>
          </button>
          <button
            class="action-btn delete"
            title="${l("delete",this.hass?.language)}"
            @click=${()=>this._deleteTask(e)}
          >
            <ha-icon .icon=${"mdi:delete"}></ha-icon>
          </button>
        </div>
      </div>
    `}};d([v({attribute:!1})],y.prototype,"hass",2),d([v({type:Boolean})],y.prototype,"narrow",2),d([u()],y.prototype,"_tasks",2),d([u()],y.prototype,"_labels",2),d([u()],y.prototype,"_searchQuery",2),d([u()],y.prototype,"_selectedLabels",2),d([u()],y.prototype,"_sortColumn",2),d([u()],y.prototype,"_sortDirection",2),d([u()],y.prototype,"_loading",2),y=d([z("task-list-view")],y);var Rt=[1,2,3,4,5,6,7,8,9,10,11,12],f=class extends b{constructor(){super(...arguments);this.narrow=!1;this.taskId=null;this.templateData=null;this._title="";this._description="";this._intervalValue=30;this._intervalType="days";this._lastPerformed="";this._tagId="";this._icon="mdi:toolbox";this._labels=[];this._notifyWhenOverdue=!0;this._trackHistory=!0;this._activeMonths=[];this._completionHistory=[];this._loading=!1;this._showAdvanced=!1;this._tags=[];this._availableLabels=[]}static get styles(){return[M,w`
        .btn {
          padding: 8px 16px;
          border-radius: 4px;
          border: 1px solid var(--divider-color);
          background: var(--card-background-color);
          color: var(--primary-text-color);
          cursor: pointer;
          font-size: 14px;
        }
        .btn.primary {
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          border: none;
        }
        .btn.primary:hover {
          opacity: 0.9;
        }
        .btn:hover {
          opacity: 0.85;
        }
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .icon-preview ha-icon-picker {
          display: block;
          max-width: 300px;
          --mdc-text-field-fill-color: var(--card-background-color);
        }
        .error-message {
          color: var(--label-badge-red, #f44336);
          font-size: 12px;
          margin-top: 4px;
        }
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
        }
        .toggle-label input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
        .loading-overlay {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
          color: var(--secondary-text-color);
        }
        .custom-labels-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
          margin-top: 8px;
        }
        .custom-label-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--secondary-background-color);
          border: 1px solid var(--divider-color);
          border-radius: 12px;
          padding: 2px 4px 2px 8px;
          font-size: 12px;
        }
        .remove-label-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--secondary-text-color);
          font-size: 14px;
          line-height: 1;
          padding: 0 2px;
          display: flex;
          align-items: center;
        }
        .remove-label-btn:hover {
          color: var(--label-badge-red, #f44336);
        }
        .custom-label-input {
          flex: 1;
          min-width: 180px;
          padding: 4px 8px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color);
          font-size: 13px;
          font-family: inherit;
        }
        .custom-label-input:focus {
          outline: none;
          border-color: var(--hmp-accent-color);
        }
        .custom-label-hint {
          margin: 6px 0 0;
          font-size: 12px;
          color: var(--secondary-text-color);
          line-height: 1.4;
        }
      `]}async firstUpdated(){this._loading=!0;try{await Promise.all([this._loadTags(),this._loadLabels()]),this.taskId?await this._loadExistingTask():this.templateData&&this._populateFromTemplate(this.templateData)}finally{this._loading=!1}}async _loadTags(){try{this._tags=await Qe(this.hass)}catch{this._tags=[]}}async _loadLabels(){try{this._availableLabels=await ae(this.hass)}catch{this._availableLabels=[]}}async _loadExistingTask(){if(this.taskId)try{let e=await Ue(this.hass,this.taskId);this._title=e.title,this._description=e.description||"",this._intervalValue=e.interval_value,this._intervalType=e.interval_type,this._lastPerformed=e.last_performed||"",this._tagId=e.tag_id||"",this._icon=e.icon||"mdi:toolbox",this._labels=e.labels||[],this._notifyWhenOverdue=e.notify_when_overdue||!1,this._trackHistory=e.track_history||!1,this._completionHistory=e.completion_history||[],this._activeMonths=e.active_months||[]}catch(e){console.error("Failed to load task:",e)}}_populateFromTemplate(e){this._title=e.title,this._description=e.description||"",this._intervalValue=e.interval_value,this._intervalType=e.interval_type,this._icon=e.icon||"mdi:toolbox"}_handleTitleInput(e){this._title=e.target.value}_handleDescriptionInput(e){this._description=e.target.value}_handleIntervalValueInput(e){this._intervalValue=parseInt(e.target.value,10)||1}_handleIntervalTypeChange(e){this._intervalType=e.target.value}_handleLastPerformedInput(e){this._lastPerformed=e.target.value}_handleTagChange(e){this._tagId=e.target.value}_handleIconChange(e){this._icon=e.detail.value||""}_handleNotifyToggle(e){this._notifyWhenOverdue=e.target.checked}_handleTrackHistoryToggle(e){this._trackHistory=e.target.checked}_toggleActiveMonth(e){this._activeMonths.includes(e)?this._activeMonths=this._activeMonths.filter(r=>r!==e):this._activeMonths=[...this._activeMonths,e].sort((r,s)=>r-s)}_toggleLabel(e){this._labels.includes(e)?this._labels=this._labels.filter(r=>r!==e):this._labels=[...this._labels,e]}get _customLabels(){let e=new Set(this._availableLabels.map(r=>r.label_id));return this._labels.filter(r=>!e.has(r))}_removeCustomLabel(e){this._labels=this._labels.filter(r=>r!==e)}_handleCustomLabelKeydown(e){if(e.key==="Enter"||e.key===","){e.preventDefault();let r=e.target,s=r.value.trim();s&&!this._labels.includes(s)&&(this._labels=[...this._labels,s]),r.value=""}}_labelChipStyle(e){return re(e.color)}_labelChipSelectedStyle(e){return se(e.color)}_toggleAdvanced(){this._showAdvanced=!this._showAdvanced}_validate(){return!(!this._title.trim()||!this._intervalValue||this._intervalValue<1)}async _save(){if(this._validate()){this._loading=!0;try{let e={title:this._title.trim(),description:this._description.trim(),interval_value:this._intervalValue,interval_type:this._intervalType,last_performed:this._lastPerformed||null,tag_id:this._tagId||null,icon:this._icon||"mdi:toolbox",labels:this._labels,notify_when_overdue:this._notifyWhenOverdue,track_history:this._trackHistory,active_months:this._activeMonths};this.taskId?await Be(this.hass,this.taskId,e):await ie(this.hass,e),this._navigateToList()}catch(e){console.error("Failed to save task:",e)}finally{this._loading=!1}}}_cancel(){this._navigateToList()}_navigateToList(){this.dispatchEvent(new CustomEvent("navigate-to-list",{bubbles:!0,composed:!0}))}render(){if(this._loading)return _`
        <div class="loading-overlay">${l("loading",this.hass?.language)}</div>
      `;let e=!!this.taskId,r=e?l("edit_task",this.hass?.language):l("create_task",this.hass?.language);return _`
      <div>
        <div class="page-header">
          ${this.narrow?_`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:p}
          <button class="back-btn action-btn" @click=${this._cancel}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <h1>${r}</h1>
        </div>

        <div class="form-container">
          <div class="form-field">
            <label>${l("title",this.hass?.language)} *</label>
            <input
              type="text"
              .value=${this._title}
              @input=${this._handleTitleInput}
              placeholder=${l("title",this.hass?.language)}
              required
            />
            ${!this._title.trim()&&this._title!==""?_`<div class="error-message">${l("required_field",this.hass?.language)}</div>`:p}
          </div>

          <div class="form-field">
            <label>${l("description",this.hass?.language)}</label>
            <textarea
              .value=${this._description}
              @input=${this._handleDescriptionInput}
              placeholder=${l("description",this.hass?.language)}
            ></textarea>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>${l("interval_value",this.hass?.language)} *</label>
              <input
                type="number"
                min="1"
                .value=${String(this._intervalValue)}
                @input=${this._handleIntervalValueInput}
                required
              />
            </div>
            <div class="form-field">
              <label>${l("interval_type",this.hass?.language)}</label>
              <select .value=${this._intervalType} @change=${this._handleIntervalTypeChange}>
                <option value="days" ?selected=${this._intervalType==="days"}>
                  ${l("days",this.hass?.language)}
                </option>
                <option value="weeks" ?selected=${this._intervalType==="weeks"}>
                  ${l("weeks",this.hass?.language)}
                </option>
                <option value="months" ?selected=${this._intervalType==="months"}>
                  ${l("months",this.hass?.language)}
                </option>
              </select>
            </div>
          </div>

          <div class="form-field">
            <label>${l("active_months",this.hass?.language)}</label>
            <div class="label-picker">
              ${Rt.map(s=>{let a=this._activeMonths.includes(s);return _`<button
                  type="button"
                  class="label-picker-chip ${a?"selected":""}"
                  @click=${()=>this._toggleActiveMonth(s)}
                >
                  ${l(`month_${s}`,this.hass?.language)}
                </button>`})}
            </div>
            <p class="custom-label-hint">${l("active_months_hint",this.hass?.language)}</p>
          </div>

          <div class="form-field">
            <label>${l("last_performed",this.hass?.language)}</label>
            <input
              type="date"
              .value=${this._lastPerformed}
              @input=${this._handleLastPerformedInput}
            />
          </div>

          <div class="form-field">
            <label class="toggle-label">
              <input
                type="checkbox"
                .checked=${this._notifyWhenOverdue}
                @change=${this._handleNotifyToggle}
              />
              ${l("notify_when_overdue",this.hass?.language)}
            </label>
          </div>

          <div class="form-field">
            <label class="toggle-label">
              <input
                type="checkbox"
                .checked=${this._trackHistory}
                @change=${this._handleTrackHistoryToggle}
              />
              ${l("track_history",this.hass?.language)}
            </label>
          </div>

          ${e&&(this._trackHistory||this._completionHistory.length>0)?_`
                <div class="history-section">
                  <h3>
                    ${l("completion_history",this.hass?.language)}
                    ${this._completionHistory.length>0?_`<span class="history-count">${this._completionHistory.length}</span>`:p}
                  </h3>
                  ${this._completionHistory.length>0?_`<ul class="history-list">
                        ${this._completionHistory.slice().reverse().map(s=>_`<li>${new Date(s).toLocaleString()}</li>`)}
                      </ul>`:_`<p class="history-empty">${l("no_history",this.hass?.language)}</p>`}
                </div>
              `:p}

          <div class="expansion-panel">
            <div class="expansion-header" @click=${this._toggleAdvanced}>
              ${l("advanced_settings",this.hass?.language)}
              <ha-icon
                icon=${this._showAdvanced?"mdi:chevron-up":"mdi:chevron-down"}
              ></ha-icon>
            </div>
            ${this._showAdvanced?_`
                  <div class="expansion-content">
                    <div class="form-field">
                      <label>${l("tag",this.hass?.language)}</label>
                      <select .value=${this._tagId} @change=${this._handleTagChange}>
                        <option value="">-- ${l("none_option",this.hass?.language)} --</option>
                        ${this._tags.map(s=>_`
                            <option value=${s.id} ?selected=${this._tagId===s.id}>
                              ${s.name||s.id}
                            </option>
                          `)}
                      </select>
                    </div>

                    <div class="form-field">
                      <label>${l("icon",this.hass?.language)}</label>
                      <div class="icon-preview">
                        <ha-icon-picker
                          .hass=${this.hass}
                          .value=${this._icon}
                          placeholder="mdi:toolbox"
                          @value-changed=${this._handleIconChange}
                        ></ha-icon-picker>
                      </div>
                    </div>

                    <div class="form-field">
                      <label>${l("labels",this.hass?.language)}</label>
                      ${this._availableLabels.length>0?_`<div class="label-picker">
                            ${this._availableLabels.map(s=>{let a=this._labels.includes(s.label_id),n=a?this._labelChipSelectedStyle(s):this._labelChipStyle(s);return _`<button
                                type="button"
                                class="label-picker-chip ${a?"selected":""}"
                                style=${n}
                                @click=${()=>this._toggleLabel(s.label_id)}
                              >
                                ${s.icon?_`<ha-icon .icon=${s.icon}></ha-icon>`:p}
                                ${s.name}
                              </button>`})}
                          </div>`:p}
                      <div class="custom-labels-row">
                        ${this._customLabels.map(s=>_`<span class="label-chip custom-label-chip">
                            ${s}<button type="button" class="remove-label-btn" @click=${()=>this._removeCustomLabel(s)}>×</button>
                          </span>`)}
                        <input
                          type="text"
                          class="custom-label-input"
                          placeholder="${l("add_custom_label_placeholder",this.hass?.language)}"
                          @keydown=${this._handleCustomLabelKeydown}
                        />
                      </div>
                      <p class="custom-label-hint">${l("custom_label_hint",this.hass?.language)}</p>
                    </div>
                  </div>
                `:p}
          </div>

          <div class="form-actions">
            <button class="btn" @click=${this._cancel} ?disabled=${this._loading}>
              ${l("cancel",this.hass?.language)}
            </button>
            <button class="btn primary" @click=${this._save} ?disabled=${this._loading}>
              ${l("save",this.hass?.language)}
            </button>
          </div>
        </div>
      </div>
    `}};d([v({attribute:!1})],f.prototype,"hass",2),d([v({type:Boolean})],f.prototype,"narrow",2),d([v({type:String})],f.prototype,"taskId",2),d([v({attribute:!1})],f.prototype,"templateData",2),d([u()],f.prototype,"_title",2),d([u()],f.prototype,"_description",2),d([u()],f.prototype,"_intervalValue",2),d([u()],f.prototype,"_intervalType",2),d([u()],f.prototype,"_lastPerformed",2),d([u()],f.prototype,"_tagId",2),d([u()],f.prototype,"_icon",2),d([u()],f.prototype,"_labels",2),d([u()],f.prototype,"_notifyWhenOverdue",2),d([u()],f.prototype,"_trackHistory",2),d([u()],f.prototype,"_activeMonths",2),d([u()],f.prototype,"_completionHistory",2),d([u()],f.prototype,"_loading",2),d([u()],f.prototype,"_showAdvanced",2),d([u()],f.prototype,"_tags",2),d([u()],f.prototype,"_availableLabels",2),f=d([z("task-form-view")],f);var k=class extends b{constructor(){super(...arguments);this.narrow=!1;this._templates=[];this._searchQuery="";this._expandedCategories=new Set;this._importPreview=[];this._showImportDialog=!1;this._importing=!1;this._importResult=""}static get styles(){return[M,w`
        .btn {
          padding: 8px 16px;
          border-radius: 4px;
          border: 1px solid var(--divider-color);
          background: var(--card-background-color);
          color: var(--primary-text-color);
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }
        .btn.primary {
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          border: none;
        }
        .btn.primary:hover {
          opacity: 0.9;
        }
        .search-and-actions {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 16px;
        }
        .template-category h2 {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          user-select: none;
        }
        .template-category h2:hover {
          color: var(--hmp-accent-color);
        }
        .category-count {
          font-size: 14px;
          font-weight: 400;
          color: var(--secondary-text-color);
        }
        .back-btn {
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-text-color);
          --mdc-icon-size: 24px;
        }

        .import-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }

        .import-dialog {
          background: var(--card-background-color, #fff);
          border-radius: 8px;
          padding: 24px;
          max-width: 700px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .import-dialog h2 {
          margin: 0 0 16px;
          font-size: 20px;
          font-weight: 500;
        }

        .import-info {
          font-size: 13px;
          color: var(--secondary-text-color);
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .import-info code {
          background: var(--secondary-background-color);
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 12px;
        }

        .import-preview-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
          margin: 16px 0;
        }

        .import-preview-table th,
        .import-preview-table td {
          text-align: left;
          padding: 6px 8px;
          border-bottom: 1px solid var(--divider-color);
        }

        .import-preview-table th {
          font-weight: 600;
          background: var(--secondary-background-color);
          position: sticky;
          top: 0;
        }

        .import-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
          margin-top: 16px;
        }

        .import-result {
          padding: 12px;
          border-radius: 4px;
          margin-top: 12px;
          font-size: 14px;
          background: rgba(76, 175, 80, 0.12);
          color: var(--label-badge-green, #4caf50);
        }

        .import-result.error {
          background: rgba(244, 67, 54, 0.12);
          color: var(--label-badge-red, #f44336);
        }

        input[type="file"] {
          display: none;
        }
      `]}connectedCallback(){super.connectedCallback(),this._loadTemplates()}async _loadTemplates(){try{this._templates=await Je(this.hass);let e=new Set(this._templates.map(r=>r.category));this._expandedCategories=e}catch(e){console.error("Failed to load templates:",e),this._templates=[]}}_getFilteredTemplates(){if(!this._searchQuery.trim())return this._templates;let e=this._searchQuery.toLowerCase().trim();return this._templates.filter(r=>r.title.toLowerCase().includes(e)||r.description&&r.description.toLowerCase().includes(e))}_groupByCategory(e){let r={};for(let a of e){let n=a.category||"Other";r[n]||(r[n]=[]),r[n].push(a)}let s={};for(let a of Object.keys(r).sort())s[a]=r[a];return s}_toggleCategory(e){let r=new Set(this._expandedCategories);r.has(e)?r.delete(e):r.add(e),this._expandedCategories=r}_selectTemplate(e){this.dispatchEvent(new CustomEvent("select-template",{detail:{template:e},bubbles:!0,composed:!0}))}_createFromScratch(){this.dispatchEvent(new CustomEvent("navigate-to-create",{bubbles:!0,composed:!0}))}_triggerFileInput(){let e=this.shadowRoot?.querySelector('input[type="file"]');e&&(e.value="",e.click())}_handleFileSelect(e){let s=e.target.files?.[0];if(!s)return;let a=new FileReader;a.onload=()=>{let n=a.result,o=this._parseCsv(n);if(o.length===0){this._importResult="No valid rows found in CSV.",this._showImportDialog=!0;return}this._importPreview=o,this._importResult="",this._showImportDialog=!0},a.onerror=()=>{this._importResult="Failed to read file.",this._showImportDialog=!0},a.readAsText(s)}_parseCsv(e){let r=e.split(/\r?\n/).filter(n=>n.trim());if(r.length<2)return[];let s=this._parseCsvLine(r[0]).map(n=>n.trim().toLowerCase());if(!s.includes("title"))return[];let a=[];for(let n=1;n<r.length;n++){let o=this._parseCsvLine(r[n]),c={};for(let h=0;h<s.length;h++)c[s[h]]=(o[h]||"").trim();c.title&&a.push(c)}return a}_parseCsvLine(e){let r=[],s="",a=!1;for(let n=0;n<e.length;n++){let o=e[n];a?o==='"'?n+1<e.length&&e[n+1]==='"'?(s+='"',n++):a=!1:s+=o:o==='"'?a=!0:o===","?(r.push(s),s=""):s+=o}return r.push(s),r}async _doImport(){this._importing=!0,this._importResult="";let e=0,r=0;for(let s of this._importPreview)try{let a={title:s.title,description:s.description||"",interval_value:parseInt(s.interval_value,10)||30,interval_type:s.interval_type||"days",icon:s.icon||"mdi:toolbox",last_performed:s.last_performed||null};await ie(this.hass,a),e++}catch{r++}this._importing=!1,r===0?this._importResult=`Successfully imported ${e} task${e!==1?"s":""}.`:this._importResult=`Imported ${e}, failed ${r}.`,this._importPreview=[]}_closeImportDialog(){this._showImportDialog=!1,this._importPreview=[],this._importResult=""}async _exportCsv(){let e;try{e=await J(this.hass)}catch{return}let r=["title","description","interval_value","interval_type","last_performed","icon","labels","notify_when_overdue"],s=g=>g.includes(",")||g.includes('"')||g.includes(`
`)?`"${g.replace(/"/g,'""')}"`:g,a=e.map(g=>[s(g.title),s(g.description||""),String(g.interval_value),g.interval_type,g.last_performed||"",g.icon||"",s((g.labels||[]).join("; ")),g.notify_when_overdue?"true":"false"].join(",")),n=[r.join(","),...a].join(`
`),o=new Blob([n],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(o),h=document.createElement("a");h.href=c,h.download="home_maintenance_tasks.csv",h.click(),URL.revokeObjectURL(c)}_goBack(){this.dispatchEvent(new CustomEvent("navigate-to-list",{bubbles:!0,composed:!0}))}_onSearchInput(e){this._searchQuery=e.target.value}_intervalLabel(e){let r=this.hass?.language,s=e.interval_value,n=`every_${e.interval_type}_${s===1?"one":"other"}`;return l(n,r).replace("{count}",String(s))}render(){let e=this._getFilteredTemplates(),r=this._groupByCategory(e),s=Object.keys(r).length>0;return _`
      <div>
        <div class="page-header">
          ${this.narrow?_`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`:p}
          <button class="back-btn" @click=${this._goBack}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <h1>${l("choose_template",this.hass?.language)}</h1>
        </div>

        <div class="search-and-actions">
          <input
            class="search-bar"
            type="text"
            .placeholder=${l("search_templates",this.hass?.language)}
            .value=${this._searchQuery}
            @input=${this._onSearchInput}
          />
          <button class="btn" @click=${this._exportCsv}>
            <ha-icon icon="mdi:file-download-outline"></ha-icon>
            ${l("export_csv",this.hass?.language)}
          </button>
          <button class="btn" @click=${this._triggerFileInput}>
            <ha-icon icon="mdi:file-upload-outline"></ha-icon>
            ${l("import_csv",this.hass?.language)}
          </button>
          <button class="btn primary" @click=${this._createFromScratch}>
            ${l("create_from_scratch",this.hass?.language)}
          </button>
        </div>
        <input
          type="file"
          accept=".csv,text/csv"
          @change=${this._handleFileSelect}
        />

        ${s?_`
              ${Object.entries(r).map(([a,n])=>{let o=this._expandedCategories.has(a);return _`
                  <div class="template-category">
                    <h2 @click=${()=>this._toggleCategory(a)}>
                      ${Xe(a,this.hass?.language)}
                      <ha-icon
                        icon=${o?"mdi:chevron-up":"mdi:chevron-down"}
                      ></ha-icon>
                      <span class="category-count"
                        >(${n.length})</span
                      >
                    </h2>
                    ${o?_`
                          <div class="template-grid">
                            ${n.map(c=>_`
                                <div
                                  class="template-card"
                                  @click=${()=>this._selectTemplate(c)}
                                >
                                  <div class="template-header">
                                    <ha-icon
                                      .icon=${c.icon}
                                    ></ha-icon>
                                    <span class="template-title"
                                      >${Ze(c,this.hass?.language)}</span
                                    >
                                  </div>
                                  <div class="template-desc">
                                    ${Ye(c,this.hass?.language)}
                                  </div>
                                  <div class="template-interval">
                                    ${this._intervalLabel(c)}
                                  </div>
                                </div>
                              `)}
                          </div>
                        `:p}
                  </div>
                `})}
            `:_`
              <div class="empty-state">
                ${l("no_results",this.hass?.language)}
              </div>
            `}

        ${this._showImportDialog?this._renderImportDialog():p}
      </div>
    `}_renderImportDialog(){let e=["title","description","interval_value","interval_type","last_performed","icon"],r=this._importPreview.length>0;return _`
      <div class="import-overlay" @click=${this._closeImportDialog}>
        <div class="import-dialog" @click=${s=>s.stopPropagation()}>
          <h2>${l("import_csv",this.hass?.language)}</h2>
          <div class="import-info">
            ${l("import_csv_info",this.hass?.language)}<br />
            <code>title, description, interval_value, interval_type, last_performed, icon</code>
          </div>

          ${r?_`
                <div style="overflow-x:auto; max-height:40vh;">
                  <table class="import-preview-table">
                    <thead>
                      <tr>
                        ${e.filter(s=>this._importPreview.some(a=>a[s])).map(s=>_`<th>${s}</th>`)}
                      </tr>
                    </thead>
                    <tbody>
                      ${this._importPreview.map(s=>_`
                          <tr>
                            ${e.filter(a=>this._importPreview.some(n=>n[a])).map(a=>_`<td>${s[a]||""}</td>`)}
                          </tr>
                        `)}
                    </tbody>
                  </table>
                </div>
                <div class="import-info">
                  ${this._importPreview.length} ${l("tasks",this.hass?.language).toLowerCase()}
                </div>
              `:p}

          ${this._importResult?_`<div class="import-result${this._importResult.includes("failed")?" error":""}">${this._importResult}</div>`:p}

          <div class="import-actions">
            <button class="btn" @click=${this._closeImportDialog}>
              ${this._importResult&&!this._importResult.includes("failed")?l("done",this.hass?.language):l("cancel",this.hass?.language)}
            </button>
            ${r&&!this._importing?_`
                  <button class="btn primary" @click=${this._doImport}>
                    ${l("import",this.hass?.language)} (${this._importPreview.length})
                  </button>
                `:p}
            ${this._importing?_`<span>${l("importing",this.hass?.language)}</span>`:p}
          </div>
        </div>
      </div>
    `}};d([v({attribute:!1})],k.prototype,"hass",2),d([v({type:Boolean})],k.prototype,"narrow",2),d([u()],k.prototype,"_templates",2),d([u()],k.prototype,"_searchQuery",2),d([u()],k.prototype,"_expandedCategories",2),d([u()],k.prototype,"_importPreview",2),d([u()],k.prototype,"_showImportDialog",2),d([u()],k.prototype,"_importing",2),d([u()],k.prototype,"_importResult",2),k=d([z("template-picker-view")],k);var x=class extends b{constructor(){super(...arguments);this.narrow=!1;this.panel={};this._currentView="list";this._editTaskId=null;this._templateData=null}static get styles(){return w`
      :host {
        display: block;
      }
    `}connectedCallback(){super.connectedCallback(),console.info(`%c ha-home-maintenance %c ${We} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;")}_onNavigateToCreate(){this._currentView="create",this._editTaskId=null,this._templateData=null}_onNavigateToEdit(e){this._currentView="edit",this._editTaskId=e.detail.taskId}_onNavigateToTemplates(){this._currentView="templates"}_onNavigateToList(){this._currentView="list"}_onSelectTemplate(e){this._currentView="create",this._templateData=e.detail.template}render(){switch(this._currentView){case"list":return _`
          <task-list-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            @navigate-to-create=${this._onNavigateToCreate}
            @navigate-to-edit=${this._onNavigateToEdit}
            @navigate-to-templates=${this._onNavigateToTemplates}
          ></task-list-view>
        `;case"create":return _`
          <task-form-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            .taskId=${null}
            .templateData=${this._templateData}
            @navigate-to-list=${this._onNavigateToList}
          ></task-form-view>
        `;case"edit":return _`
          <task-form-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            .taskId=${this._editTaskId}
            .templateData=${null}
            @navigate-to-list=${this._onNavigateToList}
          ></task-form-view>
        `;case"templates":return _`
          <template-picker-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            @select-template=${this._onSelectTemplate}
            @navigate-to-create=${this._onNavigateToCreate}
            @navigate-to-list=${this._onNavigateToList}
          ></template-picker-view>
        `}}};d([v({attribute:!1})],x.prototype,"hass",2),d([v({type:Boolean})],x.prototype,"narrow",2),d([v({attribute:!1})],x.prototype,"panel",2),d([u()],x.prototype,"_currentView",2),d([u()],x.prototype,"_editTaskId",2),d([u()],x.prototype,"_templateData",2),x=d([z("ha-home-maintenance-panel")],x);export{x as HaHomeMaintenancePanel};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
