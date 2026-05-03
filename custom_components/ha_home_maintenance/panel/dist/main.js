var be=Object.defineProperty;var Ye=Object.getOwnPropertyDescriptor;var Ze=(a,t)=>{for(var e in t)be(a,e,{get:t[e],enumerable:!0})};var p=(a,t,e,i)=>{for(var r=i>1?void 0:i?Ye(t,e):t,o=a.length-1,n;o>=0;o--)(n=a[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&be(t,e,r),r};var X=globalThis,V=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol(),ye=new WeakMap,M=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(V&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=ye.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ye.set(e,t))}return t}toString(){return this.cssText}},xe=a=>new M(typeof a=="string"?a:a+"",void 0,ne),k=(a,...t)=>{let e=a.length===1?a[0]:t.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[o+1],a[0]);return new M(e,a,ne)},we=(a,t)=>{if(V)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),r=X.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,a.appendChild(i)}},le=V?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return xe(e)})(a):a;var{is:Xe,defineProperty:Ve,getOwnPropertyDescriptor:et,getOwnPropertyNames:tt,getOwnPropertySymbols:st,getPrototypeOf:it}=Object,A=globalThis,ke=A.trustedTypes,rt=ke?ke.emptyScript:"",at=A.reactiveElementPolyfillSupport,U=(a,t)=>a,j={toAttribute(a,t){switch(t){case Boolean:a=a?rt:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},ee=(a,t)=>!Xe(a,t),$e={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);var T=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$e){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Ve(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){let{get:r,set:o}=et(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let d=r?.call(this);o?.call(this,n),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$e}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let t=it(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let e=this.properties,i=[...tt(e),...st(e)];for(let r of i)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let r of i)e.unshift(le(r))}else t!==void 0&&e.push(le(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return we(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:j).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=i.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=r;let d=n.fromAttribute(e,o.type);this[r]=d??this._$Ej?.get(r)??d,this._$Em=null}}requestUpdate(t,e,i,r=!1,o){if(t!==void 0){let n=this.constructor;if(r===!1&&(o=this[t]),i??(i=n.getPropertyOptions(t)),!((i.hasChanged??ee)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,o]of i){let{wrapped:n}=o,d=this[r];n!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,o,d)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[U("elementProperties")]=new Map,T[U("finalized")]=new Map,at?.({ReactiveElement:T}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.2");var W=globalThis,Ce=a=>a,te=W.trustedTypes,Te=te?te.createPolicy("lit-html",{createHTML:a=>a}):void 0,Re="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,De="?"+E,ot=`<${De}>`,P=document,B=()=>P.createComment(""),F=a=>a===null||typeof a!="object"&&typeof a!="function",ge=Array.isArray,nt=a=>ge(a)||typeof a?.[Symbol.iterator]=="function",ce=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Ae=/>/g,R=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,Ie=/"/g,Pe=/^(?:script|style|textarea|title)$/i,me=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),h=me(1),bo=me(2),yo=me(3),z=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Le=new WeakMap,D=P.createTreeWalker(P,129);function ze(a,t){if(!ge(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Te!==void 0?Te.createHTML(t):t}var lt=(a,t)=>{let e=a.length-1,i=[],r,o=t===2?"<svg>":t===3?"<math>":"",n=q;for(let d=0;d<e;d++){let c=a[d],g,m,v=-1,C=0;for(;C<c.length&&(n.lastIndex=C,m=n.exec(c),m!==null);)C=n.lastIndex,n===q?m[1]==="!--"?n=Se:m[1]!==void 0?n=Ae:m[2]!==void 0?(Pe.test(m[2])&&(r=RegExp("</"+m[2],"g")),n=R):m[3]!==void 0&&(n=R):n===R?m[0]===">"?(n=r??q,v=-1):m[1]===void 0?v=-2:(v=n.lastIndex-m[2].length,g=m[1],n=m[3]===void 0?R:m[3]==='"'?Ie:Ee):n===Ie||n===Ee?n=R:n===Se||n===Ae?n=q:(n=R,r=void 0);let S=n===R&&a[d+1].startsWith("/>")?" ":"";o+=n===q?c+ot:v>=0?(i.push(g),c.slice(0,v)+Re+c.slice(v)+E+S):c+E+(v===-2?d:S)}return[ze(a,o+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},K=class a{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0,d=t.length-1,c=this.parts,[g,m]=lt(t,e);if(this.el=a.createElement(g,i),D.currentNode=this.el.content,e===2||e===3){let v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(r=D.nextNode())!==null&&c.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(let v of r.getAttributeNames())if(v.endsWith(Re)){let C=m[n++],S=r.getAttribute(v).split(E),Z=/([.?@])?(.*)/.exec(C);c.push({type:1,index:o,name:Z[2],strings:S,ctor:Z[1]==="."?pe:Z[1]==="?"?he:Z[1]==="@"?_e:H}),r.removeAttribute(v)}else v.startsWith(E)&&(c.push({type:6,index:o}),r.removeAttribute(v));if(Pe.test(r.tagName)){let v=r.textContent.split(E),C=v.length-1;if(C>0){r.textContent=te?te.emptyScript:"";for(let S=0;S<C;S++)r.append(v[S],B()),D.nextNode(),c.push({type:2,index:++o});r.append(v[C],B())}}}else if(r.nodeType===8)if(r.data===De)c.push({type:2,index:o});else{let v=-1;for(;(v=r.data.indexOf(E,v+1))!==-1;)c.push({type:7,index:o}),v+=E.length-1}o++}}static createElement(t,e){let i=P.createElement("template");return i.innerHTML=t,i}};function N(a,t,e=a,i){if(t===z)return t;let r=i!==void 0?e._$Co?.[i]:e._$Cl,o=F(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(a),r._$AT(a,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=r:e._$Cl=r),r!==void 0&&(t=N(a,r._$AS(a,t.values),r,i)),t}var de=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??P).importNode(e,!0);D.currentNode=r;let o=D.nextNode(),n=0,d=0,c=i[0];for(;c!==void 0;){if(n===c.index){let g;c.type===2?g=new Q(o,o.nextSibling,this,t):c.type===1?g=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(g=new ue(o,this,t)),this._$AV.push(g),c=i[++d]}n!==c?.index&&(o=D.nextNode(),n++)}return D.currentNode=P,r}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Q=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),F(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=K.createElement(ze(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{let o=new de(r,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Le.get(t.strings);return e===void 0&&Le.set(t.strings,e=new K(t)),e}k(t){ge(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,r=0;for(let o of t)r===e.length?e.push(i=new a(this.O(B()),this.O(B()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Ce(t).nextSibling;Ce(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,e=this,i,r){let o=this.strings,n=!1;if(o===void 0)t=N(this,t,e,0),n=!F(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{let d=t,c,g;for(t=o[0],c=0;c<o.length-1;c++)g=N(this,d[i+c],e,c),g===z&&(g=this._$AH[c]),n||(n=!F(g)||g!==this._$AH[c]),g===_?t=_:t!==_&&(t+=(g??"")+o[c+1]),this._$AH[c]=g}n&&!r&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},pe=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},he=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},_e=class extends H{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??_)===z)return;let i=this._$AH,r=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==_&&(i===_||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ue=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};var ct=W.litHtmlPolyfillSupport;ct?.(K,Q),(W.litHtmlVersions??(W.litHtmlVersions=[])).push("3.3.2");var Ne=(a,t,e)=>{let i=e?.renderBefore??t,r=i._$litPart$;if(r===void 0){let o=e?.renderBefore??null;i._$litPart$=r=new Q(t.insertBefore(B(),o),o,void 0,e??{})}return r._$AI(a),r};var G=globalThis,y=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ne(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};y._$litElement$=!0,y.finalized=!0,G.litElementHydrateSupport?.({LitElement:y});var dt=G.litElementPolyfillSupport;dt?.({LitElement:y});(G.litElementVersions??(G.litElementVersions=[])).push("4.2.2");var I=a=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(a,t)}):customElements.define(a,t)};var pt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:ee},ht=(a=pt,t,e)=>{let{kind:i,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((a=Object.create(a)).wrapped=!0),o.set(e.name,a),i==="accessor"){let{name:n}=e;return{set(d){let c=t.get.call(this);t.set.call(this,d),this.requestUpdate(n,c,a,!0,d)},init(d){return d!==void 0&&this.C(n,void 0,a,d),d}}}if(i==="setter"){let{name:n}=e;return function(d){let c=this[n];t.call(this,d),this.requestUpdate(n,c,a,!0,d)}}throw Error("Unsupported decorator location: "+i)};function b(a){return(t,e)=>typeof e=="object"?ht(a,t,e):((i,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(a,t,e)}function u(a){return b({...a,state:!0,attribute:!1})}var He="1.6.0",L="ha_home_maintenance";var _t={red:"#f44336",pink:"#e91e63",purple:"#9c27b0","deep-purple":"#673ab7",indigo:"#3f51b5",blue:"#2196f3","light-blue":"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caf50","light-green":"#8bc34a",lime:"#cddc39",yellow:"#ffeb3b",amber:"#ffc107",orange:"#ff9800","deep-orange":"#ff5722",brown:"#795548",grey:"#9e9e9e","blue-grey":"#607d8b"};function Oe(a){return _t[a.toLowerCase()]??a}function ie(a){if(!a)return"";let t=Oe(a);if(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(t)){let e=t.slice(1);e.length===3&&(e=e.split("").map(c=>c+c).join(""));let i=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16),d=(.299*i+.587*r+.114*o)/255>.5?`rgb(${Math.round(i*.5)},${Math.round(r*.5)},${Math.round(o*.5)})`:t;return`background:rgba(${i},${r},${o},0.12);color:${d};`}return`border-left:3px solid ${t};padding-left:5px;`}function re(a){return a?`background:${Oe(a)};color:#fff;`:""}var J=a=>a.callWS({type:`${L}/get_tasks`}),Me=(a,t)=>a.callWS({type:`${L}/get_task`,task_id:t}),ae=(a,t)=>a.callWS({type:`${L}/add_task`,...t}),Ue=(a,t,e)=>a.callWS({type:`${L}/update_task`,task_id:t,...e}),je=(a,t)=>a.callWS({type:`${L}/complete_task`,task_id:t}),qe=(a,t)=>a.callWS({type:`${L}/remove_task`,task_id:t});var We=a=>a.callWS({type:`${L}/get_templates`}),Be=async a=>{try{return await a.callWS({type:"tag/list"})}catch{return[]}},oe=async a=>{try{return await a.callWS({type:"config/label_registry/list"})}catch{return[]}};var O=k`
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
`;var ve={};Ze(ve,{actions:()=>It,add_custom_label_placeholder:()=>fs,add_task:()=>mt,advanced_settings:()=>Wt,all_labels:()=>Gt,browse_templates:()=>vt,cancel:()=>Rt,category_appliances:()=>Cs,category_electrical:()=>ws,category_exterior:()=>ks,category_fireplace_chimney:()=>Ds,category_garage_vehicles:()=>Es,category_hvac:()=>ys,category_interior:()=>$s,category_lawn_garden:()=>Ss,category_painting_finishes:()=>zs,category_pest_control:()=>Ls,category_plumbing:()=>xs,category_pool_spa:()=>Is,category_safety:()=>Ts,category_seasonal:()=>As,category_septic_system:()=>Ps,category_water_treatment:()=>Rs,choose_template:()=>yt,clear:()=>ps,complete:()=>Pt,completion_history:()=>_s,confirm_delete:()=>Zt,create_from_scratch:()=>xt,create_task:()=>ft,custom_label_hint:()=>bs,days:()=>Nt,default:()=>_o,delete:()=>Dt,description:()=>kt,done:()=>os,due_soon:()=>Ut,edit:()=>zt,edit_task:()=>bt,export_csv:()=>cs,icon:()=>Ft,import:()=>as,import_csv:()=>is,import_csv_info:()=>rs,importing:()=>ms,interval:()=>$t,interval_type:()=>Tt,interval_value:()=>Ct,labels:()=>Kt,last_performed:()=>St,loading:()=>gs,months:()=>Ot,never:()=>qt,next_due:()=>At,no_history:()=>us,no_results:()=>ns,no_tasks:()=>Yt,none_option:()=>vs,notify_when_overdue:()=>ls,ok:()=>jt,overdue:()=>Mt,panel_title:()=>ut,required_field:()=>ts,save:()=>Lt,search_tasks:()=>Qt,search_templates:()=>Jt,sort_by:()=>ds,status:()=>Et,tag:()=>Bt,task_completed:()=>es,task_deleted:()=>Vt,task_saved:()=>Xt,tasks:()=>gt,title:()=>wt,today:()=>ss,tpl_desc_add_salt_to_water_softener:()=>Ha,tpl_desc_add_septic_treatment:()=>io,tpl_desc_aerate_lawn:()=>Sr,tpl_desc_bleed_radiators:()=>Qs,tpl_desc_change_engine_oil:()=>na,tpl_desc_change_hvac_filter:()=>Hs,tpl_desc_check_attic_for_rodents:()=>La,tpl_desc_check_caulking_around_windows:()=>Si,tpl_desc_check_electrical_panel:()=>_i,tpl_desc_check_fire_extinguisher_pressure:()=>cr,tpl_desc_check_fireplace_damper:()=>Za,tpl_desc_check_first_aid_kit:()=>gr,tpl_desc_check_for_leaks_under_sinks:()=>Zs,tpl_desc_check_garage_door_weather_seal:()=>Vr,tpl_desc_check_thermostat_calibration:()=>Fs,tpl_desc_check_toilet_components:()=>ci,tpl_desc_check_vehicle_tire_pressure:()=>ia,tpl_desc_check_weather_stripping:()=>Mr,tpl_desc_check_window_locks:()=>ji,tpl_desc_clean_air_vents:()=>Ms,tpl_desc_clean_bird_feeders:()=>Da,tpl_desc_clean_condensate_drain_line:()=>Js,tpl_desc_clean_dishwasher:()=>Qi,tpl_desc_clean_drains:()=>Wi,tpl_desc_clean_dryer_lint_trap_deep:()=>ar,tpl_desc_clean_dryer_vent:()=>Li,tpl_desc_clean_faucet_aerators:()=>ti,tpl_desc_clean_fireplace_firebox:()=>Ja,tpl_desc_clean_garbage_disposal:()=>ni,tpl_desc_clean_gutters:()=>xi,tpl_desc_clean_outdoor_furniture:()=>Er,tpl_desc_clean_oven:()=>tr,tpl_desc_clean_pool_filter:()=>_a,tpl_desc_clean_range_hood_filter:()=>Hi,tpl_desc_clean_refrigerator_coils:()=>Zi,tpl_desc_clean_spa_filter:()=>xa,tpl_desc_clean_washing_machine:()=>Ji,tpl_desc_clean_water_softener_brine_tank:()=>Ma,tpl_desc_clean_window_screens:()=>Qr,tpl_desc_deep_clean_carpets:()=>zi,tpl_desc_defrost_freezer:()=>ir,tpl_desc_drain_and_refill_spa:()=>ka,tpl_desc_fertilize_lawn:()=>xr,tpl_desc_flush_water_heater:()=>Vs,tpl_desc_inspect_attic_insulation:()=>Fr,tpl_desc_inspect_chimney_cap_and_flashing:()=>Qa,tpl_desc_inspect_ductwork:()=>js,tpl_desc_inspect_extension_cords:()=>bi,tpl_desc_inspect_exterior_paint:()=>no,tpl_desc_inspect_fire_escape_routes:()=>vr,tpl_desc_inspect_for_termites:()=>Ca,tpl_desc_inspect_foundation:()=>Ei,tpl_desc_inspect_irrigation_system:()=>Lr,tpl_desc_inspect_pool_pump_and_motor:()=>va,tpl_desc_inspect_roof:()=>ki,tpl_desc_inspect_septic_drain_field:()=>to,tpl_desc_inspect_washing_machine_hoses:()=>ai,tpl_desc_lubricate_door_hinges:()=>Fi,tpl_desc_lubricate_garage_door:()=>Jr,tpl_desc_mow_lawn:()=>br,tpl_desc_organize_garage_storage:()=>ta,tpl_desc_power_wash_siding:()=>Ci,tpl_desc_prune_shrubs:()=>Cr,tpl_desc_pump_septic_tank:()=>Va,tpl_desc_recaulk_bathroom:()=>Mi,tpl_desc_refinish_deck_or_porch:()=>co,tpl_desc_refresh_ant_and_roach_bait_stations:()=>Sa,tpl_desc_replace_reverse_osmosis_filters:()=>ja,tpl_desc_replace_smoke_detector_batteries:()=>gi,tpl_desc_replace_water_filter:()=>Vi,tpl_desc_replace_whole_house_water_filter:()=>za,tpl_desc_replace_windshield_wipers:()=>ca,tpl_desc_reverse_ceiling_fan_direction:()=>Hr,tpl_desc_review_emergency_plan:()=>pr,tpl_desc_rotate_vehicle_tires:()=>aa,tpl_desc_schedule_chimney_sweep:()=>Fa,tpl_desc_seal_driveway_cracks:()=>Di,tpl_desc_seal_entry_points:()=>Ea,tpl_desc_seal_grout_lines:()=>ho,tpl_desc_service_ac_unit:()=>Ws,tpl_desc_service_snow_blower:()=>zr,tpl_desc_sharpen_mower_blades:()=>kr,tpl_desc_shock_treat_pool:()=>ba,tpl_desc_skim_and_vacuum_pool:()=>ga,tpl_desc_store_or_retrieve_seasonal_items:()=>jr,tpl_desc_test_carbon_monoxide_detectors:()=>vi,tpl_desc_test_garage_door_auto_reverse:()=>Zr,tpl_desc_test_gfci_outlets:()=>pi,tpl_desc_test_outdoor_lighting:()=>Wr,tpl_desc_test_pool_water_chemistry:()=>pa,tpl_desc_test_security_system:()=>_r,tpl_desc_test_smoke_detectors:()=>nr,tpl_desc_test_sump_pump:()=>ii,tpl_desc_test_well_water_quality:()=>Wa,tpl_desc_touch_up_interior_paint:()=>ao,tpl_desc_winterize_outdoor_faucets:()=>Dr,tpl_title_add_salt_to_water_softener:()=>Na,tpl_title_add_septic_treatment:()=>so,tpl_title_aerate_lawn:()=>Tr,tpl_title_bleed_radiators:()=>Ks,tpl_title_change_engine_oil:()=>oa,tpl_title_change_hvac_filter:()=>Ns,tpl_title_check_attic_for_rodents:()=>Ia,tpl_title_check_caulking_around_windows:()=>Ti,tpl_title_check_electrical_panel:()=>hi,tpl_title_check_fire_extinguisher_pressure:()=>lr,tpl_title_check_fireplace_damper:()=>Ya,tpl_title_check_first_aid_kit:()=>ur,tpl_title_check_for_leaks_under_sinks:()=>Ys,tpl_title_check_garage_door_weather_seal:()=>Xr,tpl_title_check_thermostat_calibration:()=>Bs,tpl_title_check_toilet_components:()=>li,tpl_title_check_vehicle_tire_pressure:()=>sa,tpl_title_check_weather_stripping:()=>Or,tpl_title_check_window_locks:()=>Ui,tpl_title_clean_air_vents:()=>Os,tpl_title_clean_bird_feeders:()=>Ra,tpl_title_clean_condensate_drain_line:()=>Gs,tpl_title_clean_dishwasher:()=>Ki,tpl_title_clean_drains:()=>qi,tpl_title_clean_dryer_lint_trap_deep:()=>rr,tpl_title_clean_dryer_vent:()=>Ii,tpl_title_clean_faucet_aerators:()=>ei,tpl_title_clean_fireplace_firebox:()=>Ga,tpl_title_clean_garbage_disposal:()=>oi,tpl_title_clean_gutters:()=>yi,tpl_title_clean_outdoor_furniture:()=>Ar,tpl_title_clean_oven:()=>er,tpl_title_clean_pool_filter:()=>ha,tpl_title_clean_range_hood_filter:()=>Ni,tpl_title_clean_refrigerator_coils:()=>Yi,tpl_title_clean_spa_filter:()=>ya,tpl_title_clean_washing_machine:()=>Gi,tpl_title_clean_water_softener_brine_tank:()=>Oa,tpl_title_clean_window_screens:()=>Kr,tpl_title_deep_clean_carpets:()=>Pi,tpl_title_defrost_freezer:()=>sr,tpl_title_drain_and_refill_spa:()=>wa,tpl_title_fertilize_lawn:()=>yr,tpl_title_flush_water_heater:()=>Xs,tpl_title_inspect_attic_insulation:()=>Br,tpl_title_inspect_chimney_cap_and_flashing:()=>Ka,tpl_title_inspect_ductwork:()=>Us,tpl_title_inspect_extension_cords:()=>fi,tpl_title_inspect_exterior_paint:()=>oo,tpl_title_inspect_fire_escape_routes:()=>mr,tpl_title_inspect_for_termites:()=>$a,tpl_title_inspect_foundation:()=>Ai,tpl_title_inspect_irrigation_system:()=>Ir,tpl_title_inspect_pool_pump_and_motor:()=>ma,tpl_title_inspect_roof:()=>wi,tpl_title_inspect_septic_drain_field:()=>eo,tpl_title_inspect_washing_machine_hoses:()=>ri,tpl_title_lubricate_door_hinges:()=>Bi,tpl_title_lubricate_garage_door:()=>Gr,tpl_title_mow_lawn:()=>fr,tpl_title_organize_garage_storage:()=>ea,tpl_title_power_wash_siding:()=>$i,tpl_title_prune_shrubs:()=>$r,tpl_title_pump_septic_tank:()=>Xa,tpl_title_recaulk_bathroom:()=>Oi,tpl_title_refinish_deck_or_porch:()=>lo,tpl_title_refresh_ant_and_roach_bait_stations:()=>Ta,tpl_title_replace_reverse_osmosis_filters:()=>Ua,tpl_title_replace_smoke_detector_batteries:()=>ui,tpl_title_replace_water_filter:()=>Xi,tpl_title_replace_whole_house_water_filter:()=>Pa,tpl_title_replace_windshield_wipers:()=>la,tpl_title_reverse_ceiling_fan_direction:()=>Nr,tpl_title_review_emergency_plan:()=>dr,tpl_title_rotate_vehicle_tires:()=>ra,tpl_title_schedule_chimney_sweep:()=>Ba,tpl_title_seal_driveway_cracks:()=>Ri,tpl_title_seal_entry_points:()=>Aa,tpl_title_seal_grout_lines:()=>po,tpl_title_service_ac_unit:()=>qs,tpl_title_service_snow_blower:()=>Pr,tpl_title_sharpen_mower_blades:()=>wr,tpl_title_shock_treat_pool:()=>fa,tpl_title_skim_and_vacuum_pool:()=>ua,tpl_title_store_or_retrieve_seasonal_items:()=>Ur,tpl_title_test_carbon_monoxide_detectors:()=>mi,tpl_title_test_garage_door_auto_reverse:()=>Yr,tpl_title_test_gfci_outlets:()=>di,tpl_title_test_outdoor_lighting:()=>qr,tpl_title_test_pool_water_chemistry:()=>da,tpl_title_test_security_system:()=>hr,tpl_title_test_smoke_detectors:()=>or,tpl_title_test_sump_pump:()=>si,tpl_title_test_well_water_quality:()=>qa,tpl_title_touch_up_interior_paint:()=>ro,tpl_title_winterize_outdoor_faucets:()=>Rr,track_history:()=>hs,weeks:()=>Ht});var ut="Home Maintenance Pro",gt="Tasks",mt="Add Task",vt="Browse Templates",ft="Create Task",bt="Edit Task",yt="Choose a Template",xt="Create from Scratch",wt="Title",kt="Description",$t="Interval",Ct="Interval Value",Tt="Interval Type",St="Last Performed",At="Next Due",Et="Status",It="Actions",Lt="Save",Rt="Cancel",Dt="Delete",Pt="Complete",zt="Edit",Nt="Days",Ht="Weeks",Ot="Months",Mt="Overdue",Ut="Due Soon",jt="OK",qt="Never",Wt="Advanced Settings",Bt="NFC Tag",Ft="Icon",Kt="Labels",Qt="Search tasks...",Gt="All Labels",Jt="Search templates...",Yt="No maintenance tasks yet. Add a task or browse templates to get started.",Zt="Are you sure you want to delete this task?",Xt="Task saved successfully.",Vt="Task deleted.",es="Task marked as complete.",ts="This field is required.",ss="Today",is="Import CSV",rs="Upload a CSV file with the following columns (title is required, others are optional):",as="Import",os="Done",ns="No templates match your search.",ls="Notify when overdue",cs="Export CSV",ds="Sort by",ps="Clear",hs="Track completion history",_s="Completion History",us="No completion history yet.",gs="Loading...",ms="Importing...",vs="None",fs="Add custom label, press Enter",bs="Custom labels are local to this integration. To use a label across Home Assistant (with colors, icons, and filtering), create it in Settings \u2192 Labels first.",ys="HVAC",xs="Plumbing",ws="Electrical",ks="Exterior",$s="Interior",Cs="Appliances",Ts="Safety",Ss="Lawn & Garden",As="Seasonal",Es="Garage & Vehicles",Is="Pool & Spa",Ls="Pest Control",Rs="Water Treatment",Ds="Fireplace & Chimney",Ps="Septic System",zs="Painting & Finishes",Ns="Change HVAC filter",Hs="Replace the HVAC air filter to maintain air quality and system efficiency.",Os="Clean air vents",Ms="Remove dust and debris from air vents and registers throughout the home.",Us="Inspect ductwork",js="Check ductwork for leaks, damage, or disconnected sections.",qs="Service AC unit",Ws="Schedule professional service for the air conditioning unit including refrigerant check.",Bs="Check thermostat calibration",Fs="Verify thermostat reads the correct temperature and adjust if needed.",Ks="Bleed radiators",Qs="Release trapped air from radiators to improve heating efficiency.",Gs="Clean condensate drain line",Js="Flush the AC condensate drain line with vinegar to prevent clogs.",Ys="Check for leaks under sinks",Zs="Inspect under all sinks for signs of leaks, drips, or water damage.",Xs="Flush water heater",Vs="Drain and flush the water heater to remove sediment buildup.",ei="Clean faucet aerators",ti="Remove and clean faucet aerators to restore water flow and remove mineral deposits.",si="Test sump pump",ii="Pour water into the sump pit to verify the pump activates and drains properly.",ri="Inspect washing machine hoses",ai="Check washing machine supply hoses for bulges, cracks, or leaks.",oi="Clean garbage disposal",ni="Clean and deodorize the garbage disposal with ice and citrus peels.",li="Check toilet components",ci="Inspect toilet flappers, fill valves, and supply lines for wear or leaks.",di="Test GFCI outlets",pi="Press the test and reset buttons on all GFCI outlets to verify they trip properly.",hi="Check electrical panel",_i="Inspect the electrical panel for signs of corrosion, overheating, or loose connections.",ui="Replace smoke detector batteries",gi="Replace batteries in all smoke detectors even if they have not chirped.",mi="Test carbon monoxide detectors",vi="Test all carbon monoxide detectors to confirm they are functioning correctly.",fi="Inspect extension cords",bi="Check all extension cords for fraying, damage, or overloading.",yi="Clean gutters",xi="Remove leaves and debris from gutters and downspouts to prevent water damage.",wi="Inspect roof",ki="Check roof for missing, damaged, or curling shingles and signs of wear.",$i="Power wash siding",Ci="Power wash the exterior siding to remove dirt, mold, and mildew.",Ti="Check caulking around windows",Si="Inspect and replace deteriorated caulking around windows and door frames.",Ai="Inspect foundation",Ei="Walk around the foundation looking for cracks, settling, or water intrusion.",Ii="Clean dryer vent",Li="Clean the exterior dryer vent duct to prevent lint buildup and fire hazard.",Ri="Seal driveway cracks",Di="Fill and seal cracks in the driveway to prevent water damage and further deterioration.",Pi="Deep clean carpets",zi="Steam clean or shampoo all carpeted areas to remove deep dirt and allergens.",Ni="Clean range hood filter",Hi="Remove and clean the range hood grease filter in hot soapy water.",Oi="Recaulk bathroom",Mi="Remove old caulk and apply fresh caulk around bathtub, shower, and sink edges.",Ui="Check window locks",ji="Test all window locks and latches to ensure they engage properly.",qi="Clean drains",Wi="Clear slow drains using a drain snake or enzyme-based cleaner.",Bi="Lubricate door hinges",Fi="Apply lubricant to all door hinges to eliminate squeaks and ensure smooth operation.",Ki="Clean dishwasher",Qi="Run an empty cycle with dishwasher cleaner and wipe down the door seal.",Gi="Clean washing machine",Ji="Run a cleaning cycle with washing machine cleaner and wipe the gasket.",Yi="Clean refrigerator coils",Zi="Vacuum or brush the condenser coils on the refrigerator to maintain efficiency.",Xi="Replace water filter",Vi="Replace the refrigerator water filter cartridge for clean drinking water.",er="Clean oven",tr="Run the self-clean cycle or manually clean the oven interior.",sr="Defrost freezer",ir="Defrost the freezer if ice buildup exceeds a quarter inch.",rr="Clean dryer lint trap deep",ar="Remove the lint screen and vacuum the lint trap housing to improve airflow.",or="Test smoke detectors",nr="Press the test button on every smoke detector and replace any that fail.",lr="Check fire extinguisher pressure",cr="Verify the pressure gauge on each fire extinguisher is in the green zone.",dr="Review emergency plan",pr="Review and update the household emergency plan with all family members.",hr="Test security system",_r="Run a full test of the home security system including all sensors and alarms.",ur="Check first aid kit",gr="Inspect the first aid kit and replace any expired or used supplies.",mr="Inspect fire escape routes",vr="Walk through all fire escape routes and ensure exits are clear and accessible.",fr="Mow lawn",br="Mow the lawn to the recommended height for the grass type.",yr="Fertilize lawn",xr="Apply seasonal fertilizer to the lawn following product instructions.",wr="Sharpen mower blades",kr="Remove and sharpen or replace lawn mower blades for a clean cut.",$r="Prune shrubs",Cr="Trim and shape shrubs and hedges to maintain appearance and plant health.",Tr="Aerate lawn",Sr="Aerate the lawn to reduce soil compaction and improve root growth.",Ar="Clean outdoor furniture",Er="Wash and treat outdoor furniture to remove dirt, mold, and weather damage.",Ir="Inspect irrigation system",Lr="Check sprinkler heads, drip lines, and timers for proper operation.",Rr="Winterize outdoor faucets",Dr="Disconnect hoses, drain outdoor faucets, and install insulated covers.",Pr="Service snow blower",zr="Change oil, check belts, and test the snow blower before winter arrives.",Nr="Reverse ceiling fan direction",Hr="Switch ceiling fan rotation direction for the current season.",Or="Check weather stripping",Mr="Inspect and replace worn weather stripping around doors and windows.",Ur="Store or retrieve seasonal items",jr="Rotate seasonal items in and out of storage as the season changes.",qr="Test outdoor lighting",Wr="Check all exterior lights, replace bulbs, and clean fixtures.",Br="Inspect attic insulation",Fr="Check attic insulation for settling, moisture, or pest damage before winter.",Kr="Clean window screens",Qr="Remove window screens, wash with soapy water, and reinstall.",Gr="Lubricate garage door",Jr="Apply lubricant to garage door tracks, rollers, hinges, and springs.",Yr="Test garage door auto-reverse",Zr="Place an object under the garage door and verify it reverses when closing.",Xr="Check garage door weather seal",Vr="Inspect the bottom seal and side weather stripping on the garage door.",ea="Organize garage storage",ta="Declutter the garage, check for expired chemicals, and reorganize storage.",sa="Check vehicle tire pressure",ia="Check and adjust tire pressure on all vehicles to the recommended PSI.",ra="Rotate vehicle tires",aa="Rotate tires to ensure even wear and extend tire life.",oa="Change engine oil",na="Change engine oil and oil filter per manufacturer recommendations.",la="Replace windshield wipers",ca="Replace windshield wiper blades when streaking or skipping.",da="Test pool water chemistry",pa="Test pool pH, chlorine, alkalinity, and calcium hardness levels.",ha="Clean pool filter",_a="Backwash or clean the pool filter cartridge to maintain proper filtration.",ua="Skim and vacuum pool",ga="Skim debris from the surface and vacuum the pool floor.",ma="Inspect pool pump and motor",va="Check pool pump for leaks, unusual noise, and proper pressure readings.",fa="Shock treat pool",ba="Add pool shock treatment to eliminate bacteria and restore water clarity.",ya="Clean spa filter",xa="Remove, rinse, and deep clean the hot tub or spa filter cartridge.",wa="Drain and refill spa",ka="Drain the hot tub completely, clean the shell, and refill with fresh water.",$a="Inspect for termites",Ca="Check foundation, wood structures, and crawl spaces for signs of termite activity.",Ta="Refresh ant and roach bait stations",Sa="Replace indoor and outdoor pest bait stations with fresh bait.",Aa="Seal entry points",Ea="Inspect and seal gaps around pipes, vents, and the foundation where pests can enter.",Ia="Check attic for rodents",La="Inspect attic for droppings, nesting materials, or chewed wiring from rodents.",Ra="Clean bird feeders",Da="Disassemble and scrub bird feeders to prevent mold and disease spread.",Pa="Replace whole-house water filter",za="Replace the sediment and carbon filter cartridges in the whole-house water filtration system.",Na="Add salt to water softener",Ha="Check and refill salt in the water softener brine tank.",Oa="Clean water softener brine tank",Ma="Empty, scrub, and refill the brine tank to remove salt bridges and sediment.",Ua="Replace reverse osmosis filters",ja="Replace pre-filter, post-filter, and membrane in the RO drinking water system.",qa="Test well water quality",Wa="Send a water sample to a lab for bacteria, nitrates, and mineral testing.",Ba="Schedule chimney sweep",Fa="Hire a professional to clean the chimney flue and remove creosote buildup.",Ka="Inspect chimney cap and flashing",Qa="Check the chimney cap for damage and inspect flashing for gaps or rust.",Ga="Clean fireplace firebox",Ja="Remove ash buildup from the firebox and inspect firebrick for cracks.",Ya="Check fireplace damper",Za="Open and close the fireplace damper to ensure it moves freely and seals properly.",Xa="Pump septic tank",Va="Schedule professional septic tank pumping to prevent overflow and drain field damage.",eo="Inspect septic drain field",to="Walk the drain field area checking for wet spots, odors, or lush grass patches.",so="Add septic treatment",io="Add enzyme-based septic treatment to maintain healthy bacteria levels in the tank.",ro="Touch up interior paint",ao="Inspect walls for scuffs, nail holes, and chips. Touch up with matching paint.",oo="Inspect exterior paint",no="Check exterior paint for peeling, cracking, or fading and schedule repainting if needed.",lo="Refinish deck or porch",co="Sand, stain, or seal the deck or porch to protect wood from weather damage.",po="Seal grout lines",ho="Apply grout sealer to tile floors, backsplash, and shower areas to prevent staining.",_o={panel_title:ut,tasks:gt,add_task:mt,browse_templates:vt,create_task:ft,edit_task:bt,choose_template:yt,create_from_scratch:xt,title:wt,description:kt,interval:$t,interval_value:Ct,interval_type:Tt,last_performed:St,next_due:At,status:Et,actions:It,save:Lt,cancel:Rt,delete:Dt,complete:Pt,edit:zt,days:Nt,weeks:Ht,months:Ot,overdue:Mt,due_soon:Ut,ok:jt,never:qt,advanced_settings:Wt,tag:Bt,icon:Ft,labels:Kt,search_tasks:Qt,all_labels:Gt,search_templates:Jt,no_tasks:Yt,confirm_delete:Zt,task_saved:Xt,task_deleted:Vt,task_completed:es,required_field:ts,today:ss,import_csv:is,import_csv_info:rs,import:as,done:os,no_results:ns,notify_when_overdue:ls,export_csv:cs,sort_by:ds,clear:ps,track_history:hs,completion_history:_s,no_history:us,loading:gs,importing:ms,none_option:vs,add_custom_label_placeholder:fs,custom_label_hint:bs,category_hvac:ys,category_plumbing:xs,category_electrical:ws,category_exterior:ks,category_interior:$s,category_appliances:Cs,category_safety:Ts,category_lawn_garden:Ss,category_seasonal:As,category_garage_vehicles:Es,category_pool_spa:Is,category_pest_control:Ls,category_water_treatment:Rs,category_fireplace_chimney:Ds,category_septic_system:Ps,category_painting_finishes:zs,tpl_title_change_hvac_filter:Ns,tpl_desc_change_hvac_filter:Hs,tpl_title_clean_air_vents:Os,tpl_desc_clean_air_vents:Ms,tpl_title_inspect_ductwork:Us,tpl_desc_inspect_ductwork:js,tpl_title_service_ac_unit:qs,tpl_desc_service_ac_unit:Ws,tpl_title_check_thermostat_calibration:Bs,tpl_desc_check_thermostat_calibration:Fs,tpl_title_bleed_radiators:Ks,tpl_desc_bleed_radiators:Qs,tpl_title_clean_condensate_drain_line:Gs,tpl_desc_clean_condensate_drain_line:Js,tpl_title_check_for_leaks_under_sinks:Ys,tpl_desc_check_for_leaks_under_sinks:Zs,tpl_title_flush_water_heater:Xs,tpl_desc_flush_water_heater:Vs,tpl_title_clean_faucet_aerators:ei,tpl_desc_clean_faucet_aerators:ti,tpl_title_test_sump_pump:si,tpl_desc_test_sump_pump:ii,tpl_title_inspect_washing_machine_hoses:ri,tpl_desc_inspect_washing_machine_hoses:ai,tpl_title_clean_garbage_disposal:oi,tpl_desc_clean_garbage_disposal:ni,tpl_title_check_toilet_components:li,tpl_desc_check_toilet_components:ci,tpl_title_test_gfci_outlets:di,tpl_desc_test_gfci_outlets:pi,tpl_title_check_electrical_panel:hi,tpl_desc_check_electrical_panel:_i,tpl_title_replace_smoke_detector_batteries:ui,tpl_desc_replace_smoke_detector_batteries:gi,tpl_title_test_carbon_monoxide_detectors:mi,tpl_desc_test_carbon_monoxide_detectors:vi,tpl_title_inspect_extension_cords:fi,tpl_desc_inspect_extension_cords:bi,tpl_title_clean_gutters:yi,tpl_desc_clean_gutters:xi,tpl_title_inspect_roof:wi,tpl_desc_inspect_roof:ki,tpl_title_power_wash_siding:$i,tpl_desc_power_wash_siding:Ci,tpl_title_check_caulking_around_windows:Ti,tpl_desc_check_caulking_around_windows:Si,tpl_title_inspect_foundation:Ai,tpl_desc_inspect_foundation:Ei,tpl_title_clean_dryer_vent:Ii,tpl_desc_clean_dryer_vent:Li,tpl_title_seal_driveway_cracks:Ri,tpl_desc_seal_driveway_cracks:Di,tpl_title_deep_clean_carpets:Pi,tpl_desc_deep_clean_carpets:zi,tpl_title_clean_range_hood_filter:Ni,tpl_desc_clean_range_hood_filter:Hi,tpl_title_recaulk_bathroom:Oi,tpl_desc_recaulk_bathroom:Mi,tpl_title_check_window_locks:Ui,tpl_desc_check_window_locks:ji,tpl_title_clean_drains:qi,tpl_desc_clean_drains:Wi,tpl_title_lubricate_door_hinges:Bi,tpl_desc_lubricate_door_hinges:Fi,tpl_title_clean_dishwasher:Ki,tpl_desc_clean_dishwasher:Qi,tpl_title_clean_washing_machine:Gi,tpl_desc_clean_washing_machine:Ji,tpl_title_clean_refrigerator_coils:Yi,tpl_desc_clean_refrigerator_coils:Zi,tpl_title_replace_water_filter:Xi,tpl_desc_replace_water_filter:Vi,tpl_title_clean_oven:er,tpl_desc_clean_oven:tr,tpl_title_defrost_freezer:sr,tpl_desc_defrost_freezer:ir,tpl_title_clean_dryer_lint_trap_deep:rr,tpl_desc_clean_dryer_lint_trap_deep:ar,tpl_title_test_smoke_detectors:or,tpl_desc_test_smoke_detectors:nr,tpl_title_check_fire_extinguisher_pressure:lr,tpl_desc_check_fire_extinguisher_pressure:cr,tpl_title_review_emergency_plan:dr,tpl_desc_review_emergency_plan:pr,tpl_title_test_security_system:hr,tpl_desc_test_security_system:_r,tpl_title_check_first_aid_kit:ur,tpl_desc_check_first_aid_kit:gr,tpl_title_inspect_fire_escape_routes:mr,tpl_desc_inspect_fire_escape_routes:vr,tpl_title_mow_lawn:fr,tpl_desc_mow_lawn:br,tpl_title_fertilize_lawn:yr,tpl_desc_fertilize_lawn:xr,tpl_title_sharpen_mower_blades:wr,tpl_desc_sharpen_mower_blades:kr,tpl_title_prune_shrubs:$r,tpl_desc_prune_shrubs:Cr,tpl_title_aerate_lawn:Tr,tpl_desc_aerate_lawn:Sr,tpl_title_clean_outdoor_furniture:Ar,tpl_desc_clean_outdoor_furniture:Er,tpl_title_inspect_irrigation_system:Ir,tpl_desc_inspect_irrigation_system:Lr,tpl_title_winterize_outdoor_faucets:Rr,tpl_desc_winterize_outdoor_faucets:Dr,tpl_title_service_snow_blower:Pr,tpl_desc_service_snow_blower:zr,tpl_title_reverse_ceiling_fan_direction:Nr,tpl_desc_reverse_ceiling_fan_direction:Hr,tpl_title_check_weather_stripping:Or,tpl_desc_check_weather_stripping:Mr,tpl_title_store_or_retrieve_seasonal_items:Ur,tpl_desc_store_or_retrieve_seasonal_items:jr,tpl_title_test_outdoor_lighting:qr,tpl_desc_test_outdoor_lighting:Wr,tpl_title_inspect_attic_insulation:Br,tpl_desc_inspect_attic_insulation:Fr,tpl_title_clean_window_screens:Kr,tpl_desc_clean_window_screens:Qr,tpl_title_lubricate_garage_door:Gr,tpl_desc_lubricate_garage_door:Jr,tpl_title_test_garage_door_auto_reverse:Yr,tpl_desc_test_garage_door_auto_reverse:Zr,tpl_title_check_garage_door_weather_seal:Xr,tpl_desc_check_garage_door_weather_seal:Vr,tpl_title_organize_garage_storage:ea,tpl_desc_organize_garage_storage:ta,tpl_title_check_vehicle_tire_pressure:sa,tpl_desc_check_vehicle_tire_pressure:ia,tpl_title_rotate_vehicle_tires:ra,tpl_desc_rotate_vehicle_tires:aa,tpl_title_change_engine_oil:oa,tpl_desc_change_engine_oil:na,tpl_title_replace_windshield_wipers:la,tpl_desc_replace_windshield_wipers:ca,tpl_title_test_pool_water_chemistry:da,tpl_desc_test_pool_water_chemistry:pa,tpl_title_clean_pool_filter:ha,tpl_desc_clean_pool_filter:_a,tpl_title_skim_and_vacuum_pool:ua,tpl_desc_skim_and_vacuum_pool:ga,tpl_title_inspect_pool_pump_and_motor:ma,tpl_desc_inspect_pool_pump_and_motor:va,tpl_title_shock_treat_pool:fa,tpl_desc_shock_treat_pool:ba,tpl_title_clean_spa_filter:ya,tpl_desc_clean_spa_filter:xa,tpl_title_drain_and_refill_spa:wa,tpl_desc_drain_and_refill_spa:ka,tpl_title_inspect_for_termites:$a,tpl_desc_inspect_for_termites:Ca,tpl_title_refresh_ant_and_roach_bait_stations:Ta,tpl_desc_refresh_ant_and_roach_bait_stations:Sa,tpl_title_seal_entry_points:Aa,tpl_desc_seal_entry_points:Ea,tpl_title_check_attic_for_rodents:Ia,tpl_desc_check_attic_for_rodents:La,tpl_title_clean_bird_feeders:Ra,tpl_desc_clean_bird_feeders:Da,tpl_title_replace_whole_house_water_filter:Pa,tpl_desc_replace_whole_house_water_filter:za,tpl_title_add_salt_to_water_softener:Na,tpl_desc_add_salt_to_water_softener:Ha,tpl_title_clean_water_softener_brine_tank:Oa,tpl_desc_clean_water_softener_brine_tank:Ma,tpl_title_replace_reverse_osmosis_filters:Ua,tpl_desc_replace_reverse_osmosis_filters:ja,tpl_title_test_well_water_quality:qa,tpl_desc_test_well_water_quality:Wa,tpl_title_schedule_chimney_sweep:Ba,tpl_desc_schedule_chimney_sweep:Fa,tpl_title_inspect_chimney_cap_and_flashing:Ka,tpl_desc_inspect_chimney_cap_and_flashing:Qa,tpl_title_clean_fireplace_firebox:Ga,tpl_desc_clean_fireplace_firebox:Ja,tpl_title_check_fireplace_damper:Ya,tpl_desc_check_fireplace_damper:Za,tpl_title_pump_septic_tank:Xa,tpl_desc_pump_septic_tank:Va,tpl_title_inspect_septic_drain_field:eo,tpl_desc_inspect_septic_drain_field:to,tpl_title_add_septic_treatment:so,tpl_desc_add_septic_treatment:io,tpl_title_touch_up_interior_paint:ro,tpl_desc_touch_up_interior_paint:ao,tpl_title_inspect_exterior_paint:oo,tpl_desc_inspect_exterior_paint:no,tpl_title_refinish_deck_or_porch:lo,tpl_desc_refinish_deck_or_porch:co,tpl_title_seal_grout_lines:po,tpl_desc_seal_grout_lines:ho};var Fe={en:ve},Y="en";function l(a,t=Y){return(Fe[t]||Fe[Y])[a]||a}function fe(a){return a.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Ke(a,t=Y){let e=`tpl_title_${fe(a.title)}`,i=l(e,t);return i===e?a.title:i}function Qe(a,t=Y){let e=`tpl_desc_${fe(a.title)}`,i=l(e,t);return i===e?a.description||"":i}function Ge(a,t=Y){let e=`category_${fe(a)}`,i=l(e,t);return i===e?a:i}var Je="ha_home_maintenance_sort",x=class extends y{constructor(){super(...arguments);this.narrow=!1;this._tasks=[];this._labels=[];this._searchQuery="";this._selectedLabels=new Set;this._sortColumn="title";this._sortDirection="asc";this._loading=!0}_loadSortPreference(){try{let e=localStorage.getItem(Je);if(e){let{column:i,direction:r}=JSON.parse(e);i&&(this._sortColumn=i),r&&(this._sortDirection=r)}}catch{}}_saveSortPreference(){try{localStorage.setItem(Je,JSON.stringify({column:this._sortColumn,direction:this._sortDirection}))}catch{}}static get styles(){return[O,k`
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
      `]}connectedCallback(){super.connectedCallback(),this._loadSortPreference(),this._loadData()}async _loadData(){this._loading=!0;try{let[e,i]=await Promise.all([J(this.hass),oe(this.hass)]);this._tasks=e,this._labels=i}catch(e){console.error("Failed to load data:",e),this._tasks=[],this._labels=[]}this._loading=!1}async _loadTasks(){try{this._tasks=await J(this.hass)}catch(e){console.error("Failed to load tasks:",e),this._tasks=[]}}get _filteredTasks(){let e=this._tasks,i=this._searchQuery.toLowerCase().trim();return i&&(e=e.filter(r=>r.title.toLowerCase().includes(i)||r.description&&r.description.toLowerCase().includes(i))),this._selectedLabels.size>0&&(e=e.filter(r=>r.labels&&r.labels.some(o=>this._selectedLabels.has(o)))),e}get _sortedTasks(){let e=[...this._filteredTasks],i=this._sortDirection==="asc"?1:-1;return e.sort((r,o)=>{let n=0;switch(this._sortColumn){case"title":n=r.title.localeCompare(o.title);break;case"interval":n=this._intervalToDays(r)-this._intervalToDays(o);break;case"last_performed":{let d=r.last_performed?this._parseLocalDate(r.last_performed).getTime():0,c=o.last_performed?this._parseLocalDate(o.last_performed).getTime():0;n=d-c;break}case"next_due":{let d=this._getNextDueTimestamp(r),c=this._getNextDueTimestamp(o);n=d-c;break}case"labels":{let d=r.labels?.length?r.labels.map(g=>this._getLabelName(g)).sort().join(", "):"",c=o.labels?.length?o.labels.map(g=>this._getLabelName(g)).sort().join(", "):"";n=d.localeCompare(c);break}case"status":{let d={overdue:0,due_soon:1,ok:2};n=(d[this._getStatus(r)]??3)-(d[this._getStatus(o)]??3);break}}return n*i}),e}_intervalToDays(e){let i=e.interval_value;switch(e.interval_type){case"days":return i;case"weeks":return i*7;case"months":return i*30;default:return i}}_getNextDueTimestamp(e){if(!e.last_performed)return 0;let i=this._parseLocalDate(e.last_performed),r=new Date(i);switch(e.interval_type){case"days":r.setDate(r.getDate()+e.interval_value);break;case"weeks":r.setDate(r.getDate()+e.interval_value*7);break;case"months":r.setMonth(r.getMonth()+e.interval_value);break}return r.getTime()}_getNextDueString(e){if(!e.last_performed)return l("never",this.hass?.language);let i=this._getNextDueTimestamp(e);return new Date(i).toLocaleDateString()}_getStatus(e){if(!e.last_performed)return"overdue";let i=Date.now(),r=this._getNextDueTimestamp(e);if(r<=i)return"overdue";let o=7*24*60*60*1e3;return r-i<=o?"due_soon":"ok"}_getStatusLabel(e){let i=this.hass?.language;switch(e){case"overdue":return l("overdue",i);case"due_soon":return l("due_soon",i);case"ok":return l("ok",i)}}_getStatusClass(e){switch(e){case"overdue":return"status-overdue";case"due_soon":return"status-due-soon";case"ok":return"status-ok"}}_formatInterval(e){let i=l(e.interval_type,this.hass?.language);return`${e.interval_value} ${i.toLowerCase()}`}_parseLocalDate(e){let[i,r,o]=e.split("-").map(Number);return new Date(i,r-1,o)}_formatDate(e){return e?this._parseLocalDate(e).toLocaleDateString():l("never",this.hass?.language)}_sort(e){this._sortColumn===e?this._sortDirection=this._sortDirection==="asc"?"desc":"asc":(this._sortColumn=e,this._sortDirection="asc"),this._saveSortPreference()}_sortIndicator(e){return this._sortColumn!==e?"":this._sortDirection==="asc"?" \u25B2":" \u25BC"}async _completeTask(e){try{await je(this.hass,e.id),await this._loadTasks()}catch(i){console.error("Failed to complete task:",i)}}_editTask(e){this.dispatchEvent(new CustomEvent("navigate-to-edit",{bubbles:!0,composed:!0,detail:{taskId:e.id}}))}async _deleteTask(e){let i=l("confirm_delete",this.hass?.language);if(window.confirm(i))try{await qe(this.hass,e.id),await this._loadTasks()}catch(r){console.error("Failed to delete task:",r)}}_navigateToCreate(){this.dispatchEvent(new CustomEvent("navigate-to-create",{bubbles:!0,composed:!0}))}_handleSearchInput(e){this._searchQuery=e.target.value}_toggleLabelFilter(e){let i=new Set(this._selectedLabels);i.has(e)?i.delete(e):i.add(e),this._selectedLabels=i,this.requestUpdate()}_clearLabelFilters(){this._selectedLabels=new Set,this.requestUpdate()}_handleSortChange(e){let i=e.target.value,[r,o]=i.split("-");this._sortColumn=r,this._sortDirection=o,this._saveSortPreference()}_getLabelName(e){let i=this._labels.find(r=>r.label_id===e);return i?i.name:e}_getLabel(e){return this._labels.find(i=>i.label_id===e)}_labelChipStyle(e){return ie(e?.color)}_renderLabelChip(e){let i=this._getLabel(e),r=i?i.name:e,o=this._labelChipStyle(i);return h`<span class="label-chip" style=${o}>
      ${i?.icon?h`<ha-icon .icon=${i.icon}></ha-icon>`:_}${r}
    </span>`}_renderFilterChip(e){let i=this._labelChipStyle(e),r=this._selectedLabels.has(e.label_id),o=r&&e.color?re(e.color):r?"":i;return h`<button
      class="filter-chip ${r?"active":""}"
      style=${r?o:i}
      @click=${()=>this._toggleLabelFilter(e.label_id)}
    >
      ${e.icon?h`<ha-icon .icon=${e.icon}></ha-icon>`:_}${e.name}
    </button>`}_navigateToTemplates(){this.dispatchEvent(new CustomEvent("navigate-to-templates",{bubbles:!0,composed:!0}))}render(){return this._loading?h`<div class="loading">${l("loading",this.hass?.language)}</div>`:h`
      <div class="task-list">
        <div class="page-header">
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

        ${this._tasks.length===0?this._renderEmptyState():h`
              ${this._renderFilterBar()}
              ${this._renderTable()}
            `}
      </div>
    `}_renderEmptyState(){return h`
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
    `}_renderFilterBar(){let e=new Set;for(let n of this._tasks)if(n.labels)for(let d of n.labels)e.add(d);let i=new Set(this._labels.map(n=>n.label_id)),r=this._labels.filter(n=>e.has(n.label_id)),o=[...e].filter(n=>!i.has(n));return h`
      <div class="filter-bar">
        <input
          type="text"
          placeholder="${l("search_tasks",this.hass?.language)}"
          .value=${this._searchQuery}
          @input=${this._handleSearchInput}
        />
        ${r.length>0||o.length>0?h`
              <div class="filter-chips">
                ${r.map(n=>this._renderFilterChip(n))}
                ${o.map(n=>{let d=this._selectedLabels.has(n);return h`<button
                    class="filter-chip ${d?"active":""}"
                    @click=${()=>this._toggleLabelFilter(n)}
                  >${n}</button>`})}
                ${this._selectedLabels.size>0?h`<button class="filter-chip clear-chip" @click=${this._clearLabelFilters}>${l("clear",this.hass?.language)}</button>`:_}
              </div>
            `:_}
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
    `}_renderTable(){return h`
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
    `}_renderTaskRow(e){let i=this._getStatus(e),r=this._getStatusLabel(i),o=this._getStatusClass(i);return h`
      <div class="task-table-row">
        <div class="task-icon">
          <ha-icon .icon=${e.icon||"mdi:wrench"}></ha-icon>
        </div>
        <div class="task-title">
          ${e.title}
          ${e.description?h`<div class="subtitle">${e.description}</div>`:_}
        </div>
        <div>${this._formatInterval(e)}</div>
        <div class="hide-medium">${this._formatDate(e.last_performed)}</div>
        <div class="hide-medium">${this._getNextDueString(e)}</div>
        <div class="hide-medium task-labels">
          ${e.labels&&e.labels.length>0?e.labels.map(n=>this._renderLabelChip(n)):_}
        </div>
        <div>
          <span class="status-indicator ${o}">${r}</span>
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
    `}};p([b({attribute:!1})],x.prototype,"hass",2),p([b({type:Boolean})],x.prototype,"narrow",2),p([u()],x.prototype,"_tasks",2),p([u()],x.prototype,"_labels",2),p([u()],x.prototype,"_searchQuery",2),p([u()],x.prototype,"_selectedLabels",2),p([u()],x.prototype,"_sortColumn",2),p([u()],x.prototype,"_sortDirection",2),p([u()],x.prototype,"_loading",2),x=p([I("task-list-view")],x);var f=class extends y{constructor(){super(...arguments);this.narrow=!1;this.taskId=null;this.templateData=null;this._title="";this._description="";this._intervalValue=30;this._intervalType="days";this._lastPerformed="";this._tagId="";this._icon="mdi:toolbox";this._labels=[];this._notifyWhenOverdue=!1;this._trackHistory=!1;this._completionHistory=[];this._loading=!1;this._showAdvanced=!1;this._tags=[];this._availableLabels=[]}static get styles(){return[O,k`
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
      `]}async firstUpdated(){this._loading=!0;try{await Promise.all([this._loadTags(),this._loadLabels()]),this.taskId?await this._loadExistingTask():this.templateData&&this._populateFromTemplate(this.templateData)}finally{this._loading=!1}}async _loadTags(){try{this._tags=await Be(this.hass)}catch{this._tags=[]}}async _loadLabels(){try{this._availableLabels=await oe(this.hass)}catch{this._availableLabels=[]}}async _loadExistingTask(){if(this.taskId)try{let e=await Me(this.hass,this.taskId);this._title=e.title,this._description=e.description||"",this._intervalValue=e.interval_value,this._intervalType=e.interval_type,this._lastPerformed=e.last_performed||"",this._tagId=e.tag_id||"",this._icon=e.icon||"mdi:toolbox",this._labels=e.labels||[],this._notifyWhenOverdue=e.notify_when_overdue||!1,this._trackHistory=e.track_history||!1,this._completionHistory=e.completion_history||[]}catch(e){console.error("Failed to load task:",e)}}_populateFromTemplate(e){this._title=e.title,this._description=e.description||"",this._intervalValue=e.interval_value,this._intervalType=e.interval_type,this._icon=e.icon||"mdi:toolbox"}_handleTitleInput(e){this._title=e.target.value}_handleDescriptionInput(e){this._description=e.target.value}_handleIntervalValueInput(e){this._intervalValue=parseInt(e.target.value,10)||1}_handleIntervalTypeChange(e){this._intervalType=e.target.value}_handleLastPerformedInput(e){this._lastPerformed=e.target.value}_handleTagChange(e){this._tagId=e.target.value}_handleIconInput(e){this._icon=e.target.value}_handleNotifyToggle(e){this._notifyWhenOverdue=e.target.checked}_handleTrackHistoryToggle(e){this._trackHistory=e.target.checked}_toggleLabel(e){this._labels.includes(e)?this._labels=this._labels.filter(i=>i!==e):this._labels=[...this._labels,e]}get _customLabels(){let e=new Set(this._availableLabels.map(i=>i.label_id));return this._labels.filter(i=>!e.has(i))}_removeCustomLabel(e){this._labels=this._labels.filter(i=>i!==e)}_handleCustomLabelKeydown(e){if(e.key==="Enter"||e.key===","){e.preventDefault();let i=e.target,r=i.value.trim();r&&!this._labels.includes(r)&&(this._labels=[...this._labels,r]),i.value=""}}_labelChipStyle(e){return ie(e.color)}_labelChipSelectedStyle(e){return re(e.color)}_toggleAdvanced(){this._showAdvanced=!this._showAdvanced}_validate(){return!(!this._title.trim()||!this._intervalValue||this._intervalValue<1)}async _save(){if(this._validate()){this._loading=!0;try{let e={title:this._title.trim(),description:this._description.trim(),interval_value:this._intervalValue,interval_type:this._intervalType,last_performed:this._lastPerformed||null,tag_id:this._tagId||null,icon:this._icon||"mdi:toolbox",labels:this._labels,notify_when_overdue:this._notifyWhenOverdue,track_history:this._trackHistory};this.taskId?await Ue(this.hass,this.taskId,e):await ae(this.hass,e),this._navigateToList()}catch(e){console.error("Failed to save task:",e)}finally{this._loading=!1}}}_cancel(){this._navigateToList()}_navigateToList(){this.dispatchEvent(new CustomEvent("navigate-to-list",{bubbles:!0,composed:!0}))}render(){if(this._loading)return h`
        <div class="loading-overlay">${l("loading",this.hass?.language)}</div>
      `;let e=!!this.taskId,i=e?l("edit_task",this.hass?.language):l("create_task",this.hass?.language);return h`
      <div>
        <div class="page-header">
          <button class="back-btn action-btn" @click=${this._cancel}>
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </button>
          <h1>${i}</h1>
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
            ${!this._title.trim()&&this._title!==""?h`<div class="error-message">${l("required_field",this.hass?.language)}</div>`:_}
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

          ${e&&(this._trackHistory||this._completionHistory.length>0)?h`
                <div class="history-section">
                  <h3>${l("completion_history",this.hass?.language)}</h3>
                  ${this._completionHistory.length>0?h`<ul class="history-list">
                        ${this._completionHistory.slice().reverse().slice(0,20).map(r=>h`<li>${new Date(r).toLocaleString()}</li>`)}
                      </ul>`:h`<p class="history-empty">${l("no_history",this.hass?.language)}</p>`}
                </div>
              `:_}

          <div class="expansion-panel">
            <div class="expansion-header" @click=${this._toggleAdvanced}>
              ${l("advanced_settings",this.hass?.language)}
              <ha-icon
                icon=${this._showAdvanced?"mdi:chevron-up":"mdi:chevron-down"}
              ></ha-icon>
            </div>
            ${this._showAdvanced?h`
                  <div class="expansion-content">
                    <div class="form-field">
                      <label>${l("tag",this.hass?.language)}</label>
                      <select .value=${this._tagId} @change=${this._handleTagChange}>
                        <option value="">-- ${l("none_option",this.hass?.language)} --</option>
                        ${this._tags.map(r=>h`
                            <option value=${r.id} ?selected=${this._tagId===r.id}>
                              ${r.name||r.id}
                            </option>
                          `)}
                      </select>
                    </div>

                    <div class="form-field">
                      <label>${l("icon",this.hass?.language)}</label>
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
                      <label>${l("labels",this.hass?.language)}</label>
                      ${this._availableLabels.length>0?h`<div class="label-picker">
                            ${this._availableLabels.map(r=>{let o=this._labels.includes(r.label_id),n=o?this._labelChipSelectedStyle(r):this._labelChipStyle(r);return h`<button
                                type="button"
                                class="label-picker-chip ${o?"selected":""}"
                                style=${n}
                                @click=${()=>this._toggleLabel(r.label_id)}
                              >
                                ${r.icon?h`<ha-icon .icon=${r.icon}></ha-icon>`:_}
                                ${r.name}
                              </button>`})}
                          </div>`:_}
                      <div class="custom-labels-row">
                        ${this._customLabels.map(r=>h`<span class="label-chip custom-label-chip">
                            ${r}<button type="button" class="remove-label-btn" @click=${()=>this._removeCustomLabel(r)}>×</button>
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
                `:_}
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
    `}};p([b({attribute:!1})],f.prototype,"hass",2),p([b({type:Boolean})],f.prototype,"narrow",2),p([b({type:String})],f.prototype,"taskId",2),p([b({attribute:!1})],f.prototype,"templateData",2),p([u()],f.prototype,"_title",2),p([u()],f.prototype,"_description",2),p([u()],f.prototype,"_intervalValue",2),p([u()],f.prototype,"_intervalType",2),p([u()],f.prototype,"_lastPerformed",2),p([u()],f.prototype,"_tagId",2),p([u()],f.prototype,"_icon",2),p([u()],f.prototype,"_labels",2),p([u()],f.prototype,"_notifyWhenOverdue",2),p([u()],f.prototype,"_trackHistory",2),p([u()],f.prototype,"_completionHistory",2),p([u()],f.prototype,"_loading",2),p([u()],f.prototype,"_showAdvanced",2),p([u()],f.prototype,"_tags",2),p([u()],f.prototype,"_availableLabels",2),f=p([I("task-form-view")],f);var w=class extends y{constructor(){super(...arguments);this.narrow=!1;this._templates=[];this._searchQuery="";this._expandedCategories=new Set;this._importPreview=[];this._showImportDialog=!1;this._importing=!1;this._importResult=""}static get styles(){return[O,k`
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
      `]}connectedCallback(){super.connectedCallback(),this._loadTemplates()}async _loadTemplates(){try{this._templates=await We(this.hass);let e=new Set(this._templates.map(i=>i.category));this._expandedCategories=e}catch(e){console.error("Failed to load templates:",e),this._templates=[]}}_getFilteredTemplates(){if(!this._searchQuery.trim())return this._templates;let e=this._searchQuery.toLowerCase().trim();return this._templates.filter(i=>i.title.toLowerCase().includes(e)||i.description&&i.description.toLowerCase().includes(e))}_groupByCategory(e){let i={};for(let o of e){let n=o.category||"Other";i[n]||(i[n]=[]),i[n].push(o)}let r={};for(let o of Object.keys(i).sort())r[o]=i[o];return r}_toggleCategory(e){let i=new Set(this._expandedCategories);i.has(e)?i.delete(e):i.add(e),this._expandedCategories=i}_selectTemplate(e){this.dispatchEvent(new CustomEvent("select-template",{detail:{template:e},bubbles:!0,composed:!0}))}_createFromScratch(){this.dispatchEvent(new CustomEvent("navigate-to-create",{bubbles:!0,composed:!0}))}_triggerFileInput(){let e=this.shadowRoot?.querySelector('input[type="file"]');e&&(e.value="",e.click())}_handleFileSelect(e){let r=e.target.files?.[0];if(!r)return;let o=new FileReader;o.onload=()=>{let n=o.result,d=this._parseCsv(n);if(d.length===0){this._importResult="No valid rows found in CSV.",this._showImportDialog=!0;return}this._importPreview=d,this._importResult="",this._showImportDialog=!0},o.onerror=()=>{this._importResult="Failed to read file.",this._showImportDialog=!0},o.readAsText(r)}_parseCsv(e){let i=e.split(/\r?\n/).filter(n=>n.trim());if(i.length<2)return[];let r=this._parseCsvLine(i[0]).map(n=>n.trim().toLowerCase());if(!r.includes("title"))return[];let o=[];for(let n=1;n<i.length;n++){let d=this._parseCsvLine(i[n]),c={};for(let g=0;g<r.length;g++)c[r[g]]=(d[g]||"").trim();c.title&&o.push(c)}return o}_parseCsvLine(e){let i=[],r="",o=!1;for(let n=0;n<e.length;n++){let d=e[n];o?d==='"'?n+1<e.length&&e[n+1]==='"'?(r+='"',n++):o=!1:r+=d:d==='"'?o=!0:d===","?(i.push(r),r=""):r+=d}return i.push(r),i}async _doImport(){this._importing=!0,this._importResult="";let e=0,i=0;for(let r of this._importPreview)try{let o={title:r.title,description:r.description||"",interval_value:parseInt(r.interval_value,10)||30,interval_type:r.interval_type||"days",icon:r.icon||"mdi:toolbox",last_performed:r.last_performed||null};await ae(this.hass,o),e++}catch{i++}this._importing=!1,i===0?this._importResult=`Successfully imported ${e} task${e!==1?"s":""}.`:this._importResult=`Imported ${e}, failed ${i}.`,this._importPreview=[]}_closeImportDialog(){this._showImportDialog=!1,this._importPreview=[],this._importResult=""}async _exportCsv(){let e;try{e=await J(this.hass)}catch{return}let i=["title","description","interval_value","interval_type","last_performed","icon","labels","notify_when_overdue"],r=m=>m.includes(",")||m.includes('"')||m.includes(`
`)?`"${m.replace(/"/g,'""')}"`:m,o=e.map(m=>[r(m.title),r(m.description||""),String(m.interval_value),m.interval_type,m.last_performed||"",m.icon||"",r((m.labels||[]).join("; ")),m.notify_when_overdue?"true":"false"].join(",")),n=[i.join(","),...o].join(`
`),d=new Blob([n],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(d),g=document.createElement("a");g.href=c,g.download="home_maintenance_tasks.csv",g.click(),URL.revokeObjectURL(c)}_goBack(){this.dispatchEvent(new CustomEvent("navigate-to-list",{bubbles:!0,composed:!0}))}_onSearchInput(e){this._searchQuery=e.target.value}render(){let e=this._getFilteredTemplates(),i=this._groupByCategory(e),r=Object.keys(i).length>0;return h`
      <div>
        <div class="page-header">
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

        ${r?h`
              ${Object.entries(i).map(([o,n])=>{let d=this._expandedCategories.has(o);return h`
                  <div class="template-category">
                    <h2 @click=${()=>this._toggleCategory(o)}>
                      ${Ge(o,this.hass?.language)}
                      <ha-icon
                        icon=${d?"mdi:chevron-up":"mdi:chevron-down"}
                      ></ha-icon>
                      <span class="category-count"
                        >(${n.length})</span
                      >
                    </h2>
                    ${d?h`
                          <div class="template-grid">
                            ${n.map(c=>h`
                                <div
                                  class="template-card"
                                  @click=${()=>this._selectTemplate(c)}
                                >
                                  <div class="template-header">
                                    <ha-icon
                                      .icon=${c.icon}
                                    ></ha-icon>
                                    <span class="template-title"
                                      >${Ke(c,this.hass?.language)}</span
                                    >
                                  </div>
                                  <div class="template-desc">
                                    ${Qe(c,this.hass?.language)}
                                  </div>
                                  <div class="template-interval">
                                    Every ${c.interval_value}
                                    ${l(c.interval_type,this.hass?.language).toLowerCase()}
                                  </div>
                                </div>
                              `)}
                          </div>
                        `:_}
                  </div>
                `})}
            `:h`
              <div class="empty-state">
                ${l("no_results",this.hass?.language)}
              </div>
            `}

        ${this._showImportDialog?this._renderImportDialog():_}
      </div>
    `}_renderImportDialog(){let e=["title","description","interval_value","interval_type","last_performed","icon"],i=this._importPreview.length>0;return h`
      <div class="import-overlay" @click=${this._closeImportDialog}>
        <div class="import-dialog" @click=${r=>r.stopPropagation()}>
          <h2>${l("import_csv",this.hass?.language)}</h2>
          <div class="import-info">
            ${l("import_csv_info",this.hass?.language)}<br />
            <code>title, description, interval_value, interval_type, last_performed, icon</code>
          </div>

          ${i?h`
                <div style="overflow-x:auto; max-height:40vh;">
                  <table class="import-preview-table">
                    <thead>
                      <tr>
                        ${e.filter(r=>this._importPreview.some(o=>o[r])).map(r=>h`<th>${r}</th>`)}
                      </tr>
                    </thead>
                    <tbody>
                      ${this._importPreview.map(r=>h`
                          <tr>
                            ${e.filter(o=>this._importPreview.some(n=>n[o])).map(o=>h`<td>${r[o]||""}</td>`)}
                          </tr>
                        `)}
                    </tbody>
                  </table>
                </div>
                <div class="import-info">
                  ${this._importPreview.length} ${l("tasks",this.hass?.language).toLowerCase()}
                </div>
              `:_}

          ${this._importResult?h`<div class="import-result${this._importResult.includes("failed")?" error":""}">${this._importResult}</div>`:_}

          <div class="import-actions">
            <button class="btn" @click=${this._closeImportDialog}>
              ${this._importResult&&!this._importResult.includes("failed")?l("done",this.hass?.language):l("cancel",this.hass?.language)}
            </button>
            ${i&&!this._importing?h`
                  <button class="btn primary" @click=${this._doImport}>
                    ${l("import",this.hass?.language)} (${this._importPreview.length})
                  </button>
                `:_}
            ${this._importing?h`<span>${l("importing",this.hass?.language)}</span>`:_}
          </div>
        </div>
      </div>
    `}};p([b({attribute:!1})],w.prototype,"hass",2),p([b({type:Boolean})],w.prototype,"narrow",2),p([u()],w.prototype,"_templates",2),p([u()],w.prototype,"_searchQuery",2),p([u()],w.prototype,"_expandedCategories",2),p([u()],w.prototype,"_importPreview",2),p([u()],w.prototype,"_showImportDialog",2),p([u()],w.prototype,"_importing",2),p([u()],w.prototype,"_importResult",2),w=p([I("template-picker-view")],w);var $=class extends y{constructor(){super(...arguments);this.narrow=!1;this.panel={};this._currentView="list";this._editTaskId=null;this._templateData=null}static get styles(){return k`
      :host {
        display: block;
      }
    `}connectedCallback(){super.connectedCallback(),console.info(`%c ha-home-maintenance %c ${He} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;")}_onNavigateToCreate(){this._currentView="create",this._editTaskId=null,this._templateData=null}_onNavigateToEdit(e){this._currentView="edit",this._editTaskId=e.detail.taskId}_onNavigateToTemplates(){this._currentView="templates"}_onNavigateToList(){this._currentView="list"}_onSelectTemplate(e){this._currentView="create",this._templateData=e.detail.template}render(){switch(this._currentView){case"list":return h`
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
        `}}};p([b({attribute:!1})],$.prototype,"hass",2),p([b({type:Boolean})],$.prototype,"narrow",2),p([b({attribute:!1})],$.prototype,"panel",2),p([u()],$.prototype,"_currentView",2),p([u()],$.prototype,"_editTaskId",2),p([u()],$.prototype,"_templateData",2),$=p([I("ha-home-maintenance-panel")],$);export{$ as HaHomeMaintenancePanel};
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
