"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{501:(r,e,i)=>{i.r(e),i.d(e,{LinkEmailScreen:()=>c,LinkEmailScreenView:()=>s,default:()=>c});var o=i(73788),t=i(56259),a=i(67956),n=i(72853),l=i(75187),d=i(22404);i(65936),i(7764),i(28349),i(32709),i(57668),i(30404);let s=({title:r="Connect your email",subtitle:e="Add your email to your account"})=>(0,o.jsx)(d.S,{title:r,subtitle:e,icon:t.A,watermark:!0,children:(0,o.jsx)(n.B,{children:(0,o.jsx)(a.C,{stacked:!0})})}),c={component:()=>{let r=(0,l.u)();return(0,o.jsx)(s,{subtitle:`Add your email to your ${r?.name} account`})}}},22404:(r,e,i)=>{i.d(e,{S:()=>n});var o=i(73788),t=i(74124),a=i(94217);let n=({primaryCta:r,secondaryCta:e,helpText:i,watermark:n=!0,children:l,...d})=>{let s=r||e?(0,o.jsxs)(o.Fragment,{children:[r&&(()=>{let{label:e,...i}=r,a=i.variant||"primary";return(0,o.jsx)(t.a,{...i,variant:a,style:{width:"100%",...i.style},children:e})})(),e&&(()=>{let{label:r,...i}=e,a=i.variant||"secondary";return(0,o.jsx)(t.a,{...i,variant:a,style:{width:"100%",...i.style},children:r})})()]}):null;return(0,o.jsxs)(a.S,{id:d.id,className:d.className,children:[(0,o.jsx)(a.S.Header,{...d}),l?(0,o.jsx)(a.S.Body,{children:l}):null,i||s||n?(0,o.jsxs)(a.S.Footer,{children:[i?(0,o.jsx)(a.S.HelpText,{children:i}):null,s?(0,o.jsx)(a.S.Actions,{children:s}):null,n?(0,o.jsx)(a.S.Watermark,{}):null]}):null]})}},48931:(r,e,i)=>{i.d(e,{L:()=>a});var o=i(78912);let t=(0,o.i7)`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,a=(0,o.AH)`
  ${r=>r.$isLoading?(0,o.AH)`
          width: 35%;
          animation: ${t} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},56259:(r,e,i)=>{i.d(e,{A:()=>t});var o=i(65936);let t=o.forwardRef(function({title:r,titleId:e,...i},t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":e},i),r?o.createElement("title",{id:e},r):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))})},65494:(r,e,i)=>{i.d(e,{E:()=>n,I:()=>d,a:()=>l});var o=i(78912),t=i(75767);let a=o.I4.label`
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
      ${({$error:r})=>r?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"};
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
      border-color: ${({$error:r})=>r?"var(--privy-color-error) !important":"var(--privy-color-accent-light)"};
      box-shadow: ${({$error:r})=>r?"none":"0 0 0 1px var(--privy-color-accent-light)"};
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
`,n=(0,o.I4)(a)`
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
`,l=(0,o.I4)(a)`
  && > input {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-right: ${r=>r.$stacked?"16px":"88px"};

    border: 1px solid
      ${({$error:r})=>r?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"};

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
`,d=o.I4.div`
  width: 100%;

  /* Add styling for the ErrorMessage within EmailInput */
  && > ${t.E} {
    display: block;
    text-align: left;
    padding-left: var(--privy-border-radius-md);
    padding-bottom: 5px;
  }
`},66656:(r,e,i)=>{i.d(e,{N:()=>a});var o=i(73788),t=i(78912);let a=({size:r,centerIcon:e})=>(0,o.jsx)(n,{$size:r,children:(0,o.jsxs)(l,{children:[(0,o.jsx)(s,{}),(0,o.jsx)(c,{}),e?(0,o.jsx)(d,{children:e}):null]})}),n=t.I4.div`
  --spinner-size: ${r=>r.$size?r.$size:"96px"};

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
`,d=t.I4.div`
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
`,s=t.I4.div`
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
`,c=t.I4.div`
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
`},67956:(r,e,i)=>{i.d(e,{C:()=>x});var o=i(73788),t=i(72243),a=i(65936),n=i(78912),l=i(75187),d=i(86249),s=i(94968),c=i(79312),p=i(41196),u=i(74124),g=i(92363),v=i(65494),h=i(75767);let x=(0,a.forwardRef)((r,e)=>{let[i,n]=(0,a.useState)(r.defaultValue||""),[v,x]=(0,a.useState)(""),[b,w]=(0,a.useState)(!1),{authenticated:k}=(0,c.u)(),{initLoginWithEmail:j}=(0,d.u)(),{navigate:I,setModalData:$,currentScreen:E,data:S}=(0,c.a)(),{enabled:C,token:A}=(0,s.a)(),[z,L]=(0,a.useState)(!1),{accountType:N}=(0,p.F)(),F=(0,l.u)();(0,a.useEffect)(()=>{!i&&F.disablePlusEmails&&S?.inlineError?.error instanceof d.c&&S?.inlineError?.error.privyErrorCode===d.b.DISALLOWED_PLUS_EMAIL&&!v&&x("Please enter a valid email address without a '+'."),v&&x("")},[i]);let P=(0,p.a1)(i),T=b||!P,B=()=>{$({login:S?.login,inlineError:void 0}),!C||A||k?(w(!0),j({email:i,captchaToken:A,disableSignup:S?.login?.disableSignup,withPrivyUi:!0}).then(()=>{I("AwaitingPasswordlessCodeScreen")}).catch(r=>{$({errorModalData:{error:r,previousScreen:E||"LandingScreen"}}),I("ErrorScreen")}).finally(()=>{w(!1)})):($({captchaModalData:{callback:r=>j({email:i,captchaToken:r,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),I("CaptchaScreen"))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(f,{children:[v&&(0,o.jsx)(h.E,{style:{display:"block",marginTop:"0.25rem",textAlign:"left"},children:v}),(0,o.jsxs)(m,{stacked:r.stacked,$error:!!v,children:[(0,o.jsx)(y,{children:(0,o.jsx)(t.A,{})}),(0,o.jsx)("input",{ref:e,id:"email-input",className:"login-method-button",type:"email",placeholder:"your@email.com",onFocus:()=>L(!0),onChange:r=>n(r.target.value),onKeyUp:r=>{"Enter"===r.key&&B()},value:i,autoComplete:"email"}),"email"!==N||z?r.stacked?(0,o.jsx)("span",{}):(0,o.jsx)(u.E,{isSubmitting:b,onClick:B,disabled:T,children:"Submit"}):(0,o.jsx)(g.C,{color:"gray",children:"Recent"})]})]}),r.stacked?(0,o.jsx)(u.P,{loadingText:null,loading:b,disabled:T,onClick:B,style:{width:"100%"},children:"Submit"}):null]})}),f=v.I,m=v.a,y=(0,n.I4)(p.V)`
  display: inline-flex;
`},72243:(r,e,i)=>{i.d(e,{A:()=>o});let o=(0,i(90478).A)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]])},72853:(r,e,i)=>{i.d(e,{B:()=>t,C:()=>l,F:()=>s,H:()=>n,R:()=>g,S:()=>p,a:()=>c,b:()=>u,c:()=>d,d:()=>v,e:()=>a});var o=i(78912);let t=o.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,a=o.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,n=o.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,l=(0,o.I4)(a)`
  padding: 20px 0;
`,d=(0,o.I4)(a)`
  gap: 16px;
`,s=o.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,c=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;o.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let p=o.I4.div`
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
`,u=o.I4.div`
  height: 16px;
`,g=o.I4.div`
  height: 12px;
`;o.I4.div`
  position: relative;
`;let v=o.I4.div`
  height: ${r=>r.height??"12"}px;
`;o.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},75767:(r,e,i)=>{i.d(e,{E:()=>t});var o=i(78912);let t=o.I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},90478:(r,e,i)=>{i.d(e,{A:()=>d});var o=i(65936);let t=r=>{let e=r.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,e,i)=>i?i.toUpperCase():e.toLowerCase());return e.charAt(0).toUpperCase()+e.slice(1)},a=(...r)=>r.filter((r,e,i)=>!!r&&""!==r.trim()&&i.indexOf(r)===e).join(" ").trim();var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,o.forwardRef)(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:t,className:l="",children:d,iconNode:s,...c},p)=>(0,o.createElement)("svg",{ref:p,...n,width:e,height:e,stroke:r,strokeWidth:t?24*Number(i)/Number(e):i,className:a("lucide",l),...!d&&!(r=>{for(let e in r)if(e.startsWith("aria-")||"role"===e||"title"===e)return!0})(c)&&{"aria-hidden":"true"},...c},[...s.map(([r,e])=>(0,o.createElement)(r,e)),...Array.isArray(d)?d:[d]])),d=(r,e)=>{let i=(0,o.forwardRef)(({className:i,...n},d)=>(0,o.createElement)(l,{ref:d,iconNode:e,className:a(`lucide-${t(r).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${r}`,i),...n}));return i.displayName=t(r),i}},92363:(r,e,i)=>{i.d(e,{C:()=>n});var o=i(73788),t=i(78912),a=i(48931);let n=({children:r,color:e,isLoading:i,isPulsing:t,...a})=>(0,o.jsx)(l,{$color:e,$isLoading:i,$isPulsing:t,...a,children:r}),l=t.I4.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${r=>{let e,i;"green"===r.$color&&(e="var(--privy-color-success-dark)",i="var(--privy-color-success-light)"),"red"===r.$color&&(e="var(--privy-color-error)",i="var(--privy-color-error-light)"),"gray"===r.$color&&(e="var(--privy-color-foreground-2)",i="var(--privy-color-background-2)");let o=(0,t.i7)`
      from, to {
        background-color: ${i};
      }

      50% {
        background-color: rgba(${i}, 0.8);
      }
    `;return(0,t.AH)`
      color: ${e};
      background-color: ${i};
      ${r.$isPulsing&&(0,t.AH)`
        animation: ${o} 3s linear infinite;
      `};
    `}}

  ${a.L}
`},94217:(r,e,i)=>{i.d(e,{S:()=>k});var o=i(73788),t=i(65936),a=i(78912),n=i(41196),l=i(74124),d=i(66656);let s=a.I4.div`
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
  ${({$colorScheme:r})=>"light"===r?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===r?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,v=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,h=a.I4.div`
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
  background: ${({$variant:r})=>{switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

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
`,k=({children:r,...e})=>(0,o.jsx)(s,{children:(0,o.jsx)(c,{...e,children:r})}),j=a.I4.div`
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
`,$=a.I4.div`
  height: 100%;
  width: ${({pct:r})=>r}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,E=({step:r})=>r?(0,o.jsx)(j,{children:(0,o.jsx)($,{pct:Math.min(100,r.current/r.total*100)})}):null;k.Header=({title:r,subtitle:e,icon:i,iconVariant:t,iconLoadingStatus:a,showBack:n,onBack:l,showInfo:d,onInfo:s,showClose:c,onClose:g,step:v,...y})=>(0,o.jsxs)(p,{...y,children:[(0,o.jsx)(u,{backFn:n?l:void 0,infoFn:d?s:void 0,onClose:c?g:void 0,closeable:c}),(i||t||r||e)&&(0,o.jsxs)(h,{children:[i||t?(0,o.jsx)(k.Icon,{icon:i,variant:t,loadingStatus:a}):null,!(!r&&!e)&&(0,o.jsxs)(x,{children:[r&&(0,o.jsx)(f,{children:r}),e&&(0,o.jsx)(m,{children:e})]})]}),v&&(0,o.jsx)(E,{step:v})]}),(k.Body=t.forwardRef(({children:r,...e},i)=>(0,o.jsx)(g,{ref:i,...e,children:r}))).displayName="Screen.Body",k.Footer=({children:r,...e})=>(0,o.jsx)(v,{id:"privy-content-footer-container",...e,children:r}),k.Actions=({children:r,...e})=>(0,o.jsx)(S,{...e,children:r}),k.HelpText=({children:r,...e})=>(0,o.jsx)(C,{...e,children:r}),k.Watermark=()=>(0,o.jsx)(I,{}),k.Icon=({icon:r,variant:e="subtle",loadingStatus:i})=>"logo"===e&&r?(0,o.jsx)(b,"string"==typeof r?{children:(0,o.jsx)("img",{src:r,alt:""})}:t.isValidElement(r)?{children:r}:{children:t.createElement(r)}):"loading"===e?r?(0,o.jsx)(w,{children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,o.jsx)(n.a4,{success:i?.success,fail:i?.fail}),"string"==typeof r?(0,o.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):t.isValidElement(r)?t.cloneElement(r,{style:{width:"38px",height:"38px"}}):t.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,o.jsx)(y,{$variant:e,children:(0,o.jsx)(d.N,{size:"64px"})}):(0,o.jsx)(y,{$variant:e,children:r&&("string"==typeof r?(0,o.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):t.isValidElement(r)?r:t.createElement(r,{width:32,height:32,stroke:(()=>{switch(e){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let S=a.I4.div`
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