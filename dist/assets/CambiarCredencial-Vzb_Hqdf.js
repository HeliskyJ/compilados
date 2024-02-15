import{V as $,a as w,_ as z,c as E,b as L,f as S,k as q,l as D,m as j}from"./VTextField-6Uh1m6AQ.js";import{p as N,m as U,a as M,b as Z,g as G,c as H,a4 as J,a6 as K,d as e,y as O,ac as Q,r as u,u as W,z as P,B as T,C as X,E as Y,e as x,f as B,w as a,k as s,ad as R,l as h,i as ee,j as ae,F as se,v as C,V as te,h as oe,t as ne}from"./index-8OeT41xY.js";import{V as I,b as le,c as re,d as ie}from"./VCard-aPhAqH5Q.js";import{V as de}from"./VContainer-s4yXFdMn.js";import{n as ce,e as ue,o as me,q as fe,r as ve,s as pe,h as ge,t as he,i as Ce,v as Ve,w as ye,x as ke,y as xe,V as be,z as _e}from"./VBtn-xcubdz3h.js";import{V as we}from"./index-x7ymgcsx.js";const Le=N({color:String,...ce(),...U(),...ue(),...me(),...fe(),...ve(),...pe(),...M(),...Z()},"VSheet"),Se=G()({name:"VSheet",props:Le(),setup(o,v){let{slots:b}=v;const{themeClasses:p}=H(o),{backgroundColorClasses:r,backgroundColorStyles:i}=ge(J(o,"color")),{borderClasses:V}=he(o),{dimensionStyles:g}=Ce(o),{elevationClasses:c}=Ve(o),{locationStyles:y}=ye(o),{positionClasses:m}=ke(o),{roundedClasses:l}=xe(o);return K(()=>e(o.tag,{class:["v-sheet",p.value,r.value,V.value,c.value,m.value,l.value,o.class],style:[i.value,g.value,y.value,o.style]},b)),{}}}),Pe=C("p",{class:"text-secondary text-h6 mt-5"},"Cambio de contraseña",-1),Te={class:"d-flex justify-center mb-5 mt-9"},Be={class:"mt-4 mb-5 text-center",color:"red"},Ee={__name:"CambiarCredencial",setup(o){const v=O(),p=Q().query.token;let r=u(!1),i=u(!1);const V=u(),g=W();let c=P({clave:"",confirmaClave:""}),y=u(!1),m=u(!0);const l=u({clave:"",confirmaClave:""});let k=!1;const _=P([{regex:/^.{8,}$/,message:"Al menos 8 caracteres.",estado:!1},{regex:/[A-Z]/,message:"Al menos una letra mayúscula.",estado:!1},{regex:/[a-z]/,message:"Al menos una letra minúscula.",estado:!1},{regex:/[0-9]/,message:"Al menos un número."},{regex:/[@#$%^&*.]/,message:'Al menos un símbolo especial sin espacios "!@#$%^&*".',estado:!1}]);T(()=>g.user),X(c,n=>{let t=0;m=!0,_.forEach(f=>{f.regex.test(n.clave.trim())?(t++,f.estado=!0):f.estado=!1}),t==5&&(m=!1)}),T(()=>g.isLoggedIn);async function A(){if(y){k=!0;try{p&&oe.post(`actualizar-clave/?token=${p}`,c).then(n=>{n.status==200&&v.push({name:"login"})}).catch(n=>{n.response.data.error=="The password is too similar to the last name."?l.value.clave="La clave es demasiado similar a tu apellio":n.response.data.detail=="The password is too similar to the first name."?l.value.clave="La clave es demasiado similar a tu nombre":n.response.data.detail=="The password is too similar to the email address."?l.value.clave="La clave es demasiado similar a tu dirección de correo":n.response.data.detail.code=="no_coincide"?l.value.confirmaClave=n.response.data.detail.message:n.response.data.detail=="Token invalido o error"&&v.push({name:"token_expirado"})})}catch{l.value.clave="Datos incorrectos o inválidos",l.value.confirmaClave="Revisa tu contraseña o sigue el procedimiento para reiniciarla"}}k=!1}return(n,t)=>{const f=Y("router-link");return x(),B(I,null,{default:a(()=>[e(we,null,{default:a(()=>[e($,{color:"background",permanent:"",location:"right",width:"704",elevation:1,id:"navigation-drawer-br-radius"},{default:a(()=>[e(le,{"min-width":"340","min-height":"510"},{default:a(()=>[e(w,{density:"compact",nav:"",class:"d-flex align-center justify-center",style:{height:"100vh"}},{default:a(()=>[e(I,{width:"461",height:"762",class:"rounded-xl mt-8 pt-8",elevation:1},{default:a(()=>[e(re,{class:"d-flex align-center flex-column justify-center mt-5"},{default:a(()=>[e(ie,{image:z,rounded:"0",size:"80"}),Pe]),_:1}),e(de,null,{default:a(()=>[e(E,{ref_key:"loginForm",ref:V},{default:a(()=>[e(L,{class:"custom-hint-color mb-5",modelValue:s(c).clave,"onUpdate:modelValue":t[0]||(t[0]=d=>s(c).clave=d),placeholder:"Contraseña","persistent-hint":"",flat:"","append-inner-icon":s(r)?"mdi-eye":"mdi-eye-off",type:s(r)?"text":"password",variant:"outlined",hint:"Ingresa la contraseña nueva",rules:[s(S).required],"error-messages":l.value.clave,"onClick:appendInner":t[1]||(t[1]=d=>R(r)?r.value=!s(r):r=!s(r))},null,8,["modelValue","append-inner-icon","type","rules","error-messages"]),e(L,{class:"custom-hint-color mb-5",modelValue:s(c).confirmaClave,"onUpdate:modelValue":t[2]||(t[2]=d=>s(c).confirmaClave=d),placeholder:"Contraseña","persistent-hint":"",flat:"","append-inner-icon":s(i)?"mdi-eye":"mdi-eye-off",type:s(i)?"text":"password",variant:"outlined",hint:"Ingresa nuevamente tu contraseña nueva",rules:[s(S).required],"error-messages":l.value.confirmaClave,"onClick:appendInner":t[3]||(t[3]=d=>R(i)?i.value=!s(i):i=!s(i))},null,8,["modelValue","append-inner-icon","type","rules","error-messages"]),e(Se,{dense:""},{default:a(()=>[e(q,{class:"mb-n8"},{default:a(()=>[h("La contraseña debe tener: ")]),_:1}),e(w,{dense:""},{default:a(()=>[(x(!0),ee(se,null,ae(_,(d,F)=>(x(),B(D,{class:"mb-n6",key:F},{prepend:a(()=>[e(_e,{class:"font-weight-bold",color:d.estado?"success":"primary-"},{default:a(()=>[h(" mdi-check")]),_:2},1032,["color"])]),default:a(()=>[e(j,{class:"text-caption",textContent:ne(d.message)},null,8,["textContent"])]),_:2},1024))),128))]),_:1})]),_:1}),C("div",Te,[e(be,{onClick:t[4]||(t[4]=d=>A()),class:"text-none",rounded:"xl",color:"secondary",size:"x-large",width:"25vh",loading:s(k),disabled:s(m)},{default:a(()=>[h(" Cambiar ")]),_:1},8,["loading","disabled"])]),C("div",Be,[C("strong",null,[e(f,{to:{name:"login"},class:"text-secondary text-decoration-none font-weigth-bold"},{default:a(()=>[h("Iniciar Sesión")]),_:1})])])]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(te,{class:"bg-login"})]),_:1})]),_:1})}}};export{Ee as default};
