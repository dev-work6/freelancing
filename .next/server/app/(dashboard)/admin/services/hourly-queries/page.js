(()=>{var e={};e.id=7488,e.ids=[7488],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},74292:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var t=r(70260),a=r(28203),i=r(25155),n=r.n(i),o=r(67292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(s,l);let d=["",{children:["(dashboard)",{children:["admin",{children:["services",{children:["hourly-queries",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,10638)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\services\\hourly-queries\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,71975)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,19611)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\services\\hourly-queries\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/(dashboard)/admin/services/hourly-queries/page",pathname:"/admin/services/hourly-queries",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2061:(e,s,r)=>{Promise.resolve().then(r.bind(r,10638))},26029:(e,s,r)=>{Promise.resolve().then(r.bind(r,51019))},90111:(e,s,r)=>{Promise.resolve().then(r.bind(r,71975))},27063:(e,s,r)=>{Promise.resolve().then(r.bind(r,58913))},51019:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>g});var t=r(45512),a=r(58009),i=r(97643),n=r(77252),o=r(87021),l=r(25409),d=r(48859);let c=0,u=new Map,p=e=>{if(u.has(e))return;let s=setTimeout(()=>{u.delete(e),f({type:"REMOVE_TOAST",toastId:e})},1e6);u.set(e,s)},m=(e,s)=>{switch(s.type){case"ADD_TOAST":return{...e,toasts:[s.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===s.toast.id?{...e,...s.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=s;return r?p(r):e.toasts.forEach(e=>{p(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===s.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==s.toastId)}}},h=[],x={toasts:[]};function f(e){x=m(x,e),h.forEach(e=>{e(x)})}function v({...e}){let s=(c=(c+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>f({type:"DISMISS_TOAST",toastId:s});return f({type:"ADD_TOAST",toast:{...e,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>f({type:"UPDATE_TOAST",toast:{...e,id:s}})}}var y=r(95603),b=r(13976);function g(){let[e,s]=(0,a.useState)([]),[r,c]=(0,a.useState)(!0),[u,p]=(0,a.useState)({}),[m,g]=(0,a.useState)({}),{toast:j}=function(){let[e,s]=a.useState(x);return a.useEffect(()=>(h.push(s),()=>{let e=h.indexOf(s);e>-1&&h.splice(e,1)}),[e]),{...e,toast:v,dismiss:e=>f({type:"DISMISS_TOAST",toastId:e})}}(),k=async r=>{try{let t=(0,y.g)(),a=await fetch("/api/services/hourly/reply",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({serviceId:r,message:u[r],offerAmount:m[r]?parseFloat(m[r]):void 0})});if(!a.ok)throw Error("Failed to send reply");let i=await a.json();s(e.map(e=>e._id===r?i:e)),p(e=>({...e,[r]:""})),g(e=>({...e,[r]:""})),j({title:"Success",description:"Reply sent successfully"})}catch(e){j({title:"Error",description:e instanceof Error?e.message:"Failed to send reply",variant:"destructive"}),console.error("Error sending reply:",e)}};return r?(0,t.jsx)(b.a,{text:"Loading hourly queries..."}):(0,t.jsxs)("div",{className:"container mx-auto p-6",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Hourly Service Requests"}),(0,t.jsx)("div",{className:"grid gap-6",children:e.map(e=>(0,t.jsxs)(i.Zp,{children:[(0,t.jsx)(i.aR,{children:(0,t.jsxs)(i.ZB,{className:"flex justify-between items-center",children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(n.E,{children:e.status})]})}),(0,t.jsx)(i.Wu,{children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-sm text-gray-500",children:["From: ",e?.user?.name||"Unknown"]}),(0,t.jsxs)("p",{className:"text-sm text-gray-500",children:["Email: ",e?.user?.email||e.email]}),(0,t.jsx)("p",{className:"mt-2",children:e.description}),(0,t.jsxs)("div",{className:"mt-2",children:[(0,t.jsxs)("p",{children:["Rate: ",e.hourlyRate," ",e.currency,"/hour"]}),(0,t.jsxs)("p",{children:["Minimum Hours: ",e.minimumHours]}),(0,t.jsxs)("p",{children:["Skills: ",e.skills.join(", ")]})]})]}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("h3",{className:"font-semibold mb-2",children:"Replies"}),(0,t.jsx)("div",{className:"space-y-3",children:e.replies.map((s,r)=>(0,t.jsxs)("div",{className:`p-3 rounded-lg ${s.isFromAdmin?"bg-blue-50":"bg-gray-50"}`,children:[(0,t.jsx)("p",{className:"text-sm font-semibold",children:s.isFromAdmin?"Admin":s.userId.name}),(0,t.jsx)("p",{className:"mt-1",children:s.message}),s.offerAmount&&(0,t.jsxs)("p",{className:"mt-1 font-semibold",children:["Offer: ",s.offerAmount," ",e.currency]}),(0,t.jsx)("p",{className:"text-xs text-gray-500 mt-1",children:new Date(s.createdAt).toLocaleString()})]},s._id||r))})]}),(0,t.jsxs)("div",{className:"mt-4 space-y-3",children:[(0,t.jsx)(d.T,{placeholder:"Type your reply...",value:u[e._id]||"",onChange:s=>p(r=>({...r,[e._id]:s.target.value}))}),(0,t.jsx)(l.p,{type:"number",placeholder:"Offer amount (optional)",value:m[e._id]||"",onChange:s=>g(r=>({...r,[e._id]:s.target.value}))}),(0,t.jsx)(o.$,{onClick:()=>k(e._id),disabled:!u[e._id],children:"Send Reply"})]})]})})]},e._id))})]})}},58913:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>_});var t=r(45512),a=r(59462),i=r(36995),n=r(26008),o=r(58009),l=r(28638),d=r(98755);let c=(0,o.createContext)(void 0),u=()=>{let e=(0,o.useContext)(c);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e},p=({children:e,open:s,setOpen:r,animate:a=!0})=>{let[i,n]=(0,o.useState)(!1);return(0,t.jsx)(c.Provider,{value:{open:void 0!==s?s:i,setOpen:void 0!==r?r:n,animate:a},children:e})},m=({children:e,open:s,setOpen:r,animate:a})=>(0,t.jsx)(p,{open:s,setOpen:r,animate:a,children:e}),h=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{...e}),(0,t.jsx)(f,{...e})]}),x=({className:e,children:s,...r})=>{let{open:n,setOpen:o,animate:l}=u();return(0,t.jsx)(i.P.div,{className:(0,a.cn)("h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",e),animate:{width:l?n?"300px":"60px":"300px"},transition:{duration:.5,ease:[.4,0,.2,1]},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),...r,children:s})},f=({className:e,children:s,...r})=>(0,t.jsx)("div",{className:(0,a.cn)("fixed left-0 top-12 h-full w-[60px] md:hidden flex flex-col py-4 px-3 bg-neutral-100 dark:bg-neutral-800",e),...r,children:s}),v=({link:e,className:s,...r})=>{let{open:c,animate:p}=u(),[m,h]=(0,o.useState)(!1);return(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsxs)(n.default,{href:e.href,className:(0,a.cn)("flex items-center justify-center md:justify-start gap-2 group/sidebar py-2 flex-grow",s),...r,children:[e.icon,(0,t.jsx)(i.P.span,{animate:{display:p?c?"inline-block":"none":"inline-block",opacity:p?c?1:0:1},className:"hidden md:inline-block text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre !p-0 !m-0",children:e.label})]}),e.subLinks&&c&&(0,t.jsx)("button",{onClick:()=>h(!m),className:"p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors",children:m?(0,t.jsx)(l.A,{className:"h-4 w-4"}):(0,t.jsx)(d.A,{className:"h-4 w-4"})})]}),e.subLinks&&m&&c&&(0,t.jsx)("div",{className:"pl-8 mt-1",children:e.subLinks.map(e=>(0,t.jsx)(n.default,{href:e.href,className:"flex items-center py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:translate-x-1 transition duration-150",children:e.label},e.href))})]})};var y=r(41680);let b=(0,y.A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),g=(0,y.A)("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),j=(0,y.A)("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),k=(0,y.A)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),w=(0,y.A)("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),N=(0,y.A)("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);function _({children:e}){let[s,r]=(0,o.useState)(!1),a=[{href:"/admin/dashboard",icon:(0,t.jsx)(b,{}),label:"Dashboard"},{href:"/admin/services",icon:(0,t.jsx)(g,{}),label:"Services",subLinks:[{href:"/admin/negotiations",label:"Negotiations"},{href:"/admin/services/hourly-queries",label:"Hourly Services"}]},{href:"/admin/clients",icon:(0,t.jsx)(j,{}),label:"Clients"},{href:"/admin/queries",icon:(0,t.jsx)(k,{}),label:"Queries"},{href:"/admin/payments",icon:(0,t.jsx)(w,{}),label:"Payments"},{href:"/admin/blocklist",icon:(0,t.jsx)(N,{}),label:"Blocklist"}];return(0,t.jsxs)("div",{className:"min-h-screen bg-gray-100 flex",children:[(0,t.jsx)(m,{open:s,setOpen:r,children:(0,t.jsx)(h,{children:(0,t.jsx)("div",{className:"flex flex-col",children:a.map(e=>(0,t.jsx)(v,{link:e},e.href))})})}),(0,t.jsx)("div",{className:"flex-1 p-8 md:ml-0 ml-[1.8rem]",children:(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:(0,t.jsx)("div",{className:"md:col-span-3",children:e})})})]})}},13976:(e,s,r)=>{"use strict";r.d(s,{a:()=>i});var t=r(45512);r(58009);var a=r(59462);function i({size:e="md",className:s,text:r}){return(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center gap-3",children:[(0,t.jsx)("div",{className:(0,a.cn)("animate-spin rounded-full border-b-2 border-gray-900",{sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"}[e],s)}),r&&(0,t.jsx)("p",{className:"text-sm text-gray-600 animate-pulse",children:r})]})}},77252:(e,s,r)=>{"use strict";r.d(s,{E:()=>o});var t=r(45512);r(58009);var a=r(21643),i=r(59462);let n=(0,a.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o({className:e,variant:s,...r}){return(0,t.jsx)("div",{className:(0,i.cn)(n({variant:s}),e),...r})}},97643:(e,s,r)=>{"use strict";r.d(s,{BT:()=>d,Wu:()=>c,ZB:()=>l,Zp:()=>n,aR:()=>o,wL:()=>u});var t=r(45512),a=r(58009),i=r(59462);let n=a.forwardRef(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...s}));n.displayName="Card";let o=a.forwardRef(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...s}));o.displayName="CardHeader";let l=a.forwardRef(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,className:(0,i.cn)("font-semibold leading-none tracking-tight",e),...s}));l.displayName="CardTitle";let d=a.forwardRef(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",e),...s}));d.displayName="CardDescription";let c=a.forwardRef(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,className:(0,i.cn)("p-6 pt-0",e),...s}));c.displayName="CardContent";let u=a.forwardRef(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",e),...s}));u.displayName="CardFooter"},25409:(e,s,r)=>{"use strict";r.d(s,{p:()=>n});var t=r(45512),a=r(58009),i=r(59462);let n=a.forwardRef(({className:e,type:s,...r},a)=>(0,t.jsx)("input",{type:s,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...r}));n.displayName="Input"},48859:(e,s,r)=>{"use strict";r.d(s,{T:()=>n});var t=r(45512),a=r(58009),i=r(59462);let n=a.forwardRef(({className:e,...s},r)=>(0,t.jsx)("textarea",{className:(0,i.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...s}));n.displayName="Textarea"},95603:(e,s,r)=>{"use strict";r.d(s,{g:()=>t});let t=()=>null},28638:(e,s,r)=>{"use strict";r.d(s,{A:()=>t});let t=(0,r(41680).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},10638:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>t});let t=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\freelance_work_showcase\\\\app\\\\(dashboard)\\\\admin\\\\services\\\\hourly-queries\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\services\\hourly-queries\\page.tsx","default")},71975:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>t});let t=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\freelance_work_showcase\\\\app\\\\(dashboard)\\\\layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\layout.tsx","default")},46055:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(88077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var s=require("../../../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[1989,2229,8077,6995,1103],()=>r(74292));module.exports=t})();