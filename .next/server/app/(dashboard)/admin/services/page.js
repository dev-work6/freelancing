(()=>{var e={};e.id=1327,e.ids=[1327],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},56108:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var a=s(70260),r=s(28203),i=s(25155),n=s.n(i),l=s(67292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["(dashboard)",{children:["admin",{children:["services",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,45491)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\services\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,71975)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,19611)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\services\\page.tsx"],p={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/(dashboard)/admin/services/page",pathname:"/admin/services",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},38155:(e,t,s)=>{Promise.resolve().then(s.bind(s,45491))},97827:(e,t,s)=>{Promise.resolve().then(s.bind(s,10091))},90111:(e,t,s)=>{Promise.resolve().then(s.bind(s,71975))},27063:(e,t,s)=>{Promise.resolve().then(s.bind(s,84426))},10091:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>I});var a=s(45512),r=s(58009),i=s(87021),n=s(71965),l=s(25409),o=s(53261),d=s(48859),c=s(54069),p=s(29952),u=s(6004),m=s(31412),h=s(13024),x=s(66582),f=s(38762),v=s(98060),g=s(30830),j="Checkbox",[y,b]=(0,u.A)(j),[w,C]=y(j),N=r.forwardRef((e,t)=>{let{__scopeCheckbox:s,name:i,checked:n,defaultChecked:l,required:o,disabled:d,value:c="on",onCheckedChange:u,form:x,...f}=e,[v,j]=r.useState(null),y=(0,p.s)(t,e=>j(e)),b=r.useRef(!1),C=!v||x||!!v.closest("form"),[N=!1,k]=(0,h.i)({prop:n,defaultProp:l,onChange:u}),D=r.useRef(N);return r.useEffect(()=>{let e=v?.form;if(e){let t=()=>k(D.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[v,k]),(0,a.jsxs)(w,{scope:s,state:N,disabled:d,children:[(0,a.jsx)(g.sG.button,{type:"button",role:"checkbox","aria-checked":P(N)?"mixed":N,"aria-required":o,"data-state":z(N),"data-disabled":d?"":void 0,disabled:d,value:c,...f,ref:y,onKeyDown:(0,m.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,m.m)(e.onClick,e=>{k(e=>!!P(e)||!e),C&&(b.current=e.isPropagationStopped(),b.current||e.stopPropagation())})}),C&&(0,a.jsx)(A,{control:v,bubbles:!b.current,name:i,value:c,checked:N,required:o,disabled:d,form:x,style:{transform:"translateX(-100%)"},defaultChecked:!P(l)&&l})]})});N.displayName=j;var k="CheckboxIndicator",D=r.forwardRef((e,t)=>{let{__scopeCheckbox:s,forceMount:r,...i}=e,n=C(k,s);return(0,a.jsx)(v.C,{present:r||P(n.state)||!0===n.state,children:(0,a.jsx)(g.sG.span,{"data-state":z(n.state),"data-disabled":n.disabled?"":void 0,...i,ref:t,style:{pointerEvents:"none",...e.style}})})});D.displayName=k;var A=e=>{let{control:t,checked:s,bubbles:i=!0,defaultChecked:n,...l}=e,o=r.useRef(null),d=(0,x.Z)(s),c=(0,f.X)(t);r.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(d!==s&&t){let a=new Event("click",{bubbles:i});e.indeterminate=P(s),t.call(e,!P(s)&&s),e.dispatchEvent(a)}},[d,s,i]);let p=r.useRef(!P(s)&&s);return(0,a.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n??p.current,...l,tabIndex:-1,ref:o,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function P(e){return"indeterminate"===e}function z(e){return P(e)?"indeterminate":e?"checked":"unchecked"}var S=s(24849),R=s(59462);let J=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(N,{ref:s,className:(0,R.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:(0,a.jsx)(D,{className:(0,R.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(S.A,{className:"h-4 w-4"})})}));function _({open:e,onOpenChange:t,service:s,onClose:p}){let[u,m]=(0,r.useState)({title:"",description:"",shortDescription:"",category:["Web Development"],features:[],pricing:{basePrice:0,currency:["INR"],billingCycle:["one-time"],customQuote:!1},deliverables:[],timeline:{estimatedDuration:1,durationUnit:"weeks"},technologies:[],images:[],status:"active",customization:{isCustomizable:!1,options:[]},support:{includedHours:0,responseTime:"",channels:[]}}),h=async(e,t)=>{if(e.preventDefault(),t.description.length<10){alert("Description must be at least 10 characters long");return}if(t.shortDescription.length<10){alert("Short description must be at least 10 characters long");return}let a={...t,pricing:{basePrice:t.pricing.basePrice.toString(),currency:t.pricing.currency,billingCycle:t.pricing.billingCycle,customQuote:t.pricing.customQuote||!1},category:Array.isArray(t.category)?t.category:[t.category],features:t.features||[],deliverables:Array.isArray(t.deliverables)?t.deliverables:[],technologies:Array.isArray(t.technologies)?t.technologies:[]};try{let e=await fetch(s?._id?`/api/services/${s._id}`:"/api/services",{method:s?._id?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!e.ok){let t=await e.json();alert(t.details||t.error||"Failed to create service");return}p()}catch(e){console.error("Error creating service:",e),alert("Failed to create service")}};return(0,a.jsx)(n.lG,{open:e,onOpenChange:t,children:(0,a.jsxs)(n.Cf,{className:"w-full max-w-[90vw] h-[90vh] overflow-y-auto",children:[(0,a.jsx)(n.c7,{children:(0,a.jsx)(n.L3,{children:s?"Edit Service":"Add New Service"})}),(0,a.jsxs)("form",{onSubmit:e=>h(e,u),className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"title",children:"Title"}),(0,a.jsx)(l.p,{id:"title",value:u.title,onChange:e=>m({...u,title:e.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"description",children:"Description"}),(0,a.jsx)(d.T,{id:"description",value:u.description,onChange:e=>m({...u,description:e.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"shortDescription",children:"Short Description"}),(0,a.jsx)(d.T,{id:"shortDescription",value:u.shortDescription,onChange:e=>m({...u,shortDescription:e.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"category",children:"Categories"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:["Web Development","Mobile Development","Cloud Services","DevOps","Consulting","Support","Other","UI/UX Design","API Development","Database Design","System Architecture","Security Services","Testing & QA","AI/ML Development","Blockchain Development","IoT Solutions","E-commerce Development","CMS Development","Technical Writing","Code Review","Performance Optimization","Legacy System Migration","Email Server Setup","Domain Management","Web Hosting","SSL Certificates","DNS Management","Server Administration","Backup Solutions","Load Balancing","CDN Setup","Database Administration"].map(e=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(J,{id:e,checked:u.category?.includes(e),onCheckedChange:t=>{let s=t?[...u.category||[],e]:u.category?.filter(t=>t!==e)||[];m({...u,category:s})}}),(0,a.jsx)(o.J,{htmlFor:e,children:e})]},e))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{children:"Features"}),u.features.map((e,t)=>(0,a.jsxs)("div",{className:"space-y-2 mb-4 p-4 border rounded",children:[(0,a.jsx)(l.p,{placeholder:"Feature name",value:e.name,onChange:e=>{let s=[...u.features];s[t].name=e.target.value,m({...u,features:s})}}),(0,a.jsx)(d.T,{placeholder:"Feature description",value:e.description,onChange:e=>{let s=[...u.features];s[t].description=e.target.value,m({...u,features:s})}}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(J,{checked:e.included,onCheckedChange:e=>{let s=[...u.features];s[t].included=e,m({...u,features:s})}}),(0,a.jsx)(o.J,{children:"Included"})]}),(0,a.jsx)(i.$,{type:"button",variant:"destructive",onClick:()=>{let e=u.features.filter((e,s)=>s!==t);m({...u,features:e})},children:"Remove Feature"})]},t)),(0,a.jsx)(i.$,{type:"button",onClick:()=>{m({...u,features:[...u.features,{name:"",description:"",included:!0}]})},children:"Add Feature"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(o.J,{children:"Pricing"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"basePrice",children:"Base Price"}),(0,a.jsx)(l.p,{id:"basePrice",type:"number",value:u.pricing.basePrice,onChange:e=>m({...u,pricing:{...u.pricing,basePrice:Number(e.target.value)}}),required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"currency",children:"Currency"}),(0,a.jsx)("div",{className:"space-y-2",children:["INR","USD","EUR","GBP"].map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(J,{checked:u.pricing.currency.includes(e),onCheckedChange:t=>{let s=t?[...u.pricing.currency,e]:u.pricing.currency.filter(t=>t!==e);m({...u,pricing:{...u.pricing,currency:s}})}}),(0,a.jsx)(o.J,{children:e})]},e))})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"billingCycle",children:"Billing Cycle"}),(0,a.jsx)("div",{className:"space-y-2",children:["one-time","hourly","monthly","quarterly","yearly"].map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(J,{checked:u.pricing.billingCycle.includes(e),onCheckedChange:t=>{let s=t?[...u.pricing.billingCycle,e]:u.pricing.billingCycle.filter(t=>t!==e);m({...u,pricing:{...u.pricing,billingCycle:s}})}}),(0,a.jsx)(o.J,{children:e.charAt(0).toUpperCase()+e.slice(1).replace("-"," ")})]},e))})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(J,{checked:u.pricing.customQuote,onCheckedChange:e=>m({...u,pricing:{...u.pricing,customQuote:e}})}),(0,a.jsx)(o.J,{children:"Custom Quote"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{children:"Deliverables"}),u.deliverables.map((e,t)=>(0,a.jsxs)("div",{className:"flex gap-2 mb-2",children:[(0,a.jsx)(l.p,{value:e,onChange:e=>{let s=[...u.deliverables];s[t]=e.target.value,m({...u,deliverables:s})}}),(0,a.jsx)(i.$,{type:"button",variant:"destructive",onClick:()=>{let e=u.deliverables.filter((e,s)=>s!==t);m({...u,deliverables:e})},children:"Remove"})]},t)),(0,a.jsx)(i.$,{type:"button",onClick:()=>{m({...u,deliverables:[...u.deliverables,""]})},children:"Add Deliverable"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"estimatedDuration",children:"Estimated Duration"}),(0,a.jsx)(l.p,{id:"estimatedDuration",type:"number",value:u.timeline.estimatedDuration,onChange:e=>m({...u,timeline:{...u.timeline,estimatedDuration:Number(e.target.value)}})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"durationUnit",children:"Duration Unit"}),(0,a.jsxs)(c.l6,{value:u.timeline.durationUnit,onValueChange:e=>m({...u,timeline:{...u.timeline,durationUnit:e}}),children:[(0,a.jsx)(c.bq,{children:(0,a.jsx)(c.yv,{placeholder:"Select unit"})}),(0,a.jsxs)(c.gC,{children:[(0,a.jsx)(c.eb,{value:"days",children:"Days"}),(0,a.jsx)(c.eb,{value:"weeks",children:"Weeks"}),(0,a.jsx)(c.eb,{value:"months",children:"Months"})]})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{children:"Technologies"}),u.technologies.map((e,t)=>(0,a.jsxs)("div",{className:"flex gap-2 mb-2",children:[(0,a.jsx)(l.p,{value:e,onChange:e=>{let s=[...u.technologies];s[t]=e.target.value,m({...u,technologies:s})}}),(0,a.jsx)(i.$,{type:"button",variant:"destructive",onClick:()=>{let e=u.technologies.filter((e,s)=>s!==t);m({...u,technologies:e})},children:"Remove"})]},t)),(0,a.jsx)(i.$,{type:"button",onClick:()=>{m({...u,technologies:[...u.technologies,""]})},children:"Add Technology"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{children:"Images"}),u?.images?.map((e,t)=>a.jsxs("div",{className:"space-y-2 mb-4 p-4 border rounded",children:[a.jsx(l.p,{placeholder:"Image URL",value:e.url,onChange:e=>{let s=u?.images?[...u.images]:[];s[t].url=e.target.value,m({...u,images:s})}}),a.jsx(l.p,{placeholder:"Alt text",value:e.alt||"",onChange:e=>{let s=u?.images?[...u.images]:[];s[t].alt=e.target.value,m({...u,images:s})}}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(J,{checked:e.isPrimary,onCheckedChange:e=>{let s=u.images?.map((s,a)=>({...s,isPrimary:a===t&&e}));m({...u,images:s})}}),a.jsx(o.J,{children:"Primary Image"})]}),a.jsx(i.$,{type:"button",variant:"destructive",onClick:()=>{let e=u?.images?.filter((e,s)=>s!==t)??[];m({...u,images:e})},children:"Remove Image"})]},t)),(0,a.jsx)(i.$,{type:"button",onClick:()=>{m({...u,images:[...u?.images||[],{url:"",alt:"",isPrimary:!1}]})},children:"Add Image"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{children:"SEO"}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(l.p,{placeholder:"Meta Title",value:u.seo?.metaTitle||"",onChange:e=>m({...u,seo:{...u.seo,metaTitle:e.target.value}})}),(0,a.jsx)(d.T,{placeholder:"Meta Description",value:u.seo?.metaDescription||"",onChange:e=>m({...u,seo:{...u.seo,metaDescription:e.target.value}})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{children:"Keywords"}),u.seo?.keywords?.map((e,t)=>a.jsxs("div",{className:"flex gap-2 mb-2",children:[a.jsx(l.p,{value:e,onChange:e=>{let s=[...u.seo?.keywords||[]];s[t]=e.target.value,m({...u,seo:{...u.seo,keywords:s}})}}),a.jsx(i.$,{type:"button",variant:"destructive",onClick:()=>{let e=u.seo?.keywords?.filter((e,s)=>s!==t)||[];m({...u,seo:{...u.seo,keywords:e}})},children:"Remove"})]},t)),(0,a.jsx)(i.$,{type:"button",onClick:()=>{m({...u,seo:{...u.seo,keywords:[...u.seo?.keywords||[],""]}})},children:"Add Keyword"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{children:"Customization"}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(J,{checked:u?.customization?.isCustomizable,onCheckedChange:e=>m({...u,customization:{...u.customization,isCustomizable:e}})}),(0,a.jsx)(o.J,{children:"Is Customizable"})]}),u?.customization?.isCustomizable&&(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{children:"Customization Options"}),u?.customization?.options?.map((e,t)=>a.jsxs("div",{className:"space-y-2 mb-4 p-4 border rounded",children:[a.jsx(l.p,{placeholder:"Option name",value:e.name||"",onChange:e=>{let s=[...u?.customization?.options||[]];s[t]={...s[t],name:e.target.value},m({...u,customization:{...u.customization,options:s}})}}),a.jsx(l.p,{type:"number",placeholder:"Price modifier",value:e.priceModifier||0,onChange:e=>{let s=[...u?.customization?.options||[]];s[t]={...s[t],priceModifier:Number(e.target.value)},m({...u,customization:{...u.customization,options:s}})}}),a.jsxs("div",{children:[a.jsx(o.J,{children:"Values"}),e.values?.map((e,s)=>a.jsxs("div",{className:"flex gap-2 mb-2",children:[a.jsx(l.p,{value:e,onChange:e=>{let a=[...u?.customization?.options||[]],r=[...a[t].values||[]];r[s]=e.target.value,a[t]={...a[t],values:r},m({...u,customization:{...u.customization,options:a}})}}),a.jsx(i.$,{type:"button",variant:"destructive",onClick:()=>{let e=[...u?.customization?.options||[]],a=e[t].values?.filter((e,t)=>t!==s)||[];e[t]={...e[t],values:a},m({...u,customization:{...u.customization,options:e}})},children:"Remove Value"})]},s)),a.jsx(i.$,{type:"button",onClick:()=>{let e=[...u?.customization?.options||[]];e[t]={...e[t],values:[...e[t].values||[],""]},m({...u,customization:{...u.customization,options:e}})},children:"Add Value"})]}),a.jsx(i.$,{type:"button",variant:"destructive",onClick:()=>{let e=u?.customization?.options?.filter((e,s)=>s!==t)||[];m({...u,customization:{...u.customization,options:e}})},children:"Remove Option"})]},t)),(0,a.jsx)(i.$,{type:"button",onClick:()=>{m({...u,customization:{...u.customization,options:[...u.customization.options,{name:"",values:[],priceModifier:0}]}})},children:"Add Option"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{children:"Support"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"includedHours",children:"Included Support Hours"}),(0,a.jsx)(l.p,{id:"includedHours",type:"number",value:u?.support?.includedHours||0,onChange:e=>m({...u,support:{...u.support,includedHours:Number(e.target.value)}})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"responseTime",children:"Response Time"}),(0,a.jsx)(l.p,{id:"responseTime",value:u?.support?.responseTime||"",onChange:e=>m({...u,support:{...u.support,responseTime:e.target.value}})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{children:"Support Channels"}),["email","phone","chat","ticket"].map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(J,{checked:u?.support?.channels?.includes(e),onCheckedChange:t=>{let s=t?[...u.support.channels||[],e]:u.support.channels?.filter(t=>t!==e)||[];m({...u,support:{...u.support,channels:s}})}}),(0,a.jsx)(o.J,{children:e.charAt(0).toUpperCase()+e.slice(1)})]},e))]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.J,{htmlFor:"status",children:"Status"}),(0,a.jsxs)(c.l6,{value:u?.status,onValueChange:e=>m({...u,status:e}),children:[(0,a.jsx)(c.bq,{children:(0,a.jsx)(c.yv,{placeholder:"Select status"})}),(0,a.jsxs)(c.gC,{children:[(0,a.jsx)(c.eb,{value:"active",children:"Active"}),(0,a.jsx)(c.eb,{value:"inactive",children:"Inactive"}),(0,a.jsx)(c.eb,{value:"archived",children:"Archived"})]})]})]}),(0,a.jsxs)("div",{className:"flex justify-end space-x-2",children:[(0,a.jsx)(i.$,{type:"button",variant:"outline",onClick:p,children:"Cancel"}),(0,a.jsx)(i.$,{type:"submit",children:"Save"})]})]})]})})}J.displayName=N.displayName;var T=s(41680);let E=(0,T.A)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),M=(0,T.A)("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),U=(0,T.A)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);var F=s(97643),$=s(26008);function I(){let[e,t]=(0,r.useState)(!1),[s,n]=(0,r.useState)(null),[l,o]=(0,r.useState)([]),d=async()=>{try{let e=localStorage.getItem("authToken"),t=await fetch("/api/services",{headers:{Authorization:`Bearer ${e}`}});if(t.ok){let e=await t.json();o(e)}}catch(e){console.error("Error fetching services:",e)}},c=e=>{n(e),t(!0)},p=async e=>{if(confirm("Are you sure you want to delete this service?"))try{let t=localStorage.getItem("authToken");(await fetch(`/api/services/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}})).ok&&d()}catch(e){console.error("Error deleting service:",e)}};return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold",children:"Services"}),(0,a.jsxs)(i.$,{onClick:()=>{n(null),t(!0)},className:"flex items-center gap-2",children:[(0,a.jsx)(E,{className:"h-5 w-5"}),"Add Service"]})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:0===l.length?(0,a.jsxs)("div",{className:"col-span-full flex flex-col items-center justify-center p-8 text-center",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-gray-900",children:"No services found"}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Get started by adding your first service"})]}):l.map(e=>(0,a.jsx)(F.Zp,{className:"hover:shadow-lg transition-shadow",children:(0,a.jsxs)($.default,{href:`/services/${e._id}`,children:[(0,a.jsxs)(F.aR,{children:[(0,a.jsx)(F.ZB,{children:e.title}),(0,a.jsxs)(F.BT,{children:["$",e.pricing.basePrice," ",e.pricing.currency]})]}),(0,a.jsxs)(F.Wu,{children:[(0,a.jsx)("p",{className:"text-gray-600 mb-4",children:e.shortDescription}),(0,a.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,a.jsx)(i.$,{variant:"outline",size:"sm",onClick:t=>{t.preventDefault(),c(e)},children:(0,a.jsx)(M,{className:"h-4 w-4"})}),(0,a.jsx)(i.$,{variant:"destructive",size:"sm",onClick:t=>{t.preventDefault(),p(e._id)},children:(0,a.jsx)(U,{className:"h-4 w-4"})})]})]})]})},e._id))}),(0,a.jsx)(_,{open:e,onOpenChange:t,service:s,onClose:()=>{t(!1),n(null),d()}})]})}},84426:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>C});var a=s(45512),r=s(58009),i=s(59462),n=s(92856),l=s(26008);let o=(0,r.createContext)(void 0),d=()=>{let e=(0,r.useContext)(o);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e},c=({children:e,open:t,setOpen:s,animate:i=!0})=>{let[n,l]=(0,r.useState)(!1);return(0,a.jsx)(o.Provider,{value:{open:void 0!==t?t:n,setOpen:void 0!==s?s:l,animate:i},children:e})},p=({children:e,open:t,setOpen:s,animate:r})=>(0,a.jsx)(c,{open:t,setOpen:s,animate:r,children:e}),u=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{...e}),(0,a.jsx)(h,{...e})]}),m=({className:e,children:t,...s})=>{let{open:r,setOpen:l,animate:o}=d();return(0,a.jsx)(n.P.div,{className:(0,i.cn)("h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",e),animate:{width:o?r?"300px":"60px":"300px"},transition:{duration:.5,ease:[.4,0,.2,1]},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),...s,children:t})},h=({className:e,children:t,...s})=>(0,a.jsx)("div",{className:(0,i.cn)("fixed left-0 top-12 h-full w-[60px] md:hidden flex flex-col py-4 px-3 bg-neutral-100 dark:bg-neutral-800",e),...s,children:t}),x=({link:e,className:t,...s})=>{let{open:r,animate:o}=d();return(0,a.jsxs)(l.default,{href:e.href,className:(0,i.cn)("flex items-center justify-center md:justify-start gap-2 group/sidebar py-2",t),...s,children:[e.icon,(0,a.jsx)(n.P.span,{animate:{display:o?r?"inline-block":"none":"inline-block",opacity:o?r?1:0:1},className:"hidden md:inline-block text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre !p-0 !m-0",children:e.label})]})};var f=s(87137),v=s(54048),g=s(44097),j=s(31575),y=s(79660),b=s(61195),w=s(68627);function C({children:e}){let[t,s]=(0,r.useState)(!1),i=[{href:"/admin/dashboard",icon:(0,a.jsx)(f.A,{}),label:"Dashboard"},{href:"/admin/services",icon:(0,a.jsx)(v.A,{}),label:"Services"},{href:"/admin/clients",icon:(0,a.jsx)(g.A,{}),label:"Clients"},{href:"/admin/negotiations",icon:(0,a.jsx)(j.A,{}),label:"Negotiations"},{href:"/admin/queries",icon:(0,a.jsx)(y.A,{}),label:"Queries"},{href:"/admin/payments",icon:(0,a.jsx)(b.A,{}),label:"Payments"},{href:"/admin/blocklist",icon:(0,a.jsx)(w.A,{}),label:"Blocklist"}];return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-100 flex",children:[(0,a.jsx)(p,{open:t,setOpen:s,children:(0,a.jsx)(u,{children:(0,a.jsx)("div",{className:"flex flex-col",children:i.map(e=>(0,a.jsx)(x,{link:e},e.href))})})}),(0,a.jsx)("div",{className:"flex-1 p-8 md:ml-0 ml-[1.8rem]",children:(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:(0,a.jsx)("div",{className:"md:col-span-3",children:e})})})]})}},97643:(e,t,s)=>{"use strict";s.d(t,{BT:()=>d,Wu:()=>c,ZB:()=>o,Zp:()=>n,aR:()=>l,wL:()=>p});var a=s(45512),r=s(58009),i=s(59462);let n=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{ref:s,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...t}));n.displayName="Card";let l=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{ref:s,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...t}));l.displayName="CardHeader";let o=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{ref:s,className:(0,i.cn)("font-semibold leading-none tracking-tight",e),...t}));o.displayName="CardTitle";let d=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{ref:s,className:(0,i.cn)("text-sm text-muted-foreground",e),...t}));d.displayName="CardDescription";let c=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{ref:s,className:(0,i.cn)("p-6 pt-0",e),...t}));c.displayName="CardContent";let p=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{ref:s,className:(0,i.cn)("flex items-center p-6 pt-0",e),...t}));p.displayName="CardFooter"},71965:(e,t,s)=>{"use strict";s.d(t,{Cf:()=>p,Es:()=>m,L3:()=>h,c7:()=>u,lG:()=>o,rr:()=>x});var a=s(45512),r=s(58009),i=s(57532),n=s(44269),l=s(59462);let o=i.bL;i.l9;let d=i.ZL;i.bm;let c=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(i.hJ,{ref:s,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));c.displayName=i.hJ.displayName;let p=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(d,{children:[(0,a.jsx)(c,{}),(0,a.jsxs)(i.UC,{ref:r,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...s,children:[t,(0,a.jsxs)(i.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(n.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]}));p.displayName=i.UC.displayName;let u=({className:e,...t})=>(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});u.displayName="DialogHeader";let m=({className:e,...t})=>(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});m.displayName="DialogFooter";let h=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(i.hE,{ref:s,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",e),...t}));h.displayName=i.hE.displayName;let x=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(i.VY,{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",e),...t}));x.displayName=i.VY.displayName},25409:(e,t,s)=>{"use strict";s.d(t,{p:()=>n});var a=s(45512),r=s(58009),i=s(59462);let n=r.forwardRef(({className:e,type:t,...s},r)=>(0,a.jsx)("input",{type:t,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...s}));n.displayName="Input"},53261:(e,t,s)=>{"use strict";s.d(t,{J:()=>c});var a=s(45512),r=s(58009),i=s(30830),n=r.forwardRef((e,t)=>(0,a.jsx)(i.sG.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));n.displayName="Label";var l=s(21643),o=s(59462);let d=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n,{ref:s,className:(0,o.cn)(d(),e),...t}));c.displayName=n.displayName},54069:(e,t,s)=>{"use strict";s.d(t,{bq:()=>u,eb:()=>f,gC:()=>x,l6:()=>c,yv:()=>p});var a=s(45512),r=s(58009),i=s(22738),n=s(98755),l=s(28638),o=s(24849),d=s(59462);let c=i.bL;i.YJ;let p=i.WT,u=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(i.l9,{ref:r,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...s,children:[t,(0,a.jsx)(i.In,{asChild:!0,children:(0,a.jsx)(n.A,{className:"h-4 w-4 opacity-50"})})]}));u.displayName=i.l9.displayName;let m=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(i.PP,{ref:s,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,a.jsx)(l.A,{className:"h-4 w-4"})}));m.displayName=i.PP.displayName;let h=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(i.wn,{ref:s,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,a.jsx)(n.A,{className:"h-4 w-4"})}));h.displayName=i.wn.displayName;let x=r.forwardRef(({className:e,children:t,position:s="popper",...r},n)=>(0,a.jsx)(i.ZL,{children:(0,a.jsxs)(i.UC,{ref:n,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:s,...r,children:[(0,a.jsx)(m,{}),(0,a.jsx)(i.LM,{className:(0,d.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),(0,a.jsx)(h,{})]})}));x.displayName=i.UC.displayName,r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(i.JU,{ref:s,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",e),...t})).displayName=i.JU.displayName;let f=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(i.q7,{ref:r,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...s,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(i.VF,{children:(0,a.jsx)(o.A,{className:"h-4 w-4"})})}),(0,a.jsx)(i.p4,{children:t})]}));f.displayName=i.q7.displayName,r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(i.wv,{ref:s,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=i.wv.displayName},48859:(e,t,s)=>{"use strict";s.d(t,{T:()=>n});var a=s(45512),r=s(58009),i=s(59462);let n=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("textarea",{className:(0,i.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:s,...t}));n.displayName="Textarea"},45491:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\freelance_work_showcase\\\\app\\\\(dashboard)\\\\admin\\\\services\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\services\\page.tsx","default")},71975:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\freelance_work_showcase\\\\app\\\\(dashboard)\\\\layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\layout.tsx","default")},46055:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(88077);let r=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[1989,2229,8077,110,9073,1103],()=>s(56108));module.exports=a})();