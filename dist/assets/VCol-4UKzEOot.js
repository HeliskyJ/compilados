import"./VContainer-DoRS7hXc.js";import{aH as l,aI as f,p as y,m as S,a as k,g as C,B as N,aE as h}from"./index-RUwhJqI6.js";const v=(e,s)=>{const t=e.__vccOpts||e;for(const[o,r]of s)t[o]=r;return t},i=l.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}),d=l.reduce((e,s)=>{const t="offset"+f(s);return e[t]={type:[String,Number],default:null},e},{}),m=l.reduce((e,s)=>{const t="order"+f(s);return e[t]={type:[String,Number],default:null},e},{}),u={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(m)};function _(e,s,t){let o=e;if(!(t==null||t===!1)){if(s){const r=s.replace(e,"");o+=`-${r}`}return e==="col"&&(o="v-"+o),e==="col"&&(t===""||t===!0)||(o+=`-${t}`),o.toLowerCase()}}const L=["auto","start","end","center","baseline","stretch"],P=y({cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...m,alignSelf:{type:String,default:null,validator:e=>L.includes(e)},...S(),...k()},"VCol"),E=C()({name:"VCol",props:P(),setup(e,s){let{slots:t}=s;const o=N(()=>{const r=[];let a;for(a in u)u[a].forEach(n=>{const b=e[n],c=_(a,n,b);c&&r.push(c)});const g=r.some(n=>n.startsWith("v-col-"));return r.push({"v-col":!g||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),r});return()=>{var r;return h(e.tag,{class:[o.value,e.class],style:e.style},(r=t.default)==null?void 0:r.call(t))}}});export{E as V,v as _};
