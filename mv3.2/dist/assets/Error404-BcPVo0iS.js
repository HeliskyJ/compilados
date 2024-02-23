import{_ as E}from"./_plugin-vue_export-helper-x3n3nnut.js";import{c as R,V as N}from"./VContainer-rLYgm3gn.js";import{V as f}from"./VCol-VkC2w9FP.js";import{s as F,e as j,f as q,g as M,h as O,i as G,w as H,z as J,t as K,l as Q,n as U,o as W,p as X,q as Y,v as Z,C as ee,r as te,c as y,V as k}from"./VBtn-FNz5vL_i.js";import{p as ae,P as oe,m as le,a as se,b as ne,g as re,u as ce,D as c,c as ie,M as de,a3 as ue,d as a,n as ve,f as me,h as fe,w as o,s as ye,v as _e,x as ke,y as b}from"./index-UoVCbPmJ.js";import{V as _}from"./VRow-LS5S1INV.js";const be=R("v-alert-title"),Ve=["success","info","warning","error"],ge=ae({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:oe,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Ve.includes(e)},...le(),...F(),...j(),...q(),...M(),...O(),...G(),...se(),...ne(),...H({variant:"flat"})},"VAlert"),Ce=re()({name:"VAlert",props:ge(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{emit:d,slots:t}=i;const n=ce(e,"modelValue"),l=c(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),g=c(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:C}=ie(e),{colorClasses:p,colorStyles:P,variantClasses:h}=J(g),{densityClasses:x}=K(e),{dimensionStyles:S}=Q(e),{elevationClasses:B}=U(e),{locationStyles:I}=W(e),{positionClasses:$}=X(e),{roundedClasses:w}=Y(e),{textColorClasses:T,textColorStyles:A}=Z(de(e,"borderColor")),{t:D}=ue(),u=c(()=>({"aria-label":D(e.closeLabel),onClick(r){n.value=!1,d("click:close",r)}}));return()=>{const r=!!(t.prepend||l.value),L=!!(t.title||e.title),z=!!(t.close||e.closable);return n.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},C.value,p.value,x.value,B.value,$.value,w.value,h.value,e.class],style:[P.value,S.value,I.value,e.style],role:"alert"},{default:()=>{var v,m;return[ee(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",T.value],style:A.value},null),r&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(y,{key:"prepend-defaults",disabled:!l.value,defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},t.prepend):a(te,{key:"prepend-icon",density:e.density,icon:l.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[L&&a(be,{key:"title"},{default:()=>{var s;return[((s=t.title)==null?void 0:s.call(t))??e.title]}}),((v=t.text)==null?void 0:v.call(t))??e.text,(m=t.default)==null?void 0:m.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),z&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(y,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var s;return[(s=t.close)==null?void 0:s.call(t,{props:u.value})]}}):a(k,ve({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},u.value),null)])]}})}}}),pe={methods:{goBack(){this.$router.go(-1)}}},V=e=>(_e("data-v-cc5e8461"),e=e(),ke(),e),Pe=V(()=>b("h2",null,"Error 404: Página No Encontrada",-1)),he=V(()=>b("p",null,"Lo sentimos, la página que estás buscando no existe.",-1));function xe(e,i,d,t,n,l){return me(),fe(N,{class:"fill-height",fluid:""},{default:o(()=>[a(_,{align:"center",justify:"center"},{default:o(()=>[a(f,{cols:"12",sm:"8",md:"6"},{default:o(()=>[a(Ce,{type:"error",border:"left",elevation:"2","colored-border":""},{default:o(()=>[a(_,{align:"center"},{default:o(()=>[a(f,{class:"grow"},{default:o(()=>[Pe,he,a(k,{color:"primary",onClick:l.goBack},{default:o(()=>[ye(" Regresar ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Ae=E(pe,[["render",xe],["__scopeId","data-v-cc5e8461"]]);export{Ae as default};
