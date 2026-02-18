"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4733],{14201:(e,r,i)=>{i.d(r,{T:()=>l,a:()=>c});var t=i(73788),n=i(84844);let a=(0,i(90478).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var o=i(65936),s=i(78912);let l=s.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px; /* 10px gap between items */
  padding-left: 8px; /* 8px indentation container */
`;s.I4.div`
  &&& {
    margin-left: 6px; /* Center the line under the checkbox (12px/2) */
    border-left: 2px solid var(--privy-color-foreground-4);
    height: 10px; /* 10px H padding between paragraphs */
    margin-top: 0;
    margin-bottom: 0;
  }
`;let c=({children:e,variant:r="default",icon:i})=>{let s=()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}};return(0,t.jsxs)(p,{children:[(0,t.jsx)(d,{$variant:r,"data-variant":r,children:(()=>{if(i)return o.isValidElement(i)?o.cloneElement(i,{stroke:s(),strokeWidth:2}):i;switch(r){case"success":default:return(0,t.jsx)(n.A,{size:12,stroke:s(),strokeWidth:3});case"error":return(0,t.jsx)(a,{size:12,stroke:s(),strokeWidth:3})}})()}),e]})},d=s.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";default:return"var(--privy-color-background-2)"}}};
  flex-shrink: 0;
`,p=s.I4.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Align all elements to the top */
  text-align: left;
  gap: 8px;

  && {
    a {
      color: var(--privy-color-accent);
    }
  }
`},22404:(e,r,i)=>{i.d(r,{S:()=>o});var t=i(73788),n=i(74124),a=i(94217);let o=({primaryCta:e,secondaryCta:r,helpText:i,watermark:o=!0,children:s,...l})=>{let c=e||r?(0,t.jsxs)(t.Fragment,{children:[e&&(()=>{let{label:r,...i}=e,a=i.variant||"primary";return(0,t.jsx)(n.a,{...i,variant:a,style:{width:"100%",...i.style},children:r})})(),r&&(()=>{let{label:e,...i}=r,a=i.variant||"secondary";return(0,t.jsx)(n.a,{...i,variant:a,style:{width:"100%",...i.style},children:e})})()]}):null;return(0,t.jsxs)(a.S,{id:l.id,className:l.className,children:[(0,t.jsx)(a.S.Header,{...l}),s?(0,t.jsx)(a.S.Body,{children:s}):null,i||c||o?(0,t.jsxs)(a.S.Footer,{children:[i?(0,t.jsx)(a.S.HelpText,{children:i}):null,c?(0,t.jsx)(a.S.Actions,{children:c}):null,o?(0,t.jsx)(a.S.Watermark,{}):null]}):null]})}},28075:(e,r,i)=>{i.d(r,{A:()=>t});let t=(0,i(90478).A)("fingerprint-pattern",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]])},64733:(e,r,i)=>{i.r(r),i.d(r,{DoubleIconWrapper:()=>m,LinkButton:()=>b,LinkPasskeyScreen:()=>f,LinkPasskeyView:()=>g,default:()=>f});var t=i(73788),n=i(70982),a=i(28075);let o=(0,i(90478).A)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);var s=i(65936),l=i(78912),c=i(41196),d=i(14201),p=i(86249),h=i(79312),u=i(22404);i(30404),i(28349),i(7764);let g=({passkeys:e,isLoading:r,errorReason:i,success:o,expanded:s,onLinkPasskey:l,onUnlinkPasskey:c,onExpand:d,onBack:p,onClose:h})=>(0,t.jsx)(u.S,o?{title:"Passkeys updated",icon:n.A,iconVariant:"success",primaryCta:{label:"Done",onClick:h},onClose:h,watermark:!0}:s?{icon:a.A,title:"Your passkeys",onBack:p,onClose:h,watermark:!0,children:(0,t.jsx)(x,{passkeys:e,expanded:s,onUnlink:c,onExpand:d})}:{icon:a.A,title:"Set up passkey verification",subtitle:"Verify with passkey",primaryCta:{label:"Add new passkey",onClick:l,loading:r},onClose:h,watermark:!0,helpText:i||void 0,children:0===e.length?(0,t.jsx)(y,{}):(0,t.jsx)(v,{children:(0,t.jsx)(x,{passkeys:e,expanded:s,onUnlink:c,onExpand:d})})}),v=l.I4.div`
  margin-bottom: 12px;
