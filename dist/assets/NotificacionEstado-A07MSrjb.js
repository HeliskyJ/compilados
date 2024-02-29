import{p as S,g as j,u as E,r as h,a5 as B,X as V,R as P,C as T,n as y,J as w,d as l,Y as C,_ as q,ap as R,f as N,h as L,w as d,s as m,t as z,y as p,l as A}from"./index-kKdGCNTv.js";import{B as F}from"./BotonBi-aYjw3oQ-.js";import{V as I,e as M,d as k}from"./VCard-BF-vllR0.js";import{m as H,V as O,b as x}from"./VOverlay-M3ELfG5G.js";import{u as U,f as J}from"./VNavigationDrawer-mhgLr_4z.js";import{w as W}from"./VGrid-hx-kg6fk.js";import{V as X}from"./VRow-0Z9k1ICL.js";const Y=S({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...H({origin:"center center",scrollStrategy:"block",transition:{component:O},zIndex:2400})},"VDialog"),G=j()({name:"VDialog",props:Y(),emits:{"update:modelValue":o=>!0},setup(o,b){let{slots:s}=b;const i=E(o,"modelValue"),{scopeId:c}=U(),t=h();function f(n){var r,u;const e=n.relatedTarget,a=n.target;if(e!==a&&((r=t.value)!=null&&r.contentEl)&&((u=t.value)!=null&&u.globalTop)&&![document,t.value.contentEl].includes(a)&&!t.value.contentEl.contains(a)){const v=C(t.value.contentEl);if(!v.length)return;const _=v[0],D=v[v.length-1];e===_?D.focus():_.focus()}}B&&V(()=>i.value&&o.retainFocus,n=>{n?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0}),V(i,async n=>{var e,a;await P(),n?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(a=t.value.activatorEl)==null||a.focus({preventScroll:!0})});const g=T(()=>y({"aria-haspopup":"dialog","aria-expanded":String(i.value)},o.activatorProps));return w(()=>{const n=x.filterProps(o);return l(x,y({ref:t,class:["v-dialog",{"v-dialog--fullscreen":o.fullscreen,"v-dialog--scrollable":o.scrollable},o.class],style:o.style},n,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,"aria-modal":"true",activatorProps:g.value,role:"dialog"},c),{activator:s.activator,default:function(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return l(W,{root:"VDialog"},{default:()=>{var u;return[(u=s.default)==null?void 0:u.call(s,...a)]}})}})}),J({},t)}}),K=["innerHTML"],Q=p("span",null,[m("Si tiene alguna duda o consulta escribe a "),p("a",{href:"mailto:servicio_abastecimiento@bi.com.gt",class:"text-primary text-decoration-none"},"servicio_abastecimiento@bi.com.gt"),m(" o llama al "),p("b",null,"2420-3000"),m(", ext."),p("b",null,"2659"),m(".")],-1),Z={__name:"NotificacionEstado",props:{dialog:{type:Boolean,default:!1,required:!0},tipo:{type:String,required:!0}},emits:["cerrar-dialogo"],setup(o,{emit:b}){const s=o,i=b,c=h({}),t=[{tipo:"usario_bloqueado",asunto:"Lo sentimos,",mensaje:"Has ingresado los datos de forma incorrecta en 3 ocasiones seguidas.<br>Tu usuario ha sido bloqueado temporalmente.<br><br>Si quieres recuperar tu contraseña selecciona la opción de recuperación de contraseña.<br><br>",leyenda:""},{tipo:"recuperacion_exitosa",asunto:"Recuperación en Proceso,",mensaje:"Por favor revisa la bandeja de entrada de tu correo electrónico registrado. Recibirás un mensaje con una contraseña provisional e instrucciones para terminar tu proceso de recuperación. <br><br>",leyenda:""},{tipo:"solicitudes_bloqueadas",asunto:"Solicitud bloqueada",mensaje:"Solicitud bloqueada<br><br>",leyenda:""},{tipo:"solicitud_existente",asunto:"Solicitud en proceso",mensaje:"Solicitud en proceso<br><br>",leyenda:""},{tipo:"usario_existe",asunto:"Datos invalidos",mensaje:"Datos invalidos<br><br>",leyenda:"Datos invalidos"},{tipo:"usuario_invalido",asunto:"Datos invalidos",mensaje:"Datos invalidos<br><br>",leyenda:"Datos invalidos"},{tipo:"solicitud_exitosa",asunto:"Tu solicitud ha sido procesada con éxito,",mensaje:"Recibirás un correo con los detalles de la solicitud realizada así como un correo de finalización de gestión una vez que se haya procesado tu caso.<br><br>",leyenda:""}];let f=R({cargando:!1,deshabilitado:!1,valorBtn:"Cerrar"});function g(){i("cerrar-dialogo")}return V(()=>s.dialog,n=>{if(n&&s.tipo.length>0){const e=t.find(a=>a.tipo===s.tipo);e&&(c.value=e)}}),(n,e)=>(N(),L(X,{justify:"center"},{default:d(()=>[l(G,{scrim:"secondary",modelValue:s.dialog,"onUpdate:modelValue":e[0]||(e[0]=a=>s.dialog=a),persistent:"","min-width":"400",width:"650"},{default:d(()=>[l(I,{class:"text-center text-secondary rounded-xl px-5 pt-5 pb-5"},{default:d(()=>[l(M,null,{default:d(()=>[m(z(c.value.asunto),1)]),_:1}),l(k,{class:"text-body-1"},{default:d(()=>[p("span",{innerHTML:c.value.mensaje},null,8,K),Q]),_:1}),l(F,y(A(f),{onAccion:g}),null,16)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},ie=q(Z,[["__file","/home/projects/abastecimiento-app/frontend/src/components/modales/NotificacionEstado.vue"]]);export{ie as D};
