var mt=Object.defineProperty;var qt=Object.getOwnPropertyDescriptor;var Bt=(a,e)=>{for(var t in e)mt(a,t,{get:e[t],enumerable:!0})};var p=(a,e,t,s)=>{for(var i=s>1?void 0:s?qt(e,t):e,r=a.length-1,o;r>=0;r--)(o=a[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&mt(e,t,i),i};var X=globalThis,Y=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),vt=new WeakMap,z=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Y&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=vt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&vt.set(t,e))}return e}toString(){return this.cssText}},gt=a=>new z(typeof a=="string"?a:a+"",void 0,it),k=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[r+1],a[0]);return new z(t,a,it)},_t=(a,e)=>{if(Y)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=X.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,a.appendChild(s)}},at=Y?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return gt(t)})(a):a;var{is:Wt,defineProperty:Ft,getOwnPropertyDescriptor:Qt,getOwnPropertyNames:Kt,getOwnPropertySymbols:Jt,getPrototypeOf:Gt}=Object,E=globalThis,ft=E.trustedTypes,Zt=ft?ft.emptyScript:"",Xt=E.reactiveElementPolyfillSupport,U=(a,e)=>a,j={toAttribute(a,e){switch(e){case Boolean:a=a?Zt:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},V=(a,e)=>!Wt(a,e),bt={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:V};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);var A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=bt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ft(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=Qt(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){let c=i?.call(this);r?.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let e=Gt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let t=this.properties,s=[...Kt(t),...Jt(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(at(i))}else e!==void 0&&t.push(at(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:j).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:j;this._$Em=i;let c=o.fromAttribute(t,r.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,t,s,i=!1,r){if(e!==void 0){let o=this.constructor;if(i===!1&&(r=this[e]),s??(s=o.getPropertyOptions(e)),!((s.hasChanged??V)(r,t)||s.useDefault&&s.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:o}=r,c=this[i];o!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,r,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[U("elementProperties")]=new Map,A[U("finalized")]=new Map,Xt?.({ReactiveElement:A}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.2");var B=globalThis,yt=a=>a,tt=B.trustedTypes,xt=tt?tt.createPolicy("lit-html",{createHTML:a=>a}):void 0,St="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Et="?"+C,Yt=`<${Et}>`,N=document,W=()=>N.createComment(""),F=a=>a===null||typeof a!="object"&&typeof a!="function",pt=Array.isArray,Vt=a=>pt(a)||typeof a?.[Symbol.iterator]=="function",rt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,kt=/>/g,L=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,Tt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,ht=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),h=ht(1),ls=ht(2),cs=ht(3),R=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),At=new WeakMap,P=N.createTreeWalker(N,129);function It(a,e){if(!pt(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(e):e}var te=(a,e)=>{let t=a.length-1,s=[],i,r=e===2?"<svg>":e===3?"<math>":"",o=q;for(let c=0;c<t;c++){let l=a[c],v,g,_=-1,T=0;for(;T<l.length&&(o.lastIndex=T,g=o.exec(l),g!==null);)T=o.lastIndex,o===q?g[1]==="!--"?o=$t:g[1]!==void 0?o=kt:g[2]!==void 0?(Ct.test(g[2])&&(i=RegExp("</"+g[2],"g")),o=L):g[3]!==void 0&&(o=L):o===L?g[0]===">"?(o=i??q,_=-1):g[1]===void 0?_=-2:(_=o.lastIndex-g[2].length,v=g[1],o=g[3]===void 0?L:g[3]==='"'?Tt:wt):o===Tt||o===wt?o=L:o===$t||o===kt?o=q:(o=L,i=void 0);let S=o===L&&a[c+1].startsWith("/>")?" ":"";r+=o===q?l+Yt:_>=0?(s.push(v),l.slice(0,_)+St+l.slice(_)+C+S):l+C+(_===-2?c:S)}return[It(a,r+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},Q=class a{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0,c=e.length-1,l=this.parts,[v,g]=te(e,t);if(this.el=a.createElement(v,s),P.currentNode=this.el.content,t===2||t===3){let _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(i=P.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let _ of i.getAttributeNames())if(_.endsWith(St)){let T=g[o++],S=i.getAttribute(_).split(C),Z=/([.?@])?(.*)/.exec(T);l.push({type:1,index:r,name:Z[2],strings:S,ctor:Z[1]==="."?nt:Z[1]==="?"?lt:Z[1]==="@"?ct:M}),i.removeAttribute(_)}else _.startsWith(C)&&(l.push({type:6,index:r}),i.removeAttribute(_));if(Ct.test(i.tagName)){let _=i.textContent.split(C),T=_.length-1;if(T>0){i.textContent=tt?tt.emptyScript:"";for(let S=0;S<T;S++)i.append(_[S],W()),P.nextNode(),l.push({type:2,index:++r});i.append(_[T],W())}}}else if(i.nodeType===8)if(i.data===Et)l.push({type:2,index:r});else{let _=-1;for(;(_=i.data.indexOf(C,_+1))!==-1;)l.push({type:7,index:r}),_+=C.length-1}r++}}static createElement(e,t){let s=N.createElement("template");return s.innerHTML=e,s}};function O(a,e,t=a,s){if(e===R)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,r=F(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(a),i._$AT(a,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=O(a,i._$AS(a,e.values),i,s)),e}var ot=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??N).importNode(t,!0);P.currentNode=i;let r=P.nextNode(),o=0,c=0,l=s[0];for(;l!==void 0;){if(o===l.index){let v;l.type===2?v=new K(r,r.nextSibling,this,e):l.type===1?v=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(v=new dt(r,this,e)),this._$AV.push(v),l=s[++c]}o!==l?.index&&(r=P.nextNode(),o++)}return P.currentNode=N,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},K=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),F(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&F(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Q.createElement(It(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new ot(i,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(e){let t=At.get(e.strings);return t===void 0&&At.set(e.strings,t=new Q(e)),t}k(e){pt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let r of e)i===t.length?t.push(s=new a(this.O(W()),this.O(W()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=yt(e).nextSibling;yt(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},M=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(r===void 0)e=O(this,e,t,0),o=!F(e)||e!==this._$AH&&e!==R,o&&(this._$AH=e);else{let c=e,l,v;for(e=r[0],l=0;l<r.length-1;l++)v=O(this,c[s+l],t,l),v===R&&(v=this._$AH[l]),o||(o=!F(v)||v!==this._$AH[l]),v===m?e=m:e!==m&&(e+=(v??"")+r[l+1]),this._$AH[l]=v}o&&!i&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},nt=class extends M{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},lt=class extends M{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},ct=class extends M{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??m)===R)return;let s=this._$AH,i=e===m&&s!==m||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==m&&(s===m||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},dt=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}};var ee=B.litHtmlPolyfillSupport;ee?.(Q,K),(B.litHtmlVersions??(B.litHtmlVersions=[])).push("3.3.2");var Dt=(a,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let r=t?.renderBefore??null;s._$litPart$=i=new K(e.insertBefore(W(),r),r,void 0,t??{})}return i._$AI(a),i};var J=globalThis,y=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Dt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};y._$litElement$=!0,y.finalized=!0,J.litElementHydrateSupport?.({LitElement:y});var se=J.litElementPolyfillSupport;se?.({LitElement:y});(J.litElementVersions??(J.litElementVersions=[])).push("4.2.2");var I=a=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};var ie={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:V},ae=(a=ie,e,t)=>{let{kind:s,metadata:i}=t,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((a=Object.create(a)).wrapped=!0),r.set(t.name,a),s==="accessor"){let{name:o}=t;return{set(c){let l=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,l,a,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,a,c),c}}}if(s==="setter"){let{name:o}=t;return function(c){let l=this[o];e.call(this,c),this.requestUpdate(o,l,a,!0,c)}}throw Error("Unsupported decorator location: "+s)};function b(a){return(e,t)=>typeof t=="object"?ae(a,e,t):((s,i,r)=>{let o=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(a,e,t)}function u(a){return b({...a,state:!0,attribute:!1})}var Lt="1.3.1",D="ha_home_maintenance";var G=a=>a.callWS({type:`${D}/get_tasks`}),Pt=(a,e)=>a.callWS({type:`${D}/get_task`,task_id:e}),st=(a,e)=>a.callWS({type:`${D}/add_task`,...e}),Nt=(a,e,t)=>a.callWS({type:`${D}/update_task`,task_id:e,...t}),Rt=(a,e)=>a.callWS({type:`${D}/complete_task`,task_id:e}),Ot=(a,e)=>a.callWS({type:`${D}/remove_task`,task_id:e});var Mt=a=>a.callWS({type:`${D}/get_templates`}),Ht=async a=>{try{return await a.callWS({type:"tag/list"})}catch{return[]}},zt=async a=>{try{return await a.callWS({type:"config/label_registry/list"})}catch{return[]}};var H=k`
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
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    white-space: nowrap;
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
`;var ut={};Bt(ut,{actions:()=>xe,add_task:()=>ne,advanced_settings:()=>Ne,all_labels:()=>ze,browse_templates:()=>le,cancel:()=>ke,choose_template:()=>pe,complete:()=>Te,confirm_delete:()=>qe,create_from_scratch:()=>he,create_task:()=>ce,days:()=>Se,default:()=>ss,delete:()=>we,description:()=>me,done:()=>Xe,due_soon:()=>De,edit:()=>Ae,edit_task:()=>de,export_csv:()=>ts,icon:()=>Oe,import:()=>Ze,import_csv:()=>Je,import_csv_info:()=>Ge,interval:()=>ve,interval_type:()=>_e,interval_value:()=>ge,labels:()=>Me,last_performed:()=>fe,months:()=>Ce,never:()=>Pe,next_due:()=>be,no_results:()=>Ye,no_tasks:()=>je,notify_when_overdue:()=>Ve,ok:()=>Le,overdue:()=>Ie,panel_title:()=>re,required_field:()=>Qe,save:()=>$e,search_tasks:()=>He,search_templates:()=>Ue,sort_by:()=>es,status:()=>ye,tag:()=>Re,task_completed:()=>Fe,task_deleted:()=>We,task_saved:()=>Be,tasks:()=>oe,title:()=>ue,today:()=>Ke,weeks:()=>Ee});var re="Home Maintenance Pro",oe="Tasks",ne="Add Task",le="Browse Templates",ce="Create Task",de="Edit Task",pe="Choose a Template",he="Create from Scratch",ue="Title",me="Description",ve="Interval",ge="Interval Value",_e="Interval Type",fe="Last Performed",be="Next Due",ye="Status",xe="Actions",$e="Save",ke="Cancel",we="Delete",Te="Complete",Ae="Edit",Se="Days",Ee="Weeks",Ce="Months",Ie="Overdue",De="Due Soon",Le="OK",Pe="Never",Ne="Advanced Settings",Re="NFC Tag",Oe="Icon",Me="Labels",He="Search tasks...",ze="All Labels",Ue="Search templates...",je="No maintenance tasks yet. Add a task or browse templates to get started.",qe="Are you sure you want to delete this task?",Be="Task saved successfully.",We="Task deleted.",Fe="Task marked as complete.",Qe="This field is required.",Ke="Today",Je="Import CSV",Ge="Upload a CSV file with the following columns (title is required, others are optional):",Ze="Import",Xe="Done",Ye="No templates match your search.",Ve="Notify when overdue",ts="Export CSV",es="Sort by",ss={panel_title:re,tasks:oe,add_task:ne,browse_templates:le,create_task:ce,edit_task:de,choose_template:pe,create_from_scratch:he,title:ue,description:me,interval:ve,interval_value:ge,interval_type:_e,last_performed:fe,next_due:be,status:ye,actions:xe,save:$e,cancel:ke,delete:we,complete:Te,edit:Ae,days:Se,weeks:Ee,months:Ce,overdue:Ie,due_soon:De,ok:Le,never:Pe,advanced_settings:Ne,tag:Re,icon:Oe,labels:Me,search_tasks:He,all_labels:ze,search_templates:Ue,no_tasks:je,confirm_delete:qe,task_saved:Be,task_deleted:We,task_completed:Fe,required_field:Qe,today:Ke,import_csv:Je,import_csv_info:Ge,import:Ze,done:Xe,no_results:Ye,notify_when_overdue:Ve,export_csv:ts,sort_by:es};var Ut={en:ut},jt="en";function n(a,e=jt){return(Ut[e]||Ut[jt])[a]||a}var x=class extends y{constructor(){super(...arguments);this.narrow=!1;this._tasks=[];this._labels=[];this._searchQuery="";this._selectedLabel="";this._sortColumn="title";this._sortDirection="asc";this._loading=!0}static get styles(){return[H,k`
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
      `]}connectedCallback(){super.connectedCallback(),this._loadData()}async _loadData(){this._loading=!0;try{let[t,s]=await Promise.all([G(this.hass),zt(this.hass)]);this._tasks=t,this._labels=s}catch(t){console.error("Failed to load data:",t),this._tasks=[],this._labels=[]}this._loading=!1}async _loadTasks(){try{this._tasks=await G(this.hass)}catch(t){console.error("Failed to load tasks:",t),this._tasks=[]}}get _filteredTasks(){let t=this._tasks,s=this._searchQuery.toLowerCase().trim();return s&&(t=t.filter(i=>i.title.toLowerCase().includes(s)||i.description&&i.description.toLowerCase().includes(s))),this._selectedLabel&&(t=t.filter(i=>i.labels&&i.labels.includes(this._selectedLabel))),t}get _sortedTasks(){let t=[...this._filteredTasks],s=this._sortDirection==="asc"?1:-1;return t.sort((i,r)=>{let o=0;switch(this._sortColumn){case"title":o=i.title.localeCompare(r.title);break;case"interval":o=this._intervalToDays(i)-this._intervalToDays(r);break;case"last_performed":{let c=i.last_performed?new Date(i.last_performed).getTime():0,l=r.last_performed?new Date(r.last_performed).getTime():0;o=c-l;break}case"next_due":{let c=this._getNextDueTimestamp(i),l=this._getNextDueTimestamp(r);o=c-l;break}case"labels":{let c=i.labels?.length?i.labels.map(v=>this._getLabelName(v)).sort().join(", "):"",l=r.labels?.length?r.labels.map(v=>this._getLabelName(v)).sort().join(", "):"";o=c.localeCompare(l);break}case"status":{let c={overdue:0,due_soon:1,ok:2};o=(c[this._getStatus(i)]??3)-(c[this._getStatus(r)]??3);break}}return o*s}),t}_intervalToDays(t){let s=t.interval_value;switch(t.interval_type){case"days":return s;case"weeks":return s*7;case"months":return s*30;default:return s}}_getNextDueTimestamp(t){if(!t.last_performed)return 0;let s=new Date(t.last_performed),i=new Date(s);switch(t.interval_type){case"days":i.setDate(i.getDate()+t.interval_value);break;case"weeks":i.setDate(i.getDate()+t.interval_value*7);break;case"months":i.setMonth(i.getMonth()+t.interval_value);break}return i.getTime()}_getNextDueString(t){if(!t.last_performed)return n("never",this.hass?.language);let s=this._getNextDueTimestamp(t);return new Date(s).toLocaleDateString()}_getStatus(t){if(!t.last_performed)return"overdue";let s=Date.now(),i=this._getNextDueTimestamp(t);if(i<=s)return"overdue";let r=7*24*60*60*1e3;return i-s<=r?"due_soon":"ok"}_getStatusLabel(t){let s=this.hass?.language;switch(t){case"overdue":return n("overdue",s);case"due_soon":return n("due_soon",s);case"ok":return n("ok",s)}}_getStatusClass(t){switch(t){case"overdue":return"status-overdue";case"due_soon":return"status-due-soon";case"ok":return"status-ok"}}_formatInterval(t){let s=n(t.interval_type,this.hass?.language);return`${t.interval_value} ${s.toLowerCase()}`}_formatDate(t){return t?new Date(t).toLocaleDateString():n("never",this.hass?.language)}_sort(t){this._sortColumn===t?this._sortDirection=this._sortDirection==="asc"?"desc":"asc":(this._sortColumn=t,this._sortDirection="asc")}_sortIndicator(t){return this._sortColumn!==t?"":this._sortDirection==="asc"?" \u25B2":" \u25BC"}async _completeTask(t){try{await Rt(this.hass,t.id),await this._loadTasks()}catch(s){console.error("Failed to complete task:",s)}}_editTask(t){this.dispatchEvent(new CustomEvent("navigate-to-edit",{bubbles:!0,composed:!0,detail:{taskId:t.id}}))}async _deleteTask(t){let s=n("confirm_delete",this.hass?.language);if(window.confirm(s))try{await Ot(this.hass,t.id),await this._loadTasks()}catch(i){console.error("Failed to delete task:",i)}}_navigateToCreate(){this.dispatchEvent(new CustomEvent("navigate-to-create",{bubbles:!0,composed:!0}))}_handleSearchInput(t){this._searchQuery=t.target.value}_handleLabelFilter(t){this._selectedLabel=t.target.value}_handleSortChange(t){let s=t.target.value,[i,r]=s.split("-");this._sortColumn=i,this._sortDirection=r}_getLabelName(t){let s=this._labels.find(i=>i.label_id===t);return s?s.name:t}_navigateToTemplates(){this.dispatchEvent(new CustomEvent("navigate-to-templates",{bubbles:!0,composed:!0}))}render(){return this._loading?h`<div class="loading">Loading...</div>`:h`
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
    `}_renderFilterBar(){let t=new Set;for(let i of this._tasks)if(i.labels)for(let r of i.labels)t.add(r);let s=this._labels.filter(i=>t.has(i.label_id));return h`
      <div class="filter-bar">
        <input
          type="text"
          placeholder="${n("search_tasks",this.hass?.language)}"
          .value=${this._searchQuery}
          @input=${this._handleSearchInput}
        />
        ${s.length>0?h`
              <select .value=${this._selectedLabel} @change=${this._handleLabelFilter}>
                <option value="">${n("all_labels",this.hass?.language)}</option>
                ${s.map(i=>h`<option value=${i.label_id}>${i.name}</option>`)}
              </select>
            `:m}
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
          ${t.description?h`<div class="subtitle">${t.description}</div>`:m}
        </div>
        <div>${this._formatInterval(t)}</div>
        <div class="hide-medium">${this._formatDate(t.last_performed)}</div>
        <div class="hide-medium">${this._getNextDueString(t)}</div>
        <div class="hide-medium task-labels">
          ${t.labels&&t.labels.length>0?t.labels.map(o=>h`<span class="label-chip">${this._getLabelName(o)}</span>`):m}
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
    `}};p([b({attribute:!1})],x.prototype,"hass",2),p([b({type:Boolean})],x.prototype,"narrow",2),p([u()],x.prototype,"_tasks",2),p([u()],x.prototype,"_labels",2),p([u()],x.prototype,"_searchQuery",2),p([u()],x.prototype,"_selectedLabel",2),p([u()],x.prototype,"_sortColumn",2),p([u()],x.prototype,"_sortDirection",2),p([u()],x.prototype,"_loading",2),x=p([I("task-list-view")],x);var f=class extends y{constructor(){super(...arguments);this.narrow=!1;this.taskId=null;this.templateData=null;this._title="";this._description="";this._intervalValue=30;this._intervalType="days";this._lastPerformed="";this._tagId="";this._icon="mdi:toolbox";this._labels=[];this._notifyWhenOverdue=!1;this._loading=!1;this._showAdvanced=!1;this._tags=[]}static get styles(){return[H,k`
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
      `]}async firstUpdated(){this._loading=!0;try{await this._loadTags(),this.taskId?await this._loadExistingTask():this.templateData&&this._populateFromTemplate(this.templateData)}finally{this._loading=!1}}async _loadTags(){try{this._tags=await Ht(this.hass)}catch{this._tags=[]}}async _loadExistingTask(){if(this.taskId)try{let t=await Pt(this.hass,this.taskId);this._title=t.title,this._description=t.description||"",this._intervalValue=t.interval_value,this._intervalType=t.interval_type,this._lastPerformed=t.last_performed||"",this._tagId=t.tag_id||"",this._icon=t.icon||"mdi:toolbox",this._labels=t.labels||[],this._notifyWhenOverdue=t.notify_when_overdue||!1}catch(t){console.error("Failed to load task:",t)}}_populateFromTemplate(t){this._title=t.title,this._description=t.description||"",this._intervalValue=t.interval_value,this._intervalType=t.interval_type,this._icon=t.icon||"mdi:toolbox"}_handleTitleInput(t){this._title=t.target.value}_handleDescriptionInput(t){this._description=t.target.value}_handleIntervalValueInput(t){this._intervalValue=parseInt(t.target.value,10)||1}_handleIntervalTypeChange(t){this._intervalType=t.target.value}_handleLastPerformedInput(t){this._lastPerformed=t.target.value}_handleTagChange(t){this._tagId=t.target.value}_handleIconInput(t){this._icon=t.target.value}_handleNotifyToggle(t){this._notifyWhenOverdue=t.target.checked}_toggleAdvanced(){this._showAdvanced=!this._showAdvanced}_validate(){return!(!this._title.trim()||!this._intervalValue||this._intervalValue<1)}async _save(){if(this._validate()){this._loading=!0;try{let t={title:this._title.trim(),description:this._description.trim(),interval_value:this._intervalValue,interval_type:this._intervalType,last_performed:this._lastPerformed||null,tag_id:this._tagId||null,icon:this._icon||"mdi:toolbox",labels:this._labels,notify_when_overdue:this._notifyWhenOverdue};this.taskId?await Nt(this.hass,this.taskId,t):await st(this.hass,t),this._navigateToList()}catch(t){console.error("Failed to save task:",t)}finally{this._loading=!1}}}_cancel(){this._navigateToList()}_navigateToList(){this.dispatchEvent(new CustomEvent("navigate-to-list",{bubbles:!0,composed:!0}))}render(){if(this._loading)return h`
        <div class="loading-overlay">Loading...</div>
      `;let s=!!this.taskId?n("edit_task",this.hass?.language):n("create_task",this.hass?.language);return h`
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
            ${!this._title.trim()&&this._title!==""?h`<div class="error-message">${n("required_field",this.hass?.language)}</div>`:m}
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
                      <input
                        type="text"
                        .value=${this._labels.join(", ")}
                        @input=${this._handleLabelsInput}
                        placeholder="label1, label2"
                      />
                    </div>
                  </div>
                `:m}
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
    `}_handleLabelsInput(t){let s=t.target.value;this._labels=s.split(",").map(i=>i.trim()).filter(i=>i.length>0)}};p([b({attribute:!1})],f.prototype,"hass",2),p([b({type:Boolean})],f.prototype,"narrow",2),p([b({type:String})],f.prototype,"taskId",2),p([b({attribute:!1})],f.prototype,"templateData",2),p([u()],f.prototype,"_title",2),p([u()],f.prototype,"_description",2),p([u()],f.prototype,"_intervalValue",2),p([u()],f.prototype,"_intervalType",2),p([u()],f.prototype,"_lastPerformed",2),p([u()],f.prototype,"_tagId",2),p([u()],f.prototype,"_icon",2),p([u()],f.prototype,"_labels",2),p([u()],f.prototype,"_notifyWhenOverdue",2),p([u()],f.prototype,"_loading",2),p([u()],f.prototype,"_showAdvanced",2),p([u()],f.prototype,"_tags",2),f=p([I("task-form-view")],f);var $=class extends y{constructor(){super(...arguments);this.narrow=!1;this._templates=[];this._searchQuery="";this._expandedCategories=new Set;this._importPreview=[];this._showImportDialog=!1;this._importing=!1;this._importResult=""}static get styles(){return[H,k`
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
      `]}connectedCallback(){super.connectedCallback(),this._loadTemplates()}async _loadTemplates(){try{this._templates=await Mt(this.hass);let t=new Set(this._templates.map(s=>s.category));this._expandedCategories=t}catch(t){console.error("Failed to load templates:",t),this._templates=[]}}_getFilteredTemplates(){if(!this._searchQuery.trim())return this._templates;let t=this._searchQuery.toLowerCase().trim();return this._templates.filter(s=>s.title.toLowerCase().includes(t)||s.description&&s.description.toLowerCase().includes(t))}_groupByCategory(t){let s={};for(let r of t){let o=r.category||"Other";s[o]||(s[o]=[]),s[o].push(r)}let i={};for(let r of Object.keys(s).sort())i[r]=s[r];return i}_toggleCategory(t){let s=new Set(this._expandedCategories);s.has(t)?s.delete(t):s.add(t),this._expandedCategories=s}_selectTemplate(t){this.dispatchEvent(new CustomEvent("select-template",{detail:{template:t},bubbles:!0,composed:!0}))}_createFromScratch(){this.dispatchEvent(new CustomEvent("navigate-to-create",{bubbles:!0,composed:!0}))}_triggerFileInput(){let t=this.shadowRoot?.querySelector('input[type="file"]');t&&(t.value="",t.click())}_handleFileSelect(t){let i=t.target.files?.[0];if(!i)return;let r=new FileReader;r.onload=()=>{let o=r.result,c=this._parseCsv(o);if(c.length===0){this._importResult="No valid rows found in CSV.",this._showImportDialog=!0;return}this._importPreview=c,this._importResult="",this._showImportDialog=!0},r.onerror=()=>{this._importResult="Failed to read file.",this._showImportDialog=!0},r.readAsText(i)}_parseCsv(t){let s=t.split(/\r?\n/).filter(o=>o.trim());if(s.length<2)return[];let i=this._parseCsvLine(s[0]).map(o=>o.trim().toLowerCase());if(!i.includes("title"))return[];let r=[];for(let o=1;o<s.length;o++){let c=this._parseCsvLine(s[o]),l={};for(let v=0;v<i.length;v++)l[i[v]]=(c[v]||"").trim();l.title&&r.push(l)}return r}_parseCsvLine(t){let s=[],i="",r=!1;for(let o=0;o<t.length;o++){let c=t[o];r?c==='"'?o+1<t.length&&t[o+1]==='"'?(i+='"',o++):r=!1:i+=c:c==='"'?r=!0:c===","?(s.push(i),i=""):i+=c}return s.push(i),s}async _doImport(){this._importing=!0,this._importResult="";let t=0,s=0;for(let i of this._importPreview)try{let r={title:i.title,description:i.description||"",interval_value:parseInt(i.interval_value,10)||30,interval_type:i.interval_type||"days",icon:i.icon||"mdi:toolbox",last_performed:i.last_performed||null};await st(this.hass,r),t++}catch{s++}this._importing=!1,s===0?this._importResult=`Successfully imported ${t} task${t!==1?"s":""}.`:this._importResult=`Imported ${t}, failed ${s}.`,this._importPreview=[]}_closeImportDialog(){this._showImportDialog=!1,this._importPreview=[],this._importResult=""}async _exportCsv(){let t;try{t=await G(this.hass)}catch{return}let s=["title","description","interval_value","interval_type","last_performed","icon","labels","notify_when_overdue"],i=g=>g.includes(",")||g.includes('"')||g.includes(`
`)?`"${g.replace(/"/g,'""')}"`:g,r=t.map(g=>[i(g.title),i(g.description||""),String(g.interval_value),g.interval_type,g.last_performed||"",g.icon||"",i((g.labels||[]).join("; ")),g.notify_when_overdue?"true":"false"].join(",")),o=[s.join(","),...r].join(`
`),c=new Blob([o],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(c),v=document.createElement("a");v.href=l,v.download="home_maintenance_tasks.csv",v.click(),URL.revokeObjectURL(l)}_goBack(){this.dispatchEvent(new CustomEvent("navigate-to-list",{bubbles:!0,composed:!0}))}_onSearchInput(t){this._searchQuery=t.target.value}render(){let t=this._getFilteredTemplates(),s=this._groupByCategory(t),i=Object.keys(s).length>0;return h`
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
              ${Object.entries(s).map(([r,o])=>{let c=this._expandedCategories.has(r);return h`
                  <div class="template-category">
                    <h2 @click=${()=>this._toggleCategory(r)}>
                      ${r}
                      <ha-icon
                        icon=${c?"mdi:chevron-up":"mdi:chevron-down"}
                      ></ha-icon>
                      <span class="category-count"
                        >(${o.length})</span
                      >
                    </h2>
                    ${c?h`
                          <div class="template-grid">
                            ${o.map(l=>h`
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
                        `:m}
                  </div>
                `})}
            `:h`
              <div class="empty-state">
                ${n("no_results",this.hass?.language)}
              </div>
            `}

        ${this._showImportDialog?this._renderImportDialog():m}
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
                            ${t.filter(r=>this._importPreview.some(o=>o[r])).map(r=>h`<td>${i[r]||""}</td>`)}
                          </tr>
                        `)}
                    </tbody>
                  </table>
                </div>
                <div class="import-info">
                  ${this._importPreview.length} ${n("tasks",this.hass?.language).toLowerCase()}
                </div>
              `:m}

          ${this._importResult?h`<div class="import-result${this._importResult.includes("failed")?" error":""}">${this._importResult}</div>`:m}

          <div class="import-actions">
            <button class="btn" @click=${this._closeImportDialog}>
              ${this._importResult&&!this._importResult.includes("failed")?n("done",this.hass?.language):n("cancel",this.hass?.language)}
            </button>
            ${s&&!this._importing?h`
                  <button class="btn primary" @click=${this._doImport}>
                    ${n("import",this.hass?.language)} (${this._importPreview.length})
                  </button>
                `:m}
            ${this._importing?h`<span>Importing...</span>`:m}
          </div>
        </div>
      </div>
    `}};p([b({attribute:!1})],$.prototype,"hass",2),p([b({type:Boolean})],$.prototype,"narrow",2),p([u()],$.prototype,"_templates",2),p([u()],$.prototype,"_searchQuery",2),p([u()],$.prototype,"_expandedCategories",2),p([u()],$.prototype,"_importPreview",2),p([u()],$.prototype,"_showImportDialog",2),p([u()],$.prototype,"_importing",2),p([u()],$.prototype,"_importResult",2),$=p([I("template-picker-view")],$);var w=class extends y{constructor(){super(...arguments);this.narrow=!1;this.panel={};this._currentView="list";this._editTaskId=null;this._templateData=null}static get styles(){return k`
      :host {
        display: block;
      }
    `}connectedCallback(){super.connectedCallback(),console.info(`%c ha-home-maintenance %c ${Lt} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;")}_onNavigateToCreate(){this._currentView="create",this._editTaskId=null,this._templateData=null}_onNavigateToEdit(t){this._currentView="edit",this._editTaskId=t.detail.taskId}_onNavigateToTemplates(){this._currentView="templates"}_onNavigateToList(){this._currentView="list"}_onSelectTemplate(t){this._currentView="create",this._templateData=t.detail.template}render(){switch(this._currentView){case"list":return h`
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
        `}}};p([b({attribute:!1})],w.prototype,"hass",2),p([b({type:Boolean})],w.prototype,"narrow",2),p([b({attribute:!1})],w.prototype,"panel",2),p([u()],w.prototype,"_currentView",2),p([u()],w.prototype,"_editTaskId",2),p([u()],w.prototype,"_templateData",2),w=p([I("ha-home-maintenance-panel")],w);export{w as HaHomeMaintenancePanel};
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
