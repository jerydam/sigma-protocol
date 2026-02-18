"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7318],{2038:(e,r,i)=>{i.d(r,{A:()=>o});var t=i(65936);let o=t.forwardRef(function({title:e,titleId:r,...i},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},i),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))})},22404:(e,r,i)=>{i.d(r,{S:()=>a});var t=i(73788),o=i(74124),n=i(94217);let a=({primaryCta:e,secondaryCta:r,helpText:i,watermark:a=!0,children:l,...s})=>{let d=e||r?(0,t.jsxs)(t.Fragment,{children:[e&&(()=>{let{label:r,...i}=e,n=i.variant||"primary";return(0,t.jsx)(o.a,{...i,variant:n,style:{width:"100%",...i.style},children:r})})(),r&&(()=>{let{label:e,...i}=r,n=i.variant||"secondary";return(0,t.jsx)(o.a,{...i,variant:n,style:{width:"100%",...i.style},children:e})})()]}):null;return(0,t.jsxs)(n.S,{id:s.id,className:s.className,children:[(0,t.jsx)(n.S.Header,{...s}),l?(0,t.jsx)(n.S.Body,{children:l}):null,i||d||a?(0,t.jsxs)(n.S.Footer,{children:[i?(0,t.jsx)(n.S.HelpText,{children:i}):null,d?(0,t.jsx)(n.S.Actions,{children:d}):null,a?(0,t.jsx)(n.S.Watermark,{}):null]}):null]})}},23970:(e,r,i)=>{i.d(r,{L:()=>o});var t=i(78912);let o=t.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},28887:(e,r,i)=>{i.d(r,{A:()=>c});var t=i(73788),o=i(84844),n=i(64517),a=i(65936),l=i(78912),s=i(41196),d=i(74124);let c=({address:e,showCopyIcon:r,url:i,className:l})=>{let[c,u]=(0,a.useState)(!1);function v(r){r.stopPropagation(),navigator.clipboard.writeText(e).then(()=>u(!0)).catch(console.error)}return(0,a.useEffect)(()=>{if(c){let e=setTimeout(()=>u(!1),3e3);return()=>clearTimeout(e)}},[c]),(0,t.jsxs)(p,i?{children:[(0,t.jsx)(g,{title:e,className:l,href:`${i}/address/${e}`,target:"_blank",children:(0,s.D)(e)}),r&&(0,t.jsx)(d.S,{onClick:v,size:"sm",style:{gap:"0.375rem"},children:(0,t.jsxs)(t.Fragment,c?{children:["Copied",(0,t.jsx)(o.A,{size:16})]}:{children:["Copy",(0,t.jsx)(n.A,{size:16})]})})]}:{children:[(0,t.jsx)(h,{title:e,className:l,children:(0,s.D)(e)}),r&&(0,t.jsx)(d.S,{onClick:v,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,t.jsxs)(t.Fragment,c?{children:["Copied",(0,t.jsx)(o.A,{size:14})]}:{children:["Copy",(0,t.jsx)(n.A,{size:14})]})})]})},p=l.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,h=l.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,g=l.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},33992:(e,r,i)=>{i.d(r,{B:()=>n,a:()=>o});var t=i(78912);let o=(0,t.AH)`
  && {
    border-width: 1px;
    padding: 0.5rem 1rem;
  }

  width: 100%;
  text-align: left;
  border: solid 1px var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${e=>"error"===e.$state?"\n        border-color: var(--privy-color-error);\n        background: var(--privy-color-error-bg);\n      ":""}
`,n=t.I4.div`
  ${o}
