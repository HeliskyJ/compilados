import"./VContainer-s4yXFdMn.js";import{p as v,m as S,a as V,g as k,B as w,aE as b,aH as E,aI as L}from"./index-8OeT41xY.js";const o=["start","end","center"],g=["space-between","space-around","space-evenly"];function i(t,s){return E.reduce((e,a)=>{const n=t+L(a);return e[n]=s(),e},{})}const N=[...o,"baseline","stretch"],d=t=>N.includes(t),f=i("align",()=>({type:String,default:null,validator:d})),P=[...o,...g],y=t=>P.includes(t),m=i("justify",()=>({type:String,default:null,validator:y})),A=[...o,...g,"stretch"],C=t=>A.includes(t),j=i("alignContent",()=>({type:String,default:null,validator:C})),u={align:Object.keys(f),justify:Object.keys(m),alignContent:Object.keys(j)},h={align:"align",justify:"justify",alignContent:"align-content"};function G(t,s,e){let a=h[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const I=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...f,justify:{type:String,default:null,validator:y},...m,alignContent:{type:String,default:null,validator:C},...j,...S(),...V()},"VRow"),$=k()({name:"VRow",props:I(),setup(t,s){let{slots:e}=s;const a=w(()=>{const n=[];let l;for(l in u)u[l].forEach(c=>{const p=t[c],r=G(l,c,p);r&&n.push(r)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return b(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{$ as V};
