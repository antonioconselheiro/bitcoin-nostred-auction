"use strict";(self.webpackChunkbitcoin_nostred_auction=self.webpackChunkbitcoin_nostred_auction||[]).push([[794],{6794:(B,P,h)=>{h.r(P),h.d(P,{QrcodeReadModule:()=>N});var $=h(6814),M=h(5095),c=h(5861),o=h(4946),T=h(1257),x=h(8645);function b(r,Z){if(1&r&&(o.TgZ(0,"strong"),o._uU(1),o.qZA()),2&r){const e=o.oxw().$implicit;o.xp6(1),o.Oqu(e.label)}}function k(r,Z){if(1&r){const e=o.EpF();o.TgZ(0,"li",1),o.NdJ("click",function(){const n=o.CHM(e).$implicit,a=o.oxw();return o.KtG(a.onChooseCamera(n))}),o.YNc(1,b,2,1,"strong",2),o.TgZ(2,"em"),o._uU(3),o.qZA()()}if(2&r){const e=Z.$implicit;o.xp6(1),o.Q6J("ngIf",e.label),o.xp6(2),o.hij("(",e.id,")")}}let L=(()=>{class r extends T.U{constructor(){super(...arguments),this.response=new x.x,this.cameras=[]}onInjectData(e){this.cameras=e}onChooseCamera(e){this.response.next(e),this.close()}static#e=this.\u0275fac=function(){let e;return function(i){return(e||(e=o.n5z(r)))(i||r)}}();static#t=this.\u0275cmp=o.Xpm({type:r,selectors:[["auc-modal-choose-cam"]],features:[o.qOj],decls:3,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],[4,"ngIf"]],template:function(t,i){1&t&&(o.TgZ(0,"nav")(1,"ul"),o.YNc(2,k,4,2,"li",0),o.qZA()()),2&t&&(o.xp6(2),o.Q6J("ngForOf",i.cameras))},dependencies:[$.sg,$.O5],styles:["em[_ngcontent-%COMP%]{display:inline-block;max-width:90%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]})}return r})();var p=h(95);let F=(()=>{class r extends T.U{constructor(e){super(),this.fb=e,this.showPin=!1,this.response=new x.x,this.pinForm=this.fb.group({pin:["",[p.kI.required.bind(this)]]})}toggleShowPin(){this.showPin=!this.showPin}onSubmitPin(){if(this.pinForm.valid){const e=this.pinForm.getRawValue();e.pin&&this.response.next(e.pin)}this.close()}static#e=this.\u0275fac=function(t){return new(t||r)(o.Y36(p.qu))};static#t=this.\u0275cmp=o.Xpm({type:r,selectors:[["auc-modal-pin-manager"]],features:[o.qOj],decls:12,vars:3,consts:[["id","authModalPinForm","novalidate","","autocomplete","off",3,"formGroup","ngSubmit"],[1,"floating-label"],["required","","id","authModalPinManagerField","name","pin","maxlength","64","formControlName","pin",3,"type"],["authModalPinManagerField",""],["for","authModalPinManagerField"],["type","button",1,"bordered","svg-button",3,"ngClass","click"],[1,"svg-wrapper"],["role","img"],["type","submit","form","authModalPinForm",1,"btn","btn-primary"]],template:function(t,i){1&t&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return i.onSubmitPin()}),o.TgZ(1,"div")(2,"div",1),o._UZ(3,"input",2,3),o.TgZ(5,"label",4),o._uU(6,"PIN"),o.qZA(),o.TgZ(7,"button",5),o.NdJ("click",function(){return i.toggleShowPin()}),o.TgZ(8,"div",6),o._UZ(9,"div",7),o.qZA()()()()(),o.TgZ(10,"button",8),o._uU(11,"Login"),o.qZA()),2&t&&(o.Q6J("formGroup",i.pinForm),o.xp6(3),o.Q6J("type",i.showPin?"text":"password"),o.xp6(4),o.Q6J("ngClass",i.showPin?"icon-show":"icon-hide"))},dependencies:[$.mk,p._Y,p.Fj,p.JJ,p.JL,p.Q7,p.nD,p.sg,p.u]})}return r})();const D=(()=>{class r{constructor(e,t,i,n,a){this._legacyCanvasSize=r.DEFAULT_CANVAS_SIZE,this._preferredCamera="environment",this._maxScansPerSecond=25,this._lastScanTimestamp=-1,this._destroyed=this._flashOn=this._paused=this._active=!1,this.$video=e,this.$canvas=document.createElement("canvas"),i&&"object"==typeof i?this._onDecode=t:(console.warn(i||n||a?"You're using a deprecated version of the QrScanner constructor which will be removed in the future":"Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),this._legacyOnDecode=t),this._onDecodeError=(t="object"==typeof i?i:{}).onDecodeError||("function"==typeof i?i:this._onDecodeError),this._calculateScanRegion=t.calculateScanRegion||("function"==typeof n?n:this._calculateScanRegion),this._preferredCamera=t.preferredCamera||a||this._preferredCamera,this._legacyCanvasSize="number"==typeof i?i:"number"==typeof n?n:this._legacyCanvasSize,this._maxScansPerSecond=t.maxScansPerSecond||this._maxScansPerSecond,this._onPlay=this._onPlay.bind(this),this._onLoadedMetaData=this._onLoadedMetaData.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this._updateOverlay=this._updateOverlay.bind(this),e.disablePictureInPicture=!0,e.playsInline=!0,e.muted=!0;let s=!1;if(e.hidden&&(e.hidden=!1,s=!0),document.body.contains(e)||(document.body.appendChild(e),s=!0),i=e.parentElement,t.highlightScanRegion||t.highlightCodeOutline){if(n=!!t.overlay,this.$overlay=t.overlay||document.createElement("div"),(a=this.$overlay.style).position="absolute",a.display="none",a.pointerEvents="none",this.$overlay.classList.add("scan-region-highlight"),!n&&t.highlightScanRegion){this.$overlay.innerHTML='<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';try{this.$overlay.firstElementChild.animate({transform:["scale(.98)","scale(1.01)"]},{duration:400,iterations:1/0,direction:"alternate",easing:"ease-in-out"})}catch{}i.insertBefore(this.$overlay,this.$video.nextSibling)}t.highlightCodeOutline&&(this.$overlay.insertAdjacentHTML("beforeend",'<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'),this.$codeOutlineHighlight=this.$overlay.lastElementChild)}this._scanRegion=this._calculateScanRegion(e),requestAnimationFrame(()=>{let d=window.getComputedStyle(e);"none"===d.display&&(e.style.setProperty("display","block","important"),s=!0),"visible"!==d.visibility&&(e.style.setProperty("visibility","visible","important"),s=!0),s&&(console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."),e.style.opacity="0",e.style.width="0",e.style.height="0",this.$overlay&&this.$overlay.parentElement&&this.$overlay.parentElement.removeChild(this.$overlay),delete this.$overlay,delete this.$codeOutlineHighlight),this.$overlay&&this._updateOverlay()}),e.addEventListener("play",this._onPlay),e.addEventListener("loadedmetadata",this._onLoadedMetaData),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._updateOverlay),this._qrEnginePromise=r.createQrEngine()}static set WORKER_PATH(e){console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.")}static hasCamera(){return(0,c.Z)(function*(){try{return!!(yield r.listCameras(!1)).length}catch{return!1}})()}static listCameras(e=!1){return(0,c.Z)(function*(){if(!navigator.mediaDevices)return[];let i,t=function(){var n=(0,c.Z)(function*(){return(yield navigator.mediaDevices.enumerateDevices()).filter(a=>"videoinput"===a.kind)});return function(){return n.apply(this,arguments)}}();try{e&&(yield t()).every(n=>!n.label)&&(i=yield navigator.mediaDevices.getUserMedia({audio:!1,video:!0}))}catch{}try{return(yield t()).map((n,a)=>({id:n.deviceId,label:n.label||(0===a?"Default Camera":`Camera ${a+1}`)}))}finally{i&&(console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"),r._stopVideoStream(i))}})()}hasFlash(){var e=this;return(0,c.Z)(function*(){let t;try{if(e.$video.srcObject){if(!(e.$video.srcObject instanceof MediaStream))return!1;t=e.$video.srcObject}else t=(yield e._getCameraStream()).stream;return"torch"in t.getVideoTracks()[0].getSettings()}catch{return!1}finally{t&&t!==e.$video.srcObject&&(console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"),r._stopVideoStream(t))}})()}isFlashOn(){return this._flashOn}toggleFlash(){var e=this;return(0,c.Z)(function*(){e._flashOn?yield e.turnFlashOff():yield e.turnFlashOn()})()}turnFlashOn(){var e=this;return(0,c.Z)(function*(){if(!e._flashOn&&!e._destroyed&&(e._flashOn=!0,e._active&&!e._paused))try{if(!(yield e.hasFlash()))throw"No flash available";yield e.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:!0}]})}catch(t){throw e._flashOn=!1,t}})()}turnFlashOff(){var e=this;return(0,c.Z)(function*(){e._flashOn&&(e._flashOn=!1,yield e._restartVideoStream())})()}destroy(){this.$video.removeEventListener("loadedmetadata",this._onLoadedMetaData),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._updateOverlay),this._destroyed=!0,this._flashOn=!1,this.stop(),r._postWorkerMessage(this._qrEnginePromise,"close")}start(){var e=this;return(0,c.Z)(function*(){if(e._destroyed)throw Error("The QR scanner can not be started as it had been destroyed.");if((!e._active||e._paused)&&("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),e._active=!0,!document.hidden))if(e._paused=!1,e.$video.srcObject)yield e.$video.play();else try{let{stream:t,facingMode:i}=yield e._getCameraStream();!e._active||e._paused?r._stopVideoStream(t):(e._setVideoMirror(i),e.$video.srcObject=t,yield e.$video.play(),e._flashOn&&(e._flashOn=!1,e.turnFlashOn().catch(()=>{})))}catch(t){if(!e._paused)throw e._active=!1,t}})()}stop(){this.pause(),this._active=!1}pause(e=!1){var t=this;return(0,c.Z)(function*(){if(t._paused=!0,!t._active)return!0;t.$video.pause(),t.$overlay&&(t.$overlay.style.display="none");let i=()=>{t.$video.srcObject instanceof MediaStream&&(r._stopVideoStream(t.$video.srcObject),t.$video.srcObject=null)};return e?(i(),!0):(yield new Promise(n=>setTimeout(n,300)),!!t._paused&&(i(),!0))})()}setCamera(e){var t=this;return(0,c.Z)(function*(){e!==t._preferredCamera&&(t._preferredCamera=e,yield t._restartVideoStream())})()}static scanImage(e,t,i,n,a=!1,s=!1){return(0,c.Z)(function*(){let d,g=!1;t&&("scanRegion"in t||"qrEngine"in t||"canvas"in t||"disallowCanvasResizing"in t||"alsoTryWithoutScanRegion"in t||"returnDetailedScanResult"in t)?(d=t.scanRegion,i=t.qrEngine,n=t.canvas,a=t.disallowCanvasResizing||!1,s=t.alsoTryWithoutScanRegion||!1,g=!0):console.warn(t||i||n||a||s?"You're using a deprecated api for scanImage which will be removed in the future.":"Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),t=!!i;try{let v,u,f;if([i,v]=yield Promise.all([i||r.createQrEngine(),r._loadImage(e)]),[n,u]=r._drawToCanvas(v,d,n,a),i instanceof Worker){let l=i;t||r._postWorkerMessageSync(l,"inversionMode","both"),f=yield new Promise((m,C)=>{let E,S,y,R=-1;S=_=>{_.data.id===R&&(l.removeEventListener("message",S),l.removeEventListener("error",y),clearTimeout(E),null!==_.data.data?m({data:_.data.data,cornerPoints:r._convertPoints(_.data.cornerPoints,d)}):C(r.NO_QR_CODE_FOUND))},y=_=>{l.removeEventListener("message",S),l.removeEventListener("error",y),clearTimeout(E),C("Scanner error: "+(_?_.message||_:"Unknown Error"))},l.addEventListener("message",S),l.addEventListener("error",y),E=setTimeout(()=>y("timeout"),1e4);let O=u.getImageData(0,0,n.width,n.height);R=r._postWorkerMessageSync(l,"decode",O,[O.data.buffer])})}else f=yield Promise.race([new Promise((l,m)=>window.setTimeout(()=>m("Scanner error: timeout"),1e4)),(0,c.Z)(function*(){try{var[l]=yield i.detect(n);if(!l)throw r.NO_QR_CODE_FOUND;return{data:l.rawValue,cornerPoints:r._convertPoints(l.cornerPoints,d)}}catch(m){if(/not implemented|service unavailable/.test(l=m.message||m))return r._disableBarcodeDetector=!0,r.scanImage(e,{scanRegion:d,canvas:n,disallowCanvasResizing:a,alsoTryWithoutScanRegion:s});throw`Scanner error: ${l}`}})()]);return g?f:f.data}catch(v){if(!d||!s)throw v;let u=yield r.scanImage(e,{qrEngine:i,canvas:n,disallowCanvasResizing:a});return g?u:u.data}finally{t||r._postWorkerMessage(i,"close")}})()}setGrayscaleWeights(e,t,i,n=!0){r._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:e,green:t,blue:i,useIntegerApproximation:n})}setInversionMode(e){r._postWorkerMessage(this._qrEnginePromise,"inversionMode",e)}static createQrEngine(e){return(0,c.Z)(function*(){if(e&&console.warn("Specifying a worker path is not required and not supported anymore."),e=()=>h.e(663).then(h.bind(h,3663)).then(i=>i.createWorker()),r._disableBarcodeDetector||!("BarcodeDetector"in window)||!BarcodeDetector.getSupportedFormats||!(yield BarcodeDetector.getSupportedFormats()).includes("qr_code"))return e();let t=navigator.userAgentData;return t&&t.brands.some(({brand:i})=>/Chromium/i.test(i))&&/mac ?OS/i.test(t.platform)&&(yield t.getHighEntropyValues(["architecture","platformVersion"]).then(({architecture:i,platformVersion:n})=>/arm/i.test(i||"arm")&&13<=parseInt(n||"13")).catch(()=>!0))?e():new BarcodeDetector({formats:["qr_code"]})})()}_onPlay(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay(),this.$overlay&&(this.$overlay.style.display=""),this._scanFrame()}_onLoadedMetaData(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_calculateScanRegion(e){let t=Math.round(.6666666666666666*Math.min(e.videoWidth,e.videoHeight));return{x:Math.round((e.videoWidth-t)/2),y:Math.round((e.videoHeight-t)/2),width:t,height:t,downScaledWidth:this._legacyCanvasSize,downScaledHeight:this._legacyCanvasSize}}_updateOverlay(){requestAnimationFrame(()=>{if(this.$overlay){var e=this.$video,t=e.videoWidth,i=e.videoHeight,n=e.offsetWidth,a=e.offsetHeight,s=e.offsetLeft,d=e.offsetTop,g=window.getComputedStyle(e),v=g.objectFit,u=t/i,f=n/a;switch(v){case"none":var l=t,m=i;break;case"fill":l=n,m=a;break;default:("cover"===v?u>f:u<f)?l=(m=a)*u:m=(l=n)/u,"scale-down"===v&&(l=Math.min(l,t),m=Math.min(m,i))}var[C,E]=g.objectPosition.split(" ").map((y,R)=>{const O=parseFloat(y);return y.endsWith("%")?(R?a-m:n-l)*O/100:O});f=this._scanRegion.height||i,v=this._scanRegion.x||0;var S=this._scanRegion.y||0;(u=this.$overlay.style).width=(g=this._scanRegion.width||t)/t*l+"px",u.height=f/i*m+"px",u.top=`${d+E+S/i*m}px`,i=/scaleX\(-1\)/.test(e.style.transform),u.left=`${s+(i?n-C-l:C)+(i?t-v-g:v)/t*l}px`,u.transform=e.style.transform}})}static _convertPoints(e,t){if(!t)return e;let i=t.x||0,n=t.y||0,a=t.width&&t.downScaledWidth?t.width/t.downScaledWidth:1;t=t.height&&t.downScaledHeight?t.height/t.downScaledHeight:1;for(let s of e)s.x=s.x*a+i,s.y=s.y*t+n;return e}_scanFrame(){var e=this;!this._active||this.$video.paused||this.$video.ended||("requestVideoFrameCallback"in this.$video?this.$video.requestVideoFrameCallback.bind(this.$video):requestAnimationFrame)((0,c.Z)(function*(){if(!(1>=e.$video.readyState)){var t=Date.now()-e._lastScanTimestamp,i=1e3/e._maxScansPerSecond;t<i&&(yield new Promise(a=>setTimeout(a,i-t))),e._lastScanTimestamp=Date.now();try{var n=yield r.scanImage(e.$video,{scanRegion:e._scanRegion,qrEngine:e._qrEnginePromise,canvas:e.$canvas})}catch(a){if(!e._active)return;e._onDecodeError(a)}!r._disableBarcodeDetector||(yield e._qrEnginePromise)instanceof Worker||(e._qrEnginePromise=r.createQrEngine()),n?(e._onDecode?e._onDecode(n):e._legacyOnDecode&&e._legacyOnDecode(n.data),e.$codeOutlineHighlight&&(clearTimeout(e._codeOutlineHighlightRemovalTimeout),e._codeOutlineHighlightRemovalTimeout=void 0,e.$codeOutlineHighlight.setAttribute("viewBox",`${e._scanRegion.x||0} ${e._scanRegion.y||0} ${e._scanRegion.width||e.$video.videoWidth} ${e._scanRegion.height||e.$video.videoHeight}`),e.$codeOutlineHighlight.firstElementChild.setAttribute("points",n.cornerPoints.map(({x:a,y:s})=>`${a},${s}`).join(" ")),e.$codeOutlineHighlight.style.display="")):e.$codeOutlineHighlight&&!e._codeOutlineHighlightRemovalTimeout&&(e._codeOutlineHighlightRemovalTimeout=setTimeout(()=>e.$codeOutlineHighlight.style.display="none",100))}e._scanFrame()}))}_onDecodeError(e){e!==r.NO_QR_CODE_FOUND&&console.log(e)}_getCameraStream(){var e=this;return(0,c.Z)(function*(){if(!navigator.mediaDevices)throw"Camera not found.";let t=/^(environment|user)$/.test(e._preferredCamera)?"facingMode":"deviceId",i=[{width:{min:1024}},{width:{min:768}},{}],n=i.map(a=>Object.assign({},a,{[t]:{exact:e._preferredCamera}}));for(let a of[...n,...i])try{let s=yield navigator.mediaDevices.getUserMedia({video:a,audio:!1});return{stream:s,facingMode:e._getFacingMode(s)||(a.facingMode?e._preferredCamera:"environment"===e._preferredCamera?"user":"environment")}}catch{}throw"Camera not found."})()}_restartVideoStream(){var e=this;return(0,c.Z)(function*(){let t=e._paused;(yield e.pause(!0))&&!t&&e._active&&(yield e.start())})()}static _stopVideoStream(e){for(let t of e.getTracks())t.stop(),e.removeTrack(t)}_setVideoMirror(e){this.$video.style.transform="scaleX("+("user"===e?-1:1)+")"}_getFacingMode(e){return(e=e.getVideoTracks()[0])?/rear|back|environment/i.test(e.label)?"environment":/front|user|face/i.test(e.label)?"user":null:null}static _drawToCanvas(e,t,i,n=!1){i=i||document.createElement("canvas");let a=t&&t.x?t.x:0,s=t&&t.y?t.y:0,d=t&&t.width?t.width:e.videoWidth||e.width,g=t&&t.height?t.height:e.videoHeight||e.height;return n||(n=t&&t.downScaledWidth?t.downScaledWidth:d,t=t&&t.downScaledHeight?t.downScaledHeight:g,i.width!==n&&(i.width=n),i.height!==t&&(i.height=t)),(t=i.getContext("2d",{alpha:!1})).imageSmoothingEnabled=!1,t.drawImage(e,a,s,d,g,0,0,i.width,i.height),[i,t]}static _loadImage(e){return(0,c.Z)(function*(){if(e instanceof Image)return yield r._awaitImageLoad(e),e;if(e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement||e instanceof SVGImageElement||"OffscreenCanvas"in window&&e instanceof OffscreenCanvas||"ImageBitmap"in window&&e instanceof ImageBitmap)return e;if(!(e instanceof File||e instanceof Blob||e instanceof URL||"string"==typeof e))throw"Unsupported image type.";{let t=new Image;t.src=e instanceof File||e instanceof Blob?URL.createObjectURL(e):e.toString();try{return yield r._awaitImageLoad(t),t}finally{(e instanceof File||e instanceof Blob)&&URL.revokeObjectURL(t.src)}}})()}static _awaitImageLoad(e){return(0,c.Z)(function*(){e.complete&&0!==e.naturalWidth||(yield new Promise((t,i)=>{let n=a=>{e.removeEventListener("load",n),e.removeEventListener("error",n),a instanceof ErrorEvent?i("Image load error"):t()};e.addEventListener("load",n),e.addEventListener("error",n)}))})()}static _postWorkerMessage(e,t,i,n){return(0,c.Z)(function*(){return r._postWorkerMessageSync(yield e,t,i,n)})()}static _postWorkerMessageSync(e,t,i,n){if(!(e instanceof Worker))return-1;let a=r._workerMessageId++;return e.postMessage({id:a,type:t,data:i},n),a}}return r.DEFAULT_CANVAS_SIZE=400,r.NO_QR_CODE_FOUND="No QR code found",r._disableBarcodeDetector=!1,r._workerMessageId=0,r})();var w=h(4036),A=h(2873),I=h(3628),H=h(445),W=h(9904);const j=["video"],Q=[{path:"",component:(()=>{class r{constructor(e,t,i,n,a){this.authenticatedProfile$=e,this.modalService=t,this.profileProxy=i,this.error$=n,this.router=a,this.camActive=!0}ngOnInit(){this.camActive=!0,setTimeout(()=>{this.camActive&&this.videoEl&&this.videoEl.nativeElement&&this.readQRCode(this.videoEl.nativeElement)})}ngOnDestroy(){return this.stop()}stop(){this.camActive=!1,this.videoEl&&this.videoEl.nativeElement&&this.stopStreaming(this.videoEl.nativeElement),this.stopScanning()}readQRCode(e){var t=this;return(0,c.Z)(function*(){const i=new D(e,s=>t.triggerResult(s.data).then(()=>t.router.navigate(["/auctions-list"])).catch(d=>t.error$.next(d)),{}),n=yield D.listCameras(),a=yield t.chooseCam(n);return yield i.setCamera(a.id),yield i.start(),Promise.resolve()})()}triggerResult(e){var t=this;return(0,c.Z)(function*(){return t.stop(),/^nsec/.test(e)?t.triggerResultAsNostrSecret(e):/^encrypted:aes/.test(e)?t.triggerResultAsEncryptedEncodedNostrSecred(e):(0,w.z)(t.modalService.alertError("There is no authentication content into this qrcode, content read: "+e))})()}triggerResultAsNostrSecret(e){var t=this;return(0,c.Z)(function*(){const i=yield(0,w.z)(t.modalService.createModal(F).setBindToRoute(t.router).setTitle("Create a pin").build()),n=yield t.profileProxy.loadAccount(e,i);n&&t.authenticatedProfile$.hasEncriptedNostrSecret(n)&&i?t.authenticatedProfile$.authenticateAccount(n,i):t.authenticatedProfile$.authenticateWithNostrSecret(e)})()}triggerResultAsEncryptedEncodedNostrSecred(e){var t=this;return(0,c.Z)(function*(){const i=yield(0,w.z)(t.modalService.createModal(F).setBindToRoute(t.router).setTitle("Open pin").build());if(!i)return(0,w.z)(t.modalService.alertError("Invalid key"));try{yield t.authenticatedProfile$.authenticateEncryptedEncode(e,i)}catch{}return Promise.resolve()})()}chooseCam(e){var t=this;return(0,c.Z)(function*(){return 0===e.length?(yield(0,w.z)(t.modalService.alertError("No camera found")),Promise.reject(new Error("No camera found"))):1===e.length?Promise.resolve(e[0]):(yield(0,w.z)(t.modalService.createModal(L).setBindToRoute(t.router).setData(e).setTitle("Choose one camera").build()))||e[0]})()}stopScanning(){this.scanning&&(this.scanning.stop(),this.scanning.destroy())}stopStreaming(e){if(e){const t=e.srcObject;t instanceof MediaStream&&t.getTracks().forEach(i=>i.stop())}}static#e=this.\u0275fac=function(t){return new(t||r)(o.Y36(A.B),o.Y36(I.Z),o.Y36(H.M),o.Y36(W.C),o.Y36(M.F0))};static#t=this.\u0275cmp=o.Xpm({type:r,selectors:[["auc-qrcode-read"]],viewQuery:function(t,i){if(1&t&&o.Gf(j,5,o.SBq),2&t){let n;o.iGM(n=o.CRH())&&(i.videoEl=n.first)}},decls:7,vars:0,consts:[["routerLink","/auctions-list","title","close","type","button",1,"circle-button","close-button"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M18 6l-12 12"],["d","M6 6l12 12"],["autoplay",""],["video",""]],template:function(t,i){1&t&&(o.TgZ(0,"button",0),o.O4$(),o.TgZ(1,"svg",1),o._UZ(2,"path",2)(3,"path",3)(4,"path",4),o.qZA()(),o.kcU(),o._UZ(5,"video",5,6))},dependencies:[M.rH],styles:["video[_ngcontent-%COMP%]{background-color:#000;position:fixed;inset:0;z-index:49;height:100vh;width:100%}.close-button[_ngcontent-%COMP%]{position:fixed;top:5px;right:5px;z-index:50}"]})}return r})()}];let V=(()=>{class r{static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275mod=o.oAB({type:r});static#i=this.\u0275inj=o.cJS({imports:[M.Bz.forChild(Q),M.Bz]})}return r})(),N=(()=>{class r{static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275mod=o.oAB({type:r});static#i=this.\u0275inj=o.cJS({imports:[$.ez,V]})}return r})()}}]);