import{V as I,a as j,_ as A,b as R,c as h,f as u}from"./VTextField-EOrh4fug.js";import{A as q,r as l,e as E,B as V,D as g,E as T,H as z,f as x,j as H,d as e,w as t,h as S,n as w,l as s,G as U,F as $,y as r,s as y,V as G}from"./index-Qel_X4Xg.js";import{_ as K}from"./NotificacionEstado-fO2Q02yg.js";import{_ as M}from"./BotonBi-wLxOosp-.js";import{V as b,b as O,c as P,d as J,a as Q}from"./VCard-oBXmrzsN.js";import{V as W}from"./index-Xq5kxNPg.js";import{V as X}from"./VContainer-3oAdgCfv.js";import{V as Y}from"./VBtn-Zz6xvQ1-.js";import"./VOverlay-tZBTIQe4.js";import"./delay-1wefEeb3.js";import"./VRow-gncpQbWG.js";const Z={class:"d-flex justify-center flex-column align-center mb-5 mt-9"},ee={class:"mt-4 mb-5 text-center",color:"red"},ae=r("span",{class:"text-secondary text-none"}," ¿No cuentas con usuario? ",-1),te=r("br",null,null,-1),se=r("br",null,null,-1),ve={__name:"LoginView",setup(oe){const k=q(),v=l(),m=E();let o=V({username:"",password:""}),C=l(!1),d=l(!0);const c=l({username:"",password:""});let p=l(!1);g(()=>m.user);let i=l({dialog:!1,tipo:""}),B=V({cargando:p,deshabilitado:d,valorBtn:"Ingresar"});const D=g(()=>!!i.value);T(o,a=>{d.value=!0,a.password.length>0&&a.username&&v.value.validate().then(n=>{n.valid?d.value=!1:d.value=!0})}),g(()=>m.isLoggedIn);async function L(){if(C){p.value=!0;try{await m.login(o),o={username:"",password:""},k.push({name:"paises"})}catch(a){c.value.username="Datos incorrectos o inválidos",c.value.password="Revisa tu contraseña o sigue el procedimiento para reiniciarla",a.response&&a.response.status==401&&a.response.data&&a.response.data.code&&a.response.data.code!="credentials_error"&&(i.value.tipo=a.response.data.code,i.value.dialog=!0)}p.value=!1}}function N(a){/[0-9]/.test(a.key)||a.preventDefault()}const F=()=>{i.value.dialog=!1};return(a,n)=>{const _=z("router-link");return x(),H($,null,[e(b,null,{default:t(()=>[e(W,null,{default:t(()=>[e(I,{color:"background",permanent:"",location:"right",width:"704",elevation:1,id:"navigation-drawer-br-radius"},{default:t(()=>[e(O,{"min-width":"340","min-height":"510"},{default:t(()=>[e(j,{density:"compact",nav:"",class:"d-flex align-center justify-center",style:{height:"100vh"}},{default:t(()=>[e(b,{width:"461",height:"762",class:"rounded-xl mt-8 pt-8",elevation:1},{default:t(()=>[e(P,{class:"d-flex align-center justify-center mt-5"},{default:t(()=>[e(J,{size:"80",rounded:"0"},{default:t(()=>[e(Q,{src:A})]),_:1})]),_:1}),e(X,null,{default:t(()=>[e(R,{ref_key:"loginForm",ref:v},{default:t(()=>[e(h,{max:"5",class:"custom-hint-color mb-8",modelValue:s(o).username,"onUpdate:modelValue":n[0]||(n[0]=f=>s(o).username=f),variant:"outlined",placeholder:"Corporativo","persistent-hint":"",maxlength:5,type:"tel",flat:"",hint:"Ingresa tu número corporativo",rules:[s(u).required,s(u).isInteger,s(u).minLength(5),s(u).maxLength(5)],"error-messages":c.value.username,onKeypress:N},null,8,["modelValue","rules","error-messages"]),e(h,{class:"custom-hint-color mb-5",modelValue:s(o).password,"onUpdate:modelValue":n[1]||(n[1]=f=>s(o).password=f),placeholder:"Contraseña","persistent-hint":"",flat:"",type:"password",variant:"outlined",hint:"Ingresa tu contraseña",rules:[s(u).required],"error-messages":c.value.password},null,8,["modelValue","rules","error-messages"]),r("div",Z,[r("strong",null,[e(_,{to:{name:"olvide_credenciales"}},{default:t(()=>[e(Y,{variant:"text",class:"text-secondary text-decoration-none text-none font-weigth-bold cursor-pointer"},{default:t(()=>[y(" ¿Olvidaste tu contraseña?")]),_:1})]),_:1})])]),e(M,w(s(B),{onAccion:L}),null,16),r("div",ee,[ae,te,se,r("strong",null,[e(_,{to:{name:"solicitud_acceso"},class:"text-secondary text-decoration-none font-weigth-bold"},{default:t(()=>[y("Haz click aquí para hacer tu solicitud de usuario nuevo")]),_:1})])])]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(G,{class:"bg-login"})]),_:1})]),_:1}),D.value?(x(),S(K,w({key:0},s(i),{onCerrarDialogo:F}),null,16)):U("",!0)],64)}}};export{ve as default};
