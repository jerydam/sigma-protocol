"use strict";exports.id=3029,exports.ids=[3029],exports.modules={3029:(a,b,c)=>{c.r(b),c.d(b,{ErrorScreen:()=>q,ErrorScreenView:()=>p,default:()=>q});var d=c(66150),e=c(70958);let f=(0,e.A)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),g=(0,e.A)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);var h=c(9319),i=c(72291),j=c(50579),k=c(59962),l=c(67331),m=c(2808),n=c(50460),o=c(99062);c(7719),c(19078),c(43132),c(11765),c(30443),c(8752);let p=({error:a,allowlistConfig:b,onRetry:c,onCaptchaReset:e,onBack:i})=>{let j=((a,b)=>{if(a instanceof n.R)return{title:"Transaction failed",detail:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:a.message}),(0,d.jsxs)("span",{children:[" ","Check the"," ",(0,d.jsx)(r,{href:a.relayLink,target:"_blank",children:"refund status"}),"."]})]}),ctaText:"Try again",icon:f};if(a instanceof l.a)switch(a.privyErrorCode){case l.b.CLIENT_REQUEST_TIMEOUT:return{title:"Timed out",detail:a.message,ctaText:"Try again",icon:f};case l.b.INSUFFICIENT_BALANCE:return{title:"Insufficient balance",detail:a.message,ctaText:"Try again",icon:f};case l.b.TRANSACTION_FAILURE:return{title:"Transaction failure",detail:a.message,ctaText:"Try again",icon:f};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:f}}if(a instanceof k.P&&"twilio_verification_failed"===a.type)return{title:"Something went wrong",detail:a.message,ctaText:"Try again",icon:g};if(!(a instanceof l.c))return a instanceof l.e&&a.status&&[400,422].includes(a.status)?{title:"Something went wrong",detail:a.message,ctaText:"Try again",icon:f}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:f};switch(a.privyErrorCode){case l.b.INVALID_CAPTCHA:return{title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:f};case l.b.DISALLOWED_LOGIN_METHOD:return{title:"Not allowed",detail:a.message,ctaText:"Try another method",icon:f};case l.b.ALLOWLIST_REJECTED:return{title:b.errorTitle||"You don't have access to this app",detail:b.errorDetail||"Have you been invited?",ctaText:b.errorCtaText||"Try another account",icon:h.A};case l.b.CAPTCHA_FAILURE:return{title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:null};case l.b.CAPTCHA_TIMEOUT:return{title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:null};case l.b.LINKED_TO_ANOTHER_USER:return{title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:f};case l.b.NOT_SUPPORTED:return{title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:f};case l.b.TOO_MANY_REQUESTS:return{title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:f};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:f}}})(a,b);return(0,d.jsx)(o.S,{title:j.title,subtitle:j.detail,icon:j.icon,onBack:i,iconVariant:"error",primaryCta:{label:j.ctaText,onClick:()=>{a instanceof l.c&&(a.privyErrorCode===l.b.INVALID_CAPTCHA&&e?.(),a.privyErrorCode===l.b.ALLOWLIST_REJECTED&&b.errorCtaLink)?window.location.href=b.errorCtaLink:c?.()},variant:"error"},watermark:!0})},q={component:()=>{let{navigate:a,data:b,lastScreen:c,currentScreen:e}=(0,m.a)(),f=(0,j.u)(),{reset:g}=(0,k.a)(),h=b?.errorModalData?.previousScreen||(c===e?void 0:c);return(0,d.jsx)(p,{error:b?.errorModalData?.error||Error(),allowlistConfig:f.allowlistConfig,onRetry:()=>{a(h||"LandingScreen",!1)},onCaptchaReset:g})}},r=i.I4.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`},9319:(a,b,c)=>{c.d(b,{A:()=>d});let d=(0,c(70958).A)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},45172:(a,b,c)=>{c.d(b,{S:()=>w});var d=c(66150),e=c(7719),f=c(72291),g=c(69712),h=c(55164),i=c(59656);let j=f.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,k=f.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,l=f.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,m=(0,f.I4)(h.M)`
  margin: 0 -8px;
