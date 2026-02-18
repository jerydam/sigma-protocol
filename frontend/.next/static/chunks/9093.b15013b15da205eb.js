"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9093],{22404:(e,r,i)=>{i.d(r,{S:()=>o});var a=i(73788),t=i(74124),n=i(94217);let o=({primaryCta:e,secondaryCta:r,helpText:i,watermark:o=!0,children:s,...l})=>{let c=e||r?(0,a.jsxs)(a.Fragment,{children:[e&&(()=>{let{label:r,...i}=e,n=i.variant||"primary";return(0,a.jsx)(t.a,{...i,variant:n,style:{width:"100%",...i.style},children:r})})(),r&&(()=>{let{label:e,...i}=r,n=i.variant||"secondary";return(0,a.jsx)(t.a,{...i,variant:n,style:{width:"100%",...i.style},children:e})})()]}):null;return(0,a.jsxs)(n.S,{id:l.id,className:l.className,children:[(0,a.jsx)(n.S.Header,{...l}),s?(0,a.jsx)(n.S.Body,{children:s}):null,i||c||o?(0,a.jsxs)(n.S.Footer,{children:[i?(0,a.jsx)(n.S.HelpText,{children:i}):null,c?(0,a.jsx)(n.S.Actions,{children:c}):null,o?(0,a.jsx)(n.S.Watermark,{}):null]}):null]})}},28075:(e,r,i)=>{i.d(r,{A:()=>a});let a=(0,i(90478).A)("fingerprint-pattern",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]])},59093:(e,r,i)=>{i.r(r),i.d(r,{PasskeySelectSignupOrLogin:()=>d,PasskeySelectSignupOrLoginView:()=>c,default:()=>d});var a=i(73788),t=i(28075),n=i(94968),o=i(86249),s=i(79312),l=i(22404);i(65936),i(7764),i(30404),i(28349),i(32709),i(57668);let c=({title:e="Log in or create a new account?",subtitle:r="Create a new account with a passkey or use a passkey to log in to an existing account.",onSignup:i,onLogin:n})=>(0,a.jsx)(l.S,{title:e,subtitle:r,icon:t.A,primaryCta:{label:"Create new account",onClick:i},secondaryCta:{label:"Log in with a passkey",onClick:n},watermark:!0}),d={component:()=>{let{enabled:e,token:r}=(0,n.a)(),{navigate:i,setModalData:t}=(0,s.a)(),{initSignupWithPasskey:l,initLoginWithPasskey:d}=(0,o.u)();return(0,a.jsx)(c,{onSignup:async()=>{e&&!r?(t({passkeyAuthModalData:{passkeySignupFlow:!0},captchaModalData:{callback:e=>l({captchaToken:e,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:"PasskeyStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),i("CaptchaScreen")):(await l({withPrivyUi:!0,captchaToken:r}),t({passkeyAuthModalData:{passkeySignupFlow:!0}}),i("PasskeyStatusScreen"))},onLogin:async()=>{e&&!r?(t({passkeyAuthModalData:{passkeySignupFlow:!1},captchaModalData:{callback:e=>d({captchaToken:e,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:"PasskeyStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),i("CaptchaScreen")):(await d({withPrivyUi:!0,captchaToken:r}),t({passkeyAuthModalData:{passkeySignupFlow:!1}}),i("PasskeyStatusScreen"))}})}}},66656:(e,r,i)=>{i.d(r,{N:()=>n});var a=i(73788),t=i(78912);let n=({size:e,centerIcon:r})=>(0,a.jsx)(o,{$size:e,children:(0,a.jsxs)(s,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(d,{}),r?(0,a.jsx)(l,{children:r}):null]})}),o=t.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=t.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=t.I4.div`
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
`,c=t.I4.div`
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
`,d=t.I4.div`
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
`},90478:(e,r,i)=>{i.d(r,{A:()=>l});var a=i(65936);let t=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=(...e)=>e.filter((e,r,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===r).join(" ").trim();var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,a.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:t,className:s="",children:l,iconNode:c,...d},p)=>(0,a.createElement)("svg",{ref:p,...o,width:r,height:r,stroke:e,strokeWidth:t?24*Number(i)/Number(r):i,className:n("lucide",s),...!l&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,a.createElement)(e,r)),...Array.isArray(l)?l:[l]])),l=(e,r)=>{let i=(0,a.forwardRef)(({className:i,...o},l)=>(0,a.createElement)(s,{ref:l,iconNode:r,className:n(`lucide-${t(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...o}));return i.displayName=t(e),i}},94217:(e,r,i)=>{i.d(r,{S:()=>w});var a=i(73788),t=i(65936),n=i(78912),o=i(41196),s=i(74124),l=i(66656);let c=n.I4.div`
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
`,k=n.I4.div`
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
`,w=({children:e,...r})=>(0,a.jsx)(c,{children:(0,a.jsx)(d,{...r,children:e})}),j=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,S=(0,n.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,I=n.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,C=({step:e})=>e?(0,a.jsx)(j,{children:(0,a.jsx)(I,{pct:Math.min(100,e.current/e.total*100)})}):null;w.Header=({title:e,subtitle:r,icon:i,iconVariant:t,iconLoadingStatus:n,showBack:o,onBack:s,showInfo:l,onInfo:c,showClose:d,onClose:g,step:u,...m})=>(0,a.jsxs)(p,{...m,children:[(0,a.jsx)(h,{backFn:o?s:void 0,infoFn:l?c:void 0,onClose:d?g:void 0,closeable:d}),(i||t||e||r)&&(0,a.jsxs)(v,{children:[i||t?(0,a.jsx)(w.Icon,{icon:i,variant:t,loadingStatus:n}):null,!(!e&&!r)&&(0,a.jsxs)(x,{children:[e&&(0,a.jsx)(y,{children:e}),r&&(0,a.jsx)(f,{children:r})]})]}),u&&(0,a.jsx)(C,{step:u})]}),(w.Body=t.forwardRef(({children:e,...r},i)=>(0,a.jsx)(g,{ref:i,...r,children:e}))).displayName="Screen.Body",w.Footer=({children:e,...r})=>(0,a.jsx)(u,{id:"privy-content-footer-container",...r,children:e}),w.Actions=({children:e,...r})=>(0,a.jsx)(E,{...r,children:e}),w.HelpText=({children:e,...r})=>(0,a.jsx)(z,{...r,children:e}),w.Watermark=()=>(0,a.jsx)(S,{}),w.Icon=({icon:e,variant:r="subtle",loadingStatus:i})=>"logo"===r&&e?(0,a.jsx)(b,"string"==typeof e?{children:(0,a.jsx)("img",{src:e,alt:""})}:t.isValidElement(e)?{children:e}:{children:t.createElement(e)}):"loading"===r?e?(0,a.jsx)(k,{children:(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,a.jsx)(o.a4,{success:i?.success,fail:i?.fail}),"string"==typeof e?(0,a.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):t.isValidElement(e)?t.cloneElement(e,{style:{width:"38px",height:"38px"}}):t.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,a.jsx)(m,{$variant:r,children:(0,a.jsx)(l.N,{size:"64px"})}):(0,a.jsx)(m,{$variant:r,children:e&&("string"==typeof e?(0,a.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):t.isValidElement(e)?e:t.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let E=n.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,z=n.I4.div`
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