import{V as s}from"./VBtn-Zz6xvQ1-.js";import{f as i,j as d,d as n,w as l,t as c,s as u}from"./index-Qel_X4Xg.js";const m={class:"d-flex justify-center mb-5 mt-9"},g={__name:"BotonBi",props:{cargando:{required:!0,default:!1},deshabilitado:{required:!0,default:!0},valorBtn:{type:String,required:!0,default:!0}},emits:["accion"],setup(a,{emit:o}){const e=a,r=o;return(f,t)=>(i(),d("div",m,[n(s,{onClick:t[0]||(t[0]=p=>r("accion")),class:"text-none",rounded:"xl",color:"secondary",size:"x-large",width:"25vh",loading:e.cargando,disabled:e.deshabilitado},{default:l(()=>[u(c(e.valorBtn),1)]),_:1},8,["loading","disabled"])]))}};export{g as _};
