(()=>{var e={};e.id=1265,e.ids=[1265],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},10092:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=a(70260),r=a(28203),i=a(25155),l=a.n(i),n=a(67292),o={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(t,o);let d=["",{children:["(dashboard)",{children:["admin",{children:["queries",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,46617)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\queries\\[id]\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,71975)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,19611)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\queries\\[id]\\page.tsx"],m={require:a,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/(dashboard)/admin/queries/[id]/page",pathname:"/admin/queries/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},85890:(e,t,a)=>{Promise.resolve().then(a.bind(a,46617))},20394:(e,t,a)=>{Promise.resolve().then(a.bind(a,46593))},90111:(e,t,a)=>{Promise.resolve().then(a.bind(a,71975))},27063:(e,t,a)=>{Promise.resolve().then(a.bind(a,58913))},46593:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var s=a(45512),r=a(58009),i=a(87021),l=a(48859),n=a(79334),o=a(91542),d=a(59462);function c({title:e="Not Found",message:t="The requested resource could not be found.",className:a}){return(0,s.jsxs)("div",{className:(0,d.cn)("flex flex-col items-center justify-center min-h-[200px] p-4",a),children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:e}),(0,s.jsx)("p",{className:"text-gray-600 text-center",children:t})]})}var m=a(13976),p=a(71965);let h=()=>{let e=(0,n.useParams)(),[t,a]=(0,r.useState)(null),[d,h]=(0,r.useState)(""),[u,x]=(0,r.useState)(!0),[f,b]=(0,r.useState)(!1),[y,g]=(0,r.useState)(!1),[j,v]=(0,r.useState)(!1),[k,N]=(0,r.useState)(!1),[w,C]=(0,r.useState)(""),_=async()=>{try{let t=await fetch(`/api/contact/${e.id}`);if(!t.ok){v(!0);return}let s=await t.json();if(!s){v(!0);return}a(s),"read"!==s.status&&await fetch("/api/contact",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.id,status:"read"})})}catch(e){console.error("Error fetching contact:",e),v(!0)}finally{x(!1)}};(0,r.useEffect)(()=>{_()},[e.id]);let A=async()=>{if(d.trim()){b(!0);try{(await fetch("/api/contact/reply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contactId:t?._id,reply:d,email:t?.email})})).ok&&(await fetch("/api/contact",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t?._id,status:"replied"})}),_(),h(""),a(e=>e?{...e,status:"replied"}:null))}catch(e){console.error("Error sending reply:",e)}finally{b(!1)}}},P=async()=>{if(t?.email&&w.trim()){g(!0);try{let e=await fetch("/api/contact/block",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,reason:w})}),a=await e.json();if(!e.ok){o.o.error(a.error||"Failed to block email");return}o.o.success("Email blocked successfully"),N(!1),C("")}catch(e){console.error("Error blocking email:",e),o.o.error("Failed to block email")}finally{g(!1)}}};return u?(0,s.jsx)(m.a,{text:"Loading Contact Details..."}):j||!t?(0,s.jsx)(c,{title:"Contact not found",message:"The requested contact could not be found."}):(0,s.jsx)("div",{className:"container mx-auto py-10",children:(0,s.jsxs)("div",{className:"max-w-screen mx-auto",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold",children:"Contact Details"}),(0,s.jsx)(i.$,{onClick:()=>N(!0),disabled:y,variant:"destructive",children:y?"Blocking...":"Block User"})]}),(0,s.jsx)(p.lG,{open:k,onOpenChange:N,children:(0,s.jsxs)(p.Cf,{children:[(0,s.jsx)(p.c7,{children:(0,s.jsx)(p.L3,{children:"Block User"})}),(0,s.jsxs)("div",{className:"py-4",children:[(0,s.jsx)("label",{className:"font-medium text-gray-600 block mb-2",children:"Reason for Blocking"}),(0,s.jsx)(l.T,{value:w,onChange:e=>C(e.target.value),placeholder:"Enter reason for blocking...",className:"min-h-[100px]"})]}),(0,s.jsxs)(p.Es,{children:[(0,s.jsx)(i.$,{variant:"outline",onClick:()=>N(!1),disabled:y,children:"Cancel"}),(0,s.jsx)(i.$,{variant:"destructive",onClick:P,disabled:y||!w.trim(),children:y?"Blocking...":"Block User"})]})]})}),(0,s.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm space-y-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"font-medium text-gray-600",children:"Name"}),(0,s.jsx)("p",{className:"mt-1",children:t.name})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"font-medium text-gray-600",children:"Email"}),(0,s.jsx)("p",{className:"mt-1",children:(0,s.jsx)("a",{href:`mailto:${t.email}`,className:"text-blue-500",children:t.email})})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"font-medium text-gray-600",children:"Status"}),(0,s.jsx)("p",{className:"mt-1",children:(0,s.jsx)("span",{className:`px-2 py-1 rounded-full text-sm ${"replied"===t.status?"bg-blue-100 text-blue-800":"read"===t.status?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:t.status})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"font-medium text-gray-600",children:"Date"}),(0,s.jsx)("p",{className:"mt-1",children:new Date(t.createdAt).toLocaleString()})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"font-medium text-gray-600",children:"Message"}),(0,s.jsx)("p",{className:"mt-1 whitespace-pre-wrap",children:t.message})]}),t.replies&&t.replies.length>0&&(0,s.jsxs)("div",{className:"mt-8",children:[(0,s.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Reply History"}),(0,s.jsx)("div",{className:"space-y-4",children:t.replies.map(e=>(0,s.jsxs)("div",{className:"bg-gray-50 p-4 rounded-lg border",children:[(0,s.jsx)("p",{className:"whitespace-pre-wrap",children:e.message}),(0,s.jsxs)("p",{className:"text-sm text-gray-500 mt-2",children:["Sent on: ",new Date(e.createdAt).toLocaleString()]})]},e._id))})]}),(0,s.jsxs)("div",{className:"mt-8",children:[(0,s.jsx)("label",{className:"font-medium text-gray-600 block mb-2",children:"New Reply"}),(0,s.jsx)(l.T,{value:d,onChange:e=>h(e.target.value),placeholder:"Type your reply here...",className:"min-h-[150px]"})]}),(0,s.jsx)(i.$,{onClick:A,disabled:f||!d.trim(),className:"w-full mt-4",children:f?"Sending...":"Send Reply"})]})]})})}},58913:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var s=a(45512),r=a(59462),i=a(36995),l=a(26008),n=a(58009),o=a(28638),d=a(98755);let c=(0,n.createContext)(void 0),m=()=>{let e=(0,n.useContext)(c);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e},p=({children:e,open:t,setOpen:a,animate:r=!0})=>{let[i,l]=(0,n.useState)(!1);return(0,s.jsx)(c.Provider,{value:{open:void 0!==t?t:i,setOpen:void 0!==a?a:l,animate:r},children:e})},h=({children:e,open:t,setOpen:a,animate:r})=>(0,s.jsx)(p,{open:t,setOpen:a,animate:r,children:e}),u=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{...e}),(0,s.jsx)(f,{...e})]}),x=({className:e,children:t,...a})=>{let{open:l,setOpen:n,animate:o}=m();return(0,s.jsx)(i.P.div,{className:(0,r.cn)("h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",e),animate:{width:o?l?"300px":"60px":"300px"},transition:{duration:.5,ease:[.4,0,.2,1]},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),...a,children:t})},f=({className:e,children:t,...a})=>(0,s.jsx)("div",{className:(0,r.cn)("fixed left-0 top-12 h-full w-[60px] md:hidden flex flex-col py-4 px-3 bg-neutral-100 dark:bg-neutral-800",e),...a,children:t}),b=({link:e,className:t,...a})=>{let{open:c,animate:p}=m(),[h,u]=(0,n.useState)(!1);return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)(l.default,{href:e.href,className:(0,r.cn)("flex items-center justify-center md:justify-start gap-2 group/sidebar py-2 flex-grow",t),...a,children:[e.icon,(0,s.jsx)(i.P.span,{animate:{display:p?c?"inline-block":"none":"inline-block",opacity:p?c?1:0:1},className:"hidden md:inline-block text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre !p-0 !m-0",children:e.label})]}),e.subLinks&&c&&(0,s.jsx)("button",{onClick:()=>u(!h),className:"p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors",children:h?(0,s.jsx)(o.A,{className:"h-4 w-4"}):(0,s.jsx)(d.A,{className:"h-4 w-4"})})]}),e.subLinks&&h&&c&&(0,s.jsx)("div",{className:"pl-8 mt-1",children:e.subLinks.map(e=>(0,s.jsx)(l.default,{href:e.href,className:"flex items-center py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:translate-x-1 transition duration-150",children:e.label},e.href))})]})};var y=a(41680);let g=(0,y.A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),j=(0,y.A)("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),v=(0,y.A)("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),k=(0,y.A)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),N=(0,y.A)("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),w=(0,y.A)("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);function C({children:e}){let[t,a]=(0,n.useState)(!1),r=[{href:"/admin/dashboard",icon:(0,s.jsx)(g,{}),label:"Dashboard"},{href:"/admin/services",icon:(0,s.jsx)(j,{}),label:"Services",subLinks:[{href:"/admin/negotiations",label:"Negotiations"},{href:"/admin/services/hourly-queries",label:"Hourly Services"}]},{href:"/admin/clients",icon:(0,s.jsx)(v,{}),label:"Clients"},{href:"/admin/queries",icon:(0,s.jsx)(k,{}),label:"Queries"},{href:"/admin/payments",icon:(0,s.jsx)(N,{}),label:"Payments"},{href:"/admin/blocklist",icon:(0,s.jsx)(w,{}),label:"Blocklist"}];return(0,s.jsxs)("div",{className:"min-h-screen bg-gray-100 flex",children:[(0,s.jsx)(h,{open:t,setOpen:a,animate:!0,children:(0,s.jsx)(u,{children:(0,s.jsx)("div",{className:"flex flex-col",children:r.map(e=>(0,s.jsx)(b,{link:e},e.href))})})}),(0,s.jsx)("div",{className:"flex-1 p-8 md:ml-0 ml-[1.8rem]",children:(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:(0,s.jsx)("div",{className:"md:col-span-3",children:e})})})]})}},13976:(e,t,a)=>{"use strict";a.d(t,{a:()=>i});var s=a(45512);a(58009);var r=a(59462);function i({size:e="md",className:t,text:a}){return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center gap-3",children:[(0,s.jsx)("div",{className:(0,r.cn)("animate-spin rounded-full border-b-2 border-gray-900",{sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"}[e],t)}),a&&(0,s.jsx)("p",{className:"text-sm text-gray-600 animate-pulse",children:a})]})}},71965:(e,t,a)=>{"use strict";a.d(t,{Cf:()=>m,Es:()=>h,L3:()=>u,c7:()=>p,lG:()=>o,rr:()=>x});var s=a(45512),r=a(58009),i=a(57532),l=a(44269),n=a(59462);let o=i.bL;i.l9;let d=i.ZL;i.bm;let c=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)(i.hJ,{ref:a,className:(0,n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));c.displayName=i.hJ.displayName;let m=r.forwardRef(({className:e,children:t,...a},r)=>(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{}),(0,s.jsxs)(i.UC,{ref:r,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a,children:[t,(0,s.jsxs)(i.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(l.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]}));m.displayName=i.UC.displayName;let p=({className:e,...t})=>(0,s.jsx)("div",{className:(0,n.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});p.displayName="DialogHeader";let h=({className:e,...t})=>(0,s.jsx)("div",{className:(0,n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});h.displayName="DialogFooter";let u=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)(i.hE,{ref:a,className:(0,n.cn)("text-lg font-semibold leading-none tracking-tight",e),...t}));u.displayName=i.hE.displayName;let x=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)(i.VY,{ref:a,className:(0,n.cn)("text-sm text-muted-foreground",e),...t}));x.displayName=i.VY.displayName},48859:(e,t,a)=>{"use strict";a.d(t,{T:()=>l});var s=a(45512),r=a(58009),i=a(59462);let l=r.forwardRef(({className:e,...t},a)=>(0,s.jsx)("textarea",{className:(0,i.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...t}));l.displayName="Textarea"},28638:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(41680).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},46617:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\freelance_work_showcase\\\\app\\\\(dashboard)\\\\admin\\\\queries\\\\[id]\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\queries\\[id]\\page.tsx","default")},71975:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\freelance_work_showcase\\\\app\\\\(dashboard)\\\\layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\layout.tsx","default")},46055:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var s=a(88077);let r=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[1989,2229,8077,6995,1103],()=>a(10092));module.exports=s})();