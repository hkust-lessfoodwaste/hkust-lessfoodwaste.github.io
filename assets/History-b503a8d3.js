import{a as _,S as c}from"./request-ffde1dba.js";import{d as m}from"./dailyItem-87513350.js";import{m as p}from"./mainHeader-df61548e.js";import{_ as d}from"./plugin-vueexport-helper-c27b6911.js";import{k as u,g as f,o as s,z as a,j as o,w as y,A as v,F as g,G as h}from"./vue-router.esm-bundler-d94c5ebd.js";import"./useConfigInject-855253b5.js";import"./index-6cff85b5.js";const x={class:"page"},w={class:"w-full h-screen mt-4"},k={__name:"History",setup(H){const e=u(null),n=async()=>{let t=await _("get","history",{},!0);t.error===!1&&(e.value=t.result)};return f(()=>{n()}),(t,b)=>{const r=c;return s(),a("div",x,[o(p),o(r,{spinning:e.value==null,tip:"loading"},{default:y(()=>[v("div",w,[(s(!0),a(g,null,h(e.value,(i,l)=>(s(),a("div",{class:"flex justify-between items-center",key:l},[o(m,{data:i},null,8,["data"])]))),128))])]),_:1},8,["spinning"])])}}},V=d(k,[["__scopeId","data-v-12803b73"]]);export{V as default};