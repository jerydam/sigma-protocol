"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6167],{22404:(e,r,i)=>{i.d(r,{S:()=>o});var t=i(73788),n=i(74124),a=i(94217);let o=({primaryCta:e,secondaryCta:r,helpText:i,watermark:o=!0,children:l,...s})=>{let c=e||r?(0,t.jsxs)(t.Fragment,{children:[e&&(()=>{let{label:r,...i}=e,a=i.variant||"primary";return(0,t.jsx)(n.a,{...i,variant:a,style:{width:"100%",...i.style},children:r})})(),r&&(()=>{let{label:e,...i}=r,a=i.variant||"secondary";return(0,t.jsx)(n.a,{...i,variant:a,style:{width:"100%",...i.style},children:e})})()]}):null;return(0,t.jsxs)(a.S,{id:s.id,className:s.className,children:[(0,t.jsx)(a.S.Header,{...s}),l?(0,t.jsx)(a.S.Body,{children:l}):null,i||c||o?(0,t.jsxs)(a.S.Footer,{children:[i?(0,t.jsx)(a.S.HelpText,{children:i}):null,c?(0,t.jsx)(a.S.Actions,{children:c}):null,o?(0,t.jsx)(a.S.Watermark,{}):null]}):null]})}},56167:(e,r,i)=>{i.r(r),i.d(r,{ConnectLedgerScreen:()=>h,ConnectLedgerScreenComponent:()=>p,ConnectLedgerScreenView:()=>d,default:()=>h});var t=i(73788);let n=(0,i(90478).A)("arrow-right-left",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);var a=i(78912),o=i(79312),l=i(22404),s=i(94968);i(65936),i(30404),i(28349),i(7764),i(32709),i(57668);let c=e=>(0,t.jsx)("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"-0.625 12.48 397.647 399.546",width:"2500",height:"674",preserveAspectRatio:"none",...e,children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{fill:"#333745",d:"M 333.9 12.8 L 150.9 12.8 L 150.9 258.4 L 396.5 258.4 L 396.5 76.7 C 396.6 42.2 368.4 12.8 333.9 12.8 Z M 94.7 12.8 L 64 12.8 C 29.5 12.8 0 40.9 0 76.8 L 0 107.5 L 94.7 107.5 L 94.7 12.8 Z M 0 165 L 94.7 165 L 94.7 259.7 L 0 259.7 L 0 165 Z M 301.9 410.6 L 332.6 410.6 C 367.1 410.6 396.6 382.5 396.6 346.6 L 396.6 316 L 301.9 316 L 301.9 410.6 Z M 150.9 316 L 245.6 316 L 245.6 410.7 L 150.9 410.7 L 150.9 316 Z M 0 316 L 0 346.7 C 0 381.2 28.1 410.7 64 410.7 L 94.7 410.7 L 94.7 316 L 0 316 Z"})})}),d=({onContinueWithLedger:e,onContinueWithoutLedger:r,title:i="Phantom supports Ledger",subtitle:a="Are you using a Ledger hardware wallet?\nContinue to sign with Ledger"})=>(0,t.jsx)(l.S,{title:i,subtitle:(0,t.jsx)(u,{children:a}),primaryCta:{label:"Continue with Ledger",onClick:e},secondaryCta:{label:"Continue without Ledger",onClick:r},watermark:!0,children:(0,t.jsxs)(g,{children:[(0,t.jsx)(s.G,{style:{width:"48px",height:"48px"}}),(0,t.jsx)(n,{strokeWidth:2,color:"var(--privy-color-icon-subtle)",width:22,height:22}),(0,t.jsx)(c,{style:{width:"48px",height:"48px"}})]})});function p(){let{data:e,setModalData:r,navigate:i}=(0,o.a)();return(0,t.jsx)(d,{onContinueWithLedger:function(){r({...e,login:{...e?.login,isSigningInWithLedgerSolana:!0}}),i("ConnectionStatusScreen")},onContinueWithoutLedger:function(){r({...e,login:{...e?.login,isSigningInWithLedgerSolana:!1}}),i("ConnectionStatusScreen")}})}let h={component:p},g=a.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: var(--screen-space);
`,u=a.I4.span`
  white-space: pre-wrap;
