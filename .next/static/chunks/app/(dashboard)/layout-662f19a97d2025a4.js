(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9305],{2337:(e,r,t)=>{Promise.resolve().then(t.bind(t,4200))},4200:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>A});var a=t(5155),s=t(9602),l=t(1340),n=t(7396),i=t(2115),d=t(1902),c=t(1719);let h=(0,i.createContext)(void 0),o=()=>{let e=(0,i.useContext)(h);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e},u=e=>{let{children:r,open:t,setOpen:s,animate:l=!0}=e,[n,d]=(0,i.useState)(!1);return(0,a.jsx)(h.Provider,{value:{open:void 0!==t?t:n,setOpen:void 0!==s?s:d,animate:l},children:r})},x=e=>{let{children:r,open:t,setOpen:s,animate:l}=e;return(0,a.jsx)(u,{open:t,setOpen:s,animate:l,children:r})},m=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{...e}),(0,a.jsx)(f,{...e})]}),p=e=>{let{className:r,children:t,...n}=e,{open:i,setOpen:d,animate:c}=o();return(0,a.jsx)(l.P.div,{className:(0,s.cn)("h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",r),animate:{width:c?i?"300px":"60px":"300px"},transition:{duration:.5,ease:[.4,0,.2,1]},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),...n,children:t})},f=e=>{let{className:r,children:t,...l}=e;return(0,a.jsx)("div",{className:(0,s.cn)("fixed left-0 top-12 h-full w-[60px] md:hidden flex flex-col py-4 px-3 bg-neutral-100 dark:bg-neutral-800",r),...l,children:t})},k=e=>{let{link:r,className:t,...h}=e,{open:u,animate:x}=o(),[m,p]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)(n.default,{href:r.href,className:(0,s.cn)("flex items-center justify-center md:justify-start gap-2 group/sidebar py-2 flex-grow",t),...h,children:[r.icon,(0,a.jsx)(l.P.span,{animate:{display:x?u?"inline-block":"none":"inline-block",opacity:x?u?1:0:1},className:"hidden md:inline-block text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre !p-0 !m-0",children:r.label})]}),r.subLinks&&u&&(0,a.jsx)("button",{onClick:()=>p(!m),className:"p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors",children:m?(0,a.jsx)(d.A,{className:"h-4 w-4"}):(0,a.jsx)(c.A,{className:"h-4 w-4"})})]}),r.subLinks&&m&&u&&(0,a.jsx)("div",{className:"pl-8 mt-1",children:r.subLinks.map(e=>(0,a.jsx)(n.default,{href:e.href,className:"flex items-center py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:translate-x-1 transition duration-150",children:e.label},e.href))})]})};var v=t(7401);let y=(0,v.A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),b=(0,v.A)("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),g=(0,v.A)("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),j=(0,v.A)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),w=(0,v.A)("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),N=(0,v.A)("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);function A(e){let{children:r}=e,[t,s]=(0,i.useState)(!1),l=[{href:"/admin/dashboard",icon:(0,a.jsx)(y,{}),label:"Dashboard"},{href:"/admin/services",icon:(0,a.jsx)(b,{}),label:"Services",subLinks:[{href:"/admin/negotiations",label:"Negotiations"},{href:"/admin/services/hourly-queries",label:"Hourly Services"}]},{href:"/admin/clients",icon:(0,a.jsx)(g,{}),label:"Clients"},{href:"/admin/queries",icon:(0,a.jsx)(j,{}),label:"Queries"},{href:"/admin/payments",icon:(0,a.jsx)(w,{}),label:"Payments"},{href:"/admin/blocklist",icon:(0,a.jsx)(N,{}),label:"Blocklist"}];return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-100 flex",children:[(0,a.jsx)(x,{open:t,setOpen:s,children:(0,a.jsx)(m,{children:(0,a.jsx)("div",{className:"flex flex-col",children:l.map(e=>(0,a.jsx)(k,{link:e},e.href))})})}),(0,a.jsx)("div",{className:"flex-1 p-8 md:ml-0 ml-[1.8rem]",children:(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:(0,a.jsx)("div",{className:"md:col-span-3",children:r})})})]})}},9602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>l});var a=t(3463),s=t(9795);function l(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.QP)((0,a.$)(r))}},7401:(e,r,t)=>{"use strict";t.d(r,{A:()=>d});var a=t(2115);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,a.forwardRef)((e,r)=>{let{color:t="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:d,className:c="",children:h,iconNode:o,...u}=e;return(0,a.createElement)("svg",{ref:r,...n,width:s,height:s,stroke:t,strokeWidth:d?24*Number(i)/Number(s):i,className:l("lucide",c),...u},[...o.map(e=>{let[r,t]=e;return(0,a.createElement)(r,t)}),...Array.isArray(h)?h:[h]])}),d=(e,r)=>{let t=(0,a.forwardRef)((t,n)=>{let{className:d,...c}=t;return(0,a.createElement)(i,{ref:n,iconNode:r,className:l("lucide-".concat(s(e)),d),...c})});return t.displayName="".concat(e),t}},1719:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});let a=(0,t(7401).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},1902:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});let a=(0,t(7401).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])}},e=>{var r=r=>e(e.s=r);e.O(0,[1181,7396,1340,8441,1517,7358],()=>r(2337)),_N_E=e.O()}]);