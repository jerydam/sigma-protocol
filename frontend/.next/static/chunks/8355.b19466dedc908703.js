"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8355],{22404:(e,r,t)=>{t.d(r,{S:()=>o});var a=t(73788),i=t(74124),n=t(94217);let o=({primaryCta:e,secondaryCta:r,helpText:t,watermark:o=!0,children:s,...l})=>{let c=e||r?(0,a.jsxs)(a.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,n=t.variant||"primary";return(0,a.jsx)(i.a,{...t,variant:n,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,n=t.variant||"secondary";return(0,a.jsx)(i.a,{...t,variant:n,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,a.jsxs)(n.S,{id:l.id,className:l.className,children:[(0,a.jsx)(n.S.Header,{...l}),s?(0,a.jsx)(n.S.Body,{children:s}):null,t||c||o?(0,a.jsxs)(n.S.Footer,{children:[t?(0,a.jsx)(n.S.HelpText,{children:t}):null,c?(0,a.jsx)(n.S.Actions,{children:c}):null,o?(0,a.jsx)(n.S.Watermark,{}):null]}):null]})}},46615:(e,r,t)=>{t.d(r,{A:()=>a});let a=(0,t(90478).A)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},66279:(e,r,t)=>{t.d(r,{R:()=>f,a:()=>o,b:()=>n,c:()=>g,d:()=>s,g:()=>h,t:()=>c,u:()=>v});var a=t(65936),i=t(86249);let n=0x2f3fb341,o="11111111111111111111111111111111",s="EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",l="0x0000000000000000000000000000000000000000",c=({appId:e,originCurrency:r,destinationCurrency:t,...a})=>({tradeType:"EXPECTED_OUTPUT",originCurrency:r??l,destinationCurrency:t??l,referrer:`privy|${e}`,...a}),d="https://api.relay.link",p="https://api.testnets.relay.link",h=async({input:e,isTestnet:r})=>{let t=await fetch((r?p:d)+"/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.json();if(!(t.ok||"string"==typeof a.message&&a.message.startsWith("Invalid address")))throw console.error("Relay error:",a),Error(a.message??"Error fetching quote from relay");return a},g=e=>{let r=e.steps[0]?.items?.[0];if(r)return{from:r.data.from,to:r.data.to,value:Number(r.data.value),chainId:Number(r.data.chainId),data:r.data.data}};async function u({transactionHash:e,isTestnet:r}){let t=await fetch((r?p:d)+"/requests/v2?hash="+e),a=await t.json();if(!t.ok){if("message"in a&&"string"==typeof a.message)throw Error(a.message);throw Error("Error fetching request from relay")}return a.requests.at(0)?.status??"pending"}function v({transactionHash:e,isTestnet:r,bridgingStatus:t,setBridgingStatus:i,onSuccess:n,onFailure:o}){(0,a.useEffect)(()=>{if(e&&t){if(["delayed","waiting","pending"].includes(t)){let t=setInterval(async()=>{try{let t=await u({transactionHash:e,isTestnet:r});i(t)}catch(e){console.error(e)}},1e3);return()=>clearInterval(t)}"success"===t?n({transactionHash:e}):["refund","failure"].includes(t)&&o({error:new f(e,r)})}},[t,e,r])}class f extends i.a{constructor(e,r){super("We were unable to complete the bridging transaction. Funds will be refunded on your wallet.",void 0,i.b.TRANSACTION_FAILURE),this.relayLink=r?`https://testnets.relay.link/transaction/${e}`:`https://relay.link/transaction/${e}`}}},66656:(e,r,t)=>{t.d(r,{N:()=>n});var a=t(73788),i=t(78912);let n=({size:e,centerIcon:r})=>(0,a.jsx)(o,{$size:e,children:(0,a.jsxs)(s,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(d,{}),r?(0,a.jsx)(l,{children:r}):null]})}),o=i.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=i.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=i.I4.div`
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
`,c=i.I4.div`
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
`,d=i.I4.div`
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
`},90478:(e,r,t)=>{t.d(r,{A:()=>l});var a=t(65936);let i=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,a.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:c,...d},p)=>(0,a.createElement)("svg",{ref:p,...o,width:r,height:r,stroke:e,strokeWidth:i?24*Number(t)/Number(r):t,className:n("lucide",s),...!l&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,a.createElement)(e,r)),...Array.isArray(l)?l:[l]])),l=(e,r)=>{let t=(0,a.forwardRef)(({className:t,...o},l)=>(0,a.createElement)(s,{ref:l,iconNode:r,className:n(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,t),...o}));return t.displayName=i(e),t}},94217:(e,r,t)=>{t.d(r,{S:()=>T});var a=t(73788),i=t(65936),n=t(78912),o=t(41196),s=t(74124),l=t(66656);let c=n.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,p=n.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,h=(0,n.I4)(s.M)`
  margin: 0 -8px;
