import{S as f,a as h}from"./request-6aaa77d4.js";import{k as p,x,o as w,z as y,j as b,w as S,t as c,$ as d,A as e,H as k,I as L}from"./vue-router.esm-bundler-d94c5ebd.js";import{_ as I}from"./plugin-vueexport-helper-c27b6911.js";import{w as C}from"./useConfigInject-855253b5.js";import"./index-79d3e907.js";const u=o=>(k("data-v-83886e74"),o=o(),L(),o),R={class:"page"},T=u(()=>e("div",{class:"header flex text-center items-center"},[e("div",{class:"w-full text-3xl font-bold text-white"},"HKUST Smart Canteen")],-1)),V=u(()=>e("div",{class:"text-center text-2xl font-bold my-8"},"Login",-1)),B={__name:"Login",setup(o){const s=p(""),a=p(""),n=x(),l=p(!1),_=async()=>{if(s.value.length===0||a.value.length===0){C.error("Please complete all fields");return}l.value=!0;let r=await h("post","login",{itsc:s.value,password:a.value});if(l.value=!1,r.error===!1){let t=r.result;localStorage.setItem("food_minus_app",JSON.stringify({token:t,itsc:s.value})),n.push({name:"Home",params:{needReload:!0}})}},m=()=>{n.push({path:"/register"})},g=()=>{n.push({path:"/forget-password"})};return(r,t)=>{const v=f;return w(),y("div",R,[b(v,{spinning:l.value,tip:"Logging in"},{default:S(()=>[T,V,c(e("input",{type:"text",class:"input",placeholder:"ITSC","onUpdate:modelValue":t[0]||(t[0]=i=>s.value=i)},null,512),[[d,s.value]]),c(e("input",{type:"password",class:"input",placeholder:"password","onUpdate:modelValue":t[1]||(t[1]=i=>a.value=i)},null,512),[[d,a.value]]),e("span",{class:"text-btn color-primary",onClick:g},"Forget password?"),e("div",{class:"btn-group"},[e("div",{class:"btn primary-btn bg-color-primary font-bold",onClick:_}," Login "),e("div",{class:"btn secondary-btn color-primary font-bold",onClick:m}," Signup ")])]),_:1},8,["spinning"])])}}},z=I(B,[["__scopeId","data-v-83886e74"]]);export{z as default};