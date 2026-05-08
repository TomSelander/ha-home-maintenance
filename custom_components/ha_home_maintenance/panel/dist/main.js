var ye=Object.defineProperty;var Ye=Object.getOwnPropertyDescriptor;var Ze=(r,t)=>{for(var e in t)ye(r,e,{get:t[e],enumerable:!0})};var d=(r,t,e,s)=>{for(var i=s>1?void 0:s?Ye(t,e):t,a=r.length-1,o;a>=0;a--)(o=r[a])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&ye(t,e,i),i};var Z=globalThis,X=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol(),xe=new WeakMap,M=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(X&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=xe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&xe.set(e,t))}return t}toString(){return this.cssText}},we=r=>new M(typeof r=="string"?r:r+"",void 0,ne),w=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,a)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1],r[0]);return new M(e,r,ne)},ke=(r,t)=>{if(X)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=Z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},le=X?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return we(e)})(r):r;var{is:Xe,defineProperty:Ve,getOwnPropertyDescriptor:et,getOwnPropertyNames:tt,getOwnPropertySymbols:st,getPrototypeOf:it}=Object,S=globalThis,$e=S.trustedTypes,rt=$e?$e.emptyScript:"",at=S.reactiveElementPolyfillSupport,U=(r,t)=>r,j={toAttribute(r,t){switch(t){case Boolean:r=r?rt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},V=(r,t)=>!Xe(r,t),Ce={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:V};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);var C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ce){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ve(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:a}=et(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let c=i?.call(this);a?.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ce}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let t=it(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let e=this.properties,s=[...tt(e),...st(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(le(i))}else t!==void 0&&e.push(le(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let a=(s.converter?.toAttribute!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let a=s.getPropertyOptions(i),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:j;this._$Em=i;let c=o.fromAttribute(e,a.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,e,s,i=!1,a){if(t!==void 0){let o=this.constructor;if(i===!1&&(a=this[t]),s??(s=o.getPropertyOptions(t)),!((s.hasChanged??V)(a,e)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:a},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,a]of s){let{wrapped:o}=a,c=this[i];o!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,a,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[U("elementProperties")]=new Map,C[U("finalized")]=new Map,at?.({ReactiveElement:C}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.1.2");var W=globalThis,Te=r=>r,ee=W.trustedTypes,Se=ee?ee.createPolicy("lit-html",{createHTML:r=>r}):void 0,De="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Pe="?"+A,ot=`<${Pe}>`,D=document,B=()=>D.createComment(""),F=r=>r===null||typeof r!="object"&&typeof r!="function",ge=Array.isArray,nt=r=>ge(r)||typeof r?.[Symbol.iterator]=="function",ce=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ae=/-->/g,Ee=/>/g,L=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ie=/'/g,Le=/"/g,ze=/^(?:script|style|textarea|title)$/i,me=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),p=me(1),kt=me(2),$t=me(3),P=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Re=new WeakMap,R=D.createTreeWalker(D,129);function He(r,t){if(!ge(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Se!==void 0?Se.createHTML(t):t}var lt=(r,t)=>{let e=r.length-1,s=[],i,a=t===2?"<svg>":t===3?"<math>":"",o=q;for(let c=0;c<e;c++){let l=r[c],u,g,m=-1,$=0;for(;$<l.length&&(o.lastIndex=$,g=o.exec(l),g!==null);)$=o.lastIndex,o===q?g[1]==="!--"?o=Ae:g[1]!==void 0?o=Ee:g[2]!==void 0?(ze.test(g[2])&&(i=RegExp("</"+g[2],"g")),o=L):g[3]!==void 0&&(o=L):o===L?g[0]===">"?(o=i??q,m=-1):g[1]===void 0?m=-2:(m=o.lastIndex-g[2].length,u=g[1],o=g[3]===void 0?L:g[3]==='"'?Le:Ie):o===Le||o===Ie?o=L:o===Ae||o===Ee?o=q:(o=L,i=void 0);let T=o===L&&r[c+1].startsWith("/>")?" ":"";a+=o===q?l+ot:m>=0?(s.push(u),l.slice(0,m)+De+l.slice(m)+A+T):l+A+(m===-2?c:T)}return[He(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},K=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,o=0,c=t.length-1,l=this.parts,[u,g]=lt(t,e);if(this.el=r.createElement(u,s),R.currentNode=this.el.content,e===2||e===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=R.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let m of i.getAttributeNames())if(m.endsWith(De)){let $=g[o++],T=i.getAttribute(m).split(A),Y=/([.?@])?(.*)/.exec($);l.push({type:1,index:a,name:Y[2],strings:T,ctor:Y[1]==="."?pe:Y[1]==="?"?he:Y[1]==="@"?_e:H}),i.removeAttribute(m)}else m.startsWith(A)&&(l.push({type:6,index:a}),i.removeAttribute(m));if(ze.test(i.tagName)){let m=i.textContent.split(A),$=m.length-1;if($>0){i.textContent=ee?ee.emptyScript:"";for(let T=0;T<$;T++)i.append(m[T],B()),R.nextNode(),l.push({type:2,index:++a});i.append(m[$],B())}}}else if(i.nodeType===8)if(i.data===Pe)l.push({type:2,index:a});else{let m=-1;for(;(m=i.data.indexOf(A,m+1))!==-1;)l.push({type:7,index:a}),m+=A.length-1}a++}}static createElement(t,e){let s=D.createElement("template");return s.innerHTML=t,s}};function z(r,t,e=r,s){if(t===P)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,a=F(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=z(r,i._$AS(r,t.values),i,s)),t}var de=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??D).importNode(e,!0);R.currentNode=i;let a=R.nextNode(),o=0,c=0,l=s[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new Q(a,a.nextSibling,this,t):l.type===1?u=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(u=new ue(a,this,t)),this._$AV.push(u),l=s[++c]}o!==l?.index&&(a=R.nextNode(),o++)}return R.currentNode=D,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},Q=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),F(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=K.createElement(He(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let a=new de(i,this),o=a.u(this.options);a.p(e),this.T(o),this._$AH=a}}_$AC(t){let e=Re.get(t.strings);return e===void 0&&Re.set(t.strings,e=new K(t)),e}k(t){ge(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let a of t)i===e.length?e.push(s=new r(this.O(B()),this.O(B()),this,this.options)):s=e[i],s._$AI(a),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Te(t).nextSibling;Te(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,a){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){let a=this.strings,o=!1;if(a===void 0)t=z(this,t,e,0),o=!F(t)||t!==this._$AH&&t!==P,o&&(this._$AH=t);else{let c=t,l,u;for(t=a[0],l=0;l<a.length-1;l++)u=z(this,c[s+l],e,l),u===P&&(u=this._$AH[l]),o||(o=!F(u)||u!==this._$AH[l]),u===h?t=h:t!==h&&(t+=(u??"")+a[l+1]),this._$AH[l]=u}o&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},pe=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},he=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},_e=class extends H{constructor(t,e,s,i,a){super(t,e,s,i,a),this.type=5}_$AI(t,e=this){if((t=z(this,t,e,0)??h)===P)return;let s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ue=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}};var ct=W.litHtmlPolyfillSupport;ct?.(K,Q),(W.litHtmlVersions??(W.litHtmlVersions=[])).push("3.3.2");var Ne=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let a=e?.renderBefore??null;s._$litPart$=i=new Q(t.insertBefore(B(),a),a,void 0,e??{})}return i._$AI(r),i};var G=globalThis,b=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ne(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}};b._$litElement$=!0,b.finalized=!0,G.litElementHydrateSupport?.({LitElement:b});var dt=G.litElementPolyfillSupport;dt?.({LitElement:b});(G.litElementVersions??(G.litElementVersions=[])).push("4.2.2");var E=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var pt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:V},ht=(r=pt,t,e)=>{let{kind:s,metadata:i}=e,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),s==="accessor"){let{name:o}=e;return{set(c){let l=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,l,r,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,r,c),c}}}if(s==="setter"){let{name:o}=e;return function(c){let l=this[o];t.call(this,c),this.requestUpdate(o,l,r,!0,c)}}throw Error("Unsupported decorator location: "+s)};function f(r){return(t,e)=>typeof e=="object"?ht(r,t,e):((s,i,a)=>{let o=i.hasOwnProperty(a);return i.constructor.createProperty(a,s),o?Object.getOwnPropertyDescriptor(i,a):void 0})(r,t,e)}function _(r){return f({...r,state:!0,attribute:!1})}var Oe="1.6.1",I="ha_home_maintenance";var _t={red:"#f44336",pink:"#e91e63",purple:"#9c27b0","deep-purple":"#673ab7",indigo:"#3f51b5",blue:"#2196f3","light-blue":"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caf50","light-green":"#8bc34a",lime:"#cddc39",yellow:"#ffeb3b",amber:"#ffc107",orange:"#ff9800","deep-orange":"#ff5722",brown:"#795548",grey:"#9e9e9e","blue-grey":"#607d8b"};function Me(r){return _t[r.toLowerCase()]??r}function se(r){if(!r)return"";let t=Me(r);if(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(t)){let e=t.slice(1);e.length===3&&(e=e.split("").map(l=>l+l).join(""));let s=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),a=parseInt(e.slice(4,6),16),c=(.299*s+.587*i+.114*a)/255>.5?`rgb(${Math.round(s*.5)},${Math.round(i*.5)},${Math.round(a*.5)})`:t;return`background:rgba(${s},${i},${a},0.12);color:${c};`}return`border-left:3px solid ${t};padding-left:5px;`}function ie(r){return r?`background:${Me(r)};color:#fff;`:""}var J=r=>r.callWS({type:`${I}/get_tasks`}),Ue=(r,t)=>r.callWS({type:`${I}/get_task`,task_id:t}),re=(r,t)=>r.callWS({type:`${I}/add_task`,...t}),je=(r,t,e)=>r.callWS({type:`${I}/update_task`,task_id:t,...e}),qe=(r,t)=>r.callWS({type:`${I}/complete_task`,task_id:t}),We=(r,t)=>r.callWS({type:`${I}/remove_task`,task_id:t});var Be=r=>r.callWS({type:`${I}/get_templates`}),Fe=async r=>{try{return await r.callWS({type:"tag/list"})}catch{return[]}},ae=async r=>{try{return await r.callWS({type:"config/label_registry/list"})}catch{return[]}};var N=w`
  :host {
    display: block;
    padding: 16px;
    --primary-color: var(--ha-card-header-color, var(--primary-text-color));
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
    color: var(--primary-color);
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
    border-color: var(--primary-color);
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
    border-color: var(--primary-color);
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
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 12px;
  }

  .history-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .history-list li {
    padding: 8px 0;
    border-bottom: 1px solid var(--divider-color);
    font-size: 14px;
    color: var(--primary-text-color);
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
`;var ve={};Ze(ve,{config:()=>ut,default:()=>vt,options:()=>gt,panel:()=>mt});var ut={step:{user:{title:"Home Maintenance Pro",description:"Set up the Home Maintenance Pro integration to track recurring maintenance tasks."}},abort:{single_instance_allowed:"Only a single instance is allowed."}},gt={step:{init:{title:"Home Maintenance Pro Options",data:{admin_only:"Admin only",sidebar_title:"Sidebar title"},data_description:{admin_only:"Restrict panel access to admin users only.",sidebar_title:"Title shown in the sidebar navigation."}}}},mt={panel_title:"Home Maintenance Pro",tasks:"Tasks",add_task:"Add Task",browse_templates:"Browse Templates",create_task:"Create Task",edit_task:"Edit Task",choose_template:"Choose a Template",create_from_scratch:"Create from Scratch",title:"Title",description:"Description",interval:"Interval",interval_value:"Interval Value",interval_type:"Interval Type",last_performed:"Last Performed",next_due:"Next Due",status:"Status",actions:"Actions",save:"Save",cancel:"Cancel",delete:"Delete",complete:"Complete",edit:"Edit",days:"Days",weeks:"Weeks",months:"Months",overdue:"Overdue",due_soon:"Due Soon",ok:"OK",never:"Never",advanced_settings:"Advanced Settings",tag:"NFC Tag",icon:"Icon",labels:"Labels",search_tasks:"Search tasks...",all_labels:"All Labels",search_templates:"Search templates...",no_tasks:"No maintenance tasks yet. Add a task or browse templates to get started.",confirm_delete:"Are you sure you want to delete this task?",task_saved:"Task saved successfully.",task_deleted:"Task deleted.",task_completed:"Task marked as complete.",required_field:"This field is required.",today:"Today",import_csv:"Import CSV",import_csv_info:"Upload a CSV file with the following columns (title is required, others are optional):",import:"Import",done:"Done",no_results:"No templates match your search.",notify_when_overdue:"Notify when overdue",export_csv:"Export CSV",sort_by:"Sort by",clear:"Clear",track_history:"Track completion history",completion_history:"Completion History",no_history:"No completion history yet.",loading:"Loading...",importing:"Importing...",none_option:"None",add_custom_label_placeholder:"Add custom label, press Enter",custom_label_hint:"Custom labels are local to this integration. To use a label across Home Assistant (with colors, icons, and filtering), create it in Settings \u2192 Labels first.",category_hvac:"HVAC",category_plumbing:"Plumbing",category_electrical:"Electrical",category_exterior:"Exterior",category_interior:"Interior",category_appliances:"Appliances",category_safety:"Safety",category_lawn_garden:"Lawn & Garden",category_seasonal:"Seasonal",category_garage_vehicles:"Garage & Vehicles",category_pool_spa:"Pool & Spa",category_pest_control:"Pest Control",category_water_treatment:"Water Treatment",category_fireplace_chimney:"Fireplace & Chimney",category_septic_system:"Septic System",category_painting_finishes:"Painting & Finishes",tpl_title_change_hvac_filter:"Change HVAC filter",tpl_desc_change_hvac_filter:"Replace the HVAC air filter to maintain air quality and system efficiency.",tpl_title_clean_air_vents:"Clean air vents",tpl_desc_clean_air_vents:"Remove dust and debris from air vents and registers throughout the home.",tpl_title_inspect_ductwork:"Inspect ductwork",tpl_desc_inspect_ductwork:"Check ductwork for leaks, damage, or disconnected sections.",tpl_title_service_ac_unit:"Service AC unit",tpl_desc_service_ac_unit:"Schedule professional service for the air conditioning unit including refrigerant check.",tpl_title_check_thermostat_calibration:"Check thermostat calibration",tpl_desc_check_thermostat_calibration:"Verify thermostat reads the correct temperature and adjust if needed.",tpl_title_bleed_radiators:"Bleed radiators",tpl_desc_bleed_radiators:"Release trapped air from radiators to improve heating efficiency.",tpl_title_clean_condensate_drain_line:"Clean condensate drain line",tpl_desc_clean_condensate_drain_line:"Flush the AC condensate drain line with vinegar to prevent clogs.",tpl_title_check_for_leaks_under_sinks:"Check for leaks under sinks",tpl_desc_check_for_leaks_under_sinks:"Inspect under all sinks for signs of leaks, drips, or water damage.",tpl_title_flush_water_heater:"Flush water heater",tpl_desc_flush_water_heater:"Drain and flush the water heater to remove sediment buildup.",tpl_title_clean_faucet_aerators:"Clean faucet aerators",tpl_desc_clean_faucet_aerators:"Remove and clean faucet aerators to restore water flow and remove mineral deposits.",tpl_title_test_sump_pump:"Test sump pump",tpl_desc_test_sump_pump:"Pour water into the sump pit to verify the pump activates and drains properly.",tpl_title_inspect_washing_machine_hoses:"Inspect washing machine hoses",tpl_desc_inspect_washing_machine_hoses:"Check washing machine supply hoses for bulges, cracks, or leaks.",tpl_title_clean_garbage_disposal:"Clean garbage disposal",tpl_desc_clean_garbage_disposal:"Clean and deodorize the garbage disposal with ice and citrus peels.",tpl_title_check_toilet_components:"Check toilet components",tpl_desc_check_toilet_components:"Inspect toilet flappers, fill valves, and supply lines for wear or leaks.",tpl_title_test_gfci_outlets:"Test GFCI outlets",tpl_desc_test_gfci_outlets:"Press the test and reset buttons on all GFCI outlets to verify they trip properly.",tpl_title_check_electrical_panel:"Check electrical panel",tpl_desc_check_electrical_panel:"Inspect the electrical panel for signs of corrosion, overheating, or loose connections.",tpl_title_replace_smoke_detector_batteries:"Replace smoke detector batteries",tpl_desc_replace_smoke_detector_batteries:"Replace batteries in all smoke detectors even if they have not chirped.",tpl_title_test_carbon_monoxide_detectors:"Test carbon monoxide detectors",tpl_desc_test_carbon_monoxide_detectors:"Test all carbon monoxide detectors to confirm they are functioning correctly.",tpl_title_inspect_extension_cords:"Inspect extension cords",tpl_desc_inspect_extension_cords:"Check all extension cords for fraying, damage, or overloading.",tpl_title_clean_gutters:"Clean gutters",tpl_desc_clean_gutters:"Remove leaves and debris from gutters and downspouts to prevent water damage.",tpl_title_inspect_roof:"Inspect roof",tpl_desc_inspect_roof:"Check roof for missing, damaged, or curling shingles and signs of wear.",tpl_title_power_wash_siding:"Power wash siding",tpl_desc_power_wash_siding:"Power wash the exterior siding to remove dirt, mold, and mildew.",tpl_title_check_caulking_around_windows:"Check caulking around windows",tpl_desc_check_caulking_around_windows:"Inspect and replace deteriorated caulking around windows and door frames.",tpl_title_inspect_foundation:"Inspect foundation",tpl_desc_inspect_foundation:"Walk around the foundation looking for cracks, settling, or water intrusion.",tpl_title_clean_dryer_vent:"Clean dryer vent",tpl_desc_clean_dryer_vent:"Clean the exterior dryer vent duct to prevent lint buildup and fire hazard.",tpl_title_seal_driveway_cracks:"Seal driveway cracks",tpl_desc_seal_driveway_cracks:"Fill and seal cracks in the driveway to prevent water damage and further deterioration.",tpl_title_deep_clean_carpets:"Deep clean carpets",tpl_desc_deep_clean_carpets:"Steam clean or shampoo all carpeted areas to remove deep dirt and allergens.",tpl_title_clean_range_hood_filter:"Clean range hood filter",tpl_desc_clean_range_hood_filter:"Remove and clean the range hood grease filter in hot soapy water.",tpl_title_recaulk_bathroom:"Recaulk bathroom",tpl_desc_recaulk_bathroom:"Remove old caulk and apply fresh caulk around bathtub, shower, and sink edges.",tpl_title_check_window_locks:"Check window locks",tpl_desc_check_window_locks:"Test all window locks and latches to ensure they engage properly.",tpl_title_clean_drains:"Clean drains",tpl_desc_clean_drains:"Clear slow drains using a drain snake or enzyme-based cleaner.",tpl_title_lubricate_door_hinges:"Lubricate door hinges",tpl_desc_lubricate_door_hinges:"Apply lubricant to all door hinges to eliminate squeaks and ensure smooth operation.",tpl_title_clean_dishwasher:"Clean dishwasher",tpl_desc_clean_dishwasher:"Run an empty cycle with dishwasher cleaner and wipe down the door seal.",tpl_title_clean_washing_machine:"Clean washing machine",tpl_desc_clean_washing_machine:"Run a cleaning cycle with washing machine cleaner and wipe the gasket.",tpl_title_clean_refrigerator_coils:"Clean refrigerator coils",tpl_desc_clean_refrigerator_coils:"Vacuum or brush the condenser coils on the refrigerator to maintain efficiency.",tpl_title_replace_water_filter:"Replace water filter",tpl_desc_replace_water_filter:"Replace the refrigerator water filter cartridge for clean drinking water.",tpl_title_clean_oven:"Clean oven",tpl_desc_clean_oven:"Run the self-clean cycle or manually clean the oven interior.",tpl_title_defrost_freezer:"Defrost freezer",tpl_desc_defrost_freezer:"Defrost the freezer if ice buildup exceeds a quarter inch.",tpl_title_clean_dryer_lint_trap_deep:"Clean dryer lint trap deep",tpl_desc_clean_dryer_lint_trap_deep:"Remove the lint screen and vacuum the lint trap housing to improve airflow.",tpl_title_test_smoke_detectors:"Test smoke detectors",tpl_desc_test_smoke_detectors:"Press the test button on every smoke detector and replace any that fail.",tpl_title_check_fire_extinguisher_pressure:"Check fire extinguisher pressure",tpl_desc_check_fire_extinguisher_pressure:"Verify the pressure gauge on each fire extinguisher is in the green zone.",tpl_title_review_emergency_plan:"Review emergency plan",tpl_desc_review_emergency_plan:"Review and update the household emergency plan with all family members.",tpl_title_test_security_system:"Test security system",tpl_desc_test_security_system:"Run a full test of the home security system including all sensors and alarms.",tpl_title_check_first_aid_kit:"Check first aid kit",tpl_desc_check_first_aid_kit:"Inspect the first aid kit and replace any expired or used supplies.",tpl_title_inspect_fire_escape_routes:"Inspect fire escape routes",tpl_desc_inspect_fire_escape_routes:"Walk through all fire escape routes and ensure exits are clear and accessible.",tpl_title_mow_lawn:"Mow lawn",tpl_desc_mow_lawn:"Mow the lawn to the recommended height for the grass type.",tpl_title_fertilize_lawn:"Fertilize lawn",tpl_desc_fertilize_lawn:"Apply seasonal fertilizer to the lawn following product instructions.",tpl_title_sharpen_mower_blades:"Sharpen mower blades",tpl_desc_sharpen_mower_blades:"Remove and sharpen or replace lawn mower blades for a clean cut.",tpl_title_prune_shrubs:"Prune shrubs",tpl_desc_prune_shrubs:"Trim and shape shrubs and hedges to maintain appearance and plant health.",tpl_title_aerate_lawn:"Aerate lawn",tpl_desc_aerate_lawn:"Aerate the lawn to reduce soil compaction and improve root growth.",tpl_title_clean_outdoor_furniture:"Clean outdoor furniture",tpl_desc_clean_outdoor_furniture:"Wash and treat outdoor furniture to remove dirt, mold, and weather damage.",tpl_title_inspect_irrigation_system:"Inspect irrigation system",tpl_desc_inspect_irrigation_system:"Check sprinkler heads, drip lines, and timers for proper operation.",tpl_title_winterize_outdoor_faucets:"Winterize outdoor faucets",tpl_desc_winterize_outdoor_faucets:"Disconnect hoses, drain outdoor faucets, and install insulated covers.",tpl_title_service_snow_blower:"Service snow blower",tpl_desc_service_snow_blower:"Change oil, check belts, and test the snow blower before winter arrives.",tpl_title_reverse_ceiling_fan_direction:"Reverse ceiling fan direction",tpl_desc_reverse_ceiling_fan_direction:"Switch ceiling fan rotation direction for the current season.",tpl_title_check_weather_stripping:"Check weather stripping",tpl_desc_check_weather_stripping:"Inspect and replace worn weather stripping around doors and windows.",tpl_title_store_or_retrieve_seasonal_items:"Store or retrieve seasonal items",tpl_desc_store_or_retrieve_seasonal_items:"Rotate seasonal items in and out of storage as the season changes.",tpl_title_test_outdoor_lighting:"Test outdoor lighting",tpl_desc_test_outdoor_lighting:"Check all exterior lights, replace bulbs, and clean fixtures.",tpl_title_inspect_attic_insulation:"Inspect attic insulation",tpl_desc_inspect_attic_insulation:"Check attic insulation for settling, moisture, or pest damage before winter.",tpl_title_clean_window_screens:"Clean window screens",tpl_desc_clean_window_screens:"Remove window screens, wash with soapy water, and reinstall.",tpl_title_lubricate_garage_door:"Lubricate garage door",tpl_desc_lubricate_garage_door:"Apply lubricant to garage door tracks, rollers, hinges, and springs.",tpl_title_test_garage_door_auto_reverse:"Test garage door auto-reverse",tpl_desc_test_garage_door_auto_reverse:"Place an object under the garage door and verify it reverses when closing.",tpl_title_check_garage_door_weather_seal:"Check garage door weather seal",tpl_desc_check_garage_door_weather_seal:"Inspect the bottom seal and side weather stripping on the garage door.",tpl_title_organize_garage_storage:"Organize garage storage",tpl_desc_organize_garage_storage:"Declutter the garage, check for expired chemicals, and reorganize storage.",tpl_title_check_vehicle_tire_pressure:"Check vehicle tire pressure",tpl_desc_check_vehicle_tire_pressure:"Check and adjust tire pressure on all vehicles to the recommended PSI.",tpl_title_rotate_vehicle_tires:"Rotate vehicle tires",tpl_desc_rotate_vehicle_tires:"Rotate tires to ensure even wear and extend tire life.",tpl_title_change_engine_oil:"Change engine oil",tpl_desc_change_engine_oil:"Change engine oil and oil filter per manufacturer recommendations.",tpl_title_replace_windshield_wipers:"Replace windshield wipers",tpl_desc_replace_windshield_wipers:"Replace windshield wiper blades when streaking or skipping.",tpl_title_test_pool_water_chemistry:"Test pool water chemistry",tpl_desc_test_pool_water_chemistry:"Test pool pH, chlorine, alkalinity, and calcium hardness levels.",tpl_title_clean_pool_filter:"Clean pool filter",tpl_desc_clean_pool_filter:"Backwash or clean the pool filter cartridge to maintain proper filtration.",tpl_title_skim_and_vacuum_pool:"Skim and vacuum pool",tpl_desc_skim_and_vacuum_pool:"Skim debris from the surface and vacuum the pool floor.",tpl_title_inspect_pool_pump_and_motor:"Inspect pool pump and motor",tpl_desc_inspect_pool_pump_and_motor:"Check pool pump for leaks, unusual noise, and proper pressure readings.",tpl_title_shock_treat_pool:"Shock treat pool",tpl_desc_shock_treat_pool:"Add pool shock treatment to eliminate bacteria and restore water clarity.",tpl_title_clean_spa_filter:"Clean spa filter",tpl_desc_clean_spa_filter:"Remove, rinse, and deep clean the hot tub or spa filter cartridge.",tpl_title_drain_and_refill_spa:"Drain and refill spa",tpl_desc_drain_and_refill_spa:"Drain the hot tub completely, clean the shell, and refill with fresh water.",tpl_title_inspect_for_termites:"Inspect for termites",tpl_desc_inspect_for_termites:"Check foundation, wood structures, and crawl spaces for signs of termite activity.",tpl_title_refresh_ant_and_roach_bait_stations:"Refresh ant and roach bait stations",tpl_desc_refresh_ant_and_roach_bait_stations:"Replace indoor and outdoor pest bait stations with fresh bait.",tpl_title_seal_entry_points:"Seal entry points",tpl_desc_seal_entry_points:"Inspect and seal gaps around pipes, vents, and the foundation where pests can enter.",tpl_title_check_attic_for_rodents:"Check attic for rodents",tpl_desc_check_attic_for_rodents:"Inspect attic for droppings, nesting materials, or chewed wiring from rodents.",tpl_title_clean_bird_feeders:"Clean bird feeders",tpl_desc_clean_bird_feeders:"Disassemble and scrub bird feeders to prevent mold and disease spread.",tpl_title_replace_whole_house_water_filter:"Replace whole-house water filter",tpl_desc_replace_whole_house_water_filter:"Replace the sediment and carbon filter cartridges in the whole-house water filtration system.",tpl_title_add_salt_to_water_softener:"Add salt to water softener",tpl_desc_add_salt_to_water_softener:"Check and refill salt in the water softener brine tank.",tpl_title_clean_water_softener_brine_tank:"Clean water softener brine tank",tpl_desc_clean_water_softener_brine_tank:"Empty, scrub, and refill the brine tank to remove salt bridges and sediment.",tpl_title_replace_reverse_osmosis_filters:"Replace reverse osmosis filters",tpl_desc_replace_reverse_osmosis_filters:"Replace pre-filter, post-filter, and membrane in the RO drinking water system.",tpl_title_test_well_water_quality:"Test well water quality",tpl_desc_test_well_water_quality:"Send a water sample to a lab for bacteria, nitrates, and mineral testing.",tpl_title_schedule_chimney_sweep:"Schedule chimney sweep",tpl_desc_schedule_chimney_sweep:"Hire a professional to clean the chimney flue and remove creosote buildup.",tpl_title_inspect_chimney_cap_and_flashing:"Inspect chimney cap and flashing",tpl_desc_inspect_chimney_cap_and_flashing:"Check the chimney cap for damage and inspect flashing for gaps or rust.",tpl_title_clean_fireplace_firebox:"Clean fireplace firebox",tpl_desc_clean_fireplace_firebox:"Remove ash buildup from the firebox and inspect firebrick for cracks.",tpl_title_check_fireplace_damper:"Check fireplace damper",tpl_desc_check_fireplace_damper:"Open and close the fireplace damper to ensure it moves freely and seals properly.",tpl_title_pump_septic_tank:"Pump septic tank",tpl_desc_pump_septic_tank:"Schedule professional septic tank pumping to prevent overflow and drain field damage.",tpl_title_inspect_septic_drain_field:"Inspect septic drain field",tpl_desc_inspect_septic_drain_field:"Walk the drain field area checking for wet spots, odors, or lush grass patches.",tpl_title_add_septic_treatment:"Add septic treatment",tpl_desc_add_septic_treatment:"Add enzyme-based septic treatment to maintain healthy bacteria levels in the tank.",tpl_title_touch_up_interior_paint:"Touch up interior paint",tpl_desc_touch_up_interior_paint:"Inspect walls for scuffs, nail holes, and chips. Touch up with matching paint.",tpl_title_inspect_exterior_paint:"Inspect exterior paint",tpl_desc_inspect_exterior_paint:"Check exterior paint for peeling, cracking, or fading and schedule repainting if needed.",tpl_title_refinish_deck_or_porch:"Refinish deck or porch",tpl_desc_refinish_deck_or_porch:"Sand, stain, or seal the deck or porch to protect wood from weather damage.",tpl_title_seal_grout_lines:"Seal grout lines",tpl_desc_seal_grout_lines:"Apply grout sealer to tile floors, backsplash, and shower areas to prevent staining."},vt={config:ut,options:gt,panel:mt};var fe={en:ve},O="en";function n(r,t=O){return((fe[t]||fe[O]).panel||fe[O].panel)[r]||r}function be(r){return r.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Ke(r,t=O){let e=`tpl_title_${be(r.title)}`,s=n(e,t);return s===e?r.title:s}function Qe(r,t=O){let e=`tpl_desc_${be(r.title)}`,s=n(e,t);return s===e?r.description||"":s}function Ge(r,t=O){let e=`category_${be(r)}`,s=n(e,t);return s===e?r:s}var Je="ha_home_maintenance_sort",y=class extends b{constructor(){super(...arguments);this.narrow=!1;this._tasks=[];this._labels=[];this._searchQuery="";this._selectedLabels=new Set;this._sortColumn="title";this._sortDirection="asc";this._loading=!0}_loadSortPreference(){try{let e=localStorage.getItem(Je);if(e){let{column:s,direction:i}=JSON.parse(e);s&&(this._sortColumn=s),i&&(this._sortDirection=i)}}catch{}}_saveSortPreference(){try{localStorage.setItem(Je,JSON.stringify({column:this._sortColumn,direction:this._sortDirection}))}catch{}}static get styles(){return[N,w`
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
          border-color: var(--primary-color);
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
          border-color: var(--primary-color);
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
          border-color: var(--primary-color);
        }
      `]}connectedCallback(){super.connectedCallback(),this._loadSortPreference(),this._loadData()}async _loadData(){this._loading=!0;try{let[e,s]=await Promise.all([J(this.hass),ae(this.hass)]);this._tasks=e,this._labels=s}catch(e){console.error("Failed to load data:",e),this._tasks=[],this._labels=[]}this._loading=!1}async _loadTasks(){try{this._tasks=await J(this.hass)}catch(e){console.error("Failed to load tasks:",e),this._tasks=[]}}get _filteredTasks(){let e=this._tasks,s=this._searchQuery.toLowerCase().trim();return s&&(e=e.filter(i=>i.title.toLowerCase().includes(s)||i.description&&i.description.toLowerCase().includes(s))),this._selectedLabels.size>0&&(e=e.filter(i=>i.labels&&i.labels.some(a=>this._selectedLabels.has(a)))),e}get _sortedTasks(){let e=[...this._filteredTasks],s=this._sortDirection==="asc"?1:-1;return e.sort((i,a)=>{let o=0;switch(this._sortColumn){case"title":o=i.title.localeCompare(a.title);break;case"interval":o=this._intervalToDays(i)-this._intervalToDays(a);break;case"last_performed":{let c=i.last_performed?this._parseLocalDate(i.last_performed).getTime():0,l=a.last_performed?this._parseLocalDate(a.last_performed).getTime():0;o=c-l;break}case"next_due":{let c=this._getNextDueTimestamp(i),l=this._getNextDueTimestamp(a);o=c-l;break}case"labels":{let c=i.labels?.length?i.labels.map(u=>this._getLabelName(u)).sort().join(", "):"",l=a.labels?.length?a.labels.map(u=>this._getLabelName(u)).sort().join(", "):"";o=c.localeCompare(l);break}case"status":{let c={overdue:0,due_soon:1,ok:2};o=(c[this._getStatus(i)]??3)-(c[this._getStatus(a)]??3);break}}return o*s}),e}_intervalToDays(e){let s=e.interval_value;switch(e.interval_type){case"days":return s;case"weeks":return s*7;case"months":return s*30;default:return s}}_getNextDueTimestamp(e){if(!e.last_performed)return 0;let s=this._parseLocalDate(e.last_performed),i=new Date(s);switch(e.interval_type){case"days":i.setDate(i.getDate()+e.interval_value);break;case"weeks":i.setDate(i.getDate()+e.interval_value*7);break;case"months":i.setMonth(i.getMonth()+e.interval_value);break}return i.getTime()}_getNextDueString(e){if(!e.last_performed)return n("never",this.hass?.language);let s=this._getNextDueTimestamp(e);return new Date(s).toLocaleDateString()}_getStatus(e){if(!e.last_performed)return"overdue";let s=Date.now(),i=this._getNextDueTimestamp(e);if(i<=s)return"overdue";let a=7*24*60*60*1e3;return i-s<=a?"due_soon":"ok"}_getStatusLabel(e){let s=this.hass?.language;switch(e){case"overdue":return n("overdue",s);case"due_soon":return n("due_soon",s);case"ok":return n("ok",s)}}_getStatusClass(e){switch(e){case"overdue":return"status-overdue";case"due_soon":return"status-due-soon";case"ok":return"status-ok"}}_formatInterval(e){let s=n(e.interval_type,this.hass?.language);return`${e.interval_value} ${s.toLowerCase()}`}_parseLocalDate(e){let[s,i,a]=e.split("-").map(Number);return new Date(s,i-1,a)}_formatDate(e){return e?this._parseLocalDate(e).toLocaleDateString():n("never",this.hass?.language)}_sort(e){this._sortColumn===e?this._sortDirection=this._sortDirection==="asc"?"desc":"asc":(this._sortColumn=e,this._sortDirection="asc"),this._saveSortPreference()}_sortIndicator(e){return this._sortColumn!==e?"":this._sortDirection==="asc"?" \u25B2":" \u25BC"}async _completeTask(e){try{await qe(this.hass,e.id),await this._loadTasks()}catch(s){console.error("Failed to complete task:",s)}}_editTask(e){this.dispatchEvent(new CustomEvent("navigate-to-edit",{bubbles:!0,composed:!0,detail:{taskId:e.id}}))}async _deleteTask(e){let s=n("confirm_delete",this.hass?.language);if(window.confirm(s))try{await We(this.hass,e.id),await this._loadTasks()}catch(i){console.error("Failed to delete task:",i)}}_navigateToCreate(){this.dispatchEvent(new CustomEvent("navigate-to-create",{bubbles:!0,composed:!0}))}_handleSearchInput(e){this._searchQuery=e.target.value}_toggleLabelFilter(e){let s=new Set(this._selectedLabels);s.has(e)?s.delete(e):s.add(e),this._selectedLabels=s,this.requestUpdate()}_clearLabelFilters(){this._selectedLabels=new Set,this.requestUpdate()}_handleSortChange(e){let s=e.target.value,[i,a]=s.split("-");this._sortColumn=i,this._sortDirection=a,this._saveSortPreference()}_getLabelName(e){let s=this._labels.find(i=>i.label_id===e);return s?s.name:e}_getLabel(e){return this._labels.find(s=>s.label_id===e)}_labelChipStyle(e){return se(e?.color)}_renderLabelChip(e){let s=this._getLabel(e),i=s?s.name:e,a=this._labelChipStyle(s);return p`<span class="label-chip" style=${a}>
      ${s?.icon?p`<ha-icon .icon=${s.icon}></ha-icon>`:h}${i}
    </span>`}_renderFilterChip(e){let s=this._labelChipStyle(e),i=this._selectedLabels.has(e.label_id),a=i&&e.color?ie(e.color):i?"":s;return p`<button
      class="filter-chip ${i?"active":""}"
      style=${i?a:s}
      @click=${()=>this._toggleLabelFilter(e.label_id)}
    >
      ${e.icon?p`<ha-icon .icon=${e.icon}></ha-icon>`:h}${e.name}
    </button>`}_navigateToTemplates(){this.dispatchEvent(new CustomEvent("navigate-to-templates",{bubbles:!0,composed:!0}))}render(){return this._loading?p`<div class="loading">${n("loading",this.hass?.language)}</div>`:p`
      <div class="task-list">
        <div class="page-header">
          <h1>${n("panel_title",this.hass?.language)}</h1>
          <div class="header-actions">
            <button class="btn" @click=${this._navigateToTemplates}>
              ${n("browse_templates",this.hass?.language)}
            </button>
            <button class="btn primary" @click=${this._navigateToCreate}>
              ${n("add_task",this.hass?.language)}
            </button>
          </div>
        </div>

        ${this._tasks.length===0?this._renderEmptyState():p`
              ${this._renderFilterBar()}
              ${this._renderTable()}
            `}
      </div>
    `}_renderEmptyState(){return p`
      <div class="empty-state">
        <p>${n("no_tasks",this.hass?.language)}</p>
        <div class="empty-actions">
          <button class="btn" @click=${this._navigateToTemplates}>
            ${n("browse_templates",this.hass?.language)}
          </button>
          <button class="btn primary" @click=${this._navigateToCreate}>
            ${n("add_task",this.hass?.language)}
          </button>
        </div>
      </div>
    `}_renderFilterBar(){let e=new Set;for(let o of this._tasks)if(o.labels)for(let c of o.labels)e.add(c);let s=new Set(this._labels.map(o=>o.label_id)),i=this._labels.filter(o=>e.has(o.label_id)),a=[...e].filter(o=>!s.has(o));return p`
      <div class="filter-bar">
        <input
          type="text"
          placeholder="${n("search_tasks",this.hass?.language)}"
          .value=${this._searchQuery}
          @input=${this._handleSearchInput}
        />
        ${i.length>0||a.length>0?p`
              <div class="filter-chips">
                ${i.map(o=>this._renderFilterChip(o))}
                ${a.map(o=>{let c=this._selectedLabels.has(o);return p`<button
                    class="filter-chip ${c?"active":""}"
                    @click=${()=>this._toggleLabelFilter(o)}
                  >${o}</button>`})}
                ${this._selectedLabels.size>0?p`<button class="filter-chip clear-chip" @click=${this._clearLabelFilters}>${n("clear",this.hass?.language)}</button>`:h}
              </div>
            `:h}
        <select class="sort-select" @change=${this._handleSortChange}>
          <option value="title-asc" ?selected=${this._sortColumn==="title"&&this._sortDirection==="asc"}>
            ${n("title",this.hass?.language)} ▲
          </option>
          <option value="title-desc" ?selected=${this._sortColumn==="title"&&this._sortDirection==="desc"}>
            ${n("title",this.hass?.language)} ▼
          </option>
          <option value="status-asc" ?selected=${this._sortColumn==="status"&&this._sortDirection==="asc"}>
            ${n("status",this.hass?.language)} ▲
          </option>
          <option value="status-desc" ?selected=${this._sortColumn==="status"&&this._sortDirection==="desc"}>
            ${n("status",this.hass?.language)} ▼
          </option>
          <option value="interval-asc" ?selected=${this._sortColumn==="interval"&&this._sortDirection==="asc"}>
            ${n("interval",this.hass?.language)} ▲
          </option>
          <option value="interval-desc" ?selected=${this._sortColumn==="interval"&&this._sortDirection==="desc"}>
            ${n("interval",this.hass?.language)} ▼
          </option>
          <option value="last_performed-asc" ?selected=${this._sortColumn==="last_performed"&&this._sortDirection==="asc"}>
            ${n("last_performed",this.hass?.language)} ▲
          </option>
          <option value="last_performed-desc" ?selected=${this._sortColumn==="last_performed"&&this._sortDirection==="desc"}>
            ${n("last_performed",this.hass?.language)} ▼
          </option>
          <option value="next_due-asc" ?selected=${this._sortColumn==="next_due"&&this._sortDirection==="asc"}>
            ${n("next_due",this.hass?.language)} ▲
          </option>
          <option value="next_due-desc" ?selected=${this._sortColumn==="next_due"&&this._sortDirection==="desc"}>
            ${n("next_due",this.hass?.language)} ▼
          </option>
        </select>
      </div>
    `}_renderTable(){return p`
      <div class="task-table-header">
        <div></div>
        <div class="col-header" @click=${()=>this._sort("title")}>
          ${n("title",this.hass?.language)}${this._sortIndicator("title")}
        </div>
        <div class="col-header" @click=${()=>this._sort("interval")}>
          ${n("interval",this.hass?.language)}${this._sortIndicator("interval")}
        </div>
        <div class="col-header hide-medium" @click=${()=>this._sort("last_performed")}>
          ${n("last_performed",this.hass?.language)}${this._sortIndicator("last_performed")}
        </div>
        <div class="col-header hide-medium" @click=${()=>this._sort("next_due")}>
          ${n("next_due",this.hass?.language)}${this._sortIndicator("next_due")}
        </div>
        <div class="col-header hide-medium" @click=${()=>this._sort("labels")}>
          ${n("labels",this.hass?.language)}${this._sortIndicator("labels")}
        </div>
        <div class="col-header" @click=${()=>this._sort("status")}>
          ${n("status",this.hass?.language)}${this._sortIndicator("status")}
        </div>
        <div>${n("actions",this.hass?.language)}</div>
      </div>

      ${this._sortedTasks.map(e=>this._renderTaskRow(e))}
    `}_renderTaskRow(e){let s=this._getStatus(e),i=this._getStatusLabel(s),a=this._getStatusClass(s);return p`
      <div class="task-table-row">
        <div class="task-icon">
          <ha-icon .icon=${e.icon||"mdi:wrench"}></ha-icon>
        </div>
        <div class="task-title">
          ${e.title}
          ${e.description?p`<div class="subtitle">${e.description}</div>`:h}
        </div>
        <div>${this._formatInterval(e)}</div>
        <div class="hide-medium">${this._formatDate(e.last_performed)}</div>
        <div class="hide-medium">${this._getNextDueString(e)}</div>
        <div class="hide-medium task-labels">
          ${e.labels&&e.labels.length>0?e.labels.map(o=>this._renderLabelChip(o)):h}
        </div>
        <div>
          <span class="status-indicator ${a}">${i}</span>
        </div>
        <div class="action-buttons">
          <button
            class="action-btn complete"
            title="${n("complete",this.hass?.language)}"
            @click=${()=>this._completeTask(e)}
          >
            <ha-icon .icon=${"mdi:check"}></ha-icon>
          </button>
          <button
            class="action-btn edit"
            title="${n("edit",this.hass?.language)}"
            @click=${()=>this._editTask(e)}
          >
            <ha-icon .icon=${"mdi:pencil"}></ha-icon>
          </button>
          <button
            class="action-btn delete"
            title="${n("delete",this.hass?.language)}"
            @click=${()=>this._deleteTask(e)}
          >
            <ha-icon .icon=${"mdi:delete"}></ha-icon>
          </button>
        </div>
      </div>
    `}};d([f({attribute:!1})],y.prototype,"hass",2),d([f({type:Boolean})],y.prototype,"narrow",2),d([_()],y.prototype,"_tasks",2),d([_()],y.prototype,"_labels",2),d([_()],y.prototype,"_searchQuery",2),d([_()],y.prototype,"_selectedLabels",2),d([_()],y.prototype,"_sortColumn",2),d([_()],y.prototype,"_sortDirection",2),d([_()],y.prototype,"_loading",2),y=d([E("task-list-view")],y);var v=class extends b{constructor(){super(...arguments);this.narrow=!1;this.taskId=null;this.templateData=null;this._title="";this._description="";this._intervalValue=30;this._intervalType="days";this._lastPerformed="";this._tagId="";this._icon="mdi:toolbox";this._labels=[];this._notifyWhenOverdue=!1;this._trackHistory=!1;this._completionHistory=[];this._loading=!1;this._showAdvanced=!1;this._tags=[];this._availableLabels=[]}static get styles(){return[N,w`
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
        .icon-preview {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .icon-preview input {
          flex: 1;
        }
        .icon-preview ha-icon {
          --mdc-icon-size: 24px;
          color: var(--secondary-text-color);
          flex-shrink: 0;
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
          border-color: var(--primary-color);
        }
        .custom-label-hint {
          margin: 6px 0 0;
          font-size: 12px;
          color: var(--secondary-text-color);
          line-height: 1.4;
        }
      `]}async firstUpdated(){this._loading=!0;try{await Promise.all([this._loadTags(),this._loadLabels()]),this.taskId?await this._loadExistingTask():this.templateData&&this._populateFromTemplate(this.templateData)}finally{this._loading=!1}}async _loadTags(){try{this._tags=await Fe(this.hass)}catch{this._tags=[]}}async _loadLabels(){try{this._availableLabels=await ae(this.hass)}catch{this._availableLabels=[]}}async _loadExistingTask(){if(this.taskId)try{let e=await Ue(this.hass,this.taskId);this._title=e.title,this._description=e.description||"",this._intervalValue=e.interval_value,this._intervalType=e.interval_type,this._lastPerformed=e.last_performed||"",this._tagId=e.tag_id||"",this._icon=e.icon||"mdi:toolbox",this._labels=e.labels||[],this._notifyWhenOverdue=e.notify_when_overdue||!1,this._trackHistory=e.track_history||!1,this._completionHistory=e.completion_history||[]}catch(e){console.error("Failed to load task:",e)}}_populateFromTemplate(e){this._title=e.title,this._description=e.description||"",this._intervalValue=e.interval_value,this._intervalType=e.interval_type,this._icon=e.icon||"mdi:toolbox"}_handleTitleInput(e){this._title=e.target.value}_handleDescriptionInput(e){this._description=e.target.value}_handleIntervalValueInput(e){this._intervalValue=parseInt(e.target.value,10)||1}_handleIntervalTypeChange(e){this._intervalType=e.target.value}_handleLastPerformedInput(e){this._lastPerformed=e.target.value}_handleTagChange(e){this._tagId=e.target.value}_handleIconInput(e){this._icon=e.target.value}_handleNotifyToggle(e){this._notifyWhenOverdue=e.target.checked}_handleTrackHistoryToggle(e){this._trackHistory=e.target.checked}_toggleLabel(e){this._labels.includes(e)?this._labels=this._labels.filter(s=>s!==e):this._labels=[...this._labels,e]}get _customLabels(){let e=new Set(this._availableLabels.map(s=>s.label_id));return this._labels.filter(s=>!e.has(s))}_removeCustomLabel(e){this._labels=this._labels.filter(s=>s!==e)}_handleCustomLabelKeydown(e){if(e.key==="Enter"||e.key===","){e.preventDefault();let s=e.target,i=s.value.trim();i&&!this._labels.includes(i)&&(this._labels=[...this._labels,i]),s.value=""}}_labelChipStyle(e){return se(e.color)}_labelChipSelectedStyle(e){return ie(e.color)}_toggleAdvanced(){this._showAdvanced=!this._showAdvanced}_validate(){return!(!this._title.trim()||!this._intervalValue||this._intervalValue<1)}async _save(){if(this._validate()){this._loading=!0;try{let e={title:this._title.trim(),description:this._description.trim(),interval_value:this._intervalValue,interval_type:this._intervalType,last_performed:this._lastPerformed||null,tag_id:this._tagId||null,icon:this._icon||"mdi:toolbox",labels:this._labels,notify_when_overdue:this._notifyWhenOverdue,track_history:this._trackHistory};this.taskId?await je(this.hass,this.taskId,e):await re(this.hass,e),this._navigateToList()}catch(e){console.error("Failed to save task:",e)}finally{this._loading=!1}}}_cancel(){this._navigateToList()}_navigateToList(){this.dispatchEvent(new CustomEvent("navigate-to-list",{bubbles:!0,composed:!0}))}render(){if(this._loading)return p`
        <div class="loading-overlay">${n("loading",this.hass?.language)}</div>
      `;let e=!!this.taskId,s=e?n("edit_task",this.hass?.language):n("create_task",this.hass?.language);return p`
      <div>
        <div class="page-header">
          <button class="back-btn action-btn" @click=${this._cancel}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <h1>${s}</h1>
        </div>

        <div class="form-container">
          <div class="form-field">
            <label>${n("title",this.hass?.language)} *</label>
            <input
              type="text"
              .value=${this._title}
              @input=${this._handleTitleInput}
              placeholder=${n("title",this.hass?.language)}
              required
            />
            ${!this._title.trim()&&this._title!==""?p`<div class="error-message">${n("required_field",this.hass?.language)}</div>`:h}
          </div>

          <div class="form-field">
            <label>${n("description",this.hass?.language)}</label>
            <textarea
              .value=${this._description}
              @input=${this._handleDescriptionInput}
              placeholder=${n("description",this.hass?.language)}
            ></textarea>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>${n("interval_value",this.hass?.language)} *</label>
              <input
                type="number"
                min="1"
                .value=${String(this._intervalValue)}
                @input=${this._handleIntervalValueInput}
                required
              />
            </div>
            <div class="form-field">
              <label>${n("interval_type",this.hass?.language)}</label>
              <select .value=${this._intervalType} @change=${this._handleIntervalTypeChange}>
                <option value="days" ?selected=${this._intervalType==="days"}>
                  ${n("days",this.hass?.language)}
                </option>
                <option value="weeks" ?selected=${this._intervalType==="weeks"}>
                  ${n("weeks",this.hass?.language)}
                </option>
                <option value="months" ?selected=${this._intervalType==="months"}>
                  ${n("months",this.hass?.language)}
                </option>
              </select>
            </div>
          </div>

          <div class="form-field">
            <label>${n("last_performed",this.hass?.language)}</label>
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
              ${n("notify_when_overdue",this.hass?.language)}
            </label>
          </div>

          <div class="form-field">
            <label class="toggle-label">
              <input
                type="checkbox"
                .checked=${this._trackHistory}
                @change=${this._handleTrackHistoryToggle}
              />
              ${n("track_history",this.hass?.language)}
            </label>
          </div>

          ${e&&(this._trackHistory||this._completionHistory.length>0)?p`
                <div class="history-section">
                  <h3>${n("completion_history",this.hass?.language)}</h3>
                  ${this._completionHistory.length>0?p`<ul class="history-list">
                        ${this._completionHistory.slice().reverse().slice(0,20).map(i=>p`<li>${new Date(i).toLocaleString()}</li>`)}
                      </ul>`:p`<p class="history-empty">${n("no_history",this.hass?.language)}</p>`}
                </div>
              `:h}

          <div class="expansion-panel">
            <div class="expansion-header" @click=${this._toggleAdvanced}>
              ${n("advanced_settings",this.hass?.language)}
              <ha-icon
                icon=${this._showAdvanced?"mdi:chevron-up":"mdi:chevron-down"}
              ></ha-icon>
            </div>
            ${this._showAdvanced?p`
                  <div class="expansion-content">
                    <div class="form-field">
                      <label>${n("tag",this.hass?.language)}</label>
                      <select .value=${this._tagId} @change=${this._handleTagChange}>
                        <option value="">-- ${n("none_option",this.hass?.language)} --</option>
                        ${this._tags.map(i=>p`
                            <option value=${i.id} ?selected=${this._tagId===i.id}>
                              ${i.name||i.id}
                            </option>
                          `)}
                      </select>
                    </div>

                    <div class="form-field">
                      <label>${n("icon",this.hass?.language)}</label>
                      <div class="icon-preview">
                        <input
                          type="text"
                          .value=${this._icon}
                          @input=${this._handleIconInput}
                          placeholder="mdi:toolbox"
                        />
                        <ha-icon .icon=${this._icon}></ha-icon>
                      </div>
                    </div>

                    <div class="form-field">
                      <label>${n("labels",this.hass?.language)}</label>
                      ${this._availableLabels.length>0?p`<div class="label-picker">
                            ${this._availableLabels.map(i=>{let a=this._labels.includes(i.label_id),o=a?this._labelChipSelectedStyle(i):this._labelChipStyle(i);return p`<button
                                type="button"
                                class="label-picker-chip ${a?"selected":""}"
                                style=${o}
                                @click=${()=>this._toggleLabel(i.label_id)}
                              >
                                ${i.icon?p`<ha-icon .icon=${i.icon}></ha-icon>`:h}
                                ${i.name}
                              </button>`})}
                          </div>`:h}
                      <div class="custom-labels-row">
                        ${this._customLabels.map(i=>p`<span class="label-chip custom-label-chip">
                            ${i}<button type="button" class="remove-label-btn" @click=${()=>this._removeCustomLabel(i)}>×</button>
                          </span>`)}
                        <input
                          type="text"
                          class="custom-label-input"
                          placeholder="${n("add_custom_label_placeholder",this.hass?.language)}"
                          @keydown=${this._handleCustomLabelKeydown}
                        />
                      </div>
                      <p class="custom-label-hint">${n("custom_label_hint",this.hass?.language)}</p>
                    </div>
                  </div>
                `:h}
          </div>

          <div class="form-actions">
            <button class="btn" @click=${this._cancel} ?disabled=${this._loading}>
              ${n("cancel",this.hass?.language)}
            </button>
            <button class="btn primary" @click=${this._save} ?disabled=${this._loading}>
              ${n("save",this.hass?.language)}
            </button>
          </div>
        </div>
      </div>
    `}};d([f({attribute:!1})],v.prototype,"hass",2),d([f({type:Boolean})],v.prototype,"narrow",2),d([f({type:String})],v.prototype,"taskId",2),d([f({attribute:!1})],v.prototype,"templateData",2),d([_()],v.prototype,"_title",2),d([_()],v.prototype,"_description",2),d([_()],v.prototype,"_intervalValue",2),d([_()],v.prototype,"_intervalType",2),d([_()],v.prototype,"_lastPerformed",2),d([_()],v.prototype,"_tagId",2),d([_()],v.prototype,"_icon",2),d([_()],v.prototype,"_labels",2),d([_()],v.prototype,"_notifyWhenOverdue",2),d([_()],v.prototype,"_trackHistory",2),d([_()],v.prototype,"_completionHistory",2),d([_()],v.prototype,"_loading",2),d([_()],v.prototype,"_showAdvanced",2),d([_()],v.prototype,"_tags",2),d([_()],v.prototype,"_availableLabels",2),v=d([E("task-form-view")],v);var x=class extends b{constructor(){super(...arguments);this.narrow=!1;this._templates=[];this._searchQuery="";this._expandedCategories=new Set;this._importPreview=[];this._showImportDialog=!1;this._importing=!1;this._importResult=""}static get styles(){return[N,w`
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
          color: var(--primary-color);
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
      `]}connectedCallback(){super.connectedCallback(),this._loadTemplates()}async _loadTemplates(){try{this._templates=await Be(this.hass);let e=new Set(this._templates.map(s=>s.category));this._expandedCategories=e}catch(e){console.error("Failed to load templates:",e),this._templates=[]}}_getFilteredTemplates(){if(!this._searchQuery.trim())return this._templates;let e=this._searchQuery.toLowerCase().trim();return this._templates.filter(s=>s.title.toLowerCase().includes(e)||s.description&&s.description.toLowerCase().includes(e))}_groupByCategory(e){let s={};for(let a of e){let o=a.category||"Other";s[o]||(s[o]=[]),s[o].push(a)}let i={};for(let a of Object.keys(s).sort())i[a]=s[a];return i}_toggleCategory(e){let s=new Set(this._expandedCategories);s.has(e)?s.delete(e):s.add(e),this._expandedCategories=s}_selectTemplate(e){this.dispatchEvent(new CustomEvent("select-template",{detail:{template:e},bubbles:!0,composed:!0}))}_createFromScratch(){this.dispatchEvent(new CustomEvent("navigate-to-create",{bubbles:!0,composed:!0}))}_triggerFileInput(){let e=this.shadowRoot?.querySelector('input[type="file"]');e&&(e.value="",e.click())}_handleFileSelect(e){let i=e.target.files?.[0];if(!i)return;let a=new FileReader;a.onload=()=>{let o=a.result,c=this._parseCsv(o);if(c.length===0){this._importResult="No valid rows found in CSV.",this._showImportDialog=!0;return}this._importPreview=c,this._importResult="",this._showImportDialog=!0},a.onerror=()=>{this._importResult="Failed to read file.",this._showImportDialog=!0},a.readAsText(i)}_parseCsv(e){let s=e.split(/\r?\n/).filter(o=>o.trim());if(s.length<2)return[];let i=this._parseCsvLine(s[0]).map(o=>o.trim().toLowerCase());if(!i.includes("title"))return[];let a=[];for(let o=1;o<s.length;o++){let c=this._parseCsvLine(s[o]),l={};for(let u=0;u<i.length;u++)l[i[u]]=(c[u]||"").trim();l.title&&a.push(l)}return a}_parseCsvLine(e){let s=[],i="",a=!1;for(let o=0;o<e.length;o++){let c=e[o];a?c==='"'?o+1<e.length&&e[o+1]==='"'?(i+='"',o++):a=!1:i+=c:c==='"'?a=!0:c===","?(s.push(i),i=""):i+=c}return s.push(i),s}async _doImport(){this._importing=!0,this._importResult="";let e=0,s=0;for(let i of this._importPreview)try{let a={title:i.title,description:i.description||"",interval_value:parseInt(i.interval_value,10)||30,interval_type:i.interval_type||"days",icon:i.icon||"mdi:toolbox",last_performed:i.last_performed||null};await re(this.hass,a),e++}catch{s++}this._importing=!1,s===0?this._importResult=`Successfully imported ${e} task${e!==1?"s":""}.`:this._importResult=`Imported ${e}, failed ${s}.`,this._importPreview=[]}_closeImportDialog(){this._showImportDialog=!1,this._importPreview=[],this._importResult=""}async _exportCsv(){let e;try{e=await J(this.hass)}catch{return}let s=["title","description","interval_value","interval_type","last_performed","icon","labels","notify_when_overdue"],i=g=>g.includes(",")||g.includes('"')||g.includes(`
`)?`"${g.replace(/"/g,'""')}"`:g,a=e.map(g=>[i(g.title),i(g.description||""),String(g.interval_value),g.interval_type,g.last_performed||"",g.icon||"",i((g.labels||[]).join("; ")),g.notify_when_overdue?"true":"false"].join(",")),o=[s.join(","),...a].join(`
`),c=new Blob([o],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(c),u=document.createElement("a");u.href=l,u.download="home_maintenance_tasks.csv",u.click(),URL.revokeObjectURL(l)}_goBack(){this.dispatchEvent(new CustomEvent("navigate-to-list",{bubbles:!0,composed:!0}))}_onSearchInput(e){this._searchQuery=e.target.value}render(){let e=this._getFilteredTemplates(),s=this._groupByCategory(e),i=Object.keys(s).length>0;return p`
      <div>
        <div class="page-header">
          <button class="back-btn" @click=${this._goBack}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <h1>${n("choose_template",this.hass?.language)}</h1>
        </div>

        <div class="search-and-actions">
          <input
            class="search-bar"
            type="text"
            .placeholder=${n("search_templates",this.hass?.language)}
            .value=${this._searchQuery}
            @input=${this._onSearchInput}
          />
          <button class="btn" @click=${this._exportCsv}>
            <ha-icon icon="mdi:file-download-outline"></ha-icon>
            ${n("export_csv",this.hass?.language)}
          </button>
          <button class="btn" @click=${this._triggerFileInput}>
            <ha-icon icon="mdi:file-upload-outline"></ha-icon>
            ${n("import_csv",this.hass?.language)}
          </button>
          <button class="btn primary" @click=${this._createFromScratch}>
            ${n("create_from_scratch",this.hass?.language)}
          </button>
        </div>
        <input
          type="file"
          accept=".csv,text/csv"
          @change=${this._handleFileSelect}
        />

        ${i?p`
              ${Object.entries(s).map(([a,o])=>{let c=this._expandedCategories.has(a);return p`
                  <div class="template-category">
                    <h2 @click=${()=>this._toggleCategory(a)}>
                      ${Ge(a,this.hass?.language)}
                      <ha-icon
                        icon=${c?"mdi:chevron-up":"mdi:chevron-down"}
                      ></ha-icon>
                      <span class="category-count"
                        >(${o.length})</span
                      >
                    </h2>
                    ${c?p`
                          <div class="template-grid">
                            ${o.map(l=>p`
                                <div
                                  class="template-card"
                                  @click=${()=>this._selectTemplate(l)}
                                >
                                  <div class="template-header">
                                    <ha-icon
                                      .icon=${l.icon}
                                    ></ha-icon>
                                    <span class="template-title"
                                      >${Ke(l,this.hass?.language)}</span
                                    >
                                  </div>
                                  <div class="template-desc">
                                    ${Qe(l,this.hass?.language)}
                                  </div>
                                  <div class="template-interval">
                                    Every ${l.interval_value}
                                    ${n(l.interval_type,this.hass?.language).toLowerCase()}
                                  </div>
                                </div>
                              `)}
                          </div>
                        `:h}
                  </div>
                `})}
            `:p`
              <div class="empty-state">
                ${n("no_results",this.hass?.language)}
              </div>
            `}

        ${this._showImportDialog?this._renderImportDialog():h}
      </div>
    `}_renderImportDialog(){let e=["title","description","interval_value","interval_type","last_performed","icon"],s=this._importPreview.length>0;return p`
      <div class="import-overlay" @click=${this._closeImportDialog}>
        <div class="import-dialog" @click=${i=>i.stopPropagation()}>
          <h2>${n("import_csv",this.hass?.language)}</h2>
          <div class="import-info">
            ${n("import_csv_info",this.hass?.language)}<br />
            <code>title, description, interval_value, interval_type, last_performed, icon</code>
          </div>

          ${s?p`
                <div style="overflow-x:auto; max-height:40vh;">
                  <table class="import-preview-table">
                    <thead>
                      <tr>
                        ${e.filter(i=>this._importPreview.some(a=>a[i])).map(i=>p`<th>${i}</th>`)}
                      </tr>
                    </thead>
                    <tbody>
                      ${this._importPreview.map(i=>p`
                          <tr>
                            ${e.filter(a=>this._importPreview.some(o=>o[a])).map(a=>p`<td>${i[a]||""}</td>`)}
                          </tr>
                        `)}
                    </tbody>
                  </table>
                </div>
                <div class="import-info">
                  ${this._importPreview.length} ${n("tasks",this.hass?.language).toLowerCase()}
                </div>
              `:h}

          ${this._importResult?p`<div class="import-result${this._importResult.includes("failed")?" error":""}">${this._importResult}</div>`:h}

          <div class="import-actions">
            <button class="btn" @click=${this._closeImportDialog}>
              ${this._importResult&&!this._importResult.includes("failed")?n("done",this.hass?.language):n("cancel",this.hass?.language)}
            </button>
            ${s&&!this._importing?p`
                  <button class="btn primary" @click=${this._doImport}>
                    ${n("import",this.hass?.language)} (${this._importPreview.length})
                  </button>
                `:h}
            ${this._importing?p`<span>${n("importing",this.hass?.language)}</span>`:h}
          </div>
        </div>
      </div>
    `}};d([f({attribute:!1})],x.prototype,"hass",2),d([f({type:Boolean})],x.prototype,"narrow",2),d([_()],x.prototype,"_templates",2),d([_()],x.prototype,"_searchQuery",2),d([_()],x.prototype,"_expandedCategories",2),d([_()],x.prototype,"_importPreview",2),d([_()],x.prototype,"_showImportDialog",2),d([_()],x.prototype,"_importing",2),d([_()],x.prototype,"_importResult",2),x=d([E("template-picker-view")],x);var k=class extends b{constructor(){super(...arguments);this.narrow=!1;this.panel={};this._currentView="list";this._editTaskId=null;this._templateData=null}static get styles(){return w`
      :host {
        display: block;
      }
    `}connectedCallback(){super.connectedCallback(),console.info(`%c ha-home-maintenance %c ${Oe} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;")}_onNavigateToCreate(){this._currentView="create",this._editTaskId=null,this._templateData=null}_onNavigateToEdit(e){this._currentView="edit",this._editTaskId=e.detail.taskId}_onNavigateToTemplates(){this._currentView="templates"}_onNavigateToList(){this._currentView="list"}_onSelectTemplate(e){this._currentView="create",this._templateData=e.detail.template}render(){switch(this._currentView){case"list":return p`
          <task-list-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            @navigate-to-create=${this._onNavigateToCreate}
            @navigate-to-edit=${this._onNavigateToEdit}
            @navigate-to-templates=${this._onNavigateToTemplates}
          ></task-list-view>
        `;case"create":return p`
          <task-form-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            .taskId=${null}
            .templateData=${this._templateData}
            @navigate-to-list=${this._onNavigateToList}
          ></task-form-view>
        `;case"edit":return p`
          <task-form-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            .taskId=${this._editTaskId}
            .templateData=${null}
            @navigate-to-list=${this._onNavigateToList}
          ></task-form-view>
        `;case"templates":return p`
          <template-picker-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            @select-template=${this._onSelectTemplate}
            @navigate-to-create=${this._onNavigateToCreate}
            @navigate-to-list=${this._onNavigateToList}
          ></template-picker-view>
        `}}};d([f({attribute:!1})],k.prototype,"hass",2),d([f({type:Boolean})],k.prototype,"narrow",2),d([f({attribute:!1})],k.prototype,"panel",2),d([_()],k.prototype,"_currentView",2),d([_()],k.prototype,"_editTaskId",2),d([_()],k.prototype,"_templateData",2),k=d([E("ha-home-maintenance-panel")],k);export{k as HaHomeMaintenancePanel};
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