`},46547:(e,r,i)=>{i.d(r,{W:()=>a});var t=i(73788),o=i(2038),n=i(78912);let a=({children:e,theme:r})=>(0,t.jsxs)(l,{$theme:r,children:[(0,t.jsx)(o.A,{width:"20px",height:"20px",color:"var(--privy-color-icon-warning)",strokeWidth:2,style:{flexShrink:0}}),(0,t.jsx)(s,{$theme:r,children:e})]}),l=n.I4.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-warn-bg);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,s=n.I4.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`},47318:(e,r,i)=>{i.r(r),i.d(r,{EmbeddedWalletKeyExportScreen:()=>m,EmbeddedWalletKeyExportView:()=>g,default:()=>m});var t=i(73788),o=i(65936),n=i(78912),a=i(83266),l=i(46547),s=i(56618),d=i(75187),c=i(86249),p=i(79312),h=i(22404);i(28349),i(7764),i(30404);let g=({address:e,accessToken:r,appConfigTheme:i,onClose:o,isLoading:n=!1,exportButtonProps:a,onBack:d})=>(0,t.jsx)(h.S,{title:"Export wallet",subtitle:(0,t.jsxs)(t.Fragment,{children:["Copy either your private key or seed phrase to export your wallet."," ",(0,t.jsx)("a",{href:"https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828",target:"blank",rel:"noopener noreferrer",children:"Learn more"})]}),onClose:o,onBack:d,showBack:!!d,watermark:!0,children:(0,t.jsxs)(u,{children:[(0,t.jsx)(l.W,{theme:i,children:"Never share your private key or seed phrase with anyone."}),(0,t.jsx)(s.W,{title:"Your wallet",address:e,showCopyButton:!0}),(0,t.jsx)("div",{style:{width:"100%"},children:n?(0,t.jsx)(v,{}):r&&a&&(0,t.jsx)(y,{accessToken:r,dimensions:{height:"44px"},...a})})]})}),u=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`,v=()=>(0,t.jsx)(x,{children:(0,t.jsx)(f,{children:"Loading..."})}),x=n.I4.div`
  display: flex;
  gap: 12px;
  height: 44px;
`,f=n.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
`;function y(e){let[r,i]=(0,o.useState)(e.dimensions.width),[n,l]=(0,o.useState)(void 0),s=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(s.current&&void 0===r){let{width:e}=s.current.getBoundingClientRect();i(e)}let e=getComputedStyle(document.documentElement);l({background:e.getPropertyValue("--privy-color-background"),background2:e.getPropertyValue("--privy-color-background-2"),foreground3:e.getPropertyValue("--privy-color-foreground-3"),foregroundAccent:e.getPropertyValue("--privy-color-foreground-accent"),accent:e.getPropertyValue("--privy-color-accent"),accentDark:e.getPropertyValue("--privy-color-accent-dark"),success:e.getPropertyValue("--privy-color-success"),colorScheme:e.getPropertyValue("color-scheme")})},[]);let d="ethereum"===e.chainType&&!e.imported&&!e.isUnifiedWallet;return(0,t.jsx)("div",{ref:s,children:r&&(0,t.jsxs)(b,{children:[(0,t.jsx)("iframe",{style:{position:"absolute",zIndex:1},width:r,height:e.dimensions.height,allow:"clipboard-write self *",src:(0,a.j)({origin:e.origin,path:`/apps/${e.appId}/embedded-wallets/export`,query:e.isUnifiedWallet?{v:"1-unified",wallet_id:e.walletId,client_id:e.appClientId,width:`${r}px`,caid:e.clientAnalyticsId,phrase_export:d,...n}:{v:"1",entropy_id:e.entropyId,entropy_id_verifier:e.entropyIdVerifier,hd_wallet_index:e.hdWalletIndex,chain_type:e.chainType,client_id:e.appClientId,width:`${r}px`,caid:e.clientAnalyticsId,phrase_export:d,...n},hash:{token:e.accessToken}})}),(0,t.jsx)(w,{children:"Loading..."}),d&&(0,t.jsx)(w,{children:"Loading..."})]})})}let m={component:()=>{let[e,r]=(0,o.useState)(null),{authenticated:i,user:n}=(0,p.u)(),{closePrivyModal:a,createAnalyticsEvent:l,clientAnalyticsId:s,client:h}=(0,c.u)(),u=(0,d.u)(),{data:v,onUserCloseViaDialogOrKeybindRef:x}=(0,p.a)(),{onFailure:f,onSuccess:y,origin:m,appId:b,appClientId:w,entropyId:j,entropyIdVerifier:k,walletId:I,hdWalletIndex:C,chainType:z,address:E,isUnifiedWallet:A,imported:S,showBackButton:$}=v.keyExport,B=e=>{a({shouldCallAuthOnSuccess:!1}),f("string"==typeof e?Error(e):e)},T=()=>{a({shouldCallAuthOnSuccess:!1}),y(),l({eventName:"embedded_wallet_key_export_completed",payload:{walletAddress:E}})};return(0,o.useEffect)(()=>{if(!i)return B("User must be authenticated before exporting their wallet");h.getAccessToken().then(r).catch(B)},[i,n]),x.current=T,(0,t.jsx)(g,{address:E,accessToken:e,appConfigTheme:u.appearance.palette.colorScheme,onClose:T,isLoading:!e,onBack:$?T:void 0,exportButtonProps:e?{origin:m,appId:b,appClientId:w,clientAnalyticsId:s,entropyId:j,entropyIdVerifier:k,walletId:I,hdWalletIndex:C,isUnifiedWallet:A,imported:S,chainType:z}:void 0})}},b=n.I4.div`
  overflow: visible;
  position: relative;
  overflow: none;
  height: 44px;
  display: flex;
  gap: 12px;
`,w=n.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
`},56618:(e,r,i)=>{i.d(r,{W:()=>b});var t=i(73788),o=i(84844),n=i(64517),a=i(65936),l=i(78912),s=i(74124),d=i(75767),c=i(23970),p=i(28887),h=i(33992);let g=(0,l.I4)(h.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,u=l.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,v=l.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,x=l.I4.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,f=(0,l.I4)(c.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,y=(0,l.I4)(d.E)`
  margin-top: 0.25rem;
