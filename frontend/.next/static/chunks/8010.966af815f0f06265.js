"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8010],{22404:(e,r,t)=>{t.d(r,{S:()=>o});var i=t(73788),a=t(74124),n=t(94217);let o=({primaryCta:e,secondaryCta:r,helpText:t,watermark:o=!0,children:l,...s})=>{let c=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,n=t.variant||"primary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,n=t.variant||"secondary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:s.id,className:s.className,children:[(0,i.jsx)(n.S.Header,{...s}),l?(0,i.jsx)(n.S.Body,{children:l}):null,t||c||o?(0,i.jsxs)(n.S.Footer,{children:[t?(0,i.jsx)(n.S.HelpText,{children:t}):null,c?(0,i.jsx)(n.S.Actions,{children:c}):null,o?(0,i.jsx)(n.S.Watermark,{}):null]}):null]})}},43917:(e,r,t)=>{t.d(r,{A:()=>i});let i=(0,t(90478).A)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},48010:(e,r,t)=>{t.r(r),t.d(r,{EmbeddedWalletConnectingScreen:()=>p,EmbeddedWalletConnectingView:()=>d,default:()=>p});var i=t(73788),a=t(43917),n=t(65936),o=t(94968),l=t(86249),s=t(79312),c=t(22404);t(7764),t(30404),t(28349),t(32709),t(57668);let d=({connectionFailed:e,onClose:r})=>(0,i.jsx)(c.S,e?{title:"Something went wrong",subtitle:"We're on it. Please try again later.",icon:a.A,iconVariant:"error",primaryCta:{label:"Close",onClick:r},watermark:!0}:{title:"Connecting to your wallet",subtitle:"Please wait...",iconVariant:"loading",showClose:!0,onClose:r,watermark:!1}),p={component:()=>{let{authenticated:e,user:r}=(0,s.u)(),{client:t,closePrivyModal:a,createAnalyticsEvent:c,walletProxy:p}=(0,l.u)(),{navigate:u,data:h,setModalData:v,onUserCloseViaDialogOrKeybindRef:g}=(0,s.a)(),x=(0,n.useMemo)(()=>Date.now(),[]),[y,f]=(0,n.useState)(!1),{onCompleteNavigateTo:m,onFailure:b,shouldForceMFA:w,entropyId:j,entropyIdVerifier:k,recoveryMethod:I,connectingWalletAddress:C,isUnifiedWallet:E=!1}=h?.connectWallet,A=e=>{y||(f(!0),b("string"==typeof e?Error(e):e))};return(0,n.useEffect)(()=>{let r;return e?p?((async()=>{let e=await t.getAccessToken();if(!e)return A("User must be authenticated and have a Privy wallet before it can be connected");try{if(!E){if(!j||!k)return A("For on-device first-class chain wallets, entropyId and entropyIdVerifier are required");await p.connect({accessToken:e,entropyId:j,entropyIdVerifier:k})}w&&await p.verifyMfa({accessToken:e});let t=(Date.now()-x)/1e3;"EmbeddedWalletKeyExportScreen"===m&&t<1?r=setTimeout(()=>{u(m,!1)},1e3*(1-t)):u(m,!1)}catch(e){if((0,o.e)(e)&&"privy"===I){let e=await t.getAccessToken();if(!e)return A("User must be authenticated and have a Privy wallet before it can be recovered");try{c({eventName:"embedded_wallet_pinless_recovery_started",payload:{walletAddress:C}});let r=await p?.recover({accessToken:e,entropyId:j,entropyIdVerifier:k});r?.entropyId||A(Error("Unable to recover wallet")),m?u(m):a({shouldCallAuthOnSuccess:!1}),c({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:C}}),u(m)}catch(e){A("An error has occurred, please try again.")}}else(0,o.e)(e)&&"privy"!==I&&"privy-v2"!==I?(v({...h,recoverWallet:{entropyId:j,entropyIdVerifier:k,onCompleteNavigateTo:m,onFailure:b},recoveryOAuthStatus:{provider:I,action:"recover",isInAccountCreateFlow:!1,shouldCreateEth:!1,shouldCreateSol:!1}}),u((0,o.c)(I))):A(e)}})(),()=>clearTimeout(r)):void 0:A("User must be authenticated and have a Privy wallet before it can be connected")},[e,r,p]),g.current=()=>{A("User exited before wallet could be connected"),a({shouldCallAuthOnSuccess:!1})},(0,i.jsx)(d,{connectionFailed:y,onClose:()=>a({shouldCallAuthOnSuccess:!1})})}}},66656:(e,r,t)=>{t.d(r,{N:()=>n});var i=t(73788),a=t(78912);let n=({size:e,centerIcon:r})=>(0,i.jsx)(o,{$size:e,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),r?(0,i.jsx)(s,{children:r}):null]})}),o=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=a.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=a.I4.div`
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
`},90478:(e,r,t)=>{t.d(r,{A:()=>s});var i=t(65936);let a=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,i.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:l="",children:s,iconNode:c,...d},p)=>(0,i.createElement)("svg",{ref:p,...o,width:r,height:r,stroke:e,strokeWidth:a?24*Number(t)/Number(r):t,className:n("lucide",l),...!s&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,i.createElement)(e,r)),...Array.isArray(s)?s:[s]])),s=(e,r)=>{let t=(0,i.forwardRef)(({className:t,...o},s)=>(0,i.createElement)(l,{ref:s,iconNode:r,className:n(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,t),...o}));return t.displayName=a(e),t}},94217:(e,r,t)=>{t.d(r,{S:()=>j});var i=t(73788),a=t(65936),n=t(78912),o=t(41196),l=t(74124),s=t(66656);let c=n.I4.div`
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
`,u=(0,n.I4)(l.M)`
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
`,v=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,g=n.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,x=n.I4.div`
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
`,f=n.I4.p`
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
`,j=({children:e,...r})=>(0,i.jsx)(c,{children:(0,i.jsx)(d,{...r,children:e})}),k=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,n.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,C=n.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,E=({step:e})=>e?(0,i.jsx)(k,{children:(0,i.jsx)(C,{pct:Math.min(100,e.current/e.total*100)})}):null;j.Header=({title:e,subtitle:r,icon:t,iconVariant:a,iconLoadingStatus:n,showBack:o,onBack:l,showInfo:s,onInfo:c,showClose:d,onClose:h,step:v,...m})=>(0,i.jsxs)(p,{...m,children:[(0,i.jsx)(u,{backFn:o?l:void 0,infoFn:s?c:void 0,onClose:d?h:void 0,closeable:d}),(t||a||e||r)&&(0,i.jsxs)(g,{children:[t||a?(0,i.jsx)(j.Icon,{icon:t,variant:a,loadingStatus:n}):null,!(!e&&!r)&&(0,i.jsxs)(x,{children:[e&&(0,i.jsx)(y,{children:e}),r&&(0,i.jsx)(f,{children:r})]})]}),v&&(0,i.jsx)(E,{step:v})]}),(j.Body=a.forwardRef(({children:e,...r},t)=>(0,i.jsx)(h,{ref:t,...r,children:e}))).displayName="Screen.Body",j.Footer=({children:e,...r})=>(0,i.jsx)(v,{id:"privy-content-footer-container",...r,children:e}),j.Actions=({children:e,...r})=>(0,i.jsx)(A,{...r,children:e}),j.HelpText=({children:e,...r})=>(0,i.jsx)(S,{...r,children:e}),j.Watermark=()=>(0,i.jsx)(I,{}),j.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(b,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===r?e?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.a4,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(m,{$variant:r,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(m,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let A=n.I4.div`
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
`}}]);