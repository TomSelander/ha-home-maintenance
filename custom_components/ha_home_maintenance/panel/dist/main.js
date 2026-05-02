var vt=Object.defineProperty;var Wt=Object.getOwnPropertyDescriptor;var Ft=(o,e)=>{for(var t in e)vt(o,t,{get:e[t],enumerable:!0})};var p=(o,e,t,s)=>{for(var i=s>1?void 0:s?Wt(e,t):e,r=o.length-1,a;r>=0;r--)(a=o[r])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&vt(e,t,i),i};var X=globalThis,V=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),_t=new WeakMap,U=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(V&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=_t.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&_t.set(t,e))}return e}toString(){return this.cssText}},ft=o=>new U(typeof o=="string"?o:o+"",void 0,at),k=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((s,i,r)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new U(t,o,at)},bt=(o,e)=>{if(V)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=X.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,o.appendChild(s)}},ot=V?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return ft(t)})(o):o;var{is:Qt,defineProperty:Kt,getOwnPropertyDescriptor:Jt,getOwnPropertyNames:Gt,getOwnPropertySymbols:Yt,getPrototypeOf:Zt}=Object,C=globalThis,yt=C.trustedTypes,Xt=yt?yt.emptyScript:"",Vt=C.reactiveElementPolyfillSupport,j=(o,e)=>o,q={toAttribute(o,e){switch(e){case Boolean:o=o?Xt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},tt=(o,e)=>!Qt(o,e),xt={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:tt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);var S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=xt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Kt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=Jt(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){let c=i?.call(this);r?.call(this,a),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xt}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let e=Zt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let t=this.properties,s=[...Gt(t),...Yt(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(ot(i))}else e!==void 0&&t.push(ot(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:q).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:q;this._$Em=i;let c=a.fromAttribute(t,r.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,t,s,i=!1,r){if(e!==void 0){let a=this.constructor;if(i===!1&&(r=this[e]),s??(s=a.getPropertyOptions(e)),!((s.hasChanged??tt)(r,t)||s.useDefault&&s.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:a}=r,c=this[i];a!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,r,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[j("elementProperties")]=new Map,S[j("finalized")]=new Map,Vt?.({ReactiveElement:S}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.1.2");var W=globalThis,$t=o=>o,et=W.trustedTypes,kt=et?et.createPolicy("lit-html",{createHTML:o=>o}):void 0,Et="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+E,te=`<${Lt}>`,R=document,F=()=>R.createComment(""),Q=o=>o===null||typeof o!="object"&&typeof o!="function",ut=Array.isArray,ee=o=>ut(o)||typeof o?.[Symbol.iterator]=="function",nt=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wt=/-->/g,Tt=/>/g,D=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),St=/'/g,At=/"/g,It=/^(?:script|style|textarea|title)$/i,gt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),h=gt(1),ms=gt(2),vs=gt(3),N=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ct=new WeakMap,P=R.createTreeWalker(R,129);function Dt(o,e){if(!ut(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return kt!==void 0?kt.createHTML(e):e}var se=(o,e)=>{let t=o.length-1,s=[],i,r=e===2?"<svg>":e===3?"<math>":"",a=B;for(let c=0;c<t;c++){let l=o[c],m,v,_=-1,T=0;for(;T<l.length&&(a.lastIndex=T,v=a.exec(l),v!==null);)T=a.lastIndex,a===B?v[1]==="!--"?a=wt:v[1]!==void 0?a=Tt:v[2]!==void 0?(It.test(v[2])&&(i=RegExp("</"+v[2],"g")),a=D):v[3]!==void 0&&(a=D):a===D?v[0]===">"?(a=i??B,_=-1):v[1]===void 0?_=-2:(_=a.lastIndex-v[2].length,m=v[1],a=v[3]===void 0?D:v[3]==='"'?At:St):a===At||a===St?a=D:a===wt||a===Tt?a=B:(a=D,i=void 0);let A=a===D&&o[c+1].startsWith("/>")?" ":"";r+=a===B?l+te:_>=0?(s.push(m),l.slice(0,_)+Et+l.slice(_)+E+A):l+E+(_===-2?c:A)}return[Dt(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},K=class o{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,a=0,c=e.length-1,l=this.parts,[m,v]=se(e,t);if(this.el=o.createElement(m,s),P.currentNode=this.el.content,t===2||t===3){let _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(i=P.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let _ of i.getAttributeNames())if(_.endsWith(Et)){let T=v[a++],A=i.getAttribute(_).split(E),Z=/([.?@])?(.*)/.exec(T);l.push({type:1,index:r,name:Z[2],strings:A,ctor:Z[1]==="."?ct:Z[1]==="?"?dt:Z[1]==="@"?pt:z}),i.removeAttribute(_)}else _.startsWith(E)&&(l.push({type:6,index:r}),i.removeAttribute(_));if(It.test(i.tagName)){let _=i.textContent.split(E),T=_.length-1;if(T>0){i.textContent=et?et.emptyScript:"";for(let A=0;A<T;A++)i.append(_[A],F()),P.nextNode(),l.push({type:2,index:++r});i.append(_[T],F())}}}else if(i.nodeType===8)if(i.data===Lt)l.push({type:2,index:r});else{let _=-1;for(;(_=i.data.indexOf(E,_+1))!==-1;)l.push({type:7,index:r}),_+=E.length-1}r++}}static createElement(e,t){let s=R.createElement("template");return s.innerHTML=e,s}};function H(o,e,t=o,s){if(e===N)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,r=Q(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=H(o,i._$AS(o,e.values),i,s)),e}var lt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??R).importNode(t,!0);P.currentNode=i;let r=P.nextNode(),a=0,c=0,l=s[0];for(;l!==void 0;){if(a===l.index){let m;l.type===2?m=new J(r,r.nextSibling,this,e):l.type===1?m=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(m=new ht(r,this,e)),this._$AV.push(m),l=s[++c]}a!==l?.index&&(r=P.nextNode(),a++)}return P.currentNode=R,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},J=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),Q(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ee(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&Q(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=K.createElement(Dt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new lt(i,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=Ct.get(e.strings);return t===void 0&&Ct.set(e.strings,t=new K(e)),t}k(e){ut(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let r of e)i===t.length?t.push(s=new o(this.O(F()),this.O(F()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=$t(e).nextSibling;$t(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(e,t=this,s,i){let r=this.strings,a=!1;if(r===void 0)e=H(this,e,t,0),a=!Q(e)||e!==this._$AH&&e!==N,a&&(this._$AH=e);else{let c=e,l,m;for(e=r[0],l=0;l<r.length-1;l++)m=H(this,c[s+l],t,l),m===N&&(m=this._$AH[l]),a||(a=!Q(m)||m!==this._$AH[l]),m===u?e=u:e!==u&&(e+=(m??"")+r[l+1]),this._$AH[l]=m}a&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ct=class extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},dt=class extends z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},pt=class extends z{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=H(this,e,t,0)??u)===N)return;let s=this._$AH,i=e===u&&s!==u||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ht=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}};var ie=W.litHtmlPolyfillSupport;ie?.(K,J),(W.litHtmlVersions??(W.litHtmlVersions=[])).push("3.3.2");var Pt=(o,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let r=t?.renderBefore??null;s._$litPart$=i=new J(e.insertBefore(F(),r),r,void 0,t??{})}return i._$AI(o),i};var G=globalThis,y=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};y._$litElement$=!0,y.finalized=!0,G.litElementHydrateSupport?.({LitElement:y});var re=G.litElementPolyfillSupport;re?.({LitElement:y});(G.litElementVersions??(G.litElementVersions=[])).push("4.2.2");var L=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};var ae={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:tt},oe=(o=ae,e,t)=>{let{kind:s,metadata:i}=t,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(t.name,o),s==="accessor"){let{name:a}=t;return{set(c){let l=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,l,o,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,o,c),c}}}if(s==="setter"){let{name:a}=t;return function(c){let l=this[a];e.call(this,c),this.requestUpdate(a,l,o,!0,c)}}throw Error("Unsupported decorator location: "+s)};function b(o){return(e,t)=>typeof t=="object"?oe(o,e,t):((s,i,r)=>{let a=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),a?Object.getOwnPropertyDescriptor(i,r):void 0})(o,e,t)}function g(o){return b({...o,state:!0,attribute:!1})}var Rt="1.5.2",I="ha_home_maintenance";var ne={red:"#f44336",pink:"#e91e63",purple:"#9c27b0","deep-purple":"#673ab7",indigo:"#3f51b5",blue:"#2196f3","light-blue":"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caf50","light-green":"#8bc34a",lime:"#cddc39",yellow:"#ffeb3b",amber:"#ffc107",orange:"#ff9800","deep-orange":"#ff5722",brown:"#795548",grey:"#9e9e9e","blue-grey":"#607d8b"};function O(o){return ne[o.toLowerCase()]??o}var Y=o=>o.callWS({type:`${I}/get_tasks`}),Nt=(o,e)=>o.callWS({type:`${I}/get_task`,task_id:e}),it=(o,e)=>o.callWS({type:`${I}/add_task`,...e}),Ht=(o,e,t)=>o.callWS({type:`${I}/update_task`,task_id:e,...t}),zt=(o,e)=>o.callWS({type:`${I}/complete_task`,task_id:e}),Ot=(o,e)=>o.callWS({type:`${I}/remove_task`,task_id:e});var Mt=o=>o.callWS({type:`${I}/get_templates`}),Ut=async o=>{try{return await o.callWS({type:"tag/list"})}catch{return[]}},rt=async o=>{try{return await o.callWS({type:"config/label_registry/list"})}catch{return[]}};var M=k`
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
`;var mt={};Ft(mt,{actions:()=>we,add_task:()=>de,advanced_settings:()=>ze,all_labels:()=>qe,browse_templates:()=>pe,cancel:()=>Se,choose_template:()=>ge,clear:()=>as,complete:()=>Ce,completion_history:()=>ns,confirm_delete:()=>Fe,create_from_scratch:()=>me,create_task:()=>he,days:()=>Le,default:()=>cs,delete:()=>Ae,description:()=>_e,done:()=>ts,due_soon:()=>Re,edit:()=>Ee,edit_task:()=>ue,export_csv:()=>is,icon:()=>Me,import:()=>Ve,import_csv:()=>Ze,import_csv_info:()=>Xe,interval:()=>fe,interval_type:()=>ye,interval_value:()=>be,labels:()=>Ue,last_performed:()=>xe,months:()=>De,never:()=>He,next_due:()=>$e,no_history:()=>ls,no_results:()=>es,no_tasks:()=>We,notify_when_overdue:()=>ss,ok:()=>Ne,overdue:()=>Pe,panel_title:()=>le,required_field:()=>Ge,save:()=>Te,search_tasks:()=>je,search_templates:()=>Be,sort_by:()=>rs,status:()=>ke,tag:()=>Oe,task_completed:()=>Je,task_deleted:()=>Ke,task_saved:()=>Qe,tasks:()=>ce,title:()=>ve,today:()=>Ye,track_history:()=>os,weeks:()=>Ie});var le="Home Maintenance Pro",ce="Tasks",de="Add Task",pe="Browse Templates",he="Create Task",ue="Edit Task",ge="Choose a Template",me="Create from Scratch",ve="Title",_e="Description",fe="Interval",be="Interval Value",ye="Interval Type",xe="Last Performed",$e="Next Due",ke="Status",we="Actions",Te="Save",Se="Cancel",Ae="Delete",Ce="Complete",Ee="Edit",Le="Days",Ie="Weeks",De="Months",Pe="Overdue",Re="Due Soon",Ne="OK",He="Never",ze="Advanced Settings",Oe="NFC Tag",Me="Icon",Ue="Labels",je="Search tasks...",qe="All Labels",Be="Search templates...",We="No maintenance tasks yet. Add a task or browse templates to get started.",Fe="Are you sure you want to delete this task?",Qe="Task saved successfully.",Ke="Task deleted.",Je="Task marked as complete.",Ge="This field is required.",Ye="Today",Ze="Import CSV",Xe="Upload a CSV file with the following columns (title is required, others are optional):",Ve="Import",ts="Done",es="No templates match your search.",ss="Notify when overdue",is="Export CSV",rs="Sort by",as="Clear",os="Track completion history",ns="Completion History",ls="No completion history yet.",cs={panel_title:le,tasks:ce,add_task:de,browse_templates:pe,create_task:he,edit_task:ue,choose_template:ge,create_from_scratch:me,title:ve,description:_e,interval:fe,interval_value:be,interval_type:ye,last_performed:xe,next_due:$e,status:ke,actions:we,save:Te,cancel:Se,delete:Ae,complete:Ce,edit:Ee,days:Le,weeks:Ie,months:De,overdue:Pe,due_soon:Re,ok:Ne,never:He,advanced_settings:ze,tag:Oe,icon:Me,labels:Ue,search_tasks:je,all_labels:qe,search_templates:Be,no_tasks:We,confirm_delete:Fe,task_saved:Qe,task_deleted:Ke,task_completed:Je,required_field:Ge,today:Ye,import_csv:Ze,import_csv_info:Xe,import:Ve,done:ts,no_results:es,notify_when_overdue:ss,export_csv:is,sort_by:rs,clear:as,track_history:os,completion_history:ns,no_history:ls};var jt={en:mt},qt="en";function n(o,e=qt){return(jt[e]||jt[qt])[o]||o}var Bt="ha_home_maintenance_sort",x=class extends y{constructor(){super(...arguments);this.narrow=!1;this._tasks=[];this._labels=[];this._searchQuery="";this._selectedLabels=new Set;this._sortColumn="title";this._sortDirection="asc";this._loading=!0}_loadSortPreference(){try{let t=localStorage.getItem(Bt);if(t){let{column:s,direction:i}=JSON.parse(t);s&&(this._sortColumn=s),i&&(this._sortDirection=i)}}catch{}}_saveSortPreference(){try{localStorage.setItem(Bt,JSON.stringify({column:this._sortColumn,direction:this._sortDirection}))}catch{}}static get styles(){return[M,k`
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
      `]}connectedCallback(){super.connectedCallback(),this._loadSortPreference(),this._loadData()}async _loadData(){this._loading=!0;try{let[t,s]=await Promise.all([Y(this.hass),rt(this.hass)]);this._tasks=t,this._labels=s}catch(t){console.error("Failed to load data:",t),this._tasks=[],this._labels=[]}this._loading=!1}async _loadTasks(){try{this._tasks=await Y(this.hass)}catch(t){console.error("Failed to load tasks:",t),this._tasks=[]}}get _filteredTasks(){let t=this._tasks,s=this._searchQuery.toLowerCase().trim();return s&&(t=t.filter(i=>i.title.toLowerCase().includes(s)||i.description&&i.description.toLowerCase().includes(s))),this._selectedLabels.size>0&&(t=t.filter(i=>i.labels&&i.labels.some(r=>this._selectedLabels.has(r)))),t}get _sortedTasks(){let t=[...this._filteredTasks],s=this._sortDirection==="asc"?1:-1;return t.sort((i,r)=>{let a=0;switch(this._sortColumn){case"title":a=i.title.localeCompare(r.title);break;case"interval":a=this._intervalToDays(i)-this._intervalToDays(r);break;case"last_performed":{let c=i.last_performed?this._parseLocalDate(i.last_performed).getTime():0,l=r.last_performed?this._parseLocalDate(r.last_performed).getTime():0;a=c-l;break}case"next_due":{let c=this._getNextDueTimestamp(i),l=this._getNextDueTimestamp(r);a=c-l;break}case"labels":{let c=i.labels?.length?i.labels.map(m=>this._getLabelName(m)).sort().join(", "):"",l=r.labels?.length?r.labels.map(m=>this._getLabelName(m)).sort().join(", "):"";a=c.localeCompare(l);break}case"status":{let c={overdue:0,due_soon:1,ok:2};a=(c[this._getStatus(i)]??3)-(c[this._getStatus(r)]??3);break}}return a*s}),t}_intervalToDays(t){let s=t.interval_value;switch(t.interval_type){case"days":return s;case"weeks":return s*7;case"months":return s*30;default:return s}}_getNextDueTimestamp(t){if(!t.last_performed)return 0;let s=this._parseLocalDate(t.last_performed),i=new Date(s);switch(t.interval_type){case"days":i.setDate(i.getDate()+t.interval_value);break;case"weeks":i.setDate(i.getDate()+t.interval_value*7);break;case"months":i.setMonth(i.getMonth()+t.interval_value);break}return i.getTime()}_getNextDueString(t){if(!t.last_performed)return n("never",this.hass?.language);let s=this._getNextDueTimestamp(t);return new Date(s).toLocaleDateString()}_getStatus(t){if(!t.last_performed)return"overdue";let s=Date.now(),i=this._getNextDueTimestamp(t);if(i<=s)return"overdue";let r=7*24*60*60*1e3;return i-s<=r?"due_soon":"ok"}_getStatusLabel(t){let s=this.hass?.language;switch(t){case"overdue":return n("overdue",s);case"due_soon":return n("due_soon",s);case"ok":return n("ok",s)}}_getStatusClass(t){switch(t){case"overdue":return"status-overdue";case"due_soon":return"status-due-soon";case"ok":return"status-ok"}}_formatInterval(t){let s=n(t.interval_type,this.hass?.language);return`${t.interval_value} ${s.toLowerCase()}`}_parseLocalDate(t){let[s,i,r]=t.split("-").map(Number);return new Date(s,i-1,r)}_formatDate(t){return t?this._parseLocalDate(t).toLocaleDateString():n("never",this.hass?.language)}_sort(t){this._sortColumn===t?this._sortDirection=this._sortDirection==="asc"?"desc":"asc":(this._sortColumn=t,this._sortDirection="asc"),this._saveSortPreference()}_sortIndicator(t){return this._sortColumn!==t?"":this._sortDirection==="asc"?" \u25B2":" \u25BC"}async _completeTask(t){try{await zt(this.hass,t.id),await this._loadTasks()}catch(s){console.error("Failed to complete task:",s)}}_editTask(t){this.dispatchEvent(new CustomEvent("navigate-to-edit",{bubbles:!0,composed:!0,detail:{taskId:t.id}}))}async _deleteTask(t){let s=n("confirm_delete",this.hass?.language);if(window.confirm(s))try{await Ot(this.hass,t.id),await this._loadTasks()}catch(i){console.error("Failed to delete task:",i)}}_navigateToCreate(){this.dispatchEvent(new CustomEvent("navigate-to-create",{bubbles:!0,composed:!0}))}_handleSearchInput(t){this._searchQuery=t.target.value}_toggleLabelFilter(t){let s=new Set(this._selectedLabels);s.has(t)?s.delete(t):s.add(t),this._selectedLabels=s,this.requestUpdate()}_clearLabelFilters(){this._selectedLabels=new Set,this.requestUpdate()}_handleSortChange(t){let s=t.target.value,[i,r]=s.split("-");this._sortColumn=i,this._sortDirection=r,this._saveSortPreference()}_getLabelName(t){let s=this._labels.find(i=>i.label_id===t);return s?s.name:t}_getLabel(t){return this._labels.find(s=>s.label_id===t)}_labelChipStyle(t){if(!t?.color)return"";let s=O(t.color);if(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s)){let i=s.slice(1);i.length===3&&(i=i.split("").map(l=>l+l).join(""));let r=parseInt(i.slice(0,2),16),a=parseInt(i.slice(2,4),16),c=parseInt(i.slice(4,6),16);return`background:rgba(${r},${a},${c},0.12);color:${s};`}return`border-left:3px solid ${s};padding-left:5px;`}_renderLabelChip(t){let s=this._getLabel(t),i=s?s.name:t,r=this._labelChipStyle(s);return h`<span class="label-chip" style=${r}>
      ${s?.icon?h`<ha-icon .icon=${s.icon}></ha-icon>`:u}${i}
    </span>`}_renderFilterChip(t){let s=this._labelChipStyle(t),i=this._selectedLabels.has(t.label_id),r=t.color?O(t.color):null,a=i&&r?`background:${r};color:#fff;`:i?"":s;return h`<button
      class="filter-chip ${i?"active":""}"
      style=${i?a:s}
      @click=${()=>this._toggleLabelFilter(t.label_id)}
    >
      ${t.icon?h`<ha-icon .icon=${t.icon}></ha-icon>`:u}${t.name}
    </button>`}_navigateToTemplates(){this.dispatchEvent(new CustomEvent("navigate-to-templates",{bubbles:!0,composed:!0}))}render(){return this._loading?h`<div class="loading">Loading...</div>`:h`
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

        ${this._tasks.length===0?this._renderEmptyState():h`
              ${this._renderFilterBar()}
              ${this._renderTable()}
            `}
      </div>
    `}_renderEmptyState(){return h`
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
    `}_renderFilterBar(){let t=new Set;for(let a of this._tasks)if(a.labels)for(let c of a.labels)t.add(c);let s=new Set(this._labels.map(a=>a.label_id)),i=this._labels.filter(a=>t.has(a.label_id)),r=[...t].filter(a=>!s.has(a));return h`
      <div class="filter-bar">
        <input
          type="text"
          placeholder="${n("search_tasks",this.hass?.language)}"
          .value=${this._searchQuery}
          @input=${this._handleSearchInput}
        />
        ${i.length>0||r.length>0?h`
              <div class="filter-chips">
                ${i.map(a=>this._renderFilterChip(a))}
                ${r.map(a=>{let c=this._selectedLabels.has(a);return h`<button
                    class="filter-chip ${c?"active":""}"
                    @click=${()=>this._toggleLabelFilter(a)}
                  >${a}</button>`})}
                ${this._selectedLabels.size>0?h`<button class="filter-chip clear-chip" @click=${this._clearLabelFilters}>${n("clear",this.hass?.language)}</button>`:u}
              </div>
            `:u}
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
    `}_renderTable(){return h`
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

      ${this._sortedTasks.map(t=>this._renderTaskRow(t))}
    `}_renderTaskRow(t){let s=this._getStatus(t),i=this._getStatusLabel(s),r=this._getStatusClass(s);return h`
      <div class="task-table-row">
        <div class="task-icon">
          <ha-icon .icon=${t.icon||"mdi:wrench"}></ha-icon>
        </div>
        <div class="task-title">
          ${t.title}
          ${t.description?h`<div class="subtitle">${t.description}</div>`:u}
        </div>
        <div>${this._formatInterval(t)}</div>
        <div class="hide-medium">${this._formatDate(t.last_performed)}</div>
        <div class="hide-medium">${this._getNextDueString(t)}</div>
        <div class="hide-medium task-labels">
          ${t.labels&&t.labels.length>0?t.labels.map(a=>this._renderLabelChip(a)):u}
        </div>
        <div>
          <span class="status-indicator ${r}">${i}</span>
        </div>
        <div class="action-buttons">
          <button
            class="action-btn complete"
            title="${n("complete",this.hass?.language)}"
            @click=${()=>this._completeTask(t)}
          >
            <ha-icon .icon=${"mdi:check"}></ha-icon>
          </button>
          <button
            class="action-btn edit"
            title="${n("edit",this.hass?.language)}"
            @click=${()=>this._editTask(t)}
          >
            <ha-icon .icon=${"mdi:pencil"}></ha-icon>
          </button>
          <button
            class="action-btn delete"
            title="${n("delete",this.hass?.language)}"
            @click=${()=>this._deleteTask(t)}
          >
            <ha-icon .icon=${"mdi:delete"}></ha-icon>
          </button>
        </div>
      </div>
    `}};p([b({attribute:!1})],x.prototype,"hass",2),p([b({type:Boolean})],x.prototype,"narrow",2),p([g()],x.prototype,"_tasks",2),p([g()],x.prototype,"_labels",2),p([g()],x.prototype,"_searchQuery",2),p([g()],x.prototype,"_selectedLabels",2),p([g()],x.prototype,"_sortColumn",2),p([g()],x.prototype,"_sortDirection",2),p([g()],x.prototype,"_loading",2),x=p([L("task-list-view")],x);var f=class extends y{constructor(){super(...arguments);this.narrow=!1;this.taskId=null;this.templateData=null;this._title="";this._description="";this._intervalValue=30;this._intervalType="days";this._lastPerformed="";this._tagId="";this._icon="mdi:toolbox";this._labels=[];this._notifyWhenOverdue=!1;this._trackHistory=!1;this._completionHistory=[];this._loading=!1;this._showAdvanced=!1;this._tags=[];this._availableLabels=[]}static get styles(){return[M,k`
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
      `]}async firstUpdated(){this._loading=!0;try{await Promise.all([this._loadTags(),this._loadLabels()]),this.taskId?await this._loadExistingTask():this.templateData&&this._populateFromTemplate(this.templateData)}finally{this._loading=!1}}async _loadTags(){try{this._tags=await Ut(this.hass)}catch{this._tags=[]}}async _loadLabels(){try{this._availableLabels=await rt(this.hass)}catch{this._availableLabels=[]}}async _loadExistingTask(){if(this.taskId)try{let t=await Nt(this.hass,this.taskId);this._title=t.title,this._description=t.description||"",this._intervalValue=t.interval_value,this._intervalType=t.interval_type,this._lastPerformed=t.last_performed||"",this._tagId=t.tag_id||"",this._icon=t.icon||"mdi:toolbox",this._labels=t.labels||[],this._notifyWhenOverdue=t.notify_when_overdue||!1,this._trackHistory=t.track_history||!1,this._completionHistory=t.completion_history||[]}catch(t){console.error("Failed to load task:",t)}}_populateFromTemplate(t){this._title=t.title,this._description=t.description||"",this._intervalValue=t.interval_value,this._intervalType=t.interval_type,this._icon=t.icon||"mdi:toolbox"}_handleTitleInput(t){this._title=t.target.value}_handleDescriptionInput(t){this._description=t.target.value}_handleIntervalValueInput(t){this._intervalValue=parseInt(t.target.value,10)||1}_handleIntervalTypeChange(t){this._intervalType=t.target.value}_handleLastPerformedInput(t){this._lastPerformed=t.target.value}_handleTagChange(t){this._tagId=t.target.value}_handleIconInput(t){this._icon=t.target.value}_handleNotifyToggle(t){this._notifyWhenOverdue=t.target.checked}_handleTrackHistoryToggle(t){this._trackHistory=t.target.checked}_toggleLabel(t){this._labels.includes(t)?this._labels=this._labels.filter(s=>s!==t):this._labels=[...this._labels,t]}get _customLabels(){let t=new Set(this._availableLabels.map(s=>s.label_id));return this._labels.filter(s=>!t.has(s))}_removeCustomLabel(t){this._labels=this._labels.filter(s=>s!==t)}_handleCustomLabelKeydown(t){if(t.key==="Enter"||t.key===","){t.preventDefault();let s=t.target,i=s.value.trim();i&&!this._labels.includes(i)&&(this._labels=[...this._labels,i]),s.value=""}}_labelChipStyle(t){if(!t.color)return"";let s=O(t.color);if(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s)){let i=s.slice(1);i.length===3&&(i=i.split("").map(l=>l+l).join(""));let r=parseInt(i.slice(0,2),16),a=parseInt(i.slice(2,4),16),c=parseInt(i.slice(4,6),16);return`background:rgba(${r},${a},${c},0.12);color:${s};border-color:rgba(${r},${a},${c},0.3);`}return`border-left:3px solid ${s};`}_labelChipSelectedStyle(t){if(!t.color)return"";let s=O(t.color);return`background:${s};color:#fff;border-color:${s};`}_toggleAdvanced(){this._showAdvanced=!this._showAdvanced}_validate(){return!(!this._title.trim()||!this._intervalValue||this._intervalValue<1)}async _save(){if(this._validate()){this._loading=!0;try{let t={title:this._title.trim(),description:this._description.trim(),interval_value:this._intervalValue,interval_type:this._intervalType,last_performed:this._lastPerformed||null,tag_id:this._tagId||null,icon:this._icon||"mdi:toolbox",labels:this._labels,notify_when_overdue:this._notifyWhenOverdue,track_history:this._trackHistory};this.taskId?await Ht(this.hass,this.taskId,t):await it(this.hass,t),this._navigateToList()}catch(t){console.error("Failed to save task:",t)}finally{this._loading=!1}}}_cancel(){this._navigateToList()}_navigateToList(){this.dispatchEvent(new CustomEvent("navigate-to-list",{bubbles:!0,composed:!0}))}render(){if(this._loading)return h`
        <div class="loading-overlay">Loading...</div>
      `;let t=!!this.taskId,s=t?n("edit_task",this.hass?.language):n("create_task",this.hass?.language);return h`
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
            ${!this._title.trim()&&this._title!==""?h`<div class="error-message">${n("required_field",this.hass?.language)}</div>`:u}
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

          ${t&&(this._trackHistory||this._completionHistory.length>0)?h`
                <div class="history-section">
                  <h3>${n("completion_history",this.hass?.language)}</h3>
                  ${this._completionHistory.length>0?h`<ul class="history-list">
                        ${this._completionHistory.slice().reverse().slice(0,20).map(i=>h`<li>${new Date(i).toLocaleString()}</li>`)}
                      </ul>`:h`<p class="history-empty">${n("no_history",this.hass?.language)}</p>`}
                </div>
              `:u}

          <div class="expansion-panel">
            <div class="expansion-header" @click=${this._toggleAdvanced}>
              ${n("advanced_settings",this.hass?.language)}
              <ha-icon
                icon=${this._showAdvanced?"mdi:chevron-up":"mdi:chevron-down"}
              ></ha-icon>
            </div>
            ${this._showAdvanced?h`
                  <div class="expansion-content">
                    <div class="form-field">
                      <label>${n("tag",this.hass?.language)}</label>
                      <select .value=${this._tagId} @change=${this._handleTagChange}>
                        <option value="">-- None --</option>
                        ${this._tags.map(i=>h`
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
                      ${this._availableLabels.length>0?h`<div class="label-picker">
                            ${this._availableLabels.map(i=>{let r=this._labels.includes(i.label_id),a=r?this._labelChipSelectedStyle(i):this._labelChipStyle(i);return h`<button
                                type="button"
                                class="label-picker-chip ${r?"selected":""}"
                                style=${a}
                                @click=${()=>this._toggleLabel(i.label_id)}
                              >
                                ${i.icon?h`<ha-icon .icon=${i.icon}></ha-icon>`:u}
                                ${i.name}
                              </button>`})}
                          </div>`:u}
                      <div class="custom-labels-row">
                        ${this._customLabels.map(i=>h`<span class="label-chip custom-label-chip">
                            ${i}<button type="button" class="remove-label-btn" @click=${()=>this._removeCustomLabel(i)}>×</button>
                          </span>`)}
                        <input
                          type="text"
                          class="custom-label-input"
                          placeholder="Add custom label, press Enter"
                          @keydown=${this._handleCustomLabelKeydown}
                        />
                      </div>
                    </div>
                  </div>
                `:u}
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
    `}};p([b({attribute:!1})],f.prototype,"hass",2),p([b({type:Boolean})],f.prototype,"narrow",2),p([b({type:String})],f.prototype,"taskId",2),p([b({attribute:!1})],f.prototype,"templateData",2),p([g()],f.prototype,"_title",2),p([g()],f.prototype,"_description",2),p([g()],f.prototype,"_intervalValue",2),p([g()],f.prototype,"_intervalType",2),p([g()],f.prototype,"_lastPerformed",2),p([g()],f.prototype,"_tagId",2),p([g()],f.prototype,"_icon",2),p([g()],f.prototype,"_labels",2),p([g()],f.prototype,"_notifyWhenOverdue",2),p([g()],f.prototype,"_trackHistory",2),p([g()],f.prototype,"_completionHistory",2),p([g()],f.prototype,"_loading",2),p([g()],f.prototype,"_showAdvanced",2),p([g()],f.prototype,"_tags",2),p([g()],f.prototype,"_availableLabels",2),f=p([L("task-form-view")],f);var $=class extends y{constructor(){super(...arguments);this.narrow=!1;this._templates=[];this._searchQuery="";this._expandedCategories=new Set;this._importPreview=[];this._showImportDialog=!1;this._importing=!1;this._importResult=""}static get styles(){return[M,k`
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
      `]}connectedCallback(){super.connectedCallback(),this._loadTemplates()}async _loadTemplates(){try{this._templates=await Mt(this.hass);let t=new Set(this._templates.map(s=>s.category));this._expandedCategories=t}catch(t){console.error("Failed to load templates:",t),this._templates=[]}}_getFilteredTemplates(){if(!this._searchQuery.trim())return this._templates;let t=this._searchQuery.toLowerCase().trim();return this._templates.filter(s=>s.title.toLowerCase().includes(t)||s.description&&s.description.toLowerCase().includes(t))}_groupByCategory(t){let s={};for(let r of t){let a=r.category||"Other";s[a]||(s[a]=[]),s[a].push(r)}let i={};for(let r of Object.keys(s).sort())i[r]=s[r];return i}_toggleCategory(t){let s=new Set(this._expandedCategories);s.has(t)?s.delete(t):s.add(t),this._expandedCategories=s}_selectTemplate(t){this.dispatchEvent(new CustomEvent("select-template",{detail:{template:t},bubbles:!0,composed:!0}))}_createFromScratch(){this.dispatchEvent(new CustomEvent("navigate-to-create",{bubbles:!0,composed:!0}))}_triggerFileInput(){let t=this.shadowRoot?.querySelector('input[type="file"]');t&&(t.value="",t.click())}_handleFileSelect(t){let i=t.target.files?.[0];if(!i)return;let r=new FileReader;r.onload=()=>{let a=r.result,c=this._parseCsv(a);if(c.length===0){this._importResult="No valid rows found in CSV.",this._showImportDialog=!0;return}this._importPreview=c,this._importResult="",this._showImportDialog=!0},r.onerror=()=>{this._importResult="Failed to read file.",this._showImportDialog=!0},r.readAsText(i)}_parseCsv(t){let s=t.split(/\r?\n/).filter(a=>a.trim());if(s.length<2)return[];let i=this._parseCsvLine(s[0]).map(a=>a.trim().toLowerCase());if(!i.includes("title"))return[];let r=[];for(let a=1;a<s.length;a++){let c=this._parseCsvLine(s[a]),l={};for(let m=0;m<i.length;m++)l[i[m]]=(c[m]||"").trim();l.title&&r.push(l)}return r}_parseCsvLine(t){let s=[],i="",r=!1;for(let a=0;a<t.length;a++){let c=t[a];r?c==='"'?a+1<t.length&&t[a+1]==='"'?(i+='"',a++):r=!1:i+=c:c==='"'?r=!0:c===","?(s.push(i),i=""):i+=c}return s.push(i),s}async _doImport(){this._importing=!0,this._importResult="";let t=0,s=0;for(let i of this._importPreview)try{let r={title:i.title,description:i.description||"",interval_value:parseInt(i.interval_value,10)||30,interval_type:i.interval_type||"days",icon:i.icon||"mdi:toolbox",last_performed:i.last_performed||null};await it(this.hass,r),t++}catch{s++}this._importing=!1,s===0?this._importResult=`Successfully imported ${t} task${t!==1?"s":""}.`:this._importResult=`Imported ${t}, failed ${s}.`,this._importPreview=[]}_closeImportDialog(){this._showImportDialog=!1,this._importPreview=[],this._importResult=""}async _exportCsv(){let t;try{t=await Y(this.hass)}catch{return}let s=["title","description","interval_value","interval_type","last_performed","icon","labels","notify_when_overdue"],i=v=>v.includes(",")||v.includes('"')||v.includes(`
`)?`"${v.replace(/"/g,'""')}"`:v,r=t.map(v=>[i(v.title),i(v.description||""),String(v.interval_value),v.interval_type,v.last_performed||"",v.icon||"",i((v.labels||[]).join("; ")),v.notify_when_overdue?"true":"false"].join(",")),a=[s.join(","),...r].join(`
`),c=new Blob([a],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(c),m=document.createElement("a");m.href=l,m.download="home_maintenance_tasks.csv",m.click(),URL.revokeObjectURL(l)}_goBack(){this.dispatchEvent(new CustomEvent("navigate-to-list",{bubbles:!0,composed:!0}))}_onSearchInput(t){this._searchQuery=t.target.value}render(){let t=this._getFilteredTemplates(),s=this._groupByCategory(t),i=Object.keys(s).length>0;return h`
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

        ${i?h`
              ${Object.entries(s).map(([r,a])=>{let c=this._expandedCategories.has(r);return h`
                  <div class="template-category">
                    <h2 @click=${()=>this._toggleCategory(r)}>
                      ${r}
                      <ha-icon
                        icon=${c?"mdi:chevron-up":"mdi:chevron-down"}
                      ></ha-icon>
                      <span class="category-count"
                        >(${a.length})</span
                      >
                    </h2>
                    ${c?h`
                          <div class="template-grid">
                            ${a.map(l=>h`
                                <div
                                  class="template-card"
                                  @click=${()=>this._selectTemplate(l)}
                                >
                                  <div class="template-header">
                                    <ha-icon
                                      .icon=${l.icon}
                                    ></ha-icon>
                                    <span class="template-title"
                                      >${l.title}</span
                                    >
                                  </div>
                                  <div class="template-desc">
                                    ${l.description}
                                  </div>
                                  <div class="template-interval">
                                    Every ${l.interval_value}
                                    ${l.interval_type}
                                  </div>
                                </div>
                              `)}
                          </div>
                        `:u}
                  </div>
                `})}
            `:h`
              <div class="empty-state">
                ${n("no_results",this.hass?.language)}
              </div>
            `}

        ${this._showImportDialog?this._renderImportDialog():u}
      </div>
    `}_renderImportDialog(){let t=["title","description","interval_value","interval_type","last_performed","icon"],s=this._importPreview.length>0;return h`
      <div class="import-overlay" @click=${this._closeImportDialog}>
        <div class="import-dialog" @click=${i=>i.stopPropagation()}>
          <h2>${n("import_csv",this.hass?.language)}</h2>
          <div class="import-info">
            ${n("import_csv_info",this.hass?.language)}<br />
            <code>title, description, interval_value, interval_type, last_performed, icon</code>
          </div>

          ${s?h`
                <div style="overflow-x:auto; max-height:40vh;">
                  <table class="import-preview-table">
                    <thead>
                      <tr>
                        ${t.filter(i=>this._importPreview.some(r=>r[i])).map(i=>h`<th>${i}</th>`)}
                      </tr>
                    </thead>
                    <tbody>
                      ${this._importPreview.map(i=>h`
                          <tr>
                            ${t.filter(r=>this._importPreview.some(a=>a[r])).map(r=>h`<td>${i[r]||""}</td>`)}
                          </tr>
                        `)}
                    </tbody>
                  </table>
                </div>
                <div class="import-info">
                  ${this._importPreview.length} ${n("tasks",this.hass?.language).toLowerCase()}
                </div>
              `:u}

          ${this._importResult?h`<div class="import-result${this._importResult.includes("failed")?" error":""}">${this._importResult}</div>`:u}

          <div class="import-actions">
            <button class="btn" @click=${this._closeImportDialog}>
              ${this._importResult&&!this._importResult.includes("failed")?n("done",this.hass?.language):n("cancel",this.hass?.language)}
            </button>
            ${s&&!this._importing?h`
                  <button class="btn primary" @click=${this._doImport}>
                    ${n("import",this.hass?.language)} (${this._importPreview.length})
                  </button>
                `:u}
            ${this._importing?h`<span>Importing...</span>`:u}
          </div>
        </div>
      </div>
    `}};p([b({attribute:!1})],$.prototype,"hass",2),p([b({type:Boolean})],$.prototype,"narrow",2),p([g()],$.prototype,"_templates",2),p([g()],$.prototype,"_searchQuery",2),p([g()],$.prototype,"_expandedCategories",2),p([g()],$.prototype,"_importPreview",2),p([g()],$.prototype,"_showImportDialog",2),p([g()],$.prototype,"_importing",2),p([g()],$.prototype,"_importResult",2),$=p([L("template-picker-view")],$);var w=class extends y{constructor(){super(...arguments);this.narrow=!1;this.panel={};this._currentView="list";this._editTaskId=null;this._templateData=null}static get styles(){return k`
      :host {
        display: block;
      }
    `}connectedCallback(){super.connectedCallback(),console.info(`%c ha-home-maintenance %c ${Rt} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;")}_onNavigateToCreate(){this._currentView="create",this._editTaskId=null,this._templateData=null}_onNavigateToEdit(t){this._currentView="edit",this._editTaskId=t.detail.taskId}_onNavigateToTemplates(){this._currentView="templates"}_onNavigateToList(){this._currentView="list"}_onSelectTemplate(t){this._currentView="create",this._templateData=t.detail.template}render(){switch(this._currentView){case"list":return h`
          <task-list-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            @navigate-to-create=${this._onNavigateToCreate}
            @navigate-to-edit=${this._onNavigateToEdit}
            @navigate-to-templates=${this._onNavigateToTemplates}
          ></task-list-view>
        `;case"create":return h`
          <task-form-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            .taskId=${null}
            .templateData=${this._templateData}
            @navigate-to-list=${this._onNavigateToList}
          ></task-form-view>
        `;case"edit":return h`
          <task-form-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            .taskId=${this._editTaskId}
            .templateData=${null}
            @navigate-to-list=${this._onNavigateToList}
          ></task-form-view>
        `;case"templates":return h`
          <template-picker-view
            .hass=${this.hass}
            .narrow=${this.narrow}
            @select-template=${this._onSelectTemplate}
            @navigate-to-create=${this._onNavigateToCreate}
            @navigate-to-list=${this._onNavigateToList}
          ></template-picker-view>
        `}}};p([b({attribute:!1})],w.prototype,"hass",2),p([b({type:Boolean})],w.prototype,"narrow",2),p([b({attribute:!1})],w.prototype,"panel",2),p([g()],w.prototype,"_currentView",2),p([g()],w.prototype,"_editTaskId",2),p([g()],w.prototype,"_templateData",2),w=p([L("ha-home-maintenance-panel")],w);export{w as HaHomeMaintenancePanel};
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
