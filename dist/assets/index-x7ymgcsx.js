import{p as g,m as S,aB as L,g as c,aC as b,a6 as _,d as w,aD as T,T as m,aE as p,aF as V}from"./index-8OeT41xY.js";const E=g({...S(),...L()},"VLayout"),B=c()({name:"VLayout",props:E(),setup(s,d){let{slots:i}=d;const{layoutClasses:n,layoutStyles:r,getLayoutItem:a,items:t,layoutRef:e}=b(s);return _(()=>{var l;return w("div",{ref:e,class:[n.value,s.class],style:[r.value,s.style]},[(l=i.default)==null?void 0:l.call(i)])}),{getLayoutItem:a,items:t}}}),P=g({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function o(s,d,i){return c()({name:s,props:P({mode:i,origin:d}),setup(n,r){let{slots:a}=r;const t={onBeforeEnter(e){n.origin&&(e.style.transformOrigin=n.origin)},onLeave(e){if(n.leaveAbsolute){const{offsetTop:l,offsetLeft:y,offsetWidth:f,offsetHeight:u}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${l}px`,e.style.left=`${y}px`,e.style.width=`${f}px`,e.style.height=`${u}px`}n.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(n.leaveAbsolute&&(e!=null&&e._transitionInitialStyles)){const{position:l,top:y,left:f,width:u,height:x}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=l||"",e.style.top=y||"",e.style.left=f||"",e.style.width=u||"",e.style.height=x||""}}};return()=>{const e=n.group?T:m;return p(e,{name:n.disabled?"":s,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:t},a.default)}}})}function h(s,d){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return c()({name:s,props:{mode:{type:String,default:i},disabled:Boolean},setup(n,r){let{slots:a}=r;return()=>p(m,{name:n.disabled?"":s,css:!n.disabled,...n.disabled?{}:d},a.default)}})}function v(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=V(`offset-${i}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},onEnter(t){const e=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const l=`${t[n]}px`;t.style[i]="0",t.offsetHeight,t.style.transition=e.transition,s&&t._parent&&t._parent.classList.add(s),requestAnimationFrame(()=>{t.style[i]=l})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[n]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(t){s&&t._parent&&t._parent.classList.remove(s),a(t)}function a(t){const e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,e!=null&&(t.style[i]=e),delete t._initialStyle}}o("fab-transition","center center","out-in");o("dialog-bottom-transition");o("dialog-top-transition");o("fade-transition");o("scale-transition");o("scroll-x-transition");o("scroll-x-reverse-transition");const C=o("scroll-y-transition");o("scroll-y-reverse-transition");o("slide-x-transition");o("slide-x-reverse-transition");const $=o("slide-y-transition");o("slide-y-reverse-transition");const I=h("expand-transition",v()),k=h("expand-x-transition",v("",!0));export{B as V,C as a,I as b,$ as c,k as d};