`,x=({passkeys:e,expanded:r,onUnlink:i,onExpand:n})=>{let[a,l]=(0,s.useState)([]),d=r?e.length:2;return(0,t.jsxs)("div",{children:[(0,t.jsx)(j,{children:"Your passkeys"}),(0,t.jsxs)(w,{children:[e.slice(0,d).map(e=>(0,t.jsxs)(A,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(I,{children:e.authenticatorName?e.createdWithBrowser?`${e.authenticatorName} on ${e.createdWithBrowser}`:e.authenticatorName:e.createdWithBrowser?e.createdWithOs?`${e.createdWithBrowser} on ${e.createdWithOs}`:`${e.createdWithBrowser}`:"Unknown device"}),(0,t.jsxs)(E,{children:["Last used:"," ",(e.latestVerifiedAt??e.firstVerifiedAt)?.toLocaleString()??"N/A"]})]}),(0,t.jsx)(z,{disabled:a.includes(e.credentialId),onClick:()=>(async e=>{l(r=>r.concat([e])),await i(e),l(r=>r.filter(r=>r!==e))})(e.credentialId),children:a.includes(e.credentialId)?(0,t.jsx)(c.G,{}):(0,t.jsx)(o,{size:16})})]},e.credentialId)),e.length>2&&!r&&(0,t.jsx)(b,{onClick:n,children:"View all"})]})]})},y=()=>(0,t.jsxs)(d.T,{style:{color:"var(--privy-color-foreground)"},children:[(0,t.jsx)(d.a,{children:"Verify with Touch ID, Face ID, PIN, or hardware key"}),(0,t.jsx)(d.a,{children:"Takes seconds to set up and use"}),(0,t.jsx)(d.a,{children:"Use your passkey to verify transactions and login to your account"})]}),f={component:()=>{let{user:e,unlinkPasskey:r}=(0,h.u)(),{linkWithPasskey:i,closePrivyModal:n}=(0,p.u)(),a=e?.linkedAccounts.filter(e=>"passkey"===e.type),[o,l]=(0,s.useState)(!1),[c,d]=(0,s.useState)(""),[u,v]=(0,s.useState)(!1),[x,y]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{0===a.length&&y(!1)},[a.length]),(0,t.jsx)(g,{passkeys:a,isLoading:o,errorReason:c,success:u,expanded:x,onLinkPasskey:()=>{l(!0),i().then(()=>v(!0)).catch(e=>{if(e instanceof p.c){if(e.privyErrorCode===p.b.CANNOT_LINK_MORE_OF_TYPE)return void d("Cannot link more passkeys to account.");if(e.privyErrorCode===p.b.PASSKEY_NOT_ALLOWED)return void d("Passkey request timed out or rejected by user.")}d("Unknown error occurred.")}).finally(()=>{l(!1)})},onUnlinkPasskey:async e=>(l(!0),await r(e).then(()=>v(!0)).catch(e=>{e instanceof p.c&&e.privyErrorCode===p.b.MISSING_MFA_CREDENTIALS?d("Cannot unlink a passkey enrolled in MFA"):d("Unknown error occurred.")}).finally(()=>{l(!1)})),onExpand:()=>y(!0),onBack:()=>y(!1),onClose:()=>n()})}},m=l.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`,k=(0,l.AH)`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`,b=l.I4.button`
  ${k}
`,w=l.I4.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`,j=l.I4.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-beginning;
  width: 100%;
`,I=l.I4.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,E=l.I4.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: #64668b;
  padding: 0.2em 0;
