(()=>{var e={};e.id=2507,e.ids=[2507],e.modules={56037:e=>{"use strict";e.exports=require("mongoose")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79428:e=>{"use strict";e.exports=require("buffer")},79646:e=>{"use strict";e.exports=require("child_process")},55511:e=>{"use strict";e.exports=require("crypto")},14985:e=>{"use strict";e.exports=require("dns")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},91645:e=>{"use strict";e.exports=require("net")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},34631:e=>{"use strict";e.exports=require("tls")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},5948:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>f,routeModule:()=>y,serverHooks:()=>h,workAsyncStorage:()=>g,workUnitAsyncStorage:()=>x});var s={};t.r(s),t.d(s,{POST:()=>m});var i=t(42706),a=t(28203),o=t(45994),n=t(39187),u=t(43694),p=t(91290),d=t(13139),l=t(68752),c=t(66747);async function m(e){try{let r=e.headers.get("authorization"),t=r?.split(" ")[1]||"",s=(0,d.nr)(t||"");await (0,u.A)();let{serviceId:i,message:a,offerAmount:o,email:m}=await e.json();if(!i||!a)return n.NextResponse.json({error:"Service ID and message are required"},{status:400});let y=await p.A.findById(i);if(!y)return n.NextResponse.json({error:"Hourly service not found"},{status:404});let g=null;y.userId&&(g=await c.A.findById(y.userId).select("name email").lean());let x=s?.role==="admin";if(y.replies.find(e=>{let r=s?.userId&&e.userId?.toString()===s.userId,t=m&&e.email===m,i=new Date().getTime()-new Date(e.createdAt).getTime()<6e4;return(r||t)&&i}))return n.NextResponse.json({error:"Please wait before sending another reply"},{status:429});let h={message:a,offerAmount:o,isFromAdmin:x||!1,createdAt:new Date};s?.userId?h.userId=s.userId:m&&(h.email=m),y.replies.push(h),await y.save(),await y.populate("replies.userId","name email");let f=x?"Response to Your Service Request":"New Service Message",v=`
        <div style="max-width: 700px; margin: 0 auto; padding: 40px 20px; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); padding: 40px; border-radius: 16px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <img src="${process.env.NEXT_PUBLIC_APP_URL}/logo.png" alt="Dev Daim Logo" style="width: 180px; margin-bottom: 30px; filter: brightness(0) invert(1);"/>
            <h2 style="color: #ffffff; font-size: 28px; margin-bottom: 25px; font-weight: 600;">${f}</h2>
            <div style="background-color: rgba(255,255,255,0.95); padding: 30px; border-radius: 12px; border-left: 6px solid #00ff88; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
              <p style="color: #2c2c2c; line-height: 1.8; font-size: 16px; margin-bottom: 25px;">${a}</p>
              ${o?`<p style="color: #2c2c2c; font-size: 18px; font-weight: 600; margin-bottom: 25px;">Offered Amount: ${o}</p>`:""}
            </div>
          </div>
          <div style="padding: 0 20px;">
            <p style="color: #2c2c2c; font-size: 16px; margin-bottom: 8px;">We'll get back to you soon with our response.</p>
            <p style="font-weight: 600; color: #1a1a1a; font-size: 20px; margin-bottom: 25px;">Dev Daim | Professional Development Solutions</p>
            <div style="margin-top: 25px; text-align: center;">
              <a href="https://wa.me/917889557560" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 30px; font-weight: 600; margin: 0 10px; transition: all 0.3s ease;">
                <svg style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px; fill: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 16.78c-.249.694-1.446 1.328-2.017 1.413-.511.077-1.159.109-1.871-.118-.432-.136-.985-.319-1.694-.625-2.981-1.287-4.928-4.289-5.077-4.487-.148-.199-1.213-1.612-1.213-3.074 0-1.463.768-2.182 1.04-2.479.272-.298.594-.372.792-.372.199 0 .397.002.57.01.182.01.427-.069.669.51.247.595.841 2.058.916 2.207.075.149.124.322.025.52-.1.199-.149.323-.298.497-.148.173-.312.387-.446.52-.148.148-.303.309-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.012 2.093 1.325 2.39 1.475.297.148.471.124.644-.075.173-.198.743-.867.94-1.164.199-.298.397-.249.67-.15.272.1 1.733.818 2.03.967.298.149.496.223.57.347.075.124.075.719-.173 1.413z"/>
                </svg>
                Let's Discuss
              </a>
            </div>
          </div>
        </div>
    `;return await (0,l.s)({to:Array.isArray(g)?g[0]?.email:g?.email||y.email,subject:f,html:v}),n.NextResponse.json({...y.toObject(),user:g},{status:201})}catch(e){return console.error("POST reply error:",e),n.NextResponse.json({error:e instanceof Error?e.message:"Failed to add reply"},{status:400})}}let y=new i.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/services/hourly/reply/route",pathname:"/api/services/hourly/reply",filename:"route",bundlePath:"app/api/services/hourly/reply/route"},resolvedPagePath:"C:\\Users\\Administrator\\Desktop\\freelance_work_showcase\\app\\api\\services\\hourly\\reply\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:g,workUnitAsyncStorage:x,serverHooks:h}=y;function f(){return(0,o.patchFetch)({workAsyncStorage:g,workUnitAsyncStorage:x})}},96487:()=>{},78335:()=>{},13139:(e,r,t)=>{"use strict";t.d(r,{nr:()=>o,zF:()=>a});var s=t(43008);let i=process.env.JWT_SECRET||"your-secret-key",a=e=>s.sign(e,i,{expiresIn:"1d"}),o=e=>{try{return s.verify(e,i)}catch{return null}}},43694:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var s=t(56037),i=t.n(s);if(!process.env.MONGODB_URI)throw Error("Please define the MONGODB_URI environment variable inside .env.local");let a=process.env.MONGODB_URI,o=async function(){try{let e=await i().connect(a);return console.log("MongoDB connected successfully"),e}catch(e){throw console.error("Error connecting to MongoDB:",e),e}}},68752:(e,r,t)=>{"use strict";t.d(r,{s:()=>i});var s=t(98721);async function i({to:e,subject:r,text:t,html:i}){try{let a=s.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT),secure:!0,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}}),o=await a.sendMail({from:{name:"Response to Your Service Inquiry",address:process.env.SMTP_FROM_EMAIL},to:e,subject:r,text:t,html:i});return console.log("Email sent successfully:",o.messageId),o}catch(e){throw console.error("Error sending email:",e),Error("Failed to send email")}}},91290:(e,r,t)=>{"use strict";t.d(r,{A:()=>n});var s=t(56037),i=t.n(s);let a=new s.Schema({message:{type:String,required:[!0,"Reply message is required"],trim:!0,maxLength:[1e3,"Reply cannot exceed 1000 characters"]},offerAmount:{type:Number,min:[0,"Offer amount cannot be negative"]},isFromAdmin:{type:Boolean,required:!0,default:!1},userId:{type:s.Schema.Types.ObjectId,ref:"User"},email:{type:String,trim:!0},createdAt:{type:Date,default:Date.now}}),o=new s.Schema({userId:{type:s.Schema.Types.ObjectId,ref:"User"},email:{type:String,trim:!0},name:{type:String,required:[!0,"Service name is required"],trim:!0,maxLength:[100,"Name cannot exceed 100 characters"]},description:{type:String,required:[!0,"Description is required"],trim:!0,maxLength:[500,"Description cannot exceed 500 characters"]},hourlyRate:{type:Number,required:[!0,"Hourly rate is required"],min:[0,"Hourly rate cannot be negative"]},currency:{type:String,required:[!0,"Currency is required"],enum:["INR","USD","EUR"]},minimumHours:{type:Number,required:[!0,"Minimum hours is required"],min:[1,"Minimum hours must be at least 1"]},maximumHours:{type:Number,min:[1,"Maximum hours must be at least 1"]},availability:{startTime:{type:Date,required:[!0,"Start time is required"]},endTime:{type:Date,required:[!0,"End time is required"]},timezone:{type:String,required:[!0,"Timezone is required"]},daysAvailable:[{type:String,enum:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}]},skills:[{type:String,required:!0}],status:{type:String,enum:["available","busy","unavailable"],default:"available"},replies:[a],rating:{type:Number,default:0,min:0,max:5},totalBookings:{type:Number,default:0}},{timestamps:!0});o.pre("save",function(e){this.availability.endTime<=this.availability.startTime&&e(Error("End time must be after start time")),this.maximumHours&&this.maximumHours<this.minimumHours&&e(Error("Maximum hours must be greater than minimum hours")),e()}),o.index({userId:1}),o.index({status:1}),o.index({skills:1});let n=i().models.HourlyService||i().model("HourlyService",o)},66747:(e,r,t)=>{"use strict";t.d(r,{A:()=>u});var s=t(56037),i=t.n(s),a=t(58964),o=t.n(a);let n=new s.Schema({email:{type:String,required:[!0,"Please provide an email"],unique:!0},password:{type:String,required:[!0,"Please provide a password"]},name:{type:String,required:[!0,"Please provide a name"]},role:{type:String,enum:["user","admin","developer"],default:"user"},createdAt:{type:Date,default:Date.now},bookings:[{clientId:{type:s.Schema.Types.ObjectId,ref:"User"},email:{type:String},startDate:{type:Date,required:!0},endDate:{type:Date,required:!0},hours:{type:Number,required:!0},projectDescription:{type:String,required:!0}}],hourlyRate:{type:Number,default:0},expertise:{type:String,enum:["Frontend","Backend","Full Stack"]}});n.pre("save",async function(e){this.isModified("password")||e();let r=await o().genSalt(10);this.password=await o().hash(this.password,r)}),n.methods.matchPassword=async function(e){return await o().compare(e,this.password)};let u=i().models.User||i().model("User",n)}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[1989,5452,3008,8721,8964],()=>t(5948));module.exports=s})();