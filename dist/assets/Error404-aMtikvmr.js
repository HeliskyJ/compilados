import{_ as D,V as f}from"./VCol-Stcz0B5E.js";import{c as R,V as F}from"./VContainer-qKTR7Mb1.js";import{A as N,e as q,o as j,q as O,r as G,s as H,C as M,E as J,F as K,i as Q,v as U,w as W,x as X,y as Y,H as Z,G as ee,z as ae,l as y,V as k}from"./VBtn-TV862Wp4.js";import{p as te,ag as le,m as oe,a as se,b as ne,g as re,a2 as ce,B as c,c as ie,a4 as de,au as ue,d as t,E as ve,e as me,f as fe,w as l,l as ye,q as _e,s as ke,v as b}from"./index-8TxKCO8e.js";import{V as _}from"./VRow-Ose8_e84.js";const be=R("v-alert-title"),Ve=["success","info","warning","error"],ge=te({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:le,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Ve.includes(e)},...oe(),...N(),...q(),...j(),...O(),...G(),...H(),...se(),...ne(),...M({variant:"flat"})},"VAlert"),Ce=re()({name:"VAlert",props:ge(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{emit:d,slots:a}=i;const n=ce(e,"modelValue"),o=c(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),g=c(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:C}=ie(e),{colorClasses:p,colorStyles:P,variantClasses:x}=J(g),{densityClasses:h}=K(e),{dimensionStyles:S}=Q(e),{elevationClasses:B}=U(e),{locationStyles:I}=W(e),{positionClasses:$}=X(e),{roundedClasses:w}=Y(e),{textColorClasses:T,textColorStyles:A}=Z(de(e,"borderColor")),{t:E}=ue(),u=c(()=>({"aria-label":E(e.closeLabel),onClick(r){n.value=!1,d("click:close",r)}}));return()=>{const r=!!(a.prepend||o.value),L=!!(a.title||e.title),z=!!(a.close||e.closable);return n.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},C.value,p.value,h.value,B.value,$.value,w.value,x.value,e.class],style:[P.value,S.value,I.value,e.style],role:"alert"},{default:()=>{var v,m;return[ee(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",T.value],style:A.value},null),r&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(y,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},a.prepend):t(ae,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[L&&t(be,{key:"title"},{default:()=>{var s;return[((s=a.title)==null?void 0:s.call(a))??e.title]}}),((v=a.text)==null?void 0:v.call(a))??e.text,(m=a.default)==null?void 0:m.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),z&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(y,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var s;return[(s=a.close)==null?void 0:s.call(a,{props:u.value})]}}):t(k,ve({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},u.value),null)])]}})}}}),pe={methods:{goBack(){this.$router.go(-1)}}},V=e=>(_e("data-v-cc5e8461"),e=e(),ke(),e),Pe=V(()=>b("h2",null,"Error 404: Página No Encontrada",-1)),xe=V(()=>b("p",null,"Lo sentimos, la página que estás buscando no existe.",-1));function he(e,i,d,a,n,o){return me(),fe(F,{class:"fill-height",fluid:""},{default:l(()=>[t(_,{align:"center",justify:"center"},{default:l(()=>[t(f,{cols:"12",sm:"8",md:"6"},{default:l(()=>[t(Ce,{type:"error",border:"left",elevation:"2","colored-border":""},{default:l(()=>[t(_,{align:"center"},{default:l(()=>[t(f,{class:"grow"},{default:l(()=>[Pe,xe,t(k,{color:"primary",onClick:o.goBack},{default:l(()=>[ye(" Regresar ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Te=D(pe,[["render",he],["__scopeId","data-v-cc5e8461"]]);export{Te as default};