`,A=l.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #e2e3f0 !important;
  width: 100%;
  height: 5em;
`,C=(0,l.AH)`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`,z=l.I4.button`
  ${C}
`},66656:(e,r,i)=>{i.d(r,{N:()=>a});var t=i(73788),n=i(78912);let a=({size:e,centerIcon:r})=>(0,t.jsx)(o,{$size:e,children:(0,t.jsxs)(s,{children:[(0,t.jsx)(c,{}),(0,t.jsx)(d,{}),r?(0,t.jsx)(l,{children:r}):null]})}),o=n.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=n.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=n.I4.div`
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
`},70982:(e,r,i)=>{i.d(r,{A:()=>t});let t=(0,i(90478).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},84844:(e,r,i)=>{i.d(r,{A:()=>t});let t=(0,i(90478).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},90478:(e,r,i)=>{i.d(r,{A:()=>l});var t=i(65936);let n=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},a=(...e)=>e.filter((e,r,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===r).join(" ").trim();var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:n,className:s="",children:l,iconNode:c,...d},p)=>(0,t.createElement)("svg",{ref:p,...o,width:r,height:r,stroke:e,strokeWidth:n?24*Number(i)/Number(r):i,className:a("lucide",s),...!l&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),l=(e,r)=>{let i=(0,t.forwardRef)(({className:i,...o},l)=>(0,t.createElement)(s,{ref:l,iconNode:r,className:a(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...o}));return i.displayName=n(e),i}},94217:(e,r,i)=>{i.d(r,{S:()=>w});var t=i(73788),n=i(65936),a=i(78912),o=i(41196),s=i(74124),l=i(66656);let c=a.I4.div`
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
`,h=(0,a.I4)(s.M)`
  margin: 0 -8px;
`,u=a.I4.div`
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
`,g=a.I4.div`
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
`,y=a.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,f=a.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,m=a.I4.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,k=a.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,b=a.I4.div`
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
`,w=({children:e,...r})=>(0,t.jsx)(c,{children:(0,t.jsx)(d,{...r,children:e})}),j=a.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,a.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,E=a.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,A=({step:e})=>e?(0,t.jsx)(j,{children:(0,t.jsx)(E,{pct:Math.min(100,e.current/e.total*100)})}):null;w.Header=({title:e,subtitle:r,icon:i,iconVariant:n,iconLoadingStatus:a,showBack:o,onBack:s,showInfo:l,onInfo:c,showClose:d,onClose:u,step:g,...m})=>(0,t.jsxs)(p,{...m,children:[(0,t.jsx)(h,{backFn:o?s:void 0,infoFn:l?c:void 0,onClose:d?u:void 0,closeable:d}),(i||n||e||r)&&(0,t.jsxs)(v,{children:[i||n?(0,t.jsx)(w.Icon,{icon:i,variant:n,loadingStatus:a}):null,!(!e&&!r)&&(0,t.jsxs)(x,{children:[e&&(0,t.jsx)(y,{children:e}),r&&(0,t.jsx)(f,{children:r})]})]}),g&&(0,t.jsx)(A,{step:g})]}),(w.Body=n.forwardRef(({children:e,...r},i)=>(0,t.jsx)(u,{ref:i,...r,children:e}))).displayName="Screen.Body",w.Footer=({children:e,...r})=>(0,t.jsx)(g,{id:"privy-content-footer-container",...r,children:e}),w.Actions=({children:e,...r})=>(0,t.jsx)(C,{...r,children:e}),w.HelpText=({children:e,...r})=>(0,t.jsx)(z,{...r,children:e}),w.Watermark=()=>(0,t.jsx)(I,{}),w.Icon=({icon:e,variant:r="subtle",loadingStatus:i})=>"logo"===r&&e?(0,t.jsx)(k,"string"==typeof e?{children:(0,t.jsx)("img",{src:e,alt:""})}:n.isValidElement(e)?{children:e}:{children:n.createElement(e)}):"loading"===r?e?(0,t.jsx)(b,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(o.a4,{success:i?.success,fail:i?.fail}),"string"==typeof e?(0,t.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(e)?n.cloneElement(e,{style:{width:"38px",height:"38px"}}):n.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,t.jsx)(m,{$variant:r,children:(0,t.jsx)(l.N,{size:"64px"})}):(0,t.jsx)(m,{$variant:r,children:e&&("string"==typeof e?(0,t.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(e)?e:n.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let C=a.I4.div`
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