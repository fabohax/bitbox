(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2639],{8697:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/es",function(){return t(447)}])},4329:function(e,i,t){"use strict";var s=t(5893);t(7294),t(5675),t(1664);var r=t(1163);i.Z=()=>{let e=(0,r.useRouter)();return(0,s.jsx)("div",{className:"dropdown",children:(0,s.jsxs)("select",{className:"dropdown-select",onChange:i=>{let t=i.target.value;e.push("/".concat(t))},children:[(0,s.jsx)("option",{value:"select",children:"文A"}),(0,s.jsx)("option",{value:"en",children:"English"}),(0,s.jsx)("option",{value:"es",children:"Espa\xf1ol"}),(0,s.jsx)("option",{value:"pt",children:"Portugu\xeas"}),(0,s.jsx)("option",{value:"tr",children:"T\xfcrk\xe7e"}),(0,s.jsx)("option",{value:"ru",children:"Русский"})]})})}},9413:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{noSSR:function(){return noSSR},default:function(){return dynamic}});let s=t(8754),r=(t(7294),s._(t(132)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,i){return delete i.webpack,delete i.modules,e(i)}function dynamic(e,i){let t=r.default,s={loading:e=>{let{error:i,isLoading:t,pastDelay:s}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s={...s,...e}),s={...s,...i};let a=s.loader;return(s.loadableGenerated&&(s={...s,...s.loadableGenerated},delete s.loadableGenerated),"boolean"!=typeof s.ssr||s.ssr)?t({...s,loader:()=>null!=a?a().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete s.webpack,delete s.modules,noSSR(t,s))}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},7240:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"LoadableContext",{enumerable:!0,get:function(){return a}});let s=t(8754),r=s._(t(7294)),a=r.default.createContext(null)},132:function(e,i,t){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return c}});let s=t(8754),r=s._(t(7294)),a=t(7240),n=[],o=[],l=!1;function load(e){let i=e(),t={loading:!0,loaded:null,error:null};return t.promise=i.then(e=>(t.loading=!1,t.loaded=e,e)).catch(e=>{throw t.loading=!1,t.error=e,e}),t}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:i}=this;e.loading&&("number"==typeof i.delay&&(0===i.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},i.delay)),"number"==typeof i.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},i.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,i){this._loadFn=e,this._opts=i,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,i){let t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},i),s=null;function init(){if(!s){let i=new LoadableSubscription(e,t);s={getCurrentValue:i.getCurrentValue.bind(i),subscribe:i.subscribe.bind(i),retry:i.retry.bind(i),promise:i.promise.bind(i)}}return s.promise()}if(!l){let e=t.webpack?t.webpack():t.modules;e&&o.push(i=>{for(let t of e)if(i.includes(t))return init()})}function LoadableComponent(e,i){!function(){init();let e=r.default.useContext(a.LoadableContext);e&&Array.isArray(t.modules)&&t.modules.forEach(i=>{e(i)})}();let n=r.default.useSyncExternalStore(s.subscribe,s.getCurrentValue,s.getCurrentValue);return r.default.useImperativeHandle(i,()=>({retry:s.retry}),[]),r.default.useMemo(()=>{var i;return n.loading||n.error?r.default.createElement(t.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?r.default.createElement((i=n.loaded)&&i.default?i.default:i,e):null},[e,n])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",r.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,i){let t=[];for(;e.length;){let s=e.pop();t.push(s(i))}return Promise.all(t).then(()=>{if(e.length)return flushInitializers(e,i)})}Loadable.preloadAll=()=>new Promise((e,i)=>{flushInitializers(n).then(e,i)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(i=>{let res=()=>(l=!0,i());flushInitializers(o,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let c=Loadable},5810:function(e,i,t){"use strict";t.r(i);var s=t(5893),r=t(1664),a=t.n(r),n=t(4329);i.default=()=>(0,s.jsx)("footer",{className:"footer",children:(0,s.jsxs)("div",{className:"footer-grid",children:[(0,s.jsx)("div",{className:"footer-item",children:(0,s.jsx)(a(),{href:"/",children:"Inicio"})}),(0,s.jsx)("div",{className:"footer-item",children:(0,s.jsx)(a(),{href:"/",children:"Productos"})}),(0,s.jsx)("div",{className:"footer-item",children:(0,s.jsx)(a(),{href:"/about",children:"Info"})}),(0,s.jsx)("div",{className:"footer-item",children:(0,s.jsx)(a(),{href:"/contact",children:"Contacto"})}),(0,s.jsx)("div",{className:"footer-item",children:(0,s.jsx)(a(),{href:"/faq",children:"FAQs"})}),(0,s.jsx)("div",{className:"footer-item",children:(0,s.jsx)(a(),{href:"/privacy",children:"Privacidad"})}),(0,s.jsx)("div",{className:"footer-item",children:(0,s.jsx)(a(),{href:"/terms",children:"T\xe9rminos"})}),(0,s.jsx)("div",{className:"footer-item",children:(0,s.jsx)(n.Z,{})})]})})},1996:function(e,i,t){"use strict";t.r(i);var s=t(5893);t(7294);var r=t(1664),a=t.n(r),n=t(5675),o=t.n(n);i.default=()=>(0,s.jsxs)("header",{className:"header",children:[(0,s.jsx)(a(),{href:"/",children:(0,s.jsx)(o(),{src:"/ico/bitbox.svg",className:"logo",height:36,width:36,alt:"logo"})}),(0,s.jsx)("div",{className:"searchForm",children:(0,s.jsx)("input",{type:"text",placeholder:"search...",className:"searchInput"})}),(0,s.jsx)(a(),{href:"/cart",children:(0,s.jsx)(o(),{src:"/ico/logo.svg",className:"logo",height:50,width:50,alt:"box"})})]})},447:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return Home}});var s=t(5893),r=t(7294);t(9008);var a=t(1664),n=t.n(a),o=t(5675),l=t.n(o);t(5152);var c=t(9597);t(4290);var u=t(1996),d=t(5810),m=t(22);function Home(){let[e,i]=(0,r.useState)(c.a);(0,r.useEffect)(()=>{i(c.a)},[]);let[t,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{a(!0)},[]),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(u.default,{}),(0,s.jsx)(m.default,{}),(0,s.jsx)("main",{className:"grid ".concat(t?"visible":""),children:e.map(e=>(0,s.jsx)("div",{className:"product-item",children:(0,s.jsx)(n(),{href:"/".concat(e.id),passHref:!0,children:(0,s.jsx)(l(),{width:350,height:350,src:e.image,alt:e.title})})},e.id))}),(0,s.jsx)(d.default,{})]})}},22:function(e,i,t){"use strict";t.r(i);var s=t(5893),r=t(1664),a=t.n(r);i.default=()=>(0,s.jsxs)("div",{className:"sections",children:[(0,s.jsx)("div",{className:"section-button",children:(0,s.jsx)(a(),{href:"/apps",className:"rounded-button",passHref:!0,children:"aplicaciones"})}),(0,s.jsx)("div",{className:"section-button",children:(0,s.jsx)(a(),{href:"/imgs",className:"rounded-button",passHref:!0,children:"im\xe1genes"})}),(0,s.jsx)("div",{className:"section-button",children:(0,s.jsx)(a(),{href:"/models",className:"rounded-button",passHref:!0,children:"modelos"})})]})},5152:function(e,i,t){t(9413)},1163:function(e,i,t){e.exports=t(4751)},9597:function(e){"use strict";e.exports=JSON.parse('{"a":[{"title":"P-001","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":12,"currency":"USD","image":"/01.avif","tag":"t1","id":"c1"},{"title":"P-002","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":16,"currency":"USDT","image":"/02.avif","tag":"t1","id":"c2"},{"title":"P-003","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":20,"currency":"USDT","image":"/03.avif","tag":"t1","id":"c3"},{"title":"P-4","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":50,"currency":"USDT","image":"/04.avif","tag":"t2","id":"c4"},{"title":"P-5","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":50,"currency":"USDT","image":"/05.avif","tag":"t2","id":"c5"},{"title":"P-6","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":50,"currency":"USDT","image":"/06.avif","tag":"t2","id":"c6"},{"title":"P-7","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":50,"currency":"USDT","image":"/07.avif","tag":"t3","id":"c7"},{"title":"P-8","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":50,"currency":"USDT","image":"/08.avif","tag":"t3","id":"c8"},{"title":"P-9","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":50,"currency":"USDT","image":"/09.avif","tag":"t3","id":"c9"},{"title":"P-10","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":50,"currency":"USDT","image":"/10.avif","tag":"t4","id":"c10"},{"title":"P-11","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":50,"currency":"USDT","image":"/11.avif","tag":"t4","id":"c11"},{"title":"P-12","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.","price":50,"currency":"USDT","image":"/12.avif","tag":"t4","id":"c12"}]}')}},function(e){e.O(0,[1664,5675,9774,2888,179],function(){return e(e.s=8697)}),_N_E=e.O()}]);