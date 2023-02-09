function ge(){}function Ye(r,e){for(const t in e)r[t]=e[t];return r}function yc(r){return r()}function xo(){return Object.create(null)}function qi(r){r.forEach(yc)}function Xa(r){return typeof r=="function"}function St(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function Su(r){return Object.keys(r).length===0}function Mc(r,...e){if(r==null)return ge;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function yr(r,e,t){r.$$.on_destroy.push(Mc(e,t))}function zt(r,e,t,n){if(r){const i=bc(r,e,t,n);return r[0](i)}}function bc(r,e,t,n){return r[1]&&n?Ye(t.ctx.slice(),r[1](n(e))):t.ctx}function Bt(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|i[o];return s}return e.dirty|i}return e.dirty}function Vt(r,e,t,n,i,s){if(i){const a=bc(e,t,n,s);r.p(a,i)}}function Ht(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function vn(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function Mt(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}let Es=!1;function wu(){Es=!0}function Tu(){Es=!1}function Au(r,e,t,n){for(;r<e;){const i=r+(e-r>>1);t(i)<=n?r=i+1:e=i}return r}function Eu(r){if(r.hydrate_init)return;r.hydrate_init=!0;let e=r.childNodes;if(r.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const h=e[u];h.claim_order!==void 0&&c.push(h)}e=c}const t=new Int32Array(e.length+1),n=new Int32Array(e.length);t[0]=-1;let i=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,h=(i>0&&e[t[i]].claim_order<=u?i+1:Au(1,i,l=>e[t[l]].claim_order,u))-1;n[c]=t[h]+1;const f=h+1;t[f]=c,i=Math.max(f,i)}const s=[],a=[];let o=e.length-1;for(let c=t[i]+1;c!=0;c=n[c-1]){for(s.push(e[c-1]);o>=c;o--)a.push(e[o]);o--}for(;o>=0;o--)a.push(e[o]);s.reverse(),a.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<a.length;c++){for(;u<s.length&&a[c].claim_order>=s[u].claim_order;)u++;const h=u<s.length?s[u]:null;r.insertBefore(a[c],h)}}function rn(r,e){if(Es){for(Eu(r),(r.actual_end_child===void 0||r.actual_end_child!==null&&r.actual_end_child.parentNode!==r)&&(r.actual_end_child=r.firstChild);r.actual_end_child!==null&&r.actual_end_child.claim_order===void 0;)r.actual_end_child=r.actual_end_child.nextSibling;e!==r.actual_end_child?(e.claim_order!==void 0||e.parentNode!==r)&&r.insertBefore(e,r.actual_end_child):r.actual_end_child=e.nextSibling}else(e.parentNode!==r||e.nextSibling!==null)&&r.appendChild(e)}function le(r,e,t){Es&&!t?rn(r,e):(e.parentNode!==r||e.nextSibling!=t)&&r.insertBefore(e,t||null)}function N(r){r.parentNode&&r.parentNode.removeChild(r)}function $x(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function ki(r){return document.createElement(r)}function he(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function hn(r){return document.createTextNode(r)}function Cu(){return hn(" ")}function Wn(){return hn("")}function Lu(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function $(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function bt(r,e){for(const t in e)$(r,t,e[t])}function ce(r){return Array.from(r.childNodes)}function Ru(r){r.claim_info===void 0&&(r.claim_info={last_index:0,total_claimed:0})}function Sc(r,e,t,n,i=!1){Ru(r);const s=(()=>{for(let a=r.claim_info.last_index;a<r.length;a++){const o=r[a];if(e(o)){const c=t(o);return c===void 0?r.splice(a,1):r[a]=c,i||(r.claim_info.last_index=a),o}}for(let a=r.claim_info.last_index-1;a>=0;a--){const o=r[a];if(e(o)){const c=t(o);return c===void 0?r.splice(a,1):r[a]=c,i?c===void 0&&r.claim_info.last_index--:r.claim_info.last_index=a,o}}return n()})();return s.claim_order=r.claim_info.total_claimed,r.claim_info.total_claimed+=1,s}function wc(r,e,t,n){return Sc(r,i=>i.nodeName===e,i=>{const s=[];for(let a=0;a<i.attributes.length;a++){const o=i.attributes[a];t[o.name]||s.push(o.name)}s.forEach(a=>i.removeAttribute(a))},()=>n(e))}function wr(r,e,t){return wc(r,e,t,ki)}function fe(r,e,t){return wc(r,e,t,he)}function In(r,e){return Sc(r,t=>t.nodeType===3,t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n},()=>hn(e),!0)}function Pu(r){return In(r," ")}function ev(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function Du(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}function vo(r,e){return new r(e)}let Tr;function Mr(r){Tr=r}function Or(){if(!Tr)throw new Error("Function called outside component initialization");return Tr}function Cs(r){Or().$$.on_mount.push(r)}function qa(r){Or().$$.on_destroy.push(r)}function Iu(){const r=Or();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=Du(e,t,{cancelable:n});return i.slice().forEach(a=>{a.call(r,s)}),!s.defaultPrevented}return!0}}function bs(r,e){return Or().$$.context.set(r,e),e}function Ut(r){return Or().$$.context.get(r)}const gr=[],Ss=[],ps=[],yo=[],Nu=Promise.resolve();let Aa=!1;function Fu(){Aa||(Aa=!0,Nu.then(Tc))}function Ea(r){ps.push(r)}const Bs=new Set;let Hr=0;function Tc(){const r=Tr;do{for(;Hr<gr.length;){const e=gr[Hr];Hr++,Mr(e),Ou(e.$$)}for(Mr(null),gr.length=0,Hr=0;Ss.length;)Ss.pop()();for(let e=0;e<ps.length;e+=1){const t=ps[e];Bs.has(t)||(Bs.add(t),t())}ps.length=0}while(gr.length);for(;yo.length;)yo.pop()();Aa=!1,Bs.clear(),Mr(r)}function Ou(r){if(r.fragment!==null){r.update(),qi(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(Ea)}}const ms=new Set;let ii;function ji(){ii={r:0,c:[],p:ii}}function Yi(){ii.r||qi(ii.c),ii=ii.p}function qe(r,e){r&&r.i&&(ms.delete(r),r.i(e))}function $e(r,e,t,n){if(r&&r.o){if(ms.has(r))return;ms.add(r),ii.c.push(()=>{ms.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function Nn(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const a=r[s],o=e[s];if(o){for(const c in a)c in o||(n[c]=1);for(const c in o)i[c]||(t[c]=o[c],i[c]=1);r[s]=o}else for(const c in a)i[c]=1}for(const a in n)a in t||(t[a]=void 0);return t}function Mo(r){return typeof r=="object"&&r!==null?r:{}}function bo(r){r&&r.c()}function Uu(r,e){r&&r.l(e)}function Ca(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||Ea(()=>{const a=r.$$.on_mount.map(yc).filter(Xa);r.$$.on_destroy?r.$$.on_destroy.push(...a):qi(a),r.$$.on_mount=[]}),s.forEach(Ea)}function La(r,e){const t=r.$$;t.fragment!==null&&(qi(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ku(r,e){r.$$.dirty[0]===-1&&(gr.push(r),Fu(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function Nt(r,e,t,n,i,s,a,o=[-1]){const c=Tr;Mr(r);const u=r.$$={fragment:null,ctx:[],props:s,update:ge,not_equal:i,bound:xo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:xo(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};a&&a(u.root);let h=!1;if(u.ctx=t?t(r,e.props||{},(f,l,...d)=>{const g=d.length?d[0]:l;return u.ctx&&i(u.ctx[f],u.ctx[f]=g)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](g),h&&ku(r,f)),l}):[],u.update(),h=!0,qi(u.before_update),u.fragment=n?n(u.ctx):!1,e.target){if(e.hydrate){wu();const f=ce(e.target);u.fragment&&u.fragment.l(f),f.forEach(N)}else u.fragment&&u.fragment.c();e.intro&&qe(r.$$.fragment),Ca(r,e.target,e.anchor,e.customElement),Tu(),Tc()}Mr(c)}class Ft{$destroy(){La(this,1),this.$destroy=ge}$on(e,t){if(!Xa(t))return ge;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Su(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _i=[];function zu(r,e){return{subscribe:_r(r,e).subscribe}}function _r(r,e=ge){let t;const n=new Set;function i(o){if(St(r,o)&&(r=o,t)){const c=!_i.length;for(const u of n)u[1](),_i.push(u,r);if(c){for(let u=0;u<_i.length;u+=2)_i[u][0](_i[u+1]);_i.length=0}}}function s(o){i(o(r))}function a(o,c=ge){const u=[o,c];return n.add(u),n.size===1&&(t=e(i)||ge),o(r),()=>{n.delete(u),n.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}function Bu(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return zu(t,a=>{let o=!1;const c=[];let u=0,h=ge;const f=()=>{if(u)return;h();const d=e(n?c[0]:c,a);s?a(d):h=Xa(d)?d:ge},l=i.map((d,g)=>Mc(d,m=>{c[g]=m,u&=~(1<<g),o&&f()},()=>{u|=1<<g}));return o=!0,f(),function(){qi(l),h()}})}const Ra={},Pa={};function Vs(r){return{...r.location,state:r.history.state,key:r.history.state&&r.history.state.key||"initial"}}function Vu(r,e){const t=[];let n=Vs(r);return{get location(){return n},listen(i){t.push(i);const s=()=>{n=Vs(r),i({location:n,action:"POP"})};return r.addEventListener("popstate",s),()=>{r.removeEventListener("popstate",s);const a=t.indexOf(i);t.splice(a,1)}},navigate(i,{state:s,replace:a=!1}={}){s={...s,key:Date.now()+""};try{a?r.history.replaceState(s,null,i):r.history.pushState(s,null,i)}catch{r.location[a?"replace":"assign"](i)}n=Vs(r),t.forEach(o=>o({location:n,action:"PUSH"}))}}}function Hu(r="/"){let e=0;const t=[{pathname:r,search:""}],n=[];return{get location(){return t[e]},addEventListener(i,s){},removeEventListener(i,s){},history:{get entries(){return t},get index(){return e},get state(){return n[e]},pushState(i,s,a){const[o,c=""]=a.split("?");e++,t.push({pathname:o,search:c}),n.push(i)},replaceState(i,s,a){const[o,c=""]=a.split("?");t[e]={pathname:o,search:c},n[e]=i}}}}const Gu=Boolean(typeof window<"u"&&window.document&&window.document.createElement),So=Vu(Gu?window:Hu()),Ac=/^:(.+)/,wo=4,Wu=3,Zu=2,Xu=1,qu=1;function ju(r){return r===""}function Yu(r){return Ac.test(r)}function Ec(r){return r[0]==="*"}function Da(r){return r.replace(/(^\/+|\/+$)/g,"").split("/")}function Hs(r){return r.replace(/(^\/+|\/+$)/g,"")}function Ku(r,e){const t=r.default?0:Da(r.path).reduce((n,i)=>(n+=wo,ju(i)?n+=qu:Yu(i)?n+=Zu:Ec(i)?n-=wo+Xu:n+=Wu,n),0);return{route:r,score:t,index:e}}function Ju(r){return r.map(Ku).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}function Cc(r,e){let t,n;const[i]=e.split("?"),s=Da(i),a=s[0]==="",o=Ju(r);for(let c=0,u=o.length;c<u;c++){const h=o[c].route;let f=!1;if(h.default){n={route:h,params:{},uri:e};continue}const l=Da(h.path),d={},g=Math.max(s.length,l.length);let m=0;for(;m<g;m++){const p=l[m],_=s[m];if(p!==void 0&&Ec(p)){const y=p==="*"?"*":p.slice(1);d[y]=s.slice(m).map(decodeURIComponent).join("/");break}if(_===void 0){f=!0;break}let b=Ac.exec(p);if(b&&!a){const y=decodeURIComponent(_);d[b[1]]=y}else if(p!==_){f=!0;break}}if(!f){t={route:h,params:d,uri:"/"+s.slice(0,m).join("/")};break}}return t||n||null}function Qu(r,e){return Cc([r],e)}function To(r,e){return`${Hs(e==="/"?r:`${Hs(r)}/${Hs(e)}`)}/`}function $u(r){let e;const t=r[9].default,n=zt(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Vt(n,t,i,i[8],e?Bt(t,i[8],s,null):Ht(i[8]),null)},i(i){e||(qe(n,i),e=!0)},o(i){$e(n,i),e=!1},d(i){n&&n.d(i)}}}function eh(r,e,t){let n,i,s,{$$slots:a={},$$scope:o}=e,{basepath:c="/"}=e,{url:u=null}=e;const h=Ut(Ra),f=Ut(Pa),l=_r([]);yr(r,l,v=>t(6,i=v));const d=_r(null);let g=!1;const m=h||_r(u?{pathname:u}:So.location);yr(r,m,v=>t(5,n=v));const p=f?f.routerBase:_r({path:c,uri:c});yr(r,p,v=>t(7,s=v));const _=Bu([p,d],([v,w])=>{if(w===null)return v;const{path:A}=v,{route:C,uri:x}=w;return{path:C.default?A:C.path.replace(/\*.*$/,""),uri:x}});function b(v){const{path:w}=s;let{path:A}=v;if(v._path=A,v.path=To(w,A),typeof window>"u"){if(g)return;const C=Qu(v,n.pathname);C&&(d.set(C),g=!0)}else l.update(C=>(C.push(v),C))}function y(v){l.update(w=>{const A=w.indexOf(v);return w.splice(A,1),w})}return h||(Cs(()=>So.listen(w=>{m.set(w.location)})),bs(Ra,m)),bs(Pa,{activeRoute:d,base:p,routerBase:_,registerRoute:b,unregisterRoute:y}),r.$$set=v=>{"basepath"in v&&t(3,c=v.basepath),"url"in v&&t(4,u=v.url),"$$scope"in v&&t(8,o=v.$$scope)},r.$$.update=()=>{if(r.$$.dirty&128){const{path:v}=s;l.update(w=>(w.forEach(A=>A.path=To(v,A._path)),w))}if(r.$$.dirty&96){const v=Cc(i,n.pathname);d.set(v)}},[l,m,p,c,u,n,i,s,o,a]}class tv extends Ft{constructor(e){super(),Nt(this,e,eh,$u,St,{basepath:3,url:4})}}const th=r=>({params:r&4,location:r&16}),Ao=r=>({params:r[2],location:r[4]});function Eo(r){let e,t,n,i;const s=[ih,nh],a=[];function o(c,u){return c[0]!==null?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=Wn()},l(c){t.l(c),n=Wn()},m(c,u){a[e].m(c,u),le(c,n,u),i=!0},p(c,u){let h=e;e=o(c),e===h?a[e].p(c,u):(ji(),$e(a[h],1,1,()=>{a[h]=null}),Yi(),t=a[e],t?t.p(c,u):(t=a[e]=s[e](c),t.c()),qe(t,1),t.m(n.parentNode,n))},i(c){i||(qe(t),i=!0)},o(c){$e(t),i=!1},d(c){a[e].d(c),c&&N(n)}}}function nh(r){let e;const t=r[10].default,n=zt(t,r,r[9],Ao);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&532)&&Vt(n,t,i,i[9],e?Bt(t,i[9],s,th):Ht(i[9]),Ao)},i(i){e||(qe(n,i),e=!0)},o(i){$e(n,i),e=!1},d(i){n&&n.d(i)}}}function ih(r){let e,t,n;const i=[{location:r[4]},r[2],r[3]];var s=r[0];function a(o){let c={};for(let u=0;u<i.length;u+=1)c=Ye(c,i[u]);return{props:c}}return s&&(e=vo(s,a())),{c(){e&&bo(e.$$.fragment),t=Wn()},l(o){e&&Uu(e.$$.fragment,o),t=Wn()},m(o,c){e&&Ca(e,o,c),le(o,t,c),n=!0},p(o,c){const u=c&28?Nn(i,[c&16&&{location:o[4]},c&4&&Mo(o[2]),c&8&&Mo(o[3])]):{};if(s!==(s=o[0])){if(e){ji();const h=e;$e(h.$$.fragment,1,0,()=>{La(h,1)}),Yi()}s?(e=vo(s,a()),bo(e.$$.fragment),qe(e.$$.fragment,1),Ca(e,t.parentNode,t)):e=null}else s&&e.$set(u)},i(o){n||(e&&qe(e.$$.fragment,o),n=!0)},o(o){e&&$e(e.$$.fragment,o),n=!1},d(o){o&&N(t),e&&La(e,o)}}}function rh(r){let e,t,n=r[1]!==null&&r[1].route===r[7]&&Eo(r);return{c(){n&&n.c(),e=Wn()},l(i){n&&n.l(i),e=Wn()},m(i,s){n&&n.m(i,s),le(i,e,s),t=!0},p(i,[s]){i[1]!==null&&i[1].route===i[7]?n?(n.p(i,s),s&2&&qe(n,1)):(n=Eo(i),n.c(),qe(n,1),n.m(e.parentNode,e)):n&&(ji(),$e(n,1,1,()=>{n=null}),Yi())},i(i){t||(qe(n),t=!0)},o(i){$e(n),t=!1},d(i){n&&n.d(i),i&&N(e)}}}function sh(r,e,t){let n,i,{$$slots:s={},$$scope:a}=e,{path:o=""}=e,{component:c=null}=e;const{registerRoute:u,unregisterRoute:h,activeRoute:f}=Ut(Pa);yr(r,f,p=>t(1,n=p));const l=Ut(Ra);yr(r,l,p=>t(4,i=p));const d={path:o,default:o===""};let g={},m={};return u(d),typeof window<"u"&&qa(()=>{h(d)}),r.$$set=p=>{t(13,e=Ye(Ye({},e),vn(p))),"path"in p&&t(8,o=p.path),"component"in p&&t(0,c=p.component),"$$scope"in p&&t(9,a=p.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&n&&n.route===d&&t(2,g=n.params);{const{path:p,component:_,...b}=e;t(3,m=b)}},e=vn(e),[c,n,g,m,i,f,l,d,o,a,s]}class nv extends Ft{constructor(e){super(),Nt(this,e,sh,rh,St,{path:8,component:0})}}function ah(r){if(r.sheet)return r.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===r)return document.styleSheets[e]}function oh(r){var e=document.createElement("style");return e.setAttribute("data-emotion",r.key),r.nonce!==void 0&&e.setAttribute("nonce",r.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var lh=function(){function r(t){var n=this;this._insertTag=function(i){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,s),n.tags.push(i)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=r.prototype;return e.hydrate=function(n){n.forEach(this._insertTag)},e.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(oh(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=ah(i);try{s.insertRule(n,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},e.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},r}(),yt="-ms-",ws="-moz-",Ge="-webkit-",Lc="comm",ja="rule",Ya="decl",ch="@import",Rc="@keyframes",uh=Math.abs,Ls=String.fromCharCode,hh=Object.assign;function fh(r,e){return gt(r,0)^45?(((e<<2^gt(r,0))<<2^gt(r,1))<<2^gt(r,2))<<2^gt(r,3):0}function Pc(r){return r.trim()}function dh(r,e){return(r=e.exec(r))?r[0]:r}function Ze(r,e,t){return r.replace(e,t)}function Ia(r,e){return r.indexOf(e)}function gt(r,e){return r.charCodeAt(e)|0}function Ar(r,e,t){return r.slice(e,t)}function pn(r){return r.length}function Ka(r){return r.length}function Gr(r,e){return e.push(r),r}function ph(r,e){return r.map(e).join("")}var Rs=1,zi=1,Dc=0,kt=0,at=0,Ki="";function Ps(r,e,t,n,i,s,a){return{value:r,root:e,parent:t,type:n,props:i,children:s,line:Rs,column:zi,length:a,return:""}}function rr(r,e){return hh(Ps("",null,null,"",null,null,0),r,{length:-r.length},e)}function mh(){return at}function gh(){return at=kt>0?gt(Ki,--kt):0,zi--,at===10&&(zi=1,Rs--),at}function jt(){return at=kt<Dc?gt(Ki,kt++):0,zi++,at===10&&(zi=1,Rs++),at}function _n(){return gt(Ki,kt)}function gs(){return kt}function Ur(r,e){return Ar(Ki,r,e)}function Er(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ic(r){return Rs=zi=1,Dc=pn(Ki=r),kt=0,[]}function Nc(r){return Ki="",r}function _s(r){return Pc(Ur(kt-1,Na(r===91?r+2:r===40?r+1:r)))}function _h(r){for(;(at=_n())&&at<33;)jt();return Er(r)>2||Er(at)>3?"":" "}function xh(r,e){for(;--e&&jt()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return Ur(r,gs()+(e<6&&_n()==32&&jt()==32))}function Na(r){for(;jt();)switch(at){case r:return kt;case 34:case 39:r!==34&&r!==39&&Na(at);break;case 40:r===41&&Na(r);break;case 92:jt();break}return kt}function vh(r,e){for(;jt()&&r+at!==47+10;)if(r+at===42+42&&_n()===47)break;return"/*"+Ur(e,kt-1)+"*"+Ls(r===47?r:jt())}function yh(r){for(;!Er(_n());)jt();return Ur(r,kt)}function Mh(r){return Nc(xs("",null,null,null,[""],r=Ic(r),0,[0],r))}function xs(r,e,t,n,i,s,a,o,c){for(var u=0,h=0,f=a,l=0,d=0,g=0,m=1,p=1,_=1,b=0,y="",v=i,w=s,A=n,C=y;p;)switch(g=b,b=jt()){case 40:if(g!=108&&gt(C,f-1)==58){Ia(C+=Ze(_s(b),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:C+=_s(b);break;case 9:case 10:case 13:case 32:C+=_h(g);break;case 92:C+=xh(gs()-1,7);continue;case 47:switch(_n()){case 42:case 47:Gr(bh(vh(jt(),gs()),e,t),c);break;default:C+="/"}break;case 123*m:o[u++]=pn(C)*_;case 125*m:case 59:case 0:switch(b){case 0:case 125:p=0;case 59+h:d>0&&pn(C)-f&&Gr(d>32?Lo(C+";",n,t,f-1):Lo(Ze(C," ","")+";",n,t,f-2),c);break;case 59:C+=";";default:if(Gr(A=Co(C,e,t,u,h,i,o,y,v=[],w=[],f),s),b===123)if(h===0)xs(C,e,A,A,v,s,f,o,w);else switch(l===99&&gt(C,3)===110?100:l){case 100:case 109:case 115:xs(r,A,A,n&&Gr(Co(r,A,A,0,0,i,o,y,i,v=[],f),w),i,w,f,o,n?v:w);break;default:xs(C,A,A,A,[""],w,0,o,w)}}u=h=d=0,m=_=1,y=C="",f=a;break;case 58:f=1+pn(C),d=g;default:if(m<1){if(b==123)--m;else if(b==125&&m++==0&&gh()==125)continue}switch(C+=Ls(b),b*m){case 38:_=h>0?1:(C+="\f",-1);break;case 44:o[u++]=(pn(C)-1)*_,_=1;break;case 64:_n()===45&&(C+=_s(jt())),l=_n(),h=f=pn(y=C+=yh(gs())),b++;break;case 45:g===45&&pn(C)==2&&(m=0)}}return s}function Co(r,e,t,n,i,s,a,o,c,u,h){for(var f=i-1,l=i===0?s:[""],d=Ka(l),g=0,m=0,p=0;g<n;++g)for(var _=0,b=Ar(r,f+1,f=uh(m=a[g])),y=r;_<d;++_)(y=Pc(m>0?l[_]+" "+b:Ze(b,/&\f/g,l[_])))&&(c[p++]=y);return Ps(r,e,t,i===0?ja:o,c,u,h)}function bh(r,e,t){return Ps(r,e,t,Lc,Ls(mh()),Ar(r,2,-2),0)}function Lo(r,e,t,n){return Ps(r,e,t,Ya,Ar(r,0,n),Ar(r,n+1,-1),n)}function Ni(r,e){for(var t="",n=Ka(r),i=0;i<n;i++)t+=e(r[i],i,r,e)||"";return t}function Sh(r,e,t,n){switch(r.type){case ch:case Ya:return r.return=r.return||r.value;case Lc:return"";case Rc:return r.return=r.value+"{"+Ni(r.children,n)+"}";case ja:r.value=r.props.join(",")}return pn(t=Ni(r.children,n))?r.return=r.value+"{"+t+"}":""}function wh(r){var e=Ka(r);return function(t,n,i,s){for(var a="",o=0;o<e;o++)a+=r[o](t,n,i,s)||"";return a}}function Th(r){return function(e){e.root||(e=e.return)&&r(e)}}function Ah(r){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=r(t)),e[t]}}var Eh=function(e,t,n){for(var i=0,s=0;i=s,s=_n(),i===38&&s===12&&(t[n]=1),!Er(s);)jt();return Ur(e,kt)},Ch=function(e,t){var n=-1,i=44;do switch(Er(i)){case 0:i===38&&_n()===12&&(t[n]=1),e[n]+=Eh(kt-1,t,n);break;case 2:e[n]+=_s(i);break;case 4:if(i===44){e[++n]=_n()===58?"&\f":"",t[n]=e[n].length;break}default:e[n]+=Ls(i)}while(i=jt());return e},Lh=function(e,t){return Nc(Ch(Ic(e),t))},Ro=new WeakMap,Rh=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,i=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Ro.get(n))&&!i){Ro.set(e,!0);for(var s=[],a=Lh(t,s),o=n.props,c=0,u=0;c<a.length;c++)for(var h=0;h<o.length;h++,u++)e.props[u]=s[c]?a[c].replace(/&\f/g,o[h]):o[h]+" "+a[c]}}},Ph=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function Fc(r,e){switch(fh(r,e)){case 5103:return Ge+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ge+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Ge+r+ws+r+yt+r+r;case 6828:case 4268:return Ge+r+yt+r+r;case 6165:return Ge+r+yt+"flex-"+r+r;case 5187:return Ge+r+Ze(r,/(\w+).+(:[^]+)/,Ge+"box-$1$2"+yt+"flex-$1$2")+r;case 5443:return Ge+r+yt+"flex-item-"+Ze(r,/flex-|-self/,"")+r;case 4675:return Ge+r+yt+"flex-line-pack"+Ze(r,/align-content|flex-|-self/,"")+r;case 5548:return Ge+r+yt+Ze(r,"shrink","negative")+r;case 5292:return Ge+r+yt+Ze(r,"basis","preferred-size")+r;case 6060:return Ge+"box-"+Ze(r,"-grow","")+Ge+r+yt+Ze(r,"grow","positive")+r;case 4554:return Ge+Ze(r,/([^-])(transform)/g,"$1"+Ge+"$2")+r;case 6187:return Ze(Ze(Ze(r,/(zoom-|grab)/,Ge+"$1"),/(image-set)/,Ge+"$1"),r,"")+r;case 5495:case 3959:return Ze(r,/(image-set\([^]*)/,Ge+"$1$`$1");case 4968:return Ze(Ze(r,/(.+:)(flex-)?(.*)/,Ge+"box-pack:$3"+yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ge+r+r;case 4095:case 3583:case 4068:case 2532:return Ze(r,/(.+)-inline(.+)/,Ge+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(r)-1-e>6)switch(gt(r,e+1)){case 109:if(gt(r,e+4)!==45)break;case 102:return Ze(r,/(.+:)(.+)-([^]+)/,"$1"+Ge+"$2-$3$1"+ws+(gt(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Ia(r,"stretch")?Fc(Ze(r,"stretch","fill-available"),e)+r:r}break;case 4949:if(gt(r,e+1)!==115)break;case 6444:switch(gt(r,pn(r)-3-(~Ia(r,"!important")&&10))){case 107:return Ze(r,":",":"+Ge)+r;case 101:return Ze(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ge+(gt(r,14)===45?"inline-":"")+"box$3$1"+Ge+"$2$3$1"+yt+"$2box$3")+r}break;case 5936:switch(gt(r,e+11)){case 114:return Ge+r+yt+Ze(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Ge+r+yt+Ze(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Ge+r+yt+Ze(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return Ge+r+yt+r+r}return r}var Dh=function(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Ya:e.return=Fc(e.value,e.length);break;case Rc:return Ni([rr(e,{value:Ze(e.value,"@","@"+Ge)})],i);case ja:if(e.length)return ph(e.props,function(s){switch(dh(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ni([rr(e,{props:[Ze(s,/:(read-\w+)/,":"+ws+"$1")]})],i);case"::placeholder":return Ni([rr(e,{props:[Ze(s,/:(plac\w+)/,":"+Ge+"input-$1")]}),rr(e,{props:[Ze(s,/:(plac\w+)/,":"+ws+"$1")]}),rr(e,{props:[Ze(s,/:(plac\w+)/,yt+"input-$1")]})],i)}return""})}},Ih=[Dh],Nh=function(e){var t=e.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(m){var p=m.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=e.stylisPlugins||Ih,s={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(m){for(var p=m.getAttribute("data-emotion").split(" "),_=1;_<p.length;_++)s[p[_]]=!0;o.push(m)});var c,u=[Rh,Ph];{var h,f=[Sh,Th(function(m){h.insert(m)})],l=wh(u.concat(i,f)),d=function(p){return Ni(Mh(p),l)};c=function(p,_,b,y){h=b,d(p?p+"{"+_.styles+"}":_.styles),y&&(g.inserted[_.name]=!0)}}var g={key:t,sheet:new lh({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return g.sheet.hydrate(o),g};function Fh(r){for(var e=0,t,n=0,i=r.length;i>=4;++n,i-=4)t=r.charCodeAt(n)&255|(r.charCodeAt(++n)&255)<<8|(r.charCodeAt(++n)&255)<<16|(r.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(r.charCodeAt(n+2)&255)<<16;case 2:e^=(r.charCodeAt(n+1)&255)<<8;case 1:e^=r.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Oh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Uh=/[A-Z]|^ms/g,kh=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Oc=function(e){return e.charCodeAt(1)===45},Po=function(e){return e!=null&&typeof e!="boolean"},Gs=Ah(function(r){return Oc(r)?r:r.replace(Uh,"-$&").toLowerCase()}),Do=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(kh,function(n,i,s){return mn={name:i,styles:s,next:mn},i})}return Oh[e]!==1&&!Oc(e)&&typeof t=="number"&&t!==0?t+"px":t};function Cr(r,e,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return mn={name:t.name,styles:t.styles,next:mn},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)mn={name:n.name,styles:n.styles,next:mn},n=n.next;var i=t.styles+";";return i}return zh(r,e,t)}case"function":{if(r!==void 0){var s=mn,a=t(r);return mn=s,Cr(r,e,a)}break}}if(e==null)return t;var o=e[t];return o!==void 0?o:t}function zh(r,e,t){var n="";if(Array.isArray(t))for(var i=0;i<t.length;i++)n+=Cr(r,e,t[i])+";";else for(var s in t){var a=t[s];if(typeof a!="object")e!=null&&e[a]!==void 0?n+=s+"{"+e[a]+"}":Po(a)&&(n+=Gs(s)+":"+Do(s,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var o=0;o<a.length;o++)Po(a[o])&&(n+=Gs(s)+":"+Do(s,a[o])+";");else{var c=Cr(r,e,a);switch(s){case"animation":case"animationName":{n+=Gs(s)+":"+c+";";break}default:n+=s+"{"+c+"}"}}}return n}var Io=/label:\s*([^\s;\n{]+)\s*(;|$)/g,mn,Ws=function(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";mn=void 0;var a=e[0];a==null||a.raw===void 0?(i=!1,s+=Cr(n,t,a)):s+=a[0];for(var o=1;o<e.length;o++)s+=Cr(n,t,e[o]),i&&(s+=a[o]);Io.lastIndex=0;for(var c="",u;(u=Io.exec(s))!==null;)c+="-"+u[1];var h=Fh(s)+c;return{name:h,styles:s,next:mn}},Bh=!0;function Uc(r,e,t){var n="";return t.split(" ").forEach(function(i){r[i]!==void 0?e.push(r[i]+";"):n+=i+" "}),n}var Vh=function(e,t,n){var i=e.key+"-"+t.name;(n===!1||Bh===!1)&&e.registered[i]===void 0&&(e.registered[i]=t.styles)},Hh=function(e,t,n){Vh(e,t,n);var i=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var s=t;do e.insert(t===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function No(r,e){if(r.inserted[e.name]===void 0)return r.insert("",e,r.sheet,!0)}function Fo(r,e,t){var n=[],i=Uc(r,n,t);return n.length<2?t:i+e(n)}var Gh=function(e){var t=Nh(e);t.sheet.speedy=function(o){this.isSpeedy=o},t.compat=!0;var n=function(){for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];var f=Ws(u,t.registered,void 0);return Hh(t,f,!1),t.key+"-"+f.name},i=function(){for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];var f=Ws(u,t.registered),l="animation-"+f.name;return No(t,{name:f.name,styles:"@keyframes "+l+"{"+f.styles+"}"}),l},s=function(){for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];var f=Ws(u,t.registered);No(t,f)},a=function(){for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return Fo(t.registered,n,Wh(u))};return{css:n,cx:a,injectGlobal:s,keyframes:i,hydrate:function(c){c.forEach(function(u){t.inserted[u]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:Uc.bind(null,t.registered),merge:Fo.bind(null,t.registered,n)}},Wh=function r(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(i!=null){var s=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))s=r(i);else{s="";for(var a in i)i[a]&&a&&(s&&(s+=" "),s+=a)}break}default:s=i}s&&(t&&(t+=" "),t+=s)}}return t},Zh=Gh({key:"css"}),iv=Zh.injectGlobal;function Xh(r){let e,t,n;const i=r[10].default,s=zt(i,r,r[9],null);return{c(){e=ki("div"),s&&s.c(),this.h()},l(a){e=wr(a,"DIV",{style:!0});var o=ce(e);s&&s.l(o),o.forEach(N),this.h()},h(){$(e,"style",t="animation: "+r[1]+"; "+r[3])},m(a,o){le(a,e,o),s&&s.m(e,null),n=!0},p(a,o){s&&s.p&&(!n||o&512)&&Vt(s,i,a,a[9],n?Bt(i,a[9],o,null):Ht(a[9]),null),(!n||o&10&&t!==(t="animation: "+a[1]+"; "+a[3]))&&$(e,"style",t)},i(a){n||(qe(s,a),n=!0)},o(a){$e(s,a),n=!1},d(a){a&&N(e),s&&s.d(a)}}}function qh(r){let e,t,n;const i=r[10].default,s=zt(i,r,r[9],null);return{c(){e=ki("div"),s&&s.c(),this.h()},l(a){e=wr(a,"DIV",{style:!0});var o=ce(e);s&&s.l(o),o.forEach(N),this.h()},h(){$(e,"style",t="animation: "+r[0]+"; "+r[3])},m(a,o){le(a,e,o),s&&s.m(e,null),n=!0},p(a,o){s&&s.p&&(!n||o&512)&&Vt(s,i,a,a[9],n?Bt(i,a[9],o,null):Ht(a[9]),null),(!n||o&9&&t!==(t="animation: "+a[0]+"; "+a[3]))&&$(e,"style",t)},i(a){n||(qe(s,a),n=!0)},o(a){$e(s,a),n=!1},d(a){a&&N(e),s&&s.d(a)}}}function jh(r){let e,t,n,i;const s=[qh,Xh],a=[];function o(c,u){return c[4]?0:1}return t=o(r),n=a[t]=s[t](r),{c(){e=ki("div"),n.c(),this.h()},l(c){e=wr(c,"DIV",{id:!0,style:!0});var u=ce(e);n.l(u),u.forEach(N),this.h()},h(){$(e,"id",r[5]),$(e,"style",r[2])},m(c,u){le(c,e,u),a[t].m(e,null),i=!0},p(c,[u]){let h=t;t=o(c),t===h?a[t].p(c,u):(ji(),$e(a[h],1,1,()=>{a[h]=null}),Yi(),n=a[t],n?n.p(c,u):(n=a[t]=s[t](c),n.c()),qe(n,1),n.m(e,null)),(!i||u&4)&&$(e,"style",c[2])},i(c){i||(qe(n),i=!0)},o(c){$e(n),i=!1},d(c){c&&N(e),a[t].d()}}}function Yh(r,e,t){let{$$slots:n={},$$scope:i}=e,{animation:s="none"}=e,{animation_out:a="none; opacity: 0"}=e,{once:o=!1}=e,{top:c=0}=e,{bottom:u=0}=e,{css_observer:h=""}=e,{css_animation:f=""}=e;const l=Iu();let d=!0;const g=`__saos-${Math.random()}__`;function m(_){const b=`${-u}px 0px ${-c}px 0px`,y=new IntersectionObserver(v=>{t(4,d=v[0].isIntersecting),d&&o&&y.unobserve(_)},{rootMargin:b});return y.observe(_),()=>y.unobserve(_)}function p(_){const b=_.getBoundingClientRect();return t(4,d=b.top+c<window.innerHeight&&b.bottom-u>0),d&&o&&window.removeEventListener("scroll",verify),window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)}return Cs(()=>{const _=document.getElementById(g);return IntersectionObserver?m(_):p(_)}),r.$$set=_=>{"animation"in _&&t(0,s=_.animation),"animation_out"in _&&t(1,a=_.animation_out),"once"in _&&t(6,o=_.once),"top"in _&&t(7,c=_.top),"bottom"in _&&t(8,u=_.bottom),"css_observer"in _&&t(2,h=_.css_observer),"css_animation"in _&&t(3,f=_.css_animation),"$$scope"in _&&t(9,i=_.$$scope)},r.$$.update=()=>{r.$$.dirty&16&&l("update",{observing:d})},[s,a,h,f,d,g,o,c,u,i,n]}class rv extends Ft{constructor(e){super(),Nt(this,e,Yh,jh,St,{animation:0,animation_out:1,once:6,top:7,bottom:8,css_observer:2,css_animation:3})}}const kc={},Oo={};function Ja(r){const e=Ut(kc),t=Ut(Oo)||e.scene;return r&&(bs(Oo,r),t.add(r),qa(()=>{t.remove(r),e.invalidate()})),{root:e,parent:t,self:r}}function Kh(r){return bs(kc,r),r}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="148",Jh=0,Uo=1,Qh=2,$a=1,$h=2,xr=3,Zn=0,nn=1,Ds=2,Wr=3,Gn=0,Fi=1,ko=2,zo=3,Bo=4,ef=5,Di=100,tf=101,nf=102,Vo=103,Ho=104,rf=200,sf=201,af=202,of=203,zc=204,Bc=205,lf=206,cf=207,uf=208,hf=209,ff=210,df=0,pf=1,mf=2,Fa=3,gf=4,_f=5,xf=6,vf=7,Vc=0,yf=1,Mf=2,xn=0,bf=1,Sf=2,wf=3,Tf=4,Af=5,Hc=300,Bi=301,Vi=302,Oa=303,Ua=304,Is=306,Hi=1e3,$t=1001,Ts=1002,mt=1003,ka=1004,vs=1005,Ot=1006,Gc=1007,ui=1008,hi=1009,Ef=1010,Cf=1011,Wc=1012,Lf=1013,ri=1014,Hn=1015,Lr=1016,Rf=1017,Pf=1018,Oi=1020,Df=1021,If=1022,en=1023,Nf=1024,Ff=1025,oi=1026,Gi=1027,Of=1028,Uf=1029,kf=1030,zf=1031,Bf=1033,Zs=33776,Xs=33777,qs=33778,js=33779,Go=35840,Wo=35841,Zo=35842,Xo=35843,Vf=36196,qo=37492,jo=37496,Yo=37808,Ko=37809,Jo=37810,Qo=37811,$o=37812,el=37813,tl=37814,nl=37815,il=37816,rl=37817,sl=37818,al=37819,ol=37820,ll=37821,cl=36492,Rr=2300,Wi=2301,Ys=2302,ul=2400,hl=2401,fl=2402,Hf=2500,Gf=1,Zc=2,fi=3e3,Xe=3001,Wf=3200,Zf=3201,eo=0,Xf=1,dn="srgb",Pr="srgb-linear",Ks=7680,qf=519,za=35044,dl="300 es",Ba=1035;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const br=Math.PI/180,Dr=180/Math.PI;function cn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Pt(r,e,t){return Math.max(e,Math.min(t,r))}function to(r,e){return(r%e+e)%e}function jf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Yf(r,e,t){return r!==e?(t-r)/(e-r):0}function Sr(r,e,t){return(1-t)*r+t*e}function Kf(r,e,t,n){return Sr(r,e,1-Math.exp(-t*n))}function Jf(r,e=1){return e-Math.abs(to(r,e*2)-e)}function Qf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function $f(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ed(r,e){return r+Math.floor(Math.random()*(e-r+1))}function td(r,e){return r+Math.random()*(e-r)}function nd(r){return r*(.5-Math.random())}function id(r){r!==void 0&&(pl=r);let e=pl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rd(r){return r*br}function sd(r){return r*Dr}function Va(r){return(r&r-1)===0&&r!==0}function Xc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function As(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ad(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),l=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*f,c*l,o*u);break;case"YZY":r.set(c*l,o*h,c*f,o*u);break;case"ZXZ":r.set(c*f,c*l,o*h,o*u);break;case"XZX":r.set(o*h,c*g,c*d,o*u);break;case"YXY":r.set(c*d,o*h,c*g,o*u);break;case"ZYZ":r.set(c*g,c*d,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Je(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var od=Object.freeze({__proto__:null,DEG2RAD:br,RAD2DEG:Dr,generateUUID:cn,clamp:Pt,euclideanModulo:to,mapLinear:jf,inverseLerp:Yf,lerp:Sr,damp:Kf,pingpong:Jf,smoothstep:Qf,smootherstep:$f,randInt:ed,randFloat:td,randFloatSpread:nd,seededRandom:id,degToRad:rd,radToDeg:sd,isPowerOfTwo:Va,ceilPowerOfTwo:Xc,floorPowerOfTwo:As,setQuaternionFromProperEuler:ad,normalize:Je,denormalize:Pn});class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],l=n[2],d=n[5],g=n[8],m=i[0],p=i[3],_=i[6],b=i[1],y=i[4],v=i[7],w=i[2],A=i[5],C=i[8];return s[0]=a*m+o*b+c*w,s[3]=a*p+o*y+c*A,s[6]=a*_+o*v+c*C,s[1]=u*m+h*b+f*w,s[4]=u*p+h*y+f*A,s[7]=u*_+h*v+f*C,s[2]=l*m+d*b+g*w,s[5]=l*p+d*y+g*A,s[8]=l*_+d*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+i*s*u-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,l=o*c-h*s,d=u*s-a*c,g=t*f+n*l+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(i*u-h*n)*m,e[2]=(o*n-i*a)*m,e[3]=l*m,e[4]=(h*t-i*c)*m,e[5]=(i*s-o*t)*m,e[6]=d*m,e[7]=(n*c-u*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-i*u,i*c,-i*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new qt;function qc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function li(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ys(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Qs={[dn]:{[Pr]:li},[Pr]:{[dn]:ys}},Ct={legacyMode:!0,get workingColorSpace(){return Pr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Qs[e]&&Qs[e][t]!==void 0){const n=Qs[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},an={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function $s(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Xr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ct.workingColorSpace){if(e=to(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=$s(a,s,e+1/3),this.g=$s(a,s,e),this.b=$s(a,s,e-1/3)}return Ct.toWorkingColorSpace(this,i),this}setStyle(e,t=dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ct.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ct.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(s[1])/360,u=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,u,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ct.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ct.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=dn){const n=jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Ct.fromWorkingColorSpace(Xr(this,lt),e),Pt(lt.r*255,0,255)<<16^Pt(lt.g*255,0,255)<<8^Pt(lt.b*255,0,255)<<0}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Xr(this,lt),t);const n=lt.r,i=lt.g,s=lt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Xr(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=dn){return Ct.fromWorkingColorSpace(Xr(this,lt),e),e!==dn?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Zr);const n=Sr(an.h,Zr.h,t),i=Sr(an.s,Zr.s,t),s=Sr(an.l,Zr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ie.NAMES=jc;let xi;class Yc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=Ir("canvas")),xi.width=e.width,xi.height=e.height;const n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=li(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Kc{constructor(e=null){this.isSource=!0,this.uuid=cn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ea(i[a].image)):s.push(ea(i[a]))}else s=ea(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ld=0;class _t extends Ji{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=$t,i=$t,s=Ot,a=ui,o=en,c=hi,u=_t.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=cn(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=Hc;_t.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,u=c[0],h=c[4],f=c[8],l=c[1],d=c[5],g=c[9],m=c[2],p=c[6],_=c[10];if(Math.abs(h-l)<.01&&Math.abs(f-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+l)<.1&&Math.abs(f+m)<.1&&Math.abs(g+p)<.1&&Math.abs(u+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,v=(d+1)/2,w=(_+1)/2,A=(h+l)/4,C=(f+m)/4,x=(g+p)/4;return y>v&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=C/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=x/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=C/s,i=x/s),this.set(n,i,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-m)*(f-m)+(l-h)*(l-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-m)/b,this.z=(l-h)/b,this.w=Math.acos((u+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class di extends Ji{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new _t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ot,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jc extends _t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cd extends _t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],u=n[i+1],h=n[i+2],f=n[i+3];const l=s[a+0],d=s[a+1],g=s[a+2],m=s[a+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=l,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(f!==m||c!==l||u!==d||h!==g){let p=1-o;const _=c*l+u*d+h*g+f*m,b=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const w=Math.sqrt(y),A=Math.atan2(w,_*b);p=Math.sin(p*A)/w,o=Math.sin(o*A)/w}const v=o*b;if(c=c*p+l*v,u=u*p+d*v,h=h*p+g*v,f=f*p+m*v,p===1-o){const w=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=w,u*=w,h*=w,f*=w}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],u=n[i+2],h=n[i+3],f=s[a],l=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*f+c*d-u*l,e[t+1]=c*g+h*l+u*f-o*d,e[t+2]=u*g+h*d+o*l-c*f,e[t+3]=h*g-o*f-c*l-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(i/2),f=o(s/2),l=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=l*h*f+u*d*g,this._y=u*d*f-l*h*g,this._z=u*h*g+l*d*f,this._w=u*h*f-l*d*g;break;case"YXZ":this._x=l*h*f+u*d*g,this._y=u*d*f-l*h*g,this._z=u*h*g-l*d*f,this._w=u*h*f+l*d*g;break;case"ZXY":this._x=l*h*f-u*d*g,this._y=u*d*f+l*h*g,this._z=u*h*g+l*d*f,this._w=u*h*f-l*d*g;break;case"ZYX":this._x=l*h*f-u*d*g,this._y=u*d*f+l*h*g,this._z=u*h*g-l*d*f,this._w=u*h*f+l*d*g;break;case"YZX":this._x=l*h*f+u*d*g,this._y=u*d*f+l*h*g,this._z=u*h*g-l*d*f,this._w=u*h*f-l*d*g;break;case"XZY":this._x=l*h*f-u*d*g,this._y=u*d*f-l*h*g,this._z=u*h*g+l*d*f,this._w=u*h*f+l*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],l=n+o+f;if(l>0){const d=.5/Math.sqrt(l+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-u)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+u)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-u)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+u)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+i*u-s*c,this._y=i*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-i*o,this._w=a*h-n*o-i*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),f=Math.sin((1-t)*h)/u,l=Math.sin(t*h)/u;return this._w=a*f+this._w*l,this._x=n*f+this._x*l,this._y=i*f+this._y*l,this._z=s*f+this._z*l,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=c*t+a*i-o*n,h=c*n+o*t-s*i,f=c*i+s*n-a*t,l=-s*t-a*n-o*i;return this.x=u*c+l*-s+h*-o-f*-a,this.y=h*c+l*-a+f*-s-u*-o,this.z=f*c+l*-o+u*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new R,ml=new Xn;class Qi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,u=e.length;c<u;c+=3){const h=e[c],f=e[c+1],l=e[c+2];h<t&&(t=h),f<n&&(n=f),l<i&&(i=l),h>s&&(s=h),f>a&&(a=f),l>o&&(o=l)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,u=e.count;c<u;c++){const h=e.getX(c),f=e.getY(c),l=e.getZ(c);h<t&&(t=h),f<n&&(n=f),l<i&&(i=l),h>s&&(s=h),f>a&&(a=f),l>o&&(o=l)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Jn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Jn)}else n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox),na.applyMatrix4(e.matrixWorld),this.union(na);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),qr.subVectors(this.max,sr),vi.subVectors(e.a,sr),yi.subVectors(e.b,sr),Mi.subVectors(e.c,sr),Fn.subVectors(yi,vi),On.subVectors(Mi,yi),Qn.subVectors(vi,Mi);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Qn.z,Qn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!ia(t,vi,yi,Mi,qr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,vi,yi,Mi,qr))?!1:(jr.crossVectors(Fn,On),t=[jr.x,jr.y,jr.z],ia(t,vi,yi,Mi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Jn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new R,new R,new R,new R,new R,new R,new R,new R],Jn=new R,na=new Qi,vi=new R,yi=new R,Mi=new R,Fn=new R,On=new R,Qn=new R,sr=new R,qr=new R,jr=new R,$n=new R;function ia(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){$n.fromArray(r,s);const o=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),c=e.dot($n),u=t.dot($n),h=n.dot($n);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const ud=new Qi,ar=new R,ra=new R;class $i{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ud.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(ra)),this.expandByPoint(ar.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new R,sa=new R,Yr=new R,Un=new R,aa=new R,Kr=new R,oa=new R;class no{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.direction).multiplyScalar(t).add(this.origin),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sa.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(sa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Un.dot(this.direction),c=-Un.dot(Yr),u=Un.lengthSq(),h=Math.abs(1-a*a);let f,l,d,g;if(h>0)if(f=a*c-o,l=a*o-c,g=s*h,f>=0)if(l>=-g)if(l<=g){const m=1/h;f*=m,l*=m,d=f*(f+a*l+2*o)+l*(a*f+l+2*c)+u}else l=s,f=Math.max(0,-(a*l+o)),d=-f*f+l*(l+2*c)+u;else l=-s,f=Math.max(0,-(a*l+o)),d=-f*f+l*(l+2*c)+u;else l<=-g?(f=Math.max(0,-(-a*s+o)),l=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+l*(l+2*c)+u):l<=g?(f=0,l=Math.min(Math.max(-s,-c),s),d=l*(l+2*c)+u):(f=Math.max(0,-(a*s+o)),l=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+l*(l+2*c)+u);else l=a>0?-s:s,f=Math.max(0,-(a*l+o)),d=-f*f+l*(l+2*c)+u;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Yr).multiplyScalar(l).add(sa),d}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,l=this.origin;return u>=0?(n=(e.min.x-l.x)*u,i=(e.max.x-l.x)*u):(n=(e.max.x-l.x)*u,i=(e.min.x-l.x)*u),h>=0?(s=(e.min.y-l.y)*h,a=(e.max.y-l.y)*h):(s=(e.max.y-l.y)*h,a=(e.min.y-l.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-l.z)*f,c=(e.max.z-l.z)*f):(o=(e.max.z-l.z)*f,c=(e.min.z-l.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,i,s){aa.subVectors(t,e),Kr.subVectors(n,e),oa.crossVectors(aa,Kr);let a=this.direction.dot(oa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,e);const c=o*this.direction.dot(Kr.crossVectors(Un,Kr));if(c<0)return null;const u=o*this.direction.dot(aa.cross(Un));if(u<0||c+u>a)return null;const h=-o*Un.dot(oa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,c,u,h,f,l,d,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=f,_[14]=l,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const l=a*h,d=a*f,g=o*h,m=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=d+g*u,t[5]=l-m*u,t[9]=-o*c,t[2]=m-l*u,t[6]=g+d*u,t[10]=a*c}else if(e.order==="YXZ"){const l=c*h,d=c*f,g=u*h,m=u*f;t[0]=l+m*o,t[4]=g*o-d,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=m+l*o,t[10]=a*c}else if(e.order==="ZXY"){const l=c*h,d=c*f,g=u*h,m=u*f;t[0]=l-m*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=m-l*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const l=a*h,d=a*f,g=o*h,m=o*f;t[0]=c*h,t[4]=g*u-d,t[8]=l*u+m,t[1]=c*f,t[5]=m*u+l,t[9]=d*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const l=a*c,d=a*u,g=o*c,m=o*u;t[0]=c*h,t[4]=m-l*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=d*f+g,t[10]=l-m*f}else if(e.order==="XZY"){const l=a*c,d=a*u,g=o*c,m=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=l*f+m,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=m*f+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hd,e,fd)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),kn.crossVectors(n,Zt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),kn.crossVectors(n,Zt)),kn.normalize(),Jr.crossVectors(Zt,kn),i[0]=kn.x,i[4]=Jr.x,i[8]=Zt.x,i[1]=kn.y,i[5]=Jr.y,i[9]=Zt.y,i[2]=kn.z,i[6]=Jr.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],l=n[9],d=n[13],g=n[2],m=n[6],p=n[10],_=n[14],b=n[3],y=n[7],v=n[11],w=n[15],A=i[0],C=i[4],x=i[8],E=i[12],I=i[1],X=i[5],Q=i[9],F=i[13],P=i[2],k=i[6],J=i[10],ee=i[14],W=i[3],ie=i[7],K=i[11],V=i[15];return s[0]=a*A+o*I+c*P+u*W,s[4]=a*C+o*X+c*k+u*ie,s[8]=a*x+o*Q+c*J+u*K,s[12]=a*E+o*F+c*ee+u*V,s[1]=h*A+f*I+l*P+d*W,s[5]=h*C+f*X+l*k+d*ie,s[9]=h*x+f*Q+l*J+d*K,s[13]=h*E+f*F+l*ee+d*V,s[2]=g*A+m*I+p*P+_*W,s[6]=g*C+m*X+p*k+_*ie,s[10]=g*x+m*Q+p*J+_*K,s[14]=g*E+m*F+p*ee+_*V,s[3]=b*A+y*I+v*P+w*W,s[7]=b*C+y*X+v*k+w*ie,s[11]=b*x+y*Q+v*J+w*K,s[15]=b*E+y*F+v*ee+w*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],l=e[10],d=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+s*c*f-i*u*f-s*o*l+n*u*l+i*o*d-n*c*d)+m*(+t*c*d-t*u*l+s*a*l-i*a*d+i*u*h-s*c*h)+p*(+t*u*f-t*o*d-s*a*f+n*a*d+s*o*h-n*u*h)+_*(-i*o*h-t*c*f+t*o*l+i*a*f-n*a*l+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],l=e[10],d=e[11],g=e[12],m=e[13],p=e[14],_=e[15],b=f*p*u-m*l*u+m*c*d-o*p*d-f*c*_+o*l*_,y=g*l*u-h*p*u-g*c*d+a*p*d+h*c*_-a*l*_,v=h*m*u-g*f*u+g*o*d-a*m*d-h*o*_+a*f*_,w=g*f*c-h*m*c-g*o*l+a*m*l+h*o*p-a*f*p,A=t*b+n*y+i*v+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=b*C,e[1]=(m*l*s-f*p*s-m*i*d+n*p*d+f*i*_-n*l*_)*C,e[2]=(o*p*s-m*c*s+m*i*u-n*p*u-o*i*_+n*c*_)*C,e[3]=(f*c*s-o*l*s-f*i*u+n*l*u+o*i*d-n*c*d)*C,e[4]=y*C,e[5]=(h*p*s-g*l*s+g*i*d-t*p*d-h*i*_+t*l*_)*C,e[6]=(g*c*s-a*p*s-g*i*u+t*p*u+a*i*_-t*c*_)*C,e[7]=(a*l*s-h*c*s+h*i*u-t*l*u-a*i*d+t*c*d)*C,e[8]=v*C,e[9]=(g*f*s-h*m*s-g*n*d+t*m*d+h*n*_-t*f*_)*C,e[10]=(a*m*s-g*o*s+g*n*u-t*m*u-a*n*_+t*o*_)*C,e[11]=(h*o*s-a*f*s-h*n*u+t*f*u+a*n*d-t*o*d)*C,e[12]=w*C,e[13]=(h*m*i-g*f*i+g*n*l-t*m*l-h*n*p+t*f*p)*C,e[14]=(g*o*i-a*m*i-g*n*c+t*m*c+a*n*p-t*o*p)*C,e[15]=(a*f*i-h*o*i+h*n*c-t*f*c-a*n*l+t*o*l)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-i*c,u*c+i*o,0,u*o+i*c,h*o+n,h*c-i*a,0,u*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,f=o+o,l=s*u,d=s*h,g=s*f,m=a*h,p=a*f,_=o*f,b=c*u,y=c*h,v=c*f,w=n.x,A=n.y,C=n.z;return i[0]=(1-(m+_))*w,i[1]=(d+v)*w,i[2]=(g-y)*w,i[3]=0,i[4]=(d-v)*A,i[5]=(1-(l+_))*A,i[6]=(p+b)*A,i[7]=0,i[8]=(g+y)*C,i[9]=(p-b)*C,i[10]=(1-(l+m))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=bi.set(i[0],i[1],i[2]).length();const a=bi.set(i[4],i[5],i[6]).length(),o=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const u=1/s,h=1/a,f=1/o;return on.elements[0]*=u,on.elements[1]*=u,on.elements[2]*=u,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),l=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=u,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=l,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,l=(n+i)*u,d=(a+s)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-l,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new R,on=new Fe,hd=new R(0,0,0),fd=new R(1,1,1),kn=new R,Jr=new R,Zt=new R,gl=new Fe,_l=new Xn;class kr{constructor(e=0,t=0,n=0,i=kr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],u=i[5],h=i[9],f=i[2],l=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(l,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(l,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}kr.DefaultOrder="XYZ";kr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dd=0;const xl=new R,Si=new Xn,An=new Fe,Qr=new R,or=new R,pd=new R,md=new Xn,vl=new R(1,0,0),yl=new R(0,1,0),Ml=new R(0,0,1),gd={type:"added"},bl={type:"removed"};class nt extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DefaultUp.clone();const e=new R,t=new kr,n=new Xn,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new qt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nt.DefaultMatrixWorldAutoUpdate,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(vl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return xl.copy(e).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(or,Qr,this.up):An.lookAt(Qr,or,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(An),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),l=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),l.length>0&&(n.skeletons=l),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DefaultUp=new R(0,1,0);nt.DefaultMatrixAutoUpdate=!0;nt.DefaultMatrixWorldAutoUpdate=!0;const ln=new R,En=new R,la=new R,Cn=new R,wi=new R,Ti=new R,Sl=new R,ca=new R,ua=new R,ha=new R;class Rn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ln.subVectors(i,t),En.subVectors(n,t),la.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(En),c=ln.dot(la),u=En.dot(En),h=En.dot(la),f=a*u-o*o;if(f===0)return s.set(-2,-1,-1);const l=1/f,d=(u*c-o*h)*l,g=(a*h-o*c)*l;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Cn),c.set(0,0),c.addScaledVector(s,Cn.x),c.addScaledVector(a,Cn.y),c.addScaledVector(o,Cn.z),c}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),En.subVectors(e,t),ln.cross(En).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),En.subVectors(this.a,this.b),ln.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Rn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;wi.subVectors(i,n),Ti.subVectors(s,n),ca.subVectors(e,n);const c=wi.dot(ca),u=Ti.dot(ca);if(c<=0&&u<=0)return t.copy(n);ua.subVectors(e,i);const h=wi.dot(ua),f=Ti.dot(ua);if(h>=0&&f<=h)return t.copy(i);const l=c*f-h*u;if(l<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(wi,a);ha.subVectors(e,s);const d=wi.dot(ha),g=Ti.dot(ha);if(g>=0&&d<=g)return t.copy(s);const m=d*u-c*g;if(m<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(Ti,o);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return Sl.subVectors(s,i),o=(f-h)/(f-h+(d-g)),t.copy(i).addScaledVector(Sl,o);const _=1/(p+m+l);return a=m*_,o=l*_,t.copy(n).addScaledVector(wi,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _d=0;class un extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=Fi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zc,this.blendDst=Bc,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class si extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new R,$r=new ze;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=za,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==za&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $c extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eu extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dn extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xd=0;const Jt=new Fe,fa=new nt,Ai=new R,Xt=new Qi,lr=new Qi,pt=new R;class fn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?eu:$c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Xt.min,lr.min),Xt.expandByPoint(pt),pt.addVectors(Xt.max,lr.max),Xt.expandByPoint(pt)):(Xt.expandByPoint(lr.min),Xt.expandByPoint(lr.max))}Xt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)pt.fromBufferAttribute(o,u),c&&(Ai.fromBufferAttribute(e,u),pt.add(Ai)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let I=0;I<o;I++)u[I]=new R,h[I]=new R;const f=new R,l=new R,d=new R,g=new ze,m=new ze,p=new ze,_=new R,b=new R;function y(I,X,Q){f.fromArray(i,I*3),l.fromArray(i,X*3),d.fromArray(i,Q*3),g.fromArray(a,I*2),m.fromArray(a,X*2),p.fromArray(a,Q*2),l.sub(f),d.sub(f),m.sub(g),p.sub(g);const F=1/(m.x*p.y-p.x*m.y);isFinite(F)&&(_.copy(l).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(F),b.copy(d).multiplyScalar(m.x).addScaledVector(l,-p.x).multiplyScalar(F),u[I].add(_),u[X].add(_),u[Q].add(_),h[I].add(b),h[X].add(b),h[Q].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let I=0,X=v.length;I<X;++I){const Q=v[I],F=Q.start,P=Q.count;for(let k=F,J=F+P;k<J;k+=3)y(n[k+0],n[k+1],n[k+2])}const w=new R,A=new R,C=new R,x=new R;function E(I){C.fromArray(s,I*3),x.copy(C);const X=u[I];w.copy(X),w.sub(C.multiplyScalar(C.dot(X))).normalize(),A.crossVectors(x,X);const F=A.dot(h[I])<0?-1:1;c[I*4]=w.x,c[I*4+1]=w.y,c[I*4+2]=w.z,c[I*4+3]=F}for(let I=0,X=v.length;I<X;++I){const Q=v[I],F=Q.start,P=Q.count;for(let k=F,J=F+P;k<J;k+=3)E(n[k+0]),E(n[k+1]),E(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,d=n.count;l<d;l++)n.setXYZ(l,0,0,0);const i=new R,s=new R,a=new R,o=new R,c=new R,u=new R,h=new R,f=new R;if(e)for(let l=0,d=e.count;l<d;l+=3){const g=e.getX(l+0),m=e.getX(l+1),p=e.getX(l+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),u.fromBufferAttribute(n,p),o.add(h),c.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let l=0,d=t.count;l<d;l+=3)i.fromBufferAttribute(t,l+0),s.fromBufferAttribute(t,l+1),a.fromBufferAttribute(t,l+2),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),n.setXYZ(l+0,h.x,h.y,h.z),n.setXYZ(l+1,h.x,h.y,h.z),n.setXYZ(l+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,f=o.normalized,l=new u.constructor(c.length*h);let d=0,g=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?d=c[m]*o.data.stride+o.offset:d=c[m]*h;for(let _=0;_<h;_++)l[g++]=u[d++]}return new It(l,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],u=e(c,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const l=u[h],d=e(l,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,l=u.length;f<l;f++){const d=u[f];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let l=0,d=f.length;l<d;l++)h.push(f[l].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new Fe,Ei=new no,da=new $i,cr=new R,ur=new R,hr=new R,pa=new R,es=new R,ts=new ze,ns=new ze,is=new ze,ma=new R,rs=new R;class tn extends nt{constructor(e=new fn,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){es.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],f=s[c];h!==0&&(pa.fromBufferAttribute(f,e),a?es.addScaledVector(pa,h):es.addScaledVector(pa.sub(t),h))}t.add(es)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),e.ray.intersectsSphere(da)===!1)||(wl.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(wl),n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,u=n.attributes.uv,h=n.attributes.uv2,f=n.groups,l=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,g=f.length;d<g;d++){const m=f[d],p=i[m.materialIndex],_=Math.max(m.start,l.start),b=Math.min(o.count,Math.min(m.start+m.count,l.start+l.count));for(let y=_,v=b;y<v;y+=3){const w=o.getX(y),A=o.getX(y+1),C=o.getX(y+2);a=ss(this,p,e,Ei,u,h,w,A,C),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const d=Math.max(0,l.start),g=Math.min(o.count,l.start+l.count);for(let m=d,p=g;m<p;m+=3){const _=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);a=ss(this,i,e,Ei,u,h,_,b,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let d=0,g=f.length;d<g;d++){const m=f[d],p=i[m.materialIndex],_=Math.max(m.start,l.start),b=Math.min(c.count,Math.min(m.start+m.count,l.start+l.count));for(let y=_,v=b;y<v;y+=3){const w=y,A=y+1,C=y+2;a=ss(this,p,e,Ei,u,h,w,A,C),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const d=Math.max(0,l.start),g=Math.min(c.count,l.start+l.count);for(let m=d,p=g;m<p;m+=3){const _=m,b=m+1,y=m+2;a=ss(this,i,e,Ei,u,h,_,b,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function vd(r,e,t,n,i,s,a,o){let c;if(e.side===nn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Zn,o),c===null)return null;rs.copy(o),rs.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(rs);return u<t.near||u>t.far?null:{distance:u,point:rs.clone(),object:r}}function ss(r,e,t,n,i,s,a,o,c){r.getVertexPosition(a,cr),r.getVertexPosition(o,ur),r.getVertexPosition(c,hr);const u=vd(r,e,t,n,cr,ur,hr,ma);if(u){i&&(ts.fromBufferAttribute(i,a),ns.fromBufferAttribute(i,o),is.fromBufferAttribute(i,c),u.uv=Rn.getUV(ma,cr,ur,hr,ts,ns,is,new ze)),s&&(ts.fromBufferAttribute(s,a),ns.fromBufferAttribute(s,o),is.fromBufferAttribute(s,c),u.uv2=Rn.getUV(ma,cr,ur,hr,ts,ns,is,new ze));const h={a,b:o,c,normal:new R,materialIndex:0};Rn.getNormal(cr,ur,hr,h.normal),u.face=h}return u}class zr extends fn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],f=[];let l=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Dn(u,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(f,2));function g(m,p,_,b,y,v,w,A,C,x,E){const I=v/C,X=w/x,Q=v/2,F=w/2,P=A/2,k=C+1,J=x+1;let ee=0,W=0;const ie=new R;for(let K=0;K<J;K++){const V=K*X-F;for(let U=0;U<k;U++){const ae=U*I-Q;ie[m]=ae*b,ie[p]=V*y,ie[_]=P,u.push(ie.x,ie.y,ie.z),ie[m]=0,ie[p]=0,ie[_]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(U/C),f.push(1-K/x),ee+=1}}for(let K=0;K<x;K++)for(let V=0;V<C;V++){const U=l+V+k*K,ae=l+V+k*(K+1),re=l+(V+1)+k*(K+1),ue=l+(V+1)+k*K;c.push(U,ae,ue),c.push(ae,re,ue),W+=6}o.addGroup(d,W,E),d+=W,l+=ee}}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(r){const e={};for(let t=0;t<r.length;t++){const n=Zi(r[t]);for(const i in n)e[i]=n[i]}return e}function yd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function tu(r){return r.getRenderTarget()===null&&r.outputEncoding===Xe?dn:Pr}const Md={clone:Zi,merge:Rt};var bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nu extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends nu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/u,i*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Li=1;class wd extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Dt(Ci,Li,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Dt(Ci,Li,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Dt(Ci,Li,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Dt(Ci,Li,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Dt(Ci,Li,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const u=new Dt(Ci,Li,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,c,u]=this.children,h=e.getRenderTarget(),f=e.toneMapping,l=e.xr.enabled;e.toneMapping=xn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=l,n.texture.needsPMREMUpdate=!0}}class iu extends _t{constructor(e,t,n,i,s,a,o,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,i,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Td extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new iu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zr(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Gn});s.uniforms.tEquirect.value=t;const a=new tn(i,s),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=Ot),new wd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const ga=new R,Ad=new R,Ed=new qt;class ei{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ga.subVectors(n,t).cross(Ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ed.getNormalMatrix(e),i=this.coplanarPoint(ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new $i,as=new R;class io{constructor(e=new ei,t=new ei,n=new ei,i=new ei,s=new ei,a=new ei){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],u=n[5],h=n[6],f=n[7],l=n[8],d=n[9],g=n[10],m=n[11],p=n[12],_=n[13],b=n[14],y=n[15];return t[0].setComponents(o-i,f-c,m-l,y-p).normalize(),t[1].setComponents(o+i,f+c,m+l,y+p).normalize(),t[2].setComponents(o+s,f+u,m+d,y+_).normalize(),t[3].setComponents(o-s,f-u,m-d,y-_).normalize(),t[4].setComponents(o-a,f-h,m-g,y-b).normalize(),t[5].setComponents(o+a,f+h,m+g,y+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(as.x=i.normal.x>0?e.max.x:e.min.x,as.y=i.normal.y>0?e.max.y:e.min.y,as.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ru(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Cd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,h){const f=u.array,l=u.usage,d=r.createBuffer();r.bindBuffer(h,d),r.bufferData(h,f,l),u.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,f){const l=h.array,d=h.updateRange;r.bindBuffer(f,u),d.count===-1?r.bufferSubData(f,0,l):(t?r.bufferSubData(f,d.offset*l.BYTES_PER_ELEMENT,l,d.offset,d.count):r.bufferSubData(f,d.offset*l.BYTES_PER_ELEMENT,l.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(r.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const l=n.get(u);(!l||l.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f===void 0?n.set(u,i(u,h)):f.version<u.version&&(s(f.buffer,u,h),f.version=u.version)}return{get:a,remove:o,update:c}}class ro extends fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),u=o+1,h=c+1,f=e/o,l=t/c,d=[],g=[],m=[],p=[];for(let _=0;_<h;_++){const b=_*l-a;for(let y=0;y<u;y++){const v=y*f-s;g.push(v,-b,0),m.push(0,0,1),p.push(y/o),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<o;b++){const y=b+u*_,v=b+u*(_+1),w=b+1+u*(_+1),A=b+1+u*_;d.push(y,v,A),d.push(v,w,A)}this.setIndex(d),this.setAttribute("position",new Dn(g,3)),this.setAttribute("normal",new Dn(m,3)),this.setAttribute("uv",new Dn(p,2))}static fromJSON(e){return new ro(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fd="vec3 transformed = vec3( position );",Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,wp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Gp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ym=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Mm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Sm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Tm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Im=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Fm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,s0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:Ld,alphamap_pars_fragment:Rd,alphatest_fragment:Pd,alphatest_pars_fragment:Dd,aomap_fragment:Id,aomap_pars_fragment:Nd,begin_vertex:Fd,beginnormal_vertex:Od,bsdfs:Ud,iridescence_fragment:kd,bumpmap_pars_fragment:zd,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Gd,color_fragment:Wd,color_pars_fragment:Zd,color_pars_vertex:Xd,color_vertex:qd,common:jd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Jd,displacementmap_vertex:Qd,emissivemap_fragment:$d,emissivemap_pars_fragment:ep,encodings_fragment:tp,encodings_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:rp,envmap_pars_fragment:sp,envmap_pars_vertex:ap,envmap_physical_pars_fragment:xp,envmap_vertex:op,fog_vertex:lp,fog_pars_vertex:cp,fog_fragment:up,fog_pars_fragment:hp,gradientmap_pars_fragment:fp,lightmap_fragment:dp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:_p,lights_toon_fragment:vp,lights_toon_pars_fragment:yp,lights_phong_fragment:Mp,lights_phong_pars_fragment:bp,lights_physical_fragment:Sp,lights_physical_pars_fragment:wp,lights_fragment_begin:Tp,lights_fragment_maps:Ap,lights_fragment_end:Ep,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Pp,map_fragment:Dp,map_pars_fragment:Ip,map_particle_fragment:Np,map_particle_pars_fragment:Fp,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Up,morphcolor_vertex:kp,morphnormal_vertex:zp,morphtarget_pars_vertex:Bp,morphtarget_vertex:Vp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Wp,normal_pars_vertex:Zp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Jp,output_fragment:Qp,packing:$p,premultiplied_alpha_fragment:em,project_vertex:tm,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:rm,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:am,shadowmap_pars_vertex:om,shadowmap_vertex:lm,shadowmask_pars_fragment:cm,skinbase_vertex:um,skinning_pars_vertex:hm,skinning_vertex:fm,skinnormal_vertex:dm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:_m,transmission_fragment:xm,transmission_pars_fragment:vm,uv_pars_fragment:ym,uv_pars_vertex:Mm,uv_vertex:bm,uv2_pars_fragment:Sm,uv2_pars_vertex:wm,uv2_vertex:Tm,worldpos_vertex:Am,background_vert:Em,background_frag:Cm,backgroundCube_vert:Lm,backgroundCube_frag:Rm,cube_vert:Pm,cube_frag:Dm,depth_vert:Im,depth_frag:Nm,distanceRGBA_vert:Fm,distanceRGBA_frag:Om,equirect_vert:Um,equirect_frag:km,linedashed_vert:zm,linedashed_frag:Bm,meshbasic_vert:Vm,meshbasic_frag:Hm,meshlambert_vert:Gm,meshlambert_frag:Wm,meshmatcap_vert:Zm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:jm,meshphong_vert:Ym,meshphong_frag:Km,meshphysical_vert:Jm,meshphysical_frag:Qm,meshtoon_vert:$m,meshtoon_frag:e0,points_vert:t0,points_frag:n0,shadow_vert:i0,shadow_frag:r0,sprite_vert:s0,sprite_frag:a0},oe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new qt},uv2Transform:{value:new qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}}},gn={basic:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Rt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Rt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Rt([oe.points,oe.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Rt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Rt([oe.common,oe.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Rt([oe.sprite,oe.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Rt([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Rt([oe.lights,oe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};gn.physical={uniforms:Rt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const os={r:0,b:0,g:0};function o0(r,e,t,n,i,s,a){const o=new Ie(0);let c=s===!0?0:1,u,h,f=null,l=0,d=null;function g(p,_){let b=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const v=r.xr,w=v.getSession&&v.getSession();w&&w.environmentBlendMode==="additive"&&(y=null),y===null?m(o,c):y&&y.isColor&&(m(y,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Is)?(h===void 0&&(h=new tn(new zr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Zi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=y.encoding!==Xe,(f!==y||l!==y.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=y,l=y.version,d=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new tn(new ro(2,2),new pi({name:"BackgroundMaterial",uniforms:Zi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==Xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||l!==y.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=y,l=y.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function m(p,_){p.getRGB(os,tu(r)),n.buffers.color.setClear(os.r,os.g,os.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),c=_,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(o,c)},render:g}}function l0(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let u=c,h=!1;function f(P,k,J,ee,W){let ie=!1;if(a){const K=m(ee,J,k);u!==K&&(u=K,d(u.object)),ie=_(P,ee,J,W),ie&&b(P,ee,J,W)}else{const K=k.wireframe===!0;(u.geometry!==ee.id||u.program!==J.id||u.wireframe!==K)&&(u.geometry=ee.id,u.program=J.id,u.wireframe=K,ie=!0)}W!==null&&t.update(W,34963),(ie||h)&&(h=!1,x(P,k,J,ee),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function l(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,k,J){const ee=J.wireframe===!0;let W=o[P.id];W===void 0&&(W={},o[P.id]=W);let ie=W[k.id];ie===void 0&&(ie={},W[k.id]=ie);let K=ie[ee];return K===void 0&&(K=p(l()),ie[ee]=K),K}function p(P){const k=[],J=[],ee=[];for(let W=0;W<i;W++)k[W]=0,J[W]=0,ee[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:ee,object:P,attributes:{},index:null}}function _(P,k,J,ee){const W=u.attributes,ie=k.attributes;let K=0;const V=J.getAttributes();for(const U in V)if(V[U].location>=0){const re=W[U];let ue=ie[U];if(ue===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),re===void 0||re.attribute!==ue||ue&&re.data!==ue.data)return!0;K++}return u.attributesNum!==K||u.index!==ee}function b(P,k,J,ee){const W={},ie=k.attributes;let K=0;const V=J.getAttributes();for(const U in V)if(V[U].location>=0){let re=ie[U];re===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const ue={};ue.attribute=re,re&&re.data&&(ue.data=re.data),W[U]=ue,K++}u.attributes=W,u.attributesNum=K,u.index=ee}function y(){const P=u.newAttributes;for(let k=0,J=P.length;k<J;k++)P[k]=0}function v(P){w(P,0)}function w(P,k){const J=u.newAttributes,ee=u.enabledAttributes,W=u.attributeDivisors;J[P]=1,ee[P]===0&&(r.enableVertexAttribArray(P),ee[P]=1),W[P]!==k&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,k),W[P]=k)}function A(){const P=u.newAttributes,k=u.enabledAttributes;for(let J=0,ee=k.length;J<ee;J++)k[J]!==P[J]&&(r.disableVertexAttribArray(J),k[J]=0)}function C(P,k,J,ee,W,ie){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(P,k,J,W,ie):r.vertexAttribPointer(P,k,J,ee,W,ie)}function x(P,k,J,ee){if(n.isWebGL2===!1&&(P.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const W=ee.attributes,ie=J.getAttributes(),K=k.defaultAttributeValues;for(const V in ie){const U=ie[V];if(U.location>=0){let ae=W[V];if(ae===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),ae!==void 0){const re=ae.normalized,ue=ae.itemSize,G=t.get(ae);if(G===void 0)continue;const Y=G.buffer,xe=G.type,Ae=G.bytesPerElement;if(ae.isInterleavedBufferAttribute){const _e=ae.data,q=_e.stride,Ee=ae.offset;if(_e.isInstancedInterleavedBuffer){for(let Ce=0;Ce<U.locationSize;Ce++)w(U.location+Ce,_e.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ce=0;Ce<U.locationSize;Ce++)v(U.location+Ce);r.bindBuffer(34962,Y);for(let Ce=0;Ce<U.locationSize;Ce++)C(U.location+Ce,ue/U.locationSize,xe,re,q*Ae,(Ee+ue/U.locationSize*Ce)*Ae)}else{if(ae.isInstancedBufferAttribute){for(let _e=0;_e<U.locationSize;_e++)w(U.location+_e,ae.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<U.locationSize;_e++)v(U.location+_e);r.bindBuffer(34962,Y);for(let _e=0;_e<U.locationSize;_e++)C(U.location+_e,ue/U.locationSize,xe,re,ue*Ae,ue/U.locationSize*_e*Ae)}}else if(K!==void 0){const re=K[V];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(U.location,re);break;case 3:r.vertexAttrib3fv(U.location,re);break;case 4:r.vertexAttrib4fv(U.location,re);break;default:r.vertexAttrib1fv(U.location,re)}}}}A()}function E(){Q();for(const P in o){const k=o[P];for(const J in k){const ee=k[J];for(const W in ee)g(ee[W].object),delete ee[W];delete k[J]}delete o[P]}}function I(P){if(o[P.id]===void 0)return;const k=o[P.id];for(const J in k){const ee=k[J];for(const W in ee)g(ee[W].object),delete ee[W];delete k[J]}delete o[P.id]}function X(P){for(const k in o){const J=o[k];if(J[P.id]===void 0)continue;const ee=J[P.id];for(const W in ee)g(ee[W].object),delete ee[W];delete J[P.id]}}function Q(){F(),h=!0,u!==c&&(u=c,d(u.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:X,initAttributes:y,enableAttribute:v,disableUnusedAttributes:A}}function c0(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}function o(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,f){if(f===0)return;let l,d;if(i)l=r,d="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",l===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}l[d](s,u,h,f),t.update(h,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function u0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),l=r.getParameter(35660),d=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),p=r.getParameter(36347),_=r.getParameter(36348),b=r.getParameter(36349),y=l>0,v=a||e.has("OES_texture_float"),w=y&&v,A=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:l,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:w,maxSamples:A}}function h0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ei,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,l,d){const g=f.length!==0||l||n!==0||i;return i=l,t=h(f,d,0),n=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,l,d){const g=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?h(null):u();else{const b=s?0:n,y=b*4;let v=_.clippingState||null;c.value=v,v=h(g,l,y,d);for(let w=0;w!==y;++w)v[w]=t[w];_.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,l,d,g){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=c.value,g!==!0||p===null){const _=d+m*4,b=l.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,v=d;y!==m;++y,v+=4)a.copy(f[y]).applyMatrix4(b,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function f0(r){let e=new WeakMap;function t(a,o){return o===Oa?a.mapping=Bi:o===Ua&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Oa||o===Ua)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Td(c.height/2);return u.fromEquirectangularTexture(r,a),e.set(a,u),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class so extends nu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ii=4,Tl=[.125,.215,.35,.446,.526,.582],ni=20,_a=new so,Al=new Ie;let xa=null;const ti=(1+Math.sqrt(5))/2,Pi=1/ti,El=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ti,Pi),new R(0,ti,-Pi),new R(Pi,0,ti),new R(-Pi,0,ti),new R(ti,Pi,0),new R(-ti,Pi,0)];class Cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xa),e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Lr,format:en,encoding:fi,depthBuffer:!1},i=Ll(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(s)),this._blurMaterial=p0(s,e,t)}return i}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,n,i){const o=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,l=h.toneMapping;h.getClearColor(Al),h.toneMapping=xn,h.autoClear=!1;const d=new si({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new tn(new zr,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Al),m=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(o.up.set(0,c[_],0),o.lookAt(u[_],0,0)):b===1?(o.up.set(0,0,c[_]),o.lookAt(0,u[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,u[_]));const y=this._cubeSize;ls(i,b*y,_>2?y:0,y,y),h.setRenderTarget(i),m&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=l,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bi||e.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new tn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ls(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,_a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=El[(i-1)%El.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new tn(this._lodPlanes[i],u),l=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ni-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):ni;p>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const _=[];let b=0;for(let C=0;C<ni;++C){const x=C/m,E=Math.exp(-x*x/2);_.push(E),C===0?b+=E:C<p&&(b+=2*E)}for(let C=0;C<_.length;C++)_[C]=_[C]/b;l.envMap.value=e.texture,l.samples.value=p,l.weights.value=_,l.latitudinal.value=a==="latitudinal",o&&(l.poleAxis.value=o);const{_lodMax:y}=this;l.dTheta.value=g,l.mipInt.value=y-n;const v=this._sizeLods[i],w=3*v*(i>y-Ii?i-y+Ii:0),A=4*(this._cubeSize-v);ls(t,w,A,3*v,2*v),c.setRenderTarget(t),c.render(f,_a)}}function d0(r){const e=[],t=[],n=[];let i=r;const s=r-Ii+1+Tl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Ii?c=Tl[a-r+Ii-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,f=1+u,l=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,m=3,p=2,_=1,b=new Float32Array(m*g*d),y=new Float32Array(p*g*d),v=new Float32Array(_*g*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,x=A>2?0:-1,E=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];b.set(E,m*g*A),y.set(l,p*g*A);const I=[A,A,A,A,A,A];v.set(I,_*g*A)}const w=new fn;w.setAttribute("position",new It(b,m)),w.setAttribute("uv",new It(y,p)),w.setAttribute("faceIndex",new It(v,_)),e.push(w),i>Ii&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ll(r,e,t){const n=new di(r,e,t);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function p0(r,e,t){const n=new Float32Array(ni),i=new R(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rl(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Pl(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===Oa||c===Ua,h=c===Bi||c===Vi;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Cl(r)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new Cl(r));const l=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,l),o.addEventListener("dispose",s),l.texture}else return null}}}return o}function i(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function g0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _0(r,e,t,n){const i={},s=new WeakMap;function a(f){const l=f.target;l.index!==null&&e.remove(l.index);for(const g in l.attributes)e.remove(l.attributes[g]);l.removeEventListener("dispose",a),delete i[l.id];const d=s.get(l);d&&(e.remove(d),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(f,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l}function c(f){const l=f.attributes;for(const g in l)e.update(l[g],34962);const d=f.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function u(f){const l=[],d=f.index,g=f.attributes.position;let m=0;if(d!==null){const b=d.array;m=d.version;for(let y=0,v=b.length;y<v;y+=3){const w=b[y+0],A=b[y+1],C=b[y+2];l.push(w,A,A,C,C,w)}}else{const b=g.array;m=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const w=y+0,A=y+1,C=y+2;l.push(w,A,A,C,C,w)}}const p=new(qc(l)?eu:$c)(l,1);p.version=m;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function h(f){const l=s.get(f);if(l){const d=f.index;d!==null&&l.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function x0(r,e,t,n){const i=n.isWebGL2;let s;function a(l){s=l}let o,c;function u(l){o=l.type,c=l.bytesPerElement}function h(l,d){r.drawElements(s,d,o,l*c),t.update(d,s,1)}function f(l,d,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,o,l*c,g),t.update(d,s,g)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f}function v0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function y0(r,e){return r[0]-e[0]}function M0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function b0(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Qe,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,h,f,l){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==m){let k=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",k)};p!==void 0&&p.texture.dispose();const y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],x=h.morphAttributes.color||[];let E=0;y===!0&&(E=1),v===!0&&(E=2),w===!0&&(E=3);let I=h.attributes.position.count*E,X=1;I>e.maxTextureSize&&(X=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const Q=new Float32Array(I*X*4*m),F=new Jc(Q,I,X,m);F.type=Hn,F.needsUpdate=!0;const P=E*4;for(let J=0;J<m;J++){const ee=A[J],W=C[J],ie=x[J],K=I*X*4*J;for(let V=0;V<ee.count;V++){const U=V*P;y===!0&&(a.fromBufferAttribute(ee,V),Q[K+U+0]=a.x,Q[K+U+1]=a.y,Q[K+U+2]=a.z,Q[K+U+3]=0),v===!0&&(a.fromBufferAttribute(W,V),Q[K+U+4]=a.x,Q[K+U+5]=a.y,Q[K+U+6]=a.z,Q[K+U+7]=0),w===!0&&(a.fromBufferAttribute(ie,V),Q[K+U+8]=a.x,Q[K+U+9]=a.y,Q[K+U+10]=a.z,Q[K+U+11]=ie.itemSize===4?a.w:1)}}p={count:m,texture:F,size:new ze(I,X)},s.set(h,p),h.addEventListener("dispose",k)}let _=0;for(let y=0;y<d.length;y++)_+=d[y];const b=h.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",b),l.getUniforms().setValue(r,"morphTargetInfluences",d),l.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let m=n[h.id];if(m===void 0||m.length!==g){m=[];for(let v=0;v<g;v++)m[v]=[v,0];n[h.id]=m}for(let v=0;v<g;v++){const w=m[v];w[0]=v,w[1]=d[v]}m.sort(M0);for(let v=0;v<8;v++)v<g&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(y0);const p=h.morphAttributes.position,_=h.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const w=o[v],A=w[0],C=w[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+v)!==p[A]&&h.setAttribute("morphTarget"+v,p[A]),_&&h.getAttribute("morphNormal"+v)!==_[A]&&h.setAttribute("morphNormal"+v,_[A]),i[v]=C,b+=C):(p&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),_&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const y=h.morphTargetsRelative?1:1-b;l.getUniforms().setValue(r,"morphTargetBaseInfluence",y),l.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function S0(r,e,t,n){let i=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,f=e.get(c,h);return i.get(f)!==u&&(e.update(f),i.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function a(){i=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const su=new _t,au=new Jc,ou=new cd,lu=new iu,Dl=[],Il=[],Nl=new Float32Array(16),Fl=new Float32Array(9),Ol=new Float32Array(4);function er(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Dl[i];if(s===void 0&&(s=new Float32Array(i),Dl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ns(r,e){let t=Il[e];t===void 0&&(t=new Int32Array(e),Il[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function w0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function T0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ut(t,e)}}function A0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ut(t,e)}}function E0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ut(t,e)}}function C0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;Ol.set(n),r.uniformMatrix2fv(this.addr,!1,Ol),ut(t,n)}}function L0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;Fl.set(n),r.uniformMatrix3fv(this.addr,!1,Fl),ut(t,n)}}function R0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;Nl.set(n),r.uniformMatrix4fv(this.addr,!1,Nl),ut(t,n)}}function P0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function D0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ut(t,e)}}function I0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ut(t,e)}}function N0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ut(t,e)}}function F0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function O0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ut(t,e)}}function U0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ut(t,e)}}function k0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ut(t,e)}}function z0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||su,i)}function B0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ou,i)}function V0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||lu,i)}function H0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||au,i)}function G0(r){switch(r){case 5126:return w0;case 35664:return T0;case 35665:return A0;case 35666:return E0;case 35674:return C0;case 35675:return L0;case 35676:return R0;case 5124:case 35670:return P0;case 35667:case 35671:return D0;case 35668:case 35672:return I0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return O0;case 36295:return U0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return H0}}function W0(r,e){r.uniform1fv(this.addr,e)}function Z0(r,e){const t=er(e,this.size,2);r.uniform2fv(this.addr,t)}function X0(r,e){const t=er(e,this.size,3);r.uniform3fv(this.addr,t)}function q0(r,e){const t=er(e,this.size,4);r.uniform4fv(this.addr,t)}function j0(r,e){const t=er(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Y0(r,e){const t=er(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function K0(r,e){const t=er(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function J0(r,e){r.uniform1iv(this.addr,e)}function Q0(r,e){r.uniform2iv(this.addr,e)}function $0(r,e){r.uniform3iv(this.addr,e)}function eg(r,e){r.uniform4iv(this.addr,e)}function tg(r,e){r.uniform1uiv(this.addr,e)}function ng(r,e){r.uniform2uiv(this.addr,e)}function ig(r,e){r.uniform3uiv(this.addr,e)}function rg(r,e){r.uniform4uiv(this.addr,e)}function sg(r,e,t){const n=this.cache,i=e.length,s=Ns(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||su,s[a])}function ag(r,e,t){const n=this.cache,i=e.length,s=Ns(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ou,s[a])}function og(r,e,t){const n=this.cache,i=e.length,s=Ns(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||lu,s[a])}function lg(r,e,t){const n=this.cache,i=e.length,s=Ns(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||au,s[a])}function cg(r){switch(r){case 5126:return W0;case 35664:return Z0;case 35665:return X0;case 35666:return q0;case 35674:return j0;case 35675:return Y0;case 35676:return K0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return $0;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}class ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=G0(t.type)}}class hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=cg(t.type)}}class fg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Ul(r,e){r.seq.push(e),r.map[e.id]=e}function dg(r,e,t){const n=r.name,i=n.length;for(va.lastIndex=0;;){const s=va.exec(n),a=va.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===i){Ul(t,u===void 0?new ug(o,r,e):new hg(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new fg(o),Ul(t,f)),t=f}}}class Ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);dg(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function kl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let pg=0;function mg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function gg(r){switch(r){case fi:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function zl(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+mg(r.getShaderSource(e),a)}else return i}function _g(r,e){const t=gg(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xg(r,e){let t;switch(e){case bf:t="Linear";break;case Sf:t="Reinhard";break;case wf:t="OptimizedCineon";break;case Tf:t="ACESFilmic";break;case Af:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}function yg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mg(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function vr(r){return r!==""}function Bl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(r){return r.replace(bg,Sg)}function Sg(r,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ha(t)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(r){return r.replace(wg,Tg)}function Tg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ag(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$a?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function Eg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Bi:case Vi:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Lg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case yf:e="ENVMAP_BLENDING_MIX";break;case Mf:e="ENVMAP_BLENDING_ADD";break}return e}function Rg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pg(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Ag(t),u=Eg(t),h=Cg(t),f=Lg(t),l=Rg(t),d=t.isWebGL2?"":vg(t),g=yg(s),m=i.createProgram();let p,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(vr).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(vr).join(`
`),_.length>0&&(_+=`
`)):(p=[Gl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),_=[d,Gl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==xn?xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,_g("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=Ha(a),a=Bl(a,t),a=Vl(a,t),o=Ha(o),o=Bl(o,t),o=Vl(o,t),a=Hl(a),o=Hl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=b+p+a,v=b+_+o,w=kl(i,35633,y),A=kl(i,35632,v);if(i.attachShader(m,w),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(w).trim(),X=i.getShaderInfoLog(A).trim();let Q=!0,F=!0;if(i.getProgramParameter(m,35714)===!1){Q=!1;const P=zl(i,w,"vertex"),k=zl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+P+`
`+k)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(I===""||X==="")&&(F=!1);F&&(this.diagnostics={runnable:Q,programLog:E,vertexShader:{log:I,prefix:p},fragmentShader:{log:X,prefix:_}})}i.deleteShader(w),i.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new Ms(i,m)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=Mg(i,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=pg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let Dg=0;class Ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ng(e),t.set(e,n)),n}}class Ng{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}}function Fg(r,e,t,n,i,s,a){const o=new Qc,c=new Ig,u=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,l=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,E,I,X,Q){const F=X.fog,P=Q.geometry,k=x.isMeshStandardMaterial?X.environment:null,J=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),ee=J&&J.mapping===Is?J.image.height:null,W=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ie=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,K=ie!==void 0?ie.length:0;let V=0;P.morphAttributes.position!==void 0&&(V=1),P.morphAttributes.normal!==void 0&&(V=2),P.morphAttributes.color!==void 0&&(V=3);let U,ae,re,ue;if(W){const q=gn[W];U=q.vertexShader,ae=q.fragmentShader}else U=x.vertexShader,ae=x.fragmentShader,c.update(x),re=c.getVertexShaderID(x),ue=c.getFragmentShaderID(x);const G=r.getRenderTarget(),Y=x.alphaTest>0,xe=x.clearcoat>0,Ae=x.iridescence>0;return{isWebGL2:h,shaderID:W,shaderName:x.type,vertexShader:U,fragmentShader:ae,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:l,outputEncoding:G===null?r.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:fi,map:!!x.map,matcap:!!x.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:ee,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Xf,tangentSpaceNormalMap:x.normalMapType===eo,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Xe,clearcoat:xe,clearcoatMap:xe&&!!x.clearcoatMap,clearcoatRoughnessMap:xe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!x.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!x.iridescenceMap,iridescenceThicknessMap:Ae&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Fi,alphaMap:!!x.alphaMap,alphaTest:Y,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!P.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:V,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:xn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ds,flipSided:x.side===nn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(E,x),b(E,x),E.push(r.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),x.push(o.mask)}function y(x){const E=g[x.type];let I;if(E){const X=gn[E];I=Md.clone(X.uniforms)}else I=x.uniforms;return I}function v(x,E){let I;for(let X=0,Q=u.length;X<Q;X++){const F=u[X];if(F.cacheKey===E){I=F,++I.usedTimes;break}}return I===void 0&&(I=new Pg(r,E,x,s),u.push(I)),I}function w(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function A(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:v,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:C}}function Og(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ug(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Wl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Zl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,l,d,g,m,p){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:l,material:d,groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},r[e]=_):(_.id=f.id,_.object=f,_.geometry=l,_.material=d,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=m,_.group=p),e++,_}function o(f,l,d,g,m,p){const _=a(f,l,d,g,m,p);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function c(f,l,d,g,m,p){const _=a(f,l,d,g,m,p);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function u(f,l){t.length>1&&t.sort(f||Ug),n.length>1&&n.sort(l||Wl),i.length>1&&i.sort(l||Wl)}function h(){for(let f=e,l=r.length;f<l;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:u}}function kg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Zl,r.set(n,[a])):i>=s.length?(a=new Zl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function zg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ie};break;case"SpotLight":t={position:new R,direction:new R,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function Bg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Vg=0;function Hg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Gg(r,e){const t=new zg,n=Bg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new R);const s=new R,a=new Fe,o=new Fe;function c(h,f){let l=0,d=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,p=0,_=0,b=0,y=0,v=0,w=0,A=0,C=0,x=0;h.sort(Hg);const E=f!==!0?Math.PI:1;for(let X=0,Q=h.length;X<Q;X++){const F=h[X],P=F.color,k=F.intensity,J=F.distance,ee=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)l+=P.r*k*E,d+=P.g*k*E,g+=P.b*k*E;else if(F.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(F.sh.coefficients[W],k);else if(F.isDirectionalLight){const W=t.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity*E),F.castShadow){const ie=F.shadow,K=n.get(F);K.shadowBias=ie.bias,K.shadowNormalBias=ie.normalBias,K.shadowRadius=ie.radius,K.shadowMapSize=ie.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=F.shadow.matrix,v++}i.directional[m]=W,m++}else if(F.isSpotLight){const W=t.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(P).multiplyScalar(k*E),W.distance=J,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,i.spot[_]=W;const ie=F.shadow;if(F.map&&(i.spotLightMap[C]=F.map,C++,ie.updateMatrices(F),F.castShadow&&x++),i.spotLightMatrix[_]=ie.matrix,F.castShadow){const K=n.get(F);K.shadowBias=ie.bias,K.shadowNormalBias=ie.normalBias,K.shadowRadius=ie.radius,K.shadowMapSize=ie.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=ee,A++}_++}else if(F.isRectAreaLight){const W=t.get(F);W.color.copy(P).multiplyScalar(k),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),i.rectArea[b]=W,b++}else if(F.isPointLight){const W=t.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity*E),W.distance=F.distance,W.decay=F.decay,F.castShadow){const ie=F.shadow,K=n.get(F);K.shadowBias=ie.bias,K.shadowNormalBias=ie.normalBias,K.shadowRadius=ie.radius,K.shadowMapSize=ie.mapSize,K.shadowCameraNear=ie.camera.near,K.shadowCameraFar=ie.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=ee,i.pointShadowMatrix[p]=F.shadow.matrix,w++}i.point[p]=W,p++}else if(F.isHemisphereLight){const W=t.get(F);W.skyColor.copy(F.color).multiplyScalar(k*E),W.groundColor.copy(F.groundColor).multiplyScalar(k*E),i.hemi[y]=W,y++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=d,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==m||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==b||I.hemiLength!==y||I.numDirectionalShadows!==v||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,I.directionalLength=m,I.pointLength=p,I.spotLength=_,I.rectAreaLength=b,I.hemiLength=y,I.numDirectionalShadows=v,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=C,i.version=Vg++)}function u(h,f){let l=0,d=0,g=0,m=0,p=0;const _=f.matrixWorldInverse;for(let b=0,y=h.length;b<y;b++){const v=h[b];if(v.isDirectionalLight){const w=i.directional[l];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),l++}else if(v.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const w=i.rectArea[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),o.identity(),a.copy(v.matrixWorld),a.premultiply(_),o.extractRotation(a),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:c,setupView:u,state:i}}function Xl(r,e){const t=new Gg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function Wg(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Xl(r,e),t.set(s,[c])):a>=o.length?(c=new Xl(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Zg extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xg extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yg(r,e,t){let n=new io;const i=new ze,s=new ze,a=new Qe,o=new Zg({depthPacking:Zf}),c=new Xg,u={},h=t.maxTextureSize,f={0:nn,1:Zn,2:Ds},l=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:qg,fragmentShader:jg}),d=l.clone();d.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new tn(g,l),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a,this.render=function(v,w,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const C=r.getRenderTarget(),x=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Gn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let X=0,Q=v.length;X<Q;X++){const F=v[X],P=F.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const k=P.getFrameExtents();if(i.multiply(k),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/k.x),i.x=s.x*k.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/k.y),i.y=s.y*k.y,P.mapSize.y=s.y)),P.map===null){const ee=this.type!==xr?{minFilter:mt,magFilter:mt}:{};P.map=new di(i.x,i.y,ee),P.map.texture.name=F.name+".shadowMap",P.camera.updateProjectionMatrix()}r.setRenderTarget(P.map),r.clear();const J=P.getViewportCount();for(let ee=0;ee<J;ee++){const W=P.getViewport(ee);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),I.viewport(a),P.updateMatrices(F,ee),n=P.getFrustum(),y(w,A,P.camera,F,this.type)}P.isPointLightShadow!==!0&&this.type===xr&&_(P,A),P.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(C,x,E)};function _(v,w){const A=e.update(m);l.defines.VSM_SAMPLES!==v.blurSamples&&(l.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,l.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new di(i.x,i.y)),l.uniforms.shadow_pass.value=v.map.texture,l.uniforms.resolution.value=v.mapSize,l.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(w,null,A,l,m,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(w,null,A,d,m,null)}function b(v,w,A,C,x,E){let I=null;const X=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(X!==void 0)I=X;else if(I=A.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Q=I.uuid,F=w.uuid;let P=u[Q];P===void 0&&(P={},u[Q]=P);let k=P[F];k===void 0&&(k=I.clone(),P[F]=k),I=k}return I.visible=w.visible,I.wireframe=w.wireframe,E===xr?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:f[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=C,I.farDistance=x),I}function y(v,w,A,C,x){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===xr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const X=e.update(v),Q=v.material;if(Array.isArray(Q)){const F=X.groups;for(let P=0,k=F.length;P<k;P++){const J=F[P],ee=Q[J.materialIndex];if(ee&&ee.visible){const W=b(v,ee,C,A.near,A.far,x);r.renderBufferDirect(A,null,X,W,v,J)}}}else if(Q.visible){const F=b(v,Q,C,A.near,A.far,x);r.renderBufferDirect(A,null,X,F,v,null)}}const I=v.children;for(let X=0,Q=I.length;X<Q;X++)y(I[X],w,A,C,x)}}function Kg(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const z=new Qe;let te=null;const me=new Qe(0,0,0,0);return{setMask:function(ye){te!==ye&&!L&&(r.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){L=ye},setClear:function(ye,We,ft,xt,qn){qn===!0&&(ye*=xt,We*=xt,ft*=xt),z.set(ye,We,ft,xt),me.equals(z)===!1&&(r.clearColor(ye,We,ft,xt),me.copy(z))},reset:function(){L=!1,te=null,me.set(-1,0,0,0)}}}function s(){let L=!1,z=null,te=null,me=null;return{setTest:function(ye){ye?Y(2929):xe(2929)},setMask:function(ye){z!==ye&&!L&&(r.depthMask(ye),z=ye)},setFunc:function(ye){if(te!==ye){switch(ye){case df:r.depthFunc(512);break;case pf:r.depthFunc(519);break;case mf:r.depthFunc(513);break;case Fa:r.depthFunc(515);break;case gf:r.depthFunc(514);break;case _f:r.depthFunc(518);break;case xf:r.depthFunc(516);break;case vf:r.depthFunc(517);break;default:r.depthFunc(515)}te=ye}},setLocked:function(ye){L=ye},setClear:function(ye){me!==ye&&(r.clearDepth(ye),me=ye)},reset:function(){L=!1,z=null,te=null,me=null}}}function a(){let L=!1,z=null,te=null,me=null,ye=null,We=null,ft=null,xt=null,qn=null;return{setTest:function(tt){L||(tt?Y(2960):xe(2960))},setMask:function(tt){z!==tt&&!L&&(r.stencilMask(tt),z=tt)},setFunc:function(tt,bn,Kt){(te!==tt||me!==bn||ye!==Kt)&&(r.stencilFunc(tt,bn,Kt),te=tt,me=bn,ye=Kt)},setOp:function(tt,bn,Kt){(We!==tt||ft!==bn||xt!==Kt)&&(r.stencilOp(tt,bn,Kt),We=tt,ft=bn,xt=Kt)},setLocked:function(tt){L=tt},setClear:function(tt){qn!==tt&&(r.clearStencil(tt),qn=tt)},reset:function(){L=!1,z=null,te=null,me=null,ye=null,We=null,ft=null,xt=null,qn=null}}}const o=new i,c=new s,u=new a,h=new WeakMap,f=new WeakMap;let l={},d={},g=new WeakMap,m=[],p=null,_=!1,b=null,y=null,v=null,w=null,A=null,C=null,x=null,E=!1,I=null,X=null,Q=null,F=null,P=null;const k=r.getParameter(35661);let J=!1,ee=0;const W=r.getParameter(7938);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=ee>=2);let ie=null,K={};const V=r.getParameter(3088),U=r.getParameter(2978),ae=new Qe().fromArray(V),re=new Qe().fromArray(U);function ue(L,z,te){const me=new Uint8Array(4),ye=r.createTexture();r.bindTexture(L,ye),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let We=0;We<te;We++)r.texImage2D(z+We,0,6408,1,1,0,6408,5121,me);return ye}const G={};G[3553]=ue(3553,3553,1),G[34067]=ue(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Y(2929),c.setFunc(Fa),At(!1),Yt(Uo),Y(2884),wt(Gn);function Y(L){l[L]!==!0&&(r.enable(L),l[L]=!0)}function xe(L){l[L]!==!1&&(r.disable(L),l[L]=!1)}function Ae(L,z){return d[L]!==z?(r.bindFramebuffer(L,z),d[L]=z,n&&(L===36009&&(d[36160]=z),L===36160&&(d[36009]=z)),!0):!1}function _e(L,z){let te=m,me=!1;if(L)if(te=g.get(z),te===void 0&&(te=[],g.set(z,te)),L.isWebGLMultipleRenderTargets){const ye=L.texture;if(te.length!==ye.length||te[0]!==36064){for(let We=0,ft=ye.length;We<ft;We++)te[We]=36064+We;te.length=ye.length,me=!0}}else te[0]!==36064&&(te[0]=36064,me=!0);else te[0]!==1029&&(te[0]=1029,me=!0);me&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function q(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const Ee={[Di]:32774,[tf]:32778,[nf]:32779};if(n)Ee[Vo]=32775,Ee[Ho]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ee[Vo]=L.MIN_EXT,Ee[Ho]=L.MAX_EXT)}const Ce={[rf]:0,[sf]:1,[af]:768,[zc]:770,[ff]:776,[uf]:774,[lf]:772,[of]:769,[Bc]:771,[hf]:775,[cf]:773};function wt(L,z,te,me,ye,We,ft,xt){if(L===Gn){_===!0&&(xe(3042),_=!1);return}if(_===!1&&(Y(3042),_=!0),L!==ef){if(L!==b||xt!==E){if((y!==Di||A!==Di)&&(r.blendEquation(32774),y=Di,A=Di),xt)switch(L){case Fi:r.blendFuncSeparate(1,771,1,771);break;case ko:r.blendFunc(1,1);break;case zo:r.blendFuncSeparate(0,769,0,1);break;case Bo:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:r.blendFuncSeparate(770,771,1,771);break;case ko:r.blendFunc(770,1);break;case zo:r.blendFuncSeparate(0,769,0,1);break;case Bo:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,w=null,C=null,x=null,b=L,E=xt}return}ye=ye||z,We=We||te,ft=ft||me,(z!==y||ye!==A)&&(r.blendEquationSeparate(Ee[z],Ee[ye]),y=z,A=ye),(te!==v||me!==w||We!==C||ft!==x)&&(r.blendFuncSeparate(Ce[te],Ce[me],Ce[We],Ce[ft]),v=te,w=me,C=We,x=ft),b=L,E=!1}function Tt(L,z){L.side===Ds?xe(2884):Y(2884);let te=L.side===nn;z&&(te=!te),At(te),L.blending===Fi&&L.transparent===!1?wt(Gn):wt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const me=L.stencilWrite;u.setTest(me),me&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ke(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Y(32926):xe(32926)}function At(L){I!==L&&(L?r.frontFace(2304):r.frontFace(2305),I=L)}function Yt(L){L!==Jh?(Y(2884),L!==X&&(L===Uo?r.cullFace(1029):L===Qh?r.cullFace(1028):r.cullFace(1032))):xe(2884),X=L}function ot(L){L!==Q&&(J&&r.lineWidth(L),Q=L)}function Ke(L,z,te){L?(Y(32823),(F!==z||P!==te)&&(r.polygonOffset(z,te),F=z,P=te)):xe(32823)}function Mn(L){L?Y(3089):xe(3089)}function sn(L){L===void 0&&(L=33984+k-1),ie!==L&&(r.activeTexture(L),ie=L)}function T(L,z,te){te===void 0&&(ie===null?te=33984+k-1:te=ie);let me=K[te];me===void 0&&(me={type:void 0,texture:void 0},K[te]=me),(me.type!==L||me.texture!==z)&&(ie!==te&&(r.activeTexture(te),ie=te),r.bindTexture(L,z||G[L]),me.type=L,me.texture=z)}function M(){const L=K[ie];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){ae.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function Me(L){re.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function Ve(L,z){let te=f.get(z);te===void 0&&(te=new WeakMap,f.set(z,te));let me=te.get(L);me===void 0&&(me=r.getUniformBlockIndex(z,L.name),te.set(L,me))}function et(L,z){const me=f.get(z).get(L);h.get(z)!==me&&(r.uniformBlockBinding(z,me,L.__bindingPointIndex),h.set(z,me))}function ht(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},ie=null,K={},d={},g=new WeakMap,m=[],p=null,_=!1,b=null,y=null,v=null,w=null,A=null,C=null,x=null,E=!1,I=null,X=null,Q=null,F=null,P=null,ae.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Y,disable:xe,bindFramebuffer:Ae,drawBuffers:_e,useProgram:q,setBlending:wt,setMaterial:Tt,setFlipSided:At,setCullFace:Yt,setLineWidth:ot,setPolygonOffset:Ke,setScissorTest:Mn,activeTexture:sn,bindTexture:T,unbindTexture:M,compressedTexImage2D:H,compressedTexImage3D:ne,texImage2D:Te,texImage3D:ve,updateUBOMapping:Ve,uniformBlockBinding:et,texStorage2D:j,texStorage3D:Se,texSubImage2D:se,texSubImage3D:de,compressedTexSubImage2D:Le,compressedTexSubImage3D:pe,scissor:we,viewport:Me,reset:ht}}function Jg(r,e,t,n,i,s,a){const o=i.isWebGL2,c=i.maxTextures,u=i.maxCubemapSize,h=i.maxTextureSize,f=i.maxSamples,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,M){return _?new OffscreenCanvas(T,M):Ir("canvas")}function y(T,M,H,ne){let se=1;if((T.width>ne||T.height>ne)&&(se=ne/Math.max(T.width,T.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const de=M?As:Math.floor,Le=de(se*T.width),pe=de(se*T.height);m===void 0&&(m=b(Le,pe));const j=H?b(Le,pe):m;return j.width=Le,j.height=pe,j.getContext("2d").drawImage(T,0,0,Le,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Le+"x"+pe+")."),j}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return Va(T.width)&&Va(T.height)}function w(T){return o?!1:T.wrapS!==$t||T.wrapT!==$t||T.minFilter!==mt&&T.minFilter!==Ot}function A(T,M){return T.generateMipmaps&&M&&T.minFilter!==mt&&T.minFilter!==Ot}function C(T){r.generateMipmap(T)}function x(T,M,H,ne,se=!1){if(o===!1)return M;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de=M;return M===6403&&(H===5126&&(de=33326),H===5131&&(de=33325),H===5121&&(de=33321)),M===33319&&(H===5126&&(de=33328),H===5131&&(de=33327),H===5121&&(de=33323)),M===6408&&(H===5126&&(de=34836),H===5131&&(de=34842),H===5121&&(de=ne===Xe&&se===!1?35907:32856),H===32819&&(de=32854),H===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function E(T,M,H){return A(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==mt&&T.minFilter!==Ot?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function I(T){return T===mt||T===ka||T===vs?9728:9729}function X(T){const M=T.target;M.removeEventListener("dispose",X),F(M),M.isVideoTexture&&g.delete(M)}function Q(T){const M=T.target;M.removeEventListener("dispose",Q),k(M)}function F(T){const M=n.get(T);if(M.__webglInit===void 0)return;const H=T.source,ne=p.get(H);if(ne){const se=ne[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&P(T),Object.keys(ne).length===0&&p.delete(H)}n.remove(T)}function P(T){const M=n.get(T);r.deleteTexture(M.__webglTexture);const H=T.source,ne=p.get(H);delete ne[M.__cacheKey],a.memory.textures--}function k(T){const M=T.texture,H=n.get(T),ne=n.get(M);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(H.__webglFramebuffer[se]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let se=0;se<H.__webglColorRenderbuffer.length;se++)H.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[se]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let se=0,de=M.length;se<de;se++){const Le=n.get(M[se]);Le.__webglTexture&&(r.deleteTexture(Le.__webglTexture),a.memory.textures--),n.remove(M[se])}n.remove(M),n.remove(T)}let J=0;function ee(){J=0}function W(){const T=J;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),J+=1,T}function ie(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function K(T,M){const H=n.get(T);if(T.isVideoTexture&&Mn(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(H,T,M);return}}t.bindTexture(3553,H.__webglTexture,33984+M)}function V(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){xe(H,T,M);return}t.bindTexture(35866,H.__webglTexture,33984+M)}function U(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){xe(H,T,M);return}t.bindTexture(32879,H.__webglTexture,33984+M)}function ae(T,M){const H=n.get(T);if(T.version>0&&H.__version!==T.version){Ae(H,T,M);return}t.bindTexture(34067,H.__webglTexture,33984+M)}const re={[Hi]:10497,[$t]:33071,[Ts]:33648},ue={[mt]:9728,[ka]:9984,[vs]:9986,[Ot]:9729,[Gc]:9985,[ui]:9987};function G(T,M,H){if(H?(r.texParameteri(T,10242,re[M.wrapS]),r.texParameteri(T,10243,re[M.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,re[M.wrapR]),r.texParameteri(T,10240,ue[M.magFilter]),r.texParameteri(T,10241,ue[M.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(M.wrapS!==$t||M.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,I(M.magFilter)),r.texParameteri(T,10241,I(M.minFilter)),M.minFilter!==mt&&M.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===mt||M.minFilter!==vs&&M.minFilter!==ui||M.type===Hn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Lr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(T,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Y(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",X));const ne=M.source;let se=p.get(ne);se===void 0&&(se={},p.set(ne,se));const de=ie(M);if(de!==T.__cacheKey){se[de]===void 0&&(se[de]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),se[de].usedTimes++;const Le=se[T.__cacheKey];Le!==void 0&&(se[T.__cacheKey].usedTimes--,Le.usedTimes===0&&P(M)),T.__cacheKey=de,T.__webglTexture=se[de].texture}return H}function xe(T,M,H){let ne=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=35866),M.isData3DTexture&&(ne=32879);const se=Y(T,M),de=M.source;t.bindTexture(ne,T.__webglTexture,33984+H);const Le=n.get(de);if(de.version!==Le.__version||se===!0){t.activeTexture(33984+H),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const pe=w(M)&&v(M.image)===!1;let j=y(M.image,pe,!1,h);j=sn(M,j);const Se=v(j)||o,Te=s.convert(M.format,M.encoding);let ve=s.convert(M.type),we=x(M.internalFormat,Te,ve,M.encoding,M.isVideoTexture);G(ne,M,Se);let Me;const Ve=M.mipmaps,et=o&&M.isVideoTexture!==!0,ht=Le.__version===void 0||se===!0,L=E(M,j,Se);if(M.isDepthTexture)we=6402,o?M.type===Hn?we=36012:M.type===ri?we=33190:M.type===Oi?we=35056:we=33189:M.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===oi&&we===6402&&M.type!==Wc&&M.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ri,ve=s.convert(M.type)),M.format===Gi&&we===6402&&(we=34041,M.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Oi,ve=s.convert(M.type))),ht&&(et?t.texStorage2D(3553,1,we,j.width,j.height):t.texImage2D(3553,0,we,j.width,j.height,0,Te,ve,null));else if(M.isDataTexture)if(Ve.length>0&&Se){et&&ht&&t.texStorage2D(3553,L,we,Ve[0].width,Ve[0].height);for(let z=0,te=Ve.length;z<te;z++)Me=Ve[z],et?t.texSubImage2D(3553,z,0,0,Me.width,Me.height,Te,ve,Me.data):t.texImage2D(3553,z,we,Me.width,Me.height,0,Te,ve,Me.data);M.generateMipmaps=!1}else et?(ht&&t.texStorage2D(3553,L,we,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,Te,ve,j.data)):t.texImage2D(3553,0,we,j.width,j.height,0,Te,ve,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){et&&ht&&t.texStorage3D(35866,L,we,Ve[0].width,Ve[0].height,j.depth);for(let z=0,te=Ve.length;z<te;z++)Me=Ve[z],M.format!==en?Te!==null?et?t.compressedTexSubImage3D(35866,z,0,0,0,Me.width,Me.height,j.depth,Te,Me.data,0,0):t.compressedTexImage3D(35866,z,we,Me.width,Me.height,j.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(35866,z,0,0,0,Me.width,Me.height,j.depth,Te,ve,Me.data):t.texImage3D(35866,z,we,Me.width,Me.height,j.depth,0,Te,ve,Me.data)}else{et&&ht&&t.texStorage2D(3553,L,we,Ve[0].width,Ve[0].height);for(let z=0,te=Ve.length;z<te;z++)Me=Ve[z],M.format!==en?Te!==null?et?t.compressedTexSubImage2D(3553,z,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(3553,z,we,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(3553,z,0,0,Me.width,Me.height,Te,ve,Me.data):t.texImage2D(3553,z,we,Me.width,Me.height,0,Te,ve,Me.data)}else if(M.isDataArrayTexture)et?(ht&&t.texStorage3D(35866,L,we,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,Te,ve,j.data)):t.texImage3D(35866,0,we,j.width,j.height,j.depth,0,Te,ve,j.data);else if(M.isData3DTexture)et?(ht&&t.texStorage3D(32879,L,we,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,Te,ve,j.data)):t.texImage3D(32879,0,we,j.width,j.height,j.depth,0,Te,ve,j.data);else if(M.isFramebufferTexture){if(ht)if(et)t.texStorage2D(3553,L,we,j.width,j.height);else{let z=j.width,te=j.height;for(let me=0;me<L;me++)t.texImage2D(3553,me,we,z,te,0,Te,ve,null),z>>=1,te>>=1}}else if(Ve.length>0&&Se){et&&ht&&t.texStorage2D(3553,L,we,Ve[0].width,Ve[0].height);for(let z=0,te=Ve.length;z<te;z++)Me=Ve[z],et?t.texSubImage2D(3553,z,0,0,Te,ve,Me):t.texImage2D(3553,z,we,Te,ve,Me);M.generateMipmaps=!1}else et?(ht&&t.texStorage2D(3553,L,we,j.width,j.height),t.texSubImage2D(3553,0,0,0,Te,ve,j)):t.texImage2D(3553,0,we,Te,ve,j);A(M,Se)&&C(ne),Le.__version=de.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Ae(T,M,H){if(M.image.length!==6)return;const ne=Y(T,M),se=M.source;t.bindTexture(34067,T.__webglTexture,33984+H);const de=n.get(se);if(se.version!==de.__version||ne===!0){t.activeTexture(33984+H),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,j=[];for(let z=0;z<6;z++)!Le&&!pe?j[z]=y(M.image[z],!1,!0,u):j[z]=pe?M.image[z].image:M.image[z],j[z]=sn(M,j[z]);const Se=j[0],Te=v(Se)||o,ve=s.convert(M.format,M.encoding),we=s.convert(M.type),Me=x(M.internalFormat,ve,we,M.encoding),Ve=o&&M.isVideoTexture!==!0,et=de.__version===void 0||ne===!0;let ht=E(M,Se,Te);G(34067,M,Te);let L;if(Le){Ve&&et&&t.texStorage2D(34067,ht,Me,Se.width,Se.height);for(let z=0;z<6;z++){L=j[z].mipmaps;for(let te=0;te<L.length;te++){const me=L[te];M.format!==en?ve!==null?Ve?t.compressedTexSubImage2D(34069+z,te,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(34069+z,te,Me,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(34069+z,te,0,0,me.width,me.height,ve,we,me.data):t.texImage2D(34069+z,te,Me,me.width,me.height,0,ve,we,me.data)}}}else{L=M.mipmaps,Ve&&et&&(L.length>0&&ht++,t.texStorage2D(34067,ht,Me,j[0].width,j[0].height));for(let z=0;z<6;z++)if(pe){Ve?t.texSubImage2D(34069+z,0,0,0,j[z].width,j[z].height,ve,we,j[z].data):t.texImage2D(34069+z,0,Me,j[z].width,j[z].height,0,ve,we,j[z].data);for(let te=0;te<L.length;te++){const ye=L[te].image[z].image;Ve?t.texSubImage2D(34069+z,te+1,0,0,ye.width,ye.height,ve,we,ye.data):t.texImage2D(34069+z,te+1,Me,ye.width,ye.height,0,ve,we,ye.data)}}else{Ve?t.texSubImage2D(34069+z,0,0,0,ve,we,j[z]):t.texImage2D(34069+z,0,Me,ve,we,j[z]);for(let te=0;te<L.length;te++){const me=L[te];Ve?t.texSubImage2D(34069+z,te+1,0,0,ve,we,me.image[z]):t.texImage2D(34069+z,te+1,Me,ve,we,me.image[z])}}}A(M,Te)&&C(34067),de.__version=se.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function _e(T,M,H,ne,se){const de=s.convert(H.format,H.encoding),Le=s.convert(H.type),pe=x(H.internalFormat,de,Le,H.encoding);n.get(M).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,pe,M.width,M.height,M.depth,0,de,Le,null):t.texImage2D(se,0,pe,M.width,M.height,0,de,Le,null)),t.bindFramebuffer(36160,T),Ke(M)?l.framebufferTexture2DMultisampleEXT(36160,ne,se,n.get(H).__webglTexture,0,ot(M)):(se===3553||se>=34069&&se<=34074)&&r.framebufferTexture2D(36160,ne,se,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function q(T,M,H){if(r.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let ne=33189;if(H||Ke(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===Hn?ne=36012:se.type===ri&&(ne=33190));const de=ot(M);Ke(M)?l.renderbufferStorageMultisampleEXT(36161,de,ne,M.width,M.height):r.renderbufferStorageMultisample(36161,de,ne,M.width,M.height)}else r.renderbufferStorage(36161,ne,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const ne=ot(M);H&&Ke(M)===!1?r.renderbufferStorageMultisample(36161,ne,35056,M.width,M.height):Ke(M)?l.renderbufferStorageMultisampleEXT(36161,ne,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<ne.length;se++){const de=ne[se],Le=s.convert(de.format,de.encoding),pe=s.convert(de.type),j=x(de.internalFormat,Le,pe,de.encoding),Se=ot(M);H&&Ke(M)===!1?r.renderbufferStorageMultisample(36161,Se,j,M.width,M.height):Ke(M)?l.renderbufferStorageMultisampleEXT(36161,Se,j,M.width,M.height):r.renderbufferStorage(36161,j,M.width,M.height)}}r.bindRenderbuffer(36161,null)}function Ee(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const ne=n.get(M.depthTexture).__webglTexture,se=ot(M);if(M.depthTexture.format===oi)Ke(M)?l.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(M.depthTexture.format===Gi)Ke(M)?l.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const M=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ee(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=r.createRenderbuffer(),q(M.__webglDepthbuffer[ne],T,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),q(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function wt(T,M,H){const ne=n.get(T);M!==void 0&&_e(ne.__webglFramebuffer,T,T.texture,36064,3553),H!==void 0&&Ce(T)}function Tt(T){const M=T.texture,H=n.get(T),ne=n.get(M);T.addEventListener("dispose",Q),T.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=M.version,a.memory.textures++);const se=T.isWebGLCubeRenderTarget===!0,de=T.isWebGLMultipleRenderTargets===!0,Le=v(T)||o;if(se){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)H.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),de)if(i.drawBuffers){const pe=T.texture;for(let j=0,Se=pe.length;j<Se;j++){const Te=n.get(pe[j]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Ke(T)===!1){const pe=de?M:[M];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let j=0;j<pe.length;j++){const Se=pe[j];H.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[j]);const Te=s.convert(Se.format,Se.encoding),ve=s.convert(Se.type),we=x(Se.internalFormat,Te,ve,Se.encoding,T.isXRRenderTarget===!0),Me=ot(T);r.renderbufferStorageMultisample(36161,Me,we,T.width,T.height),r.framebufferRenderbuffer(36160,36064+j,36161,H.__webglColorRenderbuffer[j])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),q(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),G(34067,M,Le);for(let pe=0;pe<6;pe++)_e(H.__webglFramebuffer[pe],T,M,36064,34069+pe);A(M,Le)&&C(34067),t.unbindTexture()}else if(de){const pe=T.texture;for(let j=0,Se=pe.length;j<Se;j++){const Te=pe[j],ve=n.get(Te);t.bindTexture(3553,ve.__webglTexture),G(3553,Te,Le),_e(H.__webglFramebuffer,T,Te,36064+j,3553),A(Te,Le)&&C(3553)}t.unbindTexture()}else{let pe=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?pe=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ne.__webglTexture),G(pe,M,Le),_e(H.__webglFramebuffer,T,M,36064,pe),A(M,Le)&&C(pe),t.unbindTexture()}T.depthBuffer&&Ce(T)}function At(T){const M=v(T)||o,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0,se=H.length;ne<se;ne++){const de=H[ne];if(A(de,M)){const Le=T.isWebGLCubeRenderTarget?34067:3553,pe=n.get(de).__webglTexture;t.bindTexture(Le,pe),C(Le),t.unbindTexture()}}}function Yt(T){if(o&&T.samples>0&&Ke(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,ne=T.height;let se=16384;const de=[],Le=T.stencilBuffer?33306:36096,pe=n.get(T),j=T.isWebGLMultipleRenderTargets===!0;if(j)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,pe.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,pe.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){de.push(36064+Se),T.depthBuffer&&de.push(Le);const Te=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Te===!1&&(T.depthBuffer&&(se|=256),T.stencilBuffer&&(se|=1024)),j&&r.framebufferRenderbuffer(36008,36064,36161,pe.__webglColorRenderbuffer[Se]),Te===!0&&(r.invalidateFramebuffer(36008,[Le]),r.invalidateFramebuffer(36009,[Le])),j){const ve=n.get(M[Se]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ve,0)}r.blitFramebuffer(0,0,H,ne,0,0,H,ne,se,9728),d&&r.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Se,36161,pe.__webglColorRenderbuffer[Se]);const Te=n.get(M[Se]).__webglTexture;t.bindFramebuffer(36160,pe.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Se,3553,Te,0)}t.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}}function ot(T){return Math.min(f,T.samples)}function Ke(T){const M=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Mn(T){const M=a.render.frame;g.get(T)!==M&&(g.set(T,M),T.update())}function sn(T,M){const H=T.encoding,ne=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ba||H!==fi&&(H===Xe?o===!1?e.has("EXT_sRGB")===!0&&ne===en?(T.format=Ba,T.minFilter=Ot,T.generateMipmaps=!1):M=Yc.sRGBToLinear(M):(ne!==en||se!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),M}this.allocateTextureUnit=W,this.resetTextureUnits=ee,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=U,this.setTextureCube=ae,this.rebindTextures=wt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ke}function Qg(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===hi)return 5121;if(s===Rf)return 32819;if(s===Pf)return 32820;if(s===Ef)return 5120;if(s===Cf)return 5122;if(s===Wc)return 5123;if(s===Lf)return 5124;if(s===ri)return 5125;if(s===Hn)return 5126;if(s===Lr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Df)return 6406;if(s===en)return 6408;if(s===Nf)return 6409;if(s===Ff)return 6410;if(s===oi)return 6402;if(s===Gi)return 34041;if(s===If)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ba)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Of)return 6403;if(s===Uf)return 36244;if(s===kf)return 33319;if(s===zf)return 33320;if(s===Bf)return 36249;if(s===Zs||s===Xs||s===qs||s===js)if(a===Xe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Zs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Zs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===js)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Go||s===Wo||s===Zo||s===Xo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Go)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qo||s===jo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===qo)return a===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===jo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yo||s===Ko||s===Jo||s===Qo||s===$o||s===el||s===tl||s===nl||s===il||s===rl||s===sl||s===al||s===ol||s===ll)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Yo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ko)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$o)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===el)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===il)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===al)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ol)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ll)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===cl)return a===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Oi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class $g extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e1={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),_=this._getHandJoint(u,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],l=h.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&l>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&l<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class t1 extends _t{constructor(e,t,n,i,s,a,o,c,u,h){if(h=h!==void 0?h:oi,h!==oi&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oi&&(n=ri),n===void 0&&h===Gi&&(n=Oi),super(null,i,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mt,this.minFilter=c!==void 0?c:mt,this.flipY=!1,this.generateMipmaps=!1}}class n1 extends Ji{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=null,u=null,h=null,f=null,l=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],b=[],y=new Set,v=new Map,w=new Dt;w.layers.enable(1),w.viewport=new Qe;const A=new Dt;A.layers.enable(2),A.viewport=new Qe;const C=[w,A],x=new $g;x.layers.enable(1),x.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let U=_[V];return U===void 0&&(U=new ya,_[V]=U),U.getTargetRaySpace()},this.getControllerGrip=function(V){let U=_[V];return U===void 0&&(U=new ya,_[V]=U),U.getGripSpace()},this.getHand=function(V){let U=_[V];return U===void 0&&(U=new ya,_[V]=U),U.getHandSpace()};function X(V){const U=b.indexOf(V.inputSource);if(U===-1)return;const ae=_[U];ae!==void 0&&ae.dispatchEvent({type:V.type,data:V.inputSource})}function Q(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",F);for(let V=0;V<_.length;V++){const U=b[V];U!==null&&(b[V]=null,_[V].disconnect(U))}E=null,I=null,e.setRenderTarget(m),l=null,f=null,h=null,i=null,p=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:l},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};l=new XRWebGLLayer(i,t,U),i.updateRenderState({baseLayer:l}),p=new di(l.framebufferWidth,l.framebufferHeight,{format:en,type:hi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,ae=null,re=null;g.depth&&(re=g.stencil?35056:33190,U=g.stencil?Gi:oi,ae=g.stencil?Oi:ri);const ue={colorFormat:32856,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ue),i.updateRenderState({layers:[f]}),p=new di(f.textureWidth,f.textureHeight,{format:en,type:hi,depthTexture:new t1(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const G=e.properties.get(p);G.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await i.requestReferenceSpace(o),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(V){for(let U=0;U<V.removed.length;U++){const ae=V.removed[U],re=b.indexOf(ae);re>=0&&(b[re]=null,_[re].disconnect(ae))}for(let U=0;U<V.added.length;U++){const ae=V.added[U];let re=b.indexOf(ae);if(re===-1){for(let G=0;G<_.length;G++)if(G>=b.length){b.push(ae),re=G;break}else if(b[G]===null){b[G]=ae,re=G;break}if(re===-1)break}const ue=_[re];ue&&ue.connect(ae)}}const P=new R,k=new R;function J(V,U,ae){P.setFromMatrixPosition(U.matrixWorld),k.setFromMatrixPosition(ae.matrixWorld);const re=P.distanceTo(k),ue=U.projectionMatrix.elements,G=ae.projectionMatrix.elements,Y=ue[14]/(ue[10]-1),xe=ue[14]/(ue[10]+1),Ae=(ue[9]+1)/ue[5],_e=(ue[9]-1)/ue[5],q=(ue[8]-1)/ue[0],Ee=(G[8]+1)/G[0],Ce=Y*q,wt=Y*Ee,Tt=re/(-q+Ee),At=Tt*-q;U.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(At),V.translateZ(Tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Yt=Y+Tt,ot=xe+Tt,Ke=Ce-At,Mn=wt+(re-At),sn=Ae*xe/ot*Yt,T=_e*xe/ot*Yt;V.projectionMatrix.makePerspective(Ke,Mn,sn,T,Yt,ot)}function ee(V,U){U===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(U.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;x.near=A.near=w.near=V.near,x.far=A.far=w.far=V.far,(E!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,I=x.far);const U=V.parent,ae=x.cameras;ee(x,U);for(let ue=0;ue<ae.length;ue++)ee(ae[ue],U);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),V.matrix.copy(x.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const re=V.children;for(let ue=0,G=re.length;ue<G;ue++)re[ue].updateMatrixWorld(!0);ae.length===2?J(x,w,A):x.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(l!==null)return l.fixedFoveation},this.setFoveation=function(V){f!==null&&(f.fixedFoveation=V),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=V)},this.getPlanes=function(){return y};let W=null;function ie(V,U){if(u=U.getViewerPose(c||a),d=U,u!==null){const ae=u.views;l!==null&&(e.setRenderTargetFramebuffer(p,l.framebuffer),e.setRenderTarget(p));let re=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let ue=0;ue<ae.length;ue++){const G=ae[ue];let Y=null;if(l!==null)Y=l.getViewport(G);else{const Ae=h.getViewSubImage(f,G);Y=Ae.viewport,ue===0&&(e.setRenderTargetTextures(p,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(p))}let xe=C[ue];xe===void 0&&(xe=new Dt,xe.layers.enable(ue),xe.viewport=new Qe,C[ue]=xe),xe.matrix.fromArray(G.transform.matrix),xe.projectionMatrix.fromArray(G.projectionMatrix),xe.viewport.set(Y.x,Y.y,Y.width,Y.height),ue===0&&x.matrix.copy(xe.matrix),re===!0&&x.cameras.push(xe)}}for(let ae=0;ae<_.length;ae++){const re=b[ae],ue=_[ae];re!==null&&ue!==void 0&&ue.update(re,U,c||a)}if(W&&W(V,U),U.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:U.detectedPlanes});let ae=null;for(const re of y)U.detectedPlanes.has(re)||(ae===null&&(ae=[]),ae.push(re));if(ae!==null)for(const re of ae)y.delete(re),v.delete(re),n.dispatchEvent({type:"planeremoved",data:re});for(const re of U.detectedPlanes)if(!y.has(re))y.add(re),v.set(re,U.lastChangedTime),n.dispatchEvent({type:"planeadded",data:re});else{const ue=v.get(re);re.lastChangedTime>ue&&(v.set(re,re.lastChangedTime),n.dispatchEvent({type:"planechanged",data:re}))}}d=null}const K=new ru;K.setAnimationLoop(ie),this.setAnimationLoop=function(V){W=V},this.dispose=function(){}}}function i1(r,e){function t(m,p){p.color.getRGB(m.fogColor.value,tu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),f(m,p),p.isMeshPhysicalMaterial&&l(m,p,y)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,_,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,_,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=b*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function l(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===nn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function r1(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function c(b,y){const v=y.program;n.uniformBlockBinding(b,v)}function u(b,y){let v=i[b.id];v===void 0&&(g(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",p));const w=y.program;n.updateUBOMapping(b,w);const A=e.render.frame;s[b.id]!==A&&(l(b),s[b.id]=A)}function h(b){const y=f();b.__bindingPointIndex=y;const v=r.createBuffer(),w=b.__size,A=b.usage;return r.bindBuffer(35345,v),r.bufferData(35345,w,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,v),v}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(b){const y=i[b.id],v=b.uniforms,w=b.__cache;r.bindBuffer(35345,y);for(let A=0,C=v.length;A<C;A++){const x=v[A];if(d(x,A,w)===!0){const E=x.__offset,I=Array.isArray(x.value)?x.value:[x.value];let X=0;for(let Q=0;Q<I.length;Q++){const F=I[Q],P=m(F);typeof F=="number"?(x.__data[0]=F,r.bufferSubData(35345,E+X,x.__data)):F.isMatrix3?(x.__data[0]=F.elements[0],x.__data[1]=F.elements[1],x.__data[2]=F.elements[2],x.__data[3]=F.elements[0],x.__data[4]=F.elements[3],x.__data[5]=F.elements[4],x.__data[6]=F.elements[5],x.__data[7]=F.elements[0],x.__data[8]=F.elements[6],x.__data[9]=F.elements[7],x.__data[10]=F.elements[8],x.__data[11]=F.elements[0]):(F.toArray(x.__data,X),X+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,E,x.__data)}}r.bindBuffer(35345,null)}function d(b,y,v){const w=b.value;if(v[y]===void 0){if(typeof w=="number")v[y]=w;else{const A=Array.isArray(w)?w:[w],C=[];for(let x=0;x<A.length;x++)C.push(A[x].clone());v[y]=C}return!0}else if(typeof w=="number"){if(v[y]!==w)return v[y]=w,!0}else{const A=Array.isArray(v[y])?v[y]:[v[y]],C=Array.isArray(w)?w:[w];for(let x=0;x<A.length;x++){const E=A[x];if(E.equals(C[x])===!1)return E.copy(C[x]),!0}}return!1}function g(b){const y=b.uniforms;let v=0;const w=16;let A=0;for(let C=0,x=y.length;C<x;C++){const E=y[C],I={boundary:0,storage:0},X=Array.isArray(E.value)?E.value:[E.value];for(let Q=0,F=X.length;Q<F;Q++){const P=X[Q],k=m(P);I.boundary+=k.boundary,I.storage+=k.storage}if(E.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=v,C>0){A=v%w;const Q=w-A;A!==0&&Q-I.boundary<0&&(v+=w-A,E.__offset=v)}v+=I.storage}return A=v%w,A>0&&(v+=w-A),b.__size=v,b.__cache={},this}function m(b){const y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:c,update:u,dispose:_}}function s1(){const r=Ir("canvas");return r.style.display="block",r}function cu(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:s1(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let f=null,l=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fi,this.physicallyCorrectLights=!1,this.toneMapping=xn,this.toneMappingExposure=1;const m=this;let p=!1,_=0,b=0,y=null,v=-1,w=null;const A=new Qe,C=new Qe;let x=null,E=e.width,I=e.height,X=1,Q=null,F=null;const P=new Qe(0,0,E,I),k=new Qe(0,0,E,I);let J=!1;const ee=new io;let W=!1,ie=!1,K=null;const V=new Fe,U=new ze,ae=new R,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return y===null?X:1}let G=t;function Y(S,O){for(let B=0;B<S.length;B++){const D=S[B],Z=e.getContext(D,O);if(Z!==null)return Z}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Ve,!1),G===null){const O=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&O.shift(),G=Y(O,S),G===null)throw Y(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xe,Ae,_e,q,Ee,Ce,wt,Tt,At,Yt,ot,Ke,Mn,sn,T,M,H,ne,se,de,Le,pe,j,Se;function Te(){xe=new g0(G),Ae=new u0(G,xe,r),xe.init(Ae),pe=new Qg(G,xe,Ae),_e=new Kg(G,xe,Ae),q=new v0,Ee=new Og,Ce=new Jg(G,xe,_e,Ee,Ae,pe,q),wt=new f0(m),Tt=new m0(m),At=new Cd(G,Ae),j=new l0(G,xe,At,Ae),Yt=new _0(G,At,q,j),ot=new S0(G,Yt,At,q),se=new b0(G,Ae,Ce),M=new h0(Ee),Ke=new Fg(m,wt,Tt,xe,Ae,j,M),Mn=new i1(m,Ee),sn=new kg,T=new Wg(xe,Ae),ne=new o0(m,wt,Tt,_e,ot,h,a),H=new Yg(m,ot,Ae),Se=new r1(G,q,Ae,_e),de=new c0(G,xe,q,Ae),Le=new x0(G,xe,q,Ae),q.programs=Ke.programs,m.capabilities=Ae,m.extensions=xe,m.properties=Ee,m.renderLists=sn,m.shadowMap=H,m.state=_e,m.info=q}Te();const ve=new n1(m,G);this.xr=ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const S=xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(E,I,!1))},this.getSize=function(S){return S.set(E,I)},this.setSize=function(S,O,B){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=S,I=O,e.width=Math.floor(S*X),e.height=Math.floor(O*X),B!==!1&&(e.style.width=S+"px",e.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(E*X,I*X).floor()},this.setDrawingBufferSize=function(S,O,B){E=S,I=O,X=B,e.width=Math.floor(S*B),e.height=Math.floor(O*B),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(P)},this.setViewport=function(S,O,B,D){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,O,B,D),_e.viewport(A.copy(P).multiplyScalar(X).floor())},this.getScissor=function(S){return S.copy(k)},this.setScissor=function(S,O,B,D){S.isVector4?k.set(S.x,S.y,S.z,S.w):k.set(S,O,B,D),_e.scissor(C.copy(k).multiplyScalar(X).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(S){_e.setScissorTest(J=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){F=S},this.getClearColor=function(S){return S.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(S=!0,O=!0,B=!0){let D=0;S&&(D|=16384),O&&(D|=256),B&&(D|=1024),G.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Ve,!1),sn.dispose(),T.dispose(),Ee.dispose(),wt.dispose(),Tt.dispose(),ot.dispose(),j.dispose(),Se.dispose(),Ke.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",me),ve.removeEventListener("sessionend",ye),K&&(K.dispose(),K=null),We.stop()};function we(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const S=q.autoReset,O=H.enabled,B=H.autoUpdate,D=H.needsUpdate,Z=H.type;Te(),q.autoReset=S,H.enabled=O,H.autoUpdate=B,H.needsUpdate=D,H.type=Z}function Ve(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function et(S){const O=S.target;O.removeEventListener("dispose",et),ht(O)}function ht(S){L(S),Ee.remove(S)}function L(S){const O=Ee.get(S).programs;O!==void 0&&(O.forEach(function(B){Ke.releaseProgram(B)}),S.isShaderMaterial&&Ke.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,B,D,Z,be){O===null&&(O=re);const Re=Z.isMesh&&Z.matrixWorld.determinant()<0,De=vu(S,O,B,D,Z);_e.setMaterial(D,Re);let Ne=B.index,He=1;D.wireframe===!0&&(Ne=Yt.getWireframeAttribute(B),He=2);const Oe=B.drawRange,Ue=B.attributes.position;let it=Oe.start*He,Gt=(Oe.start+Oe.count)*He;be!==null&&(it=Math.max(it,be.start*He),Gt=Math.min(Gt,(be.start+be.count)*He)),Ne!==null?(it=Math.max(it,0),Gt=Math.min(Gt,Ne.count)):Ue!=null&&(it=Math.max(it,0),Gt=Math.min(Gt,Ue.count));const Sn=Gt-it;if(Sn<0||Sn===1/0)return;j.setup(Z,D,De,B,Ne);let jn,rt=de;if(Ne!==null&&(jn=At.get(Ne),rt=Le,rt.setIndex(jn)),Z.isMesh)D.wireframe===!0?(_e.setLineWidth(D.wireframeLinewidth*ue()),rt.setMode(1)):rt.setMode(4);else if(Z.isLine){let ke=D.linewidth;ke===void 0&&(ke=1),_e.setLineWidth(ke*ue()),Z.isLineSegments?rt.setMode(1):Z.isLineLoop?rt.setMode(2):rt.setMode(3)}else Z.isPoints?rt.setMode(0):Z.isSprite&&rt.setMode(4);if(Z.isInstancedMesh)rt.renderInstances(it,Sn,Z.count);else if(B.isInstancedBufferGeometry){const ke=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Os=Math.min(B.instanceCount,ke);rt.renderInstances(it,Sn,Os)}else rt.render(it,Sn)},this.compile=function(S,O){function B(D,Z,be){D.transparent===!0&&D.side===Wr?(D.side=nn,D.needsUpdate=!0,Kt(D,Z,be),D.side=Zn,D.needsUpdate=!0,Kt(D,Z,be),D.side=Wr):Kt(D,Z,be)}l=T.get(S),l.init(),g.push(l),S.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(l.pushLight(D),D.castShadow&&l.pushShadow(D))}),l.setupLights(m.physicallyCorrectLights),S.traverse(function(D){const Z=D.material;if(Z)if(Array.isArray(Z))for(let be=0;be<Z.length;be++){const Re=Z[be];B(Re,S,D)}else B(Z,S,D)}),g.pop(),l=null};let z=null;function te(S){z&&z(S)}function me(){We.stop()}function ye(){We.start()}const We=new ru;We.setAnimationLoop(te),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(S){z=S,ve.setAnimationLoop(S),S===null?We.stop():We.start()},ve.addEventListener("sessionstart",me),ve.addEventListener("sessionend",ye),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,O,y),l=T.get(S,g.length),l.init(),g.push(l),V.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(V),ie=this.localClippingEnabled,W=M.init(this.clippingPlanes,ie,O),f=sn.get(S,d.length),f.init(),d.push(f),ft(S,O,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(Q,F),W===!0&&M.beginShadows();const B=l.state.shadowsArray;if(H.render(B,S,O),W===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(f,S),l.setupLights(m.physicallyCorrectLights),O.isArrayCamera){const D=O.cameras;for(let Z=0,be=D.length;Z<be;Z++){const Re=D[Z];xt(f,S,Re,Re.viewport)}}else xt(f,S,O);y!==null&&(Ce.updateMultisampleRenderTarget(y),Ce.updateRenderTargetMipmap(y)),S.isScene===!0&&S.onAfterRender(m,S,O),j.resetDefaultState(),v=-1,w=null,g.pop(),g.length>0?l=g[g.length-1]:l=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function ft(S,O,B,D){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)l.pushLight(S),S.castShadow&&l.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){D&&ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(V);const Re=ot.update(S),De=S.material;De.visible&&f.push(S,Re,De,B,ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==q.render.frame&&(S.skeleton.update(),S.skeleton.frame=q.render.frame),!S.frustumCulled||ee.intersectsObject(S))){D&&ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(V);const Re=ot.update(S),De=S.material;if(Array.isArray(De)){const Ne=Re.groups;for(let He=0,Oe=Ne.length;He<Oe;He++){const Ue=Ne[He],it=De[Ue.materialIndex];it&&it.visible&&f.push(S,Re,it,B,ae.z,Ue)}}else De.visible&&f.push(S,Re,De,B,ae.z,null)}}const be=S.children;for(let Re=0,De=be.length;Re<De;Re++)ft(be[Re],O,B,D)}function xt(S,O,B,D){const Z=S.opaque,be=S.transmissive,Re=S.transparent;l.setupLightsView(B),be.length>0&&qn(Z,O,B),D&&_e.viewport(A.copy(D)),Z.length>0&&tt(Z,O,B),be.length>0&&tt(be,O,B),Re.length>0&&tt(Re,O,B),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function qn(S,O,B){const D=Ae.isWebGL2;K===null&&(K=new di(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Lr:hi,minFilter:ui,samples:D&&s===!0?4:0})),m.getDrawingBufferSize(U),D?K.setSize(U.x,U.y):K.setSize(As(U.x),As(U.y));const Z=m.getRenderTarget();m.setRenderTarget(K),m.clear();const be=m.toneMapping;m.toneMapping=xn,tt(S,O,B),m.toneMapping=be,Ce.updateMultisampleRenderTarget(K),Ce.updateRenderTargetMipmap(K),m.setRenderTarget(Z)}function tt(S,O,B){const D=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,be=S.length;Z<be;Z++){const Re=S[Z],De=Re.object,Ne=Re.geometry,He=D===null?Re.material:D,Oe=Re.group;De.layers.test(B.layers)&&bn(De,O,B,Ne,He,Oe)}}function bn(S,O,B,D,Z,be){S.onBeforeRender(m,O,B,D,Z,be),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(m,O,B,D,S,be),Z.transparent===!0&&Z.side===Wr?(Z.side=nn,Z.needsUpdate=!0,m.renderBufferDirect(B,O,D,Z,S,be),Z.side=Zn,Z.needsUpdate=!0,m.renderBufferDirect(B,O,D,Z,S,be),Z.side=Wr):m.renderBufferDirect(B,O,D,Z,S,be),S.onAfterRender(m,O,B,D,Z,be)}function Kt(S,O,B){O.isScene!==!0&&(O=re);const D=Ee.get(S),Z=l.state.lights,be=l.state.shadowsArray,Re=Z.state.version,De=Ke.getParameters(S,Z.state,be,O,B),Ne=Ke.getProgramCacheKey(De);let He=D.programs;D.environment=S.isMeshStandardMaterial?O.environment:null,D.fog=O.fog,D.envMap=(S.isMeshStandardMaterial?Tt:wt).get(S.envMap||D.environment),He===void 0&&(S.addEventListener("dispose",et),He=new Map,D.programs=He);let Oe=He.get(Ne);if(Oe!==void 0){if(D.currentProgram===Oe&&D.lightsStateVersion===Re)return mo(S,De),Oe}else De.uniforms=Ke.getUniforms(S),S.onBuild(B,De,m),S.onBeforeCompile(De,m),Oe=Ke.acquireProgram(De,Ne),He.set(Ne,Oe),D.uniforms=De.uniforms;const Ue=D.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=M.uniform),mo(S,De),D.needsLights=Mu(S),D.lightsStateVersion=Re,D.needsLights&&(Ue.ambientLightColor.value=Z.state.ambient,Ue.lightProbe.value=Z.state.probe,Ue.directionalLights.value=Z.state.directional,Ue.directionalLightShadows.value=Z.state.directionalShadow,Ue.spotLights.value=Z.state.spot,Ue.spotLightShadows.value=Z.state.spotShadow,Ue.rectAreaLights.value=Z.state.rectArea,Ue.ltc_1.value=Z.state.rectAreaLTC1,Ue.ltc_2.value=Z.state.rectAreaLTC2,Ue.pointLights.value=Z.state.point,Ue.pointLightShadows.value=Z.state.pointShadow,Ue.hemisphereLights.value=Z.state.hemi,Ue.directionalShadowMap.value=Z.state.directionalShadowMap,Ue.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ue.spotShadowMap.value=Z.state.spotShadowMap,Ue.spotLightMatrix.value=Z.state.spotLightMatrix,Ue.spotLightMap.value=Z.state.spotLightMap,Ue.pointShadowMap.value=Z.state.pointShadowMap,Ue.pointShadowMatrix.value=Z.state.pointShadowMatrix);const it=Oe.getUniforms(),Gt=Ms.seqWithValue(it.seq,Ue);return D.currentProgram=Oe,D.uniformsList=Gt,Oe}function mo(S,O){const B=Ee.get(S);B.outputEncoding=O.outputEncoding,B.instancing=O.instancing,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function vu(S,O,B,D,Z){O.isScene!==!0&&(O=re),Ce.resetTextureUnits();const be=O.fog,Re=D.isMeshStandardMaterial?O.environment:null,De=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:fi,Ne=(D.isMeshStandardMaterial?Tt:wt).get(D.envMap||Re),He=D.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!D.normalMap&&!!B.attributes.tangent,Ue=!!B.morphAttributes.position,it=!!B.morphAttributes.normal,Gt=!!B.morphAttributes.color,Sn=D.toneMapped?m.toneMapping:xn,jn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=jn!==void 0?jn.length:0,ke=Ee.get(D),Os=l.state.lights;if(W===!0&&(ie===!0||S!==w)){const Wt=S===w&&D.id===v;M.setState(D,S,Wt)}let dt=!1;D.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Os.state.version||ke.outputEncoding!==De||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ne||D.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==M.numPlanes||ke.numIntersection!==M.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Oe||ke.morphTargets!==Ue||ke.morphNormals!==it||ke.morphColors!==Gt||ke.toneMapping!==Sn||Ae.isWebGL2===!0&&ke.morphTargetsCount!==rt)&&(dt=!0):(dt=!0,ke.__version=D.version);let Yn=ke.currentProgram;dt===!0&&(Yn=Kt(D,O,Z));let go=!1,ir=!1,Us=!1;const Et=Yn.getUniforms(),Kn=ke.uniforms;if(_e.useProgram(Yn.program)&&(go=!0,ir=!0,Us=!0),D.id!==v&&(v=D.id,ir=!0),go||w!==S){if(Et.setValue(G,"projectionMatrix",S.projectionMatrix),Ae.logarithmicDepthBuffer&&Et.setValue(G,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,ir=!0,Us=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const Wt=Et.map.cameraPosition;Wt!==void 0&&Wt.setValue(G,ae.setFromMatrixPosition(S.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Et.setValue(G,"isOrthographic",S.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||Z.isSkinnedMesh)&&Et.setValue(G,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){Et.setOptional(G,Z,"bindMatrix"),Et.setOptional(G,Z,"bindMatrixInverse");const Wt=Z.skeleton;Wt&&(Ae.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Et.setValue(G,"boneTexture",Wt.boneTexture,Ce),Et.setValue(G,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ks=B.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0&&Ae.isWebGL2===!0)&&se.update(Z,B,D,Yn),(ir||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,Et.setValue(G,"receiveShadow",Z.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Kn.envMap.value=Ne,Kn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ir&&(Et.setValue(G,"toneMappingExposure",m.toneMappingExposure),ke.needsLights&&yu(Kn,Us),be&&D.fog===!0&&Mn.refreshFogUniforms(Kn,be),Mn.refreshMaterialUniforms(Kn,D,X,I,K),Ms.upload(G,ke.uniformsList,Kn,Ce)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ms.upload(G,ke.uniformsList,Kn,Ce),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Et.setValue(G,"center",Z.center),Et.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Et.setValue(G,"normalMatrix",Z.normalMatrix),Et.setValue(G,"modelMatrix",Z.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const Wt=D.uniformsGroups;for(let zs=0,bu=Wt.length;zs<bu;zs++)if(Ae.isWebGL2){const _o=Wt[zs];Se.update(_o,Yn),Se.bind(_o,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function yu(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Mu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(S,O,B){Ee.get(S.texture).__webglTexture=O,Ee.get(S.depthTexture).__webglTexture=B;const D=Ee.get(S);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=B===void 0,D.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const B=Ee.get(S);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,B=0){y=S,_=O,b=B;let D=!0,Z=null,be=!1,Re=!1;if(S){const Ne=Ee.get(S);Ne.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),D=!1):Ne.__webglFramebuffer===void 0?Ce.setupRenderTarget(S):Ne.__hasExternalTextures&&Ce.rebindTextures(S,Ee.get(S.texture).__webglTexture,Ee.get(S.depthTexture).__webglTexture);const He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Re=!0);const Oe=Ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=Oe[O],be=!0):Ae.isWebGL2&&S.samples>0&&Ce.useMultisampledRTT(S)===!1?Z=Ee.get(S).__webglMultisampledFramebuffer:Z=Oe,A.copy(S.viewport),C.copy(S.scissor),x=S.scissorTest}else A.copy(P).multiplyScalar(X).floor(),C.copy(k).multiplyScalar(X).floor(),x=J;if(_e.bindFramebuffer(36160,Z)&&Ae.drawBuffers&&D&&_e.drawBuffers(S,Z),_e.viewport(A),_e.scissor(C),_e.setScissorTest(x),be){const Ne=Ee.get(S.texture);G.framebufferTexture2D(36160,36064,34069+O,Ne.__webglTexture,B)}else if(Re){const Ne=Ee.get(S.texture),He=O||0;G.framebufferTextureLayer(36160,36064,Ne.__webglTexture,B||0,He)}v=-1},this.readRenderTargetPixels=function(S,O,B,D,Z,be,Re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){_e.bindFramebuffer(36160,De);try{const Ne=S.texture,He=Ne.format,Oe=Ne.type;if(He!==en&&pe.convert(He)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Oe===Lr&&(xe.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Oe!==hi&&pe.convert(Oe)!==G.getParameter(35738)&&!(Oe===Hn&&(Ae.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-D&&B>=0&&B<=S.height-Z&&G.readPixels(O,B,D,Z,pe.convert(He),pe.convert(Oe),be)}finally{const Ne=y!==null?Ee.get(y).__webglFramebuffer:null;_e.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(S,O,B=0){const D=Math.pow(2,-B),Z=Math.floor(O.image.width*D),be=Math.floor(O.image.height*D);Ce.setTexture2D(O,0),G.copyTexSubImage2D(3553,B,0,0,S.x,S.y,Z,be),_e.unbindTexture()},this.copyTextureToTexture=function(S,O,B,D=0){const Z=O.image.width,be=O.image.height,Re=pe.convert(B.format),De=pe.convert(B.type);Ce.setTexture2D(B,0),G.pixelStorei(37440,B.flipY),G.pixelStorei(37441,B.premultiplyAlpha),G.pixelStorei(3317,B.unpackAlignment),O.isDataTexture?G.texSubImage2D(3553,D,S.x,S.y,Z,be,Re,De,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(3553,D,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Re,O.mipmaps[0].data):G.texSubImage2D(3553,D,S.x,S.y,Re,De,O.image),D===0&&B.generateMipmaps&&G.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(S,O,B,D,Z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=S.max.x-S.min.x+1,Re=S.max.y-S.min.y+1,De=S.max.z-S.min.z+1,Ne=pe.convert(D.format),He=pe.convert(D.type);let Oe;if(D.isData3DTexture)Ce.setTexture3D(D,0),Oe=32879;else if(D.isDataArrayTexture)Ce.setTexture2DArray(D,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,D.flipY),G.pixelStorei(37441,D.premultiplyAlpha),G.pixelStorei(3317,D.unpackAlignment);const Ue=G.getParameter(3314),it=G.getParameter(32878),Gt=G.getParameter(3316),Sn=G.getParameter(3315),jn=G.getParameter(32877),rt=B.isCompressedTexture?B.mipmaps[0]:B.image;G.pixelStorei(3314,rt.width),G.pixelStorei(32878,rt.height),G.pixelStorei(3316,S.min.x),G.pixelStorei(3315,S.min.y),G.pixelStorei(32877,S.min.z),B.isDataTexture||B.isData3DTexture?G.texSubImage3D(Oe,Z,O.x,O.y,O.z,be,Re,De,Ne,He,rt.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Oe,Z,O.x,O.y,O.z,be,Re,De,Ne,rt.data)):G.texSubImage3D(Oe,Z,O.x,O.y,O.z,be,Re,De,Ne,He,rt),G.pixelStorei(3314,Ue),G.pixelStorei(32878,it),G.pixelStorei(3316,Gt),G.pixelStorei(3315,Sn),G.pixelStorei(32877,jn),Z===0&&D.generateMipmaps&&G.generateMipmap(Oe),_e.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ce.setTextureCube(S,0):S.isData3DTexture?Ce.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ce.setTexture2DArray(S,0):Ce.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){_=0,b=0,y=null,_e.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class a1 extends cu{}a1.prototype.isWebGL1Renderer=!0;class o1 extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class l1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=za,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new R;class oo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ql=new R,jl=new Qe,Yl=new Qe,c1=new R,Kl=new Fe;class u1 extends tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;jl.fromBufferAttribute(i.attributes.skinIndex,e),Yl.fromBufferAttribute(i.attributes.skinWeight,e),ql.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Yl.getComponent(s);if(a!==0){const o=jl.getComponent(s);Kl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(c1.copy(ql).applyMatrix4(Kl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class uu extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class h1 extends _t{constructor(e=null,t=1,n=1,i,s,a,o,c,u=mt,h=mt,f,l){super(null,a,o,c,u,h,i,s,f,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jl=new Fe,f1=new Fe;class lo{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:f1;Jl.multiplyMatrices(o,t[s]),Jl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new lo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Xc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new h1(t,e,e,en,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new uu),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ql extends It{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $l=new Fe,ec=new Fe,cs=[],d1=new Fe,fr=new tn;class p1 extends tn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,d1)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,$l),ec.multiplyMatrices(n,$l),fr.matrixWorld=ec,fr.raycast(e,cs);for(let a=0,o=cs.length;a<o;a++){const c=cs[a];c.instanceId=s,c.object=this,t.push(c)}cs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class hu extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tc=new R,nc=new R,ic=new Fe,Ma=new no,us=new $i;class co extends nt{constructor(e=new fn,t=new hu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)tc.fromBufferAttribute(t,i-1),nc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=tc.distanceTo(nc);e.setAttribute("lineDistance",new Dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(i),us.radius+=s,e.ray.intersectsSphere(us)===!1)return;ic.copy(i).invert(),Ma.copy(e.ray).applyMatrix4(ic);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=new R,h=new R,f=new R,l=new R,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let y=_,v=b-1;y<v;y+=d){const w=g.getX(y),A=g.getX(y+1);if(u.fromBufferAttribute(p,w),h.fromBufferAttribute(p,A),Ma.distanceSqToSegment(u,h,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(l);x<e.near||x>e.far||t.push({distance:x,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let y=_,v=b-1;y<v;y+=d){if(u.fromBufferAttribute(p,y),h.fromBufferAttribute(p,y+1),Ma.distanceSqToSegment(u,h,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(l);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const rc=new R,sc=new R;class m1 extends co{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)rc.fromBufferAttribute(t,i),sc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rc.distanceTo(sc);e.setAttribute("lineDistance",new Dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class g1 extends co{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fu extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ac=new Fe,Ga=new no,hs=new $i,fs=new R;class _1 extends nt{constructor(e=new fn,t=new fu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(i),hs.radius+=s,e.ray.intersectsSphere(hs)===!1)return;ac.copy(i).invert(),Ga.copy(e.ray).applyMatrix4(ac);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,f=n.attributes.position;if(u!==null){const l=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=l,m=d;g<m;g++){const p=u.getX(g);fs.fromBufferAttribute(f,p),oc(fs,p,c,i,e,t,this)}}else{const l=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=l,m=d;g<m;g++)fs.fromBufferAttribute(f,g),oc(fs,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function oc(r,e,t,n,i,s,a){const o=Ga.distanceSqToPoint(r);if(o<t){const c=new R;Ga.closestPointToPoint(r,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class uo extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gi extends uo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class x1 extends un{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function zn(r,e,t){return du(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function ds(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function du(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function v1(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function lc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function pu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Br{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class y1 extends Br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ul,endingEnd:ul}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case hl:s=e,o=2*t-n;break;case fl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hl:a=e,c=2*n-t;break;case fl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,f=this._offsetNext,l=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,_=-l*p+2*l*m-l*g,b=(1+l)*p+(-1.5-2*l)*m+(-.5+l)*g+1,y=(-1-d)*p+(1.5+d)*m+.5*g,v=d*p-d*m;for(let w=0;w!==o;++w)s[w]=_*a[h+w]+b*a[u+w]+y*a[c+w]+v*a[f+w];return s}}class M1 extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(i-t),f=1-h;for(let l=0;l!==o;++l)s[l]=a[u+l]*f+a[c+l]*h;return s}}class b1 extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ds(t,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ds(e.times,Array),values:ds(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new b1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new M1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new y1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case Wi:t=this.InterpolantFactoryMethodLinear;break;case Ys:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return Wi;case this.InterpolantFactoryMethodSmooth:return Ys}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=zn(n,s,a),this.values=zn(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&du(i))for(let o=0,c=i.length;o!==c;++o){const u=i[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){const e=zn(this.times),t=zn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ys,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(i)c=!0;else{const f=o*n,l=f-n,d=f+n;for(let g=0;g!==n;++g){const m=t[f+g];if(m!==t[l+g]||m!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,l=a*n;for(let d=0;d!==n;++d)t[l+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=zn(e,0,a),this.values=zn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=zn(this.times,0),t=zn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Wi;class tr extends yn{}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Rr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class mu extends yn{}mu.prototype.ValueTypeName="color";class Nr extends yn{}Nr.prototype.ValueTypeName="number";class S1 extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let u=e*o;for(let h=u+o;u!==h;u+=4)Xn.slerpFlat(s,0,a,u-o,a,u,c);return s}}class mi extends yn{InterpolantFactoryMethodLinear(e){return new S1(this.times,this.values,this.getValueSize(),e)}}mi.prototype.ValueTypeName="quaternion";mi.prototype.DefaultInterpolation=Wi;mi.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends yn{}nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Rr;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fr extends yn{}Fr.prototype.ValueTypeName="vector";class w1{constructor(e,t=-1,n,i=Hf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(A1(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(yn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],u=[];c.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);const h=v1(c);c=lc(c,1,h),u=lc(u,1,h),!i&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new Nr(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const u=e[o],h=u.name.match(s);if(h&&h.length>1){const f=h[1];let l=i[f];l||(i[f]=l=[]),l.push(u)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,l,d,g,m){if(d.length!==0){const p=[],_=[];pu(d,p,_,g),p.length!==0&&m.push(new f(l,p,_))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const l=u[f].keys;if(!(!l||l.length===0))if(l[0].morphTargets){const d={};let g;for(g=0;g<l.length;g++)if(l[g].morphTargets)for(let m=0;m<l[g].morphTargets.length;m++)d[l[g].morphTargets[m]]=-1;for(const m in d){const p=[],_=[];for(let b=0;b!==l[g].morphTargets.length;++b){const y=l[g];p.push(y.time),_.push(y.morphTarget===m?1:0)}i.push(new Nr(".morphTargetInfluence["+m+"]",p,_))}c=d.length*a}else{const d=".bones["+t[f].name+"]";n(Fr,d+".position",l,"pos",i),n(mi,d+".quaternion",l,"rot",i),n(Fr,d+".scale",l,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function T1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nr;case"vector":case"vector2":case"vector3":case"vector4":return Fr;case"color":return mu;case"quaternion":return mi;case"bool":case"boolean":return tr;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function A1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=T1(r.type);if(r.times===void 0){const t=[],n=[];pu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Xi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class E1{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,l=u.length;f<l;f+=2){const d=u[f],g=u[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const C1=new E1;class Vr{constructor(e){this.manager=e!==void 0?e:C1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ln={};class L1 extends Error{constructor(e,t){super(e),this.response=t}}class gu extends Vr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:n,onError:i});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Ln[e],f=u.body.getReader(),l=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),d=l?parseInt(l):0,g=d!==0;let m=0;const p=new ReadableStream({start(_){b();function b(){f.read().then(({done:y,value:v})=>{if(y)_.close();else{m+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let A=0,C=h.length;A<C;A++){const x=h[A];x.onProgress&&x.onProgress(w)}_.enqueue(v),b()}})}}});return new Response(p)}else throw new L1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return u.json();default:if(o===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),l=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(l);return u.arrayBuffer().then(g=>d.decode(g))}}}).then(u=>{Xi.add(e,u);const h=Ln[e];delete Ln[e];for(let f=0,l=h.length;f<l;f++){const d=h[f];d.onLoad&&d.onLoad(u)}}).catch(u=>{const h=Ln[e];if(h===void 0)throw this.manager.itemError(e),u;delete Ln[e];for(let f=0,l=h.length;f<l;f++){const d=h[f];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class R1 extends Vr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Xi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ir("img");function c(){h(),Xi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){h(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class P1 extends Vr{constructor(e){super(e)}load(e,t,n,i){const s=new _t,a=new R1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Fs extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ba=new Fe,cc=new R,uc=new R;class ho{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(cc),uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uc),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class D1 extends ho{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Dr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class I1 extends Fs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new D1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hc=new Fe,dr=new R,Sa=new R;class N1 extends ho{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(dr),Sa.copy(n.position),Sa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sa),n.updateMatrixWorld(),i.makeTranslation(-dr.x,-dr.y,-dr.z),hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc)}}class F1 extends Fs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new N1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class O1 extends ho{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class U1 extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.target=new nt,this.shadow=new O1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}let k1=class extends Fs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};class ci{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class z1 extends Vr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Xi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Xi.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const fo="\\[\\]\\.:\\/",B1=new RegExp("["+fo+"]","g"),po="[^"+fo+"]",V1="[^"+fo.replace("\\.","")+"]",H1=/((?:WC+[\/:])*)/.source.replace("WC",po),G1=/(WCOD+)?/.source.replace("WCOD",V1),W1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",po),Z1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",po),X1=new RegExp("^"+H1+G1+W1+Z1+"$"),q1=["material","materials","bones","map"];class j1{constructor(e,t,n){const i=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class je{constructor(e,t,n){this.path=t,this.parsedPath=n||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,n):new je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(B1,"")}static parseTrackName(e){const t=X1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);q1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[i];if(a===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=j1;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);function fc(r){let e;const t=r[37].default,n=zt(t,r,r[36],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&32)&&Vt(n,t,i,i[36],e?Bt(t,i[36],s,null):Ht(i[36]),null)},i(i){e||(qe(n,i),e=!0)},o(i){$e(n,i),e=!1},d(i){n&&n.d(i)}}}function Y1(r){let e,t,n,i,s,a,o=r[0].scene&&fc(r);return{c(){e=ki("div"),t=ki("canvas"),n=Cu(),o&&o.c(),this.h()},l(c){e=wr(c,"DIV",{class:!0});var u=ce(e);t=wr(u,"CANVAS",{class:!0}),ce(t).forEach(N),n=Pu(u),o&&o.l(u),u.forEach(N),this.h()},h(){$(t,"class","svelte-1uqz219"),$(e,"class","container svelte-1uqz219")},m(c,u){le(c,e,u),rn(e,t),r[38](t),rn(e,n),o&&o.m(e,null),r[39](e),i=!0,s||(a=Lu(window,"resize",r[2]),s=!0)},p(c,u){c[0].scene?o?(o.p(c,u),u[0]&1&&qe(o,1)):(o=fc(c),o.c(),qe(o,1),o.m(e,null)):o&&(ji(),$e(o,1,1,()=>{o=null}),Yi())},i(c){i||(qe(o),i=!0)},o(c){$e(o),i=!1},d(c){c&&N(e),r[38](null),o&&o.d(),r[39](null),s=!1,a()}}}function K1(r,e,t){let{$$slots:n={},$$scope:i}=e,{background:s=null}=e,{environment:a=null}=e,{fog:o=null}=e,{overrideMaterial:c=null}=e,{precision:u="highp"}=e,{powerPreference:h="default"}=e,{alpha:f=!1}=e,{premultipliedAlpha:l=!0}=e,{antialias:d=!1}=e,{stencil:g=!0}=e,{preserveDrawingBuffer:m=!1}=e,{failIfMajorPerformanceCaveat:p=!1}=e,{depth:_=!0}=e,{logarithmicDepthBuffer:b=!1}=e,{autoClear:y=!0}=e,{autoClearColor:v=!0}=e,{autoClearDepth:w=!0}=e,{autoClearStencil:A=!0}=e,{checkShaderErrors:C=!0}=e,{gammaFactor:x=2}=e,{localClippingEnabled:E=!1}=e,{physicallyCorrectLights:I=!1}=e,{outputEncoding:X=void 0}=e,{clippingPlanes:Q=[]}=e,{shadows:F=void 0}=e,{toneMapping:P=xn}=e,{toneMappingExposure:k=1}=e,{width:J=void 0}=e,{height:ee=void 0}=e,{pixelRatio:W=typeof devicePixelRatio<"u"?devicePixelRatio:1}=e;function ie(){return Y.renderer.info}let K,V,U,ae=null;const re=q=>q(),ue=()=>{ae||(ae=requestAnimationFrame(()=>{ae=null,G.forEach(re),Y.renderer.render(Y.scene,Y.camera.object)}))},G=[],Y=Kh({canvas:null,scene:null,renderer:null,camera:{object:null,callback:()=>{console.warn("no camera is set")},set:(q,Ee)=>{t(0,Y.camera.object=q,Y),t(0,Y.camera.callback=Ee,Y),Y.controls.callback&&Y.controls.callback(Y.camera.object,Y.canvas),ue()}},controls:{object:null,callback:null,set:q=>{t(0,Y.controls.callback=q,Y),Y.camera.object&&t(0,Y.controls.object=q(Y.camera.object,Y.canvas),Y)}},before_render(q){G.push(q),qa(()=>{const Ee=G.indexOf(q);G.splice(Ee,1)})},invalidate:ue});Cs(()=>(t(0,Y.renderer=new cu({canvas:Y.canvas,precision:u,powerPreference:h,alpha:f,premultipliedAlpha:l,antialias:d,stencil:g,preserveDrawingBuffer:m,failIfMajorPerformanceCaveat:p,depth:_,logarithmicDepthBuffer:b}),Y),t(0,Y.scene=new o1,Y),xe(),()=>{console.log("disposing of renderer"),Y.renderer.forceContextLoss(),Y.renderer.dispose()}));const xe=()=>{J===void 0&&t(34,K=U.clientWidth/W),ee===void 0&&t(35,V=U.clientHeight/W)};function Ae(q){Ss[q?"unshift":"push"](()=>{Y.canvas=q,t(0,Y),t(3,s),t(4,a),t(5,o),t(6,c),t(17,y),t(18,v),t(19,w),t(20,A),t(21,C),t(22,x),t(23,E),t(24,I),t(25,X),t(26,Q),t(28,P),t(29,k),t(27,F)})}function _e(q){Ss[q?"unshift":"push"](()=>{U=q,t(1,U)})}return r.$$set=q=>{"background"in q&&t(3,s=q.background),"environment"in q&&t(4,a=q.environment),"fog"in q&&t(5,o=q.fog),"overrideMaterial"in q&&t(6,c=q.overrideMaterial),"precision"in q&&t(7,u=q.precision),"powerPreference"in q&&t(8,h=q.powerPreference),"alpha"in q&&t(9,f=q.alpha),"premultipliedAlpha"in q&&t(10,l=q.premultipliedAlpha),"antialias"in q&&t(11,d=q.antialias),"stencil"in q&&t(12,g=q.stencil),"preserveDrawingBuffer"in q&&t(13,m=q.preserveDrawingBuffer),"failIfMajorPerformanceCaveat"in q&&t(14,p=q.failIfMajorPerformanceCaveat),"depth"in q&&t(15,_=q.depth),"logarithmicDepthBuffer"in q&&t(16,b=q.logarithmicDepthBuffer),"autoClear"in q&&t(17,y=q.autoClear),"autoClearColor"in q&&t(18,v=q.autoClearColor),"autoClearDepth"in q&&t(19,w=q.autoClearDepth),"autoClearStencil"in q&&t(20,A=q.autoClearStencil),"checkShaderErrors"in q&&t(21,C=q.checkShaderErrors),"gammaFactor"in q&&t(22,x=q.gammaFactor),"localClippingEnabled"in q&&t(23,E=q.localClippingEnabled),"physicallyCorrectLights"in q&&t(24,I=q.physicallyCorrectLights),"outputEncoding"in q&&t(25,X=q.outputEncoding),"clippingPlanes"in q&&t(26,Q=q.clippingPlanes),"shadows"in q&&t(27,F=q.shadows),"toneMapping"in q&&t(28,P=q.toneMapping),"toneMappingExposure"in q&&t(29,k=q.toneMappingExposure),"width"in q&&t(30,J=q.width),"height"in q&&t(31,ee=q.height),"pixelRatio"in q&&t(32,W=q.pixelRatio),"$$scope"in q&&t(36,i=q.$$scope)},r.$$.update=()=>{if(r.$$.dirty[0]&121&&Y.scene&&(t(0,Y.scene.background=s,Y),t(0,Y.scene.environment=a,Y),t(0,Y.scene.fog=o,Y),t(0,Y.scene.overrideMaterial=c,Y)),r.$$.dirty[0]&1073610753&&Y.renderer&&(t(0,Y.renderer.autoClear=y,Y),t(0,Y.renderer.autoClearColor=v,Y),t(0,Y.renderer.autoClearDepth=w,Y),t(0,Y.renderer.autoClearStencil=A,Y),t(0,Y.renderer.debug.checkShaderErrors=C,Y),t(0,Y.renderer.gammaFactor=x,Y),t(0,Y.renderer.localClippingEnabled=E,Y),t(0,Y.renderer.physicallyCorrectLights=I,Y),X!=null&&t(0,Y.renderer.outputEncoding=X,Y),t(0,Y.renderer.clippingPlanes=Q,Y),t(0,Y.renderer.toneMapping=P,Y),t(0,Y.renderer.toneMappingExposure=k,Y),F?(t(0,Y.renderer.shadowMap.enabled=!0,Y),t(0,Y.renderer.shadowMap.autoUpdate=!0,Y),t(0,Y.renderer.shadowMap.type=F===!0?$a:F,Y)):t(0,Y.renderer.shadowMap.enabled=!1,Y),ue()),r.$$.dirty[0]&1073741825|r.$$.dirty[1]&27&&Y.renderer){const q=J!==void 0?J:K,Ee=ee!==void 0?ee:V;Y.renderer.setSize(q,Ee,!1),Y.camera.callback(q,Ee),Y.renderer.setPixelRatio(W),ue()}},[Y,U,xe,s,a,o,c,u,h,f,l,d,g,m,p,_,b,y,v,w,A,C,x,E,I,X,Q,F,P,k,J,ee,W,ie,K,V,i,n,Ae,_e]}class av extends Ft{constructor(e){super(),Nt(this,e,K1,Y1,St,{background:3,environment:4,fog:5,overrideMaterial:6,precision:7,powerPreference:8,alpha:9,premultipliedAlpha:10,antialias:11,stencil:12,preserveDrawingBuffer:13,failIfMajorPerformanceCaveat:14,depth:15,logarithmicDepthBuffer:16,autoClear:17,autoClearColor:18,autoClearDepth:19,autoClearStencil:20,checkShaderErrors:21,gammaFactor:22,localClippingEnabled:23,physicallyCorrectLights:24,outputEncoding:25,clippingPlanes:26,shadows:27,toneMapping:28,toneMappingExposure:29,width:30,height:31,pixelRatio:32,info:33},null,[-1,-1])}get info(){return this.$$.ctx[33]}}function J1(r,e,t,n){r.position.set(e[0],e[1],e[2]),r.rotation.set(t[0],t[1],t[2],t[3]),typeof n=="number"?r.scale.set(n,n,n):r.scale.set(n[0],n[1],n[2])}let Q1=[0,0,0],$1=[0,0,0],e_=[1,1,1];new fn;new x1;function dc(r){let e;const t=r[6].default,n=zt(t,r,r[5],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&32)&&Vt(n,t,i,i[5],e?Bt(t,i[5],s,null):Ht(i[5]),null)},i(i){e||(qe(n,i),e=!0)},o(i){$e(n,i),e=!1},d(i){n&&n.d(i)}}}function t_(r){let e,t,n=r[0]&&dc(r);return{c(){n&&n.c(),e=Wn()},l(i){n&&n.l(i),e=Wn()},m(i,s){n&&n.m(i,s),le(i,e,s),t=!0},p(i,[s]){i[0]?n?(n.p(i,s),s&1&&qe(n,1)):(n=dc(i),n.c(),qe(n,1),n.m(e.parentNode,e)):n&&(ji(),$e(n,1,1,()=>{n=null}),Yi())},i(i){t||(qe(n),t=!0)},o(i){$e(n),t=!1},d(i){n&&n.d(i),i&&N(e)}}}function n_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:a=Q1}=e,{rotation:o=$1}=e,{scale:c=e_}=e;const{root:u,self:h}=Ja(new nt);let f;return r.$$set=l=>{"object"in l&&t(0,s=l.object),"position"in l&&t(1,a=l.position),"rotation"in l&&t(2,o=l.rotation),"scale"in l&&t(3,c=l.scale),"$$scope"in l&&t(5,i=l.$$scope)},r.$$.update=()=>{r.$$.dirty&17&&(f&&h.remove(f),s&&h.add(s),t(4,f=s),u.invalidate()),r.$$.dirty&14&&(J1(h,a,o,c),u.invalidate())},[s,a,o,c,f,i,n]}class ov extends Ft{constructor(e){super(),Nt(this,e,n_,t_,St,{object:0,position:1,rotation:2,scale:3})}}function i_(r,e,t){let{fov:n=45}=e,{near:i=.1}=e,{far:s=2e3}=e,{zoom:a=1}=e,{viewOffset:o=void 0}=e,{position:c=[0,0,5]}=e,{target:u=[0,0,0]}=e;const{root:h,self:f}=Ja(new Dt),l=new R;return h.camera.set(f,(d,g)=>{t(7,f.aspect=d/g,f),f.updateProjectionMatrix()}),r.$$set=d=>{"fov"in d&&t(0,n=d.fov),"near"in d&&t(1,i=d.near),"far"in d&&t(2,s=d.far),"zoom"in d&&t(3,a=d.zoom),"viewOffset"in d&&t(4,o=d.viewOffset),"position"in d&&t(5,c=d.position),"target"in d&&t(6,u=d.target)},r.$$.update=()=>{r.$$.dirty&255&&(t(7,f.fov=n,f),t(7,f.near=i,f),t(7,f.far=s,f),t(7,f.zoom=a,f),o&&f.setViewOffset(o.fullWidth,o.fullHeight,o.x,o.y,o.width,o.height),f.position.set(c[0],c[1],c[2]),l.set(u[0],u[1],u[2]),f.lookAt(l),f.updateProjectionMatrix(),h.invalidate())},[n,i,s,a,o,c,u,f]}class lv extends Ft{constructor(e){super(),Nt(this,e,i_,null,St,{fov:0,near:1,far:2,zoom:3,viewOffset:4,position:5,target:6})}}function cv(r){Cs(()=>{let e;return requestAnimationFrame(function t(){e=requestAnimationFrame(t),r()}),()=>{cancelAnimationFrame(e)}})}function r_(r,e,t){let{color:n=16777215}=e,{intensity:i=1}=e;const{root:s,self:a}=Ja(new k1(n,i));return r.$$set=o=>{"color"in o&&t(0,n=o.color),"intensity"in o&&t(1,i=o.intensity)},r.$$.update=()=>{r.$$.dirty&7&&(a.color.set(n),t(2,a.intensity=i,a),s.invalidate())},[n,i,a]}class uv extends Ft{constructor(e){super(),Nt(this,e,r_,null,St,{color:0,intensity:1})}}class hv extends Vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new c_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new v_(t)})}load(e,t,n,i){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=ci.extractUrlBase(e),this.manager.itemStart(e);const o=function(u){i?i(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new gu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(ci.decodeText(new Uint8Array(e,0,4))===_u){try{a[Be.KHR_BINARY_GLTF]=new y_(e)}catch(h){i&&i(h);return}s=JSON.parse(a[Be.KHR_BINARY_GLTF].content)}else s=JSON.parse(ci.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new I_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case Be.KHR_MATERIALS_UNLIT:a[h]=new o_;break;case Be.KHR_DRACO_MESH_COMPRESSION:a[h]=new M_(s,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:a[h]=new b_;break;case Be.KHR_MESH_QUANTIZATION:a[h]=new S_;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function s_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class a_{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const h=new Ie(16777215);c.color!==void 0&&h.fromArray(c.color);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new U1(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new F1(h),u.distance=f;break;case"spot":u=new I1(h),u.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,Vn(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class o_{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Xe))}return Promise.all(i)}}class l_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class c_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(o,o)}return Promise.all(s)}}class u_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class h_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Xe)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class f_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class d_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ie(o[0],o[1],o[2]),Promise.all(s)}}class p_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class m_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ie(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Xe)),Promise.all(s)}}class g_{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class __{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class x_{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,u=i.byteLength||0,h=i.count,f=i.byteStride,l=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,l,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(d),h,f,l,i.mode,i.filter),d})})}else return null}}class v_{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==Qt.TRIANGLES&&u.mode!==Qt.TRIANGLE_STRIP&&u.mode!==Qt.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const u in a)o.push(this.parser.getDependency("accessor",a[u]).then(h=>(c[u]=h,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{const h=u.pop(),f=h.isGroup?h.children:[h],l=u[0].count,d=[];for(const g of f){const m=new Fe,p=new R,_=new Xn,b=new R(1,1,1),y=new p1(g.geometry,g.material,l);for(let v=0;v<l;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&_.fromBufferAttribute(c.ROTATION,v),c.SCALE&&b.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,m.compose(p,_,b));for(const v in c)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);nt.prototype.copy.call(y,g),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const _u="glTF",pr=12,pc={JSON:1313821514,BIN:5130562};class y_{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,pr);if(this.header={magic:ci.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-pr,i=new DataView(e,pr);let s=0;for(;s<n;){const a=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===pc.JSON){const c=new Uint8Array(e,pr+s,a);this.content=ci.decodeText(c)}else if(o===pc.BIN){const c=pr+s;this.body=e.slice(c,c+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class M_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(const h in a){const f=Wa[h]||h.toLowerCase();o[f]=a[h]}for(const h in e.attributes){const f=Wa[h]||h.toLowerCase();if(a[h]!==void 0){const l=n.accessors[e.attributes[h]],d=Ui[l.componentType];u[f]=d.name,c[f]=l.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(f){i.decodeDracoFile(h,function(l){for(const d in l.attributes){const g=l.attributes[d],m=c[d];m!==void 0&&(g.normalized=m)}f(l)},o,u)})})}}class b_{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class S_{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class xu extends Br{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,h=i-t,f=(n-t)/h,l=f*f,d=l*f,g=e*u,m=g-u,p=-2*d+3*l,_=d-l,b=1-p,y=_-l+f;for(let v=0;v!==o;v++){const w=a[m+v+o],A=a[m+v+c]*h,C=a[g+v+o],x=a[g+v]*h;s[v]=b*w+y*A+p*C+_*x}return s}}const w_=new Xn;class T_ extends xu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return w_.fromArray(s).normalize().toArray(s),s}}const Qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ui={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mc={9728:mt,9729:Ot,9984:ka,9985:Gc,9986:vs,9987:ui},gc={33071:$t,33648:Ts,10497:Hi},wa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},A_={CUBICSPLINE:void 0,LINEAR:Wi,STEP:Rr},Ta={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new uo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),r.DefaultMaterial}function mr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function C_(r,e,t){let n=!1,i=!1,s=!1;for(let u=0,h=e.length;u<h;u++){const f=e[u];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let u=0,h=e.length;u<h;u++){const f=e[u];if(n){const l=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;a.push(l)}if(i){const l=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;o.push(l)}if(s){const l=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;c.push(l)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],l=u[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=l),r.morphTargetsRelative=!0,r})}function L_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R_(r){const e=r.extensions&&r.extensions[Be.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+_c(e.attributes):t=r.indices+":"+_c(r.attributes)+":"+r.mode,t}function _c(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Za(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function P_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const D_=new Fe;class I_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new s_,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new P1(this.options.manager):this.textureLoader=new z1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};mr(s,o,i),Vn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[u,h]of a.children.entries())s(h,o.children[u])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(ci.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=wa[i.type],o=Ui[i.componentType],c=i.normalized===!0,u=new o(i.count*a);return Promise.resolve(new It(u,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=wa[i.type],u=Ui[i.componentType],h=u.BYTES_PER_ELEMENT,f=h*c,l=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,p;if(d&&d!==f){const _=Math.floor(l/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let y=t.cache.get(b);y||(m=new u(o,_*d,i.count*d/h),y=new l1(m,d/h),t.cache.add(b,y)),p=new oo(y,c,l%d/h,g)}else o===null?m=new u(i.count*c):m=new u(o,l,i.count*c),p=new It(m,c,g);if(i.sparse!==void 0){const _=wa.SCALAR,b=Ui[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,w=new b(a[1],y,i.sparse.count*_),A=new u(a[2],v,i.sparse.count*c);o!==null&&(p=new It(p.array.slice(),p.itemSize,p.normalized));for(let C=0,x=w.length;C<x;C++){const E=w[C];if(p.setX(E,A[C*c]),c>=2&&p.setY(E,A[C*c+1]),c>=3&&p.setZ(E,A[C*c+2]),c>=4&&p.setW(E,A[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"";const l=(s.samplers||{})[a.sampler]||{};return h.magFilter=mc[l.magFilter]||Ot,h.minFilter=mc[l.minFilter]||ui,h.wrapS=gc[l.wrapS]||Hi,h.wrapT=gc[l.wrapT]||Hi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){u=!0;const l=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(l),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(f){return new Promise(function(l,d){let g=l;t.isImageBitmapLoader===!0&&(g=function(m){const p=new _t(m);p.needsUpdate=!0,l(p)}),t.load(ci.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return u===!0&&o.revokeObjectURL(c),f.userData.mimeType=a.mimeType||P_(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Be.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new fu,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new hu,un.prototype.copy.call(c,n),c.color.copy(n.color),this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return uo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},u=[];if(c[Be.KHR_MATERIALS_UNLIT]){const f=i[Be.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),u.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const l=f.baseColorFactor;o.color.fromArray(l),o.opacity=l[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",f.baseColorTexture,Xe)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(l){return l.getMaterialType&&l.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(l){return l.extendMaterialParams&&l.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ds);const h=s.alphaMode||Ta.OPAQUE;if(h===Ta.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ta.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==si&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ze(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&a!==si&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==si&&(o.emissive=new Ie().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==si&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Xe)),Promise.all(u).then(function(){const f=new a(o);return s.name&&(f.name=s.name),Vn(f,s),t.associations.set(f,{materials:e}),s.extensions&&mr(i,f,s),f})}createUniqueName(e){const t=je.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return xc(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o],h=R_(u),f=i[h];if(f)a.push(f.promise);else{let l;u.extensions&&u.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?l=s(u):l=xc(new fn,u,t),i[h]={primitive:u,promise:l},a.push(l)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,u=a.length;c<u;c++){const h=a[c].material===void 0?E_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let d=0,g=h.length;d<g;d++){const m=h[d],p=a[d];let _;const b=u[d];if(p.mode===Qt.TRIANGLES||p.mode===Qt.TRIANGLE_STRIP||p.mode===Qt.TRIANGLE_FAN||p.mode===void 0)_=s.isSkinnedMesh===!0?new u1(m,b):new tn(m,b),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),p.mode===Qt.TRIANGLE_STRIP?_.geometry=vc(_.geometry,Gf):p.mode===Qt.TRIANGLE_FAN&&(_.geometry=vc(_.geometry,Zc));else if(p.mode===Qt.LINES)_=new m1(m,b);else if(p.mode===Qt.LINE_STRIP)_=new co(m,b);else if(p.mode===Qt.LINE_LOOP)_=new g1(m,b);else if(p.mode===Qt.POINTS)_=new _1(m,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&L_(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Vn(_,s),p.extensions&&mr(i,_,p),t.assignFinalMaterial(_),f.push(_)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return f[0];const l=new ai;t.associations.set(l,{meshes:e});for(let d=0,g=f.length;d<g;d++)l.add(f[d]);return l})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(od.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new so(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let u=0,h=a.length;u<h;u++){const f=a[u];if(f){o.push(f);const l=new Fe;s!==null&&l.fromArray(s.array,u*16),c.push(l)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new lo(o,c)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],a=[],o=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const f=n.channels[u],l=n.samplers[f.sampler],d=f.target,g=d.node,m=n.parameters!==void 0?n.parameters[l.input]:l.input,p=n.parameters!==void 0?n.parameters[l.output]:l.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",p)),o.push(l),c.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],l=u[2],d=u[3],g=u[4],m=[];for(let _=0,b=h.length;_<b;_++){const y=h[_],v=f[_],w=l[_],A=d[_],C=g[_];if(y===void 0)continue;y.updateMatrix();let x;switch(Bn[C.path]){case Bn.weights:x=Nr;break;case Bn.rotation:x=mi;break;case Bn.position:case Bn.scale:default:x=Fr;break}const E=y.name?y.name:y.uuid,I=A.interpolation!==void 0?A_[A.interpolation]:Wi,X=[];Bn[C.path]===Bn.weights?y.traverse(function(F){F.morphTargetInfluences&&X.push(F.name?F.name:F.uuid)}):X.push(E);let Q=w.array;if(w.normalized){const F=Za(Q.constructor),P=new Float32Array(Q.length);for(let k=0,J=Q.length;k<J;k++)P[k]=Q[k]*F;Q=P}for(let F=0,P=X.length;F<P;F++){const k=new x(X[F]+"."+Bn[C.path],v.array,Q,I);A.interpolation==="CUBICSPLINE"&&(k.createInterpolant=function(ee){const W=this instanceof mi?T_:xu;return new W(this.times,this.values,this.getValueSize()/3,ee)},k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(k)}}const p=n.name?n.name:"animation_"+e;return new w1(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=i.weights.length;c<u;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"";return function(){const o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)});const u=[],h=s.children||[];for(let l=0,d=h.length;l<d;l++)u.push(i.getDependency("node",h[l]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(u),f])}().then(function(o){const c=o[0],u=o[1],h=o[2];let f;if(s.isBone===!0?f=new uu:c.length>1?f=new ai:c.length===1?f=c[0]:f=new nt,f!==c[0])for(let l=0,d=c.length;l<d;l++)f.add(c[l]);if(s.name&&(f.userData.name=s.name,f.name=a),Vn(f,s),s.extensions&&mr(n,f,s),s.matrix!==void 0){const l=new Fe;l.fromArray(s.matrix),f.applyMatrix4(l)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);i.associations.has(f)||i.associations.set(f,{}),i.associations.get(f).nodes=e,h!==null&&f.traverse(function(l){l.isSkinnedMesh&&l.bind(h,D_)});for(let l=0,d=u.length;l<d;l++)f.add(u[l]);return f})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ai;n.name&&(s.name=i.createUniqueName(n.name)),Vn(s,n),n.extensions&&mr(t,s,n);const a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,f=c.length;h<f;h++)s.add(c[h]);const u=h=>{const f=new Map;for(const[l,d]of i.associations)(l instanceof un||l instanceof _t)&&f.set(l,d);return h.traverse(l=>{const d=i.associations.get(l);d!=null&&f.set(l,d)}),f};return i.associations=u(s),s})}}function N_(r,e,t){const n=e.attributes,i=new Qi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(u[0],u[1],u[2])),o.normalized){const h=Za(Ui[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new R,c=new R;for(let u=0,h=s.length;u<h;u++){const f=s[u];if(f.POSITION!==void 0){const l=t.json.accessors[f.POSITION],d=l.min,g=l.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),l.normalized){const m=Za(Ui[l.componentType]);c.multiplyScalar(m)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new $i;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function xc(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Wa[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Vn(r,e),N_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?C_(r,e.targets,t):r})}function vc(r,e){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Zc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s}function F_(r){let e=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),t;return{c(){t=hn(e)},l(n){t=In(n,e)},m(n,i){le(n,t,i)},p:ge,d(n){n&&N(t)}}}function O_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M208,224a8,8,0,0,1-8,8A104.2,104.2,0,0,1,96,128V51.3L61.7,85.7A8.1,8.1,0,0,1,50.3,74.3l48-48a8.1,8.1,0,0,1,11.4,0l48,48a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L112,51.3V128a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function U_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M204,224a4,4,0,0,1-4,4A100.2,100.2,0,0,1,100,128V41.7L58.8,82.8a4,4,0,0,1-5.6-5.6l48-48a3.9,3.9,0,0,1,5.6,0l48,48a3.9,3.9,0,0,1,0,5.6,3.9,3.9,0,0,1-5.6,0L108,41.7V128a92.1,92.1,0,0,0,92,92A4,4,0,0,1,204,224Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function k_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M206,224a6,6,0,0,1-6,6A102.2,102.2,0,0,1,98,128V46.5L60.2,84.2a5.9,5.9,0,0,1-8.4-8.4l48-48a5.8,5.8,0,0,1,8.4,0l48,48a5.9,5.9,0,1,1-8.4,8.4L110,46.5V128a90.1,90.1,0,0,0,90,90A6,6,0,0,1,206,224Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function z_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M208,224a8,8,0,0,1-8,8A104.2,104.2,0,0,1,96,128V88H56a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l48-48a8.1,8.1,0,0,1,11.4,0l48,48a8.4,8.4,0,0,1,1.7,8.8A8,8,0,0,1,152,88H112v40a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function B_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M208,224a8,8,0,0,1-8,8A104.2,104.2,0,0,1,96,128V51.3L61.7,85.7A8.1,8.1,0,0,1,50.3,74.3l48-48a8.1,8.1,0,0,1,11.4,0l48,48a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L112,51.3V128a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function V_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M212,224a12,12,0,0,1-12,12A108.1,108.1,0,0,1,92,128V61L64.5,88.5a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48a12,12,0,0,1,0,17,12.1,12.1,0,0,1-17,0L116,61v67a84.1,84.1,0,0,0,84,84A12,12,0,0,1,212,224Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function H_(r){let e,t,n,i;const s=r[6].default,a=zt(s,r,r[5],null);function o(l,d){return l[0]==="bold"?V_:l[0]==="duotone"?B_:l[0]==="fill"?z_:l[0]==="light"?k_:l[0]==="thin"?U_:l[0]==="regular"?O_:F_}let c=o(r),u=c(r),h=[{xmlns:"http://www.w3.org/2000/svg"},{width:r[2]},{height:r[2]},{fill:r[1]},{transform:n=r[3]?"scale(-1, 1)":void 0},{viewBox:"0 0 256 256"},r[4]],f={};for(let l=0;l<h.length;l+=1)f=Ye(f,h[l]);return{c(){e=he("svg"),a&&a.c(),t=he("rect"),u.c(),this.h()},l(l){e=fe(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,transform:!0,viewBox:!0});var d=ce(e);a&&a.l(d),t=fe(d,"rect",{width:!0,height:!0,fill:!0}),ce(t).forEach(N),u.l(d),d.forEach(N),this.h()},h(){$(t,"width","256"),$(t,"height","256"),$(t,"fill","none"),bt(e,f)},m(l,d){le(l,e,d),a&&a.m(e,null),rn(e,t),u.m(e,null),i=!0},p(l,[d]){a&&a.p&&(!i||d&32)&&Vt(a,s,l,l[5],i?Bt(s,l[5],d,null):Ht(l[5]),null),c===(c=o(l))&&u?u.p(l,d):(u.d(1),u=c(l),u&&(u.c(),u.m(e,null))),bt(e,f=Nn(h,[{xmlns:"http://www.w3.org/2000/svg"},(!i||d&4)&&{width:l[2]},(!i||d&4)&&{height:l[2]},(!i||d&2)&&{fill:l[1]},(!i||d&8&&n!==(n=l[3]?"scale(-1, 1)":void 0))&&{transform:n},{viewBox:"0 0 256 256"},d&16&&l[4]]))},i(l){i||(qe(a,l),i=!0)},o(l){$e(a,l),i=!1},d(l){l&&N(e),a&&a.d(l),u.d()}}}function G_(r,e,t){const n=["weight","color","size","mirrored"];let i=Mt(e,n),{$$slots:s={},$$scope:a}=e;const o=Ut("iconCtx")||{};let{weight:c=o.weight??"regular"}=e,{color:u=o.color??"currentColor"}=e,{size:h=o.size??"1em"}=e,{mirrored:f=o.mirrored||!1}=e;return r.$$set=l=>{e=Ye(Ye({},e),vn(l)),t(4,i=Mt(e,n)),"weight"in l&&t(0,c=l.weight),"color"in l&&t(1,u=l.color),"size"in l&&t(2,h=l.size),"mirrored"in l&&t(3,f=l.mirrored),"$$scope"in l&&t(5,a=l.$$scope)},[c,u,h,f,i,a,s]}class fv extends Ft{constructor(e){super(),Nt(this,e,G_,H_,St,{weight:0,color:1,size:2,mirrored:3})}}function W_(r){let e=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),t;return{c(){t=hn(e)},l(n){t=In(n,e)},m(n,i){le(n,t,i)},p:ge,d(n){n&&N(t)}}}function Z_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M205.7,85.7a8.2,8.2,0,0,1-11.4,0L160,51.3V128A104.2,104.2,0,0,1,56,232a8,8,0,0,1,0-16,88.1,88.1,0,0,0,88-88V51.3L109.7,85.7A8.1,8.1,0,0,1,98.3,74.3l48-48a8.1,8.1,0,0,1,11.4,0l48,48A8.1,8.1,0,0,1,205.7,85.7Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function X_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M202.8,82.8a3.9,3.9,0,0,1-5.6,0L156,41.7V128A100.2,100.2,0,0,1,56,228a4,4,0,0,1,0-8,92.1,92.1,0,0,0,92-92V41.7L106.8,82.8a4,4,0,0,1-5.6-5.6l48-48a3.9,3.9,0,0,1,5.6,0l48,48A3.9,3.9,0,0,1,202.8,82.8Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function q_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M204.2,84.2a5.8,5.8,0,0,1-8.4,0L158,46.5V128A102.2,102.2,0,0,1,56,230a6,6,0,0,1,0-12,90.1,90.1,0,0,0,90-90V46.5L108.2,84.2a5.9,5.9,0,0,1-8.4-8.4l48-48a5.8,5.8,0,0,1,8.4,0l48,48A5.8,5.8,0,0,1,204.2,84.2Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function j_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M207.4,83.1A8,8,0,0,1,200,88H160v40A104.2,104.2,0,0,1,56,232a8,8,0,0,1,0-16,88.1,88.1,0,0,0,88-88V88H104a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l48-48a8.1,8.1,0,0,1,11.4,0l48,48A8.4,8.4,0,0,1,207.4,83.1Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Y_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M205.7,85.7a8.2,8.2,0,0,1-11.4,0L160,51.3V128A104.2,104.2,0,0,1,56,232a8,8,0,0,1,0-16,88.1,88.1,0,0,0,88-88V51.3L109.7,85.7A8.1,8.1,0,0,1,98.3,74.3l48-48a8.1,8.1,0,0,1,11.4,0l48,48A8.1,8.1,0,0,1,205.7,85.7Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function K_(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M208.5,88.5a12.1,12.1,0,0,1-17,0L164,61v67A108.1,108.1,0,0,1,56,236a12,12,0,0,1,0-24,84.1,84.1,0,0,0,84-84V61L112.5,88.5a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48A12,12,0,0,1,208.5,88.5Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function J_(r){let e,t,n,i;const s=r[6].default,a=zt(s,r,r[5],null);function o(l,d){return l[0]==="bold"?K_:l[0]==="duotone"?Y_:l[0]==="fill"?j_:l[0]==="light"?q_:l[0]==="thin"?X_:l[0]==="regular"?Z_:W_}let c=o(r),u=c(r),h=[{xmlns:"http://www.w3.org/2000/svg"},{width:r[2]},{height:r[2]},{fill:r[1]},{transform:n=r[3]?"scale(-1, 1)":void 0},{viewBox:"0 0 256 256"},r[4]],f={};for(let l=0;l<h.length;l+=1)f=Ye(f,h[l]);return{c(){e=he("svg"),a&&a.c(),t=he("rect"),u.c(),this.h()},l(l){e=fe(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,transform:!0,viewBox:!0});var d=ce(e);a&&a.l(d),t=fe(d,"rect",{width:!0,height:!0,fill:!0}),ce(t).forEach(N),u.l(d),d.forEach(N),this.h()},h(){$(t,"width","256"),$(t,"height","256"),$(t,"fill","none"),bt(e,f)},m(l,d){le(l,e,d),a&&a.m(e,null),rn(e,t),u.m(e,null),i=!0},p(l,[d]){a&&a.p&&(!i||d&32)&&Vt(a,s,l,l[5],i?Bt(s,l[5],d,null):Ht(l[5]),null),c===(c=o(l))&&u?u.p(l,d):(u.d(1),u=c(l),u&&(u.c(),u.m(e,null))),bt(e,f=Nn(h,[{xmlns:"http://www.w3.org/2000/svg"},(!i||d&4)&&{width:l[2]},(!i||d&4)&&{height:l[2]},(!i||d&2)&&{fill:l[1]},(!i||d&8&&n!==(n=l[3]?"scale(-1, 1)":void 0))&&{transform:n},{viewBox:"0 0 256 256"},d&16&&l[4]]))},i(l){i||(qe(a,l),i=!0)},o(l){$e(a,l),i=!1},d(l){l&&N(e),a&&a.d(l),u.d()}}}function Q_(r,e,t){const n=["weight","color","size","mirrored"];let i=Mt(e,n),{$$slots:s={},$$scope:a}=e;const o=Ut("iconCtx")||{};let{weight:c=o.weight??"regular"}=e,{color:u=o.color??"currentColor"}=e,{size:h=o.size??"1em"}=e,{mirrored:f=o.mirrored||!1}=e;return r.$$set=l=>{e=Ye(Ye({},e),vn(l)),t(4,i=Mt(e,n)),"weight"in l&&t(0,c=l.weight),"color"in l&&t(1,u=l.color),"size"in l&&t(2,h=l.size),"mirrored"in l&&t(3,f=l.mirrored),"$$scope"in l&&t(5,a=l.$$scope)},[c,u,h,f,i,a,s]}class dv extends Ft{constructor(e){super(),Nt(this,e,Q_,J_,St,{weight:0,color:1,size:2,mirrored:3})}}function $_(r){let e=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),t;return{c(){t=hn(e)},l(n){t=In(n,e)},m(n,i){le(n,t,i)},p:ge,d(n){n&&N(t)}}}function ex(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm88,72a8,8,0,0,1-8,8H169a32.1,32.1,0,0,0,31,24,31.5,31.5,0,0,0,22.6-9.4,8,8,0,0,1,11.3,0,7.9,7.9,0,0,1,0,11.3A47.4,47.4,0,0,1,200,200a48,48,0,1,1,48-48Zm-17-8a32,32,0,0,0-62,0Zm-91,14a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H86a38,38,0,0,1,28.3,63.3A42,42,0,0,1,140,158ZM40,116H86a22,22,0,0,0,0-44H40Zm84,42a26.1,26.1,0,0,0-26-26H40v52H98A26.1,26.1,0,0,0,124,158Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function tx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M164,80a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H168A4,4,0,0,1,164,80Zm80,72a4,4,0,0,1-4,4H164.2a36.1,36.1,0,0,0,61.3,21.5,4,4,0,0,1,5.6,5.6A44,44,0,1,1,244,152Zm-8.2-4a36,36,0,0,0-71.6,0ZM136,158a38,38,0,0,1-38,38H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H86a34,34,0,0,1,20.7,61A38,38,0,0,1,136,158ZM36,120H86a26,26,0,0,0,0-52H36Zm92,38a30.1,30.1,0,0,0-30-30H36v60H98A30.1,30.1,0,0,0,128,158Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function nx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M162,80a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H168A6,6,0,0,1,162,80Zm84,72a6,6,0,0,1-6,6H166.5A34.1,34.1,0,0,0,200,186a33.3,33.3,0,0,0,24-10,6.1,6.1,0,0,1,8.5,0,5.9,5.9,0,0,1,0,8.5A46,46,0,1,1,246,152Zm-12.5-6a34,34,0,0,0-67,0ZM138,158a40,40,0,0,1-40,40H32a6,6,0,0,1-6-6V64a6,6,0,0,1,6-6H86a36,36,0,0,1,24.8,62.1A40,40,0,0,1,138,158ZM38,118H86a24,24,0,0,0,0-48H38Zm88,40a28.1,28.1,0,0,0-28-28H38v56H98A28.1,28.1,0,0,0,126,158Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function ix(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm88,72a8,8,0,0,1-8,8H169a32.1,32.1,0,0,0,31,24,31.5,31.5,0,0,0,22.6-9.4,8,8,0,0,1,11.3,0,7.9,7.9,0,0,1,0,11.3A47.4,47.4,0,0,1,200,200a48,48,0,1,1,48-48Zm-17-8a32,32,0,0,0-62,0Zm-91,14a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H86a38,38,0,0,1,28.3,63.3A42,42,0,0,1,140,158ZM40,116H86a22,22,0,0,0,0-44H40Zm84,42a26.1,26.1,0,0,0-26-26H40v52H98A26.1,26.1,0,0,0,124,158Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function rx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm88,72a8,8,0,0,1-8,8H169a32.1,32.1,0,0,0,31,24,31.5,31.5,0,0,0,22.6-9.4,8,8,0,0,1,11.3,0,7.9,7.9,0,0,1,0,11.3A47.4,47.4,0,0,1,200,200a48,48,0,1,1,48-48Zm-17-8a32,32,0,0,0-62,0Zm-91,14a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H86a38,38,0,0,1,28.3,63.3A42,42,0,0,1,140,158ZM40,116H86a22,22,0,0,0,0-44H40Zm84,42a26.1,26.1,0,0,0-26-26H40v52H98A26.1,26.1,0,0,0,124,158Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function sx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M156,76a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H168A12,12,0,0,1,156,76Zm-20,82a46,46,0,0,1-46,46H28a12,12,0,0,1-12-12V64A12,12,0,0,1,28,52H78a42,42,0,0,1,34.5,65.9A46,46,0,0,1,136,158ZM40,112H78a18,18,0,0,0,0-36H40Zm72,46a22.1,22.1,0,0,0-22-22H40v44H90A22.1,22.1,0,0,0,112,158Zm140-6a12,12,0,0,1-12,12H174.7A28,28,0,0,0,200,180a27,27,0,0,0,12.2-2.8,12,12,0,0,1,10.5,21.6A52,52,0,1,1,252,152Zm-26.7-12a28,28,0,0,0-50.6,0Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function ax(r){let e,t,n,i;const s=r[6].default,a=zt(s,r,r[5],null);function o(l,d){return l[0]==="bold"?sx:l[0]==="duotone"?rx:l[0]==="fill"?ix:l[0]==="light"?nx:l[0]==="thin"?tx:l[0]==="regular"?ex:$_}let c=o(r),u=c(r),h=[{xmlns:"http://www.w3.org/2000/svg"},{width:r[2]},{height:r[2]},{fill:r[1]},{transform:n=r[3]?"scale(-1, 1)":void 0},{viewBox:"0 0 256 256"},r[4]],f={};for(let l=0;l<h.length;l+=1)f=Ye(f,h[l]);return{c(){e=he("svg"),a&&a.c(),t=he("rect"),u.c(),this.h()},l(l){e=fe(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,transform:!0,viewBox:!0});var d=ce(e);a&&a.l(d),t=fe(d,"rect",{width:!0,height:!0,fill:!0}),ce(t).forEach(N),u.l(d),d.forEach(N),this.h()},h(){$(t,"width","256"),$(t,"height","256"),$(t,"fill","none"),bt(e,f)},m(l,d){le(l,e,d),a&&a.m(e,null),rn(e,t),u.m(e,null),i=!0},p(l,[d]){a&&a.p&&(!i||d&32)&&Vt(a,s,l,l[5],i?Bt(s,l[5],d,null):Ht(l[5]),null),c===(c=o(l))&&u?u.p(l,d):(u.d(1),u=c(l),u&&(u.c(),u.m(e,null))),bt(e,f=Nn(h,[{xmlns:"http://www.w3.org/2000/svg"},(!i||d&4)&&{width:l[2]},(!i||d&4)&&{height:l[2]},(!i||d&2)&&{fill:l[1]},(!i||d&8&&n!==(n=l[3]?"scale(-1, 1)":void 0))&&{transform:n},{viewBox:"0 0 256 256"},d&16&&l[4]]))},i(l){i||(qe(a,l),i=!0)},o(l){$e(a,l),i=!1},d(l){l&&N(e),a&&a.d(l),u.d()}}}function ox(r,e,t){const n=["weight","color","size","mirrored"];let i=Mt(e,n),{$$slots:s={},$$scope:a}=e;const o=Ut("iconCtx")||{};let{weight:c=o.weight??"regular"}=e,{color:u=o.color??"currentColor"}=e,{size:h=o.size??"1em"}=e,{mirrored:f=o.mirrored||!1}=e;return r.$$set=l=>{e=Ye(Ye({},e),vn(l)),t(4,i=Mt(e,n)),"weight"in l&&t(0,c=l.weight),"color"in l&&t(1,u=l.color),"size"in l&&t(2,h=l.size),"mirrored"in l&&t(3,f=l.mirrored),"$$scope"in l&&t(5,a=l.$$scope)},[c,u,h,f,i,a,s]}class pv extends Ft{constructor(e){super(),Nt(this,e,ox,ax,St,{weight:0,color:1,size:2,mirrored:3})}}function lx(r){let e=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),t;return{c(){t=hn(e)},l(n){t=In(n,e)},m(n,i){le(n,t,i)},p:ge,d(n){n&&N(t)}}}function cx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M232,128.7V128a104.1,104.1,0,0,0-38.3-80.6l-.6-.5-.7-.5A104,104,0,0,0,83,34.2l-1.3.7A104.4,104.4,0,0,0,26,107.5v.2h0A103.7,103.7,0,0,0,65.6,211.1l1.3,1H67a104,104,0,0,0,95.3,14l1.1-.4A104.2,104.2,0,0,0,232,128.9Zm-16.4-8.5L208,120a170.1,170.1,0,0,0-43.9,5.8A166.2,166.2,0,0,0,150.6,96a167.1,167.1,0,0,0,38.2-31.6A87.6,87.6,0,0,1,215.6,120.2ZM176.3,54.5a150.4,150.4,0,0,1-34.3,28,170.5,170.5,0,0,0-38.7-39,88.1,88.1,0,0,1,73,11ZM85.6,50.9a152.8,152.8,0,0,1,42.1,39.2A153.3,153.3,0,0,1,64,104a152.7,152.7,0,0,1-20.3-1.4A88.5,88.5,0,0,1,85.6,50.9ZM40,128c0-3.3.2-6.5.5-9.6A184.3,184.3,0,0,0,64,120a167.4,167.4,0,0,0,72.5-16.4,150.3,150.3,0,0,1,12.3,27.1,177.8,177.8,0,0,0-24.6,11.6,169.1,169.1,0,0,0-55,51.1A87.9,87.9,0,0,1,40,128Zm42,75a151.2,151.2,0,0,1,71.2-56.8,156.3,156.3,0,0,1,3.7,33.5,153.3,153.3,0,0,1-3.5,32.5A85.3,85.3,0,0,1,128,216,88,88,0,0,1,82,203Zm89.1,1.7a173.1,173.1,0,0,0,1.8-25,171.6,171.6,0,0,0-4.4-38.5A154,154,0,0,1,208,136l7.6.2A88.1,88.1,0,0,1,171.1,204.7Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function ux(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M228,128a99.8,99.8,0,0,0-37.1-77.7l-.3-.3-.4-.3A99.8,99.8,0,0,0,84.5,38l-.7.3A100.3,100.3,0,0,0,30,108.4h-.1A104,104,0,0,0,28,128a99.5,99.5,0,0,0,40.3,80.1l.7.6h.2a99.6,99.6,0,0,0,92,13.5l.6-.2A100.1,100.1,0,0,0,228,128Zm-62.2,83.9a165.8,165.8,0,0,0,3.1-32.2,168.1,168.1,0,0,0-5.2-41.3A157.2,157.2,0,0,1,208,132c4,0,8,.1,11.9.4A92.4,92.4,0,0,1,165.8,211.9Zm54.1-87.5c-3.9-.3-7.9-.4-11.9-.4a165.5,165.5,0,0,0-46.5,6.7A168.7,168.7,0,0,0,146.6,97l-1.5-2.4a166.9,166.9,0,0,0,43.4-35.8A91.5,91.5,0,0,1,219.9,124.4ZM182.3,53.7a155.3,155.3,0,0,1-41.5,34.1A165.8,165.8,0,0,0,94.5,42.3,91.1,91.1,0,0,1,128,36,92.1,92.1,0,0,1,182.3,53.7ZM85.8,46.3a155.8,155.8,0,0,1,47.9,45.3A155.1,155.1,0,0,1,64,108a152.4,152.4,0,0,1-25.3-2.1A92.3,92.3,0,0,1,85.8,46.3ZM36,128a94.9,94.9,0,0,1,1.1-14.2A161.8,161.8,0,0,0,64,116a164.7,164.7,0,0,0,74.1-17.6l1.6,2.7a156.1,156.1,0,0,1,14.2,32.1,156.2,156.2,0,0,0-27.6,12.6A165,165,0,0,0,70,199.4,92,92,0,0,1,36,128Zm40.5,76.2a156.9,156.9,0,0,1,53.8-51.5A161.4,161.4,0,0,1,156,140.9a152.8,152.8,0,0,1,4.9,38.8,158.3,158.3,0,0,1-4.1,35.7,92,92,0,0,1-80.3-11.2Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function hx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M230,128.7V128a101.7,101.7,0,0,0-37.7-79.1l-.5-.5-.5-.4A101.5,101.5,0,0,0,128,26,100.2,100.2,0,0,0,83.9,36.1l-1.2.5A102.5,102.5,0,0,0,28,107.9h0v.2A99.2,99.2,0,0,0,26,128a101.9,101.9,0,0,0,40.9,81.6l1,.8h.2A101.7,101.7,0,0,0,128,230a100.2,100.2,0,0,0,33.9-5.8l.6-.2A102.3,102.3,0,0,0,230,128.9Zm-12.2-6.4c-3.2-.2-6.5-.3-9.8-.3a163.9,163.9,0,0,0-45.2,6.3A175.9,175.9,0,0,0,148.4,96l-.5-.7a168.2,168.2,0,0,0,40.8-33.7A89.7,89.7,0,0,1,217.8,122.3ZM179.3,54.1a152.4,152.4,0,0,1-37.9,31.1A167.9,167.9,0,0,0,98.9,42.8a90.1,90.1,0,0,1,80.4,11.3ZM85.7,48.6a153.9,153.9,0,0,1,45,42.3A154.4,154.4,0,0,1,64,106a158,158,0,0,1-22.8-1.7A90.2,90.2,0,0,1,85.7,48.6ZM38,128a93.9,93.9,0,0,1,.8-11.9A177,177,0,0,0,64,118a165.1,165.1,0,0,0,73.3-17l.7,1.1A157.1,157.1,0,0,1,151.4,132a158.3,158.3,0,0,0-26.1,12.1,165,165,0,0,0-55.7,52.3A89.9,89.9,0,0,1,38,128Zm41.2,75.6a155.8,155.8,0,0,1,75.4-60.1,151.9,151.9,0,0,1,4.3,36.2,149.8,149.8,0,0,1-3.8,34.1,89.8,89.8,0,0,1-75.9-10.2Zm89.3,4.8a172.8,172.8,0,0,0,2.4-28.7,166.9,166.9,0,0,0-4.8-39.9A155.8,155.8,0,0,1,208,134c3.3,0,6.5.1,9.8.3A90.2,90.2,0,0,1,168.5,208.4Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function fx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M93.3,36.9a4,4,0,0,1,.8-7.2,103.7,103.7,0,0,1,88.6,9.9,4,4,0,0,1,1.1,5.9,156.1,156.1,0,0,1-41.9,37A169,169,0,0,0,93.3,36.9ZM127.6,90a154.2,154.2,0,0,0-56-46.9,4.3,4.3,0,0,0-4.1.3A105.1,105.1,0,0,0,29.2,95.5a4,4,0,0,0,3,5.1A151.1,151.1,0,0,0,64,104,150.6,150.6,0,0,0,127.6,90Zm103.8,26.7a104,104,0,0,0-29.2-61.5,4.1,4.1,0,0,0-6,.3,168.3,168.3,0,0,1-45.7,40.4,171.5,171.5,0,0,1,13.6,29.9A167.3,167.3,0,0,1,208,120a171.5,171.5,0,0,1,19,1.1A4,4,0,0,0,231.4,116.7Zm-62.9,24.5a169,169,0,0,1,4.4,38.5,168.1,168.1,0,0,1-4.1,36.8,4,4,0,0,0,5.7,4.5,104.1,104.1,0,0,0,56.6-79.2,4,4,0,0,0-3.5-4.5A141.3,141.3,0,0,0,208,136,151.2,151.2,0,0,0,168.5,141.2Zm-19.7-10.4a142.6,142.6,0,0,0-12.4-27.2A167.2,167.2,0,0,1,64,120a167.3,167.3,0,0,1-34.9-3.7,4,4,0,0,0-4.8,3.6q-.3,4-.3,8.1a103.7,103.7,0,0,0,33,75.9,3.9,3.9,0,0,0,6.1-.9A168.8,168.8,0,0,1,148.8,130.8ZM75.7,213.2a4,4,0,0,0,1.5,5.5A102.9,102.9,0,0,0,128,232a98.3,98.3,0,0,0,18.1-1.6,3.8,3.8,0,0,0,3-2.6,151,151,0,0,0,7.8-48.1,154.2,154.2,0,0,0-3.7-33.5A153.2,153.2,0,0,0,75.7,213.2Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function dx(r){let e,t,n;return{c(){e=he("g"),t=he("circle"),n=he("path"),this.h()},l(i){e=fe(i,"g",{opacity:!0});var s=ce(e);t=fe(s,"circle",{cx:!0,cy:!0,r:!0}),ce(t).forEach(N),s.forEach(N),n=fe(i,"path",{d:!0}),ce(n).forEach(N),this.h()},h(){$(t,"cx","128.1"),$(t,"cy","128"),$(t,"r","96"),$(e,"opacity","0.2"),$(n,"d","M232.1,128.7V128a103.8,103.8,0,0,0-38.4-80.6l-.6-.5a1.8,1.8,0,0,0-.7-.5A103.8,103.8,0,0,0,83.1,34.2l-1.3.7a104.4,104.4,0,0,0-55.7,72.6v.2H26A104.6,104.6,0,0,0,65.6,211.1l1.3,1h.2a103.7,103.7,0,0,0,61,19.8,101.9,101.9,0,0,0,34.2-5.8l1.2-.4A104.2,104.2,0,0,0,232,128.9C232,128.8,232.1,128.8,232.1,128.7Zm-16.4-8.5-7.6-.2a171.4,171.4,0,0,0-44,5.8A173.1,173.1,0,0,0,150.7,96a171.5,171.5,0,0,0,38.2-31.6A88.1,88.1,0,0,1,215.7,120.2ZM176.3,54.5a150.4,150.4,0,0,1-34.3,28,168.1,168.1,0,0,0-38.6-39,87.9,87.9,0,0,1,72.9,11ZM85.7,50.9a151,151,0,0,1,42,39.2A152.5,152.5,0,0,1,64.1,104a152.7,152.7,0,0,1-20.3-1.4A88.2,88.2,0,0,1,85.7,50.9ZM40.1,128a75.2,75.2,0,0,1,.5-9.6A183.1,183.1,0,0,0,64.1,120a167.4,167.4,0,0,0,72.5-16.4,150.3,150.3,0,0,1,12.3,27.1,172.5,172.5,0,0,0-24.6,11.6,170.5,170.5,0,0,0-55.1,51.1A87.8,87.8,0,0,1,40.1,128Zm42,75a151.9,151.9,0,0,1,50.2-46.8,148.3,148.3,0,0,1,20.9-10,150.3,150.3,0,0,1,3.8,33.5,153.3,153.3,0,0,1-3.5,32.5,85.8,85.8,0,0,1-25.4,3.8A87.8,87.8,0,0,1,82.1,203Zm89,1.7a160,160,0,0,0,1.9-25,166.1,166.1,0,0,0-4.5-38.5,155.4,155.4,0,0,1,39.6-5.2l7.6.2A88.2,88.2,0,0,1,171.1,204.7Z")},m(i,s){le(i,e,s),rn(e,t),le(i,n,s)},p:ge,d(i){i&&N(e),i&&N(n)}}}function px(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M236,128.6V128a108.2,108.2,0,0,0-39.7-83.7l-.6-.5-.9-.6A107.9,107.9,0,0,0,81.3,30.6l-1.5.8a108.3,108.3,0,0,0-57.7,75.4h0A103.9,103.9,0,0,0,20,128a108.2,108.2,0,0,0,43.1,86.3,10.4,10.4,0,0,0,1.7,1.2h.1A108.1,108.1,0,0,0,163.6,230l1.3-.5A108.2,108.2,0,0,0,236,128.9ZM211.2,116H208a168.1,168.1,0,0,0-41.3,5.1A168.4,168.4,0,0,0,156,97.4a170.7,170.7,0,0,0,32.9-27.2A84.7,84.7,0,0,1,211.2,116ZM170,55.3a151.7,151.7,0,0,1-26.9,21.9,173.3,173.3,0,0,0-30.6-31.7A79.1,79.1,0,0,1,128,44,83,83,0,0,1,170,55.3Zm-84.4.3a149.5,149.5,0,0,1,35.9,32.8A147.3,147.3,0,0,1,64,100c-4.9,0-9.9-.3-14.9-.8A84.2,84.2,0,0,1,85.6,55.6ZM44,128c0-1.7.1-3.4.2-5.1A187.7,187.7,0,0,0,64,124a172.3,172.3,0,0,0,70.9-15.2,157,157,0,0,1,8.9,19.6,170.9,170.9,0,0,0-21.5,10.5,172.7,172.7,0,0,0-53.7,48.4A83.7,83.7,0,0,1,44,128Zm43.8,73.7a148.4,148.4,0,0,1,46.5-42,132.7,132.7,0,0,1,16-8,154.4,154.4,0,0,1,2.7,28,145.2,145.2,0,0,1-3,29.4,84,84,0,0,1-22,2.9A83.1,83.1,0,0,1,87.8,201.7Zm88.3-4.9a163.2,163.2,0,0,0,.9-17.1,170.2,170.2,0,0,0-3.8-35.6A151.2,151.2,0,0,1,208,140h3.2A84,84,0,0,1,176.1,196.8Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function mx(r){let e,t,n,i;const s=r[6].default,a=zt(s,r,r[5],null);function o(l,d){return l[0]==="bold"?px:l[0]==="duotone"?dx:l[0]==="fill"?fx:l[0]==="light"?hx:l[0]==="thin"?ux:l[0]==="regular"?cx:lx}let c=o(r),u=c(r),h=[{xmlns:"http://www.w3.org/2000/svg"},{width:r[2]},{height:r[2]},{fill:r[1]},{transform:n=r[3]?"scale(-1, 1)":void 0},{viewBox:"0 0 256 256"},r[4]],f={};for(let l=0;l<h.length;l+=1)f=Ye(f,h[l]);return{c(){e=he("svg"),a&&a.c(),t=he("rect"),u.c(),this.h()},l(l){e=fe(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,transform:!0,viewBox:!0});var d=ce(e);a&&a.l(d),t=fe(d,"rect",{width:!0,height:!0,fill:!0}),ce(t).forEach(N),u.l(d),d.forEach(N),this.h()},h(){$(t,"width","256"),$(t,"height","256"),$(t,"fill","none"),bt(e,f)},m(l,d){le(l,e,d),a&&a.m(e,null),rn(e,t),u.m(e,null),i=!0},p(l,[d]){a&&a.p&&(!i||d&32)&&Vt(a,s,l,l[5],i?Bt(s,l[5],d,null):Ht(l[5]),null),c===(c=o(l))&&u?u.p(l,d):(u.d(1),u=c(l),u&&(u.c(),u.m(e,null))),bt(e,f=Nn(h,[{xmlns:"http://www.w3.org/2000/svg"},(!i||d&4)&&{width:l[2]},(!i||d&4)&&{height:l[2]},(!i||d&2)&&{fill:l[1]},(!i||d&8&&n!==(n=l[3]?"scale(-1, 1)":void 0))&&{transform:n},{viewBox:"0 0 256 256"},d&16&&l[4]]))},i(l){i||(qe(a,l),i=!0)},o(l){$e(a,l),i=!1},d(l){l&&N(e),a&&a.d(l),u.d()}}}function gx(r,e,t){const n=["weight","color","size","mirrored"];let i=Mt(e,n),{$$slots:s={},$$scope:a}=e;const o=Ut("iconCtx")||{};let{weight:c=o.weight??"regular"}=e,{color:u=o.color??"currentColor"}=e,{size:h=o.size??"1em"}=e,{mirrored:f=o.mirrored||!1}=e;return r.$$set=l=>{e=Ye(Ye({},e),vn(l)),t(4,i=Mt(e,n)),"weight"in l&&t(0,c=l.weight),"color"in l&&t(1,u=l.color),"size"in l&&t(2,h=l.size),"mirrored"in l&&t(3,f=l.mirrored),"$$scope"in l&&t(5,a=l.$$scope)},[c,u,h,f,i,a,s]}class mv extends Ft{constructor(e){super(),Nt(this,e,gx,mx,St,{weight:0,color:1,size:2,mirrored:3})}}function _x(r){let e=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),t;return{c(){t=hn(e)},l(n){t=In(n,e)},m(n,i){le(n,t,i)},p:ge,d(n){n&&N(t)}}}function xx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-83.9,74h0L128,133.1,52.6,64H203.4Zm-41.4,6L40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function vx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.6L42.3,60H213.7ZM104.6,128,36,190.9V65.1Zm5.9,5.4,14.8,13.5a3.9,3.9,0,0,0,5.4,0l14.8-13.5L213.7,196H42.3Zm40.9-5.4L220,65.1V190.9Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function yx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.9L47.4,62H208.6ZM101.7,128,38,186.4V69.6Zm8.8,8.1,13.4,12.3a6.1,6.1,0,0,0,8.2,0l13.4-12.3L208.6,194H47.4Zm43.8-8.1L218,69.6V186.4Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Mx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function bx(r){let e,t;return{c(){e=he("path"),t=he("path"),this.h()},l(n){e=fe(n,"path",{d:!0,opacity:!0}),ce(e).forEach(N),t=fe(n,"path",{d:!0}),ce(t).forEach(N),this.h()},h(){$(e,"d","M224,56l-96,88L32,56Z"),$(e,"opacity","0.2"),$(t,"d","M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-83.9,74h0L128,133.1,52.6,64H203.4Zm-41.4,6L40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z")},m(n,i){le(n,e,i),le(n,t,i)},p:ge,d(n){n&&N(e),n&&N(t)}}}function Sx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M224,44H32A12,12,0,0,0,20,56V192a20.1,20.1,0,0,0,20,20H216a20.1,20.1,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-86.5,75h0l-9.5,8.7L62.8,68H193.2Zm-44.7,9L44,172.7V83.3Zm17.7,16.3,9.4,8.5a11.9,11.9,0,0,0,16.2,0l9.4-8.5L193.2,188H62.8ZM163.2,128,212,83.3v89.4Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function wx(r){let e,t,n,i;const s=r[6].default,a=zt(s,r,r[5],null);function o(l,d){return l[0]==="bold"?Sx:l[0]==="duotone"?bx:l[0]==="fill"?Mx:l[0]==="light"?yx:l[0]==="thin"?vx:l[0]==="regular"?xx:_x}let c=o(r),u=c(r),h=[{xmlns:"http://www.w3.org/2000/svg"},{width:r[2]},{height:r[2]},{fill:r[1]},{transform:n=r[3]?"scale(-1, 1)":void 0},{viewBox:"0 0 256 256"},r[4]],f={};for(let l=0;l<h.length;l+=1)f=Ye(f,h[l]);return{c(){e=he("svg"),a&&a.c(),t=he("rect"),u.c(),this.h()},l(l){e=fe(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,transform:!0,viewBox:!0});var d=ce(e);a&&a.l(d),t=fe(d,"rect",{width:!0,height:!0,fill:!0}),ce(t).forEach(N),u.l(d),d.forEach(N),this.h()},h(){$(t,"width","256"),$(t,"height","256"),$(t,"fill","none"),bt(e,f)},m(l,d){le(l,e,d),a&&a.m(e,null),rn(e,t),u.m(e,null),i=!0},p(l,[d]){a&&a.p&&(!i||d&32)&&Vt(a,s,l,l[5],i?Bt(s,l[5],d,null):Ht(l[5]),null),c===(c=o(l))&&u?u.p(l,d):(u.d(1),u=c(l),u&&(u.c(),u.m(e,null))),bt(e,f=Nn(h,[{xmlns:"http://www.w3.org/2000/svg"},(!i||d&4)&&{width:l[2]},(!i||d&4)&&{height:l[2]},(!i||d&2)&&{fill:l[1]},(!i||d&8&&n!==(n=l[3]?"scale(-1, 1)":void 0))&&{transform:n},{viewBox:"0 0 256 256"},d&16&&l[4]]))},i(l){i||(qe(a,l),i=!0)},o(l){$e(a,l),i=!1},d(l){l&&N(e),a&&a.d(l),u.d()}}}function Tx(r,e,t){const n=["weight","color","size","mirrored"];let i=Mt(e,n),{$$slots:s={},$$scope:a}=e;const o=Ut("iconCtx")||{};let{weight:c=o.weight??"regular"}=e,{color:u=o.color??"currentColor"}=e,{size:h=o.size??"1em"}=e,{mirrored:f=o.mirrored||!1}=e;return r.$$set=l=>{e=Ye(Ye({},e),vn(l)),t(4,i=Mt(e,n)),"weight"in l&&t(0,c=l.weight),"color"in l&&t(1,u=l.color),"size"in l&&t(2,h=l.size),"mirrored"in l&&t(3,f=l.mirrored),"$$scope"in l&&t(5,a=l.$$scope)},[c,u,h,f,i,a,s]}class gv extends Ft{constructor(e){super(),Nt(this,e,Tx,wx,St,{weight:0,color:1,size:2,mirrored:3})}}function Ax(r){let e=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),t;return{c(){t=hn(e)},l(n){t=In(n,e)},m(n,i){le(n,t,i)},p:ge,d(n){n&&N(t)}}}function Ex(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M216,216a16,16,0,0,1-16-16v-8a32.1,32.1,0,0,0-14.8-27A55.8,55.8,0,0,0,208,120v-8a58,58,0,0,0-7.7-28.3A59.9,59.9,0,0,0,194.9,36a7.8,7.8,0,0,0-6.9-4,59.7,59.7,0,0,0-48,24H116A59.7,59.7,0,0,0,68,32a7.8,7.8,0,0,0-6.9,4,59.9,59.9,0,0,0-5.4,47.7A58,58,0,0,0,48,112v8a55.8,55.8,0,0,0,22.8,45A32.1,32.1,0,0,0,56,192v8a16,16,0,0,1-16,16,8,8,0,0,0,0,16,32.1,32.1,0,0,0,32-32v-8a16,16,0,0,1,16-16h12v40a16,16,0,0,1-16,16,8,8,0,0,0,0,16,32.1,32.1,0,0,0,32-32V176h24v40a32.1,32.1,0,0,0,32,32,8,8,0,0,0,0-16,16,16,0,0,1-16-16V176h12a16,16,0,0,1,16,16v8a32.1,32.1,0,0,0,32,32,8,8,0,0,0,0-16ZM64,120v-8a42.7,42.7,0,0,1,6.9-22.5A7.9,7.9,0,0,0,72,81.8a43.7,43.7,0,0,1,.8-33.5,43.6,43.6,0,0,1,32.3,20,8,8,0,0,0,6.7,3.7h32.4a8,8,0,0,0,6.7-3.7,43.6,43.6,0,0,1,32.3-20,43.7,43.7,0,0,1,.8,33.5,8.2,8.2,0,0,0,1.1,7.7A42.7,42.7,0,0,1,192,112v8a40,40,0,0,1-40,40H104A40,40,0,0,1,64,120Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Cx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M216,220a20.1,20.1,0,0,1-20-20v-8a28,28,0,0,0-18.9-26.5A51.9,51.9,0,0,0,204,120v-8a52.7,52.7,0,0,0-8.1-27.8A55.9,55.9,0,0,0,191.5,38a4.3,4.3,0,0,0-3.5-2,55.7,55.7,0,0,0-46,24H114A55.7,55.7,0,0,0,68,36a4.3,4.3,0,0,0-3.5,2,55.9,55.9,0,0,0-4.4,46.2A52.7,52.7,0,0,0,52,112v8a51.9,51.9,0,0,0,26.9,45.5A28,28,0,0,0,60,192v8a20.1,20.1,0,0,1-20,20,4,4,0,0,0,0,8,28.1,28.1,0,0,0,28-28v-8a20.1,20.1,0,0,1,20-20h16v44a20.1,20.1,0,0,1-20,20,4,4,0,0,0,0,8,28.1,28.1,0,0,0,28-28V172h32v44a28.1,28.1,0,0,0,28,28,4,4,0,0,0,0-8,20.1,20.1,0,0,1-20-20V172h16a20.1,20.1,0,0,1,20,20v8a28.1,28.1,0,0,0,28,28,4,4,0,0,0,0-8ZM60,120v-8a45.4,45.4,0,0,1,7.7-24.9,4,4,0,0,0,.5-3.8,48.3,48.3,0,0,1,2.1-39.2,47.6,47.6,0,0,1,38.2,22.1,4,4,0,0,0,3.3,1.8h32.4a4,4,0,0,0,3.3-1.8,47.6,47.6,0,0,1,38.2-22.1,48.3,48.3,0,0,1,2.1,39.2,4,4,0,0,0,.5,3.8A45.4,45.4,0,0,1,196,112v8a44,44,0,0,1-44,44H104A44,44,0,0,1,60,120Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Lx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M216,218a18.1,18.1,0,0,1-18-18v-8a30.1,30.1,0,0,0-16.5-26.8A54,54,0,0,0,206,120v-8a55.1,55.1,0,0,0-7.9-28.1A57.6,57.6,0,0,0,193.2,37a6,6,0,0,0-5.2-3,57.7,57.7,0,0,0-47,24H115A57.7,57.7,0,0,0,68,34a6,6,0,0,0-5.2,3,57.6,57.6,0,0,0-4.9,46.9A55.1,55.1,0,0,0,50,112v8a54,54,0,0,0,24.5,45.2A30.1,30.1,0,0,0,58,192v8a18.1,18.1,0,0,1-18,18,6,6,0,0,0,0,12,30.1,30.1,0,0,0,30-30v-8a18.1,18.1,0,0,1,18-18h14v42a18.1,18.1,0,0,1-18,18,6,6,0,0,0,0,12,30.1,30.1,0,0,0,30-30V174h28v42a30.1,30.1,0,0,0,30,30,6,6,0,0,0,0-12,18.1,18.1,0,0,1-18-18V174h14a18.1,18.1,0,0,1,18,18v8a30.1,30.1,0,0,0,30,30,6,6,0,0,0,0-12ZM62,120v-8a43.4,43.4,0,0,1,7.3-23.7,6,6,0,0,0,.8-5.8,46.1,46.1,0,0,1,1.4-36.4,46,46,0,0,1,35.3,21.1,5.8,5.8,0,0,0,5,2.8h32.4a5.8,5.8,0,0,0,5-2.8,46,46,0,0,1,35.3-21.1,46.1,46.1,0,0,1,1.4,36.4,6.3,6.3,0,0,0,.8,5.8A43.4,43.4,0,0,1,194,112v8a42,42,0,0,1-42,42H104A42,42,0,0,1,62,120Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Rx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M224,224a8,8,0,0,1-8,8,32.1,32.1,0,0,1-32-32v-8a16,16,0,0,0-16-16H156v40a16,16,0,0,0,16,16,8,8,0,0,1,0,16,32.1,32.1,0,0,1-32-32V176H116v40a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16V176H88a16,16,0,0,0-16,16v8a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16v-8a32.1,32.1,0,0,1,14.8-27A55.8,55.8,0,0,1,48,120v-8a58,58,0,0,1,7.7-28.3A59.9,59.9,0,0,1,61.1,36,7.8,7.8,0,0,1,68,32a59.7,59.7,0,0,1,48,24h24a59.7,59.7,0,0,1,48-24,7.8,7.8,0,0,1,6.9,4,59.9,59.9,0,0,1,5.4,47.7A58,58,0,0,1,208,112v8a55.8,55.8,0,0,1-22.8,45A32.1,32.1,0,0,1,200,192v8a16,16,0,0,0,16,16A8,8,0,0,1,224,224Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Px(r){let e,t;return{c(){e=he("path"),t=he("path"),this.h()},l(n){e=fe(n,"path",{d:!0,opacity:!0}),ce(e).forEach(N),t=fe(n,"path",{d:!0}),ce(t).forEach(N),this.h()},h(){$(e,"d","M200,112v8a48,48,0,0,1-48,48H104a48,48,0,0,1-48-48v-8a49.3,49.3,0,0,1,8.5-27.3A52,52,0,0,1,68,40a52,52,0,0,1,43.8,24h32.4A52,52,0,0,1,188,40a52,52,0,0,1,3.5,44.7A49.3,49.3,0,0,1,200,112Z"),$(e,"opacity","0.2"),$(t,"d","M216,216a16,16,0,0,1-16-16v-8a32.1,32.1,0,0,0-14.8-27A55.8,55.8,0,0,0,208,120v-8a58,58,0,0,0-7.7-28.3A59.9,59.9,0,0,0,194.9,36a7.8,7.8,0,0,0-6.9-4,59.7,59.7,0,0,0-48,24H116A59.7,59.7,0,0,0,68,32a7.8,7.8,0,0,0-6.9,4,59.9,59.9,0,0,0-5.4,47.7A58,58,0,0,0,48,112v8a55.8,55.8,0,0,0,22.8,45A32.1,32.1,0,0,0,56,192v8a16,16,0,0,1-16,16,8,8,0,0,0,0,16,32.1,32.1,0,0,0,32-32v-8a16,16,0,0,1,16-16h12v40a16,16,0,0,1-16,16,8,8,0,0,0,0,16,32.1,32.1,0,0,0,32-32V176h24v40a32.1,32.1,0,0,0,32,32,8,8,0,0,0,0-16,16,16,0,0,1-16-16V176h12a16,16,0,0,1,16,16v8a32.1,32.1,0,0,0,32,32,8,8,0,0,0,0-16ZM64,120v-8a42.7,42.7,0,0,1,6.9-22.5A7.9,7.9,0,0,0,72,81.8a43.7,43.7,0,0,1,.8-33.5,43.6,43.6,0,0,1,32.3,20,8,8,0,0,0,6.7,3.7h32.4a8,8,0,0,0,6.7-3.7,43.6,43.6,0,0,1,32.3-20,43.7,43.7,0,0,1,.8,33.5,8.2,8.2,0,0,0,1.1,7.7A42.7,42.7,0,0,1,192,112v8a40,40,0,0,1-40,40H104A40,40,0,0,1,64,120Z")},m(n,i){le(n,e,i),le(n,t,i)},p:ge,d(n){n&&N(e),n&&N(t)}}}function Dx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M216,212a12,12,0,0,1-12-12v-8a36.1,36.1,0,0,0-12.3-27.1A59.9,59.9,0,0,0,212,120v-8a61.1,61.1,0,0,0-7.4-28.8A63.7,63.7,0,0,0,198.4,34,12.1,12.1,0,0,0,188,28a64,64,0,0,0-50,24H118A64,64,0,0,0,68,28a12.1,12.1,0,0,0-10.4,6,63.7,63.7,0,0,0-6.2,49.2A61.1,61.1,0,0,0,44,112v8a59.9,59.9,0,0,0,20.3,44.9A36.1,36.1,0,0,0,52,192v8a12,12,0,0,1-12,12,12,12,0,0,0,0,24,36,36,0,0,0,36-36v-8a12,12,0,0,1,12-12h8v36a12,12,0,0,1-12,12,12,12,0,0,0,0,24,36,36,0,0,0,36-36V180h16v36a36,36,0,0,0,36,36,12,12,0,0,0,0-24,12,12,0,0,1-12-12V180h8a12,12,0,0,1,12,12v8a36,36,0,0,0,36,36,12,12,0,0,0,0-24ZM68,112a38.3,38.3,0,0,1,6.1-20.1,11.6,11.6,0,0,0,1.6-11.5,39.4,39.4,0,0,1-.4-27.7,39.6,39.6,0,0,1,26.4,17.8A12.1,12.1,0,0,0,111.8,76h32.4a12.1,12.1,0,0,0,10.1-5.5,39.6,39.6,0,0,1,26.4-17.8,39.4,39.4,0,0,1-.4,27.7,11.9,11.9,0,0,0,1.6,11.5A37.5,37.5,0,0,1,188,112v8a36,36,0,0,1-36,36H104a36,36,0,0,1-36-36Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Ix(r){let e,t,n,i;const s=r[6].default,a=zt(s,r,r[5],null);function o(l,d){return l[0]==="bold"?Dx:l[0]==="duotone"?Px:l[0]==="fill"?Rx:l[0]==="light"?Lx:l[0]==="thin"?Cx:l[0]==="regular"?Ex:Ax}let c=o(r),u=c(r),h=[{xmlns:"http://www.w3.org/2000/svg"},{width:r[2]},{height:r[2]},{fill:r[1]},{transform:n=r[3]?"scale(-1, 1)":void 0},{viewBox:"0 0 256 256"},r[4]],f={};for(let l=0;l<h.length;l+=1)f=Ye(f,h[l]);return{c(){e=he("svg"),a&&a.c(),t=he("rect"),u.c(),this.h()},l(l){e=fe(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,transform:!0,viewBox:!0});var d=ce(e);a&&a.l(d),t=fe(d,"rect",{width:!0,height:!0,fill:!0}),ce(t).forEach(N),u.l(d),d.forEach(N),this.h()},h(){$(t,"width","256"),$(t,"height","256"),$(t,"fill","none"),bt(e,f)},m(l,d){le(l,e,d),a&&a.m(e,null),rn(e,t),u.m(e,null),i=!0},p(l,[d]){a&&a.p&&(!i||d&32)&&Vt(a,s,l,l[5],i?Bt(s,l[5],d,null):Ht(l[5]),null),c===(c=o(l))&&u?u.p(l,d):(u.d(1),u=c(l),u&&(u.c(),u.m(e,null))),bt(e,f=Nn(h,[{xmlns:"http://www.w3.org/2000/svg"},(!i||d&4)&&{width:l[2]},(!i||d&4)&&{height:l[2]},(!i||d&2)&&{fill:l[1]},(!i||d&8&&n!==(n=l[3]?"scale(-1, 1)":void 0))&&{transform:n},{viewBox:"0 0 256 256"},d&16&&l[4]]))},i(l){i||(qe(a,l),i=!0)},o(l){$e(a,l),i=!1},d(l){l&&N(e),a&&a.d(l),u.d()}}}function Nx(r,e,t){const n=["weight","color","size","mirrored"];let i=Mt(e,n),{$$slots:s={},$$scope:a}=e;const o=Ut("iconCtx")||{};let{weight:c=o.weight??"regular"}=e,{color:u=o.color??"currentColor"}=e,{size:h=o.size??"1em"}=e,{mirrored:f=o.mirrored||!1}=e;return r.$$set=l=>{e=Ye(Ye({},e),vn(l)),t(4,i=Mt(e,n)),"weight"in l&&t(0,c=l.weight),"color"in l&&t(1,u=l.color),"size"in l&&t(2,h=l.size),"mirrored"in l&&t(3,f=l.mirrored),"$$scope"in l&&t(5,a=l.$$scope)},[c,u,h,f,i,a,s]}class _v extends Ft{constructor(e){super(),Nt(this,e,Nx,Ix,St,{weight:0,color:1,size:2,mirrored:3})}}function Fx(r){let e=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),t;return{c(){t=hn(e)},l(n){t=In(n,e)},m(n,i){le(n,t,i)},p:ge,d(n){n&&N(t)}}}function Ox(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M100,80A12,12,0,1,1,88,68,12,12,0,0,1,100,80ZM228,44V212a16,16,0,0,1-16,16H44a16,16,0,0,1-16-16V44A16,16,0,0,1,44,28H212A16,16,0,0,1,228,44ZM212,212V44H44V212ZM88,104a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V112A8,8,0,0,0,88,104Zm60,0a36,36,0,0,0-20.2,6.2A8,8,0,0,0,112,112v64a8,8,0,0,0,16,0V140a20,20,0,0,1,40,0v36a8,8,0,0,0,16,0V140A36,36,0,0,0,148,104Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Ux(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M96,80a8,8,0,1,1-8-8A8,8,0,0,1,96,80Zm-8,28a4,4,0,0,0-4,4v64a4,4,0,0,0,8,0V112A4,4,0,0,0,88,108Zm60,0a31.8,31.8,0,0,0-24,10.9V112a4,4,0,0,0-8,0v64a4,4,0,0,0,8,0V140a24,24,0,0,1,48,0v36a4,4,0,0,0,8,0V140A32.1,32.1,0,0,0,148,108Zm76-64V212a12,12,0,0,1-12,12H44a12,12,0,0,1-12-12V44A12,12,0,0,1,44,32H212A12,12,0,0,1,224,44Zm-8,0a4,4,0,0,0-4-4H44a4,4,0,0,0-4,4V212a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function kx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0ZM88,70A10,10,0,1,0,98,80,10,10,0,0,0,88,70ZM226,44V212a14,14,0,0,1-14,14H44a14,14,0,0,1-14-14V44A14,14,0,0,1,44,30H212A14,14,0,0,1,226,44Zm-12,0a2,2,0,0,0-2-2H44a2,2,0,0,0-2,2V212a2,2,0,0,0,2,2H212a2,2,0,0,0,2-2Zm-66,62a34,34,0,0,0-22,8.1V112a6,6,0,0,0-12,0v64a6,6,0,0,0,12,0V140a22,22,0,0,1,44,0v36a6,6,0,0,0,12,0V140A34.1,34.1,0,0,0,148,106Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function zx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M212,28H44A16,16,0,0,0,28,44V212a16,16,0,0,0,16,16H212a16,16,0,0,0,16-16V44A16,16,0,0,0,212,28ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.8-1.8A36,36,0,0,1,184,140Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Bx(r){let e,t;return{c(){e=he("path"),t=he("path"),this.h()},l(n){e=fe(n,"path",{d:!0,opacity:!0}),ce(e).forEach(N),t=fe(n,"path",{d:!0}),ce(t).forEach(N),this.h()},h(){$(e,"d","M220,44V212a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V44a8,8,0,0,1,8-8H212A8,8,0,0,1,220,44Z"),$(e,"opacity","0.2"),$(t,"d","M96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,68a12,12,0,1,0,12,12A12,12,0,0,0,88,68ZM228,44V212a16,16,0,0,1-16,16H44a16,16,0,0,1-16-16V44A16,16,0,0,1,44,28H212A16,16,0,0,1,228,44ZM212,212V44H44V212ZM148,104a36,36,0,0,0-20.2,6.2A8,8,0,0,0,112,112v64a8,8,0,0,0,16,0V140a20,20,0,0,1,40,0v36a8,8,0,0,0,16,0V140A36,36,0,0,0,148,104Z")},m(n,i){le(n,e,i),le(n,t,i)},p:ge,d(n){n&&N(e),n&&N(t)}}}function Vx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0Zm28,68a12,12,0,0,0,12-12V148a16,16,0,0,1,32,0v28a12,12,0,0,0,24,0V148a40,40,0,0,0-58.6-35.4A12,12,0,0,0,112,120v56A12,12,0,0,0,124,188ZM232,44V212a20.1,20.1,0,0,1-20,20H44a20.1,20.1,0,0,1-20-20V44A20.1,20.1,0,0,1,44,24H212A20.1,20.1,0,0,1,232,44Zm-24,4H48V208H208ZM84,96A16,16,0,1,0,68,80,16,16,0,0,0,84,96Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Hx(r){let e,t,n,i;const s=r[6].default,a=zt(s,r,r[5],null);function o(l,d){return l[0]==="bold"?Vx:l[0]==="duotone"?Bx:l[0]==="fill"?zx:l[0]==="light"?kx:l[0]==="thin"?Ux:l[0]==="regular"?Ox:Fx}let c=o(r),u=c(r),h=[{xmlns:"http://www.w3.org/2000/svg"},{width:r[2]},{height:r[2]},{fill:r[1]},{transform:n=r[3]?"scale(-1, 1)":void 0},{viewBox:"0 0 256 256"},r[4]],f={};for(let l=0;l<h.length;l+=1)f=Ye(f,h[l]);return{c(){e=he("svg"),a&&a.c(),t=he("rect"),u.c(),this.h()},l(l){e=fe(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,transform:!0,viewBox:!0});var d=ce(e);a&&a.l(d),t=fe(d,"rect",{width:!0,height:!0,fill:!0}),ce(t).forEach(N),u.l(d),d.forEach(N),this.h()},h(){$(t,"width","256"),$(t,"height","256"),$(t,"fill","none"),bt(e,f)},m(l,d){le(l,e,d),a&&a.m(e,null),rn(e,t),u.m(e,null),i=!0},p(l,[d]){a&&a.p&&(!i||d&32)&&Vt(a,s,l,l[5],i?Bt(s,l[5],d,null):Ht(l[5]),null),c===(c=o(l))&&u?u.p(l,d):(u.d(1),u=c(l),u&&(u.c(),u.m(e,null))),bt(e,f=Nn(h,[{xmlns:"http://www.w3.org/2000/svg"},(!i||d&4)&&{width:l[2]},(!i||d&4)&&{height:l[2]},(!i||d&2)&&{fill:l[1]},(!i||d&8&&n!==(n=l[3]?"scale(-1, 1)":void 0))&&{transform:n},{viewBox:"0 0 256 256"},d&16&&l[4]]))},i(l){i||(qe(a,l),i=!0)},o(l){$e(a,l),i=!1},d(l){l&&N(e),a&&a.d(l),u.d()}}}function Gx(r,e,t){const n=["weight","color","size","mirrored"];let i=Mt(e,n),{$$slots:s={},$$scope:a}=e;const o=Ut("iconCtx")||{};let{weight:c=o.weight??"regular"}=e,{color:u=o.color??"currentColor"}=e,{size:h=o.size??"1em"}=e,{mirrored:f=o.mirrored||!1}=e;return r.$$set=l=>{e=Ye(Ye({},e),vn(l)),t(4,i=Mt(e,n)),"weight"in l&&t(0,c=l.weight),"color"in l&&t(1,u=l.color),"size"in l&&t(2,h=l.size),"mirrored"in l&&t(3,f=l.mirrored),"$$scope"in l&&t(5,a=l.$$scope)},[c,u,h,f,i,a,s]}class xv extends Ft{constructor(e){super(),Nt(this,e,Gx,Hx,St,{weight:0,color:1,size:2,mirrored:3})}}function Wx(r){let e=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),t;return{c(){t=hn(e)},l(n){t=In(n,e)},m(n,i){le(n,t,i)},p:ge,d(n){n&&N(t)}}}function Zx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M128.1,24a104,104,0,1,0,104,104A104.1,104.1,0,0,0,128.1,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128.1,216Zm58.2-104a7.9,7.9,0,0,1-10.8,3.4,104.3,104.3,0,0,0-95,.1,8.1,8.1,0,0,1-3.7.9,8,8,0,0,1-3.6-15.1,119.9,119.9,0,0,1,109.6-.1A8,8,0,0,1,186.3,112Zm-14.8,28.3a8,8,0,0,1-10.8,3.5,72,72,0,0,0-65.4.1,8,8,0,0,1-3.6.9A8,8,0,0,1,88,129.6a88.1,88.1,0,0,1,80,0A8,8,0,0,1,171.5,140.3Zm-14.8,28.4a8.1,8.1,0,0,1-10.8,3.5,39.8,39.8,0,0,0-35.8.1,9.4,9.4,0,0,1-3.6.8,8,8,0,0,1-3.6-15.1,55,55,0,0,1,25.2-6,55.7,55.7,0,0,1,25,5.9A8,8,0,0,1,156.7,168.7Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Xx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M128.1,28a100,100,0,1,0,100,100A100.1,100.1,0,0,0,128.1,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128.1,220Zm54.6-109.8a4,4,0,0,1-5.3,1.7,108.3,108.3,0,0,0-98.7,0,4.1,4.1,0,0,1-1.9.5,4,4,0,0,1-1.8-7.6,116.1,116.1,0,0,1,106,0A3.9,3.9,0,0,1,182.7,110.2Zm-14.8,28.3a4,4,0,0,1-5.4,1.8,74.6,74.6,0,0,0-34.4-8.3,75.4,75.4,0,0,0-34.6,8.3,4.1,4.1,0,0,1-1.8.5,4,4,0,0,1-3.6-2.2,4.1,4.1,0,0,1,1.7-5.4,83.9,83.9,0,0,1,76.4,0A4,4,0,0,1,167.9,138.5Zm-14.8,28.4a4.1,4.1,0,0,1-5.4,1.7,44.1,44.1,0,0,0-39.4.1,3.9,3.9,0,0,1-1.8.4,4,4,0,0,1-1.8-7.6,52.6,52.6,0,0,1,23.4-5.5,50.8,50.8,0,0,1,23.2,5.5A4,4,0,0,1,153.1,166.9Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function qx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M128.1,26a102,102,0,1,0,102,102A102.1,102.1,0,0,0,128.1,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128.1,218Zm56.4-106.9a6.1,6.1,0,0,1-8.1,2.6,106,106,0,0,0-96.8,0,5.5,5.5,0,0,1-2.8.7A6,6,0,0,1,74.1,103a118.5,118.5,0,0,1,54-13,116.7,116.7,0,0,1,53.8,13A6,6,0,0,1,184.5,111.1Zm-14.8,28.3a6,6,0,0,1-8.1,2.7,73.7,73.7,0,0,0-67.2,0,6.8,6.8,0,0,1-2.7.7,6,6,0,0,1-2.8-11.4,86,86,0,0,1,78.2,0A6,6,0,0,1,169.7,139.4Zm-14.8,28.4a6.1,6.1,0,0,1-8.1,2.6,41.8,41.8,0,0,0-18.7-4.4,41.1,41.1,0,0,0-18.9,4.5,6.6,6.6,0,0,1-2.7.6,6.1,6.1,0,0,1-5.4-3.3,5.9,5.9,0,0,1,2.7-8,52.4,52.4,0,0,1,24.3-5.8,53.1,53.1,0,0,1,24.1,5.7A6,6,0,0,1,154.9,167.8Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function jx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M128.1,24a104,104,0,1,0,104,104A104.1,104.1,0,0,0,128.1,24Zm28.6,144.7a8.1,8.1,0,0,1-10.8,3.5,39.8,39.8,0,0,0-35.8.1,9.4,9.4,0,0,1-3.6.8,8,8,0,0,1-3.6-15.1,55,55,0,0,1,25.2-6,55.7,55.7,0,0,1,25,5.9A8,8,0,0,1,156.7,168.7Zm14.8-28.4a8,8,0,0,1-10.8,3.5,72,72,0,0,0-65.4.1,8,8,0,0,1-3.6.9A8,8,0,0,1,88,129.6a88.1,88.1,0,0,1,80,0A8,8,0,0,1,171.5,140.3ZM186.3,112a7.9,7.9,0,0,1-10.8,3.4,104.3,104.3,0,0,0-95,.1,8.1,8.1,0,0,1-3.7.9,8,8,0,0,1-3.6-15.1,119.9,119.9,0,0,1,109.6-.1A8,8,0,0,1,186.3,112Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Yx(r){let e,t;return{c(){e=he("path"),t=he("path"),this.h()},l(n){e=fe(n,"path",{d:!0,opacity:!0}),ce(e).forEach(N),t=fe(n,"path",{d:!0}),ce(t).forEach(N),this.h()},h(){$(e,"d","M224.1,128a96,96,0,1,1-96-96A96,96,0,0,1,224.1,128Z"),$(e,"opacity","0.2"),$(t,"d","M128.1,24a104,104,0,1,0,104,104A104.1,104.1,0,0,0,128.1,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128.1,216Zm58.2-104a7.9,7.9,0,0,1-10.8,3.4,104.3,104.3,0,0,0-95,.1,8.1,8.1,0,0,1-3.7.9,8,8,0,0,1-3.6-15.1,119.9,119.9,0,0,1,109.6-.1A8,8,0,0,1,186.3,112Zm-14.8,28.3a8,8,0,0,1-10.8,3.5,72,72,0,0,0-65.4.1,8,8,0,0,1-3.6.9A8,8,0,0,1,88,129.6a88.1,88.1,0,0,1,80,0A8,8,0,0,1,171.5,140.3Zm-14.8,28.4a8.1,8.1,0,0,1-10.8,3.5,39.8,39.8,0,0,0-35.8.1,9.4,9.4,0,0,1-3.6.8,8,8,0,0,1-3.6-15.1,55,55,0,0,1,25.2-6,55.7,55.7,0,0,1,25,5.9A8,8,0,0,1,156.7,168.7Z")},m(n,i){le(n,e,i),le(n,t,i)},p:ge,d(n){n&&N(e),n&&N(t)}}}function Kx(r){let e;return{c(){e=he("path"),this.h()},l(t){e=fe(t,"path",{d:!0}),ce(e).forEach(N),this.h()},h(){$(e,"d","M128.1,20a108,108,0,1,0,108,108A108.1,108.1,0,0,0,128.1,20Zm0,192a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128.1,212Zm61.8-90.2a12.1,12.1,0,0,1-16.2,5.2,100.4,100.4,0,0,0-91.4,0,10.7,10.7,0,0,1-5.5,1.4,12,12,0,0,1-5.5-22.7,124.2,124.2,0,0,1,113.4,0A11.9,11.9,0,0,1,189.9,121.8Zm-20.4,39a11.9,11.9,0,0,1-16.1,5.2,55.7,55.7,0,0,0-25.3-6,54.4,54.4,0,0,0-25.4,6.1,12,12,0,0,1-5.5,1.3,12.1,12.1,0,0,1-10.7-6.6,12,12,0,0,1,5.3-16.1,80.1,80.1,0,0,1,72.4-.1A12.1,12.1,0,0,1,169.5,160.8Z")},m(t,n){le(t,e,n)},p:ge,d(t){t&&N(e)}}}function Jx(r){let e,t,n,i;const s=r[6].default,a=zt(s,r,r[5],null);function o(l,d){return l[0]==="bold"?Kx:l[0]==="duotone"?Yx:l[0]==="fill"?jx:l[0]==="light"?qx:l[0]==="thin"?Xx:l[0]==="regular"?Zx:Wx}let c=o(r),u=c(r),h=[{xmlns:"http://www.w3.org/2000/svg"},{width:r[2]},{height:r[2]},{fill:r[1]},{transform:n=r[3]?"scale(-1, 1)":void 0},{viewBox:"0 0 256 256"},r[4]],f={};for(let l=0;l<h.length;l+=1)f=Ye(f,h[l]);return{c(){e=he("svg"),a&&a.c(),t=he("rect"),u.c(),this.h()},l(l){e=fe(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,transform:!0,viewBox:!0});var d=ce(e);a&&a.l(d),t=fe(d,"rect",{width:!0,height:!0,fill:!0}),ce(t).forEach(N),u.l(d),d.forEach(N),this.h()},h(){$(t,"width","256"),$(t,"height","256"),$(t,"fill","none"),bt(e,f)},m(l,d){le(l,e,d),a&&a.m(e,null),rn(e,t),u.m(e,null),i=!0},p(l,[d]){a&&a.p&&(!i||d&32)&&Vt(a,s,l,l[5],i?Bt(s,l[5],d,null):Ht(l[5]),null),c===(c=o(l))&&u?u.p(l,d):(u.d(1),u=c(l),u&&(u.c(),u.m(e,null))),bt(e,f=Nn(h,[{xmlns:"http://www.w3.org/2000/svg"},(!i||d&4)&&{width:l[2]},(!i||d&4)&&{height:l[2]},(!i||d&2)&&{fill:l[1]},(!i||d&8&&n!==(n=l[3]?"scale(-1, 1)":void 0))&&{transform:n},{viewBox:"0 0 256 256"},d&16&&l[4]]))},i(l){i||(qe(a,l),i=!0)},o(l){$e(a,l),i=!1},d(l){l&&N(e),a&&a.d(l),u.d()}}}function Qx(r,e,t){const n=["weight","color","size","mirrored"];let i=Mt(e,n),{$$slots:s={},$$scope:a}=e;const o=Ut("iconCtx")||{};let{weight:c=o.weight??"regular"}=e,{color:u=o.color??"currentColor"}=e,{size:h=o.size??"1em"}=e,{mirrored:f=o.mirrored||!1}=e;return r.$$set=l=>{e=Ye(Ye({},e),vn(l)),t(4,i=Mt(e,n)),"weight"in l&&t(0,c=l.weight),"color"in l&&t(1,u=l.color),"size"in l&&t(2,h=l.size),"mirrored"in l&&t(3,f=l.mirrored),"$$scope"in l&&t(5,a=l.$$scope)},[c,u,h,f,i,a,s]}class vv extends Ft{constructor(e){super(),Nt(this,e,Qx,Jx,St,{weight:0,color:1,size:2,mirrored:3})}}export{vv as $,uv as A,ji as B,av as C,Yi as D,Cs as E,ov as F,hv as G,$x as H,cv as I,he as J,fe as K,rn as L,ge as M,fv as N,dv as O,lv as P,hn as Q,In as R,Ft as S,Ss as T,ev as U,rv as V,xv as W,gv as X,mv as Y,pv as Z,_v as _,wr as a,tv as a0,nv as a1,ce as b,zt as c,N as d,ki as e,$ as f,le as g,Ht as h,Nt as i,Bt as j,$e as k,Lu as l,bs as m,Ut as n,iv as o,bo as p,Uu as q,Ca as r,St as s,qe as t,Vt as u,La as v,_r as w,Cu as x,Pu as y,Wn as z};
