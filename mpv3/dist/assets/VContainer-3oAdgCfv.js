import{g as l,aN as i,aK as c,m as u,aJ as m,p as g,a as d,aq as f,K as p,d as y}from"./index-Qel_X4Xg.js";function v(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return l()({name:n??i(c(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...u()},setup(a,o){let{slots:s}=o;return()=>{var r;return m(a.tag,{class:[e,a.class],style:a.style},(r=s.default)==null?void 0:r.call(s))}}})}const C=g({fluid:{type:Boolean,default:!1},...u(),...d()},"VContainer"),h=l()({name:"VContainer",props:C(),setup(e,t){let{slots:n}=t;const{rtlClasses:a}=f();return p(()=>y(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},n)),{}}});export{h as V,v as c};
