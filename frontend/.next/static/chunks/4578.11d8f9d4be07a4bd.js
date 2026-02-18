"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4578],{17984:(e,r,t)=>{t.d(r,{s:()=>a});var i=t(94968);let a=(e,r)=>(0,i.s)(e,r.ethereum.createOnLogin)||(0,i.k)(e,r.solana.createOnLogin)},22404:(e,r,t)=>{t.d(r,{S:()=>s});var i=t(73788),a=t(74124),n=t(94217);let s=({primaryCta:e,secondaryCta:r,helpText:t,watermark:s=!0,children:o,...l})=>{let c=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,n=t.variant||"primary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,n=t.variant||"secondary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:l.id,className:l.className,children:[(0,i.jsx)(n.S.Header,{...l}),o?(0,i.jsx)(n.S.Body,{children:o}):null,t||c||s?(0,i.jsxs)(n.S.Footer,{children:[t?(0,i.jsx)(n.S.HelpText,{children:t}):null,c?(0,i.jsx)(n.S.Actions,{children:c}):null,s?(0,i.jsx)(n.S.Watermark,{}):null]}):null]})}},28075:(e,r,t)=>{t.d(r,{A:()=>i});let i=(0,t(90478).A)("fingerprint-pattern",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]])},34578:(e,r,t)=>{t.r(r),t.d(r,{PasskeyStatusScreen:()=>h,PasskeyStatusScreenView:()=>u,default:()=>h});var i=t(73788),a=t(28075),n=t(65936),s=t(78912),o=t(75187),l=t(86249),c=t(79312),d=t(17984),p=t(22404);t(30404),t(7764),t(28349),t(32709),t(57668);let u=({status:e,passkeySignupFlow:r=!1,error:t,onRetry:n})=>(0,i.jsx)(p.S,{title:(()=>{switch(e){case"loading":return"Waiting for passkey";case"success":return"Success";case"error":return"Something went wrong"}})(),subtitle:(0,i.jsx)(g,{children:(()=>{switch(e){case"loading":return r?"Please follow prompts to register your passkey.":"Please follow prompts to verify your passkey.\nYou will have to sign up with another method first to register a passkey for your account.";case"success":return"You've successfully logged in with your passkey.";case"error":if(t instanceof l.c){if(t.privyErrorCode===l.b.CANNOT_LINK_MORE_OF_TYPE)return"Cannot link more passkeys to account.";if(t.privyErrorCode===l.b.PASSKEY_NOT_ALLOWED)return"Passkey request timed out or rejected by user.\nYou will have to sign up with another method first to register a passkey for your account."}return"An unknown error occurred.\nYou will have to sign up with another method first to register a passkey for your account."}})()}),icon:a.A,iconVariant:"loading",iconLoadingStatus:{success:"success"===e,fail:"error"===e},primaryCta:"error"===e&&n?{label:"Retry",onClick:n}:"success"===e?{label:"Continue",disabled:!0}:void 0,watermark:!0}),h={component:()=>{let{data:e,setModalData:r,navigate:t}=(0,c.a)(),a=(0,o.u)(),{loginWithPasskey:s,signupWithPasskey:p,closePrivyModal:h,createAnalyticsEvent:g}=(0,l.u)(),{user:v,logout:y}=(0,c.u)(),{passkeySignupFlow:f}=e?.passkeyAuthModalData??{},x=o.q-500,[m,b]=(0,n.useState)("loading"),[w,k]=(0,n.useState)(null),j=(0,n.useRef)([]),S=e=>{j.current=[e,...j.current]};(0,n.useEffect)(()=>()=>{j.current.forEach(e=>clearTimeout(e)),j.current=[]},[]);let E=async()=>{b("loading");try{f?await p():await s(),b("success")}catch(e){k(e),b("error")}};return(0,n.useEffect)(()=>{if("success"===m&&v){if(a?.legal.requireUsersAcceptTerms&&!v.hasAcceptedTerms)return void S(setTimeout(()=>{t("AffirmativeConsentScreen")},x));if(!(0,d.s)(v,a?.embeddedWallets))return void S(setTimeout(()=>{h({shouldCallAuthOnSuccess:!0,isSuccess:!0})},o.q));S(setTimeout(()=>{r({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),g({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"PasskeyStatusScreen"}}),y()},callAuthOnSuccessOnClose:!0}}),t("EmbeddedWalletOnAccountCreateScreen")},x))}},[v,m]),(0,n.useEffect)(()=>{E()},[]),(0,i.jsx)(u,{status:m,passkeySignupFlow:f,error:w,onRetry:E})}},g=s.I4.span`
  white-space: pre-wrap;
