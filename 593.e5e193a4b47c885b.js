(self.webpackChunkam_app_shell=self.webpackChunkam_app_shell||[]).push([[593,74],{6593:(Ve,L,m)=>{m.r(L),m.d(L,{BrowserModule:()=>we,By:()=>Ie,DomSanitizer:()=>ee,EVENT_MANAGER_PLUGINS:()=>y,EventManager:()=>M,HAMMER_GESTURE_CONFIG:()=>S,HAMMER_LOADER:()=>N,HammerGestureConfig:()=>q,HammerModule:()=>Le,Meta:()=>Y,REMOVE_STYLES_ON_COMPONENT_DESTROY:()=>U,Title:()=>W,TransferState:()=>xe,VERSION:()=>je,bootstrapApplication:()=>ge,createApplication:()=>ye,disableDebugTools:()=>be,enableDebugTools:()=>Oe,makeStateKey:()=>Fe,platformBrowser:()=>Me,provideClientHydration:()=>Be,provideProtractorTestingSupport:()=>Ee,withNoDomReuse:()=>ke,withNoHttpTransferCache:()=>Ue,\u0275BrowserDomAdapter:()=>E,\u0275BrowserGetTestability:()=>H,\u0275DomEventsPlugin:()=>x,\u0275DomRendererFactory2:()=>C,\u0275DomSanitizerImpl:()=>P,\u0275HammerGesturesPlugin:()=>Q,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>b,\u0275KeyEventsPlugin:()=>z,\u0275SharedStylesHost:()=>T,\u0275getDOM:()=>u.\u0275getDOM,\u0275initDomAdapter:()=>K});var o=m(7970),u=m(3595),ne=m(567);class re extends u.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class E extends re{static makeCurrent(){(0,u.\u0275setRootDomAdapter)(new E)}onAndCancel(n,e,t){return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.parentNode&&n.parentNode.removeChild(n)}createElement(n,e){return(e=e||this.getDefaultDocument()).createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return"window"===e?window:"document"===e?n:"body"===e?n.body:null}getBaseHref(n){const e=function oe(){return g=g||document.querySelector("base"),g?g.getAttribute("href"):null}();return null==e?null:function se(r){v=v||document.createElement("a"),v.setAttribute("href",r);const n=v.pathname;return"/"===n.charAt(0)?n:`/${n}`}(e)}resetBaseElement(){g=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return(0,u.\u0275parseCookieValue)(document.cookie,n)}}let v,g=null;class H{addToWindow(n){o.\u0275global.getAngularTestability=(t,s=!0)=>{const i=n.findTestabilityInTree(t,s);if(null==i)throw new o.\u0275RuntimeError(5103,!1);return i},o.\u0275global.getAllAngularTestabilities=()=>n.getAllTestabilities(),o.\u0275global.getAllAngularRootElements=()=>n.getAllRootElements(),o.\u0275global.frameworkStabilizers||(o.\u0275global.frameworkStabilizers=[]),o.\u0275global.frameworkStabilizers.push(t=>{const s=o.\u0275global.getAllAngularTestabilities();let i=s.length,a=!1;const l=function(c){a=a||c,i--,0==i&&t(a)};s.forEach(c=>{c.whenStable(l)})})}findTestabilityInTree(n,e,t){return null==e?null:n.getTestability(e)??(t?(0,u.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}}let ie=(()=>{class r{build(){return new XMLHttpRequest}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();const y=new o.InjectionToken("EventManagerPlugins");let M=(()=>{class r{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,s){return this._findPluginFor(t).addEventListener(e,t,s)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new o.\u0275RuntimeError(5101,!1);return this._eventNameToPlugin.set(e,t),t}}return r.\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(y),o.\u0275\u0275inject(o.NgZone))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();class D{constructor(n){this._doc=n}}const w="ng-app-id";let T=(()=>{class r{constructor(e,t,s,i={}){this.doc=e,this.appId=t,this.nonce=s,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=(0,u.isPlatformServer)(i),this.resetHostNodes()}addStyles(e){for(const t of e)1===this.changeUsageCount(t,1)&&this.onStyleAdded(t)}removeStyles(e){for(const t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){const e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(const t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(const t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(const t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){const t=this.styleRef;t.get(e)?.elements?.forEach(s=>s.remove()),t.delete(e)}collectServerRenderedStyles(){const e=this.doc.head?.querySelectorAll(`style[${w}="${this.appId}"]`);if(e?.length){const t=new Map;return e.forEach(s=>{null!=s.textContent&&t.set(s.textContent,s)}),t}return null}changeUsageCount(e,t){const s=this.styleRef;if(s.has(e)){const i=s.get(e);return i.usage+=t,i.usage}return s.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){const s=this.styleNodesInDOM,i=s?.get(t);if(i?.parentNode===e)return s.delete(t),i.removeAttribute(w),i;{const a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=t,this.platformIsServer&&a.setAttribute(w,this.appId),a}}addStyleToHost(e,t){const s=this.getStyleElement(e,t);e.appendChild(s);const i=this.styleRef,a=i.get(t)?.elements;a?a.push(s):i.set(t,{elements:[s],usage:1})}resetHostNodes(){const e=this.hostNodes;e.clear(),e.add(this.doc.head)}}return r.\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(o.CSP_NONCE,8),o.\u0275\u0275inject(o.PLATFORM_ID))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();const _={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},R=/%COMP%/g,k="%COMP%",ae=`_nghost-${k}`,le=`_ngcontent-${k}`,U=new o.InjectionToken("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>!1});function B(r,n){return n.map(e=>e.replace(R,r))}let C=(()=>{class r{constructor(e,t,s,i,a,l,c,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=s,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=l,this.ngZone=c,this.nonce=d,this.rendererByCompId=new Map,this.platformIsServer=(0,u.isPlatformServer)(l),this.defaultRenderer=new A(e,a,c,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===o.ViewEncapsulation.ShadowDom&&(t={...t,encapsulation:o.ViewEncapsulation.Emulated});const s=this.getOrCreateRenderer(e,t);return s instanceof F?s.applyToHost(e):s instanceof O&&s.applyStyles(),s}getOrCreateRenderer(e,t){const s=this.rendererByCompId;let i=s.get(t.id);if(!i){const a=this.doc,l=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(t.encapsulation){case o.ViewEncapsulation.Emulated:i=new F(c,d,t,this.appId,h,a,l,p);break;case o.ViewEncapsulation.ShadowDom:return new he(c,d,e,t,a,l,this.nonce,p);default:i=new O(c,d,t,h,a,l,p)}i.onDestroy=()=>s.delete(t.id),s.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}}return r.\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(M),o.\u0275\u0275inject(T),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(U),o.\u0275\u0275inject(u.DOCUMENT),o.\u0275\u0275inject(o.PLATFORM_ID),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(o.CSP_NONCE))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();class A{constructor(n,e,t,s){this.eventManager=n,this.doc=e,this.ngZone=t,this.platformIsServer=s,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(n,e){return e?this.doc.createElementNS(_[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(j(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(j(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){n&&n.removeChild(e)}selectRootElement(n,e){let t="string"==typeof n?this.doc.querySelector(n):n;if(!t)throw new o.\u0275RuntimeError(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,s){if(s){e=s+":"+e;const i=_[s];i?n.setAttributeNS(i,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){const s=_[t];s?n.removeAttributeNS(s,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,s){s&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?n.style.setProperty(e,t,s&o.RendererStyleFlags2.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&o.RendererStyleFlags2.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n[e]=t}setValue(n,e){n.nodeValue=e}listen(n,e,t){if("string"==typeof n&&!(n=(0,u.\u0275getDOM)().getGlobalEventTarget(this.doc,n)))throw new Error(`Unsupported event target ${n} for event ${e}`);return this.eventManager.addEventListener(n,e,this.decoratePreventDefault(t))}decoratePreventDefault(n){return e=>{if("__ngUnwrap__"===e)return n;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))&&e.preventDefault()}}}function j(r){return"TEMPLATE"===r.tagName&&void 0!==r.content}class he extends A{constructor(n,e,t,s,i,a,l,c){super(n,i,a,c),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const d=B(s.id,s.styles);for(const h of d){const p=document.createElement("style");l&&p.setAttribute("nonce",l),p.textContent=h,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(this.nodeOrShadowRoot(n),e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class O extends A{constructor(n,e,t,s,i,a,l,c){super(n,i,a,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=s,this.rendererUsageCount=0,this.styles=c?B(c,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles),this.rendererUsageCount++}destroy(){this.removeStylesOnCompDestroy&&(this.sharedStylesHost.removeStyles(this.styles),this.rendererUsageCount--,0===this.rendererUsageCount&&this.onDestroy?.())}}class F extends O{constructor(n,e,t,s,i,a,l,c){const d=s+"-"+t.id;super(n,e,t,i,a,l,c,d),this.contentAttr=function ce(r){return le.replace(R,r)}(d),this.hostAttr=function de(r){return ae.replace(R,r)}(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){const t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}}let x=(()=>{class r extends D{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,s){return e.addEventListener(t,s,!1),()=>this.removeEventListener(e,t,s)}removeEventListener(e,t,s){return e.removeEventListener(t,s)}}return r.\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();const V=["alt","control","meta","shift"],pe={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},me={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey};let z=(()=>{class r extends D{constructor(e){super(e)}supports(e){return null!=r.parseEventName(e)}addEventListener(e,t,s){const i=r.parseEventName(t),a=r.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,u.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const t=e.toLowerCase().split("."),s=t.shift();if(0===t.length||"keydown"!==s&&"keyup"!==s)return null;const i=r._normalizeKey(t.pop());let a="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),a="code."),V.forEach(d=>{const h=t.indexOf(d);h>-1&&(t.splice(h,1),a+=d+".")}),a+=i,0!=t.length||0===i.length)return null;const c={};return c.domEventName=s,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let s=pe[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(s=e.code,i="code."),!(null==s||!s)&&(s=s.toLowerCase()," "===s?s="space":"."===s&&(s="dot"),V.forEach(a=>{a!==s&&(0,me[a])(e)&&(i+=a+".")}),i+=s,i===t)}static eventCallback(e,t,s){return i=>{r.matchEventFullKeyCode(i,e)&&s.runGuarded(()=>t(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return r.\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();function ge(r,n){return(0,o.\u0275internalCreateApplication)({rootComponent:r,...G(n)})}function ye(r){return(0,o.\u0275internalCreateApplication)(G(r))}function G(r){return{appProviders:[...Z,...r?.providers??[]],platformProviders:b}}function Ee(){return[...$]}function K(){E.makeCurrent()}const b=[{provide:o.PLATFORM_ID,useValue:u.\u0275PLATFORM_BROWSER_ID},{provide:o.PLATFORM_INITIALIZER,useValue:K,multi:!0},{provide:u.DOCUMENT,useFactory:function Se(){return(0,o.\u0275setDocument)(document),document},deps:[]}],Me=(0,o.createPlatformFactory)(o.platformCore,"browser",b),De=new o.InjectionToken(""),$=[{provide:o.\u0275TESTABILITY_GETTER,useClass:H,deps:[]},{provide:o.\u0275TESTABILITY,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]}],Z=[{provide:o.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:o.ErrorHandler,useFactory:function ve(){return new o.ErrorHandler},deps:[]},{provide:y,useClass:x,multi:!0,deps:[u.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:y,useClass:z,multi:!0,deps:[u.DOCUMENT]},C,T,M,{provide:o.RendererFactory2,useExisting:C},{provide:u.XhrFactory,useClass:ie,deps:[]},[]];let we=(()=>{class r{constructor(e){}static withServerTransition(e){return{ngModule:r,providers:[{provide:o.APP_ID,useValue:e.appId}]}}}return r.\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(De,12))},r.\u0275mod=o.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=o.\u0275\u0275defineInjector({providers:[...Z,...$],imports:[u.CommonModule,o.ApplicationModule]}),r})(),Y=(()=>{class r{constructor(e){this._doc=e,this._dom=(0,u.\u0275getDOM)()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((s,i)=>(i&&s.push(this._getOrCreateElement(i,t)),s),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const s=this.getTag(t);return s?this._setMetaElementAttributes(e,s):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const a=this._parseSelector(e),l=this.getTags(a).filter(c=>this._containsAttributes(e,c))[0];if(void 0!==l)return l}const s=this._dom.createElement("meta");return this._setMetaElementAttributes(e,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(s=>t.setAttribute(this._getMetaKeyMap(s),e[s])),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(s=>t.getAttribute(this._getMetaKeyMap(s))===e[s])}_getMetaKeyMap(e){return _e[e]||e}}return r.\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:function(e){let t=null;return t=e?new e:function Te(){return new Y((0,o.\u0275\u0275inject)(u.DOCUMENT))}(),t},providedIn:"root"}),r})();const _e={httpEquiv:"http-equiv"};let W=(()=>{class r{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return r.\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:function(e){let t=null;return t=e?new e:function Re(){return new W((0,o.\u0275\u0275inject)(u.DOCUMENT))}(),t},providedIn:"root"}),r})();function X(r,n){(typeof COMPILED>"u"||!COMPILED)&&((o.\u0275global.ng=o.\u0275global.ng||{})[r]=n)}const f=typeof window<"u"&&window||{};class Ce{constructor(n,e){this.msPerTick=n,this.numTicks=e}}class Ae{constructor(n){this.appRef=n.injector.get(o.ApplicationRef)}timeChangeDetection(n){const e=n&&n.record,t="Change Detection",s=null!=f.console.profile;e&&s&&f.console.profile(t);const i=I();let a=0;for(;a<5||I()-i<500;)this.appRef.tick(),a++;const l=I();e&&s&&f.console.profileEnd(t);const c=(l-i)/a;return f.console.log(`ran ${a} change detection cycles`),f.console.log(`${c.toFixed(2)} ms per check`),new Ce(c,a)}}function I(){return f.performance&&f.performance.now?f.performance.now():(new Date).getTime()}const J="profiler";function Oe(r){return X(J,new Ae(r)),r}function be(){X(J,null)}class Ie{static all(){return()=>!0}static css(n){return e=>null!=e.nativeElement&&function Ne(r,n){return!!(0,u.\u0275getDOM)().isElementNode(r)&&(r.matches&&r.matches(n)||r.msMatchesSelector&&r.msMatchesSelector(n)||r.webkitMatchesSelector&&r.webkitMatchesSelector(n))}(e.nativeElement,n)}static directive(n){return e=>-1!==e.providerTokens.indexOf(n)}}const Pe={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},S=new o.InjectionToken("HammerGestureConfig"),N=new o.InjectionToken("HammerLoader");let q=(()=>{class r{constructor(){this.events=[],this.overrides={}}buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const s in this.overrides)t.get(s).set(this.overrides[s]);return t}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})(),Q=(()=>{class r extends D{constructor(e,t,s,i){super(e),this._config=t,this.console=s,this.loader=i,this._loaderPromise=null}supports(e){return!(!Pe.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,s){const i=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let a=!1,l=()=>{a=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?a||(l=this.addEventListener(e,t,s)):l=()=>{}}).catch(()=>{l=()=>{}})),()=>{l()}}return i.runOutsideAngular(()=>{const a=this._config.buildHammer(e),l=function(c){i.runGuarded(function(){s(c)})};return a.on(t,l),()=>{a.off(t,l),"function"==typeof a.destroy&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}return r.\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT),o.\u0275\u0275inject(S),o.\u0275\u0275inject(o.\u0275Console),o.\u0275\u0275inject(N,8))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})(),Le=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:y,useClass:Q,multi:!0,deps:[u.DOCUMENT,S,o.\u0275Console,[new o.Optional,N]]},{provide:S,useClass:q,deps:[]}]}),r})(),ee=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:function(e){let t=null;return t=e?new(e||r):o.\u0275\u0275inject(P),t},providedIn:"root"}),r})(),P=(()=>{class r extends ee{constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case o.SecurityContext.NONE:return t;case o.SecurityContext.HTML:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"HTML")?(0,o.\u0275unwrapSafeValue)(t):(0,o.\u0275_sanitizeHtml)(this._doc,String(t)).toString();case o.SecurityContext.STYLE:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"Style")?(0,o.\u0275unwrapSafeValue)(t):t;case o.SecurityContext.SCRIPT:if((0,o.\u0275allowSanitizationBypassAndThrow)(t,"Script"))return(0,o.\u0275unwrapSafeValue)(t);throw new o.\u0275RuntimeError(5200,!1);case o.SecurityContext.URL:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"URL")?(0,o.\u0275unwrapSafeValue)(t):(0,o.\u0275_sanitizeUrl)(String(t));case o.SecurityContext.RESOURCE_URL:if((0,o.\u0275allowSanitizationBypassAndThrow)(t,"ResourceURL"))return(0,o.\u0275unwrapSafeValue)(t);throw new o.\u0275RuntimeError(5201,!1);default:throw new o.\u0275RuntimeError(5202,!1)}}bypassSecurityTrustHtml(e){return(0,o.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,o.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,o.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,o.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,o.\u0275bypassSanitizationTrustResourceUrl)(e)}}return r.\u0275fac=function(e){return new(e||r)(o.\u0275\u0275inject(u.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:function(e){let t=null;return t=e?new e:function He(r){return new P(r.get(u.DOCUMENT))}(o.\u0275\u0275inject(o.Injector)),t},providedIn:"root"}),r})();function te(r,n=[]){return{\u0275kind:r,\u0275providers:n}}function ke(){return te(0)}function Ue(){return te(1)}function Be(...r){const n=[],e=new Set;for(const{\u0275providers:t,\u0275kind:s}of r)e.add(s),t.length&&n.push(t);return(0,o.makeEnvironmentProviders)([[],e.has(0)?[]:(0,o.\u0275withDomHydration)(),e.has(1)?[]:(0,ne.\u0275withHttpTransferCache)(),n])}const je=new o.Version("16.1.4"),Fe=o.makeStateKey,xe=o.TransferState}}]);