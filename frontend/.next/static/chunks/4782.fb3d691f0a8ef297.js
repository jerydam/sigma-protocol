"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4782],{22404:(e,r,i)=>{i.d(r,{S:()=>n});var t=i(73788),o=i(74124),a=i(94217);let n=({primaryCta:e,secondaryCta:r,helpText:i,watermark:n=!0,children:l,...d})=>{let s=e||r?(0,t.jsxs)(t.Fragment,{children:[e&&(()=>{let{label:r,...i}=e,a=i.variant||"primary";return(0,t.jsx)(o.a,{...i,variant:a,style:{width:"100%",...i.style},children:r})})(),r&&(()=>{let{label:e,...i}=r,a=i.variant||"secondary";return(0,t.jsx)(o.a,{...i,variant:a,style:{width:"100%",...i.style},children:e})})()]}):null;return(0,t.jsxs)(a.S,{id:d.id,className:d.className,children:[(0,t.jsx)(a.S.Header,{...d}),l?(0,t.jsx)(a.S.Body,{children:l}):null,i||s||n?(0,t.jsxs)(a.S.Footer,{children:[i?(0,t.jsx)(a.S.HelpText,{children:i}):null,s?(0,t.jsx)(a.S.Actions,{children:s}):null,n?(0,t.jsx)(a.S.Watermark,{}):null]}):null]})}},54782:(e,r,i)=>{i.r(r),i.d(r,{UpdateEmailScreen:()=>w,UpdateEmailScreenView:()=>y,default:()=>w});var t=i(73788),o=i(56259),a=i(72853),n=i(72243),l=i(65936),d=i(75187),s=i(94968),c=i(86249),p=i(79312),u=i(41196),h=i(74124),g=i(65494),v=i(75767),x=i(22404);i(30404),i(7764),i(28349),i(32709),i(57668);let f=(0,l.forwardRef)((e,r)=>{let[i,o]=(0,l.useState)(""),[a,g]=(0,l.useState)(""),[x,f]=(0,l.useState)(!1),{authenticated:y,user:w}=(0,p.u)(),{initUpdateEmail:k}=(0,c.u)(),{navigate:j,setModalData:I,currentScreen:E}=(0,p.a)(),{enabled:S,token:C}=(0,s.a)(),$=(0,d.u)(),z=(0,u.a1)(i)&&($.disablePlusEmails&&i.includes("+")?(a||g("Please enter a valid email address without a '+'."),!1):(a&&g(""),!0)),A=x||!z,N=()=>{!S||C||y?(async e=>{if(!w?.email)throw Error("User is required to have an email address to update it.");f(!0);try{await k({oldAddress:w.email.address,newAddress:i,captchaToken:e}),j("AwaitingPasswordlessCodeScreen")}catch(e){I({errorModalData:{error:e,previousScreen:E||"LandingScreen"}}),j("ErrorScreen")}f(!1)})(C):(I({captchaModalData:{callback:e=>{if(!w?.email)throw Error("User is required to have an email address to update it.");return k({oldAddress:w.email.address,newAddress:i,captchaToken:e})},userIntentRequired:!1,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),j("CaptchaScreen"))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m,{children:[a&&(0,t.jsx)(v.E,{style:{marginTop:"0.25rem",textAlign:"left"},children:a}),(0,t.jsxs)(b,{$error:!!a,children:[(0,t.jsx)(u.V,{children:(0,t.jsx)(n.A,{})}),(0,t.jsx)("input",{ref:r,id:"email-input",type:"email",placeholder:"your@email.com",onChange:e=>o(e.target.value),onKeyUp:e=>{"Enter"===e.key&&N()},value:i,autoComplete:"email"}),e.stacked?null:(0,t.jsx)(h.E,{isSubmitting:x,onClick:N,disabled:A,children:"Submit"})]})]}),e.stacked?(0,t.jsx)(h.P,{loadingText:null,loading:x,disabled:A,onClick:N,style:{width:"100%"},children:"Submit"}):null]})}),m=g.I,b=g.E,y=({title:e="Update your email",subtitle:r="Add the email address you'd like to use going forward. We'll send you a confirmation code"})=>(0,t.jsx)(x.S,{title:e,subtitle:r,icon:o.A,watermark:!0,children:(0,t.jsx)(a.B,{children:(0,t.jsx)(f,{stacked:!0})})}),w={component:()=>(0,t.jsx)(y,{})}},56259:(e,r,i)=>{i.d(r,{A:()=>o});var t=i(65936);let o=t.forwardRef(function({title:e,titleId:r,...i},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},i),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))})},65494:(e,r,i)=>{i.d(r,{E:()=>n,I:()=>d,a:()=>l});var t=i(78912),o=i(75767);let a=t.I4.label`
  display: block;
  position: relative;
  width: 100%;
  height: 56px;

  && > :first-child {
    position: absolute;
    left: 0.75em;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    padding: 12px 88px 12px 52px;
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid
      ${({$error:e})=>e?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md);
    width: 100%;
    height: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: ${({$error:e})=>e?"var(--privy-color-error) !important":"var(--privy-color-accent-light)"};
      box-shadow: ${({$error:e})=>e?"none":"0 0 0 1px var(--privy-color-accent-light)"};
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;
    :focus {
      outline: none;
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }
`,n=(0,t.I4)(a)`
  background-color: var(--privy-color-background);
  transition: background-color 200ms ease;

  && > button {
    right: 0;
    line-height: 24px;
    position: absolute;
    padding: 13px 17px;
    background-color: #090;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }
`,l=(0,t.I4)(a)`
  && > input {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-right: ${e=>e.$stacked?"16px":"88px"};

    border: 1px solid
      ${({$error:e})=>e?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"};

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
    }
  }
`,d=t.I4.div`
  width: 100%;

  /* Add styling for the ErrorMessage within EmailInput */
  && > ${o.E} {
    display: block;
    text-align: left;
    padding-left: var(--privy-border-radius-md);
    padding-bottom: 5px;
  }
`},66656:(e,r,i)=>{i.d(r,{N:()=>a});var t=i(73788),o=i(78912);let a=({size:e,centerIcon:r})=>(0,t.jsx)(n,{$size:e,children:(0,t.jsxs)(l,{children:[(0,t.jsx)(s,{}),(0,t.jsx)(c,{}),r?(0,t.jsx)(d,{children:r}):null]})}),n=o.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=o.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,d=o.I4.div`
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
`,s=o.I4.div`
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
`,c=o.I4.div`
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
`},72243:(e,r,i)=>{i.d(r,{A:()=>t});let t=(0,i(90478).A)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]])},72853:(e,r,i)=>{i.d(r,{B:()=>o,C:()=>l,F:()=>s,H:()=>n,R:()=>h,S:()=>p,a:()=>c,b:()=>u,c:()=>d,d:()=>g,e:()=>a});var t=i(78912);let o=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,a=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,n=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,l=(0,t.I4)(a)`
  padding: 20px 0;
`,d=(0,t.I4)(a)`
  gap: 16px;
`,s=t.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,c=t.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;t.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let p=t.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`,u=t.I4.div`
  height: 16px;
`,h=t.I4.div`
  height: 12px;
`;t.I4.div`
  position: relative;
`;let g=t.I4.div`
  height: ${e=>e.height??"12"}px;
`;t.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},75767:(e,r,i)=>{i.d(r,{E:()=>o});var t=i(78912);let o=t.I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},90478:(e,r,i)=>{i.d(r,{A:()=>d});var t=i(65936);let o=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},a=(...e)=>e.filter((e,r,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===r).join(" ").trim();var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:d,iconNode:s,...c},p)=>(0,t.createElement)("svg",{ref:p,...n,width:r,height:r,stroke:e,strokeWidth:o?24*Number(i)/Number(r):i,className:a("lucide",l),...!d&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(c)&&{"aria-hidden":"true"},...c},[...s.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(d)?d:[d]])),d=(e,r)=>{let i=(0,t.forwardRef)(({className:i,...n},d)=>(0,t.createElement)(l,{ref:d,iconNode:r,className:a(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...n}));return i.displayName=o(e),i}},94217:(e,r,i)=>{i.d(r,{S:()=>k});var t=i(73788),o=i(65936),a=i(78912),n=i(41196),l=i(74124),d=i(66656);let s=a.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,c=a.I4.div`
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
`,b=a.I4.div`
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
`,k=({children:e,...r})=>(0,t.jsx)(s,{children:(0,t.jsx)(c,{...r,children:e})}),j=a.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,a.I4)(l.B)`
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
`,S=({step:e})=>e?(0,t.jsx)(j,{children:(0,t.jsx)(E,{pct:Math.min(100,e.current/e.total*100)})}):null;k.Header=({title:e,subtitle:r,icon:i,iconVariant:o,iconLoadingStatus:a,showBack:n,onBack:l,showInfo:d,onInfo:s,showClose:c,onClose:h,step:g,...b})=>(0,t.jsxs)(p,{...b,children:[(0,t.jsx)(u,{backFn:n?l:void 0,infoFn:d?s:void 0,onClose:c?h:void 0,closeable:c}),(i||o||e||r)&&(0,t.jsxs)(v,{children:[i||o?(0,t.jsx)(k.Icon,{icon:i,variant:o,loadingStatus:a}):null,!(!e&&!r)&&(0,t.jsxs)(x,{children:[e&&(0,t.jsx)(f,{children:e}),r&&(0,t.jsx)(m,{children:r})]})]}),g&&(0,t.jsx)(S,{step:g})]}),(k.Body=o.forwardRef(({children:e,...r},i)=>(0,t.jsx)(h,{ref:i,...r,children:e}))).displayName="Screen.Body",k.Footer=({children:e,...r})=>(0,t.jsx)(g,{id:"privy-content-footer-container",...r,children:e}),k.Actions=({children:e,...r})=>(0,t.jsx)(C,{...r,children:e}),k.HelpText=({children:e,...r})=>(0,t.jsx)($,{...r,children:e}),k.Watermark=()=>(0,t.jsx)(I,{}),k.Icon=({icon:e,variant:r="subtle",loadingStatus:i})=>"logo"===r&&e?(0,t.jsx)(y,"string"==typeof e?{children:(0,t.jsx)("img",{src:e,alt:""})}:o.isValidElement(e)?{children:e}:{children:o.createElement(e)}):"loading"===r?e?(0,t.jsx)(w,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(n.a4,{success:i?.success,fail:i?.fail}),"string"==typeof e?(0,t.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):o.isValidElement(e)?o.cloneElement(e,{style:{width:"38px",height:"38px"}}):o.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,t.jsx)(b,{$variant:r,children:(0,t.jsx)(d.N,{size:"64px"})}):(0,t.jsx)(b,{$variant:r,children:e&&("string"==typeof e?(0,t.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):o.isValidElement(e)?e:o.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let C=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,$=a.I4.div`
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