`,n=f.I4.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${({$colorScheme:a})=>"light"===a?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===a?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,o=f.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,p=f.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,q=f.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,r=f.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,s=f.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,t=f.I4.div`
  background: ${({$variant:a})=>{switch(a){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,u=f.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,v=f.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`,w=({children:a,...b})=>(0,d.jsx)(j,{children:(0,d.jsx)(k,{...b,children:a})}),x=f.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,y=(0,f.I4)(h.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,z=f.I4.div`
  height: 100%;
  width: ${({pct:a})=>a}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,A=({step:a})=>a?(0,d.jsx)(x,{children:(0,d.jsx)(z,{pct:Math.min(100,a.current/a.total*100)})}):null;w.Header=({title:a,subtitle:b,icon:c,iconVariant:e,iconLoadingStatus:f,showBack:g,onBack:h,showInfo:i,onInfo:j,showClose:k,onClose:n,step:o,...t})=>(0,d.jsxs)(l,{...t,children:[(0,d.jsx)(m,{backFn:g?h:void 0,infoFn:i?j:void 0,onClose:k?n:void 0,closeable:k}),(c||e||a||b)&&(0,d.jsxs)(p,{children:[c||e?(0,d.jsx)(w.Icon,{icon:c,variant:e,loadingStatus:f}):null,!(!a&&!b)&&(0,d.jsxs)(q,{children:[a&&(0,d.jsx)(r,{children:a}),b&&(0,d.jsx)(s,{children:b})]})]}),o&&(0,d.jsx)(A,{step:o})]}),(w.Body=e.forwardRef(({children:a,...b},c)=>(0,d.jsx)(n,{ref:c,...b,children:a}))).displayName="Screen.Body",w.Footer=({children:a,...b})=>(0,d.jsx)(o,{id:"privy-content-footer-container",...b,children:a}),w.Actions=({children:a,...b})=>(0,d.jsx)(B,{...b,children:a}),w.HelpText=({children:a,...b})=>(0,d.jsx)(C,{...b,children:a}),w.Watermark=()=>(0,d.jsx)(y,{}),w.Icon=({icon:a,variant:b="subtle",loadingStatus:c})=>"logo"===b&&a?(0,d.jsx)(u,"string"==typeof a?{children:(0,d.jsx)("img",{src:a,alt:""})}:e.isValidElement(a)?{children:a}:{children:e.createElement(a)}):"loading"===b?a?(0,d.jsx)(v,{children:(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)(g.a4,{success:c?.success,fail:c?.fail}),"string"==typeof a?(0,d.jsx)("span",{style:{background:`url('${a}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):e.isValidElement(a)?e.cloneElement(a,{style:{width:"38px",height:"38px"}}):e.createElement(a,{style:{width:"38px",height:"38px"}})]})}):(0,d.jsx)(t,{$variant:b,children:(0,d.jsx)(i.N,{size:"64px"})}):(0,d.jsx)(t,{$variant:b,children:a&&("string"==typeof a?(0,d.jsx)("img",{src:a,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):e.isValidElement(a)?a:e.createElement(a,{width:32,height:32,stroke:(()=>{switch(b){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let B=f.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,C=f.I4.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    line-height: 22px;

    & a {
      color: var(--privy-color-accent);
    }
  }
`},50460:(a,b,c)=>{c.d(b,{R:()=>q,a:()=>g,b:()=>f,c:()=>n,d:()=>h,g:()=>m,t:()=>j,u:()=>p});var d=c(7719),e=c(67331);let f=0x2f3fb341,g="11111111111111111111111111111111",h="EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",i="0x0000000000000000000000000000000000000000",j=({appId:a,originCurrency:b,destinationCurrency:c,...d})=>({tradeType:"EXPECTED_OUTPUT",originCurrency:b??i,destinationCurrency:c??i,referrer:`privy|${a}`,...d}),k="https://api.relay.link",l="https://api.testnets.relay.link",m=async({input:a,isTestnet:b})=>{let c=await fetch((b?l:k)+"/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),d=await c.json();if(!(c.ok||"string"==typeof d.message&&d.message.startsWith("Invalid address")))throw console.error("Relay error:",d),Error(d.message??"Error fetching quote from relay");return d},n=a=>{let b=a.steps[0]?.items?.[0];if(b)return{from:b.data.from,to:b.data.to,value:Number(b.data.value),chainId:Number(b.data.chainId),data:b.data.data}};async function o({transactionHash:a,isTestnet:b}){let c=await fetch((b?l:k)+"/requests/v2?hash="+a),d=await c.json();if(!c.ok){if("message"in d&&"string"==typeof d.message)throw Error(d.message);throw Error("Error fetching request from relay")}return d.requests.at(0)?.status??"pending"}function p({transactionHash:a,isTestnet:b,bridgingStatus:c,setBridgingStatus:e,onSuccess:f,onFailure:g}){(0,d.useEffect)(()=>{if(a&&c){if(["delayed","waiting","pending"].includes(c)){let c=setInterval(async()=>{try{let c=await o({transactionHash:a,isTestnet:b});e(c)}catch(a){console.error(a)}},1e3);return()=>clearInterval(c)}"success"===c?f({transactionHash:a}):["refund","failure"].includes(c)&&g({error:new q(a,b)})}},[c,a,b])}class q extends e.a{constructor(a,b){super("We were unable to complete the bridging transaction. Funds will be refunded on your wallet.",void 0,e.b.TRANSACTION_FAILURE),this.relayLink=b?`https://testnets.relay.link/transaction/${a}`:`https://relay.link/transaction/${a}`}}},59656:(a,b,c)=>{c.d(b,{N:()=>f});var d=c(66150),e=c(72291);let f=({size:a,centerIcon:b})=>(0,d.jsx)(g,{$size:a,children:(0,d.jsxs)(h,{children:[(0,d.jsx)(j,{}),(0,d.jsx)(k,{}),b?(0,d.jsx)(i,{children:b}):null]})}),g=e.I4.div`
  --spinner-size: ${a=>a.$size?a.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,h=e.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,i=e.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    width: calc(var(--spinner-size) * 0.4);
    height: calc(var(--spinner-size) * 0.4);
    border-radius: var(--privy-border-radius-full);
  }
`,j=e.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);

  && {
    border: 4px solid var(--privy-color-border-default);
    border-radius: 50%;
  }
`,k=e.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);
  animation: spin 1200ms linear infinite;

  && {
    border: 4px solid;
    border-color: var(--privy-color-icon-subtle) transparent transparent transparent;
    border-radius: 50%;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`},70958:(a,b,c)=>{c.d(b,{A:()=>i});var d=c(7719);let e=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)},f=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let h=(0,d.forwardRef)(({color:a="currentColor",size:b=24,strokeWidth:c=2,absoluteStrokeWidth:e,className:h="",children:i,iconNode:j,...k},l)=>(0,d.createElement)("svg",{ref:l,...g,width:b,height:b,stroke:a,strokeWidth:e?24*Number(c)/Number(b):c,className:f("lucide",h),...!i&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0})(k)&&{"aria-hidden":"true"},...k},[...j.map(([a,b])=>(0,d.createElement)(a,b)),...Array.isArray(i)?i:[i]])),i=(a,b)=>{let c=(0,d.forwardRef)(({className:c,...g},i)=>(0,d.createElement)(h,{ref:i,iconNode:b,className:f(`lucide-${e(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,c),...g}));return c.displayName=e(a),c}},99062:(a,b,c)=>{c.d(b,{S:()=>g});var d=c(66150),e=c(55164),f=c(45172);let g=({primaryCta:a,secondaryCta:b,helpText:c,watermark:g=!0,children:h,...i})=>{let j=a||b?(0,d.jsxs)(d.Fragment,{children:[a&&(()=>{let{label:b,...c}=a,f=c.variant||"primary";return(0,d.jsx)(e.a,{...c,variant:f,style:{width:"100%",...c.style},children:b})})(),b&&(()=>{let{label:a,...c}=b,f=c.variant||"secondary";return(0,d.jsx)(e.a,{...c,variant:f,style:{width:"100%",...c.style},children:a})})()]}):null;return(0,d.jsxs)(f.S,{id:i.id,className:i.className,children:[(0,d.jsx)(f.S.Header,{...i}),h?(0,d.jsx)(f.S.Body,{children:h}):null,c||j||g?(0,d.jsxs)(f.S.Footer,{children:[c?(0,d.jsx)(f.S.HelpText,{children:c}):null,j?(0,d.jsx)(f.S.Actions,{children:j}):null,g?(0,d.jsx)(f.S.Watermark,{}):null]}):null]})}}};