`},66656:(e,r,t)=>{t.d(r,{N:()=>n});var i=t(73788),a=t(78912);let n=({size:e,centerIcon:r})=>(0,i.jsx)(s,{$size:e,children:(0,i.jsxs)(o,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),r?(0,i.jsx)(l,{children:r}):null]})}),s=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,o=a.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=a.I4.div`
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
`,c=a.I4.div`
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
`,d=a.I4.div`
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
`},90478:(e,r,t)=>{t.d(r,{A:()=>l});var i=t(65936);let a=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,i.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:o="",children:l,iconNode:c,...d},p)=>(0,i.createElement)("svg",{ref:p,...s,width:r,height:r,stroke:e,strokeWidth:a?24*Number(t)/Number(r):t,className:n("lucide",o),...!l&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,i.createElement)(e,r)),...Array.isArray(l)?l:[l]])),l=(e,r)=>{let t=(0,i.forwardRef)(({className:t,...s},l)=>(0,i.createElement)(o,{ref:l,iconNode:r,className:n(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,t),...s}));return t.displayName=a(e),t}},94217:(e,r,t)=>{t.d(r,{S:()=>k});var i=t(73788),a=t(65936),n=t(78912),s=t(41196),o=t(74124),l=t(66656);let c=n.I4.div`
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
`,u=(0,n.I4)(o.M)`
  margin: 0 -8px;
`,h=n.I4.div`
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
`,g=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,v=n.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,y=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f=n.I4.h3`
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
`,k=({children:e,...r})=>(0,i.jsx)(c,{children:(0,i.jsx)(d,{...r,children:e})}),j=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,S=(0,n.I4)(o.B)`
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
`,I=({step:e})=>e?(0,i.jsx)(j,{children:(0,i.jsx)(E,{pct:Math.min(100,e.current/e.total*100)})}):null;k.Header=({title:e,subtitle:r,icon:t,iconVariant:a,iconLoadingStatus:n,showBack:s,onBack:o,showInfo:l,onInfo:c,showClose:d,onClose:h,step:g,...m})=>(0,i.jsxs)(p,{...m,children:[(0,i.jsx)(u,{backFn:s?o:void 0,infoFn:l?c:void 0,onClose:d?h:void 0,closeable:d}),(t||a||e||r)&&(0,i.jsxs)(v,{children:[t||a?(0,i.jsx)(k.Icon,{icon:t,variant:a,loadingStatus:n}):null,!(!e&&!r)&&(0,i.jsxs)(y,{children:[e&&(0,i.jsx)(f,{children:e}),r&&(0,i.jsx)(x,{children:r})]})]}),g&&(0,i.jsx)(I,{step:g})]}),(k.Body=a.forwardRef(({children:e,...r},t)=>(0,i.jsx)(h,{ref:t,...r,children:e}))).displayName="Screen.Body",k.Footer=({children:e,...r})=>(0,i.jsx)(g,{id:"privy-content-footer-container",...r,children:e}),k.Actions=({children:e,...r})=>(0,i.jsx)(C,{...r,children:e}),k.HelpText=({children:e,...r})=>(0,i.jsx)(A,{...r,children:e}),k.Watermark=()=>(0,i.jsx)(S,{}),k.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(b,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===r?e?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(s.a4,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(m,{$variant:r,children:(0,i.jsx)(l.N,{size:"64px"})}):(0,i.jsx)(m,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let C=n.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,A=n.I4.div`
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
`}}]);