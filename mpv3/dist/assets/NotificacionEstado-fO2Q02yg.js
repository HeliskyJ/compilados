import{_ as B}from"./BotonBi-wLxOosp-.js";import{V as P,e as S,c as w}from"./VCard-oBXmrzsN.js";import{m as T,V as D,a as x}from"./VOverlay-tZBTIQe4.js";import{u as j,d as C}from"./VTextField-EOrh4fug.js";import{p as R,g as q,u as L,r as h,I,E as V,J as N,D as k,n as _,K as A,d as l,L as F,B as H,f as M,h as O,w as d,s as m,t as U,y as f,l as z}from"./index-Qel_X4Xg.js";import{c as J}from"./VBtn-Zz6xvQ1-.js";import{V as K}from"./VRow-gncpQbWG.js";const W=R({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...T({origin:"center center",scrollStrategy:"block",transition:{component:D},zIndex:2400})},"VDialog"),$=q()({name:"VDialog",props:W(),emits:{"update:modelValue":o=>!0},setup(o,g){let{slots:n}=g;const s=L(o,"modelValue"),{scopeId:c}=j(),t=h();function p(r){var i,u;const e=r.relatedTarget,a=r.target;if(e!==a&&((i=t.value)!=null&&i.contentEl)&&((u=t.value)!=null&&u.globalTop)&&![document,t.value.contentEl].includes(a)&&!t.value.contentEl.contains(a)){const v=F(t.value.contentEl);if(!v.length)return;const y=v[0],E=v[v.length-1];e===y?E.focus():y.focus()}}I&&V(()=>s.value&&o.retainFocus,r=>{r?document.addEventListener("focusin",p):document.removeEventListener("focusin",p)},{immediate:!0}),V(s,async r=>{var e,a;await N(),r?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(a=t.value.activatorEl)==null||a.focus({preventScroll:!0})});const b=k(()=>_({"aria-haspopup":"dialog","aria-expanded":String(s.value)},o.activatorProps));return A(()=>{const r=x.filterProps(o);return l(x,_({ref:t,class:["v-dialog",{"v-dialog--fullscreen":o.fullscreen,"v-dialog--scrollable":o.scrollable},o.class],style:o.style},r,{modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,"aria-modal":"true",activatorProps:b.value,role:"dialog"},c),{activator:n.activator,default:function(){for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return l(J,{root:"VDialog"},{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n,...a)]}})}})}),C({},t)}}),G=["innerHTML"],Q=f("span",null,[m("Si tiene alguna duda o consulta escribe a "),f("a",{href:"mailto:servicio_abastecimiento@bi.com.gt",class:"text-primary text-decoration-none"},"servicio_abastecimiento@bi.com.gt"),m(" o llama al "),f("b",null,"2420-3000"),m(", ext."),f("b",null,"2659"),m(".")],-1),re={__name:"NotificacionEstado",props:{dialog:{type:Boolean,default:!1,required:!0},tipo:{type:String,required:!0}},emits:["cerrar-dialogo"],setup(o,{emit:g}){const n=o,s=g,c=h({}),t=[{tipo:"olvide_password",asunto:"Recuperar contraseña",mensaje:"Se te estará enviando un correo con una contraseña provisional, selecciona el botón y sigue los pasos del correo.",leyenda:"cambiar_pss_btn"},{tipo:"credentials_error",asunto:"Usuario Bloqueado",mensaje:"Haz click en el botón.",leyenda:"cambiar_pss_btn"},{tipo:"usario_bloqueado",asunto:"Lo sentimos,",mensaje:"Has ingresado los datos de forma incorrecta en 3 ocasiones seguidas.<br>Tu usuario ha sido bloqueado temporalmente.<br><br>Si quieres recuperar tu contraseña selecciona la opción de recuperación de contraseña.<br><br>",leyenda:""},{tipo:"recuperacion_exitosa",asunto:"Recuperación en Proceso,",mensaje:"Por favor revisa la bandeja de entrada de tu correo electrónico registrado. Recibirás un mensaje con una contraseña provisional e instrucciones para terminar tu proceso de recuperación. <br><br>",leyenda:""}];let p=H({cargando:!1,deshabilitado:!1,valorBtn:"Cerrar"});function b(){s("cerrar-dialogo")}return V(()=>n.dialog,r=>{if(r&&n.tipo.length>0){const e=t.find(a=>a.tipo===n.tipo);e&&(c.value=e)}}),(r,e)=>(M(),O(K,{justify:"center"},{default:d(()=>[l($,{scrim:"secondary",modelValue:n.dialog,"onUpdate:modelValue":e[0]||(e[0]=a=>n.dialog=a),persistent:"","min-width":"400",width:"650"},{default:d(()=>[l(P,{class:"text-center text-secondary rounded-xl px-5 pt-5 pb-5"},{default:d(()=>[l(S,null,{default:d(()=>[m(U(c.value.asunto),1)]),_:1}),l(w,{class:"text-body-1"},{default:d(()=>[f("span",{innerHTML:c.value.mensaje},null,8,G),Q]),_:1}),l(B,_(z(p),{onAccion:b}),null,16)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{re as _};
