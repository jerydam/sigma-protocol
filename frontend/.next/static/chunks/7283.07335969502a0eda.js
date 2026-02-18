"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7283],{19579:(e,r,i)=>{i.d(r,{A:()=>t});var n=i(65936);let t=n.forwardRef(function({title:e,titleId:r,...i},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},i),e?n.createElement("title",{id:r},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))})},22404:(e,r,i)=>{i.d(r,{S:()=>o});var n=i(73788),t=i(74124),a=i(94217);let o=({primaryCta:e,secondaryCta:r,helpText:i,watermark:o=!0,children:l,...s})=>{let c=e||r?(0,n.jsxs)(n.Fragment,{children:[e&&(()=>{let{label:r,...i}=e,a=i.variant||"primary";return(0,n.jsx)(t.a,{...i,variant:a,style:{width:"100%",...i.style},children:r})})(),r&&(()=>{let{label:e,...i}=r,a=i.variant||"secondary";return(0,n.jsx)(t.a,{...i,variant:a,style:{width:"100%",...i.style},children:e})})()]}):null;return(0,n.jsxs)(a.S,{id:s.id,className:s.className,children:[(0,n.jsx)(a.S.Header,{...s}),l?(0,n.jsx)(a.S.Body,{children:l}):null,i||c||o?(0,n.jsxs)(a.S.Footer,{children:[i?(0,n.jsx)(a.S.HelpText,{children:i}):null,c?(0,n.jsx)(a.S.Actions,{children:c}):null,o?(0,n.jsx)(a.S.Watermark,{}):null]}):null]})}},66656:(e,r,i)=>{i.d(r,{N:()=>a});var n=i(73788),t=i(78912);let a=({size:e,centerIcon:r})=>(0,n.jsx)(o,{$size:e,children:(0,n.jsxs)(l,{children:[(0,n.jsx)(c,{}),(0,n.jsx)(d,{}),r?(0,n.jsx)(s,{children:r}):null]})}),o=t.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=t.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=t.I4.div`
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
`},87283:(e,r,i)=>{i.r(r),i.d(r,{UpdatePhoneScreen:()=>p,UpdatePhoneScreenView:()=>d,default:()=>p});var n=i(73788),t=i(19579),a=i(65936),o=i(2685),l=i(86249),s=i(79312),c=i(22404);i(30404),i(28349),i(7764);let d=({title:e="Update your phone number",subtitle:r="Add the phone number you'd like to use going forward. We'll send you a confirmation code",onSubmit:i,isSubmitting:l=!1})=>{let[s,d]=(0,a.useState)(null);return(0,n.jsx)(c.S,{title:e,subtitle:r,icon:t.A,primaryCta:{label:l?"Submitting":"Update",onClick:async()=>{s?.qualifiedPhoneNumber&&await i(s)},disabled:!s?.isValid||l},watermark:!0,children:(0,n.jsx)(o.C,{onChange:e=>{d(e)},onSubmit:async()=>{},noIncludeSubmitButton:!0,hideRecent:!0})})},p={component:()=>{let{currentScreen:e,data:r,navigate:i,setModalData:t}=(0,s.a)(),{user:o}=(0,s.u)(),{initUpdatePhone:c}=(0,l.u)(),[p,u]=(0,a.useState)(!1);return(0,n.jsx)(d,{onSubmit:async n=>{u(!0);try{if(!o?.phone?.number)throw Error("User is required to have an phone number to update it.");await c(o?.phone?.number,n.qualifiedPhoneNumber),i("AwaitingPasswordlessCodeScreen")}catch(n){t({errorModalData:{error:n,previousScreen:r?.errorModalData?.previousScreen||e||"LinkPhoneScreen"}}),i("ErrorScreen")}finally{u(!1)}},isSubmitting:p})}}},94217:(e,r,i)=>{i.d(r,{S:()=>j});var n=i(73788),t=i(65936),a=i(78912),o=i(41196),l=i(74124),s=i(66656);let c=a.I4.div`
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
`,u=(0,a.I4)(l.M)`
  margin: 0 -8px;
`,h=a.I4.div`
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
`,b=a.I4.h3`
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
`,y=a.I4.div`
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
`,j=({children:e,...r})=>(0,n.jsx)(c,{children:(0,n.jsx)(d,{...r,children:e})}),k=a.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,S=(0,a.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,I=a.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,E=({step:e})=>e?(0,n.jsx)(k,{children:(0,n.jsx)(I,{pct:Math.min(100,e.current/e.total*100)})}):null;j.Header=({title:e,subtitle:r,icon:i,iconVariant:t,iconLoadingStatus:a,showBack:o,onBack:l,showInfo:s,onInfo:c,showClose:d,onClose:h,step:g,...m})=>(0,n.jsxs)(p,{...m,children:[(0,n.jsx)(u,{backFn:o?l:void 0,infoFn:s?c:void 0,onClose:d?h:void 0,closeable:d}),(i||t||e||r)&&(0,n.jsxs)(v,{children:[i||t?(0,n.jsx)(j.Icon,{icon:i,variant:t,loadingStatus:a}):null,!(!e&&!r)&&(0,n.jsxs)(x,{children:[e&&(0,n.jsx)(b,{children:e}),r&&(0,n.jsx)(f,{children:r})]})]}),g&&(0,n.jsx)(E,{step:g})]}),(j.Body=t.forwardRef(({children:e,...r},i)=>(0,n.jsx)(h,{ref:i,...r,children:e}))).displayName="Screen.Body",j.Footer=({children:e,...r})=>(0,n.jsx)(g,{id:"privy-content-footer-container",...r,children:e}),j.Actions=({children:e,...r})=>(0,n.jsx)(z,{...r,children:e}),j.HelpText=({children:e,...r})=>(0,n.jsx)(C,{...r,children:e}),j.Watermark=()=>(0,n.jsx)(S,{}),j.Icon=({icon:e,variant:r="subtle",loadingStatus:i})=>"logo"===r&&e?(0,n.jsx)(y,"string"==typeof e?{children:(0,n.jsx)("img",{src:e,alt:""})}:t.isValidElement(e)?{children:e}:{children:t.createElement(e)}):"loading"===r?e?(0,n.jsx)(w,{children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,n.jsx)(o.a4,{success:i?.success,fail:i?.fail}),"string"==typeof e?(0,n.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):t.isValidElement(e)?t.cloneElement(e,{style:{width:"38px",height:"38px"}}):t.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,n.jsx)(m,{$variant:r,children:(0,n.jsx)(s.N,{size:"64px"})}):(0,n.jsx)(m,{$variant:r,children:e&&("string"==typeof e?(0,n.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):t.isValidElement(e)?e:t.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let z=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,C=a.I4.div`
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