"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[55869],{27255:(e,t,o)=>{o.d(t,{Z:()=>i});let i={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},391254:(e,t,o)=>{o.d(t,{Z:()=>n}),o(441143);var i=o(785893);class r{static factory(e){return e instanceof r?e:new r(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function n(e){let{css:t,unsafeCSS:o,...n}=e,s=String(t||"")||o||"",a=!!s;return a?(0,i.jsx)("style",{...n,dangerouslySetInnerHTML:{__html:String(r.factory(s))}}):null}},619937:(e,t,o)=>{o.d(t,{$N:()=>c,Cu:()=>A,GY:()=>l,MZ:()=>s,NR:()=>d,Vn:()=>_,bC:()=>S,fm:()=>i,kM:()=>n,q6:()=>r,qp:()=>E,uV:()=>u,ug:()=>O,xL:()=>a});let i={DOWNLOAD_TEMPLATE:"DOWNLOAD_TEMPLATE",UPLOAD_TEMPLATE:"UPLOAD_TEMPLATE",HISTORY:"HISTORY",RESOURCES:"RESOURCES"},r={GENERAL:"GENERAL",CAMPAIGNS:"CAMPAIGNS",AD_GROUPS:"AD_GROUPS",ADS:"ADS",KEYWORDS:"KEYWORDS",PRODUCT_GROUPS:"PRODUCT_GROUPS",ERROR_CODES:"ERROR_CODES"},n={BILLING_HISTORY:"BILLING_HISTORY",BILLING_FORMS:"BILLING_FORMS",ORDER_LINES:"ORDER_LINES",PROMOTIONS:"PROMOTIONS",TAX_DOCUMENTS:"TAX_DOCUMENTS",DOCUMENTS:"DOCUMENTS",PREPAID_CAMPAIGN_SPEND:"PREPAID_CAMPAIGN_SPEND_SUMMARY"},s={GOOGLE_TAG_MANAGER:"Google Tag Manager",SHOPIFY:"Shopify",WOO_COMMERCE:"WooCommerce",WORDPRESS:"WordPress",SQUARESPACE:"Squarespace",WEEBLY:"Weebly",TEALIUM:"Tealium",MAGENTO:"Magento",ECWID:"Ecwid",BIG_COMMERCE:"BigCommerce",PREMMERCE:"Premmerce",SEGMENT:"Segment",BRANCH:"Branch",HIGHTOUCH:"Hightouch",EULERIAN:"Eulerian",ADOBE_CDP:"Adobe Real-Time CDP",ADOBE_COMMERCE:"Adobe Commerce",SALESFORCE_COMMERCE_CLOUD:"Salesforce Commerce Cloud"},a={GTM:"GTM",SHOPIFY:"SHOPIFY",WORDPRESS:"WORDPRESS",WOOCOMMERCE:"WOOCOMMERCE",TEALIUM:"TEALIUM"},E={PINTEREST_TAG:"PINTEREST_TAG",PINTEREST_TAG_MANUAL_SETUP_FLOW:"PINTEREST_TAG_MANUAL_SETUP_FLOW",PINTEREST_TEST_EVENTS:"PINTEREST_TEST_EVENTS",PINTEREST_TAG_EVENTS:"PINTEREST_TAG_EVENTS",PINTEREST_TAG_HEALTH:"PINTEREST_TAG_HEALTH",CONVERSION_HEALTH:"CONVERSION_HEALTH",CONVERSION_UPLOAD:"CONVERSION_UPLOAD",UPLOAD_HISTORY:"UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD:"PCA_UPLOAD",CONVERSIONS_API:"CONVERSIONS_API",CONVERSIONS_API_ACCESS_TOKEN:"CONVERSIONS_API_ACCESS_TOKEN",CONVERSIONS_API_DEDUPLICATION:"CONVERSIONS_API_DEDUPLICATION",CONVERSIONS_API_PARTNER_SETUP_FLOW:"CONVERSIONS_API_PARTNER_SETUP_FLOW",CONVERSIONS_API_MANUAL_SETUP_FLOW:"CONVERSIONS_API_MANUAL_SETUP_FLOW",PINTEREST_EVENTS_OVERVIEW:"PINTEREST_EVENTS_OVERVIEW",PINTEREST_EVENT_HISTORY:"PINTEREST_EVENT_HISTORY",PAYLOAD_HELPER:"PAYLOAD_HELPER"},l={PINTEREST_TAG_DASHBOARD:"PINTEREST_TAG_DASHBOARD",PINTEREST_TAG_LANDING:"PINTEREST_TAG_LANDING",PINTEREST_TAG_INSTRUCTIONS:"PINTEREST_TAG_INSTRUCTIONS",CONVERSION_UPLOAD_LANDING:"CONVERSION_UPLOAD_LANDING",CONVERSION_UPLOAD_VALIDATION:"CONVERSION_UPLOAD_VALIDATION",CONVERSION_UPLOAD_HISTORY:"CONVERSION_UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD_LANDING:"PCA_UPLOAD_LANDING",PCA_UPLOAD_VALIDATION:"PCA_UPLOAD_VALIDATION"},_={UNREAD:"UNREAD",READ:"READ",ACCEPTED:"ACCEPTED",REJECTED:"REJECTED",DISMISSED:"DISMISSED",INVALID:"INVALID",MUTED:"MUTED",SNOOZED:"SNOOZED",PMP_REPORTED:"PMP_REPORTED",EMAILED:"EMAILED",BULK_DOWNLOADED:"BULK_DOWNLOADED",FILTERED:"FILTERED",PUSHED:"PUSHED"},d={DESTINATION:"destination",EXPIRY:"expiry",SOURCE:"attributionsrc",SOURCE_EVENT_ID:"source_event_id",SOURCE_EVENT_TYPE:"source_event_type",PRIORITY:"priority",CLICK_PRIORITY:"2",VIEW_PRIORITY:"1",CAMPAIGN_ID:"campaign_id",ADVERTISER_ID:"advertiser_id"},u="604800",O="86400",c={ATTRIBUTION_SOURCE_ID:"attributionsourceid",ATTRIBUTE_DESTINATION:"attributiondestination",ATTRIBUTE_ON:"attributeon"},S="click",A="view"},332611:(e,t,o)=>{let i;o.d(t,{Am:()=>T,Ig:()=>S,N:()=>R,Sd:()=>I,YX:()=>P,be:()=>A,fO:()=>u,kd:()=>p,pz:()=>O});var r=o(667294),n=o(172071),s=o(214494),a=o(112690),E=o(764990),l=o(957191),_=o(186656);let d=(e,t,o={})=>n.Z.increment(`${e}.${t}`,1,o),u=(e,t)=>o=>{let i=t?{extra_context:e,targeting:t}:{extra_context:e};return s.Z.create("UserExperiencePlatformResource",i).callGet().then(e=>e.resource_response?o((0,l.OD)(e.resource_response.data)):void 0)},O=(e,t,o,r)=>(n,a)=>{if(t)return Promise.resolve();if(r&&(i=r),1===e.length){let t=e[0],i=a().experiences,r=i[t],n=(null==r?void 0:r.extraContext)||null;if(JSON.stringify(n)===JSON.stringify(o)||(0,E.E3)(r)&&!(o&&Object.keys(o).length>0))return Promise.resolve()}return s.Z.create("UserExperienceResource",{placement_ids:e,extra_context:o||null,targeting:r}).callGet().then(e=>e.resource_response?n((0,l.cL)(e.resource_response.data)):void 0)},c=(e,t,o,r)=>(n,a,E,_=!1,d,O)=>(c,S)=>{let{experiences:A,experiencesMulti:T}=S(),I=null,p=!0;if(!_){var P;I=(p=A[n]&&A[n].experience_id===a)?A[n]:Array.isArray(T[n])&&(null===(P=T[n])||void 0===P?void 0:P.find(e=>e.experience_id===a))}if(I&&I.experience_id===a||_&&n&&a){let _=s.Z.create(e,{placed_experience_id:`${n}%3A${a}`,extra_context:null!=d?d:{},targeting:O}),S=p?l.Yb:l.xW;switch(t){case"dismissed":return _.callDelete().then(()=>{c(S(n,a,t)),c(u(void 0,i)),o&&r&&o({event_type:r,object_id_str:a.toString()})});case"completed":return _.callUpdate().then(()=>{!E&&(c(S(n,a,t)),c(u(void 0,i)),o&&r&&o({event_type:r,object_id_str:a.toString()}))});case"viewed":return c(S(n,a,t)),_.callUpdate().then(()=>{1000162===n&&c(u()),o&&r&&o({event_type:r,object_id_str:a.toString()})});case"completedWithoutHomefeed":return _.callUpdate().then(()=>{E||c(S(n,a,t)),o&&r&&o({event_type:r,object_id_str:a.toString()})})}}return Promise.resolve()},S=()=>{let e=(0,a.Z)(),t=(0,r.useCallback)(c("UserExperienceViewedResource","viewed",e,4503),[e]);return t},A=()=>{let e=(0,a.Z)(),t=(0,r.useCallback)(c("UserExperienceCompletedResource","completed",e,6567),[e]);return t},T=()=>{let e=(0,a.Z)(),t=(0,r.useCallback)(c("UserExperienceResource","dismissed",e,6568),[e]);return t},I=()=>{let e=(0,a.Z)(),t=(0,r.useCallback)(c("UserExperienceCompletedResource","completedWithoutHomefeed",e,6567),[e]);return t},p=(e,t)=>(o,i)=>{let{experiences:r}=i(),n=r[e];n&&n.triggerable_placed_exps&&n.triggerable_placed_exps.length&&n.triggerable_placed_exps.forEach(o=>{let[,i]=o.split(":"),r=t;n.metadata&&n.metadata[i]&&(r={...t,...n.metadata[i]}),(0,_.Z)({url:`/v3/experiences/${o.replace(":","%3A")}/trigger/`,method:"PUT",data:r?{extra_context:JSON.stringify(r,null,1)}:{}}).then(()=>{d("experienceservice","experimentTriggerCall.1",{placement_id:e,experience_id:i})})})},P=e=>(t,o)=>{t(p(e));let{experiences:i}=o();return i[e]},R=(e,t,o)=>r=>{o&&(i=o),r(p(e,t)),t&&Object.keys(t).length>0&&r(O([e],!1,t,o))}},764990:(e,t,o)=>{o.d(t,{A0:()=>E,E3:()=>s,MQ:()=>a,fL:()=>l});var i=o(883119),r=o(149230),n=o(785893);function s(e){return!!e&&0!==e.type}let a=(e,t,o)=>{let i=e[o];return t[o]&&s(i)?i:null};function E(e){var t;return null===(t=e.display_data)||void 0===t?void 0:t.anchor}let l=e=>{var t;let o=new DOMParser,s=o.parseFromString(e,"text/html"),a=[...(null===(t=s.body)||void 0===t?void 0:t.childNodes)||[]].map(e=>{if("A"!==e.nodeName)return(0,n.jsx)(i.xv,{inline:!0,children:e.textContent});{let t=e.href||"",o=(0,r.Z)({url:t});return(0,n.jsx)(i.rU,{href:t,display:"inline",externalLinkIcon:o?"default":"none",target:"blank",rel:o?"nofollow":"none",children:e.textContent})}});return(0,n.jsx)(i.xv,{inline:!0,children:a})}},207737:(e,t,o)=>{o.d(t,{$S:()=>i,V$:()=>r,_4:()=>s,iY:()=>a,mR:()=>n});let i="REFRESH_ALL_EXPERIENCES_MULTI",r="UPDATE_EXPERIENCE_MULTI",n="FETCH_EXPERIENCES",s="REFRESH_ALL_EXPERIENCES",a="UPDATE_EXPERIENCE"},957191:(e,t,o)=>{o.d(t,{NW:()=>a,OD:()=>l,Yb:()=>E,cL:()=>_,xW:()=>s});var i=o(214494),r=o(207737);let n=e=>({type:r.$S,payload:{experiencesMulti:e}}),s=(e,t,o)=>({type:r.V$,payload:{placementId:e,experienceId:t,status:o}}),a=e=>t=>i.Z.create("UserExperiencePlatformResource",{extra_context:e,multiExperiencePlatform:!0}).callGet().then(e=>e.resource_response?t(n(e.resource_response.data)):void 0),E=(e,t,o)=>({type:r.iY,payload:{placementId:e,experienceId:t,status:o}}),l=e=>({type:r._4,payload:{experiences:e}}),_=e=>({type:r.mR,payload:{experiences:e}})},12610:(e,t,o)=>{function i(e,t,o){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.d(t,{Z3:()=>d,LU:()=>u,ZP:()=>O});let r=window.location.search.includes("debug_impressions=1")||document.cookie&&document.cookie.indexOf("debug_impressions=1")>-1,n={paused:"Pause",resumed:"Resume",stopped:"Flush",enter:"Enter viewport",exit:"Exit viewport"},s={},a={background:"#FF8A8A",transform:"scale(.98)"},E={init:e=>({transform:`scale(${s[e]?.8:.99})`,transition:"transform .2s ease-in-out",background:"#8E8E8E"}),[n.enter]:{background:"#A0DCC8",transform:"scale(.99)"},[n.exit]:a,[n.stopped]:a,[n.paused]:a,[n.resumed]:{background:"#0FA573",transform:"scale(.99)"}};class l{constructor(e){i(this,"setMutationObserver",e=>(this.mutationObserver=e,this)),i(this,"startMutationObserver",e=>{this.mutationObserver&&this.mutationObserver.observe(this.node,e)}),i(this,"stopMutationObserver",()=>{this.mutationObserver&&this.mutationObserver.disconnect()}),i(this,"handleIntersectionChange",e=>{let t=e.intersectionRatio>0||e.isIntersecting;if(t&&!this.inViewport){let e=Date.now();this.startTime=e,this._debug(n.enter,{startTime:e,node:this.node}),this.enterCallbacks.forEach(e=>e())}else!t&&this.inViewport&&(this._debug(n.exit,!0),this.exitCallbacks.forEach(e=>e(this.toJSON())));this.inViewport=t}),this.enterCallbacks=[],this.exitCallbacks=[],this.inViewport=!1,this.node=e,this.startTime=0,this.debugId=""}onEnterViewport(e){return this.enterCallbacks.push(e),this}onExitViewport(e){return this.exitCallbacks.push(e),this}setDebugId(e){return this.debugId=e,r&&Object.assign(this.node.style,E.init(e)),this}pause(){return this.inViewport&&(this._debug(n.paused,!0),this.exitCallbacks.forEach(e=>e(this.toJSON()))),this}resume(){if(this.inViewport){let e=Date.now();this._debug(n.resumed,{startTime:e}),this.startTime=e}return this}stop(e){return this.inViewport&&(this._debug(n.stopped,!0),this.exitCallbacks.forEach(t=>t(this.toJSON(e)))),this}toJSON(e=""){return{startTime:1e6*this.startTime,endTime:1e6*Date.now(),forcedExit:e}}toDebugJSON(){return{pinID:this.debugId,startTime:this.startTime,endTime:Date.now(),duration:`${(Date.now()-this.startTime)/1e3} seconds`}}_debug(e,t){if(r)switch(window.console.log(`📌 ${e} -- ${this.debugId}`),!0===t&&window.console.log(this.toDebugJSON()),"object"==typeof t&&window.console.log(t),E[e]&&Object.assign(this.node.style,E[e]),e){case n.flushed:case n.paused:case n.exit:s[this.debugId]=!0}}}function _(e,t,o){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}let d=!0,u=!1;class O{constructor(){_(this,"_delegateChange",e=>{e.forEach(e=>{let t=this.activeImpressions.get(e.target);t&&t.handleIntersectionChange(e)})}),_(this,"_handleMutations",(e,t)=>{let o=this.mutationObservers.get(t),i=o&&o.offsetHeight<1;i&&o&&this.stop(o,"removed")}),this.activeImpressions=new Map,this.mutationObservers=new Map,this.bottomHeight=0,this.bottomObstructions=new Set,this.pausePriority=u,this.observer=new window.IntersectionObserver(this._delegateChange),window.Cypress&&!window.activeImpressions&&(window.activeImpressions=new Map),this.paused=!1,this.topHeight=0,this.topObstructions=new Set,this.inExperiment=!1}setExperimentStatus(e){this.inExperiment!==e&&(this.inExperiment=e)}stop(e,t=""){let o=this.activeImpressions.get(e);if(o){var i;o.stop(t),this.mutationObservers.delete(o.mutationObserver),o.stopMutationObserver(),this.activeImpressions.delete(e),null===(i=window.activeImpressions)||void 0===i||i.delete(e),this.observer.unobserve(e)}}start(e){let t=this.activeImpressions.get(e);if(!t){var o;t=new l(e),this.activeImpressions.set(e,t),null===(o=window.activeImpressions)||void 0===o||o.set(e,t),this.observer.observe(e),t.setMutationObserver(new window.MutationObserver((e,t)=>this._handleMutations(e,t))),this.mutationObservers.set(t.mutationObserver,e),t.startMutationObserver({subtree:!0,attributes:!0,attributeFilter:["style"]})}return t}pause(e=d){this.paused||(Array.from(this.activeImpressions.values()).forEach(e=>e.pause()),this.paused=!0,this.pausePriority!==u||(this.pausePriority=e))}resume(e=d){(e!==u||this.pausePriority!==d)&&this.paused&&(Array.from(this.activeImpressions.values()).forEach(e=>e.resume()),this.paused=!1,this.pausePriority=u)}addObstruction(e,t){"top"===e?this.topObstructions.add(t):"bottom"===e&&this.bottomObstructions.add(t),this._calculateRootMargins()}removeObstruction(e,t){"top"===e?this.topObstructions.delete(t):"bottom"===e&&this.bottomObstructions.delete(t),this._calculateRootMargins()}updateObstructions(){this._calculateRootMargins()}_calculateRootMargins(){let e=Array.from(this.topObstructions).reduce((e,t)=>{let{bottom:o}=t.getBoundingClientRect();return o>e?o:e},0),t=window.innerHeight-Array.from(this.bottomObstructions).reduce((e,t)=>{let{top:o}=t.getBoundingClientRect();return o<e?o:e},window.innerHeight);if(e!==this.topHeight||t!==this.bottomHeight){let o={rootMargin:`${-e}px 0px ${-t}px`};this.observer.disconnect(),this.observer=new window.IntersectionObserver(this._delegateChange,o),Array.from(this.activeImpressions.values()).forEach(e=>this.observer.observe(e.node)),this.topHeight=e,this.bottomHeight=t}}}},124580:(e,t,o)=>{o.d(t,{Z:()=>r});var i=o(12610);let r=new i.ZP},755742:(e,t,o)=>{o.d(t,{Z:()=>i});let i={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},223815:(e,t,o)=>{o.d(t,{U:()=>s,Z:()=>a});var i=o(755742),r=o(785893);let n=()=>{},s=e=>{e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()};function a({allowClickAndDrag:e,allowEsc:t,allowMediaPlay:o,allowScroll:a,children:E}){let l=e=>{t&&e.keyCode===i.Z.ESCAPE||s(e)};return(0,r.jsx)("div",{onAbort:s,onAnimationEnd:s,onAnimationIteration:s,onAnimationStart:s,onBlur:n,onCanPlay:o?n:s,onCanPlayThrough:s,onChange:s,onClick:e?n:s,onCompositionEnd:s,onCompositionStart:s,onCompositionUpdate:s,onContextMenu:s,onCopy:s,onCut:s,onDoubleClick:s,onDurationChange:s,onEmptied:s,onEncrypted:s,onEnded:s,onError:s,onFocus:n,onInput:s,onInvalid:s,onKeyDown:l,onKeyPress:l,onKeyUp:l,onLoad:s,onLoadedData:s,onLoadedMetadata:s,onLoadStart:s,onMouseDown:s,onMouseEnter:s,onMouseLeave:s,onMouseMove:e?n:s,onMouseOut:s,onMouseOver:s,onMouseUp:e?n:s,onPaste:s,onPause:s,onPlay:s,onPlaying:s,onProgress:s,onRateChange:s,onScroll:a?n:s,onSeeked:s,onSeeking:s,onSelect:s,onStalled:s,onSubmit:s,onSuspend:s,onTimeUpdate:s,onTouchCancel:s,onTouchEnd:e?n:s,onTouchMove:e?n:s,onTouchStart:e?n:s,onTransitionEnd:s,onVolumeChange:s,onWaiting:s,onWheel:s,children:E})}},52022:(e,t,o)=>{o.d(t,{S:()=>a,Z:()=>E});var i=o(667294),r=o(616550),n=o(53987),s=o(867820);let a=e=>(0,n.L6)(e)?"pin":(0,n.am)(e)?"board":(0,n.Xn)(e)?"login":(0,n.C$)(e)?"home":(0,n.cD)(e)?"profile":(0,n.dr)(e)?"ideas":(0,n.gT)(e)?"ideas-root":(0,n.tZ)(e)?"videos":(0,n.Q0)(e)?"videos-category":(0,n.$Y)(e)?"article":(0,n.E0)(e)?"shopping-spotlight":(0,n.Zz)(e)?"today":(0,n.j8)(e)?"unauth-profile":(0,n.f1)(e)?"shopping-root":(0,n.OX)(e)?"shopping-category":"other";function E(){let e=(0,r.useLocation)();return(0,i.useCallback)(({action:t,item:o,within:i})=>{let r=a(e);(0,s.My)(`logged_out_product.interaction.${r}.${t}`,{item:o||"none",within:i||"none"})},[e])}},149230:(e,t,o)=>{o.d(t,{Z:()=>r});var i=o(954931);let r=({url:e})=>!!(e&&e.match(/^https{0,1}:\/\//)&&!(0,i.Z)(e))},807609:(e,t,o)=>{o.d(t,{Z:()=>a});var i=o(667294);let r=()=>()=>{},n=()=>!1,s=()=>!0,a=()=>{let e=(0,i.useSyncExternalStore)(r,n,s);return e}},130460:(e,t,o)=>{o.d(t,{bn:()=>a,fJ:()=>l,gC:()=>E});var i=o(702664),r=o(425288),n=o(785893);let{Provider:s,useHook:a}=(0,r.Z)("Boards");function E(){let e=a();return t=>e[t]}function l({children:e}){let t=(0,i.useSelector)(({boards:e})=>e,i.shallowEqual);return(0,n.jsx)(s,{value:t,children:e})}},987318:(e,t,o)=>{o.d(t,{H:()=>n,o:()=>r});var i=o(425288);let{Provider:r,useHook:n}=(0,i.Z)("LimitedLogin")},945698:(e,t,o)=>{o.d(t,{N4:()=>n,Wh:()=>i,hr:()=>r});let i=e=>e._('Log in to continue', 'limitedLogin.modalHeader.default', 'Default title on mobile web limited login modal'),r=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),n=({i18n:e,toFollow:t})=>t?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.')},59644:(e,t,o)=>{o.d(t,{Z:()=>i});let i=(e,t)=>`${e}:${t||""}`},639952:(e,t,o)=>{o.d(t,{Cp:()=>E,FK:()=>a,H5:()=>p,MI:()=>c,O0:()=>O,QZ:()=>s,W:()=>T,WF:()=>_,Wz:()=>P,a5:()=>d,dz:()=>A,e0:()=>u,e2:()=>n,iW:()=>I,n1:()=>r,rm:()=>l,xu:()=>S});var i=o(53987);let r=()=>({type:"DISMISS_UNAUTH_SAVE"}),n=()=>({type:"COMPLETE_UNAUTH_SAVE_ACTION"}),s=e=>({type:"SET_UNAUTH_SAVE_PIN_ID",payload:{unauthSavePinId:e}}),a=()=>({type:"HIDE_NAV_FOOTER"}),E=()=>({type:"SHOW_NAV_FOOTER"}),l=e=>({type:"SET_LOGIN_SIGNUP_FROM",payload:{from:e}}),_=()=>({type:"SHOW_REPIN_ANIMATION"}),d=()=>({type:"HIDE_REPIN_ANIMATION"}),u=e=>({type:"SET_NUM_SIGNUP_STEPS",payload:{steps:e}}),O=()=>({type:"SET_OWN_PROFILE_PINS_REFRESH"}),c=e=>({type:"SHOW_BIZ_NUX_HOMEFEED_LOADER",payload:e}),S=e=>({type:"SET_VIEWED_IMAGE",payload:{viewedImageSignature:e}}),A=e=>({type:"SET_VIEWED_SHARED_PINS",payload:{pins:e}}),T=()=>({type:"DISMISS_UNAUTH_APP_UPSELL"}),I=e=>e?{type:"LOGGED_OUT_USER_INFO_FOUND",payload:e}:{type:"LOGGED_OUT_USER_INFO_NOT_FOUND"},p=e=>({type:"UPDATE_USER_FIRST_HOME_FEED_REQUEST_AFTER_NUX",payload:e}),P=(e,t)=>({type:"SET_LANDING_PAGE_TYPE",payload:e?(0,i.bo)(e)?"today":(0,i.dr)(e)?"ideas":t&&(0,i.dZ)(e,t)?"own_section":t&&(0,i.J)(e,t)?"own_board":(0,i.OJ)(e)?"section":(0,i.am)(e)?"board":(0,i.L6)(e)?"closeup":(0,i.C$)(e)?"home":(0,i.cD)(e)?"profile":(0,i.En)(e)?"search":(0,i.$V)(e)?"topic":"":""})},492583:(e,t,o)=>{o.d(t,{Z:()=>i});let i={AGGREGATED_COMMENTS:"aggregatedComments",AGGREGATED_COMMENT_REPLIES:"aggregated-comment-replies",BOARDFEED:"boardfeed",BOARDLESS_PINS:"boardless-pins",BOARD_SECTIONS:"board-sections",BOARD_SECTION_PINS:"board-section-pins",STORY_PINS_FEED:"story-pins-feed",PROFILE_PINS_FEED:"profile-pins-feed",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",STORY_PIN_DATA:"storyPinData",TODAY_ARTICLE_INTEREST_FEED:"todayArticleInterestFeed",TODAY_TAB:"todayTabFeed",UNIFIED_COMMENTS:"unified-comments",TRIED_IT_FEED:"trieditfeed"}},580751:(e,t,o)=>{o.d(t,{M:()=>a,Q:()=>E});var i=o(667294),r=o(425288),n=o(785893);let{Provider:s,useMaybeHook:a}=(0,r.Z)("RepinContext");function E({children:e}){let[t,o]=(0,i.useState)(Object.freeze({})),r=(0,i.useMemo)(()=>({getSavedPinId:e=>t[e],isSaved:e=>!!t[e],save:(e,t)=>o(o=>({...o,[e]:t})),unsave:e=>o(t=>({...t,[e]:null}))}),[t]);return(0,n.jsx)(s,{value:r,children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/55869-5063661bdc6a30d4.mjs.map