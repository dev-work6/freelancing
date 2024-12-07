(()=>{var e={};e.id=9069,e.ids=[9069],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},89568:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d});var a=s(70260),r=s(28203),n=s(25155),i=s.n(n),l=s(67292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["(dashboard)",{children:["admin",{children:["negotiations",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,47697)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\negotiations\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,71975)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,19611)),"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\negotiations\\page.tsx"],m={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/(dashboard)/admin/negotiations/page",pathname:"/admin/negotiations",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},77133:(e,t,s)=>{Promise.resolve().then(s.bind(s,47697))},1101:(e,t,s)=>{Promise.resolve().then(s.bind(s,62037))},90111:(e,t,s)=>{Promise.resolve().then(s.bind(s,71975))},27063:(e,t,s)=>{Promise.resolve().then(s.bind(s,58913))},62037:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var a=s(45512),r=s(58009),n=s(13393),i=s(87021),l=s(77252),o=s(13976),d=s(91542),c=s(71965),m=s(48859),p=s(25409),x=s(54069);function u({open:e,onOpenChange:t,negotiation:s,onUpdate:n}){let[l,o]=(0,r.useState)(""),[u,h]=(0,r.useState)(""),[f,g]=(0,r.useState)(""),[b,y]=(0,r.useState)(""),[j,v]=(0,r.useState)(!1),N=async()=>{if(l.trim()){v(!0);try{if(!(await fetch("/api/services/negotiate/reply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({negotiationId:s?._id,message:l,offerAmount:u?parseFloat(u):void 0,isFromAdmin:!0})})).ok)throw Error("Failed to send reply");o(""),h(""),n(),d.o.success("Reply sent successfully")}catch(e){console.error("Error sending reply:",e),d.o.error("Failed to send reply")}finally{v(!1)}}},w=async()=>{if(f)try{if(!(await fetch("/api/services/negotiate/finalize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({negotiationId:s?._id,status:f,finalAmount:b?parseFloat(b):void 0})})).ok)throw Error("Failed to update status");g(""),y(""),n(),d.o.success("Status updated successfully")}catch(e){console.error("Error updating status:",e),d.o.error("Failed to update status")}},k=(e,t="USD")=>new Intl.NumberFormat("en-US",{style:"currency",currency:t}).format(e);return s?(0,a.jsx)(c.lG,{open:e,onOpenChange:t,children:(0,a.jsxs)(c.Cf,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:[(0,a.jsx)(c.c7,{children:(0,a.jsx)(c.L3,{children:"Negotiation Details"})}),(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Service Details"}),(0,a.jsx)("p",{className:"text-lg",children:s.service.title}),(0,a.jsxs)("p",{className:"text-gray-600",children:["Base Price:"," ",k(s.service.pricing.basePrice,s.service.pricing.currency[0])]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Client Details"}),(0,a.jsx)("p",{className:"text-lg",children:s.name}),(0,a.jsx)("p",{className:"text-gray-600",children:s.email}),s.phone&&(0,a.jsx)("p",{className:"text-gray-600",children:s.phone})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Initial Request"}),(0,a.jsxs)("div",{className:"bg-gray-50 p-4 rounded-lg",children:[(0,a.jsx)("p",{className:"text-gray-600",children:s.message}),(0,a.jsxs)("p",{className:"mt-2 font-medium",children:["Proposed Budget: ",k(s.budget,s.currency)]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Conversation History"}),(0,a.jsx)("div",{className:"space-y-4",children:s.replies.map(e=>(0,a.jsxs)("div",{className:`p-4 rounded-lg ${e.isFromAdmin?"bg-blue-50 ml-8":"bg-gray-50 mr-8"}`,children:[(0,a.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,a.jsx)("span",{className:"font-medium",children:e.isFromAdmin?"Admin":s.name}),(0,a.jsx)("span",{className:"text-sm text-gray-500",children:new Date(e.createdAt).toLocaleString()})]}),(0,a.jsx)("p",{className:"text-gray-600",children:e.message}),e.offerAmount&&(0,a.jsxs)("p",{className:"mt-2 font-medium",children:["Offered Amount: ",k(e.offerAmount,s.currency)]})]},e._id))})]}),"completed"!==s.status&&(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Send Reply"}),(0,a.jsx)(m.T,{value:l,onChange:e=>o(e.target.value),placeholder:"Type your reply...",className:"min-h-[100px]"}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)(p.p,{type:"number",value:u,onChange:e=>h(e.target.value),placeholder:"Offer amount (optional)"}),(0,a.jsx)(i.$,{onClick:N,disabled:j||!l.trim(),children:j?"Sending...":"Send Reply"})]})]}),(0,a.jsxs)("div",{className:"space-y-4 border-t pt-4",children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Update Status"}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsxs)(x.l6,{value:f,onValueChange:g,children:[(0,a.jsx)(x.bq,{className:"w-[200px]",children:(0,a.jsx)(x.yv,{placeholder:"Select status"})}),(0,a.jsxs)(x.gC,{children:[(0,a.jsx)(x.eb,{value:"accepted",children:"Accept"}),(0,a.jsx)(x.eb,{value:"rejected",children:"Reject"}),(0,a.jsx)(x.eb,{value:"completed",children:"Complete"})]})]}),"accepted"===f&&(0,a.jsx)(p.p,{type:"number",value:b,onChange:e=>y(e.target.value),placeholder:"Final amount"}),(0,a.jsx)(i.$,{onClick:w,disabled:!f,children:"Update Status"})]})]})]})]})}):null}function h(){let[e,t]=(0,r.useState)([]),[s,c]=(0,r.useState)(!0),[m,p]=(0,r.useState)(null),[x,h]=(0,r.useState)(!1),f=async()=>{try{let e=await fetch("/api/services/negotiate");if(!e.ok)throw Error("Failed to fetch negotiations");let s=await e.json();t(s)}catch(e){console.error("Error fetching negotiations:",e),d.o.error("Failed to load negotiations. Please try again later.")}finally{c(!1)}},g=e=>({pending:"bg-yellow-100 text-yellow-800",negotiating:"bg-blue-100 text-blue-800",accepted:"bg-green-100 text-green-800",rejected:"bg-red-100 text-red-800",completed:"bg-purple-100 text-purple-800"})[e],b=(e,t=["USD"])=>new Intl.NumberFormat("en-US",{style:"currency",currency:t[0]}).format(e),y=e=>{p(e),h(!0)};return s?(0,a.jsx)(o.a,{text:"Loading Negotiations..."}):(0,a.jsxs)("div",{className:"container mx-auto py-10",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Service Negotiations"}),(0,a.jsx)("div",{className:"rounded-md border",children:(0,a.jsxs)(n.XI,{children:[(0,a.jsx)(n.A0,{children:(0,a.jsxs)(n.Hj,{children:[(0,a.jsx)(n.nd,{children:"Service"}),(0,a.jsx)(n.nd,{children:"Client"}),(0,a.jsx)(n.nd,{children:"Budget"}),(0,a.jsx)(n.nd,{children:"Status"}),(0,a.jsx)(n.nd,{children:"Last Updated"}),(0,a.jsx)(n.nd,{children:"Actions"})]})}),(0,a.jsxs)(n.BF,{children:[e.map(e=>(0,a.jsxs)(n.Hj,{children:[(0,a.jsx)(n.nA,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-medium",children:e.service.title}),(0,a.jsxs)("p",{className:"text-sm text-gray-500",children:["Base Price:"," ",b(e.service.pricing.basePrice,e.service.pricing.currency)]})]})}),(0,a.jsx)(n.nA,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-medium",children:e.name}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:e.email}),e.phone&&(0,a.jsx)("p",{className:"text-sm text-gray-500",children:e.phone})]})}),(0,a.jsxs)(n.nA,{children:[b(e.budget,[e.currency]),e.finalAmount&&(0,a.jsxs)("p",{className:"text-sm text-green-600",children:["Final:"," ",b(e.finalAmount,[e.currency])]})]}),(0,a.jsx)(n.nA,{children:(0,a.jsx)(l.E,{className:`${g(e.status)} capitalize`,children:e.status})}),(0,a.jsxs)(n.nA,{children:[new Date(e.createdAt).toLocaleDateString(),(0,a.jsxs)("p",{className:"text-sm text-gray-500",children:[e.replies.length," messages"]})]}),(0,a.jsx)(n.nA,{children:(0,a.jsx)(i.$,{variant:"outline",size:"sm",onClick:()=>y(e),children:"View Details"})})]},e._id)),0===e.length&&(0,a.jsx)(n.Hj,{children:(0,a.jsx)(n.nA,{colSpan:6,className:"text-center py-4",children:"No negotiations found"})})]})]})}),(0,a.jsx)(u,{open:x,onOpenChange:h,negotiation:m,onUpdate:f})]})}},58913:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>A});var a=s(45512),r=s(59462),n=s(36995),i=s(26008),l=s(58009),o=s(28638),d=s(98755);let c=(0,l.createContext)(void 0),m=()=>{let e=(0,l.useContext)(c);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e},p=({children:e,open:t,setOpen:s,animate:r=!0})=>{let[n,i]=(0,l.useState)(!1);return(0,a.jsx)(c.Provider,{value:{open:void 0!==t?t:n,setOpen:void 0!==s?s:i,animate:r},children:e})},x=({children:e,open:t,setOpen:s,animate:r})=>(0,a.jsx)(p,{open:t,setOpen:s,animate:r,children:e}),u=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{...e}),(0,a.jsx)(f,{...e})]}),h=({className:e,children:t,...s})=>{let{open:i,setOpen:l,animate:o}=m();return(0,a.jsx)(n.P.div,{className:(0,r.cn)("h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",e),animate:{width:o?i?"300px":"60px":"300px"},transition:{duration:.5,ease:[.4,0,.2,1]},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),...s,children:t})},f=({className:e,children:t,...s})=>(0,a.jsx)("div",{className:(0,r.cn)("fixed left-0 top-12 h-full w-[60px] md:hidden flex flex-col py-4 px-3 bg-neutral-100 dark:bg-neutral-800",e),...s,children:t}),g=({link:e,className:t,...s})=>{let{open:c,animate:p}=m(),[x,u]=(0,l.useState)(!1);return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)(i.default,{href:e.href,className:(0,r.cn)("flex items-center justify-center md:justify-start gap-2 group/sidebar py-2 flex-grow",t),...s,children:[e.icon,(0,a.jsx)(n.P.span,{animate:{display:p?c?"inline-block":"none":"inline-block",opacity:p?c?1:0:1},className:"hidden md:inline-block text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre !p-0 !m-0",children:e.label})]}),e.subLinks&&c&&(0,a.jsx)("button",{onClick:()=>u(!x),className:"p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors",children:x?(0,a.jsx)(o.A,{className:"h-4 w-4"}):(0,a.jsx)(d.A,{className:"h-4 w-4"})})]}),e.subLinks&&x&&c&&(0,a.jsx)("div",{className:"pl-8 mt-1",children:e.subLinks.map(e=>(0,a.jsx)(i.default,{href:e.href,className:"flex items-center py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:translate-x-1 transition duration-150",children:e.label},e.href))})]})};var b=s(41680);let y=(0,b.A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),j=(0,b.A)("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),v=(0,b.A)("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),N=(0,b.A)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),w=(0,b.A)("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),k=(0,b.A)("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);function A({children:e}){let[t,s]=(0,l.useState)(!1),r=[{href:"/admin/dashboard",icon:(0,a.jsx)(y,{}),label:"Dashboard"},{href:"/admin/services",icon:(0,a.jsx)(j,{}),label:"Services",subLinks:[{href:"/admin/negotiations",label:"Negotiations"},{href:"/admin/services/hourly-queries",label:"Hourly Services"}]},{href:"/admin/clients",icon:(0,a.jsx)(v,{}),label:"Clients"},{href:"/admin/queries",icon:(0,a.jsx)(N,{}),label:"Queries"},{href:"/admin/payments",icon:(0,a.jsx)(w,{}),label:"Payments"},{href:"/admin/blocklist",icon:(0,a.jsx)(k,{}),label:"Blocklist"}];return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-100 flex",children:[(0,a.jsx)(x,{open:t,setOpen:s,animate:!0,children:(0,a.jsx)(u,{children:(0,a.jsx)("div",{className:"flex flex-col",children:r.map(e=>(0,a.jsx)(g,{link:e},e.href))})})}),(0,a.jsx)("div",{className:"flex-1 p-8 md:ml-0 ml-[1.8rem]",children:(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:(0,a.jsx)("div",{className:"md:col-span-3",children:e})})})]})}},13976:(e,t,s)=>{"use strict";s.d(t,{a:()=>n});var a=s(45512);s(58009);var r=s(59462);function n({size:e="md",className:t,text:s}){return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center gap-3",children:[(0,a.jsx)("div",{className:(0,r.cn)("animate-spin rounded-full border-b-2 border-gray-900",{sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"}[e],t)}),s&&(0,a.jsx)("p",{className:"text-sm text-gray-600 animate-pulse",children:s})]})}},77252:(e,t,s)=>{"use strict";s.d(t,{E:()=>l});var a=s(45512);s(58009);var r=s(21643),n=s(59462);let i=(0,r.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function l({className:e,variant:t,...s}){return(0,a.jsx)("div",{className:(0,n.cn)(i({variant:t}),e),...s})}},71965:(e,t,s)=>{"use strict";s.d(t,{Cf:()=>m,Es:()=>x,L3:()=>u,c7:()=>p,lG:()=>o,rr:()=>h});var a=s(45512),r=s(58009),n=s(57532),i=s(44269),l=s(59462);let o=n.bL;n.l9;let d=n.ZL;n.bm;let c=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.hJ,{ref:s,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));c.displayName=n.hJ.displayName;let m=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(d,{children:[(0,a.jsx)(c,{}),(0,a.jsxs)(n.UC,{ref:r,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...s,children:[t,(0,a.jsxs)(n.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(i.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]}));m.displayName=n.UC.displayName;let p=({className:e,...t})=>(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});p.displayName="DialogHeader";let x=({className:e,...t})=>(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});x.displayName="DialogFooter";let u=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.hE,{ref:s,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",e),...t}));u.displayName=n.hE.displayName;let h=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.VY,{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",e),...t}));h.displayName=n.VY.displayName},25409:(e,t,s)=>{"use strict";s.d(t,{p:()=>i});var a=s(45512),r=s(58009),n=s(59462);let i=r.forwardRef(({className:e,type:t,...s},r)=>(0,a.jsx)("input",{type:t,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...s}));i.displayName="Input"},54069:(e,t,s)=>{"use strict";s.d(t,{bq:()=>p,eb:()=>f,gC:()=>h,l6:()=>c,yv:()=>m});var a=s(45512),r=s(58009),n=s(22738),i=s(98755),l=s(28638),o=s(24849),d=s(59462);let c=n.bL;n.YJ;let m=n.WT,p=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(n.l9,{ref:r,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...s,children:[t,(0,a.jsx)(n.In,{asChild:!0,children:(0,a.jsx)(i.A,{className:"h-4 w-4 opacity-50"})})]}));p.displayName=n.l9.displayName;let x=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.PP,{ref:s,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,a.jsx)(l.A,{className:"h-4 w-4"})}));x.displayName=n.PP.displayName;let u=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.wn,{ref:s,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,a.jsx)(i.A,{className:"h-4 w-4"})}));u.displayName=n.wn.displayName;let h=r.forwardRef(({className:e,children:t,position:s="popper",...r},i)=>(0,a.jsx)(n.ZL,{children:(0,a.jsxs)(n.UC,{ref:i,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:s,...r,children:[(0,a.jsx)(x,{}),(0,a.jsx)(n.LM,{className:(0,d.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),(0,a.jsx)(u,{})]})}));h.displayName=n.UC.displayName,r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.JU,{ref:s,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",e),...t})).displayName=n.JU.displayName;let f=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(n.q7,{ref:r,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...s,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.VF,{children:(0,a.jsx)(o.A,{className:"h-4 w-4"})})}),(0,a.jsx)(n.p4,{children:t})]}));f.displayName=n.q7.displayName,r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.wv,{ref:s,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=n.wv.displayName},13393:(e,t,s)=>{"use strict";s.d(t,{A0:()=>l,BF:()=>o,Hj:()=>d,XI:()=>i,nA:()=>m,nd:()=>c});var a=s(45512),r=s(58009),n=s(59462);let i=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:s,className:(0,n.cn)("w-full caption-bottom text-sm",e),...t})}));i.displayName="Table";let l=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("thead",{ref:s,className:(0,n.cn)("[&_tr]:border-b",e),...t}));l.displayName="TableHeader";let o=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("tbody",{ref:s,className:(0,n.cn)("[&_tr:last-child]:border-0",e),...t}));o.displayName="TableBody",r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("tfoot",{ref:s,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t})).displayName="TableFooter";let d=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("tr",{ref:s,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));d.displayName="TableRow";let c=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("th",{ref:s,className:(0,n.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));c.displayName="TableHead";let m=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("td",{ref:s,className:(0,n.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));m.displayName="TableCell",r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("caption",{ref:s,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",e),...t})).displayName="TableCaption"},48859:(e,t,s)=>{"use strict";s.d(t,{T:()=>i});var a=s(45512),r=s(58009),n=s(59462);let i=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)("textarea",{className:(0,n.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:s,...t}));i.displayName="Textarea"},47697:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\freelance_work_showcase\\\\app\\\\(dashboard)\\\\admin\\\\negotiations\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\admin\\negotiations\\page.tsx","default")},71975:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\freelance_work_showcase\\\\app\\\\(dashboard)\\\\layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\(dashboard)\\layout.tsx","default")},46055:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(88077);let r=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[1989,2229,8077,6995,9073,1103],()=>s(89568));module.exports=a})();