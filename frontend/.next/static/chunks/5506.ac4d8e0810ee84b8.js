"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5506],{22404:(e,r,t)=>{t.d(r,{S:()=>l});var i=t(73788),a=t(74124),n=t(94217);let l=({primaryCta:e,secondaryCta:r,helpText:t,watermark:l=!0,children:o,...s})=>{let c=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,n=t.variant||"primary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,n=t.variant||"secondary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:s.id,className:s.className,children:[(0,i.jsx)(n.S.Header,{...s}),o?(0,i.jsx)(n.S.Body,{children:o}):null,t||c||l?(0,i.jsxs)(n.S.Footer,{children:[t?(0,i.jsx)(n.S.HelpText,{children:t}):null,c?(0,i.jsx)(n.S.Actions,{children:c}):null,l?(0,i.jsx)(n.S.Watermark,{}):null]}):null]})}},25506:(e,r,t)=>{t.r(r),t.d(r,{EmbeddedWalletOnAccountCreateScreen:()=>h,EmbeddedWalletOnAccountCreateView:()=>u,default:()=>h});var i=t(73788),a=t(43917),n=t(65936);async function l(e,r){let t=`${e}-auto-${"ethereum"===r?"eth":"sol"}`,i=(new TextEncoder).encode(t);return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i))).map(e=>e.toString(16).padStart(2,"0")).join("")}var o=t(75187),s=t(94968),c=t(86249),d=t(79312),p=t(22404);t(30404),t(7764),t(28349),t(32709),t(57668);let u=({errorMessage:e,onClose:r})=>(0,i.jsx)(p.S,e?{title:"Something went wrong",subtitle:e,icon:a.A,iconVariant:"error",primaryCta:{label:"Close",onClick:r},watermark:!0}:{title:"Creating your wallet",subtitle:"Please wait...",iconVariant:"loading",watermark:!1}),h={component:()=>{let{setModalData:e,navigate:r,data:t,onUserCloseViaDialogOrKeybindRef:a}=(0,d.a)(),p=(0,o.u)(),[h,g]=(0,n.useState)(""),{embeddedWallets:v}=(0,o.u)(),{authenticated:x,user:m}=(0,d.u)(),{closePrivyModal:y,walletProxy:f,client:b}=(0,c.u)(),{onSuccess:w,onFailure:j,callAuthOnSuccessOnClose:k,shouldCreateEth:C,shouldCreateSol:S}=t.createWallet,I="legacy-embedded-wallets-only"===p.embeddedWallets.mode&&!0===p?.embeddedWallets.requireUserOwnedRecoveryOnCreate,[E,A]=(0,n.useState)(null),{create:z}=(0,s.v)(),W=C??(!!m&&(0,s.s)(m,p.embeddedWallets.ethereum.createOnLogin)),$=S??(!!m&&(0,s.k)(m,p.embeddedWallets.solana.createOnLogin)),O=new s.R(async()=>{let e=await b.getAccessToken();if(m&&e&&f)try{let e,t=await l(m.id,"ethereum"),i=await l(m.id,"solana");if(W&&$)e=await z({chainType:"ethereum",walletIndex:0,latestUser:m,idempotencyKey:t}),e=await z({chainType:"solana",walletIndex:0,latestUser:e.user,idempotencyKey:i});else if($)e=await z({chainType:"solana",walletIndex:0,latestUser:m,idempotencyKey:i});else{if(!W)return void y({shouldCallAuthOnSuccess:k});e=await z({chainType:"ethereum",walletIndex:0,latestUser:m,idempotencyKey:t})}A(e),r("EmbeddedWalletCreatedScreen")}catch(e){g(e.message)}});return(0,n.useEffect)(()=>x&&m?I?(e({...t,createWallet:{...t.createWallet,shouldCreateEth:W,shouldCreateSol:$},recoverySelection:{...t?.recoverySelection,isInAccountCreateFlow:!0,shouldCreateEth:W,shouldCreateSol:$}}),r((0,s.F)({walletAction:"create",showAutomaticRecovery:!1,availableRecoveryMethods:v.userOwnedRecoveryOptions,legacySetWalletPasswordFlow:!1,isResettingPassword:!1}))):void O.execute():(r("LandingScreen"),void j(Error("User must be authenticated before creating a Privy wallet"))),[I,x]),a.current=()=>null,(0,i.jsx)(u,{errorMessage:h||void 0,onClose:()=>{E?(w(E),y({shouldCallAuthOnSuccess:k})):(j(new c.m("User wallet creation failed")),y({shouldCallAuthOnSuccess:!1}))}})}}},43917:(e,r,t)=>{t.d(r,{A:()=>i});let i=(0,t(90478).A)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},66656:(e,r,t)=>{t.d(r,{N:()=>n});var i=t(73788),a=t(78912);let n=({size:e,centerIcon:r})=>(0,i.jsx)(l,{$size:e,children:(0,i.jsxs)(o,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),r?(0,i.jsx)(s,{children:r}):null]})}),l=a.I4.div`
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
`},90478:(e,r,t)=>{t.d(r,{A:()=>s});var i=t(65936);let a=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,i.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:o="",children:s,iconNode:c,...d},p)=>(0,i.createElement)("svg",{ref:p,...l,width:r,height:r,stroke:e,strokeWidth:a?24*Number(t)/Number(r):t,className:n("lucide",o),...!s&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,i.createElement)(e,r)),...Array.isArray(s)?s:[s]])),s=(e,r)=>{let t=(0,i.forwardRef)(({className:t,...l},s)=>(0,i.createElement)(o,{ref:s,iconNode:r,className:n(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,t),...l}));return t.displayName=a(e),t}},94217:(e,r,t)=>{t.d(r,{S:()=>j});var i=t(73788),a=t(65936),n=t(78912),l=t(41196),o=t(74124),s=t(66656);let c=n.I4.div`
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
`,x=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,m=n.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,y=n.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,f=n.I4.div`
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
`,C=(0,n.I4)(o.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,S=n.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,I=({step:e})=>e?(0,i.jsx)(k,{children:(0,i.jsx)(S,{pct:Math.min(100,e.current/e.total*100)})}):null;j.Header=({title:e,subtitle:r,icon:t,iconVariant:a,iconLoadingStatus:n,showBack:l,onBack:o,showInfo:s,onInfo:c,showClose:d,onClose:h,step:g,...f})=>(0,i.jsxs)(p,{...f,children:[(0,i.jsx)(u,{backFn:l?o:void 0,infoFn:s?c:void 0,onClose:d?h:void 0,closeable:d}),(t||a||e||r)&&(0,i.jsxs)(v,{children:[t||a?(0,i.jsx)(j.Icon,{icon:t,variant:a,loadingStatus:n}):null,!(!e&&!r)&&(0,i.jsxs)(x,{children:[e&&(0,i.jsx)(m,{children:e}),r&&(0,i.jsx)(y,{children:r})]})]}),g&&(0,i.jsx)(I,{step:g})]}),(j.Body=a.forwardRef(({children:e,...r},t)=>(0,i.jsx)(h,{ref:t,...r,children:e}))).displayName="Screen.Body",j.Footer=({children:e,...r})=>(0,i.jsx)(g,{id:"privy-content-footer-container",...r,children:e}),j.Actions=({children:e,...r})=>(0,i.jsx)(E,{...r,children:e}),j.HelpText=({children:e,...r})=>(0,i.jsx)(A,{...r,children:e}),j.Watermark=()=>(0,i.jsx)(C,{}),j.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(b,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===r?e?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(l.a4,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(f,{$variant:r,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(f,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let E=n.I4.div`
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