`,m=(0,l.I4)(s.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`,b=({errMsg:e,balance:r,address:i,className:l,title:s,showCopyButton:d=!1})=>{let[c,h]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(c){let e=setTimeout(()=>h(!1),3e3);return()=>clearTimeout(e)}},[c]),(0,t.jsxs)("div",{children:[s&&(0,t.jsx)(f,{children:s}),(0,t.jsx)(g,{className:l,$state:e?"error":void 0,children:(0,t.jsxs)(u,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(p.A,{address:i,showCopyIcon:!1}),void 0!==r&&(0,t.jsx)(x,{children:r})]}),d&&(0,t.jsx)(m,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(i).then(()=>h(!0)).catch(console.error)},size:"sm",children:(0,t.jsxs)(t.Fragment,c?{children:["Copied",(0,t.jsx)(o.A,{size:14})]}:{children:["Copy",(0,t.jsx)(n.A,{size:14})]})})]})}),e&&(0,t.jsx)(y,{children:e})]})}},64517:(e,r,i)=>{i.d(r,{A:()=>t});let t=(0,i(90478).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},66656:(e,r,i)=>{i.d(r,{N:()=>n});var t=i(73788),o=i(78912);let n=({size:e,centerIcon:r})=>(0,t.jsx)(a,{$size:e,children:(0,t.jsxs)(l,{children:[(0,t.jsx)(d,{}),(0,t.jsx)(c,{}),r?(0,t.jsx)(s,{children:r}):null]})}),a=o.I4.div`
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
`,s=o.I4.div`
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
`,d=o.I4.div`
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
`},75767:(e,r,i)=>{i.d(r,{E:()=>o});var t=i(78912);let o=t.I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},84844:(e,r,i)=>{i.d(r,{A:()=>t});let t=(0,i(90478).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},90478:(e,r,i)=>{i.d(r,{A:()=>s});var t=i(65936);let o=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},n=(...e)=>e.filter((e,r,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===r).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:s,iconNode:d,...c},p)=>(0,t.createElement)("svg",{ref:p,...a,width:r,height:r,stroke:e,strokeWidth:o?24*Number(i)/Number(r):i,className:n("lucide",l),...!s&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(s)?s:[s]])),s=(e,r)=>{let i=(0,t.forwardRef)(({className:i,...a},s)=>(0,t.createElement)(l,{ref:s,iconNode:r,className:n(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...a}));return i.displayName=o(e),i}},94217:(e,r,i)=>{i.d(r,{S:()=>j});var t=i(73788),o=i(65936),n=i(78912),a=i(41196),l=i(74124),s=i(66656);let d=n.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,c=n.I4.div`
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
`,h=(0,n.I4)(l.M)`
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
`,f=n.I4.h3`
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
`,j=({children:e,...r})=>(0,t.jsx)(d,{children:(0,t.jsx)(c,{...r,children:e})}),k=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,n.I4)(l.B)`
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
`,z=({step:e})=>e?(0,t.jsx)(k,{children:(0,t.jsx)(C,{pct:Math.min(100,e.current/e.total*100)})}):null;j.Header=({title:e,subtitle:r,icon:i,iconVariant:o,iconLoadingStatus:n,showBack:a,onBack:l,showInfo:s,onInfo:d,showClose:c,onClose:g,step:u,...m})=>(0,t.jsxs)(p,{...m,children:[(0,t.jsx)(h,{backFn:a?l:void 0,infoFn:s?d:void 0,onClose:c?g:void 0,closeable:c}),(i||o||e||r)&&(0,t.jsxs)(v,{children:[i||o?(0,t.jsx)(j.Icon,{icon:i,variant:o,loadingStatus:n}):null,!(!e&&!r)&&(0,t.jsxs)(x,{children:[e&&(0,t.jsx)(f,{children:e}),r&&(0,t.jsx)(y,{children:r})]})]}),u&&(0,t.jsx)(z,{step:u})]}),(j.Body=o.forwardRef(({children:e,...r},i)=>(0,t.jsx)(g,{ref:i,...r,children:e}))).displayName="Screen.Body",j.Footer=({children:e,...r})=>(0,t.jsx)(u,{id:"privy-content-footer-container",...r,children:e}),j.Actions=({children:e,...r})=>(0,t.jsx)(E,{...r,children:e}),j.HelpText=({children:e,...r})=>(0,t.jsx)(A,{...r,children:e}),j.Watermark=()=>(0,t.jsx)(I,{}),j.Icon=({icon:e,variant:r="subtle",loadingStatus:i})=>"logo"===r&&e?(0,t.jsx)(b,"string"==typeof e?{children:(0,t.jsx)("img",{src:e,alt:""})}:o.isValidElement(e)?{children:e}:{children:o.createElement(e)}):"loading"===r?e?(0,t.jsx)(w,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(a.a4,{success:i?.success,fail:i?.fail}),"string"==typeof e?(0,t.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):o.isValidElement(e)?o.cloneElement(e,{style:{width:"38px",height:"38px"}}):o.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,t.jsx)(m,{$variant:r,children:(0,t.jsx)(s.N,{size:"64px"})}):(0,t.jsx)(m,{$variant:r,children:e&&("string"==typeof e?(0,t.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):o.isValidElement(e)?e:o.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let E=n.I4.div`
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