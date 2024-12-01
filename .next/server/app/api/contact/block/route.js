(()=>{var e={};e.id=9636,e.ids=[9636],e.modules={56037:e=>{"use strict";e.exports=require("mongoose")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},39807:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>x,routeModule:()=>m,serverHooks:()=>f,workAsyncStorage:()=>w,workUnitAsyncStorage:()=>v});var o={};r.r(o),r.d(o,{DELETE:()=>p,GET:()=>d,POST:()=>l});var s=r(42706),n=r(28203),a=r(45994),i=r(39187),c=r(83879),u=r(43694);async function l(e){try{await (0,u.A)();let{email:t,reason:r}=await e.json();if(!t||!r)return i.NextResponse.json({error:"Email and reason are required"},{status:400});let o=await c.A.findOne({email:t.toLowerCase()});if(o){if(!o.active){let e=await c.A.findByIdAndUpdate(o._id,{active:!0,reason:r,$push:{history:{action:"reactivated",reason:r,date:new Date}}},{new:!0});return i.NextResponse.json(e,{status:200})}return i.NextResponse.json({error:"Email is already blocked"},{status:400})}let s={email:t.toLowerCase(),reason:r,active:!0,history:[{action:"blocked",reason:r,date:new Date}]},n=await c.A.create(s);return i.NextResponse.json(n,{status:201})}catch(e){return console.error("Error blocking email:",e),i.NextResponse.json({error:"Internal server error"},{status:500})}}async function d(){try{await (0,u.A)();let e=await c.A.find({active:!0}).populate("userId","name email").sort({createdAt:-1});return i.NextResponse.json(e,{status:200,headers:{"Cache-Control":"public, max-age=10"}})}catch(e){return console.error("Error fetching blocklist:",e),i.NextResponse.json({error:"Internal server error"},{status:500})}}async function p(e){try{await (0,u.A)();let{email:t}=await e.json();if(!t)return i.NextResponse.json({error:"Email is required"},{status:400});let r=await c.A.findOneAndUpdate({email:t.toLowerCase(),active:!0},{active:!1},{new:!0});if(!r)return i.NextResponse.json({error:"Email not found in blocklist"},{status:404});return i.NextResponse.json(r,{status:200})}catch(e){return console.error("Error removing from blocklist:",e),i.NextResponse.json({error:"Internal server error"},{status:500})}}let m=new s.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/contact/block/route",pathname:"/api/contact/block",filename:"route",bundlePath:"app/api/contact/block/route"},resolvedPagePath:"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\api\\contact\\block\\route.ts",nextConfigOutput:"",userland:o}),{workAsyncStorage:w,workUnitAsyncStorage:v,serverHooks:f}=m;function x(){return(0,a.patchFetch)({workAsyncStorage:w,workUnitAsyncStorage:v})}},96487:()=>{},78335:()=>{},43694:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var o=r(56037),s=r.n(o);if(!process.env.MONGODB_URI)throw Error("Please define the MONGODB_URI environment variable inside .env.local");let n=process.env.MONGODB_URI,a=async function(){try{let e=await s().connect(n);return console.log("MongoDB connected successfully"),e}catch(e){throw console.error("Error connecting to MongoDB:",e),e}}},83879:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var o=r(56037),s=r.n(o);let n=new(s()).Schema({email:{type:String,required:!0,unique:!0,trim:!0,lowercase:!0},reason:{type:String,required:!0},userId:{type:s().Schema.Types.ObjectId,ref:"User",required:!1},blockedAt:{type:Date,default:Date.now},active:{type:Boolean,default:!0}},{timestamps:!0}),a=s().models.Blocklist||s().model("Blocklist",n)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[1989,5452],()=>r(39807));module.exports=o})();