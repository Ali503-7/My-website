import{a as T,j as b,R as Wn,r as Ot}from"./index-662077c3.js";import{H as Ee}from"./hackingTransition-bdcf8f99.js";function Ne(){return T("div",{className:"Email container",children:[b("span",{className:"email",children:b("a",{href:"mailto:alimoali576@gmail.com",children:"alimoali576@gmail.com"})}),b("span",{className:"line"})]})}function pn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?pn(Object(e),!0).forEach(function(a){S(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):pn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Et(t){return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Et(t)}function Ce(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function bn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _e(t,n,e){return n&&bn(t.prototype,n),e&&bn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function S(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function nn(t,n){return Te(t)||Le(t,n)||Hn(t,n)||Fe()}function mt(t){return Ie(t)||Me(t)||Hn(t)||Re()}function Ie(t){if(Array.isArray(t))return $t(t)}function Te(t){if(Array.isArray(t))return t}function Me(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Le(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Hn(t,n){if(t){if(typeof t=="string")return $t(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $t(t,n)}}function $t(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gn=function(){},en={},Xn={},Gn=null,Vn={mark:gn,measure:gn};try{typeof window<"u"&&(en=window),typeof document<"u"&&(Xn=document),typeof MutationObserver<"u"&&(Gn=MutationObserver),typeof performance<"u"&&(Vn=performance)}catch{}var je=en.navigator||{},hn=je.userAgent,yn=hn===void 0?"":hn,$=en,y=Xn,kn=Gn,pt=Vn;$.document;var j=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Bn=~yn.indexOf("MSIE")||~yn.indexOf("Trident/"),bt,gt,ht,yt,kt,L="___FONT_AWESOME___",Ut=16,qn="fa",Kn="svg-inline--fa",q="data-fa-i2svg",Wt="data-fa-pseudo-element",ze="data-fa-pseudo-element-pending",an="data-prefix",rn="data-icon",wn="fontawesome-i2svg",De="async",Ye=["HTML","HEAD","STYLE","SCRIPT"],Jn=function(){try{return!0}catch{return!1}}(),h="classic",k="sharp",on=[h,k];function dt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[h]}})}var ot=dt((bt={},S(bt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),S(bt,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),bt)),st=dt((gt={},S(gt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(gt,k,{solid:"fass",regular:"fasr",light:"fasl"}),gt)),ft=dt((ht={},S(ht,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(ht,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ht)),$e=dt((yt={},S(yt,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(yt,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),yt)),Ue=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Qn="fa-layers-text",We=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,He=dt((kt={},S(kt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(kt,k,{900:"fass",400:"fasr",300:"fasl"}),kt)),Zn=[1,2,3,4,5,6,7,8,9,10],Xe=Zn.concat([11,12,13,14,15,16,17,18,19,20]),Ge=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lt=new Set;Object.keys(st[h]).map(lt.add.bind(lt));Object.keys(st[k]).map(lt.add.bind(lt));var Ve=[].concat(on,mt(lt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(Zn.map(function(t){return"".concat(t,"x")})).concat(Xe.map(function(t){return"w-".concat(t)})),rt=$.FontAwesomeConfig||{};function Be(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function qe(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var Ke=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ke.forEach(function(t){var n=nn(t,2),e=n[0],a=n[1],r=qe(Be(e));r!=null&&(rt[a]=r)})}var te={styleDefault:"solid",familyDefault:"classic",cssPrefix:qn,replacementClass:Kn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var nt=u(u({},te),rt);nt.autoReplaceSvg||(nt.observeMutations=!1);var d={};Object.keys(te).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){nt[t]=e,it.forEach(function(a){return a(d)})},get:function(){return nt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){nt.cssPrefix=n,it.forEach(function(e){return e(d)})},get:function(){return nt.cssPrefix}});$.FontAwesomeConfig=d;var it=[];function Je(t){return it.push(t),function(){it.splice(it.indexOf(t),1)}}var D=Ut,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qe(t){if(!(!t||!j)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(n,a),t}}var Ze="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){for(var t=12,n="";t-- >0;)n+=Ze[Math.random()*62|0];return n}function et(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function sn(t){return t.classList?et(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function ne(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ta(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(ne(t[e]),'" ')},"").trim()}function It(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function fn(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function na(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function ea(t){var n=t.transform,e=t.width,a=e===void 0?Ut:e,r=t.height,i=r===void 0?Ut:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Bn?f+="translate(".concat(n.x/D-a/2,"em, ").concat(n.y/D-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/D,"em), calc(-50% + ").concat(n.y/D,"em)) "):f+="translate(".concat(n.x/D,"em, ").concat(n.y/D,"em) "),f+="scale(".concat(n.size/D*(n.flipX?-1:1),", ").concat(n.size/D*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var aa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ee(){var t=qn,n=Kn,e=d.cssPrefix,a=d.replacementClass,r=aa;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var xn=!1;function Ft(){d.autoAddCss&&!xn&&(Qe(ee()),xn=!0)}var ra={mixout:function(){return{dom:{css:ee,insertCss:Ft}}},hooks:function(){return{beforeDOMElementCreation:function(){Ft()},beforeI2svg:function(){Ft()}}}},R=$||{};R[L]||(R[L]={});R[L].styles||(R[L].styles={});R[L].hooks||(R[L].hooks={});R[L].shims||(R[L].shims=[]);var I=R[L],ae=[],ia=function t(){y.removeEventListener("DOMContentLoaded",t),Nt=1,ae.map(function(n){return n()})},Nt=!1;j&&(Nt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Nt||y.addEventListener("DOMContentLoaded",ia));function oa(t){j&&(Nt?setTimeout(t,0):ae.push(t))}function vt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ne(t):"<".concat(n," ").concat(ta(a),">").concat(i.map(vt).join(""),"</").concat(n,">")}function An(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var sa=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},jt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?sa(e,r):e,f,l,c;for(a===void 0?(f=1,c=n[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,n[l],l,n);return c};function fa(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Ht(t){var n=fa(t);return n.length===1?n[0].toString(16):null}function la(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function On(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Xt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=On(n);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(t,On(n)):I.styles[t]=u(u({},I.styles[t]||{}),i),t==="fas"&&Xt("fa",n)}var wt,xt,At,J=I.styles,ca=I.shims,ua=(wt={},S(wt,h,Object.values(ft[h])),S(wt,k,Object.values(ft[k])),wt),ln=null,re={},ie={},oe={},se={},fe={},ma=(xt={},S(xt,h,Object.keys(ot[h])),S(xt,k,Object.keys(ot[k])),xt);function da(t){return~Ve.indexOf(t)}function va(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!da(r)?r:null}var le=function(){var n=function(i){return jt(J,function(o,s,f){return o[f]=jt(s,i,{}),o},{})};re=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),ie=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),fe=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in J||d.autoFetchSvg,a=jt(ca,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});oe=a.names,se=a.unicodes,ln=Tt(d.styleDefault,{family:d.familyDefault})};Je(function(t){ln=Tt(t.styleDefault,{family:d.familyDefault})});le();function cn(t,n){return(re[t]||{})[n]}function pa(t,n){return(ie[t]||{})[n]}function B(t,n){return(fe[t]||{})[n]}function ce(t){return oe[t]||{prefix:null,iconName:null}}function ba(t){var n=se[t],e=cn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function U(){return ln}var un=function(){return{prefix:null,iconName:null,rest:[]}};function Tt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?h:e,r=ot[a][t],i=st[a][t]||st[a][r],o=t in I.styles?t:null;return i||o||null}var Sn=(At={},S(At,h,Object.keys(ft[h])),S(At,k,Object.keys(ft[k])),At);function Mt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},S(n,h,"".concat(d.cssPrefix,"-").concat(h)),S(n,k,"".concat(d.cssPrefix,"-").concat(k)),n),o=null,s=h;(t.includes(i[h])||t.some(function(l){return Sn[h].includes(l)}))&&(s=h),(t.includes(i[k])||t.some(function(l){return Sn[k].includes(l)}))&&(s=k);var f=t.reduce(function(l,c){var m=va(d.cssPrefix,c);if(J[c]?(c=ua[s].includes(c)?$e[s][c]:c,o=c,l.prefix=c):ma[s].indexOf(c)>-1?(o=c,l.prefix=Tt(c,{family:s})):m?l.iconName=m:c!==d.replacementClass&&c!==i[h]&&c!==i[k]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var v=o==="fa"?ce(l.iconName):{},g=B(l.prefix,l.iconName);v.prefix&&(o=null),l.iconName=v.iconName||g||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!J.far&&J.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},un());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===k&&(J.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=B(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=U()||"fas"),f}var ga=function(){function t(){Ce(this,t),this.definitions={}}return _e(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),Xt(s,o[s]);var f=ft[h][s];f&&Xt(f,o[s]),le()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];e[s]||(e[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(e[s][m]=l)}),e[s][f]=l}),e}}]),t}(),Pn=[],Q={},tt={},ha=Object.keys(tt);function ya(t,n){var e=n.mixoutsTo;return Pn=t,Q={},Object.keys(tt).forEach(function(a){ha.indexOf(a)===-1&&delete tt[a]}),Pn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Et(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Q[o]||(Q[o]=[]),Q[o].push(i[o])})}a.provides&&a.provides(tt)}),e}function Gt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=Q[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function K(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=Q[t]||[];r.forEach(function(i){i.apply(null,e)})}function F(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,n):void 0}function Vt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||U();if(n)return n=B(e,n)||n,An(ue.definitions,e,n)||An(I.styles,e,n)}var ue=new ga,ka=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,K("noAuto")},wa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(K("beforeI2svg",n),F("pseudoElements2svg",n),F("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,oa(function(){Aa({autoReplaceSvgRoot:e}),K("watch",n)})}},xa={icon:function(n){if(n===null)return null;if(Et(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:B(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Tt(n[0]);return{prefix:a,iconName:B(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Ue))){var r=Mt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:B(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=U();return{prefix:i,iconName:B(i,n)||n}}}},_={noAuto:ka,config:d,dom:wa,parse:xa,library:ue,findIconDefinition:Vt,toHtml:vt},Aa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(I.styles).length>0||d.autoFetchSvg)&&j&&d.autoReplaceSvg&&_.dom.i2svg({node:a})};function Lt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return vt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(j){var a=y.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Oa(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(fn(o)&&e.found&&!a.found){var s=e.width,f=e.height,l={x:s/f/2,y:.5};r.style=It(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Sa(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function mn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,v=t.watchable,g=v===void 0?!1:v,A=a.found?a:e,E=A.width,w=A.height,N=r==="fak",x=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(z){return m.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(m.classes).join(" "),O={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(w)})},C=N&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/w*16*.0625,"em")}:{};g&&(O.attributes[q]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||ct())},children:[f]}),delete O.attributes.title);var P=u(u({},O),{},{prefix:r,iconName:i,main:e,mask:a,maskId:l,transform:o,symbol:s,styles:u(u({},C),m.styles)}),X=a.found&&e.found?F("generateAbstractMask",P)||{children:[],attributes:{}}:F("generateAbstractIcon",P)||{children:[],attributes:{}},G=X.children,Rt=X.attributes;return P.children=G,P.attributes=Rt,s?Sa(P):Oa(P)}function En(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[q]="");var c=u({},o.styles);fn(r)&&(c.transform=ea({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);var m=It(c);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Pa(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=It(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var zt=I.styles;function Bt(t){var n=t[0],e=t[1],a=t.slice(4),r=nn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Ea={found:!1,width:512,height:512};function Na(t,n){!Jn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function qt(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=U()),new Promise(function(a,r){if(F("missingIconAbstract"),e==="fa"){var i=ce(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&zt[n]&&zt[n][t]){var o=zt[n][t];return a(Bt(o))}Na(t,n),a(u(u({},Ea),{},{icon:d.showMissingIcons&&t?F("missingIconAbstract")||{}:{}}))})}var Nn=function(){},Kt=d.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:Nn,measure:Nn},at='FA "6.4.0"',Ca=function(n){return Kt.mark("".concat(at," ").concat(n," begins")),function(){return me(n)}},me=function(n){Kt.mark("".concat(at," ").concat(n," ends")),Kt.measure("".concat(at," ").concat(n),"".concat(at," ").concat(n," begins"),"".concat(at," ").concat(n," ends"))},dn={begin:Ca,end:me},St=function(){};function Cn(t){var n=t.getAttribute?t.getAttribute(q):null;return typeof n=="string"}function _a(t){var n=t.getAttribute?t.getAttribute(an):null,e=t.getAttribute?t.getAttribute(rn):null;return n&&e}function Ia(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ta(){if(d.autoReplaceSvg===!0)return Pt.replace;var t=Pt[d.autoReplaceSvg];return t||Pt.replace}function Ma(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function La(t){return y.createElement(t)}function de(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Ma:La:e;if(typeof t=="string")return y.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(de(o,{ceFn:a}))}),r}function Ra(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Pt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(de(r),e)}),e.getAttribute(q)===null&&d.keepOriginalSource){var a=y.createComment(Ra(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~sn(e).indexOf(d.replacementClass))return Pt.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return vt(s)}).join(`
`);e.setAttribute(q,""),e.innerHTML=o}};function _n(t){t()}function ve(t,n){var e=typeof n=="function"?n:St;if(t.length===0)e();else{var a=_n;d.mutateApproach===De&&(a=$.requestAnimationFrame||_n),a(function(){var r=Ta(),i=dn.begin("mutate");t.map(r),i(),e()})}}var vn=!1;function pe(){vn=!0}function Jt(){vn=!1}var Ct=null;function In(t){if(kn&&d.observeMutations){var n=t.treeCallback,e=n===void 0?St:n,a=t.nodeCallback,r=a===void 0?St:a,i=t.pseudoElementsCallback,o=i===void 0?St:i,s=t.observeMutationsRoot,f=s===void 0?y:s;Ct=new kn(function(l){if(!vn){var c=U();et(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Cn(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Cn(m.target)&&~Ge.indexOf(m.attributeName))if(m.attributeName==="class"&&_a(m.target)){var v=Mt(sn(m.target)),g=v.prefix,A=v.iconName;m.target.setAttribute(an,g||c),A&&m.target.setAttribute(rn,A)}else Ia(m.target)&&r(m.target)})}}),j&&Ct.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Fa(){Ct&&Ct.disconnect()}function ja(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function za(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Mt(sn(t));return r.prefix||(r.prefix=U()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=pa(r.prefix,t.innerText)||cn(r.prefix,Ht(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Da(t){var n=et(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ct()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ya(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=za(t),a=e.iconName,r=e.prefix,i=e.rest,o=Da(t),s=Gt("parseNodeAttributes",{},t),f=n.styleParser?ja(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var $a=I.styles;function be(t){var n=d.autoReplaceSvg==="nest"?Tn(t,{styleParser:!1}):Tn(t);return~n.extra.classes.indexOf(Qn)?F("generateLayersText",t,n):F("generateSvgReplacementMutation",t,n)}var W=new Set;on.map(function(t){W.add("fa-".concat(t))});Object.keys(ot[h]).map(W.add.bind(W));Object.keys(ot[k]).map(W.add.bind(W));W=mt(W);function Mn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var e=y.documentElement.classList,a=function(m){return e.add("".concat(wn,"-").concat(m))},r=function(m){return e.remove("".concat(wn,"-").concat(m))},i=d.autoFetchSvg?W:on.map(function(c){return"fa-".concat(c)}).concat(Object.keys($a));i.includes("fa")||i.push("fa");var o=[".".concat(Qn,":not([").concat(q,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=et(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=dn.begin("onTree"),l=s.reduce(function(c,m){try{var v=be(m);v&&c.push(v)}catch(g){Jn||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(v){ve(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(v){f(),m(v)})})}function Ua(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;be(t).then(function(e){e&&ve([e],n)})}function Wa(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Vt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Vt(r||{})),t(a,u(u({},e),{},{mask:r}))}}var Ha=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?M:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,l=e.maskId,c=l===void 0?null:l,m=e.title,v=m===void 0?null:m,g=e.titleId,A=g===void 0?null:g,E=e.classes,w=E===void 0?[]:E,N=e.attributes,x=N===void 0?{}:N,O=e.styles,C=O===void 0?{}:O;if(n){var P=n.prefix,X=n.iconName,G=n.icon;return Lt(u({type:"icon"},n),function(){return K("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?x["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||ct()):(x["aria-hidden"]="true",x.focusable="false")),mn({icons:{main:Bt(G),mask:f?Bt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:X,transform:u(u({},M),r),symbol:o,title:v,maskId:c,titleId:A,extra:{attributes:x,styles:C,classes:w}})})}},Xa={mixout:function(){return{icon:Wa(Ha)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Mn,e.nodeCallback=Ua,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?y:a,i=e.callback,o=i===void 0?function(){}:i;return Mn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,m=a.maskId,v=a.extra;return new Promise(function(g,A){Promise.all([qt(r,s),c.iconName?qt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var w=nn(E,2),N=w[0],x=w[1];g([e,mn({icons:{main:N,mask:x},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=It(s);f.length>0&&(r.style=f);var l;return fn(o)&&(l=F("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Ga={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Lt({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(mt(i)).join(" ")},children:o}]})}}}},Va={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return Lt({type:"counter",content:e},function(){return K("beforeDOMElementCreation",{content:e,params:a}),Pa({content:e.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(mt(s))}})})}}}},Ba={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,v=a.styles,g=v===void 0?{}:v;return Lt({type:"text",content:e},function(){return K("beforeDOMElementCreation",{content:e,params:a}),En({content:e,transform:u(u({},M),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(d.cssPrefix,"-layers-text")].concat(mt(l))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Bn){var l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/l,f=c.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,En({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},qa=new RegExp('"',"ug"),Ln=[1105920,1112319];function Ka(t){var n=t.replace(qa,""),e=la(n,0),a=e>=Ln[0]&&e<=Ln[1],r=n.length===2?n[0]===n[1]:!1;return{value:Ht(r?n[0]:n),isSecondary:a||r}}function Rn(t,n){var e="".concat(ze).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=et(t.children),o=i.filter(function(G){return G.getAttribute(Wt)===n})[0],s=$.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(We),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?k:h,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?st[v][f[2].toLowerCase()]:He[v][l],A=Ka(m),E=A.value,w=A.isSecondary,N=f[0].startsWith("FontAwesome"),x=cn(g,E),O=x;if(N){var C=ba(E);C.iconName&&C.prefix&&(x=C.iconName,g=C.prefix)}if(x&&!w&&(!o||o.getAttribute(an)!==g||o.getAttribute(rn)!==O)){t.setAttribute(e,O),o&&t.removeChild(o);var P=Ya(),X=P.extra;X.attributes[Wt]=n,qt(x,g).then(function(G){var Rt=mn(u(u({},P),{},{icons:{main:G,mask:un()},prefix:g,iconName:O,extra:X,watchable:!0})),z=y.createElement("svg");n==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=Rt.map(function(Pe){return vt(Pe)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ja(t){return Promise.all([Rn(t,"::before"),Rn(t,"::after")])}function Qa(t){return t.parentNode!==document.head&&!~Ye.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fn(t){if(j)return new Promise(function(n,e){var a=et(t.querySelectorAll("*")).filter(Qa).map(Ja),r=dn.begin("searchPseudoElements");pe(),Promise.all(a).then(function(){r(),Jt(),n()}).catch(function(){r(),Jt(),e()})})}var Za={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Fn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;d.searchPseudoElements&&Fn(r)}}},jn=!1,tr={mixout:function(){return{dom:{unwatch:function(){pe(),jn=!0}}}},hooks:function(){return{bootstrap:function(){In(Gt("mutationObserverCallbacks",{}))},noAuto:function(){Fa()},watch:function(e){var a=e.observeMutationsRoot;jn?Jt():In(Gt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},zn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},nr={mixout:function(){return{parse:{transform:function(e){return zn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=zn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),g.path)}]}]}}}},Dt={x:0,y:0,width:"100%",height:"100%"};function Dn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function er(t){return t.tag==="g"?t.children:[t]}var ar={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Mt(r.split(" ").map(function(o){return o.trim()})):un();return i.prefix||(i.prefix=U()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,l=i.width,c=i.icon,m=o.width,v=o.icon,g=na({transform:f,containerWidth:m,iconWidth:l}),A={tag:"rect",attributes:u(u({},Dt),{},{fill:"white"})},E=c.children?{children:c.children.map(Dn)}:{},w={tag:"g",attributes:u({},g.inner),children:[Dn(u({tag:c.tag,attributes:u(u({},c.attributes),g.path)},E))]},N={tag:"g",attributes:u({},g.outer),children:[w]},x="mask-".concat(s||ct()),O="clip-".concat(s||ct()),C={tag:"mask",attributes:u(u({},Dt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,N]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:er(v)},C]};return a.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(x,")")},Dt)}),{children:a,attributes:r}}}},rr={provides:function(n){var e=!1;$.matchMedia&&(e=$.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ir={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},or=[ra,Xa,Ga,Va,Ba,Za,tr,nr,ar,rr,ir];ya(or,{mixoutsTo:_});_.noAuto;_.config;_.library;_.dom;var Qt=_.parse;_.findIconDefinition;_.toHtml;var sr=_.icon;_.layer;_.text;_.counter;var p={},fr={get exports(){return p},set exports(t){p=t}},lr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cr=lr,ur=cr;function ge(){}function he(){}he.resetWarningCache=ge;var mr=function(){function t(a,r,i,o,s,f){if(f!==ur){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function n(){return t}var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:he,resetWarningCache:ge};return e.PropTypes=e,e};fr.exports=mr();function Yn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function Y(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Yn(Object(e),!0).forEach(function(a){Z(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Yn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function _t(t){return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_t(t)}function Z(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function dr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function vr(t,n){if(t==null)return{};var e=dr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function Zt(t){return pr(t)||br(t)||gr(t)||hr()}function pr(t){if(Array.isArray(t))return tn(t)}function br(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gr(t,n){if(t){if(typeof t=="string")return tn(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return tn(t,n)}}function tn(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yr(t){var n,e=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,m=t.pulse,v=t.fixedWidth,g=t.inverse,A=t.border,E=t.listItem,w=t.flip,N=t.size,x=t.rotation,O=t.pull,C=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":v,"fa-inverse":g,"fa-border":A,"fa-li":E,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Z(n,"fa-".concat(N),typeof N<"u"&&N!==null),Z(n,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),Z(n,"fa-pull-".concat(O),typeof O<"u"&&O!==null),Z(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(C).map(function(P){return C[P]?P:null}).filter(function(P){return P})}function kr(t){return t=t-0,t===t}function ye(t){return kr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var wr=["style"];function xr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ar(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=ye(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?n[xr(r)]=i:n[r]=i,n},{})}function ke(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return ke(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,l){var c=n.attributes[l];switch(l){case"class":f.attrs.className=c,delete n.attributes.class;break;case"style":f.attrs.style=Ar(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[ye(l)]=c}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=vr(e,wr);return r.attrs.style=Y(Y({},r.attrs.style),o),t.apply(void 0,[n.tag,Y(Y({},r.attrs),s)].concat(Zt(a)))}var we=!1;try{we=!0}catch{}function Or(){if(!we&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $n(t){if(t&&_t(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Qt.icon)return Qt.icon(t);if(t===null)return null;if(t&&_t(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Yt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Z({},t,n):{}}var H=Wn.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=$n(e),c=Yt("classes",[].concat(Zt(yr(t)),Zt(i.split(" ")))),m=Yt("transform",typeof t.transform=="string"?Qt.transform(t.transform):t.transform),v=Yt("mask",$n(a)),g=sr(l,Y(Y(Y(Y({},c),m),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!g)return Or("Could not find icon",l),null;var A=g.abstract,E={ref:n};return Object.keys(t).forEach(function(w){H.defaultProps.hasOwnProperty(w)||(E[w]=t[w])}),Sr(A[0],E)});H.displayName="FontAwesomeIcon";H.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};H.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Sr=ke.bind(null,Wn.createElement),xe={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},Ae={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Pr(){return T("div",{className:"social container",children:[T("div",{className:"social-links",children:[b("a",{href:"https://www.linkedin.com/in/ali-mohamed-b351a6206/",target:"_blank",children:b(H,{icon:xe})}),b("a",{href:"https://github.com/Ali503-7",target:"_blank",children:b(H,{icon:Ae})}),b("a",{href:"https://www.frontendmentor.io/profile/Ali503-7",target:"_blank",children:b("img",{src:"./imgs/logs/frontend-mentor-seeklogo.com.svg",alt:""})})]}),b("span",{className:"line"})]})}const ut={_origin:"https://api.emailjs.com"},Er=(t,n="https://api.emailjs.com")=>{ut._userID=t,ut._origin=n},Oe=(t,n,e)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!n)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!e)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Un{constructor(n){this.status=n?n.status:0,this.text=n?n.responseText:"Network Error"}}const Se=(t,n,e={})=>new Promise((a,r)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:o})=>{const s=new Un(o);s.status===200||s.text==="OK"?a(s):r(s)}),i.addEventListener("error",({target:o})=>{r(new Un(o))}),i.open("POST",ut._origin+t,!0),Object.keys(e).forEach(o=>{i.setRequestHeader(o,e[o])}),i.send(n)}),Nr=(t,n,e,a)=>{const r=a||ut._userID;return Oe(r,t,n),Se("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:r,service_id:t,template_id:n,template_params:e}),{"Content-type":"application/json"})},Cr=t=>{let n;if(typeof t=="string"?n=document.querySelector(t):n=t,!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return n},_r=(t,n,e,a)=>{const r=a||ut._userID,i=Cr(e);Oe(r,t,n);const o=new FormData(i);return o.append("lib_version","3.11.0"),o.append("service_id",t),o.append("template_id",n),o.append("user_id",r),Se("/api/v1.0/email/send-form",o)},Ir={init:Er,send:Nr,sendForm:_r};function Tr({sendMassage:t,setSendMassage:n}){const e=Ot.useRef();return T("section",{className:t?"form show":"form hidden",children:[b("div",{className:"exit",onClick:()=>n(r=>!r),children:"x"}),T("form",{ref:e,onSubmit:r=>{r.preventDefault();const{user_name:i,user_email:o,massage:s}=r.target.elements;if(!i.value||!o.value||!s.value){alert("Please fill in all fields before sending.");return}Ir.sendForm("service_36ucdyt","template_9om33cq",e.current,"My1NVRZ_vTBi0ev-y").then(f=>{console.log(f.text),r.target.reset()},f=>{console.log(f.text)})},children:[b("label",{htmlFor:"name",children:"Your Name"}),b("input",{type:"text",name:"user_name",id:"name"}),b("label",{htmlFor:"email",children:"Your Email"}),b("input",{type:"email",name:"user_email",id:"email"}),b("label",{htmlFor:"massage",children:"Your Massage"}),b("textarea",{name:"massage",id:"massage",cols:"30",rows:"10"}),b("div",{className:"button",children:b("input",{type:"submit",value:"send"})})]})]})}function Rr(){const t=Ot.useRef(),[n,e]=Ot.useState(!1);return Ot.useEffect(()=>{Ee(t,5)},[]),T("section",{className:"contact container",children:[b("div",{className:"header",children:b("h1",{ref:t,"data-value":"Contact Me",children:"Contact Me"})}),T("div",{className:"body",children:[T("div",{className:"open-tag",children:["<","Contact",">"]}),b("div",{className:"contact-msg",children:b("p",{children:"Thanks for reaching out! Please provide your name, email, and message so I can reply within 24 hours. Contact me on social media if you prefer. thanks😘"})}),b("div",{className:"social-links",children:T("div",{className:"social-links",children:[b("a",{href:"https://www.linkedin.com/in/ali-mohamed-b351a6206/",target:"_blank",children:b(H,{icon:xe})}),b("a",{href:"https://github.com/Ali503-7",target:"_blank",children:b(H,{icon:Ae})}),b("a",{href:"https://www.frontendmentor.io/profile/Ali503-7",target:"_blank",children:b("img",{src:"./imgs/logs/frontend-mentor-seeklogo.com.svg",alt:""})})]})}),b("div",{className:"send-massage button",children:b("button",{onClick:()=>e(a=>!a),children:"Send Massage"})}),T("div",{className:"close-tag",children:["<","/Contact",">"]})]}),b(Ne,{}),b(Pr,{}),b(Tr,{sendMassage:n,setSendMassage:e})]})}export{Rr as default};