`},66656:(e,r,i)=>{i.d(r,{N:()=>a});var t=i(73788),n=i(78912);let a=({size:e,centerIcon:r})=>(0,t.jsx)(o,{$size:e,children:(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{}),(0,t.jsx)(d,{}),r?(0,t.jsx)(s,{children:r}):null]})}),o=n.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=n.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=n.I4.div`
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
`,c=n.I4.div`
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
`,d=n.I4.div`
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
`},90478:(e,r,i)=>{i.d(r,{A:()=>s});var t=i(65936);let n=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},a=(...e)=>e.filter((e,r,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===r).join(" ").trim();var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:n,className:l="",children:s,iconNode:c,...d},p)=>(0,t.createElement)("svg",{ref:p,...o,width:r,height:r,stroke:e,strokeWidth:n?24*Number(i)/Number(r):i,className:a("lucide",l),...!s&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(s)?s:[s]])),s=(e,r)=>{let i=(0,t.forwardRef)(({className:i,...o},s)=>(0,t.createElement)(l,{ref:s,iconNode:r,className:a(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...o}));return i.displayName=n(e),i}},94217:(e,r,i)=>{i.d(r,{S:()=>j});var t=i(73788),n=i(65936),a=i(78912),o=i(41196),l=i(74124),s=i(66656);let c=a.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,p=a.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,h=(0,a.I4)(l.M)`
  margin: 0 -8px;
`,g=a.I4.div`
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
`,u=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,v=a.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,x=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f=a.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=a.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,y=a.I4.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=a.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,w=a.I4.div`
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
`,j=({children:e,...r})=>(0,t.jsx)(c,{children:(0,t.jsx)(d,{...r,children:e})}),k=a.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,L=(0,a.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,C=a.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,I=({step:e})=>e?(0,t.jsx)(k,{children:(0,t.jsx)(C,{pct:Math.min(100,e.current/e.total*100)})}):null;j.Header=({title:e,subtitle:r,icon:i,iconVariant:n,iconLoadingStatus:a,showBack:o,onBack:l,showInfo:s,onInfo:c,showClose:d,onClose:g,step:u,...y})=>(0,t.jsxs)(p,{...y,children:[(0,t.jsx)(h,{backFn:o?l:void 0,infoFn:s?c:void 0,onClose:d?g:void 0,closeable:d}),(i||n||e||r)&&(0,t.jsxs)(v,{children:[i||n?(0,t.jsx)(j.Icon,{icon:i,variant:n,loadingStatus:a}):null,!(!e&&!r)&&(0,t.jsxs)(x,{children:[e&&(0,t.jsx)(f,{children:e}),r&&(0,t.jsx)(m,{children:r})]})]}),u&&(0,t.jsx)(I,{step:u})]}),(j.Body=n.forwardRef(({children:e,...r},i)=>(0,t.jsx)(g,{ref:i,...r,children:e}))).displayName="Screen.Body",j.Footer=({children:e,...r})=>(0,t.jsx)(u,{id:"privy-content-footer-container",...r,children:e}),j.Actions=({children:e,...r})=>(0,t.jsx)(S,{...r,children:e}),j.HelpText=({children:e,...r})=>(0,t.jsx)(z,{...r,children:e}),j.Watermark=()=>(0,t.jsx)(L,{}),j.Icon=({icon:e,variant:r="subtle",loadingStatus:i})=>"logo"===r&&e?(0,t.jsx)(b,"string"==typeof e?{children:(0,t.jsx)("img",{src:e,alt:""})}:n.isValidElement(e)?{children:e}:{children:n.createElement(e)}):"loading"===r?e?(0,t.jsx)(w,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(o.a4,{success:i?.success,fail:i?.fail}),"string"==typeof e?(0,t.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(e)?n.cloneElement(e,{style:{width:"38px",height:"38px"}}):n.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,t.jsx)(y,{$variant:r,children:(0,t.jsx)(s.N,{size:"64px"})}):(0,t.jsx)(y,{$variant:r,children:e&&("string"==typeof e?(0,t.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(e)?e:n.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let S=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,z=a.I4.div`
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