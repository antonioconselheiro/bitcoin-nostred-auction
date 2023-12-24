"use strict";(self.webpackChunkbitcoin_nostred_auction=self.webpackChunkbitcoin_nostred_auction||[]).push([[816],{1816:($,h,c)=>{c.r(h),c.d(h,{AuctionsListModule:()=>T});var a=c(6814),p=c(5095),e=c(4946),f=c(5592),m=c(7394);class M extends m.w0{constructor(s,t){super()}schedule(s,t=0){return this}}const l={setInterval(n,s,...t){const{delegate:i}=l;return i?.setInterval?i.setInterval(n,s,...t):setInterval(n,s,...t)},clearInterval(n){const{delegate:s}=l;return(s?.clearInterval||clearInterval)(n)},delegate:void 0};var O=c(9039);const g={now:()=>(g.delegate||Date).now(),delegate:void 0};class d{constructor(s,t=d.now){this.schedulerActionCtor=s,this.now=t}schedule(s,t=0,i){return new this.schedulerActionCtor(this,s).schedule(i,t)}}d.now=g.now;const C=new class x extends d{constructor(s,t=d.now){super(s,t),this.actions=[],this._active=!1}flush(s){const{actions:t}=this;if(this._active)return void t.push(s);let i;this._active=!0;do{if(i=s.execute(s.state,s.delay))break}while(s=t.shift());if(this._active=!1,i){for(;s=t.shift();)s.unsubscribe();throw i}}}(class _ extends M{constructor(s,t){super(s,t),this.scheduler=s,this.work=t,this.pending=!1}schedule(s,t=0){var i;if(this.closed)return this;this.state=s;const r=this.id,o=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(o,r,t)),this.pending=!0,this.delay=t,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(o,this.id,t),this}requestAsyncId(s,t,i=0){return l.setInterval(s.flush.bind(s,this),i)}recycleAsyncId(s,t,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return t;null!=t&&l.clearInterval(t)}execute(s,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(s,t);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(s,t){let r,i=!1;try{this.work(s)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:s,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,O.P)(i,this),null!=s&&(this.id=this.recycleAsyncId(t,s,null)),this.delay=null,super.unsubscribe()}}});var y=c(671);var D=c(7398);let A=(()=>{class n{constructor(){this.YEAR_DAYS=365,this.HOURS_MINUTES=60,this.DAY_HOURS=24,this.MINUTES_SECONDS=60,this.ONE_YEAR_MILI=31536e6,this.ONE_DAY_MILI=864e5,this.ONE_HOUR_MILI=36e5,this.ONE_MINUTE_MILI=6e4,this.ONE_SECOND_MILI=1e3}transform(t){return function I(n=0,s,t=C){let i=-1;return null!=s&&((0,y.K)(s)?t=s:i=s),new f.y(r=>{let o=function v(n){return n instanceof Date&&!isNaN(n)}(n)?+n-t.now():n;o<0&&(o=0);let u=0;return t.schedule(function(){r.closed||(r.next(u++),0<=i?this.schedule(void 0,i):r.complete())},o)})}(0,this.ONE_MINUTE_MILI).pipe((0,D.U)(()=>this.getTimeleft(t)))}getTimeleft(t){const i=new Date,o=new Date(t).getTime()-i.getTime(),u=Math.round(o/this.ONE_YEAR_MILI),L=Math.round(o/this.ONE_DAY_MILI)%this.YEAR_DAYS,S=Math.round(o/this.ONE_HOUR_MILI)%this.DAY_HOURS,U=Math.round(o/this.ONE_MINUTE_MILI)%this.HOURS_MINUTES,R=(Math.round(o/this.ONE_SECOND_MILI),[this.getYearsDescription(u),this.getDaysDescription(L),this.getHoursDescription(S),this.getMinutesDescription(U)].filter(j=>!!j));return this.getDescription(R)}getYearsDescription(t){return t?`${t} year${t>1?"s":""}`:""}getDaysDescription(t){return t?`${t} day${t>1?"s":""}`:""}getHoursDescription(t){return t?`${t} hour${t>1?"s":""}`:""}getMinutesDescription(t){return t?`${t} minute${t>1?"s":""}`:""}getSecondsDescription(t){return t?`${t} second${t>1?"s":""}`:""}getDescription(t){if(!t.length)return"less than one second";const i=t[t.length-1];return t.length>1?`${t.slice(0,t.length-1).join(", ")} and ${i}`:i}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275pipe=e.Yjl({name:"timeLeft",type:n,pure:!0})}return n})();function P(n,s){if(1&n&&(e.TgZ(0,"li")(1,"div",2)(2,"div",3),e._UZ(3,"img",4),e.qZA(),e.TgZ(4,"div",5)(5,"h2",6),e._uU(6),e.qZA(),e.TgZ(7,"p",7),e._uU(8),e.qZA(),e.TgZ(9,"div")(10,"div",8)(11,"h3"),e._uU(12),e.qZA(),e.TgZ(13,"span"),e._uU(14),e.qZA()(),e._UZ(15,"hr"),e.TgZ(16,"div",9)(17,"span"),e._uU(18),e.ALo(19,"async"),e.ALo(20,"timeLeft"),e.qZA()()()()()()),2&n){const t=s.$implicit;e.xp6(3),e.MGl("alt","",t.name," image"),e.Q6J("src",t.image,e.LSH),e.xp6(3),e.Oqu(t.name),e.xp6(1),e.Q6J("title",t.description),e.xp6(1),e.Oqu(t.description),e.xp6(4),e.hij("\u0218 ",t.highestBid,""),e.xp6(2),e.Oqu(t.bidderName),e.xp6(4),e.hij("Time left: ",e.lcZ(19,8,e.lcZ(20,10,t.expirationDate)),"")}}let w=(()=>{class n{constructor(){this.auctions=[{id:"123",name:"Ir no podcast",description:"Neque porro quisquam est qui dolorem ipsum Neque porro quisquam est qui dolorem ipsum Neque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsumNeque porro quisquam est qui dolorem ipsum",bidderName:"Jo\xe3o Maria de Santo Agostinho",expirationDate:new Date(2023,11,16,14,10,0),highestBid:1e3,image:"https://i.nostr.build/resp/360p/5AkK.jpg"},{id:"321",name:"Ir no podcast 2",description:"Quia dolor sit amet, consectetur, adipisci velit",bidderName:"E\xe4rendil",expirationDate:new Date(2023,11,23,13,10,10),highestBid:500,image:"https://i.nostr.build/resp/360p/nb5112.png"},{id:"222",name:"Ir no podcast 3",description:"Quia dolor sit amet, consectetur, adipisci velit",bidderName:"Renato Crackiani",expirationDate:new Date(2023,11,23,13,10,10),highestBid:500,image:"https://i.nostr.build/resp/360p/nb5112.png"},{id:"441",name:"Ir no podcast 3",description:"Quia dolor sit amet, consectetur, adipisci velit",bidderName:"Renato Crackiani",expirationDate:new Date(2023,11,23,13,10,10),highestBid:500,image:"https://i.nostr.build/resp/360p/nb5112.png"},{id:"658",name:"Ir no podcast 3",description:"Quia dolor sit amet, consectetur, adipisci velit",bidderName:"Elrond",expirationDate:new Date(2023,11,23,13,10,10),highestBid:500,image:"https://i.nostr.build/resp/360p/nb5112.png"}]}trackByFn(t,i){return i.id}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=e.Xpm({type:n,selectors:[["auc-products-list"]],decls:3,vars:2,consts:[[1,"container"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"card"],[1,"card-img"],[3,"src","alt"],[1,"card-details"],[1,"card-details-title"],[1,"card-details-description",3,"title"],[1,"card-details-bid"],[1,"card-details-expiration-date"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"ul"),e.YNc(2,P,21,12,"li",1),e.qZA()()),2&i&&(e.xp6(2),e.Q6J("ngForOf",r.auctions)("ngForTrackBy",r.trackByFn))},dependencies:[a.sg,a.Ov,A],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#edf2f7;padding:20px}.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:15px}.card[_ngcontent-%COMP%]{display:flex;border-radius:10px;max-width:700px;box-shadow:0 5px 21px #00000014;background-color:#fff;height:200px;font-size:16px}.card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{width:200px}.card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:100%;border-radius:10px 0 0 10px}.card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;padding:20px}.card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:0;border-top:2px solid #e2e8f0;margin:12px 0}.card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:flex-end}.card[_ngcontent-%COMP%]   .card-details-title[_ngcontent-%COMP%]{font-size:2em;font-weight:400}.card[_ngcontent-%COMP%]   .card-details-description[_ngcontent-%COMP%]{font-size:1em;margin-top:5px;color:#646b6f;line-height:20px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.card[_ngcontent-%COMP%]   .card-details-bid[_ngcontent-%COMP%]{margin-top:15px;display:flex;align-items:center;justify-content:space-between}.card[_ngcontent-%COMP%]   .card-details-bid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}.card[_ngcontent-%COMP%]   .card-details-expiration-date[_ngcontent-%COMP%]{color:#a2a9ad;align-self:flex-end;font-style:italic}@media (max-width: 799px){.card[_ngcontent-%COMP%]{flex-direction:column;height:auto;font-size:14px}.card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{width:100%;height:200px}.card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px 10px 0 0}.card[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]{padding:15px}}"]})}return n})();const b=[{path:"",component:(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=e.Xpm({type:n,selectors:[["auc-auctions-list"]],decls:4,vars:0,consts:[[1,"container"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"p"),e._uU(2,"auctions-list works!"),e.qZA(),e._UZ(3,"auc-products-list"),e.qZA())},dependencies:[w]})}return n})()}];let N=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(b),p.Bz]})}return n})(),q=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[a.ez]})}return n})(),E=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[a.ez,q]})}return n})(),T=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[a.ez,N,E]})}return n})()}}]);