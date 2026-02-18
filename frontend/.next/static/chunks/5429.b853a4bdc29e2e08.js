"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5429],{5429:(e,r,i)=>{i.r(r),i.d(r,{EmbeddedWalletPasswordUpdateSplashScreen:()=>c,EmbeddedWalletPasswordUpdateSplashView:()=>l,default:()=>c});var t=i(73788),a=i(46615),n=i(86249),o=i(79312),s=i(22404);i(65936),i(30404),i(28349),i(7764);let l=({onClose:e,onProceed:r})=>(0,t.jsx)(s.S,{title:"Secure Your Account",subtitle:(0,t.jsxs)(t.Fragment,{children:["Please set a password to secure your account.",(0,t.jsx)("br",{}),"Losing access to this password and this device will make your account inaccessible."]}),icon:a.A,primaryCta:{label:"Add password",onClick:r},onClose:e,watermark:!0}),c={component:()=>{let{closePrivyModal:e}=(0,n.u)(),{data:r,navigate:i,onUserCloseViaDialogOrKeybindRef:a}=(0,o.a)(),{onFailure:s}=r.setWalletPassword,c=()=>{s(new n.m("Exited before password was added to wallet")),e({shouldCallAuthOnSuccess:!1})};return a.current=c,(0,t.jsx)(l,{onClose:c,onProceed:()=>{i("EmbeddedWalletPasswordUpdateScreen")}})}}},22404:(e,r,i)=>{i.d(r,{S:()=>o});var t=i(73788),a=i(74124),n=i(94217);let o=({primaryCta:e,secondaryCta:r,helpText:i,watermark:o=!0,children:s,...l})=>{let c=e||r?(0,t.jsxs)(t.Fragment,{children:[e&&(()=>{let{label:r,...i}=e,n=i.variant||"primary";return(0,t.jsx)(a.a,{...i,variant:n,style:{width:"100%",...i.style},children:r})})(),r&&(()=>{let{label:e,...i}=r,n=i.variant||"secondary";return(0,t.jsx)(a.a,{...i,variant:n,style:{width:"100%",...i.style},children:e})})()]}):null;return(0,t.jsxs)(n.S,{id:l.id,className:l.className,children:[(0,t.jsx)(n.S.Header,{...l}),s?(0,t.jsx)(n.S.Body,{children:s}):null,i||c||o?(0,t.jsxs)(n.S.Footer,{children:[i?(0,t.jsx)(n.S.HelpText,{children:i}):null,c?(0,t.jsx)(n.S.Actions,{children:c}):null,o?(0,t.jsx)(n.S.Watermark,{}):null]}):null]})}},46615:(e,r,i)=>{i.d(r,{A:()=>t});let t=(0,i(90478).A)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},66656:(e,r,i)=>{i.d(r,{N:()=>n});var t=i(73788),a=i(78912);let n=({size:e,centerIcon:r})=>(0,t.jsx)(o,{$size:e,children:(0,t.jsxs)(s,{children:[(0,t.jsx)(c,{}),(0,t.jsx)(d,{}),r?(0,t.jsx)(l,{children:r}):null]})}),o=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=a.I4.div`
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
`},90478:(e,r,i)=>{i.d(r,{A:()=>l});var t=i(65936);let a=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=(...e)=>e.filter((e,r,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===r).join(" ").trim();var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:l,iconNode:c,...d},p)=>(0,t.createElement)("svg",{ref:p,...o,width:r,height:r,stroke:e,strokeWidth:a?24*Number(i)/Number(r):i,className:n("lucide",s),...!l&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),l=(e,r)=>{let i=(0,t.forwardRef)(({className:i,...o},l)=>(0,t.createElement)(s,{ref:l,iconNode:r,className:n(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...o}));return i.displayName=a(e),i}},94217:(e,r,i)=>{i.d(r,{S:()=>j});var t=i(73788),a=i(65936),n=i(78912),o=i(41196),s=i(74124),l=i(66656);let c=n.I4.div`
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
`,u=n.I4.div`
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
`,f=n.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=n.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,b=n.I4.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=n.I4.div`
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
`,j=({children:e,...r})=>(0,t.jsx)(c,{children:(0,t.jsx)(d,{...r,children:e})}),k=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,n.I4)(s.B)`
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
`,E=({step:e})=>e?(0,t.jsx)(k,{children:(0,t.jsx)(C,{pct:Math.min(100,e.current/e.total*100)})}):null;j.Header=({title:e,subtitle:r,icon:i,iconVariant:a,iconLoadingStatus:n,showBack:o,onBack:s,showInfo:l,onInfo:c,showClose:d,onClose:u,step:g,...b})=>(0,t.jsxs)(p,{...b,children:[(0,t.jsx)(h,{backFn:o?s:void 0,infoFn:l?c:void 0,onClose:d?u:void 0,closeable:d}),(i||a||e||r)&&(0,t.jsxs)(v,{children:[i||a?(0,t.jsx)(j.Icon,{icon:i,variant:a,loadingStatus:n}):null,!(!e&&!r)&&(0,t.jsxs)(x,{children:[e&&(0,t.jsx)(f,{children:e}),r&&(0,t.jsx)(m,{children:r})]})]}),g&&(0,t.jsx)(E,{step:g})]}),(j.Body=a.forwardRef(({children:e,...r},i)=>(0,t.jsx)(u,{ref:i,...r,children:e}))).displayName="Screen.Body",j.Footer=({children:e,...r})=>(0,t.jsx)(g,{id:"privy-content-footer-container",...r,children:e}),j.Actions=({children:e,...r})=>(0,t.jsx)(S,{...r,children:e}),j.HelpText=({children:e,...r})=>(0,t.jsx)(z,{...r,children:e}),j.Watermark=()=>(0,t.jsx)(I,{}),j.Icon=({icon:e,variant:r="subtle",loadingStatus:i})=>"logo"===r&&e?(0,t.jsx)(y,"string"==typeof e?{children:(0,t.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===r?e?(0,t.jsx)(w,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(o.a4,{success:i?.success,fail:i?.fail}),"string"==typeof e?(0,t.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,t.jsx)(b,{$variant:r,children:(0,t.jsx)(l.N,{size:"64px"})}):(0,t.jsx)(b,{$variant:r,children:e&&("string"==typeof e?(0,t.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let S=n.I4.div`
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