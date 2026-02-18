"use strict";exports.id=1838,exports.ids=[1838],exports.modules={7595:(a,b,c)=>{c.d(b,{A:()=>k});var d=c(66150),e=c(54074),f=c(57685),g=c(7719),h=c(72291),i=c(69712),j=c(55164);let k=({address:a,showCopyIcon:b,url:c,className:h})=>{let[k,o]=(0,g.useState)(!1);function p(b){b.stopPropagation(),navigator.clipboard.writeText(a).then(()=>o(!0)).catch(console.error)}return(0,g.useEffect)(()=>{if(k){let a=setTimeout(()=>o(!1),3e3);return()=>clearTimeout(a)}},[k]),(0,d.jsxs)(l,c?{children:[(0,d.jsx)(n,{title:a,className:h,href:`${c}/address/${a}`,target:"_blank",children:(0,i.D)(a)}),b&&(0,d.jsx)(j.S,{onClick:p,size:"sm",style:{gap:"0.375rem"},children:(0,d.jsxs)(d.Fragment,k?{children:["Copied",(0,d.jsx)(e.A,{size:16})]}:{children:["Copy",(0,d.jsx)(f.A,{size:16})]})})]}:{children:[(0,d.jsx)(m,{title:a,className:h,children:(0,i.D)(a)}),b&&(0,d.jsx)(j.S,{onClick:p,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,d.jsxs)(d.Fragment,k?{children:["Copied",(0,d.jsx)(e.A,{size:14})]}:{children:["Copy",(0,d.jsx)(f.A,{size:14})]})})]})},l=h.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,m=h.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,n=h.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},18404:(a,b,c)=>{c.d(b,{W:()=>u});var d=c(66150),e=c(54074),f=c(57685),g=c(7719),h=c(72291),i=c(55164),j=c(94713),k=c(56926),l=c(7595),m=c(74446);let n=(0,h.I4)(m.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,o=h.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,p=h.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,q=h.I4.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,r=(0,h.I4)(k.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,s=(0,h.I4)(j.E)`
  margin-top: 0.25rem;
`,t=(0,h.I4)(i.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`,u=({errMsg:a,balance:b,address:c,className:h,title:i,showCopyButton:j=!1})=>{let[k,m]=(0,g.useState)(!1);return(0,g.useEffect)(()=>{if(k){let a=setTimeout(()=>m(!1),3e3);return()=>clearTimeout(a)}},[k]),(0,d.jsxs)("div",{children:[i&&(0,d.jsx)(r,{children:i}),(0,d.jsx)(n,{className:h,$state:a?"error":void 0,children:(0,d.jsxs)(o,{children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(l.A,{address:c,showCopyIcon:!1}),void 0!==b&&(0,d.jsx)(q,{children:b})]}),j&&(0,d.jsx)(t,{onClick:function(a){a.stopPropagation(),navigator.clipboard.writeText(c).then(()=>m(!0)).catch(console.error)},size:"sm",children:(0,d.jsxs)(d.Fragment,k?{children:["Copied",(0,d.jsx)(e.A,{size:14})]}:{children:["Copy",(0,d.jsx)(f.A,{size:14})]})})]})}),a&&(0,d.jsx)(s,{children:a})]})}},39820:(a,b,c)=>{c.d(b,{A:()=>e});var d=c(7719);let e=d.forwardRef(function({title:a,titleId:b,...c},e){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":b},c),a?d.createElement("title",{id:b},a):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))})},41838:(a,b,c)=>{c.r(b),c.d(b,{EmbeddedWalletKeyExportScreen:()=>t,EmbeddedWalletKeyExportView:()=>n,default:()=>t});var d=c(66150),e=c(7719),f=c(72291),g=c(74672),h=c(78007),i=c(18404),j=c(50579),k=c(67331),l=c(2808),m=c(99062);c(11765),c(43132),c(19078);let n=({address:a,accessToken:b,appConfigTheme:c,onClose:e,isLoading:f=!1,exportButtonProps:g,onBack:j})=>(0,d.jsx)(m.S,{title:"Export wallet",subtitle:(0,d.jsxs)(d.Fragment,{children:["Copy either your private key or seed phrase to export your wallet."," ",(0,d.jsx)("a",{href:"https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828",target:"blank",rel:"noopener noreferrer",children:"Learn more"})]}),onClose:e,onBack:j,showBack:!!j,watermark:!0,children:(0,d.jsxs)(o,{children:[(0,d.jsx)(h.W,{theme:c,children:"Never share your private key or seed phrase with anyone."}),(0,d.jsx)(i.W,{title:"Your wallet",address:a,showCopyButton:!0}),(0,d.jsx)("div",{style:{width:"100%"},children:f?(0,d.jsx)(p,{}):b&&g&&(0,d.jsx)(s,{accessToken:b,dimensions:{height:"44px"},...g})})]})}),o=f.I4.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`,p=()=>(0,d.jsx)(q,{children:(0,d.jsx)(r,{children:"Loading..."})}),q=f.I4.div`
  display: flex;
  gap: 12px;
  height: 44px;
`,r=f.I4.div`
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
`;function s(a){let[b,c]=(0,e.useState)(a.dimensions.width),[f,h]=(0,e.useState)(void 0),i=(0,e.useRef)(null);(0,e.useEffect)(()=>{if(i.current&&void 0===b){let{width:a}=i.current.getBoundingClientRect();c(a)}let a=getComputedStyle(document.documentElement);h({background:a.getPropertyValue("--privy-color-background"),background2:a.getPropertyValue("--privy-color-background-2"),foreground3:a.getPropertyValue("--privy-color-foreground-3"),foregroundAccent:a.getPropertyValue("--privy-color-foreground-accent"),accent:a.getPropertyValue("--privy-color-accent"),accentDark:a.getPropertyValue("--privy-color-accent-dark"),success:a.getPropertyValue("--privy-color-success"),colorScheme:a.getPropertyValue("color-scheme")})},[]);let j="ethereum"===a.chainType&&!a.imported&&!a.isUnifiedWallet;return(0,d.jsx)("div",{ref:i,children:b&&(0,d.jsxs)(u,{children:[(0,d.jsx)("iframe",{style:{position:"absolute",zIndex:1},width:b,height:a.dimensions.height,allow:"clipboard-write self *",src:(0,g.j)({origin:a.origin,path:`/apps/${a.appId}/embedded-wallets/export`,query:a.isUnifiedWallet?{v:"1-unified",wallet_id:a.walletId,client_id:a.appClientId,width:`${b}px`,caid:a.clientAnalyticsId,phrase_export:j,...f}:{v:"1",entropy_id:a.entropyId,entropy_id_verifier:a.entropyIdVerifier,hd_wallet_index:a.hdWalletIndex,chain_type:a.chainType,client_id:a.appClientId,width:`${b}px`,caid:a.clientAnalyticsId,phrase_export:j,...f},hash:{token:a.accessToken}})}),(0,d.jsx)(v,{children:"Loading..."}),j&&(0,d.jsx)(v,{children:"Loading..."})]})})}let t={component:()=>{let[a,b]=(0,e.useState)(null),{authenticated:c,user:f}=(0,l.u)(),{closePrivyModal:g,createAnalyticsEvent:h,clientAnalyticsId:i,client:m}=(0,k.u)(),o=(0,j.u)(),{data:p,onUserCloseViaDialogOrKeybindRef:q}=(0,l.a)(),{onFailure:r,onSuccess:s,origin:t,appId:u,appClientId:v,entropyId:w,entropyIdVerifier:x,walletId:y,hdWalletIndex:z,chainType:A,address:B,isUnifiedWallet:C,imported:D,showBackButton:E}=p.keyExport,F=a=>{g({shouldCallAuthOnSuccess:!1}),r("string"==typeof a?Error(a):a)},G=()=>{g({shouldCallAuthOnSuccess:!1}),s(),h({eventName:"embedded_wallet_key_export_completed",payload:{walletAddress:B}})};return(0,e.useEffect)(()=>{if(!c)return F("User must be authenticated before exporting their wallet");m.getAccessToken().then(b).catch(F)},[c,f]),q.current=G,(0,d.jsx)(n,{address:B,accessToken:a,appConfigTheme:o.appearance.palette.colorScheme,onClose:G,isLoading:!a,onBack:E?G:void 0,exportButtonProps:a?{origin:t,appId:u,appClientId:v,clientAnalyticsId:i,entropyId:w,entropyIdVerifier:x,walletId:y,hdWalletIndex:z,isUnifiedWallet:C,imported:D,chainType:A}:void 0})}},u=f.I4.div`
  overflow: visible;
  position: relative;
  overflow: none;
  height: 44px;
  display: flex;
  gap: 12px;
`,v=f.I4.div`
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
`},45172:(a,b,c)=>{c.d(b,{S:()=>w});var d=c(66150),e=c(7719),f=c(72291),g=c(69712),h=c(55164),i=c(59656);let j=f.I4.div`
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
`},54074:(a,b,c)=>{c.d(b,{A:()=>d});let d=(0,c(70958).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},56926:(a,b,c)=>{c.d(b,{L:()=>e});var d=c(72291);let e=d.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},57685:(a,b,c)=>{c.d(b,{A:()=>d});let d=(0,c(70958).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},59656:(a,b,c)=>{c.d(b,{N:()=>f});var d=c(66150),e=c(72291);let f=({size:a,centerIcon:b})=>(0,d.jsx)(g,{$size:a,children:(0,d.jsxs)(h,{children:[(0,d.jsx)(j,{}),(0,d.jsx)(k,{}),b?(0,d.jsx)(i,{children:b}):null]})}),g=e.I4.div`
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
`},70958:(a,b,c)=>{c.d(b,{A:()=>i});var d=c(7719);let e=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)},f=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let h=(0,d.forwardRef)(({color:a="currentColor",size:b=24,strokeWidth:c=2,absoluteStrokeWidth:e,className:h="",children:i,iconNode:j,...k},l)=>(0,d.createElement)("svg",{ref:l,...g,width:b,height:b,stroke:a,strokeWidth:e?24*Number(c)/Number(b):c,className:f("lucide",h),...!i&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0})(k)&&{"aria-hidden":"true"},...k},[...j.map(([a,b])=>(0,d.createElement)(a,b)),...Array.isArray(i)?i:[i]])),i=(a,b)=>{let c=(0,d.forwardRef)(({className:c,...g},i)=>(0,d.createElement)(h,{ref:i,iconNode:b,className:f(`lucide-${e(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,c),...g}));return c.displayName=e(a),c}},74446:(a,b,c)=>{c.d(b,{B:()=>f,a:()=>e});var d=c(72291);let e=(0,d.AH)`
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

  ${a=>"error"===a.$state?"\n        border-color: var(--privy-color-error);\n        background: var(--privy-color-error-bg);\n      ":""}
`,f=d.I4.div`
  ${e}
`},78007:(a,b,c)=>{c.d(b,{W:()=>g});var d=c(66150),e=c(39820),f=c(72291);let g=({children:a,theme:b})=>(0,d.jsxs)(h,{$theme:b,children:[(0,d.jsx)(e.A,{width:"20px",height:"20px",color:"var(--privy-color-icon-warning)",strokeWidth:2,style:{flexShrink:0}}),(0,d.jsx)(i,{$theme:b,children:a})]}),h=f.I4.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-warn-bg);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,i=f.I4.div`
  color: ${a=>"dark"===a.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`},94713:(a,b,c)=>{c.d(b,{E:()=>e});var d=c(72291);let e=d.I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},99062:(a,b,c)=>{c.d(b,{S:()=>g});var d=c(66150),e=c(55164),f=c(45172);let g=({primaryCta:a,secondaryCta:b,helpText:c,watermark:g=!0,children:h,...i})=>{let j=a||b?(0,d.jsxs)(d.Fragment,{children:[a&&(()=>{let{label:b,...c}=a,f=c.variant||"primary";return(0,d.jsx)(e.a,{...c,variant:f,style:{width:"100%",...c.style},children:b})})(),b&&(()=>{let{label:a,...c}=b,f=c.variant||"secondary";return(0,d.jsx)(e.a,{...c,variant:f,style:{width:"100%",...c.style},children:a})})()]}):null;return(0,d.jsxs)(f.S,{id:i.id,className:i.className,children:[(0,d.jsx)(f.S.Header,{...i}),h?(0,d.jsx)(f.S.Body,{children:h}):null,c||j||g?(0,d.jsxs)(f.S.Footer,{children:[c?(0,d.jsx)(f.S.HelpText,{children:c}):null,j?(0,d.jsx)(f.S.Actions,{children:j}):null,g?(0,d.jsx)(f.S.Watermark,{}):null]}):null]})}}};