"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5629],{17984:(e,r,i)=>{i.d(r,{s:()=>a});var t=i(94968);let a=(e,r)=>(0,t.s)(e,r.ethereum.createOnLogin)||(0,t.k)(e,r.solana.createOnLogin)},22404:(e,r,i)=>{i.d(r,{S:()=>l});var t=i(73788),a=i(74124),n=i(94217);let l=({primaryCta:e,secondaryCta:r,helpText:i,watermark:l=!0,children:o,...s})=>{let c=e||r?(0,t.jsxs)(t.Fragment,{children:[e&&(()=>{let{label:r,...i}=e,n=i.variant||"primary";return(0,t.jsx)(a.a,{...i,variant:n,style:{width:"100%",...i.style},children:r})})(),r&&(()=>{let{label:e,...i}=r,n=i.variant||"secondary";return(0,t.jsx)(a.a,{...i,variant:n,style:{width:"100%",...i.style},children:e})})()]}):null;return(0,t.jsxs)(n.S,{id:s.id,className:s.className,children:[(0,t.jsx)(n.S.Header,{...s}),o?(0,t.jsx)(n.S.Body,{children:o}):null,i||c||l?(0,t.jsxs)(n.S.Footer,{children:[i?(0,t.jsx)(n.S.HelpText,{children:i}):null,c?(0,t.jsx)(n.S.Actions,{children:c}):null,l?(0,t.jsx)(n.S.Watermark,{}):null]}):null]})}},35629:(e,r,i)=>{i.r(r),i.d(r,{AffirmativeConsentScreen:()=>u,AffirmativeConsentScreenView:()=>v,default:()=>u});var t=i(73788);let a=(0,i(90478).A)("file-check",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);var n=i(64986);i(65936);var l=i(78912),o=i(74124),s=i(75187),c=i(86249),d=i(79312),p=i(17984),h=i(22404);i(28349),i(7764),i(30404),i(32709),i(57668);let u={component:()=>{let{user:e,logout:r}=(0,d.u)(),{onUserCloseViaDialogOrKeybindRef:i,setModalData:a,navigate:n}=(0,d.a)(),l=(0,s.u)(),{acceptTerms:o,closePrivyModal:h,createAnalyticsEvent:u}=(0,c.u)(),g=e=>{e?.preventDefault(),h({shouldCallAuthOnSuccess:!1}),r()};return i.current=g,(0,t.jsx)(v,{termsAndConditionsUrl:l?.legal.termsAndConditionsUrl,privacyPolicyUrl:l?.legal.privacyPolicyUrl,onAccept:async i=>{i?.preventDefault(),await o(),e&&(0,p.s)(e,l.embeddedWallets)?(a({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),u({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"AffirmativeConsentScreen"}}),r()},callAuthOnSuccessOnClose:!0}}),n("EmbeddedWalletOnAccountCreateScreen")):h()},onDecline:g})}},v=({termsAndConditionsUrl:e,privacyPolicyUrl:r,onAccept:i,onDecline:l,title:s="One last step",subtitle:c="By signing up, you agree to our terms and privacy policy."})=>(0,t.jsx)(h.S,{title:s,subtitle:c,icon:a,primaryCta:{label:"Accept",onClick:i},secondaryCta:{label:"No thanks",onClick:l},watermark:!0,children:(e||r)&&(0,t.jsxs)(g,{children:[e&&(0,t.jsxs)(o.a,{variant:"muted",href:e,target:"_blank",size:"lg",style:{justifyContent:"space-between"},as:"a",children:["View Terms",(0,t.jsx)(n.A,{width:16,height:16,strokeWidth:2.25})]}),r&&(0,t.jsxs)(o.a,{variant:"muted",href:r,target:"_blank",size:"lg",style:{justifyContent:"space-between"},as:"a",children:["View Privacy Policy",(0,t.jsx)(n.A,{width:16,height:16,strokeWidth:2.25})]})]})}),g=l.I4.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: var(--screen-space);
`},64986:(e,r,i)=>{i.d(r,{A:()=>t});let t=(0,i(90478).A)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},66656:(e,r,i)=>{i.d(r,{N:()=>n});var t=i(73788),a=i(78912);let n=({size:e,centerIcon:r})=>(0,t.jsx)(l,{$size:e,children:(0,t.jsxs)(o,{children:[(0,t.jsx)(c,{}),(0,t.jsx)(d,{}),r?(0,t.jsx)(s,{children:r}):null]})}),l=a.I4.div`
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
`},90478:(e,r,i)=>{i.d(r,{A:()=>s});var t=i(65936);let a=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=(...e)=>e.filter((e,r,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===r).join(" ").trim();var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:o="",children:s,iconNode:c,...d},p)=>(0,t.createElement)("svg",{ref:p,...l,width:r,height:r,stroke:e,strokeWidth:a?24*Number(i)/Number(r):i,className:n("lucide",o),...!s&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(s)?s:[s]])),s=(e,r)=>{let i=(0,t.forwardRef)(({className:i,...l},s)=>(0,t.createElement)(o,{ref:s,iconNode:r,className:n(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...l}));return i.displayName=a(e),i}},94217:(e,r,i)=>{i.d(r,{S:()=>j});var t=i(73788),a=i(65936),n=i(78912),l=i(41196),o=i(74124),s=i(66656);let c=n.I4.div`
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
`,h=(0,n.I4)(o.M)`
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
`,y=n.I4.div`
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
`,C=(0,n.I4)(o.B)`
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
`,A=({step:e})=>e?(0,t.jsx)(k,{children:(0,t.jsx)(I,{pct:Math.min(100,e.current/e.total*100)})}):null;j.Header=({title:e,subtitle:r,icon:i,iconVariant:a,iconLoadingStatus:n,showBack:l,onBack:o,showInfo:s,onInfo:c,showClose:d,onClose:u,step:v,...y})=>(0,t.jsxs)(p,{...y,children:[(0,t.jsx)(h,{backFn:l?o:void 0,infoFn:s?c:void 0,onClose:d?u:void 0,closeable:d}),(i||a||e||r)&&(0,t.jsxs)(g,{children:[i||a?(0,t.jsx)(j.Icon,{icon:i,variant:a,loadingStatus:n}):null,!(!e&&!r)&&(0,t.jsxs)(x,{children:[e&&(0,t.jsx)(f,{children:e}),r&&(0,t.jsx)(m,{children:r})]})]}),v&&(0,t.jsx)(A,{step:v})]}),(j.Body=a.forwardRef(({children:e,...r},i)=>(0,t.jsx)(u,{ref:i,...r,children:e}))).displayName="Screen.Body",j.Footer=({children:e,...r})=>(0,t.jsx)(v,{id:"privy-content-footer-container",...r,children:e}),j.Actions=({children:e,...r})=>(0,t.jsx)(z,{...r,children:e}),j.HelpText=({children:e,...r})=>(0,t.jsx)(S,{...r,children:e}),j.Watermark=()=>(0,t.jsx)(C,{}),j.Icon=({icon:e,variant:r="subtle",loadingStatus:i})=>"logo"===r&&e?(0,t.jsx)(b,"string"==typeof e?{children:(0,t.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===r?e?(0,t.jsx)(w,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(l.a4,{success:i?.success,fail:i?.fail}),"string"==typeof e?(0,t.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,t.jsx)(y,{$variant:r,children:(0,t.jsx)(s.N,{size:"64px"})}):(0,t.jsx)(y,{$variant:r,children:e&&("string"==typeof e?(0,t.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let z=n.I4.div`
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