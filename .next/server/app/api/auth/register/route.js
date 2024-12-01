(()=>{var e={};e.id=1612,e.ids=[1612],e.modules={56037:e=>{"use strict";e.exports=require("mongoose")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},20265:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>y,routeModule:()=>l,serverHooks:()=>v,workAsyncStorage:()=>h,workUnitAsyncStorage:()=>m});var s={};t.r(s),t.d(s,{POST:()=>d});var a=t(42706),i=t(28203),o=t(45994),n=t(39187),u=t(43694),c=t(66747),p=t(13139);async function d(e){try{await (0,u.A)();let{email:r,password:t,name:s}=await e.json();if(await c.A.findOne({email:r}))return n.NextResponse.json({error:"User already exists"},{status:400});let a=await c.A.create({email:r,password:t,name:s}),i=(0,p.zF)({userId:a._id}),o=n.NextResponse.json({user:{id:a._id,email:a.email,name:a.name},token:i});return o.cookies.set({name:"authToken",value:i,httpOnly:!0,secure:!0,sameSite:"lax",path:"/",maxAge:86400}),o}catch(e){if(e instanceof Error)return n.NextResponse.json({error:e.message},{status:500});return n.NextResponse.json({error:"An unknown error occurred"},{status:500})}}let l=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/auth/register/route",pathname:"/api/auth/register",filename:"route",bundlePath:"app/api/auth/register/route"},resolvedPagePath:"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\api\\auth\\register\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:h,workUnitAsyncStorage:m,serverHooks:v}=l;function y(){return(0,o.patchFetch)({workAsyncStorage:h,workUnitAsyncStorage:m})}},96487:()=>{},78335:()=>{},13139:(e,r,t)=>{"use strict";t.d(r,{nr:()=>n,zF:()=>o});var s=t(43008),a=t.n(s);let i=process.env.JWT_SECRET||"your-secret-key",o=e=>a().sign(e,i,{expiresIn:"1d"}),n=e=>{try{return a().verify(e,i)}catch{return null}}},43694:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var s=t(56037),a=t.n(s);if(!process.env.MONGODB_URI)throw Error("Please define the MONGODB_URI environment variable inside .env.local");let i=process.env.MONGODB_URI,o=async function(){try{let e=await a().connect(i);return console.log("MongoDB connected successfully"),e}catch(e){throw console.error("Error connecting to MongoDB:",e),e}}},66747:(e,r,t)=>{"use strict";t.d(r,{A:()=>c});var s=t(56037),a=t.n(s),i=t(58964),o=t.n(i);let n=new(a()).Schema({date:{type:Date,required:!0},availableHours:{type:Number,required:!0,default:10},occupiedHours:{type:Number,default:0},bookings:[{clientId:{type:a().Schema.Types.ObjectId,ref:"User"},hours:Number,projectDescription:String}]}),u=new(a()).Schema({email:{type:String,required:[!0,"Please provide an email"],unique:!0},password:{type:String,required:[!0,"Please provide a password"]},name:{type:String,required:[!0,"Please provide a name"]},role:{type:String,enum:["user","admin","developer"],default:"user"},createdAt:{type:Date,default:Date.now},availability:[n],hourlyRate:{type:Number,default:0},expertise:{type:String,enum:["Frontend","Backend","Full Stack"]}});u.pre("save",async function(e){this.isModified("password")||e();let r=await o().genSalt(10);this.password=await o().hash(this.password,r)}),u.methods.matchPassword=async function(e){return await o().compare(e,this.password)},u.methods.checkAvailability=async function(e){let r=this.availability.find(r=>r.date.toDateString()===e.toDateString());return r?r.availableHours-r.occupiedHours:8},u.methods.bookHours=async function(e,r,t,s){let a=this.availability.find(r=>r.date.toDateString()===e.toDateString());if(a){if(a.availableHours-a.occupiedHours<r)throw Error("Not enough available hours for this date");a.occupiedHours+=r,a.bookings.push({clientId:t,hours:r,projectDescription:s})}else this.availability.push({date:e,availableHours:8,occupiedHours:r,bookings:[{clientId:t,hours:r,projectDescription:s}]});await this.save()};let c=a().models.User||a().model("User",u)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[1989,5452,7929],()=>t(20265));module.exports=s})();