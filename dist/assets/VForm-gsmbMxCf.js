import{p,m as b,g as D,r as g,J as h,d as y}from"./index-kKdGCNTv.js";import{t as F,v as V,f as R}from"./VNavigationDrawer-mhgLr_4z.js";const P={required:e=>!!e||"Este campo es requerido",required:e=>!!e||"Este campo es requerido",minLength:e=>t=>t&&t.length>=e||`Mínimo ${e} caracteres`,maxLength:e=>t=>t&&t.length<=e||`Máximo ${e} caracteres`,maxInt:e=>t=>!t||t<=e||`Debe ser menor o igual a ${e}`,minInt:e=>t=>!t||t>=e||`Debe ser mayor o igual a ${e}`,isDecimal:e=>!e||/^\d+(\.\d+)?$/.test(e)||"Debe ser un número decimal",isInteger:e=>!e||/^\d+$/.test(e)||"Debe ser un número entero",isEmail:e=>/.+@.+\..+/.test(e)||"Debe ser un correo electrónico válido"},$=p({...b(),...F()},"VForm"),k=D()({name:"VForm",props:$(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:c}=t;const s=V(e),m=g();function u(o){o.preventDefault(),s.reset()}function l(o){const a=o,r=s.validate();a.then=r.then.bind(r),a.catch=r.catch.bind(r),a.finally=r.finally.bind(r),c("submit",a),a.defaultPrevented||r.then(d=>{var i;let{valid:f}=d;f&&((i=m.value)==null||i.submit())}),a.preventDefault()}return h(()=>{var o;return y("form",{ref:m,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:u,onSubmit:l},[(o=n.default)==null?void 0:o.call(n,s)])}),R(s,m)}});export{k as V,P as f};
