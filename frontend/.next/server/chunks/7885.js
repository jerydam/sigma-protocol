"use strict";exports.id=7885,exports.ids=[7885],exports.modules={7885:(a,b,c)=>{c.r(b),c.d(b,{EmbeddedWalletOnAccountCreateScreen:()=>n,EmbeddedWalletOnAccountCreateView:()=>m,default:()=>n});var d=c(66150),e=c(71897),f=c(7719);async function g(a,b){let c=`${a}-auto-${"ethereum"===b?"eth":"sol"}`,d=(new TextEncoder).encode(c);return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",d))).map(a=>a.toString(16).padStart(2,"0")).join("")}var h=c(50579),i=c(59962),j=c(67331),k=c(2808),l=c(99062);c(19078),c(43132),c(11765),c(30443),c(8752);let m=({errorMessage:a,onClose:b})=>(0,d.jsx)(l.S,a?{title:"Something went wrong",subtitle:a,icon:e.A,iconVariant:"error",primaryCta:{label:"Close",onClick:b},watermark:!0}:{title:"Creating your wallet",subtitle:"Please wait...",iconVariant:"loading",watermark:!1}),n={component:()=>{let{setModalData:a,navigate:b,data:c,onUserCloseViaDialogOrKeybindRef:e}=(0,k.a)(),l=(0,h.u)(),[n,o]=(0,f.useState)(""),{embeddedWallets:p}=(0,h.u)(),{authenticated:q,user:r}=(0,k.u)(),{closePrivyModal:s,walletProxy:t,client:u}=(0,j.u)(),{onSuccess:v,onFailure:w,callAuthOnSuccessOnClose:x,shouldCreateEth:y,shouldCreateSol:z}=c.createWallet,A="legacy-embedded-wallets-only"===l.embeddedWallets.mode&&!0===l?.embeddedWallets.requireUserOwnedRecoveryOnCreate,[B,C]=(0,f.useState)(null),{create:D}=(0,i.v)(),E=y??(!!r&&(0,i.s)(r,l.embeddedWallets.ethereum.createOnLogin)),F=z??(!!r&&(0,i.k)(r,l.embeddedWallets.solana.createOnLogin)),G=new i.R(async()=>{let a=await u.getAccessToken();if(r&&a&&t)try{let a,c=await g(r.id,"ethereum"),d=await g(r.id,"solana");if(E&&F)a=await D({chainType:"ethereum",walletIndex:0,latestUser:r,idempotencyKey:c}),a=await D({chainType:"solana",walletIndex:0,latestUser:a.user,idempotencyKey:d});else if(F)a=await D({chainType:"solana",walletIndex:0,latestUser:r,idempotencyKey:d});else{if(!E)return void s({shouldCallAuthOnSuccess:x});a=await D({chainType:"ethereum",walletIndex:0,latestUser:r,idempotencyKey:c})}C(a),b("EmbeddedWalletCreatedScreen")}catch(a){o(a.message)}});return(0,f.useEffect)(()=>q&&r?A?(a({...c,createWallet:{...c.createWallet,shouldCreateEth:E,shouldCreateSol:F},recoverySelection:{...c?.recoverySelection,isInAccountCreateFlow:!0,shouldCreateEth:E,shouldCreateSol:F}}),b((0,i.F)({walletAction:"create",showAutomaticRecovery:!1,availableRecoveryMethods:p.userOwnedRecoveryOptions,legacySetWalletPasswordFlow:!1,isResettingPassword:!1}))):void G.execute():(b("LandingScreen"),void w(Error("User must be authenticated before creating a Privy wallet"))),[A,q]),e.current=()=>null,(0,d.jsx)(m,{errorMessage:n||void 0,onClose:()=>{B?(v(B),s({shouldCallAuthOnSuccess:x})):(w(new j.m("User wallet creation failed")),s({shouldCallAuthOnSuccess:!1}))}})}}},45172:(a,b,c)=>{c.d(b,{S:()=>w});var d=c(66150),e=c(7719),f=c(72291),g=c(69712),h=c(55164),i=c(59656);let j=f.I4.div`
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
`},59656:(a,b,c)=>{c.d(b,{N:()=>f});var d=c(66150),e=c(72291);let f=({size:a,centerIcon:b})=>(0,d.jsx)(g,{$size:a,children:(0,d.jsxs)(h,{children:[(0,d.jsx)(j,{}),(0,d.jsx)(k,{}),b?(0,d.jsx)(i,{children:b}):null]})}),g=e.I4.div`
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
`},70958:(a,b,c)=>{c.d(b,{A:()=>i});var d=c(7719);let e=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)},f=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let h=(0,d.forwardRef)(({color:a="currentColor",size:b=24,strokeWidth:c=2,absoluteStrokeWidth:e,className:h="",children:i,iconNode:j,...k},l)=>(0,d.createElement)("svg",{ref:l,...g,width:b,height:b,stroke:a,strokeWidth:e?24*Number(c)/Number(b):c,className:f("lucide",h),...!i&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0})(k)&&{"aria-hidden":"true"},...k},[...j.map(([a,b])=>(0,d.createElement)(a,b)),...Array.isArray(i)?i:[i]])),i=(a,b)=>{let c=(0,d.forwardRef)(({className:c,...g},i)=>(0,d.createElement)(h,{ref:i,iconNode:b,className:f(`lucide-${e(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,c),...g}));return c.displayName=e(a),c}},71897:(a,b,c)=>{c.d(b,{A:()=>d});let d=(0,c(70958).A)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},99062:(a,b,c)=>{c.d(b,{S:()=>g});var d=c(66150),e=c(55164),f=c(45172);let g=({primaryCta:a,secondaryCta:b,helpText:c,watermark:g=!0,children:h,...i})=>{let j=a||b?(0,d.jsxs)(d.Fragment,{children:[a&&(()=>{let{label:b,...c}=a,f=c.variant||"primary";return(0,d.jsx)(e.a,{...c,variant:f,style:{width:"100%",...c.style},children:b})})(),b&&(()=>{let{label:a,...c}=b,f=c.variant||"secondary";return(0,d.jsx)(e.a,{...c,variant:f,style:{width:"100%",...c.style},children:a})})()]}):null;return(0,d.jsxs)(f.S,{id:i.id,className:i.className,children:[(0,d.jsx)(f.S.Header,{...i}),h?(0,d.jsx)(f.S.Body,{children:h}):null,c||j||g?(0,d.jsxs)(f.S.Footer,{children:[c?(0,d.jsx)(f.S.HelpText,{children:c}):null,j?(0,d.jsx)(f.S.Actions,{children:j}):null,g?(0,d.jsx)(f.S.Watermark,{}):null]}):null]})}}};