`,g=n.I4.div`
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
  ${({$colorScheme:e})=>"light"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,u=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,v=n.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,f=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=n.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,x=n.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,m=n.I4.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=n.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,w=n.I4.div`
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
`,T=({children:e,...r})=>(0,a.jsx)(c,{children:(0,a.jsx)(d,{...r,children:e})}),k=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,j=(0,n.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,E=n.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,I=({step:e})=>e?(0,a.jsx)(k,{children:(0,a.jsx)(E,{pct:Math.min(100,e.current/e.total*100)})}):null;T.Header=({title:e,subtitle:r,icon:t,iconVariant:i,iconLoadingStatus:n,showBack:o,onBack:s,showInfo:l,onInfo:c,showClose:d,onClose:g,step:u,...m})=>(0,a.jsxs)(p,{...m,children:[(0,a.jsx)(h,{backFn:o?s:void 0,infoFn:l?c:void 0,onClose:d?g:void 0,closeable:d}),(t||i||e||r)&&(0,a.jsxs)(v,{children:[t||i?(0,a.jsx)(T.Icon,{icon:t,variant:i,loadingStatus:n}):null,!(!e&&!r)&&(0,a.jsxs)(f,{children:[e&&(0,a.jsx)(y,{children:e}),r&&(0,a.jsx)(x,{children:r})]})]}),u&&(0,a.jsx)(I,{step:u})]}),(T.Body=i.forwardRef(({children:e,...r},t)=>(0,a.jsx)(g,{ref:t,...r,children:e}))).displayName="Screen.Body",T.Footer=({children:e,...r})=>(0,a.jsx)(u,{id:"privy-content-footer-container",...r,children:e}),T.Actions=({children:e,...r})=>(0,a.jsx)(C,{...r,children:e}),T.HelpText=({children:e,...r})=>(0,a.jsx)(S,{...r,children:e}),T.Watermark=()=>(0,a.jsx)(j,{}),T.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,a.jsx)(b,"string"==typeof e?{children:(0,a.jsx)("img",{src:e,alt:""})}:i.isValidElement(e)?{children:e}:{children:i.createElement(e)}):"loading"===r?e?(0,a.jsx)(w,{children:(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,a.jsx)(o.a4,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,a.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):i.isValidElement(e)?i.cloneElement(e,{style:{width:"38px",height:"38px"}}):i.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,a.jsx)(m,{$variant:r,children:(0,a.jsx)(l.N,{size:"64px"})}):(0,a.jsx)(m,{$variant:r,children:e&&("string"==typeof e?(0,a.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):i.isValidElement(e)?e:i.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let C=n.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,S=n.I4.div`
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
`},98355:(e,r,t)=>{t.r(r),t.d(r,{ErrorScreen:()=>f,ErrorScreenView:()=>v,default:()=>f});var a=t(73788),i=t(90478);let n=(0,i.A)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),o=(0,i.A)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);var s=t(46615),l=t(78912),c=t(75187),d=t(94968),p=t(86249),h=t(79312),g=t(66279),u=t(22404);t(65936),t(30404),t(7764),t(28349),t(32709),t(57668);let v=({error:e,allowlistConfig:r,onRetry:t,onCaptchaReset:i,onBack:l})=>{let c=((e,r)=>{if(e instanceof g.R)return{title:"Transaction failed",detail:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:e.message}),(0,a.jsxs)("span",{children:[" ","Check the"," ",(0,a.jsx)(y,{href:e.relayLink,target:"_blank",children:"refund status"}),"."]})]}),ctaText:"Try again",icon:n};if(e instanceof p.a)switch(e.privyErrorCode){case p.b.CLIENT_REQUEST_TIMEOUT:return{title:"Timed out",detail:e.message,ctaText:"Try again",icon:n};case p.b.INSUFFICIENT_BALANCE:return{title:"Insufficient balance",detail:e.message,ctaText:"Try again",icon:n};case p.b.TRANSACTION_FAILURE:return{title:"Transaction failure",detail:e.message,ctaText:"Try again",icon:n};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:n}}if(e instanceof d.P&&"twilio_verification_failed"===e.type)return{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:o};if(!(e instanceof p.c))return e instanceof p.e&&e.status&&[400,422].includes(e.status)?{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:n}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:n};switch(e.privyErrorCode){case p.b.INVALID_CAPTCHA:return{title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:n};case p.b.DISALLOWED_LOGIN_METHOD:return{title:"Not allowed",detail:e.message,ctaText:"Try another method",icon:n};case p.b.ALLOWLIST_REJECTED:return{title:r.errorTitle||"You don't have access to this app",detail:r.errorDetail||"Have you been invited?",ctaText:r.errorCtaText||"Try another account",icon:s.A};case p.b.CAPTCHA_FAILURE:return{title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:null};case p.b.CAPTCHA_TIMEOUT:return{title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:null};case p.b.LINKED_TO_ANOTHER_USER:return{title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:n};case p.b.NOT_SUPPORTED:return{title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:n};case p.b.TOO_MANY_REQUESTS:return{title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:n};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:n}}})(e,r);return(0,a.jsx)(u.S,{title:c.title,subtitle:c.detail,icon:c.icon,onBack:l,iconVariant:"error",primaryCta:{label:c.ctaText,onClick:()=>{e instanceof p.c&&(e.privyErrorCode===p.b.INVALID_CAPTCHA&&i?.(),e.privyErrorCode===p.b.ALLOWLIST_REJECTED&&r.errorCtaLink)?window.location.href=r.errorCtaLink:t?.()},variant:"error"},watermark:!0})},f={component:()=>{let{navigate:e,data:r,lastScreen:t,currentScreen:i}=(0,h.a)(),n=(0,c.u)(),{reset:o}=(0,d.a)(),s=r?.errorModalData?.previousScreen||(t===i?void 0:t);return(0,a.jsx)(v,{error:r?.errorModalData?.error||Error(),allowlistConfig:n.allowlistConfig,onRetry:()=>{e(s||"LandingScreen",!1)},onCaptchaReset:o})}},y=l.I4.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`}}]);